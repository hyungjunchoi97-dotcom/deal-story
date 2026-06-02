/**
 * Fund 시리즈 — 6챕터
 *
 * 설계 방향:
 *   M&A·Valuation·FDD·Modelling이 "deal level" 시점이었다면,
 *   Fund 시리즈는 "capital flow" — 자금이 어디서 와서 어디로 가는지.
 *
 *   Ch.1 = LP가 누구이고 왜 PE/VC에 돈을 맡기는가
 *   Ch.2 = LPA 핵심 조항과 출자 메커니즘
 *   Ch.3 = Fund 종류와 구조
 *   Ch.4 = 자금 운용 과정 (Sourcing → Exit)
 *   Ch.5 = Fund 수익 구조 — LP/GP 경제학
 *   Ch.6 = 한국·미국 시장 + 주요 플레이어 도감
 */

export type ChapterStatus = "published" | "draft" | "planned";

export interface FundChapter {
  slug: string;
  ch: number;
  titleKo: string;
  titleEn: string;
  taglineKo: string;
  taglineEn: string;
  readingMinutes: number;
  status: ChapterStatus;
}

export const FUND_CHAPTERS: FundChapter[] = [
  {
    slug: "fund-ch01-lp-overview",
    ch: 1,
    titleKo: "LP는 누구이고 왜 PE·VC에 돈을 맡기는가",
    titleEn: "Who are LPs, and why do they commit capital to PE and VC",
    taglineKo: "7가지 LP 타입 · Illiquidity premium · Asset allocation 모델 · 글로벌 Top LP와 NPS",
    taglineEn: "Seven LP archetypes · illiquidity premium · asset allocation models · global top LPs and Korea's NPS",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "fund-ch02-lpa-mechanics",
    ch: 2,
    titleKo: "LPA 핵심 조항과 출자 메커니즘",
    titleEn: "LPA key terms and the mechanics of commitment",
    taglineKo: "Commitment vs Drawdown · Capital Call · Management Fee · Carry · Hurdle · Side Letter",
    taglineEn: "Commitment vs drawdown, capital calls, management fee, carry, hurdle, side letters",
    readingMinutes: 14,
    status: "published",
  },
  {
    slug: "fund-ch03-fund-types",
    ch: 3,
    titleKo: "Fund 종류와 구조 — Buyout · VC · Credit · 그리고 한국 PEF",
    titleEn: "Fund types and structures — buyout, VC, credit, and Korea's PEF",
    taglineKo: "전략별 (Buyout · Growth · VC · Mezz · Distressed · Credit · RE · Infra) + 구조별 (Open vs Closed) + 공모 vs 사모",
    taglineEn: "By strategy (buyout, growth, VC, mezz, distressed, credit, RE, infra) × by structure (open vs closed) × public vs private",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "fund-ch04-investment-lifecycle",
    ch: 4,
    titleKo: "자금이 운용되는 과정 — Sourcing부터 Exit까지",
    titleEn: "How the capital actually runs — sourcing to exit",
    taglineKo: "Deal sourcing 50:1 · IC memo · Portfolio governance · Exit 결정 · 실무진 시점에서 본 lifecycle",
    taglineEn: "Deal sourcing 50:1, IC memos, portfolio governance, exit decisions — the lifecycle through the practitioner's lens",
    readingMinutes: 14,
    status: "published",
  },
  {
    slug: "fund-ch05-economics",
    ch: 5,
    titleKo: "Fund 수익 구조 — LP/GP 경제학",
    titleEn: "Fund economics — the LP/GP math",
    taglineKo: "Management Fee 누적 · Carry 계산 · Distribution Waterfall (American vs European) · DPI·TVPI·IRR",
    taglineEn: "Management fee accrual, carry math, distribution waterfall (American vs European), DPI/TVPI/IRR",
    readingMinutes: 13,
    status: "draft",
  },
  {
    slug: "fund-ch06-market-players",
    ch: 6,
    titleKo: "한국·미국 시장과 주요 플레이어 도감",
    titleEn: "Korea vs US market and the player atlas",
    taglineKo: "Global $8T+ PE AUM · Top 10 US PE/VC · 한국 PE(MBK·IMM·STIC·Hahn 등) · 한국 VC · NPS·모태펀드 unique 구조",
    taglineEn: "Global $8T+ PE AUM · top 10 US PE/VC · Korean PE (MBK, IMM, STIC, Hahn, etc.) · Korean VC · NPS and the fund-of-funds structure",
    readingMinutes: 14,
    status: "draft",
  },
];

export function getFundChapterBySlug(slug: string): FundChapter | undefined {
  return FUND_CHAPTERS.find((c) => c.slug === slug);
}

export function getFundSeriesNav(slug: string): { prev: FundChapter | null; next: FundChapter | null } {
  const sorted = [...FUND_CHAPTERS].sort((a, b) => a.ch - b.ch);
  const idx = sorted.findIndex((c) => c.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
