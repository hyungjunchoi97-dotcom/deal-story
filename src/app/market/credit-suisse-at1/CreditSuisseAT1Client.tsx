"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
const ACCENT = "#f43f5e"; // rose-500

// ── keyTerm → Market 101 slug map ─────────────────────────────────────────────
const TERM_SLUG: Record<string, string> = {
  "AT1 (Additional Tier 1 자본)":           "at1-capital",
  "AT1 — Additional Tier 1 Capital":         "at1-capital",
  "PONV (비존속성 판단, Point of Non-Viability)": "ponv",
  "PONV — Point of Non-Viability":           "ponv",
  "CoCo (조건부 전환사채)":                  "coco-bond",
  "CoCo — Contingent Convertible Bond":      "coco-bond",
  "베일인 (Bail-in)":                        "bail-in",
  "Bail-in":                                 "bail-in",
};

// ── Visual: Capital Structure Waterfall ───────────────────────────────────────
function CapitalStructureWaterfall({ lang }: { lang: Lang }) {
  const ko = lang === "ko";

  const layers = [
    {
      label: ko ? "선순위채 · 예금" : "Senior Debt · Deposits",
      sub: ko ? "가장 선순위 — 손실 마지막 흡수" : "Most senior — last to absorb losses",
      bg: "bg-gray-100 dark:bg-gray-800",
      border: "border-gray-300 dark:border-gray-600",
      text: "text-gray-700 dark:text-gray-300",
      badge: null,
      cs: null,
      height: "h-14",
    },
    {
      label: ko ? "Tier 2 (후순위채)" : "Tier 2 (Subordinated Debt)",
      sub: ko ? "선순위채 아래, AT1 위" : "Below senior, above AT1",
      bg: "bg-blue-50 dark:bg-blue-900/30",
      border: "border-blue-300 dark:border-blue-600",
      text: "text-blue-700 dark:text-blue-300",
      badge: null,
      cs: null,
      height: "h-14",
    },
    {
      label: "AT1 (Additional Tier 1)",
      sub: ko ? "손실 흡수 — PONV 트리거 시 상각" : "Loss absorption — written down at PONV",
      bg: "bg-rose-100 dark:bg-rose-900/30",
      border: "border-rose-400 dark:border-rose-500",
      text: "text-rose-700 dark:text-rose-300",
      badge: ko ? "손실 흡수" : "Loss Absorbing",
      cs: { label: "CHF 16B → 0", color: "bg-rose-500 text-white" },
      height: "h-16",
      glow: true,
    },
    {
      label: ko ? "CET1 / 보통주 자본 (Equity)" : "CET1 / Common Equity",
      sub: ko ? "가장 후순위 — 손실 먼저 흡수" : "Most junior — first to absorb losses",
      bg: "bg-emerald-50 dark:bg-emerald-900/30",
      border: "border-emerald-300 dark:border-emerald-600",
      text: "text-emerald-700 dark:text-emerald-300",
      badge: null,
      cs: { label: ko ? "CHF 3B 생존" : "CHF 3B survived", color: "bg-emerald-500 text-white" },
      height: "h-16",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko
              ? "은행 자본구조 — CS 2023년 3월 결과"
              : "Bank Capital Structure — CS March 2023 Outcome"}
          </p>
        </div>

        <div className="p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
            {/* Left: waterfall stack */}
            <div className="flex-1 w-full space-y-1.5">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                {ko ? "자본구조 위계 (위 = 선순위)" : "Capital Hierarchy (Top = Senior)"}
              </p>
              {layers.map((layer, i) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: EASE }}
                  className={`relative rounded-xl border-2 px-4 py-3 ${layer.bg} ${layer.border} ${layer.height} flex items-center justify-between gap-3 ${
                    layer.glow
                      ? "ring-2 ring-rose-400/50 dark:ring-rose-500/40 shadow-rose-100 dark:shadow-rose-900/30 shadow-lg"
                      : ""
                  }`}
                >
                  <div className="min-w-0">
                    <p className={`text-[12px] font-bold leading-tight ${layer.text}`}>
                      {layer.label}
                    </p>
                    <p className={`text-[10px] leading-snug mt-0.5 opacity-75 ${layer.text}`}>
                      {layer.sub}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {layer.badge && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-rose-500 text-white">
                        {layer.badge}
                      </span>
                    )}
                    {layer.cs && (
                      <span
                        className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${layer.cs.color}`}
                      >
                        {layer.cs.label}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
              {/* Arrow: top = first to be protected */}
              <div className="flex items-center gap-2 mt-3 text-[10px] text-gray-400 dark:text-gray-500">
                <span>↑</span>
                <span>{ko ? "보호 우선순위 높음" : "Higher protection"}</span>
                <span className="flex-1 border-t border-dashed border-gray-200 dark:border-gray-700" />
                <span>{ko ? "손실 흡수 마지막" : "Absorbs loss last"}</span>
              </div>
            </div>

            {/* Right: what actually happened */}
            <div className="flex-shrink-0 w-full sm:w-56">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                {ko ? "CS 2023년 3월 19일" : "CS — 19 March 2023"}
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
                className="rounded-2xl border-2 border-rose-200 dark:border-rose-700 overflow-hidden"
              >
                <div className="bg-rose-500 px-4 py-3 text-center">
                  <p className="text-[11px] font-black text-white uppercase tracking-wider">
                    {ko ? "AT1 전액 상각" : "AT1 Full Write-Down"}
                  </p>
                </div>
                <div className="p-4 space-y-3 bg-white dark:bg-gray-900">
                  <div className="rounded-lg bg-rose-50 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-700 p-3 text-center">
                    <p className="text-[20px] font-black text-rose-600 dark:text-rose-400">
                      CHF 16B
                    </p>
                    <p className="text-[10px] text-rose-500 dark:text-rose-400 font-bold mt-0.5">
                      → 0
                    </p>
                    <p className="text-[9px] text-rose-400 mt-1">
                      {ko ? "AT1 채권자 전손" : "AT1 holders wiped out"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 justify-center text-gray-400 text-lg font-bold">
                    vs
                  </div>
                  <div className="rounded-lg bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 p-3 text-center">
                    <p className="text-[20px] font-black text-emerald-600 dark:text-emerald-400">
                      CHF 3B
                    </p>
                    <p className="text-[10px] text-emerald-500 dark:text-emerald-400 font-bold mt-0.5">
                      {ko ? "주주 수령 (UBS 주식)" : "Equity received UBS stock"}
                    </p>
                    <p className="text-[9px] text-emerald-400 mt-1">
                      {ko ? "주식이 살아남았다" : "Equity survived"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Visual: Collapse Timeline ─────────────────────────────────────────────────
function CollapseTimeline({ lang }: { lang: Lang }) {
  const ko = lang === "ko";

  const events = [
    {
      date: "Mar 15",
      titleKo: "SNB 발언",
      titleEn: "SNB Chair Statement",
      noteKo: "사우디국립은행 회장 추가 지원 거부 발언. CS 주가 –25%. CDS 폭등.",
      noteEn: "SNB chairman rules out more capital. CS shares –25%. CDS blows out.",
      color: "bg-amber-50 dark:bg-amber-900/30",
      border: "border-amber-300 dark:border-amber-600",
      dot: "bg-amber-400",
      text: "text-amber-700 dark:text-amber-300",
    },
    {
      date: "Mar 16",
      titleKo: "SNB CHF 500억 긴급 유동성",
      titleEn: "SNB Emergency Liquidity",
      noteKo: "스위스 국립은행이 CS에 CHF 50B 긴급 유동성 지원 라인 제공.",
      noteEn: "Swiss National Bank provides CHF 50B emergency liquidity facility to CS.",
      color: "bg-orange-50 dark:bg-orange-900/30",
      border: "border-orange-300 dark:border-orange-600",
      dot: "bg-orange-400",
      text: "text-orange-700 dark:text-orange-300",
    },
    {
      date: "Mar 17–18",
      titleKo: "주말 비상 협상",
      titleEn: "Weekend Negotiations",
      noteKo: "FINMA·SNB·정부·UBS 비상 협상. AT1 처리가 핵심 쟁점.",
      noteEn: "FINMA, SNB, government, and UBS in emergency talks. AT1 treatment is the key issue.",
      color: "bg-orange-100 dark:bg-orange-900/40",
      border: "border-orange-400 dark:border-orange-500",
      dot: "bg-orange-500",
      text: "text-orange-800 dark:text-orange-200",
    },
    {
      date: "Mar 19",
      titleKo: "UBS 인수 발표",
      titleEn: "UBS Acquisition Announced",
      noteKo: "UBS가 CHF 30억에 CS 인수. AT1 CHF 160억 전액 0 상각 발표.",
      noteEn: "UBS acquires CS for CHF 3B. CHF 16B AT1 written to zero.",
      color: "bg-red-100 dark:bg-red-900/40",
      border: "border-red-400 dark:border-red-500",
      dot: "bg-red-500",
      text: "text-red-800 dark:text-red-200",
    },
    {
      date: "Mar 20",
      titleKo: "AT1 시장 충격",
      titleEn: "AT1 Market Shock",
      noteKo: "글로벌 AT1 스프레드 100–200bp 폭등. ECB·EBA·PRA 긴급 성명 발표.",
      noteEn: "Global AT1 spreads blow out 100–200bp. ECB, EBA, PRA issue emergency statements.",
      color: "bg-rose-100 dark:bg-rose-900/40",
      border: "border-rose-500 dark:border-rose-500",
      dot: "bg-rose-500",
      text: "text-rose-800 dark:text-rose-200",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "172시간 붕괴 타임라인 — 2023년 3월" : "172-Hour Collapse Timeline — March 2023"}
          </p>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden sm:block p-5 sm:p-8">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500" />
            <div className="grid grid-cols-5 gap-3 relative">
              {events.map((ev, i) => (
                <motion.div
                  key={ev.date}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
                  className="flex flex-col items-center"
                >
                  {/* Dot */}
                  <div
                    className={`w-8 h-8 rounded-full ${ev.dot} border-2 border-white dark:border-gray-900 flex items-center justify-center z-10 mb-3 shadow-sm`}
                  >
                    <span className="text-[9px] font-black text-white">{i + 1}</span>
                  </div>
                  {/* Card */}
                  <div
                    className={`w-full rounded-xl border p-3 ${ev.color} ${ev.border}`}
                  >
                    <p className={`text-[10px] font-black ${ev.text} mb-1`}>{ev.date}</p>
                    <p className={`text-[11px] font-bold leading-tight ${ev.text} mb-2`}>
                      {ko ? ev.titleKo : ev.titleEn}
                    </p>
                    <p className={`text-[9px] leading-snug opacity-80 ${ev.text}`}>
                      {ko ? ev.noteKo : ev.noteEn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="sm:hidden p-5">
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-300 via-orange-400 to-rose-500" />
            <div className="space-y-4">
              {events.map((ev, i) => (
                <motion.div
                  key={ev.date}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                  className="relative"
                >
                  <div
                    className={`absolute -left-6 top-3 w-4 h-4 rounded-full ${ev.dot} border-2 border-white dark:border-gray-900 flex items-center justify-center`}
                  >
                    <span className="text-[7px] font-black text-white">{i + 1}</span>
                  </div>
                  <div className={`rounded-xl border p-3 ${ev.color} ${ev.border}`}>
                    <p className={`text-[10px] font-black ${ev.text} mb-0.5`}>{ev.date}</p>
                    <p className={`text-[12px] font-bold leading-tight ${ev.text} mb-1.5`}>
                      {ko ? ev.titleKo : ev.titleEn}
                    </p>
                    <p className={`text-[11px] leading-snug opacity-80 ${ev.text}`}>
                      {ko ? ev.noteKo : ev.noteEn}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Visual: Hierarchy Inversion Diagram ───────────────────────────────────────
function HierarchyInversionDiagram({ lang }: { lang: Lang }) {
  const ko = lang === "ko";

  const normalOrder = [
    { label: ko ? "AT1" : "AT1", note: ko ? "선순위 → 나중에 손실" : "Senior → loss later", bg: "bg-rose-50 dark:bg-rose-900/30", border: "border-rose-200 dark:border-rose-700", text: "text-rose-700 dark:text-rose-300" },
    { label: ko ? "CET1 / 주식" : "CET1 / Equity", note: ko ? "후순위 → 먼저 손실" : "Junior → loss first", bg: "bg-emerald-50 dark:bg-emerald-900/30", border: "border-emerald-200 dark:border-emerald-700", text: "text-emerald-700 dark:text-emerald-300" },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "자본구조 위계 역전 — 정상 vs CS 2023" : "Capital Hierarchy Inversion — Normal vs CS 2023"}
          </p>
        </div>

        <div className="p-5 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-6 items-start">

            {/* Left: Normal hierarchy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 text-center">
                {ko ? "정상 자본구조" : "Normal Hierarchy"}
              </p>
              <div className="space-y-2">
                {/* Senior Debt */}
                <div className="rounded-lg border bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 px-4 py-2.5 text-center">
                  <p className="text-[11px] font-bold text-gray-600 dark:text-gray-400">
                    {ko ? "선순위채" : "Senior Debt"}
                  </p>
                  <p className="text-[9px] text-gray-400 mt-0.5">{ko ? "보호됨" : "Protected"}</p>
                </div>
                {/* Tier 2 */}
                <div className="rounded-lg border bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 px-4 py-2.5 text-center">
                  <p className="text-[11px] font-bold text-blue-700 dark:text-blue-300">Tier 2</p>
                  <p className="text-[9px] text-blue-500 dark:text-blue-400 mt-0.5">
                    {ko ? "보호됨" : "Protected"}
                  </p>
                </div>
                {/* AT1 */}
                <div className="rounded-lg border bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-700 px-4 py-2.5 text-center">
                  <p className="text-[11px] font-bold text-rose-700 dark:text-rose-300">AT1</p>
                  <p className="text-[9px] text-rose-500 dark:text-rose-400 mt-0.5">
                    {ko ? "주식 전손 후 손실" : "Loses after equity → 0"}
                  </p>
                </div>
                {/* Equity */}
                <div className="rounded-lg border bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700 px-4 py-2.5 text-center">
                  <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                    {ko ? "주식 (Equity)" : "Equity"}
                  </p>
                  <p className="text-[9px] text-emerald-500 dark:text-emerald-400 mt-0.5">
                    {ko ? "먼저 손실 흡수" : "Absorbs loss first"}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Center: inversion arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
              className="flex flex-col items-center justify-center py-4 sm:pt-20 gap-2"
            >
              <div className="rounded-full bg-rose-100 dark:bg-rose-900/30 border-2 border-rose-300 dark:border-rose-600 p-3">
                <span className="text-xl">⟷</span>
              </div>
              <span className="text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-wider text-center">
                {ko ? "역전\nInverted" : "Inverted"}
              </span>
              <span className="text-[9px] text-gray-400 text-center max-w-[80px]">
                {ko ? "스위스 FINMA 결정" : "Swiss FINMA ruling"}
              </span>
            </motion.div>

            {/* Right: CS 2023 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VP}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            >
              <p className="text-[11px] font-bold text-rose-500 dark:text-rose-400 uppercase tracking-widest mb-4 text-center">
                {ko ? "CS 2023년 3월 / CS March 2023" : "CS — March 2023"}
              </p>
              <div className="space-y-2">
                {/* Senior Debt */}
                <div className="rounded-lg border bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 px-4 py-2.5 text-center">
                  <p className="text-[11px] font-bold text-gray-600 dark:text-gray-400">
                    {ko ? "선순위채" : "Senior Debt"}
                  </p>
                  <p className="text-[9px] text-gray-400 mt-0.5">{ko ? "보호됨" : "Protected"}</p>
                </div>
                {/* Tier 2 */}
                <div className="rounded-lg border bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 px-4 py-2.5 text-center">
                  <p className="text-[11px] font-bold text-blue-700 dark:text-blue-300">Tier 2</p>
                  <p className="text-[9px] text-blue-500 dark:text-blue-400 mt-0.5">
                    {ko ? "보호됨" : "Protected"}
                  </p>
                </div>
                {/* AT1 — wiped */}
                <div className="rounded-lg border-2 bg-rose-100 dark:bg-rose-900/40 border-rose-500 px-4 py-3 text-center ring-2 ring-rose-400/40">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-rose-500 text-base font-black">✕</span>
                    <p className="text-[12px] font-black text-rose-600 dark:text-rose-400">AT1</p>
                  </div>
                  <p className="text-[10px] font-black text-rose-500 mt-0.5">CHF 16B → 0</p>
                  <p className="text-[9px] text-rose-400 mt-0.5">
                    {ko ? "전액 상각" : "Fully written down"}
                  </p>
                </div>
                {/* Equity — survived */}
                <div className="rounded-lg border-2 bg-emerald-100 dark:bg-emerald-900/40 border-emerald-500 px-4 py-3 text-center ring-2 ring-emerald-400/40">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-emerald-500 text-base font-black">✓</span>
                    <p className="text-[12px] font-black text-emerald-700 dark:text-emerald-300">
                      {ko ? "주식 (Equity)" : "Equity"}
                    </p>
                  </div>
                  <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
                    CHF 3B
                  </p>
                  <p className="text-[9px] text-emerald-500 mt-0.5">
                    {ko ? "UBS 주식 수령" : "Received UBS stock"}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-6 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 p-4 text-center">
            <p className="text-[12px] text-rose-700 dark:text-rose-300 leading-relaxed font-medium">
              {ko
                ? "\"AT1은 주식보다 선순위라 주식이 살면 내 돈도 괜찮겠지\" — 이 추론이 스위스에서는 통하지 않았다."
                : '"AT1 ranks above equity, so as long as equity gets something, I\'ll be fine" — this reasoning did not hold in Switzerland.'}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Visual: AT1 Spread Shock ──────────────────────────────────────────────────
const AT1_SPREAD_DATA = [
  { bank: "HSBC",     pre: 295, post: 460 },
  { bank: "BNP",      pre: 310, post: 490 },
  { bank: "Barclays", pre: 320, post: 505 },
  { bank: "SocGen",   pre: 330, post: 520 },
];

function AT1SpreadShock({ lang }: { lang: Lang }) {
  const ko = lang === "ko";

  const chartData = AT1_SPREAD_DATA.flatMap((d) => [
    { name: d.bank, period: ko ? "3월 19일 이전" : "Pre-Mar 19", spread: d.pre },
    { name: d.bank, period: ko ? "3월 19일 이후" : "Post-Mar 19", spread: d.post },
  ]);

  // Recharts grouped approach: use two separate Bar series
  const grouped = AT1_SPREAD_DATA.map((d) => ({
    bank: d.bank,
    pre: d.pre,
    post: d.post,
  }));

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko
              ? "유럽 주요은행 AT1 스프레드 (bp) — 3월 19일 전후"
              : "European Bank AT1 Spreads (bp) — Pre vs Post March 19"}
          </p>
        </div>

        <div className="p-5 sm:p-8">
          {/* Legend */}
          <div className="flex items-center gap-4 mb-5 justify-center flex-wrap">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm bg-gray-300 dark:bg-gray-600" />
              <span className="text-[11px] text-gray-500 dark:text-gray-400">
                {ko ? "3월 19일 이전" : "Pre-Mar 19"}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm" style={{ background: ACCENT }} />
              <span className="text-[11px] text-gray-500 dark:text-gray-400">
                {ko ? "3월 19일 이후" : "Post-Mar 19"}
              </span>
            </div>
          </div>

          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={grouped}
                margin={{ top: 8, right: 8, bottom: 8, left: 24 }}
                barCategoryGap="20%"
                barGap={3}
              >
                <XAxis
                  dataKey="bank"
                  tick={{ fontSize: 11, fill: "#9ca3af" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  domain={[0, 600]}
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}bp`}
                />
                <Tooltip
                  formatter={(value, name) => [
                    `${value ?? 0}bp`,
                    (name as string) === "pre"
                      ? ko ? "3월 19일 이전" : "Pre-Mar 19"
                      : ko ? "3월 19일 이후" : "Post-Mar 19",
                  ] as [string, string]}
                  contentStyle={{
                    fontSize: 11,
                    borderRadius: 8,
                    border: "1px solid #e5e7eb",
                    background: "white",
                  }}
                />
                <Bar dataKey="pre" name="pre" radius={[3, 3, 0, 0]}>
                  {grouped.map((_, i) => (
                    <Cell key={`pre-${i}`} fill="#d1d5db" />
                  ))}
                </Bar>
                <Bar dataKey="post" name="post" radius={[3, 3, 0, 0]}>
                  {grouped.map((_, i) => (
                    <Cell key={`post-${i}`} fill={ACCENT} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Note */}
          <div className="mt-4 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 px-4 py-3">
            <p className="text-[11px] text-rose-700 dark:text-rose-300 leading-relaxed text-center">
              {ko
                ? "ECB·EBA·PRA 긴급 성명 이후 안정화 — \"EU·영국 AT1은 스위스와 다르다\""
                : "Stabilized after ECB/EBA/PRA emergency statements — \"EU & UK AT1s operate differently from Swiss ones\""}
            </p>
          </div>

          {/* Delta callouts */}
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {AT1_SPREAD_DATA.map((d) => (
              <div
                key={d.bank}
                className="rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-2.5 text-center"
              >
                <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{d.bank}</p>
                <p className="text-[14px] font-black text-rose-500 mt-0.5">
                  +{d.post - d.pre}bp
                </p>
                <p className="text-[9px] text-gray-400">
                  {d.pre}bp → {d.post}bp
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Visual: Prospectus Lesson ─────────────────────────────────────────────────
function ProspectusLesson({ lang }: { lang: Lang }) {
  const ko = lang === "ko";

  const lessons = ko
    ? [
        "AT1은 채권이 아니다 — 채권처럼 거래되는 자본 도구다. 법적 성격을 먼저 이해해야 한다.",
        "PONV 조항의 내용과 적용 관할권 법률(스위스 FINMA vs EU/영국 규제)을 구별해야 한다. 조항의 문언이 전부다.",
        "시장 관행(\"주식이 살면 AT1도 괜찮다\")은 법적 보호가 아니다. 계약서가 답이다.",
      ]
    : [
        "AT1 is not a bond — it is a capital instrument that happens to trade like one. Understand the legal nature first.",
        "The PONV provision and its jurisdiction's regulatory powers (Swiss FINMA vs EU/UK) must be distinguished. The exact contract language governs everything.",
        "Market convention (\"if equity survives, AT1 is fine\") is not legal protection. The prospectus is the answer.",
      ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "프로스펙터스 — 계약서가 답이었다" : "Prospectus — The Answer Was in the Contract"}
          </p>
        </div>

        <div className="p-5 sm:p-8 space-y-5">
          {/* Stylized prospectus excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ duration: 0.5, ease: EASE }}
            className="rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 overflow-hidden shadow-sm"
          >
            {/* Document header */}
            <div className="bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-5 py-3 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Credit Suisse Group AG
                </p>
                <p className="text-[9px] text-gray-400 dark:text-gray-500">
                  {ko
                    ? "AT1 자본 증권 조건부 약정서 (발췌 / 가상 예시)"
                    : "AT1 Capital Securities Indenture (Excerpt / Illustrative)"}
                </p>
              </div>
              <div className="text-[8px] font-bold text-gray-400 bg-gray-200 dark:bg-gray-800 px-2 py-0.5 rounded">
                PROSPECTUS
              </div>
            </div>

            {/* Document body */}
            <div className="p-5 font-mono text-[11px] text-gray-600 dark:text-gray-400 leading-relaxed space-y-3">
              <p>
                <span className="text-gray-400 dark:text-gray-500 select-none">§ 7.1 </span>
                {ko
                  ? "본 증권은 FINMA의 결정에 따라 발행사가 더 이상 정상적으로 기능을 유지할 수 없다고 판단되는 경우, 즉 "
                  : "The Securities shall be subject to a write-down to zero upon a "}
                <span className="bg-yellow-200 dark:bg-yellow-900/60 text-yellow-900 dark:text-yellow-200 font-bold px-0.5 rounded">
                  {ko ? "비존속성 사건(Viability Event)" : "Viability Event"}
                </span>
                {ko
                  ? " 발생 시 원금 전액이 즉시 소멸되도록 설계되어 있다."
                  : " as determined by FINMA, at which point the principal amount shall be"}
              </p>
              {!ko && (
                <p>
                  <span className="bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200 font-bold px-0.5 rounded">
                    written down to zero
                  </span>{" "}
                  immediately and irrevocably, without regard to whether any residual equity value remains.
                </p>
              )}
              {ko && (
                <p>
                  <span className="text-gray-400 dark:text-gray-500 select-none">§ 7.2 </span>
                  본 조항의 적용은{" "}
                  <span className="bg-rose-200 dark:bg-rose-900/50 text-rose-900 dark:text-rose-200 font-bold px-0.5 rounded">
                    잔존 주식 가치 여부와 무관하게
                  </span>{" "}
                  즉각적이고 취소 불가능하게 적용된다.
                </p>
              )}
              <p className="text-[9px] text-gray-400 italic border-t border-gray-100 dark:border-gray-800 pt-2">
                {ko
                  ? "* 위 내용은 실제 CS AT1 조건의 핵심 구조를 설명하는 가상 예시입니다."
                  : "* Above is an illustrative excerpt reflecting the key structure of actual CS AT1 terms."}
              </p>
            </div>
          </motion.div>

          {/* Lessons */}
          <div>
            <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
              {ko ? "이 사건이 시장에 새긴 3가지" : "3 Lessons Imprinted on the Market"}
            </p>
            <div className="space-y-2.5">
              {lessons.map((lesson, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
                  className="flex gap-3 items-start rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-3.5"
                >
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white mt-0.5"
                    style={{ background: ACCENT }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-[12px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {lesson}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Visuals mapped to each section ───────────────────────────────────────────
function getVisual(i: number, lang: Lang) {
  const visuals = [
    <CapitalStructureWaterfall key="0" lang={lang} />,
    <CollapseTimeline          key="1" lang={lang} />,
    <HierarchyInversionDiagram key="2" lang={lang} />,
    <AT1SpreadShock            key="3" lang={lang} />,
    <ProspectusLesson          key="4" lang={lang} />,
  ];
  return visuals[i] ?? null;
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function CreditSuisseAT1Client({
  deal,
  lang,
}: {
  deal: MarketDeal;
  lang: "ko" | "en";
}) {
  const ko = lang === "ko";

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
                className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
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
              style={{ background: "#fff1f2", color: ACCENT }}
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
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div
              variants={fadeUp(0.05)}
              className="rounded-2xl overflow-hidden border-2 border-rose-100 dark:border-rose-900/40"
            >
              {/* Snapshot header */}
              <div
                className="px-5 py-3 flex items-center gap-2"
                style={{ background: ACCENT }}
              >
                <p className="text-[10px] font-black text-white uppercase tracking-widest">
                  {ko ? "크레디트 스위스 AT1 — 핵심 수치" : "Credit Suisse AT1 — Key Figures"}
                </p>
              </div>

              {/* Grid rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-rose-100 dark:divide-rose-900/30 bg-white dark:bg-gray-950">
                {deal.snapshot.map((row, i) => {
                  const isKeyRow =
                    row.value.includes("CHF 16B") ||
                    row.value.includes("CHF 3B") ||
                    row.value.includes("PONV") ||
                    row.value.includes("역전");
                  return (
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
                      <p
                        className={`text-[14px] font-bold leading-snug ${
                          isKeyRow
                            ? "text-rose-600 dark:text-rose-400"
                            : "text-gray-900 dark:text-gray-100"
                        }`}
                      >
                        {row.value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Prominent callout: CHF 16B → 0 vs CHF 3B */}
              <div className="grid grid-cols-2 divide-x divide-rose-100 dark:divide-rose-900/30 border-t-2 border-rose-100 dark:border-rose-900/40">
                <div className="px-5 py-5 text-center bg-rose-50 dark:bg-rose-900/20">
                  <p className="text-[10px] text-rose-500 dark:text-rose-400 uppercase font-bold mb-1">
                    {ko ? "AT1 상각" : "AT1 Written Down"}
                  </p>
                  <p className="text-3xl font-black text-rose-600 dark:text-rose-400">
                    CHF 16B
                  </p>
                  <p className="text-[12px] font-black text-rose-500 mt-1">→ 0</p>
                </div>
                <div className="px-5 py-5 text-center bg-emerald-50 dark:bg-emerald-900/20">
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold mb-1">
                    {ko ? "주주 수령액" : "Equity Recovery"}
                  </p>
                  <p className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
                    CHF 3B
                  </p>
                  <p className="text-[12px] font-bold text-emerald-500 mt-1">
                    {ko ? "살아남았다" : "Survived"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Sections ── */}
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
                <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
              </motion.div>

              {/* Body text */}
              <div
                className="pl-4 border-l-2 mb-2"
                style={{ borderColor: ACCENT + "4d" }}
              >
                <div className="space-y-3">
                  {(ko ? section.body : section.bodyEn)
                    .split("\n\n")
                    .map((para, j) => (
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
              {getVisual(i, lang)}
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
            <div className="mt-5 space-y-3">
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
                        style={{ background: ACCENT }}
                      >
                        {i + 1}
                      </span>
                      {termHref ? (
                        <Link
                          href={termHref}
                          className="font-bold text-gray-900 dark:text-gray-100 text-[14px] hover:text-rose-600 dark:hover:text-rose-400 hover:underline transition-colors"
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
                          className="italic hover:text-rose-600 dark:hover:text-rose-400 hover:underline transition-colors"
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
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-rose-600 dark:text-rose-400 hover:underline"
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
