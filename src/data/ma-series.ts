/**
 * M&A 시리즈 — Goldman Sachs M&A 실무 풀 라이프사이클 14챕터 + Ch.0
 *
 * 핵심 설계 원칙:
 *   1) 각 챕터는 5축 변수에 따라 워크플로우가 갈림
 *   2) Ch.0 = 5축 인터랙티브 매트릭스 (전체 시리즈의 오리엔테이션)
 *   3) 각 챕터 내부에서 variant snapshot + drilldown 으로 분기 명시
 */

// ── 5축 변수 체계 ────────────────────────────────────────────────────
export type AxisKey = "side" | "process" | "target" | "buyer" | "structure";

export interface AxisOption {
  id: string;
  labelKo: string;
  labelEn: string;
  shortKo?: string;
  shortEn?: string;
}

export interface VariantAxis {
  key: AxisKey;
  labelKo: string;
  labelEn: string;
  descKo: string;
  descEn: string;
  options: AxisOption[];
}

export const VARIANT_AXES: VariantAxis[] = [
  {
    key: "side",
    labelKo: "포지션",
    labelEn: "Side",
    descKo: "딜에서 우리가 누구를 대리하는가",
    descEn: "Whom we are advising",
    options: [
      { id: "sell-side",       labelKo: "Sell-side",          labelEn: "Sell-side" },
      { id: "buy-side",        labelKo: "Buy-side",           labelEn: "Buy-side" },
      { id: "fairness-only",   labelKo: "Fairness opinion만",  labelEn: "Fairness opinion only" },
    ],
  },
  {
    key: "process",
    labelKo: "프로세스",
    labelEn: "Process",
    descKo: "매각/인수를 어떤 방식으로 진행하는가",
    descEn: "How the transaction is run",
    options: [
      { id: "broad-auction",   labelKo: "Broad auction (50+)", labelEn: "Broad auction (50+)" },
      { id: "limited-auction", labelKo: "Limited auction (15)", labelEn: "Limited auction (~15)" },
      { id: "targeted",        labelKo: "Targeted (3-5)",      labelEn: "Targeted (3-5)" },
      { id: "negotiated",      labelKo: "Negotiated 1:1",      labelEn: "Negotiated 1:1" },
      { id: "reverse-inquiry", labelKo: "Reverse inquiry",     labelEn: "Reverse inquiry" },
    ],
  },
  {
    key: "target",
    labelKo: "타겟 유형",
    labelEn: "Target",
    descKo: "인수 대상의 성격",
    descEn: "Nature of the target",
    options: [
      { id: "public",          labelKo: "Public 상장사",       labelEn: "Public" },
      { id: "private",         labelKo: "Private 비상장",      labelEn: "Private" },
      { id: "carve-out",       labelKo: "Carve-out 분사",      labelEn: "Carve-out" },
      { id: "distressed",      labelKo: "Distressed 부실",     labelEn: "Distressed" },
      { id: "cross-border",    labelKo: "Cross-border",        labelEn: "Cross-border" },
    ],
  },
  {
    key: "buyer",
    labelKo: "인수자 유형",
    labelEn: "Buyer",
    descKo: "누가 인수하는가",
    descEn: "Who is acquiring",
    options: [
      { id: "strategic",       labelKo: "Strategic 동종업종",  labelEn: "Strategic" },
      { id: "pe-sponsor",      labelKo: "PE sponsor",          labelEn: "PE sponsor" },
      { id: "spac",            labelKo: "SPAC",                labelEn: "SPAC" },
      { id: "family-office",   labelKo: "Family office",       labelEn: "Family office" },
      { id: "sovereign",       labelKo: "Sovereign wealth",    labelEn: "Sovereign wealth" },
    ],
  },
  {
    key: "structure",
    labelKo: "딜 구조",
    labelEn: "Structure",
    descKo: "법적 거래 형태",
    descEn: "Legal transaction form",
    options: [
      { id: "stock-purchase",  labelKo: "Stock purchase",      labelEn: "Stock purchase" },
      { id: "asset-purchase",  labelKo: "Asset purchase",      labelEn: "Asset purchase" },
      { id: "merger",          labelKo: "Merger 합병",         labelEn: "Merger" },
      { id: "tender",          labelKo: "Tender offer",        labelEn: "Tender offer" },
      { id: "reverse-tri",     labelKo: "Reverse triangular",  labelEn: "Reverse triangular" },
    ],
  },
];

