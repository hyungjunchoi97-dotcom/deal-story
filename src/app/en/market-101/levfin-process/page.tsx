import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinProcessClient from "@/app/market-101/levfin-process/LevFinProcessClient";

export const metadata: Metadata = {
  title: "LevFin Ch.4 — Deal Process: Complete 6-8 Week Practitioner Timeline from Mandate to Close | Market 101 | Deal Story",
  description:
    "LBO financing 6-stage practitioner guide: Pre-mandate → Commitment Papers → Rating Agency → CIM → Book Build → Closing — fee letter, market flex structure, 10AM book updates, allocation politics, fee structure, hung deal risk (Twitter $13bn case study).",
  alternates: {
    canonical: "/en/market-101/levfin-process",
    languages: {
      ko: "/market-101/levfin-process",
      en: "/en/market-101/levfin-process",
      "x-default": "/market-101/levfin-process",
    },
  },
};

export default function LevFinProcessPageEn() {
  const concept = getMarket101ConceptBySlug("levfin-process");
  if (!concept) notFound();
  return <LevFinProcessClient concept={concept} lang="en" />;
}
