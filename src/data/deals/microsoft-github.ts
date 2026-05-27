/**
 * 마이크로소프트 × GitHub 인수
 * 개발자 생태계 확보 — $7.5B, 2018년 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "microsoft-github",
  title: "마이크로소프트는 왜 $75억에 GitHub을 샀나 — 개발자 생태계와 Azure의 미래",
  subtitle: "개발자 2,800만명 플랫폼 인수 · ARR 30× 프리미엄 · GitHub Copilot로 수십억 달러 수익화",
  category: "ma",
  industry: "개발자 플랫폼 / 코드 호스팅",
  country: "미국",
  announcedAt: "2018-06-04",
  closedAt: "2018-10-26",
  announcedDisplay: "2018년 6월",
  closedDisplay: "2018년 10월",
  readingMinutes: 11,
  tags: ["Microsoft", "GitHub", "Azure", "개발자 플랫폼", "오픈소스", "AI 코딩", "GitHub Copilot", "DevOps"],
  excerpt:
    "마이크로소프트가 GitHub을 $7.5B(약 8조원) 전액 주식 교환으로 인수한 2018년 최대 개발자 플랫폼 M&A. 사티아 나델라의 '개발자 우선' 전략이 낳은 이 딜은 2,800만 개발자와 오픈소스 생태계를 Azure와 연결하려는 장기 포석이었다. ARR 30배 프리미엄 논란을 딛고 2022년 GitHub Copilot를 출시하며 연 매출 $1B+ 성장을 이끈 교과서적 플랫폼 인수 사례.",

  acquirer: { initials: "MSFT", bg: "bg-blue-700", label: "마이크로소프트" },
  target: { initials: "GH", bg: "bg-gray-800", label: "GitHub" },

  background: [
    "마이크로소프트 사티아 나델라 시대의 핵심 전략 변화는 '개발자 우선(Developer First)'이었다. Azure가 성장하려면 개발자들이 Azure를 중심으로 빌드해야 하고, 그러려면 개발자들이 신뢰하는 플랫폼을 소유해야 한다는 판단이었다. GitHub은 개발자의 '소셜 네트워크' — 코드가 LinkedIn이고, 개발자가 전문직이다. 전 세계 2,800만 개발자와 85만개 오픈소스 프로젝트가 집결된 GitHub을 확보하는 것은 곧 차세대 소프트웨어 생태계의 허브를 장악하는 것을 의미했다.",
    "GitHub은 2012년 Andreessen Horowitz로부터 $1억 투자를 받은 이후 외부 투자 없이 자체 성장해왔다. 그러나 2017년 CEO 교체(공동창업자 Tom Preston-Werner 이후 내부 문화 갈등), 경쟁사(GitLab, Bitbucket)의 위협으로 독립 IPO 대신 매각을 검토하는 상황이 됐다. 적자 상태에서 독립 성장의 불확실성이 커졌고, GitHub 이사회는 대형 테크 기업과의 결합이 가치 극대화의 최선이라고 판단했다.",
    "마이크로소프트는 $7.5B 전액 주식을 제안했다. 당시 GitHub 추정 ARR $250M 대비 약 30배 프리미엄으로 순수 재무적 시각에서는 높은 가격이었다. 발표 당시 개발자 커뮤니티에서 '마이크로소프트가 GitHub을 망칠 것'이라는 우려가 확산되며 GitLab 가입이 급증하는 반발이 있었다. 마이크로소프트는 GitHub의 독립 운영 약속과 Xamarin 창업자 출신 Nat Friedman을 새 CEO로 임명하며 커뮤니티 신뢰 회복에 나섰다.",
    "EU와 미국 규제 기관의 승인을 거쳐 2018년 10월 26일 딜이 최종 클로징됐다. Nat Friedman CEO 체제에서 GitHub Actions(CI/CD 서비스, 2019), GitHub Packages, GitHub Codespaces 등 신제품이 출시되며 개발자 플랫폼의 완성도가 급격히 높아졌다. 2022년에는 OpenAI GPT 기반 GitHub Copilot를 출시하며 AI 코딩 어시스턴트 시장을 선도하게 됐고, 연 매출이 인수 당시 대비 수배로 성장했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$7.5B (약 8조원)",
    acquirerName: "마이크로소프트 (Microsoft Corporation)",
    targetName: "GitHub, Inc.",
    announcedDisplay: "2018년 6월",
    closedDisplay: "2018년 10월",
    country: "미국",
  },

  executiveSummary: [
    "전액 주식 교환 인수 — $7.5B, 마이크로소프트 역대 3위권 대형 인수 (LinkedIn, Activision 다음)",
    "핵심 논리: '개발자 우선' 전략 — Azure 성장을 위한 2,800만 개발자 생태계와 오픈소스 커뮤니티 확보",
    "ARR 대비 약 30배 프리미엄 — 적자 기업 플랫폼 가치의 극단적 베팅",
    "Nat Friedman CEO 선임, GitHub 독립 운영 약속 — 개발자 커뮤니티 반발 진화",
    "GitHub Copilot (2022): OpenAI 기반 AI 코딩 어시스턴트 → 연 매출 $1B+ 성장 견인",
    "개발자 플랫폼 인수의 교과서 — ARR 멀티플과 장기 플랫폼 가치의 경계를 탐색한 딜",
  ],

  industryOverview: {
    body: "2018년 기준 글로벌 DevOps 및 코드 협업 플랫폼 시장은 연간 20%+ 성장 중이었으며, 소프트웨어 개발자 수의 급증과 오픈소스 생태계 확산이 핵심 동력이었다. Git 기반 버전 관리가 사실상 표준이 된 상황에서 GitHub은 전체 공개 저장소의 대다수를 호스팅하며 독보적 1위였다. Microsoft Azure, AWS, Google Cloud의 클라우드 전쟁에서 개발자 경험(DevEx)이 핵심 차별화 요소로 부상했고, 개발자 플랫폼 장악이 곧 클라우드 고객 확보로 직결되는 구조였다.",
    metrics: [
      { label: "GitHub 등록 개발자 수", value: "2,800만 명", sub: "2018년 기준, 전 세계 최대" },
      { label: "공개 오픈소스 프로젝트", value: "약 8,500만 개", sub: "GitHub 호스팅 기준" },
      { label: "글로벌 DevOps 툴 시장", value: "약 $39억", sub: "2018년 기준, 연 20%+ 성장" },
      { label: "GitHub 추정 ARR", value: "약 $250M", sub: "2018년 추정, 주로 GitHub Enterprise" },
    ],
    subBody: "GitLab(경쟁사)는 GitHub 인수 발표 후 기존보다 훨씬 높은 가입자 수를 기록하며 개발자 커뮤니티의 반발을 반영했다. 그러나 GitHub의 브랜드 인지도, 오픈소스 생태계 내 네트워크 효과, Fortune 500 기업의 GitHub Enterprise 구독이라는 강고한 해자는 경쟁사가 단기에 대체하기 어려운 구조를 유지했다.",
    players: [
      { name: "GitLab", role: "오픈소스 친화 코드 협업 플랫폼, 셀프호스팅 옵션 강점" },
      { name: "Atlassian Bitbucket", role: "Jira·Confluence 생태계와 연계된 기업용 Git 플랫폼" },
      { name: "AWS CodeCommit", role: "AWS 개발자 도구 생태계 내 Git 저장소 서비스" },
      { name: "Microsoft Azure DevOps (VSTS)", role: "인수자의 기존 엔터프라이즈 DevOps 플랫폼" },
    ],
  },

  companyOverview: {
    targetName: "GitHub, Inc.",
    body: "GitHub은 2008년 Tom Preston-Werner, Chris Wanstrath, PJ Hyett가 설립한 Git 기반 코드 호스팅·협업 플랫폼이다. 오픈소스 프로젝트의 사실상 표준 허브가 되며 2012년 Andreessen Horowitz로부터 $1억 Series A 투자를 유치, 이후 추가 외부 투자 없이 자체 성장했다. 매출은 주로 GitHub Enterprise(기업 구독), GitHub Teams, GitHub Marketplace에서 발생했으며, 공개 저장소는 무료 제공이었다. 인수 당시 전 세계 개발자 2,800만명, 오픈소스 프로젝트 8,500만개를 보유한 코드 호스팅 압도적 1위였으나 EBITDA는 소폭 흑자 또는 손익분기점 수준이었다.",
    metrics: [
      { label: "등록 개발자 수", value: "2,800만 명", sub: "2018년 인수 당시 기준" },
      { label: "추정 ARR", value: "약 $250M", sub: "2018년 추정 (GitHub Enterprise 중심)" },
      { label: "오픈소스 프로젝트 수", value: "약 8,500만 개", sub: "공개 저장소 기준" },
      { label: "설립 연도", value: "2008년", sub: "Tom Preston-Werner 외 공동창업" },
      { label: "VC 투자", value: "$1억 (2012년)", sub: "Andreessen Horowitz Series A, 이후 독립 성장" },
    ],
    financials: [
      { year: "2016", revenue: 140, cogs: 40, grossProfit: 100, sga: 120, operatingIncome: -20, ebitda: -10 },
      { year: "2017", revenue: 200, cogs: 55, grossProfit: 145, sga: 160, operatingIncome: -15, ebitda: 0 },
      { year: "2018", revenue: 250, cogs: 65, grossProfit: 185, sga: 190, operatingIncome: -5, ebitda: 10 },
    ],
    financialsNote: "단위: USD 백만(M). GitHub은 비상장사로 재무 수치는 업계 추정치 기반입니다.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "GitHub Enterprise (기업 구독)", pct: 70, color: "bg-gray-700", amt: "약 $175M" },
      { name: "GitHub Teams / 개인 유료", pct: 20, color: "bg-gray-500", amt: "약 $50M" },
      { name: "Marketplace·기타", pct: 10, color: "bg-gray-400", amt: "약 $25M" },
    ],
  },

  dealStructure: {
    body: "마이크로소프트는 GitHub 주주에게 전액 마이크로소프트(MSFT) 주식으로 $7.5B를 지급하는 올-스톡(All-Stock) 방식으로 딜을 설계했다. 현금 지출 없이 마이크로소프트 주식으로만 대금을 치른 점이 이 딜의 특징이다. 미국 DOJ와 EU 경쟁 당국의 규제 심사를 거쳐 2018년 10월 26일 최종 클로징됐으며, GitHub은 나스닥 미상장 상태로 마이크로소프트의 완전 자회사가 됐다. Nat Friedman이 신임 CEO로 임명돼 GitHub의 독립 운영 체제를 유지했다.",
    preOwnership: {
      nodes: [
        { id: "github_private", label: "GitHub, Inc.", sub: "비상장 독립 기업 (VC 후원)", type: "public" },
        { id: "msft_public", label: "마이크로소프트", sub: "NASDAQ 상장 (MSFT)", type: "acquirer" },
      ],
      edges: [
        { from: "github_private", to: "msft_public", label: "독립 운영" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "msft_parent", label: "마이크로소프트", sub: "NASDAQ 상장 (MSFT)", type: "acquirer" },
        { id: "github_sub", label: "GitHub, Inc.", sub: "마이크로소프트 완전 자회사", type: "target" },
      ],
      edges: [
        { from: "msft_parent", to: "github_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "딜 규모 (총 EV)", value: "$7.5B (약 8조원)", accent: true },
      { label: "거래 형태", value: "전액 주식 교환 (All-Stock Acquisition)", accent: false },
      { label: "인수 프리미엄", value: "ARR 대비 약 30배 (추정)", accent: true },
      { label: "EV / 추정 ARR", value: "약 30×", accent: true },
      { label: "EV / EBITDA", value: "N/M (손익분기점 수준)", accent: false },
      { label: "신임 CEO", value: "Nat Friedman (전 Xamarin)", accent: false },
      { label: "독립 운영 여부", value: "독립 자회사로 운영 약속", accent: false },
      { label: "거래 완료일", value: "2018년 10월 26일", accent: false },
    ],
  },

  advisors: {
    body: "마이크로소프트와 GitHub 양측에 주요 투자은행과 법률 자문사들이 참여했다. GitHub은 비상장사로 공시 의무가 없어 일부 자문 정보는 제한적으로 공개됐다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (마이크로소프트)",
        initials: "MSFT",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "딜 구조 설계 및 가격 책정 총괄" },
          { firm: "Simpson Thacher & Bartlett", role: "법률 자문", roleType: "legal", note: "M&A 계약 및 규제 대응" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (GitHub)",
        initials: "GH",
        bg: "bg-gray-800",
        advisors: [
          { firm: "Qatalyst Partners", role: "재무 자문 (FA)", roleType: "financial", note: "테크 M&A 전문 부티크, GitHub 이사회 핵심 자문" },
          { firm: "Cooley LLP", role: "법률 자문", roleType: "legal", note: "M&A 계약 및 주주 대응" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 업계 자료 기반입니다. 비상장사 특성상 일부 정보가 제한될 수 있습니다.",
  },

  valuation: {
    body: "마이크로소프트는 GitHub의 추정 ARR $250M 대비 약 30배의 EV/ARR 멀티플을 지불했다. GitHub은 2018년 기준 EBITDA 소폭 흑자 또는 손익분기점 수준이었으므로 EV/EBITDA 멀티플도 이론상 산출 가능하지만, 이 딜의 핵심 가치 논리는 재무 수익성이 아닌 개발자 생태계 네트워크 효과와 Azure와의 전략적 시너지에 있었다. 전액 주식으로 지불했기 때문에 마이크로소프트의 현금 유출은 없었으며, 마이크로소프트 주가 대비 GitHub의 성장 잠재력을 교환한 구조다.",
    rows: [
      { item: "딜 EV", val: "$7.5B", note: "전액 MSFT 주식 교환", accent: true },
      { item: "거래 형태", val: "All-Stock (전액 주식)", note: "현금 지출 없음" },
      { item: "추정 ARR (2018년)", val: "약 $250M", note: "GitHub Enterprise 중심, 업계 추정치" },
      { item: "EV / 추정 ARR", val: "약 30×", note: "플랫폼 네트워크 효과 프리미엄 반영", accent: true },
      { item: "2018년 추정 EBITDA", val: "약 $10M", note: "손익분기점 수준, 소폭 흑자" },
      { item: "EV / EBITDA", val: "N/M (손익분기점)", note: "실질적 수익 기반 멀티플 비적용" },
      { item: "등록 개발자 수", val: "2,800만 명", note: "전 세계 최대 코드 호스팅 플랫폼" },
    ],
    disclaimer: "GitHub은 비상장사로 공시 재무 수치가 없어 밸류에이션 수치는 업계 추정치 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "마이크로소프트 인수 논리",
      initials: "MSFT",
      bg: "bg-blue-700",
      points: [
        "개발자 생태계 장악 — 전 세계 2,800만 개발자가 매일 사용하는 플랫폼을 소유함으로써 Azure의 핵심 고객군 확보",
        "Azure 성장 드라이버 — GitHub 사용 개발자들이 자연스럽게 Azure DevOps, Azure Pipelines와 연계되도록 유도",
        "오픈소스 전략 전환 완성 — '오픈소스의 적'에서 '오픈소스의 집'으로: GitHub 인수가 마이크로소프트 이미지 전환의 상징",
        "엔터프라이즈 DevOps 강화 — GitHub Enterprise + Azure DevOps 결합으로 기업 개발 파이프라인 전체를 장악",
        "데이터 네트워크 효과 — 수억 개의 코드 저장소가 향후 AI·자동화 모델 학습의 핵심 데이터 자산으로 작동",
      ],
    },
    seller: {
      title: "GitHub 매각 논리",
      initials: "GH",
      bg: "bg-gray-800",
      points: [
        "독립 IPO 대신 확실한 프리미엄 실현 — 적자 상태에서 독립 상장의 불확실성보다 $7.5B 확실성 선택",
        "리소스 확충 — 마이크로소프트의 글로벌 인프라·엔지니어링 자원을 활용해 플랫폼 성장 가속화",
        "독립 운영 약속 확보 — Nat Friedman CEO 체제로 GitHub 문화와 브랜드 독립성 유지 조건 협상",
        "경쟁 심화 대응 — GitLab의 급성장, Bitbucket의 Atlassian 생태계 통합에 대응하기 위한 파트너 필요",
        "창업팀 투자 회수 — Andreessen Horowitz 등 초기 투자자들의 장기 투자 수익 실현",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "2018년 10월 인수 완료 이후 GitHub은 독립 자회사 체제를 유지하며 빠르게 성장했다. 2019년 GitHub Actions(CI/CD) 출시로 개발자 워크플로우 내 점유율을 크게 높였고, 2020년 GitHub Codespaces(클라우드 개발 환경), 2022년 GitHub Copilot(AI 코딩 어시스턴트) 출시로 개발자 플랫폼의 새로운 수익화 모델을 확립했다. 개발자 커뮤니티의 초기 반발은 거의 사라지고, 마이크로소프트의 오픈소스 친화적 전략이 신뢰를 얻었다. 2023년 기준 GitHub 연 매출은 $1B+로 추정되며, Microsoft의 AI 전략의 핵심 접점이 됐다.",
    overallVerdict: "마이크로소프트 역대 최고 수준의 M&A 성공 사례 (GitHub Copilot으로 ROI 실현 가속)",
    positives: [
      "GitHub Actions 출시 (2019) — CI/CD 시장 진입 성공, 개발자 플랫폼 완성도 대폭 상승",
      "GitHub Copilot (2022) — OpenAI GPT 기반 AI 코딩 어시스턴트, 월 $10~$19 구독, 기업 고객 폭발 성장",
      "연 매출 $1B+ 성장 (2023년 추정) — 인수 당시 $250M 대비 약 4배 성장",
      "오픈소스 커뮤니티 신뢰 회복 — Microsoft의 .NET, VS Code 등 오픈소스 전략과 시너지",
      "Azure DevOps 통합 — GitHub + Azure Pipelines 연계로 엔터프라이즈 개발 파이프라인 완성",
    ],
    risks: [
      "GitLab·JetBrains AI 경쟁 — Copilot 이후 AI 코딩 툴 시장에 경쟁자 급증 (Cursor, Windsurf 등)",
      "AI 코딩 툴 상품화 — Copilot의 기술적 우위가 지속될지 불확실, 오픈소스 대안도 등장",
      "개발자 커뮤니티 신뢰 유지 — 마이크로소프트 전략 변화 시 커뮤니티 이탈 리스크",
      "코드 저작권 분쟁 — GitHub Copilot 학습 데이터(공개 저장소 코드) 관련 저작권 소송 진행 중",
    ],
    editorNote: "마이크로소프트의 GitHub 인수는 '플랫폼 기업이 생태계의 허브를 먼저 소유해야 한다'는 전략의 완벽한 실행이었다. $7.5B, ARR 30배 프리미엄이라는 당시 논란은 GitHub Copilot 하나로 상당 부분 정당화됐다. 개발자가 매일 쓰는 코딩 어시스턴트 구독 서비스로 전환한 이 딜은, 인수 당시엔 비싸 보였지만 AI 시대가 오면서 진가가 드러난 교과서적 장기 포석이다.",
  },

  tombstone: {
    acquirerInitials: "MSFT",
    acquirerBg: "bg-blue-700",
    targetInitials: "GH",
    targetBg: "bg-gray-800",
    acquirerName: "Microsoft Corporation",
    targetName: "GitHub, Inc.",
    dealTitle: "주식 교환 인수 (All-Stock Acquisition)",
    dealSize: "약 $75억",
    dealSizeUSD: "USD 7.5 Billion",
    evEbitda: "N/M (적자, ARR 30× 추정)",
    closeDate: "Oct 2018",
  },

  sources: [
    { id: 1, text: "Microsoft Press Release — Microsoft to Acquire GitHub for $7.5 Billion (June 2018)", url: "https://news.microsoft.com" },
    { id: 2, text: "GitHub Blog — A Bright Future for GitHub (June 2018)", url: "https://github.blog" },
    { id: 3, text: "Microsoft FY2019 Annual Report — GitHub Integration Update", url: "https://investor.microsoft.com" },
    { id: 4, text: "GitHub Blog — Introducing GitHub Actions (October 2019)", url: "https://github.blog" },
    { id: 5, text: "GitHub Blog — Introducing GitHub Copilot (June 2021)", url: "https://github.blog" },
    { id: 6, text: "Bloomberg — Microsoft Buys GitHub for $7.5 Billion, Securing Developer Community (June 2018)" },
    { id: 7, text: "The Wall Street Journal — Microsoft's GitHub Deal: Developer Platform Play (June 2018)" },
    { id: 8, text: "Forbes — GitHub Revenue Tops $1 Billion as Microsoft's AI Strategy Takes Hold (2023)" },
    { id: 9, text: "Reuters — GitLab Sees Record Signups After Microsoft-GitHub Deal (June 2018)" },
  ],

  seo: {
    title: "마이크로소프트 GitHub 인수 완전 분석 — $75억 개발자 플랫폼 M&A와 Copilot 수익화",
    description: "마이크로소프트의 GitHub $7.5B 인수 완전 분석. 개발자 생태계 전략, ARR 30배 프리미엄, GitHub Copilot AI 코딩 어시스턴트로의 수익화, 인수 후 성과까지 심층 해부.",
    keywords: [
      "마이크로소프트 GitHub 인수",
      "Microsoft GitHub M&A",
      "GitHub 인수 가격",
      "GitHub Copilot 수익화",
      "개발자 플랫폼 M&A",
      "Azure 개발자 생태계",
      "ARR 멀티플 인수",
      "오픈소스 전략 마이크로소프트",
      "GitHub 기업 가치",
      "AI 코딩 어시스턴트",
    ],
  },

  concepts: [
    { term: "플랫폼 전략", href: "/deal-101/platform-strategy", description: "개발자 플랫폼 네트워크 효과 — 2,800만 개발자 생태계 확보가 Azure 성장으로 직결되는 구조" },
    { term: "ARR 멀티플", href: "/deal-101/arr-multiple", description: "ARR 기준 약 30배 프리미엄 — 플랫폼 가치와 ARR 멀티플의 관계" },
    { term: "전략적 M&A", href: "/deal-101/strategic-ma", description: "개발자 생태계와 Azure 성장을 위한 전략적 인수 — 단순 재무 수익이 아닌 생태계 장악이 목적" },
    { term: "구독 경제", href: "/deal-101/subscription-economy", description: "GitHub Copilot 구독으로 개발자 플랫폼의 구독 수익화 — 무료 플랫폼에서 유료 AI 구독 전환" },
  ],

  faq: [
    {
      q: "마이크로소프트는 왜 GitHub을 $7.5B이나 주고 샀나요?",
      a: "마이크로소프트의 핵심 전략은 '개발자 우선(Developer First)'이었습니다. Azure가 성장하려면 개발자들이 Azure를 중심으로 빌드해야 하고, 그러려면 개발자들이 매일 쓰는 플랫폼을 소유해야 한다는 판단이었습니다. GitHub은 전 세계 2,800만 개발자와 8,500만개 오픈소스 프로젝트가 집결된 코드 허브였습니다. 이 플랫폼을 통해 개발자들이 자연스럽게 Azure DevOps, Azure Pipelines, Azure 클라우드로 이어지는 워크플로우를 만드는 것이 목적이었습니다.",
    },
    {
      q: "GitHub 인수 후 개발자 커뮤니티의 반발은 어떻게 됐나요?",
      a: "발표 직후 '마이크로소프트가 GitHub을 망칠 것'이라는 우려로 GitLab 가입이 크게 급증했습니다. 그러나 마이크로소프트는 Xamarin 창업자 출신 Nat Friedman을 새 CEO로 임명하고 GitHub의 독립 운영을 약속하며 신뢰 회복에 나섰습니다. 이후 .NET 오픈소스화, VS Code 무료 배포, GitHub Actions 출시 등 개발자 친화적 행보가 이어지며 커뮤니티의 우려는 거의 해소됐습니다. 오히려 마이크로소프트는 오픈소스 커뮤니티에서 가장 큰 기여자 중 하나로 인정받게 됐습니다.",
    },
    {
      q: "GitHub Copilot은 왜 중요한가요?",
      a: "GitHub Copilot은 2022년 출시된 OpenAI GPT 기반 AI 코딩 어시스턴트로, 개발자가 코드를 작성할 때 자동으로 코드를 제안해주는 서비스입니다. 월 $10(개인) ~ $19(비즈니스), 기업 플랜은 시트당 월 $39로 구독 서비스입니다. GitHub의 수십억 개 코드 저장소를 학습 데이터로 활용했기 때문에 GitHub 인수 없이는 존재할 수 없는 서비스입니다. 2023년 기준 GitHub의 연 매출을 $1B+ 수준으로 끌어올리는 핵심 성장 동력이 됐습니다.",
    },
    {
      q: "마이크로소프트 GitHub 인수는 성공한 딜인가요?",
      a: "대부분의 평가에서 마이크로소프트 역사상 가장 성공적인 인수 중 하나로 꼽힙니다. 인수 당시 추정 ARR $250M에서 2023년 $1B+로 성장했고, GitHub Copilot이라는 새로운 AI 구독 비즈니스를 창출했습니다. Azure와의 통합도 순조롭게 진행됐으며, 개발자 커뮤니티의 신뢰도 유지됐습니다. 인수 당시 ARR 30배 프리미엄이 비싸 보였지만, AI 시대가 오면서 코드 저장소 데이터와 개발자 플랫폼의 가치가 극대화된 사례입니다.",
    },
    {
      q: "전액 주식 교환(All-Stock) 방식은 어떤 의미인가요?",
      a: "마이크로소프트가 현금 없이 자사 주식만으로 $7.5B를 지급했습니다. 이는 마이크로소프트 입장에서 현금 유출 없이 대형 인수를 할 수 있다는 장점이 있습니다. GitHub 주주들은 마이크로소프트 주식을 받았기 때문에, 딜 이후 마이크로소프트 주가 상승의 혜택을 함께 누릴 수 있었습니다. 마이크로소프트 주가가 인수 이후 크게 상승했기 때문에 GitHub 주주들에게도 매우 유리한 결과가 됐습니다.",
    },
    {
      q: "GitHub은 마이크로소프트 인수 후 독립성을 유지했나요?",
      a: "대체로 독립 운영 약속이 지켜졌습니다. GitHub은 마이크로소프트 완전 자회사이지만 별도 브랜드와 독자적인 제품 로드맵을 유지하고 있습니다. CEO는 Nat Friedman(2018~2021), Thomas Dohmke(2021~현재)로 이어지며 마이크로소프트 본사와 독립적인 리더십 체제를 유지했습니다. 오픈소스 프로젝트 지원, 무료 플랜 유지 등 개발자 커뮤니티와의 약속도 지켜졌습니다. 단, 제품 방향성에서 Azure와의 통합이 강화되고 마이크로소프트 AI 전략과 긴밀하게 연계되는 방향으로 진화했습니다.",
    },
  ],
};

export default deal;
