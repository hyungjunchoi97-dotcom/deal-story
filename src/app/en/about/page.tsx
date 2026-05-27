import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "Deal Story archives the context and numbers behind major corporate deals.",
  alternates: {
    canonical: "/en/about",
    languages: {
      ko: "/about",
      en: "/en/about",
      "x-default": "/about",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function AboutPageEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">About</h1>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-10 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">What is Deal Story?</h2>
            <p>
              Information about corporate deals is scattered across news articles, IR filings, and press coverage.
              Where do you find the strategic rationale behind an acquisition, and where do you check the deal size and structure?
            </p>
            <p className="mt-3">
              Deal Story brings these scattered pieces together into one narrative.
              Each post shows the deal timeline alongside the key financial figures, so readers new to the deal
              and analysts working through it can both get the context quickly.
            </p>
          </section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">Categories we cover</h2>
            <ul className="space-y-2">
              <li><span className="font-medium text-gray-800 dark:text-gray-200">M&amp;A</span> — Strategic rationale and deal structure behind corporate acquisitions and mergers</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">PE / VC</span> — Private equity and venture capital investments, including exits</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">IPO</span> — Public offering timelines and deal structure</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">Divestitures</span> — Business unit sales, carve-outs, and spin-offs</li>
            </ul>
          </section>

          <div className="border-t border-gray-100 dark:border-gray-800" />

          <section>
            <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-3">What each post includes</h2>
            <ul className="space-y-2">
              <li><span className="font-medium text-gray-800 dark:text-gray-200">Deal timeline</span> — Key dates from announcement through approvals to closing</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">Key financials</span> — Deal value, enterprise value, multiples, ownership stake</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">Backstory</span> — Why the deal happened, and the strategic context that shaped it</li>
              <li><span className="font-medium text-gray-800 dark:text-gray-200">Parties involved</span> — Acquirer, target, financial and legal advisors</li>
            </ul>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
