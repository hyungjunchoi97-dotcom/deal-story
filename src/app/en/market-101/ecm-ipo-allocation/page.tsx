import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoAllocationClient from "@/app/market-101/ecm-ipo-allocation/EcmIpoAllocationClient";

export const metadata: Metadata = {
  title: "IPO Allocation Strategy — Cornerstone, Greenshoe & Clawback | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/ecm-ipo-allocation",
    languages: { ko: "/market-101/ecm-ipo-allocation", en: "/en/market-101/ecm-ipo-allocation", "x-default": "/market-101/ecm-ipo-allocation" },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-allocation");
  if (!concept) notFound();
  return <EcmIpoAllocationClient concept={concept} lang="en" />;
}
