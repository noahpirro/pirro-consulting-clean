import { Clock, FolderSearch, Hourglass, AlertTriangle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection } from "./AnimatedSection";

const painPoints = [
  {
    icon: Clock,
    number: "01",
    title: "Du arbeitest im Unternehmen statt am Unternehmen",
    description: "Dein Kalender ist voll, trotzdem hast du das Gefühl, nie fertig zu werden. Statt strategisch zu denken, springst du von Aufgabe zu Aufgabe.",
    cost: "~15 Std./Woche",
    costLabel: "für operative Aufgaben verschwendet",
  },
  {
    icon: FolderSearch,
    number: "02",
    title: "Informationen sind überall – nur nicht da, wo du sie brauchst",
    description: "Kundendaten in E-Mails, Aufgaben in verschiedenen Tools, wichtige Infos im Chat-Verlauf verschollen. Dein Team fragt ständig nach.",
    cost: "€2.500+/Monat",
    costLabel: "an Produktivitätsverlust",
  },
  {
    icon: Hourglass,
    number: "03",
    title: "Routine-Aufgaben fressen deine wertvollste Ressource",
    description: "Angebote schreiben, Rechnungen erstellen, Kunden-Onboarding, Follow-ups – alles manuell. Stunden pro Woche gehen verloren.",
    cost: "€30.000+/Jahr",
    costLabel: "an Opportunitätskosten",
  },
];

export const Problem = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={sectionRef} id="problem" className="section-padding bg-secondary relative overflow-hidden">
      {/* Parallax Background Pattern */}
      <motion.div className="absolute inset-0 opacity-[0.02]" style={{ y: bgY }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/10 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-foreground/60" />
            <span className="text-sm text-foreground/60">Das Kernproblem</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Kommt dir das bekannt vor?
          </h2>
        </AnimatedSection>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <motion.div
                className="relative p-8 bg-background border border-border rounded-xl h-full group cursor-default overflow-hidden"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Number Background */}
                <span className="absolute top-4 right-4 text-8xl font-display font-bold text-foreground/[0.03] select-none">
                  {point.number}
                </span>

                <motion.div 
                  className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <point.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                </motion.div>
                
                <h3 className="text-lg font-display font-bold mb-4 leading-tight relative z-10">
                  {point.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm relative z-10 mb-4">
                  {point.description}
                </p>

                {/* Cost Badge */}
                <div className="relative z-10 inline-flex items-center gap-2 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">
                  <span className="text-red-600 font-bold text-sm">{point.cost}</span>
                  <span className="text-red-500/70 text-xs">{point.costLabel}</span>
                </div>

                {/* Hover Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Transition Statement */}
        <AnimatedSection className="max-w-3xl mx-auto" delay={0.3}>
          <motion.div 
            className="relative bg-foreground text-background p-8 md:p-12 rounded-2xl text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-xl md:text-2xl font-display font-bold leading-relaxed">
              Das Problem ist nicht fehlendes Engagement.
              <br />
              <span className="text-background/70">Das Problem ist ein fehlendes System.</span>
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
