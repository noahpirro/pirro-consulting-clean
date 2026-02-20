import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  separator?: string;
}

export const AnimatedCounter = ({ value, suffix = "", prefix = "", duration = 2, className = "" }: AnimatedCounterProps) => {
  const [ref, isInView] = useInView<HTMLSpanElement>({ margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(eased * value));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
      else setDisplayValue(value);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  const formatted = displayValue.toLocaleString("de-DE");

  return (
    <span
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.4s, transform 0.4s",
        display: "inline-block",
      }}
    >
      {prefix}{formatted}{suffix}
    </span>
  );
};
