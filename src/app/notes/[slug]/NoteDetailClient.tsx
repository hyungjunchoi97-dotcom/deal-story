"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import {
  LineChart, Line,
  BarChart, Bar, Cell,
  ComposedChart,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, ReferenceLine, Legend,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type {
  NoteData,
  NoteBlock,
  NoteSection,
  NoteChartDef,
  NoteCalloutDef,
  NoteTableDef,
  NoteMetric,
  NoteReference,
  PBRPoint,
  TaxRateBar,
  IndexPoint,
  ReserveSharePoint,
  PrivilegeGapPoint,
  FedBalanceSheetPoint,
  RepoCrisisPoint,
  CurrencyMixPoint,
  StablecoinPoint,
  CapexFcfPoint,
  LucentFinancingPoint,
  CiscoLostDecadePoint,
  HbmSharePoint,
  NvdaDcRevenuePoint,
  OpticalMixPoint,
  CxlAdoptionPoint,
  DcPowerDemandPoint,
  InterconnectionQueuePoint,
  AiPenetrationPoint,
  PeSpreadPoint,
  NoteImageDef,
  QubitRacePoint,
  QuantumStockPoint,
  QuantumFundingBar,
  // Private Credit note (11 charts)
  PcAumPoint,
  BankPcSharePoint,
  PcAssetClassPoint,
  AbfGrowthPoint,
  InsurerPcBalancePoint,
  KoreaAcqFinancePoint,
  KoreaPcMarketPoint,
  PcDefaultRatePoint,
  ApolloAtheneStage,
  ContagionNode,
  ContagionChannel,
  WatchIndicatorPoint,
} from "@/data/notes";
import { NOTE_CATEGORY_META, getSeriesNav } from "@/data/notes";
import SeriesNav from "@/components/SeriesNav";
import ShareButtons from "@/components/deal/ShareButtons";
import LikeButton from "@/components/LikeButton";
import CommentSection from "@/components/CommentSection";
import NewsletterCTA from "@/components/NewsletterCTA";

// Dynamically load Mapbox component (no SSR — mapbox-gl touches window)
const QuantumMap = dynamic(() => import("@/components/QuantumMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[480px] rounded-2xl bg-gray-100 dark:bg-gray-800 animate-pulse" />
  ),
});

type Lang = "ko" | "en";

// ── Animation ──────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

// ── InView wrapper ─────────────────────────────────────────────────────────────
function InView({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp(delay)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

// ── Chart tooltip (dark-mode safe) ────────────────────────────────────────────
function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs min-w-[120px]">
      <p className="font-semibold text-gray-600 dark:text-gray-300 mb-2">{label}</p>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
          </span>
          <span className="font-mono font-bold text-gray-800 dark:text-gray-100">
            {typeof p.value === "number" ? p.value.toFixed(2) : p.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Chart card wrapper ─────────────────────────────────────────────────────────
function ChartCard({
  title,
  caption,
  children,
}: {
  title: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200/70 dark:border-gray-700/60 my-2">
      <div className="bg-gray-50/80 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{title}</p>
      </div>
      <div className="p-5 bg-white dark:bg-gray-900/40">{children}</div>
      {caption && (
        <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center pb-4 px-5 leading-relaxed">
          {caption}
        </p>
      )}
    </div>
  );
}

// ── PBR Comparison Chart ───────────────────────────────────────────────────────
function PBRChart({ chart, lang }: { chart: NoteChartDef & { id: "pbr-comparison" }; lang: Lang }) {
  const data = chart.data as PBRPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 30, right: 10, bottom: 0, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis yAxisId="left" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} domain={[0.6, 1.4]} tickFormatter={(v) => `${v}x`} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} domain={[2, 6]} tickFormatter={(v) => `${v}x`} />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Line yAxisId="left" type="monotone" dataKey="KOSPI" stroke="#ef4444" strokeWidth={2.5} dot={false} name="KOSPI" />
          <Line yAxisId="left" type="monotone" dataKey="TOPIX" stroke="#3b82f6" strokeWidth={2} dot={false} name="TOPIX" strokeDasharray="5 3" />
          <Line yAxisId="right" type="monotone" dataKey="SP500" stroke="#8b5cf6" strokeWidth={2} dot={false} name={lang === "en" ? "S&P 500 (R-axis)" : "S&P 500 (우축)"} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Tax Rates Chart ────────────────────────────────────────────────────────────
function TaxRatesChart({ chart, lang }: { chart: NoteChartDef & { id: "tax-rates" }; lang: Lang }) {
  const data = (chart.data as TaxRateBar[]).map((d) => ({
    ...d,
    displayName: lang === "en" ? d.countryEn : d.country,
  }));
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} horizontal={false} />
          <XAxis type="number" domain={[0, 70]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="displayName" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} width={40} />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} content={({ active, payload }) => {
            if (!active || !payload?.length) return null;
            const d = payload[0].payload as TaxRateBar & { displayName: string };
            return (
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                <p className="font-bold text-gray-800 dark:text-gray-100">{d.displayName}</p>
                <p style={{ color: d.color }} className="font-mono text-sm mt-1">{d.rate}%</p>
              </div>
            );
          }} />
          <Bar dataKey="rate" radius={[0, 4, 4, 0]}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Bar>
          <ReferenceLine x={40} stroke="#94a3b8" strokeDasharray="4 3" strokeWidth={1.5} label={{ value: "US 40%", position: "top", fontSize: 9, fill: "#94a3b8" }} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Index Comparison Chart ─────────────────────────────────────────────────────
function IndexComparisonChart({ chart, lang }: { chart: NoteChartDef & { id: "index-comparison" }; lang: Lang }) {
  const data = chart.data as IndexPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const annotationLabel = chart.annotations?.[0]
    ? (lang === "en" ? (chart.annotations[0].labelEn ?? chart.annotations[0].label) : chart.annotations[0].label)
    : undefined;
  const annotationYear = chart.annotations?.[0]?.year;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 30, right: 10, bottom: 0, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} domain={[60, 220]} tickFormatter={(v) => `${v}`} />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          {annotationYear && (
            <ReferenceLine
              x={annotationYear}
              stroke="#f59e0b"
              strokeDasharray="5 3"
              strokeWidth={1.5}
              label={{ value: annotationLabel, position: "top", fontSize: 9, fill: "#f59e0b" }}
            />
          )}
          <Line type="monotone" dataKey="KOSPI" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 3 }} name="KOSPI" />
          <Line type="monotone" dataKey="Nikkei" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 3 }} name="Nikkei 225" strokeDasharray="5 3" />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Reserve Share Chart ────────────────────────────────────────────────────────
function ReserveShareChart({ chart, lang }: { chart: NoteChartDef & { id: "reserve-share" }; lang: Lang }) {
  const data = chart.data as ReserveSharePoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -16 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} interval={2} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} domain={[54, 74]} tickFormatter={(v) => `${v}%`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  <p className="font-mono font-bold text-sky-600 dark:text-sky-400">
                    {payload[0].value}%
                  </p>
                </div>
              );
            }}
          />
          <ReferenceLine y={57.8} stroke="#94a3b8" strokeDasharray="4 3" strokeWidth={1}
            label={{ value: lang === "en" ? "2024: 57.8%" : "2024: 57.8%", position: "right", fontSize: 9, fill: "#94a3b8" }} />
          <Line type="monotone" dataKey="share" stroke="#0ea5e9" strokeWidth={2.5} dot={{ r: 2.5, fill: "#0ea5e9" }}
            name={lang === "en" ? "USD Share" : "달러 비중"} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Privilege Gap Chart ────────────────────────────────────────────────────────
