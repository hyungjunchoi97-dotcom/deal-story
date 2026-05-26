import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import SantanderAt1Client from "./SantanderAt1Client";

export const metadata: Metadata = {
  title: "산탄데르 AT1 콜 스킵 (2019) — 관행을 깬 순간 | Deal Story",
  description:
    "당연히 콜에 갚겠지라는 시장 관행을 깬 첫 사례. Extension risk가 FIG 자본채에서 실제로 터진 케이스.",
  keywords: ["AT1", "콜옵션", "Extension Risk", "산탄데르", "FIG", "쿠폰리셋", "Santander"],
  openGraph: {
    title: "산탄데르 AT1 콜 스킵 (2019) — 관행을 깬 순간",
    description: "당연히 콜에 갚겠지라는 시장 관행을 깬 첫 사례. Extension risk가 FIG 자본채에서 실제로 터진 케이스.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/santander-at1-no-call",
    languages: {
      ko: "/market/santander-at1-no-call",
      en: "/en/market/santander-at1-no-call",
      "x-default": "/market/santander-at1-no-call",
    },
  },
};

export default function SantanderAt1Page() {
  const deal = getMarketDealBySlug("santander-at1-no-call");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "산탄데르 AT1 콜 스킵 (2019) — 관행을 깬 순간 | Deal Story",
        description:
          "당연히 콜에 갚겠지라는 시장 관행을 깬 첫 사례. Extension risk가 FIG 자본채에서 실제로 터진 케이스.",
        datePublished: "2019-02-12",
        dateModified: "2019-02-12",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/market/santander-at1-no-call`,
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
            item: `${SITE_URL}/market/santander-at1-no-call`,
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
      <SantanderAt1Client deal={deal} lang="ko" />
    </>
  );
}
