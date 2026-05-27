import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMarket101ConceptBySlug } from "@/data/market-101-concepts";
import SyndicatedLoanPlayersClient from "./SyndicatedLoanPlayersClient";

export const metadata: Metadata = {
  title: "신디케이티드론 Ch.1 — 플레이어와 수익구조: MLA·에이전트·CLO 완전해설 | Market 101 | Deal Story",
  description:
    "신디케이티드론 4대 플레이어(MLA·에이전트·참여은행·CLO) 역할과 수익 구조. Arrangement Fee·Upfront Fee·Agency Fee·Commitment Fee 워터폴, 북러너 vs 코어레인저 차이, Analyst가 첫날 밤 만드는 Fee Model 실전 가이드.",
  alternates: {
    canonical: "/market-101/syndicated-loan-players",
    languages: {
      ko: "/market-101/syndicated-loan-players",
      en: "/en/market-101/syndicated-loan-players",
      "x-default": "/market-101/syndicated-loan-players",
    },
  },
};

export default function SyndicatedLoanPlayersPage() {
  const concept = getMarket101ConceptBySlug("syndicated-loan-players");
  if (!concept) notFound();
  return <SyndicatedLoanPlayersClient concept={concept} lang="ko" />;
}
