import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import WorldBankGreenBondClient from "@/app/market/world-bank-green-bond/WorldBankGreenBondClient";

export const metadata: Metadata = {
  title: "World Bank's First Green Bond (2008) — The Origin of the ESG Bond Market | Deal Story",
  description:
    "The origin of today's multi-trillion dollar ESG bond market. A question from a Swedish pension fund created an entirely new asset class.",
  keywords: ["Green Bond", "ESG", "World Bank", "Use-of-Proceeds", "Greenwashing", "SSA"],
  openGraph: {
    title: "World Bank's First Green Bond (2008) — The Origin of the ESG Bond Market",
    description: "The origin of today's multi-trillion dollar ESG bond market. A question from a Swedish pension fund created an entirely new asset class.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/world-bank-green-bond",
    languages: {
      ko: "/market/world-bank-green-bond",
      en: "/en/market/world-bank-green-bond",
      "x-default": "/market/world-bank-green-bond",
    },
  },
};

export default function WorldBankGreenBondPageEn() {
  const deal = getMarketDealBySlug("world-bank-green-bond");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "World Bank's First Green Bond (2008) — The Origin of the ESG Bond Market | Deal Story",
        description: "The origin of today's multi-trillion dollar ESG bond market. A question from a Swedish pension fund created an entirely new asset class.",
        datePublished: "2008-11-01",
        dateModified: "2008-11-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/market/world-bank-green-bond` },
        inLanguage: "en",
        keywords: (deal.tagsEn ?? deal.tags).join(", "),
      },
      ...(deal.faq && deal.faq.length > 0
        ? [{ "@type": "FAQPage", mainEntity: deal.faq.map(({ qEn, aEn }) => ({ "@type": "Question", name: qEn, acceptedAnswer: { "@type": "Answer", text: aEn } })) }]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/en/market` },
          { "@type": "ListItem", position: 3, name: deal.titleEn, item: `${SITE_URL}/en/market/world-bank-green-bond` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <WorldBankGreenBondClient deal={deal} lang="en" />
    </>
  );
}
