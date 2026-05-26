import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinPricingClient from "./LevFinPricingClient";

export const metadata: Metadata = {
  title: "LevFin Ch.5 — 프라이싱 심화: OID·PIK Toggle·Call Schedule·NIC·Cross-Currency HY | Market 101 | Deal Story",
  description:
    "LevFin 프라이싱 완전 가이드: IPT→Guidance→Final 5단계, NIC 시장별 5-150bp, OID 1pt=14~20bp 실질 비용, PIK Toggle 복리 함정(iHeartMedia), NC/2~NC/4 Call Schedule 최적화, USD vs EUR Cross-Currency HY, Rating Notching, 2022 금리 급등 Twitter Hung Deal.",
  alternates: {
    canonical: "/market-101/levfin-pricing",
    languages: {
      ko: "/market-101/levfin-pricing",
      en: "/en/market-101/levfin-pricing",
      "x-default": "/market-101/levfin-pricing",
    },
  },
};

export default function LevFinPricingPage() {
  const concept = getMarket101ConceptBySlug("levfin-pricing");
  if (!concept) notFound();
  return <LevFinPricingClient concept={concept} lang="ko" />;
}
