import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmExchangeableBondClient from "@/app/market-101/ecm-exchangeable-bond/EcmExchangeableBondClient";

export const metadata: Metadata = {
  title: "Exchangeable Bond (EB) Complete Guide — SoftBank Alibaba EB | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/ecm-exchangeable-bond",
    languages: { ko: "/market-101/ecm-exchangeable-bond", en: "/en/market-101/ecm-exchangeable-bond", "x-default": "/market-101/ecm-exchangeable-bond" },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("ecm-exchangeable-bond");
  if (!concept) notFound();
  return <EcmExchangeableBondClient concept={concept} lang="en" />;
}
