# Pirro Consulting Website - Projekt-Statusdokument

**Erstellt:** 19. Februar 2026
**Letzte Aktualisierung:** 19. Februar 2026, Abend
**Projekt-Pfad:** `/Users/noahpirro/pirro-consulting-clean`
**Ersteller:** Claude (AI-Assistent) im Auftrag von Noah Pirro

---

## GOLDSTANDARD-POLICY

**ALLES was wir in diesem Projekt machen, machen wir ausschliesslich im Goldstandard.**
Das bedeutet: Jede Codezeile, jede Optimierung, jede Entscheidung wird auf hoechstem professionellen Niveau umgesetzt. Keine Kompromisse bei Qualitaet, Performance, SEO, Accessibility oder Sicherheit. Wenn etwas gemacht wird, dann richtig.

---

## 1. PROJEKT-UEBERSICHT

**Was:** Unternehmenswebsite fuer Pirro Consulting - Automatisierung & Digitalisierung fuer Unternehmer.
**Domain:** https://pirro-consulting.de
**Tech Stack:** React 18 + TypeScript + Vite 5 + Tailwind CSS 3 + Framer Motion
**Typ:** Single-Page Application (SPA) mit Client-Side Routing
**Status:** Entwicklung abgeschlossen, noch NICHT deployed/gehostet

### Geschaeftsinformationen
- **Inhaber:** Noah Pirro
- **Firma:** Pirro Consulting (Einzelunternehmen)
- **Adresse:** Trippstadter Str. 110, 67663 Kaiserslautern
- **E-Mail:** info@pirroconsulting.de
- **USt-IdNr.:** DE353674802
- **Telefon:** NOCH NICHT VORHANDEN - Platzhalter `4915XXX` in 4 Dateien (7 Stellen) - Noah liefert die Nummer
- **LinkedIn:** https://www.linkedin.com/in/noahpirro
- **Instagram:** https://www.instagram.com/pirroconsulting
- **Calendly:** https://calendly.com/pirroconsulting
- **Trustpilot:** https://www.trustpilot.com/review/pirro-consulting.de
- **Gruendungsjahr:** 2023

---

## 2. ZUGAENGE & INFRASTRUKTUR

### GitHub Repository
- **URL:** https://github.com/noahpirro/pirro-consulting-clean.git
- **Branch:** main (einziger Branch)
- **Letzter Commit:** `6b71909` - SEO & Accessibility: OG-Tags, Skip-Link, Hash-Navigation, main-content IDs
- **Zugang:** HTTPS (kein SSH-Key konfiguriert)
- **Commits insgesamt:** 9

### Hosting / Server
- **KEIN Hosting konfiguriert** - Es gibt keine Deployment-Pipeline, keinen Server, keine IPs
- **Kein Vercel/Netlify/Docker/CI-CD** - Alles fehlt noch
- **Kein .env** - Keine Umgebungsvariablen noetig (statische Site ohne Backend)
- **Kein SSL-Zertifikat** - Wird vom Hosting-Provider kommen
- **Domain `pirro-consulting.de`** - DNS/Registrar-Details nicht bekannt, muss Noah klaeren

### SSH Keys / Server-Zugang
- Keine SSH-Keys im Projekt
- Kein Server vorhanden - Site muss noch deployed werden

### Dev-Server
- `npm run dev` startet auf `localhost:8080`
- `npm run build` erzeugt `/dist` Ordner (produktionsfertig, mit gzip + brotli)
- `npm run preview` startet Vorschau des Builds

---

## 3. TECH STACK IM DETAIL

### Core
| Paket | Version | Zweck |
|-------|---------|-------|
| React | 18.3.1 | UI Framework |
| React DOM | 18.3.1 | DOM Rendering |
| TypeScript | 5.8.3 | Typsicherheit |
| Vite | 5.4.19 | Build Tool & Dev Server |
| React Router DOM | 6.30.1 | Client-Side Routing |

### Styling
| Paket | Version | Zweck |
|-------|---------|-------|
| Tailwind CSS | 3.4.17 | Utility-First CSS |
| tailwindcss-animate | 1.0.7 | Animation Utilities |
| class-variance-authority | 0.7.1 | Varianten-Management (shadcn) |
| clsx | 2.1.1 | Conditional Classes |
| tailwind-merge | 2.6.0 | Class Merging |

### UI & Animation
| Paket | Version | Zweck |
|-------|---------|-------|
| Framer Motion | 12.24.12 | Animationen & Transitions |
| Lucide React | 0.462.0 | Icon Library |
| sonner | 1.7.4 | Toast Notifications |

### SEO & Data
| Paket | Version | Zweck |
|-------|---------|-------|
| react-helmet-async | 2.0.5 | Per-Page SEO Meta Tags |
| @tanstack/react-query | 5.83.0 | Data Fetching (aktuell unused, fuer zukuenftige API-Integration) |

