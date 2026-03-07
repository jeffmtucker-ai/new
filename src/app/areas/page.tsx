import type { Metadata } from "next";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import ServiceAreasClient from "./ServiceAreasClient";

export const metadata: Metadata = {
  title: "Service Areas | NYC, Long Island, Westchester & NJ Marketing Company | Consortium NYC",
  description:
    "Marketing services across 80+ neighborhoods in NYC, Long Island, Westchester, and New Jersey. SEO, web design, branding, AI automation, and more for local businesses in the tri-state area.",
};

const breadcrumbs = [
  { name: "Home", url: "https://consortiumnyc.com" },
  { name: "Service Areas", url: "https://consortiumnyc.com/areas" },
];

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "Service Areas | NYC, Long Island, Westchester & NJ | Consortium NYC",
          "Marketing services across 80+ neighborhoods in NYC, Long Island, Westchester, and New Jersey.",
          "https://consortiumnyc.com/areas",
          breadcrumbs
        )}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <ServiceAreasClient />
    </>
  );
}
