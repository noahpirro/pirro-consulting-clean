import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-background/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-background/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, -50, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-background/10 border border-background/20 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Jetzt starten</span>
          </div>
        </motion.div>

        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Bereit für weniger Chaos
          <br />
          und <span className="text-highlight">mehr Wachstum?</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lass uns in einem kostenlosen Gespräch herausfinden, welches Potenzial in deinem Unternehmen steckt.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              size="lg" 
              className="h-14 px-8 text-base font-medium bg-background text-foreground hover:bg-background/90 group"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Kostenlose Potenzialanalyse buchen
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-background/50 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            100% kostenlos
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Unverbindlich
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            30 Minuten
          </span>
        </motion.div>
      </div>
    </section>
  );
};
