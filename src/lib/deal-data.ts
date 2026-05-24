/**
 * DealData — 딜 아카이브 공통 타입
 * 모든 딜 데이터 파일은 이 인터페이스를 준수합니다.
 */

export type DealCategory = "ma" | "activism" | "restructuring";
export type RoleType = "financial" | "legal" | "other";

// ── 재무 ──────────────────────────────────────────────────────
export interface FinancialYear {
  year: string;
  revenue: number;
  cogs: number;
  grossProfit: number;
  sga: number;
  operatingIncome: number;
  ebitda: number;
}

// ── 지배구조 다이어그램 ────────────────────────────────────────
export interface OwnershipNode {
  id: string;
  label: string;
  sub: string;
  type: "acquirer" | "target" | "public" | "entity" | "fund";
}

export interface OwnershipEdge {
  from: string;
  to: string;
  label: string;
}

export interface OwnershipStructure {
  nodes: OwnershipNode[];
  edges: OwnershipEdge[];
}

// ── 자문사 ────────────────────────────────────────────────────
export interface AdvisorItem {
  firm: string;
  role: string;
  roleType: RoleType;
  note: string;
}

export interface AdvisorSide {
  side: "acquirer" | "target";
  sideLabel: string;
  initials: string;
  bg: string;
  advisors: AdvisorItem[];
}

// ── Tombstone ─────────────────────────────────────────────────
export interface TombstoneData {
  /** 인수자 이니셜 (e.g. "MSFT") */
  acquirerInitials: string;
  /** 인수자 배경색 Tailwind 클래스 (e.g. "bg-blue-600") */
  acquirerBg: string;
  /** 피인수자 이니셜 */
  targetInitials: string;
  /** 피인수자 배경색 Tailwind 클래스 */
  targetBg: string;
  acquirerName: string;
  targetName: string;
  dealTitle: string;
  dealSize: string;
  dealSizeUSD: string;
  evEbitda: string;
  closeDate: string;
}

// ── 출처 ──────────────────────────────────────────────────────
export interface DealSource {
  id: number;
  text: string;
  url?: string;
}

// ── Valuation 테이블 행 ────────────────────────────────────────
export interface ValuationRow {
  item: string;
  val: string;
  note: string;
  accent?: boolean;
}

// ── 주요 플레이어 ─────────────────────────────────────────────
export interface IndustryPlayer {
  name: string;
  role: string;
}

// ── 거래 핵심 조건 ────────────────────────────────────────────
export interface KeyTerm {
  label: string;
  value: string;
  accent?: boolean;
}

// ── AUM / 매출 바 차트 행 ─────────────────────────────────────
export interface BarChartRow {
  name: string;
  pct: number;
  color: string;
  amt?: string;
}

// ── 메인 DealData 인터페이스 ──────────────────────────────────
export interface DealData {
  slug: string;
  title: string;
  subtitle: string;
  category: DealCategory;
  industry: string;
  country: string;
  announcedAt: string;
  closedAt?: string;
  announcedDisplay: string;
  closedDisplay?: string;
  readingMinutes: number;
  tags: string[];
  excerpt: string;

  acquirer: { initials: string; bg: string; label: string };
  target:   { initials: string; bg: string; label: string };

  background: string[];

  dealSummary: {
    dealValueDisplay: string;
    acquirerName: string;
    targetName: string;
    announcedDisplay: string;
    closedDisplay: string;
    country: string;
  };

  executiveSummary: string[];

  industryOverview: {
    body: string;
    metrics: Array<{ label: string; value: string; sub?: string }>;
    subBody?: string;
    players?: IndustryPlayer[];
  };

  companyOverview: {
    targetName: string;
    body: string;
    metrics: Array<{ label: string; value: string; sub?: string }>;
    aumBreakdown?: BarChartRow[];
    revenueBreakdown?: BarChartRow[];
    revenueNote?: string;
    financials: FinancialYear[];
    financialsNote?: string;
    financialsCurrency?: string;
    financialsUnit?: string;
  };

  dealStructure: {
    body: string;
    preOwnership: OwnershipStructure;
    postOwnership: OwnershipStructure;
    keyTerms: KeyTerm[];
  };

  advisors: {
    body: string;
    sides: AdvisorSide[];
    disclaimer?: string;
  };

  valuation: {
    body: string;
    rows: ValuationRow[];
    disclaimer?: string;
  };

  rationale: {
    buyer: {
      title: string;
      initials: string;
      bg: string;
      points: string[];
    };
    seller: {
      title: string;
      initials: string;
      bg: string;
      points: string[];
    };
  };

  postDealAssessment: {
    asOfDate: string;
    body: string;
    overallVerdict: string;
    positives: string[];
    risks: string[];
    editorNote: string;
  };

  tombstone: TombstoneData;

  sources: DealSource[];

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    /** <title> 태그 — 60자 이내, 주요 키워드 포함 */
    title: string;
    /** meta description — 155자 이내 */
    description: string;
    /** 타겟 키워드 목록 (다중 검색 의도 커버) */
    keywords: string[];
    /** OG 이미지 URL (없으면 동적 생성) */
    ogImage?: string;
  };

  /** 이 딜에서 다루는 핵심 금융 개념 — 교육 페이지 내부 링크용 */
  concepts: Array<{
    term: string;           // e.g. "공개매수 (TOB)"
    href?: string;          // e.g. "/learn/tob" (교육 페이지 준비 전엔 optional)
    description: string;    // 한 줄 설명
  }>;

  /** FAQ — Google People Also Ask 공략 */
  faq: Array<{
    q: string;
    a: string;
  }>;
}

