import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import FormosaBondsClient from "./FormosaBondsClient";

export const metadata: Metadata = {
  title: "포모사본드 붐과 콜 스킵 (2010년대) — 대만 보험사의 ALM 딜레마 | Deal Story",
  description:
    "대만 보험 수요가 만든 시장, 그리고 발행사들이 콜 안 하면서 보험사가 길게 물린 extension risk의 집단 사례.",
  keywords: ["포모사본드", "Formosa Bond", "ALM", "30NC5", "콜스킵", "대만"],
  openGraph: {
    title: "포모사본드 붐과 콜 스킵 (2010년대) — 대만 보험사의 ALM 딜레마",
    description: "대만 보험 수요가 만든 시장, 그리고 발행사들이 콜 안 하면서 보험사가 길게 물린 extension risk의 집단 사례.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/formosa-bonds",
    languages: {
      ko: "/market/formosa-bonds",
      en: "/en/market/formosa-bonds",
      "x-default": "/market/formosa-bonds",
    },
  },
};

export default function FormosaBondsPage() {
  const deal = getMarketDealBySlug("formosa-bonds");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "포모사본드 붐과 콜 스킵 (2010년대) — 대만 보험사의 ALM 딜레마 | Deal Story",
        description: "대만 보험 수요가 만든 시장, 그리고 발행사들이 콜 안 하면서 보험사가 길게 물린 extension risk의 집단 사례.",
        datePublished: "2013-01-01",
        dateModified: "2013-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/formosa-bonds` },
        inLanguage: "ko",
        keywords: deal.tags.join(", "),
      },
      ...(deal.faq && deal.faq.length > 0
        ? [{ "@type": "FAQPage", mainEntity: deal.faq.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/market` },
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/formosa-bonds` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <FormosaBondsClient deal={deal} lang="ko" />
    </>
  );
}
