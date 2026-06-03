/**
 * VC 시리즈 — 10챕터
 *
 * 설계 방향:
 *   VC 투자 과정을 세 시점에서 동시에 본다:
 *   ① VC 펀드 (GP 의사결정 시점)
 *   ② 창업자 (founder 시점)
 *   ③ 심사역 (실무 layer — 매일 어떻게 일하는가)
 *
 *   Ch.1  = VC 산업 구조 + 단계 + 심사역 일과 + KO/US 도감
 *   Ch.2  = Sourcing & First Contact
 *   Ch.3  = Pitch & First Meeting (30분의 게임)
 *   Ch.4  = Due Diligence — 6 workstream
 *   Ch.5  = Financial Modeling + IC Memo 작성
 *   Ch.6  = Term Sheet 7대 조항 + Negotiation
 *   Ch.7  = Legal Docs (RCPS · CB · BW) + Closing
 *   Ch.8  = Post-investment + Portfolio Management
 *   Ch.9  = Follow-on · Down Round · Exit
 *   Ch.10 = 한국 VC 특수 Regulation (모태펀드 · KVIC · 49인 룰)
 *
 *   데이터 기준일: 2026년 2분기 (Q2 2026)
 */

export type ChapterStatus = "published" | "draft" | "planned";

export interface VcChapter {
  slug: string;
  ch: number;
  titleKo: string;
  titleEn: string;
  taglineKo: string;
  taglineEn: string;
  readingMinutes: number;
  status: ChapterStatus;
}

