import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { User, Quote } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <AnimatedSection direction="right">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Main Image Placeholder */}
              <div className="aspect-[4/5] bg-foreground rounded-2xl relative overflow-hidden">
                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-8 right-8 w-24 h-24 border border-background/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute bottom-12 left-12 w-16 h-16 bg-background/10 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center text-background">
                  <div className="text-center p-8">
                    <motion.div 
                      className="w-32 h-32 mx-auto mb-4 rounded-full bg-background/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <User className="w-16 h-16 text-background/40" />
                    </motion.div>
                    <p className="text-background/60 text-sm">Professionelles Portrait</p>
                  </div>
                </div>
              </div>

              {/* Floating Quote Card */}
              <motion.div 
                className="absolute -bottom-6 -right-6 lg:-right-12 bg-background border border-border rounded-2xl p-6 shadow-xl max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Quote className="w-8 h-8 text-foreground/20 mb-3" />
                <p className="text-sm text-muted-foreground italic">
                  "Ich empfehle nur, was ich selbst nutze und was nachweislich funktioniert."
                </p>
              </motion.div>
            </motion.div>
          </AnimatedSection>

          {/* Text Content */}
          <div className="space-y-6">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 bg-foreground/5 border border-foreground/10 px-4 py-2 rounded-full mb-4">
                <User className="w-4 h-4 text-foreground/60" />
                <span className="text-sm text-foreground/60">Über mich</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                Wer steckt hinter
                <br />
                Pirro Consulting?
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <p className="text-xl font-display font-medium">
                [Dein Name] – Gründer von Pirro Consulting
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Ich komme selbst aus dem operativen Geschäft. Als Unternehmer im Bereich Marketing und Recruiting kenne ich die täglichen Herausforderungen aus erster Hand: Zu viele Aufgaben, zu wenig Zeit, und das Gefühl, dem eigenen Wachstum hinterherzurennen.
                </p>
                <p>
                  Genau deshalb habe ich Pirro Consulting gegründet. Nicht als theoretischer Berater, sondern als jemand, der die gleichen Probleme gelöst hat – für sich selbst und für andere Unternehmer.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-4 pt-4">
                {["Marketing", "Recruiting", "Automatisierung", "KI"].map((tag, index) => (
                  <motion.span 
                    key={tag}
                    className="px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
