import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
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
        <Link to="/explore" className="mt-4 inline-block text-indigo-500 hover:underline">
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

  return (
    <div className="space-y-6">
      <Link
        to="/explore"
        className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Categories
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          {category.name}
        </h1>
        <p className="mt-1 text-zinc-500 dark:text-zinc-400">
          {category.description}
        </p>
        <div className="mt-3 flex items-center gap-4">
          <span className="text-sm text-zinc-500">
            {completedCount}/{models.length} completed
          </span>
          <div className="h-2 flex-1 max-w-xs overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
            <div
              className="h-full rounded-full bg-indigo-500 transition-all duration-500"
              style={{ width: `${(completedCount / models.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {models.map((model, index) => (
          <ModelCard
            key={model.id}
            model={model}
            index={index}
            isCompleted={progress.models[model.id]?.status === "completed"}
            isLocked={!isModelUnlocked(model.id, modelIds)}
          />
        ))}
      </div>
    </div>
  );
}
