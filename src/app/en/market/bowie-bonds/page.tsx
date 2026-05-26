import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import BowieBondsClient from "@/app/market/bowie-bonds/BowieBondsClient";

export const metadata: Metadata = {
  title: "Bowie Bonds (1997) — Securitizing Future Royalties | Deal Story",
  description:
    "David Bowie sold future music royalty streams as a bond. A legendary deal that teaches both the creativity and limits of structured finance.",
  keywords: ["ABS", "Securitization", "Royalty", "Structured Finance", "Bowie Bonds"],
  openGraph: {
    title: "Bowie Bonds (1997) — Securitizing Future Royalties",
    description: "David Bowie sold future music royalty streams as a bond. A legendary deal that teaches both the creativity and limits of structured finance.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/bowie-bonds",
    languages: {
      ko: "/market/bowie-bonds",
      en: "/en/market/bowie-bonds",
      "x-default": "/market/bowie-bonds",
    },
  },
};

export default function BowieBondsPageEn() {
  const deal = getMarketDealBySlug("bowie-bonds");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Bowie Bonds (1997) — Securitizing Future Royalties | Deal Story",
        description: "David Bowie sold future music royalty streams as a bond. A legendary deal that teaches both the creativity and limits of structured finance.",
        datePublished: "1997-01-01",
        dateModified: "1997-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/market/bowie-bonds` },
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
          { "@type": "ListItem", position: 3, name: deal.titleEn, item: `${SITE_URL}/en/market/bowie-bonds` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BowieBondsClient deal={deal} lang="en" />
    </>
  );
}
