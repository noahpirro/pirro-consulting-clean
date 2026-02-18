import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookie-consent";

type ConsentValue = "all" | "necessary";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // Small delay so the banner doesn't flash on initial page load
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (value: ConsentValue) => {
    localStorage.setItem(STORAGE_KEY, value);
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
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      variant="outline"
                      onClick={() => handleConsent("necessary")}
                      className="w-full sm:w-auto border-background/20 bg-transparent text-background/70 hover:bg-background/10 hover:text-background"
                    >
                      Nur notwendige
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      onClick={() => handleConsent("all")}
                      className="w-full sm:w-auto bg-background text-foreground hover:bg-background/90 font-medium"
                    >
                      <Cookie className="w-4 h-4 mr-1.5" />
                      Alle akzeptieren
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
