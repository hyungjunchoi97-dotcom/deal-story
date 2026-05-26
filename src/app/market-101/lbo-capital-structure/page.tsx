import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboCapitalStructureClient from "./LboCapitalStructureClient";

export const metadata: Metadata = {
  title: "LBO 자본구조 완전 해부 — 부채 스택과 채권자 위계 | Market 101 | Deal Story",
  description:
    "LBO 부채 피라미드 완전 분해: Term Loan A·B 비교, HY채권, PIK Toggle 복리 메커니즘, Covenant-Lite 해부, DSCR 계산법, Blackstone·Hilton 2007 실제 자본구조 분석. PE 실무자 수준의 자본구조 완전 가이드.",
  keywords: [
    "LBO 자본구조", "Term Loan B", "TLB", "HY채권", "PIK Toggle",
    "Covenant-Lite", "DSCR", "메자닌", "레버드론", "CLO", "Hilton LBO",
  ],
  openGraph: {
    title: "LBO 자본구조 완전 해부 — 부채 스택과 채권자 위계 | Deal Story",
    description: "TLA/TLB, HY채권, PIK, Cov-Lite, DSCR — LBO 자본구조의 모든 것.",
    type: "article",
    locale: "ko_KR",
  },
  alternates: {
    canonical: "/market-101/lbo-capital-structure",
    languages: {
      ko: "/market-101/lbo-capital-structure",
      en: "/en/market-101/lbo-capital-structure",
      "x-default": "/market-101/lbo-capital-structure",
    },
  },
};

export default function LboCapitalStructurePage() {
  const concept = getMarket101ConceptBySlug("lbo-capital-structure");
  if (!concept) notFound();
  return <LboCapitalStructureClient concept={concept} lang="ko" />;
}
