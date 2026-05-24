/**
 * Deal 101 / MAC 조항 (KO) — Server Component
 */
import type { Metadata } from "next";
import MacClauseClient from "./MacClauseClient";

export const metadata: Metadata = {
  title: "MAC 조항 완전 정리 — 계약 파기의 마지막 수단 | Deal 101 | Deal Story",
  description:
    "Material Adverse Change 정의, 법원의 MAC 인정 기준, 머스크×트위터(MAC 실패) vs. Akorn×Fresenius(MAC 성공) 비교.",
  keywords: [
    "MAC 조항",
    "Material Adverse Change",
    "MAE",
    "M&A 계약 파기",
    "SPA",
    "머스크 트위터",
    "기업결합",
  ],
  alternates: {
    canonical: "/deal-101/mac-clause",
    languages: {
      ko: "/deal-101/mac-clause",
      en: "/en/deal-101/mac-clause",
      "x-default": "/deal-101/mac-clause",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "MAC 조항 완전 정리 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function MacClausePage() {
  return <MacClauseClient />;
}
