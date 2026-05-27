import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmDualClassClient from "@/app/market-101/ecm-dual-class/EcmDualClassClient";

export const metadata: Metadata = {
  title: "Dual Class Share Structure — Alphabet, Meta & Korea Exception | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/ecm-dual-class",
    languages: { ko: "/market-101/ecm-dual-class", en: "/en/market-101/ecm-dual-class", "x-default": "/market-101/ecm-dual-class" },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("ecm-dual-class");
  if (!concept) notFound();
  return <EcmDualClassClient concept={concept} lang="en" />;
}
