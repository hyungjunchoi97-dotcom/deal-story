import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import IpoFirstdayPopClient from "@/app/market-101/ecm-ipo-firstday-pop/IpoFirstdayPopClient";

export const metadata: Metadata = {
  title: "The IPO First-Day Pop Paradox — Why Issuers Lose When the Stock Surges | Market 101 | Deal Story",
  description:
    "Rivian +54%, DoorDash +86%, Airbnb +113%... A first-day surge is a loss for the issuer. Leave Money on the Table, the politics of allocation, and the ideal first-day pop range analyzed with real data.",
  alternates: {
    canonical: "/en/market-101/ecm-ipo-firstday-pop",
    languages: {
      ko: "/market-101/ecm-ipo-firstday-pop",
      en: "/en/market-101/ecm-ipo-firstday-pop",
      "x-default": "/market-101/ecm-ipo-firstday-pop",
    },
  },
};

export default function IpoFirstdayPopPageEn() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-firstday-pop");
  if (!concept) notFound();
  return <IpoFirstdayPopClient concept={concept} lang="en" />;
}
