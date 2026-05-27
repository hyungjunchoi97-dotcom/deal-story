import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import SyndicatedLoanDocsClient from "@/app/market-101/syndicated-loan-docs/SyndicatedLoanDocsClient";

export const metadata: Metadata = {
  title: "Syndicated Loans Ch.3 — Documentation & Covenants: Credit Agreement, SOFR & Cov-Lite | Market 101 | Deal Story",
  description:
    "Map of the 15-clause Credit Agreement, the practical meaning of LIBOR→SOFR transition (Term SOFR, CSA), how to calculate financial covenants (leverage, coverage, FCCR), how Cov-Lite eliminates the early warning system, and the amendment & waiver voting mechanism.",
  alternates: {
    canonical: "/en/market-101/syndicated-loan-docs",
    languages: {
      ko: "/market-101/syndicated-loan-docs",
      en: "/en/market-101/syndicated-loan-docs",
      "x-default": "/market-101/syndicated-loan-docs",
    },
  },
};

export default function SyndicatedLoanDocsPageEn() {
  const concept = getMarket101ConceptBySlug("syndicated-loan-docs");
  if (!concept) notFound();
  return <SyndicatedLoanDocsClient concept={concept} lang="en" />;
}
