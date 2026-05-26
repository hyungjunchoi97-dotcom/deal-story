import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import VerizonMegadealClient from "@/app/market/verizon-megadeal/VerizonMegadealClient";

export const metadata: Metadata = {
  title: "Verizon $49B Bond (2013) — Then the Largest Corporate Ever | Deal Story",
  description:
    "How M&A financing turns into a historic megadeal. The definitive example of large-scale bookbuilding.",
  keywords: ["Verizon", "Megadeal", "Corporate Bond", "Bookbuilding", "M&A Financing", "Investment Grade"],
  openGraph: {
    title: "Verizon $49B Bond (2013) — Then the Largest Corporate Ever",
    description: "How M&A financing turns into a historic megadeal. The definitive example of large-scale bookbuilding.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/verizon-megadeal",
    languages: {
      ko: "/market/verizon-megadeal",
      en: "/en/market/verizon-megadeal",
      "x-default": "/market/verizon-megadeal",
    },
  },
};

export default function VerizonMegadealPageEn() {
  const deal = getMarketDealBySlug("verizon-megadeal");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Verizon $49B Bond (2013) — Then the Largest Corporate Ever | Deal Story",
        description: "How M&A financing turns into a historic megadeal. The definitive example of large-scale bookbuilding.",
        datePublished: "2013-09-11",
        dateModified: "2013-09-11",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/market/verizon-megadeal` },
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
          { "@type": "ListItem", position: 3, name: deal.titleEn, item: `${SITE_URL}/en/market/verizon-megadeal` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <VerizonMegadealClient deal={deal} lang="en" />
    </>
  );
}
