import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DealCard from "@/components/home/DealCard";
import { ALL_DEALS } from "@/data/deals";
import { ALL_CONCEPTS } from "@/data/market-concepts";

export const metadata: Metadata = {
  title: "Deal Story — 딜 & 자본시장 아카이브",
  description:
    "M&A·PE·IPO 딜 아카이브(Deal Story)와 DCM·ECM·S&T 자본시장 아카이브(Market Story)를 아우르는 금융 지식 허브입니다.",
  alternates: {
    canonical: "/",
    languages: { ko: "/", en: "/en", "x-default": "/" },
  },
};

// ── 섹션 카드 데이터 ──────────────────────────────────────────────
const SECTIONS = [
  {
    key: "deals",
    href: "/deals",
    badge: "M&A · PE · IPO",
    badgeBg: "bg-blue-50 dark:bg-blue-900/30",
    badgeFg: "text-blue-700 dark:text-blue-300",
    accentBar: "bg-blue-500",
    title: "Deal Story",
    desc: "글로벌 빅딜 완전 해부 — 마이크로소프트·블랙스톤·KKR 등 역대 랜드마크 딜을 구조·가치평가·후속 성과까지 분석합니다.",
    count: `${ALL_DEALS.length}개 딜`,
    cta: "딜 아카이브 보기 →",
    ctaColor: "text-blue-600 dark:text-blue-400",
  },
  {
    key: "market",
    href: "/market",
    badge: "DCM · ECM · S&T",
    badgeBg: "bg-teal-50 dark:bg-teal-900/30",
    badgeFg: "text-teal-700 dark:text-teal-300",
    accentBar: "bg-teal-500",
    title: "Market Story",
    desc: "자본시장 구조 아카이브 — DCM·ECM·S&T·차이니즈 월·신디케이션 등 IB 실무 핵심 개념을 딜 사례와 함께 풀어냅니다.",
    count: `${ALL_CONCEPTS.length}개 개념`,
    cta: "마켓 아카이브 보기 →",
    ctaColor: "text-teal-600 dark:text-teal-400",
  },
  {
    key: "deal101",
    href: "/deal-101",
    badge: "딜 개념 사전",
    badgeBg: "bg-violet-50 dark:bg-violet-900/30",
    badgeFg: "text-violet-700 dark:text-violet-300",
    accentBar: "bg-violet-500",
    title: "Deal 101",
    desc: "M&A·PE 딜에서 반드시 알아야 할 핵심 개념들 — EV/EBITDA부터 LBO, 신디케이션, Break-up fee까지 한 곳에 정리했습니다.",
    count: "29개 개념",
    cta: "개념 사전 보기 →",
    ctaColor: "text-violet-600 dark:text-violet-400",
  },
] as const;

// ── 최근 딜 (홈에 6개만 표시) ──────────────────────────────────────
const RECENT_DEALS = ALL_DEALS.slice(0, 6);

export default function HubPage() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 허브 히어로 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <p className="text-xs font-semibold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-3">
              Financial Knowledge Hub
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Deal Story
            </h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              딜 아카이브(Deal Story)와 자본시장 아카이브(Market Story)를 한 곳에서 —
              M&amp;A·PE·IPO 딜과 DCM·ECM·S&amp;T 구조를 함께 공부합니다.
            </p>
          </div>
        </section>

        {/* ── 섹션 카드 ── */}
        <section className="max-w-3xl mx-auto px-5 py-10">
          <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-4">
            아카이브 탐색
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {SECTIONS.map((s) => (
              <Link key={s.key} href={s.href}>
                <div className="group relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200/60 dark:border-gray-700/60 p-5 h-full flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer overflow-hidden">
                  {/* 상단 컬러 바 */}
                  <div className={`absolute inset-x-0 top-0 h-0.5 ${s.accentBar}`} />

                  {/* 배지 */}
                  <span className={`self-start text-[10px] font-bold px-2 py-0.5 rounded-full mb-3 ${s.badgeBg} ${s.badgeFg}`}>
                    {s.badge}
                  </span>

                  {/* 제목 */}
                  <h3 className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-1.5 leading-tight">
                    {s.title}
                  </h3>

                  {/* 설명 */}
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1 mb-3 line-clamp-3">
                    {s.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] text-gray-400 dark:text-gray-500">{s.count}</span>
                    <span className={`text-[11px] font-semibold ${s.ctaColor} group-hover:underline`}>
                      {s.cta}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── 최근 딜 ── */}
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100">
              최근 딜
            </h2>
            <Link
              href="/deals"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              전체 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RECENT_DEALS.map((deal) => (
              <DealCard key={deal.slug} deal={deal} lang="ko" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
