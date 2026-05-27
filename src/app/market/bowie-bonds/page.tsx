import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import BowieBondsClient from "./BowieBondsClient";

export const metadata: Metadata = {
  title: "보위 본드 (1997) — 미래 로열티를 증권화하다 | Deal Story",
  description:
    "데이비드 보위가 미래 음악 로열티 수익을 채권으로 팔았다. 구조화금융의 창의성과 한계를 동시에 가르치는 전설적 딜.",
  keywords: ["ABS", "증권화", "로열티", "구조화금융", "Bowie", "보위본드"],
  openGraph: {
    title: "보위 본드 (1997) — 미래 로열티를 증권화하다",
    description: "데이비드 보위가 미래 음악 로열티 수익을 채권으로 팔았다. 구조화금융의 창의성과 한계를 동시에 가르치는 전설적 딜.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/bowie-bonds",
    languages: {
      ko: "/market/bowie-bonds",
      en: "/en/market/bowie-bonds",
      "x-default": "/market/bowie-bonds",
    },
  },
};

export default function BowieBondsPage() {
  const deal = getMarketDealBySlug("bowie-bonds");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "보위 본드 (1997) — 미래 로열티를 증권화하다 | Deal Story",
        description: "데이비드 보위가 미래 음악 로열티 수익을 채권으로 팔았다. 구조화금융의 창의성과 한계를 동시에 가르치는 전설적 딜.",
        datePublished: "1997-01-01",
        dateModified: "1997-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/bowie-bonds` },
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
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/bowie-bonds` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BowieBondsClient deal={deal} lang="ko" />
    </>
  );
}
