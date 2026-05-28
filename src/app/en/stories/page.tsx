import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ALL_INVESTOR_STORIES,
  STORY_CATEGORY_META,
  STORY_CATEGORIES,
} from "@/data/investor-stories";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investor Stories — Legendary Trades & Investment Tales | Deal Story",
  description:
    "From Soros breaking the Bank of England to Bill Hwang's Archegos implosion and Buffett's Japan bet — deep dives into the trades and decisions that shaped financial history.",
  keywords: [
    "Soros pound short", "Archegos collapse", "Bill Hwang", "Buffett Japan", "legendary trades",
    "macro investing", "hedge fund stories", "Black Wednesday", "TRS margin call", "value investing",
  ],
  openGraph: {
    title: "Investor Stories — Legendary Trades & Investment Tales | Deal Story",
    description:
      "Deep dives into the trades and decisions of Soros, Hwang, Buffett, and other legendary investors.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/stories",
    languages: { ko: "/stories", en: "/en/stories", "x-default": "/stories" },
  },
};

function investorInitials(name: string): string {
  const clean = name.replace(/\s*\(.*?\)\s*/g, " ").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "—";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return words.slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export default function StoriesPageEn() {
  const publishedStories = ALL_INVESTOR_STORIES.filter((s) => s.published);
  const publishedCount = publishedStories.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Investor Stories — Legendary Trades & Investment Tales | Deal Story",
        description:
          "From Soros breaking the Bank of England to Bill Hwang's Archegos implosion and Buffett's Japan bet — deep dives into the trades that shaped financial history.",
        url: `${SITE_URL}/en/stories`,
        inLanguage: "en",
        publisher: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en/` },
          { "@type": "ListItem", position: 2, name: "Investor Stories", item: `${SITE_URL}/en/stories` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Legendary Investor Stories",
        numberOfItems: publishedCount,
        itemListElement: publishedStories.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.titleEn,
          url: `${SITE_URL}/en/stories/${s.slug}`,
          description: s.excerptEn,
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
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4 flex-wrap">
              <Link href="/en" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Investor Stories</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-2">
              Investor Stories
            </h1>
            <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mb-5">
              The day Soros broke the Bank of England, how Bill Hwang lost $20 billion in four days, and the structure behind Buffett&apos;s Japan bet at age 90
              — deep dives into trades that changed financial history.
            </p>

            <div className="flex flex-wrap gap-2 items-center">
              <Link
                href="/en/market"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-900/50 transition-colors"
              >
                Capital markets landmark deals →
                <span className="font-semibold">Market Story</span>
              </Link>
              <Link
                href="/en/deals"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                M&amp;A · PE deals →
                <span className="font-semibold">Deal Archive</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Story Grid ── */}
        <div className="max-w-5xl mx-auto px-5 py-10 space-y-14">
          {STORY_CATEGORIES.map((cat) => {
            const meta = STORY_CATEGORY_META[cat];
            const stories = ALL_INVESTOR_STORIES.filter((s) => s.category === cat);
            if (stories.length === 0) return null;

            return (
              <section key={cat}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                    style={{ background: meta.accent }}
                  >
                    {meta.letter}
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">
                      {meta.labelEn}
                    </h2>
                  </div>
                </div>

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
                              Coming soon
                            </span>
                          </div>
                          <p className="text-sm font-bold text-gray-400 dark:text-gray-600 leading-snug mb-1">
                            {story.titleEn}
                          </p>
                          <p className="text-[11px] text-gray-400 dark:text-gray-600">
                            {story.investorEn} · {story.dealYear}
                          </p>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={story.slug}
                        href={`/en/stories/${story.slug}`}
                        className="group block h-full"
                      >
                        <article className="h-full rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5 transition-all duration-200 group-hover:border-gray-300 dark:group-hover:border-gray-600 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] group-hover:-translate-y-0.5">
                          <div className="flex items-center gap-2.5 mb-4">
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-[11px] shadow-sm flex-shrink-0"
                              style={{ background: meta.accent }}
                            >
                              {investorInitials(story.investorEn)}
                            </div>
                            <div className="min-w-0">
                              <p className="text-[11px] font-semibold text-gray-700 dark:text-gray-300 leading-tight truncate">
                                {story.investorEn}
                              </p>
                              <p className="text-[10px] text-gray-400 dark:text-gray-500 truncate">
                                {story.fundEn.split(" / ")[0]}
                              </p>
                            </div>
                            <span className={`ml-auto text-[10px] font-semibold rounded-full px-2 py-0.5 flex-shrink-0 ${meta.bg} ${meta.fg}`}>
                              {meta.labelEn}
                            </span>
                          </div>

                          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors mb-1.5">
                            {story.titleEn}
                          </h3>

                          <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
                            {story.excerptEn}
                          </p>

                          <div className="flex items-end justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                            <p className="text-[11px] text-gray-400 dark:text-gray-500">
                              {story.dealYear}
                            </p>
                            <p className="text-[11px] text-gray-400 dark:text-gray-500">
                              {story.readingMinutes} min read
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
