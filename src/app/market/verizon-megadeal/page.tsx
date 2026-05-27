import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import VerizonMegadealClient from "./VerizonMegadealClient";

export const metadata: Metadata = {
  title: "Verizon $490억 회사채 (2013) — 당시 사상 최대 | Deal Story",
  description:
    "M&A 자금조달이 어떻게 역사적 메가딜로 이어지는지. 대규모 북빌딩의 표본.",
  keywords: ["Verizon", "메가딜", "회사채", "북빌딩", "M&A채권", "투자등급"],
  openGraph: {
    title: "Verizon $490억 회사채 (2013) — 당시 사상 최대",
    description: "M&A 자금조달이 어떻게 역사적 메가딜로 이어지는지. 대규모 북빌딩의 표본.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/verizon-megadeal",
    languages: {
      ko: "/market/verizon-megadeal",
      en: "/en/market/verizon-megadeal",
      "x-default": "/market/verizon-megadeal",
    },
  },
};

export default function VerizonMegadealPage() {
  const deal = getMarketDealBySlug("verizon-megadeal");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Verizon $490억 회사채 (2013) — 당시 사상 최대 | Deal Story",
        description: "M&A 자금조달이 어떻게 역사적 메가딜로 이어지는지. 대규모 북빌딩의 표본.",
        datePublished: "2013-09-11",
        dateModified: "2013-09-11",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/verizon-megadeal` },
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
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/verizon-megadeal` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <VerizonMegadealClient deal={deal} lang="ko" />
    </>
  );
}
