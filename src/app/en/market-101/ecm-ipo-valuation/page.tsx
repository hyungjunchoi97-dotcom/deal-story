import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoValuationClient from "@/app/market-101/ecm-ipo-valuation/EcmIpoValuationClient";

export const metadata: Metadata = {
  title: "ECM Ch.3 — Valuation: The Football Field and Five Methodologies | Market 101 | Deal Story",
  description:
    "IPO pricing is negotiation, not science. P/E, EV/EBITDA, EV/Revenue, DCF, and precedent transactions each produce different valuations. How Rivian got a $66B valuation with almost no revenue, Krafton's ₩53T→₩36T negotiation, and the Leave Money on the Table debate.",
  alternates: {
    canonical: "/en/market-101/ecm-ipo-valuation",
    languages: {
      ko: "/market-101/ecm-ipo-valuation",
      en: "/en/market-101/ecm-ipo-valuation",
      "x-default": "/market-101/ecm-ipo-valuation",
    },
  },
};

export default function EcmIpoValuationPageEn() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-valuation");
  if (!concept) notFound();
  return <EcmIpoValuationClient concept={concept} lang="en" />;
}
