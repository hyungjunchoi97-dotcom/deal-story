import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import KoreaExternalBondClient from "@/app/market/korea-1998-external-bond/KoreaExternalBondClient";

export const metadata: Metadata = {
  title: "Korea 1998 External Bond — Market Story | Deal Story",
  description:
    "Korea's first return to international bond markets after the IMF crisis. From T+345bp to T+60bp — the origin story of 30 years of Korean sovereign credit.",
  alternates: {
    canonical: "/en/market/korea-1998-external-bond",
    languages: {
      ko: "/market/korea-1998-external-bond",
      en: "/en/market/korea-1998-external-bond",
      "x-default": "/market/korea-1998-external-bond",
    },
  },
};

export default function KoreaExternalBondPageEn() {
  const deal = getMarketDealBySlug("korea-1998-external-bond");
  if (!deal) notFound();
  return <KoreaExternalBondClient deal={deal} lang="en" />;
}