function PrivilegeGapChart({ chart, lang }: { chart: NoteChartDef & { id: "privilege-gap" }; lang: Lang }) {
  const raw = chart.data as PrivilegeGapPoint[];
  const data = raw.map((d) => ({ ...d, displayName: lang === "en" ? d.categoryEn : d.category }));
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const dollarLabel = lang === "en" ? "Dollar's Role" : "달러 역할";
  const usLabel = lang === "en" ? "US Economic Share" : "미국 경제 비중";
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 56 }} barCategoryGap="28%">
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="displayName" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} width={56} />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1.5">
                  {payload.map((p) => (
                    <div key={String(p.dataKey)} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">{p.value}%</span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 10 }} />
          <Bar dataKey="dollarRole" name={dollarLabel} fill="#0ea5e9" radius={[0, 3, 3, 0]} />
          <Bar dataKey="usShare" name={usLabel} fill="#e2e8f0" radius={[0, 3, 3, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Fed Balance Sheet Chart ────────────────────────────────────────────────────
function FedBalanceSheetChart({ chart, lang }: { chart: NoteChartDef & { id: "fed-balance-sheet" }; lang: Lang }) {
  const data = chart.data as FedBalanceSheetPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const annotations = chart.annotations ?? [];
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }} barSize={16}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 9 }} tickLine={false} axisLine={false} interval={1} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}T`} domain={[0, 10]} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              const ann = annotations.find((a) => a.year === label);
              const annLabel = ann ? (lang === "en" ? (ann.labelEn ?? ann.label) : ann.label) : null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  <p className="font-mono font-bold text-sky-600 dark:text-sky-400">${payload[0].value as number}T</p>
                  {annLabel && <p className="text-amber-500 font-semibold mt-1">{annLabel}</p>}
                </div>
              );
            }}
          />
          {annotations.map((ann) => (
            <ReferenceLine key={ann.year} x={ann.year} stroke="#f59e0b" strokeDasharray="4 3" strokeWidth={1.5}
              label={{ value: lang === "en" ? (ann.labelEn ?? ann.label) : ann.label, position: "top", fontSize: 8, fill: "#f59e0b" }} />
          ))}
          <Bar dataKey="assets" name={lang === "en" ? "Total Assets" : "총자산"} fill="#0ea5e9" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Repo Crisis Chart ──────────────────────────────────────────────────────────
const KO_TO_EN_MONTH: Record<string, string> = {
  "1월": "Jan", "2월": "Feb", "3월": "Mar", "4월": "Apr",
  "5월": "May", "6월": "Jun", "7월": "Jul", "8월": "Aug",
  "9월": "Sep", "10월": "Oct", "11월": "Nov", "12월": "Dec",
};
function localizeDate(date: string, lang: Lang): string {
  if (lang !== "en") return date;
  return KO_TO_EN_MONTH[date] ?? date;
}

function RepoCrisisChart({ chart, lang }: { chart: NoteChartDef & { id: "repo-crisis" }; lang: Lang }) {
  const rawData = chart.data as RepoCrisisPoint[];
  const data = rawData.map((d) => ({ ...d, date: localizeDate(d.date, lang) }));
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="date" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} domain={[0, 12]} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1.5">
                  <p className="font-semibold text-gray-600 dark:text-gray-300">{label}</p>
                  {payload.map((p) => (
                    <div key={p.dataKey as string} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">{p.value}%</span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <ReferenceLine x="9/18" stroke="#ef4444" strokeDasharray="4 3" strokeWidth={1.5}
            label={{ value: lang === "en" ? "Crisis Peak" : "위기 정점", position: "top", fontSize: 9, fill: "#ef4444" }} />
          <Line type="monotone" dataKey="repoRate" name={lang === "en" ? "Repo Rate" : "레포금리"}
            stroke="#ef4444" strokeWidth={2.5} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="fedRate" name={lang === "en" ? "Fed Funds Rate" : "연준 기준금리"}
            stroke="#94a3b8" strokeWidth={1.5} dot={false} strokeDasharray="5 3" />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Currency Mix Chart (stacked bar) ──────────────────────────────────────────
function CurrencyMixChart({ chart, lang }: { chart: NoteChartDef & { id: "currency-mix" }; lang: Lang }) {
  const data = chart.data as CurrencyMixPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} domain={[0, 100]} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1.5">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  {[...payload].reverse().map((p) => (
                    <div key={String(p.dataKey)} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">{p.value}%</span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Bar dataKey="USD" name="USD" stackId="a" fill="#0ea5e9" />
          <Bar dataKey="EUR" name="EUR" stackId="a" fill="#8b5cf6" />
          <Bar dataKey="JPY" name="JPY" stackId="a" fill="#ec4899" />
          <Bar dataKey="GBP" name="GBP" stackId="a" fill="#f59e0b" />
          <Bar dataKey="CNY" name="CNY" stackId="a" fill="#ef4444" />
          <Bar dataKey="other" name={lang === "en" ? "Other" : "기타"} stackId="a" fill="#d1d5db" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Stablecoin Growth Chart (stacked bar) ──────────────────────────────────────
function StablecoinChart({ chart, lang }: { chart: NoteChartDef & { id: "stablecoin-growth" }; lang: Lang }) {
  const data = chart.data as StablecoinPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}B`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              const total = (payload as unknown as { value: number }[]).reduce((s, p) => s + (p.value ?? 0), 0);
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1.5">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  {[...payload].reverse().map((p) => (
                    <div key={String(p.dataKey)} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">${p.value}B</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-1.5 mt-1 flex justify-between">
                    <span className="text-gray-400">{lang === "en" ? "Total" : "합계"}</span>
                    <span className="font-mono font-bold text-gray-800 dark:text-gray-100">${total}B</span>
                  </div>
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Bar dataKey="USDT" name="USDT (Tether)" stackId="a" fill="#26a17b" />
          <Bar dataKey="USDC" name="USDC (Circle)" stackId="a" fill="#2775ca" />
          <Bar dataKey="other" name={lang === "en" ? "Other Stablecoins" : "기타 스테이블코인"} stackId="a" fill="#94a3b8" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── CapEx + FCF Combo Chart (스택드 바 + 라인 오버레이) ─────────────────────────
//  AI Capital Cycle Part 1 hero chart — 빅테크 capex 폭증 vs FCF 압박
function CapexFcfChart({ chart, lang }: { chart: NoteChartDef & { id: "capex-fcf-combo" }; lang: Lang }) {
  const data = chart.data as CapexFcfPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const fcfLabel = lang === "en" ? "Combined FCF" : "5사 합산 FCF";
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis yAxisId="left" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}B`} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}B`} domain={[0, 250]} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              const capexTotal = (payload as unknown as { dataKey: string; value: number }[])
                .filter((p) => p.dataKey !== "totalFcf")
                .reduce((s, p) => s + (p.value ?? 0), 0);
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  {[...payload].reverse().map((p) => (
                    <div key={String(p.dataKey)} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">${p.value}B</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-1.5 mt-1 flex justify-between">
                    <span className="text-gray-400">{lang === "en" ? "CapEx total" : "CapEx 합계"}</span>
                    <span className="font-mono font-bold text-amber-600 dark:text-amber-400">${capexTotal}B</span>
                  </div>
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Bar yAxisId="left" dataKey="ORCL"  name="Oracle"    stackId="capex" fill="#dc2626" />
          <Bar yAxisId="left" dataKey="META"  name="Meta"      stackId="capex" fill="#2563eb" />
          <Bar yAxisId="left" dataKey="AMZN"  name="Amazon"    stackId="capex" fill="#f59e0b" />
          <Bar yAxisId="left" dataKey="GOOGL" name="Alphabet"  stackId="capex" fill="#10b981" />
          <Bar yAxisId="left" dataKey="MSFT"  name="Microsoft" stackId="capex" fill="#8b5cf6" radius={[3, 3, 0, 0]} />
          <Line yAxisId="right" type="monotone" dataKey="totalFcf" name={fcfLabel}
            stroke="#0f172a" strokeWidth={2.5} dot={{ r: 3, fill: "#0f172a" }} strokeDasharray="4 3" />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Lucent Vendor Financing — 약정 vs 충당금 ──────────────────────────────────
function LucentFinancingChart({ chart, lang }: { chart: NoteChartDef & { id: "lucent-financing" }; lang: Lang }) {
  const data = chart.data as LucentFinancingPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="fy" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}B`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  {payload.map((p) => (
                    <div key={String(p.dataKey)} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">${p.value}B</span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Line type="monotone" dataKey="commitments" name={lang === "en" ? "Customer Financing Commitments" : "고객 financing 약정"}
            stroke="#0ea5e9" strokeWidth={2.5} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="provisions" name={lang === "en" ? "Write-down Provisions" : "충당금/상각"}
            stroke="#ef4444" strokeWidth={2.5} dot={{ r: 4 }} strokeDasharray="5 3" />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Cisco Lost Decade — 주가 vs 매출 인덱스 (피크 = 100) ──────────────────────
function CiscoLostDecadeChart({ chart, lang }: { chart: NoteChartDef & { id: "cisco-lost-decade" }; lang: Lang }) {
  const data = chart.data as CiscoLostDecadePoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const annotations = chart.annotations ?? [];
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}`} domain={[0, 320]} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  {payload.map((p) => (
                    <div key={String(p.dataKey)} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">{p.value}</span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <ReferenceLine y={100} stroke="#94a3b8" strokeDasharray="3 3" strokeWidth={1} />
          {annotations.map((ann) => (
            <ReferenceLine key={ann.year} x={ann.year} stroke="#f59e0b" strokeDasharray="4 3" strokeWidth={1.5}
              label={{ value: lang === "en" ? (ann.labelEn ?? ann.label) : ann.label, position: "top", fontSize: 9, fill: "#f59e0b" }} />
          ))}
          <Line type="monotone" dataKey="revenueIdx" name={lang === "en" ? "Revenue (FY00 = 100)" : "매출 (FY00=100)"}
            stroke="#0ea5e9" strokeWidth={2.5} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="stockIdx" name={lang === "en" ? "Stock Price (Peak = 100)" : "주가 (피크=100)"}
            stroke="#ef4444" strokeWidth={2.5} dot={{ r: 3 }} strokeDasharray="5 3" />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Circular Flow Diagram — custom SVG (NVDA → OpenAI → MSFT → NVDA) ──────────
//  Recharts 가 노드-엣지 다이어그램을 지원하지 않으므로 단순 SVG 로 그림.
//  3개 노드를 삼각형 배치, 화살표는 각 edge 의 amount 라벨 포함.
function CircularFlowChart({ chart, lang }: { chart: NoteChartDef & { id: "circular-flow" }; lang: Lang }) {
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const { nodes, edges } = chart;

  // 삼각형 좌표 (3노드 가정). 4노드면 사각형으로 폴백.
  const W = 760, H = 380;
  const positions: Record<string, { x: number; y: number }> = {};
  if (nodes.length === 3) {
    positions[nodes[0].id] = { x: W / 2, y: 60 };           // top
    positions[nodes[1].id] = { x: 80, y: H - 70 };          // bottom-left
    positions[nodes[2].id] = { x: W - 80, y: H - 70 };      // bottom-right
  } else if (nodes.length === 4) {
    positions[nodes[0].id] = { x: 80, y: 70 };
    positions[nodes[1].id] = { x: W - 80, y: 70 };
    positions[nodes[2].id] = { x: W - 80, y: H - 70 };
    positions[nodes[3].id] = { x: 80, y: H - 70 };
  } else {
    // fallback — 원형 배치
    nodes.forEach((n, i) => {
      const angle = (2 * Math.PI * i) / nodes.length - Math.PI / 2;
      positions[n.id] = { x: W / 2 + Math.cos(angle) * (W / 3), y: H / 2 + Math.sin(angle) * (H / 3) };
    });
  }

  const NODE_R = 56;

  // 화살표 끝점 계산 (노드 원 가장자리에서 멈춤)
  function arrowEndpoints(from: string, to: string) {
    const a = positions[from], b = positions[to];
    if (!a || !b) return null;
    const dx = b.x - a.x, dy = b.y - a.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist === 0) return null;
    const ux = dx / dist, uy = dy / dist;
    return {
      x1: a.x + ux * NODE_R,
      y1: a.y + uy * NODE_R,
      x2: b.x - ux * (NODE_R + 8),
      y2: b.y - uy * (NODE_R + 8),
      midX: (a.x + b.x) / 2,
      midY: (a.y + b.y) / 2,
    };
  }

  return (
    <ChartCard title={title} caption={caption}>
      <div className="bg-white dark:bg-gray-900/40 py-4 overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto max-w-3xl mx-auto block" style={{ maxHeight: 400 }}>
          {/* Edges */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#64748b" />
            </marker>
          </defs>

          {edges.map((edge, i) => {
            const pts = arrowEndpoints(edge.from, edge.to);
            if (!pts) return null;
            const amountLabel = lang === "en" ? (edge.amountEn ?? edge.amount) : edge.amount;
            const detailLabel = lang === "en" ? (edge.detailEn ?? edge.detail) : edge.detail;
            return (
              <g key={i}>
                <line x1={pts.x1} y1={pts.y1} x2={pts.x2} y2={pts.y2}
                  stroke="#64748b" strokeWidth={2} markerEnd="url(#arrowhead)" />
                {/* Amount label background */}
                <rect
                  x={pts.midX - 70} y={pts.midY - 18}
                  width={140} height={detailLabel ? 36 : 22}
                  rx={6}
                  fill="white"
                  stroke="#e2e8f0"
                  strokeWidth={1}
                  className="dark:fill-gray-800"
                />
                <text x={pts.midX} y={pts.midY - 3} textAnchor="middle" fontSize={12} fontWeight={700}
                  fill="#0f172a" className="dark:fill-gray-100">
                  {amountLabel}
                </text>
                {detailLabel && (
                  <text x={pts.midX} y={pts.midY + 12} textAnchor="middle" fontSize={9}
                    fill="#64748b">
                    {detailLabel}
                  </text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const p = positions[node.id];
            if (!p) return null;
            const label = lang === "en" ? (node.labelEn ?? node.label) : node.label;
            const sub = lang === "en" ? (node.subEn ?? node.sub) : node.sub;
            return (
              <g key={node.id}>
                <circle cx={p.x} cy={p.y} r={NODE_R}
                  fill={node.color} opacity={0.15} />
                <circle cx={p.x} cy={p.y} r={NODE_R}
                  fill="none" stroke={node.color} strokeWidth={2.5} />
                <text x={p.x} y={p.y + (sub ? -2 : 5)} textAnchor="middle"
                  fontSize={15} fontWeight={800} fill={node.color}>
                  {label}
                </text>
                {sub && (
                  <text x={p.x} y={p.y + 14} textAnchor="middle"
                    fontSize={10} fill="#64748b">
                    {sub}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </ChartCard>
  );
}

// ── HBM Share — 3-segment stacked bar (SK하이닉스/삼성/마이크론) ──────────────
function HbmShareChart({ chart, lang }: { chart: NoteChartDef & { id: "hbm-share" }; lang: Lang }) {
  const data = chart.data as HbmSharePoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="quarter" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} domain={[0, 100]} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1.5">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  {[...payload].reverse().map((p) => (
                    <div key={String(p.dataKey)} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">{p.value}%</span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Bar dataKey="micron"  name="Micron"      stackId="a" fill="#10b981" />
          <Bar dataKey="samsung" name="Samsung"     stackId="a" fill="#f59e0b" />
          <Bar dataKey="skhynix" name="SK Hynix"    stackId="a" fill="#dc2626" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── NVDA Data Center 분기 매출 ─────────────────────────────────────────────────
function NvdaDcRevenueChart({ chart, lang }: { chart: NoteChartDef & { id: "nvda-dc-revenue" }; lang: Lang }) {
  const data = chart.data as NvdaDcRevenuePoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const annotations = chart.annotations ?? [];
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }} barSize={18}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="quarter" tick={{ fontSize: 9 }} tickLine={false} axisLine={false} interval={1} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}B`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  <p className="font-mono font-bold text-emerald-600 dark:text-emerald-400">${payload[0].value}B</p>
                </div>
              );
            }}
          />
          {annotations.map((ann) => (
            <ReferenceLine key={ann.quarter} x={ann.quarter} stroke="#f59e0b" strokeDasharray="4 3" strokeWidth={1.5}
              label={{ value: lang === "en" ? (ann.labelEn ?? ann.label) : ann.label, position: "top", fontSize: 9, fill: "#f59e0b" }} />
          ))}
          <Bar dataKey="revenue" name={lang === "en" ? "DC Revenue" : "데이터센터 매출"} fill="#76b900" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Optical Mix (DC vs Telecom vs Industrial) ─────────────────────────────────
function OpticalMixChart({ chart, lang }: { chart: NoteChartDef & { id: "optical-mix" }; lang: Lang }) {
  const data = chart.data as OpticalMixPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }} barSize={32}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="fy" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}B`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              const total = (payload as unknown as { value: number }[]).reduce((s, p) => s + (p.value ?? 0), 0);
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1.5">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  {[...payload].reverse().map((p) => (
                    <div key={String(p.dataKey)} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">${p.value}B</span>
                    </div>
                  ))}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-1.5 mt-1 flex justify-between">
                    <span className="text-gray-400">{lang === "en" ? "Total" : "합계"}</span>
                    <span className="font-mono font-bold text-gray-800 dark:text-gray-100">${total.toFixed(2)}B</span>
                  </div>
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Bar dataKey="industrial" name={lang === "en" ? "Industrial" : "산업"}    stackId="a" fill="#94a3b8" />
          <Bar dataKey="telecom"    name="Telecom"  stackId="a" fill="#3b82f6" />
          <Bar dataKey="dc"         name={lang === "en" ? "Datacom (AI)" : "데이터센터 (AI)"} stackId="a" fill="#10b981" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── CXL/PCIe Adoption (Gen5 → Gen6 → Gen7 전환) ──────────────────────────────
function CxlAdoptionChart({ chart, lang }: { chart: NoteChartDef & { id: "cxl-adoption" }; lang: Lang }) {
  const data = chart.data as CxlAdoptionPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }} barSize={36}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} domain={[0, 100]} />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Bar dataKey="Gen5" name="PCIe Gen 5" stackId="a" fill="#94a3b8" />
          <Bar dataKey="Gen6" name="PCIe Gen 6" stackId="a" fill="#8b5cf6" />
          <Bar dataKey="Gen7" name="PCIe Gen 7" stackId="a" fill="#dc2626" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Data Center Power Demand (IEA 시나리오) ──────────────────────────────────
function DcPowerDemandChart({ chart, lang }: { chart: NoteChartDef & { id: "dc-power-demand" }; lang: Lang }) {
  const data = chart.data as DcPowerDemandPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const hasScenarios = data.some((d) => d.high != null || d.low != null);
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v} TWh`} />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          {hasScenarios && (
            <Line type="monotone" dataKey="high" name={lang === "en" ? "High Scenario" : "고시나리오"}
              stroke="#ef4444" strokeWidth={2} dot={false} strokeDasharray="4 3" />
          )}
          <Line type="monotone" dataKey="base" name={lang === "en" ? "Base Scenario" : "기준 시나리오"}
            stroke="#0ea5e9" strokeWidth={2.5} dot={{ r: 3 }} />
          {hasScenarios && (
            <Line type="monotone" dataKey="low" name={lang === "en" ? "Low Scenario" : "저시나리오"}
              stroke="#94a3b8" strokeWidth={2} dot={false} strokeDasharray="4 3" />
          )}
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Interconnection Queue Growth (LBNL) ──────────────────────────────────────
function QueueGrowthChart({ chart, lang }: { chart: NoteChartDef & { id: "queue-growth" }; lang: Lang }) {
  const data = chart.data as InterconnectionQueuePoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v} GW`} />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Bar dataKey="totalGW" name={lang === "en" ? "Active Queue" : "큐 적체"}
            fill="#0ea5e9" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── AI Penetration by Occupation (Anthropic Economic Index) ──────────────────
function AiPenetrationChart({ chart, lang }: { chart: NoteChartDef & { id: "ai-penetration" }; lang: Lang }) {
  const data = chart.data as AiPenetrationPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Line type="monotone" dataKey="software" name={lang === "en" ? "Software Eng." : "소프트웨어"}
            stroke="#dc2626" strokeWidth={2.5} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="customer" name={lang === "en" ? "Customer Svc." : "고객 서비스"}
            stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="finance" name={lang === "en" ? "Finance / Accounting" : "재무·회계"}
            stroke="#0ea5e9" strokeWidth={2.5} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="legal" name={lang === "en" ? "Legal" : "법무"}
            stroke="#8b5cf6" strokeWidth={2.5} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Mag 7 vs S&P 493 Forward P/E Spread ──────────────────────────────────────
function PeSpreadChart({ chart, lang }: { chart: NoteChartDef & { id: "pe-spread" }; lang: Lang }) {
  const data = chart.data as PeSpreadPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}x`} />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Line type="monotone" dataKey="mag7" name={lang === "en" ? "Mag 7 Forward P/E" : "Mag 7 Forward P/E"}
            stroke="#dc2626" strokeWidth={2.5} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="sp493" name={lang === "en" ? "S&P 493 Forward P/E" : "S&P 493 Forward P/E"}
            stroke="#94a3b8" strokeWidth={2} dot={{ r: 3 }} strokeDasharray="5 3" />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Qubit Race (multi-line) ───────────────────────────────────────────────────
function QubitRaceChart({ chart, lang }: { chart: NoteChartDef & { id: "qubit-race" }; lang: Lang }) {
  const data = chart.data as QubitRacePoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 30, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis
            tick={{ fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            label={{
              value: lang === "en" ? "Qubits" : "큐비트 수",
              angle: -90,
              position: "insideLeft",
              fontSize: 11,
              fill: "#6b7280",
            }}
          />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          {chart.annotations?.map((a, i) => (
            <ReferenceLine
              key={i}
              x={a.year}
              stroke="#dc2626"
              strokeDasharray="4 4"
              label={{
                value: lang === "en" ? (a.labelEn ?? a.label) : a.label,
                fill: "#dc2626",
                fontSize: 10,
                position: "top",
              }}
            />
          ))}
          <Line type="monotone" dataKey="IBM" stroke="#0ea5e9" strokeWidth={2.5} dot={{ r: 3 }} connectNulls />
          <Line type="monotone" dataKey="Google" stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 3 }} connectNulls />
          <Line type="monotone" dataKey="IonQ" stroke="#8b5cf6" strokeWidth={2.5} dot={{ r: 3 }} connectNulls />
          <Line type="monotone" dataKey="Atom" stroke="#10b981" strokeWidth={2.5} dot={{ r: 3 }} connectNulls />
          <Line type="monotone" dataKey="Quantinuum" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 3 }} connectNulls />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Quantum Stocks (multi-line index) ─────────────────────────────────────────
function QuantumStocksChart({ chart, lang }: { chart: NoteChartDef & { id: "quantum-stocks" }; lang: Lang }) {
  const data = chart.data as QuantumStockPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 30, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="date" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis
            tick={{ fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `${v}`}
            label={{
              value: lang === "en" ? "Index (=100)" : "지수 (=100)",
              angle: -90,
              position: "insideLeft",
              fontSize: 11,
              fill: "#6b7280",
            }}
          />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          {chart.annotations?.map((a, i) => (
            <ReferenceLine
              key={i}
              x={a.date}
              stroke="#dc2626"
              strokeDasharray="4 4"
              label={{
                value: lang === "en" ? (a.labelEn ?? a.label) : a.label,
                fill: "#dc2626",
                fontSize: 10,
                position: "top",
              }}
            />
          ))}
          <Line type="monotone" dataKey="IONQ" stroke="#8b5cf6" strokeWidth={2.5} dot={{ r: 3 }} connectNulls />
          <Line type="monotone" dataKey="RGTI" stroke="#0ea5e9" strokeWidth={2.5} dot={{ r: 3 }} connectNulls />
          <Line type="monotone" dataKey="QBTS" stroke="#10b981" strokeWidth={2.5} dot={{ r: 3 }} connectNulls />
          <Line type="monotone" dataKey="QUBT" stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 3 }} connectNulls />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Quantum Funding (grouped bars: gov vs VC) ─────────────────────────────────
function QuantumFundingChart({ chart, lang }: { chart: NoteChartDef & { id: "quantum-funding" }; lang: Lang }) {
  const raw = chart.data as QuantumFundingBar[];
  const data = raw.map((d) => ({
    country: lang === "en" ? d.countryEn : d.country,
    govSpend: d.govSpend,
    vcSpend: d.vcSpend,
  }));
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="country" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis
            tick={{ fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) => `$${v}B`}
          />
          <Tooltip
            content={<ChartTooltip />}
            formatter={((v: number) => [`$${v}B`, undefined]) as never}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Bar dataKey="govSpend" name={lang === "en" ? "Government" : "정부"} fill="#0ea5e9" radius={[4, 4, 0, 0]} />
          <Bar dataKey="vcSpend" name={lang === "en" ? "VC / Private" : "VC / 민간"} fill="#8b5cf6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Quantum Map (Mapbox via dynamic import) ───────────────────────────────────
function QuantumMapBlock({ chart, lang }: { chart: NoteChartDef & { id: "quantum-map" }; lang: Lang }) {
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <div className="my-4">
      {title && (
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{title}</p>
      )}
      <QuantumMap markers={chart.markers} center={chart.center} zoom={chart.zoom} lang={lang} />
      {caption && (
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-2 text-center">{caption}</p>
      )}
    </div>
  );
}

// ── Bit vs Qubit conceptual diagram ────────────────────────────────────────────
function BitQubitDiagram({ chart, lang }: { chart: NoteChartDef & { id: "bit-qubit-diagram" }; lang: Lang }) {
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const ko = lang === "ko";

  return (
    <div className="my-4">
      {title && (
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{title}</p>
      )}
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900/40 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* BIT */}
          <div className="text-center">
            <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
              {ko ? "고전 비트 (BIT)" : "Classical Bit"}
            </p>
            <div className="relative h-40 flex items-center justify-center bg-gradient-to-b from-sky-50 to-white dark:from-sky-900/20 dark:to-gray-900 rounded-xl border border-sky-100 dark:border-sky-900/40">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-sky-500 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                  0
                </div>
                <span className="text-2xl text-gray-300 dark:text-gray-600 font-bold">OR</span>
                <div className="w-16 h-16 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-600 text-3xl font-black">
                  1
                </div>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed">
              {ko
                ? <>한 순간에 <strong>0</strong> 또는 <strong>1</strong> 중 하나. 책상 위에 놓인 동전 — 앞면 <em>또는</em> 뒷면.</>
                : <>At any moment, either <strong>0</strong> or <strong>1</strong>. A coin lying on a desk — heads <em>or</em> tails.</>}
            </p>
            <p className="mt-2 text-[11px] text-gray-400 dark:text-gray-500">
              {ko ? "동시 표현 상태 수: 1개" : "Simultaneous states: 1"}
            </p>
          </div>

          {/* QUBIT */}
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: "#8b5cf6" }}>
              {ko ? "양자 큐비트 (QUBIT)" : "Quantum Qubit"}
            </p>
            <div className="relative h-40 flex items-center justify-center bg-gradient-to-b from-violet-50 to-white dark:from-violet-900/20 dark:to-gray-900 rounded-xl border border-violet-100 dark:border-violet-900/40 overflow-hidden">
              {/* Spinning superposition visual */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-violet-300 dark:border-violet-700 animate-spin" style={{ animationDuration: "4s" }} />
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-sky-400 via-violet-400 to-pink-400 opacity-70 blur-sm" />
                <div className="relative z-10 flex items-center gap-1 text-white font-black text-2xl drop-shadow-lg">
                  <span>0</span>
                  <span className="text-violet-100">+</span>
                  <span>1</span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed">
              {ko
                ? <><strong>0과 1이 동시에</strong> 존재 (superposition). 회전하는 동전 — 앞면 <em>그리고</em> 뒷면이 동시에. 측정하는 순간 하나로 무너진다.</>
                : <><strong>0 and 1 simultaneously</strong> (superposition). A spinning coin — heads <em>and</em> tails at once. Measurement collapses it to one.</>}
            </p>
            <p className="mt-2 text-[11px] font-bold" style={{ color: "#8b5cf6" }}>
              {ko ? "동시 표현 상태 수: 2^N개" : "Simultaneous states: 2^N"}
            </p>
          </div>
        </div>

        {/* Scaling visual */}
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
          <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 mb-3 text-center">
            {ko ? "큐비트 수가 늘어날 때 — 지수 폭발" : "Adding Qubits — Exponential Explosion"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            {[
              { n: "1개", nEn: "1 qubit", states: "2", desc: ko ? "동전 한 개" : "1 coin" },
              { n: "10개", nEn: "10 qubits", states: "1,024", desc: ko ? "보통 PC 가능" : "Normal PC" },
              { n: "100개", nEn: "100 qubits", states: "10³⁰", desc: ko ? "별보다 많음" : "> all stars" },
              { n: "300개", nEn: "300 qubits", states: "10⁹⁰", desc: ko ? "우주 원자보다 많음" : "> all atoms" },
            ].map((d, i) => (
              <div key={i} className="rounded-lg bg-violet-50 dark:bg-violet-900/20 p-2.5 border border-violet-100 dark:border-violet-900/40">
                <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{ko ? d.n : d.nEn}</p>
                <p className="text-base font-black mt-0.5" style={{ color: "#8b5cf6" }}>{d.states}</p>
                <p className="text-[9px] text-gray-400 dark:text-gray-500 mt-0.5">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {caption && (
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-3 text-center leading-relaxed">{caption}</p>
      )}
    </div>
  );
}

// ── Scenario Cards (4가지 시나리오 시각화) ─────────────────────────────────────
const SCENARIO_THEME: Record<
  "bullish" | "neutral" | "warning" | "bearish",
  { cardBg: string; barBg: string; barFill: string; accentText: string; outcomeText: string; sentimentLabel: { ko: string; en: string } }
> = {
  bullish: {
    cardBg: "bg-emerald-50 dark:bg-emerald-900/15 border-emerald-200 dark:border-emerald-800/60",
    barBg: "bg-emerald-100 dark:bg-emerald-900/30",
    barFill: "bg-emerald-500",
    accentText: "text-emerald-700 dark:text-emerald-400",
    outcomeText: "text-emerald-600 dark:text-emerald-400",
    sentimentLabel: { ko: "수혜", en: "Bullish" },
  },
  neutral: {
    cardBg: "bg-sky-50 dark:bg-sky-900/15 border-sky-200 dark:border-sky-800/60",
    barBg: "bg-sky-100 dark:bg-sky-900/30",
    barFill: "bg-sky-500",
    accentText: "text-sky-700 dark:text-sky-400",
    outcomeText: "text-sky-600 dark:text-sky-400",
    sentimentLabel: { ko: "중립", en: "Neutral" },
  },
  warning: {
    cardBg: "bg-amber-50 dark:bg-amber-900/15 border-amber-200 dark:border-amber-800/60",
    barBg: "bg-amber-100 dark:bg-amber-900/30",
    barFill: "bg-amber-500",
    accentText: "text-amber-700 dark:text-amber-400",
    outcomeText: "text-amber-600 dark:text-amber-400",
    sentimentLabel: { ko: "고위험·고수익", en: "High Risk/Reward" },
  },
  bearish: {
    cardBg: "bg-rose-50 dark:bg-rose-900/15 border-rose-200 dark:border-rose-800/60",
    barBg: "bg-rose-100 dark:bg-rose-900/30",
    barFill: "bg-rose-500",
    accentText: "text-rose-700 dark:text-rose-400",
    outcomeText: "text-rose-600 dark:text-rose-400",
    sentimentLabel: { ko: "위험", en: "Bearish" },
  },
};

function ScenarioCardsChart({ chart, lang }: { chart: NoteChartDef & { id: "scenario-cards" }; lang: Lang }) {
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const ko = lang === "ko";
  return (
    <div className="my-4">
      {title && (
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{title}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {chart.scenarios.map((s) => {
          const theme = SCENARIO_THEME[s.sentiment];
          const scenarioTitle = lang === "en" ? s.titleEn : s.title;
          const winners = lang === "en" ? (s.winnersEn ?? s.winners) : s.winners;
          const stockOutcome = lang === "en" ? (s.stockOutcomeEn ?? s.stockOutcome) : s.stockOutcome;
          const reasoning = lang === "en" ? s.reasoningEn : s.reasoning;
          return (
            <div
              key={s.letter}
              className={`rounded-2xl border-2 p-5 ${theme.cardBg} relative overflow-hidden`}
            >
              {/* Top row: Letter + Sentiment label */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-xl ${theme.barFill} flex items-center justify-center text-white text-base font-black shadow-sm`}>
                    {s.letter}
                  </div>
                  <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100">{scenarioTitle}</p>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/80 dark:bg-gray-900/60 ${theme.accentText}`}>
                  {theme.sentimentLabel[lang]}
                </span>
              </div>

              {/* Probability bar */}
              <div className="mb-4">
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {ko ? "확률" : "Probability"}
                  </span>
                  <span className={`text-2xl font-black tabular-nums ${theme.accentText}`}>
                    {s.probability}<span className="text-base">%</span>
                  </span>
                </div>
                <div className={`h-2.5 rounded-full ${theme.barBg} overflow-hidden`}>
                  <div
                    className={`h-full ${theme.barFill} rounded-full transition-all`}
                    style={{ width: `${s.probability}%` }}
                  />
                </div>
              </div>

              {/* Winners + Stock outcome row */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    {ko ? "수혜 종목" : "Winners"}
                  </p>
                  <p className="text-[12px] font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                    {winners}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    {ko ? "주가 시나리오" : "Stock Outcome"}
                  </p>
                  <p className={`text-[14px] font-black ${theme.outcomeText} leading-snug`}>
                    {stockOutcome}
                  </p>
                </div>
              </div>

              {/* Reasoning */}
              <p className="text-[12px] text-gray-600 dark:text-gray-300 leading-relaxed pt-3 border-t border-gray-200/60 dark:border-gray-700/40">
                {reasoning}
              </p>
            </div>
          );
        })}
      </div>
      {caption && (
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-3 text-center leading-relaxed">{caption}</p>
      )}
    </div>
  );
}

// ── Generic chart dispatcher ───────────────────────────────────────────────────
// ── Private Credit 차트 11개 ───────────────────────────────────────────────────

// 1. PC AUM Growth — AreaChart (2008-2024 + annotations)
function PcAumGrowthChart({ chart, lang }: { chart: NoteChartDef & { id: "pc-aum-growth" }; lang: Lang }) {
  const data = chart.data as PcAumPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const annotations = chart.annotations ?? [];
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }}>
          <defs>
            <linearGradient id="pcAumFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}B`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              const ann = annotations.find((a) => a.year === label);
              const annLabel = ann ? (lang === "en" ? (ann.labelEn ?? ann.label) : ann.label) : null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  <p className="font-mono font-bold text-violet-600 dark:text-violet-400">${payload[0].value}B</p>
                  {annLabel && <p className="text-amber-500 font-semibold mt-1">{annLabel}</p>}
                </div>
              );
            }}
          />
          {annotations.map((ann) => (
            <ReferenceLine key={ann.year} x={ann.year} stroke="#f59e0b" strokeDasharray="4 3" strokeWidth={1.5}
              label={{ value: lang === "en" ? (ann.labelEn ?? ann.label) : ann.label, position: "top", fontSize: 9, fill: "#f59e0b" }} />
          ))}
          <Bar dataKey="aum" name={lang === "en" ? "PC AUM" : "PC 운용자산"} fill="url(#pcAumFill)" stroke="#8b5cf6" strokeWidth={2} radius={[3, 3, 0, 0]} />
        </ComposedChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 2. Bank vs PC Share — StackedArea (BSL vs PC % 추이)
