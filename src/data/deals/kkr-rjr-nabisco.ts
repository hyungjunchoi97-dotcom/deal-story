/**
 * KKR × RJR Nabisco 레버리지 바이아웃
 * 역대 최대 LBO — $31.1B, 1989년 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kkr-rjr-nabisco",
  title: "KKR은 왜 $311억에 RJR Nabisco를 샀나 — 역대 최대 LBO의 탄생",
  subtitle: "정크본드 혁명 · 경쟁 입찰 전쟁 · '문 앞의 야만인들'이 바꾼 PE 역사",
  category: "ma",
  industry: "담배 / 식품 복합기업 / PE 차입 인수",
  country: "미국",
  announcedAt: "1988-10-20",
  closedAt: "1989-02-09",
  announcedDisplay: "1988년 10월",
  closedDisplay: "1989년 2월",
  readingMinutes: 13,
  tags: ["KKR", "RJR Nabisco", "LBO", "레버리지 바이아웃", "정크본드", "Michael Milken", "Drexel Burnham Lambert", "PE", "담배", "식품", "Barbarians at the Gate"],
  excerpt:
    "KKR이 RJR Nabisco를 $31.1B(약 35조원)에 인수한 1988년 역대 최대 LBO. CEO F. Ross Johnson의 MBO 시도가 촉발한 경쟁 입찰 전쟁, Michael Milken의 정크본드로 완성된 레버리지 구조, 그리고 월스트리트의 탐욕과 야망을 담은 'Barbarians at the Gate' — PE 역사를 바꾼 한 편의 드라마.",

  acquirer: { initials: "KKR", bg: "bg-gray-800", label: "콜버그 크래비스 로버츠 (KKR)" },
  target: { initials: "RJR", bg: "bg-amber-700", label: "RJR Nabisco" },

  background: [
    "1988년 10월, RJR Nabisco CEO F. Ross Johnson은 경영진 주도의 MBO(Management Buyout)를 통해 회사를 주당 $75, 총 $17.6B에 인수하겠다고 이사회에 제안했다. R.J. Reynolds(Camel, Winston 담배)와 Nabisco(Oreo, Ritz)가 1985년 합병해 탄생한 RJR Nabisco는 연 매출 $16B 이상의 미국 최대 복합기업 중 하나였다. Johnson의 제안은 이사회가 경쟁 입찰을 허용하면서 순식간에 월스트리트 역사상 가장 치열한 기업 쟁탈전으로 번졌다.",
    "경쟁은 세 개의 진영으로 좁혀졌다. Johnson·Shearson Lehman 연합, PE 거물 KKR(콜버그 크래비스 로버츠), 그리고 Forstmann Little이 가격 전쟁을 벌였다. KKR은 Michael Milken이 이끄는 Drexel Burnham Lambert의 정크본드(고수익 채권) 발행 능력을 통해 막대한 자금을 조달할 수 있었다. 정크본드 혁명이 LBO를 가능하게 한 시대 — KKR은 최종 주당 $109, 총 $31.1B을 제시하며 경쟁자들을 모두 누르고 승리했다.",
    "딜 구조는 PE 역사상 가장 복잡한 레버리지 구조 중 하나였다. 에쿼티(자기자본)는 약 $1.5B에 불과했고, 나머지 $29.6B는 차입으로 조달됐다. 정크본드, 은행 신디케이트 대출, 브리지 론, 메자닌 등 7개 레이어의 부채 구조가 쌓였다. KKR이 지불한 EV/EBITDA는 약 12.4배 — 1988년 당시 기준으로는 전례 없는 배수였다.",
    "인수 완료 후 KKR은 RJR Nabisco의 자산 매각과 부채 상환을 병행했다. 1991년 RJR Nabisco 주식 일부를 공모 재상장($4.1B 규모)해 초기 부채를 줄였고, Nabisco 식품 사업부의 분리도 검토됐다. 담배 소송 리스크가 예상보다 훨씬 컸고, 높은 레버리지가 경영 유연성을 제한했다. 그러나 KKR은 결국 상당한 수익을 실현했다. 이 딜은 Bryan Burrough·John Helyar의 책 《Barbarians at the Gate》(1989)와 이를 원작으로 한 HBO 영화로 PE 역사에 영원히 기록됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "$31.1B (약 35조원)",
    acquirerName: "콜버그 크래비스 로버츠 (Kohlberg Kravis Roberts & Co.)",
    targetName: "RJR Nabisco Holdings Corp.",
    announcedDisplay: "1988년 10월",
    closedDisplay: "1989년 2월",
    country: "미국",
  },

  executiveSummary: [
    "1988년 역대 최대 LBO — KKR의 $31.1B 차입 인수, 주당 $109 (MBO 제안가 $75 대비 45% 상승)",
    "핵심 논리: CEO F. Ross Johnson의 MBO가 촉발한 경쟁 입찰 전쟁에서 KKR이 정크본드로 승리",
    "7개 레이어 레버리지 구조 — 에쿼티 약 $1.5B, 차입 $29.6B의 초고레버리지 LBO",
    "Michael Milken·Drexel Burnham Lambert의 정크본드 혁명이 이 딜을 가능하게 한 시대적 배경",
    "인수 후 자산 매각·부채 상환·재상장을 통해 KKR 수익 실현, 담배 소송 리스크는 예상 초과",
    "《Barbarians at the Gate》로 대중에 알려진 PE 역사의 이정표 딜",
  ],

  industryOverview: {
    body: "1980년대 미국 PE 시장은 레버리지 바이아웃(LBO)의 황금기였다. Michael Milken이 이끄는 Drexel Burnham Lambert가 정크본드 시장을 개척하면서 투자등급 이하 기업도 대규모 자금을 조달할 수 있게 됐고, 이는 대형 상장기업의 PE 인수를 현실화했다. 복합기업 할인(Conglomerate Discount)이 만연한 시대에 PE는 '저평가 복합기업을 분해해 가치를 실현한다'는 논리로 거대 기업들을 타겟으로 삼았다. RJR Nabisco는 담배·식품이라는 전혀 다른 두 사업을 묶은 전형적인 복합기업이었다.",
    metrics: [
      { label: "딜 규모 (총 EV)", value: "$31.1B", sub: "1988년 기준 역대 최대 LBO" },
      { label: "인수 배수 (EV/EBITDA)", value: "약 12.4×", sub: "당시 전례 없는 고배수" },
      { label: "레버리지 비율", value: "에쿼티 ~5%", sub: "$1.5B 에쿼티 / $29.6B 차입" },
      { label: "RJR Nabisco 연 매출", value: "약 $17B", sub: "1988년 기준" },
    ],
    subBody: "담배 사업부(R.J. Reynolds)는 Camel, Winston 등 미국 최대 담배 브랜드를 보유했고, Nabisco는 Oreo, Ritz 등 미국인의 식탁을 점령한 식품 브랜드를 보유했다. 두 사업의 현금흐름은 강력했지만, 복합기업 구조로 인해 주가는 내재가치를 반영하지 못한다는 평가가 많았다. 이것이 LBO의 논리적 근거였다.",
    players: [
      { name: "KKR", role: "최종 인수자 — 정크본드 기반 $31.1B LBO 완성" },
      { name: "F. Ross Johnson (CEO)", role: "MBO 시도자 — $17.6B 제안, 경쟁 입찰 촉발" },
      { name: "Drexel Burnham Lambert / Michael Milken", role: "정크본드 발행 총괄 — LBO 자금 조달의 핵심" },
      { name: "Forstmann Little", role: "경쟁 입찰자 — 최종 탈락" },
      { name: "Shearson Lehman", role: "Johnson 측 재무 자문 — 경쟁 탈락" },
    ],
  },

  companyOverview: {
    targetName: "RJR Nabisco Holdings Corp.",
    body: "RJR Nabisco는 1985년 R.J. Reynolds Tobacco Company와 Nabisco Brands가 합병해 탄생한 미국 최대 복합기업 중 하나다. R.J. Reynolds는 Camel, Winston, Salem 등 미국 최대 담배 브랜드를 보유했고, Nabisco는 Oreo, Ritz, Chips Ahoy!, Planters 등 미국 식탁을 대표하는 식품 브랜드를 보유했다. 합병 당시의 목적은 두 사업의 현금흐름을 결합해 안정적인 수익 구조를 만드는 것이었으나, 투자자들은 이질적인 두 사업의 복합기업 할인을 적용했다. 인수 직전 연 매출은 $17B에 육박했으며 EBITDA는 약 $2.5B 수준이었다.",
    metrics: [
      { label: "1988년 연 매출", value: "약 $17B", sub: "담배+식품 복합기업" },
      { label: "EBITDA (1988년)", value: "약 $2.5B", sub: "강력한 현금흐름 사업" },
      { label: "직원 수", value: "약 14만 명", sub: "전 세계 기준" },
      { label: "합병 연도", value: "1985년", sub: "R.J. Reynolds + Nabisco Brands" },
    ],
    financials: [
      { year: "1986", revenue: 15102, cogs: 8500, grossProfit: 6602, sga: 4000, operatingIncome: 1800, ebitda: 2200 },
      { year: "1987", revenue: 15766, cogs: 8800, grossProfit: 6966, sga: 4100, operatingIncome: 1900, ebitda: 2300 },
      { year: "1988", revenue: 16956, cogs: 9200, grossProfit: 7756, sga: 4200, operatingIncome: 2000, ebitda: 2500 },
    ],
    financialsNote: "단위: USD 백만(M). RJR Nabisco 연간 실적 추정치 기준.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "담배 (R.J. Reynolds)", pct: 55, color: "bg-amber-700", amt: "약 $9.3B" },
      { name: "식품 (Nabisco)", pct: 45, color: "bg-amber-400", amt: "약 $7.6B" },
    ],
  },

  dealStructure: {
    body: "KKR은 에쿼티 약 $1.5B, 정크본드 약 $5B, 은행 신디케이트 대출 약 $13B, 브리지 론 및 기타 차입 약 $12B 등 총 $31.1B을 조달했다. 에쿼티 비중은 전체의 약 5%에 불과한 초고레버리지 구조였다. Drexel Burnham Lambert가 정크본드 발행을 총괄하고, 여러 은행이 신디케이트를 구성해 대출을 제공했다. 딜 완료 후 RJR Nabisco는 비상장으로 전환됐으며, KKR은 이후 자산 매각과 재상장을 통해 부채를 상환하고 투자 수익을 실현했다.",
    preOwnership: {
      nodes: [
        { id: "rjr_public", label: "RJR Nabisco", sub: "NYSE 상장 복합기업", type: "public" },
        { id: "kkr_fund", label: "KKR", sub: "프라이빗 에쿼티 펀드", type: "acquirer" },
      ],
      edges: [
        { from: "rjr_public", to: "kkr_fund", label: "독립 상장사" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "kkr_parent", label: "KKR", sub: "PE 펀드 + 정크본드 투자자", type: "acquirer" },
        { id: "rjr_sub", label: "RJR Nabisco Holdings", sub: "비상장 전환 완전 자회사", type: "target" },
        { id: "rjr_tobacco", label: "R.J. Reynolds Tobacco", sub: "담배 사업부", type: "entity" },
        { id: "nabisco", label: "Nabisco", sub: "식품 사업부", type: "entity" },
      ],
      edges: [
        { from: "kkr_parent", to: "rjr_sub", label: "100%" },
        { from: "rjr_sub", to: "rjr_tobacco", label: "자회사" },
        { from: "rjr_sub", to: "nabisco", label: "자회사" },
      ],
    },
    keyTerms: [
      { label: "딜 규모 (총 EV)", value: "$31.1B (약 35조원)", accent: true },
      { label: "인수 주가", value: "주당 $109 현금", accent: false },
      { label: "인수 프리미엄", value: "MBO 제안가 $75 대비 45%↑", accent: true },
      { label: "거래 형태", value: "차입 인수 (Leveraged Buyout, LBO)", accent: false },
      { label: "에쿼티 / 차입 비율", value: "~5% / ~95%", accent: true },
      { label: "EV / EBITDA", value: "약 12.4×", accent: false },
      { label: "거래 완료일", value: "1989년 2월 9일", accent: false },
      { label: "정크본드 주선", value: "Drexel Burnham Lambert (Michael Milken)", accent: false },
    ],
  },

  advisors: {
    body: "이 딜에는 1980년대 월스트리트 최정상 IB들이 각 진영에 포진했다. KKR 측은 Drexel Burnham Lambert의 정크본드 발행 능력이 핵심이었고, Johnson 측은 Shearson Lehman이 자문했다. 딜의 복잡성과 경쟁 입찰 구조로 인해 양측 모두 수 억 달러의 자문 수수료가 발생했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (KKR)",
        initials: "KKR",
        bg: "bg-gray-800",
        advisors: [
          { firm: "Drexel Burnham Lambert", role: "정크본드 주선 (FA)", roleType: "financial", note: "Michael Milken 총괄, $5B 정크본드 발행 — 딜의 핵심 자금 조달원" },
          { firm: "Merrill Lynch", role: "재무 자문 (FA)", roleType: "financial", note: "공동 재무 자문 및 은행 신디케이트 구성" },
          { firm: "Simpson Thacher & Bartlett", role: "법률 자문", roleType: "legal", note: "M&A 계약 및 차입 구조 법률 총괄" },
        ],
      },
      {
        side: "target",
        sideLabel: "MBO측 (F. Ross Johnson / 이사회)",
        initials: "RJR",
        bg: "bg-amber-700",
        advisors: [
          { firm: "Shearson Lehman Hutton", role: "재무 자문 (FA)", roleType: "financial", note: "Johnson CEO MBO 제안 재무 자문 총괄" },
          { firm: "Salomon Brothers", role: "재무 자문 (FA)", roleType: "financial", note: "이사회 독립 재무 자문 (Fairness Opinion)" },
          { firm: "Skadden, Arps", role: "법률 자문", roleType: "legal", note: "이사회 M&A 법률 자문" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 역사적 기록 기반입니다.",
  },

  valuation: {
    body: "KKR은 RJR Nabisco에 1988년 EBITDA 약 $2.5B 대비 12.4배의 EV/EBITDA 멀티플을 지불했다. 당시 S&P 500 평균 EV/EBITDA의 두 배에 가까운 수준으로, 경쟁 입찰이 가격을 높인 결과였다. LBO 분석의 핵심은 인수 후 현금흐름으로 부채를 상환할 수 있는가였다 — RJR Nabisco의 강력한 담배·식품 현금흐름이 그 근거였다. KKR은 자산 매각(비핵심 사업)과 재상장을 통해 Exit 전략을 구상했다.",
    rows: [
      { item: "딜 EV", val: "$31.1B", note: "총 인수 대금 (주당 $109 × 발행 주식 수)", accent: true },
      { item: "인수 주가", val: "주당 $109 현금", note: "MBO 최초 제안가 $75 대비 45% 프리미엄" },
      { item: "인수 프리미엄 (vs MBO)", val: "약 45%", note: "경쟁 입찰로 가격 상승", accent: true },
      { item: "1988년 EBITDA", val: "약 $2.5B", note: "담배+식품 복합기업 EBITDA" },
      { item: "EV / EBITDA", val: "약 12.4×", note: "당시 역대 최고 LBO 배수 수준", accent: true },
      { item: "에쿼티 투입", val: "약 $1.5B", note: "전체 딜의 약 5%" },
      { item: "차입금 (정크본드+대출)", val: "약 $29.6B", note: "7개 레이어 부채 구조" },
      { item: "레버리지 비율", val: "약 20:1 (부채:에쿼티)", note: "역대 최고 수준의 차입 비율", accent: true },
    ],
    disclaimer: "밸류에이션 수치는 공개 보도 및 역사적 기록 기반 추정치입니다.",
  },

  rationale: {
    buyer: {
      title: "KKR 인수 논리",
      initials: "KKR",
      bg: "bg-gray-800",
      points: [
        "복합기업 할인 해소 — 담배·식품 두 사업을 분리해 각각의 적정 가치를 실현",
        "강력한 현금흐름 — Camel·Winston 담배와 Oreo·Ritz 식품의 안정적 EBITDA로 차입 상환 가능",
        "자산 매각 전략 — 비핵심 자산 매각으로 부채 조기 상환, 레버리지 축소",
        "정크본드 조달 가능성 — Drexel Burnham Lambert·Michael Milken과의 파트너십으로 $30B 자금 조달",
        "경쟁 입찰 승리 — MBO 저지하고 이사회·주주의 신뢰 확보, 최고가 제시",
      ],
    },
    seller: {
      title: "이사회 매각 논리 (주주 이익 극대화)",
      initials: "RJR",
      bg: "bg-amber-700",
      points: [
        "주당 $109 — 시장 주가 대비 대폭 프리미엄, 주주 가치 극대화",
        "MBO보다 높은 가격 — CEO Johnson의 $75보다 45% 높은 가격 확보",
        "공개 경쟁 입찰 — 가장 높은 가격을 제시한 KKR에 매각하는 수탁자 의무 이행",
        "복합기업 구조 한계 인정 — 복합기업 할인 해소의 최선책으로 PE 인수 선택",
        "단기 주주 가치 실현 — 장기 독립 경영 vs 확실한 프리미엄 실현 중 후자 선택",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "1995-12",
    body: "KKR은 1991년 RJR Nabisco 주식 일부를 공모 재상장($4.1B 규모)하고, 이후에도 지분을 단계적으로 매각했다. Nabisco 식품 사업부는 별도로 상장됐고, 담배 사업부(R.J. Reynolds Tobacco)는 1999년 RJR Nabisco로부터 분리됐다. KKR은 최종적으로 상당한 수익을 실현했으나 초기 기대치보다는 낮은 것으로 평가됐다. 담배 소송 리스크가 예상보다 훨씬 컸고, 높은 레버리지로 인한 이자 비용이 경영 유연성을 크게 제한했다. 이 딜은 LBO 황금기의 정점이자 종언을 알리는 신호이기도 했다 — 1989년 이후 Drexel Burnham Lambert는 파산(1990)하고 정크본드 시장도 냉각됐다.",
    overallVerdict: "역사적 이정표 딜 — LBO 시대의 개막을 상징하는 거래, 수익은 양호하나 담배 소송 리스크 초과",
    positives: [
      "1991년 RJR Nabisco 부분 재상장 ($4.1B) — 조기 Exit 일부 실현",
      "Nabisco 식품 사업부 분리 상장으로 브랜드 가치 재평가",
      "역대 최대 LBO 성공적 완수 — PE 업계의 가능성 증명",
      "KKR 펀드 투자자(LP)들에게 양호한 수익 실현",
    ],
    risks: [
      "담배 소송 부채 급증 — 1990년대 이후 미국 담배 소송으로 예상치 못한 대규모 부채",
      "높은 레버리지 구조 한계 — 이자 비용이 경영 투자 여력을 만성적으로 제한",
      "Drexel Burnham Lambert 파산 (1990) — 정크본드 시장 냉각으로 후속 딜 어려움",
      "복합기업 분리 지연 — 담배·식품 분리에 예상보다 오랜 시간 소요",
      "CEO 갈등의 후유증 — F. Ross Johnson과의 갈등이 경영팀 이탈로 이어짐",
    ],
    editorNote: "KKR의 RJR Nabisco 인수는 단순한 기업 딜이 아니다. 이것은 1980년대 월스트리트의 탐욕, 정크본드 혁명, PE의 부상, 그리고 복합기업 해체 시대의 상징이다. Bryan Burrough와 John Helyar의 《Barbarians at the Gate》는 이 딜을 인류 역사에서 가장 많이 읽힌 M&A 이야기로 만들었다. 에쿼티 5%로 $31.1B 딜을 완성한 레버리지 마법은 이후 모든 LBO 교과서의 1장이 됐다. 동시에 이 딜은 과도한 레버리지와 단기 수익 추구의 부작용도 가르쳐준다 — Drexel Burnham Lambert의 파산과 담배 소송의 재앙이 그 증거다.",
  },

  tombstone: {
    acquirerInitials: "KKR",
    acquirerBg: "bg-gray-800",
    targetInitials: "RJR",
    targetBg: "bg-amber-700",
    acquirerName: "Kohlberg Kravis Roberts & Co. (KKR)",
    targetName: "RJR Nabisco Holdings Corp.",
    dealTitle: "레버리지 바이아웃 (Leveraged Buyout)",
    dealSize: "약 $311억",
    dealSizeUSD: "USD 31.1 Billion",
    evEbitda: "약 12.4×",
    closeDate: "Feb 1989",
  },

  sources: [
    { id: 1, text: "Bryan Burrough & John Helyar — Barbarians at the Gate: The Fall of RJR Nabisco (1989)", url: "https://www.harpercollins.com" },
    { id: 2, text: "RJR Nabisco Holdings Corp. — SEC Form 10-K (1988, 1989)", url: "https://www.sec.gov" },
    { id: 3, text: "KKR — Press Release: Acquisition of RJR Nabisco (February 1989)" },
    { id: 4, text: "The Wall Street Journal — KKR Wins RJR Nabisco Bidding War (November 1988)" },
    { id: 5, text: "Forbes — The $25 Billion Dollar Temptation (1988)" },
    { id: 6, text: "Financial Times — The LBO That Changed Wall Street (1989)" },
    { id: 7, text: "HBO Film — Barbarians at the Gate (1993)", url: "https://www.hbo.com" },
    { id: 8, text: "The New York Times — RJR Nabisco Agrees to $25 Billion Buyout by KKR Group (1988)" },
  ],

  seo: {
    title: "KKR RJR Nabisco LBO 완전 분석 — $311억 역대 최대 레버리지 바이아웃",
    description: "KKR의 RJR Nabisco $31.1B LBO 완전 분석. CEO MBO 시도, 정크본드 혁명, 경쟁 입찰 전쟁, 레버리지 구조, Barbarians at the Gate까지 심층 해부.",
    keywords: [
      "KKR RJR Nabisco",
      "역대 최대 LBO",
      "레버리지 바이아웃",
      "정크본드",
      "Michael Milken",
      "Drexel Burnham Lambert",
      "Barbarians at the Gate",
      "PE 인수",
      "MBO",
      "차입 인수",
      "복합기업 해체",
    ],
  },

  concepts: [
    { term: "LBO (레버리지 바이아웃)", href: "/deal-101/lbo", description: "차입으로 에쿼티 최소화 — KKR RJR Nabisco가 LBO 역사의 이정표" },
    { term: "인수 프리미엄", href: "/deal-101/acquisition-premium", description: "경쟁 입찰로 주당 $75 → $109로 오른 경영권 프리미엄" },
    { term: "스핀오프", href: "/deal-101/spinoff", description: "인수 후 Nabisco 식품 사업부 분리 검토 — LBO의 가치 실현 수단" },
    { term: "주식 인수 vs 자산 인수", href: "/deal-101/stock-vs-asset-deal", description: "복잡한 복합기업 LBO에서의 딜 구조 선택" },
  ],

  faq: [
    {
      q: "KKR은 왜 주당 $109라는 막대한 금액을 제시했나요?",
      a: "경쟁 입찰 구조 때문입니다. CEO F. Ross Johnson의 MBO 제안($75)이 공개되자 KKR, Forstmann Little 등이 경쟁에 뛰어들었습니다. 가격 전쟁이 벌어지면서 최종가는 $109까지 상승했습니다. KKR 입장에서는 RJR Nabisco의 강력한 현금흐름(EBITDA ~$2.5B)이 높은 레버리지를 감당할 수 있다고 판단했고, Drexel Burnham Lambert의 정크본드를 통해 자금 조달이 가능했기 때문입니다.",
    },
    {
      q: "정크본드가 이 딜에서 왜 그렇게 중요했나요?",
      a: "1980년대 이전에는 투자등급 이하 기업들이 대규모 자금을 조달하기 어려웠습니다. Michael Milken이 이끄는 Drexel Burnham Lambert가 고수익 채권(정크본드) 시장을 개척하면서 이 규제가 사라졌습니다. KKR은 이 시장에서 약 $5B의 정크본드를 발행해 LBO 자금의 핵심을 조달했습니다. 정크본드 없이는 $31.1B 딜 자체가 불가능했습니다.",
    },
    {
      q: "'Barbarians at the Gate'는 무엇인가요?",
      a: "1989년 출판된 Bryan Burrough·John Helyar의 논픽션 책입니다. RJR Nabisco 인수전 전 과정을 인터뷰와 취재를 통해 생생하게 기록했습니다. CEO Johnson의 호화 생활, KKR의 냉정한 계산, 은행가들의 탐욕 등 1980년대 월스트리트의 민낯을 드러내 베스트셀러가 됐고, 1993년 HBO 영화로도 제작됐습니다. 현재도 M&A·PE 분야 필독서로 꼽힙니다.",
    },
    {
      q: "KKR은 이 딜에서 실제로 얼마나 수익을 냈나요?",
      a: "KKR은 투입 에쿼티 약 $1.5B 대비 상당한 수익을 냈으나, 초기 기대치보다는 낮았습니다. 1991년 재상장, Nabisco 분리 상장 등을 통해 단계적으로 Exit했습니다. 담배 소송 리스크가 예상을 훨씬 초과했고, Drexel Burnham Lambert 파산(1990)으로 정크본드 시장이 냉각되면서 자금 조달 환경도 나빠졌습니다. 정확한 IRR은 공개되지 않았으나 PE 업계 추정으로는 연 수익률 약 10~15% 수준으로 알려져 있습니다.",
    },
    {
      q: "이 딜이 PE 역사에 미친 영향은 무엇인가요?",
      a: "이 딜은 LBO 황금기의 정점이자 종언을 동시에 의미했습니다. 이후 정크본드 시장 냉각, Drexel Burnham Lambert 파산, S&L 위기로 1990년대 초 PE 시장은 침체에 빠졌습니다. 동시에 이 딜은 '에쿼티 최소화+레버리지 극대화'라는 LBO 방정식을 확립했고, 이후 모든 PE 교과서의 핵심 사례가 됐습니다. 규모, 복잡성, 드라마틱한 경쟁 입찰 면에서 이 딜을 능가한 LBO는 20년간 나오지 않았습니다.",
    },
  ],
};

export default deal;
