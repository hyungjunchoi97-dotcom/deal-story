import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboDealProcessClient from "@/app/market-101/lbo-deal-process/LboDealProcessClient";

export const metadata: Metadata = {
  title: "LBO Deal Process & Risk — TXU, Toys\"R\"Us, Caesars Failure Analysis | Market 101 | Deal Story",
  description:
    "Complete LBO deal timeline (Origination to Closing), Sources & Uses table, maturity wall mechanics, SOFR rate shock impact, and deep dives into TXU ($45B), Toys\"R\"Us ($6.6B), and Caesars ($30B) failures. A practitioner's LBO risk framework.",
  keywords: [
    "LBO process", "sources uses", "maturity wall", "TXU bankruptcy", "Toys R Us bankruptcy",
    "Caesars bankruptcy", "leveraged loan risk", "SOFR impact", "LBO due diligence", "PE risk",
  ],
  alternates: {
    canonical: "/en/market-101/lbo-deal-process",
    languages: {
      ko: "/market-101/lbo-deal-process",
      en: "/en/market-101/lbo-deal-process",
      "x-default": "/market-101/lbo-deal-process",
    },
  },
};

export default function LboDealProcessPageEn() {
  const concept = getMarket101ConceptBySlug("lbo-deal-process");
  if (!concept) notFound();
  return <LboDealProcessClient concept={concept} lang="en" />;
}
