import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import SyndicatedLoanProcessClient from "./SyndicatedLoanProcessClient";

export const metadata: Metadata = {
  title: "신디케이티드론 Ch.2 — 딜 프로세스 실무: 피치→클로징 8단계 완전해설 | Market 101 | Deal Story",
  description:
    "신디케이티드론 딜 프로세스 전체: 뷰티콘테스트→mandate→IM 작성→렌더 미팅→북빌드→배분→서명→클로징. Market Flex 조항, 3× 북빌드 커버리지의 의미, Analyst가 IM 8개 섹션을 실제로 어떻게 쓰는지 도제식 가이드.",
  alternates: {
    canonical: "/market-101/syndicated-loan-process",
    languages: {
      ko: "/market-101/syndicated-loan-process",
      en: "/en/market-101/syndicated-loan-process",
      "x-default": "/market-101/syndicated-loan-process",
    },
  },
};

export default function SyndicatedLoanProcessPage() {
  const concept = getMarket101ConceptBySlug("syndicated-loan-process");
  if (!concept) notFound();
  return <SyndicatedLoanProcessClient concept={concept} lang="ko" />;
}
