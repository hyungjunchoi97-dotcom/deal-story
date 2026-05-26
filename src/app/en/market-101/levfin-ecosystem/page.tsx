import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LevFinEcosystemClient from "@/app/market-101/levfin-ecosystem/LevFinEcosystemClient";

export const metadata: Metadata = {
  title: "LevFin Ch.0 — Leveraged Finance Ecosystem: HY Bonds, Leveraged Loans & LBO Map | Market 101 | Deal Story",
  description:
    "Complete guide to Leveraged Finance: HY bonds vs leveraged loans vs mezzanine, capital structure waterfall, CLO mechanics, historical default rate cycles, Hilton LBO case study (2007–2018 MoM 2.6×, IRR 21%), and Korean PE deals (MBK, KKR, Carlyle).",
  alternates: {
    canonical: "/en/market-101/levfin-ecosystem",
    languages: {
      ko: "/market-101/levfin-ecosystem",
      en: "/en/market-101/levfin-ecosystem",
      "x-default": "/market-101/levfin-ecosystem",
    },
  },
};

export default function LevFinEcosystemPageEn() {
  const concept = getMarket101ConceptBySlug("levfin-ecosystem");
  if (!concept) notFound();
  return <LevFinEcosystemClient concept={concept} lang="en" />;
}
