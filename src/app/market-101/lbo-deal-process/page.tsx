import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboDealProcessClient from "./LboDealProcessClient";

export const metadata: Metadata = {
  title: "LBO 딜 프로세스 & 리스크 — TXU·Toys\"R\"Us·Caesars 실패 해부 | Market 101 | Deal Story",
  description:
    "LBO 딜 타임라인 완전 해설(Origination→Closing), Sources & Uses 테이블, 만기장벽(Maturity Wall), SOFR 금리 충격, TXU($45B)·Toys\"R\"Us($6.6B)·Caesars($30B) 실패 심층 분석. PE 리스크 관리의 실전 프레임워크.",
  keywords: [
    "LBO 프로세스", "Sources Uses", "Maturity Wall", "TXU 파산", "Toys R Us 파산",
    "Caesars 파산", "레버드론 리스크", "SOFR", "LBO Due Diligence", "PE 리스크",
  ],
  alternates: {
    canonical: "/market-101/lbo-deal-process",
    languages: {
      ko: "/market-101/lbo-deal-process",
      en: "/en/market-101/lbo-deal-process",
      "x-default": "/market-101/lbo-deal-process",
    },
  },
};

export default function LboDealProcessPage() {
  const concept = getMarket101ConceptBySlug("lbo-deal-process");
  if (!concept) notFound();
  return <LboDealProcessClient concept={concept} lang="ko" />;
}
