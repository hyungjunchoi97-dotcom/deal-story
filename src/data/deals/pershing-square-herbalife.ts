import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "pershing-square-herbalife",
  title: "퍼싱스퀘어 vs Herbalife — 역사상 최대 공매도 전쟁, 6년의 피라미드 논쟁",
  subtitle: "빌 애크먼 공매도 행동주의 · 칼 아이칸 롱 포지션 · FTC 조사 · 헤지펀드 공개전",
  category: "activism",
  industry: "건강·영양·MLM",
  country: "미국",
  announcedAt: "2012-12-20",
  closedAt: "2018-03-01",
  announcedDisplay: "2012년 12월",
  closedDisplay: "2018년 3월",
  readingMinutes: 14,
  tags: [
    "퍼싱스퀘어",
    "Herbalife",
    "빌 애크먼",
    "칼 아이칸",
    "공매도 행동주의",
    "피라미드 구조",
    "FTC",
    "Short Squeeze",
    "헤지펀드 공개전",
    "MLM",
  ],
  excerpt:
    "빌 애크먼이 Herbalife를 '피라미드 사기'로 규정하며 약 $1B 공매도 포지션을 취했다. 칼 아이칸은 즉각 반대 진영에서 23% 롱 포지션으로 맞섰다. 6년간의 전투 끝에 FTC는 $200M 벌금을 부과했지만 피라미드 판정은 거부했다. 애크먼은 약 $1B 손실로 2018년 포지션을 청산했고, 아이칸은 $1B+ 수익을 거뒀다.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "PS", bg: "bg-slate-700", label: "퍼싱스퀘어" },
  target:   { initials: "HLF", bg: "bg-orange-600", label: "Herbalife" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "Herbalife(HLF)는 1980년 설립된 다단계 판매(MLM) 방식의 글로벌 영양보충제 기업이다. 80만 명 이상의 독립 유통업자(Distributors)를 통해 제품을 판매하며, 2012년 기준 연간 매출 $40억을 넘는 대형 MLM 기업으로 성장했다. 그러나 수익의 상당 부분이 제품 판매가 아닌 신규 유통업자 모집에서 온다는 의혹이 꾸준히 제기돼 왔다.",
    "빌 애크먼(Bill Ackman)은 퍼싱스퀘어 캐피털 매니지먼트(Pershing Square Capital Management)의 창업자 겸 CEO다. CP레일, General Growth Properties 등에서 성공적인 행동주의 투자로 명성을 쌓은 그는 2012년 하반기부터 Herbalife의 비즈니스 모델에 대한 심층 조사를 시작했다.",
    "2012년 12월 20일, 애크먼은 맨해튼에서 3시간짜리 투자자 프레젠테이션을 열어 Herbalife가 피라미드 구조(Pyramid Scheme)임을 선언하고 약 $1B(9.8백만 주) 규모의 공매도 포지션을 공개적으로 밝혔다. 그는 FTC가 Herbalife를 결국 피라미드로 판정하여 회사가 붕괴될 것이라고 주장했고, 목표 주가를 $0으로 제시했다.",
    "2013년 1월 25일, 칼 아이칸(Carl Icahn)은 CNBC에 출연해 애크먼을 '우는 어린아이(crybaby)'라고 조롱하고, Herbalife 주식을 대량 매집해 롱 포지션에 들어갔음을 밝혔다. 두 헤지펀드 거인이 언론에서 실시간으로 충돌하는 전례 없는 헤지펀드 공개전이 시작됐다. 아이칸은 결국 Herbalife 지분을 약 23%까지 확대했다.",
    "2013~2015년, 애크먼은 수억 달러를 들여 의회 로비, FTC 조사 청원, 지역사회 조직화, 조사 보고서 배포 등 종합적인 공매도 캠페인을 전개했다. 이에 Herbalife 주가는 $24~$83 사이를 오가며 극단적인 변동성을 보였다.",
    "2014년 3월, FTC는 Herbalife에 대한 공식 조사를 개시했다. 애크먼 측에는 논거를 입증하는 것처럼 보였지만, 2016년 7월 FTC는 $200M 벌금과 운영 제한을 부과하는 합의(Consent Order)로 마무리했고 결정적으로 '피라미드 구조'라는 판정은 내리지 않았다.",
    "2018년 2월~3월, 빌 애크먼은 6년에 걸친 공매도 포지션을 전량 청산했다. 추정 손실은 약 $1B. 반면 칼 아이칸의 롱 포지션 추정 수익은 $1B 이상이었다. 이 딜은 공매도 행동주의의 한계와 가능성을 동시에 보여주는 역사적 사례로 기록됐다.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "약 $1B 공매도 포지션 (최초)",
    acquirerName: "퍼싱스퀘어 (빌 애크먼)",
    targetName: "Herbalife Ltd. (HLF)",
    announcedDisplay: "2012년 12월",
    closedDisplay: "2018년 3월",
    country: "미국",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "2012년 12월: 빌 애크먼, 3시간 프레젠테이션으로 Herbalife 피라미드 구조 선언 + 약 $1B 공매도 포지션 공개.",
    "2013년 1월: 칼 아이칸 CNBC 등장 — 애크먼 '우는 어린아이'라 부르고 Herbalife 롱 포지션 선언. 최종 23% 지분 확보.",
    "2013~2015년: 애크먼, 수억 달러 규모 로비·조사 캠페인 전개. FTC 2014년 조사 개시. HLF 주가 $24~$83 극단적 변동.",
    "2016년 7월: FTC, $200M 합의 — 피라미드 판정 없음. 애크먼 핵심 논거 붕괴.",
    "2018년 3월: 애크먼 공매도 전량 청산, 추정 손실 ~$1B. 아이칸 추정 수익 $1B+. 6년 전쟁 종료.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "다단계 판매(MLM, Multi-Level Marketing)는 독립 유통업자 네트워크를 통해 제품을 판매하는 직접 판매 방식이다. 합법적 MLM은 실제 제품 판매에서 수익이 발생하지만, 피라미드 구조는 신규 유통업자 모집 수수료에 주로 의존한다. Herbalife, Amway, Nu Skin 등 글로벌 MLM 기업들은 항상 이 경계에서 법적 논쟁에 노출돼 있다. 2012년 글로벌 MLM 시장 규모는 약 $1,670억으로, 영양보충제·스킨케어가 주요 카테고리다.",
    metrics: [
      { label: "글로벌 MLM 시장 규모 (2012)", value: "~$1,670억",   sub: "연간 성장률 5~7%" },
      { label: "Herbalife 유통업자 수",        value: "80만+ 명",   sub: "2012년 기준 전 세계" },
      { label: "애크먼 공매도 규모",           value: "~$1B",       sub: "9.8백만 주, 2012년 12월" },
      { label: "FTC 합의 벌금 (2016)",        value: "$200M",      sub: "피라미드 판정은 없음" },
    ],
    subBody:
      "FTC(연방거래위원회)의 Herbalife 조사는 MLM 업계 규제의 분수령이 됐다. 2016년 합의는 Herbalife가 유통업자 모집보다 실제 소비자에게 판매하는 비율을 높여야 한다는 구조 개선 명령을 담았다. 합법 MLM과 피라미드 구조의 법적 경계를 명확히 하는 데 이 사건이 기여했다.",
    players: [
      { name: "빌 애크먼 / 퍼싱스퀘어", role: "공매도 행동주의 — $1B 숏, 피라미드 구조 규정" },
      { name: "칼 아이칸 / Icahn Enterprises", role: "롱 포지션 23% — 애크먼 반대 진영, Short Squeeze 압박" },
      { name: "조지 소로스 / Soros Fund Management", role: "~4.9% 롱 진입, 아이칸 편 가세" },
      { name: "FTC (연방거래위원회)", role: "2014년 조사 개시 → 2016년 $200M 합의, 피라미드 미판정" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Herbalife Ltd. (HLF)",
    body: "Herbalife는 1980년 Mark Hughes가 설립한 글로벌 MLM 영양보충제 기업이다. 단백질 쉐이크, 비타민, 체중 관리 제품 등을 80만 명 이상의 독립 유통업자(Independent Distributors)를 통해 90개국 이상에서 판매한다. 2012년 기준 연간 매출 $40억을 돌파한 대형 기업으로, 유통업자들은 제품을 직접 소비자에게 판매하거나 하위 유통업자를 모집해 커미션을 받는 구조다. 애크먼은 이 커미션 구조가 피라미드 사기의 핵심 증거라고 주장했고, Herbalife 측은 자사가 합법적인 영양 제품 기업이라고 반박했다.",
    metrics: [
      { label: "설립연도",                    value: "1980년",      sub: "설립자: Mark Hughes" },
      { label: "유통업자 수 (2012)",          value: "80만+ 명",    sub: "전 세계 90개국+" },
      { label: "연간 매출 (FY2012)",          value: "$40.7억",     sub: "5년 연속 성장 트렌드" },
      { label: "영업이익률 (FY2012)",         value: "~13.8%",      sub: "안정적 수익 구조" },
      { label: "주가 (애크먼 숏 선언 직전)",  value: "~$45",        sub: "2012년 12월" },
      { label: "최고가 (아이칸 매집 후)",     value: "~$83",        sub: "Short Squeeze 구간" },
    ],
    financials: [
      { year: "FY2012", revenue: 4072, cogs: 830, grossProfit: 3242, sga: 2680, operatingIncome: 562, ebitda: 680 },
      { year: "FY2015", revenue: 4469, cogs: 897, grossProfit: 3572, sga: 2940, operatingIncome: 632, ebitda: 770 },
      { year: "FY2017", revenue: 4428, cogs: 891, grossProfit: 3537, sga: 2920, operatingIncome: 617, ebitda: 758 },
    ],
    financialsNote: "단위: $M (백만 달러) | 출처: Herbalife 연간보고서 (10-K). FY2015 수치는 FTC 조사 진행 중 시점, FY2017은 FTC 합의 후 1년 경과 시점.",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "Herbalife 사태는 단순한 행동주의를 넘어 두 헤지펀드 거인의 공개 전쟁이었다. 애크먼의 공매도 전략은 FTC를 통한 외부 규제 압박으로 주가를 0으로 만들겠다는 것이었고, 아이칸의 롱 전략은 Herbalife의 비즈니스 모델 정당성과 Short Squeeze 메커니즘을 결합한 것이었다. 결국 FTC는 피라미드 판정을 내리지 않음으로써 게임의 판도를 아이칸 쪽으로 기울였다. 이 사태는 공매도 행동주의가 얼마나 거대한 리스크를 내포하는지를 보여주는 교과서적 사례가 됐다.",
    shareholders: [
      {
        id: "icahn",
        label: "Icahn Enterprises (칼 아이칸)",
        sub: "반(反)애크먼 롱 포지션, 최대주주",
        stake: "23.0%",
        stakePct: 23.0,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "ackman",
        label: "퍼싱스퀘어 (빌 애크먼)",
        sub: "~9.8% 공매도 (실질 공매도 비중)",
        stake: "9.8%",
        stakePct: 9.8,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "soros",
        label: "Soros Fund Management",
        sub: "롱 포지션 가세, 아이칸 편",
        stake: "~4.9%",
        stakePct: 4.9,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "public",
        label: "일반 공개 주주",
        sub: "개인·기관 혼합 보유",
        stake: "~62%",
        stakePct: 62.3,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 9,
      independent: 7,
      affiliated: 2,
      note: "Herbalife 이사회는 외형상 독립이사 비율이 높았지만, 경영진의 MLM 구조 유지에 묵시적으로 동조했다는 비판을 받았다. 주주 압박에 대응해 2013년 이후 이사회 구성 일부를 개편했다.",
    },
    issues: [
      {
        title: "MLM 수익 구조의 피라미드 논쟁",
        description: "Herbalife 유통업자 수익의 상당 부분이 실제 제품 소비자 판매가 아닌 하위 유통업자 모집 수수료에서 발생한다는 의혹. 애크먼은 이를 FTC 정의의 피라미드 구조에 해당한다고 주장했다.",
        severity: "critical",
      },
      {
        title: "유통업자 소득 투명성 부재",
        description: "독립 유통업자 중 실제로 의미 있는 소득을 올리는 비율이 극히 낮다는 분석이 제기됐다. 소득 공시(Income Disclosure Statement)에서 대다수가 월 수백 달러 미만을 버는 것으로 드러났다.",
        severity: "critical",
      },
      {
        title: "Short Squeeze 취약성",
        description: "애크먼의 대규모 공개 공매도는 아이칸 같은 반대 세력이 의도적으로 주가를 올려 공매도 손실을 확대할 수 있는 구조를 만들었다. 공매도 행동주의의 구조적 취약점이 드러났다.",
        severity: "high",
      },
      {
        title: "규제 불확실성 장기화",
        description: "FTC 조사가 2014년 개시되어 2016년 합의까지 2년 이상 지속되면서 주가 변동성이 극도로 확대됐다. 규제 결과 불확실성이 양쪽 투자자 모두를 압박했다.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "FTC의 Herbalife 피라미드 구조 공식 판정",
        result: "lost",
        note: "FTC는 2016년 7월 $200M 합의를 발표했지만 결정적으로 '피라미드 구조'라는 판정을 내리지 않았다. 애크먼의 핵심 논거가 법적으로 인정받지 못했다.",
      },
      {
        demand: "SEC 증권 조사 및 회계 부정 입증",
        result: "partial",
        note: "FTC 조사는 개시됐고 운영 제한 합의로 이어졌다. 그러나 증권 사기나 회계 부정 혐의 자체는 입증되지 않았다. 부분적 규제 성과에 그쳤다.",
      },
      {
        demand: "공매도 포지션을 통한 주가 붕괴",
        result: "lost",
        note: "Herbalife 주가는 2012년 12월 ~$45에서 2013~2014년 구간 $83까지 상승했다. 2018년 애크먼 청산 시점에도 ~$50 수준으로 목표가 $0는 달성하지 못했다.",
      },
    ],
    stockImpact: {
      preCampaign: "~$45",
      peakDuringCampaign: "~$83",
      postCampaign: "~$50",
      note: "애크먼의 2012년 12월 공매도 선언 직후 주가는 급락했지만, 아이칸의 반격과 Short Squeeze로 2013~2014년 $83까지 치솟았다. FTC 합의 이후 주가는 $50 안팎에서 안정됐고 애크먼은 약 $1B 손실로 2018년 청산했다.",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "이 딜은 전통적 M&A가 아닌 '공매도 행동주의(Activist Short Selling)'의 사례다. 애크먼은 주식 매입이 아닌 공매도를 통해 포지션을 구축하고, 기업의 비즈니스 모델 자체를 공격해 주가 붕괴를 유도하는 전략을 취했다. 반면 아이칸은 정반대 포지션(롱)을 취해 숏스퀴즈 메커니즘으로 애크먼을 압박했다. 두 포지션이 충돌하는 양상은 기업 지배구조가 아닌 시장 메커니즘의 전장이었다.",
    preOwnership: {
      nodes: [
        { id: "ackman",  label: "퍼싱스퀘어 (애크먼)", sub: "~$1B 공매도, 9.8M주 숏 포지션",   type: "fund" },
        { id: "hlf",     label: "Herbalife (HLF)",      sub: "MLM 영양보충제, 주가 ~$45",        type: "target" },
        { id: "icahn",   label: "칼 아이칸",             sub: "2013년 1월 롱 포지션 선언",        type: "fund" },
        { id: "ftc",     label: "FTC",                   sub: "2014년 공식 조사 개시",             type: "entity" },
        { id: "public",  label: "일반 주주",             sub: "분산 보유, 캐스팅보트",            type: "public" },
      ],
      edges: [
        { from: "ackman",  to: "hlf",   label: "~$1B 공매도 포지션" },
        { from: "icahn",   to: "hlf",   label: "롱 포지션 (매집 시작)" },
        { from: "ftc",     to: "hlf",   label: "2014년 공식 조사" },
        { from: "public",  to: "hlf",   label: "~62% 지분 보유" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "icahn",   label: "칼 아이칸",             sub: "23% 최대주주 — 추정 $1B+ 수익",   type: "fund" },
        { id: "hlf",     label: "Herbalife (HLF)",      sub: "FTC 합의 후 운영, 주가 ~$50",      type: "target" },
        { id: "ackman",  label: "퍼싱스퀘어 (애크먼)", sub: "2018.3 청산 — 추정 ~$1B 손실",    type: "fund" },
        { id: "ftc2",    label: "FTC 동의명령",          sub: "$200M 벌금 + 구조 개선 명령",      type: "entity" },
      ],
      edges: [
        { from: "icahn",  to: "hlf",   label: "23% 지분, 실질 지배 영향력" },
        { from: "ftc2",   to: "hlf",   label: "$200M + 운영 제한 이행 의무" },
        { from: "ackman", to: "hlf",   label: "2018.3 포지션 전량 청산" },
      ],
    },
    keyTerms: [
      { label: "애크먼 공매도 규모",    value: "~$1B (9.8M 주)",                    accent: true },
      { label: "아이칸 롱 포지션",      value: "~23% (최대주주)",                   accent: true },
      { label: "FTC 합의 벌금",        value: "$200M (2016년 7월)",                accent: true },
      { label: "피라미드 판정 여부",    value: "없음 — 애크먼 핵심 논거 실패" },
      { label: "애크먼 추정 손실",      value: "~$1B (6년간)" },
      { label: "아이칸 추정 수익",      value: "$1B+ (롱 포지션)" },
      { label: "HLF 주가 범위",        value: "$24 ~ $83 (2012~2018 캠페인 구간)" },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "애크먼은 공매도 캠페인을 위해 조사·법무·PR 전방위 자문단을 구성했다. Herbalife 측은 세계 최고 수준의 방어 자문단을 동원해 FTC 대응과 주주 소통을 전담시켰다. 양측 모두 수천만 달러에 달하는 자문 비용을 지출했다고 알려졌다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "퍼싱스퀘어 (공매도 측)",
        initials: "PS",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Moelis & Company",
            role: "재무 자문",
            roleType: "financial",
            note: "Herbalife 비즈니스 모델 분석 및 피라미드 구조 재무적 논거 개발. 독립 리서치 지원.",
          },
          {
            firm: "Paul, Weiss, Rifkind, Wharton & Garrison",
            role: "법무 자문",
            roleType: "legal",
            note: "FTC 청원 법적 전략 수립, SEC 공시 대응, 공매도 포지션 관련 법적 리스크 관리.",
          },
          {
            firm: "FTI Consulting",
            role: "독립 조사 (기타)",
            roleType: "other",
            note: "Herbalife 유통업자 소득 구조 독립 조사. '실제 외부 소비자' 비율 분석 보고서 제작.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Herbalife (방어 측)",
        initials: "HLF",
        bg: "bg-orange-600",
        advisors: [
          {
            firm: "Greenhill & Co.",
            role: "재무 자문",
            roleType: "financial",
            note: "Herbalife 비즈니스 모델 독립 검증 및 애크먼 주장 반박 자료 제공. 기업 가치 방어 분석.",
          },
          {
            firm: "Gibson, Dunn & Crutcher",
            role: "법무 자문 (FTC 대응)",
            roleType: "legal",
            note: "FTC 조사 대응 핵심 법무 자문. 2년에 걸친 FTC 협상 총괄. $200M 합의 협상 주도.",
          },
          {
            firm: "Skadden, Arps, Slate, Meagher & Flom",
            role: "법무 자문 (주주 대응)",
            roleType: "legal",
            note: "행동주의 공매도 방어 전략 수립. 주주 소통 법률 자문 및 공시 전략 지원.",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공개 자료 기반입니다. 일부 자문 계약의 상세 내용은 비공개로 실제와 다를 수 있습니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "이 딜의 밸류에이션 핵심은 Herbalife가 '피라미드 구조'인지 아닌지에 달려 있었다. 애크먼은 FTC가 피라미드로 판정하면 회사가 사업 운영을 할 수 없어 주가가 $0에 수렴한다고 주장했다. 아이칸은 Herbalife가 안정적인 현금 흐름을 가진 정상 사업체로, EV/EBITDA 기준 저평가됐다고 반박했다. 결국 FTC의 비피라미드 판정이 아이칸의 밸류에이션 논리를 입증했다.",
    rows: [
      { item: "HLF 주가 (애크먼 숏 진입 시)",  val: "~$45",       note: "2012년 12월 공매도 포지션 구축 시점" },
      { item: "아이칸 평균 매입단가 (추정)",    val: "$35~50",     note: "2013~2014년 23% 지분 매집 평균" },
      { item: "HLF 주가 최고점 (숏스퀴즈)",    val: "~$83",       note: "2013~2014년, 아이칸 매집 후 Short Squeeze",  accent: true },
      { item: "FTC 합의 시점 주가 (2016.7)",   val: "~$60",       note: "$200M 합의, 피라미드 미판정 → 주가 안정" },
      { item: "애크먼 청산 시점 주가 (2018.3)", val: "~$50",       note: "6년 보유 후 약 $45→$50, 목표가 $0 미달성",   accent: true },
      { item: "애크먼 추정 총 손실",            val: "~$1B",       note: "포지션 손실 + 캠페인 비용 포함 추정",         accent: true },
      { item: "아이칸 추정 총 수익",            val: "$1B+",       note: "매입가 대비 주가 상승 + 배당 포함 추정" },
    ],
    disclaimer: "주: 손익 수치는 공개 보도 및 추정치 기반. 퍼싱스퀘어 최종 실현 손익은 포지션 구조(옵션 포함)에 따라 상이할 수 있습니다.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "애크먼은 왜 Herbalife를 타겟으로 삼았나",
      initials: "PS",
      bg: "bg-slate-700",
      points: [
        "비즈니스 모델의 구조적 취약성: 유통업자 수익의 대부분이 실제 소비자 판매가 아닌 신규 유통업자 모집 수수료에서 온다는 분석. 이는 FTC 기준 피라미드 구조에 해당한다는 논거였다.",
        "FTC 개입 시 회사 붕괴: 피라미드 구조로 판정되면 사업 모델 자체가 불법이 되어 주가가 $0으로 수렴한다는 시나리오. 이론적으로 수익 잠재력이 무제한인 공매도였다.",
        "공개 캠페인 전략: 단순 공매도가 아닌 3시간 프레젠테이션, 의회 로비, FTC 청원, 커뮤니티 조직화 등 멀티채널 압박. 주가와 여론 모두를 타겟으로 한 종합 캠페인.",
        "Herbalife 저소득층 공략 윤리 문제 부각: 라틴계·저소득 커뮤니티가 주요 유통업자 모집 대상이라는 점을 윤리적 문제로 부각해 사회적 압박 가중.",
      ],
    },
    seller: {
      title: "아이칸은 왜 정반대 포지션을 택했나",
      initials: "HLF",
      bg: "bg-orange-600",
      points: [
        "Herbalife 비즈니스 모델의 합법성 확신: 30년 이상 운영된 기업이 피라미드 구조라면 이미 FTC 조치를 받았어야 한다는 논리. 실제로 FTC는 2016년 피라미드 미판정으로 아이칸의 논리를 입증했다.",
        "Short Squeeze 기회 포착: 애크먼의 대규모 공개 공매도가 Short Squeeze를 유발할 완벽한 조건을 만들었다. 지분을 사들일수록 공매도 청산을 압박해 수익이 증폭되는 구조.",
        "애크먼과의 개인적 갈등: 아이칸과 애크먼은 과거 거래에서 앙숙 관계였다. 아이칸은 공개적으로 '애크먼을 패배시키겠다'고 선언했다.",
        "안정적 현금흐름과 저평가: Herbalife는 높은 영업이익률과 안정적 현금흐름을 보유한 기업이었다. MLM 논쟁을 제외하면 재무적으로 매력적인 롱 포지션이었다.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "Herbalife 사태는 공매도 행동주의의 구조적 한계를 적나라하게 드러냈다. 애크먼의 분석이 완전히 틀린 것은 아니었다 — FTC도 Herbalife의 문제를 인정하고 $200M 벌금과 운영 개선 명령을 내렸다. 그러나 '피라미드'라는 최종 판정을 이끌어내지 못함으로써 공매도 논거의 핵심이 무너졌다. 반면 아이칸은 FTC 결과에 대한 정확한 예측과 Short Squeeze 전술로 이 전쟁에서 승리했다. 이 사건은 이후 공매도 행동주의 전략의 교과서이자 반면교사로 회자된다.",
    overallVerdict: "칼 아이칸 + Herbalife 승, 빌 애크먼 역사적 패배",
    positives: [
      "FTC 합의로 Herbalife MLM 업계 규제 강화: $200M 벌금과 구조 개선 명령이 MLM 업계 전반에 경각심을 줬다.",
      "공매도 행동주의의 사회적 기여: 유통업자 소득 투명성 부재와 저소득층 착취 문제를 대중에게 각인시켰다.",
      "아이칸의 Short Squeeze 전술: 공개 공매도 캠페인의 취약점을 정확히 파고든 반격 전술의 교과서적 사례.",
      "MLM 규제 프레임워크 강화: FTC 합의 이후 MLM 업계의 유통업자 소득 공시 기준이 강화됐다.",
    ],
    risks: [
      "퍼싱스퀘어 약 $1B 손실 — 포지션 구축 비용과 캠페인 비용을 합산하면 역사상 최대 규모의 공매도 손실 중 하나.",
      "공개 캠페인의 역효과: 애크먼의 공개적 선언이 아이칸 같은 반대 세력에게 완벽한 Short Squeeze 기회를 제공했다.",
      "6년간의 시간 비용: 포지션 유지 비용(대차 수수료)과 기회비용을 포함하면 실제 손실은 더 크다.",
      "퍼싱스퀘어 AUM 감소: 이 딜로 인한 손실과 평판 훼손이 이후 퍼싱스퀘어 운용 규모 축소에 영향을 미쳤다.",
    ],
    editorNote:
      "이 딜의 핵심 교훈은 '옳다고 해서 돈을 버는 것은 아니다'는 것이다. 애크먼의 분석은 부분적으로 맞았다 — FTC도 문제를 인정했다. 그러나 '피라미드로 판정해 주가가 $0이 된다'는 시나리오와 '운영 제한 합의로 마무리된다'는 시나리오는 투자 수익 면에서 천양지차다. 공매도 행동주의는 레버리지가 없는 숏 포지션과 달리 무한한 손실 가능성을 안고 있으며, 아이칸 같은 반격 세력이 등장할 수 있다. 반면 아이칸의 전술은 '상대의 공개 선언'을 역으로 이용한 금융의 지략이었다.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "PS",
    acquirerBg: "bg-slate-700",
    targetInitials: "HLF",
    targetBg: "bg-orange-600",
    acquirerName: "퍼싱스퀘어 (빌 애크먼)",
    targetName: "Herbalife Ltd.",
    dealTitle: "Pershing Square vs Herbalife — The Greatest Activist Short Battle",
    dealSize: "약 $1B 공매도 포지션",
    dealSizeUSD: "~$1B short",
    evEbitda: "N/A (공매도)",
    closeDate: "2018년 3월",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    {
      id: 1,
      text: "Pershing Square Capital Management, 'Who Wants to Be a Millionaire?' Herbalife 투자자 프레젠테이션 (2012년 12월 20일)",
      url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=pershingsquare",
    },
    {
      id: 2,
      text: "FTC Press Release: 'Herbalife Will Restructure Its Multi-level Marketing Operations and Pay $200 Million For Compensation to Consumers' (2016년 7월 15일)",
      url: "https://www.ftc.gov/news-events/news/press-releases/2016/07/herbalife-will-restructure-its-multi-level-marketing-operations-pay-200-million-compensation",
    },
    {
      id: 3,
      text: "Herbalife Ltd. Form 10-K Annual Reports FY2012, FY2015, FY2017, SEC EDGAR",
    },
    {
      id: 4,
      text: "CNBC 'Halftime Report': Carl Icahn vs. Bill Ackman Live on Air (2013년 1월 25일)",
    },
    {
      id: 5,
      text: "Wall Street Journal: 'Ackman Exits Herbalife Bet After Six-Year Battle, Crystalizing Loss' (2018년 3월)",
    },
    {
      id: 6,
      text: "Bloomberg: 'The $1 Billion Bet That Bill Ackman Lost on Herbalife' (2018년 3월)",
    },
    {
      id: 7,
      text: "Icahn Enterprises Form 13D/13F SEC Filings — Herbalife Stake Buildup (2013~2018)",
    },
    {
      id: 8,
      text: "FTC Consent Order with Herbalife, Docket No. C-4677 (2016년 7월)",
      url: "https://www.ftc.gov/enforcement/cases-proceedings/herbalife",
    },
    {
      id: 9,
      text: "Soros Fund Management 13F — Herbalife Position Disclosure (2013년 2월)",
    },
    {
      id: 10,
      text: "William D. Cohan, 'The Fall of the House of Ackman', Vanity Fair (2018년)",
    },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "빌 애크먼 Herbalife 공매도 전쟁 — 칼 아이칸과 6년 대결 완전 해부",
    description:
      "빌 애크먼 $1B 공매도 vs 칼 아이칸 23% 롱. Herbalife 피라미드 논쟁, FTC $200M 합의, Short Squeeze 완전 분석. 공매도 행동주의 역사상 최대 규모 전쟁의 전말.",
    keywords: [
      "Herbalife 피라미드 사기",
      "Bill Ackman Herbalife 공매도",
      "Carl Icahn vs Ackman",
      "행동주의 공매도",
      "Short Squeeze",
      "FTC MLM 조사",
      "퍼싱스퀘어 손실",
      "Herbalife HLF 주가",
      "헤지펀드 공개전",
      "다단계 판매 피라미드",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "공매도 행동주의 (Activist Short Selling)",
      description: "공개적으로 특정 기업의 문제를 폭로하며 주가 하락에 베팅하는 전략. 단순 공매도와 달리 투자자 프레젠테이션·로비·언론 활용 등 종합 캠페인을 수반한다.",
    },
    {
      term: "다단계 판매 / 피라미드 구조 논쟁 (MLM vs. Pyramid Scheme)",
      description: "Herbalife의 비즈니스 모델이 합법적 직접 판매인지 불법 피라미드 구조인지를 둘러싼 법적·경제적 논쟁. FTC는 피라미드 판정 없이 운영 제한 합의로 마무리했다.",
    },
    {
      term: "Short Squeeze (숏스퀴즈)",
      description: "공매도 포지션 보유자들이 주가 상승 시 손실을 막기 위해 주식을 매입(숏 커버링)하면서 주가가 추가 상승하는 자기강화 메커니즘. 아이칸이 의도적으로 이를 활용했다.",
    },
    {
      term: "FTC 동의명령 (Consent Order)",
      description: "FTC가 기업과 체결하는 운영 제한 합의. 기소 없이 특정 행동 변화를 법적으로 강제하는 수단이다. Herbalife는 $200M 납부와 함께 유통업자 수익 구조 개선 명령을 이행했다.",
    },
    {
      term: "헤지펀드 공개전 (Public Hedge Fund War)",
      description: "두 헤지펀드가 언론·CNBC 등을 통해 상반된 포지션으로 공개 충돌하는 이례적 상황. 아이칸과 애크먼의 CNBC 생방송 설전은 금융 역사상 가장 극적인 장면 중 하나로 기록됐다.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "빌 애크먼은 왜 Herbalife를 피라미드 구조라고 했나?",
      a: "애크먼은 3시간짜리 프레젠테이션에서 Herbalife 유통업자 수익의 대부분이 실제 소비자에게 제품을 파는 것이 아니라 새로운 유통업자를 모집해 받는 수수료에서 온다는 것을 보여줬다. FTC 판례에 따르면 이런 구조는 피라미드에 해당할 수 있다. 그러나 FTC는 2016년 최종적으로 피라미드 판정을 내리지 않았고, 운영 개선 명령으로 합의했다.",
    },
    {
      q: "칼 아이칸은 왜 반대 포지션을 취했나?",
      a: "아이칸은 두 가지 이유였다. 첫째, 30년 이상 FTC의 제재 없이 운영된 기업이 피라미드일 가능성은 낮다는 판단. 둘째, 애크먼의 공개 공매도 선언이 완벽한 Short Squeeze 기회를 만들었다는 인식. 아이칸과 애크먼은 과거 사업 분쟁으로 앙숙 관계였다는 개인적 요소도 작용했다.",
    },
    {
      q: "Short Squeeze가 이 딜에서 어떻게 작동했나?",
      a: "애크먼이 공개적으로 9.8M주를 공매도한다고 선언하면서, 아이칸 같은 롱 투자자들이 주식을 사들이면 주가가 오르고 애크먼은 추가 손실을 막기 위해 숏 포지션을 일부 청산(커버링)해야 한다. 이 매입이 또 주가를 올리는 악순환이 Short Squeeze다. HLF 주가는 2013~2014년 $83까지 치솟았다.",
    },
    {
      q: "FTC는 왜 Herbalife를 피라미드로 판정하지 않았나?",
      a: "FTC는 2016년 합의에서 Herbalife가 유통업자 모집보다 실제 소비자 판매 비율을 높여야 한다고 했다. 즉 문제를 인정했지만, '이미 피라미드다'가 아닌 '피라미드가 되지 않도록 구조를 바꿔라'는 명령이었다. 피라미드 판정의 법적 기준을 충족하지 못한다고 본 것이다.",
    },
    {
      q: "애크먼은 얼마나 잃었나?",
      a: "2018년 3월 포지션 청산 시 추정 손실은 약 $1B으로 보도됐다. 6년간의 대차 수수료와 캠페인 비용을 포함하면 실질 손실은 더 크다. 이 손실은 헤지펀드 역사상 단일 포지션 손실 중 최대 규모 중 하나로 기록됐다.",
    },
    {
      q: "이 딜이 공매도 행동주의에 주는 교훈은 무엇인가?",
      a: "세 가지 교훈이 있다. 첫째, 공매도는 무한한 손실 가능성을 가지며 특히 공개 선언 시 반격 세력을 초대한다. 둘째, 규제 결과(FTC 판정)에 모든 것을 건 전략은 규제 기관의 재량에 따라 결과가 달라진다. 셋째, '옳다'와 '수익이 난다'는 다르다 — 부분적으로 옳아도 시나리오가 100% 실현되지 않으면 공매도는 손실이다.",
    },
    {
      q: "Herbalife는 현재도 운영 중인가?",
      a: "예. FTC 합의 이후 Herbalife는 사명을 Herbalife Nutrition으로 변경하고 2016년 합의에서 요구한 구조 개선을 이행했다. 2018년 칼 아이칸이 지분을 매각한 이후에도 글로벌 MLM 영양보충제 기업으로 계속 운영되고 있다.",
    },
  ],
};

export default deal;
