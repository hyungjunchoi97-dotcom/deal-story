"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  LineChart, Line,
  BarChart, Bar, Cell,
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
} from "@/data/notes";
import { NOTE_CATEGORY_META } from "@/data/notes";

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
        <LineChart data={data} margin={{ top: 8, right: 10, bottom: 0, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.5} />
          <XAxis dataKey="year" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} />
          <YAxis yAxisId="left" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} domain={[0.6, 1.4]} tickFormatter={(v) => `${v}x`} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10 }} tickLine={false} axisLine={false} domain={[2, 6]} tickFormatter={(v) => `${v}x`} />
          <Tooltip content={<ChartTooltip />} />
          <Legend wrapperStyle={{ fontSize: 11, paddingTop: 12 }} />
          <Line yAxisId="left" type="monotone" dataKey="KOSPI" stroke="#ef4444" strokeWidth={2.5} dot={false} name="KOSPI" />
          <Line yAxisId="left" type="monotone" dataKey="TOPIX" stroke="#3b82f6" strokeWidth={2} dot={false} name="TOPIX" strokeDasharray="5 3" />
          <Line yAxisId="right" type="monotone" dataKey="SP500" stroke="#8b5cf6" strokeWidth={2} dot={false} name="S&P 500 (우축)" />
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
        <LineChart data={data} margin={{ top: 8, right: 10, bottom: 0, left: -10 }}>
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
        <LineChart data={data} margin={{ top: 8, right: 16, bottom: 0, left: -16 }}>
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

// ── Generic chart dispatcher ───────────────────────────────────────────────────
function NoteChart({ chart, lang }: { chart: NoteChartDef; lang: Lang }) {
  if (chart.id === "pbr-comparison") return <PBRChart chart={chart} lang={lang} />;
  if (chart.id === "tax-rates") return <TaxRatesChart chart={chart} lang={lang} />;
  if (chart.id === "index-comparison") return <IndexComparisonChart chart={chart} lang={lang} />;
  if (chart.id === "reserve-share") return <ReserveShareChart chart={chart} lang={lang} />;
  if (chart.id === "privilege-gap") return <PrivilegeGapChart chart={chart} lang={lang} />;
  return null;
}

// ── Table ──────────────────────────────────────────────────────────────────────
function NoteTable({ table, lang }: { table: NoteTableDef; lang: Lang }) {
  const title = lang === "en" ? (table.titleEn ?? table.title) : table.title;
  const headers = lang === "en" ? (table.headersEn ?? table.headers) : table.headers;
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
            {table.rows.map((row, ri) => (
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
              {item.value}
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
function TextBody({ body }: { body: string }) {
  const paragraphs = body.split("\n\n").filter(Boolean);
  return (
    <div className="space-y-4">
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: para.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br/>"),
          }}
        />
      ))}
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
