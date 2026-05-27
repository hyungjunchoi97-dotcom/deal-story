import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import DcmRateBenchmarksClient from "@/app/market-101/dcm-rate-benchmarks/DcmRateBenchmarksClient";

export const metadata: Metadata = {
  title: "DCM Special — Global Rate Benchmarks: SOFR, LIBOR, Mid-Swap & Currency Swap | Market 101 | Deal Story",
  description:
    "Why do USD bonds quote T+180bp while EUR bonds quote MS+80bp? The LIBOR manipulation scandal, the shift to SOFR, what Mid-Swap is, and how 0.3% JPY becomes 3.2% USD via Cross-Currency Swap — fully dissected.",
  alternates: {
    canonical: "/en/market-101/dcm-rate-benchmarks",
    languages: {
      ko: "/market-101/dcm-rate-benchmarks",
      en: "/en/market-101/dcm-rate-benchmarks",
      "x-default": "/market-101/dcm-rate-benchmarks",
    },
  },
};

export default function DcmRateBenchmarksPageEn() {
  const concept = getMarket101ConceptBySlug("dcm-rate-benchmarks");
  if (!concept) notFound();
  return <DcmRateBenchmarksClient concept={concept} lang="en" />;
}
