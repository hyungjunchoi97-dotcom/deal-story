import type { Metadata } from "next";
import MaFundOps06Client from "@/app/deal-101/fund-ops-ch06-disaster-cases/MaFundOps06Client";

export const metadata: Metadata = {
  title: "Fund Ops Ch.6 — Disaster cases: funds undone by ops failure, with six common patterns | Deal Story",
  description:
    "Deep dives on Archegos $10B+ (Credit Suisse $5.5B), Three Arrows $10B, LTCM $4.6B (NY Fed bailout), and MF Global $1.6B customer fund shortfall. Six common lessons tying them together, plus a nine-point post-mortem checklist for back-, middle-, and front-office controls.",
  keywords: ["Fund Ops", "Fund Failure", "Archegos", "3AC", "LTCM", "MF Global", "Madoff", "Compliance", "Risk Management"],
  alternates: {
    canonical: "/en/deal-101/fund-ops-ch06-disaster-cases",
    languages: { ko: "/deal-101/fund-ops-ch06-disaster-cases", en: "/en/deal-101/fund-ops-ch06-disaster-cases", "x-default": "/deal-101/fund-ops-ch06-disaster-cases" },
  },
  openGraph: { type: "article", siteName: "Deal Story", locale: "en_US", alternateLocale: ["ko_KR"], title: "Fund Ops Ch.6 — Disaster cases", description: "Archegos · 3AC · LTCM · MF Global · six common lessons · nine-point post-mortem checklist", images: [{ url: "/api/og?lang=en", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", images: ["/api/og?lang=en"] },
};

export default function Page() { return <MaFundOps06Client lang="en" />; }
