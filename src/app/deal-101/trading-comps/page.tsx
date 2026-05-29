import type { Metadata } from "next";
import TradingCompsClient from "./TradingCompsClient";

export const metadata: Metadata = {
  title: "Valuation 101 Ch.1 — Trading Comps 상장사 비교 | Deal Story",
  description:
    "상장 peer 멀티플로 가치를 산정한다 — Peer Universe 선정, 산업별 멀티플, NTM vs LTM, Operating Lease 조정, Activision peer set 사례.",
  keywords: [
    "Trading Comps", "Comparable Companies", "Peer Multiples", "EV/EBITDA",
    "NTM Multiple", "TEV", "Operating Lease", "Valuation", "Football Field",
  ],
  alternates: {
    canonical: "/deal-101/trading-comps",
    languages: {
      ko: "/deal-101/trading-comps",
      en: "/en/deal-101/trading-comps",
      "x-default": "/deal-101/trading-comps",
    },
  },
};

export default function TradingCompsPage() {
  return <TradingCompsClient lang="ko" />;
}
