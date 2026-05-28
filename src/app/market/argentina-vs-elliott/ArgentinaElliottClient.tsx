"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketDeal } from "@/data/market-deals";
import SeriesNav from "@/components/SeriesNav";
import { getMarketDealNav } from "@/data/market-deals";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

// ── Colors ────────────────────────────────────────────────────────────────────
const accent = "#6b7280";
// accentLight available for future use: "rgb(243 244 246)"
const accentDark = "#374151";

// ── Chart data ────────────────────────────────────────────────────────────────
// Argentine sovereign spread over US Treasuries (basis points, approximate)
const spreadData = [
  { year: "1998", spread: 400 },
  { year: "1999", spread: 600 },
  { year: "2000", spread: 900 },
  { year: "2001 Q1", spread: 1400 },
  { year: "2001 Q3", spread: 2200 },
  { year: "2001 Dec", spread: 5000 },
  { year: "2005", spread: 480 },
  { year: "2010", spread: 580 },
  { year: "2012", spread: 1100 },
  { year: "2014", spread: 750 },
  { year: "2016 Feb", spread: 430 },
];

// Debt exchange breakdown
const exchangeData = [
  { stage: "2005 교환", accepted: 76, holdout: 24 },
  { stage: "2010 추가", accepted: 17, holdout: 7 },
];

const exchangeDataEn = [
  { stage: "2005 Exchange", accepted: 76, holdout: 24 },
  { stage: "2010 Addition", accepted: 17, holdout: 7 },
];

