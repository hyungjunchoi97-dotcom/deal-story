/**
 * Illumina × GRAIL — 암 조기 진단 혁명, 규제가 막은 $7.1B 수직 통합
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "illumina-grail",
  title: "Illumina의 GRAIL 인수는 왜 강제 매각됐나 — 암 조기 진단과 반독점의 충돌",
  subtitle: "$7.1B · EU·FTC 규제 차단 · 강제 분리 완료 2024년 · 액체 생검 · Galleri 혈액 암 검사",
  category: "ma",
  industry: "유전체학 / 암 진단 / 의료기기",
  country: "미국",
  announcedAt: "2020-09-20",
  announcedDisplay: "2020년 9월",
  closedDisplay: "2024년 강제 분리 완료",
  readingMinutes: 11,
  tags: ["Illumina", "GRAIL", "암 조기 진단", "액체 생검", "Galleri", "반독점", "EU 규제", "FTC", "강제 분리"],
  excerpt: "Illumina은 2020년 9월 자사가 설립한 암 조기 진단 스타트업 GRAIL을 $7.1B에 재인수한다고 발표했다. EU 집행위원회와 미국 FTC가 반독점 우려를 제기했고, EU는 2022년 Illumina에 강제 분리를 명령했다. Illumina는 EU 명령에 불복해 유럽 법원에 항소했지만 패소, 2024년 GRAIL을 완전히 분리하며 인수가 실패로 끝났다.",

  acquirer: { initials: "ILMN", bg: "bg-purple-700", label: "Illumina, Inc." },
  target: { initials: "GRAIL", bg: "bg-pink-600", label: "GRAIL, Inc." },

  background: [
    "Illumina는 차세대 유전자 시퀀싱(NGS) 장비·시약의 글로벌 1위 기업으로 시퀀싱 시장의 약 80%를 점유하고 있다. GRAIL은 2016년 Illumina가 직접 설립한 스핀오프로, 혈액에서 순환 종양 DNA(ctDNA)를 검출해 50가지 이상의 암을 조기 진단하는 '액체 생검(Liquid Biopsy)' 기술을 개발했다.",
    "GRAIL의 핵심 제품은 Galleri 혈액 검사로, 단 한 번의 혈액 채취로 50+ 종류의 암을 조기에 발견할 수 있다. 2020년 임상 연구에서 암 양성 예측도 40%+를 달성, 기존 암 검진 방식을 혁신할 수 있다는 기대를 받았다. Galleri는 2021년 FDA의 혁신 의료기기(Breakthrough Device Designation)를 받았다.",
    "2020년 9월 Illumina는 GRAIL을 $7.1B에 재인수하겠다고 발표했다. Illumina가 GRAIL의 NGS 시퀀서를 독점적으로 공급하는 수직 통합을 완성하는 것이 목적이었다. 그러나 EU 집행위원회는 Illumina가 GRAIL의 경쟁사들(액체 생검 스타트업)에게 시퀀서 공급을 차별하거나 거부할 수 있다며 반독점 우려를 제기했다.",
    "2022년 EU 집행위원회는 Illumina가 규제 승인도 받기 전에 GRAIL 인수를 완료한 것을 문제 삼아 '건네기 완료(Gun-jumping)' 위반으로 €432M 벌금을 부과하고 강제 분리를 명령했다. Illumina는 EU 일반법원에 항소했지만 2023년 9월 패소, 2024년 GRAIL을 독립 기업으로 분리하며 인수가 완전히 실패로 끝났다.",
  ],

  dealSummary: {
    dealValueDisplay: "$7.1B (현금 + 주식, 강제 분리로 미완)",
    acquirerName: "Illumina, Inc.",
    targetName: "GRAIL, Inc.",
    announcedDisplay: "2020년 9월",
    closedDisplay: "2024년 강제 분리 완료",
    country: "미국",
  },

  executiveSummary: [
    "$7.1B 인수 발표 → EU 규제 승인 없이 인수 강행 → EU 강제 분리 명령",
    "GRAIL: 50+ 암을 혈액 검사로 조기 발견 — Galleri 테스트 FDA 혁신 의료기기 지정",
    "EU 집행위원회 '건네기 완료(Gun-jumping)' 위반 — €432M 벌금 + 강제 분리 명령",
    "Illumina의 수직 통합 전략: NGS 시퀀서(80% 점유) + 액체 생검 하방 독점 우려",
    "2023년 EU 일반법원 항소 패소 → 2024년 GRAIL 분리 완료",
    "교훈: 규제 승인 전 인수 완료(gun-jumping)는 EU의 강력한 대응을 초래",
  ],

  industryOverview: {
    body: "액체 생검(Liquid Biopsy) 시장은 2022년 $5B에서 2030년 $30B+ 성장이 예상되는 초기 고성장 시장이다. 혈액 한 번으로 다발성 암을 조기 진단하는 MCED(Multi-Cancer Early Detection) 검사는 전통적 영상 검진을 보완·대체할 잠재력이 있다. NGS 시퀀서 시장은 Illumina가 약 80%를 독점하며, GRAIL 같은 액체 생검 기업들이 모두 Illumina 시퀀서에 의존한다.",
    metrics: [
      { label: "액체 생검 시장 규모", value: "$5B", sub: "2022년, 2030년 $30B+ 예상" },
      { label: "Illumina NGS 시장 점유율", value: "~80%", sub: "글로벌 유전자 시퀀서 시장" },
      { label: "Galleri 검출 가능 암 종류", value: "50+", sub: "단일 혈액 검사" },
      { label: "EU 벌금", value: "€432M", sub: "Gun-jumping 위반" },
    ],
    players: [
      { name: "Foundation Medicine (Roche)", role: "암 유전체 액체 생검, 조직 기반 검사" },
      { name: "Guardant Health", role: "혈액 기반 암 유전체 검사 선두 경쟁사" },
      { name: "Pacific Biosciences (PacBio)", role: "장거리 시퀀싱 기술, Illumina의 경쟁사" },
      { name: "Oxford Nanopore", role: "휴대형 시퀀서, 신흥 NGS 경쟁사" },
    ],
  },

  companyOverview: {
    targetName: "GRAIL, Inc.",
    body: "GRAIL은 2016년 Illumina의 지원으로 설립된 암 조기 진단 스타트업이다. 핵심 기술은 혈중 순환 종양 DNA(ctDNA)의 메틸화 패턴을 분석해 암의 종류와 발생 부위를 예측하는 것이다. 2021년 FDA 혁신 의료기기 지정을 받은 Galleri 검사가 주력 제품이다.",
    metrics: [
      { label: "설립 연도", value: "2016", sub: "Illumina 스핀오프" },
      { label: "Galleri 검출 가능 암 종류", value: "50+", sub: "단일 혈액 검사" },
      { label: "임상 민감도", value: "~67%", sub: "Stage I-III 암 검출" },
      { label: "2021년 매출", value: "~$67M", sub: "상업화 초기 단계" },
    ],
    financials: [
      { year: "FY2020", revenue: 12, cogs: 50, grossProfit: -38, sga: 200, operatingIncome: -380, ebitda: -360 },
      { year: "FY2021", revenue: 67, cogs: 100, grossProfit: -33, sga: 280, operatingIncome: -560, ebitda: -530 },
      { year: "FY2022", revenue: 125, cogs: 130, grossProfit: -5, sga: 310, operatingIncome: -600, ebitda: -570 },
    ],
    financialsNote: "단위: USD 백만. 상업화 초기 적자 기업. 공개 자료 기반 추정.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "Galleri 검사 (미국)", pct: 85, color: "bg-pink-600", amt: "직접 판매" },
      { name: "임상 연구·파트너십", pct: 15, color: "bg-pink-300", amt: "NHS 등 파트너" },
    ],
  },

  dealStructure: {
    body: "Illumina는 GRAIL을 현금 + 주식 혼합 방식으로 $7.1B에 인수하고자 했다. 그러나 EU 집행위원회의 승인 없이 2021년 8월 인수를 강행(gun-jumping)했고, EU는 이를 EC Merger Regulation 위반으로 판단해 벌금과 강제 분리를 명령했다.",
    preOwnership: {
      nodes: [
        { id: "ilmn", label: "Illumina, Inc.", sub: "NASDAQ: ILMN", type: "acquirer" },
        { id: "grail", label: "GRAIL, Inc.", sub: "비상장 스타트업", type: "target" },
      ],
      edges: [
        { from: "ilmn", to: "grail", label: "$7.1B 인수 제안 (현금+주식)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ilmn_post", label: "Illumina, Inc.", sub: "€432M 벌금, 강제 분리", type: "acquirer" },
        { id: "grail_post", label: "GRAIL, Inc.", sub: "2024년 독립 기업으로 재분리", type: "target" },
      ],
      edges: [
        { from: "ilmn_post", to: "grail_post", label: "강제 분리 (2024년 완료)" },
      ],
    },
    keyTerms: [
      { label: "인수 발표 가치", value: "$7.1B (현금 + 주식)", accent: true },
      { label: "EU 벌금", value: "€432M (Gun-jumping 위반)", accent: true },
      { label: "강제 분리 명령", value: "EU 집행위원회 (2022년)", accent: false },
      { label: "항소 결과", value: "2023년 EU 일반법원 패소", accent: false },
      { label: "최종 결과", value: "2024년 GRAIL 독립 분리 완료", accent: false },
    ],
  },

  advisors: {
    body: "Illumina는 EU 규제 대응을 위해 다수의 법률·로비 자문사를 동원했지만 EU 집행위원회의 강경 입장을 뒤집지 못했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "인수자 (Illumina)",
        initials: "ILMN",
        bg: "bg-purple-700",
        advisors: [
          { firm: "Goldman Sachs", role: "재무자문 (FA)", roleType: "financial", note: "인수 구조 설계" },
          { firm: "Skadden Arps", role: "법률자문 (M&A)", roleType: "legal", note: "딜 계약 및 규제 대응" },
          { firm: "Freshfields Bruckhaus Deringer", role: "EU 규제 법률자문", roleType: "legal", note: "EU 집행위원회 대응" },
        ],
      },
      {
        side: "target",
        sideLabel: "피인수자 (GRAIL)",
        initials: "GRAIL",
        bg: "bg-pink-600",
        advisors: [
          { firm: "Lazard", role: "재무자문 (FA)", roleType: "financial", note: "공정가 의견" },
          { firm: "Wilson Sonsini", role: "법률자문", roleType: "legal", note: "딜 법률 지원" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 자료 기반.",
  },

  valuation: {
    body: "Illumina는 GRAIL의 상업화 초기 단계임에도 불구하고 Galleri 검사의 혁신적 잠재력과 NGS 시퀀서 수직 통합 시너지를 고려해 $7.1B의 높은 밸류에이션을 부여했다.",
    rows: [
      { item: "인수 발표 가치", val: "$7.1B", note: "현금 + 주식 혼합", accent: true },
      { item: "GRAIL FY2021 매출", val: "~$67M", note: "상업화 초기 단계" },
      { item: "EV/Revenue", val: "~100×+", note: "파이프라인 가치 반영", accent: true },
      { item: "EU 벌금", val: "€432M", note: "Gun-jumping 위반" },
      { item: "강제 분리 비용", val: "수억 달러+", note: "법적 비용 + 분리 비용" },
    ],
    disclaimer: "재무 지표는 공개 자료 기반 추정.",
  },

  rationale: {
    buyer: {
      title: "Illumina의 인수 논리",
      initials: "ILMN",
      bg: "bg-purple-700",
      points: [
        "수직 통합 완성 — NGS 시퀀서(업스트림) + GRAIL 암 진단(다운스트림) 통합",
        "Galleri 검사의 글로벌 상업화 가속 — Illumina의 유통·고객 네트워크 활용",
        "암 조기 진단 시장 선점 — 2030년 $30B+ 예상 시장의 초기 주도권 확보",
        "GRAIL 경쟁사들의 성장 둔화 — 시퀀서 접근성 우위를 통한 경쟁 차별화",
        "Illumina 밸류에이션 다각화 — 기기·시약 판매에서 진단 서비스로 확장",
      ],
    },
    seller: {
      title: "GRAIL 이사회·주주의 매각 논리",
      initials: "GRAIL",
      bg: "bg-pink-600",
      points: [
        "Illumina의 글로벌 유통 네트워크로 Galleri 상업화 가속",
        "시퀀서 독점 공급자와의 통합으로 비용 구조 최적화",
        "$7.1B 프리미엄 — 초기 단계 스타트업 대비 높은 가치 실현",
        "Illumina의 자본·규모로 대규모 임상 데이터 확보 가속",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "EU와의 법적 다툼 끝에 Illumina는 2024년 GRAIL을 완전히 분리했다. 분리된 GRAIL은 독립 기업으로 나스닥 상장을 추진했다. Illumina 자체도 주가 하락, CEO 교체(Francis deSouza 사임) 등 혼란을 겪었다. GRAIL의 Galleri 검사는 독립 후에도 임상 확장을 계속하고 있으며, 영국 NHS와의 파일럿 연구가 주목받고 있다.",
    overallVerdict: "딜 실패 — EU 규제 대응 실패로 $7.1B 인수 전략 완전 무산",
    positives: [
      "GRAIL: Galleri 검사 상업화 계속 진행 — NHS 파일럿 연구 등 임상 확장",
      "Illumina의 규제 실패가 gun-jumping 규제 준수의 중요성을 업계에 경고",
      "액체 생검 시장의 혁신 가치에 대한 인식 제고",
    ],
    risks: [
      "Illumina: $7.1B 투자 실패 + €432M 벌금 + 법적 비용 수억 달러",
      "Illumina 주가 급락 및 CEO 교체 등 경영 혼란",
      "GRAIL: 독립 후 자금 조달 및 상업화 속도 문제",
      "EU의 강력한 gun-jumping 규제가 글로벌 M&A 전략에 새로운 리스크로 부상",
    ],
    editorNote: "Illumina-GRAIL 딜의 핵심 교훈은 두 가지다. 첫째, 'gun-jumping': EU 규제 승인도 받기 전에 인수를 완료하는 것은 EU 경쟁법 위반이며 강제 분리·거액 벌금으로 이어진다. 둘째, 수직 통합의 반독점 딜레마: Illumina의 NGS 시퀀서 독점(80%)은 강점이지만, 동시에 그것이 GRAIL 인수를 반독점 문제로 만든 원인이었다. 시장 지배력이 강할수록 M&A에서 더 엄격한 규제 심사를 받는다.",
  },

  tombstone: {
    acquirerInitials: "ILMN",
    acquirerBg: "bg-purple-700",
    targetInitials: "GRAIL",
    targetBg: "bg-pink-600",
    acquirerName: "Illumina, Inc.",
    targetName: "GRAIL, Inc.",
    dealTitle: "인수 시도 → EU 강제 분리",
    dealSize: "$7.1B (강제 분리, EU 벌금 €432M)",
    dealSizeUSD: "USD 7.1B (terminated by EU order)",
    evEbitda: "N/A (적자 기업)",
    closeDate: "Divested 2024",
  },

  sources: [
    { id: 1, text: "Illumina Press Release — Illumina Acquires GRAIL (September 2020)", url: "https://investor.illumina.com" },
    { id: 2, text: "EU Commission Decision — Illumina/GRAIL Merger Blocked (September 2022)", url: "https://ec.europa.eu" },
    { id: 3, text: "EU General Court — Judgment on Illumina Appeal (September 2023)" },
    { id: 4, text: "GRAIL — Galleri Clinical Data and FDA Breakthrough Device Designation (2021)" },
    { id: 5, text: "Bloomberg — Illumina to Divest GRAIL After EU Court Defeat (2023)" },
    { id: 6, text: "The Wall Street Journal — How Illumina's $7 Billion Bet on Cancer Testing Unraveled (2024)" },
  ],

  seo: {
    title: "Illumina GRAIL 인수 실패 분석 — EU 강제 분리와 암 조기 진단 혁명",
    description: "Illumina의 GRAIL $7.1B 인수 실패 완전 분석. EU Gun-jumping 위반 €432M 벌금, 강제 분리 명령, Galleri 액체 생검 기술과 반독점 충돌.",
    keywords: ["Illumina GRAIL 인수", "GRAIL Galleri 검사", "액체 생검 반독점", "EU gun-jumping", "암 조기 진단", "NGS 시퀀서 독점"],
  },

  concepts: [
    { term: "수직 통합", href: "/deal-101/vertical-integration", description: "NGS 시퀀서(업스트림) + 암 진단(다운스트림) 통합 — 반독점 우려를 낳은 수직 통합 전략" },
    { term: "규제 리스크", href: "/deal-101/regulatory-risk", description: "EU의 gun-jumping 규제: 승인 전 인수 완료 → €432M 벌금 + 강제 분리" },
    { term: "Gun-jumping", href: "/deal-101/regulatory-risk", description: "EU 규제 승인 전 합병 실행 — Illumina가 부과받은 EU 경쟁법 위반 유형" },
    { term: "전략적 M&A", href: "/deal-101/strategic-ma", description: "Galleri 혈액 암 검사 기술 확보 + NGS 생태계 수직 통합 — 규제로 무산된 전략" },
  ],

  faq: [
    {
      q: "Illumina-GRAIL 딜이 실패한 핵심 이유는?",
      a: "두 가지 이유다. 첫째, gun-jumping: EU 집행위원회의 승인도 받지 않은 상태에서 2021년 8월 인수를 완료했다. EU 경쟁법상 이는 명백한 위반으로, EU는 €432M 벌금과 강제 분리를 명령했다. 둘째, 반독점: Illumina의 NGS 시퀀서 80% 독점과 GRAIL 인수를 결합하면 다른 액체 생검 스타트업들이 시퀀서 접근을 차별받을 수 있다는 EU의 판단이다.",
    },
    {
      q: "GRAIL의 Galleri 검사는 무엇이며 왜 혁신적인가?",
      a: "Galleri는 혈액 한 번으로 50가지 이상의 암을 동시에 조기 진단할 수 있는 액체 생검(Liquid Biopsy) 검사다. 혈액 속 순환 종양 DNA(ctDNA)의 메틸화 패턴을 분석해 암의 존재 여부뿐 아니라 암의 종류와 발생 부위까지 예측한다. 기존 암 검진(대장내시경, 유방촬영 등)이 각각 특정 암만 검사하는 것과 달리, Galleri는 단 한 번의 혈액 검사로 다발성 암을 스크리닝할 수 있다.",
    },
    {
      q: "Gun-jumping이란 무엇이며 왜 문제가 되나?",
      a: "Gun-jumping은 규제 당국의 승인을 받기 전에 합병을 실행하는 행위다. EU Merger Regulation에 따르면 일정 규모 이상의 M&A는 사전에 EU 집행위원회의 승인을 받아야 한다. Illumina는 EU의 심사가 진행 중인 상태에서 GRAIL 인수를 완료했고, EU는 이를 규정 위반으로 판단해 역대 최고 수준의 벌금(€432M)을 부과했다. 모든 국경을 초월한 대형 M&A는 주요국 규제 승인 전 인수를 완료해서는 안 된다.",
    },
    {
      q: "Illumina와 GRAIL은 분리 후 어떻게 됐나?",
      a: "Illumina는 분리 후 주가 하락, CEO 교체(Francis deSouza 사임), 이사회 갈등을 겪으며 경영 혼란을 경험했다. 행동주의 헤지펀드 Carl Icahn이 경영진 교체를 압박하기도 했다. GRAIL은 독립 기업으로 재상장을 추진하며 Galleri 검사의 임상 확장을 계속했다. 영국 NHS와의 대규모 파일럿 연구(140만 명 대상)가 주목받고 있으며, 암 조기 진단 혁신은 계속되고 있다.",
    },
  ],
};

export default deal;
