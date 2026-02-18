import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { Award, Shield, Star, ExternalLink } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "DSGVO-konform",
    description: "Alle Prozesse datenschutzkonform",
    gradient: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: null,
    title: "Trustpilot",
    description: "Bewertungen ansehen",
    gradient: "from-emerald-500/10 to-emerald-600/5",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    isTrustpilot: true,
  },
  {
    icon: Award,
    title: "10+ Projekte",
    description: "Erfolgreich umgesetzt",
    gradient: "from-purple-500/10 to-purple-600/5",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
];

const TrustpilotStars = () => (
  <div className="flex gap-0.5 mb-1">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="w-6 h-6 bg-[#00b67a] flex items-center justify-center">
        <Star className="w-3.5 h-3.5 text-white fill-white" />
      </div>
    ))}
  </div>
);

export const TrustBadges = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="flex flex-col items-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-sm text-muted-foreground font-medium">
                Vertrauen & Sicherheit
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {badges.map((badge, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              {badge.isTrustpilot ? (
                <motion.a
                  href="https://www.trustpilot.com/review/pirro-consulting.de"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={`relative flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br ${badge.gradient} border ${badge.borderColor} overflow-hidden group cursor-pointer block`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>

                  <div className="mb-3">
                    <TrustpilotStars />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg viewBox="0 0 126 31" className="h-5 w-auto" aria-label="Trustpilot">
                      <path d="M33.3 13.6h-8.7l-2.7-8.3L19.2 13.6l-8.7 0 7 5.1-2.7 8.3 7-5.1 7 5.1-2.7-8.3 7-5.1z" fill="#00b67a"/>
                      <path d="M40.5 27.2l.8-2.5 3-2.2-3.8 4.7z" fill="#005128"/>
                      <text x="50" y="22" fill="#191919" fontSize="14" fontFamily="Arial, sans-serif" fontWeight="700">Trustpilot</text>
                    </svg>
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                    {badge.description}
                  </p>
                </motion.a>
              ) : (
                <motion.div
                  className={`relative flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-br ${badge.gradient} border ${badge.borderColor} overflow-hidden group cursor-default`}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>

                  <div className={`w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 ${badge.iconColor}`}>
                    {badge.icon && <badge.icon className="w-7 h-7" strokeWidth={1.5} />}
                  </div>
                  <h3 className="font-display font-bold text-base mb-1">{badge.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{badge.description}</p>
                </motion.div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
