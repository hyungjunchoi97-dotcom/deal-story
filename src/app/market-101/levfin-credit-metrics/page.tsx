import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinCreditMetricsClient from "./LevFinCreditMetricsClient";

export const metadata: Metadata = {
  title: "LevFin Ch.2 — 크레딧 메트릭 & 언더라이팅: EBITDA Addback·Leverage·Coverage·FCF 심층 해부 | Market 101 | Deal Story",
  description:
    "LBO 크레딧 분석 완전 가이드: EBITDA Addback 3단계(Standard~Aggressive), 레버리지 메트릭(Total/First Lien/Net), FCCR 2.0× 인덴처 테스트, FCF 워터폴 8단계, S&P vs Moody's 방법론 비교, Atlas Industrial Corp 실전 워크드 예제 포함.",
  alternates: {
    canonical: "/market-101/levfin-credit-metrics",
    languages: {
      ko: "/market-101/levfin-credit-metrics",
      en: "/en/market-101/levfin-credit-metrics",
      "x-default": "/market-101/levfin-credit-metrics",
    },
  },
};

export default function LevFinCreditMetricsPage() {
  const concept = getMarket101ConceptBySlug("levfin-credit-metrics");
  if (!concept) notFound();
  return <LevFinCreditMetricsClient concept={concept} lang="ko" />;
}
