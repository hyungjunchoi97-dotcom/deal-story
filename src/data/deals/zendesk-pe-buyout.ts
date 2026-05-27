/**
 * Zendesk PE 바이아웃 — $10.2B, 고객 서비스 SaaS의 상장 폐지
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "zendesk-pe-buyout",
  title: "Zendesk는 왜 $10.2B PE 바이아웃에 응했나 — 공개 시장 vs 사모 투자의 선택",
  subtitle: "$10.2B · 2022년 11월 · Permira + Hellman & Friedman · LBO · 고객 서비스 CRM",
  category: "ma",
  industry: "엔터프라이즈 소프트웨어 / 고객 서비스 CRM / SaaS",
  country: "미국",
  announcedAt: "2022-06-24",
  closedAt: "2022-11-22",
  announcedDisplay: "2022년 6월",
  closedDisplay: "2022년 11월",
  readingMinutes: 9,
  tags: ["Zendesk", "Permira", "Hellman & Friedman", "PE 바이아웃", "LBO", "고객서비스 CRM", "SaaS 상장폐지", "Salesforce 인수 거절"],
  excerpt: "Zendesk은 2022년 6월 글로벌 PE 펀드 Permira와 Hellman & Friedman의 컨소시엄과 $10.2B(주당 $77.5) LBO 계약을 체결했다. 앞서 Salesforce의 $17B 인수 제안을 거절했던 Zendesk는 2022년 11월 NASDAQ 상장을 폐지하고 사모 기업으로 전환했다.",

  acquirer: { initials: "PE", bg: "bg-gray-700", label: "Permira + Hellman & Friedman" },
  target: { initials: "ZEN", bg: "bg-green-600", label: "Zendesk, Inc." },

  background: [
    "Zendesk는 2007년 덴마크에서 창립된 고객 서비스 CRM 소프트웨어 기업이다. 고객 지원 티켓 관리, 헬프데스크, 라이브 채팅, AI 기반 고객 서비스 자동화를 제공하며, 2014년 나스닥에 상장했다. Slack, Shopify, Airbnb 등 1만 개 이상의 기업이 고객이었다.",
    "2022년 초 Salesforce가 Zendesk를 $17B(주당 $127)에 인수하려 했지만, Zendesk 이사회는 이 제안을 거절했다. 동시에 Zendesk는 콜센터 소프트웨어 기업 Momentive(SurveyMonkey 모회사)를 $4.1B에 인수하려 했지만, 이 거래도 주주 반대로 무산됐다.",
    "2022년 SaaS 기업의 주가 급락으로 Zendesk 주가는 고점 대비 60%+ 하락했다. 이 상황에서 Permira와 Hellman & Friedman 컨소시엄이 주당 $77.5($10.2B)에 LBO 제안을 했고, 2022년 6월 Zendesk 이사회가 이를 수락했다. Salesforce 제안($127/주)에 비해 낮은 가격이었지만, 당시 시장 상황에서는 프리미엄이었다.",
    "2022년 11월 22일 딜이 완료됐다. Zendesk는 나스닥 상장을 폐지하고 Permira·H&F가 지배하는 비상장 기업으로 전환됐다. PE 펀드들은 비상장 환경에서 장기 성장 전략을 실행하고 이후 재상장 또는 전략 매각을 목표로 했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$10.2B (주당 $77.5, 전액 현금 LBO)",
    acquirerName: "Permira + Hellman & Friedman (컨소시엄)",
    targetName: "Zendesk, Inc.",
    announcedDisplay: "2022년 6월",
    closedDisplay: "2022년 11월",
    country: "미국",
  },

  executiveSummary: [
    "$10.2B LBO — Permira + Hellman & Friedman PE 컨소시엄, 나스닥 상장 폐지",
    "Zendesk: 2022년 Salesforce $17B 인수 거절 → 결국 더 낮은 $10.2B PE 바이아웃 수용",
    "SaaS 밸류에이션 급락 환경: 2022년 나스닥 테크 고점 대비 60%+ 주가 하락",
    "PE 바이아웃 논리: 비상장 전환 → 단기 주주 압박 해소 → 장기 전략 집중",
    "LBO 구조: 부채 조달($7.5B+) + PE 에쿼티 — 대규모 레버리지 활용",
    "2024년 재상장 또는 전략 매각 시나리오 탐색 중",
  ],

  industryOverview: {
    body: "고객 서비스 소프트웨어(Customer Service Software) 시장은 2022년 $11B에서 2027년 $19B+ 성장 예상이다. AI 챗봇, 옴니채널 고객 지원, 셀프서비스 포털이 핵심 트렌드다. Zendesk는 중소·중견 기업(SMB~Mid-market)에서 강세를 보였으나, 대기업 시장에서는 Salesforce Service Cloud에 밀렸다.",
    metrics: [
      { label: "고객 서비스 SW 시장 규모", value: "$11B", sub: "2022년" },
      { label: "Zendesk 고객 수", value: "100,000개+", sub: "2022년 기준" },
      { label: "연간 매출 (FY2021)", value: "~$1.35B", sub: "전년 대비 29% 성장" },
      { label: "LBO 레버리지 비율", value: "~73%", sub: "$10.2B 중 부채 ~$7.5B" },
    ],
    players: [
      { name: "Salesforce Service Cloud", role: "대기업 고객 서비스 CRM 1위" },
      { name: "Freshdesk (Freshworks)", role: "SMB 고객 서비스 소프트웨어 경쟁사" },
      { name: "ServiceNow", role: "IT 서비스 관리 + 고객 서비스 확장" },
      { name: "HubSpot Service Hub", role: "SMB 고객 서비스 소프트웨어" },
    ],
  },

  companyOverview: {
    targetName: "Zendesk, Inc.",
    body: "Zendesk(NASDAQ: ZEN)는 2007년 덴마크 코펜하겐에서 창립된 고객 서비스 소프트웨어 기업이다. 헬프데스크 티켓 관리 시스템 Zendesk Support를 핵심으로, Zendesk Chat(실시간 채팅), Zendesk Guide(지식 베이스), Zendesk Sell(CRM) 등으로 제품을 확장했다. 2014년 나스닥 상장.",
    metrics: [
      { label: "연간 매출 (FY2021)", value: "~$1.35B", sub: "29% YoY 성장" },
      { label: "고객 수", value: "100,000개+", sub: "2022년 기준" },
      { label: "EV/Revenue (인수 배수)", value: "~7.5×", sub: "$10.2B / ~$1.35B" },
      { label: "나스닥 상장", value: "2014년", sub: "상장 폐지 2022년 11월" },
    ],
    financials: [
      { year: "FY2019", revenue: 816, cogs: 200, grossProfit: 616, sga: 700, operatingIncome: -280, ebitda: -250 },
      { year: "FY2020", revenue: 1030, cogs: 250, grossProfit: 780, sga: 820, operatingIncome: -280, ebitda: -240 },
      { year: "FY2021", revenue: 1339, cogs: 320, grossProfit: 1019, sga: 970, operatingIncome: -260, ebitda: -210 },
    ],
    financialsNote: "단위: USD 백만. Zendesk 공개 재무 자료 기반.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "Zendesk Suite (서비스 플랫폼)", pct: 78, color: "bg-green-600", amt: "~$1.04B" },
      { name: "Zendesk Sell (CRM)", pct: 12, color: "bg-green-400", amt: "~$161M" },
      { name: "기타 서비스", pct: 10, color: "bg-green-200", amt: "~$134M" },
    ],
  },

  dealStructure: {
    body: "Permira와 Hellman & Friedman의 컨소시엄이 Zendesk 주주에게 주당 $77.5 현금을 지급하는 LBO(Leveraged Buyout)를 실행했다. 총 $10.2B 중 약 $7.5B+는 부채 파이낸싱으로 조달했고, 나머지 ~$2.7B는 PE 에쿼티로 투자했다.",
    preOwnership: {
      nodes: [
        { id: "pe", label: "Permira + Hellman & Friedman", sub: "글로벌 PE 펀드 컨소시엄", type: "fund" },
        { id: "zen", label: "Zendesk, Inc.", sub: "NASDAQ: ZEN, 공개 상장", type: "target" },
      ],
      edges: [
        { from: "pe", to: "zen", label: "$77.5/주 현금 LBO" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "pe_post", label: "Permira + H&F", sub: "지배 주주", type: "fund" },
        { id: "zen_post", label: "Zendesk, Inc.", sub: "비상장 사모 기업 (NASDAQ 폐지)", type: "target" },
      ],
      edges: [
        { from: "pe_post", to: "zen_post", label: "100% 소유 (상장 폐지 2022.11)" },
      ],
    },
    keyTerms: [
      { label: "인수 가격", value: "$10.2B (주당 $77.5)", accent: true },
      { label: "구조", value: "LBO (레버리지드 바이아웃)", accent: false },
      { label: "부채 조달 비중", value: "~73% (약 $7.5B+)", accent: false },
      { label: "완료일", value: "2022년 11월 22일", accent: false },
      { label: "vs Salesforce 제안", value: "Salesforce $17B 거절 후 $10.2B 수용", accent: true },
    ],
  },

  advisors: {
    body: "대형 투자은행과 PE 전문 로펌이 딜 양측을 지원했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "인수자 (PE 컨소시엄)",
        initials: "PE",
        bg: "bg-gray-700",
        advisors: [
          { firm: "Goldman Sachs", role: "재무자문 (FA)", roleType: "financial", note: "LBO 구조 설계 및 부채 조달" },
          { firm: "Kirkland & Ellis", role: "법률자문", roleType: "legal", note: "PE LBO 법률 구조 및 융자 계약" },
        ],
      },
      {
        side: "target",
        sideLabel: "피인수자 (Zendesk)",
        initials: "ZEN",
        bg: "bg-green-600",
        advisors: [
          { firm: "Qatalyst Partners", role: "재무자문 (FA)", roleType: "financial", note: "공정가 의견 및 협상" },
          { firm: "Simpson Thacher & Bartlett", role: "법률자문", roleType: "legal", note: "이사회 의무 및 주주 보호" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 자료 기반.",
  },

  valuation: {
    body: "2022년 SaaS 밸류에이션 급락 환경에서 주당 $77.5($10.2B)는 30일 평균 대비 34% 프리미엄이었다. 앞서 거절된 Salesforce $17B 제안에 비해서는 40%+ 낮은 가격이었다.",
    rows: [
      { item: "LBO 인수 가격", val: "$10.2B", note: "주당 $77.5", accent: true },
      { item: "FY2021 매출", val: "~$1.35B", note: "29% YoY 성장" },
      { item: "EV/Revenue", val: "~7.5×", note: "2022년 SaaS 조정 배수" },
      { item: "30일 평균 대비 프리미엄", val: "34%", note: "주당 $77.5" },
      { item: "vs Salesforce 제안", val: "$17B", note: "주당 $127 — Zendesk가 2022년 거절", accent: true },
    ],
    disclaimer: "재무 지표는 공개 자료 기반 추정.",
  },

  rationale: {
    buyer: {
      title: "PE 컨소시엄(Permira·H&F)의 인수 논리",
      initials: "PE",
      bg: "bg-gray-700",
      points: [
        "SaaS 저점 인수 — 2022년 밸류에이션 급락으로 EV/Revenue 7.5× 저가 기회",
        "비상장 전환 후 장기 전략 — 분기 실적 압박 없이 제품·고객 확장 집중",
        "레버리지 활용 — LBO로 에쿼티 수익률 극대화",
        "고객 서비스 AI 성장 — AI 챗봇·자동화 트렌드 타고 Zendesk 성장 재가속",
        "재상장 또는 전략 매각 시나리오 — 3~5년 후 엑싯 기회",
      ],
    },
    seller: {
      title: "Zendesk 이사회·주주의 매각 논리",
      initials: "ZEN",
      bg: "bg-green-600",
      points: [
        "공개 시장 하락 압박 탈출 — 주가 60%+ 하락 환경에서 34% 프리미엄 즉각 현금화",
        "비상장 전환 후 장기 성장 — 분기 EPS 압박 없이 전략 실행",
        "Momentive 인수 실패 후 대안 전략 — 독립 성장 경로 재설계",
        "Salesforce 인수 거절 후 주가 하락의 리스크 — 확실한 엑싯 경로",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "2022년 11월 비상장 전환 후 Zendesk는 AI 고객 서비스 기능 강화에 집중했다. 2023년 AI 기반 자동화(Zendesk AI, Intelligent Triage 등)를 출시하며 제품 경쟁력을 강화했다. 비상장 기업이므로 재무 정보는 공개되지 않았지만, 고객 서비스 AI 트렌드 덕분에 성장이 지속된 것으로 알려졌다. PE 컨소시엄은 3~5년 내 재상장 또는 전략 매각을 목표로 하고 있다.",
    overallVerdict: "진행 중 — PE 비상장 전환 후 AI 제품 강화, 엑싯 시나리오 탐색 중",
    positives: [
      "AI 고객 서비스 강화 — Zendesk AI, Intelligent Triage 출시로 제품 경쟁력 향상",
      "분기 압박 해소 — 비상장 환경에서 장기 전략 집중 가능",
      "고객 서비스 AI 트렌드 — 시장 성장이 Zendesk에 유리한 환경 조성",
    ],
    risks: [
      "Salesforce Service Cloud, ServiceNow의 AI 기능 강화로 경쟁 심화",
      "높은 LBO 레버리지 — 금리 상승 환경에서 이자 부담 증가",
      "재상장·전략 매각 타이밍의 불확실성",
      "Salesforce $17B 거절 후 $10.2B 수용 — 주주 가치 극대화 의구심",
    ],
    editorNote: "Zendesk의 PE 바이아웃은 2022년 테크 밸류에이션 급락이 만들어낸 기회를 PE가 활용한 전형적인 사례다. Salesforce의 $17B 제안을 거절했다가 결국 $10.2B를 받은 것은 이사회의 독립 경영 의지가 주주 가치 극대화보다 우선됐다는 비판을 받았다. 비상장 환경에서의 AI 투자와 제품 강화가 결실을 맺어 재상장 또는 전략 매각으로 연결될지가 이 딜의 최종 성공 여부를 결정할 것이다.",
  },

  tombstone: {
    acquirerInitials: "PE",
    acquirerBg: "bg-gray-700",
    targetInitials: "ZEN",
    targetBg: "bg-green-600",
    acquirerName: "Permira + Hellman & Friedman",
    targetName: "Zendesk, Inc.",
    dealTitle: "PE 레버리지드 바이아웃 (LBO)",
    dealSize: "$10.2B (주당 $77.5)",
    dealSizeUSD: "USD 10.2B",
    evEbitda: "N/A (적자 성장 기업)",
    closeDate: "Nov 2022",
  },

  sources: [
    { id: 1, text: "Zendesk Press Release — Zendesk Enters into Definitive Agreement to Be Acquired (June 2022)", url: "https://investor.zendesk.com" },
    { id: 2, text: "Zendesk Form 8-K — Going Private Transaction Completed (November 2022)", url: "https://www.sec.gov" },
    { id: 3, text: "Bloomberg — Zendesk Rejects Salesforce $17 Billion Takeover Bid (February 2022)" },
    { id: 4, text: "The Wall Street Journal — Zendesk Agrees to $10.2 Billion Buyout (June 2022)" },
    { id: 5, text: "Reuters — Zendesk Shareholders Approve $10.2 Billion Buyout (October 2022)" },
    { id: 6, text: "Financial Times — PE Firms Permira and Hellman & Friedman Back Zendesk Buyout (2022)" },
  ],

  seo: {
    title: "Zendesk PE 바이아웃 분석 — $10.2B LBO와 Salesforce 거절의 전략",
    description: "Zendesk의 $10.2B PE 바이아웃 완전 분석. Permira·Hellman & Friedman LBO 구조, Salesforce $17B 거절 후 사모 전환, SaaS 밸류에이션 급락 활용.",
    keywords: ["Zendesk PE 바이아웃", "Zendesk LBO", "Permira Hellman Friedman", "SaaS 상장폐지", "고객서비스 CRM M&A", "Salesforce Zendesk 거절"],
  },

  concepts: [
    { term: "PE 바이아웃", href: "/deal-101/pe-buyout", description: "Permira·H&F의 Zendesk $10.2B LBO — SaaS 밸류에이션 저점에서 레버리지 활용 인수" },
    { term: "레버리지드 바이아웃", href: "/deal-101/lbo", description: "인수 가격 $10.2B의 ~73%를 부채로 조달 — 에쿼티 수익률 극대화 LBO 구조" },
    { term: "상장 폐지 (Going Private)", href: "/deal-101/going-private", description: "분기 실적 압박에서 벗어나 장기 전략 집중 — SaaS 기업의 비상장 전환 논리" },
    { term: "전략적 M&A", href: "/deal-101/strategic-ma", description: "Salesforce $17B 거절 후 PE $10.2B 수용 — 독립 전략 vs 주주 가치의 이사회 선택" },
  ],

  faq: [
    {
      q: "Zendesk는 왜 Salesforce $17B을 거절하고 $10.2B PE 바이아웃을 수용했나?",
      a: "2022년 초 Salesforce가 주당 $127($17B)를 제안했을 때 Zendesk 이사회는 독립 경영을 유지하며 더 높은 가치를 스스로 만들겠다고 판단했다. 그러나 이후 SaaS 밸류에이션 급락으로 주가가 60%+ 하락했고, 결국 주당 $77.5($10.2B)를 수락했다. 이사회의 독립 판단이 결과적으로 주주 가치를 크게 훼손한 사례로 비판받는다.",
    },
    {
      q: "LBO(레버리지드 바이아웃)란 무엇이며 왜 PE가 선호하나?",
      a: "LBO는 인수 가격의 대부분을 부채(차입)로 조달해 기업을 인수하는 방식이다. Zendesk의 경우 $10.2B 중 ~$7.5B가 부채, ~$2.7B가 PE 에쿼티였다. PE 입장에서 레버리지를 사용하면 에쿼티 투자 수익률(ROE)이 극대화된다. 예를 들어 기업 가치가 30% 상승하면 에쿼티 수익률은 그 이상이 된다. 단, 부채가 높아 기업 현금흐름이 이자 지급을 충당해야 한다.",
    },
    {
      q: "PE가 비상장 전환을 선호하는 이유는?",
      a: "상장 기업은 분기마다 실적을 공개하고 주주·애널리스트의 단기 압박을 받는다. 비상장 전환 후에는 분기 EPS 목표 대신 3~5년 장기 전략에 집중할 수 있다. 또한 M&A·구조조정·가격 정책 등 단기적으로 이익을 줄이지만 장기적으로 가치를 높이는 결정을 더 자유롭게 할 수 있다. Zendesk의 경우 AI 제품 투자와 비용 구조 최적화가 비상장 환경에서 더 용이하다.",
    },
    {
      q: "Zendesk PE 바이아웃의 결말은?",
      a: "2024년 말 기준 Zendesk는 비상장 기업으로 운영 중이며, 재무 정보는 공개되지 않는다. Permira·H&F는 AI 고객 서비스 기능 강화와 비용 효율화를 진행하면서 3~5년 내 재상장 또는 Salesforce, ServiceNow 같은 전략 투자자에 매각하는 시나리오를 탐색하고 있다. AI 고객 서비스 트렌드가 Zendesk에 유리하게 작용하고 있어 결과가 주목된다.",
    },
  ],
};

export default deal;
