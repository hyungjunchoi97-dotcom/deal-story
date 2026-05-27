import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import DeutscheBankCocoClient from "@/app/market/deutsche-bank-coco-shock/DeutscheBankCocoClient";

export const metadata: Metadata = {
  title: "Deutsche Bank CoCo Shock (2016) — The Birth of AT1 Coupon Fear | Deal Story",
  description:
    "The first market scare over AT1 coupon non-payment. The preview to the CS AT1 episode and a lesson in reading prospectuses.",
  keywords: ["AT1", "CoCo", "Deutsche Bank", "ADI", "Coupon Risk", "FIG"],
  openGraph: {
    title: "Deutsche Bank CoCo Shock (2016) — The Birth of AT1 Coupon Fear",
    description: "The first market scare over AT1 coupon non-payment. The preview to the CS AT1 episode.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/deutsche-bank-coco-shock",
    languages: {
      ko: "/market/deutsche-bank-coco-shock",
      en: "/en/market/deutsche-bank-coco-shock",
      "x-default": "/market/deutsche-bank-coco-shock",
    },
  },
};

export default function DeutscheBankCocoPageEn() {
  const deal = getMarketDealBySlug("deutsche-bank-coco-shock");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Deutsche Bank CoCo Shock (2016) — The Birth of AT1 Coupon Fear | Deal Story",
        description:
          "The first market scare over AT1 coupon non-payment. The preview to the CS AT1 episode.",
        datePublished: "2016-02-09",
        dateModified: "2016-02-09",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/deutsche-bank-coco-shock`,
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
            item: `${SITE_URL}/en/market/deutsche-bank-coco-shock`,
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
      <DeutscheBankCocoClient deal={deal} lang="en" />
    </>
  );
}
