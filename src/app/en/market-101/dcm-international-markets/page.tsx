import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmInternationalMarketsClient from "@/app/market-101/dcm-international-markets/DcmInternationalMarketsClient";

export const metadata: Metadata = {
  title: "DCM Ch.4 — International Bond Markets: Yankee, Eurobond, Samurai, Formosa, Arirang | Market 101 | Deal Story",
  description:
    "Full map of international bond markets: Yankee (USD onshore), Eurobond, Samurai, Formosa, and Arirang bonds — currency, regulation, investor base, and how bankers choose the right market.",
  alternates: {
    canonical: "/en/market-101/dcm-international-markets",
    languages: {
      ko: "/market-101/dcm-international-markets",
      en: "/en/market-101/dcm-international-markets",
      "x-default": "/market-101/dcm-international-markets",
    },
  },
};

export default function DcmInternationalMarketsPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-international-markets");
  if (!concept) notFound();
  return <DcmInternationalMarketsClient concept={concept} lang="en" />;
}
