import { useState } from "react";
import { Check, X } from "lucide-react";
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
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        True or False?
      </h3>
      <p className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-300">
        "{exercise.statement}"
      </p>

      <div className="grid grid-cols-2 gap-3">
        {[true, false].map((value) => (
          <button
            key={String(value)}
            onClick={() => handleSelect(value)}
            disabled={submitted}
            className={cn(
              "flex items-center justify-center gap-2 rounded-xl border-2 p-4 font-semibold transition-all",
              !submitted && selected === value
                ? "border-indigo-500 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-300"
                : !submitted
                  ? "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  : value === exercise.correct
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
                    : selected === value
                      ? "border-red-500 bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400"
                      : "border-zinc-200 bg-white opacity-60 dark:border-zinc-700 dark:bg-zinc-900"
            )}
          >
            {submitted && value === exercise.correct ? (
              <Check className="h-5 w-5" />
            ) : submitted && selected === value ? (
              <X className="h-5 w-5" />
            ) : null}
            {value ? "True" : "False"}
          </button>
        ))}
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check Answer
        </button>
      )}

      {submitted && (
        <div
          className={cn(
            "rounded-xl p-4",
            selected === exercise.correct
              ? "bg-emerald-50 dark:bg-emerald-950/30"
              : "bg-red-50 dark:bg-red-950/30"
          )}
        >
          <p
            className={cn(
              "mb-1 font-semibold",
              selected === exercise.correct
                ? "text-emerald-700 dark:text-emerald-400"
                : "text-red-700 dark:text-red-400"
            )}
          >
            {selected === exercise.correct ? "Correct!" : "Not quite!"}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
