import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories } from "../data/categories";
import { CategoryCard } from "../components/CategoryCard";
import { useProgressContext } from "../context/ProgressContext";
import { getModelsByCategory } from "../data/models";

export default function Explore() {
  const { progress } = useProgressContext();
  const [search, setSearch] = useState("");

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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Explore Categories
        </h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">
          {totalCompleted} of {totalModels} mental models completed
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search categories..."
          className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-10 pr-4 text-zinc-900 outline-none transition-colors focus:border-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>

      {/* Overall Progress */}
      <div className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-zinc-700 dark:text-zinc-300">
            Overall Progress
          </span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400">
            {Math.round((totalCompleted / totalModels) * 100)}%
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-500 transition-all duration-700"
            style={{ width: `${(totalCompleted / totalModels) * 100}%` }}
          />
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            completedCount={getCompletedCount(category.id)}
          />
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-zinc-500 dark:text-zinc-400">
            No categories match "{search}"
          </p>
        </div>
      )}
    </div>
  );
}
