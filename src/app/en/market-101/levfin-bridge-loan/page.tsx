import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import BridgeLoanClient from "@/app/market-101/levfin-bridge-loan/BridgeLoanClient";

export const metadata: Metadata = {
  title: "M&A Bridge Loan — How IBs Commit Tens of Billions the Night a Deal Is Announced | Market 101 | Deal Story",
  description:
    "The mechanics behind how investment banks guarantee financing the moment an M&A deal is announced. Commitment Letter, Hung Bridge, Step-up pricing, MFN clauses — the core of LevFin fully dissected.",
  alternates: {
    canonical: "/en/market-101/levfin-bridge-loan",
    languages: {
      ko: "/market-101/levfin-bridge-loan",
      en: "/en/market-101/levfin-bridge-loan",
      "x-default": "/market-101/levfin-bridge-loan",
    },
  },
};

export default function BridgeLoanPageEn() {
  const concept = getMarket101ConceptBySlug("levfin-bridge-loan");
  if (!concept) notFound();
  return <BridgeLoanClient concept={concept} lang="en" />;
}
