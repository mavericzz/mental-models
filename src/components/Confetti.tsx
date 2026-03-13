import { useEffect } from "react";
import confetti from "canvas-confetti";

interface ConfettiProps {
  fire: boolean;
}

export function Confetti({ fire }: ConfettiProps) {
  useEffect(() => {
    if (!fire) return;

    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ["#6366f1", "#818cf8", "#a5b4fc", "#34d399", "#fbbf24"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ["#6366f1", "#818cf8", "#a5b4fc", "#34d399", "#fbbf24"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Big burst in the center
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { x: 0.5, y: 0.5 },
        colors: ["#6366f1", "#818cf8", "#a5b4fc", "#34d399", "#fbbf24"],
      });
    }, 300);
  }, [fire]);

  return null;
}
