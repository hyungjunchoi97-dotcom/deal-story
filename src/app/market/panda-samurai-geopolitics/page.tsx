import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import PandaSamuraiClient from "./PandaSamuraiClient";

export const metadata: Metadata = {
  title: "판다본드·사무라이본드의 지정학 — 통화와 외교가 만나는 채권시장 | Deal Story",
  description:
    "외국 발행사가 위안·엔으로 발행하는 시장이 정치·통화정책에 따라 열리고 닫히는 이야기.",
  keywords: ["판다본드", "사무라이본드", "Panda Bond", "Samurai Bond", "위안화국제화", "지정학"],
  openGraph: {
    title: "판다본드·사무라이본드의 지정학 — 통화와 외교가 만나는 채권시장",
    description: "외국 발행사가 위안·엔으로 발행하는 시장이 정치·통화정책에 따라 열리고 닫히는 이야기.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market/panda-samurai-geopolitics",
    languages: {
      ko: "/market/panda-samurai-geopolitics",
      en: "/en/market/panda-samurai-geopolitics",
      "x-default": "/market/panda-samurai-geopolitics",
    },
  },
};

export default function PandaSamuraiPage() {
  const deal = getMarketDealBySlug("panda-samurai-geopolitics");
  if (!deal) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "판다본드·사무라이본드의 지정학 — 통화와 외교가 만나는 채권시장 | Deal Story",
        description: "외국 발행사가 위안·엔으로 발행하는 시장이 정치·통화정책에 따라 열리고 닫히는 이야기.",
        datePublished: "2005-01-01",
        dateModified: "2005-01-01",
        author: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 512, height: 512 },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/market/panda-samurai-geopolitics` },
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
          { "@type": "ListItem", position: 3, name: deal.title, item: `${SITE_URL}/market/panda-samurai-geopolitics` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PandaSamuraiClient deal={deal} lang="ko" />
    </>
  );
}
