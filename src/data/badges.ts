export interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  criteria: BadgeCriteria;
}

export type BadgeCriteria =
  | { type: "models_completed"; count: number }
  | { type: "category_completed"; categoryId: string }
  | { type: "category_started"; categoryId: string; count: number }
  | { type: "streak"; days: number }
  | { type: "quiz_perfect"; count: number }
  | { type: "total_xp"; amount: number }
  | { type: "all_categories_started" }
  | { type: "all_completed" };

export const badges: Badge[] = [
  {
    id: "first-steps",
    name: "First Steps",
    description: "Complete your first mental model",
    emoji: "👶",
    criteria: { type: "models_completed", count: 1 },
  },
  {
    id: "getting-started",
    name: "Getting Started",
    description: "Complete 5 mental models",
    emoji: "🌱",
    criteria: { type: "models_completed", count: 5 },
  },
  {
    id: "ten-strong",
    name: "Ten Strong",
    description: "Complete 10 mental models",
    emoji: "💪",
    criteria: { type: "models_completed", count: 10 },
  },
  {
    id: "quarter-century",
    name: "Quarter Century",
    description: "Complete 25 mental models",
    emoji: "🏅",
    criteria: { type: "models_completed", count: 25 },
  },
  {
    id: "half-way",
    name: "Half Way There",
    description: "Complete 50 mental models",
    emoji: "🎯",
    criteria: { type: "models_completed", count: 50 },
  },
  {
    id: "century",
    name: "Century Club",
    description: "Complete all 109 mental models",
    emoji: "🏆",
    criteria: { type: "all_completed" },
  },
  {
    id: "streak-3",
    name: "Three Peat",
    description: "Maintain a 3-day streak",
    emoji: "🔥",
    criteria: { type: "streak", days: 3 },
  },
  {
    id: "streak-7",
    name: "Week Warrior",
    description: "Maintain a 7-day streak",
    emoji: "⚡",
    criteria: { type: "streak", days: 7 },
  },
  {
    id: "streak-30",
    name: "Monthly Master",
    description: "Maintain a 30-day streak",
    emoji: "🌟",
    criteria: { type: "streak", days: 30 },
  },
  {
    id: "streak-100",
    name: "Unstoppable",
    description: "Maintain a 100-day streak",
    emoji: "💎",
    criteria: { type: "streak", days: 100 },
  },
  {
    id: "quiz-genius-5",
    name: "Sharp Mind",
    description: "Get 5 perfect quiz scores",
    emoji: "🧠",
    criteria: { type: "quiz_perfect", count: 5 },
  },
  {
    id: "quiz-genius-20",
    name: "Quiz Genius",
    description: "Get 20 perfect quiz scores",
    emoji: "🎓",
    criteria: { type: "quiz_perfect", count: 20 },
  },
  {
    id: "xp-1000",
    name: "XP Hunter",
    description: "Earn 1,000 total XP",
    emoji: "✨",
    criteria: { type: "total_xp", amount: 1000 },
  },
  {
    id: "xp-5000",
    name: "XP Legend",
    description: "Earn 5,000 total XP",
    emoji: "⭐",
    criteria: { type: "total_xp", amount: 5000 },
  },
  {
    id: "explorer",
    name: "Explorer",
    description: "Start at least one model in every category",
    emoji: "🗺️",
    criteria: { type: "all_categories_started" },
  },
  {
    id: "finance-master",
    name: "Money Mind",
    description: "Complete all Finance models",
    emoji: "💰",
    criteria: { type: "category_completed", categoryId: "finance" },
  },
  {
    id: "psychology-master",
    name: "Mind Reader",
    description: "Complete all Psychology models",
    emoji: "🔮",
    criteria: { type: "category_completed", categoryId: "psychology" },
  },
  {
    id: "habits-master",
    name: "Habit Builder",
    description: "Complete all Habits models",
    emoji: "🔄",
    criteria: { type: "category_completed", categoryId: "habits" },
  },
  {
    id: "leadership-master",
    name: "Born Leader",
    description: "Complete all Leadership models",
    emoji: "👑",
    criteria: { type: "category_completed", categoryId: "leadership" },
  },
  {
    id: "systems-master",
    name: "Systems Thinker",
    description: "Complete all Systems Thinking models",
    emoji: "🕸️",
    criteria: {
      type: "category_completed",
      categoryId: "systems-thinking",
    },
  },
];
