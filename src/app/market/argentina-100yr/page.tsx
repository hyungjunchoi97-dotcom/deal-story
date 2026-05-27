import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import Argentina100yrClient from "./Argentina100yrClient";

export const metadata: Metadata = {
  title: "아르헨티나 100년물 (2017) — 시장 광기의 표본 | Deal Story",
  description:
    "디폴트 상습국이 100년물을 팔았고, 3년 뒤 또 디폴트했다. $2.75B 발행 3.5배 초과청약에서 2020년 9번째 디폴트까지. Reach for Yield의 완벽한 교과서.",
  keywords: ["아르헨티나", "100년물", "Century Bond", "Reach for Yield", "EM 디폴트", "듀레이션", "마크리", "sovereign"],
  openGraph: {
    title: "아르헨티나 100년물 (2017) — 시장 광기의 표본 | Deal Story",
    description: "디폴트 상습국이 100년물을 팔았고, 3년 뒤 또 디폴트했다. Reach for Yield의 완벽한 교과서.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/argentina-100yr",
    languages: {
      ko: "/market/argentina-100yr",
      en: "/en/market/argentina-100yr",
      "x-default": "/market/argentina-100yr",
    },
  },
};

export default function Argentina100yrPage() {
  const deal = getMarketDealBySlug("argentina-100yr");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "아르헨티나 100년물 (2017) — 시장 광기의 표본 | Deal Story",
        description:
          "디폴트 상습국이 100년물을 팔았고, 3년 뒤 또 디폴트했다. $2.75B 발행 3.5배 초과청약에서 2020년 9번째 디폴트까지.",
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
          "@id": `${SITE_URL}/market/argentina-100yr`,
        },
        inLanguage: "ko",
        keywords: deal.tags.join(", "),
      },
      ...(deal.faq && deal.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: deal.faq.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/market` },
          {
            "@type": "ListItem",
            position: 3,
            name: deal.title,
            item: `${SITE_URL}/market/argentina-100yr`,
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
      <Argentina100yrClient deal={deal} lang="ko" />
    </>
  );
}
