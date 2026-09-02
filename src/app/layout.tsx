import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-archivo",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-jb",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Turn attention into ownership`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "fitness creator monetization",
    "creator revenue share partner",
    "fitness app development",
    "creator product studio",
    "digital products for coaches",
  ],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} — Turn attention into ownership`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Turn attention into ownership`,
    description: SITE.description,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body className="bg-ink text-bone antialiased">
        <a
          href="#main"
          className="sr-only-focusable fixed left-4 top-4 z-[999] rounded-full bg-volt px-5 py-2 font-mono text-xs uppercase tracking-[0.18em] text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
