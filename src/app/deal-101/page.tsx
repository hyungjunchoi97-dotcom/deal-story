/**
 * 딜 101 — 개념 허브 인덱스
 * 각 카드가 개별 개념 페이지(/deal-101/[slug])로 링크됨
 */
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ALL_DEALS } from "@/data/deals";

export const metadata: Metadata = {
  title: "딜 101 — M&A 핵심 개념 아카이브 | Deal Story",
  description:
    "EV/EBITDA, LBO, 반독점 규제까지 — 실제 딜에서 등장하는 핵심 금융 개념을 딜 사례와 연결해 학습하는 개념 아카이브입니다.",
  alternates: {
    canonical: "/deal-101",
    languages: { ko: "/deal-101", en: "/en/deal-101", "x-default": "/deal-101" },
  },
};

// ── 개념 카탈로그 ────────────────────────────────────────────────
// published: true인 것만 실제 페이지가 존재. false는 "준비 중" 표시.
const CONCEPT_CATALOG = [
  // 밸류에이션
  {
    slug: "ev-ebitda",
    term: "EV/EBITDA 멀티플",
    tagline: "M&A 가격 협상의 출발점 — 기업가치를 영업 현금창출력으로 나눈 핵심 지표",
    category: "밸류에이션",
    published: true,
  },
  {
    slug: "adjusted-ebitda",
    term: "Adjusted EBITDA — 조정의 전쟁",
    tagline: "EV = Multiple × EBITDA — EBITDA 조정이 곱셈으로 매각가에 증폭된다. 1회성 판정 기준과 이해관계자 충돌 지도",
    category: "밸류에이션",
    published: true,
  },
  {
    slug: "ev-sales",
    term: "EV/Sales 멀티플",
    tagline: "EBITDA 적자 성장기 기업을 평가할 때 쓰는 매출 기반 밸류에이션",
    category: "밸류에이션",
    published: false,
  },
  {
    slug: "arr-multiple",
    term: "ARR 멀티플",
    tagline: "SaaS 기업 전용 — 연간반복매출 대비 기업가치 배수",
    category: "밸류에이션",
    published: false,
  },
  {
    slug: "acquisition-premium",
    term: "인수 프리미엄",
    tagline: "인수 가격이 시장가 대비 얼마나 높은지 측정하는 경영권 프리미엄",
    category: "밸류에이션",
    published: false,
  },
  {
    slug: "saas-valuation",
    term: "SaaS 밸류에이션",
    tagline: "ARR·NRR·성장률 중심의 구독 소프트웨어 기업 가치평가 방법론",
    category: "밸류에이션",
    published: false,
  },
  // 딜 구조
  {
    slug: "lbo",
    term: "LBO (차입 인수)",
    tagline: "타깃의 자산·현금흐름을 담보로 차입해 에쿼티 투입을 최소화하는 PE 핵심 전략",
    category: "딜 구조",
    published: false,
  },
  {
    slug: "tender-offer",
    term: "공개매수 (Tender Offer)",
    tagline: "인수자가 주주에게 직접 주식 매도를 요청하는 M&A 방식",
    category: "딜 구조",
    published: false,
  },
  {
    slug: "spinoff",
    term: "스핀오프 (Spin-off)",
    tagline: "사업부를 독립 법인으로 분리해 기존 주주에게 신주를 배분하는 구조조정",
    category: "딜 구조",
    published: false,
  },
  {
    slug: "reverse-morris-trust",
    term: "Reverse Morris Trust",
    tagline: "스핀오프 후 분리 법인이 합병하는 세금 효율적 M&A 구조",
    category: "딜 구조",
    published: false,
  },
  {
    slug: "break-fee",
    term: "Break-up Fee",
    tagline: "딜 파기 시 일방이 지급하는 위약금 — 딜 완결 의지를 나타내는 신호",
    category: "딜 구조",
    published: false,
  },
  {
    slug: "mac-clause",
    term: "MAC 조항",
    tagline: "서명 후 대상 기업에 중대한 부정적 변화 발생 시 인수자가 계약을 파기할 수 있는 조항",
    category: "딜 구조",
    published: false,
  },
  // 규제·법률
  {
    slug: "antitrust",
    term: "반독점 규제",
    tagline: "M&A가 시장 경쟁을 해치는지 각국 경쟁 당국이 심사하는 절차",
    category: "규제·법률",
    published: false,
  },
  {
    slug: "regulatory-risk",
    term: "M&A 규제 리스크",
    tagline: "M&A 완료를 막거나 조건을 부과할 수 있는 규제 당국 심사의 불확실성",
    category: "규제·법률",
    published: false,
  },
  // 전략·비즈니스
  {
    slug: "strategic-ma",
    term: "전략적 M&A",
    tagline: "재무 수익보다 시장 지위·시너지·역량 확보를 주목적으로 하는 인수합병",
    category: "전략",
    published: false,
  },
  {
    slug: "vertical-integration",
    term: "수직 통합",
    tagline: "원재료부터 유통까지 공급망 전반을 한 기업이 직접 통제하는 전략",
    category: "전략",
    published: false,
  },
  {
    slug: "subscription-economy",
    term: "구독 경제",
    tagline: "일회성 판매에서 반복 구독으로 전환해 ARR·고객 잠금 효과를 높이는 비즈니스 패러다임",
    category: "전략",
    published: false,
  },
  {
    slug: "platform-strategy",
    term: "플랫폼 전략",
    tagline: "핵심 플랫폼 위에 제품·파트너를 연결해 생태계 가치를 극대화하는 전략",
    category: "전략",
    published: false,
  },
  {
    slug: "competitive-moat",
    term: "경쟁 해자",
    tagline: "경쟁자가 쉽게 모방할 수 없는 지속 가능한 경쟁 우위",
    category: "전략",
    published: false,
  },
];

