/**
 * 딜 101 — 개념 허브 인덱스
 * 각 카드가 개별 개념 페이지(/deal-101/[slug])로 링크됨
 */
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import Deal101IndexClient from "./Deal101IndexClient";

export const metadata: Metadata = {
  title: "딜 101 — M&A 핵심 개념 아카이브 | Deal Story",
  description:
    "EV/EBITDA, LBO, 반독점 규제까지 — 실제 딜에서 등장하는 핵심 금융 개념을 딜 사례와 연결해 학습하는 개념 아카이브입니다.",
  alternates: {
    canonical: "/deal-101",
    languages: { ko: "/deal-101", en: "/en/deal-101", "x-default": "/deal-101" },
  },
};

export default function Deal101IndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        <CategoryHero
          lang="ko"
          breadcrumb="딜 101"
          title="딜 101"
          description="실제 M&A 딜에서 등장하는 핵심 재무 개념들 — 맥락 속에서 설명합니다. 각 개념 페이지는 해당 개념이 등장한 실제 딜로 직접 연결됩니다."
          crossLinks={[
            {
              key: "market",
              href: "/market",
              label: "자본시장 랜드마크 → Market Story",
              badge: "M",
            },
          ]}
        />

        {/* ── 카테고리 폴더 ────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10">
          <Deal101IndexClient />
        </div>

      </main>
      <Footer />
    </>
  );
}
