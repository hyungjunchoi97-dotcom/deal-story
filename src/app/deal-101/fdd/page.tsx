/**
 * Deal 101 / FDD 재무실사 (KO) — Server Component
 */
import type { Metadata } from "next";
import FddClient from "./FddClient";

export const metadata: Metadata = {
  title: "FDD (재무실사) 완전 정리 — IM이 보여주지 않는 것을 찾아라 | Deal 101 | Deal Story",
  description:
    "Quality of Earnings, EBITDA 정상화, 운전자본 분석, 부외부채 발굴. WeWork·HP×Autonomy·Verizon×Yahoo 케이스 스터디.",
  keywords: [
    "FDD", "재무실사", "Financial Due Diligence", "Quality of Earnings", "QoE",
    "EBITDA 정상화", "부외부채", "DD",
  ],
  alternates: {
    canonical: "/deal-101/fdd",
    languages: {
      ko: "/deal-101/fdd",
      en: "/en/deal-101/fdd",
      "x-default": "/deal-101/fdd",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "FDD (재무실사) 완전 정리 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function FddPage() {
  return <FddClient />;
}
