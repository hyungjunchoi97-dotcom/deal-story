import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import KoreaExternalBondClient from "@/app/market/korea-1998-external-bond/KoreaExternalBondClient";

export const metadata: Metadata = {
  title: "Korea 1998 External Bond — Market Story | Deal Story",
  description:
    "Korea's first return to international bond markets after the IMF crisis. From T+345bp to T+60bp — the origin story of 30 years of Korean sovereign credit.",
  keywords: [
    "Korea external bond", "1998 IMF crisis", "sovereign bond", "T+345bp",
    "CAC", "Reach for Yield", "Korean paper", "KEXIM", "EM recovery",
  ],
  openGraph: {
    title: "Korea 1998 External Bond — Market Story | Deal Story",
    description:
      "Korea's first return to international bond markets after the IMF crisis. From T+345bp to T+60bp — 30 years of Korean sovereign credit in one deal.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/korea-1998-external-bond",
    languages: {
      ko: "/market/korea-1998-external-bond",
      en: "/en/market/korea-1998-external-bond",
      "x-default": "/market/korea-1998-external-bond",
    },
  },
};

export default function KoreaExternalBondPageEn() {
  const deal = getMarketDealBySlug("korea-1998-external-bond");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Korea 1998 External Bond — Market Story | Deal Story",
        description:
          "Korea's first return to international bond markets after the IMF crisis. From T+345bp to T+60bp — the origin story of 30 years of Korean sovereign credit.",
        datePublished: "1998-04-01",
        dateModified: "1998-04-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/korea-1998-external-bond`,
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
            item: `${SITE_URL}/en/market/korea-1998-external-bond`,
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
      <KoreaExternalBondClient deal={deal} lang="en" />
    </>
  );
}
