import { useMemo, useState } from "react";
import { useProgressContext } from "../context/ProgressContext";
import { StreakCounter } from "../components/StreakCounter";
import { calculateLevel } from "../lib/xp";
import { badges } from "../data/badges";
import { categories } from "../data/categories";
import { getModelsByCategory, getAllModels } from "../data/models";
import { cn } from "../lib/utils";
import {
  Settings,

  Volume2,
  VolumeX,
  Sun,
  Moon,
  Monitor,
  Flame,
  Trophy,
  Zap,
  Target,
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const categoryColorMap: Record<string, { bar: string; text: string }> = {
  emerald: { bar: "from-emerald-500 to-emerald-400", text: "text-emerald-500" },
  rose: { bar: "from-rose-500 to-rose-400", text: "text-rose-500" },
  pink: { bar: "from-pink-500 to-pink-400", text: "text-pink-500" },
  blue: { bar: "from-blue-500 to-blue-400", text: "text-blue-500" },
  violet: { bar: "from-violet-500 to-violet-400", text: "text-violet-500" },
  amber: { bar: "from-amber-500 to-amber-400", text: "text-amber-500" },
  yellow: { bar: "from-yellow-500 to-yellow-400", text: "text-yellow-500" },
  cyan: { bar: "from-cyan-500 to-cyan-400", text: "text-cyan-500" },
  orange: { bar: "from-orange-500 to-orange-400", text: "text-orange-500" },
  teal: { bar: "from-teal-500 to-teal-400", text: "text-teal-500" },
  indigo: { bar: "from-indigo-500 to-indigo-400", text: "text-indigo-500" },
  purple: { bar: "from-purple-500 to-purple-400", text: "text-purple-500" },
  red: { bar: "from-red-500 to-red-400", text: "text-red-500" },
  sky: { bar: "from-sky-500 to-sky-400", text: "text-sky-500" },
  lime: { bar: "from-lime-500 to-lime-400", text: "text-lime-500" },
};

const categoryIconMap: Record<string, string> = {
  DollarSign: "$",
  Heart: "\u2764\ufe0f",
  Users: "\ud83d\udc65",
  Briefcase: "\ud83d\udcbc",
  Brain: "\ud83e\udde0",
  Handshake: "\ud83e\udd1d",
  Lightbulb: "\ud83d\udca1",
  GraduationCap: "\ud83c\udf93",
  Clock: "\u23f0",
  MessageCircle: "\ud83d\udcac",
  Atom: "\u269b\ufe0f",
  Network: "\ud83d\udd17",
  Dice5: "\ud83c\udfb2",
  Crown: "\ud83d\udc51",
  Repeat: "\ud83d\udd01",
};

export function Profile() {
  const { progress, updateSettings, resetProgress } = useProgressContext();
  const level = calculateLevel(progress.totalXP);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const totalModels = getAllModels().length;
  const completedCount = Object.values(progress.models).filter(
    (m) => m.status === "completed"
  ).length;

  const earnedBadgeCount = Object.values(progress.badges).filter((b) => b.earned).length;

  const streakCalendar = useMemo(() => {
    const days: { date: string; active: boolean; isToday: boolean }[] = [];
    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      days.push({
        date: dateStr,
        active: progress.activityLog.includes(dateStr),
        isToday: dateStr === todayStr,
      });
    }
    return days;
  }, [progress.activityLog]);

  const categoryProgress = useMemo(
    () =>
      categories.map((cat) => {
        const models = getModelsByCategory(cat.id);
        const completed = models.filter(
          (m) => progress.models[m.id]?.status === "completed"
        ).length;
        return { ...cat, completed, total: models.length };
      }),
    [progress.models]
  );

  const completionPercent = totalModels > 0 ? Math.round((completedCount / totalModels) * 100) : 0;

  // Find next unearned badge for "progress toward next badge"
  const nextBadge = useMemo(() => {
    return badges.find((b) => !progress.badges[b.id]?.earned);
  }, [progress.badges]);

  return (
    <div className="space-y-8 pb-8">
      {/* Profile Header */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-6 sm:p-8 shadow-2xl shadow-violet-500/20">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-orange-400/20 blur-2xl" />
          <div className="absolute right-1/4 top-1/3 h-24 w-24 rounded-full bg-pink-400/10 blur-xl" />
        </div>

        <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-center">
          {/* Animated Progress Ring */}
          <div className="relative flex-shrink-0">
            <svg width={120} height={120} className="-rotate-90">
              <defs>
                <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="50%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <circle
                cx={60}
                cy={60}
                r={52}
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth={8}
              />
              <circle
                cx={60}
                cy={60}
                r={52}
                fill="none"
                stroke="url(#ringGradient)"
                strokeWidth={8}
                strokeDasharray={2 * Math.PI * 52}
                strokeDashoffset={2 * Math.PI * 52 - (completionPercent / 100) * 2 * Math.PI * 52}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-black text-white">
                  {level}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">
                  Level
                </div>
              </div>
            </div>
          </div>

          {/* XP & Progress Info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-baseline justify-center gap-1 sm:justify-start">
              <span className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                {progress.totalXP.toLocaleString()}
              </span>
              <span className="text-lg font-bold text-white/50">XP</span>
            </div>
            <p className="mt-1 text-sm text-white/60">
              {completedCount}
              <span className="text-white/40"> / </span>
              {totalModels} models completed
            </p>
            {/* Models progress bar */}
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-400 via-pink-400 to-violet-400 transition-all duration-700 ease-out"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-xs text-white/40">{completionPercent}% complete</span>
              <StreakCounter streak={progress.currentStreak} className="!bg-white/15 !text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {[
          {
            icon: Flame,
            value: progress.currentStreak,
            label: "Current Streak",
            gradient: "from-orange-500 to-amber-400",
            bg: "bg-orange-500/10",
          },
          {
            icon: Trophy,
            value: progress.longestStreak,
            label: "Longest Streak",
            gradient: "from-yellow-500 to-orange-400",
            bg: "bg-yellow-500/10",
          },
          {
            icon: Shield,
            value: progress.streakFreezes,
            label: "Streak Freezes",
            gradient: "from-cyan-500 to-blue-400",
            bg: "bg-cyan-500/10",
          },
          {
            icon: Zap,
            value: earnedBadgeCount,
            label: "Badges Earned",
            gradient: "from-violet-500 to-purple-400",
            bg: "bg-violet-500/10",
          },
        ].map(({ icon: Icon, value, label, gradient, bg }) => (
          <div
            key={label}
            className="group rounded-2xl border border-white/10 bg-white/60 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/5 dark:border-white/5 dark:bg-zinc-900/60 sm:p-5"
          >
            <div className={cn("mb-3 inline-flex rounded-xl p-2.5", bg)}>
              <div className={cn("rounded-lg bg-gradient-to-br p-2", gradient)}>
                <Icon className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="text-3xl font-black text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              {value}
            </div>
            <div className="mt-0.5 text-xs font-medium text-zinc-400 dark:text-zinc-500">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Streak Calendar */}
      <div className="rounded-2xl border border-white/10 bg-white/60 p-6 backdrop-blur-xl dark:border-white/5 dark:bg-zinc-900/60">
        <div className="mb-5 flex items-center gap-2">
          <div className="rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 p-1.5">
            <Flame className="h-4 w-4 text-white" />
          </div>
          <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
            30-Day Activity
          </h3>
        </div>
        <div className="grid grid-cols-10 gap-2">
          {streakCalendar.map((day) => (
            <div
              key={day.date}
              title={day.date}
              className="relative"
            >
              <div
                className={cn(
                  "aspect-square rounded-md transition-all duration-200",
                  day.active && day.isToday
                    ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-md shadow-violet-500/30"
                    : day.active
                      ? "bg-gradient-to-br from-violet-400/70 to-purple-500/70"
                      : "bg-zinc-100 dark:bg-zinc-800/60",
                  day.isToday && "ring-2 ring-orange-400 ring-offset-1 ring-offset-white dark:ring-offset-zinc-900"
                )}
              />
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-sm bg-zinc-100 dark:bg-zinc-800/60" />
            <span>No activity</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-sm bg-gradient-to-br from-violet-400/70 to-purple-500/70" />
            <span>Active day</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-sm bg-gradient-to-br from-violet-500 to-fuchsia-500 ring-2 ring-orange-400 ring-offset-1 ring-offset-white dark:ring-offset-zinc-900" />
            <span>Today</span>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="rounded-2xl border border-white/10 bg-white/60 p-6 backdrop-blur-xl dark:border-white/5 dark:bg-zinc-900/60">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-gradient-to-br from-violet-500 to-purple-400 p-1.5">
              <Trophy className="h-4 w-4 text-white" />
            </div>
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
              Badges
            </h3>
            <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-semibold text-violet-600 dark:bg-violet-950/50 dark:text-violet-400">
              {earnedBadgeCount}/{badges.length}
            </span>
          </div>
        </div>

        {/* Progress toward next badge */}
        {nextBadge && (
          <div className="mb-5 rounded-xl bg-gradient-to-r from-violet-50 to-purple-50 p-3 dark:from-violet-950/20 dark:to-purple-950/20">
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
              <Target className="h-3.5 w-3.5 text-violet-500" />
              <span>
                Next badge: <span className="font-semibold text-zinc-700 dark:text-zinc-300">{nextBadge.emoji} {nextBadge.name}</span>
              </span>
            </div>
            <p className="mt-1 text-[11px] text-zinc-400 dark:text-zinc-500">{nextBadge.description}</p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6">
          {badges.map((badge) => {
            const earned = progress.badges[badge.id]?.earned;
            return (
              <div
                key={badge.id}
                className={cn(
                  "group relative flex flex-col items-center rounded-xl p-3 text-center transition-all duration-300",
                  earned
                    ? "bg-gradient-to-br from-violet-100 to-purple-100 hover:shadow-lg hover:shadow-violet-500/15 hover:-translate-y-0.5 dark:from-violet-950/40 dark:to-purple-950/40"
                    : "bg-zinc-50 dark:bg-zinc-800/40"
                )}
                title={badge.description}
              >
                {earned ? (
                  <>
                    <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                      {badge.emoji}
                    </span>
                    <span className="mt-1.5 text-[10px] font-semibold text-zinc-700 dark:text-zinc-300 line-clamp-2">
                      {badge.name}
                    </span>
                  </>
                ) : (
                  <>
                    <div className="relative">
                      <span className="text-3xl opacity-20 blur-[2px]">{badge.emoji}</span>
                      <Lock className="absolute inset-0 m-auto h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                    </div>
                    <span className="mt-1.5 text-[10px] font-medium text-zinc-400 dark:text-zinc-600 line-clamp-2">
                      {badge.name}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Progress */}
      <div className="rounded-2xl border border-white/10 bg-white/60 p-6 backdrop-blur-xl dark:border-white/5 dark:bg-zinc-900/60">
        <div className="mb-5 flex items-center gap-2">
          <div className="rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-400 p-1.5">
            <Target className="h-4 w-4 text-white" />
          </div>
          <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
            Category Progress
          </h3>
        </div>
        <div className="space-y-4">
          {categoryProgress.map((cat) => {
            const percent = cat.total > 0 ? Math.round((cat.completed / cat.total) * 100) : 0;
            const isComplete = cat.completed === cat.total && cat.total > 0;
            const colors = categoryColorMap[cat.color] || { bar: "from-zinc-500 to-zinc-400", text: "text-zinc-500" };
            const iconEmoji = categoryIconMap[cat.icon] || "";
            return (
              <div key={cat.id} className="group">
                <div className="mb-1.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{iconEmoji}</span>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {cat.name}
                    </span>
                    {isComplete && (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    )}
                  </div>
                  <span className="text-xs font-semibold text-zinc-400">
                    {percent}%
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800/60">
                  <div
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out",
                      colors.bar
                    )}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Settings */}
      <div className="rounded-2xl border border-white/10 bg-white/60 p-6 backdrop-blur-xl dark:border-white/5 dark:bg-zinc-900/60">
        <div className="mb-5 flex items-center gap-2">
          <div className="rounded-lg bg-gradient-to-br from-zinc-500 to-zinc-400 p-1.5">
            <Settings className="h-4 w-4 text-white" />
          </div>
          <h3 className="font-bold text-zinc-900 dark:text-zinc-100">
            Settings
          </h3>
        </div>

        <div className="space-y-5">
          {/* Theme Toggle - Segmented Control */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Theme
            </span>
            <div className="relative flex gap-0.5 rounded-xl bg-zinc-100 p-1 dark:bg-zinc-800">
              {/* Sliding indicator */}
              <div
                className="absolute top-1 h-[calc(100%-8px)] w-[calc(33.33%-2px)] rounded-lg bg-white shadow-sm transition-all duration-300 ease-out dark:bg-zinc-700"
                style={{
                  left: `calc(${
                    progress.settings.theme === "system"
                      ? "0%"
                      : progress.settings.theme === "light"
                        ? "33.33%"
                        : "66.66%"
                  } + 4px)`,
                }}
              />
              {[
                { value: "system" as const, icon: Monitor, label: "Auto" },
                { value: "light" as const, icon: Sun, label: "Light" },
                { value: "dark" as const, icon: Moon, label: "Dark" },
              ].map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  onClick={() => updateSettings({ theme: value })}
                  className={cn(
                    "relative z-10 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-200",
                    progress.settings.theme === value
                      ? "text-zinc-900 dark:text-zinc-100"
                      : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Sound Toggle - Modern Switch */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {progress.settings.soundEnabled ? (
                <Volume2 className="h-4 w-4 text-violet-500" />
              ) : (
                <VolumeX className="h-4 w-4 text-zinc-400" />
              )}
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Sound Effects
              </span>
            </div>
            <button
              onClick={() =>
                updateSettings({ soundEnabled: !progress.settings.soundEnabled })
              }
              className={cn(
                "relative h-7 w-12 rounded-full transition-colors duration-300",
                progress.settings.soundEnabled
                  ? "bg-gradient-to-r from-violet-500 to-purple-500"
                  : "bg-zinc-200 dark:bg-zinc-700"
              )}
            >
              <div
                className={cn(
                  "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300",
                  progress.settings.soundEnabled ? "translate-x-5" : "translate-x-0.5"
                )}
              />
            </button>
          </div>

          {/* Reset - with separator and confirmation */}
          <div className="border-t border-zinc-200/60 pt-5 dark:border-zinc-700/60">
            {!showResetConfirm ? (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-medium text-red-500 transition-all duration-200 hover:bg-red-50 hover:border-red-300 dark:border-red-900/50 dark:hover:bg-red-950/30"
              >
                <AlertTriangle className="h-4 w-4" />
                Reset All Progress
              </button>
            ) : (
              <div className="rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/20">
                <p className="mb-3 text-sm font-medium text-red-600 dark:text-red-400">
                  Are you sure? This will erase all your progress, badges, and streaks. This cannot be undone.
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      resetProgress();
                      setShowResetConfirm(false);
                    }}
                    className="rounded-lg bg-red-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-600"
                  >
                    Yes, Reset Everything
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="rounded-lg bg-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
