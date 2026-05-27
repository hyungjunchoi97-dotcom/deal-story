import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import Austria100yrClient from "./Austria100yrClient";

export const metadata: Metadata = {
  title: "오스트리아 100년물 (2017) — 듀레이션의 두 얼굴 | Deal Story",
  description:
    "AA+ 등급 오스트리아 국채가 2020년 230까지 폭등 후 2022년 46까지 폭락. 신용리스크 없이도 80% 손실 가능한 듀레이션 리스크의 극단적 실증.",
  keywords: ["오스트리아", "100년물", "Century Bond", "듀레이션", "금리리스크", "Modified Duration", "ECB", "볼록성"],
  openGraph: {
    title: "오스트리아 100년물 (2017) — 듀레이션의 두 얼굴 | Deal Story",
    description: "AA+ 국채가 2020년 230→2022년 46으로 80% 폭락. 신용리스크 없이도 극단적 손실 가능.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/austria-100yr",
    languages: {
      ko: "/market/austria-100yr",
      en: "/en/market/austria-100yr",
      "x-default": "/market/austria-100yr",
    },
  },
};

export default function Austria100yrPage() {
  const deal = getMarketDealBySlug("austria-100yr");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "오스트리아 100년물 (2017) — 듀레이션의 두 얼굴 | Deal Story",
        description:
          "AA+ 등급 오스트리아 국채가 2020년 230 고점 이후 2022년 46까지 폭락. 신용리스크 없이도 80% 손실 가능한 듀레이션 리스크의 극단적 실증.",
        datePublished: "2017-09-12",
        dateModified: "2022-12-31",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/market/austria-100yr`,
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
            item: `${SITE_URL}/market/austria-100yr`,
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
      <Austria100yrClient deal={deal} lang="ko" />
    </>
  );
}
