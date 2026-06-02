import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import YenCarryClient from "@/app/market-101/macro-yen-carry/YenCarryClient";

export const metadata: Metadata = {
  title: "Yen Carry Trade Collapse — August 5, 2024 | Market 101 | Deal Story",
  description:
    "A single BOJ rate hike of 0.15pp sent KOSPI down 8.77%, Nikkei down 12.4%, and Nasdaq down 6% on August 5, 2024. The structure of the yen carry trade, the unwinding mechanism, and the global asset market ripple effects dissected with real data.",
  alternates: {
    canonical: "/en/market-101/macro-yen-carry",
    languages: {
      ko: "/market-101/macro-yen-carry",
      en: "/en/market-101/macro-yen-carry",
      "x-default": "/market-101/macro-yen-carry",
    },
  },
};

export default function YenCarryPageEn() {
  const concept = getMarket101ConceptBySlug("macro-yen-carry");
  if (!concept) notFound();
  return <YenCarryClient concept={concept} lang="en" />;
}
