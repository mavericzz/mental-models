import { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Trophy, Zap, Flame, Target, BookOpen, ArrowRight } from "lucide-react";
import { getModelById, getModelsByCategory } from "../data/models";
import { categories } from "../data/categories";
import { useProgressContext } from "../context/ProgressContext";
import { AhaReveal } from "../components/AhaReveal";
import { ExerciseRunner } from "../components/exercises/ExerciseRunner";
import { Confetti } from "../components/Confetti";
import { XPBar } from "../components/XPBar";
import { NextModelTeaser } from "../components/NextModelTeaser";
import { calculateLessonXP } from "../lib/xp";
import { getDailyChallengeModelId } from "../lib/daily-challenge";
import { getAllModels } from "../data/models";

type LessonStep = "learn" | "quiz" | "results";

const stepMeta = [
  { key: "learn" as const, label: "Learn", icon: BookOpen },
  { key: "quiz" as const, label: "Quiz", icon: Target },
  { key: "results" as const, label: "Results", icon: Trophy },
];

const xpIcons = [
  <Zap className="h-4 w-4 text-violet-500" />,
  <Target className="h-4 w-4 text-emerald-500" />,
  <Star className="h-4 w-4 text-amber-500" />,
  <Flame className="h-4 w-4 text-orange-500" />,
  <Trophy className="h-4 w-4 text-pink-500" />,
];

