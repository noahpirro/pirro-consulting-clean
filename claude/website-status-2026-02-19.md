# Pirro Consulting Website - Projekt-Statusdokument

**Erstellt:** 19. Februar 2026
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
**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion
**Typ:** Single-Page Application (SPA) mit Client-Side Routing

### Geschaeftsinformationen
- **Inhaber:** Noah Pirro
- **Firma:** Pirro Consulting
- **Adresse:** Trippstadter Str. 110, 67663 Kaiserslautern
- **E-Mail:** info@pirroconsulting.de
- **USt-IdNr.:** DE353674802
- **LinkedIn:** https://www.linkedin.com/in/noahpirro
- **Instagram:** https://www.instagram.com/pirroconsulting
- **Calendly:** https://calendly.com/pirroconsulting
- **Gruendungsjahr:** 2023

---

## 2. ZUGAENGE & INFRASTRUKTUR

### GitHub Repository
- **URL:** https://github.com/noahpirro/pirro-consulting-clean.git
- **Branch:** main (einziger Branch)
- **Letzter Commit:** `0cb59c9` (19. Feb 2026)
- **Zugang:** HTTPS (kein SSH-Key konfiguriert)

### Hosting / Server
- **KEIN Hosting konfiguriert** - Es gibt keine Deployment-Pipeline, keinen Server, keine IPs
- **Kein Vercel/Netlify/Docker/CI-CD** - Alles fehlt noch
- **Kein .env** - Keine Umgebungsvariablen noetig (statische Site ohne Backend)
- **Kein SSL-Zertifikat** - Wird vom Hosting-Provider kommen
- **Domain `pirro-consulting.de`** - DNS/Registrar-Details nicht bekannt, muss Noah klären

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
| @tanstack/react-query | 5.83.0 | Data Fetching (aktuell unused) |

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

### Farbschema (CSS Variables in HSL)
```
--background: 0 0% 100%        (Weiss)
--foreground: 0 0% 4%           (Fast Schwarz)
--primary: 0 0% 4%              (Schwarz - Buttons, Links)
--secondary: 0 0% 96%           (Hellgrau - Hintergruende)
--muted-foreground: 0 0% 29%    (Grau - Subtexte)
--destructive: 0 84% 60%        (Rot - Fehler)
--highlight: 15 90% 55%         (Orange - Akzentfarbe, CTAs)
--border: 0 0% 88%              (Hellgrau - Rahmen)
```

### Prinzip
Minimalistisch Schwarz-Weiss mit orangem Highlight. Kein Dark Mode aktiv (`.dark` CSS existiert, wird aber nicht genutzt).

---

## 5. PROJEKTSTRUKTUR

