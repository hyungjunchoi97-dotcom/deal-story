/**
 * Ch.1 — Origination & Pitching (KO)
 */
import type { Metadata } from "next";
import MaCh01OriginationClient from "./MaCh01OriginationClient";

export const metadata: Metadata = {
  title: "M&A Ch.1 — Origination & Pitching | Deal Story",
  description:
    "GS·MS·JPM M&A 팀이 mandate를 따오는 실무 흐름. Coverage matrix(Industry × Geography), Pipeline funnel(Tapping → Mandate), Pitch book 36p 표준 구성, Bake-off 결정 기준, Sell-side vs Buy-side origination 차이.",
  keywords: [
    "M&A origination", "Pitch book", "Bake-off", "Beauty contest", "Engagement letter",
    "Coverage model", "Tapping list", "BB MM Boutique", "Sector head MD", "M&A 실무",
  ],
  alternates: {
    canonical: "/deal-101/ma-ch01-origination",
    languages: {
      ko: "/deal-101/ma-ch01-origination",
      en: "/en/deal-101/ma-ch01-origination",
      "x-default": "/deal-101/ma-ch01-origination",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "M&A Ch.1 — Origination & Pitching",
    description: "Coverage matrix · Pipeline funnel · Pitch book 36p · Bake-off 결정 기준",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaCh01OriginationClient lang="ko" />;
}
