import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmWarrantBondClient from "@/app/market-101/ecm-warrant-bond/EcmWarrantBondClient";

export const metadata: Metadata = {
  title: "Bond with Warrant (BW) Complete Guide — How It Differs from CB | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/ecm-warrant-bond",
    languages: { ko: "/market-101/ecm-warrant-bond", en: "/en/market-101/ecm-warrant-bond", "x-default": "/market-101/ecm-warrant-bond" },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("ecm-warrant-bond");
  if (!concept) notFound();
  return <EcmWarrantBondClient concept={concept} lang="en" />;
}
