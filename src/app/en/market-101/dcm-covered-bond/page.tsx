import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import CoveredBondClient from "@/app/market-101/dcm-covered-bond/CoveredBondClient";

export const metadata: Metadata = {
  title: "Covered Bonds — The Dual-Recourse Structure With 200 Years of Zero Investor Losses | Market 101 | Deal Story",
  description:
    "How Swedish residential mortgages become AAA bonds. Covered bond dual-recourse structure, MBS comparison, 250-year history of the Pfandbrief, and Europe's $3.5 trillion market fully dissected.",
  alternates: {
    canonical: "/en/market-101/dcm-covered-bond",
    languages: {
      ko: "/market-101/dcm-covered-bond",
      en: "/en/market-101/dcm-covered-bond",
      "x-default": "/market-101/dcm-covered-bond",
    },
  },
};

export default function CoveredBondPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-covered-bond");
  if (!concept) notFound();
  return <CoveredBondClient concept={concept} lang="en" />;
}
