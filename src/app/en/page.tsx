import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DealCard from "@/components/home/DealCard";
import { ALL_DEALS_EN } from "@/data/deals/en";
import { DEAL_CATEGORY_ORDER } from "@/lib/types";
import { DEAL_CATEGORY_LABEL_EN } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Deal Story — M&A, PE/VC & IPO Archive",
  description:
    "Background, structure, and key figures behind landmark M&A, PE/VC, and IPO transactions.",
  alternates: {
    canonical: "/en",
    languages: {
      ko: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  // 영문 사이트 기본 OG — 루트 layout 의 KO 기본 OG 를 오버라이드
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

export default function HomePageEn() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* Masthead */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 overflow-hidden">
          <div className="max-w-3xl mx-auto px-5 py-10 flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                Deal Story
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                In-depth analysis of landmark M&amp;A, PE/VC, and IPO transactions —
                background, structure, valuation, and post-deal outcomes.
              </p>
            </div>
            <div className="flex-shrink-0 hidden sm:block">
              <Image
                src="/eagle02.png"
                alt="Eagle CED mascot"
                width={220}
                height={147}
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Category chips + recent deals */}
        <section className="max-w-3xl mx-auto px-5 py-10">

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Link
              href="/en/deals"
              className="rounded-full px-3.5 py-1.5 text-xs font-medium bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
            >
              All
            </Link>
            {DEAL_CATEGORY_ORDER.map((cat) => (
              <Link
                key={cat}
                href={`/en/deals?category=${cat}`}
                className="rounded-full px-3.5 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {DEAL_CATEGORY_LABEL_EN[cat]}
              </Link>
            ))}
          </div>

          {/* Recent deals header */}
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">
              Recent Deals
            </h2>
            <Link
              href="/en/deals"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              View all →
            </Link>
          </div>

          {/* Card grid */}
          {ALL_DEALS_EN.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ALL_DEALS_EN.map((deal) => (
                <DealCard key={deal.slug} deal={deal} lang="en" />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                No deals yet.
              </p>
            </div>
          )}

        </section>
      </main>
      <Footer />
    </>
  );
}
