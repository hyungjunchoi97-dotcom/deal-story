import type { Metadata } from "next";
import TradingCompsClient from "@/app/deal-101/trading-comps/TradingCompsClient";

export const metadata: Metadata = {
  title: "Valuation 101 Ch.1 — Trading Comps | Deal Story",
  description:
    "Pricing off public peer multiples — peer universe selection, sector-specific multiples, NTM vs LTM, operating-lease adjustments, Activision peer set case.",
  keywords: [
    "Trading Comps", "Comparable Companies", "Peer Multiples", "EV/EBITDA",
    "NTM Multiple", "TEV", "Operating Lease", "Valuation", "Football Field",
  ],
  alternates: {
    canonical: "/en/deal-101/trading-comps",
    languages: {
      ko: "/deal-101/trading-comps",
      en: "/en/deal-101/trading-comps",
      "x-default": "/deal-101/trading-comps",
    },
  },
};

export default function TradingCompsPageEn() {
  return <TradingCompsClient lang="en" />;
}
