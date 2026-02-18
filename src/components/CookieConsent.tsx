import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useCookieConsent } from "@/hooks/use-cookie-consent";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { hasConsent, updateConsent } = useCookieConsent();

  useEffect(() => {
    if (!hasConsent) {
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, [hasConsent]);

  const handleConsent = (value: "all" | "necessary") => {
    updateConsent(value);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
            opacity: { duration: 0.3 },
          }}
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-foreground/95 backdrop-blur-xl text-background border border-background/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon & Text */}
                <div className="flex-1 flex items-start gap-4">
                  <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-background/10 items-center justify-center mt-0.5">
                    <Shield className="w-5 h-5 text-background/70" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base mb-1.5">
                      Deine Privatsphäre ist uns wichtig
                    </h3>
                    <p className="text-sm text-background/60 leading-relaxed">
                      Wir verwenden Cookies, um deine Erfahrung auf unserer
                      Website zu verbessern.{" "}
                      <Link
                        to="/datenschutz"
                        className="text-highlight hover:text-highlight/80 underline underline-offset-2 transition-colors"
                      >
                        Mehr erfahren
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <motion.button
                    onClick={() => handleConsent("necessary")}
                    className="px-4 py-2 rounded-md border border-background/20 bg-transparent text-background/70 hover:bg-background/10 hover:text-background text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Nur notwendige
                  </motion.button>
                  <motion.button
                    onClick={() => handleConsent("all")}
                    className="px-4 py-2 rounded-md bg-background text-foreground hover:bg-background/90 text-sm font-medium transition-colors inline-flex items-center justify-center gap-1.5"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Cookie className="w-4 h-4" />
                    Alle akzeptieren
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
