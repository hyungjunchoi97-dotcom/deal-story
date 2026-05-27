/**
 * Serta Simmons Bedding — 2020 Uptier Exchange (Lender-on-Lender Violence)
 * 기존 TLB 채권자 ~$9억을 후순위로 밀어내고 수퍼-선순위 $12억 TL 발행
 * 2024년 5th Circuit "거래 무효" 판결 — 신디케이티드론 역사의 분수령
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "serta-simmons-uptier",
  title: "세르타 시몬스는 어떻게 자신의 채권자들을 후순위로 밀어냈나",
  subtitle: "$12억 업티어 익스체인지 — Lender-on-Lender Violence의 교과서이자 법원이 무효 판결한 거래",
  category: "ma",
  industry: "소비재 / 침구 제조",
  country: "미국",
  announcedAt: "2020-06-08",
  closedAt: "2020-06-22",
  announcedDisplay: "2020년 6월",
  closedDisplay: "2020년 6월",
  readingMinutes: 13,
  tags: [
    "세르타시몬스", "Serta Simmons", "업티어", "Uptier", "LME",
    "Lender-on-Lender Violence", "LoLV", "TLB", "레버리지드론", "LevFin",
    "코비넌트", "5th Circuit", "Chapter 11", "파산", "아폴로", "Angelo Gordon",
  ],
  excerpt:
    "2020년 6월, Serta Simmons는 동의한 채권자들에게 수퍼-선순위 $12억 TL을 발행하고 기존 TLB 채권자 ~$9억을 후순위로 밀어냈다. COVID-19로 촉발된 이 'Lender-on-Lender Violence' 거래는 Highland Capital 등 비동의 채권자들의 소송으로 이어졌고, 2023년 Chapter 11 이후 2024년 5th Circuit이 거래를 '무효'로 판결했다. 현대 레버리지드론 코비넌트의 허점이 낳은 역대 최대 법정 공방.",

  acquirer: { initials: "LoLV", bg: "bg-red-900", label: "과반수 채권자단 (Apollo, Angelo Gordon, Goldman BDC)" },
  target:   { initials: "SSB",  bg: "bg-rose-700", label: "Serta Simmons Bedding, LLC" },

  background: [
    "Serta Simmons Bedding는 미국 최대 침구 브랜드(Serta, Beautyrest 등)로, 2012년 Ares Management와 Ontario Teachers' Pension Plan이 약 $30억에 LBO 인수했다. 2016년 추가 LBO(Advent International 참여)로 부채가 $18억+으로 늘어났다.",
    "2020년 3월 COVID-19 팬데믹으로 가구·소비재 소매 채널이 급격히 위축됐다. Serta Simmons의 EBITDA는 전년 대비 30%+ 감소할 것으로 전망됐고, 회사는 현금 확보와 부채 경감을 위한 자본 구조 재편을 모색했다.",
    "레버리지드론 신용 협정에는 '과반수(Required Lenders)' 동의로 특정 조항을 개정할 수 있다는 조항이 있었다. Serta Simmons는 기존 채권자 중 과반수를 설득해, 신규 수퍼-선순위 TL을 발행하고 이들에게 기존 TLB를 할인 매입(exchange)해주는 방식으로 자본 구조를 재편했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$12억 (수퍼-선순위 TL)",
    acquirerName: "과반수 채권자단 (Apollo, Angelo Gordon, Goldman Sachs BDC 등)",
    targetName: "Serta Simmons Bedding, LLC",
    announcedDisplay: "2020년 6월 8일",
    closedDisplay: "2020년 6월 22일",
    country: "미국 (비상장)",
  },

  executiveSummary: [
    "COVID-19로 재무 악화 → 과반수 채권자 동의로 수퍼-선순위 TL $12억 발행.",
    "비동의 채권자 ~$9억(Highland Capital, Gamut Capital 등) → 후순위로 밀려남(primed).",
    "비동의 채권자들 즉각 소송: '신용 협정 위반(breach of contract)' 주장.",
    "2023년 1월 Chapter 11 파산 신청 — 총 부채 ~$18.4억.",
    "2024년 6월 5th Circuit: 업티어 거래 무효(invalid) 판결 — 신디케이티드론 시장 충격.",
  ],

  industryOverview: {
    body: "미국 침구 시장은 B2C(직접 소비자)와 B2B(호텔·병원)로 나뉘며, 온라인 매트리스 스타트업(Casper, Purple 등)의 부상으로 2015년 이후 경쟁이 심화됐다. Serta Simmons는 전통적인 소매 채널(가구점, 백화점) 의존도가 높아 COVID-19의 오프라인 봉쇄 충격을 직격으로 받았다.",
    metrics: [
      { label: "미국 침구 시장 규모",  value: "~$150억",  sub: "2020년 기준" },
      { label: "Serta Simmons 점유율", value: "~40%",     sub: "미국 프리미엄 침구 시장" },
      { label: "COVID-19 EBITDA 감소", value: "30%+",    sub: "2020년 추정" },
      { label: "업티어 TL 금리",       value: "L+750bps", sub: "PIK 옵션 포함" },
    ],
    players: [
      { name: "Serta Simmons",     role: "미국 침구 1위, LBO 이후 과도한 레버리지" },
      { name: "Sealy (Tempur-Pedic)", role: "프리미엄 침구 시장 경쟁자" },
      { name: "Casper, Purple",    role: "온라인 직판 신흥 경쟁자" },
      { name: "Apollo, Angelo Gordon", role: "업티어 참여 과반수 채권자" },
    ],
  },

  companyOverview: {
    targetName: "Serta Simmons Bedding, LLC",
    body: "세르타 인터내셔널(1931년 설립)과 시몬스 베딩(1870년 설립)이 2012년 Ares·Ontario Teachers'의 LBO로 합병해 탄생한 미국 최대 침구 그룹. Serta, Beautyrest(시몬스), National Bedding(유나이티드 소테스) 등 주요 브랜드를 보유. 전통적인 소매 채널 의존으로 온라인 직판 트렌드에 취약한 구조.",
    metrics: [
      { label: "LBO EV (2016)",      value: "~$30억",   sub: "Advent International 참여 LBO" },
      { label: "총 부채 (2020 기준)", value: "~$18.4억", sub: "업티어 전" },
      { label: "업티어 TL 규모",     value: "$12억",    sub: "수퍼-선순위" },
      { label: "비동의 채권자 피해",  value: "~$9억",    sub: "후순위로 밀린 TLB" },
    ],
    financials: [
      {
        year: "FY2018",
        revenue: 3100,
        cogs: 1950,
        grossProfit: 1150,
        sga: 780,
        operatingIncome: 370,
        ebitda: 420,
      },
      {
        year: "FY2019",
        revenue: 3050,
        cogs: 1920,
        grossProfit: 1130,
        sga: 760,
        operatingIncome: 370,
        ebitda: 415,
      },
      {
        year: "FY2020E",
        revenue: 2700,
        cogs: 1730,
        grossProfit: 970,
        sga: 700,
        operatingIncome: 270,
        ebitda: 290,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2020E는 COVID-19 충격 반영 추정치. EBITDA 급감으로 레버리지 배수 급등 → 업티어 결정의 배경.",
  },

  dealStructure: {
    body: "신용 협정상 '과반수 채권자(Required Lenders)' 동의 조항을 활용해 수퍼-선순위 Term Loan $12억 발행. 참여 채권자들은 기존 TLB를 할인된 가격에 수퍼-선순위 TL로 교환(exchange). 비동의 채권자들의 기존 TLB는 후순위 '구 TLB'로 강등.",
    preOwnership: {
      nodes: [
        { id: "ares",     label: "Ares + Ontario", sub: "스폰서 (2012 LBO)",    type: "fund"   },
        { id: "advent",   label: "Advent Int'l",   sub: "공동 스폰서 (2016)",   type: "fund"   },
        { id: "tlb",      label: "TLB 대주단",     sub: "~$18억 선순위 TLB",   type: "entity" },
        { id: "serta",    label: "Serta Simmons",  sub: "미국 침구 1위",        type: "target" },
      ],
      edges: [
        { from: "ares",   to: "serta", label: "에쿼티" },
        { from: "advent", to: "serta", label: "에쿼티" },
        { from: "tlb",    to: "serta", label: "TLB ~$18억" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "supra",    label: "수퍼-선순위 TL",  sub: "$12억 (Apollo 등)",    type: "entity" },
        { id: "old-tlb",  label: "구 TLB (비동의)", sub: "~$9억 후순위 강등",    type: "entity" },
        { id: "serta-p",  label: "Serta Simmons",   sub: "과도한 부채 부담",     type: "target" },
      ],
      edges: [
        { from: "supra",   to: "serta-p", label: "1순위" },
        { from: "old-tlb", to: "serta-p", label: "후순위 (primed)" },
      ],
    },
    keyTerms: [
      { label: "업티어 구조",           value: "수퍼-선순위 TL $12억 신규 발행", accent: true  },
      { label: "기존 TLB 교환 금리",    value: "할인 매입 (face value 미만)",    accent: false },
      { label: "비동의 채권자 피해",     value: "~$9억 TLB 후순위 강등",         accent: true  },
      { label: "근거 조항",             value: "Open Market Purchase + Required Lenders", accent: true },
      { label: "5th Circuit 판결",      value: "2024년 6월 — 거래 무효",         accent: true  },
    ],
  },

  advisors: {
    body: "업티어 거래는 채무자(Serta Simmons)와 참여 채권자단이 공동으로 설계했다. 비동의 채권자들은 별도 자문단을 구성해 소송을 제기했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "참여 채권자단 (Apollo, Angelo Gordon, Goldman BDC)",
        initials: "LoLV",
        bg: "bg-red-900",
        advisors: [
          { firm: "Latham & Watkins", role: "참여 채권자단 법률자문", roleType: "legal", note: "업티어 구조 설계" },
          { firm: "Houlihan Lokey",   role: "재무자문",               roleType: "financial", note: "부채 재구조화 자문" },
        ],
      },
      {
        side: "target",
        sideLabel: "비동의 채권자 (Highland Capital, Gamut Capital)",
        initials: "HCP",
        bg: "bg-gray-700",
        advisors: [
          { firm: "Gibson Dunn",       role: "비동의 채권자 법률자문", roleType: "legal", note: "Pro Rata 위반 소송" },
          { firm: "Milbank LLP",       role: "채권자 위원회 자문",    roleType: "legal", note: "Chapter 11 절차" },
        ],
      },
    ],
  },

  valuation: {
    body: "업티어 거래는 전통적 M&A 가치평가보다는 채무 교환 비율이 핵심이다. 참여 채권자들은 기존 TLB를 face value 미만(약 70-80센트)에 수퍼-선순위 TL로 교환해 실질적 디스카운트 수익을 얻었다.",
    rows: [
      { item: "수퍼-선순위 TL 규모",    val: "$12억",    note: "신규 발행 (1순위)",                   accent: true  },
      { item: "교환 비율 (추정)",        val: "~80센트",  note: "기존 TLB $1 → 수퍼-선순위 TL $0.80", accent: false },
      { item: "비동의 TLB 피해",         val: "~$9억",   note: "후순위로 밀려 실질 회수율 대폭 감소", accent: true  },
      { item: "수퍼-선순위 TL 금리",     val: "L+750bp", note: "PIK 옵션 포함",                       accent: false },
      { item: "Chapter 11 회수율 (수퍼)", val: "~100%",  note: "새 회사 지분 수령",                   accent: false },
    ],
    disclaimer: "업티어 교환 비율은 공개 정보 기반 추정치. 실제 계약 조건은 비공개.",
  },

  rationale: {
    buyer: {
      title: "참여 채권자단 입장",
      initials: "APO",
      bg: "bg-red-900",
      points: [
        "기존 TLB를 할인된 가격에 수퍼-선순위로 교환 → 후순위 채권자 대비 우월한 회수율 확보",
        "신용 협정 'Open Market Purchase' 조항이 법적 근거라는 판단",
        "과반수 동의로 신용 협정 개정 가능 → 절차적 합법성 주장",
        "COVID-19 충격으로 회사 재무가 악화되는 상황에서 선제적 포지셔닝 목적",
      ],
    },
    seller: {
      title: "비동의 채권자 (Highland Capital 등) 입장",
      initials: "HCP",
      bg: "bg-gray-700",
      points: [
        "Pro Rata 원칙 위반 — 채권자 전체를 동등하게 대우해야 할 의무",
        "'과반수' 동의는 일반 조항 개정에만 허용 — 담보 순위 변경은 전원 동의 사항",
        "신용 협정의 'Sacred Rights' 조항: 개별 채권자 동의 없이 선순위 불가",
        "2024년 5th Circuit이 이 주장을 인용하여 거래를 '무효' 판결",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024년 (5th Circuit 판결 기준)",
    body: "Serta Simmons 업티어 거래는 2020년 코로나 위기 속 Lender-on-Lender Violence의 상징이 됐다. 단기적으로 유동성을 확보했지만, 법적 불확실성이 모든 당사자에게 엄청난 비용을 초래했고, 결국 2023년 Chapter 11과 2024년 5th Circuit의 무효 판결로 업티어의 법적 근거 자체가 흔들렸다.",
    overallVerdict: "법적 실패 — 5th Circuit 무효 판결, 시장 전체에 Serta Blocker 표준화",
    positives: [
      "단기적 유동성 확보로 2020-2022년 운영 지속",
      "참여 채권자들은 Chapter 11 절차에서 새 회사 지분을 수령해 상대적으로 높은 회수율 기록",
    ],
    risks: [
      "5th Circuit 판결: 업티어 거래 전체 무효 → 참여 채권자들의 수퍼-선순위 지위 소멸",
      "비동의 채권자들 연간 수억 달러 규모의 법적 비용 부담",
      "Serta Blocker 표준화: 이후 발행 신용 협정 전반에 업티어 방어 조항 삽입",
      "LME 전략으로 유동성 확보해도 법적 불확실성이 신규 자금 조달을 봉쇄 가능",
    ],
    editorNote: "Serta Simmons 케이스의 핵심 교훈: 레버리지드론 신용 협정의 허점을 파고드는 LME는 단기 유동성을 만들지만, 채권자 관계를 영구적으로 훼손하고 법적 리스크를 누적시킨다. 5th Circuit 판결 이후 시장은 'Serta Blocker' 조항을 표준화했다.",
  },

  tombstone: {
    acquirerInitials: "SSB",
    acquirerBg: "bg-red-900",
    targetInitials: "TLB",
    targetBg: "bg-rose-700",
    acquirerName: "Serta Simmons Bedding",
    targetName: "업티어 익스체인지",
    dealTitle: "Serta Simmons 업티어",
    dealSize: "$12억",
    dealSizeUSD: "$1.2bn",
    evEbitda: "N/A",
    closeDate: "2020년 6월",
  },

  sources: [
    { id: 1, text: "Serta Simmons (2020). Credit Agreement Amendment — Super-Priority Term Loan. June 2020." },
    { id: 2, text: "U.S. Bankruptcy Court S.D.N.Y. (2023). In re Serta Simmons Bedding, LLC. Chapter 11, January 2023." },
    { id: 3, text: "5th U.S. Circuit Court of Appeals (2024). In re Serta Simmons Bedding — Uptier Transaction Invalid. June 2024." },
    { id: 4, text: "Bloomberg Law (2020). Serta Simmons Uptier Exchange — Lender-on-Lender Violence Spreads. July 2020." },
    { id: 5, text: "Moody's (2020). Serta Simmons — Distressed Exchange Rating Action. June 2020." },
    { id: 6, text: "Wall Street Journal (2021). Serta Simmons Lawsuits: Lenders Fight Over Who Gets Paid. 2021." },
    { id: 7, text: "Harvard Law School Bankruptcy Roundtable (2024). 5th Circuit's Serta Decision: Implications for LME Transactions." },
  ],

  seo: {
    title: "Serta Simmons 업티어 — Lender-on-Lender Violence & 5th Circuit 무효 판결",
    description: "2020년 Serta Simmons 업티어 익스체인지 완전 해부. $12억 수퍼-선순위 TL 발행, 비동의 채권자 $9억 후순위 강등, 2024년 5th Circuit 거래 무효 판결까지 LevFin 코비넌트 분석.",
    keywords: [
      "Serta Simmons", "업티어", "Uptier Exchange", "Lender-on-Lender Violence",
      "LoLV", "LME", "Pro Rata", "Serta Blocker", "5th Circuit", "Chapter 11",
      "레버리지드론", "LevFin", "신디케이티드론 코비넌트",
    ],
  },

  concepts: [
    {
      term: "업티어 익스체인지 (Uptier Exchange)",
      href: "/market-101/levfin-covenants",
      description: "과반수 채권자 동의로 신규 수퍼-선순위 채권을 발행하고, 참여 채권자들의 기존 채권을 교환하여 비동의 채권자를 후순위로 밀어내는 거래. 'Lender-on-Lender Violence'의 대표 형태.",
    },
    {
      term: "Pro Rata 원칙",
      href: "/market-101/levfin-covenants",
      description: "신디케이티드론에서 원리금 수취, 담보 설정 변경 등 핵심 권리를 채권자 전체에 비례하여 동등하게 적용해야 한다는 원칙. Serta 사건의 핵심 쟁점.",
    },
    {
      term: "Required Lenders (과반수 채권자)",
      href: "/market-101/levfin-covenants",
      description: "신용 협정에서 일반적 조항 개정에 동의를 요하는 최소 채권자 지분 비율(통상 50.1%). Serta 사건에서 이 조항으로 수퍼-선순위 발행이 가능한지가 쟁점이었다.",
    },
    {
      term: "Sacred Rights (전원 동의 조항)",
      href: "/market-101/levfin-covenants",
      description: "만기 연장, 금리 인하, 선순위 변경 등 개별 채권자에게 불이익한 조항 변경은 과반수가 아닌 전원(100%) 동의가 필요하다는 신용 협정 조항.",
    },
    {
      term: "Serta Blocker",
      href: "/market-101/levfin-covenants",
      description: "5th Circuit 판결 이후 신규 레버리지드론 신용 협정에 표준으로 삽입되는 조항. 'Open Market Purchase' 메커니즘을 통한 업티어를 명시적으로 금지.",
    },
  ],

  faq: [
    {
      q: "Serta Simmons 업티어 거래가 왜 'Lender-on-Lender Violence'라 불리나요?",
      a: "통상 채권자와 채무자 간의 갈등과 달리, Serta 업티어는 동일 채무자의 채권자들 사이에서 과반수가 소수를 희생시키는 구조입니다. 참여 채권자(Apollo, Angelo Gordon)들이 비참여 채권자(Highland Capital)의 선순위 지위를 '강탈(violent)'했다는 의미에서 이 용어가 정착했습니다.",
    },
    {
      q: "5th Circuit이 업티어 거래를 무효로 판결한 근거는?",
      a: "제5 순회 항소법원은 수퍼-선순위 TL 발행이 신용 협정의 Pro Rata 조항을 위반한다고 판시했습니다. 과반수 동의로 일반 조항을 개정할 수 있더라도, 특정 채권자만 불이익한 방식으로 담보 순위를 변경하는 것은 '전원 동의(Sacred Rights)'를 요하는 사항이라는 판단입니다.",
    },
    {
      q: "Serta 판결이 레버리지드론 시장에 미친 영향은?",
      a: "2024년 판결 이후 신규 발행 레버리지드론 신용 협정에 'Serta Blocker'라 불리는 조항이 표준으로 삽입됐습니다. 이 조항은 'Open Market Purchase' 메커니즘을 이용한 업티어를 명시적으로 금지하며, LME 전략의 법적 공간을 크게 축소시켰습니다.",
    },
    {
      q: "업티어 거래가 무효가 됐는데 참여 채권자들은 실제로 손해를 봤나요?",
      a: "5th Circuit 판결이 참여 채권자들의 수퍼-선순위 지위를 소급하여 무효화하지는 않았습니다. 다만, 향후 유사 거래의 선례가 파괴됐고, Chapter 11 절차에서 참여 채권자들의 협상력이 약화됐을 수 있습니다. 실질적 경제적 결과는 파산 절차의 최종 합의에 따라 달라집니다.",
    },
  ],

  // ── LevFin 관점 오버레이 ─────────────────────────────────────
  levfinOverview: {
    angle: "Lender-on-Lender Violence — 채권자끼리 선순위를 빼앗는 업티어의 해부",
    body: "Serta Simmons 업티어는 레버리지드론 신용 협정의 '과반수 동의' 허점이 어떻게 채권자 간 갈등을 촉발하는지 보여주는 전형적 케이스다. 참여 채권자들은 수퍼-선순위를 확보했지만, 비동의 채권자들은 법원을 통해 거래의 무효를 이끌어냈다. 이 거래가 만든 'Serta Blocker' 조항은 이후 모든 신규 레버리지드론에 표준으로 삽입됐다.",
    tranches: [
      {
        name: "수퍼-선순위 TL (신규)",
        amountDisplay: "$1.2B",
        rate: "SOFR+750bps (PIK 옵션)",
        maturity: "5년",
        seniority: "senior-secured",
        pct: 39,
        color: "bg-emerald-500",
      },
      {
        name: "기존 TLB (비동의, 후순위 강등)",
        amountDisplay: "~$0.9B",
        rate: "SOFR+350bps",
        maturity: "잔여 기간",
        seniority: "subordinated",
        pct: 29,
        color: "bg-red-500",
      },
      {
        name: "2L 채권",
        amountDisplay: "~$0.5B",
        rate: "Fixed 8.0%",
        maturity: "8년",
        seniority: "subordinated",
        pct: 16,
        color: "bg-red-700",
      },
      {
        name: "에쿼티 (스폰서)",
        amountDisplay: "N/A",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 16,
        color: "bg-gray-500",
      },
    ],
    metrics: [
      { label: "업티어 TL 규모",    value: "$1.2B",      sub: "수퍼-선순위",          isAlert: false },
      { label: "비동의 채권자 피해", value: "~$0.9B",     sub: "후순위 강등",          isAlert: true  },
      { label: "5th Circuit 판결",  value: "무효",        sub: "2024년 6월",           isAlert: true  },
      { label: "Chapter 11",        value: "2023년 1월",  sub: "총 부채 ~$18.4억",     isAlert: true  },
    ],
    lessons: [
      {
        icon: "⚔️",
        title: "Lender-on-Lender Violence — Pro Rata의 붕괴",
        body: "신디케이티드론의 핵심 원칙인 Pro Rata(채권자 간 평등 처우)가 업티어로 무너지면, 채권자들은 기존 대출 계약을 신뢰할 수 없게 된다. Serta 이후 모든 신규 협정에 'Serta Blocker'가 삽입된 것은 시장이 이 위험을 인식했다는 증거다.",
      },
      {
        icon: "⚖️",
        title: "과반수 동의 vs 전원 동의 — 경계선의 중요성",
        body: "신용 협정에서 '과반수 동의'로 변경 가능한 사항과 '전원 동의'를 요하는 Sacred Rights의 경계가 모호하면 법적 분쟁이 불가피하다. 5th Circuit 판결은 '담보 순위 변경'은 전원 동의 사항이라는 명확한 선례를 남겼다.",
      },
      {
        icon: "💡",
        title: "단기 유동성 vs 장기 신뢰 — LME의 딜레마",
        body: "업티어는 단기적으로 유동성을 확보하지만, 채권자 관계를 훼손하고 법적 불확실성을 키운다. Serta Simmons는 업티어로 2년을 버텼지만, 2023년 결국 Chapter 11을 피하지 못했다. LME의 진짜 비용은 법적 리스크와 향후 자금 조달 비용의 급등이다.",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-covenants",
        chapterNum: "Ch.3",
        title: "코비넌트 & LME",
        whyRelevant: "Pro Rata 조항, Serta Blocker, Required Lenders — 업티어가 만든 신규 표준 코비넌트 해부",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "부실 대출 & 구조조정",
        whyRelevant: "Chapter 11 메커니즘, DIP 파이낸싱, 채권자 소송 — 업티어 이후 파산 절차",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "LevFin 케이스 스터디",
        whyRelevant: "Serta Simmons를 다른 LoLV 케이스(Envision, TriMark)와 비교 분석",
      },
    ],
  },
};

export default deal;
