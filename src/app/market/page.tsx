import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ALL_MARKET_DEALS,
  DEAL_CATEGORY_META,
  type DealCategory,
} from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";

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
  "creator",
  "sovereign",
  "fig",
  "structure",
  "corporate",
  "crisis",
];

/** 발행사 이름에서 카드용 이니셜 생성 */
function issuerInitials(name: string): string {
  const clean = name.replace(/\s*\(.*?\)\s*/g, " ").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "—";
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return words
    .slice(0, 3)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

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

        {/* ── 마스트헤드 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-4xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-3">
              <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                홈
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Market Story</span>
            </div>

            <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[11px] font-bold mb-3">
              시장을 바꾼 딜들
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Market Story
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              그린본드의 탄생, 군함을 압류한 헤지펀드, AT1 전액상각, IMF 직후 한국의 첫 복귀 딜까지 —
              자본시장의 룰을 바꾸거나, 잊어서는 안 될 교훈을 남긴 landmark 딜 20개를 해부합니다.
            </p>

            {/* 크로스링크 — Deal Archive */}
            <div className="mt-4 mb-5">
              <Link
                href="/deals"
                className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/60 rounded-full px-3 py-1 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                <span className="font-bold text-[10px] bg-blue-600 text-white rounded px-1 py-0.5 leading-none">D</span>
                M&amp;A·PE 딜 분석 → Deal Archive
              </Link>
            </div>

            {/* 카테고리 배지 */}
            <div className="flex flex-wrap gap-2 mt-2">
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
                    <span className="opacity-60">
                      {pubCount}/{count}
                    </span>
                  </div>
                );
              })}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-500 dark:text-gray-400">
                총 {publishedCount}/{ALL_MARKET_DEALS.length} 발행
              </div>
            </div>
          </div>
        </section>

        {/* ── 카테고리별 딜 그리드 ── */}
        <div className="max-w-4xl mx-auto px-5 py-10 space-y-12">
          {CATEGORIES.map((cat) => {
            const meta = DEAL_CATEGORY_META[cat];
            const deals = ALL_MARKET_DEALS.filter((d) => d.category === cat);
            return (
              <section key={cat}>
                {/* 카테고리 헤더 */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black text-white ${meta.dot}`}
                  >
                    {meta.letter}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {meta.label}
                  </h2>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                </div>

                {/* 딜 카드 그리드 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {deals.map((deal) =>
                    deal.published ? (
                      <Link key={deal.slug} href={`/market/${deal.slug}`}>
                        <div
                          className={`group relative rounded-xl border p-5 h-full flex flex-col cursor-pointer transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${meta.bg}`}
                          style={{ borderColor: "transparent" }}
                        >
                          {/* 발행사 이니셜 + 연도 */}
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-black text-white flex-shrink-0 ${meta.dot}`}
                            >
                              {issuerInitials(deal.issuer)}
                            </div>
                            <div
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${meta.fg}`}
                              style={{ background: "rgba(0,0,0,0.06)" }}
                            >
                              {deal.dealYear}
                            </div>
                          </div>

                          <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">
                            {deal.issuer}
                          </p>
                          <h3
                            className={`text-[14px] font-bold leading-snug mb-2 transition-colors ${meta.fg} group-hover:underline`}
                          >
                            {deal.title}
                          </h3>
                          <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-2 mb-3">
                            {deal.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-gray-400 dark:text-gray-500">
                              {deal.readingMinutes}분 읽기
                            </span>
                            <span className={`font-medium ${meta.fg}`}>읽기 →</span>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div
                        key={deal.slug}
                        className="relative rounded-xl border border-gray-200/60 dark:border-gray-700/40 p-5 h-full flex flex-col bg-gray-50/50 dark:bg-gray-900/30 opacity-60"
                      >
                        {/* Coming soon overlay badge */}
                        <div className="absolute top-3 right-3 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                          곧 업로드
                        </div>

                        {/* 발행사 이니셜 + 연도 (비활성) */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-black text-white flex-shrink-0 bg-gray-300 dark:bg-gray-600">
                            {issuerInitials(deal.issuer)}
                          </div>
                          <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500">
                            {deal.dealYear}
                          </div>
                        </div>

                        <div className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">
                          {deal.issuer}
                        </div>
                        <h3 className="text-[13px] font-bold text-gray-500 dark:text-gray-500 leading-snug mb-2 line-clamp-2">
                          {deal.title}
                        </h3>
                        <p className="text-[12px] text-gray-400 dark:text-gray-500 leading-relaxed flex-1 line-clamp-2">
                          {deal.excerpt}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </section>
            );
          })}
        </div>

      </main>
      <Footer />
    </>
  );
}