function BankVsPcShareChart({ chart, lang }: { chart: NoteChartDef & { id: "bank-vs-pc-share" }; lang: Lang }) {
  const data = chart.data as BankPcSharePoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} domain={[0, 100]} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1.5">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  {[...payload].reverse().map((p) => (
                    <div key={String(p.dataKey)} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">{p.value}%</span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Bar dataKey="bsl" name={lang === "en" ? "BSL (Banks)" : "BSL (은행 신디케이트)"} stackId="a" fill="#0ea5e9" />
          <Bar dataKey="pc" name={lang === "en" ? "Private Credit" : "Private Credit"} stackId="a" fill="#8b5cf6" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 3. PC Asset Classes — Horizontal Bar (자산 클래스별 비중)
function PcAssetClassesChart({ chart, lang }: { chart: NoteChartDef & { id: "pc-asset-classes" }; lang: Lang }) {
  const raw = chart.data as PcAssetClassPoint[];
  const data = raw.map((d, i) => ({
    name: lang === "en" ? d.strategyEn : d.strategy,
    share: d.share,
    fill: ["#8b5cf6", "#0ea5e9", "#f59e0b", "#10b981", "#ef4444", "#ec4899", "#64748b", "#a78bfa"][i % 8],
  }));
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={Math.max(260, data.length * 32)}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 32, bottom: 0, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} horizontal={false} />
          <XAxis type="number" domain={[0, "dataMax + 5"]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} width={150} />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} content={({ active, payload }) => {
            if (!active || !payload?.length) return null;
            const d = payload[0].payload as { name: string; share: number; fill: string };
            return (
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                <p className="font-bold text-gray-800 dark:text-gray-100">{d.name}</p>
                <p style={{ color: d.fill }} className="font-mono text-sm mt-1">{d.share}%</p>
              </div>
            );
          }} />
          <Bar dataKey="share" radius={[0, 4, 4, 0]}>
            {data.map((entry, i) => (<Cell key={i} fill={entry.fill} />))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 4. ABF Growth — Line (projected dashed)
function AbfGrowthChart({ chart, lang }: { chart: NoteChartDef & { id: "abf-growth" }; lang: Lang }) {
  const data = chart.data as AbfGrowthPoint[];
  const actualData = data.map((d) => ({ year: d.year, actual: d.projected ? null : d.market, projected: d.projected ? d.market : null }));
  // continuity: 마지막 actual을 projected line의 시작점으로
  const lastActualIdx = actualData.map((d) => d.actual != null).lastIndexOf(true);
  if (lastActualIdx >= 0 && lastActualIdx < actualData.length - 1) {
    actualData[lastActualIdx].projected = actualData[lastActualIdx].actual;
  }
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={actualData} margin={{ top: 30, right: 16, bottom: 0, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}T`} />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Line type="monotone" dataKey="actual" name={lang === "en" ? "Actual" : "실측"} stroke="#8b5cf6" strokeWidth={2.5} dot={{ r: 4 }} connectNulls />
          <Line type="monotone" dataKey="projected" name={lang === "en" ? "Projected (Apollo outlook)" : "전망 (Apollo outlook)"} stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} strokeDasharray="5 3" connectNulls />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 5. ★ Apollo×Athene Flow — SVG 6단계 다이어그램
function ApolloAtheneFlowChart({ chart, lang }: { chart: NoteChartDef & { id: "apollo-athene-flow" }; lang: Lang }) {
  const stages = chart.stages as ApolloAtheneStage[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const W = 480;
  const BOX_H = 56;
  const GAP = 36;  // box 간격
  const H = stages.length * (BOX_H + GAP) + 20;
  return (
    <ChartCard title={title} caption={caption}>
      <div className="bg-white dark:bg-gray-900/40 py-4 overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto max-w-2xl mx-auto block" style={{ maxHeight: 640 }}>
          <defs>
            <marker id="apolloArrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#94a3b8" />
            </marker>
          </defs>
          {stages.map((stage, i) => {
            const y = 10 + i * (BOX_H + GAP);
            const actor = lang === "en" ? stage.actorEn : stage.actor;
            const detail = lang === "en" ? stage.detailEn : stage.detail;
            const flow = lang === "en" ? stage.flowEn : stage.flow;
            return (
              <g key={i}>
                {/* Box */}
                <rect x={60} y={y} width={W - 120} height={BOX_H} rx={10}
                  fill={stage.color} fillOpacity={0.12} stroke={stage.color} strokeWidth={1.5} />
                {/* Step badge */}
                <circle cx={42} cy={y + BOX_H / 2} r={14} fill={stage.color} />
                <text x={42} y={y + BOX_H / 2 + 4} textAnchor="middle" fontSize={13} fontWeight={800} fill="white">
                  {stage.step}
                </text>
                {/* Actor */}
                <text x={75} y={y + 22} fontSize={13} fontWeight={700} fill={stage.color}>{actor}</text>
                {/* Detail */}
                <text x={75} y={y + 42} fontSize={10} fill="#64748b">{detail}</text>
                {/* Arrow + flow label to next stage */}
                {i < stages.length - 1 && (
                  <g>
                    <line x1={W / 2} y1={y + BOX_H + 2} x2={W / 2} y2={y + BOX_H + GAP - 4}
                      stroke="#94a3b8" strokeWidth={1.8} markerEnd="url(#apolloArrow)" />
                    <rect x={W / 2 - 70} y={y + BOX_H + GAP / 2 - 11} width={140} height={20} rx={4}
                      fill="white" stroke="#e2e8f0" className="dark:fill-gray-800" />
                    <text x={W / 2} y={y + BOX_H + GAP / 2 + 3} textAnchor="middle" fontSize={10} fontWeight={600} fill="#475569">
                      {flow}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </ChartCard>
  );
}

// 6. Insurer Balance Sheet — Grouped Bar
function InsurerBalanceSheetChart({ chart, lang }: { chart: NoteChartDef & { id: "insurer-balance-sheet" }; lang: Lang }) {
  const data = chart.data as InsurerPcBalancePoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }} barSize={18}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="firm" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}B`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1.5">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  {payload.map((p) => (
                    <div key={String(p.dataKey)} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">${p.value}B</span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Bar dataKey="insurance" name={lang === "en" ? "Insurance GA" : "보험사 자산 (GA)"} fill="#0ea5e9" radius={[3, 3, 0, 0]} />
          <Bar dataKey="pcAUM" name={lang === "en" ? "PC AUM" : "PC 운용자산"} fill="#8b5cf6" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 7. Korea Acquisition Finance — Horizontal Bar
function KoreaAcqFinanceChart({ chart, lang }: { chart: NoteChartDef & { id: "korea-acq-finance" }; lang: Lang }) {
  const raw = chart.data as KoreaAcqFinancePoint[];
  const data = raw.map((d) => ({ name: lang === "en" ? d.firmEn : d.firm, value: d.value, deals: d.deals }));
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={Math.max(240, data.length * 36)}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 32, bottom: 0, left: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}조`} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} width={110} />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }} content={({ active, payload }) => {
            if (!active || !payload?.length) return null;
            const d = payload[0].payload as { name: string; value: number; deals: number };
            return (
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                <p className="font-bold text-gray-800 dark:text-gray-100">{d.name}</p>
                <p className="font-mono text-sm mt-1 text-amber-600 dark:text-amber-400">₩{d.value}조</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">{d.deals} {lang === "en" ? "deals" : "건"}</p>
              </div>
            );
          }} />
          <Bar dataKey="value" fill="#f59e0b" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 8. Korea PC Markets — Multi-Area 3 stack
function KoreaPcMarketsChart({ chart, lang }: { chart: NoteChartDef & { id: "korea-pc-markets" }; lang: Lang }) {
  const data = chart.data as KoreaPcMarketPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }} barSize={28}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}조`} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs space-y-1.5">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  {[...payload].reverse().map((p) => (
                    <div key={String(p.dataKey)} className="flex items-center justify-between gap-4">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full" style={{ background: p.color as string }} />
                        <span className="text-gray-500 dark:text-gray-400">{p.name}</span>
                      </span>
                      <span className="font-mono font-bold text-gray-800 dark:text-gray-100">₩{p.value}조</span>
                    </div>
                  ))}
                </div>
              );
            }}
          />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Bar dataKey="acqFin" name={lang === "en" ? "Acquisition Finance" : "인수금융"} stackId="a" fill="#f59e0b" />
          <Bar dataKey="npl" name={lang === "en" ? "NPL" : "NPL"} stackId="a" fill="#ef4444" />
          <Bar dataKey="pf" name={lang === "en" ? "Real Estate PF" : "부동산 PF"} stackId="a" fill="#0ea5e9" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 9. PC Default Rates — Line (PC vs BSL, 역전 강조)
