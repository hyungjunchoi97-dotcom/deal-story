import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinCovenantsClient from "./LevFinCovenantsClient";

export const metadata: Metadata = {
  title: "LevFin Ch.3 — 코버넌트 구조: HY 인덴처·빌더 바스켓·J.Crew·Serta 완전 해부 | Market 101 | Deal Story",
  description:
    "HY 인덴처 & TLB 코버넌트 완전 가이드: FCCR 2.0× 부채 발행 테스트 + 카브아웃, 지불 제한 빌더 바스켓, 비제한 자회사 메커니즘, J.Crew(2017)·PetSmart(2018)·Serta Simmons(2020)·Envision(2020) 4대 루프홀 해부, blocker 조항 진화 과정.",
  alternates: {
    canonical: "/market-101/levfin-covenants",
    languages: {
      ko: "/market-101/levfin-covenants",
      en: "/en/market-101/levfin-covenants",
      "x-default": "/market-101/levfin-covenants",
    },
  },
};

export default function LevFinCovenantsPage() {
  const concept = getMarket101ConceptBySlug("levfin-covenants");
  if (!concept) notFound();
  return <LevFinCovenantsClient concept={concept} lang="ko" />;
}
