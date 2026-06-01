"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  AreaChart,
  Area,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

import type { MarketDeal } from "@/data/market-deals";
import SeriesNav from "@/components/SeriesNav";
import { getMarketDealNav } from "@/data/market-deals";
import LikeButton from "@/components/LikeButton";

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
const ACCENT_DARK = "#be123c"; // rose-700
const ACCENT_LIGHT = "rgb(255 241 242)"; // rose-50

// ── Chart 1: Call Convention History ─────────────────────────────────────────
function CallConventionVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const facts = [
    {
      icon: "📅",
      labelKo: "2012~2015년 CoCo 붐",
      labelEn: "2012–2015 CoCo Boom",
      noteKo: "저금리 환경에서 유럽 은행들 AT1 대규모 발행",
      noteEn: "European banks issue AT1s massively in ZIRP environment",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700",
      text: "text-blue-700 dark:text-blue-300",
    },
    {
      icon: "🤝",
      labelKo: "시장 관행 정착",
      labelEn: "Convention Crystallizes",
      noteKo: '"5년 후 무조건 콜" 암묵적 규범 형성',
      noteEn: '"Always call at 5-year mark" becomes implicit norm',
      bg: "bg-indigo-50 dark:bg-indigo-900/20",
      border: "border-indigo-200 dark:border-indigo-700",
      text: "text-indigo-700 dark:text-indigo-300",
    },
    {
      icon: "💹",
      labelKo: "YTC 기준 가격화",
      labelEn: "YTC Pricing Dominates",
      noteKo: "투자자들이 영구채를 5년물처럼 분석/거래",
      noteEn: "Investors analyze & trade perpetuals like 5-year bonds",
      bg: "bg-violet-50 dark:bg-violet-900/20",
      border: "border-violet-200 dark:border-violet-700",
      text: "text-violet-700 dark:text-violet-300",
    },
    {
      icon: "💥",
      labelKo: "2019년 2월 12일",
      labelEn: "12 February 2019",
      noteKo: "산탄데르 €15억 AT1 콜 미행사 — 관행 붕괴",
      noteEn: "Santander €1.5B AT1 no-call — convention breaks",
      bg: "bg-rose-50 dark:bg-rose-900/20",
      border: "border-rose-300 dark:border-rose-600",
      text: "text-rose-700 dark:text-rose-300",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "AT1 콜 관행 형성 — 2012년부터 붕괴까지" : "AT1 Call Convention — From Formation to Breakdown"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          {/* Desktop: horizontal */}
          <div className="hidden sm:flex items-start gap-3">
            {facts.map((f, i) => (
              <div key={i} className="flex-1 relative">
                <div className={`rounded-xl border p-4 ${f.bg} ${f.border} text-center`}>
                  <span className="text-2xl mb-2 block">{f.icon}</span>
                  <p className={`text-[11px] font-bold leading-tight ${f.text} mb-1`}>
                    {ko ? f.labelKo : f.labelEn}
                  </p>
                  <p className={`text-[9px] opacity-75 leading-snug ${f.text}`}>
                    {ko ? f.noteKo : f.noteEn}
                  </p>
                </div>
                {i < facts.length - 1 && (
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-gray-300 dark:text-gray-600 text-lg font-bold">→</div>
                )}
              </div>
            ))}
          </div>
          {/* Mobile: vertical */}
          <div className="sm:hidden relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-300 via-violet-400 to-rose-500" />
            <div className="space-y-3">
              {facts.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                  className={`relative rounded-xl border p-3 ${f.bg} ${f.border}`}
                >
                  <div className="absolute -left-6 top-3 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900 flex items-center justify-center">
                    <span className="text-[7px] font-black text-white">{i + 1}</span>
                  </div>
                  <p className={`text-[12px] font-bold leading-tight ${f.text}`}>{f.icon} {ko ? f.labelKo : f.labelEn}</p>
                  <p className={`text-[10px] mt-1 opacity-75 ${f.text}`}>{ko ? f.noteKo : f.noteEn}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Chart 2: Call Economics Comparison ───────────────────────────────────────
const couponData = [
  { name: "Original\n6.25%", value: 6.25, fill: "#d1d5db", labelKo: "기존 쿠폰", labelEn: "Old Coupon" },
  { name: "Reset\n~5.4%", value: 5.4, fill: "#10b981", labelKo: "리셋 쿠폰", labelEn: "Reset Coupon" },
  { name: "New Issue\n~6%+", value: 6.1, fill: ACCENT, labelKo: "신규 발행", labelEn: "New Issue" },
];

function CallEconomicsChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "콜 미행사의 경제학 — 쿠폰 비교" : "Economics of No-Call — Coupon Comparison"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={couponData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis
                  domain={[4.5, 7]}
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  formatter={(v) => [`${v}%`, ko ? "쿠폰" : "Coupon"]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }}
                />
                <ReferenceLine y={5.4} stroke="#10b981" strokeDasharray="4 2" label={{ value: ko ? "리셋 ~5.4%" : "Reset ~5.4%", fontSize: 9, fill: "#10b981", position: "insideTopRight" }} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {couponData.map((d, i) => (
                    <Cell key={i} fill={d.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Logic callout */}
          <div className="mt-4 rounded-xl border border-rose-100 dark:border-rose-800 p-4" style={{ background: ACCENT_LIGHT }}>
            <p className="text-[11px] font-bold text-rose-700 dark:text-rose-300 mb-2">
              {ko ? "산탄데르의 합리적 계산" : "Santander's Rational Calculation"}
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-[9px] text-gray-500 dark:text-gray-400 mb-1">{ko ? "기존 쿠폰" : "Old Coupon"}</p>
                <p className="text-[16px] font-black text-gray-600 dark:text-gray-400">6.25%</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[9px] text-gray-400 mb-1">{ko ? "리셋 vs 신규" : "Reset vs New"}</p>
                  <p className="text-[16px] font-black text-emerald-600 dark:text-emerald-400">5.4% &lt; 6%</p>
                  <p className="text-[8px] text-emerald-500">{ko ? "콜 안하는 게 싸다" : "No-call is cheaper"}</p>
                </div>
              </div>
              <div>
                <p className="text-[9px] text-gray-500 dark:text-gray-400 mb-1">{ko ? "결정" : "Decision"}</p>
                <p className="text-[16px] font-black text-rose-600 dark:text-rose-400">{ko ? "콜 스킵" : "No Call"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Chart 3: Extension Risk Price Impact ──────────────────────────────────────
const priceData = [
  { date: "Jan '19", price: 101.8 },
  { date: "Feb 1", price: 101.5 },
  { date: "Feb 8", price: 101.2 },
  { date: "Feb 12", price: 98.0 },
  { date: "Feb 15", price: 97.5 },
  { date: "Feb 20", price: 97.8 },
  { date: "Mar '19", price: 98.5 },
  { date: "Apr '19", price: 99.0 },
];

function PriceImpactChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "산탄데르 6.25% AT1 가격 움직임 — 콜 스킵 충격" : "Santander 6.25% AT1 Price — No-Call Shock"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={priceData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ACCENT} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={ACCENT} stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis domain={[95, 104]} tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}`} />
                <Tooltip
                  formatter={(v) => [`${v}`, ko ? "가격 (액면 100 기준)" : "Price (par=100)"]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }}
                />
                <ReferenceLine x="Feb 12" stroke={ACCENT} strokeDasharray="4 2" label={{ value: ko ? "콜 스킵 발표" : "No-Call Announced", fontSize: 9, fill: ACCENT, position: "insideTopRight" }} />
                <Area type="monotone" dataKey="price" stroke={ACCENT} fill="url(#priceGrad)" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: ko ? "발표 전" : "Pre-announcement", val: "~101–102", sub: ko ? "YTC 기준 가격" : "YTC-based price", color: "text-gray-700 dark:text-gray-300" },
              { label: ko ? "발표 직후" : "Immediately after", val: "<98", sub: ko ? "YTM 기준 재가격" : "Repriced to YTM", color: "text-rose-600 dark:text-rose-400" },
              { label: ko ? "충격 규모" : "Shock", val: "~3–4pt", sub: ko ? "영구채 리스크 재평가" : "Perpetual risk repricing", color: "text-rose-600 dark:text-rose-400" },
            ].map((c) => (
              <div key={c.label} className="rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-3 text-center">
                <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{c.label}</p>
                <p className={`text-lg font-black ${c.color}`}>{c.val}</p>
                <p className="text-[9px] text-gray-400 mt-0.5">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Chart 4: YTC vs YTW Methodology ──────────────────────────────────────────
function YtcYtwVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const before = [
    {
      labelKo: "YTC만 계산",
      labelEn: "Calculate YTC only",
      noteKo: "첫 콜에 상환 가정 — 수익률 계산",
      noteEn: "Assume redeemed at first call — calculate yield",
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-700",
    },
    {
      labelKo: "Extension Risk 무시",
      labelEn: "Extension Risk Ignored",
      noteKo: "\"어차피 콜 할 거야\" — 관행 신뢰",
      noteEn: '"They will always call" — convention trusted',
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-700",
    },
  ];
  const after = [
    {
      labelKo: "YTC + YTM 모두 계산",
      labelEn: "Calculate both YTC and YTM",
      noteKo: "콜 가정 vs 연장 가정 두 가지 시나리오",
      noteEn: "Call assumed vs extension assumed: two scenarios",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-200 dark:border-emerald-700",
    },
    {
      labelKo: "YTW(최악 수익률) 기준 투자",
      labelEn: "Invest on YTW Basis",
      noteKo: "YTC와 YTM 중 낮은 값이 실질 수익률 기준",
      noteEn: "Lower of YTC vs YTM = effective yield benchmark",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-200 dark:border-emerald-700",
    },
    {
      labelKo: "리셋 인센티브 분석",
      labelEn: "Analyze Reset Incentives",
      noteKo: "리셋 쿠폰 < 신규 발행 시 콜 가능성 낮다",
      noteEn: "Reset coupon < new issuance → low call probability",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-200 dark:border-emerald-700",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "AT1 분석 방법론 — 산탄데르 이전 vs 이후" : "AT1 Analysis Methodology — Before vs After Santander"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Before */}
            <div>
              <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-3 text-center">
                {ko ? "산탄데르 이전" : "Before Santander"}
              </p>
              <div className="space-y-2.5">
                {before.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
                    className={`rounded-xl border p-3 ${b.bg} ${b.border}`}
                  >
                    <p className={`text-[12px] font-bold ${b.color}`}>{ko ? b.labelKo : b.labelEn}</p>
                    <p className={`text-[10px] mt-1 opacity-75 ${b.color}`}>{ko ? b.noteKo : b.noteEn}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* After */}
            <div>
              <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3 text-center">
                {ko ? "산탄데르 이후" : "After Santander"}
              </p>
              <div className="space-y-2.5">
                {after.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: EASE }}
                    className={`rounded-xl border p-3 ${a.bg} ${a.border}`}
                  >
                    <p className={`text-[12px] font-bold ${a.color}`}>{ko ? a.labelKo : a.labelEn}</p>
                    <p className={`text-[10px] mt-1 opacity-75 ${a.color}`}>{ko ? a.noteKo : a.noteEn}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Chart 5: Convention vs Contract ──────────────────────────────────────────
function ConventionVsContractVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const items = [
    {
      icon: "📝",
      labelKo: "계약서가 말하는 것",
      labelEn: "What the Contract Says",
      textKo: "발행사는 선택적으로 첫 콜 날짜에 채권을 상환할 수 있다.",
      textEn: "The issuer may, at its option, redeem the bonds on the first call date.",
      color: "text-gray-700 dark:text-gray-300",
      bg: "bg-gray-50 dark:bg-gray-900",
      border: "border-gray-200 dark:border-gray-700",
      tag: ko ? "계약서 (사실)" : "Contract (Fact)",
      tagBg: "bg-gray-200 dark:bg-gray-700",
      tagText: "text-gray-700 dark:text-gray-300",
    },
    {
      icon: "🤔",
      labelKo: "시장이 믿었던 것",
      labelEn: "What Markets Believed",
      textKo: "은행은 평판 리스크 때문에 항상 첫 콜에 상환한다.",
      textEn: "Banks will always call at the first date due to reputational risk.",
      color: "text-amber-700 dark:text-amber-300",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-700",
      tag: ko ? "관행 (기대)" : "Convention (Expectation)",
      tagBg: "bg-amber-100 dark:bg-amber-900/40",
      tagText: "text-amber-700 dark:text-amber-300",
    },
    {
      icon: "💡",
      labelKo: "실제 행동 결정 요인",
      labelEn: "What Actually Determines Behavior",
      textKo: "경제적 인센티브. 콜 비용 vs 리셋 쿠폰. 인센티브가 바뀌면 행동도 바뀐다.",
      textEn: "Economic incentives. Cost of calling vs reset coupon. When incentives change, behavior changes.",
      color: "text-emerald-700 dark:text-emerald-300",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-200 dark:border-emerald-700",
      tag: ko ? "현실 (교훈)" : "Reality (Lesson)",
      tagBg: "bg-emerald-100 dark:bg-emerald-900/40",
      tagText: "text-emerald-700 dark:text-emerald-300",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "관행 ≠ 계약서 — 세 가지 차원의 진실" : "Convention ≠ Contract — Three Layers of Truth"}
          </p>
        </div>
        <div className="p-5 sm:p-8 space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.45, delay: i * 0.12, ease: EASE }}
              className={`rounded-xl border p-4 ${item.bg} ${item.border}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <p className={`text-[12px] font-bold ${item.color}`}>
                      {ko ? item.labelKo : item.labelEn}
                    </p>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${item.tagBg} ${item.tagText}`}>
                      {item.tag}
                    </span>
                  </div>
                  <p className={`text-[12px] leading-relaxed ${item.color} opacity-90`}>
                    {ko ? item.textKo : item.textEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Visuals mapped to each section ───────────────────────────────────────────
function getVisual(i: number, lang: Lang) {
  const visuals = [
    <CallConventionVisual key="0" lang={lang} />,
    <CallEconomicsChart key="1" lang={lang} />,
    <PriceImpactChart key="2" lang={lang} />,
    <YtcYtwVisual key="3" lang={lang} />,
    <ConventionVsContractVisual key="4" lang={lang} />,
  ];
  return visuals[i] ?? null;
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function SantanderAt1Client({
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
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market" : "/en/market"} className="hover:text-rose-600 dark:hover:text-rose-400 transition-colors">
                {ko ? "마켓" : "Market"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">{ko ? "FIG 드라마" : "FIG Drama"}</span>
            </div>

            {/* Category badge */}
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4"
              style={{ background: ACCENT_LIGHT, color: ACCENT }}
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
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">
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
        
          <LikeButton slug={deal.slug} lang={lang} /></div>

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
              className="rounded-xl border-l-4 px-5 py-4 bg-rose-50 dark:bg-rose-900/15"
              style={{ borderColor: ACCENT }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: ACCENT }}>
                {ko ? "핵심 요약" : "Key Takeaways"}
              </p>
              <ul className="space-y-2">
                {(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-rose-800 dark:text-rose-200">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ACCENT }} />
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
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
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
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: ACCENT }}>
                <p className="text-[10px] font-black text-white uppercase tracking-widest">
                  {ko ? "산탄데르 AT1 콜 스킵 — 핵심 수치" : "Santander AT1 No-Call — Key Figures"}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-rose-100 dark:divide-rose-900/30 bg-white dark:bg-gray-950">
                {deal.snapshot.map((row, i) => (
                  <motion.div
                    key={row.labelKo}
                    variants={fadeUp(i * 0.06)}
                    className={`px-5 py-4 ${i % 2 === 0 && i === deal.snapshot.length - 1 ? "sm:col-span-2" : ""}`}
                  >
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">
                      {ko ? row.labelKo : row.labelEn}
                    </p>
                    <p className="text-[14px] font-bold leading-snug text-gray-900 dark:text-gray-100">
                      {ko ? row.value : (row.valueEn ?? row.value)}
                    </p>
                  </motion.div>
                ))}
              </div>
              {/* Callout */}
              <div className="grid grid-cols-3 divide-x divide-rose-100 dark:divide-rose-900/30 border-t-2 border-rose-100 dark:border-rose-900/40">
                <div className="px-4 py-4 text-center bg-gray-50 dark:bg-gray-900">
                  <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">{ko ? "기존 쿠폰" : "Old Coupon"}</p>
                  <p className="text-2xl font-black text-gray-700 dark:text-gray-300">6.25%</p>
                </div>
                <div className="px-4 py-4 text-center bg-emerald-50 dark:bg-emerald-900/20">
                  <p className="text-[10px] text-emerald-500 dark:text-emerald-400 uppercase font-bold mb-1">{ko ? "리셋 쿠폰" : "Reset Coupon"}</p>
                  <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">~5.4%</p>
                  <p className="text-[9px] text-emerald-400 mt-0.5">{ko ? "더 저렴" : "Cheaper"}</p>
                </div>
                <div className="px-4 py-4 text-center" style={{ background: ACCENT_LIGHT }}>
                  <p className="text-[10px] uppercase font-bold mb-1" style={{ color: ACCENT }}>{ko ? "결정" : "Decision"}</p>
                  <p className="text-lg font-black" style={{ color: ACCENT }}>{ko ? "콜 스킵" : "No Call"}</p>
                  <p className="text-[9px] mt-0.5" style={{ color: ACCENT }}>{ko ? "최초 사례" : "First time"}</p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* ── Sections ── */}
          {deal.sections.map((section, i) => (
            <motion.section key={i} variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.div variants={fadeUp()} className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                  {ko ? section.heading : section.headingEn}
                </h2>
                <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
              </motion.div>
              <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
                <div className="space-y-3">
                  {(ko ? section.body : section.bodyEn).split("\n\n").map((para, j) => (
                    <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                      {para}
                    </motion.p>
                  ))}
                </div>
              </div>
              {getVisual(i, lang)}
            </motion.section>
          ))}

          {/* ── Key Terms ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {ko ? "핵심 용어" : "Key Terms"}
            </motion.h2>
            <div className="mt-5 space-y-3">
              {deal.keyTerms.map((term, i) => (
                <motion.div key={i} variants={fadeUp()} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background: ACCENT }}>
                      {i + 1}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-gray-100 text-[14px]">
                      {ko ? term.term : term.termEn}
                    </span>
                  </div>
                  <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed pl-7">
                    {ko ? term.definition : term.definitionEn}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── Assessment ── */}
          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "딜 평가" : "Deal Assessment"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
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

          {/* ── Share — mid ── */}
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" lang={lang} />

          {/* ── FAQ ── */}
          {deal.faq && deal.faq.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <FaqAccordion items={deal.faq.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))} accent={ACCENT} />
            </motion.section>
          )}

          {/* ── Related Content ── */}
          {(deal.relatedDealSlugs?.length || deal.relatedMarket101Slugs?.length) ? (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "함께 읽으면 좋은 콘텐츠" : "Related Content"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: ACCENT }} />
              <div className="grid sm:grid-cols-2 gap-3">
                {deal.relatedDealSlugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market/${slug}` : `/en/market/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-rose-300 dark:hover:border-rose-700 hover:bg-rose-50/40 dark:hover:bg-rose-900/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center text-[11px] font-bold text-rose-600 dark:text-rose-400 flex-shrink-0">M</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-rose-700 dark:group-hover:text-rose-300 transition-colors truncate">
                            {slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-rose-400 transition-colors text-sm flex-shrink-0">→</span>
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

          {/* ── References ── */}
          {deal.references && deal.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-5" style={{ background: ACCENT }} />
              <ol className="space-y-2.5">
                {deal.references.map((ref) => (
                  <motion.li key={ref.id} variants={fadeUp()} className="flex gap-3 text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white mt-0.5" style={{ background: ACCENT_DARK }}>
                      {ref.id}
                    </span>
                    <span>
                      {ref.author && <span className="font-semibold text-gray-800 dark:text-gray-200">{ref.author}. </span>}
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: ACCENT }}>
                          {ref.title}
                        </a>
                      ) : (
                        <span>{ref.title}</span>
                      )}
                      {ref.source && <span className="text-gray-400 dark:text-gray-500"> — {ref.source}</span>}
                      {ref.year && <span className="text-gray-400 dark:text-gray-500"> ({ref.year})</span>}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

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
      </main>
      <Footer />
    </>
  );
}
