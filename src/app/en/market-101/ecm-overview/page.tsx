import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmOverviewClient from "@/app/market-101/ecm-overview/EcmOverviewClient";

export const metadata: Metadata = {
  title: "ECM Overview — The Complete Introduction to Equity Capital Markets | Market 101 | Deal Story",
  description:
    "An IPO isn't a debut party — it's a permanent transformation of ownership, governance, and capital access. Global ECM $9T+, three pillars (IPO / follow-on / convertibles), the issuer–investor–ECM banker triangle, from WeWork's withdrawal to Ant Group's cancellation 48 hours before listing.",
  alternates: {
    canonical: "/en/market-101/ecm-overview",
    languages: {
      ko: "/market-101/ecm-overview",
      en: "/en/market-101/ecm-overview",
      "x-default": "/market-101/ecm-overview",
    },
  },
};

export default function EcmOverviewPageEn() {
  const concept = getMarket101ConceptBySlug("ecm-overview");
  if (!concept) notFound();
  return <EcmOverviewClient concept={concept} lang="en" />;
}
