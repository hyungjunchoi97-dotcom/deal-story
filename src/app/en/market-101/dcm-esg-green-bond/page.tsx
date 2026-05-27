import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmEsgGreenBondClient from "@/app/market-101/dcm-esg-green-bond/DcmEsgGreenBondClient";

export const metadata: Metadata = {
  title: "DCM Ch.10 — ESG & Green Bonds in Practice: GBP, Greenium, SLB vs Green Bond | Market 101 | Deal Story",
  description:
    "Green Bond Principles (GBP) four pillars, five ESG bond types compared (green, social, sustainability, SLB, transition), empirical greenium data by segment, SPO providers, greenwashing identification. Korea MOEF USD 500mn green sovereign case study.",
  alternates: {
    canonical: "/en/market-101/dcm-esg-green-bond",
    languages: {
      ko: "/market-101/dcm-esg-green-bond",
      en: "/en/market-101/dcm-esg-green-bond",
      "x-default": "/market-101/dcm-esg-green-bond",
    },
  },
};

export default function DcmEsgGreenBondPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-esg-green-bond");
  if (!concept) notFound();
  return <DcmEsgGreenBondClient concept={concept} lang="en" />;
}
