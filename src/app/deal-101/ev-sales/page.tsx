/**
 * 딜 101 / EV/Sales 멀티플 — Server Component
 */
import type { Metadata } from "next";
import EvSalesClient from "./EvSalesClient";

export const metadata: Metadata = {
  title: "EV/Sales 멀티플 — 성장주 밸류에이션의 기준 | Deal Story",
  description:
    "EBITDA가 마이너스인 고성장 기업의 M&A 가격을 어떻게 정하는가. EV/Sales 배수의 계산법, 결정 요인 5가지, 업종별 가이드, Salesforce×Slack·Adobe×Figma 케이스 스터디까지.",
  alternates: {
    canonical: "/deal-101/ev-sales",
    languages: {
      ko: "/deal-101/ev-sales",
      en: "/en/deal-101/ev-sales",
      "x-default": "/deal-101/ev-sales",
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
  return <EvSalesClient />;
}
