import { ArrowRight, Check, ChevronDown, Bell, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import { SplitText } from "./SplitText";
import { Aurora } from "./Aurora";
import { FloatingParticles } from "./FloatingParticles";
import { NoiseTexture } from "./NoiseTexture";
import { WaveDivider } from "./WaveDivider";

const rotatingWords = ["Wachstum.", "Umsatz.", "Freiheit.", "Effizienz."];

const benefits = [
  { title: "Klare Strukturen", description: "Jeder weiß, was zu tun ist" },
  { title: "Zeitersparnis", description: "Automatisierte Prozesse" },
  { title: "Skalierbares Fundament", description: "Wachstum ohne Mehraufwand" },
];

const stats = [
  { value: "10+", label: "Unternehmen" },
  { value: "1.000+", label: "Stunden gespart" },
  { value: "100+", label: "Automationen" },
];

const notifications = [
  { title: "Neuer Lead eingegangen", subtitle: "CRM automatisch aktualisiert" },
  { title: "Onboarding abgeschlossen", subtitle: "Kunde: Müller GmbH" },
  { title: "Rechnung erstellt", subtitle: "Automatisch versendet" },
];

export const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollStyle, setScrollStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / (rect.height * 0.5), 0), 1);
      setScrollStyle({
        opacity: 1 - progress,
        transform: `scale(${1 - progress * 0.05}) translateY(${progress * 100}px)`,
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById("problem");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 overflow-hidden bg-foreground text-background">
      {/* Aurora Background */}
      <Aurora />
      <FloatingParticles count={25} color="rgba(255,255,255,0.15)" />
      <NoiseTexture opacity={0.04} />

      {/* Floating Notification Cards */}
      <div className="absolute right-8 top-32 hidden lg:block">
        {notifications.map((notif, index) => (
          <div
            key={index}
            className="bg-background/10 backdrop-blur-sm border border-background/20 rounded-lg p-4 mb-4 w-64 opacity-0 animate-fade-in"
            style={{ animationDelay: `${1 + index * 0.3}s` }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center flex-shrink-0">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">{notif.title}</p>
                <p className="text-xs text-background/60">{notif.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="container mx-auto max-w-4xl text-center relative z-10"
        style={scrollStyle}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-background/10 border border-background/20 px-4 py-2 rounded-full mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="w-2 h-2 bg-highlight rounded-full animate-pulse" />
          <span className="text-sm text-background/80">Jetzt freie Kapazitäten sichern</span>
        </div>

        {/* Tagline */}
        <p
          className="text-sm uppercase tracking-[0.2em] text-background/60 mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.45s" }}
        >
          Automatisierung & Digitalisierung für Unternehmer
        </p>

        {/* Headline */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <SplitText text="Weniger Chaos." type="words" stagger={0.04} delay={0.3} />
          <br />
          <span className="inline-block">
            <SplitText text="Mehr" type="words" stagger={0.04} delay={0.6} />{" "}
            <span className="relative inline-block text-highlight">
              <span key={wordIndex} className="inline-block animate-fade-in">
                {rotatingWords[wordIndex]}
              </span>
            </span>
          </span>
        </h1>

        {/* Guarantee */}
        <div
          className="inline-flex items-center gap-2 bg-highlight/20 border border-highlight/30 px-4 py-2 rounded-full mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.75s" }}
        >
          <Shield className="w-4 h-4 text-highlight" />
          <span className="text-sm font-medium text-highlight">Ergebnisse in 4 Wochen – garantiert</span>
        </div>

        {/* Subheadline */}
        <p
          className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.9s" }}
        >
          Wir digitalisieren und automatisieren dein Unternehmen – damit du dich auf das konzentrieren kannst, was wirklich zählt: Kunden gewinnen und skalieren.
        </p>

        {/* Stats Row */}
        <div
          className="flex items-center justify-center gap-8 md:gap-12 mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.05s" }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-background">{stat.value}</p>
              <p className="text-xs md:text-sm text-background/50">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 hover:scale-105 transition-transform"
            >
              <div className="w-6 h-6 rounded-full border border-background/30 flex items-center justify-center">
                <Check className="w-3 h-3" />
              </div>
              <span className="text-sm font-medium">{benefit.title}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col items-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.35s" }}
        >
          <MagneticButton strength={0.25}>
            <div className="hover:scale-[1.03] active:scale-[0.98] transition-transform">
              <a
                href="https://calendly.com/pirroconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-14 px-8 text-base font-medium bg-background text-foreground hover:bg-background/90 transition-all group rounded-md"
              >
                Kostenlose Potenzialanalyse sichern
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/50 hover:text-background transition-colors opacity-0 animate-fade-in"
        style={{ animationDelay: "1.5s" }}
        aria-label="Nach unten scrollen"
      >
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </button>

      {/* Wave Divider */}
      <WaveDivider position="bottom" fill="hsl(var(--background))" />
    </section>
  );
};
