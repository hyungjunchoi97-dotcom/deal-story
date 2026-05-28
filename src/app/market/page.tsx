import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import { ALL_MARKET_DEALS, DEAL_CATEGORY_META, type DealCategory } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import MarketIndexClient from "./MarketIndexClient";

export const metadata: Metadata = {
  title: "Market Story — 자본시장을 바꾼 딜들 | Deal Story",
  description:
    "그린본드 탄생, 아르헨티나 100년물, CS AT1 전액상각, 한국 1998 외평채까지 — 자본시장의 룰을 바꾼 20개 landmark 딜을 해부합니다.",
  keywords: [
    "AT1 채권", "그린본드", "외평채", "크레디트스위스", "SVB 붕괴",
    "자본시장 딜", "DCM", "sovereign bond", "아르헨티나 100년물", "CAC",
  ],
  openGraph: {
    title: "Market Story — 자본시장을 바꾼 딜들 | Deal Story",
    description:
      "그린본드의 탄생, 군함을 압류한 헤지펀드, AT1 전액상각, IMF 직후 한국의 첫 복귀 딜까지 — 자본시장 룰을 바꾼 딜들.",
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
  },
  alternates: {
    canonical: "/market",
    languages: { ko: "/market", en: "/en/market", "x-default": "/market" },
  },
};

const CATEGORIES: DealCategory[] = [
  "creator", "sovereign", "fig", "structure", "corporate", "crisis",
];

export default function MarketPage() {
  const publishedDeals = ALL_MARKET_DEALS.filter((d) => d.published);
  const publishedCount = publishedDeals.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Market Story — 자본시장을 바꾼 딜들 | Deal Story",
        description:
          "그린본드 탄생, 아르헨티나 100년물, CS AT1 전액상각, 한국 1998 외평채까지 — 자본시장의 룰을 바꾼 landmark 딜을 해부합니다.",
        url: `${SITE_URL}/market`,
        inLanguage: "ko",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/market` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Market Story — 자본시장 랜드마크 딜",
        numberOfItems: publishedCount,
        itemListElement: publishedDeals.map((deal, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/market/${deal.slug}`,
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
          breadcrumb="Market Story"
          title="Market Story"
          description="첫 그린본드, 군함을 인수한 헤지펀드, $17B AT1 제로화, IMF 이후 한국의 복귀 — 자본시장 룰을 바꾼 24개 랜드마크 딜."
          crossLinks={[
            { key: "deals", href: "/deals", label: "M&A · PE 딜 분석 → Deal Archive", badge: "D" },
          ]}
        />

        {/* ── 카테고리 배지 ── */}
        <div className="max-w-3xl mx-auto px-5 pt-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const meta = DEAL_CATEGORY_META[cat];
              const count = ALL_MARKET_DEALS.filter((d) => d.category === cat).length;
              const pubCount = ALL_MARKET_DEALS.filter(
                (d) => d.category === cat && d.published
              ).length;
              return (
                <div
                  key={cat}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium ${meta.bg} ${meta.fg}`}
                >
                  <span className="font-black">{meta.letter}.</span>
                  {meta.label}
                  <span className="opacity-60">{pubCount}/{count}</span>
                </div>
              );
            })}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-500 dark:text-gray-400">
              총 {publishedCount}/{ALL_MARKET_DEALS.length} 발행
            </div>
          </div>
        </div>

        {/* ── 카테고리 폴더 ── */}
        <div className="max-w-3xl mx-auto px-5 py-10">
          <MarketIndexClient />
        </div>

      </main>
      <Footer />
    </>
  );
}
