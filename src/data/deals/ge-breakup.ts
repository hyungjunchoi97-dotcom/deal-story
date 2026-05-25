/**
 * GE 3분할 해체
 * 130년 제국의 해체 — 2021년 발표, 2024년 완성
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "ge-breakup",
  title: "130년 GE 제국은 왜 3분할됐나 — 래리 컬프의 콘글로머리트 해체 전략",
  subtitle: "1892년 에디슨 창립 → 2024년 3개 독립 기업 · 콘글로머리트 디스카운트 극복 · GE Vernova + GE HealthCare + GE Aerospace",
  category: "restructuring",
  industry: "산업재 / 의료기기 / 에너지 / 항공 엔진",
  country: "미국",
  announcedAt: "2021-11-09",
  closedAt: "2024-04-02",
  announcedDisplay: "2021년 11월",
  closedDisplay: "2024년 4월",
  readingMinutes: 12,
  tags: ["GE", "General Electric", "spinoff", "breakup", "Larry Culp", "conglomerate", "GE Aerospace", "GE HealthCare", "GE Vernova", "restructuring"],
  excerpt: "1892년 에디슨이 설립한 GE는 한때 세계에서 가장 가치 있는 기업이었다. 2021년 11월 CEO 래리 컬프는 130년 역사의 콘글로머리트를 에너지(GE Vernova), 의료기기(GE HealthCare), 항공 엔진(GE Aerospace) 세 독립 기업으로 분할한다고 발표했다. 2024년 4월 GE Vernova 분사로 3분할이 완성됐고, 3개 회사 합산 시총은 분할 발표 전 GE 시총의 2배를 넘어섰다.",

  acquirer: { initials: "GE", bg: "bg-blue-800", label: "GE (모회사)" },
  target: { initials: "3CO", bg: "bg-teal-600", label: "GE Vernova + GE HealthCare + GE Aerospace" },

  background: [
    "GE는 1892년 토머스 에디슨의 Edison General Electric과 Thomson-Houston Electric Company의 합병으로 설립됐다. 20세기 내내 GE는 전구부터 제트 엔진, 의료기기, 금융 서비스, TV 방송(NBC)까지 확장하며 미국 자본주의의 상징이 됐다. 잭 웰치(Jack Welch) CEO 시절(1981~2001) GE는 세계 최고 시총 기업으로 군림했다.",
    "문제는 2001년 이후 GE Capital(금융 서비스 부문)의 과도한 성장과 2008년 금융위기에서 시작됐다. 2008~2009년 GE Capital이 치명적 손실을 기록했고, GE 전체 신용등급이 위협받았다. 이후 파워(전력 설비) 사업의 대규모 손실, 알스톰(Alstom) 파워 인수 실패, 회계 조사까지 겹치면서 GE 주가는 2018년 17달러대로 폭락 — $500B 이상의 시총이 사라졌다.",
    "2018년 취임한 래리 컬프(Larry Culp)는 GE 최초의 외부 영입 CEO로, 다나허(Danaher) 경영 원칙을 GE에 이식하며 구조조정에 착수했다. 사업 매각, 부채 축소, 린(Lean) 경영 도입으로 GE를 안정화했다. 그리고 2021년 11월 9일, 컬프는 GE를 3개 독립 기업으로 분리한다는 역사적 결정을 발표했다.",
    "3분할 일정: ①GE HealthCare — 2023년 1월 NASDAQ 분사 상장 (GEHC). ②GE Vernova (에너지·전력·재생에너지·풍력) — 2024년 4월 NYSE 분사 상장 (GEV). ③GE Aerospace (제트 엔진·방산) — 나머지 GE 법인이 GE Aerospace로 재명명, NYSE 상장 유지 (GE). 2024년 4월 GE Vernova 분사로 130년 콘글로머리트 해체가 완성됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "3분할 분사 (무상 주식 배분)",
    acquirerName: "General Electric Company (분사 주체)",
    targetName: "GE Vernova + GE HealthCare + GE Aerospace",
    announcedDisplay: "2021년 11월",
    closedDisplay: "2024년 4월 (완성)",
    country: "미국",
  },

  executiveSummary: [
    "1892년 에디슨 창립 → 2024년 130년 역사 콘글로머리트 완전 해체",
    "3개 독립 기업: GE HealthCare (2023.1), GE Vernova (2024.4), GE Aerospace (본사 잔존)",
    "래리 컬프의 콘글로머리트 디스카운트 해소 전략 — 각 사업의 독립 멀티플 획득",
    "3개 회사 합산 시총 $300B+ — 분할 발표 전 GE 시총 대비 2배+",
    "잭 웰치 시대 다각화의 종언 — 선택과 집중이 규모보다 가치 있음을 증명",
    "넬슨 펠츠(Trian Fund)의 행동주의 압박도 분리 결정에 영향",
  ],

  industryOverview: {
    body: "2021년 기준 GE가 관련된 산업들의 성장 속도는 제각각이었다. 항공 엔진(GE Aerospace)은 팬데믹 이후 항공 수요 회복으로 강력한 성장 전망이었다. 의료기기(GE HealthCare)는 인구 고령화·진단 기술 수요로 꾸준한 성장이 예상됐다. 에너지·전력(GE Vernova)은 에너지 전환(재생에너지 확대, 가스터빈 교체)의 최대 수혜 섹터였다. 세 사업 모두 다른 성장 논리를 갖고 있었고, 하나의 기업 안에 묶으면 각각의 가치가 희석됐다.",
    metrics: [
      { label: "분할 발표 전 GE 시총", value: "약 $1,200억", sub: "2021년 11월 기준" },
      { label: "GE HealthCare 시총 (2024)", value: "약 $400억", sub: "독립 상장 후" },
      { label: "GE Vernova 시총 (2024)", value: "약 $700억+", sub: "분사 후 급등" },
      { label: "GE Aerospace 시총 (2024)", value: "약 $2,000억+", sub: "항공 수요 회복으로 폭등" },
    ],
    subBody: "콘글로머리트 디스카운트는 다각화된 기업이 각 사업부 합산 가치보다 낮게 평가받는 현상이다. GE의 3분할은 이 디스카운트를 제거해 각 사업이 독립 멀티플을 받도록 하는 전략이었다.",
    players: [
      { name: "GE Aerospace", role: "CFM·LEAP 엔진 등 항공 엔진·방산, 분할 후 GE 본체" },
      { name: "GE HealthCare", role: "CT·MRI 등 의료영상 기기, 2023년 독립 상장" },
      { name: "GE Vernova", role: "가스터빈·풍력·전력망 에너지, 2024년 독립 상장" },
      { name: "Trian Fund (넬슨 펠츠)", role: "행동주의 투자자, 분리 압박" },
    ],
  },

  companyOverview: {
    targetName: "GE (General Electric Company) — 분사 주체",
    body: "GE는 1892년 설립 이후 20세기 미국 산업화를 이끈 기업이다. 잭 웰치 시절 GE Capital을 통해 금융 서비스로 과도하게 확장했고, 2008년 금융위기와 2010년대 파워 사업 부진으로 극심한 위기를 겪었다. 2018년 래리 컬프 취임 후 구조조정을 거쳐 3분할 결정에 이르렀다.",
    metrics: [
      { label: "설립", value: "1892년", sub: "에디슨의 전기 회사에서 출발" },
      { label: "잭 웰치 시절 최고 시총", value: "약 $5,940억", sub: "2000년, 당시 세계 최고" },
      { label: "2018년 최저 주가", value: "$6.66", sub: "최고가 $60에서 89% 하락" },
      { label: "분할 발표 전 직원 수", value: "약 17만 명", sub: "2021년 기준" },
    ],
    financials: [
      { year: "FY2020", revenue: 79619, cogs: 58000, grossProfit: 21619, sga: 12000, operatingIncome: -5758, ebitda: 3000 },
      { year: "FY2021", revenue: 74196, cogs: 54000, grossProfit: 20196, sga: 11000, operatingIncome: 2048, ebitda: 6500 },
      { year: "FY2022", revenue: 76555, cogs: 55000, grossProfit: 21555, sga: 10500, operatingIncome: 5468, ebitda: 9200 },
    ],
    financialsNote: "단위: USD 백만(M). GE 연결 기준 공시 (Healthcare 및 GE Capital 제외 조정). 추정치 포함.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "항공(GE Aerospace)", pct: 38, color: "bg-blue-700", amt: "약 $282억" },
      { name: "에너지(GE Vernova 前)", pct: 38, color: "bg-green-600", amt: "약 $290억" },
      { name: "의료(GE HealthCare 前)", pct: 24, color: "bg-teal-500", amt: "약 $185억" },
    ],
  },

  dealStructure: {
    body: "GE는 3단계 분사 구조로 해체를 실행했다. 1단계: GE HealthCare의 80.1% 지분을 주주들에게 배분해 2023년 1월 NASDAQ 독립 상장(GEHC). 2단계: GE Vernova 100% 지분을 주주들에게 배분해 2024년 4월 NYSE 독립 상장(GEV). 3단계: 나머지 GE 법인이 GE Aerospace로 재명명, NYSE 계속 상장(GE). 모든 분사는 Section 355 면세 구조로 실행됐다.",
    preOwnership: {
      nodes: [
        { id: "ge_parent", label: "GE (통합 콘글로머리트)", sub: "NYSE 상장 (GE)", type: "acquirer" },
        { id: "ge_health", label: "GE HealthCare", sub: "GE 산하 의료기기 부문", type: "target" },
        { id: "ge_energy", label: "GE Vernova (前 파워·에너지)", sub: "GE 산하 에너지 부문", type: "target" },
      ],
      edges: [
        { from: "ge_parent", to: "ge_health", label: "100%" },
        { from: "ge_parent", to: "ge_energy", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "gehc", label: "GE HealthCare", sub: "NASDAQ: GEHC (2023.1)", type: "public" },
        { id: "gev", label: "GE Vernova", sub: "NYSE: GEV (2024.4)", type: "public" },
        { id: "ge_aerospace", label: "GE Aerospace", sub: "NYSE: GE (재명명)", type: "acquirer" },
      ],
      edges: [
        { from: "ge_aerospace", to: "gehc", label: "독립 (2023)" },
        { from: "ge_aerospace", to: "gev", label: "독립 (2024)" },
      ],
    },
    keyTerms: [
      { label: "분사 1", value: "GE HealthCare — 2023년 1월 NASDAQ (GEHC)", accent: false },
      { label: "분사 2", value: "GE Vernova — 2024년 4월 NYSE (GEV)", accent: false },
      { label: "본사 잔존", value: "GE Aerospace — NYSE (GE) 유지", accent: true },
      { label: "모든 분사 구조", value: "Section 355 면세 분사", accent: false },
      { label: "3개 회사 합산 시총", value: "$300B+ (분할 전 GE 시총의 2배+)", accent: true },
    ],
  },

  advisors: {
    body: "GE 3분할 과정에서 각 분사별로 자문사들이 개별 참여했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "분사 주체 (GE)",
        initials: "GE",
        bg: "bg-blue-800",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "GE HealthCare 분사 자문" },
          { firm: "Morgan Stanley", role: "재무 자문 (FA)", roleType: "financial", note: "GE Vernova 분사 자문" },
          { firm: "Weil Gotshal & Manges", role: "법률 자문", roleType: "legal", note: "분사 구조 법률 총괄" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반입니다.",
  },

  valuation: {
    body: "GE의 3분할은 콘글로머리트 디스카운트를 제거해 각 사업이 독립 섹터 멀티플을 받도록 했다. 분할 발표 전 GE 시총 약 $1,200억이 2024년 3개 회사 합산 $3,000억+로 성장했다.",
    rows: [
      { item: "분할 발표 전 GE 시총", val: "약 $1,200억", note: "2021년 11월, 통합 콘글로머리트", accent: false },
      { item: "GE HealthCare 시총 (2024)", val: "약 $400억", note: "의료기기 독립 멀티플 적용" },
      { item: "GE Vernova 시총 (2024)", val: "약 $700억+", note: "에너지 전환 테마 프리미엄", accent: true },
      { item: "GE Aerospace 시총 (2024)", val: "약 $2,000억+", note: "항공 엔진 수요 회복", accent: true },
      { item: "3개 회사 합산 시총", val: "$3,000억+", note: "분할 발표 전 대비 2.5배+", accent: true },
    ],
    disclaimer: "시총 수치는 2024년 시장 데이터 기반 추정치입니다.",
  },

  rationale: {
    buyer: {
      title: "GE 3분할의 논리 (래리 컬프)",
      initials: "GE",
      bg: "bg-blue-800",
      points: [
        "콘글로머리트 디스카운트 제거 — 각 사업의 독립 멀티플 획득으로 주주 가치 극대화",
        "경영 집중 — 각 사업 경영진이 한 분야에만 집중할 수 있는 구조 마련",
        "자본 배분 최적화 — 각 사업에 맞는 별도 자본 구조·배당 정책",
        "M&A 자유도 — 각 회사가 독립적으로 전략적 인수·파트너십 추진",
        "투자자 적합성 — 각 사업별로 관심 있는 투자자 풀에 직접 접근",
      ],
    },
    seller: {
      title: "각 사업 분사의 논리",
      initials: "3CO",
      bg: "bg-teal-600",
      points: [
        "GE HealthCare — 의료기기 전문 기업으로 독립, 헬스케어 투자자 접근",
        "GE Vernova — 에너지 전환 테마 플레이로 재생에너지 투자자 유치",
        "GE Aerospace — 항공 엔진 순수 플레이로 방산·항공 투자자 집중 대응",
        "세 사업 모두 — 독립 주식으로 성과 기반 경영진 인센티브 설계",
        "파트너십 자유 — 타 사업과의 이해충돌 없이 고객·파트너 관계 구축",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "2024년 4월 GE Vernova 분사로 130년 GE 콘글로머리트가 완전히 해체됐다. GE Aerospace는 항공 수요 회복과 LEAP 엔진 수요 급증으로 2024년 주가가 폭등, 시총 $2,000억+를 달성했다. GE HealthCare는 안정적 성장세를 유지했다. GE Vernova는 에너지 전환 붐으로 분사 직후 주가가 급등했다. 3개 회사 합산 시총은 분할 발표 전 GE 단독 시총의 2.5배를 훌쩍 넘었다.",
    overallVerdict: "콘글로머리트 해체의 역대급 성공 사례",
    positives: [
      "GE Aerospace 시총 $2,000억+ — LEAP 엔진 수요 폭증, 항공 회복 최대 수혜",
      "GE Vernova 에너지 전환 프리미엄 — 재생에너지·전력망 수요로 분사 직후 급등",
      "GE HealthCare 안정적 성장 — 의료영상 기기 꾸준한 수요",
      "3개 회사 합산 시총 > 분할 전 2.5배 — 콘글로머리트 디스카운트 완전 해소",
      "래리 컬프 리더십 입증 — 위기 기업 구조조정에서 가치 창출까지",
    ],
    risks: [
      "GE Capital 잔여 부채 처리 — 금융 서비스 부문의 잔여 리스크",
      "GE Vernova 풍력 사업 어려움 — 해상 풍력 비용 상승으로 수익성 도전",
      "각 회사의 독립 경영 학습 곡선",
      "에너지 전환 속도 불확실성 — GE Vernova의 성장 전제",
    ],
    editorNote: "GE의 3분할은 '잭 웰치 시대 다각화 vs 선택과 집중' 논쟁의 최종 판결이다. 웰치가 만든 세계 최고 시총 기업은 과도한 다각화와 GE Capital 리스크로 90% 이상 가치를 잃었다. 래리 컬프는 그 잔해를 3개 독립 기업으로 분리해 분할 전보다 2.5배의 가치를 만들었다. 핵심 교훈: 규모보다 집중이, 다각화보다 깊이가 장기 기업 가치를 만든다.",
  },

  tombstone: {
    acquirerInitials: "GE",
    acquirerBg: "bg-blue-800",
    targetInitials: "3CO",
    targetBg: "bg-teal-600",
    acquirerName: "General Electric Company",
    targetName: "GE HealthCare + GE Vernova + GE Aerospace",
    dealTitle: "3분할 분사 (Section 355 면세)",
    dealSize: "합산 시총 $3,000억+",
    dealSizeUSD: "USD 300B+ combined market cap (2024)",
    evEbitda: "N/A (분사 구조)",
    closeDate: "Apr 2024 (완성)",
  },

  sources: [
    { id: 1, text: "GE Press Release — GE Plans to Form Three Industry-Leading, Global Public Companies (November 2021)", url: "https://investor.ge.com" },
    { id: 2, text: "GE HealthCare IPO Prospectus (Form 10, 2022)", url: "https://www.sec.gov" },
    { id: 3, text: "GE Vernova Form 10 Registration Statement (2024)", url: "https://www.sec.gov" },
    { id: 4, text: "GE Annual Report FY2022 — Strategic Transformation and Separation Plans" },
    { id: 5, text: "The Wall Street Journal — GE to Break Itself Into Three Companies (November 2021)" },
    { id: 6, text: "Bloomberg — GE Vernova Surges After Spinoff as Energy Transition Play (April 2024)" },
    { id: 7, text: "Fortune — How Larry Culp Rescued GE (2023)" },
    { id: 8, text: "Financial Times — General Electric Completes Historic Breakup (April 2024)" },
  ],

  seo: {
    title: "GE 3분할 완전 분석 — 130년 제국 해체와 콘글로머리트 디스카운트 극복",
    description: "GE의 3분할 완전 분석. 래리 컬프의 구조조정 전략, GE HealthCare·GE Vernova·GE Aerospace 분사 과정, 콘글로머리트 디스카운트 해소 효과까지 심층 해부.",
    keywords: ["GE 3분할", "GE 분사", "GE Aerospace", "GE HealthCare", "GE Vernova", "래리 컬프", "콘글로머리트 해체", "스핀오프", "General Electric breakup"],
  },

  concepts: [
    { term: "스핀오프 (Spin-off)", href: "/deal-101/spinoff", description: "콘글로머리트를 세 독립 기업으로 분리해 각각의 가치를 극대화한 GE 3분할" },
    { term: "전략적 M&A (Strategic M&A)", href: "/deal-101/strategic-ma", description: "분리도 전략이다 — GE 3분할이 통합보다 2.5배의 가치를 창출한 과정" },
    { term: "경쟁 해자 (Competitive Moat)", href: "/deal-101/competitive-moat", description: "GE Aerospace의 LEAP 엔진 기술 해자 — 독립 후 더 명확하게 드러난 경쟁 우위" },
    { term: "수직 통합 (Vertical Integration)", href: "/deal-101/vertical-integration", description: "잭 웰치의 수직·수평 통합 전략이 GE Capital 리스크와 함께 붕괴된 과정" },
  ],

  faq: [
    {
      q: "GE가 3분할을 결정한 가장 큰 이유는 무엇인가요?",
      a: "콘글로머리트 디스카운트 제거입니다. 항공 엔진, 의료기기, 에너지·전력은 완전히 다른 성장 논리와 밸류에이션 멀티플을 갖고 있습니다. 하나의 기업 안에 묶으면 투자자들이 어느 멀티플을 적용해야 할지 불분명해져 모두 저평가됩니다. 분리하면 각 사업이 해당 섹터의 최적 멀티플을 받을 수 있습니다. GE의 경우 분리 후 3개 회사 합산 시총이 통합 상태 대비 2.5배+가 됐습니다.",
    },
    {
      q: "GE는 왜 2018년에 그렇게 급격히 몰락했나요?",
      a: "세 가지 이유가 겹쳤습니다. 첫째, GE Capital의 과도한 팽창 — 금융 서비스 부문이 GE 이익의 40%+를 담당했는데 2008년 금융위기로 대규모 손실을 기록했습니다. 둘째, 알스톰 파워 인수(2015년, $105억) 실패 — 전력 수요 예측 오류로 막대한 감손이 발생했습니다. 셋째, 회계 불투명성 — GE Capital의 장기 금융 손실 은폐 의혹으로 신뢰가 붕괴됐습니다.",
    },
    {
      q: "래리 컬프는 어떻게 GE를 살렸나요?",
      a: "컬프는 다나허에서 검증된 경영 원칙을 GE에 적용했습니다. 첫째, 비핵심 사업 매각과 부채 축소. 둘째, GE Capital 사실상 청산. 셋째, 린(Lean) 제조·운영 도입으로 현금 흐름 개선. 넷째, GE Aerospace(제트 엔진)의 진짜 경쟁력을 부각시키는 전략. 3분할 결정은 이 구조조정의 완성판이었습니다.",
    },
    {
      q: "GE Aerospace가 그토록 높이 평가받는 이유는?",
      a: "GE Aerospace(과거 GE Aviation)는 LEAP·GE9X·CF6 시리즈 등 세계 제트 엔진 시장의 절반 이상을 점유하는 실질적 과점 사업자입니다. 항공기 엔진은 초기 판매 마진은 낮지만 수십 년간의 유지보수·부품(OEM 부품) 수익이 핵심입니다. 팬데믹 후 항공 수요 회복과 LEAP 엔진 설치 기반 확대로 서비스 매출이 폭증했습니다. 독립 후 이 이익의 질이 투자자들에게 명확히 보이면서 시총이 $2,000억+로 급등했습니다.",
    },
    {
      q: "잭 웰치의 다각화 전략은 틀렸나요?",
      a: "당시 시대 맥락에서는 합리적이었으나 지속 불가능했습니다. 1980~90년대에는 자본 시장 접근성 차이, 규모의 경제, 콘글로머리트 관리 기술로 다각화가 프리미엄을 만들었습니다. 그러나 2000년대 이후 자본 시장이 발전하고 전문화된 운용사·ETF가 등장하면서 투자자들이 스스로 다각화할 수 있게 됐습니다. 콘글로머리트가 제공하던 분산 투자 가치가 사라지고 집중 경영의 가치가 부각됐습니다. GE 3분할은 이 시대 변화의 최종 결론이었습니다.",
    },
  ],
};

export default deal;
