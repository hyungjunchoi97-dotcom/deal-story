import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmOverviewClient from "./EcmOverviewClient";

export const metadata: Metadata = {
  title: "ECM 개요 — 주식자본시장 완전 입문 | Market 101 | Deal Story",
  description:
    "IPO는 회사의 데뷔 무대가 아닌 소유권·지배구조·자금조달 방식이 영구적으로 바뀌는 사건. 글로벌 ECM $9조+, IPO·팔로우온·전환사채 3대 축, 발행사·투자자·ECM 뱅커 삼각구조, WeWork 철회부터 Ant Group 48시간 전 취소까지 — ECM 전체 지도.",
  alternates: {
    canonical: "/market-101/ecm-overview",
    languages: {
      ko: "/market-101/ecm-overview",
      en: "/en/market-101/ecm-overview",
      "x-default": "/market-101/ecm-overview",
    },
  },
};

export default function EcmOverviewPage() {
  const concept = getMarket101ConceptBySlug("ecm-overview");
  if (!concept) notFound();
  return <EcmOverviewClient concept={concept} lang="ko" />;
}
