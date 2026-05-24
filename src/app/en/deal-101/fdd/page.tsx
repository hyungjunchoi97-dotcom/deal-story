/**
 * Deal 101 / FDD Financial Due Diligence (EN) — Server Component
 */
import type { Metadata } from "next";
import FddClientEn from "./FddClientEn";

export const metadata: Metadata = {
  title: "FDD (Financial Due Diligence) — Verifying What the IM Won't Tell You | Deal 101 | Deal Story",
  description:
    "Quality of Earnings analysis, EBITDA normalization, working capital, and off-balance-sheet liabilities. Case studies: WeWork (inflated EBITDA), HP×Autonomy (FDD failure), Verizon×Yahoo (breach found in DD).",
  keywords: [
    "FDD", "financial due diligence", "quality of earnings", "QoE",
    "EBITDA normalization", "working capital", "off-balance-sheet",
  ],
  alternates: {
    canonical: "/en/deal-101/fdd",
    languages: {
      ko: "/deal-101/fdd",
      en: "/en/deal-101/fdd",
      "x-default": "/deal-101/fdd",
    },
  },
  openGraph: {
    type: "article",
    siteName: "Deal Story",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    images: [
      { url: "/api/og?lang=en", width: 1200, height: 630, alt: "FDD (Financial Due Diligence) — Deal Story" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og?lang=en"],
  },
};

export default function FddPageEn() {
  return <FddClientEn />;
}
