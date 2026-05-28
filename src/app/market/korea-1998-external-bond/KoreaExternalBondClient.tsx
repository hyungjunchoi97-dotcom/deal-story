"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

import type { MarketDeal } from "@/data/market-deals";

type Lang = "ko" | "en";

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

// ── keyTerm → Market 101 slug map ─────────────────────────────────────────────
const TERM_SLUG: Record<string, string> = {
  "CAC (집단행동조항)":                  "cac",
  "CAC — Collective Action Clause":       "cac",
  "Reach for Yield (수익률 추구)":        "reach-for-yield",
  "Reach for Yield":                      "reach-for-yield",
};

// ── Section 0 Visual: Crisis Context Card ─────────────────────────────────────
function CrisisContextCard({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "원/달러 환율 붕괴 — 1997" : "KRW/USD Collapse — 1997"}
        </p>
      </div>
      <div className="p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="flex-1 max-w-[180px] rounded-xl bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700 p-5 text-center"
          >
            <p className="text-[10px] font-bold text-teal-500 dark:text-teal-400 uppercase tracking-widest mb-2">
              {ko ? "1997년 초" : "Early 1997"}
            </p>
            <p className="text-4xl font-black text-teal-700 dark:text-teal-300 tracking-tight">
              850
            </p>
            <p className="text-[11px] text-teal-600 dark:text-teal-400 mt-1">
              {ko ? "원/$" : "KRW/$"}
            </p>
          </motion.div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: 0.25, ease: EASE }}
              className="flex flex-col items-center"
            >
              <div className="w-0.5 h-8 bg-rose-400 dark:bg-rose-500" />
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-rose-400 dark:border-t-rose-500" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[10px] font-bold text-rose-500 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/30 px-2 py-0.5 rounded-full"
            >
              +123%
            </motion.span>
          </div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="flex-1 max-w-[180px] rounded-xl bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-700 p-5 text-center"
          >
            <p className="text-[10px] font-bold text-rose-500 dark:text-rose-400 uppercase tracking-widest mb-2">
              {ko ? "1997년 말" : "Late 1997"}
            </p>
            <p className="text-4xl font-black text-rose-700 dark:text-rose-300 tracking-tight">
              1,900
            </p>
            <p className="text-[11px] text-rose-600 dark:text-rose-400 mt-1">
              {ko ? "원/$" : "KRW/$"}
            </p>
          </motion.div>
        </div>

        {/* IMF timeline */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mt-6 grid grid-cols-3 gap-2 sm:gap-3"
        >
          {[
            {
              date: ko ? "1997.11" : "Nov 1997",
              label: ko ? "IMF 지원 요청" : "IMF Request",
              color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700 text-orange-700 dark:text-orange-300",
            },
            {
              date: ko ? "1997.12" : "Dec 1997",
              label: ko ? "$550억 패키지" : "$55B Package",
              color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700 text-amber-700 dark:text-amber-300",
            },
            {
              date: ko ? "1998.04" : "Apr 1998",
              label: ko ? "외평채 발행" : "External Bond",
              color: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp()}
              className={`rounded-xl border p-3 text-center ${item.color}`}
            >
              <p className="text-[10px] font-black uppercase tracking-widest mb-1">
                {item.date}
              </p>
              <p className="text-[11px] font-semibold leading-tight">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mt-4 text-[12px] text-gray-500 dark:text-gray-400 text-center leading-relaxed"
        >
          {ko
            ? "환율이 두 배 넘게 폭등하며 실질 외채 부담도 두 배로 커졌다. IMF 패키지 이후에도 시장 신뢰 회복은 별개의 과제였다."
            : "The won's collapse more than doubled the real burden of foreign-currency debt. Even after the IMF package, restoring market confidence was a separate challenge."}
        </motion.p>
      </div>
    </motion.div>
  );
}

// ── Section 1 Visual: Deal Snapshot Viz ──────────────────────────────────────
function DealSnapshotViz({ deal, lang }: { deal: MarketDeal; lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "딜 스냅샷 — Deal Tombstone" : "Deal Tombstone"}
        </p>
      </div>
      <div className="p-5 sm:p-8">
        {/* Tombstone header */}
        <div className="text-center mb-6">
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">
            {ko ? "대한민국" : "Republic of Korea"}
          </p>
          <motion.p
            className="text-3xl sm:text-4xl font-black text-teal-600 dark:text-teal-400 tracking-tight"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VP}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          >
            T+345bp
          </motion.p>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
            {ko ? "10년물 발행 스프레드 · 1998년 4월" : "10yr Issue Spread · April 1998"}
          </p>
        </div>

        {/* Snapshot rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {deal.snapshot.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
              className="flex items-start justify-between gap-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg px-4 py-3"
            >
              <span className="text-[11px] text-gray-500 dark:text-gray-400 flex-shrink-0">
                {ko ? row.labelKo : row.labelEn}
              </span>
              <span className={`text-[12px] font-semibold text-right leading-snug ${
                row.value.includes("T+345bp")
                  ? "text-teal-600 dark:text-teal-400 font-black"
                  : "text-gray-800 dark:text-gray-200"
              }`}>
                {ko ? row.value : (row.valueEn ?? row.value)}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Highlight callout */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.45, delay: 0.45, ease: EASE }}
          className="mt-5 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-700 p-4 text-center"
        >
          <p className="text-[12px] text-teal-700 dark:text-teal-300 leading-relaxed">
            {ko
              ? "오더북은 발행 규모를 크게 초과했다. 위기 속 한국의 신인도 회복 의지를 시장이 받아들인 첫 신호."
              : "The orderbook was significantly oversubscribed — the market's first signal that Korea's return to creditworthiness was credible."}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Section 2 Visual: Spread Comparison Chart ────────────────────────────────
