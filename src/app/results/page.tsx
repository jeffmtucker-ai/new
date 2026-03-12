import type { Metadata } from "next";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import ResultsClient from "./ResultsClient";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "What's Working | Results & Case Studies",
  description:
    "Real results for real NYC businesses. See how Consortium NYC helped local businesses go from invisible to page 1, generating dozens of leads per month with SEO and web design. Call/text (212) 202-9220.",
  openGraph: {
    title: "What's Working | Results & Case Studies | Consortium NYC",
    description:
      "Real results for real NYC businesses. See our case studies and the numbers behind our work. Call/text (212) 202-9220.",
    url: "https://www.consortiumnyc.com/results",
  },
};

/* ================================================================== */
/*  RESULTS PAGE (Server wrapper)                                      */
/* ================================================================== */
export default function ResultsPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "What's Working | Results & Case Studies",
          "Real results for real NYC businesses. See how Consortium NYC helped local businesses go from invisible to page 1.",
          "https://www.consortiumnyc.com/results"
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.consortiumnyc.com" },
          { name: "Results", url: "https://www.consortiumnyc.com/results" },
        ])}
      />
      <ResultsClient />
    </>
  );
}
