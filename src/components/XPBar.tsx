import { calculateLevel, xpProgress, xpForNextLevel } from "../lib/xp";
import { cn } from "../lib/utils";

interface XPBarProps {
  totalXP: number;
  className?: string;
  showLabel?: boolean;
}

export function XPBar({ totalXP, className, showLabel = true }: XPBarProps) {
  const level = calculateLevel(totalXP);
  const progress = xpProgress(totalXP);
  const nextLevelXP = xpForNextLevel(totalXP);

  return (
    <div className={cn("space-y-2", className)}>
      {showLabel && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
              LV {level}
            </span>
          </div>
          <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <span className="font-bold text-zinc-900 dark:text-zinc-100">{totalXP.toLocaleString()}</span>
            {" / "}
            {nextLevelXP.toLocaleString()} XP
          </span>
        </div>
      )}
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-zinc-200/80 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 transition-all duration-1000 ease-out"
          style={{ width: `${Math.max(progress, 2)}%` }}
        />
      </div>
    </div>
  );
}
