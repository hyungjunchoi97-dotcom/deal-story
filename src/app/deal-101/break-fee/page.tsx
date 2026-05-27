/**
 * Deal 101 / Break-up Fee (KO) — Server Component
 */
import type { Metadata } from "next";
import BreakFeeClient from "./BreakFeeClient";

export const metadata: Metadata = {
  title: "Break-up Fee 완전 정리 — 딜 파기의 비용 | Deal 101 | Deal Story",
  description:
    "바이사이드·리버스 Break-up Fee 차이, 거래금액 대비 규모, Adobe×Figma $10억 위약금·머스크×트위터 케이스.",
  keywords: [
    "Break-up Fee",
    "해약금",
    "딜 파기",
    "위약금",
    "M&A 계약",
    "Reverse Break Fee",
    "Termination Fee",
  ],
  alternates: {
    canonical: "/deal-101/break-fee",
    languages: {
      ko: "/deal-101/break-fee",
      en: "/en/deal-101/break-fee",
      "x-default": "/deal-101/break-fee",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "Break-up Fee 완전 정리 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function BreakFeePage() {
  return <BreakFeeClient />;
}
