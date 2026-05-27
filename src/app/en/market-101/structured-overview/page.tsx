import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredOverviewClient from "@/app/market-101/structured-overview/StructuredOverviewClient";

export const metadata: Metadata = {
  title: "Structured Finance Overview — Inside the Securitization Machine: SPV, Waterfall & Tranches | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/structured-overview",
    languages: {
      ko: "/market-101/structured-overview",
      en: "/en/market-101/structured-overview",
      "x-default": "/market-101/structured-overview",
    },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("structured-overview");
  if (!concept) notFound();
  return <StructuredOverviewClient concept={concept} lang="en" />;
}
