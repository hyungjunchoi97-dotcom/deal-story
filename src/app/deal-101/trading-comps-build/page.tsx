import type { Metadata } from "next";
import TradingCompsBuildClient from "./TradingCompsBuildClient";

export const metadata: Metadata = {
  title: "Modelling 101 Ch.2 — Trading Comps Build (CIQ) | Deal Story",
  description:
    "Capital IQ 6필터 스크리닝, 4시트 Excel 워크북, TEV 자동 계산, NTM 멀티플 pull — IB·PE 실무진의 Trading Comps build 워크플로우.",
  keywords: [
    "Capital IQ", "Trading Comps", "Excel Workbook", "TEV Calculation",
    "NTM Multiple", "CIQ Function", "Peer Screening", "Modelling",
  ],
  alternates: {
    canonical: "/deal-101/trading-comps-build",
    languages: {
      ko: "/deal-101/trading-comps-build",
      en: "/en/deal-101/trading-comps-build",
      "x-default": "/deal-101/trading-comps-build",
    },
  },
};

export default function TradingCompsBuildPage() {
  return <TradingCompsBuildClient lang="ko" />;
}
