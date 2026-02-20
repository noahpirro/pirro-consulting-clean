import { useInView } from "@/hooks/useInView";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "chars" | "words";
  stagger?: number;
}

export const SplitText = ({
  text,
  className = "",
  delay = 0,
  type = "chars",
  stagger = 0.03,
}: SplitTextProps) => {
  const [ref, inView] = useInView<HTMLSpanElement>({ margin: "-60px" });

  if (type === "words") {
    const words = text.split(" ");
    return (
      <span ref={ref} className={className}>
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden">
            <span
              className="inline-block"
              style={{
                transform: inView ? "translateY(0)" : "translateY(110%)",
                transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + i * stagger * 3}s`,
              }}
            >
              {word}
            </span>
            {i < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </span>
    );
  }

  const chars = text.split("");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {chars.map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            whiteSpace: char === " " ? "pre" : undefined,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            filter: inView ? "blur(0px)" : "blur(4px)",
            transition: `opacity 0.4s cubic-bezier(0.16,1,0.3,1) ${delay + i * stagger}s, transform 0.4s cubic-bezier(0.16,1,0.3,1) ${delay + i * stagger}s, filter 0.4s cubic-bezier(0.16,1,0.3,1) ${delay + i * stagger}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};
