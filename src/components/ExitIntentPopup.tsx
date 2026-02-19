import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Zap } from "lucide-react";

export const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY > 10) return;
    if (sessionStorage.getItem("exit-popup-shown")) return;

    sessionStorage.setItem("exit-popup-shown", "1");
    setVisible(true);
  }, []);

  useEffect(() => {
    // Only on desktop, after 5 seconds on page
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVisible(false)}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-[61] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="relative bg-background rounded-2xl border border-border shadow-2xl overflow-hidden">
              {/* Close */}
              <button
                onClick={() => setVisible(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                aria-label="Schließen"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-highlight via-highlight/60 to-transparent" />

              <div className="p-8 md:p-10">
                <div className="w-14 h-14 rounded-xl bg-highlight/10 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-highlight" />
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                  Warte kurz!
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Erfahre in einer kostenlosen 30-Minuten Potenzialanalyse, wie
                  viel Zeit und Geld du mit Automatisierung sparen kannst –
                  individuell für dein Unternehmen.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://calendly.com/pirroconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 px-6 bg-foreground text-background hover:bg-foreground/90 rounded-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98] group"
                  >
                    Kostenlose Analyse sichern
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button
                    onClick={() => setVisible(false)}
                    className="inline-flex items-center justify-center h-12 px-6 text-muted-foreground hover:text-foreground rounded-lg font-medium transition-colors"
                  >
                    Nein danke
                  </button>
                </div>

                <p className="text-xs text-muted-foreground/60 mt-4">
                  100% kostenlos · Kein Risiko · Keine Verpflichtung
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