### shadcn/ui Komponenten (6 verbleibend)
| Paket | Zweck |
|-------|-------|
| @radix-ui/react-accordion | FAQ Accordion |
| @radix-ui/react-slot | Button Slot Pattern |
| @radix-ui/react-toast | Toast System |
| @radix-ui/react-tooltip | Tooltip Provider |

### Build-Plugins
- `@vitejs/plugin-react-swc` - SWC Compiler fuer React
- `vite-plugin-compression2` - Gzip + Brotli Pre-Compression

---

## 4. DESIGN SYSTEM

### Fonts
- **Body:** Inter (400, 500, 600, 700) - `font-sans`
- **Headings:** Space Grotesk (500, 600, 700) - `font-display`
- **Laden:** Google Fonts, non-render-blocking via `media="print"` + `onload`

### Farbschema (CSS Variables in HSL - definiert in `src/index.css`)
```
--background: 0 0% 100%        (Weiss)
--foreground: 0 0% 4%           (Fast Schwarz)
--primary: 0 0% 4%              (Schwarz - Buttons, Links)
--primary-foreground: 0 0% 98%  (Weiss auf Primary)
--secondary: 0 0% 96%           (Hellgrau - Hintergruende)
--muted-foreground: 0 0% 29%    (Grau - Subtexte)
--destructive: 0 84% 60%        (Rot - Fehler, Warnungen)
--destructive-foreground: 0 0% 98% (Weiss auf Destructive)
--highlight: 15 90% 55%         (Orange - Akzentfarbe, CTAs, Hover-Effekte)
--border: 0 0% 88%              (Hellgrau - Rahmen)
--card: 0 0% 100%               (Weiss - Karten-Hintergrund)
--ring: 0 0% 4%                 (Focus-Ring)
```

### Farbverwendung im Code
- **Theme-Tokens verwenden:** `bg-foreground`, `text-highlight`, `bg-primary`, `border-border`, etc.
- **KEINE hardcoded Tailwind-Farben** wie `gray-*`, `red-*`, `green-*`, `amber-*` in Komponenten
- **Ausnahmen:** Dekorative Karten-Akzente in Services.tsx, TrustBadges.tsx, DigitalTeam.tsx verwenden bewusst verschiedene Tailwind-Farben (blue, purple, green, orange, pink, cyan) fuer visuellen Kontrast zwischen den Karten. Die Trustpilot-Markenfarbe `#00b67a` bleibt ebenfalls hardcoded.

### Prinzip
Minimalistisch Schwarz-Weiss mit orangem Highlight. Kein Dark Mode aktiv (`.dark` CSS existiert, wird aber nicht genutzt).

---

## 5. PROJEKTSTRUKTUR

