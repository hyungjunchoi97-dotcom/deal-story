import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmBuybackClient from "./EcmBuybackClient";

export const metadata: Metadata = {
  title: "자사주매입 완전 해설 — Apple·삼성전자 케이스 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/ecm-buyback",
    languages: { ko: "/market-101/ecm-buyback", en: "/en/market-101/ecm-buyback", "x-default": "/market-101/ecm-buyback" },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("ecm-buyback");
  if (!concept) notFound();
  return <EcmBuybackClient concept={concept} lang="ko" />;
}
