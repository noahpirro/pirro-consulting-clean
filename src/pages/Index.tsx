import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { TrustBadges } from "@/components/TrustBadges";
import { Problem } from "@/components/Problem";
import { InlineCTA } from "@/components/InlineCTA";
import { MarqueeBand } from "@/components/MarqueeBand";
import { Footer } from "@/components/Footer";

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
        <meta property="og:image" content="https://pirro-consulting.de/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://pirro-consulting.de/og-image.png" />
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
      <Footer />
    </main>
  );
};

export default Index;
