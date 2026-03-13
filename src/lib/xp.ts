import { LEVEL_FORMULA, XP_FOR_LEVEL, XP_VALUES } from "./constants";

export function calculateLevel(totalXP: number): number {
  return LEVEL_FORMULA(totalXP);
}

export function xpForNextLevel(totalXP: number): number {
  const currentLevel = calculateLevel(totalXP);
  return XP_FOR_LEVEL(currentLevel + 1);
}

export function xpProgress(totalXP: number): number {
  const currentLevel = calculateLevel(totalXP);
  const currentLevelXP = XP_FOR_LEVEL(currentLevel);
  const nextLevelXP = XP_FOR_LEVEL(currentLevel + 1);
  const range = nextLevelXP - currentLevelXP;
  if (range <= 0) return 100;
  return Math.round(((totalXP - currentLevelXP) / range) * 100);
}

export function calculateLessonXP(
  exerciseCorrect: number,
  exerciseTotal: number,
  isPerfectQuiz: boolean,
  isDailyChallenge: boolean,
  currentStreak: number
): { total: number; breakdown: { label: string; xp: number }[] } {
  const breakdown: { label: string; xp: number }[] = [];

  breakdown.push({ label: "Lesson Complete", xp: XP_VALUES.LESSON_COMPLETE });

  const exerciseXP = exerciseCorrect * XP_VALUES.EXERCISE_CORRECT;
  if (exerciseXP > 0) {
    breakdown.push({ label: `${exerciseCorrect}/${exerciseTotal} Correct`, xp: exerciseXP });
  }

  if (isPerfectQuiz) {
    breakdown.push({ label: "Perfect Score Bonus", xp: XP_VALUES.QUIZ_PERFECT_BONUS });
  }

  if (isDailyChallenge) {
    breakdown.push({ label: "Daily Challenge Bonus", xp: XP_VALUES.DAILY_CHALLENGE_BONUS });
  }

  const streakBonus = Math.min(
    currentStreak * XP_VALUES.STREAK_BONUS_PER_DAY,
    XP_VALUES.STREAK_BONUS_CAP
  );
  if (streakBonus > 0) {
    breakdown.push({ label: `${currentStreak}-Day Streak Bonus`, xp: streakBonus });
  }

  const total = breakdown.reduce((sum, item) => sum + item.xp, 0);
  return { total, breakdown };
}
