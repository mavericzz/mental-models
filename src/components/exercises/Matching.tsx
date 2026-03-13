import { useState } from "react";
import { Check, X, Shuffle } from "lucide-react";
import type { MatchingExercise } from "../../types/exercises";
import { cn } from "../../lib/utils";

interface Props {
  exercise: MatchingExercise;
  onAnswer: (correct: boolean) => void;
}

export function Matching({ exercise, onAnswer }: Props) {
  const [shuffledRight] = useState(() =>
    [...exercise.pairs.map((p) => p.right)].sort(() => Math.random() - 0.5)
  );
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleLeftClick = (index: number) => {
    if (submitted) return;
    setSelectedLeft(index);
  };

  const handleRightClick = (index: number) => {
    if (submitted || selectedLeft === null) return;
    setMatches((prev) => ({ ...prev, [selectedLeft]: index }));
    setSelectedLeft(null);
  };

  const allMatched = Object.keys(matches).length === exercise.pairs.length;

  const handleSubmit = () => {
    if (!allMatched) return;
    setSubmitted(true);
    const allCorrect = exercise.pairs.every((pair, i) => {
      const matchedRightIndex = matches[i];
      return shuffledRight[matchedRightIndex] === pair.right;
    });
    onAnswer(allCorrect);
  };

  const isMatchCorrect = (leftIndex: number) => {
    if (!submitted) return null;
    const matchedRightIndex = matches[leftIndex];
    if (matchedRightIndex === undefined) return null;
    return shuffledRight[matchedRightIndex] === exercise.pairs[leftIndex].right;
  };

  const getMatchedRightIndex = (leftIndex: number) => matches[leftIndex];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Shuffle className="h-5 w-5 text-zinc-400" />
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          {exercise.instruction}
        </h3>
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        Click an item on the left, then click its match on the right
      </p>

      <div className="grid grid-cols-2 gap-4">
        {/* Left column */}
        <div className="space-y-2">
          {exercise.pairs.map((pair, i) => (
            <button
              key={i}
              onClick={() => handleLeftClick(i)}
              disabled={submitted}
              className={cn(
                "w-full rounded-xl border-2 p-3 text-left text-sm transition-all",
                selectedLeft === i
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30"
                  : submitted && isMatchCorrect(i) === true
                    ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                    : submitted && isMatchCorrect(i) === false
                      ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                      : getMatchedRightIndex(i) !== undefined
                        ? "border-indigo-300 bg-indigo-50/50 dark:border-indigo-700 dark:bg-indigo-950/20"
                        : "border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900"
              )}
            >
              <span className="text-zinc-700 dark:text-zinc-300">{pair.left}</span>
              {getMatchedRightIndex(i) !== undefined && !submitted && (
                <span className="ml-1 text-indigo-500">→</span>
              )}
              {submitted && isMatchCorrect(i) === true && (
                <Check className="ml-1 inline h-4 w-4 text-emerald-500" />
              )}
              {submitted && isMatchCorrect(i) === false && (
                <X className="ml-1 inline h-4 w-4 text-red-500" />
              )}
            </button>
          ))}
        </div>

        {/* Right column */}
        <div className="space-y-2">
          {shuffledRight.map((right, i) => {
            const isSelected = Object.values(matches).includes(i);
            return (
              <button
                key={i}
                onClick={() => handleRightClick(i)}
                disabled={submitted || selectedLeft === null}
                className={cn(
                  "w-full rounded-xl border-2 p-3 text-left text-sm transition-all",
                  isSelected
                    ? "border-indigo-300 bg-indigo-50/50 dark:border-indigo-700 dark:bg-indigo-950/20"
                    : selectedLeft !== null
                      ? "border-zinc-200 bg-white hover:border-indigo-400 dark:border-zinc-700 dark:bg-zinc-900"
                      : "border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900"
                )}
              >
                <span className="text-zinc-700 dark:text-zinc-300">{right}</span>
              </button>
            );
          })}
        </div>
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!allMatched}
          className="w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check Matches
        </button>
      )}

      {submitted && (
        <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-800/50">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
