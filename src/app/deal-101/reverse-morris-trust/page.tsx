/**
 * Deal 101 / Reverse Morris Trust (KO) — Server Component
 */
import type { Metadata } from "next";
import ReverseMorrisTrustClient from "./ReverseMorrisTrustClient";

export const metadata: Metadata = {
  title: "Reverse Morris Trust — 세금 없이 사업부를 매각하는 고급 구조 | Deal Story",
  description:
    "스핀오프와 합병을 결합해 수십억 달러의 세금을 피하는 거래 구조. RMT 단계별 메커니즘, 50% 지분 요건, AT&T×WarnerMedia·Abbott×AbbVie 케이스 스터디.",
  keywords: [
    "Reverse Morris Trust",
    "RMT",
    "역합병",
    "세금 없는 M&A",
    "스핀오프 합병",
    "Section 355",
    "Section 368",
    "AT&T WarnerMedia",
    "Abbott AbbVie",
    "IRS PLR",
  ],
  alternates: {
    canonical: "/deal-101/reverse-morris-trust",
    languages: {
      ko: "/deal-101/reverse-morris-trust",
      en: "/en/deal-101/reverse-morris-trust",
      "x-default": "/deal-101/reverse-morris-trust",
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
  return <ReverseMorrisTrustClient />;
}
