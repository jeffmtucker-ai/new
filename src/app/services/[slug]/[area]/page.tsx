import { notFound } from "next/navigation";
import { services, areas, serviceCategories } from "@/lib/siteData";
import {
  JsonLd,
  serviceSchema,
  localBusinessSchema,
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import ServiceAreaPageClient from "./ServiceAreaPageClient";

export const revalidate = false;

export function generateStaticParams() {
  const params: { slug: string; area: string }[] = [];
  for (const service of services) {
    for (const a of areas) {
      params.push({ slug: service.slug, area: a.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; area: string }>;
}) {
  const { slug, area: areaSlug } = await params;
  const service = services.find((s) => s.slug === slug);
  const area = areas.find((a) => a.slug === areaSlug);
  if (!service || !area) return {};

  const regionLabel = area.region === area.name ? area.type : area.region;

  return {
    title: `${service.name} in ${area.name} | ${regionLabel} Marketing Company | Consortium NYC`,
    description: `${service.name} for ${area.name} businesses. Local SEO from $950/month, custom websites from $4,600. Data-driven ${service.name.toLowerCase()} strategies tailored to the ${area.name} market. No contracts. Call/text (212) 202-9220.`,
    alternates: {
      canonical: `https://www.consortiumnyc.com/services/${service.slug}/${area.slug}`,
    },
  };
}

function getServiceAreaFaqs(serviceName: string, areaName: string, regionName: string) {
  return [
    { question: `How much does ${serviceName.toLowerCase()} cost for a ${areaName} business?`, answer: `${serviceName} for ${areaName} businesses starts at $950/month for SEO and $4,600 for custom websites. The exact investment depends on your industry competitiveness in ${areaName} and the scope of work needed. We provide a customized proposal after a free consultation.` },
    { question: `How long does ${serviceName.toLowerCase()} take to show results in ${areaName}?`, answer: `Most ${areaName} businesses see meaningful improvements within 3–6 months for SEO. Web design projects launch in 3–5 weeks. The timeline depends on your industry competitiveness in the ${regionName} market. We provide monthly reporting from day one.` },
    { question: `Why do ${areaName} businesses choose Consortium NYC for ${serviceName.toLowerCase()}?`, answer: `We specialize in local business marketing and know the ${areaName} market inside and out. You work directly with senior strategists — no junior account managers, no outsourcing. No contracts, transparent pricing, and over $15.2M in attributable revenue generated for local businesses.` },
    { question: `Do you offer other marketing services in ${areaName} besides ${serviceName.toLowerCase()}?`, answer: `Yes. We offer SEO, custom web design, brand identity, Google Business Profile optimization, AI automation, content marketing, and marketing strategy for ${areaName} businesses. Every service is designed to amplify the others for compounding growth.` },
    { question: `Can you help a new ${areaName} business with ${serviceName.toLowerCase()}?`, answer: `Absolutely. We've launched startups from zero to page-one rankings. Starting ${serviceName.toLowerCase()} from day one means building the right foundation so you don't have to rebuild later. New businesses in ${areaName} often see faster results because there's less cleanup needed.` },
  ];
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string; area: string }>;
}) {
  const { slug, area: areaSlug } = await params;
  const service = services.find((s) => s.slug === slug);
  const area = areas.find((a) => a.slug === areaSlug);
  if (!service || !area) notFound();

  const category = serviceCategories.find((c) => c.slug === slug);
  const pageFaqs = getServiceAreaFaqs(service.name, area.name, area.region);
  const pageUrl = `https://www.consortiumnyc.com/services/${service.slug}/${area.slug}`;
  const regionLabel = area.region === area.name ? area.type : area.region;

  const breadcrumbs = [
    { name: "Home", url: "https://www.consortiumnyc.com" },
    { name: "Services", url: "https://www.consortiumnyc.com/nyc-marketing-company-services-list" },
    { name: service.name, url: `https://www.consortiumnyc.com/services/${service.slug}` },
    { name: area.name, url: pageUrl },
  ];

  const siblingAreas = areas.filter((a) => a.region === area.region && a.slug !== area.slug);
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd data={serviceSchema(service.name, service.slug, service.description, area.name)} />
      <JsonLd data={localBusinessSchema(area.name, area.type)} />
      <JsonLd data={webPageSchema(`${service.name} in ${area.name} | Consortium NYC`, `${service.name} for ${area.name} businesses.`, pageUrl, breadcrumbs)} />
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd data={faqSchema(pageFaqs)} />
      <ServiceAreaPageClient
        service={service}
        area={area}
        regionLabel={regionLabel}
        pageFaqs={pageFaqs}
        siblingAreas={siblingAreas}
        otherServices={otherServices}
        subServices={category?.subServices || []}
      />
    </>
  );
}
