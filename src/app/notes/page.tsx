/**
 * Notes — Index (KO)
 */
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/CategoryHero";
import { ALL_NOTES } from "@/data/notes";
import { SITE_URL } from "@/lib/site";
import NotesIndexClient from "./NotesIndexClient";

export const metadata: Metadata = {
  title: "Notes — 금융·투자 심층 분석 | Deal Story",
  description:
    "코리아 디스카운트, 행동주의 투자, 달러 패권, 글로벌 자본시장 — 데이터와 출처 기반의 심층 노트.",
  keywords: [
    "코리아 디스카운트", "행동주의 투자", "상속세", "일본 TSE 개혁", "밸류업 프로그램",
    "PBR", "Elliott", "Align Partners", "상법 개정", "금융 분석",
  ],
  alternates: {
    canonical: "/notes",
    languages: { ko: "/notes", en: "/en/notes", "x-default": "/notes" },
  },
  openGraph: {
    title: "Notes — 금융·투자 심층 분석 | Deal Story",
    description: "데이터와 출처 기반의 금융·투자 심층 노트.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function NotesPage() {
  const published = ALL_NOTES.filter((n) => n.status === "published");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Notes — 금융·투자 심층 분석 | Deal Story",
    description: "데이터와 출처 기반의 금융·투자 심층 노트.",
    url: `${SITE_URL}/notes`,
    publisher: { "@type": "Organization", name: "Deal Story", url: SITE_URL },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <CategoryHero
          lang="ko"
          breadcrumb="Notes"
          title="Notes"
          description="코리아 디스카운트, 행동주의, 글로벌 자본 시장까지 — 출처와 데이터를 기반으로 쓴 금융·투자 분석 노트."
          crossLinks={[
            { key: "deals", href: "/deals", label: "실제 딜 케이스 → Deal Archive", badge: "D" },
            { key: "deal-101", href: "/deal-101", label: "개념 사전 → Deal 101", badge: "101" },
          ]}
        />

        {/* ── Notes list ────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10">
          <NotesIndexClient notes={published} lang="ko" />
        </div>
      </main>
      <Footer />
    </>
  );
}
