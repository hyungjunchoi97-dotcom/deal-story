import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import SyndicatedLoanCasesClient from "@/app/market-101/syndicated-loan-cases/SyndicatedLoanCasesClient";

export const metadata: Metadata = {
  title: "Syndicated Loans Ch.4 — Case Studies: ARM Win vs Toys'R'Us Bankruptcy | Market 101 | Deal Story",
  description:
    "ARM Holdings $10B syndicated loan (2023) success vs Toys'R'Us $5B leveraged loan (2005) bankruptcy — same structure, opposite outcomes. Side-by-side dissection of IM, covenants, investor allocation, and refinancing strategy, the signals Analysts should have flagged, and the MD's credit committee question list.",
  alternates: {
    canonical: "/en/market-101/syndicated-loan-cases",
    languages: {
      ko: "/market-101/syndicated-loan-cases",
      en: "/en/market-101/syndicated-loan-cases",
      "x-default": "/market-101/syndicated-loan-cases",
    },
  },
};

export default function SyndicatedLoanCasesPageEn() {
  const concept = getMarket101ConceptBySlug("syndicated-loan-cases");
  if (!concept) notFound();
  return <SyndicatedLoanCasesClient concept={concept} lang="en" />;
}
