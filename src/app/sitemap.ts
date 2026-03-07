import type { MetadataRoute } from "next";
import { serviceCategories, areas, industries } from "@/lib/siteData";

const BASE = "https://consortiumnyc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact-nyc-marketing-company-consortium-nyc`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/free-seo-audit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/nyc-marketing-pricing-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/nyc-marketing-company-faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/nyc-marketing-company-services-list`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/nyc-marketing-company-portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/nyc-marketing-101-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/marketing-checklist-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/whats-working-in-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = serviceCategories.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Service × Area pages
  const serviceAreaPages: MetadataRoute.Sitemap = serviceCategories.flatMap((s) =>
    areas.map((a) => ({
      url: `${BASE}/services/${s.slug}/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  // Area pages
  const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
    url: `${BASE}/areas/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Industry pages
  const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE}/industries/${i.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Industry × Service × Area pages (top 20 industries only for sitemap size)
  const topIndustries = industries.slice(0, 20);
  const programmaticPages: MetadataRoute.Sitemap = topIndustries.flatMap((i) =>
    serviceCategories.flatMap((s) =>
      areas.map((a) => ({
        url: `${BASE}/industries/${i.slug}/${s.slug}/${a.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      }))
    )
  );

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/blog/how-to-choose-digital-marketing-agency`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/blog/local-seo-vs-national-seo`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  return [
    ...staticPages,
    ...servicePages,
    ...serviceAreaPages,
    ...areaPages,
    ...industryPages,
    ...programmaticPages,
    ...blogPages,
  ];
}
