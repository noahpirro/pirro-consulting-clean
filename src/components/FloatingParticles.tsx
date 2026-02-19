import { motion } from "framer-motion";
import { useMemo } from "react";

interface FloatingParticlesProps {
  /** Number of particles (default 30) */
  count?: number;
  /** Particle color class (default "bg-background/20") */
  color?: string;
}

interface Particle {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
  moveX: number;
  moveY: number;
}

/**
 * Subtle floating particles for dark sections.
 * Place inside a section with `position: relative` and `overflow: hidden`.
 */
export const FloatingParticles = ({
  count = 30,
  color = "bg-background/20",
}: FloatingParticlesProps) => {
  const particles = useMemo<Particle[]>(() => {
    const seeded: Particle[] = [];
    for (let i = 0; i < count; i++) {
      // Use deterministic-ish values based on index to avoid layout shift
      const hash = ((i * 2654435761) >>> 0) / 4294967296;
      const hash2 = (((i + 1) * 2654435761) >>> 0) / 4294967296;
      seeded.push({
        id: i,
        x: `${(hash * 100).toFixed(1)}%`,
        y: `${(hash2 * 100).toFixed(1)}%`,
        size: 1 + hash * 3,
        duration: 8 + hash2 * 12,
        delay: hash * 5,
        moveX: (hash - 0.5) * 60,
        moveY: (hash2 - 0.5) * 60,
      });
    }
    return seeded;
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${color}`}
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
          }}
          animate={{
            x: [0, p.moveX, 0],
            y: [0, p.moveY, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
