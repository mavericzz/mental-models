import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Trophy } from "lucide-react";
import { categories } from "../data/categories";
import { getModelsByCategory } from "../data/models";
import { ModelCard } from "../components/ModelCard";
import { useProgressContext } from "../context/ProgressContext";

export function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { progress, isModelUnlocked } = useProgressContext();

  const category = categories.find((c) => c.slug === categoryId);
  if (!category) {
    return (
      <div className="py-12 text-center">
        <p className="text-zinc-500">Category not found</p>
        <Link to="/explore" className="mt-4 inline-block text-violet-500 hover:underline">
          Back to Explore
        </Link>
      </div>
    );
  }

  const models = getModelsByCategory(category.id);
  const modelIds = models.map((m) => m.id);
  const completedCount = models.filter(
    (m) => progress.models[m.id]?.status === "completed"
  ).length;
  const progressPercent = models.length > 0 ? Math.round((completedCount / models.length) * 100) : 0;
  const isComplete = completedCount === models.length && models.length > 0;

  return (
    <div className="space-y-8">
      {/* Breadcrumb navigation */}
      <nav className="flex items-center gap-2 text-sm">
        <Link
          to="/explore"
          className="inline-flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-violet-500 dark:text-zinc-500 dark:hover:text-violet-400"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Categories</span>
        </Link>
        <span className="text-zinc-300 dark:text-zinc-600">/</span>
        <span className="font-medium text-zinc-700 dark:text-zinc-300">{category.name}</span>
      </nav>

      {/* Hero section */}
      <div className="space-y-3">
        <h1 className="gradient-text text-4xl font-extrabold tracking-tight sm:text-5xl">
          {category.name}
        </h1>
        <p className="max-w-2xl text-lg text-zinc-500 dark:text-zinc-400">
          {category.description}
        </p>
      </div>

      {/* Progress bar */}
      <div className="relative space-y-2">
        <div className="relative h-3 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800/80">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${progressPercent}%`,
              background: isComplete
                ? "linear-gradient(90deg, #22c55e, #10b981)"
                : "linear-gradient(90deg, #7c3aed, #ec4899, #f97316)",
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {completedCount} of {models.length} models completed
          </span>
          <span
            className="inline-flex items-center rounded-full px-3 py-0.5 text-xs font-bold text-white shadow-lg"
            style={{
              background: isComplete
                ? "linear-gradient(135deg, #22c55e, #10b981)"
                : "linear-gradient(135deg, #7c3aed, #f97316)",
            }}
          >
            {progressPercent}%
          </span>
        </div>
      </div>

      {/* Mastery message */}
      {isComplete && (
        <div
          className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 backdrop-blur-sm dark:border-emerald-800 dark:bg-emerald-950/30"
          style={{ animation: "fadeIn 0.5s ease-out forwards" }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-500 shadow-md">
            <Trophy className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-emerald-800 dark:text-emerald-300">
              You've mastered this category!
            </p>
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              All {models.length} models completed. Great work!
            </p>
          </div>
        </div>
      )}

      {/* Model list with stagger animation */}
      <div className="space-y-3">
        {models.map((model, index) => (
          <div
            key={model.id}
            className="animate-fade-in opacity-0"
            style={{
              animationDelay: `${index * 80}ms`,
              animationFillMode: "forwards",
            }}
          >
            <ModelCard
              model={model}
              index={index}
              isCompleted={progress.models[model.id]?.status === "completed"}
              isLocked={!isModelUnlocked(model.id, modelIds)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
