"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  LineChart, Line,
  BarChart, Bar, Cell,
  ComposedChart,
  AreaChart, Area,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer, ReferenceLine, ReferenceDot, Legend,
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
  UsOilProductionPoint,
  UsPgImportPoint,
  LngExporterBar,
  BreakevenBar,
  EuRussianGasPoint,
  ChinaOilSourceBar,
} from "@/data/notes";
import { NOTE_CATEGORY_META, getSeriesNav } from "@/data/notes";
import SeriesNav from "@/components/SeriesNav";

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

// ══════════════════════════════════════════════════════════════════════════════
// After Pax Americana — Ch.1 (Shale Pivot) 차트 6종
// ══════════════════════════════════════════════════════════════════════════════

// ── US 원유 생산 (1970-2026), AreaChart ───────────────────────────────────────
function UsOilProductionChart({ chart, lang }: { chart: NoteChartDef & { id: "us-oil-production" }; lang: Lang }) {
  const data = chart.data as UsOilProductionPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const annotations = chart.annotations ?? [];
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -4 }}>
          <defs>
            <linearGradient id="usOilProd" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#dc2626" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#dc2626" stopOpacity={0.04} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} interval={2} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false}
            tickFormatter={(v) => `${(Number(v) / 1000).toFixed(0)}M`} domain={[0, 15000]} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              const ann = annotations.find((a) => a.year === Number(label));
              const annLabel = ann ? (lang === "en" ? (ann.labelEn ?? ann.label) : ann.label) : null;
              const v = Number(payload[0].value);
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  <p className="font-mono font-bold text-red-600 dark:text-red-400">
                    {(v / 1000).toFixed(2)} MM bpd
                  </p>
                  {annLabel && <p className="text-amber-500 font-semibold mt-1 max-w-[180px] leading-snug">{annLabel}</p>}
                </div>
              );
            }}
          />
          {annotations.map((ann) => (
            <ReferenceLine key={ann.year} x={ann.year} stroke="#f59e0b" strokeDasharray="4 3" strokeWidth={1.2}
              label={{ value: lang === "en" ? (ann.labelEn ?? ann.label) : ann.label, position: "top", fontSize: 8, fill: "#f59e0b" }} />
          ))}
          <Area type="monotone" dataKey="production" stroke="#dc2626" strokeWidth={2.5} fill="url(#usOilProd)"
            name={lang === "en" ? "US Crude Output" : "미국 원유 생산"} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── 미국 페르시아만 원유 수입 비중 (1973-2025), LineChart ──────────────────────
function UsPgImportChart({ chart, lang }: { chart: NoteChartDef & { id: "us-pg-imports" }; lang: Lang }) {
  const data = chart.data as UsPgImportPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const annotations = chart.annotations ?? [];
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data} margin={{ top: 30, right: 16, bottom: 0, left: -8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false}
            tickFormatter={(v) => `${v}%`} domain={[0, 30]} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              const ann = annotations.find((a) => a.year === Number(label));
              const annLabel = ann ? (lang === "en" ? (ann.labelEn ?? ann.label) : ann.label) : null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  <p className="font-mono font-bold text-sky-600 dark:text-sky-400">{payload[0].value}%</p>
                  {annLabel && <p className="text-amber-500 font-semibold mt-1 max-w-[180px] leading-snug">{annLabel}</p>}
                </div>
              );
            }}
          />
          {annotations.map((ann) => (
            <ReferenceLine key={ann.year} x={ann.year} stroke="#f59e0b" strokeDasharray="4 3" strokeWidth={1.2}
              label={{ value: lang === "en" ? (ann.labelEn ?? ann.label) : ann.label, position: "top", fontSize: 8, fill: "#f59e0b" }} />
          ))}
          <Line type="monotone" dataKey="pct" stroke="#0ea5e9" strokeWidth={2.5} dot={{ r: 2.5, fill: "#0ea5e9" }}
            name={lang === "en" ? "PG Imports (% of total)" : "페르시아만 비중"} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── LNG 수출국 랭킹 (2024), Horizontal BarChart ────────────────────────────────
