import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmBondProductsClient from "@/app/market-101/dcm-bond-products/DcmBondProductsClient";

export const metadata: Metadata = {
  title: "DCM Ch.3 — Bond Product Spectrum: From Senior to CLO | Market 101 | Deal Story",
  description:
    "Senior unsecured, covered bonds, AT1, high-yield, PIK, CLO — the full DCM product map. Structure, investor base, pricing terms, and real-world cases for every product tier.",
  alternates: {
    canonical: "/en/market-101/dcm-bond-products",
    languages: {
      ko: "/market-101/dcm-bond-products",
      en: "/en/market-101/dcm-bond-products",
      "x-default": "/market-101/dcm-bond-products",
    },
  },
};

export default function DcmBondProductsPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-bond-products");
  if (!concept) notFound();
  return <DcmBondProductsClient concept={concept} lang="en" />;
}
