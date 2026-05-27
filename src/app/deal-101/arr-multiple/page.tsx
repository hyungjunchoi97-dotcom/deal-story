/**
 * 딜 101 / ARR 멀티플 — Server Component
 */
import type { Metadata } from "next";
import ArrMultipleClient from "./ArrMultipleClient";

export const metadata: Metadata = {
  title: "ARR 멀티플 — SaaS M&A 밸류에이션의 핵심 언어 | Deal Story",
  description:
    "ARR(연간반복매출) 멀티플은 SaaS 기업 M&A의 가장 순수한 밸류에이션 도구다. NRR·Rule of 40·CAC Payback 5가지 결정 요인, 버블과 조정 사이클, Salesforce×MuleSoft·SAP×Qualtrics 케이스까지.",
  alternates: {
    canonical: "/deal-101/arr-multiple",
    languages: {
      ko: "/deal-101/arr-multiple",
      en: "/en/deal-101/arr-multiple",
      "x-default": "/deal-101/arr-multiple",
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
  return <ArrMultipleClient />;
}
