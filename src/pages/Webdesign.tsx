import { Layout, Smartphone, Search, Palette, Crown, Clock, TrendingUp, Award, BadgePercent, MessageSquare } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const Webdesign = () => (
  <ServicePageLayout
    config={{
      seo: {
        title: "Webdesign & Entwicklung | Pirro Consulting",
        description: "Professionelles Webdesign für Unternehmer. Conversion-optimierte Websites die Kunden gewinnen.",
        slug: "webdesign",
        ogImageAlt: "Pirro Consulting – Professionelles Webdesign für Unternehmer",
        serviceType: "Webdesign",
        breadcrumbName: "Webdesign & Entwicklung",
      },
      hero: {
        badge: "Webdesign & Entwicklung",
        titleLine1: "Websites, die",
        titleLine2: "verkaufen.",
        subtitle: "Wir gestalten und entwickeln Websites und Landing Pages, die nicht nur gut aussehen, sondern auch konvertieren.",
        ctaText: "Kostenloses Website-Audit",
        benefits: ["Conversion-optimiert", "Mobile-First Design", "SEO-Grundlagen inklusive"],
      },
      stats: {
        sectionBadge: "Warum professionelles Webdesign?",
        sectionTitle: "Der erste Eindruck",
        sectionTitleHighlight: "zählt",
        sectionDescription:
          "75% der Nutzer beurteilen die Glaubwürdigkeit eines Unternehmens anhand seiner Website. Eine professionelle, schnelle und conversion-optimierte Website ist heute kein Luxus mehr – sie ist die Grundlage für digitalen Erfolg.",
        items: [
          { value: "50+", label: "Websites & Landing Pages" },
          { value: "100%", label: "Responsive Design" },
          { value: "< 3s", label: "Durchschn. Ladezeit" },
        ],
      },
      services: {
        sectionTitle: "Unsere Webdesign-Leistungen",
        items: [
          {
            icon: Layout,
            title: "Landing Pages",
            description: "Hochkonvertierende Landing Pages für deine Kampagnen. Klar strukturiert, überzeugend getextet, auf Conversion optimiert.",
          },
          {
            icon: Palette,
            title: "Website-Design",
            description: "Moderne, professionelle Websites, die deine Marke repräsentieren und Besucher zu Kunden machen.",
          },
          {
            icon: Smartphone,
            title: "Responsive Design",
            description: "Perfekte Darstellung auf allen Geräten. Mobile-First-Ansatz für die beste User Experience.",
          },
          {
            icon: Search,
            title: "SEO-Optimierung",
            description: "Technische SEO-Grundlagen, schnelle Ladezeiten und saubere Struktur für bessere Rankings.",
          },
        ],
      },
      advantages: {
        items: [
          {
            icon: BadgePercent,
            title: "Fair & Transparent",
            description: "Festpreise ohne versteckte Kosten. Du weißt von Anfang an, was deine Website kostet – ohne böse Überraschungen am Ende.",
          },
          {
            icon: MessageSquare,
            title: "Enger Austausch",
            description: "Regelmäßige Abstimmungen und Zwischenpräsentationen. Dein Feedback fließt direkt in die Entwicklung ein.",
          },
          {
            icon: Crown,
            title: "Deine Vision",
            description: "Wir setzen deine Vorstellungen um, nicht unsere. Jede Website wird individuell nach deinen Wünschen und deiner Marke gestaltet.",
          },
          {
            icon: Clock,
            title: "Schnelle Lieferung",
            description: "Von der Konzeption bis zum Launch in wenigen Wochen. Effiziente Prozesse ohne Qualitätsverlust.",
          },
        ],
      },
      values: {
        description:
          "Wir legen sehr großen Wert auf unsere Werte aber auch die Werte unserer Kunden. Um eine ideale Zusammenarbeit zu garantieren, glauben wir, dass beide Seiten sich mit den Werten voneinander identifizieren müssen.",
        items: [
          {
            icon: Award,
            title: "Ein Kunde, pro Branche, pro Region",
            description: "Um unseren Kunden die bestmöglichen Ergebnisse zu liefern, betreuen wir nicht mehrere Kunden in ähnlichen Branchen. Deine Website wird einzigartig bleiben.",
          },
          {
            icon: Clock,
            title: "Keine bestimmten Arbeitszeiten",
            description: "Wir haben keine festen Arbeitszeiten. Wenn ein Launch ansteht oder eine Deadline drängt, sind wir da – auch am Wochenende.",
          },
          {
            icon: TrendingUp,
            title: "Verbesserungsbesessen",
            description: "Wir sind nie zufrieden mit dem Status Quo. Nach dem Launch optimieren wir weiter – für noch bessere Performance und Conversion-Raten.",
          },
        ],
      },
      experience: {
        title: "Über 50 Projekte,",
        titleHighlight: "zufriedene Kunden",
        description:
          "Von einfachen Landing Pages bis hin zu komplexen Webanwendungen – wir haben für jede Anforderung die richtige Lösung. Jedes Projekt wird mit der gleichen Sorgfalt und dem gleichen Qualitätsanspruch umgesetzt.",
        ctaText: "Kostenloses Erstgespräch vereinbaren",
        ctaSubtext: "Kostenlos und unverbindlich – erzähl uns von deinem Projekt.",
      },
      cta: {
        title: "Bereit für eine neue Website?",
        subtitle: "Lass uns gemeinsam herausfinden, wie wir deine Online-Präsenz auf das nächste Level bringen können.",
      },
      otherServices: [
        {
          title: "Recruiting & Mitarbeitergewinnung",
          description: "Social Recruiting und Active Sourcing – qualifizierte Bewerber in kürzester Zeit.",
          href: "/recruiting",
        },
        {
          title: "Marketing & Neukundengewinnung",
          description: "Datengetriebene Kampagnen und automatisierte Lead-Generierung für nachhaltiges Wachstum.",
          href: "/marketing",
        },
      ],
    }}
  />
);

export default Webdesign;
