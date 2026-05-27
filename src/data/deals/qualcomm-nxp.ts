/**
 * Qualcomm × NXP Semiconductors — $44B 반도체 메가딜, 중국 규제에 막혀 무산
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "qualcomm-nxp",
  title: "Qualcomm의 $44B NXP 인수는 왜 실패했나 — 미중 무역전쟁과 반도체 M&A의 지정학",
  subtitle: "$44B · 2018년 7월 철회 · 중국 SAMR 규제 차단 · 자동차 반도체 · 미중 무역전쟁",
  category: "ma",
  industry: "반도체 / 자동차 전장 / IoT",
  country: "미국·네덜란드",
  announcedAt: "2016-10-27",
  announcedDisplay: "2016년 10월",
  closedDisplay: "2018년 7월 철회 (미완)",
  readingMinutes: 11,
  tags: ["Qualcomm", "NXP Semiconductors", "반도체 M&A", "중국 규제", "SAMR", "자동차 반도체", "미중 무역전쟁", "딜 실패"],
  excerpt: "Qualcomm은 2016년 10월 자동차·IoT 반도체 강자 NXP Semiconductors를 $44B에 인수하는 역대 최대 반도체 M&A를 발표했다. 미국·EU·한국 등 8개 규제 기관의 승인을 받았지만, 유일하게 중국 SAMR이 2018년 7월 기한까지 승인을 거부했다. 결국 딜은 철회됐고, Qualcomm은 NXP에 위약금 $2B를 지불했다.",

  acquirer: { initials: "QCOM", bg: "bg-blue-800", label: "Qualcomm Incorporated" },
  target: { initials: "NXPI", bg: "bg-orange-600", label: "NXP Semiconductors" },

  background: [
    "NXP Semiconductors는 2006년 필립스(Philips)에서 분사된 네덜란드 반도체 기업으로, 자동차 전장 반도체(MCU, SBC, RADAR), 보안 칩(NFC, 스마트카드), IoT 반도체 분야의 글로벌 1~2위였다. 자동차 반도체 시장점유율 1위(약 11%)였고, 특히 NFC 결제 칩은 iPhone, Android 스마트폰에 폭넓게 탑재됐다.",
    "Qualcomm은 모바일 스마트폰 칩(Snapdragon SoC)으로 성장했지만, 2016년 스마트폰 시장 성장 둔화에 직면했다. 새로운 성장 동력으로 자동차(커넥티드카, 자율주행)와 IoT를 선택했고, NXP는 그 완벽한 퍼즐 조각이었다. NXP의 자동차 반도체 포트폴리오 + Qualcomm의 통신 칩 = 자율주행 차량 반도체 패키지 완성.",
    "2016년 10월 Qualcomm은 NXP를 주당 $110(프리미엄 34%)에 현금 인수한다고 발표했다. 총 인수 가치 $47B(부채 포함) — 당시 역대 최대 반도체 인수였다. 딜은 미국(CFIUS), EU, 한국, 일본, 대만 등 8개 규제 기관의 승인을 받았다. 유일하게 중국 SAMR(국가시장감독관리총국)만 2018년 7월까지 승인을 거부했다.",
    "2018년은 미중 무역전쟁이 격화된 해였다. 미국 정부가 중국 통신 장비 업체 ZTE에 수출 제재를 가하는 등 양국 긴장이 극도로 높아졌다. 중국은 Qualcomm-NXP 딜 승인을 미중 협상 카드로 활용했다는 분석이 지배적이다. 결국 2018년 7월 25일, Qualcomm은 중국 규제 승인 불확실성을 이유로 딜을 공식 철회하고 NXP에 위약금 $2B를 지불했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$44B (주당 $110, 최종 제안 $127.50으로 상향)",
    acquirerName: "Qualcomm Incorporated",
    targetName: "NXP Semiconductors",
    announcedDisplay: "2016년 10월",
    closedDisplay: "2018년 7월 철회 (미완)",
    country: "미국·네덜란드",
  },

  executiveSummary: [
    "$44B — 발표 당시 역대 최대 반도체 M&A (현재는 NVIDIA-ARM $40B, Broadcom-Qualcomm 시도 제치고도 역대급)",
    "9개 규제 기관 중 8개 승인 — 유일하게 중국 SAMR만 2018년 7월까지 거부",
    "미중 무역전쟁 격화 시기 — 딜이 외교·무역 협상의 지렛대로 활용",
    "위약금 $2B — Qualcomm이 NXP에 지급하며 역대 최대 규모 딜 무산",
    "딜 실패 후 Qualcomm은 자사주 매입 $30B 집행, 주가 방어",
    "교훈: 중국 시장 의존도 높은 기업의 글로벌 M&A에서 지정학적 리스크 필수 고려",
  ],

  industryOverview: {
    body: "자동차 반도체 시장은 전기차·자율주행 전환으로 2022년 $50B에서 2030년 $140B+ 성장이 예상되는 초고성장 버티컬이다. 차량 1대당 반도체 탑재량이 내연기관차 $400 수준에서 전기차 $1,000+, 자율주행차 $4,000+로 급증하고 있다. NXP는 이 시장에서 1위(~11%) 지위를 점했다.",
    metrics: [
      { label: "자동차 반도체 시장 규모", value: "$50B", sub: "2022년, 2030년 $140B+ 예상" },
      { label: "NXP 자동차 반도체 점유율", value: "~11%", sub: "글로벌 1위" },
      { label: "NFC 칩 시장 점유율", value: "~35%", sub: "결제·보안 칩 2위" },
      { label: "딜 위약금", value: "$2B", sub: "역대 최대 M&A 위약금 중 하나" },
    ],
    players: [
      { name: "Renesas Electronics", role: "일본 자동차 반도체 2위, NXP 최대 경쟁사" },
      { name: "Infineon Technologies", role: "독일 자동차·산업용 반도체 강자" },
      { name: "Texas Instruments", role: "자동차·산업 아날로그 반도체 선두" },
      { name: "STMicroelectronics", role: "자동차 MCU·파워 반도체" },
    ],
  },

  companyOverview: {
    targetName: "NXP Semiconductors",
    body: "NXP Semiconductors(NASDAQ: NXPI)는 2006년 필립스에서 분사된 네덜란드 반도체 기업이다. 자동차 전장 MCU, NFC 보안 칩, 무선 연결(BLE, Zigbee), 산업용 반도체가 핵심 사업이다. 인수 발표 당시 연매출 약 $9.5B, EBITDA 마진 30%+를 기록했다.",
    metrics: [
      { label: "연매출 (2016)", value: "~$9.5B", sub: "자동차 52%, 산업/IoT 30%" },
      { label: "자동차 반도체 점유율", value: "~11%", sub: "글로벌 1위" },
      { label: "EBITDA 마진", value: "30%+", sub: "반도체 업계 상위 수준" },
      { label: "EV/EBITDA 인수 배수", value: "~15×", sub: "$44B / ~$2.9B" },
    ],
    financials: [
      { year: "FY2014", revenue: 9260, cogs: 4500, grossProfit: 4760, sga: 1800, operatingIncome: 1200, ebitda: 2400 },
      { year: "FY2015", revenue: 9490, cogs: 4600, grossProfit: 4890, sga: 1850, operatingIncome: 1280, ebitda: 2550 },
      { year: "FY2016", revenue: 9498, cogs: 4580, grossProfit: 4918, sga: 1820, operatingIncome: 1350, ebitda: 2650 },
    ],
    financialsNote: "단위: USD 백만. NXP 공개 재무 자료 기반.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "자동차 전장", pct: 52, color: "bg-orange-600", amt: "~$4.9B" },
      { name: "산업·IoT", pct: 30, color: "bg-orange-400", amt: "~$2.8B" },
      { name: "모바일·보안 (NFC 등)", pct: 18, color: "bg-orange-200", amt: "~$1.7B" },
    ],
  },

  dealStructure: {
    body: "Qualcomm은 NXP 주주에게 주당 $110 현금을 지급하는 전액 현금 인수를 제안했다. 딜 진행 중 Elliott Management(행동주의 헤지펀드)가 NXP 지분 ~6%를 매입해 $135/주를 요구, 결국 Qualcomm은 최종 가격을 $127.50으로 상향 조정했다. 그럼에도 중국 승인이 이뤄지지 않아 철회됐다.",
    preOwnership: {
      nodes: [
        { id: "qcom", label: "Qualcomm Incorporated", sub: "NASDAQ: QCOM", type: "acquirer" },
        { id: "nxpi", label: "NXP Semiconductors", sub: "NASDAQ: NXPI, 독립 상장", type: "target" },
      ],
      edges: [
        { from: "qcom", to: "nxpi", label: "$110~$127.50/주 현금 인수 제안" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "qcom_post", label: "Qualcomm Incorporated", sub: "딜 철회, $2B 위약금 지급", type: "acquirer" },
        { id: "nxpi_post", label: "NXP Semiconductors", sub: "독립 유지, 위약금 $2B 수령", type: "target" },
      ],
      edges: [
        { from: "qcom_post", to: "nxpi_post", label: "딜 철회 (2018.7)" },
      ],
    },
    keyTerms: [
      { label: "최초 제안가", value: "$110/주 ($44B)", accent: true },
      { label: "최종 제안가 (상향)", value: "$127.50/주 (~$44B+)", accent: false },
      { label: "위약금", value: "$2B (Qualcomm → NXP)", accent: true },
      { label: "철회 사유", value: "중국 SAMR 승인 거부", accent: false },
      { label: "철회일", value: "2018년 7월 25일", accent: false },
    ],
  },

  advisors: {
    body: "대형 투자은행과 로펌이 딜 양측을 지원했으며, Elliott Management의 행동주의 개입으로 협상이 복잡해졌다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "인수자 (Qualcomm)",
        initials: "QCOM",
        bg: "bg-blue-800",
        advisors: [
          { firm: "Evercore", role: "재무자문 (FA)", roleType: "financial", note: "인수 구조 및 가격 산정" },
          { firm: "DLA Piper", role: "법률자문", roleType: "legal", note: "규제 대응 및 딜 계약" },
        ],
      },
      {
        side: "target",
        sideLabel: "피인수자 (NXP)",
        initials: "NXPI",
        bg: "bg-orange-600",
        advisors: [
          { firm: "Lazard", role: "재무자문 (FA)", roleType: "financial", note: "공정가 의견 및 협상" },
          { firm: "Allen & Overy", role: "법률자문", roleType: "legal", note: "이사회 의무 및 주주 보호" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 자료 기반. Elliott Management(행동주의 펀드)는 NXP 지분 ~6% 확보 후 가격 인상 압박.",
  },

  valuation: {
    body: "Qualcomm은 NXP의 자동차 반도체 1위 지위와 NFC 보안 칩 포트폴리오에 높은 프리미엄을 부여했다. Elliott의 개입으로 최종 가격이 상향되면서 EV/EBITDA는 약 15× 수준이었다.",
    rows: [
      { item: "최초 제안 EV", val: "$44B", note: "주당 $110", accent: true },
      { item: "최종 제안 EV", val: "~$44B+", note: "주당 $127.50으로 상향", accent: true },
      { item: "NXP FY2016 매출", val: "$9.5B", note: "자동차 52%" },
      { item: "EV/EBITDA (추정)", val: "~15×", note: "자동차 반도체 프리미엄" },
      { item: "위약금", val: "$2B", note: "딜 철회 시 Qualcomm → NXP 지급" },
      { item: "발표일 주가 프리미엄", val: "~34%", note: "30일 평균 대비" },
    ],
    disclaimer: "재무 지표는 공개 자료 기반 추정.",
  },

  rationale: {
    buyer: {
      title: "Qualcomm의 인수 논리",
      initials: "QCOM",
      bg: "bg-blue-800",
      points: [
        "스마트폰 이후 성장 동력 확보 — 자동차·IoT로 매출 다각화",
        "자동차 반도체 시장 즉시 1위 진입 — NXP의 11% 점유율 흡수",
        "자율주행 반도체 패키지 완성 — Qualcomm 통신 + NXP 자동차 MCU",
        "NFC 보안 칩 포트폴리오 — 스마트폰 결제·IoT 보안 사업 강화",
        "매출 다각화 — 삼성·애플 스마트폰 의존도 감소",
      ],
    },
    seller: {
      title: "NXP 이사회·주주의 매각 논리",
      initials: "NXPI",
      bg: "bg-orange-600",
      points: [
        "$127.50/주 프리미엄 — 독립 기업 대비 명확한 밸류에이션 프리미엄",
        "Qualcomm의 글로벌 고객 네트워크로 자동차 사업 확장 가속",
        "반도체 사업의 대규모 R&D 자본 부담 완화",
        "Elliott Management 압박으로 가격 상향 확보 — 주주 가치 극대화",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "딜 철회 후 Qualcomm은 $2B 위약금을 지불하고 자사주 매입 $30B을 발표해 주가를 방어했다. NXP는 독립을 유지하면서 자동차 반도체 수요 급증 덕에 2021~2022년 매출과 주가가 크게 상승했다. Qualcomm도 자동차용 Snapdragon Digital Chassis를 독자 개발해 자동차 반도체 시장에 진입했다.",
    overallVerdict: "딜 실패 — 지정학 리스크로 역대 최대 반도체 M&A 무산",
    positives: [
      "NXP: $2B 위약금 수령 + 독립 유지 후 자동차 반도체 붐으로 주가 상승",
      "Qualcomm: 자사주 매입 $30B으로 주주 가치 방어",
      "Qualcomm: Snapdragon Digital Chassis로 자동차 반도체 독자 진입 (결과적으로 독자 경쟁력 축적)",
      "딜 실패가 반도체 M&A에서 중국 SAMR 리스크를 인식시킨 중요한 선례",
    ],
    risks: [
      "Qualcomm의 자동차 반도체 진입이 NXP 인수보다 수년 지연됨",
      "NXP의 자동차 반도체 1위 지위를 Infineon, Renesas에게 추격 허용",
      "미중 무역전쟁 심화로 중국 SAMR이 서방 반도체 M&A의 최대 리스크로 부상",
    ],
    editorNote: "Qualcomm-NXP 딜은 반도체 M&A에서 지정학적 리스크가 재무·전략 분석만큼 중요함을 증명한 사건이다. 중국은 ZTE 제재 직후 Qualcomm 딜을 무역 협상 카드로 활용했다. 9개 규제 기관 중 8개를 통과했어도 중국 1개가 블록하면 $44B 딜이 무산된다는 현실을 드러냈다. 이후 모든 대형 반도체 M&A는 '중국 규제 통과 가능성'을 핵심 딜 리스크로 평가한다.",
  },

  tombstone: {
    acquirerInitials: "QCOM",
    acquirerBg: "bg-blue-800",
    targetInitials: "NXPI",
    targetBg: "bg-orange-600",
    acquirerName: "Qualcomm Incorporated",
    targetName: "NXP Semiconductors",
    dealTitle: "인수 시도 — 중국 규제로 철회",
    dealSize: "$44B (철회, 위약금 $2B)",
    dealSizeUSD: "USD 44B (terminated)",
    evEbitda: "~15×",
    closeDate: "Terminated Jul 2018",
  },

  sources: [
    { id: 1, text: "Qualcomm Press Release — Qualcomm and NXP Semiconductors Announce Agreement (October 2016)", url: "https://investor.qualcomm.com" },
    { id: 2, text: "Qualcomm Press Release — Qualcomm Terminates NXP Acquisition (July 2018)", url: "https://investor.qualcomm.com" },
    { id: 3, text: "Bloomberg — China's Refusal to Approve Qualcomm-NXP Deal (July 2018)" },
    { id: 4, text: "The Wall Street Journal — How the US-China Trade War Killed Qualcomm's $44B Deal (2018)" },
    { id: 5, text: "Reuters — Qualcomm to Pay NXP $2 Billion Breakup Fee (July 2018)" },
    { id: 6, text: "Financial Times — Elliott Management Pushes for Higher NXP Price (2018)" },
  ],

  seo: {
    title: "Qualcomm NXP 인수 실패 분석 — $44B 반도체 M&A와 중국 규제 리스크",
    description: "Qualcomm의 NXP Semiconductors $44B 인수 실패 완전 분석. 중국 SAMR 규제 차단, 미중 무역전쟁 영향, 위약금 $2B, 반도체 M&A 지정학 리스크.",
    keywords: ["Qualcomm NXP 인수", "NXP Qualcomm 실패", "반도체 M&A 실패", "중국 규제 차단", "SAMR 승인 거부", "반도체 M&A 지정학"],
  },

  concepts: [
    { term: "전략적 M&A", href: "/deal-101/strategic-ma", description: "스마트폰 이후 성장 동력 확보 — 자동차 반도체로의 사업 다각화 전략" },
    { term: "규제 리스크", href: "/deal-101/regulatory-risk", description: "중국 SAMR이 9개 규제 기관 중 유일하게 승인 거부 — 지정학이 M&A를 무산시킨 대표 사례" },
    { term: "위약금 (Break-up Fee)", href: "/deal-101/breakup-fee", description: "Qualcomm이 NXP에 지급한 $2B 위약금 — 딜 불확실성에 대한 보상 장치" },
    { term: "행동주의 투자", href: "/deal-101/activism", description: "Elliott Management의 NXP 지분 매입 후 가격 인상 압박 — 딜 가격을 $110에서 $127.50으로 상향" },
  ],

  faq: [
    {
      q: "Qualcomm-NXP 딜이 실패한 진짜 이유는?",
      a: "표면적으로는 중국 SAMR의 승인 거부지만, 실제로는 2018년 미중 무역전쟁의 희생양이었다. 미국이 ZTE에 반도체 수출 제재를 가하자 중국은 Qualcomm-NXP 딜 승인을 협상 카드로 활용했다. 9개 규제 기관 중 8개의 승인을 받았지만, 중국 1개의 거부로 $44B 딜이 무산됐다. 지정학과 무역 분쟁이 기업 M&A를 어떻게 블록할 수 있는지를 극명하게 보여주는 사례다.",
    },
    {
      q: "NXP Semiconductors는 왜 그렇게 중요한 회사였나?",
      a: "NXP는 자동차 반도체 글로벌 1위(~11% 점유율)로, Qualcomm이 스마트폰 이후 자동차·IoT로 사업을 확장하는 데 있어 완벽한 퍼즐 조각이었다. 자동차 MCU, NFC 결제 보안 칩, Bluetooth/Wi-Fi IoT 칩 등 Qualcomm의 통신 기술과 결합하면 커넥티드카·자율주행 반도체 패키지를 단번에 완성할 수 있었다.",
    },
    {
      q: "딜 실패 후 Qualcomm과 NXP는 어떻게 됐나?",
      a: "Qualcomm은 $2B 위약금을 지불하고 $30B 자사주 매입을 발표해 주가를 방어했다. 이후 독자적인 자동차용 Snapdragon Digital Chassis 플랫폼을 개발해 BMW, GM, Honda 등과 계약을 체결했다. NXP는 독립을 유지하면서 2021~2022년 전기차·자율주행 붐으로 주가가 크게 상승했다. 위약금 $2B를 받은 NXP 주주는 단기적으로 이득을 봤다.",
    },
    {
      q: "이 딜이 이후 반도체 M&A에 어떤 영향을 미쳤나?",
      a: "Qualcomm-NXP 실패는 '중국 SAMR이 서방 반도체 M&A의 최대 리스크'임을 업계에 각인시켰다. 이후 NVIDIA-ARM($40B, 2021~2022 실패)도 중국 규제 등 복합 규제를 이유로 철회됐다. 오늘날 모든 대형 반도체 M&A는 중국 규제 승인 가능성을 핵심 딜 조건으로 분석하며, 중국 매출 비중이 높은 기업 간의 딜은 구조 자체를 달리 설계하게 됐다.",
    },
  ],
};

export default deal;
