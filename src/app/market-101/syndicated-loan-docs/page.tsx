import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import SyndicatedLoanDocsClient from "./SyndicatedLoanDocsClient";

export const metadata: Metadata = {
  title: "신디케이티드론 Ch.3 — 문서와 코버넌트: Credit Agreement·SOFR·Cov-Lite 완전해설 | Market 101 | Deal Story",
  description:
    "Credit Agreement 15개 조항 지도, LIBOR→SOFR 전환의 실무 의미(Term SOFR·CSA), Financial Covenant(레버리지·커버리지·FCCR) 계산법, Cov-Lite가 은행의 조기경보를 어떻게 없애는지, Amendment & Waiver 투표 메커니즘.",
  alternates: {
    canonical: "/market-101/syndicated-loan-docs",
    languages: {
      ko: "/market-101/syndicated-loan-docs",
      en: "/en/market-101/syndicated-loan-docs",
      "x-default": "/market-101/syndicated-loan-docs",
    },
  },
};

export default function SyndicatedLoanDocsPage() {
  const concept = getMarket101ConceptBySlug("syndicated-loan-docs");
  if (!concept) notFound();
  return <SyndicatedLoanDocsClient concept={concept} lang="ko" />;
}
