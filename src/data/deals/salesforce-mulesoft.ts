/**
 * Salesforce × MuleSoft — $6.5B, API 통합 플랫폼으로 CRM 생태계 확장
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "salesforce-mulesoft",
  title: "Salesforce는 왜 MuleSoft을 $6.5B에 샀나 — API 통합 플랫폼과 디지털 전환의 핵심",
  subtitle: "$6.5B · 2018년 5월 · Anypoint Platform · API 통합 · CRM 생태계 확장",
  category: "ma",
  industry: "엔터프라이즈 소프트웨어 / API 통합 / SaaS",
  country: "미국",
  announcedAt: "2018-03-20",
  closedAt: "2018-05-01",
  announcedDisplay: "2018년 3월",
  closedDisplay: "2018년 5월",
  readingMinutes: 9,
  tags: ["Salesforce", "MuleSoft", "Anypoint Platform", "API 통합", "디지털 전환", "CRM", "iPaaS", "enterprise software"],
  excerpt: "Salesforce는 2018년 3월 API 통합 플랫폼 기업 MuleSoft을 $6.5B(주당 $36)에 인수한다고 발표했다. 당시 상장 엔터프라이즈 소프트웨어 역대 최고 EV/Revenue 배수(~16×)였다. MuleSoft의 Anypoint Platform은 기업의 레거시 시스템·클라우드·API를 연결하는 핵심 인프라로, Salesforce CRM 데이터 통합의 허브가 됐다.",

  acquirer: { initials: "CRM", bg: "bg-blue-500", label: "Salesforce, Inc." },
  target: { initials: "MULE", bg: "bg-indigo-600", label: "MuleSoft, LLC" },

  background: [
    "MuleSoft은 2006년 창립된 API 통합 플랫폼 기업으로, Anypoint Platform을 통해 기업의 다양한 시스템(레거시 ERP, 클라우드 SaaS, 모바일 앱, IoT 기기 등)을 API로 연결하는 iPaaS(Integration Platform as a Service) 솔루션을 제공했다. 2017년 3월 뉴욕증권거래소에 상장(MULE)했으며, 포춘 500대 기업 중 1,800개+ 기업이 고객이었다.",
    "기업의 디지털 전환 과정에서 가장 큰 병목은 '시스템 연결'이었다. 한 기업이 사용하는 소프트웨어가 평균 1,100개+에 달하지만, 대부분은 서로 통신하지 못했다. MuleSoft의 Anypoint Platform은 이 연결 문제를 해결하는 핵심 미들웨어였고, '기업의 API 운영체제'로 불렸다.",
    "Salesforce는 CRM 플랫폼의 성장을 위해 고객 기업의 모든 데이터를 Salesforce로 연결하는 통합 능력이 필요했다. 기업이 Oracle ERP, SAP, SAP 인프라, 자체 레거시 시스템을 Salesforce CRM과 연결하려면 복잡한 커스텀 통합 작업이 필요했는데, MuleSoft이 이를 표준화된 API로 처리했다.",
    "2018년 3월 20일 Salesforce는 MuleSoft을 주당 $36(프리미엄 36%)에 현금 + 주식 혼합으로 인수한다고 발표했다. 총 $6.5B — 당시 상장 엔터프라이즈 소프트웨어 인수 중 역대 최고 EV/Revenue 배수(~16×)였다. 딜은 6주 만인 2018년 5월 1일 신속하게 완료됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "$6.5B (주당 $36, 현금+주식 혼합)",
    acquirerName: "Salesforce, Inc.",
    targetName: "MuleSoft, LLC",
    announcedDisplay: "2018년 3월",
    closedDisplay: "2018년 5월",
    country: "미국",
  },

  executiveSummary: [
    "$6.5B — 발표 당시 상장 엔터프라이즈 SW 역대 최고 EV/Revenue 배수 (~16×)",
    "MuleSoft Anypoint Platform: 기업 API 통합 플랫폼 — 포춘 500대 기업 1,800개+ 고객",
    "Salesforce 전략: CRM 단독 → 모든 기업 시스템 연결 허브(Customer 360) 진화",
    "디지털 전환의 핵심 병목 해결 — 레거시·클라우드·API 통합 미들웨어",
    "인수 후 Salesforce 매출에 수십억 달러 기여 — Customer 360 전략의 핵심 기둥",
    "MuleSoft → Salesforce Integration Cloud 브랜드로 확장 (2019년~)",
  ],

  industryOverview: {
    body: "iPaaS(Integration Platform as a Service) 시장은 기업의 디지털 전환 가속화와 함께 연 15%+ 성장하는 시장이다. 기업당 평균 사용 소프트웨어 수가 1,000개를 초과하면서, 이를 연결하는 API 통합 플랫폼의 수요가 폭발적으로 증가했다. Gartner는 MuleSoft을 iPaaS 부문 연속 리더로 선정했다.",
    metrics: [
      { label: "iPaaS 시장 규모", value: "$3.5B", sub: "2018년, 연 15%+ 성장" },
      { label: "기업당 평균 사용 SW", value: "1,000개+", sub: "API 통합 수요의 근본 원인" },
      { label: "MuleSoft 고객 수", value: "1,800개+", sub: "포춘 500대 기업 포함" },
      { label: "Gartner Magic Quadrant", value: "리더", sub: "iPaaS 부문 연속" },
    ],
    players: [
      { name: "MuleSoft (Salesforce)", role: "iPaaS 시장 리더, Anypoint Platform" },
      { name: "Dell Boomi", role: "미드마켓 iPaaS 경쟁사" },
      { name: "Informatica", role: "데이터 통합·ETL 플랫폼" },
      { name: "Microsoft Azure Integration Services", role: "클라우드 기반 API 통합" },
    ],
  },

  companyOverview: {
    targetName: "MuleSoft, LLC",
    body: "MuleSoft은 2006년 창립된 iPaaS(통합 플랫폼) 기업으로, Anypoint Platform이 핵심 제품이다. Anypoint는 API 설계·구현·관리·모니터링을 원스톱으로 처리하며, 400개+ 커넥터로 주요 엔터프라이즈 시스템과 연결된다. 2017년 NYSE 상장 후 빠르게 성장하고 있었다.",
    metrics: [
      { label: "연매출 (FY2017)", value: "~$400M", sub: "전년 대비 58% 성장" },
      { label: "고객 수", value: "1,800개+", sub: "포춘 500대 기업 포함" },
      { label: "Anypoint 커넥터", value: "400개+", sub: "엔터프라이즈 시스템 연결" },
      { label: "EV/Revenue 인수 배수", value: "~16×", sub: "$6.5B / ~$0.4B" },
    ],
    financials: [
      { year: "FY2016", revenue: 188, cogs: 50, grossProfit: 138, sga: 200, operatingIncome: -140, ebitda: -120 },
      { year: "FY2017", revenue: 297, cogs: 78, grossProfit: 219, sga: 290, operatingIncome: -180, ebitda: -150 },
      { year: "FY2018", revenue: 401, cogs: 100, grossProfit: 301, sga: 350, operatingIncome: -200, ebitda: -170 },
    ],
    financialsNote: "단위: USD 백만. MuleSoft 공개 재무 자료 기반.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "구독 (플랫폼)", pct: 82, color: "bg-indigo-600", amt: "~$329M" },
      { name: "전문 서비스", pct: 18, color: "bg-indigo-300", amt: "~$72M" },
    ],
  },

  dealStructure: {
    body: "Salesforce는 MuleSoft 주주에게 주당 $36를 현금 + 주식 혼합으로 지급했다. 구체적으로 주당 $28.22 현금 + $7.78 Salesforce 주식 교환. NYSE 상장 폐지 후 Salesforce 완전 자회사로 편입됐다.",
    preOwnership: {
      nodes: [
        { id: "crm", label: "Salesforce, Inc.", sub: "NYSE: CRM", type: "acquirer" },
        { id: "mule", label: "MuleSoft, LLC", sub: "NYSE: MULE, 독립 상장", type: "target" },
      ],
      edges: [
        { from: "crm", to: "mule", label: "$36/주 (현금+주식) 인수" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "crm_post", label: "Salesforce, Inc.", sub: "NYSE: CRM", type: "acquirer" },
        { id: "mule_post", label: "MuleSoft (Salesforce)", sub: "Salesforce Integration Cloud로 확장", type: "target" },
      ],
      edges: [
        { from: "crm_post", to: "mule_post", label: "100% 소유 (상장 폐지)" },
      ],
    },
    keyTerms: [
      { label: "인수 가격", value: "$6.5B (주당 $36)", accent: true },
      { label: "지급 구조", value: "$28.22 현금 + $7.78 Salesforce 주식", accent: false },
      { label: "프리미엄", value: "36% (30일 평균 대비)", accent: false },
      { label: "완료", value: "2018년 5월 1일 (6주 만에 완료)", accent: false },
      { label: "EV/Revenue", value: "~16× (상장 엔터프라이즈 SW 역대 최고)", accent: true },
    ],
  },

  advisors: {
    body: "M&A 전문 자문사들이 딜 양측을 지원했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "인수자 (Salesforce)",
        initials: "CRM",
        bg: "bg-blue-500",
        advisors: [
          { firm: "Goldman Sachs", role: "재무자문 (FA)", roleType: "financial", note: "인수 구조 및 가격 산정" },
          { firm: "Wachtell Lipton Rosen & Katz", role: "법률자문", roleType: "legal", note: "딜 계약 및 이사회 의무" },
        ],
      },
      {
        side: "target",
        sideLabel: "피인수자 (MuleSoft)",
        initials: "MULE",
        bg: "bg-indigo-600",
        advisors: [
          { firm: "Qatalyst Partners", role: "재무자문 (FA)", roleType: "financial", note: "공정가 의견 및 협상" },
          { firm: "Fenwick & West", role: "법률자문", roleType: "legal", note: "주주 보호 및 딜 계약" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 자료 기반.",
  },

  valuation: {
    body: "Salesforce는 MuleSoft의 고성장(전년 대비 58% 매출 성장) SaaS 매출과 iPaaS 시장 선도 지위에 높은 프리미엄을 부여했다. EV/Revenue 16× — 당시 상장 엔터프라이즈 소프트웨어 역대 최고 배수였다.",
    rows: [
      { item: "인수 가격 (EV)", val: "$6.5B", note: "주당 $36", accent: true },
      { item: "FY2018 ARR (연간 반복 매출)", val: "~$400M", note: "58% YoY 성장" },
      { item: "EV/Revenue", val: "~16×", note: "상장 엔터프라이즈 SW 역대 최고", accent: true },
      { item: "30일 평균 대비 프리미엄", val: "36%", note: "주당 $36" },
      { item: "인수 후 기여 매출", val: "$1B+", note: "2020년 Salesforce 연간 기여" },
    ],
    disclaimer: "재무 지표는 공개 자료 기반 추정.",
  },

  rationale: {
    buyer: {
      title: "Salesforce의 인수 논리",
      initials: "CRM",
      bg: "bg-blue-500",
      points: [
        "Customer 360 전략 완성 — 모든 기업 데이터를 Salesforce로 연결하는 허브",
        "레거시 시스템 통합 가속 — Salesforce CRM 도입 시 기존 ERP/SAP 연결 마찰 제거",
        "iPaaS 시장 선점 — 급성장하는 API 통합 플랫폼 시장 1위 확보",
        "고객당 계약 가치(ACV) 확대 — MuleSoft 플랫폼 번들로 업셀·크로스셀",
        "디지털 전환 필수 인프라 — 기업의 시스템 연결 허브로 전환비용 극대화",
      ],
    },
    seller: {
      title: "MuleSoft 경영진·주주의 승인 논리",
      initials: "MULE",
      bg: "bg-indigo-600",
      points: [
        "36% 즉시 프리미엄 — 단기 주가 대비 명확한 가치 실현",
        "Salesforce의 글로벌 고객 기반으로 Anypoint Platform 확산 가속",
        "독립 기업 대비 R&D·영업 확장 속도 비교 불가 수준 향상",
        "경쟁이 심화되는 iPaaS 시장에서 글로벌 1위 Salesforce와의 통합으로 지위 강화",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "인수 완료 후 MuleSoft은 Salesforce Integration Cloud의 핵심으로 자리잡았다. 2020년 MuleSoft 기여 매출은 $1B+를 넘어섰다. Salesforce는 MuleSoft을 활용해 Customer 360 Data Platform을 구축, 기업이 모든 채널의 고객 데이터를 하나의 뷰로 통합할 수 있게 했다. MuleSoft은 Salesforce의 여러 '클라우드' 제품 중 가장 성공적인 인수 중 하나로 평가받는다.",
    overallVerdict: "전략적 성공 — Salesforce Customer 360의 핵심 인프라 확보",
    positives: [
      "MuleSoft 기여 매출 $1B+ 달성 (2020년) — 인수 2년 만에 대형 수익 기여",
      "Customer 360 전략 완성 — 모든 기업 시스템 데이터를 Salesforce로 통합",
      "Salesforce Integration Cloud 브랜드 확장 — iPaaS 시장 지위 강화",
      "기존 Salesforce 고객의 MuleSoft 크로스셀 성공 — ACV 확대",
    ],
    risks: [
      "고가 인수 배수(EV/Revenue 16×) — 초기 ROI 압박",
      "Microsoft Azure, Google Cloud의 네이티브 통합 서비스 경쟁 심화",
      "Salesforce 내 제품 복잡성 증가 — 영업·마케팅 통합 필요",
    ],
    editorNote: "Salesforce-MuleSoft 인수는 '플랫폼이 아닌 생태계 허브가 되라'는 전략의 실행이다. CRM 단독으로는 기업의 IT 예산 일부만 가져갈 수 있지만, 모든 시스템의 연결 허브(API 통합)가 되면 예산의 훨씬 큰 파이를 가져갈 수 있다. MuleSoft이 Salesforce의 Customer 360 전략에서 차지하는 역할은 단순한 제품 하나가 아닌 '전체 플랫폼의 접착제'였다.",
  },

  tombstone: {
    acquirerInitials: "CRM",
    acquirerBg: "bg-blue-500",
    targetInitials: "MULE",
    targetBg: "bg-indigo-600",
    acquirerName: "Salesforce, Inc.",
    targetName: "MuleSoft, LLC",
    dealTitle: "전략적 인수 — API 통합 플랫폼",
    dealSize: "$6.5B (주당 $36)",
    dealSizeUSD: "USD 6.5B",
    evEbitda: "N/A (적자 성장 기업)",
    closeDate: "May 2018",
  },

  sources: [
    { id: 1, text: "Salesforce Press Release — Salesforce Signs Definitive Agreement to Acquire MuleSoft (March 2018)", url: "https://investor.salesforce.com" },
    { id: 2, text: "MuleSoft Form S-4 / Proxy Statement (2018)", url: "https://www.sec.gov" },
    { id: 3, text: "Gartner Magic Quadrant for Enterprise Integration Platform as a Service (2018)" },
    { id: 4, text: "Salesforce Annual Report FY2020 — MuleSoft Revenue Contribution", url: "https://investor.salesforce.com" },
    { id: 5, text: "Bloomberg — Salesforce Buys MuleSoft for $6.5 Billion (March 2018)" },
    { id: 6, text: "The Wall Street Journal — Salesforce Pays Premium for MuleSoft's API Platform (2018)" },
  ],

  seo: {
    title: "Salesforce MuleSoft 인수 분석 — $6.5B API 통합 플랫폼과 Customer 360 전략",
    description: "Salesforce의 MuleSoft $6.5B 인수 완전 분석. Anypoint Platform, EV/Revenue 16× 역대 최고 배수, Customer 360 전략과 API 통합 시너지.",
    keywords: ["Salesforce MuleSoft 인수", "MuleSoft Anypoint Platform", "API 통합 플랫폼", "iPaaS", "Customer 360", "Salesforce 인수 전략"],
  },

  concepts: [
    { term: "전략적 M&A", href: "/deal-101/strategic-ma", description: "CRM → 모든 기업 시스템 연결 허브 — Customer 360 플랫폼 확장을 위한 인수" },
    { term: "플랫폼 전략", href: "/deal-101/platform-strategy", description: "MuleSoft Anypoint Platform = 기업의 API 운영체제 — 전환비용 극대화 전략" },
    { term: "EV/Revenue 멀티플", href: "/deal-101/ev-revenue", description: "EV/Revenue 16× — 당시 상장 엔터프라이즈 SW 역대 최고 배수, 고성장 SaaS 프리미엄" },
    { term: "수직 통합", href: "/deal-101/vertical-integration", description: "CRM(상위) + API 통합 미들웨어(하위) — 엔터프라이즈 IT 스택 내 영향력 확대" },
  ],

  faq: [
    {
      q: "Salesforce가 MuleSoft에 $6.5B이라는 높은 가격을 지불한 이유는?",
      a: "MuleSoft의 가치는 Anypoint Platform이 기업 IT 인프라의 '접착제' 역할을 한다는 점에 있다. 기업의 평균 소프트웨어 수가 1,000개를 초과하는 상황에서, 이를 연결하는 API 통합 플랫폼은 한 번 도입되면 교체하기 극히 어렵다. Salesforce 입장에서는 MuleSoft이 모든 기업 시스템을 Salesforce로 연결하는 허브가 되면, 고객의 Salesforce 의존도가 극적으로 증가한다. 이 전략적 가치가 EV/Revenue 16×라는 높은 배수를 정당화했다.",
    },
    {
      q: "MuleSoft의 Anypoint Platform은 무엇인가?",
      a: "Anypoint Platform은 기업의 다양한 시스템(레거시 ERP, SAP, Oracle, Salesforce, 클라우드 SaaS, 모바일 앱, IoT 기기 등)을 API로 연결하는 통합 플랫폼이다. API 설계·구현·배포·관리·모니터링·보안을 원스톱으로 처리하며, 400개 이상의 사전 구축 커넥터로 주요 엔터프라이즈 시스템과 즉시 연결된다. 기업의 'API 운영체제(API OS)'로 불린다.",
    },
    {
      q: "인수 후 MuleSoft는 Salesforce에 어떻게 기여했나?",
      a: "MuleSoft은 Salesforce Integration Cloud의 핵심이 됐다. 2020년 기준 MuleSoft 기여 매출이 $1B+를 넘어 인수 2년 만에 대형 수익원이 됐다. 더 중요한 것은 전략적 시너지다: MuleSoft을 통해 기업의 레거시 시스템·SAP·Oracle을 Salesforce CRM과 연결하면서 Salesforce의 고객당 계약 가치(ACV)가 크게 증가했다. Customer 360 플랫폼의 핵심 기둥이 됐다.",
    },
    {
      q: "이 인수가 Salesforce의 M&A 전략에서 어떤 의미인가?",
      a: "MuleSoft 인수는 Salesforce가 단순 CRM 벤더에서 '기업 디지털 전환의 플랫폼'으로 진화하는 결정적 전환점이었다. 이후 Salesforce는 Tableau($15.7B, 데이터 시각화), Slack($27.7B, 협업)을 연달아 인수하며 비슷한 전략을 반복했다. MuleSoft이 '연결', Tableau가 '분석', Slack이 '협업'을 담당하는 Customer 360 생태계 구축이 전략의 핵심이었다.",
    },
  ],
};

export default deal;
