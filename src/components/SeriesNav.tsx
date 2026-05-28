/**
 * SeriesNav — 시리즈 글 하단의 이전/다음 네비게이션
 *
 * 사용 예:
 *   <SeriesNav
 *     prev={{ href: "/notes/dollar-hegemony-1", title: "달러 패권의 역사" }}
 *     next={{ href: "/notes/dollar-hegemony-3", title: "탈달러화는 일어나고 있는가" }}
 *     lang="en"
 *   />
 */
import Link from "next/link";

type NavItem = {
  href: string;
  title: string;
  /** 시리즈 내 순서 라벨 (예: "1편", "Part 2") */
  orderLabel?: string;
};

type Props = {
  prev: NavItem | null;
  next: NavItem | null;
  lang?: "ko" | "en";
  /** 시리즈 제목 (예: "달러 패권 시리즈") — 헤더에 표시 */
  seriesTitle?: string;
};

export default function SeriesNav({ prev, next, lang = "ko", seriesTitle }: Props) {
  if (!prev && !next) return null;
  const ko = lang !== "en";

  return (
    <nav
      aria-label={ko ? "시리즈 네비게이션" : "Series navigation"}
      className="mt-12 mb-4 border-t border-gray-200 dark:border-gray-700/60 pt-8"
    >
      {seriesTitle && (
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 text-center">
          {seriesTitle}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prev ? (
          <Link
            href={prev.href}
            className="group block rounded-xl border border-gray-200 dark:border-gray-700/60 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-900 px-5 py-4 transition-colors"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-400 dark:text-gray-500 mb-1.5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span>{ko ? "이전 글" : "Previous"}</span>
              {prev.orderLabel && (
                <span className="text-gray-300 dark:text-gray-600">· {prev.orderLabel}</span>
              )}
            </div>
            <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors line-clamp-2">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
        {next ? (
          <Link
            href={next.href}
            className="group block rounded-xl border border-gray-200 dark:border-gray-700/60 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-900 px-5 py-4 transition-colors sm:text-right"
          >
            <div className="flex items-center gap-2 text-[11px] font-semibold text-gray-400 dark:text-gray-500 mb-1.5 sm:justify-end">
              {next.orderLabel && (
                <span className="text-gray-300 dark:text-gray-600">{next.orderLabel} ·</span>
              )}
              <span>{ko ? "다음 글" : "Next"}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
            <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors line-clamp-2">
              {next.title}
            </p>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </nav>
  );
}
