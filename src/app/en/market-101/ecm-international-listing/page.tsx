import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmInternationalListingClient from "@/app/market-101/ecm-international-listing/EcmInternationalListingClient";

export const metadata: Metadata = {
  title: "ECM Ch.9 — International Listings: ADR, GDR, and Overseas Direct Listing | Market 101 | Deal Story",
  description:
    "How Korean companies list on NYSE and foreign companies list on KRX — ADR, GDR, dual listing, overseas direct listing mechanics. Why Coupang chose New York over Seoul, 144A/Reg S structure, how depositary receipts work, cost-benefit analysis of overseas listing.",
  alternates: {
    canonical: "/en/market-101/ecm-international-listing",
    languages: {
      ko: "/market-101/ecm-international-listing",
      en: "/en/market-101/ecm-international-listing",
      "x-default": "/market-101/ecm-international-listing",
    },
  },
};

export default function EcmInternationalListingPageEn() {
  const concept = getMarket101ConceptBySlug("ecm-international-listing");
  if (!concept) notFound();
  return <EcmInternationalListingClient concept={concept} lang="en" />;
}