const CATEGORIES = ["밸류에이션", "딜 구조", "규제·법률", "전략"] as const;

const CATEGORY_COLOR: Record<string, string> = {
  "밸류에이션": "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "딜 구조":    "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  "규제·법률":  "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  "전략":       "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
};

export default function Deal101IndexPage() {
  // 카테고리별로 몇 개의 딜이 연결됐는지 통계
  const publishedCount = CONCEPT_CATALOG.filter((c) => c.published).length;
  const totalCount = CONCEPT_CATALOG.length;

  // 각 개념별 연결된 딜 수 계산
  const dealCountBySlug: Record<string, number> = {};
  for (const concept of CONCEPT_CATALOG) {
    const href = `/deal-101/${concept.slug}`;
    dealCountBySlug[concept.slug] = ALL_DEALS.filter((d) =>
      d.concepts?.some((c) => c.href === href)
    ).length;
  }

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 히어로 ──────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full px-3 py-1 mb-4">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
              개념 × 딜 연결 아카이브
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">딜 101</h1>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              실제 딜에서 등장하는 핵심 금융 개념을 딜 사례와 연결해 학습합니다.
              각 개념 페이지에서 그 개념이 쓰인 딜을 바로 확인할 수 있습니다.
            </p>
            <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">
              {publishedCount}개 공개 · {totalCount - publishedCount}개 준비 중
            </p>
          </div>
        </section>

        {/* ── 카테고리별 개념 그리드 ───────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-12">
          {CATEGORIES.map((cat) => {
            const concepts = CONCEPT_CATALOG.filter((c) => c.category === cat);
            return (
              <section key={cat}>
                <div className="flex items-center gap-2 mb-5">
                  <span className={`text-[11px] font-bold rounded-full px-2.5 py-0.5 ${CATEGORY_COLOR[cat]}`}>
                    {cat}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{concepts.length}개 개념</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {concepts.map((concept) => {
                    const dealCount = dealCountBySlug[concept.slug] ?? 0;

                    if (concept.published) {
                      return (
                        <Link
                          key={concept.slug}
                          href={`/deal-101/${concept.slug}`}
                          className="group block rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-4 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all"
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                              {concept.term}
                            </h3>
                            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full px-2 py-0.5 flex-shrink-0 whitespace-nowrap">
                              학습하기 →
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                            {concept.tagline}
                          </p>
                          {dealCount > 0 && (
                            <p className="text-[11px] text-gray-400 dark:text-gray-500">
                              딜 {dealCount}개에서 등장
                            </p>
                          )}
                        </Link>
                      );
                    }

                    // 준비 중
                    return (
                      <div
                        key={concept.slug}
                        className="rounded-xl border border-dashed border-gray-200 dark:border-gray-700/40 bg-gray-50/50 dark:bg-gray-900/30 p-4"
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-500 leading-snug">
                            {concept.term}
                          </h3>
                          <span className="text-[10px] text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 flex-shrink-0 whitespace-nowrap">
                            준비 중
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                          {concept.tagline}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

      </main>
      <Footer />
    </>
  );
}
