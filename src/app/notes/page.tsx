/**
 * Notes — Index (KO)
 */
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_NOTES } from "@/data/notes";
import { SITE_URL } from "@/lib/site";
import NotesIndexClient from "./NotesIndexClient";

export const metadata: Metadata = {
  title: "Notes — 금융·투자 심층 분석 | Deal Story",
  description:
    "코리아 디스카운트, 행동주의 투자, 달러 패권, 글로벌 자본시장 — 데이터와 출처 기반의 심층 노트.",
  keywords: [
    "코리아 디스카운트", "행동주의 투자", "상속세", "일본 TSE 개혁", "밸류업 프로그램",
    "PBR", "Elliott", "Align Partners", "상법 개정", "금융 분석",
  ],
  alternates: {
    canonical: "/notes",
    languages: { ko: "/notes", en: "/en/notes", "x-default": "/notes" },
  },
  openGraph: {
    title: "Notes — 금융·투자 심층 분석 | Deal Story",
    description: "데이터와 출처 기반의 금융·투자 심층 노트.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function NotesPage() {
  const published = ALL_NOTES.filter((n) => n.status === "published");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Notes — 금융·투자 심층 분석 | Deal Story",
    description: "데이터와 출처 기반의 금융·투자 심층 노트.",
    url: `${SITE_URL}/notes`,
    publisher: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-3">
              <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                홈
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Notes</span>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40 rounded-full px-3 py-1 mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              데이터 기반 심층 분석
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Notes
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              코리아 디스카운트, 행동주의, 글로벌 자본 시장까지 — 출처와 데이터를 기반으로 쓴 금융·투자 분석 노트.
            </p>

            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <Link
                href="/deals"
                className="inline-flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/60 rounded-full px-3 py-1 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
              >
                <span className="font-bold text-[10px] bg-teal-600 text-white rounded px-1 py-0.5 leading-none">D</span>
                실제 딜 케이스 → Deals
              </Link>
              <Link
                href="/deal-101"
                className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/60 rounded-full px-3 py-1 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                <span className="font-bold text-[10px] bg-blue-600 text-white rounded px-1 py-0.5 leading-none">101</span>
                개념 사전 → Deal 101
              </Link>
            </div>
          </div>
        </section>

        {/* ── Notes list ────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10">
          <NotesIndexClient notes={published} lang="ko" />
        </div>
      </main>
      <Footer />
    </>
  );
}
