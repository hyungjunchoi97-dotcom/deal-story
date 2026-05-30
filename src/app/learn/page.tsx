/**
 * Learn — 통합 개념 허브 (Deal 101 + Market 101 통합)
 * 카테고리: M&A 시리즈 · Valuation · FDD · Modelling · LBO ·
 *          DCM · ECM · FIG · 소버린 · 구조화 · LevFin · 신디케이티드론 · 기타
 */
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import LearnIndexClient from "./LearnIndexClient";

export const metadata: Metadata = {
  title: "Learn — IB·PE 핵심 개념 아카이브 | Deal Story",
  description:
    "M&A · LBO · Valuation · FDD · DCM · ECM · FIG · 구조화 · LevFin — 실제 딜과 자본시장에서 등장하는 핵심 개념을 사례와 연결해 학습합니다.",
  alternates: {
    canonical: "/learn",
    languages: { ko: "/learn", en: "/en/learn", "x-default": "/learn" },
  },
};

export default function LearnIndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <CategoryHero
          lang="ko"
          breadcrumb="Learn"
          title="Learn"
          description="딜과 자본시장에서 실제로 쓰이는 핵심 개념들. 각 페이지는 그 개념이 등장한 실제 딜 또는 시장 사례와 연결됩니다."
          crossLinks={[
            {
              key: "market",
              href: "/market",
              label: "자본시장 랜드마크 → Market Story",
              badge: "M",
            },
          ]}
        />

        <div className="max-w-3xl mx-auto px-5 py-10">
          <LearnIndexClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
