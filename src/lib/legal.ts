/**
 * Legal content, EN + DE.
 *
 * The privacy text describes what this site actually does: static hosting on
 * GitHub Pages, self-hosted fonts (no Google Fonts request at runtime), one
 * application form posting to Make.com, and a single localStorage key for the
 * language toggle. Keep it in sync if any of that changes.
 */

export const COMPANY = {
  name: "André Bruns",
  street: "Geschwister-Scholl-Str. 41",
  city: "28844 Weyhe, Leeste",
  country: { en: "Germany", de: "Deutschland" },
  phone: { en: "On request", de: "Auf Anfrage" },
  email: "info@creator-click.com",
  vatId: "DE326580918",
  form: { en: "Small business (Kleingewerbe)", de: "Kleingewerbe" },
} as const;

export type Lang = "en" | "de";

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "rows"; rows: [string, string][] }
  | { kind: "address"; lines: string[] };

export type Doc = { title: string; lede: string; blocks: Block[] };

/* ------------------------------------------------------------------ */
/* IMPRINT                                                             */
/* ------------------------------------------------------------------ */

const imprintEn: Doc = {
  title: "Legal notice",
  lede: "Information pursuant to § 5 DDG (German Digital Services Act).",
  blocks: [
    { kind: "h", text: "Service provider" },
    {
      kind: "address",
      lines: [COMPANY.name, COMPANY.street, COMPANY.city, COMPANY.country.en],
    },
    { kind: "h", text: "Contact" },
    {
      kind: "rows",
      rows: [
        ["Phone", COMPANY.phone.en],
        ["Email", COMPANY.email],
      ],
    },
    { kind: "h", text: "Business details" },
    {
      kind: "rows",
      rows: [
        ["VAT identification number (§ 27 a UStG)", COMPANY.vatId],
        ["Business form", COMPANY.form.en],
      ],
    },
    { kind: "h", text: "Responsible for editorial content (§ 18 (2) MStV)" },
    {
      kind: "address",
      lines: [COMPANY.name, COMPANY.street, COMPANY.city, COMPANY.country.en],
    },
    { kind: "h", text: "Online dispute resolution" },
    {
      kind: "p",
      text: "The European Commission provides a platform for online dispute resolution at https://ec.europa.eu/consumers/odr/. We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.",
    },
    { kind: "h", text: "Liability for content and links" },
    {
      kind: "p",
      text: "As a service provider we are responsible for our own content on these pages under general law. We are not obliged to monitor transmitted or stored third-party information, or to investigate circumstances that indicate unlawful activity. Obligations to remove or block the use of information under general law remain unaffected; liability in this respect is only possible from the point in time at which a concrete infringement becomes known. Our site contains links to external websites over whose content we have no influence. The respective provider or operator of those pages is always responsible for their content.",
    },
    { kind: "h", text: "Copyright" },
    {
      kind: "p",
      text: "Content and works created by the site operator on these pages are subject to German copyright law. Reproduction, adaptation, distribution and any kind of exploitation beyond the limits of copyright require written consent. Product names, screenshots and creator likenesses shown on this site remain the property of their respective owners and are used with permission.",
    },
  ],
};

