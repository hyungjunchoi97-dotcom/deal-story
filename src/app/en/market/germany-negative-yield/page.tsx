import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import GermanyNegativeYieldClient from "@/app/market/germany-negative-yield/GermanyNegativeYieldClient";

export const metadata: Metadata = {
  title: "German Negative Yield Bunds (2016–2019) — Why Buy a Guaranteed Loss? | Deal Story",
  description:
    "Why would anyone buy a bond guaranteed to lose money? Four surreal years that proved bond markets can defy conventional logic.",
  keywords: ["NIRP", "Negative Yield", "German Bund", "ECB", "Quantitative Easing", "TINA"],
  openGraph: {
    title: "German Negative Yield Bunds (2016–2019) — Why Buy a Guaranteed Loss?",
    description: "Why would anyone buy a bond guaranteed to lose money? Four surreal years that proved bond markets can defy conventional logic.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/germany-negative-yield",
    languages: {
      ko: "/market/germany-negative-yield",
      en: "/en/market/germany-negative-yield",
      "x-default": "/market/germany-negative-yield",
    },
  },
};

export default function GermanyNegativeYieldPageEn() {
  const deal = getMarketDealBySlug("germany-negative-yield");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "German Negative Yield Bunds (2016–2019) — Why Buy a Guaranteed Loss? | Deal Story",
        description: "Why would anyone buy a bond guaranteed to lose money? Four surreal years that proved bond markets can defy conventional logic.",
        datePublished: "2016-06-01",
        dateModified: "2016-06-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/market/germany-negative-yield` },
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
          { "@type": "ListItem", position: 3, name: deal.titleEn, item: `${SITE_URL}/en/market/germany-negative-yield` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GermanyNegativeYieldClient deal={deal} lang="en" />
    </>
  );
}
