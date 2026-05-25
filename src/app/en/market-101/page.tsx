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
  title: "Market 101 — Capital Markets Concept Dictionary | Deal Story",
  description:
    "DCM, ECM, S&T, and regulation — core capital markets concepts explained with real deal examples.",
  alternates: {
    canonical: "/en/market-101",
    languages: { ko: "/market-101", en: "/en/market-101", "x-default": "/market-101" },
  },
};

export default function Market101PageEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Masthead ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-3">
              <Link href="/en" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Market 101</span>
            </div>

            <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-[11px] font-bold mb-3">
              DCM · ECM · S&T
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Market 101
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Capital markets concept dictionary — DCM, ECM, S&amp;T, and regulation explained
              with real deal examples.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {MARKET_101_CATEGORIES.map((cat) => {
                const count = ALL_MARKET101_CONCEPTS.filter((c) => c.category === cat.key).length;
                return (
                  <div
                    key={cat.key}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-600 dark:text-gray-400"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cat.dotColor}`} />
                    {cat.labelEn}
                    <span className="text-gray-400 dark:text-gray-500">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Concept cards ── */}
        <section className="max-w-3xl mx-auto px-5 py-10">
          {ALL_MARKET101_CONCEPTS.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 dark:text-gray-500 text-sm">
                Concepts coming soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ALL_MARKET101_CONCEPTS.map((concept) => {
                const catColor = CATEGORY_COLOR[concept.category];
                return (
                  <Link key={concept.slug} href={`/en/market-101/${concept.slug}`}>
                    <div className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200/60 dark:border-gray-700/60 p-5 h-full flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-3 self-start ${catColor.bg} ${catColor.fg}`}>
                        {concept.categoryLabelEn}
                      </div>
                      <h2 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 leading-snug mb-2 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                        {concept.titleEn}
                      </h2>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-3 mb-3">
                        {concept.excerptEn}
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-gray-400 dark:text-gray-500">
                        <span>{concept.readingMinutes} min read</span>
                        <span className="font-medium text-teal-600 dark:text-teal-400 group-hover:underline">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
}
