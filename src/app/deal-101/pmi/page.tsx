/**
 * Deal 101 / PMI (KO) — Server Component
 */
import type { Metadata } from "next";
import PmiClient from "./PmiClient";

export const metadata: Metadata = {
  title: "PMI 완전 정리 — 딜은 사인이 아니라 통합에서 완성된다 | Deal 101 | Deal Story",
  description:
    "조직·IT·문화 3대 통합 과제, 100일 PMI 플랜, Disney×Pixar(성공)·HP×Compaq(IT 실패)·Daimler×Chrysler(문화 충돌) 케이스.",
  keywords: [
    "PMI", "인수후통합", "Post-Merger Integration", "M&A 통합", "시너지 실현",
    "문화 통합", "IT 통합", "Disney Pixar", "Daimler Chrysler",
  ],
  alternates: {
    canonical: "/deal-101/pmi",
    languages: {
      ko: "/deal-101/pmi",
      en: "/en/deal-101/pmi",
      "x-default": "/deal-101/pmi",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "PMI 완전 정리 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function PmiPage() {
  return <PmiClient />;
}
