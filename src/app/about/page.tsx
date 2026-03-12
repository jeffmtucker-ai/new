import type { Metadata } from "next";
import AboutPage from "./AboutClient";

export const metadata: Metadata = {
  title: "About Consortium NYC | 25+ Years of NYC Marketing",
  description:
    "NYC marketing company with 25+ years experience and over $15.2M in attributable revenue for local businesses. No junior account managers, no outsourcing — senior strategists only. Call/text (212) 202-9220.",
  alternates: { canonical: "https://www.consortiumnyc.com/about" },
};

export default function Page() {
  return <AboutPage />;
}
