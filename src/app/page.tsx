import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_DEALS } from "@/data/deals";
import { ALL_MARKET_DEALS } from "@/data/market-deals";
import { ALL_INVESTOR_STORIES } from "@/data/investor-stories";
import { ALL_NOTES } from "@/data/notes";
import { ALL_MARKET101_CONCEPTS } from "@/data/market-101-concepts";

export const metadata: Metadata = {
  title: "Deal Story — M&A 빅딜을 한 편의 스토리로",
  description:
    "글로벌 M&A·PE·IPO 빅딜의 구조, 가치평가, 후속 성과까지 — 한 곳에서 읽는 자본시장 아카이브.",
  alternates: {
    canonical: "/",
    languages: { ko: "/", en: "/en", "x-default": "/" },
  },
};

// Deal 101 — 31 concept folders under src/app/deal-101/
const DEAL_101_COUNT = 31;

const STATS = [
  { count: ALL_DEALS.length, label: "Deals" },
  { count: ALL_MARKET_DEALS.length, label: "Market" },
  { count: ALL_INVESTOR_STORIES.length, label: "Stories" },
  { count: ALL_NOTES.length, label: "Notes" },
  { count: DEAL_101_COUNT, label: "Deal 101" },
  { count: ALL_MARKET101_CONCEPTS.length, label: "Market 101" },
] as const;

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="px-5 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
          <div className="max-w-5xl mx-auto w-full text-center">
            {/* Eyebrow */}
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-8 sm:mb-10">
              Deal &amp; Capital Markets Archive
            </p>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-[1.02]">
              M&amp;A 빅딜을
              <br />
              한 편의 스토리로.
            </h1>

            {/* Subtitle */}
            <p className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              글로벌 M&amp;A · PE · IPO부터 행동주의 · 구조조정까지 —
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>
              한 곳에서 읽는 자본시장 아카이브.
            </p>

            {/* CTA */}
            <div className="mt-10 sm:mt-12">
              <Link
                href="/deals"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-base font-semibold hover:bg-gray-700 dark:hover:bg-white transition-colors"
              >
                Browse Deals →
              </Link>
            </div>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────── */}
        <section className="px-5 pb-20 sm:pb-28">
          <div className="max-w-4xl mx-auto pt-10 sm:pt-12 border-t border-gray-200/60 dark:border-gray-800">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-4 gap-y-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 tracking-tight tabular-nums">
                    {s.count}
                  </div>
                  <div className="mt-1.5 text-[10px] sm:text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-xs text-gray-400 dark:text-gray-500">
              총{" "}
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {STATS.reduce((a, b) => a + b.count, 0)}
              </span>
              개의 아티클 · 한 · ENG 2개 언어 지원
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
