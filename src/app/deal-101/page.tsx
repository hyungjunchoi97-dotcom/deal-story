/**
 * 딜 101 — 개념 허브 인덱스
 * 각 카드가 개별 개념 페이지(/deal-101/[slug])로 링크됨
 */
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Deal101IndexClient from "./Deal101IndexClient";

export const metadata: Metadata = {
  title: "딜 101 — M&A 핵심 개념 아카이브 | Deal Story",
  description:
    "EV/EBITDA, LBO, 반독점 규제까지 — 실제 딜에서 등장하는 핵심 금융 개념을 딜 사례와 연결해 학습하는 개념 아카이브입니다.",
  alternates: {
    canonical: "/deal-101",
    languages: { ko: "/deal-101", en: "/en/deal-101", "x-default": "/deal-101" },
  },
};

export default function Deal101IndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 히어로 ──────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full px-3 py-1 mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              개념 × 딜 연결 아카이브
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">딜 101</h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              실제 딜에서 등장하는 핵심 금융 개념을 딜 사례와 연결해 학습합니다.
              각 개념 페이지에서 그 개념이 쓰인 딜을 바로 확인할 수 있습니다.
            </p>
          </div>
        </section>

        {/* ── 카테고리 폴더 ────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10">
          <Deal101IndexClient />
        </div>

      </main>
      <Footer />
    </>
  );
}
