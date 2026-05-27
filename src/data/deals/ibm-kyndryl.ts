/**
 * IBM → Kyndryl 분사
 * 레거시 IT 인프라 분리 — 2020년 발표, 2021년 11월 완성
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "ibm-kyndryl",
  title: "IBM은 왜 $190억 IT 인프라 사업을 분사했나 — 레거시 분리와 하이브리드 클라우드 집중 전략 해부",
  subtitle: "하이브리드 클라우드·AI 집중 · Red Hat 전략 · Kyndryl 세계 최대 IT 서비스 기업 · 분사 후 주가 -70% 현실",
  category: "restructuring",
  industry: "정보기술·IT 서비스",
  country: "미국",
  announcedAt: "2020-10-08",
  closedAt: "2021-11-04",
  announcedDisplay: "2020년 10월",
  closedDisplay: "2021년 11월",
  readingMinutes: 10,
  tags: [
    "IBM",
    "Kyndryl",
    "IT 인프라",
    "분사",
    "하이브리드 클라우드",
    "Red Hat",
    "레거시 IT",
    "면세 분사",
    "IT 서비스",
  ],
  excerpt:
    "IBM이 관리형 인프라 서비스(Managed Infrastructure Services) 사업부를 Kyndryl Holdings Inc.로 분사해 2021년 11월 4일 NYSE에 상장시킨 IT 역사상 가장 큰 레거시 IT 분리 사례. 연매출 $190억, 90,000명 직원. IBM은 Red Hat 기반 하이브리드 클라우드+AI에 집중. Kyndryl은 분사 후 주가 -70% 이상 하락 — 레거시 IT 구조 사업의 현실을 보여주는 사례.",

  acquirer: { initials: "IBM", bg: "bg-blue-700", label: "IBM (International Business Machines)" },
  target: { initials: "KD", bg: "bg-purple-700", label: "Kyndryl Holdings Inc." },

  background: [
    "IBM은 1911년 창립 이후 110년간 IT 업계를 이끌어온 기업이다. 2010년대 들어 클라우드 컴퓨팅의 확산으로 IBM의 전통적인 메인프레임·IT 인프라 관리 사업이 압박을 받기 시작했다. 고객들이 온프레미스(On-premises) IT 인프라에서 AWS·Azure·GCP 클라우드로 이전하면서 IBM의 관리형 인프라 서비스 매출이 연 5~10% 역성장하기 시작했다.",
    "2019년 IBM은 $340억에 오픈소스 기업 Red Hat을 인수했다. CEO 지니 로메티(Ginni Rometty)의 전략이었지만, 2020년 취임한 아르빈드 크리슈나(Arvind Krishna)가 이 전략을 더욱 선명하게 구체화했다. 크리슈나의 전략은 명확했다: 'IBM은 이제 하이브리드 클라우드와 AI 기업이다. 레거시 인프라 관리는 IBM의 정체성이 아니다.'",
    "2020년 10월 8일 IBM CEO 아르빈드 크리슈나는 IBM의 관리형 인프라 서비스 사업부를 완전 독립 기업으로 분사한다고 발표했다. 분사 기업명은 'Kyndryl'로 결정됐다. Kyndryl은 연매출 약 $190억, 60개국 90,000명 직원 규모로 당시 세계 최대 독립 IT 인프라 서비스 기업이 될 예정이었다.",
    "분사는 Section 355 면세 분사 방식으로 진행됐다. IBM 주주들은 보유한 IBM 주식 1주당 Kyndryl 주식 1주를 세금 없이 수령했다. 2021년 11월 4일 Kyndryl이 NYSE에 상장(KD)하며 분사가 완성됐다. 상장 초기 시총은 약 $190억이었으나, 이후 레거시 IT 구조 사업의 역성장으로 인해 주가가 지속 하락했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$190억 (Kyndryl 상장 시총)",
    acquirerName: "IBM (International Business Machines Corporation)",
    targetName: "Kyndryl Holdings Inc.",
    announcedDisplay: "2020년 10월",
    closedDisplay: "2021년 11월",
    country: "미국",
  },

  executiveSummary: [
    "세계 최대 IT 인프라 서비스 분사 — 연매출 $190억, 60개국 90,000명의 Kyndryl 독립 출범",
    "IBM의 하이브리드 클라우드+AI 집중 전략 — Red Hat 기반 성장 스토리 명확화",
    "Section 355 면세 분사 — IBM 주주 1주당 Kyndryl 1주 세금 없이 수령",
    "'레거시 IT 공룡' 이미지 탈피 시도 — CEO 아르빈드 크리슈나의 IBM 정체성 재정의",
    "Kyndryl 분사 후 주가 -70%+ 하락 — 레거시 IT 역성장의 구조적 현실 노출",
    "IBM 주가 분사 후 서서히 회복 — 하이브리드 클라우드·AI 집중 기업으로 재평가",
    "클라우드 이관 가속 — AWS·Azure·GCP 수혜, Kyndryl 고객 이탈 가속",
  ],

  industryOverview: {
    body: "2020년 글로벌 IT 서비스 시장은 약 $1조 규모였으며, 관리형 인프라 서비스(Managed Infrastructure Services)와 클라우드 서비스 간의 세력 이동이 급격하게 진행되고 있었다. AWS·Azure·GCP가 퍼블릭 클라우드 시장을 장악하며 기업들의 온프레미스 IT 인프라가 빠르게 대체됐다. IBM·HP·Dell 등 전통 IT 기업들의 인프라 관리 사업은 구조적 역성장 압박에 놓였다.",
    metrics: [
      { label: "글로벌 IT 서비스 시장", value: "약 $1조", sub: "2020년 기준, 클라우드 이관 진행 중" },
      { label: "Kyndryl 연매출", value: "약 $190억", sub: "분사 기준, 60개국 운영" },
      { label: "Kyndryl 직원 수", value: "약 90,000명", sub: "세계 최대 독립 IT 인프라 기업" },
      { label: "Kyndryl 상장 시총", value: "약 $190억", sub: "2021년 11월 4일 NYSE 상장" },
    ],
    subBody: "퍼블릭 클라우드의 급성장으로 전통적인 IT 인프라 아웃소싱(Outsourcing) 시장은 구조적으로 축소되고 있었다. Kyndryl의 주요 고객인 금융기관·정부기관은 클라우드 이전이 느렸지만, 장기적으로 동일한 압박에 직면했다. IBM은 이 역성장 사업을 분리함으로써 하이브리드 클라우드 성장 스토리를 명확하게 투자자에게 제시할 수 있게 됐다.",
    players: [
      { name: "IBM", role: "분사 주체, 하이브리드 클라우드+AI 집중" },
      { name: "Kyndryl", role: "분사 대상, 세계 최대 독립 IT 인프라 서비스 기업" },
      { name: "Amazon AWS", role: "퍼블릭 클라우드 1위, Kyndryl 고객 이탈 수혜" },
      { name: "Microsoft Azure", role: "퍼블릭 클라우드 2위, IBM-Red Hat 파트너 동시 경쟁" },
      { name: "Accenture", role: "IT 관리 서비스 경쟁사, 클라우드 컨설팅 강점" },
    ],
  },

  companyOverview: {
    targetName: "IBM 인프라 서비스 사업부 (Kyndryl 분사 전)",
    body: "Kyndryl은 IBM의 관리형 인프라 서비스(Managed Infrastructure Services, MIS) 사업부를 독립 법인화한 기업이다. 미국 연방정부, 대형 금융기관, 제조업체 등 IBM의 수십 년 장기 고객들의 IT 인프라를 운영·관리했다. 60개국에서 90,000명이 근무하며, 분사 당시 세계 최대 독립 IT 인프라 서비스 기업이 됐다. 주요 서비스: 메인프레임 유지보수, 하이브리드 클라우드 인프라 관리, 네트워크 관리, IT 보안 운영. 그러나 클라우드 이관 가속으로 매출은 역성장 중이었다.",
    metrics: [
      { label: "연매출 (분사 기준)", value: "약 $190억", sub: "역성장 추세" },
      { label: "직원 수", value: "약 90,000명", sub: "60개국, 세계 최대 독립 IT 인프라 기업" },
      { label: "상장 시총", value: "약 $190억", sub: "2021년 11월 NYSE 상장 초기" },
      { label: "주요 고객", value: "미국 연방정부, 대형 금융기관", sub: "IBM의 오랜 장기 계약 고객" },
      { label: "상장 후 3년 시총", value: "약 $60억", sub: "주가 -70% 이상 하락" },
    ],
    financials: [
      {
        year: "FY2019",
        revenue: 19000,
        cogs: 14500,
        grossProfit: 4500,
        sga: 2000,
        operatingIncome: 1000,
        ebitda: 1800,
      },
      {
        year: "FY2020",
        revenue: 18300,
        cogs: 14000,
        grossProfit: 4300,
        sga: 1900,
        operatingIncome: 800,
        ebitda: 1600,
      },
    ],
    financialsNote: "단위: USD 백만(M). IBM 인프라 서비스 사업부(Kyndryl 분사 전) 기준. 공개 보고서 기반 추정치 포함.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
  },

  dealStructure: {
    body: "IBM은 Section 355 면세 분사 방식으로 Kyndryl을 완전 독립 기업으로 분리했다. IBM 주주들은 보유한 IBM 주식 1주당 Kyndryl 주식 1주를 세금 없이 수령했다. 분사 완료 후 IBM은 Kyndryl 지분을 전혀 보유하지 않는다. Kyndryl은 2021년 11월 4일 NYSE에 독립 상장(KD)했다.",
    preOwnership: {
      nodes: [
        { id: "ibm_parent", label: "IBM", sub: "NYSE 상장 (IBM)", type: "acquirer" },
        { id: "mis_div", label: "인프라 서비스 사업부 (Kyndryl 前)", sub: "IBM 100% 보유, 내부 사업부", type: "target" },
        { id: "cloud_div", label: "하이브리드 클라우드 사업부", sub: "IBM 100% 보유, Red Hat 포함", type: "entity" },
      ],
      edges: [
        { from: "ibm_parent", to: "mis_div", label: "100%" },
        { from: "ibm_parent", to: "cloud_div", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ibm_post", label: "IBM", sub: "NYSE: IBM (하이브리드 클라우드·AI 집중)", type: "acquirer" },
        { id: "kyndryl", label: "Kyndryl Holdings Inc.", sub: "NYSE: KD (독립 상장, 2021.11)", type: "public" },
        { id: "ibm_shareholders", label: "IBM 기존 주주", sub: "IBM 1주당 Kyndryl 1주 면세 수령", type: "entity" },
      ],
      edges: [
        { from: "ibm_post", to: "kyndryl", label: "완전 분리 (잔여 지분 0%)" },
        { from: "ibm_shareholders", to: "kyndryl", label: "면세 배분 수령" },
      ],
    },
    keyTerms: [
      { label: "분사 방식", value: "Section 355 면세 분사", accent: true },
      { label: "배분 비율", value: "IBM 1주당 Kyndryl 1주 (세금 없이)", accent: true },
      { label: "Kyndryl 상장일", value: "2021년 11월 4일 NYSE (KD)", accent: false },
      { label: "상장 초기 시총", value: "약 $190억", accent: false },
      { label: "IBM 잔여 지분", value: "0% (완전 분리)", accent: false },
      { label: "EV / EBITDA", value: "약 10x (상장 초기)", accent: false },
      { label: "Kyndryl 직원", value: "약 90,000명, 60개국", accent: false },
    ],
  },

  advisors: {
    body: "IBM은 Evercore와 Goldman Sachs를 재무 자문으로, Sullivan & Cromwell을 법률 자문으로 선임해 분사 구조를 설계했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "IBM (분사 주체)",
        initials: "IBM",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Evercore", role: "재무 자문 (FA)", roleType: "financial", note: "분사 구조 설계 및 가치평가 자문" },
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "교환 구조 및 주관사 자문" },
          { firm: "Sullivan & Cromwell", role: "법률 자문", roleType: "legal", note: "Section 355 면세 분사 법률 총괄" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 SEC 공시 기반입니다.",
  },

  valuation: {
    body: "Kyndryl은 상장 초기 EV/EBITDA 약 10배에 가격이 형성됐다. IT 서비스 동종업계(Accenture, DXC Technology 등) 평균 대비 낮은 멀티플로, 역성장 구조가 이미 반영됐다. 이후 매출 역성장이 지속되며 시총은 상장 후 2년 내 $190억에서 $60억 수준으로 하락했다.",
    rows: [
      { item: "Kyndryl 상장 초기 시총", val: "약 $190억", note: "2021년 11월 NYSE 상장", accent: true },
      { item: "EV / EBITDA (상장 기준)", val: "약 10x", note: "IT 서비스 업계 평균 이하, 역성장 반영" },
      { item: "Kyndryl 연매출", val: "약 $190억", note: "FY2020 기준, 역성장 추세" },
      { item: "EBITDA", val: "약 $16억", note: "FY2020 기준, 마진 약 8.7%" },
      { item: "IBM 시총 (분사 후)", val: "점진적 회복", note: "하이브리드 클라우드·AI 집중 재평가" },
      { item: "Kyndryl 시총 (2023년)", val: "약 $60억", note: "상장 대비 -68% 하락", accent: true },
    ],
    disclaimer: "밸류에이션 수치는 공개 보도 및 SEC 공시 기반입니다. Kyndryl은 상장 이후 지속적인 주가 하락을 경험했습니다.",
  },

  rationale: {
    buyer: {
      title: "IBM 분사 논리",
      initials: "IBM",
      bg: "bg-blue-700",
      points: [
        "하이브리드 클라우드+AI 집중 — Red Hat 기반 OpenShift 플랫폼과 IBM watsonx AI에 R&D 자원 집중",
        "레거시 이미지 탈피 — '낡은 IT 공룡' 이미지에서 벗어나 클라우드·AI 성장 기업으로 재정의",
        "멀티플 재평가 — 역성장 인프라 사업이 분리되면 IBM의 클라우드·AI 고성장 멀티플 적용 가능",
        "경영 집중 — Kyndryl의 복잡한 글로벌 인프라 운영 대신 플랫폼·소프트웨어 사업에 경영 에너지 집중",
        "투자자 메시지 명확화 — IBM을 하이브리드 클라우드 순수 플레이어로 포지셔닝해 기관투자자 관심 확보",
      ],
    },
    seller: {
      title: "Kyndryl 독립 논리",
      initials: "KD",
      bg: "bg-purple-700",
      points: [
        "독립 경영 자유 — IBM의 클라우드·AI 전략과 이해충돌 없이 인프라 고객 서비스에 집중",
        "멀티벤더 전략 — IBM이 아닌 AWS·Azure·GCP 등 다양한 클라우드 파트너와 협업 자유",
        "독립 자본 구조 — 인프라 서비스 특성에 맞는 별도 배당·부채 구조 설계",
        "고객 신뢰 강화 — IBM 특정 솔루션에 묶이지 않는 중립 IT 서비스 기업으로 포지셔닝",
        "독립 M&A — 인프라 서비스 영역에서 독자적인 인수합병 전략 추진",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "분사 후 IBM은 하이브리드 클라우드와 AI 사업에 집중하며 점진적인 회복세를 보였다. IBM watsonx AI 플랫폼은 2024년 $20억+ 예약을 달성했다. IBM 주가는 분사 후 서서히 회복해 2024년 $220+ 수준에 도달했다. 반면 Kyndryl은 분사 후 지속적인 매출 역성장(연 5~8%)과 클라우드 이관 가속으로 주가가 공모 대비 -70% 이상 하락했다. 3년 후 시총은 상장 초기 $190억에서 약 $60억 수준으로 줄었다. Kyndryl 경영진은 IT 서비스 디지털 전환(파트너십·AI 통합)으로 역성장을 늦추려 하고 있으나, 구조적 역풍은 지속됐다.",
    overallVerdict: "IBM 하이브리드 클라우드 집중 전략 효과, Kyndryl은 레거시 IT 구조 사업의 독립 한계 증명",
    positives: [
      "IBM 클라우드·AI 재평가 — watsonx $2B+ 예약, IBM 주가 분사 후 $220+ 도달",
      "IBM 경영 집중 효과 — Red Hat·클라우드·AI에 R&D 자원 집중, 성장 스토리 명확화",
      "IBM 주주 이중 수혜 — Kyndryl 지분 수령 + IBM 제품믹스 개선 수혜",
      "레거시 이미지 탈피 성공 — IBM을 하이브리드 클라우드 기업으로 재포지셔닝",
      "Kyndryl 독립 멀티벤더 전략 — AWS·Azure와 협업으로 기존 IBM 고객 유지 시도",
    ],
    risks: [
      "Kyndryl 주가 -70%+ 하락 — 레거시 IT 역성장의 구조적 한계",
      "Kyndryl 직원 구조조정 — 독립 후 글로벌 인력 감축 불가피",
      "클라우드 이관 가속 — 고객들의 퍼블릭 클라우드 이전으로 Kyndryl 매출 지속 감소",
      "IBM watsonx 경쟁 강도 — OpenAI·Google·Amazon과의 엔터프라이즈 AI 경쟁 치열",
      "Kyndryl 수익성 과제 — 낮은 EBITDA 마진(~8%)으로 독립 기업 생존력 도전",
    ],
    editorNote: "IBM-Kyndryl 분사는 '부실 자산 분리 효과'의 교과서다. IBM은 레거시 IT 사업을 분리해 하이브리드 클라우드 기업으로의 정체성 전환에 성공했다. 그러나 Kyndryl의 -70% 주가 하락은 레거시 IT 인프라 사업이 독립 기업으로서 구조적으로 얼마나 어려운지를 적나라하게 보여준다. '분사가 두 기업 모두에게 좋다'는 가정이 항상 성립하지 않음을 증명하는 사례다.",
  },

  tombstone: {
    acquirerInitials: "IBM",
    acquirerBg: "bg-blue-700",
    targetInitials: "KD",
    targetBg: "bg-purple-700",
    acquirerName: "IBM (International Business Machines)",
    targetName: "Kyndryl Holdings Inc.",
    dealTitle: "IT 인프라 레거시 분리 / Legacy IT Infrastructure Spinoff",
    dealSize: "$190억 (Kyndryl 상장 시총)",
    dealSizeUSD: "USD 19B market cap at listing",
    evEbitda: "약 10x EBITDA",
    closeDate: "Nov 2021",
  },

  sources: [
    { id: 1, text: "IBM Press Release — IBM Plans to Separate Managed Infrastructure Services Unit (October 2020)", url: "https://newsroom.ibm.com" },
    { id: 2, text: "Kyndryl Form 10 Registration Statement (SEC Filing, 2021)", url: "https://www.sec.gov" },
    { id: 3, text: "The Wall Street Journal — IBM Spins Off IT-Services Business (November 2021)" },
    { id: 4, text: "Bloomberg — Kyndryl Begins Trading as IBM Spinoff Hits NYSE (November 2021)" },
    { id: 5, text: "Financial Times — IBM's Kyndryl Spinoff: What the Deal Means for Big Blue (2021)" },
    { id: 6, text: "Reuters — IBM Completes Kyndryl Spinoff, Shares Begin Trading (November 2021)" },
    { id: 7, text: "CNBC — Kyndryl CEO Martin Schroeter on the Challenge of Running IBM's Legacy IT Business (2022)" },
  ],

  seo: {
    title: "IBM-Kyndryl 분사 완전 분석 — 레거시 IT 분리와 하이브리드 클라우드 집중 전략",
    description: "IBM-Kyndryl 분사 완전 분석 — 레거시 IT 분리와 하이브리드 클라우드 집중 전략. Kyndryl 주가 -70% 하락 원인, IBM 재평가, 분사 구조까지 심층 해부.",
    keywords: [
      "IBM Kyndryl 분사",
      "IBM spinoff",
      "Kyndryl 주가",
      "레거시 IT 분리",
      "IBM 하이브리드 클라우드",
      "Red Hat IBM",
      "IT 인프라 스핀오프",
    ],
  },

  concepts: [
    { term: "면세 분사 (Tax-Free Spinoff / Section 355)", href: "/deal-101/tax-free-spinoff", description: "미국 세법 Section 355에 따라 모회사 주주에게 세금 없이 자회사 지분을 배분하는 분사 구조 — IBM이 택한 방식" },
    { term: "멀티플 희석 (Multiple Dilution)", href: "/deal-101/multiple-dilution", description: "고성장 클라우드·AI와 저성장 레거시 IT가 한 기업에 있을 때 투자자가 낮은 혼합 멀티플을 적용하는 현상" },
    { term: "성장-레거시 분리 전략", href: "/deal-101/growth-legacy-separation", description: "고성장 신사업과 저성장 레거시 사업을 분리해 각각의 최적 멀티플을 받도록 하는 구조조정 전략" },
    { term: "스핀오프 (Spin-off)", href: "/deal-101/spinoff", description: "모회사가 사업부를 독립 기업으로 분리해 주주들에게 지분을 배분하는 구조조정 방식" },
  ],

  faq: [
    {
      q: "IBM이 $190억 IT 인프라 사업을 왜 분사했나요?",
      a: "핵심 이유는 성장-레거시 멀티플 충돌입니다. IBM의 관리형 인프라 서비스는 연 5~10% 매출이 역성장하는 레거시 사업이었습니다. 반면 Red Hat 기반 하이브리드 클라우드와 AI 사업은 고성장·고마진입니다. 두 사업이 한 기업에 있으면 투자자들이 낮은 혼합 멀티플을 적용해 IBM의 클라우드·AI 가치가 저평가됩니다. 분사로 IBM은 '하이브리드 클라우드+AI 기업'으로 투자자에게 명확한 성장 스토리를 제시할 수 있게 됐습니다.",
    },
    {
      q: "Kyndryl 분사 후 주가가 왜 그렇게 많이 떨어졌나요?",
      a: "구조적인 역성장 때문입니다. Kyndryl의 핵심 사업은 기업들의 온프레미스 IT 인프라를 관리하는 것인데, 이 고객들이 빠르게 AWS·Azure·GCP 퍼블릭 클라우드로 이전하고 있었습니다. 독립 후에는 IBM의 지원 없이 이 역성장을 홀로 감당해야 했습니다. 분사 후 Kyndryl 매출은 연 5~8% 역성장을 지속했고, 3년 내 시총이 $190억에서 $60억으로 줄었습니다.",
    },
    {
      q: "IBM은 Red Hat을 $340억에 인수하고도 왜 IT 인프라를 분사해야 했나요?",
      a: "Red Hat 인수(2019년)와 Kyndryl 분사(2021년)는 같은 전략의 두 측면입니다. Red Hat 인수로 IBM은 하이브리드 클라우드 플랫폼(OpenShift)을 확보했고, Kyndryl 분사로 레거시 인프라 사업을 제거했습니다. 투자자에게 'IBM = 하이브리드 클라우드+AI'라는 성장 스토리를 만들기 위해, 고성장 자산(Red Hat) 인수와 저성장 자산(인프라 서비스) 분사를 동시에 진행한 것입니다.",
    },
    {
      q: "Kyndryl의 미래 전망은 어떤가요?",
      a: "어렵습니다. Kyndryl 경영진은 'Alliances' 전략으로 AWS·Azure·Google Cloud와 파트너십을 맺어 레거시에서 클라우드 전환 컨설팅으로 사업 모델을 전환하려 하고 있습니다. IBM 브랜드 없이 장기 계약 갱신이 어려운 상황이고, 구조적인 IT 아웃소싱 시장 축소는 지속되고 있습니다. Kyndryl이 독립 IT 서비스 기업으로 생존하려면 클라우드 전환 컨설팅 역량을 빠르게 키우는 것이 핵심 과제입니다.",
    },
  ],

  restructuringOverview: {
    body: "IBM-Kyndryl 분사는 '하이브리드 클라우드·AI 성장주'와 '레거시 IT 인프라 역성장 사업'이 한 기업에 공존할 때 어떤 멀티플 문제가 생기는지, 그리고 분사가 이를 어떻게 해결하는지를 보여주는 전형적 사례입니다. 동시에 분사된 레거시 사업이 독립 후 어떤 현실을 마주하는지도 함께 분석합니다.",
    trigger: "하이브리드 클라우드·AI vs 레거시 IT 인프라의 멀티플 충돌",
    triggerDetail: "IBM의 IT 인프라 관리 서비스는 안정적 매출 $190억을 만들지만 성장률이 -5~-10%(클라우드 이관으로 감소 중)였습니다. 반면 Red Hat 기반 하이브리드 클라우드와 AI 사업은 고성장·고마진입니다. 혼재 시 IBM은 '낡은 IT 공룡' 이미지를 벗기 어렵고, 클라우드 순수 플레이어(AWS·Azure·GCP) 대비 낮은 멀티플을 받았습니다. 분사로 IBM은 깨끗한 성장 스토리를 제시할 수 있게 됩니다.",
    method: "tax-free-spinoff",
    methodLabel: "Section 355 면세 분사",
    whyThisMethod: "Kyndryl은 독립 운영 능력이 충분했고, IBM 주주들에게 세금 없이 두 가지 다른 투자 선택권을 제공할 수 있었습니다. 현금 매각보다 분사가 IBM 주주들에게 더 큰 가치를 제공했습니다.",
    methodVsAlternatives: [
      {
        method: "현금 매각",
        reason: "$190억 규모 IT 서비스 기업을 즉시 매각하면 수십억 달러 세금 부담과 고객 이탈 위험이 있었습니다.",
      },
      {
        method: "합작법인(JV) 구조",
        reason: "IBM이 지분을 유지하면 레거시 사업 오명이 지속되어 IBM 자체 멀티플 개선 효과가 제한됩니다.",
      },
      {
        method: "사업부 유지",
        reason: "클라우드 순수 플레이어 대비 IBM의 레거시 이미지가 지속되어 AI·클라우드 성장 멀티플을 받지 못합니다.",
      },
    ],
    theoreticalInsights: [
      {
        concept: "성장-레거시 분리 (Growth-Legacy Separation)",
        explanation: "한 기업에 고성장 디지털 사업과 저성장 레거시 사업이 공존하면 투자자들이 하나의 밸류에이션 프레임을 적용하기 어렵습니다. 분리 후 각자 해당 섹터의 멀티플을 받습니다.",
        howApplied: "IBM 분사 후 하이브리드 클라우드·AI에 집중하며 P/E 멀티플이 개선됐습니다. Kyndryl은 IT 서비스 멀티플을 독자적으로 받습니다.",
      },
      {
        concept: "스트래티직 클린-슬레이트 (Strategic Clean Slate)",
        explanation: "구조조정을 통해 기업이 '새로운 스토리'를 투자자에게 제시하는 전략. IBM은 Kyndryl 분사로 'AI 하이브리드 클라우드 기업'으로의 정체성 전환을 명확히 했습니다.",
        howApplied: "IBM CEO 아르빈드 크리슈나는 분사를 'IBM 역사의 새 챕터'로 표현하며, Red Hat과 AI 사업에 R&D·M&A를 집중 배분했습니다.",
      },
      {
        concept: "분사 후 실적 검증 (Post-Spinoff Performance Reality)",
        explanation: "분사된 레거시 사업부는 독립 후 매출·마진 압박이 적나라하게 드러나는 경향이 있습니다. 모회사의 지원 없이 독자 생존력을 증명해야 합니다.",
        howApplied: "Kyndryl은 상장 후 주가가 공모가 대비 -70% 이상 하락했습니다. 레거시 IT 인프라의 클라우드 이관 가속으로 매출 역성장이 지속됐습니다.",
      },
    ],
    executionSteps: [
      {
        phase: "Phase 1",
        date: "2020년 10월",
        action: "IBM CEO 아르빈드 크리슈나 분사 공식 발표",
        detail: "IBM이 인프라 서비스 사업부를 독립 기업으로 분사한다고 발표. 분사명 'Kyndryl' 결정. IBM은 하이브리드 클라우드+AI 집중 기업으로 재정의됨.",
        financialNote: "발표 당일 IBM 주가 +5%",
      },
      {
        phase: "Phase 2",
        date: "2021년 1~10월",
        action: "Kyndryl 독립 법인 준비 — 고객 계약·인프라 분리",
        detail: "60개국 고객 계약 재협상, IT 인프라 자산 분리, Kyndryl 브랜드 출범. IBM과의 서비스 계약(transitional services agreement) 체결.",
      },
      {
        phase: "Phase 3",
        date: "2021년 11월 4일",
        action: "Kyndryl NYSE 독립 상장 (KD)",
        detail: "IBM 주주 1주당 Kyndryl 1주 세금 없이 수령. NYSE 상장(KD). 시총 약 $190억으로 출발. 세계 최대 독립 IT 인프라 서비스 기업 출범.",
        financialNote: "상장 초기 시총 $190억, 이후 지속 하락",
      },
    ],
    stakeholders: [
      {
        name: "IBM 주주",
        icon: "💻",
        impact: "positive",
        summary: "IBM 성장 스토리 집중 + Kyndryl 주식",
        detail: "IBM 주주들은 Kyndryl 주식을 수령해 두 기업에 독자 투자 결정 가능. IBM은 클라우드·AI 성장주로 재평가받기 시작.",
        metric: "IBM 주가 분사 후 서서히 회복",
      },
      {
        name: "Kyndryl 직원",
        icon: "🖥️",
        impact: "mixed",
        summary: "안정 고용 vs 레거시 사업 압박",
        detail: "9만명 직원은 IBM의 지원 없이 독립 후 구조조정 압박에 노출됐습니다. 일부 사업부 통폐합 및 인력 감축이 불가피했습니다.",
        metric: "Kyndryl 직원 90,000명 (60개국)",
      },
      {
        name: "Kyndryl 주주",
        icon: "📉",
        impact: "negative",
        summary: "주가 IPO 대비 -70%+ 하락",
        detail: "레거시 IT 인프라의 구조적 역성장으로 Kyndryl 주가가 상장 후 지속 하락했습니다. 클라우드 이관이 가속화되며 매출이 감소했습니다.",
        metric: "IPO 후 2년 내 주가 -70%+",
      },
      {
        name: "Kyndryl 고객 (정부·금융기관)",
        icon: "🏛️",
        impact: "neutral",
        summary: "서비스 연속성 유지",
        detail: "IBM 분리 후 서비스 연속성 계약(TSA)으로 단기적 충격은 없었습니다. 그러나 IBM 브랜드 신뢰 없이 장기 계약 갱신이 어려워지는 사례 발생.",
      },
      {
        name: "Amazon AWS / Microsoft Azure",
        icon: "☁️",
        impact: "positive",
        summary: "레거시 IT 이탈 가속 수혜",
        detail: "IBM 인프라에서 클라우드로 이전하는 기업들이 Kyndryl 분사 후 이관을 가속화해 클라우드 사업자들이 수혜.",
      },
    ],
    beforeAfter: [
      {
        metric: "IBM 멀티플 (P/E)",
        before: "약 12x (레거시 혼재)",
        after: "약 18x (클라우드 집중)",
        change: "+6x",
        isPositive: true,
      },
      {
        metric: "Kyndryl 매출",
        before: "$190억 (분사 시)",
        after: "$160억 (3년 후, 역성장)",
        change: "-16%",
        isPositive: false,
      },
      {
        metric: "IBM R&D 집중도",
        before: "클라우드+인프라 분산",
        after: "하이브리드 클라우드·AI 집중",
        change: "포커스 명확화",
        isPositive: true,
      },
      {
        metric: "Kyndryl 시총",
        before: "$190억 (상장 시)",
        after: "$60억 (2023년)",
        change: "-68%",
        isPositive: false,
      },
      {
        metric: "IBM watsonx AI",
        before: "방향 불명확",
        after: "$2B+ 예약 (2024)",
        change: "Kyndryl 분리 후 집중 가속",
        isPositive: true,
      },
    ],
    marketImpact: {
      announcementReturn: "IBM 발표 당일 +5%",
      shortTermReturn: "분사 후 1년 IBM +15%, Kyndryl -40%",
      longTermReturn: "IBM 2024년 $220+, Kyndryl $15 (공모가 대비 -30%)",
      contextNote: "'부실 자산 분리 효과'가 IBM에는 긍정적, Kyndryl은 레거시 구조 사업의 독립 한계를 보여줌",
    },
  },
};

export default deal;
