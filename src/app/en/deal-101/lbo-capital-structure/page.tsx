import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboCapitalStructureClient from "@/app/deal-101/lbo-capital-structure/LboCapitalStructureClient";

export const metadata: Metadata = {
  title: "LBO Ch.1 — Capital Stack Deep Dive: Debt Tranches & Creditor Hierarchy | Deal 101 | Deal Story",
  description:
    "Full decomposition of the LBO debt pyramid: Term Loan A/B, Senior Secured/Unsecured, Mezz, PIK Toggle Notes, Equity — rate, collateral, covenants, and recovery for each tranche. The rise of covenant-lite, DSCR calculation, and the actual Hilton 2007 capital structure dissected.",
  keywords: [
    "LBO", "Term Loan B", "TLB", "HY Bond", "PIK Toggle", "Covenant-Lite",
    "DSCR", "Capital Stack", "Creditor Hierarchy", "Hilton LBO",
  ],
  alternates: {
    canonical: "/en/deal-101/lbo-capital-structure",
    languages: {
      ko: "/deal-101/lbo-capital-structure",
      en: "/en/deal-101/lbo-capital-structure",
      "x-default": "/deal-101/lbo-capital-structure",
    },
  },
};

export default function LboCapitalStructurePageEn() {
  const concept = getMarket101ConceptBySlug("lbo-capital-structure");
  if (!concept) notFound();
  return <LboCapitalStructureClient concept={concept} lang="en" />;
}
