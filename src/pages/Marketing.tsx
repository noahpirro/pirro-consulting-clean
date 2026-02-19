import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, BarChart3, Megaphone, Target, TrendingUp, CheckCircle, Crown, Clock, Heart, Award, BadgePercent, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatedSection } from "@/components/AnimatedSection";

const benefits = [
  "Mehr qualifizierte Leads",
  "Messbare Ergebnisse",
  "Skalierbare Kampagnen",
];

const stats = [
  { value: "8+", label: "Jahre Online Marketing Erfahrung" },
  { value: "1 Mio \u20AC", label: "Werbebudget verwaltet" },
  { value: "1.500+", label: "Kampagnen" },
];

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Datengetriebene Werbekampagnen auf Meta, Google & LinkedIn. Wir optimieren kontinuierlich f\u00FCr maximalen ROI.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Strategische Pr\u00E4senz auf den relevanten Plattformen. Content, der Aufmerksamkeit erregt und Vertrauen aufbaut.",
  },
  {
    icon: TrendingUp,
    title: "Lead-Generierung",
    description: "Systematische Neukundengewinnung durch optimierte Funnels und automatisierte Follow-up-Prozesse.",
  },
  {
    icon: BarChart3,
    title: "Marketing Automatisierung",
    description: "E-Mail-Sequenzen, Retargeting und CRM-Integration. Dein Marketing l\u00E4uft auch, wenn du schl\u00E4fst.",
  },
];

const advantages = [
  {
    icon: BadgePercent,
    title: "Kosteneffizient",
    description: "Wir sind im Durchschnitt 40-60% g\u00FCnstiger als klassische Agenturen. Dazu optimieren wir Ihre Werbebudgets kontinuierlich f\u00FCr maximalen ROI.",
  },
  {
    icon: MessageSquare,
    title: "Transparenz",
    description: "W\u00F6chentliche Reports und offene Kommunikation. Sie wissen immer, wie Ihre Kampagnen performen und wohin Ihr Budget flie\u00DFt.",
  },
  {
    icon: Crown,
    title: "Ma\u00DFgeschneidert",
    description: "Keine Standardl\u00F6sungen von der Stange. Jede Strategie wird individuell auf Ihr Unternehmen, Ihre Zielgruppe und Ihre Ziele zugeschnitten.",
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Wir \u00FCbernehmen die komplette Marketing-Strategie \u2013 von der Planung \u00FCber die Umsetzung bis zur Optimierung. Sie k\u00F6nnen sich auf Ihr Kerngesch\u00E4ft konzentrieren.",
  },
];

const values = [
  {
    icon: Award,
    title: "Ein Kunde, pro Branche, pro Region",
    description: "Um unseren Kunden die bestm\u00F6glichen Ergebnisse zu liefern, betreuen wir nicht mehrere Kunden in \u00E4hnlichen Branchen. So vermeiden wir Interessenkonflikte und sichern Ihnen exklusive Strategien.",
  },
  {
    icon: Clock,
    title: "Keine bestimmten Arbeitszeiten",
    description: "Wir haben keine festen Arbeitszeiten. Die Marketing-Welt schl\u00E4ft nie \u2013 und wir sind bereit, an Feiertagen und Wochenenden alles f\u00FCr die bestm\u00F6glichen Ergebnisse zu tun.",
  },
  {
    icon: TrendingUp,
    title: "Verbesserungsbesessen",
    description: "Wir sind nie zufrieden mit dem Status Quo. Kontinuierliche Optimierung und A/B-Testing unserer Kampagnen ist unser Antrieb \u2013 f\u00FCr immer bessere Ergebnisse.",
  },
];

