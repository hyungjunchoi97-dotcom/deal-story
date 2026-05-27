/**
 * eBay / PayPal 분사
 * 행동주의가 만든 역대 최성공 스핀오프 — 2015년 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "ebay-paypal-spinoff",
  title: "eBay가 PayPal을 분사한 이유 — 행동주의 압박이 만든 역대 최성공 핀테크 스핀오프",
  subtitle: "칼 아이칸의 행동주의 압박 · eBay 주주 1주당 PayPal 1주 무상 배분 · 분사 후 PayPal 시총 $350B 최고치",
  category: "restructuring",
  industry: "핀테크 / e-커머스",
  country: "미국",
  announcedAt: "2014-09-30",
  closedAt: "2015-07-17",
  announcedDisplay: "2014년 9월",
  closedDisplay: "2015년 7월",
  readingMinutes: 10,
  tags: ["eBay", "PayPal", "spinoff", "Carl Icahn", "fintech", "activism", "PYPL", "e-commerce", "payments"],
  excerpt: "2015년 eBay가 PayPal을 분사한 것은 역사상 가장 성공적인 핀테크 스핀오프로 평가받는다. 2002년 $1.5B에 인수됐던 PayPal은 2015년 분사 시 시총 $46.6B, 2021년 최고점 $350B+를 기록했다. 칼 아이칸의 행동주의 압박이 촉발한 이 분리가 두 회사 모두에게 가치를 창출했다.",

  acquirer: { initials: "EBAY", bg: "bg-yellow-500", label: "eBay Inc." },
  target: { initials: "PYPL", bg: "bg-blue-600", label: "PayPal Holdings" },

  background: [
    "eBay는 2002년 PayPal을 $1.5B에 인수했다. 당시 PayPal은 eBay 플랫폼의 결제 인프라로 완벽하게 맞아 떨어졌다. 이후 10여 년간 PayPal은 eBay의 핵심 성장 엔진이 됐다. 그러나 2010년대에 들어서면서 PayPal의 비eBay 결제 비중이 높아졌고, 모바일 결제 혁명 속에서 PayPal이 독립된 핀테크 플랫폼으로 성장할 잠재력이 부각됐다.",
    "2014년 1월 행동주의 투자자 칼 아이칸(Carl Icahn)이 eBay 지분을 매입하며 PayPal 분사를 강력히 요구하기 시작했다. 아이칸의 논리는 명확했다 — '두 회사는 이미 서로 다른 성장 단계와 벨류에이션 논리를 갖고 있으며, 통합이 오히려 각자의 가치를 제한한다.' eBay 이사회와의 공개 논쟁이 벌어졌다.",
    "처음에는 분사를 거부하던 eBay CEO 존 도나호(John Donahoe)는 2014년 9월 30일 분사 계획을 발표했다. 두 회사의 전략적 연계성이 약화되고 있었고, PayPal의 독립된 성장 기회가 더 크다는 결론이었다. eBay 주주들은 보유한 eBay 주식 1주당 PayPal 주식 1주를 무상으로 받게 됐다.",
    "2015년 7월 17일 분사가 완료됐다. PayPal은 NASDAQ(PYPL)에 독립 상장됐고 분사 시 시총은 약 $46.6B였다. eBay 시총은 약 $34B였다. 분사 후 두 회사 합산 가치는 통합 상태보다 높았다 — 분리 이후 각자의 성장 전략을 자유롭게 추구할 수 있게 됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "분사 (주주 1주당 PayPal 1주 무상 배분)",
    acquirerName: "eBay Inc. (분사 주체)",
    targetName: "PayPal Holdings, Inc. (분사)",
    announcedDisplay: "2014년 9월",
    closedDisplay: "2015년 7월",
    country: "미국",
  },

  executiveSummary: [
    "eBay 주주 1주당 PayPal 주식 1주 무상 배분 — 세금 효율적 분사(Section 355)",
    "칼 아이칸의 행동주의 압박 — eBay-PayPal 통합 가치 희석 논리로 분사 촉발",
    "분사 당시 PayPal 시총 $46.6B, eBay $34B — 합산 $80B+",
    "분사 후 PayPal 폭발적 성장 — 2021년 최고 시총 $350B+ (분사가의 7.5배)",
    "eBay도 커머스 집중으로 회복 — 분사 후 각사 독립 전략 추구",
    "역대 최성공 핀테크 스핀오프 — 분사 이후 행동주의 + 스핀오프 조합의 교과서",
  ],

  industryOverview: {
    body: "2014년 디지털 결제 시장은 스마트폰 보급과 함께 폭발적으로 성장 중이었다. Square, Stripe, Venmo(PayPal 자회사) 등 신생 핀테크들이 시장을 재편했다. PayPal은 이미 eBay 외부 결제(비eBay 거래)가 전체의 30%+를 넘어섰고, 모바일 지갑·P2P 송금 시장에서 독자적 성장 기회가 열려 있었다.",
    metrics: [
      { label: "PayPal 활성 사용자 (2015)", value: "약 1억 6,900만 명", sub: "분사 시점" },
      { label: "PayPal 비eBay 결제 비중", value: "30%+", sub: "2014년 기준, 독립 성장 근거" },
      { label: "분사 당시 PayPal 시총", value: "약 $46.6B", sub: "2015년 7월" },
      { label: "PayPal 2021년 최고 시총", value: "$350B+", sub: "분사 후 7년 내 7.5배" },
    ],
    subBody: "핀테크 결제 시장은 독립 운영이 파트너십과 혁신에 유리했다. PayPal이 eBay 내에 있는 동안 Visa·Mastercard 등과의 파트너십 협상이 제한됐고, 경쟁 e-커머스 플랫폼(Amazon 등)에 PayPal을 제공하는 것도 어색했다. 독립 이후 이 모든 것이 가능해졌다.",
    players: [
      { name: "Square (Block)", role: "소상공인 결제 핀테크, PayPal의 직접 경쟁자" },
      { name: "Stripe", role: "개발자 친화적 결제 API, 스타트업 결제 1위" },
      { name: "Visa / Mastercard", role: "PayPal 독립 후 파트너십 가능해진 카드 네트워크" },
      { name: "칼 아이칸 (Carl Icahn)", role: "행동주의 투자자, 분사 촉매" },
    ],
  },

  companyOverview: {
    targetName: "PayPal Holdings, Inc.",
    body: "PayPal은 1998년 설립, 1999년 Confinity와 X.com(일론 머스크 설립)이 합병해 탄생했다. 2002년 eBay에 $1.5B에 인수됐고, 이후 eBay 플랫폼의 핵심 결제 인프라로 성장했다. 분사 시점 활성 사용자 약 1억 7천만 명, 연간 결제 처리액(TPV) $2,820억을 기록했다.",
    metrics: [
      { label: "설립", value: "1998년 / 1999년 합병", sub: "Confinity + X.com 합병" },
      { label: "eBay 피인수", value: "2002년 $1.5B", sub: "eBay 최대 인수 (당시)" },
      { label: "분사 시 활성 사용자", value: "약 1억 6,900만 명", sub: "2015년 7월" },
      { label: "분사 시 연간 TPV", value: "$2,820억", sub: "총 결제 처리금액" },
    ],
    financials: [
      { year: "FY2013", revenue: 6622, cogs: 2500, grossProfit: 4122, sga: 2800, operatingIncome: 867, ebitda: 1200 },
      { year: "FY2014", revenue: 7904, cogs: 2900, grossProfit: 5004, sga: 3300, operatingIncome: 891, ebitda: 1350 },
      { year: "FY2015", revenue: 9248, cogs: 3400, grossProfit: 5848, sga: 3700, operatingIncome: 1228, ebitda: 1700 },
    ],
    financialsNote: "단위: USD 백만(M). PayPal 분사 후 독립 공시 기준 (FY2015 포함).",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "거래 수익 (Transaction Revenue)", pct: 90, color: "bg-blue-600", amt: "약 $83억" },
      { name: "기타 (Other Value Added Services)", pct: 10, color: "bg-blue-400", amt: "약 $9억" },
    ],
  },

  dealStructure: {
    body: "eBay는 PayPal을 Section 355 면세 분사(Tax-Free Spinoff) 구조로 분리했다. eBay 주주들은 보유 eBay 주식 1주당 PayPal 주식 1주를 무상으로 수령했다. 면세 분사 구조 덕분에 eBay 또는 주주 수준에서 양도소득세가 발생하지 않았다. PayPal은 2015년 7월 NASDAQ(PYPL)에 독립 상장됐다.",
    preOwnership: {
      nodes: [
        { id: "ebay_parent", label: "eBay Inc.", sub: "NASDAQ 상장 (EBAY)", type: "acquirer" },
        { id: "paypal_sub", label: "PayPal (eBay 자회사)", sub: "eBay 100% 보유", type: "target" },
      ],
      edges: [
        { from: "ebay_parent", to: "paypal_sub", label: "100% 소유" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ebay_post", label: "eBay Inc.", sub: "커머스 집중 독립 상장사", type: "acquirer" },
        { id: "paypal_post", label: "PayPal Holdings", sub: "NASDAQ 독립 상장 (PYPL)", type: "target" },
      ],
      edges: [
        { from: "ebay_post", to: "paypal_post", label: "분사 완료 (무관계)" },
      ],
    },
    keyTerms: [
      { label: "분사 방식", value: "Section 355 면세 분사 (Tax-Free Spinoff)", accent: true },
      { label: "배분 비율", value: "eBay 1주당 PayPal 1주", accent: false },
      { label: "분사 당시 PayPal 시총", value: "약 $46.6B", accent: true },
      { label: "분사 당시 eBay 시총", value: "약 $34B", accent: false },
      { label: "완료일", value: "2015년 7월 17일", accent: false },
    ],
  },

  advisors: {
    body: "분사 과정에서 재무·법률·세무 자문사들이 참여했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "분사 주체 (eBay)",
        initials: "EBAY",
        bg: "bg-yellow-500",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "분사 구조 설계 및 시장 조성" },
          { firm: "Skadden Arps", role: "법률 자문", roleType: "legal", note: "분사 계약 및 Section 355 세무 구조" },
        ],
      },
      {
        side: "target",
        sideLabel: "분사 법인 (PayPal)",
        initials: "PYPL",
        bg: "bg-blue-600",
        advisors: [
          { firm: "Morgan Stanley", role: "재무 자문 (FA)", roleType: "financial", note: "PayPal 독립 상장 지원" },
          { firm: "Weil Gotshal", role: "법률 자문", roleType: "legal", note: "독립 법인 설립 및 상장 자문" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반입니다.",
  },

  valuation: {
    body: "분사 당시 PayPal은 FY2015 매출 약 $92억 대비 약 5배의 EV/Revenue 멀티플로 평가됐다. 분사 이후 PayPal의 독립 성장은 이 초기 밸류에이션을 훨씬 뛰어넘었다.",
    rows: [
      { item: "분사 당시 PayPal 시총", val: "$46.6B", note: "2015년 7월 독립 상장 시점", accent: true },
      { item: "FY2015 매출", val: "약 $92억", note: "분사 첫 해 연간 매출" },
      { item: "분사 당시 EV/매출", val: "약 5×", note: "핀테크 성장 프리미엄 반영" },
      { item: "eBay 원래 PayPal 인수가", val: "$1.5B (2002년)", note: "분사 시총 대비 31배 성장", accent: true },
      { item: "2021년 최고 시총", val: "$350B+", note: "분사 대비 7.5배 추가 성장", accent: true },
    ],
    disclaimer: "밸류에이션 수치는 공개 공시 및 업계 분석 자료 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "eBay의 분사 논리",
      initials: "EBAY",
      bg: "bg-yellow-500",
      points: [
        "각사 독립 전략 — 커머스(eBay)와 결제(PayPal)의 성장 전략이 분리됨",
        "밸류에이션 프리미엄 — 독립 핀테크 PayPal이 eBay 산하보다 높은 멀티플 적용",
        "파트너십 자유 — eBay 경쟁사(Amazon 등)도 PayPal 이용 가능해짐",
        "행동주의 압박 해소 — 아이칸의 요구에 응함으로써 기업 지배구조 이슈 해결",
        "주주 가치 극대화 — 분사 후 두 회사 합산 가치 > 통합 상태",
      ],
    },
    seller: {
      title: "PayPal 분사의 논리",
      initials: "PYPL",
      bg: "bg-blue-600",
      points: [
        "독립 핀테크 성장 — eBay 품에서 벗어나 Visa·Mastercard·은행과 자유롭게 파트너십",
        "M&A 자유 — 독립 상장 후 핀테크 기업 자체 인수 가능 (Braintree, Venmo 등)",
        "별도 IPO 밸류에이션 — 핀테크 멀티플 적용받아 더 높은 기업가치",
        "인재 유지 — 독립 회사로 스톡옵션·인센티브 설계 자유도 증가",
        "Amazon·Alibaba 파트너십 — eBay 경쟁 이해관계 없이 글로벌 결제 플랫폼 확장",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "분사 후 PayPal은 폭발적으로 성장했다. Venmo P2P 결제, 기업 결제(Braintree), 핀테크 중소기업 대출, BNPL(Buy Now Pay Later) 등으로 사업을 확장했다. 2021년 팬데믹 비대면 결제 수요로 최고 시총 $350B+를 기록했다. 이후 금리 인상과 경쟁 심화로 조정을 받았으나 2024년 기준 $70B+ 시총을 유지한다. eBay도 커머스에 집중해 스텁허브(StubHub) 분사 등 구조조정을 이어갔다.",
    overallVerdict: "역대 최성공 핀테크 스핀오프 — 두 회사 모두에게 가치 창출",
    positives: [
      "PayPal 시총 $46.6B → $350B+ (7.5배) — 역사상 최고 ROI 스핀오프 중 하나",
      "Venmo 인수·성장 — P2P 결제 시장 지배",
      "eBay-PayPal 상호 불간섭 → 두 회사 모두 자유로운 파트너십 확대",
      "행동주의 압박 → 주주 가치 창출의 교과서 사례",
      "면세 분사 구조 → 주주 세금 부담 없이 두 회사 독립 주식 보유",
    ],
    risks: [
      "2022~2023년 PayPal 주가 급락 — 금리 인상·성장 둔화로 시총 80% 이상 하락",
      "Apple Pay·Google Pay 등 빅테크 결제 경쟁",
      "eBay 성장 정체 — 아마존·쇼피파이에 밀려 시장 점유율 감소",
      "Venmo 수익화 지연 — 활성 사용자 대비 수익 전환 어려움",
    ],
    editorNote: "eBay-PayPal 분사는 '행동주의 투자자 + 스핀오프'의 가장 성공적인 조합으로 기록됩니다. 칼 아이칸의 분사 요구는 처음에는 이사회의 반발을 샀지만 결과적으로 주주들에게 수십 배의 가치를 돌려줬습니다. 핵심 교훈: 한 회사 안에 전혀 다른 성장 논리를 가진 두 사업이 있다면, 분리가 통합보다 더 큰 가치를 만들 수 있습니다.",
  },

  tombstone: {
    acquirerInitials: "EBAY",
    acquirerBg: "bg-yellow-500",
    targetInitials: "PYPL",
    targetBg: "bg-blue-600",
    acquirerName: "eBay Inc.",
    targetName: "PayPal Holdings, Inc.",
    dealTitle: "Section 355 면세 분사 (Tax-Free Spinoff)",
    dealSize: "시총 $46.6B (분사 시점)",
    dealSizeUSD: "USD 46.6B market cap at spinoff",
    evEbitda: "약 27× (분사 시점)",
    closeDate: "Jul 2015",
  },

  sources: [
    { id: 1, text: "eBay Press Release — eBay Inc. Plans to Separate PayPal into Independent Publicly Traded Company (September 2014)", url: "https://investor.ebay.com" },
    { id: 2, text: "PayPal Holdings Form 10 Registration Statement (2015)", url: "https://www.sec.gov" },
    { id: 3, text: "eBay Annual Report FY2014 — PayPal Separation Decision and Process" },
    { id: 4, text: "Bloomberg — Carl Icahn Pushes eBay to Spin Off PayPal (January 2014)" },
    { id: 5, text: "The Wall Street Journal — eBay Agrees to Spin Off PayPal (September 2014)" },
    { id: 6, text: "CNBC — PayPal Begins Trading as Independent Company (July 2015)" },
    { id: 7, text: "Forbes — How PayPal Became a $350 Billion Company After Being Spun Off from eBay" },
    { id: 8, text: "PayPal FY2021 Annual Report — Business Performance and Market Position", url: "https://investor.paypal.com" },
  ],

  seo: {
    title: "eBay PayPal 분사 완전 분석 — 역대 최성공 핀테크 스핀오프의 해부",
    description: "eBay의 PayPal 분사 완전 분석. 칼 아이칸 행동주의 압박, Section 355 면세 분사 구조, 분사 후 7.5배 가치 성장, 스핀오프 교훈까지 심층 해부.",
    keywords: ["eBay PayPal 분사", "PayPal spinoff", "칼 아이칸 행동주의", "핀테크 스핀오프", "Section 355 면세 분사", "PayPal 상장", "PYPL 스핀오프"],
  },

  concepts: [
    { term: "스핀오프 (Spin-off)", href: "/deal-101/spinoff", description: "자회사를 독립 상장사로 분리해 주주에게 주식을 무상 배분 — eBay-PayPal 분사의 구조" },
    { term: "경쟁 해자 (Competitive Moat)", href: "/deal-101/competitive-moat", description: "PayPal의 네트워크 효과와 브랜드 해자 — 독립 후 더 강화된 방어력" },
    { term: "플랫폼 전략 (Platform Strategy)", href: "/deal-101/platform-strategy", description: "결제 플랫폼이 e-커머스 플랫폼으로부터 독립해 더 넓은 생태계로 확장" },
    { term: "전략적 M&A (Strategic M&A)", href: "/deal-101/strategic-ma", description: "분리도 M&A만큼 전략적 — 통합보다 분리가 더 큰 가치를 만드는 경우" },
  ],

  restructuringOverview: {
    body: "eBay-PayPal 분사는 '역사상 가장 성공적인 스핀오프'로 불립니다. 한 지붕 아래 있던 커머스와 결제 두 플랫폼이 왜 갈라서야 했고, 어떻게 갈라섰으며, 그 결과 누가 얼마나 이익을 얻었는지 — Section 355 면세 분사의 교과서적 사례를 분석합니다.",
    trigger: "행동주의 투자자 칼 아이칸 + PayPal의 eBay 의존도 급감",
    triggerDetail: "2014년 칼 아이칸이 eBay 지분 0.82%를 매집하고 PayPal 즉각 분사를 공개 요구했습니다. 당시 PayPal은 eBay 거래에서 처리하는 비중이 2009년 52%에서 2014년 30% 이하로 떨어지고 있었습니다 — eBay 없이도 독립적으로 성장하고 있었다는 뜻입니다. 반면 PayPal을 묶어두면 경쟁 커머스 플랫폼(아마존, 알리바바)과 직접 파트너십을 맺기 어려워 성장에 걸림돌이 됐습니다. 이사회는 1년간 저항하다 2015년 1월 분사 계획을 공식 발표했습니다.",
    method: "tax-free-spinoff",
    methodLabel: "Section 355 면세 분사",
    whyThisMethod: "PayPal은 이미 독립 사업으로서 완전한 운영 능력을 갖추고 있었기 때문에 현금 매각보다 주주에게 직접 배분하는 스핀오프가 최적이었습니다. Section 355 요건(5년 이상 활성 사업, 사업 목적 존재, 지배권 이전 없음)을 모두 충족했고, 이를 통해 eBay와 PayPal 주주들 모두 세금 없이 두 독립 기업의 주식을 보유할 수 있었습니다.",
    methodVsAlternatives: [
      {
        method: "현금 매각 (Trade Sale)",
        reason: "Google, Apple 등 잠재 인수자들이 관심을 보였으나, 세금 부담($50억+ 추정)과 PayPal 브랜드 독립성 상실 위험이 있었습니다. 결제 시장에서의 전략 가치 포기를 의미하기도 했습니다.",
      },
      {
        method: "카브아웃 IPO (Partial IPO)",
        reason: "eBay가 PayPal 지분 일부를 공개 상장하는 방식은 지배권을 유지할 수 있지만, PayPal의 독립 경영 능력과 파트너십 확장을 제약합니다. 칼 아이칸의 요구를 충족하지 못했습니다.",
      },
      {
        method: "현 구조 유지",
        reason: "PayPal이 아마존·알리바바 등 eBay 경쟁사와 제휴를 맺으려면 독립이 필수였습니다. 통합 구조에서는 이해 충돌로 이런 전략적 파트너십이 불가능했습니다.",
      },
    ],
    theoreticalInsights: [
      {
        concept: "플랫폼 인접 기업 간 갈등 (Platform Conflict of Interest)",
        explanation: "두 플랫폼이 한 기업 내에 있을 때, 한쪽의 파트너십 확장이 다른 쪽의 경쟁 상황을 악화시킬 수 있습니다. 결제 플랫폼이 커머스 플랫폼에 종속되면 범용 결제 인프라로 성장할 수 없습니다.",
        howApplied: "eBay 산하 PayPal은 eBay 경쟁사 플랫폼 결제를 강하게 추진하기 어려웠습니다. 독립 후 PayPal은 아마존, 알리바바, 우버 등 eBay 경쟁사들과 즉시 파트너십을 체결하며 TAM(총 잠재 시장)을 폭발적으로 확장했습니다.",
      },
      {
        concept: "섬머 오브 러브 (Section 355 Tax-Free Spinoff)",
        explanation: "미국 세법 Section 355는 일정 요건을 충족하는 법인 분리를 세금 없이 허용합니다. 핵심 요건: ① 5년 이상 활성 사업 영위, ② 사업 목적(Business Purpose), ③ 지배권 이전 의도 없음. 이를 통해 모회사·주주 모두 과세 없이 분리 가능합니다.",
        howApplied: "eBay는 PayPal을 2002년 인수(13년 보유)했고, 결제 사업의 독자 성장을 위한 명확한 사업 목적이 있었으며, 지배권 이전 없이 기존 주주에게 1:1 비율로 배분했습니다. Section 355 요건을 완벽하게 충족한 교과서적 사례입니다.",
      },
      {
        concept: "역분사 프리미엄 (Reverse Conglomerate Premium)",
        explanation: "분리 후 두 순수 플레이어의 합산 시총이 통합 상태보다 높아지는 현상입니다. 각 기업이 해당 섹터에서 최적 멀티플을 받게 되며, 투자자들도 자신의 포트폴리오 전략에 맞게 선택적으로 보유할 수 있게 됩니다.",
        howApplied: "분사 직전 eBay+PayPal 합산 시총 약 $680억이었으나, 분사 직후 두 회사 합산은 $900억+를 기록했습니다. PayPal은 핀테크 플랫폼 멀티플을 받기 시작했고 2021년에는 시총 $3,500억을 넘었습니다.",
      },
    ],
    executionSteps: [
      {
        phase: "Phase 1",
        date: "2014년 1월",
        action: "칼 아이칸 공개 캠페인 시작",
        detail: "칼 아이칸이 eBay 지분 매집 후 PayPal 즉각 분사를 요구하는 서신을 이사회에 공개 발송. eBay 경영진은 시너지를 이유로 거부했으나 주주 압력이 지속됐습니다.",
        financialNote: "아이칸 캠페인 발표 후 eBay 주가 +5%",
      },
      {
        phase: "Phase 2",
        date: "2015년 1월",
        action: "분사 공식 발표 (CEO 존 도나호)",
        detail: "eBay 이사회가 PayPal 100% 스핀오프를 공식 발표. 분리 비율: eBay 주주 1주당 PayPal 1주 배분. Section 355 면세 구조 확정. 분사 완료 목표: 2015년 하반기.",
        financialNote: "발표 당일 eBay 주가 +7.2%",
      },
      {
        phase: "Phase 3",
        date: "2015년 7월 17일",
        action: "PayPal 나스닥 독립 상장 (PYPL)",
        detail: "PayPal이 나스닥에 단독 상장. 시총 $460억으로 출발. eBay 주주 1주당 PayPal 1주를 세금 없이 수령. 두 회사는 5년간 운영 서비스 계약을 유지하되 독자 파트너십을 즉시 시작할 수 있게 됐습니다.",
        financialNote: "상장 첫날 시총 $460억 (eBay 2002년 인수가 $15억의 31배)",
      },
    ],
    stakeholders: [
      {
        name: "eBay 주주",
        icon: "🛒",
        impact: "positive",
        summary: "두 독립 기업 주식 동시 확보",
        detail: "eBay 1주당 PayPal 1주를 세금 없이 수령. PayPal이 폭발적으로 성장하며 장기 보유자는 대규모 이익을 얻었습니다. eBay 자체도 커머스에 집중하며 StubHub, Classifieds 추가 구조조정을 진행했습니다.",
        metric: "합산 시총 $680억 → $900억+ (분사 직후)",
      },
      {
        name: "PayPal 경영진 & 직원",
        icon: "💳",
        impact: "positive",
        summary: "독립 기업 주식 인센티브 확보",
        detail: "독립 PayPal 주식 스톡옵션을 받게 돼 동기부여가 극대화됐습니다. 댄 슐만이 초대 독립 CEO로 취임하며 핀테크 전문가 영입을 가속화했습니다.",
        metric: "PayPal PYPL 5년 후 +650%",
      },
      {
        name: "칼 아이칸 (행동주의 주주)",
        icon: "🦅",
        impact: "positive",
        summary: "캠페인 2년 만에 목표 달성",
        detail: "2014년 시작한 분사 캠페인이 2015년 완전히 관철됐습니다. 아이칸은 분사 전후 지분을 매각하며 수억 달러의 이익을 실현했습니다.",
        metric: "캠페인 기간 eBay 주가 +25%+",
      },
      {
        name: "eBay 파트너 커머스 기업들",
        icon: "🤝",
        impact: "mixed",
        summary: "결제 파트너 다변화 선택권 확보",
        detail: "PayPal 독립 후 eBay는 Adyen과 새 결제 계약을 체결하며 PayPal 의존도를 낮췄습니다. 소규모 판매자들은 전환 비용이 발생했으나, 경쟁 결제 옵션이 생기며 수수료 협상력이 높아졌습니다.",
      },
      {
        name: "소비자 (결제 이용자)",
        icon: "👥",
        impact: "positive",
        summary: "PayPal 적용 범위 폭발적 확대",
        detail: "독립 후 PayPal이 아마존, Airbnb, Uber 등 대형 플랫폼과 빠르게 파트너십을 맺어 사용 가능한 곳이 폭발적으로 늘었습니다. Venmo, Braintree 등 인수합병도 가속됐습니다.",
        metric: "활성 계정 1.6억 → 4.2억 (분사 후 5년)",
      },
    ],
    beforeAfter: [
      {
        metric: "PayPal 시가총액",
        before: "$460억 (분사 시점)",
        after: "$3,500억 (2021년 최고)",
        change: "+650%",
        isPositive: true,
      },
      {
        metric: "PayPal 활성 계정",
        before: "1.6억 명",
        after: "4.2억 명 (5년 후)",
        change: "+162%",
        isPositive: true,
      },
      {
        metric: "PayPal 결제 처리량(TPV)",
        before: "$2,350억",
        after: "$1조+ (2021)",
        change: "+326%",
        isPositive: true,
      },
      {
        metric: "eBay 밸류에이션 멀티플",
        before: "핀테크+커머스 혼재",
        after: "순수 커머스 P/E",
        change: "섹터 분리로 명확화",
        isPositive: true,
      },
      {
        metric: "PayPal eBay 의존도",
        before: "30% (2015)",
        after: "3% (2020)",
        change: "-27%p (다각화 성공)",
        isPositive: true,
      },
      {
        metric: "eBay 주가 (장기)",
        before: "$28 (분사 시점)",
        after: "$70대 (2021)",
        change: "+150%",
        isPositive: true,
      },
    ],
    marketImpact: {
      announcementReturn: "발표 당일 eBay +7.2%",
      shortTermReturn: "분사 6개월 후 합산 +15%",
      longTermReturn: "PayPal 독립 5년 후 +650%",
      contextNote: "eBay 2002년 PayPal 인수가 $15억 → 분사 시 시총 $460억 (31배), 2021년 최고점 $3,500억 (230배)",
    },
  },

  faq: [
    {
      q: "칼 아이칸은 왜 PayPal 분사를 요구했나요?",
      a: "아이칸의 핵심 논리는 '콘글로머리트 디스카운트' 해소였습니다. PayPal은 빠르게 성장하는 핀테크 기업이고, eBay는 성숙한 e-커머스 플랫폼입니다. 두 사업을 합치면 시장이 어느 쪽 멀티플을 적용해야 할지 모호해져 두 사업 모두 저평가됩니다. 분리하면 PayPal은 높은 핀테크 멀티플을, eBay는 e-커머스 멀티플을 각각 받을 수 있습니다.",
    },
    {
      q: "Section 355 면세 분사란 무엇인가요?",
      a: "미국 세법 Section 355에 따른 분사는 특정 요건을 충족하면 모회사와 주주 모두에게 양도소득세가 발생하지 않는 구조입니다. eBay는 PayPal 주식을 eBay 주주들에게 무상 배분하면서 세금을 내지 않았고, 주주들도 수령한 PayPal 주식에 즉각적 세금이 없었습니다. 이는 자회사를 매각할 때 발생하는 세금 부담을 피할 수 있는 구조입니다.",
    },
    {
      q: "분사 후 PayPal은 어떻게 성장했나요?",
      a: "분사 직후 시총 $46.6B에서 2021년 팬데믹 비대면 결제 붐에 $350B+까지 성장했습니다. 핵심 성장 동력은 Venmo P2P 결제 성장, 기업 결제(Braintree), 국제 결제 확장, BNPL 진출이었습니다. 독립 후 Visa·Mastercard와 대규모 파트너십도 체결했는데 — eBay 자회사 시절에는 이해충돌로 어려웠던 것들입니다.",
    },
    {
      q: "eBay는 분사 후 어떻게 됐나요?",
      a: "eBay는 커머스에 집중해 스텁허브(StubHub) 분사, 클래시파이드 광고 사업 매각 등 추가 구조조정을 이어갔습니다. 그러나 아마존의 압도적 성장과 쇼피파이 등 신규 플랫폼의 부상으로 eBay의 상대적 지위는 약화됐습니다. 분사 후 eBay 시총은 장기적으로 크게 성장하지 못했지만, PayPal 없는 순수 e-커머스 플랫폼으로의 포지셔닝을 명확히 했습니다.",
    },
    {
      q: "이 분사가 역사상 최성공 스핀오프로 불리는 이유는?",
      a: "eBay가 2002년 PayPal을 인수했을 때 가격이 $1.5B이었고, 2015년 분사 당시 PayPal 시총은 $46.6B(31배)이었으며, 2021년 최고점에서는 $350B+(230배+)에 달했습니다. 분사 자체도 두 회사 합산 가치를 통합 상태보다 높였고, 주주들은 두 독립 회사의 주식을 각각 보유하게 됐습니다. 투자 수익, 구조적 가치 창출, 업계 영향력 모든 면에서 최고 수준의 스핀오프입니다.",
    },
  ],
};

export default deal;
