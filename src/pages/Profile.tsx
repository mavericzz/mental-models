import { useMemo } from "react";
import { useProgressContext } from "../context/ProgressContext";
import { XPBar } from "../components/XPBar";
import { StreakCounter } from "../components/StreakCounter";
import { ProgressRing } from "../components/ProgressRing";
import { calculateLevel } from "../lib/xp";
import { badges } from "../data/badges";
import { categories } from "../data/categories";
import { getModelsByCategory, getAllModels } from "../data/models";
import { cn } from "../lib/utils";
import { Settings, RotateCcw, Volume2, VolumeX, Sun, Moon, Monitor } from "lucide-react";

export function Profile() {
  const { progress, updateSettings, resetProgress } = useProgressContext();
  const level = calculateLevel(progress.totalXP);

  const totalModels = getAllModels().length;
  const completedCount = Object.values(progress.models).filter(
    (m) => m.status === "completed"
  ).length;

  const streakCalendar = useMemo(() => {
    const days: { date: string; active: boolean }[] = [];
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      days.push({ date: dateStr, active: progress.activityLog.includes(dateStr) });
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Your Profile
        </h1>
        <StreakCounter streak={progress.currentStreak} />
      </div>

      {/* Level & XP */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center gap-6">
          <ProgressRing value={Math.round((completedCount / totalModels) * 100)} size={80} strokeWidth={6}>
            <div className="text-center">
              <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                Lv.{level}
              </div>
            </div>
          </ProgressRing>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {progress.totalXP.toLocaleString()} XP
            </h2>
            <p className="text-sm text-zinc-500">
              {completedCount}/{totalModels} models completed
            </p>
            <div className="mt-2">
              <XPBar totalXP={progress.totalXP} showLabel={false} />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {progress.currentStreak}
          </div>
          <div className="text-xs text-zinc-500">Current Streak</div>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {progress.longestStreak}
          </div>
          <div className="text-xs text-zinc-500">Longest Streak</div>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {progress.streakFreezes}
          </div>
          <div className="text-xs text-zinc-500">Streak Freezes</div>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-4 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {Object.values(progress.badges).filter((b) => b.earned).length}
          </div>
          <div className="text-xs text-zinc-500">Badges</div>
        </div>
      </div>

      {/* Streak Calendar */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-100">
          Last 30 Days
        </h3>
        <div className="grid grid-cols-10 gap-1.5">
          {streakCalendar.map((day) => (
            <div
              key={day.date}
              title={day.date}
              className={cn(
                "aspect-square rounded-sm transition-colors",
                day.active
                  ? "bg-indigo-500"
                  : "bg-zinc-100 dark:bg-zinc-800"
              )}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-sm bg-zinc-100 dark:bg-zinc-800" />
            No activity
          </div>
          <div className="flex items-center gap-1">
            <div className="h-2.5 w-2.5 rounded-sm bg-indigo-500" />
            Active day
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-100">
          Badges ({Object.values(progress.badges).filter((b) => b.earned).length}/{badges.length})
        </h3>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 md:grid-cols-6">
          {badges.map((badge) => {
            const earned = progress.badges[badge.id]?.earned;
            return (
              <div
                key={badge.id}
                className={cn(
                  "flex flex-col items-center rounded-xl p-3 text-center transition-all",
                  earned
                    ? "bg-indigo-50 dark:bg-indigo-950/30"
                    : "bg-zinc-50 opacity-40 dark:bg-zinc-800/50"
                )}
                title={badge.description}
              >
                <span className="text-2xl">{earned ? badge.emoji : "?"}</span>
                <span className="mt-1 text-[10px] font-medium text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {badge.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Skills */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-100">
          Category Progress
        </h3>
        <div className="space-y-3">
          {categoryProgress.map((cat) => (
            <div key={cat.id} className="flex items-center gap-3">
              <span className="w-36 truncate text-sm text-zinc-600 dark:text-zinc-400">
                {cat.name}
              </span>
              <div className="flex-1">
                <div className="h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className="h-full rounded-full bg-indigo-500 transition-all"
                    style={{
                      width: `${cat.total > 0 ? (cat.completed / cat.total) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>
              <span className="text-xs text-zinc-400">
                {cat.completed}/{cat.total}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-4 flex items-center gap-2">
          <Settings className="h-5 w-5 text-zinc-400" />
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
            Settings
          </h3>
        </div>

        <div className="space-y-4">
          {/* Theme */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-700 dark:text-zinc-300">Theme</span>
            <div className="flex gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
              {[
                { value: "system" as const, icon: Monitor },
                { value: "light" as const, icon: Sun },
                { value: "dark" as const, icon: Moon },
              ].map(({ value, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => updateSettings({ theme: value })}
                  className={cn(
                    "rounded-md p-1.5 transition-all",
                    progress.settings.theme === value
                      ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-zinc-100"
                      : "text-zinc-400 hover:text-zinc-600"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Sound */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-700 dark:text-zinc-300">
              Sound Effects
            </span>
            <button
              onClick={() =>
                updateSettings({ soundEnabled: !progress.settings.soundEnabled })
              }
              className={cn(
                "rounded-lg p-2 transition-all",
                progress.settings.soundEnabled
                  ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400"
                  : "bg-zinc-100 text-zinc-400 dark:bg-zinc-800"
              )}
            >
              {progress.settings.soundEnabled ? (
                <Volume2 className="h-4 w-4" />
              ) : (
                <VolumeX className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Reset */}
          <div className="border-t border-zinc-200 pt-4 dark:border-zinc-700">
            <button
              onClick={() => {
                if (window.confirm("Reset all progress? This cannot be undone.")) {
                  resetProgress();
                }
              }}
              className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600"
            >
              <RotateCcw className="h-4 w-4" />
              Reset All Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
