"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * 한국어 ↔ 영어 언어 스위처
 * - /deals/... → /en/deals/...
 * - /en/deals/... → /deals/...
 */
export default function LanguageSwitcher() {
  const pathname = usePathname();

  // 현재 언어 감지
  const isEn = pathname.startsWith("/en");

  // 상대 경로 계산
  const koPath = isEn ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const enPath = isEn ? pathname : `/en${pathname}`;

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-gray-200 dark:border-gray-700 p-0.5 text-xs font-semibold">
      <Link
        href={koPath}
        className={`px-2 py-1 rounded-md transition-colors ${
          !isEn
            ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        }`}
        aria-label="한국어로 보기"
      >
        KOR
      </Link>
      <Link
        href={enPath}
        className={`px-2 py-1 rounded-md transition-colors ${
          isEn
            ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        }`}
        aria-label="View in English"
      >
        ENG
      </Link>
    </div>
  );
}
