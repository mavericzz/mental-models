import { useState } from "react";
import { Check, X, Shuffle, ArrowRight, Lightbulb } from "lucide-react";
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

  // Assign colors for matched pairs
  const matchColors = [
    "border-violet-400 bg-violet-50/60 dark:border-violet-600 dark:bg-violet-950/20",
    "border-blue-400 bg-blue-50/60 dark:border-blue-600 dark:bg-blue-950/20",
    "border-pink-400 bg-pink-50/60 dark:border-pink-600 dark:bg-pink-950/20",
    "border-amber-400 bg-amber-50/60 dark:border-amber-600 dark:bg-amber-950/20",
    "border-teal-400 bg-teal-50/60 dark:border-teal-600 dark:bg-teal-950/20",
    "border-indigo-400 bg-indigo-50/60 dark:border-indigo-600 dark:bg-indigo-950/20",
  ];

  const getMatchColor = (leftIndex: number) => {
    return matchColors[leftIndex % matchColors.length];
  };

  // Find which left index a right index is matched to
  const getRightMatchedLeft = (rightIndex: number): number | undefined => {
    return Object.entries(matches).find(([, v]) => v === rightIndex)?.[0] as unknown as number | undefined;
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-md">
          <Shuffle className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {exercise.instruction}
        </h3>
      </div>

      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Click an item on the left, then click its match on the right
      </p>

      <div className="grid grid-cols-2 gap-5">
        {/* Left column */}
        <div className="space-y-2.5">
          {exercise.pairs.map((pair, i) => {
            const matched = getMatchedRightIndex(i) !== undefined;
            const correct = isMatchCorrect(i);
            return (
              <button
                key={i}
                onClick={() => handleLeftClick(i)}
                disabled={submitted}
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl border-2 p-3.5 text-left text-sm font-medium transition-all duration-300",
                  selectedLeft === i
                    ? "border-violet-500 bg-violet-50/80 shadow-md shadow-violet-500/10 dark:bg-violet-950/30"
                    : submitted && correct === true
                      ? "border-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30"
                      : submitted && correct === false
                        ? "border-red-500 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30"
                        : matched && !submitted
                          ? getMatchColor(i)
                          : "border-zinc-200/80 bg-white/70 hover:border-violet-300 hover:shadow-sm dark:border-zinc-700/80 dark:bg-zinc-900/70 dark:hover:border-violet-600"
                )}
              >
                <span className="text-zinc-700 dark:text-zinc-300">{pair.left}</span>
                <span className="ml-2 flex items-center">
                  {matched && !submitted && (
                    <ArrowRight className="h-4 w-4 text-violet-400" />
                  )}
                  {submitted && correct === true && (
                    <Check className="h-4 w-4 text-emerald-500" />
                  )}
                  {submitted && correct === false && (
                    <X className="h-4 w-4 text-red-500" />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-2.5">
          {shuffledRight.map((right, i) => {
            const isSelected = Object.values(matches).includes(i);
            const matchedLeftIdx = getRightMatchedLeft(i);
            const leftIdx = matchedLeftIdx !== undefined ? Number(matchedLeftIdx) : -1;
            const correct = leftIdx >= 0 ? isMatchCorrect(leftIdx) : null;
            return (
              <button
                key={i}
                onClick={() => handleRightClick(i)}
                disabled={submitted || selectedLeft === null}
                className={cn(
                  "w-full rounded-2xl border-2 p-3.5 text-left text-sm font-medium transition-all duration-300",
                  submitted && correct === true
                    ? "border-emerald-500 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30"
                    : submitted && correct === false
                      ? "border-red-500 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30"
                      : isSelected && !submitted
                        ? leftIdx >= 0
                          ? getMatchColor(leftIdx)
                          : "border-violet-300 bg-violet-50/50 dark:border-violet-700 dark:bg-violet-950/20"
                        : selectedLeft !== null
                          ? "border-zinc-200/80 bg-white/70 hover:border-violet-400 hover:shadow-sm dark:border-zinc-700/80 dark:bg-zinc-900/70 dark:hover:border-violet-500"
                          : "border-zinc-200/80 bg-white/70 dark:border-zinc-700/80 dark:bg-zinc-900/70"
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
          className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3.5 font-bold text-white shadow-3d transition-all duration-300 hover:[transform:translateY(-2px)] hover:shadow-3d-hover disabled:cursor-not-allowed disabled:opacity-40 active:[transform:translateY(2px)]"
        >
          Check Matches
        </button>
      )}

      {submitted && (
        <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-5 backdrop-blur-sm dark:border-zinc-700/60 dark:bg-zinc-800/50">
          <div className="mb-2 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-violet-500" />
            <span className="font-bold text-zinc-700 dark:text-zinc-300">Explanation</span>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {exercise.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
