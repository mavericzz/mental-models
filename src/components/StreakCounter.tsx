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
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold",
        streak > 0
          ? "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-400"
          : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400",
        className
      )}
    >
      <Flame
        className={cn(
          "h-4 w-4",
          streak > 0 ? "text-orange-500" : "text-zinc-400 dark:text-zinc-500"
        )}
      />
      <span>{streak}</span>
    </div>
  );
}
