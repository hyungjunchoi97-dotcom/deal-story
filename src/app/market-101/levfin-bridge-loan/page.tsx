import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import BridgeLoanClient from "./BridgeLoanClient";

export const metadata: Metadata = {
  title: "M&A 브리지론 — 딜 발표 당일 밤 IB가 수십조를 약정하는 방법 | Market 101 | Deal Story",
  description:
    "M&A 발표와 동시에 자금 조달을 확인해야 하는 IB의 브리지론 메커니즘. Commitment Letter, Hung Bridge, Step-up 금리, MFN 조항까지 LevFin의 핵심을 해부합니다.",
  alternates: {
    canonical: "/market-101/levfin-bridge-loan",
    languages: {
      ko: "/market-101/levfin-bridge-loan",
      en: "/en/market-101/levfin-bridge-loan",
      "x-default": "/market-101/levfin-bridge-loan",
    },
  },
};

export default function BridgeLoanPage() {
  const concept = getMarket101ConceptBySlug("levfin-bridge-loan");
  if (!concept) notFound();
  return <BridgeLoanClient concept={concept} lang="ko" />;
}
