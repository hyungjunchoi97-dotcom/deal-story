import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import StructuredCloClient from "@/app/market-101/structured-clo/StructuredCloClient";

export const metadata: Metadata = {
  title: "CLO Complete Guide — How Leveraged Loans Become Bonds & the 2024 CLO Boom | Market 101 | Deal Story",
  alternates: {
    canonical: "/en/market-101/structured-clo",
    languages: {
      ko: "/market-101/structured-clo",
      en: "/en/market-101/structured-clo",
      "x-default": "/market-101/structured-clo",
    },
  },
};

export default function PageEn() {
  const concept = getMarket101ConceptBySlug("structured-clo");
  if (!concept) notFound();
  return <StructuredCloClient concept={concept} lang="en" />;
}
