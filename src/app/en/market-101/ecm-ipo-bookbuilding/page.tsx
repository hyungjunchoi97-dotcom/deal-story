import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoBookbuildingClient from "@/app/market-101/ecm-ipo-bookbuilding/EcmIpoBookbuildingClient";

export const metadata: Metadata = {
  title: "ECM Ch.5 — Book-Building & Pricing: Demand Curve and Greenshoe Mechanics | Market 101 | Deal Story",
  description:
    "IPO book-building gathers demand before the price is set. 'Where to cut' the demand curve is the banker's core skill. Greenshoe in three steps: over-allotment → stabilization → option exercise. Why 15–20% first-day pop is ideal, why 30% pop is a failure, Korea's mandatory lock-up commitment mechanism.",
  alternates: {
    canonical: "/en/market-101/ecm-ipo-bookbuilding",
    languages: {
      ko: "/market-101/ecm-ipo-bookbuilding",
      en: "/en/market-101/ecm-ipo-bookbuilding",
      "x-default": "/market-101/ecm-ipo-bookbuilding",
    },
  },
};

export default function EcmIpoBookbuildingPageEn() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-bookbuilding");
  if (!concept) notFound();
  return <EcmIpoBookbuildingClient concept={concept} lang="en" />;
}
