import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinCreditMetricsClient from "@/app/market-101/levfin-credit-metrics/LevFinCreditMetricsClient";

export const metadata: Metadata = {
  title: "LevFin Ch.2 — Credit Metrics & Underwriting: EBITDA Addbacks, Leverage, Coverage & FCF | Market 101 | Deal Story",
  description:
    "Complete LBO credit analysis guide: EBITDA addback tiers (standard to aggressive), leverage metrics (total/first lien/net), FCCR 2.0× indenture test, 8-step FCF waterfall, S&P vs Moody's methodology comparison, worked example with Atlas Industrial Corp.",
  alternates: {
    canonical: "/en/market-101/levfin-credit-metrics",
    languages: {
      ko: "/market-101/levfin-credit-metrics",
      en: "/en/market-101/levfin-credit-metrics",
      "x-default": "/market-101/levfin-credit-metrics",
    },
  },
};

export default function LevFinCreditMetricsPageEn() {
  const concept = getMarket101ConceptBySlug("levfin-credit-metrics");
  if (!concept) notFound();
  return <LevFinCreditMetricsClient concept={concept} lang="en" />;
}
