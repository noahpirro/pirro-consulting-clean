import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.webp";

const serviceLinks = [
  { label: "Automatisierung", href: "/#services" },
  { label: "Recruiting", href: "/recruiting" },
  { label: "Marketing", href: "/marketing" },
  { label: "Webdesign", href: "/webdesign" },
];

const legalLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Pirro Consulting" width={120} height={32} className="h-8 w-auto brightness-0 invert" loading="lazy" />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Automatisierung & Digitalisierung für Unternehmer. Weniger Chaos, mehr Wachstum.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/noahpirro"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/pirroconsulting"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Leistungen">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
              Leistungen
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Rechtliches">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
              Rechtliches
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mini CTA */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">
              Jetzt starten
            </h4>
            <p className="text-background/60 text-sm mb-4">
              Kostenlose Potenzialanalyse für dein Unternehmen.
            </p>
            <a
              href="https://calendly.com/pirroconsulting"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-background text-foreground rounded-lg text-sm font-medium hover:bg-background/90 hover:scale-[1.03] active:scale-[0.98] transition-all"
            >
              Erstgespräch buchen
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} Pirro Consulting. Alle Rechte vorbehalten.
          </p>
          <p className="text-sm text-background/40">
            Made with precision in Germany
          </p>
        </div>
      </div>
    </footer>
  );
};
