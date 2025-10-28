"use client";
import { useEffect, useRef, useState } from "react";

export default function Counter({
  target,
  description,
  icon,
  duration = 2000,
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null); // ✅ correct for JS

  // Detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target); // stop observing once triggered
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current; // ✅ copy current ref value

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Animate counter
  useEffect(() => {
    if (!hasStarted) return;

    const start = Math.floor(Math.random() * target * 0.7);
    setCount(start);

    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    const increment = (target - start) / totalFrames;

    let current = start;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [hasStarted, target, duration]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-15 md:py-20 transition-all duration-700 ease-out"
    >
      {icon}
      <span className="mt-8 text-6xl text-[var(--foreground)] tabular-nums">
        {count.toLocaleString()}
      </span>
      <p className="mt-2 text-[var(--foreground)] opacity-90 text-2xl">
        {description}
      </p>
    </div>
  );
}
