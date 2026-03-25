import Link from "next/link";

export const metadata = {
  title: "Datenschutz | Creamy Catering",
  description: "Datenschutzerklärung für Creamy Catering ohne Kontaktformular.",
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-12 text-[var(--fg)] md:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
        <h1 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-[var(--fg)]">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-[var(--muted)]">Stand: März 2026</p>
        <section className="mt-6">
          <h2 className="font-serif text-xl leading-tight tracking-[-0.02em] text-[var(--fg)]">
            1. Verantwortliche Stelle
          </h2>
          <p className="mt-2">Creamy Catering</p>
          <p>Yasemin Tekin</p>
          <p>Theodor-Mommsen-Weg 14</p>
          <p>66793 Saarwellingen</p>
          <p>kontakt@creamy-catering.de</p>
        </section>
        <section className="mt-6">
          <h2 className="font-serif text-xl leading-tight tracking-[-0.02em] text-[var(--fg)]">
            2. Allgemeines
          </h2>
          <p className="mt-2 text-[var(--muted)]">Diese Website dient zur Information über unser Angebot für mobiles Catering.</p>
        </section>
        <section className="mt-6">
          <h2 className="font-serif text-xl leading-tight tracking-[-0.02em] text-[var(--fg)]">
            3. Hosting
          </h2>
          <p className="mt-2 text-[var(--muted)]">Hosting und technische Bereitstellung erfolgen über Next.js / Vercel. Zur Sicherheit werden Server-Logfiles verarbeitet.</p>
        </section>
        <section className="mt-6">
          <h2 className="font-serif text-xl leading-tight tracking-[-0.02em] text-[var(--fg)]">
            4. Kontaktaufnahme
          </h2>
          <p className="mt-2 text-[var(--muted)]">Bei Kontakt per E-Mail, Telefon oder WhatsApp speichern wir nur die notwendigen Angaben zur Bearbeitung der Anfrage.</p>
        </section>
        <section className="mt-6">
          <h2 className="font-serif text-xl leading-tight tracking-[-0.02em] text-[var(--fg)]">
            5. Social Media
          </h2>
          <p className="mt-2 text-[var(--muted)]">Links zu Instagram und TikTok sind Weiterleitungen; bei Aufruf gelten deren Datenschutzbestimmungen.</p>
        </section>
        <section className="mt-6">
          <h2 className="font-serif text-xl leading-tight tracking-[-0.02em] text-[var(--fg)]">
            6. Keine Analyse-Tools
          </h2>
          <p className="mt-2 text-[var(--muted)]">Diese Website verwendet keine Tracking- oder Analyse-Tools wie Google Analytics.</p>
        </section>
        <Link href="/" className="mt-8 inline-block text-sm font-semibold tracking-[0.02em] text-[var(--accent)] hover:underline">
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
