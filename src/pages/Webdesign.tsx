import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layout, Smartphone, Zap, Search, CheckCircle, Palette } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const benefits = [
  "Conversion-optimiert",
  "Mobile-First Design",
  "SEO-Grundlagen inklusive",
];

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Hochkonvertierende Landing Pages für deine Kampagnen. Klar strukturiert, überzeugend getextet, auf Conversion optimiert.",
  },
  {
    icon: Palette,
    title: "Website-Design",
    description: "Moderne, professionelle Websites, die deine Marke repräsentieren und Besucher zu Kunden machen.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Perfekte Darstellung auf allen Geräten. Mobile-First-Ansatz für die beste User Experience.",
  },
  {
    icon: Search,
    title: "SEO-Optimierung",
    description: "Technische SEO-Grundlagen, schnelle Ladezeiten und saubere Struktur für bessere Rankings.",
  },
];

const Webdesign = () => {
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
              Webdesign & Entwicklung
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Websites, die
              <br />
              verkaufen.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Wir gestalten und entwickeln Websites und Landing Pages, die nicht nur gut aussehen, sondern auch konvertieren.
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
                  <CheckCircle className="w-5 h-5 text-foreground" />
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
                Kostenloses Website-Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Unsere Webdesign-Leistungen
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="p-8 bg-background border border-border rounded-lg h-full"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-10 h-10 mb-4" strokeWidth={1.5} />
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
              Bereit für eine neue Website?
            </h2>
            <p className="text-background/70 max-w-xl mx-auto mb-8">
              Lass uns gemeinsam herausfinden, wie wir deine Online-Präsenz verbessern können.
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

export default Webdesign;
