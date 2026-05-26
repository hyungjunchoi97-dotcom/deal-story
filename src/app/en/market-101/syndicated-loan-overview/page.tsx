import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import SyndicatedLoanOverviewClient from "@/app/market-101/syndicated-loan-overview/SyndicatedLoanOverviewClient";

export const metadata: Metadata = {
  title: "Syndicated Loans Ch.0 — Why Banks Pool Together: Syndication Structure & MLA Explained | Market 101 | Deal Story",
  description:
    "Complete guide to syndicated loans: why banks can't lend alone (BIS capital rules, RWA, concentration risk), syndication mechanics, IG vs leveraged loan comparison, MLA/agent bank/investor roles, underwrite vs best-efforts, ARM success vs Toys'R'Us failure case study.",
  alternates: {
    canonical: "/en/market-101/syndicated-loan-overview",
    languages: {
      ko: "/market-101/syndicated-loan-overview",
      en: "/en/market-101/syndicated-loan-overview",
      "x-default": "/market-101/syndicated-loan-overview",
    },
  },
};

export default function SyndicatedLoanOverviewPageEn() {
  const concept = getMarket101ConceptBySlug("syndicated-loan-overview");
  if (!concept) notFound();
  return <SyndicatedLoanOverviewClient concept={concept} lang="en" />;
}