const imprintDe: Doc = {
  title: "Impressum",
  lede: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).",
  blocks: [
    { kind: "h", text: "Diensteanbieter" },
    {
      kind: "address",
      lines: [COMPANY.name, COMPANY.street, COMPANY.city, COMPANY.country.de],
    },
    { kind: "h", text: "Kontakt" },
    {
      kind: "rows",
      rows: [
        ["Telefon", COMPANY.phone.de],
        ["E-Mail", COMPANY.email],
      ],
    },
    { kind: "h", text: "Unternehmensangaben" },
    {
      kind: "rows",
      rows: [
        ["Umsatzsteuer-Identifikationsnummer (§ 27 a UStG)", COMPANY.vatId],
        ["Unternehmensform", COMPANY.form.de],
      ],
    },
    { kind: "h", text: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV" },
    {
      kind: "address",
      lines: [COMPANY.name, COMPANY.street, COMPANY.city, COMPANY.country.de],
    },
    { kind: "h", text: "Online-Streitbeilegung" },
    {
      kind: "p",
      text: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: https://ec.europa.eu/consumers/odr/. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    },
    { kind: "h", text: "Haftung für Inhalte und Links" },
    {
      kind: "p",
      text: "Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt; eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.",
    },
    { kind: "h", text: "Urheberrecht" },
    {
      kind: "p",
      text: "Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung. Auf dieser Website gezeigte Produktnamen, Screenshots und Personenaufnahmen bleiben Eigentum der jeweiligen Rechteinhaber und werden mit deren Einverständnis verwendet.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* PRIVACY                                                             */
/* ------------------------------------------------------------------ */

const privacyEn: Doc = {
  title: "Privacy policy",
  lede: "How this website handles personal data, under the GDPR.",
  blocks: [
    { kind: "h", text: "Controller" },
    {
      kind: "address",
      lines: [COMPANY.name, COMPANY.street, COMPANY.city, COMPANY.country.en, COMPANY.email],
    },
    { kind: "h", text: "In short" },
    {
      kind: "list",
      items: [
        "This site sets no cookies and runs no analytics, advertising or tracking.",
        "Fonts are served from this site itself — no request is made to Google Fonts.",
        "The only data you actively send us is the partnership application form.",
        "One browser storage entry is used, and only to remember your language choice on the legal pages.",
      ],
    },
    { kind: "h", text: "Hosting and server logs" },
    {
      kind: "p",
      text: "This website is hosted on GitHub Pages, a service of GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you open the site, your browser transmits data that GitHub processes in server log files — in particular your IP address, the date and time of the request, the page requested, the referring URL, and your browser and operating system. This is technically necessary to deliver the site and to keep it secure. The legal basis is Art. 6 (1) (f) GDPR (legitimate interest in a reliable, secure presentation of our website). Transfers to the USA are covered by GitHub's participation in the EU-U.S. Data Privacy Framework and its standard contractual clauses. GitHub's privacy statement: https://docs.github.com/site-policy/privacy-policies/github-privacy-statement",
    },
    { kind: "h", text: "Fonts and assets" },
    {
      kind: "p",
      text: "All typefaces are bundled with the site and served from the same host. Your browser makes no connection to Google Fonts or any other third-party font service, and no IP address is transmitted to one. Images and interface screenshots are likewise served from this site.",
    },
    { kind: "h", text: "Partnership application form" },
    {
      kind: "p",
      text: "If you submit the application form, the data you enter — name, email address, main platform, handle, audience size range and your free-text message — is transmitted to a webhook operated by Make (Celonis SE, Theresienhöhe 11a, 80339 Munich, Germany) on its EU infrastructure, and from there to us. We use it solely to assess and answer your application. The legal basis is Art. 6 (1) (b) GDPR (steps prior to entering into a contract) and Art. 6 (1) (f) GDPR (legitimate interest in responding to enquiries). We keep applications only as long as needed to deal with them and any follow-up, and delete them once they are no longer required. Make's privacy notice: https://www.make.com/en/privacy-notice",
    },
    {
      kind: "p",
      text: "If your browser cannot reach that endpoint, the form falls back to opening your own email client with the same details pre-filled. In that case nothing is transmitted until you send the message yourself.",
    },
    { kind: "h", text: "Contact by email" },
    {
      kind: "p",
      text: "If you write to us directly, we process your address and the content of your message to answer it. Legal basis: Art. 6 (1) (b) and (f) GDPR.",
    },
    { kind: "h", text: "Browser storage" },
    {
      kind: "p",
      text: "The legal pages store your language choice under the key \"cc-legal-lang\" in your browser's local storage. It stays on your device, is never transmitted to us, and you can clear it at any time through your browser settings. No cookies are set.",
    },
    { kind: "h", text: "External links" },
    {
      kind: "p",
      text: "This site links to external profiles and products, including TikTok and sculpte.fitness. Opening such a link takes you to that provider, whose own privacy policy then applies. We have no influence over their processing.",
    },
    { kind: "h", text: "Your rights" },
    {
      kind: "list",
      items: [
        "Access to the personal data we hold about you (Art. 15 GDPR)",
        "Rectification of inaccurate data (Art. 16 GDPR)",
        "Erasure (Art. 17 GDPR)",
        "Restriction of processing (Art. 18 GDPR)",
        "Data portability (Art. 20 GDPR)",
        "Objection to processing based on legitimate interest (Art. 21 GDPR)",
        "Withdrawal of consent at any time, with effect for the future (Art. 7 (3) GDPR)",
      ],
    },
    {
      kind: "p",
      text: "To exercise any of these, write to " + COMPANY.email + ". You also have the right to lodge a complaint with a supervisory authority. The authority responsible for us is Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover, Germany.",
    },
  ],
};

const privacyDe: Doc = {
  title: "Datenschutzerklärung",
  lede: "Wie diese Website personenbezogene Daten verarbeitet — nach DSGVO.",
  blocks: [
    { kind: "h", text: "Verantwortlicher" },
    {
      kind: "address",
      lines: [COMPANY.name, COMPANY.street, COMPANY.city, COMPANY.country.de, COMPANY.email],
    },
    { kind: "h", text: "Kurz gefasst" },
    {
      kind: "list",
      items: [
        "Diese Seite setzt keine Cookies und nutzt kein Analyse-, Werbe- oder Tracking-Tool.",
        "Schriftarten werden von dieser Website selbst ausgeliefert — es erfolgt keine Anfrage an Google Fonts.",
        "Aktiv übermitteln Sie uns nur die Daten aus dem Bewerbungsformular.",
        "Ein einziger Eintrag im Browserspeicher merkt sich Ihre Sprachwahl auf den Rechtsseiten.",
      ],
    },
    { kind: "h", text: "Hosting und Server-Logfiles" },
    {
      kind: "p",
      text: "Diese Website wird bei GitHub Pages gehostet, einem Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der Seite übermittelt Ihr Browser Daten, die GitHub in Server-Logfiles verarbeitet — insbesondere Ihre IP-Adresse, Datum und Uhrzeit der Anfrage, die abgerufene Seite, die Referrer-URL sowie Browser und Betriebssystem. Dies ist technisch erforderlich, um die Seite auszuliefern und ihren sicheren Betrieb zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer zuverlässigen und sicheren Darstellung unserer Website). Übermittlungen in die USA sind durch die Teilnahme von GitHub am EU-U.S. Data Privacy Framework sowie Standardvertragsklauseln abgesichert. Datenschutzerklärung von GitHub: https://docs.github.com/site-policy/privacy-policies/github-privacy-statement",
    },
    { kind: "h", text: "Schriftarten und Medien" },
    {
      kind: "p",
      text: "Alle Schriftarten sind in die Website eingebettet und werden vom selben Host ausgeliefert. Ihr Browser baut keine Verbindung zu Google Fonts oder einem anderen Drittanbieter für Schriften auf; es wird keine IP-Adresse dorthin übertragen. Bilder und Interface-Screenshots werden ebenfalls von dieser Website ausgeliefert.",
    },
    { kind: "h", text: "Bewerbungsformular" },
    {
      kind: "p",
      text: "Wenn Sie das Bewerbungsformular absenden, werden die von Ihnen eingegebenen Daten — Name, E-Mail-Adresse, Hauptplattform, Handle, Größenbereich Ihrer Reichweite und Ihre Freitextnachricht — an einen Webhook von Make (Celonis SE, Theresienhöhe 11a, 80339 München) auf dessen EU-Infrastruktur und von dort an uns übermittelt. Wir verwenden sie ausschließlich, um Ihre Anfrage zu prüfen und zu beantworten. Rechtsgrundlage sind Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Wir speichern Bewerbungen nur so lange, wie es für deren Bearbeitung und eine etwaige Anschlusskommunikation erforderlich ist, und löschen sie anschließend. Datenschutzhinweise von Make: https://www.make.com/en/privacy-notice",
    },
    {
      kind: "p",
      text: "Ist dieser Endpunkt von Ihrem Browser aus nicht erreichbar, öffnet das Formular ersatzweise Ihr eigenes E-Mail-Programm mit den bereits ausgefüllten Angaben. In diesem Fall wird nichts übertragen, bevor Sie die Nachricht selbst versenden.",
    },
    { kind: "h", text: "Kontakt per E-Mail" },
    {
      kind: "p",
      text: "Wenn Sie uns direkt schreiben, verarbeiten wir Ihre Adresse und den Inhalt Ihrer Nachricht zur Beantwortung. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO.",
    },
    { kind: "h", text: "Browserspeicher" },
    {
      kind: "p",
      text: "Die Rechtsseiten speichern Ihre Sprachwahl unter dem Schlüssel „cc-legal-lang“ im lokalen Speicher Ihres Browsers. Der Eintrag verbleibt auf Ihrem Gerät, wird nie an uns übertragen und lässt sich jederzeit über die Browsereinstellungen löschen. Cookies werden nicht gesetzt.",
    },
    { kind: "h", text: "Externe Links" },
    {
      kind: "p",
      text: "Diese Website verlinkt auf externe Profile und Produkte, unter anderem TikTok und sculpte.fitness. Mit dem Aufruf eines solchen Links gelangen Sie zum jeweiligen Anbieter, dessen eigene Datenschutzerklärung dann gilt. Auf deren Verarbeitung haben wir keinen Einfluss.",
    },
    { kind: "h", text: "Ihre Rechte" },
    {
      kind: "list",
      items: [
        "Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO)",
        "Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
        "Löschung (Art. 17 DSGVO)",
        "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
        "Datenübertragbarkeit (Art. 20 DSGVO)",
        "Widerspruch gegen eine Verarbeitung auf Grundlage berechtigter Interessen (Art. 21 DSGVO)",
        "Widerruf einer Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)",
      ],
    },
    {
      kind: "p",
      text: "Zur Ausübung genügt eine Nachricht an " + COMPANY.email + ". Ihnen steht zudem ein Beschwerderecht bei einer Aufsichtsbehörde zu. Für uns zuständig ist Die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover.",
    },
  ],
};

export const LEGAL = {
  imprint: { en: imprintEn, de: imprintDe },
  privacy: { en: privacyEn, de: privacyDe },
} as const;

export const UI = {
  en: {
    switchLabel: "Language",
    other: "Deutsch",
    updated: "Last updated",
    back: "Back to site",
  },
  de: {
    switchLabel: "Sprache",
    other: "English",
    updated: "Stand",
    back: "Zurück zur Website",
  },
} as const;
