"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
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

// ── Chart 1: DB Stock Price Timeline ──────────────────────────────────────────
const stockData = [
  { month: "Nov '15", price: 26 },
  { month: "Dec '15", price: 25 },
  { month: "Jan '16", price: 22 },
  { month: "Feb 1", price: 18 },
  { month: "Feb 9", price: 14 },
  { month: "Feb 15", price: 16 },
  { month: "Mar '16", price: 18 },
  { month: "Apr '16", price: 17 },
  { month: "Jun '16", price: 15 },
];

function StockChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "도이체방크 주가 (€) — 2016년 1~2월 충격" : "Deutsche Bank Share Price (€) — Jan–Feb 2016 Shock"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stockData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="stockGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={ACCENT} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={ACCENT} stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#9ca3af" }} />
                <YAxis
                  domain={[10, 30]}
                  tick={{ fontSize: 10, fill: "#9ca3af" }}
                  tickFormatter={(v) => `€${v}`}
                />
                <Tooltip
                  formatter={(v) => [`€${v}`, ko ? "주가" : "Price"]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }}
                />
                <ReferenceLine x="Feb 9" stroke={ACCENT} strokeDasharray="4 2" label={{ value: ko ? "쿠폰 공포 최저" : "Fear Low €14", fontSize: 9, fill: ACCENT, position: "insideTopRight" }} />
                <Area type="monotone" dataKey="price" stroke={ACCENT} fill="url(#stockGrad)" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: ko ? "2015년 11월" : "Nov 2015", val: "€26", sub: ko ? "사전 수준" : "Pre-shock", color: "text-gray-600 dark:text-gray-400" },
              { label: ko ? "2016년 2월 9일" : "9 Feb 2016", val: "€14", sub: ko ? "공포 최저" : "Fear Low", color: "text-rose-600 dark:text-rose-400" },
              { label: ko ? "낙폭" : "Decline", val: "–46%", sub: ko ? "3개월" : "3 months", color: "text-rose-600 dark:text-rose-400" },
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

