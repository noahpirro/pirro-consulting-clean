import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { WHATSAPP_CTA_URL } from "@/constants";

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

  const whatsappUrl = WHATSAPP_CTA_URL;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      <div
        className={`relative bg-white text-foreground rounded-2xl shadow-xl border border-border p-4 max-w-[240px] transition-all duration-300 ${tooltipVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-5 scale-90 pointer-events-none'}`}
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
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:bg-[#20BD5A] hover:scale-110 active:scale-95 transition-all duration-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'}`}
        aria-label="WhatsApp Chat starten"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};
