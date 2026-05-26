import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmStructureRegulationClient from "./DcmStructureRegulationClient";

export const metadata: Metadata = {
  title: "DCM Ch.7 — 구조와 제도: 차이니즈 월·MNPI·신디케이트·문서화 | Market 101 | Deal Story",
  description:
    "DCM 운영의 제도적 인프라: 차이니즈 월·MNPI 규제·신디케이트 구조·프로스펙터스 문서화. 뱅커가 왜 특정 행동을 금지당하고, 어떤 법적 틀 안에서 딜을 실행하는지 정리합니다.",
  alternates: {
    canonical: "/market-101/dcm-structure-regulation",
    languages: {
      ko: "/market-101/dcm-structure-regulation",
      en: "/en/market-101/dcm-structure-regulation",
      "x-default": "/market-101/dcm-structure-regulation",
    },
  },
};

export default function DcmStructureRegulationPage() {
  const concept = getMarket101ConceptBySlug("dcm-structure-regulation");
  if (!concept) notFound();
  return <DcmStructureRegulationClient concept={concept} lang="ko" />;
}
