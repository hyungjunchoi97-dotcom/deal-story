import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import KoreaExternalBondClient from "./KoreaExternalBondClient";

export const metadata: Metadata = {
  title: "한국 1998년 외평채 — Market Story | Deal Story",
  description:
    "IMF 직후 한국이 국제채권시장으로 복귀한 첫 딜. T+345bp에서 T+60bp까지, 한국물 30년 서사의 출발점.",
  keywords: ["외평채", "한국", "IMF", "1998", "CAC", "Sovereign", "스프레드", "달러채", "Reach for Yield"],
  openGraph: {
    title: "한국 1998년 외평채 — Market Story | Deal Story",
    description:
      "IMF 직후 한국이 국제채권시장으로 복귀한 첫 딜. T+345bp에서 T+60bp까지, 한국물 30년 서사의 출발점.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/korea-1998-external-bond",
    languages: {
      ko: "/market/korea-1998-external-bond",
      en: "/en/market/korea-1998-external-bond",
      "x-default": "/market/korea-1998-external-bond",
    },
  },
};

export default function KoreaExternalBondPage() {
  const deal = getMarketDealBySlug("korea-1998-external-bond");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "한국 1998년 외평채 — Market Story | Deal Story",
        description:
          "IMF 직후 한국이 국제채권시장으로 복귀한 첫 딜. T+345bp에서 T+60bp까지, 한국물 30년 서사의 출발점.",
        datePublished: "1998-04-01",
        dateModified: "1998-04-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/market/korea-1998-external-bond`,
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
            item: `${SITE_URL}/market/korea-1998-external-bond`,
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
      <KoreaExternalBondClient deal={deal} lang="ko" />
    </>
  );
}
