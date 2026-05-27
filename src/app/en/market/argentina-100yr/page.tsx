import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import Argentina100yrClient from "@/app/market/argentina-100yr/Argentina100yrClient";

export const metadata: Metadata = {
  title: "Argentina 100-Year Bond (2017) — A Study in Market Euphoria | Deal Story",
  description:
    "A serial defaulter sold 100-year bonds and defaulted again in 3 years. $2.75B deal, 3.5x oversubscribed, then Argentina's ninth default in 2020. The definitive Reach for Yield case study.",
  keywords: ["Argentina", "Century Bond", "100-year bond", "Reach for Yield", "EM default", "duration risk", "Macri", "sovereign"],
  openGraph: {
    title: "Argentina 100-Year Bond (2017) — A Study in Market Euphoria | Deal Story",
    description: "A serial defaulter sold 100-year bonds and defaulted again in 3 years. The definitive Reach for Yield case study.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/argentina-100yr",
    languages: {
      ko: "/market/argentina-100yr",
      en: "/en/market/argentina-100yr",
      "x-default": "/market/argentina-100yr",
    },
  },
};

export default function Argentina100yrPageEn() {
  const deal = getMarketDealBySlug("argentina-100yr");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Argentina 100-Year Bond (2017) — A Study in Market Euphoria | Deal Story",
        description:
          "A serial defaulter sold 100-year bonds and defaulted again in 3 years. The definitive Reach for Yield case study.",
        datePublished: "2017-06-19",
        dateModified: "2020-05-22",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/argentina-100yr`,
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
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/en/market` },
          {
            "@type": "ListItem",
            position: 3,
            name: deal.titleEn,
            item: `${SITE_URL}/en/market/argentina-100yr`,
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
      <Argentina100yrClient deal={deal} lang="en" />
    </>
  );
}
