/**
 * Fund 시리즈 Ch.2 — LPA 핵심 조항과 출자 메커니즘
 *
 * 톤 가이드 (Fund Ch.1 동일):
 *  - 자연스러운 한국어 + 영어 전문 용어
 *  - 시각화 4개: LPA 조항 매트릭스 · Capital Call J-curve · Management Fee 구조 변화 · Distribution Waterfall
 *  - 모든 데이터 상수 KO/EN 분리
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { FUND_CHAPTERS, getFundChapterBySlug, getFundSeriesNav } from "@/data/fund-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "fund-ch02-lpa-mechanics";
const ACCENT = "#f59e0b";
const BLUE = "#2563eb";
const GREEN = "#16a34a";
const RED = "#dc2626";
const PURPLE = "#a855f7";

// LPA 조항 매트릭스 — 4 카테고리
const LPA_TERMS = [
  {
    koCategory: "Economic Terms",
    enCategory: "Economic Terms",
    color: ACCENT,
    items: [
      { koName: "Management Fee",   enName: "Management Fee",   koVal: "2% on committed → 1.5% post-investment", enVal: "2% on committed → 1.5% post-investment" },
      { koName: "Carried Interest", enName: "Carried Interest", koVal: "20% of profit (above hurdle)",            enVal: "20% of profit (above hurdle)" },
      { koName: "Hurdle Rate",      enName: "Hurdle Rate",      koVal: "8% preferred return (compound)",          enVal: "8% preferred return (compounded)" },
      { koName: "GP Commitment",    enName: "GP Commitment",    koVal: "1-2% of fund size (skin in the game)",   enVal: "1-2% of fund size (skin in the game)" },
      { koName: "Catch-up",         enName: "Catch-up",         koVal: "100% to GP until 20/80 ratio restored",  enVal: "100% to GP until 20/80 ratio restored" },
    ],
  },
  {
    koCategory: "Governance",
    enCategory: "Governance",
    color: BLUE,
    items: [
      { koName: "Investment Period",  enName: "Investment Period",   koVal: "5년 — 신규 투자 가능 기간",       enVal: "5 years — window for new investments" },
      { koName: "Fund Term",          enName: "Fund Term",            koVal: "10년 + 1-2년 extension option",   enVal: "10 years + 1-2 year extensions" },
      { koName: "Key Person",         enName: "Key Person",           koVal: "주요 GP 2-3명 이탈 시 fund 정지",   enVal: "Investment pauses if 2-3 key GPs leave" },
      { koName: "LP Advisory (LPAC)", enName: "LP Advisory (LPAC)",  koVal: "주요 LP 5-10명. Conflict approve.", enVal: "5-10 anchor LPs. Approves conflicts." },
      { koName: "Investment Restr.",   enName: "Investment Restr.",   koVal: "단일 deal max 10-15% of fund",     enVal: "Single deal max 10-15% of fund" },
    ],
  },
  {
    koCategory: "LP Protection",
    enCategory: "LP Protection",
    color: PURPLE,
    items: [
      { koName: "MFN (Most-Favored Nation)", enName: "MFN clause",       koVal: "다른 LP의 better term을 동일하게 적용",   enVal: "Right to match any better terms granted to other LPs" },
      { koName: "No-fault Divorce",          enName: "No-fault divorce", koVal: "LP 75% 동의 시 GP 교체 가능",            enVal: "75% LP vote can remove GP without cause" },
      { koName: "For-cause Removal",         enName: "For-cause removal", koVal: "Fraud·gross negligence — 다수결",         enVal: "Fraud or gross negligence — simple majority" },
      { koName: "Suspension Trigger",        enName: "Suspension trigger", koVal: "주요 GP·core team 이탈 → 자동 정지",   enVal: "Core team departure → automatic pause" },
    ],
  },
  {
    koCategory: "Reporting & Audit",
    enCategory: "Reporting & Audit",
    color: GREEN,
    items: [
      { koName: "Quarterly Reports",  enName: "Quarterly reports",   koVal: "분기 NAV + portfolio 업데이트",         enVal: "Quarterly NAV + portfolio update" },
      { koName: "Annual Audit",        enName: "Annual audit",         koVal: "Big 4 회계법인 의무",                    enVal: "Big 4 audit required" },
      { koName: "Annual Meeting",      enName: "Annual meeting",       koVal: "GP가 LP 전원에게 portfolio 발표",       enVal: "GP presents portfolio to full LP base" },
      { koName: "ILPA Standards",      enName: "ILPA standards",       koVal: "Institutional LP Association 표준 reporting", enVal: "Institutional LP Association reporting templates" },
    ],
  },
];

// Capital Call J-curve — 10년 흐름
// Year, drawdown, distribution, cumulative net cash flow
const JCURVE = [
  { year: "Y1",  drawdown: -20, distribution:   0, koEvent: "첫 deal closing — 첫 capital call",     enEvent: "First deal closing — first capital call" },
  { year: "Y2",  drawdown: -25, distribution:   0, koEvent: "Active investment — 매분기 drawdown",   enEvent: "Active investment — quarterly drawdowns" },
  { year: "Y3",  drawdown: -25, distribution:   2, koEvent: "Investment peak — 작은 첫 exit",        enEvent: "Investment peak — small first exit" },
  { year: "Y4",  drawdown: -15, distribution:   8, koEvent: "Investment period 끝 근접",              enEvent: "End of investment period nearing" },
  { year: "Y5",  drawdown: -10, distribution:  18, koEvent: "Investment period 종료 · Mgmt fee 감소",  enEvent: "Investment period ends · mgmt fee drops" },
  { year: "Y6",  drawdown:  -3, distribution:  30, koEvent: "Holding 주력 · 큰 exits 시작",            enEvent: "Holding phase · major exits begin" },
  { year: "Y7",  drawdown:   0, distribution:  35, koEvent: "Peak distribution year",                 enEvent: "Peak distribution year" },
  { year: "Y8",  drawdown:   0, distribution:  30, koEvent: "Distribution 지속",                       enEvent: "Distributions continue" },
  { year: "Y9",  drawdown:   0, distribution:  15, koEvent: "Wind-down 진입",                          enEvent: "Wind-down phase" },
  { year: "Y10", drawdown:   0, distribution:   7, koEvent: "Fund term 종료 · 잔여자산 distribute",   enEvent: "Fund term ends · residual distributed" },
];

// 누적 net cash flow 계산
let cumNet = 0;
const JCURVE_WITH_CUM = JCURVE.map((j) => {
  cumNet += j.drawdown + j.distribution;
  return { ...j, cumNet };
});

// Management Fee 구조 변화 — 10년
const MGMT_FEE_TIMELINE = [
  { year: "Y1-Y5", koPhase: "Investment Period", enPhase: "Investment Period", rate: 2.0, basis: "committed",  koDesc: "2.0% × Committed Capital",       enDesc: "2.0% × committed capital" },
  { year: "Y6-Y7", koPhase: "Post-Investment",   enPhase: "Post-Investment",   rate: 1.5, basis: "invested",   koDesc: "1.5% × Invested Capital",        enDesc: "1.5% × invested capital" },
  { year: "Y8-Y10", koPhase: "Wind-down",        enPhase: "Wind-down",         rate: 1.0, basis: "NAV",        koDesc: "1.0% × NAV (잔여 자산 가치)",     enDesc: "1.0% × NAV (residual asset value)" },
];

// Cumulative fee 계산 — $1B fund 기준
const CUM_FEE_CALC = [
  { koLabel: "Y1-Y5 (5 years × 2% × $1,000M)", enLabel: "Y1-Y5 (5 yrs × 2% × $1,000M)", val: 100 },
  { koLabel: "Y6-Y7 (2 years × 1.5% × $800M avg)", enLabel: "Y6-Y7 (2 yrs × 1.5% × $800M avg)", val: 24 },
  { koLabel: "Y8-Y10 (3 years × 1.0% × $400M avg)", enLabel: "Y8-Y10 (3 yrs × 1.0% × $400M avg)", val: 12 },
];

// Distribution Waterfall — $1B fund, 2.5x MOIC ($2.5B gross)
const WATERFALL = [
  {
    koStep: "Return of Capital",
    enStep: "Return of capital",
    val: 1000,
    cumLp: 1000,
    cumGp: 0,
    color: "#94a3b8",
    koDesc: "LP 출자 원금 회수 — 100%까지 LP에게",
    enDesc: "LPs get capital back — 100% to LPs until full return",
  },
  {
    koStep: "Preferred Return (8%)",
    enStep: "Preferred return (8%)",
    val: 469,
    cumLp: 1469,
    cumGp: 0,
    color: BLUE,
    koDesc: "8% IRR까지 LP에게 100% — $1B × (1.08)^5 − $1B ≈ $469M",
    enDesc: "100% to LPs until 8% IRR — $1B × (1.08)^5 − $1B ≈ $469M",
  },
  {
    koStep: "GP Catch-up (100% to GP)",
    enStep: "GP catch-up (100% to GP)",
    val: 117,
    cumLp: 1469,
    cumGp: 117,
    color: PURPLE,
    koDesc: "GP가 catch-up까지 100% 받아 20/80 비율 회복",
    enDesc: "100% to GP until the 20/80 ratio is restored",
  },
  {
    koStep: "80/20 Split",
    enStep: "80/20 split",
    val: 914,
    cumLp: 2200,
    cumGp: 300,
    color: ACCENT,
    koDesc: "남은 profit pool을 LP 80% / GP 20%로 분배",
    enDesc: "Remaining profit pool: LP 80% / GP 20%",
  },
];

// Side letter 표준 항목 (대형 LP만 받음)
const SIDE_LETTERS = [
  { koItem: "MFN Right",           enItem: "MFN right",            koDesc: "다른 LP가 받은 better term을 즉시 동일 적용", enDesc: "Right to immediately match better terms granted to other LPs" },
  { koItem: "Fee Discount",         enItem: "Fee discount",          koDesc: "$500M+ commit 시 management fee 25-50bps 할인", enDesc: "25-50bps mgmt fee discount for $500M+ commits" },
  { koItem: "Co-investment Right",  enItem: "Co-investment right",   koDesc: "Deal 단위로 추가 출자 가능 (fee 없이)",          enDesc: "Right to invest extra capital deal-by-deal (no fees)" },
  { koItem: "LPAC Seat",            enItem: "LPAC seat",             koDesc: "LP Advisory Committee 멤버십",                  enDesc: "Seat on the LP Advisory Committee" },
  { koItem: "ESG · Excused Inv.",   enItem: "ESG / excused inv.",    koDesc: "특정 산업 (담배·무기·도박) 투자 제외 권리",      enDesc: "Right to be excused from certain industries (tobacco, weapons, gambling)" },
  { koItem: "Most Favored Reporting", enItem: "Most-favored reporting", koDesc: "다른 LP가 받는 모든 reporting을 동일하게 받음",   enDesc: "Right to receive any reporting other LPs receive" },
];

export default function MaFund02Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getFundChapterBySlug(SLUG)!;
  const { prev, next } = getFundSeriesNav(SLUG);
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Fund 시리즈 · Ch.2" : "Fund Series · Ch.2"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span style={{ color: ACCENT }}>{ko ? "Fund 시리즈" : "Fund Series"}</span>
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
            {FUND_CHAPTERS.map((ch) => {
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

          {/* § 1 — LPA 구조 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "LPA — 100페이지짜리 출자 계약의 핵심 19개 조항" : "The LPA — 100 pages, 19 terms that matter"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "LP가 GP에게 자본을 commit할 때 서명하는 계약이 LPA (Limited Partnership Agreement) 예요. 분량은 보통 80-150 페이지. legal review에 LP 측 법무팀이 4-8주를 씁니다. 그런데 그 100페이지 안에서 실제로 협상이 일어나는 건 19개 조항 정도 — 나머지는 boilerplate 또는 표준 시장 관행이에요."
                : "When an LP commits capital, the document they sign is the LPA (Limited Partnership Agreement). Typically 80-150 pages. LP-side legal review takes 4-8 weeks. But the negotiated content sits in roughly 19 terms — the rest is boilerplate or standard market practice."}</p>
              <p>{ko
                ? "이 19개 조항을 4가지 카테고리로 정리할 수 있어요. (1) Economic Terms — Management fee, Carry, Hurdle, GP commitment. \"누가 얼마 받는가\". (2) Governance — Investment Period, Fund Term, Key Person, LPAC. \"누가 결정하는가\". (3) LP Protection — MFN, No-fault Divorce, For-cause Removal. \"LP가 어떻게 보호받는가\". (4) Reporting — Quarterly NAV, Annual Audit. \"LP가 무엇을 받아보는가\"."
                : "Group those 19 terms into four categories. (1) Economic Terms — management fee, carry, hurdle, GP commit. 'Who gets what.' (2) Governance — investment period, fund term, key person, LPAC. 'Who decides.' (3) LP Protection — MFN, no-fault divorce, for-cause removal. 'How LPs are protected.' (4) Reporting — quarterly NAV, annual audit. 'What LPs see.'"}</p>
              <p>{ko
                ? "이번 챕터에서는 이 4 카테고리의 핵심 조항들을 본 다음, 그중에서도 실무에서 가장 자주 협상되는 \"Capital Call\", \"Management Fee 구조\", \"Distribution Waterfall\" 3가지 메커니즘을 깊이 들어갑니다. 마지막에 대형 LP만 받을 수 있는 Side Letter 까지."
                : "This chapter walks the four categories, then digs into the three most-negotiated mechanics — capital calls, the management fee structure, and the distribution waterfall. Closes with the side letters only large LPs get."}</p>
            </div>

            {/* LPA 조항 매트릭스 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "LPA 19개 핵심 조항 — 4 카테고리" : "LPA's 19 key terms — by category"}
              </p>
              <div className="space-y-4">
                {LPA_TERMS.map((cat, ci) => (
                  <motion.div
                    key={ci}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.45, delay: ci * 0.08, ease: EASE }}
                    className="rounded-lg p-4 border"
                    style={{ borderColor: cat.color + "60", background: cat.color + "0d" }}
                  >
                    <p className="text-[12px] font-bold mb-3 uppercase tracking-wider" style={{ color: cat.color }}>{ko ? cat.koCategory : cat.enCategory}</p>
                    <div className="space-y-1.5">
                      {cat.items.map((it, i) => (
                        <div key={i} className="grid grid-cols-[140px_1fr] gap-3 items-baseline">
                          <span className="text-[11.5px] font-semibold text-gray-900 dark:text-gray-100">{ko ? it.koName : it.enName}</span>
                          <span className="text-[11px] text-gray-600 dark:text-gray-400 leading-snug">{ko ? it.koVal : it.enVal}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "이 19개 조항이 대부분의 LP-GP 협상의 90%를 차지. 나머지 100페이지는 jurisdiction · tax · regulatory boilerplate."
                  : "These 19 terms cover 90% of LP-GP negotiation. The other ~100 pages are jurisdiction, tax, and regulatory boilerplate."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — Capital Call J-curve */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Commitment vs Drawdown — J-curve의 정체" : "Commitment vs drawdown — what the J-curve actually is"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "LP가 \"$100M commit\" 한다고 해서 closing day에 $100M을 한 번에 이체하는 게 아니에요. 실제로는 GP가 deal을 closing할 때마다 \"capital call\" 을 보내서 필요한 금액만 가져가는 구조. \"Committed\" 자본은 약속이고, \"Drawn\" 자본이 실제로 fund 안에 들어온 돈이에요. 두 숫자가 같아지는 데 보통 5년 걸립니다."
                : "An LP committing '$100M' doesn't wire $100M on closing day. The GP calls capital as deals close — 'committed' is the promise, 'drawn' is what's actually in the fund. Five years to equalize, typically."}</p>
              <p>{ko
                ? "Capital call이 오면 LP는 보통 10영업일 안에 송금해야 해요. 미응시 (default) 하면 LPA에 정해진 패널티가 작동하는데, 보통 그 시점까지 출자한 금액의 50%를 GP가 fund의 ongoing cost 보전을 위해 forfeit 처리할 수 있어요. 그래서 LP는 자기 cash position을 capital call schedule에 맞춰 관리하는 게 cash management의 핵심 작업이에요."
                : "Once a capital call hits, the LP usually has 10 business days to wire. Default triggers LPA-defined penalties — typically forfeiture of up to 50% of capital previously contributed. So matching cash position to the call schedule is core LP cash management."}</p>
              <p>{ko
                ? "결과적으로 LP의 cash flow는 \"J-curve\" 모양이 돼요. Y1-Y5는 negative — capital이 계속 들어가는데 distribution은 아직 작음. Y5-Y10는 positive — distribution이 본격적으로 들어오면서 누적 net cash flow가 회복. Top quartile fund면 cumulative net cash flow가 +2.5x committed까지 가지만, bottom quartile은 1x도 못 채우고 끝나기도 해요."
                : "The result is the J-curve. Y1-Y5: negative — capital goes out, distributions trickle. Y5-Y10: positive — distributions accelerate, cumulative net cash flow recovers. Top-quartile funds reach +2.5× committed. Bottom-quartile funds don't even return 1×."}</p>
            </div>

            {/* J-curve chart */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Capital Call J-curve — $100M commit 기준 (% of committed)" : "Capital call J-curve — % of $100M commitment"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "빨강 = drawdown (자본 유출). 녹색 = distribution (자본 회수). 회색 선 = 누적 net cash flow." : "Red = drawdown (outflows). Green = distributions. Grey line = cumulative net cash flow."}
              </p>

              <div className="space-y-2.5">
                {JCURVE_WITH_CUM.map((j, i) => {
                  const drawWidth = Math.abs(j.drawdown);
                  const distWidth = j.distribution;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                      className="grid grid-cols-[40px_1fr_auto] gap-3 items-center"
                    >
                      <span className="text-[10.5px] font-mono font-bold text-gray-500 dark:text-gray-400">{j.year}</span>
                      <div className="flex items-center">
                        <div className="w-1/2 flex justify-end h-4">
                          {drawWidth > 0 && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={VP}
                              transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: EASE }}
                              className="h-full rounded-l text-white text-[9px] font-bold flex items-center pl-2"
                              style={{ width: `${drawWidth * 2}%`, background: RED, transformOrigin: "right" }}
                            >
                              {j.drawdown}%
                            </motion.div>
                          )}
                        </div>
                        <div className="w-px h-5 bg-gray-300 dark:bg-gray-600" />
                        <div className="w-1/2 h-4">
                          {distWidth > 0 && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={VP}
                              transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: EASE }}
                              className="h-full rounded-r text-white text-[9px] font-bold flex items-center pl-2"
                              style={{ width: `${distWidth * 2}%`, background: GREEN, transformOrigin: "left" }}
                            >
                              +{j.distribution}%
                            </motion.div>
                          )}
                        </div>
                      </div>
                      <span className="text-[10.5px] font-mono font-bold flex-shrink-0 w-20 text-right" style={{ color: j.cumNet < 0 ? RED : GREEN }}>
                        {j.cumNet >= 0 ? "+" : ""}{j.cumNet}%
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Phase markers */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] text-center">
                <div className="rounded p-2" style={{ background: RED + "0d", border: `1px solid ${RED}30` }}>
                  <p className="font-bold" style={{ color: RED }}>Y1-Y5</p>
                  <p className="text-gray-500 dark:text-gray-400">{ko ? "Investment Period" : "Investment period"}</p>
                </div>
                <div className="rounded p-2" style={{ background: ACCENT + "0d", border: `1px solid ${ACCENT}30` }}>
                  <p className="font-bold" style={{ color: ACCENT }}>Y4-Y7</p>
                  <p className="text-gray-500 dark:text-gray-400">{ko ? "Crossover · 본격 exit" : "Crossover · exits ramp"}</p>
                </div>
                <div className="rounded p-2" style={{ background: GREEN + "0d", border: `1px solid ${GREEN}30` }}>
                  <p className="font-bold" style={{ color: GREEN }}>Y6-Y10</p>
                  <p className="text-gray-500 dark:text-gray-400">{ko ? "Distribution 단계" : "Distribution phase"}</p>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "누적 net cash flow가 0을 넘는 시점이 보통 Y5-Y6 (\"crossover\"). 그 시점까지 LP는 \"불안한 기간\". Crossover 시점이 늦거나 안 오면 fund가 underperforming 신호."
                  : "Cumulative net cash flow crossing zero typically lands Y5-Y6 ('crossover'). Until then, the LP sits in the anxious zone. Late or absent crossover signals underperformance."}
              </p>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — Management Fee 구조 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Management Fee — 시간이 흐를수록 줄어드는 구조" : "Management fee — the rate that shrinks over time"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "\"2 and 20\" 의 \"2\"가 management fee예요. 그런데 이 2%가 fund 전체 lifecycle 내내 같은 base에 적용되는 게 아니에요. 시점에 따라 fee rate와 base가 달라집니다. 이 구조 자체가 PE의 standard market practice가 됐어요."
                : "The '2' in '2 and 20' is the management fee. But it doesn't apply to the same base for the whole life of the fund. Rate and base both shift over the lifecycle — a structure that's become standard market practice."}</p>
              <p>{ko
                ? "Y1-Y5의 Investment Period에는 2.0% × Committed Capital. 매년 $20M (10B fund면 $20M). 이 기간에 GP는 deal sourcing·DD·invest 작업이 가장 많아서 인건비도 가장 큼. Y6부터 Investment Period가 끝나면 1.5% × Invested Capital (committed가 아니라 실제로 deploy된 금액 기준). 보통 invested가 committed의 80% 정도이고 일부는 이미 exit 됐으니, 실효 base가 committed의 60-70% 수준으로 떨어져요."
                : "During the Y1-Y5 investment period: 2.0% × committed capital. For a $1B fund, $20M annually. The GP's sourcing, DD, and deployment work is heaviest here — staffing costs peak. After Y5, it shifts to 1.5% × invested capital (deployed, not committed). With invested usually ~80% of committed and some exits already booked, the effective base drops to ~60-70% of committed."}</p>
              <p>{ko
                ? "Y8 이후 wind-down phase에서는 1.0% × NAV (잔여 자산 가치 기준). 자산이 계속 exit되니까 NAV가 줄어들고 fee도 함께 줄어요. $1B fund의 10년 누적 management fee를 다 합치면 보통 $130-150M, 약 commit의 13-15% 정도. 이게 LP가 \"long-term private market exposure\" 의 대가로 지급하는 lock-up 비용이에요."
                : "From Y8, wind-down: 1.0% × NAV (residual asset value). Assets keep exiting, NAV declines, fees decline. Over 10 years on a $1B fund, total management fees reach $130-150M — about 13-15% of committed. That's the lock-up cost LPs pay for long-term private market exposure."}</p>
            </div>

            {/* Fee structure timeline */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Management Fee 구조 — 3 phase" : "Management fee structure — three phases"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Rate과 base가 phase마다 다름. $1B fund 기준 누적 fee ≈ $136M." : "Rate and base shift each phase. Cumulative fees on a $1B fund ≈ $136M."}
              </p>
              <div className="space-y-3">
                {MGMT_FEE_TIMELINE.map((p, i) => {
                  const widthPct = (p.rate / 2.0) * 100;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-[10.5px] font-mono font-bold text-gray-500 dark:text-gray-400 w-16">{p.year}</span>
                          <span className="text-[12px] font-bold text-gray-900 dark:text-gray-100">{ko ? p.koPhase : p.enPhase}</span>
                        </div>
                        <span className="text-[12px] font-mono font-bold" style={{ color: ACCENT }}>{p.rate.toFixed(1)}% × {p.basis}</span>
                      </div>
                      <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: EASE }}
                          className="h-full rounded"
                          style={{ width: `${widthPct}%`, background: ACCENT, transformOrigin: "left" }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 mt-1 ml-16 leading-snug">{ko ? p.koDesc : p.enDesc}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Cumulative fee calculation */}
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2.5">
                  {ko ? "$1B Fund 누적 fee 계산" : "Cumulative fee on a $1B fund"}
                </p>
                {CUM_FEE_CALC.map((c, i) => (
                  <div key={i} className="flex items-baseline justify-between text-[11px] py-1">
                    <span className="text-gray-600 dark:text-gray-400 font-mono">{ko ? c.koLabel : c.enLabel}</span>
                    <span className="font-mono font-bold text-gray-900 dark:text-gray-100">${c.val}M</span>
                  </div>
                ))}
                <div className="flex items-baseline justify-between pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-[12px] font-bold" style={{ color: ACCENT }}>{ko ? "= 누적 management fee" : "= Cumulative management fee"}</span>
                  <span className="text-[13px] font-mono font-bold" style={{ color: ACCENT }}>$136M (13.6% of commit)</span>
                </div>
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Distribution Waterfall */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Distribution Waterfall — 누가 얼마를 가져가나" : "Distribution waterfall — who gets what, and in what order"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Fund의 모든 exit이 끝나서 cash가 LP·GP에게 분배될 때, 그 순서를 규정하는 게 distribution waterfall이에요. 표준 형태가 4단계: (1) Return of Capital — LP가 출자 원금을 100% 회수. (2) Preferred Return (Hurdle) — 8% IRR까지 LP에게 100%. (3) Catch-up — GP가 catch-up까지 100% (전체 profit의 20% 비율 회복). (4) Split — 남은 부분을 80% LP / 20% GP."
                : "When all fund exits land and cash is distributed, the order is set by the waterfall. Standard four steps: (1) Return of capital — 100% to LP until original commitment is returned. (2) Preferred return (hurdle) — 100% to LP until 8% IRR. (3) Catch-up — 100% to GP until the overall 20% ratio is restored. (4) Split — 80% LP / 20% GP on the rest."}</p>
              <p>{ko
                ? "$1B fund가 5년 후 2.5x MOIC ($2.5B gross) 로 wind down하면 $1.5B의 profit이 있어요. 이걸 waterfall로 분해하면 — Return of Capital $1B (전부 LP), Preferred 8% × 5년 = $469M (전부 LP), Catch-up $117M (전부 GP), 남은 $914M의 80/20 분할 ($731M LP + $183M GP). 합산하면 LP $2,200M (총 2.2x · IRR 17%) + GP $300M carry."
                : "On a $1B fund exiting at 2.5× MOIC ($2.5B gross) after 5 years, profit is $1.5B. Waterfall breakdown — return of capital $1B (all LP), preferred at 8% over 5 years = $469M (all LP), catch-up $117M (all GP), then 80/20 split on the remaining $914M ($731M LP + $183M GP). LP total: $2,200M (2.2× · IRR 17%). GP total carry: $300M."}</p>
              <p>{ko
                ? "한 가지 디테일이 American vs European waterfall 구분이에요. European (지금 본 형태) 은 \"fund-level\" — 모든 exit이 끝나야 GP가 carry를 받음. American 은 \"deal-by-deal\" — 각 deal exit마다 GP가 carry 받음. American이 GP에게 빨리 돈이 가는 대신 LP는 clawback 조항으로 사후에 회수할 권리를 받습니다. PE 대부분이 European, 일부 US older fund가 American. 한국 NPS는 항상 European 만 받아들여요."
                : "Detail: American vs European waterfall. European (the form above) is fund-level — GP carry waits until all exits land. American is deal-by-deal — GP collects carry per exit. American moves cash to GP faster but LPs get clawback rights to recoup later. Most PE uses European; some older US funds use American. Korea's NPS only accepts European."}</p>
            </div>

            {/* Waterfall 시각화 */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Distribution Waterfall — $1B fund, 2.5x MOIC ($2.5B gross)" : "Distribution waterfall — $1B fund at 2.5× MOIC ($2.5B gross)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "4 단계로 나뉘어 LP·GP에게 분배. 최종 LP $2.2B (2.2x) + GP $300M carry." : "Four steps. Final: LP $2.2B (2.2×) + GP $300M carry."}
              </p>
              <div className="space-y-3">
                {WATERFALL.map((w, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
                    className="rounded-lg p-4 border"
                    style={{ borderColor: w.color + "60", background: w.color + "0d" }}
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[12.5px] font-bold" style={{ color: w.color }}>{ko ? w.koStep : w.enStep}</span>
                      </div>
                      <span className="text-[12.5px] font-mono font-bold" style={{ color: w.color }}>${w.val}M</span>
                    </div>
                    <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug mb-2 ml-7">{ko ? w.koDesc : w.enDesc}</p>
                    <div className="ml-7 flex items-baseline gap-3 text-[10.5px] font-mono">
                      <span className="text-gray-500 dark:text-gray-400">{ko ? "누적 LP" : "Cum LP"}: <span className="font-bold text-gray-900 dark:text-gray-100">${w.cumLp}M</span></span>
                      <span className="text-gray-500 dark:text-gray-400">{ko ? "누적 GP" : "Cum GP"}: <span className="font-bold text-gray-900 dark:text-gray-100">${w.cumGp}M</span></span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg p-3 text-center" style={{ background: ACCENT + "1a", border: `1px solid ${ACCENT}60` }}>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: ACCENT }}>{ko ? "LP 총 회수" : "Total to LP"}</p>
                    <p className="text-[15px] font-mono font-bold" style={{ color: ACCENT }}>$2,200M</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">MOIC 2.2× · IRR ~17%</p>
                  </div>
                  <div className="rounded-lg p-3 text-center" style={{ background: PURPLE + "1a", border: `1px solid ${PURPLE}60` }}>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: PURPLE }}>{ko ? "GP 총 carry" : "Total GP carry"}</p>
                    <p className="text-[15px] font-mono font-bold" style={{ color: PURPLE }}>$300M</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400">{ko ? "Profit의 20%" : "20% of profit"}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — Side Letter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Side Letter — 대형 LP만 받는 별도 계약" : "Side letters — the parallel contract only large LPs get"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "LPA는 모든 LP에게 동일하게 적용되는 표준 계약이에요. 그런데 대형 LP (commit $500M+) 는 LPA에 더해 별도의 \"Side Letter\" 를 받습니다. Side letter는 그 LP에게만 적용되는 special terms이고, 보통 LPA보다 짧은 5-10 페이지짜리 문서예요."
                : "The LPA applies identically to every LP. But large LPs (committing $500M+) receive a parallel 'side letter' on top — special terms applying only to that LP. Side letters are usually shorter than LPAs, 5-10 pages."}</p>
              <p>{ko
                ? "Side letter에 들어가는 가장 흔한 항목이 6가지예요. (1) MFN Right — 다른 LP의 better term을 즉시 동일 적용. (2) Fee Discount — Mgmt fee 25-50bps 할인. (3) Co-investment Right — deal 단위로 추가 출자 가능. (4) LPAC Seat — Advisory Committee 멤버. (5) ESG Excused Investment — 특정 산업 제외 권리. (6) Most-favored reporting — 다른 LP가 받는 모든 reporting."
                : "Six items show up most often. (1) MFN right — auto-match any better terms granted to other LPs. (2) Fee discount — 25-50bps off management fee. (3) Co-investment right — deploy extra capital deal-by-deal. (4) LPAC seat — Advisory Committee membership. (5) ESG / excused investment — opt out of specific industries. (6) Most-favored reporting — receive any reporting other LPs get."}</p>
              <p>{ko
                ? "MFN clause가 흥미로워요. 한 LP가 \"Fee 25bps 할인\" 을 받는 순간, MFN을 가진 모든 LP가 자동으로 같은 할인을 받아요. 그래서 GP는 새 LP에게 특별 혜택을 줄 때 매번 \"MFN trigger 되는가\" 를 확인해야 합니다. 이게 fundraising의 가장 골치 아픈 부분 중 하나."
                : "The MFN clause has bite. The moment one LP gets a '25bps fee discount,' every MFN-holding LP automatically gets the same discount. So GPs must check 'does this trigger MFN?' before granting any special term — one of the most annoying parts of fundraising."}</p>
              <p>{ko
                ? "한국 NPS는 모든 fund에서 fee discount + MFN + Co-investment + LPAC seat 4가지를 기본으로 받아요. NPS의 size ($500M-$1B 단일 commit) 가 그만큼의 협상력을 만들고, GP 입장에서는 NPS 없이 fund closing이 어렵기 때문에 이 요구를 받아들입니다."
                : "Korea's NPS gets all four — fee discount + MFN + co-investment + LPAC seat — on virtually every fund. NPS's $500M-$1B ticket size buys that leverage, and GPs accept because closing a fund without NPS is hard."}</p>
            </div>

            {/* Side letter table */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "Side Letter 표준 항목 6가지" : "Six standard side-letter items"}
              </p>
              <div className="space-y-2.5">
                {SIDE_LETTERS.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                    className="grid grid-cols-[auto_160px_1fr] gap-3 items-start"
                  >
                    <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[12px] font-bold text-gray-900 dark:text-gray-100">{ko ? s.koItem : s.enItem}</span>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? s.koDesc : s.enDesc}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Side letter는 confidential. 다른 LP는 누가 어떤 혜택을 받았는지 모름 (MFN 통보 외에는). 한국 NPS가 받는 4 항목 (Fee · MFN · Co-invest · LPAC) 이 사실상 industry 표준."
                  : "Side letters are confidential — other LPs don't know who got what (other than via MFN triggers). The four NPS receives (fee, MFN, co-invest, LPAC) are effectively the industry standard."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p>{ko
                ? "다음 챕터에서는 Fund 자체의 종류를 봅니다. PE Buyout · Growth · VC · Mezz · Credit · Real Estate · Infra. 그리고 구조별로 Open-end vs Closed-end, 공모 vs 사모, 한국의 unique 구조 (PEF · 신기술조합 · 모태펀드) 까지."
                : "Next chapter walks the fund types themselves. PE buyout, growth, VC, mezz, credit, real estate, infrastructure. By structure — open-end vs closed-end, public vs private. And Korea-specific structures: PEF, the new-technology venture vehicle, and the fund-of-funds program."}</p>
            </div>
          </motion.section>

          {/* Next chapter */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                Ch.3 — {ko ? "Fund 종류와 구조 — Buyout · VC · Credit · 그리고 한국 PEF" : "Fund types and structures — buyout, VC, credit, and Korea's PEF"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "전략별 (Buyout · Growth · VC · Mezz · Distressed · Credit · RE · Infra) × 구조별 (Open vs Closed) × 공모 vs 사모. 한국 PEF·신기술조합·모태펀드의 unique 구조도."
                  : "By strategy (buyout, growth, VC, mezz, distressed, credit, RE, infra) × by structure (open vs closed) × public vs private. Plus Korea-specific PEF, new-tech vehicles, fund-of-funds."}
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

