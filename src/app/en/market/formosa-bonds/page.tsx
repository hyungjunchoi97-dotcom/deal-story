import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import FormosaBondsClient from "@/app/market/formosa-bonds/FormosaBondsClient";

export const metadata: Metadata = {
  title: "Formosa Bond Boom and No-Calls (2010s) — Taiwan Insurer ALM Dilemma | Deal Story",
  description:
    "A market created by Taiwanese insurer demand — and then the extension risk that materialized when issuers stopped calling.",
  keywords: ["Formosa Bond", "ALM", "30NC5", "No-Call", "Taiwan", "Extension Risk"],
  openGraph: {
    title: "Formosa Bond Boom and No-Calls (2010s) — Taiwan Insurer ALM Dilemma",
    description: "A market created by Taiwanese insurer demand — and then the extension risk that materialized when issuers stopped calling.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/formosa-bonds",
    languages: {
      ko: "/market/formosa-bonds",
      en: "/en/market/formosa-bonds",
      "x-default": "/market/formosa-bonds",
    },
  },
};

export default function FormosaBondsPageEn() {
  const deal = getMarketDealBySlug("formosa-bonds");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Formosa Bond Boom and No-Calls (2010s) — Taiwan Insurer ALM Dilemma | Deal Story",
        description: "A market created by Taiwanese insurer demand — and then the extension risk that materialized when issuers stopped calling.",
        datePublished: "2013-01-01",
        dateModified: "2013-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/market/formosa-bonds` },
        inLanguage: "en",
        keywords: (deal.tagsEn ?? deal.tags).join(", "),
      },
      ...(deal.faq && deal.faq.length > 0
        ? [{ "@type": "FAQPage", mainEntity: deal.faq.map(({ qEn, aEn }) => ({ "@type": "Question", name: qEn, acceptedAnswer: { "@type": "Answer", text: aEn } })) }]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/en/market` },
          { "@type": "ListItem", position: 3, name: deal.titleEn, item: `${SITE_URL}/en/market/formosa-bonds` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FormosaBondsClient deal={deal} lang="en" />
    </>
  );
}
