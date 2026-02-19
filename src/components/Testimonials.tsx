import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, ShoppingCart, Megaphone, GraduationCap, Monitor } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { TextReveal } from "./TextReveal";

const testimonials = [
  {
    name: "Michael S.",
    role: "Geschäftsführer",
    company: "E-Commerce Agentur",
    initials: "MS",
    avatarGradient: "from-blue-500 to-cyan-400",
    icon: ShoppingCart,
    quote: "Durch Pirro Consulting sparen wir jeden Monat über 40 Stunden manuelle Arbeit. Die Automatisierung unseres Onboardings war ein Game-Changer.",
    rating: 5,
    result: "40+ Stunden/Monat gespart",
  },
  {
    name: "Sarah W.",
    role: "Head of Operations",
    company: "Marketing Agentur",
    initials: "SW",
    avatarGradient: "from-violet-500 to-purple-400",
    icon: Megaphone,
    quote: "Endlich keine Excel-Listen mehr! Unser CRM läuft jetzt vollautomatisch und wir haben den Überblick über jeden Lead.",
    rating: 5,
    result: "300% mehr Leads verarbeitet",
  },
  {
    name: "Thomas K.",
    role: "Inhaber",
    company: "Coaching-Unternehmen",
    initials: "TK",
    avatarGradient: "from-amber-500 to-orange-400",
    icon: GraduationCap,
    quote: "Die Zusammenarbeit war professionell und zielorientiert. Innerhalb von 4 Wochen hatten wir ein komplett automatisiertes Fulfillment.",
    rating: 5,
    result: "4 Wochen bis zur Umsetzung",
  },
  {
    name: "Lisa H.",
    role: "Marketing Managerin",
    company: "IT-Dienstleister",
    initials: "LH",
    avatarGradient: "from-emerald-500 to-teal-400",
    icon: Monitor,
    quote: "Wir konnten unser Team um 2 Personen verkleinern und machen trotzdem mehr Umsatz. Die Investition hat sich 10-fach rentiert.",
    rating: 5,
    result: "10x ROI in 6 Monaten",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-highlight text-highlight" : "text-muted-foreground/30"}`}
      />
    ))}
  </div>
);

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    scale: 0.95,
  }),
};

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const t = testimonials[current];
  const Icon = t.icon;
  const averageRating = (
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <section className="py-24 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-highlight/10 rounded-full mb-8 border border-highlight/20">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
              ))}
            </div>
            <span className="font-semibold text-highlight">
              {averageRating} von 5 Sternen
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            <TextReveal text="Was unsere" />{" "}
            <span className="text-primary"><TextReveal text="Kunden" delay={0.12} /></span>{" "}
            <TextReveal text="sagen" delay={0.16} />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Echte Ergebnisse von echten Unternehmern, die mit uns ihre Prozesse automatisiert haben.
          </p>
        </AnimatedSection>

        {/* Carousel */}
        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Vorheriges Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
            aria-label="Nächstes Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Card */}
          <div className="overflow-hidden px-2">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.article
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative p-8 md:p-12 bg-card rounded-2xl border border-border shadow-sm"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />

                <StarRating rating={t.rating} />

                <blockquote className="mt-6 mb-6 text-foreground text-xl md:text-2xl leading-relaxed font-display">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Result Badge */}
                <div className="inline-flex items-center px-3 py-1.5 bg-primary/10 rounded-full mb-8 border border-primary/20">
                  <span className="text-sm font-medium text-primary">
                    &#10003; {t.result}
                  </span>
                </div>

                {/* Author */}
                <footer className="flex items-center gap-4">
                  <div className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="text-base font-bold text-white">
                      {t.initials}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <cite className="not-italic font-semibold text-foreground text-lg block">
                      {t.name}
                    </cite>
                    <p className="text-sm text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-medium">{t.company}</span>
                  </div>
                </footer>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Avatar Preview Strip + Dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {testimonials.map((person, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`group relative transition-all duration-300 ${
                  index === current ? "scale-110" : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`Testimonial von ${person.name}`}
              >
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${person.avatarGradient} flex items-center justify-center transition-shadow duration-300 ${
                    index === current ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : ""
                  }`}
                >
                  <span className="text-xs font-bold text-white">{person.initials}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground">10+</p>
            <p className="text-sm text-muted-foreground">Zufriedene Kunden</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground">100+</p>
            <p className="text-sm text-muted-foreground">Automatisierungen</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground">1.000+</p>
            <p className="text-sm text-muted-foreground">Stunden gespart</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground">98%</p>
            <p className="text-sm text-muted-foreground">Weiterempfehlung</p>
          </div>
        </div>
      </div>
    </section>
  );
};
