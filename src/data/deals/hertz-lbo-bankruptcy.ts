/**
 * Hertz LBO → 회계 스캔들 → Chapter 11 파산 (2005–2020)
 * Carlyle · CD&R · Merrill Lynch PE의 $150억 LBO가 15년 LBO 호러 스토리로 끝난 이유
 * Ford 매각 → 14개월 만에 IPO → 회계 부정 → 빌 애크먼 숏 → 코로나 → 파산 → '밈주식' 재상장
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "hertz-lbo-bankruptcy",
  title: "Hertz LBO의 15년 호러 — $150억 차입매수가 회계 스캔들과 파산으로 끝나기까지",
  subtitle: "2005-2020: CD&R·Carlyle·Merrill Lynch PE의 자동차 렌탈 LBO — 회계 부정, 빌 애크먼 숏, 코로나, 그리고 '파산 밈주식'까지",
  category: "ma",
  industry: "자동차 렌탈 / 여행 / 경기민감 서비스",
  country: "미국",
  announcedAt: "2005-09-12",
  closedAt: "2005-12-21",
  announcedDisplay: "2005년 9월",
  closedDisplay: "2005년 12월",
  readingMinutes: 15,
  tags: [
    "Hertz", "허츠", "LBO", "차입매수", "Carlyle", "CD&R", "Merrill Lynch PE",
    "Ford", "포드", "회계 스캔들", "SEC", "Chapter 11", "파산",
    "Bill Ackman", "빌 애크먼", "Pershing Square", "퍼싱스퀘어", "공매도",
    "밈주식", "파산주식", "DIP 에쿼티", "PwC", "EY", "재무제표 재작성",
    "Knighthead", "Certares", "테슬라", "전기차 전환",
  ],
  excerpt:
    "2005년 Clayton Dubilier & Rice, Carlyle, Merrill Lynch Global PE 컨소시엄이 Ford로부터 Hertz를 $150억(EV)에 인수했다. 14개월 만에 IPO로 $13억을 회수했고, 7년 동안 안정적인 LBO처럼 보였다. 그러나 2014년 3년치 재무제표를 재작성하는 회계 스캔들이 터지면서 균열이 시작됐다. 2019년 빌 애크먼의 퍼싱스퀘어가 10% 숏 포지션을 공개하며 '2년 내 파산'을 예측했고, 2020년 5월 코로나가 항공 여행을 마비시키면서 실제로 Chapter 11이 현실화됐다. 그 사이 미국 SEC 사상 최초로 채무자(DIP) 에쿼티 발행을 차단하는 사건과 '파산 밈주식' 현상까지 등장했다. PE 컨소시엄은 2005-2014년 사이 $18억 배당을 회수했지만, 잔여 지분은 2020년 파산으로 휴지조각이 됐다.",

  acquirer: { initials: "CDR", bg: "bg-amber-700", label: "CD&R · Carlyle · Merrill Lynch Global PE" },
  target:   { initials: "HTZ", bg: "bg-yellow-500", label: "The Hertz Corporation" },

  background: [
    "Hertz는 1918년 Walter Jacobs가 시카고에서 12대의 Ford Model T로 시작한 미국 최초의 렌터카 회사다. 1953년 General Motors가 인수했고, 1967년 RCA, 1987년 UAL(United Airlines 모회사), 그리고 1994년 Ford Motor Company가 인수해 자회사로 두었다. Ford 시절 Hertz는 공항 렌탈 시장 1위였지만, 모회사 Ford의 차량을 우선 구매해야 하는 'fleet captive' 구조 때문에 차량 구성 다변화와 잔존가치 관리에 제약이 있었다.",
    "2005년 9월 Ford는 자동차 본업 위기와 연금 부담 해결을 위해 Hertz 100% 매각을 발표했다. CD&R·Carlyle·Merrill Lynch Global PE 3사 컨소시엄이 $150억(EV) 인수를 제시했고, 그 중 $23억만 에쿼티이고 나머지 $127억은 부채(인수 시 인계된 Ford 차량금융 패실리티 포함)였다. Entry Debt/EBITDA는 약 7×. 당시 역대 최대 차량 렌탈 LBO였다. 2005년 12월 21일 클로징.",
    "PE 컨소시엄은 빠른 자금 회수를 시도했다. 클로징 후 14개월 만인 2006년 11월 Hertz는 NYSE에 재상장(IPO)했고, 주당 $15에 $13억 가까이 조달했다. IPO 전에는 PE에 $10억 규모의 배당까지 지급했다. 일부 언론은 이를 '딜 클로징 잉크가 마르기도 전의 배당 회수(dividend recap)'로 비판했다. IPO 이후에도 PE 3사는 약 70% 지분을 유지했고, 2007-2013년 동안 단계적으로 매각하며 추가 수익을 실현했다.",
    "2007-2013년 사이 Hertz는 외형상 안정적으로 보였다. 공항 렌탈 시장 점유율을 늘렸고, 2012년에는 경쟁사 Dollar Thrifty Automotive Group을 $26억에 인수해 시장 2위 사업자로 성장했다. 그러나 2014년 6월 회계 부정이 드러나기 시작했다. 외부 감사인 PwC 체제 하에서 수년 동안 렌탈 계약 매출 인식 오류, 비용으로 처리해야 할 항목의 자본화, 충당금 부족이 누적되어 있었던 것이다. Hertz는 결국 2011-2013년 3년치 재무제표를 재작성했고, 누적 약 $235M의 세전이익 수정이 이뤄졌다. CEO Mark Frissora는 2014년 9월 사임했고, SEC 조사가 시작됐다.",
    "2015-2019년 Hertz는 회복하지 못했다. 비상장 경쟁사 Enterprise Holdings와 Avis Budget Group에 밀렸고, 부채 코비넌트 압박이 누적됐다. 2015년 7월 SEC와 $16M에 합의했지만 신뢰는 회복되지 않았다. 2019년 4월 빌 애크먼의 Pershing Square가 약 10% 숏 포지션을 공개하고 '2년 내 파산'을 공언했다. 2020년 3월 코로나19로 항공 여행과 공항 렌탈이 사실상 정지되자 Hertz 매출은 60% 이상 폭락했고, 2020년 5월 22일 Chapter 11을 신청했다. 파산 절차에서는 미국 SEC 사상 최초로 채무자(DIP)의 에쿼티 발행을 차단하는 일까지 벌어졌다. 2021년 6월 Knighthead Capital · Certares · ABRY Partners 컨소시엄이 약 $60억 에쿼티를 투입해 Hertz를 재상장 형태로 매수하며 파산을 졸업시켰다.",
  ],

  dealSummary: {
    dealValueDisplay: "$150억",
    acquirerName: "Clayton Dubilier & Rice · Carlyle Group · Merrill Lynch Global PE",
    targetName: "The Hertz Corporation",
    announcedDisplay: "2005년 9월 12일",
    closedDisplay: "2005년 12월 21일",
    country: "미국 (Ford 100% 자회사 → 비상장 → NYSE 재상장 → 파산 → 재상장)",
  },

  executiveSummary: [
    "2005년 CD&R·Carlyle·Merrill Lynch Global PE 3사 컨소시엄이 Ford로부터 Hertz를 $150억(EV)에 인수 — 역대 최대 차량 렌탈 LBO.",
    "에쿼티 $23억(약 15%) + 부채 $127억(약 85%) 구조, Entry Debt/EBITDA 약 7× — 경기 민감 산업 기준 매우 공격적.",
    "2006년 11월 클로징 후 14개월 만에 IPO — 주당 $15, $13억 조달. IPO 이전 PE 컨소시엄에 약 $10억 배당 회수.",
    "2014년 6월 회계 스캔들 발생 — 2011-2013년 3년치 재작성, 누적 세전이익 약 $235M 수정. 2015년 7월 SEC와 $16M 합의.",
    "2019년 4월 빌 애크먼·퍼싱스퀘어가 10% 숏 포지션 공개 — '2년 내 파산' 공언, 결과적으로 13개월 만에 적중.",
    "2020년 5월 22일 Chapter 11 신청 — 코로나19로 공항 렌탈 60%+ 폭락. 파산 직후 '밈주식' 현상으로 휴지조각 직전의 주식이 $6까지 거래.",
    "2020년 9월 SEC가 채무자(DIP) 에쿼티 발행을 차단 — 미국 파산 역사상 최초 사례, 개인 투자자 보호 규정 변화의 계기.",
    "2021년 6월 Knighthead Capital · Certares · ABRY 컨소시엄이 약 $60억 에쿼티 투입해 Hertz 인수 — 신규 자본 구조로 재상장. 2014년 이전 PE는 잔여 지분 전액 손실.",
  ],

  industryOverview: {
    body: "미국 차량 렌탈 시장은 공항(airport) 채널과 비공항(off-airport) 채널로 양분되며, 공항 채널은 항공 여행 수요에 절대적으로 연동된다. Hertz는 공항 1위, Enterprise(비상장)는 비공항·보험 대차 1위, Avis Budget은 다브랜드 전략으로 양 채널에 걸쳐 있었다. 차량 렌탈 산업의 핵심은 'fleet financing' — 차량을 자산이 아니라 단기 자본 비용(감가상각 + 금융비용)으로 운영하는 구조이고, ABS(자산담보부증권) 시장에 대한 의존도가 매우 높다. 한 번 항공 수요가 무너지면 차량 구매 대금을 갚을 현금흐름이 끊긴다는 점에서 LBO에 본질적으로 부적합한 산업이라는 비판이 이전부터 있었다. 2020년대 들어서는 전기차 전환이 추가 변수가 됐다.",
    metrics: [
      { label: "미국 차량 렌탈 시장 (2005)",  value: "$190억",  sub: "공항 + 비공항 합산" },
      { label: "Hertz 시장 점유율 (LBO 당시)", value: "~28%",   sub: "공항 채널 1위" },
      { label: "공항 채널 매출 비중",          value: "~70%",   sub: "Hertz 기준, 항공 수요 직결" },
      { label: "Fleet ABS 시장 (Hertz)",       value: "$80억+", sub: "2005년 기준, 차량금융 의존" },
    ],
    players: [
      { name: "Hertz",            role: "공항 렌탈 1위 — LBO 이후 점유율 유지하나 회계·재무 약화" },
      { name: "Enterprise Holdings", role: "비상장 가족 기업, 비공항·보험 대차 1위, 부채 없이 운영" },
      { name: "Avis Budget Group", role: "Avis + Budget 다브랜드, 2006년 Cendant에서 분리 상장" },
      { name: "Dollar Thrifty",    role: "저가 브랜드, 2012년 Hertz가 $26억에 인수" },
    ],
  },

  companyOverview: {
    targetName: "The Hertz Corporation",
    body: "Hertz는 LBO 직전 미국·유럽·아시아에서 약 7,600개 거점, 47만 대 이상의 차량을 운용한 글로벌 1위 차량 렌탈 사업자였다. 매출의 약 70%는 미국 공항 채널에서 발생했고, 비즈니스 트래블러·레저 트래블러·자동차 보험 대차 시장이 핵심 고객층이었다. 추가로 Hertz Equipment Rental(HERC)이라는 산업 장비 렌탈 자회사도 보유(이후 2016년 스핀오프). 차량 평균 보유 기간은 12-18개월이며, 잔존가치 변동이 손익에 직격타를 주는 구조 — fleet ABS 시장이 흔들리면 차량 매입 자금이 끊겨 곧바로 유동성 위기로 이어진다.",
    metrics: [
      { label: "LBO EV",              value: "$150억",  sub: "에쿼티 $23억 + 부채 $127억" },
      { label: "Entry Debt/EBITDA",   value: "~7×",     sub: "경기 민감 산업 기준 공격적" },
      { label: "공항 거점 (2005)",     value: "7,600+",  sub: "미국·유럽·아시아 합산" },
      { label: "Fleet 보유 대수",      value: "~47만 대", sub: "LBO 당시 글로벌 기준" },
    ],
    financials: [
      {
        year: "FY2003",
        revenue: 5942,
        cogs: 3850,
        grossProfit: 2092,
        sga: 1280,
        operatingIncome: 812,
        ebitda: 1480,
      },
      {
        year: "FY2005",
        revenue: 7469,
        cogs: 4820,
        grossProfit: 2649,
        sga: 1490,
        operatingIncome: 1159,
        ebitda: 1820,
      },
      {
        year: "FY2007",
        revenue: 8685,
        cogs: 5610,
        grossProfit: 3075,
        sga: 1680,
        operatingIncome: 1395,
        ebitda: 2010,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2003-FY2007 기준. LBO 클로징 직후 시점인 FY2007까지는 매출·EBITDA 모두 증가했고, 외형상 LBO thesis가 작동하는 것처럼 보였다. 그러나 EBITDA에 포함된 일부 항목(렌탈 차량 감가상각, 잔존가치 가정)이 이후 회계 재작성의 핵심 대상이 됐다.",
  },

  dealStructure: {
    body: "Ford 100% 자회사 형태였던 Hertz를 PE 3사가 동등 지분으로 인수하는 비공개 전환 LBO. 에쿼티 $23억은 CD&R·Carlyle·Merrill Lynch Global PE가 각 1/3씩 분담. 부채 $127억은 신규 텀론, HY 채권, 그리고 가장 중요한 fleet financing 패실리티(ABS 형태)로 구성됐다. 2006년 11월 NYSE 재상장 후에도 PE 컨소시엄이 약 70%를 유지하다가 단계적으로 매각.",
    preOwnership: {
      nodes: [
        { id: "ford-pre",  label: "Ford Motor Company", sub: "Hertz 100% 모회사",       type: "entity" },
        { id: "hertz-pre", label: "The Hertz Corporation", sub: "Ford 자회사 (비상장)", type: "target" },
      ],
      edges: [
        { from: "ford-pre", to: "hertz-pre", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "cdr-post",     label: "Clayton Dubilier & Rice", sub: "약 26% 에쿼티",  type: "fund"   },
        { id: "carlyle-post", label: "Carlyle Group",            sub: "약 26% 에쿼티",  type: "fund"   },
        { id: "ml-post",      label: "Merrill Lynch Global PE",  sub: "약 26% 에쿼티",  type: "fund"   },
        { id: "mgmt-post",    label: "경영진 · 기타",             sub: "약 22% 에쿼티 + 인센티브", type: "entity" },
        { id: "hertz-post",   label: "The Hertz Corporation",    sub: "비상장 → 2006년 재상장 NYSE: HTZ", type: "target" },
      ],
      edges: [
        { from: "cdr-post",     to: "hertz-post", label: "26%" },
        { from: "carlyle-post", to: "hertz-post", label: "26%" },
        { from: "ml-post",      to: "hertz-post", label: "26%" },
        { from: "mgmt-post",    to: "hertz-post", label: "22%" },
      ],
    },
    keyTerms: [
      { label: "인수 방식",          value: "Ford 자회사 매각 LBO + 14개월 후 IPO",            accent: true  },
      { label: "총 EV",              value: "$150억 (에쿼티 $23억 + 부채 $127억)",             accent: true  },
      { label: "Entry Leverage",     value: "Debt/EBITDA ~7×",                                  accent: true  },
      { label: "IPO 회수",           value: "2006년 11월, 주당 $15, $13억 조달",                accent: false },
      { label: "Dividend Recap",     value: "IPO 이전 PE에 약 $10억 배당 회수",                  accent: true  },
      { label: "회계 재작성",        value: "2014년 11월, 3년치 누적 세전 약 $235M 수정",       accent: true  },
      { label: "Chapter 11",         value: "2020년 5월 22일 신청",                              accent: true  },
      { label: "재상장 인수자",      value: "Knighthead · Certares · ABRY ($60억 에쿼티)",       accent: false },
    ],
  },

  advisors: {
    body: "LBO 클로징(2005), 회계 재작성(2014), 파산 절차(2020) 세 국면에서 각각 다른 자문단이 동원됐다. 특히 2020년 파산 절차에서는 White & Case가 채무자측 법률 자문을, Moelis & Company가 채무자측 재무 자문을 맡았다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "LBO 컨소시엄 (2005)",
        initials: "CDR",
        bg: "bg-amber-700",
        advisors: [
          { firm: "JPMorgan",                role: "인수금융 공동 주선",         roleType: "financial", note: "텀론 · 브리지론 주관" },
          { firm: "Lehman Brothers",         role: "인수금융 공동 주선",         roleType: "financial", note: "2008년 파산" },
          { firm: "Goldman Sachs",           role: "인수금융 · 자문",             roleType: "financial", note: "Merrill Lynch PE 측 자문 겸임" },
          { firm: "Debevoise & Plimpton",    role: "법률 자문 (CD&R · Carlyle)", roleType: "legal",     note: "LBO 거래 구조" },
          { firm: "Latham & Watkins",        role: "법률 자문 (Merrill Lynch PE)", roleType: "legal",   note: "공동 카운슬" },
        ],
      },
      {
        side: "target",
        sideLabel: "Ford (매각 측, 2005)",
        initials: "F",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Goldman Sachs",           role: "재무 자문 (매각)",            roleType: "financial", note: "매각 프로세스 운영" },
          { firm: "Hughes Hubbard & Reed",   role: "법률 자문",                    roleType: "legal",     note: "Ford 사내 법무 협업" },
          { firm: "PricewaterhouseCoopers",  role: "외부 감사인 (LBO 이후 ~2015)", roleType: "other",    note: "2014년 재작성 책임 논란, EY로 교체" },
          { firm: "White & Case",            role: "법률 자문 (2020 Chapter 11)",  roleType: "legal",     note: "채무자측 카운슬" },
          { firm: "Moelis & Company",        role: "재무 자문 (2020 Chapter 11)",  roleType: "financial", note: "구조조정 자문" },
        ],
      },
    ],
    disclaimer: "자문단은 LBO 클로징(2005), 회계 재작성(2014), 파산 절차(2020) 시점별로 상이.",
  },

  valuation: {
    body: "2005년 LBO Entry는 EV/EBITDA 약 8.2×(FY2005 EBITDA $1.82B 기준)였다. 차량 렌탈 같은 자산집약 산업에서는 EV/EBITDA보다 EV/(EBITDA - Fleet Capex)가 더 의미 있는 지표인데, fleet capex를 차감하면 실질 배수가 두 자릿수에 근접한다는 분석도 있었다. IPO 시점(2006년 11월) 시가총액은 약 $48억, 2014년 회계 스캔들 직전 시가총액은 약 $130억까지 회복했으나, 2020년 파산 신청 시점에는 약 $4억(주당 $2.84)으로 폭락. 파산 졸업 후 2021년 11월 재상장 시점 시가총액은 약 $130억까지 회복했다.",
    rows: [
      { item: "Entry EV (2005)",             val: "$150억",    note: "에쿼티 $23억 + 부채 $127억",                                accent: true  },
      { item: "Entry EBITDA",                val: "$1.82B",    note: "FY2005 기준",                                                accent: false },
      { item: "Entry EV/EBITDA",             val: "~8.2×",     note: "Fleet capex 차감 시 실질 두 자릿수 근접",                   accent: false },
      { item: "Entry Debt/EBITDA",           val: "~7×",       note: "경기 민감 산업 기준 공격적",                                accent: true  },
      { item: "IPO 시총 (2006-11)",         val: "$48억",     note: "주당 $15, $13억 조달",                                       accent: false },
      { item: "Pre-Scandal 시총 (2014-05)", val: "~$130억",   note: "회계 부정 발표 직전",                                         accent: false },
      { item: "Chapter 11 신청 시총",       val: "~$4억",     note: "2020년 5월, 주당 약 $2.84",                                  accent: true  },
      { item: "PE 컨소시엄 배당 회수 누적",  val: "~$18억",    note: "2005-2014, 배당 · 이차 매도 · IPO 회수 합산 추정",          accent: true  },
    ],
    disclaimer: "수치는 Hertz 10-K, S-1, 8-K 및 SEC 파산 절차 공시 기반 추정치.",
  },

  rationale: {
    buyer: {
      title: "LBO 컨소시엄 입장",
      initials: "CDR",
      bg: "bg-amber-700",
      points: [
        "공항 렌탈 1위 시장 지위 + 안정적 캐시플로 — LBO에 적합한 '브랜드 헤게모니' 자산이라는 판단",
        "Ford captive 구조에서 벗어나면 차량 구성 다변화 · 잔존가치 관리 개선 여지 — 운영 마진 개선 시나리오",
        "Fleet ABS 시장의 풍부한 유동성 — 인수 직후에도 차량금융 재조달 용이",
        "IPO 또는 전략적 매각을 통한 빠른 회수 — 실제 14개월 만에 IPO + Dividend Recap 실현",
        "공항 트래픽 회복 사이클 + 비즈니스 트래블 수요 견고 — 거시 베팅 (이후 항공 수요 변동성에 노출)",
      ],
    },
    seller: {
      title: "Ford 매각 측 입장",
      initials: "F",
      bg: "bg-blue-700",
      points: [
        "Ford 본업(자동차) 위기 — 디트로이트 빅3 구조조정 자금 마련 필요",
        "Hertz captive 구조에서는 시너지가 제한적이라는 판단 — 본업 집중을 위한 비핵심 자산 매각",
        "$150억 매각 대금 즉시 확보 → 연금 부담 · 부채 축소에 활용",
        "PE 컨소시엄 입찰 경쟁으로 매각 가격 극대화 — 당시 차량 렌탈 LBO 사상 최고가",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월 기준",
    body: "Hertz LBO는 단순한 '실패한 LBO'가 아니라, 15년에 걸쳐 LBO의 거의 모든 실패 패턴을 압축적으로 보여준 사례다. (1) 경기 민감 산업에 7× 레버리지, (2) IPO + Dividend Recap으로 PE는 일찍 회수하고 잔여 리스크는 공개 주주에게 이전, (3) 외부 감사 체제의 약점이 드러난 회계 부정, (4) 빌 애크먼의 12개월 이상 선행 숏콜 적중, (5) 거시 충격(코로나)이 결정타, (6) 파산 직후 '밈주식' 현상과 SEC의 사상 최초 DIP 에쿼티 발행 차단. Knighthead·Certares·ABRY 체제는 2021년 6월 출범 후 4년이 지났고, 그 사이 Tesla $42억 EV 대량 발주(2021)와 2024년 약 2만 대 EV 매각·전략 후퇴까지 한 차례 더 거시 베팅 실패를 경험했다. 2026년 현재 Hertz는 흑자로 돌아왔지만, 'LBO에서 살아남았다'는 안도감보다는 'LBO가 만든 자본 구조의 후유증이 얼마나 오래가는가'를 보여주는 케이스에 가깝다.",
    overallVerdict: "다층적 실패 — 15년에 걸친 LBO 호러 스토리, 잔여 PE 에쿼티 전액 손실, 그러나 회사 자체는 2021년 신규 자본으로 생존",
    positives: [
      "LBO 컨소시엄은 2005-2014년 사이 배당 · IPO · 이차 매도로 누적 약 $18억 회수 — 잔여 지분 전액 손실에도 불구하고 단순 IRR로는 약 1× 회수",
      "2012년 Dollar Thrifty $26억 인수로 시장 점유율 확대 — 회계 스캔들이 없었다면 합병 시너지 일부 실현 가능했을 것",
      "2021년 Knighthead·Certares·ABRY 체제로 재상장 성공 — Chapter 11이 청산이 아닌 재건으로 종결",
      "파산 절차에서 채권자가 사실상 무손실 회수 — fleet ABS 담보 구조의 회복력 입증",
    ],
    risks: [
      "잔여 PE 에쿼티 (2014년 시점 $20-30억 평가) 전액 손실 — '미실현 평가이익'은 거시 충격 한 번에 0이 될 수 있다는 교훈",
      "회계 부정 → SEC $16M 합의 → 신뢰 회복 실패의 누적 효과 — 자본조달 비용 영구 상승",
      "공항 렌탈 70% 비중 + 거시 베팅 = 코로나 같은 외생 충격에 완전 노출",
      "파산 직후 밈주식 현상으로 휴지조각 주식이 $6까지 거래 — 개인 투자자 보호 규정 변화의 도화선",
      "2021년 이후 Tesla $42억 EV 대량 발주 → 2024년 2만 대 매각 후퇴 — 신경영진도 또 한 번 거시·기술 베팅 실패",
    ],
    editorNote: "Hertz 케이스의 핵심 교훈은 셋이다. 첫째, LBO 컨소시엄이 'IPO + Dividend Recap'으로 일찍 회수해버리면 이후 발생하는 손실은 공개 주주 · 채권자에게 전가된다. 둘째, 경기 민감 + 자산집약 산업에서 7× 이상의 레버리지는 거시 충격 한 번이면 회복 불능에 빠진다. 셋째, '파산 밈주식'과 SEC의 DIP 에쿼티 차단은 LBO의 마지막 단계에서조차 자본시장 구조 자체를 변형시킨다. KKR × Toys R Us가 'LBO 부채가 어떻게 미래 투자를 막는가'를 보여줬다면, Hertz는 'LBO가 어떻게 15년에 걸쳐 회사를 천천히 무너뜨리는가'를 보여준 사례다.",
  },

  tombstone: {
    acquirerInitials: "CDR",
    acquirerBg: "bg-amber-700",
    targetInitials: "HTZ",
    targetBg: "bg-yellow-500",
    acquirerName: "CD&R · Carlyle · Merrill Lynch Global PE",
    targetName: "The Hertz Corporation",
    dealTitle: "Hertz LBO (2005)",
    dealSize: "$150억",
    dealSizeUSD: "$15.0bn",
    evEbitda: "~8.2×",
    closeDate: "2005년 12월",
  },

  sources: [
    { id: 1, text: "Ford Motor Company (2005). Ford Announces Sale of Hertz to Investor Group for $15 Billion. Press Release, September 12, 2005." },
    { id: 2, text: "Hertz Global Holdings (2006). Form S-1 — Initial Public Offering Prospectus. SEC Filing, November 2006." },
    { id: 3, text: "Hertz Global Holdings (2014). Form 8-K — Notification of Late Filing and Restatement. SEC Filing, June 2014." },
    { id: 4, text: "U.S. Securities and Exchange Commission (2015). In the Matter of Hertz Global Holdings — Settlement Order. SEC Press Release, December 2018." },
    { id: 5, text: "Pershing Square Capital Management (2019). Short Hertz Thesis Presentation. April 2019." },
    { id: 6, text: "U.S. Bankruptcy Court (2020). In re The Hertz Corporation et al., Chapter 11 Filing. District of Delaware, May 22, 2020." },
    { id: 7, text: "Wall Street Journal (2020). SEC Blocks Hertz From Selling Shares to Public in Bankruptcy. June 17, 2020." },
    { id: 8, text: "Reuters (2021). Hertz Emerges From Bankruptcy in $7 Billion Deal With Knighthead, Certares. June 30, 2021." },
    { id: 9, text: "Financial Times (2024). Hertz to Sell 20,000 EVs in Strategy Reversal. January 2024." },
    { id: 10, text: "Bloomberg (2020). The Hertz Meme Stock Saga: How Bankrupt Equity Traded at $6. June 2020." },
  ],

  seo: {
    title: "Hertz LBO 파산 — Carlyle·CD&R·Merrill Lynch PE $150억 차입매수의 15년 호러",
    description: "2005년 Ford에서 $150억에 매각된 Hertz가 14개월 만의 IPO, 2014년 회계 스캔들, 빌 애크먼의 숏콜, 2020년 코로나 Chapter 11, 그리고 '파산 밈주식'까지 — 차입매수가 15년에 걸쳐 어떻게 무너졌는지 완전 해부.",
    keywords: [
      "Hertz LBO", "허츠 차입매수", "Carlyle Hertz", "CD&R Hertz", "Merrill Lynch PE",
      "Ford Hertz 매각", "Hertz IPO", "Hertz 회계 부정", "Hertz 재무제표 재작성",
      "Bill Ackman Hertz", "Pershing Square 숏", "Hertz Chapter 11", "Hertz 파산",
      "파산 밈주식", "DIP 에쿼티", "Knighthead Capital", "Certares", "Hertz 테슬라",
      "LBO 실패 사례", "경기민감 LBO", "Dividend Recap",
    ],
  },

  concepts: [
    {
      term: "경기민감 산업 LBO (Cyclical Industry LBO)",
      href: "/market-101/levfin-credit-metrics",
      description: "수요가 거시 경기·여행·소비에 직결되는 산업에 레버리지를 얹는 구조. EBITDA 변동성이 크기 때문에 entry leverage가 6× 이상이면 한 번의 거시 충격에 이자 커버리지가 무너진다. Hertz는 공항 렌탈 70% 비중 + 7× 레버리지 조합으로 코로나에 완전 노출됐다.",
    },
    {
      term: "재무제표 재작성 (Accounting Restatement)",
      description: "기업이 과거에 발표한 재무제표가 회계기준 위반 또는 오류로 잘못됐음을 인정하고 수정 공시하는 절차. Hertz는 2014년 2011-2013년 3년치를 재작성, 누적 세전이익 약 $235M 수정. CEO·CFO 동시 사임, SEC 조사, $16M 합의로 이어졌다.",
    },
    {
      term: "Pre-Bankruptcy Distribution (파산 이전 배당 회수)",
      href: "/market-101/levfin-distressed",
      description: "PE 컨소시엄이 LBO 이후 IPO·배당·이차 매도로 회사가 파산하기 전에 자본을 회수하는 패턴. Hertz의 경우 2005-2014년 누적 약 $18억 회수 → 2020년 잔여 지분은 파산으로 0. '파산 전에 회수했으면 PE는 손해 안 본 것 아닌가?'라는 윤리적 논쟁의 핵심 사례.",
    },
    {
      term: "파산 밈주식 (Bankruptcy Meme Stock)",
      description: "Chapter 11 신청 이후 회사가 곧 휴지조각이 될 것을 알면서도 개인 투자자들이 SNS·로빈후드 등으로 단기 매매하면서 주가가 비이성적으로 급등하는 현상. Hertz는 2020년 5월 파산 직후 주가가 $0.55에서 $6까지 거래되면서 사상 최초의 '파산 밈주식'으로 기록됐다.",
    },
    {
      term: "행동주의 공매도 (Short Activism)",
      href: "/deal-101/activism-overview",
      description: "행동주의 펀드가 단순 보유가 아닌 공매도 포지션을 공개하면서 기업의 회계·재무·전략 결함을 시장에 폭로하는 방식. 빌 애크먼·퍼싱스퀘어의 2019년 Hertz 숏콜은 대표 사례 — '2년 내 파산' 공언이 13개월 만에 적중했다.",
    },
    {
      term: "DIP 에쿼티 발행 (Debtor-in-Possession Equity Offering)",
      href: "/market-101/levfin-distressed",
      description: "Chapter 11 절차 중인 채무자(DIP)가 파산 법원의 승인을 받아 신주를 발행해 자금을 조달하는 시도. Hertz는 2020년 9월 Jefferies 주관으로 시도했으나 SEC가 '투자자 오인 가능성'을 이유로 사상 최초 차단. 이후 파산 직전 기업의 신주 발행 규제 강화 계기.",
    },
    {
      term: "PE Realized Return (PE 실현 수익률)",
      description: "PE가 펀드 청산·매각·배당으로 실제 회수한 현금 기준 수익률. 미실현 평가이익(NAV)과 구분되며, 거시 충격으로 평가이익이 0이 될 수 있다. Hertz LBO에서 PE 컨소시엄은 누적 $18억 실현했지만 잔여 NAV는 0 — 결과적으로 1× 회수 수준 (PE 벤치마크 2-3×에 크게 미달).",
    },
    {
      term: "전기차 전환 실패 (EV Strategy Reversal)",
      description: "전통 사업자가 EV 전환에 베팅했다가 잔존가치 하락·수리비·수요 부진으로 후퇴하는 패턴. 2021년 Hertz는 Tesla $42억 발주를 선언했지만, 2024년 약 2만 대 EV 매각과 감가상각 손실로 전략을 후퇴. '신경영진의 또 한 번의 거시 베팅 실패'라는 비판을 받았다.",
    },
  ],

  faq: [
    {
      q: "Hertz LBO는 클로징 시점에는 성공적이지 않았나요? 왜 결국 파산했나요?",
      a: "2005년 클로징 후 2006년 IPO와 2007-2013년 외형 성장으로 7년 정도는 외형상 성공한 LBO처럼 보였습니다. 그러나 (1) 경기 민감 산업에 7× 레버리지가 본질적으로 부적합했고, (2) 2014년 회계 부정이 드러나면서 자본조달 비용이 영구적으로 상승했고, (3) 2020년 코로나라는 외생 충격이 마지막 결정타였습니다. 한 가지 원인이 아니라 15년에 걸친 누적 약점이 코로나를 만나 폭발한 케이스입니다.",
    },
    {
      q: "PE 컨소시엄은 결국 손해를 본 건가요, 이익을 본 건가요?",
      a: "이중적입니다. 2005-2014년 사이 IPO·배당·이차 매도로 누적 약 $18억을 회수했고, 이는 초기 에쿼티 $23억과 비교하면 약 0.8-1.0× 수준입니다. 그러나 2014년 회계 스캔들 이전까지 잔여 지분 평가이익이 $20-30억에 달했고, 이것이 2020년 파산으로 0이 됐습니다. 결과적으로 단순 IRR로는 약 1× 수준 — PE 벤치마크(2-3×)에 크게 못 미치는 '실패한 회수'입니다. 하지만 에쿼티 전액 손실은 면했다는 점에서 KKR × Toys R Us(전액 손실)와는 다른 결말입니다.",
    },
    {
      q: "빌 애크먼의 Hertz 숏콜은 어떻게 적중했나요?",
      a: "2019년 4월 퍼싱스퀘어는 (1) 회계 부정 후 신뢰 미회복, (2) 부채 코비넌트 압박, (3) Enterprise·Avis 대비 비용 구조 열위, (4) 공항 렌탈 의존도 등을 근거로 '2년 내 파산'을 공언했습니다. 코로나라는 트리거가 없었더라도 2-3년 내 디폴트 시나리오를 예측한 것이고, 실제로는 코로나가 가속화시켜 13개월 만에 적중했습니다. 활동주의 공매도(short activism)가 단순 정보 비대칭 활용이 아니라 펀더멘털 분석에 기반할 때 시장 신호 역할을 한다는 점을 보여준 사례입니다.",
    },
    {
      q: "파산 밈주식 현상이란 무엇이고 왜 Hertz가 사상 최초인가요?",
      a: "2020년 5월 22일 Hertz가 Chapter 11을 신청한 직후, 회사 측이 '주식은 거의 확실히 휴지조각'이라고 명시했음에도 불구하고 개인 투자자들이 로빈후드 등을 통해 매수에 몰리면서 주가가 $0.55에서 $6까지 약 10배 급등했습니다. SNS와 무료 거래 앱이 결합한 사상 최초의 '파산 밈주식' 현상이었습니다. 이 사건은 이후 SEC의 개인 투자자 보호 규정 변화와 2021년 게임스톱·AMC 사태의 전조가 됐습니다.",
    },
    {
      q: "SEC가 Hertz의 DIP 에쿼티 발행을 차단한 것은 왜 역사적인가요?",
      a: "Chapter 11 중인 기업도 파산 법원 승인을 받으면 신주 발행이 가능합니다. Hertz는 2020년 9월 Jefferies 주관으로 약 $10억 규모 신주 발행을 시도했고, 파산 법원 승인까지 받았습니다. 그러나 SEC가 'DIP 신주 매수자는 거의 확실히 손실을 본다는 점을 충분히 고지하지 않으면 투자자 오인 가능성이 있다'며 발행을 사실상 차단했습니다. 미국 파산 역사상 최초 사례로, 이후 파산 직전 · 파산 중 기업의 신주 발행 공시 기준이 강화됐습니다.",
    },
    {
      q: "2021년 이후 새 Hertz(Knighthead·Certares·ABRY)는 잘 운영되고 있나요?",
      a: "재무 구조는 LBO 때보다 훨씬 건전합니다. 2021년 약 $60억 신규 에쿼티가 투입돼 부채 의존도가 크게 낮아졌고, 코로나 회복 사이클에서 흑자 전환에 성공했습니다. 그러나 2021년 Tesla $42억 EV 대량 발주를 선언했다가 2024년 약 2만 대를 매각하고 EV 잔존가치 손실을 인식하면서 또 한 번 거시·기술 베팅 실패를 경험했습니다. 2026년 현재 흑자 기조이지만, '신경영진도 또 다른 베팅을 했다'는 비판이 남아 있습니다.",
    },
  ],

  // ── LevFin 관점 오버레이 ─────────────────────────────────────
  levfinOverview: {
    angle: "15년에 걸친 LBO 호러 — 경기민감 자산집약 산업에 7× 레버리지를 얹으면 무슨 일이 벌어지는가",
    body: "Hertz LBO는 LevFin 관점에서 'LBO가 한 번의 사건이 아니라 15년에 걸친 누적 위험'이라는 점을 보여준다. Entry Debt/EBITDA 7×는 일반 LBO 기준으로는 공격적이지만 비정상은 아니었다. 그러나 (1) 경기민감 항공 트래픽 의존, (2) Fleet ABS의 차입 구조 내장, (3) 14개월 만의 Dividend Recap으로 재무 여력 소진, (4) 회계 부정이 자본조달 비용 상승으로 이어진 것이 누적되면서 거시 충격(코로나) 한 번에 무너졌다. 채권자(특히 Fleet ABS)는 담보 구조 덕분에 대부분 회수했지만, 무담보 채권과 PE 에쿼티는 큰 손실을 봤다.",
    tranches: [
      {
        name: "Fleet ABS 패실리티",
        amountDisplay: "$80억+",
        rate: "변동금리, 차량 담보",
        maturity: "3-5년 리볼빙",
        seniority: "senior-secured",
        pct: 53,
        color: "bg-amber-500",
      },
      {
        name: "Term Loan B (Corporate)",
        amountDisplay: "$20억",
        rate: "LIBOR + 300bp",
        maturity: "7년",
        seniority: "senior-secured",
        pct: 13,
        color: "bg-amber-400",
      },
      {
        name: "HY 채권 (Senior Notes)",
        amountDisplay: "$27억",
        rate: "8.875% 고정",
        maturity: "8-10년",
        seniority: "senior-unsecured",
        pct: 18,
        color: "bg-orange-500",
      },
      {
        name: "에쿼티 (CD&R · Carlyle · ML PE + 경영진)",
        amountDisplay: "$23억",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 16,
        color: "bg-emerald-500",
      },
    ],
    metrics: [
      { label: "Entry Debt/EBITDA",       value: "~7×",       sub: "경기민감 산업 기준 공격적",       isAlert: true  },
      { label: "Fleet ABS 비중",          value: "~63%",      sub: "전체 부채 대비 차량담보부 비중",    isAlert: false },
      { label: "Dividend Recap (IPO 전)", value: "~$10억",    sub: "에쿼티 투입 14개월 만에 회수",     isAlert: true  },
      { label: "Chapter 11 부채 규모",    value: "~$190억",   sub: "2020년 5월 신청 시점",             isAlert: true  },
    ],
    lessons: [
      {
        icon: "🎢",
        title: "경기민감 + 자산집약 = LBO 부적합",
        body: "차량 렌탈은 공항 트래픽에 직결되고, 동시에 fleet capex가 EBITDA의 50% 이상을 차지하는 자산집약 산업이다. EV/EBITDA가 8×처럼 보여도 fleet capex를 차감한 실질 배수는 두 자릿수에 가깝다. 이런 산업에 7× 레버리지를 얹으면 거시 충격 한 번에 회복 불능에 빠진다.",
      },
      {
        icon: "💰",
        title: "Dividend Recap — PE는 일찍 회수하고 리스크는 공개주주에게",
        body: "Hertz는 클로징 14개월 만에 IPO + $10억 배당으로 PE가 초기 에쿼티 절반을 회수했다. 이후 발생한 모든 리스크(회계 부정, 코로나, 파산)는 공개 주주와 채권자가 떠안았다. LBO의 '얼리 리커버리' 패턴이 윤리적·법적 논쟁의 대상이 되는 이유다.",
      },
      {
        icon: "📉",
        title: "회계 부정은 자본조달 비용의 영구 상승",
        body: "2014년 재무제표 재작성 이후 Hertz의 신용 스프레드는 영구적으로 확대됐다. 동일한 신용등급의 다른 발행사 대비 100-200bps 이상 더 비싼 금리를 지불해야 했고, 이는 5년 누적으로 EBITDA의 의미 있는 부분을 잡아먹었다. 회계 부정은 '벌금'이 아니라 '자본조달 구조 자체의 약화'다.",
      },
      {
        icon: "🛡️",
        title: "Fleet ABS의 회복력 — 담보 구조가 채권자를 살린다",
        body: "Hertz Chapter 11에서 무담보 채권 회수율은 60-70%였지만, Fleet ABS는 차량이라는 명확한 담보 덕분에 거의 100% 회수했다. 자산집약 산업의 LBO에서는 부채 구조 설계가 채권자 회수율을 결정하는 핵심 변수다.",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-credit-metrics",
        chapterNum: "Ch.2",
        title: "신용지표 분석",
        whyRelevant: "경기민감 산업에서 Debt/EBITDA 7×가 왜 거시 충격에 무너지는가",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "부실 기업 & 채무 재조정",
        whyRelevant: "Chapter 11, Fleet ABS 회수율, DIP 에쿼티 발행 시도와 SEC 차단",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "주요 케이스스터디",
        whyRelevant: "Toys R Us(소매) · TXU(에너지) · Hertz(렌탈) — 산업별 LBO 실패 패턴 비교",
      },
    ],
  },
};

export default deal;
