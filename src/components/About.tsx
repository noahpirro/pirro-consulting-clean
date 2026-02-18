import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";
import { User, Quote, Play, Linkedin } from "lucide-react";

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

                {/* Placeholder Content - Replace with actual photo */}
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

                {/* Video Play Button Overlay */}
                <motion.div
                  className="absolute bottom-6 right-6 w-14 h-14 bg-highlight rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </motion.div>
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
                Noah Pirro – Gründer von Pirro Consulting
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

            {/* Credentials */}
            <AnimatedSection delay={0.25}>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="bg-background border border-border rounded-xl p-4 text-center">
                  <p className="text-2xl font-display font-bold">10+</p>
                  <p className="text-xs text-muted-foreground">Unternehmen betreut</p>
                </div>
                <div className="bg-background border border-border rounded-xl p-4 text-center">
                  <p className="text-2xl font-display font-bold">100+</p>
                  <p className="text-xs text-muted-foreground">Automationen gebaut</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Marketing", "Recruiting", "Automatisierung", "KI", "CRM", "Prozessoptimierung"].map((tag, index) => (
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

            {/* Social Links */}
            <AnimatedSection delay={0.35}>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/noahpirro"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
