import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import DealsFolderClient from "../../deals/DealsFolderClient";
import { ALL_DEALS_EN } from "@/data/deals/en";
import { ALL_LBO_DEALS } from "@/data/deals/lbo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Deal Archive — Landmark M&A & PE Analysis | Deal Story",
  description:
    "In-depth breakdowns of landmark M&A, LBO, activism, and restructuring transactions. Background, deal structure, valuation, rationale, and post-deal outcomes for 40+ deals.",
  keywords: [
    "M&A analysis", "PE deals", "leveraged buyout", "KKR RJR Nabisco",
    "Microsoft Activision", "activist investing", "deal story", "corporate acquisitions",
    "restructuring", "control contests",
  ],
  openGraph: {
    title: "Deal Archive — Landmark M&A & PE Analysis | Deal Story",
    description:
      "From Microsoft's $68.7B Activision bet to KKR's LBO of the century — landmark deals dissected: structure, valuation, and post-deal outcomes.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
  },
  alternates: {
    canonical: "/en/deals",
    languages: { ko: "/deals", en: "/en/deals", "x-default": "/deals" },
  },
};

export default function DealsPageEn() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Deal Archive | Deal Story",
        description:
          "In-depth analysis of landmark M&A, PE/VC, and IPO transactions — background, structure, valuation, and post-deal outcomes.",
        url: `${SITE_URL}/en/deals`,
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en/` },
          { "@type": "ListItem", position: 2, name: "Deal Archive", item: `${SITE_URL}/en/deals` },
        ],
      },
      {
        "@type": "ItemList",
        name: "Deal Archive — Landmark Deals",
        numberOfItems: ALL_DEALS_EN.length,
        itemListElement: ALL_DEALS_EN.slice(0, 12).map((deal, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/en/deals/${deal.slug}`,
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

        <CategoryHero
          lang="en"
          breadcrumb="Deal Archive"
          title="Deal Archive"
          description="From Microsoft's $68.7B Activision bet to KKR's LBO of the century — background, structure, valuation, and post-deal outcomes for 84 landmark deals."
          crossLinks={[
            { key: "market", href: "/en/market", label: "Capital markets landmark deals → Market Story", badge: "M" },
          ]}
        />

        {/* Filter + card grid */}
        <div className="max-w-3xl mx-auto px-5 py-8">
          <DealsFolderClient deals={ALL_DEALS_EN} lboDeals={ALL_LBO_DEALS} lang="en" />
        </div>

      </main>
      <Footer />
    </>
  );
}
