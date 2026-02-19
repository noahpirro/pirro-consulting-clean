import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Layout, Smartphone, Search, CheckCircle, Palette, Crown, Clock, Heart, TrendingUp, Award, BadgePercent, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TextReveal } from "@/components/TextReveal";
import { GlowCard } from "@/components/GlowCard";

const benefits = [
  "Conversion-optimiert",
  "Mobile-First Design",
  "SEO-Grundlagen inklusive",
];

const stats = [
  { value: "50+", label: "Websites & Landing Pages" },
  { value: "100%", label: "Responsive Design" },
  { value: "< 3s", label: "Durchschn. Ladezeit" },
];

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Hochkonvertierende Landing Pages f\u00FCr deine Kampagnen. Klar strukturiert, \u00FCberzeugend getextet, auf Conversion optimiert.",
  },
  {
    icon: Palette,
    title: "Website-Design",
    description: "Moderne, professionelle Websites, die deine Marke repr\u00E4sentieren und Besucher zu Kunden machen.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Perfekte Darstellung auf allen Ger\u00E4ten. Mobile-First-Ansatz f\u00FCr die beste User Experience.",
  },
  {
    icon: Search,
    title: "SEO-Optimierung",
    description: "Technische SEO-Grundlagen, schnelle Ladezeiten und saubere Struktur f\u00FCr bessere Rankings.",
  },
];

const advantages = [
  {
    icon: BadgePercent,
    title: "Fair & Transparent",
    description: "Festpreise ohne versteckte Kosten. Sie wissen von Anfang an, was Ihre Website kostet \u2013 ohne b\u00F6se \u00DCberraschungen am Ende.",
  },
  {
    icon: MessageSquare,
    title: "Enger Austausch",
    description: "Regelm\u00E4\u00DFige Abstimmungen und Zwischenpr\u00E4sentationen. Ihr Feedback flie\u00DFt direkt in die Entwicklung ein.",
  },
  {
    icon: Crown,
    title: "Ihre Vision",
    description: "Wir setzen Ihre Vorstellungen um, nicht unsere. Jede Website wird individuell nach Ihren W\u00FCnschen und Ihrer Marke gestaltet.",
  },
  {
    icon: Clock,
    title: "Schnelle Lieferung",
    description: "Von der Konzeption bis zum Launch in wenigen Wochen. Effiziente Prozesse ohne Qualit\u00E4tsverlust.",
  },
];

const values = [
  {
    icon: Award,
    title: "Ein Kunde, pro Branche, pro Region",
    description: "Um unseren Kunden die bestm\u00F6glichen Ergebnisse zu liefern, betreuen wir nicht mehrere Kunden in \u00E4hnlichen Branchen. Ihre Website wird einzigartig bleiben.",
  },
  {
    icon: Clock,
    title: "Keine bestimmten Arbeitszeiten",
    description: "Wir haben keine festen Arbeitszeiten. Wenn ein Launch ansteht oder eine Deadline dr\u00E4ngt, sind wir da \u2013 auch am Wochenende.",
  },
  {
    icon: TrendingUp,
    title: "Verbesserungsbesessen",
    description: "Wir sind nie zufrieden mit dem Status Quo. Nach dem Launch optimieren wir weiter \u2013 f\u00FCr noch bessere Performance und Conversion-Raten.",
  },
];

