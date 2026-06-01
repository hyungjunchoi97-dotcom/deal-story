"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart, Area, BarChart, Bar, Cell, LineChart, Line, ComposedChart,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { MarketDeal } from "@/data/market-deals";
import { DEAL_CATEGORY_META } from "@/data/market-deals";
import SeriesNav from "@/components/SeriesNav";
import { getMarketDealNav } from "@/data/market-deals";
import LikeButton from "@/components/LikeButton";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
};

// ── Accent colors ─────────────────────────────────────────────────────────────
const accent      = "#6b7280";
const accentLight = "rgb(243 244 246)";
const accentDark  = "#374151";

// ── Chart data ────────────────────────────────────────────────────────────────
// China HY property spread (approximate bps over UST)
const spreadData = [
  { date: "2019 Q1", spread: 450 },
  { date: "2019 Q4", spread: 500 },
  { date: "2020 Q1", spread: 700 },
  { date: "2020 Q3", spread: 550 },
  { date: "2021 Q1", spread: 600 },
  { date: "2021 Q3", spread: 950 },
  { date: "2021 Dec", spread: 2200 },
  { date: "2022 Q1", spread: 2800 },
  { date: "2022 Q2", spread: 3200 },
  { date: "2022 Q4", spread: 2600 },
  { date: "2023 Q2", spread: 1800 },
  { date: "2024 Q1", spread: 1500 },
];

// USD bond default volume by year ($B approximate)
const defaultVolumeData = [
  { year: "2020", volume: 8 },
  { year: "2021", volume: 35 },
  { year: "2022", volume: 62 },
  { year: "2023", volume: 28 },
  { year: "2024E", volume: 15 },
];

// Recovery rate comparison (cents on dollar)
const recoveryData = [
  { name: "Evergrande",        recovery: 3,  fill: "#dc2626" },
  { name: "Sunac",             recovery: 8,  fill: "#ea580c" },
  { name: "CIFI",              recovery: 12, fill: "#d97706" },
  { name: "Country Garden",    recovery: 18, fill: "#ca8a04" },
  { name: "SOE 평균 (참고)",   recovery: 85, fill: "#16a34a" },
];

