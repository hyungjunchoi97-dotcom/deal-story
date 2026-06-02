import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginPrompt from "@/components/LoginPrompt";

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
      <Suspense fallback={null}><LoginPrompt lang="ko" /></Suspense>
      <Header />
      <main className="flex-1 px-5 py-20 sm:py-24">
        <div className="max-w-3xl mx-auto w-full">

          {/* Hero */}
          <div className="text-center mb-20 sm:mb-24">
            <h1 className="text-[22px] sm:text-[26px] md:text-[32px] font-semibold tracking-tight text-gray-900 dark:text-gray-100 leading-[1.25]">
              자본시장은 어떻게 움직이는가.
              <br />
              투자은행은 무엇을 하는가.
            </h1>
            <p className="mt-6 sm:mt-8 text-[14px] sm:text-[15px] md:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
              딜이 만들어지는 과정과 시장 메커니즘, 그리고 내부자들의 이야기.
            </p>
            <div className="mt-9 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/deals"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-700 dark:hover:bg-white transition-colors"
              >
                Browse Deals →
              </Link>
              <Link
                href="/reports"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-gray-500 dark:hover:border-gray-400 transition-colors"
              >
                Weekly Report
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
