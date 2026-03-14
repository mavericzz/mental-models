import { Link } from "react-router-dom";
import {
  DollarSign, Heart, Users, Briefcase, Brain, Handshake,
  Lightbulb, GraduationCap, Clock, MessageCircle, Atom,
  Network, Dice5, Crown, Repeat, Lock, ChevronRight,
} from "lucide-react";
import type { Category } from "../types/models";
import { cn } from "../lib/utils";
import { useTilt3D } from "../hooks/useTilt3D";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign, Heart, Users, Briefcase, Brain, Handshake,
  Lightbulb, GraduationCap, Clock, MessageCircle, Atom,
  Network, Dice5, Crown, Repeat,
};

const colorMap: Record<
  string,
  {
    bg: string;
    text: string;
    progress: string;
    border: string;
    gradientFrom: string;
    gradientTo: string;
    iconBg: string;
    glow: string;
    badge: string;
  }
> = {
  emerald: { bg: "bg-emerald-50/60 dark:bg-emerald-950/20", text: "text-emerald-600 dark:text-emerald-400", progress: "from-emerald-500 to-emerald-400", border: "border-emerald-200/60 dark:border-emerald-800/40", gradientFrom: "from-emerald-50", gradientTo: "to-emerald-100/40", iconBg: "from-emerald-500 to-emerald-400", glow: "shadow-emerald-500/20", badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" },
  rose: { bg: "bg-rose-50/60 dark:bg-rose-950/20", text: "text-rose-600 dark:text-rose-400", progress: "from-rose-500 to-rose-400", border: "border-rose-200/60 dark:border-rose-800/40", gradientFrom: "from-rose-50", gradientTo: "to-rose-100/40", iconBg: "from-rose-500 to-rose-400", glow: "shadow-rose-500/20", badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300" },
  pink: { bg: "bg-pink-50/60 dark:bg-pink-950/20", text: "text-pink-600 dark:text-pink-400", progress: "from-pink-500 to-pink-400", border: "border-pink-200/60 dark:border-pink-800/40", gradientFrom: "from-pink-50", gradientTo: "to-pink-100/40", iconBg: "from-pink-500 to-pink-400", glow: "shadow-pink-500/20", badge: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300" },
  blue: { bg: "bg-blue-50/60 dark:bg-blue-950/20", text: "text-blue-600 dark:text-blue-400", progress: "from-blue-500 to-blue-400", border: "border-blue-200/60 dark:border-blue-800/40", gradientFrom: "from-blue-50", gradientTo: "to-blue-100/40", iconBg: "from-blue-500 to-blue-400", glow: "shadow-blue-500/20", badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" },
  violet: { bg: "bg-violet-50/60 dark:bg-violet-950/20", text: "text-violet-600 dark:text-violet-400", progress: "from-violet-500 to-violet-400", border: "border-violet-200/60 dark:border-violet-800/40", gradientFrom: "from-violet-50", gradientTo: "to-violet-100/40", iconBg: "from-violet-500 to-violet-400", glow: "shadow-violet-500/20", badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300" },
  amber: { bg: "bg-amber-50/60 dark:bg-amber-950/20", text: "text-amber-600 dark:text-amber-400", progress: "from-amber-500 to-amber-400", border: "border-amber-200/60 dark:border-amber-800/40", gradientFrom: "from-amber-50", gradientTo: "to-amber-100/40", iconBg: "from-amber-500 to-amber-400", glow: "shadow-amber-500/20", badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300" },
  yellow: { bg: "bg-yellow-50/60 dark:bg-yellow-950/20", text: "text-yellow-600 dark:text-yellow-400", progress: "from-yellow-500 to-yellow-400", border: "border-yellow-200/60 dark:border-yellow-800/40", gradientFrom: "from-yellow-50", gradientTo: "to-yellow-100/40", iconBg: "from-yellow-500 to-yellow-400", glow: "shadow-yellow-500/20", badge: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300" },
  cyan: { bg: "bg-cyan-50/60 dark:bg-cyan-950/20", text: "text-cyan-600 dark:text-cyan-400", progress: "from-cyan-500 to-cyan-400", border: "border-cyan-200/60 dark:border-cyan-800/40", gradientFrom: "from-cyan-50", gradientTo: "to-cyan-100/40", iconBg: "from-cyan-500 to-cyan-400", glow: "shadow-cyan-500/20", badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300" },
  orange: { bg: "bg-orange-50/60 dark:bg-orange-950/20", text: "text-orange-600 dark:text-orange-400", progress: "from-orange-500 to-orange-400", border: "border-orange-200/60 dark:border-orange-800/40", gradientFrom: "from-orange-50", gradientTo: "to-orange-100/40", iconBg: "from-orange-500 to-orange-400", glow: "shadow-orange-500/20", badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300" },
  teal: { bg: "bg-teal-50/60 dark:bg-teal-950/20", text: "text-teal-600 dark:text-teal-400", progress: "from-teal-500 to-teal-400", border: "border-teal-200/60 dark:border-teal-800/40", gradientFrom: "from-teal-50", gradientTo: "to-teal-100/40", iconBg: "from-teal-500 to-teal-400", glow: "shadow-teal-500/20", badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300" },
  indigo: { bg: "bg-indigo-50/60 dark:bg-indigo-950/20", text: "text-indigo-600 dark:text-indigo-400", progress: "from-indigo-500 to-indigo-400", border: "border-indigo-200/60 dark:border-indigo-800/40", gradientFrom: "from-indigo-50", gradientTo: "to-indigo-100/40", iconBg: "from-indigo-500 to-indigo-400", glow: "shadow-indigo-500/20", badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300" },
  purple: { bg: "bg-purple-50/60 dark:bg-purple-950/20", text: "text-purple-600 dark:text-purple-400", progress: "from-purple-500 to-purple-400", border: "border-purple-200/60 dark:border-purple-800/40", gradientFrom: "from-purple-50", gradientTo: "to-purple-100/40", iconBg: "from-purple-500 to-purple-400", glow: "shadow-purple-500/20", badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" },
  red: { bg: "bg-red-50/60 dark:bg-red-950/20", text: "text-red-600 dark:text-red-400", progress: "from-red-500 to-red-400", border: "border-red-200/60 dark:border-red-800/40", gradientFrom: "from-red-50", gradientTo: "to-red-100/40", iconBg: "from-red-500 to-red-400", glow: "shadow-red-500/20", badge: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300" },
  sky: { bg: "bg-sky-50/60 dark:bg-sky-950/20", text: "text-sky-600 dark:text-sky-400", progress: "from-sky-500 to-sky-400", border: "border-sky-200/60 dark:border-sky-800/40", gradientFrom: "from-sky-50", gradientTo: "to-sky-100/40", iconBg: "from-sky-500 to-sky-400", glow: "shadow-sky-500/20", badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300" },
  lime: { bg: "bg-lime-50/60 dark:bg-lime-950/20", text: "text-lime-600 dark:text-lime-400", progress: "from-lime-500 to-lime-400", border: "border-lime-200/60 dark:border-lime-800/40", gradientFrom: "from-lime-50", gradientTo: "to-lime-100/40", iconBg: "from-lime-500 to-lime-400", glow: "shadow-lime-500/20", badge: "bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300" },
};

interface CategoryCardProps {
  category: Category;
  completedCount: number;
  locked?: boolean;
}

export function CategoryCard({ category, completedCount, locked = false }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Brain;
  const colors = colorMap[category.color] || colorMap.indigo;
  const progressPercent = Math.round((completedCount / category.modelCount) * 100);
  const tiltRef = useTilt3D<HTMLDivElement>({ maxTilt: 10, scale: 1.03 });

  const cardContent = (
    <div
      ref={!locked ? tiltRef : undefined}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white/70 p-6 backdrop-blur-md transition-all duration-300 dark:bg-zinc-900/70 shadow-3d",
        !locked && "hover:shadow-3d-hover",
        colors.border,
        locked ? "opacity-60 grayscale" : `hover:${colors.glow}`
      )}
    >
      {/* Subtle gradient background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-50 dark:opacity-20",
          colors.gradientFrom,
          colors.gradientTo
        )}
      />

      {/* Hover glow border effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 group-hover:border-current/10" />

      {/* Top row: icon + lock */}
      <div className="mb-4 flex items-start justify-between">
        {/* Large gradient circular icon */}
        <div
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-all duration-300 group-hover:scale-110",
            colors.iconBg
          )}
          style={{ transform: 'translateZ(40px)' }}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>

        {locked && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-200/80 dark:bg-zinc-700/80">
            <Lock className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          </div>
        )}
      </div>

      {/* Name + description */}
      <h3 className="text-lg font-bold tracking-wide text-zinc-900 dark:text-zinc-100" style={{ transform: 'translateZ(25px)' }}>
        {category.name}
      </h3>
      <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {category.description}
      </p>

      {/* Spacer to push progress to bottom */}
      <div className="mt-auto" />

      {/* Badge chip */}
      <div className="mt-4 mb-3 flex items-center gap-2">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
            colors.badge
          )}
        >
          {completedCount}/{category.modelCount} completed
        </span>
        {progressPercent === 100 && (
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-orange-500 px-2.5 py-0.5 text-xs font-bold text-white">
            Done!
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div>
        <div className="mb-1.5 flex justify-between text-xs">
          <span className="text-zinc-400 dark:text-zinc-500">Progress</span>
          <span className={cn("font-bold", colors.text)}>{progressPercent}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <div
            className={cn(
              "h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-out",
              colors.progress
            )}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Hover chevron indicator */}
      <div className="absolute bottom-6 right-5 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <ChevronRight className={cn("h-5 w-5", colors.text)} />
      </div>
    </div>
  );

  if (locked) {
    return <div className="cursor-not-allowed">{cardContent}</div>;
  }

  return (
    <Link to={`/category/${category.slug}`} className="block h-full">
      {cardContent}
    </Link>
  );
}