```
pirro-consulting-clean/
├── claude/                     # Statusdokumente fuer Claude
│   └── website-status-2026-02-19.md  # DIESES DOKUMENT
├── public/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── og-image.png            # Open Graph Bild (1200x630)
│   ├── robots.txt              # Erlaubt alles, verweist auf sitemap
│   ├── sitemap.xml             # 13 URLs (7 Seiten + 6 Blog-Artikel)
│   └── placeholder.svg
├── src/
│   ├── assets/
│   │   ├── clients/            # 10 Kundenlogos (WebP + SVG, keine PNG mehr)
│   │   │   ├── alpenguide.svg
│   │   │   ├── ao-logo.webp
│   │   │   ├── auto-doerr.svg
│   │   │   ├── bfd-logo.webp
│   │   │   ├── cantina-mexicana.webp
│   │   │   ├── cocktails-at-home.webp
│   │   │   ├── health-innovation-hub.webp
│   │   │   ├── omlor.webp
│   │   │   ├── sand-aus-velsen.webp
│   │   │   └── schneehoehen.svg
│   │   ├── logos/              # 36 Tool-Logos (WebP + SVG, 1x zapier.png)
│   │   ├── case-studies/       # Fallstudien-Bilder (WebP)
│   │   └── logo.webp           # Pirro Consulting Logo
│   ├── components/
│   │   ├── ui/                 # shadcn/ui (6 Komponenten)
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   ├── sonner.tsx      # Theme hardcoded auf "light" (next-themes entfernt)
│   │   │   ├── toast.tsx       # Destructive-Variante nutzt Theme-Tokens
│   │   │   ├── toaster.tsx
│   │   │   └── tooltip.tsx
│   │   ├── Navbar.tsx          # Navigation mit Services-Dropdown + Skip-to-Content
│   │   ├── Hero.tsx            # Hero Section mit rotierenden Woertern + CTA
│   │   ├── TrustedBy.tsx       # Logo-Marquee (10 Kunden, CSS-Animation)
│   │   ├── TrustBadges.tsx     # DSGVO + Trustpilot + Projekte Badges
│   │   ├── Problem.tsx         # 3 Pain Points mit Kosten-Badges
│   │   ├── Solution.tsx        # Loesungs-Darstellung
│   │   ├── Services.tsx        # 6 Leistungen Grid
│   │   ├── AISection.tsx       # KI-Section
│   │   ├── Integrations.tsx    # 32 Tool-Logos mit SVG-Verbindungslinien
│   │   ├── ROICalculator.tsx   # Interaktiver ROI-Rechner (Range-Inputs mit aria-labels)
│   │   ├── CaseStudies.tsx     # Fallstudien-Carousel (3 Cases)
│   │   ├── Testimonials.tsx    # Kundenstimmen-Carousel
│   │   ├── Process.tsx         # 4-Schritte Prozess
│   │   ├── About.tsx           # Ueber Noah (mit LinkedIn-Link)
│   │   ├── DigitalTeam.tsx     # 6 KI-Spezialisten Grid
│   │   ├── FAQ.tsx             # FAQ Accordion (Radix)
│   │   ├── CTA.tsx             # Haupt-CTA Section
│   │   ├── InlineCTA.tsx       # Zwischen-CTAs (2 Varianten: light/dark)
│   │   ├── Footer.tsx          # Footer mit 4-Spalten Layout
│   │   ├── ErrorBoundary.tsx   # React Error Boundary (Class Component)
│   │   ├── CookieConsent.tsx   # DSGVO Cookie Banner (nutzt useCookieConsent Hook)
│   │   ├── WhatsAppWidget.tsx  # WhatsApp Floating Button (unten rechts)
│   │   ├── ScrollProgress.tsx  # Scroll-Fortschrittsbalken (oben)
│   │   ├── BackToTop.tsx       # Zurueck-nach-oben Button (erscheint nach 600px)
│   │   ├── SocialProofPopup.tsx # Soziale Beweis-Popups (8 Items, random Timing)
│   │   ├── LoadingScreen.tsx   # Initiale Lade-Animation
│   │   ├── CursorEffect.tsx    # Custom Cursor Effekt (nur Desktop)
│   │   ├── MagneticButton.tsx  # Magnetischer Button-Effekt
│   │   ├── AnimatedSection.tsx # Scroll-triggered Animationen (IntersectionObserver)
│   │   ├── AnimatedCounter.tsx # Zahlen-Hochzaehl-Animation
│   │   ├── AnimatedRoutes.tsx  # Route-Management mit AnimatePresence
│   │   └── PageTransition.tsx  # Seiten-Uebergang + ScrollToTop + Hash-Scroll
│   ├── pages/
│   │   ├── Index.tsx           # Startseite (12 lazy-loaded Below-Fold Sektionen)
│   │   ├── Recruiting.tsx      # Service: Recruiting (mit Cross-Links)
│   │   ├── Marketing.tsx       # Service: Marketing (mit Cross-Links)
│   │   ├── Webdesign.tsx       # Service: Webdesign (mit Cross-Links)
│   │   ├── Blog.tsx            # Blog-Uebersicht (Kategorie-Filter, Newsletter)
│   │   ├── BlogArticle.tsx     # Blog-Artikel Detail (/blog/:slug)
│   │   ├── Impressum.tsx       # Impressum (§5 TMG, echte Daten)
│   │   ├── Datenschutz.tsx     # Datenschutzerklaerung (DSGVO)
│   │   └── NotFound.tsx        # 404 Seite (animiert)
│   ├── data/
│   │   └── articles.ts         # 6 Blog-Artikel mit vollstaendigem Inhalt
│   ├── hooks/
│   │   ├── use-cookie-consent.ts # Cookie-Consent Hook (localStorage)
│   │   └── use-toast.ts        # Toast Hook (shadcn)
│   ├── lib/
│   │   └── utils.ts            # cn() Utility (clsx + tailwind-merge)
│   ├── App.tsx                 # Root: ErrorBoundary > HelmetProvider > QueryClient > Router
│   ├── main.tsx                # Entry Point (StrictMode)
│   ├── index.css               # Tailwind + CSS Variables + Custom Styles
│   └── vite-env.d.ts
├── index.html                  # HTML mit SEO Meta + 4 JSON-LD Schemas
├── vite.config.ts              # Vite: SWC, Compression, Manual Chunks, Port 8080
├── tailwind.config.ts          # Tailwind: Fonts, Colors, Animations
├── tsconfig.json               # TypeScript Config (strict)
├── package.json                # Dependencies
└── .gitignore
```

---

## 6. ROUTING

