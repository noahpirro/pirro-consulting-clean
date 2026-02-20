import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { useState } from "react";
import { toast } from "sonner";
import {
  Send,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { CALENDLY_URL, WHATSAPP_URL, PHONE, PHONE_DISPLAY, EMAIL } from "@/constants";

export const Kontakt = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateName = (value: string) => {
    if (!value || value.trim().length < 2) {
      return "Bitte gib deinen Namen ein (mind. 2 Zeichen)";
    }
    return undefined;
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || !emailRegex.test(value)) {
      return "Bitte gib eine gültige E-Mail-Adresse ein";
    }
    return undefined;
  };

  const validateMessage = (value: string) => {
    if (!value || value.trim().length < 10) {
      return "Bitte beschreibe dein Anliegen (mind. 10 Zeichen)";
    }
    return undefined;
  };

  const handleBlur = (field: "name" | "email" | "message", value: string) => {
    const validators = { name: validateName, email: validateEmail, message: validateMessage };
    const error = validators[field](value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: "name" | "email" | "message") => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", "YOUR_WEB3FORMS_KEY"); // Replace with real key

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setSubmitted(true);
        form.reset();
      } else {
        toast.error("Fehler beim Senden", {
          description: "Bitte versuche es erneut oder kontaktiere uns direkt.",
        });
      }
    } catch {
      toast.error("Verbindungsfehler", {
        description: "Bitte prüfe deine Internetverbindung.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>Kontakt | Pirro Consulting</title>
        <meta
          name="description"
          content="Kontaktiere Pirro Consulting für eine kostenlose Potenzialanalyse. Automatisierung & Digitalisierung für dein Unternehmen."
        />
        <link rel="canonical" href="https://pirro-consulting.de/kontakt" />
        <meta property="og:title" content="Kontakt | Pirro Consulting" />
        <meta
          property="og:description"
          content="Kontaktiere uns für eine kostenlose Potenzialanalyse."
        />
        <meta property="og:url" content="https://pirro-consulting.de/kontakt" />
        <meta property="og:image" content="https://pirro-consulting.de/og-image.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Pirro Consulting – Kontakt aufnehmen" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://pirro-consulting.de",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Kontakt",
                item: "https://pirro-consulting.de/kontakt",
              },
            ],
          })}
        </script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-background/10 border border-background/20 px-4 py-2 rounded-full mb-6">
              <Mail className="w-4 h-4 text-background/60" />
              <span className="text-sm text-background/60">Kontakt</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Lass uns{" "}
              <span className="text-highlight">sprechen</span>
            </h1>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">
              Ob Frage, Projektidee oder kostenlose Potenzialanalyse – wir
              freuen uns auf deine Nachricht.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <AnimatedSection>
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-display font-bold mb-3">
                      Nachricht erfolgreich gesendet!
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      Vielen Dank für deine Anfrage. Wir melden uns innerhalb von 24 Stunden bei dir.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center h-12 px-6 bg-foreground text-background hover:bg-foreground/90 rounded-lg font-medium group"
                      >
                        Direkt Termin buchen
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center h-12 px-6 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
                      >
                        Weitere Nachricht senden
                      </button>
                    </div>
                  </div>
                </AnimatedSection>
              ) : (
                <AnimatedSection>
                  <h2 className="text-2xl font-display font-bold mb-8">
                    Schreib uns eine Nachricht
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="subject" value="Neue Kontaktanfrage über pirro-consulting.de" />
                    <input type="hidden" name="from_name" value="Pirro Consulting Website" />
                    <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-2"
                        >
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          minLength={2}
                          maxLength={100}
                          autoComplete="name"
                          placeholder="Max Mustermann"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          onBlur={(e) => handleBlur("name", e.target.value)}
                          onChange={() => handleChange("name")}
                          className={`w-full h-12 px-4 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all ${errors.name ? "border-destructive" : "border-border"}`}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-sm text-destructive mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          E-Mail *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          inputMode="email"
                          placeholder="max@beispiel.de"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          onBlur={(e) => handleBlur("email", e.target.value)}
                          onChange={() => handleChange("email")}
                          className={`w-full h-12 px-4 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all ${errors.email ? "border-destructive" : "border-border"}`}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-destructive mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Unternehmen
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        maxLength={150}
                        autoComplete="organization"
                        placeholder="Mustermann GmbH"
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-sm font-medium mb-2"
                      >
                        Worum geht es?
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        aria-label="Worum geht es?"
                        className="w-full h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all appearance-none"
                      >
                        <option value="">Bitte auswählen</option>
                        <option value="potenzialanalyse">
                          Kostenlose Potenzialanalyse
                        </option>
                        <option value="automatisierung">
                          Automatisierung & CRM
                        </option>
                        <option value="ki">KI-Lösungen</option>
                        <option value="recruiting">Recruiting</option>
                        <option value="marketing">Marketing</option>
                        <option value="webdesign">Webdesign</option>
                        <option value="sonstiges">Sonstiges</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Nachricht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        minLength={10}
                        maxLength={2000}
                        placeholder="Erzähl uns kurz, wobei wir dir helfen können..."
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        onBlur={(e) => handleBlur("message", e.target.value)}
                        onChange={() => handleChange("message")}
                        className={`w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-sm text-destructive mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center h-14 px-8 text-base font-medium bg-foreground text-background hover:bg-foreground/90 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Nachricht senden
                        </>
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground">
                      Mit dem Absenden stimmst du unserer{" "}
                      <a
                        href="/datenschutz"
                        className="underline hover:text-foreground transition-colors"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      zu.
                    </p>
                  </form>
                </AnimatedSection>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.15}>
                <div className="space-y-8">
                  {/* Direct Contact */}
                  <div>
                    <h3 className="text-lg font-display font-bold mb-4">
                      Direkt erreichen
                    </h3>
                    <div className="space-y-4">
                      <a
                        href={`tel:${PHONE}`}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-foreground/5 transition-colors">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Telefon
                          </p>
                          <p className="text-sm">{PHONE_DISPLAY}</p>
                        </div>
                      </a>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-foreground/5 transition-colors">
                          <MessageCircle className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            WhatsApp
                          </p>
                          <p className="text-sm">Direkt schreiben</p>
                        </div>
                      </a>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-foreground/5 transition-colors">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            E-Mail
                          </p>
                          <p className="text-sm">{EMAIL}</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="text-lg font-display font-bold mb-4">
                      Standort
                    </h3>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Pirro Consulting
                        </p>
                        <p className="text-sm">Kaiserslautern, Deutschland</p>
                      </div>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div>
                    <h3 className="text-lg font-display font-bold mb-4">
                      Antwortzeit
                    </h3>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Innerhalb von 24 Stunden
                        </p>
                        <p className="text-sm">
                          Mo–Fr, 9:00–18:00 Uhr
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick CTA */}
                  <div className="bg-foreground text-background rounded-2xl p-6">
                    <h3 className="text-lg font-display font-bold mb-2">
                      Lieber direkt sprechen?
                    </h3>
                    <p className="text-sm text-background/70 mb-4">
                      Buche eine kostenlose 30-Minuten Potenzialanalyse.
                    </p>
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-background text-foreground rounded-lg text-sm font-medium hover:bg-background/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      Termin buchen
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Kontakt;
