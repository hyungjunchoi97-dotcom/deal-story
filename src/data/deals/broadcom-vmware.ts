/**
 * 브로드컴 × VMware 인수
 * 역대 최대 반도체·소프트웨어 M&A — $690억 (약 91조원), 2023년 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "broadcom-vmware",
  title: "$690억 도박: 브로드컴은 VMware로 엔터프라이즈 소프트웨어 제국을 어떻게 만들었나",
  subtitle: "역대 최대 반도체·소프트웨어 M&A · 18개월 규제 전쟁 · 가격 3-5배 인상의 충격",
  category: "ma",
  industry: "엔터프라이즈 소프트웨어 / 반도체",
  country: "미국",
  announcedAt: "2022-05-26",
  closedAt: "2023-11-22",
  announcedDisplay: "2022년 5월",
  closedDisplay: "2023년 11월",
  readingMinutes: 13,
  tags: ["Broadcom", "VMware", "AVGO", "Hock Tan", "enterprise software", "tech M&A", "antitrust"],
  excerpt:
    "브로드컴이 VMware를 약 $690억(약 91조원)에 인수한 역대 최대 반도체·소프트웨어 M&A. EU·영국·미국 18개월 규제 관문을 통과하고 2023년 11월 완료. Hock Tan의 '인수-비용절감-구독전환' 플레이북이 엔터프라이즈 소프트웨어 시장의 게임 룰을 바꾼 딜.",

  acquirer: { initials: "AVGO", bg: "bg-red-700", label: "브로드컴" },
  target: { initials: "VMW", bg: "bg-blue-600", label: "VMware" },

  background: [
    "브로드컴(Broadcom Inc.)의 CEO Hock Tan은 수년간 반복된 인수·통합·수익화 플레이북으로 유명하다. CA Technologies($18.9B, 2018), Symantec 엔터프라이즈 부문($10.7B, 2019)을 인수해 성숙 엔터프라이즈 소프트웨어 사업을 고마진 구독 모델로 전환한 것이 그 공식이었다. VMware 인수는 이 플레이북의 역대 최대 적용이었다.",
    "VMware는 가상화(Virtualization) 기술의 선구자로, 전 세계 데이터센터 인프라의 핵심 플랫폼이다. vSphere, NSX, vSAN 등을 앞세워 클라우드 전환 시대에도 고객 기업의 온프레미스·하이브리드 환경을 지배하고 있었다. FY2023 매출 약 $136.7억, 영업이익 약 $18.8억의 탄탄한 기업이었지만 주가는 성장 모멘텀 부재로 피어 대비 저평가 상태였다.",
    "2022년 5월 26일, 브로드컴은 VMware를 주당 $142.50 현금 또는 AVGO 주식 0.2520주로 인수하겠다고 발표했다. 총 EV는 부채 인수 포함 약 $690억으로, 이는 소프트웨어 M&A 역사상 최대, 테크 M&A 역대 2위 규모였다. 브로드컴은 약 $460억 상당의 자사주와 $230억 현금(신규 차입 $320억 포함)으로 딜을 구성했다.",
    "18개월에 걸친 규제 심사가 가장 큰 변수였다. EU 집행위원회는 인터오퍼러빌리티 조건부로 승인했고, 영국 CMA도 경쟁사에 API 접근권 보장 조건부로 승인했다. 미국 FTC는 일부 반독점 우려를 제기했으나 딜을 저지하지 못했다. 2023년 11월 22일 최종 거래가 완료됐고, VMware는 브로드컴의 완전 자회사가 됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "약 $690억 (부채 포함)",
    acquirerName: "브로드컴 (Broadcom Inc.)",
    targetName: "VMware, Inc.",
    announcedDisplay: "2022년 5월",
    closedDisplay: "2023년 11월",
    country: "미국",
  },

  executiveSummary: [
    "소프트웨어 M&A 역대 최대 — 주당 $142.50 (현금 또는 AVGO 0.2520주), EV ~$690억",
    "Hock Tan 플레이북 최대 적용 — 인수 후 즉각 구독 전환 강제, 가격 3-5배 인상, 인력 ~30% 감원",
    "18개월 규제 전쟁 — EU·영국 CMA·미국 FTC 조건부 승인, 2023년 11월 최종 완료",
    "브로드컴 $320억 신규 차입으로 딜 파이낸싱 — 고레버리지 인수 구조",
    "인수 후 고객 반발 폭발 — 영구 라이선스 폐지, 구독 모델 강제 전환으로 기업 IT 예산 충격",
    "VMware 특별 현금 배당 $11/주 클로징 전 지급 — 주주 친화적 거래 조건",
  ],

  industryOverview: {
    body: "엔터프라이즈 소프트웨어 시장은 2022년 기준 약 $5,900억 규모로 클라우드 전환과 함께 빠르게 재편되고 있었다. 가상화·클라우드 인프라 분야는 퍼블릭 클라우드(AWS, Azure, GCP)의 부상에도 불구하고 대기업들의 온프레미스·하이브리드 인프라 수요로 탄탄한 수익을 유지했다. VMware는 이 시장에서 60% 이상의 x86 서버 가상화 점유율을 바탕으로 사실상 독점에 가까운 지위를 누렸다.",
    metrics: [
      { label: "글로벌 엔터프라이즈 소프트웨어 시장", value: "약 $5,900억", sub: "2022년 기준" },
      { label: "VMware x86 가상화 점유율", value: "약 60% 이상", sub: "시장 지배적 지위" },
      { label: "하이브리드 클라우드 시장 성장률", value: "연 ~22% CAGR", sub: "2022-2027 예상" },
      { label: "VMware 글로벌 고객 수", value: "약 30만 개 기업", sub: "인수 당시 기준" },
    ],
    subBody: "하이브리드 클라우드 시대에 기업들은 퍼블릭 클라우드와 온프레미스를 혼합 운영하며, VMware의 vSphere·NSX·vSAN은 이 두 환경을 연결하는 핵심 미들웨어 역할을 했다. 브로드컴은 이 '잠금 효과(lock-in)'가 강한 고마진 소프트웨어 자산에 주목했다.",
    players: [
      { name: "VMware (브로드컴 자회사)", role: "x86 가상화·하이브리드 클라우드 인프라 시장 지배자" },
      { name: "Microsoft Azure", role: "퍼블릭 클라우드 2위, Azure VMware Solution으로 VMware와 협력·경쟁" },
      { name: "AWS", role: "퍼블릭 클라우드 1위, VMware Cloud on AWS 파트너십 보유" },
      { name: "Nutanix", role: "하이퍼컨버지드 인프라(HCI)로 VMware 대체 수요 공략" },
    ],
  },

  companyOverview: {
    targetName: "VMware, Inc.",
    body: "VMware는 1998년 설립된 가상화 기술의 선구자로, x86 서버 가상화(vSphere), 소프트웨어 정의 네트워킹(NSX), 스토리지(vSAN), 엔드포인트 관리(Workspace ONE) 등 엔터프라이즈 IT 인프라 전반을 아우르는 포트폴리오를 보유했다. Dell Technologies가 약 80%의 지분을 보유하고 있다가 2021년 스핀오프를 통해 독립했으며, 인수 시점에는 나스닥(VMW)에 상장된 독립 공개기업이었다. FY2023 기준 매출 $136.7억, EBITDA $45억의 안정적 수익 구조를 갖추고 있었으나 클라우드 네이티브 경쟁자 대비 성장률이 둔화된 상태였다.",
    metrics: [
      { label: "FY2023 연 매출", value: "$136.7억", sub: "1월 결산 기준" },
      { label: "FY2023 EBITDA", value: "$45억", sub: "EBITDA 마진 ~33%" },
      { label: "글로벌 고객 수", value: "약 30만 개", sub: "포춘 500 기업 전원 포함" },
      { label: "직원 수", value: "약 37,500명", sub: "인수 시점 기준" },
      { label: "본사", value: "캘리포니아 팔로알토", sub: "1998년 설립" },
    ],
    revenueBreakdown: [
      { name: "라이선스", pct: 35, color: "bg-blue-500", amt: "약 $47.8억" },
      { name: "구독·SaaS", pct: 25, color: "bg-blue-400", amt: "약 $34.2억" },
      { name: "서비스", pct: 40, color: "bg-blue-300", amt: "약 $54.7억" },
    ],
    revenueNote: "FY2023 기준 추정치. 단위: USD.",
    financials: [
      { year: "FY2021", revenue: 11800, cogs: 2900, grossProfit: 8900, sga: 4100, operatingIncome: 1540, ebitda: 3600 },
      { year: "FY2022", revenue: 12851, cogs: 3150, grossProfit: 9701, sga: 4400, operatingIncome: 1712, ebitda: 4100 },
      { year: "FY2023", revenue: 13670, cogs: 3300, grossProfit: 10370, sga: 4600, operatingIncome: 1880, ebitda: 4500 },
    ],
    financialsNote: "VMware FY는 1월 결산. 공시 및 업계 추정 기반. 단위: USD 백만.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
  },

  dealStructure: {
    body: "브로드컴은 VMware 주주에게 주당 $142.50 현금 또는 AVGO 주식 0.2520주(현금·주식 혼합, 전체 합산 비율 고정)를 지급하는 방식으로 딜을 설계했다. 브로드컴 주식으로 약 $460억, 현금으로 약 $230억(신규 차입 $320억 포함)을 조달했다. 또한 VMware가 보유한 약 $80억의 순부채를 인수자가 승계했다. 클로징 직전 VMware는 주주들에게 주당 $11 특별 현금 배당을 지급했다.",
    preOwnership: {
      nodes: [
        { id: "avgo_public", label: "브로드컴 (Broadcom Inc.)", sub: "나스닥 상장 (AVGO)", type: "acquirer" },
        { id: "vmw_public", label: "VMware, Inc.", sub: "나스닥 상장 (VMW)", type: "public" },
        { id: "vmw_shareholders", label: "VMware 일반 주주", sub: "기관·개인 투자자", type: "entity" },
      ],
      edges: [
        { from: "vmw_shareholders", to: "vmw_public", label: "100% 보유" },
        { from: "avgo_public", to: "vmw_public", label: "인수 예정" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "avgo_post", label: "브로드컴 (Broadcom Inc.)", sub: "나스닥 상장 (AVGO)", type: "acquirer" },
        { id: "vmw_sub", label: "VMware, Inc.", sub: "브로드컴 완전 자회사", type: "target" },
        { id: "vmw_infra", label: "VMware 인프라 사업부", sub: "vSphere·NSX·vSAN 등", type: "entity" },
      ],
      edges: [
        { from: "avgo_post", to: "vmw_sub", label: "100%" },
        { from: "vmw_sub", to: "vmw_infra", label: "내부 사업부" },
      ],
    },
    keyTerms: [
      { label: "딜 규모 (총 EV)", value: "약 $690억 (부채 포함)", accent: true },
      { label: "인수 주가", value: "주당 $142.50 (현금 또는 AVGO 0.2520주)", accent: false },
      { label: "거래 형태", value: "현금·주식 혼합 합병 (Cash & Stock Merger)", accent: false },
      { label: "EV / EBITDA", value: "약 15.3× (FY2023 기준)", accent: true },
      { label: "EV / Revenue", value: "약 5.1× (FY2023 기준)", accent: false },
      { label: "신규 차입", value: "$320억 (고레버리지 파이낸싱)", accent: true },
      { label: "계약 해지 위약금", value: "$15억 (Termination Fee)", accent: false },
      { label: "특별 배당", value: "$11/주 (클로징 전 지급)", accent: false },
      { label: "규제 완료 기간", value: "약 18개월 (2022.05 ~ 2023.11)", accent: false },
    ],
  },

  advisors: {
    body: "브로드컴과 VMware 양측 모두 월가 최정상 IB와 로펌을 기용했으며, EU·영국 CMA·미국 FTC 3개 규제 당국 동시 대응이 자문단 구성의 핵심이었다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (브로드컴)",
        initials: "AVGO",
        bg: "bg-red-700",
        advisors: [
          { firm: "Morgan Stanley", role: "재무 자문 (FA)", roleType: "financial", note: "딜 구조 설계 및 밸류에이션 총괄" },
          { firm: "Barclays", role: "재무 자문 (FA)", roleType: "financial", note: "공동 재무 자문, 파이낸싱 구조 지원" },
          { firm: "Weil, Gotshal & Manges", role: "법률 자문", roleType: "legal", note: "M&A 계약 및 반독점 규제 대응 총괄" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (VMware)",
        initials: "VMW",
        bg: "bg-blue-600",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "VMware 이사회 재무 자문 총괄, 공정성 의견(Fairness Opinion) 제공" },
          { firm: "Gibson, Dunn & Crutcher", role: "법률 자문", roleType: "legal", note: "M&A 계약 협상 및 주주 대응 총괄" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 공시 및 보도 자료 기반입니다.",
  },

  valuation: {
    body: "브로드컴은 VMware에 FY2023 EBITDA 약 $45억 대비 약 15.3배, FY2023 매출 $136.7억 대비 약 5.1배 멀티플을 지불했다. 이는 당시 엔터프라이즈 소프트웨어 섹터 평균(EV/EBITDA 20-25×)보다 낮은 수준으로, VMware의 성장률 둔화와 클라우드 전환 불확실성을 반영했다. Hock Tan의 관점에서는 30만 개 기업 고객을 보유한 '독점적 잠금 효과' 자산을 구독 모델로 전환했을 때 창출 가능한 자유현금흐름이 핵심 가치 드라이버였다.",
    rows: [
      { item: "딜 EV (총 거래 규모)", val: "약 $690억", note: "주식 ~$460억 + 현금 ~$230억 + 부채 승계 ~$80억", accent: true },
      { item: "인수 주가", val: "$142.50/주", note: "공시 전일 종가 대비 약 44% 프리미엄" },
      { item: "FY2023 매출", val: "$136.7억", note: "1월 결산 기준, 안정적 수익 구조" },
      { item: "FY2023 EBITDA", val: "약 $45억", note: "EBITDA 마진 ~33%" },
      { item: "EV / EBITDA", val: "약 15.3×", note: "섹터 평균(20-25×) 대비 디스카운트 인수", accent: true },
      { item: "EV / Revenue", val: "약 5.1×", note: "성장 둔화 반영한 보수적 멀티플" },
      { item: "특별 배당", val: "$11/주", note: "클로징 전 VMware 이사회 결의, 주주 가치 환원" },
    ],
    disclaimer: "밸류에이션 수치는 공개 공시 및 업계 분석 자료 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "브로드컴 인수 논리",
      initials: "AVGO",
      bg: "bg-red-700",
      points: [
        "Hock Tan 플레이북 최대 적용 — 성숙·고마진 엔터프라이즈 소프트웨어를 인수해 구독 모델로 전환, FCF 극대화",
        "30만 고객 기반의 '잠금 효과' 활용 — vSphere 의존도가 높은 기업 고객에게 가격 협상력 행사",
        "반도체 사업 의존도 완화 — 경기 민감 반도체에서 경기 방어적 소프트웨어 구독 매출로 사업 포트폴리오 다각화",
        "비용 구조 최적화 — 인수 후 ~30% 인력 감축, R&D 선택·집중으로 EBITDA 마진 대폭 개선 목표",
        "Dell 스핀오프 이후 저평가 VMware 포착 — 독립 후 성장 모멘텀 약화로 주가 저평가 구간에서 인수",
      ],
    },
    seller: {
      title: "VMware 매각 논리",
      initials: "VMW",
      bg: "bg-blue-600",
      points: [
        "44% 프리미엄 + $11 특별 배당 — Dell 스핀오프 후 지지부진했던 주가에 상당한 프리미엄 실현",
        "클라우드 전환 경쟁 압박 — AWS·Azure·GCP의 네이티브 서비스 확대로 독립 생존 전략 불확실성 증가",
        "브로드컴의 판매·유통 역량 활용 — 반도체 고객사 채널을 통한 엔터프라이즈 확장 기회",
        "이사회·주주의 가치 실현 압박 — Dell 스핀오프 이후 독립 성장 스토리가 주가에 충분히 반영되지 않은 상황",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "2023년 11월 클로징 직후 브로드컴은 VMware 플레이북을 신속히 실행했다. 영구 라이선스 판매를 전면 중단하고 구독 번들(VMware Cloud Foundation) 모델로 강제 전환했으며, 가격은 기존 대비 3-5배 수준으로 인상됐다. 약 2,800-3,000여 개의 SKU를 4개 핵심 번들로 단순화했다. 직원 약 30%(약 1만 2천명 규모)를 감원했다. 고객과 파트너들의 반발이 극심했고, 일부 대기업은 대체제(Nutanix, 퍼블릭 클라우드 전환) 검토를 가속화했다.",
    overallVerdict: "브로드컴의 재무 목표 달성 진행 중 (고객 반발 리스크 지속)",
    positives: [
      "브로드컴 FY2024 소프트웨어 매출 급증 — VMware 통합 후 연간 소프트웨어 ARR 목표 $85억 조기 달성 경로",
      "EBITDA 마진 대폭 개선 — 비용 절감 및 가격 인상 효과로 VMware 부문 EBITDA 마진 60%+ 목표",
      "번들 단순화 — 수천 개 SKU를 4개 번들로 축소, 세일즈 효율성 및 평균 계약가치(ACV) 상승",
      "브로드컴 주가 상승 — 딜 완료 후 AI 반도체 수요와 소프트웨어 전환 기대가 복합 작용해 시가총액 대폭 확대",
    ],
    risks: [
      "고객 대규모 이탈 가능성 — 가격 3-5배 인상에 반발한 기업들의 Nutanix·퍼블릭 클라우드 전환 가속",
      "핵심 엔지니어 대량 이탈 — 구조조정으로 VMware 기술 역량 약화, 제품 혁신 속도 저하 우려",
      "파트너 생태계 훼손 — 파트너 마진 축소·프로그램 변경으로 VAR 및 리셀러 이탈",
      "규제 후속 감시 — EU·영국 CMA 조건부 승인 이행 여부 지속 모니터링 부담",
      "$320억 고레버리지 부담 — 금리 상승 환경에서 이자 비용 증가, 재무 유연성 제약",
    ],
    editorNote: "브로드컴의 VMware 인수는 '전략적 M&A'가 아닌 '재무 공학 M&A'의 교과서다. 제품 혁신이 아닌 가격·비용 레버로 수익을 극대화하는 Hock Tan 플레이북의 성패는 고객 이탈률이 결정한다. VMware 의존성이 높은 기업들이 단기에 대체제로 옮기기 어렵다는 점이 브로드컴의 베팅 근거였다. 하지만 장기적으로 고객 불만이 Nutanix·클라우드로의 대규모 이전으로 이어진다면, 이 $690억 딜의 진짜 성적표는 2026-2027년에야 판가름날 것이다.",
  },

  tombstone: {
    acquirerInitials: "AVGO",
    acquirerBg: "bg-red-700",
    targetInitials: "VMW",
    targetBg: "bg-blue-600",
    acquirerName: "Broadcom Inc.",
    targetName: "VMware, Inc.",
    dealTitle: "현금·주식 혼합 합병 (Cash & Stock Merger)",
    dealSize: "$690억",
    dealSizeUSD: "USD ~69bn (약 91조원)",
    evEbitda: "15.3×",
    closeDate: "2023년 11월",
  },

  sources: [
    { id: 1, text: "Broadcom Press Release — Broadcom Inc. to Acquire VMware in a $61 Billion Transaction (May 2022)", url: "https://investors.broadcom.com" },
    { id: 2, text: "VMware Proxy Statement / Form DEFM14A — Merger Agreement Details (2022)", url: "https://www.sec.gov/cgi-bin/browse-edgar" },
    { id: 3, text: "European Commission — Commission approves acquisition of VMware by Broadcom, subject to conditions (May 2023)" },
    { id: 4, text: "UK CMA — Broadcom / VMware merger inquiry: Final Decision (November 2023)", url: "https://www.gov.uk/cma-cases" },
    { id: 5, text: "VMware FY2023 Annual Report (Form 10-K)", url: "https://ir.vmware.com" },
    { id: 6, text: "Bloomberg — Broadcom Closes $69 Billion VMware Acquisition (November 2023)" },
    { id: 7, text: "Broadcom Q1 FY2024 Earnings — VMware Integration Update", url: "https://investors.broadcom.com" },
    { id: 8, text: "The Register — VMware customers report 3x-5x price hikes post-Broadcom acquisition (2024)" },
    { id: 9, text: "Gartner — VMware Broadcom Impact Analysis: Customer Migration Scenarios (2024)" },
  ],

  seo: {
    title: "브로드컴 VMware 인수 완전 분석 — $690억 엔터프라이즈 소프트웨어 최대 딜",
    description: "브로드컴의 VMware $690억 인수 완전 분석. Hock Tan 플레이북, 18개월 EU·영국·미국 규제 심사, 인수 후 가격 3-5배 인상, 구독 전환 강제의 충격까지 심층 해부.",
    keywords: [
      "브로드컴 VMware 인수",
      "Broadcom VMware M&A",
      "Hock Tan 플레이북",
      "엔터프라이즈 소프트웨어 최대 M&A",
      "VMware 구독 전환",
      "VMware 가격 인상",
      "반도체 소프트웨어 M&A",
      "AVGO VMW 딜 분석",
      "EV EBITDA 엔터프라이즈 소프트웨어",
      "EU CMA 브로드컴 반독점",
      "VMware vSphere 가상화",
    ],
  },

  concepts: [
    { term: "Hock Tan 플레이북", description: "성숙 엔터프라이즈 소프트웨어를 인수 후 R&D·인력 감축, 구독 전환, 가격 인상으로 FCF를 극대화하는 브로드컴 CEO의 반복 전략" },
    { term: "전략적 M&A (Strategic M&A)", href: "/learn/strategic-ma", description: "재무 수익보다 시장 지위·시너지·역량 확보를 주목적으로 하는 기업 인수합병" },
    { term: "엔터프라이즈 소프트웨어 통합", description: "대기업 IT 인프라용 소프트웨어 시장에서 M&A를 통해 복수의 제품을 단일 벤더 아래 통합하는 산업 트렌드" },
    { term: "구독 모델 전환 (Subscription Transition)", href: "/learn/subscription-economy", description: "일회성 영구 라이선스 판매에서 반복 구독(ARR/MRR) 모델로 전환해 수익 예측 가능성과 고객 잠금 효과를 높이는 전략" },
    { term: "반독점 규제 (Antitrust)", href: "/learn/antitrust", description: "M&A가 시장 경쟁을 저해하는지 EU·영국 CMA·미국 FTC 등 각국 경쟁 당국이 심사하는 절차" },
    { term: "EV/EBITDA 멀티플", href: "/deal-101/ev-ebitda", description: "기업가치(Enterprise Value)를 EBITDA로 나눈 상대가치 평가 지표. 산업·성장률에 따라 적정 배수가 결정된다." },
  ],

  faq: [
    {
      q: "브로드컴은 왜 VMware를 $690억에 인수했나요?",
      a: "Hock Tan CEO의 핵심 전략은 '잠금 효과(lock-in)'가 강한 성숙 엔터프라이즈 소프트웨어를 인수해 구독 모델로 전환하고 가격을 올려 자유현금흐름(FCF)을 극대화하는 것입니다. VMware는 30만 개 기업 고객이 데이터센터 인프라를 의존하는 사실상 표준 플랫폼으로, 대체재로의 전환 비용이 매우 높습니다. 브로드컴은 이 '포로 고객 기반'을 구독 모델로 재가격화할 수 있다고 판단했고, 그것이 $690억 베팅의 근거였습니다.",
    },
    {
      q: "인수 후 VMware 고객들은 어떤 영향을 받았나요?",
      a: "2023년 11월 클로징 직후 브로드컴은 영구 라이선스 판매를 중단하고 구독 번들(VMware Cloud Foundation 등)로 전환을 강제했습니다. 기존 계약 고객들은 갱신 시 3-5배 가격 인상을 통보받았으며, 수천 개 SKU가 4개 핵심 번들로 통합됐습니다. 많은 기업 IT 담당자들이 예산 충격을 호소했고, 일부는 Nutanix 등 대체제 검토를 시작했습니다.",
    },
    {
      q: "EU와 영국 CMA는 어떤 조건으로 이 딜을 승인했나요?",
      a: "EU 집행위원회는 브로드컴이 경쟁 클라우드 제공업체들에게 VMware 제품과의 인터오퍼러빌리티(상호 운용성)를 보장하는 조건으로 2023년 5월 승인했습니다. 영국 CMA도 유사하게 경쟁사에 대한 API 접근권 보장과 차별 금지 조건을 부과하고 2023년 11월 최종 승인했습니다. 두 기관 모두 퍼블릭 클라우드 시장에서의 경쟁 제한을 핵심 우려로 지목했습니다.",
    },
    {
      q: "EV/EBITDA 15.3배는 비싼 가격이었나요?",
      a: "당시 엔터프라이즈 소프트웨어 섹터 평균(20-25배)보다는 낮은 수준이었습니다. VMware의 성장률 둔화와 클라우드 네이티브 경쟁 압박을 감안한 디스카운트 인수였습니다. 브로드컴은 구독 전환과 가격 인상 이후 VMware EBITDA가 크게 증가할 것으로 가정하면, 실질 매입 멀티플은 더 낮아진다는 논리를 갖고 있었습니다. 실제로 FY2024 기준 VMware 부문 기여 EBITDA는 인수 전 대비 크게 개선됐습니다.",
    },
    {
      q: "브로드컴의 고레버리지 파이낸싱($320억 차입)은 리스크가 아닌가요?",
      a: "맞습니다. 브로드컴은 딜을 위해 약 $320억의 신규 부채를 조달했고, 이는 당시 금리 인상 환경에서 상당한 이자 부담을 의미했습니다. 그러나 VMware의 강력한 FCF 창출 능력($45억+ EBITDA)과 구독 전환에 따른 추가 수익 개선으로 부채 상환이 가능하다는 판단이었습니다. 브로드컴은 CA Technologies·Symantec 인수 시에도 유사한 레버리지 전략을 성공적으로 실행한 전례가 있습니다.",
    },
  ],
};

export default deal;
