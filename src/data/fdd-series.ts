/**
 * FDD 시리즈 — 6챕터
 *
 * 설계 방향:
 *   Ch.1 = FDD가 SPA 가격에 어떻게 박히는가 (overview)
 *   Ch.2 = Quality of Earnings (QoE) 실무
 *   Ch.3 = Net Working Capital normalization
 *   Ch.4 = Hidden Liabilities & Off-Balance-Sheet 발굴
 *   Ch.5 = Case · Hertz 회계 분식 (2014-2015)
 *   Ch.6 = Case · Tesco £263M accounting scandal (2014)
 */

export type ChapterStatus = "published" | "draft" | "planned";

export interface FddChapter {
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

export const FDD_CHAPTERS: FddChapter[] = [
  {
    slug: "fdd-ch01-overview",
    ch: 1,
    titleKo: "FDD가 SPA 가격에 어떻게 박히는가",
    titleEn: "How FDD findings land in the SPA price",
    taglineKo: "Buy-side vs Sell-side FDD · Big 4 TS 표준 deliverable · SPA 조항으로의 매핑",
    taglineEn: "Buy-side vs sell-side FDD · Big 4 TS standard deliverables · how findings map into SPA clauses",
    readingMinutes: 11,
    status: "published",
  },
  {
    slug: "fdd-ch02-qoe",
    ch: 2,
    titleKo: "Quality of Earnings (QoE) 실무",
    titleEn: "Quality of Earnings (QoE) in practice",
    taglineKo: "Reported → Adjusted EBITDA bridge, 1회성 add-back, run-rate 조정, 매도인의 trick",
    taglineEn: "Reported → adjusted EBITDA bridge, one-time add-backs, run-rate adjustments, seller's tricks",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "fdd-ch03-nwc",
    ch: 3,
    titleKo: "Net Working Capital Normalization — 가장 정량적인 다툼",
    titleEn: "Net Working Capital normalization — the most quantitative fight",
    taglineKo: "Closing NWC target, dollar-for-dollar 조정, 매도인의 working capital squeeze",
    taglineEn: "Closing NWC target, dollar-for-dollar adjustment, the seller's working-capital squeeze",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "fdd-ch04-hidden-liabilities",
    ch: 4,
    titleKo: "Hidden Liabilities & Off-Balance-Sheet 발굴",
    titleEn: "Hidden liabilities and off-balance-sheet items",
    taglineKo: "미계상 의무, tax exposure, customer concentration, 산업별 hot spot",
    taglineEn: "Unrecorded obligations, tax exposure, customer concentration, industry hot spots",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "fdd-ch05-hertz-case",
    ch: 5,
    titleKo: "Case — Hertz의 회계 분식 (2014-2015)",
    titleEn: "Case — the Hertz accounting restatement (2014-2015)",
    taglineKo: "PwC가 놓친 vehicle depreciation 가정과 $235M 5년치 재작성",
    taglineEn: "The vehicle depreciation assumption PwC missed and the $235M five-year restatement",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "fdd-ch06-tesco-case",
    ch: 6,
    titleKo: "Case — Tesco £263M Accounting Scandal (2014)",
    titleEn: "Case — Tesco's £263M accounting scandal (2014)",
    taglineKo: "공급업체 rebate 인식을 당겨 EBITDA를 부풀린 패턴과 audit·FDD가 놓친 신호",
    taglineEn: "Pulling supplier rebates forward to inflate EBITDA — the signals audit and FDD missed",
    readingMinutes: 12,
    status: "draft",
  },
];

export function getFddChapterBySlug(slug: string): FddChapter | undefined {
  return FDD_CHAPTERS.find((c) => c.slug === slug);
}

export function getFddSeriesNav(slug: string): { prev: FddChapter | null; next: FddChapter | null } {
  const sorted = [...FDD_CHAPTERS].sort((a, b) => a.ch - b.ch);
  const idx = sorted.findIndex((c) => c.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