// ── Spread Area Chart ─────────────────────────────────────────────────────────
function SpreadAreaChart({ ko }: { ko: boolean }) {
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko
            ? "아르헨티나 Sovereign 스프레드 (vs US Treasury, bp) — 1998→2016"
            : "Argentine Sovereign Spread (vs US Treasury, bps) — 1998 → 2016"}
        </p>
      </div>
      <div className="p-5 sm:p-8">
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart
            data={spreadData}
            margin={{ top: 8, right: 16, left: 8, bottom: 4 }}
          >
            <defs>
              <linearGradient id="spreadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6b7280" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6b7280" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
            <XAxis
              dataKey="year"
              tick={{ fontSize: 9, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}bp`}
            />
            <Tooltip
              formatter={(v) => [`${v}bp`, ko ? "스프레드" : "Spread"]}
              contentStyle={{
                fontSize: 11,
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                background: "#fff",
              }}
            />
            <ReferenceLine
              x="2001 Dec"
              stroke="#ef4444"
              strokeDasharray="4 3"
              label={{
                value: ko ? "디폴트" : "Default",
                position: "insideTopRight",
                fontSize: 9,
                fill: "#ef4444",
              }}
            />
            <ReferenceLine
              x="2016 Feb"
              stroke="#10b981"
              strokeDasharray="4 3"
              label={{
                value: ko ? "합의" : "Settlement",
                position: "insideTopLeft",
                fontSize: 9,
                fill: "#10b981",
              }}
            />
            <Area
              type="monotone"
              dataKey="spread"
              stroke="#6b7280"
              strokeWidth={2.5}
              fill="url(#spreadGrad)"
              dot={{ fill: "#6b7280", r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "#374151" }}
              isAnimationActive
              animationDuration={1200}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ResponsiveContainer>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-3 text-[12px] text-red-600 dark:text-red-400 text-center font-medium"
        >
          {ko
            ? "2001년 12월 디폴트 직전 스프레드는 5,000bp를 돌파했다 — 사실상 시장이 디폴트를 기정사실로 봤다는 신호."
            : "Spreads breached 5,000bp just before the December 2001 default — the market had already priced in the inevitable."}
        </motion.p>
      </div>
    </motion.div>
  );
}

// ── Exchange Bar Chart ────────────────────────────────────────────────────────
function ExchangeBarChart({ ko }: { ko: boolean }) {
  const data = ko ? exchangeData : exchangeDataEn;
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "채권교환 참여율 구조 — 2005 + 2010" : "Debt Exchange Participation Structure — 2005 + 2010"}
        </p>
      </div>
      <div className="p-5 sm:p-8">
        <ResponsiveContainer width="100%" height={180}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 4, right: 60, left: ko ? 80 : 110, bottom: 4 }}
          >
            <XAxis
              type="number"
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
              tickFormatter={(v) => `${v}%`}
              domain={[0, 100]}
            />
            <YAxis
              type="category"
              dataKey="stage"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              tickLine={false}
              axisLine={false}
              width={ko ? 75 : 105}
            />
            <Tooltip
              formatter={(v, name) => [
                `${v}%`,
                name === "accepted"
                  ? ko ? "교환 동의" : "Accepted"
                  : ko ? "Holdout 거부" : "Holdout",
              ]}
              contentStyle={{
                fontSize: 11,
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                background: "#fff",
              }}
            />
            <Bar dataKey="accepted" stackId="a" fill="#10b981" radius={[0, 0, 0, 0]} name="accepted" />
            <Bar dataKey="holdout" stackId="a" fill="#ef4444" radius={[0, 4, 4, 0]} name="holdout" />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-3 flex flex-wrap gap-4 justify-center">
          {[
            { color: "bg-emerald-500", label: ko ? "교환 동의" : "Accepted" },
            { color: "bg-red-500", label: ko ? "Holdout 거부" : "Holdout (refused)" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-1.5">
              <span className={`w-2.5 h-2.5 rounded-sm flex-shrink-0 ${l.color}`} />
              <span className="text-[10px] text-gray-500 dark:text-gray-400">{l.label}</span>
            </div>
          ))}
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mt-4 grid grid-cols-3 gap-2"
        >
          {[
            { val: "76%", label: ko ? "2005 1차 교환" : "2005 1st Exchange", color: "text-emerald-600 dark:text-emerald-400" },
            { val: "+17%", label: ko ? "2010 추가 교환" : "2010 Add-on", color: "text-emerald-600 dark:text-emerald-400" },
            { val: "7%", label: ko ? "최종 Holdout" : "Final Holdout", color: "text-red-600 dark:text-red-400" },
          ].map((item) => (
            <motion.div
              key={item.val}
              variants={fadeUp()}
              className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 text-center"
            >
              <p className={`text-[18px] font-black ${item.color}`}>{item.val}</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Legal Timeline ────────────────────────────────────────────────────────────
type TimelineColor = "warning" | "danger" | "critical" | "success";

interface TimelineEvent {
  date: string;
  title: string;
  desc: string;
  color: TimelineColor;
}

const COLOR_MAP: Record<TimelineColor, { card: string; text: string; dot: string }> = {
  warning:  { card: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700",  text: "text-amber-700 dark:text-amber-300",  dot: "bg-amber-500"  },
  danger:   { card: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700", text: "text-orange-700 dark:text-orange-300", dot: "bg-orange-500" },
  critical: { card: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700",          text: "text-red-700 dark:text-red-300",        dot: "bg-red-500"    },
  success:  { card: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
};

function LegalTimeline({ ko }: { ko: boolean }) {
  const events: TimelineEvent[] = [
    {
      date: ko ? "2005년" : "2005",
      title: ko ? "1차 채권교환" : "1st Debt Exchange",
      desc: ko
        ? "76%의 채권자가 30~35센트에 합의. NML Capital은 거부하고 미국 법원에 소송 시작."
        : "76% of creditors accept 30–35 cents. NML Capital refuses and begins litigation in U.S. courts.",
      color: "warning",
    },
    {
      date: ko ? "2012년 2월" : "Feb 2012",
      title: ko ? "그리사 판사 Injunction 명령" : "Judge Griesa Issues Injunction",
      desc: ko
        ? "pari passu 위반 판결 — 아르헨티나가 NML에 지급 전 다른 채권자에게도 지급 금지. 미국 결제 시스템 차단 명령."
        : "Pari passu violation ruling — Argentina prohibited from paying other creditors before NML. U.S. clearing systems ordered to block payments.",
      color: "danger",
    },
    {
      date: ko ? "2012년 10월" : "Oct 2012",
      title: ko ? "ARA Libertad 군함 압류 (가나)" : "ARA Libertad Warship Seized (Ghana)",
      desc: ko
        ? "NML Capital이 가나 법원 명령으로 아르헨티나 해군 훈련함 두 달간 억류. ITLOS 석방 명령에도 가나 법원은 유지."
        : "NML Capital detains Argentine navy training vessel for two months via Ghanaian court order. Ghana's courts maintained detention despite ITLOS release order.",
      color: "critical",
    },
    {
      date: ko ? "2014년 7월" : "Jul 2014",
      title: ko ? "기술적 디폴트 (2차)" : "Technical Default (2nd)",
      desc: ko
        ? "미국 결제 시스템 차단으로 교환 채권 이자 지급 불가 — 돈은 있지만 보낼 수 없음."
        : "U.S. clearing systems blocked — exchange bond interest payments impossible despite funds available.",
      color: "critical",
    },
    {
      date: ko ? "2016년 2월" : "Feb 2016",
      title: ko ? "합의: $46억 지급" : "Settlement: $4.6B Paid",
      desc: ko
        ? "마크리 정부가 엘리엇에 $24억, 전체 holdout에 $46억 지급. 15년 분쟁 종결."
        : "Macri government pays Elliott $2.4B, $4.6B total to holdout creditors. 15-year dispute ends.",
      color: "success",
    },
  ];

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="mt-8 relative"
    >
      {/* Vertical line */}
      <div className="absolute left-[18px] sm:left-[22px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-300 via-red-400 to-emerald-400 dark:from-amber-700 dark:via-red-700 dark:to-emerald-700" />

      <div className="space-y-3">
        {events.map((ev, i) => {
          const c = COLOR_MAP[ev.color];
          return (
            <motion.div key={i} variants={fadeUp(i * 0.05)} className="flex gap-4 sm:gap-5 pl-1">
              {/* Dot */}
              <div className="relative z-10 flex-shrink-0 mt-3.5">
                <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${c.dot}`}>
                  <span className="w-2 h-2 rounded-full bg-white" />
                </span>
              </div>
              {/* Card */}
              <div className={`flex-1 rounded-xl border p-3 sm:p-4 ${c.card}`}>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${c.text}`}>
                    {ev.date}
                  </span>
                  <span className={`text-[12px] font-bold ${c.text}`}>{ev.title}</span>
                </div>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug">{ev.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ── CAC Comparison Table ──────────────────────────────────────────────────────
function CacComparisonTable({ ko }: { ko: boolean }) {
  const rows = [
    {
      feature: ko ? "집합행동조항" : "Collective Action Clause",
      pre: ko ? "없음 (holdout 가능)" : "None (holdout possible)",
      post: ko ? "ICMA CAC 표준" : "ICMA CAC Standard",
    },
    {
      feature: ko ? "표결 구조" : "Voting Structure",
      pre: ko ? "채권 시리즈별 개별 표결" : "Series-by-series voting",
      post: ko ? "단일 집합표결 (single-limb)" : "Single-limb aggregation",
    },
    {
      feature: ko ? "pari passu 조항" : "Pari Passu Clause",
      pre: ko ? "결제 동순위 해석 가능" : "Payment parity interpretation",
      post: ko ? "단순 채무 서열 조항으로 한정" : "Limited to ranking clause only",
    },
    {
      feature: ko ? "Holdout 리스크" : "Holdout Risk",
      pre: ko ? "높음 — 소수가 전체 재조정 저지" : "High — minority can block restructuring",
      post: ko ? "대폭 완화 — 다수결로 구속" : "Substantially reduced — majority binds all",
    },
    {
      feature: ko ? "대표 사례" : "Example",
      pre: ko ? "아르헨티나 (2001~2016)" : "Argentina (2001–2016)",
      post: ko ? "2014년 이후 신규 Sovereign 유로채" : "Post-2014 sovereign eurobonds",
    },
  ];

  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "CAC 개혁 전후 비교 — Pre-2014 vs Post-2014" : "CAC Reform: Pre-2014 vs Post-2014"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-200/60 dark:border-gray-700/60">
              <th className="text-left px-4 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest w-[30%]">
                {ko ? "항목" : "Feature"}
              </th>
              <th className="text-left px-4 py-3 text-[10px] font-bold text-red-400 uppercase tracking-widest w-[35%]">
                {ko ? "2014년 이전 채권" : "Pre-2014 Bonds"}
              </th>
              <th className="text-left px-4 py-3 text-[10px] font-bold text-emerald-500 uppercase tracking-widest w-[35%]">
                {ko ? "2014년 이후 채권" : "Post-2014 Bonds"}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VP}
                transition={{ duration: 0.38, delay: i * 0.06, ease: EASE }}
                className="border-b border-gray-100 dark:border-gray-800 last:border-b-0"
              >
                <td className="px-4 py-3 font-medium text-gray-700 dark:text-gray-300">
                  {row.feature}
                </td>
                <td className="px-4 py-3 text-red-600 dark:text-red-400">
                  {row.pre}
                </td>
                <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400">
                  {row.post}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ── Warship Callout Card ──────────────────────────────────────────────────────
function WarshipCallout({ ko }: { ko: boolean }) {
  return (
    <motion.div
      variants={fadeUp(0.15)}
      className="mt-8 rounded-2xl overflow-hidden border-2 border-red-300 dark:border-red-700"
    >
      <div className="bg-red-50 dark:bg-red-900/20 px-5 py-3 border-b border-red-200 dark:border-red-700">
        <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest">
          {ko ? "2012년 10월 — 역사상 유례없는 사건" : "October 2012 — Unprecedented in Modern History"}
        </p>
      </div>
      <div className="p-5 sm:p-8 bg-white dark:bg-gray-900">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {[
            {
              icon: "⚓",
              label: ko ? "압류 장소" : "Seizure Location",
              value: ko ? "가나 테마 항구" : "Tema Port, Ghana",
              sub: ko ? "연료 보급 기항" : "Docked for refueling",
              bg: "bg-red-50 dark:bg-red-900/20",
              border: "border-red-200 dark:border-red-700",
              text: "text-red-700 dark:text-red-300",
            },
            {
              icon: "⛵",
              label: ko ? "압류 선박" : "Vessel Seized",
              value: "ARA Libertad",
              sub: ko ? "104m 훈련 범선, 승무원 300명" : "104m training vessel, 300 crew",
              bg: "bg-orange-50 dark:bg-orange-900/20",
              border: "border-orange-200 dark:border-orange-700",
              text: "text-orange-700 dark:text-orange-300",
            },
            {
              icon: "⚖️",
              label: ko ? "억류 기간" : "Detention Period",
              value: ko ? "2개월" : "2 months",
              sub: ko ? "ITLOS 명령 무시" : "Despite ITLOS release order",
              bg: "bg-amber-50 dark:bg-amber-900/20",
              border: "border-amber-200 dark:border-amber-700",
              text: "text-amber-700 dark:text-amber-300",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.07)}
              className={`rounded-xl border p-4 text-center ${item.bg} ${item.border}`}
            >
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
              <p className={`text-[13px] font-black ${item.text}`}>{item.value}</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 leading-snug">{item.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={VP}
          className="mt-5 text-[13px] text-red-700 dark:text-red-300 leading-relaxed text-center font-medium"
        >
          {ko
            ? "주권 국가의 군함이 민간 헤지펀드의 요청으로 외국 항구에 억류됐다 — 국제법 역사상 전례없는 장면이었다."
            : "A sovereign nation's warship was impounded in a foreign port at the request of a private hedge fund — unprecedented in the history of international law."}
        </motion.p>
      </div>
    </motion.div>
  );
}

// ── 3-stat Callout ────────────────────────────────────────────────────────────
function StatsCallout({ ko }: { ko: boolean }) {
  const stats = [
    {
      val: ko ? "$1,000억+" : "$100B+",
      label: ko ? "역사상 최대 sovereign 디폴트" : "Largest sovereign default in history",
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-50 dark:bg-red-900/20",
      border: "border-red-200 dark:border-red-700",
    },
    {
      val: "93%",
      label: ko ? "채권교환 참여율 (2005+2010)" : "Debt exchange participation (2005+2010)",
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-700",
    },
    {
      val: "~1,500%",
      label: ko ? "엘리엇 NML Capital 수익률" : "Elliott NML Capital return on investment",
      color: "text-gray-700 dark:text-gray-300",
      bg: "bg-gray-50 dark:bg-gray-800/60",
      border: "border-gray-200 dark:border-gray-700",
    },
  ];

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10"
    >
      {stats.map((s, i) => (
        <motion.div
          key={i}
          variants={fadeUp(i * 0.07)}
          className={`rounded-2xl border p-5 text-center ${s.bg} ${s.border}`}
        >
          <p className={`text-2xl sm:text-3xl font-black tracking-tight ${s.color}`}>{s.val}</p>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-2 leading-snug">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function ArgentinaElliottClient({
  deal,
  lang,
}: {
  deal: MarketDeal;
  lang: "ko" | "en";
}) {
  const ko = lang === "ko";

  // Visuals per section index
  function getVisual(i: number) {
    const visuals = [
      <SpreadAreaChart key="0" ko={ko} />,
      <ExchangeBarChart key="1" ko={ko} />,
      <LegalTimeline key="2" ko={ko} />,
      <WarshipCallout key="3" ko={ko} />,
      <CacComparisonTable key="4" ko={ko} />,
    ];
    return visuals[i] ?? null;
  }

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── Header section ── */}
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
                {ko ? "위기·디폴트" : "Crisis & Default"}
              </span>
            </div>

            {/* Category badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-gray-100 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400">
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
            {/* Accent bar */}
            <div className="h-1" style={{ background: accentDark }} />
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

        {/* ── Share — top ── */}
        <div className="max-w-3xl mx-auto px-5">
          <div className="flex justify-end mb-6 mt-4">
            <ShareButtons title={ko ? deal.title : deal.titleEn} variant="top" lang={lang} />
          </div>
        </div>

        {/* ── Executive Summary ── */}
        {deal.executiveSummary && (
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="max-w-3xl mx-auto px-5 pt-2"
          >
            <div
              className="rounded-xl border-l-4 px-5 py-4 bg-gray-50 dark:bg-gray-800/40"
              style={{ borderColor: accentDark }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-widest mb-3"
                style={{ color: accentDark }}
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
                      style={{ background: accentDark }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* ── 3-stat callout ── */}
        <div className="max-w-3xl mx-auto px-5 pt-10">
          <StatsCallout ko={ko} />
        </div>

        {/* ── Body sections ── */}
        <div className="max-w-3xl mx-auto px-5 pb-10 space-y-16">
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
              {getVisual(i)}
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
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp()}
                    className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800"
                  >
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                        style={{ background: accentDark }}
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

          {/* ── Assessment ── */}
          {deal.assessment && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2
                variants={fadeUp()}
                className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1"
              >
                {ko ? "딜 평가" : "Deal Assessment"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Positives */}
                <motion.div
                  variants={fadeUp()}
                  className="rounded-xl border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-900/15 p-5"
                >
                  <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">
                    {ko ? "긍정적 결과" : "Positives"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.positives : deal.assessment.positivesEn).map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[13px] text-emerald-800 dark:text-emerald-200 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                {/* Risks */}
                <motion.div
                  variants={fadeUp()}
                  className="rounded-xl border border-red-200 dark:border-red-700/50 bg-red-50 dark:bg-red-900/15 p-5"
                >
                  <p className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3">
                    {ko ? "리스크 및 교훈" : "Risks & Lessons"}
                  </p>
                  <ul className="space-y-2">
                    {(ko ? deal.assessment.risks : deal.assessment.risksEn).map((r, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[13px] text-red-800 dark:text-red-200 leading-relaxed"
                      >
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
              <motion.h2
                variants={fadeUp()}
                className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1"
              >
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <FaqAccordion
                items={deal.faq.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))}
                accent={accentDark}
              />
            </motion.section>
          )}

          {/* ── Related Content ── */}
          {(deal.relatedDealSlugs?.length || deal.relatedMarket101Slugs?.length) ? (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2
                variants={fadeUp()}
                className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1"
              >
                {ko ? "함께 읽으면 좋은 콘텐츠" : "Related Content"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <div className="grid sm:grid-cols-2 gap-3">
                {deal.relatedDealSlugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market/${slug}` : `/en/market/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50/40 dark:hover:bg-gray-800/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[11px] font-bold text-gray-600 dark:text-gray-400 flex-shrink-0">
                          M
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                            Market Story
                          </p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors truncate">
                            {slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-gray-500 transition-colors text-sm flex-shrink-0">
                          →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                {deal.relatedMarket101Slugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market-101/${slug}` : `/en/market-101/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50/40 dark:hover:bg-gray-800/20 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[11px] font-bold text-gray-600 dark:text-gray-400 flex-shrink-0">
                          101
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                            Market 101
                          </p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors truncate">
                            {slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-gray-500 transition-colors text-sm flex-shrink-0">
                          →
                        </span>
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
                {deal.references.map((ref, idx) => (
                  <motion.li
                    key={ref.id ?? idx}
                    variants={fadeUp()}
                    className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-0.5">
                      {ref.id ?? idx + 1}
                    </span>
                    <span>
                      {ref.author && (
                        <>
                          <span className="font-medium text-gray-600 dark:text-gray-300">
                            {ref.author}.
                          </span>{" "}
                        </>
                      )}
                      {ref.url ? (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic hover:text-gray-700 dark:hover:text-gray-300 hover:underline transition-colors"
                        >
                          {ref.title}
                        </a>
                      ) : (
                        <span className="italic">{ref.title}</span>
                      )}
                      {ref.source && (
                        <>
                          {". "}
                          <span className="text-gray-400 dark:text-gray-500">{ref.source}.</span>
                        </>
                      )}
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
      </main>
      <Footer />
    </>
  );
}

