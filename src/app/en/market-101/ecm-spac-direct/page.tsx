import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmSpacDirectClient from "@/app/market-101/ecm-spac-direct/EcmSpacDirectClient";

export const metadata: Metadata = {
  title: "ECM Ch.10 — SPAC & Direct Listing: Alternatives to the Traditional IPO | Market 101 | Deal Story",
  description:
    "Traditional IPO (18 months, 7% fee), SPAC merger (3–6 months, no due diligence), direct listing (no capital raise) — speed, cost, risk comparison. Nikola fraud, Grab -71%, Bird delisted: 2020–22 SPAC bubble dissected. Why Airbnb's direct listing succeeded. Post-2023 IPO market normalization.",
  alternates: {
    canonical: "/en/market-101/ecm-spac-direct",
    languages: {
      ko: "/market-101/ecm-spac-direct",
      en: "/en/market-101/ecm-spac-direct",
      "x-default": "/market-101/ecm-spac-direct",
    },
  },
};

export default function EcmSpacDirectPageEn() {
  const concept = getMarket101ConceptBySlug("ecm-spac-direct");
  if (!concept) notFound();
  return <EcmSpacDirectClient concept={concept} lang="en" />;
}
