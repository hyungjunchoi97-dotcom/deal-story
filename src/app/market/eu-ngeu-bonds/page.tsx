import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import EuNgeuBondsClient from "./EuNgeuBondsClient";

export const metadata: Metadata = {
  title: "EU NGEU/SURE 본드 (2020~) — 유럽 공동채의 탄생 | Deal Story",
  description:
    "코로나 대응으로 EU가 단숨에 세계 최대급 SSA 발행체로 부상. 유럽 공동부채라는 정치적·구조적 대사건.",
  keywords: ["NGEU", "SURE", "EU채권", "유럽공동채", "SSA", "그린본드"],
  openGraph: {
    title: "EU NGEU/SURE 본드 (2020~) — 유럽 공동채의 탄생",
    description: "코로나 대응으로 EU가 단숨에 세계 최대급 SSA 발행체로 부상. 유럽 공동부채라는 정치적·구조적 대사건.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/eu-ngeu-bonds",
    languages: {
      ko: "/market/eu-ngeu-bonds",
      en: "/en/market/eu-ngeu-bonds",
      "x-default": "/market/eu-ngeu-bonds",
    },
  },
};

export default function EuNgeuBondsPage() {
  const deal = getMarketDealBySlug("eu-ngeu-bonds");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "EU NGEU/SURE 본드 (2020~) — 유럽 공동채의 탄생 | Deal Story",
        description: "코로나 대응으로 EU가 단숨에 세계 최대급 SSA 발행체로 부상. 유럽 공동부채라는 정치적·구조적 대사건.",
        datePublished: "2020-10-20",
        dateModified: "2020-10-20",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/eu-ngeu-bonds` },
        inLanguage: "ko",
        keywords: deal.tags.join(", "),
      },
      ...(deal.faq && deal.faq.length > 0
        ? [{ "@type": "FAQPage", mainEntity: deal.faq.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/market` },
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/eu-ngeu-bonds` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EuNgeuBondsClient deal={deal} lang="ko" />
    </>
  );
}
