import { ArrowRight, Check, ChevronDown, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const benefits = [
  { title: "Klare Strukturen", description: "Jeder weiß, was zu tun ist" },
  { title: "Zeitersparnis", description: "Automatisierte Prozesse" },
  { title: "Skalierbares Fundament", description: "Wachstum ohne Mehraufwand" },
];

const notifications = [
  { title: "Neuer Lead eingegangen", subtitle: "CRM automatisch aktualisiert" },
  { title: "Onboarding abgeschlossen", subtitle: "Kunde: Müller GmbH" },
  { title: "Rechnung erstellt", subtitle: "Automatisch versendet" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById("problem");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden bg-foreground text-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-background/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-background/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Notification Cards */}
      <div className="absolute right-8 top-32 hidden lg:block">
        {notifications.map((notif, index) => (
          <motion.div
            key={index}
            className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-lg p-4 mb-4 w-64"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.3, duration: 0.5 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center flex-shrink-0">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">{notif.title}</p>
                <p className="text-xs text-background/60">{notif.subtitle}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="container mx-auto max-w-4xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 bg-background/10 border border-background/20 px-4 py-2 rounded-full mb-8"
          variants={itemVariants}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-background/80">Jetzt freie Kapazitäten sichern</span>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          className="text-sm uppercase tracking-[0.2em] text-background/60 mb-6"
          variants={itemVariants}
        >
          Automatisierung & Digitalisierung für Unternehmer
        </motion.p>

        {/* Headline */}
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
          variants={itemVariants}
        >
          <span className="inline-block">Weniger Chaos.</span>
          <br />
          <span className="inline-block text-highlight">Mehr Wachstum.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto mb-12"
          variants={itemVariants}
        >
          Wir digitalisieren und automatisieren dein Unternehmen – damit du dich auf das konzentrieren kannst, was wirklich zählt: Kunden gewinnen und skalieren.
        </motion.p>

        {/* Benefits */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12"
          variants={itemVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-6 h-6 rounded-full border border-background/30 flex items-center justify-center">
                <Check className="w-3 h-3" />
              </div>
              <span className="text-sm font-medium">{benefit.title}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="flex items-center justify-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg" 
              className="h-14 px-8 text-base font-medium bg-background text-foreground hover:bg-background/90 transition-all group"
            >
              Kostenlose Potenzialanalyse sichern
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/50 hover:text-background transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-label="Nach unten scrollen"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
