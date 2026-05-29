"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis,
  Tooltip, ResponsiveContainer, CartesianGrid, Cell,
  ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { LboDeal } from "@/lib/lbo-deal-data";

type Lang = "ko" | "en";

// ── Animation ────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

// ── LBO category accent ───────────────────────────────────────────────────────
const ACCENT = "#6366f1"; // indigo-500
const ACCENT_LIGHT = "#eef2ff"; // indigo-50

// ── Milestone type colors ─────────────────────────────────────────────────────
const MILESTONE_COLORS: Record<string, string> = {
  entry:           "bg-indigo-500",
  crisis:          "bg-red-500",
  recovery:        "bg-amber-500",
  "value-creation": "bg-emerald-500",
  exit:            "bg-blue-600",
};
const MILESTONE_LABELS: Record<string, { ko: string; en: string }> = {
  entry:           { ko: "진입", en: "Entry" },
  crisis:          { ko: "위기", en: "Crisis" },
  recovery:        { ko: "회복", en: "Recovery" },
  "value-creation": { ko: "가치창출", en: "Value Creation" },
  exit:            { ko: "엑시트", en: "Exit" },
};

// ── Custom Tooltip ────────────────────────────────────────────────────────────
function LeverageTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: { value: number; dataKey: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  const d = payload[0];
  const d2 = payload[1];
  return (
    <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-3 text-xs">
      <p className="font-bold text-gray-700 dark:text-gray-200 mb-1">{label}년</p>
      {d && <p className="text-indigo-600 dark:text-indigo-400">Debt/EBITDA: <span className="font-bold">{d.value}x</span></p>}
      {d2 && <p className="text-emerald-600 dark:text-emerald-400">EBITDA: <span className="font-bold">${d2.value}B</span></p>}
    </div>
  );
}

function EbitdaTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg p-3 text-xs">
      <p className="font-bold text-gray-700 dark:text-gray-200 mb-1">{label}</p>
      <p className="text-sky-600 dark:text-sky-400">EBITDA: <span className="font-bold">${payload[0].value}B</span></p>
    </div>
  );
}

// ── Driver icon bg ────────────────────────────────────────────────────────────
const DRIVER_BG: Record<string, string> = {
  operations: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
  leverage:   "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800",
  multiple:   "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
  sector:     "bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800",
};

