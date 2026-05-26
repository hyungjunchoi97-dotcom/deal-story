"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";

import type { MarketDeal } from "@/data/market-deals";

type Lang = "ko" | "en";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE, delay },
  },
});
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

// ── Accent ─────────────────────────────────────────────────────────────────────
const accent = "#7c3aed";       // violet-700
const accentLight = "#ede9fe";  // violet-100
const accentDark = "#5b21b6";   // violet-800

// ── keyTerm → Market 101 slug map ─────────────────────────────────────────────
const TERM_SLUG: Record<string, string> = {
  "ALM (자산부채관리)": "alm",
  "ALM (Asset-Liability Management)": "alm",
};

// ── Chart Data ────────────────────────────────────────────────────────────────

// 예금 성장 차트
const depositData = [
  { year: "2018", deposits: 49 },
  { year: "2019", deposits: 61 },
  { year: "2020", deposits: 102 },
  { year: "2021", deposits: 189 },
  { year: "2022", deposits: 173 },
  { year: "Q1 2023", deposits: 161 },
];

// HTM vs AFS vs 대출 포트폴리오
const portfolioData = [
  { year: "2020", htm: 13, afs: 27, loans: 43 },
  { year: "2021", htm: 98, afs: 27, loans: 66 },
  { year: "2022", htm: 91, afs: 26, loans: 74 },
];

// 연준 금리 인상 vs HTM 미실현 손실
const rateData = [
  { quarter: "21 Q4", fedRate: 0.25, loss: 2.5 },
  { quarter: "22 Q1", fedRate: 0.5,  loss: 4.5 },
  { quarter: "22 Q2", fedRate: 1.75, loss: 9.0 },
  { quarter: "22 Q3", fedRate: 3.25, loss: 11.5 },
  { quarter: "22 Q4", fedRate: 4.5,  loss: 15.2 },
  { quarter: "23 Q1", fedRate: 5.0,  loss: 15.0 },
];

