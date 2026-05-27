import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmConvertibleClient from "@/app/market-101/ecm-convertible/EcmConvertibleClient";

export const metadata: Metadata = {
  title: "ECM Ch.8 — Convertible Bonds: Debt or Equity? | Market 101 | Deal Story",
  description:
    "A convertible bond is a car with a seatbelt (bond) and an accelerator (equity). Rises like a stock when price climbs, protects like a bond when it falls. Conversion price, conversion premium, payoff diagram, delta hedging. Why growth companies choose this structure at a low coupon.",
  alternates: {
    canonical: "/en/market-101/ecm-convertible",
    languages: {
      ko: "/market-101/ecm-convertible",
      en: "/en/market-101/ecm-convertible",
      "x-default": "/market-101/ecm-convertible",
    },
  },
};

export default function EcmConvertiblePageEn() {
  const concept = getMarket101ConceptBySlug("ecm-convertible");
  if (!concept) notFound();
  return <EcmConvertibleClient concept={concept} lang="en" />;
}
