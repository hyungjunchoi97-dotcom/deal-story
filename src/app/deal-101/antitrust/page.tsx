/**
 * Deal 101 / 기업결합 심사 완전 정리 (KO) — Server Component
 */
import type { Metadata } from "next";
import AntitrustClient from "./AntitrustClient";

export const metadata: Metadata = {
  title: "기업결합 심사 완전 정리 — M&A의 마지막 관문 | Deal 101 | Deal Story",
  description:
    "공정위·EU·DOJ·MOFCOM 각국 심사 기관, HHI 시장 집중도, 조건부 승인 vs 금지, Adobe×Figma·MS×Activision·Qualcomm×NXP 케이스.",
  keywords: [
    "기업결합 심사",
    "반독점",
    "공정거래위원회",
    "EU 기업결합",
    "HHI",
    "시장 획정",
    "M&A 규제",
    "CFIUS",
    "MOFCOM",
  ],
  alternates: {
    canonical: "/deal-101/antitrust",
    languages: {
      ko: "/deal-101/antitrust",
      en: "/en/deal-101/antitrust",
      "x-default": "/deal-101/antitrust",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "기업결합 심사 완전 정리 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function AntitrustPage() {
  return <AntitrustClient />;
}
