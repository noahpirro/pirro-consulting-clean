import { ArrowRight, Calendar, Sparkles, Shield, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { TextReveal } from "./TextReveal";

export const CTA = () => {
  return (
    <section className="py-28 md:py-36 bg-foreground text-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-highlight/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-highlight/20 border border-highlight/30 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-highlight" />
            <span className="text-sm font-medium text-highlight">Limitierte Plätze verfügbar</span>
          </div>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <TextReveal text="Bereit für weniger Chaos" />
          <br />
          <TextReveal text="und" delay={0.2} />{" "}
          <span className="relative inline-block">
            <span className="text-highlight"><TextReveal text="mehr Wachstum?" delay={0.25} /></span>
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-highlight/40 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lass uns in einem kostenlosen Gespräch herausfinden, welches
          Automatisierungs-Potenzial in deinem Unternehmen steckt.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MagneticButton strength={0.3}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href="https://calendly.com/pirroconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-16 px-10 text-lg font-medium bg-highlight text-white hover:bg-highlight/90 shadow-lg shadow-highlight/25 group rounded-md"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Kostenlose Potenzialanalyse buchen
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </MagneticButton>

          {/* Secondary Option */}
          <a
            href="https://wa.me/4915152522522"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-background/50 hover:text-background/80 transition-colors text-sm"
          >
            oder direkt per WhatsApp schreiben →
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 text-background/60">
            <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-background/80">100% kostenlos</p>
              <p className="text-xs text-background/40">Kein Risiko</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-background/60">
            <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-background/80">30 Minuten</p>
              <p className="text-xs text-background/40">Mehr brauchst du nicht</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-background/60">
            <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-background/80">4-Wochen-Garantie</p>
              <p className="text-xs text-background/40">Ergebnisse garantiert</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
