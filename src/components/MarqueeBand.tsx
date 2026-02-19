import { motion } from "framer-motion";

interface MarqueeBandProps {
  texts: string[];
  /** Scroll speed in seconds (default 20) */
  speed?: number;
  /** "light" = dark text on light bg, "dark" = light text on dark bg */
  variant?: "light" | "dark";
  className?: string;
}

export const MarqueeBand = ({
  texts,
  speed = 20,
  variant = "dark",
  className = "",
}: MarqueeBandProps) => {
  const isDark = variant === "dark";
  const repeated = [...texts, ...texts, ...texts, ...texts];

  return (
    <section
      className={`relative overflow-hidden py-6 md:py-8 select-none ${
        isDark ? "bg-foreground" : "bg-secondary"
      } ${className}`}
    >
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-8 md:gap-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: speed,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {repeated.map((text, i) => (
            <span key={i} className="flex items-center gap-8 md:gap-12">
              <span
                className={`text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight ${
                  isDark ? "text-background/90" : "text-foreground/90"
                }`}
              >
                {text}
              </span>
              <span
                className={`text-2xl md:text-4xl ${
                  isDark ? "text-highlight" : "text-primary"
                }`}
              >
                ✦
              </span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
