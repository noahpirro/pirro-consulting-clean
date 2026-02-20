import { useState, useEffect, useCallback } from "react";
import { CheckCircle } from "lucide-react";

const proofItems = [
  { company: "E-Commerce Agentur", action: "hat einen neuen Mitarbeiter geonboarded" },
  { company: "Marketing Agentur", action: "hat 12 Follow-ups automatisch versendet" },
  { company: "Coaching-Unternehmen", action: "hat ihr CRM-System automatisiert" },
  { company: "Handwerksbetrieb", action: "hat 3 Rechnungen automatisch erstellt" },
  { company: "Digitalagentur", action: "hat Lead-Qualifizierung automatisiert" },
  { company: "Beratungsunternehmen", action: "hat Kunden-Onboarding digitalisiert" },
  { company: "IT-Dienstleister", action: "hat Reporting-Dashboard eingerichtet" },
  { company: "Logistikunternehmen", action: "hat Auftragseingang automatisiert" },
  { company: "Tech-Startup", action: "hat KI-Chatbot für Support aktiviert" },
  { company: "Immobilienbüro", action: "hat Exposé-Versand automatisiert" },
];

const timeAgoOptions = [
  "vor 2 Minuten",
  "vor 5 Minuten",
  "vor 12 Minuten",
  "vor 23 Minuten",
  "vor 1 Stunde",
  "vor 3 Stunden",
];

const DISMISS_KEY = "social-proof-dismissed";

export const SocialProofPopup = () => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeAgo, setTimeAgo] = useState(timeAgoOptions[0]);
  const [dismissed, setDismissed] = useState(() => {
    return sessionStorage.getItem(DISMISS_KEY) === "true";
  });

  const showNext = useCallback(() => {
    if (dismissed) return;
    setTimeAgo(timeAgoOptions[Math.floor(Math.random() * timeAgoOptions.length)]);
    setCurrentIndex((prev) => (prev + 1) % proofItems.length);
    setVisible(true);

    setTimeout(() => setVisible(false), 4000);
  }, [dismissed]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
    sessionStorage.setItem(DISMISS_KEY, "true");
  };

  useEffect(() => {
    if (dismissed) return;
    // Erste Anzeige nach 10 Sekunden
    const initialTimer = setTimeout(showNext, 10000);
    // Danach alle 30 Sekunden
    const interval = setInterval(showNext, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [showNext, dismissed]);

  const current = proofItems[currentIndex];

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-24 left-6 z-40 max-w-xs transition-all duration-500 ${visible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-10 -translate-x-5 pointer-events-none'}`}
      role="status"
      aria-live="polite"
    >
      <button
        className="bg-card border border-border rounded-xl shadow-2xl p-4 cursor-pointer hover:shadow-3xl transition-shadow text-left w-full"
        onClick={handleDismiss}
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground leading-snug">
              {current.company}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {current.action}
            </p>
            <p className="text-[10px] text-muted-foreground/60 mt-1">
              {timeAgo}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};
