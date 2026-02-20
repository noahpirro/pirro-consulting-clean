import { ArrowRight, Calendar, Sparkles, Shield, Clock, Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { MagneticButton } from "./MagneticButton";
import { TextReveal } from "./TextReveal";
import { Aurora } from "./Aurora";
import { FloatingParticles } from "./FloatingParticles";
import { NoiseTexture } from "./NoiseTexture";
import { CALENDLY_URL, WHATSAPP_URL } from "@/constants";

export const CTA = () => {
  const [ref, inView] = useInView();

  return (
    <section className="py-28 md:py-36 bg-foreground text-background relative overflow-hidden">
      {/* Background Effects */}
      <Aurora />
      <FloatingParticles count={20} color="rgba(255,255,255,0.1)" />
      <NoiseTexture opacity={0.035} />

      <div className="container mx-auto px-4 text-center relative z-10" ref={ref}>
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div className="inline-flex items-center gap-2 bg-highlight/20 border border-highlight/30 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-highlight" />
            <span className="text-sm font-medium text-highlight">Limitierte Plätze verfügbar</span>
          </div>
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 leading-tight"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        >
          <TextReveal text="Bereit für weniger Chaos" />
          <br />
          <TextReveal text="und" delay={0.2} />{" "}
          <span className="relative inline-block">
            <span className="text-highlight"><TextReveal text="mehr Wachstum?" delay={0.25} /></span>
            <span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-highlight/40 rounded-full"
              style={{
                transform: inView ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 0.6s ease 0.8s",
                transformOrigin: "left",
              }}
            />
          </span>
        </h2>

        <p
          className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          Lass uns in einem kostenlosen Gespräch herausfinden, welches
          Automatisierungs-Potenzial in deinem Unternehmen steckt.
        </p>

        <div
          className="flex flex-col items-center gap-6"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
          }}
        >
          <MagneticButton strength={0.3}>
            <div className="hover:scale-[1.03] active:scale-[0.98] transition-transform">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-16 px-10 text-lg font-medium bg-highlight text-white hover:bg-highlight/90 shadow-lg shadow-highlight/25 group rounded-md"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Kostenlose Potenzialanalyse buchen
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </MagneticButton>

          {/* Secondary Option */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-background/50 hover:text-background/80 transition-colors text-sm"
          >
            oder direkt per WhatsApp schreiben →
          </a>
        </div>

        {/* Trust Indicators */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <div className="flex items-center justify-center gap-3 text-background/60">
            <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-background/80">100% kostenlos</p>
              <p className="text-xs text-background/40">Kein Risiko</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-background/60">
            <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-background/80">30 Minuten</p>
              <p className="text-xs text-background/40">Mehr brauchst du nicht</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 text-background/60">
            <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center">
              <Star className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-background/80">4-Wochen-Garantie</p>
              <p className="text-xs text-background/40">Ergebnisse garantiert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
