import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, CheckCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { CALENDLY_URL } from "@/constants";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TextReveal } from "@/components/TextReveal";
import { GlowCard } from "@/components/GlowCard";

interface ServicePageConfig {
  seo: {
    title: string;
    description: string;
    slug: string;
    ogImageAlt: string;
    serviceType: string;
    breadcrumbName: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaText: string;
    benefits: string[];
  };
  stats: {
    sectionBadge: string;
    sectionTitle: string;
    sectionTitleHighlight: string;
    sectionDescription: string;
    items: { value: string; label: string }[];
  };
  services: {
    sectionTitle: string;
    items: { icon: React.ElementType; title: string; description: string }[];
  };
  advantages: {
    items: { icon: React.ElementType; title: string; description: string }[];
  };
  values: {
    description: string;
    items: { icon: React.ElementType; title: string; description: string }[];
  };
  experience: {
    title: string;
    titleHighlight: string;
    description: string;
    ctaText: string;
    ctaSubtext: string;
  };
  cta: {
    title: string;
    subtitle: string;
  };
  otherServices: { title: string; description: string; href: string }[];
}

export const ServicePageLayout = ({ config }: { config: ServicePageConfig }) => {
  const { seo, hero, stats, services, advantages, values, experience, cta, otherServices } = config;
  const canonicalUrl = `https://pirro-consulting.de/${seo.slug}`;

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://pirro-consulting.de/og-image.webp" />
        <meta property="og:image:alt" content={seo.ogImageAlt} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://pirro-consulting.de/og-image.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: seo.breadcrumbName,
            description: seo.description,
            provider: {
              "@type": "Organization",
              name: "Pirro Consulting",
              url: "https://pirro-consulting.de",
            },
            serviceType: seo.serviceType,
            areaServed: { "@type": "Country", name: "Deutschland" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://pirro-consulting.de" },
              { "@type": "ListItem", position: 2, name: seo.breadcrumbName, item: canonicalUrl },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center animate-fade-in">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              {hero.badge}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              <TextReveal text={hero.titleLine1} delay={0.2} />
              <br />
              <span className="text-primary">
                <TextReveal text={hero.titleLine2} delay={0.4} />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              {hero.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-14 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md group hover:scale-[1.03] active:scale-[0.98] transition-transform"
              >
                {hero.ctaText}
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
                {stats.sectionBadge}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                {stats.sectionTitle} <span className="text-primary">{stats.sectionTitleHighlight}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {stats.sectionDescription}
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-8">
              {stats.items.map((stat, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
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
              {services.sectionTitle}
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.items.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
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
              Deine Vorteile
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Warum <span className="text-primary">Pirro Consulting</span>?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.items.map((advantage, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
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
            <p className="text-background/70 max-w-2xl mx-auto">{values.description}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.items.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
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

      {/* Experience */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Unsere Erfahrung
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                {experience.title} <span className="text-primary">{experience.titleHighlight}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                {experience.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-14 px-8 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md group hover:scale-[1.03] active:scale-[0.98] transition-transform"
                >
                  {experience.ctaText}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-4">{experience.ctaSubtext}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{cta.title}</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">{cta.subtitle}</p>
            <div>
              <a
                href={CALENDLY_URL}
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
            {otherServices.map((service) => (
              <Link key={service.href} to={service.href} className="group">
                <div className="p-6 bg-card border border-border rounded-2xl h-full hover:-translate-y-1 transition-transform">
                  <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
