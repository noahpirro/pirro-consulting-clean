import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  /** Animation type: "chars" for character-by-character, "words" for word-by-word */
  type?: "chars" | "words";
  /** Stagger delay between each element */
  stagger?: number;
}

export const SplitText = ({
  text,
  className = "",
  delay = 0,
  type = "chars",
  stagger = 0.03,
}: SplitTextProps) => {
  if (type === "words") {
    const words = text.split(" ");
    return (
      <motion.span
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", rotateX: -80 },
                visible: {
                  y: 0,
                  rotateX: 0,
                  transition: {
                    duration: 0.6,
                    delay: delay + i * stagger * 3,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </motion.span>
    );
  }

  const chars = text.split("");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
              rotateX: -90,
              filter: "blur(4px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.4,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
