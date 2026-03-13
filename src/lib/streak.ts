import { STREAK_FREEZE_INTERVAL } from "./constants";

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function getYesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function checkStreak(
  lastActiveDate: string,
  currentStreak: number,
  streakFreezes: number
): {
  streak: number;
  freezesUsed: number;
  streakBroken: boolean;
} {
  const today = getToday();
  const yesterday = getYesterday();

  if (lastActiveDate === today) {
    return { streak: currentStreak, freezesUsed: 0, streakBroken: false };
  }

  if (lastActiveDate === yesterday) {
    return { streak: currentStreak + 1, freezesUsed: 0, streakBroken: false };
  }

  // Missed more than 1 day
  const lastDate = new Date(lastActiveDate);
  const todayDate = new Date(today);
  const daysMissed = Math.floor(
    (todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
  ) - 1;

  if (daysMissed <= streakFreezes) {
    return {
      streak: currentStreak + 1,
      freezesUsed: daysMissed,
      streakBroken: false,
    };
  }

  return { streak: 1, freezesUsed: 0, streakBroken: currentStreak > 0 };
}

export function calculateFreezesEarned(activityLog: string[]): number {
  return Math.floor(activityLog.length / STREAK_FREEZE_INTERVAL);
}

export function addActivityToday(activityLog: string[]): string[] {
  const today = getToday();
  if (activityLog.includes(today)) return activityLog;
  return [...activityLog, today].slice(-90); // Keep last 90 days
}
