import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  /** Glow color, e.g. "rgba(255,120,50,0.15)" */
  glowColor?: string;
  /** Tilt strength in degrees (default 8) */
  tiltStrength?: number;
}

export const GlowCard = ({
  children,
  className = "",
  glowColor = "rgba(255,120,50,0.12)",
  tiltStrength = 8,
}: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateX.set(((y - centerY) / centerY) * -tiltStrength);
    rotateY.set(((x - centerX) / centerX) * tiltStrength);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${glowColor}, transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative group ${className}`}
    >
      {/* Glow overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{ background }}
      />
      {/* Static gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${glowColor}, transparent, ${glowColor}, transparent)`,
          }}
        />
      </div>
      {/* Card content */}
      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
};
