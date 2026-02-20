import { useInView } from "@/hooks/useInView";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: 1000, suffix: "+", label: "Stunden eingespart", prefix: "" },
  { value: 100, suffix: "+", label: "Automationen gebaut", prefix: "" },
  { value: 98, suffix: "%", label: "Weiterempfehlungsrate", prefix: "" },
  { value: 4, suffix: " Wo.", label: "bis erste Ergebnisse", prefix: "\u2205 " },
];

export const BigNumbers = () => {
  const [sectionRef, sectionInView] = useInView<HTMLElement>();
  const [lineRef, lineInView] = useInView<HTMLDivElement>();

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div
        className={`container mx-auto px-4 relative z-10 transition-all duration-700 ease-out ${
          sectionInView ? "opacity-100 scale-100" : "opacity-0 scale-[0.9]"
        }`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ease-out ${
                sectionInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: sectionInView ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-background mb-2">
                <span className="text-background/50">{stat.prefix}</span>
                <AnimatedCounter
                  value={stat.value}
                  duration={2.5}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm md:text-base text-background/50 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient line */}
      <div
        ref={lineRef}
        className={`absolute bottom-0 left-0 right-0 h-px transition-transform duration-[1500ms] ease-out origin-center ${
          lineInView ? "scale-x-100" : "scale-x-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--highlight) / 0.4), transparent)",
          transitionDelay: lineInView ? "500ms" : "0ms",
        }}
      />
    </section>
  );
};
