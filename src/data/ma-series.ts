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
    taglineKo: "Bob Iger × Disney × Pixar — DCF로 정당화 안 되는 가격을 narrative로 + AOL × Time Warner 가정이 깨졌을 때",
    taglineEn: "Bob Iger × Disney × Pixar — when narrative justifies what DCF can't + AOL × Time Warner when assumptions break",
    readingMinutes: 13,
    status: "published",
    caseKo: "Bob Iger × Steve Jobs × Disney/Pixar (2006) + AOL × Time Warner (2000)",
    caseEn: "Bob Iger × Steve Jobs × Disney/Pixar (2006) + AOL × Time Warner (2000)",
  },
  {
    slug: "ma-ch05-orchestration-case",
    ch: 5,
    titleKo: "IB Lead 오케스트레이션 — 한 딜의 안에서",
    titleEn: "IB Lead Orchestration — inside a single deal",
    taglineKo: "Felix Rohatyn × NYC bailout (1975) — orchestration archetype + Bayer × Monsanto (2016) operational 성공·전략적 synthesis 실패",
    taglineEn: "Felix Rohatyn × NYC bailout (1975) — the archetype + Bayer × Monsanto (2016) operationally clean but strategically broken",
    readingMinutes: 13,
    status: "published",
    caseKo: "Felix Rohatyn (Lazard) × NYC bailout (1975) + Bayer × Monsanto (2016)",
    caseEn: "Felix Rohatyn (Lazard) × NYC bailout (1975) + Bayer × Monsanto (2016)",
  },
  {
    slug: "ma-ch06-closing-case",
    ch: 6,
    titleKo: "가격 협상 + 클로징 막판",
    titleEn: "Final Negotiation + Closing",
    taglineKo: "Twitter × Musk (2022) Specific performance가 가격을 사수 + Adobe × Figma (2023) regulatory가 deal을 깨고 $1B break fee",
    taglineEn: "Twitter × Musk (2022) specific performance defended price + Adobe × Figma (2023) regulatory killed the deal with a $1B break fee",
    readingMinutes: 13,
    status: "published",
    caseKo: "Twitter × Musk (2022) + Adobe × Figma (2023)",
    caseEn: "Twitter × Musk (2022) + Adobe × Figma (2023)",
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
