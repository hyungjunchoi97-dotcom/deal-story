/**
 * 세일즈포스 × 슬랙 인수
 * 팬데믹 SaaS 최대 M&A — $27.7B, 2021년 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "salesforce-slack",
  title: "세일즈포스는 왜 $277억에 슬랙을 샀나 — 팬데믹이 만든 SaaS 최대 M&A 해부",
  subtitle: "Microsoft Teams와의 전쟁 · ARR 26배 프리미엄 · Customer 360 플랫폼 전략의 완성",
  category: "ma",
  industry: "엔터프라이즈 SaaS / 클라우드 소프트웨어",
  country: "미국",
  announcedAt: "2020-12-01",
  closedAt: "2021-07-21",
  announcedDisplay: "2020년 12월",
  closedDisplay: "2021년 7월",
  readingMinutes: 12,
  tags: ["Salesforce", "Slack", "Microsoft Teams", "SaaS", "enterprise software", "CRM", "collaboration", "pandemic M&A"],
  excerpt:
    "세일즈포스가 슬랙을 $27.7B(약 30조원)에 인수한 팬데믹 시대 최대 SaaS M&A. Microsoft Teams의 무서운 성장에 맞서 CRM 플랫폼의 '프론트도어'를 확보하기 위해 ARR 26배 프리미엄을 지불했다. Customer 360 디지털 HQ 전략의 핵심 퍼즐 조각이 된 슬랙, 그리고 여전히 남은 Teams와의 승부.",

  acquirer: { initials: "CRM", bg: "bg-blue-500", label: "세일즈포스" },
  target: { initials: "WORK", bg: "bg-violet-600", label: "슬랙 테크놀로지스" },

  background: [
    "2020년 팬데믹이 전 세계 기업의 원격 근무를 강제하면서 업무용 협업 툴 시장이 폭발적으로 성장했다. Zoom, Microsoft Teams, Slack이 주요 수혜자였으나, 마이크로소프트는 Teams를 Office 365 구독에 무료로 번들링하며 슬랙의 시장을 빠르게 잠식했다. 2020년 Teams의 일간 활성 이용자(DAU)는 슬랙의 수배를 넘어섰고, 슬랙은 기업 고객 확장에 한계를 드러내기 시작했다.",
    "세일즈포스는 CRM·영업·마케팅·서비스 클라우드를 아우르는 'Customer 360' 플랫폼을 구축해왔지만, 실시간 커뮤니케이션 레이어가 부재했다. 고객사 직원들이 슬랙·Teams 등 외부 메신저를 통해 업무를 처리하는 동안 세일즈포스 데이터는 별도 애플리케이션에 고립되는 구조였다. 마크 베니오프(Marc Benioff) CEO는 슬랙이 '디지털 HQ'의 핵심이 될 수 있다고 판단했다.",
    "슬랙은 2019년 NYSE에 직상장(Direct Listing) 방식으로 상장했으나 주가는 지지부진했다. Teams의 무상 번들 공세가 이어지면서 투자자들 사이에서 슬랙의 독립 성장 가능성에 대한 의구심이 커졌고, IPO 당시 기대치보다 낮은 수준에서 주가가 형성됐다. 슬랙 CEO 스튜어트 버터필드(Stewart Butterfield)는 대형 플랫폼과의 결합이 슬랙의 가치를 극대화하는 최선의 방법이라고 판단했다.",
    "2020년 12월 1일, 세일즈포스는 슬랙을 주당 $26.79 현금과 0.0776주의 세일즈포스 주식을 결합한 혼합 방식으로 인수한다고 발표했다. 총 거래 규모는 $27.7B로, 당시 슬랙 주가 대비 약 55% 프리미엄에 해당했으며 세일즈포스 역대 최대 인수였다. 2021년 7월 21일 규제 당국 승인을 받아 최종 거래가 완료됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "$27.7B (약 30조원)",
    acquirerName: "세일즈포스 (Salesforce, Inc.)",
    targetName: "슬랙 테크놀로지스 (Slack Technologies, Inc.)",
    announcedDisplay: "2020년 12월",
    closedDisplay: "2021년 7월",
    country: "미국",
  },

  executiveSummary: [
    "팬데믹 SaaS 최대 M&A — 세일즈포스 역대 최대 인수, 현금·주식 혼합, 약 55% 인수 프리미엄",
    "핵심 논리: Microsoft Teams의 번들 공세에 맞서 CRM 플랫폼의 실시간 커뮤니케이션 레이어 확보",
    "EV/FY2021 매출 약 26배 프리미엄 — 팬데믹 SaaS 붐의 정점에서 체결된 고밸류에이션 딜",
    "인수 후 슬랙은 'Salesforce의 디지털 HQ'로 재포지셔닝, Customer 360 플랫폼과 깊이 통합",
    "Teams는 여전히 시장 지배력 유지 — $27.7B 투자의 ROI 실현 여부는 장기 과제",
    "SaaS 적자 기업 고배수 인수의 교과서 — ARR 멀티플과 플랫폼 전략 가치의 경계를 탐색한 딜",
  ],

  industryOverview: {
    body: "2020년 기준 글로벌 엔터프라이즈 협업 소프트웨어 시장은 약 $450억 규모였으며, 팬데믹으로 인한 원격 근무 전환으로 연간 15% 이상 성장했다. 이메일·회의 중심의 전통적 업무 방식이 채널 기반 메시징, 비동기 협업으로 빠르게 대체되면서 슬랙, Microsoft Teams, Zoom, Google Meet가 치열한 경쟁을 벌였다. 특히 Teams는 마이크로소프트의 Office 365 번들 전략으로 기업 고객에서 폭발적으로 성장해 슬랙의 최대 위협으로 부상했다.",
    metrics: [
      { label: "엔터프라이즈 협업 시장 규모", value: "약 $450억", sub: "2020년 기준, 연 15%+ 성장" },
      { label: "Microsoft Teams DAU", value: "1억 1,500만 명", sub: "2020년 10월 발표 기준" },
      { label: "Slack DAU", value: "약 1,200만 명", sub: "2020년 공시 기준" },
      { label: "글로벌 CRM 시장 규모", value: "약 $580억", sub: "2020년, 세일즈포스 시장 점유율 ~20%" },
    ],
    subBody: "Teams의 성공은 단순한 제품 경쟁력이 아니라 번들링의 힘에서 나왔다. 수억 명의 Office 365 기업 이용자들이 별도 비용 없이 Teams를 사용할 수 있었기 때문에, 슬랙은 '더 좋은 제품'이라는 명성만으로 유료 전환을 설득해야 하는 구조적 불리함을 안고 있었다. 이 비대칭 경쟁이 슬랙의 매각 결정에서 핵심 배경이 됐다.",
    players: [
      { name: "Microsoft Teams", role: "Office 365 번들 통합, 기업 협업 시장 1위" },
      { name: "Zoom", role: "화상회의 1위, 메시징 시장도 확장 시도" },
      { name: "Google Workspace (Meet/Chat)", role: "구글의 엔터프라이즈 협업 플랫폼" },
      { name: "Salesforce (CRM)", role: "기업용 CRM·클라우드 플랫폼 1위 인수자" },
    ],
  },

  companyOverview: {
    targetName: "슬랙 테크놀로지스 (Slack Technologies, Inc.)",
    body: "슬랙은 2013년 설립된 채널 기반 메시징 플랫폼으로, 이메일을 대체하는 업무용 커뮤니케이션 도구로 빠르게 성장했다. 2019년 직상장(Direct Listing)으로 NYSE에 상장(티커: WORK)했으나 IPO 당시 기대보다 낮은 주가 흐름을 보였다. 매출의 약 97%가 구독 기반(SaaS)으로 구성돼 안정적인 ARR(연간반복매출) 구조를 보유했지만, 대규모 마케팅·영업 투자로 인해 영업손실과 EBITDA 적자가 지속됐다. 인수 발표 직전 분기 기준 유료 고객사는 약 142,000개로 Fortune 100 기업의 65%가 고객이었다.",
    metrics: [
      { label: "FY2021 연 매출", value: "$902M", sub: "전년 대비 +43% 성장" },
      { label: "유료 고객사 수", value: "약 14만 2천 개", sub: "2021년 초 기준" },
      { label: "Fortune 100 침투율", value: "65%", sub: "2021년 초 기준" },
      { label: "DAU", value: "약 1,200만 명", sub: "2020년 공시 기준" },
      { label: "설립·상장", value: "2013년 / 2019년", sub: "직상장(Direct Listing) 방식" },
    ],
    financials: [
      { year: "FY2019", revenue: 401, cogs: 75, grossProfit: 326, sga: 490, operatingIncome: -139, ebitda: -120 },
      { year: "FY2020", revenue: 630, cogs: 106, grossProfit: 524, sga: 700, operatingIncome: -571, ebitda: -500 },
      { year: "FY2021", revenue: 902, cogs: 147, grossProfit: 755, sga: 820, operatingIncome: -520, ebitda: -440 },
    ],
    financialsNote: "단위: USD 백만(M). FY는 1월 결산. 슬랙 연간 실적 공시 기준.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "구독", pct: 97, color: "bg-violet-600", amt: "약 $875M" },
      { name: "서비스", pct: 3, color: "bg-violet-300", amt: "약 $27M" },
    ],
  },

  dealStructure: {
    body: "세일즈포스는 슬랙 주주에게 주당 $26.79 현금과 0.0776주의 세일즈포스(CRM) 주식을 지급하는 현금·주식 혼합 방식으로 딜을 설계했다. 총 인수 대금 $27.7B 중 약 $12B는 현금(세일즈포스 신규 차입 포함), 약 $15.7B는 세일즈포스 주식으로 조달됐다. 미국 DOJ 반독점 심사와 주요국 규제 심사를 거쳐 2021년 7월 21일 최종 완료됐으며, 슬랙은 NYSE 상장 폐지 후 세일즈포스의 완전 자회사가 됐다.",
    preOwnership: {
      nodes: [
        { id: "slack_public", label: "슬랙 테크놀로지스", sub: "NYSE 상장 (WORK)", type: "public" },
        { id: "crm_public", label: "세일즈포스", sub: "NYSE 상장 (CRM)", type: "acquirer" },
      ],
      edges: [
        { from: "slack_public", to: "crm_public", label: "독립 상장사" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "crm_parent", label: "세일즈포스", sub: "NYSE 상장 (CRM)", type: "acquirer" },
        { id: "slack_sub", label: "슬랙 테크놀로지스", sub: "세일즈포스 완전 자회사", type: "target" },
      ],
      edges: [
        { from: "crm_parent", to: "slack_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "딜 규모 (총 EV)", value: "$27.7B (약 30조원)", accent: true },
      { label: "인수 주가 (현금)", value: "주당 $26.79 현금", accent: false },
      { label: "인수 주가 (주식)", value: "슬랙 1주당 CRM 주식 0.0776주", accent: false },
      { label: "인수 프리미엄", value: "약 55% (공시 전일 종가 대비)", accent: true },
      { label: "거래 형태", value: "현금·주식 혼합 합병 (Cash-and-Stock Merger)", accent: false },
      { label: "EV / FY2021 매출", value: "약 26x", accent: true },
      { label: "EV / EBITDA", value: "N/M (영업 적자)", accent: false },
      { label: "해지 수수료", value: "$900M (Termination Fee)", accent: false },
      { label: "거래 완료일", value: "2021년 7월 21일", accent: false },
    ],
  },

  advisors: {
    body: "세일즈포스와 슬랙 양측에 월가 최정상 IB와 로펌들이 자문을 맡았다. 슬랙 측은 테크 M&A 전문 부티크인 Qatalyst Partners가 핵심 재무 자문을 담당한 점이 이 딜의 특징이다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (세일즈포스)",
        initials: "CRM",
        bg: "bg-blue-500",
        advisors: [
          { firm: "JPMorgan Chase", role: "재무 자문 (FA)", roleType: "financial", note: "딜 구조 설계 및 가격 책정 총괄" },
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "공동 재무 자문, 자금 조달 지원" },
          { firm: "Weil, Gotshal & Manges", role: "법률 자문", roleType: "legal", note: "M&A 계약 및 규제 대응 총괄" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (슬랙)",
        initials: "WORK",
        bg: "bg-violet-600",
        advisors: [
          { firm: "Qatalyst Partners", role: "재무 자문 (FA)", roleType: "financial", note: "테크 M&A 전문 부티크, 슬랙 이사회 핵심 자문" },
          { firm: "Allen & Company", role: "재무 자문 (FA)", roleType: "financial", note: "공동 재무 자문" },
          { firm: "Goodwin Procter", role: "법률 자문", roleType: "legal", note: "M&A 계약 및 주주 대응" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 공시 기반입니다.",
  },

  valuation: {
    body: "세일즈포스는 슬랙에 FY2021 매출 $902M 대비 약 26배의 EV/Revenue 멀티플을 지불했다. 이는 당시 팬데믹 SaaS 붐으로 고밸류에이션이 형성된 시장 환경을 반영한 수치다. 슬랙은 EBITDA 적자 상태였기 때문에 EV/EBITDA 멀티플은 의미 없으며, 성장률과 ARR 규모, 플랫폼 전략적 가치로 가격이 정당화됐다. 세일즈포스 주식 내재가치까지 포함하면 실효 프리미엄은 공시 기준보다 변동 가능하다.",
    rows: [
      { item: "딜 EV", val: "$27.7B", note: "총 인수 대금 (현금 ~$12B + CRM 주식 ~$15.7B)", accent: true },
      { item: "인수 주가", val: "$26.79 현금 + CRM 0.0776주", note: "공시 전일 슬랙 종가 $27.89 대비 혼합가 약 $44.89" },
      { item: "인수 프리미엄", val: "약 55%", note: "공시 전일 종가 기준", accent: true },
      { item: "FY2021 매출", val: "$902M", note: "전년 대비 +43% 성장" },
      { item: "EV / FY2021 매출", val: "약 26x", note: "팬데믹 SaaS 붐 프리미엄 반영", accent: true },
      { item: "FY2021 EBITDA", val: "-$440M", note: "영업 적자 상태" },
      { item: "EV / EBITDA", val: "N/M (적자)", note: "수익 기반 멀티플 비적용" },
      { item: "해지 수수료", val: "$900M", note: "양측 귀책 사유 발생 시 부과" },
    ],
    disclaimer: "밸류에이션 수치는 공개 공시 및 업계 분석 자료 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "세일즈포스 인수 논리",
      initials: "CRM",
      bg: "bg-blue-500",
      points: [
        "플랫폼 완성 — Customer 360의 마지막 퍼즐, 실시간 커뮤니케이션 레이어를 CRM 생태계에 내재화",
        "Microsoft Teams 위협 대응 — Teams가 엔터프라이즈 협업 시장을 장악하기 전 슬랙을 선제적으로 확보",
        "CRM 프론트도어 전략 — 직원들이 슬랙을 통해 자연스럽게 세일즈포스 데이터에 접근하도록 유도",
        "유통 레버리지 — 세일즈포스의 15만+ 기업 고객 네트워크를 통해 슬랙 유료 전환 가속화",
        "앱 생태계 확장 — Slack App Directory를 세일즈포스 파트너 생태계와 결합해 플랫폼 가치 극대화",
      ],
    },
    seller: {
      title: "슬랙 매각 논리",
      initials: "WORK",
      bg: "bg-violet-600",
      points: [
        "Teams 번들 공세 대응 한계 — 마이크로소프트의 무상 번들 전략에 독립 SaaS로 대응하는 데 구조적 한계",
        "IPO 실망스러운 주가 흐름 — 직상장 후 기대 이하 주가 흐름으로 독립 성장 프리미엄 확보 불확실",
        "$27.7B 확실성 실현 — 세일즈포스의 거대 유통망을 통해 고가 Exit 프리미엄 확보",
        "세일즈포스 플랫폼 유통망 활용 — 15만 기업 고객 기반 위에서 슬랙 성장 잠재력 극대화",
        "CEO 스튜어트 버터필드의 전략적 판단 — 독자 생존보다 플랫폼 파트너십이 장기적으로 우월하다는 결론",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "2021년 7월 인수 완료 이후 슬랙은 'Salesforce의 디지털 HQ'로 재포지셔닝됐다. 브랜드는 'Slack from Salesforce'로 변경됐고, Salesforce Flow, Einstein AI, Customer 360 데이터 클라우드와의 통합이 깊게 이뤄졌다. 그러나 Microsoft Teams는 여전히 기업 협업 시장에서 압도적인 시장 지배력을 유지하고 있으며, 슬랙의 독립적 사용자 성장 수치가 더 이상 공개되지 않아 $27.7B 투자의 ROI를 외부에서 검증하기 어려운 상황이다. 슬랙 공동창업자 스튜어트 버터필드는 2023년 초 세일즈포스를 떠났다.",
    overallVerdict: "전략적 방향은 합리적 (플랫폼 통합 진행 중, ROI 검증은 미완)",
    positives: [
      "Customer 360 플랫폼 통합 완성 — 세일즈포스 앱과 슬랙 간 워크플로우 자동화, 데이터 연동 구현",
      "Enterprise 고객층 교차 판매 — 세일즈포스 기존 고객에게 슬랙 유료 플랜 번들 제공으로 매출 기여",
      "Slack AI 기능 론칭 — Einstein AI 기반 슬랙 내 업무 자동화·요약 기능으로 차별화 강화",
      "기업 협업 SaaS 시장 내 충성 사용자 기반 유지 — 특히 테크·스타트업·개발자 커뮤니티에서 강세",
    ],
    risks: [
      "Microsoft Teams 지배력 지속 — Office 365 번들 효과로 Teams가 기업 시장에서 계속 확장",
      "$27.7B ROI 불투명 — 슬랙 별도 성과 지표 공개 중단으로 투자 대비 효과 측정 어려움",
      "스튜어트 버터필드 등 창업팀 이탈 — 2023년 초 CEO 퇴사로 슬랙 제품 DNA 지속성 우려",
      "세일즈포스 실적 둔화 — 2022~2023년 글로벌 SaaS 시장 침체 속 성장률 저하, 대규모 감원",
      "플랫폼 통합 복잡성 — 세일즈포스와 슬랙의 기술 스택 통합에 예상보다 긴 시간 소요",
    ],
    editorNote: "세일즈포스의 슬랙 인수는 'SaaS 플랫폼이 커뮤니케이션 레이어를 소유해야 하는가'라는 질문에 $27.7B로 답한 딜이다. 팬데믹이 만든 원격 근무 붐의 정점에서 ARR 26배를 지불한 이 베팅의 결과는 아직 현재진행형이다. Teams와의 승부는 여전히 기울어진 운동장이지만, 세일즈포스 생태계 안에서 슬랙이 만드는 '워크플로우 접착제' 가치는 단순한 매출 수치로 측정되지 않는다. 이 딜은 SaaS 고배수 인수의 정당성과 한계를 동시에 보여주는 교과서적 사례다.",
  },

  tombstone: {
    acquirerInitials: "CRM",
    acquirerBg: "bg-blue-500",
    targetInitials: "WORK",
    targetBg: "bg-violet-600",
    acquirerName: "Salesforce, Inc.",
    targetName: "Slack Technologies, Inc.",
    dealTitle: "현금·주식 혼합 합병 (Cash-and-Stock Merger)",
    dealSize: "약 $277억",
    dealSizeUSD: "USD 27.7 Billion",
    evEbitda: "N/M (적자)",
    closeDate: "Jul 2021",
  },

  sources: [
    { id: 1, text: "Salesforce Press Release — Salesforce Signs Definitive Agreement to Acquire Slack (December 2020)", url: "https://investor.salesforce.com" },
    { id: 2, text: "Slack Technologies Form S-4 / Proxy Statement (2021)", url: "https://www.sec.gov" },
    { id: 3, text: "Slack Technologies FY2021 Annual Report (Form 10-K)", url: "https://investor.slack.com" },
    { id: 4, text: "Salesforce FY2022 Q2 Earnings — Slack Integration Update (August 2021)", url: "https://investor.salesforce.com" },
    { id: 5, text: "Bloomberg — Salesforce to Buy Slack for $27.7 Billion in Largest Deal Ever (December 2020)" },
    { id: 6, text: "The Wall Street Journal — Salesforce's Bet on Slack: A $27.7 Billion Gamble on the Future of Work (2021)" },
    { id: 7, text: "Salesforce FY2023 Annual Report — Slack Business Update", url: "https://investor.salesforce.com" },
    { id: 8, text: "Reuters — Slack co-founder Stewart Butterfield leaves Salesforce (January 2023)" },
    { id: 9, text: "Microsoft Teams — 270 Million Monthly Active Users (July 2023)", url: "https://www.microsoft.com" },
  ],

  seo: {
    title: "세일즈포스 슬랙 인수 완전 분석 — $277억 SaaS M&A와 마이크로소프트 Teams 전쟁",
    description: "세일즈포스의 슬랙 $27.7B 인수 완전 분석. Microsoft Teams 위협, ARR 26배 밸류에이션, Customer 360 플랫폼 전략, 인수 후 성과까지 심층 해부.",
    keywords: [
      "세일즈포스 슬랙 인수",
      "Salesforce Slack M&A",
      "슬랙 인수 가격",
      "Microsoft Teams 슬랙 경쟁",
      "SaaS 밸류에이션 분석",
      "ARR 멀티플 인수",
      "팬데믹 SaaS M&A",
      "엔터프라이즈 협업 소프트웨어",
      "CRM 플랫폼 전략",
      "슬랙 기업 가치",
      "Customer 360 디지털 HQ",
    ],
  },

  concepts: [
    { term: "ARR 멀티플 (ARR Multiple)", href: "/learn/arr-multiple", description: "SaaS 기업 인수 시 연간반복매출(ARR) 대비 기업가치 배수 — 성장성·수익성에 따라 크게 달라짐" },
    { term: "현금·주식 혼합 인수 (Cash-and-Stock Merger)", href: "/learn/cash-stock-merger", description: "인수 대금을 현금과 인수자 주식으로 나눠 지급하는 M&A 구조" },
    { term: "플랫폼 전략 (Platform Strategy)", href: "/learn/platform-strategy", description: "하나의 핵심 플랫폼 위에 다양한 제품·파트너를 연결해 생태계 가치를 극대화하는 전략" },
    { term: "경쟁 해자 (Competitive Moat)", href: "/learn/competitive-moat", description: "경쟁자가 쉽게 모방하거나 대체할 수 없는 지속 가능한 경쟁 우위" },
    { term: "번들링 전략 (Bundling)", href: "/learn/bundling", description: "기존 구독 서비스에 추가 제품을 무료·저가로 포함시켜 경쟁자를 배제하는 전략 — Teams vs Slack의 핵심 구도" },
    { term: "직상장 (Direct Listing)", href: "/learn/direct-listing", description: "IPO 대신 기존 주주 보유 주식을 직접 시장에 매도하는 상장 방식" },
    { term: "EBITDA 적자 인수", href: "/learn/negative-ebitda-acquisition", description: "수익 흑자 전 단계에서 성장성·전략적 가치만으로 고배수 인수가 이뤄지는 현상 — SaaS 특유의 패턴" },
  ],

  faq: [
    {
      q: "세일즈포스는 왜 적자 기업인 슬랙을 $27.7B이나 주고 샀나요?",
      a: "슬랙의 현재 수익성보다 전략적 가치를 봤기 때문입니다. 세일즈포스는 CRM·영업·서비스 클라우드를 보유했지만 직원들이 실제로 가장 많이 사용하는 '커뮤니케이션 레이어'가 없었습니다. 슬랙을 인수하면 직원들이 슬랙에서 자연스럽게 세일즈포스 데이터를 활용하는 워크플로우가 만들어지고, 세일즈포스의 15만 기업 고객 네트워크를 통해 슬랙의 유료 전환도 빠르게 이끌 수 있습니다. ARR 26배라는 높은 프리미엄은 이 플랫폼 통합 시너지에 대한 베팅이었습니다.",
    },
    {
      q: "Microsoft Teams와 슬랙의 경쟁에서 슬랙은 왜 불리했나요?",
      a: "마이크로소프트는 Office 365 기업 구독(월 $12~$35/사용자)에 Teams를 무료로 번들링했습니다. 수억 명의 기업 사용자들은 이미 지불한 구독료 안에서 Teams를 쓸 수 있었기 때문에, 슬랙은 '더 좋은 제품'이라는 장점만으로 추가 비용을 설득해야 했습니다. IT 구매 담당자 입장에서는 비용·관리 편의성 측면에서 Teams가 압도적으로 유리했고, 슬랙은 이 번들 공세에 독립적으로 대응하는 데 구조적 한계를 가졌습니다.",
    },
    {
      q: "슬랙 인수 후 세일즈포스의 Customer 360 전략이 어떻게 달라졌나요?",
      a: "슬랙은 'Salesforce Customer 360 Digital HQ'로 포지셔닝됐습니다. 영업팀은 슬랙 채널에서 직접 Salesforce CRM 기회 정보를 확인하고, 고객 서비스팀은 서비스 케이스를 슬랙 알림으로 받습니다. Salesforce Flow(자동화 도구)와 슬랙이 통합돼 CRM 이벤트가 슬랙 워크플로우를 트리거합니다. Einstein AI 요약 기능도 슬랙 안에 탑재됐습니다. 세일즈포스 제품군 전체가 슬랙을 공통 인터페이스로 삼는 구조로 변화했습니다.",
    },
    {
      q: "슬랙 CEO 스튜어트 버터필드는 왜 매각을 결정했나요?",
      a: "버터필드는 Teams의 번들 공세, 실망스러운 IPO 주가 흐름, 독립 기업으로서의 성장 한계를 종합적으로 판단했습니다. 세일즈포스의 $27.7B 오퍼는 주주들에게 약 55% 프리미엄을 제공하면서도, 세일즈포스의 대규모 유통망과 기업 고객 기반 위에서 슬랙을 더 크게 키울 수 있는 기회를 의미했습니다. 독자 생존의 리스크보다 전략적 파트너십의 확실성을 선택한 결정이었습니다.",
    },
    {
      q: "$27.7B 인수는 결과적으로 좋은 딜이었나요?",
      a: "아직 평가가 엇갈립니다. 긍정적 측면에서는 세일즈포스 플랫폼과의 통합이 착실히 진행됐고, 슬랙 AI 등 신기능이 추가됐으며, 기업 고객 교차 판매도 이뤄졌습니다. 부정적 측면에서는 Teams의 시장 지배력이 여전하고, 슬랙의 독립적 성장 수치가 공개되지 않아 $27.7B ROI 검증이 어렵습니다. 창업자 버터필드의 2023년 이탈도 신호 중 하나였습니다. 최종 평가는 AI·자동화 시대에 슬랙이 세일즈포스 플랫폼 안에서 얼마나 핵심적인 역할을 하느냐에 달려 있습니다.",
    },
    {
      q: "이 딜에서 해지 수수료 $900M은 어떤 의미인가요?",
      a: "해지 수수료(Termination Fee)는 딜을 파기한 당사자가 상대방에게 지불해야 하는 위약금입니다. 이번 딜의 $900M은 거래 총액 $27.7B의 약 3.2% 수준으로, M&A 관행상 일반적인 범위입니다. 이 조항은 양측에게 딜 완료에 대한 강한 인센티브를 부여하고, 제3자의 경쟁 입찰(백기사 등) 가능성을 낮추는 역할을 합니다. 세일즈포스가 규제 문제 등으로 딜을 파기하거나 슬랙이 더 높은 오퍼를 받아 계약을 취소할 경우 각각 $900M을 지불해야 했습니다.",
    },
  ],
};

export default deal;
