/**
 * 사이트 저자 정보 — SEO E-E-A-T 신호 강화용 SSOT.
 *
 * - 모든 article footer 의 byline
 * - JSON-LD `author` 필드 (schema.org Person)
 * - <meta name="author"> 등 일관 사용
 *
 * 닉네임 운영 원칙 (Google Helpful Content Update 대응):
 *   1. 모든 페이지에 동일 저자 노출 → "1명의 일관된 페르소나" 신호
 *   2. dateModified 갱신 추적 → "active maintenance" 신호
 *   3. 거짓 클레임 금지 (실무 경력 등 사실에 없는 주장 X)
 */

export const AUTHOR = {
  /** 표시명 — byline + schema.org Person.name */
  name: "Kevin Park",
  /** 짧은 1줄 소개 — bio 또는 sub-byline */
  tagline: "Research-driven analysis of M&A, LBO, and capital markets",
  taglineKo: "M&A · LBO · 자본시장 — 1차 출처 기반 분석",
  /** 사이트 내 author profile URL (있을 때) */
  url: "/",
  /** 컨택 (선택) */
  email: "hello@dealstory.kr",
  /** 외부 프로필 (선택, 빌 때까지 빈 배열) */
  sameAs: [] as string[],
} as const;

/**
 * schema.org Person 객체 — JSON-LD 의 author 필드용.
 *
 * 사용 예:
 *   const jsonLd = {
 *     "@context": "https://schema.org",
 *     "@type": "Article",
 *     ...
 *     author: getAuthorJsonLd(),
 *   };
 */
export function getAuthorJsonLd() {
  return {
    "@type": "Person",
    name: AUTHOR.name,
    url: AUTHOR.url,
    ...(AUTHOR.sameAs.length > 0 ? { sameAs: [...AUTHOR.sameAs] } : {}),
  };
}
