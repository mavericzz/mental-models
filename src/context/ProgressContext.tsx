import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { UserProgress, ModelProgress } from "../types/progress";
import { StorageService } from "../lib/storage";
import { checkStreak, addActivityToday, calculateFreezesEarned } from "../lib/streak";
import { calculateNextReview, getInitialReviewState } from "../lib/spaced-repetition";
import { UNLOCK_INITIAL_COUNT } from "../lib/constants";

function createDefaultProgress(): UserProgress {
  return {
    version: 1,
    userId: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    totalXP: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastActiveDate: "",
    streakFreezes: 0,
    models: {},
    badges: {},
    settings: {
      theme: "system",
      soundEnabled: false,
      dailyGoal: 1,
    },
    activityLog: [],
  };
}

interface ProgressContextType {
  progress: UserProgress;
  completeModel: (
    modelId: string,
    quizScore: number,
    exerciseScores: number[],
    xpEarned: number
  ) => void;
  addXP: (amount: number) => void;
  updateStreak: () => { streakBroken: boolean };
  getModelProgress: (modelId: string) => ModelProgress | undefined;
  isModelUnlocked: (modelId: string, categoryModelIds: string[]) => boolean;
  recordReview: (modelId: string, wasCorrect: boolean) => void;
  updateSettings: (settings: Partial<UserProgress["settings"]>) => void;
  resetProgress: () => void;
  earnBadge: (badgeId: string) => void;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = StorageService.get<UserProgress>("progress");
    return saved ?? createDefaultProgress();
  });

  const saveTimeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    if (saveTimeout.current) clearTimeout(saveTimeout.current);
    saveTimeout.current = setTimeout(() => {
      StorageService.set("progress", progress);
    }, 300);
    return () => {
      if (saveTimeout.current) clearTimeout(saveTimeout.current);
    };
  }, [progress]);

  const completeModel = useCallback(
    (
      modelId: string,
      quizScore: number,
      exerciseScores: number[],
      xpEarned: number
    ) => {
      setProgress((prev) => {
        const review = getInitialReviewState();
        const nextReview = calculateNextReview(true, 0, review.easeFactor);
        const newModels = {
          ...prev.models,
          [modelId]: {
            status: "completed" as const,
            completedAt: new Date().toISOString(),
            quizScore,
            exerciseScores,
            xpEarned,
            reviewCount: 0,
            nextReviewDate: nextReview.nextReviewDate,
            reviewInterval: nextReview.nextInterval,
            easeFactor: nextReview.newEaseFactor,
          },
        };
        const newLog = addActivityToday(prev.activityLog);
        const newFreezes = calculateFreezesEarned(newLog);
        return {
          ...prev,
          totalXP: prev.totalXP + xpEarned,
          models: newModels,
          activityLog: newLog,
          streakFreezes: newFreezes,
        };
      });
    },
    []
  );

  const addXP = useCallback((amount: number) => {
    setProgress((prev) => ({
      ...prev,
      totalXP: prev.totalXP + amount,
    }));
  }, []);

  const updateStreak = useCallback(() => {
    let streakBroken = false;
    setProgress((prev) => {
      if (!prev.lastActiveDate) {
        return {
          ...prev,
          currentStreak: 1,
          longestStreak: Math.max(1, prev.longestStreak),
          lastActiveDate: new Date().toISOString().slice(0, 10),
        };
      }
      const result = checkStreak(
        prev.lastActiveDate,
        prev.currentStreak,
        prev.streakFreezes
      );
      streakBroken = result.streakBroken;
      return {
        ...prev,
        currentStreak: result.streak,
        longestStreak: Math.max(result.streak, prev.longestStreak),
        lastActiveDate: new Date().toISOString().slice(0, 10),
        streakFreezes: prev.streakFreezes - result.freezesUsed,
      };
    });
    return { streakBroken };
  }, []);

  const getModelProgress = useCallback(
    (modelId: string) => progress.models[modelId],
    [progress.models]
  );

  const isModelUnlocked = useCallback(
    (modelId: string, categoryModelIds: string[]) => {
      const index = categoryModelIds.indexOf(modelId);
      if (index < UNLOCK_INITIAL_COUNT) return true;
      const previousModelId = categoryModelIds[index - 1];
      const previousProgress = progress.models[previousModelId];
      return previousProgress?.status === "completed";
    },
    [progress.models]
  );

  const recordReview = useCallback(
    (modelId: string, wasCorrect: boolean) => {
      setProgress((prev) => {
        const existing = prev.models[modelId];
        if (!existing) return prev;
        const result = calculateNextReview(
          wasCorrect,
          existing.reviewInterval,
          existing.easeFactor
        );
        return {
          ...prev,
          models: {
            ...prev.models,
            [modelId]: {
              ...existing,
              reviewCount: existing.reviewCount + 1,
              nextReviewDate: result.nextReviewDate,
              reviewInterval: result.nextInterval,
              easeFactor: result.newEaseFactor,
            },
          },
        };
      });
    },
    []
  );

  const updateSettings = useCallback(
    (settings: Partial<UserProgress["settings"]>) => {
      setProgress((prev) => ({
        ...prev,
        settings: { ...prev.settings, ...settings },
      }));
    },
    []
  );

  const resetProgress = useCallback(() => {
    setProgress(createDefaultProgress());
    StorageService.clear();
  }, []);

  const earnBadge = useCallback((badgeId: string) => {
    setProgress((prev) => ({
      ...prev,
      badges: {
        ...prev.badges,
        [badgeId]: {
          earned: true,
          earnedAt: new Date().toISOString(),
          seen: false,
        },
      },
    }));
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        completeModel,
        addXP,
        updateStreak,
        getModelProgress,
        isModelUnlocked,
        recordReview,
        updateSettings,
        resetProgress,
        earnBadge,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgressContext() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgressContext must be used within a ProgressProvider");
  }
  return context;
}
