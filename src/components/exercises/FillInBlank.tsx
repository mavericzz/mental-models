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
    <div className="space-y-5">
      <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl">
        Fill in the blank
      </h3>

      {/* Sentence display card */}
      <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-6 shadow-3d backdrop-blur-sm dark:border-zinc-700/60 dark:bg-zinc-800/50">
        <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          {exercise.textBefore}
          <span
            className={cn(
              "relative mx-1 inline-block min-w-[140px] px-3 py-0.5 text-center font-bold transition-all duration-500",
              submitted
                ? isCorrect
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400"
                : "text-violet-600 dark:text-violet-400"
            )}
          >
            {submitted ? (isCorrect ? answer : exercise.acceptedAnswers[0]) : answer || "___"}
            {/* Animated underline */}
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 w-full rounded-full transition-all duration-700",
                submitted
                  ? isCorrect
                    ? "bg-emerald-500"
                    : "bg-red-500"
                  : "animate-pulse bg-gradient-to-r from-violet-500 to-purple-500"
              )}
            />
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
            className="w-full rounded-2xl border-2 border-zinc-200/80 bg-white/70 px-5 py-4 text-center text-lg font-medium text-zinc-900 outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-zinc-400 focus:border-violet-500 focus:shadow-lg focus:shadow-violet-500/10 dark:border-zinc-700/80 dark:bg-zinc-900/70 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-violet-500"
          />
          <button
            onClick={handleSubmit}
            disabled={!answer.trim()}
            className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3.5 font-bold text-white shadow-3d transition-all duration-300 hover:[transform:translateY(-2px)] hover:shadow-3d-hover disabled:cursor-not-allowed disabled:opacity-40 active:[transform:translateY(2px)]"
          >
            Check Answer
          </button>
        </>
      )}

      {submitted && (
        <div
          className={cn(
            "flex items-start gap-3 rounded-2xl border p-5 backdrop-blur-sm",
            isCorrect
              ? "border-emerald-200/60 bg-emerald-50/80 dark:border-emerald-800/40 dark:bg-emerald-950/30"
              : "border-red-200/60 bg-red-50/80 dark:border-red-800/40 dark:bg-red-950/30"
          )}
        >
          <div
            className={cn(
              "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
              isCorrect
                ? "bg-gradient-to-br from-emerald-500 to-green-600"
                : "bg-gradient-to-br from-red-500 to-rose-600"
            )}
          >
            {isCorrect ? (
              <Check className="h-4 w-4 text-white" />
            ) : (
              <X className="h-4 w-4 text-white" />
            )}
          </div>
          <div>
            <p
              className={cn(
                "mb-1 font-bold",
                isCorrect
                  ? "text-emerald-700 dark:text-emerald-400"
                  : "text-red-700 dark:text-red-400"
              )}
            >
              {isCorrect ? "Correct!" : `The answer was: ${exercise.acceptedAnswers[0]}`}
            </p>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {exercise.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
