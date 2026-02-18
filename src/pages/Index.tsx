import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";

import { Integrations } from "@/components/Integrations";
import { Testimonials } from "@/components/Testimonials";
import { CaseStudies } from "@/components/CaseStudies";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { AISection } from "@/components/AISection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Problem />
      <Solution />
      <Services />
      <AISection />
      <Integrations />
      <CaseStudies />
      <Process />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
