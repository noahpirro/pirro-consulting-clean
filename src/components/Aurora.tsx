/**
 * Dynamic aurora / gradient mesh background effect.
 * Uses CSS animations instead of Framer Motion for GPU performance.
 * Place inside a section with `position: relative` and `overflow: hidden`.
 */
export const Aurora = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
    {/* Primary aurora — CSS animation, GPU-composited */}
    <div
      className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] animate-spin-slow"
      style={{
        background:
          "conic-gradient(from 230deg at 51% 52%, hsl(var(--highlight) / 0.12) 0deg, hsl(var(--highlight) / 0.04) 67.5deg, hsl(280 80% 60% / 0.06) 135deg, hsl(var(--highlight) / 0.1) 202.5deg, hsl(220 80% 60% / 0.04) 270deg, hsl(var(--highlight) / 0.08) 337.5deg, hsl(var(--highlight) / 0.12) 360deg)",
        filter: "blur(80px)",
        willChange: "transform",
        animationDuration: "60s",
      }}
    />
    {/* Secondary glow — static, no animation needed */}
    <div
      className="absolute top-1/4 right-0 w-[80%] h-[80%] rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(var(--highlight) / 0.08) 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
    />
  </div>
);
