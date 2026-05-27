import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinCovenantsClient from "@/app/market-101/levfin-covenants/LevFinCovenantsClient";

export const metadata: Metadata = {
  title: "LevFin Ch.3 — Covenant Structure: HY Indentures, Builder Basket, J.Crew & Serta Fully Dissected | Market 101 | Deal Story",
  description:
    "Complete HY indenture & TLB covenant guide: FCCR 2.0× debt incurrence test + carve-outs, restricted payments builder basket, unrestricted subsidiary mechanics, J.Crew (2017), PetSmart (2018), Serta Simmons (2020), Envision (2020) loopholes fully dissected, blocker language evolution.",
  alternates: {
    canonical: "/en/market-101/levfin-covenants",
    languages: {
      ko: "/market-101/levfin-covenants",
      en: "/en/market-101/levfin-covenants",
      "x-default": "/market-101/levfin-covenants",
    },
  },
};

export default function LevFinCovenantsPageEn() {
  const concept = getMarket101ConceptBySlug("levfin-covenants");
  if (!concept) notFound();
  return <LevFinCovenantsClient concept={concept} lang="en" />;
}
