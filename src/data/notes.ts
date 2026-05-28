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
  | { id: "circular-flow";     title: string; titleEn?: string; caption?: string; captionEn?: string; nodes: CircularFlowNode[]; edges: CircularFlowEdge[] };

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
          body: "**양도소득세 — 또 다른 층위**: 대주주 요건을 충족하는 주주(KOSPI 종목 1% 이상 또는 10억 원 이상 보유)는 주식 양도 시 양도소득세를 납부한다(대기업 기준 최대 25%). 이는 연말마다 대주주 요건 직전의 매도 압박을 만들어내는 고질적인 지수 하방 압력 요인이 되어 왔다. 정부가 수차례 대주주 요건 완화를 시도했으나 조세 형평성 논란으로 번번이 무산됐다.",
          bodyEn:
            "**Capital gains tax — another layer**: Shareholders meeting the 'major shareholder' threshold (≥1% of a KOSPI stock or ≥KRW 1 billion in holdings) pay capital gains tax on stock sales (up to 25% for large-cap holdings). This has created a chronic year-end selling pressure dynamic as investors race to stay below the threshold. The government has repeatedly attempted to ease the definition, but efforts have stalled over tax equity debates.",
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

export const ALL_NOTES: NoteData[] = [koreaDiscount, dollarHegemony1, dollarHegemony2, dollarHegemony3, dollarHegemony4, aiCycle1];
