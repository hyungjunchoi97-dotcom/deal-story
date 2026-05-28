"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * 한국어 ↔ 영어 언어 스위처 (세그먼티드 컨트롤)
 *
 * 모바일 드로어 / 데스크탑 nav 양쪽에서 동일한 컴팩트 형태 유지.
 * 부모가 flex-col 이어도 풀스트레치 되지 않도록 `w-fit` 으로 콘텐츠 크기 고정.
 */
export default function LanguageSwitcher() {
  const pathname = usePathname();

  const isEn = pathname.startsWith("/en");
  const koPath = isEn ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const enPath = isEn ? pathname : `/en${pathname}`;

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex w-fit items-center gap-0 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-800/60 p-0.5 text-[11px] font-semibold tracking-wide"
    >
      <Link
        href={koPath}
        prefetch={false}
        className={`px-3 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap ${
          !isEn
            ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-sm"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        }`}
        aria-label="한국어로 보기"
        aria-pressed={!isEn}
      >
        KOR
      </Link>
      <Link
        href={enPath}
        prefetch={false}
        className={`px-3 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap ${
          isEn
            ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-sm"
            : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        }`}
        aria-label="View in English"
        aria-pressed={isEn}
      >
        ENG
      </Link>
    </div>
  );
}
