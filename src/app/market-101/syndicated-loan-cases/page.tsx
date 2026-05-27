import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import SyndicatedLoanCasesClient from "./SyndicatedLoanCasesClient";

export const metadata: Metadata = {
  title: "신디케이티드론 Ch.4 — 케이스스터디: ARM 성공 vs Toys'R'Us 파산 완전해부 | Market 101 | Deal Story",
  description:
    "ARM Holdings $10B 신디케이티드론(2023) 성공과 Toys'R'Us $5B 레버리지드론(2005) 파산 — 같은 구조, 정반대 결말. IM·코버넌트·투자자 배분·리파이낸싱 전략 사이드바이사이드 비교, Analyst가 놓쳤어야 했던 신호들, MD 관점 크레딧 위원회 질문 목록.",
  alternates: {
    canonical: "/market-101/syndicated-loan-cases",
    languages: {
      ko: "/market-101/syndicated-loan-cases",
      en: "/en/market-101/syndicated-loan-cases",
      "x-default": "/market-101/syndicated-loan-cases",
    },
  },
};

export default function SyndicatedLoanCasesPage() {
  const concept = getMarket101ConceptBySlug("syndicated-loan-cases");
  if (!concept) notFound();
  return <SyndicatedLoanCasesClient concept={concept} lang="ko" />;
}
