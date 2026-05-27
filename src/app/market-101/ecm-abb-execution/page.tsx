import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmAbbExecutionClient from "./EcmAbbExecutionClient";

export const metadata: Metadata = {
  title: "ABB 실행 매뉴얼 — 장 마감 후 12시간 완전해설 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/ecm-abb-execution",
    languages: { ko: "/market-101/ecm-abb-execution", en: "/en/market-101/ecm-abb-execution", "x-default": "/market-101/ecm-abb-execution" },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("ecm-abb-execution");
  if (!concept) notFound();
  return <EcmAbbExecutionClient concept={concept} lang="ko" />;
}
