import { useState } from "react";
import { ChevronDown, Lightbulb, Sparkles } from "lucide-react";
import type { ELI5Explanation } from "../types/models";
import { cn } from "../lib/utils";

interface AhaRevealProps {
  eli5: ELI5Explanation;
  onComplete: () => void;
}

export function AhaReveal({ eli5, onComplete }: AhaRevealProps) {
  const [revealedSections, setRevealedSections] = useState(0);
  const totalSections = eli5.sections.length;
  const allRevealed = revealedSections >= totalSections;

  const revealNext = () => {
    if (revealedSections < totalSections) {
      setRevealedSections((s) => s + 1);
    }
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      {/* Hook */}
      <div className="animate-fade-in rounded-2xl bg-indigo-50 p-6 dark:bg-indigo-950/30">
        <p className="text-lg font-medium text-indigo-900 dark:text-indigo-200">
          {eli5.hook}
        </p>
      </div>

      {/* Analogy */}
      <div className="animate-fade-in rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
          <Sparkles className="h-4 w-4" />
          The Simple Version
        </div>
        <p className="text-zinc-700 dark:text-zinc-300">{eli5.analogy}</p>
      </div>

      {/* Progressive Sections */}
      {eli5.sections.map((section, i) => (
        <div
          key={i}
          className={cn(
            "transition-all duration-500",
            i < revealedSections
              ? "translate-y-0 opacity-100"
              : "pointer-events-none h-0 translate-y-4 overflow-hidden opacity-0"
          )}
        >
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
              {section.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">{section.content}</p>
          </div>
        </div>
      ))}

      {/* Continue / Reveal Next Button */}
      {!allRevealed && (
        <button
          onClick={revealNext}
          className="group mx-auto flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 font-medium text-zinc-700 transition-all hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          Continue
          <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        </button>
      )}

      {/* Aha Moment */}
      {allRevealed && (
        <div className="animate-fade-in space-y-4">
          <div className="rounded-2xl border-2 border-indigo-300 bg-gradient-to-br from-indigo-50 to-violet-50 p-6 shadow-lg shadow-indigo-100/50 dark:border-indigo-700 dark:from-indigo-950/50 dark:to-violet-950/50 dark:shadow-indigo-900/20">
            <div className="mb-3 flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <Lightbulb className="h-5 w-5" />
              <span className="text-sm font-bold uppercase tracking-wider">
                The Aha Moment
              </span>
            </div>
            <p className="text-lg font-semibold text-indigo-900 dark:text-indigo-200">
              "{eli5.ahaQuote}"
            </p>
          </div>

          {/* Real World Example */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Real World Example
            </div>
            <p className="text-zinc-600 dark:text-zinc-400">
              {eli5.realWorldExample}
            </p>
          </div>

          <button
            onClick={onComplete}
            className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition-all hover:bg-indigo-700 active:scale-[0.98]"
          >
            Got it! Start the Quiz →
          </button>
        </div>
      )}
    </div>
  );
}
