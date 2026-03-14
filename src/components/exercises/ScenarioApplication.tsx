import { useState } from "react";
import { Check, X, BookOpen, Lightbulb } from "lucide-react";
import type { ScenarioExercise } from "../../types/exercises";
import { cn } from "../../lib/utils";

interface Props {
  exercise: ScenarioExercise;
  onAnswer: (correct: boolean) => void;
}

export function ScenarioApplication({ exercise, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    onAnswer(selected === exercise.correctIndex);
  };

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Apply Your Knowledge
      </h3>

      {/* Dramatic scenario card with gradient left border */}
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/70 p-5 shadow-3d backdrop-blur-sm dark:border-zinc-700/60 dark:bg-zinc-800/50">
        {/* Gradient left border accent */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500" />
        <div className="pl-4">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 shadow-md">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Scenario
            </span>
          </div>
          <p className="text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
            {exercise.scenario}
          </p>
        </div>
      </div>

      <p className="text-lg font-bold text-zinc-800 dark:text-zinc-200">
        {exercise.question}
      </p>

      {/* Options styled like MultipleChoice */}
      <div className="space-y-3">
        {exercise.options.map((option, i) => (
          <button
            key={i}
            onClick={() => !submitted && setSelected(i)}
            disabled={submitted}
            className={cn(
              "group flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-300",
              !submitted && selected === i
                ? "border-violet-500 bg-violet-50/80 shadow-3d dark:bg-violet-950/30 [transform:perspective(800px)_translateZ(8px)]"
                : !submitted
                  ? "border-zinc-200/80 bg-white/70 backdrop-blur-sm shadow-3d hover:[transform:perspective(800px)_rotateX(2deg)_translateY(-3px)] hover:border-violet-300 hover:shadow-3d-hover dark:border-zinc-700/80 dark:bg-zinc-900/70 dark:hover:border-violet-600"
                  : i === exercise.correctIndex
                    ? "border-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50 shadow-md shadow-emerald-500/10 dark:from-emerald-950/30 dark:to-green-950/30"
                    : selected === i
                      ? "border-red-500 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30"
                      : "border-zinc-200/60 bg-white/50 opacity-50 dark:border-zinc-700/60 dark:bg-zinc-900/50"
            )}
          >
            <div
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-all duration-300",
                !submitted && selected === i
                  ? "bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-md"
                  : !submitted
                    ? "bg-zinc-100 text-zinc-500 group-hover:bg-violet-100 group-hover:text-violet-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-violet-900/50 dark:group-hover:text-violet-400"
                    : i === exercise.correctIndex
                      ? "bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-md"
                      : selected === i
                        ? "bg-gradient-to-br from-red-500 to-rose-600 text-white shadow-md"
                        : "bg-zinc-100 text-zinc-400 dark:bg-zinc-800"
              )}
            >
              {submitted && i === exercise.correctIndex ? (
                <Check className="h-5 w-5" />
              ) : submitted && selected === i ? (
                <X className="h-5 w-5" />
              ) : (
                String.fromCharCode(65 + i)
              )}
            </div>
            <span className="text-[15px] font-medium text-zinc-700 dark:text-zinc-300">{option}</span>
          </button>
        ))}
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3.5 font-bold text-white shadow-3d transition-all duration-300 hover:[transform:translateY(-2px)] hover:shadow-3d-hover disabled:cursor-not-allowed disabled:opacity-40 active:[transform:translateY(2px)]"
        >
          Check Answer
        </button>
      )}

      {submitted && (
        <div
          className={cn(
            "rounded-2xl border p-5 backdrop-blur-sm",
            selected === exercise.correctIndex
              ? "border-emerald-200/60 bg-emerald-50/80 dark:border-emerald-800/40 dark:bg-emerald-950/30"
              : "border-red-200/60 bg-red-50/80 dark:border-red-800/40 dark:bg-red-950/30"
          )}
        >
          <div className="mb-2 flex items-center gap-2">
            <Lightbulb
              className={cn(
                "h-5 w-5",
                selected === exercise.correctIndex
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400"
              )}
            />
            <p
              className={cn(
                "font-bold",
                selected === exercise.correctIndex
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-red-700 dark:text-red-400"
              )}
            >
              {selected === exercise.correctIndex ? "Great thinking!" : "Not quite!"}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
