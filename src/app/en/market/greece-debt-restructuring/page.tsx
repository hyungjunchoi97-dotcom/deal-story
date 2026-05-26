import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import GreeceDebtClient from "@/app/market/greece-debt-restructuring/GreeceDebtClient";

export const metadata: Metadata = {
  title: "Greece 2012 Debt Restructuring — Market Story | Deal Story",
  description:
    "The largest sovereign debt restructuring in history. €206B PSI, 53.5% haircut, retroactive CACs, and a CDS trigger — the watershed moment of the Eurozone crisis.",
  keywords: [
    "Greece debt restructuring", "PSI", "haircut", "CAC", "Eurozone crisis",
    "CDS trigger", "sovereign default", "Troika", "austerity", "IMF",
  ],
  openGraph: {
    title: "Greece 2012 Debt Restructuring — Market Story | Deal Story",
    description:
      "The largest sovereign debt restructuring in history. €206B PSI, 53.5% haircut, retroactive CACs, and a CDS trigger — the watershed moment of the Eurozone crisis.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/greece-debt-restructuring",
    languages: {
      ko: "/market/greece-debt-restructuring",
      en: "/en/market/greece-debt-restructuring",
      "x-default": "/market/greece-debt-restructuring",
    },
  },
};

export default function GreeceDebtRestructuringPageEn() {
  const deal = getMarketDealBySlug("greece-debt-restructuring");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Greece 2012 Debt Restructuring — Market Story | Deal Story",
        description:
          "The largest sovereign debt restructuring in history. €206B PSI, 53.5% haircut, retroactive CACs, and a CDS trigger — the watershed moment of the Eurozone crisis.",
        datePublished: "2012-03-01",
        dateModified: "2012-03-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/greece-debt-restructuring`,
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
            item: `${SITE_URL}/en/market/greece-debt-restructuring`,
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
      <GreeceDebtClient deal={deal} lang="en" />
    </>
  );
}
