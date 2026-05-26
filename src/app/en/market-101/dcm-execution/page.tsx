import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmExecutionClient from "@/app/market-101/dcm-execution/DcmExecutionClient";

export const metadata: Metadata = {
  title: "DCM Ch.8 — Bond Execution in Practice: Arb Calculation to Book-Building | Market 101 | Deal Story",
  description:
    "A sovereign bond banker's practitioner guide: EUR/JPY/TWD→USD arb calculation, Bloomberg comps to IPT, 4-hour bookbuilding timeline, real money vs. fast money order book anatomy. Korea MOEF EUR 5yr case study.",
  alternates: {
    canonical: "/en/market-101/dcm-execution",
    languages: {
      ko: "/market-101/dcm-execution",
      en: "/en/market-101/dcm-execution",
      "x-default": "/market-101/dcm-execution",
    },
  },
};

export default function DcmExecutionPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-execution");
  if (!concept) notFound();
  return <DcmExecutionClient concept={concept} lang="en" />;
}
