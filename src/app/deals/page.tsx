import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import DealsFolderClient from "./DealsFolderClient";
import { ALL_DEALS } from "@/data/deals";
import { ALL_LBO_DEALS } from "@/data/deals/lbo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "딜 아카이브 — M&A·PE 딜 해부 | Deal Story",
  description:
    "Microsoft·KKR·MBK의 랜드마크 딜을 배경부터 밸류에이션, 사후 평가까지 심층 분석합니다. M&A, 행동주의, 구조조정, 경영권 분쟁 등 총 40개 딜.",
  keywords: [
    "M&A 분석", "PE 딜", "기업 인수합병", "딜 스토리", "KKR", "MBK",
    "Blackstone", "Microsoft Activision", "행동주의 투자", "LBO", "적대적 인수",
  ],
  openGraph: {
    title: "딜 아카이브 — M&A·PE 딜 해부 | Deal Story",
    description:
      "Microsoft·KKR·MBK의 랜드마크 딜을 배경부터 밸류에이션, 사후 평가까지 심층 분석합니다.",
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
  },
  alternates: {
    canonical: "/deals",
    languages: { ko: "/deals", en: "/en/deals", "x-default": "/deals" },
  },
};

export default function DealsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "딜 아카이브 | Deal Story",
        description:
          "M&A, PE/VC, 행동주의, 구조조정, 경영권 분쟁 등 기업 딜 스토리를 모아봅니다.",
        url: `${SITE_URL}/deals`,
        inLanguage: "ko",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "딜 아카이브", item: `${SITE_URL}/deals` },
        ],
      },
      {
        "@type": "ItemList",
        name: "딜 아카이브 — 랜드마크 딜 목록",
        numberOfItems: ALL_DEALS.length,
        itemListElement: ALL_DEALS.slice(0, 12).map((deal, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/deals/${deal.slug}`,
          name: deal.title,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">

        <CategoryHero
          lang="ko"
          breadcrumb="딜 아카이브"
          title="딜 아카이브"
          description="Microsoft의 $68.7B Activision 베팅부터 KKR의 LBO of the century까지 — 84개 랜드마크 딜의 배경 · 구조 · 가치평가 · 후속 성과."
          crossLinks={[
            { key: "market", href: "/market", label: "자본시장 랜드마크 → Market Story", badge: "M" },
          ]}
        />

        {/* 필터 + 카드 그리드 */}
        <div className="max-w-3xl mx-auto px-5 py-8">
          <DealsFolderClient deals={ALL_DEALS} lboDeals={ALL_LBO_DEALS} lang="ko" />
        </div>

      </main>
      <Footer />
    </>
  );
}
