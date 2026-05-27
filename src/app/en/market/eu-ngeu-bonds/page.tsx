import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import EuNgeuBondsClient from "@/app/market/eu-ngeu-bonds/EuNgeuBondsClient";

export const metadata: Metadata = {
  title: "EU NGEU/SURE Bonds (2020~) — Birth of European Joint Debt | Deal Story",
  description:
    "COVID response transformed the EU into one of the world's largest SSA issuers overnight. A political and structural watershed in European debt.",
  keywords: ["NGEU", "SURE", "EU bonds", "European Joint Debt", "SSA", "Green Bond"],
  openGraph: {
    title: "EU NGEU/SURE Bonds (2020~) — Birth of European Joint Debt",
    description: "COVID response transformed the EU into one of the world's largest SSA issuers overnight. A political and structural watershed in European debt.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/eu-ngeu-bonds",
    languages: {
      ko: "/market/eu-ngeu-bonds",
      en: "/en/market/eu-ngeu-bonds",
      "x-default": "/market/eu-ngeu-bonds",
    },
  },
};

export default function EuNgeuBondsPageEn() {
  const deal = getMarketDealBySlug("eu-ngeu-bonds");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "EU NGEU/SURE Bonds (2020~) — Birth of European Joint Debt | Deal Story",
        description: "COVID response transformed the EU into one of the world's largest SSA issuers overnight. A political and structural watershed in European debt.",
        datePublished: "2020-10-20",
        dateModified: "2020-10-20",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/market/eu-ngeu-bonds` },
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
          { "@type": "ListItem", position: 3, name: deal.titleEn, item: `${SITE_URL}/en/market/eu-ngeu-bonds` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <EuNgeuBondsClient deal={deal} lang="en" />
    </>
  );
}
