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

export type PBRPoint   = { year: string; KOSPI: number; SP500: number; TOPIX: number };
export type TaxRateBar = { country: string; countryEn: string; rate: number; color: string };
export type IndexPoint = { year: string; KOSPI: number; Nikkei: number };

export type NoteChartDef =
  | { id: "pbr-comparison";   title: string; titleEn?: string; caption?: string; captionEn?: string; data: PBRPoint[] }
  | { id: "tax-rates";        title: string; titleEn?: string; caption?: string; captionEn?: string; data: TaxRateBar[] }
  | { id: "index-comparison"; title: string; titleEn?: string; caption?: string; captionEn?: string; data: IndexPoint[]; annotations?: { year: string; label: string; labelEn?: string }[] };

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

// ── Export ─────────────────────────────────────────────────────────────────────

export const ALL_NOTES: NoteData[] = [koreaDiscount];
