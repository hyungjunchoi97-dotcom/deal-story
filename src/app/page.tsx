import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Deal Story — 자본시장과 투자은행의 안쪽",
  description:
    "자본시장은 어떻게 움직이는가. 투자은행은 무엇을 하는가. 딜의 구조와 시장의 메커니즘 — 그 안쪽 기록.",
  alternates: {
    canonical: "/",
    languages: { ko: "/", en: "/en", "x-default": "/" },
  },
};

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center min-h-[calc(100vh-3.5rem)] px-5 py-20 sm:py-24">
        <div className="max-w-2xl mx-auto w-full text-center">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-10 sm:mb-12">
            Deal &amp; Capital Markets Archive
          </p>

          {/* Headline — parallel inquiry */}
          <h1 className="text-[28px] sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 leading-[1.15]">
            자본시장은 어떻게 움직이는가.
            <br />
            투자은행은 무엇을 하는가.
          </h1>

          {/* Subtitle */}
          <p className="mt-7 sm:mt-9 text-[15px] sm:text-base md:text-[17px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
            딜이 만들어지는 과정과 시장의 메커니즘 — 그 안쪽 기록.
          </p>

          {/* CTA */}
          <div className="mt-10 sm:mt-12">
            <Link
              href="/deals"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-700 dark:hover:bg-white transition-colors"
            >
              Browse Deals →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
