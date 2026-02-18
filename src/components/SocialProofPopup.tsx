import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const proofItems = [
  { name: "Max", city: "München", action: "hat eine Potenzialanalyse gebucht" },
  { name: "Julia", city: "Hamburg", action: "hat ihr CRM automatisiert" },
  { name: "Stefan", city: "Berlin", action: "hat eine Potenzialanalyse gebucht" },
  { name: "Anna", city: "Frankfurt", action: "hat 30+ Stunden/Monat gespart" },
  { name: "Tobias", city: "Köln", action: "hat sein Onboarding automatisiert" },
  { name: "Lena", city: "Stuttgart", action: "hat eine Potenzialanalyse gebucht" },
  { name: "Markus", city: "Düsseldorf", action: "hat seinen Vertrieb digitalisiert" },
  { name: "Sandra", city: "Wien", action: "hat eine Potenzialanalyse gebucht" },
];

const timeAgoOptions = [
  "vor 2 Minuten",
  "vor 5 Minuten",
  "vor 12 Minuten",
  "vor 23 Minuten",
  "vor 1 Stunde",
  "vor 3 Stunden",
];

export const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeAgo, setTimeAgo] = useState(timeAgoOptions[0]);

  const showNext = useCallback(() => {
    setTimeAgo(timeAgoOptions[Math.floor(Math.random() * timeAgoOptions.length)]);
    setCurrentIndex((prev) => (prev + 1) % proofItems.length);
    setVisible(true);

    setTimeout(() => setVisible(false), 4000);
  }, []);

  useEffect(() => {
    // Erste Anzeige nach 8 Sekunden
    const initialTimer = setTimeout(showNext, 8000);
    // Danach alle 15-25 Sekunden
    const interval = setInterval(() => {
      showNext();
    }, 15000 + Math.random() * 10000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [showNext]);

  const current = proofItems[currentIndex];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-24 left-6 z-40 max-w-xs"
          initial={{ opacity: 0, y: 40, x: -20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20, x: -20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div
            className="bg-card border border-border rounded-xl shadow-2xl p-4 cursor-pointer hover:shadow-3xl transition-shadow"
            onClick={() => setVisible(false)}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-foreground leading-snug">
                  {current.name} aus {current.city}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {current.action}
                </p>
                <p className="text-[10px] text-muted-foreground/60 mt-1">
                  {timeAgo}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
