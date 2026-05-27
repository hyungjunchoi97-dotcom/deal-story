import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import HertzFleetClient from "./HertzFleetClient";

export const metadata: Metadata = {
  title: "Hertz Fleet ABS (2020) — 파산해도 AAA는 살아남는다 | Market Story | Deal Story",
  description:
    "렌터카 1위 Hertz가 코로나로 파산했다. 하지만 차량 담보 ABS AAA 투자자들은 전액 회수. True Sale과 파산 격리의 $140억 실전 증명.",
  keywords: ["Hertz ABS", "파산격리", "True Sale", "자동차ABS", "COVID", "구조화금융", "SPV"],
  openGraph: {
    title: "Hertz Fleet ABS (2020) — 파산해도 AAA는 살아남는다 | Deal Story",
    description: "Hertz 파산에도 AAA ABS 투자자 전액 회수. True Sale·파산 격리의 실전 증명.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/hertz-fleet-abs-2020",
    languages: {
      ko: "/market/hertz-fleet-abs-2020",
      en: "/en/market/hertz-fleet-abs-2020",
      "x-default": "/market/hertz-fleet-abs-2020",
    },
  },
};

export default function HertzFleetPage() {
  const deal = getMarketDealBySlug("hertz-fleet-abs-2020");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Hertz Fleet ABS (2020) — 파산해도 AAA는 살아남는다 | Deal Story",
    description: deal.excerpt,
    datePublished: `${deal.dealYear}-01-01`,
    publisher: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/hertz-fleet-abs-2020` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "마켓", item: `${SITE_URL}/market` },
        { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/hertz-fleet-abs-2020` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HertzFleetClient deal={deal} lang="ko" />
    </>
  );
}
