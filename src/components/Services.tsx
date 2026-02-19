import { TrendingUp, UserPlus, Kanban, FileText, Bot, Link, Briefcase, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { GlowCard } from "./GlowCard";
import { TextReveal } from "./TextReveal";
import { FloatingParticles } from "./FloatingParticles";
import { NoiseTexture } from "./NoiseTexture";

const services = [
  {
    icon: TrendingUp,
    title: "Vertrieb & CRM",
    subtitle: "Deine Sales-Pipeline auf Autopilot",
    features: ["CRM-System strukturieren", "Leads automatisch qualifizieren", "Follow-up-Sequenzen", "Reporting-Dashboards"],
    color: "from-blue-500/10 to-transparent",
  },
  {
    icon: UserPlus,
    title: "Kunden-Onboarding",
    subtitle: "Vom Abschluss zum begeisterten Kunden",
    features: ["Willkommens-Prozesse", "Selbstständige Datenerfassung", "Ressourcen-Bereiche", "Schritt-für-Schritt Checklisten"],
    color: "from-green-500/10 to-transparent",
  },
  {
    icon: Kanban,
    title: "Fulfillment & Projekte",
    subtitle: "Kundenbetreuung ohne Chaos",
    features: ["Projektmanagement-Setup", "Automatisches Aufgaben-Tracking", "Deadline-Überwachung", "Team-Kommunikation"],
    color: "from-purple-500/10 to-transparent",
  },
  {
    icon: FileText,
    title: "Backoffice",
    subtitle: "Papierkram, der sich selbst erledigt",
    features: ["Automatische Rechnungen", "Mahnwesen", "Buchhaltungs-Anbindung", "Dokumentenmanagement"],
    color: "from-orange-500/10 to-transparent",
  },
  {
    icon: Bot,
    title: "KI-Lösungen",
    subtitle: "Intelligente Helfer für den Alltag",
    features: ["KI-Chatbots", "Content-Automatisierung", "Datenanalyse", "Outreach-Systeme"],
    color: "from-pink-500/10 to-transparent",
  },
  {
    icon: Link,
    title: "Integrationen",
    subtitle: "Alles verbunden, nichts doppelt",
    features: ["Tools verknüpfen", "Software einführen", "Datenflüsse automatisieren", "Custom-Lösungen"],
    color: "from-cyan-500/10 to-transparent",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-foreground text-background relative overflow-hidden">
      {/* Background Elements */}
      <NoiseTexture opacity={0.035} />
      <FloatingParticles count={20} color="rgba(255,255,255,0.1)" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-background/10 border border-background/20 px-4 py-2 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-background/60" />
            <span className="text-sm text-background/60">Unsere Leistungen</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            <TextReveal text="Was wir für dich umsetzen" />
          </h2>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlowCard glowColor="rgba(255,255,255,0.08)" tiltStrength={6}>
                <div
                  className="group relative bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-6 h-full cursor-default overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon & Arrow */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center hover:scale-110 hover:-rotate-[5deg] transition-transform">
                        <service.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-5 h-5 text-background/50" />
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg font-display font-bold mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-background/60 mb-4">
                      {service.subtitle}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-background/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-background/40 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
