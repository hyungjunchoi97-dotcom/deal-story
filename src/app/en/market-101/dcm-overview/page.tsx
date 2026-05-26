import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmOverviewClient from "@/app/market-101/dcm-overview/DcmOverviewClient";

export const metadata: Metadata = {
  title: "DCM Overview — Introduction to Debt Capital Markets | Market 101 | Deal Story",
  description:
    "The complete DCM introduction: credit spectrum from IG to Distressed, LevFin & LBO structures, investor ecosystem, deal process — with real case studies from Korea 1998, CS AT1, and SVB 2023.",
  alternates: {
    canonical: "/en/market-101/dcm-overview",
    languages: {
      ko: "/market-101/dcm-overview",
      en: "/en/market-101/dcm-overview",
      "x-default": "/market-101/dcm-overview",
    },
  },
};

export default function DcmOverviewPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-overview");
  if (!concept) notFound();
  return <DcmOverviewClient concept={concept} lang="en" />;
}
