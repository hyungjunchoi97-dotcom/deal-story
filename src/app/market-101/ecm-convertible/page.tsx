import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmConvertibleClient from "./EcmConvertibleClient";

export const metadata: Metadata = {
  title: "ECM Ch.8 — 전환사채: 채권인가 주식인가 | Market 101 | Deal Story",
  description:
    "전환사채는 채권의 안전벨트에 주식의 가속기를 단 차다. 주가 상승 시 주식처럼, 하락 시 채권처럼. 전환가격·전환프리미엄·페이오프 다이어그램·델타 헤징. 성장 기업이 낮은 쿠폰에 이 구조를 선택하는 이유.",
  alternates: {
    canonical: "/market-101/ecm-convertible",
    languages: {
      ko: "/market-101/ecm-convertible",
      en: "/en/market-101/ecm-convertible",
      "x-default": "/market-101/ecm-convertible",
    },
  },
};

export default function EcmConvertiblePage() {
  const concept = getMarket101ConceptBySlug("ecm-convertible");
  if (!concept) notFound();
  return <EcmConvertibleClient concept={concept} lang="ko" />;
}
