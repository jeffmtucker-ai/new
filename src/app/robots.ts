import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: [
      "https://consortiumnyc.com/sitemap/0.xml",
      "https://consortiumnyc.com/sitemap/1.xml",
      "https://consortiumnyc.com/sitemap/2.xml",
      "https://consortiumnyc.com/sitemap/3.xml",
    ],
  };
}
