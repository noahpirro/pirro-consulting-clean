import { AnimatedSection } from "./AnimatedSection";

const tools = [
  { name: "Make", color: "#6d3aef" },
  { name: "n8n", color: "#ea4b71" },
  { name: "HubSpot", color: "#ff7a59" },
  { name: "Airtable", color: "#18bfff" },
  { name: "Zapier", color: "#ff4a00" },
  { name: "Calendly", color: "#006bff" },
  { name: "Slack", color: "#4a154b" },
  { name: "Notion", color: "#787774" },
];

export const ToolsLogos = () => {
  return (
    <section className="py-16 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-medium">
            Wir arbeiten mit den besten Tools
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex items-center gap-2.5 px-5 py-3 rounded-xl bg-background border border-border hover:border-foreground/20 hover:shadow-sm transition-all"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                style={{ backgroundColor: tool.color }}
              >
                {tool.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8">
          <p className="text-xs text-muted-foreground/60">
            + über 100 weitere Integrationen
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
