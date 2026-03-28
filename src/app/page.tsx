"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent } from "react";
import { sections, siteContent } from "@/lib/media-map";

const navItems = [
  { href: "#about", label: "Über" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#events", label: "Events" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
];

const eventTags = [
  "Business-Events",
  "Firmenveranstaltungen",
  "Hochzeiten",
  "Messen",
  "Pop-up-Events",
  "Sportveranstaltungen",
  "Private Feiern",
];

const socialCards = [
  {
    title: "Instagram",
    handle: "@creamy_catering",
    text: "Aktuelle Eindrücke von Events, Drinks, Aufbau und vielen kleinen Details.",
    href: siteContent.instagramLink,
    tone: "Aktuelle Eindrücke",
  },
  {
    title: "TikTok",
    handle: "@creamy4170",
    text: "Kurze Einblicke hinter die Bar, vom Aufbau bis zu den fertigen Drinks.",
    href: siteContent.tiktokLink,
    tone: "Blicke hinter die Bar",
  },
];

const footerLinks = [
  { href: siteContent.instagramLink, label: "Instagram", external: true },
  { href: siteContent.tiktokLink, label: "TikTok", external: true },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

const founderStory = [
  "Ich bin 31 Jahre alt, wohne in Saarlouis und bin die Gründerin von Creamy Catering.",
  "Ursprünglich habe ich einen technischen Beruf erlernt. Mit der Zeit wurde mir aber klar, dass mich die Arbeit mit gutem Specialty Coffee, hochwertigen Produkten und wechselnden Events deutlich mehr erfüllt als jeden Tag das Gleiche zu tun.",
  "Meine Leidenschaft für guten Specialty Coffee und Premium Ceremonial Matcha hat sich über viele Jahre entwickelt, vor allem auf Reisen. Dort habe ich immer wieder erlebt, wie sehr Qualität den Unterschied macht und wie ein besonderer Genussmoment Menschen verbindet.",
  "Genau aus dieser Begeisterung heraus ist Creamy Catering entstanden: als mobiles Cateringkonzept, das hochwertigen Specialty Coffee, Premium Ceremonial Matcha und moderne Food-Ideen miteinander verbindet und sich in unterschiedlichste Veranstaltungen integrieren lässt.",
  "Ich begleite heute Business-Events, Firmenveranstaltungen, Hochzeiten, Pop-up-Events und Sportveranstaltungen. Dabei lege ich großen Wert auf Qualität, sorgfältig ausgewählte Produkte, eine ästhetische Präsentation und eine detailverliebte Umsetzung.",
  "Privat bin ich Mama von zwei Jungs und Ehefrau. Weil ich selbst Zöliakie habe, ist mir ein bewusster Umgang mit Lebensmitteln besonders wichtig. Ich liebe das Meer, praktiziere gerne Yoga, habe eine Schwäche für Salted-Caramel-Matcha und freue mich immer wieder darüber, mit Creamy Catering besondere Genussmomente zu schaffen, an die sich Gäste gern erinnern.",
];

const bagelVariants = [
  "Lachs-Bagel mit Frischkäse, Räucherlachs, Zwiebeln, Kopfsalat und Rucola",
  "Tomate-Mozzarella-Bagel mit Pesto, Mozzarella, Tomaten, Basilikum und Balsamico",
  "Thunfisch-Bagel mit hausgemachter Thunfisch-Sriracha-Creme, Sriracha-Mayonnaise, Tomaten, Kopfsalat und Rucola",
  "Veganer Bagel mit Kichererbsen-Hummus, Avocado, Kopfsalat und Rucola",
];

export default function Home() {
  const { images, brand } = siteContent;

  const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="top" className="min-h-screen bg-[var(--background)] text-[var(--fg)]">
      <header className="sticky top-0 z-50 px-3 pt-2 md:px-6 md:pt-3">
        <div className="mx-auto max-w-7xl rounded-[1.15rem] border border-white/48 bg-[rgba(251,245,241,0.58)] shadow-[0_10px_26px_rgba(80,57,48,0.05)] backdrop-blur-lg md:rounded-[1.45rem]">
          <div className="flex items-center justify-between gap-3 px-3 py-2 md:px-5 md:py-3">
            <Link
              href="/"
              scroll={false}
              onClick={handleBrandClick}
              className="flex min-w-0 items-center gap-2.5 md:gap-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.8rem] border border-white/68 bg-white/84 p-1.5 shadow-[0_6px_16px_rgba(80,57,48,0.06)] md:h-11 md:w-11 md:rounded-[0.95rem]">
                <Image
                  src={siteContent.logo}
                  alt="Creamy Catering Logo"
                  width={56}
                  height={56}
                  className="h-auto max-h-full w-auto max-w-full object-contain"
                  sizes="56px"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[0.54rem] uppercase tracking-[0.14em] text-[var(--accent-strong)] md:text-[0.62rem] md:tracking-[0.2em]">
                  Ceremonial Matcha & Specialty Coffee Bar
                </p>
                <p className="truncate text-[0.94rem] font-semibold tracking-[0.01em] text-[var(--fg)] md:text-[1.06rem]">
                  Creamy Catering
                </p>
                <p className="hidden truncate text-[0.67rem] text-[var(--muted)] md:block md:text-[0.72rem]">
                  Saarland · Saarlouis · Saarbrücken
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition duration-200 hover:text-[var(--fg)]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden shrink-0 items-center gap-2 md:flex">
              <a
                href={siteContent.emailLink}
                className="hidden rounded-full border border-white/65 bg-white/72 px-3 py-1.5 text-[0.76rem] font-medium text-[var(--fg)] transition hover:bg-white md:inline-flex"
              >
                E-Mail
              </a>
              <a
                href="#kontakt"
                className="premium-button px-3 py-1.5 text-[0.66rem] md:h-8 md:min-w-0 md:rounded-[999px] md:px-2 md:py-0 md:text-[0.56rem] md:font-semibold md:tracking-[0.045em]"
              >
                Event anfragen
              </a>
            </div>

            <details className="group relative md:hidden">
              <summary className="flex h-9 w-9 list-none items-center justify-center rounded-full border border-[var(--border)] bg-white/72 text-[var(--fg)] shadow-[0_6px_16px_rgba(80,57,48,0.05)] marker:content-none">
                <span className="sr-only">Menü öffnen</span>
                <span className="flex w-4 flex-col gap-1">
                  <span className="block h-px w-full bg-current transition group-open:translate-y-[5px] group-open:rotate-45" />
                  <span className="block h-px w-full bg-current transition group-open:opacity-0" />
                  <span className="block h-px w-full bg-current transition group-open:-translate-y-[5px] group-open:-rotate-45" />
                </span>
              </summary>

              <div className="absolute right-0 top-[calc(100%+0.5rem)] w-[min(17rem,calc(100vw-1.5rem))] rounded-[1.2rem] border border-white/60 bg-[rgba(255,252,249,0.94)] p-3 shadow-[0_16px_32px_rgba(80,57,48,0.09)] backdrop-blur-xl">
                <div className="grid gap-1">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-[0.95rem] px-3 py-2 text-sm text-[var(--fg)] transition hover:bg-[var(--surface)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="mt-3 border-t border-[var(--border)] pt-3">
                  <a href={siteContent.phoneLink} className="premium-button w-full justify-center">
                    Anfrage
                  </a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden pt-2 md:pt-3">
        <section className="relative min-h-[35rem] overflow-hidden pt-8 md:min-h-[41rem] md:pt-9 lg:min-h-[45rem] lg:pt-12">
          <video
            src={siteContent.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-[center_18%] md:object-[center_28%] lg:object-[center_26%]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,17,14,0.06)_0%,rgba(24,17,14,0.02)_24%,rgba(24,17,14,0.14)_68%,rgba(24,17,14,0.34)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_25%),linear-gradient(90deg,rgba(16,12,10,0.06)_0%,rgba(16,12,10,0.02)_34%,rgba(16,12,10,0.01)_100%)]" />

          <div className="relative mx-auto flex min-h-[35rem] max-w-7xl flex-col justify-end px-4 pb-7 pt-12 md:min-h-[41rem] md:px-8 md:pb-10 md:pt-[3.75rem] lg:min-h-[45rem] lg:pb-12 lg:pt-[4.5rem]">
            <div className="max-w-[36rem] rounded-[1.35rem] border border-white/10 bg-[rgba(22,16,13,0.08)] px-4 py-4 text-white shadow-[0_14px_28px_rgba(20,14,12,0.06)] backdrop-blur-[2px] md:rounded-[1.9rem] md:px-7 md:py-7">
              <p className="max-w-lg text-[0.6rem] uppercase tracking-[0.18em] text-white/74 md:text-[0.7rem] md:tracking-[0.24em]">
                Mobiles Specialty-Coffee-, Ceremonial-Matcha- & Bagel-Catering für Events
              </p>
              <h1 className="mt-3 max-w-[11ch] font-serif text-[2.1rem] leading-[0.96] tracking-[-0.03em] text-white md:mt-4 md:text-[4rem] lg:text-[4.8rem]">
                Specialty Coffee und Ceremonial Matcha für stilvolle Events.
              </h1>
              <p className="mt-3.5 max-w-[31rem] text-[0.92rem] leading-relaxed text-white/80 md:mt-4 md:text-[1.04rem] md:leading-[1.8]">
                Mobile Bar, hochwertige Produkte und eine ästhetische Präsentation für
                Business-Events, Hochzeiten, Pop-up-Events, Messen und private Feiern.
              </p>

              <div className="mt-5 hidden flex-col gap-2.5 sm:flex-row sm:gap-2.5 md:flex">
                <a href={siteContent.phoneLink} className="premium-button">
                  Termin anfragen
                </a>
                <a
                  href={siteContent.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-button-secondary border-white/16 bg-white/8 text-white hover:bg-white/14"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-base pt-7 pb-10 md:pt-9 md:pb-14">
          <div
            id="about"
            className="section-anchor mx-auto grid max-w-7xl gap-7 border-t border-[var(--border)] px-4 pt-7 md:gap-8 md:px-8 md:pt-9 lg:grid-cols-[1.04fr_0.96fr] lg:items-start"
          >
            <div className="order-1 grid content-start gap-4">
              <div className="relative min-h-[23rem] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[0_20px_50px_rgba(79,57,48,0.07)] md:min-h-[29rem] lg:min-h-[38rem]">
                <Image
                  src={images.founderPortrait}
                  alt="Yasemin Tekin von Creamy Catering"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />
              </div>
              <div className="relative hidden min-h-[12rem] overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-white shadow-[0_14px_34px_rgba(79,57,48,0.05)] lg:block lg:min-h-[15rem]">
                <Image
                  src={images.founderWorking}
                  alt="Yasemin Tekin bei der Zubereitung von Specialty Coffee und Ceremonial Matcha"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="38vw"
                />
              </div>
            </div>

            <div className="order-2">
              <p className="section-kicker">Über mich</p>
              <h2 className="section-title mt-4 max-w-[13ch]">
                Ich bin Yasemin und begleite Events mit Herz, Qualität und Stil.
              </h2>
              <div className="mt-5 max-w-[38rem] space-y-3.5">
                {founderStory.slice(0, 3).map((paragraph) => (
                  <p key={paragraph} className="section-copy max-w-[34rem] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="relative mt-5 min-h-[13rem] overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-white shadow-[0_14px_34px_rgba(79,57,48,0.05)] md:mt-6 md:min-h-[16rem] lg:hidden">
                <Image
                  src={images.founderWorking}
                  alt="Yasemin Tekin bei der Zubereitung von Specialty Coffee und Ceremonial Matcha"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
              <div className="mt-5 max-w-[38rem] space-y-3.5 md:mt-6">
                {founderStory.slice(3).map((paragraph) => (
                  <p key={paragraph} className="section-copy max-w-[34rem] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-base py-[3.5rem] md:py-[5.1rem]">
          <div id="leistungen" className="section-anchor mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div>
                <p className="section-kicker">Über Creamy Catering</p>
                <h2 className="section-title mt-4 max-w-[14ch]">
                  Hochwertige Produkte, professionelle Zubereitung und herzliche Zusammenarbeit.
                </h2>
                <p className="section-copy mt-5 max-w-[33rem] leading-relaxed">
                  Bei Creamy Catering verbinden wir hochwertige Produkte, professionelle
                  Zubereitung und eine herzliche Zusammenarbeit. Unser Ziel ist es, Events
                  kulinarisch zu begleiten und ein Erlebnis für Gäste zu schaffen.
                </p>
                <p className="section-copy mt-4 max-w-[33rem] leading-relaxed">
                  Für Eventplaner bedeutet das eine zuverlässige Zusammenarbeit mit einem
                  Cateringpartner, der strukturiert arbeitet, Frische ernst nimmt und mit
                  ästhetischer Präsentation professionell unterstützt.
                </p>
                <div className="relative mt-6 min-h-[13rem] overflow-hidden rounded-[1.7rem] border border-[var(--border)] bg-white shadow-[0_14px_34px_rgba(79,57,48,0.05)] md:min-h-[15rem]">
                  <Image
                    src={images.brandTinsWide}
                    alt="Branding- und Produktdetail von Creamy Catering"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
              </div>

              <div className="grid gap-3.5 md:grid-cols-2">
                {sections.services.map((service, index) => (
                  <article
                    key={service.title}
                    className={`rounded-[1.75rem] border border-[var(--border)] p-5 shadow-[0_14px_36px_rgba(79,57,48,0.04)] md:p-6 ${
                      index === 0
                        ? "bg-[linear-gradient(180deg,#fffaf6_0%,#f8f0ea_100%)] md:col-span-2"
                        : index === sections.services.length - 1
                          ? "bg-white md:col-span-2"
                          : "bg-white"
                    }`}
                  >
                    <span className="inline-flex rounded-full border border-[var(--border-strong)] px-3 py-1 text-[0.66rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                      {service.badge}
                    </span>
                    <h3 className="mt-4 font-serif text-[1.52rem] leading-tight text-[var(--fg)] md:text-[1.65rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{service.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-base bg-[var(--surface)] py-[3.4rem] md:py-[4.8rem]">
          <div id="events" className="section-anchor mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div>
                <p className="section-kicker">Einsatzbereiche</p>
                <h2 className="section-title mt-4 max-w-lg">
                  Passend für Feiern, Firmenevents und besondere Anlässe.
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {eventTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="relative mt-6 min-h-[13rem] overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white shadow-[0_14px_34px_rgba(79,57,48,0.05)] md:min-h-[15rem]">
                  <Image
                    src={images.founderWorking}
                    alt="Mobile Bar von Creamy Catering auf einem Event"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
              </div>

              <div className="grid gap-3.5 md:grid-cols-2">
                {sections.useCases.map((item, index) => (
                  <article
                    key={item.title}
                    className={`rounded-[1.75rem] border border-[var(--border)] p-5 shadow-[0_14px_36px_rgba(79,57,48,0.04)] md:p-6 ${
                      index === sections.useCases.length - 1
                        ? "bg-white md:col-span-2"
                        : index === 1 || index === 2
                          ? "bg-[var(--card-soft)]"
                          : "bg-white"
                    }`}
                  >
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                      Case {index + 1}
                    </p>
                    <h3 className="mt-4 font-serif text-[1.48rem] leading-tight text-[var(--fg)] md:text-[1.6rem]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-base py-[3.4rem] md:py-[4.9rem]">
          <div className="mx-auto grid max-w-7xl gap-6 border-t border-[var(--border)] px-4 pt-7 md:gap-7 md:px-8 md:pt-9 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <div>
              <p className="section-kicker">Qualitätsversprechen</p>
              <h2 className="section-title mt-4 max-w-[14ch]">
                Premium Produkte, frische Zubereitung und ein professioneller Ablauf.
              </h2>
              <div className="mt-5 max-w-[34rem] space-y-4">
                <p className="section-copy max-w-[31rem] leading-relaxed">
                  Unsere Kaffeespezialitäten bereiten wir mit biozertifizierten
                  Specialty-Kaffeebohnen zu, die wir von einer ausgewählten Rösterei beziehen und
                  regelmäßig frisch rösten lassen.
                </p>
                <p className="section-copy max-w-[31rem] leading-relaxed">
                  Neben Specialty Coffee spielt Premium Ceremonial Matcha aus erster Ernte aus Japan
                  eine zentrale Rolle. Live-Zubereitung, Verlässlichkeit und eine ästhetische
                  Präsentation machen das Konzept vor Ort komplett.
                </p>
              </div>
              <div className="relative mt-6 min-h-[14rem] overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white shadow-[0_14px_34px_rgba(79,57,48,0.05)] sm:hidden">
                <Image
                  src={images.barWide}
                  alt="Bar-Setup von Creamy Catering mit Specialty Coffee und Ceremonial Matcha"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="100vw"
                />
              </div>

              <div className="mt-6 space-y-2.5">
                {sections.qualityFeatures.map((quality) => (
                  <div
                    key={quality.title}
                    className="rounded-[1.45rem] border border-[var(--border)] bg-white p-5 shadow-[0_10px_26px_rgba(79,57,48,0.04)]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                      <div>
                        <p className="text-base font-medium text-[var(--fg)]">{quality.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{quality.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden gap-3.5 sm:grid sm:grid-cols-[1.02fr_0.98fr] lg:self-start">
              <div className="relative min-h-[20rem] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[0_20px_50px_rgba(79,57,48,0.07)] md:min-h-[23rem] lg:min-h-[26rem]">
                <Image
                  src={images.barWide}
                  alt="Creamy Catering Bar-Setup"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 34vw"
                />
              </div>
              <div className="grid content-start gap-3.5 sm:pt-2 lg:pt-3">
                <div className="relative min-h-[11rem] overflow-hidden rounded-[1.7rem] border border-[var(--border)] bg-white md:min-h-[12rem]">
                  <Image
                    src={images.matchaFlatlay}
                    alt="Ceremonial Matcha Flatlay von Creamy Catering"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 24vw"
                  />
                </div>
                <div className="relative min-h-[9rem] overflow-hidden rounded-[1.7rem] border border-[var(--border)] bg-white">
                  <Image
                    src={images.coffeeDetail}
                    alt="Specialty Coffee Detail von Creamy Catering"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 22vw"
                  />
                </div>
                <div className="rounded-[1.7rem] border border-[var(--border)] bg-[var(--surface-strong)] p-5 md:p-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                    Vor Ort
                  </p>
                  <p className="mt-4 font-serif text-[1.55rem] leading-tight text-[var(--fg)] md:text-[1.68rem]">
                    Frisch gebrüht, fein abgestimmt und zuverlässig serviert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-base bg-[var(--surface)] py-[3.6rem] md:py-[5rem]">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="section-kicker">Food & Drinks</p>
                <h2 className="section-title mt-4 max-w-[14ch]">
                  Drinks, Bagels und moderne Food-Ideen aus einem stimmigen Konzept.
                </h2>
              </div>
              <p className="section-copy max-w-[31rem] leading-relaxed">
                Heiß oder kalt, herzhaft oder leicht: Das Angebot ist so aufgebaut, dass es sich in
                unterschiedliche Eventformate einfügt und visuell wie geschmacklich zusammenpasst.
              </p>
            </div>

            <div className="mt-8 grid gap-3.5 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
              <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[0_20px_50px_rgba(79,57,48,0.07)]">
                <div className="grid">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--card-soft)] lg:aspect-[3/2]">
                    <Image
                      src={images.bagelsBoard}
                      alt="Bagel-Auswahl von Creamy Catering"
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 56vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-5 md:p-6">
                    <span className="inline-flex w-fit rounded-full border border-[var(--border)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                      Bagels
                    </span>
                    <h3 className="mt-4 max-w-[12ch] font-serif text-[1.78rem] leading-tight text-[var(--fg)] md:text-[1.92rem]">
                      Frisch zubereitete Bagels aus regionaler Bäckerei.
                    </h3>
                    <p className="mt-4 max-w-[28rem] text-sm leading-relaxed text-[var(--muted)]">
                      Vor jedem Event frisch vorbereitet und geliefert. Als perfekte Ergänzung zu
                      Specialty Coffee und Ceremonial Matcha in vier beliebten Variationen:
                    </p>
                    <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-[var(--muted)]">
                      {bagelVariants.map((variant) => (
                        <li key={variant}>{variant}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              <div className="grid gap-3.5">
                <div className="grid gap-3.5 xl:grid-cols-2">
                  <article className="grid overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white shadow-[0_14px_36px_rgba(79,57,48,0.04)]">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[var(--card-soft)]">
                      <Image
                        src={images.matchaLineupWide}
                        alt="Premium Ceremonial Matcha und Specialty Coffee von Creamy Catering"
                        fill
                        className="object-cover object-center"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 42vw, 20vw"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-5">
                      <h3 className="max-w-[14ch] font-serif text-[1.38rem] leading-tight text-[var(--fg)] md:text-[1.48rem]">
                        Specialty Coffee & Ceremonial Matcha Bar
                      </h3>
                      <p className="mt-3 max-w-[24rem] text-sm leading-relaxed text-[var(--muted)]">
                        Unsere Baristas bereiten Kaffeespezialitäten direkt vor Ort frisch zu, von
                        Espresso bis Cappuccino. Dazu kommen Iced Coffee, Iced Matcha und weitere
                        kalte Getränke für warme Tage und flexible Eventformate.
                      </p>
                    </div>
                  </article>
                  <article className="grid overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white shadow-[0_14px_36px_rgba(79,57,48,0.04)]">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[var(--card-soft)]">
                      <Image
                        src={images.espressoWide}
                        alt="Specialty Coffee an der Creamy Catering Bar"
                        fill
                        className="object-cover object-[center_55%]"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 42vw, 20vw"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-5">
                      <h3 className="max-w-[12ch] font-serif text-[1.38rem] leading-tight text-[var(--fg)] md:text-[1.48rem]">
                        Heiße und kalte Drinks
                      </h3>
                      <p className="mt-3 max-w-[24rem] text-sm leading-relaxed text-[var(--muted)]">
                        Unsere Getränke bieten wir heiß und kalt an, sodass sich das Angebot sowohl
                        für Indoor-Events als auch für Sommerveranstaltungen, Sportevents und
                        Pop-up-Events eignet.
                      </p>
                    </div>
                  </article>
                </div>

                <article className="overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white shadow-[0_14px_36px_rgba(79,57,48,0.04)]">
                  <div className="grid md:grid-cols-[0.42fr_0.58fr]">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--surface-strong)] md:h-full md:min-h-[15.5rem] md:aspect-auto">
                      <Image
                        src={sections.menuHighlights[2].image}
                        alt="Granola Bowls und Add-ons von Creamy Catering"
                        fill
                        className="object-cover object-[center_42%]"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 18vw, 16vw"
                      />
                    </div>
                    <div className="flex flex-col justify-center gap-4 p-5 md:p-6">
                      <span className="inline-flex w-fit rounded-full border border-[var(--border)] px-3 py-1 text-[0.66rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                        Add-ons
                      </span>
                      <h3 className="max-w-[14ch] font-serif text-[1.34rem] leading-tight text-[var(--fg)] md:text-[1.44rem]">
                        Granola Bowls, Snacks und stilvolle Extras.
                      </h3>
                      <p className="max-w-[26rem] text-sm leading-relaxed text-[var(--muted)]">
                        Granola Bowls mit Granola, griechischem Joghurt, Quark,
                        Heidelbeerkompott und saisonalen Früchten eignen sich besonders für
                        Empfangs-, Business- und Sportveranstaltungen. Auf Wunsch kommen Flower Boxen
                        oder weitere kleine Kleinigkeiten dazu.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section-base py-[3.5rem] md:py-[5rem]">
          <div id="galerie" className="section-anchor mx-auto max-w-7xl px-4 md:px-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="section-kicker">Galerie</p>
                <h2 className="section-title mt-4 max-w-2xl">
                  Ein paar Eindrücke von Creamy Catering.
                </h2>
              </div>
              <p className="section-copy max-w-md">
                Hier bekommt ihr ein Gefühl für die Bar, die Getränke und die Atmosphäre vor Ort.
              </p>
            </div>

            <div className="mt-8 grid gap-3.5 md:grid-cols-12 md:grid-rows-2">
              <div className="relative min-h-[20rem] overflow-hidden rounded-[1.9rem] border border-[var(--border)] md:col-span-5 md:row-span-2">
                <Image
                  src={images.founderWorking}
                  alt="Yasemin Tekin am Creamy Catering Setup"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="relative min-h-[14rem] overflow-hidden rounded-[1.9rem] border border-[var(--border)] md:col-span-4">
                <Image
                  src={images.matchaLineupWide}
                  alt="Ceremonial Matcha Drinks von Creamy Catering"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 32vw"
                />
              </div>
              <div className="relative min-h-[14rem] overflow-hidden rounded-[1.9rem] border border-[var(--border)] md:col-span-3">
                <Image
                  src={images.espressoPortrait}
                  alt="Espresso-Detail an der Maschine"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 24vw"
                />
              </div>
              <div className="relative min-h-[14rem] overflow-hidden rounded-[1.9rem] border border-[var(--border)] md:col-span-3">
                <Image
                  src={images.brandTinPortrait}
                  alt="Creamy Branding-Detail"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 24vw"
                />
              </div>
              <div className="relative min-h-[14rem] overflow-hidden rounded-[1.9rem] border border-[var(--border)] md:col-span-4">
                <Image
                  src={images.bagelsLifestyle}
                  alt="Bagel-Lifestyle-Aufnahme von Creamy Catering"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 32vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-base bg-[var(--surface)] py-[3.5rem] md:py-[5rem]">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="section-kicker">Social Media</p>
                <h2 className="section-title mt-4 max-w-lg">
                  Mehr Eindrücke von Creamy auf Instagram und TikTok.
                </h2>
                <p className="section-copy mt-5 max-w-md leading-relaxed">
                  Dort zeigen wir aktuelle Eindrücke von Events, neue Drinks und kleine Einblicke in
                  den Aufbau und die Arbeit an der Bar.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {sections.socialMoments.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-3.5 xl:grid-cols-[0.78fr_1.22fr]">
                <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-1">
                  <div className="relative min-h-[12rem] overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white">
                    <Image
                      src={images.coffeeDetail}
                      alt="Specialty Coffee Detail von Creamy Catering"
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 1280px) 100vw, 20vw"
                    />
                  </div>
                  <div className="relative min-h-[12rem] overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white">
                    <Image
                      src={images.flowerBoxPortrait}
                      alt="Flower Box und Ceremonial Matcha Detail"
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 1280px) 100vw, 20vw"
                    />
                  </div>
                </div>

                <div className="grid gap-3.5">
                  {socialCards.map((card) => (
                    <a
                      key={card.title}
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group rounded-[1.9rem] border border-[var(--border)] bg-white p-5 shadow-[0_14px_36px_rgba(79,57,48,0.04)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_48px_rgba(79,57,48,0.08)] md:p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--accent-strong)]">
                            {card.tone}
                          </p>
                          <h3 className="mt-4 font-serif text-[1.65rem] leading-tight text-[var(--fg)] md:text-[1.8rem]">
                            {card.title}
                          </h3>
                        </div>
                        <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)] transition group-hover:border-[var(--border-strong)]">
                          Open
                        </span>
                      </div>
                      <p className="mt-4 text-base text-[var(--fg)]">{card.handle}</p>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">{card.text}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-base py-[3.6rem] md:py-[5rem]">
          <div id="kontakt" className="section-anchor mx-auto max-w-7xl px-4 md:px-8">
            <div className="overflow-hidden rounded-[2.25rem] border border-[var(--border)] bg-[linear-gradient(135deg,#fffaf6_0%,#f5ebe5_52%,#efe2db_100%)] shadow-[0_24px_68px_rgba(79,57,48,0.08)]">
              <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[0.98fr_1.02fr] lg:p-9">
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="section-kicker">Kontakt</p>
                    <h2 className="section-title mt-4 max-w-[15ch]">
                      Planen Sie ein Event und suchen mobiles Catering mit Specialty Coffee und
                      Ceremonial Matcha?
                    </h2>
                    <div className="mt-5 max-w-[36rem] space-y-4 text-[var(--fg-soft)]">
                      <p className="section-copy max-w-md leading-relaxed text-[var(--fg-soft)]">
                        Planen Sie ein Event, eine Hochzeit, eine Firmenveranstaltung, ein
                        Pop-up-Event oder eine Sportveranstaltung und suchen ein mobiles Catering
                        mit hochwertiger Specialty-Coffee- und Ceremonial-Matcha-Bar?
                      </p>
                      <p className="section-copy max-w-md leading-relaxed text-[var(--fg-soft)]">
                        Wir beraten Sie gerne persönlich und entwickeln gemeinsam ein Konzept, das
                        perfekt zu Ihrer Veranstaltung passt.
                      </p>
                    </div>
                  </div>

                  <div className="mt-7">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a href={siteContent.phoneLink} className="premium-button">
                        Jetzt anrufen
                      </a>
                      <a
                        href={siteContent.whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="premium-button-secondary bg-white/68"
                      >
                        WhatsApp öffnen
                      </a>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/60 bg-white/55 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                        {brand.serviceArea}
                      </span>
                      <span className="rounded-full border border-white/60 bg-white/55 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-[var(--muted)]">
                        Persönliche Abstimmung
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3.5">
                  <div className="relative mt-2 min-h-[12rem] overflow-hidden rounded-[1.7rem] border border-white/65 bg-white/82 shadow-[0_10px_30px_rgba(79,57,48,0.04)] md:mt-0">
                    <Image
                      src={images.brandTinsWide}
                      alt="Creamy Catering Set-up mit Specialty Coffee und Ceremonial Matcha"
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 34vw"
                    />
                  </div>
                  <div className="grid gap-3.5 md:grid-cols-2">
                    <a
                      href={siteContent.phoneLink}
                      className="flex min-h-[10.75rem] flex-col justify-between rounded-[1.7rem] border border-white/65 bg-white/82 p-5 shadow-[0_10px_30px_rgba(79,57,48,0.04)] backdrop-blur md:p-6"
                    >
                      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                        Telefon
                      </p>
                      <p className="font-serif text-[1.36rem] leading-tight text-[var(--fg)] md:text-[1.52rem]">
                        <span className="whitespace-nowrap">+49 1522 3971744</span>
                      </p>
                    </a>
                    <a
                      href={siteContent.emailLink}
                      className="flex min-h-[10.75rem] flex-col justify-between rounded-[1.7rem] border border-white/65 bg-white/82 p-5 shadow-[0_10px_30px_rgba(79,57,48,0.04)] backdrop-blur md:p-6"
                    >
                      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                        E-Mail
                      </p>
                      <p className="text-[0.98rem] leading-7 text-[var(--fg)] md:text-[1.02rem]">
                        kontakt@creamy-catering.de
                      </p>
                    </a>
                  </div>

                  <a
                    href={siteContent.whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-[10.75rem] flex-col justify-between rounded-[1.7rem] border border-white/65 bg-[rgba(255,255,255,0.72)] p-5 shadow-[0_10px_30px_rgba(79,57,48,0.04)] backdrop-blur md:p-6"
                  >
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                      WhatsApp
                    </p>
                    <div>
                      <p className="font-serif text-[1.4rem] leading-tight text-[var(--fg)] md:text-[1.5rem]">
                        Schnell erreichbar per WhatsApp.
                      </p>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
                        Praktisch für erste Fragen, Terminabsprachen oder eine kurze Rückmeldung.
                      </p>
                    </div>
                  </a>

                  <div className="rounded-[1.7rem] border border-white/65 bg-[rgba(255,255,255,0.72)] p-5 shadow-[0_10px_30px_rgba(79,57,48,0.04)] backdrop-blur md:p-6">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">
                      Standort
                    </p>
                    <p className="mt-4 text-[0.98rem] leading-7 text-[var(--fg)]">
                      Theodor-Mommsen-Weg 14
                      <br />
                      66793 Saarwellingen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[rgba(255,255,255,0.74)] py-8 md:py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-[1.1fr_0.9fr_0.9fr] md:px-8">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              Creamy Catering
            </p>
            <p className="mt-3 font-serif text-[1.55rem] leading-tight text-[var(--fg)]">
              Mobile Specialty Coffee & Ceremonial Matcha Bar für Events im Saarland.
            </p>
          </div>

          <div className="text-sm leading-7 text-[var(--muted)]">
            <p>{brand.owner}</p>
            <p>{siteContent.address}</p>
            <p>{brand.serviceArea}</p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--muted)] md:justify-end">
            {footerLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[var(--fg)]"
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} href={item.href} className="transition hover:text-[var(--fg)]">
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </footer>

      <div className="h-[calc(5.5rem+env(safe-area-inset-bottom))] md:hidden" aria-hidden="true" />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[rgba(91,70,62,0.08)] bg-[rgba(255,249,244,0.84)] px-4 pt-2 pb-[calc(env(safe-area-inset-bottom)+0.45rem)] backdrop-blur-lg md:hidden">
        <div className="mobile-sticky-cta-shell">
          <div className="mobile-sticky-cta-row">
            <a href={siteContent.phoneLink} className="premium-button mobile-sticky-cta-button px-3 py-2.5 text-[0.74rem]">
              Anrufen
            </a>
            <a
              href={siteContent.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="premium-button-secondary mobile-sticky-cta-button bg-white/76 px-3 py-2.5 text-[0.74rem]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
