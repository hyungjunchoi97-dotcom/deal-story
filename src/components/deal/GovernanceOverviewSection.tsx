"use client";

import { motion } from "framer-motion";
import type {
  GovernanceOverview,
  ShareholderEntry,
  ShareholderAlignment,
  GovernanceIssueSeverity,
  ActivismDemandResult,
} from "@/lib/deal-data";

// ── 색상 맵 ───────────────────────────────────────────────────

const ALIGNMENT_BAR: Record<ShareholderAlignment, string> = {
  pro:     "bg-blue-500",
  anti:    "bg-red-500",
  neutral: "bg-amber-400",
};

const ALIGNMENT_CARD: Record<ShareholderAlignment, string> = {
  pro:     "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40",
  anti:    "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/40",
  neutral: "border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30",
};

const ALIGNMENT_BADGE: Record<ShareholderAlignment, string> = {
  pro:     "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
  anti:    "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
  neutral: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
};

const ALIGNMENT_LABEL: Record<ShareholderAlignment, { ko: string; en: string }> = {
  pro:     { ko: "찬성", en: "Pro" },
  anti:    { ko: "반대", en: "Anti" },
  neutral: { ko: "중립", en: "Neutral" },
};

const SEVERITY_STYLES: Record<GovernanceIssueSeverity, { badge: string; dot: string }> = {
  critical: {
    badge: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800",
    dot:   "bg-red-500",
  },
  high: {
    badge: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800",
    dot:   "bg-orange-400",
  },
  medium: {
    badge: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-800",
    dot:   "bg-yellow-400",
  },
};

const SEVERITY_LABEL: Record<GovernanceIssueSeverity, string> = {
  critical: "CRITICAL",
  high:     "HIGH",
  medium:   "MEDIUM",
};

