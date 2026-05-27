import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import SyndicatedLoanPlayersClient from "@/app/market-101/syndicated-loan-players/SyndicatedLoanPlayersClient";

export const metadata: Metadata = {
  title: "Syndicated Loans Ch.1 — Players & Economics: MLA, Agent Bank & CLO Explained | Market 101 | Deal Story",
  description:
    "The four players in a syndicated loan (MLA, agent bank, participant banks, CLO) and how each gets paid. Arrangement fee, upfront fee, agency fee, and commitment fee waterfall. Bookrunner vs co-arranger, and the fee model an Analyst builds on night one.",
  alternates: {
    canonical: "/en/market-101/syndicated-loan-players",
    languages: {
      ko: "/market-101/syndicated-loan-players",
      en: "/en/market-101/syndicated-loan-players",
      "x-default": "/market-101/syndicated-loan-players",
    },
  },
};

export default function SyndicatedLoanPlayersPageEn() {
  const concept = getMarket101ConceptBySlug("syndicated-loan-players");
  if (!concept) notFound();
  return <SyndicatedLoanPlayersClient concept={concept} lang="en" />;
}
