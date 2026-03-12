import type { Metadata } from "next";
import FreeSEOAudit from "./FreeReviewClient";

export const metadata: Metadata = {
  title: "Free Human+AI SEO & Marketing Review | Consortium NYC",
  description:
    "Get a free SEO and marketing review powered by human expertise and AI analysis. We audit your website, Google Business Profile, competitors, and local rankings — then deliver a custom action plan. Call/text (212) 202-9220.",
  alternates: { canonical: "https://www.consortiumnyc.com/the-free-human+ai-seo-marketing-review" },
};

export default function Page() {
  return <FreeSEOAudit />;
}
