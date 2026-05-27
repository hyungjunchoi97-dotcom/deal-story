import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboReturnsClient from "@/app/deal-101/lbo-returns/LboReturnsClient";

export const metadata: Metadata = {
  title: "LBO Ch.2 — Return Analysis: MOIC, IRR & the Math of Value Creation | Deal 101 | Deal Story",
  description:
    "Why MOIC and IRR give different conclusions, the J-curve, three value creation drivers (EBITDA growth, Multiple Expansion, Deleveraging), vintage year effects, and carry waterfall math — the core return analytics of private equity.",
  keywords: [
    "MOIC", "IRR", "J-curve", "Multiple Expansion", "Deleveraging",
    "Value Creation", "Vintage Year", "LBO Returns", "Exit Multiple", "Carry Waterfall",
  ],
  alternates: {
    canonical: "/en/deal-101/lbo-returns",
    languages: {
      ko: "/deal-101/lbo-returns",
      en: "/en/deal-101/lbo-returns",
      "x-default": "/deal-101/lbo-returns",
    },
  },
};

export default function LboReturnsPageEn() {
  const concept = getMarket101ConceptBySlug("lbo-returns");
  if (!concept) notFound();
  return <LboReturnsClient concept={concept} lang="en" />;
}
