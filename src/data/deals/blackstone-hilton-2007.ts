/**
 * Blackstone × Hilton Hotels (2007–2018)
 * 역대 최고 호텔 LBO — 실물자산 + 오퍼레이션 개선의 교과서
 * Entry $26B → 2013 IPO → 2018 완전 회수 — IRR ~16.7%, MOIC ~2.6×
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "blackstone-hilton-2007",
  title: "블랙스톤은 어떻게 힐튼을 역대 최고 호텔 LBO로 만들었나",
  subtitle: "$260억 LBO → 금융위기 극복 → IRR 16.7%, MOIC 2.6× — 오퍼레이션 알파와 실물자산의 힘",
  category: "ma",
  industry: "호텔 / 부동산",
  country: "미국",
  announcedAt: "2007-07-03",
  closedAt: "2007-10-24",
  announcedDisplay: "2007년 7월",
  closedDisplay: "2007년 10월",
  readingMinutes: 12,
  tags: [
    "블랙스톤", "Blackstone", "힐튼", "Hilton", "LBO", "호텔", "부동산",
    "CMBS", "레버리지드론", "LevFin", "PE", "사모펀드", "IPO", "Exit", "IRR",
    "오퍼레이션알파", "RevPAR", "HiltonHonors",
  ],
  excerpt:
    "2007년 10월 Blackstone이 Hilton Hotels를 $260억에 LBO 인수했다. 직후 금융위기로 호텔 업황이 폭락했지만, Blackstone은 Christopher Nassetta를 CEO로 영입해 대규모 오퍼레이션 혁신을 단행했다. 2013년 역대 최대 호텔 IPO 이후 2018년 완전 회수 — IRR ~16.7%, MOIC ~2.6×. 실물자산 기반 LBO에서 경영 개선이 만들어낸 교과서적 성공.",

  acquirer: { initials: "BX", bg: "bg-gray-800", label: "Blackstone Group" },
  target:   { initials: "HLT", bg: "bg-yellow-600", label: "Hilton Hotels Corporation" },

  background: [
    "Hilton Hotels Corporation은 1919년 설립된 세계 최대 호텔 체인 중 하나로, 2007년 당시 Hilton, Doubletree, Embassy Suites, Hampton Inn 등 10개 브랜드와 전 세계 3,000여 개 호텔을 운영하고 있었다. 그러나 자산 매각(asset-heavy) 전략에서 자산 경량화(asset-light)로 전환이 더딘 상황이었다.",
    "Blackstone은 Hilton의 호텔 부동산 자산(약 $18B 상당)을 담보로 대규모 CMBS·TLB를 조달할 수 있는 구조에 주목했다. 또한 글로벌 호텔 시장이 RevPAR(객실 수익률) 기준으로 성장 국면에 있었고, Hilton은 경쟁사 Marriott 대비 운영 효율이 낮아 개선 여지가 컸다.",
    "Blackstone은 Host Hotels 출신 Christopher Nassetta를 신임 CEO로 내정하고 오퍼레이션 혁신 청사진을 가지고 딜에 임했다. $26B EV는 EV/EBITDA 15.8×로 당시 호텔 섹터 평균(12-13×)보다 높았지만, Blackstone은 부동산 가치 재평가와 운영 개선으로 충분히 정당화할 수 있다고 판단했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$260억",
    acquirerName: "Blackstone Group",
    targetName: "Hilton Hotels Corporation",
    announcedDisplay: "2007년 7월 3일",
    closedDisplay: "2007년 10월 24일",
    country: "미국 (NYSE: HLT → 비상장 → NYSE: HLT)",
  },

  executiveSummary: [
    "Blackstone이 Hilton Hotels를 $260억(EV/EBITDA 15.8×)에 LBO 인수 — 에쿼티 $57억, 부채 $205억.",
    "금융위기(2008) 직격 — RevPAR -25%, 호텔 자산 가치 급락. 그러나 Blackstone은 채권단과 협상으로 구조조정 없이 버텼다.",
    "CEO Nassetta 체제: RevPAR 경쟁사 대비 역전, Hilton Honors 회원 4,500만명 → 세계 최대 로열티 프로그램.",
    "2013년 12월 IPO — 역대 최대 호텔 IPO($2.35B 공모). Blackstone 보유 지분 76% 잔류.",
    "2018년 완전 회수 — IRR ~16.7%, MOIC ~2.6×. Blackstone 역대 최고 수익 딜 중 하나.",
  ],

  industryOverview: {
    body: "글로벌 호텔·숙박 시장은 경기 사이클에 민감한 반주기적 자산으로, RevPAR(Revenue Per Available Room)가 핵심 지표다. 2000년대 중반 미국 호텔 업황은 공급 과잉 없이 수요가 늘어나는 황금기였다. 호텔 기업들은 자산 직접 보유(asset-heavy) → 프랜차이즈+경영 위탁(asset-light)으로 전환 중이었으며, 이 과정에서 실물 부동산 자산을 담보로 대규모 CMBS 조달이 가능한 구조가 PE에게 매력적이었다.",
    metrics: [
      { label: "글로벌 호텔 시장 규모",   value: "~$7,000억", sub: "2007년 기준" },
      { label: "미국 RevPAR 성장률",       value: "+6.8%",    sub: "2006년 기준" },
      { label: "Entry EV/EBITDA",          value: "15.8×",    sub: "2007년 섹터 평균 12-13× 대비 프리미엄" },
      { label: "Hilton Honors 회원 (exit)", value: "4,500만+", sub: "2018년 기준, 세계 최대 호텔 로열티" },
    ],
    players: [
      { name: "Hilton (Blackstone)", role: "세계 최대 호텔 그룹, LBO 인수 대상" },
      { name: "Marriott International", role: "경쟁사 1위, RevPAR 기준 Hilton의 벤치마크" },
      { name: "Starwood Hotels", role: "W·Westin·Sheraton 브랜드, 고급 시장 경쟁자" },
      { name: "IHG (InterContinental)", role: "유럽계 호텔 그룹, 미주 시장 경쟁" },
    ],
  },

  companyOverview: {
    targetName: "Hilton Hotels Corporation",
    body: "1919년 콘래드 힐튼이 설립한 세계적 호텔 그룹. 2007년 당시 10개 브랜드, 2,800개 이상의 호텔과 480,000개 이상의 객실을 운영했다. Hilton, Doubletree, Embassy Suites, Hampton Inn, Hilton Garden Inn 등 다양한 가격대 브랜드 포트폴리오를 보유했으나, 직영(owned) 비율이 높아 자산 경량화(asset-light)가 늦었다. 인수 당시 RevPAR가 Marriott 대비 7% 낮았고, 로열티 프로그램(Hilton Honors) 회원 수도 경쟁사 대비 열세였다.",
    metrics: [
      { label: "LBO 딜 가치",            value: "$26B",      sub: "2007년 10월 클로징" },
      { label: "브랜드 수 (인수 시)",    value: "10개",      sub: "Hilton, Hampton, DoubleTree 등" },
      { label: "IPO 시가총액 (2013)",   value: "$19.7B",    sub: "공모가 $20/주 기준" },
      { label: "최종 회수 가치",         value: "~$14.8B",  sub: "에쿼티 기준, 총 $26B+ 회수" },
    ],
    financials: [
      {
        year: "FY2006",
        revenue: 7930,
        cogs: 5210,
        grossProfit: 2720,
        sga: 1080,
        operatingIncome: 1640,
        ebitda: 1640,
      },
      {
        year: "FY2007",
        revenue: 8162,
        cogs: 5355,
        grossProfit: 2807,
        sga: 1090,
        operatingIncome: 1717,
        ebitda: 1717,
      },
      {
        year: "FY2010",
        revenue: 8975,
        cogs: 5760,
        grossProfit: 3215,
        sga: 1090,
        operatingIncome: 2125,
        ebitda: 2125,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2010은 금융위기 이후 RevPAR 회복 반영. EBITDA 성장이 레버리지 부담을 점진적으로 해소. 호텔 자산 가치도 동반 회복.",
  },

  dealStructure: {
    body: "호텔 부동산($18B+)을 담보로 CMBS $50억과 TLB $148억을 조달하는 자산 담보 기반 구조. 에쿼티 $57억(~22%)으로 전체 $260억 EV를 지탱. 호텔 LBO 특유의 CMBS + TLB 혼합 구조.",
    preOwnership: {
      nodes: [
        { id: "public",  label: "공개 시장 주주",    sub: "NYSE: HOT, 분산 주주구조",   type: "entity" },
        { id: "hilton",  label: "Hilton Hotels",     sub: "2,800개+ 호텔, 10개 브랜드", type: "target" },
      ],
      edges: [
        { from: "public", to: "hilton", label: "상장 주식 100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bx",      label: "Blackstone",       sub: "에쿼티 $57억 (~22%)",        type: "fund"   },
        { id: "tlb",     label: "TLB 대주단",        sub: "$148억 (L+300bps, 1L 담보)", type: "entity" },
        { id: "cmbs",    label: "CMBS 투자자",       sub: "$50억 (호텔 부동산 담보)",   type: "entity" },
        { id: "hy",      label: "HY 채권자",         sub: "$15억 (8.875% 무담보)",      type: "entity" },
        { id: "hilton2", label: "Hilton Hotels",     sub: "비상장 (Blackstone 소유)",   type: "target" },
      ],
      edges: [
        { from: "bx",   to: "hilton2", label: "에쿼티 22%" },
        { from: "tlb",  to: "hilton2", label: "TLB $148억 (1L)" },
        { from: "cmbs", to: "hilton2", label: "CMBS $50억 (부동산 담보)" },
        { from: "hy",   to: "hilton2", label: "HY Notes $15억 (무담보)" },
      ],
    },
    keyTerms: [
      { label: "딜 가치",           value: "$26B (EV/EBITDA 15.8×)",            accent: true  },
      { label: "TLB 금리",          value: "LIBOR+300bps (변동, 1순위 담보)",    accent: false },
      { label: "CMBS",              value: "$5.0B (호텔 부동산 모기지 담보)",    accent: true  },
      { label: "HY Senior Notes",   value: "$1.5B, 8.875% 고정",                accent: false },
      { label: "에쿼티 기여",       value: "$5.7B (~22%) — 고레버리지 구조",    accent: true  },
    ],
  },

  advisors: {
    body: "Blackstone은 Goldman Sachs·Deutsche Bank·Bear Stearns 등 월스트리트 최정예 어레인저를 구성했다. Hilton 이사회는 Lazard를 통해 복수 경쟁 입찰을 진행했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Blackstone (인수자)",
        initials: "BX",
        bg: "bg-gray-800",
        advisors: [
          { firm: "Simpson Thacher & Bartlett", role: "법률 자문",           roleType: "legal",     note: "LBO 구조 설계" },
          { firm: "Goldman Sachs",              role: "수석 어레인저",       roleType: "financial", note: "TLB·HY 공동 주관" },
          { firm: "Deutsche Bank",              role: "공동 어레인저",       roleType: "financial", note: "CMBS 구조화" },
          { firm: "Bear Stearns",               role: "공동 어레인저",       roleType: "financial", note: "신디케이션 공동" },
        ],
      },
      {
        side: "target",
        sideLabel: "Hilton Hotels (매각 측)",
        initials: "HLT",
        bg: "bg-yellow-600",
        advisors: [
          { firm: "Lazard",              role: "재무 자문",  roleType: "financial", note: "경쟁 입찰 프로세스 관리" },
          { firm: "Skadden Arps",        role: "법률 자문", roleType: "legal",     note: "이사회 M&A 자문" },
        ],
      },
    ],
  },

  valuation: {
    body: "Blackstone은 Hilton의 호텔 부동산 자산 가치 재평가와 RevPAR 개선 thesis를 근거로 EV/EBITDA 15.8×의 프리미엄 가격을 정당화했다. Exit 시 EV/EBITDA는 ~14×로 Multiple Contraction이었지만, EBITDA 3배 성장이 이를 상쇄했다.",
    rows: [
      { item: "Entry EV",              val: "$26.0B",   note: "2007년 10월",                    accent: true  },
      { item: "Entry EV/EBITDA",       val: "15.8×",    note: "FY2006 EBITDA $1.64B 기준",      accent: false },
      { item: "Entry Debt/EBITDA",     val: "~12×",     note: "GFC 직후 리스크 요인",            accent: true  },
      { item: "Exit 시가총액 (2018)",   val: "~$30B",   note: "완전 엑싯 시점 기준",             accent: true  },
      { item: "에쿼티 회수 (추정)",    val: "~$14.8B",  note: "IPO + 블록딜 합산",              accent: false },
    ],
    disclaimer: "IRR·MOIC는 시장 추정치. Blackstone 공식 발표 기준이 아님. 호텔 부동산 자산 재평가 포함.",
  },

  rationale: {
    buyer: {
      title: "Blackstone 투자 논리",
      initials: "BX",
      bg: "bg-gray-800",
      points: [
        "호텔 부동산 $18B+ — CMBS·TLB 담보로 대규모 레버리지 가능한 자산 기반",
        "RevPAR 격차: Hilton이 Marriott 대비 7% 낮음 — 오퍼레이션 개선 여지 명확",
        "Hilton Honors: 경쟁사 대비 열세 — 재건하면 직접 예약 비율 대폭 향상",
        "CEO 내정: Christopher Nassetta(Host Hotels 출신) 영입 후 인수 — 실행 가능성 확보",
        "글로벌 확장: 아시아·중동 신규 시장 진출로 프랜차이즈 수수료 증대",
      ],
    },
    seller: {
      title: "Hilton 이사회 수용 논리",
      initials: "HLT",
      bg: "bg-yellow-600",
      points: [
        "공모가 대비 40% 프리미엄($47.50/주) — 주주 가치 극대화",
        "비상장 전환으로 오퍼레이션 혁신(CEO 교체, 구조조정)을 분기 실적 압박 없이 추진",
        "Blackstone의 부동산 운용 전문성: 실물자산 포트폴리오 최적화 기대",
        "글로벌 PE 네트워크를 통한 국제 확장 지원",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2018년 (완전 회수 기준)",
    body: "Blackstone × Hilton은 PE 역사상 가장 성공적인 호텔 LBO로 평가받는다. 인수 직후 금융위기라는 최악의 시장 환경을 겪었지만, 강력한 오퍼레이션 개선과 채권단과의 유연한 협상으로 파산을 피하고 완전 회복했다. 2013년 IPO부터 2018년 완전 엑싯까지 총 IRR ~16.7%, MOIC ~2.6×를 기록했으며, 이는 Blackstone 역사상 최고 수익 딜 중 하나다.",
    overallVerdict: "역대 최고 호텔 LBO — 오퍼레이션 알파 + 부동산 가치 회복의 완벽한 조합",
    positives: [
      "Nassetta CEO 체제에서 RevPAR를 Marriott 대비 7% 열세 → 역전",
      "Hilton Honors 회원 수 인수 시 대비 3배+ 성장 → 직접 예약 비율 향상으로 수수료 절감",
      "자산 경량화(asset-light) 전환: 직영 호텔 매각 + 프랜차이즈·경영 위탁 전환으로 EBITDA 마진 개선",
      "2013년 IPO — 공모가 $20, 시총 $19.7B. 역대 최대 호텔 IPO 기록",
    ],
    risks: [
      "금융위기(2008) 직후 RevPAR -25%, 호텔 자산 가치 급락 → 실질 LTV가 대폭 상승",
      "높은 Entry 레버리지(Debt/EBITDA ~12×)가 GFC 기간 중 재무적 완충력을 크게 약화",
      "CMBS 만기 도래 시 리파이낸싱 리스크 — 금융위기 중 CMBS 시장 동결",
    ],
    editorNote: "Hilton 케이스의 핵심 교훈: 과잉 레버리지(Debt/EBITDA ~12×)도 ① 담보 자산 가치가 충분하고 ② 채권단과의 관계 관리가 잘 되고 ③ 오퍼레이션 개선으로 EBITDA가 회복되면 극복할 수 있다. Blackstone은 채권단 설득과 CEO 인사를 통해 최악의 시기를 버텨냈다.",
  },

  tombstone: {
    acquirerInitials: "BX",
    acquirerBg: "bg-gray-800",
    targetInitials: "HLT",
    targetBg: "bg-yellow-600",
    acquirerName: "Blackstone Group",
    targetName: "Hilton Hotels Corporation",
    dealTitle: "Blackstone × Hilton LBO",
    dealSize: "$260억",
    dealSizeUSD: "$26bn",
    evEbitda: "15.8×",
    closeDate: "2007년 10월",
  },

  sources: [
    { id: 1, text: "Blackstone Group (2007). Hilton Hotels Corporation — Merger Agreement. July 2007." },
    { id: 2, text: "Hilton Hotels Corporation (2007). Proxy Statement — Special Meeting of Stockholders. SEC Filing." },
    { id: 3, text: "Hilton Worldwide Holdings (2013). Form S-1 — Initial Public Offering. NYSE: HLT. October 2013." },
    { id: 4, text: "Wall Street Journal (2018). Blackstone Completes Sale of Hilton Stake, Booking $14 Billion Profit. May 2018." },
    { id: 5, text: "Bloomberg (2018). Blackstone's Hilton Investment Becomes Most Profitable PE Hotel Deal in History." },
    { id: 6, text: "Harvard Business School (2014). Blackstone and Hilton Worldwide. HBS Case 9-814-031." },
    { id: 7, text: "Moody's (2007). Hilton Hotels Corporation — Rating Action on LBO Debt. October 2007." },
    { id: 8, text: "STR Global (2014). US Hotel Industry RevPAR Report 2008–2013." },
  ],

  seo: {
    title: "Blackstone × Hilton LBO — 역대 최고 호텔 PE 딜 IRR 16.7% 완전 해부",
    description: "2007년 Blackstone의 Hilton Hotels $260억 LBO 완전 분석. Entry 15.8×, 금융위기 극복, Nassetta CEO 오퍼레이션 혁신, 2013년 역대 최대 호텔 IPO, IRR ~16.7% MOIC ~2.6× 달성까지.",
    keywords: [
      "블랙스톤", "Blackstone", "힐튼", "Hilton", "LBO", "호텔", "CMBS",
      "레버리지드론", "PE", "사모펀드", "IRR", "MOIC", "RevPAR",
      "오퍼레이션알파", "Christopher Nassetta", "Hilton Honors",
    ],
  },

  concepts: [
    {
      term: "CMBS (상업용 부동산 저당증권)",
      href: "/market-101/levfin-hy-vs-loans",
      description: "상업용 부동산(호텔·오피스·쇼핑몰) 모기지를 담보로 발행하는 증권화 상품. LBO에서 실물자산이 많은 기업을 인수할 때 TLB와 병행해 조달한다. Hilton의 경우 호텔 부동산 $18B+를 담보로 CMBS $50억을 발행했다.",
    },
    {
      term: "RevPAR (객실 수익률)",
      href: "/market-101/levfin-credit-metrics",
      description: "Revenue Per Available Room. 호텔 산업의 핵심 성과 지표로, 객실 점유율 × 평균 객실 단가(ADR)로 계산. LBO 투자 thesis에서 RevPAR 개선이 EBITDA 성장의 핵심 레버.",
    },
    {
      term: "자산 경량화 (Asset-Light) 전략",
      href: "/deal-101/lbo-overview",
      description: "호텔·레스토랑 체인이 직접 부동산을 소유하는 대신, 프랜차이즈·경영 위탁으로 전환하는 전략. 자본 효율성을 높이고 경기 하락 시 손실을 가맹점에 분산. Blackstone이 Hilton에서 실행한 핵심 전략.",
    },
    {
      term: "Management Incentive Pool (MIP)",
      href: "/deal-101/lbo-overview",
      description: "PE 바이아웃에서 경영진에게 Exit 수익의 일부를 귀속시켜 PE 목표와 정렬하는 인센티브 구조. Hilton CEO Nassetta는 MIP를 통해 2018년 엑싯 시 수억 달러의 보상을 받았다.",
    },
    {
      term: "Exit Multiple (엑싯 배수)",
      href: "/deal-101/lbo-returns",
      description: "PE가 보유 지분을 매각할 때 적용받는 EV/EBITDA 배수. Entry Multiple 대비 높으면 Multiple Expansion(수익 증폭), 낮으면 Contraction. Hilton은 Entry 15.8× → Exit 14×로 Contraction이었지만, EBITDA 3배 성장이 이를 상쇄했다.",
    },
  ],

  faq: [
    {
      q: "Blackstone이 금융위기에도 Hilton을 파산시키지 않은 이유는?",
      a: "세 가지 요인이 결정적이었습니다. 첫째, 호텔 부동산이라는 실물자산($18B+)이 최후의 담보로 기능했습니다. 둘째, Blackstone은 채권단과 사전에 협상해 CMBS 만기 연장과 TLB 조건 완화를 이끌어냈습니다. 셋째, Nassetta CEO 체제에서 비용 절감과 RevPAR 개선이 진행돼 2009-2010년에도 EBITDA가 유지됐습니다. 2009년 EBITDA는 전년 대비 감소했지만, 이자 비용을 커버하기에는 충분했습니다.",
    },
    {
      q: "Hilton IPO는 왜 2009년이 아닌 2013년에 이루어졌나요?",
      a: "2009-2011년은 호텔 업황 회복이 진행 중이었고, RevPAR가 아직 최고점에 이르지 못했습니다. Blackstone은 ① RevPAR가 Marriott를 역전하고 ② Hilton Honors 회원이 대폭 증가하고 ③ 자산 경량화 전환이 가시화된 시점인 2013년을 IPO 타이밍으로 선택했습니다. 이 '성장 스토리 완성 시점' 엑싯 전략이 최고 공모가를 가능하게 했습니다.",
    },
    {
      q: "Hilton LBO에서 CMBS가 TLB와 어떻게 역할이 다른가요?",
      a: "TLB는 회사(Hilton 법인) 현금 흐름을 담보로 발행된 변동금리 대출로, 주로 CLO·헤지펀드 등 기관투자자에게 신디케이트됩니다. CMBS는 개별 호텔 부동산을 담보로 발행된 증권화 상품으로, 부동산 가치가 충분하면 낮은 금리로 조달이 가능합니다. Hilton처럼 대규모 부동산 포트폴리오를 보유한 호텔 LBO에서는 CMBS를 통해 TLB 의존도를 줄이고 전체 부채 비용을 낮출 수 있습니다.",
    },
    {
      q: "Blackstone Hilton 딜의 MOIC 2.6×와 IRR 16.7%가 낮아 보이는데, 왜 역대 최고라고 하나요?",
      a: "절대 수치만 보면 낮게 느껴질 수 있지만 두 가지 맥락이 중요합니다. 첫째, 투자 원금이 $57억이었고 회수액은 ~$148억으로 절대 이익이 $90억+입니다. 둘째, 11년 보유 기간 중 금융위기를 포함한 최악의 시장 환경을 극복한 성과입니다. 당시 2005-2007 빈티지 LBO 평균 IRR이 5-8%였음을 감안하면, Hilton의 16.7%는 동기간 대비 압도적입니다. Dollar General의 70% IRR은 6년, Hilton은 11년이라는 차이도 있습니다.",
    },
  ],

  levfinOverview: {
    angle: "실물자산 담보 LBO — CMBS + TLB 혼합 구조가 고레버리지를 가능하게 한 방법",
    body: "Hilton LBO는 호텔 부동산 자산을 담보로 CMBS $50억과 TLB $148억을 혼합한 구조다. 일반 기업 LBO가 EBITDA 5-7× 레버리지에 그치는 것과 달리, 실물자산이 풍부한 호텔 LBO에서는 12× 레버리지가 가능했다. 그러나 금융위기로 RevPAR -25%, 자산 가치 급락 → CMBS 리파이낸싱 리스크 현실화 → 채권단 협상 → 위기 극복으로 이어진 사례는 자산 담보 LBO의 양면을 모두 보여준다.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "$14.8B",
        rate: "LIBOR+300bps (변동)",
        maturity: "7년",
        seniority: "senior-secured",
        pct: 57,
        color: "bg-yellow-500",
      },
      {
        name: "CMBS (호텔 부동산 담보)",
        amountDisplay: "$5.0B",
        rate: "LIBOR+175bps (변동)",
        maturity: "5년",
        seniority: "senior-secured",
        pct: 19,
        color: "bg-amber-400",
      },
      {
        name: "HY Senior Notes",
        amountDisplay: "$1.5B",
        rate: "8.875% (고정)",
        maturity: "10년",
        seniority: "senior-unsecured",
        pct: 6,
        color: "bg-orange-500",
      },
      {
        name: "에쿼티 (Blackstone)",
        amountDisplay: "$5.7B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 22,
        color: "bg-gray-600",
      },
    ],
    metrics: [
      { label: "Entry Debt/EBITDA",  value: "~12×",    sub: "자산 담보로 고레버리지 가능",        isAlert: true  },
      { label: "EBITDA 성장",        value: "3배+",    sub: "2007→2017, 오퍼레이션 알파",          isAlert: false },
      { label: "IRR",                value: "~16.7%",  sub: "11년 보유, 2007-2018",                isAlert: false },
      { label: "MOIC",               value: "~2.6×",   sub: "절대 이익 $90억+",                   isAlert: false },
    ],
    lessons: [
      {
        icon: "🏨",
        title: "실물자산 = 레버리지 확장기 — CMBS의 역할",
        body: "일반 기업 LBO의 담보는 '미래 현금흐름(EBITDA)'이지만, 호텔 LBO는 '현재 부동산 자산 가치'가 추가 담보로 작동한다. CMBS를 통해 TLB 이상의 레버리지를 낮은 금리로 조달할 수 있었고, 이것이 Blackstone이 $26B EV에 $5.7B 에쿼티만으로 딜을 할 수 있었던 이유다.",
      },
      {
        icon: "👔",
        title: "CEO 인사가 LBO 성패를 가른다",
        body: "Blackstone은 딜 클로징 전에 이미 Nassetta CEO를 내정했다. 그의 임기 동안 RevPAR는 Marriott를 역전했고, Hilton Honors는 세계 최대 호텔 로열티 프로그램이 됐다. LBO에서 '경영진 교체'는 선택이 아니라 가치 창출의 핵심 레버임을 보여준다.",
      },
      {
        icon: "📉",
        title: "고레버리지 생존 방정식 — 채권단 관계 관리",
        body: "Debt/EBITDA ~12×는 GFC 기간 중 '생존 불가' 수준처럼 보였지만, Blackstone은 채권단과의 관계를 통해 CMBS 만기 연장과 조건 완화를 이끌어냈다. PE의 대형 기관 투자자 네트워크와 협상력이 파산을 막는 결정적 역할을 했다.",
      },
    ],
    relatedChapters: [
      {
        slug: "lbo-capital-structure",
        chapterNum: "Ch.1",
        title: "LBO 자본구조 해부",
        whyRelevant: "CMBS $50억 + TLB $148억 혼합 구조 — 실물자산 기반 고레버리지 LBO의 교과서",
      },
      {
        slug: "lbo-returns",
        chapterNum: "Ch.2",
        title: "LBO 리턴 분석",
        whyRelevant: "EBITDA 3배 성장 + 11년 보유 — IRR 16.7%, MOIC 2.6×의 수익 드라이버 분해",
      },
      {
        slug: "lbo-overview",
        chapterNum: "Ch.0",
        title: "LBO의 본질",
        whyRelevant: "Hilton vs TXU — 같은 해(2007) 실행된 성공과 실패 LBO의 극명한 대비",
      },
    ],
  },
};

export default deal;
