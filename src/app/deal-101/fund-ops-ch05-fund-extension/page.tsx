import type { Metadata } from "next";
import MaFundOps05Client from "./MaFundOps05Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.5 — Fund 만기 · Continuation Fund · GP-led Secondary | Deal Story",
  description:
    "Fund lifecycle 10+1+1 만기 구조 · 만기 연장 4 trigger + LPAC 승인 · Continuation Fund 5-step mechanics · Q1 2026 시장 $160B (Ardian·Lexington·HarbourVest·Coller·Blackstone Strategic Partners 등 Top 8) · Zombie fund $200B+ 문제 + 예방 체크리스트.",
  keywords: ["Fund Ops", "Continuation Fund", "GP-led Secondary", "Fund Extension", "Zombie Fund", "Ardian", "Lexington", "Coller", "HarbourVest"],
  alternates: {
    canonical: "/deal-101/fund-ops-ch05-fund-extension",
    languages: { ko: "/deal-101/fund-ops-ch05-fund-extension", en: "/en/deal-101/fund-ops-ch05-fund-extension", "x-default": "/deal-101/fund-ops-ch05-fund-extension" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "Fund Ops Ch.5 — Fund 만기 · Continuation Fund · GP-led Secondary", description: "10+1+1 lifecycle · 연장 trigger · Continuation Fund 5-step · Top 8 secondary buyers · Zombie 문제", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaFundOps05Client lang="ko" />; }
