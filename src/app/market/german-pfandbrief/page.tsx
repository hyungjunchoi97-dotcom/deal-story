import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import GermanPfandbriefClient from "./GermanPfandbriefClient";

export const metadata: Metadata = {
  title: "독일 Pfandbrief — 200년 커버드본드의 역사 | Deal Story",
  description:
    "이중청구권의 우아함. 2008년 증권화는 죽었고 커버드는 살아남은 이유.",
  keywords: ["Pfandbrief", "커버드본드", "이중청구권", "독일", "Cover Pool", "구조채"],
  openGraph: {
    title: "독일 Pfandbrief — 200년 커버드본드의 역사",
    description: "이중청구권의 우아함. 2008년 증권화는 죽었고 커버드는 살아남은 이유.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/german-pfandbrief",
    languages: {
      ko: "/market/german-pfandbrief",
      en: "/en/market/german-pfandbrief",
      "x-default": "/market/german-pfandbrief",
    },
  },
};

export default function GermanPfandbriefPage() {
  const deal = getMarketDealBySlug("german-pfandbrief");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "독일 Pfandbrief — 200년 커버드본드의 역사 | Deal Story",
        description: "이중청구권의 우아함. 2008년 증권화는 죽었고 커버드는 살아남은 이유.",
        datePublished: "1769-01-01",
        dateModified: "1769-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/german-pfandbrief` },
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
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/german-pfandbrief` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GermanPfandbriefClient deal={deal} lang="ko" />
    </>
  );
}
