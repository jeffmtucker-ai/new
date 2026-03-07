import type { Metadata } from "next";
import { JsonLd, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import TipBlurb from "@/components/TipBlurb";
import Marketing101Client from "./Marketing101Client";

export const metadata: Metadata = {
  title: "Marketing 101: 101 Lessons From Startup to 25-Year Veteran | NYC Marketing Guide | Consortium NYC",
  description:
    "101 marketing lessons every business owner needs — from day-one startup basics to advanced strategies used by 25-year veterans. SEO, web design, branding, local marketing, AI automation, and more for NYC businesses.",
  keywords: [
    "marketing 101 guide",
    "marketing for small business NYC",
    "how to market my business in NYC",
    "SEO basics for beginners",
    "local marketing guide NYC",
    "digital marketing tips small business",
    "marketing strategy for startups",
    "NYC small business marketing guide",
    "how to get customers NYC",
    "marketing lessons for business owners",
  ],
};

const breadcrumbs = [
  { name: "Home", url: "https://consortiumnyc.com" },
  { name: "Marketing 101", url: "https://consortiumnyc.com/nyc-marketing-101-guide" },
];

export default function Marketing101Page() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "Marketing 101: 101 Lessons From Startup to 25-Year Veteran | Consortium NYC",
          "101 marketing lessons every business owner needs — from startup basics to advanced strategies.",
          "https://consortiumnyc.com/nyc-marketing-101-guide",
          breadcrumbs
        )}
      />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <TipBlurb
        tip={<>If you&apos;re <strong>new to marketing</strong> or feel like you&apos;ve been burned before, start here. No jargon, no fluff. Just the stuff that <strong>actually works</strong> for real businesses in New York City.</>}
      />
      <Marketing101Client />
    </>
  );
}
