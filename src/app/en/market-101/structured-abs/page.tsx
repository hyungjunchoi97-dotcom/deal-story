import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredAbsClient from "@/app/market-101/structured-abs/StructuredAbsClient";

export const metadata: Metadata = {
  title: "ABS Complete Guide — How Auto Loans, Credit Cards & Student Loans Become Bonds | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/structured-abs",
    languages: {
      ko: "/market-101/structured-abs",
      en: "/en/market-101/structured-abs",
      "x-default": "/market-101/structured-abs",
    },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("structured-abs");
  if (!concept) notFound();
  return <StructuredAbsClient concept={concept} lang="en" />;
}