```
/                    → Index.tsx (Startseite)
/recruiting          → Recruiting.tsx (lazy)
/marketing           → Marketing.tsx (lazy)
/webdesign           → Webdesign.tsx (lazy)
/blog                → Blog.tsx (lazy, Kategorie-Filter)
/blog/:slug          → BlogArticle.tsx (lazy, 6 Artikel)
/impressum           → Impressum.tsx (lazy, noindex)
/datenschutz         → Datenschutz.tsx (lazy, noindex)
*                    → NotFound.tsx (lazy, 404, noindex)
```

### Blog-Artikel Slugs
```
/blog/automatisierung-einstieg    → "5 Prozesse, die jedes Unternehmen sofort automatisieren sollte"
/blog/crm-richtig-nutzen          → "CRM richtig nutzen: Warum 80% der Unternehmen es falsch machen"
/blog/ki-im-unternehmen           → "KI im Unternehmen: Hype vs. Realitaet fuer den Mittelstand"
/blog/onboarding-automatisieren   → "Kunden-Onboarding automatisieren: Der komplette Guide"
/blog/tools-vergleich-2026        → "Die besten Automatisierungs-Tools 2026 im Vergleich"
/blog/digitalisierung-fehler      → "7 teure Fehler bei der Digitalisierung – und wie du sie vermeidest"
```

### Blog-Kategorien
`Alle`, `Automatisierung`, `CRM`, `KI`, `Prozesse`, `Tools`, `Strategie`

### Navigation
- Alle Seiten ausser Index werden lazy-loaded via `React.lazy()`
- Auf der Index-Seite werden 12 Below-Fold-Komponenten lazy-loaded
- `PageTransition.tsx` handhabt: Scroll-to-Top bei Route-Wechsel + Hash-Link-Scroll (z.B. `/#about` von Subpages)
- `AnimatePresence` fuer smooth Page-Transitions

---

## 7. SEO-SETUP

### JSON-LD Schemas (index.html - global)
1. **ProfessionalService** - Firma mit Adresse (Trippstadter Str. 110, 67663 Kaiserslautern), Rating, Angebotskatalog
2. **FAQPage** - 3 FAQ-Eintraege
3. **Organization** - Gruender, Social Links (LinkedIn, Instagram), knowsAbout
4. **WebSite** - Name + URL + potentialAction (SearchAction)

### Per-Page SEO (react-helmet-async)
| Seite | title | description | canonical | og:image | og:type | JSON-LD |
|-------|-------|-------------|-----------|----------|---------|---------|
| Index | ✅ | ✅ | ✅ | ✅ | website | (global in index.html) |
| Recruiting | ✅ | ✅ | ✅ | ✅ | website | Service + BreadcrumbList |
| Marketing | ✅ | ✅ | ✅ | ✅ | website | Service + BreadcrumbList |
| Webdesign | ✅ | ✅ | ✅ | ✅ | website | Service + BreadcrumbList |
| Blog | ✅ | ✅ | ✅ | ✅ | website | Blog + BreadcrumbList |
| BlogArticle | ✅ (dynamisch) | ✅ | ✅ | ✅ | article | Article + BreadcrumbList |
| Impressum | ✅ | noindex | ✅ | — | — | — |
| Datenschutz | ✅ | noindex | ✅ | — | — | — |
| 404 | ✅ | noindex, nofollow | — | — | — | — |

### Technisches SEO
- `robots.txt` erlaubt alles, verweist auf `sitemap.xml`
- `sitemap.xml` mit 13 URLs: 7 Hauptseiten + 6 Blog-Artikel (mit individuellen lastmod-Daten)
- Alle CTA-Buttons sind echte `<a>`-Links (crawlbar fuer Google)
- `rel="nofollow"` auf allen externen Links (WhatsApp, LinkedIn, Instagram, Trustpilot)
- `rel="noopener noreferrer"` auf ALLEN `target="_blank"` Links (Sicherheit)
- Non-render-blocking Google Fonts
- `content-visibility: auto` fuer Below-Fold Sections
- DNS Prefetch fuer wa.me, calendly.com, linkedin.com, instagram.com
- Open Graph Image: `/public/og-image.png` (muss noch erstellt/optimiert werden)
- Twitter Card: `summary_large_image` auf allen Seiten

---

## 8. ACCESSIBILITY

### Implementiert
- **Skip-to-Content Link** in Navbar (sr-only, sichtbar bei Fokus)
- **`id="main-content"`** auf allen Seiten (Target fuer Skip-Link)
- **aria-labels** auf allen Icon-Buttons (WhatsApp, Scroll-Buttons, Carousels, Menu)
- **aria-expanded** auf Dropdown-Buttons (Navbar Desktop + Mobile)
- **aria-label** auf Range-Inputs (ROICalculator)
- **Semantisches HTML**: `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`, `<blockquote>`, `<cite>`
- **Focus-visible Styles**: Ring-2 auf Buttons und interaktive Elemente
- **Alt-Text** auf ALLEN Bildern
- **Keyboard Navigation**: Alle interaktiven Elemente erreichbar
- **`decoding="async"`** auf Below-Fold Bildern

