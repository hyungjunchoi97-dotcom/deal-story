import type { Metadata } from "next";
import MaFundOps05Client from "@/app/deal-101/fund-ops-ch05-fund-extension/MaFundOps05Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.5 — Fund extensions, continuation funds, GP-led secondaries | Deal Story",
  description:
    "Standard 10+1+1 fund lifecycle · four extension triggers and LPAC approval · five-step continuation fund mechanics · Q1 2026 secondary market $160B (top 8: Ardian, Lexington, HarbourVest, Coller, Blackstone Strategic Partners) · the $200B+ zombie-fund problem and a prevention checklist.",
  keywords: ["Fund Ops", "Continuation Fund", "GP-led Secondary", "Fund Extension", "Zombie Fund", "Ardian", "Lexington", "Coller", "HarbourVest"],
  alternates: {
    canonical: "/en/deal-101/fund-ops-ch05-fund-extension",
    languages: { ko: "/deal-101/fund-ops-ch05-fund-extension", en: "/en/deal-101/fund-ops-ch05-fund-extension", "x-default": "/deal-101/fund-ops-ch05-fund-extension" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "Fund Ops Ch.5 — Fund extensions, continuation funds, GP-led secondaries", description: "10+1+1 lifecycle · extension triggers · five-step continuation · top 8 secondary buyers · zombie problem", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaFundOps05Client lang="en" />; }