```
pirro-consulting-clean/
├── claude/                     # Statusdokumente fuer Claude
├── public/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── og-image.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── placeholder.svg
├── src/
│   ├── assets/
│   │   ├── clients/            # Kundenlogos (WebP, SVG)
│   │   ├── logos/              # Tool-Logos (WebP, SVG, einige alte ICO/PNG)
│   │   ├── case-studies/       # Fallstudien-Bilder (WebP)
│   │   └── logo.png            # Pirro Consulting Logo
│   ├── components/
│   │   ├── ui/                 # shadcn/ui (6 Komponenten)
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   └── tooltip.tsx
│   │   ├── Navbar.tsx          # Navigation mit Services-Dropdown
│   │   ├── Hero.tsx            # Hero Section mit CTA
│   │   ├── TrustedBy.tsx       # Logo-Marquee (10 Kunden)
│   │   ├── TrustBadges.tsx     # Vertrauen-Badges
│   │   ├── Problem.tsx         # Problem-Darstellung
│   │   ├── Solution.tsx        # Loesungs-Darstellung
│   │   ├── Services.tsx        # Leistungen
│   │   ├── AISection.tsx       # KI-Section
│   │   ├── Integrations.tsx    # 32 Tool-Logos mit SVG-Lines
│   │   ├── ROICalculator.tsx   # Interaktiver ROI-Rechner
│   │   ├── CaseStudies.tsx     # Fallstudien-Carousel
│   │   ├── Testimonials.tsx    # Kundenstimmen-Carousel
│   │   ├── Process.tsx         # Prozess-Schritte
│   │   ├── About.tsx           # Ueber Noah
│   │   ├── DigitalTeam.tsx     # Digitales Team Section
│   │   ├── FAQ.tsx             # FAQ Accordion
│   │   ├── CTA.tsx             # Haupt-CTA Section
│   │   ├── InlineCTA.tsx       # Zwischen-CTAs
│   │   ├── Footer.tsx          # Footer mit Links
│   │   ├── ErrorBoundary.tsx   # React Error Boundary
│   │   ├── CookieConsent.tsx   # DSGVO Cookie Banner
│   │   ├── WhatsAppWidget.tsx  # WhatsApp Floating Button
│   │   ├── ScrollProgress.tsx  # Scroll-Fortschrittsbalken
│   │   ├── BackToTop.tsx       # Zurueck-nach-oben Button
│   │   ├── SocialProofPopup.tsx # Soziale Beweis-Popups
│   │   ├── LoadingScreen.tsx   # Lade-Animation
│   │   ├── CursorEffect.tsx    # Custom Cursor
│   │   ├── MagneticButton.tsx  # Magnetischer Button-Effekt
│   │   ├── AnimatedSection.tsx # Scroll-Animationen
│   │   ├── AnimatedCounter.tsx # Zahlen-Animation
│   │   ├── AnimatedRoutes.tsx  # Route-Management
│   │   └── PageTransition.tsx  # Seiten-Uebergang + ScrollToTop
│   ├── pages/
│   │   ├── Index.tsx           # Startseite (12 lazy-loaded Sektionen)
│   │   ├── Recruiting.tsx      # Service: Recruiting
│   │   ├── Marketing.tsx       # Service: Marketing
│   │   ├── Webdesign.tsx       # Service: Webdesign
│   │   ├── Blog.tsx            # Blog-Uebersicht
│   │   ├── BlogArticle.tsx     # Blog-Artikel Detail
│   │   ├── Impressum.tsx       # Impressum (§5 TMG)
│   │   ├── Datenschutz.tsx     # Datenschutzerklaerung (DSGVO)
│   │   └── NotFound.tsx        # 404 Seite
│   ├── data/
│   │   └── articles.ts         # Blog-Artikel Daten + Inhalte
│   ├── hooks/
│   │   ├── use-cookie-consent.ts # Cookie-Consent Hook
│   │   └── use-toast.ts        # Toast Hook
│   ├── lib/
│   │   └── utils.ts            # cn() Utility
│   ├── App.tsx                 # Root mit Providern + ErrorBoundary
│   ├── main.tsx                # Entry Point
│   ├── index.css               # Tailwind + Custom CSS
│   └── vite-env.d.ts
├── index.html                  # HTML mit SEO Meta + JSON-LD Schemas
├── vite.config.ts              # Vite Konfiguration
├── tailwind.config.ts          # Tailwind Konfiguration
├── tsconfig.json               # TypeScript Config
├── package.json                # Dependencies
└── .gitignore
```

---

## 6. ROUTING

```
/                    → Index.tsx (Startseite)
/recruiting          → Recruiting.tsx
/marketing           → Marketing.tsx
/webdesign           → Webdesign.tsx
/blog                → Blog.tsx (Uebersicht, Filter nach Kategorie)
/blog/:slug          → BlogArticle.tsx (6 Artikel vorhanden)
/impressum           → Impressum.tsx
/datenschutz         → Datenschutz.tsx
*                    → NotFound.tsx (404)
```

Alle Seiten ausser Index werden lazy-loaded via `React.lazy()`.
Auf der Index-Seite werden 12 Below-Fold-Komponenten lazy-loaded (Solution bis CTA).

---

## 7. SEO-SETUP

