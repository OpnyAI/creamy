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
  src: [{ path: "./fonts/dm-serif-display-regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-dm-serif-display",
  display: "swap",
  fallback: ["Times New Roman", "serif"],
});

export const metadata: Metadata = {
  title: "Creamy Catering – Mobiles Specialty Coffee & Ceremonial Matcha Catering Saarland",
  description:
    "Premium mobiles Specialty-Coffee-, Ceremonial-Matcha- und Bagel-Catering für Events im Saarland. Hochzeiten, Business-Events, Messen und private Feiern.",
  metadataBase: new URL("https://www.creamy-catering.de"),
  openGraph: {
    type: "website",
    title: "Creamy Catering – Mobiles Specialty Coffee & Ceremonial Matcha Catering Saarland",
    description:
      "Premium mobiles Specialty-Coffee-, Ceremonial-Matcha- und Bagel-Catering für Events im Saarland.",
    url: "/",
    siteName: "Creamy Catering",
    images: [
      {
        url: "/media/images/IMG_2324.JPG",
        width: 1200,
        height: 630,
        alt: "Creamy Catering mobile Bar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creamy Catering – Mobiles Specialty Coffee & Ceremonial Matcha Catering Saarland",
    description:
      "Premium mobiles Specialty-Coffee-, Ceremonial-Matcha- und Bagel-Catering für Events im Saarland.",
    images: ["/media/images/IMG_2324.JPG"],
  },
  icons: {
    icon: "/favicon.ico",
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
