/**
 * Apollo Global Management × Caesars Entertainment (구 Harrah's) LBO (2008–2015)
 * Cov-Lite + 자산 이전 + 채권자 소송 — 레버리지드론 코비넌트의 허점을 해부하다
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "apollo-caesars",
  title: "아폴로는 어떻게 카이사르 호텔을 사고, 자산을 빼돌리고, 채권자와 법정에서 싸웠나",
  subtitle: "$314억 카지노 LBO — Cov-Lite의 허점, 자산 스트리핑 소송, Chapter 11 해부",
  category: "ma",
  industry: "게임·카지노 / 호스피탈리티",
  country: "미국",
  announcedAt: "2006-12-19",
  closedAt: "2008-01-28",
  announcedDisplay: "2006년 12월",
  closedDisplay: "2008년 1월",
  readingMinutes: 14,
  tags: [
    "아폴로", "카이사르", "Caesars", "Harrahs", "LBO", "Cov-Lite", "코비넌트",
    "자산스트리핑", "챕터11", "파산", "레버리지드론", "LevFin", "PE",
    "사모펀드", "카지노", "라스베이거스", "TPG", "채권자 소송",
  ],
  excerpt:
    "아폴로 글로벌 매니지먼트·TPG 캐피탈이 Harrah's Entertainment를 $314억에 인수 후 Cov-Lite 조항을 활용해 수익성 높은 카지노 자산을 자회사로 이전했다. 1순위 채권자들이 '사기적 이전(Fraudulent Conveyance)'으로 소송을 제기했고, 2015년 Chapter 11 파산 신청 — 레버리지드론 코비넌트 조항의 허점이 만든 역대급 법정 공방.",

  acquirer: { initials: "APO", bg: "bg-blue-900", label: "아폴로 글로벌 매니지먼트 / TPG" },
  target:   { initials: "CZR", bg: "bg-yellow-600", label: "Harrah's Entertainment (→ Caesars)" },

  background: [
    "2006년 라스베이거스 카지노 업계는 '황금기'였다. 메가 리조트(Bellagio, Venetian) 모델이 성공하고, 중국 마카오 진출 붐이 일었으며, 게임 수요는 구조적으로 성장하는 것처럼 보였다. 이 환경에서 아폴로 글로벌 매니지먼트와 TPG 캐피탈은 미국 최대 카지노 운영사 Harrah's Entertainment를 주당 $90, 총 EV $314억에 인수하겠다고 선언했다. 동시에 6개 주선은행이 $253억 레버리지드론을 약정했다.",
    "2008년 1월 클로징 시점은 최악이었다. 서브프라임 위기가 가시화되며 카지노 방문객이 감소하기 시작했다. Harrah's는 Caesars Entertainment로 이름을 바꿨지만, $253억 부채와 연 $25억+ 이자 부담이 모든 영업이익을 집어삼켰다. 아폴로는 운신의 폭을 넓히기 위해 Cov-Lite 대출 계약의 허점을 활용하기 시작했다.",
    "2009-2013년, 아폴로는 점진적으로 카이사르의 수익성 높은 카지노 자산(Planet Hollywood, Horseshoe Hammond 등)을 'Caesars Growth Partners(CGP)'와 같은 자회사로 이전했다. 이 자회사들은 원래 1순위 채권자들의 담보 범위 밖에 있었다. 채권자들은 이것이 '사기적 자산 이전(Fraudulent Conveyance)'이라며 소송을 제기했다. 2015년 1월, CEOC(Caesars Entertainment Operating Company)는 $18.4B 부채를 안고 Chapter 11 파산신청을 냈다.",
  ],

  dealSummary: {
    dealValueDisplay: "$314억",
    acquirerName: "아폴로 글로벌 매니지먼트 / TPG 캐피탈",
    targetName: "Harrah's Entertainment (→ Caesars Entertainment)",
    announcedDisplay: "2006년 12월 19일",
    closedDisplay: "2008년 1월 28일",
    country: "미국 (NYSE: HET → 상장폐지 → 재상장 CZR)",
  },

  executiveSummary: [
    "아폴로(55%)·TPG(45%)가 Harrah's Entertainment를 $314억에 인수 — 에쿼티 $61억, 레버리지드론·채권 $253억.",
    "Entry Leverage ~10×, 연 이자 $25억+ — 금융위기와 카지노 수요 하락으로 즉각 재무 압박.",
    "아폴로가 Cov-Lite 조항을 활용해 수익성 자산을 비담보 자회사(CGP)로 이전 → 1순위 채권자 담보 희석.",
    "1순위 채권자들 '사기적 자산 이전' 소송 제기 → 역대 최복잡 레버리지드론 법정 공방.",
    "2015년 CEOC Chapter 11 파산, 2017년 재건 계획 발효 — 채권자들 약 65센트 회수, PE 에쿼티 소멸.",
  ],

  industryOverview: {
    body: "미국 카지노·게임 산업은 2000년대 중반 '체험형 엔터테인먼트' 붐으로 호황을 누렸다. 라스베이거스 메가 리조트 모델이 성공하면서 부동산 가치와 EBITDA가 함께 상승했다. 그러나 2008-2009 금융위기는 카지노 방문객 수를 직격했고, 과도하게 레버리지된 Caesars에게 특히 치명적이었다.",
    metrics: [
      { label: "미국 카지노 게임 수입", value: "$590억",  sub: "2006년 기준" },
      { label: "Harrah's 카지노 수",   value: "50+",    sub: "미국 내 (전세계 포함 더 많음)" },
      { label: "Harrah's 시장 점유율", value: "~15%",   sub: "미국 카지노 게임 수입" },
      { label: "Entry Leverage",       value: "~10×",   sub: "Debt/EBITDA at LBO close" },
    ],
    players: [
      { name: "Caesars (구 Harrah's)", role: "미국 최대 카지노 운영사 (LBO 대상)" },
      { name: "MGM Resorts",           role: "Bellagio, MGM Grand 등 2위 운영사" },
      { name: "Las Vegas Sands",        role: "Venetian, 마카오 진출 성공 3위" },
      { name: "Wynn Resorts",           role: "프리미엄 리조트 틈새 시장" },
    ],
  },

  companyOverview: {
    targetName: "Harrah's Entertainment → Caesars Entertainment",
    body: "1937년 설립, 네바다주 기반의 미국 최대 카지노 체인. Harrah's, Caesars Palace, Horseshoe, Paris Las Vegas 등 50개 이상 카지노 리조트를 운영했다. 2004년 Caesars Entertainment Corp 인수로 규모를 키웠고, '토탈 리워즈(Total Rewards)' 충성도 프로그램으로 방대한 고객 데이터를 보유했다. LBO 전 카지노 업계 최대 지주회사였으나 과도한 M&A로 이미 상당한 부채를 지고 있었다.",
    metrics: [
      { label: "LBO EV",            value: "$314억",  sub: "주당 $90 현금 합병" },
      { label: "Entry Leverage",    value: "~10×",   sub: "Debt/EBITDA (극단적 수준)" },
      { label: "연간 이자 부담",    value: "$25억+",  sub: "EBITDA의 100%+ 소진" },
      { label: "파산 당시 CEOC 부채", value: "$184억", sub: "2015년 Chapter 11 기준" },
    ],
    financials: [
      {
        year: "FY2006",
        revenue:         9784,
        cogs:            5690,
        grossProfit:     4094,
        sga:             1881,
        operatingIncome: 2213,
        ebitda:          2310,
      },
      {
        year: "FY2012",
        revenue:         8586,
        cogs:            5220,
        grossProfit:     3366,
        sga:             1720,
        operatingIncome: 1646,
        ebitda:          1820,
      },
      {
        year: "FY2014",
        revenue:         8517,
        cogs:            5367,
        grossProfit:     3150,
        sga:             1886,
        operatingIncome: 1264,
        ebitda:          1580,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2014는 CEOC 파산 직전 연도. EBITDA $15.8억인데 연 이자 $25억+ → ICR 0.63×. 자산 이전으로 일부 EBITDA도 비담보 자회사로 이동한 상태.",
  },

  dealStructure: {
    body: "아폴로·TPG가 Harrah's 전체 발행 주식을 주당 $90 현금으로 매수하는 Go-Private LBO. 클로징 후 회사는 'Caesars Entertainment Corporation(CEC)'으로 재명명됐고, 실질 운영 법인 'CEOC'에 부채가 집중됐다. 이후 아폴로는 수익성 높은 카지노 자산을 CEOC 밖 별도 자회사(CGP)로 이전하는 구조를 만들었다.",
    preOwnership: {
      nodes: [
        { id: "apollo",  label: "아폴로 글로벌",  sub: "PE 펀드 (55%)",      type: "fund"   },
        { id: "tpg",     label: "TPG 캐피탈",     sub: "PE 펀드 (45%)",      type: "fund"   },
        { id: "public",  label: "공개주주",        sub: "NYSE: HET",          type: "public" },
        { id: "harrahs", label: "Harrah's Ent.",  sub: "미국 최대 카지노",   type: "target" },
      ],
      edges: [
        { from: "public", to: "harrahs", label: "~100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "apo-p",   label: "아폴로 (55%)",    sub: "에쿼티 $3.4B",      type: "fund"   },
        { id: "tpg-p",   label: "TPG (45%)",       sub: "에쿼티 $2.7B",      type: "fund"   },
        { id: "cec",     label: "Caesars Ent.(CEC)", sub: "상장 유지",        type: "entity" },
        { id: "ceoc",    label: "CEOC",            sub: "$25.3B 부채 집중",   type: "entity" },
        { id: "cgp",     label: "Caesars Growth",  sub: "수익성 자산 이전처", type: "entity" },
      ],
      edges: [
        { from: "apo-p", to: "cec",  label: "55%" },
        { from: "tpg-p", to: "cec",  label: "45%" },
        { from: "cec",   to: "ceoc", label: "100%" },
        { from: "cec",   to: "cgp",  label: "자산 이전" },
      ],
    },
    keyTerms: [
      { label: "인수 방식",      value: "Go-Private LBO (현금 합병)", accent: true  },
      { label: "인수 가격",      value: "주당 $90.00",                accent: true  },
      { label: "에쿼티",         value: "$61억 (~19%)"                             },
      { label: "레버리지드론",   value: "$253억 — Cov-Lite 구조",     accent: true  },
      { label: "Entry Leverage", value: "Debt/EBITDA ~10×",          accent: true  },
      { label: "자산 이전 논란", value: "CGP 비담보 자회사 이전",     accent: true  },
      { label: "파산 신청",      value: "2015년 1월 CEOC Chapter 11", accent: true  },
    ],
  },

  advisors: {
    body: "아폴로·TPG는 최정상급 LBO 자문단을 구성했다. 인수금융은 씨티그룹, BofA, JPMorgan, Deutsche Bank 등 주요 은행들이 공동 주선했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "아폴로 / TPG 컨소시엄",
        initials: "APO",
        bg: "bg-blue-900",
        advisors: [
          { firm: "Citigroup",       role: "LBO 인수금융 공동 주선", roleType: "financial", note: "TLB 주선 북러너" },
          { firm: "Bank of America", role: "LBO 인수금융 공동 주선", roleType: "financial", note: "공동 북러너" },
          { firm: "JPMorgan Chase",  role: "LBO 인수금융 공동 주선", roleType: "financial", note: "공동 주선은행" },
          { firm: "Deutsche Bank",   role: "LBO 인수금융 공동 주선", roleType: "financial", note: "공동 주선은행" },
          { firm: "Latham & Watkins", role: "법률 자문",             roleType: "legal",     note: "LBO 계약 및 코비넌트 구조" },
        ],
      },
      {
        side: "target",
        sideLabel: "Harrah's 이사회",
        initials: "CZR",
        bg: "bg-yellow-600",
        advisors: [
          { firm: "Goldman Sachs",    role: "재무 자문", roleType: "financial", note: "페어니스 오피니언" },
          { firm: "Wachtell, Lipton", role: "법률 자문", roleType: "legal",     note: "M&A 전문" },
        ],
      },
    ],
  },

  valuation: {
    body: "주당 $90는 비영향 주가 대비 약 30% 프리미엄이었다. EV/EBITDA 13.6×는 당시 카지노 섹터 프리미엄(8-10×)을 크게 상회했으며, 높은 레버리지가 이 배수를 가능하게 했다. 핵심 문제는 카지노 EBITDA의 변동성 — 경기 사이클에 민감한 업종에서 10× 레버리지는 치명적이었다.",
    rows: [
      { item: "에쿼티 가치",           val: "$8.7B",  note: "주당 $90 × 발행주식 약 9,600만 주",     accent: false },
      { item: "기존 순차입금",          val: "+$22.7B", note: "기존 Harrah's 부채 인수",               accent: false },
      { item: "총 기업 가치 (EV)",      val: "$314억", note: "",                                       accent: true  },
      { item: "Entry EBITDA",          val: "$23.1억", note: "FY2006 기준",                           accent: false },
      { item: "EV/EBITDA",             val: "13.6×",  note: "카지노 업종 프리미엄 + LBO 레버리지",    accent: true  },
      { item: "신규/기존 통합 부채",    val: "$253억", note: "TLB + Senior Notes + 기타",             accent: true  },
      { item: "Entry Debt/EBITDA",    val: "~10×",   note: "카지노 업종 사상 최고 수준 LBO",         accent: true  },
    ],
    disclaimer: "수치는 공개 정보 및 파산 법원 제출 서류 기반 추정치.",
  },

  rationale: {
    buyer: {
      title: "아폴로 / TPG 입장",
      initials: "APO",
      bg: "bg-blue-900",
      points: [
        "Harrah's 토탈 리워즈 고객 데이터베이스(4천만+ 회원)의 경쟁우위 — 정보 분석 기반 마케팅 최적화",
        "50+ 카지노 자산의 부동산 가치 분리 → 세일-리스백 등 재무 구조 개선 잠재력",
        "라스베이거스 부동산 가치 상승 트렌드 기대 — 관광 수요 구조적 증가 전망",
        "코스트 커팅(IT 통합, 인력 합리화)으로 EBITDA 개선 여력",
        "5-7년 내 IPO 또는 전략 매각 (실제: 재상장은 2012, 파산은 2015)",
      ],
    },
    seller: {
      title: "Harrah's 주주 입장",
      initials: "CZR",
      bg: "bg-yellow-600",
      points: [
        "비영향 주가 대비 +30% 프리미엄 현금화",
        "카지노 업종 사이클 정점에서의 유동성 확보",
        "기존 대규모 부채($22.7B)를 PE에 넘기는 구조 — 개인 주주 입장에서 유리",
        "경쟁사(MGM, Sands)의 도전에 대응하기 위한 추가 M&A 자금 조달 불필요",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2017년 (재건 계획 발효)",
    body: "카이사르 LBO는 레버리지드론 역사상 가장 복잡한 Chapter 11 사례 중 하나가 됐다. 아폴로의 자산 이전 전략과 채권자 소송, $1.45B 규모의 합의금, 2년 반에 걸친 파산 절차는 레버리지드론 계약서의 코비넌트 조항이 얼마나 중요한지를 시장에 각인시켰다.",
    overallVerdict: "PE 에쿼티 전액 손실 + 채권자 소송 $1.45B 합의 — Cov-Lite의 교훈",
    positives: [
      "Caesars Entertainment 브랜드 가치 유지 — 재구조화 후 라스베이거스 사업 지속",
      "2017년 재건 계획 발효 후 재상장 — 채권자들 주식 전환으로 일부 가치 회복",
      "토탈 리워즈 충성도 데이터 플랫폼(현 Caesars Rewards) 유지",
    ],
    risks: [
      "아폴로·TPG 에쿼티 $61억 전액 소멸",
      "채권자 소송 $1.45B 합의 — '자산 이전 = 사기적 이전' 인정 사례로 해석",
      "1순위 채권자들 원금 대비 65센트 수준 회수 — '1순위'의 실질적 의미 약화",
      "Cov-Lite 대출의 위험성 재확인 — 이후 레버리지드론 시장에서 투자자보호 강화 논의",
      "미국 역사상 가장 복잡한 Chapter 11 중 하나 — 법원 절차 2년 이상 소요",
    ],
    editorNote: "카이사르 케이스의 핵심 교훈은 Cov-Lite 대출에서 '투자자보호 코비넌트'의 부재가 어떤 결과를 낳는지를 보여준다. 아폴로는 코비넌트 없이 자산 이전의 자유를 활용했고, 채권자들은 소송으로만 대응할 수 있었다. 이 사건 이후 레버리지드론 투자자들은 '비담보 자회사 제한(Restricted Subsidiary 정의)', '자산 이전 제한 조항' 등을 더 면밀하게 검토하게 됐다.",
  },

  tombstone: {
    acquirerInitials: "APO",
    acquirerBg: "bg-blue-900",
    targetInitials: "CZR",
    targetBg: "bg-yellow-600",
    acquirerName: "아폴로 글로벌 매니지먼트 / TPG",
    targetName: "Harrah's Entertainment",
    dealTitle: "Harrah's → Caesars LBO",
    dealSize: "$314억",
    dealSizeUSD: "$31.4bn",
    evEbitda: "13.6×",
    closeDate: "2008년 1월",
  },

  sources: [
    { id: 1, text: "Harrah's Entertainment (2006). Merger Agreement — Apollo / TPG. December 19, 2006." },
    { id: 2, text: "CEOC (2015). Chapter 11 Voluntary Petition. January 15, 2015." },
    { id: 3, text: "Caesars Entertainment Operating Company (2017). Plan of Reorganization Effective Date. October 6, 2017." },
    { id: 4, text: "Wall Street Journal (2015). Caesars Files for Bankruptcy. January 2015." },
    { id: 5, text: "Bloomberg (2015). Caesars Bankruptcy: Apollo's Asset Transfer Under Legal Fire. 2015." },
    { id: 6, text: "S&P LCD (2015). Caesars Entertainment — Leveraged Loan Review and Covenant Analysis." },
    { id: 7, text: "Moody's (2014). Caesars Entertainment Operating Company Credit Opinion." },
    { id: 8, text: "FT (2015). How Apollo Stripped Assets from Caesars: A Legal History. March 2015." },
    { id: 9, text: "Law360 (2016). Caesars Creditors Win $1.45B Asset-Transfer Settlement." },
  ],

  seo: {
    title: "아폴로 × 카이사르 LBO — Cov-Lite 자산 이전 소송과 Chapter 11 완전 해부",
    description: "$314억 카지노 LBO. Cov-Lite 허점 → 자산 이전 → 채권자 소송 → $1.45B 합의 → Chapter 11. 레버리지드론 코비넌트 분석의 교과서.",
    keywords: [
      "카이사르 Caesars", "아폴로 LBO", "Cov-Lite", "코비넌트", "자산 이전",
      "챕터11 파산", "레버리지드론", "LBO 실패", "사기적 이전", "LevFin",
      "Caesars bankruptcy", "Apollo leveraged buyout", "covenant analysis",
    ],
  },

  concepts: [
    {
      term: "Cov-Lite (코비넌트 라이트)",
      href: "/market-101/levfin-covenants",
      description: "유지 코비넌트(Maintenance Covenants) 없이 발동(Incurrence) 코비넌트만 포함하는 대출 구조. 카이사르 케이스에서 아폴로는 Cov-Lite를 활용해 자산을 자유롭게 이전했다.",
    },
    {
      term: "Restricted Subsidiary vs Unrestricted Subsidiary",
      href: "/market-101/levfin-covenants",
      description: "신용계약에서 담보·코비넌트 적용 범위를 결정하는 자회사 분류. 아폴로는 수익성 자산을 'Unrestricted Subsidiary(비담보 자회사)'인 CGP로 이전해 채권자 담보에서 제외했다.",
    },
    {
      term: "사기적 이전 (Fraudulent Conveyance)",
      href: "/market-101/levfin-distressed",
      description: "채권자를 해하기 위해 자산을 이전한 경우 법원이 그 이전을 무효화할 수 있는 법리. 카이사르 채권자들이 이 법리로 아폴로를 소송했다.",
    },
    {
      term: "비담보 자회사 바스켓 (Non-Guarantor Basket)",
      href: "/market-101/levfin-covenants",
      description: "신용계약에서 담보·보증 없이 자회사에 투자할 수 있는 허용 한도. 아폴로는 이 바스켓을 최대한 활용해 카이사르 성장 파트너스(CGP)로 자산을 이전했다.",
    },
  ],

  faq: [
    {
      q: "Cov-Lite 대출이란 무엇이고 왜 카이사르 케이스에서 문제가 됐나요?",
      a: "Cov-Lite(Covenant-Lite)는 '유지 코비넌트(Leverage Ratio, Interest Coverage Ratio를 분기마다 지켜야 하는 조건)'가 없는 대출입니다. 카이사르 케이스에서 아폴로는 Cov-Lite 조항을 활용해 자산을 자회사로 이전할 수 있었습니다. 만약 유지 코비넌트가 있었다면, 코비넌트 위반 즉시 채권자가 대출 조기 상환을 요구하거나 자산 이전을 막을 수 있었을 것입니다.",
    },
    {
      q: "아폴로의 카이사르 자산 이전은 어떻게 진행됐나요?",
      a: "아폴로는 Planet Hollywood, Horseshoe Hammond 등 수익성 높은 카지노 자산을 Caesars Growth Partners(CGP)라는 별도 자회사로 이전했습니다. CGP는 원래 CEOC 채권자들의 담보 범위 밖에 있었습니다. 이 과정에서 신용계약의 '비담보 자회사 바스켓(Non-Guarantor Basket)'과 'Restricted → Unrestricted Subsidiary 재분류' 조항을 활용했습니다.",
    },
    {
      q: "카이사르 채권자들은 소송에서 얼마나 이겼나요?",
      a: "2016년 아폴로와 카이사르 채권자들 사이에 $1.45B 규모의 합의가 이뤄졌습니다. 아폴로는 사기적 이전 혐의를 공식 인정하지 않았지만, 거액 합의로 실질적 패배를 인정했습니다. 1순위 채권자들은 원금 대비 약 65센트를 회수했습니다.",
    },
    {
      q: "카이사르 케이스가 레버리지드론 시장에 미친 영향은?",
      a: "이 케이스 이후 레버리지드론 투자자들은 신용계약서의 'Restricted Subsidiary 정의', '비담보 자회사 바스켓 한도', '자산 이전 제한 조항'을 훨씬 엄격하게 검토하게 됐습니다. 또한 2015-2020년대 레버리지드론 시장에서 '코비넌트 드리프트(Covenant Drift)' 문제 — 채무자 친화적 조항이 늘어나는 현상 — 에 대한 투자자 경계심이 높아졌습니다.",
    },
  ],

  // ── LevFin 관점 오버레이 ─────────────────────────────────────
  levfinOverview: {
    angle: "Cov-Lite의 이면 — 코비넌트 없는 대출이 어떻게 자산 이전을 가능케 하나",
    body: "카이사르 LBO는 'Cov-Lite가 왜 위험한가'를 가장 극적으로 보여준 딜이다. 유지 코비넌트가 없었기 때문에 아폴로는 자산을 자회사로 이전하는 동안 채권자들이 법적으로 개입할 수 없었다. 이 딜의 Restricted Subsidiary 정의, 비담보 자회사 바스켓, 자산 이전 조항을 해부하면 현대 레버리지드론 계약서가 어떤 구멍을 가지고 있는지를 이해할 수 있다.",
    tranches: [
      {
        name: "1순위 Term Loan B (TLB)",
        amountDisplay: "$6.7B",
        rate: "LIBOR + 300bp",
        maturity: "7년",
        seniority: "senior-secured",
        pct: 27,
        color: "bg-amber-500",
      },
      {
        name: "2순위 Term Loan B",
        amountDisplay: "$5.3B",
        rate: "LIBOR + 375bp",
        maturity: "7.5년",
        seniority: "senior-secured",
        pct: 21,
        color: "bg-amber-400",
      },
      {
        name: "Senior Secured Notes",
        amountDisplay: "$4.7B",
        rate: "Fixed 10.75-11.25%",
        maturity: "8년",
        seniority: "senior-secured",
        pct: 19,
        color: "bg-orange-500",
      },
      {
        name: "Senior Notes (무담보)",
        amountDisplay: "$5.5B",
        rate: "Fixed 10.0-10.375%",
        maturity: "8-10년",
        seniority: "senior-unsecured",
        pct: 22,
        color: "bg-red-500",
      },
      {
        name: "Junior / Subordinated",
        amountDisplay: "$3.1B",
        rate: "Fixed 12.375-15.0%",
        maturity: "8-10년",
        seniority: "subordinated",
        pct: 7,
        color: "bg-red-700",
      },
      {
        name: "에쿼티 (Apollo + TPG)",
        amountDisplay: "$6.1B",
        rate: "N/A",
        maturity: "N/A",
        seniority: "equity",
        pct: 4,
        color: "bg-emerald-500",
      },
    ],
    metrics: [
      { label: "Entry Leverage",       value: "~10×",    sub: "Debt/EBITDA — 카지노 LBO 극단치",   isAlert: true  },
      { label: "Cov-Lite 비율",        value: "100%",    sub: "유지 코비넌트 전무 — 완전 Cov-Lite", isAlert: true  },
      { label: "자산 이전 합의금",     value: "$1.45B",  sub: "채권자 소송 합의 (2016)",             isAlert: false },
      { label: "1순위 TLB 회수율",     value: "~$0.65",  sub: "원금 $1 대비 65센트 회수",            isAlert: true  },
    ],
    lessons: [
      {
        icon: "📜",
        title: "Cov-Lite = 채권자의 조기 경보 시스템 철거",
        body: "유지 코비넌트(예: 'Debt/EBITDA 7× 초과 시 즉각 상환 의무')가 없으면, 기업이 재무적으로 악화되더라도 채권자는 법적으로 개입할 수 없다. 카이사르에서 아폴로는 EBITDA가 $23억에서 $16억으로 하락하고 ICR이 1.0× 이하로 떨어지는 동안에도 코비넌트 위반이 없었다. 채권자들이 개입할 수 있는 유일한 방법은 소송뿐이었다.",
      },
      {
        icon: "🏚️",
        title: "Restricted Subsidiary 정의가 담보 가치를 결정한다",
        body: "레버리지드론에서 '담보 범위 = Restricted Subsidiary 목록'이다. 아폴로는 수익성 자산을 Unrestricted Subsidiary(CGP)로 이전함으로써 채권자 담보에서 제외했다. 대출 계약서의 'Restricted → Unrestricted 재분류 기준'과 '비담보 자회사 바스켓 한도'는 투자자가 반드시 확인해야 할 조항이다.",
      },
      {
        icon: "⚖️",
        title: "소송은 최후 수단 — 예방적 코비넌트가 답이다",
        body: "채권자들은 소송으로 $1.45B를 받아냈지만, 그것은 원금의 50-60%를 이미 잃은 후였다. 예방적 코비넌트(자산 이전 제한, 비담보 자회사 EBITDA 상한, Restricted Payment 제한)가 처음부터 존재했다면 이 소송 자체가 불필요했다. LevFin 분석의 핵심은 사후 소송이 아닌 사전 계약서 검토에 있다.",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-covenants",
        chapterNum: "Ch.3",
        title: "코비넌트 & 투자자 보호",
        whyRelevant: "Cov-Lite의 실제 위험, Restricted Subsidiary 정의, 자산 이전 제한 조항 분석",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "부실채권 & 채무 재조정",
        whyRelevant: "사기적 이전 소송, Chapter 11 CEOC 절차, 채권자 주식 전환 프로세스",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "주요 케이스스터디",
        whyRelevant: "가장 복잡한 카지노 LBO 파산 — Cov-Lite 계약서의 실제 결과",
      },
    ],
  },
};

export default deal;
