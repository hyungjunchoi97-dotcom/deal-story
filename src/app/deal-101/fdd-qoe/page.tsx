/**
 * Deal 101 / FDD 101 Ch.4 — Quality of Earnings (KO) — Server Component
 */
import type { Metadata } from "next";
import FddQoeClient from "./FddQoeClient";

export const metadata: Metadata = {
  title: "Quality of Earnings — EBITDA는 발견되는 게 아니라 조정되는 숫자다 | FDD 101 Ch.4 | Deal Story",
  description:
    "Big 4 Transaction Services의 QoE 보고서를 분해한다. EBITDA Bridge 차트, 7가지 조정 유형, ASC 606 / IFRS 15 / K-IFRS 1115 비교, IFRS 16 리스 영향. Vista×Citrix($16.5B), Hahn×Lutronic(KRW 957bn), Samsung×Harman($8B) dual case.",
  keywords: [
    "Quality of Earnings", "QoE", "FDD", "재무실사", "Financial Due Diligence",
    "EBITDA Bridge", "Adjusted EBITDA", "Big 4", "PwC EY KPMG Deloitte",
    "Vista Citrix", "Hahn Lutronic", "Samsung Harman",
    "ASC 606", "IFRS 15", "K-IFRS 1115", "IFRS 16", "K-IFRS 1116", "EBITDAaL",
    "take-private", "LBO QoE", "KOSDAQ FDD",
  ],
  alternates: {
    canonical: "/deal-101/fdd-qoe",
    languages: {
      ko: "/deal-101/fdd-qoe",
      en: "/en/deal-101/fdd-qoe",
      "x-default": "/deal-101/fdd-qoe",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    title: "Quality of Earnings — EBITDA는 발견되는 게 아니라 조정되는 숫자다",
    description:
      "Big 4가 4~8주 동안 만드는 단 하나의 숫자 — Adjusted EBITDA. EBITDA Bridge 차트, 7가지 조정 유형, 회계기준 비교, US·KO·Cross-border 케이스.",
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "Quality of Earnings — FDD 101 Ch.4 | Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function FddQoePage() {
  return <FddQoeClient lang="ko" />;
}
