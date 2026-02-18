import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    slug: "automatisierung-einstieg",
    title: "5 Prozesse, die jedes Unternehmen sofort automatisieren sollte",
    excerpt:
      "Du verlierst jede Woche Stunden mit repetitiven Aufgaben. Hier sind die 5 Bereiche, die sich am schnellsten automatisieren lassen – mit sofortigem ROI.",
    category: "Automatisierung",
    readTime: "5 Min.",
    date: "12. Feb 2026",
    featured: true,
  },
  {
    slug: "crm-richtig-nutzen",
    title: "CRM richtig nutzen: Warum 80% der Unternehmen es falsch machen",
    excerpt:
      "Ein CRM ist nur so gut wie seine Nutzung. Die häufigsten Fehler und wie du sie vermeidest, um deine Pipeline wirklich zu managen.",
    category: "CRM",
    readTime: "7 Min.",
    date: "5. Feb 2026",
    featured: false,
  },
  {
    slug: "ki-im-unternehmen",
    title: "KI im Unternehmen: Hype vs. Realität für den Mittelstand",
    excerpt:
      "Was KI heute wirklich für kleine und mittlere Unternehmen leisten kann – und wo die Grenzen liegen. Ein ehrlicher Überblick.",
    category: "KI",
    readTime: "6 Min.",
    date: "28. Jan 2026",
    featured: false,
  },
  {
    slug: "onboarding-automatisieren",
    title: "Kunden-Onboarding automatisieren: Der komplette Guide",
    excerpt:
      "Vom ersten Kontakt bis zum zufriedenen Kunden – so baust du einen Onboarding-Prozess, der skaliert und begeistert.",
    category: "Prozesse",
    readTime: "8 Min.",
    date: "20. Jan 2026",
    featured: false,
  },
  {
    slug: "tools-vergleich-2026",
    title: "Die besten Automatisierungs-Tools 2026 im Vergleich",
    excerpt:
      "Make vs. Zapier vs. n8n – welches Tool passt zu deinem Unternehmen? Unser ehrlicher Vergleich mit Preis-Leistungs-Bewertung.",
    category: "Tools",
    readTime: "10 Min.",
    date: "10. Jan 2026",
    featured: false,
  },
  {
    slug: "digitalisierung-fehler",
    title: "7 teure Fehler bei der Digitalisierung – und wie du sie vermeidest",
    excerpt:
      "Die meisten Digitalisierungsprojekte scheitern nicht an der Technik, sondern an der Strategie. Lerne aus den Fehlern anderer.",
    category: "Strategie",
    readTime: "6 Min.",
    date: "3. Jan 2026",
    featured: false,
  },
];

const categories = ["Alle", "Automatisierung", "CRM", "KI", "Prozesse", "Tools", "Strategie"];

const Blog = () => {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>Blog & Ressourcen | Pirro Consulting</title>
        <meta
          name="description"
          content="Praxis-Tipps zu Automatisierung, Digitalisierung, CRM und KI für Unternehmer. Kostenlose Guides und Insights von Pirro Consulting."
        />
        <link rel="canonical" href="https://pirro-consulting.de/blog" />
        <meta property="og:title" content="Blog & Ressourcen | Pirro Consulting" />
        <meta property="og:description" content="Praxis-Tipps zu Automatisierung, Digitalisierung, CRM und KI für Unternehmer." />
        <meta property="og:url" content="https://pirro-consulting.de/blog" />
        <meta property="og:image" content="https://pirro-consulting.de/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://pirro-consulting.de/og-image.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Pirro Consulting Blog",
            description: "Praxis-Tipps zu Automatisierung und Digitalisierung",
            url: "https://pirro-consulting.de/blog",
            publisher: {
              "@type": "Organization",
              name: "Pirro Consulting",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://pirro-consulting.de" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://pirro-consulting.de/blog" },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-background/10 border border-background/20 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-background/60" />
              <span className="text-sm text-background/60">Blog & Ressourcen</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Wissen, das dein Business{" "}
              <span className="text-highlight">voranbringt</span>
            </h1>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">
              Praxis-Tipps, Guides und Insights zu Automatisierung, Digitalisierung und skalierbarem Wachstum.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  cat === "Alle"
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <Link to={`/blog/${featured.slug}`} className="block">
              <motion.article
                className="group relative grid md:grid-cols-2 gap-8 bg-card border border-border rounded-2xl overflow-hidden cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/10] md:aspect-auto bg-foreground relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-highlight/20 to-transparent"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-display font-bold text-background/10">
                      01
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-highlight text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Tag className="w-3 h-3" />
                      {featured.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {featured.readTime}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {featured.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-highlight transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-highlight transition-colors">
                    Artikel lesen
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, index) => (
              <AnimatedSection key={article.slug} delay={index * 0.1}>
                <Link to={`/blog/${article.slug}`} className="block h-full">
                <motion.article
                  className="group bg-card border border-border rounded-2xl overflow-hidden h-full cursor-pointer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Placeholder */}
                  <div className="aspect-[16/9] bg-secondary relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl font-display font-bold text-foreground/5">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold mb-3 leading-snug group-hover:text-highlight transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-highlight transition-colors">
                      Weiterlesen
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Keine Insights verpassen
            </h2>
            <p className="text-background/70 mb-8">
              Erhalte die neuesten Tipps zu Automatisierung und Digitalisierung direkt in dein Postfach. Kein Spam, nur Mehrwert.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="deine@email.de"
                className="flex-1 h-12 px-4 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-background/40 transition-colors"
              />
              <motion.button
                className="h-12 px-6 bg-highlight text-white rounded-lg font-medium hover:bg-highlight/90 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Abonnieren
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
            <p className="text-xs text-background/40 mt-4">
              Jederzeit abbestellbar. Deine Daten sind sicher.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