export const VC_CHAPTERS: VcChapter[] = [
  {
    slug: "vc-ch01-industry-stages",
    ch: 1,
    titleKo: "VC 산업 구조 + Seed→Growth 단계 + 심사역 일과",
    titleEn: "VC industry structure, seed-to-growth stages, and the associate's week",
    taglineKo: "Seed→Series A→B→C→D→Growth 단계별 valuation · ARR threshold · 심사역 주 50시간 시간 배분 · 🇰🇷 알토스·한투파·KB·카카오벤처스 · 🇺🇸 a16z·Sequoia·Benchmark 도감",
    taglineEn: "Stage-by-stage valuation and ARR thresholds (seed → Series A/B/C/D → growth), the VC associate's 50-hour week, plus a global VC atlas (a16z, Sequoia, Benchmark, Accel, Founders Fund, USV)",
    readingMinutes: 14,
    status: "published",
  },
  {
    slug: "vc-ch02-sourcing-first-contact",
    ch: 2,
    titleKo: "Sourcing & First Contact — 양면 게임의 시작",
    titleEn: "Sourcing and first contact — the two-sided game begins",
    taglineKo: "4 sourcing channel (inbound·network·outbound·accelerator) · 창업자 cold email 1-3% vs warm intro 60% · 심사역의 Affinity / DealCloud pipeline · Internal screening memo 7 fields",
    taglineEn: "Four sourcing channels (inbound, network, outbound, accelerator), cold email's 1-3% vs warm intro's 60% response rate, and the associate's Affinity / DealCloud pipeline plus a seven-field internal screening memo",
    readingMinutes: 12,
    status: "published",
  },
  {
    slug: "vc-ch03-pitch-first-meeting",
    ch: 3,
    titleKo: "Pitch & First Meeting — 30분의 게임",
    titleEn: "Pitch and first meeting — the 30-minute game",
    taglineKo: "심사역의 5 evaluation rubric (Team 50% + Market + Traction + Product + Why Now) · 창업자 10-slide deck (Airbnb·Stripe·Toss) · 30분 dynamic · post-meeting follow-up",
    taglineEn: "The five-factor evaluation rubric (Team 50% + market + traction + product + why-now), founder 10-slide deck patterns (Airbnb, Stripe, Toss), the 30-minute dynamic, and the post-meeting follow-up",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "vc-ch04-due-diligence",
    ch: 4,
    titleKo: "Due Diligence — 6 workstream과 4-6주 timeline",
    titleEn: "Due diligence — six workstreams over four to six weeks",
    taglineKo: "심사역 DD coordination — Customer DD 7-10 통화 · Tech DD (CTO advisor $5-15K) · Financial DD · Legal DD · Reference · Market · 창업자 data room 준비 · DD 통과 시그널",
    taglineEn: "Associate-led DD coordination — 7-10 customer calls, tech DD via a CTO advisor ($5-15K), financial DD, legal DD, references, market work — plus founder data room prep and DD pass signals",
    readingMinutes: 14,
    status: "published",
  },
  {
    slug: "vc-ch05-financial-model-ic-memo",
    ch: 5,
    titleKo: "Financial Modeling + IC Memo — 심사역의 가장 큰 산출물",
    titleEn: "Financial modeling + IC memo — the associate's biggest deliverable",
    taglineKo: "3-statement projection + VC return model (probability-weighted MOIC/IRR) + Cap table waterfall · IC memo 12 section · 한국 8-12명 투자위원회 dynamics · US Partner unanimous vs KR majority",
    taglineEn: "3-statement projection + VC return model (probability-weighted MOIC/IRR) + cap-table waterfall · 12-section IC memo · the 8-12-person Korean investment committee · US partner unanimity vs Korean majority votes",
    readingMinutes: 15,
    status: "published",
  },
  {
    slug: "vc-ch06-term-sheet",
    ch: 6,
    titleKo: "Term Sheet 7대 조항 + Negotiation 실무",
    titleEn: "The seven term sheet provisions + negotiation in practice",
    taglineKo: "Pre-money valuation · Liquidation preference (1x non-participating 표준) · Anti-dilution · Board composition · Pro-rata · Drag-along · Vesting cliff · Snap dual-class · WeWork supervoting 반면교사",
    taglineEn: "Pre-money valuation, liquidation preference (1x non-participating is standard), anti-dilution, board composition, pro-rata, drag-along, and vesting cliffs — plus Snap's dual-class and WeWork's supervoting as cautionary tales",
    readingMinutes: 14,
    status: "published",
  },
  {
    slug: "vc-ch07-legal-docs-closing",
    ch: 7,
    titleKo: "Legal Docs (RCPS · CB · BW) + Closing — 한국 특이 구조",
    titleEn: "Legal docs (RCPS, CB, BW) + closing — Korea's unique structure",
    taglineKo: "한국 표준 RCPS (상환전환우선주) deep dive · CB (전환사채) · BW (신주인수권부사채) · SPA · SHA · 김앤장·세종·태평양·광장·율촌 · 변호사 fee ₩30-80M · Closing checklist 50+ items",
    taglineEn: "Deep dive on Korea's RCPS (redeemable convertible preferred shares), CB, and BW · SPA/SHA · top Korean firms (Kim&Chang, Shin&Kim, Bae Kim Lee) · ₩30-80M legal fees · 50+ item closing checklist",
    readingMinutes: 14,
    status: "published",
  },
  {
    slug: "vc-ch08-post-investment-portfolio",
    ch: 8,
    titleKo: "Post-investment + Portfolio Management — 15-25 portco 동시 관리",
    titleEn: "Post-investment + portfolio management — running 15-25 portcos at once",
    taglineKo: "심사역의 monthly update 처리 · 분기 board prep · Value-add intro (senior hire·BD·follow-on prep) · Reserve allocation 30-50% · Red flag traffic light · Portfolio review",
    taglineEn: "The associate's monthly update routine, quarterly board prep, value-add intros (senior hires, BD, follow-on prep), 30-50% reserve allocation, the red-flag traffic light, and quarterly portfolio reviews",
    readingMinutes: 13,
    status: "published",
  },
  {
    slug: "vc-ch09-followon-down-round-exit",
    ch: 9,
    titleKo: "Follow-on · Down Round · Exit — VC 수명의 후반전",
    titleEn: "Follow-on, down rounds, and exit — the second half of the VC lifecycle",
    taglineKo: "Up vs Flat vs Down round mechanics · Bridge financing · Anti-dilution trigger · Exit options (IPO·M&A·PE·Secondary) · WhatsApp $19B · Coupang $60B · Toss · Krafton · Theranos · WeWork",
    taglineEn: "Up vs flat vs down round mechanics · bridge financing · anti-dilution triggers · exit options (IPO, M&A, PE, secondary) · WhatsApp $19B, Coupang $60B, Toss, Krafton, Theranos, WeWork",
    readingMinutes: 14,
    status: "published",
  },
  {
    slug: "vc-ch10-korea-regulation",
    ch: 10,
    titleKo: "한국 VC 특수 Regulation — 모태펀드 · KVIC · 49인 룰",
    titleEn: "Korea-specific VC regulation — KVIC, fund-of-funds, the 49-LP cap",
    taglineKo: "모태펀드 (한국벤처투자 KVIC) 출자 process · 회수재원 (7년 60% · 10년 100%) · 자본시장법 49인 룰 · 신기술사업투자조합 vs 벤처투자조합 · 정책펀드 (성장사다리·K-Bio·K-Hydrogen) · 금감원 분기보고",
    taglineEn: "KVIC fund-of-funds commitments · recovery schedule (60% by year 7, 100% by year 10) · the 49-LP Capital Markets Act cap · NTV unions vs venture investment unions · K-Bio / K-Hydrogen policy funds · FSS quarterly reporting",
    readingMinutes: 13,
    status: "published",
  },
];

export function getVcChapterBySlug(slug: string): VcChapter | undefined {
  return VC_CHAPTERS.find((c) => c.slug === slug);
}

export function getVcSeriesNav(slug: string): { prev: VcChapter | null; next: VcChapter | null } {
  const sorted = [...VC_CHAPTERS].sort((a, b) => a.ch - b.ch);
  const idx = sorted.findIndex((c) => c.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}
