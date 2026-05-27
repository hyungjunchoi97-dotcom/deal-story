"use client";

import { motion } from "framer-motion";
import type {
  RestructuringOverview,
  RestructuringMethodType,
} from "@/lib/deal-data";

// ── 색상·레이블 맵 ─────────────────────────────────────────────

const METHOD_META: Record<
  RestructuringMethodType,
  { label: { ko: string; en: string }; color: string; icon: string }
> = {
  "tax-free-spinoff": {
    label: { ko: "면세 분사 (Section 355)", en: "Tax-Free Spinoff (§355)" },
    color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
    icon: "🔀",
  },
  "three-way-breakup": {
    label: { ko: "3분할 면세 분사", en: "Three-Way Tax-Free Breakup" },
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    icon: "⚡",
  },
  "carve-out-ipo": {
    label: { ko: "카브아웃 IPO", en: "Carve-Out IPO" },
    color: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
    icon: "📤",
  },
  divestiture: {
    label: { ko: "사업부 매각", en: "Divestiture" },
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
    icon: "💰",
  },
  "bankruptcy-reorg": {
    label: { ko: "파산 재구성", en: "Bankruptcy Reorganization" },
    color: "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
    icon: "⚖️",
  },
  "debt-restructuring": {
    label: { ko: "부채 재구조화", en: "Debt Restructuring" },
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
    icon: "📋",
  },
};

const IMPACT_STYLES = {
  positive: {
    card: "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30",
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
    dot: "bg-emerald-500",
    label: { ko: "긍정적", en: "Positive" },
    icon: "↑",
  },
  negative: {
    card: "border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/30",
    badge: "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-300",
    dot: "bg-rose-500",
    label: { ko: "부정적", en: "Negative" },
    icon: "↓",
  },
  mixed: {
    card: "border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30",
    badge: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300",
    dot: "bg-amber-400",
    label: { ko: "복합적", en: "Mixed" },
    icon: "≈",
  },
  neutral: {
    card: "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30",
    badge: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    dot: "bg-gray-400",
    label: { ko: "중립", en: "Neutral" },
    icon: "─",
  },
};

const LABELS = {
  ko: {
    trigger: "구조조정 촉발 배경",
    triggerDetail: "상세 배경",
    methodology: "구조조정 방법론",
    whyThisMethod: "왜 이 방법을 선택했나",
    alternativesRejected: "채택하지 않은 대안",
    rejectionReason: "채택 안 한 이유",
    theory: "핵심 이론 프레임워크",
    howApplied: "이 딜에의 적용",
    executionSteps: "실행 단계",
    stakeholders: "이해관계자 영향",
    beforeAfter: "Before / After 비교",
    before: "구조조정 전",
    after: "구조조정 후",
    change: "변화",
    marketImpact: "주가·시장 임팩트",
    announcement: "발표 당일",
    shortTerm: "단기 (6개월)",
    longTerm: "장기 (3년+)",
    context: "시장 맥락",
  },
  en: {
    trigger: "Why Restructure",
    triggerDetail: "Background Detail",
    methodology: "Restructuring Methodology",
    whyThisMethod: "Why This Method",
    alternativesRejected: "Alternatives Rejected",
    rejectionReason: "Reason for Rejection",
    theory: "Theoretical Framework",
    howApplied: "Application to This Deal",
    executionSteps: "Execution Timeline",
    stakeholders: "Stakeholder Impact",
    beforeAfter: "Before / After",
    before: "Before",
    after: "After",
    change: "Change",
    marketImpact: "Market & Price Impact",
    announcement: "Announcement Day",
    shortTerm: "Short-Term (6M)",
    longTerm: "Long-Term (3Y+)",
    context: "Market Context",
  },
};

// ── 애니메이션 ────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

// ── Props ─────────────────────────────────────────────────────

interface Props {
  data: RestructuringOverview;
  lang?: "ko" | "en";
}

// ── 메인 컴포넌트 ─────────────────────────────────────────────

