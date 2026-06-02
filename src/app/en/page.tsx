import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import LoginPrompt from "@/components/LoginPrompt";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Deal Story — Inside capital markets and investment banking",
  description:
    "How capital markets work. What investment banks really do. An inside record of how deals get done and how markets move.",
  alternates: {
    canonical: "/en",
    languages: { ko: "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    siteName: "Deal Story",
    title: "Deal Story — Inside capital markets and investment banking",
    description:
      "How capital markets work. What investment banks really do.",
  },
};

export default function LandingPageEn() {
  return (
    <>
      <Suspense fallback={null}><LoginPrompt lang="en" /></Suspense>
      <Header />
      <main className="flex-1 px-5 py-20 sm:py-24">
        <div className="max-w-3xl mx-auto w-full">
          {/* Hero */}
          <div className="text-center mb-20 sm:mb-24">
            <h1 className="text-[22px] sm:text-[26px] md:text-[32px] font-semibold tracking-tight text-gray-900 dark:text-gray-100 leading-[1.25]">
              How capital markets work.
              <br />
              What investment banks really do.
            </h1>
            <p className="mt-6 sm:mt-8 text-[14px] sm:text-[15px] md:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
              How deals get done, how markets move, and the people inside them.
            </p>
            <div className="mt-9 sm:mt-11 flex items-center justify-center">
              <Link
                href="/en/deals"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-semibold hover:bg-gray-700 dark:hover:bg-white transition-colors"
              >
                Browse Deals →
              </Link>
            </div>
          </div>

          {/* Member benefits */}
        </div>
      </main>
      <Footer />
    </>
  );
}
