import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "./AnimatedSection";
import { TextReveal } from "./TextReveal";
import { Bot, Zap, BarChart3, Target, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Animated node component for the background
const FloatingNode = ({ delay, x, y }: { delay: number; x: string; y: string }) => (
  <div
    className="absolute w-2 h-2 bg-foreground/20 rounded-full"
    style={{
      left: x,
      top: y,
      animation: `floatingNodePulse 3s ease-in-out ${delay}s infinite`,
    }}
  />
);

// Animated connection line
const ConnectionLine = ({ from, to, delay }: { from: string; to: string; delay: number }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="absolute h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"
      style={{
        left: from,
        width: to,
        top: "50%",
        transform: inView ? "scaleX(1)" : "scaleX(0)",
        opacity: inView ? 1 : 0,
        transition: `transform 1s ease ${delay}s, opacity 1s ease ${delay}s`,
      }}
    />
  );
};

// Workflow step component
const WorkflowStep = ({
  icon: Icon,
  title,
  description,
  step,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  step: number;
  delay: number;
}) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center text-center group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {/* Step number */}
      <span
        className="absolute -top-4 text-xs font-medium text-muted-foreground"
        style={{
          opacity: inView ? 1 : 0,
          transition: `opacity 0.5s ease ${delay + 0.2}s`,
        }}
      >
        0{step}
      </span>

      {/* Icon container */}
      <div
        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-secondary border border-border flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300 hover:scale-105"
      >
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-foreground group-hover:text-background transition-colors duration-300" />
      </div>

      {/* Title */}
      <h4 className="font-display font-semibold text-sm md:text-base mb-2">{title}</h4>

      {/* Description */}
      <p className="text-xs md:text-sm text-muted-foreground max-w-[140px] md:max-w-[160px]">{description}</p>
    </div>
  );
};

// Animated stat card
const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const [ref, inView] = useInView();

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = numericValue / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          setCount(numericValue);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [numericValue, delay]);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.9)",
        transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
      }}
    >
      <span className="block text-3xl md:text-4xl font-display font-bold text-foreground">
        {count}{value.includes('%') ? '%' : value.includes('+') ? '+' : ''}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
};

