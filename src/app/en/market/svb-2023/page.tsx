import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import SVBClient from "@/app/market/svb-2023/SVBClient";

export const metadata: Metadata = {
  title: "Silicon Valley Bank Collapse — Market Story | Deal Story",
  description:
    "A $209B bank gone in 48 hours in March 2023. HTM portfolio, ALM failure, Twitter-fueled bank run, BTFP — the textbook bank crisis of the rate-hike era.",
  keywords: [
    "SVB", "Silicon Valley Bank", "HTM portfolio", "ALM", "bank run",
    "BTFP", "FIG", "interest rate risk", "2023 banking crisis", "FDIC",
  ],
  openGraph: {
    title: "Silicon Valley Bank Collapse — Market Story | Deal Story",
    description:
      "A $209B bank gone in 48 hours. HTM portfolio, ALM failure, Twitter-fueled bank run — the textbook bank crisis of the rate-hike era.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/svb-2023",
    languages: {
      ko: "/market/svb-2023",
      en: "/en/market/svb-2023",
      "x-default": "/market/svb-2023",
    },
  },
};

export default function SVBPageEn() {
  const deal = getMarketDealBySlug("svb-2023");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Silicon Valley Bank Collapse — Market Story | Deal Story",
        description:
          "A $209B bank gone in 48 hours in March 2023. HTM portfolio, ALM failure, Twitter-fueled bank run, BTFP — the textbook bank crisis of the rate-hike era.",
        datePublished: "2023-03-10",
        dateModified: "2023-03-10",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/svb-2023`,
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
            item: `${SITE_URL}/en/market/svb-2023`,
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
      <SVBClient deal={deal} lang="en" />
    </>
  );
}
