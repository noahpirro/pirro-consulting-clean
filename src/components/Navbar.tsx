import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.webp";
import { CALENDLY_URL, WHATSAPP_URL, PHONE } from "@/constants";

const serviceLinks = [
  { label: "Recruiting", href: "/recruiting" },
  { label: "Marketing", href: "/marketing" },
  { label: "Webdesign", href: "/webdesign" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileSubRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const pathname = location.pathname;

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const linkClass = (active: boolean) =>
    `transition-colors font-medium ${
      active
        ? scrolled ? "text-foreground" : "text-white"
        : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
    }`;

  const isActive = (href: string) => {
    if (href.startsWith("/")) return pathname === href;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      style={{
        transform: mounted ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.6s ease-out, background-color 0.5s, border-color 0.5s, box-shadow 0.5s",
      }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm focus:font-medium"
      >
        Zum Inhalt springen
      </a>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center" aria-current={pathname === "/" ? "page" : undefined}>
            <img
              src={logo}
              alt="Pirro Consulting"
              width={120}
              height={32}
              className={`h-8 w-auto transition-all duration-300 hover:scale-105 ${!scrolled ? "brightness-0 invert" : ""}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                aria-expanded={isServicesOpen}
                aria-label="Leistungen Menü öffnen"
                className={`flex items-center gap-1 transition-colors font-medium ${
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Leistungen
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-200"
                  style={{ transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              <div
                className="absolute top-full left-0 mt-2 w-48 py-2 bg-background border border-border rounded-lg shadow-xl z-50 transition-all duration-200"
                style={{
                  opacity: isServicesOpen ? 1 : 0,
                  transform: isServicesOpen ? "translateY(0)" : "translateY(-10px)",
                  pointerEvents: isServicesOpen ? "auto" : "none",
                }}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    aria-current={isActive(link.href) ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {isHomePage ? (
              <>
                <button onClick={() => scrollToSection("about")} className={linkClass(false)}>
                  Über mich
                </button>
                <Link to="/blog" className={linkClass(isActive("/blog"))} aria-current={isActive("/blog") ? "page" : undefined}>
                  Blog
                </Link>
                <Link to="/kontakt" className={linkClass(isActive("/kontakt"))} aria-current={isActive("/kontakt") ? "page" : undefined}>
                  Kontakt
                </Link>
                <button onClick={() => scrollToSection("faq")} className={linkClass(false)}>
                  FAQ
                </button>
              </>
            ) : (
              <>
                <Link to="/#about" className={linkClass(false)}>Über mich</Link>
                <Link to="/blog" className={linkClass(isActive("/blog"))} aria-current={isActive("/blog") ? "page" : undefined}>
                  Blog
                </Link>
                <Link to="/kontakt" className={linkClass(isActive("/kontakt"))} aria-current={isActive("/kontakt") ? "page" : undefined}>
                  Kontakt
                </Link>
                <Link to="/#faq" className={linkClass(false)}>FAQ</Link>
              </>
            )}
          </div>

          {/* Desktop Contact & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden lg:inline">WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE}`}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Anrufen</span>
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-background text-foreground hover:bg-background/90"
              }`}
            >
              Potenzialanalyse sichern
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 active:scale-95 ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isOpen ? `${mobileMenuRef.current?.scrollHeight ?? 600}px` : "0px",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-2">
              {/* Mobile Services Submenu */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  aria-expanded={isServicesOpen}
                  aria-label="Leistungen Menü öffnen"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Leistungen
                  <ChevronDown
                    className="w-4 h-4 transition-transform duration-200"
                    style={{ transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <div
                  ref={mobileSubRef}
                  className="overflow-hidden transition-all duration-200 ease-in-out"
                  style={{
                    maxHeight: isServicesOpen ? `${mobileSubRef.current?.scrollHeight ?? 200}px` : "0px",
                    opacity: isServicesOpen ? 1 : 0,
                  }}
                >
                  <div className="pl-4 space-y-1">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                        aria-current={isActive(link.href) ? "page" : undefined}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  >
                    Über mich
                  </button>
                  <Link to="/blog" className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2" aria-current={isActive("/blog") ? "page" : undefined} onClick={() => setIsOpen(false)}>
                    Blog
                  </Link>
                  <Link to="/kontakt" className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2" aria-current={isActive("/kontakt") ? "page" : undefined} onClick={() => setIsOpen(false)}>
                    Kontakt
                  </Link>
                  <button
                    onClick={() => scrollToSection("faq")}
                    className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  >
                    FAQ
                  </button>
                </>
              ) : (
                <>
                  <Link to="/#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2" onClick={() => setIsOpen(false)}>
                    Über mich
                  </Link>
                  <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2" aria-current={isActive("/blog") ? "page" : undefined} onClick={() => setIsOpen(false)}>
                    Blog
                  </Link>
                  <Link to="/kontakt" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2" aria-current={isActive("/kontakt") ? "page" : undefined} onClick={() => setIsOpen(false)}>
                    Kontakt
                  </Link>
                  <Link to="/#faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2" onClick={() => setIsOpen(false)}>
                    FAQ
                  </Link>
                </>
              )}

              <div className="flex items-center gap-4 mt-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  <Phone className="w-5 h-5" />
                  Anrufen
                </a>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2 px-4 py-2 rounded-md text-sm font-medium"
              >
                Potenzialanalyse sichern
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
