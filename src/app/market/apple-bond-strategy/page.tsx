import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import AppleBondStrategyClient from "./AppleBondStrategyClient";

export const metadata: Metadata = {
  title: "Apple의 채권 발행 전략 (2013~) — 현금이 있는데 왜 빚을 내나 | Deal Story",
  description:
    "현금 1000억 넘게 쌓아둔 회사가 빚을 낸다. 세금 최적화와 자사주매입 재원으로서의 발행.",
  keywords: ["Apple", "애플채권", "자사주매입", "세금최적화", "역외현금", "투자등급"],
  openGraph: {
    title: "Apple의 채권 발행 전략 (2013~) — 현금이 있는데 왜 빚을 내나",
    description: "현금 1000억 넘게 쌓아둔 회사가 빚을 낸다. 세금 최적화와 자사주매입 재원으로서의 발행.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/apple-bond-strategy",
    languages: {
      ko: "/market/apple-bond-strategy",
      en: "/en/market/apple-bond-strategy",
      "x-default": "/market/apple-bond-strategy",
    },
  },
};

export default function AppleBondStrategyPage() {
  const deal = getMarketDealBySlug("apple-bond-strategy");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Apple의 채권 발행 전략 (2013~) — 현금이 있는데 왜 빚을 내나 | Deal Story",
        description: "현금 1000억 넘게 쌓아둔 회사가 빚을 낸다. 세금 최적화와 자사주매입 재원으로서의 발행.",
        datePublished: "2013-04-30",
        dateModified: "2013-04-30",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/apple-bond-strategy` },
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
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/apple-bond-strategy` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AppleBondStrategyClient deal={deal} lang="ko" />
    </>
  );
}
