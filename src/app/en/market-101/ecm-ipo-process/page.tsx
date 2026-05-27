import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoProcessClient from "@/app/market-101/ecm-ipo-process/EcmIpoProcessClient";

export const metadata: Metadata = {
  title: "ECM Ch.4 — IPO Process: From S-1 Filing to Day One Trading | Market 101 | Deal Story",
  description:
    "An IPO is an 18-month project: Bake-off → due diligence & S-1 → SEC Comment Letter battles → Quiet Period → global roadshow (50–80 meetings) → Pricing Night. What Analysts, Associates, and MDs actually do at each stage. S-1 anatomy: how Risk Factors protect investors while exposing the issuer.",
  alternates: {
    canonical: "/en/market-101/ecm-ipo-process",
    languages: {
      ko: "/market-101/ecm-ipo-process",
      en: "/en/market-101/ecm-ipo-process",
      "x-default": "/market-101/ecm-ipo-process",
    },
  },
};

export default function EcmIpoProcessPageEn() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-process");
  if (!concept) notFound();
  return <EcmIpoProcessClient concept={concept} lang="en" />;
}
