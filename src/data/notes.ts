/**
 * notes.ts — Notes 섹션 SSOT
 * 카테고리: macro | strategy | market | essay | activism
 */

// ── Categories ─────────────────────────────────────────────────────────────────

export type NoteCategory = "macro" | "strategy" | "market" | "essay" | "activism";

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

export type PBRPoint          = { year: string; KOSPI: number; SP500: number; TOPIX: number };
export type TaxRateBar        = { country: string; countryEn: string; rate: number; color: string };
export type IndexPoint        = { year: string; KOSPI: number; Nikkei: number };
export type ReserveSharePoint    = { year: string; share: number };
export type PrivilegeGapPoint    = { category: string; categoryEn: string; dollarRole: number; usShare: number };
export type FedBalanceSheetPoint = { year: string; assets: number };
export type RepoCrisisPoint      = { date: string; repoRate: number; fedRate: number };

export type NoteChartDef =
  | { id: "pbr-comparison";    title: string; titleEn?: string; caption?: string; captionEn?: string; data: PBRPoint[] }
  | { id: "tax-rates";         title: string; titleEn?: string; caption?: string; captionEn?: string; data: TaxRateBar[] }
  | { id: "index-comparison";  title: string; titleEn?: string; caption?: string; captionEn?: string; data: IndexPoint[]; annotations?: { year: string; label: string; labelEn?: string }[] }
  | { id: "reserve-share";     title: string; titleEn?: string; caption?: string; captionEn?: string; data: ReserveSharePoint[] }
  | { id: "privilege-gap";     title: string; titleEn?: string; caption?: string; captionEn?: string; data: PrivilegeGapPoint[] }
  | { id: "fed-balance-sheet"; title: string; titleEn?: string; caption?: string; captionEn?: string; data: FedBalanceSheetPoint[]; annotations?: { year: string; label: string; labelEn?: string }[] }
  | { id: "repo-crisis";       title: string; titleEn?: string; caption?: string; captionEn?: string; data: RepoCrisisPoint[] };

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
};

// ── Helper ─────────────────────────────────────────────────────────────────────

