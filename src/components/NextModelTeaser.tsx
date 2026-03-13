import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { MentalModel } from "../types/models";

interface NextModelTeaserProps {
  model: MentalModel;
}

export function NextModelTeaser({ model }: NextModelTeaserProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-gradient-to-r from-zinc-50 to-indigo-50/50 p-5 dark:border-zinc-700 dark:from-zinc-900 dark:to-indigo-950/30">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
        Up Next
      </p>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">{model.emoji}</span>
            <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {model.title}
            </h4>
          </div>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            {model.eli5.hook}
          </p>
        </div>
        <Link
          to={`/learn/${model.id}`}
          className="flex items-center gap-1 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-indigo-700 active:scale-95"
        >
          Start
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
