import { useEffect } from "react";
import { useProgressContext } from "../context/ProgressContext";
import { badges } from "../data/badges";
import { categories } from "../data/categories";
import { getModelsByCategory } from "../data/models";

export function useBadgeChecker() {
  const { progress, earnBadge } = useProgressContext();

  useEffect(() => {
    const completedModels = Object.entries(progress.models).filter(
      ([, m]) => m.status === "completed"
    );
    const completedCount = completedModels.length;
    const perfectQuizCount = completedModels.filter(
      ([, m]) => m.quizScore === 100
    ).length;

    for (const badge of badges) {
      if (progress.badges[badge.id]?.earned) continue;

      let shouldEarn = false;

      switch (badge.criteria.type) {
        case "models_completed":
          shouldEarn = completedCount >= badge.criteria.count;
          break;
        case "category_completed": {
          const catModels = getModelsByCategory(badge.criteria.categoryId);
          shouldEarn = catModels.every(
            (m) => progress.models[m.id]?.status === "completed"
          );
          break;
        }
        case "category_started": {
          const catModels = getModelsByCategory(badge.criteria.categoryId);
          const started = catModels.filter(
            (m) => progress.models[m.id]?.status === "completed"
          ).length;
          shouldEarn = started >= badge.criteria.count;
          break;
        }
        case "streak":
          shouldEarn = progress.currentStreak >= badge.criteria.days;
          break;
        case "quiz_perfect":
          shouldEarn = perfectQuizCount >= badge.criteria.count;
          break;
        case "total_xp":
          shouldEarn = progress.totalXP >= badge.criteria.amount;
          break;
        case "all_categories_started":
          shouldEarn = categories.every((cat) => {
            const catModels = getModelsByCategory(cat.id);
            return catModels.some(
              (m) => progress.models[m.id]?.status === "completed"
            );
          });
          break;
        case "all_completed": {
          const totalModels = categories.reduce((sum, cat) => {
            return sum + getModelsByCategory(cat.id).length;
          }, 0);
          shouldEarn = completedCount >= totalModels;
          break;
        }
      }

      if (shouldEarn) {
        earnBadge(badge.id);
      }
    }
  }, [progress.models, progress.currentStreak, progress.totalXP, progress.badges, earnBadge]);
}
