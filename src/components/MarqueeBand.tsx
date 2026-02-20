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
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="flex whitespace-nowrap">
        <div
          className="flex items-center gap-8 md:gap-12"
          style={{
            animation: `marquee ${speed}s linear infinite`,
          }}
        >
          {repeated.map((text, i) => (
            <span key={i} className="flex items-center gap-8 md:gap-12" {...(i >= texts.length ? { "aria-hidden": true } : {})}>
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
        </div>
      </div>
    </section>
  );
};
