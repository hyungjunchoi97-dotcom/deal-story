import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import HertzFleetClient from "@/app/market/hertz-fleet-abs-2020/HertzFleetClient";

export const metadata: Metadata = {
  title: "Hertz Fleet ABS (2020) — AAA Survives Bankruptcy | Market Story | Deal Story",
  description:
    "Hertz, the world's top car rental company, went bankrupt due to COVID. But vehicle-backed ABS AAA investors recovered in full. A $14B real-world proof of True Sale and bankruptcy remoteness.",
  keywords: ["Hertz ABS", "bankruptcy remote", "True Sale", "auto ABS", "COVID", "structured finance", "SPV"],
  openGraph: {
    title: "Hertz Fleet ABS (2020) — AAA Survives Bankruptcy | Deal Story",
    description:
      "Hertz bankrupt, but AAA ABS investors recovered in full. The real-world proof of True Sale and bankruptcy remoteness.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/hertz-fleet-abs-2020",
    languages: {
      ko: "/market/hertz-fleet-abs-2020",
      en: "/en/market/hertz-fleet-abs-2020",
      "x-default": "/market/hertz-fleet-abs-2020",
    },
  },
};

export default function HertzFleetPageEn() {
  const deal = getMarketDealBySlug("hertz-fleet-abs-2020");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Hertz Fleet ABS (2020) — AAA Survives Bankruptcy | Deal Story",
        description:
          "Hertz, the world's top car rental company, went bankrupt due to COVID. But vehicle-backed ABS AAA investors recovered in full. A $14B real-world proof of True Sale and bankruptcy remoteness.",
        datePublished: "2020-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/hertz-fleet-abs-2020`,
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
            item: `${SITE_URL}/en/market/hertz-fleet-abs-2020`,
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
      <HertzFleetClient deal={deal} lang="en" />
    </>
  );
}
