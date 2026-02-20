import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EMAIL } from "@/constants";
const Impressum = () => {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>Impressum | Pirro Consulting</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://pirro-consulting.de/impressum" />
      </Helmet>
      <Navbar />

      <section className="pt-28 pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">
              Impressum
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
            {/* Angaben gemäß § 5 TMG */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Noah Pirro
              <br />
              Pirro Consulting
              <br />
              Trippstadter Str. 110
              <br />
              67663 Kaiserslautern
            </p>

            {/* Kontakt */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              Kontakt
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              E-Mail: {EMAIL}
            </p>

            {/* Umsatzsteuer-ID */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              Umsatzsteuer-ID
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a
              Umsatzsteuergesetz:
              <br />
              USt-IdNr.: DE353674802
            </p>

            {/* Verantwortlich für den Inhalt */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Noah Pirro
              <br />
              Trippstadter Str. 110
              <br />
              67663 Kaiserslautern
            </p>

            {/* Haftungsausschluss */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              Haftungsausschluss
            </h2>

            <h3 className="text-xl font-display font-semibold mt-8 mb-3">
              Haftung für Inhalte
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
              sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
              bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine
              diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>

            <h3 className="text-xl font-display font-semibold mt-8 mb-3">
              Haftung für Links
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche
              Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
              Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>

            <h3 className="text-xl font-display font-semibold mt-8 mb-3">
              Urheberrecht
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten,
              nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
              dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Impressum;
