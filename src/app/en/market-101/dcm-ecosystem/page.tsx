import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmEcosystemClient from "@/app/market-101/dcm-ecosystem/DcmEcosystemClient";

export const metadata: Metadata = {
  title: "The Full Map of DCM — Market 101 | Deal Story",
  description:
    "The global bond market at $130T dwarfs equities. A comprehensive guide to DCM players, products, and market structure.",
  alternates: {
    canonical: "/en/market-101/dcm-ecosystem",
    languages: {
      ko: "/market-101/dcm-ecosystem",
      en: "/en/market-101/dcm-ecosystem",
      "x-default": "/market-101/dcm-ecosystem",
    },
  },
};

export default function DcmEcosystemPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-ecosystem");
  if (!concept) notFound();
  return <DcmEcosystemClient concept={concept} lang="en" />;
}
