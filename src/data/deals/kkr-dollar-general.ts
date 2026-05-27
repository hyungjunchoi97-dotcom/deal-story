/**
 * KKR × Dollar General LBO (2007–2013)
 * 불황형 소매의 역설 — 금융위기가 오히려 EBITDA를 키운 역대 최고 수익률 LBO
 * Entry: $6.9B (9.2× EV/EBITDA, 5.5× Debt/EBITDA) → 2009 IPO → IRR 70%+, MOIC ~4-5×
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kkr-dollar-general",
  title: "KKR은 어떻게 달러스토어 하나로 70% IRR을 달성했나",
  subtitle: "$69억 LBO → 금융위기가 실적을 끌어올린 역대급 역발상 투자",
  category: "ma",
  industry: "소매 / 할인 스토어",
  country: "미국",
  announcedAt: "2007-03-12",
  closedAt: "2007-07-07",
  announcedDisplay: "2007년 3월",
  closedDisplay: "2007년 7월",
  readingMinutes: 11,
  tags: [
    "KKR", "Dollar General", "달러제너럴", "LBO", "달러스토어",
    "경기방어주", "불황형소매", "Recession-Proof", "레버리지드론",
    "HY채권", "LevFin", "PE", "사모펀드", "IPO", "Exit", "IRR",
  ],
  excerpt:
    "2007년 7월 KKR이 Dollar General을 $69억에 LBO 인수했다. 1년 후 글로벌 금융위기가 터졌지만 Dollar General의 EBITDA는 오히려 35% 성장했다. '소비자가 가난해질수록 달러스토어는 번성한다'는 역설이 현실이 됐다. 2009년 IPO로 일부 엑싯 후 2013년 완전 회수 — IRR 70%+, MOIC ~4-5×. PE 역사상 가장 성공한 LBO 중 하나.",

  acquirer: { initials: "KKR", bg: "bg-emerald-700", label: "KKR" },
  target:   { initials: "DG",  bg: "bg-yellow-500", label: "Dollar General Corporation" },

  background: [
    "Dollar General은 테네시 주 굿레츠빌(Goodlettsville)에 본사를 둔 미국 최대 달러스토어 체인이다. 2007년 당시 매장 수 8,000+, 대부분 저소득 농촌 지역에 위치. 핵심 고객층은 연소득 $35,000 이하 가구로, 할인 잡화(식품, 생활용품, 의류)를 취급했다.",
    "KKR은 Dollar General의 '불황 면역성(recession immunity)'에 주목했다. 달러스토어의 특성상 경기 침체 시 고소득층 쇼핑객이 월마트에서 달러스토어로 내려오고, 기존 저소득층 고객은 이탈하지 않는다. 더욱이 Dollar General은 당시 오퍼레이션 효율화(shrink 감소, 재고 최적화, SCM 혁신) 여지가 컸다.",
    "2006년 Dollar General의 재무 이슈(회계 재조정, CEO 교체)가 주가를 억눌러 인수 가격이 합리적이었다. KKR은 $45억 레버리지드론·HY채권과 $24억 에쿼티를 활용해 $69억 딜을 클로징했다. 에쿼티 비율 ~35%로 전형적 LBO 대비 보수적 구조.",
  ],

  dealSummary: {
    dealValueDisplay: "$69억",
    acquirerName: "KKR",
    targetName: "Dollar General Corporation",
    announcedDisplay: "2007년 3월 12일",
    closedDisplay: "2007년 7월 7일",
    country: "미국 (NYSE: DG)",
  },

  executiveSummary: [
    "KKR이 Dollar General을 $69억에 LBO 인수 — 에쿼티 $24억, TLB+HY채권 $45억.",
    "Entry Debt/EBITDA 5.5× → 1년 후 금융위기로 EBITDA가 35% 성장 → 실질 레버리지 급감.",
    "할인 소매의 역설: 경기 침체 시 '다운트레이딩(down-trading)' 수혜 — 고소득층도 달러스토어로 이동.",
    "2009년 11월 IPO — 주식시장 회복과 맞물려 역대 최고 평가가치에 재상장.",
    "2013년 완전 회수 완료 — IRR ~70%, MOIC ~4-5×, 투자 수익 $40억+.",
  ],

  // ── 산업 개요 ──────────────────────────────────────────────────
  industryOverview: {
    body: "미국 달러스토어 시장은 Dollar General, Dollar Tree, Family Dollar 3강이 지배하는 과점 구조다. 핵심 경쟁력은 저소득·농촌 지역에 집중된 입지와 $1–$10 미만 저가 생필품 중심의 품목 구성이다. 경기 침체 시 고소득층 소비자들이 월마트→달러스토어로 '다운트레이딩(down-trading)'하는 반주기적(counter-cyclical) 특성이 KKR이 주목한 핵심 논리였다.",
    metrics: [
      { label: "미국 달러스토어 시장 규모", value: "~$300억", sub: "2007년 기준 3사 합산 매출" },
      { label: "Dollar General 시장 점유율", value: "~40%",   sub: "달러스토어 세그먼트 내" },
      { label: "경기침체 SSS 성장률",        value: "+10%+",  sub: "2008 금융위기 동기 매출" },
      { label: "Entry EV/EBITDA",            value: "9.2×",   sub: "2007년 인수 가격 기준" },
    ],
    players: [
      { name: "Dollar General (KKR)",  role: "미국 달러스토어 1위, LBO 인수 대상" },
      { name: "Dollar Tree",           role: "달러스토어 2위, 고정 $1 가격 모델" },
      { name: "Family Dollar",         role: "달러스토어 3위, 이후 Dollar Tree에 인수됨" },
      { name: "Walmart",               role: "할인 대형마트, 다운트레이딩 연쇄의 출발점" },
    ],
  },

  // ── 회사 개요 ──────────────────────────────────────────────────
  companyOverview: {
    targetName: "Dollar General Corporation",
    body: "1939년 테네시 주에서 설립된 Dollar General은 2007년 당시 8,229개 매장을 운영하는 미국 최대 달러스토어 체인이었다. 핵심 고객층은 연소득 $35,000 이하 저소득 가구로, 식품·청소용품·의류·건강용품 등 생필품을 $10 미만에 판매했다. 2006년 회계 재조정(restatement)으로 주가가 억눌린 상황이 KKR의 인수 기회를 창출했다. 인수 직후 Home Depot 출신 Rick Dreiling을 CEO로 영입해 대규모 오퍼레이션 혁신을 추진했다.",
    metrics: [
      { label: "LBO 딜 가치",      value: "$6.9B",     sub: "2007년 7월 클로징" },
      { label: "매장 수 (2007)",   value: "8,229개",   sub: "대부분 농촌·저소득 지역" },
      { label: "IPO 가치 (2009)", value: "$7B+",      sub: "주당 $21 공모가 기준" },
      { label: "총 회수액",        value: "$40억+",    sub: "2013년 완전 회수 기준" },
    ],
    financials: [
      {
        year: "FY2006",
        revenue: 9170,
        cogs: 6480,
        grossProfit: 2690,
        sga: 1985,
        operatingIncome: 705,
        ebitda: 790,
      },
      {
        year: "FY2007",
        revenue: 9495,
        cogs: 6680,
        grossProfit: 2815,
        sga: 2060,
        operatingIncome: 755,
        ebitda: 845,
      },
      {
        year: "FY2008",
        revenue: 10458,
        cogs: 7285,
        grossProfit: 3173,
        sga: 2245,
        operatingIncome: 928,
        ebitda: 1025,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2008은 금융위기에도 불구하고 다운트레이딩 수혜로 EBITDA +22% 성장. 이후 FY2009까지 누적 +35% 달성. 레버리지(Debt/EBITDA)가 5.5×→4.0× 수준으로 자연 감소.",
  },

  // ── 딜 구조 ────────────────────────────────────────────────────
  dealStructure: {
    body: "TLB $38억 + HY Senior Notes $7억 + 에쿼티 $24억. 에쿼티 비율 ~35%로 당시 PE 평균(20-25%) 대비 보수적 구조. CEO 교체(Rick Dreiling 영입) + 오퍼레이션 혁신(매장 리뉴얼, 식품 카테고리 강화, SCM 최적화)이 가치 창출의 핵심 레버였다.",
    preOwnership: {
      nodes: [
        { id: "public",  label: "공개 시장 주주",     sub: "주가 억눌린 상황 (2006 회계 재조정)", type: "entity" },
        { id: "dg-pre",  label: "Dollar General",     sub: "8,229개 매장, 매출 $91억",            type: "target" },
      ],
      edges: [
        { from: "public", to: "dg-pre", label: "상장 주식 100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "kkr",    label: "KKR",              sub: "에쿼티 $24억 (~35%)",     type: "fund"   },
        { id: "tlb",    label: "TLB 대주단",        sub: "$38억 (LIBOR+275bps)",   type: "entity" },
        { id: "hy",     label: "HY 채권자",         sub: "$7억 (10.625% 고정)",    type: "entity" },
        { id: "dg",     label: "Dollar General",    sub: "비상장 (PE 소유)",        type: "target" },
      ],
      edges: [
        { from: "kkr", to: "dg",  label: "에쿼티 35%" },
        { from: "tlb", to: "dg",  label: "TLB $38억 (1L 담보)" },
        { from: "hy",  to: "dg",  label: "HY Notes $7억 (무담보)" },
      ],
    },
    keyTerms: [
      { label: "딜 가치",            value: "$6.9B (EV/EBITDA 9.2×)",          accent: true  },
      { label: "TLB 금리",           value: "LIBOR+275bps (변동)",              accent: false },
      { label: "HY Senior Notes",    value: "$700M, 10.625% 고정, 무담보",      accent: false },
      { label: "에쿼티 기여",        value: "$2.4B (~35%) — 보수적 구조",       accent: true  },
      { label: "Entry Debt/EBITDA",  value: "5.5× (시장 평균 7-8× 대비 낮음)", accent: true  },
    ],
  },

  // ── 자문단 ─────────────────────────────────────────────────────
  advisors: {
    body: "KKR은 PE 업계 최고 자문단을 구성했다. 자금 조달(Goldman Sachs, Citigroup)과 법률(Simpson Thacher) 양쪽 모두 최상위급이었다. Target 측은 Goldman Sachs(매각 자문)와 Debevoise & Plimpton(법률)이 담당했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "KKR (인수자)",
        initials: "KKR",
        bg: "bg-emerald-700",
        advisors: [
          { firm: "Simpson Thacher & Bartlett", role: "법률 자문",           roleType: "legal",     note: "LBO 구조 설계" },
          { firm: "Goldman Sachs",              role: "자금 조달 / 어레인저", roleType: "financial", note: "TLB·HY 언더라이팅" },
          { firm: "Citigroup",                  role: "공동 어레인저",        roleType: "financial", note: "신디케이션 공동 주관" },
        ],
      },
      {
        side: "target",
        sideLabel: "Dollar General (매각 측)",
        initials: "DG",
        bg: "bg-yellow-500",
        advisors: [
          { firm: "Goldman Sachs (매각 자문)", role: "재무 자문",  roleType: "financial", note: "매각 프로세스 관리" },
          { firm: "Debevoise & Plimpton",      role: "법률 자문", roleType: "legal",     note: "이사회 fiduciary duty 자문" },
        ],
      },
    ],
  },

  // ── 가치평가 ───────────────────────────────────────────────────
  valuation: {
    body: "KKR은 Dollar General을 EV $6.9B, EV/EBITDA 9.2×(FY2006 기준)에 인수했다. 당시 소매 LBO 평균(12-14×)보다 낮은 배수였으나, 오퍼레이션 개선과 카운터-사이클리컬 특성을 감안하면 합리적이었다. 2009년 IPO 당시 EV ~$8B+, EV/EBITDA 11×+로 재평가받았다.",
    rows: [
      { item: "Entry EV",              val: "$6.9B",   note: "2007년 7월 기준",                       accent: true  },
      { item: "Entry EV/EBITDA",       val: "9.2×",    note: "FY2006 EBITDA $790M 기준",              accent: false },
      { item: "Entry Debt/EBITDA",     val: "5.5×",    note: "$4.5B 총 부채 / $790M EBITDA",          accent: true  },
      { item: "IPO 가치 (2009)",       val: "$7B+",    note: "주당 $21 공모가 기준 시가총액",          accent: true  },
      { item: "최종 엑싯 수익",        val: "$40억+",  note: "총 회수액 (2013년 완전 엑싯 기준)",      accent: true  },
    ],
    disclaimer: "재무 수치는 공개 정보 및 업계 추정치 기반. IRR·MOIC는 KKR 공식 발표 기준이 아닌 시장 추정치.",
  },

  // ── 인수 논리 ──────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "KKR 투자 논리",
      initials: "KKR",
      bg: "bg-emerald-700",
      points: [
        "반주기적 비즈니스: 경기 침체 시 '다운트레이딩' 수혜 — EBITDA가 경기와 역행",
        "오퍼레이션 알파: 재고 shrink 감소·SCM 최적화·식품 카테고리 확장으로 EBITDA 마진 100bps+ 개선 여지",
        "보수적 레버리지(5.5×): 금리 리스크 헤지 + 불확실한 2007년 크레딧 시장 고려",
        "CEO 교체: Home Depot의 공급망 혁신 경험을 보유한 Rick Dreiling 영입",
        "낮은 진입 가격: 2006년 회계 재조정으로 억눌린 주가 → 섹터 평균 대비 20%+ 디스카운트",
      ],
    },
    seller: {
      title: "Dollar General 이사회 수용 논리",
      initials: "DG",
      bg: "bg-yellow-500",
      points: [
        "회계 재조정 여파로 공개 시장 평가 부진 — PE 프리미엄(+25%)이 단기 주주 가치 극대화",
        "CEO 부재 상황에서 PE 스폰서의 오퍼레이션 전문성 활용 기대",
        "비상장으로 전환해 단기 주주 압력 없이 구조적 변화 추진 가능",
        "Dreiling CEO 카드: 이사회가 직접 PE 주주와 함께 선정에 참여",
      ],
    },
  },

  // ── 딜 이후 평가 ───────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2013년 (완전 회수 기준)",
    body: "KKR × Dollar General은 PE 역사상 가장 성공한 LBO 사례 중 하나로 평가받는다. 금융위기라는 최악의 시장 환경이 오히려 투자 논거를 강화한 희귀한 케이스다. 오퍼레이션 혁신(Dreiling CEO), 반주기적 비즈니스 특성, 보수적 자본 구조, 완벽한 IPO 타이밍이 조화롭게 맞물렸다.",
    overallVerdict: "역대급 성공 — IRR ~70%, MOIC ~4-5×, PE 역사상 최고 수익 LBO 중 하나",
    positives: [
      "금융위기(2008)가 리스크가 아닌 기회로 작용 — EBITDA +35%, 레버리지 자연 감소",
      "2009년 IPO 타이밍: 주식시장 저점 직후, Dollar General 성장 스토리가 가장 선명할 때 상장",
      "Dreiling CEO 체제에서 매장 수 8,229→11,000+, EBITDA 마진 대폭 개선",
      "Exit 다변화: IPO + 복수 블록딜로 리스크 분산하며 최적 가격 실현",
    ],
    risks: [
      "高금리 HY 채권(10.625%)은 장기간 유지 시 현금 흐름 부담 — 실적 성장으로 조기 상환",
      "IPO 후에도 대량 지분 보유 → 주가 하락 시 블록딜 가격 희석 리스크",
      "Dollar General의 반주기적 특성은 경기 회복 시 성장 둔화로 역전될 수 있음",
    ],
    editorNote: "Dollar General 케이스의 핵심 교훈: 최고의 LBO는 단순히 '싸게 사서 비싸게 파는' 것이 아니다. KKR은 불황에 강한 비즈니스를 선별하고, 보수적 레버리지와 오퍼레이션 혁신을 결합해 시장 상황에 관계없이 가치를 창출했다. 이것이 진짜 'PE Alpha'다.",
  },

  // ── 툼스톤 ─────────────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "KKR",
    acquirerBg: "bg-emerald-700",
    targetInitials: "DG",
    targetBg: "bg-yellow-500",
    acquirerName: "KKR",
    targetName: "Dollar General Corporation",
    dealTitle: "KKR × Dollar General LBO",
    dealSize: "$69억",
    dealSizeUSD: "$6.9bn",
    evEbitda: "9.2×",
    closeDate: "2007년 7월",
  },

  // ── 출처 ───────────────────────────────────────────────────────
  sources: [
    { id: 1, text: "KKR (2007). Dollar General Corporation — Definitive Merger Agreement. March 2007." },
    { id: 2, text: "Dollar General Corporation (2007). Form S-4 / Proxy Statement. SEC Filing, 2007." },
    { id: 3, text: "Dollar General Corporation (2009). Form S-1 — Initial Public Offering. SEC Filing, October 2009." },
    { id: 4, text: "Wall Street Journal (2009). Dollar General IPO: Recession-Era Retail Giant Goes Public. November 2009." },
    { id: 5, text: "Bloomberg (2013). KKR Completes Dollar General Exit — $4B+ Profit, 70% IRR. 2013." },
    { id: 6, text: "Harvard Business School (2012). KKR & Dollar General: Creating Value Through Operational Improvements. HBS Case 9-212-042." },
    { id: 7, text: "Moody's (2007). Dollar General — Rating Action on LBO Financing. July 2007." },
    { id: 8, text: "S&P Global (2007). Dollar General Corporation — New Issue Report: Term Loan B & HY Notes. 2007." },
  ],

  // ── SEO ────────────────────────────────────────────────────────
  seo: {
    title: "KKR × Dollar General LBO — 금융위기가 만든 역대급 PE 수익률 IRR 70%",
    description: "2007년 KKR의 Dollar General $69억 LBO 완전 해부. Entry 5.5× 보수적 레버리지, 금융위기 EBITDA +35%, 2009년 역대 최대 소매 IPO, IRR ~70% MOIC ~4-5× 달성까지 PE 역사상 최고 성공 사례 분석.",
    keywords: [
      "KKR", "Dollar General", "달러제너럴", "LBO", "레버리지드바이아웃",
      "사모펀드", "PE", "IRR", "MOIC", "불황형소매", "Recession-Proof",
      "Term Loan B", "HY채권", "레버리지드론", "IPO", "Exit",
    ],
  },

  // ── 핵심 개념 ──────────────────────────────────────────────────
  concepts: [
    {
      term: "레버리지드 바이아웃 (LBO)",
      href: "/market-101/levfin-hy-vs-loans",
      description: "PE 펀드가 인수 금액의 대부분을 차입(레버리지)으로 조달해 기업을 인수하는 구조. 에쿼티 수익률(IRR)을 레버리지로 증폭시킨다. Dollar General 딜은 에쿼티 35%·차입 65%의 보수적 구조를 택했다.",
    },
    {
      term: "Term Loan B (TLB)",
      href: "/market-101/levfin-hy-vs-loans",
      description: "기관투자자(헤지펀드, CLO 등)를 대상으로 신디케이트되는 변동금리 선순위 담보 대출. LBO의 핵심 자금 조달 수단. Dollar General의 경우 $38억(LIBOR+275bps)이 발행됐다.",
    },
    {
      term: "HY 채권 (High Yield Bond)",
      href: "/market-101/levfin-hy-vs-loans",
      description: "신용등급 BB+ 이하 발행 기업의 고수익 채권. LBO에서 TLB로 충당하지 못하는 차입금을 보완한다. Dollar General의 10.625% HY Notes는 무담보 후순위로 TLB보다 높은 금리를 부담했다.",
    },
    {
      term: "다운트레이딩 (Down-Trading)",
      href: "/market-101/levfin-credit-metrics",
      description: "경기 침체 시 소비자들이 더 낮은 가격대의 채널로 이동하는 현상. 고소득층이 고급 슈퍼→월마트→달러스토어로 이동하면서 Dollar General이 금융위기의 최대 수혜자가 됐다.",
    },
    {
      term: "Debt/EBITDA (레버리지 배수)",
      href: "/market-101/levfin-credit-metrics",
      description: "총 순부채를 EBITDA로 나눈 신용 핵심 지표. 높을수록 부채 부담이 크다. KKR은 Entry 5.5×에서 출발해, EBITDA 성장으로 2년 후 ~4.0×를 달성 — 재무 건전성이 자동으로 개선됐다.",
    },
  ],

  // ── FAQ ────────────────────────────────────────────────────────
  faq: [
    {
      q: "KKR이 Dollar General을 인수할 때 왜 레버리지를 낮게 설정했나요?",
      a: "2007년 당시 크레딧 시장은 과열 상태(PE 딜 레버리지 7-8×)였지만, KKR은 두 가지 이유로 5.5×를 선택했습니다. 첫째, Dollar General의 오퍼레이션 개선 여지가 커 EBITDA를 직접 성장시킬 수 있었고, 둘째, 미국 경제 사이클이 후반에 진입하고 있다는 판단으로 재무적 여유를 확보할 필요가 있었습니다. 이 보수적 판단이 2008년 금융위기 때 결정적 완충재가 됐습니다.",
    },
    {
      q: "금융위기가 오히려 Dollar General에 유리했던 이유는?",
      a: "달러스토어는 '반주기적(counter-cyclical)' 비즈니스입니다. 경기가 나빠지면 고소득층 소비자들이 더 저렴한 채널로 이동(다운트레이딩)하고, 기존 저소득층 고객은 이탈하지 않습니다. 2008년 실업률이 9%를 넘자 Dollar General의 동기 매출(SSS)이 +10%+를 기록했고, EBITDA는 오히려 +35% 성장했습니다. 레버리지 배수는 5.5×→4.0× 수준으로 자연 감소했습니다.",
    },
    {
      q: "2009년 IPO 타이밍이 왜 탁월했나요?",
      a: "2009년 3월 S&P500은 저점을 찍고 V자 반등을 시작했습니다. KKR은 이 회복 모멘텀과 Dollar General의 최고 실적이 겹치는 2009년 11월을 IPO 시점으로 선택했습니다. '불황 속 성장' 스토리가 가장 설득력 있는 순간, 그리고 PE-backed IPO에 대한 투자자 갈증이 가장 높은 시점이 겹쳤습니다. 공모가 $21 대비 상장 이후 주가는 지속 상승했습니다.",
    },
    {
      q: "Dollar General 딜의 IRR 70%는 어떻게 계산되나요?",
      a: "에쿼티 투자 $2.4B(2007년 7월)를 기준으로, IPO + 이후 블록딜을 통해 총 $9-10B+ 수준의 에쿼티 가치를 회수(2009-2013년)했습니다. 약 6년 투자 기간에 MOIC ~4-5×, IRR ~70%가 산출됩니다. IRR이 높은 이유는 레버리지 효과뿐 아니라 투자 기간이 짧았다는 점도 크게 작용했습니다.",
    },
  ],

  // ── LevFin 관점 오버레이 ─────────────────────────────────────
  levfinOverview: {
    angle: "보수적 LBO + 반주기 논리 — 금융위기가 오히려 레버리지를 자동 감소시킨 구조",
    body: "Dollar General LBO는 레버리지드론·HY채권의 교과서적 혼합 구조다. TLB(변동금리, 담보, 기관 신디케이션)와 HY Senior Notes(고정금리, 무담보, 공모)의 역할 분담이 명확하다. 특히 Entry 5.5×라는 보수적 레버리지는 2008년 금융위기 시 EBITDA 성장이 레버리지를 자동으로 낮추는 '자기 치유(self-healing)' 구조를 만들어냈다.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "$3.8B",
        rate: "LIBOR+275bps (변동)",
        maturity: "7년",
        seniority: "senior-secured",
        pct: 55,
        color: "bg-amber-500",
      },
      {
        name: "리볼빙 크레딧 퍼실리티 (RCF)",
        amountDisplay: "$0.9B",
        rate: "LIBOR+250bps (변동)",
        maturity: "5년",
        seniority: "senior-secured",
        pct: 0,
        color: "bg-amber-400",
      },
      {
        name: "HY Senior Notes",
        amountDisplay: "$0.7B",
        rate: "10.625% (고정)",
        maturity: "10년",
        seniority: "senior-unsecured",
        pct: 10,
        color: "bg-orange-500",
      },
      {
        name: "에쿼티 (KKR + Co-investors)",
        amountDisplay: "$2.4B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 35,
        color: "bg-emerald-500",
      },
    ],
    metrics: [
      { label: "Entry Debt/EBITDA",  value: "5.5×",   sub: "보수적 — 시장 평균 7-8× 대비",  isAlert: false },
      { label: "2년 후 레버리지",    value: "~4.0×",  sub: "EBITDA +35% → 자동 감소",       isAlert: false },
      { label: "IRR",                value: "~70%+",  sub: "PE 역사상 최고 수준",            isAlert: false },
      { label: "MOIC",               value: "~4-5×",  sub: "에쿼티 투자 $2.4B → $9B+ 회수", isAlert: false },
    ],
    lessons: [
      {
        icon: "📉",
        title: "반주기 논리 — EBITDA가 경기와 역행할 때 LBO의 위력",
        body: "일반적인 LBO는 경기 침체 시 EBITDA 감소 → 레버리지 상승 → 디폴트 위험이 커진다. 달러스토어처럼 수요가 경기와 역행하는 사업에서는 이 공식이 뒤집힌다. KKR은 '레버리지가 가장 높은 시점에 EBITDA가 성장하는' 구조를 설계했고, 이것이 5.5×라는 보수적 레버리지보다 더 강력한 리스크 헤지로 작용했다.",
      },
      {
        icon: "🔗",
        title: "TLB + HY 혼합 구조 — 변동금리와 고정금리의 역할 분담",
        body: "LBO 자금 조달에서 TLB(변동금리 담보)와 HY채권(고정금리 무담보)은 상호 보완적이다. TLB는 원금 조기 상환이 자유로워 EBITDA 성장 시 레버리지를 빠르게 낮출 수 있고, HY채권은 고금리지만 장기 고정금리로 금리 리스크를 헤지한다. Dollar General은 2011년 HY Notes를 조기 상환해 이자 부담을 줄였다.",
      },
      {
        icon: "🎯",
        title: "오퍼레이션 알파 — 레버리지보다 실적 개선이 진짜 수익의 원천",
        body: "Dollar General의 IRR 70%는 레버리지만으로 설명되지 않는다. Dreiling CEO 체제에서 매장 수를 8,229→11,000+로 늘리고, EBITDA 마진을 연간 100bps+ 개선한 오퍼레이션 알파가 핵심이었다. '싸게 사는 것'과 '잘 운영하는 것' 중 후자가 장기 수익의 더 큰 원천임을 Dollar General이 입증했다.",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-credit-metrics",
        chapterNum: "Ch.2",
        title: "신용 메트릭스 & 언더라이팅",
        whyRelevant: "Entry 5.5× → 금융위기 EBITDA +35% → 4.0× — 레버리지 배수가 실적 성장으로 자동 감소하는 메커니즘 해부",
      },
      {
        slug: "levfin-hy-vs-loans",
        chapterNum: "Ch.1",
        title: "HY채권 vs 레버리지드론",
        whyRelevant: "TLB $38억(LIBOR+275bps) + HY 10.625% $7억 혼합 구조 — 동일 LBO에서 론과 채권의 역할 분담 실전 케이스",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "LevFin 케이스 스터디",
        whyRelevant: "Dollar General(성공)과 KKR × Toys R Us(실패)를 같은 시대 같은 PE의 소매 LBO로 비교 — 무엇이 결과를 갈랐나",
      },
    ],
  },
};

export default deal;
