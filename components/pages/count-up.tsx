"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

interface CountUpProps {
  target: number;
  display: string;
  duration?: number;
}

export function CountUp({ target, display, duration = 1800 }: CountUpProps) {
  const { ref, isInView } = useInView<HTMLSpanElement>(0.3);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView || done) return;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDone(true);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration, done]);

  if (done) return <span ref={ref}>{display}</span>;
  return <span ref={ref}>{count}</span>;
}
