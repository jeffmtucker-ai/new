import type { Metadata } from "next";
import ServicesPage from "./ServicesClient";

export const metadata: Metadata = {
  title: "NYC Marketing Services | SEO, Web Design, Branding & More",
  description:
    "Full-service marketing for NYC businesses. SEO from $950/mo, custom websites from $4,600, branding, AI automation, and Google Business Profile optimization. No contracts. Call/text (212) 202-9220.",
  alternates: { canonical: "https://www.consortiumnyc.com/services" },
};

export default function Page() {
  return <ServicesPage />;
}