### Noch nicht implementiert
- aria-live Regionen (fuer dynamische Inhalte wie Toast-Benachrichtigungen - wird von sonner automatisch gehandhabt)
- Screen-Reader-Tests (manuell testen)

---

## 9. PERFORMANCE-OPTIMIERUNGEN

### Bundle Splitting (Vite Manual Chunks)
```
index.js          ~180KB (61KB gzip) - Hauptbundle
vendor-react.js   ~142KB (46KB gzip) - React + ReactDOM
vendor-motion.js  ~132KB (44KB gzip) - Framer Motion
vendor-query.js    ~28KB (9KB gzip)  - TanStack Query
vendor-icons.js    ~26KB (6KB gzip)  - Lucide Icons
vendor-router.js   ~21KB (8KB gzip)  - React Router
vendor-helmet.js   ~14KB (6KB gzip)  - Helmet
Integrations.js    ~57KB (35KB gzip) - Tool-Logos Chunk
articles.js        ~11KB (5KB gzip)  - Blog-Artikel Daten
+ ~12 weitere lazy-loaded Chunks (je 2-15KB)
```
**Total Dist:** ~2.3MB (inklusive Pre-Compressed .gz/.br Dateien)
**Initial Load (gzip):** ~61KB JS + ~10KB CSS

### Bild-Optimierung
- Alle Kundenlogos: WebP oder SVG (7 alte PNGs geloescht)
- Alle Tool-Logos: WebP oder SVG (33 alte ICO/PNGs geloescht, 1x zapier.png bleibt)
- Case-Study-Bilder: WebP
- Alle Bilder: `width`/`height` Attribute (CLS-Praevention)
- `loading="lazy"` + `decoding="async"` auf Below-Fold Bildern
- Assets unter 8KB werden als Base64 inline (Vite Default)

### Kompression
- Gzip Pre-Compression (threshold 1024B)
- Brotli Pre-Compression (threshold 1024B)
- Beide werden als .gz und .br Dateien im dist/ erzeugt

### Lazy Loading
- 12 Homepage-Sektionen: Solution, Services, AISection, Integrations, ROICalculator, CaseStudies, Testimonials, Process, About, DigitalTeam, FAQ, CTA
- Alle Subpages: Recruiting, Marketing, Webdesign, Blog, BlogArticle, Impressum, Datenschutz, NotFound

---

## 10. SICHERHEIT

- **Alle `target="_blank"` Links** haben `rel="noopener noreferrer"` (verhindert Reverse Tabnabbing)
- **Kein `dangerouslySetInnerHTML`** im gesamten Projekt
- **Keine Inline Event Handler** (alle via React Event System)
- **XSS-Schutz:** React Default HTML Escaping
- **DSGVO Cookie Banner** mit localStorage-basiertem Consent
- **Keine Secrets/Credentials** im Repository
- **Keine .env Datei** (keine sensiblen Daten noetig)
- **Error Boundary** faengt Render-Fehler ab, zeigt deutsche Fehlermeldung

---

## 11. COMMIT-HISTORIE (KOMPLETT)

```
6b71909  SEO & Accessibility: OG-Tags, Skip-Link, Hash-Navigation, main-content IDs
597fff7  Cleanup: 33 alte ICO/PNG gelöscht, Sitemap+Blog-URLs, Accessibility, Theme-Farben
08dd07d  Projekt-Status-Dokument für Kontinuität zwischen Sessions
0cb59c9  ICO→WebP, hardcoded Farben→Theme, Cookie-Consent Hook, Accessibility
3dbaef2  Blog-Artikel-Detailseiten und Newsletter-Formular
60d44fe  Impressum & Datenschutz: Echte Kontaktdaten eingetragen
4602c66  Cleanup & UX: 34 Pakete entfernt, Blog-Filter, Error Boundary, Cross-Links
132576d  SEO, Performance & Code-Cleanup: Bundle -69%, 42 UI-Komponenten entfernt, alle CTAs crawlbar
8e81b54  Initial commit: Pirro Consulting website (clean, without Lovable)
```

---

## 12. WAS WURDE GEMACHT (CHRONOLOGISCH, DETAILLIERT)

