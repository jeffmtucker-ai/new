import type { Metadata } from "next";
import { Sora, DM_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
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
  metadataBase: new URL("https://consortiumnyc.com"),
  title: {
    default: "Consortium NYC | Digital Marketing Agency in New York City",
    template: "%s | Consortium NYC",
  },
  description:
    "Consortium NYC is a full-service digital marketing agency specializing in SEO, branding, web design, business development, and automation for local businesses in NYC, Long Island, and Westchester.",
  keywords: [
    "digital marketing agency nyc",
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
    url: "https://consortiumnyc.com",
    siteName: "Consortium NYC",
    title: "Consortium NYC | Digital Marketing Agency in New York City",
    description:
      "Full-service digital marketing agency for local businesses in NYC, Long Island, and Westchester. SEO, web design, branding, and automation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Consortium NYC - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consortium NYC | Digital Marketing Agency in NYC",
    description:
      "Full-service digital marketing agency for local businesses. SEO, web design, branding, and automation.",
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
    canonical: "https://consortiumnyc.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
