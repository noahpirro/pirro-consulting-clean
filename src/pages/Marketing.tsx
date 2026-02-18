import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Megaphone, Target, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const benefits = [
  "Mehr qualifizierte Leads",
  "Messbare Ergebnisse",
  "Skalierbare Kampagnen",
];

const stats = [
  { value: "8+", label: "Jahre Online Marketing Erfahrung" },
  { value: "1 Mio €", label: "Werbebudget verwaltet" },
  { value: "1.500+", label: "Kampagnen" },
];

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Datengetriebene Werbekampagnen auf Meta, Google & LinkedIn. Wir optimieren kontinuierlich für maximalen ROI.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Strategische Präsenz auf den relevanten Plattformen. Content, der Aufmerksamkeit erregt und Vertrauen aufbaut.",
  },
  {
    icon: TrendingUp,
    title: "Lead-Generierung",
    description: "Systematische Neukundengewinnung durch optimierte Funnels und automatisierte Follow-up-Prozesse.",
  },
  {
    icon: BarChart3,
    title: "Marketing Automatisierung",
    description: "E-Mail-Sequenzen, Retargeting und CRM-Integration. Dein Marketing läuft auch, wenn du schläfst.",
  },
];

const Marketing = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Marketing & Neukundengewinnung
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Mehr Kunden.
              <br />
              Weniger Aufwand.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Wir entwickeln und betreuen deine Marketing-Kampagnen – von der Strategie bis zur Umsetzung.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="h-14 px-8 text-base font-medium group">
                Kostenlose Marketing-Analyse
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Unsere Erfahrung
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Zahlen, die <span className="text-primary">überzeugen</span>
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className="flex flex-col items-center justify-center text-center p-8 bg-card border border-border rounded-2xl h-40"
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-muted-foreground text-center">{stat.label}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Unsere Marketing-Leistungen
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="p-8 bg-card border border-border rounded-2xl h-full"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Bereit für mehr Neukunden?
            </h2>
            <p className="text-background/70 max-w-xl mx-auto mb-8">
              Lass uns gemeinsam herausfinden, wie wir dein Marketing auf das nächste Level bringen können.
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 h-14 px-8 group">
                Jetzt Gespräch vereinbaren
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Marketing;