const DEMAND_RESULT_STYLES: Record<ActivismDemandResult, { cls: string; icon: string }> = {
  won:     { cls: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300", icon: "✓" },
  partial: { cls: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",        icon: "△" },
  lost:    { cls: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300",               icon: "✗" },
  ongoing: { cls: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",            icon: "•" },
};

const DEMAND_RESULT_LABEL: Record<ActivismDemandResult, { ko: string; en: string }> = {
  won:     { ko: "수용",   en: "Won" },
  partial: { ko: "부분수용", en: "Partial" },
  lost:    { ko: "부결",   en: "Lost" },
  ongoing: { ko: "진행중", en: "Ongoing" },
};

// ── 서브 컴포넌트: 주주 지도 ──────────────────────────────────

function ShareholderMap({
  shareholders,
  lang,
}: {
  shareholders: ShareholderEntry[];
  lang: "ko" | "en";
}) {
  const sorted = [...shareholders].sort((a, b) => b.stakePct - a.stakePct);
  const totalKnown = sorted.reduce((s, sh) => s + sh.stakePct, 0);

  return (
    <div className="rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 overflow-hidden">
      {/* 제목 바 */}
      <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
        <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          {lang === "ko" ? "주요 주주 구성" : "Shareholder Map"}
        </span>
        <div className="flex items-center gap-3 text-[10px] text-gray-400 dark:text-gray-500">
          {(["pro", "anti", "neutral"] as ShareholderAlignment[]).map((a) => (
            <span key={a} className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${ALIGNMENT_BAR[a]}`} />
              {ALIGNMENT_LABEL[a][lang]}
            </span>
          ))}
        </div>
      </div>

      {/* 통합 지분율 바 */}
      <div className="px-5 pt-4 pb-2">
        <div className="flex h-3 rounded-full overflow-hidden gap-px">
          {sorted.map((sh, i) => (
            <motion.div
              key={sh.id}
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              style={{ width: `${(sh.stakePct / Math.max(totalKnown, 100)) * 100}%` }}
              className={`${ALIGNMENT_BAR[sh.alignment]} opacity-80`}
            />
          ))}
          {/* 잔여 지분 (기타 소수주주) */}
          {totalKnown < 100 && (
            <div
              style={{ width: `${100 - totalKnown}%` }}
              className="bg-gray-100 dark:bg-gray-700/40"
            />
          )}
        </div>
      </div>

      {/* 주주 카드 목록 */}
      <div className="px-5 pb-5 space-y-2.5 mt-2">
        {sorted.map((sh, i) => (
          <motion.div
            key={sh.id}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
            className={`rounded-xl border px-4 py-3 ${ALIGNMENT_CARD[sh.alignment]}`}
          >
            <div className="flex items-start justify-between gap-4">
              {/* 좌: 주주 정보 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-tight">
                    {sh.label}
                  </span>
                  {sh.sub && (
                    <span className="text-[11px] text-gray-400 dark:text-gray-500">{sh.sub}</span>
                  )}
                </div>
              </div>
              {/* 우: 지분율 + 정렬 뱃지 */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-sm font-bold text-gray-700 dark:text-gray-300 tabular-nums">
                  {sh.stake}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ALIGNMENT_BADGE[sh.alignment]}`}
                >
                  {ALIGNMENT_LABEL[sh.alignment][lang]}
                </span>
              </div>
            </div>
            {/* 지분율 바 */}
            <div className="mt-2.5 h-1.5 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.min((sh.stakePct / 35) * 100, 100)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                className={`h-full rounded-full ${ALIGNMENT_BAR[sh.alignment]}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── 서브 컴포넌트: 이사회 구성 ────────────────────────────────

function BoardComposition({
  board,
  lang,
}: {
  board: GovernanceOverview["board"];
  lang: "ko" | "en";
}) {
  const indPct = Math.round((board.independent / board.total) * 100);
  const affPct = 100 - indPct;

  return (
    <div className="rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5 flex flex-col gap-4">
      <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
        {lang === "ko" ? "이사회 구성" : "Board Composition"}
      </span>

      {/* 원형 표시 */}
      <div className="flex items-center gap-5">
        <div className="relative w-16 h-16 flex-shrink-0">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3.8"
              className="dark:stroke-gray-700" />
            <motion.circle
              cx="18" cy="18" r="15.9" fill="none"
              stroke="#3b82f6" strokeWidth="3.8"
              strokeLinecap="round"
              strokeDasharray={`${indPct} 100`}
              initial={{ strokeDasharray: "0 100" }}
              whileInView={{ strokeDasharray: `${indPct} 100` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-[13px] font-bold text-gray-700 dark:text-gray-200">
            {board.total}
          </span>
        </div>

        <div className="flex flex-col gap-2 flex-1">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 flex-shrink-0" />
              {lang === "ko" ? "사외(독립)" : "Independent"}
            </span>
            <span className="font-bold text-gray-800 dark:text-gray-200">
              {board.independent}명 <span className="font-normal text-gray-400 text-xs">({indPct}%)</span>
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="w-2.5 h-2.5 rounded-sm bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
              {lang === "ko" ? "사내(계열)" : "Affiliated"}
            </span>
            <span className="font-bold text-gray-800 dark:text-gray-200">
              {board.affiliated}명 <span className="font-normal text-gray-400 text-xs">({affPct}%)</span>
            </span>
          </div>
        </div>
      </div>

      {/* 분절 바 */}
      <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
        <motion.div
          className="bg-blue-500 rounded-l-full"
          style={{ width: `${indPct}%` }}
          initial={{ scaleX: 0, transformOrigin: "left" }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="bg-gray-300 dark:bg-gray-600 rounded-r-full flex-1"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        />
      </div>

      {board.note && (
        <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed">{board.note}</p>
      )}
    </div>
  );
}

// ── 서브 컴포넌트: 주가 임팩트 타임라인 ─────────────────────

function StockImpactTimeline({
  stockImpact,
  lang,
}: {
  stockImpact: GovernanceOverview["stockImpact"];
  lang: "ko" | "en";
}) {
  const steps = [
    {
      label: lang === "ko" ? "캠페인 전" : "Pre-Campaign",
      value: stockImpact.preCampaign,
      color: "text-gray-700 dark:text-gray-300",
      dot:   "bg-gray-400",
      line:  "from-gray-300 to-amber-400 dark:from-gray-600 dark:to-amber-500",
    },
    {
      label: lang === "ko" ? "캠페인 피크" : "Campaign Peak",
      value: stockImpact.peakDuringCampaign,
      color: "text-amber-600 dark:text-amber-400",
      dot:   "bg-amber-400",
      line:  "from-amber-400 to-blue-400 dark:from-amber-500 dark:to-blue-500",
    },
    {
      label: lang === "ko" ? "결과" : "Outcome",
      value: stockImpact.postCampaign,
      color: "text-blue-600 dark:text-blue-400",
      dot:   "bg-blue-500",
      line:  null,
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5">
      <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-5">
        {lang === "ko" ? "주가 임팩트" : "Stock Price Impact"}
      </span>

      {/* 타임라인 */}
      <div className="flex items-start gap-0">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center flex-1">
            {/* 가격 */}
            <motion.span
              initial={{ opacity: 0, y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className={`text-base font-black tabular-nums mb-2 ${step.color}`}
            >
              {step.value}
            </motion.span>

            {/* 닷 + 라인 */}
            <div className="flex items-center w-full">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.15 }}
                className={`w-3 h-3 rounded-full flex-shrink-0 ${step.dot} ring-2 ring-white dark:ring-gray-900`}
              />
              {step.line && (
                <motion.div
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 + 0.1 }}
                  className={`flex-1 h-0.5 bg-gradient-to-r ${step.line}`}
                />
              )}
            </div>

            {/* 레이블 */}
            <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 text-center leading-tight px-1">
              {step.label}
            </span>
          </div>
        ))}
      </div>

      {stockImpact.note && (
        <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-4 leading-relaxed border-t border-gray-100 dark:border-gray-700/50 pt-3">
          {stockImpact.note}
        </p>
      )}
    </div>
  );
}

// ── 메인 컴포넌트 ─────────────────────────────────────────────

interface GovernanceOverviewSectionProps {
  data: GovernanceOverview;
  lang?: "ko" | "en";
}

export default function GovernanceOverviewSection({
  data,
  lang = "ko",
}: GovernanceOverviewSectionProps) {
  return (
    <div className="space-y-6">
      {/* 개요 텍스트 */}
      <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed">
        {data.body}
      </p>

      {/* ── Row 1: 주주 지도 (풀 폭) */}
      <ShareholderMap shareholders={data.shareholders} lang={lang} />

      {/* ── Row 2: 이사회 구성 + 주가 임팩트 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BoardComposition board={data.board} lang={lang} />
        <StockImpactTimeline stockImpact={data.stockImpact} lang={lang} />
      </div>

      {/* ── Row 3: 핵심 지배구조 이슈 */}
      <div className="rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-700/60">
          <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            {lang === "ko" ? "핵심 지배구조 이슈" : "Key Governance Issues"}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 dark:bg-gray-700/30">
          {data.issues.map((issue, i) => (
            <motion.div
              key={issue.title}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="bg-white dark:bg-gray-900 p-4"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${SEVERITY_STYLES[issue.severity].dot}`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 leading-snug">
                      {issue.title}
                    </span>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded flex-shrink-0 ${SEVERITY_STYLES[issue.severity].badge}`}
                    >
                      {SEVERITY_LABEL[issue.severity]}
                    </span>
                  </div>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    {issue.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Row 4: 행동주의 요구사항 & 결과 */}
      <div className="rounded-2xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 dark:border-gray-700/60">
          <span className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
            {lang === "ko" ? "행동주의 요구사항 & 결과" : "Activist Demands & Outcomes"}
          </span>
        </div>
        <div className="divide-y divide-gray-50 dark:divide-gray-800">
          {data.demands.map((d, i) => {
            const style = DEMAND_RESULT_STYLES[d.result];
            const label = DEMAND_RESULT_LABEL[d.result][lang];
            return (
              <motion.div
                key={d.demand}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-start gap-4 px-5 py-3.5"
              >
                {/* 아이콘 */}
                <span
                  className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${style.cls}`}
                >
                  {style.icon}
                </span>
                {/* 요구사항 텍스트 */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13.5px] text-gray-700 dark:text-gray-300 leading-snug">
                    {d.demand}
                  </p>
                  {d.note && (
                    <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 leading-snug">
                      {d.note}
                    </p>
                  )}
                </div>
                {/* 결과 뱃지 */}
                <span
                  className={`flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ${style.cls}`}
                >
                  {label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
