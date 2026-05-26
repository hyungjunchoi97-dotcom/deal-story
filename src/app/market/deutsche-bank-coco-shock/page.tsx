import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import DeutscheBankCocoClient from "./DeutscheBankCocoClient";

export const metadata: Metadata = {
  title: "도이체방크 코코 쇼크 (2016) — AT1 쿠폰 공포의 탄생 | Deal Story",
  description:
    "AT1 쿠폰 미지급 공포가 시장을 처음 흔든 사건. CS AT1 사태의 예고편이자, 계약서를 읽어야 하는 이유.",
  keywords: ["AT1", "CoCo", "도이체방크", "ADI", "쿠폰리스크", "FIG", "Deutsche Bank"],
  openGraph: {
    title: "도이체방크 코코 쇼크 (2016) — AT1 쿠폰 공포의 탄생",
    description: "AT1 쿠폰 미지급 공포가 시장을 처음 흔든 사건. CS AT1 사태의 예고편이자, 계약서를 읽어야 하는 이유.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/deutsche-bank-coco-shock",
    languages: {
      ko: "/market/deutsche-bank-coco-shock",
      en: "/en/market/deutsche-bank-coco-shock",
      "x-default": "/market/deutsche-bank-coco-shock",
    },
  },
};

export default function DeutscheBankCocoPage() {
  const deal = getMarketDealBySlug("deutsche-bank-coco-shock");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "도이체방크 코코 쇼크 (2016) — AT1 쿠폰 공포의 탄생 | Deal Story",
        description:
          "AT1 쿠폰 미지급 공포가 시장을 처음 흔든 사건. CS AT1 사태의 예고편.",
        datePublished: "2016-02-09",
        dateModified: "2016-02-09",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/market/deutsche-bank-coco-shock`,
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
            item: `${SITE_URL}/market/deutsche-bank-coco-shock`,
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
      <DeutscheBankCocoClient deal={deal} lang="ko" />
    </>
  );
}
