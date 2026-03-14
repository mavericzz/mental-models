import { Brain, Sparkles, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto relative">
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="py-8 px-4 text-center space-y-4 perspective-container preserve-3d">
        {/* Decorative icons row */}
        <div className="flex items-center justify-center gap-3 text-violet-300 dark:text-violet-700" style={{ transform: 'translateZ(20px)' }}>
          <Sparkles className="h-3.5 w-3.5 opacity-60" />
          <Brain className="h-4 w-4 opacity-40" />
          <Sparkles className="h-3 w-3 opacity-50" />
          <Brain className="h-3.5 w-3.5 opacity-30" />
          <Sparkles className="h-3.5 w-3.5 opacity-60" />
        </div>

        {/* Tagline */}
        <p className="text-xs text-zinc-400 dark:text-zinc-600 tracking-wide flex items-center justify-center gap-1.5">
          Built with <Heart className="h-3 w-3 text-orange-400/70 fill-orange-400/70" /> for better thinking
        </p>

        {/* Author credit */}
        <p className="text-sm font-medium bg-gradient-to-r from-violet-500 to-orange-400 bg-clip-text text-transparent" style={{ transform: 'translateZ(30px)' }}>
          by Rahul Sharma
        </p>
      </div>
    </footer>
  );
}
