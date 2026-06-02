import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import CoveredBondClient from "./CoveredBondClient";

export const metadata: Metadata = {
  title: "커버드본드 — 200년간 투자자 손실이 없었던 이중 보호 구조 | Market 101 | Deal Story",
  description:
    "스웨덴 주택담보대출이 어떻게 AAA 채권이 되는가. 커버드본드의 이중 청구권 구조, MBS와의 차이, Pfandbrief의 250년 역사, 유럽 $3.5조 시장을 해부합니다.",
  alternates: {
    canonical: "/market-101/dcm-covered-bond",
    languages: {
      ko: "/market-101/dcm-covered-bond",
      en: "/en/market-101/dcm-covered-bond",
      "x-default": "/market-101/dcm-covered-bond",
    },
  },
};

export default function CoveredBondPage() {
  const concept = getMarket101ConceptBySlug("dcm-covered-bond");
  if (!concept) notFound();
  return <CoveredBondClient concept={concept} lang="ko" />;
}