export default function RestructuringSection({ data, lang = "ko" }: Props) {
  const t = LABELS[lang];
  const methodMeta = METHOD_META[data.method];

  return (
    <div className="space-y-10">

      {/* ── 인트로 */}
      <motion.p
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="text-base text-gray-600 dark:text-gray-400 leading-relaxed"
      >
        {data.body}
      </motion.p>

      {/* ── 1. 왜 구조조정? */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/70 dark:bg-amber-950/20 p-5 space-y-3"
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">⚡</span>
          <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300 uppercase tracking-widest">
            {t.trigger}
          </h4>
        </div>
        <p className="font-semibold text-base text-gray-900 dark:text-gray-50 leading-snug">
          {data.trigger}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-amber-100 dark:border-amber-800/40 pt-3">
          {data.triggerDetail}
        </p>
      </motion.div>

      {/* ── 2. 방법론 */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="rounded-2xl border border-indigo-200 dark:border-indigo-800/60 bg-white dark:bg-zinc-900 overflow-hidden"
      >
        {/* 헤더 */}
        <div className="px-5 py-4 border-b border-indigo-100 dark:border-indigo-900/40 flex items-center gap-3">
          <span className="text-xl">{methodMeta.icon}</span>
          <div>
            <p className="text-[10px] font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-0.5">
              {t.methodology}
            </p>
            <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full ${methodMeta.color}`}>
              {methodMeta.label[lang]}
            </span>
          </div>
        </div>

        <div className="p-5 space-y-5">
          {/* 왜 이 방법 */}
          <div>
            <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
              {t.whyThisMethod}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {data.whyThisMethod}
            </p>
          </div>

          {/* 채택하지 않은 대안 */}
          {data.methodVsAlternatives.length > 0 && (
            <div>
              <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                {t.alternativesRejected}
              </p>
              <div className="space-y-2">
                {data.methodVsAlternatives.map((alt, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 px-4 py-3"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[10px] font-bold text-gray-500 flex-shrink-0">
                      ✕
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-snug">
                        {alt.method}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5 leading-relaxed">
                        {alt.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* ── 3. 이론 프레임워크 */}
      <div>
        <h3 className="text-base font-bold text-gray-900 dark:text-gray-50 mb-4 flex items-center gap-2">
          <span className="text-lg">📚</span> {t.theory}
        </h3>
        <div className="space-y-3">
          {data.theoreticalInsights.map((insight, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              variants={fadeLeft}
              className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900/60 overflow-hidden"
            >
              {/* 컨셉 제목 */}
              <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800/60 border-b border-gray-100 dark:border-gray-700/50">
                <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                  {insight.concept}
                </p>
              </div>
              <div className="px-4 py-3 space-y-2.5">
                {/* 이론 설명 */}
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {insight.explanation}
                </p>
                {/* 이 딜에의 적용 */}
                <div className="flex items-start gap-2 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg px-3 py-2">
                  <span className="text-indigo-400 dark:text-indigo-500 text-[10px] font-bold uppercase tracking-wide mt-0.5 flex-shrink-0">
                    → {t.howApplied}
                  </span>
                  <p className="text-xs text-indigo-700 dark:text-indigo-300 leading-relaxed">
                    {insight.howApplied}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 4. 실행 단계 */}
      <div>
        <h3 className="text-base font-bold text-gray-900 dark:text-gray-50 mb-4 flex items-center gap-2">
          <span className="text-lg">📋</span> {t.executionSteps}
        </h3>
        <div className="relative">
          {/* 수직 라인 */}
          <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gradient-to-b from-indigo-300 via-indigo-200 to-indigo-100 dark:from-indigo-700 dark:via-indigo-800 dark:to-indigo-900 pointer-events-none" />
          <div className="space-y-4">
            {data.executionSteps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
                variants={fadeLeft}
                className="flex gap-4 items-start"
              >
                {/* 인덱스 버블 */}
                <div className="w-11 h-11 rounded-full bg-indigo-600 dark:bg-indigo-700 flex items-center justify-center flex-shrink-0 z-10 shadow-sm">
                  <span className="text-white text-[11px] font-black">{i + 1}</span>
                </div>
                {/* 카드 */}
                <div className="flex-1 min-w-0 rounded-xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900/60 p-4">
                  <div className="flex items-start justify-between gap-2 flex-wrap mb-1.5">
                    <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                      {step.phase}
                    </span>
                    <span className="text-[11px] font-mono text-gray-400 dark:text-gray-500">
                      {step.date}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-gray-900 dark:text-gray-50 leading-snug mb-1">
                    {step.action}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.detail}
                  </p>
                  {step.financialNote && (
                    <div className="mt-2 inline-flex items-center gap-1 text-[10px] font-mono font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full px-2.5 py-0.5">
                      {step.financialNote}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. 이해관계자 영향 */}
      <div>
        <h3 className="text-base font-bold text-gray-900 dark:text-gray-50 mb-4 flex items-center gap-2">
          <span className="text-lg">👥</span> {t.stakeholders}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {data.stakeholders.map((s, i) => {
            const style = IMPACT_STYLES[s.impact];
            return (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className={`rounded-xl border p-4 space-y-2 ${style.card}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{s.icon}</span>
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-tight">
                      {s.name}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold rounded-full px-2 py-0.5 flex-shrink-0 ${style.badge}`}>
                    {style.icon} {style.label[lang]}
                  </span>
                </div>
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 leading-snug">
                  {s.summary}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {s.detail}
                </p>
                {s.metric && (
                  <div className="pt-1">
                    <span className="text-[10px] font-mono font-bold bg-white/60 dark:bg-black/20 rounded-full px-2.5 py-0.5 text-gray-700 dark:text-gray-300">
                      {s.metric}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── 6. Before / After */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 overflow-hidden"
      >
        <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/60">
          <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            📊 {t.beforeAfter}
          </span>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {data.beforeAfter.map((row, i) => (
            <div key={i} className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[2fr_2fr_2fr_1.5fr] gap-2 px-4 py-3 items-center">
              {/* 지표 */}
              <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 col-span-1">
                {row.metric}
              </span>
              {/* Before */}
              <span className="text-xs text-gray-500 dark:text-gray-500 text-center">
                {row.before}
              </span>
              {/* After */}
              <span className="text-xs font-bold text-gray-800 dark:text-gray-200 text-center">
                {row.after}
              </span>
              {/* Change */}
              {row.change && (
                <span
                  className={`text-[10px] font-bold text-right hidden sm:block ${
                    row.isPositive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-rose-600 dark:text-rose-400"
                  }`}
                >
                  {row.change}
                </span>
              )}
            </div>
          ))}
        </div>
        {/* 컬럼 헤더 */}
        <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/40 grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[2fr_2fr_2fr_1.5fr] gap-2">
          <span className="text-[10px] text-gray-400 uppercase tracking-wide">{t.before.split(" ")[0]}</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-wide text-center">{t.before}</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-wide text-center">{t.after}</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-wide text-right hidden sm:block">{t.change}</span>
        </div>
      </motion.div>

      {/* ── 7. 주가·시장 임팩트 */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-5"
      >
        <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-5 flex items-center gap-2">
          <span>📈</span> {t.marketImpact}
        </h4>

        {/* 3-포인트 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {[
            {
              label: t.announcement,
              value: data.marketImpact.announcementReturn,
              color: "text-amber-600 dark:text-amber-400",
              bg: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800",
              dot: "bg-amber-400",
            },
            {
              label: t.shortTerm,
              value: data.marketImpact.shortTermReturn,
              color: "text-indigo-600 dark:text-indigo-400",
              bg: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800",
              dot: "bg-indigo-500",
            },
            {
              label: t.longTerm,
              value: data.marketImpact.longTermReturn,
              color: "text-emerald-600 dark:text-emerald-400",
              bg: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800",
              dot: "bg-emerald-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-xl border p-3.5 flex flex-col gap-1.5 ${item.bg}`}
            >
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${item.dot}`} />
                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {item.label}
                </span>
              </div>
              <p className={`text-base font-black font-mono leading-tight ${item.color}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* 시장 맥락 */}
        <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-3">
          {data.marketImpact.contextNote}
        </p>
      </motion.div>

    </div>
  );
}
