import { useState } from "react";
import { Check, X, BookOpen } from "lucide-react";
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
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Apply Your Knowledge
      </h3>

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
          <BookOpen className="h-4 w-4" />
          Scenario
        </div>
        <p className="text-zinc-700 dark:text-zinc-300">{exercise.scenario}</p>
      </div>

      <p className="font-medium text-zinc-800 dark:text-zinc-200">
        {exercise.question}
      </p>

      <div className="space-y-3">
        {exercise.options.map((option, i) => (
          <button
            key={i}
            onClick={() => !submitted && setSelected(i)}
            disabled={submitted}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl border-2 p-4 text-left transition-all",
              !submitted && selected === i
                ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30"
                : !submitted
                  ? "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900"
                  : i === exercise.correctIndex
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                    : selected === i
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : "border-zinc-200 opacity-60 dark:border-zinc-700"
            )}
          >
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
                submitted && i === exercise.correctIndex
                  ? "bg-emerald-500 text-white"
                  : submitted && selected === i
                    ? "bg-red-500 text-white"
                    : selected === i
                      ? "bg-indigo-500 text-white"
                      : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800"
              )}
            >
              {submitted && i === exercise.correctIndex ? (
                <Check className="h-4 w-4" />
              ) : submitted && selected === i ? (
                <X className="h-4 w-4" />
              ) : (
                String.fromCharCode(65 + i)
              )}
            </div>
            <span className="text-zinc-700 dark:text-zinc-300">{option}</span>
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
            selected === exercise.correctIndex
              ? "bg-emerald-50 dark:bg-emerald-950/30"
              : "bg-red-50 dark:bg-red-950/30"
          )}
        >
          <p
            className={cn(
              "mb-1 font-semibold",
              selected === exercise.correctIndex
                ? "text-emerald-700 dark:text-emerald-400"
                : "text-red-700 dark:text-red-400"
            )}
          >
            {selected === exercise.correctIndex ? "Great thinking!" : "Not quite!"}
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
