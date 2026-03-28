import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: [
    { path: "./fonts/manrope-400.ttf", weight: "400", style: "normal" },
    { path: "./fonts/manrope-500.ttf", weight: "500", style: "normal" },
    { path: "./fonts/manrope-600.ttf", weight: "600", style: "normal" },
    { path: "./fonts/manrope-700.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const dmSerifDisplay = localFont({
  src: [
    {
      path: "./fonts/dm-serif-display-regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-dm-serif-display",
  display: "swap",
  fallback: ["Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Coffee Catering Saarland, Matcha Catering & mobile Kaffeebar mieten | Creamy Catering",
    template: "%s | Creamy Catering",
  },
  description:
    "Creamy Catering bietet hochwertiges Coffee Catering, Matcha Catering und eine mobile Kaffeebar zum Mieten im Saarland. Für Hochzeiten, Business-Events, Firmenveranstaltungen, Messen und private Feiern in Saarlouis, Saarbrücken und Umgebung.",
  keywords: [
    "coffee catering saarland",
    "matcha catering saarland",
    "mobile kaffeebar mieten saarland",
    "specialty coffee catering saarland",
    "kaffeebar für events saarland",
    "mobile kaffeebar saarbrücken",
    "matcha bar mieten saarland",
    "coffee catering hochzeit saarland",
    "coffee catering business events saarland",
  ],
  metadataBase: new URL("https://www.creamy-catering.de"),
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title:
      "Coffee Catering Saarland, Matcha Catering & mobile Kaffeebar | Creamy Catering",
    description:
      "Mobile Kaffeebar mit Specialty Coffee und Ceremonial Matcha für Hochzeiten, Business-Events und Firmenveranstaltungen im Saarland.",
    url: "https://www.creamy-catering.de/",
    siteName: "Creamy Catering",
    locale: "de_DE",
    images: [
      {
        url: "/media/images/IMG_2324.JPG",
        width: 1200,
        height: 630,
        alt: "Mobile Kaffeebar von Creamy Catering im Saarland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Coffee Catering Saarland & mobile Kaffeebar | Creamy Catering",
    description:
      "Coffee Catering, Matcha Catering und mobile Kaffeebar für Events im Saarland, Saarlouis und Saarbrücken.",
    images: ["/media/images/IMG_2324.JPG"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${manrope.variable} ${dmSerifDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
