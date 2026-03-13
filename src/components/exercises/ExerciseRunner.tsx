import { useState } from "react";
import type { Exercise } from "../../types/exercises";
import { MultipleChoice } from "./MultipleChoice";
import { TrueFalse } from "./TrueFalse";
import { FillInBlank } from "./FillInBlank";
import { ScenarioApplication } from "./ScenarioApplication";
import { Matching } from "./Matching";
import { RealWorldChallenge } from "./RealWorldChallenge";
import { ArrowRight } from "lucide-react";

interface ExerciseRunnerProps {
  exercises: Exercise[];
  onComplete: (scores: boolean[]) => void;
}

export function ExerciseRunner({ exercises, onComplete }: ExerciseRunnerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<boolean[]>([]);
  const [answered, setAnswered] = useState(false);

  const currentExercise = exercises[currentIndex];
  const isLast = currentIndex === exercises.length - 1;

  const handleAnswer = (correct: boolean) => {
    setScores((prev) => [...prev, correct]);
    setAnswered(true);
  };

  const handleNext = () => {
    if (isLast) {
      onComplete([...scores]);
    } else {
      setCurrentIndex((i) => i + 1);
      setAnswered(false);
    }
  };

  const renderExercise = () => {
    switch (currentExercise.type) {
      case "multiple-choice":
        return <MultipleChoice exercise={currentExercise} onAnswer={handleAnswer} />;
      case "true-false":
        return <TrueFalse exercise={currentExercise} onAnswer={handleAnswer} />;
      case "fill-in-blank":
        return <FillInBlank exercise={currentExercise} onAnswer={handleAnswer} />;
      case "scenario":
        return <ScenarioApplication exercise={currentExercise} onAnswer={handleAnswer} />;
      case "matching":
        return <Matching exercise={currentExercise} onAnswer={handleAnswer} />;
      case "real-world":
        return <RealWorldChallenge exercise={currentExercise} onAnswer={handleAnswer} />;
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress indicator */}
      <div className="mb-6 flex items-center gap-2">
        {exercises.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all ${
              i < currentIndex
                ? scores[i]
                  ? "bg-emerald-500"
                  : "bg-red-400"
                : i === currentIndex
                  ? "bg-indigo-500"
                  : "bg-zinc-200 dark:bg-zinc-700"
            }`}
          />
        ))}
      </div>

      <div className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">
        Question {currentIndex + 1} of {exercises.length}
      </div>

      {/* Exercise */}
      <div key={currentExercise.id}>{renderExercise()}</div>

      {/* Next button */}
      {answered && (
        <button
          onClick={handleNext}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          {isLast ? "See Results" : "Next Question"}
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