function LngExportersChart({ chart, lang }: { chart: NoteChartDef & { id: "lng-exporters" }; lang: Lang }) {
  const raw = chart.data as LngExporterBar[];
  const data = raw.map((d) => ({ ...d, displayName: lang === "en" ? d.countryEn : d.country }));
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 28, bottom: 0, left: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} horizontal={false} />
          <XAxis type="number" domain={[0, 14]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false}
            tickFormatter={(v) => `${v}`} />
          <YAxis type="category" dataKey="displayName" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} width={80} />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const d = payload[0].payload as LngExporterBar & { displayName: string };
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                  <p className="font-bold text-gray-800 dark:text-gray-100">{d.displayName}</p>
                  <p style={{ color: d.color }} className="font-mono text-sm mt-1">{d.bcfd} Bcf/d</p>
                </div>
              );
            }}
          />
          <Bar dataKey="bcfd" radius={[0, 4, 4, 0]} label={{
            position: "right", fontSize: 10, fill: "#6b7280",
            formatter: ((v: unknown) => `${v} Bcf/d`) as never,
          }}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── 손익분기 비교 ($/bbl), Horizontal BarChart ─────────────────────────────────
function BreakevenChart({ chart, lang }: { chart: NoteChartDef & { id: "breakeven-bars" }; lang: Lang }) {
  const raw = chart.data as BreakevenBar[];
  const data = raw.map((d) => ({ ...d, displayName: lang === "en" ? d.labelEn : d.label }));
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 32, bottom: 0, left: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} horizontal={false} />
          <XAxis type="number" domain={[0, 130]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false}
            tickFormatter={(v) => `$${v}`} />
          <YAxis type="category" dataKey="displayName" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} width={180} />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const d = payload[0].payload as BreakevenBar & { displayName: string };
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                  <p className="font-bold text-gray-800 dark:text-gray-100 max-w-[200px] leading-snug">{d.displayName}</p>
                  <p style={{ color: d.color }} className="font-mono text-sm mt-1">${d.value}/bbl</p>
                </div>
              );
            }}
          />
          <ReferenceLine x={70} stroke="#94a3b8" strokeDasharray="4 3" strokeWidth={1}
            label={{ value: lang === "en" ? "WTI ~$70" : "WTI ~$70", position: "top", fontSize: 9, fill: "#94a3b8" }} />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} label={{
            position: "right", fontSize: 10, fill: "#6b7280",
            formatter: ((v: unknown) => `$${v}`) as never,
          }}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── EU 러시아산 가스 비중 (2021-2025), AreaChart ───────────────────────────────
function EuRussianGasChart({ chart, lang }: { chart: NoteChartDef & { id: "eu-russian-gas" }; lang: Lang }) {
  const data = chart.data as EuRussianGasPoint[];
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const annotations = chart.annotations ?? [];
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 30, right: 20, bottom: 0, left: -8 }}>
          <defs>
            <linearGradient id="euRuGas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#475569" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#475569" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} vertical={false} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis tick={{ fontSize: 10 }} tickLine={false} axisLine={false}
            tickFormatter={(v) => `${v}%`} domain={[0, 50]} />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null;
              const ann = annotations.find((a) => a.year === Number(label));
              const annLabel = ann ? (lang === "en" ? (ann.labelEn ?? ann.label) : ann.label) : null;
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                  <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">{label}</p>
                  <p className="font-mono font-bold text-slate-700 dark:text-slate-300">{payload[0].value}%</p>
                  {annLabel && <p className="text-amber-500 font-semibold mt-1 max-w-[180px] leading-snug">{annLabel}</p>}
                </div>
              );
            }}
          />
          {annotations.map((ann) => (
            <ReferenceLine key={ann.year} x={ann.year} stroke="#f59e0b" strokeDasharray="4 3" strokeWidth={1.2}
              label={{ value: lang === "en" ? (ann.labelEn ?? ann.label) : ann.label, position: "top", fontSize: 8, fill: "#f59e0b" }} />
          ))}
          <Area type="monotone" dataKey="pct" stroke="#475569" strokeWidth={2.5} fill="url(#euRuGas)"
            name={lang === "en" ? "Russian Gas Share" : "러시아산 비중"} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── 중국 원유 수입 mix (2024), Horizontal BarChart ─────────────────────────────
