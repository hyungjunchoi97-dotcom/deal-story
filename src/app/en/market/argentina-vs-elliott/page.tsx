import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import ArgentinaElliottClient from "@/app/market/argentina-vs-elliott/ArgentinaElliottClient";

export const metadata: Metadata = {
  title: "Argentina vs Elliott — The Hedge Fund That Seized a Warship | Deal Story",
  description:
    "The origin of pari passu, holdout creditors, and CAC reform. Elliott seized an Argentine warship in Ghana. From a $100B+ default to a $4.6B settlement — 15 years of sovereign debt history.",
  keywords: [
    "Argentina Elliott", "NML Capital", "pari passu", "holdout creditor",
    "CAC reform", "sovereign default", "vulture fund", "ARA Libertad", "Judge Griesa",
  ],
  openGraph: {
    title: "Argentina vs Elliott — The Hedge Fund That Seized a Warship | Deal Story",
    description:
      "The origin of pari passu, holdout creditors, and CAC reform. Elliott seized an Argentine warship in Ghana. The complete story of a 15-year sovereign debt battle.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/argentina-vs-elliott",
    languages: {
      ko: "/market/argentina-vs-elliott",
      en: "/en/market/argentina-vs-elliott",
      "x-default": "/market/argentina-vs-elliott",
    },
  },
};

export default function ArgentinaElliottPageEn() {
  const deal = getMarketDealBySlug("argentina-vs-elliott");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Argentina vs Elliott — The Hedge Fund That Seized a Warship | Deal Story",
        description:
          "The origin of pari passu, holdout creditors, and CAC reform. Elliott seized an Argentine warship in Ghana. From a $100B+ default to a $4.6B settlement — 15 years of sovereign debt history.",
        datePublished: "2001-12-23",
        dateModified: "2016-02-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/argentina-vs-elliott`,
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
            item: `${SITE_URL}/en/market/argentina-vs-elliott`,
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
      <ArgentinaElliottClient deal={deal} lang="en" />
    </>
  );
}