const Marketing = () => {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>Marketing Automatisierung | Pirro Consulting</title>
        <meta name="description" content="Marketing-Prozesse automatisieren: Lead-Generierung, Content-Erstellung und Kampagnen-Management auf Autopilot." />
        <link rel="canonical" href="https://pirro-consulting.de/marketing" />
        <meta property="og:title" content="Marketing Automatisierung | Pirro Consulting" />
        <meta property="og:description" content="Marketing-Prozesse automatisieren: Lead-Generierung, Content-Erstellung und Kampagnen-Management auf Autopilot." />
        <meta property="og:url" content="https://pirro-consulting.de/marketing" />
        <meta property="og:image" content="https://pirro-consulting.de/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://pirro-consulting.de/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Marketing Automatisierung",
          "description": "Marketing-Prozesse automatisieren: Lead-Generierung, Content-Erstellung und Kampagnen-Management auf Autopilot.",
          "provider": {
            "@type": "Organization",
            "name": "Pirro Consulting",
            "url": "https://pirro-consulting.de"
          },
          "serviceType": "Marketing Automatisierung",
          "areaServed": { "@type": "Country", "name": "Deutschland" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pirro-consulting.de" },
            { "@type": "ListItem", "position": 2, "name": "Marketing Automatisierung", "item": "https://pirro-consulting.de/marketing" }
          ]
        })}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Marketing & Neukundengewinnung
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Mehr Kunden.
              <br />
              <span className="text-primary">Weniger Aufwand.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Wir entwickeln und betreuen deine Marketing-Kampagnen &ndash; von der Strategie bis zur Umsetzung.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="https://calendly.com/pirroconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-14 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md group"
              >
                Kostenlose Marketing-Analyse
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Warum Online Marketing?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Ergebnisse, die <span className="text-primary">&uuml;berzeugen</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Online Marketing ist der effektivste Weg, neue Kunden zu gewinnen. Mit datengetriebenen Strategien und automatisierten Prozessen erreichen wir Ihre Zielgruppe genau dort, wo sie sich aufh&auml;lt &ndash; und verwandeln Interessenten in zahlende Kunden.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className="flex flex-col items-center justify-center text-center p-8 bg-card border border-border rounded-2xl h-40"
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-muted-foreground text-center">{stat.label}</p>
                  </motion.div>
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
              Unsere Marketing-Leistungen
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="p-8 bg-card border border-border rounded-2xl h-full"
                  whileHover={{ y: -8, boxShadow: "0 20px 40px -20px rgba(0,0,0,0.1)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
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
                <motion.div
                  className="p-6 bg-card border border-border rounded-2xl h-full text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-display font-bold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                </motion.div>
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
                <motion.div
                  className="p-8 bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl h-full"
                  whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                  <p className="text-background/70 leading-relaxed">{value.description}</p>
                </motion.div>
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
                Jahrelange Erfahrung, <span className="text-primary">messbare Erfolge</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Mit &uuml;ber 8 Jahren Erfahrung im Online Marketing und mehr als 1.500 betreuten Kampagnen wissen wir genau, was funktioniert &ndash; und was nicht. Jede Strategie basiert auf echten Daten und bew&auml;hrten Methoden.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="https://calendly.com/pirroconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-14 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md group"
                >
                  Kostenloses Erstgespr&auml;ch vereinbaren
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
              <p className="text-sm text-muted-foreground mt-4">
                Kostenlos und unverbindlich &ndash; um festzustellen, ob wir der richtige Partner f&uuml;r Ihr Marketing sind.
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
              Bereit f&uuml;r mehr Neukunden?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Lass uns gemeinsam herausfinden, wie wir dein Marketing auf das n&auml;chste Level bringen k&ouml;nnen.
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="https://calendly.com/pirroconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-14 px-8 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md font-medium group"
              >
                Jetzt Gespr&auml;ch vereinbaren
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
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
              <motion.div className="p-6 bg-card border border-border rounded-2xl h-full" whileHover={{ y: -4 }}>
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">Recruiting & Mitarbeitergewinnung</h3>
                <p className="text-sm text-muted-foreground">Social Recruiting und Active Sourcing &ndash; qualifizierte Bewerber in k&uuml;rzester Zeit.</p>
              </motion.div>
            </Link>
            <Link to="/webdesign" className="group">
              <motion.div className="p-6 bg-card border border-border rounded-2xl h-full" whileHover={{ y: -4 }}>
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">Webdesign & Entwicklung</h3>
                <p className="text-sm text-muted-foreground">Conversion-optimierte Websites und Landing Pages, die Besucher zu Kunden machen.</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Marketing;
