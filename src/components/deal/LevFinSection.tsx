"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LevFinOverview } from "@/lib/deal-data";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const SENIORITY_LABEL: Record<LevFinOverview["tranches"][number]["seniority"], { ko: string; en: string }> = {
  "senior-secured":   { ko: "선순위 담보",   en: "Sr. Secured"   },
  "senior-unsecured": { ko: "선순위 무담보",  en: "Sr. Unsecured"  },
  "subordinated":     { ko: "후순위",         en: "Subordinated"   },
  "mezzanine":        { ko: "메자닌",         en: "Mezzanine"      },
  "bridge":           { ko: "브리지론",       en: "Bridge Loan"    },
  "equity":           { ko: "에쿼티",         en: "Equity"         },
};

export default function LevFinSection({ data, lang }: { data: LevFinOverview; lang: Lang }) {
  const ko = lang === "ko";

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={VP}
      className="space-y-8"
    >
      {/* ── 헤더 배지 + 인트로 ──────────────────────────────────── */}
      <motion.div variants={fadeUp()}>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-700 mb-4">
          <span>📐</span>
          <span>{data.angle}</span>
        </div>
        <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed">
          {data.body}
        </p>
      </motion.div>

      {/* ── LevFin 핵심 지표 ─────────────────────────────────────── */}
      <motion.div variants={fadeUp(0.05)}>
        <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
          {ko ? "LevFin 핵심 지표" : "LevFin Key Metrics"}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {data.metrics.map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.05)}
              className={`rounded-xl border p-3.5 ${
                m.isAlert
                  ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700"
                  : "bg-gray-50 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700/60"
              }`}
            >
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-1">{m.label}</p>
              <p className={`text-[20px] font-black tabular-nums leading-none mb-1 ${
                m.isAlert ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-gray-100"
              }`}>
                {m.value}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── 자본 구조 트랑쉐 ─────────────────────────────────────── */}
      {data.tranches.length > 0 && (
        <motion.div variants={fadeUp(0.08)}>
          <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
            {ko ? "자본 구조 (Capital Structure)" : "Capital Structure"}
          </p>

          {/* 스택 바 시각화 */}
          <div className="flex h-6 rounded-lg overflow-hidden mb-4 gap-px">
            {data.tranches.map((t, i) => (
              <motion.div
                key={i}
                className={`${t.color} first:rounded-l-lg last:rounded-r-lg`}
                style={{ width: t.pct ? `${t.pct}%` : `${Math.floor(100 / data.tranches.length)}%` }}
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={VP}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                title={`${t.name}: ${t.amountDisplay}`}
              />
            ))}
          </div>

          {/* 트랑쉐 테이블 */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700/60 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-700">
                    {[
                      ko ? "트랑쉐" : "Tranche",
                      ko ? "금액" : "Amount",
                      ko ? "금리/스프레드" : "Rate / Spread",
                      ko ? "만기" : "Maturity",
                      ko ? "선순위" : "Seniority",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left py-2.5 px-3 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {data.tranches.map((t, i) => (
                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                      <td className="py-2.5 px-3 text-[13px] font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${t.color}`} />
                        {t.name}
                      </td>
                      <td className="py-2.5 px-3 text-[13px] font-bold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        {t.amountDisplay}
                      </td>
                      <td className="py-2.5 px-3 text-[12px] font-mono text-amber-600 dark:text-amber-400 whitespace-nowrap">
                        {t.rate}
                      </td>
                      <td className="py-2.5 px-3 text-[12px] text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {t.maturity}
                      </td>
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <span className="text-[10px] font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full">
                          {SENIORITY_LABEL[t.seniority][ko ? "ko" : "en"]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}

      {/* ── LevFin 핵심 교훈 ─────────────────────────────────────── */}
      <motion.div variants={fadeUp(0.1)}>
        <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
          {ko ? "이 딜이 가르쳐주는 LevFin 교훈" : "LevFin Lessons From This Deal"}
        </p>
        <div className="space-y-3">
          {data.lessons.map((lesson, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.06)}
              className="flex gap-3 rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-900/10 p-4"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{lesson.icon}</span>
              <div>
                <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 mb-1">
                  {lesson.title}
                </p>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                  {lesson.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── 연관 LevFin 챕터 ─────────────────────────────────────── */}
      <motion.div variants={fadeUp(0.12)}>
        <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
          {ko ? "이 딜로 이해하는 LevFin 챕터" : "LevFin Chapters This Deal Illustrates"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.relatedChapters.map((ch, i) => (
            <motion.div key={i} variants={fadeUp(i * 0.05)}>
              <Link
                href={`/market-101/${ch.slug}`}
                className="group flex gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 hover:border-amber-300 dark:hover:border-amber-700 hover:bg-amber-50/30 dark:hover:bg-amber-900/10 transition-colors"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                  <span className="text-[10px] font-black text-amber-700 dark:text-amber-300">{ch.chapterNum}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                    {ch.title}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug mt-0.5">
                    {ch.whyRelevant}
                  </p>
                </div>
                <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-amber-400 dark:group-hover:text-amber-600 transition-colors text-lg">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
