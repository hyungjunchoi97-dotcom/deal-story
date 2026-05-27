/**
 * Johnson & Johnson → Kenvue 분사
 * 역대 최대 헬스케어 소비재 스핀오프 — 2021년 발표, 2023년 8월 완성
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "jj-kenvue",
  title: "J&J는 왜 Tylenol·Band-Aid를 분사했나 — 역대 최대 헬스케어 소비재 스핀오프 해부",
  subtitle: "제약·MedTech 집중 전략 · $410억 Kenvue IPO · 탈크 소송 분리 · 단계적 카브아웃 IPO의 교과서",
  category: "restructuring",
  industry: "의료·헬스케어·소비재",
  country: "미국",
  announcedAt: "2021-11-12",
  closedAt: "2023-08-23",
  announcedDisplay: "2021년 11월",
  closedDisplay: "2023년 8월",
  readingMinutes: 11,
  tags: [
    "존슨앤존슨",
    "켄뷰",
    "소비재 분사",
    "Tylenol",
    "Band-Aid",
    "Listerine",
    "헬스케어 구조조정",
    "탈크 소송",
    "카브아웃 IPO",
    "Kenvue",
  ],
  excerpt:
    "Johnson & Johnson이 Tylenol·Band-Aid·Listerine 등 소비재 사업부를 Kenvue Inc.로 분리해 2023년 5월 NYSE에 상장시킨 역대 최대 헬스케어 소비재 스핀오프. 2023년 미국 최대 IPO($38억 조달), 시총 $410억으로 출발. J&J는 제약(Janssen)·MedTech에 집중하며 탈크 소송 관련 법적 구조도 분리했다.",

  acquirer: { initials: "J&J", bg: "bg-red-700", label: "Johnson & Johnson" },
  target: { initials: "KVU", bg: "bg-rose-500", label: "Kenvue Inc." },

  background: [
    "Johnson & Johnson은 130년 이상 제약·의료기기·소비재를 아우르는 복합 헬스케어 기업이었다. Tylenol·Band-Aid·Listerine·Neutrogena·Aveeno·Johnson's Baby·Nicorette·Zyrtec 등 150개 이상의 소비재 브랜드는 안정적인 매출을 만들어왔지만, 성장률은 연 2~3%에 머물렀다. 반면 제약 부문의 Darzalex(다발성골수종)·Stelara(자가면역)·Tremfya 등은 연 10~15% 성장세를 보이며 회사의 성장 엔진 역할을 했다.",
    "투자자들은 고성장 제약 자산과 저성장 소비재 자산이 한 지붕 아래 있으면 멀티플이 희석된다는 점을 오랫동안 지적해왔다. J&J의 P/E는 제약 순수 플레이어보다 낮게 형성됐다. 여기에 베이비파우더 탈크(Talc) 관련 발암 소송이 소비재 사업부에 집중되면서, 법적 리스크도 사업 분리의 강력한 이유가 됐다.",
    "2021년 11월 12일 J&J CEO Alex Gorsky는 소비재 헬스 사업부를 완전 독립 기업으로 분사한다고 공식 발표했다. 분사 기업명은 'Kenvue'로 결정됐다. 전략 방향은 명확했다: J&J는 제약과 MedTech(정형외과·수술 로봇)에 집중하고, Kenvue는 소비자 직접 브랜드(DTC) 전략에 특화된 독립 기업으로 출범한다.",
    "분사는 2단계로 진행됐다. 1단계: 2023년 5월 4일 Kenvue가 NYSE에 IPO 상장(공모가 $22, $38억 조달, 시총 $410억으로 2023년 미국 최대 IPO). J&J는 이 시점에도 Kenvue의 89.6%를 보유했다. 2단계: 2023년 8월 23일 교환 공모(Exchange Offer) — J&J 주주들이 J&J 주식을 Kenvue 주식으로 1.0533주 비율로 교환, J&J가 Kenvue 잔여 지분 전부를 처분하며 완전 분리가 완성됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "$410억 (Kenvue IPO 시총 기준)",
    acquirerName: "Johnson & Johnson",
    targetName: "Kenvue Inc.",
    announcedDisplay: "2021년 11월",
    closedDisplay: "2023년 8월 (교환 공모 완료)",
    country: "미국",
  },

  executiveSummary: [
    "역대 최대 헬스케어 소비재 분사 — Tylenol·Band-Aid·Listerine 등 150개+ 브랜드, 시총 $410억으로 독립",
    "2023년 미국 최대 IPO — Kenvue 2023년 5월 NYSE 상장, $38억 조달로 당해 최대 규모",
    "단계적 카브아웃 IPO + 교환 공모 — 부분 IPO 후 교환 공모로 완전 분리하는 2단계 구조",
    "탈크 소송 분리 — 베이비파우더 발암 소송 관련 법적 책임을 소비재 법인으로 분리 시도",
    "J&J 제약·MedTech 집중 — Darzalex·Stelara 등 제약, Intra-Cellular·Shockwave 등 M&A 가속",
    "Kenvue 주가 IPO 이후 공모가 하회 — 저성장 소비재 독립 기업의 성장 한계 노출",
    "멀티플 재평가 — J&J 분사 후 P/E 상승, 제약 순수 플레이어로 재평가 시작",
  ],

  industryOverview: {
    body: "2021년 글로벌 OTC(일반의약품)·소비자 헬스케어 시장은 약 $4,500억 규모였으며, 인구 고령화와 셀프케어(Self-care) 트렌드로 꾸준히 성장하고 있었다. 그러나 성장률은 연 3~5%로 제약(5~10%) 대비 낮았다. 반면 헬스케어 제약·MedTech 시장은 면역항암제·자가면역 치료제·수술 로봇 등 고성장 카테고리가 견인하며 연 8~12% 성장을 기록했다. 이 격차가 복합 헬스케어 기업의 분사 트렌드를 만들었다.",
    metrics: [
      { label: "글로벌 소비자 헬스케어 시장", value: "약 $4,500억", sub: "2021년 기준, 연 3~5% 성장" },
      { label: "글로벌 제약 시장", value: "약 $1.4조", sub: "2021년 기준, 연 8~12% 성장" },
      { label: "Kenvue IPO 조달 규모", value: "$38억", sub: "2023년 미국 최대 IPO" },
      { label: "Kenvue 시총 (IPO 시)", value: "$410억", sub: "2023년 5월 4일 NYSE 상장 기준" },
    ],
    subBody: "소비자 헬스케어(OTC·퍼스널케어)와 처방 제약은 고객층·유통망·마케팅 방식·성장률이 근본적으로 달라 한 기업에서 운영할 때 시너지보다 비효율이 크다는 인식이 확산됐다. J&J 외에도 Pfizer(GSK Consumer Healthcare 합작), Abbott(Kenvue와 유사한 분사)가 소비재 분리 트렌드를 이끌었다.",
    players: [
      { name: "Johnson & Johnson", role: "분사 주체, 제약·MedTech 집중" },
      { name: "Kenvue Inc.", role: "분사 대상, 소비재 독립 기업" },
      { name: "Procter & Gamble", role: "글로벌 소비재 경쟁사" },
      { name: "Haleon (GSK+Pfizer JV 분사)", role: "유사 구조 헬스케어 소비재 분사 사례" },
      { name: "Reckitt Benckiser", role: "글로벌 OTC·위생 소비재 경쟁사" },
    ],
  },

  companyOverview: {
    targetName: "J&J 소비재 사업부 (Kenvue 분사 전)",
    body: "Kenvue는 J&J의 소비재 헬스 사업부를 독립 법인화한 기업이다. Tylenol(진통제)·Band-Aid(상처 치료)·Listerine(구강 위생)·Neutrogena·Aveeno(스킨케어)·Johnson's Baby·Nicorette(금연)·Zyrtec(항히스타민) 등 150개 이상의 브랜드를 보유하고 있다. 60개국 이상에서 판매하며, 약 2만 2천 명의 직원이 근무한다. 분사 전 J&J 소비재 사업부의 연매출은 약 $145~148억 수준이었으며, EBITDA 마진은 약 19~20%였다.",
    metrics: [
      { label: "브랜드 수", value: "150개 이상", sub: "Tylenol, Band-Aid, Listerine 등" },
      { label: "연매출 (분사 전)", value: "약 $145~148억", sub: "2021~2022년 기준" },
      { label: "직원 수", value: "약 22,000명", sub: "60개국 이상 운영" },
      { label: "IPO 공모가", value: "$22 / 주", sub: "2023년 5월 4일 NYSE (KVU)" },
      { label: "IPO 시총", value: "$410억", sub: "2023년 미국 최대 IPO" },
    ],
    financials: [
      {
        year: "FY2021",
        revenue: 14500,
        cogs: 6500,
        grossProfit: 8000,
        sga: 4500,
        operatingIncome: 2000,
        ebitda: 2800,
      },
      {
        year: "FY2022",
        revenue: 14800,
        cogs: 6700,
        grossProfit: 8100,
        sga: 4600,
        operatingIncome: 2200,
        ebitda: 3000,
      },
    ],
    financialsNote: "단위: USD 백만(M). J&J 소비재 사업부(Kenvue 분사 전) 기준. 공개 보고서 기반 추정치 포함.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
  },

  dealStructure: {
    body: "분사는 2단계 카브아웃 IPO + 교환 공모 구조로 진행됐다. 1단계(2023년 5월): Kenvue가 NYSE에 IPO — J&J는 최대주주(89.6%)를 유지한 채 시장에서 가치를 먼저 검증받았다. 2단계(2023년 8월): J&J 주주들이 J&J 주식을 Kenvue 주식으로 교환(1J&J주 → 1.0533Kenvue주) — J&J는 Kenvue 잔여 지분 전부를 주주들에게 배분하며 완전 분리를 완성했다.",
    preOwnership: {
      nodes: [
        { id: "jj_parent", label: "Johnson & Johnson", sub: "NYSE 상장 (JNJ)", type: "acquirer" },
        { id: "consumer_div", label: "소비재 사업부 (Kenvue 前)", sub: "J&J 100% 보유, 내부 사업부", type: "target" },
        { id: "pharma_div", label: "제약 사업부 (Janssen)", sub: "J&J 100% 보유", type: "entity" },
        { id: "medtech_div", label: "MedTech 사업부", sub: "J&J 100% 보유", type: "entity" },
      ],
      edges: [
        { from: "jj_parent", to: "consumer_div", label: "100%" },
        { from: "jj_parent", to: "pharma_div", label: "100%" },
        { from: "jj_parent", to: "medtech_div", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "jj_post", label: "Johnson & Johnson", sub: "NYSE: JNJ (제약·MedTech 집중)", type: "acquirer" },
        { id: "kenvue", label: "Kenvue Inc.", sub: "NYSE: KVU (독립 상장, 2023.5)", type: "public" },
        { id: "jj_shareholders", label: "J&J 기존 주주", sub: "교환 공모로 Kenvue 지분 수령", type: "entity" },
      ],
      edges: [
        { from: "jj_post", to: "kenvue", label: "완전 분리 (2023.8)" },
        { from: "jj_shareholders", to: "kenvue", label: "교환 공모 수령" },
      ],
    },
    keyTerms: [
      { label: "Kenvue IPO 공모가", value: "$22 / 주 (NYSE: KVU)", accent: true },
      { label: "IPO 조달 규모", value: "$38억 (2023년 미국 최대 IPO)", accent: true },
      { label: "IPO 시총", value: "약 $410억", accent: false },
      { label: "J&J 보유 지분 (IPO 직후)", value: "89.6%", accent: false },
      { label: "교환 공모 비율", value: "J&J 1주 → Kenvue 1.0533주", accent: false },
      { label: "교환 공모 완료", value: "2023년 8월 23일 — 완전 분리", accent: true },
      { label: "EV / EBITDA", value: "약 14x (IPO 기준)", accent: false },
      { label: "Kenvue 브랜드", value: "Tylenol, Band-Aid, Listerine, Neutrogena 등 150개+", accent: false },
    ],
  },

  advisors: {
    body: "J&J는 Goldman Sachs를 재무 자문, Davis Polk를 법률 자문으로 선임해 분사 구조를 설계했다. Kenvue IPO는 Morgan Stanley가 주관했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "J&J (분사 주체)",
        initials: "J&J",
        bg: "bg-red-700",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "분사 구조 설계 및 교환 공모 자문" },
          { firm: "Davis Polk & Wardwell", role: "법률 자문", roleType: "legal", note: "Section 355 면세 구조 및 탈크 소송 분리 법률 총괄" },
        ],
      },
      {
        side: "target",
        sideLabel: "Kenvue (IPO 주관)",
        initials: "KVU",
        bg: "bg-rose-500",
        advisors: [
          { firm: "Morgan Stanley", role: "IPO 주관사 (Lead Underwriter)", roleType: "financial", note: "Kenvue NYSE IPO 주관, $38억 조달" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 SEC 공시 기반입니다.",
  },

  valuation: {
    body: "Kenvue IPO는 EV/EBITDA 약 14배에 가격이 형성됐다. 소비자 헬스케어 동종업계(Haleon, Reckitt 등) 평균 멀티플과 유사한 수준이었다. IPO 직후 시총 $410억은 J&J 전체 시총($4,300억)의 약 10%에 해당했다.",
    rows: [
      { item: "Kenvue IPO 공모가", val: "$22 / 주", note: "NYSE 상장, 2023년 5월 4일", accent: true },
      { item: "IPO 시총", val: "약 $410억", note: "2023년 미국 최대 IPO", accent: true },
      { item: "IPO 조달 규모", val: "$38억", note: "J&J 보유 지분 일부 공모" },
      { item: "EV / EBITDA", val: "약 14x", note: "IPO 기준, 소비자 헬스케어 평균 수준" },
      { item: "J&J 소비재 매출 (FY2022)", val: "$148억", note: "분사 전 사업부 기준" },
      { item: "소비재 EBITDA 마진", val: "약 20%", note: "안정적이나 저마진 구조" },
      { item: "교환 공모 기준 J&J 시총", val: "$4,300억+", note: "분사 후 J&J 제약·MedTech 집중 재평가" },
    ],
    disclaimer: "밸류에이션 수치는 공개 보도 및 SEC 공시 기반입니다. Kenvue IPO 이후 주가는 공모가 대비 하락했습니다.",
  },

  rationale: {
    buyer: {
      title: "J&J 분사 논리",
      initials: "J&J",
      bg: "bg-red-700",
      points: [
        "제약·MedTech 집중 — Darzalex·Stelara·Tremfya 등 고성장·고마진 제약 사업에 자원 집중",
        "멀티플 희석 해소 — 소비재 저성장이 제약 고성장 멀티플을 희석하는 구조 제거",
        "M&A 자유도 확보 — Intra-Cellular($14.6B)·Shockwave Medical($13.1B) 등 제약 M&A 가속",
        "탈크 법적 리스크 분리 — 베이비파우더 발암 소송 관련 법적 책임을 소비재 법인으로 분리",
        "투자자 선택권 제공 — 제약 성장주 vs 소비재 안정주로 투자자별 선호에 맞는 선택지 부여",
      ],
    },
    seller: {
      title: "Kenvue 독립 논리",
      initials: "KVU",
      bg: "bg-rose-500",
      points: [
        "독립 브랜드 전략 — Tylenol·Band-Aid 등 B2C 브랜드에 특화된 경영 전략 독자 추구",
        "자원 배분 자유 — J&J 제약과 자원 경쟁 없이 소비재 마케팅·혁신에 집중 투자",
        "독립 자본 구조 — 소비재 안정성에 맞는 배당 정책·자사주 매입 프로그램 독자 설계",
        "파트너십 자유 — J&J 제약과 이해충돌 없이 유통·마케팅 파트너십 독자 구축",
        "DTC(Direct-to-Consumer) 전략 집중 — 소비자 직접 연결 디지털 마케팅·이커머스 가속",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "분사 후 J&J는 제약 M&A를 가속화했다. 2024년 Intra-Cellular Therapeutics($14.6B, 정신질환 치료제)와 Shockwave Medical($13.1B, 심혈관 충격파 치료)을 인수하며 제약·MedTech 집중 전략을 실행했다. J&J 시총은 $4,500억+ 수준을 유지하며 분사 전보다 상승했다. 반면 Kenvue는 IPO 이후 주가가 공모가($22)를 지속적으로 하회했다. 저성장 소비재 사업의 독립 한계와 탈크 소송 관련 법적 불확실성이 주가를 억눌렀다. 탈크 소송은 여전히 법정 공방이 진행 중이다.",
    overallVerdict: "J&J 제약·MedTech 집중 전략 성공, Kenvue는 독립 후 성장 과제",
    positives: [
      "J&J 제약 M&A 가속 — Intra-Cellular·Shockwave 등 고성장 자산 집중 확보",
      "J&J 시총 유지·상승 — 분사 후 $4,500억+ 유지, 제약 순수 플레이어로 재평가",
      "Kenvue 독립 브랜드 운영 — 150개 브랜드 독자 DTC·이커머스 전략 추진",
      "2023년 미국 최대 IPO 성공 — $38억 조달, 소비재 헬스케어 독립 가치 시장 검증",
      "탈크 법적 구조 분리 — J&J 제약·MedTech 법인에서 탈크 소송 리스크 분리",
    ],
    risks: [
      "Kenvue 주가 공모가 하회 — IPO 후 $17~19 수준, 성장성 의구심 지속",
      "탈크 소송 법정 공방 — 책임 분리 시도를 법원이 일부 차단, 여전히 진행 중",
      "소비재 저성장 구조 — OTC 시장 연 3~4% 성장으로 고성장 기대 어려움",
      "Kenvue 독립 경영 학습 곡선 — J&J 인프라 없이 독자 IT·공급망·IR 구축 비용",
      "환율·원자재 비용 압박 — 글로벌 소비재 기업의 구조적 마진 압박",
    ],
    editorNote: "J&J-Kenvue 분사는 복합 헬스케어 기업의 멀티플 희석 해소 전략의 교과서다. 그러나 분사 후 Kenvue의 주가 부진은 저성장 소비재 사업이 독립 기업으로서 어떤 한계를 갖는지를 보여준다. J&J의 관점에서는 성공적인 전략이었지만, Kenvue 주주 입장에서는 IPO 이후 가치가 오히려 하락했다는 점이 단순히 '분사는 좋다'는 결론에 경고를 보낸다.",
  },

  tombstone: {
    acquirerInitials: "J&J",
    acquirerBg: "bg-red-700",
    targetInitials: "KVU",
    targetBg: "bg-rose-500",
    acquirerName: "Johnson & Johnson",
    targetName: "Kenvue Inc.",
    dealTitle: "역대 최대 헬스케어 소비재 분사 / Largest Healthcare Consumer Spinoff",
    dealSize: "$410억 (Kenvue IPO 시총)",
    dealSizeUSD: "USD 41B market cap at IPO",
    evEbitda: "약 14x EBITDA",
    closeDate: "Aug 2023",
  },

  sources: [
    { id: 1, text: "J&J Press Release — Johnson & Johnson Plans to Separate Consumer Health Business (November 2021)", url: "https://investor.jnj.com" },
    { id: 2, text: "Kenvue Form S-1 / IPO Prospectus (SEC Filing, 2023)", url: "https://www.sec.gov" },
    { id: 3, text: "Kenvue Exchange Offer Prospectus (Form S-4, August 2023)", url: "https://www.sec.gov" },
    { id: 4, text: "The Wall Street Journal — J&J Completes Kenvue Spinoff in Landmark Healthcare Deal (2023)" },
    { id: 5, text: "Bloomberg — Johnson & Johnson's Kenvue IPO Raises $3.8 Billion (May 2023)" },
    { id: 6, text: "Financial Times — Kenvue Becomes World's Largest Pure-Play Consumer Health Company (2023)" },
    { id: 7, text: "Reuters — J&J Completes Kenvue Separation via Exchange Offer (August 2023)" },
  ],

  seo: {
    title: "J&J-켄뷰 분사 완전 분석 — Tylenol·Band-Aid가 독립한 이유",
    description: "J&J-켄뷰 분사 완전 분석 — Tylenol·Band-Aid가 독립한 이유와 역대 최대 헬스케어 소비재 스핀오프. IPO 구조, 탈크 소송, 제약 집중 전략까지 심층 해부.",
    keywords: [
      "존슨앤존슨 켄뷰 분사",
      "Kenvue IPO",
      "JJ Kenvue spinoff",
      "헬스케어 소비재 분사",
      "탈크 소송 분리",
      "J&J 제약 집중",
      "카브아웃 IPO",
    ],
  },

  concepts: [
    { term: "카브아웃 IPO (Carve-out IPO)", href: "/deal-101/carve-out-ipo", description: "모회사가 자회사를 부분 IPO 후 점진적으로 분리하는 구조 — Kenvue가 택한 방식" },
    { term: "교환 공모 (Exchange Offer)", href: "/deal-101/exchange-offer", description: "모회사 주주가 모회사 주식을 자회사 주식으로 교환하는 방식으로 완전 분리 실현" },
    { term: "멀티플 희석 (Multiple Dilution)", href: "/deal-101/multiple-dilution", description: "고성장 제약과 저성장 소비재가 한 기업에 있을 때 투자자가 중간값 멀티플을 적용하는 현상" },
    { term: "스핀오프 (Spin-off)", href: "/deal-101/spinoff", description: "모회사가 사업부를 독립 기업으로 분리해 주주들에게 지분을 배분하는 구조조정 방식" },
  ],

  faq: [
    {
      q: "J&J가 Tylenol·Band-Aid 같은 상징적 브랜드를 왜 분사했나요?",
      a: "핵심 이유는 멀티플 희석(Multiple Dilution)입니다. Tylenol·Band-Aid는 연 2~3% 성장하는 안정적인 소비재 사업이지만, Darzalex·Stelara 같은 J&J 제약은 연 10~15% 성장하는 고마진 사업입니다. 두 사업이 한 기업에 있으면 투자자들이 중간값 멀티플을 적용해 J&J의 제약 가치가 저평가됩니다. 분사로 J&J는 제약·MedTech 고성장 멀티플을 온전히 받을 수 있게 됐습니다. 탈크 소송 관련 법적 리스크를 소비재 법인으로 분리하는 목적도 있었습니다.",
    },
    {
      q: "Kenvue IPO가 2023년 미국 최대 IPO였다는 게 맞나요?",
      a: "맞습니다. Kenvue는 2023년 5월 4일 NYSE에 상장(티커: KVU)하며 공모가 $22에 $38억을 조달했습니다. 시총 약 $410억으로 2023년 미국에서 가장 큰 IPO였습니다. J&J는 이 시점에도 Kenvue의 89.6%를 보유했고, 2023년 8월 23일 교환 공모를 통해 잔여 지분을 처분하며 완전 분리를 마쳤습니다.",
    },
    {
      q: "탈크(Talc) 소송과 Kenvue 분사는 어떤 관계인가요?",
      a: "J&J 베이비파우더에 포함된 탈크가 발암 물질이라는 수만 건의 소송이 소비재 사업부에 집중됐습니다. J&J는 탈크 관련 법적 책임을 분리 자회사에 귀속시키는 방식(Chapter 11 전략)을 시도했으나 법원이 일부 이를 차단했습니다. 피해자 단체는 J&J가 책임을 회피하기 위해 분사를 활용했다고 비판했습니다. 탈크 소송은 2024년 현재도 법정 공방이 진행 중입니다.",
    },
    {
      q: "Kenvue 분사 후 주가가 왜 공모가를 하회하나요?",
      a: "여러 구조적 요인이 있습니다. 첫째, 소비자 헬스케어는 연 3~4% 성장의 저성장 업종으로, 독립 기업으로서 고성장 투자자들의 관심을 끌기 어렵습니다. 둘째, 탈크 소송 불확실성이 지속되며 투자 심리를 억눌렀습니다. 셋째, J&J 인프라 없이 독자 IT·공급망·IR 비용이 증가했습니다. Kenvue는 150개 브랜드의 DTC·이커머스 전략으로 성장을 추구하고 있지만, 시장의 기대치 충족은 장기 과제로 남아 있습니다.",
    },
  ],

  restructuringOverview: {
    body: "J&J-Kenvue 분사는 복합 헬스케어 기업이 고성장 제약과 저성장 소비재를 분리해 각각의 최적 멀티플을 받도록 하는 구조조정의 전형입니다. 왜 분사가 필요했는지, 왜 카브아웃 IPO + 교환 공모 방식을 택했는지, 각 이해관계자에게 어떤 영향이 있었는지를 분석합니다.",
    trigger: "J&J 제약·MedTech 고성장 사업과 소비재 저성장 사업의 멀티플 희석",
    triggerDetail: "Tylenol·Band-Aid 같은 소비재는 안정적이지만 성장이 느리고 마진이 낮습니다. 반면 Darzalex(다발성골수종)·Stelara(자가면역) 등 제약과 수술 로봇 MedTech은 고성장·고마진입니다. 한 지붕 아래 있으면 제약 고성장 멀티플을 소비재가 희석합니다. 또한 탈크 베이비파우더 관련 암 소송이 소비재 사업에 집중됐고, 이를 법적으로 분리할 필요도 있었습니다.",
    method: "carve-out-ipo",
    methodLabel: "단계적 카브아웃 IPO + 교환 공모",
    whyThisMethod: "J&J 소비재 사업은 독립 운영 능력이 충분하지만, 완전한 주주 배분(면세 분사)보다 IPO 후 교환 공모 방식으로 진행한 이유는 탈크 소송 관련 법적 구조 분리, 시장에서 Kenvue의 독립 가치를 먼저 검증하기 위해서였습니다.",
    methodVsAlternatives: [
      {
        method: "즉각 면세 분사 (Section 355)",
        reason: "탈크 소송 관련 법적 책임 분리 구조를 먼저 정비해야 했고, IPO를 통한 시장 가치 검증이 필요했습니다.",
      },
      {
        method: "현금 매각",
        reason: "Tylenol·Band-Aid 등 상징적 브랜드를 제3자에게 매각하면 J&J 브랜드 자산 훼손 및 고객 신뢰 손상 위험이 있었습니다.",
      },
      {
        method: "소비재 사업부 유지",
        reason: "제약·소비재 멀티플 희석이 지속되며 J&J의 고성장 제약 자산이 시장에서 제대로 평가받지 못합니다.",
      },
    ],
    theoreticalInsights: [
      {
        concept: "멀티플 희석 (Multiple Dilution)",
        explanation: "고성장 제약(P/E 25~35x)과 저성장 소비재(P/E 18~22x)가 한 기업에 있으면 투자자들이 중간값 멀티플을 적용합니다.",
        howApplied: "J&J 분사 전 P/E 약 18~20x. 분사 후 J&J(제약·MedTech)는 P/E 24~28x로 상승. Kenvue는 소비재 P/E 18~22x를 독자적으로 받습니다.",
      },
      {
        concept: "단계적 분사 (Staged Spinoff)",
        explanation: "부분 IPO → 교환 공모 2단계 방식은 시장이 독립 기업의 가치를 충분히 평가할 시간을 확보하고, 모회사가 잔여 지분을 점진적으로 처분하는 전략입니다.",
        howApplied: "Kenvue는 2023년 5월 IPO로 시장 첫 검증을 받고, 3개월 후 J&J 주주들이 Kenvue 주식으로 교환하는 구조로 완전 분리됐습니다.",
      },
      {
        concept: "브랜드 분리 전략",
        explanation: "소비자 대상 브랜드(B2C)와 병원·제약사 대상 브랜드(B2B)는 마케팅·조직 구조가 근본적으로 달라 한 기업에서 운영하면 시너지보다 비효율이 커집니다.",
        howApplied: "Kenvue는 독립 후 Tylenol·Band-Aid 등 DTC(Direct-to-Consumer) 브랜드 전략에 집중하고, J&J는 병원·의사 대상 제약·수술 사업에 집중할 수 있게 됐습니다.",
      },
    ],
    executionSteps: [
      {
        phase: "Phase 1",
        date: "2021년 11월",
        action: "J&J 소비재 분사 공식 발표",
        detail: "J&J CEO Alex Gorsky가 소비재 헬스 사업부를 완전 독립 분사한다고 발표. 분사명 'Kenvue' 결정. 2023년 초 목표.",
        financialNote: "발표 당일 J&J 주가 +3%",
      },
      {
        phase: "Phase 2",
        date: "2023년 5월 4일",
        action: "Kenvue NYSE IPO (KVU)",
        detail: "Kenvue가 NYSE에 상장. 공모가 $22/주, 총 $38억 조달. J&J는 여전히 89.6% 보유한 채 최대주주 유지. 시총 약 $410억으로 2023년 미국 최대 IPO.",
        financialNote: "IPO 당일 시총 $410억",
      },
      {
        phase: "Phase 3",
        date: "2023년 8월 23일",
        action: "교환 공모 (Exchange Offer) 완료 — 완전 분리",
        detail: "J&J 주주들이 J&J 주식을 Kenvue 주식으로 1.0533주 비율로 교환. J&J는 Kenvue 잔여 지분 전부 처분. Kenvue 완전 독립 기업으로 출범.",
        financialNote: "J&J-Kenvue 완전 분리 완성",
      },
    ],
    stakeholders: [
      {
        name: "J&J 주주",
        icon: "💊",
        impact: "positive",
        summary: "Kenvue 주식 + J&J 제약 집중 수혜",
        detail: "교환 공모로 J&J 주식을 Kenvue로 전환하거나 J&J 주식을 그대로 보유 선택. J&J 제약·MedTech에 집중 투자 원하는 투자자에게 명확한 선택지 제공.",
        metric: "J&J 시총 분사 후 $4,000억+",
      },
      {
        name: "Kenvue 소비자",
        icon: "🏥",
        impact: "positive",
        summary: "독립 브랜드 전략 집중",
        detail: "Tylenol·Band-Aid·Listerine 등 브랜드가 J&J 제약 사업과 자원 경쟁 없이 독자 마케팅·혁신 투자를 받게 됩니다.",
        metric: "Kenvue 브랜드 150개+",
      },
      {
        name: "Kenvue 직원",
        icon: "👥",
        impact: "mixed",
        summary: "독립 기업 인센티브 vs 불확실성",
        detail: "독립 Kenvue 주식 인센티브를 받게 됐지만, 독립 후 주가가 IPO 가격을 하회해 스톡옵션 가치 약화. 조직 분리 과정에서 일부 구조조정 불가피.",
        metric: "Kenvue 직원 약 2만 2천 명",
      },
      {
        name: "탈크 소송 피해자",
        icon: "⚖️",
        impact: "mixed",
        summary: "소송 분리로 배상 책임 구조 복잡화",
        detail: "J&J가 탈크 소송 책임을 분리 자회사에 귀속시키려는 시도(Chapter 11 전략)를 법원이 일부 막았습니다. 피해자 단체는 J&J의 책임 회피 시도라고 비판.",
      },
      {
        name: "채권자",
        icon: "🏦",
        impact: "positive",
        summary: "독립 신용 프로파일",
        detail: "Kenvue와 J&J 각각 독립 신용등급. Kenvue는 소비재 안정성으로 투자등급 확보. J&J는 AAA 신용등급 유지.",
        metric: "Kenvue 투자등급 신용등급 확보",
      },
    ],
    beforeAfter: [
      {
        metric: "J&J 시가총액",
        before: "$4,300억 (분사 전)",
        after: "$4,500억+ (분사 후)",
        change: "+5%",
        isPositive: true,
      },
      {
        metric: "Kenvue 시총",
        before: "—",
        after: "$410억 (IPO 시)",
        change: "독립 상장",
        isPositive: true,
      },
      {
        metric: "J&J 제약 매출 비중",
        before: "53%",
        after: "65%+",
        change: "+12%p (소비재 제외)",
        isPositive: true,
      },
      {
        metric: "J&J EV/EBITDA",
        before: "약 15x",
        after: "약 18x",
        change: "+3x (제약 집중 재평가)",
        isPositive: true,
      },
      {
        metric: "Kenvue 주가 (IPO 후)",
        before: "$22 (공모가)",
        after: "$17~19 (1년 후)",
        change: "-15% (성장 과제)",
        isPositive: false,
      },
    ],
    marketImpact: {
      announcementReturn: "발표 당일 J&J +3%",
      shortTermReturn: "분사 후 6개월 J&J +8%",
      longTermReturn: "2024년 J&J 시총 $4,500억+ 유지",
      contextNote: "Kenvue는 IPO 이후 공모가 하회 — 저성장 소비재 사업의 독립 한계",
    },
  },
};

export default deal;
