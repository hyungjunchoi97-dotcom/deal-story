import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import PandaSamuraiClient from "@/app/market/panda-samurai-geopolitics/PandaSamuraiClient";

export const metadata: Metadata = {
  title: "Panda & Samurai Bonds — The Geopolitics of Currency | Deal Story",
  description:
    "How political and monetary forces open and close foreign-currency bond markets for overseas issuers.",
  keywords: ["Panda Bond", "Samurai Bond", "RMB Internationalization", "Cross-Currency Swap", "Geopolitics"],
  openGraph: {
    title: "Panda & Samurai Bonds — The Geopolitics of Currency",
    description: "How political and monetary forces open and close foreign-currency bond markets for overseas issuers.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/panda-samurai-geopolitics",
    languages: {
      ko: "/market/panda-samurai-geopolitics",
      en: "/en/market/panda-samurai-geopolitics",
      "x-default": "/market/panda-samurai-geopolitics",
    },
  },
};

export default function PandaSamuraiPageEn() {
  const deal = getMarketDealBySlug("panda-samurai-geopolitics");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Panda & Samurai Bonds — The Geopolitics of Currency | Deal Story",
        description: "How political and monetary forces open and close foreign-currency bond markets for overseas issuers.",
        datePublished: "2005-01-01",
        dateModified: "2005-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/market/panda-samurai-geopolitics` },
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
          { "@type": "ListItem", position: 3, name: deal.titleEn, item: `${SITE_URL}/en/market/panda-samurai-geopolitics` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PandaSamuraiClient deal={deal} lang="en" />
    </>
  );
}
