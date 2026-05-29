/**
 * M&A 시리즈 — 챕터 네비게이션
 *
 * 14챕터 + Ch.0 이라 pill bar가 너무 길어짐 → Phase 그룹화한 compact 네비.
 * 모바일에서는 collapse, 데스크탑에서는 가로 expand.
 */
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MA_CHAPTERS, MA_PHASES, getPhase } from "@/data/ma-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function MaChapterNav({ currentSlug, lang }: { currentSlug: string; lang: Lang }) {
  const ko = lang === "ko";
  const base = ko ? "/deal-101" : "/en/deal-101";
  const [expanded, setExpanded] = useState(false);

  const current = MA_CHAPTERS.find((c) => c.slug === currentSlug);
  if (!current) return null;
  const currentPhase = getPhase(current.phase);

  return (
    <div className="max-w-3xl mx-auto px-5 mb-8">
      {/* Compact header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800/40 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className="flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-white font-black text-[11px]"
            style={{ background: currentPhase?.accentHex }}
          >
            {current.ch === 0 ? "0" : `${current.ch}`}
          </span>
          <div className="flex flex-col items-start min-w-0">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              {ko ? "M&A 시리즈" : "M&A Series"} · {ko ? `Ch.${current.ch} / 14` : `Ch.${current.ch} of 14`}
            </span>
            <span className="text-[13px] font-bold text-gray-800 dark:text-gray-200 truncate">
              {ko ? current.titleKo : current.titleEn}
            </span>
          </div>
        </div>
        <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2, ease: EASE }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>

      {/* Expanded list — grouped by phase */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="phases"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <div className="mt-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800">
              {MA_PHASES.map((phase) => {
                const chapters = MA_CHAPTERS.filter((c) => c.phase === phase.key);
                return (
                  <div key={phase.key} className="p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1 h-3 rounded-full" style={{ background: phase.accentHex }} />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Phase {phase.num} · {ko ? phase.labelKo : phase.labelEn}
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      {chapters.map((ch) => {
                        const isCurrent = ch.slug === currentSlug;
                        const isDraft = ch.status === "draft" || ch.status === "planned";
                        return (
                          <Link
                            key={ch.slug}
                            href={`${base}/${ch.slug}`}
                            className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md text-[12px] transition-colors ${
                              isCurrent
                                ? "bg-gray-100 dark:bg-gray-800 font-semibold text-gray-900 dark:text-gray-100"
                                : "hover:bg-gray-50 dark:hover:bg-gray-800/60 text-gray-600 dark:text-gray-400"
                            } ${isDraft ? "opacity-60" : ""}`}
                          >
                            <span className="flex-shrink-0 text-[10px] font-mono w-7 text-gray-400 dark:text-gray-500">
                              Ch.{ch.ch}
                            </span>
                            <span className="truncate flex-1">
                              {ko ? ch.titleKo : ch.titleEn}
                            </span>
                            {isDraft && (
                              <span className="text-[9px] font-semibold text-amber-600 dark:text-amber-400">
                                {ko ? "준비중" : "Draft"}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
