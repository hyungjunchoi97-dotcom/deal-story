import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoProcessClient from "./EcmIpoProcessClient";

export const metadata: Metadata = {
  title: "ECM Ch.4 — IPO 프로세스: S-1부터 첫날 거래까지 | Market 101 | Deal Story",
  description:
    "IPO 18개월 프로젝트 전 과정: Bake-off→실사·S-1→SEC Comment Letter→Quiet Period→글로벌 로드쇼 50–80회→프라이싱 나이트. Analyst·Associate·MD가 각 단계에서 실제로 무엇을 하는지. S-1 해부학: Risk Factors가 어떻게 투자자를 보호하고 발행사를 노출시키는가.",
  alternates: {
    canonical: "/market-101/ecm-ipo-process",
    languages: {
      ko: "/market-101/ecm-ipo-process",
      en: "/en/market-101/ecm-ipo-process",
      "x-default": "/market-101/ecm-ipo-process",
    },
  },
};

export default function EcmIpoProcessPage() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-process");
  if (!concept) notFound();
  return <EcmIpoProcessClient concept={concept} lang="ko" />;
}
