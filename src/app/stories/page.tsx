import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import {
  ALL_INVESTOR_STORIES,
  STORY_CATEGORY_META,
  STORY_CATEGORIES,
} from "@/data/investor-stories";
import { SITE_URL } from "@/lib/site";
import StoriesIndexClient from "./StoriesIndexClient";

export const metadata: Metadata = {
  title: "투자자 일화 — 레전드 트레이드·투자 이야기 | Deal Story",
  description:
    "소로스의 파운드화 공매도, 리먼의 붕괴, 볼커의 인플레 전쟁, 골드만삭스를 만든 와인버그까지 — 금융 역사를 바꾼 15인의 실제 거래를 해부합니다.",
  keywords: [
    "소로스", "파운드화 공매도", "아케고스", "빌 황", "버핏 일본", "리먼 브라더스",
    "딕 풀드", "LTCM", "베어링스", "닉 리슨", "버니 매도프", "마이클 밀켄",
    "정크본드", "폴 볼커", "제시 리버모어", "케르비엘",
    "와서스타인", "와인버그", "골드만삭스", "로하틴", "지미 리", "JPMorgan",
    "투자 일화", "Black Wednesday", "TRS 마진콜", "LBO",
  ],
  openGraph: {
    title: "투자자 일화 — 레전드 트레이드·투자 이야기 | Deal Story",
    description:
      "매크로·공매도·가치투자·PE·대폭락 — 금융 역사를 만든 15명의 일화를 시각화·차트와 함께 심층 해부합니다.",
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
  },
  alternates: {
    canonical: "/stories",
    languages: { ko: "/stories", en: "/en/stories", "x-default": "/stories" },
  },
};

export default function StoriesPage() {
  const publishedStories = ALL_INVESTOR_STORIES.filter((s) => s.published);
  const publishedCount = publishedStories.length;
  const totalCount = ALL_INVESTOR_STORIES.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "투자자 일화 — 레전드 트레이드·투자 이야기 | Deal Story",
        description:
          "소로스·매도프·볼커·와인버그까지 — 금융 역사를 바꾼 15인의 일화를 해부합니다.",
        url: `${SITE_URL}/stories`,
        inLanguage: "ko",
        publisher: {
          "@type": "Organization",
          name: "Deal Story",
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "투자자 일화", item: `${SITE_URL}/stories` },
        ],
      },
      {
        "@type": "ItemList",
        name: "레전드 투자자 일화",
        numberOfItems: publishedCount,
        itemListElement: publishedStories.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.title,
          url: `${SITE_URL}/stories/${s.slug}`,
          description: s.excerpt,
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
        <CategoryHero
          lang="ko"
          breadcrumb="투자자 일화"
          title="투자자 일화"
          description="소로스가 영란은행을 무너뜨린 날, 볼커가 20% 금리로 인플레와 싸운 2년, Weinberg가 골드만삭스를 만든 이야기 — 금융사를 만든 15명의 전설."
          crossLinks={[
            { key: "market", href: "/market", label: "자본시장 랜드마크 → Market Story", badge: "M" },
            { key: "deals", href: "/deals", label: "M&A · PE 딜 → Deal Archive", badge: "D" },
          ]}
        />

        {/* ── 카테고리 배지 ── */}
        <div className="max-w-3xl mx-auto px-5 pt-6">
          <div className="flex flex-wrap gap-2">
            {STORY_CATEGORIES.map((cat) => {
              const meta = STORY_CATEGORY_META[cat];
              const count = ALL_INVESTOR_STORIES.filter((s) => s.category === cat).length;
              const pubCount = ALL_INVESTOR_STORIES.filter(
                (s) => s.category === cat && s.published
              ).length;
              if (count === 0) return null;
              return (
                <div
                  key={cat}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium ${meta.bg} ${meta.fg}`}
                >
                  <span className="font-black">{meta.letter}.</span>
                  {meta.label}
                  <span className="opacity-60">{pubCount}/{count}</span>
                </div>
              );
            })}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-500 dark:text-gray-400">
              총 {publishedCount}/{totalCount} 발행
            </div>
          </div>
        </div>

        {/* ── 카테고리 폴더 ── */}
        <div className="max-w-4xl mx-auto px-5 py-10">
          <StoriesIndexClient lang="ko" />
        </div>
      </main>
      <Footer />
    </>
  );
}
