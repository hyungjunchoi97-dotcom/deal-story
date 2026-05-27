import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmSpacDirectClient from "./EcmSpacDirectClient";

export const metadata: Metadata = {
  title: "ECM Ch.10 — SPAC과 직상장: 전통 IPO를 대체하는 경로 | Market 101 | Deal Story",
  description:
    "전통 IPO(18개월·7% 수수료)·SPAC 합병(3–6개월·Due Diligence 없음)·직상장(자본 조달 없음) — 3가지 경로 속도·비용·리스크 비교. Nikola 사기·Grab -71%·Bird 상장폐지로 해부하는 2020–22 SPAC 거품. 에어비앤비 직상장 성공 이유. 2023년 이후 IPO 시장 정상화.",
  alternates: {
    canonical: "/market-101/ecm-spac-direct",
    languages: {
      ko: "/market-101/ecm-spac-direct",
      en: "/en/market-101/ecm-spac-direct",
      "x-default": "/market-101/ecm-spac-direct",
    },
  },
};

export default function EcmSpacDirectPage() {
  const concept = getMarket101ConceptBySlug("ecm-spac-direct");
  if (!concept) notFound();
  return <EcmSpacDirectClient concept={concept} lang="ko" />;
}
