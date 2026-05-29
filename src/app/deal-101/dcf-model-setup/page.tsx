import type { Metadata } from "next";
import DcfModelSetupClient from "./DcfModelSetupClient";

export const metadata: Metadata = {
  title: "Modelling 101 Ch.1 — DCF 모델 셋업 | Deal Story",
  description:
    "실무진의 DCF 워크북 아키텍처 — 가정·P&L·FCF·WACC·Valuation 5-시트 구조, 셀 색상 컨벤션, 명명규칙, mid-year convention, 6가지 흔한 실수.",
  keywords: [
    "DCF 모델", "Excel 모델링", "워크북 셋업", "Cell Hygiene", "Named Ranges",
    "Mid-Year Convention", "IB Modelling", "PE Modelling", "Microsoft Activision",
  ],
  alternates: {
    canonical: "/deal-101/dcf-model-setup",
    languages: {
      ko: "/deal-101/dcf-model-setup",
      en: "/en/deal-101/dcf-model-setup",
      "x-default": "/deal-101/dcf-model-setup",
    },
  },
};

export default function DcfModelSetupPage() {
  return <DcfModelSetupClient lang="ko" />;
}
