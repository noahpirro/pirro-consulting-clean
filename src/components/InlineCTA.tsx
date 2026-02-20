import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { CALENDLY_URL } from "@/constants";

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
  const [ref, inView] = useInView();

  return (
    <section
      className={`py-12 md:py-16 ${
        isLight ? "bg-secondary text-foreground" : "bg-foreground text-background"
      }`}
    >
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s cubic-bezier(0.25,0.1,0.25,1), transform 0.6s cubic-bezier(0.25,0.1,0.25,1)",
          }}
        >
          <h3 className="text-xl md:text-2xl font-display font-bold text-center md:text-left">
            {headline}
          </h3>

          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center h-12 px-6 text-base font-medium rounded-md group hover:scale-[1.03] active:scale-[0.98] transition-transform ${
              isLight
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-background text-foreground hover:bg-background/90"
            }`}
          >
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p
          className={`text-sm text-center mt-4 ${
            isLight ? "text-muted-foreground" : "text-background/50"
          }`}
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.5s ease 0.3s",
          }}
        >
          100% kostenlos &bull; Unverbindlich
        </p>
      </div>
    </section>
  );
};