function PcDefaultRatesChart({ chart, lang }: { chart: NoteChartDef & { id: "pc-default-rates" }; lang: Lang }) {
  const data = chart.data as PcDefaultRatePoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="period" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}%`} domain={[0, "dataMax + 1"]} />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <ReferenceLine y={6} stroke="#ef4444" strokeDasharray="4 3" strokeWidth={1}
            label={{ value: lang === "en" ? "Danger 6%" : "위험 6%", position: "right", fontSize: 9, fill: "#ef4444" }} />
          <Line type="monotone" dataKey="directLending" name={lang === "en" ? "Direct Lending (PC)" : "Direct Lending (PC)"}
            stroke="#8b5cf6" strokeWidth={2.5} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="bsl" name="BSL" stroke="#94a3b8" strokeWidth={2} dot={{ r: 3 }} strokeDasharray="5 3" />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// 10. ★ PC Contagion Map — SVG 노드-엣지 (중앙 PC + 5채널)
function PcContagionMapChart({ chart, lang }: { chart: NoteChartDef & { id: "pc-contagion-map" }; lang: Lang }) {
  const center = chart.center as ContagionNode;
  const channels = chart.channels as ContagionChannel[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const W = 760, H = 520;
  const cx = W / 2, cy = H / 2;
  const centerR = 64;
  const RADIUS = 200;
  const riskColor = { low: "#10b981", medium: "#f59e0b", high: "#ef4444" } as const;
  const centerLabel = lang === "en" ? center.labelEn : center.label;

  return (
    <ChartCard title={title} caption={caption}>
      <div className="bg-white dark:bg-gray-900/40 py-4 overflow-x-auto">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto max-w-3xl mx-auto block" style={{ maxHeight: 540 }}>
          <defs>
            <marker id="contagionArrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
              <polygon points="0 0, 8 3, 0 6" fill="#64748b" />
            </marker>
          </defs>

          {/* Channel nodes + edges */}
          {channels.map((ch, i) => {
            const angle = (2 * Math.PI * i) / channels.length - Math.PI / 2;
            const x = cx + Math.cos(angle) * RADIUS;
            const y = cy + Math.sin(angle) * RADIUS;
            const color = riskColor[ch.risk];
            const ux = Math.cos(angle), uy = Math.sin(angle);
            const x1 = cx + ux * centerR;
            const y1 = cy + uy * centerR;
            const x2 = x - ux * 56;
            const y2 = y - uy * 56;
            const label = lang === "en" ? ch.labelEn : ch.label;
            const channelText = lang === "en" ? ch.channelEn : ch.channel;
            return (
              <g key={ch.id}>
                {/* Edge */}
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={2.2} markerEnd="url(#contagionArrow)" />
                {/* Edge label */}
                <rect x={(x1 + x2) / 2 - 56} y={(y1 + y2) / 2 - 10} width={112} height={20} rx={4}
                  fill="white" stroke="#e2e8f0" className="dark:fill-gray-800" />
                <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 + 4} textAnchor="middle" fontSize={9} fill="#64748b">
                  {channelText}
                </text>
                {/* Node */}
                <circle cx={x} cy={y} r={52} fill={color} fillOpacity={0.15} stroke={color} strokeWidth={2} />
                <text x={x} y={y - 4} textAnchor="middle" fontSize={12} fontWeight={700} fill={color}>{label}</text>
                <text x={x} y={y + 12} textAnchor="middle" fontSize={9} fill="#64748b">
                  {ch.risk === "high" ? (lang === "en" ? "high" : "고위험") : ch.risk === "medium" ? (lang === "en" ? "medium" : "주의") : (lang === "en" ? "low" : "낮음")}
                </text>
              </g>
            );
          })}

          {/* Center node */}
          <circle cx={cx} cy={cy} r={centerR} fill={center.color} fillOpacity={0.2} stroke={center.color} strokeWidth={3} />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize={15} fontWeight={800} fill={center.color}>
            {centerLabel}
          </text>
        </svg>
      </div>
    </ChartCard>
  );
}

// 11. ★ Watch Dashboard — 정상/주의/위험 3색 cell 표
function WatchDashboardChart({ chart, lang }: { chart: NoteChartDef & { id: "watch-dashboard" }; lang: Lang }) {
  const data = chart.data as WatchIndicatorPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const dangerCount = data.filter((d) => d.status === "danger").length;
  const cautionCount = data.filter((d) => d.status === "caution").length;
  const normalCount = data.filter((d) => d.status === "normal").length;
  const statusBg = {
    normal: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300",
    caution: "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300",
    danger: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300",
  } as const;
  const statusLabel = {
    normal: lang === "en" ? "Normal" : "정상",
    caution: lang === "en" ? "Caution" : "주의",
    danger: lang === "en" ? "Danger" : "위험",
  } as const;

  return (
    <ChartCard title={title} caption={caption}>
      <div className="overflow-x-auto rounded-xl border border-gray-200/70 dark:border-gray-700/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50/80 dark:bg-gray-800/60 border-b border-gray-200/60 dark:border-gray-700/60">
              <th className="text-left px-4 py-3 text-[11px] font-semibold text-gray-500 dark:text-gray-400">{lang === "en" ? "Indicator" : "지표"}</th>
              <th className="text-center px-3 py-3 text-[11px] font-semibold text-gray-500 dark:text-gray-400">{lang === "en" ? "Current" : "현재"}</th>
              <th className="text-center px-3 py-3 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">{lang === "en" ? "Normal" : "정상"}</th>
              <th className="text-center px-3 py-3 text-[11px] font-semibold text-amber-600 dark:text-amber-400">{lang === "en" ? "Caution" : "주의"}</th>
              <th className="text-center px-3 py-3 text-[11px] font-semibold text-red-600 dark:text-red-400">{lang === "en" ? "Danger" : "위험"}</th>
              <th className="text-center px-3 py-3 text-[11px] font-semibold text-gray-500 dark:text-gray-400">{lang === "en" ? "Status" : "판정"}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="border-b border-gray-100 dark:border-gray-800/60 last:border-0">
                <td className="px-4 py-3 text-[12px] font-medium text-gray-800 dark:text-gray-200">
                  {lang === "en" ? row.indicatorEn : row.indicator}
                </td>
                <td className={`px-3 py-3 text-center text-[12px] font-mono font-bold ${statusBg[row.status]}`}>
                  {row.current}
                </td>
                <td className="px-3 py-3 text-center text-[11px] font-mono text-gray-500 dark:text-gray-400">{row.normalRange}</td>
                <td className="px-3 py-3 text-center text-[11px] font-mono text-gray-500 dark:text-gray-400">{row.cautionRange}</td>
                <td className="px-3 py-3 text-center text-[11px] font-mono text-gray-500 dark:text-gray-400">{row.dangerRange}</td>
                <td className="px-3 py-3 text-center">
                  <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${statusBg[row.status]}`}>
                    {statusLabel[row.status]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* 종합 판정 */}
      <div className="mt-4 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200/70 dark:border-gray-700/60 text-center">
        <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
          {lang === "en" ? "Composite verdict" : "종합 판정"}
        </p>
        <p className="text-[13px] font-semibold text-gray-700 dark:text-gray-300">
          <span className="text-red-600 dark:text-red-400">{dangerCount}</span> {lang === "en" ? "danger" : "위험"} ·{" "}
          <span className="text-amber-600 dark:text-amber-400">{cautionCount}</span> {lang === "en" ? "caution" : "주의"} ·{" "}
          <span className="text-emerald-600 dark:text-emerald-400">{normalCount}</span> {lang === "en" ? "normal" : "정상"}
        </p>
        <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1">
          {dangerCount >= 3
            ? (lang === "en" ? "→ \"PC stress is spreading\" signal" : "→ \"PC stress 확산\" 시그널")
            : normalCount >= 5
            ? (lang === "en" ? "→ \"Shakeout complete\" signal" : "→ \"Shakeout 완료\" 시그널")
            : (lang === "en" ? "→ Mixed signals — keep monitoring weekly" : "→ 혼조 — 주간 모니터링 유지")}
        </p>
      </div>
    </ChartCard>
  );
}

