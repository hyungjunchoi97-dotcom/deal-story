import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboCapitalStructureClient from "@/app/market-101/lbo-capital-structure/LboCapitalStructureClient";

export const metadata: Metadata = {
  title: "LBO Capital Stack Deep Dive — Debt Tranches & Creditor Hierarchy | Market 101 | Deal Story",
  description:
    "Full decomposition of the LBO debt pyramid: Term Loan A vs. B comparison, HY bonds, PIK Toggle compounding mechanics, Covenant-Lite anatomy, DSCR calculation, and Blackstone·Hilton 2007 real capital structure analysis.",
  keywords: [
    "LBO capital structure", "Term Loan B", "TLB", "high yield bond", "PIK Toggle",
    "covenant-lite", "DSCR", "mezzanine", "leveraged loan", "CLO", "Hilton LBO",
  ],
  openGraph: {
    title: "LBO Capital Stack Deep Dive — Debt Tranches & Creditor Hierarchy | Deal Story",
    description: "TLA/TLB, HY bonds, PIK, Cov-Lite, DSCR — the complete LBO capital structure guide.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market-101/lbo-capital-structure",
    languages: {
      ko: "/market-101/lbo-capital-structure",
      en: "/en/market-101/lbo-capital-structure",
      "x-default": "/market-101/lbo-capital-structure",
    },
  },
};

export default function LboCapitalStructurePageEn() {
  const concept = getMarket101ConceptBySlug("lbo-capital-structure");
  if (!concept) notFound();
  return <LboCapitalStructureClient concept={concept} lang="en" />;
}
