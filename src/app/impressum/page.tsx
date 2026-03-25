import Link from "next/link";

export const metadata = {
  title: "Impressum | Creamy Catering",
  description: "Impressum von Creamy Catering, mobiler Kaffee- und Matcha-Bar Saarland.",
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-12 text-[var(--fg)] md:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--border)] bg-white p-8 shadow-sm">
        <h1 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-[var(--fg)]">
          Impressum
        </h1>
        <p className="mt-4">Creamy Catering</p>
        <p>Yasemin Tekin</p>
        <p>Theodor-Mommsen-Weg 14</p>
        <p>66793 Saarwellingen</p>
        <p>Telefon: +49 1522 3971744</p>
        <p>E-Mail: kontakt@creamy-catering.de</p>
        <p className="mt-6 text-sm text-[var(--muted)]">Keine USt-Id vorhanden.</p>
        <Link href="/" className="mt-8 inline-block text-sm font-semibold tracking-[0.02em] text-[var(--accent)] hover:underline">
          ← Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
