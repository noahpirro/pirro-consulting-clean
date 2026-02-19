import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { GlowCard } from "./GlowCard";
import { TextReveal } from "./TextReveal";
import { Lightbulb, ArrowRight } from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Prozesse, die jeder versteht",
    description: "Klare Abläufe für jeden Bereich – von der ersten Kundenanfrage bis zur Rechnung. Dein Team weiß immer, was als nächstes zu tun ist.",
    highlight: "Keine Rückfragen mehr",
  },
  {
    number: "02",
    title: "Automatisierung, die funktioniert",
    description: "Wir automatisieren die Aufgaben, die dich und dein Team ausbremsen. Mit Lösungen, die im Alltag wirklich funktionieren.",
    highlight: "Stunden pro Woche sparen",
  },
  {
    number: "03",
    title: "KI-gestützte Effizienz",
    description: "Von intelligenten Chatbots bis zu automatisierter Datenverarbeitung – KI dort, wo sie echten Mehrwert bringt.",
    highlight: "Zukunftssicher aufgestellt",
  },
];

export const Solution = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/10 px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-foreground/60" />
            <span className="text-sm text-foreground/60">Die Lösung</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <TextReveal text="Dein Unternehmen als" />
            <br />
            <TextReveal text="funktionierendes System" delay={0.2} />
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Wir bauen dir ein digitales Fundament, das mitwächst. Keine isolierten Quick-Fixes, sondern ein durchdachtes System.
          </p>
        </AnimatedSection>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <GlowCard glowColor="rgba(0,0,0,0.06)" tiltStrength={5}>
                <div className="relative bg-secondary border border-border rounded-2xl p-8 h-full overflow-hidden">
                  {/* Number */}
                  <motion.span 
                    className="text-7xl md:text-8xl font-display font-bold text-foreground/[0.05] absolute -top-4 -right-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    {solution.number}
                  </motion.span>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-display font-bold mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    
                    {/* Highlight Badge */}
                    <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium">
                      <ArrowRight className="w-4 h-4" />
                      {solution.highlight}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