// ── Main export ───────────────────────────────────────────────────────────────
export default function SVBClient({
  deal,
  lang,
}: {
  deal: MarketDeal;
  lang: "ko" | "en";
}) {
  const ko = lang === "ko";

  // ── Timeline Events (depends on ko) ──────────────────────────────────────────
  const timelineEvents = [
    {
      date: ko ? "3월 8일 (목)" : "Mar 8 (Thu)",
      title: ko ? "AFS 매각 공시" : "AFS Sale Disclosure",
      desc: ko
        ? "SVB, $21B AFS 포트폴리오 전량 매각 완료·$18억 손실 공시. $22.5억 증자 계획 발표."
        : "SVB announces full sale of $21B AFS portfolio, recognizing $1.8B loss. Announces $2.25B equity raise.",
      severity: "warning",
    },
    {
      date: ko ? "3월 9일 (금) 오전" : "Mar 9 (Fri) AM",
      title: ko ? "VC 네트워크 경보" : "VC Network Alert",
      desc: ko
        ? "Founders Fund, KPCB 등 주요 VC가 포트폴리오사에 SVB 예금 인출 권고. Twitter 통해 정보 급속 확산."
        : "Founders Fund, KPCB and others advise portfolio companies to withdraw SVB deposits. Information spreads instantly via Twitter.",
      severity: "warning",
    },
    {
      date: ko ? "3월 9일 (금)" : "Mar 9 (Fri)",
      title: ko ? "주가 –60%, 증자 실패" : "Stock –60%, Capital Raise Fails",
      desc: ko
        ? "SVB 주가 하루 60% 폭락. 기관 투자자 증자 참여 거절. 신용등급 강등 검토 개시."
        : "SVB stock falls 60% in one day. Institutional investors refuse the capital raise. Moody's places SVB on review for downgrade.",
      severity: "danger",
    },
    {
      date: ko ? "3월 10일 (토) 새벽" : "Mar 10 (Sat) Morning",
      title: ko ? "$420억 인출 쇄도" : "$42B Withdrawal Surge",
      desc: ko
        ? "단 하루에 $420억 인출 시도 — SVB 전체 예금의 약 25%. 은행 지급 불능 확정."
        : "A single-day withdrawal attempt of $42B — ~25% of SVB's total deposits. Insolvency confirmed.",
      severity: "danger",
    },
    {
      date: ko ? "3월 10일 (토) 오전" : "Mar 10 (Sat) AM",
      title: ko ? "FDIC 강제 폐쇄" : "FDIC Seizure",
      desc: ko
        ? "FDIC가 SVB를 폐쇄, 예금보험공사 관리로 이전 — 미국 역사상 두 번째로 큰 은행 도산."
        : "FDIC seizes SVB and transfers to FDIC receivership — the second-largest US bank failure in history.",
      severity: "critical",
    },
    {
      date: ko ? "3월 12일 (일)" : "Mar 12 (Sun)",
      title: ko ? "BTFP 도입 · 예금자 전액 보호" : "BTFP Launch · Full Depositor Protection",
      desc: ko
        ? "연준·FDIC·재무부 공동 성명: 모든 SVB 예금자 전액 보호. 연준, BTFP 발표 — HTM 채권을 액면가로 담보 대출."
        : "Fed/FDIC/Treasury joint statement: all SVB depositors fully protected. Fed launches BTFP — loans against HTM bonds at face value.",
      severity: "resolution",
    },
  ];

  // severity → tailwind colors
  const severityColors: Record<string, { dot: string; border: string; bg: string; text: string; badge: string }> = {
    warning:    { dot: "bg-amber-400",   border: "border-amber-300",  bg: "bg-amber-50 dark:bg-amber-900/25",    text: "text-amber-800 dark:text-amber-200",    badge: "bg-amber-100 text-amber-700" },
    danger:     { dot: "bg-rose-500",    border: "border-rose-400",   bg: "bg-rose-50 dark:bg-rose-900/25",      text: "text-rose-800 dark:text-rose-200",      badge: "bg-rose-100 text-rose-700" },
    critical:   { dot: "bg-red-700",     border: "border-red-600",    bg: "bg-red-50 dark:bg-red-900/30",        text: "text-red-800 dark:text-red-200",        badge: "bg-red-100 text-red-800" },
    resolution: { dot: "bg-emerald-500", border: "border-emerald-400",bg: "bg-emerald-50 dark:bg-emerald-900/25",text: "text-emerald-800 dark:text-emerald-200", badge: "bg-emerald-100 text-emerald-700" },
  };

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Header ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">

            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4 flex-wrap">
              <Link
                href={ko ? "/" : "/en"}
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link
                href={ko ? "/market" : "/en/market"}
                className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                {ko ? "마켓" : "Market"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">
                {ko ? "FIG 드라마" : "FIG Drama"}
              </span>
            </div>

            {/* Category badge */}
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4"
              style={{ background: accentLight, color: accent }}
            >
              {ko ? "FIG 드라마 · 2023" : "FIG Drama · 2023"}
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {ko ? deal.title : deal.titleEn}
            </motion.h1>
            {ko && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4"
              >
                {deal.titleEn}
              </motion.p>
            )}

            {/* Excerpt */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? deal.excerpt : deal.excerptEn}
            </motion.p>

            {/* Meta: reading time + tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-5 flex-wrap"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {deal.readingMinutes}
                {ko ? "분 읽기" : " min read"}
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {(ko ? deal.tags : (deal.tagsEn ?? deal.tags)).slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>


        {/* ── Share — top ── */}
        <div className="flex justify-end mb-6">
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="top" lang={lang} />
        </div>

        {/* ── Executive Summary ── */}
        {deal.executiveSummary && (
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="max-w-3xl mx-auto px-5 pt-8"
          >
            <div
              className="rounded-xl border-l-4 px-5 py-4"
              style={{ borderColor: accent, background: accentLight }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: accentDark }}
              >
                {ko ? "핵심 요약" : "Key Takeaways"}
              </p>
              <ul className="space-y-2">
                {(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed" style={{ color: accentDark }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── Deal Snapshot ── */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-5">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "딜 스냅샷" : "Deal Snapshot"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <motion.div
              variants={fadeUp(0.05)}
              className="rounded-2xl overflow-hidden border-2"
              style={{ borderColor: accentLight }}
            >
              {/* Snapshot header */}
              <div
                className="px-5 py-3 flex items-center gap-2"
                style={{ background: accent }}
              >
                <p className="text-[10px] font-black text-white uppercase tracking-widest">
                  {ko ? "실리콘밸리은행 SVB — 핵심 수치" : "Silicon Valley Bank SVB — Key Figures"}
                </p>
              </div>

              {/* Grid rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x bg-white dark:bg-gray-950">
                {deal.snapshot.map((row, i) => (
                  <motion.div
                    key={row.labelKo}
                    variants={fadeUp(i * 0.06)}
                    className={`px-5 py-4 ${
                      i % 2 === 0 && i === deal.snapshot.length - 1
                        ? "sm:col-span-2"
                        : ""
                    }`}
                  >
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">
                      {ko ? row.labelKo : row.labelEn}
                    </p>
                    <p className="text-[14px] font-bold leading-snug text-gray-900 dark:text-gray-100">
                      {row.value}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Prominent callout: 48h collapse stats */}
              <div
                className="grid grid-cols-3 divide-x border-t-2"
                style={{ borderColor: accentLight }}
              >
                <div className="px-3 py-5 text-center" style={{ background: "#faf5ff" }}>
                  <p className="text-[10px] font-bold mb-1" style={{ color: accent }}>
                    {ko ? "무보험 예금" : "Uninsured Deposits"}
                  </p>
                  <p className="text-3xl font-black" style={{ color: accent }}>94%</p>
                  <p className="text-[11px] font-medium mt-1 text-violet-500">
                    {ko ? "FDIC 한도 초과" : "Above FDIC limit"}
                  </p>
                </div>
                <div className="px-3 py-5 text-center bg-rose-50 dark:bg-rose-900/20">
                  <p className="text-[10px] font-bold text-rose-500 mb-1">
                    {ko ? "하루 인출" : "1-Day Withdrawal"}
                  </p>
                  <p className="text-3xl font-black text-rose-600 dark:text-rose-400">$42B</p>
                  <p className="text-[11px] font-medium text-rose-400 mt-1">
                    {ko ? "전체 예금의 25%" : "~25% of total deposits"}
                  </p>
                </div>
                <div className="px-3 py-5 text-center bg-amber-50 dark:bg-amber-900/20">
                  <p className="text-[10px] font-bold text-amber-600 mb-1">
                    {ko ? "공시→폐쇄" : "Disclosure→Seizure"}
                  </p>
                  <p className="text-3xl font-black text-amber-600 dark:text-amber-400">48h</p>
                  <p className="text-[11px] font-medium text-amber-500 mt-1">
                    {ko ? "역대급 속도" : "Record speed"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 1: 배경 — 팬데믹 유동성 급증
          ══════════════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko
                  ? "배경: 팬데믹이 만든 역대급 예금 폭탄"
                  : "Background: The Pandemic-Era Deposit Surge"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "2020~2021년, 연준의 제로금리와 양적완화(QE)가 VC 생태계에 사상 최대 자금을 쏟아부었다. 스타트업들은 대규모 투자를 받아 SVB에 예치했고, 예금은 폭발적으로 증가했다."
                    : "In 2020–2021, the Fed's zero-rate policy and quantitative easing flooded the VC ecosystem with unprecedented capital. Startups received massive funding rounds and deposited the proceeds at SVB, causing explosive deposit growth.",
                  ko
                    ? "SVB 예금: 2019년 $610억 → 2021년 $1,890억 (2년 만에 3배 이상). 이 돈은 급격히 불어났지만, 대출 수요는 그 속도를 따라가지 못했다."
                    : "SVB deposits: $61B in 2019 → $189B in 2021 (more than 3x in just two years). Capital flooded in faster than loan demand could absorb it.",
                  ko
                    ? "갈 곳 없는 돈을 어디에 넣을까? SVB 경영진의 선택: 장기 MBS(모기지담보증권)와 미국 국채에 대규모 투자. 당시 논리는 단순했다 — \"금리는 오랫동안 낮을 것이다.\""
                    : "Where to put all that cash? SVB management's answer: large-scale investment in long-duration MBS and US Treasuries. The logic was simple at the time — \"rates will stay low for a long time.\"",
                ].map((para, j) => (
                  <motion.p
                    key={j}
                    variants={fadeUp(j * 0.04)}
                    className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* AreaChart — Deposit Growth */}
            <motion.div variants={fadeUp(0.1)} className="mt-8">
              <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {ko ? "SVB 예금 잔고 추이 ($B)" : "SVB Deposit Balance Trend ($B)"}
                  </p>
                </div>
                <div className="p-5">
                  <ResponsiveContainer width="100%" height={220}>
                    <AreaChart data={depositData} margin={{ top: 8, right: 16, bottom: 4, left: 16 }}>
                      <defs>
                        <linearGradient id="depositGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={accent} stopOpacity={0.25} />
                          <stop offset="95%" stopColor={accent} stopOpacity={0.03} />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="year"
                        tick={{ fontSize: 11, fill: "#9ca3af" }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fontSize: 10, fill: "#9ca3af" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `$${v}B`}
                      />
                      <Tooltip
                        formatter={(value) => [`$${value}B`, ko ? "예금 잔고" : "Deposits"]}
                        contentStyle={{
                          fontSize: 11,
                          borderRadius: 8,
                          border: "1px solid #e5e7eb",
                          background: "white",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="deposits"
                        stroke={accent}
                        strokeWidth={2.5}
                        fill="url(#depositGrad)"
                        dot={{ fill: accent, r: 4, strokeWidth: 0 }}
                        activeDot={{ fill: accent, r: 5 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    {ko
                      ? "출처: SVB Financial Group 연간보고서. 2021년 고점 $1,890억에서 파산 직전 $1,610억으로 감소."
                      : "Source: SVB Financial Group annual reports. Peak $189B in 2021, declining to $161B just before failure."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 2: HTM vs AFS — 회계 선택의 함정
          ══════════════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko
                  ? "HTM vs AFS: 평가손을 숨긴 회계 선택"
                  : "HTM vs AFS: Hiding Losses Through Accounting Classification"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "채권 투자를 회계 처리할 때 은행은 두 가지 분류 중 하나를 선택할 수 있다: HTM(만기보유) 또는 AFS(매도가능). 이 선택이 SVB의 운명을 결정했다."
                    : "When accounting for bond investments, banks can choose one of two classifications: HTM (Held-to-Maturity) or AFS (Available-for-Sale). This choice determined SVB's fate.",
                  ko
                    ? "HTM은 채권을 상각원가로 계상한다 — 금리가 올라도 시가 평가 손실이 재무제표에 반영되지 않는다. 단, 매각하는 순간 손실 전액을 즉시 인식해야 한다. AFS는 공정가치(시장가)로 평가하고 미실현 손익을 OCI(기타포괄손익)에 반영한다."
                    : "HTM carries bonds at amortized cost — even if rates rise, unrealized losses don't show up in income statements. But the moment you sell, you must recognize the full loss immediately. AFS marks bonds to fair value, with unrealized gains/losses flowing through OCI (Other Comprehensive Income).",
                  ko
                    ? "SVB의 선택: 2021년 HTM 포트폴리오를 $982억으로 급격히 확대 (전체 투자자산의 78%). \"금리는 오래 낮을 것\"이라는 경영진 전망에 기반한 결정이었다. 이 결정이 2022년 금리 인상 사이클에서 치명적 함정이 되었다."
                    : "SVB's choice: rapidly expanded the HTM portfolio to $98.2B in 2021 (78% of total investments). This was based on management's view that rates would remain low. This decision became a fatal trap in the 2022 rate-hike cycle.",
                ].map((para, j) => (
                  <motion.p
                    key={j}
                    variants={fadeUp(j * 0.04)}
                    className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* HTM vs AFS Compare Table */}
            <motion.div variants={fadeUp(0.1)} className="mt-8">
              <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {ko ? "HTM vs AFS 비교" : "HTM vs AFS Comparison"}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <th className="px-4 py-3 text-left font-bold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 w-1/3">
                          {ko ? "구분" : "Category"}
                        </th>
                        <th className="px-4 py-3 text-left font-bold bg-violet-50 dark:bg-violet-900/20" style={{ color: accent }}>
                          HTM
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20">
                          AFS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {[
                        {
                          label: ko ? "평가 방식" : "Valuation",
                          htm: ko ? "상각원가 (Amortized Cost)" : "Amortized Cost",
                          afs: ko ? "공정가치 (Fair Value)" : "Fair Value",
                        },
                        {
                          label: ko ? "미실현 손익 처리" : "Unrealized P&L",
                          htm: ko ? "재무제표 비반영" : "Not recognized in P&L",
                          afs: ko ? "OCI 반영 (자기자본 변동)" : "OCI (affects equity)",
                        },
                        {
                          label: ko ? "매각 시" : "Upon sale",
                          htm: ko ? "손실 즉시 전액 인식" : "Full loss recognized immediately",
                          afs: ko ? "손실 이미 OCI에 반영" : "Loss already in OCI",
                        },
                        {
                          label: ko ? "SVB 2022년 말" : "SVB end-2022",
                          htm: ko ? "$913억 (미실현 –$152억)" : "$91.3B (unrealized –$15.2B)",
                          afs: ko ? "$261억 (미실현 –$25억)" : "$26.1B (unrealized –$2.5B)",
                        },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
                          <td className="px-4 py-3 font-medium text-gray-600 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-900/30">
                            {row.label}
                          </td>
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-300 bg-violet-50/30 dark:bg-violet-900/10">
                            {row.htm}
                          </td>
                          <td className="px-4 py-3 text-gray-700 dark:text-gray-300 bg-blue-50/30 dark:bg-blue-900/10">
                            {row.afs}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* BarChart: Portfolio Composition */}
            <motion.div variants={fadeUp(0.15)} className="mt-6">
              <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {ko ? "SVB 투자 포트폴리오 구성 ($B)" : "SVB Investment Portfolio ($B)"}
                  </p>
                </div>
                <div className="p-5">
                  {/* Legend */}
                  <div className="flex items-center gap-5 mb-4 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm" style={{ background: accent }} />
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">HTM</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm" style={{ background: accentLight }} />
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">AFS</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm bg-gray-300 dark:bg-gray-600" />
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">{ko ? "대출" : "Loans"}</span>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={portfolioData} margin={{ top: 8, right: 16, bottom: 4, left: 8 }}>
                      <XAxis
                        dataKey="year"
                        tick={{ fontSize: 11, fill: "#9ca3af" }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fontSize: 10, fill: "#9ca3af" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `$${v}B`}
                      />
                      <Tooltip
                        formatter={(value, name) => {
                          const labels: Record<string, string> = ko
                            ? { htm: "HTM", afs: "AFS", loans: "대출" }
                            : { htm: "HTM", afs: "AFS", loans: "Loans" };
                          return [`$${value}B`, labels[name as string] ?? (name as string)];
                        }}
                        contentStyle={{
                          fontSize: 11,
                          borderRadius: 8,
                          border: "1px solid #e5e7eb",
                          background: "white",
                        }}
                      />
                      <Bar dataKey="htm" stackId="a" fill={accent} radius={[0, 0, 0, 0]} />
                      <Bar dataKey="afs" stackId="a" fill={accentLight} radius={[0, 0, 0, 0]} />
                      <Bar dataKey="loans" stackId="a" fill="#d1d5db" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    {ko
                      ? "2021년 HTM 급증 — $13B → $98B. AFS는 상대적으로 안정. 대출 성장 속도는 훨씬 느렸음."
                      : "HTM surged in 2021 — $13B → $98B. AFS remained relatively stable. Loan growth was far slower."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 3: 금리 인상이 쌓은 폭탄
          ══════════════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko
                  ? "2022년: 금리 인상이 쌓아올린 폭탄"
                  : "2022: How Rate Hikes Built the Ticking Bomb"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "채권의 듀레이션이 약 5.6년이었다. 금리가 1% 오르면 포트폴리오 가치가 약 5.6% 하락한다는 의미다. 2022년 연준이 금리를 0.25%에서 4.5%까지 올리면서, SVB의 HTM 포트폴리오는 막대한 잠재 손실을 쌓았다."
                    : "SVB's bonds had an average duration of ~5.6 years. For every 1% rise in rates, the portfolio value would fall ~5.6%. As the Fed raised rates from 0.25% to 4.5% in 2022, SVB's HTM portfolio accumulated enormous unrealized losses.",
                  ko
                    ? "간단한 계산: HTM $913억 × 듀레이션 5.6년 × 금리 상승 +4.25% ≈ 약 $217억 잠재 손실. 실제 공시된 미실현 HTM 손실(2022년 말): $152억 — SVB 자기자본 $163억과 거의 같은 규모."
                    : "Simple math: HTM $91.3B × 5.6yr duration × rate rise of +4.25% ≈ ~$21.7B potential loss. Actual disclosed unrealized HTM loss (end-2022): $15.2B — nearly equal to SVB's total equity of $16.3B.",
                  ko
                    ? "그러나 HTM 분류 덕분에 이 손실은 재무제표에 나타나지 않았다. SVB는 기술적으로 '자본 고갈' 상태였지만, 회계상으로는 멀쩡해 보였다. 문제는 그 HTM 채권을 매각해야 하는 순간이 오면 모든 것이 드러난다는 것이었다."
                    : "But thanks to HTM classification, these losses were invisible in the financial statements. SVB was technically 'capital depleted,' but looked fine on paper. The problem: the moment they needed to sell those HTM bonds, everything would be exposed.",
                ].map((para, j) => (
                  <motion.p
                    key={j}
                    variants={fadeUp(j * 0.04)}
                    className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* ComposedChart: Fed Rate vs HTM Unrealized Loss */}
            <motion.div variants={fadeUp(0.1)} className="mt-8">
              <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {ko
                      ? "연준 기준금리 vs HTM 미실현 손실"
                      : "Fed Funds Rate vs HTM Unrealized Loss"}
                  </p>
                </div>
                <div className="p-5">
                  {/* Legend */}
                  <div className="flex items-center gap-5 mb-4 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm" style={{ background: accent }} />
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">
                        {ko ? "연준 기준금리 (%)" : "Fed Funds Rate (%)"}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm bg-rose-400" />
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">
                        {ko ? "HTM 미실현 손실 ($B)" : "HTM Unrealized Loss ($B)"}
                      </span>
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={240}>
                    <ComposedChart data={rateData} margin={{ top: 8, right: 40, bottom: 4, left: 8 }}>
                      <XAxis
                        dataKey="quarter"
                        tick={{ fontSize: 10, fill: "#9ca3af" }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        yAxisId="left"
                        tick={{ fontSize: 10, fill: "#9ca3af" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `${v}%`}
                        domain={[0, 6]}
                      />
                      <YAxis
                        yAxisId="right"
                        orientation="right"
                        tick={{ fontSize: 10, fill: "#9ca3af" }}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={(v) => `$${v}B`}
                        domain={[0, 20]}
                      />
                      <Tooltip
                        formatter={(value, name) => {
                          if (name === "fedRate") return [`${value}%`, ko ? "연준 기준금리" : "Fed Funds Rate"];
                          if (name === "loss") return [`$${value}B`, ko ? "HTM 미실현 손실" : "HTM Unrealized Loss"];
                          return [String(value), String(name)];
                        }}
                        contentStyle={{
                          fontSize: 11,
                          borderRadius: 8,
                          border: "1px solid #e5e7eb",
                          background: "white",
                        }}
                      />
                      <Bar yAxisId="right" dataKey="loss" fill="#fb7185" radius={[4, 4, 0, 0]} />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="fedRate"
                        stroke={accent}
                        strokeWidth={2.5}
                        dot={{ fill: accent, r: 4, strokeWidth: 0 }}
                        activeDot={{ fill: accent, r: 5 }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                  <p className="text-[10px] text-gray-400 text-center mt-2">
                    {ko
                      ? "연준 금리 인상과 HTM 미실현 손실이 나란히 증가. 2022년 말 HTM 손실 $152억 = SVB 자기자본 $163억과 거의 동일."
                      : "Fed rate hikes and HTM unrealized losses moved in lockstep. End-2022 HTM loss of $15.2B ≈ SVB's entire equity of $16.3B."}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 4: 48시간 붕괴 타임라인
          ══════════════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "48시간: 은행이 사라지다" : "48 Hours: How a Bank Disappears"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <motion.p
                variants={fadeUp()}
                className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {ko
                  ? "2023년 3월 8일 목요일 오후, SVB의 한 공시가 역사상 가장 빠른 은행 붕괴를 촉발했다. 공시에서 폐쇄까지 48시간도 채 걸리지 않았다."
                  : "On the afternoon of Thursday, March 8, 2023, a single SVB disclosure triggered the fastest bank collapse in history. From disclosure to seizure: less than 48 hours."}
              </motion.p>
            </div>

            {/* Timeline */}
            <motion.div variants={fadeUp(0.1)} className="mt-8">
              <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {ko ? "48시간 붕괴 타임라인 — 2023년 3월" : "48-Hour Collapse Timeline — March 2023"}
                  </p>
                </div>
                <div className="p-5 sm:p-8">
                  {/* Vertical timeline */}
                  <div className="relative pl-8">
                    {/* Vertical connector line */}
                    <div
                      className="absolute left-3 top-4 bottom-4 w-0.5"
                      style={{
                        background: "linear-gradient(to bottom, #fbbf24, #f87171, #b91c1c, #10b981)",
                      }}
                    />
                    <div className="space-y-6">
                      {timelineEvents.map((ev, i) => {
                        const colors = severityColors[ev.severity];
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={VP}
                            transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                            className="relative"
                          >
                            {/* Circle dot */}
                            <div
                              className={`absolute -left-8 top-3.5 w-6 h-6 rounded-full ${colors.dot} border-2 border-white dark:border-gray-900 flex items-center justify-center shadow-sm`}
                            >
                              <span className="text-[8px] font-black text-white">{i + 1}</span>
                            </div>
                            {/* Card */}
                            <div className={`rounded-xl border p-4 ${colors.bg} ${colors.border}`}>
                              <div className="flex items-start gap-2 mb-1.5 flex-wrap">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colors.badge}`}>
                                  {ev.date}
                                </span>
                              </div>
                              <p className={`text-[13px] font-bold leading-snug mb-1.5 ${colors.text}`}>
                                {ev.title}
                              </p>
                              <p className={`text-[12px] leading-relaxed opacity-85 ${colors.text}`}>
                                {ev.desc}
                              </p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 5: 왜 SVB 예금자들은 특히 취약했나
          ══════════════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko
                  ? "왜 SVB는 48시간 만에 무너졌나 — 예금자 집중의 함정"
                  : "Why SVB Fell in 48 Hours — The Concentrated Depositor Trap"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "일반 리테일 뱅크의 예금 중 FDIC 보험 한도($250,000) 초과 예금은 보통 30~40%다. SVB는 달랐다: 무보험 예금 비율 94%. 고객이 대부분 스타트업과 VC 펀드였기 때문이다."
                    : "In a typical retail bank, 30–40% of deposits exceed the FDIC insurance limit ($250,000). SVB was different: 94% of deposits were uninsured. This is because customers were overwhelmingly startups and VC funds.",
                  ko
                    ? "VC/스타트업 생태계의 특성: 모든 주요 VC가 같은 네트워크에 연결되어 있다. Founders Fund가 인출 권고를 내리자 Slack과 Twitter를 통해 수천 개 스타트업에 즉시 전파됐다. 기존 뱅크런은 사람들이 줄을 서는 데 며칠이 걸렸다. SVB는 앱 탭 한 번이었다."
                    : "The VC/startup ecosystem is a tightly connected network. When Founders Fund issued a withdrawal recommendation, it spread instantly to thousands of startups via Slack and Twitter. Traditional bank runs took days — people had to physically queue. SVB's took a single tap on a banking app.",
                  ko
                    ? "비유: 일반 뱅크런은 긴 줄(2-3일). SVB는 단체채팅방 하나. 이 구조적 취약성은 예금자 구성이 얼마나 중요한지를 은행 규제 역사에 새겼다."
                    : "Analogy: a traditional bank run is a long physical queue (2–3 days). SVB's was a single group chat. This structural vulnerability permanently imprinted on regulatory history the critical importance of depositor composition.",
                ].map((para, j) => (
                  <motion.p
                    key={j}
                    variants={fadeUp(j * 0.04)}
                    className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Stats callout box */}
            <motion.div variants={fadeUp(0.1)} className="mt-8">
              <div className="rounded-2xl border border-gray-200/60 dark:border-gray-700/60 overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {ko ? "SVB 붕괴 핵심 수치" : "SVB Collapse Key Stats"}
                  </p>
                </div>
                <div className="grid grid-cols-3 divide-x divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-950">
                  <div className="px-4 py-6 text-center">
                    <p className="text-3xl font-black" style={{ color: accent }}>94%</p>
                    <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-2">
                      {ko ? "무보험 예금 비율" : "Uninsured deposit ratio"}
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                      {ko ? "FDIC $25만 초과" : "Above FDIC $250K limit"}
                    </p>
                  </div>
                  <div className="px-4 py-6 text-center">
                    <p className="text-3xl font-black text-rose-500">$420억</p>
                    <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-2">
                      {ko ? "하루 인출 시도" : "Single-day withdrawal attempt"}
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                      {ko ? "전체 예금의 ~25%" : "~25% of total deposits"}
                    </p>
                  </div>
                  <div className="px-4 py-6 text-center">
                    <p className="text-3xl font-black text-amber-500">48h</p>
                    <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mt-2">
                      {ko ? "공시 → 폐쇄" : "Disclosure → Seizure"}
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">
                      {ko ? "역대 최단 붕괴 속도" : "Fastest collapse in US history"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ══════════════════════════════════════════════════════════════════════
              SECTION 6: BTFP — 전이를 막은 방화벽
          ══════════════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko
                  ? "BTFP: 시스템 위기를 막은 연준의 방화벽"
                  : "BTFP: The Fed's Firewall Against Systemic Contagion"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <div className="space-y-3">
                {[
                  ko
                    ? "3월 10일 SVB 폐쇄 이후, 연준·FDIC·재무부는 3월 12일 일요일 저녁 공동 성명을 발표했다: 모든 SVB 예금자 전액 보호. 그리고 은행 시스템 안정을 위한 새로운 도구 — BTFP(은행기간자금지원프로그램) — 를 도입했다."
                    : "Following SVB's closure on March 10, the Fed, FDIC, and Treasury issued a joint statement on Sunday evening, March 12: all SVB depositors would be fully protected. They also introduced a new tool — the BTFP (Bank Term Funding Program) — to stabilize the banking system.",
                  ko
                    ? "BTFP의 핵심 메커니즘: 은행들의 HTM 채권을 시장가(70~80 cents on the dollar)가 아닌 액면가(100 cents)로 담보로 인정하고 대출해준다. 효과: 미국 은행권 전체의 잠재적 $600억+ 미실현 손실이 즉각 담보 가치로 전환되었다."
                    : "BTFP's core mechanism: accept banks' HTM bonds as collateral not at market value (~70–80 cents on the dollar) but at face value (100 cents). Effect: over $600B in potential unrealized losses across US banks were instantly converted to usable collateral.",
                  ko
                    ? "비판도 있었다: 사실상 주주가 아닌 예금자를 통한 구제 효과, 도덕적 해이(차후 위험 감수 행동 조장), '너무 크지 않은' 은행도 구제 대상이 될 수 있다는 시장 기대 형성. 그러나 시스템 전이를 막는 데는 효과적이었다 — 3월 13일부터 시장은 안정을 찾기 시작했다."
                    : "There were criticisms: implicit subsidization of depositors over shareholders, moral hazard concerns (encouraging future risk-taking), and the creation of market expectations that even non-TBTF banks could receive protection. But it was effective at stopping contagion — markets began stabilizing from March 13 onward.",
                ].map((para, j) => (
                  <motion.p
                    key={j}
                    variants={fadeUp(j * 0.04)}
                    className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* BTFP comparison box */}
            <motion.div variants={fadeUp(0.1)} className="mt-8">
              <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {ko ? "BTFP 전후 비교" : "Before vs After BTFP"}
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px]">
                    <thead>
                      <tr className="border-b border-gray-100 dark:border-gray-800">
                        <th className="px-4 py-3 text-left font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20">
                          {ko ? "BTFP 없었다면" : "Without BTFP"}
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/20">
                          {ko ? "BTFP 도입 후" : "With BTFP"}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {[
                        {
                          without: ko ? "다른 지역은행들도 예금 인출 공황" : "Regional bank deposit panic would spread",
                          with: ko ? "예금자: \"연준이 뒤를 받친다\"" : "Depositors: \"The Fed has our backs\"",
                        },
                        {
                          without: ko ? "HTM 손실 강제 인식 연쇄" : "Forced HTM loss recognition cascade",
                          with: ko ? "HTM 액면가 담보 → 유동성 확보" : "HTM at face value → liquidity secured",
                        },
                        {
                          without: ko ? "금융 시스템 신뢰 붕괴 위험" : "Risk of financial system confidence collapse",
                          with: ko ? "3월 13일부터 시장 안정" : "Markets stabilize from March 13",
                        },
                      ].map((row, i) => (
                        <tr key={i}>
                          <td className="px-4 py-3 text-rose-700 dark:text-rose-300 bg-rose-50/30 dark:bg-rose-900/10">
                            {row.without}
                          </td>
                          <td className="px-4 py-3 text-emerald-700 dark:text-emerald-300 bg-emerald-50/30 dark:bg-emerald-900/10">
                            {row.with}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Key Terms ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2
              variants={fadeUp()}
              className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1"
            >
              {ko ? "핵심 용어" : "Key Terms"}
            </motion.h2>
            <div className="w-8 h-0.5 mt-3 mb-5" style={{ background: accent }} />
            <div className="space-y-3">
              {deal.keyTerms.map((term, i) => {
                const displayTerm = ko ? term.term : term.termEn;
                const termSlug = TERM_SLUG[displayTerm];
                const termHref = termSlug
                  ? (ko ? `/market-101/${termSlug}` : `/en/market-101/${termSlug}`)
                  : null;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp()}
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"
                  >
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                        style={{ background: accent }}
                      >
                        {i + 1}
                      </span>
                      {termHref ? (
                        <Link
                          href={termHref}
                          className="font-bold text-[14px] hover:underline transition-colors"
                          style={{ color: accentDark }}
                        >
                          {displayTerm} ↗
                        </Link>
                      ) : (
                        <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">
                          {displayTerm}
                        </span>
                      )}
                    </div>
                    <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                      {ko ? term.definition : term.definitionEn}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ── Post-Deal Assessment ── */}
          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "딜 평가" : "Deal Assessment"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  variants={fadeUp()}
                  className="rounded-xl border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-900/15 p-5"
                >
                  <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
                    {ko ? "긍정적 결과" : "Positives"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.positives : deal.assessment.positivesEn).map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-emerald-800 dark:text-emerald-200 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeUp()}
                  className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50 dark:bg-red-900/15 p-5"
                >
                  <p className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3">
                    {ko ? "리스크 및 교훈" : "Risks & Lessons"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.risks : deal.assessment.risksEn).map((r, i) => (
                      <li key={i} className="flex items-start gap-2 text-[13px] text-red-800 dark:text-red-200 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.section>
          )}


        {/* ── Share — mid ── */}
        <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" lang={lang} />


          {/* ── FAQ ── */}
          {deal.faq && deal.faq.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <div className="space-y-3">
                {deal.faq.map((item, i) => (
                  <motion.details
                    key={i}
                    variants={fadeUp()}
                    className="group rounded-xl border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900/60 overflow-hidden"
                  >
                    <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none select-none">
                      <span className="text-[14px] font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                        {ko ? item.q : item.qEn}
                      </span>
                      <svg
                        className="w-4 h-4 text-gray-400 flex-shrink-0 transition-transform group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                        {ko ? item.a : item.aEn}
                      </p>
                    </div>
                  </motion.details>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── Related Content ── */}
          {(deal.relatedDealSlugs?.length || deal.relatedMarket101Slugs?.length) ? (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "함께 읽으면 좋은 콘텐츠" : "Related Content"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <div className="grid sm:grid-cols-2 gap-3">
                {deal.relatedDealSlugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market/${slug}` : `/en/market/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-violet-300 dark:hover:border-violet-700 hover:bg-violet-50/40 dark:hover:bg-violet-900/20 transition-all">
                        <span
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                          style={{ background: accent }}
                        >
                          M
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 transition-colors truncate group-hover:text-violet-700 dark:group-hover:text-violet-300">
                            {slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-violet-400 transition-colors text-sm flex-shrink-0">→</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                {deal.relatedMarket101Slugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market-101/${slug}` : `/en/market-101/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-teal-300 dark:hover:border-teal-700 hover:bg-teal-50/40 dark:hover:bg-teal-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-[11px] font-bold text-teal-600 dark:text-teal-400 flex-shrink-0">
                          101
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market 101</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors truncate">
                            {slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-teal-400 transition-colors text-sm flex-shrink-0">→</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ) : null}


        {/* ── Share — bottom ── */}
        <ShareButtons title={ko ? deal.title : deal.titleEn} variant="bottom" lang={lang} />


          {/* ── References ── */}
          {deal.references && deal.references.length > 0 && (
            <motion.section
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VP}
              className="border-t border-gray-200 dark:border-gray-700 pt-8"
            >
              <motion.h2
                variants={fadeUp()}
                className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4"
              >
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <ol className="space-y-2.5">
                {deal.references.map((ref) => (
                  <motion.li
                    key={ref.id}
                    variants={fadeUp()}
                    className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">
                        {ref.author}.
                      </span>{" "}
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic hover:underline transition-colors"
                          style={{ color: accent }}
                        >
                          {ref.title}
                        </a>
                      ) : (
                        <span className="italic">{ref.title}</span>
                      )}
                      {". "}
                      <span className="text-gray-400 dark:text-gray-500">{ref.source}.</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* ── Back links ── */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link
              href={ko ? "/market" : "/en/market"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium hover:underline"
              style={{ color: accent }}
            >
              ← {ko ? "마켓 전체 보기" : "All Market Deals"}
            </Link>
            <Link
              href={ko ? "/" : "/en"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "홈으로" : "Home"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
