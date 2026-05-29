/**
 * M&A 시리즈 — 6챕터
 *
 * 설계 철학:
 *   1. M&A는 큰 그림에서 보면 의외로 간단한 흐름
 *   2. Ch.1-2 = 전체 흐름 + 이해관계자 (설명)
 *   3. Ch.3-6 = 유명 뱅커의 POV로 실제 케이스 (orchestration)
 */

export type ChapterStatus = "published" | "draft" | "planned";

export interface MaChapter {
  slug: string;
  ch: number;
  titleKo: string;
  titleEn: string;
  taglineKo: string;
  taglineEn: string;
  readingMinutes: number;
  status: ChapterStatus;
  /** 케이스 챕터에서 anchor가 되는 뱅커·딜 */
  caseKo?: string;
  caseEn?: string;
}

export const MA_CHAPTERS: MaChapter[] = [
  {
    slug: "ma-ch01-overview",
    ch: 1,
    titleKo: "M&A 전과정 흐름 — 한 장으로 보는 6개월의 여정",
    titleEn: "The M&A Lifecycle — a 6-month journey on a single map",
    taglineKo: "Teaser → Mandate → FDD·Valuation·IM → IOI → SPA → Closing — 9단계의 큰 그림",
    taglineEn: "Teaser → Mandate → FDD·Valuation·IM → IOI → SPA → Closing — the 9-stage big picture",
    readingMinutes: 10,
    status: "published",
  },
  {
    slug: "ma-ch02-stakeholders",
    ch: 2,
    titleKo: "이해관계자 도감 — 누가 무엇을 하는가",
    titleEn: "The Stakeholder Map — who does what",
    taglineKo: "IB Lead · 회계 FAS · 컨설팅 · 법무 · CEO·CFO·Board · Buyer side",
    taglineEn: "IB Lead · accounting FAS · consultants · law firm · CEO/CFO/Board · buyer side",
    readingMinutes: 10,
    status: "published",
  },
  {
    slug: "ma-ch03-fdd-case",
    ch: 3,
    titleKo: "FDD 실랑이 — 1회성 vs 반복적",
    titleEn: "The FDD Fight — one-time vs recurring",
    taglineKo: "Bruce Wasserstein × RJR Nabisco — Adjusted EBITDA가 만들어진 순간 + WeWork Community Adjusted EBITDA 경고",
    taglineEn: "Bruce Wasserstein × RJR Nabisco — when 'Adjusted EBITDA' was born + the WeWork cautionary tale",
    readingMinutes: 13,
    status: "published",
    caseKo: "Bruce Wasserstein (First Boston) × RJR Nabisco (1988) + WeWork (2019)",
    caseEn: "Bruce Wasserstein (First Boston) × RJR Nabisco (1988) + WeWork (2019)",
  },
  {
    slug: "ma-ch04-valuation-case",
    ch: 4,
    titleKo: "Valuation 케이스 — 가정의 게임",
    titleEn: "Valuation Case — the assumptions game",
    taglineKo: "DCF 가정과 Comps 선정에서 IB가 진짜 어떤 판단을 하는가",
    taglineEn: "What IB actually decides in DCF assumptions and comps selection",
    readingMinutes: 12,
    status: "draft",
  },
  {
    slug: "ma-ch05-orchestration-case",
    ch: 5,
    titleKo: "IB Lead 오케스트레이션 — 한 딜의 안에서",
    titleEn: "IB Lead Orchestration — inside a single deal",
    taglineKo: "회계·컨설팅·법무 + 클라이언트 + Buyer를 동시에 굴리는 art",
    taglineEn: "The art of running accounting · consultants · law firm · client · buyer simultaneously",
    readingMinutes: 12,
    status: "draft",
  },
  {
    slug: "ma-ch06-closing-case",
    ch: 6,
    titleKo: "가격 협상 + 클로징 막판",
    titleEn: "Final Negotiation + Closing",
    taglineKo: "SPA 조항이 가격을 흔드는 지점, 막판 regulatory가 딜을 깨는 패턴",
    taglineEn: "Where SPA terms shift price, and how last-mile regulatory kills deals",
    readingMinutes: 12,
    status: "draft",
  },
];

export function getMaChapterBySlug(slug: string): MaChapter | undefined {
  return MA_CHAPTERS.find((c) => c.slug === slug);
}

export function getMaSeriesNav(slug: string): { prev: MaChapter | null; next: MaChapter | null } {
  const sorted = [...MA_CHAPTERS].sort((a, b) => a.ch - b.ch);
  const idx = sorted.findIndex((c) => c.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
