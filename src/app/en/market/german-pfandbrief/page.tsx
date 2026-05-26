import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import GermanPfandbriefClient from "@/app/market/german-pfandbrief/GermanPfandbriefClient";

export const metadata: Metadata = {
  title: "German Pfandbrief — 200 Years of Covered Bond History | Deal Story",
  description:
    "The elegance of dual recourse. Why securitization died in 2008 while covered bonds survived.",
  keywords: ["Pfandbrief", "Covered Bond", "Dual Recourse", "Germany", "Cover Pool", "Structured Finance"],
  openGraph: {
    title: "German Pfandbrief — 200 Years of Covered Bond History",
    description: "The elegance of dual recourse. Why securitization died in 2008 while covered bonds survived.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market/german-pfandbrief",
    languages: {
      ko: "/market/german-pfandbrief",
      en: "/en/market/german-pfandbrief",
      "x-default": "/market/german-pfandbrief",
    },
  },
};

export default function GermanPfandbriefPageEn() {
  const deal = getMarketDealBySlug("german-pfandbrief");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "German Pfandbrief — 200 Years of Covered Bond History | Deal Story",
        description: "The elegance of dual recourse. Why securitization died in 2008 while covered bonds survived.",
        datePublished: "1769-01-01",
        dateModified: "1769-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/en/market/german-pfandbrief` },
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
          { "@type": "ListItem", position: 3, name: deal.titleEn, item: `${SITE_URL}/en/market/german-pfandbrief` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GermanPfandbriefClient deal={deal} lang="en" />
    </>
  );
}
