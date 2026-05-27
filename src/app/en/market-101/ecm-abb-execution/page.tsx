import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmAbbExecutionClient from "@/app/market-101/ecm-abb-execution/EcmAbbExecutionClient";

export const metadata: Metadata = {
  title: "ABB Execution Manual — 12 Hours After Market Close | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/ecm-abb-execution",
    languages: { ko: "/market-101/ecm-abb-execution", en: "/en/market-101/ecm-abb-execution", "x-default": "/market-101/ecm-abb-execution" },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("ecm-abb-execution");
  if (!concept) notFound();
  return <EcmAbbExecutionClient concept={concept} lang="en" />;
}
