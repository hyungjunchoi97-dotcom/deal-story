import type { Metadata } from "next";
import MaFund05Client from "./MaFund05Client";

export const metadata: Metadata = {
  title: "Fund Ch.5 — Fund 수익 구조: LP/GP 경제학 | Deal Story",
  description:
    "$1B fund 10년 cash flow + crossover, American vs European waterfall 깊이 비교, $300M carry pool 분배 (Founding Partner → Senior Associate), DPI/RVPI/TVPI/IRR 지표, Top vs Bottom Quartile 결과 비교 (~10x 차이).",
  keywords: ["Fund", "Fund Economics", "Carry", "Waterfall", "American Waterfall", "European Waterfall", "DPI", "TVPI", "IRR", "MOIC", "Top Quartile"],
  alternates: {
    canonical: "/deal-101/fund-ch05-economics",
    languages: {
      ko: "/deal-101/fund-ch05-economics",
      en: "/en/deal-101/fund-ch05-economics",
      "x-default": "/deal-101/fund-ch05-economics",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Fund Ch.5 — Fund 수익 구조: LP/GP 경제학",
    description: "10년 cash flow · American vs European · Carry 분배 · 4가지 지표 · Top vs Bottom Quartile",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaFund05Client lang="ko" />;
}
