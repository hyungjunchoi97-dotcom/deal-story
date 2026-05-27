import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmExecutionClient from "./DcmExecutionClient";

export const metadata: Metadata = {
  title: "DCM Ch.8 — 국제채 발행 실전: Arb 계산부터 북빌딩까지 | Market 101 | Deal Story",
  description:
    "외평채 뱅커의 실전 노트: EUR/JPY/TWD→USD Arb 계산, Bloomberg Comps→IPT 설정, 4시간 북빌딩 타임라인, 진짜 기관과 헤지펀드의 오더북 해부. Korea MOEF EUR 5yr 케이스 스터디.",
  alternates: {
    canonical: "/market-101/dcm-execution",
    languages: {
      ko: "/market-101/dcm-execution",
      en: "/en/market-101/dcm-execution",
      "x-default": "/market-101/dcm-execution",
    },
  },
};

export default function DcmExecutionPage() {
  const concept = getMarket101ConceptBySlug("dcm-execution");
  if (!concept) notFound();
  return <DcmExecutionClient concept={concept} lang="ko" />;
}