### JSON-LD Schemas (index.html)
- **ProfessionalService** - Firma mit Adresse, Rating, Angebotskatalog
- **FAQPage** - 3 FAQ-Eintraege
- **Organization** - Gruender, Social Links, knowsAbout
- **WebSite** - Name + URL

### Per-Page SEO (react-helmet-async)
Jede Seite hat:
- `<title>` Tag
- `<meta name="description">`
- `<link rel="canonical">`
- Open Graph Tags (og:title, og:description, og:url, og:image)
- Twitter Card Tags
- JSON-LD BreadcrumbList Schema
- JSON-LD Service/Article Schema (je nach Seitentyp)

### Technisches SEO
- robots.txt erlaubt alles, verweist auf sitemap.xml
- sitemap.xml mit allen 7 Hauptseiten
- Alle CTA-Buttons sind echte `<a>`-Links (crawlbar)
- `rel="nofollow"` auf allen externen Links (WhatsApp, LinkedIn, Instagram, Calendly)
- Non-render-blocking Google Fonts
- content-visibility: auto fuer Below-Fold Sections
- DNS Prefetch fuer wa.me, calendly.com, linkedin.com, instagram.com

---

## 8. PERFORMANCE-OPTIMIERUNGEN

### Bundle Splitting
```
index.js          ~183KB (62KB gzip) - Hauptbundle
vendor-react.js   ~142KB (46KB gzip) - React + ReactDOM
vendor-motion.js  ~132KB (44KB gzip) - Framer Motion
vendor-icons.js    ~26KB (6KB gzip)  - Lucide Icons
vendor-query.js    ~28KB (9KB gzip)  - TanStack Query
vendor-router.js   ~21KB (8KB gzip)  - React Router
vendor-helmet.js   ~14KB (6KB gzip)  - Helmet
+ ~15 lazy-loaded Page/Component Chunks (je 2-15KB)
```

### Bild-Optimierung
- Alle Kundenlogos: WebP oder SVG
- Alle Tool-Logos: WebP oder SVG (9 ICOs zuletzt konvertiert)
- Case-Study-Bilder: WebP
- Alle Bilder: `width`/`height` Attribute (CLS-Praevention)
- `loading="lazy"` + `decoding="async"` auf Below-Fold Bildern
- Assets unter 8KB werden als Base64 inline

### Kompression
- Gzip Pre-Compression (threshold 1024B)
- Brotli Pre-Compression (threshold 1024B)

---

## 9. COMMIT-HISTORIE

```
0cb59c9  ICO→WebP, hardcoded Farben→Theme, Cookie-Consent Hook, Accessibility
3dbaef2  Blog-Artikel-Detailseiten und Newsletter-Formular
60d44fe  Impressum & Datenschutz: Echte Kontaktdaten eingetragen
4602c66  Cleanup & UX: 34 Pakete entfernt, Blog-Filter, Error Boundary, Cross-Links
132576d  SEO, Performance & Code-Cleanup: Bundle -69%, 42 UI-Komponenten entfernt
8e81b54  Initial commit: Pirro Consulting website (clean, without Lovable)
```

---

## 10. WAS WURDE GEMACHT (CHRONOLOGISCH)

### Session 1 (vor diesem Dokument) - Initial Setup
- Komplette Website von Grund auf gebaut (React + TS + Vite + Tailwind)
- Alle Komponenten erstellt (32 Stueck)
- Alle Seiten erstellt (Index, Recruiting, Marketing, Webdesign, Blog, Impressum, Datenschutz, 404)
- Design System mit CSS Variables
- Framer Motion Animationen
- Responsive Design (Mobile-First)
- Cookie Consent Banner
- WhatsApp Widget
- Social Proof Popups
- Loading Screen
- Custom Cursor Effect
- Scroll Progress Bar
- Back to Top Button

