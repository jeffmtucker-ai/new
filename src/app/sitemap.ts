import type { MetadataRoute } from "next";
import { serviceCategories, areas, industries } from "@/lib/siteData";

const BASE = "https://consortiumnyc.com";

// Each industry = 15 services × 81 areas = 1,215 URLs
// 50,000 / 1,215 ≈ 41 industries per sitemap chunk
const INDUSTRIES_PER_CHUNK = 41;

/**
 * Next.js calls this to build a sitemap index.
 * Returns [{id: 0}, {id: 1}, {id: 2}, {id: 3}]
 * → /sitemap/0.xml, /sitemap/1.xml, etc.
 */
export async function generateSitemaps() {
  const programmaticChunks = Math.ceil(industries.length / INDUSTRIES_PER_CHUNK);
  // id 0 = static/service/area pages, id 1+ = programmatic chunks
  return Array.from({ length: 1 + programmaticChunks }, (_, i) => ({ id: i }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Chunk 0: all non-programmatic pages
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

  // Chunks 1+: programmatic industry × service × area pages
  const chunkIndex = id - 1;
  const start = chunkIndex * INDUSTRIES_PER_CHUNK;
  const end = Math.min(start + INDUSTRIES_PER_CHUNK, industries.length);
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
