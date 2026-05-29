/**
 * AuthorByline — 모든 article footer 의 미니멀 저자 라인.
 *
 * 노출 예:
 *   ✍️ Written by Kevin Park · Updated May 29, 2026 · 12 min read
 *
 * SEO 의도:
 *  - 모든 페이지에 동일 닉네임 일관 노출 → E-E-A-T "Identity / Consistency" 신호
 *  - dateModified 명시 → "actively maintained" 신호
 *  - 클릭 가능한 author URL 제공 (future profile page 대비)
 */
import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { AUTHOR } from "@/lib/author";

interface Props {
  lang: Lang;
  /** ISO date string (e.g. "2026-05-29") 또는 Date — 마지막 업데이트 일자 */
  updatedAt?: string | Date;
  /** 읽기 분량 (분) */
  readingMinutes?: number;
  /** 컨테이너 정렬 */
  align?: "left" | "center";
}

function formatDate(d: string | Date, ko: boolean): string {
  const date = typeof d === "string" ? new Date(d) : d;
  if (Number.isNaN(date.getTime())) return "";
  if (ko) {
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  }
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export default function AuthorByline({
  lang,
  updatedAt,
  readingMinutes,
  align = "center",
}: Props) {
  const ko = lang === "ko";
  const writtenBy = ko ? "글" : "Written by";
  const updated = ko ? "업데이트" : "Updated";
  const readLabel = ko ? "분 읽기" : "min read";
  const dateStr = updatedAt ? formatDate(updatedAt, ko) : "";

  return (
    <div
      className={`flex items-center gap-1.5 flex-wrap text-[11px] sm:text-[12px] text-gray-400 dark:text-gray-500 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span aria-hidden className="opacity-70">✍️</span>
      <span>{writtenBy}</span>
      <Link
        href={AUTHOR.url}
        className="font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        rel="author"
      >
        {AUTHOR.name}
      </Link>
      {dateStr && (
        <>
          <span aria-hidden className="text-gray-300 dark:text-gray-700">·</span>
          <span>
            {updated} <time dateTime={typeof updatedAt === "string" ? updatedAt : updatedAt?.toISOString()}>{dateStr}</time>
          </span>
        </>
      )}
      {readingMinutes && (
        <>
          <span aria-hidden className="text-gray-300 dark:text-gray-700">·</span>
          <span>
            {readingMinutes} {readLabel}
          </span>
        </>
      )}
    </div>
  );
}
