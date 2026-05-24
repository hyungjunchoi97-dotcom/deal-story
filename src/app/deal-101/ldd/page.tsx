/**
 * Deal 101 / LDD (법률실사) (KO) — Server Component
 */
import type { Metadata } from "next";
import LddClient from "./LddClient";

export const metadata: Metadata = {
  title: "LDD (법률실사) 완전 정리 — 계약·IP·소송 리스크 발굴 | Deal 101 | Deal Story",
  description:
    "Change of Control 조항, IP 소유권, 소송·분쟁, 규제·인허가 리스크. Verizon×Yahoo($350M 가격 인하)·Microsoft×LinkedIn 케이스.",
  keywords: [
    "LDD",
    "법률실사",
    "Legal Due Diligence",
    "Change of Control",
    "IP 리스크",
    "계약 리스크",
    "소송",
    "DD",
  ],
  alternates: {
    canonical: "/deal-101/ldd",
    languages: {
      ko: "/deal-101/ldd",
      en: "/en/deal-101/ldd",
      "x-default": "/deal-101/ldd",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "ko_KR",
    alternateLocale: ["en_US"],
    images: [
      { url: "/api/og", width: 1200, height: 630, alt: "LDD (법률실사) 완전 정리 — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function LddPage() {
  return <LddClient />;
}
