import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredWaterfallClient from "@/app/market-101/structured-waterfall/StructuredWaterfallClient";

export const metadata: Metadata = {
  title: "Tranche & Waterfall — The Mechanics of Credit Risk Distribution in Structured Finance | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/structured-waterfall",
    languages: {
      ko: "/market-101/structured-waterfall",
      en: "/en/market-101/structured-waterfall",
      "x-default": "/market-101/structured-waterfall",
    },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("structured-waterfall");
  if (!concept) notFound();
  return <StructuredWaterfallClient concept={concept} lang="en" />;
}