### Session 1 - Website Aufbau (`8e81b54`)
- Komplette Website von Grund auf gebaut (React + TypeScript + Vite + Tailwind CSS)
- 32 Komponenten erstellt
- 9 Seiten erstellt (Index, Recruiting, Marketing, Webdesign, Blog, Impressum, Datenschutz, 404)
- Design System mit CSS Variables (Schwarz-Weiss + Orange)
- Framer Motion Animationen (Page Transitions, Scroll Reveals, Hover Effects)
- Responsive Design (Mobile-First)
- Cookie Consent Banner
- WhatsApp Widget (Floating Button)
- Social Proof Popups (8 Items, zufaelliges Timing)
- Loading Screen Animation
- Custom Cursor Effect (nur Desktop)
- Scroll Progress Bar
- Back to Top Button
- Magnetic Button Effect (Hero CTA)
- FAQ Accordion (Radix UI)
- ROI Calculator (interaktiv, 3 Slider)
- Case Studies Carousel (3 Cases)
- Testimonials Carousel (6 Bewertungen)
- Integrations Visualisierung (32 Tool-Logos mit SVG-Linien)
- TrustedBy Logo-Marquee (10 Kunden)

### Session 2 - SEO & Performance (`132576d`)
- Alle CTA-Buttons von `<Button onClick>` zu echten `<a href>` Links umgebaut (crawlbar fuer Google)
- `rel="nofollow"` auf alle externen Links
- Blog-Artikel in `<Link>` gewrappt (vorher nur visuell, nicht klickbar)
- BreadcrumbList JSON-LD auf allen Subpages
- Image `width`/`height` Attribute ueberall hinzugefuegt (CLS-Praevention)
- ScrollToTop bei Route-Wechsel (PageTransition.tsx)
- DNS Prefetch Hints in index.html
- `aria-expanded` auf Navbar Dropdown
- App.css geloescht (unused)
- 3 externe CDN-Logos lokal gehostet (HubSpot, Zapier, Notion)
- 3 grosse ICO-Logos durch SVGs ersetzt (brevo, trello, slack)
- InlineCTA-Komponente erstellt (wiederverwendbar, 2 Varianten)
- **12 Homepage-Komponenten lazy-loaded** (Initial Bundle: 605KB → 186KB = -69%)
- **42 ungenutzte shadcn UI-Komponenten geloescht** (49 → 6 Dateien)
- Build: 186KB main, 62KB gzip

### Session 3 - Cleanup & Features (`4602c66`)
- Blog-Kategorie-Filter funktional gemacht (useState + onClick Handler)
- **34 ungenutzte npm-Pakete entfernt** (23 @radix-ui, next-themes, recharts, zod, cmdk, date-fns, input-otp, embla-carousel, react-day-picker, react-resizable-panels, vaul)
- Hardcoded Farben → Theme-Variablen in Integrations.tsx und CaseStudies.tsx
- Error Boundary (Class Component) um gesamte App gewrappt
- Cross-Links "Weitere Leistungen" auf allen 3 Service-Seiten
- 3 Client-Logos PNG → WebP konvertiert (TrustedBy)
- NotFound: console.error entfernt, Button → Link
- LinkedIn-URL korrigiert (linkedin.com → www.linkedin.com)
- Sonner: next-themes Abhaengigkeit entfernt, Theme hardcoded "light"

### Session 3 - Impressum & Datenschutz (`60d44fe`)
- Echte Adresse eingetragen: Trippstadter Str. 110, 67663 Kaiserslautern
- E-Mail: info@pirroconsulting.de (ueberall aktualisiert)
- USt-IdNr.: DE353674802
- JSON-LD PostalAddress Schema in index.html aktualisiert
- Verantwortlicher fuer Inhalt nach §55 Abs. 2 RStV hinzugefuegt

### Session 3 - Blog-Artikel (`3dbaef2`)
- `src/data/articles.ts`: 6 vollstaendige Blog-Artikel mit echten Inhalten (je 7-10 Absaetze)
- `src/pages/BlogArticle.tsx`: Komplette Artikel-Detailseite mit:
  - Dunkler Header mit Zurueck-Link + Meta (Kategorie, Lesezeit, Datum)
  - Artikel-Content (prose Styling)
  - CTA-Box ("Bereit, diese Erkenntnisse umzusetzen?")
  - Prev/Next Navigation zwischen Artikeln
  - Vollstaendiges SEO: Article JSON-LD, BreadcrumbList, OG Tags, Canonical
- Route `/blog/:slug` in AnimatedRoutes registriert
- Blog.tsx: Artikel-Daten aus shared `articles.ts` importiert
- Newsletter-Formular: `<form>` mit onSubmit, E-Mail-Validierung, Toast-Feedback

### Session 3 - Feinschliff (`0cb59c9`)
- 9 ICO-Logos → WebP konvertiert (make, n8n, calendly, outlook, datev, lexoffice, easybill, placetel, close)
  - Konvertierung: ICO → PNG (macOS sips) → WebP (sharp-cli)
