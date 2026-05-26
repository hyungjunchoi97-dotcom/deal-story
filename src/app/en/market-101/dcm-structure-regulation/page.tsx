import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmStructureRegulationClient from "@/app/market-101/dcm-structure-regulation/DcmStructureRegulationClient";

export const metadata: Metadata = {
  title: "DCM Ch.7 — Structure & Regulation: Chinese Wall, MNPI, Syndicate, Documentation | Market 101 | Deal Story",
  description:
    "The institutional infrastructure of DCM: Chinese Wall, MNPI rules, syndicate structure, and prospectus documentation. Why bankers are prohibited from certain actions and the legal framework around deal execution.",
  alternates: {
    canonical: "/en/market-101/dcm-structure-regulation",
    languages: {
      ko: "/market-101/dcm-structure-regulation",
      en: "/en/market-101/dcm-structure-regulation",
      "x-default": "/market-101/dcm-structure-regulation",
    },
  },
};

export default function DcmStructureRegulationPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-structure-regulation");
  if (!concept) notFound();
  return <DcmStructureRegulationClient concept={concept} lang="en" />;
}
