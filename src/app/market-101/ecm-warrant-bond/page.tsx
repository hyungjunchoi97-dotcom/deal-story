import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmWarrantBondClient from "./EcmWarrantBondClient";

export const metadata: Metadata = {
  title: "BW(신주인수권부사채) 완전 해설 — CB와 뭐가 다른가 | Market 101 | Deal Story",
  alternates: {
    canonical: "/market-101/ecm-warrant-bond",
    languages: { ko: "/market-101/ecm-warrant-bond", en: "/en/market-101/ecm-warrant-bond", "x-default": "/market-101/ecm-warrant-bond" },
  },
};

export default function Page() {
  const concept = getMarket101ConceptBySlug("ecm-warrant-bond");
  if (!concept) notFound();
  return <EcmWarrantBondClient concept={concept} lang="ko" />;
}
