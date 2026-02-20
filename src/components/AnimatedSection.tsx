import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up"
}: AnimatedSectionProps) => {
  const [ref, inView] = useInView<HTMLDivElement>({ margin: "-100px" });

  const getTransform = () => {
    if (inView) return "translate(0,0)";
    switch (direction) {
      case "up": return "translate(0,60px)";
      case "down": return "translate(0,-60px)";
      case "left": return "translate(60px,0)";
      case "right": return "translate(-60px,0)";
      case "none": return "translate(0,0)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};
