/**
 * Fund Ops 시리즈 — 6챕터
 *
 * 설계 방향:
 *   Fund 시리즈가 "capital flow" (LP → GP → portco → exit) 시점이었다면,
 *   Fund Ops 시리즈는 "operational backbone" — 그 capital flow를 실제로 굴리는
 *   사람·시스템·통제, 그리고 어디서 사고가 나는지.
 *
 *   Ch.1 = Front / Middle / Back Office 구조와 사람들
 *   Ch.2 = LP onboarding + Capital Call 실무 (BEC fraud 케이스)
 *   Ch.3 = NAV · Valuation · 분기보고 (Abraaj · GPB · Madoff)
 *   Ch.4 = Treasury · Sub-line · Recap (COVID 2020 · SVB 2023)
 *   Ch.5 = Fund 만기 · Continuation Fund · GP-led Secondary
 *   Ch.6 = 사고 케이스 deep dive (KO: Lime · Optimus · Discovery / Global: Archegos · 3AC · LTCM · MF Global)
 *
 *   데이터 기준일: 2026년 1분기 (Q1 2026)
 */

export type ChapterStatus = "published" | "draft" | "planned";

export interface FundOpsChapter {
  slug: string;
  ch: number;
  titleKo: string;
  titleEn: string;
  taglineKo: string;
  taglineEn: string;
  readingMinutes: number;
  status: ChapterStatus;
}

export const FUND_OPS_CHAPTERS: FundOpsChapter[] = [
  {
    slug: "fund-ops-ch01-three-tier-structure",
    ch: 1,
    titleKo: "Front · Middle · Back Office — 펀드를 굴리는 3개의 시선",
    titleEn: "Front, middle, back office — three lenses on running a fund",
    taglineKo: "왜 3-tier로 나뉘는가 (Madoff·GFC 교훈) · 각 tier가 매일 하는 일 · Q1 2026 comp 벤치마크 (KO/US) · Top 10 fund admin · 진입 루트와 커리어 경로",
    taglineEn: "Why the three-tier split exists (Madoff and the GFC) · daily mandates per tier · Q1 2026 comp benchmarks (KR/US) · top 10 fund administrators · entry routes and career paths",
    readingMinutes: 14,
    status: "published",
  },
  {
    slug: "fund-ops-ch02-lp-onboarding",
    ch: 2,
    titleKo: "LP Onboarding & Capital Call — 돈이 들어오기까지의 실무",
    titleEn: "LP onboarding and capital calls — the mechanics of money coming in",
    taglineKo: "KYC/AML · subscription docs · side letter MFN · equalization · capital call wire 실무 · BEC fraud 케이스",
    taglineEn: "KYC/CDD · subscription documents · side letter MFN · equalization · capital call wire mechanics · BEC fraud cases",
    readingMinutes: 13,
    status: "planned",
  },
  {
    slug: "fund-ops-ch03-nav-valuation",
    ch: 3,
    titleKo: "NAV · Valuation · 분기보고 — 사고가 가장 많이 나는 영역",
    titleEn: "NAV, valuation, quarterly reporting — where the fraud actually happens",
    taglineKo: "ASC 820 fair value · Big 4 valuation · ILPA template · Abraaj · GPB Capital · Madoff feeder funds 사례",
    taglineEn: "ASC 820 fair value · Big 4 valuation · ILPA template · Abraaj, GPB Capital, and Madoff feeder funds",
    readingMinutes: 14,
    status: "planned",
  },
  {
    slug: "fund-ops-ch04-treasury-subline",
    ch: 4,
    titleKo: "Treasury · Sub-line · Recap · Refinancing — Cash가 돌아가는 메커니즘",
    titleEn: "Treasury, sub-lines, recaps, refinancing — the cash machinery",
    taglineKo: "Subscription credit facility · NAV facility · dividend recap · FX hedge · COVID 2020 sub-line 위기 · SVB 2023 붕괴",
    taglineEn: "Subscription credit facility · NAV facility · dividend recap · FX hedging · the COVID 2020 sub-line crunch · the SVB 2023 collapse",
    readingMinutes: 13,
    status: "planned",
  },
  {
    slug: "fund-ops-ch05-fund-extension",
    ch: 5,
    titleKo: "Fund 만기 · Continuation Fund · GP-led Secondary — 끝나지 않는 펀드의 처리",
    titleEn: "Fund extensions, continuation funds, GP-led secondaries — what to do when a fund won't end",
    taglineKo: "10+1+1년 만기 구조 · LPAC 연장 승인 · Continuation Fund 폭증 · zombie fund 문제 · Ardian·Lexington·Coller 통계",
    taglineEn: "10+1+1 fund life · LPAC extension approval · continuation fund explosion · zombie fund problem · Ardian, Lexington, Coller statistics",
    readingMinutes: 13,
    status: "planned",
  },
  {
    slug: "fund-ops-ch06-disaster-cases",
    ch: 6,
    titleKo: "사고 케이스 종합 — Ops가 망한 펀드들",
    titleEn: "Disaster cases — funds undone by ops failure",
    taglineKo: "🇰🇷 Lime · Optimus · Discovery · 🇺🇸 Archegos · 3AC · LTCM · MF Global · 공통 교훈 6가지",
    taglineEn: "Archegos · 3AC · LTCM · MF Global · Knight Capital · Madoff feeders · six lessons across them all",
    readingMinutes: 15,
    status: "planned",
  },
];

export function getFundOpsChapterBySlug(slug: string): FundOpsChapter | undefined {
  return FUND_OPS_CHAPTERS.find((c) => c.slug === slug);
}

export function getFundOpsSeriesNav(slug: string): { prev: FundOpsChapter | null; next: FundOpsChapter | null } {
  const sorted = [...FUND_OPS_CHAPTERS].sort((a, b) => a.ch - b.ch);
  const idx = sorted.findIndex((c) => c.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
