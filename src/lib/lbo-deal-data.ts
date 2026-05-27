/**
 * LBO Deal Data Types
 * PE 레버리지 바이아웃 딜 전용 타입 정의
 */

export interface LboCapitalTranche {
  tranche: string;       // "1L Senior Secured Term Loan"
  trancheEn: string;
  amountBn: number;      // $B
  rate: string;          // "LIBOR + 300bp"
  maturity: string;      // "7년"
  maturityEn: string;
  color: string;         // Tailwind bg class
}

export interface LboLeveragePoint {
  year: number;
  debtEbitda: number;    // 12.4
  ebitdaBn: number;      // 1.65
  label?: string;        // "GFC 바닥" etc.
  labelEn?: string;
}

export interface LboMilestone {
  year: string;          // "2007.7"
  eventKo: string;
  eventEn: string;
  type: "entry" | "crisis" | "recovery" | "value-creation" | "exit";
}

export interface LboThesisDriver {
  driver: "operations" | "multiple" | "leverage" | "sector";
  icon: string;           // emoji
  titleKo: string;
  titleEn: string;
  bodyKo: string;
  bodyEn: string;
  isPrimary: boolean;
}

export interface LboMetrics {
  fundName: string;
  fundNameEn: string;
  entryYear: number;
  exitYear?: number;

  // Valuation
  entryEvBn: number;
  exitEvBn?: number;
  entryEbitdaBn: number;
  exitEbitdaBn?: number;
  entryMultiple: number;   // EV/EBITDA at entry
  exitMultiple?: number;

  // Returns
  equityInvestedBn: number;
  equityProceedsBn?: number;
  moic?: number;           // e.g. 2.6
  irrPct?: number;         // e.g. 16.7

  // Leverage
  totalDebtBn: number;
  debtToEbitda: number;    // at entry

  exitType?: "ipo" | "trade-sale" | "secondary" | "bankruptcy" | "held";

  capitalStructure: LboCapitalTranche[];
  leverageJourney: LboLeveragePoint[];

  returnsDecomposition?: {
    fromEbitdaGrowth: number;    // MOIC contribution
    fromMultipleExpansion: number;
    fromDebtPaydown: number;
    total: number;
  };

  investmentThesis: LboThesisDriver[];
  keyMilestones: LboMilestone[];
}

export interface LboFinancialYear {
  year: string;
  ebitdaBn: number;
  revenueBn?: number;
  ebitdaMarginPct?: number;
  note?: string;
  noteEn?: string;
}

export interface LboTombstone {
  fundInitials: string;
  fundBg: string;
  portfolioInitials: string;
  portfolioBg: string;
  fundName: string;
  portfolioName: string;
  dealTitle: string;
  dealSize: string;
  entryMultiple: string;
  moic?: string;
  irr?: string;
  holdYears?: string;
  closeDate: string;
}

export interface LboDeal {
  slug: string;
  category: "lbo";

  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;

  industry: string;
  industryEn: string;
  country: string;
  announcedAt: string;
  closedAt?: string;
  announcedDisplay: string;
  closedDisplay?: string;
  readingMinutes: number;
  tags: string[];
  excerpt: string;
  excerptEn: string;

  fund: {
    initials: string;
    bg: string;
    label: string;
    labelEn: string;
  };
  portfolio: {
    initials: string;
    bg: string;
    label: string;
    labelEn: string;
  };

  lboMetrics: LboMetrics;

  background: string[];
  backgroundEn: string[];
  executiveSummary: string[];
  executiveSummaryEn: string[];

  companyOverview: {
    body: string;
    bodyEn: string;
    metrics: { label: string; labelEn: string; value: string; sub?: string }[];
    financials: LboFinancialYear[];
    financialsNote?: string;
    financialsNoteEn?: string;
  };

  postDealAssessment: {
    body: string;
    bodyEn: string;
    overallVerdict: string;
    overallVerdictEn: string;
    positives: string[];
    positivesEn: string[];
    risks: string[];
    risksEn: string[];
    editorNote: string;
    editorNoteEn: string;
  };

  tombstone: LboTombstone;

  concepts: {
    term: string;
    termEn: string;
    href?: string;
    description: string;
    descriptionEn: string;
  }[];

  faq: { q: string; qEn: string; a: string; aEn: string }[];

  sources: { id: number; text: string; url?: string }[];

  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}
