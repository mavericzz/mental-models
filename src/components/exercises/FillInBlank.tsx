import { useState } from "react";
import { Check, X } from "lucide-react";
import type { FillInBlankExercise } from "../../types/exercises";
import { cn } from "../../lib/utils";

interface Props {
  exercise: FillInBlankExercise;
  onAnswer: (correct: boolean) => void;
}

export function FillInBlank({ exercise, onAnswer }: Props) {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = exercise.acceptedAnswers.some(
    (a) => a.toLowerCase().trim() === answer.toLowerCase().trim()
  );

  const handleSubmit = () => {
    if (!answer.trim()) return;
    setSubmitted(true);
    onAnswer(isCorrect);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Fill in the blank
      </h3>

      <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
        <p className="text-zinc-700 dark:text-zinc-300">
          {exercise.textBefore}
          <span className="mx-1 inline-block min-w-[120px] border-b-2 border-dashed border-indigo-400 px-2 text-center font-semibold text-indigo-600 dark:text-indigo-400">
            {submitted ? (isCorrect ? answer : exercise.acceptedAnswers[0]) : answer || "___"}
          </span>
          {exercise.textAfter}
        </p>
      </div>

      {!submitted && (
        <>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder={exercise.hint || "Type your answer..."}
            className="w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-indigo-500"
          />
          <button
            onClick={handleSubmit}
            disabled={!answer.trim()}
            className="w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        </>
      )}

      {submitted && (
        <div
          className={cn(
            "flex items-start gap-3 rounded-xl p-4",
            isCorrect
              ? "bg-emerald-50 dark:bg-emerald-950/30"
              : "bg-red-50 dark:bg-red-950/30"
          )}
        >
          {isCorrect ? (
            <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
          ) : (
            <X className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
          )}
          <div>
            <p
              className={cn(
                "mb-1 font-semibold",
                isCorrect
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-red-700 dark:text-red-400"
              )}
            >
              {isCorrect ? "Correct!" : `The answer was: ${exercise.acceptedAnswers[0]}`}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {exercise.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
