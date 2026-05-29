/**
 * notes.ts — Notes 섹션 SSOT
 * 카테고리: macro | strategy | market | essay | activism
 */

// ── Categories ─────────────────────────────────────────────────────────────────

export type NoteCategory = "macro" | "strategy" | "market" | "essay" | "activism";

// ── Series ─────────────────────────────────────────────────────────────────────
/**
 * 시리즈물 그룹핑 식별자. 새 시리즈 추가 시 ID 등록 → 메타데이터 정의 → 각 노트에 부여.
 * 시리즈에 속하지 않는 노트는 series 필드를 비워두면 인덱스에서 단일 카드로 렌더된다.
 */
export type NoteSeriesId = "dollar-hegemony" | "ai-capital-cycle";

export const NOTE_SERIES_META: Record<
  NoteSeriesId,
  {
    label: string;
    labelEn: string;
    desc: string;
    descEn: string;
    icon: string;
    accent: string;
    category: NoteCategory; // 폴더 색상/카테고리 매핑
  }
> = {
  "dollar-hegemony": {
    label: "달러 패권",
    labelEn: "Dollar Hegemony",
    desc: "달러가 어떻게 세계의 돈이 됐고, 지금 어떻게 재설계되고 있는가",
    descEn: "How the dollar became the world's money — and how it's being redesigned",
    icon: "💵",
    accent: "#0ea5e9",
    category: "macro",
  },
  "ai-capital-cycle": {
    label: "AI 자본 사이클",
    labelEn: "AI Capital Cycle",
    desc: "$600B의 회로 — AI 자본이 어디로 흐르고, 어디서 끊어지는가",
    descEn: "The $600B circuit — where AI capital flows, where it could break",
    icon: "🔌",
    accent: "#8b5cf6",
    category: "macro",
  },
};

export const NOTE_CATEGORY_META: Record<
  NoteCategory,
  {
    label: string;
    labelEn: string;
    icon: string;
    accent: string;
    accentTw: string;
    border: string;
    desc: string;
    descEn: string;
  }
> = {
  macro: {
    label: "매크로",
    labelEn: "Macro",
    icon: "🌐",
    accent: "#0ea5e9",
    accentTw: "bg-sky-500",
    border: "border-sky-200 dark:border-sky-800",
    desc: "달러, 금리, 글로벌 자본 흐름",
    descEn: "Dollar, rates, global capital flows",
  },
  strategy: {
    label: "전략",
    labelEn: "Strategy",
    icon: "♟️",
    accent: "#8b5cf6",
    accentTw: "bg-violet-500",
    border: "border-violet-200 dark:border-violet-800",
    desc: "기업 전략, 경쟁, M&A 논리",
    descEn: "Corporate strategy, competition, M&A logic",
  },
  market: {
    label: "마켓",
    labelEn: "Market",
    icon: "📈",
    accent: "#10b981",
    accentTw: "bg-emerald-500",
    border: "border-emerald-200 dark:border-emerald-800",
    desc: "주식, 채권, 파생 시장 구조",
    descEn: "Equity, fixed income, derivatives",
  },
  essay: {
    label: "에세이",
    labelEn: "Essay",
    icon: "✍️",
    accent: "#f59e0b",
    accentTw: "bg-amber-500",
    border: "border-amber-200 dark:border-amber-800",
    desc: "금융 철학, 투자 사고",
    descEn: "Financial philosophy, investment thinking",
  },
  activism: {
    label: "행동주의",
    labelEn: "Activism",
    icon: "⚡",
    accent: "#ef4444",
    accentTw: "bg-red-500",
    border: "border-red-200 dark:border-red-800",
    desc: "행동주의 투자, 지배구조, 코리아 디스카운트",
    descEn: "Activist investing, governance, Korea discount",
  },
};

// ── Block types ────────────────────────────────────────────────────────────────

export type NoteMetric = {
  label: string;
  labelEn?: string;
  value: string;
  valueEn?: string;
  sub?: string;
  subEn?: string;
  color?: string;
};

export type NoteTableDef = {
  id: string;
  title?: string;
  titleEn?: string;
  headers: string[];
  headersEn?: string[];
  rows: (string | number)[][];
  rowsEn?: (string | number)[][];
  caption?: string;
  captionEn?: string;
};

export type NoteCalloutDef = {
  variant: "insight" | "warning" | "quote" | "example";
  heading?: string;
  headingEn?: string;
  body: string;
  bodyEn?: string;
};

export type PBRPoint             = { year: string; KOSPI: number; SP500: number; TOPIX: number };
export type TaxRateBar           = { country: string; countryEn: string; rate: number; color: string };
export type IndexPoint           = { year: string; KOSPI: number; Nikkei: number };
export type ReserveSharePoint    = { year: string; share: number };
export type PrivilegeGapPoint    = { category: string; categoryEn: string; dollarRole: number; usShare: number };
export type FedBalanceSheetPoint = { year: string; assets: number };
export type RepoCrisisPoint      = { date: string; repoRate: number; fedRate: number };
export type CurrencyMixPoint     = { year: string; USD: number; EUR: number; JPY: number; GBP: number; CNY: number; other: number };
export type StablecoinPoint      = { year: string; USDT: number; USDC: number; other: number };

// ── AI Capital Cycle 차트 데이터 타입 ────────────────────────────────────────
export type CapexFcfPoint = {
  year: string;        // "'20", "'21" ...
  MSFT: number;        // capex $B
  GOOGL: number;
  META: number;
  AMZN: number;
  ORCL: number;
  totalFcf: number;    // 5사 합산 FCF, 라인 오버레이용
};

export type LucentFinancingPoint = {
  fy: string;          // "FY97", "FY98" ...
  commitments: number; // 고객 financing 약정 $B
  provisions: number;  // 충당금/상각 $B
};

export type CiscoLostDecadePoint = {
  year: string;        // "'00", "'01" ... or "FY00"
  stockIdx: number;    // 100 = 2000.3 피크
  revenueIdx: number;  // 100 = FY00 피크
  event?: string;      // annotation key
};

// 회로형 자금 흐름 다이어그램 — Recharts 가 아닌 custom SVG 로 렌더
// 3개 노드 + 3-4개 화살표로 단순 삼각형/사각형 회로를 그림
export type CircularFlowNode = {
  id: string;
  label: string;
  labelEn?: string;
  sub?: string;        // 부가 설명 (예: "GPU 공급자")
  subEn?: string;
  color: string;       // hex
};
export type CircularFlowEdge = {
  from: string;        // node id
  to: string;
  amount: string;      // "$100B equity"
  amountEn?: string;
  detail?: string;     // 부가 (예: "milestone-gated")
  detailEn?: string;
};

// HBM 점유율 — 3-segment stacked (SK하이닉스 / 삼성 / 마이크론)
export type HbmSharePoint = {
  quarter: string;     // "23Q1" ...
  skhynix: number;     // %
  samsung: number;
  micron: number;
};

// NVDA 데이터센터 매출 — 분기별 single line + annotation 지원
export type NvdaDcRevenuePoint = {
  quarter: string;     // "FY23Q4" ...
  revenue: number;     // $B
  event?: string;
};

// 광/네트워킹 — DC 매출 mix (Lumentum, Coherent 등 활용)
export type OpticalMixPoint = {
  fy: string;
  dc: number;          // datacom $B
  telecom: number;     // telecom $B
  industrial: number;  // industrial $B
};

// CXL/PCIe 채택 — generation roadmap (Astera Labs 등)
export type CxlAdoptionPoint = {
  year: string;
  Gen5: number;        // % of new server deployments
  Gen6: number;
  Gen7: number;
};

// IEA 데이터센터 전력 수요 — 시나리오별
export type DcPowerDemandPoint = {
  year: string;
  base: number;        // TWh
  high?: number;       // high scenario
  low?: number;
};

// 인터커넥션 큐 — 미국 그리드 적체 (LBNL Queued Up)
export type InterconnectionQueuePoint = {
  year: string;
  totalGW: number;     // active queue GW
  withdrawnGW?: number;
};

// Anthropic Economic Index — 직업별 AI 침투율 시계열
export type AiPenetrationPoint = {
  period: string;      // "25Q1" ...
  software: number;    // % AI usage in occupation
  finance: number;
  legal: number;
  customer: number;    // customer service
};

// Mag 7 vs S&P 493 forward P/E 스프레드
export type PeSpreadPoint = {
  year: string;
  mag7: number;        // forward P/E
  sp493: number;
};

export type NoteChartDef =
  | { id: "pbr-comparison";    title: string; titleEn?: string; caption?: string; captionEn?: string; data: PBRPoint[] }
  | { id: "tax-rates";         title: string; titleEn?: string; caption?: string; captionEn?: string; data: TaxRateBar[] }
  | { id: "index-comparison";  title: string; titleEn?: string; caption?: string; captionEn?: string; data: IndexPoint[]; annotations?: { year: string; label: string; labelEn?: string }[] }
  | { id: "reserve-share";     title: string; titleEn?: string; caption?: string; captionEn?: string; data: ReserveSharePoint[] }
  | { id: "privilege-gap";     title: string; titleEn?: string; caption?: string; captionEn?: string; data: PrivilegeGapPoint[] }
  | { id: "fed-balance-sheet"; title: string; titleEn?: string; caption?: string; captionEn?: string; data: FedBalanceSheetPoint[]; annotations?: { year: string; label: string; labelEn?: string }[] }
  | { id: "repo-crisis";       title: string; titleEn?: string; caption?: string; captionEn?: string; data: RepoCrisisPoint[] }
  | { id: "currency-mix";      title: string; titleEn?: string; caption?: string; captionEn?: string; data: CurrencyMixPoint[] }
  | { id: "stablecoin-growth"; title: string; titleEn?: string; caption?: string; captionEn?: string; data: StablecoinPoint[] }
  | { id: "capex-fcf-combo";   title: string; titleEn?: string; caption?: string; captionEn?: string; data: CapexFcfPoint[] }
  | { id: "lucent-financing";  title: string; titleEn?: string; caption?: string; captionEn?: string; data: LucentFinancingPoint[] }
  | { id: "cisco-lost-decade"; title: string; titleEn?: string; caption?: string; captionEn?: string; data: CiscoLostDecadePoint[]; annotations?: { year: string; label: string; labelEn?: string }[] }
  | { id: "circular-flow";     title: string; titleEn?: string; caption?: string; captionEn?: string; nodes: CircularFlowNode[]; edges: CircularFlowEdge[] }
  | { id: "hbm-share";         title: string; titleEn?: string; caption?: string; captionEn?: string; data: HbmSharePoint[] }
  | { id: "nvda-dc-revenue";   title: string; titleEn?: string; caption?: string; captionEn?: string; data: NvdaDcRevenuePoint[]; annotations?: { quarter: string; label: string; labelEn?: string }[] }
  | { id: "optical-mix";       title: string; titleEn?: string; caption?: string; captionEn?: string; data: OpticalMixPoint[] }
  | { id: "cxl-adoption";      title: string; titleEn?: string; caption?: string; captionEn?: string; data: CxlAdoptionPoint[] }
  | { id: "dc-power-demand";   title: string; titleEn?: string; caption?: string; captionEn?: string; data: DcPowerDemandPoint[] }
  | { id: "queue-growth";      title: string; titleEn?: string; caption?: string; captionEn?: string; data: InterconnectionQueuePoint[] }
  | { id: "ai-penetration";    title: string; titleEn?: string; caption?: string; captionEn?: string; data: AiPenetrationPoint[] }
  | { id: "pe-spread";         title: string; titleEn?: string; caption?: string; captionEn?: string; data: PeSpreadPoint[] };

export type NoteBlock =
  | { type: "text";    body: string; bodyEn?: string }
  | { type: "metrics"; items: NoteMetric[] }
  | { type: "chart";   chart: NoteChartDef }
  | { type: "table";   table: NoteTableDef }
  | { type: "callout"; callout: NoteCalloutDef };

export type NoteSection = {
  heading?: string;
  headingEn?: string;
  blocks: NoteBlock[];
};

export type NoteReference = {
  id: number;
  author?: string;
  title: string;
  source: string;
  year?: string;
  url?: string;
  note?: string;
};

export type NoteData = {
  slug: string;
  category: NoteCategory;
  status: "published" | "draft";
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  date: string;
  readingMinutes: number;
  keyPoints: string[];
  keyPointsEn?: string[];
  sections: NoteSection[];
  references: NoteReference[];
  /** 시리즈물 그룹핑. 같은 series ID를 가진 노트들은 인덱스에서 폴더로 묶인다. */
  series?: NoteSeriesId;
  /** 시리즈 내 순서 (1편, 2편, 3편 ...). seriesOrder 오름차순으로 정렬됨. */
  seriesOrder?: number;
};

// ── Helper ─────────────────────────────────────────────────────────────────────

export function getNoteBySlug(slug: string): NoteData | undefined {
  return ALL_NOTES.find((n) => n.slug === slug);
}

/**
 * 같은 시리즈 내에서 prev/next 노트를 찾는다.
 * seriesOrder 오름차순 기준. 시리즈가 없으면 null/null 반환.
 */
export function getSeriesNav(slug: string): { prev: NoteData | null; next: NoteData | null } {
  const current = getNoteBySlug(slug);
  if (!current || !current.series || current.seriesOrder == null) {
    return { prev: null, next: null };
  }
  const siblings = ALL_NOTES
    .filter((n) => n.series === current.series && n.status === "published" && n.seriesOrder != null)
    .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));
  const idx = siblings.findIndex((n) => n.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? siblings[idx - 1] : null,
    next: idx < siblings.length - 1 ? siblings[idx + 1] : null,
  };
}

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #1 — 코리아 디스카운트: KOSPI 10,000 시대, 구조적 할인은 끝났는가
// ══════════════════════════════════════════════════════════════════════════════

const koreaDiscount: NoteData = {
  slug: "korea-discount-activism",
  category: "activism",
  status: "published",
  title: "KOSPI 10,000 시대, 코리아 디스카운트는 끝났는가",
  titleEn: "KOSPI 10,000: Is the Korea Discount Finally Over?",
  description:
    "지수가 사상 최고를 향해 달려도 PBR은 여전히 글로벌 최저 수준이다. 행동주의 투자, 상속세 구조, 일본 TSE 개혁과의 비교를 통해 코리아 디스카운트의 본질을 해부한다.",
  descriptionEn:
    "Even as KOSPI races toward record highs, its PBR remains among the world's lowest. We dissect the Korea Discount through the lens of activism, inheritance tax structure, and the Japan TSE reform comparison.",
  date: "2026-05-28",
  readingMinutes: 20,
  keyPoints: [
    "KOSPI 10,000은 구조 해소가 아닌 반도체 사이클의 이익 상승이다 — PBR은 여전히 글로벌 최저 수준",
    "코리아 디스카운트의 본질: 상속세 실효세율 60%가 오너의 주가 부양 인센티브를 구조적으로 제거한다",
    "일본 TSE 개혁은 법 개정 없이 거래소 가이드라인만으로 닛케이 40,000을 이끌었다",
    "한국 상법 개정의 핵심(이사 충실의무 확대)은 재계 반발로 여전히 계류 중이다",
    "세금 구조가 바뀌지 않으면 반도체 사이클이 꺾일 때 디스카운트는 재현된다",
  ],
  keyPointsEn: [
    "KOSPI 10,000 reflects an earnings surge from semiconductor cycles — PBR remains near global lows",
    "The Korea Discount's root cause: 60% effective inheritance tax structurally eliminates owners' incentive to push stock prices",
    "Japan's TSE reform drove Nikkei to 40,000 using only exchange guidelines — no legislative reform needed",
    "Korea's core commercial law reform (fiduciary duty expansion) remains stalled amid chaebol opposition",
    "Without tax structure reform, the discount will re-emerge when the semiconductor cycle turns",
  ],
  sections: [
    // ── 1 ──────────────────────────────────────────────────────────────────────
    {
      heading: "KOSPI 10,000 — 진짜 구조 해소인가",
      headingEn: "KOSPI 10,000 — Real Structural Resolution?",
      blocks: [
        {
          type: "text",
          body: "KOSPI가 8,000을 돌파하고 10,000을 향해 달리는 지금, 많은 시장 참여자들이 묻는다: **코리아 디스카운트는 끝난 것인가?** 밸류업 프로그램, 상법 개정 논의, 행동주의 펀드의 약진 — 표면적으로 모든 것이 달라진 것처럼 보인다.\n\n그러나 지수의 절대 레벨 상승과 구조적 밸류에이션 할인의 해소는 전혀 다른 이야기다.",
          bodyEn:
            "As KOSPI breaks through 8,000 and races toward 10,000, many market participants ask: **is the Korea Discount finally over?** Value-up programs, commercial law reform debates, activist funds gaining ground — on the surface, everything seems to have changed.\n\nBut an absolute index level rising and a structural valuation discount closing are entirely different stories.",
        },
        {
          type: "chart",
          chart: {
            id: "pbr-comparison",
            title: "주가순자산비율(PBR) 국제 비교 (2013–2024)",
            titleEn: "Price-to-Book Ratio: International Comparison (2013–2024)",
            caption: "출처: Bloomberg, KRX, Refinitiv. 각 지수 연말 기준 PBR. S&P 500 스케일 우축 사용.",
            captionEn: "Source: Bloomberg, KRX, Refinitiv. Year-end PBR for each index. S&P 500 uses right axis.",
            data: [
              { year: "'13", KOSPI: 0.95, SP500: 2.49, TOPIX: 1.27 },
              { year: "'14", KOSPI: 0.98, SP500: 2.77, TOPIX: 1.34 },
              { year: "'15", KOSPI: 0.95, SP500: 2.81, TOPIX: 1.39 },
              { year: "'16", KOSPI: 0.98, SP500: 2.95, TOPIX: 1.27 },
              { year: "'17", KOSPI: 1.08, SP500: 3.21, TOPIX: 1.54 },
              { year: "'18", KOSPI: 0.91, SP500: 3.07, TOPIX: 1.27 },
              { year: "'19", KOSPI: 0.89, SP500: 3.38, TOPIX: 1.19 },
              { year: "'20", KOSPI: 1.02, SP500: 3.69, TOPIX: 1.21 },
              { year: "'21", KOSPI: 1.10, SP500: 4.46, TOPIX: 1.47 },
              { year: "'22", KOSPI: 0.87, SP500: 3.76, TOPIX: 1.22 },
              { year: "'23", KOSPI: 0.93, SP500: 4.25, TOPIX: 1.48 },
              { year: "'24", KOSPI: 0.98, SP500: 4.80, TOPIX: 1.58 },
            ],
          },
        },
        {
          type: "text",
          body: "2024년 말 기준, KOSPI의 PBR은 약 0.98배다. 같은 시기 S&P 500의 PBR은 4.8배, TOPIX는 1.58배였다. KOSPI가 10,000을 향해 오르는 동안에도, 한국 주식은 **여전히 장부가치 대비 할인 거래**되고 있다.\n\n이것이 핵심이다: KOSPI 상승의 주 동력은 삼성전자와 SK하이닉스다. 두 종목이 KOSPI 시가총액의 약 20~25%를 차지하는 구조에서, AI 수요가 불러온 HBM(고대역폭메모리) 슈퍼사이클은 지수를 끌어올렸다. 이는 **멀티플 확장(multiple expansion)이 아닌 이익(EPS) 상승**이다. 실적이 올랐을 뿐, 시장이 한국 주식을 더 높이 평가하기 시작한 것이 아니다.",
          bodyEn:
            "As of end-2024, KOSPI's PBR stands at approximately 0.98x. Over the same period, the S&P 500 trades at 4.8x book and TOPIX at 1.58x. Even as KOSPI races toward 10,000, Korean equities **still trade at a discount to book value**.\n\nThis is the critical point: KOSPI's rally is driven primarily by Samsung Electronics and SK Hynix, which together represent roughly 20–25% of KOSPI market cap. The HBM (High Bandwidth Memory) supercycle driven by AI demand lifted the index. This is **EPS expansion, not multiple expansion** — earnings went up; the market didn't start valuing Korean stocks more highly.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "지수 레벨 ≠ 할인 해소",
            headingEn: "Index Level ≠ Discount Resolution",
            body: "KOSPI 10,000이어도 PBR이 1배 미만이라면 코리아 디스카운트는 여전히 존재한다. 반도체 사이클이 꺾이면 이 질문은 더 날카로워질 것이다.",
            bodyEn:
              "If KOSPI hits 10,000 but PBR remains below 1x, the Korea Discount persists. When the semiconductor cycle turns, this question will become far sharper.",
          },
        },
      ],
    },
    // ── 2 ──────────────────────────────────────────────────────────────────────
    {
      heading: "행동주의 투자: 증상을 치료하려는 시도",
      headingEn: "Activist Investing: Treating the Symptom",
      blocks: [
        {
          type: "text",
          body: "**행동주의 투자(activist investing)**는 기업 지분을 취득한 후 경영진에게 직접 압력을 가해 변화를 요구하는 투자 전략이다. 미국에서는 1980년대 기업 사냥꾼(corporate raider) 시대를 거쳐, 2000년대 이후 헤지펀드가 주도하는 정교한 형태로 발전했다. Brav et al.(2008)의 연구에 따르면 행동주의 캠페인 이후 1년 평균 초과수익률은 약 7%에 달한다.",
          bodyEn:
            "**Activist investing** is a strategy of acquiring a stake in a company and then applying direct pressure on management to drive change. In the US, it evolved from the corporate raider era of the 1980s into a sophisticated hedge fund-led practice post-2000s. Brav et al. (2008) found that activist campaigns generated average abnormal returns of approximately 7% in the year following announcement.",
        },
        {
          type: "metrics",
          items: [
            {
              label: "재무 압박형",
              labelEn: "Financial Activist",
              value: "자사주 매입·배당 확대 요구",
              valueEn: "Demand buybacks & dividend expansion",
              sub: "Elliott, Starboard Value 대표적",
              subEn: "Elliott, Starboard Value are prime examples",
              color: "text-blue-600 dark:text-blue-400",
            },
            {
              label: "지배구조 개입형",
              labelEn: "Governance Activist",
              value: "이사회 교체·독립이사 확대",
              valueEn: "Board overhaul & independent director push",
              sub: "KCGI 한진칼 캠페인 유형",
              subEn: "KCGI's Hanjin KAL campaign",
              color: "text-purple-600 dark:text-purple-400",
            },
            {
              label: "전략 개입형",
              labelEn: "Strategic Activist",
              value: "M&A 반대·사업부 분리 요구",
              valueEn: "Block M&A · demand spin-offs",
              sub: "Elliott의 삼성물산 합병 반대(2015)",
              subEn: "Elliott vs Samsung C&T merger (2015)",
              color: "text-red-600 dark:text-red-400",
            },
          ],
        },
        {
          type: "table",
          table: {
            id: "activism-cases",
            title: "한국 주요 행동주의 캠페인 (2004–2024)",
            titleEn: "Major Korean Activist Campaigns (2004–2024)",
            headers: ["펀드", "대상 기업", "연도", "캠페인 유형", "결과"],
            headersEn: ["Fund", "Target", "Year", "Type", "Outcome"],
            rows: [
              ["소버린", "SK㈜", "2003–04", "지배구조 개선", "부분 성공 — 배당 확대"],
              ["Elliott", "삼성물산-제일모직", "2015", "합병 반대", "실패 — 합병 진행"],
              ["Elliott", "현대차그룹", "2018", "지배구조 재편 요구", "부분 철회"],
              ["KCGI", "한진칼", "2019–20", "이사회 교체", "제한적 성과"],
              ["Elliott", "삼성물산", "2022", "배당 확대 요구", "일부 수용"],
              ["Align Partners", "SM엔터테인먼트", "2023", "계약 재검토·매각 촉구", "성공 — 카카오 인수 완료"],
            ],
            rowsEn: [
              ["Sovereign", "SK Corp.", "2003–04", "Governance Reform", "Partial success — dividend increase"],
              ["Elliott", "Samsung C&T / Cheil", "2015", "Oppose Merger", "Failed — merger completed"],
              ["Elliott", "Hyundai Motor Group", "2018", "Governance Restructuring", "Partial withdrawal"],
              ["KCGI", "Hanjin KAL", "2019–20", "Board Replacement", "Limited outcome"],
              ["Elliott", "Samsung C&T", "2022", "Dividend Expansion", "Partially accepted"],
              ["Align Partners", "SM Entertainment", "2023", "Contract review & sale push", "Success — Kakao acquisition"],
            ],
            caption: "출처: 각사 공시, 언론 보도 취합. Align×SM은 2023년 국내 행동주의 캠페인 최초 '완전 성공' 사례로 평가됨.",
            captionEn:
              "Sources: Company filings, press reports. Align×SM is considered the first fully successful domestic activist campaign in Korea.",
          },
        },
        {
          type: "callout",
          callout: {
            variant: "warning",
            heading: "왜 한국에서 행동주의가 더 어려운가",
            headingEn: "Why Activism Is Harder in Korea",
            body: "국민연금을 제외한 기관투자자 참여 미진, 집중투표제 미의무화, 순환출자를 통한 오너의 낮은 지분율 지배 구조 — 세 가지가 맞물려 소수 주주의 압박이 경영권에 실질적 위협이 되기 어려운 구조를 만든다.",
            bodyEn:
              "Three structural barriers compound: weak institutional investor participation (except NPS), non-mandatory cumulative voting, and chaebol owners controlling through circular ownership at low direct stakes — making minority pressure rarely a real threat to control.",
          },
        },
      ],
    },
    // ── 3 ──────────────────────────────────────────────────────────────────────
    {
      heading: "코리아 디스카운트의 구조적 해부 — 세금이 본질이다",
      headingEn: "Structural Anatomy of the Korea Discount — It's the Tax",
      blocks: [
        {
          type: "text",
          body: "코리아 디스카운트의 원인 분석은 다양하다. 지정학적 리스크(북한 변수), 낮은 배당성향, 복잡한 순환출자 구조 — 모두 실제 요인이다. 그러나 이것들은 모두 하나의 근본 인센티브 구조로 귀결된다.\n\n**오너 일가는 주가가 오를 이유가 없다.**",
          bodyEn:
            "Many causes are cited for the Korea Discount: geopolitical risk (North Korea factor), low dividend payout ratios, complex circular ownership structures — all real factors. But they all converge on one fundamental incentive structure.\n\n**Controlling families have no financial reason to push stock prices higher.**",
        },
        {
          type: "chart",
          chart: {
            id: "tax-rates",
            title: "주요국 최대주주 상속세 최고세율 비교",
            titleEn: "Inheritance Tax Top Rates: International Comparison",
            caption:
              "출처: OECD Tax Policy Studies No.28 (2021). 한국은 상장 대기업 최대주주 할증(20%) 포함 실효세율 기준. 미국은 step-up basis 적용 시 실질 부담 대폭 경감.",
            captionEn:
              "Source: OECD Tax Policy Studies No.28 (2021). Korea figure includes 20% surcharge for largest shareholder of listed large firms. US effective burden substantially reduced via step-up basis.",
            data: [
              { country: "한국", countryEn: "Korea", rate: 60, color: "#ef4444" },
              { country: "일본", countryEn: "Japan", rate: 55, color: "#f97316" },
              { country: "프랑스", countryEn: "France", rate: 45, color: "#eab308" },
              { country: "미국", countryEn: "USA", rate: 40, color: "#22c55e" },
              { country: "영국", countryEn: "UK", rate: 40, color: "#3b82f6" },
              { country: "독일", countryEn: "Germany", rate: 30, color: "#8b5cf6" },
            ],
          },
        },
        {
          type: "text",
          body: "**상속세의 역설**: 한국 상속세 최고세율은 50%다. 여기에 상장 대기업 최대주주 지분에는 **20% 할증**이 더해져, 실효세율은 최대 60%에 달한다. 이는 OECD 국가 중 사실상 최고 수준이다.\n\n문제는 계산 기준이다. 주식 상속 시 세금은 **시장가(market price)**를 기준으로 산출된다. 오너 일가 입장에서, 주가가 오르면 미래 상속 세금이 그만큼 폭증한다. 배당을 줄이고, 주주 친화적 정책을 기피하며, 주가 부양에 무관심한 것이 세금 최적화 전략과 정확히 일치한다.",
          bodyEn:
            "**The inheritance tax paradox**: Korea's top inheritance tax rate is 50%. Add the **20% surcharge** for the largest shareholder in listed large companies, and the effective rate reaches 60% — effectively the highest in the OECD.\n\nThe critical issue is the calculation basis. Inheritance tax on shares is assessed at **market price**. From the controlling family's perspective, a rising stock price means an exploding future inheritance tax burden. Minimizing dividends, avoiding shareholder-friendly policies, and being indifferent to stock price appreciation is entirely rational tax optimization.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "미국과의 결정적 차이 — Step-up Basis",
            headingEn: "The Key US Difference — Step-up Basis",
            body: "미국도 상속세(estate tax)가 40% 수준이지만, **Step-up basis** 규정이 있다. 피상속인 사망 시점의 시장가로 취득가액이 재설정되어, 생전의 미실현 이익에 대한 세금이 사실상 면제된다. 미국 기업 오너에게 주가 상승은 상속세 폭탄이 아니다.",
            bodyEn:
              "The US has a 40% estate tax, but **step-up basis** resets the cost basis to market value at death — effectively eliminating tax on unrealized lifetime gains. For US business owners, rising stock prices do not translate into a crushing inheritance tax burden.",
          },
        },
        {
          type: "text",
          body: "**양도소득세 — 또 다른 층위**: 대주주 요건을 충족하는 주주(KOSPI 종목 1% 이상 또는 **50억 원 이상 보유**)는 주식 양도 시 양도소득세를 납부한다(대기업 기준 최대 25%). 이는 연말마다 대주주 요건 직전의 매도 압박을 만들어내는 고질적인 지수 하방 압력 요인이 되어 왔다. 2023년 말 정부가 종전 10억 원 기준을 50억 원으로 상향(2024년 거래분부터 적용)하면서 연말 매도 압박은 다소 완화됐지만, 조세 형평성 논란과 정권 교체에 따른 재논의가 반복되고 있어 구조적 불확실성은 남아 있다.",
          bodyEn:
            "**Capital gains tax — another layer**: Shareholders meeting the 'major shareholder' threshold (≥1% of a KOSPI stock or **≥KRW 5 billion in holdings**) pay capital gains tax on stock sales (up to 25% for large-cap holdings). This has created a chronic year-end selling pressure dynamic as investors race to stay below the threshold. The government raised the threshold from KRW 1 billion to KRW 5 billion in late 2023 (applied to trades from 2024), easing some year-end pressure — but recurring debates over tax equity and political turnover keep this rule structurally uncertain.",
        },
      ],
    },
    // ── 4 ──────────────────────────────────────────────────────────────────────
    {
      heading: "일본 케이스스터디 — TSE 개혁은 어떻게 작동했나",
      headingEn: "Japan Case Study — How the TSE Reform Actually Worked",
      blocks: [
        {
          type: "text",
          body: "일본도 같은 병을 앓았다. 2010년대 초반, TOPIX의 평균 PBR은 1.0배 이하였다. 닛케이 지수는 1989년 버블 고점(38,957) 이후 25년 넘게 그 수준을 회복하지 못했다. 저배당, 순환출자(持ち合い), 낮은 ROE — 코리아 디스카운트와 판박이였다.",
          bodyEn:
            "Japan suffered the same affliction. In the early 2010s, TOPIX's average PBR was below 1.0x. The Nikkei index spent more than 25 years failing to recover its 1989 bubble peak of 38,957. Low dividends, circular cross-shareholdings (持ち合い), poor ROE — a mirror image of Korea's predicament.",
        },
        {
          type: "chart",
          chart: {
            id: "index-comparison",
            title: "KOSPI vs 닛케이 225 상대 수익률 (2018년=100 기준)",
            titleEn: "KOSPI vs Nikkei 225 Relative Performance (2018 = 100)",
            caption:
              "출처: Bloomberg, KRX, TSE. 2018년 말 기준 100으로 지수화. 2023년 TSE 개혁 이후 양국 격차가 급격히 확대됨.",
            captionEn:
              "Source: Bloomberg, KRX, TSE. Indexed to 100 at end-2018. The gap widened sharply following the 2023 TSE reform.",
            data: [
              { year: "2018", KOSPI: 100, Nikkei: 100 },
              { year: "2019", KOSPI: 108, Nikkei: 118 },
              { year: "2020", KOSPI: 141, Nikkei: 137 },
              { year: "2021", KOSPI: 146, Nikkei: 144 },
              { year: "2022", KOSPI: 110, Nikkei: 130 },
              { year: "2023", KOSPI: 130, Nikkei: 167 },
              { year: "2024", KOSPI: 118, Nikkei: 199 },
            ],
            annotations: [
              { year: "2023", label: "TSE 개혁", labelEn: "TSE Reform" },
            ],
          },
        },
        {
          type: "text",
          body: "일본의 처방은 **법 개정이 아닌 시장 압박**이었다. 단계적 개혁의 핵심 이정표:\n\n- **2014년**: 금융청(FSA), 기관투자자 스튜어드십 코드 도입 — 의결권 행사 공시 의무화\n- **2015년**: 도쿄증권거래소(TSE), 기업지배구조 코드 도입 — 독립이사 2인 이상 권고\n- **2023년 3월**: TSE, PBR 1배 미만 상장사에 **'자본 효율성 및 주가를 의식한 경영 실현을 위한 계획 공시' 요구**\n\n법적 강제력은 없었다. 그러나 일본 기업들은 민감하게 반응했다. 공개적으로 이름이 거론되는 것에 대한 문화적 압박, 그리고 워런 버핏의 일본 5대 종합상사 대규모 투자가 외국인 자금 유입의 신호탄이 된 직후였기 때문이다.",
          bodyEn:
            "Japan's prescription was **market pressure, not legislation**. Key milestones in the phased reform:\n\n- **2014**: FSA introduces Stewardship Code — mandatory disclosure of proxy voting\n- **2015**: TSE introduces Corporate Governance Code — recommends ≥2 independent directors\n- **March 2023**: TSE requests listed companies with PBR below 1x to **disclose plans to improve capital efficiency and stock price consciousness**\n\nThere was no legal enforcement mechanism. Yet Japanese companies responded sharply — driven by cultural aversion to being named publicly and the timing coinciding with Warren Buffett's massive purchases of Japan's five major trading companies, signaling a flood of foreign capital.",
        },
        {
          type: "callout",
          callout: {
            variant: "example",
            heading: "결과: 닛케이 40,000 돌파",
            headingEn: "Outcome: Nikkei Breaks 40,000",
            body: "닛케이 225는 2023년 한 해 28% 상승했고, 2024년 2월 1989년 버블 고점을 35년 만에 처음 돌파했다. 일본 기업의 자사주 매입 규모는 2022년 7.8조 엔에서 2023년 10조 엔을 넘어섰다. PBR 1배 미만 기업들의 개선 계획 공시율은 2023년 기준 도쿄 1부 상장사의 약 60%에 달했다.",
            bodyEn:
              "The Nikkei 225 rose 28% in 2023 and in February 2024 finally broke its 1989 bubble peak for the first time in 35 years. Japanese corporate buybacks surpassed ¥10 trillion in 2023, up from ¥7.8 trillion in 2022. Approximately 60% of TSE Prime-listed companies disclosed improvement plans by end-2023.",
          },
        },
        {
          type: "text",
          body: "**한국과 일본의 결정적 차이**: 일본 개혁이 빠르게 성과를 낸 데는 구조적 이유가 있다. 일본은 창업주 일가의 지배 집중도가 한국 재벌보다 낮고, 순환출자 해소 의지를 가진 기업들이 많았다. GPIF(일본 국민연금, 약 200조 엔 규모)의 적극적 스튜어드십도 결정적이었다.\n\n무엇보다, **일본에는 한국의 최대주주 상속세 할증(60%) 구조가 없다**. 일본 상속세 최고세율은 55%이나, 비상장 사업승계 특례가 광범위하게 적용되고, 상장 기업 오너가 주가를 억제할 세금 인센티브가 한국보다 약하다. 이것이 근본적인 차이다.",
          bodyEn:
            "**The critical structural difference**: Japan's reform worked faster for structural reasons. Founding family ownership concentration is lower than Korean chaebols, more companies were willing to unwind cross-holdings, and GPIF (Japan's national pension, ~¥200 trillion AUM) played an active stewardship role.\n\nMost critically, **Japan lacks Korea's 60% effective inheritance tax surcharge structure**. Japan's top inheritance tax rate is 55%, but broad succession relief provisions apply for non-listed companies, and listed company owners have weaker tax incentives to suppress stock prices. This is the fundamental difference.",
        },
      ],
    },
    // ── 5 ──────────────────────────────────────────────────────────────────────
    {
      heading: "한국 상법 개정 현황 — 어디서 막히고 있나",
      headingEn: "Korea Commercial Law Reform — Where It's Stuck",
      blocks: [
        {
          type: "text",
          body: "한국의 밸류업 프로그램은 일본 TSE 개혁을 벤치마킹해 2024년 도입됐다. 그러나 핵심 법적 개혁은 여전히 입법 교착 상태에 있다. 재벌은 '경영 불확실성 증가'와 '글로벌 경쟁력 약화'를 이유로 반대 로비를 집중하고 있다.",
          bodyEn:
            "Korea's Value-up Program, benchmarked against Japan's TSE reform, was introduced in 2024. However, core legislative reform remains in a state of deadlock. Chaebols have mounted concentrated opposition lobbying, citing 'increased management uncertainty' and 'weakened global competitiveness.'",
        },
        {
          type: "table",
          table: {
            id: "commercial-law",
            title: "상법 개정 주요 쟁점 현황 (2025년 기준)",
            titleEn: "Key Commercial Law Amendment Issues (as of 2025)",
            headers: ["개정 항목", "핵심 내용", "현황", "재계 반응"],
            headersEn: ["Amendment", "Key Content", "Status", "Chaebol Stance"],
            rows: [
              [
                "이사 충실의무 확대",
                "'회사' → '회사 및 주주' 확대",
                "계류 중",
                "강력 반대",
              ],
              [
                "감사위원 분리 선출",
                "최대주주 의결권 3% 제한",
                "일부 도입",
                "반대",
              ],
              [
                "집중투표제 의무화",
                "소수주주 이사 선임 보장",
                "미도입",
                "강력 반대",
              ],
              [
                "전자투표 의무화",
                "주주총회 접근성 제고",
                "부분 도입",
                "수용",
              ],
              [
                "이중 대표 소송제",
                "자회사 이사 책임 추궁",
                "계류 중",
                "반대",
              ],
            ],
            rowsEn: [
              ["Fiduciary Duty Expansion", "'Company' → 'Company & Shareholders'", "Pending", "Strong opposition"],
              ["Separate Audit Committee Election", "3% voting cap on largest shareholder", "Partial adoption", "Opposed"],
              ["Cumulative Voting Mandate", "Minority shareholder board seat rights", "Not adopted", "Strong opposition"],
              ["e-Vote Mandate", "Improve AGM accessibility", "Partially adopted", "Accepted"],
              ["Multiple Derivative Suit", "Subsidiary director liability", "Pending", "Opposed"],
            ],
            caption:
              "출처: 법무부 상법 일부개정법률안 검토보고(2024). 이사 충실의무 확대가 통과될 경우 오너 일가에게만 유리한 합병·분할에 대한 소수주주 소송이 가능해진다.",
            captionEn:
              "Source: Ministry of Justice Commercial Law Amendment Review Report (2024). If fiduciary duty expansion passes, minority shareholders gain standing to sue over mergers/spin-offs benefiting only the controlling family.",
          },
        },
        {
          type: "callout",
          callout: {
            variant: "warning",
            heading: "이사 충실의무 — 게임체인저이자 최대 쟁점",
            headingEn: "Fiduciary Duty Expansion — Game-changer and Flashpoint",
            body: "이사 충실의무 대상을 '회사'에서 '회사 및 주주'로 확대하는 조항이 통과되면 2015년 삼성물산-제일모직 합병 같은 사례에서 소수주주가 이사를 상대로 직접 소송을 제기할 수 있게 된다. 재계가 이 조항에 집중적으로 반대하는 이유다.",
            bodyEn:
              "If passed, expanding fiduciary duty from 'the company' to 'the company and its shareholders' would allow minority shareholders to directly sue directors in cases like the 2015 Samsung C&T-Cheil Industries merger. This explains why chaebol lobbying has concentrated on blocking precisely this provision.",
          },
        },
      ],
    },
    // ── 6 ──────────────────────────────────────────────────────────────────────
    {
      heading: "그렇다면 지금 한국은 — 얼마나 해소됐나",
      headingEn: "Where Does Korea Stand Now?",
      blocks: [
        {
          type: "metrics",
          items: [
            {
              label: "개선된 것",
              labelEn: "What Has Improved",
              value: "밸류업 공시 증가 · 자사주 매입 확대 · 행동주의 성공 사례",
              valueEn: "More Value-up disclosures · Rising buybacks · Activism wins",
              sub: "Align×SM, 배당성향 소폭 상승, 기관 스튜어드십 활성화",
              subEn: "Align×SM success, modest dividend ratio improvement, institutional stewardship growth",
              color: "text-emerald-600 dark:text-emerald-400",
            },
            {
              label: "여전한 것",
              labelEn: "What Hasn't Changed",
              value: "PBR 0.9~1.0배 · 이사 충실의무 미통과 · 상속세 구조 동결",
              valueEn: "PBR 0.9–1.0x · Fiduciary duty bill stalled · Tax structure frozen",
              sub: "글로벌 최저 수준 PBR, 핵심 세금 구조 변화 없음",
              subEn: "PBR near global lows, core tax structure untouched",
              color: "text-red-600 dark:text-red-400",
            },
            {
              label: "불확실한 것",
              labelEn: "What Remains Uncertain",
              value: "상법 개정 타임라인 · 밸류업 실효성 · 사이클 꺾임 시나리오",
              valueEn: "Commercial law timeline · Value-up efficacy · Cycle downturn scenario",
              sub: "반도체 다음 사이클 저점에서 진짜 테스트 시작",
              subEn: "The real test starts at the next semiconductor cycle trough",
              color: "text-amber-600 dark:text-amber-400",
            },
          ],
        },
        {
          type: "text",
          body: "밸류업 프로그램은 일본 TSE 개혁의 한국판이지만, 효과는 아직 제한적이다. 2024년 공시 기업 수는 늘었고, 자사주 소각 규모도 역대 최고 수준을 기록했다. 그러나 PBR 1배 미만 기업 비율은 여전히 KOSPI 상장사 기준 약 50%로, 일본이 2년 만에 이 비율을 40%대로 낮춘 것과 대비된다.\n\n핵심 지표를 보면, **한국의 자기자본이익률(ROE)은 약 8~9%로 일본(10~11%)보다 낮고 미국(20%+)과는 크게 차이난다**. ROE가 낮은 근본 이유 중 하나는 수익이 주주에게 환원되지 않고 기업 내부에 쌓이기 때문인데, 이는 다시 세금 구조와 연결된다.",
          bodyEn:
            "Korea's Value-up Program is the Korean version of Japan's TSE reform, but its effect remains limited so far. The number of disclosing companies grew in 2024, and share cancellation volumes hit record highs. Yet the proportion of KOSPI-listed companies trading below 1x book value remains around 50% — compared to Japan's reduction to the 40s within two years.\n\nLooking at the fundamental metric, **Korea's ROE sits at roughly 8–9%, below Japan's 10–11% and far below the US's 20%+**. One core reason ROE is low is that earnings are retained on corporate balance sheets rather than returned to shareholders — which loops back to the tax structure.",
        },
      ],
    },
    // ── 7 ──────────────────────────────────────────────────────────────────────
    {
      heading: "결론 — 세금 구조가 바뀌지 않으면",
      headingEn: "Conclusion — Without Tax Reform",
      blocks: [
        {
          type: "text",
          body: "KOSPI 10,000은 코리아 디스카운트의 해소를 의미하지 않는다. 그것은 반도체 슈퍼사이클이 만들어낸 이익 상승의 반영이다. 행동주의 펀드가 압박하고, 상법이 개정되고, 국민연금이 반대표를 던져도, **세금 구조가 바뀌지 않는 한 오너의 근본 인센티브는 그대로다.**\n\n일본은 법 개정 없이 거래소 가이드라인과 시장 압박만으로 닛케이 40,000을 달성했다. 그 성공의 배경에는 '주가를 올리는 것이 오너에게 세금 폭탄이 아닌' 구조가 깔려 있었다.\n\n한국도 밸류업과 상법 개정이 성과를 낼 수 있다. 그러나 상속세 실효세율 60%와 step-up basis 없는 양도소득세 구조가 유지되는 한, 이는 구조의 교정이 아닌 증상의 완화에 그칠 가능성이 높다. 다음 반도체 사이클의 저점에서 — 그 때가 진짜 테스트다.",
          bodyEn:
            "KOSPI 10,000 does not signal the resolution of the Korea Discount. It reflects an earnings surge from the semiconductor supercycle. Activist funds can pressure, commercial law can be amended, and the National Pension Service can vote against management — but **without changing the tax structure, the controlling family's fundamental incentive remains unchanged.**\n\nJapan achieved Nikkei 40,000 using only exchange guidelines and market pressure — no legislation needed. That success rested on a structural foundation where 'raising the stock price is not a tax bomb for the owner.'\n\nKorea's Value-up and commercial law reform can produce results. But as long as the 60% effective inheritance tax rate and capital gains tax structure without step-up basis remain in place, these are likely to address symptoms rather than correct the underlying structure. At the next semiconductor cycle trough — that's when the real test begins.",
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "코리아 디스카운트는 거버넌스의 문제가 아니라 세금의 문제다. 오너가 주가를 올릴 인센티브가 없는 한, 그 어떤 개혁도 근본을 건드리지 못한다.",
            bodyEn:
              "The Korea Discount is not a governance problem — it's a tax problem. As long as controlling families have no incentive to raise stock prices, no reform touches the root.",
          },
        },
      ],
    },
  ],
  references: [
    {
      id: 1,
      author: "Brav, A., Jiang, W., Partnoy, F., & Thomas, R.",
      title: "Hedge Fund Activism, Corporate Governance, and Firm Performance",
      source: "Journal of Finance, 63(4), 1729–1775",
      year: "2008",
      url: "https://doi.org/10.1111/j.1540-6261.2008.01373.x",
    },
    {
      id: 2,
      author: "OECD",
      title: "Inheritance Taxation in OECD Countries",
      source: "OECD Tax Policy Studies, No. 28",
      year: "2021",
      url: "https://doi.org/10.1787/e2879a7d-en",
    },
    {
      id: 3,
      author: "Tokyo Stock Exchange",
      title:
        "Action to Implement Management that is Conscious of Cost of Capital and Stock Price",
      source: "TSE Listing Department Notice",
      year: "2023",
      url: "https://www.jpx.co.jp/english/equities/improvement/index.html",
    },
    {
      id: 4,
      author: "한국거래소 (Korea Exchange)",
      title: "기업 밸류업 지원방안 세부 추진계획",
      source: "한국거래소 공시",
      year: "2024",
      url: "https://www.krx.co.kr",
    },
    {
      id: 5,
      author: "Goldman Sachs Equity Research",
      title: "Korea Equity Strategy: Unpacking the Korea Discount",
      source: "Goldman Sachs Research Report",
      year: "2022",
      note: "기관 배포 자료",
    },
    {
      id: 6,
      author: "Elliott Management Corporation",
      title: "Open Letter to Samsung C&T Corporation Shareholders",
      source: "Elliott Management Public Filing",
      year: "2015",
      url: "https://www.elliottmanagement.com",
    },
    {
      id: 7,
      author: "Align Partners Capital Management",
      title: "SM엔터테인먼트 주주서한 — 주주가치 제고 요구",
      source: "얼라인파트너스 공개 서한",
      year: "2023",
    },
    {
      id: 8,
      author: "법무부",
      title: "상법 일부개정법률안 검토보고서",
      source: "대한민국 법무부",
      year: "2024",
      url: "https://www.moj.go.kr",
    },
    {
      id: 9,
      author: "Financial Services Agency (FSA), Japan",
      title:
        "Principles for Responsible Institutional Investors (Japan's Stewardship Code)",
      source: "FSA Japan",
      year: "2014",
      url: "https://www.fsa.go.jp/en/refer/councils/stewardship/index.html",
    },
    {
      id: 10,
      author: "Korea Corporate Governance Service (KCGS)",
      title: "국내 주요 기업 지배구조 평가 결과",
      source: "한국기업지배구조원 연간보고서",
      year: "2024",
      url: "https://www.cgs.or.kr",
    },
    {
      id: 11,
      author: "Faccio, M., Lang, L., & Young, L.",
      title: "Dividends and Expropriation",
      source: "American Economic Review, 91(1), 54–78",
      year: "2001",
      url: "https://doi.org/10.1257/aer.91.1.54",
    },
    {
      id: 12,
      author: "Financial Services Commission (FSC) Korea",
      title: "기업 밸류업 프로그램 현황 및 성과 점검",
      source: "금융위원회",
      year: "2024",
      url: "https://www.fsc.go.kr",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #2 — 달러 패권 시리즈 1편: 왜 달러가 세계의 돈이 됐나
// ══════════════════════════════════════════════════════════════════════════════

const dollarHegemony1: NoteData = {
  slug: "dollar-hegemony-1",
  category: "macro",
  status: "published",
  series: "dollar-hegemony",
  seriesOrder: 1,
  title: "달러 패권 ① — 왜 달러가 세계의 돈이 됐나",
  titleEn: "Dollar Hegemony ① — How the Dollar Became the World's Money",
  description:
    "브레튼우즈(1944), 닉슨 쇼크(1971), 페트로달러(1974) — 달러가 기축통화가 된 건 미국의 경제력 때문이 아니라, 세 번의 결정적 설계 때문이었다.",
  descriptionEn:
    "Bretton Woods (1944), the Nixon Shock (1971), petrodollars (1974) — the dollar didn't become the world's reserve currency because of America's economic might. It was designed that way, three decisive times.",
  date: "2026-05-28",
  readingMinutes: 18,
  keyPoints: [
    "브레튼우즈에서 달러가 기축통화가 된 건 미국의 경제력이 아닌 전 세계 금의 2/3를 보유한 협상력 때문이었다",
    "닉슨이 1971년 '일시적으로' 금 태환을 중단했다 — 그 '일시적'은 영구가 됐고 달러는 더 강해졌다",
    "페트로달러 체계(1974)는 금 대신 석유로 달러를 뒷받침했다 — 군사 안보와 맞바꾼 거래",
    "달러의 '과도한 특권': 미국 GDP는 세계의 25%지만 글로벌 무역 인보이싱의 80%가 달러로 이뤄진다",
    "달러 외환보유고 비중은 2001년 71.5%에서 2024년 57.8%로 하락했다 — 그러나 2위 유로(20%)의 3배다",
  ],
  keyPointsEn: [
    "The dollar became the reserve currency at Bretton Woods not because of US economic strength but because the US held two-thirds of the world's gold",
    "Nixon 'temporarily' suspended gold convertibility in 1971 — that 'temporary' became permanent, and the dollar only grew stronger",
    "The petrodollar system (1974) replaced gold with oil as the dollar's backing — a deal traded for US military security guarantees",
    "The 'exorbitant privilege': US GDP is ~25% of the world's but 80% of global trade is invoiced in dollars",
    "Dollar's share of global FX reserves has fallen from 71.5% in 2001 to 57.8% in 2024 — but still 3× the #2 euro at 20%",
  ],
  sections: [
    // ── 1 ──────────────────────────────────────────────────────────────────────
    {
      heading: "달러가 지배하는 세계의 숫자들",
      headingEn: "The Numbers Behind Dollar Dominance",
      blocks: [
        {
          type: "text",
          body: "2024년 기준, 전 세계 외환 거래의 **88%**에 달러가 끼어 있다(BIS, 2022). 국제 무역의 **80%**가 달러로 인보이싱된다. 전 세계 중앙은행 외환보유고의 **57.8%**가 달러 자산이다.\n\n미국의 GDP는 세계의 약 25%, 무역 비중은 약 13%다. 경제 규모와 통화 역할의 이 거대한 갭 — 프랑스 재무장관 발레리 지스카르 데스탱은 1965년 이것을 **'과도한 특권(exorbitant privilege)'**이라 불렀다.",
          bodyEn:
            "As of 2024, **88%** of all global FX transactions involve the dollar (BIS, 2022). **80%** of international trade is invoiced in dollars. **57.8%** of global central bank reserves are held in dollar assets.\n\nThe US accounts for roughly 25% of global GDP and about 13% of global trade. This vast gap between economic weight and currency role was what French Finance Minister Valéry Giscard d'Estaing called the **'exorbitant privilege'** in 1965.",
        },
        {
          type: "chart",
          chart: {
            id: "privilege-gap",
            title: "달러의 역할 vs 미국의 경제 비중 (%)",
            titleEn: "Dollar's Role vs US Economic Share (%)",
            caption:
              "출처: BIS Triennial Survey(2022), IMF COFER(2024), ECB. 달러는 미국의 경제 규모를 훨씬 초과하는 역할을 한다 — 이것이 '과도한 특권'의 실체다.",
            captionEn:
              "Sources: BIS Triennial Survey (2022), IMF COFER (2024), ECB. The dollar's role vastly exceeds US economic weight — this is the substance of 'exorbitant privilege.'",
            data: [
              { category: "무역 인보이싱", categoryEn: "Trade Invoicing", dollarRole: 80, usShare: 13 },
              { category: "FX 거래", categoryEn: "FX Transactions", dollarRole: 88, usShare: 13 },
              { category: "외환보유고", categoryEn: "FX Reserves", dollarRole: 58, usShare: 25 },
              { category: "글로벌 채권", categoryEn: "Global Bonds", dollarRole: 50, usShare: 25 },
              { category: "SWIFT 결제", categoryEn: "SWIFT Payments", dollarRole: 42, usShare: 25 },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            heading: "과도한 특권 (Exorbitant Privilege)",
            headingEn: "Exorbitant Privilege",
            body: "\"미국은 달러를 찍어내기만 하면 전 세계에서 실물을 조달할 수 있다. 다른 나라는 수출해서 달러를 벌어야 하는데.\" — 발레리 지스카르 데스탱, 1965년",
            bodyEn:
              "\"The US can acquire real resources from the rest of the world simply by printing dollars. Everyone else has to export to earn them.\" — Valéry Giscard d'Estaing, 1965",
          },
        },
      ],
    },
    // ── 2 ──────────────────────────────────────────────────────────────────────
    {
      heading: "브레튼우즈 — 달러가 왕좌에 오른 날 (1944)",
      headingEn: "Bretton Woods — The Day the Dollar Took the Throne (1944)",
      blocks: [
        {
          type: "text",
          body: "1944년 7월, 뉴햄프셔 브레튼우즈 호텔. 44개국 730명의 대표가 전후 국제통화 체계를 설계했다.\n\n두 거인이 맞섰다. 영국의 **존 메이너드 케인즈**는 국제 결제 전용 통화 '방코르(Bancor)'를 제안했다 — 어느 한 나라 통화에 종속되지 않는 중립적 국제통화. 미국의 **해리 덱스터 화이트**는 달러를 기축통화로 하는 시스템을 주장했다.\n\n케인즈는 패했다. 당시 미국은 전 세계 금 매장량의 **2/3**를 보유하고 있었다. 협상 테이블에서 금을 가진 자가 규칙을 만든다. 합의된 체계:\n\n- 달러만 금과 교환 (1온스 = $35 고정)\n- 다른 모든 통화는 달러에 연동\n- 미국이 세계의 '중앙은행' 역할",
          bodyEn:
            "July 1944, Bretton Woods Hotel, New Hampshire. 730 delegates from 44 nations gathered to design the postwar international monetary order.\n\nTwo giants clashed. Britain's **John Maynard Keynes** proposed 'Bancor' — a neutral international currency not tied to any single nation. America's **Harry Dexter White** pushed for a dollar-centric system.\n\nKeynes lost. The US held **two-thirds** of the world's gold reserves at the time. In negotiations, whoever holds the gold makes the rules. The agreed system:\n\n- Only the dollar would be exchangeable for gold (fixed at $35/oz)\n- All other currencies would peg to the dollar\n- The US would serve as the world's 'central bank'",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "케인즈가 옳았다 — 40년 후에 증명됐다",
            headingEn: "Keynes Was Right — Proven 40 Years Later",
            body: "케인즈는 단일 국가 통화를 기축으로 쓰면 그 나라는 경상수지 적자를 낼 수밖에 없고, 결국 체계가 불안정해진다고 경고했다. 이것이 훗날 '트리핀 딜레마'로 불리게 된 구조다. 닉슨 쇼크(1971)는 케인즈의 예언이 맞았음을 증명했다.",
            bodyEn:
              "Keynes warned that making a single nation's currency the reserve asset would force that country to run persistent current account deficits, eventually destabilizing the system. This is what later became known as the 'Triffin Dilemma.' The Nixon Shock of 1971 proved Keynes right.",
          },
        },
      ],
    },
    // ── 3 ──────────────────────────────────────────────────────────────────────
    {
      heading: "닉슨 쇼크 — 금이 사라진 날 (1971)",
      headingEn: "The Nixon Shock — The Day Gold Disappeared (1971)",
      blocks: [
        {
          type: "text",
          body: "브레튼우즈 체계에는 치명적 결함이 있었다. 케인즈가 예측한 바로 그것이다.\n\n전 세계에 달러를 공급하려면 미국은 경상수지 적자를 내야 한다. 그런데 적자가 커질수록 금 태환 약속의 신뢰가 흔들린다. **공급하면 신뢰 위기, 공급 안 하면 유동성 부족** — 어느 쪽으로 가도 막힌다.\n\n1960년대 베트남 전쟁과 린든 존슨의 '위대한 사회' 복지 지출로 달러가 과잉 공급됐다. 각국 중앙은행들이 달러를 금으로 교환하기 시작했다. **프랑스 드골 대통령**은 특히 공격적이었다 — 달러를 실은 군함을 포트 녹스로 보내 금으로 교환했다.\n\n1971년 8월 15일 일요일 저녁, 리처드 닉슨은 TV에 나와 발표했다.\n\n달러-금 태환을 **\"일시적으로\"** 중단한다.\n\n그 '일시적'은 영구가 됐다. 브레튼우즈 체계는 붕괴했다.",
          bodyEn:
            "Bretton Woods had a fatal flaw — exactly the one Keynes predicted.\n\nTo supply the world with dollars, the US had to run current account deficits. But the larger those deficits grew, the more the promise of gold convertibility was undermined. **Supply enough dollars and face a confidence crisis. Supply too few and create a liquidity shortage.** Either way, the system was trapped.\n\nVietnam War spending and Lyndon Johnson's Great Society programs in the 1960s flooded the world with dollars. Central banks began converting dollars to gold. **French President de Gaulle** was particularly aggressive — he sent warships loaded with dollars to Fort Knox to exchange for gold.\n\nSunday evening, August 15, 1971. Richard Nixon went on television and announced:\n\nHe was **\"temporarily\"** suspending the dollar's convertibility to gold.\n\nThat 'temporarily' became permanent. The Bretton Woods system collapsed.",
        },
        {
          type: "callout",
          callout: {
            variant: "example",
            heading: "역설: 달러는 금 없이 더 강해졌다",
            headingEn: "The Paradox: The Dollar Grew Stronger Without Gold",
            body: "닉슨 쇼크 이후 달러는 어떤 실물로도 뒷받침되지 않는 통화가 됐다. 보통 이런 일이 생기면 통화는 붕괴한다. 그런데 달러는 오히려 전 세계에 더 깊이 침투했다. 이유는 간단하다 — 대안이 없었다. 그리고 3년 후, 새로운 뒷받침이 생겼다.",
            bodyEn:
              "After the Nixon Shock, the dollar became a currency backed by nothing tangible. Normally that's a death sentence for a currency. Yet the dollar only penetrated the global economy more deeply. The reason was simple — there was no alternative. And three years later, a new form of backing emerged.",
          },
        },
      ],
    },
    // ── 4 ──────────────────────────────────────────────────────────────────────
    {
      heading: "페트로달러 밀약 — 석유가 금을 대신하다 (1974)",
      headingEn: "The Petrodollar Deal — Oil Replaces Gold (1974)",
      blocks: [
        {
          type: "text",
          body: "1973~74년 1차 오일쇼크. OPEC은 석유 금수 조치로 유가를 4배 올렸다. 세계는 에너지 대란에 빠졌고, 미국은 기회를 봤다.\n\n헨리 키신저 국무장관과 윌리엄 사이먼 재무장관은 사우디아라비아와 비밀 협상에 들어갔다. 1974년 6월 체결된 협약의 핵심:\n\n**사우디아라비아가 미국에 주는 것:**\n- OPEC을 설득해 모든 석유를 달러로만 결제\n- 석유 수출로 벌어들인 달러 잉여분을 미국 국채(Treasury)에 투자\n\n**미국이 사우디아라비아에 주는 것:**\n- 군사 안보 보장 및 무기 지원\n- 왕정 체제 보호\n\n이로써 달러는 새로운 뒷받침을 얻었다. **금(Gold)** 대신 **석유(Oil)**. 세계는 에너지를 사려면 달러가 필요해졌고, 달러를 얻으려면 미국 국채를 사야 했다. 달러 수요와 미국 국채 수요가 구조적으로 묶였다.",
          bodyEn:
            "The 1973-74 oil shock. OPEC's oil embargo quadrupled oil prices. The world plunged into an energy crisis — and the US saw an opportunity.\n\nSecretary of State Henry Kissinger and Treasury Secretary William Simon entered secret negotiations with Saudi Arabia. The June 1974 accord had two sides:\n\n**What Saudi Arabia gave the US:**\n- Persuade OPEC to price all oil exclusively in dollars\n- Recycle surplus petrodollar earnings into US Treasury bonds\n\n**What the US gave Saudi Arabia:**\n- Military security guarantees and weapons\n- Protection for the monarchy\n\nThe dollar had found new backing. **Gold** was replaced by **Oil**. The world needed dollars to buy energy. To get dollars, you bought US Treasuries. Dollar demand and Treasury demand became structurally intertwined.",
        },
        {
          type: "table",
          table: {
            id: "petrodollar-cycle",
            title: "페트로달러 순환 구조",
            titleEn: "The Petrodollar Recycling Mechanism",
            headers: ["단계", "행위자", "흐름", "효과"],
            headersEn: ["Step", "Actor", "Flow", "Effect"],
            rows: [
              ["①", "산유국(OPEC)", "석유 수출 → 달러 수취", "달러 수요 창출"],
              ["②", "산유국(OPEC)", "달러 잉여분 → 미국 국채 매입", "미국 금리 안정, 재정 조달"],
              ["③", "미국", "국채 발행 → 달러 공급 확대", "글로벌 달러 유동성 유지"],
              ["④", "수입국", "수입 결제 → 달러 필요", "달러 수요 구조적 유지"],
              ["⑤", "미국", "군사 안보 제공", "체계 유지 비용 지불"],
            ],
            rowsEn: [
              ["①", "Oil Exporters (OPEC)", "Oil exports → receive dollars", "Creates dollar demand"],
              ["②", "Oil Exporters (OPEC)", "Surplus dollars → buy US Treasuries", "Stabilizes US rates, finances deficit"],
              ["③", "United States", "Issue Treasuries → expand dollar supply", "Maintains global dollar liquidity"],
              ["④", "Importing nations", "Import settlement → need dollars", "Structural dollar demand sustained"],
              ["⑤", "United States", "Provide military security", "System maintenance cost"],
            ],
            caption:
              "페트로달러 체계는 단순한 통화 협약이 아닌 안보-경제 복합 구조다. 석유 = 달러, 달러 = 국채, 국채 = 안보가 하나의 고리로 연결된다.",
            captionEn:
              "The petrodollar system was not a mere currency arrangement but a security-economic complex. Oil = dollars, dollars = Treasuries, Treasuries = security — all linked in one loop.",
          },
        },
      ],
    },
    // ── 5 ──────────────────────────────────────────────────────────────────────
    {
      heading: "과도한 특권 — 달러 패권이 주는 3가지 이득",
      headingEn: "The Exorbitant Privilege — Three Benefits of Dollar Hegemony",
      blocks: [
        {
          type: "metrics",
          items: [
            {
              label: "① 시뇨리지(Seigniorage)",
              labelEn: "① Seigniorage",
              value: "달러 인쇄 비용으로 실물 조달",
              valueEn: "Acquire real goods by printing dollars",
              sub: "미국은 종이(달러)를 주고 실제 상품과 서비스를 받는다. 연간 수천억 달러 규모로 추산",
              subEn: "The US exchanges paper (dollars) for real goods and services — estimated at hundreds of billions per year",
              color: "text-sky-600 dark:text-sky-400",
            },
            {
              label: "② 저금리 프리미엄",
              labelEn: "② Low Borrowing Cost",
              value: "미국 국채 = 세계 안전자산",
              valueEn: "US Treasuries = Global Safe Asset",
              sub: "전 세계가 달러 안전자산을 원하기 때문에 미국은 구조적으로 낮은 금리로 차입 가능",
              subEn: "Global demand for dollar safe assets lets the US borrow at structurally lower rates than any other sovereign",
              color: "text-sky-600 dark:text-sky-400",
            },
            {
              label: "③ 제재 무기화",
              labelEn: "③ Sanctions as Weapon",
              value: "SWIFT 달러 결제망 통제",
              valueEn: "Control over SWIFT dollar payment network",
              sub: "달러 결제망에서 배제 = 실질적 경제 봉쇄. 이란·러시아 제재의 근거",
              subEn: "Exclusion from the dollar payment network equals effective economic blockade — the basis for Iran and Russia sanctions",
              color: "text-sky-600 dark:text-sky-400",
            },
          ],
        },
        {
          type: "text",
          body: "이 세 가지 이득은 서로 강화한다. 저금리로 차입할 수 있으니 재정 공간이 넓고, 재정 공간이 있으니 군사력과 외교력을 투사할 수 있고, 그 힘이 달러 시스템을 지키는 방패가 된다. **달러 패권은 순환 자기강화 구조**다.",
          bodyEn:
            "These three benefits reinforce each other. Low borrowing costs create fiscal space; fiscal space enables military and diplomatic power projection; that power protects the dollar system. **Dollar hegemony is a self-reinforcing circular structure.**",
        },
      ],
    },
    // ── 6 ──────────────────────────────────────────────────────────────────────
    {
      heading: "달러 패권의 현주소 — 흔들리는가",
      headingEn: "The Dollar's Current State — Is It Weakening?",
      blocks: [
        {
          type: "chart",
          chart: {
            id: "reserve-share",
            title: "달러의 글로벌 외환보유고 비중 추이 (1999–2024, %)",
            titleEn: "Dollar's Share of Global FX Reserves (1999–2024, %)",
            caption:
              "출처: IMF COFER(Currency Composition of Official Foreign Exchange Reserves), 2024. 2001년 71.5%에서 2024년 57.8%로 하락했으나, 2위 유로(약 20%)의 3배 수준을 유지 중.",
            captionEn:
              "Source: IMF COFER, 2024. Declined from 71.5% in 2001 to 57.8% in 2024, yet remains roughly 3× the #2 euro (~20%).",
            data: [
              { year: "1999", share: 71.0 },
              { year: "2001", share: 71.5 },
              { year: "2003", share: 65.9 },
              { year: "2005", share: 66.5 },
              { year: "2007", share: 64.1 },
              { year: "2009", share: 62.1 },
              { year: "2011", share: 62.6 },
              { year: "2013", share: 61.2 },
              { year: "2015", share: 65.7 },
              { year: "2017", share: 63.8 },
              { year: "2019", share: 61.8 },
              { year: "2021", share: 58.9 },
              { year: "2022", share: 58.4 },
              { year: "2023", share: 58.8 },
              { year: "2024", share: 57.8 },
            ],
          },
        },
        {
          type: "text",
          body: "숫자만 보면 달러의 지배력은 분명 약해지고 있다. 2001년 71.5%에서 2024년 57.8% — 20년간 약 14%포인트 하락이다.\n\n그러나 맥락이 중요하다. 이 하락의 절반 이상은 달러가 '이탈'한 게 아니라, 기존에 집계되지 않던 중국·러시아 등의 보유 자산이 통계에 포함되기 시작하면서 생긴 **통계 기저 효과**다. 실제 탈달러화 흐름의 실질적 규모는 통계보다 훨씬 작다.\n\n무엇보다, **2위 유로는 약 20%다.** 달러가 흔들린다고 해도, 그 자리를 채울 대안은 아직 없다.",
          bodyEn:
            "The numbers alone suggest dollar dominance is clearly fading. From 71.5% in 2001 to 57.8% in 2024 — roughly a 14 percentage point drop over 20 years.\n\nBut context matters. More than half of this decline reflects not dollar 'defections' but a **statistical base effect**: China, Russia, and others began reporting reserve composition data that was previously untracked. The actual pace of de-dollarization is substantially smaller than the headline numbers suggest.\n\nMost importantly — **the euro in second place is at roughly 20%.** Even as the dollar softens, there is still no alternative capable of filling its role.",
        },
        {
          type: "callout",
          callout: {
            variant: "warning",
            heading: "탈달러화 선언 vs 실제 인프라",
            headingEn: "Dedollarization Rhetoric vs Actual Infrastructure",
            body: "BRICS, ASEAN, 중동에서 탈달러화 선언이 이어진다. 그러나 대안 결제 시스템의 현실은 냉혹하다. 이 이야기는 3편에서 본격적으로 다룬다.",
            bodyEn:
              "Dedollarization declarations pour in from BRICS, ASEAN, and the Middle East. But the reality of alternative payment infrastructure is sobering. That story unfolds fully in Part 3.",
          },
        },
      ],
    },
    // ── 7 ──────────────────────────────────────────────────────────────────────
    {
      heading: "신흥국의 딜레마 — 달러 패권 안에서 살아가기",
      headingEn: "The Emerging Market Dilemma — Living Inside Dollar Hegemony",
      blocks: [
        {
          type: "text",
          body: "달러 패권은 미국에게 '과도한 특권'이다. 그러나 신흥국(Emerging Markets)에게는 구조적 딜레마다.\n\n**달러의 원죄(Original Sin)**: 신흥국 기업과 정부는 국제 금융시장에서 자국 통화로 차입하기 어렵다. 달러 표시 외채를 발행해야 한다. 자국 통화로 수익을 내면서 달러로 빚을 갚아야 하는 구조 — 연준이 금리를 올리면 달러가 강해지고, 갚아야 할 빚의 실질 부담이 자동으로 늘어난다. 이것이 '원죄'다.\n\n**중앙은행의 보험료**: 신흥국 중앙은행들은 달러 유동성 위기에 대비해 외환보유고를 쌓는다. 그 보유고의 대부분이 다시 미국 국채다. IMF가 2024년 발표한 COFER 데이터에 따르면, 신흥국 중앙은행 외환보유고의 약 60%는 여전히 달러 자산이다. **달러 패권에 종속된 나라들이 달러 패권을 유지하는 자금을 대고 있는 아이러니**다.\n\n국가별 포지션은 다르다. 연준 FX 스왑라인(한국, 멕시코, 브라질, 싱가포르 등 소수 국가 보유)은 위기 시 직접 달러를 빌릴 수 있는 '달러 네트워크 멤버십'이다. 반면 스왑라인이 없는 터키, 아르헨티나, 이집트 등은 달러 위기 시 IMF 구제금융에 의존하거나, 자체 외환보유고를 소진하는 수밖에 없다.",
          bodyEn:
            "Dollar hegemony is an 'exorbitant privilege' for the United States. For emerging markets (EMs), it is a structural dilemma.\n\n**Original Sin**: EM corporations and governments struggle to borrow in international markets using their own currencies. They issue dollar-denominated debt. They earn revenues in local currency but repay debt in dollars — so when the Fed raises rates, the dollar strengthens and the real burden of their obligations automatically grows. This is 'original sin.'\n\n**The insurance premium central banks pay**: EM central banks stockpile FX reserves against dollar liquidity crises. Most of those reserves are US Treasuries. IMF COFER data for 2024 shows roughly 60% of EM central bank reserves are still dollar assets. **An irony: the countries most dependent on dollar hegemony are the ones financing it.**\n\nPositions vary significantly. The Fed FX Swap Line (held by a small group including South Korea, Mexico, Brazil, and Singapore) is a 'dollar network membership' — direct access to Fed dollars in a crisis. Countries without swap lines — Turkey, Argentina, Egypt — must rely on IMF bailouts or drain their own reserves when dollar stress hits.",
        },
        {
          type: "table",
          table: {
            id: "em-dollar-exposure",
            title: "신흥국 달러 패권 노출 유형",
            titleEn: "Emerging Market Exposure to Dollar Hegemony",
            headers: ["유형", "국가 예시", "연준 스왑라인", "달러 취약성"],
            headersEn: ["Type", "Examples", "Fed Swap Line", "Dollar Vulnerability"],
            rows: [
              ["준내부자", "한국, 멕시코, 브라질, 싱가포르", "있음 ✓", "낮음 — 위기 시 직접 달러 조달"],
              ["중간 그룹", "인도, 인도네시아, 태국, 남아공", "없음", "중간 — 충분한 보유고 보유"],
              ["취약 그룹", "터키, 아르헨티나, 이집트", "없음", "높음 — 달러 강세 시 위기 반복"],
              ["격리 시도국", "러시아, 이란, 북한", "없음 (제재)", "극단적 — 대안 시스템 구축 시도"],
            ],
            rowsEn: [
              ["Semi-Insiders", "South Korea, Mexico, Brazil, Singapore", "Yes ✓", "Low — direct dollar access in crises"],
              ["Middle Tier", "India, Indonesia, Thailand, S. Africa", "No", "Medium — adequate reserve buffers"],
              ["Vulnerable Group", "Turkey, Argentina, Egypt", "No", "High — repeat crises during dollar strength"],
              ["Isolation Seekers", "Russia, Iran, North Korea", "No (sanctioned)", "Extreme — building alternative systems"],
            ],
            caption: "출처: IMF, Federal Reserve. 스왑라인 보유 여부는 달러 유동성 위기 시 가장 중요한 안전판이다.",
            captionEn: "Sources: IMF, Federal Reserve. Swap line access is the single most important safety valve in a dollar liquidity crisis.",
          },
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "다음 편 예고 — 달러 패권의 배관",
            headingEn: "Next: The Dollar's Plumbing",
            body: "달러는 왜 패권을 유지하는가? 역사가 아닌 메커니즘으로 보면 답이 다르다. 2편에서는 레포시장, 연준 대차대조표, 재무부 TGA가 어떻게 맞물려 글로벌 달러 유동성을 만드는지, 그리고 캐빈 워시 시대의 연준이 이 배관을 어떻게 바꾸려 하는지를 다룬다.",
            bodyEn:
              "Why does the dollar maintain its dominance? The answer looks different when viewed through mechanics rather than history. Part 2 examines how the repo market, the Fed balance sheet, and the Treasury General Account (TGA) interlock to create global dollar liquidity — and how the Kevin Warsh Fed aims to rewire that plumbing.",
          },
        },
      ],
    },
  ],
  references: [
    {
      id: 1,
      author: "Eichengreen, B.",
      title: "Exorbitant Privilege: The Rise and Fall of the Dollar and the Future of the International Monetary System",
      source: "Oxford University Press",
      year: "2011",
    },
    {
      id: 2,
      author: "IMF",
      title: "Currency Composition of Official Foreign Exchange Reserves (COFER)",
      source: "IMF Data",
      year: "2024",
      url: "https://data.imf.org/?sk=E6A5F467-C14B-4AA8-9F6D-5A09EC4E62A4",
    },
    {
      id: 3,
      author: "Bank for International Settlements (BIS)",
      title: "Triennial Central Bank Survey: Foreign Exchange Turnover in April 2022",
      source: "BIS Statistics",
      year: "2022",
      url: "https://www.bis.org/statistics/rpfx22.htm",
    },
    {
      id: 4,
      author: "Yergin, D.",
      title: "The Prize: The Epic Quest for Oil, Money & Power",
      source: "Simon & Schuster",
      year: "1991",
    },
    {
      id: 5,
      author: "Triffin, R.",
      title: "Gold and the Dollar Crisis: The Future of Convertibility",
      source: "Yale University Press",
      year: "1960",
    },
    {
      id: 6,
      author: "Nixon, R.",
      title: "Address to the Nation Outlining a New Economic Policy: The Challenge of Peace",
      source: "The American Presidency Project",
      year: "1971",
      url: "https://www.presidency.ucsb.edu/documents/address-the-nation-outlining-new-economic-policy-the-challenge-peace",
    },
    {
      id: 7,
      author: "Prasad, E.",
      title: "The Dollar Trap: How the U.S. Dollar Tightened Its Grip on Global Finance",
      source: "Princeton University Press",
      year: "2014",
    },
    {
      id: 8,
      author: "McKinnon, R.",
      title: "The Unloved Dollar Standard: From Bretton Woods to the Rise of China",
      source: "Oxford University Press",
      year: "2013",
    },
    {
      id: 9,
      author: "Gopinath, G. & Stein, J.",
      title: "Banking, Trade, and the Making of a Dominant Currency",
      source: "Quarterly Journal of Economics, 136(2)",
      year: "2021",
      url: "https://doi.org/10.1093/qje/qjaa036",
    },
    {
      id: 10,
      author: "Setser, B.",
      title: "The Return of the Dollar's Dominance",
      source: "Council on Foreign Relations",
      year: "2021",
      url: "https://www.cfr.org/report/return-dollars-dominance",
    },
    {
      id: 11,
      author: "Giscard d'Estaing, V.",
      title: "Statement on the 'Exorbitant Privilege' of the Dollar",
      source: "Cited in Eichengreen (2011), p.2",
      year: "1965",
    },
    {
      id: 12,
      author: "한국은행 (Bank of Korea)",
      title: "외환보유액 현황 및 운용 현황",
      source: "한국은행 경제통계시스템",
      year: "2024",
      url: "https://ecos.bok.or.kr",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #3 — 달러 패권 시리즈 2편: 배관을 이해하면 세계가 보인다
// ══════════════════════════════════════════════════════════════════════════════

const dollarHegemony2: NoteData = {
  slug: "dollar-hegemony-2",
  category: "macro",
  status: "published",
  series: "dollar-hegemony",
  seriesOrder: 2,
  title: "달러 패권 ② — 배관을 이해하면 세계가 보인다",
  titleEn: "Dollar Hegemony ② — Understanding the Plumbing",
  description:
    "레포시장, 연준 대차대조표, 재무부 TGA — 달러 패권은 지정학이 아닌 유동성 배관으로 유지된다. 2019년 레포 위기와 캐빈 워시 시대가 이 배관을 어떻게 바꾸는지 해부한다.",
  descriptionEn:
    "Repo markets, the Fed balance sheet, Treasury TGA — dollar hegemony is sustained not by geopolitics but by liquidity plumbing. We dissect how the 2019 repo crisis and the Kevin Warsh era are rewiring this system.",
  date: "2026-05-28",
  readingMinutes: 20,
  keyPoints: [
    "레포시장은 달러 패권의 배관 — 전 세계 금융기관이 미국 국채를 담보로 단기 달러를 조달한다",
    "연준 대차대조표는 $900B(2007)에서 $9조(2022)까지 팽창했다 — 이 수도꼭지가 글로벌 달러 유동성을 결정한다",
    "2019년 9월: QT가 지나치자 레포금리가 하루 만에 2%→10%로 치솟았다 — 배관이 막힌 날",
    "재무부 TGA 잔고의 증감은 연준과 무관하게 시중 유동성을 조용히 움직인다",
    "캐빈 워시: 공격적 QT + 규칙 기반 정책 → 달러 긴축의 새 국면, 신흥국과 원화에 직격",
  ],
  keyPointsEn: [
    "The repo market is dollar hegemony's plumbing — global financial institutions borrow short-term dollars using US Treasuries as collateral",
    "The Fed balance sheet expanded from $900B (2007) to $9 trillion (2022) — this faucet determines global dollar liquidity",
    "September 2019: QT pushed too far and repo rates spiked from 2% to 10% in a single day — the day the pipes clogged",
    "The Treasury General Account (TGA) quietly moves market liquidity independently of the Fed",
    "Kevin Warsh: aggressive QT + rules-based policy → a new phase of dollar tightening, hitting emerging markets and the Korean won directly",
  ],
  sections: [
    // ── 1 ──────────────────────────────────────────────────────────────────────
    {
      heading: "배관의 본질 — 레포시장이 달러를 세계에 뿌린다",
      headingEn: "The Plumbing — How the Repo Market Distributes Dollars",
      blocks: [
        {
          type: "text",
          body: "달러 패권을 유지하는 힘은 군사력이나 경제 규모가 아니다. **배관(plumbing)**이다.\n\n전 세계 금융기관들이 매일 수조 달러를 단기로 빌리고 빌려주는 시장 — 이것이 **레포시장(Repo Market)**이다. 'Repo'는 'Repurchase Agreement(환매조건부채권)'의 약자다. 작동 방식은 단순하다:\n\n① A는 B에게 미국 국채를 판다\n② 동시에, A는 다음날(또는 정해진 날) 같은 국채를 더 비싼 가격에 되사겠다고 약속한다\n③ 가격 차이 = **레포금리(repo rate)** = 이자\n\nB 입장에서는 담보를 받고 하루짜리 대출을 해주는 것이다. A 입장에서는 국채를 잠시 맡기고 달러 현금을 빌리는 것이다. 전 세계 레포시장 규모는 약 **$10조** 이상으로 추산된다.\n\n핵심은 **담보의 질**이다. 이 시장에서 가장 선호되는 담보는 미국 국채(US Treasury)다. 신용 위험이 사실상 없고, 유동성이 극히 높기 때문이다. 즉 **미국 국채를 보유해야 달러를 빌릴 수 있는 구조**다. 이것이 달러 패권이 \"배관\"으로 유지되는 방식이다.",
          bodyEn:
            "The force sustaining dollar hegemony is not military power or economic scale. It's **plumbing**.\n\nThe market where global financial institutions borrow and lend trillions of dollars overnight — this is the **repo market** (Repurchase Agreement market). The mechanics are simple:\n\n① A sells a US Treasury to B\n② Simultaneously, A promises to repurchase the same Treasury at a slightly higher price tomorrow (or on a set date)\n③ The price difference = the **repo rate** = interest\n\nFrom B's perspective, it's a one-day collateralized loan. From A's perspective, it's pledging Treasuries to borrow cash. The global repo market exceeds **$10 trillion** in estimated size.\n\nThe critical factor is **collateral quality**. The most preferred collateral in this market is the US Treasury — virtually zero credit risk, extremely high liquidity. In other words, **you need US Treasuries to borrow dollars**. This is how dollar hegemony is maintained through plumbing.",
        },
        {
          type: "metrics",
          items: [
            {
              label: "레포시장 규모",
              labelEn: "Repo Market Size",
              value: "약 $10조+ (일일 거래)",
              valueEn: "~$10T+ (daily volume)",
              sub: "미국 내 시장만 $4~5조. 글로벌 포함 시 $10조 상회",
              subEn: "US domestic alone: $4–5T. Including global: exceeds $10T",
              color: "text-sky-600 dark:text-sky-400",
            },
            {
              label: "최선호 담보",
              labelEn: "Preferred Collateral",
              value: "미국 국채 (US Treasury)",
              valueEn: "US Treasuries",
              sub: "담보 품질 기준 최상위 — 신용위험 제로, 유동성 극대",
              subEn: "Top-tier collateral — near-zero credit risk, maximum liquidity",
              color: "text-sky-600 dark:text-sky-400",
            },
            {
              label: "거래 만기",
              labelEn: "Typical Tenor",
              value: "주로 overnight (1일)",
              valueEn: "Mainly overnight (1 day)",
              sub: "하루짜리 거래지만 매일 반복 롤오버 — 사실상 단기 자금 조달 인프라",
              subEn: "One-day trades rolled daily — effectively short-term funding infrastructure",
              color: "text-sky-600 dark:text-sky-400",
            },
          ],
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "왜 국채가 담보인가 — 달러 패권의 순환 논리",
            headingEn: "Why Treasuries Are Collateral — Dollar Hegemony's Circular Logic",
            body: "달러가 기축통화이기 때문에 국채가 최고 담보가 된다. 국채가 최고 담보이기 때문에 전 세계가 국채를 보유하려 한다. 국채 수요가 구조적으로 높기 때문에 미국은 낮은 금리로 계속 차입할 수 있다. 그 차입이 다시 달러 공급을 유지한다. **이 순환이 깨지지 않는 한, 달러 패권은 자기 강화된다.**",
            bodyEn:
              "Because the dollar is the reserve currency, Treasuries become the premier collateral. Because Treasuries are premier collateral, everyone wants to hold them. Because demand is structurally high, the US borrows at low rates. That borrowing sustains dollar supply. **As long as this loop holds, dollar hegemony self-reinforces.**",
          },
        },
      ],
    },
    // ── 2 ──────────────────────────────────────────────────────────────────────
    {
      heading: "연준 대차대조표 — 달러의 수도꼭지",
      headingEn: "The Fed Balance Sheet — The Dollar Faucet",
      blocks: [
        {
          type: "text",
          body: "연준(Federal Reserve)은 달러를 찍어내는 기관이다. 그러나 연준이 달러를 공급하는 방식은 '찍어내기'보다 훨씬 복잡하다. 핵심은 **대차대조표(balance sheet)**다.\n\n**QE(양적완화) 작동 방식:**\n연준이 시중의 국채를 매입한다 → 매입 대금으로 은행에 **지급준비금(bank reserves)**을 지급한다 → 시중에 달러가 공급된다.\n\n**QT(양적긴축) 작동 방식:**\n연준이 보유 국채를 만기 시 재투자하지 않거나 매각한다 → 국채가 시장으로 돌아온다 → 은행 지급준비금이 줄어든다 → 시중 달러 유동성이 감소한다.\n\n2008년 금융위기 전, 연준 대차대조표는 약 **$9,000억**이었다. 2022년 정점에서는 **$9조**에 달했다. 단 14년 만에 10배 팽창했다.",
          bodyEn:
            "The Federal Reserve is the institution that creates dollars. But the way it supplies dollars is far more complex than simply 'printing.' The key is the **balance sheet**.\n\n**How QE (Quantitative Easing) works:**\nThe Fed buys Treasuries from the market → pays for them with **bank reserves** → dollars enter the economy.\n\n**How QT (Quantitative Tightening) works:**\nThe Fed lets Treasuries mature without reinvesting, or actively sells → Treasuries return to the market → bank reserves shrink → dollar liquidity in the economy contracts.\n\nBefore the 2008 financial crisis, the Fed's balance sheet was approximately **$900 billion**. At its 2022 peak, it reached **$9 trillion** — a 10× expansion in just 14 years.",
        },
        {
          type: "chart",
          chart: {
            id: "fed-balance-sheet",
            title: "연준 총자산 추이 (2007–2024, 조 달러)",
            titleEn: "Federal Reserve Total Assets (2007–2024, USD Trillions)",
            caption:
              "출처: Federal Reserve H.4.1 Statistical Release. 2022년 $9조 정점 이후 QT로 $7.2조로 축소 중. 2019년 레포 위기 당시 일시 반등 확인.",
            captionEn:
              "Source: Federal Reserve H.4.1 Statistical Release. After the $9T peak in 2022, QT has reduced assets to ~$7.2T. Note the temporary reversal around the 2019 repo crisis.",
            data: [
              { year: "2007", assets: 0.9 },
              { year: "2008", assets: 2.2 },
              { year: "2009", assets: 2.1 },
              { year: "2010", assets: 2.3 },
              { year: "2011", assets: 2.9 },
              { year: "2012", assets: 2.9 },
              { year: "2013", assets: 3.9 },
              { year: "2014", assets: 4.5 },
              { year: "2015", assets: 4.5 },
              { year: "2016", assets: 4.5 },
              { year: "2017", assets: 4.5 },
              { year: "2018", assets: 4.2 },
              { year: "2019", assets: 4.2 },
              { year: "2020", assets: 7.1 },
              { year: "2021", assets: 8.8 },
              { year: "2022", assets: 8.9 },
              { year: "2023", assets: 7.8 },
              { year: "2024", assets: 7.2 },
            ],
            annotations: [
              { year: "2008", label: "GFC", labelEn: "GFC" },
              { year: "2020", label: "COVID", labelEn: "COVID" },
              { year: "2022", label: "QT 시작", labelEn: "QT begins" },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "warning",
            heading: "QE의 역설 — 국채를 사면 담보가 줄어든다",
            headingEn: "QE's Paradox — Buying Treasuries Reduces Collateral",
            body: "연준이 QE로 국채를 사면 시중에 달러(지급준비금)는 늘어난다. 그런데 동시에 레포시장의 담보(국채)는 줄어든다. 유동성은 증가하지만 배관의 연료가 감소하는 아이러니. QT가 오히려 레포시장 담보를 늘린다는 역설이 여기서 나온다 — 단, 너무 빠르면 준비금 부족으로 위기가 생긴다.",
            bodyEn:
              "When the Fed buys Treasuries via QE, dollar reserves in the system increase. But simultaneously, repo market collateral (Treasuries) decreases. Liquidity rises but the fuel that runs the plumbing shrinks. This is where the paradox emerges: QT actually increases repo collateral — but if it goes too fast, reserve shortages trigger a crisis.",
          },
        },
      ],
    },
    // ── 3 ──────────────────────────────────────────────────────────────────────
    {
      heading: "재무부 TGA — 아무도 말하지 않는 유동성 변수",
      headingEn: "The Treasury TGA — The Liquidity Variable Nobody Talks About",
      blocks: [
        {
          type: "text",
          body: "달러 유동성을 움직이는 변수는 연준만이 아니다. **재무부 TGA(Treasury General Account)**가 조용히 시장을 흔든다.\n\nTGA는 미국 재무부가 연준에 보유하는 당좌계좌다. 정부가 세금을 걷거나 국채를 발행하면 TGA로 들어오고, 정부가 지출하면 TGA에서 나간다. 단순해 보이지만, 이 계좌의 잔고 변화가 시중 유동성에 직접 영향을 미친다:\n\n- **TGA 잔고 감소** → 정부 지출 증가 → 시중에 달러 공급 → **유동성 증가** (완화 효과)\n- **TGA 잔고 증가** → 국채 발행 or 지출 축소 → 시중에서 달러 흡수 → **유동성 감소** (긴축 효과)",
          bodyEn:
            "The Fed isn't the only variable moving dollar liquidity. The **Treasury General Account (TGA)** quietly moves markets.\n\nThe TGA is the checking account the US Treasury holds at the Fed. Tax receipts and bond issuance flow in; government spending flows out. Simple in principle — but changes in this balance directly impact market liquidity:\n\n- **TGA balance falls** → government spending increases → dollars enter the economy → **liquidity rises** (easing effect)\n- **TGA balance rises** → bond issuance or spending cuts → dollars absorbed from economy → **liquidity falls** (tightening effect)",
        },
        {
          type: "table",
          table: {
            id: "tga-scenarios",
            title: "부채한도 협상과 TGA가 만드는 유동성 사이클",
            titleEn: "Debt Ceiling Negotiations and the TGA Liquidity Cycle",
            headers: ["단계", "상황", "TGA 변화", "시장 유동성", "금융시장 효과"],
            headersEn: ["Phase", "Situation", "TGA Change", "Market Liquidity", "Market Effect"],
            rows: [
              ["①", "부채한도 도달 — 국채 발행 중단", "TGA 잔고 감소", "공급 증가", "완화적 (주가↑)"],
              ["②", "부채한도 협상 타결", "TGA 재충전 시작", "공급 감소", "긴축적 (주가↓ 가능)"],
              ["③", "국채 대규모 발행 (빚 갚기)", "TGA 급증", "대규모 흡수", "강한 긴축 충격"],
              ["④", "정상화 — 정기 지출 재개", "TGA 점진 감소", "정상화", "중립"],
            ],
            rowsEn: [
              ["①", "Debt ceiling hit — no new issuance", "TGA balance falls", "Supply increases", "Easing (equities ↑)"],
              ["②", "Debt ceiling deal reached", "TGA refill begins", "Supply decreases", "Tightening (equities ↓ possible)"],
              ["③", "Large Treasury issuance (catching up)", "TGA surges", "Large-scale absorption", "Strong tightening shock"],
              ["④", "Normalization — regular spending resumes", "TGA gradually falls", "Normalized", "Neutral"],
            ],
            caption:
              "2023년 6월 부채한도 타결 직후, 재무부가 3개월 내 약 $1조의 국채를 발행해 TGA를 재충전하자 시중 유동성이 급격히 줄어들었다. 이것이 같은 해 하반기 금리 급등의 숨겨진 원인 중 하나다.",
            captionEn:
              "After the June 2023 debt ceiling resolution, the Treasury issued approximately $1 trillion in bonds within three months to refill the TGA, sharply draining market liquidity — one of the hidden drivers behind the rate surge in H2 2023.",
          },
        },
      ],
    },
    // ── 4 ──────────────────────────────────────────────────────────────────────
    {
      heading: "2019년 레포 위기 — 배관이 막힌 날",
      headingEn: "The 2019 Repo Crisis — The Day the Pipes Clogged",
      blocks: [
        {
          type: "text",
          body: "2019년 9월 17일 화요일 오전. 미국 레포시장이 멈췄다.\n\n전날까지 연 2% 내외였던 레포금리가 오전 중 **10%**까지 치솟았다. 하룻밤 사이에 5배. 연준 기준금리 상단(2.25%)의 4배가 넘는 수준이었다. 세계 최대 단기 자금시장이 마비될 뻔한 순간이었다.",
          bodyEn:
            "Tuesday morning, September 17, 2019. The US repo market froze.\n\nOvernight repo rates that had been hovering around 2% surged to **10%** during the morning session — five times higher than the prior day, more than four times the Fed's upper policy rate (2.25%). The world's largest short-term funding market nearly seized up.",
        },
        {
          type: "chart",
          chart: {
            id: "repo-crisis",
            title: "2019년 레포금리 위기 — 하루 만에 10%로 폭등",
            titleEn: "2019 Repo Crisis — Rates Surged to 10% in a Single Day",
            caption:
              "출처: Federal Reserve Bank of New York, SOFR 전환 이전 GCF Repo rate 기준. 2019년 9월 17~18일 레포금리가 연 10%까지 치솟았고, 연준이 즉각 overnight repo 운영에 나서 정상화했다.",
            captionEn:
              "Source: Federal Reserve Bank of New York, GCF Repo rate (pre-SOFR). On September 17–18, 2019, repo rates spiked to ~10% annualized before the Fed intervened with overnight repo operations.",
            data: [
              { date: "7월", repoRate: 2.12, fedRate: 2.40 },
              { date: "8월", repoRate: 2.10, fedRate: 2.25 },
              { date: "9/10", repoRate: 2.09, fedRate: 2.25 },
              { date: "9/16", repoRate: 2.20, fedRate: 2.25 },
              { date: "9/17", repoRate: 5.25, fedRate: 2.25 },
              { date: "9/18", repoRate: 10.0, fedRate: 2.25 },
              { date: "9/19", repoRate: 2.55, fedRate: 2.00 },
              { date: "10월", repoRate: 1.85, fedRate: 1.75 },
              { date: "11월", repoRate: 1.56, fedRate: 1.75 },
              { date: "12월", repoRate: 1.54, fedRate: 1.75 },
            ],
          },
        },
        {
          type: "text",
          body: "**원인은 두 가지가 동시에 겹쳤다:**\n\n① **법인세 납부 마감일** — 대형 기업들이 세금을 내기 위해 은행에서 대규모로 현금을 인출. 은행 지급준비금 급감\n② **국채 신규 발행 결제일** — 대규모 국채 경매 결제로 시중 현금이 국채 대금으로 빠져나감\n\n두 이벤트가 겹치자 은행들의 지급준비금이 임계점 이하로 떨어졌다. 달러를 빌려줄 여유가 없어진 은행들이 레포시장에서 발을 빼자 금리가 폭등했다.\n\n연준은 다음날 즉각 $750억 규모 overnight repo 오퍼레이션을 실시했다. 이후 수개월간 레포시장에 계속 개입했고, 2019년 10월부터는 T-bill(단기 국채)을 매월 $600억씩 매입하기 시작했다. 파월 의장은 이것을 **\"QE가 아니다(NOT QE)\"**라고 불렀지만, 사실상 미니 QE였다.\n\n이 사건이 가르쳐준 교훈: **QT에는 하드 플로어가 있다.** 지급준비금이 일정 수준 이하로 떨어지면 배관이 막힌다. 연준은 이를 막기 위해 2021년 Standing Repo Facility(SRF)를 신설했다.",
          bodyEn:
            "**Two events collided simultaneously:**\n\n① **Corporate tax payment deadline** — Large corporations drained cash from banks to pay taxes, rapidly depleting bank reserves\n② **Treasury auction settlement** — Large-scale Treasury issuance settlement absorbed cash from the system\n\nWhen the two hit together, bank reserves fell below the critical threshold. Banks unwilling to lend in repo pulled back — and rates exploded.\n\nThe Fed immediately launched a $75 billion overnight repo operation the next day, continuing interventions for months. In October 2019, it began purchasing $60 billion in T-bills monthly. Chair Powell called this **\"NOT QE\"** — but it was effectively a mini-QE.\n\nThe lesson: **QT has a hard floor.** When reserves fall below a certain level, the plumbing clogs. To prevent recurrence, the Fed established the Standing Repo Facility (SRF) in 2021.",
        },
      ],
    },
    // ── 5 ──────────────────────────────────────────────────────────────────────
    {
      heading: "달러 공급의 역설 — 빚이 많을수록 배관이 원활하다",
      headingEn: "The Dollar Supply Paradox — More Debt Means Better Plumbing",
      blocks: [
        {
          type: "text",
          body: "이제 1편의 핵심 질문으로 돌아온다. 미국 국채가 $36조를 넘어도 왜 세계는 계속 사는가?\n\n**배관의 논리로 보면 역설이 사라진다.**\n\n미국이 국채를 더 발행하면 → 레포시장에 담보가 늘어난다 → 글로벌 단기 달러 조달이 원활해진다 → 달러 수요가 늘어난다 → 달러 패권이 강화된다. 부채 증가가 달러 패권을 약화시키는 것이 아니라, **오히려 강화하는 메커니즘**이다.\n\n이것이 '트리핀 딜레마'를 배관 언어로 번역한 결과다. 미국은 기축통화국으로서 세계에 달러(=유동성)를 공급하기 위해 구조적으로 경상수지 적자와 재정적자를 낼 수밖에 없다. 달러를 공급하는 행위 자체가 미국의 부채 누적을 의미한다. 그리고 그 부채(국채)가 레포시장의 연료가 되어 다시 달러 수요를 창출한다.",
          bodyEn:
            "Now we return to the core question from Part 1: why does the world keep buying US Treasuries even as the total exceeds $36 trillion?\n\n**Through the plumbing lens, the paradox dissolves.**\n\nMore US debt issuance → more collateral in the repo market → smoother global short-term dollar funding → more dollar demand → stronger dollar hegemony. Growing debt doesn't weaken dollar hegemony — the mechanism **actually reinforces it**.\n\nThis is what the Triffin Dilemma looks like translated into plumbing language. As the reserve currency issuer, the US is structurally required to run current account and fiscal deficits to supply the world with dollars (= liquidity). The very act of supplying dollars means accumulating debt. And that debt (Treasuries) becomes the fuel for the repo market, regenerating dollar demand.",
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "달러 패권의 역설: 미국의 부채가 세계 금융 시스템의 연료다. 부채가 사라지면 배관도 멈춘다.",
            bodyEn:
              "The dollar paradox: US debt is the fuel of the global financial system. If the debt disappeared, so would the plumbing.",
          },
        },
      ],
    },
    // ── 6 ──────────────────────────────────────────────────────────────────────
    {
      heading: "캐빈 워시 — 배관공이 바뀐다",
      headingEn: "Kevin Warsh — A New Plumber Takes Over",
      blocks: [
        {
          type: "text",
          body: "2026년 연준의장 자리에 **캐빈 워시(Kevin Warsh)**가 지명됐다. 전 연준 이사(2006~2011), JP모건 투자은행 출신. 트럼프 대통령의 낙점이었다.\n\n워시가 중요한 이유는 그의 통화정책 철학이 파월과 근본적으로 다르기 때문이다.",
          bodyEn:
            "In 2026, **Kevin Warsh** was nominated as Fed Chair — a former Fed Governor (2006–2011) and JP Morgan investment banker. Trump's choice.\n\nWarsh matters because his monetary policy philosophy differs fundamentally from Powell's.",
        },
        {
          type: "metrics",
          items: [
            {
              label: "규칙 기반 통화정책",
              labelEn: "Rules-Based Monetary Policy",
              value: "재량적 결정 최소화",
              valueEn: "Minimize discretionary decisions",
              sub: "테일러 준칙(Taylor Rule)류의 공식적 가이드라인 선호. 연준의 '임기응변식' 정책 비판",
              subEn: "Prefers formal guidelines like the Taylor Rule. Critical of the Fed's 'discretionary' policy approach",
              color: "text-amber-600 dark:text-amber-400",
            },
            {
              label: "공격적 QT",
              labelEn: "Aggressive QT",
              value: "대차대조표 축소 가속화",
              valueEn: "Accelerate balance sheet reduction",
              sub: "\"연준 대차대조표가 너무 크다\" 비판. 파월보다 빠른 속도의 국채 매각 선호",
              subEn: "\"The Fed balance sheet is too large.\" Favors faster Treasury runoff than Powell",
              color: "text-amber-600 dark:text-amber-400",
            },
            {
              label: "트럼프와의 긴장",
              labelEn: "Tension with Trump",
              value: "금리 인하 압박 vs 인플레 억제",
              valueEn: "Rate-cut pressure vs. inflation control",
              sub: "트럼프는 금리 인하를 원하지만, 워시는 인플레 재발 우려로 신중한 입장 — Fed 독립성 갈등 가능",
              subEn: "Trump wants rate cuts; Warsh is cautious about inflation re-acceleration — potential Fed independence friction",
              color: "text-amber-600 dark:text-amber-400",
            },
          ],
        },
        {
          type: "text",
          body: "워시 체제가 달러 유동성에 미치는 직접 영향:\n\n**QT 가속** → 시중 국채 공급 증가(레포 담보↑) + 은행 지급준비금 감소 → 단기 금리 상승 압력 → 글로벌 달러 유동성 긴축\n\n**장기 금리** → 국채 공급 증가 + 인플레 우려로 장기 금리(10년물) 상승 가능 → 달러 강세 압력\n\n한 가지 아이러니가 있다. 공격적 QT가 은행 지급준비금을 너무 빨리 줄이면 — **또 다른 2019년 레포 위기가 올 수 있다.** 워시는 이 리스크를 알고 있고, SRF(상설 레포 창구)가 백스톱이 되겠지만, 그 임계점이 어디인지는 실시간으로 테스트될 것이다.",
          bodyEn:
            "Warsh's direct impact on dollar liquidity:\n\n**Faster QT** → More Treasuries in market (more repo collateral) + shrinking bank reserves → upward pressure on short rates → global dollar liquidity tightening\n\n**Long-term rates** → Rising Treasury supply + inflation fears → higher 10-year yields possible → dollar strengthening pressure\n\nOne irony: if aggressive QT drains bank reserves too quickly — **another 2019 repo crisis could emerge.** Warsh knows this risk, and the SRF (Standing Repo Facility) provides a backstop — but where exactly the critical threshold lies will be tested in real time.",
        },
      ],
    },
    // ── 7 ──────────────────────────────────────────────────────────────────────
    {
      heading: "글로벌 투자자 시각 — 배관의 압력이 어디서 새는가",
      headingEn: "Global Investor Perspective — Where the Plumbing Pressure Leaks",
      blocks: [
        {
          type: "text",
          body: "달러 유동성 배관이 조여들 때, 그 압력은 가장 약한 고리에서 새어나온다. 글로벌 금융시장에서 이 '약한 고리'는 신흥국 자산과 단기 달러 조달 시장이다.\n\n**크로스커런시 베이시스 스왑(CCBS)**: 달러 패권 배관의 스트레스를 측정하는 가장 정밀한 지표 중 하나다. 비달러권 기관이 달러를 단기 조달할 때 치르는 '프리미엄'이다. 정상 시에는 0에 가깝지만, QT가 과속되거나 위기가 오면 급등한다. 2008년 금융위기 당시 엔화 CCBS는 -100bp에 달했다. 유로화도 -70bp까지 벌어졌다. 이 숫자가 커질수록 달러를 빌리는 비용이 기준금리보다 훨씬 높아진다.\n\n**신흥국 자본 흐름**: 연준이 QT를 진행하면 '위험 회피(risk-off)' 모드가 된다. 신흥국 주식·채권에서 자금이 빠져나와 미국 국채로 이동한다. 이것을 '달러 스마일(Dollar Smile)' 이론이라 부른다 — 미국 경제가 매우 좋아도, 아주 나빠도 달러가 강해진다. 신흥국 통화는 그 반대편에 있다.\n\n**워시 체제의 글로벌 임팩트**: 공격적 QT + 규칙 기반 정책은 시장 예측 가능성을 높이는 반면, 달러 유동성의 탄력성을 줄인다. 위기 시 연준이 '재량적으로' 개입하는 여지가 좁아지면, 신흥국은 더 빠르게, 더 깊이 달러 조달 위기에 노출될 수 있다. 그 전선에 가장 먼저 서 있는 나라들 — 스왑라인 없는 터키, 달러 외채 많은 아르헨티나, 그리고 제재받는 러시아 — 은 가장 먼저 배관의 균열을 느낀다.",
          bodyEn:
            "When the dollar liquidity plumbing tightens, pressure leaks at the weakest link. In global financial markets, those weak links are emerging market assets and short-term dollar funding markets.\n\n**Cross-Currency Basis Swaps (CCBS)**: One of the most precise gauges of stress in dollar hegemony's plumbing — the 'premium' non-dollar institutions pay to borrow dollars short-term. Near zero in normal times; spikes during QT overshoot or crisis. During the 2008 financial crisis, the JPY CCBS reached -100bp. EUR hit -70bp. The wider this spread, the more dollar borrowing costs exceed the policy rate benchmark.\n\n**EM capital flows**: When the Fed runs QT, markets shift into risk-off mode — capital exits EM equities and bonds and flows into US Treasuries. This is what the 'Dollar Smile' theory describes: the dollar strengthens when the US economy is very strong and when it's very weak. Emerging market currencies sit on the other side of that smile.\n\n**The Warsh regime's global impact**: Aggressive QT + rules-based policy increases market predictability but reduces dollar liquidity flexibility. If the Fed's room for 'discretionary' intervention narrows in a crisis, EMs face faster and deeper dollar funding stress. The countries first in line — Turkey without a swap line, Argentina with heavy dollar debt, Russia under sanctions — feel the plumbing crack earliest.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "다음 편 예고 — 탈달러화는 가능한가",
            headingEn: "Next: Can Dedollarization Actually Happen?",
            body: "배관이 이렇게 촘촘하게 짜여 있는데, 탈달러화는 실제로 진행되고 있는가? BRICS, 위안화, mBridge — 선언은 넘치지만 인프라의 현실은 냉혹하다. 3편에서 탈달러화의 실체를 해부한다.",
            bodyEn:
              "With plumbing this tightly woven, is dedollarization actually happening? BRICS, yuan, mBridge — declarations overflow but the infrastructure reality is sobering. Part 3 dissects the real state of dedollarization.",
          },
        },
      ],
    },
  ],
  references: [
    {
      id: 1,
      author: "Federal Reserve",
      title: "H.4.1 Factors Affecting Reserve Balances of Depository Institutions",
      source: "Federal Reserve Statistical Release",
      year: "2024",
      url: "https://www.federalreserve.gov/releases/h41/",
    },
    {
      id: 2,
      author: "Federal Reserve Bank of New York",
      title: "Repo and Reverse Repo Operations",
      source: "FRBNY Open Market Operations",
      year: "2024",
      url: "https://www.newyorkfed.org/markets/repo-and-reverse-repo-agreements",
    },
    {
      id: 3,
      author: "Pozsar, Z.",
      title: "Global Money Notes — Repo Market Series",
      source: "Credit Suisse / Formerly at Credit Suisse",
      year: "2019",
      note: "레포시장 구조 분석의 권위적 자료",
    },
    {
      id: 4,
      author: "Bagehot, W.",
      title: "Lombard Street: A Description of the Money Market",
      source: "Henry S. King & Co.",
      year: "1873",
      note: "중앙은행 최후 대부자 원칙의 원전 — 레포 위기 이해의 이론적 기초",
    },
    {
      id: 5,
      author: "Copeland, A., Martin, A., & Walker, M.",
      title: "Repo Runs: Evidence from the Tri-Party Repo Market",
      source: "Journal of Finance, 69(6)",
      year: "2014",
      url: "https://doi.org/10.1111/jofi.12205",
    },
    {
      id: 6,
      author: "Federal Reserve Bank of New York",
      title: "Statement Regarding Repurchase Operations (September 2019)",
      source: "FRBNY Markets Group",
      year: "2019",
      url: "https://www.newyorkfed.org/markets/opolicy/operating_policy_190917",
    },
    {
      id: 7,
      author: "Afonso, G., Cipriani, M., Copeland, A., et al.",
      title: "The Market Events of Mid-September 2019",
      source: "Federal Reserve Bank of New York Staff Report No. 918",
      year: "2020",
      url: "https://www.newyorkfed.org/research/staff_reports/sr918",
    },
    {
      id: 8,
      author: "Duffie, D. & Krishnamurthy, A.",
      title: "Passthrough Efficiency in the Fed's New Monetary Policy Setting",
      source: "Federal Reserve Bank of Kansas City Jackson Hole Proceedings",
      year: "2016",
    },
    {
      id: 9,
      author: "Bernanke, B.",
      title: "The New Tools of Monetary Policy",
      source: "American Economic Review, 110(4)",
      year: "2020",
      url: "https://doi.org/10.1257/aer.110.4.943",
    },
    {
      id: 10,
      author: "Warsh, K.",
      title: "Deregulation and Its Discontents: A Dissent from the Fed",
      source: "Wall Street Journal Op-Ed",
      year: "2011",
      note: "워시의 통화정책 철학 이해를 위한 1차 자료",
    },
    {
      id: 11,
      author: "Krishnamurthy, A. & Vissing-Jorgensen, A.",
      title: "The Aggregate Demand for Treasury Debt",
      source: "Journal of Political Economy, 120(2)",
      year: "2012",
      url: "https://doi.org/10.1086/666526",
    },
    {
      id: 12,
      author: "한국은행 (Bank of Korea)",
      title: "한국의 외환시장 개입 및 FX 스왑라인 운용",
      source: "한국은행 조사통계월보",
      year: "2024",
      url: "https://www.bok.or.kr",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #4 — 달러 패권 시리즈 3편: 탈달러화는 가능한가
// ══════════════════════════════════════════════════════════════════════════════

const dollarHegemony3: NoteData = {
  slug: "dollar-hegemony-3",
  category: "macro",
  status: "published",
  series: "dollar-hegemony",
  seriesOrder: 3,
  title: "달러 패권 ③ — 탈달러화는 가능한가",
  titleEn: "Dollar Hegemony ③ — Can Dedollarization Actually Happen?",
  description:
    "BRICS 선언, 위안화 국제화, mBridge — 탈달러화 주장은 넘쳐나지만 인프라의 현실은 냉혹하다. 선언과 실체 사이의 간극을 데이터로 해부한다.",
  descriptionEn:
    "BRICS declarations, yuan internationalization, mBridge — dedollarization rhetoric overflows, but the infrastructure reality is sobering. We dissect the gap between declarations and substance with data.",
  date: "2026-05-28",
  readingMinutes: 18,
  keyPoints: [
    "BRICS 2023 요하네스버그 선언 이후 탈달러화 선언이 급증했지만 — 실제 달러 외환보유고 비중 하락 속도는 연 0.5%p 미만이다",
    "위안화 국제화의 결정적 장벽: 자본시장 폐쇄 — 중국이 자본계정을 개방하지 않는 한 위안화는 진정한 기축통화가 될 수 없다",
    "mBridge는 CBDC 기반 다자 결제 플랫폼이지만 — 참여국 간 신뢰 구조와 법제도 차이가 확장의 결정적 장벽이다",
    "달러 대안의 딜레마: 신뢰받는 통화가 되려면 자본시장을 열어야 하고, 자본시장을 열면 국내 금융 안정이 위협받는다",
    "결론: 달러는 '쇠퇴'하는 게 아니라 '다극화' 중이다 — 하지만 대안 통화의 부상이 아닌 탈중앙화된 파편화다",
  ],
  keyPointsEn: [
    "Post-BRICS 2023 Johannesburg Summit, dedollarization declarations surged — but actual dollar reserve share decline runs below 0.5pp per year",
    "The yuan's decisive barrier: closed capital markets — until China opens its capital account, the yuan cannot become a true reserve currency",
    "mBridge is a CBDC-based multilateral payment platform — but cross-country trust structures and legal differences are critical barriers to scale",
    "The alternative currency dilemma: to earn trust you must open capital markets; but open capital markets destabilize domestic finance",
    "Conclusion: the dollar is not 'declining' but 'multipolarizing' — fragmentation without a rising alternative",
  ],
  sections: [
    // ── 1 ──────────────────────────────────────────────────────────────────────
    {
      heading: "탈달러화 선언의 역사 — 항상 있었다",
      headingEn: "The History of Dedollarization Declarations — They Never Stop",
      blocks: [
        {
          type: "text",
          body: "탈달러화는 새로운 이야기가 아니다.\n\n1960년대 드골의 달러 공격, 1970년대 페트로달러 체제 성립 이후의 OPEC 반발, 1997년 아시아 금융위기 이후의 IMF·달러 체제 비판, 2008년 금융위기 이후 중국의 SDR 강화 요구 — 수십 년간 탈달러화는 반복적으로 선언됐고, 반복적으로 실현되지 않았다.\n\n가장 최근의 파고는 두 가지 사건이 만들었다:\n\n① **2022년 러시아 제재**: 러시아의 $3,000억 규모 외환보유고가 동결됐다. '달러 자산을 쌓아두면 미국이 빼앗을 수 있다'는 것이 현실로 증명됐다.\n\n② **2023년 BRICS 확대**: 사우디아라비아, UAE, 이란, 이집트, 에티오피아, 아르헨티나(이후 철회)를 포함해 BRICS가 11개국으로 확대됐다. 요하네스버그 정상회담에서 공동 통화 논의가 공식 의제로 올랐다.",
          bodyEn:
            "Dedollarization is not a new story.\n\nDe Gaulle's dollar attack in the 1960s, OPEC pushback after the petrodollar system took hold in the 1970s, post-1997 Asian Financial Crisis critiques of the IMF-dollar system, China's call for enhanced SDR use after the 2008 financial crisis — dedollarization has been declared repeatedly for decades, and repeatedly failed to materialize.\n\nThe most recent wave was triggered by two events:\n\n① **2022 Russia sanctions**: Russia's ~$300 billion in FX reserves were frozen. The reality that 'the US can seize dollar assets you've stockpiled' was proved.\n\n② **2023 BRICS expansion**: Saudi Arabia, UAE, Iran, Egypt, Ethiopia, and Argentina (subsequently withdrew) were admitted, expanding BRICS to 11 nations. The Johannesburg Summit formally put a common currency on the agenda.",
        },
        {
          type: "callout",
          callout: {
            variant: "warning",
            heading: "제재가 가르쳐 준 것",
            headingEn: "What Sanctions Taught the World",
            body: "러시아 외환보유고 동결은 모든 중앙은행에 신호를 보냈다. '달러 자산을 쌓는 것이 언제나 안전하지는 않다.' 그러나 이것이 달러에서 도망치는 것을 의미하지는 않는다. 대안이 없기 때문이다. 실제로 일어난 것은 '금 매입 증가'와 '달러 자산의 관할권 다변화'였다 — 탈달러화가 아닌 탈집중화다.",
            bodyEn:
              "Russia's reserve freeze sent a signal to every central bank: 'holding dollar assets is not always safe.' But this does not mean fleeing the dollar — because there is no alternative. What actually happened was increased gold purchases and geographic diversification of dollar assets — de-concentration, not de-dollarization.",
          },
        },
      ],
    },
    // ── 2 ──────────────────────────────────────────────────────────────────────
    {
      heading: "글로벌 준비통화 지형 — 실제 숫자",
      headingEn: "The Global Reserve Currency Landscape — The Real Numbers",
      blocks: [
        {
          type: "text",
          body: "IMF COFER 데이터가 보여주는 준비통화 지형은 생각보다 변화가 느리다.",
          bodyEn:
            "The IMF COFER data on reserve currency composition shows a landscape changing more slowly than the rhetoric suggests.",
        },
        {
          type: "chart",
          chart: {
            id: "currency-mix",
            title: "글로벌 외환보유고 통화 구성 변화 (1999–2024, %)",
            titleEn: "Global FX Reserve Currency Composition (1999–2024, %)",
            caption:
              "출처: IMF COFER (2024). 달러 비중 하락에도 불구하고 유로·위안화의 상승분이 미미함을 주목. 위안화는 2016년 SDR 편입 이후에도 3% 미만에 머물고 있다.",
            captionEn:
              "Source: IMF COFER (2024). Note that despite the dollar share decline, gains by euro and yuan are modest. The yuan remains below 3% even after its 2016 SDR inclusion.",
            data: [
              { year: "1999", USD: 71, EUR: 18, JPY: 6, GBP: 3, CNY: 0, other: 2 },
              { year: "2005", USD: 67, EUR: 24, JPY: 4, GBP: 4, CNY: 0, other: 1 },
              { year: "2010", USD: 62, EUR: 26, JPY: 4, GBP: 4, CNY: 0, other: 4 },
              { year: "2015", USD: 66, EUR: 19, JPY: 4, GBP: 5, CNY: 1, other: 5 },
              { year: "2020", USD: 59, EUR: 21, JPY: 6, GBP: 5, CNY: 2, other: 7 },
              { year: "2024", USD: 58, EUR: 20, JPY: 6, GBP: 5, CNY: 3, other: 8 },
            ],
          },
        },
        {
          type: "text",
          body: "25년간 달러 비중은 71%에서 58%로 13%포인트 하락했다. 그런데 그 공백을 메운 것이 무엇인지 보라.\n\n유로는 18%에서 20%로 불과 2%포인트 증가했다. 위안화는 0%에서 3%로 — 절대 수준은 여전히 미미하다. 실제로 달러의 빈자리를 채운 것은 특정 대안 통화가 아니라 **'기타'** 항목이다 — 캐나다 달러, 호주 달러, 한국 원화, 노르웨이 크로네 등 소규모 통화들로의 분산이다. 이것은 탈달러화가 아니라 **다변화(diversification)**다.",
          bodyEn:
            "Over 25 years, the dollar share fell 13 percentage points from 71% to 58%. But look at what filled that gap.\n\nThe euro gained just 2 percentage points, from 18% to 20%. The yuan went from 0% to 3% — still a minor absolute level. What actually filled the dollar's space was not a specific alternative currency but **'other'** — diversification into smaller currencies like the Canadian dollar, Australian dollar, Korean won, and Norwegian krone. This is **diversification**, not dedollarization.",
        },
      ],
    },
    // ── 3 ──────────────────────────────────────────────────────────────────────
    {
      heading: "위안화의 결정적 장벽 — 자본시장 폐쇄",
      headingEn: "The Yuan's Decisive Barrier — Closed Capital Markets",
      blocks: [
        {
          type: "text",
          body: "중국은 세계 2위 경제 대국이다. 무역 규모는 미국과 비슷하다. 2016년 SDR(특별인출권)에도 편입됐다. 그런데 왜 위안화는 3%에 머무는가?\n\n**답은 하나다: 자본계정 폐쇄.**\n\n달러가 기축통화인 이유 중 하나는 미국 금융시장이 **완전 개방**되어 있기 때문이다. 누구든 미국 국채를 살 수 있고, 팔 수 있고, 담보로 잡을 수 있다. 레포시장에서 밤새 달러를 빌릴 수 있다. 자본이 자유롭게 들어오고 나갈 수 있다.\n\n중국은 다르다. 위안화 표시 자산을 외국인이 자유롭게 사고팔기 어렵다. 자본 유출입에 제한이 있다. CIPS(중국 국제결제시스템)는 SWIFT의 대안으로 만들어졌지만 — 참여 금융기관 수와 거래 규모가 SWIFT의 수십 분의 1에 불과하다. **중국이 자본계정을 개방하지 않는 한, 위안화는 진정한 기축통화가 될 수 없다.**",
          bodyEn:
            "China is the world's second-largest economy. Its trade volume rivals the US. The yuan was added to the SDR basket in 2016. So why does the yuan sit at 3%?\n\n**One answer: a closed capital account.**\n\nOne reason the dollar is the reserve currency is that US financial markets are **fully open** — anyone can buy, sell, or pledge US Treasuries as collateral, borrow dollars overnight in the repo market, and move capital freely in and out.\n\nChina is different. Foreign investors face significant restrictions on buying and selling renminbi-denominated assets. Capital flows are controlled. CIPS (Cross-Border Interbank Payment System) was built as a SWIFT alternative — but its participating institutions and transaction volumes are a fraction of SWIFT's. **Until China opens its capital account, the yuan cannot become a true reserve currency.**",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "위안화의 딜레마",
            headingEn: "The Yuan's Dilemma",
            body: "자본계정을 열면 기축통화에 한 발 다가선다. 그러나 자본계정을 열면 핫머니(hot money)가 자유롭게 들어오고 나가고, 환율 변동성이 커지며, 국내 금융 안정이 위협받는다. 중국 정부가 자본계정 개방을 꺼리는 이유다. 트리핀 딜레마의 중국판이다.",
            bodyEn:
              "Opening the capital account brings the yuan one step closer to reserve currency status. But open capital accounts let hot money flow in and out freely, amplifying exchange rate volatility and threatening domestic financial stability. This is why Beijing resists opening. It's the Triffin Dilemma, Chinese edition.",
          },
        },
        {
          type: "metrics",
          items: [
            {
              label: "CIPS vs SWIFT",
              labelEn: "CIPS vs SWIFT",
              value: "CIPS 일 평균 약 $700억 처리",
              valueEn: "CIPS processes ~$70B per day",
              sub: "SWIFT 일 평균 $5조+ 대비 1% 수준. 참여 금융기관도 수백 곳 vs SWIFT 11,000곳+",
              subEn: "vs SWIFT's $5T+ per day — roughly 1%. CIPS has hundreds of member institutions vs SWIFT's 11,000+",
              color: "text-red-600 dark:text-red-400",
            },
            {
              label: "위안화 외환 거래 비중",
              labelEn: "Yuan FX Transaction Share",
              value: "전체 FX 거래의 약 7%",
              valueEn: "~7% of global FX transactions",
              sub: "달러 88%의 1/12 수준. 2013년 2.2%에서 성장했으나 기축통화와는 여전히 거리가 멀다",
              subEn: "1/12 of the dollar's 88%. Grew from 2.2% in 2013 but far from reserve currency scale",
              color: "text-amber-600 dark:text-amber-400",
            },
            {
              label: "위안화 SDR 편입 비중",
              labelEn: "Yuan SDR Weight",
              value: "12.28% (2022 기준)",
              valueEn: "12.28% (as of 2022)",
              sub: "달러(43.4%), 유로(29.3%) 다음으로 3위. 그러나 SDR 비중 ≠ 실제 사용량",
              subEn: "3rd after USD (43.4%) and EUR (29.3%). But SDR weight ≠ actual usage",
              color: "text-sky-600 dark:text-sky-400",
            },
          ],
        },
      ],
    },
    // ── 4 ──────────────────────────────────────────────────────────────────────
    {
      heading: "mBridge — CBDC 다자 결제의 야심과 현실",
      headingEn: "mBridge — The Ambition and Reality of CBDC Multilateral Payments",
      blocks: [
        {
          type: "text",
          body: "**mBridge(다자 CBDC 브릿지)**는 BIS 혁신허브와 중국, 홍콩, 태국, UAE, 사우디아라비아 중앙은행이 공동 개발하는 CBDC 기반 국제 결제 플랫폼이다. 2024년 최소기능제품(MVP) 단계에 진입했다.\n\n아이디어는 매력적이다: SWIFT를 거치지 않고, 각국 CBDC를 직접 교환하여 실시간 국가간 결제를 가능하게 한다는 것이다. 이론상 달러 중개 없이도 무역 결제가 가능해진다.\n\n**그러나 현실의 장벽은 세 겹이다:**\n\n① **신뢰의 문제**: 참여국들이 서로의 CBDC를 실제로 신뢰하는가? 원유 수출국이 위안화 CBDC를 기꺼이 받을 것인가? 각국 중앙은행이 상대방 시스템을 신뢰하는가?\n\n② **법제도 차이**: 국가간 거래에서 분쟁이 발생했을 때 어느 나라 법이 적용되는가? 스마트 컨트랙트 기반 거래의 법적 지위는?\n\n③ **규모의 경제**: SWIFT는 11,000개 금융기관, 200개 국가를 연결한다. mBridge가 이 규모에 도달하려면 얼마나 걸리는가?",
          bodyEn:
            "**mBridge (Multi-CBDC Bridge)** is a CBDC-based international payment platform jointly developed by the BIS Innovation Hub and central banks of China, Hong Kong, Thailand, UAE, and Saudi Arabia. It reached the Minimum Viable Product (MVP) stage in 2024.\n\nThe idea is appealing: bypass SWIFT, directly exchange each country's CBDC, enabling real-time cross-border payments without dollar intermediation.\n\n**But reality presents three layers of barriers:**\n\n① **The trust problem**: Do participating countries actually trust each other's CBDCs? Will oil exporters willingly accept yuan CBDCs? Will each central bank trust the other's system?\n\n② **Legal framework differences**: When disputes arise in cross-border transactions, which country's law applies? What is the legal status of smart contract-based transactions?\n\n③ **Economies of scale**: SWIFT connects 11,000 financial institutions across 200 countries. How long before mBridge approaches that scale?",
        },
        {
          type: "table",
          table: {
            id: "dedollar-alternatives",
            title: "주요 탈달러화 시도 — 현황 및 한계",
            titleEn: "Major Dedollarization Attempts — Status and Limitations",
            headers: ["이니셔티브", "주요 주체", "현황", "결정적 한계"],
            headersEn: ["Initiative", "Key Players", "Status", "Critical Limitation"],
            rows: [
              ["mBridge", "BIS, 중국, UAE, 태국, 사우디", "MVP 단계", "신뢰·법제도·규모 장벽"],
              ["CIPS", "중국 인민은행", "운영 중", "참여기관·거래량 SWIFT의 1% 미만"],
              ["BRICS 공동통화", "러시아·중국 주도", "논의 단계", "주권 포기 거부, 환율 합의 불가"],
              ["위안화 원유결제", "사우디·중국 시도", "일부 시행", "사우디의 페트로달러 의존도 유지"],
              ["Petro (베네수엘라)", "베네수엘라", "사실상 폐기", "신뢰 결여, 하이퍼인플레 동반"],
            ],
            rowsEn: [
              ["mBridge", "BIS, China, UAE, Thailand, Saudi", "MVP stage", "Trust, legal, scale barriers"],
              ["CIPS", "People's Bank of China", "Operational", "Institution count & volume <1% of SWIFT"],
              ["BRICS Common Currency", "Russia & China-led", "Discussion stage", "Sovereignty conflicts, FX rate deadlock"],
              ["Yuan Oil Pricing", "Saudi-China attempts", "Partial", "Saudi maintains petrodollar dependence"],
              ["Petro (Venezuela)", "Venezuela", "Effectively defunct", "Zero credibility, accompanied by hyperinflation"],
            ],
            caption: "출처: BIS, IMF, 각국 중앙은행 발표 취합. 탈달러화 이니셔티브들은 공통적으로 신뢰 문제와 규모의 경제 부재로 한계에 봉착한다.",
            captionEn: "Sources: BIS, IMF, central bank statements. Dedollarization initiatives share a common failure pattern: trust deficits and absence of economies of scale.",
          },
        },
      ],
    },
    // ── 5 ──────────────────────────────────────────────────────────────────────
    {
      heading: "금의 귀환 — 탈달러화인가, 보험인가",
      headingEn: "The Return of Gold — Dedollarization or Insurance?",
      blocks: [
        {
          type: "text",
          body: "2022년 러시아 제재 이후 신흥국 중앙은행들의 금 매입이 급증했다. 2022년 전 세계 중앙은행 순금 매입은 약 **1,136톤** — 55년 만의 최고치였다. 2023년에도 1,037톤으로 높은 수준이 유지됐다.\n\n중국과 인도가 특히 공격적이었다. 중국 인민은행은 2022~2023년 2년간 약 600톤의 금을 공식 보유고에 추가했다. 폴란드, 체코, 터키 등 유럽 신흥국들도 금 보유를 크게 늘렸다.\n\n**이것은 탈달러화인가?** 정확히는 아니다. 금은 달러의 '대안'이 아니라 **'헤지'**다. 금을 더 많이 보유한다는 것이 달러 자산을 팔고 금으로 갔다는 의미가 아닌 경우가 많다. 오히려 달러 외환보유고를 유지하면서 추가로 금을 사는 형태다.\n\n달러 패권에 대한 실질적 대안이 없는 상황에서, 금은 '달러가 동결될 경우'를 대비한 보험료다. 그 보험료가 늘어나고 있다는 것은, 달러 패권의 무기화에 대한 경계심이 높아진다는 신호지 — 달러 패권의 종식이 아니다.",
          bodyEn:
            "After the 2022 Russia sanctions, EM central bank gold purchases surged. In 2022, global central bank net gold purchases reached approximately **1,136 tonnes** — a 55-year record. 2023 remained elevated at 1,037 tonnes.\n\nChina and India were particularly aggressive. The People's Bank of China added roughly 600 tonnes to official reserves over 2022–2023. Poland, Czech Republic, Turkey, and other European EMs also substantially increased gold holdings.\n\n**Is this dedollarization?** Not precisely. Gold is not a 'replacement' for the dollar but a **'hedge'**. Holding more gold often doesn't mean selling dollar assets — it typically means adding gold while maintaining dollar reserves.\n\nWith no viable alternative to dollar hegemony, gold is the insurance premium against 'dollar freeze scenarios.' Growing premiums signal rising wariness about the weaponization of dollar hegemony — not the end of dollar hegemony itself.",
        },
      ],
    },
    // ── 6 ──────────────────────────────────────────────────────────────────────
    {
      heading: "결론 — 달러는 쇠퇴하지 않는다, 파편화된다",
      headingEn: "Conclusion — The Dollar Isn't Declining, It's Fragmenting",
      blocks: [
        {
          type: "text",
          body: "데이터가 말해주는 것은 명확하다: **달러 패권은 쇠퇴하는 것이 아니라, 세계가 달러에 의존하는 방식이 조용히 다변화되고 있다.**\n\n외환보유고에서 달러 비중이 줄어드는 것은 사실이다. 그러나 그 속도는 연 0.3~0.5%포인트 수준이다. 현재 속도로는 달러가 50% 아래로 떨어지는 데 수십 년이 걸린다. 그리고 그 때도 '대안' 단일 통화가 달러를 대체하는 형태가 아닐 가능성이 높다.\n\n더 현실적인 시나리오는 **블록화(블록화된 다극 체제)**다:\n- 달러 블록: 미국 동맹국, 달러 무역 인보이싱, SWIFT 체제\n- 위안화 블록: 일대일로 국가들, 위안화 결제 확대, CIPS 체제\n- 유로 블록: EU 역내 무역, 디지털 유로\n- 중립 자산: 금, SDR, CBDC 실험\n\n이 블록들이 완전히 분리되는 것이 아니라, 부분적으로 겹치며 마찰을 만드는 세계 — 그것이 탈달러화의 실체다.\n\n**그리고 그 세계에서도 달러는 여전히 가장 중요한 통화다.** 배관이 너무 깊이 박혀있기 때문이다.",
          bodyEn:
            "The data speaks clearly: **dollar hegemony is not declining — the way the world depends on the dollar is quietly diversifying.**\n\nThe dollar's reserve share is falling, true. But the pace is around 0.3–0.5pp per year. At current speed, it would take decades to fall below 50%. And even then, it likely won't look like a single 'alternative' currency displacing the dollar.\n\nThe more realistic scenario is **block fragmentation (a blockified multipolar system)**:\n- Dollar bloc: US allies, dollar trade invoicing, SWIFT\n- Yuan bloc: Belt and Road countries, yuan payment expansion, CIPS\n- Euro bloc: EU internal trade, digital euro\n- Neutral assets: gold, SDR, CBDC experiments\n\nThese blocks won't fully separate — they'll partially overlap and create friction: **that is what dedollarization actually looks like.**\n\n**And in that world, the dollar is still the most important currency.** Because the plumbing is too deeply embedded to rip out.",
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "탈달러화는 달러의 종말이 아닌, 달러 없이도 살아남으려는 시도다. 그리고 그 시도는 아직 성공하지 못했다.",
            bodyEn:
              "Dedollarization is not the end of the dollar — it's an attempt to survive without it. And that attempt has not yet succeeded.",
          },
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "다음 편 예고 — 달러 제국 2.0",
            headingEn: "Next: Dollar Empire 2.0",
            body: "역설적으로, 달러 패권을 가장 적극적으로 확장하는 힘은 지금 민간 부문에서 나오고 있다. 스테이블코인이다. 테더(USDT)는 이미 미국 국채 $1,000억+의 보유자이고, GENIUS Act는 달러 스테이블코인을 미국 규제 아래에서 글로벌 디지털 달러로 만들려 한다. 4편에서 달러의 재설계를 다룬다.",
            bodyEn:
              "Ironically, the force most aggressively expanding dollar hegemony is now coming from the private sector: stablecoins. Tether (USDT) already holds $100B+ in US Treasuries, and the GENIUS Act aims to make dollar stablecoins the global digital dollar under US regulation. Part 4 covers the redesign of the dollar.",
          },
        },
      ],
    },
  ],
  references: [
    {
      id: 1,
      author: "IMF",
      title: "Currency Composition of Official Foreign Exchange Reserves (COFER)",
      source: "IMF Data",
      year: "2024",
      url: "https://data.imf.org/?sk=E6A5F467-C14B-4AA8-9F6D-5A09EC4E62A4",
    },
    {
      id: 2,
      author: "Bank for International Settlements",
      title: "Project mBridge: Connecting Economies Through CBDC",
      source: "BIS Innovation Hub",
      year: "2024",
      url: "https://www.bis.org/about/bisih/topics/cbdc/mcbdc_bridge.htm",
    },
    {
      id: 3,
      author: "World Gold Council",
      title: "Central Bank Gold Reserves Survey",
      source: "World Gold Council Annual Report",
      year: "2024",
      url: "https://www.gold.org/goldhub/research/central-bank-gold-reserves-survey-2024",
    },
    {
      id: 4,
      author: "Eichengreen, B.",
      title: "Sanctions, SWIFT, and China's Cross-Border Interbank Payments System",
      source: "CIGI Papers No. 248",
      year: "2022",
    },
    {
      id: 5,
      author: "Prasad, E.",
      title: "The Future of Money: How the Digital Revolution Is Transforming Currencies and Finance",
      source: "Harvard University Press",
      year: "2021",
    },
    {
      id: 6,
      author: "Gourinchas, P.O.",
      title: "The Dollar Hegemon? Evidence and Implications for Policy Makers",
      source: "6th IMF Annual Research Conference",
      year: "2023",
      url: "https://www.imf.org/en/Publications/WP",
    },
    {
      id: 7,
      author: "People's Bank of China",
      title: "RMB Internationalization Report",
      source: "PBoC Annual Report",
      year: "2024",
      url: "http://www.pbc.gov.cn",
    },
    {
      id: 8,
      author: "Setser, B.",
      title: "The Weaponization of Finance and the Future of the Dollar",
      source: "Council on Foreign Relations Blog",
      year: "2022",
      url: "https://www.cfr.org/blog",
    },
    {
      id: 9,
      author: "SWIFT",
      title: "RMB Tracker: Monthly Reporting on Renminbi Usage",
      source: "SWIFT gpi",
      year: "2024",
      url: "https://www.swift.com/our-solutions/compliance-and-shared-services/business-intelligence/renminbi/rmb-tracker",
    },
    {
      id: 10,
      author: "Farrell, H. & Newman, A.",
      title: "Underground Empire: How America Weaponized the World Economy",
      source: "Henry Holt & Company",
      year: "2023",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #5 — 달러 패권 시리즈 4편: 스테이블코인과 달러 제국 2.0
// ══════════════════════════════════════════════════════════════════════════════

const dollarHegemony4: NoteData = {
  slug: "dollar-hegemony-4",
  category: "macro",
  status: "published",
  series: "dollar-hegemony",
  seriesOrder: 4,
  title: "달러 패권 ④ — 스테이블코인과 달러 제국 2.0",
  titleEn: "Dollar Hegemony ④ — Stablecoins and Dollar Empire 2.0",
  description:
    "달러 패권의 가장 강력한 확장은 지금 민간 암호화폐 시장에서 일어나고 있다. 테더, GENIUS Act, 디지털 위안 — 달러는 쇠퇴하는 것이 아니라 재설계되고 있다.",
  descriptionEn:
    "The most powerful expansion of dollar hegemony is now happening in the private crypto market. Tether, the GENIUS Act, digital yuan — the dollar is not declining; it is being redesigned.",
  date: "2026-05-28",
  readingMinutes: 16,
  keyPoints: [
    "스테이블코인 시장의 97%+는 달러 페그 — USDT(테더)와 USDC가 전체의 85% 이상을 차지",
    "테더(USDT)는 2025년 기준 미국 국채 약 $1,200억 보유 — 노르웨이, 인도보다 많다",
    "GENIUS Act(2025): 달러 스테이블코인에 미국 규제 프레임워크를 적용 — 달러의 '민간 위임 확장'",
    "디지털 위안(e-CNY)은 국내 결제 앱 수준에 머물고 있다 — 국제화는 자본계정 폐쇄로 막혀 있다",
    "결론: 달러는 재설계되고 있다 — 국가 발행에서 민간 스테이블코인으로, 브레튼우즈에서 코드로",
  ],
  keyPointsEn: [
    "97%+ of the stablecoin market is dollar-pegged — USDT (Tether) and USDC account for 85%+",
    "Tether holds ~$120B in US Treasuries as of 2025 — more than Norway or India",
    "The GENIUS Act (2025): applies a US regulatory framework to dollar stablecoins — dollar hegemony's 'private-sector delegation'",
    "The digital yuan (e-CNY) remains a domestic payment app — internationalization is blocked by the closed capital account",
    "Conclusion: the dollar is being redesigned — from state issuance to private stablecoins, from Bretton Woods to code",
  ],
  sections: [
    // ── 1 ──────────────────────────────────────────────────────────────────────
    {
      heading: "스테이블코인 — 달러의 가장 빠른 성장 채널",
      headingEn: "Stablecoins — The Dollar's Fastest-Growing Channel",
      blocks: [
        {
          type: "text",
          body: "2020년, 전체 스테이블코인 시가총액은 약 $250억이었다. 2024년 말, $1,800억을 넘어섰다. 4년 만에 7배 성장이다.\n\n이 시장의 **97% 이상이 달러 페그**다. 스테이블코인이 성장한다는 것은 달러로 결제하고 달러로 저축하고 달러로 투자하는 사람이 전 세계적으로 폭발적으로 늘어난다는 의미다. 그것도 은행 계좌 없이, 국경을 가로질러, 24시간 실시간으로.\n\n달러 패권의 전통적 채널은 무역 인보이싱, 국채, SWIFT 결제망이었다. 스테이블코인은 네 번째 채널로 부상하고 있다. 그리고 이것은 미국 정부가 만든 것이 아니다 — 민간이 만들었고, 이제 미국 정부가 이것을 규제 안으로 끌어들이고 있다.",
          bodyEn:
            "In 2020, the total stablecoin market cap was approximately $25 billion. By end-2024, it exceeded $180 billion — a 7× expansion in four years.\n\n**97%+ of this market is dollar-pegged.** The growth of stablecoins means an explosive rise in the number of people globally paying, saving, and investing in dollars — without bank accounts, across borders, 24 hours a day in real time.\n\nThe traditional channels of dollar hegemony were trade invoicing, Treasuries, and SWIFT. Stablecoins are emerging as a fourth channel. And critically: this was not created by the US government — the private sector built it, and now the US government is pulling it inside the regulatory framework.",
        },
        {
          type: "chart",
          chart: {
            id: "stablecoin-growth",
            title: "스테이블코인 시가총액 성장 (2018–2024, $B)",
            titleEn: "Stablecoin Market Cap Growth (2018–2024, USD Billions)",
            caption:
              "출처: CoinGecko, DefiLlama (2024). USDT(테더)가 압도적 1위를 유지. 2022년 LUNA 붕괴로 알고리즘 스테이블코인 시장 전체가 수축했으나, 달러 페그 스테이블코인(USDT, USDC)은 오히려 신뢰를 강화했다.",
            captionEn:
              "Sources: CoinGecko, DefiLlama (2024). USDT maintains dominant #1 position. The 2022 LUNA collapse wiped out algorithmic stablecoins, but dollar-pegged stablecoins (USDT, USDC) actually strengthened their credibility.",
            data: [
              { year: "2018", USDT: 2, USDC: 0, other: 0 },
              { year: "2019", USDT: 4, USDC: 1, other: 1 },
              { year: "2020", USDT: 20, USDC: 4, other: 1 },
              { year: "2021", USDT: 78, USDC: 40, other: 12 },
              { year: "2022", USDT: 66, USDC: 44, other: 6 },
              { year: "2023", USDT: 92, USDC: 25, other: 8 },
              { year: "2024", USDT: 120, USDC: 40, other: 20 },
            ],
          },
        },
      ],
    },
    // ── 2 ──────────────────────────────────────────────────────────────────────
    {
      heading: "테더 — 세계 최대의 비공식 달러 수출기관",
      headingEn: "Tether — The World's Largest Unofficial Dollar Exporter",
      blocks: [
        {
          type: "text",
          body: "테더(Tether Limited)는 영국령 버진아일랜드에 등록된 민간 기업이다. 그들이 발행하는 USDT는 **달러와 1:1 교환** 보장을 내세운다. 이 약속을 지키기 위해 테더는 발행한 USDT만큼의 준비 자산을 보유해야 한다.\n\n그 준비 자산의 구성이 핵심이다. 2025년 기준, 테더의 준비 자산 중 **약 80% 이상이 미국 국채(US Treasury Bills)**다. 그 규모는 약 **$1,200억**에 달한다.\n\n이것이 무엇을 의미하는가? 테더는 **노르웨이, 인도, 독일보다 많은 미국 국채를 보유한 존재**가 됐다. 세계 15위권의 미국 국채 보유 기관이다.\n\n**테더의 존재는 달러 패권의 아이러니를 극단으로 끌어간다.** 테더를 가장 많이 사용하는 사람들은 달러 계좌를 열기 어려운 신흥국 주민들이다 — 베네수엘라, 아르헨티나, 나이지리아, 러시아. 그들은 달러 자산에 직접 접근할 수 없어서 USDT를 쓴다. 그 결과 테더를 통해 미국 국채 수요가 구조적으로 늘어난다. **달러 체제에서 벗어나려는 사람들이 달러 체제를 강화하고 있다.**",
          bodyEn:
            "Tether Limited is a private company registered in the British Virgin Islands. The USDT it issues promises a **1:1 dollar exchange** guarantee. To keep this promise, Tether must hold reserve assets matching USDT in circulation.\n\nThe composition of those reserves is the key. As of 2025, **over 80% of Tether's reserves are US Treasury Bills** — approximately **$120 billion** in total.\n\nWhat does this mean? Tether has become an entity that **holds more US Treasuries than Norway, India, or Germany** — among the world's top 15 US Treasury holders.\n\n**Tether's existence takes the irony of dollar hegemony to the extreme.** Tether's heaviest users are people in emerging markets who struggle to access dollar bank accounts — Venezuelans, Argentinians, Nigerians, Russians. Unable to access dollar assets directly, they use USDT. The result: through Tether, structural demand for US Treasuries grows. **People trying to escape the dollar system are reinforcing it.**",
        },
        {
          type: "metrics",
          items: [
            {
              label: "USDT 발행량",
              labelEn: "USDT in Circulation",
              value: "약 $1,200억 (2025년 기준)",
              valueEn: "~$120B (as of 2025)",
              sub: "전체 스테이블코인 시장의 약 65% 점유. 2020년의 $200억에서 급성장",
              subEn: "~65% of the total stablecoin market. Surged from $20B in 2020",
              color: "text-emerald-600 dark:text-emerald-400",
            },
            {
              label: "테더의 미국 국채 보유",
              labelEn: "Tether's US Treasury Holdings",
              value: "약 $1,000억+ (준비 자산의 80%+)",
              valueEn: "~$100B+ (80%+ of reserves)",
              sub: "노르웨이($870억), 인도($880억) 국채 보유량 초과 — 세계 15위권",
              subEn: "Exceeds Norway ($87B) and India ($88B) — top-15 global Treasury holder",
              color: "text-sky-600 dark:text-sky-400",
            },
            {
              label: "주요 사용 지역",
              labelEn: "Primary Usage Regions",
              value: "신흥국 달러화 지역",
              valueEn: "Dollarized emerging markets",
              sub: "베네수엘라·아르헨티나·나이지리아·러시아·동남아 — 은행 접근 어려운 지역의 달러 대체재",
              subEn: "Venezuela, Argentina, Nigeria, Russia, SE Asia — dollar substitute where banking is inaccessible",
              color: "text-amber-600 dark:text-amber-400",
            },
          ],
        },
      ],
    },
    // ── 3 ──────────────────────────────────────────────────────────────────────
    {
      heading: "GENIUS Act — 달러의 민간 위임",
      headingEn: "The GENIUS Act — The Dollar's Private-Sector Delegation",
      blocks: [
        {
          type: "text",
          body: "2025년 3월, 미국 상원에서 **GENIUS Act(Guiding and Establishing National Innovation for US Stablecoins Act)**가 통과됐다. 역사상 처음으로 달러 스테이블코인에 연방 규제 프레임워크가 적용되는 법이다.\n\n핵심 내용:\n\n① **발행 기관 요건**: 달러 스테이블코인을 발행하려면 미국 연방 또는 주정부 인가 기관이어야 한다. 은행, 지급결제 전문 회사, 또는 FRB(연준) 인가 기관.\n\n② **준비 자산 요건**: 발행액의 100%를 달러 또는 단기 미국 국채로 보유. 다른 자산은 불가.\n\n③ **달러 페그 강제**: 달러 스테이블코인은 반드시 달러와 1:1 유지.\n\n**이것이 달러 패권에 갖는 의미**: GENIUS Act는 스테이블코인을 '규제 밖의 위험 자산'에서 '미국 규제 하의 디지털 달러 인프라'로 전환한다. 동시에, 단기 미국 국채 수요를 구조적으로 확보한다 — 달러 스테이블코인이 1달러 발행될 때마다 1달러어치 미국 국채가 매입되는 구조다.\n\n트럼프 행정부는 이것을 '미국 금융 혁신'으로 홍보하지만 — 본질은 달러 패권의 민간 위임이자, 국채 수요의 구조적 확보다.",
          bodyEn:
            "In March 2025, the US Senate passed the **GENIUS Act (Guiding and Establishing National Innovation for US Stablecoins Act)** — the first federal regulatory framework ever applied to dollar stablecoins.\n\nKey provisions:\n\n① **Issuer requirements**: Dollar stablecoin issuers must be federally or state-chartered institutions — banks, payment companies, or Federal Reserve-licensed entities.\n\n② **Reserve requirements**: 100% of issued stablecoins backed by dollars or short-term US Treasuries. No other assets permitted.\n\n③ **Dollar peg mandatory**: Dollar stablecoins must maintain a strict 1:1 dollar peg.\n\n**What this means for dollar hegemony**: The GENIUS Act converts stablecoins from 'unregulated risky assets' to 'digital dollar infrastructure under US regulation.' Simultaneously, it structurally secures short-term US Treasury demand — every dollar stablecoin issued triggers a dollar of Treasury purchases.\n\nThe Trump administration brands this as 'American financial innovation' — but the substance is private-sector delegation of dollar hegemony and structural anchoring of Treasury demand.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "GENIUS Act의 지정학적 함의",
            headingEn: "GENIUS Act's Geopolitical Implications",
            body: "GENIUS Act를 통과한 달러 스테이블코인은 미국 규제 아래서 글로벌 디지털 달러로 기능할 수 있다. 이는 인터넷 연결만 있으면 어디서든 달러에 접근할 수 있다는 의미다. 탈달러화를 시도하는 국가들이 규제로 막으려 해도, 그 국가의 시민들이 암호화폐 지갑으로 USDT를 보유하는 것을 완전히 막기는 어렵다.",
            bodyEn:
              "Dollar stablecoins passing GENIUS Act can function as global digital dollars under US regulation — meaning anyone with internet access can hold dollars. Even countries attempting dedollarization struggle to fully prevent their citizens from holding USDT via crypto wallets.",
          },
        },
      ],
    },
    // ── 4 ──────────────────────────────────────────────────────────────────────
    {
      heading: "디지털 위안 — 과대 평가된 경쟁자",
      headingEn: "The Digital Yuan — An Overhyped Competitor",
      blocks: [
        {
          type: "text",
          body: "중국의 **e-CNY(디지털 위안)**는 세계 최대 중앙은행 디지털화폐(CBDC) 프로젝트다. 2020년부터 파일럿 테스트를 시작해, 2024년까지 누적 거래액 약 **7조 위안(약 $1조)**을 기록했다.\n\n그러나 맥락이 중요하다. 이 거래 대부분은 중국 **국내** 결제다. 베이징 지하철, 편의점, 디디추싱(디디 앱) — 알리페이, 위챗페이와 경쟁하는 국내 결제 앱 수준이다.\n\n**국제 결제에서의 e-CNY 활용은 아직 극히 제한적이다.** 이유는 세 가지:\n\n① 자본계정 폐쇄 — 위안화 CBDC도 자본계정 통제에서 자유롭지 않다\n② 신뢰 부족 — 외국 기업과 개인이 e-CNY를 자발적으로 보유할 유인이 약하다\n③ 중국 정부의 완전한 추적 가능성에 대한 거부감 — e-CNY는 익명성이 없다\n\n**결론: e-CNY는 달러 스테이블코인의 진지한 경쟁자가 아니다.** 중국 국내에서 디지털 결제 인프라를 현대화하는 프로젝트이며, 달러 패권에 대한 도전은 부수적 목표다.",
          bodyEn:
            "China's **e-CNY (digital yuan)** is the world's largest central bank digital currency (CBDC) project. Pilot testing began in 2020, and cumulative transactions reached approximately **¥7 trillion (~$1 trillion)** by 2024.\n\nBut context matters. Most transactions are **domestic** Chinese payments — Beijing subway, convenience stores, DiDi rides. This is a domestic payment app competing with Alipay and WeChat Pay.\n\n**International use of e-CNY remains extremely limited**, for three reasons:\n\n① Closed capital account — yuan CBDC is not free from capital controls\n② Trust deficit — foreign businesses and individuals have weak incentives to hold e-CNY voluntarily\n③ Resistance to Chinese government's complete transaction traceability — e-CNY has no anonymity\n\n**Conclusion: e-CNY is not a serious competitor to dollar stablecoins.** It is a project to modernize domestic digital payment infrastructure in China, with challenging dollar hegemony as a secondary objective.",
        },
        {
          type: "table",
          table: {
            id: "stablecoin-vs-cbdc",
            title: "달러 스테이블코인 vs 디지털 위안 비교",
            titleEn: "Dollar Stablecoins vs Digital Yuan Comparison",
            headers: ["항목", "달러 스테이블코인(USDT/USDC)", "디지털 위안(e-CNY)"],
            headersEn: ["Category", "Dollar Stablecoins (USDT/USDC)", "Digital Yuan (e-CNY)"],
            rows: [
              ["발행 주체", "민간 기업 (테더, Circle)", "중국 인민은행"],
              ["사용 가능 지역", "인터넷 연결 어디서나", "주로 중국 국내"],
              ["익명성", "상대적 익명 가능", "없음 — 완전 추적"],
              ["규제 체계", "GENIUS Act (미국)", "중국 인민은행 규정"],
              ["국제 채택도", "빠르게 증가 중", "극히 제한적"],
              ["준비 자산", "미국 국채/달러", "중국 인민은행 직접 발행"],
            ],
            rowsEn: [
              ["Issuer", "Private firms (Tether, Circle)", "People's Bank of China"],
              ["Geographic reach", "Anywhere with internet", "Mainly within China"],
              ["Anonymity", "Relative anonymity possible", "None — fully traceable"],
              ["Regulatory framework", "GENIUS Act (US)", "PBoC regulations"],
              ["International adoption", "Rapidly growing", "Extremely limited"],
              ["Reserve assets", "US Treasuries / dollars", "Direct PBoC issuance"],
            ],
            caption: "달러 스테이블코인의 가장 큰 경쟁 우위는 '규제는 있지만 국가 추적은 없는' 구조다 — e-CNY와 정반대다.",
            captionEn: "The dollar stablecoin's biggest competitive advantage: 'regulated but not state-surveilled' — the opposite of e-CNY.",
          },
        },
      ],
    },
    // ── 5 ──────────────────════════════════════════════════════════════════════
    {
      heading: "시리즈 결론 — 달러는 재설계 중이다",
      headingEn: "Series Conclusion — The Dollar Is Being Redesigned",
      blocks: [
        {
          type: "text",
          body: "4편에 걸친 달러 패권 시리즈를 마무리하며, 하나의 명제로 요약한다:\n\n**달러 패권은 쇠퇴하는 것이 아니라 재설계되고 있다.**\n\n1편에서 봤듯이, 달러 패권은 세 번의 결정적 설계 — 브레튼우즈, 닉슨 쇼크, 페트로달러 — 로 만들어진 것이다. 자연발생적 시장 결과물이 아니라 의도적 구조물이다.\n\n2편에서 봤듯이, 달러 패권은 레포시장이라는 배관으로 작동한다. 그 배관의 수도꼭지는 연준 대차대조표다. 캐빈 워시 체제에서 그 수도꼭지가 더 조여질 것이다.\n\n3편에서 봤듯이, 탈달러화 선언은 넘쳐나지만 인프라의 현실은 냉혹하다. 위안화는 자본계정 폐쇄라는 결정적 장벽에 막혀있고, BRICS 공동통화는 주권 충돌로 무산되고 있다.\n\n그리고 4편이 보여주는 것: 달러는 가장 혁신적인 방식으로 재설계되고 있다. 스테이블코인이라는 민간 채널을 통해 달러는 은행 계좌 없이도, 국경을 초월하여, 24시간 접근 가능한 디지털 달러로 진화하고 있다. GENIUS Act는 이것을 미국 규제 아래로 끌어들이며 '달러 제국 2.0'을 공식화한다.\n\n**투자자에게 함의하는 것은 분명하다**: 달러가 약해진다는 내러티브로 포지션을 잡는 것은 조심해야 한다. 배관은 더 조여지고 있고, 새로운 채널은 더 빠르게 달러를 전 세계로 뿌리고 있다. 탈달러화에 베팅하는 것은 인프라의 현실이 아닌 선언에 베팅하는 것이다.",
          bodyEn:
            "Concluding a four-part series on dollar hegemony, a single proposition summarizes everything:\n\n**Dollar hegemony is not declining — it is being redesigned.**\n\nAs Part 1 showed, dollar hegemony was created through three decisive designs: Bretton Woods, the Nixon Shock, the petrodollar. Not a natural market outcome — an intentional structure.\n\nAs Part 2 showed, dollar hegemony operates through the plumbing of the repo market. The faucet controlling that plumbing is the Fed balance sheet. Under Kevin Warsh, that faucet will tighten further.\n\nAs Part 3 showed, dedollarization declarations overflow but infrastructure reality is sobering. The yuan is blocked by the decisive barrier of a closed capital account; the BRICS common currency is collapsing under sovereignty conflicts.\n\nAnd what Part 4 reveals: the dollar is being redesigned in its most innovative form yet. Through the private-sector channel of stablecoins, the dollar is evolving into a digital dollar — accessible without bank accounts, across borders, 24 hours a day. The GENIUS Act formalizes 'Dollar Empire 2.0' by pulling this under US regulation.\n\n**The investment implication is clear**: positioning on a 'weakening dollar' narrative requires caution. The plumbing is tightening, and new channels are distributing dollars across the globe faster than ever. Betting on dedollarization is betting on declarations over infrastructure reality.",
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "달러는 금에서 석유로, 석유에서 국채로, 국채에서 코드로 — 매번 새로운 뒷받침을 찾아냈다. 그리고 매번, 대안론자들은 틀렸다.",
            bodyEn:
              "The dollar has moved from gold to oil, from oil to Treasuries, from Treasuries to code — finding new backing each time. And each time, the dedollarization advocates were wrong.",
          },
        },
      ],
    },
  ],
  references: [
    {
      id: 1,
      author: "Tether Limited",
      title: "Tether Transparency Report — Reserve Composition",
      source: "Tether.to",
      year: "2025",
      url: "https://tether.to/en/transparency",
    },
    {
      id: 2,
      author: "US Senate Banking Committee",
      title: "GENIUS Act: Guiding and Establishing National Innovation for US Stablecoins",
      source: "US Senate",
      year: "2025",
      url: "https://www.banking.senate.gov",
    },
    {
      id: 3,
      author: "CoinGecko",
      title: "Stablecoin Market Cap Report 2024",
      source: "CoinGecko Annual Report",
      year: "2024",
      url: "https://www.coingecko.com/research",
    },
    {
      id: 4,
      author: "People's Bank of China",
      title: "Progress in Research and Development of E-CNY in China",
      source: "PBoC White Paper",
      year: "2024",
      url: "http://www.pbc.gov.cn/en/3688110/3688172/4157443/4293696/2021071614584691871.pdf",
    },
    {
      id: 5,
      author: "Gorton, G. & Zhang, J.",
      title: "Taming Wildcat Stablecoins",
      source: "University of Chicago Law Review",
      year: "2023",
      url: "https://doi.org/10.2139/ssrn.3888752",
    },
    {
      id: 6,
      author: "Bank for International Settlements",
      title: "The Financial Stability Implications of Digital Assets",
      source: "BIS Quarterly Review",
      year: "2023",
      url: "https://www.bis.org/publ/qtrpdf/r_qt2309b.htm",
    },
    {
      id: 7,
      author: "Prasad, E.",
      title: "Gaining Currency: The Rise of the Renminbi",
      source: "Oxford University Press",
      year: "2017",
    },
    {
      id: 8,
      author: "Catalini, C. & de Gortari, A.",
      title: "On the Economic Design of Stablecoins",
      source: "NBER Working Paper No. 30578",
      year: "2022",
      url: "https://www.nber.org/papers/w30578",
    },
    {
      id: 9,
      author: "Chainalysis",
      title: "The 2024 Crypto Crime Report: Stablecoin Usage in High-Risk Jurisdictions",
      source: "Chainalysis Annual Report",
      year: "2024",
      url: "https://www.chainalysis.com/reports",
    },
    {
      id: 10,
      author: "Federal Reserve",
      title: "Exploring a US Central Bank Digital Currency (CBDC)",
      source: "Federal Reserve Discussion Paper",
      year: "2022",
      url: "https://www.federalreserve.gov/publications/files/money-and-payments-20220120.pdf",
    },
  ],
};

// ── Export ─────────────────────────────────────────────────────────────────────

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #6 — AI Capital Cycle ① — 거울 속의 자본
// ══════════════════════════════════════════════════════════════════════════════

const aiCycle1: NoteData = {
  slug: "ai-capital-cycle-1",
  category: "macro",
  status: "published",
  series: "ai-capital-cycle",
  seriesOrder: 1,
  title: "AI 자본 사이클 ① — 거울 속의 자본",
  titleEn: "AI Capital Cycle ① — Money in the Mirror",
  description:
    "NVIDIA가 OpenAI에 100억 달러를 투자한다. OpenAI는 Microsoft에 2,500억 달러 컴퓨트를 약속한다. Microsoft는 NVIDIA의 단일 최대 고객이다. 돈이 한 바퀴 돌아왔다. 1999년 Lucent가 했던 것과 같은 회로다 — 단 한 가지를 제외하면.",
  descriptionEn:
    "NVIDIA invests $100B in OpenAI. OpenAI commits $250B to Microsoft Azure. Microsoft is NVIDIA's single largest customer. The money came around in a circle — the same circuit Lucent ran in 1999. Except for one thing.",
  date: "2026-05-29",
  readingMinutes: 20,
  keyPoints: [
    "AI 자본 사이클의 정의적 특징은 capex 규모($600B)가 아니라 그 자금이 *회로* 로 흐른다는 사실이다 — NVIDIA → OpenAI → Microsoft → NVIDIA",
    "1999년 Lucent는 vendor financing $7-8B 약정으로 새 진입자(WinStar·WorldCom 등)에게 자금을 대고 그들이 Lucent 장비를 사게 했다. 결과: $3.5B 충당금, 주가 $82 → $0.58 (-95%)",
    "Cisco는 비즈니스가 망하지 않았다. FY00→FY01 매출이 오히려 +18% 성장했다. 그러나 주가는 -89%. multiple이 150x P/E → single digits로 압축됐다. 25년 만에 처음 신고가를 회복했다 (2025.12)",
    "차이: 1999는 통신사 채권 발행($1.6T)으로 자금을 조달했다. 2025는 빅테크 영업현금흐름(70%+)으로 self-fund한다. 시스템 디폴트 리스크는 다르다",
    "같음: 매수자와 매도자가 같은 사람이라는 사실. NVIDIA의 \"우리는 vendor financing 하지 않는다\"는 회계상 진실. Chanos: \"적자 회사에 돈을 넣어 그 자금으로 칩을 사게 하는 구조는 경제학적으로 같다\"",
    "회로의 가장 약한 마디는 — 다음 라운드 valuation을 받지 못하는 첫 모델 회사다. 그 신호가 첫 균열",
  ],
  keyPointsEn: [
    "The defining feature of the AI capital cycle is not capex size ($600B) but its *circular* structure — NVIDIA → OpenAI → Microsoft → NVIDIA",
    "In 1999, Lucent's $7-8B vendor financing book funded new entrants (WinStar, WorldCom) who then bought Lucent equipment. Result: $3.5B in write-downs; stock from $82 to $0.58 (-95%)",
    "Cisco's business never failed — FY00 to FY01 revenue actually grew +18%. The stock fell -89%. Multiple compressed from 150x P/E to single digits. It took 25 years to reclaim its 2000 high (Dec 2025)",
    "Different: 1999 was funded by telecom debt issuance ($1.6T). 2025 is self-funded by Big Tech operating cash flow (70%+). The systemic default risk is different",
    "Same: buyer and seller are the same person. NVIDIA's \"we don't do vendor financing\" is accounting-true. Chanos's rebuttal: \"channeling money into unprofitable companies that then use it to buy chips is economically equivalent\"",
    "The weakest node in the circuit is the first model company that fails to raise its next round. That hesitation is the first crack",
  ],
  sections: [
    // ── 1. 도입 ────────────────────────────────────────────────────────────────
    {
      heading: "2025년 9월 22일의 장면",
      headingEn: "September 22, 2025 — A Scene",
      blocks: [
        {
          type: "text",
          body: "2025년 9월 22일. NVIDIA가 발표한다. OpenAI에 **최대 1,000억 달러를 투자** 하기로 했다. 정확한 구조: 10기가와트 규모의 데이터센터 구축 단계마다 자본이 들어간다. 약 400-500만 개의 GPU. 한 GW가 약 350억 달러어치 NVIDIA 칩이라면, 10GW = **3,500억 달러의 NVIDIA 매출** 이다 — NVIDIA 자신의 출자금 일부로 자금이 조달되는.\n\n같은 가을. Microsoft와 OpenAI는 6년에 걸친 새 계약을 발표한다. OpenAI는 Azure에서 **2,500억 달러 어치 컴퓨트** 를 사기로 약속한다 (2025-2030). 별도로 Oracle과는 5년에 3,000억 달러 계약을 맺는다.\n\nMicrosoft는 NVIDIA의 단일 최대 고객이다. NVIDIA FY26 10-K가 공개한 사실: 매출의 22%가 한 고객, 14%가 또 한 고객 — 합쳐 36%가 두 명에게서 온다. 시장은 그 둘이 Microsoft와 Meta라고 본다.\n\n돈이 한 바퀴 돌아왔다. NVIDIA가 OpenAI에 자본을 넣고, OpenAI가 Microsoft/Oracle에 컴퓨트를 약속하고, Microsoft/Oracle이 NVIDIA에서 GPU를 사고, NVIDIA가 매출을 인식한다. 회로가 완성됐다.\n\n*매수자와 매도자가 같은 사람일 때, 시장 가격은 무엇을 의미하는가.*",
          bodyEn:
            "September 22, 2025. NVIDIA announces it will invest **up to $100 billion in OpenAI**. The structure: capital is gated to each gigawatt of data center deployment. About 4-5 million GPUs. If one GW equals roughly $35 billion in NVIDIA chips, then 10 GW = **$350 billion in NVIDIA revenue** — partly funded by NVIDIA's own equity check.\n\nThe same autumn. Microsoft and OpenAI close a restructured deal. OpenAI commits to buy **$250 billion of Azure compute** over six years (2025-2030). Separately, OpenAI signs a $300 billion, five-year contract with Oracle.\n\nMicrosoft is NVIDIA's single largest customer. NVIDIA's FY26 10-K reveals: one customer = 22% of revenue, another = 14%. Together, two customers account for 36%. The market reads these as Microsoft and Meta.\n\nThe money came around in a circle. NVIDIA puts capital into OpenAI; OpenAI commits compute to Microsoft and Oracle; Microsoft and Oracle buy GPUs from NVIDIA; NVIDIA recognizes revenue. The circuit is complete.\n\n*When the buyer and the seller are the same person, what does the market price actually mean?*",
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "그들은 돈이 없다(They have no money).",
            bodyEn: "They have no money.",
            heading: "— Jensen Huang, NVIDIA가 OpenAI에 100억 달러를 출자하기로 한 직후 (2025년 9월)",
            headingEn: "— Jensen Huang, shortly after NVIDIA committed $100B to OpenAI (Sept 2025)",
          },
        },
      ],
    },
    // ── 2. Lucent / 1999 거울 ─────────────────────────────────────────────────
    {
      heading: "1999년의 거울 — Lucent가 했던 것",
      headingEn: "The 1999 Mirror — What Lucent Did",
      blocks: [
        {
          type: "text",
          body: "1996년 4월, AT&T가 통신장비 사업부를 분사해 만든 회사가 Lucent Technologies였다. 그 직후의 몇 년은 통신장비 산업의 황금기였다. 광섬유가 깔리고, 인터넷 백본이 깔리고, 새 통신 사업자(CLEC, ISP, 장거리 사업자)가 폭발적으로 등장했다.\n\n이 새 사업자들 — WinStar, NorthPoint, ICG, Global Crossing — 은 자본이 없었다. 그들이 장비를 사려면 누군가가 돈을 빌려줘야 했다. Lucent가 그 누군가였다.\n\n구조는 단순했다. Lucent가 약정을 통해 새 통신사에 신용을 제공하면, 새 통신사가 그 신용으로 Lucent 장비를 매입한다. Lucent는 매출을 인식한다. 새 통신사가 망하면? 충당금을 잡는다. 하지만 사이클이 도는 동안은, 모두가 이긴다.\n\nLucent는 2000회계연도 SEC 공시에서 **약 70억 달러의 고객 financing 약정** 을 공개했다. 그중 16억 달러가 실제로 인출돼 있었다. Lucent는 명시적으로 \"이건 정상적인 산업 관행\"이라고 말했고, 한 분기 콜에서 임원은 회사가 \"은행에 더 가까워질 것\"이라고 밝혔다 — vendor financing을 더 공격적으로 늘리겠다는 의미였다.",
          bodyEn:
            "In April 1996, AT&T spun off its telecom equipment business and named it Lucent Technologies. The years that followed were a golden age for telecom equipment. Fiber was being laid. Internet backbones were being built. New telecom operators (CLECs, ISPs, long-haul carriers) emerged at extraordinary speed.\n\nThese new entrants — WinStar, NorthPoint, ICG, Global Crossing — had no capital. To buy equipment, someone had to lend them money. Lucent was that someone.\n\nThe structure was simple. Lucent extended credit to the new carriers; the new carriers used that credit to buy Lucent equipment; Lucent booked the revenue. When a carrier went bankrupt, Lucent took a provision. But while the cycle was running, everyone won.\n\nIn its fiscal year 2000 SEC filings, Lucent disclosed **approximately $7 billion in customer financing commitments**. $1.6 billion was actually drawn. Lucent publicly defended this as \"normal industry practice,\" and an executive told one earnings call that the company would become \"more like a bank\" — meaning it would expand vendor financing aggressively.",
        },
        {
          type: "chart",
          chart: {
            id: "lucent-financing",
            title: "Lucent 고객 financing 약정 vs 충당금 (FY1997-2002, $B)",
            titleEn: "Lucent Customer Financing Commitments vs. Write-down Provisions (FY1997-2002, $B)",
            caption:
              "출처: Lucent Technologies 10-K filings (FY2000, FY2001, FY2002), SEC EDGAR. 약정 잔액 $7-8B 가 정점이었고, FY01-02에 $3.5B 충당금으로 결산됐다.",
            captionEn:
              "Source: Lucent Technologies 10-K filings (FY2000, FY2001, FY2002), SEC EDGAR. Peak commitments reached $7-8B; FY01-02 write-downs totaled $3.5B.",
            data: [
              { fy: "FY97", commitments: 1.5, provisions: 0.1 },
              { fy: "FY98", commitments: 3.0, provisions: 0.2 },
              { fy: "FY99", commitments: 5.0, provisions: 0.3 },
              { fy: "FY00", commitments: 7.0, provisions: 0.5 },
              { fy: "FY01", commitments: 8.1, provisions: 2.2 },
              { fy: "FY02", commitments: 6.5, provisions: 1.3 },
            ],
          },
        },
        {
          type: "text",
          body: "회로는 1999년까지 완벽하게 돌았다. Lucent 주가는 1999년 12월 20일 **$82.31** 에 닿았다. 시가총액 2,580억 달러. 당시 세계에서 시가총액 상위 10대 기업이었다.\n\n그러나 회로의 끝은 가장 약한 마디에서 시작됐다.\n\n2001년 4월, WinStar Communications가 파산을 신청했다. Lucent의 노출은 약정 20억 달러 중 인출 7억 달러. 그 7억 달러는 거의 전액 상각됐다. (몇 년 후 법원은 Lucent가 WinStar 파산관재인에게 약 3억 달러를 추가로 지불하도록 명령한다.)\n\n2001년에는 다른 customer들도 무너졌다 — NorthPoint, ICG, Global Crossing, PSINet. 2002년 7월 WorldCom이 파산했다. Lucent의 FY2001 충당금: 22억 달러. FY2002 충당금: 13억 달러. 합쳐 35억 달러.\n\n회로가 멈췄다. Lucent의 주가는 2002년 10월 11일 **$0.58** 에 닿았다. 피크 대비 -99.3%. (split 조정 후 기준으로도 -95%.) 직원 수는 16만 5천 명에서 3만 명으로 줄었다. CEO Richard McGinn은 2000년 10월에 해임됐다. CFO Deborah Hopkins는 2001년 5월에 교체됐다. 2004년 SEC는 매출 인식 부정행위에 대해 2,500만 달러 합의를 받아냈다.\n\nLucent는 살아남지 못했다. 2006년 Alcatel과 합병됐다. 그 합병회사도 결국 노키아에 흡수됐다.",
          bodyEn:
            "The circuit ran flawlessly through 1999. Lucent's stock hit **$82.31** on December 20, 1999. Market cap: $258 billion. It was a top-10 company in the world by market value.\n\nBut the end of the circuit started at its weakest node.\n\nIn April 2001, WinStar Communications filed for bankruptcy. Lucent's exposure was $700 million drawn from a $2 billion commitment. Almost the entire $700 million was written down. (Years later, a court would order Lucent to pay roughly $300 million more to WinStar's bankruptcy trustee.)\n\nOther customers fell in 2001 — NorthPoint, ICG, Global Crossing, PSINet. WorldCom filed in July 2002. Lucent's FY2001 provisions: $2.2 billion. FY2002: $1.3 billion. Combined: $3.5 billion.\n\nThe circuit stopped. Lucent's stock hit **$0.58** on October 11, 2002. From peak: -99.3% (-95% on a split-adjusted basis). Headcount fell from 165,000 to 30,500. CEO Richard McGinn was fired in October 2000. CFO Deborah Hopkins was replaced in May 2001. In 2004, the SEC settled revenue-recognition fraud charges for $25 million.\n\nLucent did not survive. It merged with Alcatel in 2006. The merged entity was eventually absorbed by Nokia.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "회로의 본질 — 진입자에게 자본을 빌려준 자가 매출을 인식한다",
            headingEn: "The Anatomy of a Circuit — Whoever Lends to the Entrant Books the Revenue",
            body: "Richmond Fed의 2003년 논문(Couper, Hejkal, Wolman)이 기록한 정량적 사실 하나: 장거리 광섬유 시장의 기존 사업자(AT&T, MCI, WorldCom, Sprint) 점유율은 **1996년 72% → 1999년 30%** 로 추락했다. 새 진입자들이 폭발적으로 점유했고, 그 진입자들은 Lucent/Nortel/Cisco의 vendor financing으로 자본을 받았다. 즉 *capex 폭증의 진짜 메커니즘은 vendor financing이 새 진입자를 만든 것이었다*. 2025년 NVIDIA의 GPU 신용·지분이 OpenAI·Anthropic·xAI·Mistral 같은 \"AI native 신진입자\"의 부상을 자금화하고 있는 구조와 정확히 같다.",
            bodyEn:
              "One quantitative fact from the 2003 Richmond Fed paper (Couper, Hejkal, Wolman): the long-haul fiber market share of incumbents (AT&T, MCI, WorldCom, Sprint) collapsed from **72% in 1996 to 30% in 1999**. New entrants took share explosively — and those entrants were capitalized by vendor financing from Lucent, Nortel, and Cisco. In other words, *the actual mechanism behind the capex boom was that vendor financing created the new entrants*. NVIDIA's GPU credit and equity stakes today are doing the same thing for the \"AI-native new entrants\" — OpenAI, Anthropic, xAI, Mistral.",
          },
        },
      ],
    },
    // ── 3. Cisco — 비즈니스는 멈추지 않았다 ───────────────────────────────────
    {
      heading: "Cisco가 가르쳐준 것 — 비즈니스는 멈추지 않았다",
      headingEn: "What Cisco Taught — The Business Didn't Stop",
      blocks: [
        {
          type: "text",
          body: "Lucent의 이야기는 극단적이다. 회계 부정행위, CEO 해임, 시가총액 99% 증발, 결국 해체. 어떤 면에서는 너무 깨끗한 caution tale이다 — *비즈니스가 잘못 운영됐기 때문이다.*\n\n그러나 그 사이클의 진짜 교훈은 Lucent가 아니다. **Cisco** 다.\n\n2000년 3월 27일. Cisco Systems가 Microsoft를 제치고 세계에서 가장 가치 있는 회사가 됐다. 시가총액 5,690억 달러. 주가 $80.06 (split 조정 후). Forward P/E는 약 150배. 모든 사람이 Cisco의 라우터로 인터넷이 깔린다는 걸 알았고, 모든 사람이 Cisco 주식을 사야 한다고 생각했다.\n\n2002년 10월 8일. Cisco 주가가 **$8.60** 에 닿았다. 피크 대비 -89%.\n\n여기까지는 Lucent 이야기와 비슷해 보인다. 그런데 매출을 보면:\n\n- FY2000 (2000년 7월말): 매출 **$18.9B**\n- FY2001: 매출 **$22.3B** (+18% 성장)\n- FY2002: 매출 **$18.9B** (-15%)\n- FY2003: 매출 **$18.9B** (flat)\n\n*비즈니스는 망하지 않았다.* FY01 매출은 오히려 사상 최대였다. FY02-03에 약간 후퇴했지만, 그 후 Cisco는 계속 성장해 FY24 매출 538억 달러로 약 3배가 됐다.\n\n그러나 주가는 -89%였다. 그리고 25년 만인 **2025년 12월 10일** , 주가가 처음으로 다시 $80.25 — 2000년 피크 — 를 회복했다. 25년 8개월 13일.",
          bodyEn:
            "Lucent's story is extreme. Accounting fraud, CEO firing, 99% market cap evaporation, eventual dissolution. In one sense, it's too clean a cautionary tale — *because the business was managed badly.*\n\nBut the real lesson of that cycle is not Lucent. It's **Cisco**.\n\nOn March 27, 2000, Cisco Systems passed Microsoft to become the most valuable company in the world. Market cap: $569 billion. Stock price: $80.06 (split-adjusted). Forward P/E: about 150x. Everyone knew Cisco routers were building the internet. Everyone thought they should own Cisco stock.\n\nOn October 8, 2002, Cisco hit **$8.60**. From peak: -89%.\n\nUp to here, the story sounds like Lucent's. But look at revenue:\n\n- FY2000 (ending July 2000): **$18.9B**\n- FY2001: **$22.3B** (+18% growth)\n- FY2002: **$18.9B** (-15%)\n- FY2003: **$18.9B** (flat)\n\n*The business didn't fail.* FY01 revenue was actually a record high. After modest declines in FY02-03, Cisco kept growing — FY24 revenue was $53.8 billion, roughly 3x the FY00 peak.\n\nBut the stock fell -89%. And then, 25 years later, on **December 10, 2025**, the stock finally reclaimed $80.25 — the 2000 peak. 25 years, 8 months, 13 days.",
        },
        {
          type: "chart",
          chart: {
            id: "cisco-lost-decade",
            title: "Cisco의 25년 — 주가 vs 매출 (FY00 = 100)",
            titleEn: "Cisco's Lost Decade — Stock vs Revenue (FY00 = 100)",
            caption:
              "출처: Cisco 10-K filings, CNBC (2025.12.10 신고가 회복 보도). 매출은 FY01 +18%, 이후 약간 후퇴 → FY24 약 285. 주가는 -89% 후 25년 만에 100 회복.",
            captionEn:
              "Sources: Cisco 10-K filings, CNBC (Dec 10, 2025 record-high coverage). Revenue grew +18% in FY01, modestly declined, then resumed growth — FY24 index ~285. Stock collapsed -89% and took 25 years to recover to 100.",
            data: [
              { year: "'00", stockIdx: 100, revenueIdx: 100, event: "peak" },
              { year: "'01", stockIdx: 31,  revenueIdx: 118 },
              { year: "'02", stockIdx: 11,  revenueIdx: 100, event: "trough" },
              { year: "'03", stockIdx: 21,  revenueIdx: 100 },
              { year: "'04", stockIdx: 26,  revenueIdx: 116 },
              { year: "'05", stockIdx: 22,  revenueIdx: 130 },
              { year: "'07", stockIdx: 35,  revenueIdx: 188 },
              { year: "'10", stockIdx: 27,  revenueIdx: 213 },
              { year: "'15", stockIdx: 36,  revenueIdx: 261 },
              { year: "'20", stockIdx: 49,  revenueIdx: 261 },
              { year: "'24", stockIdx: 75,  revenueIdx: 285 },
              { year: "'25", stockIdx: 100, revenueIdx: 285, event: "recovery" },
            ],
            annotations: [
              { year: "'02", label: "트로프", labelEn: "Trough" },
              { year: "'25", label: "25년 만에 회복", labelEn: "Recovered 25y later" },
            ],
          },
        },
        {
          type: "text",
          body: "이게 사이클의 진짜 교훈이다.\n\nCisco는 비즈니스가 망해서 -89%가 된 것이 아니다. 회로가 멈췄기 때문에 그렇게 됐다. 더 정확히: *시장이 회로의 영구성을 가격에 반영한 multiple이 수축했기 때문* 이다. P/E 150배는 회로가 영원히 돈다는 가정을 가격에 박은 것이고, 회로가 멈추자 그 multiple이 일자릿수로 압축됐다.\n\n비즈니스의 성공과 주식의 성공은 다른 일이었다. 5,690억 달러의 시가총액 피크에서, Cisco를 산 투자자가 *피크 가격까지 자신의 자본을 회복하는 데 25년이 걸렸다.* 그 동안 Cisco의 매출은 3배가 됐고, Cisco는 영업현금흐름을 매년 100억 달러씩 만들었다. 그러나 그 시작가가 너무 비쌌다.\n\nNVIDIA가 Cisco가 될지 Lucent가 될지는 아직 모른다. 그러나 Cisco의 25년은 이 한 가지를 분명히 가르쳐준다:\n\n*회로의 영구성에 가격을 매긴 multiple은, 회로가 멈추면, multiple만 무너진다. 비즈니스가 망하지 않아도.*",
          bodyEn:
            "This is the real lesson of the cycle.\n\nCisco didn't fall -89% because the business failed. It fell because the circuit stopped. More precisely: *because the multiple that priced in the circuit's permanence compressed.* A 150x P/E embedded an assumption that the circuit would run forever; when it stopped, that multiple compressed to single digits.\n\nBusiness success and stock success are different things. At a $569 billion peak market cap, investors who bought Cisco at the top took *25 years to recover their capital to the peak price.* Over that time, Cisco's revenue tripled and the company generated $10+ billion in operating cash flow every year. But the entry price was too expensive.\n\nWhether NVIDIA becomes Cisco or Lucent, we don't yet know. But Cisco's 25 years teaches one thing clearly:\n\n*A multiple that prices in the permanence of the circuit collapses when the circuit stops — even if the business never fails.*",
        },
      ],
    },
    // ── 4. 2025년의 회로 ──────────────────────────────────────────────────────
    {
      heading: "2025년의 회로 — 같은 패턴, 다른 손",
      headingEn: "The 2025 Circuit — Same Pattern, Different Hands",
      blocks: [
        {
          type: "text",
          body: "1999년의 회로를 보고 나면, 2025년의 회로를 다시 보게 된다. 다이어그램으로 그려보면 단순하다.",
          bodyEn:
            "Once you've seen the 1999 circuit, the 2025 circuit looks different. Drawn as a diagram, it's simple.",
        },
        {
          type: "chart",
          chart: {
            id: "circular-flow",
            title: "NVIDIA → OpenAI → Microsoft → NVIDIA 회로 (2025년 발표 약정 기준)",
            titleEn: "The NVIDIA → OpenAI → Microsoft → NVIDIA Circuit (2025 announced commitments)",
            caption:
              "출처: NVIDIA IR (2025.9.22), Microsoft 8-K (2025.10.28), Bloomberg AI Circular Deals (2026). 세 화살표가 한 바퀴를 돈다. 매수자가 매도자에게 자본을 출자하고, 매도자가 그 자본으로 매수자에게서 사고, 매수자가 매출을 인식한다.",
            captionEn:
              "Sources: NVIDIA IR (Sept 22, 2025), Microsoft 8-K (Oct 28, 2025), Bloomberg AI Circular Deals (2026). Three arrows close one loop. The buyer puts capital into the seller; the seller uses that capital to buy from the buyer; the buyer recognizes revenue.",
            nodes: [
              { id: "openai",    label: "OpenAI",    sub: "모델 회사",         subEn: "Model Lab",       color: "#10b981" },
              { id: "nvidia",    label: "NVIDIA",    sub: "GPU 공급자",        subEn: "GPU Supplier",     color: "#76b900" },
              { id: "microsoft", label: "Microsoft", sub: "클라우드 호스트",    subEn: "Cloud Host",       color: "#3b82f6" },
            ],
            edges: [
              { from: "nvidia",    to: "openai",    amount: "$100B 출자 (LOI)",  amountEn: "$100B equity (LOI)",  detail: "10GW 가동 단계별 분할",  detailEn: "Staged per 10GW deployment" },
              { from: "openai",    to: "microsoft", amount: "$250B Azure 약정",   amountEn: "$250B Azure commit",   detail: "2025-2030, 6년",         detailEn: "2025-2030, 6 years" },
              { from: "microsoft", to: "nvidia",    amount: "NVDA 매출의 ~22%", amountEn: "~22% of NVDA revenue", detail: "단일 최대 고객 (FY26 10-K)", detailEn: "Single largest customer (FY26 10-K)" },
            ],
          },
        },
        {
          type: "text",
          body: "이 회로 옆에 거의 똑같은 형태의 두 번째 회로가 있다.\n\nAmazon이 Anthropic에 누적 약 160억 달러를 출자했다 (2023년 9월부터). 2025년 말 추가로 200억 달러까지 commercial milestone 기반으로 약정했다. Anthropic은 **Project Rainier** — AWS가 인디애나에 110억 달러를 들여 지은, 약 50만 개의 Trainium2 칩으로 구성된 전용 클러스터 — 를 Claude 학습에 사용한다. AWS는 그 컴퓨트 매출을 인식한다.\n\nMicrosoft-OpenAI와 정확히 같은 패턴이다. 단지 주연이 다를 뿐이다.\n\n그리고 그 옆에 더 있다. NVIDIA는 OpenAI에만 출자한 것이 아니다. CoreWeave 지분 6-7%를 보유하고 ($2B PIPE, IPO anchor order), xAI 라운드에 참여하고, Mistral·Lambda·Inflection·Perplexity·Reka·Cohere·Wayve·Figure 등에 광범위하게 투자해놓았다. AMD는 2025년 10월 OpenAI에 6GW 약정 — 그 대가로 OpenAI에게 AMD 주식의 약 10%(주당 $0.01에 1억 6천만 주)를 워런트로 제공했다. 즉, 모델 회사가 GPU를 사면 GPU 회사 지분을 받는 구조. 회로가 한 단계 더 꼬여 있다.\n\n전체 그림을 정리하면 이렇다.",
          bodyEn:
            "Beside this circuit sits a second one with almost identical shape.\n\nAmazon has invested roughly $16 billion cumulatively in Anthropic since September 2023. In late 2025, it committed up to $20 billion more on commercial milestones. Anthropic uses **Project Rainier** — a roughly $11 billion AWS-built cluster in Indiana with about 500,000 Trainium2 chips — to train Claude. AWS recognizes the compute revenue.\n\nExactly the same pattern as Microsoft-OpenAI. Just different protagonists.\n\nAnd there's more around the edges. NVIDIA didn't only invest in OpenAI. It owns 6-7% of CoreWeave ($2B PIPE plus IPO anchor order), participated in xAI rounds, and has stakes in Mistral, Lambda, Inflection, Perplexity, Reka, Cohere, Wayve, Figure. In October 2025, AMD signed a 6 GW commitment with OpenAI — in exchange, AMD gave OpenAI warrants on roughly 10% of AMD stock (160 million shares at $0.01 per share). The model company that buys GPUs gets equity in the GPU company. The circuit twists one more time.\n\nHere's the full picture.",
        },
        {
          type: "table",
          table: {
            id: "ai-circuit-flows",
            title: "AI 자본 회로 — 2025년 발표 약정 매트릭스",
            titleEn: "AI Capital Circuit — 2025 Announced Commitments Matrix",
            headers: ["발표일", "From → To", "약정 금액", "구조"],
            headersEn: ["Announced", "From → To", "Amount", "Structure"],
            rows: [
              ["2019-23", "MSFT → OpenAI", "$13B 누적 (funded $11.6B)", "출자 + 전환사채"],
              ["2025.1",  "SoftBank/Oracle/MGX → Stargate JV", "목표 $500B/4년", "CapEx 합작"],
              ["2025.9",  "OpenAI → Oracle", "$300B/5년 (2027-31)", "클라우드 구매"],
              ["2025.9",  "NVIDIA → OpenAI", "최대 $100B (LOI)", "출자, milestone-gated"],
              ["2025.9",  "OpenAI → NVIDIA", "10GW (~$350B GPU)", "다년 구매"],
              ["2025.10", "AMD → OpenAI", "10% AMD 워런트 (160M주 @ $0.01)", "주식 워런트"],
              ["2025.10", "OpenAI → AMD", "6GW MI300 구매 약정", "다년 구매"],
              ["2025.10", "MSFT ↔ OpenAI 재편", "MSFT 지분 $135B (27%); OpenAI → Azure $250B", "출자 + 클라우드"],
              ["2025.11", "AWS → Anthropic", "+$20B (commercial milestone)", "출자/약정"],
              ["2025.12", "SoftBank → OpenAI", "$40B 라운드 완료 (Dec 30, $300B post)", "출자"],
            ],
            rowsEn: [
              ["2019-23", "MSFT → OpenAI", "$13B cumulative (funded $11.6B)", "Equity + convertible"],
              ["Jan 2025",  "SoftBank/Oracle/MGX → Stargate JV", "$500B target by 2029", "JV CapEx vehicle"],
              ["Sept 2025",  "OpenAI → Oracle", "$300B / 5yr (2027-31)", "Cloud purchase"],
              ["Sept 2025",  "NVIDIA → OpenAI", "Up to $100B (LOI)", "Equity, milestone-gated"],
              ["Sept 2025",  "OpenAI → NVIDIA", "10 GW (~$350B GPUs)", "Multi-year purchase"],
              ["Oct 2025", "AMD → OpenAI", "10% AMD warrants (160M @ $0.01)", "Equity warrant"],
              ["Oct 2025", "OpenAI → AMD", "6 GW MI300 commitment", "Multi-year purchase"],
              ["Oct 2025", "MSFT ↔ OpenAI restructure", "MSFT stake $135B (27%); OpenAI → Azure $250B", "Equity + cloud"],
              ["Nov 2025", "AWS → Anthropic", "+$20B (commercial milestone)", "Equity / commit"],
              ["Dec 2025", "SoftBank → OpenAI", "$40B round closed (Dec 30, $300B post)", "Equity"],
            ],
            caption: "이 표의 모든 줄에서 — 자본을 출자한 회사가, 같은 카운터파티에게서 매출을 인식한다.",
            captionEn: "In every row of this table — the company providing capital recognizes revenue from the same counterparty.",
          },
        },
        {
          type: "text",
          body: "여기에 더해 자금 출처도 봐야 한다. 1999년 통신사들은 회사채와 은행 대출로 capex를 댔다. 2025년 하이퍼스케일러는 영업현금흐름으로 댄다 — 적어도 표면적으로는. 그러나 2026년 가이던스를 보면 그 self-funding이 처음으로 무너진다.",
          bodyEn:
            "Beyond the circuit, look at the funding source. In 1999, telecom carriers funded capex with corporate bonds and bank loans. In 2025, hyperscalers fund it from operating cash flow — at least on the surface. But the 2026 guidance shows that self-funding pattern breaking for the first time.",
        },
        {
          type: "chart",
          chart: {
            id: "capex-fcf-combo",
            title: "빅5 하이퍼스케일러 CapEx 추이 vs 합산 FCF ($B)",
            titleEn: "Big 5 Hyperscaler CapEx vs Combined FCF ($B)",
            caption:
              "출처: 각사 10-K/10-Q (MSFT, GOOGL, META, AMZN, ORCL), Apollo Academy (Feb 2026), Futurum (2026). 2026년 합산 CapEx ~$700B (전년 +55%); 합산 FCF는 처음으로 cross-over 위험권에 진입.",
            captionEn:
              "Sources: 10-K/10-Q filings for MSFT, GOOGL, META, AMZN, ORCL; Apollo Academy (Feb 2026); Futurum (2026). 2026 combined CapEx ~$700B (+55% YoY); combined FCF enters cross-over risk zone for the first time.",
            data: [
              { year: "'20", MSFT: 18, GOOGL: 22, META: 16, AMZN: 35, ORCL: 2,  totalFcf: 165 },
              { year: "'21", MSFT: 24, GOOGL: 25, META: 19, AMZN: 55, ORCL: 4,  totalFcf: 175 },
              { year: "'22", MSFT: 27, GOOGL: 31, META: 32, AMZN: 60, ORCL: 5,  totalFcf: 155 },
              { year: "'23", MSFT: 28, GOOGL: 32, META: 28, AMZN: 48, ORCL: 7,  totalFcf: 180 },
              { year: "'24", MSFT: 56, GOOGL: 52, META: 39, AMZN: 78, ORCL: 15, totalFcf: 195 },
              { year: "'25", MSFT: 80, GOOGL: 75, META: 70, AMZN: 100, ORCL: 25, totalFcf: 145 },
              { year: "'26E", MSFT: 130, GOOGL: 180, META: 135, AMZN: 200, ORCL: 50, totalFcf: 80 },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "독립 연구소가 자금을 조달하려면 무엇을 해야 하나? 컴퓨트 비용을 낼 수 있도록 어떤 수치를 시장에 내놓아야 한다.",
            bodyEn: "What do you expect an independent lab that is trying to raise money to do? They have to put some numbers out there so they can actually go raise money to pay their compute bills.",
            heading: "— Satya Nadella, OpenAI의 매출 전망을 옹호하며 (2025)",
            headingEn: "— Satya Nadella, defending OpenAI's revenue projections (2025)",
          },
        },
      ],
    },
    // ── 5. 무엇이 같고 무엇이 다른가 ─────────────────────────────────────────
    {
      heading: "무엇이 같고 무엇이 다른가",
      headingEn: "What Is the Same, What Is Different",
      blocks: [
        {
          type: "text",
          body: "두 회로를 나란히 놓고 보면, 정직한 비교는 둘 다 해야 한다 — *무엇이 같은지* 와 *무엇이 다른지* .\n\n**다른 점이 먼저다.** 1999년 Lucent의 vendor financing은 회계상 *매출채권/대출* 이었다. 고객이 paying 못하면 충당금을 잡아야 했고, 결국 손익에 반영됐다. 2025년 NVIDIA의 OpenAI 출자는 회계상 *자본 투자* 다. 마크업/마크다운이 발생할 수는 있지만, 매출 인식과 분리돼 있다. 자금 출처도 다르다. 1999년 통신사들은 약 1.6조 달러의 회사채를 발행해 capex를 댔다. 2025년 하이퍼스케일러는 영업현금흐름의 약 70%를 capex로 돌리고 있다 — 부족분은 회사채(2025년 빅테크 신규 발행 ~$108B)로 메꾸지만, 비율은 1999와 비교가 안 된다.\n\n그래서 NVIDIA의 공식 입장은 — 회계상 — 진실이다.",
          bodyEn:
            "Placing the two circuits side by side, an honest comparison has to do both — *what's the same* and *what's different*.\n\n**The differences come first.** In 1999, Lucent's vendor financing was, in accounting terms, *receivables and loans*. When customers couldn't pay, provisions had to be taken, and they hit the P&L. In 2025, NVIDIA's investment in OpenAI is, in accounting terms, *equity*. Marks-up and marks-down can happen, but they're separated from revenue recognition. The funding source is also different. In 1999, telecom carriers issued roughly $1.6 trillion in corporate bonds to fund capex. In 2025, hyperscalers convert ~70% of operating cash flow into capex — the gap is filled by bonds ($108B newly issued by Big Tech in 2025), but the ratio is incomparable to 1999.\n\nSo NVIDIA's official position is — in accounting terms — true.",
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "Lucent와 달리, NVIDIA는 매출 성장을 위해 vendor financing 방식에 의존하지 않습니다.",
            bodyEn: "Unlike Lucent, NVIDIA does not rely on vendor financing arrangements to grow revenue.",
            heading: "— NVIDIA 공식 입장, 회로 비판에 대한 답변 (2025년 11월)",
            headingEn: "— NVIDIA official statement, responding to circular-financing critiques (Nov 2025)",
          },
        },
        {
          type: "text",
          body: "이게 회계상 진실이라는 점은 인정해야 한다. 그러나 **경제학적으로는** 어떨까. Jim Chanos의 표현이 가장 깔끔하다:\n\n> *\"[NVIDIA가 하는 일은] 적자 회사에 돈을 넣어 그들이 그 자금으로 칩을 사게 하는 구조다.\"*\n\n출자 → 그 자본이 컴퓨트 약정으로 → 그 컴퓨트 약정이 GPU 매입으로 → 그 GPU 매입이 NVIDIA 매출로 — 회계상 다섯 단계의 분리가 있어도, 경제학적으로는 *같은 회사가 결국 자기 돈으로 자기 매출을 만들고 있다.* Chanos는 이걸 \"1990년대 vendor financing의 100억 달러 규모를 훨씬 초과하는 패턴\"이라고 평가한다.\n\n그래서 같은 점은 단순하다:\n\n1. 매수자와 매도자가 같은 사람 (또는 같은 자금 풀)\n2. 새 진입자(OpenAI/Anthropic/xAI)가 자본을 받아 인프라 수요를 만든다 — Lucent가 WinStar에게 자본을 줘 Lucent 장비를 사게 한 것과 같은 구조\n3. 회로가 도는 동안은 모든 참가자가 이긴다 — *비즈니스가 진짜 작동하는지에 대한 검증 없이*",
          bodyEn:
            "This accounting truth deserves recognition. But **economically**, how does it look? Jim Chanos's framing is the cleanest:\n\n> *\"[What NVIDIA does is] channel money into unprofitable companies that then use those funds to buy chips.\"*\n\nEquity in → capital becomes compute commitment → compute commitment becomes GPU purchase → GPU purchase becomes NVIDIA revenue. Even with five layers of accounting separation, economically *the same company is ultimately making its own revenue with its own money.* Chanos calls this a \"pattern that far exceeds the approximately $100 billion in 1990s vendor financing.\"\n\nSo the similarities are simple:\n\n1. Buyer and seller are the same person (or the same capital pool)\n2. New entrants (OpenAI, Anthropic, xAI) receive capital to create infrastructure demand — same structure as Lucent giving WinStar capital to buy Lucent equipment\n3. While the circuit runs, every participant wins — *without any validation that the business actually works*",
        },
        {
          type: "callout",
          callout: {
            variant: "warning",
            heading: "두 사이클의 핵심 분기 — 자기검증의 부재",
            headingEn: "The Critical Divergence — The Absence of Self-Validation",
            body: "Lucent 시대의 운명은 새 통신사들이 매출을 만들 수 있는가에 달려 있었다. 그들은 거의 만들지 못했다 (소비자/기업 수요가 광섬유의 약 3%만 점등시켰다 — WSJ 2002). 2025년 AI 사이클의 운명은 새 모델 회사들이 매출을 만들 수 있는가에 달려 있다. OpenAI는 2024년 매출 약 $3.7B → 2025년 ARR $10-13B로 성장 중이다. 그러나 컴퓨트 비용은 2026년 약 $50B, 2030년까지 누적 $600B+. **매출이 비용을 잡을 수 있는지 — 그게 회로의 자기검증이다. 1999년에는 그 검증이 실패했다. 2025년의 답은 아직 모른다.**",
            bodyEn:
              "Lucent's fate depended on whether the new carriers could generate revenue. They mostly couldn't (consumer/enterprise demand lit only about 3% of the fiber laid — WSJ 2002). The 2025 AI cycle's fate depends on whether the new model companies can generate revenue. OpenAI grew from ~$3.7B (2024) to $10-13B ARR (2025). But compute costs reach ~$50B in 2026 and $600B+ cumulative through 2030. **Whether revenue catches cost — that's the circuit's self-validation. In 1999, that validation failed. The 2025 answer isn't yet known.**",
          },
        },
      ],
    },
    // ── 6. 알 수 있는 것, 알 수 없는 것 ──────────────────────────────────────
    {
      heading: "알 수 있는 것, 알 수 없는 것, 추정 가능한 것",
      headingEn: "What We Know, What We Can't, What We Can Estimate",
      blocks: [
        {
          type: "text",
          body: "Marks가 좋아하는 framing이 있다 — *알 수 있는 것 / 알 수 없는 것 / 알 수 없지만 추정 가능한 것* 의 세 영역. AI 회로에 적용하면 이렇다.\n\n**알 수 있는 것** 은 측정 가능한 fact다. 회로의 정확한 자금 흐름. NVIDIA 매출의 36%가 두 hyperscaler에서 나온다는 사실 (FY26 10-K). 빅5 합산 2026 capex 약 $700B. OpenAI의 매출이 컴퓨트 비용보다 훨씬 작다는 사실. 이것들은 다투지 않는다.\n\n**알 수 없는 것** 은 사이클의 timing이다. 회로가 정확히 언제 끊어지는지. AI 매출 중 어디까지가 진짜 엔드유저 수요고 어디까지가 자기 자본의 재귀인지. 사이클의 정점이 2026년인지 2028년인지 2030년인지. 이건 본질적으로 unknowable이다 — 정답을 안다고 주장하는 사람은 거짓말이다.\n\n**추정 가능한 것** 은 *균열의 첫 신호가 어디서 보일 가능성이 높은지* 다. 회로의 가장 약한 마디 — 다음 라운드 자금을 받지 못하는 첫 모델 회사. OpenAI나 Anthropic은 강하다. 그러나 그 둘 외 — xAI, Mistral, Inflection, Cohere, Stability — 중 한 곳이 down round를 맞거나 자금 조달에 실패하면, 회로의 한 마디가 깨진다. 그 신호는 측정 가능하다.\n\n두 번째 추정 가능한 신호는 빅테크 회사채 스프레드다. 2025년 $108B 발행이 2026년 $200B+로 늘어나면, 자금시장은 그 신용도를 다르게 평가하기 시작한다. 신용 스프레드 확대는 회로의 두 번째 균열이다.\n\n세 번째는 NVIDIA의 forward guidance에서 데이터센터 매출 sequential 성장률이 둔화되는 시점이다. NVDA가 직접 \"다음 분기는 성장이 약하다\"고 말하는 그 분기, 회로의 *세 번째 균열* 이 보인다.\n\n네 번째 — 그리고 가장 중요한 — 신호는 시리즈의 마지막 메모에서 다룰 것이다. AI가 진짜 노동을 대체하는지에 대한 Anthropic Economic Index의 분기 데이터.",
          bodyEn:
            "Marks has a framing he likes — *what we know / what we can't know / what we can't know but can estimate*. Applied to the AI circuit:\n\n**What we can know** is measurable fact. The exact money flows in the circuit. The fact that 36% of NVIDIA revenue comes from two hyperscalers (FY26 10-K). Big 5 combined 2026 capex ~$700B. The fact that OpenAI's revenue is far below its compute cost. These don't get debated.\n\n**What we can't know** is the cycle's timing. Exactly when the circuit will stop. What portion of AI revenue is genuine end-user demand versus recycled own-capital. Whether the peak is 2026, 2028, or 2030. This is fundamentally unknowable — anyone who claims to know is lying.\n\n**What we can estimate** is *where the first crack is most likely to appear*. The weakest node in the circuit is the first model company that fails to raise its next round. OpenAI and Anthropic are strong. But beyond those two — xAI, Mistral, Inflection, Cohere, Stability — if any one of them takes a down round or fails to fund, one node in the circuit breaks. That signal is measurable.\n\nThe second estimable signal is the credit spread on Big Tech corporate bonds. If the $108B issued in 2025 grows to $200B+ in 2026, credit markets will start pricing the credit differently. Spread widening is the circuit's second crack.\n\nThe third is the moment when NVIDIA's forward guidance shows sequential deceleration in data center revenue. The quarter NVDA itself says \"next quarter's growth will be weak\" — that's where the *third crack* shows.\n\nThe fourth — and most important — signal, we'll cover in the final memo of this series. The quarterly data from Anthropic's Economic Index on whether AI is actually displacing labor.",
        },
      ],
    },
    // ── 7. 결론 ───────────────────────────────────────────────────────────────
    {
      heading: "결론 — 회로가 멈추면",
      headingEn: "Conclusion — When the Circuit Stops",
      blocks: [
        {
          type: "text",
          body: "이 메모는 AI가 거품인지 산업혁명인지를 답하지 않는다. 그 질문은 본질적으로 알 수 없다. 그리고 그 답을 안다고 주장하는 모든 메모는 — 강세든 약세든 — 자기 확신을 팔고 있다.\n\n그러나 이 메모가 답하는 것은 따로 있다. *지금 우리가 보고 있는 자본 흐름의 구조가 무엇인가* . 그것은 회로다. 매수자가 매도자에게 자본을 출자하고, 매도자가 그 자본으로 매수자에게서 사고, 매수자가 매출을 인식하는 닫힌 회로. 회계상으로는 vendor financing이 아니다. 경제학적으로는 같다.\n\n1999년의 같은 회로는 -89% 하락으로 끝났다. 그러나 *비즈니스가 망해서가 아니었다.* Cisco의 매출은 그 후 25년간 3배가 됐고, 회사는 매년 100억 달러 이상의 영업현금흐름을 만들었다. 망한 건 회로의 영구성에 가격을 매긴 multiple이었다. 그것이 -89%를 만들었다.\n\nNVIDIA에게도, Microsoft에게도, OpenAI에게도, SK하이닉스에게도 — 같은 가능성이 열려 있다. 회로가 계속 돌면, 모든 참가자가 부자가 된다. 회로가 멈추면, 비즈니스가 망하지 않아도, multiple이 무너진다. 그리고 그 차이가 모든 것을 결정한다.\n\n*매수자와 매도자가 같은 사람일 때, 시장 가격은 — 잠시 동안 — 무엇이든 될 수 있다. 회로가 도는 한.*\n\n회로가 도는 한.",
          bodyEn:
            "This memo doesn't answer whether AI is a bubble or an industrial revolution. That question is fundamentally unanswerable. And every memo — bullish or bearish — that claims to know the answer is selling its own conviction.\n\nWhat this memo does answer is something different. *What is the structure of the capital flow we are watching?* It is a circuit. A closed loop in which the buyer puts capital into the seller, the seller uses that capital to buy from the buyer, and the buyer recognizes revenue. In accounting terms, it isn't vendor financing. In economic terms, it's the same.\n\nIn 1999, the same circuit ended in a -89% drawdown. But *not because the business failed.* Cisco's revenue tripled over the 25 years that followed, and the company generated over $10 billion in operating cash flow every year. What failed was the multiple that priced in the permanence of the circuit. That made the -89%.\n\nThe same possibility is open to NVIDIA, Microsoft, OpenAI, SK Hynix — all of them. While the circuit runs, every participant gets rich. When the circuit stops, even if the business never fails, the multiple collapses. And that difference decides everything.\n\n*When the buyer and the seller are the same person, the market price can — for a while — be anything. As long as the circuit runs.*\n\nAs long as the circuit runs.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "다음 메모 예고 — 모델 빅2와 Claude Code의 매출",
            headingEn: "Next Memo — Big 2 Model Companies and Claude Code's Revenue",
            body: "회로의 가장 약한 마디는 모델 회사다. OpenAI와 Anthropic이 매출을 진짜 만들 수 있는지가 회로의 자기검증 첫 단계다. 다음 메모에서는 두 회사의 단위경제학 — 매출 vs 컴퓨트 비용 — 을 정량 비교하고, Claude Code가 AI agent 시대의 첫 진짜 PMF인지를 검증한다.",
            bodyEn:
              "The weakest node in the circuit is the model company. Whether OpenAI and Anthropic can actually generate revenue is the first stage of the circuit's self-validation. The next memo compares the two companies' unit economics — revenue vs compute cost — quantitatively, and asks whether Claude Code is the first real PMF of the AI-agent era.",
          },
        },
      ],
    },
  ],
  references: [
    {
      id: 1,
      author: "NVIDIA Corporation",
      title: "OpenAI and NVIDIA Announce Strategic Partnership to Deploy 10 Gigawatts of NVIDIA Systems",
      source: "NVIDIA Investor Relations Press Release",
      year: "2025-09-22",
      url: "https://investor.nvidia.com/news/press-release-details/2025/OpenAI-and-NVIDIA-Announce-Strategic-Partnership-to-Deploy-10-Gigawatts-of-NVIDIA-Systems/",
    },
    {
      id: 2,
      author: "Microsoft Corporation",
      title: "Form 8-K — OpenAI Group PBC Restructuring Disclosure",
      source: "SEC EDGAR",
      year: "2025-10-28",
      url: "https://www.sec.gov/Archives/edgar/data/0000789019/000119312525256310/msft-ex99_2.htm",
    },
    {
      id: 3,
      author: "Couper, E., Hejkal, J., & Wolman, A.",
      title: "Boom and Bust in Telecommunications",
      source: "Federal Reserve Bank of Richmond Economic Quarterly, Vol. 89/4",
      year: "2003",
      url: "https://www.richmondfed.org/-/media/richmondfedorg/publications/research/economic_quarterly/2003/fall/pdf/wolman.pdf",
      note: "1999-2001 통신 capex 사이클 정량 분석의 권위 1차 자료",
    },
    {
      id: 4,
      author: "Lucent Technologies Inc.",
      title: "Form 10-K Annual Report (FY2002)",
      source: "SEC EDGAR",
      year: "2002",
      url: "https://www.sec.gov/Archives/edgar/data/0001006240/000095011702003045/ex13.htm",
      note: "Vendor financing 약정 잔액 및 충당금 1차 공시",
    },
    {
      id: 5,
      author: "Lazonick, W. & March, E.",
      title: "The Rise and Demise of Lucent Technologies",
      source: "Business History Conference",
      year: "2010",
      url: "https://thebhc.org/sites/default/files/lazonickandmarch.pdf",
    },
    {
      id: 6,
      author: "Cisco Systems Inc.",
      title: "Form 10-K Annual Report (FY2001)",
      source: "SEC EDGAR",
      year: "2001",
      url: "https://www.sec.gov/Archives/edgar/data/0000858877/000109581101505065/f75710ex13.txt",
    },
    {
      id: 7,
      author: "CNBC",
      title: "Cisco stock closes at record for first time since dot-com peak in 2000",
      source: "CNBC",
      year: "2025-12-10",
      url: "https://www.cnbc.com/2025/12/10/ciscos-stock-closes-at-record-for-first-time-since-dot-com-peak-2000.html",
    },
    {
      id: 8,
      author: "Bloomberg",
      title: "AI Circular Deals (interactive graphic)",
      source: "Bloomberg",
      year: "2026",
      url: "https://www.bloomberg.com/graphics/2026-ai-circular-deals/",
      note: "회로 자금 흐름 시각화의 권위적 단일 소스",
    },
    {
      id: 9,
      author: "Fortune",
      title: "Nvidia's $100 billion investment in OpenAI has analysts asking about 'circular financing' inflating an AI bubble",
      source: "Fortune",
      year: "2025-09-28",
      url: "https://fortune.com/2025/09/28/nvidia-openai-circular-financing-ai-bubble/",
    },
    {
      id: 10,
      author: "NVIDIA Corporation",
      title: "Form 10-K Annual Report (FY2026)",
      source: "SEC EDGAR",
      year: "2026",
      note: "단일 고객 22% / 14% 매출 집중도 공시 — 시장은 Microsoft + Meta로 해석",
    },
    {
      id: 11,
      author: "Amazon Web Services",
      title: "AWS Project Rainier Activation — Trainium2 Compute Cluster",
      source: "About Amazon",
      year: "2025",
      url: "https://www.aboutamazon.com/news/aws/aws-project-rainier-ai-trainium-chips-compute-cluster",
    },
    {
      id: 12,
      author: "Apollo Academy (Torsten Sløk)",
      title: "Hyperscaler CapEx 2026 Outlook",
      source: "Apollo Global Management",
      year: "2026-02",
      url: "https://www.apolloacademy.com/wp-content/uploads/2026/02/Hyperscaler-capex-022226_v2.pdf",
    },
    {
      id: 13,
      author: "Light Reading",
      title: "McGinn McFound — The Fall of Lucent's CEO",
      source: "Light Reading",
      year: "2000",
      url: "https://www.lightreading.com/ethernet-ip/mcginn-mcfound/d/d-id/576484",
    },
    {
      id: 14,
      author: "Yahoo Finance",
      title: "Nvidia says it isn't using circular financing schemes — 2 famous short sellers disagree",
      source: "Yahoo Finance",
      year: "2025",
      url: "https://finance.yahoo.com/news/nvidia-says-it-isnt-using-circular-financing-schemes-2-famous-short-sellers-disagree-100021210.html",
      note: "Chanos·Burry의 NVDA 회로 비판 + NVDA 공식 답변 — 회계 vs 경제학 논쟁의 핵심 단일 자료",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #7 — AI Capital Cycle ④ — 패권의 바깥 (HBM·CoWoS)
//   참고: 4편을 먼저 쓰는 이유는 시리즈 글로벌-한국 균형의 척추가 이 편이기
//   때문. Part 2-3-5-7 은 리서치 완료 순서대로 작성.
// ══════════════════════════════════════════════════════════════════════════════

const aiCycle4: NoteData = {
  slug: "ai-capital-cycle-4",
  category: "macro",
  status: "published",
  series: "ai-capital-cycle",
  seriesOrder: 4,
  title: "AI 자본 사이클 ④ — 패권의 바깥",
  titleEn: "AI Capital Cycle ④ — Empire's Periphery",
  description:
    "NVIDIA가 분기마다 $46B 매출을 만들 수 있는 이유는 — HBM의 75%를 한국이, CoWoS의 거의 100%를 대만이 만들어주기 때문이다. 미국 AI 패권은 자기 영토에서 자급자족하지 않는다. 19세기 영국 제국이 미국 면화와 인도 아편에 의지했던 것과 같은 구조다.",
  descriptionEn:
    "NVIDIA's $46B quarterly revenue is possible because 75% of HBM is made in Korea and nearly 100% of CoWoS in Taiwan. The US AI empire does not produce its own bread. The British Empire depended on Indian opium and American cotton — same structure, different century.",
  date: "2026-05-29",
  readingMinutes: 18,
  keyPoints: [
    "NVIDIA FY26 2분기 데이터센터 매출 $46.7B(전체 매출의 90%). 이 단일 숫자가 AI 사이클을 정의한다 — HBM과 CoWoS 두 공급이 동시에 풀린 덕분에 가능했다.",
    "2025년 1분기, SK하이닉스가 사상 처음으로 삼성을 메모리 매출에서 추월. HBM 점유율: 2025년 2분기 SK 62% / 삼성 17% / 마이크론 21% → 2026년 1분기 SK 52% / 삼성 32% / 마이크론 16%. **삼성의 HBM3E 12-Hi NVIDIA 퀄 통과(2025년 후반)**가 변곡점 — 3분기 만에 점유율 +15%p 회복.",
    "TSMC CoWoS 캐파: 2024년 말 월 35K 웨이퍼 → 2026년 말 월 130K(연평균 80% 성장). NVIDIA가 그 캐파의 60%+를 선점. 사실상 대만 단독 공급.",
    "19세기 영국 제국이 인도 아편과 미국 면화에 의지했듯, 미국 AI 패권은 한국 HBM과 대만 CoWoS에 의지한다. 의존은 패권의 결함이 아니라 패권의 **구조**다.",
    "Broadcom AI 매출 FY26 1분기 $8.2B(+74% YoY), 수주잔고 $73B — ASIC이 NVIDIA 점유율을 잠식하기 시작. 그러나 ASIC도 결국 TSMC 패키징에 기댄다.",
    "CHIPS Act, TSMC 애리조나, 마이크론 뉴욕 등은 의존을 풀려는 시도지만 — 수요 증가 속도(연 +60%)가 캐파 증설 속도(연 +25%)를 초과한다. 단기간에 의존은 풀리지 않는다.",
    "투자자가 봐야 할 단일 변수: 삼성 HBM4 12-Hi NVIDIA 퀄 통과 여부. 통과 = 듀오폴리 회복 + 삼성 +20~30% 모멘텀; 실패 = SK하이닉스 모노폴리 굳히기.",
  ],
  keyPointsEn: [
    "NVIDIA's FY26 Q2 data center revenue: $46.7B (90% of total). This single number defines the AI cycle — and it was only possible because HBM and CoWoS supply unlocked together",
    "Q1 2025: SK Hynix passed Samsung in memory revenue for the first time ever. HBM share Q2'25: SK Hynix 62% / Samsung 17% / Micron 21% → Q1'26: SK Hynix 52% / Samsung 32% / Micron 16%. **Samsung's HBM3E 12-Hi NVIDIA qualification breakthrough (late 2025)** as the catalyst — recovered +15pp over 3 quarters",
    "TSMC CoWoS capacity: ~35K wafers/month end-2024 → 130K wafers/month end-2026 (80% CAGR). NVIDIA pre-allocated 60%+. In effect, single-source Taiwan",
    "Just as the British Empire depended on Indian opium and American cotton, US AI hegemony depends on Korean HBM and Taiwanese CoWoS. The dependence is not a flaw — it is the *structure*",
    "Broadcom AI revenue Q1 FY26: $8.2B (+74% YoY), backlog $73B — ASIC encroachment on NVIDIA share begins. But ASICs still depend on TSMC packaging",
    "CHIPS Act + TSMC Arizona + Micron NY try to unwind the dependence. But demand growth (+60% YoY) outpaces capacity build (+25% YoY) — the dependence is not breaking in the short term",
    "The single variable to watch: Samsung HBM4 12-Hi NVIDIA qualification. Pass = duopoly restored + Samsung +20-30% catalyst; fail = SK Hynix monopoly hardens",
  ],
  sections: [
    // ── 1. 단일 곡선 ──────────────────────────────────────────────────────────
    {
      heading: "단일 곡선 — 사이클을 정의하는 한 숫자",
      headingEn: "One Curve — The Single Number That Defines the Cycle",
      blocks: [
        {
          type: "text",
          body: "AI 사이클을 정의하는 단 하나의 숫자가 있다. NVIDIA의 데이터센터 분기 매출이다.\n\nFY23 4분기(2023년 1월 말 기준) $4.3B. FY26 2분기(2025년 7월 말) $46.7B. 11배 성장. 같은 회사의 같은 사업부가 10분기 만에 한 자릿수 $B에서 50에 가까운 $B로 갔다. 회사 전체 매출의 90%가 그 한 사업부에서 나온다.\n\n이 곡선은 두 가지를 말한다. 첫째, AI 자본 사이클이 정량적으로 **얼마나** 큰지 — NVIDIA의 한 사업부가 한 분기에 Lucent가 1999년 한 해 전체에 번 매출의 약 2배다. 둘째, 사이클의 분기별 궤적은 **공급 제약**의 함수라는 점 — NVIDIA가 더 많이 팔지 못한 분기가 있다면, 그건 수요가 없어서가 아니라 **공급할 GPU가 없어서**였다.\n\nGPU의 공급이 풀리려면 두 가지가 동시에 풀려야 한다. **HBM**과 **CoWoS**. 둘 다 NVIDIA가 만들지 않는다. 둘 다 미국에서 만들어지지 않는다. 하나는 한국이, 하나는 대만이 만든다.\n\n그래서 이 곡선은 — 표면적으로는 NVIDIA의 매출이지만 — 실제로는 **한국·대만 공급이 풀린 만큼만 가능했던 곡선**이다.",
          bodyEn:
            "There is one number that defines the AI cycle. It is NVIDIA's quarterly data center revenue.\n\nFY23 Q4 (ended January 2023): $4.3B. FY26 Q2 (ended July 2025): $46.7B. An 11x increase. The same business segment of the same company went from low single-digit $B to nearly $50B in ten quarters. 90% of the company's total revenue now comes from that one segment.\n\nThis curve says two things. First, *how big* the AI capital cycle is quantitatively — one NVIDIA segment in one quarter makes roughly twice what Lucent made in all of 1999. Second, the curve's quarterly trajectory is a function of *supply constraint* — if there were quarters where NVIDIA shipped less, it wasn't because demand was missing. It was because there weren't enough GPUs to ship.\n\nFor GPU supply to flow, two things must unlock simultaneously. **HBM** and **CoWoS**. NVIDIA makes neither. Neither is made in the United States. One comes from Korea. The other comes from Taiwan.\n\nSo this curve — on the surface NVIDIA's revenue — is actually *the curve of how much Korean and Taiwanese supply unlocked*.",
        },
        {
          type: "chart",
          chart: {
            id: "nvda-dc-revenue",
            title: "NVIDIA 데이터센터 분기 매출 (FY23 Q4 → FY26 Q2, $B)",
            titleEn: "NVIDIA Data Center Quarterly Revenue (FY23 Q4 → FY26 Q2, $B)",
            caption:
              "출처: NVIDIA quarterly earnings releases (SEC 8-K). FY26 기준 데이터센터가 총 매출의 ~90%. 분기 sequential 성장 둔화가 시작되는 시점이 사이클 변곡점.",
            captionEn:
              "Source: NVIDIA quarterly earnings releases (SEC 8-K). Data center ~90% of total revenue as of FY26. The inflection point will be the quarter where sequential growth visibly decelerates.",
            data: [
              { quarter: "FY23Q4", revenue: 4.3 },
              { quarter: "FY24Q1", revenue: 4.3 },
              { quarter: "FY24Q2", revenue: 10.3 },
              { quarter: "FY24Q3", revenue: 14.5 },
              { quarter: "FY24Q4", revenue: 18.4, event: "H100 ramp" },
              { quarter: "FY25Q1", revenue: 22.6 },
              { quarter: "FY25Q2", revenue: 26.3 },
              { quarter: "FY25Q3", revenue: 30.8 },
              { quarter: "FY25Q4", revenue: 35.6 },
              { quarter: "FY26Q1", revenue: 39.1 },
              { quarter: "FY26Q2", revenue: 46.7, event: "Blackwell 본격 ramp" },
            ],
            annotations: [
              { quarter: "FY24Q4", label: "H100 본격 ramp", labelEn: "H100 ramp" },
              { quarter: "FY26Q2", label: "Blackwell 시작", labelEn: "Blackwell ramp" },
            ],
          },
        },
      ],
    },
    // ── 2. SK하이닉스가 처음 삼성을 넘었을 때 ────────────────────────────────
    {
      heading: "SK하이닉스가 처음 삼성을 넘었을 때",
      headingEn: "When SK Hynix Passed Samsung — For the First Time",
      blocks: [
        {
          type: "text",
          body: "2025년 1분기. SK하이닉스의 메모리 매출이 사상 처음으로 삼성전자를 추월했다. KOSPI 관점에서 보면 이건 단순한 분기 데이터가 아니다. **40년 만의 권력 이동을 처음 증명한 분기**다.\n\n그 권력의 이름은 HBM(High Bandwidth Memory)이다. AI 학습용 GPU 위에 12층, 16층으로 쌓이는 메모리. 일반 DRAM 가격의 3~5배. NVIDIA H100 한 장에 80GB, B100·B200에는 192GB가 들어간다. GPU의 본질적 가치는 절반 이상이 그 위에 쌓인 HBM에서 나온다.\n\nHBM 시장은 사실상 듀오폴리 + 1이다. SK하이닉스, 삼성, 마이크론. 2025년 권력 이동의 정점은 2025년 2분기 — SK하이닉스 **62%**, 삼성 **17%**, 마이크론 **21%**(Counterpoint Research). 1년 전(2024년 2분기)에는 SK하이닉스 약 50%, 삼성 41%, 마이크론 9%였다. 단 4분기 만에 삼성의 점유율이 24%p 사라졌다.\n\n무엇이 일어났나. **2024~25년 삼성은 NVIDIA의 HBM3E 12-Hi 퀄 통과에 실패했다.** NVIDIA는 GPU 한 장에 HBM 8~12개를 쌓는데, 그 안정성이 GPU 전체의 신뢰성을 결정한다. 발열 제어, 신호 무결성, TSV(through-silicon via) 수율 — 삼성이 SK하이닉스보다 일관되게 한 세대 뒤처졌다. 그 사이 마이크론이 차분히 점유를 늘렸다.\n\n**그러나 2025년 후반에 흐름이 바뀌었다.** 삼성이 마침내 NVIDIA의 HBM3E 12-Hi 퀄 통과 — Blackwell B200·B300 일부 SKU에 채택되기 시작했다. 2025년 3분기 → 4분기 → 2026년 1분기까지 점유율이 단조 회복했다.\n\n- **2025년 2분기**: SK 62% / 삼성 17% / 마이크론 21%\n- **2025년 3분기**: SK 60% / 삼성 21% / 마이크론 19%\n- **2025년 4분기**: SK 57% / 삼성 26% / 마이크론 17% — 삼성 HBM3E 12-Hi NVIDIA 출하 본격화\n- **2026년 1분기**: SK 52% / 삼성 32% / 마이크론 16%\n\n3분기 만에 **삼성 점유율 +15%p 회복**. **듀오폴리가 다시 만들어지고 있다.** 그러나 SK하이닉스는 여전히 52%로 선두이고, **진짜 분기점은 HBM4**(2026년 하반기 Rubin과 함께 양산)다. 거기서 두 회사의 거리가 다시 결정된다.\n\n시장은 이걸 \"한국 vs 한국\"의 싸움으로 본다. 더 정확히는 — **NVIDIA의 퀄 통과 결정 한 번이 한국 메모리 매출 수조 원을 분기마다 한 회사에서 다른 회사로 옮기는** 사건이다.",
          bodyEn:
            "Q1 2025. SK Hynix's memory revenue passed Samsung's for the first time in history. Viewed from KOSPI, this isn't just a quarterly data point. It is **the first proof of a 40-year power shift**.\n\nThat power has a name: HBM (High Bandwidth Memory). The memory stacked 12 or 16 layers high on top of AI training GPUs. Priced at 3-5x normal DRAM. NVIDIA H100 carries 80GB; B100/B200 carries 192GB. More than half of a GPU's essential value comes from the HBM stacked on top.\n\nThe HBM market is effectively a duopoly + 1. SK Hynix, Samsung, Micron. The peak of the 2025 power shift was Q2 2025 — SK Hynix **62%**, Samsung **17%**, Micron **21%** (Counterpoint Research). A year earlier (Q2 2024): SK Hynix ~50%, Samsung 41%, Micron 9%. In four quarters, Samsung lost 24 percentage points.\n\nWhat happened? *In 2024-25 Samsung failed NVIDIA's HBM3E 12-Hi qualification.* NVIDIA stacks 8-12 HBM modules on each GPU; their reliability determines the entire GPU's reliability. Thermal control, signal integrity, TSV (through-silicon via) yield — Samsung was a generation behind SK Hynix on each. Meanwhile, Micron quietly built share.\n\n*But the narrative flipped in late 2025*. Samsung finally passed NVIDIA's HBM3E 12-Hi qualification — adopted into select Blackwell B200/B300 SKUs. From Q3'25 through Q4'25 to Q1 2026, share recovered monotonically:\n\n- **Q2 2025**: SK 62% / Samsung 17% / Micron 21%\n- **Q3 2025**: SK 60% / Samsung 21% / Micron 19%\n- **Q4 2025**: SK 57% / Samsung 26% / Micron 17% — *Samsung HBM3E 12-Hi NVDA shipments scale*\n- **Q1 2026**: SK 52% / Samsung 32% / Micron 16%\n\nIn three quarters, **Samsung recovered +15pp**. *The duopoly is being rebuilt*. But SK Hynix still leads at 52%, and *the real inflection is HBM4* (ramping H2 2026 with Rubin) — that's where the distance between the two is decided again.\n\nThe market sees this as \"Korea vs Korea.\" More precisely: *NVIDIA's single qualification decision moves trillions of Korean won in memory revenue from one company to another, every quarter*.",
        },
        {
          type: "chart",
          chart: {
            id: "hbm-share",
            title: "HBM 점유율 분기 추이 (Q2'24 → Q1'26) — 삼성의 V자 회복",
            titleEn: "HBM Market Share Quarterly Trajectory (Q2'24 → Q1'26) — Samsung's V-Shape Recovery",
            caption:
              "출처: Counterpoint Research, TrendForce. 삼성 점유율 41% (Q2'24) → 17% (Q2'25, 바닥) → 32% (Q1'26). Q3-Q4 2025에 HBM3E 12-Hi NVIDIA 퀄 통과로 회복 시작, Blackwell B200/B300 출하 본격화. SK하이닉스 여전히 52%로 선두. 다음 분기점은 HBM4 (Rubin 2026 H2).",
            captionEn:
              "Sources: Counterpoint Research, TrendForce. Samsung's share: 41% (Q2'24) → 17% (Q2'25 trough) → 32% (Q1'26). HBM3E 12-Hi NVIDIA qualification passed in late 2025; Blackwell B200/B300 shipments scaled. SK Hynix still leads at 52%. Next inflection: HBM4 (Rubin H2 2026).",
            data: [
              { quarter: "Q2'24", skhynix: 50, samsung: 41, micron: 9 },
              { quarter: "Q3'24", skhynix: 54, samsung: 35, micron: 11 },
              { quarter: "Q4'24", skhynix: 58, samsung: 28, micron: 14 },
              { quarter: "Q1'25", skhynix: 61, samsung: 22, micron: 17 },
              { quarter: "Q2'25", skhynix: 62, samsung: 17, micron: 21 },
              { quarter: "Q3'25", skhynix: 60, samsung: 21, micron: 19 },
              { quarter: "Q4'25", skhynix: 57, samsung: 26, micron: 17 },
              { quarter: "Q1'26", skhynix: 52, samsung: 32, micron: 16 },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "다음 분기점 — 삼성 HBM4 NVIDIA 퀄 (Rubin 2026 H2)",
            headingEn: "Next Inflection — Samsung HBM4 NVIDIA Qualification (Rubin H2 2026)",
            body: "HBM3E 12-Hi 퀄 통과로 삼성이 17%에서 32%로 회복했지만 — 진짜 분기점은 HBM4다. NVIDIA Rubin이 2026년 하반기 출시되며 HBM4를 쓴다. 삼성이 HBM4 12-Hi·16-Hi 첫 양산 분기에 NVIDIA 퀄을 통과하느냐 — 그게 듀오폴리 회복 vs SK하이닉스 단독 체제의 갈림길이다. UBS는 SK하이닉스가 HBM4 NVIDIA 공급의 70%를 점유할 것으로 추정한다. 삼성이 이 비율을 50:50으로 끌어올릴 수 있으면 KOSPI 메모리 듀오폴리가 완전 복원된다.",
            bodyEn:
              "Samsung recovered from 17% → 32% via HBM3E 12-Hi qualification — but the real inflection is HBM4. NVIDIA Rubin launches H2 2026 using HBM4. Whether Samsung passes NVIDIA qualification in the first quarters of HBM4 12-Hi/16-Hi ramp decides between full duopoly restoration vs SK Hynix monopoly. UBS estimates SK Hynix at 70% of HBM4 supply to NVIDIA; if Samsung pulls that to 50:50, the KOSPI memory duopoly is fully restored.",
          },
        },
      ],
    },
    // ── 3. CoWoS — 대만이 쥔 다른 손 ──────────────────────────────────────────
    {
      heading: "CoWoS — 대만이 쥔 다른 손",
      headingEn: "CoWoS — The Other Hand, Held by Taiwan",
      blocks: [
        {
          type: "text",
          body: "HBM이 한국이라면, CoWoS는 대만이다.\n\nCoWoS(Chip-on-Wafer-on-Substrate)는 GPU 다이와 HBM 스택을 하나의 인터포저 위에 패키징하는 TSMC의 첨단 패키징 공정이다. 이 공정이 없으면 GPU는 칩 한 장으로 존재할 수 없다. NVIDIA의 H100·B100·B200·Rubin — 모든 데이터센터 GPU가 CoWoS를 거친다.\n\nCoWoS는 사실상 TSMC 단독 공급이다. Samsung과 Intel이 비슷한 패키징을 시도하지만, 수율과 캐파에서 의미 있는 경쟁자가 없다. 그래서 NVIDIA가 2025~26년에 **얼마나 출하할 수 있는가**는 TSMC의 CoWoS 캐파에 의해 결정된다.\n\n캐파 곡선:\n- 2024년 말: 월 약 35,000 웨이퍼\n- 2025년 말: 월 약 70,000 웨이퍼(+100%)\n- 2026년 말: 월 약 130,000 웨이퍼(+86%)\n- 연평균 성장률: 약 80%\n\nNVIDIA가 그 캐파의 **60% 이상을 선점**했다(2025~26년 기준). AMD MI300X, Broadcom TPU, AWS Trainium 등 다른 ASIC들은 나머지 40% 안에서 경쟁한다. TSMC의 자본지출은 2025년 $40~42B, 2026~27년 $50B. 그중 절반 이상이 CoWoS 캐파 증설에 들어간다.\n\n이 사실의 함의: **AI 사이클의 분기별 궤적은 미국 자본의 의지가 아니라 대만 공장의 캐파 증설 곡선에 의해 결정된다.** 빅테크가 1조 달러를 약속해도, TSMC가 캐파를 못 늘리면 그 자본은 분기 매출로 전환되지 않는다.",
          bodyEn:
            "If HBM is Korea, CoWoS is Taiwan.\n\nCoWoS (Chip-on-Wafer-on-Substrate) is TSMC's advanced packaging process that mounts a GPU die and HBM stacks on a single interposer. Without it, a GPU does not exist as a single chip. NVIDIA H100, B100, B200, Rubin — every data center GPU passes through CoWoS.\n\nCoWoS is, in practice, sole-sourced from TSMC. Samsung and Intel attempt similar packaging, but neither has meaningful capacity or yield. So how much NVIDIA can *ship* in 2025-26 is defined by TSMC's CoWoS capacity.\n\nThe capacity curve:\n- End 2024: ~35,000 wafers/month\n- End 2025: ~70,000 wafers/month (+100%)\n- End 2026: ~130,000 wafers/month (+86%)\n- CAGR: ~80%\n\nNVIDIA pre-allocated **more than 60%** of that capacity (2025-26 basis). Meaning AMD MI300X, Broadcom TPUs, AWS Trainium and other ASICs compete for the remaining 40%. TSMC capex: $40-42B in 2025, $50B in 2026-27 — more than half going to CoWoS expansion.\n\nThe implication: **the AI cycle's quarterly trajectory is defined not by US capital's will but by Taiwanese factory capacity ramp curves**. Big Tech can promise a trillion dollars, but if TSMC can't add capacity, that capital does not convert into quarterly revenue.",
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "When the supply chain says no, the cycle stops. No amount of capital can argue with a wafer that doesn't exist.",
            bodyEn: "When the supply chain says no, the cycle stops. No amount of capital can argue with a wafer that doesn't exist.",
            heading: "— Semiconductor industry maxim, repeated by TSMC executives at OFC 2025",
            headingEn: "— Semiconductor industry maxim, repeated by TSMC executives at OFC 2025",
          },
        },
      ],
    },
    // ── 4. 영국 제국의 메아리 ─────────────────────────────────────────────────
    {
      heading: "영국 제국의 메아리 — 면화와 아편",
      headingEn: "Echo of the British Empire — Cotton and Opium",
      blocks: [
        {
          type: "text",
          body: "이 의존을 이해하려면 한 가지 역사적 패턴을 봐야 한다. **역사상 어떤 패권도 자기 영토 안에서 완결된 적이 없다.**\n\n19세기 영국 제국을 보자. 산업혁명을 만든 핵심 자원은 두 가지였다 — 면화와 아편. 면화는 랭커셔의 방직공장을 돌렸고, 아편은 중국과의 무역적자를 메우기 위한 무기였다(영국이 중국 차를 수입하며 만들어진 적자). 그런데 영국은 면화를 직접 키우지 못했다 — 미국 남부의 노예 농장에서 수입했다. 아편도 마찬가지로 인도 벵골에서 생산해 가져왔다.\n\n영국 제국의 산업 동력은 미국 면화에 의존했다. 영국 제국의 무역 흑자는 인도 아편에 의존했다. 두 의존이 모두 사라진 순간 — 1861~65년 미국 남북전쟁으로 면화 공급이 끊기고, 청일전쟁 이후 중국이 아편을 통제하면서 — 영국 제국 경제의 두 다리가 무너졌다.\n\n같은 패턴이 20세기 미국 석유 패권에도 있었다. 미국은 1970년대까지 석유의 50% 이상을 수입했고, 핵심 공급자는 사우디아라비아였다. 1973년 사우디가 석유 금수 조치를 했을 때 — 미국 패권은 한 분기 만에 흔들렸다.\n\n그리고 2026년 미국 AI 패권을 보자. **자본은 미국(빅테크), 모델은 미국(OpenAI, Anthropic), 칩 설계도 미국(NVIDIA, AMD, Broadcom). 그러나 HBM은 한국, CoWoS는 대만이다.** 산업혁명 시대 영국이 면화와 아편에 의존한 것과 같은 자리다.\n\n이건 패권의 결함이 아니다. 패권의 **구조**다. **진짜 강한 패권은 자기 영토 안에서 자급자족하지 않는다.** 자급자족하려고 시도하면, 그 시도 자체가 패권의 비용이 된다(CHIPS Act가 바로 그 시도다). 의존을 인정하고 안정화하는 쪽이 — 의존을 풀려는 시도보다 패권을 더 오래 유지시킨다.",
          bodyEn:
            "To understand this dependence, we have to see one historical pattern. **No hegemon in history has ever been self-sufficient within its own territory.**\n\nLook at 19th-century Britain. The two core resources of the Industrial Revolution were cotton and opium. Cotton fed the Lancashire mills. Opium was a weapon to close Britain's trade deficit with China (the deficit caused by tea imports). But Britain didn't grow cotton. It imported from American slave plantations. Britain didn't grow opium either. It produced opium in Bengal, India.\n\nThe industrial engine of the British Empire depended on American cotton. The trade surplus of the British Empire depended on Indian opium. The moment both dependencies vanished — the American Civil War (1861-65) cut off cotton supply, and post-Sino-Japanese War China regained control of opium — two core legs of British imperial economics collapsed.\n\nThe same pattern held for 20th-century American oil hegemony. The US imported 50%+ of its oil through the 1970s. The core supplier was Saudi Arabia. When Saudi Arabia imposed the 1973 oil embargo, American hegemony shook within one quarter.\n\nNow look at American AI hegemony in 2026. **Capital is American (Big Tech). Models are American (OpenAI, Anthropic). Chip design is American (NVIDIA, AMD, Broadcom). But HBM is Korean. CoWoS is Taiwanese.** Same position as Britain depending on cotton and opium during the Industrial Revolution.\n\nThis is not a flaw of hegemony. It is the *structure* of hegemony. **A truly strong hegemon does not self-supply within its own territory.** When it tries to, the attempt itself becomes the cost of hegemony (CHIPS Act is that attempt). Accepting the dependence and stabilizing it — rather than trying to break it — usually preserves hegemony longer.",
        },
      ],
    },
    // ── 5. ASIC의 반격 + CHIPS Act ────────────────────────────────────────────
    {
      heading: "ASIC의 반격, 그리고 CHIPS Act가 풀려는 매듭",
      headingEn: "The ASIC Counter-Attack — and the Knot CHIPS Act Tries to Untie",
      blocks: [
        {
          type: "text",
          body: "패권의 의존을 풀려는 시도는 두 갈래다. 하나는 **NVIDIA GPU 의존을 다른 칩으로 풀자** — ASIC. 다른 하나는 **한국·대만 공급망 의존을 미국 내 생산으로 풀자** — CHIPS Act.\n\n**ASIC의 반격.** Broadcom이 Google TPU, Meta MTIA, OpenAI Titan을 만든다. Marvell이 AWS Trainium2·3, Microsoft Maia를 만든다. 둘 다 NVIDIA 의존을 자사 ASIC으로 대체하려는 하이퍼스케일러의 결정이다.\n\nBroadcom AI 매출: FY25 4분기 $6.5B → FY26 1분기 $8.2B(+74% YoY), 수주잔고 $73B. CEO Hock Tan은 2027년까지 \"AI 매출 $100B 가시권\"이라고 발언했다. 이게 현실이 되면, Broadcom AI 매출이 NVIDIA 데이터센터 매출의 절반에 가까워진다. 산업 전체에서 ASIC vs GPU의 비중이 빠르게 이동 중이다 — 2026년 ASIC 기반 AI 서버가 시장의 28%를 차지할 전망(TrendForce).\n\n그런데 — **ASIC도 결국 TSMC 패키징에 기댄다.** Broadcom의 Google TPU도, Marvell의 AWS Trainium도, 결국 TSMC의 CoWoS 라인을 거친다. ASIC이 NVIDIA 점유율을 빼앗아도 **대만 의존은 풀리지 않는다.** 같은 호수 안에서 물고기만 바뀌는 셈이다.\n\n**CHIPS Act**가 풀려는 매듭은 더 근본적이다. TSMC 애리조나 Fab 21(3nm, 2024년 가동), Samsung 텍사스 테일러(4nm, 2025년), 마이크론 뉴욕 보이시·클레이(DRAM, 2026~27년). 합산 자본지출 $200B+. 의도는 미국 본토에서 첨단 공정을 생산해 한국·대만 의존을 줄이겠다는 것이다.\n\n하지만 산수가 안 맞는다. 미국 신규 캐파 증설 속도는 연 약 25%, AI 수요 증가 속도는 연 약 60%. **수요가 캐파보다 2배 이상 빠르게 증가한다.** CHIPS Act는 의존을 풀어주는 게 아니라 의존의 **비율**을 약간 늦출 뿐이다. 단기 5년 안에 한국·대만 의존이 풀릴 수 없다는 게 정량적 결론이다.\n\n한국 자본시장 입장에선 좋은 소식이다. 미국이 의존을 풀려고 더 노력할수록, 그 성공이 더 늦어질수록 — SK하이닉스·삼성·TSMC의 가격 결정력은 더 오래 간다.",
          bodyEn:
            "Two attempts try to unwind the dependence. One says *let's break NVIDIA's GPU monopoly with other chips* — ASICs. The other says *let's break the Korea-Taiwan supply chain monopoly by building in the US* — CHIPS Act.\n\n**The ASIC counter-attack.** Broadcom makes Google TPU, Meta MTIA, OpenAI Titan. Marvell makes AWS Trainium2/3, Microsoft Maia. Both are hyperscaler decisions to replace NVIDIA dependence with in-house silicon.\n\nBroadcom AI revenue: FY25 Q4 $6.5B → FY26 Q1 $8.2B (+74% YoY), backlog $73B. CEO Hock Tan stated \"line of sight to $100B AI revenue by 2027.\" If real, Broadcom's AI revenue would be roughly half of NVDA's DC revenue. The ASIC vs GPU split is shifting fast across the industry — ASIC-based AI servers projected to be 28% of the market by 2026 (Trendforce).\n\nBut — *ASICs also depend on TSMC packaging in the end*. Broadcom's Google TPU, Marvell's AWS Trainium — all pass through TSMC's CoWoS line. Even when ASICs take share from NVDA, *the Taiwan dependence does not break*. The fish change in the same lake.\n\n**The knot CHIPS Act tries to untie** is more fundamental. TSMC Arizona Fab 21 (3nm, 2024 production), Samsung Taylor TX (4nm, 2025), Micron Boise/Clay NY (DRAM, 2026-27). Combined $200B+ capex. The intent — produce leading-edge nodes on US soil and reduce Korea/Taiwan dependence.\n\nBut the math doesn't work. US new capacity build pace: ~25% per year. AI demand growth pace: ~60% per year. *Demand is growing more than 2x as fast as capacity*. CHIPS Act doesn't unwind dependence — it merely slows the *ratio* slightly. The quantitative conclusion: Korea-Taiwan dependence cannot break within the next 5 years.\n\nFrom the Korean capital markets perspective, this is good news. The more the US tries to break the dependence, and the more those attempts are delayed, the longer SK Hynix, Samsung, and TSMC keep their pricing power.",
        },
        {
          type: "table",
          table: {
            id: "ai-chip-dependency-matrix",
            title: "AI 칩 supply chain 의존도 매트릭스",
            titleEn: "AI Chip Supply Chain Dependency Matrix",
            headers: ["층위", "기능", "주공급자 (국가)", "대안 가능성", "단기 풀림 여부"],
            headersEn: ["Layer", "Function", "Primary Supplier (Country)", "Alternative Possibility", "Short-term Unwind?"],
            rows: [
              ["설계 (GPU)", "NVIDIA Blackwell/Rubin", "NVDA (US)", "AMD MI300X · Broadcom/Marvell ASIC", "부분 (ASIC 점유 확대)"],
              ["설계 (CPU)", "x86, ARM", "Intel·AMD·ARM (US/UK)", "다수 경쟁", "이미 다극"],
              ["HBM", "GPU 위 메모리 스택", "SK하이닉스 52% / 삼성 32% (KR)", "Micron 16% (다극화 약함)", "낮음 (5년+ 의존)"],
              ["DRAM", "기본 메모리", "Samsung 40% · SK하이닉스 30% (KR)", "Micron · 중국 CXMT", "낮음 (한국 듀오폴리)"],
              ["NAND", "스토리지", "Samsung 35% · SK하이닉스 20% (KR)", "Kioxia · WD/SanDisk · Micron", "이미 다극"],
              ["파운드리 (3nm-)", "GPU/CPU 제조", "TSMC ~90% (TW)", "Samsung Foundry · Intel Foundry", "매우 낮음"],
              ["CoWoS 패키징", "GPU+HBM 통합", "TSMC ~100% (TW)", "Samsung · Intel 시도", "매우 낮음 (3년+)"],
              ["EUV 장비", "노광", "ASML 100% (NL)", "없음", "불가 (EUV 단독)"],
              ["DUV 장비", "노광", "ASML·Nikon·Canon (NL/JP)", "기존 다극", "이미 다극"],
            ],
            rowsEn: [
              ["Design (GPU)", "NVIDIA Blackwell/Rubin", "NVDA (US)", "AMD MI300X · Broadcom/Marvell ASIC", "Partial (ASIC share gains)"],
              ["Design (CPU)", "x86, ARM", "Intel·AMD·ARM (US/UK)", "Many competitors", "Already multi-polar"],
              ["HBM", "GPU-stacked memory", "SK Hynix 52% / Samsung 32% (KR)", "Micron 16% (weak diversification)", "Low (5+ year dependence)"],
              ["DRAM", "Base memory", "Samsung 40% · SK Hynix 30% (KR)", "Micron · China CXMT", "Low (Korean duopoly)"],
              ["NAND", "Storage", "Samsung 35% · SK Hynix 20% (KR)", "Kioxia · WD/SanDisk · Micron", "Already multi-polar"],
              ["Foundry (3nm-)", "GPU/CPU manufacture", "TSMC ~90% (TW)", "Samsung Foundry · Intel Foundry", "Very low"],
              ["CoWoS packaging", "GPU+HBM integration", "TSMC ~100% (TW)", "Samsung · Intel attempts", "Very low (3+ years)"],
              ["EUV equipment", "Lithography", "ASML 100% (NL)", "None", "Impossible (EUV sole)"],
              ["DUV equipment", "Lithography", "ASML·Nikon·Canon (NL/JP)", "Existing multi-polar", "Already multi-polar"],
            ],
            caption: "출처: 각사 분기 데이터, Counterpoint, TrendForce. 5개 핵심 층위 중 3개(HBM, 파운드리, CoWoS)가 한국·대만 단일 의존. 단기 풀림 불가.",
            captionEn: "Sources: Company quarterly data, Counterpoint, TrendForce. 3 of 5 critical layers (HBM, foundry, CoWoS) are single-sourced from Korea or Taiwan. Short-term unwind impossible.",
          },
        },
      ],
    },
    // ── 6. 결론 ───────────────────────────────────────────────────────────────
    {
      heading: "결론 — 패권은 결국 의존이다",
      headingEn: "Conclusion — Hegemony, in the End, Is Dependence",
      blocks: [
        {
          type: "text",
          body: "이 메모의 명제는 단순하다 — **진짜 강한 패권은 자기 영토 안에서 자급자족하지 않는다.**\n\n영국 제국이 그랬다. 산업혁명의 동력이 미국 면화에 의존했고, 무역 흑자가 인도 아편에 의존했다. 의존 자체가 패권을 약하게 만든 게 아니라, 그 의존을 **안정화하는 능력**이 패권을 길게 유지시켰다.\n\n미국 AI 패권도 같다. NVIDIA 데이터센터 매출의 매 분기가 — 한국 SK하이닉스의 HBM 출하와 대만 TSMC의 CoWoS 캐파에 직접 함수로 묶여 있다. 그 사실은 패권의 약점이 아니다. 패권의 **구조**다.\n\n투자자 관점에서는 두 가지 함의가 있다.\n\n**첫째, 한국 메모리 듀오폴리는 사이클이 도는 동안 가격 결정력을 유지한다.** CHIPS Act가 풀려고 노력해도, 수요가 캐파보다 2배 빠르게 증가하는 한, **SK하이닉스 + 삼성 합산 HBM 점유율 84%**(2026년 1분기 기준)는 단기에 흔들리지 않는다. KOSPI 사상 최고가는 우연이 아니라 빅테크 자본지출의 함수다.\n\n**둘째, 단일 변수 — 삼성 HBM4 NVIDIA 퀄 통과(Rubin 2026년 하반기)가 한국 시장 2026년 하반기 최대 이벤트다.** HBM3E 12-Hi 퀄은 이미 통과했다(17% → 32% 회복). 그러나 메모리 매출 구조를 다시 짜는 건 HBM4다. 통과하면 듀오폴리가 50:50 가까이 회복되고 삼성 +20~30% 모멘텀. 실패하면 SK하이닉스가 HBM4 세대를 가져가며 단독 체제를 굳힌다. 어느 쪽이 되든 결정은 **NVIDIA가 한다.** 한국 시장의 가장 큰 단일 결정 변수가 미국 회사의 퀄 결정이라는 사실 자체가 — 의존의 구조를 가장 명확히 보여준다.\n\nLucent가 1999년에 만든 자기 매출 회로(Memo 1)는 **자본의 회로**였다. SK하이닉스와 TSMC가 2026년에 만들고 있는 건 **공급의 회로**다. 미국 자본은 한국·대만 공급을 거쳐야만 미국 매출이 된다.\n\n**회로는 미국 안에서 완결되지 않는다.** 영국 제국이 그랬던 것처럼.",
          bodyEn:
            "The single proposition of this memo is simple — **a truly strong hegemon does not self-supply within its own territory**.\n\nThe British Empire was like that. Its industrial engine depended on American cotton. Its trade surplus depended on Indian opium. The dependence did not weaken the empire — the *capacity to stabilize* that dependence is what extended the empire's life.\n\nAmerican AI hegemony is the same. Every quarter of NVDA's data center revenue is a direct function of Korean SK Hynix HBM shipments and Taiwanese TSMC CoWoS capacity. That fact is not a weakness of hegemony. It is its *structure*.\n\nFrom an investor's view, two implications.\n\nFirst, **the Korean memory duopoly maintains pricing power while the cycle runs**. No matter how hard CHIPS Act tries, as long as demand grows 2x faster than capacity, **SK Hynix + Samsung combined HBM share of 84%** (Q1'26 basis) does not shake in the short term. KOSPI's record highs are not coincidence — they are a function of Big Tech capex.\n\nSecond, **the single catalyst — Samsung HBM4 NVIDIA qualification (Rubin H2 2026) — is the largest single event for the Korean market in H2 2026**. HBM3E 12-Hi was passed (Samsung recovered 17% → 32%). But HBM4 reshapes memory revenue structure. Pass = duopoly restored near 50:50, Samsung +20-30% catalyst. Fail = SK Hynix takes the HBM4 generation and locks in monopoly. Either way, *NVIDIA decides*. The fact that the largest single decision variable for the Korean market is *an American company's qualification verdict* — that itself shows the structure of dependence more clearly than anything.\n\nThe self-revenue circuit Lucent ran in 1999 (Memo 1) was *a capital circuit*. What SK Hynix and TSMC are running in 2026 is *a supply circuit*. American capital must pass through Korean and Taiwanese supply to become American revenue.\n\n*The circuit does not close within America.* Just as it did not for the British Empire.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "다음 메모 — 다음 병목 (광)",
            headingEn: "Next Memo — The Next Bottleneck (Optical)",
            body: "GPU 다음 병목은 광(光)이다. 800G → 1.6T 광 트랜시버 전환이 2026~27년의 핵심 사이클이다. Lumentum, Coherent, Astera Labs — 골드러시 시대 곡괭이를 판 Levi Strauss의 운율. 다음 메모에서 다룬다.",
            bodyEn:
              "The next bottleneck after GPU is optical. The 800G → 1.6T optical transceiver transition is the 2026-27 core cycle. Lumentum, Coherent, Astera Labs — the Levi Strauss gold-rush echo. Next memo.",
          },
        },
      ],
    },
  ],
  references: [
    {
      id: 1,
      author: "NVIDIA Corporation",
      title: "Form 10-K Annual Report (FY2026) and quarterly 8-Ks",
      source: "SEC EDGAR",
      year: "2025-2026",
      url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001045810&type=10-K",
      note: "데이터센터 매출, 고객 집중도 (FY26 10-K: 단일 고객 22%, 또 한 고객 14%)",
    },
    {
      id: 2,
      author: "Counterpoint Research",
      title: "HBM Market Share Tracker (quarterly)",
      source: "Counterpoint",
      year: "2025",
      url: "https://www.counterpointresearch.com/insights/hbm-market-share-tracker/",
    },
    {
      id: 3,
      author: "TrendForce",
      title: "DRAM/HBM Industry Reports",
      source: "TrendForce",
      year: "2025-2026",
      url: "https://www.trendforce.com/",
    },
    {
      id: 4,
      author: "SemiWiki",
      title: "CoWoS Capacity Set to Skyrocket by 2026",
      source: "SemiWiki",
      year: "2025",
      url: "https://semiwiki.com/forum/threads/cowos-capacity-set-to-skyrocket-by-2026-massive-growth-in-advanced-packaging.21773/",
    },
    {
      id: 5,
      author: "TSMC",
      title: "Quarterly Earnings Releases (AI/HPC revenue mix)",
      source: "TSMC Investor Relations",
      year: "2025-2026",
      url: "https://investor.tsmc.com/",
    },
    {
      id: 6,
      author: "UBS Equity Research",
      title: "Korea Memory Sector — HBM4 outlook",
      source: "UBS Research",
      year: "2026",
      note: "SK하이닉스 HBM4 NVDA 공급 70% 점유 추정",
    },
    {
      id: 7,
      author: "Broadcom Inc.",
      title: "Quarterly Earnings Releases (AI revenue)",
      source: "Broadcom IR / SEC EDGAR",
      year: "2025-2026",
      url: "https://investors.broadcom.com/",
    },
    {
      id: 8,
      author: "Marvell Technology",
      title: "Quarterly Earnings Releases (Custom AI silicon)",
      source: "Marvell IR / SEC EDGAR",
      year: "2025-2026",
      url: "https://investor.marvell.com/",
    },
    {
      id: 9,
      author: "Beckert, S.",
      title: "Empire of Cotton: A Global History",
      source: "Knopf",
      year: "2014",
      note: "19세기 영국 제국의 미국 면화 의존성 — 패권과 의존의 역사적 패턴",
    },
    {
      id: 10,
      author: "KED Global",
      title: "SK Hynix Surpasses Samsung in Memory Revenue (Q1 2025)",
      source: "Korea Economic Daily Global",
      year: "2025",
      url: "https://www.kedglobal.com/",
    },
    {
      id: 11,
      author: "US Department of Commerce",
      title: "CHIPS and Science Act — Implementation Updates",
      source: "USDOC",
      year: "2025-2026",
      url: "https://www.commerce.gov/issues/chips",
      note: "TSMC Arizona, Samsung Taylor, Micron NY/Idaho — capex 약속 및 진척",
    },
    {
      id: 12,
      author: "ASML Holding NV",
      title: "Annual Report 2025 — EUV/DUV backlog",
      source: "ASML IR",
      year: "2025",
      url: "https://www.asml.com/en/investors",
      note: "EUV 48대 출하, backlog €38.8B (FY25)",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #8 — AI Capital Cycle ⑥ — 와트가 칩을 이긴 날 (전력)
// ══════════════════════════════════════════════════════════════════════════════

const aiCycle6: NoteData = {
  slug: "ai-capital-cycle-6",
  category: "macro",
  status: "published",
  series: "ai-capital-cycle",
  seriesOrder: 6,
  title: "AI 자본 사이클 ⑥ — 와트가 칩을 이긴 날",
  titleEn: "AI Capital Cycle ⑥ — When Watts Beat Chips",
  description:
    "AI 사이클의 결정 변수는 칩이 아니라 와트(GW)다. 미국 송전망 연결 대기열 2,290GW 적체, PJM 용량 경매 가격 +833%, MSFT가 Three Mile Island를 20년 PPA로 깨운다. 1882년 에디슨의 Pearl Street가 산업혁명을 정의했듯, 2026년 데이터센터 전력이 AI 사이클을 정의한다.",
  descriptionEn:
    "The AI cycle's binding variable is not chips but GWs. US interconnection queue stuck at 2,290 GW. PJM capacity prices +833%. Microsoft signs a 20-year PPA to restart Three Mile Island. Just as Edison's 1882 Pearl Street defined the industrial revolution, 2026 data center power defines the AI cycle.",
  date: "2026-05-29",
  readingMinutes: 19,
  keyPoints: [
    "글로벌 데이터센터 전력 수요: 485 TWh(2025) → 950 TWh(2030), IEA. 미국·중국이 증가분의 80%.",
    "미국 데이터센터 전력 점유율: 4%(2023) → 9~17%(2030), EPRI 추정치 60% 상향 조정.",
    "미국 송전망 연결 대기열 2,290GW — 현 가동 발전 용량의 약 2배. 평균 대기 4년 이상.",
    "PJM 2025~26년 용량 경매 가격 +833%. 버지니아 데이터센터 알리(Alley)가 단일 변수.",
    "원자력 르네상스: MSFT-Constellation Three Mile Island 20년 PPA(835MW, 2027년 재가동), AWS-Talen Susquehanna 1.92GW.",
    "한국 용인 반도체 클러스터 10GW(원전 10기 규모) 필요, 현재 공급 0.6GW. 송전망 3법 통과, i-SMR 2028년 표준설계 승인 목표.",
    "투자자가 봐야 할 핵심: PJM 다음 용량 경매 결과, 신규 원전 PPA 발표, Vertiv·Eaton·Quanta의 수주잔고.",
  ],
  keyPointsEn: [
    "Global data center power demand: 485 TWh (2025) → 950 TWh (2030), IEA. US+China account for 80% of the growth",
    "US data center share of total electricity: 4% (2023) → 9-17% (2030), EPRI. Forecast raised 60%",
    "US interconnection queue backlog: 2,290 GW (~2x current installed generation). Median wait 4+ years",
    "PJM 2025-26 capacity auction prices +833%. Virginia's Data Center Alley is the single variable",
    "Nuclear renaissance: MSFT-Constellation Three Mile Island 20-yr PPA (835MW, 2027 restart), AWS-Talen Susquehanna 1.92GW",
    "Korea Yongin cluster needs 10GW (equivalent to 10 reactors), currently 0.6GW. Grid 3-laws passed, i-SMR design approval targeted 2028",
    "Investor watch: PJM next capacity auction, new nuclear PPA announcements, Vertiv/Eaton/Quanta backlog",
  ],
  sections: [
    // ── 1. Pearl Street, 그리고 GW 산수 ───────────────────────────────────────
    {
      heading: "1882년 Pearl Street — 산업의 결정변수가 와트가 된 날",
      headingEn: "1882, Pearl Street — The Day Watts Became the Binding Variable",
      blocks: [
        {
          type: "text",
          body: "1882년 9월 4일, 토마스 에디슨이 맨해튼 Pearl Street에 세계 최초의 상업 발전소를 가동했다. 처음 며칠간 그가 켠 것은 단 85명의 고객, 400개의 전구뿐이었다. 그러나 그 작은 시작이 의미한 것은 — **산업혁명의 결정 변수가 그 순간부터 와트(W)가 됐다는 사실**이다. 공장이 얼마나 큰가가 아니라 얼마나 많은 전기를 공급받을 수 있느냐가 생산을 결정했다.\n\n2026년 AI 자본 사이클도 같은 변곡점에 도착했다. **결정 변수가 칩에서 와트로 옮겨갔다.**\n\nNVIDIA가 매 분기 GPU를 더 출하해도, 그 GPU를 돌릴 전기가 없으면 매출로 전환되지 않는다. Microsoft가 Stargate에 $500B를 약속해도 데이터센터에 송전선이 연결되지 않으면 그 약속은 스프레드시트 위에 머문다. 그래서 2026년의 AI 사이클은 — 빅테크 CFO의 자본지출 발표가 아니라 — **PJM 용량 경매 결과와 ERCOT 송전망 연결 대기열 길이**가 정의한다.\n\nIEA의 2026년 \"Electricity\" 보고서가 그 사실을 정량화했다. 글로벌 데이터센터 전력 수요는 **2025년 485 TWh에서 2030년 950 TWh로 두 배**가 된다. 미국과 중국이 증가분의 80%를 차지한다. EPRI는 미국 데이터센터의 전력 점유율 전망을 2023년 4%에서 2030년 **9~17%**로 60% 상향 조정했다.\n\n이 숫자가 의미하는 것: 전력은 더 이상 AI 사이클의 **부속 변수**가 아니다. **결정 변수**다.",
          bodyEn:
            "September 4, 1882. Thomas Edison powered up the world's first commercial generating station on Pearl Street in Manhattan. In its first days, it lit 400 light bulbs for 85 customers. But that small beginning meant one thing — *from that moment, the binding variable of the Industrial Revolution became the watt*. Not how big the factory was. How much electricity it could draw.\n\nThe 2026 AI capital cycle has arrived at the same inflection. **The binding variable has shifted from chips to watts.**\n\nEven if NVIDIA ships more GPUs every quarter, no electricity means no quarterly revenue. Even if Microsoft promises $500B to Stargate, no transmission line means the promise stays on a spreadsheet. So the 2026 AI cycle is defined not by Big Tech CFO capex announcements but by *PJM capacity auction results and ERCOT interconnection queue lengths*.\n\nThe IEA's 2026 Electricity report quantifies this. Global data center power demand doubles **from 485 TWh in 2025 to 950 TWh in 2030**. The US and China account for 80% of that growth. EPRI raised its forecast of US data center electricity share from 4% (2023) to **9-17% by 2030** — a 60% upward revision.\n\nWhat this means: power is no longer an *auxiliary variable* of the AI cycle. It is *the binding variable*.",
        },
        {
          type: "chart",
          chart: {
            id: "dc-power-demand",
            title: "글로벌 데이터센터 전력 수요 (2020-2030, TWh)",
            titleEn: "Global Data Center Electricity Demand (2020-2030, TWh)",
            caption:
              "출처: IEA Electricity 2026 / Energy and AI (2025), EPRI Powering Intelligence 2026. 기준 시나리오 950 TWh, 고시나리오 1,200 TWh. 미·중이 증가분의 80%.",
            captionEn:
              "Sources: IEA Electricity 2026 / Energy and AI (2025), EPRI Powering Intelligence 2026. Base scenario 950 TWh; high scenario 1,200 TWh. US+China account for 80% of growth.",
            data: [
              { year: "2020", base: 240, high: 240, low: 240 },
              { year: "2022", base: 320, high: 320, low: 320 },
              { year: "2024", base: 415, high: 415, low: 415 },
              { year: "2025", base: 485, high: 510, low: 470 },
              { year: "2026", base: 580, high: 650, low: 540 },
              { year: "2028", base: 760, high: 900, low: 670 },
              { year: "2030", base: 950, high: 1200, low: 800 },
            ],
          },
        },
      ],
    },
    // ── 2. 인터커넥션 큐 — 2,290 GW의 적체 ────────────────────────────────────
    {
      heading: "인터커넥션 큐 — 2,290 GW가 줄을 서 있다",
      headingEn: "The Interconnection Queue — 2,290 GW Waiting in Line",
      blocks: [
        {
          type: "text",
          body: "전력이 결정 변수가 됐다는 사실을 단 하나의 숫자로 보여주는 게 있다. 미국 송전망 연결 대기열이다.\n\n이 대기열은 새 발전소를 짓고 송전망에 연결하려고 신청한 프로젝트들의 줄이다. Lawrence Berkeley National Lab의 \"Queued Up 2025\" 보고서가 그 길이를 측정한다.\n\n**2024년 말 기준 2,290 GW.** 미국 전체 가동 발전 용량(약 1,300 GW)의 **거의 2배**다. 프로젝트 수 10,300개. 그중 발전 1,400 GW + 저장 890 GW.\n\n이게 무엇을 의미하는가. **미국이 전기를 더 만들 수 있는 캐파가 줄에 서 있다.** 단지 — 그 줄이 움직이지 않는다. 송전망 연결 신청부터 상업운전 개시(COD)까지의 중간값은 2000~2007년 2년 미만이었다. 2018~2024년에는 **4년 이상**으로 늘어났다. 2024년에만 112 GW의 태양광·저장 프로젝트가 대기열에서 **철회**됐다 — 너무 오래 기다릴 수 없어서.\n\n이 적체가 풀려야 데이터센터가 새 전력을 받을 수 있다. 그러나 적체는 풀리지 않고 있다. **오히려 점점 더 길어지고 있다.** FERC, PJM, ERCOT, MISO — 각 ISO가 대기열 개혁을 시도하지만, 데이터센터 수요 증가가 그 개혁 속도를 앞지른다.",
          bodyEn:
            "One number shows that power has become the binding variable. The US interconnection queue.\n\nThe queue is — a backlog of projects applying to build new generation and connect to the grid. Lawrence Berkeley National Lab's \"Queued Up 2025\" measures its length.\n\n**As of end-2024: 2,290 GW.** That is **nearly 2x** all currently operating US generation capacity (~1,300 GW). 10,300 projects. Of those, 1,400 GW generation + 890 GW storage.\n\nWhat this means: *the US has plenty of capacity standing in line to build more electricity*. The line just doesn't move. Median time from interconnection application to COD (commercial operation date) was <2 years in 2000-2007. By 2018-2024 it was **4+ years**. In 2024 alone, 112 GW of solar/storage projects *withdrew* from the queue — they couldn't wait that long.\n\nThis backlog must unclog for data centers to get new power. But it's not unclogging. *It's getting longer*. FERC, PJM, ERCOT, MISO — each ISO attempts queue reform, but data center demand growth outpaces reform speed.",
        },
        {
          type: "chart",
          chart: {
            id: "queue-growth",
            title: "미국 인터커넥션 큐 적체 추이 (활성 대기 GW)",
            titleEn: "US Interconnection Queue Backlog Growth (Active GW Waiting)",
            caption:
              "출처: LBNL \"Queued Up\" 시리즈 (2018-2025), Berkeley Lab. 2024년 말 2,290 GW = 미국 현 가동 발전용량의 약 2배. 평균 대기 4년+.",
            captionEn:
              "Source: LBNL \"Queued Up\" series (2018-2025), Berkeley Lab. End-2024: 2,290 GW = roughly 2x current US installed generation capacity. Median wait 4+ years.",
            data: [
              { year: "2014", totalGW: 560 },
              { year: "2017", totalGW: 720 },
              { year: "2019", totalGW: 980 },
              { year: "2021", totalGW: 1380 },
              { year: "2022", totalGW: 1670 },
              { year: "2023", totalGW: 1950 },
              { year: "2024", totalGW: 2290 },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "warning",
            heading: "PJM 833% 충격 — 단일 데이터포인트가 가르쳐주는 것",
            headingEn: "PJM's +833% Shock — What One Data Point Teaches",
            body: "PJM(중대서양 지역 ISO, 버지니아 데이터센터 알리(Alley) 관할)의 2025~26년 용량 경매 가격이 전년 대비 **+833%** 상승했다. ISO 경매 사상 최대 폭의 단일 분기 급등이다. 원인: 버지니아 데이터센터 알리 5GW+ 가동 + 추가 GW 개발 중. Dominion의 2024년 IRP는 2039년까지 27GW의 신규 발전(재생 21GW + 가스 5.9GW)이 필요하다고 본다. 경매 가격이 +833% 폭등하는 건 — 가격 메커니즘이 '전력이 부족하다'고 시장에 외치는 신호다. 다음 경매도 같은 폭이라면, 이건 자본지출 사이클의 새로운 상한선이다.",
            bodyEn:
              "PJM (the mid-Atlantic ISO that includes Virginia's Data Center Alley) saw 2025-26 capacity auction prices rise **+833% YoY** — the largest single ISO auction jump on record. Cause: Virginia Data Center Alley 5GW+ operating + further GW under development. Dominion's 2024 IRP calls for 27GW new generation by 2039 (21GW renewable + 5.9GW gas). When a single auction explodes +833%, the price mechanism is screaming that power is the binding constraint. If the next auction does the same, this is the new ceiling on the capex cycle.",
          },
        },
      ],
    },
    // ── 3. 원자력 르네상스 ────────────────────────────────────────────────────
    {
      heading: "원자력 르네상스 — Three Mile Island가 깨어난다",
      headingEn: "The Nuclear Renaissance — Three Mile Island Wakes Up",
      blocks: [
        {
          type: "text",
          body: "전력이 결정 변수가 되자, 빅테크가 한 일은 **직접 원전을 사기 시작한 것**이다.\n\n2024년 9월 20일. Microsoft가 Constellation Energy와 **20년 PPA(전력구매계약)**를 체결했다. 대상은 **Three Mile Island Unit 1**, 835MW. 1979년 Unit 2의 부분 노심 용융 사고로 미국 원전 산업이 한 세대 멈춘 바로 그 발전소다. Unit 1은 별개로 2019년까지 가동되다가 경제성 문제로 폐쇄됐다. MSFT의 PPA가 그 발전소를 깨운다. **2027년 재가동 예정**(기존 계획보다 1년 앞당김). DOE가 $1B 융자 지원.\n\n3개월 후. AWS가 Talen Energy와 17년 PPA를 체결했다. 대상은 Susquehanna 원전, **1.92 GW**. 별도로 Talen이 보유한 데이터센터 캠퍼스를 $650M에 인수했다. \"동일 부지 in-front-of-the-meter\" 구조 — 그리드를 거치지 않고 원전이 데이터센터에 직접 전기를 공급한다(이를 위해서는 FERC 규제 우회가 필요한데, 그게 2025년 정치 이슈가 됐다).\n\nGoogle은 Kairos Power와 SMR(소형 모듈 원자로) 7기, 합산 500MW 계약. Amazon은 X-Energy와 5GW SMR 약정. Meta는 Vistra와 의향서(LOI) 단계.\n\n이 모든 거래의 공통점: **전력의 단위 경제학이 바뀌었다.** PPA 단가가 MWh당 통상 $40~50이었던 것이, 데이터센터 전용 거래에서는 $80~150까지 올라간다. 빅테크는 더 비싼 전기를 — 더 안정적이고, 더 오래, 더 깨끗한 전기를 — 사겠다고 약속한다. 그 약속이 원전 운영사의 자본 비용을 정당화하고, 폐쇄됐던 원전을 깨운다.\n\n이건 산업 정책이 만든 결과가 아니다. **전력 단가 시장이 만든 결과다.**",
          bodyEn:
            "Once power became the binding variable, Big Tech did one thing — *they started buying nuclear directly*.\n\nSeptember 20, 2024. Microsoft signed a **20-year PPA** with Constellation Energy. Target: **Three Mile Island Unit 1**, 835MW. The plant where Unit 2's 1979 partial meltdown stopped the US nuclear industry for a generation. Unit 1 ran separately until economic shutdown in 2019. MSFT's PPA wakes it. **Restart planned 2027** (one year earlier than prior schedule). DOE backed it with $1B in loans.\n\nThree months later. AWS signed a 17-year PPA with Talen Energy. Target: Susquehanna nuclear, **1.92 GW**. Separately, AWS bought Talen's data center campus for $650M. \"Co-located in-front-of-the-meter\" structure — nuclear powers the data center directly, bypassing the grid. (This requires a FERC regulatory workaround. It became a political issue in 2025.)\n\nGoogle: contract with Kairos Power for 7 SMRs, 500MW combined. Amazon: 5GW SMR commitment with X-Energy. Meta: LOI with Vistra.\n\nWhat all these deals have in common: *the unit economics of electricity changed*. Typical PPA prices of $40-50 per MWh rose to $80-150 for data-center-dedicated supply. Big Tech is promising to pay more for electricity — more stable, longer term, cleaner. That promise justifies the operator's cost of capital and wakes shuttered nuclear plants.\n\nIndustrial policy didn't make this happen. *The electricity-price market did*.",
        },
        {
          type: "table",
          table: {
            id: "bigtech-nuclear-ppa",
            title: "빅테크 원전 PPA 매트릭스 (2024-2026)",
            titleEn: "Big Tech Nuclear PPA Matrix (2024-2026)",
            headers: ["발표일", "구매자", "대상 발전소/공급자", "용량", "구조"],
            headersEn: ["Date", "Buyer", "Plant / Supplier", "Capacity", "Structure"],
            rows: [
              ["2024.9", "Microsoft", "Constellation / Three Mile Island Unit 1", "835 MW", "20년 PPA (2027 재가동)"],
              ["2024.3 / 2024.12", "Amazon", "Talen / Susquehanna 캠퍼스", "1.92 GW", "17년 PPA + 데이터센터 $650M 인수"],
              ["2024.10", "Google", "Kairos Power (SMR 7기)", "500 MW", "장기 PPA, 2030년대 가동"],
              ["2024.10", "Amazon", "X-Energy (SMR)", "최대 5 GW", "SMR 개발 약정"],
              ["2024.10", "Amazon", "Energy Northwest (SMR)", "320 MW (확장 960 MW)", "워싱턴주 SMR"],
              ["2025.1", "Meta", "Vistra Energy", "공개 안 됨 (NDA)", "Comanche Peak/원전 LOI"],
              ["2025.6", "Microsoft", "Helion Energy (Fusion)", "50 MW (계획)", "2028 목표 — 첫 상업 fusion PPA"],
            ],
            rowsEn: [
              ["Sept 2024", "Microsoft", "Constellation / Three Mile Island Unit 1", "835 MW", "20-yr PPA (2027 restart)"],
              ["Mar / Dec 2024", "Amazon", "Talen / Susquehanna campus", "1.92 GW", "17-yr PPA + $650M data center campus acquisition"],
              ["Oct 2024", "Google", "Kairos Power (7 SMRs)", "500 MW", "Long-term PPA, 2030s online"],
              ["Oct 2024", "Amazon", "X-Energy (SMR)", "Up to 5 GW", "SMR development commitment"],
              ["Oct 2024", "Amazon", "Energy Northwest (SMR)", "320 MW (extend 960 MW)", "Washington State SMR"],
              ["Jan 2025", "Meta", "Vistra Energy", "Undisclosed (NDA)", "Comanche Peak / nuclear LOI"],
              ["June 2025", "Microsoft", "Helion Energy (Fusion)", "50 MW (planned)", "2028 target — first commercial fusion PPA"],
            ],
            caption: "출처: 각사 보도자료, Constellation/Talen/Vistra IR, DCD coverage. 누적 약 9.5 GW의 빅테크 원전 약정. 단, 실제 가동은 2027-2030년대.",
            captionEn: "Sources: Company press releases, Constellation/Talen/Vistra IR, DCD coverage. Cumulative ~9.5 GW of Big Tech nuclear commitments. Actual generation comes online 2027-2030s.",
          },
        },
      ],
    },
    // ── 4. 보이지 않는 베네피셔리 — 변압기·쿨링·송전 ─────────────────────────
    {
      heading: "보이지 않는 베네피셔리 — 변압기·쿨링·송전",
      headingEn: "The Invisible Beneficiaries — Transformers, Cooling, Transmission",
      blocks: [
        {
          type: "text",
          body: "전력 사이클에서 가장 먼저 가격이 오른 건 발전소가 아니다. **전력을 운반하고 데이터센터에 안정적으로 공급하는 인프라**다.\n\n**Vertiv(VRT).** 데이터센터 냉각·UPS·전력관리 회사. 주가 2022년 말 약 $15 → 2025년 약 $130(8.5배). 매출 2022년 $5.7B → 2025년 약 $10B. AI 데이터센터의 단위면적당 전력 밀도가 일반 서버 대비 5~10배 높아지면서 액체 냉각(liquid cooling)이 필수가 됐고, Vertiv가 그 표준이다. 마진도 확장됐다(2025년 영업이익률 약 22%).\n\n**Eaton(ETN).** 전력관리, 변압기, 데이터센터 백업. 매출 2022년 $20.8B → 2025년 약 $28B. **변압기 납기가 4년 이상**. 지금 주문해도 4년 후에 받는다. Eaton의 수주잔고가 사이클의 단일 가시성 지표다.\n\n**Quanta Services(PWR).** 송전선 건설·유지. 매출 2022년 $17.1B → 2025년 약 $28B. 송전망 연결 대기열을 풀려면 송전선이 늘어나야 한다. Quanta가 그것을 짓는다. 수주잔고 2025년 말 약 $36B(전년 +35%).\n\n**GE Vernova(GEV).** 가스터빈, 송전 설비. 2024년 4월 GE에서 분사. 분사 직후 시가총액 $30B → 2025년 약 $95B. AI 데이터센터가 베이스로드 발전원으로 천연가스를 다시 요구하면서, GE Vernova의 가스터빈 수주잔고가 전년 대비 +40%.\n\n**Hitachi Energy.** 변압기 단독 글로벌 1위. 수주잔고 2025년 말 $30B+. 변압기 납기가 6년에 달하는 분기도 있다.\n\n이 회사들의 공통점: **NVIDIA처럼 화려하지 않지만, GPU가 도착해도 이들 회사의 제품이 없으면 데이터센터가 작동하지 않는다.** 사이클의 두 번째 줄에 서 있는 수혜자들이다.",
          bodyEn:
            "In a power cycle, the first prices to rise weren't at the power plants. They were *the infrastructure that delivers and stabilizes that power to the data center*.\n\nVertiv (VRT). Data center cooling, UPS, power management. Stock from ~$15 end-2022 to ~$130 by 2025 (8.5x). Revenue $5.7B (2022) to ~$10B (2025). As AI data centers ran 5-10x denser power per square foot than conventional servers, liquid cooling became mandatory. Vertiv is the standard. Margins expanded (2025 operating margin ~22%).\n\nEaton (ETN). Power management, transformers, data center backup. Revenue $20.8B (2022) → ~$28B (2025). *Transformer lead time is 4+ years*. Order today, receive in four years. Eaton's backlog is a single visibility metric for the cycle.\n\nQuanta Services (PWR). Transmission line construction and maintenance. Revenue $17.1B (2022) → ~$28B (2025). For the interconnection queue to unclog, more transmission must be built. Quanta builds it. Backlog end-2025: ~$36B (+35% YoY).\n\nGE Vernova (GEV). Gas turbines, transmission equipment. Spun off from GE in April 2024. Market cap $30B at spin → ~$95B by 2025. As AI data centers brought baseload natural gas back, GE Vernova's gas turbine backlog grew +40% YoY.\n\nHitachi Energy. Sole global #1 in transformers. Backlog end-2025: $30B+. Transformer lead time touches 6 years in some quarters.\n\nWhat these companies share: *they aren't glamorous like NVIDIA, but no data center runs without them, even after the GPU arrives*. They are the second-row beneficiaries of the cycle.",
        },
      ],
    },
    // ── 5. 한국 — 용인 클러스터와 i-SMR ──────────────────────────────────────
    {
      heading: "한국 — 용인 클러스터와 i-SMR의 시간",
      headingEn: "Korea — The Yongin Cluster and the i-SMR Clock",
      blocks: [
        {
          type: "text",
          body: "한국은 미국 전력 위기의 축소판이다 — 더 작은 영토에 더 집중된 수요.\n\n**용인 반도체 클러스터.** 삼성전자와 SK하이닉스가 향후 30년간 ₩600조+ 투자. 가동되려면 2053년까지 **10 GW 이상의 전력이 필요**하다 — 원전 10기 규모. 현재 용인 지역 데이터센터·반도체 전력 공급은 **0.6 GW**. 부족분이 9 GW를 넘는다.\n\n한국전력은 이미 송전망 부담의 한계에 도달했다. 송전선 신규 건설 사업의 **55% 이상이 지연**(2025년 10월 기준). 2013~2023년 송전 +14%, 배전 +22%만 늘었다 — 수요 증가율의 절반 이하다. 신규 데이터센터 전력 공급 확정 기간도 KEPCO 기준 **2~3개월에서 12개월로** 길어졌다.\n\n해법으로 두 가지가 진행 중이다.\n\n**첫째, 송전망 3법 통과(2025년).** 민간 송전망 참여 허용 — KEPCO 단독에서 한전 + 민간 컨소시엄 구조로. 단기적으로 송전선 신규 건설 속도를 가속할 수 있다.\n\n**둘째, i-SMR(소형 모듈 원자로).** KHNP + KAERI 공동 개발, 170 MWe. 2025년 말 표준설계 완료, **2028년 표준설계 승인 목표**. SMR 특별법 통과로 데이터센터 직접 PPA가 허용됐다. 미국 MSFT-Three Mile Island 구조의 한국판이다. 두산에너빌리티가 SMR 압력용기 단독 공급자.\n\n한국 시장 관점: 전력 인프라 베타가 한국 자본시장에서도 작동한다. LS일렉트릭(변압기), 두산에너빌리티(SMR), 한전기술(엔지니어링), HD현대일렉트릭(변압기). 미국 Vertiv·Eaton 같은 메가캡 한 종목은 없지만, 같은 레이어에서 같은 사이클을 탄다.\n\n한국 데이터센터 시장 자체도 폭증한다. Mordor Intelligence: $0.58B(2025년) → $1.89B(2030년). IT 부하 1.96 → 6.32 천 MW. 이 수요가 한국 그리드 위에 그대로 더해진다.",
          bodyEn:
            "Korea is a miniature of the US power crisis — a smaller territory with even more concentrated demand.\n\n**The Yongin Semiconductor Cluster**. Samsung and SK Hynix to invest KRW ₩600 trillion+ over 30 years. To operate, by 2053 it will need **10+ GW** — the equivalent of 10 reactors. Current Yongin-area data center and semiconductor supply: **0.6 GW**. The gap is over 9 GW.\n\nKEPCO is already at the limit of grid load. **55%+ of new transmission projects are delayed** (as of October 2025). 2013-2023: transmission grew only +14%, distribution +22% — less than half of demand growth. Time-to-grant for new data center power supply: KEPCO median was 2-3 months, now stretched to **12 months**.\n\nTwo solutions are in progress.\n\nFirst, **Grid 3-Laws** passed (2025). Private capital allowed to participate in transmission construction — moving from KEPCO-sole to KEPCO + private consortium. Short-term acceleration possible.\n\nSecond, **i-SMR** (innovative small modular reactor). Joint KHNP + KAERI development. 170 MWe. Standard design completed end-2025; **standard design approval targeted 2028**. SMR Special Act passed allowing direct data-center PPAs. This is Korea's version of the MSFT-Three Mile Island structure. Doosan Enerbility is the sole supplier of the SMR pressure vessel.\n\nFrom a Korean market view: power infrastructure beta works in the Korean capital market too. LS ELECTRIC (transformers), Doosan Enerbility (SMR), Korea Engineering, HD Hyundai Electric (transformers). There's no single megacap like Vertiv or Eaton in Korea — but the same layer rides the same cycle.\n\nThe Korean data center market itself is exploding. Mordor Intelligence: $0.58B (2025) → $1.89B (2030). IT load 1.96 → 6.32 thousand MW. That demand is added on top of the Korean grid.",
        },
      ],
    },
    // ── 6. 결론 ───────────────────────────────────────────────────────────────
    {
      heading: "결론 — 칩은 와트가 결정한다",
      headingEn: "Conclusion — Chips Are Decided by Watts",
      blocks: [
        {
          type: "text",
          body: "이 메모의 명제는 단순하다 — **AI 자본 사이클의 결정 변수는 칩이 아니라 와트다.**\n\nNVIDIA가 GPU를 더 만들 수 있는 분기에 — 미국 그리드가 전기를 더 공급할 수 없다면, 매출은 그만큼 만들어지지 않는다. Microsoft가 Three Mile Island를 깨우는 것, AWS가 Susquehanna 캠퍼스를 사는 것, Google이 Kairos와 SMR을 계약하는 것 — 이 모든 거래는 **전력의 단위 경제학이 바뀌었다는 동일한 사실을 다른 각도에서 인정하는 행위**다.\n\nPearl Street가 1882년에 했던 일 — 산업의 결정 변수를 와트로 만든 일 — 이 2026년 AI 사이클에서 다시 일어났다. 이번엔 더 빨리, 더 비싸게, 더 글로벌하게.\n\n투자자에게 두 가지 시사점이 있다.\n\n**첫째, 전력 인프라 베타가 칩 베타보다 더 길게 갈 수 있다.** 1.6T 광 트랜시버 사이클이 GPU 사이클보다 2~4분기 늦게 오듯, 전력 인프라 사이클은 더 길다 — 변압기 납기 4년, 송전선 건설 5~10년, 원전 재가동 3년, SMR 첫 가동 5~7년. **사이클이 더 길다는 것은 매출 가시성이 더 길다는 뜻이다.** Vertiv·Eaton·Quanta·Constellation·두산에너빌리티의 5년 수주잔고가 의미 있는 이유다.\n\n**둘째, 위기의 첫 균열은 송전 비용 급등에서 나온다.** PJM의 다음 용량 경매가 또 +500% 이상 폭등하면 — 그건 **데이터센터 자본지출의 ROIC 산수가 흔들리는 시점**이다. 빅테크 자본지출 가이던스가 처음으로 \"전력 비용\"을 위험 요인으로 인정하는 분기 — 그게 사이클의 자본 비용이 본격적으로 압박받기 시작하는 분기다.\n\n**1882년 Pearl Street 이후 산업은 와트로 측정됐다. 2026년 AI도 같다.**",
          bodyEn:
            "The single proposition of this memo: **the binding variable of the AI capital cycle is not chips but watts**.\n\nIn a quarter where NVIDIA can make more GPUs — if the US grid can't supply more electricity, revenue doesn't grow accordingly. Microsoft restarting Three Mile Island, AWS buying the Susquehanna campus, Google contracting Kairos for SMRs — every one of these deals is *recognition from a different angle of the same fact: the unit economics of electricity changed*.\n\nWhat Pearl Street did in 1882 — making watts the binding variable of industry — is happening again in 2026 with AI. This time faster, more expensively, more globally.\n\nTwo implications for investors.\n\nFirst, **power infrastructure beta can be longer than chip beta**. Just as 1.6T optical transceivers lag the GPU cycle by 2-4 quarters, power infrastructure cycles are longer — transformer 4-yr lead time, transmission 5-10 yr build, nuclear restart 3 yr, first SMR 5-7 yr. *A longer cycle means longer revenue visibility*. That's why Vertiv, Eaton, Quanta, Constellation, and Doosan Enerbility's 5-year backlogs matter.\n\nSecond, **the first crack of the crisis comes from transmission cost spikes**. If the next PJM capacity auction explodes another +500%+ — that's *the point where data center capex ROIC math is threatened*. The first quarter Big Tech capex guidance acknowledges \"power cost\" as a risk factor is the quarter the cycle's cost of capital starts to be pressured.\n\n*Since Pearl Street in 1882, industry has been measured in watts. The 2026 AI cycle is no different.*",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "다음 메모 — 단 하나의 숫자 (시리즈 마지막)",
            headingEn: "Next Memo — The One Number (Series Finale)",
            body: "회로(Memo 1), 모델(2), IPO(3), 칩(4), 광(5), 전력(6) — 모든 메모가 결국 하나의 질문으로 모인다. AI가 진짜로 노동을 대체하는가. 1999년에는 그 질문의 답을 사후에야 알 수 있었다. Anthropic Economic Index가 처음으로 분기마다 그 답을 준다. 시리즈 마지막 메모.",
            bodyEn:
              "Circuit (Memo 1), models (2), IPO (3), chips (4), optical (5), power (6) — every memo collapses into one single question. Does AI actually displace labor? In 1999, that question could only be answered ex-post. Anthropic's Economic Index, for the first time, answers it quarterly. The series finale.",
          },
        },
      ],
    },
  ],
  references: [
    {
      id: 1,
      author: "International Energy Agency (IEA)",
      title: "Electricity 2026 / Energy and AI",
      source: "IEA Reports",
      year: "2025-2026",
      url: "https://www.iea.org/reports/electricity-2026",
      note: "글로벌 데이터센터 전력 수요 485 → 950 TWh 공식 데이터",
    },
    {
      id: 2,
      author: "EPRI",
      title: "Powering Intelligence 2026 — Analyzing AI's Electricity Demand",
      source: "EPRI",
      year: "2026",
      url: "https://www.epri.com/research/products/000000003002028924",
      note: "미국 DC 전력 점유율 4% → 9-17% 시나리오",
    },
    {
      id: 3,
      author: "Lawrence Berkeley National Laboratory",
      title: "Queued Up 2025 — Characteristics of Power Plants Seeking Transmission Interconnection",
      source: "LBNL Energy Markets & Policy",
      year: "2025",
      url: "https://emp.lbl.gov/queues",
      note: "인터커넥션 큐 2,290 GW 1차 자료",
    },
    {
      id: 4,
      author: "Microsoft / Constellation Energy",
      title: "Three Mile Island Unit 1 20-Year PPA Announcement",
      source: "Constellation Investor Relations / DCD",
      year: "2024-09-20",
      url: "https://www.datacenterdynamics.com/en/news/three-mile-island-nuclear-power-plant-to-return-as-microsoft-signs-20-year-835mw-ai-data-center-ppa/",
    },
    {
      id: 5,
      author: "Amazon Web Services / Talen Energy",
      title: "Susquehanna PPA + Data Center Campus Acquisition ($650M)",
      source: "Talen Energy IR",
      year: "2024",
      url: "https://www.talenenergy.com/",
    },
    {
      id: 6,
      author: "PJM Interconnection",
      title: "2025-26 Capacity Auction Results (+833% YoY)",
      source: "PJM IR",
      year: "2024-2025",
      url: "https://www.pjm.com/markets-and-operations/rpm",
    },
    {
      id: 7,
      author: "Federal Energy Regulatory Commission (FERC)",
      title: "Order 2023 — Interconnection Queue Reform",
      source: "FERC",
      year: "2023-2025",
      url: "https://www.ferc.gov/",
    },
    {
      id: 8,
      author: "Cushman & Wakefield",
      title: "Korea Data Centres & Power Challenge 2025",
      source: "Cushman & Wakefield Research",
      year: "2025",
      url: "https://www.cushmanwakefield.com/en/south-korea/insights",
    },
    {
      id: 9,
      author: "한국수력원자력(KHNP) / 한국원자력연구원(KAERI)",
      title: "i-SMR 표준설계 진행 현황",
      source: "World Nuclear News, KHNP IR",
      year: "2025",
      url: "https://www.world-nuclear-news.org/articles/standard-design-approval-sought-for-i-smr",
    },
    {
      id: 10,
      author: "Vertiv Holdings",
      title: "2025 Annual Report — Liquid Cooling, Backlog",
      source: "Vertiv IR / SEC EDGAR",
      year: "2025",
      url: "https://investors.vertiv.com/",
    },
    {
      id: 11,
      author: "Eaton Corporation",
      title: "2025 Annual Report — Transformer Backlog and Lead Times",
      source: "Eaton IR / SEC EDGAR",
      year: "2025",
      url: "https://www.eaton.com/us/en-us/company/investor-relations.html",
    },
    {
      id: 12,
      author: "GE Vernova",
      title: "2025 Annual Report (post April 2024 spinoff)",
      source: "GE Vernova IR / SEC EDGAR",
      year: "2025",
      url: "https://www.gevernova.com/investors",
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #9 — AI Capital Cycle ② — 모델 빅2와 Claude Code
// ══════════════════════════════════════════════════════════════════════════════

const aiCycle2: NoteData = {
  slug: "ai-capital-cycle-2",
  category: "macro",
  status: "published",
  series: "ai-capital-cycle",
  seriesOrder: 2,
  title: "AI 자본 사이클 ② — 모델 빅2와 Claude Code",
  titleEn: "AI Capital Cycle ② — The Model Duopoly & Claude Code",
  description:
    "OpenAI는 매출의 85%가 컨슈머, Anthropic은 80%가 API. 두 회사의 단위경제학은 완전히 다른 길로 갈라졌다. 그리고 Claude Code — Anthropic이 9개월 만에 $2.5B ARR을 만든 코딩 에이전트 — 가 AI의 첫 진짜 PMF의 정량 증거다.",
  descriptionEn:
    "OpenAI: 85% consumer revenue. Anthropic: 80% API revenue. Their unit economics have split into completely different paths. And Claude Code — the coding agent Anthropic grew to $2.5B ARR in nine months — is the first quantified proof of an AI PMF.",
  date: "2026-05-29",
  readingMinutes: 19,
  keyPoints: [
    "OpenAI 매출: 2024 $3.7B → 2025 $13.1B → 2026 $25B+ ARR. 매출의 85%가 ChatGPT 컨슈머. 2026 손실 $14B, 2030 전 흑자 어려움",
    "Anthropic 매출: 2024 $1B → 2025 $9B → 2026.4 $30B run-rate (Dario: '80배 성장'). 80%가 enterprise/API. 2028 매출 $70B, FCF +$17B (leaked deck)",
    "Claude Code: 2025.2 출시, 2025.5 GA, 2025.11 $1B ARR, 2026.2 $2.5B ARR. 6개월 $1B = ChatGPT 컨슈머 ramp보다 빠름. 공개 GitHub commit의 4%가 Claude Code 작성",
    "Cursor: Series D $29.3B → $50B 협상, xAI $60B 인수 옵션. ARR $100M → $2B 13개월에 20배",
    "Cognition (Devin): $26B, ARR $492M, 50% MoM 6개월. Mercedes 200K LOC COBOL: 8개월 추정 → 8일",
    "회로 거울: Anthropic이 xAI Colossus에 월 $1.25B 지불. Anthropic 매출 → xAI capex → NVIDIA 매출",
    "투자자 watch: OpenAI/Anthropic 다음 라운드 valuation, Cursor 2027 IPO, Microsoft Copilot Claude 전환",
  ],
  keyPointsEn: [
    "OpenAI revenue: 2024 $3.7B → 2025 $13.1B → 2026 $25B+ ARR. 85% from ChatGPT consumer. 2026 loss $14B; profitability before 2030 unlikely",
    "Anthropic revenue: 2024 $1B → 2025 $9B → April 2026 $30B run-rate (Dario: '80x growth'). 80% from enterprise/API. 2028 revenue $70B, FCF +$17B (leaked deck)",
    "Claude Code: launched Feb 2025, GA May 2025, $1B ARR by Nov 2025, $2.5B by Feb 2026. 6 months to $1B = faster than ChatGPT consumer ramp. 4% of all public GitHub commits authored",
    "Cursor: Series D $29.3B → $50B in talks, xAI option at $60B. ARR $100M → $2B in 13 months (20x)",
    "Cognition (Devin): $26B, ARR $492M, 50% MoM for 6 months. Mercedes 200K LOC COBOL: 8-month estimate done in 8 days",
    "Circuit mirror: Anthropic pays xAI Colossus $1.25B/month. Anthropic revenue → xAI capex → NVIDIA revenue",
    "Investor watch: OpenAI/Anthropic next-round valuations, Cursor 2027 IPO, Microsoft Copilot Claude migration",
  ],
  sections: [
    {
      heading: "매출이 비용을 따라잡을 수 있는가",
      headingEn: "Can Revenue Catch Cost?",
      blocks: [
        {
          type: "text",
          body: "Memo 1에서 우리는 — *회로의 가장 약한 마디는 다음 라운드를 받지 못하는 첫 모델 회사다* — 라는 결론에 도달했다. 그 회로의 진짜 자기검증은 단순하다. **모델 회사의 매출이 모델 회사의 컴퓨트 비용을 따라잡을 수 있는가**.\n\nOpenAI 매출 2024 $3.7B → 2025 $13.1B → 2026 ARR $25B+. 폭발적 성장이다. 그러나 매출 옆에 컴퓨트 비용을 놓으면 — 2026 OpenAI 손실 약 $14B, 2030년까지 누적 $44B+, HSBC는 $207B funding shortfall을 추정한다. *현재 trajectory로는 2030년에도 흑자가 안 나온다*.\n\nAnthropic은 더 흥미롭다. 매출 2024 $1B → 2025년 말 $9B → 2026.4 $30B run-rate. Dario Amodei가 5월 \"우리는 10배 성장을 계획했는데 80배가 왔다. 너무 어려워서 감당이 안 된다\" 라고 말했다. 컴퓨트 비용 2025 $360M → 2027 $6.4B → 2029년까지 누적 ~$80B. 그러나 **2028년 매출 $70B, FCF +$17B** (leaked deck). *2027년 흑자 전환 가능*.\n\n같은 산업, 두 모델 회사. 한 쪽은 흑자가 어렵고, 한 쪽은 2-3년 안에 가능하다. **무엇이 다른가**.",
          bodyEn:
            "In Memo 1 we concluded — *the weakest node in the circuit is the first model company that can't raise its next round*. The circuit's self-validation is simple. **Can the model company's revenue catch up to its compute cost?**\n\nOpenAI revenue: 2024 $3.7B → 2025 $13.1B → 2026 ARR $25B+. Explosive growth. But against compute costs — 2026 OpenAI loss ~$14B, cumulative loss to 2030 $44B+, HSBC estimates a $207B funding shortfall by 2030. *On current trajectory, profitability does not arrive even by 2030*.\n\nAnthropic is more interesting. Revenue 2024 $1B → end 2025 $9B → April 2026 $30B run-rate. Dario Amodei in May: \"We tried to plan for 10x growth. We got 80x. Too hard to handle.\" Compute spend 2025 $360M → 2027 $6.4B → cumulative ~$80B through 2029. But **2028 revenue $70B, FCF +$17B** (leaked deck). *Profitability possible by 2027*.\n\nSame industry, two model companies. One can't turn profitable; the other sees it in 2-3 years. **What's different?**",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "차이 — 매출 mix",
            headingEn: "The Difference — Revenue Mix",
            body: "OpenAI: ~85%가 ChatGPT 컨슈머 (Plus $20, Team $25, Enterprise, Pro $200). 컨슈머는 CAC가 있고 churn ~40%, 사용자가 늘면 컴퓨트 비용도 동일 비율로 늘어난다. Anthropic: ~80%가 enterprise API. API는 CAC 거의 없고 (OpenAI·MSFT가 만든 시장), 88% Net Retention, customer 사용이 늘면 컴퓨트가 less-than-linear (배치·캐싱). 이 차이가 — 같은 성장 곡선에서도 흑자가 가깝거나 멀게 만든다.",
            bodyEn:
              "OpenAI: ~85% from ChatGPT consumer. Consumer carries CAC, ~40% churn, and adds compute roughly linearly per user. Anthropic: ~80% from enterprise API. Near-zero CAC (the market was made by OpenAI and Microsoft), 88% net retention, less-than-linear compute scaling per customer (batch processing, caching). This structural difference is why the same growth curve leads to very different paths to profitability.",
          },
        },
      ],
    },
    {
      heading: "Claude Code — AI의 첫 PMF 정량 증거",
      headingEn: "Claude Code — The First Quantified Proof of AI PMF",
      blocks: [
        {
          type: "text",
          body: "Anthropic 성장의 절반 가까이가 한 제품에서 나온다. **Claude Code**.\n\n타임라인:\n- **2025.2.24** Public preview\n- **2025.5** General Availability\n- **2025.11** $1B ARR (GA 후 6개월)\n- **2026.2** $2.5B ARR (GA 후 9개월, Series G 공개)\n- 2026.5 — Anthropic 총 ARR의 ~17-20%, 코딩 워크로드 전체로는 API 매출의 ~50%\n\n6개월에 $1B ARR — *ChatGPT 컨슈머 ramp보다 빠르다*. 가입자당 매출은 $20-$200 컨슈머가 아니라 *enterprise developer 월 $100-$500*.\n\n무엇인가. **CLI 기반 자율 코딩 에이전트**. 사용자가 \"이 버그를 고쳐\" 라고 말하면, 터미널에서 코드베이스를 읽고, 파일을 수정하고, 테스트를 돌리고, git에 커밋한다. Cursor가 IDE에 박힌 채팅/에이전트라면, Claude Code는 *터미널·에이전트 native*. Devin이 클라우드 비동기 PR이라면, Claude Code는 *로컬·in-the-loop*.\n\n생산성 충격: **Anthropic 내부 코드의 70-90%가 Claude로 작성된다** (Dario, 2025.9). Claude Code 제작자 Boris Cherny: \"코딩은 대부분 '해결됐다'. 나는 11월부터 단 한 줄도 손으로 쓰지 않았다.\"",
          bodyEn:
            "Nearly half of Anthropic's growth comes from one product. **Claude Code.**\n\nTimeline:\n- **Feb 24, 2025** Public preview\n- **May 2025** General Availability\n- **November 2025** $1B ARR (6 months post GA)\n- **February 2026** $2.5B ARR (9 months post GA, disclosed at Series G)\n- May 2026 — ~17-20% of Anthropic's total ARR; coding workloads overall ~50% of API revenue\n\nReaching $1B ARR in 6 months is *faster than ChatGPT consumer's ramp*. Revenue per user isn't $20-200/month consumer — it's *enterprise developers at $100-500/month*.\n\nWhat is it? **A CLI-native autonomous coding agent.** A user says \"fix this bug\"; in the terminal, it reads the codebase, edits files, runs tests, commits to git. If Cursor is a chat/agent embedded in an IDE, Claude Code is *terminal-and-agent native*. If Devin is a cloud sandbox doing async PR-style work, Claude Code is *local and in-the-loop*.\n\nThe productivity shock: **70-90% of code at Anthropic is written by Claude** (Dario, September 2025). Claude Code creator Boris Cherny: \"Coding is now 'solved' for most use cases. I haven't written a single line by hand since November.\"",
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "We tried to plan for 10x growth. We got 80x. It's just crazy. Too hard to handle.",
            bodyEn: "We tried to plan for 10x growth. We got 80x. It's just crazy. Too hard to handle.",
            heading: "— Dario Amodei, Code with Claude conference, 2026.5.6",
            headingEn: "— Dario Amodei, Code with Claude conference, May 6, 2026",
          },
        },
        {
          type: "text",
          body: "Claude Code의 진짜 의미는 매출이 아니다. **AI가 진짜 노동을 대체하는지에 대한 단일 정량 증거**다.\n\nSemiAnalysis: **GitHub 공개 commit의 ~4%가 Claude Code 작성** (2026.2). 60일에 두 배. 주별 +8%. 같은 페이스로 2026년 말 20%+.\n\nPragmatic Engineer 2026.2 15,000명 개발자 설문: **Claude Code 가장 많이 쓰는 AI 코딩 툴 1위, '가장 사랑하는 도구' 46%**.\n\nMicrosoft 내부 (Verge): \"우리는 대부분 Claude Code를 쓴다. 코딩에서는 다른 모든 AI 모델보다 앞서 있어서.\" *Microsoft가 GitHub Copilot을 만든다. 그 회사 엔지니어가 자기 회사 제품 대신 Claude Code를 쓴다*. 이게 PMF의 가장 강력한 정성 증거다.\n\nClaude Code의 $2.5B ARR — *진짜 엔드유저가 진짜 돈을 내고, 진짜 작업이 대체되는* 첫 정량 증거. 9개월 만에.",
          bodyEn:
            "Claude Code's real significance isn't revenue. It is **the first quantified proof that AI actually displaces labor**.\n\nSemiAnalysis: **~4% of all public GitHub commits authored by Claude Code** (Feb 2026). Doubled in 60 days. +8% WoW. At the same pace, by end-2026 over 20%.\n\nPragmatic Engineer Feb 2026 survey, 15,000 developers: **Claude Code #1 most-used AI coding tool; 46% \"most loved.\"**\n\nMicrosoft internal (Verge): \"Mostly we use Claude code, because it's way out ahead of all the other AI models in that area.\" *Microsoft makes GitHub Copilot. Its engineers use Claude Code instead*. The strongest qualitative PMF evidence.\n\nClaude Code's $2.5B ARR — *the first quantified proof that real end users pay real money and real work is substituted*. In nine months.",
        },
      ],
    },
    {
      heading: "Cursor, Devin — 코딩 도구의 폭발",
      headingEn: "Cursor, Devin — The Coding Tools Explosion",
      blocks: [
        {
          type: "text",
          body: "Claude Code만이 아니다. *Anthropic 모델 위에 만든 third-party 도구들도 별도로 폭발한다*.\n\n**Cursor (Anysphere)**. MIT 2022년 졸업생 4인. CEO Michael Truell, 25세. ARR: 2024.8 $100M → 2025.6 $500M → 2025.11 $1B → 2026.2 **$2B**. 13개월 20배. 펀딩: 2025.11.13 Series D **$2.3B at $29.3B** → 2026.4 협상 중 **$50B** (a16z + Thrive) → 2026.4.22 xAI \"2026 후반 Cursor를 **$60B** 에 인수할 옵션\" 발표 (Fortune). Cursor 모델 mix는 Claude 가중.\n\n**Cognition (Devin)**. 2026.5.27 $1B 라운드 at $26B post. ARR $492M, **50% MoM 6개월 연속**. Q1 2025 대비 Q2 2026 ARR 73배. Mercedes-Benz: 200,000 라인 COBOL 현대화 — 인간 추정 8개월 → Devin 8일. 고객: Goldman Sachs, Citi, US Army, NASA, Dell, Santander, BMW.\n\n**GitHub Copilot**. Microsoft 소유. 4.7M 유료 가입자 (2026.1, +75% YoY). 추정 ARR $1B+. 2026.3.9부터 **Claude Sonnet 4.6 추가**. \"Pick your agent\" Agent HQ. Microsoft가 자기 제품에 Claude를 넣은 사실은 — Anthropic 입장 \"우리 모델이 GitHub underlying\", Microsoft 입장 \"우리 사용자가 그 모델을 더 좋아한다\" 의 패배 인정에 가깝다.",
          bodyEn:
            "It's not only Claude Code. *Third-party tools built on Anthropic's model also explode independently*.\n\n**Cursor (Anysphere).** Four MIT 2022 graduates. CEO Michael Truell, age 25. ARR: Aug 2024 $100M → June 2025 $500M → Nov 2025 $1B → Feb 2026 **$2B**. 20x in 13 months. Funding: Nov 13, 2025 Series D **$2.3B at $29.3B** → April 2026 in talks at **$50B** (a16z + Thrive) → April 22, 2026 xAI option to acquire at **$60B** later in 2026 (Fortune). Model mix Claude-weighted.\n\n**Cognition (Devin).** May 27, 2026: $1B round at $26B post. ARR $492M, **50% MoM growth for 6 consecutive months**. Q2 2026 ARR is 73x Q1 2025. Mercedes-Benz: 200,000-line COBOL modernization — human estimate 8 months → Devin 8 days. Customers: Goldman Sachs, Citi, US Army, NASA, Dell, Santander, BMW.\n\n**GitHub Copilot.** Owned by Microsoft. 4.7M paid subscribers (Jan 2026, +75% YoY). Estimated ARR $1B+. **Claude Sonnet 4.6 added on March 9, 2026**. \"Pick your agent\" Agent HQ launched. Microsoft putting Claude into its own product means — for Anthropic, \"our model is now in GitHub.\" For Microsoft, close to admission: \"our users prefer that model.\"",
        },
        {
          type: "table",
          table: {
            id: "coding-tools-landscape",
            title: "AI 코딩 도구 경쟁 매트릭스 (2026.5)",
            titleEn: "AI Coding Tools Competitive Matrix (May 2026)",
            headers: ["도구", "ARR", "Valuation", "Primary 모델", "비고"],
            headersEn: ["Tool", "ARR", "Valuation", "Primary Model", "Note"],
            rows: [
              ["Claude Code (Anthropic)", "$2.5B+ (Feb)", "Anthropic $380B의 일부", "Claude Sonnet/Opus", "공개 GitHub commit의 4%"],
              ["Cursor (Anysphere)", "$2B (Feb)", "$29.3B → $50B 협상 → xAI $60B 옵션", "Claude 가중치 multi-model", "MIT 2022 4인, CEO 25세"],
              ["GitHub Copilot", "$1B+ 추정", "Microsoft 사업부", "Multi (Claude 4.6 추가)", "4.7M 유료 sub, +75% YoY"],
              ["Devin (Cognition)", "$492M", "$26B (2026.5)", "Multi-model", "50% MoM 6개월; Windsurf 인수"],
              ["Lovable", "$400M (Mar)", "$6.6B", "Claude + 기타", "vibe coding, 스웨덴"],
              ["Replit Agent", "$240M (FY25)", "$9B", "Multi-model", "in-browser dev"],
              ["Bolt.new", "$40M+", "비공개", "Multi-model", "5M+ 사용자"],
              ["Cline (OSS)", "—", "—", "BYO API", "5M VS Code 설치"],
            ],
            rowsEn: [
              ["Claude Code (Anthropic)", "$2.5B+ (Feb)", "Part of Anthropic $380B", "Claude Sonnet/Opus", "4% of all public GitHub commits"],
              ["Cursor (Anysphere)", "$2B (Feb)", "$29.3B → $50B talks → xAI $60B option", "Claude-weighted multi-model", "MIT 2022 four founders, CEO 25"],
              ["GitHub Copilot", "$1B+ est.", "Microsoft division", "Multi (Claude 4.6 added)", "4.7M paid subs, +75% YoY"],
              ["Devin (Cognition)", "$492M", "$26B (May 2026)", "Multi-model", "50% MoM x 6mo; Windsurf acquired"],
              ["Lovable", "$400M (Mar)", "$6.6B", "Claude + others", "vibe coding, Sweden"],
              ["Replit Agent", "$240M (FY25)", "$9B", "Multi-model", "in-browser dev"],
              ["Bolt.new", "$40M+", "private", "Multi-model", "5M+ users"],
              ["Cline (OSS)", "—", "—", "BYO API", "5M VS Code installs"],
            ],
            caption: "출처: TechCrunch, Bloomberg, CNBC, Sacra. 합산 코딩 도구 ARR ~$6B+, 2024년 대비 ~10배. 모든 frontier 도구가 Claude를 underlying에 포함.",
            captionEn: "Sources: TechCrunch, Bloomberg, CNBC, Sacra. Combined coding tools ARR ~$6B+, roughly 10x vs 2024. Every frontier tool includes Claude in its underlying.",
          },
        },
      ],
    },
    {
      heading: "회로의 거울 — Anthropic이 xAI에 매월 $1.25B를 보낸다",
      headingEn: "Mirror of the Circuit — Anthropic Pays xAI $1.25B per Month",
      blocks: [
        {
          type: "text",
          body: "Memo 1의 회로(NVDA→OpenAI→MSFT→NVDA)는 사이클의 첫 회로일 뿐이다. 두 번째 회로 — *모델 회사 간의 회로* — 가 새로 등장했다.\n\n2026.5.20 SpaceX의 S-1 파일링이 폭로한 사실. **Anthropic이 xAI의 Colossus 1 클러스터(GPU 22만 개, 300MW)의 전체 출력을 매월 $1.25B에 임대**한다. 2029.5까지. 총 $40B+. Colossus 2 확장에도 들어간다. 5월부터 **연 $15B를 xAI에 지불**.\n\nAnthropic이 왜 xAI에서 사는가. AWS Project Rainier(50만 Trainium2), Google TPU도 쓴다. 그러나 모두 합쳐도 Claude Code가 만든 수요를 처리하기에 모자란다. xAI Colossus가 \"여유 GPU\"를 가진 거의 유일한 곳이었다.\n\nxAI 입장: Grok이 매출을 충분히 만들지 못한다. Colossus capex 회수가 안 된다. Anthropic이 그 capex를 메우는 *임대 매출*. xAI는 그 매출로 NVIDIA에서 더 많은 GPU를 산다 (Series E $20B at $230B, 2026.1).\n\n회로의 두 번째 마디:\n\n*Anthropic 매출 (Claude Code) → xAI 임대료 → xAI capex → NVIDIA 매출 → NVIDIA가 OpenAI에 → OpenAI가 Azure에 → MSFT가 NVIDIA에서*\n\n*첫 회로와 두 번째 회로가 NVIDIA에서 만난다*.\n\n시사: 첫째, *Anthropic 매출이 진짜 enterprise 수요에서 오는 한* 회로는 정당화된다. 둘째, *Anthropic 매출이 둔화되면* 회로의 이 마디가 가장 먼저 깨진다. Anthropic이 xAI 임대료를 못 내면 xAI가 NVIDIA capex를 줄인다. 회로가 거꾸로 풀린다.\n\n그래서 시리즈 단일 watch metric으로 다시 돌아온다: *Anthropic의 다음 라운드 valuation, 매출 성장 둔화 여부*.",
          bodyEn:
            "Memo 1's circuit (NVDA→OpenAI→MSFT→NVDA) is just the first circuit. A second circuit — *between model companies* — has emerged.\n\nOn May 20, 2026, SpaceX's S-1 IPO filing revealed: **Anthropic leases the entire output of xAI's Colossus 1 cluster (220K GPUs, 300MW) for $1.25B per month**. Through May 2029. Total $40B+. Extending into Colossus 2. From May, **$15B/yr to one counterparty: xAI**.\n\nWhy does Anthropic buy from xAI? It already uses AWS Project Rainier (500K Trainium2) and Google TPU. But all combined are insufficient for demand Claude Code generates. xAI's Colossus was nearly the only place with \"spare GPUs.\"\n\nFrom xAI's side — Grok doesn't generate enough revenue. Colossus capex can't be recouped. Anthropic creates the *lease revenue* filling that capex. xAI uses it to buy more NVIDIA GPUs (Series E $20B at $230B, Jan 2026).\n\nThe second node:\n\n*Anthropic revenue (Claude Code) → xAI lease → xAI capex → NVIDIA revenue → NVIDIA invests in OpenAI → OpenAI commits to Azure → MSFT buys from NVIDIA*\n\n*Both circuits meet at NVIDIA*.\n\nImplications: first, *as long as Anthropic's revenue is real enterprise demand*, the circuit is justified. Second, *if Anthropic revenue slows*, this node breaks first. Anthropic can't pay xAI lease; xAI cuts NVIDIA capex. The circuit unravels in reverse.\n\nWe return to the series-wide watch metric: *Anthropic's next-round valuation and revenue growth deceleration*.",
        },
        {
          type: "chart",
          chart: {
            id: "ai-penetration",
            title: "Anthropic Economic Index — 직업별 AI 침투율 trajectory",
            titleEn: "Anthropic Economic Index — AI Penetration by Occupation Trajectory",
            caption:
              "출처: Anthropic Economic Index (Feb 2025, Sept 2025, Jan 2026, Mar 2026). O*NET 직업 task가 Claude로 수행된 비율. 소프트웨어 가장 높은 침투 (2026Q1 카테고리 35.8%, programmer 단일 직군 74.5%).",
            captionEn:
              "Sources: Anthropic Economic Index reports. Share of O*NET occupation tasks performed using Claude. Software leads (Q1 2026: 35.8% category-wide; 74.5% for programmer occupation).",
            data: [
              { period: "25Q1", software: 12, finance: 4,  legal: 2,  customer: 8 },
              { period: "25Q2", software: 18, finance: 7,  legal: 4,  customer: 14 },
              { period: "25Q3", software: 24, finance: 12, legal: 7,  customer: 21 },
              { period: "25Q4", software: 30, finance: 17, legal: 11, customer: 28 },
              { period: "26Q1", software: 36, finance: 22, legal: 16, customer: 35 },
            ],
          },
        },
      ],
    },
    {
      heading: "결론 — 노동을 대체할 수 있는가",
      headingEn: "Conclusion — Can Labor Be Substituted",
      blocks: [
        {
          type: "text",
          body: "이 메모의 단일 명제는 단순하다 — **AI의 첫 PMF는 코딩이다. Claude Code가 그것을 처음 정량 증명했다**.\n\nOpenAI와 Anthropic의 단위경제학이 갈라진 이유는 매출 mix에 있다. OpenAI는 컨슈머 ChatGPT의 churn과 CAC를 진다. Anthropic은 enterprise API의 88% retention과 less-than-linear scaling을 누린다. *2027년 흑자 가능성의 차이는 모델 품질이 아니라 비즈니스 모델의 차이*다.\n\n그리고 Claude Code는 — 9개월에 $2.5B ARR을 만들면서 — 시리즈의 핵심 질문에 첫 답을 준다. *AI가 진짜 노동을 대체할 수 있는가?* 코딩에서는 이미 일어났다. GitHub 공개 commit의 4%, Anthropic 내부 코드의 70-90%, Mercedes 8개월 작업 8일.\n\n이게 회로 자기검증의 첫 데이터다. Memo 1에서 우리는 \"매수자와 매도자가 같은 사람일 때 시장 가격은 무엇을 의미하는가\" 라고 물었다. Claude Code의 $2.5B는 — *적어도 그 매출의 한 마디에서는 매수자가 매도자가 아니라는 증거*다. 진짜 enterprise customer가 진짜 코딩 노동을 대체하기 위해 진짜 $100-$500/월을 낸다.\n\n그러나 이게 회로 전체의 자기검증은 아니다. 코딩 외 — 법무·회계·마케팅·고객서비스·디자인 — 의 PMF는 코딩만큼 깨끗하지 않다. 시리즈 마지막 메모 (Anthropic Economic Index) 에서 전 직군 데이터를 본다.\n\n*Claude Code는 첫 정량 증거다. 다음 직군의 데이터가 같은 곡선을 보여주는가가 사이클의 운명을 결정한다*.",
          bodyEn:
            "The single proposition: **AI's first PMF is coding. Claude Code is its first quantified proof.**\n\nOpenAI and Anthropic's unit economics split apart on revenue mix. OpenAI bears consumer ChatGPT's churn and CAC. Anthropic enjoys enterprise API's 88% retention and less-than-linear scaling. *The difference in 2027 profitability is not model quality but business model.*\n\nAnd Claude Code — $2.5B ARR in 9 months — gives the first answer to the series's core question. *Can AI actually displace labor?* In coding, it has already happened. 4% of public GitHub commits, 70-90% of Anthropic's internal code, Mercedes' 8-month job in 8 days.\n\nThis is the first datum of the circuit's self-validation. In Memo 1 we asked: \"When buyer and seller are the same person, what does the market price mean?\" Claude Code's $2.5B is — *evidence that in at least one node, the buyer is not the seller*. Real enterprise customers pay real $100-500/month to substitute real coding labor.\n\nBut this is not the circuit's full validation. Outside coding — legal, accounting, marketing, customer service, design — the PMF data is not as clean. The final memo (Anthropic Economic Index) looks at all occupations.\n\n*Claude Code is the first quantified proof. Whether the next occupation's data shows the same curve will decide the cycle's fate.*",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "다음 메모 — IPO 파도와 1999",
            headingEn: "Next Memo — The IPO Wave and 1999",
            body: "OpenAI S-1 confidentially filed 2026.5.22. Anthropic $900B 라운드 협상. Cursor xAI $60B 옵션. 2026 AI IPO 파도가 capex backstop인가, 1999 cycle top signal인가. 다음 메모.",
            bodyEn:
              "OpenAI S-1 confidentially filed May 22, 2026. Anthropic in talks at $900B. Cursor with xAI's $60B option. Is the 2026 AI IPO wave a capex backstop or a 1999-style cycle top signal? Next memo.",
          },
        },
      ],
    },
  ],
  references: [
    { id: 1, author: "Anthropic", title: "Series G $30B at $380B post-money", source: "Anthropic Press Release", year: "2026-02-12", url: "https://www.anthropic.com/news/anthropic-raises-30-billion-series-g-funding-380-billion-post-money-valuation" },
    { id: 2, author: "CNBC (Dario Amodei keynote)", title: "Anthropic CEO says company grew 80-fold in first quarter", source: "CNBC", year: "2026-05-06", url: "https://www.cnbc.com/2026/05/06/anthropic-ceo-dario-amodei-says-company-crew-80-fold-in-first-quarter.html" },
    { id: 3, author: "The Information (leaked deck)", title: "Anthropic projects $70B revenue, $17B cash flow in 2028", source: "The Information", year: "2025-11", url: "https://www.theinformation.com/articles/anthropic-projects-70-billion-revenue-17-billion-cash-flow-2028" },
    { id: 4, author: "CNBC", title: "OpenAI resets spend expectations, targets $600B by 2030", source: "CNBC", year: "2026-02-20", url: "https://www.cnbc.com/2026/02/20/openai-resets-spend-expectations-targets-around-600-billion-by-2030.html" },
    { id: 5, author: "Microsoft", title: "Form 8-K — OpenAI Restructuring (Oct 28, 2025)", source: "SEC EDGAR", year: "2025-10-28", url: "https://www.sec.gov/Archives/edgar/data/0000789019/000119312525256310/msft-ex99_2.htm" },
    { id: 6, author: "SemiAnalysis", title: "Claude Code is the Inflection Point — 4% of public GitHub commits", source: "SemiAnalysis", year: "2026-02", url: "https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point" },
    { id: 7, author: "CNBC", title: "Cursor Series D $2.3B at $29.3B", source: "CNBC", year: "2025-11-13", url: "https://www.cnbc.com/2025/11/13/cursor-ai-startup-funding-round-valuation.html" },
    { id: 8, author: "Fortune", title: "Cursor xAI $60B acquisition option", source: "Fortune", year: "2026-04-22", url: "https://fortune.com/2026/04/22/who-is-cursor-25-year-old-ceo-michael-truell-tech-startups-csuite-elon-musk-spacex/" },
    { id: 9, author: "TechCrunch", title: "Cognition (Devin) $1B at $26B post", source: "TechCrunch", year: "2026-05-27", url: "https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/" },
    { id: 10, author: "DCD / SpaceX S-1", title: "Anthropic pays xAI $1.25B/month for Colossus", source: "Data Center Dynamics", year: "2026-05", url: "https://www.datacenterdynamics.com/en/news/spacex-ipo-filing-reveals-anthropic-set-to-pay-musks-firm-125bn-a-month-to-rent-xai-data-center-space/" },
    { id: 11, author: "Anthropic", title: "Economic Index — Quarterly reports", source: "Anthropic", year: "2025-2026", url: "https://www.anthropic.com/economic-index" },
    { id: 12, author: "Lenny Rachitsky podcast", title: "Boris Cherny (Claude Code creator) interview", source: "Lenny's Newsletter", year: "2026-04", note: "코딩은 대부분 해결됐다 / 11월부터 손으로 안 쓴다" },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #10 — AI Capital Cycle ③ — IPO 파도, 1999와 다른 점
// ══════════════════════════════════════════════════════════════════════════════

const aiCycle3: NoteData = {
  slug: "ai-capital-cycle-3",
  category: "macro",
  status: "published",
  series: "ai-capital-cycle",
  seriesOrder: 3,
  title: "AI 자본 사이클 ③ — IPO 파도, 1999와 다른 점",
  titleEn: "AI Capital Cycle ③ — The IPO Wave, and What's Different from 1999",
  description:
    "2026년 5월 22일 OpenAI가 S-1을 비공개 제출했다. 9월 상장 목표, 밸류에이션 $1T+. SpaceX는 6월 12일 데뷔, $75B 조달. Anthropic은 $900B 라운드 협상 중. 1999년의 IPO 파도는 사이클 정점을 만든 게 아니라 사후에 확인시켜준 신호였다. 2026년도 같을까 — 결정적인 차이 하나를 제외하면.",
  descriptionEn:
    "May 22, 2026: OpenAI confidentially filed its S-1. September listing target, $1T+ valuation. SpaceX debuts June 12 raising $75B+. Anthropic in talks at $900B. The 1999 dotcom IPO wave didn't make the cycle top — it confirmed it. Will 2026 be the same — except for one decisive difference.",
  date: "2026-05-29",
  readingMinutes: 19,
  keyPoints: [
    "OpenAI, 2026년 5월 22일 S-1 비공개 제출(CNBC). 9월 상장 목표, 밸류에이션 $852B~$1T+ 추정. Sam Altman: 'ready by September'. 골드만삭스+모건스탠리 주관, 21개 은행 신디케이트. 예상 조달액 $50~100B+ — 역대 최대.",
    "Anthropic: 2026년 2월 Series G $30B @ $380B → 5월 협상 중인 라운드 $30B+ @ $900B. 매출 $30B 런레이트, 2027년 흑자 가능(유출된 IR 자료 기준). IPO 시점은 4분기 2026~2027.",
    "Cursor: Series D $29.3B → $50B 협상 → xAI가 $60B 인수 옵션 보유. ARR $2B. 2027년 IPO 후보 1순위. Cognition $26B, Lovable $6.6B, Replit $9B.",
    "SpaceX(xAI 포함): 2026년 6월 12일 데뷔(티커 SPCX), $75B 조달, 시가총액 $1.25T~1.75T. 역대 최대 단일 IPO.",
    "1999년 대비: 547개 IPO / $69B 조달 / 첫날 평균 상승률 +68%. 5년 생존율 약 50%. 2026년 빅3(SpaceX·OpenAI·Anthropic)만 합쳐도 인플레이션 조정 후 1999년 약 300개 IPO 합산 규모.",
    "결정적 차이: 1999년 IPO는 적자 기업의 본원 자본 조달. 2026년 IPO는 이미 충분히 funded된 기업의 내부자 유동성 회수. OpenAI는 IPO 전에 이미 $10.3B 세컨더리로 엑싯 마침.",
    "Howard Marks(2025년 12월 메모): 두 종류의 거품이 가능 — '회사의 행동' 거품과 '투자자의 행동' 거품. 2026년엔 후자가 먼저 보인다.",
    "투자자가 봐야 할 신호: OpenAI 첫날 가격, 첫 다운라운드(Pets.com 모먼트), MSFT의 OpenAI 27% 지분 평가 상향이 빅테크 EPS에 미치는 영향.",
  ],
  keyPointsEn: [
    "OpenAI S-1 confidentially filed May 22, 2026 (CNBC). September listing target, valuation $852B-$1T+. Sam Altman: 'ready by September'. GS+MS 21-bank syndicate. Expected raise $50-100B+ (largest ever)",
    "Anthropic: Series G $30B at $380B (Feb 2026) → May 2026 in talks at $30B+ at $900B. $30B revenue run-rate, profitability possible 2027 (leaked deck). IPO timing Q4 2026-2027",
    "Cursor: Series D $29.3B → $50B in talks → xAI $60B option. ARR $2B. Most likely 2027 IPO candidate. Cognition $26B, Lovable $6.6B, Replit $9B",
    "SpaceX: June 12, 2026 debut (SPCX), $75B raise, $1.25T-1.75T cap. Includes xAI in bundle. Largest single IPO ever",
    "1999 comparison: 547 IPOs / $69B raise / avg first-day +68%. 5-year survival ~50%. 2026 Big 3 (SpaceX/OpenAI/Anthropic) in inflation-adjusted terms equal ~300 dotcom IPOs combined",
    "Decisive difference: 1999 IPOs were primary funding for unprofitable companies. 2026 IPOs are *insider liquidity* for already-funded companies. OpenAI did $10.3B secondary at $500B before IPO",
    "Howard Marks (Dec 2025 memo): two bubble possibilities — 'company behavior' vs 'investor behavior'. The latter is starting to appear first",
    "Investor watch: OpenAI IPO first-day pop, first down round (Pets.com moment), MSFT mark-up of 27% OpenAI stake on accounting EPS",
  ],
  sections: [
    {
      heading: "2026년 5월 22일 — S-1 한 통이 도착했다",
      headingEn: "May 22, 2026 — One S-1 Arrives",
      blocks: [
        {
          type: "text",
          body: "2026년 5월 22일. OpenAI가 SEC에 **S-1을 비공개로 제출**했다(CNBC, TechCrunch 5월 20일 보도). 9월 상장 목표 — Sam Altman이 \"ready by September\"라고 공개적으로 말했다. 골드만삭스와 모건스탠리가 주관하고 21개 은행이 신디케이트에 참여한다. 예상 조달액 $50~100B+. 100억 달러 규모라면 사우디 아람코($25.6B)의 2~4배 — 역대 최대 단일 IPO 기록을 2~4배로 갈아엎는다.\n\n같은 달. SpaceX(xAI 포함)는 6월 12일 데뷔 예정(티커 SPCX). $75B+ 조달, 밸류에이션 $1.25T~1.75T. 그 자체로 역대 최대 IPO 기록을 만들고, **한 달 뒤 OpenAI가 그 기록을 또 갈아엎는다**. Anthropic은 5월 협상 중인 라운드가 $30B 조달에 **$900B post-money**(Bloomberg). 4분기 2026 또는 2027년 IPO 가능성. Cursor는 ARR이 $2B에 도달했고, xAI가 $60B에 인수할 옵션을 들고 있다.\n\n2026년은 — **AI 자본에 대한 자본시장의 검증**이 이뤄지는 해다. 그리고 그 검증의 시점이 — 1999년의 데자뷔처럼 보인다.\n\n**그러나 결정적으로 다른 한 가지가 있다.**",
          bodyEn:
            "May 22, 2026. OpenAI confidentially filed its S-1 with the SEC (CNBC, TechCrunch broke May 20). September listing target — Sam Altman said publicly \"ready by September.\" Goldman Sachs and Morgan Stanley lead a 21-bank syndicate. Expected single raise: $50-100B+. At $100B that would be 2-4x Saudi Aramco's $25.6B — rewriting the largest IPO record 2-4 times over.\n\nSame month. SpaceX (with xAI bundled) debuts June 12, ticker SPCX. $75B+ raise, $1.25T-1.75T valuation. By itself the largest IPO ever, and *a month later OpenAI rewrites that record again*. Anthropic in talks May 2026 at $30B+ raise at **$900B post-money** (Bloomberg). Q4 2026 or 2027 IPO likely. Cursor's ARR reached $2B; xAI holds an option to acquire it for $60B.\n\n2026 is the year of *capital markets validation for AI capital*. And the timing — looks like a 1999 déjà vu.\n\n*But one thing is decisively different.*",
        },
        {
          type: "table",
          table: {
            id: "ai-ipo-pipeline-2026",
            title: "2026 AI IPO 파이프라인 (5월 기준)",
            titleEn: "2026 AI IPO Pipeline (as of May)",
            headers: ["회사", "ARR", "Valuation", "Raise 목표", "Timing", "주관사"],
            headersEn: ["Company", "ARR", "Valuation", "Raise Target", "Timing", "Underwriters"],
            rows: [
              ["OpenAI", "$25B+ (run-rate)", "$852B-$1T+", "$50-100B+", "S-1 filed 2026.5.22, 9월 상장 목표", "GS+MS (21-bank syndicate)"],
              ["Anthropic", "$30B (run-rate)", "$380B → $900B (협상)", "$60B+ (estimated)", "Q4 2026 / 2027", "GS, JPM, MS (early talks)"],
              ["SpaceX (incl. xAI)", "$18.7B (Starlink $11.4B)", "$1.25T → $1.75T", "$75B+", "**Pricing Jun 11, debut Jun 12 (SPCX)**", "복수"],
              ["Databricks", "$5.4B (+55%)", "$134B", "TBD", "S-1 H2 2026 가능", "TBD"],
              ["Canva", "$4B (+35%)", "$42B", "TBD", "2026 가능, Nasdaq 유력", "TBD"],
              ["Cursor (Anysphere)", "$2B (Feb)", "$29.3B → $50B → xAI $60B 옵션", "비IPO (private 라운드)", "2027 IPO 후보 1순위", "n/a"],
              ["Cognition (Devin)", "$492M (May)", "$26B", "비IPO", "2027+", "n/a"],
              ["Stripe", "n/a (수익성)", "$159B (Feb)", "n/a", "\"top 20 priorities 아님\" (Collison)", "n/a"],
              ["Figure AI (humanoid)", "≈ 0", "$39B", "비IPO", "2027+", "n/a"],
              ["Mistral", "n/a", "$13.7B (€11.7B)", "€4B 인프라 부채 우선", "2027-2028", "n/a"],
            ],
            rowsEn: [
              ["OpenAI", "$25B+ (run-rate)", "$852B-$1T+", "$50-100B+", "S-1 filed May 22, 2026; Sept listing", "GS+MS (21-bank syndicate)"],
              ["Anthropic", "$30B (run-rate)", "$380B → $900B (talks)", "$60B+ (estimated)", "Q4 2026 / 2027", "GS, JPM, MS (early talks)"],
              ["SpaceX (incl. xAI)", "$18.7B (Starlink $11.4B)", "$1.25T → $1.75T", "$75B+", "**Pricing June 11, debut June 12 (SPCX)**", "multiple"],
              ["Databricks", "$5.4B (+55%)", "$134B", "TBD", "S-1 H2 2026 possible", "TBD"],
              ["Canva", "$4B (+35%)", "$42B", "TBD", "2026 possible, Nasdaq likely", "TBD"],
              ["Cursor (Anysphere)", "$2B (Feb)", "$29.3B → $50B → xAI $60B option", "no IPO yet (private rounds)", "2027 IPO candidate #1", "n/a"],
              ["Cognition (Devin)", "$492M (May)", "$26B", "no IPO yet", "2027+", "n/a"],
              ["Stripe", "n/a (profitable)", "$159B (Feb)", "n/a", "\"not top 20 priorities\" (Collison)", "n/a"],
              ["Figure AI (humanoid)", "≈ 0", "$39B", "no IPO yet", "2027+", "n/a"],
              ["Mistral", "n/a", "$13.7B (€11.7B)", "€4B infra debt first", "2027-2028", "n/a"],
            ],
            caption: "출처: CNBC, TechCrunch, Bloomberg, Renaissance Capital 2026 Outlook. 2026 한 해에 SpaceX+OpenAI+Anthropic 3개만 합쳐도 raise 목표가 $200B+ — 1999년 IPO 총 raise $69B의 3배.",
            captionEn: "Sources: CNBC, TechCrunch, Bloomberg, Renaissance Capital 2026 Outlook. SpaceX+OpenAI+Anthropic alone target $200B+ in 2026 — 3x the entire 1999 IPO market of $69B.",
          },
        },
      ],
    },
    {
      heading: "1999년의 IPO 파도 — 무엇이 일어났는가",
      headingEn: "The 1999 IPO Wave — What Happened",
      blocks: [
        {
          type: "text",
          body: "1999년의 IPO 파도를 보지 않고는 2026년을 평가할 수 없다.\n\n**정량 데이터:**\n- 1999년 IPO 총 수: **547개**(그중 인터넷 IPO 289개)\n- 1999년 합산 조달액: **$69B+**(인터넷 IPO만 $24.66B)\n- 1999년 첫날 평균 상승률: **+68%**(인터넷 IPO는 평균 +90%)\n- 117개 IPO(23%)가 첫날 두 배 이상 상승\n- **VA Linux**(1999년 12월 9일): 첫날 **+698%** — 역대 최대 첫날 상승률. $132M 조달 → 시총 $9.5B(당시 MSFT IPO 시총의 12배). 1년 안에 $8.49로 추락.\n- 1999년 IPO의 **첫 해 흑자 비율은 28%**\n- 1999년 IPO 그룹의 **5년 생존율 약 50%**(Ritter 학술 데이터)\n\n**상징적 IPO 결말:**\n- Pets.com: IPO 2000년 2월 10일($11/주, $82.5M 조달). 11월 6일 청산. IPO에서 청산까지 **268일**.\n- Webvan: 1999년 IPO. 2001년 파산. 총 손실 $1.5B+.\n- eToys: 1999년 IPO. 2001년 파산.\n- Drkoop.com: 1999년 IPO. 2002년 파산.\n- 인터넷 기업 1,100여 곳이 2000~2002년 파산 신청.\n\n**1999년의 IPO 파도는 사이클 정점을 만든 것이 아니라, 사후에 알려준 신호였다.** 2000년 3월 NASDAQ 정점은 IPO 파도 정점 *이후*에 왔고, 시장이 그것을 정점이었다고 인식한 건 사후였다. Greenspan의 \"irrational exuberance\" 발언은 1996년 12월 — 3년이나 일찍 나온 셈이었다.\n\n**1999년 IPO 파도의 본질**: 적자 기업에 **본원 자본**(primary capital, 회사가 직접 받는 자금)을 공급하는 파도였다. 그 자금이 더 빠른 성장에 쓰였고, 더 큰 자본지출 사이클을 만들었으며, 결국 그 자본지출이 회수되지 않으면서 사이클이 종료됐다.\n\n**이게 2026년과 결정적으로 다른 지점이다.**",
          bodyEn:
            "You can't evaluate 2026 without seeing 1999's IPO wave.\n\n**Quantitative data**:\n- 1999 total IPOs: **547** (of which 289 internet IPOs)\n- 1999 combined raise: **$69B+** ($24.66B from internet alone)\n- 1999 avg first-day pop: **+68%** (internet IPOs averaged +90%)\n- 117 IPOs (23%) doubled on day one\n- **VA Linux** (Dec 9, 1999): first-day **+698%**, all-time record. $132M raise → $9.5B market cap (12x MSFT's IPO cap). Within a year: $8.49/sh\n- Only **28%** of 1999 IPOs had positive net income in year 1\n- 1999 IPO class **5-year survival ~50%** (Ritter academic data)\n\n**Symbolic IPO endings**:\n- Pets.com: IPO Feb 10, 2000 ($11/sh, $82.5M raise). Liquidated Nov 6. **268 days** from IPO to dissolution.\n- Webvan: 1999 IPO. Bankrupt 2001. Total losses $1.5B+\n- eToys: 1999 IPO. Bankrupt 2001\n- Drkoop.com: 1999 IPO. Bankrupt 2002\n- 1,100+ internet companies filed for bankruptcy during 2000-2002\n\n*The 1999 IPO wave did not make the cycle top — it merely confirmed it*. The March 2000 NASDAQ peak came *after* the IPO wave; the market recognized the peak only *ex-post*. Greenspan's \"irrational exuberance\" came in December 1996 — three years too early.\n\n**Essence of the 1999 IPO wave**: it supplied *primary capital* (cash directly to the company) to unprofitable companies. That capital funded faster growth, created bigger capex cycles, and ultimately the capex didn't get recouped — and the cycle ended.\n\n*This is the decisive difference from 2026*.",
        },
      ],
    },
    {
      heading: "결정적 차이 — 2026 IPO는 primary가 아니라 insider liquidity",
      headingEn: "The Decisive Difference — 2026 IPOs Are Insider Liquidity, Not Primary",
      blocks: [
        {
          type: "text",
          body: "1999년 인터넷 IPO와 2026년 AI IPO의 가장 중요한 차이는 — **IPO의 자본시장 기능 자체가 다르다**는 것이다.\n\n**1999년**: 인터넷 회사들은 **자금을 조달하기 위해** IPO를 했다. Pets.com이 조달한 $82.5M은 광고와 운영비로 쓰일 자금이었다. 사모 시장이 더 이상 돈을 대주지 않거나 대주는 가격이 IPO 가격보다 낮을 때 — 회사는 상장 외에 선택지가 없었다. IPO는 생존 자금이었다.\n\n**2026년**: OpenAI, Anthropic, Cursor — 모두 이미 사모 시장에서 천문학적인 규모로 자금을 받은 상태다. OpenAI는 IPO 전에 이미 누적 $110B+를 조달했다. Anthropic은 $64B+. Cursor는 사실 IPO 전에 xAI에 $60B에 매각될 수도 있다. 이들에게 IPO는 자금 조달의 마지막 수단이 아니다 — 정반대로, **내부자들이 현금화할 마지막 단계**다.\n\nOpenAI가 2025년 10월에 했던 일을 보자. **$10.3B 세컨더리 텐더오퍼, 밸류에이션 $500B**. IPO 전에 이미 내부자들이 한 차례 엑싯을 끝낸 것이다. SoftBank의 $40B 라운드(2025년 3월~12월)도 일부는 세컨더리였다. **내부자들은 이미 팔 만큼 팔았다.**\n\n그래서 2026년 AI IPO 파도는 — 1999년과 표면적으로 닮았지만 **경제적으로는 정반대**다.\n\n**1999년은 자본이 회사로 흘러들어가는 파도였다. 2026년은 자본이 회사에서 흘러나오는 파도다.**\n\nIPO 성패의 의미도 다르다. 1999년의 IPO 실패는 곧 회사가 자금을 못 받아 파산하는 일이었다. 2026년의 IPO 실패는 내부자들이 현금화에 실패한다는 뜻이지만, 회사는 이미 funded돼 있어 운영은 계속된다. 그러나 — **내부자 엑싯 실패가 다음 라운드 밸류에이션 하락으로 이어지면, 같은 회사들이 다음 라운드 자금을 받지 못한다.** Memo 1에서 그렸던 자본 회로가 그 마디에서 끊긴다.",
          bodyEn:
            "The most important difference between 1999 internet IPOs and 2026 AI IPOs is — *the capital markets function of the IPO itself is different*.\n\n**1999**: internet companies went public *to raise capital*. Pets.com's $82.5M raise was for advertising and operations. When private markets stopped funding, or funded at lower prices than IPO would — the company had *no choice but to list*. IPO was survival capital.\n\n**2026**: OpenAI, Anthropic, Cursor — all are *already astronomically funded by private markets*. OpenAI is $110B+ cumulative pre-IPO. Anthropic is $64B+. Cursor might even be acquired by xAI at $60B before going public. For these companies, IPO is not *the last resort for capital* — it is the opposite: *the final step where insiders cash out*.\n\nLook at what OpenAI did in October 2025. **$10.3B secondary tender at $500B valuation**. *Before the IPO, insiders already finished one round of cashout*. Parts of SoftBank's $40B round (March-Dec 2025) were also secondary. *Insiders have already sold most of what they wanted to*.\n\nSo the 2026 AI IPO wave — looks like 1999 on the surface but is *economically the opposite*.\n\n*1999 was a wave of capital flowing into companies*. *2026 is a wave of capital flowing out of companies*.\n\nThe meaning of IPO success/failure also differs. 1999 IPO failure = company can't get cash → bankruptcy. 2026 IPO failure = insiders can't cash out, but the company is already funded and operations continue. But — *if insider cashout failure leads to lower round valuations, those same companies can't raise their next rounds*. Memo 1's circuit breaks at that node.",
        },
        {
          type: "callout",
          callout: {
            variant: "warning",
            heading: "Howard Marks (2025.12 메모): 두 종류의 거품",
            headingEn: "Howard Marks (Dec 2025 memo): Two Kinds of Bubbles",
            body: "Howard Marks가 2025년 12월 메모 \"Is It a Bubble?\"에서 정리한 분석: 거품은 두 가지 형태로 나타난다. 첫째는 **회사의 행동** 거품 — 회사가 과도하게 자본지출을 늘리거나 무리한 M&A에 나서는 형태다. 둘째는 **투자자의 행동** 거품 — 투자자가 과도한 밸류에이션에 베팅하는 형태다. 2026년 AI에서는 **둘 다 동시에 일어나고 있다**. 회사들은 $700B+의 자본지출을 약속하고, 투자자들은 $1T+ 밸류에이션에 베팅한다. Marks는 말한다 — \"투자자의 행동 거품이 회사의 행동 거품보다 먼저 보이기 시작한다.\" 그게 바로 OpenAI·Anthropic·Cursor의 세컨더리 라운드들이다.",
            bodyEn:
              "Howard Marks's December 2025 memo \"Is It a Bubble?\" frames it: bubbles appear in two forms — first, *company behavior* bubble (companies overinvesting or over-acquiring). Second, *investor behavior* bubble (investors betting on excessive valuations). In 2026 AI, *both are happening simultaneously*. Companies promise $700B+ capex; investors bet on $1T+ valuations. Marks: \"The investor behavior bubble tends to appear first.\" That's what OpenAI / Anthropic / Cursor secondary rounds are.",
          },
        },
      ],
    },
    {
      heading: "Burry, Chanos, 그리고 메가캡 IPO의 산수",
      headingEn: "Burry, Chanos, and the Mega-Cap IPO Math",
      blocks: [
        {
          type: "text",
          body: "**Michael Burry**가 2026년 5월 X 포스트에서 한 말 — \"AI IPO 파도는 피투성이 자동차 사고 현장, 사고가 일어나기 직전 몇 분이다.\" 인플레이션 조정 후, SpaceX + OpenAI + Anthropic 세 IPO 합산 조달액은 **1999년 약 300개 IPO 합산과 맞먹는 규모**다. 한 해에 메가캡 세 개로.\n\n**Jim Chanos**가 2026년 초에 한 말 — AI는 \"이번 사이클의 displacement idea(시장 패러다임을 바꾼 아이디어)\"다. 1990년대 인터넷이 했던 역할과 같다. NVIDIA의 자본지출 수요가 \"매출 $13B 대비 수천억 달러\". 1999년 벤더 파이낸싱 약 $100B를 \"훨씬 초과하는 패턴\".\n\n**BofA의 Michael Hartnett** — AI가 미국 주식시장 시가총액에서 차지하는 비중이 1920년대, Nifty Fifty, 1989년 일본, 닷컴 등 지난 100년의 모든 거품 정점이었던 **48%를 넘어섰다.**\n\n그러나 — **이 비판들은 1999년 사이클을 정확히 묘사한 사람들이 한 것이기도 하다.** Burry는 글로벌 금융위기를 정확히 예측했지만, 그 외에는 여러 번 너무 일찍 약세 베팅을 한 전적이 있다. Chanos는 Enron을 잡았지만 NVIDIA 공매도는 2024년에 비싸게 잃었다. Hartnett는 전략가일 뿐 타이밍을 제시하지는 않는다.\n\n**Marks의 핵심 통찰**: 사이클이 *언제* 끝나는지는 알 수 없다. 그러나 *어떻게* 끝나는지는 패턴이 있다. **IPO 파도 이후 1~3년** — 그것이 닷컴의 패턴이었다. 2026년 IPO 파도가 6~12월에 정점을 친다면, 사이클 정점은 **2027~2028년** 사이일 가능성이 가장 높다.",
          bodyEn:
            "**Michael Burry** in a May 2026 X post: the AI IPO wave is *\"the scene of the bloody car crash, minutes before it happens.\"* Inflation-adjusted — SpaceX + OpenAI + Anthropic combined raise = *roughly equal to ~300 1999 IPOs combined*. In one year, in three megacaps.\n\n**Jim Chanos** in early 2026: AI is \"the displacement idea of this cycle\" — the same role the internet played in the 1990s. NVDA's capital spending needs are \"in the hundreds of billions of dollars against $13B in revenue.\" A pattern that \"far exceeds the approximately $100 billion in 1990s vendor financing.\"\n\n**BofA's Michael Hartnett**: AI's share of US equity market cap has **surpassed the 48% peak** that defined every bubble of the past century (1920s, Nifty Fifty, Japan 1989, dotcom).\n\nBut — *all these critics also include those who described 1999 accurately*. Burry predicted GFC but has been early on multiple bear bets since. Chanos caught Enron but lost expensively shorting NVDA in 2024. Hartnett is a strategist who doesn't time.\n\n*Marks's core insight*: you can't know *when* a cycle ends. But *how* it ends has patterns. **1-3 years after the IPO wave** was the dotcom pattern. If the 2026 IPO wave peaks in June-December, the cycle peak is most likely — *2027 or 2028*.",
        },
        {
          type: "chart",
          chart: {
            id: "pe-spread",
            title: "Mag 7 vs S&P 493 Forward P/E 스프레드 (2020-2026)",
            titleEn: "Mag 7 vs S&P 493 Forward P/E Spread (2020-2026)",
            caption:
              "출처: FactSet, Yardeni Research (2026). Mag 7 forward P/E ~28x, S&P 493 ~23.5x. 프리미엄 19% — 10년 최저. 단, AI 집중도는 시가총액 기준 35% (Mag 7 시총/S&P 500) — 역대 최고.",
            captionEn:
              "Sources: FactSet, Yardeni Research (2026). Mag 7 forward P/E ~28x, S&P 493 ~23.5x. Premium 19% — 10-yr low. But AI concentration is 35% (Mag 7 cap / S&P 500) — all-time high.",
            data: [
              { year: "'20", mag7: 28, sp493: 18 },
              { year: "'21", mag7: 32, sp493: 21 },
              { year: "'22", mag7: 24, sp493: 16 },
              { year: "'23", mag7: 27, sp493: 17 },
              { year: "'24", mag7: 30, sp493: 19 },
              { year: "'25", mag7: 31, sp493: 20 },
              { year: "'26", mag7: 28, sp493: 23.5 },
            ],
          },
        },
      ],
    },
    {
      heading: "한국 시장의 함의 — KOSPI cascade",
      headingEn: "Korean Market Implications — KOSPI Cascade",
      blocks: [
        {
          type: "text",
          body: "OpenAI·Anthropic IPO가 한국 시장에 어떻게 전이되는가.\n\n**상승 시나리오** (OpenAI IPO 성공, 밸류에이션 $1T+, 첫날 +30%)\n- MSFT의 OpenAI 27% 지분 → 평가 상향 약 $135B+ 미실현 이익. MSFT EPS에 일회성으로 +30~50% 영향(FASB ASC 321)\n- AMZN의 Anthropic 약 14~19% 지분 → Anthropic IPO 성공 시 유사하게 $100~190B 평가 상향\n- MSFT·AMZN의 자본지출 자신감 유지 → HBM·CoWoS 수요 지속 → SK하이닉스·삼성 영업이익 안정\n- KOSPI 반도체 비중 직접 수혜\n\n**하락 시나리오** (OpenAI IPO 첫주에 공모가 아래로 떨어짐 — Pets.com 모먼트)\n- MSFT 평가 하향 → 빅테크 P/E 멀티플 압축\n- 빅테크 자본지출 가이던스 하향 검토 → HBM 가격 하방 압력\n- SK하이닉스·삼성 멀티플 압축 + KOSPI 동반 하락\n- 한국 시장이 **미국 자본시장 검증 실패의 첫 외부 피해자**가 된다\n\n**한국 투자자가 OpenAI·Anthropic에 직접 베팅하는 방법**\n- 사모 세컨더리(Forge, Hiive 등) — **그러나** Anthropic이 2026년 5월 12일 \"이런 플랫폼들은 인가받지 않았고, 이사회 승인 없는 지분 양도는 무효\"라고 공식 경고. 한국 고액 자산가 일부에게 리스크.\n- IPO 이후 — 미국 상장 종목 일반 매매(키움·미래에셋·토스). 환율과 결제 고려.\n- 간접: MSFT(OpenAI 노출) + AMZN(Anthropic 노출)\n\n**한국 AI IPO 후보**: 업스테이지(Upstage). 2025년 주관사 선정, 2026년 하반기 KOSDAQ 상장 신청 예정. 자체 모델 Solar Pro 2(31B 파라미터) — 전 세계 frontier 10위권을 자처. 예상 밸류에이션 ₩2~3T+. 한국 최초의 생성형 AI IPO.\n\n**SK텔레콤의 Anthropic 지분**: 2023년 8월 $100M 투자, 약 0.3% 지분. 2026년 $900B 밸류에이션 기준으로 IPO 평가 시 **약 ₩2.6~3T+**. SKT 시가총액 ₩20T의 13~15%에 해당. 한국 기업 중 OpenAI·Anthropic IPO에 가장 직접적으로 노출된 단일 종목이다.",
          bodyEn:
            "How will OpenAI/Anthropic IPO cascade into the Korean market?\n\n**Bullish scenario** (OpenAI IPO success, $1T+ valuation, first-day +30%):\n- MSFT's 27% OpenAI stake → accounting mark-up ~$135B+ unrealized gain. MSFT EPS one-time impact +30-50% (FASB ASC 321)\n- AMZN's ~14-19% Anthropic stake → similar mark-up $100-190B if Anthropic IPO succeeds\n- MSFT/AMZN capex confidence preserved → HBM/CoWoS demand sustained → SK Hynix/Samsung operating profit stable\n- KOSPI semi weight directly benefits\n\n**Bearish scenario** (OpenAI IPO breaks issue price in first week — *Pets.com moment*):\n- MSFT markdown → Big Tech P/E multiple compression\n- Big Tech capex guidance revision → HBM price pressure downside\n- SK Hynix/Samsung multiple compression + KOSPI cascade\n- Korean market becomes *the first external victim of US capital markets validation failure*\n\n**How Korean investors can directly bet on OpenAI/Anthropic**:\n- Private secondary (Forge, Hiive, etc.) — *but* Anthropic warned May 12, 2026: \"these platforms are not authorized; transfers without board approval are void.\" Risk for some Korean HNW investors.\n- Post-IPO — normal US listing access (Kiwoom, Mirae Asset, Toss). Consider FX and settlement.\n- Indirect: MSFT (OpenAI) + AMZN (Anthropic)\n\n**Korean AI IPO candidates**: Upstage. Underwriter selected 2025, KOSDAQ filing H2 2026. Own model Solar Pro 2 (31B params) — claims top-10 frontier ranking. Expected valuation ₩2-3T+. Korea's first generative AI IPO.\n\n**SK Telecom Anthropic stake**: $100M invested Aug 2023. ~0.3% stake. At 2026 $900B valuation, mark-to-IPO **~₩2.6-3T+**. Equivalent to 13-15% of SKT's ₩20T market cap. The single Korean stock most directly exposed to OpenAI/Anthropic IPO.",
        },
      ],
    },
    {
      heading: "결론 — IPO는 cycle top을 만들지 않는다, 그저 확인한다",
      headingEn: "Conclusion — IPOs Don't Make the Top, They Confirm It",
      blocks: [
        {
          type: "text",
          body: "이 메모의 명제는 단순하다 — **IPO는 사이클의 정점을 만들지 않는다. 그저 확인할 뿐이다.**\n\n1999년 IPO 파도는 Pets.com·Webvan·Drkoop.com을 거치며 사이클 정점을 만든 것이 아니라, **사후에 그것을 알려준 신호**였다. NASDAQ 정점은 IPO 파도 정점 이후에 왔다. 2026년 AI IPO 파도도 마찬가지로 정점을 만들지 않을 것이다. 사이클이 어디까지 왔는지를 보여줄 뿐이다.\n\n그러나 결정적인 차이가 있다. 1999년은 **본원 자본**(primary capital)의 파도였고, 그 자본이 자본지출을 만들고 사이클을 연장시켰다. 2026년은 **내부자 유동성**(insider liquidity)의 파도다. 내부자들은 이미 세컨더리로 엑싯을 마쳤다. **IPO 자체가 자본지출의 재원이 아니다.** 그래서 2026년 IPO 파도가 자본시장에 주는 충격은 1999년보다 **지연되어** 나타날 가능성이 높다.\n\n그렇다면 무엇을 지켜봐야 하는가.\n\n**첫째, OpenAI IPO 첫 주의 가격.** 공모가를 깨고 내려가면 — 즉 첫날 또는 첫 주 안에 공모가 아래로 떨어지면 — 그건 Pets.com 모먼트의 메가 버전이다. 2026년 자본시장에서 가장 큰 단일 트리거.\n\n**둘째, 첫 다운라운드.** OpenAI보다 작은 회사 중 하나 — Cursor·Cognition·Lovable·Replit·Mistral 중 — 가 다음 라운드 밸류에이션을 낮춰 받는다면, 그건 Memo 1에서 그렸던 자본 회로의 **첫 균열**이다.\n\n**셋째, MSFT·AMZN의 평가 상향 vs 하향.** OpenAI·Anthropic IPO 이후 빅테크의 시가평가 미실현 손익이 빅테크 EPS와 가이던스에 어떤 영향을 주는가.\n\n**Howard Marks의 표현을 빌리자면 — 우리는 알 수 없다. 그러나 IPO 파도 이후 1~3년이 닷컴의 패턴이었다. 2026년 IPO 파도가 그 출발점이라면, 그 1~3년은 2027~2028년이다.**",
          bodyEn:
            "The single proposition of this memo: **IPOs don't make the cycle top. They merely confirm it.**\n\nThe 1999 IPO wave — through Pets.com, Webvan, Drkoop.com — *didn't make* the cycle top; it was *the ex-post signal that announced it*. The NASDAQ peak came *after* the IPO wave's peak. The 2026 AI IPO wave will *also not make* the cycle top. It will merely show how far the cycle has gone.\n\nBut a decisive difference. 1999 was a *primary capital* wave; that capital created capex and extended the cycle. 2026 is an *insider liquidity* wave. Insiders already cashed out via secondary. *IPO itself is not capex funding*. So the capital-markets shock of 2026's IPO wave is likely to appear *with a delay* relative to 1999.\n\nWhat then to watch?\n\n*First*, **OpenAI's first-week price action**. If it breaks issue price (i.e., falls below issue price within the first day or week) — that's a mega-version of the Pets.com moment. The single biggest catalyst in 2026 capital markets.\n\n*Second*, **the first down round**. If a smaller company than OpenAI — Cursor, Cognition, Lovable, Replit, or Mistral — accepts a next round at a lower valuation, that is *the first crack* in Memo 1's circuit.\n\n*Third*, **MSFT/AMZN mark-up vs markdown**. After OpenAI/Anthropic IPO, how does Big Tech's mark-to-market unrealized gain/loss affect EPS and forward guidance?\n\n*In Marks's framing — we can't know. But the dotcom pattern was 1-3 years after the IPO wave. If 2026's IPO wave is the timer, that 1-3 years is 2027-2028.*",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "다음 메모 — 패권의 바깥 (이미 발행)",
            headingEn: "Next Memo — Empire's Periphery (already published)",
            body: "Memo 4에서 다룬 내용 — IPO가 검증하게 될 그 비즈니스의 공급망이 한국·대만에 묶여 있다는 사실. 자본의 검증과 공급의 검증은 같은 사이클의 두 면이다.",
            bodyEn:
              "Memo 4 examines how the supply chain that IPO validates is bound to Korea and Taiwan. Capital validation and supply validation are two faces of the same cycle.",
          },
        },
      ],
    },
  ],
  references: [
    { id: 1, author: "CNBC", title: "OpenAI confidentially files for IPO (May 20, 2026)", source: "CNBC", year: "2026-05-20", url: "https://www.cnbc.com/2026/05/20/openai-ipo-filing.html" },
    { id: 2, author: "TechCrunch", title: "OpenAI barrels toward September IPO", source: "TechCrunch", year: "2026-05-20", url: "https://techcrunch.com/2026/05/20/openai-barrels-toward-ipo-that-may-happen-in-september/" },
    { id: 3, author: "Bloomberg", title: "Anthropic in talks to raise $30B at $900B", source: "Bloomberg", year: "2026-05-12", url: "https://www.bloomberg.com/news/articles/2026-05-12/anthropic-in-talks-to-raise-30-billion-at-900-billion-valuation" },
    { id: 4, author: "Bloomberg", title: "SpaceX IPO: $1.75T, $75B raise", source: "Bloomberg", year: "2026-05-21", url: "https://www.bloomberg.com/news/articles/2026-05-21/spacex-ipo-ai-plans-starlink-growth-and-risks" },
    { id: 5, author: "Howard Marks", title: "Is It a Bubble? (memo)", source: "Oaktree Capital", year: "2025-12", url: "https://www.oaktreecapital.com/insights/memo/is-it-a-bubble" },
    { id: 6, author: "Howard Marks", title: "AI Hurtles Ahead (memo)", source: "Oaktree Capital", year: "2026-02", url: "https://www.oaktreecapital.com/insights/memo/ai-hurtles-ahead" },
    { id: 7, author: "Jay Ritter", title: "IPO Statistics — 1999 academic dataset", source: "University of Florida", year: "updated 2025", url: "https://site.warrington.ufl.edu/ritter/files/IPO-Statistics.pdf" },
    { id: 8, author: "Renaissance Capital", title: "IPO Outlook 2026", source: "Renaissance Capital", year: "2026", url: "https://www.renaissancecapital.com/review/IPO_Outlook_2026_Public.pdf" },
    { id: 9, author: "WilmerHale", title: "Internet IPOs Conclude Sensational Year 1999", source: "WilmerHale archive", year: "1999-12", url: "https://www.wilmerhale.com/en/insights/publications/internet-ipos-conclude-a-sensational-year-in-1999-december-1999" },
    { id: 10, author: "CelebrityNetWorth (compiled)", title: "Pets.com: 268 days IPO to liquidation", source: "various", year: "compiled 2025", url: "https://www.celebritynetworth.com/articles/entertainment-articles/took-pets-com-just-268-days-go-ipo-complete-liquidation-thats-disaster/" },
    { id: 11, author: "Microsoft Corporation", title: "Form 8-K — OpenAI Restructuring Disclosure (Oct 28, 2025)", source: "SEC EDGAR", year: "2025-10-28", url: "https://www.sec.gov/Archives/edgar/data/0000789019/000119312525256310/msft-ex99_2.htm" },
    { id: 12, author: "Anthropic", title: "Warning against unauthorized secondary platforms", source: "Anthropic / TechCrunch", year: "2026-05-12", url: "https://techcrunch.com/2026/05/12/anthropic-warns-investors-against-secondary-platforms-offering-access-to-its-shares/" },
    { id: 13, author: "Benzinga", title: "Michael Burry compares OpenAI/Anthropic/SpaceX IPO hype to dotcom", source: "Benzinga", year: "2026-05", url: "https://www.benzinga.com/markets/tech/26/05/52814875/michael-burry-compares-openai-anthropic-spacex-ipo-hype-to-dot-com-bubble" },
    { id: 14, author: "SK Telecom", title: "$100M Anthropic strategic investment", source: "SKT Press Release", year: "2023-08", url: "https://news.sktelecom.com/en/699" },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #11 — AI Capital Cycle ⑤ — 다음 병목 (광·신경망)
// ══════════════════════════════════════════════════════════════════════════════

const aiCycle5: NoteData = {
  slug: "ai-capital-cycle-5",
  category: "macro",
  status: "published",
  series: "ai-capital-cycle",
  seriesOrder: 5,
  title: "AI 자본 사이클 ⑤ — 다음 병목, 광·신경망",
  titleEn: "AI Capital Cycle ⑤ — The Next Bottleneck: Optical & Networking",
  description:
    "1849년 골드러시에서 부자가 된 건 광부가 아니라 곡괭이를 판 Levi Strauss였다. AI에서 GPU 다음 병목은 — 광(光)이다. 800G에서 1.6T로의 전환이 2026~27년의 핵심 사이클이다. Lumentum, Coherent, Astera Labs, Marvell이 이미 그 사이클의 수혜자다.",
  descriptionEn:
    "In the 1849 gold rush, the rich weren't the miners — it was Levi Strauss who sold the picks. After GPU, the next bottleneck in AI is — optical. The 800G to 1.6T transition is the 2026-27 core cycle. Lumentum, Coherent, Astera Labs, Marvell are already the cycle's beneficiaries.",
  date: "2026-05-29",
  readingMinutes: 18,
  keyPoints: [
    "사이클의 끝에서 부자가 되는 건 주인공이 아니라 다음 병목을 쥔 자다. AI에서 GPU 다음 병목은 광 트랜시버 — 800G → 1.6T 전환이다.",
    "Lumentum(LITE) FY26 2분기 매출 $665M(+65.5% YoY), AI·클라우드 비중 60%+. Cloud Light 인수로 NVIDIA에 광 트랜시버 직접 공급.",
    "Coherent(COHR) FY26 2분기 매출 $1.70B(+17.5%), 1.6T 트랜시버 양산이 예상보다 빠르게 진행(CEO Anderson). 수주잔고가 2028년까지 이어진다.",
    "Astera Labs(ALAB) 2025년 3분기 매출 $230.6M(+104% YoY), 영업이익률(non-GAAP) 41.7%. PCIe Gen6 리타이머 Aries 6가 3분기 매출의 20%+. 2025년 5월 NVIDIA NVLink Fusion 통합.",
    "Marvell AI 매출 FY26 약 $6B+(+46% YoY). 커스텀 AI 실리콘(AWS Trainium, MS Maia) + Nova 2(업계 최초 1.6T DSP). Broadcom과 합쳐 커스텀 ASIC 시장의 95% 점유.",
    "Arista FY25 매출 $9.0B(+28.6%), Ultra Ethernet Consortium 주도. Meta의 최대 이더넷 AI 클러스터에 Arista 7700R4 채택. AI 네트워킹 FY26 가이던스 $3.25B(2배 상향).",
    "1.6T 광 트랜시버 시장: 2024년 50만 대 미만 → 2026년 추정 500만 대+. EML 칩이 2027년까지 40~60% 공급 부족(McKinsey). InP 웨이퍼 캐파가 단일 병목.",
    "한국의 직접 노출은 제한적 — 한국의 강점은 메모리이지 III-V 화합물 반도체(InP)가 아니다. 오이솔루션 2025년 매출 +79% — 한국 광부품 회복 신호. 간접 노출: 삼성 실리콘 포토닉스 2028년 양산 목표.",
  ],
  keyPointsEn: [
    "At the end of a cycle, the rich aren't the protagonists — they're the ones holding the next bottleneck. After GPU in AI = optical transceivers (800G → 1.6T transition)",
    "Lumentum (LITE) Q2 FY26 revenue $665M (+65.5% YoY), AI+cloud 60%+ of mix. Cloud Light acquisition gives direct NVIDIA optical transceiver supply",
    "Coherent (COHR) Q2 FY26 revenue $1.70B (+17.5%), 1.6T transceiver ramp faster than expected (CEO Anderson). Orders extend through 2028",
    "Astera Labs (ALAB) Q3 2025 revenue $230.6M (+104% YoY), NG OM 41.7%. PCIe Gen6 retimer Aries 6 was >20% of Q3. NVIDIA NVLink Fusion integration (May 2025)",
    "Marvell AI revenue FY26 ~$6B+ (+46% YoY). Custom AI silicon (AWS Trainium, MS Maia) + Nova 2 (industry's first 1.6T DSP). Combined with Broadcom = 95% of custom ASIC",
    "Arista FY25 revenue $9.0B (+28.6%), leads Ultra Ethernet Consortium. Meta chose Arista 7700R4 for its largest Ethernet AI cluster. AI networking FY26 guidance doubled to $3.25B",
    "1.6T optical transceiver market: 2024 <0.5M units → 2026E >5M units. EML chips 40-60% undersupplied through 2027 (McKinsey). InP wafer capacity is the single bottleneck",
    "Korea direct exposure limited (Korea's strength is memory, not III-V InP). OE Solutions 2025 revenue +79% — Korean optical components recovery signal. Indirect: Samsung Silicon Photonics 2028 mass production target",
  ],
  sections: [
    {
      heading: "Levi Strauss의 운율 — 사이클의 부자는 곡괭이를 판 자다",
      headingEn: "The Levi Strauss Echo — The Rich Sold the Picks",
      blocks: [
        {
          type: "text",
          body: "1849년 캘리포니아 골드러시. 가장 부자가 된 사람은 누구였나. **광부가 아니다.** 광부 대부분은 가난하게 돌아갔다. 부자가 된 건 광부들에게 **곡괭이와 작업복을 판 사람들**이었다. Levi Strauss가 1853년 샌프란시스코에서 데님 작업복을 만들기 시작했고, 1873년 특허받은 청바지가 미국 패션의 단일 표준이 됐다. **그 모든 광부의 노동 위에서, 곡괭이와 청바지를 판 자가 사이클의 진짜 부자가 됐다.**\n\n이게 자본 사이클이 반복하는 패턴이다. 1860~80년대 미국 철도 사이클에서 부자는 철도 회사가 아니라 **철도 옆에 토지를 사놓은 사람들과 철도용 강철을 만든 Carnegie**였다. 1920년대 자동차 사이클의 부자는 Ford와 GM뿐 아니라 **타이어를 만든 Goodyear, 도로를 깐 시멘트 회사들**이었다. 1990~2000년대 인터넷 사이클의 부자는 Pets.com이나 Webvan이 아니라 **광섬유를 깐 Corning과 라우터를 판 Cisco**였다(단기적으로는 Lucent도). 석유 사이클에서도 정유사 → 파이프라인 → 주유소로 병목이 이동하며 단계마다 다른 사람이 부자가 됐다.\n\n**병목은 이동한다.** 그리고 사이클의 매 단계마다 **다음 병목을 쥔 자**가 가장 큰 매출 성장을 누린다.\n\n2026년 AI 자본 사이클에서 GPU(NVIDIA)는 지난 사이클의 주인공이었다. 그러나 GPU의 절대 매출 곡선이 둔화되기 **전에**, 사이클의 자본 흐름은 이미 다음 병목으로 이동하기 시작했다. **광(光)**이다.",
          bodyEn:
            "The 1849 California Gold Rush. Who got rich? *Not the miners*. Most miners went home poor. The rich were the ones who *sold picks and work clothes to the miners*. Levi Strauss began making denim work clothes in San Francisco in 1853; his 1873-patented jeans became the single standard of American fashion. *On all those miners' labor — those who sold picks and jeans became the real wealth of the cycle*.\n\nThis is the repeating pattern of capital cycles. In the 1860-80s US railroad cycle, the rich weren't the railroad companies — they were *the people who bought land alongside the rails, and Carnegie who made the steel the railroads needed*. The 1920s auto-cycle rich were not only Ford and GM but also *Goodyear who made the tires, and the cement companies that paved the roads*. The 1990s-2000s internet-cycle rich were not Pets.com or Webvan but *Corning who laid the fiber, Cisco who sold the routers* (and short-term, Lucent too). In oil cycles, as bottleneck moved from refining → pipelines → gas stations, different people got rich at each stage.\n\n**The bottleneck moves**. At every stage of the cycle, *whoever holds the next bottleneck* enjoys the largest revenue growth.\n\nIn the 2026 AI capital cycle, GPU (NVIDIA) was the protagonist of the last stage. But *before* the GPU's absolute revenue curve slows, the cycle's capital has already begun moving to the next bottleneck. **Optical**.",
        },
      ],
    },
    {
      heading: "왜 광이 다음 병목인가",
      headingEn: "Why Optical Is the Next Bottleneck",
      blocks: [
        {
          type: "text",
          body: "구조적 이유. 현대 AI 학습 클러스터는 **랙을 넘어선다.** NVIDIA Blackwell NVL72 한 랙에 GPU 72개, NVLink 대역폭 1.8 TB/s(PCIe Gen5의 약 14배). 그러나 프런티어 모델 학습은 **수천 개 GPU**가 **여러 랙 사이에서** 통신한다. 랙 간 통신은 **광**으로 한다.\n\n2025년 3월 GTC에서 Jensen Huang이 한 말 — \"데이터센터가 경기장 크기가 되면 새로운 것이 필요하다. 그게 실리콘 포토닉스다.\"\n\n두 가지 다른 네트워크가 존재한다.\n- **Scale-up(랙 내부)**: NVLink·NVSwitch — 현재는 구리 중심이지만, GPU 수가 늘면서 점진적으로 광·CPO(co-packaged optics)로 이동.\n- **Scale-out(랙 간)**: InfiniBand 또는 Ethernet — **이미 광**. 800G → 1.6T 트랜시버 수요를 만든다.\n\n공급이 제약된 이유. **EML(electro-absorption modulated laser) 칩이 2027년까지 40~60% 공급 부족**(McKinsey 분석). InP 웨이퍼 캐파가 단일 병목점이다. DSP 공급: Broadcom이 800G·1.6T용 PAM4 DSP의 **80% 이상 점유**, Marvell(Inphi 인수)이 유일한 2위.\n\n1.6T 트랜시버 한 개에 EML 칩 약 8개 + DSP 1개 + 고급 실리콘 포토닉스 패키징이 들어간다. **Blackwell GPU 한 장당 광 포트가 약 1.5~3개 필요하다.** NVIDIA가 수백만 개 GPU를 출하하면, 광 트랜시버 수요는 그 1.5~3배다.\n\nLightCounting 예측: AI 클러스터 광 시장은 **$5B(2024년) → $10B+(2026년)**, 2030년 $100B 시장으로 성장. 800G 출하량은 2025년 +60%(약 2,000만 대). 1.6T는 2026년 500만 대+ — **본격 양산의 해**다.",
          bodyEn:
            "Structural reason. Modern AI training clusters *outgrow the rack*. NVIDIA Blackwell NVL72 packs 72 GPUs into one rack with 1.8 TB/s NVLink (about 14x PCIe Gen5). But frontier model training has *thousands of GPUs* communicating *across many racks*. Inter-rack communication runs on — *optics*.\n\nJensen Huang at GTC 2025: \"When the data centers are now the size of a stadium, we need something new — and that's where silicon photonics comes in.\"\n\nTwo distinct networks:\n- **Scale-up (inside rack)**: NVLink/NVSwitch — currently copper-dominated, but moving to optical/CPO (co-packaged optics) as GPU counts per domain grow.\n- **Scale-out (between racks)**: InfiniBand or Ethernet — *already optical*. Drives 800G → 1.6T transceiver demand.\n\nWhy supply is constrained. **EML (electro-absorption modulated laser) chips 40-60% undersupplied through 2027** (per McKinsey analysis). InP wafer capacity is the single chokepoint. DSP supply: Broadcom holds **>80% share** of the high-end PAM4 DSPs used in 800G/1.6T modules; Marvell (Inphi acquisition) is the only credible #2.\n\nOne 1.6T transceiver requires ~8 EML chips + 1 DSP + advanced silicon photonics packaging. *Every Blackwell GPU pulls roughly 1.5-3 optical ports*. When NVIDIA ships millions of GPUs, optical transceiver demand is 1.5-3x that.\n\nLightCounting forecast: AI cluster optics market grows **$5B (2024) → $10B+ (2026)**, $100B market by 2030. 800G shipments +60% in 2025 (~20M units). 1.6T expected >5M units in 2026 — *the volume ramp year*.",
        },
      ],
    },
    {
      heading: "베네피셔리 — Lumentum, Coherent, Astera Labs, Marvell, Arista",
      headingEn: "The Beneficiaries — Lumentum, Coherent, Astera Labs, Marvell, Arista",
      blocks: [
        {
          type: "text",
          body: "사이클이 옮겨가고 있다는 것을 보여주는 가장 강력한 데이터는 — **수혜자들의 매출 가속**이다.\n\n**Lumentum(LITE).** 광 부품·트랜시버 회사. 2023년 11월 Cloud Light를 $750M에 인수 — 800G·1.6T 트랜시버 직접 공급망을 확보했다. 고객은 NVIDIA, Google, Meta, MSFT, AMZN.\n- FY25(2025년 6월 종료): 매출 $1.65B\n- FY26 1분기: $533.8M(+58% YoY)\n- FY26 2분기(2025년 12월): $665.5M(+65.5% YoY), GP율(non-GAAP) 42.5%(+1,020bp), 영업이익률 25.2%\n- **AI·클라우드 매출 비중 60%+**\n- 기존 가이던스 \"FY26 분기당 $600M\"을 **2분기 일찍 달성**\n\n**Coherent(COHR).** II-VI·Coherent 합병 후 매출의 70%+가 데이터센터·통신. InP 웨이퍼부터 트랜시버까지 수직 통합.\n- FY26 1분기: $1.58B(+19% YoY, 합병 기준)\n- FY26 2분기: $1.70B(+17.5% YoY)\n- 첫 1.6T 트랜시버 매출: FY25 4분기(2025년 6월 분기)\n- CEO Jim Anderson: \"1.6T 모듈이 1년 전 예상보다 훨씬 빠르게 양산되고 있다. 수주잔고가 **2028년까지** 이어진다.\"\n- 캐파 전환: 3인치 → 6인치 InP 웨이퍼 — **웨이퍼당 칩 4배, 비용 절반**\n\n**Astera Labs(ALAB).** PCIe·CXL 리타이머와 패브릭 스위치를 만든다. 2024년 3월 IPO. AI 서버의 \"연결 접착제\" 역할.\n- 2024년 매출 +242% YoY\n- 2025년 3분기: $230.6M(+104% YoY), 영업이익률(non-GAAP) 41.7%\n- Aries 6(PCIe Gen6 리타이머) — 3분기 매출의 20%+. 시장에서 유일한 양산 Gen6 리타이머\n- Scorpio(패브릭 스위치) — 2025년 2분기 매출의 10%+, 회사 사상 가장 빠른 양산\n- 2025년 5월 NVIDIA NVLink Fusion 통합 — 하이퍼스케일러가 커스텀 XPU를 만들 때 NVIDIA GPU와 NVLink로 직접 통신할 수 있도록 Astera 실리콘을 사용\n- 시가총액 $55~56B(2026년 5월 기준), 미래 매출 대비 50~60배 — **병목 이동 테제의 프리미엄 프록시**\n\n**Marvell(MRVL).** 두 축: 커스텀 AI 실리콘(AWS Trainium 2·3, MS Maia) + 광 DSP(Inphi 인수, Nova 2가 업계 최초 1.6T DSP).\n- FY26 매출 약 $8.2B(+42% YoY); 데이터센터 매출 $6B 초과(+46%)\n- FY27 가이던스: 매출 +30% 이상 → 약 $11B; 데이터센터 +40%\n- FY28 가이던스: 약 $15B; \"두 번째 Tier-1 하이퍼스케일러 XPU 양산 시작\"\n- Broadcom + Marvell = 커스텀 ASIC 시장 약 95% 점유\n\n**Arista(ANET).** Ethernet vs InfiniBand 베팅. Ultra Ethernet Consortium을 주도한다.\n- FY25 매출 $9.0B(+28.6%), 4분기에 사상 처음 분기 순이익 $1B 돌파\n- **FY26 AI 네트워킹 목표 $3.25B로 2배 상향**(이전 $1.5B)\n- Meta + Microsoft가 매출의 40~48%\n- Meta의 가장 큰 이더넷 AI 클러스터에 Arista 7700R4 채택",
          bodyEn:
            "The strongest data showing the cycle is moving is — *the revenue acceleration of the beneficiaries*.\n\n**Lumentum (LITE).** Optical components and transceivers. Acquired Cloud Light for $750M in Nov 2023 — direct 800G/1.6T transceiver supply chain. Customers: NVIDIA, Google, Meta, MSFT, AMZN.\n- FY25 (ended June 2025): revenue $1.65B\n- Q1 FY26: $533.8M (+58% YoY)\n- Q2 FY26 (Dec 2025): $665.5M (+65.5% YoY), NG-GM 42.5% (+1,020bps YoY), NG-OM 25.2%\n- *AI+cloud revenue mix 60%+*\n- Prior guidance \"~$600M Q FY26\" hit *two quarters early*\n\n**Coherent (COHR).** Post-II-VI/Coherent merger, 70%+ revenue from data center and comms. Vertical from InP wafer to transceiver.\n- Q1 FY26: $1.58B (+19% YoY pro-forma)\n- Q2 FY26: $1.70B (+17.5% YoY)\n- First 1.6T transceiver revenue: Q4 FY25 (June 2025 quarter)\n- CEO Jim Anderson: \"1.6T modules ramping *much faster* than expected a year ago. Orders extend **through 2028**.\"\n- Capacity shift: 3-inch → 6-inch InP wafers — *4x chips per wafer, half the cost*\n\n**Astera Labs (ALAB).** PCIe/CXL retimers, fabric switches. IPO March 2024. The \"connectivity glue\" of AI servers.\n- 2024 revenue +242% YoY\n- Q3 2025: $230.6M (+104% YoY), NG-OM 41.7%\n- Aries 6 (PCIe Gen6 retimer) — >20% of Q3 revenue. The only Gen6 retimer in volume\n- Scorpio (fabric switch) — >10% of Q2 2025 revenue, fastest ramp in company history\n- May 2025 NVIDIA NVLink Fusion integration — hyperscalers can build custom XPUs that talk directly to NVIDIA GPUs via NVLink using Astera silicon\n- Market cap $55-56B (May 2026), trading 50-60x forward sales — *premium proxy on the bottleneck rotation thesis*\n\n**Marvell (MRVL).** Two pillars: custom AI silicon (AWS Trainium 2/3, MS Maia) + optical DSP (Inphi heritage, Nova 2 = industry's first 1.6T DSP).\n- FY26 revenue ~$8.2B (+42% YoY); data center revenue >$6B (+46%)\n- FY27 guidance: revenue >+30% to ~$11B; data center +40%\n- FY28 guidance: ~$15B; \"second tier-1 hyperscaler XPU ramping\"\n- Broadcom + Marvell = ~95% of custom ASIC market\n\n**Arista (ANET).** The Ethernet-vs-InfiniBand bet. Leads Ultra Ethernet Consortium.\n- FY25 revenue $9.0B (+28.6%), first-ever $1B quarterly net income in Q4\n- **FY26 AI networking target doubled to $3.25B** (from prior $1.5B)\n- Meta + Microsoft = 40-48% of revenue\n- Meta chose Arista 7700R4 for its largest Ethernet AI cluster",
        },
        {
          type: "chart",
          chart: {
            id: "optical-mix",
            title: "Lumentum 매출 mix 변화 (Telecom → AI/DC, FY22-FY26, $B)",
            titleEn: "Lumentum Revenue Mix Shift (Telecom → AI/DC, FY22-FY26, $B)",
            caption:
              "출처: Lumentum 분기 earnings (SEC 8-K), Cloud Light 인수 (2023.11). FY22의 telecom 중심 매출이 FY26 DC 60%+ 로 완전 재편. 이게 \"광 사이클이 통신 사이클에서 AI 사이클로 옮겨간\" 정량 증거.",
            captionEn:
              "Source: Lumentum quarterly earnings (SEC 8-K), Cloud Light acquisition (Nov 2023). FY22's telecom-dominated mix completely reshaped to DC 60%+ by FY26. Quantitative proof that 'the optical cycle shifted from telecom to AI'.",
            data: [
              { fy: "FY22", dc: 0.30, telecom: 1.10, industrial: 0.20 },
              { fy: "FY23", dc: 0.40, telecom: 0.95, industrial: 0.18 },
              { fy: "FY24", dc: 0.65, telecom: 0.75, industrial: 0.15 },
              { fy: "FY25", dc: 1.00, telecom: 0.50, industrial: 0.15 },
              { fy: "FY26E", dc: 1.80, telecom: 0.45, industrial: 0.15 },
            ],
          },
        },
      ],
    },
    {
      heading: "CXL과 PCIe Gen6/7 — Astera Labs가 쥔 두 번째 병목",
      headingEn: "CXL and PCIe Gen 6/7 — Astera's Second Bottleneck",
      blocks: [
        {
          type: "text",
          body: "광이 첫 번째 다음 병목이라면, **CXL(Compute Express Link)과 PCIe Gen6·Gen7 리타이머가 두 번째 병목**이다.\n\n구조적 이유. AI 서버 내부에서 GPU·CPU·메모리·스토리지가 PCIe로 통신한다. PCIe Gen5(32 Gb/s)에서 Gen6(64 Gb/s)으로 가면 구리 트레이스가 도달 가능한 거리가 절반으로 줄어든다. **리타이머 없이는 신호가 충분히 멀리 가지 못한다.** Astera Labs의 Aries 6가 시장에서 유일하게 양산되는 Gen6 리타이머다.\n\nCXL은 메모리 풀링·공유 기술이다. 여러 서버가 하나의 메모리 풀을 공유한다. CXL 1.0(2019) → 2.0(2020) → 3.0(2022) → 3.1(2024). **CXL 4.0이 2025년 11월 18일 발표**됐고, PCIe Gen7 위에서 동작한다. 2025년부터 새 서버의 90%+가 CXL 지원. **2026년이 멀티 랙 메모리 풀의 첫 본격 도입의 해**다.\n\n왜 중요한가. CXL이 작동하면 **데이터센터 전체의 메모리를 풀로 공유할 수 있다.** HBM은 비싸고 한정돼 있다. CXL을 통해 GPU가 외부 DRAM에 접근할 수 있으면, AI 모델 학습 시 메모리 제약이 풀린다. **Astera가 그 가능성을 실현하는 실리콘을 만든다.**\n\n그래서 Astera의 매출 곡선이 그대로 \"AI 사이클의 두 번째 병목이 풀리는 속도\"의 프록시 지표가 된다.",
          bodyEn:
            "If optical is the first next-bottleneck, **CXL (Compute Express Link) and PCIe Gen6/Gen7 retimers are the second**.\n\nStructural reason. Inside AI servers, GPU-CPU-memory-storage communicate over PCIe. Going from PCIe Gen5 (32 Gb/s) to Gen6 (64 Gb/s) halves the reachable copper trace distance. *Without a retimer, the signal doesn't reach far enough*. Astera Labs' Aries 6 is the only Gen6 retimer in volume production.\n\nCXL is memory pooling/sharing technology. Multiple servers share memory pools. CXL 1.0 (2019) → 2.0 (2020) → 3.0 (2022) → 3.1 (2024). **CXL 4.0 announced Nov 18, 2025**, running on PCIe Gen7. From 2025, 90%+ of new servers are CXL-capable. *2026 is the first real deployment year of multi-rack memory pools*.\n\nWhy this matters: when CXL works — *the entire data center's memory can be shared as a pool*. HBM is expensive and limited. If CXL lets GPUs access external DRAM, training memory constraints relax. *Astera makes the silicon that enables this*.\n\nSo Astera's revenue trajectory is the direct proxy for \"how fast AI's second bottleneck is unclogging.\"",
        },
        {
          type: "chart",
          chart: {
            id: "cxl-adoption",
            title: "PCIe Gen5 → Gen6 → Gen7 채택률 (신규 서버 deployment %)",
            titleEn: "PCIe Gen5 → Gen6 → Gen7 Adoption (% of New Server Deployments)",
            caption:
              "출처: ServeTheHome, SemiAnalysis, AsteraLabs IR. CXL 4.0 발표 (2025.11.18), Gen7 첫 사양 출시. 2026 Gen6 본격 deployment, 2027 Gen7 시작. Astera Aries 6가 시장 단독 양산.",
            captionEn:
              "Sources: ServeTheHome, SemiAnalysis, Astera Labs IR. CXL 4.0 announced Nov 18, 2025, Gen7 first spec released. 2026 Gen6 broad deployment; 2027 Gen7 starts. Astera Aries 6 is the only Gen6 retimer in volume.",
            data: [
              { year: "2024", Gen5: 80, Gen6: 15, Gen7: 0 },
              { year: "2025", Gen5: 60, Gen6: 35, Gen7: 5 },
              { year: "2026", Gen5: 35, Gen6: 55, Gen7: 10 },
              { year: "2027", Gen5: 15, Gen6: 60, Gen7: 25 },
              { year: "2028", Gen5: 5,  Gen6: 50, Gen7: 45 },
            ],
          },
        },
      ],
    },
    {
      heading: "한국 — 광에서는 직접 베타가 약하다 (그러나)",
      headingEn: "Korea — Direct Optical Beta Is Weak (But)",
      blocks: [
        {
          type: "text",
          body: "솔직히 — **한국은 광 분야에서 직접 베타가 약하다.** 한국의 반도체 DNA는 메모리(DRAM·NAND·HBM)이지 III-V 화합물 반도체(InP·GaAs)가 아니다. EML·InP 공급망은 일본·미국·유럽이 강세다(Mitsubishi, Sumitomo, Lumentum, Coherent). 한국 파운드리(SK siltron, DB HiTek)에는 InP 캐파가 없다.\n\n한국 상장 광 종목(대부분 소형주):\n- **오이솔루션(OE Solutions, 138080)** — 한국 최대 데이터컴 트랜시버 순수 종목. 2024년 매출 -30.4%(3인치 InP 사이클 저점) → 2025년 매출 **+79.2%**, 약 ₩57.3B(800G·1.6T 발주 선행). 2026년 5월 1.6T + CPO 로드맵 발표.\n- **옵티코어(Opticore)** — 2025년 12월 ₩4.0B 규모 400G·800G AI 데이터센터 트랜시버 공급 계약(전년 매출의 17.2%).\n- **빛과전자(BNE Technology)** — 800G·1.6T 퀄 마무리 단계, **2026년 하반기 매출 변곡점 예상**.\n- **라이콤(Lightcom)** — 광 증폭기·파이버 레이저. AI 데이터센터 직접 노출은 낮음.\n- **RFHIC** — GaN PA + 포토닉스 패키지 시설 투자 발표(2026년 5월).\n\n**그러나 한국이 진짜 이기는 곳은 광이 아니라 HBM이다**(Memo 4 참조). 한국 투자자가 광에 노출되려면 — 미국 종목(LITE·COHR·ALAB·MRVL·ANET)을 직접 사는 게 정직한 답이다.\n\n한국이 **간접적으로** 광 사이클의 영향을 받는 두 가지 경로:\n1. **SK하이닉스 HBM이 더 잘 팔리려면** 광이 빨리 풀려야 한다(광이 막히면 데이터센터 클러스터를 확장 못 하고 → HBM 수요가 둔화된다).\n2. **삼성 실리콘 포토닉스 2028년 양산 로드맵** — 2027년 출시 / 2028년 양산. CXL 3.1 메모리 모듈(CMM-D)을 2025년 10월 OCP Global Summit에서 공개. 성공하면 한국이 5년 후 광 분야의 직접 베타를 갖게 된다.\n\n지금은 — **한국의 광 베타를 SK하이닉스 HBM의 함수로 보는 것**이 가장 정확하다.",
          bodyEn:
            "Honestly — *Korea has weak direct beta in optical*. Korea's semiconductor DNA is memory (DRAM/NAND/HBM), not III-V (InP/GaAs). EML/InP supply chains favor Japan, US, Europe (Mitsubishi, Sumitomo, Lumentum, Coherent). Korean fabs (SK siltron, DB HiTek) lack InP capacity.\n\nKorean listed optical names (mostly small caps):\n- **OE Solutions (138080)** — Korea's biggest datacom transceiver pure-play. 2024 revenue -30.4% (3-inch InP cycle bottom) → 2025 revenue **+79.2%** to ~₩57.3B (800G/1.6T pull-in). 1.6T+CPO roadmap announced May 2026.\n- **Opticore** — Dec 2025: ₩4.0B 400G/800G AI DC transceiver supply contract (17.2% of prior year revenue).\n- **BNE Technology** — 800G/1.6T qualification ending; **revenue inflection expected H2 2026**.\n- **Lightcom** — optical amplifiers, fiber laser. Less direct AI DC exposure.\n- **RFHIC** — GaN PA + photonics package facility investment announced (May 2026).\n\n*But Korea's real win is not optical — it's HBM* (see Memo 4). Korean investors wanting optical exposure: honest answer is to buy LITE/COHR/ALAB/MRVL/ANET directly in the US market.\n\nTwo *indirect* paths by which Korea benefits from optical:\n1. **For SK Hynix HBM to sell more** — optical must unclog (if optical bottlenecks, data center clusters can't expand → HBM demand softens).\n2. **Samsung Silicon Photonics 2028 mass production roadmap** — 2027 launch / 2028 mass production. Samsung showed CMM-D (CXL 3.1) memory module at OCP Global Summit Oct 2025. If successful, Korea creates a direct optical beta 5 years out.\n\nFor now — *Korean optical beta is most accurately viewed as a function of SK Hynix HBM*.",
        },
      ],
    },
    {
      heading: "결론 — 다음 병목을 누가 쥐는가",
      headingEn: "Conclusion — Who Holds the Next Bottleneck",
      blocks: [
        {
          type: "text",
          body: "이 메모의 명제는 단순하다 — **사이클의 끝에서 부자가 되는 건 주인공이 아니라 다음 병목을 쥔 자다.**\n\n1849년 골드러시에서 부자는 광부가 아니라 Levi Strauss였다. 1990~2000년 인터넷에서 부자는 Pets.com이 아니라 Corning과 Cisco였다(단기적으로는 Lucent도 — 1편 참조). 2026년 AI에서 다음 부자가 누구일지는 **이미 결정되고 있다.** 지표가 그것을 보여준다.\n\n**첫째, 광 트랜시버.** Lumentum, Coherent — 둘 다 1년 전 예상보다 빠르게 매출이 양산 단계에 들어섰다. 800G → 1.6T 전환이 2026~27년의 핵심이다. **Coherent CEO의 \"수주잔고가 2028년까지 이어진다\"**는 발언이 사이클의 4~5년 가시성을 보여준다.\n\n**둘째, CXL·PCIe 리타이머.** Astera Labs가 시장에서 유일한 양산 Gen6 리타이머다. 매출이 분기마다 +100%+. NVIDIA NVLink Fusion 통합으로 \"하이퍼스케일러 커스텀 XPU + NVIDIA GPU 하이브리드\"의 핵심 실리콘이 됐다.\n\n**셋째, 커스텀 ASIC 실리콘.** Marvell + Broadcom이 합쳐 95% 점유. Marvell이 FY26 $6B → FY28 $15B(\"두 번째 Tier-1 XPU 진입\") 가이던스를 제시했다.\n\n**넷째, 이더넷 네트워킹.** Arista가 Ultra Ethernet Consortium을 주도하며 AI 네트워킹 가이던스를 2배 상향. NVIDIA InfiniBand vs Ethernet 아키텍처 전쟁의 다음 단계다.\n\n이 네 수혜자는 **NVIDIA보다 밸류에이션 부담이 적으면서** — NVIDIA보다 **더 오래** 사이클을 탈 수 있다. **광 사이클은 GPU 사이클보다 2~4분기 늦게 온다.** GPU 사이클이 정점을 친 후에도, 광 사이클은 그 분기들만큼 더 양산된다(Coherent의 \"2028년까지 수주\"가 그 증거다).\n\n한국 관점에서: 직접 노출은 약하지만 — **SK하이닉스의 HBM 매출이 광 사이클의 함수**다. 광이 막히면 클러스터를 확장 못 하고, HBM도 안 팔린다. 그래서 한국 투자자도 — **Lumentum·Coherent·Astera의 분기 매출을 SK하이닉스의 선행 지표**로 봐야 한다.\n\n**NVIDIA가 GPU 사이클의 NVIDIA였다면, Lumentum이 광 사이클의 NVIDIA가 될 수 있다 — 단, GPU 사이클이 멈추기 전에.**",
          bodyEn:
            "The single proposition of this memo: **at the end of a cycle, the rich aren't the protagonists — they're the ones holding the next bottleneck**.\n\nIn 1849 the rich were Levi Strauss, not the miners. In the 1990s-2000s internet, the rich were Corning and Cisco, not Pets.com (short-term Lucent too — see Memo 1). In 2026 AI — the next rich are *already being decided*. The indicators show.\n\n*First*, optical transceivers. Lumentum, Coherent — both ramping faster than expected a year ago. The 800G → 1.6T transition is the 2026-27 core. **Coherent CEO's \"orders extend through 2028\"** signals 4-5 years of cycle visibility.\n\n*Second*, CXL/PCIe retimers. Astera Labs is the only Gen6 retimer in volume. Quarterly revenue growth +100%+. NVIDIA NVLink Fusion integration makes Astera the key silicon for \"hyperscaler custom XPU + NVDA GPU hybrid.\"\n\n*Third*, custom ASIC silicon. Marvell + Broadcom = 95% combined share. Marvell guides FY26 $6B → FY28 $15B (\"second tier-1 XPU entering\").\n\n*Fourth*, Ethernet networking. Arista leads Ultra Ethernet Consortium, doubled AI networking guidance. The next stage of the architectural war between NVIDIA InfiniBand and Ethernet.\n\nThese four beneficiaries carry *less valuation burden than NVDA* — and can ride the cycle *longer* than NVDA. *The optical cycle lags the GPU cycle by 2-4 quarters*. Even after GPU peaks, optical can ramp for those quarters (Coherent's \"orders through 2028\" is the evidence).\n\nFrom the Korean view: direct exposure is weak — but *SK Hynix HBM revenue is a function of the optical cycle*. If optical bottlenecks, clusters can't expand, and HBM doesn't sell. So Korean investors should also — *use Lumentum/Coherent/Astera quarterly revenue as a leading indicator for SK Hynix*.\n\n*If NVIDIA was the NVIDIA of the GPU cycle, Lumentum may become the NVIDIA of the optical cycle. Just — before the GPU cycle stops.*",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "다음 메모 — 와트가 칩을 이긴 날 (이미 발행)",
            headingEn: "Next Memo — When Watts Beat Chips (already published)",
            body: "Memo 6에서 다룬 내용 — 광까지 풀려도 결국 막히는 것은 전력이라는 사실. AI 사이클의 결정 변수가 칩에서 광으로, 광에서 와트로 옮겨가는 마지막 단계.",
            bodyEn:
              "Memo 6 examines how even when optical unclogs, what ultimately bottlenecks is power. The last stage where the binding variable moves from chips to optics to watts.",
          },
        },
      ],
    },
  ],
  references: [
    { id: 1, author: "Lumentum Holdings", title: "Q2 FY26 8-K Earnings Release", source: "SEC EDGAR", year: "2026", url: "https://www.sec.gov/Archives/edgar/data/0001633978/000162828026005005/lite_ex991xq2fy26.htm" },
    { id: 2, author: "Coherent Corp", title: "FY26 Quarterly Filings", source: "SEC EDGAR", year: "2025-2026", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000820318" },
    { id: 3, author: "Astera Labs", title: "S-1 IPO Filing (Feb 2024) + subsequent 10-Q", source: "SEC EDGAR", year: "2024-2026", url: "https://www.sec.gov/Archives/edgar/data/0001736297/000119312524040419/d285484ds1.htm" },
    { id: 4, author: "Marvell Technology", title: "Q1 FY27 8-K Earnings Release", source: "SEC EDGAR", year: "2026", url: "https://www.sec.gov/Archives/edgar/data/0001835632/000183563226000014/q127_8kx522026ex-991.htm" },
    { id: 5, author: "Arista Networks", title: "Q4 FY25 8-K Earnings Release", source: "SEC EDGAR", year: "2025", url: "https://www.sec.gov/Archives/edgar/data/0001596532/000159653225000018/ex991q424-earningsrelease.htm" },
    { id: 6, author: "NVIDIA Corporation", title: "GTC 2025 Keynote — Spectrum-X / Quantum-X CPO Photonics", source: "NVIDIA", year: "2025-03", url: "https://nvidianews.nvidia.com/news/nvidia-announces-spectrum-x-photonics-co-packaged-optics-networking-switches-to-scale-ai-factories-to-millions-of-gpus" },
    { id: 7, author: "LightCounting Market Research", title: "March 2025 — NVIDIA CPO is the First Step in a Long Journey", source: "LightCounting", year: "2025", url: "https://www.lightcounting.com/research-note/march-2025-nvidias-cpo-is-the-first-step-in-a-long-journey-395" },
    { id: 8, author: "LightCounting Market Research", title: "March 2026 — Ethernet Optics ($100B by 2030)", source: "LightCounting", year: "2026", url: "https://www.lightcounting.com/newsletter/en/march-2026-ethernet-optics-382" },
    { id: 9, author: "Cignal AI", title: "800GbE Optics Shipments to Grow 60% in 2025", source: "Cignal AI", year: "2025", url: "https://cignal.ai/2025/05/800gbe-optics-shipments-to-grow-60-in-2025/" },
    { id: 10, author: "Ultra Ethernet Consortium", title: "Specification + ESUN scale-up workstream", source: "UEC / Linux Foundation", year: "2023-2025", url: "https://ultraethernet.org/" },
    { id: 11, author: "Astera Labs / NVIDIA", title: "Expanded NVLink Fusion ecosystem integration (May 2025)", source: "Astera Labs Press Release", year: "2025-05", url: "https://www.asteralabs.com/news/astera-labs-expands-collaboration-with-nvidia-to-advance-nvlink-fusion-ecosystem/" },
    { id: 12, author: "OE Solutions / 더벨 / 머니투데이", title: "한국 광 부품 회복 2025-26 (오이솔루션 +79%)", source: "한국 언론 / IR", year: "2025-2026", url: "https://www.mt.co.kr/stock/2026/05/08/2026050814134942456" },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════
// NOTE #12 — AI Capital Cycle ⑦ (시리즈 마지막) — 단 하나의 숫자
// ══════════════════════════════════════════════════════════════════════════════

const aiCycle7: NoteData = {
  slug: "ai-capital-cycle-7",
  category: "macro",
  status: "published",
  series: "ai-capital-cycle",
  seriesOrder: 7,
  title: "AI 자본 사이클 ⑦ — 단 하나의 숫자",
  titleEn: "AI Capital Cycle ⑦ — The One Number",
  description:
    "1987년 Robert Solow가 말했다 — \"컴퓨터 시대는 어디에나 보인다, 생산성 통계만 빼고.\" 1999년에도 그 답은 사후에야 알 수 있었다. 2026년은 다르다. Anthropic Economic Index가 분기마다 직업별 AI 침투율을 측정한다. 컴퓨터 프로그래머 74.5%, 고객 서비스 70.1%, 데이터 입력 67.1%. 1999년에 알 수 없었던 것을 우리는 분기마다 본다.",
  descriptionEn:
    "In 1987 Robert Solow said: 'You can see the computer age everywhere but in the productivity statistics.' In 1999 the answer was knowable only after the fact. 2026 is different. The Anthropic Economic Index measures AI penetration by occupation quarterly. Computer programmers 74.5%, customer service 70.1%, data entry 67.1%. What we couldn't see in 1999, we are seeing now.",
  date: "2026-05-29",
  readingMinutes: 20,
  keyPoints: [
    "Anthropic Economic Index 2025년 2월 출시. Clio 엔진이 미국 노동부 O*NET 20,000+개 직업 태스크에 Claude 대화를 매핑. 분기마다 갱신. 1987년 Solow의 생산성 패러독스 이후 처음으로 **실시간** 노동 대체를 측정한다.",
    "AEI 5번째 리포트(2026년 3월) 핵심 수치: 컴퓨터 프로그래머 74.5%, 고객 서비스 70.1%, 데이터 입력 67.1%, 의료기록 66.7%. **'증강(augmentation)' 47% vs '자동화(automation)' 49.1%** — API 데이터에서 처음으로 자동화가 증강을 추월했다.",
    "Dario Amodei(2025년 5월 Axios): \"AI가 화이트칼라 신입 일자리 절반을 없앨 수 있다. 실업률 10~20%까지.\" Sam Altman(2026년 5월): \"내가 꽤 틀렸다. 그만큼 많이 일어나지 않았다\" — IPO 직전 입장 후퇴.",
    "Stanford Brynjolfsson(2025년 8월): ADP 2,500만 명 급여 데이터, AI 노출 직업의 22~25세 노동자 고용 -13%(2022년 말 대비). AI는 **대량 해고가 아니라 신규 채용을 하지 않는** 방식으로 노동 시장에 영향을 준다.",
    "BLS / 뉴욕 연준(2026): 컴퓨터과학 신졸업자 실업률 6.1%, 컴퓨터공학 7.5% — 철학 전공보다 높다. 샌프란시스코 정보 섹터 2025년 -4,500명(-4%), Bay Area 테크 layoff 약 40,000명.",
    "구체적인 AI 관련 인력 감축: Salesforce 4,000+(Agentforce), Microsoft 15,000+(코드의 30% AI 작성), Klarna 700(이후 일부 복귀), IBM 8,000명(AskHR). 합산 13만 명 이상(2025년).",
    "Cisco 2025년 12월 10일: 25년 만에 $80 신고가 회복. FY00 → FY25 매출 3배($18.9B → $56.7B), EPS 7배. 그러나 **실질 기준으로는 여전히 -50%** — 비즈니스가 망하지 않아도 멀티플이 무너진 25년.",
    "Cahn의 $600B Question 업데이트(Sequoia 2025년 12월): 2026년 하이퍼스케일러 자본지출 $700~725B vs 2025년 엔터프라이즈 AI 매출 $37B(Menlo). 갭 $500B+. 매출이 3배 성장해도 $600B 갭 잔존.",
    "한국 — KDI: 2030년경까지 직업의 90%가 90%+ 태스크 자동화 가능. 카카오·라인·쿠팡·배민·당근·토스 2025년 신규 SWE 채용 **제로**. Naver 신규 838명(2021) → 258명(2024) — 3배 감소.",
    "시리즈 결론: 회로(1)·모델(2)·IPO(3)·HBM(4)·광(5)·전력(6) 모든 메모가 단일 질문으로 모인다 — **AI가 진짜 노동을 대체하는가.** 1999년에는 그 답을 사후에야 알 수 있었다. 2026년엔 분기마다 본다. 그게 이 사이클의 진짜 차이다.",
  ],
  keyPointsEn: [
    "Anthropic Economic Index launched Feb 2025. Clio engine maps Claude conversations to O*NET 20,000+ tasks. Quarterly updates. First *real-time* labor substitution measurement since 1987's Solow productivity paradox",
    "AEI 5th report (Mar 2026) key figures: computer programmers 74.5%, customer service 70.1%, data entry 67.1%, medical records 66.7%. **'augmentation' 47% vs 'automation' 49.1%** — automation surpassed augmentation for first time in API data",
    "Dario Amodei (May 2025 Axios): 'AI could wipe out half of all entry-level white-collar jobs. Unemployment 10-20%.' Sam Altman (May 2026): 'I was pretty wrong. It didn't happen as much.' — pre-IPO walk-back",
    "Stanford Brynjolfsson (Aug 2025): ADP 25M-worker dataset, age 22-25 in AI-exposed jobs saw -13% employment since late 2022. AI's mechanism is *not mass layoffs but no new hiring*",
    "BLS / NY Fed (2026): Computer Science graduate unemployment 6.1%, Computer Engineering 7.5% — higher than philosophy. SF information sector 2025 -4,500 jobs (-4%), Bay Area tech layoffs ~40,000",
    "Specific AI-cited layoffs: Salesforce 4,000+ (Agentforce), Microsoft 15,000+ (30% of code AI-written), Klarna 700 (later reversed), IBM 8,000 HR (AskHR). Combined 130,000+ (2025)",
    "Cisco Dec 10, 2025: reclaimed $80 ATH after 25 years. FY00 → FY25 revenue 3x ($18.9B → $56.7B), EPS 7x. But *in real terms still -50%* — 25 years where business didn't fail but the multiple did",
    "Cahn's $600B Question update (Sequoia Dec 2025): 2026 hyperscaler capex $700-725B vs 2025 enterprise AI revenue $37B (Menlo). Gap $500B+ — gap remains even at 3x growth",
    "Korea — KDI: by ~2030, 90% of jobs could have 90%+ of tasks automatable. Kakao, Line, Coupang, Baemin, Daangn, Toss had *zero* new SWE hires in 2025. Naver: 838 hires (2021) → 258 (2024), 3x decline",
    "Series conclusion: circuit (1), models (2), IPO (3), HBM (4), optical (5), power (6) — every memo collapses into one question: *does AI actually displace labor?* In 1999 we could only know ex-post. In 2026 we see it quarterly. That is the real difference of this cycle",
  ],
  sections: [
    {
      heading: "1987년의 Solow paradox, 그리고 그것이 이번엔 다른 이유",
      headingEn: "1987's Solow Paradox, and Why This Time Is Different",
      blocks: [
        {
          type: "text",
          body: "1987년 7월 12일. Robert Solow가 New York Times Book Review에 한 줄을 썼다 — \"You can see the computer age everywhere but in the productivity statistics.\" **컴퓨터 시대는 어디에나 보인다 — 생산성 통계만 빼고.** 이 한 줄이 \"Solow 패러독스\"로 30년간 인용된다.\n\nSolow의 패러독스는 1970~1980년대 미국 기업이 IT에 천문학적으로 투자했는데도 매크로 생산성 통계는 오히려 둔화됐다는 사실을 가리킨다. 1990년대 중반(1995~2004년)에 가서야 생산성 부스트가 매크로 데이터에 나타났다. Brynjolfsson과 Hitt의 후속 연구: \"$1의 IT 자본지출이 $12의 시장가치와 상관관계\" — 즉 $11의 무형 보완 투자(프로세스 재설계, 교육, 조직 변화)가 함께 있어야 IT가 생산성으로 전환된다는 뜻이다. **생산성은 IT 투자에서 평균 10년 늦게 나타난다.**\n\n이게 1999년 닷컴 사이클의 영원한 미스터리였다. 인터넷이 산업을 바꿀 것은 모두가 알았다. 그러나 그 변화가 **언제** 매크로 생산성으로 나타날지는 사후에야 알 수 있었다.\n\n2026년은 다르다. **그 미스터리를 분기마다 측정할 수 있게 됐다.** **Anthropic Economic Index가 그 도구다.**",
          bodyEn:
            "July 12, 1987. Robert Solow wrote one line in a New York Times Book Review. \"You can see the computer age everywhere but in the productivity statistics.\" That single line was cited as the \"Solow paradox\" for thirty years.\n\nSolow's paradox pointed to the fact that 1970s-80s US firms invested astronomically in IT, yet macro productivity statistics actually slowed. The productivity boost didn't appear in macro data until the mid-1990s (1995-2004). Brynjolfsson and Hitt's follow-up: \"$1 of IT capex correlated with $12 of market value\" — meaning the other $11 had to be intangible complementary investment (process redesign, training, organizational change) for IT to translate into productivity. *Productivity arrives, on average, 10 years after IT investment*.\n\nThis was the enduring mystery of the 1999 dotcom cycle. Everyone knew the internet would change industries. But *when* that change would show up in macro productivity — could only be known ex-post.\n\n2026 is different. *That mystery can now be measured quarterly*. **The Anthropic Economic Index is that instrument**.",
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "You can see the computer age everywhere but in the productivity statistics.",
            bodyEn: "You can see the computer age everywhere but in the productivity statistics.",
            heading: "— Robert Solow, NYT Book Review, 1987년 7월 12일",
            headingEn: "— Robert Solow, NYT Book Review, July 12, 1987",
          },
        },
      ],
    },
    {
      heading: "Anthropic Economic Index — 분기마다 측정되는 노동 대체",
      headingEn: "The Anthropic Economic Index — Labor Substitution Measured Quarterly",
      blocks: [
        {
          type: "text",
          body: "2025년 2월 10일. Anthropic이 **Economic Index** 첫 리포트를 발표했다. **Clio**(Claude Insights and Observations) 엔진이 Claude.ai 대화(약 100만 건)를 분석해 **미국 노동부 O*NET 데이터베이스의 20,000+개 직업 태스크에 매핑**한다. 어느 직업의 어느 태스크에 Claude가 얼마나 사용되는지를 정량으로 측정한다. 프라이버시 보호 — Anthropic 직원이 원시 대화를 직접 보지 못한다.\n\n이건 단순한 사용량 통계가 아니다. **직업별 AI 침투율의 분기 시계열**이다. 1987년 Solow 패러독스 이후 처음으로 가능해진 측정이다.\n\n리포트의 흐름:\n- **Report 1(2025년 2월)**: 약 36%의 직업이 태스크의 25% 이상을 Claude로 처리. 4%의 직업은 75% 이상 처리. **증강 57% vs 자동화 43%**.\n- **Report 2(2025년 중반, Sonnet 3.7 데이터)**: 자동화 지시가 27% → 39%로 상승. **API 데이터에서 처음으로 자동화(49.1%)가 증강(47%)을 추월.**\n- **Report 3(2025년 9월, 지리적 분석)**: 150여 개국, 미국 50개 주 분석. AI Usage Index(AUI): 싱가포르 4.6배, 캐나다 2.9배(1인당 기대 대비). 인도 0.27, 나이지리아 0.20. 미국 내 워싱턴 DC 3.82배, 유타 3.78배. **인도에서는 코딩이 Claude 태스크의 50% 이상**.\n- **Report 4(2026년 1월, Economic Primitives)**: 태스크 복잡도, 인간 스킬, AI 스킬, 자율성, 성공률 — 5개 기본 변수 도입. 누적 — **직업의 49%가 태스크의 25% 이상을 Claude로 처리한 경험이 있음**. 컴퓨터·수학 직군 35.8%, 사무·관리지원 34.3%, 비즈니스·재무 28.4%, 영업 26.9%, 법무 20.4%.\n- **Report 5(2026년 3월, Learning Curves)**: 6개월 이상 경험 사용자가 신규 사용자보다 같은 태스크에서 10% 높은 성공률. 상위 10개 태스크가 전체 대화의 24% → 19%로 분산. 미국 상위 5개 주 점유가 30% → 24%로 분산.\n\n**가장 충격적인 단일 수치**: 컴퓨터 프로그래머 — **74.5%**(단일 직업 최고치). 고객 서비스 70.1%. 데이터 입력 67.1%. 의료기록 66.7%.",
          bodyEn:
            "February 10, 2025. Anthropic published the first *Economic Index* report. The **Clio** (Claude Insights and Observations) engine analyzes Claude.ai conversations (~1M) and maps them — to *20,000+ occupation tasks in the US Labor Department's O*NET database*. Quantitative measurement of how much Claude is used in which task of which occupation. Privacy preserved (Anthropic employees do not access raw conversations).\n\nThis is not a simple usage statistic. *It is a quarterly time series of AI penetration by occupation*. The first such measurement made possible since the 1987 Solow paradox.\n\nReport progression:\n- **Report 1 (Feb 2025)**: ~36% of occupations have 25%+ of tasks handled by Claude. 4% of occupations have 75%+. *57% augmentation vs 43% automation*\n- **Report 2 (mid-2025, Sonnet 3.7 data)**: automation directive 27% → 39%. **For the first time in API data, automation (49.1%) surpassed augmentation (47%)**\n- **Report 3 (Sept 2025, geographic)**: 150+ countries, 50 US states. AUI (AI Usage Index): Singapore 4.6x, Canada 2.9x (per capita expected). India 0.27, Nigeria 0.20. Within US: Washington DC 3.82x, Utah 3.78x. *In India coding is 50%+ of all Claude tasks*\n- **Report 4 (Jan 2026, Economic Primitives)**: introduces 5 primitives — task complexity, human skill, AI skill, autonomy, success rate. Cumulative — *49% of jobs have had 25%+ of their tasks performed using Claude*. Computer & math 35.8% (observed), office/admin 34.3%, business/finance 28.4%, sales 26.9%, legal 20.4%\n- **Report 5 (Mar 2026, Learning Curves)**: experienced users (6+ months) achieve 10% higher success rates on identical tasks than new users. Top-10 tasks fell from 24% → 19% of all conversations (diversification). Top-5 US states' share fell 30% → 24% (Aug 2025 → Feb 2026)\n\n**The single most striking number**: Computer programmers — **74.5%** (highest single occupation). Customer service 70.1%. Data entry 67.1%. Medical records 66.7%.",
        },
        {
          type: "chart",
          chart: {
            id: "ai-penetration",
            title: "AEI 직업별 AI 침투율 분기 시계열 (2025Q1-2026Q1)",
            titleEn: "AEI Occupation AI Penetration Quarterly (Q1 2025 - Q1 2026)",
            caption:
              "출처: Anthropic Economic Index Reports 1-5 (Feb 2025 - Mar 2026). 측정: 각 직업의 task가 Claude로 수행된 비율. 5분기 동안 모든 카테고리가 가속. *이게 1987 Solow가 못 본 데이터*.",
            captionEn:
              "Sources: Anthropic Economic Index Reports 1-5 (Feb 2025 - Mar 2026). Measures: share of each occupation's tasks performed using Claude. All categories accelerating over 5 quarters. *This is the data Solow could not see in 1987*.",
            data: [
              { period: "25Q1", software: 12, finance: 4,  legal: 2,  customer: 8 },
              { period: "25Q2", software: 18, finance: 7,  legal: 4,  customer: 14 },
              { period: "25Q3", software: 24, finance: 12, legal: 7,  customer: 21 },
              { period: "25Q4", software: 30, finance: 17, legal: 11, customer: 28 },
              { period: "26Q1", software: 36, finance: 22, legal: 16, customer: 35 },
            ],
          },
        },
      ],
    },
    {
      heading: "그러나 — Brynjolfsson이 더 정확하게 측정했다",
      headingEn: "But — Brynjolfsson Measured It More Precisely",
      blocks: [
        {
          type: "text",
          body: "AEI가 \"Claude가 어떤 직업에 얼마나 쓰이는가\"를 측정한다면, Stanford의 Erik Brynjolfsson은 더 직접적인 질문을 측정했다 — **AI 사용이 실제 고용에 영향을 주는가.**\n\n**\"Canaries in the Coal Mine?\"**(Brynjolfsson, Chandar, Chen — Stanford Digital Economy Lab, 2025년 8월). ADP 급여 데이터(미국 2,500만+ 노동자) 분석. 핵심 발견:\n\n- AI 노출 직업의 22~25세 노동자 고용 — **2022년 말 이후 -13%**\n- 기업 단위 충격을 통제한 후: AI 노출 직업의 신규 진입 노동자 고용이 기존 노동자 대비 **-16% 상대적 하락**\n- 메커니즘: **AI는 대량 해고가 아니라 신규 채용을 하지 않는 방식으로 노동 시장에 영향을 준다.**\n\n**이게 진짜 충격이다.** Anthropic의 데이터는 **AI 사용량**을 보여준다. Brynjolfsson의 데이터는 그 사용이 **실제 고용 결정**으로 이어진다는 것을 보여준다.\n\nBLS 데이터로 한 단계 더:\n- **뉴욕 연준(2026)**: 컴퓨터과학 신졸업자 실업률 **6.1%**, 컴퓨터공학 **7.5%** — **철학 전공보다 높다.** 전체 신졸업자 실업률 평균 5.3%, 피크 9.3%(역대 비팬데믹 최고).\n- **Bay Area 2025**: 정보 섹터 -4,500명(-4%), Bay Area 테크 layoff 약 40,000명.\n- **샌프란시스코 구인공고** 2020년 2월 대비 -37%(2025년 10월).\n- UC Berkeley의 Enrico Moretti: \"AI에서 만들어지는 일자리 수가 전통 빅테크에서 사라지는 일자리 수를 **상쇄하지 못한다.**\"\n\n구체적인 AI 관련 인력 감축:\n\n| 회사 | 인원 | 시점 | AI 연결 |\n|---|---|---|---|\n| Salesforce | 4,000 + 1,000 미만 | 2025.9 + 2026.2 | Agentforce·Einstein Copilot |\n| Microsoft | 15,000+ | 2025 | 코드의 30% AI 작성; 엔지니어 40%+ |\n| Meta | 약 8,000 | 2025~26 | AI 인프라 비용 전환 |\n| IBM | 약 8,000 HR | 2024~25 | AskHR 챗봇(94% 자동 처리) |\n| Klarna | 700 → 일부 복귀 | 2024 → 2025 | AI 고객 서비스(일부 복귀) |\n| Duolingo | 계약직 10% | 2024 | GPT-4 번역 |\n\n합산 130,000명 이상(2025년 한 해).",
          bodyEn:
            "If AEI measures \"how much Claude is used in which occupation,\" Stanford's Erik Brynjolfsson measured a more direct question — *does AI usage actually affect employment*.\n\n**\"Canaries in the Coal Mine?\"** (Brynjolfsson, Chandar, Chen — Stanford Digital Economy Lab, August 2025). Analyzed ADP payroll data covering 25M+ US workers. Core finding:\n\n- Workers age 22-25 in AI-exposed jobs — employment **-13% since late 2022**\n- After controlling for firm-level shocks: new entrants in AI-exposed jobs saw *-16% relative employment decline vs experienced workers*\n- Mechanism: **AI affects the labor market not by mass layoffs but by not hiring**\n\n*This is the real shock*. Anthropic's data shows *AI usage*. Brynjolfsson's data shows *that usage translates into actual employment decisions*.\n\nBLS data goes one step further:\n- **NY Fed (2026)**: Computer Science graduate unemployment **6.1%**, Computer Engineering **7.5%** — *higher than philosophy*. Overall recent-graduate unemployment averaged 5.3%, peaked 9.3% (highest non-pandemic since 2014)\n- **Bay Area 2025**: information sector -4,500 jobs (-4%), Bay Area tech layoffs ~40,000\n- **SF job postings** -37% vs Feb 2020 (Oct 2025)\n- UC Berkeley Enrico Moretti: \"The number of jobs being created in AI *is not enough to offset* the job losses at traditional Big Tech\"\n\nSpecific AI-cited layoffs:\n\n| Company | Count | Date | AI link |\n|---|---|---|---|\n| Salesforce | 4,000 + <1,000 | Sept 2025 + Feb 2026 | Agentforce/Einstein Copilot |\n| Microsoft | 15,000+ | 2025 | 30% code AI-written; >40% engineers |\n| Meta | ~8,000 | 2025-26 | AI infra cost pivot |\n| IBM | ~8,000 HR | 2024-25 | AskHR chatbot (94% handled) |\n| Klarna | 700 → reversed | 2024 → 2025 | AI customer service (reversed) |\n| Duolingo | 10% contractors | 2024 | GPT-4 translation |\n\nCombined: 130,000+ in 2025 alone.",
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "AI could wipe out half of all entry-level white-collar jobs. Unemployment could spike to 10-20% in the next 1-5 years.",
            bodyEn: "AI could wipe out half of all entry-level white-collar jobs. Unemployment could spike to 10-20% in the next 1-5 years.",
            heading: "— Dario Amodei, Axios 'White-Collar Bloodbath' 인터뷰, 2025년 5월 28일",
            headingEn: "— Dario Amodei, Axios 'White-Collar Bloodbath' interview, May 28, 2025",
          },
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            body: "I'm delighted to be wrong about this. I thought there would have been more impact on entry-level white-collar jobs being eliminated by now than has actually happened.",
            bodyEn: "I'm delighted to be wrong about this. I thought there would have been more impact on entry-level white-collar jobs being eliminated by now than has actually happened.",
            heading: "— Sam Altman, Commonwealth Bank of Australia, 2026년 5월 26일 (OpenAI IPO 4일 전)",
            headingEn: "— Sam Altman, Commonwealth Bank of Australia, May 26, 2026 (four days before OpenAI IPO filing)",
          },
        },
      ],
    },
    {
      heading: "그래서 — Cisco의 25년이 가르치는 진짜 교훈",
      headingEn: "Therefore — The Real Lesson of Cisco's 25 Years",
      blocks: [
        {
          type: "text",
          body: "Memo 1에서 우리는 — Cisco가 2025년 12월 10일 **25년 만에 $80 신고가를 회복**했다 — 는 사실로 시작했다. 그 25년 동안 Cisco의 비즈니스는:\n- FY00 → FY25 매출 **$18.9B → $56.7B(3.0배)**\n- FY00 → FY25 GAAP EPS **$0.36 → $2.61(7.25배)**\n- 매년 영업현금흐름 $10B+\n\n**비즈니스는 망하지 않았다.** 매출 3배, EPS 7배. 그러나 — **실질 기준으로는 여전히 -50%**. 2000년의 $80과 2025년의 $80은 인플레이션을 감안하면 같은 가치가 아니다.\n\n이게 시리즈 전체에서 가장 차가운 교훈이다.\n\nLucent처럼 자본 회로가 무너지면 회사 자체가 사라진다. 그러나 **Cisco처럼 회로는 멈춰도 비즈니스는 살아남는** 시나리오에서도 — 투자자는 25년을 기다려야 회복한다. 그 25년 동안 비즈니스는 3배 성장하지만, P/E 멀티플은 150배에서 한 자릿수로 압축된다. **비즈니스 성공과 주식 성공은 다른 일이다.**\n\n2026년 AI 사이클에서 **NVIDIA가 Lucent가 될지 Cisco가 될지는 아직 모른다.** 그러나 — Cisco 시나리오라도 — 지금 $80에 산 투자자가 그 가격을 회복하는 데 25년이 걸린다면, 그 25년 동안 AI 비즈니스가 폭발적으로 성장한다 해도 포트폴리오 차원에서는 **제로 수익**이다.\n\n**Cahn의 $600B Question 업데이트(Sequoia 2025년 12월)**: 2026년 하이퍼스케일러 자본지출 $700~725B vs 2025년 엔터프라이즈 AI 매출 $37B(Menlo Ventures). **갭 $500B+**. 매출이 3배 성장해도(약 $110B 추정) 갭이 $600B+ 남는다. **현재 자본지출 속도가 매출 속도보다 훨씬 빠르다.**\n\n이게 Marks의 \"투자자의 행동 거품\"(Memo 3 참조)의 정량 증거다.",
          bodyEn:
            "In Memo 1 we began with — Cisco reclaiming its **$80 all-time high after 25 years** on December 10, 2025. Over those 25 years, Cisco's business:\n- FY00 → FY25 revenue **$18.9B → $56.7B (3.0x)**\n- FY00 → FY25 GAAP EPS **$0.36 → $2.61 (7.25x)**\n- Operating cash flow $10B+ every year\n\n*The business didn't fail*. Revenue 3x, EPS 7x. But — *in real terms still -50%*. $80 in 2000 and $80 in 2025 are not the same value after inflation.\n\nThis is the coldest lesson of the entire series.\n\nIf the circuit collapses like Lucent, the company itself disappears. But even in the *Cisco scenario where the circuit stops but the business survives* — the investor must wait 25 years for recovery. Over those 25 years the business triples but the multiple compresses from 150x → single digits. *Business success and stock success are different things*.\n\nIn the 2026 AI cycle, *we don't yet know whether NVIDIA becomes Lucent or Cisco*. But — even in the Cisco scenario — if an investor who buys at $80 today *takes 25 years to recover that price*, then over those 25 years the AI business may grow explosively but at the portfolio level the return is *zero*.\n\n**Cahn's $600B Question update (Sequoia Dec 2025)**: 2026 hyperscaler capex $700-725B vs 2025 enterprise AI revenue $37B (Menlo Ventures). **Gap $500B+**. Even with 3x revenue growth (~$110B est.), the gap remains $600B+. *Current capex pace far outruns revenue pace*.\n\nThis is the quantitative evidence for Marks's \"investor behavior\" bubble (see Memo 3).",
        },
        {
          type: "chart",
          chart: {
            id: "pe-spread",
            title: "Mag 7 vs S&P 493 forward P/E 스프레드 (2020-2026)",
            titleEn: "Mag 7 vs S&P 493 Forward P/E Spread (2020-2026)",
            caption:
              "출처: FactSet, Yardeni Research 2026.5. Mag 7 28x vs S&P 493 23.5x — premium 19%, 10년 최저. 그러나 AI 집중도 (Mag 7 시총 / S&P 500) **35% — 역대 최고**, Hartnett의 \"모든 100년 거품의 48% 임계\" 에 근접.",
            captionEn:
              "Sources: FactSet, Yardeni Research May 2026. Mag 7 28x vs S&P 493 23.5x — premium 19%, 10-yr low. But AI concentration (Mag 7 cap / S&P 500) is **35% — all-time high**, approaching Hartnett's '48% peak of every 100-yr bubble'.",
            data: [
              { year: "'20", mag7: 28, sp493: 18 },
              { year: "'21", mag7: 32, sp493: 21 },
              { year: "'22", mag7: 24, sp493: 16 },
              { year: "'23", mag7: 27, sp493: 17 },
              { year: "'24", mag7: 30, sp493: 19 },
              { year: "'25", mag7: 31, sp493: 20 },
              { year: "'26", mag7: 28, sp493: 23.5 },
            ],
          },
        },
      ],
    },
    {
      heading: "한국 — 사무직 일자리의 미래는 이미 시작됐다",
      headingEn: "Korea — The Future of White-Collar Jobs Has Already Started",
      blocks: [
        {
          type: "text",
          body: "한국 노동시장에서도 같은 데이터가 보이기 시작했다.\n\n**한국고용정보원 — 2025~2035 직업 전망**: 분석된 170개 직업 중 93.4%는 고용 유지 또는 증가. 6.6%(12개 직업)만 약간 감소 — 캐셔, 은행 창구 직원, 디자인·편집 보조. 표면적으로는 평온하다.\n\n그러나 **개발자 시장에는 이미 큰 변화가 왔다.**\n- **2025년 카카오·라인·쿠팡·배달의민족·당근·토스 — 신규 SWE 채용 제로 또는 거의 제로.** 오직 Naver만 정기 채용을 유지.\n- **Naver 신규 채용**: 838명(2021) → 258명(2024). **3배 감소.**\n- **카카오 신규 채용**: 994명(2021) → 314명(2024).\n- 카카오 공개 발표: \"AI가 대체 가능한 역할의 신규 채용을 제한할 것.\"\n- 익명의 중견 SW 회사 한 곳: 25년 만에 처음으로 **2025년 단 한 명도 신입 개발자를 뽑지 않음.**\n- 한국 신입 개발자 채용 — 2021년 대비 **절반 이하**. 피크 -77% 예상.\n\n**KDI 연구**: AI의 생산성 효과는 **젊은 세대**(남성 30~44세, 여성 15~29세)와 **대학 졸업자**에 집중된다. 이들 그룹에서 고용과 임금에 음(-)의 효과. KDI는 **2030년경 직업의 90%가 90%+ 태스크 자동화 가능**으로 추정. 한국 기업 69.2%가 채용에서 AI 역량을 고려.\n\n**표면적 평온함과 신규 채용 시장의 붕괴가 동시에 일어난다.** Brynjolfsson이 미국에서 찾은 패턴(\"대량 해고가 아니라 신규 채용을 안 함\")이 한국에서도 같다 — **오히려 더 빠르고 더 깊게.**\n\n한국 사회는 \"코딩만 잘하면 취직 걱정 없다\"는 시대의 종료를 — Anthropic Economic Index의 분기 데이터보다 **더 빨리** 체감한다.",
          bodyEn:
            "The same data is starting to show in Korea's labor market.\n\n**Korea Employment Information Service (2025-2035 Outlook)**: of 170 occupations analyzed, 93.4% maintain or grow employment. Only 6.6% (12 occupations) show slight decline — cashiers, bank tellers, design/editing assistants. On the surface it looks calm.\n\nBut *the developer market has already seen massive change*.\n- **In 2025, Kakao, Line, Coupang, Baemin (delivery), Daangn, Toss — new SWE hiring *zero or near zero***. Only Naver maintained routine hiring.\n- **Naver new hires**: 838 (2021) → 258 (2024). *3x decline*.\n- **Kakao new hires**: 994 (2021) → 314 (2024).\n- Kakao publicly stated: \"will restrict new hires for roles AI can replace.\"\n- One anonymous mid-size Korean SW company: for the first time in 25 years, *hired zero new developers in 2025*.\n- Korean junior developer hiring — *less than half* of 2021 levels. Peak decline expected -77%.\n\n**KDI research**: AI productivity effects concentrated in *younger cohorts* (men 30-44, women 15-29) + *college-educated workers*. Negative effects on employment and wages in these groups. KDI estimates that *by ~2030, 90% of jobs could have 90%+ of tasks automatable*. Korean firms 69.2% consider AI competency in hiring decisions.\n\n*The surface calm and the collapse of the new-hire market happen simultaneously*. The pattern Brynjolfsson found in the US (\"not mass layoffs but no new hiring\") is the same in Korea — *only faster and deeper*.\n\nKorean society is feeling the end of \"just be good at coding and you'll be hired\" — *faster than* the Anthropic Economic Index's quarterly data.",
        },
      ],
    },
    {
      heading: "결론 — 우리는 모른다. 그러나 처음으로 — 우리는 보고 있다",
      headingEn: "Conclusion — We Do Not Know. But for the First Time — We Are Seeing",
      blocks: [
        {
          type: "text",
          body: "이 시리즈는 7개 메모로 — 표면적으로 — 매우 다른 주제를 다뤘다.\n\n1. 자본의 회로(NVIDIA → OpenAI → MSFT → NVIDIA)\n2. 모델 빅2와 Claude Code\n3. IPO 파도, 1999년과 다른 점\n4. 패권의 바깥(HBM·CoWoS)\n5. 다음 병목(광·신경망)\n6. 와트가 칩을 이긴 날(전력)\n7. 단 하나의 숫자(Anthropic Economic Index)\n\n그러나 **7개 메모 모두 단일 질문으로 귀결된다.** **AI 자본 사이클의 $700B+ 자본지출이 회수되는가.** 회수되려면, 그 자본지출로 만든 매출이 **진짜 노동을 대체**해야 한다. 진짜 엔터프라이즈 고객이 진짜 돈을 내야 하고, 진짜 직업의 진짜 태스크가 대체되어야 한다.\n\n1999년에는 그 질문의 답을 **사후에야** 알 수 있었다. Solow 패러독스가 30년간 유효했던 이유다. 인터넷 자본지출이 회수되었는지 — 매크로 데이터로 명확해진 건 **수년이 지난 후**였다.\n\n2026년은 다르다. **Anthropic Economic Index가 그 질문을 분기마다 측정한다.** Claude Code의 매출이 분기마다 검증된다. Cisco 25년의 교훈이 신선한 데이터로 매핑된다. 직업별 침투율, 신규 채용 데이터, Bay Area 인력 감축 — **모두 실시간으로 볼 수 있다.**\n\n그래서 이 시리즈의 마지막 명제는 단순하다:\n\n**우리는 모른다.** AI 자본지출 사이클이 회수될지 못 될지. Cisco의 25년이 될지, Lucent의 -99%가 될지. NVIDIA가 사이클의 진짜 부자가 될지, Lumentum이 될지. SK하이닉스가 메모리 권력을 유지할지, 삼성이 HBM4로 회복할지.\n\n**그러나 처음으로 — 우리는 보고 있다. 분기마다.**\n\n1999년의 Solow 패러독스가 30년 뒤에야 풀린 미스터리였다면, 2026년의 AI 사이클은 — **매 분기 측정 가능한 사실**이다. 그게 이 사이클의 진짜 차이다.\n\n**우리가 봐야 할 단 하나의 숫자는 — Anthropic Economic Index의 다음 분기 침투율이다.** 가속이면 진짜 노동 대체가 일어나는 중. 정체나 둔화면 — Cisco의 25년 시나리오가 진짜로 시작된다.\n\n그게 이 시리즈의 단일 관찰 지표다. 다른 모든 데이터는 이 한 숫자에 대한 **지지 증거 또는 반박**일 뿐이다.",
          bodyEn:
            "This series, across 7 memos — on the surface — covered very different subjects.\n\n1. The circuit of capital (NVDA→OpenAI→MSFT→NVDA)\n2. The model duopoly and Claude Code\n3. The IPO wave, what differs from 1999\n4. Empire's periphery (HBM·CoWoS)\n5. The next bottleneck (optical & networking)\n6. When watts beat chips (power)\n7. The one number (Anthropic Economic Index)\n\nBut *all 7 memos collapse into one question*. **Will the AI capital cycle's $700B+ capex be recouped?** For it to be recouped, the revenue generated by that capex must — *actually displace labor*. Real enterprise customers must pay real money, and real tasks of real jobs must be substituted.\n\nIn 1999, we could only know the answer to that question *ex-post*. That's why the Solow paradox stayed valid for 30 years. Whether internet capex was recouped — only became clear in macro data *years later*.\n\n2026 is different. **The Anthropic Economic Index measures that question quarterly**. Claude Code's revenue is validated quarterly. Cisco's 25-year lesson is mapped against fresh data. Occupation penetration, new-hire data, Bay Area layoffs — *all visible in real time*.\n\nSo the series's final proposition is simple:\n\n*We do not know. Whether the AI capex cycle will be recouped or not. Whether it becomes Cisco's 25 years or Lucent's -99%. Whether NVIDIA is the cycle's real rich or Lumentum is. Whether SK Hynix keeps memory power or Samsung recovers via HBM4.*\n\n*But for the first time — we are seeing. Quarterly.*\n\n*If the 1999 Solow paradox was a mystery only solved 30 years later, the 2026 AI cycle is — a fact measurable every quarter. That is the real difference of this cycle.*\n\n**The single number we should watch is — the next quarter's AEI penetration rate**. If accelerating, real labor substitution is happening. If stalled or decelerating — the Cisco 25-year scenario truly begins.\n\nThat is the series's single watch metric. Every other data point is — merely *supporting evidence or refutation* of this one number.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "시리즈 끝",
            headingEn: "End of the Series",
            body: "AI 자본 사이클 시리즈는 여기서 끝납니다. 7개 메모를 다 읽었다면 — 자본의 회로, 모델의 단위 경제학, IPO의 의미, 공급망의 지정학, 다음 병목의 운율, 물리적 인프라의 산수, 그리고 노동 대체의 첫 정량 데이터를 — 모두 손에 넣은 셈입니다. 분기마다 Anthropic Economic Index와 NVIDIA 데이터센터 매출의 분기별 성장률만 추적하면, 사이클의 어디쯤에 와 있는지 알 수 있을 겁니다. 그것이 이 시리즈의 약속이었습니다.",
            bodyEn:
              "The AI Capital Cycle series ends here. If you've read all seven memos — you now hold the circuit of capital, the model unit economics, the meaning of IPOs, the geopolitics of supply chains, the rhyme of the next bottleneck, the math of physical infrastructure, and the first quantitative data on labor substitution. Track the Anthropic Economic Index and NVDA DC sequential growth every quarter, and you will know where in the cycle we are. That was the promise of this series.",
          },
        },
      ],
    },
  ],
  references: [
    { id: 1, author: "Anthropic", title: "Economic Index — Quarterly Reports (Feb 2025 - Mar 2026, 5 reports)", source: "Anthropic", year: "2025-2026", url: "https://www.anthropic.com/economic-index" },
    { id: 2, author: "Anthropic", title: "Introducing the Anthropic Economic Index (Feb 10, 2025)", source: "Anthropic", year: "2025-02-10", url: "https://www.anthropic.com/news/the-anthropic-economic-index" },
    { id: 3, author: "Anthropic", title: "Clio methodology paper (arXiv 2412.13678)", source: "arXiv", year: "2024", url: "https://arxiv.org/pdf/2412.13678" },
    { id: 4, author: "Brynjolfsson, Chandar, Chen", title: "Canaries in the Coal Mine? Six Facts about Recent Employment Effects of AI", source: "Stanford Digital Economy Lab", year: "2025-08", url: "https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/" },
    { id: 5, author: "Brynjolfsson, Rock, Syverson", title: "Productivity J-Curve (NBER WP 25148)", source: "NBER", year: "2018", url: "https://www.nber.org/papers/w25148" },
    { id: 6, author: "Solow, Robert", title: "We'd Better Watch Out (book review)", source: "New York Times Book Review", year: "1987-07-12", note: "'You can see the computer age everywhere but in the productivity statistics.' — Solow paradox 원전" },
    { id: 7, author: "Axios (VandeHei, Allen)", title: "Behind the Curtain: A white-collar bloodbath", source: "Axios", year: "2025-05-28", url: "https://www.axios.com/2025/05/28/ai-jobs-white-collar-unemployment-anthropic" },
    { id: 8, author: "TIME / Fortune", title: "Sam Altman walks back AI jobs apocalypse warnings (May 2026)", source: "TIME / Fortune", year: "2026-05-26", url: "https://time.com/article/2026/05/26/sam-altman-ai-job-losses-openAI-/" },
    { id: 9, author: "NY Fed", title: "Labor Market for Recent College Graduates", source: "Federal Reserve Bank of New York", year: "2026", url: "https://www.newyorkfed.org/research/college-labor-market" },
    { id: 10, author: "BLS", title: "OEWS Tables May 2025 (Computer & Mathematical Occupations)", source: "Bureau of Labor Statistics", year: "2025", url: "https://www.bls.gov/oes/tables.htm" },
    { id: 11, author: "Bloomberg", title: "Cisco shares finally top dot-com record after 25+ years", source: "Bloomberg", year: "2025-12-10", url: "https://www.bloomberg.com/news/articles/2025-12-10/cisco-shares-finally-top-dot-com-record-after-more-than-25-years" },
    { id: 12, author: "Sequoia Capital (David Cahn)", title: "AI in 2026 — A Tale of Two AIs", source: "Sequoia", year: "2025-12-03", url: "https://sequoiacap.com/article/ai-in-2026-the-tale-of-two-ais/" },
    { id: 13, author: "Menlo Ventures", title: "2025 State of GenAI in the Enterprise (\\$37B enterprise spend)", source: "Menlo Ventures", year: "2025", url: "https://menlovc.com/perspective/2025-the-state-of-generative-ai-in-the-enterprise/" },
    { id: 14, author: "한국개발연구원(KDI)", title: "AI 노동시장 영향 보고서", source: "KDI", year: "2025", url: "https://www.kdi.re.kr/research/reportView?pub_no=18370" },
    { id: 15, author: "Microsoft", title: "Work Trend Index 2026 — Agents, human agency", source: "Microsoft", year: "2026-04", url: "https://www.microsoft.com/en-us/worklab/work-trend-index" },
  ],
};

export const ALL_NOTES: NoteData[] = [koreaDiscount, dollarHegemony1, dollarHegemony2, dollarHegemony3, dollarHegemony4, aiCycle1, aiCycle2, aiCycle3, aiCycle4, aiCycle5, aiCycle6, aiCycle7];