// ── Phase 정의 ────────────────────────────────────────────────────────
export type PhaseKey = "origination" | "preparation" | "outreach" | "diligence" | "negotiation" | "post-closing";

export interface Phase {
  key: PhaseKey;
  num: number;
  labelKo: string;
  labelEn: string;
  descKo: string;
  descEn: string;
  color: string;       // Tailwind text/border color stem (e.g. "blue")
  accentHex: string;   // 강조 색상
}

export const MA_PHASES: Phase[] = [
  { key: "origination",  num: 1, labelKo: "딜 따오기",      labelEn: "Origination",   descKo: "Mandate 확보 단계",         descEn: "Securing the mandate",          color: "blue",   accentHex: "#3b82f6" },
  { key: "preparation",  num: 2, labelKo: "딜 준비",        labelEn: "Preparation",   descKo: "마케팅 문서·valuation 준비", descEn: "Marketing docs, valuation",     color: "violet", accentHex: "#8b5cf6" },
  { key: "outreach",     num: 3, labelKo: "시장 떠보기",    labelEn: "Outreach",      descKo: "Buyer 접촉 + NDA + 1차 입찰", descEn: "Buyer contact, NDA, IOI",       color: "indigo", accentHex: "#6366f1" },
  { key: "diligence",    num: 4, labelKo: "실사",          labelEn: "Due Diligence", descKo: "FDD·LDD·CDD 병렬 진행",      descEn: "FDD, LDD, CDD in parallel",     color: "emerald",accentHex: "#10b981" },
  { key: "negotiation",  num: 5, labelKo: "협상·클로징",    labelEn: "Negotiation",   descKo: "SPA 협상 → 사인 → 클로징",   descEn: "SPA → signing → closing",       color: "amber",  accentHex: "#f59e0b" },
  { key: "post-closing", num: 6, labelKo: "딜 이후",        labelEn: "Post-Closing",  descKo: "WC, earnout, PMI",          descEn: "WC, earnout, PMI",              color: "rose",   accentHex: "#f43f5e" },
];

// ── 챕터별로 영향받는 축·옵션 매핑 ─────────────────────────────────────
/**
 * 챕터가 어떤 축의 어떤 옵션 조합에서 가장 크게 갈리는지.
 * Ch.0 인터랙티브에서 사용자가 옵션 선택 시 highlight 되는 챕터를 결정.
 */
export interface ChapterVariantImpact {
  axis: AxisKey;
  /** 이 옵션들이 선택됐을 때 챕터 내용이 크게 갈림 */
  impactedBy: string[]; // option ids
  /** 어떻게 갈리는지 한 줄 설명 */
  noteKo: string;
  noteEn: string;
}

// ── 챕터 정의 ────────────────────────────────────────────────────────
export type ChapterStatus = "published" | "draft" | "planned";

export interface MaChapter {
  /** URL slug (e.g. "ma-ch01-origination") */
  slug: string;
  /** 챕터 번호 (0 = overview) */
  ch: number;
  phase: PhaseKey;
  titleKo: string;
  titleEn: string;
  /** 챕터 카드/리스트용 짧은 부제 */
  taglineKo: string;
  taglineEn: string;
  /** 핵심 질문 (챕터 hero) */
  questionKo: string;
  questionEn: string;
  /** 읽기 시간 (분) */
  readingMinutes: number;
  /** 챕터에서 다루는 핵심 variant impact */
  variantImpacts: ChapterVariantImpact[];
  status: ChapterStatus;
  /** 기존 페이지에서 컨텐츠 이관 시 source slug */
  legacySlug?: string;
}

