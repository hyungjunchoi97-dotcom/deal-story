import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import YenCarryClient from "./YenCarryClient";

export const metadata: Metadata = {
  title: "엔 캐리 트레이드 붕괴 — 2024년 8월 5일 | Market 101 | Deal Story",
  description:
    "BOJ 금리 0.15%포인트 인상 하나로 코스피 -8.77%, 닛케이 -12.4%, 나스닥 -6%가 폭락한 2024년 8월 5일. 엔 캐리 트레이드의 구조, 언와인딩 메커니즘, 글로벌 자산시장 파급 효과를 실전 데이터로 해부합니다.",
  alternates: {
    canonical: "/market-101/macro-yen-carry",
    languages: {
      ko: "/market-101/macro-yen-carry",
      en: "/en/market-101/macro-yen-carry",
      "x-default": "/market-101/macro-yen-carry",
    },
  },
};

export default function YenCarryPage() {
  const concept = getMarket101ConceptBySlug("macro-yen-carry");
  if (!concept) notFound();
  return <YenCarryClient concept={concept} lang="ko" />;
}
