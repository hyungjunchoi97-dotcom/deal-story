import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import GermanyNegativeYieldClient from "./GermanyNegativeYieldClient";

export const metadata: Metadata = {
  title: "독일 마이너스 금리 국채 (2016~2019) — 손실 확정 채권을 왜 샀나 | Deal Story",
  description:
    "돈을 잃는 게 확정인 채권을 왜 샀나. 채권시장이 상식을 벗어날 수 있음을 보여준 초현실의 4년.",
  keywords: ["NIRP", "마이너스금리", "독일국채", "Bund", "ECB", "양적완화"],
  openGraph: {
    title: "독일 마이너스 금리 국채 (2016~2019) — 손실 확정 채권을 왜 샀나",
    description: "돈을 잃는 게 확정인 채권을 왜 샀나. 채권시장이 상식을 벗어날 수 있음을 보여준 초현실의 4년.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/germany-negative-yield",
    languages: {
      ko: "/market/germany-negative-yield",
      en: "/en/market/germany-negative-yield",
      "x-default": "/market/germany-negative-yield",
    },
  },
};

export default function GermanyNegativeYieldPage() {
  const deal = getMarketDealBySlug("germany-negative-yield");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "독일 마이너스 금리 국채 (2016~2019) — 손실 확정 채권을 왜 샀나 | Deal Story",
        description: "돈을 잃는 게 확정인 채권을 왜 샀나. 채권시장이 상식을 벗어날 수 있음을 보여준 초현실의 4년.",
        datePublished: "2016-06-01",
        dateModified: "2016-06-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/germany-negative-yield` },
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
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/germany-negative-yield` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GermanyNegativeYieldClient deal={deal} lang="ko" />
    </>
  );
}
