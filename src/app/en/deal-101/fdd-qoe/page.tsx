/**
 * Deal 101 / FDD 101 Ch.4 — Quality of Earnings (EN) — Server Component
 */
import type { Metadata } from "next";
import FddQoeClient from "@/app/deal-101/fdd-qoe/FddQoeClient";

export const metadata: Metadata = {
  title: "Quality of Earnings — EBITDA Is Not Found. It Is Adjusted. | FDD 101 Ch.4 | Deal Story",
  description:
    "Inside the Big 4 Transaction Services QoE report. EBITDA Bridge chart, seven adjustment categories, ASC 606 vs IFRS 15 vs K-IFRS 1115 comparison, IFRS 16 / ASC 842 lease impact. Dual case studies: Vista×Citrix ($16.5B), Hahn×Lutronic ($735.9M), Samsung×Harman ($8B).",
  keywords: [
    "Quality of Earnings", "QoE", "FDD", "Financial Due Diligence",
    "EBITDA Bridge", "Adjusted EBITDA", "Big 4", "PwC EY KPMG Deloitte",
    "Vista Citrix take-private", "Hahn Lutronic", "Samsung Harman",
    "ASC 606", "IFRS 15", "K-IFRS 1115", "IFRS 16", "ASC 842", "EBITDAaL",
    "take-private QoE", "LBO QoE", "cross-border M&A diligence",
  ],
  alternates: {
    canonical: "/en/deal-101/fdd-qoe",
    languages: {
      ko: "/deal-101/fdd-qoe",
      en: "/en/deal-101/fdd-qoe",
      "x-default": "/deal-101/fdd-qoe",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    title: "Quality of Earnings — EBITDA Is Not Found. It Is Adjusted.",
    description:
      "The single number Big 4 Transaction Services teams spend 4–8 weeks producing — Adjusted EBITDA. EBITDA Bridge, 7 adjustment categories, standards comparison, US·KO·Cross-border cases.",
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "Quality of Earnings — FDD 101 Ch.4 | Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function FddQoePageEn() {
  return <FddQoeClient lang="en" />;
}
