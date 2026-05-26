/**
 * AT&T 미디어 제국 철수 — WarnerMedia 분사 + DirecTV 매각
 * 구조조정 — $750억+ 손실, M&A 역사상 최대 전략 실수 중 하나
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "att-warnemedia-divestiture",
  title: "AT&T는 왜 $750억을 버리고 미디어 제국에서 철수했나 — WarnerMedia 분사·DirecTV 매각 완전 해부",
  subtitle: "코드커팅·스트리밍 경쟁·$1,700억 부채 — 통신+미디어 수직통합 신화의 붕괴와 통신 순수 플레이어 복귀",
  category: "restructuring",
  industry: "통신·미디어 / Telecom & Media",
  country: "미국",
  announcedAt: "2021-02-25",
  closedAt: "2022-04-08",
  announcedDisplay: "2021년 2월",
  closedDisplay: "2022년 4월",
  readingMinutes: 12,
  tags: ["AT&T", "WarnerMedia", "DirecTV", "구조조정", "미디어 실패", "부채", "역분사", "Discovery", "Warner Bros. Discovery", "코드커팅"],
  excerpt:
    "AT&T는 2015년 DirecTV $490억, 2018년 Time Warner $854억 인수로 $1,300억+ 미디어 제국을 쌓았다. 그러나 코드커팅(위성TV 가입자 급감), Netflix·Disney+의 스트리밍 공세, $1,700억 순부채 압박에 무너지며 2022년 WarnerMedia를 Discovery와 합병해 Warner Bros. Discovery를 탄생시키고 사실상 철수했다. DirecTV는 $160억 평가로 일부 매각(2015년 인수가 $490억). 확인 가능한 손실만 $750억+로 M&A 역사상 최대 전략 실수 중 하나다.",

  acquirer: { initials: "AT&T", bg: "bg-blue-600", label: "AT&T Inc." },
  target: { initials: "WMD", bg: "bg-blue-900", label: "WarnerMedia (분리 자산)" },

  background: [
    "AT&T의 미디어 투자는 2015년 DirecTV 인수($490억)로 시작됐다. 미국 최대 위성TV 사업자를 품어 콘텐츠 유통 채널을 확보하겠다는 전략이었다. 2018년에는 HBO, CNN, Warner Bros.를 보유한 Time Warner를 $854억에 인수하며 미디어 제국 건설을 완성했다. 합산 미디어 투자 $1,300억+, 순부채 $1,700억+의 대형 복합기업이 탄생했다.",
    "그러나 전략의 핵심 가정은 빠르게 무너졌다. 코드커팅(케이블·위성TV 해지) 현상이 가속화되면서 DirecTV 가입자는 2015년 3,200만 명에서 2022년 1,500만 명으로 절반 이하로 줄었다. Netflix와 Disney+는 스트리밍 시장을 장악해 나갔고, HBO Max는 $1,700억 부채 부담 속에서 투자를 충분히 할 수 없는 후발주자였다. '통신 파이프+미디어 콘텐츠 수직통합'이라는 콘버전스 신화는 인터넷 시대에 작동하지 않았다.",
    "2020년 취임한 John Stankey CEO는 구조조정의 불가피성을 인정했다. 투자자들은 AT&T에 통신 순수 플레이어(Pure Play)로의 복귀를 강력히 요구했고, 신용평가사들은 $1,700억 부채에 대한 우려를 경고했다. 2021년 2월 DirecTV 지분 30%를 TPG Capital에 $160억 평가로 매각하며 구조조정의 신호탄을 쏘았고, 같은 해 5월 WarnerMedia와 Discovery의 합병 계획을 발표했다.",
    "2022년 4월 8일 WarnerMedia-Discovery 합병이 완료되며 Warner Bros. Discovery(WBD)가 탄생했다. AT&T는 $430억 현금·부채 경감을 수령했고 WBD 지분 71%를 보유했다. AT&T 주주들은 WBD 주식 0.241주/AT&T 1주를 수령했으나, AT&T 자체 주가는 $40+(2016년) 대비 $18-20(2022년)으로 반토막났고 배당도 46% 삭감됐다. 확인 가능한 손실만 DirecTV $330억 + WarnerMedia $424억 = $750억+에 달한다.",
  ],

  dealSummary: {
    dealValueDisplay: "$430억 수령 (WarnerMedia 분사) + DirecTV 부분 매각",
    acquirerName: "AT&T Inc. (구조조정 주체)",
    targetName: "WarnerMedia (분리 자산) + DirecTV (부분 매각)",
    announcedDisplay: "2021년 2월 (DirecTV 매각 발표)",
    closedDisplay: "2022년 4월 (WarnerMedia 분사 완료)",
    country: "미국",
  },

  executiveSummary: [
    "2015년 DirecTV $490억 + 2018년 Time Warner $854억 = $1,300억+ 미디어 제국 건설, 순부채 $1,700억+",
    "코드커팅 가속 + Netflix·Disney+ 공세 + 부채 압박 — 콘버전스(통신+미디어 수직통합) 신화 붕괴",
    "2021년 DirecTV 30% 지분 TPG Capital에 $160억 평가 매각 ($490억 인수가 대비 -$330억)",
    "2022년 4월 WarnerMedia+Discovery 합병 → Warner Bros. Discovery 출범. AT&T $430억 수령 ($854억 인수가 대비 -$424억)",
    "확인 가능한 손실 합산: DirecTV $330억 + WarnerMedia $424억 = $750억+. AT&T 주가 $40+ → $18-20, 배당 46% 삭감",
    "구조조정 결과: AT&T 순부채 $1,700억 → $1,270억 감소, 통신 순수 플레이어 복귀 선언",
    "M&A 역사에서 가장 큰 규모의 전략 실수 중 하나로 기록됨",
  ],

  industryOverview: {
    body: "2010년대 미국 통신·미디어 산업은 '콘버전스(Convergence)' 열풍이 지배했다. 통신사가 콘텐츠를 수직통합하면 고객 묶음(Bundling)으로 이탈을 막고 광고 수익을 극대화할 수 있다는 논리였다. Comcast-NBCUniversal 합병(2011)이 이 모델의 선례를 만들었다. 그러나 스마트폰 보급과 인터넷 속도 향상으로 소비자들은 어느 통신사 파이프든 통해 원하는 콘텐츠를 소비하게 됐고, 콘텐츠-파이프 번들의 차별화는 급격히 약화됐다.",
    metrics: [
      { label: "미국 유료 TV(케이블·위성) 가입자", value: "약 7,000만 명", sub: "2022년 기준 (2015년 대비 -30%)" },
      { label: "Netflix 글로벌 구독자", value: "2억 2,000만 명+", sub: "2022년 기준" },
      { label: "AT&T 순부채 (구조조정 전)", value: "$1,700억", sub: "글로벌 통신사 중 최고 수준" },
      { label: "미국 스트리밍 시장 규모", value: "약 $600억", sub: "2022년 기준, 연 15%+ 성장" },
    ],
    subBody: "코드커팅은 단순한 트렌드가 아닌 구조적 변화였다. 미국 가구의 케이블·위성TV 해지율은 매 분기 수백만 명 수준으로 가속됐다. Netflix·Disney+·HBO Max·Peacock 등 10개 이상의 스트리밍 서비스가 경쟁하는 '스트리밍 전쟁'이 심화됐고, 콘텐츠 투자 규모가 승패를 결정하는 구조에서 $1,700억 부채를 짊어진 AT&T는 HBO Max에 충분히 투자할 여력이 없었다.",
    players: [
      { name: "AT&T", role: "통신 1위, WarnerMedia·DirecTV 보유 후 구조조정 주체" },
      { name: "Warner Bros. Discovery (WBD)", role: "WarnerMedia+Discovery 합병 법인, HBO Max 운영" },
      { name: "Netflix", role: "스트리밍 선두, $1,700억 콘텐츠 생태계 보유" },
      { name: "Disney+", role: "Marvel·Star Wars 콘텐츠로 출시 2년 만에 1억 명+ 구독자" },
      { name: "TPG Capital", role: "DirecTV 30% 지분 인수, 위성TV 구조조정 파트너" },
      { name: "Discovery", role: "리얼리티·다큐 콘텐츠 전문, WarnerMedia 합병 파트너" },
    ],
  },

  companyOverview: {
    targetName: "AT&T 미디어 사업부 (WarnerMedia + DirecTV)",
    body: "AT&T는 미국 최대 통신사 중 하나로, 2015년 DirecTV 인수와 2018년 Time Warner 인수로 통신+미디어+위성TV를 아우르는 복합 미디어·통신 기업이 됐다. WarnerMedia는 HBO(Game of Thrones, Succession 등), CNN, Warner Bros. 영화·TV 스튜디오, DC Comics 지식재산권(IP)을 보유한 세계 최대 미디어 그룹 중 하나였다. DirecTV는 위성TV 가입자 기준 미국 최대 유료 TV 사업자였다.",
    metrics: [
      { label: "AT&T 통신 가입자", value: "약 1억 명+", sub: "무선·유선 합산, 2021년 기준" },
      { label: "DirecTV 가입자 (2015년)", value: "3,200만 명", sub: "인수 당시 미국 최대" },
      { label: "DirecTV 가입자 (2022년)", value: "1,500만 명", sub: "코드커팅으로 절반 이하 감소" },
      { label: "AT&T 순부채 (구조조정 전)", value: "$1,700억", sub: "DirecTV+WarnerMedia 인수 결과" },
      { label: "WarnerMedia 브랜드", value: "HBO·CNN·Warner Bros.·DC", sub: "인수 당시 기준" },
    ],
    financials: [
      { year: "FY2020", revenue: 1718, cogs: 1100, grossProfit: 618, sga: 200, operatingIncome: 43, ebitda: 180 },
      { year: "FY2021", revenue: 1684, cogs: 1080, grossProfit: 604, sga: 195, operatingIncome: 28, ebitda: 170 },
    ],
    financialsNote: "단위: 억 달러(USD). AT&T 미디어 사업부(WarnerMedia + DirecTV) 기준 추정치. AT&T 연결 기준과 다를 수 있음.",
    financialsCurrency: "USD",
    financialsUnit: "억",
    revenueBreakdown: [
      { name: "WarnerMedia (HBO·CNN·Warner Bros.)", pct: 55, color: "bg-blue-900", amt: "약 $350억+" },
      { name: "DirecTV (위성TV·광고)", pct: 45, color: "bg-blue-600", amt: "약 $280억+" },
    ],
  },

  dealStructure: {
    body: "AT&T의 구조조정은 두 개의 독립적 거래로 구성됐다. 첫째, 2021년 2월 DirecTV 지분 30%를 TPG Capital에 현금 매각해 DirecTV를 AT&T-TPG 합작법인으로 운영하는 구조로 전환했다. 둘째, 2022년 4월 WarnerMedia를 Discovery와 합병해 Warner Bros. Discovery(WBD)를 출범시켰다. AT&T는 합병 대가로 $430억 현금·부채 경감을 수령하고 WBD 지분 71%를 보유했으며, AT&T 주주에게는 WBD 주식 0.241주/AT&T 1주가 배분됐다.",
    preOwnership: {
      nodes: [
        { id: "att", label: "AT&T Inc.", sub: "NYSE 상장 (T), 미국 최대 통신사", type: "acquirer" },
        { id: "warnemedia", label: "WarnerMedia", sub: "HBO·CNN·Warner Bros., AT&T 100% 자회사", type: "target" },
        { id: "directv", label: "DirecTV", sub: "위성TV, AT&T 100% 자회사", type: "target" },
        { id: "discovery", label: "Discovery Inc.", sub: "NASDAQ 상장, 리얼리티·다큐 미디어", type: "entity" },
      ],
      edges: [
        { from: "att", to: "warnemedia", label: "100%" },
        { from: "att", to: "directv", label: "100%" },
        { from: "discovery", to: "warnemedia", label: "합병 협상 중" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "att_post", label: "AT&T Inc.", sub: "통신 순수 플레이어, NYSE (T)", type: "acquirer" },
        { id: "wbd", label: "Warner Bros. Discovery", sub: "NASDAQ: WBD, 독립 미디어기업", type: "public" },
        { id: "directv_jv", label: "DirecTV (합작법인)", sub: "AT&T 70% + TPG 30%", type: "entity" },
      ],
      edges: [
        { from: "att_post", to: "wbd", label: "71% → 단계적 처분" },
        { from: "att_post", to: "directv_jv", label: "70% 보유" },
      ],
    },
    keyTerms: [
      { label: "DirecTV 매각", value: "30% 지분 TPG Capital 매각, $160억 평가 (2021.2)", accent: false },
      { label: "WarnerMedia 분사 대가", value: "$430억 현금·부채 경감 수령 (2022.4)", accent: true },
      { label: "AT&T 주주 배분", value: "WBD 주식 0.241주 / AT&T 1주", accent: false },
      { label: "WBD 초기 AT&T 지분", value: "71% (이후 단계적 처분)", accent: false },
      { label: "AT&T 순부채 변화", value: "$1,700억 → $1,270억 (구조조정 후)", accent: true },
      { label: "DirecTV 손실", value: "$490억 인수가 → $160억 평가 (-$330억)", accent: false },
      { label: "WarnerMedia 손실", value: "$854억 인수가 → $430억 수령 (-$424억)", accent: false },
      { label: "합산 확인 손실", value: "$750억+ (DirecTV $330억 + WM $424억)", accent: true },
      { label: "거래 완료일", value: "2022년 4월 8일 (WarnerMedia 분사)", accent: false },
    ],
  },

  advisors: {
    body: "AT&T의 대규모 구조조정에는 주요 투자은행과 법무 자문사가 참여했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "구조조정 주체 (AT&T)",
        initials: "AT&T",
        bg: "bg-blue-600",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "WarnerMedia-Discovery 합병 구조 자문" },
          { firm: "JPMorgan", role: "재무 자문 (FA)", roleType: "financial", note: "DirecTV 매각 자문" },
          { firm: "Debevoise & Plimpton", role: "법률 자문", roleType: "legal", note: "M&A 및 규제 대응 총괄" },
        ],
      },
      {
        side: "target",
        sideLabel: "합병 파트너 (Discovery Inc.)",
        initials: "WBD",
        bg: "bg-blue-900",
        advisors: [
          { firm: "LionTree Advisors", role: "재무 자문 (FA)", roleType: "financial", note: "Discovery 측 미디어 M&A 전문 자문" },
          { firm: "Wachtell Lipton", role: "법률 자문", roleType: "legal", note: "합병 계약 및 이사회 자문" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 업계 정보 기반입니다.",
  },

  valuation: {
    body: "AT&T의 미디어 구조조정은 전통적인 밸류에이션 분석보다 '손실 확정'의 관점에서 평가해야 한다. DirecTV는 $490억 인수 후 $160억 평가로 매각(-$330억), WarnerMedia는 $854억 인수 후 $430억 수령(-$424억). 두 딜 합산 손실만 $754억+에 달한다.",
    rows: [
      { item: "DirecTV 인수가 (2015년)", val: "$490억", note: "미국 최대 위성TV 사업자", accent: false },
      { item: "DirecTV 매각 평가 (2021년)", val: "$160억", note: "TPG Capital 30% 지분 매각 기준", accent: false },
      { item: "DirecTV 손실", val: "-$330억", note: "6년 만에 자산 가치 2/3 소멸", accent: true },
      { item: "WarnerMedia 인수가 (2018년)", val: "$854억", note: "Time Warner 인수, 역대 최대 미디어 M&A 중 하나", accent: false },
      { item: "WarnerMedia 분사 수령액 (2022년)", val: "$430억", note: "현금+부채 경감 기준", accent: false },
      { item: "WarnerMedia 손실", val: "-$424억", note: "4년 만에 절반 손실 확정", accent: true },
      { item: "합산 확인 손실", val: "$754억+", note: "DirecTV + WarnerMedia 합산", accent: true },
      { item: "AT&T 주가 변화", val: "$40+ → $18-20", note: "2016년 고점 대비 2022년 기준 -55%", accent: false },
    ],
    disclaimer: "손실 수치는 인수가 대비 매각·수령액 기준 추정치입니다. 실제 장부 감손은 별도입니다.",
  },

  rationale: {
    buyer: {
      title: "구조조정 논리 (AT&T — 왜 철수했나)",
      initials: "AT&T",
      bg: "bg-blue-600",
      points: [
        "$1,700억 부채 해소 — 5G 인프라 투자를 위한 자금 확보, 신용등급 회복",
        "코드커팅 현실 인정 — DirecTV 위성TV 가입자 급감으로 사업 모델 훼손",
        "스트리밍 경쟁 열세 — HBO Max는 Netflix·Disney+와 경쟁할 투자 여력 부족",
        "통신 순수 플레이어 복귀 — 투자자들의 요구와 주가 부양을 위한 전략 전환",
        "규모의 시너지 실현 실패 — WarnerMedia+Discovery 합병으로 콘텐츠 규모 경제 달성 기대",
      ],
    },
    seller: {
      title: "Discovery의 합병 논리",
      initials: "WBD",
      bg: "bg-blue-900",
      points: [
        "콘텐츠 포트폴리오 완성 — HBO 프리미엄+Discovery 리얼리티·자연다큐 시너지",
        "스트리밍 규모 확보 — HBO Max+Discovery+ 통합으로 Netflix 경쟁 규모 달성",
        "AT&T의 부채 인수 대가로 HBO·Warner Bros. 자산 확보 — 전략적 기회",
        "David Zaslav CEO의 미디어 통합 비전 실현",
        "글로벌 스트리밍 플랫폼(Max) 출범을 위한 콘텐츠·브랜드 결합",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "구조조정 완료 후 AT&T는 통신 사업에 집중하며 5G 투자를 재개했다. 순부채는 $1,700억에서 $1,270억으로 줄었으나 여전히 업계 최고 수준의 부채를 유지하고 있다. AT&T 주가는 $18-20 박스권에서 정체 중이다. Warner Bros. Discovery는 Max(HBO Max 리브랜딩)를 중심으로 스트리밍 사업을 재편했으나 $430억+ 부채 부담과 Zaslav CEO의 비용 삭감(콘텐츠 삭제, 대규모 레이오프)으로 논란이 지속됐다. 2024년에는 WBD와 Paramount Global의 합병 논의가 시작되는 등 미디어 업계 재편이 계속되고 있다.",
    overallVerdict: "M&A 역사상 최대 전략 실수 중 하나 — 콘버전스 신화의 붕괴를 상징하는 사례",
    positives: [
      "부채 일부 해소 — $1,700억 → $1,270억으로 $430억 감소, 신용 리스크 완화",
      "5G 투자 집중 가능 — 통신 코어 사업에 자원 재배분",
      "WarnerMedia+Discovery 합병으로 글로벌 스트리밍 경쟁 기반 강화 (WBD 시각에서)",
      "Warner Bros. Discovery라는 강력한 콘텐츠 기업 탄생",
      "매몰 비용 오류를 끊고 더 늦기 전에 철수한 결단",
    ],
    risks: [
      "AT&T 주가 $40+ → $18-20 반토막, 장기 주주 피해 막대",
      "배당 46% 삭감 ($2.08 → $1.11/주) — 배당 투자자 신뢰 훼손",
      "순부채 $1,270억 여전히 막대 — 5G 투자 여력 제한",
      "WBD 주가 $10 이하 지속 하락 — AT&T 주주가 받은 WBD 주식도 손실",
      "DirecTV 위성TV 사업 지속 가치 하락 — 합작법인 장기 전망 불투명",
    ],
    editorNote: "AT&T의 미디어 철수는 단순한 기업 실수를 넘어 '인터넷 시대 수직통합 전략의 한계'를 보여주는 교과서적 사례다. 통신 파이프를 가진 기업이 콘텐츠를 묶어도 소비자가 다른 파이프로 다른 콘텐츠를 소비하는 시대에는 그 시너지가 작동하지 않는다. $1,300억을 투자해 $750억+ 손실을 확정한 7년의 실험은 'M&A를 통한 다각화'가 아니라 '핵심 역량 집중'이 장기 기업 가치를 만든다는 교훈을 남겼다.",
  },

  tombstone: {
    acquirerInitials: "AT&T",
    acquirerBg: "bg-blue-600",
    targetInitials: "WMD",
    targetBg: "bg-blue-900",
    acquirerName: "AT&T Inc.",
    targetName: "WarnerMedia (분리 자산)",
    dealTitle: "미디어 제국의 붕괴와 통신 복귀 / Media Empire Collapse & Telecom Return",
    dealSize: "$430억 (WM 분사 수령액)",
    dealSizeUSD: "USD 43B received in WarnerMedia spinoff",
    evEbitda: "N/A (손실 구조조정)",
    closeDate: "Apr 2022",
  },

  sources: [
    { id: 1, text: "AT&T Press Release — AT&T to Combine WarnerMedia with Discovery (May 2021)", url: "https://about.att.com" },
    { id: 2, text: "SEC Form S-4 — WarnerMedia-Discovery Merger Registration Statement (2021)", url: "https://www.sec.gov" },
    { id: 3, text: "AT&T Annual Report 2021 — Strategic Update and WarnerMedia Separation", url: "https://investors.att.com" },
    { id: 4, text: "The Wall Street Journal — AT&T Agrees to Combine WarnerMedia With Discovery (May 2021)" },
    { id: 5, text: "Bloomberg — AT&T's $85 Billion Time Warner Deal Was a Disaster (April 2022)" },
    { id: 6, text: "Financial Times — AT&T DirecTV Merger: A $50 Billion Mistake? (2021)" },
    { id: 7, text: "New York Times — How AT&T Squandered Its Media Empire (2022)" },
  ],

  seo: {
    title: "AT&T 미디어 구조조정 완전 분석 — $750억 손실과 통신 순수 플레이어 복귀",
    description: "AT&T의 WarnerMedia 분사·DirecTV 매각 완전 분석. DirecTV $330억·WarnerMedia $424억 손실, 코드커팅, 콘버전스 신화 붕괴까지 심층 해부.",
    keywords: [
      "AT&T WarnerMedia 구조조정",
      "AT&T DirecTV 매각",
      "Warner Bros Discovery",
      "AT&T 미디어 철수",
      "코드커팅 통신",
      "통신 미디어 수직통합",
      "AT&T 부채 구조조정",
    ],
  },

  concepts: [
    { term: "콘버전스 신화 (Convergence Myth)", href: "/deal-101/convergence", description: "통신 파이프+미디어 콘텐츠 수직통합이 시너지를 만든다는 가설과 그 붕괴" },
    { term: "매몰 비용 오류 (Sunk Cost Fallacy)", href: "/deal-101/sunk-cost", description: "이미 투자한 비용에 집착해 추가 손실을 막지 못하는 의사결정 오류" },
    { term: "부채 주도 M&A의 함정", href: "/deal-101/debt-driven-ma", description: "대규모 부채로 M&A를 실행할 때 이자 부담이 전략 유연성을 잠식하는 구조" },
  ],

  faq: [
    {
      q: "AT&T는 왜 $854억에 인수한 WarnerMedia를 $430억도 못 받고 팔았나?",
      a: "세 가지 이유가 겹쳤습니다. 첫째, 코드커팅으로 DirecTV 가입자가 반토막 나며 '통신+미디어 번들' 시너지가 실현되지 않았습니다. 둘째, Netflix·Disney+의 스트리밍 공세 속에서 $1,700억 부채를 짊어진 AT&T는 HBO Max에 충분히 투자할 여력이 없었습니다. 셋째, 투자자들의 통신 순수 플레이어 복귀 압박과 신용등급 위험이 가중됐습니다. 더 늦게 결정했다면 손실이 더 컸을 것이라는 점에서 '매몰 비용 오류를 끊은 결단'으로도 해석됩니다.",
    },
    {
      q: "콘버전스(통신+미디어 수직통합) 전략은 왜 실패했나?",
      a: "인터넷 시대에는 소비자가 어느 통신사 파이프든 통해 어느 콘텐츠든 접근할 수 있습니다. '내 파이프를 쓰면 내 콘텐츠를 더 편하게 볼 수 있다'는 번들 논리가 작동하지 않았습니다. Comcast-NBCUniversal은 인터넷 속도에서 차별화할 수 있었지만, AT&T는 Verizon·T-Mobile과의 통신 경쟁에서도 밀리고 있었습니다. 결국 통신과 미디어는 '파이프'와 '물'처럼 분리된 사업이었습니다.",
    },
    {
      q: "Warner Bros. Discovery는 AT&T 구조조정의 수혜자인가?",
      a: "단기적으로는 아닙니다. WBD는 AT&T로부터 막대한 부채를 인수했고, David Zaslav CEO의 비용 삭감 정책(콘텐츠 삭제·레이오프)이 논란을 낳았습니다. 2023~2024년 WBD 주가는 $10 이하로 하락했습니다. 그러나 장기적으로는 HBO의 프리미엄 콘텐츠+Discovery의 비스크립티드 콘텐츠+Warner Bros. 영화 IP를 결합한 Max 플랫폼이 글로벌 스트리밍 경쟁의 유력한 플레이어가 될 잠재력을 갖고 있습니다.",
    },
    {
      q: "AT&T 주주는 이 구조조정에서 어떤 결과를 받았나?",
      a: "매우 나쁜 결과를 받았습니다. AT&T 주가는 2016년 $40+ 수준에서 2022년 구조조정 완료 후 $18-20으로 반토막났습니다. 배당도 연 $2.08/주에서 $1.11/주로 46% 삭감됐습니다. 주주들은 AT&T 1주당 WBD 0.241주를 수령했지만, WBD 주가도 지속 하락해 이중 손실을 입었습니다. '안정적 배당주'로 인식됐던 AT&T를 보유한 개인 투자자들에게 특히 큰 충격이었습니다.",
    },
  ],

  restructuringOverview: {
    body: "AT&T의 미디어 제국 구축과 해체는 M&A 역사상 가장 극적인 전략 실수 중 하나입니다. $1,300억을 투자해 미디어 제국을 쌓았다가 $430억도 건지지 못하고 철수한 AT&T의 구조조정을 분석합니다.",
    trigger: "$1,700억 부채 + 코드커팅 가속화 + 미디어-통신 시너지 실패",
    triggerDetail:
      "AT&T는 DirecTV($490억, 2015)와 Time Warner($854억, 2018) 인수로 순부채가 $1,700억에 달했습니다. 동시에 위성TV 가입자는 매 분기 수백만 명씩 감소(코드커팅)했고, HBO Max는 Netflix·Disney+와의 스트리밍 경쟁에서 후발주자였습니다. 배당금 지급 압박, 5G 투자 필요, 투자자들의 통신 순수 플레이어 전환 요구가 겹치면서 구조조정이 불가피해졌습니다.",
    method: "divestiture",
    methodLabel: "사업부 현금 매각 + 역분사 (Divestiture + Reverse Spinoff)",
    whyThisMethod:
      "AT&T는 WarnerMedia를 면세 분사(Section 355)로 처리하기 어려웠습니다. Discovery와의 합병이 조건이었기 때문에 단순 주주 배분이 아닌 Discovery에 현금+부채 경감을 받는 구조였습니다. DirecTV는 부분 매각으로 즉각 현금을 확보했습니다.",
    methodVsAlternatives: [
      {
        method: "WarnerMedia 유지",
        reason: "$1,700억 부채 상환 능력 부재, 5G 투자 자금 확보 불가, 투자자 신뢰 회복 불가",
      },
      {
        method: "WarnerMedia 단독 IPO",
        reason: "Discovery와의 합병으로 규모의 경제 확보가 더 유리했고, 단독 IPO는 스트리밍 경쟁에서 규모 한계 노출",
      },
      {
        method: "DirecTV 완전 매각",
        reason: "위성TV 사업의 가치가 빠르게 하락하고 있어 TPG와의 부분 합작이 즉각 현금 확보와 가치 보존에 최선이었음",
      },
    ],
    theoreticalInsights: [
      {
        concept: "콘버전스 신화의 붕괴 (Convergence Myth)",
        explanation:
          "통신(파이프)+콘텐츠(콘텐츠 패키지) 수직통합이 경쟁 우위를 만든다는 가설. 그러나 인터넷 시대에는 소비자가 어느 파이프든 통해 어느 콘텐츠든 접근할 수 있어 통신-미디어 묶음의 차별화가 불가능해졌습니다.",
        howApplied:
          "AT&T는 DirecTV+WarnerMedia 번들로 고객을 묶어두려 했으나, 소비자들은 Netflix·Hulu·Disney+ 등 독립 스트리밍을 선호하며 이탈했습니다. 시너지는 실현되지 않았고 부채만 남았습니다.",
      },
      {
        concept: "부채 주도 M&A의 함정 (Debt-Driven M&A Trap)",
        explanation:
          "M&A 자금을 대규모 부채로 조달하면 이자 부담이 투자 여력을 잠식합니다. 기업이 변화하는 시장에 적응할 투자를 하지 못하게 되어 악순환이 발생합니다.",
        howApplied:
          "AT&T의 순부채 $1,700억은 연간 이자비용만 수십억 달러였습니다. HBO Max에 투자해야 할 자금이 이자 상환에 쓰이면서 Netflix·Disney+와의 스트리밍 경쟁에서 뒤처졌습니다.",
      },
      {
        concept: "전략적 철수의 경제학 (Strategic Exit Economics)",
        explanation:
          "잘못된 인수는 빨리 정리할수록 손실이 적습니다. '매몰 비용 오류(Sunk Cost Fallacy)'를 피해 현재 가치 기준으로 분리 결정을 내려야 합니다.",
        howApplied:
          "AT&T는 DirecTV를 $490억 인수 → $160억 평가로 매각($330억 손실), WarnerMedia를 $854억 인수 → $430억 수령($424억 손실)으로 확인 가능한 손실만 $750억+입니다. 더 늦게 결정했다면 손실은 더 컸을 것입니다.",
      },
    ],
    executionSteps: [
      {
        phase: "Phase 1",
        date: "2021년 2월",
        action: "DirecTV 지분 30% TPG Capital에 매각",
        detail:
          "AT&T가 DirecTV를 $160억으로 평가하며 TPG에 30% 지분을 매각. 2015년 $490억 인수가 대비 대폭 손실 확정. DirecTV는 AT&T-TPG 합작법인으로 운영 시작.",
        financialNote: "DirecTV 평가 $160억 vs 2015년 인수가 $490억 — $330억 손실",
      },
      {
        phase: "Phase 2",
        date: "2021년 5월",
        action: "AT&T-Discovery 합병 계획 발표",
        detail:
          "AT&T가 WarnerMedia를 Discovery와 합병한다고 발표. AT&T는 합병 법인 Warner Bros. Discovery에서 $430억 현금·부채 경감 수령. AT&T 주주는 WBD 주식 배분.",
        financialNote: "AT&T 주가 발표 당일 -2.7% (배당 삭감 우려)",
      },
      {
        phase: "Phase 3",
        date: "2022년 4월 8일",
        action: "Warner Bros. Discovery 출범 — AT&T 구조조정 완료",
        detail:
          "WarnerMedia가 Discovery와 합병해 Warner Bros. Discovery(WBD) 탄생. AT&T는 WBD 지분 71% 보유. AT&T 주주 1주당 WBD 0.241주 수령. AT&T는 통신 순수 플레이어로 복귀.",
        financialNote: "AT&T 순부채 $1,700억 → $1,270억으로 감소",
      },
      {
        phase: "Phase 4",
        date: "2022~2023년",
        action: "AT&T WBD 지분 단계적 처분 + 통신 집중",
        detail:
          "AT&T는 WBD 지분을 단계적으로 처분하며 순통신 기업으로의 전환 완성. 5G 투자 재개, 배당 삭감 후 재정 안정화.",
        financialNote: "AT&T 배당 삭감 46%: $2.08 → $1.11/주",
      },
    ],
    stakeholders: [
      {
        name: "AT&T 주주",
        icon: "📉",
        impact: "negative",
        summary: "주가 $40 → $18로 폭락, 배당 46% 삭감",
        detail:
          "AT&T 주주들은 WBD 주식을 소량 수령했지만, AT&T 자체 주가가 $40+(2016) → $18-20(2022)로 반토막났습니다. 배당도 46% 삭감됐습니다. 장기 주주들에게 역대 최악의 M&A-구조조정 결과 중 하나.",
        metric: "주가 -55%, 배당 -46%",
      },
      {
        name: "Warner Bros. Discovery 주주",
        icon: "🎬",
        impact: "mixed",
        summary: "새로운 기업 탄생, 그러나 부채 짐",
        detail:
          "WBD는 HBO Max+Discovery+Warner Bros.+CNN의 막강한 콘텐츠를 가졌지만, AT&T로부터 인수한 부채 부담이 컸습니다. David Zaslav CEO 하에 대규모 구조조정(콘텐츠 삭제, 레이오프)이 진행됐습니다.",
        metric: "WBD 순부채 약 $430억",
      },
      {
        name: "DirecTV 직원",
        icon: "📡",
        impact: "negative",
        summary: "위성TV 가입자 이탈 속 구조조정",
        detail:
          "DirecTV 가입자가 매 분기 수십만 명씩 감소하며 인력 구조조정이 지속됐습니다. TPG 매각 후 비용 절감 압박이 강화됐습니다.",
        metric: "DirecTV 가입자 2015년 3,200만 → 2022년 1,500만",
      },
      {
        name: "AT&T 채권자",
        icon: "🏦",
        impact: "positive",
        summary: "구조조정으로 신용 리스크 감소",
        detail:
          "WarnerMedia 분사+DirecTV 부분 매각으로 $430억+ 부채 감소. AT&T 신용등급 강등 위기에서 안정화됐습니다.",
        metric: "순부채 $1,700억 → $1,270억",
      },
      {
        name: "Netflix·Disney·스트리밍 경쟁자",
        icon: "▶️",
        impact: "positive",
        summary: "경쟁자의 전략 실패로 수혜",
        detail:
          "AT&T-WarnerMedia 통합의 실패는 스트리밍 시장에서 콘텐츠+통신 수직통합이 작동하지 않음을 증명했습니다. 독립 스트리밍 플랫폼(Netflix, Disney+)의 전략이 옳았음이 확인됐습니다.",
      },
    ],
    beforeAfter: [
      { metric: "AT&T 순부채", before: "$1,700억", after: "$1,270억", change: "-$430억", isPositive: true },
      { metric: "AT&T 주가", before: "$40+(2016년)", after: "$18-20(2022년)", change: "-55%", isPositive: false },
      { metric: "AT&T 배당", before: "$2.08/주", after: "$1.11/주", change: "-46%", isPositive: false },
      { metric: "AT&T 사업 포커스", before: "통신+미디어+위성TV", after: "통신 순수 플레이어", change: "포커스 복귀", isPositive: true },
      { metric: "WarnerMedia 평가", before: "$854억 (2018년 인수가)", after: "$430억 (2022년 수령액)", change: "-$424억 손실", isPositive: false },
      { metric: "DirecTV 평가", before: "$490억 (2015년 인수가)", after: "$160억 (2021년 평가)", change: "-$330억 손실", isPositive: false },
    ],
    marketImpact: {
      announcementReturn: "WarnerMedia-Discovery 합병 발표일 AT&T -2.7%",
      shortTermReturn: "구조조정 완료 후 1년 AT&T 주가 -15% 추가 하락",
      longTermReturn: "2024년 AT&T $18-20 박스권 정체, WBD도 $10 이하",
      contextNote:
        "합산 손실: DirecTV $330억 + WarnerMedia $424억 = 확인 가능한 손실 $750억+. M&A 역사상 최대 규모 전략 실패 중 하나",
    },
  },
};

export default deal;
