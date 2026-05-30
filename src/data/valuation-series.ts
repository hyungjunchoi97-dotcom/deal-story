/**
 * Valuation 시리즈 — 6챕터
 *
 * 설계 방향:
 *   Ch.1 = framework overview
 *   Ch.2-3 = 실무 작업 (DCF · Comps)
 *   Ch.4 = football field 종합
 *   Ch.5-6 = 컨텍스트별 케이스 (IPO · Distressed)
 */

export type ChapterStatus = "published" | "draft" | "planned";

export interface ValChapter {
  slug: string;
  ch: number;
  titleKo: string;
  titleEn: string;
  taglineKo: string;
  taglineEn: string;
  readingMinutes: number;
  status: ChapterStatus;
  caseKo?: string;
  caseEn?: string;
}

export const VAL_CHAPTERS: ValChapter[] = [
  {
    slug: "val-ch01-frameworks",
    ch: 1,
    titleKo: "회사에 값을 매기는 3가지 방법",
    titleEn: "Three ways to put a number on a business",
    taglineKo: "DCF · Multiples · Asset-based — 언제 어느 걸 쓰고, 왜 셋을 같이 보여주는가",
    taglineEn: "DCF, multiples, and asset-based — when to use each, and why bankers always show all three",
    readingMinutes: 9,
    status: "published",
  },
  {
    slug: "val-ch02-dcf-practice",
    ch: 2,
    titleKo: "DCF 실무 — 실제로 어떻게 만들어지나",
    titleEn: "DCF in practice — how it actually gets built",
    taglineKo: "WACC 템플릿, Revenue 가정, NWC·CAPEX 연결, sensitivity, Bear/Base/Bull",
    taglineEn: "WACC templates, revenue assumptions, NWC/CAPEX linkage, sensitivity, bear/base/bull",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "val-ch03-comps-practice",
    ch: 3,
    titleKo: "Comps 실무 — Trading + Transaction",
    titleEn: "Comps in practice — trading and transaction",
    taglineKo: "Capital IQ 스크리닝, peer universe 선정, control premium, capital structure 조정",
    taglineEn: "Capital IQ screening, peer universe construction, control premium, capital structure adjustments",
    readingMinutes: 12,
    status: "draft",
  },
  {
    slug: "val-ch04-football-field",
    ch: 4,
    titleKo: "Football Field 종합과 컨텍스트별 valuation",
    titleEn: "Football field synthesis and valuation by context",
    taglineKo: "4-5 method를 한 page로. IPO·M&A·LBO·Restructuring 별 강조점 차이",
    taglineEn: "Putting 4-5 methods on a single page. Different emphases for IPO, M&A, LBO, restructuring",
    readingMinutes: 11,
    status: "draft",
  },
  {
    slug: "val-ch05-ipo-case",
    ch: 5,
    titleKo: "IPO Valuation 케이스 — Facebook IPO (2012)",
    titleEn: "IPO Valuation Case — the Facebook IPO (2012)",
    taglineKo: "Morgan Stanley의 $38 가격 산정과 첫날 폭락",
    taglineEn: "Morgan Stanley's $38 pricing and the first-day collapse",
    readingMinutes: 12,
    status: "draft",
  },
  {
    slug: "val-ch06-distressed-case",
    ch: 6,
    titleKo: "Distressed Valuation 케이스 — Caesars Chapter 11",
    titleEn: "Distressed Valuation Case — Caesars Chapter 11",
    taglineKo: "Going-concern $11B vs liquidation $7B. 파산 법정에서의 가치 다툼",
    taglineEn: "$11B going-concern vs $7B liquidation. The valuation fight in bankruptcy court",
    readingMinutes: 12,
    status: "draft",
  },
];

export function getValChapterBySlug(slug: string): ValChapter | undefined {
  return VAL_CHAPTERS.find((c) => c.slug === slug);
}

export function getValSeriesNav(slug: string): { prev: ValChapter | null; next: ValChapter | null } {
  const sorted = [...VAL_CHAPTERS].sort((a, b) => a.ch - b.ch);
  const idx = sorted.findIndex((c) => c.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
