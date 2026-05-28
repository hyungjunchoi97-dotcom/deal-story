import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import { ALL_MARKET_DEALS, DEAL_CATEGORY_META, type DealCategory } from "@/data/market-deals";
import { SITE_URL } from "@/lib/site";
import MarketIndexClient from "@/app/market/MarketIndexClient";

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

        <CategoryHero
          lang="en"
          breadcrumb="Market Story"
          title="Market Story"
          description="The first green bond, a hedge fund that seized a warship, $17B of AT1 wiped to zero, Korea's post-IMF return — 24 landmark deals that changed capital market rules."
          crossLinks={[
            { key: "deals", href: "/en/deals", label: "M&A & PE deal analysis → Deal Archive", badge: "D" },
          ]}
        />

        {/* ── Category badges ── */}
        <div className="max-w-3xl mx-auto px-5 pt-6">
          <div className="flex flex-wrap gap-2">
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

        {/* ── Category folders ── */}
        <div className="max-w-4xl mx-auto px-5 py-10">
          <MarketIndexClient lang="en" />
        </div>

      </main>
      <Footer />
    </>
  );
}
