import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

const faqs = [
  {
    question: "Für wen ist Pirro Consulting geeignet?",
    answer: "Für Unternehmer, Agenturen, Coaches und Dienstleister, die das Gefühl haben, dass ihr operativer Aufwand nicht mit ihrem Umsatz skalieren sollte. Wenn du merkst, dass manuelle Prozesse dich ausbremsen, bist du hier richtig.",
  },
  {
    question: "Was kostet eine Zusammenarbeit?",
    answer: "Das hängt vom Umfang ab. In der kostenlosen Potenzialanalyse klären wir, was du brauchst und welche Investition sinnvoll ist. Wir legen Wert darauf, dass sich die Zusammenarbeit für dich schnell amortisiert.",
  },
  {
    question: "Wie viel Zeit muss ich investieren?",
    answer: "Minimal. Nach einem initialen Kick-off-Gespräch arbeiten wir im Hintergrund. Gelegentlich stellen wir Rückfragen per Chat oder kurzen Calls. Dein Tagesgeschäft wird dadurch nicht beeinträchtigt.",
  },
  {
    question: "Mit welchen Tools arbeitet ihr?",
    answer: "Wir sind nicht an bestimmte Anbieter gebunden. Je nach Anforderung setzen wir Tools wie Make, Zapier, n8n, Monday, ClickUp, Airtable, HubSpot oder andere ein. Entscheidend ist, was für dich am besten funktioniert.",
  },
  {
    question: "Kann ich auch einzelne Projekte beauftragen?",
    answer: "Ja. Ob ein einzelner Prozess automatisiert werden soll oder ein komplettes System aufgebaut wird – wir passen uns deinen Bedürfnissen an.",
  },
  {
    question: "Was passiert nach der Umsetzung?",
    answer: "Du und dein Team seid vollständig geschult und eigenständig arbeitsfähig. Auf Wunsch bieten wir auch eine fortlaufende Betreuung an, falls du das möchtest.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Häufig gestellte Fragen
          </h2>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 data-[state=open]:border-foreground/20 transition-colors duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-display font-bold hover:no-underline py-6 group">
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};
