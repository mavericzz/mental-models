import { Flame } from "lucide-react";
import { cn } from "../lib/utils";

interface StreakCounterProps {
  streak: number;
  className?: string;
}

export function StreakCounter({ streak, className }: StreakCounterProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-bold transition-all",
        streak > 0
          ? "bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 shadow-sm dark:from-orange-950/60 dark:to-amber-950/60 dark:text-orange-400"
          : "bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500",
        className
      )}
    >
      <Flame
        className={cn(
          "h-4 w-4 transition-all",
          streak > 0
            ? "fill-orange-500 text-orange-500 drop-shadow-[0_0_6px_rgba(249,115,22,0.5)]"
            : "text-zinc-400 dark:text-zinc-600"
        )}
      />
      <span>{streak}</span>
      {streak > 0 && (
        <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-500/70 dark:text-orange-400/60">
          day{streak !== 1 ? "s" : ""}
        </span>
      )}
    </div>
  );
}
