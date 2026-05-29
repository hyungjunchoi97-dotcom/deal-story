import type { Metadata } from "next";
import MaCh01OverviewClient from "./MaCh01OverviewClient";

export const metadata: Metadata = {
  title: "M&A Ch.1 — 전과정 흐름 (6개월의 여정) | Deal Story",
  description:
    "M&A는 보기보다 단순한 흐름이다. Teaser → Mandate → FDD·Valuation·IM → IOI → SPA → Closing 9단계 타임라인, 5개 주체의 병렬 워크스트림, 진짜 어려운 4지점.",
  keywords: ["M&A 프로세스", "M&A 흐름", "Sell-side", "Buy-side", "Teaser", "CIM", "IOI", "SPA", "FDD", "Closing"],
  alternates: {
    canonical: "/deal-101/ma-ch01-overview",
    languages: {
      ko: "/deal-101/ma-ch01-overview",
      en: "/en/deal-101/ma-ch01-overview",
      "x-default": "/deal-101/ma-ch01-overview",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "M&A Ch.1 — 전과정 흐름 (6개월의 여정)",
    description: "9단계 sell-side process + 5개 주체 병렬 워크스트림 + 진짜 어려운 4지점",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaCh01OverviewClient lang="ko" />;
}
