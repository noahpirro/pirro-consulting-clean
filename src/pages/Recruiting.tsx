import { Users, Target, Zap, UserCheck, Crown, Clock, TrendingUp, Award, BadgePercent, MessageSquare } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const Recruiting = () => (
  <ServicePageLayout
    config={{
      seo: {
        title: "Recruiting & Mitarbeitergewinnung | Pirro Consulting",
        description: "Social Recruiting, Active Sourcing und automatisierte Bewerbungsprozesse für Unternehmer. Qualifizierte Bewerber in wenigen Wochen.",
        slug: "recruiting",
        ogImageAlt: "Pirro Consulting – Recruiting-Automatisierung für Unternehmer",
        serviceType: "Social Media Recruiting",
        breadcrumbName: "Recruiting & Mitarbeitergewinnung",
      },
      hero: {
        badge: "Recruiting & Personalgewinnung",
        titleLine1: "Personalmangel?",
        titleLine2: "Kein Problem.",
        subtitle:
          "Laut Experten fehlen in Deutschland eine halbe Million Fachkräfte mit der Tendenz der Verschlechterung. Wir fokussieren uns auf Bewerbungen und Einstellungen unserer Kunden anhand Social Media Marketing.",
        ctaText: "Kostenloses Erstgespräch sichern",
        benefits: ["Qualifizierte Bewerber in kürzester Zeit", "Reduktion der Time-to-Hire um bis zu 60%", "Employer Branding inklusive"],
      },
      stats: {
        sectionBadge: "Warum Social Media Recruiting?",
        sectionTitle: "Die Macht der",
        sectionTitleHighlight: "Sozialen Medien",
        sectionDescription:
          "Social Media Marketing ist über die letzten Jahre zu einer unglaublichen Macht gewachsen. Wir haben anhand der Sozialen Medien neue Chancen im Bereich Recruiting kennengelernt. Es ist jetzt viel günstiger, schneller und direkter, mehr potentielle Arbeitnehmer zu erreichen als zuvor.",
        items: [
          { value: "4+", label: "Jahre Recruiting Erfahrung" },
          { value: "200.000€", label: "Marketing Budget verwaltet" },
          { value: "5.000+", label: "Bewerbungen generiert" },
        ],
      },
      services: {
        sectionTitle: "Unsere Recruiting-Leistungen",
        items: [
          {
            icon: Target,
            title: "Social Recruiting",
            description: "Erreiche passive Kandidaten dort, wo sie sich aufhalten – auf Social Media. Wir entwickeln zielgruppenspezifische Kampagnen, die Aufmerksamkeit erregen.",
          },
          {
            icon: Users,
            title: "Active Sourcing",
            description: "Proaktive Direktansprache von Top-Talenten. Wir identifizieren und kontaktieren die besten Kandidaten für deine offenen Positionen.",
          },
          {
            icon: Zap,
            title: "Recruiting Automatisierung",
            description: "Automatisierte Bewerberprozesse, die Zeit sparen und die Candidate Experience verbessern. Von der Bewerbung bis zum Onboarding.",
          },
          {
            icon: UserCheck,
            title: "Employer Branding",
            description: "Positioniere dich als attraktiver Arbeitgeber. Wir entwickeln deine Arbeitgebermarke und machen sie sichtbar.",
          },
        ],
      },
      advantages: {
        items: [
          {
            icon: BadgePercent,
            title: "Preiswert",
            description: "Wir sind im Durchschnitt 60-80% günstiger im Schalten von Werbung als unsere Konkurrenz. Des Weiteren sparen wir dir im Vergleich 50-75% an Werbekosten ein.",
          },
          {
            icon: MessageSquare,
            title: "Kommunikation",
            description: "Trotz unserer Erfahrung wollen wir, dass du dich wohlfühlst und mit uns sprechen kannst. Permanentes Feedback mit unseren Kunden bringt uns den konstanten Erfolg.",
          },
          {
            icon: Crown,
            title: "Kunde ist König",
            description: "Der Kunde ist bekanntlich König und ist bei uns nicht anders. Wir werden auf jede noch so kleine Frage von dir eingehen und dir alles im Detail erklären.",
          },
          {
            icon: Clock,
            title: "Zeitersparnis",
            description: "Wir nehmen dir die komplette Social Media Marketing Strategie im Thema Recruiting ab. Wir kommunizieren auch mit Facebook wöchentlich, um deine Kampagnen zu optimieren.",
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
            description: "Um unseren Kunden die preisgünstigste Werbung und schnellsten Einstellungen zu generieren, können wir nicht mehrere Kunden in ähnlichen Branchen haben.",
          },
          {
            icon: Clock,
            title: "Keine bestimmten Arbeitszeiten",
            description: "Wir haben keine Arbeitszeiten festgelegt. Grund dafür ist die ständig wechselnde Branche und unsere Bereitschaft an sowohl Feiertagen als auch Wochenenden alles für die bestmöglichen Ergebnisse zu tun.",
          },
          {
            icon: TrendingUp,
            title: "Verbesserungsbesessen",
            description: "Wir sind nie zufrieden mit dem Status Quo. Kontinuierliche Optimierung und Verbesserung unserer Strategien ist unser Antrieb.",
          },
        ],
      },
      experience: {
        title: "Jahrelange Erfahrung,",
        titleHighlight: "zahlreiche Erfolge",
        description:
          "Jahrelange Erfahrung im Bereich Social Media Marketing und zahlreiche Erfolge geben uns das Selbstbewusstsein, dass wir jedes Problem lösen können – mit kleinen aber auch großen Budgets.",
        ctaText: "Kostenloses Erstgespräch vereinbaren",
        ctaSubtext: "Kostenlos und unverbindlich – um festzustellen, ob du dich mit unseren Werten und Strategien identifizieren kannst.",
      },
      cta: {
        title: "Bereit, dein Team zu verstärken?",
        subtitle: "Lass uns gemeinsam herausfinden, wie wir dein Recruiting auf das nächste Level bringen können.",
      },
      otherServices: [
        {
          title: "Marketing & Neukundengewinnung",
          description: "Datengetriebene Kampagnen und automatisierte Lead-Generierung für nachhaltiges Wachstum.",
          href: "/marketing",
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

export default Recruiting;
