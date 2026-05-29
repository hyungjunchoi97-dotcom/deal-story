import type { Metadata } from "next";
import DcfOverviewClient from "./DcfOverviewClient";

export const metadata: Metadata = {
  title: "Valuation 101 Ch.0 — DCF란 무엇인가 | Deal Story",
  description:
    "미래 현금흐름의 현재가치 — IB·PE 표준 평가법. FCF · WACC · Terminal Value 3대 요소, 절대가치 vs 상대가치, Microsoft·Activision $68.7B 사례.",
  keywords: [
    "DCF", "Discounted Cash Flow", "Valuation", "FCF", "WACC",
    "Terminal Value", "Microsoft Activision", "기업가치평가", "Intrinsic Value",
  ],
  alternates: {
    canonical: "/deal-101/dcf-overview",
    languages: {
      ko: "/deal-101/dcf-overview",
      en: "/en/deal-101/dcf-overview",
      "x-default": "/deal-101/dcf-overview",
    },
  },
};

export default function DcfOverviewPage() {
  return <DcfOverviewClient lang="ko" />;
}
