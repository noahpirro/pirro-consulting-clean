import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface InlineCTAProps {
  headline: string;
  buttonText: string;
  variant?: "light" | "dark";
}

export const InlineCTA = ({
  headline,
  buttonText,
  variant = "light",
}: InlineCTAProps) => {
  const isLight = variant === "light";

  return (
    <section
      className={`py-12 md:py-16 ${
        isLight ? "bg-secondary text-foreground" : "bg-foreground text-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="text-xl md:text-2xl font-display font-bold text-center md:text-left">
            {headline}
          </h3>

          <motion.a
            href="https://calendly.com/pirroconsulting"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center h-12 px-6 text-base font-medium rounded-md group ${
              isLight
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-background text-foreground hover:bg-background/90"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <motion.p
          className={`text-sm text-center mt-4 ${
            isLight ? "text-muted-foreground" : "text-background/50"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          100% kostenlos &bull; Unverbindlich
        </motion.p>
      </div>
    </section>
  );
};
