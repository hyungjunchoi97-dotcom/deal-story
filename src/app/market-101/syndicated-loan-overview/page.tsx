import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import SyndicatedLoanOverviewClient from "./SyndicatedLoanOverviewClient";

export const metadata: Metadata = {
  title: "신디케이티드론 Ch.0 — 왜 은행들은 뭉치는가: 신디케이션 구조·MLA·주선은행 완전해설 | Market 101 | Deal Story",
  description:
    "신디케이티드론 완전 해설: 은행 단독 대출의 한계(BIS 규제·RWA·집중리스크), 신디케이션 메커니즘, IG론 vs 레버리지드론 비교, MLA·에이전트은행·투자자 역할, 언더라이트 vs 베스트에포트 방식, ARM 성공·Toys'R'Us 실패 케이스 비교.",
  alternates: {
    canonical: "/market-101/syndicated-loan-overview",
    languages: {
      ko: "/market-101/syndicated-loan-overview",
      en: "/en/market-101/syndicated-loan-overview",
      "x-default": "/market-101/syndicated-loan-overview",
    },
  },
};

export default function SyndicatedLoanOverviewPage() {
  const concept = getMarket101ConceptBySlug("syndicated-loan-overview");
  if (!concept) notFound();
  return <SyndicatedLoanOverviewClient concept={concept} lang="ko" />;
}
