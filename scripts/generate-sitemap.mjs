/**
 * Generates sitemap.xml from static pages + dynamic blog articles.
 * Run: node scripts/generate-sitemap.mjs
 * Also runs automatically via "prebuild" npm script.
 */
import { readFileSync, writeFileSync } from "fs";

const DOMAIN = "https://pirro-consulting.de";
const today = new Date().toISOString().split("T")[0];

// Extract article slugs from the TypeScript source file
const articlesSource = readFileSync("src/data/articles.ts", "utf-8");
const slugMatches = [...articlesSource.matchAll(/slug:\s*"([^"]+)"/g)];
const slugs = slugMatches.map((m) => m[1]);

// Static pages
const staticPages = [
  { loc: "", changefreq: "weekly", priority: "1.0" },
  { loc: "/recruiting", changefreq: "monthly", priority: "0.8" },
  { loc: "/marketing", changefreq: "monthly", priority: "0.8" },
  { loc: "/webdesign", changefreq: "monthly", priority: "0.8" },
  { loc: "/kontakt", changefreq: "monthly", priority: "0.8" },
  { loc: "/blog", changefreq: "weekly", priority: "0.7" },
];

// Blog articles (dynamic)
const blogPages = slugs.map((slug) => ({
  loc: `/blog/${slug}`,
  changefreq: "monthly",
  priority: "0.6",
}));

// Legal pages
const legalPages = [
  { loc: "/impressum", changefreq: "yearly", priority: "0.3" },
  { loc: "/datenschutz", changefreq: "yearly", priority: "0.3" },
];

const allPages = [...staticPages, ...blogPages, ...legalPages];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${DOMAIN}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`sitemap.xml generated with ${allPages.length} URLs (${slugs.length} blog articles)`);
