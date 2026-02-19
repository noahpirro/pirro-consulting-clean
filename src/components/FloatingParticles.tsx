import { useMemo } from "react";

interface FloatingParticlesProps {
  /** Number of particles (default 15) */
  count?: number;
  /** Particle color (default "rgba(255,255,255,0.15)") */
  color?: string;
}

/**
 * Subtle floating particles using pure CSS animations for performance.
 * No Framer Motion — uses @keyframes with GPU-composited transforms only.
 */
export const FloatingParticles = ({
  count = 15,
  color = "rgba(255,255,255,0.15)",
}: FloatingParticlesProps) => {
  const particles = useMemo(() => {
    const items: { id: number; style: React.CSSProperties }[] = [];
    for (let i = 0; i < count; i++) {
      const hash = ((i * 2654435761) >>> 0) / 4294967296;
      const hash2 = (((i + 1) * 2654435761) >>> 0) / 4294967296;
      items.push({
        id: i,
        style: {
          left: `${(hash * 100).toFixed(1)}%`,
          top: `${(hash2 * 100).toFixed(1)}%`,
          width: 1 + hash * 2.5,
          height: 1 + hash * 2.5,
          backgroundColor: color,
          animationDuration: `${10 + hash2 * 10}s`,
          animationDelay: `${hash * 5}s`,
        },
      });
    }
    return items;
  }, [count, color]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-[1]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float-particle"
          style={p.style}
        />
      ))}
    </div>
  );
};
