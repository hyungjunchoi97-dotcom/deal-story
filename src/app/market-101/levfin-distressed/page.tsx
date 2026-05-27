import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinDistressedClient from "./LevFinDistressedClient";

export const metadata: Metadata = {
  title: "LevFin Ch.6 — 부실채권 & 구조조정: LBO가 무너질 때 무슨 일이 벌어지나 | Market 101 | Deal Story",
  description:
    "LBO 부실 완전 가이드: 8단계 부실 신호(PIK→리볼버→CCC→Ch.11), Amend & Extend·Chapter 11·Prepackaged 구조조정 옵션, Serta Simmons·Envision Healthcare·TriMark 업타이어 3사례, DIP 파이낸싱, 회수율(1st Lien 70-80%→Equity 0%), 한국 법정관리 vs 워크아웃.",
  alternates: {
    canonical: "/market-101/levfin-distressed",
    languages: {
      ko: "/market-101/levfin-distressed",
      en: "/en/market-101/levfin-distressed",
      "x-default": "/market-101/levfin-distressed",
    },
  },
};

export default function LevFinDistressedPage() {
  const concept = getMarket101ConceptBySlug("levfin-distressed");
  if (!concept) notFound();
  return <LevFinDistressedClient concept={concept} lang="ko" />;
}
