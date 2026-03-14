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
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-6 sm:p-8 text-white">
        {/* Decorative background elements */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -left-6 bottom-0 h-28 w-28 rounded-full bg-pink-500/20 blur-2xl" />
        <div className="absolute right-1/3 top-1/2 h-20 w-20 rounded-full bg-orange-400/10 blur-xl" />

        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-violet-200">
                Welcome back
              </p>
              <h1 className="mt-1 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Mental Models
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <StreakCounter streak={progress.currentStreak} />
              <Link
                to="/profile"
                className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white shadow-lg shadow-violet-900/30 ring-2 ring-white/30 backdrop-blur-sm transition-all hover:scale-110 hover:ring-white/50"
              >
                <span className="absolute -inset-1 animate-pulse rounded-full bg-white/10" />
                <span className="relative">Lv.{level}</span>
              </Link>
            </div>
          </div>

          {/* XP Bar */}
          <div className="mt-6">
            <XPBar totalXP={progress.totalXP} />
          </div>
        </div>
      </div>

      {/* Daily Challenge */}
      {dailyModel && (
        <Link
          to={`/learn/${dailyModel.id}`}
          className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-6 text-white shadow-xl shadow-violet-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-1"
        >
          {/* Sparkle decorations */}
          <div className="absolute right-6 top-4 animate-pulse text-yellow-300/60">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="absolute right-16 top-10 animate-pulse text-pink-300/40" style={{ animationDelay: "0.5s" }}>
            <Sparkles className="h-3 w-3" />
          </div>
          <div className="absolute right-10 bottom-6 animate-pulse text-violet-200/40" style={{ animationDelay: "1s" }}>
            <Sparkles className="h-4 w-4" />
          </div>
          {/* Decorative circle */}
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5" />
          <div className="absolute -left-4 -bottom-4 h-24 w-24 rounded-full bg-white/5" />

          <div className="relative">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-200">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              Today's Challenge
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold leading-tight">
              <span className="mr-3 text-3xl sm:text-4xl">{dailyModel.emoji}</span>
              {dailyModel.title}
            </h2>
            <p className="mt-2 text-sm text-violet-100/80 max-w-lg">
              {dailyModel.eli5.hook}
            </p>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm animate-shimmer">
                  +25 Bonus XP
                </span>
                {isDailyCompleted && (
                  <span className="rounded-full bg-emerald-400/20 px-3 py-1.5 text-xs font-bold text-emerald-200 backdrop-blur-sm">
                    Completed
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-900/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30 group-hover:shadow-white/20 group-hover:scale-105">
                {isDailyCompleted ? "Review" : "Start"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="group rounded-2xl border border-white/10 bg-white/60 p-4 text-center backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900/60 dark:border-zinc-700/50">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-500/20">
            <BookOpen className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
            {completedCount}
          </div>
          <div className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">Models Learned</div>
        </div>
        <div className="group rounded-2xl border border-white/10 bg-white/60 p-4 text-center backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900/60 dark:border-zinc-700/50">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/20">
            <Target className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
            {avgQuizScore}%
          </div>
          <div className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">Quiz Average</div>
        </div>
        <div className="group rounded-2xl border border-white/10 bg-white/60 p-4 text-center backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900/60 dark:border-zinc-700/50">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-500/20">
            <Trophy className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
            {Object.values(progress.badges).filter((b) => b.earned).length}
          </div>
          <div className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">Badges Earned</div>
        </div>
        <div className="group rounded-2xl border border-white/10 bg-white/60 p-4 text-center backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-zinc-900/60 dark:border-zinc-700/50">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-500/20">
            <Flame className="h-5 w-5 text-orange-600 dark:text-orange-400" />
          </div>
          <div className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">
            {progress.currentStreak}
          </div>
          <div className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">Day Streak</div>
        </div>
      </div>

      {/* Review Prompt */}
      {reviewModelIds.length > 0 && (
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 p-6 text-white shadow-lg shadow-orange-400/20">
          {/* Decorative elements */}
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10" />
          <div className="absolute right-12 bottom-2 h-16 w-16 rounded-full bg-yellow-300/20 blur-lg" />

          <div className="relative z-10">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Flame className="h-5 w-5 animate-pulse text-white" />
              </div>
              <h3 className="text-lg font-extrabold">Time to Review!</h3>
            </div>
            <p className="mt-2 text-sm font-medium text-white/85">
              {reviewModelIds.length} model{reviewModelIds.length > 1 ? "s" : ""} ready
              for review. Strengthen your memory!
            </p>
            <Link
              to={`/learn/${reviewModelIds[0]}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-orange-600 shadow-lg shadow-orange-600/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-600/30"
            >
              Start Review <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Link
          to="/explore"
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 p-5 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/25"
        >
          {/* Decorative pattern */}
          <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full border-4 border-white/10" />
          <div className="absolute right-6 top-2 h-8 w-8 rounded-full border-2 border-white/10" />

          <div className="relative z-10">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-lg">
              Explore Categories
            </h3>
            <p className="mt-1 text-sm text-violet-100/80">
              Browse all 15 life areas
            </p>
          </div>
        </Link>
        <Link
          to="/profile"
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-5 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/25"
        >
          {/* Decorative pattern */}
          <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full border-4 border-white/10" />
          <div className="absolute right-6 top-2 h-8 w-8 rounded-full border-2 border-white/10" />

          <div className="relative z-10">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <Trophy className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-lg">
              Your Progress
            </h3>
            <p className="mt-1 text-sm text-amber-100/80">
              View badges & stats
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
