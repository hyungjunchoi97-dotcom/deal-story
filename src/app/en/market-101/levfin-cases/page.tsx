import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinCasesClient from "@/app/market-101/levfin-cases/LevFinCasesClient";

export const metadata: Metadata = {
  title: "LevFin Ch.7 — Case Studies: Five Landmark LBOs Fully Dissected | Market 101 | Deal Story",
  description:
    "LevFin series finale: RJR Nabisco 1989 ($31.4bn), Hilton 2007 ($26.9bn, IRR 21%), Toys R Us 2005 ($6.6bn, destroyed by Amazon), Caesars 2008 ($30.7bn, LME, $1.25bn settlement), MBK/Homeplus 2015 (₩7.2T) — six LevFin lessons from five landmark deals.",
  alternates: {
    canonical: "/en/market-101/levfin-cases",
    languages: {
      ko: "/market-101/levfin-cases",
      en: "/en/market-101/levfin-cases",
      "x-default": "/market-101/levfin-cases",
    },
  },
};

export default function LevFinCasesPageEn() {
  const concept = getMarket101ConceptBySlug("levfin-cases");
  if (!concept) notFound();
  return <LevFinCasesClient concept={concept} lang="en" />;
}
