import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { TrustBadges } from "@/components/TrustBadges";
import { Problem } from "@/components/Problem";
import { InlineCTA } from "@/components/InlineCTA";
import { MarqueeBand } from "@/components/MarqueeBand";
import { Footer } from "@/components/Footer";
import { ToolsLogos } from "@/components/ToolsLogos";
import { AnimatedSection } from "@/components/AnimatedSection";
import { articles } from "@/data/articles";

// Lazy-load below-fold components
const Solution = lazy(() => import("@/components/Solution").then(m => ({ default: m.Solution })));
const Services = lazy(() => import("@/components/Services").then(m => ({ default: m.Services })));
const AISection = lazy(() => import("@/components/AISection").then(m => ({ default: m.AISection })));
const Integrations = lazy(() => import("@/components/Integrations").then(m => ({ default: m.Integrations })));
const ROICalculator = lazy(() => import("@/components/ROICalculator").then(m => ({ default: m.ROICalculator })));
const CaseStudies = lazy(() => import("@/components/CaseStudies").then(m => ({ default: m.CaseStudies })));
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const Process = lazy(() => import("@/components/Process").then(m => ({ default: m.Process })));
const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
const DigitalTeam = lazy(() => import("@/components/DigitalTeam").then(m => ({ default: m.DigitalTeam })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const CTA = lazy(() => import("@/components/CTA").then(m => ({ default: m.CTA })));
const BigNumbers = lazy(() => import("@/components/BigNumbers").then(m => ({ default: m.BigNumbers })));

const Index = () => {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>Pirro Consulting | Automatisierung & Digitalisierung für Unternehmer</title>
        <meta name="description" content="Wir automatisieren und digitalisieren dein Unternehmen – von CRM über Onboarding bis Backoffice. Weniger Chaos, mehr Zeit für Wachstum. Jetzt kostenlose Potenzialanalyse sichern." />
        <link rel="canonical" href="https://pirro-consulting.de" />
        <meta property="og:title" content="Pirro Consulting | Automatisierung & Digitalisierung für Unternehmer" />
        <meta property="og:description" content="Weniger Chaos. Mehr Wachstum. Wir digitalisieren und automatisieren dein Unternehmen – von CRM über Onboarding bis Backoffice." />
        <meta property="og:url" content="https://pirro-consulting.de" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://pirro-consulting.de/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pirro Consulting – Automatisierung & Digitalisierung für Unternehmer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://pirro-consulting.de/og-image.webp" />
      </Helmet>
      <Navbar />
      <Hero />
      <TrustedBy />
      <TrustBadges />
      <Problem />
      <InlineCTA
        headline="Erkennst du dich wieder?"
        buttonText="Jetzt Potenzialanalyse sichern"
        variant="dark"
      />
      <Suspense fallback={null}>
        <Solution />
        <MarqueeBand
          texts={["Automatisierung", "Digitalisierung", "KI-Lösungen", "Skalierung", "Effizienz"]}
          speed={25}
          variant="dark"
        />
        <Services />
        <InlineCTA
          headline="Bereit, dein Unternehmen zu systematisieren?"
          buttonText="Kostenloses Erstgespräch buchen"
        />
        <AISection />
        <Integrations />
        <ToolsLogos />
        <BigNumbers />
        <ROICalculator />
        <CaseStudies />
        <MarqueeBand
          texts={["10+ Unternehmen", "100+ Automationen", "1.000+ Stunden gespart", "98% Weiterempfehlung"]}
          speed={30}
          variant="light"
        />
        <Testimonials />
        <Process />
        <InlineCTA
          headline="Klingt nach dem richtigen Ansatz?"
          buttonText="Gespräch vereinbaren"
        />
        <About />
        <DigitalTeam />
        <FAQ />
        <CTA />
      </Suspense>

      {/* Latest Blog Articles */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Neueste <span className="text-highlight">Insights</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Praxis-Tipps zu Automatisierung, Digitalisierung und skalierbarem Wachstum.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {articles.slice(0, 3).map((article, i) => (
              <AnimatedSection key={article.slug} delay={i * 0.1}>
                <Link to={`/blog/${article.slug}`} className="block h-full">
                  <article className="group bg-card border border-border rounded-2xl overflow-hidden h-full hover:-translate-y-1.5 transition-transform duration-300">
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-secondary rounded-full text-xs text-muted-foreground">
                          <Tag className="w-3 h-3" />
                          {article.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-display font-bold mb-3 leading-snug group-hover:text-highlight transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium group-hover:text-highlight transition-colors">
                        Weiterlesen
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3} className="text-center mt-10">
            <Link
              to="/blog"
              className="inline-flex items-center h-12 px-6 border border-border rounded-lg font-medium hover:bg-secondary transition-colors group"
            >
              Alle Artikel ansehen
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
