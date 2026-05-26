import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import ChinaRealEstateClient from "@/app/market/china-real-estate-default/ChinaRealEstateClient";

export const metadata: Metadata = {
  title: "China Real Estate Default Crisis — Market Story | Deal Story",
  description:
    "How the Three Red Lines policy triggered cascading defaults at Evergrande, Country Garden, and 30+ developers. Offshore creditors recovered as little as 2–5 cents on the dollar.",
  keywords: [
    "China real estate", "Evergrande default", "Three Red Lines", "dollar bond default",
    "Country Garden", "offshore bonds", "China HY credit", "property developer",
  ],
  openGraph: {
    title: "China Real Estate Default Crisis — Market Story | Deal Story",
    description:
      "How the Three Red Lines policy triggered cascading defaults at Evergrande, Country Garden, and 30+ developers. Offshore creditors recovered as little as 2–5 cents on the dollar.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/china-real-estate-default",
    languages: {
      ko: "/market/china-real-estate-default",
      en: "/en/market/china-real-estate-default",
      "x-default": "/market/china-real-estate-default",
    },
  },
};

export default function ChinaRealEstateDefaultPageEn() {
  const deal = getMarketDealBySlug("china-real-estate-default");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "China Real Estate Default Crisis — Market Story | Deal Story",
        description:
          "How the Three Red Lines policy triggered cascading defaults at Evergrande, Country Garden, and 30+ developers. Offshore creditors recovered as little as 2–5 cents on the dollar.",
        datePublished: "2021-12-01",
        dateModified: "2024-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/china-real-estate-default`,
        },
        inLanguage: "en",
        keywords: (deal.tagsEn ?? deal.tags).join(", "),
      },
      ...(deal.faq && deal.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: deal.faq.map(({ qEn, aEn }) => ({
                "@type": "Question",
                name: qEn,
                acceptedAnswer: { "@type": "Answer", text: aEn },
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en/` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/en/market` },
          {
            "@type": "ListItem",
            position: 3,
            name: deal.titleEn,
            item: `${SITE_URL}/en/market/china-real-estate-default`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChinaRealEstateClient deal={deal} lang="en" />
    </>
  );
}