export function LearnPage() {
  const { modelId } = useParams<{ modelId: string }>();
  const navigate = useNavigate();
  const { progress, completeModel, updateStreak } = useProgressContext();
  const [step, setStep] = useState<LessonStep>("learn");
  const [showConfetti, setShowConfetti] = useState(false);
  const [lessonResult, setLessonResult] = useState<{
    total: number;
    breakdown: { label: string; xp: number }[];
    scores: boolean[];
  } | null>(null);

  const model = modelId ? getModelById(modelId) : undefined;

  const allModelIds = useMemo(() => getAllModels().map((m) => m.id), []);
  const dailyModelId = getDailyChallengeModelId(allModelIds);
  const isDailyChallenge = modelId === dailyModelId;

  const nextModel = useMemo(() => {
    if (!model) return undefined;
    const categoryModels = getModelsByCategory(model.categoryId);
    const currentIndex = categoryModels.findIndex((m) => m.id === model.id);
    return categoryModels[currentIndex + 1];
  }, [model]);

  const category = model
    ? categories.find((c) => c.id === model.categoryId)
    : undefined;

  if (!model) {
    return (
      <div className="py-12 text-center">
        <p className="text-zinc-500">Model not found</p>
        <Link to="/explore" className="mt-4 inline-block text-violet-500 hover:underline">
          Back to Explore
        </Link>
      </div>
    );
  }

  const handleQuizComplete = (scores: boolean[]) => {
    const correctCount = scores.filter(Boolean).length;
    const isPerfect = correctCount === scores.length;
    const quizScore = Math.round((correctCount / scores.length) * 100);

    const { total, breakdown } = calculateLessonXP(
      correctCount,
      scores.length,
      isPerfect,
      isDailyChallenge,
      progress.currentStreak
    );

    completeModel(model.id, quizScore, scores.map((s) => (s ? 1 : 0)), total);
    updateStreak();

    setLessonResult({ total, breakdown, scores });
    setStep("results");
    setShowConfetti(true);
  };

  const stepIndex = stepMeta.findIndex((s) => s.key === step);

  return (
    <div className="space-y-8">
      <Confetti fire={showConfetti} />

      {/* Back nav + Category badge */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-600 transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        {category && (
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            {category.name}
          </span>
        )}
      </div>

      {/* Hero header */}
      <div className="text-center">
        <span className="text-6xl drop-shadow-lg float-3d inline-block">{model.emoji}</span>
        <h1 className="mt-3 text-3xl font-bold gradient-text">
          {model.title}
        </h1>
        {isDailyChallenge && (
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg animate-pulse-glow">
            <Star className="h-3.5 w-3.5" />
            Daily Challenge
          </span>
        )}
      </div>

      {/* Step journey bar */}
      <div className="mx-auto flex max-w-md items-center justify-between px-4">
        {stepMeta.map((s, i) => {
          const isCompleted = i < stepIndex;
          const isCurrent = i === stepIndex;
          const Icon = s.icon;
          return (
            <div key={s.key} className="flex flex-1 items-center">
              {/* Circle */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ${
                    isCompleted
                      ? "bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-3d [transform:translateZ(10px)]"
                      : isCurrent
                        ? "bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-3d animate-pulse-ring [transform:translateZ(15px)_scale(1.1)]"
                        : "border-2 border-zinc-300 bg-white text-zinc-400 dark:border-zinc-600 dark:bg-zinc-800"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span
                  className={`text-[11px] font-semibold ${
                    isCompleted || isCurrent
                      ? "text-violet-600 dark:text-violet-400"
                      : "text-zinc-400"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {/* Connector line */}
              {i < stepMeta.length - 1 && (
                <div className="mx-2 mb-5 h-0.5 flex-1">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      i < stepIndex
                        ? "bg-gradient-to-r from-violet-500 to-purple-500"
                        : "bg-zinc-200 dark:bg-zinc-700"
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Content */}
      {step === "learn" && (
        <AhaReveal eli5={model.eli5} onComplete={() => setStep("quiz")} />
      )}

      {step === "quiz" && (
        <ExerciseRunner
          exercises={model.exercises}
          onComplete={handleQuizComplete}
        />
      )}

      {step === "results" && lessonResult && (
        <div className="mx-auto max-w-lg space-y-8 animate-fade-in">
          {/* Celebration header */}
          <div className="text-center space-y-3">
            <span className="text-6xl block float-3d">🎉</span>
            <h2 className="text-4xl font-bold gradient-text">
              Lesson Complete!
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg">
              You scored{" "}
              <span className="font-bold text-violet-600 dark:text-violet-400">
                {lessonResult.scores.filter(Boolean).length}/{lessonResult.scores.length}
              </span>{" "}
              on the quiz
            </p>
          </div>

          {/* XP Breakdown - glass morphism card */}
          <div className="rounded-2xl glass-card dark:glass-card-dark p-6 shadow-3d-deep animate-tilt-in">
            <h3 className="mb-5 text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Zap className="h-5 w-5 text-violet-500" />
              XP Earned
            </h3>
            <div className="space-y-3">
              {lessonResult.breakdown.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between animate-count-up"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <span className="flex items-center gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                    {xpIcons[i % xpIcons.length]}
                    {item.label}
                  </span>
                  <span className="font-bold text-violet-600 dark:text-violet-400">
                    +{item.xp} XP
                  </span>
                </div>
              ))}
              <div className="border-t border-zinc-200/60 dark:border-zinc-700/60 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">
                    Total
                  </span>
                  <span className="text-3xl font-black gradient-text animate-glow-text">
                    +{lessonResult.total} XP
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Updated XP Bar with animated gradient */}
          <div className="rounded-2xl glass-card dark:glass-card-dark p-5 shadow-md">
            <XPBar totalXP={progress.totalXP} />
          </div>

          {/* Next Model */}
          {nextModel && (
            <div className="animate-slide-up" style={{ animationDelay: "300ms" }}>
              <NextModelTeaser model={nextModel} />
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4">
            <Link
              to="/explore"
              className="flex-1 rounded-full border-2 border-zinc-200 bg-white py-3.5 text-center font-semibold text-zinc-700 transition-all hover:border-violet-300 hover:text-violet-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-violet-600 dark:hover:text-violet-400"
            >
              Explore More
            </Link>
            <Link
              to="/"
              className="flex-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 py-3.5 text-center font-semibold text-white shadow-3d transition-all duration-300 hover:shadow-3d-hover hover:[transform:translateY(-2px)] active:[transform:translateY(2px)]"
            >
              Dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
