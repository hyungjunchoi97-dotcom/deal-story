import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_NOTES, NOTE_SERIES_META } from "@/data/notes";
import { SITE_URL } from "@/lib/site";
import SeriesHeroClient from "./SeriesHeroClient";

const SERIES_ID = "after-pax-americana" as const;
const meta = NOTE_SERIES_META[SERIES_ID];

export const metadata: Metadata = {
  title: `After Pax Americana — 팩스 아메리카나 이후 | Deal Story`,
  description:
    "셰일·인구·부채가 만드는 미국의 후퇴, 그리고 깨어나는 변방의 10년. 15부작 시리즈 — 호르무즈부터 대만, 우크라이나부터 베네수엘라까지.",
  keywords: [
    "Pax Americana", "팩스 아메리카나", "지정학", "셰일 혁명", "탈달러화",
    "미국 부채", "호르무즈", "대만 해협", "NATO", "Peter Zeihan",
    "코리아 디스카운트", "한반도 핵", "글로벌 패권", "BRICS",
  ],
  alternates: {
    canonical: "/series/after-pax-americana",
    languages: {
      ko: "/series/after-pax-americana",
      en: "/en/series/after-pax-americana",
      "x-default": "/series/after-pax-americana",
    },
  },
  openGraph: {
    title: "After Pax Americana — 팩스 아메리카나 이후 | Deal Story",
    description: "15부작 — 패권이 떠난 자리의 10년. 셰일·인구·부채·전쟁·자본의 재편.",
    type: "website",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    url: `${SITE_URL}/series/after-pax-americana`,
  },
};

export default function AfterPaxAmericanaPage() {
  const chapters = ALL_NOTES
    .filter((n) => n.series === SERIES_ID && n.seriesOrder != null)
    .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "After Pax Americana — 팩스 아메리카나 이후",
        description: meta.desc,
        url: `${SITE_URL}/series/after-pax-americana`,
        inLanguage: "ko",
        publisher: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Notes", item: `${SITE_URL}/notes` },
          {
            "@type": "ListItem",
            position: 3,
            name: "After Pax Americana",
            item: `${SITE_URL}/series/after-pax-americana`,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "After Pax Americana — 15부작",
        numberOfItems: chapters.length,
        itemListElement: chapters.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.title,
          url: `${SITE_URL}/notes/${c.slug}`,
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
      <SeriesHeroClient lang="ko" />
      <Footer />
    </>
  );
}
