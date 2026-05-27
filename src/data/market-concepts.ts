/**
 * Market Story 개념 데이터.
 * 각 개념은 KO/EN 이중 언어 지원.
 *
 * NOTE: 현재 Market Story 글은 Market 101(/market-101)로 이관됨.
 *       market-101-concepts.ts 에서 실제 개념 데이터를 관리한다.
 */

export type ConceptSection = {
  heading: string;
  headingEn: string;
  body: string;
  bodyEn: string;
};

export type KeyTerm = {
  term: string;
  termEn: string;
  definition: string;
  definitionEn: string;
};

export type Reference = {
  id: number;
  author: string;
  title: string;
  source: string;
  year: string;
  url?: string;
};

/** 어느 아티클/딜에 이 개념이 등장하는지 — 백링크용 */
export type AppearsInRef = {
  type: "market-101" | "market-deal";
  slug: string;
  title: string;     // KO
  titleEn: string;   // EN
};

export type MarketConcept = {
  slug: string;
  title: string;
  titleEn: string;
  /**
   * entryType:
   *  "article" — 긴 설명 아티클 (e.g. DCM 생태계 전체 지도)
   *  "term"    — 용어 사전 개별 페이지 (e.g. 신디케이트, AT1)
   */
  entryType?: "article" | "term";
  category: "dcm" | "ecm" | "st" | "structure" | "sales" | "fig" | "sovereign" | "structured" | "lbo" | "levfin" | "syndloan";
  categoryLabel: string;
  categoryLabelEn: string;
  excerpt: string;
  excerptEn: string;
  readingMinutes: number;
  tags: string[];
  tagsEn?: string[];
  sections: ConceptSection[];
  keyTerms: KeyTerm[];
  relatedSlugs: string[];    // 관련 Market 101 슬러그 (용어/아티클 모두 포함)
  appearsIn?: AppearsInRef[]; // 이 개념이 인용된 Market 101 아티클 + Market 딜
  references?: Reference[];
};

// ── 카테고리 색상 매핑 ────────────────────────────────────────────────────
export const CATEGORY_COLOR: Record<
  MarketConcept["category"],
  { bg: string; fg: string; border: string; dot: string; accent: string }
> = {
  dcm:        { bg: "bg-teal-50 dark:bg-teal-900/20",    fg: "text-teal-700 dark:text-teal-300",    border: "border-teal-200 dark:border-teal-700",    dot: "bg-teal-500",    accent: "#14b8a6" },
  ecm:        { bg: "bg-blue-50 dark:bg-blue-900/20",    fg: "text-blue-700 dark:text-blue-300",    border: "border-blue-200 dark:border-blue-700",    dot: "bg-blue-500",    accent: "#3182f6" },
  st:         { bg: "bg-violet-50 dark:bg-violet-900/20",fg: "text-violet-700 dark:text-violet-300",border: "border-violet-200 dark:border-violet-700",dot: "bg-violet-500",  accent: "#8b5cf6" },
  structure:  { bg: "bg-orange-50 dark:bg-orange-900/20",fg: "text-orange-700 dark:text-orange-300",border: "border-orange-200 dark:border-orange-700",dot: "bg-orange-500",  accent: "#f97316" },
  sales:      { bg: "bg-sky-50 dark:bg-sky-900/20",      fg: "text-sky-700 dark:text-sky-300",      border: "border-sky-200 dark:border-sky-700",      dot: "bg-sky-500",     accent: "#0ea5e9" },
  fig:        { bg: "bg-rose-50 dark:bg-rose-900/20",    fg: "text-rose-700 dark:text-rose-300",    border: "border-rose-200 dark:border-rose-700",    dot: "bg-rose-500",    accent: "#f43f5e" },
  sovereign:  { bg: "bg-indigo-50 dark:bg-indigo-900/20",fg: "text-indigo-700 dark:text-indigo-300",border: "border-indigo-200 dark:border-indigo-700",dot: "bg-indigo-500",  accent: "#6366f1" },
  structured: { bg: "bg-amber-50 dark:bg-amber-900/20",  fg: "text-amber-700 dark:text-amber-300",  border: "border-amber-200 dark:border-amber-700",  dot: "bg-amber-500",   accent: "#f59e0b" },
  lbo:        { bg: "bg-indigo-50 dark:bg-indigo-900/20",fg: "text-indigo-700 dark:text-indigo-300",border: "border-indigo-200 dark:border-indigo-700",dot: "bg-indigo-500",  accent: "#6366f1" },
  levfin:     { bg: "bg-yellow-50 dark:bg-yellow-900/20",  fg: "text-yellow-700 dark:text-yellow-300",  border: "border-yellow-200 dark:border-yellow-700",  dot: "bg-yellow-500",   accent: "#eab308" },
  syndloan:   { bg: "bg-cyan-50 dark:bg-cyan-900/20",     fg: "text-cyan-700 dark:text-cyan-300",      border: "border-cyan-200 dark:border-cyan-700",      dot: "bg-cyan-500",     accent: "#06b6d4" },
};

// ── 개념 데이터 (현재 비어있음 — Market 101로 이관) ─────────────────────────
export const ALL_CONCEPTS: MarketConcept[] = [];

export function getConceptBySlug(slug: string): MarketConcept | undefined {
  return ALL_CONCEPTS.find((c) => c.slug === slug);
}

export function getRelatedConcepts(slugs: string[]): MarketConcept[] {
  return slugs
    .map((s) => getConceptBySlug(s))
    .filter((c): c is MarketConcept => c !== undefined);
}