// ── Chart 2: ADI Mechanism Visual ─────────────────────────────────────────────
function AdiMechanismVisual({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const steps = [
    {
      icon: "📉",
      labelKo: "2015 순손실 ~68억 달러",
      labelEn: "2015 Net Loss ~$6.8B",
      noteKo: "IFRS 기준 사상 최대 적자",
      noteEn: "Record loss under IFRS",
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-700",
      text: "text-red-700 dark:text-red-300",
    },
    {
      icon: "❓",
      labelKo: "HGB 기준 이월잉여금?",
      labelEn: "HGB Retained Earnings?",
      noteKo: "독일 상법 기준 ADI 불투명",
      noteEn: "ADI opacity under German HGB",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-700",
      text: "text-amber-700 dark:text-amber-300",
    },
    {
      icon: "⚠️",
      labelKo: "ADI 부족 시나리오",
      labelEn: "ADI Insufficient Scenario",
      noteKo: "EU 규정상 쿠폰 의무 차단",
      noteEn: "Mandatory coupon block under CRD IV",
      bg: "bg-orange-50 dark:bg-orange-900/20",
      border: "border-orange-200 dark:border-orange-700",
      text: "text-orange-700 dark:text-orange-300",
    },
    {
      icon: "📢",
      labelKo: "2016년 2월 CEO 발표",
      labelEn: "Feb 2016 CEO Statement",
      noteKo: "\"충분한 잉여 자원 확보\" 공식화",
      noteEn: '"Adequate resources confirmed"',
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-200 dark:border-emerald-700",
      text: "text-emerald-700 dark:text-emerald-300",
    },
    {
      icon: "✅",
      labelKo: "AT1 쿠폰 정상 지급",
      labelEn: "AT1 Coupons Paid in Full",
      noteKo: "공포 해소 — 가격 회복",
      noteEn: "Fear resolved — prices recovered",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700",
      text: "text-blue-700 dark:text-blue-300",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "ADI 메커니즘 — 공포의 논리" : "ADI Mechanism — The Logic of Fear"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          {/* Desktop: horizontal */}
          <div className="hidden sm:flex items-start gap-2">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div className={`w-full rounded-xl border p-3 ${s.bg} ${s.border} text-center`}>
                  <span className="text-2xl mb-2 block">{s.icon}</span>
                  <p className={`text-[11px] font-bold leading-tight ${s.text}`}>
                    {ko ? s.labelKo : s.labelEn}
                  </p>
                  <p className={`text-[9px] mt-1 opacity-75 ${s.text}`}>
                    {ko ? s.noteKo : s.noteEn}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex items-center justify-center w-full mt-1">
                    <span className="text-gray-300 dark:text-gray-600 text-lg">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Mobile: vertical */}
          <div className="sm:hidden relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-300 via-amber-300 to-emerald-400" />
            <div className="space-y-3">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                  className={`relative rounded-xl border p-3 ${s.bg} ${s.border}`}
                >
                  <div className="absolute -left-6 top-3 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900 flex items-center justify-center">
                    <span className="text-[7px] font-black text-white">{i + 1}</span>
                  </div>
                  <p className={`text-[12px] font-bold leading-tight ${s.text}`}>{s.icon} {ko ? s.labelKo : s.labelEn}</p>
                  <p className={`text-[10px] mt-1 opacity-75 ${s.text}`}>{ko ? s.noteKo : s.noteEn}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Chart 3: AT1 Spread Widening ──────────────────────────────────────────────
const spreadData = [
  { bank: "DB", pre: 280, post: 480, fill: ACCENT },
  { bank: "BNP", pre: 220, post: 380, fill: "#f97316" },
  { bank: "SocGen", pre: 240, post: 410, fill: "#fb923c" },
  { bank: "Barclays", pre: 200, post: 340, fill: "#fbbf24" },
];

function SpreadChart({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "유럽 주요 은행 AT1 스프레드 (bp) — 2016년 1월 충격 전후" : "European Bank AT1 Spreads (bp) — Before vs After Jan 2016 Shock"}
          </p>
        </div>
        <div className="p-5 sm:p-8">
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={spreadData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="bank" tick={{ fontSize: 11, fill: "#9ca3af" }} />
                <YAxis tick={{ fontSize: 10, fill: "#9ca3af" }} tickFormatter={(v) => `${v}bp`} />
                <Tooltip
                  formatter={(v, name) => [`${v}bp`, name === "pre" ? (ko ? "충격 전" : "Pre-shock") : (ko ? "충격 후" : "Post-shock")]}
                  contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "white" }}
                />
                <Bar dataKey="pre" name="pre" radius={[3, 3, 0, 0]}>
                  {spreadData.map((_, i) => (
                    <Cell key={i} fill="#d1d5db" />
                  ))}
                </Bar>
                <Bar dataKey="post" name="post" radius={[3, 3, 0, 0]}>
                  {spreadData.map((_, i) => (
                    <Cell key={i} fill={spreadData[i].fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center gap-4 text-[11px] text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm bg-gray-300 flex-shrink-0" />
              {ko ? "충격 전" : "Pre-shock"}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ background: ACCENT }} />
              {ko ? "충격 후 (DB)" : "Post-shock (DB)"}
            </span>
            <span className="text-[10px] text-gray-400">{ko ? "타 은행은 연대 매도" : "Others: contagion selloff"}</span>
          </div>
          <div className="mt-3 rounded-xl px-4 py-3 text-[11px] leading-relaxed text-rose-700 dark:text-rose-300"
            style={{ background: ACCENT_LIGHT }}>
            {ko
              ? "DB +200bp 확대, 유럽 전체 AT1 연대 하락 — 쿠폰 리스크가 처음으로 시장 가격에 반영된 순간"
              : "DB +200bp wider; entire European AT1 universe sold off — the first time coupon risk was priced into markets"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Chart 4: Timeline 2016 Crisis ─────────────────────────────────────────────
function CrisisTimeline({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const events = [
    {
      date: ko ? "2015년 연말" : "End of 2015",
      titleKo: "사상 최대 손실 발표",
      titleEn: "Record Loss Announced",
      noteKo: "~68억 달러 순손실 — IFRS 기준 사상 최대",
      noteEn: "~$6.8B net loss — record loss under IFRS",
      color: "bg-red-50 dark:bg-red-900/30",
      border: "border-red-200 dark:border-red-700",
      dot: "bg-red-400",
      text: "text-red-700 dark:text-red-300",
    },
    {
      date: ko ? "2016년 1월 말" : "Late Jan 2016",
      titleKo: "AT1 쿠폰 공포 시작",
      titleEn: "AT1 Coupon Fear Begins",
      noteKo: "ADI 부족 우려 확산, AT1 100→70 급락, 주가 -30%",
      noteEn: "ADI concern spreads; AT1 100→70; stock -30%",
      color: "bg-orange-50 dark:bg-orange-900/30",
      border: "border-orange-300 dark:border-orange-600",
      dot: "bg-orange-400",
      text: "text-orange-700 dark:text-orange-300",
    },
    {
      date: ko ? "2016년 2월 9일" : "9 Feb 2016",
      titleKo: "주가 €14 최저",
      titleEn: "Stock Low €14",
      noteKo: "공포 절정 — DB 주가 3개월 만에 -46%",
      noteEn: "Peak fear — DB stock -46% in 3 months",
      color: "bg-rose-100 dark:bg-rose-900/40",
      border: "border-rose-400 dark:border-rose-500",
      dot: "bg-rose-500",
      text: "text-rose-800 dark:text-rose-200",
    },
    {
      date: ko ? "2016년 2월 중순" : "Mid Feb 2016",
      titleKo: "CEO 공식 발표",
      titleEn: "CEO Official Statement",
      noteKo: "존 크라이언 CEO: \"AT1 쿠폰 지급 충분한 자원 확보\"",
      noteEn: 'John Cryan CEO: "Adequate resources to pay AT1 coupons"',
      color: "bg-amber-50 dark:bg-amber-900/30",
      border: "border-amber-300 dark:border-amber-600",
      dot: "bg-amber-400",
      text: "text-amber-700 dark:text-amber-300",
    },
    {
      date: ko ? "2016년 이후" : "2016 Onwards",
      titleKo: "AT1 쿠폰 정상 지급",
      titleEn: "AT1 Coupons Paid",
      noteKo: "모든 쿠폰 예정대로 지급 — 가격 회복, 공포 해소",
      noteEn: "All coupons paid as scheduled — prices recovered",
      color: "bg-emerald-50 dark:bg-emerald-900/30",
      border: "border-emerald-300 dark:border-emerald-600",
      dot: "bg-emerald-400",
      text: "text-emerald-700 dark:text-emerald-300",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "2016년 DB 코코 쇼크 타임라인" : "2016 DB CoCo Shock Timeline"}
          </p>
        </div>
        {/* Desktop: horizontal */}
        <div className="hidden sm:block p-5 sm:p-8">
          <div className="relative">
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-gradient-to-r from-red-300 via-rose-400 to-emerald-400" />
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
                  <div className={`w-8 h-8 rounded-full ${ev.dot} border-2 border-white dark:border-gray-900 flex items-center justify-center z-10 mb-3 shadow-sm`}>
                    <span className="text-[9px] font-black text-white">{i + 1}</span>
                  </div>
                  <div className={`w-full rounded-xl border p-3 ${ev.color} ${ev.border}`}>
                    <p className={`text-[10px] font-black ${ev.text} mb-1`}>{ev.date}</p>
                    <p className={`text-[11px] font-bold leading-tight ${ev.text} mb-2`}>{ko ? ev.titleKo : ev.titleEn}</p>
                    <p className={`text-[9px] leading-snug opacity-80 ${ev.text}`}>{ko ? ev.noteKo : ev.noteEn}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Mobile: vertical */}
        <div className="sm:hidden p-5">
          <div className="relative pl-6">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-300 via-rose-400 to-emerald-400" />
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
                  <div className={`absolute -left-6 top-3 w-4 h-4 rounded-full ${ev.dot} border-2 border-white dark:border-gray-900 flex items-center justify-center`}>
                    <span className="text-[7px] font-black text-white">{i + 1}</span>
                  </div>
                  <div className={`rounded-xl border p-3 ${ev.color} ${ev.border}`}>
                    <p className={`text-[10px] font-black ${ev.text} mb-0.5`}>{ev.date}</p>
                    <p className={`text-[12px] font-bold leading-tight ${ev.text} mb-1.5`}>{ko ? ev.titleKo : ev.titleEn}</p>
                    <p className={`text-[11px] leading-snug opacity-80 ${ev.text}`}>{ko ? ev.noteKo : ev.noteEn}</p>
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

// ── Chart 5: CS Preview Comparison ───────────────────────────────────────────
function PreviewComparison({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const rows = [
    {
      labelKo: "사건 유형",
      labelEn: "Event Type",
      db: ko ? "쿠폰 미지급 공포" : "Coupon non-payment fear",
      cs: ko ? "AT1 전액상각 현실" : "AT1 full write-down (reality)",
      dbColor: "text-amber-600 dark:text-amber-400",
      csColor: "text-rose-600 dark:text-rose-400",
    },
    {
      labelKo: "트리거",
      labelEn: "Trigger",
      db: ko ? "ADI 부족 가능성" : "Potential ADI insufficiency",
      cs: ko ? "FINMA PONV 결정" : "FINMA PONV determination",
      dbColor: "text-gray-700 dark:text-gray-300",
      csColor: "text-gray-700 dark:text-gray-300",
    },
    {
      labelKo: "AT1 결과",
      labelEn: "AT1 Outcome",
      db: ko ? "쿠폰 정상 지급, 가격 회복" : "Coupons paid, prices recovered",
      cs: ko ? "CHF 160억 전액 0 상각" : "CHF 16B written to zero",
      dbColor: "text-emerald-600 dark:text-emerald-400",
      csColor: "text-rose-600 dark:text-rose-400",
    },
    {
      labelKo: "주가 결과",
      labelEn: "Equity Outcome",
      db: ko ? "주가 회복" : "Stock recovered",
      cs: ko ? "CHF 3B — UBS 주식" : "CHF 3B → UBS shares",
      dbColor: "text-emerald-600 dark:text-emerald-400",
      csColor: "text-amber-600 dark:text-amber-400",
    },
    {
      labelKo: "시장 교훈",
      labelEn: "Market Lesson",
      db: ko ? "공포가 계약 리스크 인식 제고" : "Fear raised awareness of contractual risk",
      cs: ko ? "관행이 계약서를 이길 수 없다" : "Convention cannot override contract",
      dbColor: "text-gray-700 dark:text-gray-300",
      csColor: "text-gray-700 dark:text-gray-300",
    },
  ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
        <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {ko ? "DB 2016 vs CS 2023 — 예고편과 본편" : "DB 2016 vs CS 2023 — Preview vs Reality"}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <th className="text-left px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest w-1/4">
                  {ko ? "비교 항목" : "Comparison"}
                </th>
                <th className="text-center px-4 py-3 text-[10px] font-bold text-amber-500 uppercase tracking-widest w-3/8">
                  DB 2016
                </th>
                <th className="text-center px-4 py-3 text-[10px] font-bold uppercase tracking-widest w-3/8" style={{ color: ACCENT }}>
                  CS 2023
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className={`border-b border-gray-50 dark:border-gray-800/50 ${i % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/50 dark:bg-gray-900/30"}`}>
                  <td className="px-4 py-3 text-[11px] font-bold text-gray-500 dark:text-gray-400">
                    {ko ? r.labelKo : r.labelEn}
                  </td>
                  <td className={`px-4 py-3 text-center text-[12px] ${r.dbColor}`}>{r.db}</td>
                  <td className={`px-4 py-3 text-center text-[12px] ${r.csColor}`}>{r.cs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

// ── Visuals mapped to each section ───────────────────────────────────────────
function getVisual(i: number, lang: Lang) {
  const visuals = [
    <StockChart key="0" lang={lang} />,
    <AdiMechanismVisual key="1" lang={lang} />,
    <SpreadChart key="2" lang={lang} />,
    <PreviewComparison key="3" lang={lang} />,
    <CrisisTimeline key="4" lang={lang} />,
  ];
  return visuals[i] ?? null;
}

// ── Main export ───────────────────────────────────────────────────────────────
export default function DeutscheBankCocoClient({
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
                  {ko ? "도이체방크 코코 쇼크 — 핵심 수치" : "Deutsche Bank CoCo Shock — Key Figures"}
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
                <div className="px-4 py-4 text-center bg-rose-50 dark:bg-rose-900/20">
                  <p className="text-[10px] text-rose-500 dark:text-rose-400 uppercase font-bold mb-1">
                    {ko ? "AT1 낙폭" : "AT1 Drop"}
                  </p>
                  <p className="text-2xl font-black text-rose-600 dark:text-rose-400">100→70</p>
                  <p className="text-[10px] text-rose-400 mt-0.5">{ko ? "액면 대비" : "vs par"}</p>
                </div>
                <div className="px-4 py-4 text-center bg-orange-50 dark:bg-orange-900/20">
                  <p className="text-[10px] text-orange-500 dark:text-orange-400 uppercase font-bold mb-1">
                    {ko ? "주가 낙폭" : "Stock Drop"}
                  </p>
                  <p className="text-2xl font-black text-orange-600 dark:text-orange-400">–46%</p>
                  <p className="text-[10px] text-orange-400 mt-0.5">{ko ? "3개월" : "3 months"}</p>
                </div>
                <div className="px-4 py-4 text-center bg-emerald-50 dark:bg-emerald-900/20">
                  <p className="text-[10px] text-emerald-500 dark:text-emerald-400 uppercase font-bold mb-1">
                    {ko ? "결과" : "Outcome"}
                  </p>
                  <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">{ko ? "전액 지급" : "All Paid"}</p>
                  <p className="text-[10px] text-emerald-400 mt-0.5">{ko ? "공포 해소" : "Fear resolved"}</p>
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
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" likeSlug={deal.slug} lang={lang} />

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
