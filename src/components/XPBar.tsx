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
    <div className={cn("space-y-1", className)}>
      {showLabel && (
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Level {level}
          </span>
          <span className="text-zinc-500 dark:text-zinc-400">
            {totalXP} / {nextLevelXP} XP
          </span>
        </div>
      )}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-indigo-400 transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
