import { useRef, useCallback, useEffect } from "react";

interface Tilt3DOptions {
  maxTilt?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
}

export function useTilt3D<T extends HTMLElement>({
  maxTilt = 8,
  scale = 1.02,
  speed = 400,
}: Tilt3DOptions = {}) {
  const ref = useRef<T>(null);
  const animationRef = useRef<number | null>(null);
  const currentTransform = useRef({ rotateX: 0, rotateY: 0, scale: 1 });

  const updateTransform = useCallback(
    (targetX: number, targetY: number, targetScale: number) => {
      const el = ref.current;
      if (!el) return;

      const lerp = (start: number, end: number, factor: number) =>
        start + (end - start) * factor;

      const animate = () => {
        const factor = 0.12;
        currentTransform.current.rotateX = lerp(
          currentTransform.current.rotateX,
          targetX,
          factor
        );
        currentTransform.current.rotateY = lerp(
          currentTransform.current.rotateY,
          targetY,
          factor
        );
        currentTransform.current.scale = lerp(
          currentTransform.current.scale,
          targetScale,
          factor
        );

        const { rotateX, rotateY, scale: s } = currentTransform.current;
        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${s}, ${s}, ${s})`;

        const diffX = Math.abs(rotateX - targetX);
        const diffY = Math.abs(rotateY - targetY);
        if (diffX > 0.01 || diffY > 0.01) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = requestAnimationFrame(animate);
    },
    []
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transformStyle = "preserve-3d";
    el.style.transition = `box-shadow ${speed}ms ease`;
    el.style.willChange = "transform";

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      const rotateX = (0.5 - y) * maxTilt;
      const rotateY = (x - 0.5) * maxTilt;

      updateTransform(rotateX, rotateY, scale);
    };

    const handleMouseLeave = () => {
      updateTransform(0, 0, 1);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [maxTilt, scale, speed, updateTransform]);

  return ref;
}
