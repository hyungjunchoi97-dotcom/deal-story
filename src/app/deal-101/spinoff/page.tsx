/**
 * Deal 101 / 스핀오프 (KO) — Server Component
 */
import type { Metadata } from "next";
import SpinoffClient from "./SpinoffClient";

export const metadata: Metadata = {
  title: "스핀오프 — 사업부 분리로 숨겨진 가치를 꺼내는 전략 | Deal Story",
  description:
    "복합기업 할인(Conglomerate Discount)을 해소하는 핵심 도구. 스핀오프의 정의, 카브아웃·분할매각과의 차이, 가치 창출 메커니즘, PayPal×eBay·GE 3분할 케이스 스터디.",
  keywords: [
    "스핀오프",
    "Spin-off",
    "복합기업 할인",
    "Conglomerate Discount",
    "기업분할",
    "카브아웃",
    "PayPal eBay",
    "GE 분할",
    "사업부 분리",
  ],
  alternates: {
    canonical: "/deal-101/spinoff",
    languages: {
      ko: "/deal-101/spinoff",
      en: "/en/deal-101/spinoff",
      "x-default": "/deal-101/spinoff",
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
  return <SpinoffClient />;
}