const Webdesign = () => {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>Webdesign & Entwicklung | Pirro Consulting</title>
        <meta name="description" content="Professionelles Webdesign f\u00FCr Unternehmer. Conversion-optimierte Websites die Kunden gewinnen." />
        <link rel="canonical" href="https://pirro-consulting.de/webdesign" />
        <meta property="og:title" content="Webdesign & Entwicklung | Pirro Consulting" />
        <meta property="og:description" content="Professionelles Webdesign f\u00FCr Unternehmer. Conversion-optimierte Websites die Kunden gewinnen." />
        <meta property="og:url" content="https://pirro-consulting.de/webdesign" />
        <meta property="og:image" content="https://pirro-consulting.de/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://pirro-consulting.de/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Webdesign & Entwicklung",
          "description": "Professionelles Webdesign f\u00FCr Unternehmer. Conversion-optimierte Websites die Kunden gewinnen.",
          "provider": {
            "@type": "Organization",
            "name": "Pirro Consulting",
            "url": "https://pirro-consulting.de"
          },
          "serviceType": "Webdesign",
          "areaServed": { "@type": "Country", "name": "Deutschland" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pirro-consulting.de" },
            { "@type": "ListItem", "position": 2, "name": "Webdesign & Entwicklung", "item": "https://pirro-consulting.de/webdesign" }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-in">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Webdesign & Entwicklung
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              <TextReveal text="Websites, die" delay={0.2} />
              <br />
              <span className="text-primary"><TextReveal text="verkaufen." delay={0.4} /></span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Wir gestalten und entwickeln Websites und Landing Pages, die nicht nur gut aussehen, sondern auch konvertieren.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
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
                Kostenloses Website-Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Warum professionelles Webdesign?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Der erste Eindruck <span className="text-primary">z&auml;hlt</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                75% der Nutzer beurteilen die Glaubw&uuml;rdigkeit eines Unternehmens anhand seiner Website. Eine professionelle, schnelle und conversion-optimierte Website ist heute kein Luxus mehr &ndash; sie ist die Grundlage f&uuml;r digitalen Erfolg.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div
                    className="flex flex-col items-center justify-center text-center p-8 bg-card border border-border rounded-2xl h-40 hover:-translate-y-1 transition-transform"
                  >
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
              Unsere Webdesign-Leistungen
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
                <div
                  className="p-6 bg-card border border-border rounded-2xl h-full text-center hover:-translate-y-1 transition-transform"
                >
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
              Wir legen sehr gro&szlig;en Wert auf unsere Werte aber auch die Werte unserer Kunden. Um eine ideale Zusammenarbeit zu garantieren, glauben wir, dass beide Seiten sich mit den Werten voneinander identifizieren m&uuml;ssen.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className="p-8 bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl h-full hover:-translate-y-1 hover:bg-white/10 transition-all"
                >
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

      {/* Experience */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Unsere Erfahrung
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                &Uuml;ber 50 Projekte, <span className="text-primary">zufriedene Kunden</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Von einfachen Landing Pages bis hin zu komplexen Webanwendungen &ndash; wir haben f&uuml;r jede Anforderung die richtige L&ouml;sung. Jedes Projekt wird mit der gleichen Sorgfalt und dem gleichen Qualit&auml;tsanspruch umgesetzt.
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
                  Kostenloses Erstgespr&auml;ch vereinbaren
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Kostenlos und unverbindlich &ndash; erz&auml;hlen Sie uns von Ihrem Projekt.
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
              Bereit f&uuml;r eine neue Website?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Lass uns gemeinsam herausfinden, wie wir deine Online-Pr&auml;senz auf das n&auml;chste Level bringen k&ouml;nnen.
            </p>
            <div>
              <a
                href="https://calendly.com/pirroconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md font-medium group hover:scale-[1.03] active:scale-[0.98] transition-transform"
              >
                Jetzt Gespr&auml;ch vereinbaren
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
            <Link to="/recruiting" className="group">
              <div className="p-6 bg-card border border-border rounded-2xl h-full hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">Recruiting & Mitarbeitergewinnung</h3>
                <p className="text-sm text-muted-foreground">Social Recruiting und Active Sourcing &ndash; qualifizierte Bewerber in k&uuml;rzester Zeit.</p>
              </div>
            </Link>
            <Link to="/marketing" className="group">
              <div className="p-6 bg-card border border-border rounded-2xl h-full hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">Marketing & Neukundengewinnung</h3>
                <p className="text-sm text-muted-foreground">Datengetriebene Kampagnen und automatisierte Lead-Generierung f&uuml;r nachhaltiges Wachstum.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Webdesign;
