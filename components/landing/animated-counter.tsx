"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ target, suffix = "", duration = 1600, className }: AnimatedCounterProps) {
  const { ref, isInView } = useInView<HTMLParagraphElement>(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    let frame: number;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.round(easeOutQuart(progress) * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target, duration]);

  return (
    <p ref={ref} className={className}>
      {value}
      {suffix}
    </p>
  );
}
