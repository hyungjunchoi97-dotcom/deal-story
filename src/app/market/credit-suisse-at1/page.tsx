import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import CreditSuisseAT1Client from "./CreditSuisseAT1Client";

export const metadata: Metadata = {
  title: "크레디트 스위스 AT1 전액상각 (2023) — Market Story | Deal Story",
  description:
    "CHF 160억 AT1이 0이 됐다. 주주는 살았고 채권자가 먼저 죽은 자본구조 역전 사건. 계약서를 읽어야 하는 이유.",
  keywords: ["AT1", "CoCo", "크레디트스위스", "PONV", "베일인", "FIG", "자본구조", "Basel III"],
  openGraph: {
    title: "크레디트 스위스 AT1 전액상각 (2023) — Market Story",
    description: "CHF 160억 AT1이 0이 됐다. 주주는 살았고 채권자가 먼저 죽은 자본구조 역전 사건.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/credit-suisse-at1",
    languages: {
      ko: "/market/credit-suisse-at1",
      en: "/en/market/credit-suisse-at1",
      "x-default": "/market/credit-suisse-at1",
    },
  },
};

export default function CreditSuisseAT1Page() {
  const deal = getMarketDealBySlug("credit-suisse-at1");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "크레디트 스위스 AT1 전액상각 (2023) — Market Story | Deal Story",
        description:
          "CHF 160억 AT1이 0이 됐다. 주주는 살았고 채권자가 먼저 죽은 자본구조 역전 사건.",
        datePublished: "2023-03-19",
        dateModified: "2023-03-19",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/market/credit-suisse-at1`,
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
            item: `${SITE_URL}/market/credit-suisse-at1`,
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
      <CreditSuisseAT1Client deal={deal} lang="ko" />
    </>
  );
}
