import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import GreeceDebtClient from "./GreeceDebtClient";

export const metadata: Metadata = {
  title: "그리스 2012 부채 재조정 — Market Story | Deal Story",
  description:
    "사상 최대 규모 국채 재조정. €2,060억 PSI, 53.5% 헤어컷, CAC 소급 적용, CDS 트리거까지 — 유로존 위기의 분수령.",
  keywords: [
    "그리스 부채 재조정", "PSI", "헤어컷", "CAC", "유로존 위기", "CDS",
    "sovereign default", "트로이카", "긴축", "IMF",
  ],
  openGraph: {
    title: "그리스 2012 부채 재조정 — Market Story | Deal Story",
    description:
      "사상 최대 규모 국채 재조정. €2,060억 PSI, 53.5% 헤어컷, CAC 소급 적용, CDS 트리거까지 — 유로존 위기의 분수령.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/greece-debt-restructuring",
    languages: {
      ko: "/market/greece-debt-restructuring",
      en: "/en/market/greece-debt-restructuring",
      "x-default": "/market/greece-debt-restructuring",
    },
  },
};

export default function GreeceDebtRestructuringPage() {
  const deal = getMarketDealBySlug("greece-debt-restructuring");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "그리스 2012 부채 재조정 — Market Story | Deal Story",
        description:
          "사상 최대 규모 국채 재조정. €2,060억 PSI, 53.5% 헤어컷, CAC 소급 적용, CDS 트리거까지 — 유로존 위기의 분수령.",
        datePublished: "2012-03-01",
        dateModified: "2012-03-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/market/greece-debt-restructuring`,
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
            item: `${SITE_URL}/market/greece-debt-restructuring`,
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
      <GreeceDebtClient deal={deal} lang="ko" />
    </>
  );
}
