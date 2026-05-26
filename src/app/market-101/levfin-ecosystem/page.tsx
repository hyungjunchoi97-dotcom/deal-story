import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinEcosystemClient from "./LevFinEcosystemClient";

export const metadata: Metadata = {
  title: "LevFin Ch.0 — 레버리지드 파이낸스 전체 지도: HY채권·레버리지드 론·LBO 생태계 | Market 101 | Deal Story",
  description:
    "레버리지드 파이낸스(LevFin) 완전 해설: 하이일드 채권·레버리지드 론·메자닌의 차이, 자본구조 워터폴, CLO 구조, 기본 디폴트율 사이클, 힐튼 LBO(2007-2018) 케이스스터디, 한국 PE 딜(MBK·KKR·칼라일) 포함.",
  alternates: {
    canonical: "/market-101/levfin-ecosystem",
    languages: {
      ko: "/market-101/levfin-ecosystem",
      en: "/en/market-101/levfin-ecosystem",
      "x-default": "/market-101/levfin-ecosystem",
    },
  },
};

export default function LevFinEcosystemPage() {
  const concept = getMarket101ConceptBySlug("levfin-ecosystem");
  if (!concept) notFound();
  return <LevFinEcosystemClient concept={concept} lang="ko" />;
}
