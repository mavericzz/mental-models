import { Link } from "react-router-dom";
import { Lock, Check, Clock, Zap } from "lucide-react";
import type { MentalModel } from "../types/models";
import { cn } from "../lib/utils";

interface ModelCardProps {
  model: MentalModel;
  isCompleted: boolean;
  isLocked: boolean;
  index: number;
}

export function ModelCard({ model, isCompleted, isLocked, index }: ModelCardProps) {
  const difficultyDots = Array.from({ length: 3 }, (_, i) => i < model.difficulty);

  if (isLocked) {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4 opacity-60 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-200 dark:bg-zinc-800">
          <Lock className="h-4 w-4 text-zinc-400" />
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-zinc-400 dark:text-zinc-500">
            {model.title}
          </h4>
          <p className="text-sm text-zinc-400 dark:text-zinc-600">
            Complete the previous model to unlock
          </p>
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/learn/${model.id}`}
      className={cn(
        "group flex items-center gap-4 rounded-xl border p-4 transition-all hover:shadow-md hover:-translate-y-0.5",
        isCompleted
          ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20"
          : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl text-lg",
          isCompleted
            ? "bg-emerald-100 dark:bg-emerald-900/50"
            : "bg-zinc-100 dark:bg-zinc-800"
        )}
      >
        {isCompleted ? (
          <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        ) : (
          <span>{model.emoji}</span>
        )}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
            <span className="mr-2 text-sm text-zinc-400">{index + 1}.</span>
            {model.title}
          </h4>
        </div>
        <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-1">
          {model.eli5.hook}
        </p>
      </div>

      <div className="flex items-center gap-3 text-zinc-400">
        <div className="flex items-center gap-1 text-xs">
          <Clock className="h-3.5 w-3.5" />
          {model.estimatedMinutes}m
        </div>
        <div className="flex gap-0.5">
          {difficultyDots.map((filled, i) => (
            <Zap
              key={i}
              className={cn(
                "h-3 w-3",
                filled
                  ? "fill-amber-400 text-amber-400"
                  : "text-zinc-300 dark:text-zinc-600"
              )}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
