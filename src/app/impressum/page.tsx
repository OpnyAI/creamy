import type { Metadata } from "next";
import Link from "next/link";
import { siteContent } from "@/lib/media-map";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Creamy Catering in Saarwellingen.",
  alternates: {
    canonical: "/impressum",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const sectionTitleClass =
  "font-serif text-[1.35rem] leading-tight tracking-[-0.02em] text-[var(--fg)]";
const copyClass = "mt-3 text-[var(--muted)] leading-7";

export default function Impressum() {
  const { brand } = siteContent;

  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-12 text-[var(--fg)] md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[0_16px_38px_rgba(79,57,48,0.05)] md:p-10">
        <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--accent-strong)]">
          Rechtliches
        </p>
        <h1 className="mt-4 font-serif text-[2.2rem] leading-[1.02] tracking-[-0.03em] text-[var(--fg)] md:text-[3rem]">
          Impressum
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--muted)] leading-7">
          Angaben gemäß § 5 DDG für das Einzelunternehmen Creamy Catering.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className={sectionTitleClass}>Angaben gemäß § 5 DDG</h2>
            <div className={copyClass}>
              <p>Creamy Catering</p>
              <p>Inhaberin: Yasemin Tekin</p>
              <p>Einzelunternehmen</p>
              <p>Theodor-Mommsen-Weg 14</p>
              <p>66793 Saarwellingen</p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitleClass}>Kontakt</h2>
            <div className={copyClass}>
              <p>Telefon: {brand.phone}</p>
              <p>
                E-Mail:{" "}
                <a
                  href={brand.emailLink}
                  className="transition hover:text-[var(--fg)]"
                >
                  {brand.email}
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitleClass}>Verantwortlich für den Inhalt</h2>
            <div className={copyClass}>
              <p>Yasemin Tekin</p>
              <p>Theodor-Mommsen-Weg 14</p>
              <p>66793 Saarwellingen</p>
            </div>
          </section>

          <section>
            <h2 className={sectionTitleClass}>EU-Streitschlichtung</h2>
            <p className={copyClass}>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[var(--fg)]"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className={sectionTitleClass}>
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className={copyClass}>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
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
