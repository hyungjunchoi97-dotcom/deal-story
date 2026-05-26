import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ALL_INVESTOR_STORIES,
  STORY_CATEGORY_META,
  STORY_CATEGORIES,
  type StoryCategory,
} from "@/data/investor-stories";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "투자자 일화 — 레전드 트레이드·투자 이야기 | Deal Story",
  description:
    "소로스의 파운드화 공매도, 빌 황 아케고스 붕괴, 버핏의 일본 종합상사 투자까지 — 금융 역사를 바꾼 레전드 투자자들의 일화를 해부합니다.",
  keywords: [
    "소로스", "파운드화 공매도", "아케고스", "빌 황", "버핏 일본", "레전드 트레이드",
    "매크로 투자", "헤지펀드", "투자 일화", "Black Wednesday", "TRS 마진콜",
  ],
  openGraph: {
    title: "투자자 일화 — 레전드 트레이드·투자 이야기 | Deal Story",
    description:
      "소로스·빌 황·버핏의 전설적 거래를 배경, 전략, 결과, 교훈까지 심층 해부합니다.",
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
  },
  alternates: {
    canonical: "/stories",
    languages: { ko: "/stories", en: "/en/stories", "x-default": "/stories" },
  },
};

/** 투자자 이름에서 카드용 이니셜 생성 */
function investorInitials(name: string): string {
  const clean = name.replace(/\s*\(.*?\)\s*/g, " ").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "—";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function StoriesPage() {
  const publishedStories = ALL_INVESTOR_STORIES.filter((s) => s.published);
  const publishedCount = publishedStories.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "투자자 일화 — 레전드 트레이드·투자 이야기 | Deal Story",
        description:
          "소로스의 파운드화 공매도, 빌 황 아케고스 붕괴, 버핏의 일본 종합상사 투자까지 — 금융 역사를 바꾼 레전드 투자자들의 일화를 해부합니다.",
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
        {/* ── Hero ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-5xl mx-auto px-5 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4 flex-wrap">
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">홈</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">투자자 일화</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-2">
              투자자 일화
            </h1>
            <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mb-5">
              소로스가 영란은행을 굴복시킨 하루, 빌 황이 4일 만에 $200억을 잃은 이야기, 버핏이 90세에 일본에 베팅한 구조까지
              — 금융 역사를 바꾼 레전드 투자자들의 실제 거래를 해부합니다.
            </p>

            {/* Cross-link — Market Story */}
            <div className="flex flex-wrap gap-2 items-center">
              <Link
                href="/market"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/50 transition-colors"
              >
                자본시장 랜드마크 딜 →
                <span className="font-semibold">Market Story</span>
              </Link>
              <Link
                href="/deals"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                M&A·PE 딜 아카이브 →
                <span className="font-semibold">딜 아카이브</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Story Grid by Category ── */}
        <div className="max-w-5xl mx-auto px-5 py-10 space-y-14">
          {STORY_CATEGORIES.map((cat) => {
            const meta = STORY_CATEGORY_META[cat];
            const stories = ALL_INVESTOR_STORIES.filter((s) => s.category === cat);
            if (stories.length === 0) return null;

            return (
              <section key={cat}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm flex-shrink-0`}
                    style={{ background: meta.accent }}
                  >
                    {meta.letter}
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">
                      {meta.label}
                    </h2>
                    <p className="text-[11px] text-gray-400 dark:text-gray-500">
                      {meta.labelEn}
                    </p>
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {stories.map((story) => {
                    if (!story.published) {
                      return (
                        <div
                          key={story.slug}
                          className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30 p-5 opacity-60"
                        >
                          <div className="flex items-center gap-2.5 mb-4">
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-[11px] flex-shrink-0"
                              style={{ background: "#9ca3af" }}
                            >
                              {investorInitials(story.investorEn)}
                            </div>
                            <span className={`ml-auto text-[10px] font-semibold rounded-full px-2 py-0.5 ${meta.bg} ${meta.fg}`}>
                              곧 업로드
                            </span>
                          </div>
                          <p className="text-sm font-bold text-gray-400 dark:text-gray-600 leading-snug mb-1">
                            {story.title}
                          </p>
                          <p className="text-[11px] text-gray-400 dark:text-gray-600">
                            {story.investor} · {story.dealYear}
                          </p>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={story.slug}
                        href={`/stories/${story.slug}`}
                        className="group block h-full"
                      >
                        <article className="h-full rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5 transition-all duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-600 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] group-hover:-translate-y-0.5">
                          {/* Investor badge */}
                          <div className="flex items-center gap-2.5 mb-4">
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-[11px] shadow-sm flex-shrink-0"
                              style={{ background: meta.accent }}
                            >
                              {investorInitials(story.investorEn)}
                            </div>
                            <div className="min-w-0">
                              <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 leading-tight truncate">
                                {story.investor}
                              </p>
                              <p className="text-[10px] text-gray-400 dark:text-gray-500 truncate">
                                {story.fund.split(" / ")[0]}
                              </p>
                            </div>
                            <span className={`ml-auto text-[10px] font-semibold rounded-full px-2 py-0.5 flex-shrink-0 ${meta.bg} ${meta.fg}`}>
                              {meta.label}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors mb-1.5">
                            {story.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
                            {story.excerpt}
                          </p>

                          {/* Footer */}
                          <div className="flex items-end justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                            <p className="text-[11px] text-gray-400 dark:text-gray-500">
                              {story.dealYear}년
                            </p>
                            <p className="text-[11px] text-gray-400 dark:text-gray-500">
                              {story.readingMinutes}분 읽기
                            </p>
                          </div>
                        </article>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
