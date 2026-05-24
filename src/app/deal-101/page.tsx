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
    slug: "synergy",
    term: "시너지 (Synergy)",
    tagline: "M&A 프리미엄의 근거 — Cost Synergy vs Revenue Synergy, 그리고 왜 70%의 M&A가 시너지를 달성 못하는가",
    category: "밸류에이션",
    published: true,
  },
  {
    slug: "acquisition-premium",
    term: "인수 프리미엄",
    tagline: "왜 시장가보다 30~40% 더 내는가 — 시너지·경영권·희소성이 만드는 프리미엄의 원천",
    category: "밸류에이션",
    published: true,
  },
  {
    slug: "ev-sales",
    term: "EV/Sales 멀티플",
    tagline: "EBITDA 적자 성장기 기업을 평가할 때 쓰는 매출 기반 밸류에이션 — Slack 26x, Figma 50x의 근거",
    category: "밸류에이션",
    published: true,
  },
  {
    slug: "arr-multiple",
    term: "ARR 멀티플",
    tagline: "SaaS 기업 전용 — 연간반복매출 대비 기업가치 배수와 버블·조정 사이클",
    category: "밸류에이션",
    published: true,
  },
  {
    slug: "saas-valuation",
    term: "SaaS 밸류에이션",
    tagline: "ARR·NRR·Rule of 40 — 구독 소프트웨어 기업을 완전히 다른 방식으로 평가하는 이유",
    category: "밸류에이션",
    published: true,
  },
  // 딜 구조
  {
    slug: "ma-process",
    term: "M&A 프로세스 완전 정리",
    tagline: "전략 수립부터 클로징까지 6단계 — 이해관계자·핵심 문서·딜이 성공하고 실패하는 이유",
    category: "딜 구조",
    published: true,
  },
  {
    slug: "lbo",
    term: "LBO (레버리지 바이아웃)",
    tagline: "타깃의 현금흐름을 담보로 차입해 에쿼티 투입을 최소화하는 PE 핵심 전략 — KKR의 RJR 나비스코부터 현대 PE까지",
    category: "딜 구조",
    published: true,
  },
  {
    slug: "tender-offer",
    term: "공개매수 (Tender Offer)",
    tagline: "이사회를 건너뛰고 주주에게 직접 매수 제안 — 머스크·트위터부터 방어 전략까지",
    category: "딜 구조",
    published: true,
  },
  {
    slug: "spinoff",
    term: "스핀오프 (Spin-off)",
    tagline: "사업부를 독립 법인으로 분리해 숨겨진 가치를 꺼내는 전략 — PayPal, GE 3분할",
    category: "딜 구조",
    published: true,
  },
  {
    slug: "reverse-morris-trust",
    term: "Reverse Morris Trust",
    tagline: "스핀오프 후 합병으로 수십억 달러 세금을 절감하는 구조 — AT&T·WarnerMedia 사례",
    category: "딜 구조",
    published: true,
  },
  {
    slug: "stock-vs-asset-deal",
    term: "주식 인수 vs 자산 인수",
    tagline: "같은 회사를 인수해도 구조 하나로 세금·부채·리스크가 달라진다 — Stock Deal vs Asset Deal 결정 기준",
    category: "딜 구조",
    published: true,
  },
  {
    slug: "pmi",
    term: "PMI (인수 후 통합)",
    tagline: "딜이 끝난 뒤 진짜 전쟁 — 조직·IT·문화 통합 실패가 M&A 가치를 갉아먹는 이유",
    category: "딜 구조",
    published: true,
  },
  {
    slug: "ipo-vs-ma-exit",
    term: "IPO vs M&A 엑싯",
    tagline: "PE·VC 포트폴리오 매각의 두 갈래 — 상장과 전략적 매각 중 어떤 선택이 더 유리한가",
    category: "딜 구조",
    published: true,
  },
  {
    slug: "break-fee",
    term: "Break-up Fee",
    tagline: "딜 파기 시 일방이 지급하는 위약금 — 딜 완결 의지를 나타내는 신호",
    category: "딜 구조",
    published: true,
  },
  {
    slug: "mac-clause",
    term: "MAC 조항",
    tagline: "서명 후 대상 기업에 중대한 부정적 변화 발생 시 인수자가 계약을 파기할 수 있는 조항",
    category: "딜 구조",
    published: true,
  },
  // 규제·법률
  {
    slug: "antitrust",
    term: "반독점 규제 (Antitrust)",
    tagline: "M&A가 시장 경쟁을 해치는지 각국 경쟁 당국이 심사하는 절차 — Adobe×Figma 파국의 진짜 이유",
    category: "규제·법률",
    published: true,
  },
  {
    slug: "regulatory-risk",
    term: "M&A 규제 리스크",
    tagline: "반독점·안보심사·섹터 규제까지 — 딜을 막는 5가지 보이지 않는 벽과 대응 전략",
    category: "규제·법률",
    published: true,
  },
  // 실사 (Due Diligence)
  {
    slug: "fdd",
    term: "재무 실사 (FDD)",
    tagline: "재무제표 이면을 파헤치는 실사 — 정상화 EBITDA·운전자본·잠재부채를 검증하는 방법론",
    category: "실사",
    published: true,
  },
  {
    slug: "cdd",
    term: "상업 실사 (CDD)",
    tagline: "시장·고객·경쟁 구도를 검증해 성장 가정의 현실성을 따지는 실사",
    category: "실사",
    published: true,
  },
  {
    slug: "ldd",
    term: "법무 실사 (LDD)",
    tagline: "계약·소송·지식재산·규제 리스크를 발굴해 딜 파기 또는 가격 조정의 근거를 만드는 실사",
    category: "실사",
    published: true,
  },
  // 전략·비즈니스
  {
    slug: "strategic-ma",
    term: "전략적 M&A",
    tagline: "재무 수익이 아닌 시장 지위·기술·인재 확보 — Meta×Instagram $1B가 왜 역대 최고의 딜인가",
    category: "전략",
    published: true,
  },
  {
    slug: "vertical-integration",
    term: "수직 통합",
    tagline: "공급망을 직접 소유해 원가·품질·경쟁을 통제하는 전략 — Amazon·Apple이 왜 모든 것을 만드는가",
    category: "전략",
    published: true,
  },
  {
    slug: "subscription-economy",
    term: "구독 경제",
    tagline: "일회성 판매에서 ARR로 — Adobe가 $10B에서 $330B이 된 구독 전환의 경제학",
    category: "전략",
    published: true,
  },
  {
    slug: "platform-strategy",
    term: "플랫폼 전략",
    tagline: "네트워크 효과가 만드는 M&A 프리미엄 — Google×YouTube, Microsoft×LinkedIn의 공통점",
    category: "전략",
    published: true,
  },
  {
    slug: "competitive-moat",
    term: "경쟁 해자",
    tagline: "버핏의 해자 개념으로 보는 M&A 멀티플 — 네트워크 효과·전환 비용·브랜드·규모의 경제",
    category: "전략",
    published: true,
  },
];

const CATEGORIES = ["밸류에이션", "딜 구조", "실사", "규제·법률", "전략"] as const;

const CATEGORY_COLOR: Record<string, string> = {
  "밸류에이션": "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "딜 구조":    "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  "실사":       "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
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
