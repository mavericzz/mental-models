export const XP_VALUES = {
  LESSON_COMPLETE: 50,
  QUIZ_PERFECT_BONUS: 30,
  EXERCISE_CORRECT: 10,
  DAILY_CHALLENGE_BONUS: 25,
  STREAK_BONUS_PER_DAY: 5,
  STREAK_BONUS_CAP: 50,
};

export const LEVEL_FORMULA = (xp: number) =>
  Math.floor(Math.sqrt(xp / 100)) + 1;

export const XP_FOR_LEVEL = (level: number) => Math.pow(level - 1, 2) * 100;

export const XP_FOR_NEXT_LEVEL = (xp: number) => {
  const currentLevel = LEVEL_FORMULA(xp);
  return XP_FOR_LEVEL(currentLevel + 1);
};

export const UNLOCK_INITIAL_COUNT = 3; // First 3 models per category are unlocked
export const STREAK_FREEZE_INTERVAL = 7; // Earn a freeze every 7 active days
export const REVIEW_INITIAL_INTERVAL = 1; // 1 day
export const REVIEW_EASE_FACTOR = 2.5;
