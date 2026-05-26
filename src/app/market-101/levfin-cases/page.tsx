import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinCasesClient from "./LevFinCasesClient";

export const metadata: Metadata = {
  title: "LevFin Ch.7 — 케이스 종합: 역사를 바꾼 LBO 5개 완전 해부 | Market 101 | Deal Story",
  description:
    "LevFin 시리즈 대미: RJR Nabisco 1989($31.4bn)·Hilton 2007($26.9bn·IRR 21%)·Toys R Us 2005($6.6bn·아마존에 무너짐)·Caesars 2008($30.7bn·LME·$1.25bn 소송)·MBK/홈플러스 2015(₩7.2조) — 5개 케이스에서 뽑은 LevFin 6대 교훈.",
  alternates: {
    canonical: "/market-101/levfin-cases",
    languages: {
      ko: "/market-101/levfin-cases",
      en: "/en/market-101/levfin-cases",
      "x-default": "/market-101/levfin-cases",
    },
  },
};

export default function LevFinCasesPage() {
  const concept = getMarket101ConceptBySlug("levfin-cases");
  if (!concept) notFound();
  return <LevFinCasesClient concept={concept} lang="ko" />;
}
