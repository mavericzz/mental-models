import { useState } from "react";
import { ChevronDown, Lightbulb, Globe, ArrowRight } from "lucide-react";
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
      {/* Hook - gradient card with decorative sparkles */}
      <div className="relative animate-tilt-in overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 p-8 shadow-3d-deep preserve-3d">
        {/* Decorative sparkle shapes */}
        <div className="absolute top-4 right-6 h-3 w-3 rotate-45 rounded-sm bg-white/20 animate-sparkle" />
        <div className="absolute top-8 right-16 h-2 w-2 rotate-45 rounded-sm bg-white/15 animate-sparkle" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-6 left-8 h-2.5 w-2.5 rotate-45 rounded-sm bg-white/15 animate-sparkle" style={{ animationDelay: "1s" }} />
        <div className="absolute top-12 left-6 h-2 w-2 rounded-full bg-white/10 animate-sparkle" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-4 right-12 h-1.5 w-1.5 rounded-full bg-white/20 animate-sparkle" style={{ animationDelay: "0.8s" }} />

        <p className="relative text-lg font-medium leading-relaxed text-white/95 md:text-xl">
          {eli5.hook}
        </p>
      </div>

      {/* Analogy - clean card with lightbulb accent */}
      <div className="animate-tilt-in rounded-2xl border border-zinc-200 bg-white p-6 shadow-3d dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
            <Lightbulb className="h-4 w-4 text-amber-500" />
          </div>
          <span className="text-sm font-bold uppercase tracking-wider text-zinc-400">
            The Simple Version
          </span>
        </div>
        <div className="border-l-4 border-violet-300 pl-4 dark:border-violet-700">
          <p className="text-lg italic text-zinc-700 dark:text-zinc-300">
            &ldquo;{eli5.analogy}&rdquo;
          </p>
        </div>
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
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-3d dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-start gap-4">
              {/* Numbered gradient circle badge */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-sm font-bold text-white shadow-3d" style={{ transform: 'translateZ(30px)' }}>
                {i + 1}
              </div>
              <div>
                <h3 className="mb-1.5 font-semibold text-zinc-900 dark:text-zinc-100">
                  {section.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed dark:text-zinc-400">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Continue / Reveal Next Button */}
      {!allRevealed && (
        <div className="flex justify-center">
          <button
            onClick={revealNext}
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-8 py-3.5 font-semibold text-violet-700 shadow-sm transition-all hover:shadow-md hover:from-violet-200 hover:to-purple-200 active:scale-[0.97] dark:from-violet-900/30 dark:to-purple-900/30 dark:text-violet-300 dark:hover:from-violet-900/50 dark:hover:to-purple-900/50"
          >
            Continue
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5 animate-bounce-gentle" />
          </button>
        </div>
      )}

      {/* Aha Moment + Real World + Quiz button */}
      {allRevealed && (
        <div className="animate-fade-in space-y-6">
          {/* AHA MOMENT - the dopamine hit */}
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 opacity-25 blur-2xl" style={{ transform: 'translateZ(-20px)' }} />

            {/* Animated gradient border card */}
            <div className="relative rounded-2xl bg-gradient-to-r from-violet-500 via-pink-500 to-orange-500 p-[2px] animate-gradient-rotate shadow-2xl">
              <div className="relative overflow-hidden rounded-[14px] bg-white p-8 dark:bg-zinc-900">
                {/* Background sparkle particles (CSS only) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-4 left-[10%] h-1.5 w-1.5 rounded-full bg-violet-400/30 animate-sparkle" />
                  <div className="absolute top-[20%] right-[15%] h-2 w-2 rounded-full bg-pink-400/30 animate-sparkle" style={{ animationDelay: "0.3s" }} />
                  <div className="absolute bottom-[25%] left-[20%] h-1 w-1 rounded-full bg-orange-400/30 animate-sparkle" style={{ animationDelay: "0.7s" }} />
                  <div className="absolute top-[40%] right-[10%] h-1.5 w-1.5 rounded-full bg-violet-400/20 animate-sparkle" style={{ animationDelay: "1.2s" }} />
                  <div className="absolute bottom-[15%] right-[25%] h-1 w-1 rounded-full bg-pink-400/25 animate-sparkle" style={{ animationDelay: "1.5s" }} />
                  <div className="absolute top-[60%] left-[8%] h-2 w-2 rounded-full bg-amber-400/20 animate-sparkle" style={{ animationDelay: "0.9s" }} />
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="mb-4 flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-3d animate-pulse-glow float-3d">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest gradient-text">
                      The Aha Moment
                    </span>
                  </div>
                  <p className="text-xl font-semibold italic leading-relaxed text-zinc-800 dark:text-zinc-200 md:text-2xl">
                    &ldquo;{eli5.ahaQuote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Real World Example */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 animate-slide-up">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <Globe className="h-4 w-4 text-emerald-500" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                Real World Example
              </span>
            </div>
            <p className="text-zinc-600 leading-relaxed dark:text-zinc-400">
              {eli5.realWorldExample}
            </p>
          </div>

          {/* Start Quiz button */}
          <div className="flex justify-center pt-2">
            <button
              onClick={onComplete}
              className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 px-10 py-4 text-lg font-bold text-white shadow-3d-deep transition-all duration-300 hover:shadow-3d-hover hover:[transform:translateY(-3px)_translateZ(10px)] active:[transform:translateY(2px)_translateZ(-5px)] animate-pulse-glow"
            >
              Got it! Start the Quiz
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
