/**
 * Deal 101 / CDD (사업실사) (KO) — Server Component
 */
import type { Metadata } from "next";
import CddClient from "./CddClient";

export const metadata: Metadata = {
  title: "CDD (사업실사) 완전 정리 — 이 사업이 지속될 수 있는가 | Deal 101 | Deal Story",
  description:
    "시장 규모·경쟁 구도·고객 분석·수익 지속성 검증. MBK×홈플러스(이커머스 미예측)·HP×Autonomy·WeWork 케이스.",
  keywords: [
    "CDD",
    "사업실사",
    "Commercial Due Diligence",
    "시장 분석",
    "고객 분석",
    "경쟁 구도",
    "수익 지속성",
    "DD",
  ],
  alternates: {
    canonical: "/deal-101/cdd",
    languages: {
      ko: "/deal-101/cdd",
      en: "/en/deal-101/cdd",
      "x-default": "/deal-101/cdd",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "CDD (사업실사) 완전 정리 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function CddPage() {
  return <CddClient />;
}
