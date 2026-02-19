import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Users, Target, Zap, CheckCircle, UserCheck, MessageSquare, Crown, Clock, Heart, TrendingUp, Award, BadgePercent } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TextReveal } from "@/components/TextReveal";
import { GlowCard } from "@/components/GlowCard";

const benefits = [
  "Qualifizierte Bewerber in kürzester Zeit",
  "Reduktion der Time-to-Hire um bis zu 60%",
  "Employer Branding inklusive",
];

const services = [
  {
    icon: Target,
    title: "Social Recruiting",
    description: "Erreiche passive Kandidaten dort, wo sie sich aufhalten – auf Social Media. Wir entwickeln zielgruppenspezifische Kampagnen, die Aufmerksamkeit erregen.",
  },
  {
    icon: Users,
    title: "Active Sourcing",
    description: "Proaktive Direktansprache von Top-Talenten. Wir identifizieren und kontaktieren die besten Kandidaten für deine offenen Positionen.",
  },
  {
    icon: Zap,
    title: "Recruiting Automatisierung",
    description: "Automatisierte Bewerberprozesse, die Zeit sparen und die Candidate Experience verbessern. Von der Bewerbung bis zum Onboarding.",
  },
  {
    icon: UserCheck,
    title: "Employer Branding",
    description: "Positioniere dich als attraktiver Arbeitgeber. Wir entwickeln deine Arbeitgebermarke und machen sie sichtbar.",
  },
];

const values = [
  {
    icon: Award,
    title: "Ein Kunde, pro Branche, pro Region",
    description: "Um unseren Kunden die preisgünstigste Werbung und schnellsten Einstellungen zu generieren, können wir nicht mehrere Kunden in ähnlichen Branchen haben.",
  },
  {
    icon: Clock,
    title: "Keine bestimmten Arbeitszeiten",
    description: "Wir haben keine Arbeitszeiten festgelegt. Grund dafür ist die ständig wechselnde Branche und unsere Bereitschaft an sowohl Feiertagen als auch Wochenenden alles für die bestmöglichen Ergebnisse zu tun.",
  },
  {
    icon: TrendingUp,
    title: "Verbesserungsbesessen",
    description: "Wir sind nie zufrieden mit dem Status Quo. Kontinuierliche Optimierung und Verbesserung unserer Strategien ist unser Antrieb.",
  },
];

const advantages = [
  {
    icon: BadgePercent,
    title: "Preiswert",
    description: "Wir sind im Durchschnitt 60-80% günstiger im Schalten von Werbung als unsere Konkurrenz. Des Weiteren sparen wir Ihnen im Vergleich 50-75% an Werbekosten ein.",
  },
  {
    icon: MessageSquare,
    title: "Kommunikation",
    description: "Trotz unserer Erfahrung wollen wir, dass Sie sich wohlfühlen und mit uns sprechen dürfen. Permanentes Feedback mit unseren Kunden bringt uns den konstanten Erfolg.",
  },
  {
    icon: Crown,
    title: "Kunde ist König",
    description: "Der Kunde ist bekanntlich König und ist bei uns nicht anders. Wir werden auf jede noch so kleine Frage von Ihnen eingehen und Ihnen alles im Detail erklären.",
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Wir nehmen Ihnen die komplette Social Media Marketing Strategie im Thema Recruiting ab. Wir kommunizieren auch mit Facebook wöchentlich, um Ihre Kampagnen zu optimieren.",
  },
];

const stats = [
  { value: "4+", label: "Jahre Recruiting Erfahrung" },
  { value: "200.000€", label: "Marketing Budget verwaltet" },
  { value: "5.000+", label: "Bewerbungen generiert" },
];

