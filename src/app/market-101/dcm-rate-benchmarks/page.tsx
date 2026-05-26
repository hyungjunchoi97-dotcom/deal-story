import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmRateBenchmarksClient from "./DcmRateBenchmarksClient";

export const metadata: Metadata = {
  title: "DCM Special — 글로벌 금리 기준선: SOFR·LIBOR·Mid-Swap·통화스왑 완전 해부 | Market 101 | Deal Story",
  description:
    "왜 USD 채권은 T+180bp이고 EUR 채권은 MS+80bp인가? LIBOR 조작 스캔들과 SOFR 전환, Mid-Swap의 정체, Cross-Currency Swap으로 엔화 0.3%가 달러 3.2%가 되는 메커니즘을 처음부터 끝까지 해부합니다.",
  alternates: {
    canonical: "/market-101/dcm-rate-benchmarks",
    languages: {
      ko: "/market-101/dcm-rate-benchmarks",
      en: "/en/market-101/dcm-rate-benchmarks",
      "x-default": "/market-101/dcm-rate-benchmarks",
    },
  },
};

export default function DcmRateBenchmarksPage() {
  const concept = getMarket101ConceptBySlug("dcm-rate-benchmarks");
  if (!concept) notFound();
  return <DcmRateBenchmarksClient concept={concept} lang="ko" />;
}
