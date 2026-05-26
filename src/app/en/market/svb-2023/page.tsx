import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import SVBClient from "@/app/market/svb-2023/SVBClient";

export const metadata: Metadata = {
  title: "Silicon Valley Bank Collapse — Market Story | Deal Story",
  description:
    "A $209B bank gone in 48 hours in March 2023. HTM portfolio, ALM failure, Twitter-fueled bank run, BTFP — the textbook bank crisis of the rate-hike era.",
  alternates: {
    canonical: "/en/market/svb-2023",
    languages: {
      ko: "/market/svb-2023",
      en: "/en/market/svb-2023",
      "x-default": "/market/svb-2023",
    },
  },
};

export default function SVBPageEn() {
  const deal = getMarketDealBySlug("svb-2023");
  if (!deal) notFound();
  return <SVBClient deal={deal} lang="en" />;
}