function ChinaOilMixChart({ chart, lang }: { chart: NoteChartDef & { id: "china-oil-mix" }; lang: Lang }) {
  const raw = chart.data as ChinaOilSourceBar[];
  const data = raw.map((d) => ({ ...d, displayName: lang === "en" ? d.countryEn : d.country }));
  const title = lang === "en" ? (chart.titleEn ?? chart.title) : chart.title;
  const caption = lang === "en" ? (chart.captionEn ?? chart.caption) : chart.caption;
  const bucketLabel: Record<ChinaOilSourceBar["bucket"], { ko: string; en: string }> = {
    "russia": { ko: "러시아", en: "Russia" },
    "gulf-major": { ko: "걸프(친미·중립)", en: "Gulf (US-aligned / neutral)" },
    "iran": { ko: "이란", en: "Iran" },
    "other": { ko: "기타", en: "Other" },
  };
  return (
    <ChartCard title={title} caption={caption}>
      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={data} layout="vertical" margin={{ top: 0, right: 28, bottom: 0, left: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} horizontal={false} />
          <XAxis type="number" domain={[0, 22]} tick={{ fontSize: 10 }} tickLine={false} axisLine={false}
            tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="displayName" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} width={80} />
          <Tooltip cursor={{ fill: "rgba(0,0,0,0.04)" }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const d = payload[0].payload as ChinaOilSourceBar & { displayName: string };
              const bucket = bucketLabel[d.bucket];
              return (
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl px-4 py-3 text-xs">
                  <p className="font-bold text-gray-800 dark:text-gray-100">{d.displayName}</p>
                  <p style={{ color: d.color }} className="font-mono text-sm mt-1">{d.pct}%</p>
                  <p className="text-gray-400 mt-1">{lang === "en" ? bucket.en : bucket.ko}</p>
                </div>
              );
            }}
          />
          <Bar dataKey="pct" radius={[0, 4, 4, 0]} label={{
            position: "right", fontSize: 10, fill: "#6b7280",
            formatter: ((v: unknown) => `${v}%`) as never,
          }}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

// ── Generic chart dispatcher ───────────────────────────────────────────────────
function NoteChart({ chart, lang }: { chart: NoteChartDef; lang: Lang }) {
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
  if (chart.id === "us-oil-production") return <UsOilProductionChart chart={chart} lang={lang} />;
  if (chart.id === "us-pg-imports") return <UsPgImportChart chart={chart} lang={lang} />;
  if (chart.id === "lng-exporters") return <LngExportersChart chart={chart} lang={lang} />;
  if (chart.id === "breakeven-bars") return <BreakevenChart chart={chart} lang={lang} />;
  if (chart.id === "eu-russian-gas") return <EuRussianGasChart chart={chart} lang={lang} />;
  if (chart.id === "china-oil-mix") return <ChinaOilMixChart chart={chart} lang={lang} />;
  return null;
}

// ── Table ──────────────────────────────────────────────────────────────────────
function NoteTable({ table, lang }: { table: NoteTableDef; lang: Lang }) {
  const title = lang === "en" ? (table.titleEn ?? table.title) : table.title;
  const headers = lang === "en" ? (table.headersEn ?? table.headers) : table.headers;
  const rows = lang === "en" ? (table.rowsEn ?? table.rows) : table.rows;
  const caption = lang === "en" ? (table.captionEn ?? table.caption) : table.caption;
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
                <th key={i} className="text-left px-4 py-3 text-[11px] font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr
                key={ri}
                className="border-b border-gray-100 dark:border-gray-800/60 last:border-0 hover:bg-gray-50/60 dark:hover:bg-gray-800/30 transition-colors"
              >
                {row.map((cell, ci) => (
                  <td key={ci} className="px-4 py-3 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
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
          __html: body.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"),
        }}
      />
    </div>
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
    text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

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

function TextBody({ body }: { body: string }) {
  const blocks = body.split("\n\n").filter(Boolean);
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (isMarkdownTable(block)) {
          return <MarkdownTable key={i} block={block} />;
        }
        return (
          <p
            key={i}
            className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: block.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>"),
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

            {/* Title */}
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
          {note.sections.map((section, idx) => (
            <SectionRenderer
              key={idx}
              section={section}
              idx={idx}
              accent={meta.accent}
              lang={lang}
            />
          ))}

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