const SPREAD_DATA = [
  { issuer: "Germany",         spread: 0,   fill: "#9ca3af" },
  { issuer: "UK",              spread: 25,  fill: "#9ca3af" },
  { issuer: "World Bank",      spread: 20,  fill: "#14b8a6" },
  { issuer: "KEXIM (normal)",  spread: 35,  fill: "#9ca3af" },
  { issuer: "Korea 1998",      spread: 345, fill: "#f43f5e" },
];

function SpreadComparisonChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";

  const koData = [
    { issuer: "독일",            spread: 0,   fill: "#9ca3af" },
    { issuer: "영국",            spread: 25,  fill: "#9ca3af" },
    { issuer: "세계은행",        spread: 20,  fill: "#14b8a6" },
    { issuer: "KEXIM (평시)",    spread: 35,  fill: "#9ca3af" },
    { issuer: "한국 1998",       spread: 345, fill: "#f43f5e" },
  ];

  const data = ko ? koData : SPREAD_DATA;

  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "발행사 스프레드 비교 (vs US Treasury) — 1998" : "Issuer Spread Comparison (vs US Treasury) — 1998"}
        </p>
      </div>
      <div className="p-5 sm:p-8">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 4, right: 50, left: ko ? 100 : 110, bottom: 4 }}
          >
            <XAxis
              type="number"
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
              tickFormatter={(v) => `${v}bp`}
            />
            <YAxis
              type="category"
              dataKey="issuer"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              tickLine={false}
              axisLine={false}
              width={ko ? 95 : 105}
            />
            <Tooltip
              formatter={(value) => [`T+${value ?? 0}bp`, ko ? "스프레드" : "Spread"] as [string, string]}
              contentStyle={{
                fontSize: 11,
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                background: "#fff",
              }}
            />
            <Bar
              dataKey="spread"
              radius={[0, 4, 4, 0]}
              isAnimationActive
              animationDuration={800}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        {/* Legend note */}
        <div className="mt-3 flex flex-wrap gap-3 justify-center">
          {[
            { color: "bg-rose-500",  label: ko ? "한국 1998 (위기)" : "Korea 1998 (crisis)" },
            { color: "bg-teal-500",  label: ko ? "Supranational (AAA)" : "Supranational (AAA)" },
            { color: "bg-gray-400",  label: ko ? "기타 (비교 기준)" : "Others (reference)" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-sm flex-shrink-0 ${l.color}`} />
              <span className="text-[10px] text-gray-500 dark:text-gray-400">{l.label}</span>
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 text-[12px] text-rose-600 dark:text-rose-400 text-center font-medium"
        >
          {ko
            ? "한국의 T+345bp는 같은 시기 독일(0bp)보다 345배 높은 위험 프리미엄이었다."
            : "Korea's T+345bp represented a risk premium 345 basis points above Germany's near-zero spread."}
        </motion.p>
      </div>
    </motion.div>
  );
}

// ── Section 3 Visual: Spread Timeline Chart ──────────────────────────────────
const SPREAD_TIMELINE = [
  { year: 1998, spread: 345 },
  { year: 2000, spread: 180 },
  { year: 2003, spread: 90  },
  { year: 2008, spread: 120 },
  { year: 2012, spread: 80  },
  { year: 2018, spread: 55  },
  { year: 2024, spread: 60  },
];

function SpreadTimelineChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "한국 Sovereign 스프레드 추이 — 1998→2024" : "Korea Sovereign Spread — 1998 → 2024"}
        </p>
      </div>
      <div className="p-5 sm:p-8">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart
            data={SPREAD_TIMELINE}
            margin={{ top: 8, right: 24, left: 8, bottom: 4 }}
          >
            <XAxis
              dataKey="year"
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}bp`}
              domain={[0, 380]}
            />
            <Tooltip
              formatter={(value) => [`T+${value ?? 0}bp`, ko ? "스프레드" : "Spread"] as [string, string]}
              labelFormatter={(label) => `${label}${ko ? "년" : ""}`}
              contentStyle={{
                fontSize: 11,
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                background: "#fff",
              }}
            />
            <ReferenceLine
              y={345}
              stroke="#f43f5e"
              strokeDasharray="4 3"
              strokeOpacity={0.5}
              label={{
                value: ko ? "1998년 발행 T+345bp" : "1998 issue T+345bp",
                position: "insideTopRight",
                fontSize: 9,
                fill: "#f43f5e",
              }}
            />
            <Line
              type="monotone"
              dataKey="spread"
              stroke="#14b8a6"
              strokeWidth={2.5}
              dot={{ fill: "#14b8a6", r: 4, strokeWidth: 0 }}
              activeDot={{ r: 6, fill: "#0d9488" }}
              isAnimationActive
              animationDuration={1200}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2"
        >
          {[
            { year: "1998", val: "T+345bp", label: ko ? "발행" : "Issue",         color: "text-rose-600 dark:text-rose-400" },
            { year: "2003", val: "T+90bp",  label: ko ? "투자등급 복귀" : "IG return", color: "text-teal-600 dark:text-teal-400" },
            { year: "2012", val: "T+80bp",  label: ko ? "벤치마크 발행체" : "Benchmark", color: "text-teal-600 dark:text-teal-400" },
            { year: "2024", val: "T+60bp",  label: ko ? "현재" : "Today",          color: "text-teal-600 dark:text-teal-400" },
          ].map((item) => (
            <motion.div
              key={item.year}
              variants={fadeUp()}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-center"
            >
              <p className="text-[9px] text-gray-400 dark:text-gray-500 mb-1">{item.year}</p>
              <p className={`text-[14px] font-black ${item.color}`}>{item.val}</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Section 4 Visual: Legacy Milestones ──────────────────────────────────────
const MILESTONES_KO = [
  { year: "1997", event: "IMF 외환위기", detail: "원화 폭락 · 30대 그룹 절반 위기 · 외환보유고 고갈", color: "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-700", dot: "bg-rose-500", text: "text-rose-700 dark:text-rose-300" },
  { year: "1998.04", event: "첫 외평채 발행", detail: "$4B · T+345bp · Ba1/BB+ · Goldman·SSB·Deutsche", color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700", dot: "bg-orange-500", text: "text-orange-700 dark:text-orange-300" },
  { year: "2000~", event: "KEXIM·KDB 달러채", detail: "정책금융기관 달러채 시장 진출 · Korean paper 형성", color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700", dot: "bg-amber-500", text: "text-amber-700 dark:text-amber-300" },
  { year: "2002", event: "투자등급 복귀", detail: "신용등급 A로 상향 · 스프레드 T+100bp 이하", color: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700", dot: "bg-teal-500", text: "text-teal-700 dark:text-teal-300" },
  { year: "2010s", event: "벤치마크 발행체 지위", detail: "아시아 달러채 시장 벤치마크 · T+50~70bp 안착", color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700", dot: "bg-blue-500", text: "text-blue-700 dark:text-blue-300" },
  { year: "현재", event: "T+60bp 수준", detail: "30년 전 T+345bp에서 83% 압축 · 아시아 핵심 SSA", color: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700", dot: "bg-violet-500", text: "text-violet-700 dark:text-violet-300" },
];

const MILESTONES_EN = [
  { year: "1997", event: "IMF Crisis", detail: "Won collapse · Half of top-30 chaebols in distress · FX reserves depleted", color: "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-700", dot: "bg-rose-500", text: "text-rose-700 dark:text-rose-300" },
  { year: "Apr 1998", event: "First External Bond", detail: "$4B · T+345bp · Ba1/BB+ · Goldman·SSB·Deutsche", color: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700", dot: "bg-orange-500", text: "text-orange-700 dark:text-orange-300" },
  { year: "2000+", event: "KEXIM & KDB Dollar Bonds", detail: "Korean policy lenders enter dollar markets · 'Korean paper' emerges as asset class", color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700", dot: "bg-amber-500", text: "text-amber-700 dark:text-amber-300" },
  { year: "2002", event: "Return to Investment Grade", detail: "Upgraded to single-A · Spreads fall below T+100bp", color: "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-700", dot: "bg-teal-500", text: "text-teal-700 dark:text-teal-300" },
  { year: "2010s", event: "Benchmark Issuer Status", detail: "Benchmark in Asian dollar market · Settles at T+50–70bp", color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700", dot: "bg-blue-500", text: "text-blue-700 dark:text-blue-300" },
  { year: "Today", event: "~T+60bp", detail: "83% compression from 1998's T+345bp · Core SSA in Asia", color: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-700", dot: "bg-violet-500", text: "text-violet-700 dark:text-violet-300" },
];

function LegacyMilestones({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const milestones = ko ? MILESTONES_KO : MILESTONES_EN;
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="mt-8 relative"
    >
      {/* Vertical line */}
      <div className="absolute left-[18px] sm:left-[22px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-rose-300 via-teal-300 to-violet-300 dark:from-rose-700 dark:via-teal-700 dark:to-violet-700" />

      <div className="space-y-3">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            variants={fadeUp(i * 0.05)}
            className="flex gap-4 sm:gap-5 pl-1"
          >
            {/* Dot */}
            <div className="relative z-10 flex-shrink-0 mt-3.5">
              <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${m.dot}`}>
                <span className="w-2 h-2 rounded-full bg-white" />
              </span>
            </div>

            {/* Card */}
            <div className={`flex-1 rounded-xl border p-3 sm:p-4 ${m.color}`}>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className={`text-[10px] font-black uppercase tracking-widest ${m.text}`}>
                  {m.year}
                </span>
                <span className={`text-[12px] font-bold ${m.text}`}>{m.event}</span>
              </div>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{m.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Visuals mapped to each section ───────────────────────────────────────────
function getVisual(i: number, deal: MarketDeal, lang: Lang) {
  const visuals = [
    <CrisisContextCard key="0" lang={lang} />,
    <DealSnapshotViz   key="1" deal={deal} lang={lang} />,
    <SpreadComparisonChart key="2" lang={lang} />,
    <SpreadTimelineChart   key="3" lang={lang} />,
    <LegacyMilestones      key="4" lang={lang} />,
  ];
  return visuals[i] ?? null;
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function KoreaExternalBondClient({
  deal,
  lang,
}: {
  deal: MarketDeal;
  lang: Lang;
}) {
  const ko = lang === "ko";
  const accent = "#14b8a6";

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Header ── */}
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
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {ko ? "마켓" : "Market"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">
                {ko ? "Sovereign" : "Sovereign"}
              </span>
            </div>

            {/* Category badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">
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

        {/* ── Deal Snapshot card ── */}
        <div className="max-w-3xl mx-auto px-5 pt-10">
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
          >
            {/* Teal accent bar */}
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
                    <span className={`text-[12px] font-semibold text-right leading-snug ${
                      row.value.includes("T+345bp")
                        ? "text-teal-600 dark:text-teal-400 font-black"
                        : "text-gray-800 dark:text-gray-200"
                    }`}>
                      {ko ? row.value : (row.valueEn ?? row.value)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>


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
            <div className="rounded-xl border-l-4 px-5 py-4 bg-indigo-50 dark:bg-indigo-900/15"
              style={{ borderColor: accent }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: accent }}
              >
                {ko ? "핵심 요약" : "Key Takeaways"}
              </p>
              <ul className="space-y-2">
                {(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-indigo-800 dark:text-indigo-200">
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
          {deal.sections.map((section, i) => (
            <motion.section
              key={i}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VP}
            >
              {/* Section heading */}
              <motion.div variants={fadeUp()} className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                  {ko ? section.heading : section.headingEn}
                </h2>
                <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
              </motion.div>

              {/* Body text */}
              <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
                <div className="space-y-3">
                  {(ko ? section.body : section.bodyEn).split("\n\n").map((para, j) => (
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

              {/* Visual for this section */}
              {getVisual(i, deal, lang)}
            </motion.section>
          ))}

          {/* ── Key Terms ── */}
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
                          className="font-bold text-gray-900 dark:text-gray-100 text-[14px] hover:text-indigo-700 dark:hover:text-indigo-300 hover:underline transition-colors"
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
                {/* Positives */}
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
                {/* Risks */}
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


        {/* ── Share — mid ── */}
        <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" lang={lang} />


          {/* ── FAQ ── */}
          {deal.faq && deal.faq.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <FaqAccordion items={deal.faq.map(f => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))} accent={accent} />
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
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/40 dark:hover:bg-indigo-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-[11px] font-bold text-indigo-600 dark:text-indigo-400 flex-shrink-0">M</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors truncate">{slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-indigo-400 transition-colors text-sm flex-shrink-0">→</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                {deal.relatedMarket101Slugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market-101/${slug}` : `/en/market-101/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-teal-300 dark:hover:border-teal-700 hover:bg-teal-50/40 dark:hover:bg-teal-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-[11px] font-bold text-teal-600 dark:text-teal-400 flex-shrink-0">101</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market 101</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors truncate">{slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</p>
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
                          className="italic hover:text-teal-600 dark:hover:text-teal-400 hover:underline transition-colors"
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
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-teal-600 dark:text-teal-400 hover:underline"
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
      </main>
      <Footer />
    </>
  );
}
