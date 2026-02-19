import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: 1000, suffix: "+", label: "Stunden eingespart", prefix: "" },
  { value: 100, suffix: "+", label: "Automationen gebaut", prefix: "" },
  { value: 98, suffix: "%", label: "Weiterempfehlungsrate", prefix: "" },
  { value: 4, suffix: " Wo.", label: "bis erste Ergebnisse", prefix: "∅ " },
];

export const BigNumbers = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

  return (
    <section
      ref={ref}
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

      <motion.div
        className="container mx-auto px-4 relative z-10"
        style={{ opacity, scale }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--highlight) / 0.4), transparent)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
};
