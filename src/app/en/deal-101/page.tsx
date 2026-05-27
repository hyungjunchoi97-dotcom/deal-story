/**
 * Deal 101 — Concept Hub Index (EN)
 * Mirrors /deal-101/page.tsx structure in English
 */
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Deal101IndexClient from "@/app/deal-101/Deal101IndexClient";

export const metadata: Metadata = {
  title: "Deal 101 — M&A Concept Archive | Deal Story",
  description:
    "EV/EBITDA, LBO, antitrust — core financial concepts from real deals, explained with the cases they came from.",
  alternates: {
    canonical: "/en/deal-101",
    languages: {
      ko: "/deal-101",
      en: "/en/deal-101",
      "x-default": "/deal-101",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story — Deal 101" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function Deal101IndexPageEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-3">
              <Link href="/en" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Deal 101</span>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full px-3 py-1 mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Concept × Deal Archive
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Deal 101
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              Core financial concepts from real M&A deals — explained in context.
              Each concept page links directly to the deals where it appeared.
            </p>

            {/* Cross-link — Market Story */}
            <div className="mt-4">
              <Link
                href="/en/market"
                className="inline-flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/60 rounded-full px-3 py-1 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
              >
                <span className="font-bold text-[10px] bg-teal-600 text-white rounded px-1 py-0.5 leading-none">M</span>
                Capital markets landmark deals → Market Story
              </Link>
            </div>
          </div>
        </section>

        {/* ── Accordion folders ─────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10">
          <Deal101IndexClient lang="en" />
        </div>

      </main>
      <Footer />
    </>
  );
}
