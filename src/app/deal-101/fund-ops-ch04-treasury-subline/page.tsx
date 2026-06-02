import type { Metadata } from "next";
import MaFundOps04Client from "./MaFundOps04Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.4 — Treasury · Sub-line · Recap: Cash가 돌아가는 메커니즘 | Deal Story",
  description:
    "Daily cash position 100% reconcile · Multi-bank treasury (post-SVB 표준) · Sub-line vs NAV facility 비교 (Wells Fargo·SMBC·MUFG·17Capital·Pemberton) · Dividend recap 5단계 · COVID 2020 sub-line 위기 + SVB 2023 붕괴 dissection · Q1 2026 NAV facility $130B+ 폭증.",
  keywords: ["Fund Ops", "Treasury", "Sub-line", "Subscription Credit Facility", "NAV Facility", "Dividend Recap", "SVB", "COVID 2020", "Wells Fargo", "MUFG"],
  alternates: {
    canonical: "/deal-101/fund-ops-ch04-treasury-subline",
    languages: { ko: "/deal-101/fund-ops-ch04-treasury-subline", en: "/en/deal-101/fund-ops-ch04-treasury-subline", "x-default": "/deal-101/fund-ops-ch04-treasury-subline" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "ko_KR", alternateLocale: ["en_US"], title: "Fund Ops Ch.4 — Treasury · Sub-line · Recap", description: "Multi-bank treasury · Sub-line vs NAV facility · Recap 5단계 · COVID 2020 · SVB 2023 · 2026 NAV facility 폭증", images: [{ url: "/api/og", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og"] },
};

export default function Page() { return <MaFundOps04Client lang="ko" />; }
