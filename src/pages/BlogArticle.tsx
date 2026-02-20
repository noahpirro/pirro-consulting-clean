import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
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

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | Pirro Consulting Blog</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={`https://pirro-consulting.de/blog/${article.slug}`} />
        <meta property="og:title" content={`${article.title} | Pirro Consulting`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={`https://pirro-consulting.de/blog/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://pirro-consulting.de/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            author: { "@type": "Person", name: "Noah Pirro" },
            publisher: {
              "@type": "Organization",
              name: "Pirro Consulting",
              url: "https://pirro-consulting.de",
            },
            mainEntityOfPage: `https://pirro-consulting.de/blog/${article.slug}`,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://pirro-consulting.de" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://pirro-consulting.de/blog" },
              { "@type": "ListItem", position: 3, name: article.title, item: `https://pirro-consulting.de/blog/${article.slug}` },
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

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "150ms" }}>
            <div className="prose prose-lg max-w-none">
              {article.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg"
                >
                  {linkifyParagraph(paragraph, usedKeywords)}
                </p>
              ))}
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
                  href="https://calendly.com/pirroconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
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
