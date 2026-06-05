/**
 * FDD 시리즈 Ch.5 — Case · Hertz 회계 분식 (2014-2015)
 *
 * 톤 가이드 (FDD Ch.1-4 / Valuation 시리즈 정리 버전 동일):
 *  - 자연스러운 한국어, 영어는 꼭 필요한 전문 용어만
 *  - 시각화 4개: 사건 timeline · 누적 오류 분해 · Vehicle depreciation 비교 · 주가 timeline
 *  - 모든 데이터 상수 KO/EN 분리
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { FDD_CHAPTERS, getFddChapterBySlug, getFddSeriesNav } from "@/data/fdd-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "fdd-ch05-hertz-case";
const ACCENT = "#a855f7";
const RED = "#dc2626";
const GREEN = "#16a34a";
const AMBER = "#f59e0b";

// 사건 timeline
const EVENTS = [
  {
    koDate: "2012년 11월",
    enDate: "Nov 2012",
    koEvent: "Hertz, Dollar Thrifty 인수 ($2.6B)",
    enEvent: "Hertz acquires Dollar Thrifty for $2.6B",
    koNote: "통합 과정에서 회계 정책 차이 발생",
    enNote: "Accounting policy gaps emerge in integration",
    tone: "neutral" as const,
  },
  {
    koDate: "2014년 6월",
    enDate: "Jun 2014",
    koEvent: "최초 회계 오류 공시 — \"immaterial\"로 표현",
    enEvent: "Initial error disclosure — described as 'immaterial'",
    koNote: "주가는 큰 충격 없이 $32 부근 유지",
    enNote: "Stock holds near $32 — no major hit",
    tone: "warn" as const,
  },
  {
    koDate: "2014년 7월",
    enDate: "Jul 2014",
    koEvent: "10-Q 제출 지연 — SEC 보고 의무 위반 우려",
    enEvent: "10-Q filing delayed — SEC reporting concerns",
    koNote: "오류 규모가 \"immaterial\"이 아닐 가능성 시장에 노출",
    enNote: "Market starts pricing in that the error isn't immaterial",
    tone: "warn" as const,
  },
  {
    koDate: "2014년 9월",
    enDate: "Sep 2014",
    koEvent: "추가 오류 발견 + CEO Mark Frissora 사임",
    enEvent: "More errors surfaced + CEO Mark Frissora resigns",
    koNote: "재작성 범위가 1년에서 3년 (2011-2013)으로 확장",
    enNote: "Restatement expands from one year to three (2011-2013)",
    tone: "bad" as const,
  },
  {
    koDate: "2014년 11월",
    enDate: "Nov 2014",
    koEvent: "Carl Icahn, Hertz 지분 8.5% 공개 — activist 진입",
    enEvent: "Carl Icahn discloses 8.5% stake — activist enters",
    koNote: "이사회 reshuffling 압력 · audit 강화 시작",
    enNote: "Pressure to reshuffle board + tighter audit follows",
    tone: "neutral" as const,
  },
  {
    koDate: "2015년 7월",
    enDate: "Jul 2015",
    koEvent: "최종 재작성 완료 — 누적 $235M net income 과대계상",
    enEvent: "Final restatement filed — $235M cumulative overstatement",
    koNote: "주가 $18 — 1년 전 대비 −44%",
    enNote: "Stock at $18 — down 44% from a year earlier",
    tone: "bad" as const,
  },
  {
    koDate: "2018년 12월",
    enDate: "Dec 2018",
    koEvent: "SEC, Hertz에 $16M 벌금 + Frissora 개인 $200K",
    enEvent: "SEC fines Hertz $16M + Frissora personally $200K",
    koNote: "Admit-nor-deny settlement — 책임 인정 없이 종결",
    enNote: "Admit-nor-deny settlement — resolved without admission",
    tone: "warn" as const,
  },
];

// 누적 오류 분해 ($M)
const ERROR_BREAKDOWN = [
  {
    koLine: "Vehicle Depreciation (차량 감가)",
    enLine: "Vehicle depreciation",
    val: 156,
    pct: 66,
    koDesc: "Salvage value를 너무 높게, 감가상각 expense를 너무 적게",
    enDesc: "Salvage value too high, depreciation expense too low",
  },
  {
    koLine: "Allowance for Doubtful Accounts",
    enLine: "Allowance for doubtful accounts",
    val: 40,
    pct: 17,
    koDesc: "회수 불가능한 AR에 대한 충당금 과소",
    enDesc: "Insufficient provision for uncollectible AR",
  },
  {
    koLine: "Equipment Rental Subsidiary 회계",
    enLine: "Equipment rental subsidiary accounting",
    val: 24,
    pct: 10,
    koDesc: "특정 거래의 수익 인식 timing 오류",
    enDesc: "Revenue recognition timing errors on specific transactions",
  },
  {
    koLine: "Used Vehicle Inventory",
    enLine: "Used vehicle inventory",
    val: 15,
    pct: 7,
    koDesc: "중고차 재고 손상 인식 지연",
    enDesc: "Delayed impairment of used vehicle inventory",
  },
];
const ERROR_TOTAL = 235;
const ERROR_MAX = 180;

// Vehicle depreciation 가정 비교 — Hertz 가정 vs Industry vs 실제 매각가
const DEP_COMPARE = [
  {
    koMetric: "Salvage Value (잔존가치)",
    enMetric: "Salvage value (residual)",
    hertz: 72,
    industry: 64,
    actual: 65,
    unit: "%",
    koNote: "차량 매입가 대비 잔존가치 가정",
    enNote: "Residual value as % of purchase cost",
  },
  {
    koMetric: "월 감가상각 (per car)",
    enMetric: "Monthly depreciation per car",
    hertz: 200,
    industry: 260,
    actual: 255,
    unit: "$",
    koNote: "한 대당 매월 인식한 감가상각비",
    enNote: "Monthly depreciation expense per car",
  },
  {
    koMetric: "차량 보유 기간",
    enMetric: "Hold period",
    hertz: 30,
    industry: 22,
    actual: 24,
    unit: "mo",
    koNote: "구매 후 매각까지 보유 가정 (장기일수록 감가 분산)",
    enNote: "Hold period before resale (longer = depreciation spread out)",
  },
];

// 주가 timeline ($)
const STOCK = [
  { koLabel: "2014.5 (오류 발표 전)",      enLabel: "May 2014 (pre-error)",            price: 32.0, koEvent: "Acquisition 후 정점",                  enEvent: "Post-acquisition peak" },
  { koLabel: "2014.6 (첫 발표)",           enLabel: "Jun 2014 (first disclosure)",     price: 30.5, koEvent: "Immaterial 표현으로 가벼운 하락",    enEvent: "Soft hit on 'immaterial' framing" },
  { koLabel: "2014.9 (CEO 사임)",          enLabel: "Sep 2014 (CEO out)",              price: 24.5, koEvent: "−24%, 재작성 범위 확장",                enEvent: "−24%, restatement expanded" },
  { koLabel: "2015.7 (재작성 완료)",       enLabel: "Jul 2015 (restatement done)",     price: 18.2, koEvent: "−44% 1년만에",                          enEvent: "−44% in one year" },
  { koLabel: "2016.8 (저점)",              enLabel: "Aug 2016 (trough)",               price:  8.5, koEvent: "−73%, 새 CEO·시장 환경 악화",         enEvent: "−73%, new CEO + tough market" },
  { koLabel: "2018.3 (회복)",              enLabel: "Mar 2018 (recovery)",             price: 25.0, koEvent: "활동주의·이사회 reshuffling 후",      enEvent: "After activist push + board reshuffle" },
];
const STOCK_MIN = 5;
const STOCK_MAX = 35;

const eventTone = (t: "neutral" | "warn" | "bad") => {
  if (t === "bad") return RED;
  if (t === "warn") return AMBER;
  return ACCENT;
};

export default function MaFdd05Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getFddChapterBySlug(SLUG)!;
  const { prev, next } = getFddSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={ko ? "/learn" : "/en/learn"} className="hover:text-gray-600 dark:hover:text-gray-300">Learn</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "FDD 시리즈 · Ch.5" : "FDD Series · Ch.5"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span style={{ color: ACCENT }}>{ko ? "FDD 시리즈" : "FDD Series"}</span>
            <span>·</span>
            <span>Ch.{chapter.ch}</span>
            <span>·</span>
            <span>{chapter.readingMinutes}{ko ? "분 읽기" : " min"}</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3 leading-tight">
                {ko ? chapter.titleKo : chapter.titleEn}
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? chapter.taglineKo : chapter.taglineEn}
              </p>
            </div>
            <div className="flex-shrink-0 pt-1">
              <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="top" lang={lang} />
            </div>
          </div>
        </section>

        {/* Series chapter pills */}
        <div className="max-w-3xl mx-auto px-5 mb-12">
          <div className="flex gap-1.5 flex-wrap">
            {FDD_CHAPTERS.map((ch) => {
              const isCurrent = ch.slug === SLUG;
              const isDraft = ch.status !== "published";
              return (
                <Link
                  key={ch.slug}
                  href={`${base}/${ch.slug}`}
                  className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${
                    isCurrent
                      ? "text-white"
                      : isDraft
                      ? "text-gray-400 dark:text-gray-600 bg-gray-50 dark:bg-gray-800/40 cursor-not-allowed pointer-events-none"
                      : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  style={isCurrent ? { background: ACCENT } : {}}
                >
                  Ch.{ch.ch}
                </Link>
              );
            })}
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-5 pb-16 prose-base">

          {/* § 1 — 사건 개요 + Timeline */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Long-term auditor가 놓친 $235M짜리 가정" : "The $235M assumption a long-term auditor missed"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "2014년 6월, Hertz Global Holdings가 \"이전 재무제표에 회계 오류가 있다\"고 처음 공시했어요. 표현은 \"immaterial\". 시장은 큰 충격 없이 받아들였고, 주가는 $32 부근에서 별 움직임이 없었습니다."
                : "In June 2014, Hertz Global Holdings disclosed for the first time that 'prior financial statements contain accounting errors.' The word was 'immaterial.' The market shrugged; the stock stayed near $32."}</p>
              <p>{ko
                ? "그런데 그 \"immaterial\"이 14개월 동안 점점 커졌어요. 7월에 10-Q 제출이 지연됐고, 9월에는 추가 오류가 발견되면서 CEO Mark Frissora가 사임. 11월에는 Carl Icahn이 활동주의 투자자로 등장했고, 2015년 7월에 최종 재작성이 완료됐을 때는 누적 net income 과대계상 규모가 약 $235M, 재작성 범위는 2011-2013년 3개 회계연도 전체였어요. PwC가 long-term auditor였는데도 매년 audit에서 이걸 못 잡았습니다."
                : "But that 'immaterial' grew over 14 months. The 10-Q was delayed in July; more errors surfaced in September and CEO Mark Frissora resigned. In November, Carl Icahn took an activist stake. When the final restatement landed in July 2015, the cumulative net-income overstatement was roughly $235M across three fiscal years (2011-2013). PwC was Hertz's long-term auditor — and missed it year after year."}</p>
              <p>{ko
                ? "이 챕터에서 볼 건 \"오류가 왜 일어났는지\"보다, \"왜 audit이 못 잡았는지\"와 \"buy-side FDD가 들어갔다면 어디서 신호를 봤을 수 있었는지\"예요. 같은 회사를 인수하는 입장이었다면 잡을 수 있었던 패턴들이 있었거든요."
                : "What this chapter examines isn't 'why did the errors happen' so much as 'why didn't the audit catch them?' — and 'where would a buy-side FDD have seen signals?' There were patterns an acquirer's diligence team would likely have spotted."}</p>
            </div>

            {/* Timeline */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "사건 timeline — 2012년 인수에서 2018년 SEC 벌금까지" : "Event timeline — from the 2012 acquisition to the 2018 SEC fine"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "6년에 걸친 사건의 흐름. 색깔은 시장의 부정적 강도." : "Six years of events; color tracks negative intensity."}
              </p>
              <div className="space-y-3">
                {EVENTS.map((e, i) => {
                  const color = eventTone(e.tone);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.45, delay: i * 0.07, ease: EASE }}
                      className="grid grid-cols-[auto_auto_1fr] gap-3 items-start"
                    >
                      <div className="w-24 flex-shrink-0">
                        <span className="text-[11px] font-mono font-bold" style={{ color }}>{ko ? e.koDate : e.enDate}</span>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        <span className="inline-block w-2 h-2 rounded-full" style={{ background: color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[12.5px] font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-0.5">{ko ? e.koEvent : e.enEvent}</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? e.koNote : e.enNote}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — 핵심 오류: Vehicle depreciation */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "핵심 오류 — Vehicle Depreciation 가정" : "The core error — vehicle depreciation assumption"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Rental car 산업에서 가장 큰 비용 항목이 차량 감가상각이에요. Hertz는 한 때 약 50만 대 차량을 보유했고, 차량 한 대당 월 $200~$260 정도가 감가상각으로 들어가요. 50만 대에 매월 $50씩 차이가 나면 연간 비용 차이는 $300M. EBITDA에 그대로 박힙니다."
                : "Vehicle depreciation is the single largest expense line for a rental car business. Hertz operated a fleet of roughly 500,000 vehicles, with $200-260 per car per month depreciating. A $50 difference per car per month across 500,000 cars is $300M of annual expense — landing straight on EBITDA."}</p>
              <p>{ko
                ? "감가상각을 결정하는 핵심 가정이 두 가지예요. 첫째, salvage value — 차량을 다 쓰고 매각했을 때 얼마 받을 거라 가정하는가. 둘째, 보유 기간 — 매각하기 전까지 몇 개월 굴릴 거라 가정하는가. Salvage value가 높을수록, 보유 기간이 길수록 매월 인식하는 감가가 적어지고 EBITDA가 좋아 보입니다."
                : "Two assumptions drive depreciation. Salvage value — what you assume you'll resell the car for at end of life. Hold period — how many months you assume you'll run it before selling. Higher salvage value, longer hold period → less monthly depreciation → better-looking EBITDA."}</p>
              <p>{ko
                ? "Hertz는 두 가정을 모두 산업 평균보다 공격적으로 잡고 있었어요. Avis 같은 직접 경쟁사가 salvage value를 매입가의 64% 정도로 추정할 때, Hertz는 72%로 잡았어요. 보유 기간도 Avis가 22개월일 때 Hertz는 30개월. 두 가정의 차이가 합쳐져서 감가상각이 산업 평균보다 30-40% 적게 인식됐고, 그게 그대로 EBITDA를 부풀렸습니다."
                : "Hertz held both assumptions aggressively above the industry. While Avis estimated salvage value near 64% of cost, Hertz used 72%. Hold period — Avis at 22 months, Hertz at 30. The combined effect: depreciation 30-40% below industry, inflating EBITDA correspondingly."}</p>
              <p>{ko
                ? "더 큰 문제는 그 가정이 실제 매각가와 어긋났다는 거예요. Hertz 차량이 실제로 매각될 때의 평균 회수율은 약 65%로, 자기들이 가정한 72%보다 훨씬 낮았어요. 매년 매각이 일어났으니까 \"우리 가정이 틀렸다\"는 신호가 매년 들어오고 있었던 셈입니다. 그런데도 그 신호가 financial statements까지 전해지지 않았어요."
                : "The bigger problem: the assumption diverged from actual resale outcomes. The real average recovery on Hertz vehicles was around 65% — far below the 72% assumed. Sales happened every year, so 'our assumption is wrong' was being signaled annually. The signal just never made it to the financial statements."}</p>
            </div>

            {/* Depreciation 가정 비교 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Vehicle Depreciation 가정 — Hertz vs Industry vs 실제 매각" : "Vehicle depreciation assumptions — Hertz vs industry vs actual"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "세 가정의 갭 자체가 핵심 신호." : "The gap between the three is the entire signal."}
              </p>
              <div className="space-y-4">
                {DEP_COMPARE.map((d, i) => {
                  const maxVal = Math.max(d.hertz, d.industry, d.actual) * 1.15;
                  return (
                    <div key={i}>
                      <p className="text-[12.5px] font-bold text-gray-900 dark:text-gray-100 mb-0.5">{ko ? d.koMetric : d.enMetric}</p>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 mb-2 leading-snug">{ko ? d.koNote : d.enNote}</p>
                      <div className="space-y-1.5">
                        {[
                          { label: ko ? "Hertz 가정" : "Hertz assumption", val: d.hertz, color: RED },
                          { label: ko ? "산업 평균" : "Industry average", val: d.industry, color: ACCENT },
                          { label: ko ? "실제 결과" : "Actual outcome", val: d.actual, color: GREEN },
                        ].map((row, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 w-20 flex-shrink-0">{row.label}</span>
                            <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                              <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={VP}
                                transition={{ duration: 0.5, delay: i * 0.1 + j * 0.05, ease: EASE }}
                                className="h-full rounded flex items-center justify-end pr-2 text-white text-[9.5px] font-bold"
                                style={{ width: `${(row.val / maxVal) * 100}%`, background: row.color, transformOrigin: "left" }}
                              >
                                {d.unit === "%" ? `${row.val}%` : d.unit === "$" ? `$${row.val}` : `${row.val} mo`}
                              </motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Hertz 가정은 산업과 8-30% 어긋났고, 실제 매각 결과와도 어긋났어요. 가정과 실제의 갭이 매년 누적된 게 $156M의 vehicle depreciation 오류로 이어졌습니다."
                  : "Hertz's assumptions diverged 8-30% from industry and from actual outcomes. The gap accumulated annually into the $156M depreciation error."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" likeSlug={SLUG} lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — 다른 오류 항목 + 누적 효과 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Vehicle depreciation만이 아니었다 — $235M의 구성" : "Not just depreciation — the $235M breakdown"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "재작성 결과를 분해해보면 Vehicle depreciation이 가장 컸지만 (약 $156M, 전체의 66%), 다른 항목들도 누적적으로 적지 않게 들어갔어요. 4개 항목이 같이 쌓여서 $235M이 됐습니다."
                : "Breaking down the restatement, vehicle depreciation was the largest piece (~$156M, 66%), but other items added meaningfully too. Four buckets stacked together to $235M."}</p>
              <p>{ko
                ? "두 번째로 큰 항목이 Allowance for doubtful accounts ($40M). 회수 불가능한 매출채권에 대한 충당금을 평소보다 적게 잡아두면 그만큼 net income이 부풀려져요. 이건 비교적 익숙한 회계 영역이라 audit이 잡았어야 했지만, Hertz는 historical 회수율 추이가 악화되고 있는데도 충당 비율을 그대로 유지하고 있었습니다."
                : "Second-largest: allowance for doubtful accounts ($40M). Under-reserving for uncollectible receivables inflates net income directly. This is a familiar accounting area where audit should catch issues, but Hertz kept the provision ratio steady even as historical recovery rates deteriorated."}</p>
              <p>{ko
                ? "세 번째가 Equipment Rental subsidiary의 수익 인식 timing 오류 ($24M). 특정 거래에서 수익을 인식하는 시점이 GAAP 기준보다 일찍 잡혔어요. 네 번째가 used vehicle inventory 손상 인식 지연 ($15M). 시장에서 안 팔리고 있는 중고차를 정상가로 계속 장부에 남겨둔 거예요."
                : "Third: equipment rental subsidiary revenue-recognition timing ($24M). Specific transactions had revenue recognized earlier than GAAP would allow. Fourth: delayed impairment of used vehicle inventory ($15M) — slow-moving used cars carried at full value on the books well past when they should have been written down."}</p>
              <p>{ko
                ? "주목할 부분은 네 항목이 모두 같은 방향으로 움직였다는 거예요. 모두 net income을 부풀리는 방향. 회계 가정이 한두 개 보수적이고 한두 개 공격적이면 노이즈로 볼 수 있지만, 네 항목이 모두 같은 방향이면 그건 패턴이에요. FDD가 들어갔다면 이 패턴을 잡을 수 있었을 가능성이 큽니다."
                : "What stands out: all four items moved in the same direction — all inflating net income. If accounting assumptions vary, with some conservative and some aggressive, that's noise. Four moving the same way is a pattern. An FDD engagement likely would have flagged it."}</p>
            </div>

            {/* Error breakdown */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "$235M 누적 오류의 분해" : "$235M cumulative error — breakdown"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "4개 항목 모두 net income을 부풀리는 같은 방향." : "All four items push net income in the same direction."}
              </p>
              <div className="space-y-4">
                {ERROR_BREAKDOWN.map((e, i) => {
                  const widthPct = (e.val / ERROR_MAX) * 100;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[12.5px] font-bold text-gray-900 dark:text-gray-100">{ko ? e.koLine : e.enLine}</span>
                        <span className="text-[12px] font-mono">
                          <span className="text-gray-500 dark:text-gray-400">${e.val}M · </span>
                          <span className="font-bold" style={{ color: RED }}>{e.pct}%</span>
                        </span>
                      </div>
                      <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden mb-1">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
                          className="h-full rounded"
                          style={{ width: `${widthPct}%`, background: RED, transformOrigin: "left" }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? e.koDesc : e.enDesc}</p>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-baseline justify-between rounded p-2.5" style={{ background: `${RED}1f` }}>
                <span className="text-[13px] font-bold" style={{ color: RED }}>{ko ? "= 총 누적 오류" : "= Total cumulative error"}</span>
                <span className="text-[15px] font-mono font-bold" style={{ color: RED }}>${ERROR_TOTAL}M</span>
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Audit이 왜 못 잡았나 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "왜 audit이 이걸 매년 못 잡았나" : "Why audit kept missing it, year after year"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Hertz의 auditor였던 PwC는 long-term audit 관계였어요. 같은 회사를 여러 해 audit하면 효율은 좋아지지만, 위험도 같이 따라옵니다. 가장 큰 위험이 \"가정의 inheritance\" — 작년에 통과시킨 회계 가정을 올해도 동일한 기준으로 통과시키는 패턴이에요."
                : "PwC was Hertz's long-term auditor. Long-running audits gain efficiency but accumulate risk. The biggest risk is 'assumption inheritance' — passing this year's accounting assumptions because they passed last year, using the same standard."}</p>
              <p>{ko
                ? "Salvage value 같은 가정은 매년 \"실제 매각 결과\"와 비교해서 다시 검증해야 하는데, audit이 효율을 추구하면 그 검증을 \"작년 가정이 합리적이었으니 올해도 합리적\"으로 대체하기 쉬워요. 그러는 사이에 실제 매각가가 가정에서 점점 멀어져도 그 갭이 audit work paper에 잡히지 않습니다."
                : "Salvage value should be retested every year against actual resale outcomes. But when audit chases efficiency, that test gets replaced by 'last year's assumption was reasonable, so this year's is too.' Meanwhile, the actual resale gap widens without ever landing in the audit work papers."}</p>
              <p>{ko
                ? "Hertz의 경우 한 가지 가속 요인이 더 있었어요. 2012년 Dollar Thrifty 인수입니다. $2.6B의 인수 후 두 회사의 회계 정책이 통합되는 과정에서 일부 처리가 인수자 측 (Hertz) 의 더 공격적인 가정 쪽으로 정렬됐는데, audit이 그 통합 과정의 정책 변화를 별도로 검증하지 않았습니다. Acquisition은 audit risk가 가장 높은 시기인데도요."
                : "There was an accelerant in Hertz's case — the 2012 Dollar Thrifty acquisition. As the two firms' accounting policies merged after the $2.6B deal, several items lined up with Hertz's more aggressive assumptions. Audit didn't separately verify those policy shifts during integration — exactly when audit risk runs highest."}</p>
              <p>{ko
                ? "Carl Icahn이 2014년 11월에 8.5% 지분으로 들어온 뒤에야 audit이 실질적으로 다시 진행됐어요. 활동주의 투자자가 board reshuffling을 압박하면서 audit committee가 강화됐고, 그 과정에서 그동안 검증되지 않던 가정들이 한꺼번에 노출됐습니다."
                : "Substantive audit re-engagement happened only after Carl Icahn took an 8.5% activist stake in November 2014. He pushed for board reshuffling, the audit committee got stronger, and the unchecked assumptions came out all at once."}</p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — FDD가 들어갔다면 + 주가 timeline */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "FDD가 들어갔다면 어디서 신호를 봤을까" : "Where an FDD would have seen the signals"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Hertz는 인수 거래 대상이었던 적이 없어서 buy-side FDD가 실제로 들어가진 않았지만, 만약 들어갔다면 어떤 신호를 어디서 봤을지를 정리해보면 FDD가 audit과 무엇이 다른지가 잘 드러나요. 다섯 가지 표준 checkpoint가 있어요."
                : "Hertz wasn't ever an acquisition target, so an actual buy-side FDD never ran. But laying out what an FDD would have looked for shows clearly where FDD's lens differs from audit's. Five standard checkpoints."}</p>
              <p>{ko
                ? "첫째, Vehicle depreciation 가정의 peer comparison. Avis·Enterprise 같은 직접 경쟁사의 공시된 가정과 비교했다면 Hertz의 salvage value 72% vs 산업 평균 64%의 갭이 즉시 보였을 거예요. 산업 평균에서 8%p 떨어진 가정은 default red flag입니다."
                : "First, peer benchmarking on the depreciation assumption. Comparing Avis and Enterprise's disclosed assumptions would have immediately surfaced the 72% vs 64% gap. 8 percentage points off industry is a default red flag."}</p>
              <p>{ko
                ? "둘째, Salvage value 가정 vs 실제 매각가의 historical 비교. 회사가 자체적으로 \"우리가 가정한 잔존가치 vs 실제 매각가\" 자료를 갖고 있을 텐데, 그 자료를 요청해서 분석하면 가정이 매년 실제보다 7-10%p 위에 있다는 게 드러나요. 이게 FDD가 audit과 다른 점이에요. Audit은 \"가정이 합리적인가\"를 묻고, FDD는 \"실제와 어떻게 어긋났는가\"를 묻습니다."
                : "Second, salvage assumption vs actual resale, historically. The company would internally hold 'assumed residual vs actual resale' data; pulling it in diligence would show the assumption running 7-10pp above actuals every year. This is where FDD differs from audit. Audit asks 'is the assumption reasonable?' FDD asks 'how has it diverged from reality?'"}</p>
              <p>{ko
                ? "셋째, AR aging bucket 분석과 historical 회수율 추이. Allowance for doubtful accounts 비율이 historical 회수 패턴과 일치하지 않으면 그 자체가 신호. 넷째, Used vehicle inventory aging — 6개월 이상 보유한 차량 비중이 늘어나면 손상 인식이 늦어지고 있다는 신호. 다섯째, Acquisition 후 회계 정책 통합 검증 — Dollar Thrifty 인수 후 가정이 어떤 방향으로 정렬됐는지 비교하면 \"공격적 정렬\" 패턴이 보입니다."
                : "Third, AR aging analysis vs historical recovery — if the allowance ratio doesn't track historical recovery patterns, that's a signal by itself. Fourth, used vehicle inventory aging — a rising share of >6-month-held cars signals delayed impairment. Fifth, post-acquisition policy alignment review — looking at how assumptions converged after Dollar Thrifty would surface an 'aggressive alignment' pattern."}</p>
              <p>{ko
                ? "이 다섯 가지 checkpoint는 모두 standard buy-side FDD의 표준 작업 안에 들어 있는 것들이에요. 즉 Hertz를 인수하려는 누군가가 있었다면 \"미발견된 hidden liability\" 형태가 아니라 발견됐을 가능성이 큽니다. 그 결과 가격 협상에서 EBITDA 조정 또는 indemnification 조항으로 처리됐을 거고요."
                : "All five sit inside the standard buy-side FDD playbook. Meaning if anyone had been acquiring Hertz, the issues likely wouldn't have stayed a hidden liability — they'd have been found, and either repriced via EBITDA adjustment or pinned down through indemnification."}</p>
            </div>

            {/* 주가 timeline */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Hertz 주가 — 오류 발표부터 회복까지 ($)" : "Hertz stock price — from disclosure to recovery ($)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "$32 → 저점 $8.5 (−73%) → $25로 부분 회복." : "$32 → trough $8.5 (−73%) → partial recovery to $25."}
              </p>
              <div className="space-y-2.5">
                {STOCK.map((s, i) => {
                  const widthPct = ((s.price - STOCK_MIN) / (STOCK_MAX - STOCK_MIN)) * 100;
                  const isTrough = i === 4;
                  const isPeak = i === 0;
                  const isRecover = i === 5;
                  const color = isTrough ? RED : isPeak ? ACCENT : isRecover ? GREEN : `${ACCENT}90`;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-32 flex-shrink-0">
                        <p className="text-[11px] font-medium text-gray-700 dark:text-gray-300 leading-tight">{ko ? s.koLabel : s.enLabel}</p>
                      </div>
                      <div className="flex-1 h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ opacity: 0, scaleX: 0 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                          className="h-full rounded flex items-center justify-end pr-2 text-white text-[10px] font-bold"
                          style={{ width: `${widthPct}%`, background: color, transformOrigin: "left" }}
                        >
                          ${s.price.toFixed(1)}
                        </motion.div>
                      </div>
                      <div className="w-56 flex-shrink-0">
                        <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? s.koEvent : s.enEvent}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "고점에서 저점까지 약 4년, 시총으로는 약 $11B이 사라졌다가 일부 회복. 회계 오류 자체보다는 그 발견 과정에서 노출된 \"내부 통제 실패\"가 더 큰 가치 파괴 원인이었습니다."
                  : "Roughly four years from peak to trough — about $11B of market cap erased, then partially recovered. The internal-control failures exposed during discovery destroyed more value than the accounting errors themselves."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "Hertz 케이스가 FDD 시리즈에 남기는 것은 명확해요. Audit이 잡을 수 없는 종류의 회계 오류가 존재하고, 그게 buy-side FDD의 lens에서는 잡힐 수 있다는 점. 다음 챕터의 Tesco 케이스는 더 의도적인 종류의 회계 manipulation을 봅니다 — 공급업체 rebate 인식을 미리 당겨서 EBITDA를 인위적으로 부풀린 사건이에요."
                : "What Hertz leaves for the FDD series is clear. There's a class of accounting errors audit can't catch — and buy-side FDD can. The next chapter's Tesco case examines a more deliberate kind of manipulation — pulling forward supplier rebate recognition to inflate EBITDA."}</p>
            </div>
          </motion.section>

          {/* 한 줄 정리 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <div className="rounded-lg p-5" style={{ background: `${ACCENT}0F`, border: `1px solid ${ACCENT}40` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{ko ? "한 줄로 정리하면" : "In one line"}</p>
              <p className="text-[15px] font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">{ko
                ? "Hertz는 멀쩡해 보이던 회계 밑에서 fleet·리스 구조가 어떻게 무너졌는지를 보여준다. FDD가 놓치면 인수 후에 폭탄이 된다."
                : "Hertz shows how fleet and lease structures collapsed beneath clean-looking accounts. What FDD misses becomes a post-deal bomb."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.6 — {ko ? "Case · Tesco £263M Accounting Scandal (2014)" : "Case · Tesco £263M accounting scandal (2014)"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "공급업체 rebate 인식을 미리 당겨서 EBITDA를 부풀린 패턴, PwC가 long-term audit이었는데도 못 잡은 신호들, Serious Fraud Office 기소 과정. Hertz와 비슷한 audit 실패지만 \"의도성\"의 정도가 다른 케이스."
                  : "Pulling supplier rebates forward to inflate EBITDA, the signals PwC missed despite being long-term auditor, and the Serious Fraud Office prosecution. Similar audit failure pattern as Hertz, with a different degree of intent."}
              </p>
            </div>
          </motion.section>

          {/* Bottom share */}
          <ShareButtons
            title={ko ? chapter.titleKo : chapter.titleEn}
            variant="bottom"
            lang={lang}
            readingMinutes={chapter.readingMinutes}
          />

          {/* Series prev/next */}
          {(prev || next) && (
            <div className="mt-6">
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
                next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
              />
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
