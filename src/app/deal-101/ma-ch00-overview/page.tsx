/**
 * Ch.0 — M&A Series Deal Type Matrix (KO)
 */
import type { Metadata } from "next";
import MaCh00OverviewClient from "./MaCh00OverviewClient";

export const metadata: Metadata = {
  title: "M&A 시리즈 — Deal Type Matrix (Ch.0) | Deal Story",
  description:
    "GS·MS·JPM M&A 팀의 실무 풀 라이프사이클 14챕터 + 5축 인터랙티브 매트릭스. Sell-side·Buy-side, Auction·Negotiated, Public·Private·Carve-out·Distressed 등 변수 조합에 따라 챕터별 분기점을 한눈에.",
  keywords: [
    "M&A 시리즈", "M&A 프로세스", "딜 타입 매트릭스", "Goldman Sachs M&A",
    "Sell-side", "Buy-side", "Broad auction", "Negotiated", "Public take-private",
    "Carve-out", "Distressed", "M&A 워크플로우",
  ],
  alternates: {
    canonical: "/deal-101/ma-ch00-overview",
    languages: {
      ko: "/deal-101/ma-ch00-overview",
      en: "/en/deal-101/ma-ch00-overview",
      "x-default": "/deal-101/ma-ch00-overview",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "M&A 시리즈 — Deal Type Matrix (Ch.0)",
    description: "5축 인터랙티브로 14챕터 M&A 라이프사이클 분기 한눈에",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaCh00OverviewClient lang="ko" />;
}
