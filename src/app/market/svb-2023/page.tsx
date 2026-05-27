import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import SVBClient from "./SVBClient";

export const metadata: Metadata = {
  title: "실리콘밸리뱅크(SVB) 붕괴 — Market Story | Deal Story",
  description:
    "2023년 3월 48시간 만에 사라진 $2,090억 은행. HTM 포트폴리오, ALM 실패, Twitter발 뱅크런, BTFP까지 — 금리 인상 시대의 교과서적 은행 위기.",
  keywords: ["SVB", "실리콘밸리뱅크", "HTM", "ALM", "뱅크런", "BTFP", "FIG", "금리리스크", "2023 은행위기"],
  openGraph: {
    title: "실리콘밸리뱅크(SVB) 붕괴 — Market Story | Deal Story",
    description:
      "2023년 3월 48시간 만에 사라진 $2,090억 은행. HTM 포트폴리오, ALM 실패, Twitter발 뱅크런의 전말.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/svb-2023",
    languages: {
      ko: "/market/svb-2023",
      en: "/en/market/svb-2023",
      "x-default": "/market/svb-2023",
    },
  },
};

export default function SVBPage() {
  const deal = getMarketDealBySlug("svb-2023");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "실리콘밸리뱅크(SVB) 붕괴 — Market Story | Deal Story",
        description:
          "2023년 3월 48시간 만에 사라진 $2,090억 은행. HTM 포트폴리오, ALM 실패, Twitter발 뱅크런의 전말.",
        datePublished: "2023-03-10",
        dateModified: "2023-03-10",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/market/svb-2023`,
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
            item: `${SITE_URL}/market/svb-2023`,
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
      <SVBClient deal={deal} lang="ko" />
    </>
  );
}
