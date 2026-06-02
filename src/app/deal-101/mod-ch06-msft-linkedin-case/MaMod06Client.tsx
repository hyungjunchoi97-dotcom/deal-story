/**
 * Modelling 시리즈 Ch.6 — Case · Microsoft × LinkedIn ($26.2B, 2016) model walkthrough
 *
 * 시리즈 마지막 챕터. Ch.1-5에서 본 sheet들이 한 deal에 어떻게 묶이는지.
 *  - 자연스러운 한국어 + Excel 표현
 *  - 시각화 4개: Deal architecture · LinkedIn segments · Synergy 4년 build · Accretion/Dilution + Football Field
 *  - 모든 데이터 상수 KO/EN 분리
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { MOD_CHAPTERS, getModChapterBySlug, getModSeriesNav } from "@/data/modelling-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: d } },
});

const SLUG = "mod-ch06-msft-linkedin-case";
const ACCENT = "#10b981";
const BLUE = "#2563eb";
const ORANGE = "#f97316";
const RED = "#dc2626";
const PURPLE = "#a855f7";

// Deal facts
const DEAL_FACTS = [
  { koLabel: "발표일",           enLabel: "Announcement",    val: "2016년 6월 13일"  , enVal: "Jun 13, 2016" },
  { koLabel: "Closing",           enLabel: "Closing",          val: "2016년 12월"       , enVal: "December 2016" },
  { koLabel: "인수가 (per share)", enLabel: "Offer price",      val: "$196.00"          , enVal: "$196.00" },
  { koLabel: "1-day Premium",     enLabel: "1-day premium",    val: "+50%"             , enVal: "+50%" },
  { koLabel: "Deal value (EV)",   enLabel: "Deal value (EV)",  val: "$26.2B"           , enVal: "$26.2B" },
  { koLabel: "Financing",          enLabel: "Financing",        val: "All-cash + debt issuance", enVal: "All-cash + debt issuance" },
  { koLabel: "Counsel · IB",      enLabel: "Counsel · IB",     val: "Morgan Stanley (MSFT) · Qatalyst (LNKD)", enVal: "Morgan Stanley (MSFT) · Qatalyst (LNKD)" },
];

// Sheet stack — LBO Ch.4 보다 더 많은 sheet들이 들어감
const SHEETS = [
  { koName: "Assumptions",        enName: "Assumptions",         koDesc: "Deal terms · synergy · financing mix", enDesc: "Deal terms, synergy, financing mix" },
  { koName: "LinkedIn Operating", enName: "LinkedIn Operating",  koDesc: "4 segments (Talent · Marketing · Premium · Sales)", enDesc: "4 segments (Talent, Marketing, Premium, Sales)" },
  { koName: "Standalone DCF",      enName: "Standalone DCF",     koDesc: "LinkedIn 본체 valuation",                enDesc: "LinkedIn standalone valuation" },
  { koName: "Synergy Build",        enName: "Synergy Build",      koDesc: "Cost + Revenue synergy 4-year phase-in", enDesc: "Cost + revenue synergy 4-year phase-in" },
  { koName: "Pro Forma 3-Stmt",    enName: "Pro Forma 3-Stmt",   koDesc: "Microsoft + LinkedIn 통합 재무",         enDesc: "Combined Microsoft + LinkedIn financials" },
  { koName: "Accretion / Dilution", enName: "Accretion / Dilution", koDesc: "EPS impact 분석 (Y1·Y2·Y3)",          enDesc: "EPS impact analysis (Y1, Y2, Y3)" },
  { koName: "Comps · Football Field", enName: "Comps · Football Field", koDesc: "Premium 정당화 · range 종합",       enDesc: "Premium justification, range synthesis" },
];

// LinkedIn 4 segments (2015 FY actuals, $M)
const SEGMENTS = [
  {
    koName: "Talent Solutions",
    enName: "Talent Solutions",
    val2015: 1900,
    pct: 63,
    cagr: 35,
    koDriver: "유료 구직 게시 + Recruiter seat",
    enDriver: "Paid postings + Recruiter seats",
    color: ACCENT,
  },
  {
    koName: "Marketing Solutions",
    enName: "Marketing Solutions",
    val2015: 580,
    pct: 19,
    cagr: 28,
    koDriver: "Sponsored Content + Display ads",
    enDriver: "Sponsored content + display ads",
    color: BLUE,
  },
  {
    koName: "Premium Subscriptions",
    enName: "Premium Subscriptions",
    val2015: 380,
    pct: 13,
    cagr: 22,
    koDriver: "InMail + 프로필 노출 + 강의 액세스",
    enDriver: "InMail + profile visibility + course access",
    color: ORANGE,
  },
  {
    koName: "Sales Solutions",
    enName: "Sales Solutions",
    val2015: 170,
    pct: 6,
    cagr: 65,
    koDriver: "Sales Navigator seat 기반",
    enDriver: "Sales Navigator seats",
    color: PURPLE,
  },
];
const SEG_TOTAL = 3030; // ~$3B

// Synergy 4년 phase-in ($M annual run-rate)
const SYNERGY_PHASE = [
  {
    koYear: "Y1 (2017)",
    enYear: "Y1 (2017)",
    cost: 50,
    revenue: 100,
    koNote: "초기 통합 비용 발생 — synergy 미미",
    enNote: "Integration costs heavy — synergy still small",
  },
  {
    koYear: "Y2 (2018)",
    enYear: "Y2 (2018)",
    cost: 120,
    revenue: 280,
    koNote: "Office 365 cross-sell 시작",
    enNote: "Office 365 cross-sell begins",
  },
  {
    koYear: "Y3 (2019)",
    enYear: "Y3 (2019)",
    cost: 170,
    revenue: 520,
    koNote: "Dynamics CRM 통합 — sales pipeline",
    enNote: "Dynamics CRM integration — sales pipeline",
  },
  {
    koYear: "Y4 (2020)",
    enYear: "Y4 (2020)",
    cost: 200,
    revenue: 800,
    koNote: "Full run-rate — ~$1B annual synergy",
    enNote: "Full run-rate — ~$1B annual synergy",
  },
];
const SYNERGY_MAX = 1100;

// Accretion / Dilution table
// Per-share view; pro forma EPS vs standalone EPS
type AccCell = "header" | "label" | "input" | "formula" | "result" | "positive" | "negative" | "link";
const ACC_ROWS: Array<{ cells: Array<{ val: string; type: AccCell }> }> = [
  { cells: [
    { val: "$ in M (except EPS)",  type: "header" },
    { val: "Y1 (2017)",            type: "header" },
    { val: "Y2 (2018)",            type: "header" },
    { val: "Y3 (2019)",            type: "header" },
  ]},
  { cells: [
    { val: "MSFT Standalone NI",  type: "label" },
    { val: "21,500",               type: "input" },
    { val: "23,000",               type: "input" },
    { val: "25,000",               type: "input" },
  ]},
  { cells: [
    { val: "+ LinkedIn NI",        type: "label" },
    { val: "(500)",                type: "link" },
    { val: "150",                  type: "link" },
    { val: "700",                  type: "link" },
  ]},
  { cells: [
    { val: "+ Net Synergy",        type: "label" },
    { val: "50",                   type: "link" },
    { val: "160",                  type: "link" },
    { val: "350",                  type: "link" },
  ]},
  { cells: [
    { val: "− Financing Cost",     type: "label" },
    { val: "(420)",                type: "formula" },
    { val: "(420)",                type: "formula" },
    { val: "(380)",                type: "formula" },
  ]},
  { cells: [
    { val: "− Amortization (intangibles)", type: "label" },
    { val: "(800)",                type: "formula" },
    { val: "(800)",                type: "formula" },
    { val: "(800)",                type: "formula" },
  ]},
  { cells: [
    { val: "= Pro Forma NI",       type: "label" },
    { val: "19,830",               type: "result" },
    { val: "22,090",               type: "result" },
    { val: "24,870",               type: "result" },
  ]},
  { cells: [
    { val: "Shares (basic, B)",    type: "label" },
    { val: "7.8",                  type: "input" },
    { val: "7.8",                  type: "input" },
    { val: "7.7",                  type: "input" },
  ]},
  { cells: [
    { val: "= Pro Forma EPS",      type: "label" },
    { val: "$2.54",                type: "result" },
    { val: "$2.83",                type: "result" },
    { val: "$3.23",                type: "result" },
  ]},
  { cells: [
    { val: "MSFT Standalone EPS",  type: "label" },
    { val: "$2.76",                type: "input" },
    { val: "$2.95",                type: "input" },
    { val: "$3.25",                type: "input" },
  ]},
  { cells: [
    { val: "= Accretion / (Dilution)", type: "label" },
    { val: "−7.9%",                 type: "negative" },
    { val: "−4.1%",                 type: "negative" },
    { val: "−0.6%",                 type: "negative" },
  ]},
];

// Football field bars ($ per share)
const FF_BARS = [
  { koMethod: "LinkedIn 1-yr 52-week Range", enMethod: "LinkedIn 52-week range",        low: 98,  high: 165, koTag: "참고",     enTag: "Reference",  color: "#94a3b8" },
  { koMethod: "Trading Comps (SaaS peers)",  enMethod: "Trading Comps (SaaS peers)",    low: 130, high: 170, koTag: "Primary", enTag: "Primary",    color: BLUE },
  { koMethod: "Transaction Comps (Strategic)", enMethod: "Transaction Comps (strategic)", low: 165, high: 220, koTag: "Primary", enTag: "Primary",    color: BLUE },
  { koMethod: "Standalone DCF",               enMethod: "Standalone DCF",                 low: 145, high: 195, koTag: "Primary", enTag: "Primary",    color: BLUE },
  { koMethod: "DCF + Synergy ($1B)",          enMethod: "DCF + Synergy ($1B)",            low: 180, high: 240, koTag: "Strategic premium", enTag: "Strategic premium", color: ACCENT },
];
const FF_MIN = 80;
const FF_MAX = 260;
const OFFER_PRICE = 196;
const PRIOR_PRICE = 131;

const cellTextColor = (type: AccCell) => {
  if (type === "input") return "#2563eb";
  if (type === "formula") return "#0f172a";
  if (type === "link") return "#16a34a";
  if (type === "result") return "#f97316";
  if (type === "positive") return "#16a34a";
  if (type === "negative") return "#dc2626";
  if (type === "header") return "#475569";
  return "#64748b";
};
const cellBg = (type: AccCell) => {
  if (type === "input") return "#eff6ff";
  if (type === "formula") return "#ffffff";
  if (type === "link") return "#f0fdf4";
  if (type === "result") return "#fff7ed";
  if (type === "positive") return "#dcfce7";
  if (type === "negative") return "#fee2e2";
  if (type === "header") return "#f1f5f9";
  return "#ffffff";
};

export default function MaMod06Client({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getModChapterBySlug(SLUG)!;
  const { prev, next } = getModSeriesNav(SLUG);
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
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "Modelling 시리즈 · Ch.6" : "Modelling Series · Ch.6"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-8">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
            <span style={{ color: ACCENT }}>{ko ? "Modelling 시리즈" : "Modelling Series"}</span>
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
            {MOD_CHAPTERS.map((ch) => {
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

          {/* § 1 — 왜 이 deal이 모델링 case로 좋은가 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Microsoft × LinkedIn ($26.2B, 2016) — 시리즈의 모든 sheet가 한 deal에" : "Microsoft × LinkedIn ($26.2B, 2016) — every series sheet in one deal"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "2016년 6월 13일, Microsoft가 LinkedIn을 $26.2B에 all-cash로 인수한다고 발표했어요. 인수가는 주당 $196 — 발표 직전일 $131 대비 +50% premium. 당시 Microsoft 역사상 최대 인수였고, software-as-a-service 영역에서의 대형 strategic acquisition으로 분류됐어요."
                : "On June 13, 2016, Microsoft announced an all-cash acquisition of LinkedIn for $26.2B. Offer price: $196/share — a 50% premium over the prior-day close of $131. Microsoft's largest deal ever at the time, classified as a major strategic acquisition in the SaaS space."}</p>
              <p>{ko
                ? "이 deal을 마지막 챕터의 case로 고른 이유가 있어요. Modelling 시리즈에서 본 sheet들이 한 deal 안에 거의 다 들어가거든요. Ch.5의 Operating Model (LinkedIn 4 segments), Ch.3의 DCF (standalone valuation), Ch.2의 3-Statement (pro forma combined), 그리고 strategic acquisition만의 추가 sheet — Synergy build와 Accretion/Dilution 분석. 게다가 LinkedIn이 GAAP 적자 상태였기 때문에 \"수익이 아직 안 나는 회사를 어떻게 valuation하느냐\" 라는 까다로운 모델링 문제도 같이 보여줘요."
                : "Why this deal as the closing case? Almost every sheet from this series shows up in one deal. Ch.5's operating model (LinkedIn's 4 segments), Ch.3's DCF (standalone valuation), Ch.2's 3-statement (pro forma combined), plus the strategic-acquisition-specific sheets — synergy build and accretion/dilution analysis. And because LinkedIn was GAAP-unprofitable at the time, it also walks the tricky modeling question of 'how do you value a company that isn't earning yet?'"}</p>
              <p>{ko
                ? "이번 챕터에서는 (1) LinkedIn standalone operating model의 segment 단위 build (2) Synergy를 별도 sheet로 분리해서 cost·revenue를 4년에 걸쳐 phase-in 하는 방식 (3) Accretion/Dilution — pro forma EPS가 언제 accretive로 전환되는지 (4) Football Field 종합 — $196 premium 가격을 어떻게 정당화하는지를 sheet-by-sheet로 따라갑니다."
                : "This chapter walks (1) LinkedIn standalone operating model with segment-level build, (2) synergy as a separate sheet phasing in cost + revenue over four years, (3) accretion/dilution — when pro forma EPS turns accretive, (4) Football Field synthesis — how the $196 premium price gets justified. Sheet by sheet."}</p>
            </div>

            {/* Deal facts grid */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "Deal Fact Sheet" : "Deal fact sheet"}
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {DEAL_FACTS.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={VP}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-baseline justify-between border-b border-gray-100 dark:border-gray-800/60 pb-2"
                  >
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-wider">{ko ? f.koLabel : f.enLabel}</span>
                    <span className="text-[12px] font-mono font-bold text-gray-900 dark:text-gray-100">{ko ? f.val : f.enVal}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sheet stack */}
            <div className="mt-5 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                {ko ? "Strategic Acquisition Model — 7 sheets" : "Strategic acquisition model — 7 sheets"}
              </p>
              <div className="space-y-2">
                {SHEETS.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                    className="grid grid-cols-[auto_180px_1fr] gap-3 items-center px-3 py-2 rounded-md border"
                    style={{ borderColor: ACCENT + "40", background: ACCENT + "08" }}
                  >
                    <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[12.5px] font-bold" style={{ color: ACCENT }}>{ko ? s.koName : s.enName}</span>
                    <span className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? s.koDesc : s.enDesc}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "LBO model (Ch.4, 6 sheets) 보다 한 sheet 더 많음 — Synergy build와 Accretion/Dilution이 strategic acquisition만의 추가 작업이라서요."
                  : "One sheet more than the LBO (Ch.4, 6 sheets) — synergy build and accretion/dilution are strategic-acquisition-only additions."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 2 — LinkedIn Operating Model */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Sheet 2 — LinkedIn Operating Model (4 segments)" : "Sheet 2 — LinkedIn operating model (4 segments)"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "LinkedIn 2015 매출이 $3.0B 정도. 이걸 어떻게 forecast 하느냐는 Ch.5에서 본 driver-based forecasting 그대로 적용해요. LinkedIn은 매출이 4개 segment로 깔끔하게 나뉘어서 segment별 driver가 다 달라요. Talent Solutions는 Recruiter seat × 단가, Marketing Solutions는 광고 노출 × CPM, Premium Subscriptions는 유료 회원 수 × ARPU, Sales Solutions는 Sales Navigator seat × seat 단가."
                : "LinkedIn's 2015 revenue was ~$3.0B, split into four segments with distinct drivers — exactly Ch.5's driver-based forecasting. Talent Solutions = Recruiter seats × price. Marketing = ad impressions × CPM. Premium = subscribers × ARPU. Sales Solutions = Sales Navigator seats × seat price."}</p>
              <p>{ko
                ? "각 segment의 성장률이 달라서 forecast가 의미 있게 분화돼요. Talent Solutions가 매출의 63%를 차지하면서 35% CAGR, Sales Solutions는 baseline이 작지만 65% CAGR로 가장 빠른 성장. 5년 forecast하면 Sales Solutions의 매출 기여가 6% → 15%로 커지는 mix shift가 자연스럽게 나옵니다. Segment-level forecast가 \"매출 전체 +30%\" 보다 훨씬 defensible한 이유예요."
                : "Each segment grows at a different pace, making the forecast meaningfully differentiated. Talent (63% of revenue, 35% CAGR) leads; Sales Solutions starts small but compounds at 65%. Five-year forecast naturally produces a mix shift — Sales Solutions moves from 6% → 15% of revenue. Segment-level forecasting is far more defensible than 'overall +30%.'"}</p>
            </div>

            {/* Segments */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "LinkedIn 4 Segments — 2015 FY Actual ($M)" : "LinkedIn's 4 segments — 2015 FY actual ($M)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "총 매출 $3.03B. Segment별로 driver와 성장률이 다름." : "Total revenue $3.03B. Distinct drivers and growth rates per segment."}
              </p>
              <div className="space-y-3">
                {SEGMENTS.map((s, i) => {
                  const widthPct = (s.val2015 / 2200) * 100;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.45, delay: i * 0.08, ease: EASE }}
                    >
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-[12.5px] font-bold" style={{ color: s.color }}>{ko ? s.koName : s.enName}</span>
                        <span className="text-[11px] font-mono">
                          <span className="text-gray-700 dark:text-gray-300">${s.val2015}M</span>
                          <span className="text-gray-400 dark:text-gray-500"> · {s.pct}% · </span>
                          <span style={{ color: s.color, fontWeight: 700 }}>{s.cagr}% CAGR</span>
                        </span>
                      </div>
                      <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden mb-1">
                        <motion.div
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.55, delay: 0.15 + i * 0.08, ease: EASE }}
                          className="h-full rounded"
                          style={{ width: `${widthPct}%`, background: s.color, transformOrigin: "left" }}
                        />
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">
                        <span className="font-semibold uppercase tracking-wider text-[9px] mr-1.5" style={{ color: s.color }}>Driver</span>
                        {ko ? s.koDriver : s.enDriver}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-baseline justify-between">
                <span className="text-[12px] font-bold text-gray-900 dark:text-gray-100">= Total Revenue (2015 FY)</span>
                <span className="text-[14px] font-mono font-bold" style={{ color: ACCENT }}>${SEG_TOTAL}M</span>
              </div>
            </div>
          </motion.section>

          {/* Mid share */}
          <ShareButtons title={ko ? chapter.titleKo : chapter.titleEn} variant="mid" likeSlug={SLUG} lang={lang} />

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 3 — Synergy Build */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Sheet 4 — Synergy Build (Cost + Revenue, 4-year phase-in)" : "Sheet 4 — synergy build (cost + revenue, 4-year phase-in)"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Strategic acquisition model에서 standalone DCF와 함께 가장 중요한 sheet가 synergy build예요. 이게 \"왜 우리가 standalone value보다 더 낼 수 있는가\" 의 답이고, premium 가격을 정당화하는 핵심 근거가 됩니다."
                : "Alongside standalone DCF, the most important sheet in a strategic-acquisition model is the synergy build. It's the answer to 'why can we pay more than standalone value?' — the core justification for the premium."}</p>
              <p>{ko
                ? "Synergy는 두 가지로 나눠요. Cost synergy — 인프라 통합, 본사 기능 중복 제거, procurement 협상력. Microsoft × LinkedIn에서는 약 $200M annual run-rate 추정. Revenue synergy — Office 365 사용자 base에 LinkedIn 데이터 cross-sell, Dynamics CRM에 sales intelligence 통합, Teams에 social graph 결합. 더 크지만 더 어려운 영역으로 ~$800M annual run-rate 추정. 둘 합쳐 ~$1B annual."
                : "Synergy splits in two. Cost synergy — infrastructure consolidation, HQ function dedup, procurement leverage. Estimated at ~$200M annual run-rate for Microsoft × LinkedIn. Revenue synergy — cross-sell LinkedIn data into Office 365's user base, integrate sales intelligence with Dynamics CRM, combine social graph with Teams. Bigger but harder to land, estimated at ~$800M annual run-rate. Combined: ~$1B annual."}</p>
              <p>{ko
                ? "한 가지 디테일이 중요해요. Synergy는 closing 직후부터 full run-rate로 잡으면 안 돼요. 통합에 시간이 걸리니까 4년에 걸쳐 phase-in 하는 게 표준. Y1은 통합 비용이 더 많아서 net negative, Y2-Y3에서 빠르게 ramp up, Y4에 full run-rate. 그래서 synergy sheet은 column이 4개 (Y1·Y2·Y3·Y4), 행이 segment별 cost와 revenue synergy. 한 페이지가 다입니다."
                : "One critical detail: synergy doesn't hit full run-rate right after closing. Integration takes time, so it's phased in over 4 years. Y1 carries heavier integration costs, often net-negative. Y2-Y3 ramp fast. Y4 reaches full run-rate. So the synergy sheet has four columns (Y1-Y4), rows for cost and revenue synergy by segment. Fits on one page."}</p>
            </div>

            {/* Synergy phase-in */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Synergy Phase-in — Cost vs Revenue ($M annual run-rate)" : "Synergy phase-in — cost vs revenue ($M annual run-rate)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Y1 → Y4 ramp-up. Total Y4 run-rate ~$1B annual." : "Y1 → Y4 ramp-up. Total Y4 run-rate ~$1B annual."}
              </p>
              <div className="space-y-4">
                {SYNERGY_PHASE.map((p, i) => {
                  const costPct = (p.cost / SYNERGY_MAX) * 100;
                  const revPct = (p.revenue / SYNERGY_MAX) * 100;
                  const total = p.cost + p.revenue;
                  return (
                    <div key={i}>
                      <div className="flex items-baseline justify-between mb-1.5">
                        <span className="text-[12px] font-bold text-gray-900 dark:text-gray-100">{ko ? p.koYear : p.enYear}</span>
                        <span className="text-[11px] font-mono">
                          <span className="text-gray-500 dark:text-gray-400">Cost ${p.cost}M + Revenue ${p.revenue}M = </span>
                          <span className="font-bold" style={{ color: ACCENT }}>${total}M</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 w-14 flex-shrink-0">Cost</span>
                        <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                            className="h-full rounded"
                            style={{ width: `${costPct}%`, background: BLUE, transformOrigin: "left" }}
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 w-14 flex-shrink-0">Revenue</span>
                        <div className="flex-1 h-4 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: EASE }}
                            className="h-full rounded"
                            style={{ width: `${revPct}%`, background: ACCENT, transformOrigin: "left" }}
                          />
                        </div>
                      </div>
                      <p className="text-[10.5px] text-gray-500 dark:text-gray-400 leading-snug">{ko ? p.koNote : p.enNote}</p>
                    </div>
                  );
                })}
              </div>
              <p className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Cost synergy는 Y4에 $200M로 비교적 작지만 확실. Revenue synergy는 $800M로 크지만 \"우리가 정말 cross-sell 할 수 있나\" 라는 가정에 의존. 그래서 board에는 두 가지를 항상 분리해서 보여줍니다 — cost는 commitment, revenue는 best effort."
                  : "Cost synergy reaches $200M by Y4 — smaller but high confidence. Revenue synergy is $800M — larger but assumption-dependent on 'can we actually cross-sell.' That's why boards always see them separately — cost as commitment, revenue as best efforts."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 4 — Accretion / Dilution */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Sheet 6 — Accretion / Dilution 분석" : "Sheet 6 — accretion / dilution analysis"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "Strategic acquisition에서 board가 가장 자주 묻는 질문이 \"이 deal이 우리 EPS를 늘리나, 줄이나\" 예요. 답이 들어가는 sheet가 accretion/dilution. Microsoft standalone EPS와 Microsoft + LinkedIn pro forma EPS를 연도별로 비교해서 차이를 %로 표시합니다."
                : "The board's most common question in a strategic acquisition: 'will this deal grow our EPS or shrink it?' That's the accretion/dilution sheet. Compare Microsoft's standalone EPS against the pro forma combined EPS year by year, and show the delta in %."}</p>
              <p>{ko
                ? "공식이 단순해요. Pro Forma NI = MSFT Standalone NI + LinkedIn NI + Net Synergy − Financing Cost − Amortization of Intangibles. 마지막 두 항목이 deal-specific cost. Financing cost는 $20B+ debt issuance의 이자, Amortization은 acquired intangibles (LinkedIn 브랜드·기술·고객 관계) 의 회계적 amortization."
                : "Formula is simple: Pro Forma NI = MSFT Standalone NI + LinkedIn NI + Net Synergy − Financing Cost − Amortization of Intangibles. The last two are deal-specific costs. Financing cost is interest on $20B+ of debt issuance. Amortization is the accounting amortization of acquired intangibles (LinkedIn brand, tech, customer relationships)."}</p>
              <p>{ko
                ? "Microsoft × LinkedIn 분석에서 Y1·Y2·Y3 모두 약간씩 dilutive로 나왔어요. 이유는 두 가지. LinkedIn이 GAAP 적자였고, financing cost와 amortization이 합쳐 매년 ~$1.2B 추가 비용. Y3에 거의 break-even, Y4부터 accretive로 전환되는 trajectory. Strategic deal에서 \"Y3에야 accretive\" 면 사실 상당히 공격적인 가격이라는 신호예요."
                : "For Microsoft × LinkedIn, Y1-Y3 came out slightly dilutive. Two reasons: LinkedIn was GAAP-unprofitable, and financing cost + amortization together added ~$1.2B in annual costs. Y3 hit near break-even; Y4 was the accretive turning point. 'Accretive only by Y3' for a strategic deal is a signal that the price is genuinely aggressive."}</p>
            </div>

            {/* A/D table */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Accretion / Dilution — MSFT Pro Forma vs Standalone EPS" : "Accretion / dilution — MSFT pro forma vs standalone EPS"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                {ko ? "Y1·Y2·Y3 모두 dilutive — Y3에 거의 break-even. Y4부터 accretive로 전환." : "All of Y1-Y3 dilutive — Y3 nearly breakeven. Turns accretive in Y4."}
              </p>
              <div className="overflow-x-auto -mx-1 px-1">
                <div className="inline-block min-w-full">
                  {ACC_ROWS.map((row, ri) => (
                    <div key={ri} className="grid grid-cols-[1.6fr_repeat(3,1fr)] gap-0">
                      {row.cells.map((cell, ci) => (
                        <motion.div
                          key={ci}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={VP}
                          transition={{ duration: 0.25, delay: (ri * 4 + ci) * 0.015 }}
                          className="border-r border-b border-gray-100 dark:border-gray-800 px-2 py-1.5 text-[10.5px] font-mono"
                          style={{
                            background: cellBg(cell.type),
                            color: cellTextColor(cell.type),
                            fontWeight: cell.type === "result" || cell.type === "negative" || cell.type === "positive" ? 700 : 400,
                          }}
                        >
                          {cell.val}
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Pro Forma EPS Y1 $2.54 vs Standalone $2.76 = −7.9% dilutive. Y3에는 −0.6%로 거의 break-even. 이 표 한 줄이 board approval의 핵심 근거."
                  : "Pro forma EPS Y1 $2.54 vs standalone $2.76 = −7.9% dilutive. By Y3, −0.6% — essentially breakeven. This one line is the heart of board approval."}
              </p>
            </div>
          </motion.section>

          <hr className="border-gray-200 dark:border-gray-800 mb-14" />

          {/* § 5 — Football Field + Premium 정당화 */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mb-14">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-5">
              {ko ? "Sheet 7 — Football Field로 $196 premium 정당화" : "Sheet 7 — Football Field justifying the $196 premium"}
            </h2>
            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4">
              <p>{ko
                ? "마지막 sheet가 Football Field. Standalone DCF, Trading Comps (SaaS peers — Salesforce·Workday·Adobe SaaS biz), Transaction Comps (precedent strategic SaaS deals), 그리고 결정적으로 \"DCF + Synergy\" 막대까지 다 같은 page에 올려요. 인수가 $196이 어느 막대 안에 들어가느냐가 board에게 보여줄 핵심 메시지."
                : "The closing sheet is the Football Field. Standalone DCF, trading comps (SaaS peers like Salesforce, Workday, Adobe's SaaS biz), transaction comps (precedent strategic SaaS deals), and crucially a 'DCF + Synergy' bar — all on the same page. Which bar the $196 offer falls within is the headline for the board."}</p>
              <p>{ko
                ? "Standalone DCF 만으로는 LinkedIn 가치가 $145-$195. 인수가 $196이 이 range 상단 — 즉 standalone 기준으로는 \"정말 비싸게 사는 가격\" 이에요. 여기서 synergy를 추가하면 range가 $180-$240으로 올라가고, $196은 그 range의 하단부. 이게 \"$196이 합리적\" 이라는 narrative의 mechanic이에요. \"우리가 standalone으로는 비싸게 사지만, synergy를 더하면 여전히 가치 하단부\"."
                : "Standalone DCF alone gave LinkedIn a $145-$195 range. $196 sits at the top — i.e., 'expensive' on standalone basis. Adding synergy lifts the range to $180-$240, and $196 lands at the bottom of that. That's the mechanic behind the '$196 is reasonable' narrative: 'expensive standalone, but still bottom-end with synergy.'"}</p>
            </div>

            {/* Football Field */}
            <div className="mt-7 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                {ko ? "Football Field — LinkedIn Valuation ($ per share)" : "Football Field — LinkedIn valuation ($ per share)"}
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {ko ? "Offer $196 (녹색 선) vs 1-day prior $131 (회색 점선) = +50% premium." : "Offer $196 (green line) vs 1-day prior $131 (grey dashed) = 50% premium."}
              </p>

              <div className="relative pb-2">
                {/* Offer + Prior lines */}
                <div
                  className="absolute top-0 bottom-6 w-0.5"
                  style={{
                    left: `calc(${((OFFER_PRICE - FF_MIN) / (FF_MAX - FF_MIN)) * 100}% + 150px - 1px)`,
                    background: ACCENT,
                    zIndex: 10,
                  }}
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-bold whitespace-nowrap" style={{ color: ACCENT }}>
                    Offer ${OFFER_PRICE}
                  </div>
                </div>
                <div
                  className="absolute top-0 bottom-6 border-l border-dashed"
                  style={{
                    left: `calc(${((PRIOR_PRICE - FF_MIN) / (FF_MAX - FF_MIN)) * 100}% + 150px - 1px)`,
                    borderColor: "#94a3b8",
                    zIndex: 9,
                  }}
                >
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-bold whitespace-nowrap" style={{ color: "#94a3b8" }}>
                    Prior ${PRIOR_PRICE}
                  </div>
                </div>

                {/* Bars */}
                <div className="space-y-3 mt-6">
                  {FF_BARS.map((b, i) => {
                    const leftPct = ((b.low - FF_MIN) / (FF_MAX - FF_MIN)) * 100;
                    const widthPct = ((b.high - b.low) / (FF_MAX - FF_MIN)) * 100;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-36 flex-shrink-0">
                          <p className="text-[11px] font-medium text-gray-700 dark:text-gray-300 leading-tight">{ko ? b.koMethod : b.enMethod}</p>
                          <p className="text-[9px] font-semibold uppercase tracking-wider mt-0.5" style={{ color: b.color }}>
                            {ko ? b.koTag : b.enTag}
                          </p>
                        </div>
                        <div className="flex-1 relative h-6">
                          <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            whileInView={{ opacity: 1, scaleX: 1 }}
                            viewport={VP}
                            transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                            className="absolute top-0 h-full rounded text-white text-[9px] font-bold flex items-center justify-between px-2"
                            style={{ left: `${leftPct}%`, width: `${widthPct}%`, background: b.color, transformOrigin: "left" }}
                          >
                            <span>${b.low}</span>
                            <span>${b.high}</span>
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* X axis */}
                <div className="ml-36 pl-3 mt-3 pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between text-[9px] text-gray-400 dark:text-gray-500 font-mono">
                  <span>${FF_MIN}</span>
                  <span>$120</span>
                  <span>$170</span>
                  <span>$220</span>
                  <span>${FF_MAX}</span>
                </div>
              </div>

              <p className="mt-5 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "Standalone 방법들 ($145-$195) 의 상단에 offer가 위치. \"DCF + Synergy\" 막대 ($180-$240) 안에서는 하단 ~30% 지점. Synergy 가정이 $1B annual이 정당화 가능하다면 offer는 합리적, 못 채우면 over-pay."
                  : "Offer sits at the top of standalone methods ($145-$195). Within 'DCF + Synergy' ($180-$240), it lands ~30% from the bottom. If the ~$1B annual synergy holds, the offer is reasonable. If it doesn't, it's an over-pay."}
              </p>
            </div>

            <div className="text-[15px] text-gray-700 dark:text-gray-300 leading-[1.85] space-y-4 mt-7">
              <p className="font-bold text-gray-900 dark:text-gray-100">{ko ? "사후적 평가 — 2024년 시점" : "Looking back from 2024"}</p>
              <p>{ko
                ? "Microsoft × LinkedIn은 사후적으로 가장 성공한 strategic acquisition 중 하나로 평가받아요. 2023년 기준 LinkedIn 매출이 $15B+ (2015 대비 5배), 인수 시점 가정한 synergy도 대부분 달성. \"$196 over-pay\" 라는 발표 직후 시장 반응이 결과적으로 틀렸던 케이스예요. 모델링 관점에서 보면 — synergy 가정이 ambitious했지만 실현 가능했고, 통합 실행도 약속대로 진행된 드문 사례입니다."
                : "Microsoft × LinkedIn is now considered one of the most successful strategic acquisitions ever. By 2023, LinkedIn revenue was $15B+ (5× its 2015 level), and most of the assumed synergies materialized. The 'over-pay at $196' market reaction at announcement turned out to be wrong. Modeling-wise — the synergy assumptions were ambitious but achievable, and integration delivered as promised. A rare clean success."}</p>
              <p>{ko
                ? "Modelling 시리즈 6챕터를 마무리하며 — Ch.1의 표준 규칙부터 Ch.5의 driver-based forecasting까지, 그리고 이번 챕터의 strategic acquisition까지. 한 deal 안에서 모든 sheet가 어떻게 연결되는지를 본 셈이에요. Microsoft × LinkedIn 같은 strategic deal에서는 standalone DCF + synergy build + accretion/dilution이 세 다리로 가격을 떠받치고, LBO에서는 sources & uses + debt schedule + returns가 다른 세 다리로 가격을 떠받칩니다. Deal 종류가 바뀌면 sheet 조합이 바뀔 뿐, mechanics는 같아요."
                : "Closing the Modelling series — from Ch.1's standards through Ch.5's driver-based forecasting and this chapter's strategic acquisition. You've seen how every sheet links in one deal. For strategic deals like Microsoft × LinkedIn, standalone DCF + synergy build + accretion/dilution form the three legs supporting the price. For LBOs, sources & uses + debt schedule + returns form a different three. Different deals shuffle the sheet combinations; the mechanics stay the same."}</p>
            </div>
          </motion.section>

          {/* Series complete */}
          <motion.section initial="hidden" whileInView="show" viewport={VP} variants={fadeUp()} className="mt-12 mb-10">
            <div className="border-l-2 pl-4 py-1" style={{ borderColor: ACCENT }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>{ko ? "시리즈 종료" : "Series complete"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Modelling 시리즈 — 6챕터 완결" : "Modelling series — six chapters wrapped"}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {ko
                  ? "Ch.1 표준 규칙, Ch.2 3-Statement 연결, Ch.3 DCF in Excel, Ch.4 LBO Model, Ch.5 Operating Model · Driver-based forecasting, Ch.6 Microsoft × LinkedIn case. 모델의 alphabet에서 실제 deal model까지 6단계."
                  : "Ch.1 standards, Ch.2 3-statement linkage, Ch.3 DCF in Excel, Ch.4 LBO model, Ch.5 operating model / driver-based forecasting, Ch.6 Microsoft × LinkedIn case. From model alphabet to real deal models — six steps."}
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
