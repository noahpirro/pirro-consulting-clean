import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export const WhatsAppWidget = () => {
  const [visible, setVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    // Erst nach kurzem Delay anzeigen
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    // Tooltip nach 4 Sekunden einblenden
    const timer = setTimeout(() => setTooltipVisible(true), 4000);
    return () => clearTimeout(timer);
  }, [visible]);

  const whatsappUrl = "https://wa.me/4915152522522?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Potenzialanalyse.";

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {tooltipVisible && (
              <motion.div
                className="relative bg-white text-foreground rounded-2xl shadow-xl border border-border p-4 max-w-[240px]"
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <button
                  onClick={() => setTooltipVisible(false)}
                  className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Schliessen"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <p className="text-sm font-medium mb-1">Fragen? Schreib uns!</p>
                <p className="text-xs text-muted-foreground">
                  Wir antworten meistens innerhalb weniger Minuten.
                </p>
                {/* Arrow */}
                <div className="absolute -right-2 bottom-4 w-4 h-4 bg-white border-r border-b border-border rotate-[-45deg]" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:bg-[#20BD5A] transition-colors"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="WhatsApp Chat starten"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
};
