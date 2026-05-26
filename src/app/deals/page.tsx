import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DealsClient from "./deals-client";
import { ALL_DEALS } from "@/data/deals";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "딜 아카이브 — M&A·PE 딜 해부 | Deal Story",
  description:
    "Microsoft·KKR·MBK의 랜드마크 딜을 배경부터 밸류에이션, 사후 평가까지 심층 분석합니다. M&A, 행동주의, 구조조정, 경영권 분쟁 등 총 40개 딜.",
  keywords: [
    "M&A 분석", "PE 딜", "기업 인수합병", "딜 스토리", "KKR", "MBK",
    "Blackstone", "Microsoft Activision", "행동주의 투자", "LBO", "적대적 인수",
  ],
  openGraph: {
    title: "딜 아카이브 — M&A·PE 딜 해부 | Deal Story",
    description:
      "Microsoft·KKR·MBK의 랜드마크 딜을 배경부터 밸류에이션, 사후 평가까지 심층 분석합니다.",
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
  },
  alternates: {
    canonical: "/deals",
    languages: { ko: "/deals", en: "/en/deals", "x-default": "/deals" },
  },
};

export default function DealsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "딜 아카이브 | Deal Story",
        description:
          "M&A, PE/VC, 행동주의, 구조조정, 경영권 분쟁 등 기업 딜 스토리를 모아봅니다.",
        url: `${SITE_URL}/deals`,
        inLanguage: "ko",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "딜 아카이브", item: `${SITE_URL}/deals` },
        ],
      },
      {
        "@type": "ItemList",
        name: "딜 아카이브 — 랜드마크 딜 목록",
        numberOfItems: ALL_DEALS.length,
        itemListElement: ALL_DEALS.slice(0, 12).map((deal, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/deals/${deal.slug}`,
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

        {/* 페이지 헤더 */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-4xl mx-auto px-5 py-10">

            {/* 브레드크럼 */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-3">
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                홈
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">딜 아카이브</span>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">딜 아카이브</h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              $689억 Microsoft-Activision부터 KKR·RJR Nabisco까지 — M&A·PE 딜의 배경,
              밸류에이션, 사후 평가를 해부합니다.{" "}
              총 <span className="font-semibold text-gray-700 dark:text-gray-300">{ALL_DEALS.length}개</span> 딜.
            </p>

            {/* 크로스링크 — Market Story */}
            <div className="mt-4">
              <Link
                href="/market"
                className="inline-flex items-center gap-1.5 text-xs text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800/60 rounded-full px-3 py-1 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
              >
                <span className="font-bold text-[10px] bg-teal-600 text-white rounded px-1 py-0.5 leading-none">M</span>
                자본시장 랜드마크 딜 → Market Story
              </Link>
            </div>
          </div>
        </section>

        {/* 필터 + 카드 그리드 */}
        <div className="max-w-4xl mx-auto px-5 py-8">
          <DealsClient initialDeals={ALL_DEALS} />
        </div>

      </main>
      <Footer />
    </>
  );
}
