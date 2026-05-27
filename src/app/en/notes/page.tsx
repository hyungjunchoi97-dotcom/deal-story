/**
 * Notes — Index (EN)
 */
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_NOTES } from "@/data/notes";
import { SITE_URL } from "@/lib/site";
import NotesIndexClient from "@/app/notes/NotesIndexClient";

export const metadata: Metadata = {
  title: "Notes — Financial & Investment Analysis | Deal Story",
  description:
    "Korea Discount, activist investing, global capital markets — in-depth notes grounded in data and primary sources.",
  keywords: [
    "Korea discount", "activist investing", "inheritance tax", "Japan TSE reform",
    "value-up program", "PBR", "Elliott Management", "Align Partners", "corporate governance",
  ],
  alternates: {
    canonical: "/en/notes",
    languages: { ko: "/notes", en: "/en/notes", "x-default": "/notes" },
  },
  openGraph: {
    title: "Notes — Financial & Investment Analysis | Deal Story",
    description: "In-depth financial and investment analysis notes grounded in data and primary sources.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [{ url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story — Notes" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function NotesPageEn() {
  const published = ALL_NOTES.filter((n) => n.status === "published");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Notes — Financial & Investment Analysis | Deal Story",
    description: "In-depth financial and investment analysis notes grounded in data and primary sources.",
    url: `${SITE_URL}/en/notes`,
    publisher: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
    inLanguage: "en",
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
              <Link href="/en" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Notes</span>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/40 rounded-full px-3 py-1 mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              Data-backed deep dives
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Notes
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              Korea Discount, activism, global capital markets — in-depth financial analysis notes grounded in data and primary sources.
            </p>

            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <Link
                href="/en/deals"
                className="inline-flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/60 rounded-full px-3 py-1 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
              >
                <span className="font-bold text-[10px] bg-teal-600 text-white rounded px-1 py-0.5 leading-none">D</span>
                Real deal case studies → Deals
              </Link>
              <Link
                href="/en/deal-101"
                className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/60 rounded-full px-3 py-1 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                <span className="font-bold text-[10px] bg-blue-600 text-white rounded px-1 py-0.5 leading-none">101</span>
                Concept glossary → Deal 101
              </Link>
            </div>
          </div>
        </section>

        {/* ── Notes list ────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10">
          <NotesIndexClient notes={published} lang="en" />
        </div>
      </main>
      <Footer />
    </>
  );
}
