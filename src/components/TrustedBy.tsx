import { useInView } from "@/hooks/useInView";

// Client logos
import healthInnovationHub from "@/assets/clients/health-innovation-hub.webp";
import schneehoehen from "@/assets/clients/schneehoehen.svg";
import alpenguide from "@/assets/clients/alpenguide.svg";
import omlor from "@/assets/clients/omlor.webp";
import cantinaMexicana from "@/assets/clients/cantina-mexicana.webp";
import autoDoerr from "@/assets/clients/auto-doerr.svg";
import cocktailsAtHome from "@/assets/clients/cocktails-at-home.webp";
import sandAusVelsen from "@/assets/clients/sand-aus-velsen.webp";
import aoLogo from "@/assets/clients/ao-logo.webp";
import bfdLogo from "@/assets/clients/bfd-logo.webp";

const clients = [
  { name: "Health + Innovation Hub", logo: healthInnovationHub, invert: false },
  { name: "Schneehöhen", logo: schneehoehen, invert: false },
  { name: "Alpenguide", logo: alpenguide, invert: false },
  { name: "Omlor", logo: omlor, invert: false },
  { name: "Cantina Mexicana", logo: cantinaMexicana, invert: false },
  { name: "Auto Dörr", logo: autoDoerr, invert: false },
  { name: "Cocktails@Home", logo: cocktailsAtHome, invert: false },
  { name: "Sand aus Velsen", logo: sandAusVelsen, invert: false },
  { name: "AO", logo: aoLogo, invert: false },
  { name: "BFD", logo: bfdLogo, invert: false },
];

export const TrustedBy = () => {
  const [ref, inView] = useInView();
  // Duplicate clients for seamless loop
  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 bg-background border-b border-border overflow-hidden">
      <style>{`
        @keyframes marquee-logos {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>

      <div className="container mx-auto px-4 mb-8">
        <p
          ref={ref}
          className="text-center text-sm text-muted-foreground"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          Vertraut von führenden Unternehmen
        </p>
      </div>

      {/* Logo Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div
          className="flex gap-20 items-center"
          style={{
            animation: "marquee-logos 20s linear infinite",
          }}
        >
          {allClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                width={160}
                height={48}
                loading="lazy"
                decoding="async"
                className={`h-full w-auto object-contain max-w-[160px] ${client.invert ? 'invert' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
