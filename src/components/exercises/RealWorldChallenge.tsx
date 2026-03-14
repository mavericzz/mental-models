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
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-md shadow-orange-500/20">
          <Pencil className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Real World Challenge
        </h3>
      </div>

      {/* Challenge card with warm gradient */}
      <div className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-6 shadow-3d dark:border-amber-800/40 dark:from-amber-950/30 dark:via-orange-950/20 dark:to-yellow-950/20">
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-orange-400/20 to-amber-400/10 blur-2xl" />
        <p className="relative z-10 text-lg font-semibold leading-relaxed text-zinc-800 dark:text-zinc-200">
          {exercise.challenge}
        </p>
      </div>

      {exercise.prompts.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Think about
          </p>
          <ul className="space-y-2.5">
            {exercise.prompts.map((prompt, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-orange-400 to-amber-500" />
                <span className="leading-relaxed">{prompt}</span>
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
            className="w-full resize-none rounded-2xl border-2 border-zinc-200/80 bg-white/70 px-5 py-4 text-zinc-900 outline-none backdrop-blur-sm transition-all duration-300 placeholder:text-zinc-400 focus:border-orange-400 focus:shadow-lg focus:shadow-orange-500/10 dark:border-zinc-700/80 dark:bg-zinc-900/70 dark:text-zinc-100 dark:placeholder:text-zinc-600 dark:focus:border-orange-500"
          />
          <button
            onClick={handleSubmit}
            disabled={!response.trim()}
            className="w-full rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 px-6 py-3.5 font-bold text-white shadow-3d transition-all duration-300 hover:[transform:translateY(-2px)] hover:shadow-3d-hover disabled:cursor-not-allowed disabled:opacity-40 active:[transform:translateY(2px)]"
          >
            Submit Reflection
          </button>
        </>
      ) : (
        <div className="space-y-4">
          {/* Success state with sparkles */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 to-green-50 p-5 dark:border-emerald-800/40 dark:from-emerald-950/30 dark:to-green-950/30">
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-emerald-400/10 blur-2xl" />
            <div className="mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-emerald-500" />
              <p className="font-bold text-emerald-700 dark:text-emerald-400">
                Great reflection!
              </p>
              <Sparkles className="h-4 w-4 text-emerald-400" />
            </div>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              There's no single right answer here — the point is to practice applying this model to your own life.
            </p>
          </div>

          {/* Example response */}
          <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-5 backdrop-blur-sm dark:border-zinc-700/60 dark:bg-zinc-800/50">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Example response
              </span>
            </div>
            <p className="text-sm italic leading-relaxed text-zinc-600 dark:text-zinc-400">
              &ldquo;{exercise.exampleResponse}&rdquo;
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