// ── Fallback placeholder (for unregistered chart IDs) ─────────────────────────
function ChartPlaceholder({ chart, lang }: { chart: NoteChartDef; lang: Lang }) {
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <div className="flex items-center justify-center h-48 bg-gray-50 dark:bg-gray-800/40 rounded-lg border border-dashed border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <p className="text-[11px] text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
            {lang === "en" ? "Chart in progress" : "차트 준비 중"}
          </p>
          <p className="text-[10px] font-mono text-gray-300 dark:text-gray-600">
            {chart.id}
          </p>
        </div>
      </div>
    </ChartCard>
  );
}

function NoteChart({ chart, lang }: { chart: NoteChartDef; lang: Lang }) {
  // Private Credit 11개 차트
  if (chart.id === "pc-aum-growth") return <PcAumGrowthChart chart={chart} lang={lang} />;
  if (chart.id === "bank-vs-pc-share") return <BankVsPcShareChart chart={chart} lang={lang} />;
  if (chart.id === "pc-asset-classes") return <PcAssetClassesChart chart={chart} lang={lang} />;
  if (chart.id === "abf-growth") return <AbfGrowthChart chart={chart} lang={lang} />;
  if (chart.id === "apollo-athene-flow") return <ApolloAtheneFlowChart chart={chart} lang={lang} />;
  if (chart.id === "insurer-balance-sheet") return <InsurerBalanceSheetChart chart={chart} lang={lang} />;
  if (chart.id === "korea-acq-finance") return <KoreaAcqFinanceChart chart={chart} lang={lang} />;
  if (chart.id === "korea-pc-markets") return <KoreaPcMarketsChart chart={chart} lang={lang} />;
  if (chart.id === "pc-default-rates") return <PcDefaultRatesChart chart={chart} lang={lang} />;
  if (chart.id === "pc-contagion-map") return <PcContagionMapChart chart={chart} lang={lang} />;
  if (chart.id === "watch-dashboard") return <WatchDashboardChart chart={chart} lang={lang} />;
  // 기존 차트들
  if (chart.id === "pbr-comparison") return <PBRChart chart={chart} lang={lang} />;
  if (chart.id === "tax-rates") return <TaxRatesChart chart={chart} lang={lang} />;
  if (chart.id === "index-comparison") return <IndexComparisonChart chart={chart} lang={lang} />;
  if (chart.id === "reserve-share") return <ReserveShareChart chart={chart} lang={lang} />;
  if (chart.id === "privilege-gap") return <PrivilegeGapChart chart={chart} lang={lang} />;
  if (chart.id === "fed-balance-sheet") return <FedBalanceSheetChart chart={chart} lang={lang} />;
  if (chart.id === "repo-crisis") return <RepoCrisisChart chart={chart} lang={lang} />;
  if (chart.id === "currency-mix") return <CurrencyMixChart chart={chart} lang={lang} />;
  if (chart.id === "stablecoin-growth") return <StablecoinChart chart={chart} lang={lang} />;
  if (chart.id === "capex-fcf-combo") return <CapexFcfChart chart={chart} lang={lang} />;
  if (chart.id === "lucent-financing") return <LucentFinancingChart chart={chart} lang={lang} />;
  if (chart.id === "cisco-lost-decade") return <CiscoLostDecadeChart chart={chart} lang={lang} />;
  if (chart.id === "circular-flow") return <CircularFlowChart chart={chart} lang={lang} />;
  if (chart.id === "hbm-share") return <HbmShareChart chart={chart} lang={lang} />;
  if (chart.id === "nvda-dc-revenue") return <NvdaDcRevenueChart chart={chart} lang={lang} />;
  if (chart.id === "optical-mix") return <OpticalMixChart chart={chart} lang={lang} />;
  if (chart.id === "cxl-adoption") return <CxlAdoptionChart chart={chart} lang={lang} />;
  if (chart.id === "dc-power-demand") return <DcPowerDemandChart chart={chart} lang={lang} />;
  if (chart.id === "queue-growth") return <QueueGrowthChart chart={chart} lang={lang} />;
  if (chart.id === "ai-penetration") return <AiPenetrationChart chart={chart} lang={lang} />;
  if (chart.id === "pe-spread") return <PeSpreadChart chart={chart} lang={lang} />;
  if (chart.id === "qubit-race") return <QubitRaceChart chart={chart} lang={lang} />;
  if (chart.id === "quantum-stocks") return <QuantumStocksChart chart={chart} lang={lang} />;
  if (chart.id === "quantum-funding") return <QuantumFundingChart chart={chart} lang={lang} />;
  if (chart.id === "quantum-map") return <QuantumMapBlock chart={chart} lang={lang} />;
  if (chart.id === "bit-qubit-diagram") return <BitQubitDiagram chart={chart} lang={lang} />;
  if (chart.id === "scenario-cards") return <ScenarioCardsChart chart={chart} lang={lang} />;
  return null;
}