export function getNoteBySlug(slug: string): NoteData | undefined {
  return ALL_NOTES.find((n) => n.slug === slug);
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
              sub: "Elliott, Starboard Value 대표적",
              subEn: "Elliott, Starboard Value are prime examples",
              color: "text-blue-600 dark:text-blue-400",
            },
            {
              label: "지배구조 개입형",
              labelEn: "Governance Activist",
              value: "이사회 교체·독립이사 확대",
              sub: "KCGI 한진칼 캠페인 유형",
              subEn: "KCGI's Hanjin KAL campaign",
              color: "text-purple-600 dark:text-purple-400",
            },
            {
              label: "전략 개입형",
              labelEn: "Strategic Activist",
              value: "M&A 반대·사업부 분리 요구",
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
              sub: "Align×SM, 배당성향 소폭 상승, 기관 스튜어드십 활성화",
              subEn: "Align×SM success, modest dividend ratio improvement, institutional stewardship growth",
              color: "text-emerald-600 dark:text-emerald-400",
            },
            {
              label: "여전한 것",
              labelEn: "What Hasn't Changed",
              value: "PBR 0.9~1.0배 · 이사 충실의무 미통과 · 상속세 구조 동결",
              sub: "글로벌 최저 수준 PBR, 핵심 세금 구조 변화 없음",
              subEn: "PBR near global lows, core tax structure untouched",
              color: "text-red-600 dark:text-red-400",
            },
            {
              label: "불확실한 것",
              labelEn: "What Remains Uncertain",
              value: "상법 개정 타임라인 · 밸류업 실효성 · 사이클 꺾임 시나리오",
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
              sub: "미국은 종이(달러)를 주고 실제 상품과 서비스를 받는다. 연간 수천억 달러 규모로 추산",
              subEn: "The US exchanges paper (dollars) for real goods and services — estimated at hundreds of billions per year",
              color: "text-sky-600 dark:text-sky-400",
            },
            {
              label: "② 저금리 프리미엄",
              labelEn: "② Low Borrowing Cost",
              value: "미국 국채 = 세계 안전자산",
              sub: "전 세계가 달러 안전자산을 원하기 때문에 미국은 구조적으로 낮은 금리로 차입 가능",
              subEn: "Global demand for dollar safe assets lets the US borrow at structurally lower rates than any other sovereign",
              color: "text-sky-600 dark:text-sky-400",
            },
            {
              label: "③ 제재 무기화",
              labelEn: "③ Sanctions as Weapon",
              value: "SWIFT 달러 결제망 통제",
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
      heading: "원화 포지션 — 한국에게 달러 패권은 무엇인가",
      headingEn: "The Won's Position — What Dollar Hegemony Means for Korea",
      blocks: [
        {
          type: "text",
          body: "한국은 달러 패권 체계 안에서 **준내부자** 포지션에 있다.\n\n수출 주도 경제 구조상, 한국 기업들은 달러로 수출 대금을 받고 달러로 원자재를 구입한다. 원/달러 환율은 한국 기업 수익성의 핵심 변수다. 한국은행은 약 4,200억 달러의 외환보유고를 운용하는데, 이 대부분이 달러 표시 자산 — 주로 미국 국채다.\n\n결정적인 것은 **연준 FX 스왑라인**이다. 2008년 금융위기, 2020년 코로나 위기 때 한국은행은 연준과 600억 달러 규모의 스왑라인을 체결했다. 이는 달러 유동성 위기 시 한국이 연준에서 직접 달러를 빌릴 수 있다는 의미다. 스왑라인을 보유한 나라는 한국을 포함해 소수에 불과하다 — 이것이 '준내부자'의 증거다.\n\n**그러나 이 포지션은 달러 패권의 수혜이면서 동시에 종속이기도 하다.** 연준이 금리를 올리면 달러가 강해지고 원화가 약해지며, 수입 물가가 오르고, 외채 기업들의 부담이 커진다. 2편에서 다룰 연준 대차대조표와 레포 시장 이야기가 한국과 직결되는 이유다.",
          bodyEn:
            "Korea occupies a **semi-insider** position within the dollar hegemony system.\n\nGiven its export-driven economic structure, Korean companies receive export revenues in dollars and pay for raw materials in dollars. The USD/KRW exchange rate is a core variable of Korean corporate profitability. The Bank of Korea manages approximately $420 billion in foreign exchange reserves — mostly dollar-denominated assets, primarily US Treasuries.\n\nThe decisive element is the **Fed FX Swap Line**. During the 2008 financial crisis and the 2020 COVID crisis, the Bank of Korea secured a $60 billion swap line with the Fed — meaning Korea can borrow dollars directly from the Fed in a dollar liquidity crisis. Countries holding Fed swap lines are a small, privileged group. Korea is one of them. That's what 'semi-insider' means.\n\n**But this position is simultaneously a benefit and a dependency.** When the Fed raises rates, the dollar strengthens, the won weakens, import prices rise, and dollar-indebted Korean firms face growing pressure. This is precisely why the Fed balance sheet and repo market story — which we cover in Part 2 — directly concerns Korea.",
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
              sub: "미국 내 시장만 $4~5조. 글로벌 포함 시 $10조 상회",
              subEn: "US domestic alone: $4–5T. Including global: exceeds $10T",
              color: "text-sky-600 dark:text-sky-400",
            },
            {
              label: "최선호 담보",
              labelEn: "Preferred Collateral",
              value: "미국 국채 (US Treasury)",
              sub: "담보 품질 기준 최상위 — 신용위험 제로, 유동성 극대",
              subEn: "Top-tier collateral — near-zero credit risk, maximum liquidity",
              color: "text-sky-600 dark:text-sky-400",
            },
            {
              label: "거래 만기",
              labelEn: "Typical Tenor",
              value: "주로 overnight (1일)",
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
              sub: "테일러 준칙(Taylor Rule)류의 공식적 가이드라인 선호. 연준의 '임기응변식' 정책 비판",
              subEn: "Prefers formal guidelines like the Taylor Rule. Critical of the Fed's 'discretionary' policy approach",
              color: "text-amber-600 dark:text-amber-400",
            },
            {
              label: "공격적 QT",
              labelEn: "Aggressive QT",
              value: "대차대조표 축소 가속화",
              sub: "\"연준 대차대조표가 너무 크다\" 비판. 파월보다 빠른 속도의 국채 매각 선호",
              subEn: "\"The Fed balance sheet is too large.\" Favors faster Treasury runoff than Powell",
              color: "text-amber-600 dark:text-amber-400",
            },
            {
              label: "트럼프와의 긴장",
              labelEn: "Tension with Trump",
              value: "금리 인하 압박 vs 인플레 억제",
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
      heading: "원화 포지션 — 유동성 긴축의 최전선",
      headingEn: "The Won's Position — On the Front Line of Liquidity Tightening",
      blocks: [
        {
          type: "text",
          body: "달러 유동성이 긴축될 때 가장 먼저 타격을 받는 것은 신흥국 통화다. 원화는 그 최전선에 있다.\n\n메커니즘은 단순하다: 연준 QT → 달러 유동성 감소 → 달러 수요 증가 → 달러 강세 → 원/달러 환율 상승(원화 약세) → 수입 물가 상승, 외채 부담 증가, 자본 유출 압력.\n\n**그러나 한국의 포지션은 단순하지 않다.** 한국은 FX 스왑라인을 보유하고 있고, 외환보유고도 $4,200억으로 충분하다. 한국은행은 외환시장에 개입할 실탄을 갖추고 있다.\n\n실제 위협은 **속도**다. 워시 체제에서 QT가 시장이 소화할 수 있는 속도보다 빠르게 진행된다면, 단기 달러 조달 비용(크로스커런시 베이시스 스왑 스프레드)이 급등할 수 있다. 한국 기업과 금융기관들이 달러를 빌릴 때 치르는 프리미엄이 급격히 올라가는 상황이다.\n\n한국에서 달러 패권 배관을 가장 직접적으로 체감하는 순간은 금융위기나 QT 쇼크 때다. 그때마다 **원/달러 환율이 배관의 압력계** 역할을 한다.",
          bodyEn:
            "When dollar liquidity tightens, emerging market currencies are hit first. The Korean won is on that front line.\n\nThe mechanism is straightforward: Fed QT → less dollar liquidity → more dollar demand → stronger dollar → higher USD/KRW (weaker won) → rising import prices, heavier foreign debt burden, capital outflow pressure.\n\n**But Korea's position is not simple.** Korea holds a Fed swap line and maintains ~$420 billion in foreign exchange reserves — sufficient firepower for the Bank of Korea to intervene in FX markets.\n\nThe real threat is **speed**. If QT under Warsh proceeds faster than markets can absorb, short-term dollar funding costs (cross-currency basis swap spreads) could spike. That means Korean corporations and financial institutions face a sudden premium surge when borrowing dollars.\n\nThe moments when Koreans feel dollar hegemony's plumbing most directly are financial crises and QT shocks. In those moments, **the USD/KRW exchange rate acts as the pressure gauge for the plumbing.**",
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

// ── Export ─────────────────────────────────────────────────────────────────────

export const ALL_NOTES: NoteData[] = [koreaDiscount, dollarHegemony1, dollarHegemony2];
