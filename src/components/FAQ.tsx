import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useInView } from "@/hooks/useInView";
import { AnimatedSection } from "./AnimatedSection";
import { TextReveal } from "./TextReveal";
import { HelpCircle, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants";

const faqs = [
  {
    question: "Für wen ist Pirro Consulting geeignet?",
    answer: "Für Unternehmer, Agenturen, Coaches und Dienstleister, die das Gefühl haben, dass ihr operativer Aufwand nicht mit ihrem Umsatz skalieren sollte. Wenn du merkst, dass manuelle Prozesse dich ausbremsen, bist du hier richtig.",
    category: "Allgemein",
  },
  {
    question: "Was kostet eine Zusammenarbeit?",
    answer: "Das hängt vom Umfang ab. In der kostenlosen Potenzialanalyse klären wir, was du brauchst und welche Investition sinnvoll ist. Wir legen Wert darauf, dass sich die Zusammenarbeit für dich schnell amortisiert.",
    category: "Kosten",
  },
  {
    question: "Wie viel Zeit muss ich investieren?",
    answer: "Minimal. Nach einem initialen Kick-off-Gespräch arbeiten wir im Hintergrund. Gelegentlich stellen wir Rückfragen per Chat oder kurzen Calls. Dein Tagesgeschäft wird dadurch nicht beeinträchtigt.",
    category: "Ablauf",
  },
  {
    question: "Mit welchen Tools arbeitet ihr?",
    answer: "Wir sind nicht an bestimmte Anbieter gebunden. Je nach Anforderung setzen wir Tools wie Make, Zapier, n8n, Monday, ClickUp, Airtable, HubSpot oder andere ein. Entscheidend ist, was für dich am besten funktioniert.",
    category: "Tools",
  },
  {
    question: "Kann ich auch einzelne Projekte beauftragen?",
    answer: "Ja. Ob ein einzelner Prozess automatisiert werden soll oder ein komplettes System aufgebaut wird – wir passen uns deinen Bedürfnissen an.",
    category: "Ablauf",
  },
  {
    question: "Was passiert nach der Umsetzung?",
    answer: "Du und dein Team seid vollständig geschult und eigenständig arbeitsfähig. Auf Wunsch bieten wir auch eine fortlaufende Betreuung an, falls du das möchtest.",
    category: "Ablauf",
  },
  {
    question: "Wie schnell sehe ich Ergebnisse?",
    answer: "Erste Automatisierungen sind häufig innerhalb von 1-2 Wochen live. Komplexere Systeme brauchen 4-8 Wochen. Du wirst aber von Tag 1 an Fortschritte sehen und eingebunden sein.",
    category: "Ergebnisse",
  },
  {
    question: "Bietet ihr eine Garantie?",
    answer: "Ja. Wir garantieren dir messbare Ergebnisse innerhalb von 4 Wochen. Sollten wir dieses Versprechen nicht einhalten, arbeiten wir kostenlos weiter, bis das Ergebnis steht.",
    category: "Garantie",
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[number]; index: number }) => {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`,
      }}
    >
      <AccordionItem
        value={`item-${index}`}
        className="border border-border rounded-xl px-6 bg-background data-[state=open]:border-foreground/20 data-[state=open]:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <AccordionTrigger className="text-left font-display font-bold hover:no-underline py-5 group">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-foreground/5 text-xs font-bold text-muted-foreground flex-shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              {faq.question}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground pb-6 pl-11 leading-relaxed text-[15px]">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    </div>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 text-sm font-medium text-muted-foreground mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <TextReveal text="Häufig gestellte Fragen" />
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Alles, was du wissen musst – bevor wir loslegen.
          </p>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </Accordion>
        </AnimatedSection>

        {/* Still have questions? */}
        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:scale-[1.03] transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
            Weitere Fragen? Schreib uns direkt per WhatsApp
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};
