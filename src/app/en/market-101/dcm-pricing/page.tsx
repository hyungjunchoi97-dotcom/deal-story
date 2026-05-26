import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmPricingClient from "@/app/market-101/dcm-pricing/DcmPricingClient";

export const metadata: Metadata = {
  title: "DCM Ch.6 — Pricing: G/I/Z/OAS/ASW Spreads and NIC | Market 101 | Deal Story",
  description:
    "The language of bond pricing: G-spread, I-spread, Z-spread, OAS, ASW, and NIC — their differences and calculations. How bankers move from IPT to final spread in real deal execution.",
  alternates: {
    canonical: "/en/market-101/dcm-pricing",
    languages: {
      ko: "/market-101/dcm-pricing",
      en: "/en/market-101/dcm-pricing",
      "x-default": "/market-101/dcm-pricing",
    },
  },
};

export default function DcmPricingPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-pricing");
  if (!concept) notFound();
  return <DcmPricingClient concept={concept} lang="en" />;
}
