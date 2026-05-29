"use client";

/**
 * Timeline — 1945~2035 메가 타임라인
 *
 * After Pax Americana 시리즈에서 반복 사용하는 80년 타임라인.
 * 챕터별로 특정 이벤트를 강조(highlight)할 수 있도록 설계.
 */

import { motion } from "framer-motion";

type TimelineEvent = {
  year: number;
  label: string;        // 짧은 타이틀
  labelEn?: string;
  desc?: string;        // 부연 (호버 시 표시)
  descEn?: string;
  category: "shale" | "war" | "alliance" | "money" | "policy" | "demo";
  highlight?: boolean;  // 현재 챕터에서 강조할 이벤트
};

type TimelineProps = {
  startYear?: number;
  endYear?: number;
  events?: TimelineEvent[];
  title?: string;
  titleEn?: string;
  caption?: string;
  captionEn?: string;
  lang?: "ko" | "en";
};

// ── 시리즈 공통 기본 이벤트 (80년 메가 타임라인) ──────────────────────────────
// highlight: true → 라벨이 기본 노출 (5~6개로 제한해야 가독성 유지)
// highlight: false → 점만 표시, 호버 시 라벨 노출
const DEFAULT_EVENTS: TimelineEvent[] = [
  { year: 1944, label: "브레튼우즈",                                labelEn: "Bretton Woods",                   category: "money",    highlight: true },
  { year: 1949, label: "NATO 창설",                                 labelEn: "NATO Founded",                    category: "alliance" },
  { year: 1971, label: "닉슨 쇼크",                                  labelEn: "Nixon Shock",                     category: "money" },
  { year: 1973, label: "오일 쇼크 · 페트로달러",                     labelEn: "Oil Shock · Petrodollar",         category: "money",    highlight: true },
  { year: 1979, label: "이란 혁명",                                  labelEn: "Iranian Revolution",              category: "war" },
  { year: 1989, label: "베를린 장벽",                                labelEn: "Berlin Wall Falls",               category: "alliance" },
  { year: 1991, label: "소련 붕괴 · 1차 걸프전",                     labelEn: "USSR Collapse · Gulf War",        category: "war" },
  { year: 2001, label: "9·11 · 아프간",                              labelEn: "9/11 · Afghan War",               category: "war" },
  { year: 2003, label: "이라크 침공",                                labelEn: "Iraq Invasion",                   category: "war" },
  { year: 2008, label: "셰일 본격화 · GFC",                          labelEn: "Shale Begins · GFC",              category: "shale",    highlight: true },
  { year: 2014, label: "크림 합병",                                  labelEn: "Crimea Annexed",                  category: "war" },
  { year: 2015, label: "Sabine Pass LNG",                            labelEn: "Sabine Pass LNG",                 category: "shale" },
  { year: 2020, label: "미국 첫 순수출",                             labelEn: "US First Net Exporter",           category: "shale",    highlight: true },
  { year: 2022, label: "우크라 · Nord Stream",                       labelEn: "Ukraine · Nord Stream",           category: "war" },
  { year: 2023, label: "이스라엘-하마스",                            labelEn: "Israel-Hamas",                    category: "war" },
  { year: 2024, label: "트럼프 재선",                                labelEn: "Trump Re-elected",                category: "policy" },
  { year: 2026, label: "이자 > 국방예산",                            labelEn: "Interest > Defense",              category: "money" },
  { year: 2027, label: "Three Mile Island 재가동",                   labelEn: "Three Mile Island Restart",       category: "policy" },
  { year: 2030, label: "중국 인구 -130M",                            labelEn: "China Pop. -130M",                category: "demo" },
  { year: 2035, label: "시리즈 시야 종료",                           labelEn: "Series Horizon",                  category: "policy",   highlight: true },
];

const CAT_META: Record<TimelineEvent["category"], { color: string; label: { ko: string; en: string } }> = {
  shale:    { color: "#10b981", label: { ko: "에너지", en: "Energy" } },
  war:      { color: "#dc2626", label: { ko: "전쟁", en: "War" } },
  alliance: { color: "#8b5cf6", label: { ko: "동맹", en: "Alliance" } },
  money:    { color: "#0ea5e9", label: { ko: "통화·자본", en: "Money" } },
  policy:   { color: "#f59e0b", label: { ko: "정책", en: "Policy" } },
  demo:     { color: "#6b7280", label: { ko: "인구", en: "Demographics" } },
};

export default function Timeline({
  startYear = 1944,
  endYear = 2035,
  events = DEFAULT_EVENTS,
  title,
  titleEn,
  caption,
  captionEn,
  lang = "ko",
}: TimelineProps) {
  const ko = lang === "ko";
  const span = endYear - startYear;

  // 1944~2035를 0~100%로 매핑
  const pct = (year: number) => ((year - startYear) / span) * 100;

  // 사용된 카테고리만 범례에 표시
  const usedCategories = Array.from(new Set(events.map((e) => e.category)));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-white dark:bg-gray-900 overflow-hidden my-8"
    >
      {/* Header */}
      {(title || ko) && (
        <div className="px-5 sm:px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-800/30">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">
            {ko ? "메가 타임라인" : "Mega Timeline"}
          </p>
          <h3 className="text-[14px] font-bold text-gray-900 dark:text-gray-100">
            {ko ? (title ?? `${startYear} – ${endYear}`) : (titleEn ?? title ?? `${startYear} – ${endYear}`)}
          </h3>
        </div>
      )}

      {/* Timeline body */}
      <div className="p-5 sm:p-8">
        {/* Year markers */}
        <div className="relative pt-4 pb-12">
          {/* Track */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />

          {/* Decade markers */}
          {Array.from({ length: Math.floor(span / 10) + 1 }, (_, i) => {
            const year = startYear + i * 10;
            if (year > endYear) return null;
            return (
              <div
                key={year}
                className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ left: `${pct(year)}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="w-px h-2 bg-gray-300 dark:bg-gray-600" />
                <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 mt-1">
                  {year}
                </span>
              </div>
            );
          })}

          {/* Events */}
          {events.map((e, i) => {
            const meta = CAT_META[e.category];
            const isAbove = i % 2 === 0;
            return (
              <motion.div
                key={`${e.year}-${i}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group absolute top-1/2"
                style={{ left: `${pct(e.year)}%`, transform: "translateX(-50%)" }}
              >
                {/* Dot */}
                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                    e.highlight ? "w-3 h-3 ring-2 ring-offset-1" : "w-2 h-2"
                  } group-hover:scale-150 transition-transform`}
                  style={{
                    background: meta.color,
                    boxShadow: e.highlight ? `0 0 0 4px ${meta.color}33` : undefined,
                  }}
                />

                {/* Label — only for highlighted events; others show on hover */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 ${
                    isAbove ? "bottom-3" : "top-3"
                  } whitespace-nowrap pointer-events-none z-10`}
                >
                  <div
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold border bg-white dark:bg-gray-900 shadow-sm transition-opacity duration-200 ${
                      e.highlight
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{
                      color: meta.color,
                      borderColor: `${meta.color}40`,
                    }}
                  >
                    {ko ? e.label : (e.labelEn ?? e.label)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
          {usedCategories.map((cat) => {
            const m = CAT_META[cat];
            return (
              <div key={cat} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: m.color }}
                />
                <span className="text-[10px] text-gray-500 dark:text-gray-400">
                  {ko ? m.label.ko : m.label.en}
                </span>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        {(caption || captionEn) && (
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-4 italic">
            {ko ? caption : (captionEn ?? caption)}
          </p>
        )}
      </div>
    </motion.div>
  );
}
