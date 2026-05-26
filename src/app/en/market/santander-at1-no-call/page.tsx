import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import SantanderAt1Client from "@/app/market/santander-at1-no-call/SantanderAt1Client";

export const metadata: Metadata = {
  title: "Santander AT1 No-Call (2019) — When Convention Broke | Deal Story",
  description:
    "The first case to break the market convention that AT1s will always be called. Extension risk materializing for the first time in FIG capital instruments.",
  keywords: ["AT1", "Call Option", "Extension Risk", "Santander", "FIG", "Coupon Reset"],
  openGraph: {
    title: "Santander AT1 No-Call (2019) — When Convention Broke",
    description: "The first case to break the market convention that AT1s will always be called. Extension risk materializing for the first time.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/santander-at1-no-call",
    languages: {
      ko: "/market/santander-at1-no-call",
      en: "/en/market/santander-at1-no-call",
      "x-default": "/market/santander-at1-no-call",
    },
  },
};

export default function SantanderAt1PageEn() {
  const deal = getMarketDealBySlug("santander-at1-no-call");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Santander AT1 No-Call (2019) — When Convention Broke | Deal Story",
        description:
          "The first case to break the market convention that AT1s will always be called. Extension risk materializing for the first time.",
        datePublished: "2019-02-12",
        dateModified: "2019-02-12",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/santander-at1-no-call`,
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
            item: `${SITE_URL}/en/market/santander-at1-no-call`,
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
      <SantanderAt1Client deal={deal} lang="en" />
    </>
  );
}
