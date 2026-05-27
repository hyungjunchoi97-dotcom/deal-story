import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboCapitalStructureClient from "./LboCapitalStructureClient";

export const metadata: Metadata = {
  title: "LBO Ch.1 — 자본구조 완전 해부: 부채 스택과 채권자 위계 | 딜 101 | Deal Story",
  description:
    "LBO 부채 피라미드 완전 분해: Term Loan A·B, Senior Secured·Unsecured, Mezz, PIK Toggle Note, Equity — 각 트랜치의 금리·담보·코버넌트·회수율. Covenant-Lite의 부상, DSCR 계산법, Hilton 2007 실제 자본구조 해부.",
  keywords: [
    "LBO", "Term Loan B", "TLB", "HY채권", "PIK Toggle", "Covenant-Lite",
    "DSCR", "자본구조", "채권자 위계", "Hilton LBO",
  ],
  alternates: {
    canonical: "/deal-101/lbo-capital-structure",
    languages: {
      ko: "/deal-101/lbo-capital-structure",
      en: "/en/deal-101/lbo-capital-structure",
      "x-default": "/deal-101/lbo-capital-structure",
    },
  },
};

export default function LboCapitalStructurePage() {
  const concept = getMarket101ConceptBySlug("lbo-capital-structure");
  if (!concept) notFound();
  return <LboCapitalStructureClient concept={concept} lang="ko" />;
}
