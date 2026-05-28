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
import StoriesIndexClient from "../../stories/StoriesIndexClient";

export const metadata: Metadata = {
  title: "Investor Stories — Legendary Trades & Investment Tales | Deal Story",
  description:
    "From Soros breaking the Bank of England to Volcker's 20% rate hike to Weinberg building Goldman Sachs — deep dives into 15 figures who shaped financial history.",
  keywords: [
    "Soros pound short", "Archegos collapse", "Bill Hwang", "Buffett Japan",
    "Lehman Brothers", "Dick Fuld", "LTCM", "Barings Bank", "Nick Leeson",
    "Bernie Madoff", "Michael Milken", "junk bonds", "Paul Volcker",
    "Jesse Livermore", "Kerviel", "Wasserstein", "Sidney Weinberg",
    "Goldman Sachs", "Felix Rohatyn", "Jimmy Lee", "JPMorgan",
    "legendary trades", "Black Wednesday", "TRS margin call", "LBO",
  ],
  openGraph: {
    title: "Investor Stories — Legendary Trades & Investment Tales | Deal Story",
    description:
      "Macro · short · value · PE · blowup — 15 deep dives into the figures who made financial history, with charts and visualizations.",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/stories",
    languages: { ko: "/stories", en: "/en/stories", "x-default": "/stories" },
  },
};

export default function StoriesPageEn() {
  const publishedStories = ALL_INVESTOR_STORIES.filter((s) => s.published);
  const publishedCount = publishedStories.length;
  const totalCount = ALL_INVESTOR_STORIES.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Investor Stories — Legendary Trades & Investment Tales | Deal Story",
        description:
          "Soros, Madoff, Volcker, Weinberg — 15 deep dives into the figures who shaped financial history.",
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
        <CategoryHero
          lang="en"
          breadcrumb="Investor Stories"
          title="Investor Stories"
          description="The day Soros broke the Bank of England, the two years Volcker fought inflation with 20% rates, and how a janitor named Weinberg built Goldman Sachs — 15 legendary figures who made financial history."
          crossLinks={[
            { key: "market", href: "/en/market", label: "Capital markets landmark deals → Market Story", badge: "M" },
            { key: "deals", href: "/en/deals", label: "M&A · PE deals → Deal Archive", badge: "D" },
          ]}
        />

        {/* ── Category badges ── */}
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
                  {meta.labelEn}
                  <span className="opacity-60">{pubCount}/{count}</span>
                </div>
              );
            })}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-500 dark:text-gray-400">
              {publishedCount}/{totalCount} published
            </div>
          </div>
        </div>

        {/* ── Category folders ── */}
        <div className="max-w-4xl mx-auto px-5 py-10">
          <StoriesIndexClient lang="en" />
        </div>
      </main>
      <Footer />
    </>
  );
}
