import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import Austria100yrClient from "@/app/market/austria-100yr/Austria100yrClient";

export const metadata: Metadata = {
  title: "Austria 100-Year Bond (2017) — Duration's Double Edge | Deal Story",
  description:
    "Austria's AA+ government bond surged to 230 in 2020, then crashed to 46 in 2022 — an 80% loss. The definitive proof that credit quality alone cannot prevent extreme losses when duration is extreme.",
  keywords: ["Austria", "Century Bond", "100-year bond", "duration risk", "modified duration", "ECB", "convexity", "interest rate risk"],
  openGraph: {
    title: "Austria 100-Year Bond (2017) — Duration's Double Edge | Deal Story",
    description: "AA+ government bond peaked at 230, then crashed 80% to 46. Credit quality does not prevent extreme duration losses.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/austria-100yr",
    languages: {
      ko: "/market/austria-100yr",
      en: "/en/market/austria-100yr",
      "x-default": "/market/austria-100yr",
    },
  },
};

export default function Austria100yrPageEn() {
  const deal = getMarketDealBySlug("austria-100yr");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Austria 100-Year Bond (2017) — Duration's Double Edge | Deal Story",
        description:
          "Austria's AA+ government bond surged to 230 in 2020, then crashed to 46 in 2022 — an 80% loss. The definitive proof that credit quality alone cannot prevent extreme losses when duration is extreme.",
        datePublished: "2017-09-12",
        dateModified: "2022-12-31",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/en/market/austria-100yr`,
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
            item: `${SITE_URL}/en/market/austria-100yr`,
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
      <Austria100yrClient deal={deal} lang="en" />
    </>
  );
}
