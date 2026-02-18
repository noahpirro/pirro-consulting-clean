import { motion } from "framer-motion";

// Client logos
import healthInnovationHub from "@/assets/clients/health-innovation-hub.png";
import schneehoehen from "@/assets/clients/schneehoehen.svg";
import alpenguide from "@/assets/clients/alpenguide.svg";
import omlor from "@/assets/clients/omlor.png";
import cantinaMexicana from "@/assets/clients/cantina-mexicana.webp";
import autoDoerr from "@/assets/clients/auto-doerr.svg";
import cocktailsAtHome from "@/assets/clients/cocktails-at-home.webp";
import sandAusVelsen from "@/assets/clients/sand-aus-velsen.png";
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
  // Duplicate clients for seamless loop
  const allClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-12 bg-background border-b border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.p 
          className="text-center text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vertraut von führenden Unternehmen
        </motion.p>
      </div>

      {/* Logo Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div 
          className="flex gap-20 items-center"
          animate={{ x: [0, -800] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
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
        </motion.div>
      </div>
    </section>
  );
};
