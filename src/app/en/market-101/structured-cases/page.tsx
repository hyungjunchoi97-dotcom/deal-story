import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredCasesClient from "@/app/market-101/structured-cases/StructuredCasesClient";

export const metadata: Metadata = {
  title: "Structured Finance Case Studies — 2008 RMBS Collapse, CLO COVID Stress & Office CMBS Crisis | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/structured-cases",
    languages: {
      ko: "/market-101/structured-cases",
      en: "/en/market-101/structured-cases",
      "x-default": "/market-101/structured-cases",
    },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("structured-cases");
  if (!concept) notFound();
  return <StructuredCasesClient concept={concept} lang="en" />;
}
