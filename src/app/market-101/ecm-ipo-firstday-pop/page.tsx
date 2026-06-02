import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import IpoFirstdayPopClient from "./IpoFirstdayPopClient";

export const metadata: Metadata = {
  title: "IPO 첫날 폭등의 역설 — 발행사는 왜 손해인가 | Market 101 | Deal Story",
  description:
    "Rivian +54%, DoorDash +86%, Airbnb +113%... 첫날 폭등은 발행사에게 손실이다. Leave Money on the Table, 배분의 정치학, 이상적인 첫날 팝 범위를 실전 데이터로 분석합니다.",
  alternates: {
    canonical: "/market-101/ecm-ipo-firstday-pop",
    languages: {
      ko: "/market-101/ecm-ipo-firstday-pop",
      en: "/en/market-101/ecm-ipo-firstday-pop",
      "x-default": "/market-101/ecm-ipo-firstday-pop",
    },
  },
};

export default function IpoFirstdayPopPage() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-firstday-pop");
  if (!concept) notFound();
  return <IpoFirstdayPopClient concept={concept} lang="ko" />;
}
