import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/lib/media-map";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Creamy Catering in Saarwellingen.",
  alternates: {
    canonical: "/datenschutz",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const sectionTitleClass =
  "font-serif text-[1.35rem] leading-tight tracking-[-0.02em] text-[var(--fg)]";
const copyClass = "mt-3 text-[var(--muted)] leading-7";

export default function Datenschutz() {
  const { brand, instagramLink, tiktokLink } = siteContent;

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-12 text-[var(--fg)] md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_16px_38px_rgba(79,57,48,0.05)] md:p-10">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--accent-strong)]">
          Rechtliches
        </p>
        <h1 className="mt-4 font-serif text-[2.2rem] leading-[1.02] tracking-[-0.03em] text-[var(--fg)] md:text-[3rem]">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-[var(--muted)] leading-7">
          Stand: 28. März 2026
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className={sectionTitleClass}>Verantwortlicher</h2>
            <div className={copyClass}>
              <p>Yasemin Tekin</p>
              <p>Theodor-Mommsen-Weg 14</p>
              <p>66793 Saarwellingen</p>
              <p>
                E-Mail:{" "}
                <a
                  href={brand.emailLink}
                  className="transition hover:text-[var(--fg)]"
                >
                  {brand.email}
                </a>
              </p>
              <p>Telefon: {brand.phone}</p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitleClass}>Hosting</h2>
            <p className={copyClass}>
              Diese Website wird über Vercel bereitgestellt. Beim Aufruf der
              Website verarbeitet Vercel technisch erforderliche Daten,
              insbesondere IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene
              Inhalte, Referrer, Browserinformationen und Betriebssystemdaten,
              um die Website sicher und stabil auszuliefern.
            </p>
          </section>

          <section>
            <h2 className={sectionTitleClass}>Domain / DNS / Infrastruktur</h2>
            <p className={copyClass}>
              Die Domain wird über STRATO verwaltet. Im Rahmen der DNS- und
              Domain-Infrastruktur können technisch notwendige Verarbeitungen
              stattfinden, die für Erreichbarkeit und sichere Bereitstellung der
              Website erforderlich sind.
            </p>
          </section>

          <section>
            <h2 className={sectionTitleClass}>Server-Logfiles</h2>
            <p className={copyClass}>
              Beim Besuch dieser Website werden Server-Logfiles verarbeitet.
              Dazu gehören insbesondere IP-Adresse, Datum und Uhrzeit des
              Zugriffs, angeforderte Seite, übertragene Datenmenge, Browsertyp,
              Betriebssystem und Referrer. Die Verarbeitung erfolgt zur
              Sicherstellung des technischen Betriebs, zur Fehleranalyse und zur
              Absicherung der Website.
            </p>
          </section>

          <section>
            <h2 className={sectionTitleClass}>Kontaktaufnahme per E-Mail</h2>
            <p className={copyClass}>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben
              ausschließlich zur Bearbeitung Ihrer Anfrage und für mögliche
              Anschlussfragen. Die Verarbeitung erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO sowie, soweit einschlägig, auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className={sectionTitleClass}>Kontaktaufnahme per WhatsApp</h2>
            <p className={copyClass}>
              Sie können auch per WhatsApp mit uns in Kontakt treten. In diesem
              Zusammenhang können insbesondere Ihre Telefonnummer,
              Nachrichteninhalte sowie weitere Kommunikations- und Metadaten
              verarbeitet werden, soweit dies zur Bearbeitung Ihrer Anfrage und
              zur laufenden Kommunikation erforderlich ist.
            </p>
            <p className={copyClass}>
              WhatsApp ist ein Dienst der WhatsApp Ireland Limited. Dabei kann
              eine Verarbeitung von Daten auch auf den Systemen von WhatsApp
              beziehungsweise innerhalb der Unternehmensgruppe Meta erfolgen.
              Bitte nutzen Sie diesen Kommunikationsweg daher nur, wenn Sie mit
              dieser Form der Datenverarbeitung einverstanden sind. Alternativ
              können Sie uns jederzeit per E-Mail an{" "}
              <a
                href={brand.emailLink}
                className="transition hover:text-[var(--fg)]"
              >
                {brand.email}
              </a>{" "}
              kontaktieren.
            </p>
          </section>

          <section>
            <h2 className={sectionTitleClass}>
              Entwicklung und Quellcodeverwaltung
            </h2>
            <p className={copyClass}>
              Für Entwicklung und technische Verwaltung des Projekts kann GitHub
              als Quellcodeverwaltungsplattform eingesetzt werden. Für den
              bloßen Besuch dieser Website erfolgt hierdurch keine direkte
              Datenübermittlung an GitHub durch die Website selbst.
            </p>
          </section>

          <section>
            <h2 className={sectionTitleClass}>Externe Links / Social Media</h2>
            <p className={copyClass}>
              Diese Website enthält externe Links, insbesondere zu Instagram und
              TikTok. Erst beim aktiven Anklicken eines solchen Links werden Sie
              zu der jeweiligen Plattform weitergeleitet. Ab diesem Zeitpunkt
              gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
            </p>
            <div className="mt-3 text-[var(--muted)] leading-7">
              <p>
                Instagram:{" "}
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[var(--fg)]"
                >
                  {instagramLink}
                </a>
              </p>
              <p>
                TikTok:{" "}
                <a
                  href={tiktokLink}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[var(--fg)]"
                >
                  {tiktokLink}
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitleClass}>
              Keine Analyse-Tools / keine Cookies zu Trackingzwecken
            </h2>
            <p className={copyClass}>
              Auf dieser Website sind nach aktuellem Stand keine Analyse- oder
              Trackingdienste wie Google Analytics, Meta Pixel, Hotjar oder
              vergleichbare Tools eingebunden. Es werden auch keine
              Cookie-Banner oder Einwilligungsdienste eingesetzt, da keine
              entsprechenden Trackingmechanismen implementiert sind.
            </p>
          </section>

          <section>
            <h2 className={sectionTitleClass}>Betroffenenrechte</h2>
            <p className={copyClass}>
              Ihnen stehen die Rechte auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
              Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten
              nach Maßgabe der gesetzlichen Vorgaben zu.
            </p>
          </section>

          <section>
            <h2 className={sectionTitleClass}>
              Beschwerderecht bei einer Aufsichtsbehörde
            </h2>
            <p className={copyClass}>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
            </p>
          </section>

          <section>
            <h2 className={sectionTitleClass}>Stand / Aktualisierung</h2>
            <p className={copyClass}>
              Diese Datenschutzerklärung hat den Stand vom 28. März 2026. Wir
              passen sie an, wenn dies aufgrund technischer oder rechtlicher
              Änderungen erforderlich wird.
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-10 inline-block text-sm font-semibold tracking-[0.02em] text-[var(--accent)] transition hover:underline"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
