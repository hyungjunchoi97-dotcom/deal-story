import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinHyVsLoansClient from "./LevFinHyVsLoansClient";

export const metadata: Metadata = {
  title: "LevFin Ch.1 — HY채권 vs 레버리지드 론: 구조·투자자·선택 기준 완전 해설 | Market 101 | Deal Story",
  description:
    "하이일드 채권과 레버리지드 론(TLB) 10가지 핵심 차이: 고정 vs 변동금리, 담보 순위, Cov-Lite, 조기상환 Call Schedule, OID, 투자자 베이스(CLO 65%), Dollar General KKR LBO($6.9bn) 케이스스터디, 한국 LevFin 구조 분석.",
  alternates: {
    canonical: "/market-101/levfin-hy-vs-loans",
    languages: {
      ko: "/market-101/levfin-hy-vs-loans",
      en: "/en/market-101/levfin-hy-vs-loans",
      "x-default": "/market-101/levfin-hy-vs-loans",
    },
  },
};

export default function LevFinHyVsLoansPage() {
  const concept = getMarket101ConceptBySlug("levfin-hy-vs-loans");
  if (!concept) notFound();
  return <LevFinHyVsLoansClient concept={concept} lang="ko" />;
}
