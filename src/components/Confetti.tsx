import { useEffect } from "react";
import confetti from "canvas-confetti";

interface ConfettiProps {
  fire: boolean;
}

export function Confetti({ fire }: ConfettiProps) {
  useEffect(() => {
    if (!fire) return;

    const duration = 3000;
    const end = Date.now() + duration;

    // Side cannons
    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.65 },
        colors: ["#7c3aed", "#a855f7", "#ec4899", "#f97316", "#10b981", "#fbbf24"],
        gravity: 0.8,
        scalar: 1.2,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.65 },
        colors: ["#7c3aed", "#a855f7", "#ec4899", "#f97316", "#10b981", "#fbbf24"],
        gravity: 0.8,
        scalar: 1.2,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // Epic center burst
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 120,
        origin: { x: 0.5, y: 0.4 },
        colors: ["#7c3aed", "#a855f7", "#ec4899", "#f97316", "#10b981", "#fbbf24"],
        gravity: 0.6,
        scalar: 1.4,
        ticks: 200,
      });
    }, 200);

    // Star burst
    setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 360,
        origin: { x: 0.5, y: 0.45 },
        shapes: ["star"],
        colors: ["#fbbf24", "#f97316"],
        gravity: 0.4,
        scalar: 1.6,
        ticks: 150,
      });
    }, 600);
  }, [fire]);

  return null;
}
