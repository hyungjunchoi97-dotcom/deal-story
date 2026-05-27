import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmEcosystemClient from "./DcmEcosystemClient";

export const metadata: Metadata = {
  title: "DCM 생태계 전체 지도 — Market 101 | Deal Story",
  description:
    "글로벌 채권시장은 130조 달러 규모로 주식시장보다 크다. DCM의 플레이어·상품·시장 구조를 한 눈에 정리한 가이드.",
  alternates: {
    canonical: "/market-101/dcm-ecosystem",
    languages: {
      ko: "/market-101/dcm-ecosystem",
      en: "/en/market-101/dcm-ecosystem",
      "x-default": "/market-101/dcm-ecosystem",
    },
  },
};

export default function DcmEcosystemPage() {
  const concept = getMarket101ConceptBySlug("dcm-ecosystem");
  if (!concept) notFound();
  return <DcmEcosystemClient concept={concept} lang="ko" />;
}