// ── Table ──────────────────────────────────────────────────────────────────────
function renderTableCell(text: string | number): string {
  return String(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+?)\*/g, '<em class="italic text-violet-600 dark:text-violet-400">$1</em>');
}

function NoteTable({ table, lang }: { table: NoteTableDef; lang: Lang }) {
  const title = lang === "en" ? (table.titleEn ?? table.title) : table.title;
  const headers = lang === "en" ? (table.headersEn ?? table.headers) : table.headers;
  const rows = lang === "en" ? (table.rowsEn ?? table.rows) : table.rows;
  const caption = lang === "en" ? (table.captionEn ?? table.caption) : table.caption;
  const highlightSet = new Set(table.highlightRows ?? []);
  return (
    <div className="my-2">
      {title && (
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{title}</p>
      )}
      <div className="overflow-x-auto rounded-xl border border-gray-200/70 dark:border-gray-700/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50/80 dark:bg-gray-800/60 border-b border-gray-200/60 dark:border-gray-700/60">
              {headers.map((h, i) => (
                <th
                  key={i}
                  className="text-left px-4 py-3 text-[11px] font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap"
                  dangerouslySetInnerHTML={{ __html: renderTableCell(h) }}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => {
              const isHL = highlightSet.has(ri);
              return (
                <tr
                  key={ri}
                  className={
                    isHL
                      ? "border-b border-violet-200 dark:border-violet-900/60 last:border-0 bg-violet-50/80 dark:bg-violet-900/20 border-l-[3px] border-l-violet-500 dark:border-l-violet-400 transition-colors"
                      : "border-b border-gray-100 dark:border-gray-800/60 last:border-0 hover:bg-gray-50/60 dark:hover:bg-gray-800/30 transition-colors"
                  }
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={
                        isHL
                          ? "px-4 py-3 text-[13px] font-semibold text-gray-900 dark:text-gray-50 leading-relaxed"
                          : "px-4 py-3 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed"
                      }
                      dangerouslySetInnerHTML={{ __html: renderTableCell(cell) }}
                    />
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {caption && (
        <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 leading-relaxed">{caption}</p>
      )}
    </div>
  );
}

// ── Callout ────────────────────────────────────────────────────────────────────
const CALLOUT_CONFIG: Record<
  NoteCalloutDef["variant"],
  { bg: string; border: string; icon: string; headingColor: string }
> = {
  insight: {
    bg: "bg-blue-50/60 dark:bg-blue-950/20",
    border: "border-blue-200 dark:border-blue-800/50",
    icon: "💡",
    headingColor: "text-blue-700 dark:text-blue-400",
  },
  warning: {
    bg: "bg-amber-50/60 dark:bg-amber-950/20",
    border: "border-amber-200 dark:border-amber-800/50",
    icon: "⚠️",
    headingColor: "text-amber-700 dark:text-amber-400",
  },
  quote: {
    bg: "bg-gray-50/80 dark:bg-gray-800/40",
    border: "border-gray-300 dark:border-gray-600/60",
    icon: "❝",
    headingColor: "text-gray-700 dark:text-gray-300",
  },
  example: {
    bg: "bg-emerald-50/60 dark:bg-emerald-950/20",
    border: "border-emerald-200 dark:border-emerald-800/50",
    icon: "📌",
    headingColor: "text-emerald-700 dark:text-emerald-400",
  },
};

function NoteCallout({ callout, lang }: { callout: NoteCalloutDef; lang: Lang }) {
  const cfg = CALLOUT_CONFIG[callout.variant];
  const heading = lang === "en" ? (callout.headingEn ?? callout.heading) : callout.heading;
  const body = lang === "en" ? (callout.bodyEn ?? callout.body) : callout.body;
  return (
    <div className={`rounded-xl border px-5 py-4 my-2 ${cfg.bg} ${cfg.border}`}>
      {heading && (
        <p className={`text-sm font-bold mb-2 flex items-center gap-2 ${cfg.headingColor}`}>
          <span aria-hidden="true">{cfg.icon}</span>
          {heading}
        </p>
      )}
      <p
        className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: body
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/\*([^*\n]+?)\*/g, '<em class="italic text-violet-600 dark:text-violet-400">$1</em>'),
        }}
      />
    </div>
  );
}

// ── Image ──────────────────────────────────────────────────────────────────────
const IMAGE_MAX_WIDTH: Record<NonNullable<NoteImageDef["size"]>, string> = {
  sm: "280px",
  md: "420px",
  lg: "640px",
  full: "100%",
};

function NoteImage({ image, lang }: { image: NoteImageDef; lang: Lang }) {
  const alt = lang === "en" ? (image.altEn ?? image.alt) : image.alt;
  const caption = lang === "en" ? (image.captionEn ?? image.caption) : image.caption;
  const maxWidth = IMAGE_MAX_WIDTH[image.size ?? "md"];
  return (
    <figure className="my-6 mx-auto" style={{ maxWidth }}>
      <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto block"
          style={image.width && image.height ? { aspectRatio: `${image.width} / ${image.height}` } : undefined}
        />
      </div>
      {(caption || image.source) && (
        <figcaption className="mt-2 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed text-center">
          {caption}
          {caption && image.source && " · "}
          {image.source && (
            image.sourceUrl ? (
              <a
                href={image.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="underline hover:text-gray-700 dark:hover:text-gray-200"
              >
                {image.source}
              </a>
            ) : (
              image.source
            )
          )}
        </figcaption>
      )}
    </figure>
  );
}

// ── Metrics grid ───────────────────────────────────────────────────────────────
function MetricsGrid({ items, lang }: { items: NoteMetric[]; lang: Lang }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
      {items.map((item, i) => {
        const label = lang === "en" ? (item.labelEn ?? item.label) : item.label;
        const value = lang === "en" ? (item.valueEn ?? item.value) : item.value;
        const sub = lang === "en" ? (item.subEn ?? item.sub) : item.sub;
        return (
          <motion.div
            key={i}
            variants={fadeUp(i * 0.06)}
            className="rounded-xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/40 px-4 py-4"
          >
            <p className={`text-[11px] font-bold uppercase tracking-wide mb-1.5 ${item.color ?? "text-gray-500"}`}>
              {label}
            </p>
            <p className="text-[13px] font-semibold text-gray-800 dark:text-gray-100 leading-snug">
              {value}
            </p>
            {sub && (
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1.5 leading-relaxed">{sub}</p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

// ── Text body ──────────────────────────────────────────────────────────────────
function isMarkdownTable(block: string): boolean {
  const lines = block.split("\n").map((l) => l.trim());
  return (
    lines.length >= 2 &&
    lines[0].startsWith("|") &&
    /^\|[\s\-:|]+\|$/.test(lines[1])
  );
}

function MarkdownTable({ block }: { block: string }) {
  const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
  const header = lines[0].split("|").map((c) => c.trim()).filter((_, i, a) => i !== 0 && i !== a.length - 1);
  const rows = lines.slice(2).map((row) =>
    row.split("|").map((c) => c.trim()).filter((_, i, a) => i !== 0 && i !== a.length - 1)
  );
  const renderCell = (text: string) =>
    text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*\n]+?)\*/g, '<em class="italic text-violet-600 dark:text-violet-400">$1</em>');

  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
      <table className="w-full text-[13px] sm:text-sm">
        <thead className="bg-gray-50 dark:bg-gray-800/60">
          <tr>
            {header.map((h, i) => (
              <th
                key={i}
                className="px-3 py-2.5 text-left font-semibold text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700"
                dangerouslySetInnerHTML={{ __html: renderCell(h) }}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-3 py-2.5 text-gray-600 dark:text-gray-300 align-top"
                  dangerouslySetInnerHTML={{ __html: renderCell(cell) }}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * `### Heading` 으로 시작하는 블록은 sub-header 로 렌더링한다.
 *  - 위쪽 구분선 + 여백으로 섹션 시각적 구분
 *  - [Heading] 브래킷 + 볼드 + 사이즈 ↑
 *  - "### Title — Subtitle" 패턴은 Title 만 브래킷, Subtitle 은 회색 부제
 */
function isSubHeading(block: string): boolean {
  return block.trimStart().startsWith("### ");
}

function SubHeadingBlock({ block }: { block: string }) {
  const lines = block.split("\n");
  const rawHeading = lines[0].replace(/^\s*###\s+/, "").trim();
  const rest = lines.slice(1).join("\n").trim();

  // " — " 분리: 첫 em dash 기준으로 title / subtitle 나눔
  const dashSplit = rawHeading.split(/\s+—\s+/);
  const title = dashSplit[0].trim();
  const subtitle = dashSplit.length > 1 ? dashSplit.slice(1).join(" — ").trim() : "";

  return (
    <div className="mt-10 pt-6 border-t border-gray-200/70 dark:border-gray-700/60">
      <h3 className="text-[17px] sm:text-[19px] font-bold text-gray-900 dark:text-gray-100 leading-tight">
        [{title}]
      </h3>
      {subtitle && (
        <p className="mt-2 text-[14px] sm:text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
      {rest && (
        <p
          className="mt-4 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: rest
              .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
              .replace(/\*([^*\n]+?)\*/g, '<em class="italic text-violet-600 dark:text-violet-400">$1</em>')
              .replace(/\n/g, "<br/>"),
          }}
        />
      )}
    </div>
  );
}

function TextBody({ body }: { body: string }) {
  const blocks = body.split("\n\n").filter(Boolean);
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (isMarkdownTable(block)) {
          return <MarkdownTable key={i} block={block} />;
        }
        if (isSubHeading(block)) {
          return <SubHeadingBlock key={i} block={block} />;
        }
        return (
          <p
            key={i}
            className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: block
                .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*([^*\n]+?)\*/g, '<em class="italic text-violet-600 dark:text-violet-400">$1</em>')
                .replace(/\n/g, "<br/>"),
            }}
          />
        );
      })}
    </div>
  );
}

// ── Block renderer ─────────────────────────────────────────────────────────────
function BlockRenderer({ block, lang }: { block: NoteBlock; lang: Lang }) {
  if (block.type === "text") {
    const body = lang === "en" ? (block.bodyEn ?? block.body) : block.body;
    return (
      <InView>
        <TextBody body={body} />
      </InView>
    );
  }
  if (block.type === "chart") {
    return (
      <InView>
        <NoteChart chart={block.chart} lang={lang} />
      </InView>
    );
  }
  if (block.type === "table") {
    return (
      <InView>
        <NoteTable table={block.table} lang={lang} />
      </InView>
    );
  }
  if (block.type === "callout") {
    return (
      <InView>
        <NoteCallout callout={block.callout} lang={lang} />
      </InView>
    );
  }
  if (block.type === "metrics") {
    return (
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <MetricsGrid items={block.items} lang={lang} />
      </motion.div>
    );
  }
  if (block.type === "image") {
    return (
      <InView>
        <NoteImage image={block.image} lang={lang} />
      </InView>
    );
  }
  return null;
}

// ── Section ────────────────────────────────────────────────────────────────────
function SectionRenderer({
  section,
  idx,
  accent,
  lang,
}: {
  section: NoteSection;
  idx: number;
  accent: string;
  lang: Lang;
}) {
  const heading = lang === "en" ? (section.headingEn ?? section.heading) : section.heading;
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="mb-14"
    >
      {heading && (
        <InView>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-1">
              <span
                className="text-[11px] font-bold tabular-nums"
                style={{ color: accent + "99" }}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {heading}
              </h2>
            </div>
            <div className="w-8 h-0.5 ml-7 mt-3" style={{ background: accent }} />
          </div>
        </InView>
      )}
      <div className="space-y-5">
        {section.blocks.map((block, bi) => (
          <BlockRenderer key={bi} block={block} lang={lang} />
        ))}
      </div>
    </motion.section>
  );
}

// ── References ─────────────────────────────────────────────────────────────────
function References({ refs, lang }: { refs: NoteReference[]; lang: Lang }) {
  return (
    <InView>
      <div className="border-t border-gray-200/60 dark:border-gray-700/60 pt-10 mt-4">
        <h2 className="text-base font-bold text-gray-800 dark:text-gray-200 mb-5">
          {lang === "en" ? "References" : "참고문헌 및 출처"}
        </h2>
        <ol className="space-y-3">
          {refs.map((ref) => (
            <li key={ref.id} className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
              <span className="font-mono text-[10px] font-bold text-gray-400 dark:text-gray-500 tabular-nums mt-0.5 shrink-0 w-5">
                [{ref.id}]
              </span>
              <span>
                {ref.author && <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}. </span>}
                <span className="italic">{ref.title}.</span>{" "}
                <span>{ref.source}</span>
                {ref.year && <span>, {ref.year}</span>}.
                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1.5 text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    ↗
                  </a>
                )}
                {ref.note && (
                  <span className="ml-1 text-gray-400 dark:text-gray-500">({ref.note})</span>
                )}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </InView>
  );
}

// ── Main client component ──────────────────────────────────────────────────────
export default function NoteDetailClient({
  note,
  lang = "ko",
}: {
  note: NoteData;
  lang?: Lang;
}) {
  const meta = NOTE_CATEGORY_META[note.category];
  const [tocOpen, setTocOpen] = useState(false);

  const title = lang === "en" ? (note.titleEn ?? note.title) : note.title;
  const description = lang === "en" ? (note.descriptionEn ?? note.description) : note.description;
  const keyPoints = lang === "en" ? (note.keyPointsEn ?? note.keyPoints) : note.keyPoints;
  const categoryLabel = lang === "en" ? meta.labelEn : meta.label;

  const homeHref = lang === "en" ? "/en" : "/";
  const notesHref = lang === "en" ? "/en/notes" : "/notes";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            {/* Breadcrumb */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
            >
              {[
                { href: homeHref, label: lang === "en" ? "Home" : "홈" },
                { href: notesHref, label: "Notes" },
                { href: null, label: categoryLabel },
              ].map((crumb, i) => (
                <motion.span key={i} variants={fadeUp(i * 0.05)} className="flex items-center gap-1.5">
                  {i > 0 && <span>›</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-gray-600 dark:text-gray-300 font-medium">{crumb.label}</span>
                  )}
                </motion.span>
              ))}
            </motion.div>

            {/* Category badge */}
            <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show" className="mb-4">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1"
                style={{
                  background: meta.accent + "18",
                  color: meta.accent,
                  border: `1px solid ${meta.accent}33`,
                }}
              >
                <span aria-hidden="true">{meta.icon}</span>
                {categoryLabel}
              </span>
            </motion.div>

            {/* Title + 공유 토글
                모바일: 세로 배치 — 제목·설명이 가로 풀폭, LikeButton+ShareButtons는 아래
                sm 이상: 가로 배치 — 좌측 제목·설명, 우측 토글 */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1 min-w-0">
                <motion.h1
                  variants={fadeUp(0.1)}
                  initial="hidden"
                  animate="show"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-tight"
                >
                  {title}
                </motion.h1>

                <motion.p
                  variants={fadeUp(0.15)}
                  initial="hidden"
                  animate="show"
                  className="mt-3 text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl"
                >
                  {description}
                </motion.p>
              </div>
              <motion.div
                variants={fadeUp(0.2)}
                initial="hidden"
                animate="show"
                className="flex-shrink-0 sm:pt-1 flex items-center gap-2"
              >
                <LikeButton slug={note.slug} lang={lang} />
                <ShareButtons title={title} variant="top" lang={lang} />
              </motion.div>
            </div>

            {/* Meta */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="show"
              className="mt-5 flex flex-wrap items-center gap-4 text-xs text-gray-400 dark:text-gray-500"
            >
              <span>{note.date}</span>
              <span>·</span>
              <span>
                {note.readingMinutes}{lang === "en" ? " min read" : "분 읽기"}
              </span>
              <span>·</span>
              <span>{note.references.length}{lang === "en" ? " sources" : "개 출처"}</span>
            </motion.div>
          </div>
        </section>

        {/* ── Key points ─────────────────────────────────────────── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50/40 dark:bg-gray-800/20">
          <div className="max-w-3xl mx-auto px-5 py-8">
            <InView>
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: meta.accent }}
              >
                {lang === "en" ? "Key Takeaways" : "핵심 요약"}
              </h2>
            </InView>
            <motion.ul
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {keyPoints.map((pt, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp(i * 0.05)}
                  className="flex items-start gap-3 text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: meta.accent }}
                  />
                  {pt}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* ── TOC toggle ─────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 pt-8">
          <button
            onClick={() => setTocOpen((v) => !v)}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mb-6"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="16" y2="12" />
              <line x1="3" y1="18" x2="11" y2="18" />
            </svg>
            {tocOpen
              ? lang === "en" ? "Hide contents" : "목차 닫기"
              : lang === "en" ? "Show contents" : "목차 보기"}
          </button>

          {tocOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 rounded-xl border border-gray-200/70 dark:border-gray-700/60 bg-gray-50/60 dark:bg-gray-800/30 px-5 py-4"
            >
              <ol className="space-y-2">
                {note.sections.map((sec, i) => {
                  const h = lang === "en" ? (sec.headingEn ?? sec.heading) : sec.heading;
                  if (!h) return null;
                  return (
                    <li key={i} className="flex gap-3 text-[13px] text-gray-600 dark:text-gray-400">
                      <span className="font-mono text-[10px] text-gray-400 tabular-nums mt-0.5 w-5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {h}
                    </li>
                  );
                })}
              </ol>
            </motion.div>
          )}
        </div>

        {/* ── Body ───────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto px-5 pb-16">
          {note.sections.map((section, idx) => {
            // 긴 글일수록 중간 공유 토글을 자주 노출.
            //  - 8 섹션 이상: 매 4 섹션마다 (3, 7, 11, ...)
            //  - 5~7 섹션: 중간에 한 번
            //  - 그 외: 미노출 (BOTTOM 만으로 충분)
            const total = note.sections.length;
            const isLast = idx === total - 1;
            let showMid = false;
            if (!isLast) {
              if (total >= 8) {
                showMid = (idx + 1) % 4 === 0;
              } else if (total >= 5) {
                showMid = idx === Math.floor(total / 2);
              }
            }
            return (
              <div key={idx}>
                <SectionRenderer
                  section={section}
                  idx={idx}
                  accent={meta.accent}
                  lang={lang}
                />
                {showMid && (
                  <ShareButtons title={title} variant="mid" lang={lang} likeSlug={note.slug} />
                )}
              </div>
            );
          })}

          {/* BOTTOM — 본문 종료 시점에 풀 카드형 공유 + AuthorByline + LikeButton */}
          <ShareButtons
            title={title}
            variant="bottom"
            lang={lang}
            updatedAt={note.date}
            readingMinutes={note.readingMinutes}
            likeSlug={note.slug}
          />

          <References refs={note.references} lang={lang} />

          {/* Series Navigation — 시리즈 이전/다음 글 */}
          {(() => {
            const { prev, next } = getSeriesNav(note.slug);
            if (!prev && !next) return null;
            const notePath = lang === "en" ? "/en/notes" : "/notes";
            return (
              <SeriesNav
                lang={lang}
                prev={prev ? {
                  href: `${notePath}/${prev.slug}`,
                  title: lang === "en" ? (prev.titleEn ?? prev.title) : prev.title,
                  orderLabel: prev.seriesOrder != null ? (lang === "en" ? `Part ${prev.seriesOrder}` : `${prev.seriesOrder}편`) : undefined,
                } : null}
                next={next ? {
                  href: `${notePath}/${next.slug}`,
                  title: lang === "en" ? (next.titleEn ?? next.title) : next.title,
                  orderLabel: next.seriesOrder != null ? (lang === "en" ? `Part ${next.seriesOrder}` : `${next.seriesOrder}편`) : undefined,
                } : null}
              />
            );
          })()}

          {/* Like + Comments */}
          <div className="mt-8 flex justify-center">
            <LikeButton slug={note.slug} lang={lang} />
          </div>
          <NewsletterCTA lang={lang} />
          <CommentSection slug={note.slug} lang={lang} />

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-gray-200/60 dark:border-gray-700/60">
            <Link
              href={notesHref}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              {lang === "en" ? "Back to Notes" : "Notes로 돌아가기"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
