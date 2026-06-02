import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import AbacusClient from "@/app/market/abacus-2007-ac1/AbacusClient";

export const metadata: Metadata = {
  title: "Abacus 2007-AC1 — The Goldman Sachs CDO Fraud & The Big Short | Market Story | Deal Story",
  description:
    "John Paulson designed it to short, Goldman sold it. The SEC's largest-ever settlement at $550M. A complete breakdown of Abacus 2007-AC1, the real deal behind The Big Short.",
  keywords: ["Abacus CDO", "Goldman Sachs", "synthetic CDO", "Big Short", "SEC", "structured finance", "John Paulson"],
  openGraph: {
    title: "Abacus 2007-AC1 — The Goldman Sachs CDO Fraud | Deal Story",
    description:
      "Paulson designed it, Goldman sold it. SEC $550M settlement. The complete breakdown of The Big Short's real deal.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/abacus-2007-ac1",
    languages: {
      ko: "/market/abacus-2007-ac1",
      en: "/en/market/abacus-2007-ac1",
      "x-default": "/market/abacus-2007-ac1",
    },
  },
};

export default function AbacusPageEn() {
  const deal = getMarketDealBySlug("abacus-2007-ac1");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Abacus 2007-AC1 — The Goldman Sachs CDO Fraud & The Big Short | Deal Story",
        description:
          "John Paulson designed it to short, Goldman sold it. The SEC's largest-ever settlement at $550M. A complete breakdown of Abacus 2007-AC1, the real deal behind The Big Short.",
        datePublished: "2007-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/abacus-2007-ac1`,
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
            item: `${SITE_URL}/en/market/abacus-2007-ac1`,
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
      <AbacusClient deal={deal} lang="en" />
    </>
  );
}
