import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredCdoClient from "@/app/market-101/structured-cdo/StructuredCdoClient";

export const metadata: Metadata = {
  title: "CDO & Synthetic CDO — The Structured Finance Bomb That Built the 2008 Crisis | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/structured-cdo",
    languages: {
      ko: "/market-101/structured-cdo",
      en: "/en/market-101/structured-cdo",
      "x-default": "/market-101/structured-cdo",
    },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("structured-cdo");
  if (!concept) notFound();
  return <StructuredCdoClient concept={concept} lang="en" />;
}
