import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import type { MentalModel } from "../types/models";

interface NextModelTeaserProps {
  model: MentalModel;
}

export function NextModelTeaser({ model }: NextModelTeaserProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-violet-200/50 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50/30 p-6 shadow-3d transition-all duration-500 hover:shadow-3d-hover hover:[transform:perspective(800px)_rotateX(2deg)_translateY(-4px)] dark:border-violet-800/30 dark:from-violet-950/30 dark:via-zinc-900 dark:to-fuchsia-950/20">
      {/* Decorative glow */}
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl transition-all group-hover:bg-violet-500/20" />

      <div className="relative">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-500 dark:text-violet-400">
          <Sparkles className="h-3.5 w-3.5" />
          Up Next
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 text-2xl dark:from-violet-900/50 dark:to-purple-900/50">
                {model.emoji}
              </span>
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100">
                  {model.title}
                </h4>
                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-1">
                  {model.eli5.hook}
                </p>
              </div>
            </div>
          </div>

          <Link
            to={`/learn/${model.id}`}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 text-sm font-bold text-white shadow-3d transition-all duration-300 hover:[transform:translateY(-2px)] hover:shadow-3d-hover active:[transform:translateY(2px)]"
          >
            Start
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
