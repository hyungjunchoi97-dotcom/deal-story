/**
 * SAP × Qualtrics — $8B에 샀다가 IPO로 키우고 $12.5B에 팔았다
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "sap-qualtrics",
  title: "SAP의 Qualtrics $8B 인수 — IPO 이틀 전 결정, 3년 만에 $12.5B에 매각한 전략",
  subtitle: "$8B · 2019년 1월 · 경험 관리(XM) · IPO 이틀 전 인수 · Silver Lake PE 매각",
  category: "ma",
  industry: "엔터프라이즈 소프트웨어 / 경험 관리 / SaaS",
  country: "미국·독일",
  announcedAt: "2018-11-11",
  closedAt: "2019-01-23",
  announcedDisplay: "2018년 11월",
  closedDisplay: "2019년 1월",
  readingMinutes: 10,
  tags: ["SAP", "Qualtrics", "경험 관리", "XM", "IPO 취소", "Silver Lake", "엔터프라이즈 소프트웨어", "PE 바이아웃"],
  excerpt: "SAP은 2018년 11월 나스닥 IPO를 이틀 앞둔 Qualtrics를 $8B에 전격 인수했다. Qualtrics는 직원·고객·브랜드·제품 경험을 측정하는 '경험 관리(XM)' 플랫폼의 선두주자였다. SAP은 2021년 Qualtrics를 뉴욕증권거래소에 재상장(IPO)했고, 2023년 Silver Lake·CPP 컨소시엄에 $12.5B에 매각했다.",

  acquirer: { initials: "SAP", bg: "bg-blue-700", label: "SAP SE" },
  target: { initials: "XM", bg: "bg-teal-500", label: "Qualtrics International" },

  background: [
    "Qualtrics는 2002년 형제 Ryan Smith와 Jared Smith가 미국 유타주에서 설립한 설문 조사·데이터 분석 소프트웨어 기업이다. 2012년부터 기업용 '경험 관리(Experience Management, XM)' 플랫폼으로 진화하며, 고객 경험(CX), 직원 경험(EX), 브랜드 경험(BX), 제품 경험(PX)을 하나의 플랫폼에서 측정·분석하는 XM OS(경험 관리 운영체제)를 구축했다.",
    "2018년 10월 Qualtrics는 나스닥 IPO를 준비했다. $35/주에 공모가를 설정해 10억 달러를 조달할 계획이었다. 그런데 IPO 이틀 전인 2018년 11월 11일, SAP이 $8B에 Qualtrics를 전격 인수하겠다는 제안을 했고 Qualtrics 이사회가 이를 수락했다. IPO는 취소됐다.",
    "SAP의 인수 논리는 명확했다. SAP은 기업의 '운영 데이터(O-data, Operational Data)'를 처리하는 ERP 세계 1위 기업이다. 그러나 'X-data(Experience Data)'—고객이 어떻게 느끼는지, 직원이 어떻게 생각하는지—는 없었다. Qualtrics의 XM 플랫폼이 SAP의 O-data와 결합하면 기업의 완전한 피드백 루프(Business Operating System)가 완성된다는 것이었다.",
    "2021년 1월 SAP은 Qualtrics를 다시 나스닥에 상장(IPO)했다. 공모가 $30/주, 시가총액 약 $150억. SAP은 85%+ 지분을 유지했다. 2022년 말 Qualtrics 주가는 IPO 고점 대비 크게 하락했고, 2023년 3월 Silver Lake(PE 펀드)와 CPP Investments 컨소시엄이 $12.5B(주당 $18.15)에 Qualtrics 인수를 발표, 2023년 6월 완료됐다. SAP은 수십억 달러의 차익을 실현했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$8B (SAP 인수, 현금, 2019년 1월)",
    acquirerName: "SAP SE",
    targetName: "Qualtrics International",
    announcedDisplay: "2018년 11월 (IPO 이틀 전)",
    closedDisplay: "2019년 1월",
    country: "미국·독일",
  },

  executiveSummary: [
    "$8B — IPO 이틀 전 전격 인수, 나스닥 공모 취소",
    "Qualtrics XM OS: 고객·직원·브랜드·제품 경험 관리 플랫폼의 업계 표준",
    "SAP 전략: O-data(ERP 운영 데이터) + X-data(Qualtrics 경험 데이터) = 완전한 기업 OS",
    "2021년 SAP이 Qualtrics를 다시 NYSE에 상장 — 공모가 $30, 시총 $150B",
    "2023년 Silver Lake·CPP가 Qualtrics $12.5B에 인수 — SAP 차익 실현",
    "SAP의 투자 수익: 인수가 $8B → 매각가 $12.5B + 2021년 IPO 조달 — 수익성 있는 투자",
  ],

  industryOverview: {
    body: "경험 관리(Experience Management, XM) 시장은 2022년 $11B에서 2030년 $30B+ 성장이 예상된다. 기업이 '무엇을 했는가(O-data)'를 넘어 '어떻게 경험되었는가(X-data)'를 측정·개선하는 것이 경쟁력의 핵심이 됐다. NPS(순 추천지수), eNPS, CSAT 등 경험 지표가 기업 KPI의 핵심이 된 배경이다.",
    metrics: [
      { label: "경험 관리 시장 규모", value: "$11B", sub: "2022년, 2030년 $30B+ 예상" },
      { label: "Qualtrics 고객 수", value: "16,000개+", sub: "2022년 기준" },
      { label: "Fortune 100 기업 고객", value: "99개", sub: "사실상 전 포춘 100" },
      { label: "EV/Revenue (SAP 인수 시)", value: "~20×", sub: "$8B / ~$400M ARR" },
    ],
    players: [
      { name: "Medallia", role: "고객 경험 관리 직접 경쟁사" },
      { name: "SurveyMonkey / Momentive", role: "설문 기반 경험 측정 플랫폼" },
      { name: "ServiceNow", role: "직원 경험(EX) 플랫폼" },
      { name: "Salesforce Customer 360", role: "고객 경험 데이터 플랫폼" },
    ],
  },

  companyOverview: {
    targetName: "Qualtrics International",
    body: "Qualtrics는 경험 관리(XM, Experience Management) 플랫폼의 글로벌 리더다. XM OS(경험 관리 운영체제)를 중심으로 CustomerXM, EmployeeXM, ProductXM, BrandXM 네 개 솔루션을 제공한다. 포춘 100 기업 99개를 포함해 전 세계 16,000개+ 고객을 보유했다.",
    metrics: [
      { label: "연간 반복 매출 (ARR)", value: "~$760M", sub: "2020년 기준" },
      { label: "고객 수", value: "16,000개+", sub: "2022년 기준" },
      { label: "매출 성장률", value: "40%+", sub: "2019-2021년 CAGR" },
      { label: "Fortune 100 침투율", value: "99/100", sub: "사실상 전 포춘 100" },
    ],
    financials: [
      { year: "FY2018", revenue: 400, cogs: 100, grossProfit: 300, sga: 400, operatingIncome: -200, ebitda: -180 },
      { year: "FY2019", revenue: 537, cogs: 130, grossProfit: 407, sga: 490, operatingIncome: -220, ebitda: -190 },
      { year: "FY2020", revenue: 763, cogs: 180, grossProfit: 583, sga: 620, operatingIncome: -270, ebitda: -240 },
    ],
    financialsNote: "단위: USD 백만. Qualtrics 공개 재무 자료 기반. 고성장 투자 단계.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "구독 (XM 플랫폼)", pct: 88, color: "bg-teal-500", amt: "~$672M (FY2020)" },
      { name: "전문 서비스", pct: 12, color: "bg-teal-300", amt: "~$92M" },
    ],
  },

  dealStructure: {
    body: "SAP은 Qualtrics를 전액 현금으로 인수해 완전 자회사로 편입했다. IPO 직전 공모가($35/주)보다 30%+ 높은 가격을 제시해 이사회 동의를 이끌어냈다. 이후 2021년 IPO로 Qualtrics를 재상장하고, 2023년 Silver Lake 컨소시엄에 매각했다.",
    preOwnership: {
      nodes: [
        { id: "sap", label: "SAP SE", sub: "NYSE/XETRA: SAP", type: "acquirer" },
        { id: "xm", label: "Qualtrics International", sub: "비상장 (IPO 예정), Ryan Smith 설립", type: "target" },
      ],
      edges: [
        { from: "sap", to: "xm", label: "$8B 현금 인수 (IPO 이틀 전)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "sap_post", label: "SAP SE", sub: "NYSE: SAP", type: "acquirer" },
        { id: "xm_post", label: "Qualtrics International", sub: "2021년 NYSE 재상장 (XM)", type: "target" },
        { id: "silver_lake", label: "Silver Lake·CPP", sub: "$12.5B 인수 (2023년)", type: "fund" },
      ],
      edges: [
        { from: "sap_post", to: "xm_post", label: "85%+ 지분 보유 (2021년 IPO)" },
        { from: "xm_post", to: "silver_lake", label: "2023년 $12.5B 매각" },
      ],
    },
    keyTerms: [
      { label: "SAP 인수 가격", value: "$8B (전액 현금)", accent: true },
      { label: "완료일", value: "2019년 1월 23일", accent: false },
      { label: "2021년 IPO 공모가", value: "$30/주 (시총 ~$15B)", accent: false },
      { label: "Silver Lake 매각가", value: "$12.5B (주당 $18.15)", accent: true },
      { label: "SAP 최종 수익", value: "$8B → $12.5B+, 차익 실현", accent: false },
    ],
  },

  advisors: {
    body: "M&A 자문사들이 딜 양측을 지원했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "인수자 (SAP)",
        initials: "SAP",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Morgan Stanley", role: "재무자문 (FA)", roleType: "financial", note: "인수 구조 및 가격 협상" },
          { firm: "Linklaters", role: "법률자문", roleType: "legal", note: "딜 계약 및 규제 대응" },
        ],
      },
      {
        side: "target",
        sideLabel: "피인수자 (Qualtrics)",
        initials: "XM",
        bg: "bg-teal-500",
        advisors: [
          { firm: "Goldman Sachs", role: "재무자문 (FA / IPO 인수자)", roleType: "financial", note: "IPO 대신 M&A 선택 조언" },
          { firm: "Fenwick & West", role: "법률자문", roleType: "legal", note: "창업자 이익 보호 및 계약" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 자료 기반.",
  },

  valuation: {
    body: "SAP은 Qualtrics의 XM 플랫폼 성장성과 SAP ERP O-data와의 시너지를 고려해 당시 예정 IPO 공모가($35/주) 대비 30%+ 프리미엄을 부여했다. EV/ARR ~20×는 XM 시장 선도 기업으로서의 프리미엄이었다.",
    rows: [
      { item: "SAP 인수 가격", val: "$8B", note: "전액 현금", accent: true },
      { item: "FY2018 ARR", val: "~$400M", note: "40%+ 성장 중" },
      { item: "EV/ARR", val: "~20×", note: "XM 시장 1위 프리미엄", accent: true },
      { item: "2021년 IPO 공모 시총", val: "~$15B", note: "$30/주" },
      { item: "2023년 Silver Lake 매각가", val: "$12.5B", note: "주당 $18.15", accent: true },
    ],
    disclaimer: "재무 지표는 공개 자료 기반 추정.",
  },

  rationale: {
    buyer: {
      title: "SAP의 인수 논리",
      initials: "SAP",
      bg: "bg-blue-700",
      points: [
        "O-data + X-data = 완전한 기업 OS — ERP 운영 데이터에 경험 데이터 결합",
        "XM 시장 선점 — 경험 관리 플랫폼 1위 Qualtrics를 Medallia, SurveyMonkey 전에 확보",
        "SAP 고객 기반 크로스셀 — 16,000개 Qualtrics 고객 + SAP ERP 고객의 교차 판매",
        "IPO 이틀 전 선제적 행동 — 상장 후 경쟁 심화되면 더 높은 가격 지불 불가피",
        "디지털 전환 기업의 핵심 니즈 충족 — 운영 효율 + 고객/직원 경험 개선",
      ],
    },
    seller: {
      title: "Qualtrics 창업자·이사회의 매각 논리",
      initials: "XM",
      bg: "bg-teal-500",
      points: [
        "IPO 공모가($35/주) 대비 30%+ 높은 즉각적 프리미엄",
        "SAP의 글로벌 ERP 고객망으로 XM 플랫폼 확산 가속",
        "IPO 후 시장 변동성 리스크 회피 — 확실한 현금 유동성 확보",
        "SAP의 대규모 자본·영업 조직으로 독립 기업 대비 빠른 성장 가능",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "SAP 편입 후 Qualtrics는 글로벌 확장을 가속하며 2020년 ARR $763M을 달성했다. 2021년 1월 NYSE 재상장(IPO, $30/주)으로 시총 $15B에 달했다. 그러나 2022년 금리 상승과 SaaS 밸류에이션 급락으로 주가가 IPO 고점 대비 60%+ 하락했고, 2023년 3월 Silver Lake·CPP 컨소시엄이 $12.5B(주당 $18.15)에 인수를 제안, 2023년 6월 완료됐다. SAP은 차익을 실현하며 Qualtrics를 PE 투자로 전환했다.",
    overallVerdict: "부분 성공 — SAP 전략 목표 달성하지 못했지만 재무적으로는 수익",
    positives: [
      "Qualtrics ARR $400M → $1B+ 성장 — SAP 편입 기간 중 빠른 성장",
      "2021년 IPO 성공 — $15B 시총으로 재상장, SAP 보유 지분 가치 상승",
      "Silver Lake $12.5B 매각 — $8B 인수 대비 재무적 수익 실현",
      "XM(경험 관리) 시장 개념 확산에 기여",
    ],
    risks: [
      "SAP과의 제품 통합이 기대보다 느림 — O-data + X-data 시너지 완전 실현 미달",
      "2022년 SaaS 밸류에이션 급락으로 IPO 가치가 크게 하락",
      "Ryan Smith(창업자) SAP 편입 후 리더십 불확실성",
      "SAP 핵심 ERP 비즈니스와의 문화·전략 차이",
    ],
    editorNote: "SAP-Qualtrics 딜은 독특한 M&A 구조를 보여준다. 인수 → 자회사 성장 → IPO 재상장 → PE 매각이라는 3단계 경로를 거쳤다. 순수한 전략적 통합(O-data + X-data)을 목표로 했지만, 실제로는 SAP이 Qualtrics의 빠른 성장에 자본을 공급하고 PE 매각으로 수익을 실현한 '전략적 투자'에 가까웠다. 경험 관리라는 새로운 시장 카테고리를 SAP의 자원으로 키웠다는 점에서 의미가 있다.",
  },

  tombstone: {
    acquirerInitials: "SAP",
    acquirerBg: "bg-blue-700",
    targetInitials: "XM",
    targetBg: "bg-teal-500",
    acquirerName: "SAP SE",
    targetName: "Qualtrics International",
    dealTitle: "전략적 인수 → IPO 재상장 → PE 매각",
    dealSize: "$8B (SAP 인수), $12.5B (Silver Lake 매각)",
    dealSizeUSD: "USD 8B (acquisition), USD 12.5B (exit)",
    evEbitda: "N/A (성장 투자 단계)",
    closeDate: "Jan 2019",
  },

  sources: [
    { id: 1, text: "SAP Press Release — SAP to Acquire Qualtrics (November 2018)", url: "https://www.sap.com" },
    { id: 2, text: "Qualtrics S-1 Registration Statement (2020, for 2021 IPO)", url: "https://www.sec.gov" },
    { id: 3, text: "SAP Press Release — Qualtrics IPO (January 2021)", url: "https://investor.sap.com" },
    { id: 4, text: "Silver Lake Press Release — Silver Lake and CPP Investments to Acquire Qualtrics (March 2023)" },
    { id: 5, text: "Bloomberg — SAP to Buy Qualtrics Just Two Days Before Its IPO (November 2018)" },
    { id: 6, text: "The Wall Street Journal — Qualtrics Goes Public Again as SAP Takes It to NYSE (January 2021)" },
  ],

  seo: {
    title: "SAP Qualtrics 인수 분석 — $8B 경험 관리 플랫폼과 PE 매각 전략",
    description: "SAP의 Qualtrics $8B 인수 완전 분석. IPO 이틀 전 전격 인수, 경험 관리(XM) O-data·X-data 전략, 2021년 IPO 재상장, Silver Lake $12.5B 매각.",
    keywords: ["SAP Qualtrics 인수", "Qualtrics 경험 관리", "XM 플랫폼", "Silver Lake 인수", "엔터프라이즈 소프트웨어 M&A", "IPO 취소 인수"],
  },

  concepts: [
    { term: "전략적 M&A", href: "/deal-101/strategic-ma", description: "SAP O-data + Qualtrics X-data = 완전한 기업 운영체제 — 경험 관리 플랫폼 선점 전략" },
    { term: "플랫폼 전략", href: "/deal-101/platform-strategy", description: "XM OS(경험 관리 운영체제) — 고객·직원·브랜드·제품 경험을 단일 플랫폼에서 통합 관리" },
    { term: "EV/Revenue 멀티플", href: "/deal-101/ev-revenue", description: "EV/ARR ~20× — 고성장 SaaS 기업의 밸류에이션 배수와 시장 선도 프리미엄" },
    { term: "PE 바이아웃", href: "/deal-101/pe-buyout", description: "Silver Lake·CPP의 Qualtrics $12.5B 인수 — 전략 대기업에서 PE로의 오너십 전환" },
  ],

  faq: [
    {
      q: "SAP은 왜 Qualtrics의 IPO를 이틀 앞두고 인수했나?",
      a: "두 가지 이유가 있다. 첫째, 타이밍의 우위: IPO가 완료되면 Qualtrics의 가격은 시장 경쟁에 노출되어 더 높아질 가능성이 크다. IPO 직전에 프리미엄을 제시하면 창업자·투자자가 IPO 리스크(시장 변동성, 락업 기간) 없이 즉각 현금을 받을 수 있어 수락 가능성이 높다. 둘째, 전략적 필요성: SAP은 ERP의 O-data(운영 데이터)에 Qualtrics의 X-data(경험 데이터)를 결합해야 경쟁력을 유지할 수 있다고 판단했다.",
    },
    {
      q: "O-data와 X-data는 무엇이며 왜 중요한가?",
      a: "O-data(Operational Data)는 기업이 '무엇을 했는가'를 기록하는 데이터다 — ERP의 매출, 재고, 물류 등. SAP은 이 분야의 세계 1위다. X-data(Experience Data)는 '어떻게 경험되었는가'를 측정하는 데이터다 — 고객 만족도(NPS, CSAT), 직원 몰입도(eNPS), 브랜드 인지도 등. Qualtrics가 X-data 플랫폼의 리더다. 두 데이터를 연결하면 기업이 '왜 이런 결과가 나왔는가'를 이해할 수 있는 완전한 피드백 루프가 만들어진다.",
    },
    {
      q: "Silver Lake는 왜 Qualtrics를 $12.5B에 인수했나?",
      a: "2023년 Silver Lake의 Qualtrics 인수는 전형적인 PE 바이아웃 논리였다. 2022년 SaaS 밸류에이션 급락으로 Qualtrics 주가가 IPO 고점(~$45) 대비 60%+ 하락해 $12.5B($18.15/주)는 본질 가치 대비 저평가됐다고 판단했다. Silver Lake는 비상장 기업으로 전환 후 SAP의 대기업 관료주의에서 벗어나 독립 운영하며 성장 재가속, 이후 재상장 또는 전략 매각을 통한 엑싯을 목표로 했다.",
    },
    {
      q: "이 딜의 궁극적인 교훈은 무엇인가?",
      a: "세 가지 교훈이 있다. 첫째, 전략적 시너지(O-data + X-data)가 명확하더라도 대기업 내 통합 실행은 어렵다. 둘째, 빠르게 성장하는 SaaS 기업은 대기업 자회사보다 독립 기업으로 더 빠르게 성장할 수 있다 — 그래서 PE가 다시 분리했다. 셋째, M&A는 인수 자체가 끝이 아니라 인수 후 통합·운영이 결정적이다.",
    },
  ],
};

export default deal;
