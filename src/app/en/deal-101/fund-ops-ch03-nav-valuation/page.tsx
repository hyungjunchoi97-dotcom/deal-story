import type { Metadata } from "next";
import MaFundOps03Client from "@/app/deal-101/fund-ops-ch03-nav-valuation/MaFundOps03Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.3 — NAV, valuation, quarterly reporting: where the fraud actually happens | Deal Story",
  description:
    "Five-step NAV process (cash → portfolio FV → liabilities → carry → LP allocation) · ASC 820 Level 1/2/3 (Level 3 is 70-80% of PE) · five valuation methods (DCF, comps, transaction, OPM, PWERM) · ILPA Reporting Template 2.0 · Abraaj $14B, GPB Capital $1.8B, and Madoff $65B breakdowns.",
  keywords: ["Fund Ops", "NAV", "Valuation", "ASC 820", "Fair Value", "ILPA", "Abraaj", "GPB Capital", "Madoff", "PWERM"],
  alternates: {
    canonical: "/en/deal-101/fund-ops-ch03-nav-valuation",
    languages: { ko: "/deal-101/fund-ops-ch03-nav-valuation", en: "/en/deal-101/fund-ops-ch03-nav-valuation", "x-default": "/deal-101/fund-ops-ch03-nav-valuation" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "Fund Ops Ch.3 — NAV, valuation, quarterly reporting", description: "Five-step NAV · ASC 820 · five valuation methods · ILPA 2.0 · Abraaj, GPB, Madoff", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaFundOps03Client lang="en" />; }
