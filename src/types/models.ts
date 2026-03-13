import type { Exercise } from "./exercises";

export interface ELI5Section {
  title: string;
  content: string;
}

export interface ELI5Explanation {
  hook: string;
  analogy: string;
  sections: ELI5Section[];
  ahaQuote: string;
  realWorldExample: string;
}

export interface MentalModel {
  id: string;
  categoryId: string;
  title: string;
  emoji: string;
  difficulty: 1 | 2 | 3;
  estimatedMinutes: number;
  eli5: ELI5Explanation;
  exercises: Exercise[];
  relatedModelIds: string[];
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  modelCount: number;
}
