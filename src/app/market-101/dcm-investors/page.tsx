import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmInvestorsClient from "./DcmInvestorsClient";

export const metadata: Metadata = {
  title: "DCM Ch.2 — 투자자 생태계: 왜 큰 손들은 수익률을 안 보나 | Market 101 | Deal Story",
  description:
    "중앙은행·보험사·연기금·자산운용사·헤지펀드까지 채권 투자자 유형별 mandate와 행동 원리. 왜 큰 손들이 수익률 극대화를 목표로 삼지 않는지, 뱅커가 어떻게 이들의 수요를 읽는지 해부합니다.",
  alternates: {
    canonical: "/market-101/dcm-investors",
    languages: {
      ko: "/market-101/dcm-investors",
      en: "/en/market-101/dcm-investors",
      "x-default": "/market-101/dcm-investors",
    },
  },
};

export default function DcmInvestorsPage() {
  const concept = getMarket101ConceptBySlug("dcm-investors");
  if (!concept) notFound();
  return <DcmInvestorsClient concept={concept} lang="ko" />;
}
