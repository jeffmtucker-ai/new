import type { Metadata } from "next";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import TipBlurb from "@/components/TipBlurb";
import ResultsClient from "./ResultsClient";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "What's Working | Results & Case Studies",
  description:
    "Real results for real NYC businesses. See how Consortium NYC helped local businesses go from invisible to page 1, generating dozens of leads per month with SEO and web design.",
  openGraph: {
    title: "What's Working | Results & Case Studies | Consortium NYC",
    description:
      "Real results for real NYC businesses. See our case studies and the numbers behind our work.",
    url: "https://consortiumnyc.com/results",
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
          "https://consortiumnyc.com/results"
        )}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://consortiumnyc.com" },
          { name: "Results", url: "https://consortiumnyc.com/results" },
        ])}
      />
      <TipBlurb
        tip={<><strong>Numbers don&apos;t lie.</strong> Every metric you see here came from real Google Analytics, real Search Console data, and real client dashboards. We don&apos;t <strong>photoshop results</strong>.</>}
      />
      <ResultsClient />
    </>
  );
}
