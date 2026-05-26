import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import WorldBankGreenBondClient from "./WorldBankGreenBondClient";

export const metadata: Metadata = {
  title: "세계은행 최초 그린본드 (2008) — ESG 채권시장의 기원 | Deal Story",
  description:
    "지금 수조 달러 ESG 채권시장 전체의 기원. 스웨덴 연기금의 질문 하나가 새로운 자산군을 창조했다.",
  keywords: ["그린본드", "ESG", "세계은행", "Use-of-Proceeds", "그린워싱", "SSA"],
  openGraph: {
    title: "세계은행 최초 그린본드 (2008) — ESG 채권시장의 기원",
    description: "지금 수조 달러 ESG 채권시장 전체의 기원. 스웨덴 연기금의 질문 하나가 새로운 자산군을 창조했다.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/world-bank-green-bond",
    languages: {
      ko: "/market/world-bank-green-bond",
      en: "/en/market/world-bank-green-bond",
      "x-default": "/market/world-bank-green-bond",
    },
  },
};

export default function WorldBankGreenBondPage() {
  const deal = getMarketDealBySlug("world-bank-green-bond");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "세계은행 최초 그린본드 (2008) — ESG 채권시장의 기원 | Deal Story",
        description: "지금 수조 달러 ESG 채권시장 전체의 기원. 스웨덴 연기금의 질문 하나가 새로운 자산군을 창조했다.",
        datePublished: "2008-11-01",
        dateModified: "2008-11-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/world-bank-green-bond` },
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
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/world-bank-green-bond` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WorldBankGreenBondClient deal={deal} lang="ko" />
    </>
  );
}
