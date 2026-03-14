import { useState } from "react";
import { Check, X, ThumbsUp, ThumbsDown, Lightbulb } from "lucide-react";
import type { TrueFalseExercise } from "../../types/exercises";
import { cn } from "../../lib/utils";

interface Props {
  exercise: TrueFalseExercise;
  onAnswer: (correct: boolean) => void;
}

export function TrueFalse({ exercise, onAnswer }: Props) {
  const [selected, setSelected] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (value: boolean) => {
    if (submitted) return;
    setSelected(value);
  };

  const handleSubmit = () => {
    if (selected === null) return;
    setSubmitted(true);
    onAnswer(selected === exercise.correct);
  };

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        True or False?
      </h3>

      {/* Quote card */}
      <div className="relative rounded-2xl border border-zinc-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-zinc-700/60 dark:bg-zinc-800/50">
        <span className="absolute -top-3 left-4 text-5xl font-serif leading-none text-violet-300 dark:text-violet-600">
          &ldquo;
        </span>
        <p className="relative z-10 pt-2 text-lg font-medium leading-relaxed text-zinc-700 dark:text-zinc-300">
          {exercise.statement}
        </p>
        <span className="absolute -bottom-6 right-4 text-5xl font-serif leading-none text-violet-300 dark:text-violet-600">
          &rdquo;
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 pt-2">
        {[true, false].map((value) => {
          const isTrue = value === true;
          return (
            <button
              key={String(value)}
              onClick={() => handleSelect(value)}
              disabled={submitted}
              className={cn(
                "group flex flex-col items-center justify-center gap-2 rounded-2xl border-2 p-5 font-bold transition-all duration-300",
                !submitted && selected === value
                  ? "border-violet-500 bg-violet-50/80 text-violet-700 shadow-md shadow-violet-500/10 dark:bg-violet-950/30 dark:text-violet-300"
                  : !submitted
                    ? "border-zinc-200/80 bg-white/70 text-zinc-600 backdrop-blur-sm hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-lg dark:border-zinc-700/80 dark:bg-zinc-900/70 dark:text-zinc-400 dark:hover:border-violet-600"
                    : value === exercise.correct
                      ? "border-emerald-500 bg-gradient-to-b from-emerald-50 to-green-50 text-emerald-700 shadow-md dark:from-emerald-950/30 dark:to-green-950/30 dark:text-emerald-400"
                      : selected === value
                        ? "border-red-500 bg-gradient-to-b from-red-50 to-rose-50 text-red-700 dark:from-red-950/30 dark:to-rose-950/30 dark:text-red-400"
                        : "border-zinc-200/60 bg-white/50 opacity-50 dark:border-zinc-700/60 dark:bg-zinc-900/50"
              )}
            >
              {submitted && value === exercise.correct ? (
                <Check className="h-7 w-7 text-emerald-500" />
              ) : submitted && selected === value ? (
                <X className="h-7 w-7 text-red-500" />
              ) : isTrue ? (
                <ThumbsUp className={cn("h-7 w-7 transition-transform duration-300", !submitted && "group-hover:scale-110")} />
              ) : (
                <ThumbsDown className={cn("h-7 w-7 transition-transform duration-300", !submitted && "group-hover:scale-110")} />
              )}
              <span className="text-lg">{value ? "True" : "False"}</span>
            </button>
          );
        })}
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-40 active:scale-[0.98]"
        >
          Check Answer
        </button>
      )}

      {submitted && (
        <div
          className={cn(
            "rounded-2xl border p-5 backdrop-blur-sm",
            selected === exercise.correct
              ? "border-emerald-200/60 bg-emerald-50/80 dark:border-emerald-800/40 dark:bg-emerald-950/30"
              : "border-red-200/60 bg-red-50/80 dark:border-red-800/40 dark:bg-red-950/30"
          )}
        >
          <div className="mb-2 flex items-center gap-2">
            <Lightbulb
              className={cn(
                "h-5 w-5",
                selected === exercise.correct
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400"
              )}
            />
            <p
              className={cn(
                "font-bold",
                selected === exercise.correct
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-red-700 dark:text-red-400"
              )}
            >
              {selected === exercise.correct ? "Correct!" : "Not quite!"}
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
