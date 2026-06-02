import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LegolandCrisisClient from "./LegolandCrisisClient";

export const metadata: Metadata = {
  title: "레고랜드 사태 — 지자체 한 곳이 채권시장을 마비시킨 방법 | Market 101 | Deal Story",
  description:
    "2022년 강원도 ABCP 2,050억원 보증 거부 하나로 한국 단기채권 시장 전체가 마비됐다. ABCP, PF대출, 신용보강, 채안펀드까지 한국 채권시장의 구조적 취약점을 해부합니다.",
  alternates: {
    canonical: "/market-101/korea-legoland-crisis",
    languages: {
      ko: "/market-101/korea-legoland-crisis",
      en: "/en/market-101/korea-legoland-crisis",
      "x-default": "/market-101/korea-legoland-crisis",
    },
  },
};

export default function LegolandCrisisPage() {
  const concept = getMarket101ConceptBySlug("korea-legoland-crisis");
  if (!concept) notFound();
  return <LegolandCrisisClient concept={concept} lang="ko" />;
}
