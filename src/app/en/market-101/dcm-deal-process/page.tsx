import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmDealProcessClient from "@/app/market-101/dcm-deal-process/DcmDealProcessClient";

export const metadata: Metadata = {
  title: "DCM Ch.5 — Deal Process: From Mandate to Closing | Market 101 | Deal Story",
  description:
    "The full DCM deal flow: mandate, roadshow, book-building, pricing, allocation, and settlement. What bankers, issuers, and investors actually do at each step — with a real-time deal timeline.",
  alternates: {
    canonical: "/en/market-101/dcm-deal-process",
    languages: {
      ko: "/market-101/dcm-deal-process",
      en: "/en/market-101/dcm-deal-process",
      "x-default": "/market-101/dcm-deal-process",
    },
  },
};

export default function DcmDealProcessPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-deal-process");
  if (!concept) notFound();
  return <DcmDealProcessClient concept={concept} lang="en" />;
}
