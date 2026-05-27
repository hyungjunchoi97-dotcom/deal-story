"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { SyndicatedLoanOverview } from "@/lib/deal-data";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-40px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const TRANCHE_TYPE_LABEL: Record<SyndicatedLoanOverview["tranches"][number]["type"], { ko: string; en: string }> = {
  "bridge":               { ko: "브리지론",          en: "Bridge"           },
  "term-loan-a":          { ko: "텀론 A",             en: "Term Loan A"      },
  "term-loan-b":          { ko: "텀론 B",             en: "Term Loan B"      },
  "revolving":            { ko: "리볼빙",             en: "Revolving"        },
  "bonds":                { ko: "채권",               en: "Bonds"            },
  "acquisition-facility": { ko: "인수 패실리티",      en: "Acq. Facility"   },
  "other":                { ko: "기타",               en: "Other"            },
};

const ARRANGER_ROLE_LABEL: Record<SyndicatedLoanOverview["arrangers"][number]["role"], { ko: string; en: string }> = {
  "bookrunner":              { ko: "북러너",           en: "Bookrunner"            },
  "mandated-lead-arranger":  { ko: "주간사 (MLA)",     en: "Mandated Lead Arranger" },
  "lead-arranger":           { ko: "주선은행",         en: "Lead Arranger"         },
  "co-arranger":             { ko: "공동 주선",        en: "Co-Arranger"           },
  "participant":             { ko: "참여은행",         en: "Participant"           },
};

export default function SyndicatedLoanSection({ data, lang }: { data: SyndicatedLoanOverview; lang: Lang }) {
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
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700 mb-4">
          <span>🏦</span>
          <span>{data.angle}</span>
        </div>
        <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed">
          {data.body}
        </p>
      </motion.div>

      {/* ── 핵심 지표 ─────────────────────────────────────── */}
      <motion.div variants={fadeUp(0.05)}>
        <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
          {ko ? "신디론 핵심 지표" : "Syndicated Loan Key Metrics"}
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

      {/* ── 트랑쉐 / 패실리티 구조 ─────────────────────────────────────── */}
      {data.tranches.length > 0 && (
        <motion.div variants={fadeUp(0.08)}>
          <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
            {ko ? "패실리티 구조 (Facility Structure)" : "Facility Structure"}
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
                      ko ? "패실리티" : "Facility",
                      ko ? "금액" : "Amount",
                      ko ? "주선은행" : "Arrangers",
                      ko ? "가격/스프레드" : "Pricing",
                      ko ? "만기" : "Maturity",
                      ko ? "종류" : "Type",
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
                      <td className="py-2.5 px-3 text-[11px] text-gray-500 dark:text-gray-400 max-w-[160px]">
                        {t.arrangers}
                      </td>
                      <td className="py-2.5 px-3 text-[12px] font-mono text-cyan-600 dark:text-cyan-400 whitespace-nowrap">
                        {t.pricing}
                      </td>
                      <td className="py-2.5 px-3 text-[12px] text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {t.maturity}
                      </td>
                      <td className="py-2.5 px-3 whitespace-nowrap">
                        <span className="text-[10px] font-semibold bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 px-2 py-0.5 rounded-full">
                          {TRANCHE_TYPE_LABEL[t.type][ko ? "ko" : "en"]}
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

      {/* ── 주선은행 ─────────────────────────────────────── */}
      {data.arrangers.length > 0 && (
        <motion.div variants={fadeUp(0.1)}>
          <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
            {ko ? "주선은행 (Arrangers)" : "Arranging Banks"}
          </p>
          <div className="flex flex-wrap gap-2">
            {data.arrangers.map((a, i) => (
              <motion.div key={i} variants={fadeUp(i * 0.04)}>
                <div className="flex items-center gap-2 rounded-full border border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20 px-3 py-1.5">
                  <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 uppercase">
                    {ARRANGER_ROLE_LABEL[a.role][ko ? "ko" : "en"]}
                  </span>
                  <span className="w-px h-3 bg-cyan-200 dark:bg-cyan-700" />
                  <span className="text-[12px] font-semibold text-gray-700 dark:text-gray-300">{a.name}</span>
                  {a.commitmentDisplay && (
                    <span className="text-[10px] text-gray-400 dark:text-gray-500">{a.commitmentDisplay}</span>
                  )}
                  {a.note && (
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 italic">{a.note}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── 타임라인 ─────────────────────────────────────── */}
      {data.timeline.length > 0 && (
        <motion.div variants={fadeUp(0.1)}>
          <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
            {ko ? "딜 타임라인 × 플레이어 임팩트" : "Deal Timeline × Player Impact"}
          </p>
          <div className="relative space-y-0">
            {data.timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp(i * 0.06)}
                className="relative flex gap-4 pl-4"
              >
                {/* 세로 선 */}
                {i < data.timeline.length - 1 && (
                  <div className="absolute left-[1.125rem] top-8 bottom-0 w-px bg-cyan-200 dark:bg-cyan-800" />
                )}
                {/* 날짜 원 */}
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500 dark:bg-cyan-600 flex items-center justify-center mt-1.5 z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                {/* 내용 */}
                <div className="pb-5 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-wide">
                      {item.date}
                    </span>
                    <span className="text-[13px] font-bold text-gray-800 dark:text-gray-200">
                      {item.event}
                    </span>
                  </div>
                  <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed mb-1.5">
                    {item.detail}
                  </p>
                  {item.playerImpact && (
                    <div className="inline-flex items-start gap-1.5 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-100 dark:border-cyan-800 rounded-lg px-2.5 py-1.5">
                      <span className="text-[10px] font-bold text-cyan-500 dark:text-cyan-400 flex-shrink-0 mt-px">
                        💼
                      </span>
                      <span className="text-[11px] text-cyan-700 dark:text-cyan-300 leading-snug">
                        {item.playerImpact}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── 신디론 핵심 교훈 ─────────────────────────────────────── */}
      <motion.div variants={fadeUp(0.12)}>
        <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
          {ko ? "이 딜이 가르쳐주는 신디론 교훈" : "Syndicated Loan Lessons From This Deal"}
        </p>
        <div className="space-y-3">
          {data.lessons.map((lesson, i) => (
            <motion.div
              key={i}
              variants={fadeUp(i * 0.06)}
              className="flex gap-3 rounded-xl border border-cyan-100 dark:border-cyan-900/40 bg-cyan-50/50 dark:bg-cyan-900/10 p-4"
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

      {/* ── 연관 신디론 챕터 ─────────────────────────────────────── */}
      <motion.div variants={fadeUp(0.14)}>
        <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
          {ko ? "이 딜로 이해하는 신디케이티드론 챕터" : "Syndicated Loan Chapters This Deal Illustrates"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.relatedChapters.map((ch, i) => (
            <motion.div key={i} variants={fadeUp(i * 0.05)}>
              <Link
                href={`/market-101/${ch.slug}`}
                className="group flex gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 hover:border-cyan-300 dark:hover:border-cyan-700 hover:bg-cyan-50/30 dark:hover:bg-cyan-900/10 transition-colors"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center">
                  <span className="text-[10px] font-black text-cyan-700 dark:text-cyan-300">{ch.chapterNum}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                    {ch.title}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-snug mt-0.5">
                    {ch.whyRelevant}
                  </p>
                </div>
                <span className="flex-shrink-0 text-gray-300 dark:text-gray-600 group-hover:text-cyan-400 dark:group-hover:text-cyan-600 transition-colors text-lg">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
