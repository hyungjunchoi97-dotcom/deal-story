import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Market101IndexClientEn from "@/app/market-101/Market101IndexClientEn";

export const metadata: Metadata = {
  title: "Market 101 — Capital Markets Concept Dictionary | Deal Story",
  description:
    "DCM, ECM, S&T, FIG, and Sovereign — core capital markets concepts explained with real deal examples.",
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
              DCM · ECM · S&T · FIG · Sovereign · LevFin
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Market 101
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Capital markets concept dictionary — DCM, ECM, S&amp;T, FIG, Sovereign, and
              LevFin explained with real deal examples. Click a category folder to expand.
            </p>
          </div>
        </section>

        {/* ── Folder UI (Client Component) ── */}
        <Market101IndexClientEn />

      </main>
      <Footer />
    </>
  );
}
