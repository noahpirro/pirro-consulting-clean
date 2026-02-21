import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Clock, Tag, BookOpen, Search, X, Zap, Users, Brain, GitBranch, Wrench, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { articles, categories } from "@/data/articles";

const categoryGradients: Record<string, string> = {
  Automatisierung: "from-orange-500/20 to-amber-500/10",
  CRM: "from-blue-500/20 to-cyan-500/10",
  KI: "from-purple-500/20 to-violet-500/10",
  Prozesse: "from-emerald-500/20 to-green-500/10",
  Tools: "from-rose-500/20 to-pink-500/10",
  Strategie: "from-indigo-500/20 to-blue-500/10",
};

const categoryIcons: Record<string, React.ReactNode> = {
  Automatisierung: <Zap className="w-full h-full" />,
  CRM: <Users className="w-full h-full" />,
  KI: <Brain className="w-full h-full" />,
  Prozesse: <GitBranch className="w-full h-full" />,
  Tools: <Wrench className="w-full h-full" />,
  Strategie: <Target className="w-full h-full" />,
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = activeCategory === "Alle" ? articles : articles.filter((a) => a.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  const featured = filtered.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>Blog & Ressourcen | Pirro Consulting</title>
        <meta
          name="description"
          content="Praxis-Tipps zu Automatisierung, Digitalisierung, CRM und KI für Unternehmer. Kostenlose Guides und Insights von Pirro Consulting."
        />
        <link rel="canonical" href="https://pirroconsulting.de/blog" />
        <meta property="og:title" content="Blog & Ressourcen | Pirro Consulting" />
        <meta property="og:description" content="Praxis-Tipps zu Automatisierung, Digitalisierung, CRM und KI für Unternehmer." />
        <meta property="og:url" content="https://pirroconsulting.de/blog" />
        <meta property="og:image" content="https://pirroconsulting.de/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pirro Consulting Blog – Insights zu Automatisierung und Digitalisierung" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://pirroconsulting.de/og-image.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Pirro Consulting Blog",
            description: "Praxis-Tipps zu Automatisierung und Digitalisierung",
            url: "https://pirroconsulting.de/blog",
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://pirroconsulting.de" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://pirroconsulting.de/blog" },
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

      {/* Search + Categories */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-md z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Search */}
            <div className="relative w-full sm:w-64 flex-shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Artikel suchen..."
                aria-label="Blog-Artikel durchsuchen"
                className="w-full h-10 pl-9 pr-9 rounded-full bg-secondary border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Suche leeren"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {/* Categories */}
            <div className="relative flex-1 min-w-0">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      cat === activeCategory
                        ? "bg-foreground text-background"
                        : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none sm:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <Link to={`/blog/${featured.slug}`} className="block">
              <article
                className="group relative grid md:grid-cols-2 gap-8 bg-card border border-border rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] md:aspect-auto bg-foreground relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-highlight/20 to-transparent scale-100 group-hover:scale-110 transition-transform duration-700" />
                  {/* Category gradient background with animation */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[featured.category] || "from-highlight/20 to-transparent"} group-hover:scale-105 transition-transform duration-500`}
                    style={{
                      backgroundSize: "200% 200%",
                      animation: "gradientShift 6s ease infinite",
                    }}
                  />
                  {/* Decorative diagonal lines */}
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        45deg,
                        currentColor 0px,
                        currentColor 1px,
                        transparent 1px,
                        transparent 16px
                      )`,
                    }}
                  />
                  {/* Decorative dot grid */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                      backgroundSize: "32px 32px",
                    }}
                  />
                  {/* Category icon */}
                  <div className="absolute inset-0 flex items-center justify-center text-background/[0.07]">
                    <div className="w-24 h-24">
                      {categoryIcons[featured.category] || <BookOpen className="w-full h-full" />}
                    </div>
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
              </article>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* No Results */}
      {!featured && rest.length === 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-lg font-medium text-muted-foreground mb-2">Keine Artikel gefunden</p>
            <p className="text-sm text-muted-foreground/60">
              Versuche einen anderen Suchbegriff oder wähle eine andere Kategorie.
            </p>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, index) => (
              <AnimatedSection key={article.slug} delay={Math.min(index * 0.1, 0.5)}>
                <Link to={`/blog/${article.slug}`} className="block h-full">
                <article
                  className="group bg-card border border-border rounded-2xl overflow-hidden h-full cursor-pointer hover:-translate-y-1.5 transition-transform duration-300"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] bg-secondary relative overflow-hidden transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] to-transparent scale-100 group-hover:scale-110 transition-transform duration-500" />
                    {/* Category gradient background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[article.category] || "from-foreground/10 to-transparent"}`}
                    />
                    {/* Decorative diagonal lines */}
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          -45deg,
                          currentColor 0px,
                          currentColor 1px,
                          transparent 1px,
                          transparent 14px
                        )`,
                      }}
                    />
                    {/* Decorative dot grid */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    />
                    {/* Category icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-foreground/[0.05]">
                      <div className="w-14 h-14">
                        {categoryIcons[article.category] || <BookOpen className="w-full h-full" />}
                      </div>
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
                </article>
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
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = new FormData(form).get("email") as string;
                if (email) {
                  toast.success("Danke für deine Anmeldung!", {
                    description: "Du erhältst bald unsere neuesten Insights.",
                  });
                  form.reset();
                }
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="deine@email.de"
                className="flex-1 h-12 px-4 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-background/40 transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-6 bg-highlight text-white rounded-lg font-medium hover:bg-highlight/90 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Abonnieren
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
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
