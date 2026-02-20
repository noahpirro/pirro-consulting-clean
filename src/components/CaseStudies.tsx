import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

// Import images
import ecommerceImage from "@/assets/case-studies/ecommerce-agency.webp";
import coachingImage from "@/assets/case-studies/coaching-company.webp";
import itImage from "@/assets/case-studies/it-services.webp";

const caseStudies = [
  {
    company: "E-Commerce Agentur",
    industry: "Marketing & Werbung",
    image: ecommerceImage,
    stats: [
      { value: "10x", label: "mehr Kapazität" },
      { value: "500+", label: "Aufträge" }
    ],
    testimonial: "Wir haben uns für die Zusammenarbeit entschieden, weil der Ansatz erfrischend anders war. Das Konzept war klar und deutlich und es hat perfekt zu uns gepasst!",
    author: "Marketing Director",
    role: "(Geschäftsführerin)"
  },
  {
    company: "Coaching-Unternehmen",
    industry: "Bildung & Coaching",
    image: coachingImage,
    stats: [
      { value: "96%", label: "Zufriedenheit" },
      { value: "5 Min", label: "Onboarding" }
    ],
    testimonial: "Unsere Kunden sind begeistert vom sofortigen Zugang nach der Buchung. Das automatisierte Onboarding spart uns Stunden täglich und die Kundenzufriedenheit ist enorm gestiegen.",
    author: "Sarah M.",
    role: "(Gründerin)"
  },
  {
    company: "IT-Dienstleister GmbH",
    industry: "Technologie",
    image: itImage,
    stats: [
      { value: "23%", label: "Conversion" },
      { value: "200+", label: "Leads/Monat" }
    ],
    testimonial: "Kein Lead geht mehr verloren. Unser Umsatz hat sich durch die automatische Lead-Qualifizierung verdoppelt. Die Zusammenarbeit war von Anfang an professionell.",
    author: "Thomas K.",
    role: "(CEO)"
  }
];

export const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how far through the viewport the section is
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setScrollY(Math.max(0, Math.min(1, progress)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden" id="case-studies">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/70 to-foreground/80" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-600 ease-out ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Erfolgsgeschichten
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Fallstudien
          </h2>
        </div>

        {/* Case Study Content */}
        <div className="max-w-7xl mx-auto" role="region" aria-label="Fallstudien Karussell" aria-live="polite">
          <div
            key={currentIndex}
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center animate-fade-in"
          >
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Industry Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                </div>
                <span className="text-white/70 text-sm font-medium">{currentStudy.industry}</span>
              </div>

              {/* Company Name */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {currentStudy.company}
              </h3>

              {/* Testimonial */}
              <blockquote className="text-white/80 text-lg md:text-xl leading-relaxed mb-4">
                &bdquo;{currentStudy.testimonial}&ldquo;
              </blockquote>

              {/* Author */}
              <p className="text-white font-semibold mb-10">
                {currentStudy.author} <span className="text-white/60">{currentStudy.role}</span>
              </p>

              {/* Stats Section */}
              <div className="mb-8">
                <h4 className="text-white font-semibold text-lg mb-4">Erfolge in Zahlen</h4>
                <div className="flex gap-4">
                  {currentStudy.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 min-w-[140px]"
                    >
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg font-medium hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                Jetzt ähnliche Ergebnisse erzielen
              </a>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Image Container with subtle border */}
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src={currentStudy.image}
                    alt={currentStudy.company}
                    width={600}
                    height={750}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/5] object-cover scale-110"
                    style={{ transform: `scale(1.1) translateY(${(scrollY - 0.5) * -30}px)` }}
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Vorherige Fallstudie"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {caseStudies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Fallstudie ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              aria-label="Nächste Fallstudie"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
