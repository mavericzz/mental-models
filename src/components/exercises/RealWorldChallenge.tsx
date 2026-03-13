import { useState } from "react";
import { Pencil, Sparkles } from "lucide-react";
import type { RealWorldChallengeExercise } from "../../types/exercises";

interface Props {
  exercise: RealWorldChallengeExercise;
  onAnswer: (correct: boolean) => void;
}

export function RealWorldChallenge({ exercise, onAnswer }: Props) {
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!response.trim()) return;
    setSubmitted(true);
    onAnswer(true); // Reflective exercises always count as correct
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
        <Pencil className="h-5 w-5" />
        <h3 className="text-lg font-semibold">Real World Challenge</h3>
      </div>

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950/30">
        <p className="font-medium text-zinc-800 dark:text-zinc-200">
          {exercise.challenge}
        </p>
      </div>

      {exercise.prompts.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Think about:
          </p>
          <ul className="space-y-1 pl-4">
            {exercise.prompts.map((prompt, i) => (
              <li
                key={i}
                className="list-disc text-sm text-zinc-600 dark:text-zinc-400"
              >
                {prompt}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!submitted ? (
        <>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Write your thoughts here..."
            rows={4}
            className="w-full resize-none rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none transition-colors focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
          />
          <button
            onClick={handleSubmit}
            disabled={!response.trim()}
            className="w-full rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-all hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Reflection
          </button>
        </>
      ) : (
        <div className="space-y-3">
          <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/30">
            <p className="mb-1 font-semibold text-emerald-700 dark:text-emerald-400">
              Great reflection!
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              There's no single right answer here — the point is to practice applying this model to your own life.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-zinc-500">
              <Sparkles className="h-4 w-4" />
              Example response
            </div>
            <p className="text-sm italic text-zinc-600 dark:text-zinc-400">
              "{exercise.exampleResponse}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
