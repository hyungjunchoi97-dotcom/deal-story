/**
 * Deal 101 / 전략적 M&A (KO) — Server Component
 */
import type { Metadata } from "next";
import { StrategicMaClient } from "./StrategicMaClient";

export const metadata: Metadata = {
  title: "전략적 M&A — 게임판 자체를 바꾸는 인수합병 | Deal 101 | Deal Story",
  description:
    "전략적 인수자 vs PE 재무적 인수자 차이, 수평·수직 통합·기술 인수·Acqui-hire 6가지 전략 동기, Meta×Instagram·Microsoft×LinkedIn 케이스로 배우는 전략적 M&A.",
  keywords: [
    "전략적 M&A",
    "전략적 인수자",
    "수평 통합",
    "수직 통합",
    "Acqui-hire",
    "시너지",
    "Meta Instagram",
    "Microsoft LinkedIn",
    "M&A 전략",
    "방어적 M&A",
  ],
  alternates: {
    canonical: "/deal-101/strategic-ma",
    languages: {
      ko: "/deal-101/strategic-ma",
      en: "/en/deal-101/strategic-ma",
      "x-default": "/deal-101/strategic-ma",
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
  return <StrategicMaClient />;
}
