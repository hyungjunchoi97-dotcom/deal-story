/**
 * Deal 101 / M&A 규제 리스크 (KO) — Server Component
 */
import type { Metadata } from "next";
import { RegulatoryRiskClient } from "./RegulatoryRiskClient";

export const metadata: Metadata = {
  title: "M&A 규제 리스크 — 딜을 막는 보이지 않는 벽 | Deal 101 | Deal Story",
  description:
    "반독점, CFIUS/FDI 안보심사, 섹터별 규제까지 — M&A 서명 후 클로징을 가로막는 5가지 규제 리스크 유형과 NVIDIA×Arm, Illumina×GRAIL 케이스 분석.",
  keywords: [
    "M&A 규제 리스크",
    "반독점",
    "CFIUS",
    "FDI 심사",
    "기업결합",
    "HSR Act",
    "EU 합병규정",
    "규제 리스크",
    "Break-up Fee",
    "NVIDIA Arm",
    "Illumina GRAIL",
  ],
  alternates: {
    canonical: "/deal-101/regulatory-risk",
    languages: {
      ko: "/deal-101/regulatory-risk",
      en: "/en/deal-101/regulatory-risk",
      "x-default": "/deal-101/regulatory-risk",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Deal Story" }],
  },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() {
  return <RegulatoryRiskClient />;
}
