import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoInvestorsClient from "./EcmIpoInvestorsClient";

export const metadata: Metadata = {
  title: "ECM Ch.2 — 투자자: 앵커·QIB·리테일의 삼층 구조 | Market 101 | Deal Story",
  description:
    "상장 전 확약 앵커(Temasek·GIC·국민연금), 북빌딩 오더 QIB(자산운용사·헤지펀드), 공모 물량 30% 리테일 — 세 층위의 역할·락업·배분 전략. 오더 유형 4가지, High Quality Book 조건, NIC 협상.",
  alternates: {
    canonical: "/market-101/ecm-ipo-investors",
    languages: {
      ko: "/market-101/ecm-ipo-investors",
      en: "/en/market-101/ecm-ipo-investors",
      "x-default": "/market-101/ecm-ipo-investors",
    },
  },
};

export default function EcmIpoInvestorsPage() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-investors");
  if (!concept) notFound();
  return <EcmIpoInvestorsClient concept={concept} lang="ko" />;
}
