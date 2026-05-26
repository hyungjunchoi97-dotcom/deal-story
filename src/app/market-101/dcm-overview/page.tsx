import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmOverviewClient from "./DcmOverviewClient";

export const metadata: Metadata = {
  title: "DCM 개요 — 부채자본시장 입문 | Market 101 | Deal Story",
  description:
    "DCM(부채자본시장) 완전 입문: IG에서 Distressed까지 크레딧 스펙트럼 전체, LevFin·LBO 구조, 투자자 생태계, 딜 프로세스를 실전 케이스와 함께 단계별로 해부합니다.",
  alternates: {
    canonical: "/market-101/dcm-overview",
    languages: {
      ko: "/market-101/dcm-overview",
      en: "/en/market-101/dcm-overview",
      "x-default": "/market-101/dcm-overview",
    },
  },
};

export default function DcmOverviewPage() {
  const concept = getMarket101ConceptBySlug("dcm-overview");
  if (!concept) notFound();
  return <DcmOverviewClient concept={concept} lang="ko" />;
}
