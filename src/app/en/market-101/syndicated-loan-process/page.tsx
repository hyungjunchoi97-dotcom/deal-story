import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import SyndicatedLoanProcessClient from "@/app/market-101/syndicated-loan-process/SyndicatedLoanProcessClient";

export const metadata: Metadata = {
  title: "Syndicated Loans Ch.2 — Deal Process in Practice: Pitch to Closing in 8 Steps | Market 101 | Deal Story",
  description:
    "The complete syndicated loan deal process: beauty contest → mandate → IM writing → lender meetings → bookbuild → allocation → signing → closing. Market Flex mechanics, what 3× bookbuild coverage means, and an apprentice-style guide to writing every IM section.",
  alternates: {
    canonical: "/en/market-101/syndicated-loan-process",
    languages: {
      ko: "/market-101/syndicated-loan-process",
      en: "/en/market-101/syndicated-loan-process",
      "x-default": "/market-101/syndicated-loan-process",
    },
  },
};

export default function SyndicatedLoanProcessPageEn() {
  const concept = getMarket101ConceptBySlug("syndicated-loan-process");
  if (!concept) notFound();
  return <SyndicatedLoanProcessClient concept={concept} lang="en" />;
}
