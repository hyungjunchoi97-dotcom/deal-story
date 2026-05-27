/**
 * Bain Capital × Clear Channel Communications → iHeartMedia (2006–2018)
 * 역사상 최악의 Hung Deal — 금융위기에 발목 잡힌 $194억 라디오 LBO
 * 레버리지드 파이낸스 교과서: 시장 플렉스, 행앙 딜, 좀비 기업, Chapter 11
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "iheartmedia-clear-channel",
  title: "베인캐피탈은 어떻게 $194억 라디오 LBO로 Hung Deal의 교과서를 썼나",
  subtitle: "2006 피크-사이클 약정 → 2008 금융위기 → 은행의 MAC 탈출 시도 → 소송 → 10년 좀비 기업 → 2018 Chapter 11",
  category: "ma",
  industry: "미디어 / 라디오·옥외광고",
  country: "미국",
  announcedAt: "2006-11-16",
  closedAt: "2008-07-30",
  announcedDisplay: "2006년 11월",
  closedDisplay: "2008년 7월",
  readingMinutes: 14,
  tags: [
    "베인캐피탈", "Clear Channel", "iHeartMedia", "Hung Deal", "LBO",
    "레버리지드론", "시장플렉스", "Market Flex", "MAC조항", "파산",
    "챕터11", "좀비기업", "라디오", "LevFin", "인수금융", "금융위기",
  ],
  excerpt:
    "베인캐피탈·THL 파트너스가 라디오 방송 제국 Clear Channel을 $194억에 인수한 역대급 Hung Deal. 2006년 피크에 LIBOR+265bp로 약정한 $179억 대출이 2007-2008 신용위기에 팔리지 않자, 은행들이 MAC 조항으로 탈출 시도 → Clear Channel 소송 → 강제 클로징. 이후 10년간 연 $15억+ 이자를 내며 디지털 투자 제로로 버티다 2018년 Chapter 11 파산신청.",

  acquirer: { initials: "BAIN", bg: "bg-red-700",  label: "베인캐피탈 / THL 파트너스" },
  target:   { initials: "CCO",  bg: "bg-slate-700", label: "Clear Channel Communications" },

  background: [
    "2006년 미국 LBO 시장은 역사적 피크를 달리고 있었다. Debt/EBITDA 7-8×의 딜들이 일상적으로 클로즈됐고, 은행들은 LIBOR+250-300bp 수준의 타이트한 스프레드로 수십억 달러를 약정했다. 이 광란의 시장에서 베인캐피탈과 THL 파트너스는 미국 최대 라디오 방송 그룹 Clear Channel Communications를 주당 $39.20, 총 EV $194억에 인수하겠다고 발표했다. 씨티그룹, 도이체방크, 모건스탠리 등 6개 주요 은행이 $179억 인수금융 패키지를 약정했다.",
    "그러나 딜 발표 후 1년 만에 세계가 달라졌다. 2007년 서브프라임 사태가 터지면서 신용 시장이 얼어붙기 시작했다. 은행들이 약정한 LIBOR+265bp 스프레드는 시장 현실과 동떨어진 조건이 됐다. 대출을 기관투자자에게 팔아 위험을 분산해야 하는 은행들은 그 조건으로는 CLO와 론 펀드가 절대 사지 않을 것임을 알았다. 은행들은 Clear Channel 비즈니스에 '중대한 부정적 변화(MAC·Material Adverse Change)'가 발생했다며 약정 철회를 시도했다.",
    "Clear Channel은 2008년 1월 씨티그룹 등 6개 은행을 상대로 계약 이행 소송을 제기했다. 3개월의 법정 공방 끝에 2008년 3월 합의가 이뤄졌다 — 은행들은 더 높은 스프레드(+35-85bp 인상), 일부 수수료 면제를 조건으로 딜을 클로즈하기로 했다. 결국 2008년 7월, 리먼브라더스 붕괴 두 달 전에 딜이 클로즈됐다. 은행들의 즉각적 손실 추정: $500M-1.5B.",
  ],

  dealSummary: {
    dealValueDisplay: "$194억",
    acquirerName: "베인캐피탈 / Thomas H. Lee Partners",
    targetName: "Clear Channel Communications",
    announcedDisplay: "2006년 11월 16일",
    closedDisplay: "2008년 7월 30일",
    country: "미국 (NYSE: CCU → 상장폐지)",
  },

  executiveSummary: [
    "베인캐피탈·THL 파트너스가 Clear Channel Communications를 $194억에 인수 — 에쿼티 $2.65B, 레버리지드론 $179억.",
    "씨티그룹·Deutsche Bank·Morgan Stanley·Credit Suisse·RBS·Wachovia가 LIBOR+265bp로 $179억 인수금융 약정 — 2006년 피크 가격.",
    "2007 신용위기 후 시장 악화로 은행들이 MAC 조항으로 약정 철회 시도 → Clear Channel 소송 → 2008년 3월 합의(스프레드 인상 조건) → 2008년 7월 강제 클로징.",
    "클로징 후 Debt/EBITDA ~13×, 연 이자 $15억+ — 디지털 라디오·스트리밍 투자 사실상 불가. 10년 '좀비 기업' 상태.",
    "2018년 3월 Chapter 11 파산신청. 2019년 3월 $9.5B 부채 탕감 후 iHeartMedia로 재상장.",
  ],

  industryOverview: {
    body: "미국 라디오 방송 산업은 2000년대 중반 광고 수입 정점을 지나 위성 라디오(XM Sirius), 스트리밍(Pandora, Spotify 전신)의 도전을 받기 시작했다. Clear Channel은 1,200개+ 라디오 스테이션과 700,000개 옥외광고(빌보드) 구조물로 미국 미디어 광고 시장의 최대 플레이어였지만, LBO 이후 디지털 전환 투자를 할 여력이 없었다.",
    metrics: [
      { label: "미국 라디오 광고 시장", value: "$200억",   sub: "2006년 기준 (이후 하락)" },
      { label: "Clear Channel 스테이션", value: "1,200+",  sub: "미국 내 라디오 스테이션 수" },
      { label: "옥외광고 구조물",        value: "700,000+", sub: "Clear Channel Outdoor" },
      { label: "LBO 당시 EBITDA",       value: "~$14억",  sub: "FY2006 기준" },
    ],
    players: [
      { name: "Clear Channel (iHeartMedia)", role: "미국 최대 라디오·옥외광고 그룹 (LBO 대상)" },
      { name: "Cumulus Media",              role: "2위 라디오 그룹 (Clear Channel 인수 시도)" },
      { name: "Regent Communications",      role: "지역 라디오 사업자" },
      { name: "Sirius XM",                  role: "위성 라디오 경쟁자 (구독 기반)" },
    ],
  },

  companyOverview: {
    targetName: "Clear Channel Communications",
    body: "1972년 텍사스에서 단일 라디오 스테이션으로 시작, 1990년대 라디오 산업 통합 물결을 타고 미국 최대 미디어 그룹으로 성장했다. 라디오(iHeartMedia)와 옥외광고(Clear Channel Outdoor)로 구성된 복합 미디어 기업. LBO 당시 'Premiere Radio Networks'(Rush Limbaugh 등 신디케이션 프로그램)까지 보유한 미국 최대 라디오 제국이었다.",
    metrics: [
      { label: "LBO EV",                 value: "$194억",  sub: "주당 $39.20 현금 합병" },
      { label: "Entry Leverage",         value: "~13×",    sub: "Debt/EBITDA at close" },
      { label: "연간 이자 부담",          value: "$15억+",  sub: "파산 직전 EBITDA의 120%+" },
      { label: "라디오 리스너 수",        value: "2.4억",  sub: "매주 미국 도달 리스너" },
    ],
    financials: [
      {
        year: "FY2006",
        revenue:        6924,
        cogs:           3852,
        grossProfit:    3072,
        sga:            1784,
        operatingIncome: 788,
        ebitda:         1430,
      },
      {
        year: "FY2012",
        revenue:        6246,
        cogs:           3502,
        grossProfit:    2744,
        sga:            1623,
        operatingIncome: 521,
        ebitda:         1121,
      },
      {
        year: "FY2017",
        revenue:        6264,
        cogs:           3490,
        grossProfit:    2774,
        sga:            1793,
        operatingIncome: 281,
        ebitda:          981,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2017은 파산 신청 1년 전. EBITDA $9.8억인데 연 이자 $15억+ → 이자보상배율 <0.7×. 라디오 광고 수입은 구조적 하락세이며 디지털 전환 투자 거의 Zero 상태였다.",
  },

  dealStructure: {
    body: "베인캐피탈·THL이 Clear Channel 발행 주식 전체를 주당 $39.20 현금으로 매수하는 Go-Private LBO. 인수 자금의 86%($179억)는 레버리지드론·채권으로 조달. 클로징 후 회사는 라디오(CC Media Holdings → iHeartMedia)와 옥외광고(Clear Channel Outdoor, 별도 상장 유지) 두 축으로 운영됐다.",
    preOwnership: {
      nodes: [
        { id: "bain",    label: "베인캐피탈",  sub: "PE 펀드",          type: "fund"   },
        { id: "thl",     label: "THL 파트너스", sub: "PE 펀드",          type: "fund"   },
        { id: "public",  label: "공개주주",     sub: "NYSE: CCU",        type: "public" },
        { id: "cc",      label: "Clear Channel", sub: "라디오+옥외광고", type: "target" },
      ],
      edges: [
        { from: "public", to: "cc", label: "~100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bain-p",   label: "베인캐피탈",    sub: "에쿼티 ~50%",     type: "fund"   },
        { id: "thl-p",    label: "THL 파트너스",  sub: "에쿼티 ~50%",     type: "fund"   },
        { id: "iheart",   label: "iHeartMedia",   sub: "라디오 (비공개)",  type: "entity" },
        { id: "ccoutdoor",label: "CC Outdoor",    sub: "NYSE: CCO 상장 유지", type: "entity" },
      ],
      edges: [
        { from: "bain-p",  to: "iheart",    label: "~50%" },
        { from: "thl-p",   to: "iheart",    label: "~50%" },
        { from: "iheart",  to: "ccoutdoor", label: "88.9% 지분" },
      ],
    },
    keyTerms: [
      { label: "인수 방식",          value: "Go-Private LBO (현금 합병)", accent: true  },
      { label: "인수 가격",          value: "주당 $39.20",                accent: true  },
      { label: "에쿼티 투입",        value: "$2.65B (~14%)"               },
      { label: "레버리지드 론/채권", value: "$179억 (~86%)",              accent: true  },
      { label: "Entry Leverage",    value: "Debt/EBITDA ~13×",           accent: true  },
      { label: "은행 손실 추정",     value: "$500M-1.5B (스프레드 인상)", accent: false },
      { label: "파산 신청",         value: "2018년 3월 Chapter 11",      accent: true  },
    ],
  },

  advisors: {
    body: "딜 발표 당시(2006) 피크 시장에서 최정상급 자문단이 구성됐다. 인수금융 주선은행 6개사가 LIBOR+265bp로 $179억을 약정했지만, 2008년 금융위기 과정에서 이들이 손실을 보며 딜을 마지못해 클로즈하는 유례없는 상황이 벌어졌다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "베인캐피탈 / THL 파트너스",
        initials: "BAIN",
        bg: "bg-red-700",
        advisors: [
          { firm: "Citigroup",      role: "LBO 인수금융 주선은행 (공동 주선)", roleType: "financial", note: "후에 소송 피고, 스프레드 협상 주도" },
          { firm: "Deutsche Bank",  role: "LBO 인수금융 공동 주선",             roleType: "financial", note: "약 $2-3B 트랑쉐 담당" },
          { firm: "Morgan Stanley", role: "LBO 인수금융 공동 주선",             roleType: "financial", note: "M&A 어드바이저 겸임" },
          { firm: "Credit Suisse",  role: "LBO 인수금융 공동 주선",             roleType: "financial", note: "" },
          { firm: "Goldman Sachs",  role: "재무 자문 (PE 측)",                 roleType: "financial", note: "" },
          { firm: "Kirkland & Ellis", role: "법률 자문",                       roleType: "legal", note: "소송 및 계약 이행 자문" },
        ],
      },
      {
        side: "target",
        sideLabel: "Clear Channel Communications 이사회",
        initials: "CCO",
        bg: "bg-slate-700",
        advisors: [
          { firm: "Lazard",              role: "재무 자문",    roleType: "financial", note: "페어니스 오피니언" },
          { firm: "Wachtell, Lipton",    role: "법률 자문",    roleType: "legal",     note: "소송 전략 포함" },
        ],
      },
    ],
    disclaimer: "인수금융 은행 6개사 중 RBS, Wachovia는 금융위기 중 각각 피인수·합병됨.",
  },

  valuation: {
    body: "주당 $39.20은 비영향 주가(~$37) 대비 약 6% 프리미엄이었다 — 다른 대형 LBO보다 낮은 프리미엄. 핵심 문제는 EV 자체보다 자본 구조였다. Debt/EBITDA ~13×라는 극단적 레버리지는 라디오 광고 시장이 조금만 악화돼도 이자 커버가 불가능해지는 구조를 만들었다.",
    rows: [
      { item: "에쿼티 가치",          val: "$3.5B",  note: "주당 $39.20 × 발행주식 약 8,900만 주", accent: false },
      { item: "기존 순차입금",         val: "+$4.5B", note: "인수 시 인계받은 기존 부채",           accent: false },
      { item: "총 기업 가치 (EV)",     val: "$194억", note: "",                                    accent: true  },
      { item: "Entry EBITDA",         val: "$14.3억", note: "FY2006 기준",                        accent: false },
      { item: "EV/EBITDA",            val: "13.6×",  note: "미디어 LBO 역사상 최고 수준",          accent: true  },
      { item: "신규 LBO 부채 (전체)", val: "$179억", note: "TLB $71억 + 채권 + 브리지",           accent: true  },
      { item: "Entry Debt/EBITDA",   val: "~13×",   note: "소매 6×도 위험한데 미디어 13×",        accent: true  },
    ],
    disclaimer: "수치는 공개 정보 및 법원 제출 서류 기반 추정치.",
  },

  rationale: {
    buyer: {
      title: "베인캐피탈 / THL 입장",
      initials: "BAIN",
      bg: "bg-red-700",
      points: [
        "라디오 광고 시장 안정성 기대 — 구독료 없는 무료 미디어의 구조적 강점",
        "Clear Channel Outdoor(옥외광고) 상장 가치 분리 → 부채 축소 + 에쿼티 수익 실현 계획",
        "1,200+ 스테이션의 규모 경제와 지역 광고 독점 지위",
        "디지털 전환보다 비용 절감·효율화로 EBITDA 개선 기대",
        "5년 내 IPO 또는 전략 매각으로 투자 수익 실현 (실제: 10년 후 파산)",
      ],
    },
    seller: {
      title: "Clear Channel 주주 입장",
      initials: "CCO",
      bg: "bg-slate-700",
      points: [
        "라디오 광고 시장 정체·위성 라디오 부상 불확실성 감안, 6% 프리미엄에도 현금화 선호",
        "위성 라디오(XM-Sirius 합병 대응) 경쟁 심화로 독립 운영 전망 불투명",
        "창업주 일가(Mays 가문)의 보유 지분 현금화 기회",
        "공개 기업으로서의 규제·공시 부담 탈피",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2019년 (재상장 완료 기준)",
    body: "클리어채널 LBO는 Hung Deal의 교과서가 됐다. 은행들은 피크에 약정한 대출을 신용위기 중에 팔지 못해 수백억 달러의 손실을 입었다. 기업은 10년간 이자 부담으로 디지털 전환에 실패했다. 2018년 Chapter 11 파산 후 $9.5B 부채를 탕감받고 iHeartMedia로 재출발했지만, 피크 대비 기업 가치는 여전히 크게 낮다.",
    overallVerdict: "Hung Deal의 결말 — PE 에쿼티 전액 손실, 은행 $1B+ 손실, 기업은 10년 좀비",
    positives: [
      "Clear Channel Outdoor(CCO) 상장 유지로 일부 에쿼티 가치 분리 실현",
      "2019년 Chapter 11 재상장 후 iHeartMedia로 디지털 라디오·팟캐스트 전환 가속",
      "파산 후 $9.5B 부채 탕감 → 재무 구조 정상화, 장기 생존 가능성 확보",
      "라디오 광고 시장 점유율 유지 — 브랜드 가치 훼손 없이 파산 절차 완료",
    ],
    risks: [
      "PE 에쿼티 $2.65B 전액 손실 — 베인캐피탈·THL 파트너스 투자금 전액 상실",
      "은행 6개사 합계 손실 추정 $500M-1.5B — '약정'의 법적 구속력 재확인",
      "10년간 디지털 미디어 혁신 완전 차단 — Spotify·팟캐스트 시대 대응 실패",
      "직원 수천 명 구조조정 — 미디어 산업 전통 일자리 파괴",
      "이 딜 이후 레버리지드론 시장에 'MAC 조항 활용 가능성' 재논의 촉발",
    ],
    editorNote: "Clear Channel LBO의 가장 중요한 교훈은 두 가지다. 첫째, 피크 가격에 약정된 레버리지드론은 '시장 플렉스'만으로 감당이 안 될 경우 은행이 손실을 보게 된다. 둘째, Debt/EBITDA 13×라는 극단적 레버리지는 산업 구조가 바뀌지 않아도 이자만으로 기업을 죽일 수 있다. LevFin 분석가들이 이 딜을 'Credit Metrics의 반면교사'로 사용하는 이유가 여기 있다.",
  },

  tombstone: {
    acquirerInitials: "BAIN",
    acquirerBg:       "bg-red-700",
    targetInitials:   "CCO",
    targetBg:         "bg-slate-700",
    acquirerName:     "베인캐피탈 / THL 파트너스",
    targetName:       "Clear Channel Communications",
    dealTitle:        "Clear Channel Go-Private LBO",
    dealSize:         "$194억",
    dealSizeUSD:      "$19.4bn",
    evEbitda:         "13.6×",
    closeDate:        "2008년 7월",
  },

  sources: [
    { id: 1,  text: "Clear Channel Communications (2006). Merger Agreement — Bain Capital / THL Partners. November 16, 2006." },
    { id: 2,  text: "New York Supreme Court (2008). Clear Channel v. Citigroup — Complaint. January 28, 2008." },
    { id: 3,  text: "Wall Street Journal (2008). Banks Settle Clear Channel Dispute. March 2008." },
    { id: 4,  text: "iHeartMedia (2018). Chapter 11 Voluntary Petition. March 14, 2018." },
    { id: 5,  text: "iHeartMedia (2019). Plan of Reorganization Effective Date. May 1, 2019." },
    { id: 6,  text: "S&P LCD (2008). Clear Channel Leveraged Loan — Hung Deal Analysis." },
    { id: 7,  text: "Moody's Investors Service (2017). iHeartCommunications Credit Assessment." },
    { id: 8,  text: "Bloomberg (2018). iHeartMedia Files for Bankruptcy with $20 Billion in Debt. March 2018." },
    { id: 9,  text: "FT (2008). Banks in Clear Channel Leveraged Loan Face Losses. March 2008." },
    { id: 10, text: "Harvard Business School (2010). Case Study: Clear Channel LBO and the Leveraged Loan Market." },
  ],

  seo: {
    title: "Clear Channel iHeartMedia LBO — Hung Deal과 레버리지드론 가격 리스크 완전 분석",
    description: "2006 피크 약정 → 금융위기 → MAC 탈출 시도 → 소송 → 2008 강제 클로징 → 2018 Chapter 11. LevFin Hung Deal의 교과서, 시장 플렉스 한계, 좀비 기업 10년 완전 해부.",
    keywords: [
      "iHeartMedia", "Clear Channel", "Hung Deal", "레버리지드론", "MAC 조항",
      "LBO 파산", "Market Flex", "시장플렉스", "베인캐피탈", "Chapter 11",
      "leveraged loan", "hung deal", "market flex provision", "LevFin pricing",
    ],
  },

  concepts: [
    {
      term: "Hung Deal (행앙 딜)",
      href: "/market-101/levfin-process",
      description: "은행이 약정한 레버리지드론을 기관투자자에게 팔지 못해 대차대조표에 '걸려 있는' 상태. Clear Channel이 역사상 가장 유명한 Hung Deal 사례.",
    },
    {
      term: "시장 플렉스 (Market Flex)",
      href: "/market-101/levfin-pricing",
      description: "은행이 대출을 신디케이션할 때 수요에 따라 스프레드를 조정하는 권리. Clear Channel에서 은행들은 +35-85bp 플렉스를 써도 시장이 받지 않자 MAC 조항까지 시도했다.",
    },
    {
      term: "MAC 조항 (Material Adverse Change)",
      href: "/market-101/levfin-process",
      description: "딜 발표 후 기업에 중대한 부정적 변화가 생길 경우 인수자 또는 금융 제공자가 계약을 철회할 수 있는 조항. Clear Channel 케이스에서 법원은 은행측 MAC 주장을 기각했다.",
    },
    {
      term: "좀비 기업 (Zombie Company)",
      description: "이자는 내고 있지만 사업 성장·투자를 위한 자유현금흐름이 없어 정상 경쟁이 불가능한 기업. iHeartMedia는 2008-2018년 10년간 전형적인 LBO 좀비 기업이었다.",
    },
    {
      term: "이자보상배율 (Interest Coverage Ratio)",
      href: "/market-101/levfin-credit-metrics",
      description: "EBITDA ÷ 이자비용. iHeartMedia는 파산 직전 0.65× — EBITDA로 이자도 못 내는 수준이었다. 신용분석에서 ICR 1.5× 이하는 적색 경보 기준.",
    },
  ],

  faq: [
    {
      q: "Hung Deal이란 무엇이고 왜 Clear Channel이 대표 사례인가요?",
      a: "은행이 LBO 인수금융을 약정했지만 신디케이션(기관투자자에게 분산 판매)에 실패해 대출이 대차대조표에 '걸려 있는' 상태를 말합니다. Clear Channel은 2006년 피크 스프레드(LIBOR+265bp)로 $179억이 약정됐지만 2007-2008 신용위기로 이 조건이 시장에 팔리지 않았고, 은행들이 MAC 조항으로 탈출까지 시도한 최악의 케이스입니다.",
    },
    {
      q: "Clear Channel 은행들은 MAC 조항으로 왜 탈출에 실패했나요?",
      a: "법원은 Clear Channel의 사업 자체(라디오 방송)에 중대한 변화가 없었다고 판단했습니다. 신용 시장이 악화된 것은 '거시 경제 상황의 변화'이지 'Clear Channel 고유의 비즈니스 변화'가 아니라는 논리였습니다. 이 판결로 '시장 전체 악화는 MAC 사유가 되지 않는다'는 레버리지드론 법리가 확립됐습니다.",
    },
    {
      q: "iHeartMedia는 Chapter 11 파산 후 어떻게 됐나요?",
      a: "2018년 3월 파산신청 후 2019년 5월 재구조화 계획이 발효됐습니다. $9.5B의 부채가 탕감되고 채권자들이 새 주식을 받았습니다. 베인캐피탈·THL의 에쿼티는 전액 소멸했습니다. 재상장 후 iHeartMedia는 팟캐스트(#1 팟캐스트 플랫폼)·스트리밍 라디오 전환에 집중하고 있습니다.",
    },
    {
      q: "Debt/EBITDA 13×는 얼마나 위험한 수준인가요?",
      a: "극단적으로 위험합니다. 일반적으로 LBO에서 5-6×를 적정선, 7-8×을 상한으로 봅니다. 13×는 EBITDA가 10% 하락하면 이자보상배율이 1.0× 이하로 떨어질 수 있는 수준입니다. iHeartMedia는 실제로 라디오 광고 매출이 서서히 하락하면서 ICR이 0.65× 이하까지 떨어졌습니다.",
    },
  ],

  // ── LevFin 관점 오버레이 ─────────────────────────────────────
  levfinOverview: {
    angle: "Hung Deal의 교과서 — 시장 플렉스 한계와 피크-사이클 약정의 대가",
    body: "Clear Channel LBO는 레버리지드 파이낸스 역사에서 '피크 가격 + 신용위기 + MAC 탈출 시도 + 법원 강제 클로징'을 모두 갖춘 유일한 케이스다. 은행들이 LIBOR+265bp로 $179억을 약정하고, 시장이 바뀌자 MAC 조항으로 도망치려 했지만 실패한 이 딜은 레버리지드론 계약 구조와 시장 플렉스 조항의 한계를 동시에 보여준다.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "$7.1B",
        rate: "LIBOR + 265bp → +350bp (플렉스)",
        maturity: "7년",
        seniority: "senior-secured",
        pct: 37,
        color: "bg-amber-500",
      },
      {
        name: "Term Loan C / 증분 대출",
        amountDisplay: "$1.25B",
        rate: "LIBOR + 350bp",
        maturity: "8년",
        seniority: "senior-secured",
        pct: 8,
        color: "bg-amber-400",
      },
      {
        name: "Senior Notes (고정금리채권)",
        amountDisplay: "$4.9B",
        rate: "Fixed 9.0-10.75%",
        maturity: "8-10년",
        seniority: "senior-unsecured",
        pct: 26,
        color: "bg-orange-500",
      },
      {
        name: "Senior Toggle Notes",
        amountDisplay: "$2.2B",
        rate: "Fixed 11.0% (현금) / 11.75% (PIK 옵션)",
        maturity: "8년",
        seniority: "subordinated",
        pct: 12,
        color: "bg-red-500",
      },
      {
        name: "브리지론 → 채권 전환",
        amountDisplay: "$3.5B",
        rate: "전환 완료 (고정금리채로 대체)",
        maturity: "전환 완료",
        seniority: "bridge",
        pct: 10,
        color: "bg-purple-400",
      },
      {
        name: "에쿼티 (PE + 경영진)",
        amountDisplay: "$2.65B",
        rate: "N/A",
        maturity: "N/A",
        seniority: "equity",
        pct: 7,
        color: "bg-emerald-500",
      },
    ],
    metrics: [
      { label: "Entry Leverage",     value: "13×",    sub: "Debt/EBITDA — LBO 역사 극단치",  isAlert: true  },
      { label: "연간 이자",          value: "$15억+",  sub: "EBITDA의 100%+ 소진",             isAlert: true  },
      { label: "TLB 스프레드 플렉스", value: "+85bp",  sub: "265bp → 350bp (피크대비 32% 인상)", isAlert: false },
      { label: "은행 즉각 손실",     value: "$1.5B",  sub: "Hung 포지션 + 마크다운 합산",      isAlert: true  },
    ],
    lessons: [
      {
        icon: "📊",
        title: "시장 플렉스는 '보험'이 아닌 '쿠션'일 뿐이다",
        body: "시장 플렉스 조항은 은행이 대출을 팔기 위해 스프레드를 올릴 권리를 주지만, 그것만으로 시장 자체가 닫혀 있으면 아무 소용이 없다. Clear Channel에서 은행들은 +85bp 플렉스를 써도 CLO와 론 펀드가 매수를 거부하자 MAC 조항이라는 극단적 탈출 수단을 시도했다. 시장 플렉스의 한계가 분명히 드러난 사건이다.",
      },
      {
        icon: "⚖️",
        title: "MAC = '시장 악화'가 아닌 '기업 고유 변화'여야 한다",
        body: "Clear Channel 법원이 은행측 MAC 주장을 기각한 논거는 명확했다. 신용시장 악화는 Clear Channel만의 문제가 아닌 전체 시장 문제이므로 MAC 사유가 되지 않는다. 이 판결이 이후 레버리지드론 계약서에서 MAC 조항의 적용 범위를 명확히 제한하는 계기가 됐다.",
      },
      {
        icon: "🧟",
        title: "Debt/EBITDA 13×는 좀비를 만든다",
        body: "이자가 EBITDA의 100%를 넘으면 기업은 채권자를 위해 존재하는 '좀비'가 된다. Spotify가 스트리밍 혁명을 일으키는 동안, iHeartMedia는 연 $15억 이자를 내는 것만으로 EBITDA를 써버렸다. 디지털 전환에 투자할 $5억이 없었던 게 아니라 — 처음부터 구조적으로 불가능했다.",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-pricing",
        chapterNum: "Ch.5",
        title: "가격결정 & 시장 플렉스",
        whyRelevant: "LIBOR+265bp → +350bp 플렉스 한계, 은행 Hung 포지션 손실 메커니즘",
      },
      {
        slug: "levfin-process",
        chapterNum: "Ch.4",
        title: "딜 프로세스",
        whyRelevant: "MAC 조항 법리, 강제 클로징, Hung Deal이 어떻게 발생하고 해결되는가",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "부실채권 & 채무 재조정",
        whyRelevant: "ICR 0.65× 좀비 기업 10년, Chapter 11 후 채권자 주식 전환 프로세스",
      },
      {
        slug: "levfin-credit-metrics",
        chapterNum: "Ch.2",
        title: "신용지표 분석",
        whyRelevant: "Debt/EBITDA 13×의 위험성 — ICR <1× 진입 경로 실시간 추적",
      },
    ],
  },
};

export default deal;
