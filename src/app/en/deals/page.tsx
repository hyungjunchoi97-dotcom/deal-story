import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DealsClientEn from "./deals-client-en";
import { ALL_DEALS_EN } from "@/data/deals/en";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Deal Archive — Landmark M&A & PE Analysis | Deal Story",
  description:
    "In-depth breakdowns of landmark M&A, LBO, activism, and restructuring transactions. Background, deal structure, valuation, rationale, and post-deal outcomes for 40+ deals.",
  keywords: [
    "M&A analysis", "PE deals", "leveraged buyout", "KKR RJR Nabisco",
    "Microsoft Activision", "activist investing", "deal story", "corporate acquisitions",
    "restructuring", "control contests",
  ],
  openGraph: {
    title: "Deal Archive — Landmark M&A & PE Analysis | Deal Story",
    description:
      "From Microsoft's $68.7B Activision bet to KKR's LBO of the century — landmark deals dissected: structure, valuation, and post-deal outcomes.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
  },
  alternates: {
    canonical: "/en/deals",
    languages: { ko: "/deals", en: "/en/deals", "x-default": "/deals" },
  },
};

export default function DealsPageEn() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Deal Archive | Deal Story",
        description:
          "In-depth analysis of landmark M&A, PE/VC, and IPO transactions — background, structure, valuation, and post-deal outcomes.",
        url: `${SITE_URL}/en/deals`,
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en/` },
          { "@type": "ListItem", position: 2, name: "Deal Archive", item: `${SITE_URL}/en/deals` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Deal Archive — Landmark Deals",
        numberOfItems: ALL_DEALS_EN.length,
        itemListElement: ALL_DEALS_EN.slice(0, 12).map((deal, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/en/deals/${deal.slug}`,
          name: deal.title,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">

        {/* Page header */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-4xl mx-auto px-5 py-10">

            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-3">
              <Link href="/en" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Deal Archive</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Deal Archive</h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              From Microsoft&apos;s $68.7B Activision bet to KKR&apos;s LBO of the century —
              background, structure, valuation, and post-deal outcomes for{" "}
              <span className="font-semibold text-gray-700 dark:text-gray-300">{ALL_DEALS_EN.length} landmark deals</span>.
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

        {/* Filter + card grid */}
        <div className="max-w-4xl mx-auto px-5 py-8">
          <DealsClientEn initialDeals={ALL_DEALS_EN} />
        </div>

      </main>
      <Footer />
    </>
  );
}
