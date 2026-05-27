export function formatUSD(millions: number): string {
  if (millions >= 1000) return `$${(millions / 1000).toFixed(1)}B`;
  return `$${millions.toFixed(0)}M`;
}

export function formatKRW(billions: number): string {
  if (billions >= 10000) return `${(billions / 10000).toFixed(1)}조원`;
  if (billions >= 1000) return `${(billions / 1000).toFixed(1)}천억원`;
  return `${billions.toFixed(0)}억원`;
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월`;
}

export function formatDateFull(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

/**
 * 딜 상세 페이지 메타라인용 long-format 날짜.
 *  - ko → "2023년 10월 13일"
 *  - en → "October 13, 2023"
 *
 * KO/EN 모두 `Intl.DateTimeFormat` 로 처리. 호스트 ICU 차이를 줄이기 위해
 * locale 을 명시적으로 고정 (ko-KR / en-US).
 */
export function formatDealDate(
  dateStr: string,
  lang: "ko" | "en",
): string {
  const d = new Date(dateStr);
  const locale = lang === "en" ? "en-US" : "ko-KR";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}
