import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmPricingClient from "./DcmPricingClient";

export const metadata: Metadata = {
  title: "DCM Ch.6 — 프라이싱: G/I/Z/OAS/ASW 스프레드와 NIC | Market 101 | Deal Story",
  description:
    "채권 프라이싱의 핵심 언어: G-spread·I-spread·Z-spread·OAS·ASW·NIC의 차이와 계산법. 뱅커가 IPT에서 최종 스프레드까지 가격을 조율하는 실전 메커니즘을 해부합니다.",
  alternates: {
    canonical: "/market-101/dcm-pricing",
    languages: {
      ko: "/market-101/dcm-pricing",
      en: "/en/market-101/dcm-pricing",
      "x-default": "/market-101/dcm-pricing",
    },
  },
};

export default function DcmPricingPage() {
  const concept = getMarket101ConceptBySlug("dcm-pricing");
  if (!concept) notFound();
  return <DcmPricingClient concept={concept} lang="ko" />;
}
