"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
import LikeButton from "@/components/LikeButton";

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

// ── Colors (sovereign = blue) ─────────────────────────────────────────────────
const accent = "#3b82f6";
const accentLight = "rgb(239 246 255)";
const accentDark = "#1d4ed8";

// ── Chart Data ────────────────────────────────────────────────────────────────
const spreadData = [
  { year: "2010", spread: 175 },
  { year: "2012", spread: 195 },
  { year: "2014", spread: 185 },
  { year: "2016", spread: 220 },
  { year: "2018", spread: 230 },
  { year: "2020 Q1", spread: 180 },
  { year: "2020 Q2", spread: 370 },
  { year: "2021", spread: 210 },
  { year: "2022", spread: 250 },
  { year: "2023", spread: 215 },
  { year: "2024", spread: 200 },
];

const comparisonData = [
  { issuer: "Mexico\n(2010)", coupon: 5.75, fill: "#10b981" },
  { issuer: "Argentina\n(2017)", coupon: 7.125, fill: "#ef4444" },
  { issuer: "Austria\n(2017)", coupon: 2.1, fill: "#6366f1" },
  { issuer: "Chile\n(2022)", coupon: 3.5, fill: accent },
];

// ── Spread Area Chart ─────────────────────────────────────────────────────────
function SpreadChart({ ko }: { ko: boolean }) {
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko
            ? "멕시코 100년물 스프레드 추이 (vs US Treasury, bp) — 2010~2024"
            : "Mexico Century Bond Spread (vs US Treasury, bps) — 2010–2024"}
        </p>
      </div>
      <div className="p-5 sm:p-8">
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={spreadData} margin={{ top: 8, right: 16, left: 8, bottom: 4 }}>
            <defs>
              <linearGradient id="spreadGradMex" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={accent} stopOpacity={0.3} />
                <stop offset="95%" stopColor={accent} stopOpacity={0.02} />
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
              domain={[100, 420]}
            />
            <Tooltip
              formatter={(v) => [`${v}bp`, ko ? "스프레드" : "Spread"]}
              contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff" }}
            />
            <ReferenceLine
              x="2020 Q2"
              stroke="#ef4444"
              strokeDasharray="4 3"
              label={{ value: ko ? "COVID 패닉" : "COVID Panic", position: "insideTopRight", fontSize: 9, fill: "#ef4444" }}
            />
            <Area
              type="monotone"
              dataKey="spread"
              stroke={accent}
              strokeWidth={2.5}
              fill="url(#spreadGradMex)"
              dot={{ fill: accent, r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: accentDark }}
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
          className="mt-3 text-[12px] text-blue-600 dark:text-blue-400 text-center font-medium"
        >
          {ko
            ? "14년간 스프레드가 T+300bp를 넘지 않았다 — 멕시코의 신용 기반이 아르헨티나와 근본적으로 다른 이유."
            : "Spreads stayed within T+300bp over 14 years — the fundamental credit difference from Argentina."}
        </motion.p>
      </div>
    </motion.div>
  );
}

