import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import AbacusClient from "./AbacusClient";

export const metadata: Metadata = {
  title: "Abacus 2007-AC1 — Goldman Sachs CDO 사기 & Big Short | Market Story | Deal Story",
  description:
    "존 폴슨이 숏을 치기 위해 설계하고 Goldman이 팔았다. SEC 역대 최대 합의금 $5억 5천만. Big Short의 실제 딜 Abacus 2007-AC1 완전 해설.",
  keywords: ["Abacus CDO", "Goldman Sachs", "합성CDO", "Big Short", "SEC", "구조화금융", "존폴슨"],
  openGraph: {
    title: "Abacus 2007-AC1 — Goldman Sachs CDO 사기 & Big Short | Deal Story",
    description:
      "폴슨이 설계하고 Goldman이 팔았다. SEC $550M 합의. Big Short의 실제 주인공 딜 완전 해설.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/abacus-2007-ac1",
    languages: {
      ko: "/market/abacus-2007-ac1",
      en: "/en/market/abacus-2007-ac1",
      "x-default": "/market/abacus-2007-ac1",
    },
  },
};

export default function AbacusPage() {
  const deal = getMarketDealBySlug("abacus-2007-ac1");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Abacus 2007-AC1 — Goldman Sachs CDO 사기 & Big Short | Deal Story",
    description: deal.excerpt,
    datePublished: `${deal.dealYear}-01-01`,
    publisher: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/abacus-2007-ac1` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "마켓", item: `${SITE_URL}/market` },
        { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/abacus-2007-ac1` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AbacusClient deal={deal} lang="ko" />
    </>
  );
}
