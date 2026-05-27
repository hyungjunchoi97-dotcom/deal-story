import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import SaudiAramcoDebutClient from "./SaudiAramcoDebutClient";

export const metadata: Metadata = {
  title: "사우디 아람코 첫 국제채 (2019) — 사상 최대 오더북 | Deal Story",
  description:
    "$1000억 이상의 오더북. SOE 발행의 정점. 발행 직전 처음 공개된 아람코의 실체.",
  keywords: ["아람코", "Saudi Aramco", "SOE채권", "오더북", "Vision2030", "사우디"],
  openGraph: {
    title: "사우디 아람코 첫 국제채 (2019) — 사상 최대 오더북",
    description: "$1000억 이상의 오더북. SOE 발행의 정점. 발행 직전 처음 공개된 아람코의 실체.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/saudi-aramco-debut",
    languages: {
      ko: "/market/saudi-aramco-debut",
      en: "/en/market/saudi-aramco-debut",
      "x-default": "/market/saudi-aramco-debut",
    },
  },
};

export default function SaudiAramcoDebutPage() {
  const deal = getMarketDealBySlug("saudi-aramco-debut");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "사우디 아람코 첫 국제채 (2019) — 사상 최대 오더북 | Deal Story",
        description: "$1000억 이상의 오더북. SOE 발행의 정점. 발행 직전 처음 공개된 아람코의 실체.",
        datePublished: "2019-04-09",
        dateModified: "2019-04-09",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/saudi-aramco-debut` },
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
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/saudi-aramco-debut` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SaudiAramcoDebutClient deal={deal} lang="ko" />
    </>
  );
}
