/**
 * KKR·TPG × TXU / Energy Future Holdings (2007–2014)
 * 역대 최대 PE 파산 — 셰일혁명이 박살낸 $450억 에너지 LBO
 * Entry $44.4B → 2014 Chapter 11 → 역대 최대 PE 파산
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kkr-txu-energy-future",
  title: "KKR·TPG는 왜 역대 최대 PE 파산을 맞았나 — TXU $450억 LBO의 붕괴",
  subtitle: "셰일혁명 예측 실패 + 과잉 레버리지 — LBO 역사상 가장 비싼 교훈",
  category: "ma",
  industry: "에너지 / 전력",
  country: "미국",
  announcedAt: "2007-02-26",
  closedAt: "2007-10-10",
  announcedDisplay: "2007년 2월",
  closedDisplay: "2007년 10월",
  readingMinutes: 12,
  tags: [
    "KKR", "TPG", "TXU", "Energy Future Holdings", "EFH", "LBO",
    "파산", "Chapter11", "셰일혁명", "천연가스", "에너지", "전력",
    "레버리지드론", "LevFin", "PE", "사모펀드", "역대최대파산",
  ],
  excerpt:
    "2007년 KKR·TPG는 텍사스 전력회사 TXU를 $450억에 인수했다. 천연가스 가격이 높게 유지된다는 전제였다. 하지만 셰일 혁명으로 2012년까지 가스 가격이 75% 폭락하면서 전력 수익이 무너졌다. 2014년 Energy Future Holdings는 $418억 부채를 안고 Chapter 11을 신청 — PE 역사상 가장 큰 파산 중 하나. '잘못된 매크로 thesis + 과잉 레버리지'의 교과서.",

  acquirer: { initials: "KKR", bg: "bg-slate-700", label: "KKR · TPG Capital · Goldman Sachs PE" },
  target:   { initials: "TXU", bg: "bg-orange-700", label: "TXU Corp (→ Energy Future Holdings)" },

  background: [
    "TXU Corp은 텍사스 최대 전력 회사로, Luminant(발전), TXU Energy(소매전력), Oncor(송배전) 세 개 사업부를 보유하고 있었다. 규제가 완화된 텍사스 전력 시장에서 발전 단가(천연가스 연료)와 도매 전기요금이 핵심 수익 드라이버였다.",
    "2007년 초 KKR·TPG의 thesis는 명확했다: 천연가스 가격이 높게 유지되거나 상승하면, TXU의 석탄 발전소가 비교우위를 누리고 도매 전기요금이 높게 형성돼 막대한 현금 흐름이 발생한다. 당시 헨리 허브 천연가스 가격은 $6-8/MMBtu 수준이었다.",
    "딜 규모 $44.4B(EV)는 당시 역대 최대 LBO였다. KKR·TPG·Goldman Sachs PE 컨소시엄이 에쿼티 $83억을 출자하고, $377억의 레버리지드론·HY채권을 조달했다. Debt/EBITDA ~8×. 환경단체 압력으로 석탄 발전소 11기 취소를 약속하는 이례적 조건도 포함됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "$450억",
    acquirerName: "KKR · TPG Capital · Goldman Sachs PE",
    targetName: "TXU Corp (Energy Future Holdings)",
    announcedDisplay: "2007년 2월 26일",
    closedDisplay: "2007년 10월 10일",
    country: "미국 (텍사스, 비상장)",
  },

  executiveSummary: [
    "KKR·TPG·Goldman PE 컨소시엄이 TXU를 $44.4B에 인수 — 역대 최대 LBO(당시 기준).",
    "Thesis: 천연가스 고가 유지 → 석탄 발전 비교우위 → 도매 전력가격 고공행진.",
    "현실: 셰일혁명 → 2012년 천연가스 가격 $2/MMBtu 이하로 75%+ 폭락.",
    "발전 수익 붕괴 → EBITDA 급감 → Debt/EBITDA 폭등 → 이자 부담 감당 불가.",
    "2014년 4월 Chapter 11 신청 — $41.8B 역대 최대 PE 파산 중 하나.",
  ],

  industryOverview: {
    body: "미국 전력 시장은 발전(generation)·송배전(T&D)·소매(retail)로 분리된 규제 완화 시장이다. 텍사스 ERCOT 시장은 완전 경쟁 체제로, 도매 전력가격이 천연가스 가격과 밀접하게 연동된다. 2007년 당시 셰일 가스 혁명(수평 시추 + 수압 파쇄)의 규모를 업계가 과소평가했고, KKR·TPG도 예외가 아니었다.",
    metrics: [
      { label: "딜 규모",              value: "$44.4B",   sub: "역대 최대 LBO (2007년 당시 기준)" },
      { label: "천연가스 가격 (2007)", value: "$6-8/MMBtu", sub: "Thesis 근거 — 높게 유지될 것으로 예상" },
      { label: "천연가스 가격 (2012)", value: "$2/MMBtu",  sub: "셰일 혁명으로 75%+ 폭락" },
      { label: "파산 신청 부채",        value: "$41.8B",   sub: "2014년 Chapter 11 기준" },
    ],
    players: [
      { name: "Luminant (TXU 발전부문)",  role: "텍사스 최대 발전사, 석탄 발전 집중" },
      { name: "TXU Energy (소매전력)",    role: "텍사스 소매 전력 판매 1위" },
      { name: "Oncor (송배전)",           role: "텍사스 최대 송배전망 운영사 — 안정적 규제 수익" },
      { name: "셰일 가스 생산업체들",      role: "2007년 이후 급성장 — TXU thesis를 파괴" },
    ],
  },

  companyOverview: {
    targetName: "TXU Corp → Energy Future Holdings (EFH)",
    body: "텍사스 전력 시장의 지배적 사업자로, Luminant(발전·석탄 위주), TXU Energy(소매 전력), Oncor(규제 송배전) 세 개 사업부로 구성됐다. 인수 후 Energy Future Holdings로 사명을 변경했다. Oncor는 규제 수익으로 안정적이었지만, Luminant와 TXU Energy의 수익이 천연가스 가격에 절대적으로 의존하는 구조였다. 셰일 혁명 이전 석탄 발전의 비교우위가 투자 thesis의 핵심이었다.",
    metrics: [
      { label: "LBO EV",               value: "$44.4B",   sub: "2007년 당시 역대 최대" },
      { label: "Entry Debt/EBITDA",    value: "~8×",      sub: "총 부채 $37.7B" },
      { label: "파산 시 총 부채",      value: "$41.8B",   sub: "2014년 4월 기준" },
      { label: "에쿼티 투자 손실",     value: "~$8.3B",   sub: "KKR·TPG·Goldman 총 손실" },
    ],
    financials: [
      {
        year: "FY2006",
        revenue: 11537,
        cogs: 7420,
        grossProfit: 4117,
        sga: 620,
        operatingIncome: 3497,
        ebitda: 4870,
      },
      {
        year: "FY2008",
        revenue: 10285,
        cogs: 7190,
        grossProfit: 3095,
        sga: 680,
        operatingIncome: 2415,
        ebitda: 3640,
      },
      {
        year: "FY2012",
        revenue: 7943,
        cogs: 6220,
        grossProfit: 1723,
        sga: 590,
        operatingIncome: 1133,
        ebitda: 1820,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2012는 천연가스 가격 붕괴 이후. EBITDA $4.87B(2006)→$1.82B(2012) — 63% 폭락. 이자 비용 ~$4B/년을 EBITDA로 커버 불가 상태.",
  },

  dealStructure: {
    body: "에쿼티 $83억, 레버리지드론+HY채권 $377억으로 $44.4B EV를 조달. Debt/EBITDA ~8×. TLB $24.5B + 브릿지론 + HY채권의 복합 구조. 규제 수익 사업인 Oncor는 별도 Ring-fencing.",
    preOwnership: {
      nodes: [
        { id: "public", label: "공개 시장 주주", sub: "NYSE: TXU, 분산 주주구조", type: "entity" },
        { id: "txu",    label: "TXU Corp",       sub: "텍사스 전력 최대 사업자",   type: "target" },
      ],
      edges: [
        { from: "public", to: "txu", label: "상장 주식 100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "kkr",    label: "KKR·TPG·Goldman PE",  sub: "에쿼티 $83억",                 type: "fund"   },
        { id: "tlb",    label: "TLB 대주단",           sub: "$24.5B (변동금리, 1L 담보)",   type: "entity" },
        { id: "hy",     label: "HY 채권자",            sub: "~$10B (고정금리, 후순위)",     type: "entity" },
        { id: "efh",    label: "Energy Future Holdings", sub: "비상장 (EFH로 개명)",       type: "target" },
        { id: "oncor",  label: "Oncor (송배전)",       sub: "Ring-fenced 규제 자회사",     type: "entity" },
      ],
      edges: [
        { from: "kkr",   to: "efh",   label: "에쿼티 ~19%" },
        { from: "tlb",   to: "efh",   label: "$24.5B (1L)" },
        { from: "hy",    to: "efh",   label: "~$10B (무담보)" },
        { from: "efh",   to: "oncor", label: "80% 지분 보유" },
      ],
    },
    keyTerms: [
      { label: "딜 가치",              value: "$44.4B (역대 최대 LBO)",          accent: true  },
      { label: "TLB",                  value: "$24.5B (LIBOR+350bps, 1순위)",    accent: false },
      { label: "HY 채권",              value: "~$10B (PIK 옵션 포함)",           accent: false },
      { label: "Entry Debt/EBITDA",    value: "~8× — 금리 인상기 극도 취약",     accent: true  },
      { label: "Oncor Ring-fencing",   value: "규제 자회사 별도 격리 — 유일한 안전판", accent: true },
    ],
  },

  advisors: {
    body: "세 PE 컨소시엄 모두 최정예 어드바이저를 구성했으며, 환경단체와의 협상도 딜의 일부였다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "KKR · TPG · Goldman PE (인수자)",
        initials: "KKR",
        bg: "bg-slate-700",
        advisors: [
          { firm: "Citigroup",            role: "수석 어레인저",  roleType: "financial", note: "TLB·HY 신디케이션 주관" },
          { firm: "Morgan Stanley",       role: "공동 어레인저",  roleType: "financial", note: "에쿼티 브릿지" },
          { firm: "Weil Gotshal & Manges", role: "법률 자문",    roleType: "legal",     note: "LBO 구조 설계" },
        ],
      },
      {
        side: "target",
        sideLabel: "TXU Corp (매각 측)",
        initials: "TXU",
        bg: "bg-orange-700",
        advisors: [
          { firm: "Goldman Sachs (매각)",  role: "재무 자문",  roleType: "financial", note: "매각 프로세스 (PE측이기도 함 — 이해충돌 이슈)" },
          { firm: "Shearman & Sterling",   role: "법률 자문", roleType: "legal",     note: "이사회 M&A 자문" },
        ],
      },
    ],
  },

  valuation: {
    body: "KKR·TPG는 TXU를 Entry EV/EBITDA ~9×(FY2006 $4.87B EBITDA 기준)에 인수. 천연가스 가격 유지 시 EBITDA $6B+ 달성, Debt/EBITDA를 5× 이하로 낮출 수 있다는 계획이었다. 현실은 정반대였다.",
    rows: [
      { item: "Entry EV",                val: "$44.4B",   note: "2007년 10월, EV/EBITDA ~9×",           accent: true  },
      { item: "Entry Debt/EBITDA",       val: "~8×",      note: "총 부채 $37.7B / EBITDA $4.87B",       accent: true  },
      { item: "가스 가격 Thesis",        val: "$6-8/MMBtu", note: "실제 2012년: $2/MMBtu — 75% 폭락",  accent: false },
      { item: "EBITDA 변화",             val: "$4.87B→$1.82B", note: "2006→2012, 63% 감소",            accent: true  },
      { item: "파산 시 채권자 회수율",   val: "30-50%",   note: "구조화에 따라 트랜치별 상이",          accent: false },
    ],
    disclaimer: "파산 절차에서의 회수율은 협상 결과에 따라 달라짐. 에쿼티 투자자(KKR·TPG·Goldman)는 사실상 전액 손실.",
  },

  rationale: {
    buyer: {
      title: "KKR·TPG 투자 논리",
      initials: "KKR",
      bg: "bg-slate-700",
      points: [
        "천연가스 고가 지속 → 석탄 발전(TXU Luminant) 비교 우위 유지 → 높은 도매 전력가격",
        "텍사스 인구·경제 성장 → 전력 수요 지속 증가",
        "Oncor(규제 송배전)의 안정적 수익이 부채 이자 부담 완충",
        "오퍼레이션 개선: 발전소 효율화, 비용 절감을 통한 EBITDA 성장",
        "에너지 규제 완화 트렌드 → 민간 전력 시장 확대 기대",
      ],
    },
    seller: {
      title: "TXU 이사회 수용 논리",
      initials: "TXU",
      bg: "bg-orange-700",
      points: [
        "공모가 대비 25% 프리미엄($69.25/주) — 주주 가치 즉각 실현",
        "환경 압력: 석탄 발전소 11기 취소 약속 → 사회적 리스크 축소",
        "비상장 전환으로 분기 실적 압박 없이 장기 투자 가능",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2014년 (Chapter 11 기준)",
    body: "TXU/EFH는 PE 역사상 가장 비싼 실패 사례로 기록됐다. KKR·TPG·Goldman은 합산 $8.3B+ 에쿼티를 전액 손실했다. 파산 이후 Luminant와 TXU Energy는 Vistra Energy로 재편됐고, Oncor는 별도 매각됐다(NextEra Energy가 인수 시도했으나 최종 Sempra Energy에 매각). 셰일 혁명의 규모를 예측하지 못한 macro thesis 실패가 근본 원인이었다.",
    overallVerdict: "역사적 실패 — 에쿼티 전액 손실, $41.8B 역대 최대 PE 파산 중 하나",
    positives: [
      "Oncor(규제 송배전)는 ring-fence로 파산 격리 → 별도 매각으로 채권자 일부 회수",
      "파산 구조조정 과정에서 Luminant는 Vistra Energy로 재탄생 → 이후 성공적 운영",
    ],
    risks: [
      "셰일 혁명 미예측: 수평 시추·수압 파쇄 기술이 가스 공급을 폭발적으로 늘릴 것을 간과",
      "단일 상품(천연가스 가격) 의존: EBITDA의 80%+가 가스 가격에 연동 — 헤지 불충분",
      "Entry Debt/EBITDA ~8×: EBITDA가 30%만 하락해도 이자 비용 감당 불가",
      "이해충돌: Goldman Sachs가 매각 자문과 PE 공동 투자자 역할을 동시에 수행",
    ],
    editorNote: "TXU 케이스의 핵심 교훈: PE 투자에서 'macro thesis'에 대한 의존은 극도로 위험하다. 특히 상품 가격처럼 외부 변수에 민감한 비즈니스에서는 레버리지를 최소화해야 한다. '설마 이 가격이 폭락하겠어?'라는 기대는 $450억 LBO를 $0 에쿼티로 만들었다.",
  },

  tombstone: {
    acquirerInitials: "KKR",
    acquirerBg: "bg-slate-700",
    targetInitials: "EFH",
    targetBg: "bg-orange-700",
    acquirerName: "KKR · TPG · Goldman PE",
    targetName: "TXU Corp (Energy Future Holdings)",
    dealTitle: "KKR·TPG × TXU LBO",
    dealSize: "$450억",
    dealSizeUSD: "$44.4bn",
    evEbitda: "9×",
    closeDate: "2007년 10월",
  },

  sources: [
    { id: 1, text: "KKR·TPG Capital (2007). TXU Corp Merger Agreement — $69.25 per share. February 2007." },
    { id: 2, text: "Energy Future Holdings (2014). Chapter 11 Bankruptcy Filing — U.S. Bankruptcy Court, Delaware. April 2014." },
    { id: 3, text: "Wall Street Journal (2014). TXU's Bankruptcy: How the Biggest Leveraged Buyout Went Wrong. April 2014." },
    { id: 4, text: "Bloomberg (2012). EFH Faces $40 Billion Debt Crisis as Gas Prices Collapse. November 2012." },
    { id: 5, text: "U.S. Energy Information Administration (2013). Natural Gas Spot Prices — Henry Hub Historical Data." },
    { id: 6, text: "Harvard Business School (2015). Energy Future Holdings: Anatomy of a Failed LBO. HBS Case 9-215-082." },
    { id: 7, text: "Moody's (2014). Energy Future Holdings Corp — Rating Withdrawal. April 2014." },
    { id: 8, text: "Reuters (2016). Vistra Energy Emerges from EFH Bankruptcy, Plans IPO. October 2016." },
  ],

  seo: {
    title: "KKR·TPG × TXU 에너지 LBO 실패 — 역대 최대 PE 파산 $450억의 교훈",
    description: "2007년 KKR·TPG의 TXU $44.4B LBO 완전 해부. 셰일혁명으로 천연가스 75% 폭락, EBITDA 63% 감소, 2014년 $41.8B Chapter 11 파산. '잘못된 macro thesis + 과잉 레버리지'의 교과서 분석.",
    keywords: [
      "KKR", "TPG", "TXU", "Energy Future Holdings", "LBO", "파산",
      "Chapter11", "셰일혁명", "천연가스", "에너지", "레버리지드론",
      "PE", "사모펀드", "역대최대파산", "macro thesis", "commodity risk",
    ],
  },

  concepts: [
    {
      term: "Macro Thesis 리스크",
      href: "/deal-101/lbo-overview",
      description: "PE 투자에서 '시장 가격이 이렇게 움직일 것'이라는 거시경제 예측에 수익률을 의존하는 위험. 상품 가격·금리·환율 등은 통제 불가능하다. TXU는 천연가스 가격 예측 실패 하나로 $44B LBO 전체가 붕괴됐다.",
    },
    {
      term: "Ring-fencing (자산 격리)",
      href: "/deal-101/lbo-capital-structure",
      description: "그룹 내 특정 자산·자회사를 부채 구조에서 법적으로 격리해 모회사 파산 시에도 보호받게 하는 구조. TXU의 Oncor(규제 송배전)는 ring-fence로 격리됐고, EFH 파산 이후에도 별도로 운영·매각됐다.",
    },
    {
      term: "Commodity Price Risk (상품 가격 리스크)",
      href: "/deal-101/lbo-overview",
      description: "원자재·에너지 가격 변동이 기업 현금흐름에 직접 영향을 주는 위험. LBO에서 레버리지를 높이면 상품 가격 하락 시 이자 비용을 감당 못해 파산이 가속화된다. 헤지 없는 단일 상품 의존은 LBO의 치명적 취약점.",
    },
    {
      term: "PIK (Payment-in-Kind) 채권",
      href: "/market-101/levfin-hy-vs-loans",
      description: "이자를 현금 대신 추가 채권(현물)으로 지급하는 구조. 초기에는 현금 부담을 줄여주지만 복리로 부채가 증가한다. EFH는 파산 직전 PIK 토글 채권이 복리 증가해 총 부채를 더욱 키웠다.",
    },
    {
      term: "셰일 혁명 (Shale Revolution)",
      href: "/market-101/levfin-cases",
      description: "수평 시추(horizontal drilling)와 수압 파쇄(hydraulic fracturing) 기술을 결합해 셰일 암층에서 천연가스·석유를 경제적으로 추출하는 기술 혁명. 2008년 이후 미국 가스 생산을 폭발적으로 늘려 Henry Hub 가격을 $8→$2로 폭락시켰다.",
    },
  ],

  faq: [
    {
      q: "KKR·TPG가 셰일 혁명을 예측하지 못한 이유는?",
      a: "2007년 당시 수평 시추와 수압 파쇄 기술은 이미 존재했지만, 그 규모와 속도를 예측한 전문가는 극히 드물었습니다. TXU 딜에 참여한 Goldman Sachs, Citigroup 등 월스트리트 최고 인재들도 같은 실수를 했습니다. 이는 '모든 전문가가 동의하는 thesis'라도 외부 변수에 완전히 노출된 레버리지드 베팅에서는 치명적 결과를 낳을 수 있음을 보여줍니다.",
    },
    {
      q: "Oncor는 EFH 파산에서 어떻게 살아남았나요?",
      a: "Oncor(텍사스 송배전 사업)는 규제 기관의 요청으로 EFH 자본구조에서 ring-fence 처리됐습니다. 법적으로 EFH의 채권자들이 Oncor 자산에 직접 접근할 수 없도록 격리된 것입니다. 덕분에 EFH 파산 이후에도 Oncor는 정상 운영됐고, 최종적으로 Sempra Energy에 매각돼 채권자 일부가 회수할 수 있었습니다.",
    },
    {
      q: "역대 최대 LBO가 역대 최대 PE 파산이 된 것이 우연인가요?",
      a: "아니요, 구조적 필연에 가깝습니다. 딜이 클수록 레버리지 절대액도 크고, 그만큼 현금흐름의 변동성을 감당하기 어렵습니다. 또한 대형 딜일수록 경쟁 입찰 압력으로 Entry Multiple이 높아집니다. TXU의 경우 $44.4B라는 규모 자체가 단일 상품 가격에 의존하는 취약한 thesis로는 지탱할 수 없는 레버리지를 만들어냈습니다.",
    },
    {
      q: "TXU 파산 이후 에너지 분야 PE 투자는 어떻게 달라졌나요?",
      a: "TXU 파산 이후 에너지 기업 LBO에서 상품 가격 헤지(commodity hedging)가 필수 조건이 됐습니다. 또한 규제 자산(regulated utilities)과 비규제 발전을 분리해 ring-fence하는 구조가 표준화됐습니다. Entry Debt/EBITDA도 에너지 분야에서 8× 이상은 금기시되는 분위기가 형성됐습니다.",
    },
  ],

  levfinOverview: {
    angle: "역대 최대 PE 파산 — 과잉 레버리지 + 잘못된 macro thesis의 파국",
    body: "TXU LBO는 '$44.4B × Debt/EBITDA 8×'라는 숫자가 얼마나 위험한지를 보여주는 교과서다. 상품 가격에 연동된 EBITDA가 75% 폭락하자, 이자 비용을 충당할 현금이 없어졌다. TLB $24.5B + HY채권 ~$10B의 채권자들은 파산 절차에서 수십 센트에 불과한 회수율을 기록했다.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "$24.5B",
        rate: "LIBOR+350bps (변동)",
        maturity: "7년",
        seniority: "senior-secured",
        pct: 55,
        color: "bg-orange-500",
      },
      {
        name: "리볼빙 크레딧 퍼실리티",
        amountDisplay: "$4.0B",
        rate: "LIBOR+350bps",
        maturity: "6년",
        seniority: "senior-secured",
        pct: 9,
        color: "bg-orange-400",
      },
      {
        name: "HY 채권 (Senior/Sub Notes)",
        amountDisplay: "~$10B",
        rate: "10.875%–11.25% (고정)",
        maturity: "8-10년",
        seniority: "senior-unsecured",
        pct: 22,
        color: "bg-red-500",
      },
      {
        name: "에쿼티 (KKR·TPG·Goldman)",
        amountDisplay: "$8.3B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 19,
        color: "bg-slate-500",
      },
    ],
    metrics: [
      { label: "Entry Debt/EBITDA",  value: "~8×",          sub: "에너지 LBO의 위험 수위",   isAlert: true  },
      { label: "EBITDA 감소",        value: "-63%",          sub: "가스 가격 폭락으로",       isAlert: true  },
      { label: "파산 신청 부채",     value: "$41.8B",        sub: "2014년 Chapter 11",        isAlert: true  },
      { label: "에쿼티 손실",        value: "~$8.3B",       sub: "KKR·TPG·Goldman 전액",     isAlert: true  },
    ],
    lessons: [
      {
        icon: "⚡",
        title: "상품 가격에 레버리지를 베팅하지 말라",
        body: "TXU LBO의 핵심 실수는 통제 불가능한 외부 변수(천연가스 가격)에 수익률 전체를 의존했다는 것이다. EBITDA의 80%+가 가스 가격에 연동된 구조에서 Debt/EBITDA 8×는 가격이 30%만 하락해도 이자 비용을 감당 못하는 치명적 구조였다.",
      },
      {
        icon: "🔒",
        title: "Ring-fencing — 부실 전염을 막는 방어선",
        body: "Oncor는 ring-fence 덕분에 EFH 파산에도 살아남았다. 그룹 내 안정적 자산(규제 수익 사업)을 법적으로 격리하는 구조는 최악의 시나리오에서 채권자 회수를 높이는 최후의 방어선이다. 이후 에너지 LBO에서 ring-fencing이 표준화됐다.",
      },
      {
        icon: "📊",
        title: "레버리지 절대액과 배수는 다르다",
        body: "Debt/EBITDA 8×는 숫자로 보면 '이해 가능한 범위'처럼 보이지만, $44.4B EV 딜에서의 8×는 $37B+ 부채다. 이 절대액은 EBITDA가 조금만 흔들려도 이자 부담이 현금흐름을 초과한다. 대형 딜일수록 레버리지 배수 기준을 더 보수적으로 가져가야 한다.",
      },
    ],
    relatedChapters: [
      {
        slug: "lbo-overview",
        chapterNum: "Ch.0",
        title: "LBO의 본질",
        whyRelevant: "Blackstone/Hilton(성공)과 KKR/TXU(실패) — 같은 해 같은 시장의 극명한 대비",
      },
      {
        slug: "lbo-capital-structure",
        chapterNum: "Ch.1",
        title: "LBO 자본구조 해부",
        whyRelevant: "TLB $24.5B + HY $10B 복합 구조 — Debt/EBITDA 8×가 어떻게 파산으로 이어지는가",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "부실 대출 & 구조조정",
        whyRelevant: "$41.8B 파산 처리 과정 — 트랜치별 회수율, Oncor ring-fence, 채권자 협상",
      },
    ],
  },
};

export default deal;
