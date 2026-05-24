/**
 * Deal 101 / 공개매수 — Tender Offer (KO) — Server Component
 */
import type { Metadata } from "next";
import { TenderOfferClient } from "./TenderOfferClient";

export const metadata: Metadata = {
  title: "공개매수(Tender Offer) 완전 정리 — 적대적 인수·방어 전략 | Deal Story",
  description:
    "공개매수란 무엇인가. 이사회를 거치지 않고 주주에게 직접 매수 제안하는 방식, 프로세스, 포이즌 필·White Knight 방어 전략, Musk×Twitter·Microsoft×Activision 케이스.",
  keywords: [
    "공개매수",
    "Tender Offer",
    "적대적 인수",
    "포이즌 필",
    "White Knight",
    "Going Private",
    "M&A 방어",
  ],
  alternates: {
    canonical: "/deal-101/tender-offer",
    languages: {
      ko: "/deal-101/tender-offer",
      en: "/en/deal-101/tender-offer",
      "x-default": "/deal-101/tender-offer",
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
  return <TenderOfferClient />;
}
