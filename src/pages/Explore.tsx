import { useMemo, useState } from "react";
import { Search, Compass } from "lucide-react";
import { categories } from "../data/categories";
import { CategoryCard } from "../components/CategoryCard";
import { useProgressContext } from "../context/ProgressContext";
import { getModelsByCategory } from "../data/models";

export default function Explore() {
  const { progress } = useProgressContext();
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const filteredCategories = useMemo(
    () =>
      categories.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.description.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const getCompletedCount = (categoryId: string): number => {
    const models = getModelsByCategory(categoryId);
    return models.filter((m) => progress.models[m.id]?.status === "completed").length;
  };

  const totalCompleted = Object.values(progress.models).filter(
    (m) => m.status === "completed"
  ).length;
  const totalModels = categories.reduce((sum, c) => sum + c.modelCount, 0);
  const overallPercent = totalModels > 0 ? Math.round((totalCompleted / totalModels) * 100) : 0;

  return (
    <div className="space-y-10">
      {/* Dramatic Page Header */}
      <div className="relative text-center">
        <div className="absolute inset-0 -top-8 -z-10 mx-auto h-40 w-3/4 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
        <h1 className="gradient-text text-4xl font-extrabold tracking-tight sm:text-5xl">
          Explore Mental Models
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-lg text-zinc-500 dark:text-zinc-400">
          <span className="font-semibold text-violet-600 dark:text-violet-400">{totalCompleted}</span>{" "}
          of{" "}
          <span className="font-semibold">{totalModels}</span>{" "}
          mental models completed — keep going!
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mx-auto max-w-2xl">
        <Search
          className={`absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 transition-all duration-300 ${
            searchFocused
              ? "scale-110 text-violet-500"
              : "text-zinc-400"
          }`}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          placeholder="Search categories..."
          className={`w-full rounded-full border bg-white/70 py-4 pl-13 pr-6 text-zinc-900 shadow-sm outline-none backdrop-blur-md transition-all duration-300 dark:bg-zinc-900/70 dark:text-zinc-100 ${
            searchFocused
              ? "border-violet-400 shadow-lg shadow-violet-500/10 dark:border-violet-500"
              : "border-zinc-200 dark:border-zinc-700"
          }`}
        />
      </div>

      {/* Overall Progress */}
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/60 p-6 backdrop-blur-lg dark:border-zinc-700/40 dark:bg-zinc-900/60">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-50/50 to-orange-50/30 dark:from-violet-950/20 dark:to-orange-950/10" />
        <div className="mb-3 flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            <Compass className="h-4 w-4 text-violet-500" />
            Overall Progress
          </span>
          {/* Floating percentage badge */}
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-violet-600 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
            {overallPercent}%
          </span>
        </div>
        <div className="relative h-4 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          {/* Animated stripe overlay */}
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-violet-600 via-violet-500 to-orange-500 transition-all duration-700 ease-out"
            style={{ width: `${overallPercent}%` }}
          >
            <div
              className="absolute inset-0 animate-[shimmer_2s_linear_infinite] rounded-full"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
              }}
            />
          </div>
        </div>
        <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
          {totalCompleted} completed / {totalModels - totalCompleted} remaining
        </p>
      </div>

      {/* Category Grid — masonry-like with varied spans */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((category, i) => (
          <div
            key={category.id}
            className={`animate-[fadeSlideUp_0.5s_ease_both] ${
              i % 5 === 0 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <CategoryCard
              category={category}
              completedCount={getCompletedCount(category.id)}
            />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredCategories.length === 0 && (
        <div className="flex flex-col items-center py-20 text-center">
          <div className="mb-4 text-6xl">
            <span role="img" aria-label="thinking">🔍</span>
          </div>
          <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
            No categories found
          </h3>
          <p className="mt-1 max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
            We couldn't find anything matching "<span className="font-medium text-violet-500">{search}</span>". Try a different search term.
          </p>
        </div>
      )}
    </div>
  );
}
