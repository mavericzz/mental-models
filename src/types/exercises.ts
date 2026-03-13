export interface MultipleChoiceExercise {
  type: "multiple-choice";
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TrueFalseExercise {
  type: "true-false";
  id: string;
  statement: string;
  correct: boolean;
  explanation: string;
}

export interface FillInBlankExercise {
  type: "fill-in-blank";
  id: string;
  textBefore: string;
  textAfter: string;
  acceptedAnswers: string[];
  hint?: string;
  explanation: string;
}

export interface ScenarioExercise {
  type: "scenario";
  id: string;
  scenario: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface MatchingExercise {
  type: "matching";
  id: string;
  instruction: string;
  pairs: { left: string; right: string }[];
  explanation: string;
}

export interface RealWorldChallengeExercise {
  type: "real-world";
  id: string;
  challenge: string;
  prompts: string[];
  exampleResponse: string;
}

export type Exercise =
  | MultipleChoiceExercise
  | TrueFalseExercise
  | FillInBlankExercise
  | ScenarioExercise
  | MatchingExercise
  | RealWorldChallengeExercise;
