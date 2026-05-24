import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DealsClient from "./deals-client";
import { ALL_DEALS } from "@/data/deals";

export const metadata: Metadata = {
  title: "딜 아카이브",
  description: "M&A, PE/VC 투자, IPO, 매각·분리까지 기업 딜 스토리를 모아봅니다.",
};

export default function DealsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* 페이지 헤더 */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-4xl mx-auto px-5 py-10">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">딜 아카이브</h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              기업 딜의 배경과 핵심 수치를 함께 읽습니다. 총 {ALL_DEALS.length}개의 딜.
            </p>
          </div>
        </section>

        {/* 필터 + 카드 그리드 */}
        <div className="max-w-4xl mx-auto px-5 py-8">
          <DealsClient initialDeals={ALL_DEALS} />
        </div>

      </main>
      <Footer />
    </>
  );
}
