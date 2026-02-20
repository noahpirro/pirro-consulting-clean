import { BarChart3, Megaphone, Target, TrendingUp, Crown, Clock, Award, BadgePercent, MessageSquare } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const Marketing = () => (
  <ServicePageLayout
    config={{
      seo: {
        title: "Marketing Automatisierung | Pirro Consulting",
        description: "Marketing-Prozesse automatisieren: Lead-Generierung, Content-Erstellung und Kampagnen-Management auf Autopilot.",
        slug: "marketing",
        ogImageAlt: "Pirro Consulting – Marketing-Automatisierung für Unternehmer",
        serviceType: "Marketing Automatisierung",
        breadcrumbName: "Marketing Automatisierung",
      },
      hero: {
        badge: "Marketing & Neukundengewinnung",
        titleLine1: "Mehr Kunden.",
        titleLine2: "Weniger Aufwand.",
        subtitle: "Wir entwickeln und betreuen deine Marketing-Kampagnen – von der Strategie bis zur Umsetzung.",
        ctaText: "Kostenlose Marketing-Analyse",
        benefits: ["Mehr qualifizierte Leads", "Messbare Ergebnisse", "Skalierbare Kampagnen"],
      },
      stats: {
        sectionBadge: "Warum Online Marketing?",
        sectionTitle: "Ergebnisse, die",
        sectionTitleHighlight: "überzeugen",
        sectionDescription:
          "Online Marketing ist der effektivste Weg, neue Kunden zu gewinnen. Mit datengetriebenen Strategien und automatisierten Prozessen erreichen wir deine Zielgruppe genau dort, wo sie sich aufhält – und verwandeln Interessenten in zahlende Kunden.",
        items: [
          { value: "8+", label: "Jahre Online Marketing Erfahrung" },
          { value: "1 Mio €", label: "Werbebudget verwaltet" },
          { value: "1.500+", label: "Kampagnen" },
        ],
      },
      services: {
        sectionTitle: "Unsere Marketing-Leistungen",
        items: [
          {
            icon: Target,
            title: "Performance Marketing",
            description: "Datengetriebene Werbekampagnen auf Meta, Google & LinkedIn. Wir optimieren kontinuierlich für maximalen ROI.",
          },
          {
            icon: Megaphone,
            title: "Social Media Marketing",
            description: "Strategische Präsenz auf den relevanten Plattformen. Content, der Aufmerksamkeit erregt und Vertrauen aufbaut.",
          },
          {
            icon: TrendingUp,
            title: "Lead-Generierung",
            description: "Systematische Neukundengewinnung durch optimierte Funnels und automatisierte Follow-up-Prozesse.",
          },
          {
            icon: BarChart3,
            title: "Marketing Automatisierung",
            description: "E-Mail-Sequenzen, Retargeting und CRM-Integration. Dein Marketing läuft auch, wenn du schläfst.",
          },
        ],
      },
      advantages: {
        items: [
          {
            icon: BadgePercent,
            title: "Kosteneffizient",
            description: "Wir sind im Durchschnitt 40-60% günstiger als klassische Agenturen. Dazu optimieren wir deine Werbebudgets kontinuierlich für maximalen ROI.",
          },
          {
            icon: MessageSquare,
            title: "Transparenz",
            description: "Wöchentliche Reports und offene Kommunikation. Du weißt immer, wie deine Kampagnen performen und wohin dein Budget fließt.",
          },
          {
            icon: Crown,
            title: "Maßgeschneidert",
            description: "Keine Standardlösungen von der Stange. Jede Strategie wird individuell auf dein Unternehmen, deine Zielgruppe und deine Ziele zugeschnitten.",
          },
          {
            icon: Clock,
            title: "Zeitersparnis",
            description: "Wir übernehmen die komplette Marketing-Strategie – von der Planung über die Umsetzung bis zur Optimierung. Du kannst dich auf dein Kerngeschäft konzentrieren.",
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
            description: "Um unseren Kunden die bestmöglichen Ergebnisse zu liefern, betreuen wir nicht mehrere Kunden in ähnlichen Branchen. So vermeiden wir Interessenkonflikte und sichern dir exklusive Strategien.",
          },
          {
            icon: Clock,
            title: "Keine bestimmten Arbeitszeiten",
            description: "Wir haben keine festen Arbeitszeiten. Die Marketing-Welt schläft nie – und wir sind bereit, an Feiertagen und Wochenenden alles für die bestmöglichen Ergebnisse zu tun.",
          },
          {
            icon: TrendingUp,
            title: "Verbesserungsbesessen",
            description: "Wir sind nie zufrieden mit dem Status Quo. Kontinuierliche Optimierung und A/B-Testing unserer Kampagnen ist unser Antrieb – für immer bessere Ergebnisse.",
          },
        ],
      },
      experience: {
        title: "Jahrelange Erfahrung,",
        titleHighlight: "messbare Erfolge",
        description:
          "Mit über 8 Jahren Erfahrung im Online Marketing und mehr als 1.500 betreuten Kampagnen wissen wir genau, was funktioniert – und was nicht. Jede Strategie basiert auf echten Daten und bewährten Methoden.",
        ctaText: "Kostenloses Erstgespräch vereinbaren",
        ctaSubtext: "Kostenlos und unverbindlich – um festzustellen, ob wir der richtige Partner für dein Marketing sind.",
      },
      cta: {
        title: "Bereit für mehr Neukunden?",
        subtitle: "Lass uns gemeinsam herausfinden, wie wir dein Marketing auf das nächste Level bringen können.",
      },
      otherServices: [
        {
          title: "Recruiting & Mitarbeitergewinnung",
          description: "Social Recruiting und Active Sourcing – qualifizierte Bewerber in kürzester Zeit.",
          href: "/recruiting",
        },
        {
          title: "Webdesign & Entwicklung",
          description: "Conversion-optimierte Websites und Landing Pages, die Besucher zu Kunden machen.",
          href: "/webdesign",
        },
      ],
    }}
  />
);

export default Marketing;
