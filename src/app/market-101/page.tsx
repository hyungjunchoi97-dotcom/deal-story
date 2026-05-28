import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import Market101IndexClient from "./Market101IndexClient";

export const metadata: Metadata = {
  title: "Market 101 — 자본시장 개념 사전 | Deal Story",
  description:
    "DCM·ECM·S&T·FIG·소버린 등 IB 자본시장 핵심 개념을 딜 사례와 함께 정리한 개념 사전.",
  alternates: {
    canonical: "/market-101",
    languages: { ko: "/market-101", en: "/en/market-101", "x-default": "/market-101" },
  },
};

export default function Market101Page() {
  return (
    <>
      <Header />
      <main className="flex-1">

        <CategoryHero
          lang="ko"
          breadcrumb="Market 101"
          title="Market 101"
          description="자본시장 개념 사전 — DCM, ECM, S&T, FIG, Sovereign, LevFin 까지 실제 딜 사례와 함께 풀이합니다. 카테고리 폴더를 펼쳐 살펴보세요."
          crossLinks={[
            {
              key: "market",
              href: "/market",
              label: "자본시장 랜드마크 → Market Story",
              badge: "M",
            },
            {
              key: "deal-101",
              href: "/deal-101",
              label: "M&A 개념 사전 → Deal 101",
              badge: "101",
            },
          ]}
        />

        {/* ── 폴더 UI (Client Component) ── */}
        <Market101IndexClient />

      </main>
      <Footer />
    </>
  );
}
