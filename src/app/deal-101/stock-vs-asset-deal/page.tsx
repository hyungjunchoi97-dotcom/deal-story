/**
 * Deal 101 / 스톡딜 vs 에셋딜 (KO) — Server Component
 */
import type { Metadata } from "next";
import StockVsAssetClient from "./StockVsAssetClient";

export const metadata: Metadata = {
  title: "스톡딜 vs 에셋딜 — 회사를 통째로 살까, 자산만 살까 | Deal 101 | Deal Story",
  description:
    "주식 인수 vs 자산 인수의 구조적 차이, 세금 관점 비교, 언제 어떤 구조를 선택하는가.",
  keywords: [
    "스톡딜", "에셋딜", "주식 인수", "자산 인수", "Stock Purchase", "Asset Purchase",
    "M&A 구조", "Tax Step-up",
  ],
  alternates: {
    canonical: "/deal-101/stock-vs-asset-deal",
    languages: {
      ko: "/deal-101/stock-vs-asset-deal",
      en: "/en/deal-101/stock-vs-asset-deal",
      "x-default": "/deal-101/stock-vs-asset-deal",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "스톡딜 vs 에셋딜 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function StockVsAssetPage() {
  return <StockVsAssetClient />;
}
