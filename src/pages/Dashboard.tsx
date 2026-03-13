import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Target, Trophy, Flame, Sparkles } from "lucide-react";
import { useProgressContext } from "../context/ProgressContext";
import { StreakCounter } from "../components/StreakCounter";
import { XPBar } from "../components/XPBar";
import { calculateLevel } from "../lib/xp";
import { getDailyChallengeModelId } from "../lib/daily-challenge";
import { getModelsForReview } from "../lib/spaced-repetition";
import { getAllModels, getModelById } from "../data/models";

export default function Dashboard() {
  const { progress, updateStreak } = useProgressContext();

  useEffect(() => {
    updateStreak();
  }, [updateStreak]);

  const allModels = useMemo(() => getAllModels(), []);
  const allModelIds = useMemo(() => allModels.map((m) => m.id), [allModels]);
  const completedCount = Object.values(progress.models).filter(
    (m) => m.status === "completed"
  ).length;
  const level = calculateLevel(progress.totalXP);
  const reviewModelIds = getModelsForReview(progress.models);
  const dailyModelId = getDailyChallengeModelId(allModelIds);
  const dailyModel = getModelById(dailyModelId);
  const isDailyCompleted = progress.models[dailyModelId]?.status === "completed";

  const avgQuizScore = useMemo(() => {
    const scores = Object.values(progress.models)
      .filter((m) => m.quizScore !== undefined)
      .map((m) => m.quizScore!);
    return scores.length > 0
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
      : 0;
  }, [progress.models]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-zinc-400">
            Welcome back
          </p>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Mental Models
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <StreakCounter streak={progress.currentStreak} />
          <Link
            to="/profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white"
          >
            Lv.{level}
          </Link>
        </div>
      </div>

      {/* XP Bar */}
      <XPBar totalXP={progress.totalXP} />

      {/* Daily Challenge */}
      {dailyModel && (
        <Link
          to={`/learn/${dailyModel.id}`}
          className="group block overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 text-white transition-all hover:shadow-xl dark:from-zinc-800 dark:to-zinc-700"
        >
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-500/10" />
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-400">
              <Sparkles className="h-4 w-4" />
              Today's Challenge
            </div>
            <h2 className="mt-2 text-xl font-bold">
              <span className="mr-2">{dailyModel.emoji}</span>
              {dailyModel.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-400">{dailyModel.eli5.hook}</p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-indigo-500/20 px-2.5 py-1 text-xs font-medium text-indigo-300">
                  +25 Bonus XP
                </span>
                {isDailyCompleted && (
                  <span className="rounded-lg bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300">
                    Completed
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-sm font-medium text-zinc-300 transition-transform group-hover:translate-x-1">
                {isDailyCompleted ? "Review" : "Start Learning"}
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <BookOpen className="mx-auto mb-2 h-5 w-5 text-indigo-500" />
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {completedCount}
          </div>
          <div className="text-xs text-zinc-500">Models Learned</div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <Target className="mx-auto mb-2 h-5 w-5 text-emerald-500" />
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {avgQuizScore}%
          </div>
          <div className="text-xs text-zinc-500">Quiz Average</div>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <Trophy className="mx-auto mb-2 h-5 w-5 text-amber-500" />
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            {Object.values(progress.badges).filter((b) => b.earned).length}
          </div>
          <div className="text-xs text-zinc-500">Badges Earned</div>
        </div>
      </div>

      {/* Review Prompt */}
      {reviewModelIds.length > 0 && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <Flame className="h-5 w-5" />
            <h3 className="font-semibold">Time to Review!</h3>
          </div>
          <p className="mt-1 text-sm text-amber-600 dark:text-amber-500">
            {reviewModelIds.length} model{reviewModelIds.length > 1 ? "s" : ""} ready
            for review. Strengthen your memory!
          </p>
          <Link
            to={`/learn/${reviewModelIds[0]}`}
            className="mt-3 inline-flex items-center gap-1 rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
          >
            Start Review <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Link
          to="/explore"
          className="rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <BookOpen className="mb-2 h-6 w-6 text-indigo-500" />
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
            Explore Categories
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            Browse all 15 life areas
          </p>
        </Link>
        <Link
          to="/profile"
          className="rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:shadow-md hover:-translate-y-0.5 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <Trophy className="mb-2 h-6 w-6 text-amber-500" />
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
            Your Progress
          </h3>
          <p className="mt-1 text-sm text-zinc-500">
            View badges & stats
          </p>
        </Link>
      </div>
    </div>
  );
}
