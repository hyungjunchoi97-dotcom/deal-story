import type { Metadata } from "next";
import MaVal04Client from "./MaVal04Client";

export const metadata: Metadata = {
  title: "Valuation Ch.4 — Football Field 종합과 컨텍스트별 valuation | Deal Story",
  description:
    "4-5 method를 한 페이지로 합치는 작업, overlap zone과 narrative, IPO·M&A·LBO·Restructuring 컨텍스트별 메인 method 차이, range narrowing 4단계.",
  keywords: ["Valuation", "Football Field", "Overlap Zone", "Sell-side", "Buy-side", "Range Narrowing", "Context"],
  alternates: {
    canonical: "/deal-101/val-ch04-football-field",
    languages: {
      ko: "/deal-101/val-ch04-football-field",
      en: "/en/deal-101/val-ch04-football-field",
      "x-default": "/deal-101/val-ch04-football-field",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Valuation Ch.4 — Football Field 종합과 컨텍스트별 valuation",
    description: "Overlap zone, sell-side vs buy-side anchor, 컨텍스트별 강조점, range narrowing 4단계",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaVal04Client lang="ko" />;
}