- Hardcoded Farben systematisch durch Theme-Tokens ersetzt in:
  - Testimonials: amber→highlight, emerald→primary, gray→muted-foreground
  - Problem: red→destructive
  - Hero: green→highlight
  - ROICalculator: green→highlight
  - SocialProofPopup: green→primary, bg-white→bg-card
  - Navbar: gray-900→foreground (CTA-Button auf nicht-gescrollter Seite)
  - Integrations: blue/emerald→highlight
- Cookie-Consent: `useCookieConsent` Hook extrahiert (localStorage-basiert)
- CookieConsent-Banner: shadcn `<Button>` durch native `<motion.button>` ersetzt
- ROICalculator: `aria-label` auf alle Range-Inputs

### Session 4 - Cleanup & SEO (`597fff7`, `6b71909`) [HEUTE]
- **33 alte ICO/PNG Logo-Dateien geloescht** (WebP/SVG-Versionen bleiben)
- **7 alte Client-PNG-Dateien geloescht** (WebP-Versionen bleiben)
- **Sitemap um 6 Blog-Artikel-URLs erweitert** (mit individuellen lastmod-Daten)
- **Skip-to-Content Link** im Navbar fuer Keyboard-Navigation (sr-only, sichtbar bei Tab-Fokus)
- **Hash-Link-Navigation gefixt** - `/#about` und `/#faq` von Subpages scrollen jetzt korrekt zur Sektion
- **`id="main-content"`** auf Impressum, Datenschutz, NotFound hinzugefuegt (fehlte fuer Skip-Link)
- **Index.tsx SEO vervollstaendigt**: og:image, og:type, twitter:card, twitter:image hinzugefuegt
- **Toast.tsx**: Hardcoded red-Farben → destructive/destructive-foreground Theme-Tokens
- **TrustBadges**: emerald-500 Pulse-Dot → primary
- **DigitalTeam**: green-400/600 Aktiv-Status → highlight
- **Navbar**: aria-expanded + aria-label auf Mobile Services-Dropdown
- **Blog.tsx**: `import * as React` → sauberer `import { useState }`
- Projekt-Status-Dokument erstellt und aktualisiert

---

## 13. OFFENE PUNKTE / TODOS

### KRITISCH - Sofort machen wenn Info vorliegt
1. **Telefonnummer ersetzen** - Platzhalter `4915XXX` in 4 Dateien, 7 Stellen:
   - `src/components/WhatsAppWidget.tsx` (Zeile 22: WhatsApp-URL)
   - `src/components/CTA.tsx` (Zeile 113: WhatsApp-Link)
   - `src/components/Navbar.tsx` (Zeilen 202, 215: WhatsApp + tel: Desktop)
   - `src/components/Navbar.tsx` (Zeilen 376, 385: WhatsApp + tel: Mobile)
   - `src/components/FAQ.tsx` (Zeile 109: WhatsApp-Link)
   - **Noah muss die echte Telefonnummer mitteilen**

