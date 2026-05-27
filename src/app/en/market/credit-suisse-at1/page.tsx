import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import CreditSuisseAT1Client from "@/app/market/credit-suisse-at1/CreditSuisseAT1Client";

export const metadata: Metadata = {
  title: "Credit Suisse AT1 Write-Down (2023) — Market Story | Deal Story",
  description:
    "$17B of AT1 written to zero. Equity survived while bondholders were wiped out. The definitive case study on why you must read the prospectus.",
  keywords: ["AT1", "CoCo", "Credit Suisse", "PONV", "bail-in", "FIG", "capital structure", "Basel III"],
  openGraph: {
    title: "Credit Suisse AT1 Write-Down (2023) — Market Story | Deal Story",
    description:
      "$17B of AT1 written to zero. Equity survived while bondholders were wiped out. The definitive case study on why you must read the prospectus.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/credit-suisse-at1",
    languages: {
      ko: "/market/credit-suisse-at1",
      en: "/en/market/credit-suisse-at1",
      "x-default": "/market/credit-suisse-at1",
    },
  },
};

export default function CreditSuisseAT1PageEn() {
  const deal = getMarketDealBySlug("credit-suisse-at1");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Credit Suisse AT1 Write-Down (2023) — Market Story | Deal Story",
        description:
          "$17B of AT1 written to zero. Equity survived while bondholders were wiped out. The definitive case study on why you must read the prospectus.",
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
          "@id": `${SITE_URL}/en/market/credit-suisse-at1`,
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
            item: `${SITE_URL}/en/market/credit-suisse-at1`,
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
      <CreditSuisseAT1Client deal={deal} lang="en" />
    </>
  );
}