// ── Main component ────────────────────────────────────────────────────────────
export default function ChinaRealEstateClient({
  deal,
  lang,
}: {
  deal: MarketDeal;
  lang: "ko" | "en";
}) {
  const ko = lang === "ko";

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Timeline
  const timeline = [
    {
      date:  ko ? "2020년 8월"   : "Aug 2020",
      title: ko ? "Three Red Lines 발표" : "Three Red Lines Announced",
      desc:  ko
        ? "PBOC·住建部, 부동산 개발사 레버리지 규제 3가지 기준 발표."
        : "PBOC and Ministry of Housing announce 3 leverage thresholds for real estate developers.",
      color: "warning" as const,
    },
    {
      date:  ko ? "2021년 9월"   : "Sep 2021",
      title: ko ? "Evergrande 주가 -80%" : "Evergrande Stock -80%",
      desc:  ko
        ? "달러채 이자 미지급 공개. 홍콩 상장 주가 6개월 만에 80% 폭락."
        : "Offshore coupon payment failure revealed. Hong Kong-listed stock crashes 80% in 6 months.",
      color: "danger" as const,
    },
    {
      date:  ko ? "2021년 12월"  : "Dec 2021",
      title: ko ? "Evergrande 공식 디폴트" : "Evergrande Official Default",
      desc:  ko
        ? "$3,000억+ 총부채 디폴트. 아시아 달러채 사상 최대 사건."
        : "$300B+ total debt default. Largest event in Asian dollar bond history.",
      color: "critical" as const,
    },
    {
      date:  ko ? "2022~2023년"  : "2022–2023",
      title: ko ? "30개+ 개발사 연쇄 디폴트" : "30+ Developers Cascade Default",
      desc:  ko
        ? "Country Garden, Sunac, CIFI 등 중국 민영 부동산 개발사 대규모 연쇄 디폴트."
        : "Country Garden, Sunac, CIFI and dozens of Chinese private developers default.",
      color: "critical" as const,
    },
    {
      date:  ko ? "2024년 1월"   : "Jan 2024",
      title: ko ? "홍콩 법원 Evergrande 청산 명령" : "Hong Kong Court Orders Evergrande Liquidation",
      desc:  ko
        ? "청산 명령 발부. 그러나 본토 법원 협조 부재로 실질 집행 불가."
        : "Liquidation order issued. But lack of mainland court cooperation prevents actual enforcement.",
      color: "danger" as const,
    },
  ];

  const timelineColorMap = {
    warning:  { bg: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700",  dot: "bg-amber-400",  text: "text-amber-700 dark:text-amber-300" },
    danger:   { bg: "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-700",      dot: "bg-rose-500",   text: "text-rose-700 dark:text-rose-300" },
    critical: { bg: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700",          dot: "bg-red-600",    text: "text-red-700 dark:text-red-300" },
  };

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Page Header ─────────────────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">

            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link
                href={ko ? "/" : "/en"}
                className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link
                href={ko ? "/market" : "/en/market"}
                className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                {ko ? "마켓" : "Market"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">
                {ko ? "위기" : "Crisis"}
              </span>
            </div>

            {/* Crisis category badge */}
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4"
              style={{ background: accentLight, color: accentDark }}
            >
              {ko ? deal.categoryLabel : deal.categoryLabelEn}
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
                transition={{ duration: 0.6, delay: 0.1 }}
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

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-5 flex-wrap"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {deal.readingMinutes}{ko ? "분 읽기" : " min read"}
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

        {/* ── Executive Summary ──────────────────────────────────────────────── */}
        {deal.executiveSummary && (
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="max-w-3xl mx-auto px-5 pt-10"
          >
            <div
              className="rounded-xl border-l-4 px-5 py-4 bg-gray-50 dark:bg-gray-900/30"
              style={{ borderColor: accent }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: accent }}
              >
                {ko ? "핵심 요약" : "Key Takeaways"}
              </p>
              <ul className="space-y-2">
                {(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[13px] leading-relaxed text-gray-700 dark:text-gray-300"
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: accent }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* ── Deal Snapshot card ─────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
          >
            <div className="h-1" style={{ background: accent }} />
            <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {ko ? "딜 스냅샷" : "Deal Snapshot"}
              </p>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {deal.snapshot.map((row, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.38, delay: i * 0.06, ease: EASE }}
                    className="flex justify-between gap-3 py-2 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
                  >
                    <span className="text-[11px] text-gray-500 dark:text-gray-400 flex-shrink-0">
                      {ko ? row.labelKo : row.labelEn}
                    </span>
                    <span className="text-[12px] font-semibold text-right leading-snug text-gray-800 dark:text-gray-200">
                      {ko ? row.value : (row.valueEn ?? row.value)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Body ──────────────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* 3-stat callout */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="grid grid-cols-3 gap-3"
          >
            {[
              {
                stat: "$3,000억+",
                label: ko ? "Evergrande 총부채" : "Evergrande total debt",
                color: "text-red-600 dark:text-red-400",
                bg: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700",
              },
              {
                stat: "30개+",
                label: ko ? "디폴트 민영 개발사" : "Developers defaulted",
                color: "text-orange-600 dark:text-orange-400",
                bg: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700",
              },
              {
                stat: ko ? "2~5센트" : "2–5¢",
                label: ko ? "역외 채권 회수율" : "Offshore recovery rate",
                color: "text-amber-600 dark:text-amber-400",
                bg: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.07)}
                className={`rounded-xl border p-4 text-center ${item.bg}`}
              >
                <p className={`text-xl sm:text-2xl font-black tracking-tight ${item.color}`}>
                  {item.stat}
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-snug">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Section 0: Three Red Lines ─────────────────────────────────── */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Three Red Lines: 레버리지 규제의 역습" : "Three Red Lines: Leverage Rules Backfire"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "2020년 8월 중국 PBOC와 住建部는 부동산 개발사의 무분별한 차입을 억제하기 위해 'Three Red Lines' 정책을 발표했다. 이 규제는 세 가지 재무 기준을 충족하지 못하는 개발사의 신규 차입을 제한했다. 정책 의도는 건전성 제고였지만, 과도한 레버리지로 성장해 온 개발사들에게는 유동성 위기의 방아쇠가 됐다."
                  : "In August 2020, China's PBOC and Ministry of Housing announced the 'Three Red Lines' policy to curb excessive borrowing by property developers. Developers that breached the thresholds were barred from taking on new debt. The policy aimed to improve financial soundness, but for developers that had grown on aggressive leverage, it became the trigger for a liquidity crisis."}
              </p>
            </div>

            {/* Three Red Lines visual */}
            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
            >
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "Three Red Lines — 3가지 레버리지 기준" : "Three Red Lines — 3 Leverage Thresholds"}
                </p>
              </div>
              <div className="p-5 sm:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {[
                    {
                      no: "조건 1",
                      noEn: "Line 1",
                      rule: ko ? "부채/자산 ≤ 70%" : "Liabilities/Assets ≤ 70%",
                      note: ko ? "Evergrande 위반 ✗" : "Evergrande breached ✗",
                      bg:   "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700",
                      badge: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",
                    },
                    {
                      no: "조건 2",
                      noEn: "Line 2",
                      rule: ko ? "순부채/자기자본 ≤ 100%" : "Net Debt/Equity ≤ 100%",
                      note: ko ? "Evergrande 위반 ✗" : "Evergrande breached ✗",
                      bg:   "bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700",
                      badge: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
                    },
                    {
                      no: "조건 3",
                      noEn: "Line 3",
                      rule: ko ? "현금/단기부채 ≥ 1배" : "Cash/Short-term Debt ≥ 1×",
                      note: ko ? "Evergrande 위반 ✗" : "Evergrande breached ✗",
                      bg:   "bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700",
                      badge: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={VP}
                      transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
                      className={`rounded-xl border p-4 ${item.bg}`}
                    >
                      <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 ${item.badge}`}>
                        {ko ? item.no : item.noEn}
                      </span>
                      <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 leading-snug mb-2">
                        {item.rule}
                      </p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        {item.note}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 px-4 py-3 text-center">
                  <p className="text-[12px] font-semibold text-red-700 dark:text-red-300">
                    {ko
                      ? "3개 모두 위반 시 신규 차입 금지 → 유동성 위기 직격"
                      : "Breaching all 3 = new borrowing banned → direct liquidity crisis"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Section 1: Evergrande collapse ─────────────────────────────── */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Evergrande 붕괴: 아시아 달러채 역사상 최대 디폴트" : "Evergrande Collapse: Largest Default in Asian Dollar Bond History"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "헝다그룹(Evergrande)은 Three Red Lines 3가지 모두를 위반한 상태였다. 2021년 9월 달러채 이자 지급 실패가 공개되자 홍콩 상장 주가는 6개월 만에 80%가 증발했고, 중국 HY 부동산 스프레드는 폭발적으로 확대됐다. 같은 해 12월, $3,000억 이상의 총부채를 가진 Evergrande가 공식 디폴트를 선언하며 아시아 달러채 역사상 최대 규모의 디폴트 사건이 됐다."
                  : "Evergrande violated all three red lines. When its failure to pay offshore coupons was revealed in September 2021, its Hong Kong-listed stock lost 80% in six months and China HY property spreads exploded. In December 2021, with over $300 billion in total liabilities, Evergrande officially defaulted — the largest event in Asian dollar bond history."}
              </p>
            </div>

            {/* China HY property spread AreaChart */}
            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
            >
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "중국 HY 부동산 스프레드 (UST 대비 bp)" : "China HY Property Spread (bps over UST)"}
                </p>
              </div>
              <div className="p-5 sm:p-8">
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={spreadData} margin={{ top: 30, right: 16, left: 8, bottom: 4 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 9, fill: "#9ca3af" }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                      interval={2}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `${v}bp`}
                    />
                    <Tooltip
                      formatter={(v) => [`${v}bp`, ko ? "스프레드" : "Spread"]}
                      contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff" }}
                    />
                    <ReferenceLine
                      x="2021 Dec"
                      stroke="#dc2626"
                      strokeDasharray="4 3"
                      label={{ value: ko ? "Evergrande 디폴트" : "Evergrande Default", position: "top", fontSize: 9, fill: "#dc2626" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="spread"
                      stroke="#dc2626"
                      strokeWidth={2}
                      fill="#fee2e2"
                      fillOpacity={0.6}
                      isAnimationActive
                      animationDuration={1200}
                      animationEasing="ease-out"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="mt-3 text-[11px] text-gray-500 dark:text-gray-400 text-center">
                  {ko
                    ? "2022년 Q2 피크 약 3,200bp — 정상 HY 스프레드(400~600bp) 대비 5~8배 확대"
                    : "Peak ~3,200bp in Q2 2022 — 5–8× the normal HY spread range of 400–600bp"}
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VP}
              className="mt-8 relative"
            >
              <div className="absolute left-[18px] sm:left-[22px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-300 via-red-400 to-rose-500 dark:from-amber-600 dark:via-red-700 dark:to-rose-700" />
              <div className="space-y-3">
                {timeline.map((item, i) => {
                  const c = timelineColorMap[item.color];
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp(i * 0.05)}
                      className="flex gap-4 sm:gap-5 pl-1"
                    >
                      <div className="relative z-10 flex-shrink-0 mt-3.5">
                        <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${c.dot}`}>
                          <span className="w-2 h-2 rounded-full bg-white" />
                        </span>
                      </div>
                      <div className={`flex-1 rounded-xl border p-3 sm:p-4 ${c.bg}`}>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className={`text-[10px] font-black uppercase tracking-widest ${c.text}`}>
                            {item.date}
                          </span>
                          <span className={`text-[12px] font-bold ${c.text}`}>{item.title}</span>
                        </div>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.section>

          {/* ── Section 2: Cascading defaults ──────────────────────────────── */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "30개+ 개발사 연쇄 디폴트: 달러채 시장 붕괴" : "30+ Developer Cascade: Dollar Bond Market Collapse"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "Evergrande 디폴트를 시작으로 Sunac, CIFI, Country Garden, Kaisa 등 중국 민영 부동산 개발사들이 줄줄이 달러채 디폴트를 선언했다. 2022년 한 해에만 약 $620억 규모의 중국 부동산 달러채가 디폴트됐다. 시장 참여자들은 이를 단순한 개별 기업 문제가 아닌 비즈니스 모델 전체의 붕괴로 받아들였다."
                  : "Starting with Evergrande, Sunac, CIFI, Country Garden, Kaisa and dozens of other Chinese private property developers declared dollar bond defaults in succession. In 2022 alone, approximately $62 billion of Chinese property dollar bonds defaulted. Market participants began to view this not as isolated corporate failures but as the collapse of an entire business model."}
              </p>
            </div>

            {/* USD bond default volume BarChart */}
            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
            >
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "중국 부동산 달러채 디폴트 규모 ($B)" : "China Property USD Bond Default Volume ($B)"}
                </p>
              </div>
              <div className="p-5 sm:p-8">
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={defaultVolumeData} margin={{ top: 30, right: 16, left: 8, bottom: 4 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis
                      dataKey="year"
                      tick={{ fontSize: 11, fill: "#9ca3af" }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                    />
                    <YAxis
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(v) => `$${v}B`}
                    />
                    <Tooltip
                      formatter={(v) => [`$${v}B`, ko ? "디폴트 규모" : "Default Volume"]}
                      contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff" }}
                    />
                    <Bar dataKey="volume" radius={[4, 4, 0, 0]} isAnimationActive animationDuration={900} animationEasing="ease-out">
                      {defaultVolumeData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.year === "2022" ? "#dc2626" : entry.year === "2024E" ? "#9ca3af" : "#f87171"}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <p className="mt-3 text-[11px] text-gray-500 dark:text-gray-400 text-center">
                  {ko
                    ? "2022년 피크 $620억 — 아시아 HY 달러채 시장 전체를 흔든 규모"
                    : "2022 peak of $62B — large enough to shake the entire Asian HY dollar bond market"}
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Section 3: Offshore creditor dilemma ───────────────────────── */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "역외 투자자의 딜레마: 2~5센트 회수율의 현실" : "Offshore Creditor's Dilemma: The 2–5 Cent Recovery Reality"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: accent + "4d" }}>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "달러채 투자자들이 직면한 문제는 단순한 디폴트가 아니었다. 중국 법원과 홍콩 법원 간 협조 부재, 본토 채권자 우선 원칙, 역외 구조(케이만 SPV)의 집행력 한계로 인해 역외 달러채 보유자의 실질 회수율은 2~5센트 수준에 그쳤다. Evergrande 청산 명령이 홍콩에서 내려졌지만, 본토 자산 집행은 사실상 불가능했다."
                  : "Offshore dollar bond holders faced more than a simple default. The lack of cooperation between Chinese mainland courts and Hong Kong courts, the mainland creditor priority principle, and the enforcement limitations of offshore structures (Cayman SPVs) meant recovery rates were as low as 2–5 cents on the dollar. The Hong Kong court issued a liquidation order against Evergrande, but enforcement against mainland assets proved virtually impossible."}
              </p>
            </div>

            {/* Recovery rate BarChart */}
            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
            >
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "역외 달러채 회수율 비교 (달러 당 센트)" : "Offshore Dollar Bond Recovery Rate Comparison (cents on dollar)"}
                </p>
              </div>
              <div className="p-5 sm:p-8">
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart
                    data={recoveryData}
                    layout="vertical"
                    margin={{ top: 4, right: 60, left: 110, bottom: 4 }}
                  >
                    <XAxis
                      type="number"
                      tick={{ fontSize: 10, fill: "#9ca3af" }}
                      tickLine={false}
                      axisLine={{ stroke: "#e5e7eb" }}
                      tickFormatter={(v) => `${v}¢`}
                      domain={[0, 100]}
                    />
                    <YAxis
                      type="category"
                      dataKey="name"
                      tick={{ fontSize: 11, fill: "#6b7280" }}
                      tickLine={false}
                      axisLine={false}
                      width={105}
                    />
                    <Tooltip
                      formatter={(v) => [`${v}¢`, ko ? "회수율" : "Recovery"]}
                      contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff" }}
                    />
                    <ReferenceLine x={100} stroke="#16a34a" strokeDasharray="4 3" strokeOpacity={0.4} />
                    <Bar
                      dataKey="recovery"
                      radius={[0, 4, 4, 0]}
                      isAnimationActive
                      animationDuration={900}
                      animationEasing="ease-out"
                    >
                      {recoveryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-3 flex flex-wrap gap-3 justify-center">
                  {[
                    { color: "bg-red-600",   label: ko ? "민영 개발사 (디폴트)" : "Private developers (default)" },
                    { color: "bg-green-600", label: ko ? "SOE 평균 (참고)" : "SOE average (reference)" },
                  ].map((l) => (
                    <div key={l.label} className="flex items-center gap-1.5">
                      <span className={`w-2.5 h-2.5 rounded-sm flex-shrink-0 ${l.color}`} />
                      <span className="text-[10px] text-gray-500 dark:text-gray-400">{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* SOE vs Private comparison table */}
            <motion.div
              variants={fadeUp(0.15)}
              className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
            >
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {ko ? "SOE vs 민영 개발사 비교" : "SOE vs Private Developer Comparison"}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-[12px]">
                  <thead>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <th className="text-left px-5 py-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                        {ko ? "구분" : "Category"}
                      </th>
                      <th className="text-left px-5 py-3 text-[11px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">
                        {ko ? "SOE 개발사" : "SOE Developers"}
                      </th>
                      <th className="text-left px-5 py-3 text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                        {ko ? "민영 개발사" : "Private Developers"}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {[
                      {
                        label: ko ? "대표 기업" : "Key Players",
                        soe: ko ? "万科, 保利, 中海" : "Vanke, Poly, CNOOC",
                        priv: "Evergrande, Country Garden, CIFI",
                      },
                      {
                        label: ko ? "정부 지원" : "Government Backing",
                        soe: ko ? "암묵적 보증 + 국유 은행 신용 연장" : "Implicit guarantee + state bank credit extensions",
                        priv: ko ? "없음 (시장 원칙)" : "None (market discipline)",
                      },
                      {
                        label: ko ? "역외 채권" : "Offshore Bonds",
                        soe: ko ? "대부분 정상 상환" : "Mostly repaid as scheduled",
                        priv: ko ? "대규모 디폴트" : "Mass defaults",
                      },
                      {
                        label: ko ? "역외 회수율" : "Offshore Recovery",
                        soe: ko ? "N/A (상환)" : "N/A (repaid)",
                        priv: ko ? "2~30센트" : "2–30 cents on dollar",
                      },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                        <td className="px-5 py-3 text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                          {row.label}
                        </td>
                        <td className="px-5 py-3 text-[12px] text-gray-700 dark:text-gray-300">
                          {row.soe}
                        </td>
                        <td className="px-5 py-3 text-[12px] text-gray-700 dark:text-gray-300">
                          {row.priv}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Section 4: Lessons ─────────────────────────────────────────── */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
          >
            <motion.div variants={fadeUp()} className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "교훈: 중국 크레딧 투자의 구조적 리스크" : "Lessons: Structural Risks in China Credit Investing"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
              <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "중국 부동산 위기는 신흥시장 크레딧 투자에 몇 가지 구조적 교훈을 남겼다. 첫째, 케이만 SPV를 통한 역외 구조는 본토 자산에 대한 실질적 집행력을 보장하지 않는다. 둘째, SOE와 민영 개발사 사이의 암묵적 신용 분리는 실제 디폴트 시 극명히 드러난다. 셋째, 정책 방향 전환의 속도와 강도가 기업 펀더멘털보다 크레딧 성과를 좌우할 수 있다. 넷째, 스프레드 고점에서 중국 HY를 매입한 역발상 투자자들은 구조적·법적 집행력 문제로 예상 회수율을 실현하지 못했다."
                  : "The China real estate crisis left several structural lessons for emerging market credit investors. First, offshore structures through Cayman SPVs do not guarantee real enforcement over mainland assets. Second, the implicit credit bifurcation between SOEs and private developers becomes starkly apparent when defaults actually occur. Third, the speed and severity of policy reversals can override corporate fundamentals in determining credit outcomes. Fourth, contrarian investors who bought China HY at spread peaks found that structural and legal enforcement issues prevented them from realizing expected recoveries."}
              </p>
            </div>
          </motion.section>

          {/* ── Assessment ─────────────────────────────────────────────────── */}
          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "딜 평가" : "Deal Assessment"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div variants={fadeUp()} className="rounded-xl border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-900/15 p-5">
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
                <motion.div variants={fadeUp()} className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50 dark:bg-red-900/15 p-5">
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

          {/* ── Key Terms ──────────────────────────────────────────────────── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2
              variants={fadeUp()}
              className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1"
            >
              {ko ? "핵심 용어" : "Key Terms"}
            </motion.h2>
            <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
            <div className="space-y-3">
              {deal.keyTerms.map((term, i) => {
                const displayTerm = ko ? term.term : term.termEn;
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
                      <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">
                        {displayTerm}
                      </span>
                    </div>
                    <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                      {ko ? term.definition : term.definitionEn}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ── FAQ accordion ──────────────────────────────────────────────── */}
          {deal.faq && deal.faq.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <div className="space-y-2">
                {deal.faq.map((item, i) => {
                  const q = ko ? item.q : item.qEn;
                  const a = ko ? item.a : item.aEn;
                  const isOpen = openFaq === i;
                  return (
                    <motion.div
                      key={i}
                      variants={fadeUp()}
                      className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      >
                        <span className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                          {q}
                        </span>
                        <span
                          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[11px] font-bold transition-transform"
                          style={{ background: accent, transform: isOpen ? "rotate(45deg)" : "none" }}
                        >
                          +
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-4 border-t border-gray-100 dark:border-gray-800 pt-3">
                              <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                                {a}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          )}

          {/* ── References ─────────────────────────────────────────────────── */}
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
                          className="italic hover:text-gray-600 dark:hover:text-gray-400 hover:underline transition-colors"
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

          {/* ── Nav links ──────────────────────────────────────────────────── */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link
              href={ko ? "/market" : "/en/market"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:underline"
            >
              ← {ko ? "마켓 전체 보기" : "All Market"}
            </Link>
            <Link
              href={ko ? "/" : "/en"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "홈으로" : "Home"}
            </Link>
          </div>
        </div>
          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarketDealNav(deal.slug);
            if (!prev && !next) return null;
            const basePath = lang === "en" ? "/en/market" : "/market";
            return (
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${basePath}/${prev.slug}`, title: lang === "en" ? prev.titleEn : prev.title } : null}
                next={next ? { href: `${basePath}/${next.slug}`, title: lang === "en" ? next.titleEn : next.title } : null}
              />
            );
          })()}
        <LikeButton slug={deal.slug} lang={lang} />
      </main>
      <Footer />
    </>
  );
}
