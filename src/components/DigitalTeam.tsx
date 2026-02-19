import { AnimatedSection } from "./AnimatedSection";
import { GlowCard } from "./GlowCard";
import { TextReveal } from "./TextReveal";
import { NoiseTexture } from "./NoiseTexture";
import { Bot, Zap, Brain, MessageSquare, BarChart3, Mail, Users } from "lucide-react";

const teamMembers = [
  {
    icon: Brain,
    name: "KI-Stratege",
    role: "Analyse & Entscheidungen",
    description: "Analysiert Daten, erkennt Muster und gibt Handlungsempfehlungen in Echtzeit.",
    tools: ["ChatGPT", "Claude"],
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-200",
  },
  {
    icon: Zap,
    name: "Automations-Engine",
    role: "Workflows & Prozesse",
    description: "Verbindet alle Tools, automatisiert Abläufe und eliminiert manuelle Arbeit.",
    tools: ["Make", "n8n", "Zapier"],
    color: "from-orange-500/20 to-orange-600/5",
    borderColor: "border-orange-200",
  },
  {
    icon: MessageSquare,
    name: "KI-Kommunikator",
    role: "Kunden & Support",
    description: "Beantwortet Anfragen, qualifiziert Leads und pflegt Kundenbeziehungen – 24/7.",
    tools: ["WhatsApp Bot", "Chatbot"],
    color: "from-green-500/20 to-green-600/5",
    borderColor: "border-green-200",
  },
  {
    icon: BarChart3,
    name: "Daten-Analyst",
    role: "Reporting & Insights",
    description: "Erstellt automatische Reports, trackt KPIs und identifiziert Optimierungspotenzial.",
    tools: ["Dashboards", "Analytics"],
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-200",
  },
  {
    icon: Mail,
    name: "Outreach-Agent",
    role: "Lead-Generierung",
    description: "Personalisiert Outreach-Kampagnen, versendet Follow-ups und bucht Termine.",
    tools: ["Lemlist", "Close CRM"],
    color: "from-pink-500/20 to-pink-600/5",
    borderColor: "border-pink-200",
  },
  {
    icon: Users,
    name: "Onboarding-Assistent",
    role: "Kundenbetreuung",
    description: "Führt neue Kunden automatisch durch den Onboarding-Prozess ohne manuellen Aufwand.",
    tools: ["ClickUp", "PandaDoc"],
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "border-cyan-200",
  },
];

export const DigitalTeam = () => {
  return (
    <section className="section-padding bg-secondary relative overflow-hidden">
      {/* Background */}
      <NoiseTexture opacity={0.025} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/10 px-4 py-2 rounded-full mb-6">
            <Bot className="w-4 h-4 text-foreground/60" />
            <span className="text-sm text-foreground/60">Mein digitales Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <TextReveal text="Ein Team aus" />{" "}
            <span className="text-highlight"><TextReveal text="KI-Spezialisten" delay={0.12} /></span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Statt ein großes Team einzustellen, setze ich auf spezialisierte KI-Systeme –
            die gleiche Leistung, ein Bruchteil der Kosten.
          </p>
        </AnimatedSection>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <GlowCard glowColor="rgba(0,0,0,0.05)" tiltStrength={5}>
              <div
                className={`relative p-6 bg-background border ${member.borderColor} rounded-xl h-full group cursor-default overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-300`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Status Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 z-10">
                  <span className="w-2 h-2 bg-highlight rounded-full animate-pulse" />
                  <span className="text-xs text-highlight font-medium">Aktiv</span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mb-4 relative z-10 hover:scale-110 hover:rotate-[5deg] transition-transform">
                  <member.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-bold mb-1 relative z-10">{member.name}</h3>
                <p className="text-sm text-highlight font-medium mb-3 relative z-10">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 relative z-10">
                  {member.description}
                </p>

                {/* Tool Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {member.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 bg-foreground/5 border border-foreground/10 rounded-full text-xs font-medium text-foreground/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              </GlowCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Note */}
        <AnimatedSection className="text-center mt-12" delay={0.4}>
          <p className="text-muted-foreground text-sm">
            Alle KI-Systeme werden individuell auf dein Unternehmen konfiguriert und arbeiten 24/7 für dich.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
