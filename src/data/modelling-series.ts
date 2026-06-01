/**
 * Modelling 시리즈 — 6챕터
 *
 * 설계 방향:
 *   Valuation 시리즈와 cross-link.
 *   Valuation = "어떤 숫자에 도달하는가"
 *   Modelling = "그 숫자를 어떤 sheet 구조 + cell logic으로 만드는가"
 *
 *   Ch.1 = 모델의 표준 규칙 (color, sign, layout, audit)
 *   Ch.2 = 3-Statement Model 연결 mechanics
 *   Ch.3 = DCF Model in Excel (Valuation Ch.2를 sheet로)
 *   Ch.4 = LBO Model (Sources & Uses, Debt Schedule, Returns)
 *   Ch.5 = Operating Model (Driver-based forecasting)
 *   Ch.6 = Case · Microsoft × LinkedIn ($26.2B, 2016) model walkthrough
 */

export type ChapterStatus = "published" | "draft" | "planned";

export interface ModChapter {
  slug: string;
  ch: number;
  titleKo: string;
  titleEn: string;
  taglineKo: string;
  taglineEn: string;
  readingMinutes: number;
  status: ChapterStatus;
}

export const MOD_CHAPTERS: ModChapter[] = [
  {
    slug: "mod-ch01-standards",
    ch: 1,
    titleKo: "모델의 표준 규칙 — 좋은 model이 좋은 의사결정을 만든다",
    titleEn: "Modeling standards — good models drive good decisions",
    taglineKo: "Color coding · Sign convention · Sheet 구조 · Audit checks — IB·PE가 공유하는 4가지 규칙",
    taglineEn: "Color coding · sign convention · sheet structure · audit checks — the four rules every IB and PE shares",
    readingMinutes: 11,
    status: "published",
  },
  {
    slug: "mod-ch02-three-statement",
    ch: 2,
    titleKo: "3-Statement Model — IS · BS · CFS 연결 mechanics",
    titleEn: "The 3-statement model — how IS / BS / CFS connect",
    taglineKo: "세 statement이 어떻게 연결되는지, BS가 안 맞을 때 디버깅, circular reference 처리",
    taglineEn: "How the three statements link, debugging an unbalanced BS, and handling circular references",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "mod-ch03-dcf",
    ch: 3,
    titleKo: "DCF Model in Excel — Valuation Ch.2를 sheet로",
    titleEn: "DCF model in Excel — Valuation Ch.2 turned into sheets",
    taglineKo: "Revenue build · WACC sheet · FCF cell-by-cell · Terminal Value 두 가지 방식 · Sensitivity data table",
    taglineEn: "Revenue build, WACC sheet, FCF cell by cell, two terminal-value methods, sensitivity data tables",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "mod-ch04-lbo",
    ch: 4,
    titleKo: "LBO Model — Sources & Uses, Debt Schedule, Returns",
    titleEn: "LBO model — sources & uses, debt schedule, returns",
    taglineKo: "Cap structure setup · cash sweep · returns waterfall · IRR back-solver",
    taglineEn: "Cap structure setup, cash sweep, returns waterfall, IRR back-solver",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "mod-ch05-operating",
    ch: 5,
    titleKo: "Operating Model — Driver-based Forecasting",
    titleEn: "Operating model — driver-based forecasting",
    taglineKo: "Top-down vs bottom-up · 산업별 driver (SaaS · Retail · Manufacturing) · Cohort analysis · Scenario manager",
    taglineEn: "Top-down vs bottom-up, industry drivers (SaaS, retail, manufacturing), cohort analysis, scenario manager",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "mod-ch06-msft-linkedin-case",
    ch: 6,
    titleKo: "Case · Microsoft × LinkedIn ($26.2B, 2016) — model walkthrough",
    titleEn: "Case · Microsoft × LinkedIn ($26.2B, 2016) — model walkthrough",
    taglineKo: "Strategic acquisition model의 sheet 구성과 cell 흐름을 sheet-by-sheet로",
    taglineEn: "Sheet structure and cell flow of a strategic-acquisition model, walked sheet by sheet",
    readingMinutes: 14,
    status: "published",
  },
];

export function getModChapterBySlug(slug: string): ModChapter | undefined {
  return MOD_CHAPTERS.find((c) => c.slug === slug);
}

export function getModSeriesNav(slug: string): { prev: ModChapter | null; next: ModChapter | null } {
  const sorted = [...MOD_CHAPTERS].sort((a, b) => a.ch - b.ch);
  const idx = sorted.findIndex((c) => c.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
