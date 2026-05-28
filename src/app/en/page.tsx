import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_DEALS_EN } from "@/data/deals/en";
import { ALL_MARKET_DEALS } from "@/data/market-deals";
import { ALL_INVESTOR_STORIES } from "@/data/investor-stories";
import { ALL_NOTES } from "@/data/notes";
import { ALL_MARKET101_CONCEPTS } from "@/data/market-101-concepts";

export const metadata: Metadata = {
  title: "Deal Story — Every M&A deal, told as a story",
  description:
    "Global M&A, PE, IPO, activist campaigns and restructurings — structure, valuation, and the aftermath, all in one archive.",
  alternates: {
    canonical: "/en",
    languages: { ko: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: "Deal Story",
    title: "Deal Story — Every M&A deal, told as a story",
    description:
      "Global M&A, PE, IPO, activist campaigns and restructurings — structure, valuation, and the aftermath, all in one archive.",
  },
};

// Deal 101 — 31 concept folders under src/app/deal-101/
const DEAL_101_COUNT = 31;

const STATS = [
  { count: ALL_DEALS_EN.length, label: "Deals" },
  { count: ALL_MARKET_DEALS.length, label: "Market" },
  { count: ALL_INVESTOR_STORIES.length, label: "Stories" },
  { count: ALL_NOTES.length, label: "Notes" },
  { count: DEAL_101_COUNT, label: "Deal 101" },
  { count: ALL_MARKET101_CONCEPTS.length, label: "Market 101" },
] as const;

export default function LandingPageEn() {
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
              Every M&amp;A deal,
              <br />
              told as a story.
            </h1>

            {/* Subtitle */}
            <p className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Global M&amp;A, PE, IPO, activist campaigns and restructurings —
              <br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>
              structure, valuation, and the aftermath.
            </p>

            {/* CTA */}
            <div className="mt-10 sm:mt-12">
              <Link
                href="/en/deals"
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
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {STATS.reduce((a, b) => a + b.count, 0)}
              </span>{" "}
              articles · Bilingual (KO · EN)
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
