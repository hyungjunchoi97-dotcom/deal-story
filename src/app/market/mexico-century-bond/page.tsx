import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import MexicoCenturyClient from "./MexicoCenturyClient";

export const metadata: Metadata = {
  title: "멕시코 100년물 (2010) — EM 초장기물의 효시 | Deal Story",
  description:
    "EM 국가 최초의 달러 100년물. 2010년 5.75% 쿠폰으로 $10억 발행, 4배 초과청약. 아르헨티나와 칠레가 따른 선구자. 14년간 디폴트 없는 신용 역사.",
  keywords: ["멕시코", "100년물", "Century Bond", "EM", "BBB", "테킬라 위기", "sovereign", "NAFTA"],
  openGraph: {
    title: "멕시코 100년물 (2010) — EM 초장기물의 효시 | Deal Story",
    description: "EM 최초 달러 100년물. 14년간 디폴트 없는 신용 역사와 아르헨티나 디폴트 대비.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/mexico-century-bond",
    languages: {
      ko: "/market/mexico-century-bond",
      en: "/en/market/mexico-century-bond",
      "x-default": "/market/mexico-century-bond",
    },
  },
};

export default function MexicoCenturyPage() {
  const deal = getMarketDealBySlug("mexico-century-bond");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "멕시코 100년물 (2010) — EM 초장기물의 효시 | Deal Story",
        description:
          "EM 국가 최초의 달러 100년물. 2010년 $10억 발행, 4배 초과청약. 이후 아르헨티나·칠레가 따른 선구자 사례.",
        datePublished: "2010-10-05",
        dateModified: "2024-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/market/mexico-century-bond`,
        },
        inLanguage: "ko",
        keywords: deal.tags.join(", "),
      },
      ...(deal.faq && deal.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: deal.faq.map(({ q, a }) => ({
                "@type": "Question",
                name: q,
                acceptedAnswer: { "@type": "Answer", text: a },
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/market` },
          {
            "@type": "ListItem",
            position: 3,
            name: deal.title,
            item: `${SITE_URL}/market/mexico-century-bond`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MexicoCenturyClient deal={deal} lang="ko" />
    </>
  );
}
