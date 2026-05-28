import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_DEALS_EN } from "@/data/deals/en";
import { ALL_MARKET101_CONCEPTS } from "@/data/market-101-concepts";

export const metadata: Metadata = {
  title: "Deal Story — Where M&A becomes a story",
  description:
    "Global M&A, PE, and IPO deals — structure, valuation, and aftermath. A capital markets archive read like an editorial.",
  alternates: {
    canonical: "/en",
    languages: { ko: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: "Deal Story",
    title: "Deal Story — Where M&A becomes a story",
    description:
      "Global M&A, PE, and IPO deals — structure, valuation, and aftermath.",
  },
};

export default function LandingPageEn() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center min-h-[calc(100vh-3.5rem)] px-5 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto w-full text-center">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-gray-400 dark:text-gray-500 uppercase mb-6 sm:mb-8">
            Deal &amp; Capital Markets Archive
          </p>

          {/* Wordmark */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-[1.05]">
            Deal Story
          </h1>

          {/* Tagline */}
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            Where M&amp;A becomes a story
          </p>

          {/* Subline */}
          <p className="mt-3 text-sm sm:text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-md mx-auto">
            Structure, valuation, and the aftermath
            <br className="hidden sm:inline" />
            <span className="sm:hidden"> </span>
            of the deals that shaped markets.
          </p>

          {/* CTAs */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/en/deals"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-700 dark:hover:bg-white transition-colors"
            >
              Browse deals →
            </Link>
            <Link
              href="/en/deal-101"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Deal 101
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-12 sm:mt-16 flex items-center justify-center gap-5 sm:gap-7 text-[11px] sm:text-[12px] text-gray-400 dark:text-gray-500 font-medium">
            <span>
              <span className="text-gray-700 dark:text-gray-300 font-semibold">{ALL_DEALS_EN.length}</span>
              <span className="ml-1">deals</span>
            </span>
            <span aria-hidden className="text-gray-300 dark:text-gray-700">·</span>
            <span>
              <span className="text-gray-700 dark:text-gray-300 font-semibold">{ALL_MARKET101_CONCEPTS.length}</span>
              <span className="ml-1">concepts</span>
            </span>
            <span aria-hidden className="text-gray-300 dark:text-gray-700">·</span>
            <span>KO · EN</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