### Session 2 - SEO & Performance Cleanup (`132576d`)
- Alle CTA-Buttons von `<Button>` zu echten `<a>`-Links umgebaut (crawlbar fuer Google)
- `rel="nofollow"` auf alle externen Links
- Blog-Artikel in `<Link>` gewrappt
- BreadcrumbList JSON-LD auf allen Subpages
- Image `width`/`height` Attribute ueberall
- ScrollToTop bei Route-Wechsel (PageTransition.tsx)
- DNS Prefetch Hints in index.html
- `aria-expanded` auf Navbar Dropdown
- App.css geloescht (unused)
- 3 externe CDN-Logos lokal gehostet (HubSpot, Zapier, Notion)
- 3 grosse ICO-Logos durch SVGs ersetzt (brevo, trello, slack)
- InlineCTA Buttons zu `<a>`-Links
- **12 Homepage-Komponenten lazy-loaded** (Bundle: 605KB → 186KB)
- **42 ungenutzte shadcn UI-Komponenten geloescht** (49 → 6)
- Build: 186KB main, 62KB gzip

### Session 3 - Cleanup & Features (`4602c66`)
- Blog-Kategorie-Filter funktional (useState + onClick)
- **34 ungenutzte npm-Pakete entfernt** (23 @radix-ui, next-themes, recharts, zod, etc.)
- Hardcoded Farben → Theme-Variablen (Integrations, CaseStudies)
- Error Boundary um gesamte App
- Cross-Links zwischen Service-Seiten (Recruiting ↔ Marketing ↔ Webdesign)
- 3 Client-Logos PNG → WebP (TrustedBy)
- NotFound: console.error + Button-Import entfernt
- LinkedIn-URL vereinheitlicht
- Sonner: next-themes Abhaengigkeit entfernt

### Session 3 - Impressum & Datenschutz (`60d44fe`)
- Adresse eingetragen: Trippstadter Str. 110, 67663 Kaiserslautern
- E-Mail: info@pirroconsulting.de
- USt-IdNr.: DE353674802
- JSON-LD Schema mit vollstaendiger Adresse

### Session 3 - Blog-Artikel (`3dbaef2`)
- 6 vollstaendige Blog-Artikel mit echten Inhalten (src/data/articles.ts)
- BlogArticle.tsx: Header, Content, CTA-Box, Prev/Next Navigation
- Route /blog/:slug registriert
- Article + BreadcrumbList JSON-LD
- Newsletter-Form mit Validierung und Toast-Feedback

### Session 3 - Final Cleanup (`0cb59c9`)
- 9 ICO-Logos → WebP konvertiert (15KB→~1KB pro Logo)
- Hardcoded Farben ueberall durch Theme-Variablen ersetzt:
  - Testimonials: amber→highlight, emerald→primary
  - Problem: red→destructive
  - Hero/ROICalculator: green→highlight
  - Navbar: gray-900→foreground
  - SocialProofPopup: green→primary
  - Integrations: blue/emerald→highlight
- Cookie-Consent: useCookieConsent Hook
- CookieConsent-Banner: Button-Import durch native Elemente ersetzt
- ROICalculator: aria-label auf Range-Inputs

---

## 11. OFFENE PUNKTE / TODOS

### KRITISCH - Sofort machen
1. **Telefonnummer ersetzen** - `4915XXX` Platzhalter in 4 Dateien (7 Stellen):
   - `src/components/WhatsAppWidget.tsx` (Zeile 22)
   - `src/components/CTA.tsx` (Zeile 113)
   - `src/components/Navbar.tsx` (Zeilen 194, 207, 366, 375)
   - `src/components/FAQ.tsx` (Zeile 109)
   - **Noah muss die echte Nummer mitteilen**

2. **Hosting / Deployment einrichten**
   - Domain pirro-consulting.de muss auf Hosting zeigen
   - Empfehlung: Vercel oder Netlify (kostenlos fuer statische Sites)
   - `vercel.json` oder `netlify.toml` erstellen mit SPA-Rewrites
   - SSL automatisch ueber Hosting-Provider

