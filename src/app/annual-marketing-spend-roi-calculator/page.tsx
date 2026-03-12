import type { Metadata } from "next";
import ROICalculator from "./ROICalculatorClient";

export const metadata: Metadata = {
  title: "Marketing ROI Calculator | See Your Potential Revenue",
  description:
    "Calculate your marketing ROI with our free tool. See how SEO and web design can generate leads and revenue for your NYC business. SEO from $950/mo. Call/text (212) 202-9220.",
  alternates: { canonical: "https://www.consortiumnyc.com/annual-marketing-spend-roi-calculator" },
};

export default function Page() {
  return <ROICalculator />;
}
