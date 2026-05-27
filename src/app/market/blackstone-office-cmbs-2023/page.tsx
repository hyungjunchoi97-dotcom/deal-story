import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import BlackstoneOfficeClient from "./BlackstoneOfficeClient";

export const metadata: Metadata = {
  title: "Blackstone 오피스 CMBS (2023) — 전략적 디폴트의 교훈 | Market Story | Deal Story",
  description:
    "세계 최대 사모펀드 Blackstone이 오피스 CMBS 대출 상환을 의도적으로 거부했다. WFH 시대 오피스 부동산의 구조적 위기와 CMBS 투자자의 딜레마 완전 해설.",
  keywords: ["CMBS", "오피스부동산", "전략적디폴트", "Blackstone", "WFH", "구조화금융", "스페셜서비서"],
  openGraph: {
    title: "Blackstone 오피스 CMBS (2023) — 전략적 디폴트의 교훈 | Deal Story",
    description: "Blackstone이 오피스 CMBS 상환 거부. WFH 시대 CMBS 구조적 위기 완전 해설.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/blackstone-office-cmbs-2023",
    languages: {
      ko: "/market/blackstone-office-cmbs-2023",
      en: "/en/market/blackstone-office-cmbs-2023",
      "x-default": "/market/blackstone-office-cmbs-2023",
    },
  },
};

export default function BlackstoneOfficePage() {
  const deal = getMarketDealBySlug("blackstone-office-cmbs-2023");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Blackstone 오피스 CMBS (2023) — 전략적 디폴트의 교훈 | Deal Story",
    description: deal.excerpt,
    datePublished: `${deal.dealYear}-01-01`,
    publisher: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/blackstone-office-cmbs-2023` },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "마켓", item: `${SITE_URL}/market` },
        { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/blackstone-office-cmbs-2023` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlackstoneOfficeClient deal={deal} lang="ko" />
    </>
  );
}
