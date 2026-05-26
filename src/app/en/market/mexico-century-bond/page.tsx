import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import MexicoCenturyClient from "@/app/market/mexico-century-bond/MexicoCenturyClient";

export const metadata: Metadata = {
  title: "Mexico Century Bond (2010) — The EM Centennial Pioneer | Deal Story",
  description:
    "The first EM dollar century bond. $1B issued in 2010 at 5.75%, 4x oversubscribed. The pioneer that inspired Argentina and Chile. Fourteen years without default.",
  keywords: ["Mexico", "Century Bond", "EM", "BBB", "Tequila Crisis", "sovereign bond", "NAFTA", "Rule 144A"],
  openGraph: {
    title: "Mexico Century Bond (2010) — The EM Centennial Pioneer | Deal Story",
    description: "The first EM dollar century bond. 4x oversubscribed in 2010 — still standing 14 years later, unlike Argentina.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/mexico-century-bond",
    languages: {
      ko: "/market/mexico-century-bond",
      en: "/en/market/mexico-century-bond",
      "x-default": "/market/mexico-century-bond",
    },
  },
};

export default function MexicoCenturyPageEn() {
  const deal = getMarketDealBySlug("mexico-century-bond");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Mexico Century Bond (2010) — The EM Centennial Pioneer | Deal Story",
        description:
          "The first EM dollar century bond. $1B issued in 2010 at 5.75%, 4x oversubscribed. The pioneer that inspired Argentina and Chile.",
        datePublished: "2010-10-05",
        dateModified: "2024-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/mexico-century-bond`,
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
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/en/market` },
          {
            "@type": "ListItem",
            position: 3,
            name: deal.titleEn,
            item: `${SITE_URL}/en/market/mexico-century-bond`,
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
      <MexicoCenturyClient deal={deal} lang="en" />
    </>
  );
}
