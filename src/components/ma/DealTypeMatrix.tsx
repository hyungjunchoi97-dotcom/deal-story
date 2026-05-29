/**
 * M&A 시리즈 Ch.0 — Deal Type Matrix 인터랙티브
 *
 * 5축(Side / Process / Target / Buyer / Structure) 토글 →
 * 영향받는 챕터들이 색상 변하면서 "이 조합 기준 적용 방식" 라벨 표시.
 */
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  VARIANT_AXES,
  MA_CHAPTERS,
  MA_PHASES,
  type AxisKey,
} from "@/data/ma-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// 각 축에서 디폴트 선택 (가장 일반적 조합 = "private auction sell-side strategic stock")
const DEFAULT_SELECTION: Record<AxisKey, string> = {
  side:      "sell-side",
  process:   "limited-auction",
  target:    "private",
  buyer:     "strategic",
  structure: "stock-purchase",
};

export default function DealTypeMatrix({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const [selection, setSelection] = useState<Record<AxisKey, string>>(DEFAULT_SELECTION);

  const setAxis = (axis: AxisKey, optionId: string) => {
    setSelection((s) => ({ ...s, [axis]: optionId }));
  };

  // 챕터별로 현재 선택에 의해 영향받는지 + 어떤 note 가 활성화되는지 계산
  const chapterImpacts = useMemo(() => {
    const out = new Map<string, string[]>(); // slug -> active note texts
    for (const ch of MA_CHAPTERS) {
      const activeNotes: string[] = [];
      for (const impact of ch.variantImpacts) {
        const selectedOption = selection[impact.axis];
        if (impact.impactedBy.includes(selectedOption)) {
          activeNotes.push(ko ? impact.noteKo : impact.noteEn);
        }
      }
      out.set(ch.slug, activeNotes);
    }
    return out;
  }, [selection, ko]);

  const base = ko ? "/deal-101" : "/en/deal-101";

  return (
    <div className="space-y-10">
      {/* ── 5축 선택 인터페이스 ────────────────────────────────────── */}
      <div className="space-y-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
            {ko ? "내 딜의 5축 좌표를 정해보세요" : "Pick your deal's 5-axis coordinates"}
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">
            {ko
              ? "각 축에서 옵션을 골라보면, 14챕터 중 어느 챕터의 어떤 부분이 그 조합에서 다르게 적용되는지 보여줍니다."
              : "Toggle each axis to see how the 14-chapter workflow shifts for your deal mix."}
          </p>
        </div>

        <div className="space-y-3">
          {VARIANT_AXES.map((axis) => {
            const selected = selection[axis.key];
            return (
              <div
                key={axis.key}
                className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 mb-3">
                  <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                    {ko ? axis.labelKo : axis.labelEn}
                  </h3>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500">
                    {ko ? axis.descKo : axis.descEn}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {axis.options.map((opt) => {
                    const isSelected = selected === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => setAxis(axis.key, opt.id)}
                        className={`text-[11px] font-medium px-3 py-1.5 rounded-full transition-all ${
                          isSelected
                            ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-sm"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                      >
                        {ko ? opt.labelKo : opt.labelEn}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 영향받는 챕터 시각화 ──────────────────────────────────── */}
      <div>
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            {ko ? "이 조합에서 14챕터의 분기" : "Chapter variants for this mix"}
          </h2>
          <span className="text-[11px] text-gray-400 dark:text-gray-500">
            {[...chapterImpacts.values()].filter((n) => n.length > 0).length}
            {ko ? "개 챕터 분기 활성" : " chapters affected"}
          </span>
        </div>

        <div className="space-y-6">
          {MA_PHASES.map((phase) => {
            const phaseChapters = MA_CHAPTERS.filter(
              (c) => c.phase === phase.key && c.ch > 0
            );
            if (phaseChapters.length === 0) return null;
            return (
              <div key={phase.key}>
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-1.5 h-5 rounded-full"
                    style={{ background: phase.accentHex }}
                  />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Phase {phase.num} · {ko ? phase.labelKo : phase.labelEn}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {phaseChapters.map((ch) => {
                    const notes = chapterImpacts.get(ch.slug) ?? [];
                    const hasImpact = notes.length > 0;
                    return (
                      <motion.div
                        key={ch.slug}
                        layout
                        transition={{ duration: 0.25, ease: EASE }}
                        className={`group relative rounded-xl border p-3.5 transition-all ${
                          hasImpact
                            ? "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-sm"
                            : "border-gray-100 dark:border-gray-800/60 bg-gray-50/60 dark:bg-gray-900/40"
                        }`}
                      >
                        <Link href={`${base}/${ch.slug}`} className="block">
                          <div className="flex items-start gap-2.5">
                            <span
                              className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center text-white font-black text-[11px] ${
                                hasImpact ? "" : "opacity-50"
                              }`}
                              style={{ background: phase.accentHex }}
                            >
                              {ch.ch}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p
                                className={`text-[13px] font-bold leading-tight ${
                                  hasImpact
                                    ? "text-gray-900 dark:text-gray-100"
                                    : "text-gray-500 dark:text-gray-500"
                                }`}
                              >
                                {ko ? ch.titleKo : ch.titleEn}
                              </p>
                              {hasImpact && (
                                <motion.div
                                  initial={{ opacity: 0, y: -4 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.2, ease: EASE }}
                                  className="mt-2 space-y-1"
                                >
                                  {notes.map((note, i) => (
                                    <p
                                      key={i}
                                      className="text-[11px] text-gray-600 dark:text-gray-300 leading-relaxed pl-2 border-l-2"
                                      style={{ borderColor: phase.accentHex }}
                                    >
                                      {note}
                                    </p>
                                  ))}
                                </motion.div>
                              )}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── 디폴트로 돌리기 ───────────────────────────────────────── */}
      <div className="flex justify-center">
        <button
          onClick={() => setSelection(DEFAULT_SELECTION)}
          className="text-[11px] font-medium text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          {ko ? "디폴트 조합으로 리셋" : "Reset to default"}
        </button>
      </div>
    </div>
  );
}
