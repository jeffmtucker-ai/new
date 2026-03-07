import type { Metadata } from "next";
import TipBlurb from "@/components/TipBlurb";
import ServicesListClient from "./ServicesListClient";

export const metadata: Metadata = {
  title: "NYC Marketing Company Services | SEO, Web Design, AI, Branding & More | Consortium NYC",
  description:
    "Every marketing service your NYC business needs under one roof. SEO, custom web design, branding, AI automation, programmatic SEO, CRM development, and more. No contracts. Transparent pricing.",
};

export default function ServicesListPage() {
  return (
    <>
      <TipBlurb
        tip={<>You don&apos;t need every service on this list. Most businesses need <strong>two or three things done really well</strong>. The trick is knowing which ones <strong>move the needle</strong> for your specific situation.</>}
      />
      <ServicesListClient />
    </>
  );
}
