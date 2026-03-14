import { useState } from "react";
import type { Exercise } from "../../types/exercises";
import { MultipleChoice } from "./MultipleChoice";
import { TrueFalse } from "./TrueFalse";
import { FillInBlank } from "./FillInBlank";
import { ScenarioApplication } from "./ScenarioApplication";
import { Matching } from "./Matching";
import { RealWorldChallenge } from "./RealWorldChallenge";
import { ArrowRight, Trophy } from "lucide-react";

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
      {/* Progress journey indicator */}
      <div className="mb-6 flex items-center justify-center px-4">
        {exercises.map((_, i) => (
          <div key={i} className="flex items-center">
            {/* Circle */}
            <div
              className={`relative flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-500 ${
                i < currentIndex
                  ? scores[i]
                    ? "border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                    : "border-red-400 bg-red-400 text-white shadow-lg shadow-red-400/30"
                  : i === currentIndex
                    ? "border-violet-500 bg-violet-500/10 text-violet-600 shadow-lg shadow-violet-500/40 ring-4 ring-violet-500/20 dark:text-violet-400"
                    : "border-zinc-300 bg-white text-zinc-400 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-500"
              }`}
            >
              {i < currentIndex ? (
                scores[i] ? (
                  <span className="text-sm">&#10003;</span>
                ) : (
                  <span className="text-sm">&#10005;</span>
                )
              ) : (
                i + 1
              )}
              {i === currentIndex && (
                <span className="absolute inset-0 animate-ping rounded-full border-2 border-violet-500 opacity-30" />
              )}
            </div>
            {/* Connecting line */}
            {i < exercises.length - 1 && (
              <div
                className={`h-0.5 w-6 transition-all duration-500 sm:w-10 ${
                  i < currentIndex
                    ? scores[i]
                      ? "bg-emerald-400"
                      : "bg-red-300"
                    : "bg-zinc-200 dark:bg-zinc-700"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Floating question counter badge */}
      <div className="mb-5 flex justify-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50/80 px-4 py-1.5 text-sm font-semibold text-violet-700 shadow-sm backdrop-blur-sm dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300">
          Question {currentIndex + 1} of {exercises.length}
        </span>
      </div>

      {/* Exercise */}
      <div key={currentExercise.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {renderExercise()}
      </div>

      {/* Next / See Results button */}
      {answered && (
        <div className="mt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {isLast ? (
            <button
              onClick={handleNext}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-500 px-8 py-5 text-lg font-bold text-white shadow-3d-deep transition-all duration-300 hover:[transform:perspective(800px)_rotateX(2deg)_translateY(-3px)] hover:shadow-3d-hover active:[transform:translateY(2px)]"
            >
              <Trophy className="h-6 w-6 animate-bounce" />
              See Results
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-4 text-base font-bold text-white shadow-3d transition-all duration-300 hover:[transform:perspective(800px)_translateY(-2px)] hover:shadow-3d-hover active:[transform:translateY(2px)]"
            >
              Next Question
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
