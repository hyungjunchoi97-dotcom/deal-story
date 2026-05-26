import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarketDealBySlug } from "@/data/market-deals";
import SVBClient from "./SVBClient";

export const metadata: Metadata = {
  title: "실리콘밸리뱅크(SVB) 붕괴 — Market Story | Deal Story",
  description:
    "2023년 3월 48시간 만에 사라진 $2,090억 은행. HTM 포트폴리오, ALM 실패, Twitter발 뱅크런, BTFP까지 — 금리 인상 시대의 교과서적 은행 위기.",
  alternates: {
    canonical: "/market/svb-2023",
    languages: {
      ko: "/market/svb-2023",
      en: "/en/market/svb-2023",
      "x-default": "/market/svb-2023",
    },
  },
};

export default function SVBPage() {
  const deal = getMarketDealBySlug("svb-2023");
  if (!deal) notFound();
  return <SVBClient deal={deal} lang="ko" />;
}