// ── EM Century Bond Comparison ────────────────────────────────────────────────
function ComparisonChart({ ko }: { ko: boolean }) {
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko
            ? "글로벌 100년물 쿠폰 비교 (%, 발행 시)"
            : "Global Century Bond Coupon Comparison (%, at issuance)"}
        </p>
      </div>
      <div className="p-5 sm:p-8">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={comparisonData} margin={{ top: 8, right: 16, left: 8, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
            <XAxis
              dataKey="issuer"
              tick={{ fontSize: 10, fill: "#6b7280" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${v}%`}
              domain={[0, 8]}
            />
            <Tooltip
              formatter={(v) => [`${v}%`, ko ? "쿠폰" : "Coupon"]}
              contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff" }}
            />
            <Bar dataKey="coupon" radius={[4, 4, 0, 0]}>
              {comparisonData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-3 flex flex-wrap gap-3 justify-center">
          {[
            { color: "bg-emerald-500", label: ko ? "디폴트 없음" : "No Default" },
            { color: "bg-red-500", label: ko ? "2020년 디폴트 (아르헨티나)" : "2020 Default (Argentina)" },
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
          className="mt-3 text-[12px] text-gray-500 dark:text-gray-400 text-center"
        >
          {ko
            ? "쿠폰이 높을수록 시장이 판단한 신용 리스크가 크다 — 아르헨티나 7.125%는 그 가격이 맞았다."
            : "Higher coupons reflect higher credit risk priced by the market — Argentina's 7.125% proved the market correct."}
        </motion.p>
      </div>
    </motion.div>
  );
}

// ── Orderbook Chart ───────────────────────────────────────────────────────────
function OrderbookChart({ ko }: { ko: boolean }) {
  const data = [
    { label: ko ? "발행 규모" : "Issue Size", value: 1.0, fill: accentDark },
    { label: ko ? "오더북" : "Orderbook", value: 4.0, fill: "#93c5fd" },
  ];
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
    >
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          {ko ? "발행 규모 vs 오더북 ($B)" : "Issue Size vs Orderbook ($B)"}
        </p>
      </div>
      <div className="p-5 sm:p-8">
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={data} layout="vertical" margin={{ top: 4, right: 40, left: ko ? 70 : 80, bottom: 4 }}>
            <XAxis
              type="number"
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              tickLine={false}
              axisLine={{ stroke: "#e5e7eb" }}
              tickFormatter={(v) => `$${v}B`}
            />
            <YAxis
              type="category"
              dataKey="label"
              tick={{ fontSize: 11, fill: "#6b7280" }}
              tickLine={false}
              axisLine={false}
              width={ko ? 65 : 75}
            />
            <Tooltip
              formatter={(v) => [`$${v}B`, ""]}
              contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff" }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-center">
          <div className="rounded-xl px-6 py-3 text-center" style={{ background: accentLight }}>
            <p className="text-3xl font-black" style={{ color: accentDark }}>4x</p>
            <p className="text-[11px] text-gray-500 mt-1">
              {ko ? "초과청약 — $40억 수요, $10억 발행" : "Oversubscribed — $4B demand for $1B issue"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── EM Century Bond Timeline ──────────────────────────────────────────────────
type TColor = "warning" | "danger" | "critical" | "success";
const TMAP: Record<TColor, { card: string; text: string; dot: string }> = {
  warning:  { card: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700",    text: "text-amber-700 dark:text-amber-300",    dot: "bg-amber-500"  },
  danger:   { card: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700", text: "text-orange-700 dark:text-orange-300",  dot: "bg-orange-500" },
  critical: { card: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700",             text: "text-red-700 dark:text-red-300",        dot: "bg-red-500"    },
  success:  { card: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-700", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
};

function CenturyBondLineage({ ko }: { ko: boolean }) {
  const events: { date: string; title: string; desc: string; color: TColor }[] = [
    {
      date: "Oct 2010",
      title: ko ? "멕시코 EM 최초 100년물" : "Mexico: First EM Century Bond",
      desc: ko
        ? "BBB/Baa1 등급, $10억, T+175bp, 4배 초과청약. EM 초장기물 시장의 탄생."
        : "BBB/Baa1 rated, $1B, T+175bp, 4x oversubscribed. Birth of the EM ultra-long bond market.",
      color: "success",
    },
    {
      date: "2014",
      title: ko ? "멕시코 유로화 100년물" : "Mexico Euro Century Bond",
      desc: ko
        ? "€15억 유로화 100년물(쿠폰 4%) 추가. 달러+유로 100년물 보유 유일한 EM 발행사."
        : "€1.5B euro-denominated century bond (4% coupon). Mexico became the only EM with both dollar and euro century bonds.",
      color: "success",
    },
    {
      date: "Jun 2017",
      title: ko ? "아르헨티나 100년물" : "Argentina Century Bond",
      desc: ko
        ? "멕시코 선례를 참조해 $27.5억, 7.125% 발행. B등급. 3.5배 초과청약이었지만..."
        : "Referenced Mexico's precedent: $2.75B at 7.125%. B-rated. 3.5x oversubscribed, but...",
      color: "warning",
    },
    {
      date: "May 2020",
      title: ko ? "아르헨티나 9번째 디폴트" : "Argentina's Ninth Default",
      desc: ko
        ? "발행 3년 만에 디폴트. EM 100년물의 양극단이 확인됐다 — 신용이 전부다."
        : "Default three years after issuance. The two extremes of EM century bonds confirmed: credit quality is everything.",
      color: "critical",
    },
    {
      date: "2022",
      title: ko ? "칠레 100년물" : "Chile Century Bond",
      desc: ko
        ? "$15억, 3.5%. 라틴아메리카 BBB 등급 칠레가 멕시코 모델을 따랐다."
        : "$1.5B at 3.5%. BBB-rated Chile followed the Mexico model.",
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
      <div className="absolute left-[18px] sm:left-[22px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-300 via-amber-400 to-emerald-400 dark:from-emerald-700 dark:via-amber-700 dark:to-emerald-700" />
      <div className="space-y-3">
        {events.map((ev, i) => {
          const c = TMAP[ev.color];
          return (
            <motion.div key={i} variants={fadeUp(i * 0.05)} className="flex gap-4 sm:gap-5 pl-1">
              <div className="relative z-10 flex-shrink-0 mt-3.5">
                <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${c.dot}`}>
                  <span className="w-2 h-2 rounded-full bg-white" />
                </span>
              </div>
              <div className={`flex-1 rounded-xl border p-3 sm:p-4 ${c.card}`}>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${c.text}`}>{ev.date}</span>
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

// ── Stats Callout ─────────────────────────────────────────────────────────────
function StatsCallout({ ko }: { ko: boolean }) {
  const stats = [
    {
      val: "1st",
      label: ko ? "EM 달러 100년물 최초 발행국" : "First EM dollar century bond issuer",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-700",
    },
    {
      val: "4x",
      label: ko ? "초과청약 ($40억 수요)" : "Oversubscribed ($4B demand)",
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-900/20",
      border: "border-emerald-200 dark:border-emerald-700",
    },
    {
      val: ko ? "14년+" : "14+ years",
      label: ko ? "디폴트 없이 유지 중 (2024 기준)" : "Without default (as of 2024)",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-50 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-700",
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
        <motion.div key={i} variants={fadeUp(i * 0.07)} className={`rounded-2xl border p-5 text-center ${s.bg} ${s.border}`}>
          <p className={`text-2xl sm:text-3xl font-black tracking-tight ${s.color}`}>{s.val}</p>
          <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-2 leading-snug">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────
export default function MexicoCenturyClient({
  deal,
  lang,
}: {
  deal: MarketDeal;
  lang: "ko" | "en";
}) {
  const ko = lang === "ko";

  function getVisual(i: number) {
    const visuals = [
      <SpreadChart key="0" ko={ko} />,
      <ComparisonChart key="1" ko={ko} />,
      <OrderbookChart key="2" ko={ko} />,
      <CenturyBondLineage key="3" ko={ko} />,
      null,
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
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market" : "/en/market"} className="hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                {ko ? "마켓" : "Market"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">Sovereign</span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">
              {ko ? deal.categoryLabel : deal.categoryLabelEn}
            </div>

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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? deal.excerpt : deal.excerptEn}
            </motion.p>

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
                  <span key={tag} className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Snapshot ── */}
        <div className="max-w-3xl mx-auto px-5 pt-10">
          <motion.div
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60"
          >
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

        {/* ── Share top ── */}
        <div className="max-w-3xl mx-auto px-5">
          <div className="flex justify-end mb-6 mt-4">
            <ShareButtons title={ko ? deal.title : deal.titleEn} variant="top" lang={lang} />
          
            <LikeButton slug={deal.slug} lang={lang} /></div>
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
            <div className="rounded-xl border-l-4 px-5 py-4 bg-blue-50/50 dark:bg-blue-900/10" style={{ borderColor: accentDark }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: accentDark }}>
                {ko ? "핵심 요약" : "Key Takeaways"}
              </p>
              <ul className="space-y-2">
                {(ko ? deal.executiveSummary.ko : deal.executiveSummary.en).map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] leading-relaxed text-gray-700 dark:text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentDark }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* ── Stats callout ── */}
        <div className="max-w-3xl mx-auto px-5 pt-10">
          <StatsCallout ko={ko} />
        </div>

        {/* ── Body sections ── */}
        <div className="max-w-3xl mx-auto px-5 pb-10 space-y-16">
          {deal.sections.map((section, i) => (
            <motion.section key={i} variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.div variants={fadeUp()} className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                  {ko ? section.heading : section.headingEn}
                </h2>
                <div className="w-8 h-0.5 mt-3" style={{ background: accent }} />
              </motion.div>
              <div className="pl-4 border-l-2 mb-2" style={{ borderColor: accent + "4d" }}>
                <div className="space-y-3">
                  {(ko ? section.body : section.bodyEn).split("\n\n").map((para, j) => (
                    <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                      {para}
                    </motion.p>
                  ))}
                </div>
              </div>
              {getVisual(i)}
            </motion.section>
          ))}

          {/* ── Key Terms ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {ko ? "핵심 용어" : "Key Terms"}
            </motion.h2>
            <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
            <div className="space-y-3">
              {deal.keyTerms.map((term, i) => (
                <motion.div key={i} variants={fadeUp()} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background: accentDark }}>
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
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div variants={fadeUp()} className="rounded-xl border border-emerald-200 dark:border-emerald-700/50 bg-emerald-50 dark:bg-emerald-900/15 p-5">
                  <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-3">{ko ? "긍정적 결과" : "Positives"}</p>
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
                  <p className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-widest mb-3">{ko ? "리스크 및 교훈" : "Risks & Lessons"}</p>
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

          {/* ── Share mid ── */}
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="mid" lang={lang} />

          {/* ── FAQ ── */}
          {deal.faq && deal.faq.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
              <motion.h2 variants={fadeUp()} className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </motion.h2>
              <div className="w-8 h-0.5 mt-3 mb-6" style={{ background: accent }} />
              <FaqAccordion
                items={deal.faq.map((f) => ({ q: ko ? f.q : f.qEn, a: ko ? f.a : f.aEn }))}
                accent={accentDark}
              />
            </motion.section>
          )}

          {/* ── Related ── */}
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
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[11px] font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">M</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market Story</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors truncate">
                            {slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-blue-400 transition-colors text-sm flex-shrink-0">→</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
                {deal.relatedMarket101Slugs?.map((slug) => (
                  <motion.div key={slug} variants={fadeUp()}>
                    <Link href={ko ? `/market-101/${slug}` : `/en/market-101/${slug}`}>
                      <div className="group flex items-center gap-3 px-4 py-3.5 rounded-xl border border-gray-200/60 dark:border-gray-700/60 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-all">
                        <span className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[11px] font-bold text-gray-600 dark:text-gray-400 flex-shrink-0">101</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Market 101</p>
                          <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors truncate">
                            {slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                          </p>
                        </div>
                        <span className="text-gray-300 dark:text-gray-600 group-hover:text-blue-400 transition-colors text-sm flex-shrink-0">→</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ) : null}

          {/* ── Share bottom ── */}
          <ShareButtons title={ko ? deal.title : deal.titleEn} variant="bottom" lang={lang} />

          
          <LikeButton slug={deal.slug} lang={lang} />{/* ── References ── */}
          {deal.references && deal.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <ol className="space-y-2.5">
                {deal.references.map((ref, idx) => (
                  <motion.li key={ref.id ?? idx} variants={fadeUp()} className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-0.5">
                      {ref.id ?? idx + 1}
                    </span>
                    <span>
                      {ref.author && <><span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}</>}
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="italic hover:text-gray-700 dark:hover:text-gray-300 hover:underline transition-colors">{ref.title}</a>
                      ) : (
                        <span className="italic">{ref.title}</span>
                      )}
                      {ref.source && <>{". "}<span className="text-gray-400 dark:text-gray-500">{ref.source}.</span></>}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* ── Back links ── */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link href={ko ? "/market" : "/en/market"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-600 dark:text-gray-400 hover:underline">
              ← {ko ? "마켓 전체 보기" : "All Market"}
            </Link>
            <Link href={ko ? "/" : "/en"} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline">
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
