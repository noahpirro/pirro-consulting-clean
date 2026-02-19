import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approx 500px)
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-3">
        <a
          href="https://calendly.com/pirroconsulting"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full h-12 bg-primary text-primary-foreground rounded-lg font-medium text-sm active:scale-[0.98] transition-transform"
        >
          Kostenlose Potenzialanalyse
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
