import { Link } from "react-router-dom";
import {
  DollarSign, Heart, Users, Briefcase, Brain, Handshake,
  Lightbulb, GraduationCap, Clock, MessageCircle, Atom,
  Network, Dice5, Crown, Repeat,
} from "lucide-react";
import type { Category } from "../types/models";
import { cn } from "../lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign, Heart, Users, Briefcase, Brain, Handshake,
  Lightbulb, GraduationCap, Clock, MessageCircle, Atom,
  Network, Dice5, Crown, Repeat,
};

const colorMap: Record<string, { bg: string; text: string; progress: string; border: string }> = {
  emerald: { bg: "bg-emerald-50 dark:bg-emerald-950/30", text: "text-emerald-600 dark:text-emerald-400", progress: "bg-emerald-500", border: "border-emerald-200 dark:border-emerald-800" },
  rose: { bg: "bg-rose-50 dark:bg-rose-950/30", text: "text-rose-600 dark:text-rose-400", progress: "bg-rose-500", border: "border-rose-200 dark:border-rose-800" },
  pink: { bg: "bg-pink-50 dark:bg-pink-950/30", text: "text-pink-600 dark:text-pink-400", progress: "bg-pink-500", border: "border-pink-200 dark:border-pink-800" },
  blue: { bg: "bg-blue-50 dark:bg-blue-950/30", text: "text-blue-600 dark:text-blue-400", progress: "bg-blue-500", border: "border-blue-200 dark:border-blue-800" },
  violet: { bg: "bg-violet-50 dark:bg-violet-950/30", text: "text-violet-600 dark:text-violet-400", progress: "bg-violet-500", border: "border-violet-200 dark:border-violet-800" },
  amber: { bg: "bg-amber-50 dark:bg-amber-950/30", text: "text-amber-600 dark:text-amber-400", progress: "bg-amber-500", border: "border-amber-200 dark:border-amber-800" },
  yellow: { bg: "bg-yellow-50 dark:bg-yellow-950/30", text: "text-yellow-600 dark:text-yellow-400", progress: "bg-yellow-500", border: "border-yellow-200 dark:border-yellow-800" },
  cyan: { bg: "bg-cyan-50 dark:bg-cyan-950/30", text: "text-cyan-600 dark:text-cyan-400", progress: "bg-cyan-500", border: "border-cyan-200 dark:border-cyan-800" },
  orange: { bg: "bg-orange-50 dark:bg-orange-950/30", text: "text-orange-600 dark:text-orange-400", progress: "bg-orange-500", border: "border-orange-200 dark:border-orange-800" },
  teal: { bg: "bg-teal-50 dark:bg-teal-950/30", text: "text-teal-600 dark:text-teal-400", progress: "bg-teal-500", border: "border-teal-200 dark:border-teal-800" },
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-950/30", text: "text-indigo-600 dark:text-indigo-400", progress: "bg-indigo-500", border: "border-indigo-200 dark:border-indigo-800" },
  purple: { bg: "bg-purple-50 dark:bg-purple-950/30", text: "text-purple-600 dark:text-purple-400", progress: "bg-purple-500", border: "border-purple-200 dark:border-purple-800" },
  red: { bg: "bg-red-50 dark:bg-red-950/30", text: "text-red-600 dark:text-red-400", progress: "bg-red-500", border: "border-red-200 dark:border-red-800" },
  sky: { bg: "bg-sky-50 dark:bg-sky-950/30", text: "text-sky-600 dark:text-sky-400", progress: "bg-sky-500", border: "border-sky-200 dark:border-sky-800" },
  lime: { bg: "bg-lime-50 dark:bg-lime-950/30", text: "text-lime-600 dark:text-lime-400", progress: "bg-lime-500", border: "border-lime-200 dark:border-lime-800" },
};

interface CategoryCardProps {
  category: Category;
  completedCount: number;
}

export function CategoryCard({ category, completedCount }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Brain;
  const colors = colorMap[category.color] || colorMap.indigo;
  const progressPercent = Math.round((completedCount / category.modelCount) * 100);

  return (
    <Link
      to={`/category/${category.slug}`}
      className={cn(
        "group block rounded-2xl border bg-white p-5 transition-all hover:shadow-md hover:-translate-y-0.5 dark:bg-zinc-900",
        colors.border
      )}
    >
      <div className={cn("mb-3 inline-flex rounded-xl p-2.5", colors.bg)}>
        <Icon className={cn("h-6 w-6", colors.text)} />
      </div>

      <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
        {category.name}
      </h3>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
        {category.description}
      </p>

      <div className="mt-4">
        <div className="mb-1 flex justify-between text-xs">
          <span className="text-zinc-500 dark:text-zinc-400">
            {completedCount}/{category.modelCount} models
          </span>
          <span className={cn("font-semibold", colors.text)}>{progressPercent}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <div
            className={cn("h-full rounded-full transition-all duration-500", colors.progress)}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </Link>
  );
}
