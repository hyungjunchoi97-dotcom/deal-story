import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ALL_MARKET101_CONCEPTS,
  MARKET_101_CATEGORIES,
  CATEGORY_COLOR,
} from "@/data/market-101-concepts";

export const metadata: Metadata = {
  title: "Market 101 — 자본시장 개념 사전 | Deal Story",
  description:
    "DCM·ECM·S&T·FIG·소버린 등 IB 자본시장 핵심 개념을 딜 사례와 함께 정리한 개념 사전.",
  alternates: {
    canonical: "/market-101",
    languages: { ko: "/market-101", en: "/en/market-101", "x-default": "/market-101" },
  },
};

export default function Market101Page() {
  const articles = ALL_MARKET101_CONCEPTS.filter((c) => c.entryType === "article");
  const terms    = ALL_MARKET101_CONCEPTS.filter((c) => c.entryType === "term" || !c.entryType);

  // Build a map: category key → concepts for that category (terms only)
  const termsByCategory = MARKET_101_CATEGORIES.map((cat) => ({
    ...cat,
    items: terms.filter((t) => t.category === cat.key),
  })).filter((cat) => cat.items.length > 0);

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 마스트헤드 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            {/* 브레드크럼 */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-3">
              <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                홈
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Market 101</span>
            </div>

            <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-[11px] font-bold mb-3">
              DCM · ECM · S&T · FIG · Sovereign
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Market 101
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              자본시장 개념 사전 — DCM·ECM·S&amp;T·FIG·소버린까지 IB 실무 핵심 개념을
              딜 사례와 함께 풀어냅니다.
            </p>

            {/* 카테고리 통계 */}
            <div className="flex flex-wrap gap-2 mt-5">
              {MARKET_101_CATEGORIES.map((cat) => {
                const count = ALL_MARKET101_CONCEPTS.filter((c) => c.category === cat.key).length;
                if (count === 0) return null;
                return (
                  <div
                    key={cat.key}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-600 dark:text-gray-400"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`} />
                    {cat.label}
                    <span className="text-gray-400 dark:text-gray-500">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-14">

          {/* ── 섹션 1: 아티클 ── */}
          {articles.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">아티클</h2>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  {articles.length}편
                </span>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {articles.map((concept) => {
                  const catColor = CATEGORY_COLOR[concept.category];
                  return (
                    <Link key={concept.slug} href={`/market-101/${concept.slug}`}>
                      <div className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200/60 dark:border-gray-700/60 p-5 h-full flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${catColor.bg} ${catColor.fg}`}>
                            {concept.categoryLabel}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-semibold">
                            아티클
                          </span>
                        </div>
                        <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 leading-snug mb-2 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                          {concept.title}
                        </h3>
                        <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3 mb-3">
                          {concept.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-[11px] text-gray-400 dark:text-gray-500">
                          <span>{concept.readingMinutes}분 읽기</span>
                          <span className="font-medium text-teal-600 dark:text-teal-400 group-hover:underline">
                            자세히 →
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* ── 섹션 2: 용어 사전 (카테고리별) ── */}
          {termsByCategory.length > 0 && (
            <section>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">용어 사전</h2>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  {terms.length}개
                </span>
                <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
              </div>

              <div className="space-y-8">
                {termsByCategory.map((cat) => {
                  const catColor = CATEGORY_COLOR[cat.key];
                  return (
                    <div key={cat.key}>
                      {/* 카테고리 헤더 */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`w-2 h-2 rounded-full ${cat.dotColor}`} />
                        <h3 className={`text-[13px] font-bold ${catColor.fg}`}>
                          {cat.label}
                        </h3>
                        <span className="text-[11px] text-gray-400 dark:text-gray-500">
                          {cat.items.length}개
                        </span>
                      </div>

                      {/* 용어 카드 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {cat.items.map((term) => (
                          <Link key={term.slug} href={`/market-101/${term.slug}`}>
                            <div className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200/60 dark:border-gray-700/60 p-4 h-full flex flex-col hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                              <h4 className="text-[14px] font-bold text-gray-900 dark:text-gray-100 leading-snug mb-1.5 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                                {term.title}
                                {term.titleEn && term.titleEn !== term.title && (
                                  <span className="ml-1.5 text-[11px] font-normal text-gray-400 dark:text-gray-500">
                                    {term.titleEn}
                                  </span>
                                )}
                              </h4>
                              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-2 mb-2">
                                {term.excerpt}
                              </p>
                              <div className="flex items-center justify-between text-[10px] text-gray-400 dark:text-gray-500">
                                <span>{term.readingMinutes}분</span>
                                <span className="font-medium text-teal-600 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                  →
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
