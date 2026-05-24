import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DealCard from "@/components/home/DealCard";
import { ALL_DEALS } from "@/data/deals";
import {
  DEAL_CATEGORY_LABEL,
  DEAL_CATEGORY_ORDER,
} from "@/lib/types";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      ko: "/",
      en: "/en",
      "x-default": "/",
    },
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* 마스트헤드 */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 overflow-hidden">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Deal Story
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              M&amp;A, PE/VC, IPO, 매각까지 — 기업 딜의 배경과 숫자를 함께 아카이빙합니다.
            </p>
          </div>
        </section>

        {/* 카테고리 필터 + 최근 딜 피드 */}
        <section className="max-w-3xl mx-auto px-5 py-10">

          {/* 카테고리 칩 */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Link
              href="/deals"
              className="rounded-full px-3.5 py-1.5 text-xs font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
            >
              전체
            </Link>
            {DEAL_CATEGORY_ORDER.map((cat) => (
              <Link
                key={cat}
                href={`/deals?category=${cat}`}
                className="rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {DEAL_CATEGORY_LABEL[cat]}
              </Link>
            ))}
          </div>

          {/* 최근 딜 헤더 */}
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">
              최근 딜
            </h2>
            <Link
              href="/deals"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              전체 보기 →
            </Link>
          </div>

          {/* 카드 그리드 */}
          {ALL_DEALS.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ALL_DEALS.map((deal) => (
                <DealCard key={deal.slug} deal={deal} lang="ko" />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                아직 등록된 딜이 없습니다.
              </p>
            </div>
          )}

        </section>
      </main>
      <Footer />
    </>
  );
}
