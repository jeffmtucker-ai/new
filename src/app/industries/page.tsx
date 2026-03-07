import type { Metadata } from "next";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import TipBlurb from "@/components/TipBlurb";
import IndustriesListClient from "./IndustriesListClient";

export const metadata: Metadata = {
  title: "Industries We Serve | NYC Marketing Company | Consortium NYC",
  description:
    "Marketing services for 100+ industries across NYC, Long Island, and the tri-state area. Home services, law firms, restaurants, medical practices, contractors, and more. 25+ years of experience.",
};

const breadcrumbs = [
  { name: "Home", url: "https://consortiumnyc.com" },
  { name: "Industries", url: "https://consortiumnyc.com/industries" },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <TipBlurb
        tip={<>A dentist and a plumber both need SEO, but <strong>the strategy is completely different</strong>. The keywords, the competition, the customer intent — it all changes by industry. That&apos;s why <strong>we don&apos;t use templates</strong>.</>}
      />
      <IndustriesListClient />
    </>
  );
}
