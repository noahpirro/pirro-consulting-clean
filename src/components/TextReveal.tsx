import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  /** If true, highlight words wrapped in * (e.g. "*Wachstum*") */
  highlight?: boolean;
}

export const TextReveal = ({
  text,
  className = "",
  delay = 0,
  highlight = false,
}: TextRevealProps) => {
  const words = text.split(" ");

  return (
    <motion.span
      className={`inline ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {words.map((word, i) => {
        const isHighlighted = highlight && word.startsWith("*") && word.endsWith("*");
        const cleanWord = isHighlighted ? word.slice(1, -1) : word;

        return (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className={`inline-block ${isHighlighted ? "text-highlight" : ""}`}
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: delay + i * 0.04,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
            >
              {cleanWord}
            </motion.span>
            {i < words.length - 1 && "\u00A0"}
          </span>
        );
      })}
    </motion.span>
  );
};
