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

export type MarketConcept = {
  slug: string;
  title: string;
  titleEn: string;
  category: "dcm" | "ecm" | "st" | "structure";
  categoryLabel: string;
  categoryLabelEn: string;
  excerpt: string;
  excerptEn: string;
  readingMinutes: number;
  tags: string[];
  tagsEn?: string[];
  sections: ConceptSection[];
  keyTerms: KeyTerm[];
  relatedSlugs: string[];
};

// ── 카테고리 색상 매핑 ────────────────────────────────────────────────────
export const CATEGORY_COLOR: Record<
  MarketConcept["category"],
  { bg: string; fg: string; border: string }
> = {
  dcm:       { bg: "bg-teal-50",   fg: "text-teal-700",   border: "border-teal-200" },
  ecm:       { bg: "bg-blue-50",   fg: "text-blue-700",   border: "border-blue-200" },
  st:        { bg: "bg-violet-50", fg: "text-violet-700", border: "border-violet-200" },
  structure: { bg: "bg-orange-50", fg: "text-orange-700", border: "border-orange-200" },
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
