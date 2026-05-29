import type { Metadata } from "next";
import MaCh03FddCaseClient from "./MaCh03FddCaseClient";

export const metadata: Metadata = {
  title: "M&A Ch.3 — FDD 실랑이: 1회성 vs 반복적 (Wasserstein × RJR + WeWork) | Deal Story",
  description:
    "FDD의 전부는 한 줄로 — 1회성 vs 반복적. Bruce Wasserstein × RJR Nabisco (1988)에서 Adjusted EBITDA가 어떻게 만들어졌나, WeWork Community Adjusted EBITDA (2019)는 어디서 fiction이 됐나. Add-back 8 카테고리 + 가격 임팩트.",
  keywords: ["FDD", "Adjusted EBITDA", "Quality of Earnings", "Bruce Wasserstein", "RJR Nabisco", "WeWork", "Community Adjusted EBITDA", "1회성 비용", "Add-back"],
  alternates: {
    canonical: "/deal-101/ma-ch03-fdd-case",
    languages: {
      ko: "/deal-101/ma-ch03-fdd-case",
      en: "/en/deal-101/ma-ch03-fdd-case",
      "x-default": "/deal-101/ma-ch03-fdd-case",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "M&A Ch.3 — FDD 실랑이: 1회성 vs 반복적",
    description: "Wasserstein × RJR Nabisco + WeWork case로 본 EBITDA add-back fight",
    images: [{ url: "/api/og", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <MaCh03FddCaseClient lang="ko" />;
}
