import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboOverviewClient from "@/app/market-101/lbo-overview/LboOverviewClient";

export const metadata: Metadata = {
  title: "What Is LBO? — The Math of Buying Companies with Leverage | Market 101 | Deal Story",
  description:
    "Complete LBO primer: leverage return amplification mechanics, 7 criteria for ideal LBO targets, GP/LP economics and carry waterfall, Blackstone/Hilton and TXU case studies — the full anatomy of a PE buyout.",
  keywords: [
    "LBO", "leveraged buyout", "private equity", "PE buyout", "GP LP economics",
    "carried interest", "carry waterfall", "Blackstone Hilton", "TXU Energy Future",
    "IRR MOIC", "buyout fund", "LBO target criteria", "leverage returns",
  ],
  openGraph: {
    title: "What Is LBO? — The Math of Buying Companies with Leverage | Deal Story",
    description: "Leverage return amplification, 7 target criteria, GP/LP economics — the complete PE buyout primer.",
    type: "article",
    locale: "en_US",
  },
  alternates: {
    canonical: "/en/market-101/lbo-overview",
    languages: {
      ko: "/market-101/lbo-overview",
      en: "/en/market-101/lbo-overview",
      "x-default": "/market-101/lbo-overview",
    },
  },
};

export default function LboOverviewPageEn() {
  const concept = getMarket101ConceptBySlug("lbo-overview");
  if (!concept) notFound();
  return <LboOverviewClient concept={concept} lang="en" />;
}