const Recruiting = () => {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>Recruiting & Mitarbeitergewinnung | Pirro Consulting</title>
        <meta name="description" content="Social Recruiting, Active Sourcing und automatisierte Bewerbungsprozesse für Unternehmer. Qualifizierte Bewerber in wenigen Wochen." />
        <link rel="canonical" href="https://pirro-consulting.de/recruiting" />
        <meta property="og:title" content="Recruiting & Mitarbeitergewinnung | Pirro Consulting" />
        <meta property="og:description" content="Social Recruiting, Active Sourcing und automatisierte Bewerbungsprozesse für Unternehmer. Qualifizierte Bewerber in wenigen Wochen." />
        <meta property="og:url" content="https://pirro-consulting.de/recruiting" />
        <meta property="og:image" content="https://pirro-consulting.de/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://pirro-consulting.de/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Recruiting & Mitarbeitergewinnung",
          "description": "Social Recruiting, Active Sourcing und automatisierte Bewerbungsprozesse für Unternehmer.",
          "provider": {
            "@type": "Organization",
            "name": "Pirro Consulting",
            "url": "https://pirro-consulting.de"
          },
          "serviceType": "Social Media Recruiting",
          "areaServed": { "@type": "Country", "name": "Deutschland" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pirro-consulting.de" },
            { "@type": "ListItem", "position": 2, "name": "Recruiting & Mitarbeitergewinnung", "item": "https://pirro-consulting.de/recruiting" }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-in">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Recruiting & Personalgewinnung
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              <TextReveal text="Personalmangel?" delay={0.2} />
              <br />
              <span className="text-primary"><TextReveal text="Kein Problem." delay={0.4} /></span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Laut Experten fehlen in Deutschland eine halbe Million Fachkräfte mit der Tendenz der Verschlechterung. Wir fokussieren uns auf Bewerbungen und Einstellungen unserer Kunden anhand Social Media Marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div>
              <a
                href="https://calendly.com/pirroconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-14 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md group hover:scale-[1.03] active:scale-[0.98] transition-transform"
              >
                Kostenloses Erstgespräch sichern
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Recruiting Intro */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Warum Social Media Recruiting?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Die Macht der <span className="text-primary">Sozialen Medien</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Social Media Marketing ist über die letzten Jahre zu einer unglaublichen Macht gewachsen. Wir haben anhand der Sozialen Medien neue Chancen im Bereich Recruiting kennengelernt. Es ist jetzt viel günstiger, schneller und direkter, mehr potentielle Arbeitnehmer zu erreichen als zuvor.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="flex flex-col items-center justify-center text-center p-8 bg-card border border-border rounded-2xl h-40 hover:-translate-y-1 transition-transform">
                    <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-muted-foreground text-center">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
              Unsere Recruiting-Leistungen
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <GlowCard glowColor="rgba(0,0,0,0.06)" tiltStrength={5}>
                  <div className="p-8 bg-card border border-border rounded-2xl h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Ihre Vorteile
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Warum <span className="text-primary">Pirro Consulting</span>?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="p-6 bg-card border border-border rounded-2xl h-full text-center hover:-translate-y-1 transition-transform">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <Heart className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Unsere Werte
            </h2>
            <p className="text-background/70 max-w-2xl mx-auto">
              Wir legen sehr großen Wert auf unsere Werte aber auch die Werte unserer Kunden. Um eine ideale Zusammenarbeit zu garantieren, glauben wir, dass beide Seiten sich mit den Werten voneinander identifizieren müssen.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="p-8 bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl h-full hover:-translate-y-1 hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                  <p className="text-background/70 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Unsere Erfahrung
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Jahrelange Erfahrung, <span className="text-primary">zahlreiche Erfolge</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Jahrelange Erfahrung im Bereich Social Media Marketing und zahlreiche Erfolge geben uns das Selbstbewusstsein, dass wir jedes Problem lösen können – mit kleinen aber auch großen Budgets.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <a
                  href="https://calendly.com/pirroconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-14 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md group hover:scale-[1.03] active:scale-[0.98] transition-transform"
                >
                  Kostenloses Erstgespräch vereinbaren
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Kostenlos und unverbindlich – um festzustellen, ob Sie sich mit unseren Werten und Strategien identifizieren können.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Bereit, dein Team zu verstärken?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Lass uns gemeinsam herausfinden, wie wir dein Recruiting auf das nächste Level bringen können.
            </p>
            <div>
              <a
                href="https://calendly.com/pirroconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md font-medium group hover:scale-[1.03] active:scale-[0.98] transition-transform"
              >
                Jetzt Gespräch vereinbaren
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Weitere Leistungen */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Weitere Leistungen</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link to="/marketing" className="group">
              <div className="p-6 bg-card border border-border rounded-2xl h-full hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">Marketing & Neukundengewinnung</h3>
                <p className="text-sm text-muted-foreground">Datengetriebene Kampagnen und automatisierte Lead-Generierung für nachhaltiges Wachstum.</p>
              </div>
            </Link>
            <Link to="/webdesign" className="group">
              <div className="p-6 bg-card border border-border rounded-2xl h-full hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">Webdesign & Entwicklung</h3>
                <p className="text-sm text-muted-foreground">Conversion-optimierte Websites und Landing Pages, die Besucher zu Kunden machen.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Recruiting;