export const MA_CHAPTERS: MaChapter[] = [
  // ── Ch.0 — Deal Type Matrix ────────────────────────────────────────
  {
    slug: "ma-ch00-overview",
    ch: 0,
    phase: "origination",
    titleKo: "M&A 시리즈 — Deal Type Matrix",
    titleEn: "M&A Series — Deal Type Matrix",
    taglineKo: "5축으로 보는 M&A 라이프사이클 오리엔테이션",
    taglineEn: "M&A lifecycle through 5 axes",
    questionKo: "내 딜이 이 조합일 때, 14챕터의 어디서 무엇이 갈리는가?",
    questionEn: "Which chapter variants apply to my deal mix?",
    readingMinutes: 8,
    variantImpacts: [],
    status: "draft",
  },

  // ── Phase 1: Origination ───────────────────────────────────────────
  {
    slug: "ma-ch01-origination",
    ch: 1,
    phase: "origination",
    titleKo: "Origination & Pitching",
    titleEn: "Origination & Pitching",
    taglineKo: "Mandate 따오기 — Pitch book에서 Engagement Letter까지",
    taglineEn: "Winning the mandate — from pitch to engagement",
    questionKo: "왜 GS에게 맡기는가를 어떻게 증명하는가?",
    questionEn: "How do you prove 'why us' to win the mandate?",
    readingMinutes: 14,
    variantImpacts: [
      { axis: "side", impactedBy: ["sell-side", "buy-side", "fairness-only"], noteKo: "Sell-side는 outbound pitch, Buy-side는 inbound retainer 위주", noteEn: "Sell-side = outbound pitch, Buy-side = inbound retainer" },
    ],
    status: "published",
  },
  {
    slug: "ma-ch02-engagement",
    ch: 2,
    phase: "origination",
    titleKo: "Engagement Letter & Fee Economics",
    titleEn: "Engagement Letter & Fee Economics",
    taglineKo: "Retainer·Success fee·Lehman formula·Tail period",
    taglineEn: "Retainer, success fee, Lehman formula, tail period",
    questionKo: "$10억 딜에 BB는 정확히 얼마 받나?",
    questionEn: "How does a BB get paid on a $1B deal — line by line?",
    readingMinutes: 12,
    variantImpacts: [
      { axis: "side", impactedBy: ["sell-side", "buy-side", "fairness-only"], noteKo: "Sell-side success fee는 1-2%, Buy-side는 0.5-1%, Fairness opinion은 flat $1-3M", noteEn: "Sell-side success ~1-2%, Buy-side ~0.5-1%, Fairness opinion flat $1-3M" },
    ],
    status: "published",
  },

  // ── Phase 2: Preparation ───────────────────────────────────────────
  {
    slug: "ma-ch03-cim",
    ch: 3,
    phase: "preparation",
    titleKo: "CIM & Teaser",
    titleEn: "CIM & Teaser",
    taglineKo: "Teaser 1장 → CIM 80장 → MP deck — 마케팅 문서의 모든 것",
    taglineEn: "Teaser → CIM → MP deck — the marketing document pyramid",
    questionKo: "100p CIM 안에 어떻게 회사의 best story를 담고, 무엇을 숨기나?",
    questionEn: "How do you pack the best story into 100 pages — and what do you leave out?",
    readingMinutes: 18,
    variantImpacts: [
      { axis: "process", impactedBy: ["broad-auction", "limited-auction"], noteKo: "Auction은 Full 80p CIM 필수", noteEn: "Auctions require a full 80p CIM" },
      { axis: "process", impactedBy: ["negotiated"], noteKo: "Negotiated는 slim 30p brief 또는 CIM 없이 진행", noteEn: "Negotiated deals run on a 30p brief or skip CIM entirely" },
      { axis: "target", impactedBy: ["public"], noteKo: "Public take-private은 CIM 없음 — public filings로 갈음", noteEn: "Public take-privates use SEC filings instead of CIM" },
      { axis: "target", impactedBy: ["carve-out"], noteKo: "Carve-out은 stand-alone financials 만드는 데 6주+", noteEn: "Carve-outs require 6+ weeks to build stand-alone financials" },
    ],
    status: "published",
  },
  {
    slug: "ma-ch04-valuation",
    ch: 4,
    phase: "preparation",
    titleKo: "Valuation Football Field",
    titleEn: "Valuation Football Field",
    taglineKo: "DCF · Trading Comps · Transaction Comps · LBO 4종 통합",
    taglineEn: "DCF, Trading Comps, Transaction Comps, LBO — 4 methods unified",
    questionKo: "4가지 valuation 방법을 어떻게 하나의 가격 밴드로 통합하나?",
    questionEn: "How do you reconcile 4 valuation methods into one price band?",
    readingMinutes: 20,
    variantImpacts: [
      { axis: "target", impactedBy: ["public"], noteKo: "Public은 Premium Analysis 추가 (52주 고가, 30일 VWAP 대비)", noteEn: "Public targets require premium analysis (vs. 52-wk high, 30-day VWAP)" },
      { axis: "target", impactedBy: ["distressed"], noteKo: "Distressed는 Liquidation value + Recovery analysis 추가", noteEn: "Distressed adds liquidation value + recovery analysis" },
      { axis: "target", impactedBy: ["cross-border"], noteKo: "Cross-border는 Country risk premium + 환율 sensitivity", noteEn: "Cross-border adds country risk premium + FX sensitivity" },
      { axis: "buyer", impactedBy: ["pe-sponsor"], noteKo: "PE sponsor는 LBO 역산 — max price 검증", noteEn: "PE sponsors use LBO reverse-math to set max bid" },
    ],
    status: "draft",
  },
  {
    slug: "ma-ch05-buyer-list",
    ch: 5,
    phase: "preparation",
    titleKo: "Buyer List & Process Design",
    titleEn: "Buyer List & Process Design",
    taglineKo: "누구에게 팔 것인가, 어떻게 팔 것인가",
    taglineEn: "Who to sell to, and how",
    questionKo: "Broad auction vs Negotiated — 어떤 기준으로 process를 설계하나?",
    questionEn: "Broad auction vs negotiated — how do you design the process?",
    readingMinutes: 14,
    variantImpacts: [
      { axis: "process", impactedBy: ["broad-auction", "limited-auction", "targeted", "negotiated", "reverse-inquiry"], noteKo: "Process 선택이 전체 챕터를 좌우", noteEn: "Process choice dictates the entire workflow" },
      { axis: "buyer", impactedBy: ["strategic", "pe-sponsor"], noteKo: "Strategic vs Sponsor 비중에 따라 timeline·premium 다름", noteEn: "Strategic vs sponsor mix changes timeline and premium" },
    ],
    status: "draft",
  },

  // ── Phase 3: Outreach ──────────────────────────────────────────────
  {
    slug: "ma-ch06-nda-vdr",
    ch: 6,
    phase: "outreach",
    titleKo: "NDA & VDR",
    titleEn: "NDA & VDR",
    taglineKo: "정보 보호와 공개의 기술 — Tiered VDR 메커니즘",
    taglineEn: "The mechanics of controlled disclosure",
    questionKo: "어디까지 보여주고, 어떻게 보호하나?",
    questionEn: "How much do you show, and how do you protect it?",
    readingMinutes: 12,
    variantImpacts: [
      { axis: "process", impactedBy: ["broad-auction", "limited-auction"], noteKo: "Auction은 Tiered VDR (Stage 1-3 access)", noteEn: "Auctions use tiered VDR (3 access stages)" },
      { axis: "target", impactedBy: ["public"], noteKo: "Public 타겟은 Standstill 조항 필수", noteEn: "Public targets require standstill provisions" },
      { axis: "target", impactedBy: ["carve-out"], noteKo: "Carve-out은 Clean room (민감 데이터 분리)", noteEn: "Carve-outs require clean rooms for sensitive data" },
    ],
    status: "draft",
  },
  {
    slug: "ma-ch07-ioi",
    ch: 7,
    phase: "outreach",
    titleKo: "Indications of Interest (IOI)",
    titleEn: "Indications of Interest (IOI)",
    taglineKo: "1차 입찰 — Non-binding offer의 진짜 의미",
    taglineEn: "First-round bids — what 'non-binding' really means",
    questionKo: "Non-binding offer를 어떻게 신뢰하고 어떻게 압박하나?",
    questionEn: "How do you trust — and pressure — a non-binding bid?",
    readingMinutes: 11,
    variantImpacts: [
      { axis: "process", impactedBy: ["broad-auction", "limited-auction"], noteKo: "Auction에서만 IOI 단계 존재", noteEn: "IOI stage exists only in auctions" },
      { axis: "process", impactedBy: ["negotiated"], noteKo: "Negotiated는 IOI 생략 → 바로 LOI", noteEn: "Negotiated deals skip IOI, go straight to LOI" },
      { axis: "buyer", impactedBy: ["pe-sponsor"], noteKo: "Sponsor IOI는 financing commitment letter 동반 필수", noteEn: "Sponsor IOIs require financing commitment letters" },
    ],
    status: "draft",
  },

  // ── Phase 4: Due Diligence ─────────────────────────────────────────
  {
    slug: "ma-ch08-fdd",
    ch: 8,
    phase: "diligence",
    titleKo: "FDD — Financial Due Diligence",
    titleEn: "FDD — Financial Due Diligence",
    taglineKo: "Big 4가 보는 것 — Quality of Earnings",
    taglineEn: "What Big 4 looks for — Quality of Earnings",
    questionKo: "Reported EBITDA 와 Adjusted EBITDA 의 차이가 인수가를 결정한다",
    questionEn: "The gap between reported and adjusted EBITDA decides the price",
    readingMinutes: 16,
    variantImpacts: [
      { axis: "side", impactedBy: ["sell-side"], noteKo: "Sell-side는 Vendor DD (VDD) 미리 발주 — 모든 bidder에게 동일 보고서 배포", noteEn: "Sell-side commissions Vendor DD (VDD), shared with all bidders" },
      { axis: "side", impactedBy: ["buy-side"], noteKo: "Buy-side는 Confirmatory DD — VDD 보고서 검증 + 추가 작업", noteEn: "Buy-side runs confirmatory DD on top of VDD" },
    ],
    status: "draft",
    legacySlug: "fdd",
  },
  {
    slug: "ma-ch09-ldd",
    ch: 9,
    phase: "diligence",
    titleKo: "LDD — Legal Due Diligence",
    titleEn: "LDD — Legal Due Diligence",
    taglineKo: "법무법인의 12 카테고리 체크리스트",
    taglineEn: "The law firm's 12-category checklist",
    questionKo: "Material contract의 change-of-control 조항이 딜을 멈출 수 있다",
    questionEn: "A single change-of-control clause can kill the deal",
    readingMinutes: 14,
    variantImpacts: [
      { axis: "target", impactedBy: ["public"], noteKo: "Public은 SEC filing review가 핵심", noteEn: "Public targets focus on SEC filing review" },
      { axis: "target", impactedBy: ["cross-border"], noteKo: "Cross-border는 현지 법무팀 + 국제법 자문 병렬", noteEn: "Cross-border runs local + international legal counsel in parallel" },
    ],
    status: "draft",
    legacySlug: "ldd",
  },
  {
    slug: "ma-ch10-cdd",
    ch: 10,
    phase: "diligence",
    titleKo: "CDD & Other DD",
    titleEn: "CDD & Other DD",
    taglineKo: "Commercial · Tax · HR · IT · ESG — 컨설팅사가 보는 것",
    taglineEn: "Commercial, Tax, HR, IT, ESG — what consultants check",
    questionKo: "Synergy 검증을 어떻게 정량화하나?",
    questionEn: "How do you quantify synergy validation?",
    readingMinutes: 13,
    variantImpacts: [
      { axis: "buyer", impactedBy: ["strategic"], noteKo: "Strategic은 synergy validation 핵심", noteEn: "Strategic buyers prioritize synergy validation" },
      { axis: "buyer", impactedBy: ["pe-sponsor"], noteKo: "Sponsor는 standalone 수익성 + exit path 검증", noteEn: "Sponsors focus on standalone profitability + exit path" },
    ],
    status: "draft",
    legacySlug: "cdd",
  },

  // ── Phase 5: Negotiation ───────────────────────────────────────────
  {
    slug: "ma-ch11-spa",
    ch: 11,
    phase: "negotiation",
    titleKo: "SPA Negotiation",
    titleEn: "SPA Negotiation",
    taglineKo: "Purchase price · R&W · Indemnification · MAC clause",
    taglineEn: "Purchase price, R&W, indemnification, MAC",
    questionKo: "$1B 딜에서 SPA 한 줄이 얼마짜리인가?",
    questionEn: "On a $1B deal, what's a single SPA clause worth?",
    readingMinutes: 22,
    variantImpacts: [
      { axis: "structure", impactedBy: ["stock-purchase"], noteKo: "Stock purchase — 가장 일반적, 모든 자산·부채 자동 이전", noteEn: "Stock purchase — most common, all assets/liabilities transfer automatically" },
      { axis: "structure", impactedBy: ["asset-purchase"], noteKo: "Asset purchase — 선별 인수, contract assignment 수동 (6-9개월)", noteEn: "Asset purchase — cherry-pick, manual contract assignment (6-9 months)" },
      { axis: "structure", impactedBy: ["merger"], noteKo: "Merger Agreement — Public take-private, DGCL §251 vs §253", noteEn: "Merger Agreement — public take-privates, DGCL §251 vs §253" },
      { axis: "structure", impactedBy: ["tender"], noteKo: "Tender Offer — Williams Act, Schedule TO, 20 business days", noteEn: "Tender Offer — Williams Act, Schedule TO, 20 business days minimum" },
      { axis: "structure", impactedBy: ["reverse-tri"], noteKo: "Reverse Triangular — Merger Sub 통한 인수, target 생존 → 계약 보존", noteEn: "Reverse Triangular — via Merger Sub, target survives, preserves contracts" },
    ],
    status: "draft",
  },
  {
    slug: "ma-ch12-final-bids",
    ch: 12,
    phase: "negotiation",
    titleKo: "Final Bids & Negotiation",
    titleEn: "Final Bids & Negotiation",
    taglineKo: "Final round의 심리전 — Mark-up · Best and Final · Break-up fee",
    taglineEn: "The psychology of final round — markup, best-and-final, break-up fee",
    questionKo: "5명의 bidder를 어떻게 동시에 압박하나?",
    questionEn: "How do you pressure 5 bidders simultaneously?",
    readingMinutes: 13,
    variantImpacts: [
      { axis: "process", impactedBy: ["broad-auction", "limited-auction"], noteKo: "Auction은 simultaneous final bids — 같은 시각 마감", noteEn: "Auctions run simultaneous final bids — same deadline" },
      { axis: "target", impactedBy: ["public"], noteKo: "Public은 go-shop period 일반적 (deal 발표 후 30-45일 추가 입찰 허용)", noteEn: "Public targets often include a 30-45 day go-shop period" },
    ],
    status: "draft",
  },
  {
    slug: "ma-ch13-closing",
    ch: 13,
    phase: "negotiation",
    titleKo: "Signing → Closing",
    titleEn: "Signing → Closing",
    taglineKo: "Regulatory · Funds Flow · Conditions Precedent",
    taglineEn: "Regulatory, funds flow, conditions precedent",
    questionKo: "사인 이후 6개월, 무엇이 딜을 멈출 수 있나?",
    questionEn: "What can still kill the deal in the 6 months after signing?",
    readingMinutes: 17,
    variantImpacts: [
      { axis: "target", impactedBy: ["cross-border"], noteKo: "Cross-border는 multi-jurisdiction antitrust (US HSR + EU + MOFCOM + KFTC ...)", noteEn: "Cross-border = multi-jurisdiction antitrust (US HSR + EU + MOFCOM + KFTC)" },
      { axis: "target", impactedBy: ["public"], noteKo: "Public은 proxy filing + shareholder vote (3-6개월 추가)", noteEn: "Public targets need proxy filing + shareholder vote (+3-6 months)" },
      { axis: "buyer", impactedBy: ["sovereign"], noteKo: "Sovereign wealth는 CFIUS 심사 추가 (45-90일)", noteEn: "Sovereign wealth triggers CFIUS review (+45-90 days)" },
    ],
    status: "draft",
  },

  // ── Phase 6: Post-Closing ──────────────────────────────────────────
  {
    slug: "ma-ch14-post-closing",
    ch: 14,
    phase: "post-closing",
    titleKo: "Post-Closing — WC, Earnout, PMI",
    titleEn: "Post-Closing — WC, Earnout, PMI",
    taglineKo: "사인 이후 90일 — Working capital true-up · Earnout dispute · Day-100",
    taglineEn: "First 90 days post-close — WC true-up, earnout disputes, Day-100",
    questionKo: "Banker는 클로징 후 무엇을 하는가? (힌트: 거의 손 뗌)",
    questionEn: "What does the banker do after closing? (Hint: almost nothing)",
    readingMinutes: 12,
    variantImpacts: [
      { axis: "buyer", impactedBy: ["strategic"], noteKo: "Strategic은 PMI 전면 가동 — Day-1, Day-100 plan", noteEn: "Strategic buyers launch full PMI — Day-1, Day-100 plans" },
      { axis: "buyer", impactedBy: ["pe-sponsor"], noteKo: "Sponsor는 100-day plan + operating partner 배치", noteEn: "Sponsors deploy 100-day plan + operating partner" },
      { axis: "target", impactedBy: ["carve-out"], noteKo: "Carve-out은 TSA 기간(보통 6-24개월) 종속", noteEn: "Carve-outs depend on TSA (typically 6-24 months)" },
    ],
    status: "draft",
  },
];

// ── Helpers ──────────────────────────────────────────────────────────
export function getMaChapterBySlug(slug: string): MaChapter | undefined {
  return MA_CHAPTERS.find((c) => c.slug === slug);
}

export function getMaChaptersByPhase(phase: PhaseKey): MaChapter[] {
  return MA_CHAPTERS.filter((c) => c.phase === phase);
}

/** 시리즈 내 prev/next (ch 번호 기준) */
export function getMaSeriesNav(slug: string): { prev: MaChapter | null; next: MaChapter | null } {
  const current = getMaChapterBySlug(slug);
  if (!current) return { prev: null, next: null };
  const sorted = [...MA_CHAPTERS].sort((a, b) => a.ch - b.ch);
  const idx = sorted.findIndex((c) => c.slug === slug);
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null,
  };
}

export function getPhase(key: PhaseKey): Phase | undefined {
  return MA_PHASES.find((p) => p.key === key);
}

export function getAxis(key: AxisKey): VariantAxis | undefined {
  return VARIANT_AXES.find((a) => a.key === key);
}
