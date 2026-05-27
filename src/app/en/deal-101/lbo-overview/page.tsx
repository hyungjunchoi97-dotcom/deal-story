import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboOverviewClient from "@/app/deal-101/lbo-overview/LboOverviewClient";

export const metadata: Metadata = {
  title: "What Is LBO? — The Math of Buying Companies with Leverage | Deal 101 | Deal Story",
  description:
    "LBO in three words: borrow, build, sell. How funding 60–70% of an acquisition with debt amplifies equity returns. Seven LBO target criteria, GP/LP carry waterfall, Blackstone/Hilton and TXU case studies — the full anatomy of a PE buyout.",
  keywords: [
    "LBO", "Leveraged Buyout", "PE Buyout", "Private Equity", "GP LP", "Carried Interest",
    "Carry Waterfall", "IRR MOIC", "Blackstone Hilton", "TXU Energy Future", "Leverage Returns",
  ],
  alternates: {
    canonical: "/en/deal-101/lbo-overview",
    languages: {
      ko: "/deal-101/lbo-overview",
      en: "/en/deal-101/lbo-overview",
      "x-default": "/deal-101/lbo-overview",
    },
  },
};

export default function LboOverviewPageEn() {
  const concept = getMarket101ConceptBySlug("lbo-overview");
  if (!concept) notFound();
  return <LboOverviewClient concept={concept} lang="en" />;
}
