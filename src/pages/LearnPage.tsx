import { useState, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Star } from "lucide-react";
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
        <Link to="/explore" className="mt-4 inline-block text-indigo-500 hover:underline">
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

  return (
    <div className="space-y-6">
      <Confetti fire={showConfetti} />

      {/* Back nav */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        {category && (
          <span className="rounded-lg bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
            {category.name}
          </span>
        )}
      </div>

      {/* Model header */}
      <div className="text-center">
        <span className="text-4xl">{model.emoji}</span>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          {model.title}
        </h1>
        {isDailyChallenge && (
          <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400">
            <Star className="h-3 w-3" />
            Daily Challenge
          </span>
        )}
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2">
        {["Learn", "Quiz", "Results"].map((label, i) => {
          const stepIndex = ["learn", "quiz", "results"].indexOf(step);
          return (
            <div key={label} className="flex flex-1 items-center gap-2">
              <div
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  i <= stepIndex
                    ? "bg-indigo-500"
                    : "bg-zinc-200 dark:bg-zinc-700"
                }`}
              />
              <span
                className={`text-xs font-medium ${
                  i <= stepIndex
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-zinc-400"
                }`}
              >
                {label}
              </span>
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
        <div className="mx-auto max-w-lg space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
              Lesson Complete!
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              You scored{" "}
              {lessonResult.scores.filter(Boolean).length}/
              {lessonResult.scores.length} on the quiz
            </p>
          </div>

          {/* XP Breakdown */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              XP Earned
            </h3>
            <div className="space-y-3">
              {lessonResult.breakdown.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {item.label}
                  </span>
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                    +{item.xp} XP
                  </span>
                </div>
              ))}
              <div className="border-t border-zinc-200 pt-3 dark:border-zinc-700">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Total
                  </span>
                  <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    +{lessonResult.total} XP
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Updated XP Bar */}
          <XPBar totalXP={progress.totalXP} />

          {/* Next Model */}
          {nextModel && <NextModelTeaser model={nextModel} />}

          {/* Actions */}
          <div className="flex gap-3">
            <Link
              to="/explore"
              className="flex-1 rounded-xl border border-zinc-200 bg-white py-3 text-center font-semibold text-zinc-700 transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            >
              Explore More
            </Link>
            <Link
              to="/"
              className="flex-1 rounded-xl bg-indigo-600 py-3 text-center font-semibold text-white transition-all hover:bg-indigo-700"
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
