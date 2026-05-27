import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmFollowonClient from "./EcmFollowonClient";

export const metadata: Metadata = {
  title: "ECM Ch.7 — 팔로우온: ABB·블록 트레이드·유상증자 | Market 101 | Deal Story",
  description:
    "상장 이후 자본 조달: ABB(하룻밤·3–5% 할인)·블록 트레이드(수시간·2–3%)·유상증자(3–6주·30–40%)·ATM(상시) — 속도-가격-희석 트레이드오프. PE 엑싯 패턴, 삼성물산 블록 트레이드, 글로벌 팔로우온 시장 구조.",
  alternates: {
    canonical: "/market-101/ecm-followon",
    languages: {
      ko: "/market-101/ecm-followon",
      en: "/en/market-101/ecm-followon",
      "x-default": "/market-101/ecm-followon",
    },
  },
};

export default function EcmFollowonPage() {
  const concept = getMarket101ConceptBySlug("ecm-followon");
  if (!concept) notFound();
  return <EcmFollowonClient concept={concept} lang="ko" />;
}
