import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EMAIL } from "@/constants";
const Datenschutz = () => {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Helmet>
        <title>Datenschutzerklärung | Pirro Consulting</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://pirroconsulting.de/datenschutz" />
      </Helmet>
      <Navbar />

      <section className="pt-28 pb-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-12">
              Datenschutzerklärung
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
            {/* 1. Verantwortlicher */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              1. Verantwortlicher
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung
              (DSGVO) und anderer nationaler Datenschutzgesetze sowie
              sonstiger datenschutzrechtlicher Bestimmungen ist:
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Noah Pirro
              <br />
              Pirro Consulting
              <br />
              Trippstadter Str. 110
              <br />
              67663 Kaiserslautern
              <br />
              E-Mail: {EMAIL}
            </p>

            {/* 2. Erhebung und Speicherung personenbezogener Daten */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              2. Erhebung und Speicherung personenbezogener Daten sowie Art
              und Zweck von deren Verwendung
            </h2>

            <h3 className="text-xl font-display font-semibold mt-8 mb-3">
              a) Beim Besuch der Website
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Beim Aufrufen unserer Website werden durch den auf Ihrem
              Endgerät zum Einsatz kommenden Browser automatisch
              Informationen an den Server unserer Website gesendet. Diese
              Informationen werden temporär in einem sog. Logfile gespeichert.
              Folgende Informationen werden dabei ohne Ihr Zutun erfasst und
              bis zur automatisierten Löschung gespeichert:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-6 space-y-1">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>
                Verwendeter Browser und ggf. das Betriebssystem Ihres
                Rechners sowie der Name Ihres Access-Providers
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Die genannten Daten werden durch uns zu folgenden Zwecken
              verarbeitet: Gewährleistung eines reibungslosen
              Verbindungsaufbaus der Website, Gewährleistung einer
              komfortablen Nutzung unserer Website, Auswertung der
              Systemsicherheit und -stabilität sowie zu weiteren
              administrativen Zwecken. Die Rechtsgrundlage für die
              Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            </p>

            <h3 className="text-xl font-display font-semibold mt-8 mb-3">
              b) Bei Nutzung unseres Kontaktformulars
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit
              uns über ein auf der Website bereitgestelltes Formular Kontakt
              aufzunehmen. Dabei ist die Angabe einer gültigen
              E-Mail-Adresse erforderlich, damit wir wissen, von wem die
              Anfrage stammt und um diese beantworten zu können. Weitere
              Angaben können freiwillig getätigt werden. Die
              Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns
              erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage
              Ihrer freiwillig erteilten Einwilligung. Die für die Benutzung
              des Kontaktformulars von uns erhobenen personenbezogenen Daten
              werden nach Erledigung der von Ihnen gestellten Anfrage
              automatisch gelöscht.
            </p>

            {/* 3. Verwendung von Cookies */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              3. Verwendung von Cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unsere Website verwendet Cookies. Hierbei handelt es sich um
              kleine Dateien, die Ihr Browser automatisch erstellt und die auf
              Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite
              besuchen. Cookies richten auf Ihrem Endgerät keinen Schaden an,
              enthalten keine Viren, Trojaner oder sonstige Schadsoftware.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In dem Cookie werden Informationen abgelegt, die sich jeweils
              im Zusammenhang mit dem spezifisch eingesetzten Endgerät
              ergeben. Dies bedeutet jedoch nicht, dass wir dadurch
              unmittelbar Kenntnis von Ihrer Identität erhalten.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Der Einsatz von Cookies dient dazu, die Nutzung unseres
              Angebots für Sie angenehmer zu gestalten. So setzen wir
              sogenannte Session-Cookies ein, um zu erkennen, dass Sie
              einzelne Seiten unserer Website bereits besucht haben. Diese
              werden nach Verlassen unserer Seite automatisch gelöscht. Die
              durch technisch notwendige Cookies erhobenen Nutzerdaten werden
              nicht zur Erstellung von Nutzerprofilen verwendet. Die
              Rechtsgrundlage für die Verarbeitung personenbezogener Daten
              unter Verwendung technisch notwendiger Cookies ist Art. 6 Abs.
              1 lit. f DSGVO.
            </p>

            {/* 4. Kontaktformular */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              4. Kontaktformular
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
              werden Ihre Angaben aus dem Anfrageformular inklusive der von
              Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
              weiter. Die Verarbeitung der in das Kontaktformular
              eingegebenen Daten erfolgt somit ausschließlich auf Grundlage
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können
              diese Einwilligung jederzeit widerrufen. Dazu reicht eine
              formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der
              bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt
              vom Widerruf unberührt.
            </p>

            {/* 5. Ihre Rechte */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              5. Ihre Rechte
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
              betreffenden personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground leading-relaxed mb-6 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sie haben zudem das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten durch uns zu beschweren.
            </p>

            {/* 6. Widerspruchsrecht */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              6. Widerspruchsrecht
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sofern Ihre personenbezogenen Daten auf Grundlage von
              berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO
              verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO
              Widerspruch gegen die Verarbeitung Ihrer personenbezogenen
              Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus
              Ihrer besonderen Situation ergeben. Möchten Sie von Ihrem
              Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an
              {EMAIL}.
            </p>

            {/* 7. SSL-Verschlüsselung */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              7. SSL-Verschlüsselung
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz
              der Übertragung vertraulicher Inhalte, wie zum Beispiel der
              Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
              Sie daran, dass die Adresszeile des Browsers von „http://" auf
              „https://" wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile. Wenn die SSL-Verschlüsselung aktiviert ist,
              können die Daten, die Sie an uns übermitteln, nicht von Dritten
              mitgelesen werden.
            </p>

            {/* 8. Analyse-Tools und Tracking */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              8. Analyse-Tools und Tracking
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Diese Website verwendet derzeit keine externen
              Analyse- oder Tracking-Tools. Sollte sich dies in Zukunft
              ändern, wird dieser Abschnitt entsprechend aktualisiert und
              Sie werden über unseren Cookie-Hinweis informiert.
            </p>

            {/* 9. Aktualität und Änderung */}
            <h2 className="text-2xl font-display font-bold mt-10 mb-4">
              9. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Diese Datenschutzerklärung ist aktuell gültig und hat den
              Stand Februar 2026. Durch die Weiterentwicklung unserer Website
              und Angebote darüber oder aufgrund geänderter gesetzlicher
              beziehungsweise behördlicher Vorgaben kann es notwendig werden,
              diese Datenschutzerklärung zu ändern. Die jeweils aktuelle
              Datenschutzerklärung kann jederzeit auf dieser Website von
              Ihnen abgerufen und ausgedruckt werden.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Datenschutz;
