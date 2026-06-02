import type { Metadata } from "next";
import MaFundOps07Client from "./MaFundOps07Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.7 — AI · Tech Stack · The Future of Fund Ops (2026 forward) | Deal Story",
  description:
    "Fund Ops tech stack 6대 platform (eFront·Investran·Allvue·Carta·DealCloud·Backstop) · AI in Fund Ops 8가지 use case (LP chatbot·ESG 자동·NAV reconcile·DD doc analysis) · Cybersecurity 6-layer (zero-trust·MFA·DLP) · Tokenization 4 사례 (KKR·Hamilton Lane·Apollo·BlackRock BUIDL) · 2030 forecast 6가지.",
  keywords: ["Fund Ops", "AI", "Tokenization", "eFront", "Investran", "Allvue", "Carta", "DealCloud", "KKR Tokenized", "Cybersecurity", "Zero Trust"],
  alternates: {
    canonical: "/deal-101/fund-ops-ch07-ai-tech-future",
    languages: { ko: "/deal-101/fund-ops-ch07-ai-tech-future", en: "/en/deal-101/fund-ops-ch07-ai-tech-future", "x-default": "/deal-101/fund-ops-ch07-ai-tech-future" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "Fund Ops Ch.7 — AI · Tech Stack · The Future of Fund Ops", description: "6대 platform · AI 8 use cases · Cybersecurity 6-layer · Tokenization 4건 · 2030 forecast", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaFundOps07Client lang="ko" />; }
