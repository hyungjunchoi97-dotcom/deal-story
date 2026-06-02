import type { Metadata } from "next";
import MaFundOps06Client from "./MaFundOps06Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.6 — 사고 케이스 종합: Ops가 망한 펀드들 · 공통 패턴 6가지 | Deal Story",
  description:
    "🇰🇷 Lime ₩1.6조 · Optimus ₩5,500억 · Discovery ₩2,500억 deep dive + 🇺🇸 Archegos $10B (CS $5.5B) · 3AC $10B · LTCM $4.6B (NY Fed bailout) · MF Global $1.6B customer fund · 6가지 공통 교훈 + 9-point post-mortem 체크리스트.",
  keywords: ["Fund Ops", "Fund Failure", "Lime Asset", "Optimus", "Archegos", "3AC", "LTCM", "MF Global", "Madoff", "Compliance"],
  alternates: {
    canonical: "/deal-101/fund-ops-ch06-disaster-cases",
    languages: { ko: "/deal-101/fund-ops-ch06-disaster-cases", en: "/en/deal-101/fund-ops-ch06-disaster-cases", "x-default": "/deal-101/fund-ops-ch06-disaster-cases" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "Fund Ops Ch.6 — 사고 케이스 종합", description: "🇰🇷 Lime·Optimus·Discovery · 🇺🇸 Archegos·3AC·LTCM·MF Global · 6가지 공통 교훈 · 9-point 체크리스트", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaFundOps06Client lang="ko" />; }
