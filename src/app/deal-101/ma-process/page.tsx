/**
 * Deal 101 / M&A 프로세스 완전 정리 (KO) — Server Component
 */
import type { Metadata } from "next";
import MaProcessClient from "./MaProcessClient";

export const metadata: Metadata = {
  title: "M&A 프로세스 완전 정리 — Deal 101 | Deal Story",
  description:
    "전략 수립부터 클로징까지 6단계 M&A 프로세스. 각 단계의 이해관계자(IB·법무·회계법인·규제당국), 핵심 문서(IM·LOI·SPA·DD보고서), 그리고 딜이 성공하고 실패하는 이유를 케이스 스터디로 정리.",
  keywords: [
    "M&A 프로세스", "M&A 절차", "기업 인수합병", "LOI", "SPA", "듀 딜리전스",
    "실사", "FDD", "CDD", "LDD", "기업결합", "M&A IB", "매각 프로세스",
    "인수 프로세스", "IM", "티저", "VDR", "Break-up Fee", "MAC 조항",
  ],
  alternates: {
    canonical: "/deal-101/ma-process",
    languages: {
      ko: "/deal-101/ma-process",
      en: "/en/deal-101/ma-process",
      "x-default": "/deal-101/ma-process",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "M&A 프로세스 완전 정리 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function MaProcessPage() {
  return <MaProcessClient />;
}
