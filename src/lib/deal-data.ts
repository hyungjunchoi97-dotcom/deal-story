/**
 * DealData — 딜 아카이브 공통 타입
 * 모든 딜 데이터 파일은 이 인터페이스를 준수합니다.
 */

export type DealCategory = "ma" | "activism" | "restructuring" | "control";
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

// ── 행동주의 전용: Governance Overview ───────────────────────

export type ShareholderType =
  | "controlling"   // 지배주주 / 창업주 일가
  | "activist"      // 행동주의 펀드
  | "institutional" // 일반 기관 (연기금, 보험사 등)
  | "government"    // 국부펀드 / 국민연금 등 공공기관
  | "public"        // 소수 일반주주
  | "management";   // 경영진 보유

export type ShareholderAlignment =
  | "pro"     // 경영진 지지 / 합병 찬성
  | "anti"    // 행동주의 지지 / 합병 반대
  | "neutral" // 중립 / 미확정 (캐스팅보트)

export type GovernanceIssueSeverity = "critical" | "high" | "medium";

export type ActivismDemandResult = "won" | "partial" | "lost" | "ongoing";

export interface ShareholderEntry {
  id: string;
  label: string;
  sub?: string;
  stake: string;             // "7.12%" — 표시용 문자열
  stakePct: number;          // 7.12 — 바 차트 비율 계산용
  type: ShareholderType;
  alignment: ShareholderAlignment;
}

export interface GovernanceIssue {
  title: string;
  description: string;
  severity: GovernanceIssueSeverity;
}

export interface ActivismDemand {
  demand: string;
  result: ActivismDemandResult;
  note?: string;
}

export interface GovernanceOverview {
  body: string;
  /** 주요 주주 지도 — 지분율 바 차트 + 정렬 색상 */
  shareholders: ShareholderEntry[];
  /** 이사회 구성 */
  board: {
    total: number;
    independent: number;
    affiliated: number;
    note?: string;
  };
  /** 핵심 지배구조 이슈 */
  issues: GovernanceIssue[];
  /** 행동주의 요구사항 & 결과 */
  demands: ActivismDemand[];
  /** 주가 임팩트 타임라인 */
  stockImpact: {
    preCampaign: string;          // e.g. "₩49,000"
    peakDuringCampaign: string;   // e.g. "₩62,000"
    postCampaign: string;         // e.g. "₩55,767"
    note: string;
  };
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

  /**
   * 행동주의(activism) 딜 전용 — Company Overview 다음에 렌더링
   * M&A / Restructuring 딜에는 없어도 됨
   */
  governanceOverview?: GovernanceOverview;

  /**
   * 경영권 분쟁(control) 딜 전용 — Company Overview 다음에 렌더링
   * 공격/방어 무브 타임라인 + 금융 무기 아스날 + 판정
   */
  controlBattleOverview?: ControlBattleOverview;
}

// ── 경영권 분쟁 전용: Control Battle Overview ─────────────────────

/** 배틀 무브의 진영 */
export type BattleSide = "attack" | "defense" | "neutral";

/** 금융 무기의 효과 */
export type WeaponEffectiveness = "decisive" | "effective" | "blocked" | "backfired";

/** 분쟁에서 각 진영이 시도한 단일 무브(행동) */
export interface BattleMove {
  date: string;           // e.g. "2024-09-13"
  actor: string;          // e.g. "MBK파트너스·영풍"
  side: BattleSide;
  move: string;           // 무브 타이틀 e.g. "적대적 공개매수 선언"
  detail: string;         // 2~3줄 설명
  financialImpact?: string; // e.g. "주가 +217%", "지분 14.17% 취득"
  weapon?: string;        // 사용한 금융 수단 e.g. "공개매수(TOB)"
}

/** 각 진영이 꺼내든 금융 무기 */
export interface FinancialWeapon {
  name: string;           // e.g. "공개매수 (TOB)"
  side: "attack" | "defense";
  usedBy: string;
  description: string;
  effectiveness: WeaponEffectiveness;
}

/** control 카테고리 딜의 분쟁 오버뷰 전체 데이터 */
export interface ControlBattleOverview {
  body: string;           // 섹션 인트로
  catalyst: string;       // 분쟁 발단 요약
  attackerLabel: string;  // e.g. "MBK파트너스·영풍 연합"
  defenderLabel: string;  // e.g. "최윤범 회장측"
  battleMoves: BattleMove[];
  financialWeapons: FinancialWeapon[];
  turningPoint: {
    date: string;
    event: string;
    detail: string;
  };
  verdict: {
    winner: "attack" | "defense" | "draw";
    winnerLabel: string;
    margin: string;
    note: string;
  };
  priceImpact: {
    preContest: string;   // e.g. "515,000원"
    peak: string;         // e.g. "1,630,000원"
    postContest: string;  // e.g. "640,000원"
    note: string;
  };
}

