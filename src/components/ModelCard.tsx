import { Link } from "react-router-dom";
import { Lock, Check, Clock } from "lucide-react";
import type { MentalModel } from "../types/models";
import { cn } from "../lib/utils";

interface ModelCardProps {
  model: MentalModel;
  isCompleted: boolean;
  isLocked: boolean;
  index: number;
}

const difficultyLabels = ["Easy", "Medium", "Hard"];

export function ModelCard({ model, isCompleted, isLocked, index }: ModelCardProps) {
  const difficultyDots = Array.from({ length: 3 }, (_, i) => i < model.difficulty);

  if (isLocked) {
    return (
      <div className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-zinc-200/60 bg-zinc-50/80 p-4 dark:border-zinc-800/60 dark:bg-zinc-900/40">
        {/* Left accent bar - muted */}
        <div className="absolute left-0 top-0 h-full w-1 bg-zinc-300 dark:bg-zinc-700" />

        {/* Index badge */}
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-[10px] font-bold text-zinc-400 dark:bg-zinc-800 dark:text-zinc-600">
          {index + 1}
        </div>

        {/* Emoji area */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-zinc-200/80 text-xl dark:bg-zinc-800/80">
          <span className="opacity-40 grayscale">{model.emoji}</span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h4 className="font-semibold text-zinc-400 dark:text-zinc-500">
            {model.title}
          </h4>
          <p className="mt-0.5 text-sm text-zinc-400 dark:text-zinc-600">
            Complete the previous model to unlock
          </p>
        </div>

        {/* Frosted glass overlay with lock */}
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/40 backdrop-blur-[2px] dark:bg-zinc-950/40">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200/90 shadow-sm dark:bg-zinc-800/90">
            <Lock className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/learn/${model.id}`}
      className={cn(
        "group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-4 transition-all duration-300",
        "hover:translate-x-1 hover:shadow-lg hover:shadow-violet-500/5 hover:border-violet-300 dark:hover:border-violet-700 dark:hover:shadow-violet-500/10",
        isCompleted
          ? "border-emerald-200/60 bg-white dark:border-emerald-800/40 dark:bg-zinc-900/60"
          : "border-zinc-200/60 bg-white dark:border-zinc-800/60 dark:bg-zinc-900/60"
      )}
    >
      {/* Left accent bar */}
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-1 transition-all duration-300 group-hover:w-1.5",
          isCompleted
            ? "bg-gradient-to-b from-emerald-400 to-green-500"
            : "bg-gradient-to-b from-violet-500 to-orange-400"
        )}
      />

      {/* Index badge */}
      <div
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
          isCompleted
            ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400"
            : "bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-400"
        )}
      >
        {index + 1}
      </div>

      {/* Emoji with circular gradient background */}
      <div className="relative shrink-0">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-full text-xl shadow-sm",
            isCompleted
              ? "bg-gradient-to-br from-emerald-100 to-green-50 dark:from-emerald-900/40 dark:to-green-900/20"
              : "bg-gradient-to-br from-violet-100 to-orange-50 dark:from-violet-900/30 dark:to-orange-900/20"
          )}
        >
          <span>{model.emoji}</span>
        </div>
        {/* Checkmark badge overlay for completed */}
        {isCompleted && (
          <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-500 shadow-sm ring-2 ring-white dark:ring-zinc-900">
            <Check className="h-3 w-3 text-white" strokeWidth={3} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h4
          className={cn(
            "font-semibold tracking-tight transition-colors",
            isCompleted
              ? "text-emerald-800 dark:text-emerald-300"
              : "text-zinc-900 group-hover:text-violet-700 dark:text-zinc-100 dark:group-hover:text-violet-400"
          )}
        >
          {model.title}
        </h4>
        <p className="mt-0.5 line-clamp-1 text-sm text-zinc-500 dark:text-zinc-400">
          {model.eli5.hook}
        </p>
      </div>

      {/* Meta: time + difficulty */}
      <div className="flex shrink-0 items-center gap-3">
        {/* Time chip */}
        <span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          <Clock className="h-3 w-3" />
          {model.estimatedMinutes}m
        </span>

        {/* Difficulty dots with tooltip */}
        <div className="relative group/diff" title={difficultyLabels[model.difficulty - 1]}>
          <div className="flex gap-1">
            {difficultyDots.map((filled, i) => (
              <span
                key={i}
                className={cn(
                  "inline-block h-2 w-2 rounded-full transition-colors",
                  filled
                    ? "bg-orange-400 dark:bg-orange-500"
                    : "bg-zinc-200 dark:bg-zinc-700"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
