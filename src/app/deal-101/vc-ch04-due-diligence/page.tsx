import type { Metadata } from "next";
import MaVc04Client from "./MaVc04Client";

export const metadata: Metadata = {
  title: "VC Ch.4 — Due Diligence: 6 Workstream과 4-6주 Timeline | Deal Story",
  description: "심사역 DD coordination: Customer DD 7-10 통화 · Tech DD ($5-15K CTO advisor) · Financial DD ($10-30K accountant) · Legal DD ($15-50K) · Reference · Market · 창업자 Data Room 8 folders · DD pass/fail signals 10가지.",
  keywords: ["VC Due Diligence", "Customer DD", "Tech DD", "Data Room", "Customer Reference"],
  alternates: { canonical: "/deal-101/vc-ch04-due-diligence", languages: { ko: "/deal-101/vc-ch04-due-diligence", en: "/en/deal-101/vc-ch04-due-diligence", "x-default": "/deal-101/vc-ch04-due-diligence" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "VC Ch.4 — Due Diligence", description: "6 workstream · 4-6주 timeline · Data room · Pass/fail signals", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaVc04Client lang="ko" />; }
