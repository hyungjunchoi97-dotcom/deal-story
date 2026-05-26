import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinDistressedClient from "@/app/market-101/levfin-distressed/LevFinDistressedClient";

export const metadata: Metadata = {
  title: "LevFin Ch.6 — Distressed Debt & Restructuring: What Happens When an LBO Fails | Market 101 | Deal Story",
  description:
    "Complete LBO distress guide: 8 warning signals (PIK election → revolver drawdown → CCC downgrade → Chapter 11), restructuring options (A&E / Ch.11 / prepackaged), Serta Simmons / Envision / TriMark uptier cases, DIP financing, recovery rates (1st lien 70-80% → equity ~0%), Korean court receivership vs workout.",
  alternates: {
    canonical: "/en/market-101/levfin-distressed",
    languages: {
      ko: "/market-101/levfin-distressed",
      en: "/en/market-101/levfin-distressed",
      "x-default": "/market-101/levfin-distressed",
    },
  },
};

export default function LevFinDistressedPageEn() {
  const concept = getMarket101ConceptBySlug("levfin-distressed");
  if (!concept) notFound();
  return <LevFinDistressedClient concept={concept} lang="en" />;
}
