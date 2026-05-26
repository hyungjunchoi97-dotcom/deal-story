import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import AppleBondStrategyClient from "@/app/market/apple-bond-strategy/AppleBondStrategyClient";

export const metadata: Metadata = {
  title: "Apple's Bond Strategy (2013~) — Why Borrow When You're Sitting on Cash? | Deal Story",
  description:
    "A company with $100B+ cash issues bonds. Tax optimization and buyback financing — issuance without funding need.",
  keywords: ["Apple", "Apple Bond", "Share Buyback", "Tax Optimization", "Offshore Cash", "Investment Grade"],
  openGraph: {
    title: "Apple's Bond Strategy (2013~) — Why Borrow When You're Sitting on Cash?",
    description: "A company with $100B+ cash issues bonds. Tax optimization and buyback financing — issuance without funding need.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/apple-bond-strategy",
    languages: {
      ko: "/market/apple-bond-strategy",
      en: "/en/market/apple-bond-strategy",
      "x-default": "/market/apple-bond-strategy",
    },
  },
};

export default function AppleBondStrategyPageEn() {
  const deal = getMarketDealBySlug("apple-bond-strategy");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Apple's Bond Strategy (2013~) — Why Borrow When You're Sitting on Cash? | Deal Story",
        description: "A company with $100B+ cash issues bonds. Tax optimization and buyback financing — issuance without funding need.",
        datePublished: "2013-04-30",
        dateModified: "2013-04-30",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/market/apple-bond-strategy` },
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
          { "@type": "ListItem", position: 3, name: deal.titleEn, item: `${SITE_URL}/en/market/apple-bond-strategy` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AppleBondStrategyClient deal={deal} lang="en" />
    </>
  );
}
