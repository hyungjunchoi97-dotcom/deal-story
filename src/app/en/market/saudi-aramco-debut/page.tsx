import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import SaudiAramcoDebutClient from "@/app/market/saudi-aramco-debut/SaudiAramcoDebutClient";

export const metadata: Metadata = {
  title: "Saudi Aramco Debut Bond (2019) — The Largest Orderbook Ever | Deal Story",
  description:
    "Over $100 billion in orders. The apex of SOE issuance. Aramco's financials revealed publicly for the first time.",
  keywords: ["Saudi Aramco", "SOE Bond", "Orderbook", "Vision 2030", "Investment Grade"],
  openGraph: {
    title: "Saudi Aramco Debut Bond (2019) — The Largest Orderbook Ever",
    description: "Over $100 billion in orders. The apex of SOE issuance. Aramco's financials revealed publicly for the first time.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/saudi-aramco-debut",
    languages: {
      ko: "/market/saudi-aramco-debut",
      en: "/en/market/saudi-aramco-debut",
      "x-default": "/market/saudi-aramco-debut",
    },
  },
};

export default function SaudiAramcoDebutPageEn() {
  const deal = getMarketDealBySlug("saudi-aramco-debut");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Saudi Aramco Debut Bond (2019) — The Largest Orderbook Ever | Deal Story",
        description: "Over $100 billion in orders. The apex of SOE issuance. Aramco's financials revealed publicly for the first time.",
        datePublished: "2019-04-09",
        dateModified: "2019-04-09",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/market/saudi-aramco-debut` },
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
          { "@type": "ListItem", position: 3, name: deal.titleEn, item: `${SITE_URL}/en/market/saudi-aramco-debut` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SaudiAramcoDebutClient deal={deal} lang="en" />
    </>
  );
}
