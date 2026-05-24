import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DealsClientEn from "./deals-client-en";
import { ALL_DEALS_EN } from "@/data/deals/en";

export const metadata: Metadata = {
  title: "Deal Archive | Deal Story",
  description: "In-depth analysis of landmark M&A, PE/VC, and IPO transactions — background, structure, valuation, and post-deal outcomes.",
  alternates: {
    canonical: "/en/deals",
    languages: {
      ko: "/deals",
      en: "/en/deals",
    },
  },
};

export default function DealsPageEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Page header */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-4xl mx-auto px-5 py-10">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Deal Archive</h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Background, structure, and key figures behind landmark deals. {ALL_DEALS_EN.length} deals.
            </p>
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
