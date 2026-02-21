import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Clock, Tag, Mail, Share2 } from "lucide-react";
import { toast } from "sonner";
import { CALENDLY_URL } from "@/constants";
import { Link, useParams, Navigate } from "react-router-dom";
import { articles } from "@/data/articles";
import { AnimatedSection } from "@/components/AnimatedSection";

const internalLinks: { pattern: RegExp; to: string }[] = [
  { pattern: /\bCRM-System[e]?\b/, to: "/" },
  { pattern: /\bCRM\b/, to: "/" },
  { pattern: /\bAutomatisierung\b/, to: "/" },
  { pattern: /\bDigitalisierung\b/, to: "/" },
  { pattern: /\bOnboarding\b/, to: "/" },
  { pattern: /\bMarketing\b/, to: "/marketing" },
  { pattern: /\bRecruiting\b/, to: "/recruiting" },
  { pattern: /\bWebdesign\b/, to: "/webdesign" },
  { pattern: /\bErstgespräch\b/, to: "/kontakt" },
  { pattern: /\bPotenzialanalyse\b/, to: "/kontakt" },
];

function linkifyParagraph(text: string, usedKeywords: Set<string>): ReactNode {
  for (const { pattern, to } of internalLinks) {
    const key = pattern.source;
    if (usedKeywords.has(key)) continue;
    const match = text.match(pattern);
    if (!match || match.index === undefined) continue;

    usedKeywords.add(key);
    const before = text.slice(0, match.index);
    const matched = match[0];
    const after = text.slice(match.index + matched.length);

    return (
      <>
        {before}
        <Link to={to} className="text-highlight hover:underline">
          {matched}
        </Link>
        {after}
      </>
    );
  }
  return text;
}

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = articles.indexOf(article);
  const nextArticle = articles[currentIndex + 1] || null;
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);
  // If not enough from same category, fill with other articles
  if (relatedArticles.length < 3) {
    const others = articles.filter(
      (a) => a.slug !== article.slug && !relatedArticles.includes(a)
    );
    relatedArticles.push(...others.slice(0, 3 - relatedArticles.length));
  }

  const usedKeywords = new Set<string>();

  // Extract TOC items from pseudo-heading paragraphs
  const tocItems: { label: string; id: string }[] = [];
  const tocPattern = /^(\d+\.\s|Fehler \d+:|Phase \d+)/;
  for (const paragraph of article.content) {
    if (tocPattern.test(paragraph)) {
      const match = paragraph.match(/^(.+?)[.:\u2013\u2014-]/);
      const label = match ? match[1].trim() : paragraph.trim();
      const id = label
        .toLowerCase()
        .replace(/[^a-z0-9äöüß\s-]/g, "")
        .replace(/\s+/g, "-");
      tocItems.push({ label, id });
    }
  }

  const pageUrl = `https://pirroconsulting.de/blog/${article.slug}`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(pageUrl)}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
  const whatsAppUrl = `https://wa.me/?text=${encodeURIComponent(article.title + " " + pageUrl)}`;

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | Pirro Consulting Blog</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={`https://pirroconsulting.de/blog/${article.slug}`} />
        <meta property="og:title" content={`${article.title} | Pirro Consulting`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={`https://pirroconsulting.de/blog/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://pirroconsulting.de/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={article.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt,
            url: `https://pirroconsulting.de/blog/${article.slug}`,
            datePublished: article.dateISO,
            dateModified: article.dateISO,
            author: { "@type": "Person", name: "Noah Pirro" },
            publisher: {
              "@type": "Organization",
              name: "Pirro Consulting",
              url: "https://pirroconsulting.de",
            },
            mainEntityOfPage: `https://pirroconsulting.de/blog/${article.slug}`,
            wordCount: article.content.join(" ").split(/\s+/).length,
            articleSection: article.category,
            articleBody: article.content.join("\n\n"),
            image: "https://pirroconsulting.de/og-image.webp",
            inLanguage: "de-DE",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://pirroconsulting.de" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://pirroconsulting.de/blog" },
              { "@type": "ListItem", position: 3, name: article.title, item: `https://pirroconsulting.de/blog/${article.slug}` },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Article Header */}
      <section className="pt-32 pb-12 bg-foreground text-background relative overflow-hidden">
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
          <div className="max-w-3xl mx-auto animate-fade-in">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-background/10 rounded-full text-xs text-background/70">
                <Tag className="w-3 h-3" />
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-background/60">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
              <span className="text-xs text-background/60">{article.date}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Social Sharing */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex items-center gap-3 py-4">
            <Share2 className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground mr-1">Teilen:</span>

            {/* Twitter / X */}
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Auf Twitter / X teilen"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-foreground/70 hover:bg-[#1DA1F2] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Auf LinkedIn teilen"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-foreground/70 hover:bg-[#0A66C2] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="Über WhatsApp teilen"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-secondary text-foreground/70 hover:bg-[#25D366] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "150ms" }}>
            {tocItems.length >= 3 && (
              <nav className="mb-10 p-6 bg-secondary/50 rounded-xl border border-border" aria-label="Inhaltsverzeichnis">
                <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Inhaltsverzeichnis</h2>
                <ol className="space-y-2">
                  {tocItems.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      <a href={`#${item.id}`} className="font-medium text-foreground hover:text-highlight transition-colors">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="prose prose-lg max-w-none">
              {article.content.map((paragraph, i) => {
                const tocMatch = tocItems.find((t) => paragraph.startsWith(t.label));
                if (tocMatch) {
                  return (
                    <div key={i} id={tocMatch.id}>
                      <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mt-10 mb-4">
                        {tocMatch.label}
                      </h2>
                      {paragraph.length > tocMatch.label.length && (
                        <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
                          {linkifyParagraph(paragraph.slice(paragraph.indexOf(tocMatch.label) + tocMatch.label.length).replace(/^[.:\s\u2013\u2014-]+/, ""), usedKeywords)}
                        </p>
                      )}
                    </div>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg"
                  >
                    {linkifyParagraph(paragraph, usedKeywords)}
                  </p>
                );
              })}
            </div>

            {/* CTA */}
            <AnimatedSection>
              <div className="mt-16 p-8 bg-secondary rounded-2xl border border-border">
                <h3 className="text-xl font-display font-bold mb-3">
                  Bereit, diese Erkenntnisse umzusetzen?
                </h3>
                <p className="text-muted-foreground mb-6">
                  In einem kostenlosen Erstgespräch zeigen wir dir, wie du diese Strategien in deinem Unternehmen anwenden kannst.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center h-12 px-6 bg-foreground text-background hover:bg-foreground/90 rounded-md font-medium group"
                >
                  Kostenloses Erstgespräch buchen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="bg-foreground text-background rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-background/70" />
                  </div>
                  <h3 className="text-xl font-display font-bold">
                    Keine Insights verpassen
                  </h3>
                </div>
                <p className="text-background/70 mb-6">
                  Erhalte die neuesten Tipps zu Automatisierung und Digitalisierung direkt in dein Postfach.
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-3"
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
                <p className="text-xs text-background/40 mt-3">
                  Kein Spam. Jederzeit abbestellbar.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <h2 className="text-2xl font-display font-bold mb-8">
                  Weitere Artikel
                </h2>
              </AnimatedSection>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related, i) => (
                  <AnimatedSection key={related.slug} delay={i * 0.1}>
                    <Link
                      to={`/blog/${related.slug}`}
                      className="group block p-6 border border-border rounded-xl hover:border-foreground/30 transition-colors h-full"
                    >
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-secondary rounded-full text-xs text-muted-foreground mb-3">
                        <Tag className="w-3 h-3" />
                        {related.category}
                      </span>
                      <h3 className="font-display font-semibold mb-2 group-hover:text-highlight transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {related.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground mt-3">
                        <Clock className="w-3 h-3" />
                        {related.readTime}
                      </span>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next Navigation */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
            {prevArticle ? (
              <Link
                to={`/blog/${prevArticle.slug}`}
                className="group p-5 border border-border rounded-xl hover:border-foreground/30 transition-colors"
              >
                <span className="text-xs text-muted-foreground mb-1 block">Vorheriger Artikel</span>
                <span className="text-sm font-medium group-hover:text-highlight transition-colors line-clamp-2">
                  {prevArticle.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextArticle ? (
              <Link
                to={`/blog/${nextArticle.slug}`}
                className="group p-5 border border-border rounded-xl hover:border-foreground/30 transition-colors text-right"
              >
                <span className="text-xs text-muted-foreground mb-1 block">Nächster Artikel</span>
                <span className="text-sm font-medium group-hover:text-highlight transition-colors line-clamp-2">
                  {nextArticle.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogArticle;
