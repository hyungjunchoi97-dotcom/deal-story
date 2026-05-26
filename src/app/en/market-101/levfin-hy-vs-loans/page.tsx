import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinHyVsLoansClient from "@/app/market-101/levfin-hy-vs-loans/LevFinHyVsLoansClient";

export const metadata: Metadata = {
  title: "LevFin Ch.1 — HY Bonds vs Leveraged Loans: Structure, Investors & Issuer Choice | Market 101 | Deal Story",
  description:
    "10 key differences between high yield bonds and leveraged loans (TLBs): fixed vs floating rate, security, Cov-Lite, call schedules, OID, investor base (CLOs at 65%), Dollar General KKR LBO ($6.9bn) case study, and Korean LevFin market analysis.",
  alternates: {
    canonical: "/en/market-101/levfin-hy-vs-loans",
    languages: {
      ko: "/market-101/levfin-hy-vs-loans",
      en: "/en/market-101/levfin-hy-vs-loans",
      "x-default": "/market-101/levfin-hy-vs-loans",
    },
  },
};

export default function LevFinHyVsLoansPageEn() {
  const concept = getMarket101ConceptBySlug("levfin-hy-vs-loans");
  if (!concept) notFound();
  return <LevFinHyVsLoansClient concept={concept} lang="en" />;
}
