import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinPricingClient from "@/app/market-101/levfin-pricing/LevFinPricingClient";

export const metadata: Metadata = {
  title: "LevFin Ch.5 — Advanced Pricing: OID, PIK Toggle, Call Schedules, NIC & Cross-Currency HY | Market 101 | Deal Story",
  description:
    "Complete LevFin pricing guide: IPT→Guidance→Final 5-stage process, NIC 5-150bp by market condition, OID 1pt=14-20bp effective cost, PIK toggle compounding trap (iHeartMedia), NC/2-NC/4 call schedule optimization, USD vs EUR cross-currency HY, rating notching, 2022 rate shock Twitter hung deal.",
  alternates: {
    canonical: "/en/market-101/levfin-pricing",
    languages: {
      ko: "/market-101/levfin-pricing",
      en: "/en/market-101/levfin-pricing",
      "x-default": "/market-101/levfin-pricing",
    },
  },
};

export default function LevFinPricingPageEn() {
  const concept = getMarket101ConceptBySlug("levfin-pricing");
  if (!concept) notFound();
  return <LevFinPricingClient concept={concept} lang="en" />;
}
