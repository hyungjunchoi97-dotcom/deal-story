import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmDealProcessClient from "./DcmDealProcessClient";

export const metadata: Metadata = {
  title: "DCM Ch.5 — 딜 프로세스: Mandate부터 클로징까지 | Market 101 | Deal Story",
  description:
    "DCM 딜의 전체 흐름: 발행사 선정(Mandate)·로드쇼·북빌딩·프라이싱·배분·결제까지. 뱅커·발행사·투자자가 각 단계에서 정확히 무엇을 하는지, 실전 타임라인과 함께 정리합니다.",
  alternates: {
    canonical: "/market-101/dcm-deal-process",
    languages: {
      ko: "/market-101/dcm-deal-process",
      en: "/en/market-101/dcm-deal-process",
      "x-default": "/market-101/dcm-deal-process",
    },
  },
};

export default function DcmDealProcessPage() {
  const concept = getMarket101ConceptBySlug("dcm-deal-process");
  if (!concept) notFound();
  return <DcmDealProcessClient concept={concept} lang="ko" />;
}