// ── Main Component ────────────────────────────────────────────────────────────
export default function LboPageClient({
  deal,
  lang = "ko",
}: {
  deal: LboDeal;
  lang?: Lang;
}) {
  const ko = lang === "ko";
  const m = deal.lboMetrics;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const title = ko ? deal.title : deal.titleEn;
  const subtitle = ko ? deal.subtitle : deal.subtitleEn;

  // ── Leverage chart data
  const leverageData = m.leverageJourney.map((p) => ({
    year: p.year,
    debtEbitda: p.debtEbitda,
    ebitda: p.ebitdaBn,
    label: ko ? p.label : p.labelEn,
  }));

  // ── EBITDA bar chart data
  const ebitdaData = deal.companyOverview.financials.map((f) => ({
    year: f.year,
    ebitda: f.ebitdaBn,
    note: ko ? f.note : f.noteEn,
  }));

  // ── Returns decomposition
  const rd = m.returnsDecomposition;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950">

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 pt-10 pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">

            {/* Back */}
            <motion.div variants={fadeUp(0)} initial="hidden" animate="show">
              <Link
                href="/deals"
                className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mb-6"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                {ko ? "딜 아카이브" : "Deal Archive"}
              </Link>
            </motion.div>

            {/* Logos + meta */}
            <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show" className="flex items-center gap-3 mb-5">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-[11px] tracking-tight shadow-sm ${deal.fund.bg}`}>
                {deal.fund.initials}
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 dark:text-gray-600">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white font-black text-[11px] tracking-tight shadow-sm ${deal.portfolio.bg}`}>
                {deal.portfolio.initials}
              </div>
              {/* LBO badge */}
              <span className="ml-2 text-[10px] font-bold rounded-full px-2.5 py-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
                LBO
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500 ml-auto">
                {deal.announcedDisplay} · {deal.readingMinutes}{ko ? "분" : "min"} {ko ? "읽기" : "read"}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp(0.1)} initial="hidden" animate="show"
              className="text-[22px] sm:text-2xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight mb-3"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={fadeUp(0.15)} initial="hidden" animate="show"
              className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6"
            >
              {subtitle}
            </motion.p>

            {/* Share TOP */}
            <motion.div variants={fadeUp(0.18)} initial="hidden" animate="show">
              <ShareButtons title={title} variant="top" lang={lang} />
            </motion.div>
          </div>
        </section>

        {/* ── BODY ────────────────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-16">

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 1. LBO SNAPSHOT                                                 */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>LBO Snapshot</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                {ko ? "딜 핵심 지표" : "Key Deal Metrics"}
              </h2>
              <div className="w-8 h-0.5 mt-2" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)} className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: ko ? "진입 EV" : "Entry EV",          value: `$${m.entryEvBn}B`,          sub: ko ? "총 거래금액" : "Total Deal Size" },
                { label: ko ? "진입 배수" : "Entry Multiple",   value: `${m.entryMultiple}x`,       sub: "EV / EBITDA" },
                { label: ko ? "총 부채" : "Total Debt",         value: `$${m.totalDebtBn}B`,         sub: ko ? "에쿼티 제외" : "Excl. Equity" },
                { label: ko ? "Debt/EBITDA" : "Debt/EBITDA",   value: `${m.debtToEbitda}x`,        sub: ko ? "진입 레버리지" : "Entry Leverage" },
                { label: ko ? "MOIC" : "MOIC",                  value: m.moic ? `${m.moic}x` : "N/A", sub: ko ? "총 배수익률" : "Gross Return" },
                { label: ko ? "IRR" : "IRR",                    value: m.irrPct ? `${m.irrPct}%` : "N/A", sub: ko ? "총 내부수익률" : "Gross IRR" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.05)}
                  className="rounded-xl border bg-white dark:bg-gray-900 p-4"
                  style={{ borderColor: i < 2 ? ACCENT + "40" : undefined }}
                >
                  <p className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
                  <p className="text-xl font-extrabold leading-none mb-1" style={{ color: i < 2 ? ACCENT : i >= 4 ? "#10b981" : "#374151" }}>
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-gray-400">{stat.sub}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Hold period + exit type pill */}
            <motion.div variants={fadeUp(0.1)} className="mt-3 flex flex-wrap gap-2">
              {m.exitYear && (
                <span className="text-[11px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full px-3 py-1">
                  {ko ? `보유 기간: ${m.exitYear - m.entryYear}년 (${m.entryYear}–${m.exitYear})` : `Hold: ${m.exitYear - m.entryYear} yrs (${m.entryYear}–${m.exitYear})`}
                </span>
              )}
              {m.exitType && (
                <span className="text-[11px] bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full px-3 py-1">
                  {ko ? `엑시트: ${m.exitType === "ipo" ? "IPO" : m.exitType}` : `Exit: ${m.exitType.toUpperCase()}`}
                </span>
              )}
              <span className="text-[11px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full px-3 py-1">
                {ko ? `에쿼티 투입: $${m.equityInvestedBn}B` : `Equity Invested: $${m.equityInvestedBn}B`}
              </span>
              {m.equityProceedsBn && (
                <span className="text-[11px] bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full px-3 py-1">
                  {ko ? `총 회수: $${m.equityProceedsBn}B` : `Total Proceeds: $${m.equityProceedsBn}B`}
                </span>
              )}
            </motion.div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 2. EXECUTIVE SUMMARY                                            */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-4">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Executive Summary</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                {ko ? "핵심 요약" : "Key Highlights"}
              </h2>
              <div className="w-8 h-0.5 mt-2" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div
              variants={fadeUp(0.05)}
              className="rounded-2xl border p-5 sm:p-6 space-y-3"
              style={{ borderColor: ACCENT + "30", background: ACCENT_LIGHT }}
            >
              {(ko ? deal.executiveSummary : deal.executiveSummaryEn).map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold mt-0.5" style={{ background: ACCENT }}>
                    {i + 1}
                  </span>
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">{point}</p>
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 3. COMPANY BACKGROUND                                           */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-4">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "배경" : "Background"}
              </p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                {ko ? "딜 배경 & 타겟 기업" : "Deal Background & Target Company"}
              </h2>
              <div className="w-8 h-0.5 mt-2" style={{ background: ACCENT }} />
            </motion.div>

            {/* Background prose */}
            <motion.div variants={fadeUp(0.05)} className="space-y-4 mb-8">
              {(ko ? deal.background : deal.backgroundEn).map((para, i) => (
                <p key={i} className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">{para}</p>
              ))}
            </motion.div>

            {/* Company metrics */}
            <motion.div variants={fadeUp(0.08)} className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {deal.companyOverview.metrics.map((m, i) => (
                <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-3.5">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium mb-1">{ko ? m.label : m.labelEn}</p>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug">{m.value}</p>
                </div>
              ))}
            </motion.div>

            {/* EBITDA Bar Chart */}
            <motion.div variants={fadeUp(0.1)}>
              <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                {ko ? "연도별 조정 EBITDA ($B)" : "Adjusted EBITDA by Year ($B)"}
              </p>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={ebitdaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} domain={[0, 2.5]} />
                    <Tooltip content={<EbitdaTooltip />} />
                    <ReferenceLine y={m.entryEbitdaBn} stroke={ACCENT} strokeDasharray="4 2" label={{ value: ko ? "진입 기준" : "Entry", position: "right", fontSize: 10, fill: ACCENT }} />
                    <Bar dataKey="ebitda" radius={[4, 4, 0, 0]}>
                      {ebitdaData.map((entry, i) => (
                        <Cell
                          key={i}
                          fill={
                            entry.ebitda < m.entryEbitdaBn
                              ? "#ef4444"
                              : entry.year === "2013"
                              ? ACCENT
                              : entry.year === "2018"
                              ? "#10b981"
                              : "#93c5fd"
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
                {deal.companyOverview.financialsNote && (
                  <p className="text-[10px] text-gray-400 mt-2">{ko ? deal.companyOverview.financialsNote : deal.companyOverview.financialsNoteEn}</p>
                )}
              </div>
            </motion.div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 4. INVESTMENT THESIS                                            */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Investment Thesis</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                {ko ? "Investment Thesis — 4가지 가치창출 드라이버" : "Investment Thesis — 4 Value Creation Drivers"}
              </h2>
              <div className="w-8 h-0.5 mt-2" style={{ background: ACCENT }} />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {m.investmentThesis.map((driver, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.07)}
                  className={`rounded-2xl border p-5 relative overflow-hidden ${DRIVER_BG[driver.driver]}`}
                >
                  {driver.isPrimary && (
                    <span className="absolute top-3 right-3 text-[9px] font-bold rounded-full px-2 py-0.5 bg-white/80 dark:bg-gray-900/60 text-indigo-600 dark:text-indigo-400">
                      PRIMARY
                    </span>
                  )}
                  <div className="text-2xl mb-2">{driver.icon}</div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {ko ? driver.titleKo : driver.titleEn}
                  </h3>
                  <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                    {ko ? driver.bodyKo : driver.bodyEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 5. CAPITAL STRUCTURE WATERFALL                                  */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Capital Structure</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                {ko ? "자본 구조 — 진입 시 부채 스택" : "Capital Structure at Entry"}
              </h2>
              <div className="w-8 h-0.5 mt-2" style={{ background: ACCENT }} />
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-2">
                {ko
                  ? "LBO에서 부채는 여러 트랜치로 나뉩니다. 상위(1L)일수록 이자율은 낮고 회수 우선순위가 높으며, 하위(에쿼티)로 갈수록 고위험·고수익 구조입니다."
                  : "In an LBO, debt is divided into tranches. Senior (1L) tranches carry lower rates and higher recovery priority; lower tranches (equity) have higher risk and return potential."}
              </p>
            </motion.div>

            <motion.div variants={fadeUp(0.05)} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden">
              {/* Total EV header */}
              <div className="px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
                <span className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {ko ? "총 거래 규모" : "Total Transaction Size"}
                </span>
                <span className="text-base font-extrabold text-gray-900 dark:text-gray-100">
                  ${deal.lboMetrics.entryEvBn}B
                </span>
              </div>

              {m.capitalStructure.map((tranche, i) => {
                const pct = (tranche.amountBn / deal.lboMetrics.entryEvBn) * 100;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp(i * 0.06)}
                    className="flex items-center gap-4 px-5 py-3.5 border-b border-gray-100 dark:border-gray-800 last:border-0"
                  >
                    {/* Color swatch */}
                    <div className={`w-2.5 h-8 rounded-sm flex-shrink-0 ${tranche.color}`} />

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-100 leading-snug truncate">
                        {ko ? tranche.tranche : tranche.trancheEn}
                      </p>
                      <p className="text-[11px] text-gray-400 dark:text-gray-500">
                        {ko ? tranche.rate : (tranche.rateEn ?? tranche.rate)} · {ko ? tranche.maturity : tranche.maturityEn}
                      </p>
                    </div>

                    {/* Bar */}
                    <div className="w-24 hidden sm:block">
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${tranche.color}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>

                    {/* Amount */}
                    <div className="text-right flex-shrink-0">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100">${tranche.amountBn}B</p>
                      <p className="text-[10px] text-gray-400">{pct.toFixed(0)}%</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Key insight callout */}
            <motion.div
              variants={fadeUp(0.1)}
              className="mt-4 rounded-xl border-l-4 bg-amber-50 dark:bg-amber-900/10 border-amber-400 p-4"
            >
              <p className="text-[12px] text-amber-800 dark:text-amber-300 leading-relaxed">
                {ko
                  ? "⚠️ 에쿼티($5.7B)는 총 거래 금액의 22%에 불과합니다. 나머지 78%는 부채로 조달됐으며, 이자 비용만 연 ~$1.9B에 달했습니다 — 진입 당시 EBITDA $1.65B를 초과하는 수준."
                  : "⚠️ Equity ($5.7B) was just 22% of the total deal size. The remaining 78% was debt, with annual interest costs of ~$1.9B — exceeding the $1.65B EBITDA at entry."}
              </p>
            </motion.div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 6. LEVERAGE JOURNEY                                             */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Leverage Journey</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                {ko ? "레버리지 추이 — 12.4x에서 3.2x로" : "Leverage Journey — 12.4x to 3.2x"}
              </h2>
              <div className="w-8 h-0.5 mt-2" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.05)} className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 mb-4">
              <ResponsiveContainer width="100%" height={240}>
                <LineChart data={leverageData} margin={{ top: 10, right: 20, left: -15, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 11 }} domain={[0, 22]} label={{ value: "Debt/EBITDA (x)", angle: -90, position: "insideLeft", fontSize: 10, offset: 15 }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} domain={[0, 2.5]} label={{ value: "EBITDA ($B)", angle: 90, position: "insideRight", fontSize: 10, offset: 15 }} />
                  <Tooltip content={<LeverageTooltip />} />
                  <ReferenceLine yAxisId="left" y={6} stroke="#10b981" strokeDasharray="4 2" label={{ value: "6x 기준선", position: "right", fontSize: 9, fill: "#10b981" }} />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="debtEbitda"
                    stroke={ACCENT}
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: ACCENT, strokeWidth: 2, stroke: "white" }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="ebitda"
                    stroke="#10b981"
                    strokeWidth={2}
                    strokeDasharray="5 3"
                    dot={{ r: 3, fill: "#10b981" }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-4 mt-2 px-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-0.5 rounded" style={{ background: ACCENT }} />
                  <span className="text-[10px] text-gray-500">Debt/EBITDA (좌축)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 border-t-2 border-dashed border-emerald-500" />
                  <span className="text-[10px] text-gray-500">EBITDA $B (우축)</span>
                </div>
              </div>
            </motion.div>

            {/* Milestone timeline */}
            <motion.div variants={fadeUp(0.08)} className="space-y-2">
              {m.keyMilestones.map((ms, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex flex-col items-center mt-0.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${MILESTONE_COLORS[ms.type]}`} />
                    {i < m.keyMilestones.length - 1 && (
                      <div className="w-px h-full min-h-[20px] bg-gray-200 dark:bg-gray-700 mt-1" />
                    )}
                  </div>
                  <div className="pb-3">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{ms.year}</span>
                      <span className={`text-[9px] font-bold rounded-full px-1.5 py-0.5 text-white ${MILESTONE_COLORS[ms.type]}`}>
                        {ko ? MILESTONE_LABELS[ms.type].ko : MILESTONE_LABELS[ms.type].en}
                      </span>
                    </div>
                    <p className="text-[12px] text-gray-700 dark:text-gray-300">
                      {ko ? ms.eventKo : ms.eventEn}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 7. RETURNS DECOMPOSITION                                        */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Returns Analysis</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                {ko ? "리턴 분해 — MOIC 2.6x는 어디서 왔나" : "Returns Decomposition — Where Did the 2.6x Come From?"}
              </h2>
              <div className="w-8 h-0.5 mt-2" style={{ background: ACCENT }} />
              <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-2">
                {ko
                  ? "LBO 리턴은 크게 세 가지 원천으로 분해됩니다: EBITDA 성장, 멀티플 확장, 부채 상환(Deleveraging)"
                  : "LBO returns decompose into three sources: EBITDA growth, multiple expansion, and debt paydown (deleveraging)"}
              </p>
            </motion.div>

            {rd && (
              <motion.div variants={fadeUp(0.05)} className="space-y-4">
                {/* MOIC breakdown bars */}
                {[
                  {
                    label: ko ? "EBITDA 성장" : "EBITDA Growth",
                    sub: ko ? `$${m.entryEbitdaBn}B → $${m.exitEbitdaBn}B (+27%)` : `$${m.entryEbitdaBn}B → $${m.exitEbitdaBn}B (+27%)`,
                    value: rd.fromEbitdaGrowth,
                    color: "bg-sky-500",
                    icon: "📊",
                  },
                  {
                    label: ko ? "멀티플 확장" : "Multiple Expansion",
                    sub: ko ? `${m.entryMultiple}x → ${m.exitMultiple}x (+38%)` : `${m.entryMultiple}x → ${m.exitMultiple}x (+38%)`,
                    value: rd.fromMultipleExpansion,
                    color: "bg-amber-500",
                    icon: "📈",
                  },
                  {
                    label: ko ? "부채 상환 (Deleveraging)" : "Debt Paydown (Deleveraging)",
                    sub: ko ? `$${m.totalDebtBn}B → ~$7B 상환` : `$${m.totalDebtBn}B → ~$7B paid down`,
                    value: rd.fromDebtPaydown,
                    color: "bg-emerald-500",
                    icon: "💳",
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100">{item.label}</p>
                          <p className="text-[11px] text-gray-400">{item.sub}</p>
                        </div>
                      </div>
                      <span className="text-base font-extrabold text-gray-900 dark:text-gray-100">+{item.value}x</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${item.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.value / rd.total) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}

                {/* Total MOIC */}
                <div className="rounded-xl border-2 p-4 flex items-center justify-between" style={{ borderColor: ACCENT }}>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Total MOIC</p>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-0.5">
                      {ko ? `에쿼티 $${m.equityInvestedBn}B → $${m.equityProceedsBn}B` : `Equity $${m.equityInvestedBn}B → $${m.equityProceedsBn}B`}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-extrabold" style={{ color: ACCENT }}>{m.moic}x</p>
                    <p className="text-[11px] text-gray-500">IRR {m.irrPct}%</p>
                  </div>
                </div>

                {/* Entry vs Exit comparison */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-2">
                      {ko ? "진입 시 (2007)" : "At Entry (2007)"}
                    </p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">EV</span>
                        <span className="font-bold text-gray-900 dark:text-gray-100">${m.entryEvBn}B</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">EV/EBITDA</span>
                        <span className="font-bold text-gray-900 dark:text-gray-100">{m.entryMultiple}x</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">EBITDA</span>
                        <span className="font-bold text-gray-900 dark:text-gray-100">${m.entryEbitdaBn}B</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">Debt</span>
                        <span className="font-bold text-red-500">${m.totalDebtBn}B</span>
                      </div>
                      <div className="flex justify-between text-[12px] pt-1 border-t border-gray-200 dark:border-gray-700">
                        <span className="text-gray-500">{ko ? "에쿼티" : "Equity"}</span>
                        <span className="font-bold text-emerald-600">${m.equityInvestedBn}B</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wide mb-2" style={{ color: ACCENT }}>
                      {ko ? "엑시트 시 (2018)" : "At Exit (2018)"}
                    </p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">EV</span>
                        <span className="font-bold text-gray-900 dark:text-gray-100">${m.exitEvBn}B</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">EV/EBITDA</span>
                        <span className="font-bold text-gray-900 dark:text-gray-100">{m.exitMultiple}x</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">EBITDA</span>
                        <span className="font-bold text-gray-900 dark:text-gray-100">${m.exitEbitdaBn}B</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-gray-500">Debt</span>
                        <span className="font-bold text-amber-500">~$7.0B</span>
                      </div>
                      <div className="flex justify-between text-[12px] pt-1 border-t border-indigo-200 dark:border-indigo-700">
                        <span className="text-gray-500">{ko ? "에쿼티 회수" : "Equity Proceeds"}</span>
                        <span className="font-bold text-emerald-600">${m.equityProceedsBn}B</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.section>

          {/* Share MID */}
          <ShareButtons title={title} variant="mid" lang={lang} />

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 8. POST-DEAL ASSESSMENT                                         */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>Assessment</p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                {ko ? "딜 평가" : "Deal Assessment"}
              </h2>
              <div className="w-8 h-0.5 mt-2" style={{ background: ACCENT }} />
            </motion.div>

            {/* Verdict */}
            <motion.div
              variants={fadeUp(0.05)}
              className="rounded-2xl border-l-4 p-5 mb-5 bg-emerald-50 dark:bg-emerald-900/10 border-emerald-500"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                {ko ? "종합 평가" : "Overall Verdict"}
              </p>
              <p className="text-base font-bold text-gray-900 dark:text-gray-100">
                {ko ? deal.postDealAssessment.overallVerdict : deal.postDealAssessment.overallVerdictEn}
              </p>
            </motion.div>

            <motion.p variants={fadeUp(0.07)} className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {ko ? deal.postDealAssessment.body : deal.postDealAssessment.bodyEn}
            </motion.p>

            {/* Positives + Risks */}
            <motion.div variants={fadeUp(0.08)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-gray-900 p-5">
                <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide mb-3">
                  ✅ {ko ? "성공 요인" : "What Worked"}
                </p>
                <ul className="space-y-2">
                  {(ko ? deal.postDealAssessment.positives : deal.postDealAssessment.positivesEn).map((p, i) => (
                    <li key={i} className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-red-200 dark:border-red-800 bg-white dark:bg-gray-900 p-5">
                <p className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wide mb-3">
                  ⚠️ {ko ? "리스크 & 한계" : "Risks & Limitations"}
                </p>
                <ul className="space-y-2">
                  {(ko ? deal.postDealAssessment.risks : deal.postDealAssessment.risksEn).map((r, i) => (
                    <li key={i} className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Editor Note */}
            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4"
            >
              <p className="text-[10px] font-bold uppercase tracking-wide text-gray-400 mb-2">
                {ko ? "에디터 노트" : "Editor's Note"}
              </p>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed italic">
                {ko ? deal.postDealAssessment.editorNote : deal.postDealAssessment.editorNoteEn}
              </p>
            </motion.div>

            {/* Tombstone */}
            <motion.div
              variants={fadeUp(0.12)}
              className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-[11px] ${deal.tombstone.fundBg}`}>
                  {deal.tombstone.fundInitials}
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-[11px] ${deal.tombstone.portfolioBg}`}>
                  {deal.tombstone.portfolioInitials}
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">{ko ? deal.tombstone.dealTitle : (deal.tombstone.dealTitleEn ?? deal.tombstone.dealTitle)}</p>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                {ko ? deal.tombstone.fundName : (deal.tombstone.fundNameEn ?? deal.tombstone.fundName)} × {ko ? deal.tombstone.portfolioName : (deal.tombstone.portfolioNameEn ?? deal.tombstone.portfolioName)}
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div>
                  <p className="text-[10px] text-gray-400">Deal Size</p>
                  <p className="text-lg font-extrabold text-amber-500">{ko ? deal.tombstone.dealSize : (deal.tombstone.dealSizeEn ?? deal.tombstone.dealSize)}</p>
                </div>
                <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
                <div>
                  <p className="text-[10px] text-gray-400">{ko ? "진입 배수" : "Entry Multiple"}</p>
                  <p className="text-lg font-extrabold text-gray-900 dark:text-gray-100">{ko ? deal.tombstone.entryMultiple : (deal.tombstone.entryMultipleEn ?? deal.tombstone.entryMultiple)}</p>
                </div>
                {deal.tombstone.moic && (
                  <>
                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
                    <div>
                      <p className="text-[10px] text-gray-400">MOIC</p>
                      <p className="text-lg font-extrabold text-emerald-600">{deal.tombstone.moic}</p>
                    </div>
                  </>
                )}
                {deal.tombstone.irr && (
                  <>
                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-700" />
                    <div>
                      <p className="text-[10px] text-gray-400">IRR</p>
                      <p className="text-lg font-extrabold" style={{ color: ACCENT }}>{deal.tombstone.irr}</p>
                    </div>
                  </>
                )}
              </div>
              <p className="text-[10px] text-gray-400 mt-3">{ko ? deal.tombstone.closeDate : (deal.tombstone.closeDateEn ?? deal.tombstone.closeDate)}</p>
            </motion.div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 9. KEY CONCEPTS                                                  */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {deal.concepts.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.div variants={fadeUp()} className="mb-4">
                <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                  {ko ? "핵심 개념" : "Key Concepts"}
                </p>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                  {ko ? "이 딜에서 배우는 금융 개념" : "Financial Concepts in This Deal"}
                </h2>
                <div className="w-8 h-0.5 mt-2" style={{ background: ACCENT }} />
              </motion.div>
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deal.concepts.map((c, i) => (
                  <motion.div key={i} variants={fadeUp()}>
                    {c.href ? (
                      <Link href={c.href} className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors group">
                        <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-1">
                          {ko ? c.term : c.termEn}
                        </p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                          {ko ? c.description : c.descriptionEn}
                        </p>
                      </Link>
                    ) : (
                      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
                        <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                          {ko ? c.term : c.termEn}
                        </p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                          {ko ? c.description : c.descriptionEn}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* 10. FAQ                                                         */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {deal.faq && deal.faq.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.div variants={fadeUp()} className="mb-4">
                <p className="text-[11px] font-bold uppercase tracking-widest mb-1" style={{ color: ACCENT }}>FAQ</p>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-50">
                  {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
                </h2>
                <div className="w-8 h-0.5 mt-2" style={{ background: ACCENT }} />
              </motion.div>
              <motion.div variants={fadeUp(0.05)}>
                <FaqAccordion
                  items={deal.faq.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))}
                  accent={ACCENT}
                />
              </motion.div>
            </motion.section>
          )}

          {/* Share BOTTOM */}
          <ShareButtons title={title} variant="bottom" lang={lang} />

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* SOURCES                                                         */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          {deal.sources && deal.sources.length > 0 && (
            <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
              <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
                {ko ? "참고 자료" : "References"}
              </h2>
              <ol className="space-y-2">
                {deal.sources.map((s) => (
                  <li key={s.id} className="flex gap-2.5 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 font-bold text-gray-400">[{s.id}]</span>
                    {s.url ? (
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                        {s.text}
                      </a>
                    ) : (
                      <span>{s.text}</span>
                    )}
                  </li>
                ))}
              </ol>
            </motion.section>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
