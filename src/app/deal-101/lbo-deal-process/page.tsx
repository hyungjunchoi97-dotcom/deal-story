import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboDealProcessClient from "./LboDealProcessClient";

export const metadata: Metadata = {
  title: "LBO Ch.3 — 딜 프로세스 & 리스크: Origination부터 Exit까지 | 딜 101 | Deal Story",
  description:
    "LBO 딜 타임라인 전체(3–6개월): Sources & Uses 테이블, 만기장벽(Maturity Wall), SOFR 금리 충격, TXU($45B)·Toys'R'Us($6.6B)·Caesars($30B) 실패 케이스, Alliance Boots 성공 사례 — LBO 리스크 관리의 실전 프레임워크.",
  keywords: [
    "LBO 프로세스", "Sources and Uses", "Maturity Wall", "TXU", "Toys R Us",
    "Caesars", "Alliance Boots", "레버리지 리스크", "SOFR", "딜 타임라인",
  ],
  alternates: {
    canonical: "/deal-101/lbo-deal-process",
    languages: {
      ko: "/deal-101/lbo-deal-process",
      en: "/en/deal-101/lbo-deal-process",
      "x-default": "/deal-101/lbo-deal-process",
    },
  },
};

export default function LboDealProcessPage() {
  const concept = getMarket101ConceptBySlug("lbo-deal-process");
  if (!concept) notFound();
  return <LboDealProcessClient concept={concept} lang="ko" />;
}
