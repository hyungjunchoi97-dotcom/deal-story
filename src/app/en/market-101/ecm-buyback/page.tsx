import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmBuybackClient from "@/app/market-101/ecm-buyback/EcmBuybackClient";

export const metadata: Metadata = {
  title: "Share Buyback Complete Guide — Apple, Samsung Cases | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/ecm-buyback",
    languages: { ko: "/market-101/ecm-buyback", en: "/en/market-101/ecm-buyback", "x-default": "/market-101/ecm-buyback" },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("ecm-buyback");
  if (!concept) notFound();
  return <EcmBuybackClient concept={concept} lang="en" />;
}
