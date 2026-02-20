import { Search, FileText, Rocket, GraduationCap, Route } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "./AnimatedSection";
import { TextReveal } from "./TextReveal";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Potenzialanalyse",
    subtitle: "Wir verstehen, wo du stehst",
    description: "Kostenlose Analyse deiner aktuellen Situation. Welche Prozesse kosten Zeit? Wo entstehen Fehler?",
    duration: "30 Min Call",
  },
  {
    icon: FileText,
    number: "02",
    title: "Strategie & Konzept",
    subtitle: "Dein individueller Fahrplan",
    description: "Maßgeschneidertes Konzept für deine spezifischen Herausforderungen. Keine Standard-Lösung.",
    duration: "1-2 Wochen",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Umsetzung",
    subtitle: "Wir bauen – du profitierst",
    description: "Wir setzen alles im Hintergrund um, während du dich auf dein Geschäft konzentrierst.",
    duration: "2-6 Wochen",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Übergabe & Schulung",
    subtitle: "Du bist startklar",
    description: "Umfassende Schulung für dich und dein Team. Bei Fragen sind wir weiterhin da.",
    duration: "1 Woche",
  },
];

const ConnectingLine = () => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent"
      style={{
        transform: inView ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 1s ease 0.5s",
      }}
    />
  );
};

const StepCircle = ({ step, index }: { step: typeof steps[number]; index: number }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1) rotate(0deg)" : "scale(0) rotate(-180deg)",
        transition: `opacity 0.6s ease ${index * 0.15 + 0.3}s, transform 0.6s ease ${index * 0.15 + 0.3}s`,
      }}
    >
      {/* Outer Ring */}
      <div className="w-28 h-28 rounded-full border-2 border-foreground/10 flex items-center justify-center">
        {/* Inner Circle */}
        <div
          className="w-20 h-20 rounded-full bg-foreground text-background flex flex-col items-center justify-center hover:scale-110 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-all"
        >
          <step.icon className="w-6 h-6 mb-1" strokeWidth={1.5} />
          <span className="text-xs font-bold">{step.number}</span>
        </div>
      </div>
    </div>
  );
};

export const Process = () => {
  return (
    <section id="process" className="section-padding bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/10 px-4 py-2 rounded-full mb-6">
            <Route className="w-4 h-4 text-foreground/60" />
            <span className="text-sm text-foreground/60">Der Ablauf</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            <TextReveal text="So läuft eine Zusammenarbeit ab" />
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <ConnectingLine />

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div
                  className="relative text-center lg:text-center hover:-translate-y-2 transition-transform"
                >
                  {/* Step Circle */}
                  <div className="flex lg:justify-center mb-6">
                    <StepCircle step={step} index={index} />
                  </div>

                  {/* Content */}
                  <div>
                    <span className="inline-block text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full mb-3">
                      {step.duration}
                    </span>
                    <h3 className="text-lg font-display font-bold mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
