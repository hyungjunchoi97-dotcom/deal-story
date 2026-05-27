/**
 * Silver Lake × Dell Take-Private (2013–2018)
 * 역대 최대 테크 기업 상장폐지 — 창업자 + PE 공동인수로 PC 제조사를 엔터프라이즈 솔루션 기업으로
 * $24.9B 인수 → EMC $67B 인수 → 2018 재상장
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "silver-lake-dell-takeprivate",
  title: "마이클 델은 왜 자신의 회사를 상장폐지했나 — Silver Lake와 함께한 역대 최대 테크 Take-Private",
  subtitle: "$249억 상장폐지 → EMC $670억 인수 → 엔터프라이즈 솔루션 기업으로 변신 후 재상장",
  category: "ma",
  industry: "기술 / PC·엔터프라이즈 IT",
  country: "미국",
  announcedAt: "2013-02-05",
  closedAt: "2013-10-29",
  announcedDisplay: "2013년 2월",
  closedDisplay: "2013년 10월",
  readingMinutes: 11,
  tags: [
    "실버레이크", "Silver Lake", "델", "Dell", "마이클델", "Michael Dell",
    "Take-Private", "상장폐지", "LBO", "테크LBO", "EMC", "VMware",
    "PE", "사모펀드", "Carl Icahn", "적대적인수", "재상장",
  ],
  excerpt:
    "2013년 마이클 델과 Silver Lake가 Dell을 $249억에 상장폐지했다. PC 시장 쇠퇴 속에서 엔터프라이즈 솔루션 기업으로 변신하려면 분기 실적 압박이 없는 비상장 환경이 필요했다. Carl Icahn의 격렬한 반대를 이겨내고 딜을 성사시킨 후, 2016년 EMC를 $670억에 인수해 역대 최대 테크 M&A를 단행했다. 2018년 VMware 트래킹 스톡을 활용한 역상장으로 회귀 — Take-Private의 교과서.",

  acquirer: { initials: "SL", bg: "bg-blue-900", label: "Silver Lake Partners + Michael Dell" },
  target:   { initials: "DELL", bg: "bg-blue-600", label: "Dell Inc." },

  background: [
    "Dell은 1984년 마이클 델이 대학 기숙사에서 창업한 세계 최대 PC 제조사 중 하나였다. 2013년까지 PC 시장은 스마트폰·태블릿의 부상으로 4년 연속 출하량이 감소하고 있었다. Dell의 주가는 5년 만에 60% 하락했고, 투자자들은 PC 제조사라는 딱지를 붙인 채 Dell을 저평가하고 있었다.",
    "마이클 델의 전략적 판단: Dell을 PC 제조사에서 엔터프라이즈 IT 솔루션 기업(서버·스토리지·클라우드·보안)으로 전환하려면 수년간의 대규모 투자와 구조조정이 필요했다. 이 전환은 분기 실적에 민감한 공개 시장에서는 불가능했다.",
    "2013년 2월 마이클 델과 Silver Lake Partners는 $13.65/주의 공개 매수 제안을 발표했다. 이는 공시 전 종가 대비 25% 프리미엄이었다. Carl Icahn과 Southeastern Asset Management 등 대주주들이 격렬히 반대하며 대안 제안을 냈지만, 6개월간의 공방 끝에 2013년 10월 딜이 성사됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "$249억",
    acquirerName: "Silver Lake Partners + Michael Dell",
    targetName: "Dell Inc.",
    announcedDisplay: "2013년 2월 5일",
    closedDisplay: "2013년 10월 29일",
    country: "미국 (NASDAQ: DELL → 비상장 → NYSE: DELL)",
  },

  executiveSummary: [
    "마이클 Dell + Silver Lake가 Dell을 $249억($13.65/주)에 상장폐지 — 역대 최대 테크 Take-Private.",
    "Carl Icahn의 $15.65/주 대안 제안, Southeastern Asset Management 반대 → 6개월 공방 끝 주주 승인.",
    "비상장 기간(2013-2018): PC→엔터프라이즈 전환 가속 + 클라우드·보안 인수 적극 추진.",
    "2016년 EMC $670억 인수 — 역대 최대 테크 M&A. VMware 지배 지분 확보.",
    "2018년 VMware 트래킹 스톡 교환을 통해 NYSE 재상장(DELL) — Take-Private 완성.",
  ],

  industryOverview: {
    body: "글로벌 PC 시장은 2012년부터 스마트폰·태블릿 대체 효과로 연간 5-8% 씩 출하량이 감소했다. 반면 엔터프라이즈 IT 시장(서버·스토리지·클라우드 인프라)은 클라우드 전환 수요로 성장 중이었다. 2013년 투자자들은 PC 제조사의 미래를 극도로 비관했고, Dell의 PER는 5배 수준으로 압축된 상태였다.",
    metrics: [
      { label: "글로벌 PC 출하량 감소",     value: "-5~8%/년", sub: "2012년부터 4년 연속 감소" },
      { label: "Take-Private 공모가",       value: "$13.65",   sub: "공시 전 종가 대비 +25%" },
      { label: "EMC 인수 규모",             value: "$67B",     sub: "2016년, 역대 최대 테크 M&A" },
      { label: "VMware 시가총액 (재상장 후)", value: "$47B+",   sub: "2019년 기준" },
    ],
    players: [
      { name: "Dell (Silver Lake + Michael Dell)", role: "PC→엔터프라이즈 전환 추진 대상" },
      { name: "HP Enterprise",                     role: "엔터프라이즈 IT 서버·스토리지 경쟁사" },
      { name: "EMC (후 Dell EMC)",                role: "2016년 Dell에 인수 — 스토리지 1위" },
      { name: "VMware (EMC 자회사)",               role: "가상화 소프트웨어 1위 — 딜의 핵심 자산" },
    ],
  },

  companyOverview: {
    targetName: "Dell Inc.",
    body: "1984년 마이클 델이 $1,000으로 창업한 세계 최대 PC 브랜드 중 하나. 직접 판매(direct model)와 공급망 효율화로 성장했지만, 2010년 이후 PC 시장 구조적 쇠퇴에 직면했다. 인수 직전 Revenue $57B, PC 의존도 ~50%로 엔터프라이즈 전환이 시급했다. 마이클 델은 여전히 CEO로 재직 중이었고 지분 ~14%를 보유하고 있었다.",
    metrics: [
      { label: "Take-Private 가치",      value: "$24.9B",    sub: "$13.65/주" },
      { label: "Revenue (FY2013)",       value: "$56.9B",    sub: "PC 매출 비중 ~50%" },
      { label: "Michael Dell 지분",      value: "~14%",      sub: "Take-Private 후 ~75%로 확대" },
      { label: "재상장 가치 (2018)",     value: "~$34B+",   sub: "NYSE: DELL 재상장 기준" },
    ],
    financials: [
      {
        year: "FY2011",
        revenue: 61494,
        cogs: 49094,
        grossProfit: 12400,
        sga: 7400,
        operatingIncome: 5000,
        ebitda: 5900,
      },
      {
        year: "FY2012",
        revenue: 62071,
        cogs: 49653,
        grossProfit: 12418,
        sga: 7504,
        operatingIncome: 4914,
        ebitda: 5800,
      },
      {
        year: "FY2013",
        revenue: 56940,
        cogs: 45550,
        grossProfit: 11390,
        sga: 7340,
        operatingIncome: 4050,
        ebitda: 4850,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2013은 PC 매출 감소 반영. EBITDA 마진 ~8.5%로 테크 하드웨어 업계 평균 수준. 비상장 전환 후 엔터프라이즈 투자 확대로 단기 EBITDA는 감소하지만 장기 성장성 확보.",
  },

  dealStructure: {
    body: "마이클 Dell의 기존 지분 롤오버 $37억 + Silver Lake 에쿼티 $14억 + Microsoft 대출 $20억 + TLB·브릿지론 ~$150억. 에쿼티 비율 ~28%. 창업자 보유 지분이 롤오버로 전환돼 실질 신규 에쿼티는 적었다.",
    preOwnership: {
      nodes: [
        { id: "mdell",  label: "Michael Dell",     sub: "지분 ~14%, CEO",          type: "fund"   },
        { id: "public", label: "공개 시장 주주",   sub: "NASDAQ: DELL 86%",        type: "entity" },
        { id: "dell",   label: "Dell Inc.",         sub: "PC·서버·스토리지",        type: "target" },
      ],
      edges: [
        { from: "mdell",  to: "dell", label: "지분 14%" },
        { from: "public", to: "dell", label: "지분 86%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "mdell2",  label: "Michael Dell",    sub: "에쿼티 롤오버 $37억 → 75%+", type: "fund"   },
        { id: "sl",      label: "Silver Lake",     sub: "에쿼티 $14억",              type: "fund"   },
        { id: "msft",    label: "Microsoft",       sub: "대출 $20억 (우선주 전환)",   type: "entity" },
        { id: "tlb",     label: "TLB 대주단",       sub: "~$90억 (변동금리)",         type: "entity" },
        { id: "dell2",   label: "Dell Inc.",        sub: "비상장, PC→엔터프라이즈 전환", type: "target" },
      ],
      edges: [
        { from: "mdell2", to: "dell2", label: "에쿼티 ~75%" },
        { from: "sl",     to: "dell2", label: "에쿼티 ~25%" },
        { from: "msft",   to: "dell2", label: "대출 $20억" },
        { from: "tlb",    to: "dell2", label: "TLB ~$90억" },
      ],
    },
    keyTerms: [
      { label: "딜 가치",           value: "$24.9B ($13.65/주, +25% 프리미엄)",   accent: true  },
      { label: "창업자 롤오버",     value: "$3.7B — 비용 절감 + 정렬 효과",       accent: true  },
      { label: "Microsoft 참여",    value: "$2.0B 대출 — 전략적 파트너십",        accent: false },
      { label: "Carl Icahn 반대",   value: "$15.65/주 대안 제안 → 부결",          accent: true  },
      { label: "EMC 인수 (2016)",   value: "$67B — 비상장 중 역대 최대 테크 M&A", accent: true  },
    ],
  },

  advisors: {
    body: "Silver Lake는 JP Morgan을 수석 어레인저로, 마이클 Dell은 Evercore를 재무자문으로 활용했다. 특별위원회가 독립 자문단(Lazard, Debevoise)을 구성해 공정성을 검증했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Silver Lake + Michael Dell (인수자)",
        initials: "SL",
        bg: "bg-blue-900",
        advisors: [
          { firm: "Evercore",           role: "재무 자문 (Michael Dell)",  roleType: "financial", note: "딜 구조 설계" },
          { firm: "JP Morgan",          role: "수석 어레인저",              roleType: "financial", note: "TLB·브릿지론 주관" },
          { firm: "Simpson Thacher",    role: "법률 자문",                  roleType: "legal",     note: "Take-Private 구조" },
        ],
      },
      {
        side: "target",
        sideLabel: "Dell 특별위원회 (독립이사)",
        initials: "SPC",
        bg: "bg-gray-600",
        advisors: [
          { firm: "Lazard",             role: "독립 재무 자문",  roleType: "financial", note: "공정성 의견(Fairness Opinion)" },
          { firm: "Debevoise & Plimpton", role: "독립 법률 자문", roleType: "legal",    note: "이사회 fiduciary duty 검증" },
        ],
      },
    ],
  },

  valuation: {
    body: "공모가 $13.65는 FY2013 EV/EBITDA ~5.1×로 테크 하드웨어 섹터 평균(6-8×) 대비 할인. Carl Icahn의 $15.65 제안이 높았지만, 부채 조달 실행 가능성 측면에서 열세였다.",
    rows: [
      { item: "공모가",                 val: "$13.65/주",  note: "공시 전 종가 대비 +25%",         accent: true  },
      { item: "딜 EV",                  val: "$24.9B",     note: "EV/EBITDA ~5.1× (FY2013)",       accent: false },
      { item: "Carl Icahn 대안가",      val: "$15.65/주",  note: "부결 — 자금 조달 실행력 부족",   accent: false },
      { item: "재상장 시 시총 (2018)",   val: "~$34B",     note: "NYSE: DELL 재상장 기준",          accent: true  },
      { item: "EMC 인수 가치 (VMware)", val: "$47B+",      note: "VMware 단독 시가총액 (2019)",     accent: true  },
    ],
    disclaimer: "최종 투자 수익률은 Dell/Silver Lake가 공개하지 않음. 시장 추정치 기반.",
  },

  rationale: {
    buyer: {
      title: "Michael Dell + Silver Lake 투자 논리",
      initials: "SL",
      bg: "bg-blue-900",
      points: [
        "공개 시장 저평가: PC 제조사 딱지로 EV/EBITDA 5×대 → 비상장 전환 후 재평가 기회",
        "비상장 = 전략적 자유: 분기 실적 발표 압박 없이 수익성을 희생하는 대형 인수 가능",
        "창업자 주도: 마이클 Dell의 75%+ 지분으로 장기 전략 실행 보장",
        "엔터프라이즈 전환 thesis: PC 쇠퇴 → 서버·클라우드·보안 포트폴리오로 수익 다각화",
        "Microsoft 전략적 대출: Windows 생태계 파트너십 강화 + 자금 조달 비용 절감",
      ],
    },
    seller: {
      title: "특별위원회 승인 논리",
      initials: "SPC",
      bg: "bg-gray-600",
      points: [
        "공시 전 종가 대비 25% 프리미엄 — 현재 주주에게 즉각적 가치 실현",
        "Carl Icahn 대안($15.65)은 실행 가능성 부족 — Fairness Opinion 통과 실패",
        "PC 시장 구조적 쇠퇴 → 장기 독립 유지 시 주가 회복 불투명",
        "마이클 Dell의 장기 전략 실행력 신뢰 — 창업자의 skin-in-the-game",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2018년 (재상장 기준)",
    body: "Take-Private 전략은 성공했다. 비상장 기간(2013-2018) Dell은 PC 의존도를 낮추고 서버·스토리지·보안 포트폴리오를 강화했다. 2016년 EMC $670억 인수로 스토리지 1위(EMC)와 가상화 1위(VMware)를 동시에 확보했다. 2018년 VMware 트래킹 스톡 교환을 통해 NYSE에 재상장 — 시총 ~$34B로 Take-Private 가격($24.9B)을 상회.",
    overallVerdict: "전략적 성공 — 비상장 기간 엔터프라이즈 전환 완성, 재상장 시 가치 상승",
    positives: [
      "EMC·VMware 인수로 엔터프라이즈 IT 풀스택 포트폴리오 완성",
      "PC 매출 의존도 ~50% → ~35% 이하로 감소",
      "VMware 가상화·클라우드 자산이 Dell 전체 가치의 핵심 드라이버로 부상",
      "2018년 재상장 시 시총 $34B+ — Take-Private 대비 40%+ 가치 증대",
    ],
    risks: [
      "EMC 인수로 부채 ~$50B — 이자 비용이 현금흐름 압박",
      "VMware 독립성 논란: Dell이 VMware를 통제함으로써 고객이 멀티클라우드 선택에 제약",
      "재상장 후 복잡한 자본구조(VMware 트래킹 스톡)가 투자자 이해를 어렵게 함",
    ],
    editorNote: "Dell Take-Private의 핵심 교훈: 비상장이 '도피'가 아니라 '전략적 변신'을 위한 수단으로 활용된 희귀한 사례다. 마이클 델의 75% 지분과 창업자 리더십이 없었다면 $670억 EMC 인수는 불가능했을 것이다. Take-Private의 가장 강력한 use case는 '공개 시장이 허용하지 않는 장기 변신'이다.",
  },

  tombstone: {
    acquirerInitials: "SL",
    acquirerBg: "bg-blue-900",
    targetInitials: "DELL",
    targetBg: "bg-blue-600",
    acquirerName: "Silver Lake + Michael Dell",
    targetName: "Dell Inc.",
    dealTitle: "Dell Take-Private",
    dealSize: "$249억",
    dealSizeUSD: "$24.9bn",
    evEbitda: "5.1×",
    closeDate: "2013년 10월",
  },

  sources: [
    { id: 1, text: "Dell Inc. (2013). Proxy Statement — Special Meeting of Stockholders. SEC Filing, February 2013." },
    { id: 2, text: "Dell Inc. (2013). Merger Completion Press Release. October 29, 2013." },
    { id: 3, text: "Wall Street Journal (2013). Michael Dell Wins Fight to Take Dell Private. September 2013." },
    { id: 4, text: "Bloomberg (2016). Dell to Buy EMC in Record $67 Billion Deal. October 2015." },
    { id: 5, text: "Dell Technologies (2018). Form 8-K — VMware Tracking Stock Transaction and NYSE Re-listing. December 2018." },
    { id: 6, text: "Harvard Business School (2014). Michael Dell's Buyout of Dell Inc. HBS Case 9-814-052." },
    { id: 7, text: "Reuters (2013). Carl Icahn Abandons Dell Fight After Buyout Vote. September 2013." },
    { id: 8, text: "Financial Times (2018). Dell Returns to Stock Market After Five Years. December 2018." },
  ],

  seo: {
    title: "Silver Lake × Dell Take-Private — 역대 최대 테크 상장폐지 $249억 완전 분석",
    description: "2013년 Dell $24.9B Take-Private 완전 해부. 마이클 Dell + Silver Lake 공동 인수, Carl Icahn 반대 극복, EMC $67B 인수, 2018년 NYSE 재상장까지. 테크 기업 상장폐지의 교과서.",
    keywords: [
      "Silver Lake", "Dell", "마이클델", "Take-Private", "상장폐지", "LBO",
      "테크LBO", "EMC", "VMware", "Carl Icahn", "PE", "사모펀드", "재상장",
    ],
  },

  concepts: [
    {
      term: "Take-Private (상장폐지 인수)",
      href: "/deal-101/lbo-overview",
      description: "상장 기업을 공개 매수해 비상장으로 전환하는 PE 인수 구조. 분기 실적 압박에서 벗어나 장기 구조조정·투자를 단행할 수 있다. Dell처럼 공개 시장이 저평가한 기업, 또는 대규모 전략 변신이 필요한 기업이 주요 대상.",
    },
    {
      term: "Fairness Opinion (공정성 의견서)",
      href: "/deal-101/ma-process",
      description: "이사회가 제안된 인수 가격이 주주에게 공정한지를 독립 금융자문사가 검증하는 의견서. Take-Private에서 이해충돌(경영진 = 인수자)이 있을 때 특별위원회가 반드시 독립 자문사의 Fairness Opinion을 받아야 한다.",
    },
    {
      term: "창업자 롤오버 (Founder Rollover)",
      href: "/deal-101/lbo-overview",
      description: "창업자가 기존 보유 지분을 현금화하지 않고 인수 후 새 법인의 에쿼티로 전환하는 구조. 마이클 Dell의 경우 $37억 지분을 롤오버해 75%+ 지분을 확보했다. 인수 자금 절감 + PE와 완벽한 목표 정렬 효과.",
    },
    {
      term: "VMware 트래킹 스톡",
      href: "/deal-101/spinoff",
      description: "특정 사업부(VMware)의 경제적 성과에 연동되는 특수 주식. Dell은 2018년 재상장 시 VMware 트래킹 스톡을 Dell 보통주와 교환하는 방식으로 NYSE에 재상장했다. IPO 없이 상장이 가능한 역공개(reverse merger) 방식.",
    },
    {
      term: "전략적 대출 (Strategic Loan)",
      href: "/deal-101/lbo-capital-structure",
      description: "일반 채권자가 아닌 전략적 파트너(대기업)가 LBO·Take-Private에 대출을 제공하는 구조. Microsoft의 $20억 대출은 단순 금융 지원이 아니라 Windows·Office 생태계에서 Dell 파트너십을 강화하는 전략적 목적도 있었다.",
    },
  ],

  faq: [
    {
      q: "마이클 Dell이 자신의 회사를 상장폐지하려 한 주된 이유는?",
      a: "마이클 Dell이 공개적으로 밝힌 이유는 세 가지입니다. 첫째, PC 쇠퇴 속에서 엔터프라이즈 솔루션으로 전환하려면 수년간의 대규모 투자와 수익성 희생이 필요한데, 공개 시장에서는 분기별 실적 발표 압박으로 이것이 불가능합니다. 둘째, 공개 시장이 Dell을 저평가하고 있어 Take-Private 후 재평가 기회가 있었습니다. 셋째, 창업자로서 본인의 장기 비전을 공개 주주의 단기 이익 요구와 타협하지 않고 실행하고 싶었습니다.",
    },
    {
      q: "Carl Icahn이 Take-Private에 반대한 이유와 결과는?",
      a: "Carl Icahn은 $13.65가 Dell의 진짜 가치보다 30%+ 낮다고 주장하며 $15.65 대안 제안을 냈습니다. Icahn의 전략은 레버드 리캡(leveraged recap)을 통해 주주에게 즉시 $12/주를 특별 배당하는 방식이었습니다. 그러나 특별위원회와 독립 자문사는 Icahn안의 부채 조달 실행 가능성에 의문을 제기했고, 최종 주주 투표에서 마이클 Dell 안이 통과됐습니다. Icahn은 승복했으나 이후에도 인수가가 낮았다고 주장했습니다.",
    },
    {
      q: "EMC $670억 인수가 Take-Private와 어떻게 연결되나요?",
      a: "비상장 환경이 결정적이었습니다. 상장사 Dell이 자기 시총($24B)의 2.5배인 $67B 인수를 단행하면 공개 시장의 극심한 반발과 주가 폭락이 불가피했을 겁니다. 비상장 덕분에 마이클 Dell은 분기별 시장 압박 없이 이사회와 은행을 설득해 딜을 성사시켰습니다. 이것이 Take-Private의 가장 강력한 사용 사례입니다.",
    },
    {
      q: "Dell Take-Private는 PE에게 성공적인 딜이었나요?",
      a: "Silver Lake 기준으로 성공적이었습니다. Silver Lake는 $14억 에쿼티 투자 후 2018년 재상장 시 시총 ~$34B의 일부를 회수했고, 이후 지속 매각해 MOIC 2-3×, IRR 15-20% 수준의 수익을 올린 것으로 추정됩니다. 단, EMC 인수로 부채가 크게 늘어 Dell의 재무 구조는 재상장 후에도 취약했습니다. '딜은 성공했지만 이후 부채 부담이 무거운' 결과였습니다.",
    },
  ],

  levfinOverview: {
    angle: "테크 Take-Private — 창업자 롤오버 + 전략적 대출로 에쿼티 비용을 낮춘 구조",
    body: "Dell Take-Private는 순수 PE LBO가 아닌 창업자 주도 Take-Private의 특수한 구조다. 마이클 Dell의 $37억 롤오버가 최대 에쿼티 출처였고, Silver Lake는 $14억의 소수 에쿼티로 딜에 참여했다. TLB ~$90억 + Microsoft 전략적 대출 $20억이 나머지를 충당했다. 테크 기업은 무형자산이 많아 담보 설정이 어렵고 TLB 조달이 제한적이므로, 창업자 롤오버가 레버리지 구조에서 핵심 역할을 했다.",
    tranches: [
      {
        name: "창업자 롤오버 (Michael Dell)",
        amountDisplay: "$3.7B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 15,
        color: "bg-blue-700",
      },
      {
        name: "Silver Lake 에쿼티",
        amountDisplay: "$1.4B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 6,
        color: "bg-blue-500",
      },
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "~$9.0B",
        rate: "LIBOR+350bps (변동)",
        maturity: "7년",
        seniority: "senior-secured",
        pct: 36,
        color: "bg-amber-500",
      },
      {
        name: "Microsoft 전략적 대출",
        amountDisplay: "$2.0B",
        rate: "우선주 전환 옵션",
        maturity: "5년",
        seniority: "senior-secured",
        pct: 8,
        color: "bg-green-500",
      },
    ],
    metrics: [
      { label: "딜 EV",               value: "$24.9B",  sub: "EV/EBITDA 5.1× — 저평가 진입", isAlert: false },
      { label: "EMC 추가 인수",        value: "$67B",   sub: "비상장 중 역대 최대 테크 M&A",  isAlert: false },
      { label: "재상장 시총 (2018)",   value: "~$34B",  sub: "Take-Private 가격 대비 +37%",   isAlert: false },
      { label: "창업자 롤오버 비율",   value: "~15%",   sub: "에쿼티 출처 1위 — PE 비용 절감", isAlert: false },
    ],
    lessons: [
      {
        icon: "🖥️",
        title: "테크 LBO의 특수성 — 무형자산 = 낮은 담보 = 제한된 레버리지",
        body: "호텔·소매처럼 실물자산이 많은 기업은 CMBS·ABL로 레버리지를 높일 수 있지만, 소프트웨어·브랜드 위주 테크 기업은 담보 설정이 어려워 TLB 조달이 제한적이다. Dell이 Entry Debt/EBITDA ~3×라는 낮은 레버리지를 쓴 것은 테크 기업 LBO의 구조적 특성을 반영한다.",
      },
      {
        icon: "🔄",
        title: "Take-Private → 전략 변신 → 재상장 — PE의 3단계 가치 창출",
        body: "Dell의 경우 ① 저평가된 공개 시장에서 Take-Private → ② 비상장 기간 엔터프라이즈 전환(EMC·VMware 인수) → ③ 변신 완성 후 재상장이라는 3단계를 완벽히 실행했다. 이 패턴이 성립하려면 창업자의 지속적 리더십이 핵심 조건이다.",
      },
      {
        icon: "🤝",
        title: "전략적 파트너 = 단순 LP 이상의 가치",
        body: "Microsoft의 $20억 대출은 금리뿐 아니라 Windows·Azure 에코시스템에서 Dell의 파트너십을 강화하는 전략적 의미가 있었다. PE 딜에서 단순 자금 제공자가 아닌 전략적 파트너를 LP/채권자로 끌어들이면 자본 비용 절감과 사업 시너지를 동시에 얻을 수 있다.",
      },
    ],
    relatedChapters: [
      {
        slug: "lbo-deal-process",
        chapterNum: "Ch.3",
        title: "LBO 딜 프로세스 & 리스크",
        whyRelevant: "Carl Icahn vs Michael Dell — 적대적 공개 매수 공방, 특별위원회, Fairness Opinion 프로세스",
      },
      {
        slug: "lbo-overview",
        chapterNum: "Ch.0",
        title: "LBO의 본질",
        whyRelevant: "창업자 주도 Take-Private — 비상장 전환의 전략적 동기와 PE 파트너십 구조",
      },
      {
        slug: "lbo-returns",
        chapterNum: "Ch.2",
        title: "LBO 리턴 분석",
        whyRelevant: "EMC 인수 가치 반영 후 MOIC 추정 — Take-Private에서 M&A 레이어가 더해지는 수익 구조",
      },
    ],
  },
};

export default deal;
