import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const BASE_URL = "https://braakhuis-fysiotherapie.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16352f",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Braakhuis Fysiotherapie | Evidence-Based Physiotherapy & Recovery",
    template: "%s | Braakhuis Fysiotherapie",
  },
  description: "Physiotherapy clinic offering targeted care for joint pain, sports injuries, and post-operative rehabilitation. One-on-one sessions in modern facilities.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Braakhuis Fysiotherapie | Evidence-Based Physiotherapy & Recovery",
    description: "Physiotherapy clinic offering targeted care for joint pain, sports injuries, and post-operative rehabilitation.",
    url: BASE_URL,
    siteName: "Braakhuis Fysiotherapie",
    images: [
      {
        url: "/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Braakhuis Fysiotherapie clinic and rehabilitation space",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braakhuis Fysiotherapie | Evidence-Based Physiotherapy & Recovery",
    description: "Physiotherapy clinic offering targeted care for joint pain, sports injuries, and post-operative rehabilitation.",
    images: ["/og/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${sansFont.variable} font-sans bg-[#fbfcfb] text-[#1a1f1d] antialiased selection:bg-[#16352f] selection:text-white min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
