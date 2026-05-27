import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredCmbsClient from "@/app/market-101/structured-cmbs/StructuredCmbsClient";

export const metadata: Metadata = {
  title: "CMBS Complete Guide — How Commercial Mortgages Become Bonds & the Office CMBS Crisis | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/structured-cmbs",
    languages: {
      ko: "/market-101/structured-cmbs",
      en: "/en/market-101/structured-cmbs",
      "x-default": "/market-101/structured-cmbs",
    },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("structured-cmbs");
  if (!concept) notFound();
  return <StructuredCmbsClient concept={concept} lang="en" />;
}
