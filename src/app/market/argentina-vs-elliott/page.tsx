import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import ArgentinaElliottClient from "./ArgentinaElliottClient";

export const metadata: Metadata = {
  title: "아르헨티나 vs 엘리엇 — 군함을 압류한 헤지펀드 | Deal Story",
  description:
    "pari passu·holdout·CAC의 기원. 엘리엇이 아르헨티나 군함을 가나에서 압류한 전설. $1,000억 디폴트에서 $46억 합의까지 15년 분쟁의 전말.",
  keywords: ["아르헨티나", "엘리엇", "NML Capital", "pari passu", "holdout", "CAC", "sovereign 디폴트", "vulture fund", "ARA Libertad"],
  openGraph: {
    title: "아르헨티나 vs 엘리엇 — 군함을 압류한 헤지펀드 | Deal Story",
    description:
      "pari passu·holdout·CAC의 기원. 엘리엇이 아르헨티나 군함을 가나에서 압류한 전설.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/argentina-vs-elliott",
    languages: {
      ko: "/market/argentina-vs-elliott",
      en: "/en/market/argentina-vs-elliott",
      "x-default": "/market/argentina-vs-elliott",
    },
  },
};

export default function ArgentinaElliottPage() {
  const deal = getMarketDealBySlug("argentina-vs-elliott");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "아르헨티나 vs 엘리엇 — 군함을 압류한 헤지펀드 | Deal Story",
        description:
          "pari passu·holdout·CAC의 기원. 엘리엇이 아르헨티나 군함을 가나에서 압류한 전설. $1,000억 디폴트에서 $46억 합의까지 15년 분쟁의 전말.",
        datePublished: "2001-12-23",
        dateModified: "2016-02-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/market/argentina-vs-elliott`,
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
            item: `${SITE_URL}/market/argentina-vs-elliott`,
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
      <ArgentinaElliottClient deal={deal} lang="ko" />
    </>
  );
}
