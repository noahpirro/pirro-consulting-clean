export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "automatisierung-einstieg",
    title: "5 Prozesse, die jedes Unternehmen sofort automatisieren sollte",
    excerpt:
      "Du verlierst jede Woche Stunden mit repetitiven Aufgaben. Hier sind die 5 Bereiche, die sich am schnellsten automatisieren lassen – mit sofortigem ROI.",
    category: "Automatisierung",
    readTime: "5 Min.",
    date: "12. Feb 2026",
    featured: true,
    content: [
      "Viele Unternehmer verbringen einen Großteil ihrer Arbeitszeit mit Aufgaben, die sich ständig wiederholen. E-Mails beantworten, Daten von einem System ins andere kopieren, Rechnungen erstellen – all das frisst wertvolle Zeit, die für strategische Arbeit fehlt.",
      "Die gute Nachricht: Genau diese Aufgaben lassen sich am einfachsten automatisieren. Und der ROI ist oft schon in den ersten Wochen spürbar.",
      "1. Lead-Erfassung und Follow-up: Wenn ein neuer Lead über deine Website kommt, sollte er automatisch in deinem CRM landen – mit Tags, Zuordnung zum richtigen Mitarbeiter und einer sofortigen Willkommens-E-Mail. Tools wie Make oder n8n können das in wenigen Minuten einrichten.",
      "2. Rechnungsstellung: Von der Angebotserstellung bis zur Mahnung – der gesamte Rechnungsprozess lässt sich automatisieren. Integration von CRM, Buchhaltungssoftware und E-Mail spart durchschnittlich 5-10 Stunden pro Woche.",
      "3. Terminbuchung und Bestätigung: Statt E-Mail-Ping-Pong für jeden Termin: Ein automatisiertes Buchungssystem mit Bestätigung, Erinnerung und Kalender-Sync. Calendly oder ähnliche Tools, verbunden mit deinem CRM.",
      "4. Reporting und Dashboards: Manuelle Reports aus verschiedenen Quellen zusammenstellen? Das gehört der Vergangenheit an. Automatisierte Dashboards ziehen Daten in Echtzeit und liefern dir die KPIs, die du brauchst.",
      "5. Kunden-Onboarding: Der erste Eindruck zählt. Ein automatisiertes Onboarding mit Willkommens-E-Mail, Zugangsdaten, Einführungsmaterial und erstem Check-in-Termin sorgt für zufriedene Kunden von Tag eins.",
      "Unser Tipp: Starte mit dem Prozess, der dich am meisten Zeit kostet. Die meisten Automatisierungen amortisieren sich innerhalb von 2-4 Wochen.",
    ],
  },
  {
    slug: "crm-richtig-nutzen",
    title: "CRM richtig nutzen: Warum 80% der Unternehmen es falsch machen",
    excerpt:
      "Ein CRM ist nur so gut wie seine Nutzung. Die häufigsten Fehler und wie du sie vermeidest, um deine Pipeline wirklich zu managen.",
    category: "CRM",
    readTime: "7 Min.",
    date: "5. Feb 2026",
    featured: false,
    content: [
      "Ein CRM-System ist das Herzstück jedes modernen Unternehmens. Doch die Realität sieht oft anders aus: Das CRM wird als teure Adressdatenbank missbraucht, Daten sind veraltet, und das Team nutzt es nur widerwillig.",
      "Hier sind die häufigsten Fehler – und wie du sie vermeidest:",
      "Fehler 1: Kein klarer Prozess. Ein CRM ohne definierten Sales-Prozess ist wie ein Auto ohne Straße. Bevor du ein CRM einrichtest, definiere die Phasen deiner Pipeline: Vom ersten Kontakt bis zum Abschluss.",
      "Fehler 2: Zu viele Felder. Jedes Pflichtfeld, das dein Team ausfüllen muss, senkt die Akzeptanz. Starte mit dem Minimum und erweitere nur, was wirklich gebraucht wird.",
      "Fehler 3: Keine Automatisierung. Wenn dein Team Daten manuell zwischen Systemen kopiert, machst du etwas falsch. Verbinde dein CRM mit E-Mail, Kalender, Buchhaltung und Marketing-Tools.",
      "Fehler 4: Fehlende Disziplin. Ein CRM funktioniert nur, wenn alle es nutzen. Führe klare Regeln ein: Jeder Kontakt wird erfasst, jede Aktivität dokumentiert, jeder Deal aktualisiert.",
      "Die Lösung: Ein gut eingerichtetes CRM mit sauberen Automatisierungen spart dir nicht nur Zeit – es verhindert, dass Leads durchs Raster fallen und gibt dir einen klaren Überblick über deine Pipeline.",
      "Bei Pirro Consulting richten wir CRM-Systeme so ein, dass sie von Tag eins funktionieren – inklusive Automatisierungen, Schulung und laufender Optimierung.",
    ],
  },
  {
    slug: "ki-im-unternehmen",
    title: "KI im Unternehmen: Hype vs. Realität für den Mittelstand",
    excerpt:
      "Was KI heute wirklich für kleine und mittlere Unternehmen leisten kann – und wo die Grenzen liegen. Ein ehrlicher Überblick.",
    category: "KI",
    readTime: "6 Min.",
    date: "28. Jan 2026",
    featured: false,
    content: [
      "Künstliche Intelligenz ist in aller Munde. Doch während Großkonzerne Millionen in KI-Projekte investieren, fragen sich viele Mittelständler: Lohnt sich das auch für mich?",
      "Die kurze Antwort: Ja – aber anders, als du vielleicht denkst.",
      "Was KI heute schon kann: Texte erstellen und zusammenfassen (E-Mails, Angebote, Social-Media-Posts), Daten analysieren und Muster erkennen, Kundenanfragen automatisch beantworten, Dokumente klassifizieren und sortieren, sowie Leads bewerten und priorisieren.",
      "Was KI (noch) nicht kann: Dein Unternehmen verstehen ohne klare Daten, kreative Strategien entwickeln, Kundenbeziehungen aufbauen, und komplexe Entscheidungen mit vielen Variablen treffen.",
      "Der pragmatische Ansatz: Statt ein großes KI-Projekt zu starten, integriere KI dort, wo sie sofort Mehrwert liefert. Ein KI-gestützter Chatbot für häufige Kundenanfragen. Automatische E-Mail-Entwürfe basierend auf CRM-Daten. Intelligente Lead-Scoring-Modelle.",
      "Die Kosten sind oft überschaubar – viele KI-Tools lassen sich für unter 100€ pro Monat in bestehende Workflows integrieren.",
      "Unser Rat: Starte klein, messe die Ergebnisse, und skaliere, was funktioniert. KI ist kein Allheilmittel, aber ein mächtiges Werkzeug für Unternehmen, die es richtig einsetzen.",
    ],
  },
  {
    slug: "onboarding-automatisieren",
    title: "Kunden-Onboarding automatisieren: Der komplette Guide",
    excerpt:
      "Vom ersten Kontakt bis zum zufriedenen Kunden – so baust du einen Onboarding-Prozess, der skaliert und begeistert.",
    category: "Prozesse",
    readTime: "8 Min.",
    date: "20. Jan 2026",
    featured: false,
    content: [
      "Der erste Eindruck zählt – auch nach dem Kauf. Ein schlechtes Onboarding kann selbst den begeistertsten Neukunden frustrieren. Ein großartiges Onboarding hingegen legt den Grundstein für eine lange, profitable Kundenbeziehung.",
      "Warum automatisieren? Weil manuelle Onboarding-Prozesse nicht skalieren. Wenn du 5 neue Kunden pro Monat hast, geht es noch. Bei 20 oder 50 bricht alles zusammen.",
      "Phase 1 – Willkommen (sofort nach Kaufabschluss): Automatische Willkommens-E-Mail mit persönlicher Note, Zugangsdaten für Kundenportal oder Tools, Übersicht der nächsten Schritte, und Link zur Terminbuchung für den Kickoff.",
      "Phase 2 – Einrichtung (Tag 1-3): Automatische Erstellung des Kundenprofils im CRM, Bereitstellung aller relevanten Dokumente, Einladungen zu relevanten Gruppen oder Channels, und Zuweisung zum zuständigen Ansprechpartner.",
      "Phase 3 – Kickoff (Tag 3-7): Automatische Erinnerung an den Kickoff-Termin, Vorbereitungs-Checkliste für den Kunden, Agenda und Ziele für das erste Meeting.",
      "Phase 4 – Follow-up (Tag 7-30): Automatisierte Check-in E-Mails, Feedback-Abfrage nach 2 Wochen, Hilfreiche Ressourcen basierend auf dem Kundentyp, und Eskalation bei fehlender Aktivität.",
      "Die Tools: Make oder n8n als Automatisierungsplattform, dein CRM als zentrale Datenquelle, E-Mail-Tool für die Kommunikation, und Calendly für die Terminbuchung.",
      "Das Ergebnis: Kunden, die sich von Anfang an gut aufgehoben fühlen – ohne dass du für jeden einzelnen Stunden investieren musst.",
    ],
  },
  {
    slug: "tools-vergleich-2026",
    title: "Die besten Automatisierungs-Tools 2026 im Vergleich",
    excerpt:
      "Make vs. Zapier vs. n8n – welches Tool passt zu deinem Unternehmen? Unser ehrlicher Vergleich mit Preis-Leistungs-Bewertung.",
    category: "Tools",
    readTime: "10 Min.",
    date: "10. Jan 2026",
    featured: false,
    content: [
      "Die Wahl des richtigen Automatisierungs-Tools kann überwältigend sein. Make, Zapier, n8n – alle versprechen, deine Prozesse zu revolutionieren. Aber welches Tool passt wirklich zu dir?",
      "Make (ehemals Integromat): Unser Favorit für die meisten Anwendungsfälle. Visueller Workflow-Builder, der auch komplexe Szenarien abbilden kann. Sehr gutes Preis-Leistungs-Verhältnis mit einem großzügigen Free-Tier. Über 1.500 App-Integrationen und hervorragende Fehlerbehandlung.",
      "Zapier: Der Platzhirsch mit der größten App-Bibliothek (6.000+). Ideal für einfache Wenn-Dann-Automatisierungen. Sehr benutzerfreundlich, aber bei komplexen Workflows schnell teuer. Gut für Einsteiger.",
      "n8n: Die Open-Source-Alternative für technisch versierte Teams. Kann selbst gehostet werden (Datenschutz!), unbegrenzte Workflows, und maximale Flexibilität durch Custom Code. Erfordert aber mehr technisches Know-how.",
      "Unser Vergleich – Benutzerfreundlichkeit: Zapier > Make > n8n. Preis-Leistung: Make > n8n > Zapier. Flexibilität: n8n > Make > Zapier. Integrationen: Zapier > Make > n8n. Datenschutz: n8n > Make > Zapier.",
      "Unsere Empfehlung: Für die meisten KMU ist Make die beste Wahl. Es bietet die richtige Balance aus Benutzerfreundlichkeit, Leistung und Preis. Für Unternehmen mit strengen Datenschutzanforderungen ist n8n (selbst gehostet) die beste Option.",
      "Bei Pirro Consulting arbeiten wir mit allen drei Tools – und beraten dich neutral, welches zu deinen Anforderungen passt.",
    ],
  },
  {
    slug: "digitalisierung-fehler",
    title: "7 teure Fehler bei der Digitalisierung – und wie du sie vermeidest",
    excerpt:
      "Die meisten Digitalisierungsprojekte scheitern nicht an der Technik, sondern an der Strategie. Lerne aus den Fehlern anderer.",
    category: "Strategie",
    readTime: "6 Min.",
    date: "3. Jan 2026",
    featured: false,
    content: [
      "70% aller Digitalisierungsprojekte verfehlen ihre Ziele. Das liegt selten an der Technologie – sondern an vermeidbaren strategischen Fehlern.",
      "Fehler 1: Technik vor Strategie. Viele Unternehmen kaufen zuerst ein Tool und überlegen dann, was sie damit machen. Richtig: Zuerst den Prozess verstehen, dann die passende Lösung finden.",
      "Fehler 2: Alles auf einmal digitalisieren. Der Versuch, das gesamte Unternehmen in einem großen Projekt umzukrempeln, scheitert fast immer. Besser: Einen Prozess nach dem anderen, mit messbaren Zielen.",
      "Fehler 3: Das Team nicht einbinden. Digitalisierung betrifft die Menschen, die damit arbeiten müssen. Ohne Schulung, Feedback-Schleifen und Change Management wird jedes Tool zur Shelfware.",
      "Fehler 4: Keine messbaren Ziele definieren. Wie weißt du, ob die Digitalisierung erfolgreich war? Definiere vorher klare KPIs: Zeitersparnis, Fehlerquote, Kundenzufriedenheit.",
      "Fehler 5: Insellösungen statt Systemdenken. Jede Abteilung hat ihre eigenen Tools, die nicht miteinander reden. Die Folge: Datensilos und doppelte Arbeit. Investiere in Integrationen.",
      "Fehler 6: Sicherheit vernachlässigen. In der Eile wird der Datenschutz vergessen. DSGVO-Konformität, Zugriffsrechte und Backups müssen von Anfang an mitgedacht werden.",
      "Fehler 7: Kein Budget für laufende Optimierung. Digitalisierung ist kein Projekt mit Endpunkt, sondern ein kontinuierlicher Prozess. Plane Budget für Updates, Schulungen und Verbesserungen ein.",
      "Unser Ansatz bei Pirro Consulting: Wir starten immer mit einer Prozessanalyse, definieren klare Ziele und setzen schrittweise um – damit dein Digitalisierungsprojekt zu den erfolgreichen 30% gehört.",
    ],
  },
];

export const categories = ["Alle", "Automatisierung", "CRM", "KI", "Prozesse", "Tools", "Strategie"];
