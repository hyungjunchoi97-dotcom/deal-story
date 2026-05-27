import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmExchangeableBondClient from "./EcmExchangeableBondClient";

export const metadata: Metadata = {
  title: "EB(교환사채) 완전 해설 — SoftBank Alibaba EB 구조 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/ecm-exchangeable-bond",
    languages: { ko: "/market-101/ecm-exchangeable-bond", en: "/en/market-101/ecm-exchangeable-bond", "x-default": "/market-101/ecm-exchangeable-bond" },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("ecm-exchangeable-bond");
  if (!concept) notFound();
  return <EcmExchangeableBondClient concept={concept} lang="ko" />;
}
