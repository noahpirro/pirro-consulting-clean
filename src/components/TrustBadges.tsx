import { AnimatedSection } from "./AnimatedSection";
import { Award, Shield, Star, ExternalLink, Quote } from "lucide-react";

const testimonialPreviews = [
  {
    quote: "Über 40 Stunden manuelle Arbeit pro Monat gespart.",
    name: "Michael S.",
    role: "Geschäftsführer, E-Commerce Agentur",
  },
  {
    quote: "Unser CRM läuft jetzt vollautomatisch.",
    name: "Sarah W.",
    role: "Head of Operations, Marketing Agentur",
  },
  {
    quote: "Innerhalb von 4 Wochen komplett automatisiertes Fulfillment.",
    name: "Thomas K.",
    role: "Inhaber, Coaching-Unternehmen",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Trust Signals */}
          <AnimatedSection>
            <div className="space-y-6">
              {/* Trustpilot Card */}
              <a
                href="https://www.trustpilot.com/review/pirro-consulting.de"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-200 hover:-translate-y-1 hover:shadow-lg transition-all group"
              >
                <div className="flex-shrink-0">
                  <div className="flex gap-0.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-7 h-7 bg-[#00b67a] flex items-center justify-center">
                        <Star className="w-4 h-4 text-white fill-white" />
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">TrustScore 5.0</p>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-display font-bold text-lg">5/5 auf Trustpilot</p>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Basierend auf 10+ verifizierten Bewertungen
                  </p>
                </div>
              </a>

              {/* Other Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-200">
                  <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm">DSGVO-konform</p>
                    <p className="text-xs text-muted-foreground">Alle Prozesse datenschutzkonform</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-200">
                  <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm">10+ Projekte</p>
                    <p className="text-xs text-muted-foreground">Erfolgreich umgesetzt</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Kundenstimmen Preview */}
          <AnimatedSection delay={0.15}>
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-bold text-lg">Kundenstimmen</h3>
                <a
                  href="#testimonials"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Alle ansehen →
                </a>
              </div>
              <div className="space-y-4">
                {testimonialPreviews.map((t, i) => (
                  <a
                    key={i}
                    href="#testimonials"
                    className="flex items-start gap-4 p-4 rounded-xl border border-border hover:border-foreground/20 hover:bg-secondary/50 transition-all group"
                  >
                    <Quote className="w-5 h-5 text-foreground/15 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-snug mb-1.5 group-hover:text-foreground transition-colors">
                        "{t.quote}"
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.name} · {t.role}
                      </p>
                    </div>
                    <div className="flex gap-0.5 flex-shrink-0 mt-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3 h-3 fill-highlight text-highlight" />
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