### SHOULD FIX
3. **Alte ICO/PNG-Dateien aus Repo loeschen** - Werden nicht mehr importiert, belegen aber Platz
4. **Sitemap um Blog-Artikel-URLs erweitern** - /blog/:slug fehlt in sitemap.xml
5. **TrustBadges/DigitalTeam hardcoded Farben** - Noch einige blue-/emerald-/purple-Klassen (bewusst unterschiedliche Farben fuer visuellen Kontrast, aber koennten theme-konformer sein)
6. **Cookie Consent Enforcement erweitern** - Hook existiert, aber es gibt aktuell keine Analytics-Scripts die geblockt werden muessen. Wenn Google Analytics o.ae. kommt, muss der Hook erweitert werden
7. **Newsletter Backend** - Formular zeigt Toast, sendet aber nichts. Backend-Integration noetig (z.B. Brevo, Mailchimp)

### NICE TO HAVE
8. **Blog Pagination** - Bei mehr als 6 Artikeln noetig
9. **Echte Testimonial-Avatare** - Aktuell Initialen-Kreise
10. **Service-Seiten Pricing** - Preissektionen fehlen
11. **Kontaktformular** - Aktuell nur Calendly-Link, kein eigenes Formular
12. **Analytics einbinden** - Google Analytics / Plausible (Cookie Consent beachten)
13. **Performance Monitoring** - Lighthouse CI, Web Vitals Tracking

---

## 12. BEKANNTE ARCHITEKTUR-ENTSCHEIDUNGEN

1. **Kein Dark Mode** - `.dark` CSS existiert in index.css, wird aber nicht aktiviert. Alle dark:-Varianten wurden entfernt.
2. **Kein Backend** - Rein statische Site, keine API-Calls. Newsletter-Form und Kontakt nur ueber Calendly/WhatsApp.
3. **@tanstack/react-query installiert aber unused** - War fuer zukuenftige API-Integration gedacht. Kann entfernt werden wenn kein Backend kommt.
4. **Blog-Artikel als statische Daten** - Alle Inhalte in `src/data/articles.ts`. Kein CMS, kein Markdown. Fuer mehr Artikel waere ein CMS (Sanity, Contentful) sinnvoll.
5. **Calendly als einziger Buchungsweg** - Alle CTAs linken auf calendly.com/pirroconsulting.
6. **WhatsApp als Support-Kanal** - Widget unten rechts + Links in Navbar/CTA/FAQ.
7. **Lazy Loading aggressiv** - 12 Homepage-Sektionen + alle Subpages lazy-loaded fuer minimale Initial Load Zeit.
8. **Keine Tests** - Kein Testing-Framework installiert. Fuer Goldstandard sollten zumindest E2E-Tests (Playwright) hinzugefuegt werden.

---

## 13. WICHTIGE DATEIPFADE FUER HAEUFIGE AENDERUNGEN

| Was | Datei |
|-----|-------|
| Routen hinzufuegen | `src/components/AnimatedRoutes.tsx` |
| Homepage Sektionsreihenfolge | `src/pages/Index.tsx` |
| Navigation Links | `src/components/Navbar.tsx` |
| Footer Links | `src/components/Footer.tsx` |
| Blog-Artikel hinzufuegen | `src/data/articles.ts` |
| Farben aendern | `src/index.css` (:root CSS Variables) |
| Fonts aendern | `tailwind.config.ts` + `index.html` |
| SEO Meta (global) | `index.html` |
| SEO Meta (pro Seite) | Jeweilige Page in `src/pages/` |
| Build-Konfiguration | `vite.config.ts` |
| Impressum-Daten | `src/pages/Impressum.tsx` |
| Datenschutz-Text | `src/pages/Datenschutz.tsx` |
| Cookie Banner | `src/components/CookieConsent.tsx` |

---

## 14. ENTWICKLUNGS-BEFEHLE

```bash
# In den Projektordner wechseln
cd /Users/noahpirro/pirro-consulting-clean

# Dev-Server starten (Port 8080)
npm run dev

# Production Build erstellen
npm run build

# Build lokal testen
npm run preview

# Linting
npm run lint

# Git Status
git status
git log --oneline
```

---

*Dieses Dokument wird bei jeder groesseren Session aktualisiert. Es dient als Grundlage fuer die Weiterarbeit in neuen Chat-Sessions.*
