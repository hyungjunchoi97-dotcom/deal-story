import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboReturnsClient from "@/app/market-101/lbo-returns/LboReturnsClient";

export const metadata: Metadata = {
  title: "LBO Return Analysis — MOIC, IRR & Value Creation Math | Market 101 | Deal Story",
  description:
    "MOIC vs IRR conflict scenarios, 3 value creation drivers (EBITDA growth, Multiple Expansion, Deleveraging), vintage year effect, and real return cases from Hilton, RJR Nabisco, and ADT. The complete math of PE buyout returns.",
  keywords: [
    "MOIC IRR", "LBO returns", "Multiple Expansion", "Deleveraging", "PE returns",
    "vintage year", "value creation drivers", "Dividend Recap", "PE buyout return",
  ],
  alternates: {
    canonical: "/en/market-101/lbo-returns",
    languages: {
      ko: "/market-101/lbo-returns",
      en: "/en/market-101/lbo-returns",
      "x-default": "/market-101/lbo-returns",
    },
  },
};

export default function LboReturnsPageEn() {
  const concept = getMarket101ConceptBySlug("lbo-returns");
  if (!concept) notFound();
  return <LboReturnsClient concept={concept} lang="en" />;
}
