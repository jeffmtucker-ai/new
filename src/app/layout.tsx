import type { Metadata } from "next";
import { Sora, DM_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JsonLd, organizationSchema, websiteSchema } from "@/lib/schema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.consortiumnyc.com"),
  title: {
    default: "NYC Marketing Company | Consortium NYC",
    template: "%s | Consortium NYC",
  },
  description:
    "Consortium NYC is a full-service NYC marketing company specializing in SEO, branding, web design, business development, and automation for local businesses in NYC, Long Island, and Westchester. Call/text (212) 202-9220.",
  keywords: [
    "nyc marketing company",
    "seo agency new york",
    "web design nyc",
    "branding agency new york city",
    "small business marketing nyc",
    "local seo new york",
    "affordable web design nyc",
    "seo company manhattan",
    "digital marketing long island",
    "web design westchester",
  ],
  authors: [{ name: "Consortium NYC" }],
  creator: "Consortium NYC",
  publisher: "Consortium NYC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.consortiumnyc.com",
    siteName: "Consortium NYC",
    title: "NYC Marketing Company | Consortium NYC",
    description:
      "Full-service NYC marketing company for local businesses in NYC, Long Island, and Westchester. SEO, web design, branding, and automation. Call/text (212) 202-9220.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Consortium NYC - NYC Marketing Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NYC Marketing Company | Consortium NYC",
    description:
      "Full-service NYC marketing company for local businesses. SEO, web design, branding, and automation. Call/text (212) 202-9220.",
    images: ["/og-image.jpg"],
    creator: "@consortiumnyc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.consortiumnyc.com",
  },
  // verification: { google: "ADD_REAL_CODE_FROM_SEARCH_CONSOLE" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className="font-body antialiased">
        <GoogleAnalytics gaId="G-QN1ZPCL4NS" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
