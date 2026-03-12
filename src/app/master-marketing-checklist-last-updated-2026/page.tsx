import type { Metadata } from "next";
import MarketingChecklist from "./ChecklistClient";

export const metadata: Metadata = {
  title: "Master Marketing Checklist 2026 | SEO, Web Design & More",
  description:
    "The complete marketing checklist for NYC businesses — SEO foundations, Google Business Profile, web design, content strategy, analytics, and more. Updated for 2026. Call/text (212) 202-9220.",
  alternates: { canonical: "https://www.consortiumnyc.com/master-marketing-checklist-last-updated-2026" },
};

export default function Page() {
  return <MarketingChecklist />;
}
