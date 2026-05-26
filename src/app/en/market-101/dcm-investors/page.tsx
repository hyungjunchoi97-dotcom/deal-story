import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmInvestorsClient from "@/app/market-101/dcm-investors/DcmInvestorsClient";

export const metadata: Metadata = {
  title: "DCM Ch.2 — Investor Ecosystem: Why the Biggest Buyers Don't Chase Yield | Market 101 | Deal Story",
  description:
    "Central banks, insurers, pension funds, asset managers, and hedge funds — their mandates and behavior. Why the biggest bond buyers don't maximize yield, and how bankers read their demand.",
  alternates: {
    canonical: "/en/market-101/dcm-investors",
    languages: {
      ko: "/market-101/dcm-investors",
      en: "/en/market-101/dcm-investors",
      "x-default": "/market-101/dcm-investors",
    },
  },
};

export default function DcmInvestorsPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-investors");
  if (!concept) notFound();
  return <DcmInvestorsClient concept={concept} lang="en" />;
}
