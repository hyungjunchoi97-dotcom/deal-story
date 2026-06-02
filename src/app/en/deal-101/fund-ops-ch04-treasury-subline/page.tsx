import type { Metadata } from "next";
import MaFundOps04Client from "@/app/deal-101/fund-ops-ch04-treasury-subline/MaFundOps04Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.4 — Treasury, sub-lines, recaps, refinancing: the cash machinery | Deal Story",
  description:
    "Daily 100% cash reconciliation · multi-bank treasury (the post-SVB standard) · sub-line vs NAV facility (Wells Fargo, SMBC, MUFG, 17Capital, Pemberton) · five-step dividend recap · COVID 2020 sub-line crunch and SVB 2023 collapse dissected · Q1 2026 NAV facility boom past $130B.",
  keywords: ["Fund Ops", "Treasury", "Sub-line", "Subscription Credit Facility", "NAV Facility", "Dividend Recap", "SVB", "COVID 2020", "Wells Fargo", "MUFG"],
  alternates: {
    canonical: "/en/deal-101/fund-ops-ch04-treasury-subline",
    languages: { ko: "/deal-101/fund-ops-ch04-treasury-subline", en: "/en/deal-101/fund-ops-ch04-treasury-subline", "x-default": "/deal-101/fund-ops-ch04-treasury-subline" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "Fund Ops Ch.4 — Treasury, sub-lines, recaps, refinancing", description: "Multi-bank treasury · sub-line vs NAV facility · five-step recap · COVID 2020 · SVB 2023 · 2026 NAV facility boom", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaFundOps04Client lang="en" />; }
