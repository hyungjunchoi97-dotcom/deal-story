"use client";

/**
 * SourceBox — After Pax Americana 시리즈 전용 1차 자료 인용 카드
 *
 * 챕터 내에서 인용된 1차 자료를 부각시키는 박스.
 * 학술 논문·정부 자료·국제기구 보고서를 구분된 형식으로 표시.
 */

import { motion } from "framer-motion";

type SourceType =
  | "primary"     // 1차 자료 (정부·국제기구·기업 공시)
  | "academic"    // 학술 논문·서적
  | "thinktank"   // 싱크탱크·정책 연구소
  | "industry"    // 산업·시장 분석
  | "news"        // 장기 보도·심층 기사
  | "critical";   // 비판적 관점·반대 의견

type SourceBoxProps = {
  type: SourceType;
  author: string;
  title: string;
  source?: string;       // 발행 기관 (e.g., "IEA", "NBER")
  year?: string;         // 발행 연도/날짜
  url?: string;
  excerpt?: string;      // 핵심 인용문 또는 요약
  excerptEn?: string;
  page?: string;         // 페이지 또는 챕터
  lang?: "ko" | "en";
};

const TYPE_META: Record<
  SourceType,
  { label: string; labelEn: string; icon: string; color: string; bg: string }
> = {
  primary:    { label: "1차 자료",   labelEn: "Primary",     icon: "📊", color: "#0ea5e9", bg: "bg-sky-50 dark:bg-sky-900/20" },
  academic:   { label: "학술",      labelEn: "Academic",    icon: "📚", color: "#8b5cf6", bg: "bg-violet-50 dark:bg-violet-900/20" },
  thinktank:  { label: "싱크탱크",  labelEn: "Think Tank",  icon: "🏛️", color: "#dc2626", bg: "bg-red-50 dark:bg-red-900/20" },
  industry:   { label: "산업",      labelEn: "Industry",    icon: "🏭", color: "#f59e0b", bg: "bg-amber-50 dark:bg-amber-900/20" },
  news:       { label: "심층 보도", labelEn: "Long-form",   icon: "📰", color: "#10b981", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
  critical:   { label: "반대 시각", labelEn: "Critical",    icon: "⚠️", color: "#6b7280", bg: "bg-gray-100 dark:bg-gray-800/40" },
};

export default function SourceBox({
  type,
  author,
  title,
  source,
  year,
  url,
  excerpt,
  excerptEn,
  page,
  lang = "ko",
}: SourceBoxProps) {
  const ko = lang === "ko";
  const m = TYPE_META[type];

  const Inner = (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className={`group relative rounded-2xl border-l-4 ${m.bg} p-5 sm:p-6 transition-colors`}
      style={{ borderLeftColor: m.color }}
    >
      {/* Type badge */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-base">{m.icon}</span>
        <span
          className="text-[10px] font-bold uppercase tracking-widest"
          style={{ color: m.color }}
        >
          {ko ? m.label : m.labelEn}
        </span>
        {url && (
          <span
            className="ml-auto text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: m.color }}
          >
            ↗
          </span>
        )}
      </div>

      {/* Citation */}
      <div className="mb-2">
        <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 leading-snug">
          {author}
        </p>
        <p className="text-[12.5px] text-gray-700 dark:text-gray-300 italic leading-snug mt-0.5">
          {title}
        </p>
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
          {[source, year, page].filter(Boolean).join(" · ")}
        </p>
      </div>

      {/* Excerpt */}
      {(excerpt || excerptEn) && (
        <div className="mt-3 pt-3 border-t border-gray-200/60 dark:border-gray-700/60">
          <p className="text-[12.5px] text-gray-600 dark:text-gray-400 leading-relaxed">
            “{ko ? excerpt : (excerptEn ?? excerpt)}”
          </p>
        </div>
      )}
    </motion.div>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {Inner}
      </a>
    );
  }
  return Inner;
}
