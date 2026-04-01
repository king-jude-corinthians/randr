import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/shared/WhatsAppFAB";

const geistMono = localFont({
  src: [
    { path: "../node_modules/next/dist/next-devtools/server/font/geist-mono-latin.woff2", weight: "400 800" },
  ],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rnrambulance.ng"),
  title: {
    default: "R&R Ambulance Service Abuja — 24/7 Emergency Response",
    template: "%s | R&R Ambulance Abuja",
  },
  description:
    "24/7 emergency ambulance services in Abuja, Nigeria. Rapid response, certified paramedics, 5–10 minute average arrival. Call now or book online.",
  keywords: [
    "ambulance abuja",
    "emergency ambulance nigeria",
    "ambulance service FCT",
    "medical emergency abuja",
    "paramedic abuja",
    "24/7 ambulance abuja",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "R&R Ambulance Service",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
