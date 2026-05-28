/**
 * CategoryHero — 모든 카테고리 인덱스 페이지(Deals / Market / Stories / Deal 101 / Market 101 / Notes)
 * 의 hero 영역을 통일하는 공유 컴포넌트.
 *
 *  - Breadcrumb (Home › Section)
 *  - Title (H1, text-3xl sm:text-4xl)
 *  - Description (text-base sm:text-lg)
 *  - Cross-link pills (각 페이지 간 일관된 컬러 코딩)
 *
 *  Eyebrow badge 는 의도적으로 제거 — 메인 랜딩과 동일 미니멀 톤 유지.
 */
import Link from "next/link";
import type { Lang } from "@/lib/i18n";

export type CrossLinkKey =
  | "deals"
  | "market"
  | "stories"
  | "deal-101"
  | "market-101"
  | "notes";

export interface CrossLink {
  key: CrossLinkKey;
  href: string;
  label: string;
  badge: string; // 작은 뱃지 안에 들어갈 짧은 글자 (e.g. "D", "M", "101")
}

/**
 * 페이지 간 일관된 컬러 코딩.
 * 같은 키는 어느 페이지에서 호출되든 같은 색으로 보이도록 함.
 */
const CROSSLINK_STYLES: Record<
  CrossLinkKey,
  {
    text: string;
    bg: string;
    border: string;
    hover: string;
    badgeBg: string;
  }
> = {
  deals: {
    text: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800/60",
    hover: "hover:bg-blue-100 dark:hover:bg-blue-900/40",
    badgeBg: "bg-blue-600",
  },
  market: {
    text: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-800/60",
    hover: "hover:bg-teal-100 dark:hover:bg-teal-900/40",
    badgeBg: "bg-teal-600",
  },
  stories: {
    text: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-800/60",
    hover: "hover:bg-orange-100 dark:hover:bg-orange-900/40",
    badgeBg: "bg-orange-600",
  },
  "deal-101": {
    text: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-800/60",
    hover: "hover:bg-violet-100 dark:hover:bg-violet-900/40",
    badgeBg: "bg-violet-600",
  },
  "market-101": {
    text: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-800/60",
    hover: "hover:bg-emerald-100 dark:hover:bg-emerald-900/40",
    badgeBg: "bg-emerald-600",
  },
  notes: {
    text: "text-slate-600 dark:text-slate-400",
    bg: "bg-slate-50 dark:bg-slate-900/40",
    border: "border-slate-200 dark:border-slate-700/60",
    hover: "hover:bg-slate-100 dark:hover:bg-slate-800/60",
    badgeBg: "bg-slate-600",
  },
};

export interface CategoryHeroProps {
  lang: Lang;
  /** 브레드크럼에 표시될 현재 섹션 이름 (e.g. "Deal Archive", "Market 101") */
  breadcrumb: string;
  /** H1 제목 */
  title: string;
  /** 한 줄 설명 */
  description: string;
  /** 다른 섹션으로의 크로스링크 (1~3개 권장, 0개면 안 보임) */
  crossLinks?: CrossLink[];
}

export default function CategoryHero({
  lang,
  breadcrumb,
  title,
  description,
  crossLinks = [],
}: CategoryHeroProps) {
  const ko = lang === "ko";
  const homeHref = ko ? "/" : "/en";
  const homeLabel = ko ? "홈" : "Home";

  return (
    <section className="border-b border-gray-200/60 dark:border-gray-700/60">
      <div className="max-w-3xl mx-auto px-5 py-10 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
          <Link
            href={homeHref}
            className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            {homeLabel}
          </Link>
          <span aria-hidden>›</span>
          <span className="text-gray-600 dark:text-gray-300 font-medium">
            {breadcrumb}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-3 text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl">
          {description}
        </p>

        {/* Cross-link pills */}
        {crossLinks.length > 0 && (
          <div className="mt-5 flex items-center gap-2 flex-wrap">
            {crossLinks.map((link) => {
              const style = CROSSLINK_STYLES[link.key];
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className={`inline-flex items-center gap-1.5 text-xs ${style.text} ${style.bg} border ${style.border} rounded-full px-3 py-1 ${style.hover} transition-colors`}
                >
                  <span
                    className={`font-bold text-[10px] ${style.badgeBg} text-white rounded px-1 py-0.5 leading-none`}
                  >
                    {link.badge}
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
