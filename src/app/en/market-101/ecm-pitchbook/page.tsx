import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmPitchbookClient from "@/app/market-101/ecm-pitchbook/EcmPitchbookClient";

export const metadata: Metadata = {
  title: "ECM Pitchbook Anatomy — From Equity Story to Fee Proposal | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/ecm-pitchbook",
    languages: { ko: "/market-101/ecm-pitchbook", en: "/en/market-101/ecm-pitchbook", "x-default": "/market-101/ecm-pitchbook" },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("ecm-pitchbook");
  if (!concept) notFound();
  return <EcmPitchbookClient concept={concept} lang="en" />;
}
