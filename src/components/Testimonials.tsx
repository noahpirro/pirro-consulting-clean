import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Schneider",
    role: "Geschäftsführer",
    company: "Digital Solutions GmbH",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "Durch Pirro Consulting sparen wir jeden Monat über 40 Stunden manuelle Arbeit. Die Automatisierung unseres Onboardings war ein Game-Changer.",
    rating: 5,
    result: "40+ Stunden/Monat gespart"
  },
  {
    name: "Sarah Weber",
    role: "Head of Operations",
    company: "ProMotion Pictures",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    quote: "Endlich keine Excel-Listen mehr! Unser CRM läuft jetzt vollautomatisch und wir haben den Überblick über jeden Lead.",
    rating: 5,
    result: "300% mehr Leads verarbeitet"
  },
  {
    name: "Thomas Müller",
    role: "Inhaber",
    company: "COACHME Academy",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "Die Zusammenarbeit war professionell und zielorientiert. Innerhalb von 4 Wochen hatten wir ein komplett automatisiertes Fulfillment.",
    rating: 5,
    result: "4 Wochen bis zur Umsetzung"
  },
  {
    name: "Lisa Hoffmann",
    role: "Marketing Managerin",
    company: "Startup Hub Berlin",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote: "Wir konnten unser Team um 2 Personen verkleinern und machen trotzdem mehr Umsatz. Die Investition hat sich 10-fach rentiert.",
    rating: 5,
    result: "10x ROI in 6 Monaten"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
      />
    ))}
  </div>
);

export const Testimonials = () => {
  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section className="py-24 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Rating Badge */}
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-amber-50 dark:bg-amber-950/30 rounded-full mb-8 border border-amber-200 dark:border-amber-800"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-semibold text-amber-700 dark:text-amber-300">
              {averageRating} von 5 Sternen
            </span>
            <span className="text-amber-600/70 dark:text-amber-400/70">
              • {testimonials.length}+ Bewertungen
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Was unsere <span className="text-primary">Kunden</span> sagen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Echte Ergebnisse von echten Unternehmern, die mit uns ihre Prozesse automatisiert haben.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              className="relative p-6 md:p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <StarRating rating={testimonial.rating} />

              {/* Quote */}
              <blockquote className="mt-4 mb-6 text-foreground text-lg leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Result Badge */}
              <div className="inline-flex items-center px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-full mb-6 border border-emerald-200 dark:border-emerald-800">
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  ✓ {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <footer className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role} bei ${testimonial.company}`}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                  width={48}
                  height={48}
                />
                <div>
                  <cite className="not-italic font-semibold text-foreground">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
            <p className="text-sm text-muted-foreground">Zufriedene Kunden</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground">200+</p>
            <p className="text-sm text-muted-foreground">Automatisierungen</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground">10.000+</p>
            <p className="text-sm text-muted-foreground">Stunden gespart</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-foreground">98%</p>
            <p className="text-sm text-muted-foreground">Weiterempfehlung</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
