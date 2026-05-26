import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import ChinaRealEstateClient from "./ChinaRealEstateClient";

export const metadata: Metadata = {
  title: "중국 부동산 디폴트 위기 — Market Story | Deal Story",
  description:
    "Three Red Lines 정책이 촉발한 Evergrande·Country Garden 연쇄 디폴트. 역외 투자자의 2~5센트 회수율과 중국 크레딧 시장의 구조적 함의.",
  keywords: ["중국 부동산", "Evergrande", "Three Red Lines", "달러채 디폴트", "Country Garden", "역외채권", "HY 스프레드", "중국 크레딧"],
  openGraph: {
    title: "중국 부동산 디폴트 위기 — Market Story | Deal Story",
    description:
      "Three Red Lines 정책이 촉발한 Evergrande·Country Garden 연쇄 디폴트. 역외 투자자의 2~5센트 회수율과 중국 크레딧 시장의 구조적 함의.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/china-real-estate-default",
    languages: {
      ko: "/market/china-real-estate-default",
      en: "/en/market/china-real-estate-default",
      "x-default": "/market/china-real-estate-default",
    },
  },
};

export default function ChinaRealEstateDefaultPage() {
  const deal = getMarketDealBySlug("china-real-estate-default");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "중국 부동산 디폴트 위기 — Market Story | Deal Story",
        description:
          "Three Red Lines 정책이 촉발한 Evergrande·Country Garden 연쇄 디폴트. 역외 투자자의 2~5센트 회수율과 중국 크레딧 시장의 구조적 함의.",
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
          "@id": `${SITE_URL}/market/china-real-estate-default`,
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
            item: `${SITE_URL}/market/china-real-estate-default`,
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
      <ChinaRealEstateClient deal={deal} lang="ko" />
    </>
  );
}
