import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ALL_MARKET_DEALS,
  DEAL_CATEGORY_META,
  type DealCategory,
} from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Market Story — Deals That Reshaped Capital Markets | Deal Story",
  description:
    "The first green bond, a hedge fund that seized a warship, $17B of AT1 wiped to zero, Korea's 1998 return to markets — 20 landmark deals that reshaped capital markets.",
  keywords: [
    "AT1 bonds", "green bond", "sovereign bond", "Credit Suisse AT1",
    "SVB collapse", "capital markets", "DCM", "Korea external bond",
    "Argentina century bond", "CAC collective action clause",
  ],
  openGraph: {
    title: "Market Story — Deals That Reshaped Capital Markets | Deal Story",
    description:
      "The first green bond, a hedge fund that seized a warship, $17B of AT1 wiped to zero — 20 landmark capital markets deals dissected.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
  },
  alternates: {
    canonical: "/en/market",
    languages: { ko: "/market", en: "/en/market", "x-default": "/market" },
  },
};

const CATEGORIES: DealCategory[] = [
  "creator", "sovereign", "fig", "structure", "corporate", "crisis",
];

/** Generate card initials from issuer name */
function issuerInitials(name: string): string {
  const clean = name.replace(/\s*\(.*?\)\s*/g, " ").trim();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "—";
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return words
    .slice(0, 3)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function MarketPageEn() {
  const publishedDeals = ALL_MARKET_DEALS.filter((d) => d.published);
  const publishedCount = publishedDeals.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Market Story — Deals That Reshaped Capital Markets | Deal Story",
        description:
          "The first green bond, a hedge fund that seized a warship, $17B of AT1 wiped to zero, Korea's 1998 return to markets — 20 landmark deals that reshaped capital markets.",
        url: `${SITE_URL}/en/market`,
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en/` },
          { "@type": "ListItem", position: 2, name: "Market Story", item: `${SITE_URL}/en/market` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Market Story — Capital Markets Landmark Deals",
        numberOfItems: publishedCount,
        itemListElement: publishedDeals.map((deal, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/en/market/${deal.slug}`,
          name: deal.titleEn,
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

        {/* ── Masthead ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-4xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-3">
              <Link href="/en" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                Home
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Market Story</span>
            </div>

            <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[11px] font-bold mb-3">
              Deals That Changed the Rules
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Market Story
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
              The first green bond, a hedge fund that seized a warship, $17B of AT1 wiped to zero,
              Korea&apos;s post-IMF return — 20 landmark deals that changed capital market rules or left
              lessons too important to forget.
            </p>

            {/* Cross-link — Deal Archive */}
            <div className="mt-4 mb-5">
              <Link
                href="/en/deals"
                className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/60 rounded-full px-3 py-1 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
              >
                <span className="font-bold text-[10px] bg-blue-600 text-white rounded px-1 py-0.5 leading-none">D</span>
                M&amp;A &amp; PE deal analysis → Deal Archive
              </Link>
            </div>

            {/* Category badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              {CATEGORIES.map((cat) => {
                const meta = DEAL_CATEGORY_META[cat];
                const count = ALL_MARKET_DEALS.filter((d) => d.category === cat).length;
                const pub = ALL_MARKET_DEALS.filter(
                  (d) => d.category === cat && d.published
                ).length;
                return (
                  <div
                    key={cat}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium ${meta.bg} ${meta.fg}`}
                  >
                    <span className="font-black">{meta.letter}.</span>
                    {meta.labelEn}
                    <span className="opacity-60">{pub}/{count}</span>
                  </div>
                );
              })}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-[11px] font-medium text-gray-500 dark:text-gray-400">
                {publishedCount}/{ALL_MARKET_DEALS.length} published
              </div>
            </div>
          </div>
        </section>

        {/* ── Category deal grid ── */}
        <div className="max-w-4xl mx-auto px-5 py-10 space-y-12">
          {CATEGORIES.map((cat) => {
            const meta = DEAL_CATEGORY_META[cat];
            const deals = ALL_MARKET_DEALS.filter((d) => d.category === cat);
            return (
              <section key={cat}>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black text-white ${meta.dot}`}
                  >
                    {meta.letter}
                  </span>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {meta.labelEn}
                  </h2>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {deals.map((deal) =>
                    deal.published ? (
                      <Link key={deal.slug} href={`/en/market/${deal.slug}`}>
                        <div
                          className={`group rounded-xl border p-5 h-full flex flex-col cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5 ${meta.bg}`}
                          style={{ borderColor: "transparent" }}
                        >
                          {/* Issuer initials + year */}
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-black text-white flex-shrink-0 ${meta.dot}`}
                            >
                              {issuerInitials(deal.issuerEn)}
                            </div>
                            <div
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${meta.fg}`}
                              style={{ background: "rgba(0,0,0,0.06)" }}
                            >
                              {deal.dealYear}
                            </div>
                          </div>

                          <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">
                            {deal.issuerEn}
                          </p>
                          <h3
                            className={`text-[14px] font-bold leading-snug mb-2 ${meta.fg} group-hover:underline`}
                          >
                            {deal.titleEn}
                          </h3>
                          <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1 line-clamp-2 mb-3">
                            {deal.excerptEn}
                          </p>
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-gray-400">{deal.readingMinutes} min read</span>
                            <span className={`font-medium ${meta.fg}`}>Read →</span>
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <div
                        key={deal.slug}
                        className="relative rounded-xl border border-gray-200/60 dark:border-gray-700/40 p-5 h-full flex flex-col bg-gray-50/50 dark:bg-gray-900/30 opacity-60"
                      >
                        <div className="absolute top-3 right-3 bg-gray-200 dark:bg-gray-700 text-gray-500 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                          Coming Soon
                        </div>

                        {/* Issuer initials + year (inactive) */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-black text-white flex-shrink-0 bg-gray-300 dark:bg-gray-600">
                            {issuerInitials(deal.issuerEn)}
                          </div>
                          <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500">
                            {deal.dealYear}
                          </div>
                        </div>

                        <div className="text-[11px] text-gray-400 mb-1">
                          {deal.issuerEn}
                        </div>
                        <h3 className="text-[13px] font-bold text-gray-500 leading-snug mb-2 line-clamp-2">
                          {deal.titleEn}
                        </h3>
                        <p className="text-[12px] text-gray-400 leading-relaxed flex-1 line-clamp-2">
                          {deal.excerptEn}
                        </p>
                      </div>
                    )
                  )}
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
