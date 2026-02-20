import { useInView } from "@/hooks/useInView";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlight?: boolean;
}

export const TextReveal = ({
  text,
  className = "",
  delay = 0,
  highlight = false,
}: TextRevealProps) => {
  const [ref, inView] = useInView<HTMLSpanElement>({ margin: "-80px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline ${className}`}>
      {words.map((word, i) => {
        const isHighlighted = highlight && word.startsWith("*") && word.endsWith("*");
        const cleanWord = isHighlighted ? word.slice(1, -1) : word;

        return (
          <span key={i} className="inline-block overflow-hidden">
            <span
              className={`inline-block ${isHighlighted ? "text-highlight" : ""}`}
              style={{
                transform: inView ? "translateY(0)" : "translateY(100%)",
                opacity: inView ? 1 : 0,
                transition: `transform 0.5s cubic-bezier(0.25,0.1,0.25,1) ${delay + i * 0.04}s, opacity 0.5s cubic-bezier(0.25,0.1,0.25,1) ${delay + i * 0.04}s`,
              }}
            >
              {cleanWord}
            </span>
            {i < words.length - 1 && "\u00A0"}
          </span>
        );
      })}
    </span>
  );
};
