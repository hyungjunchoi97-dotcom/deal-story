/**
 * M&A 시리즈 — Phase 라벨 배지
 * 챕터 hero 또는 상단에 표시
 */
"use client";

import { type Phase } from "@/data/ma-series";

type Lang = "ko" | "en";

const PHASE_STYLES: Record<Phase["color"], { bg: string; fg: string; border: string }> = {
  blue:    { bg: "bg-blue-50 dark:bg-blue-950/40",       fg: "text-blue-700 dark:text-blue-300",       border: "border-blue-200 dark:border-blue-800/60" },
  violet:  { bg: "bg-violet-50 dark:bg-violet-950/40",   fg: "text-violet-700 dark:text-violet-300",   border: "border-violet-200 dark:border-violet-800/60" },
  indigo:  { bg: "bg-indigo-50 dark:bg-indigo-950/40",   fg: "text-indigo-700 dark:text-indigo-300",   border: "border-indigo-200 dark:border-indigo-800/60" },
  emerald: { bg: "bg-emerald-50 dark:bg-emerald-950/40", fg: "text-emerald-700 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800/60" },
  amber:   { bg: "bg-amber-50 dark:bg-amber-950/40",     fg: "text-amber-700 dark:text-amber-300",     border: "border-amber-200 dark:border-amber-800/60" },
  rose:    { bg: "bg-rose-50 dark:bg-rose-950/40",       fg: "text-rose-700 dark:text-rose-300",       border: "border-rose-200 dark:border-rose-800/60" },
};

export default function PhaseBadge({ phase, lang, size = "md" }: { phase: Phase; lang: Lang; size?: "sm" | "md" }) {
  const ko = lang === "ko";
  const style = PHASE_STYLES[phase.color] ?? PHASE_STYLES.blue;
  const sizeClass = size === "sm" ? "text-[10px] px-2 py-0.5" : "text-[11px] px-2.5 py-1";
  return (
    <span className={`inline-flex items-center gap-1.5 font-semibold rounded-full border ${style.bg} ${style.fg} ${style.border} ${sizeClass}`}>
      <span className="opacity-60">Phase {phase.num}</span>
      <span>·</span>
      <span>{ko ? phase.labelKo : phase.labelEn}</span>
    </span>
  );
}
