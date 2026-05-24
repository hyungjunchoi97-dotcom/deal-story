/**
 * 어도비 × 피그마 인수 무산
 * $200억 딜 — EU·영국 반독점 차단 · $10억 위약금 · 피그마 독립 유지
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "adobe-figma-blocked",
  title: "규제가 막은 $200억 딜 — 어도비는 왜 피그마 인수에 실패했나",
  subtitle: "ARR 50배 밸류에이션 · EU·영국 반독점 차단 · $10억 위약금 — 빅테크 M&A의 경고",
  category: "ma",
  industry: "소프트웨어 / 디자인 툴 / SaaS",
  country: "미국",
  announcedAt: "2022-09-15",
  announcedDisplay: "2022년 9월",
  closedDisplay: "Terminated Dec 2023",
  readingMinutes: 12,
  tags: ["Adobe", "Figma", "antitrust", "EU antitrust", "SaaS M&A", "design software", "failed acquisition", "break fee"],
  excerpt:
    "어도비가 피그마를 $200억(약 27조원)에 인수하려 했으나 EU와 영국 규제 당국의 반독점 차단으로 15개월 만에 포기. 어도비가 피그마에 $10억 위약금을 지급하고 거래가 무산된 이 딜은, SaaS 기업에 ARR 50배를 지불하려 한 역대 최고 프리미엄 M&A이자 빅테크 수평 합병의 위험성을 보여준 사례다.",

  acquirer: { initials: "ADBE", bg: "bg-red-600", label: "어도비" },
  target: { initials: "FIG", bg: "bg-violet-600", label: "피그마" },

  background: [
    "피그마(Figma)는 2012년 딜런 필드(Dylan Field)와 에반 왈러스(Evan Wallace)가 창업한 브라우저 기반 협업 디자인 툴 스타트업이다. 기존 디자인 소프트웨어와 달리 설치가 불필요하고, 팀원이 실시간으로 같은 파일을 편집할 수 있는 멀티플레이어 기능이 핵심이었다. 이 협업 중심 UX는 급격히 시장을 장악했고, 특히 어도비의 전통적인 데스크톱 앱 기반 Creative Cloud에 직접적인 위협이 됐다.",
    "어도비는 Photoshop, Illustrator, XD 등으로 수십 년간 창작 소프트웨어 시장을 지배해왔다. 그러나 2016년 출시된 피그마의 Adobe XD 잠식은 빠르게 현실이 됐다. 2022년 피그마의 연간 반복 수익(ARR)은 약 $4억으로 성장했고, 특히 UI/UX 디자인 협업 툴 시장에서 점유율이 압도적이었다. 어도비 입장에서 피그마는 가장 위협적인 경쟁자이자, 인수하지 않으면 Creative Cloud 구독 기반을 잠식당할 수밖에 없는 존재였다.",
    "2022년 9월 15일, 어도비는 피그마를 약 $200억(현금 $100억 + 어도비 주식 $100억)에 인수한다고 공식 발표했다. 피그마 직원 수가 약 1,000명 수준이었으므로 직원 1인당 $10억의 가치로 계산된 셈이었다. 당시 피그마의 ARR 대비 50배에 해당하는 이 밸류에이션은 SaaS 역대 최고 수준의 프리미엄이었다. 어도비는 피그마의 성장성과 협업 플랫폼으로서의 잠재 가치를 반영했다고 밝혔다.",
    "그러나 딜 발표 직후부터 전 세계 규제 당국의 심사가 시작됐다. EU 집행위원회와 영국 CMA(경쟁시장청)는 어도비와 피그마가 UI/UX 디자인·화면 디자인 소프트웨어 시장에서 가장 가까운 경쟁자(closest competitors)라는 점에 주목했다. 규제 당국은 이 인수가 경쟁을 직접 제거하는 수평 합병(horizontal merger)에 해당한다고 판단했다. 15개월간의 규제 심사 끝에 2023년 12월 18일, 어도비와 피그마는 EU의 공식 차단이 예상되는 상황에서 합의하에 딜을 포기했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$20B (약 27조원)",
    acquirerName: "어도비 (Adobe Inc.)",
    targetName: "피그마 (Figma, Inc.)",
    announcedDisplay: "2022년 9월",
    closedDisplay: "Terminated Dec 2023",
    country: "미국",
  },

  executiveSummary: [
    "SaaS 역대 최고 ARR 프리미엄 — 피그마 ARR ~$4억 대비 50배($200억), 직원 1인당 $10억 밸류에이션",
    "현금 $100억 + 어도비 주식 $100억의 혼합 구조 — 피그마 창업자·투자자에게 역대급 유동성 제공",
    "EU·영국 CMA 수평 합병 차단 — 어도비와 피그마가 화면 디자인 시장의 최근접 경쟁자라는 판단",
    "15개월 규제 심사 후 2023년 12월 딜 포기 — 어도비가 피그마에 $10억 위약금 지급",
    "피그마는 독립 유지 후 성장 가속 — $10억 현금 확보, IPO 준비 돌입",
    "빅테크의 경쟁자 인수·선제적 제거 전략에 대한 글로벌 규제 강화의 신호탄",
  ],

  industryOverview: {
    body: "디자인 소프트웨어 시장은 전통적인 데스크톱 애플리케이션에서 브라우저 기반 협업 SaaS 플랫폼으로 급격히 전환 중이다. 2022년 기준 글로벌 UI/UX 디자인 툴 시장은 약 $30~40억 규모로 추산되며, Figma, Adobe XD, Sketch, InVision 등이 경쟁하고 있었다. 특히 팬데믹 이후 원격 협업 수요가 급증하면서 피그마의 실시간 협업 기능이 시장 표준으로 자리 잡았다. 브라우저 기반 SaaS 모델은 팀 기반 구독으로 전환되면서 평균 계약 가치(ACV)와 Net Revenue Retention(NRR)이 전통 소프트웨어 대비 현저히 높게 유지됐다.",
    metrics: [
      { label: "글로벌 디자인 툴 시장 규모", value: "약 $35억", sub: "2022년 기준 추산" },
      { label: "피그마 ARR", value: "약 $4억", sub: "2022년 기준 (추산)" },
      { label: "피그마 ARR 성장률", value: "약 100% YoY", sub: "2021→2022 고속 성장" },
      { label: "어도비 Creative Cloud ARR", value: "약 $100억+", sub: "FY2022 기준" },
    ],
    subBody: "UI/UX 디자인 툴은 제품 개발 과정의 중심에 위치한다. 디자이너와 개발자·PM이 협업하는 플랫폼으로서, 피그마는 단순한 그래픽 에디터를 넘어 제품 개발 워크플로 전체를 장악하는 생산성 허브로 진화했다. EU와 영국 규제 당국이 '화면 디자인(screen design)' 시장을 별도의 관련 시장으로 획정하고 어도비와 피그마를 최근접 경쟁자로 본 것이 딜 차단의 핵심이었다.",
    players: [
      { name: "피그마 (Figma)", role: "브라우저 기반 협업 UI/UX 디자인 툴 1위, 시장점유율 압도적" },
      { name: "어도비 XD", role: "어도비의 UI/UX 디자인 툴 — 피그마에 시장 잠식되는 중" },
      { name: "Sketch", role: "Mac 전용 UI 디자인 툴, 피그마 등장 이전 강자" },
      { name: "InVision", role: "프로토타이핑 특화 협업 툴, 피그마에 지위 잠식" },
      { name: "Canva", role: "비전문가 대상 그래픽 디자인 SaaS, 다른 시장 세그먼트" },
    ],
  },

  companyOverview: {
    targetName: "피그마 (Figma, Inc.)",
    body: "피그마는 2012년 설립된 비상장 SaaS 기업으로, 브라우저에서 실시간 협업이 가능한 UI/UX 디자인 플랫폼을 제공한다. Google Docs가 문서 편집에서 협업을 혁신한 것처럼, 피그마는 디자인 분야의 협업 표준을 새로 정의했다. 2021년 Series E에서 $4억 달러를 조달하며 기업가치 $100억을 인정받은 바 있었다. 어도비의 $200억 인수 제안은 이 가치의 2배였다. 주요 고객으로는 Dropbox, Zoom, Twitter, Uber, GitHub 등 수천 개의 테크 기업이 있었고, 특히 제품 팀 내 디자이너·개발자·PM의 협업 도구로 사실상 업계 표준이 됐다.",
    metrics: [
      { label: "ARR (연간 반복 수익)", value: "약 $4억", sub: "2022년 추산 (비상장)" },
      { label: "ARR 성장률", value: "~100% YoY", sub: "2020~2022 고성장 구간" },
      { label: "기업가치 (Series E)", value: "$100억", sub: "2021년 기준" },
      { label: "인수 제안 기업가치", value: "$200억", sub: "ARR 50× 프리미엄" },
      { label: "임직원 수 (인수 당시)", value: "약 1,000명", sub: "직원 1인당 $1,000만 기업가치" },
    ],
    revenueBreakdown: [
      { name: "팀 구독 (Professional/Org)", pct: 75, color: "bg-violet-600", amt: "약 $3억" },
      { name: "엔터프라이즈 플랜", pct: 20, color: "bg-violet-400", amt: "약 $0.8억" },
      { name: "스타터/무료 전환", pct: 5, color: "bg-violet-200", amt: "약 $0.2억" },
    ],
    financials: [
      { year: "2021", revenue: 200, cogs: 40, grossProfit: 160, sga: 160, operatingIncome: -40, ebitda: -20 },
      { year: "2022", revenue: 400, cogs: 80, grossProfit: 320, sga: 300, operatingIncome: -60, ebitda: -30 },
      { year: "2023", revenue: 600, cogs: 120, grossProfit: 480, sga: 380, operatingIncome: -20, ebitda: 10 },
    ],
    financialsNote: "피그마는 비상장 기업으로, 수치는 공개 보도 및 업계 추산치입니다. 실제 수치와 다를 수 있습니다.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
  },

  dealStructure: {
    body: "어도비는 피그마 전체 지분을 현금 $100억 + 어도비(ADBE) 주식 $100억의 혼합 방식으로 인수하는 구조를 설계했다. 피그마의 창업자 딜런 필드와 기존 VC 투자자들이 주요 수혜자였다. 딜에는 규제 당국 승인이 선결 조건으로 포함됐으며, 승인이 불가능할 경우 어도비가 피그마에 $10억의 해지 위약금(termination fee)을 지급하는 조항이 설정됐다. 결국 이 위약금 조항이 실제로 발동됐다.",
    preOwnership: {
      nodes: [
        { id: "fig_investors", label: "피그마 투자자·창업자", sub: "VC·창업자 지분 보유", type: "public" },
        { id: "figma", label: "피그마 (Figma)", sub: "비상장 SaaS, $10억 ARR 궤도", type: "target" },
        { id: "adobe_public", label: "어도비 (Adobe Inc.)", sub: "나스닥 상장 (ADBE)", type: "acquirer" },
        { id: "adobe_xd", label: "Adobe XD", sub: "어도비의 UI/UX 디자인 툴", type: "entity" },
      ],
      edges: [
        { from: "fig_investors", to: "figma", label: "주주" },
        { from: "adobe_public", to: "adobe_xd", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "fig_investors_post", label: "피그마 투자자·창업자", sub: "현금 $10억 + ADBE 주식 수령 예정이었으나 무산", type: "public" },
        { id: "figma_independent", label: "피그마 (독립 유지)", sub: "위약금 $10억 수령 · IPO 준비", type: "target" },
        { id: "adobe_post", label: "어도비 (Adobe Inc.)", sub: "나스닥 상장 (ADBE) · 피그마 인수 실패", type: "acquirer" },
      ],
      edges: [
        { from: "fig_investors_post", to: "figma_independent", label: "주주 (독립)" },
      ],
    },
    keyTerms: [
      { label: "딜 규모 (제안 EV)", value: "$20B (현금 $10B + ADBE 주식 $10B)", accent: true },
      { label: "ARR 대비 밸류에이션 멀티플", value: "약 50× ARR (2022년 ARR ~$4억 기준)", accent: true },
      { label: "해지 위약금 (Break Fee)", value: "$10억 (어도비 → 피그마 지급)", accent: true },
      { label: "거래 형태", value: "현금 + 주식 혼합 인수 (Cash & Stock)", accent: false },
      { label: "규제 조건", value: "EU·영국·미국 규제 당국 승인 (선결 조건)", accent: false },
      { label: "딜 결과", value: "2023년 12월 18일 합의 해지 (EU 차단 예상)", accent: true },
      { label: "딜 지속 기간", value: "약 15개월 (2022.09 ~ 2023.12)", accent: false },
    ],
  },

  advisors: {
    body: "어도비와 피그마 양측은 M&A 최정상 자문사를 선임했다. 어도비 측은 미디어·테크 부티크 전문 Allen & Company를, 피그마 측은 스타트업·테크 딜 전문 독립 IB Qatalyst Partners를 선택했다. 규제 대응에서는 Cleary Gottlieb(어도비)과 Fenwick & West(피그마)가 EU·영국 심사를 진두지휘했으나 결국 차단을 막지 못했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (어도비)",
        initials: "ADBE",
        bg: "bg-red-600",
        advisors: [
          { firm: "Allen & Company", role: "재무 자문 (FA)", roleType: "financial", note: "미디어·테크 M&A 특화 부티크, 어도비 전략 자문 총괄" },
          { firm: "Cleary Gottlieb Steen & Hamilton", role: "법률 자문 (반독점)", roleType: "legal", note: "EU·영국 CMA 반독점 심사 대응 총괄" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (피그마)",
        initials: "FIG",
        bg: "bg-violet-600",
        advisors: [
          { firm: "Qatalyst Partners", role: "재무 자문 (FA)", roleType: "financial", note: "테크·스타트업 M&A 특화 독립 IB, 피그마 매각 협상 총괄" },
          { firm: "Fenwick & West", role: "법률 자문 (M&A·반독점)", roleType: "legal", note: "실리콘밸리 테크 기업 전문 로펌, 규제 심사 대응 및 계약 총괄" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 공시 기반입니다.",
  },

  valuation: {
    body: "어도비의 피그마 인수 제안가 $200억은 당시 피그마 ARR 약 $4억의 50배에 해당하는 역대 SaaS 최고 수준의 ARR 멀티플이었다. 일반적인 고성장 SaaS 기업의 인수 프리미엄이 ARR 10~20배 수준임을 감안하면 극단적인 프리미엄이었다. 어도비는 피그마의 연 100% 성장률, 높은 순수익유지율(NRR), 그리고 협업 플랫폼으로서의 전략적 가치를 반영했다고 설명했다. 그러나 이 가격은 피그마가 어도비 Creative Cloud에 미치는 위협의 크기 — 즉 '경쟁자 제거 가치' — 를 반영한 것이라는 시각도 많았다.",
    rows: [
      { item: "인수 제안 EV", val: "$20B", note: "현금 $10B + ADBE 주식 $10B", accent: true },
      { item: "피그마 2022 ARR (추산)", val: "약 $4억", note: "비상장 기업, 공개 추산치" },
      { item: "EV / ARR 멀티플", val: "약 50×", note: "SaaS 역대 최고 수준 프리미엄", accent: true },
      { item: "EV / 매출 (2022 추산)", val: "약 50×", note: "ARR ≈ Revenue for SaaS 기업" },
      { item: "피그마 이전 기업가치 (Series E, 2021)", val: "$10B", note: "시리즈 E 라운드 공인 가치" },
      { item: "인수가 vs. Series E 기업가치", val: "2× 프리미엄", note: "$10B → $20B, 1년 만에 2배" },
      { item: "해지 위약금", val: "$10억", note: "규제 차단 시 어도비 → 피그마 지급, 실제 지급됨", accent: true },
    ],
    disclaimer: "피그마는 비상장 기업으로 재무 수치는 공개 보도 기반 추산치입니다.",
  },

  rationale: {
    buyer: {
      title: "어도비의 인수 논리",
      initials: "ADBE",
      bg: "bg-red-600",
      points: [
        "경쟁자 조기 제거 — 피그마는 어도비 XD를 잠식하며 Creative Cloud의 UI/UX 세그먼트를 장악 중이었음. 인수하지 않으면 향후 더 큰 경쟁 위협으로 성장할 것이 명확했음",
        "협업 SaaS 플랫폼 전환 — 데스크톱 중심 Creative Cloud를 브라우저 기반 협업 플랫폼으로 도약시킬 수 있는 기술·사용자 기반 확보",
        "제품 팀(디자이너+개발자+PM) 통합 허브 — 피그마의 협업 기능을 통해 어도비가 기업 내 제품 개발 워크플로 전체를 장악하는 플랫폼 도약 가능",
        "고성장 ARR 엔진 인수 — ~100% YoY 성장하는 피그마 ARR이 어도비 전체 성장률을 끌어올릴 것으로 기대",
        "ARR 50× 지불 정당화 — '경쟁자 제거 가치 + 전략적 시너지 + 고성장 미래 현금흐름'을 복합 반영한 프리미엄",
      ],
    },
    seller: {
      title: "피그마가 딜에 동의한 이유",
      initials: "FIG",
      bg: "bg-violet-600",
      points: [
        "ARR 50배 현금화 — 비상장 스타트업이 Series E 기업가치($100억)의 2배인 $200억을 현금과 주식으로 즉시 실현하는 역대급 유동성 이벤트",
        "어도비 유통망·생태계 활용 — 어도비의 수천만 크리에이티브 전문가 사용자 기반을 통해 피그마의 글로벌 확장 가속 가능",
        "IPO 대비 확실성 — 2022년 테크 시장 침체 속 IPO 불확실성보다 확정적 $200억 가치 실현을 선택",
        "어도비 AI·클라우드 자원 활용 — Adobe Firefly(생성형 AI), Creative Cloud 인프라와의 통합으로 제품 역량 강화 기대",
        "$10억 위약금 안전망 — 규제 차단 시에도 $10억을 받는 조항으로 downside가 제한됨",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "딜이 무산된 후 피그마는 독립을 유지하며 오히려 성장을 가속했다. $10억 위약금을 수령한 피그마는 재무적으로 크게 강화됐고, 2024년 IPO 준비에 들어갔다. 어도비는 Creative Cloud 전략을 독자적으로 이어가야 했으며, 피그마와의 경쟁이 재개됐다. 어도비 XD 개발은 이미 크게 축소된 상태였고, 대신 AI 기반 생성형 디자인 도구(Adobe Firefly)에 역량을 집중했다. 이 딜의 실패는 빅테크가 경쟁자를 인수해 시장 지배력을 강화하는 이른바 '킬러 인수(killer acquisition)' 전략에 대한 글로벌 규제 강화의 중요한 선례가 됐다.",
    overallVerdict: "딜 실패 — 피그마 독립·성장, 어도비 전략 재조정 필요, 규제 선례 수립",
    positives: [
      "피그마는 $10억 위약금 수령 후 재무 강화 — 독립 성장 지속 및 IPO 준비 돌입",
      "피그마 제품 경쟁력 유지 — 인수 기간 중에도 협업 기능 강화, 개발자 생태계 확장",
      "규제 심사가 '킬러 인수'에 대한 새로운 기준 제시 — EU·영국 선례로 향후 빅테크 M&A 심사 강화",
      "어도비는 Firefly(생성형 AI) 전략에 집중하며 AI 기반 차별화 시도 중",
    ],
    risks: [
      "어도비 Creative Cloud의 UI/UX 세그먼트 경쟁력 약화 — Adobe XD 개발 사실상 중단, 피그마에 시장 주도권 이미 내줌",
      "어도비 $10억 위약금 지급 — 주주가치 훼손 및 M&A 전략 재검토 압박",
      "피그마의 독립 성장이 어도비에게 더 큰 위협 — $200억 지불 없이 피그마 ARR이 계속 성장하면 장기적 경쟁 위협 가중",
      "어도비 주가 영향 — 딜 발표 후 ADBE 주가 급락, 무산 후 일부 회복했으나 장기 전략 불확실성 잔존",
      "피그마 IPO 후 적대적 경쟁 가능성 — 독립 상장사로서 어도비 대항 전략 강화 우려",
    ],
    editorNote: "어도비-피그마 딜은 '왜 큰 기업이 스타트업에 ARR 50배를 지불하려 하는가'를 극명하게 보여주는 사례다. 그것은 단순한 성장 프리미엄이 아니라, 인수하지 않으면 자신이 대체될 것이라는 공포의 가격이었다. EU와 영국 규제 당국은 이를 정확히 간파했다: '가장 강력한 잠재 경쟁자를 돈으로 없애는 행위'는 경쟁법이 막아야 한다는 것이다. 이 딜의 실패는 향후 빅테크 수평 합병 심사의 기준점이 됐으며, M&A를 통한 경쟁 제거 전략이 더 이상 쉽지 않다는 경고를 시장 전체에 보냈다.",
  },

  tombstone: {
    acquirerInitials: "ADBE",
    acquirerBg: "bg-red-600",
    targetInitials: "FIG",
    targetBg: "bg-violet-600",
    acquirerName: "Adobe Inc.",
    targetName: "Figma, Inc.",
    dealTitle: "인수 합의 후 규제 차단으로 해지 (Terminated)",
    dealSize: "$20B",
    dealSizeUSD: "USD 20bn (현금 $10B + ADBE 주식 $10B)",
    evEbitda: "N/A (ARR 50×)",
    closeDate: "Terminated Dec 2023",
  },

  sources: [
    { id: 1, text: "Adobe Press Release — Adobe to Acquire Figma (September 2022)", url: "https://www.adobe.com/investor-relations" },
    { id: 2, text: "Adobe & Figma Joint Statement — Termination of Proposed Acquisition (December 2023)", url: "https://www.adobe.com" },
    { id: 3, text: "European Commission — Antitrust: Commission opens in-depth investigation into Adobe's proposed acquisition of Figma (2023)" },
    { id: 4, text: "UK CMA — Adobe / Figma merger inquiry — phase 2 investigation (2023)", url: "https://www.gov.uk/cma-cases" },
    { id: 5, text: "The Wall Street Journal — Adobe Abandons $20 Billion Deal to Buy Figma After Regulatory Resistance (December 2023)" },
    { id: 6, text: "Bloomberg — Adobe to Pay Figma $1 Billion Breakup Fee as Design Deal Collapses (December 2023)" },
    { id: 7, text: "Financial Times — Adobe's failed Figma acquisition: the deal that defined Big Tech antitrust era (2024)" },
    { id: 8, text: "Figma S-1 / IPO Filing Documents (2024 준비 기준 공개 보도)" },
    { id: 9, text: "Adobe FY2022 Annual Report (Form 10-K)", url: "https://investor.adobe.com" },
    { id: 10, text: "TechCrunch — Why the EU killed the Adobe-Figma deal (2023)" },
  ],

  seo: {
    title: "어도비 피그마 인수 실패 완전 분석 — $200억 딜이 규제에 막힌 이유",
    description: "어도비의 피그마 $200억 인수 실패 완전 분석. ARR 50배 밸류에이션, EU·영국 반독점 차단 이유, $10억 위약금 구조, 피그마 독립 후 IPO 전략까지 심층 해부. 빅테크 M&A 규제 리스크의 교과서.",
    keywords: [
      "어도비 피그마 인수 실패",
      "피그마 $200억 딜",
      "어도비 피그마 EU 규제 차단",
      "SaaS ARR 멀티플 밸류에이션",
      "피그마 IPO",
      "위약금 break fee M&A",
      "수평 합병 반독점",
      "빅테크 M&A 규제",
      "Adobe Figma blocked",
      "디자인 소프트웨어 M&A",
      "킬러 인수 antitrust",
      "피그마 기업가치 분석",
    ],
  },

  concepts: [
    { term: "ARR 멀티플 (ARR Multiple)", href: "/learn/arr-multiple", description: "SaaS 기업의 연간 반복 수익(ARR) 대비 기업가치 배수 — 성장성과 수익성의 복합 지표" },
    { term: "SaaS 밸류에이션 (SaaS Valuation)", href: "/learn/saas-valuation", description: "구독 기반 소프트웨어 기업의 가치 평가 방법론 — ARR·NRR·성장률 중심" },
    { term: "반독점/경쟁법 (Antitrust / Competition Law)", href: "/learn/antitrust", description: "M&A가 시장 경쟁을 해칠 때 규제 당국이 차단할 수 있는 법적 근거" },
    { term: "위약금/해지 수수료 (Break Fee / Termination Fee)", href: "/learn/break-fee", description: "M&A 계약에서 특정 조건(규제 차단 등) 하에 일방이 상대방에게 지급하는 손해배상 예약금" },
    { term: "M&A 규제 리스크 (Regulatory Risk in M&A)", href: "/learn/regulatory-risk", description: "M&A 완료를 막거나 조건을 부과할 수 있는 각국 경쟁·규제 당국의 심사 불확실성" },
    { term: "수평 합병 (Horizontal Merger)", href: "/learn/horizontal-merger", description: "같은 시장에서 경쟁하는 두 기업 간의 합병 — 경쟁 제한 우려로 규제 심사 강도가 가장 높음" },
  ],

  faq: [
    {
      q: "어도비는 왜 피그마에 ARR의 50배라는 역대 최고 프리미엄을 지불하려 했나요?",
      a: "피그마는 단순한 고성장 SaaS가 아니라 어도비 Creative Cloud의 핵심 세그먼트(UI/UX 디자인)를 직접 잠식하는 경쟁자였습니다. 어도비 입장에서 피그마 인수 가격은 '피그마의 미래 성장 가치'뿐 아니라 '피그마를 인수하지 않으면 어도비가 잃게 될 시장 가치'까지 포함된 것이었습니다. 이것이 ARR 50배라는 극단적 프리미엄의 논리였으며, 규제 당국도 바로 이 점을 문제 삼았습니다.",
    },
    {
      q: "EU와 영국은 왜 이 딜을 차단했나요? 어도비와 피그마는 서로 다른 제품 아닌가요?",
      a: "규제 당국은 UI/UX·화면 디자인(screen design) 툴을 별도의 관련 시장으로 획정했습니다. 이 시장에서 어도비 XD와 피그마는 가장 가까운 경쟁자(closest competitors)였습니다. 어도비가 피그마를 인수하면 이 경쟁 관계 자체가 사라지고, 어도비는 이 세그먼트에서 독점적 지위를 갖게 됩니다. EU와 영국 CMA는 이것이 경쟁법상 허용할 수 없는 수평 합병이라고 판단했습니다.",
    },
    {
      q: "위약금 $10억은 어떻게 결정됐고, 누가 누구에게 지급했나요?",
      a: "위약금(break fee)은 딜 계약서에 사전 약정됩니다. 어도비-피그마 계약에서는 '규제 당국 승인이 불가능해 딜이 해지될 경우 어도비가 피그마에 $10억을 지급한다'는 조건이 포함됐습니다. 2023년 12월 EU 차단이 예상되는 상황에서 양사가 합의 해지를 결정했고, 어도비는 피그마에 $10억을 실제로 지급했습니다. 이는 어도비 측의 비용이자 피그마의 windfall 수입이 됐습니다.",
    },
    {
      q: "딜 실패 후 피그마는 어떻게 됐나요?",
      a: "피그마는 $10억 위약금을 수령해 재무적으로 크게 강화됐고, 독립 기업으로서 계속 성장했습니다. 2024년에는 IPO를 준비하며 공개 상장을 추진했습니다. 딜 무산이 오히려 피그마의 브랜드 가치와 독립성을 높이는 계기가 됐다는 평가도 있습니다.",
    },
    {
      q: "이 딜 실패가 빅테크 M&A 전략에 어떤 영향을 미쳤나요?",
      a: "어도비-피그마 딜 실패는 빅테크가 잠재적 경쟁자를 조기에 인수하는 '킬러 인수(killer acquisition)' 전략에 대한 글로벌 규제 강화의 상징적 사례가 됐습니다. EU와 영국은 이 사건을 계기로 빅테크의 수평 합병 심사를 더욱 엄격하게 적용하고 있으며, 특히 인수 대상이 가장 가까운 경쟁자인 경우 승인 가능성이 크게 낮아졌습니다.",
    },
    {
      q: "어도비 주가는 이 딜로 어떤 영향을 받았나요?",
      a: "어도비는 2022년 9월 딜 발표 직후 주가가 약 17% 급락했습니다. 시장은 $200억이라는 높은 가격과 규제 불확실성을 부정적으로 평가했습니다. 2023년 12월 딜 해지 발표 후에는 오히려 주가가 반등했는데, 이는 $200억 과지급 리스크 해소와 $10억 위약금 부담이 주가 하락 위험보다 낫다는 시장 판단을 반영했습니다.",
    },
  ],
};

export default deal;
