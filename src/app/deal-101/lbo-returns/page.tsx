import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import LboReturnsClient from "./LboReturnsClient";

export const metadata: Metadata = {
  title: "LBO Ch.2 — 리턴 분석: MOIC·IRR·가치창출의 수학 | 딜 101 | Deal Story",
  description:
    "MOIC와 IRR이 왜 다른 결론을 내리는지, J-커브 효과, 가치창출 3대 드라이버(EBITDA 성장·Multiple Expansion·Deleveraging), Vintage Year 효과, Carry Waterfall 계산 — PE 리턴 분석의 핵심 수학.",
  keywords: [
    "MOIC", "IRR", "J-커브", "Multiple Expansion", "Deleveraging",
    "Value Creation", "Vintage Year", "LBO 리턴", "Exit Multiple", "Carry Waterfall",
  ],
  alternates: {
    canonical: "/deal-101/lbo-returns",
    languages: {
      ko: "/deal-101/lbo-returns",
      en: "/en/deal-101/lbo-returns",
      "x-default": "/deal-101/lbo-returns",
    },
  },
};

export default function LboReturnsPage() {
  const concept = getMarket101ConceptBySlug("lbo-returns");
  if (!concept) notFound();
  return <LboReturnsClient concept={concept} lang="ko" />;
}