2. **Hosting / Deployment einrichten**
   - Domain pirro-consulting.de muss auf Hosting zeigen
   - Empfehlung: Vercel (kostenlos, automatische SSL, SPA-Rewrites)
   - `vercel.json` erstellen mit `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
   - Alternative: Netlify mit `_redirects` Datei
   - SSL wird automatisch ueber Hosting-Provider bereitgestellt
   - GitHub Actions fuer automatisches Deployment bei Push optional

### SHOULD FIX
3. **Cookie Consent Enforcement erweitern** - Hook existiert (`useCookieConsent`), aber es gibt aktuell keine Analytics-Scripts die geblockt werden muessen. Wenn Google Analytics, Plausible o.ae. kommt, muss der Hook die Scripts konditional laden
4. **Newsletter Backend** - Formular zeigt Toast-Erfolgsbenachrichtigung, sendet aber nichts. Backend-Integration noetig (z.B. Brevo API, Mailchimp, ConvertKit)
5. **zapier.png konvertieren** - Einzige verbleibende PNG in logos/ (`src/assets/logos/zapier.png`). Zu WebP konvertieren.

### NICE TO HAVE
6. **Blog Pagination** - Bei mehr als ~9 Artikeln noetig
7. **Echte Testimonial-Avatare** - Aktuell Initialen-Kreise mit Gradient-Hintergrund
8. **Service-Seiten Pricing** - Preissektionen fehlen auf Recruiting/Marketing/Webdesign
9. **Kontaktformular** - Aktuell nur Calendly-Link, kein eigenes Formular auf der Seite
10. **Analytics einbinden** - Google Analytics 4 oder Plausible (Privacy-freundlich, kein Cookie-Consent noetig)
11. **Performance Monitoring** - Lighthouse CI in GitHub Actions, Web Vitals Tracking
12. **E2E Tests** - Playwright fuer kritische User Flows (Navigation, CTA-Clicks, Blog-Filter)
13. **@tanstack/react-query entfernen** - Wird aktuell nicht genutzt. Kann entfernt werden wenn kein Backend kommt.
14. **Echte Blog-Bilder** - Aktuell Platzhalter mit Nummern, keine Artikelbilder

---

## 14. BEKANNTE ARCHITEKTUR-ENTSCHEIDUNGEN

1. **Kein Dark Mode** - `.dark` CSS existiert in index.css, wird aber nicht aktiviert. Alle `dark:`-Varianten wurden aus Komponenten entfernt.
2. **Kein Backend** - Rein statische Site, keine API-Calls. Newsletter-Form und Kontakt nur ueber Calendly/WhatsApp.
3. **Blog-Artikel als statische Daten** - Alle Inhalte in `src/data/articles.ts` als TypeScript Arrays. Kein CMS, kein Markdown. Fuer mehr Artikel waere ein Headless CMS (Sanity, Contentful, Strapi) sinnvoll.
4. **Calendly als einziger Buchungsweg** - Alle CTAs linken auf `calendly.com/pirroconsulting`.
5. **WhatsApp als Support-Kanal** - Widget unten rechts + Links in Navbar, CTA, FAQ.
6. **Dekorative Kartenfarben** - Services.tsx, TrustBadges.tsx, DigitalTeam.tsx verwenden bewusst verschiedene Tailwind-Farben (blue, purple, green, orange, pink, cyan) fuer visuellen Kontrast. Das ist eine Design-Entscheidung, kein Bug.
7. **SPA ohne SSR** - Kein Server-Side Rendering. SEO wird ueber react-helmet-async + JSON-LD gehandhabt. Fuer maximale SEO waere SSR (Next.js) besser, aber fuer den aktuellen Scope ausreichend.
8. **Keine Tests** - Kein Testing-Framework installiert.

---

## 15. WICHTIGE DATEIPFADE FUER HAEUFIGE AENDERUNGEN

| Was aendern | Datei |
|-------------|-------|
| Neue Route hinzufuegen | `src/components/AnimatedRoutes.tsx` |
| Homepage Sektionsreihenfolge | `src/pages/Index.tsx` |
| Navigation Links (Desktop + Mobile) | `src/components/Navbar.tsx` |
| Footer Links | `src/components/Footer.tsx` |
| Blog-Artikel hinzufuegen | `src/data/articles.ts` (+ Slug in sitemap.xml) |
| Farben aendern | `src/index.css` (:root CSS Variables) |
| Fonts aendern | `tailwind.config.ts` + `index.html` (Google Fonts Link) |
| SEO Meta (global, JSON-LD) | `index.html` |
| SEO Meta (pro Seite) | Jeweilige Page in `src/pages/` (Helmet) |
| Build-Konfiguration | `vite.config.ts` |
| Impressum-Daten | `src/pages/Impressum.tsx` |
| Datenschutz-Text | `src/pages/Datenschutz.tsx` |
| Cookie Banner | `src/components/CookieConsent.tsx` + `src/hooks/use-cookie-consent.ts` |
| Telefonnummer (Platzhalter) | WhatsAppWidget, CTA, Navbar, FAQ (suche nach `4915XXX`) |
| Sitemap | `public/sitemap.xml` |
| Robots | `public/robots.txt` |

---

## 16. ENTWICKLUNGS-BEFEHLE

```bash
# In den Projektordner wechseln
cd /Users/noahpirro/pirro-consulting-clean

# Abhaengigkeiten installieren (falls node_modules fehlt)
npm install

# Dev-Server starten (Port 8080)
npm run dev

# Production Build erstellen
npm run build

# Build lokal testen
npm run preview

# Linting
npm run lint

# Git
git status
git log --oneline
git push origin main
```

---

## 17. TELEFONNUMMER-PLATZHALTER - SCHNELLE ANLEITUNG

Wenn Noah die Telefonnummer liefert (z.B. `491761234567`), muessen folgende Stellen aktualisiert werden:

```
src/components/WhatsAppWidget.tsx:22  → wa.me/491761234567
src/components/CTA.tsx:113           → wa.me/491761234567
src/components/Navbar.tsx:202        → wa.me/491761234567
src/components/Navbar.tsx:215        → tel:+491761234567
src/components/Navbar.tsx:376        → wa.me/491761234567
src/components/Navbar.tsx:385        → tel:+491761234567
src/components/FAQ.tsx:109           → wa.me/491761234567
```

Zusaetzlich sollte die Nummer auch in `index.html` im JSON-LD Schema als `telephone` Property hinzugefuegt werden.

---

*Dieses Dokument wird bei jeder groesseren Session aktualisiert. Es dient als vollstaendige Grundlage fuer die Weiterarbeit in neuen Chat-Sessions ohne Kontextverlust.*
