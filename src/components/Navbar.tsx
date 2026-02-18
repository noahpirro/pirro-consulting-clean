import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.webp";

const serviceLinks = [
  { label: "Recruiting", href: "/recruiting" },
  { label: "Marketing", href: "/marketing" },
  { label: "Webdesign", href: "/webdesign" },
];

const navLinks = [
  { label: "Leistungen", href: "#services", isDropdown: true },
  { label: "Ablauf", href: "#process" },
  { label: "Über mich", href: "#about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Skip-to-Content für Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:text-sm focus:font-medium"
      >
        Zum Inhalt springen
      </a>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <motion.img 
              src={logo}
              alt="Pirro Consulting"
              width={120}
              height={32}
              className={`h-8 w-auto transition-all duration-300 ${!scrolled ? "brightness-0 invert" : ""}`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
              }`}>
                Leistungen
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-48 py-2 bg-background border border-border rounded-lg shadow-xl z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {serviceLinks.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={link.href}
                          className="block px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`transition-colors font-medium ${
                    scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Über mich
                </button>
                <Link
                  to="/blog"
                  className={`transition-colors font-medium ${
                    scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Blog
                </Link>
                <button
                  onClick={() => scrollToSection("faq")}
                  className={`transition-colors font-medium ${
                    scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  FAQ
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/#about"
                  className={`transition-colors font-medium ${
                    scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Über mich
                </Link>
                <Link
                  to="/blog"
                  className={`transition-colors font-medium ${
                    scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Blog
                </Link>
                <Link
                  to="/#faq"
                  className={`transition-colors font-medium ${
                    scrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  FAQ
                </Link>
              </>
            )}
          </div>

          {/* Desktop Contact & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/4915XXX"
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
              href="tel:+4915XXX"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">Anrufen</span>
            </a>
            <motion.a
              href="https://calendly.com/pirroconsulting"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-background text-foreground hover:bg-background/90"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Potenzialanalyse sichern
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden py-4 border-t border-border bg-background"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
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
                    <motion.div
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        className="pl-4 space-y-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href}
                            className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {isHomePage ? (
                  <>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                    >
                      Über mich
                    </button>
                    <Link
                      to="/blog"
                      className="text-left text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
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
                    <Link
                      to="/#about"
                      className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Über mich
                    </Link>
                    <Link
                      to="/blog"
                      className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      to="/#faq"
                      className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      FAQ
                    </Link>
                  </>
                )}

                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="https://wa.me/4915XXX"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+4915XXX"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    <Phone className="w-5 h-5" />
                    Anrufen
                  </a>
                </div>
                <a
                  href="https://calendly.com/pirroconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Potenzialanalyse sichern
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
