import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import BlackstoneOfficeClient from "@/app/market/blackstone-office-cmbs-2023/BlackstoneOfficeClient";

export const metadata: Metadata = {
  title: "Blackstone Office CMBS (2023) — Lessons from Strategic Default | Market Story | Deal Story",
  description:
    "The world's largest private equity firm intentionally defaulted on office CMBS loans. The structural crisis of office real estate in the WFH era and the CMBS investor dilemma, fully explained.",
  keywords: ["CMBS", "office real estate", "strategic default", "Blackstone", "WFH", "structured finance", "special servicer"],
  openGraph: {
    title: "Blackstone Office CMBS (2023) — Lessons from Strategic Default | Deal Story",
    description:
      "Blackstone intentionally defaulted on office CMBS. The structural crisis of commercial real estate in the WFH era, fully explained.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/blackstone-office-cmbs-2023",
    languages: {
      ko: "/market/blackstone-office-cmbs-2023",
      en: "/en/market/blackstone-office-cmbs-2023",
      "x-default": "/market/blackstone-office-cmbs-2023",
    },
  },
};

export default function BlackstoneOfficePageEn() {
  const deal = getMarketDealBySlug("blackstone-office-cmbs-2023");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Blackstone Office CMBS (2023) — Lessons from Strategic Default | Deal Story",
        description:
          "The world's largest private equity firm intentionally defaulted on office CMBS loans. The structural crisis of office real estate in the WFH era and the CMBS investor dilemma, fully explained.",
        datePublished: "2023-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/blackstone-office-cmbs-2023`,
        },
        inLanguage: "en",
        keywords: (deal.tagsEn ?? deal.tags).join(", "),
      },
      ...(deal.faq && deal.faq.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: deal.faq.map(({ qEn, aEn }) => ({
                "@type": "Question",
                name: qEn,
                acceptedAnswer: { "@type": "Answer", text: aEn },
              })),
            },
          ]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en/` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/en/market` },
          {
            "@type": "ListItem",
            position: 3,
            name: deal.titleEn,
            item: `${SITE_URL}/en/market/blackstone-office-cmbs-2023`,
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
      <BlackstoneOfficeClient deal={deal} lang="en" />
    </>
  );
}