// Animated bar chart
const AnimatedChart = () => {
  const bars = [
    { height: 40, delay: 0.1 },
    { height: 65, delay: 0.2 },
    { height: 45, delay: 0.3 },
    { height: 80, delay: 0.4 },
    { height: 55, delay: 0.5 },
    { height: 90, delay: 0.6 },
    { height: 70, delay: 0.7 },
  ];

  const [ref, inView] = useInView();

  return (
    <div className="flex items-end justify-center gap-2 h-24" ref={ref}>
      {bars.map((bar, i) => (
        <div
          key={i}
          className="w-3 md:w-4 bg-foreground/20 rounded-t"
          style={{
            height: inView ? `${bar.height}%` : "0%",
            transition: `height 0.8s cubic-bezier(0.25,0.1,0.25,1) ${bar.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// Arrow indicator component
const ArrowIndicator = ({ index }: { index: number }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-10px)",
        transition: `opacity 0.5s ease ${0.8 + index * 0.2}s, transform 0.5s ease ${0.8 + index * 0.2}s`,
      }}
    >
      <ArrowRight className="w-4 h-4 text-muted-foreground" />
    </div>
  );
};

export const AISection = () => {
  const workflowSteps = [
    {
      icon: Target,
      title: "Datenerfassung",
      description: "Automatische Sammlung relevanter Geschäftsdaten",
      step: 1,
    },
    {
      icon: Bot,
      title: "KI-Analyse",
      description: "Intelligente Auswertung durch Machine Learning",
      step: 2,
    },
    {
      icon: Sparkles,
      title: "Personalisierung",
      description: "Maßgeschneiderte Lösungen für Ihr Unternehmen",
      step: 3,
    },
    {
      icon: Zap,
      title: "Automatisierung",
      description: "Effiziente Umsetzung ohne manuellen Aufwand",
      step: 4,
    },
  ];

  return (
    <section id="ai" className="section-padding relative overflow-hidden">
      {/* CSS keyframes for FloatingNode */}
      <style>{`
        @keyframes floatingNodePulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
      `}</style>

      {/* Background nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingNode delay={0} x="10%" y="20%" />
        <FloatingNode delay={0.5} x="85%" y="15%" />
        <FloatingNode delay={1} x="75%" y="70%" />
        <FloatingNode delay={1.5} x="15%" y="80%" />
        <FloatingNode delay={2} x="50%" y="10%" />
        <FloatingNode delay={0.3} x="30%" y="60%" />
        <FloatingNode delay={0.8} x="60%" y="85%" />
        <FloatingNode delay={1.2} x="90%" y="45%" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Bot className="w-4 h-4" />
            <span className="text-sm font-medium">KI-gestützte Prozesse</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 max-w-3xl mx-auto">
            <TextReveal text="Intelligente Automatisierung" />
            <span className="block text-muted-foreground"><TextReveal text="für Ihr Unternehmen" delay={0.2} /></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Unsere KI-Lösungen analysieren, personalisieren und automatisieren –
            damit Sie sich auf das Wesentliche konzentrieren können.
          </p>
        </AnimatedSection>

        {/* Workflow visualization */}
        <div className="relative mb-20 md:mb-28">
          {/* Connection lines (desktop) */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0">
            <ConnectionLine from="12.5%" to="75%" delay={0.3} />
          </div>

          {/* Workflow steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {workflowSteps.map((step, i) => (
              <WorkflowStep
                key={step.step}
                {...step}
                delay={0.2 + i * 0.15}
              />
            ))}
          </div>

          {/* Arrow indicators (desktop) */}
          <div className="hidden md:flex absolute top-[52px] left-0 right-0 justify-around px-[20%]">
            {[0, 1, 2].map((i) => (
              <ArrowIndicator key={i} index={i} />
            ))}
          </div>
        </div>

        {/* Stats and visualization grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Stats */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="bg-secondary/50 border border-border rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <BarChart3 className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Messbare Ergebnisse</span>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <StatCard value="85%" label="Zeitersparnis" delay={0.3} />
                <StatCard value="3x" label="schnellere Prozesse" delay={0.4} />
                <StatCard value="95%" label="Genauigkeit" delay={0.5} />
                <StatCard value="24/7" label="Verfügbarkeit" delay={0.6} />
              </div>

              {/* Mini chart */}
              <AnimatedChart />
            </div>
          </AnimatedSection>

          {/* Right: Feature highlights */}
          <AnimatedSection direction="right" delay={0.3}>
            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: "Automatisierung",
                  description: "KI übernimmt repetitive Aufgaben und spart wertvolle Arbeitszeit für strategische Tätigkeiten.",
                },
                {
                  icon: BarChart3,
                  title: "Intelligente Analyse",
                  description: "Datengetriebene Insights ermöglichen fundierte Entscheidungen in Echtzeit.",
                },
                {
                  icon: Target,
                  title: "Personalisierung",
                  description: "Maßgeschneiderte Lösungen, die sich an Ihre spezifischen Anforderungen anpassen.",
                },
              ].map((feature, i) => (
                <FeatureItem key={feature.title} feature={feature} index={i} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

// Feature list item component
const FeatureItem = ({ feature, index }: { feature: { icon: React.ElementType; title: string; description: string }; index: number }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="flex gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group cursor-default"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(20px)",
        transition: `opacity 0.5s ease ${0.4 + index * 0.1}s, transform 0.5s ease ${0.4 + index * 0.1}s`,
      }}
    >
      <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
        <feature.icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors duration-300" />
      </div>
      <div>
        <h4 className="font-display font-semibold mb-1">{feature.title}</h4>
        <p className="text-sm text-muted-foreground">{feature.description}</p>
      </div>
    </div>
  );
};
