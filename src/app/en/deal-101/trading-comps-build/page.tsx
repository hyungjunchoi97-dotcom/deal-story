import type { Metadata } from "next";
import TradingCompsBuildClient from "@/app/deal-101/trading-comps-build/TradingCompsBuildClient";

export const metadata: Metadata = {
  title: "Modelling 101 Ch.2 — Trading Comps Build (CIQ) | Deal Story",
  description:
    "Capital IQ six-filter screening, 4-sheet Excel workbook, TEV auto-calc, NTM multiple pull pattern — practitioner Trading Comps build workflow.",
  keywords: [
    "Capital IQ", "Trading Comps", "Excel Workbook", "TEV Calculation",
    "NTM Multiple", "CIQ Function", "Peer Screening", "Modelling",
  ],
  alternates: {
    canonical: "/en/deal-101/trading-comps-build",
    languages: {
      ko: "/deal-101/trading-comps-build",
      en: "/en/deal-101/trading-comps-build",
      "x-default": "/deal-101/trading-comps-build",
    },
  },
};

export default function TradingCompsBuildPageEn() {
  return <TradingCompsBuildClient lang="en" />;
}
