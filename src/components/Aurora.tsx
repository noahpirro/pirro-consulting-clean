import { motion } from "framer-motion";

/**
 * Dynamic aurora / gradient mesh background effect.
 * Place inside a section with `position: relative` and `overflow: hidden`.
 */
export const Aurora = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
    {/* Primary aurora band */}
    <motion.div
      className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%]"
      style={{
        background:
          "conic-gradient(from 230deg at 51% 52%, hsl(var(--highlight) / 0.15) 0deg, hsl(var(--highlight) / 0.05) 67.5deg, hsl(280 80% 60% / 0.08) 135deg, hsl(var(--highlight) / 0.12) 202.5deg, hsl(220 80% 60% / 0.06) 270deg, hsl(var(--highlight) / 0.1) 337.5deg, hsl(var(--highlight) / 0.15) 360deg)",
        filter: "blur(80px)",
      }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    {/* Secondary overlay */}
    <motion.div
      className="absolute top-1/4 right-0 w-[80%] h-[80%] rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(var(--highlight) / 0.1) 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 50, 0],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    {/* Tertiary glow */}
    <motion.div
      className="absolute bottom-0 left-1/4 w-[60%] h-[60%] rounded-full"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(280 60% 50% / 0.08) 0%, transparent 70%)",
        filter: "blur(80px)",
      }}
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -40, 0],
        y: [0, 40, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  </div>
);
