import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import IndustriesListClient from "./IndustriesListClient";

export const metadata: Metadata = {
  title: "Industries We Serve | NYC Marketing Company | Consortium NYC",
  description:
    "Marketing services for 100+ industries across NYC, Long Island, and the tri-state area. Home services, law firms, restaurants, medical practices, contractors, and more. 25+ years of experience. Call/text (212) 202-9220.",
};

const breadcrumbs = [
  { name: "Home", url: "https://www.consortiumnyc.com" },
  { name: "Industries", url: "https://www.consortiumnyc.com/industries-we-offer-marketing-services-for" },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <IndustriesListClient />
    </>
  );
}
