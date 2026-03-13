import { REVIEW_EASE_FACTOR, REVIEW_INITIAL_INTERVAL } from "./constants";

export function calculateNextReview(
  wasCorrect: boolean,
  currentInterval: number,
  easeFactor: number
): { nextInterval: number; newEaseFactor: number; nextReviewDate: string } {
  let nextInterval: number;
  let newEaseFactor = easeFactor;

  if (wasCorrect) {
    if (currentInterval === 0) {
      nextInterval = REVIEW_INITIAL_INTERVAL;
    } else {
      nextInterval = Math.round(currentInterval * easeFactor);
    }
    newEaseFactor = Math.min(easeFactor + 0.1, 3.0);
  } else {
    nextInterval = REVIEW_INITIAL_INTERVAL;
    newEaseFactor = Math.max(easeFactor - 0.2, 1.3);
  }

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + nextInterval);
  const nextReviewDate = nextDate.toISOString().slice(0, 10);

  return { nextInterval, newEaseFactor, nextReviewDate };
}

export function getModelsForReview(
  models: Record<string, { nextReviewDate?: string; status: string }>
): string[] {
  const today = new Date().toISOString().slice(0, 10);
  return Object.entries(models)
    .filter(
      ([, progress]) =>
        progress.status === "completed" &&
        progress.nextReviewDate &&
        progress.nextReviewDate <= today
    )
    .map(([id]) => id);
}

export function getInitialReviewState() {
  return {
    reviewInterval: 0,
    easeFactor: REVIEW_EASE_FACTOR,
    reviewCount: 0,
  };
}
