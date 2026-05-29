import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_NOTES, NOTE_SERIES_META } from "@/data/notes";
import { SITE_URL } from "@/lib/site";
import SeriesHeroClient from "../../../series/after-pax-americana/SeriesHeroClient";

const SERIES_ID = "after-pax-americana" as const;
const meta = NOTE_SERIES_META[SERIES_ID];

export const metadata: Metadata = {
  title: "After Pax Americana — The Decade After Hegemony | Deal Story",
  description:
    "Shale, demographics, and debt drive America's retreat — and the awakening of the peripheries. A 15-part series from Hormuz to Taiwan, Ukraine to Venezuela.",
  keywords: [
    "Pax Americana", "geopolitics", "shale revolution", "de-dollarization",
    "US debt", "Strait of Hormuz", "Taiwan Strait", "NATO", "Peter Zeihan",
    "Korea discount", "Korean nuclear", "global hegemony", "BRICS",
  ],
  alternates: {
    canonical: "/en/series/after-pax-americana",
    languages: {
      ko: "/series/after-pax-americana",
      en: "/en/series/after-pax-americana",
      "x-default": "/series/after-pax-americana",
    },
  },
  openGraph: {
    title: "After Pax Americana — The Decade After Hegemony | Deal Story",
    description: "A 15-part series — the decade after the hegemon retreats. Shale, demographics, debt, war, and capital restructuring.",
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/en/series/after-pax-americana`,
  },
};

export default function AfterPaxAmericanaPageEn() {
  const chapters = ALL_NOTES
    .filter((n) => n.series === SERIES_ID && n.seriesOrder != null)
    .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "After Pax Americana — The Decade After Hegemony",
        description: meta.descEn,
        url: `${SITE_URL}/en/series/after-pax-americana`,
        inLanguage: "en",
        publisher: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Notes", item: `${SITE_URL}/en/notes` },
          {
            "@type": "ListItem",
            position: 3,
            name: "After Pax Americana",
            item: `${SITE_URL}/en/series/after-pax-americana`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "After Pax Americana — 15 Parts",
        numberOfItems: chapters.length,
        itemListElement: chapters.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.titleEn ?? c.title,
          url: `${SITE_URL}/en/notes/${c.slug}`,
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
      <SeriesHeroClient lang="en" />
      <Footer />
    </>
  );
}
