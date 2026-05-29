/**
 * 챕터 상단 — 이 챕터에서 어떤 축의 어떤 옵션 조합이 본문을 갈리게 하는지 한눈에 요약.
 */
"use client";

import { motion } from "framer-motion";
import {
  type MaChapter,
  type Phase,
  VARIANT_AXES,
  getAxis,
} from "@/data/ma-series";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function VariantSnapshot({
  chapter,
  phase,
  lang,
}: {
  chapter: MaChapter;
  phase: Phase;
  lang: Lang;
}) {
  const ko = lang === "ko";

  if (chapter.variantImpacts.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: EASE }}
      className="rounded-2xl overflow-hidden border border-gray-200/70 dark:border-gray-700/60"
    >
      <div
        className="px-5 py-3 flex items-center gap-2"
        style={{ background: `${phase.accentHex}15` }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: phase.accentHex }}
        />
        <p
          className="text-[10px] font-bold uppercase tracking-widest"
          style={{ color: phase.accentHex }}
        >
          {ko ? "이 챕터의 분기" : "Variant Snapshot"}
        </p>
      </div>
      <div className="p-5 sm:p-6 bg-white dark:bg-gray-900 space-y-4">
        {chapter.variantImpacts.map((impact, i) => {
          const axis = getAxis(impact.axis);
          if (!axis) return null;
          // 영향받는 옵션 라벨들
          const optionLabels = impact.impactedBy
            .map((id) => axis.options.find((o) => o.id === id))
            .filter(Boolean)
            .map((o) => (ko ? o!.labelKo : o!.labelEn));
          return (
            <div key={i} className="flex flex-col sm:flex-row sm:gap-5">
              <div className="flex-shrink-0 sm:w-32 mb-1.5 sm:mb-0">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
                  {ko ? axis.labelKo : axis.labelEn}
                </p>
                <div className="flex flex-wrap gap-1">
                  {optionLabels.map((lbl, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {lbl}
                    </span>
                  ))}
                </div>
              </div>
              <p className="flex-1 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko ? impact.noteKo : impact.noteEn}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
