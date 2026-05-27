/**
 * Deal 101 / 수직 통합 (KO) — Server Component
 */
import type { Metadata } from "next";
import VerticalIntegrationClient from "./VerticalIntegrationClient";

export const metadata: Metadata = {
  title: "수직 통합 — 공급망을 장악하는 M&A 전략 | Deal Story",
  description:
    "수직 통합(Vertical Integration)의 전방·후방 통합 차이, 5가지 전략적 이유(원가 절감·공급 안정성·품질 통제·데이터·경쟁 차단), 5가지 리스크, Amazon·Apple 케이스 스터디.",
  keywords: [
    "수직 통합",
    "vertical integration",
    "전방 통합",
    "후방 통합",
    "공급망 M&A",
    "Amazon Whole Foods",
    "Apple 칩 내재화",
    "M&A 전략",
  ],
  alternates: {
    canonical: "/deal-101/vertical-integration",
    languages: {
      ko: "/deal-101/vertical-integration",
      en: "/en/deal-101/vertical-integration",
      "x-default": "/deal-101/vertical-integration",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function Page() {
  return <VerticalIntegrationClient />;
}
