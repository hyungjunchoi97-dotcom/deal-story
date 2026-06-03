import type { Metadata } from "next";
import MaVc07Client from "./MaVc07Client";

export const metadata: Metadata = {
  title: "VC Ch.7 — Legal Docs (RCPS·CB·BW) + Closing: 한국 특이 구조 | Deal Story",
  description: "한국 표준 RCPS (상환전환우선주) 6 권리 · CB (전환사채) · BW (신주인수권부사채) · 신주인수계약 (SPA) · 주주간계약 (SHA) · 김앤장·세종·태평양·광장·율촌 vs Cooley·Wilson Sonsini · 변호사 fee ₩30-80M · Closing checklist 50+ items 4 phases.",
  keywords: ["RCPS", "상환전환우선주", "전환사채", "신주인수권부사채", "주주간계약", "Kim&Chang", "Cooley", "Wilson Sonsini"],
  alternates: { canonical: "/deal-101/vc-ch07-legal-docs-closing", languages: { ko: "/deal-101/vc-ch07-legal-docs-closing", en: "/en/deal-101/vc-ch07-legal-docs-closing", "x-default": "/deal-101/vc-ch07-legal-docs-closing" } },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "VC Ch.7 — Legal Docs + Closing (한국 RCPS)", description: "RCPS deep dive · 6 문서 · Big 5 law firms · Closing checklist", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaVc07Client lang="ko" />; }
