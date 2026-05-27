import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboDealProcessClient from "@/app/deal-101/lbo-deal-process/LboDealProcessClient";

export const metadata: Metadata = {
  title: "LBO Ch.3 — Deal Process & Risk: From Origination to Exit | Deal 101 | Deal Story",
  description:
    "Complete LBO deal timeline (3–6 months): sources & uses table, maturity wall mechanics, SOFR rate shock, deep dives into TXU ($45B), Toys'R'Us ($6.6B), Caesars ($30B) failures and Alliance Boots success — a practitioner's LBO risk framework.",
  keywords: [
    "LBO Process", "Sources and Uses", "Maturity Wall", "TXU", "Toys R Us",
    "Caesars", "Alliance Boots", "Leverage Risk", "SOFR", "Deal Timeline",
  ],
  alternates: {
    canonical: "/en/deal-101/lbo-deal-process",
    languages: {
      ko: "/deal-101/lbo-deal-process",
      en: "/en/deal-101/lbo-deal-process",
      "x-default": "/deal-101/lbo-deal-process",
    },
  },
};

export default function LboDealProcessPageEn() {
  const concept = getMarket101ConceptBySlug("lbo-deal-process");
  if (!concept) notFound();
  return <LboDealProcessClient concept={concept} lang="en" />;
}
