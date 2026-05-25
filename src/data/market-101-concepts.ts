/**
 * Market 101 개념 데이터.
 * DCM · ECM · S&T · 구조·규제 핵심 개념을 딜 사례와 함께 정리.
 * 각 개념은 KO/EN 이중 언어 지원.
 *
 * 타입은 market-concepts.ts 에서 재활용.
 */
import type { MarketConcept } from "@/data/market-concepts";
export type { MarketConcept } from "@/data/market-concepts";
export { CATEGORY_COLOR } from "@/data/market-concepts";

// ── 개념 카탈로그 메타 (인덱스 페이지용 — 글 없어도 카테고리 표시) ──────────
export const MARKET_101_CATEGORIES = [
  { key: "dcm"       as const, label: "DCM",          labelEn: "DCM",                    dotColor: "bg-teal-500"   },
  { key: "ecm"       as const, label: "ECM",          labelEn: "ECM",                    dotColor: "bg-blue-500"   },
  { key: "st"        as const, label: "S&T",          labelEn: "S&T",                    dotColor: "bg-violet-500" },
  { key: "structure" as const, label: "구조·규제",     labelEn: "Structure & Regulation", dotColor: "bg-orange-500" },
];

// ── 개념 데이터 ──────────────────────────────────────────────────────────────
export const ALL_MARKET101_CONCEPTS: MarketConcept[] = [
  // DCM, ECM, S&T, 구조·규제 개념들이 여기에 추가됩니다.
];

export function getMarket101ConceptBySlug(slug: string): MarketConcept | undefined {
  return ALL_MARKET101_CONCEPTS.find((c) => c.slug === slug);
}

export function getMarket101RelatedConcepts(slugs: string[]): MarketConcept[] {
  return slugs
    .map((s) => getMarket101ConceptBySlug(s))
    .filter((c): c is MarketConcept => c !== undefined);
}
