export interface ModelProgress {
  status: "locked" | "available" | "in-progress" | "completed";
  completedAt?: string;
  quizScore?: number;
  exerciseScores: number[];
  xpEarned: number;
  reviewCount: number;
  nextReviewDate?: string;
  reviewInterval: number;
  easeFactor: number;
}

export interface BadgeProgress {
  earned: boolean;
  earnedAt?: string;
  seen: boolean;
}

export interface UserSettings {
  theme: "system" | "light" | "dark";
  soundEnabled: boolean;
  dailyGoal: number;
}

export interface UserProgress {
  version: number;
  userId: string;
  createdAt: string;
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
  streakFreezes: number;
  models: Record<string, ModelProgress>;
  badges: Record<string, BadgeProgress>;
  settings: UserSettings;
  activityLog: string[];
}
