/**
 * Deal 101 / 인수 프리미엄 완전 정리 (KO) — Server Component
 */
import type { Metadata } from "next";
import AcquisitionPremiumClient from "./AcquisitionPremiumClient";

export const metadata: Metadata = {
  title: "인수 프리미엄 완전 정리 — 왜 시장가보다 더 내는가 | Deal 101 | Deal Story",
  description:
    "인수 프리미엄의 3가지 원천(시너지·경영권·희소성), Winner's Curse, Microsoft×Activision·Twitter·Adobe×Figma 케이스.",
  keywords: [
    "인수 프리미엄",
    "경영권 프리미엄",
    "Control Premium",
    "M&A 프리미엄",
    "Winner's Curse",
    "인수합병 가격",
  ],
  alternates: {
    canonical: "/deal-101/acquisition-premium",
    languages: {
      ko: "/deal-101/acquisition-premium",
      en: "/en/deal-101/acquisition-premium",
      "x-default": "/deal-101/acquisition-premium",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "인수 프리미엄 완전 정리 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function AcquisitionPremiumPage() {
  return <AcquisitionPremiumClient />;
}
