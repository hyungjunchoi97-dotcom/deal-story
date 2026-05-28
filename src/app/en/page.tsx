import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
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
      <Header />
      <main className="flex-1 flex items-center justify-center min-h-[calc(100vh-3.5rem)] px-5 py-20 sm:py-24">
        <div className="max-w-2xl mx-auto w-full text-center">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-10 sm:mb-12">
            Deal &amp; Capital Markets Archive
          </p>

          {/* Headline — parallel inquiry */}
          <h1 className="text-[28px] sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 leading-[1.15]">
            How capital markets work.
            <br />
            What investment banks really do.
          </h1>

          {/* Subtitle */}
          <p className="mt-7 sm:mt-9 text-[15px] sm:text-base md:text-[17px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
            An inside record of how deals get done — and how markets move.
          </p>

          {/* CTA */}
          <div className="mt-10 sm:mt-12">
            <Link
              href="/en/deals"
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
