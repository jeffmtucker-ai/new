import type { MetadataRoute } from "next";
import { serviceCategories, areas, industries } from "@/lib/siteData";

const BASE = "https://consortiumnyc.com";

// 105 industries split across sitemaps 1 and 2 (53 + 52)
const SPLIT = 53;

/**
 * 3 sitemaps:
 *  /sitemap/0.xml — static, services, areas, industry index, blog (~1,437 URLs)
 *  /sitemap/1.xml — programmatic industries 0–52 (53 × 15 × 81 = 64,395 URLs)
 *  /sitemap/2.xml — programmatic industries 53–104 (52 × 15 × 81 = 63,180 URLs)
 */
export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }, { id: 2 }];
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  if (id === 0) {
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

    const servicePages: MetadataRoute.Sitemap = serviceCategories.map((s) => ({
      url: `${BASE}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    const serviceAreaPages: MetadataRoute.Sitemap = serviceCategories.flatMap((s) =>
      areas.map((a) => ({
        url: `${BASE}/services/${s.slug}/${a.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    );

    const areaPages: MetadataRoute.Sitemap = areas.map((a) => ({
      url: `${BASE}/areas/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
      url: `${BASE}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

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
      ...blogPages,
    ];
  }

  // Sitemap 1: industries 0–52, Sitemap 2: industries 53–104
  const start = id === 1 ? 0 : SPLIT;
  const end = id === 1 ? SPLIT : industries.length;
  const chunk = industries.slice(start, end);

  return chunk.flatMap((i) =>
    serviceCategories.flatMap((s) =>
      areas.map((a) => ({
        url: `${BASE}/industries/${i.slug}/${s.slug}/${a.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      }))
    )
  );
}
