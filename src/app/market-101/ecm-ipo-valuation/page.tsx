import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import EcmIpoValuationClient from "./EcmIpoValuationClient";

export const metadata: Metadata = {
  title: "ECM Ch.3 — 밸류에이션: Football Field와 5가지 방법론 | Market 101 | Deal Story",
  description:
    "IPO 가격은 과학이 아닌 협상. P/E·EV/EBITDA·EV/Revenue·DCF·선행 거래 5가지 방법론이 서로 다른 가격 도출. Rivian이 매출 없이 $660억 밸류를 받은 이유, 크래프톤 53조→36조 하향 협상, Leave Money on the Table 논쟁.",
  alternates: {
    canonical: "/market-101/ecm-ipo-valuation",
    languages: {
      ko: "/market-101/ecm-ipo-valuation",
      en: "/en/market-101/ecm-ipo-valuation",
      "x-default": "/market-101/ecm-ipo-valuation",
    },
  },
};

export default function EcmIpoValuationPage() {
  const concept = getMarket101ConceptBySlug("ecm-ipo-valuation");
  if (!concept) notFound();
  return <EcmIpoValuationClient concept={concept} lang="ko" />;
}
