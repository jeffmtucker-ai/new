import type { Metadata } from "next";
import ServicesListClient from "./ServicesListClient";

export const metadata: Metadata = {
  title: "NYC Marketing Company Services | SEO, Web Design, AI, Branding & More | Consortium NYC",
  description:
    "Every marketing service your NYC business needs under one roof. SEO, custom web design, branding, AI automation, programmatic SEO, CRM development, and more. No contracts. Transparent pricing.",
};

export default function ServicesListPage() {
  return <ServicesListClient />;
}
