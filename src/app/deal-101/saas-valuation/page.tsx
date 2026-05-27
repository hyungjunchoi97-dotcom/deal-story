/**
 * Deal 101 / SaaS 밸류에이션 (KO) — Server Component
 */
import type { Metadata } from "next";
import { SaasValuationClient } from "./SaasValuationClient";

export const metadata: Metadata = {
  title: "SaaS 밸류에이션 — ARR·NRR·Rule of 40 완전 정리 | Deal Story",
  description:
    "SaaS 기업은 왜 EBITDA 멀티플로 평가하지 않는가. ARR·NRR·Rule of 40·CAC Payback 7가지 핵심 지표와 ARR 멀티플 산정법, GitHub·Zendesk 케이스 스터디.",
  keywords: [
    "SaaS 밸류에이션",
    "ARR 멀티플",
    "NRR",
    "Rule of 40",
    "CAC Payback",
    "SaaS M&A",
    "NTM Revenue",
  ],
  alternates: {
    canonical: "/deal-101/saas-valuation",
    languages: {
      ko: "/deal-101/saas-valuation",
      en: "/en/deal-101/saas-valuation",
      "x-default": "/deal-101/saas-valuation",
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
  return <SaasValuationClient />;
}
