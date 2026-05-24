/**
 * Deal 101 / 시너지 완전 정리 (KO) — Server Component
 */
import type { Metadata } from "next";
import SynergyClient from "./SynergyClient";

export const metadata: Metadata = {
  title: "시너지 완전 정리 — M&A 프리미엄의 근거 | Deal 101 | Deal Story",
  description:
    "Cost Synergy vs Revenue Synergy, 왜 70%의 M&A가 시너지를 못 달성하는가, Disney×Pixar·AOL×Time Warner·Daimler×Chrysler 케이스 스터디.",
  keywords: [
    "시너지",
    "M&A 시너지",
    "코스트 시너지",
    "레버뉴 시너지",
    "인수합병 시너지",
    "PMI",
    "AOL Time Warner",
    "Disney Pixar",
  ],
  alternates: {
    canonical: "/deal-101/synergy",
    languages: {
      ko: "/deal-101/synergy",
      en: "/en/deal-101/synergy",
      "x-default": "/deal-101/synergy",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "시너지 완전 정리 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function SynergyPage() {
  return <SynergyClient />;
}
