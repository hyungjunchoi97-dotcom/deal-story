import type { Metadata } from "next";
import MaFundOps03Client from "./MaFundOps03Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.3 — NAV · Valuation · 분기보고: 사고가 가장 많이 나는 영역 | Deal Story",
  description:
    "NAV 계산 5단계 (Cash → Portfolio FV → Liability → Carry → LP 배분) · ASC 820 Level 1/2/3 (PE는 Level 3가 70-80%) · Valuation 5 methods (DCF/Comps/Transaction/OPM/PWERM) · ILPA Reporting Template 2.0 · Abraaj $14B · GPB $1.8B · Madoff $65B 사고 분석.",
  keywords: ["Fund Ops", "NAV", "Valuation", "ASC 820", "Fair Value", "ILPA", "Abraaj", "GPB Capital", "Madoff", "PWERM"],
  alternates: {
    canonical: "/deal-101/fund-ops-ch03-nav-valuation",
    languages: { ko: "/deal-101/fund-ops-ch03-nav-valuation", en: "/en/deal-101/fund-ops-ch03-nav-valuation", "x-default": "/deal-101/fund-ops-ch03-nav-valuation" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "Fund Ops Ch.3 — NAV · Valuation · 분기보고", description: "NAV 5단계 · ASC 820 · Val 5 methods · ILPA 2.0 · Abraaj·GPB·Madoff 사고 분석", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaFundOps03Client lang="ko" />; }
