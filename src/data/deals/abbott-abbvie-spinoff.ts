/**
 * Abbott / AbbVie 분사
 * Humira 하나로 $54B 가치를 만든 면세 스핀오프 — 2013년 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "abbott-abbvie-spinoff",
  title: "Abbott이 AbbVie를 분사한 이유 — Humira 하나로 $54B 제약 회사를 만든 면세 스핀오프",
  subtitle: "혁신신약 R&D 분리 · Humira 최고 매출 의약품 등극 · AbbVie 2023년 시총 $2,500억+",
  category: "restructuring",
  industry: "제약·바이오 / 의료기기",
  country: "미국",
  announcedAt: "2011-10-19",
  closedAt: "2013-01-01",
  announcedDisplay: "2011년 10월",
  closedDisplay: "2013년 1월",
  readingMinutes: 10,
  tags: ["Abbott", "AbbVie", "spinoff", "Humira", "pharma", "biologic", "R&D", "tax-free spinoff", "ABBV"],
  excerpt: "2013년 1월 Abbott이 AbbVie를 분사해 혁신신약 R&D 사업을 독립 상장사로 분리했다. 분사 시 AbbVie 시총 약 $54B, Abbott 시총 약 $52B. AbbVie의 핵심 자산인 Humira는 세계 최다 매출 의약품으로 성장해 연간 $20B+를 기록했다. AbbVie는 분사 이후 Imbruvica, Rinvoq, Skyrizi 등 파이프라인을 개발해 2023년 시총 $2,500억+를 달성했다.",

  acquirer: { initials: "ABT", bg: "bg-blue-700", label: "Abbott Laboratories" },
  target: { initials: "ABBV", bg: "bg-purple-600", label: "AbbVie Inc." },

  background: [
    "Abbott Laboratories는 130년 역사의 헬스케어 복합 기업으로, 의약품(혁신신약·제네릭), 의료기기, 영양제, 진단 기기를 모두 보유하고 있었다. 2000년대 Humira(아달리무맙)가 자가면역 질환 치료제로 폭발적으로 성장하면서 Abbott 매출의 25%+를 차지하게 됐다. 혁신 신약 R&D와 성숙 사업(의료기기, 영양제)의 성장 논리가 완전히 달랐다.",
    "2011년 10월 19일, Abbott CEO 마일스 화이트(Miles White)는 회사를 두 개로 분리한다고 발표했다. 혁신신약(Research-Based Pharmaceuticals) 사업은 AbbVie Inc.로 독립하고, 나머지(의료기기, 영양제, 진단, 확립 제네릭)는 Abbott으로 남기로 했다. 핵심은 Humira를 중심으로 한 생물의약품 R&D 역량을 독립 제약사로 재평가받게 하는 것이었다.",
    "분사 구조는 Section 355 면세 분사로 설계됐다. Abbott 주주들은 보유 Abbott 주식 1주당 AbbVie 주식 1주를 무상으로 수령했다. 2013년 1월 1일 분사가 완료됐고, AbbVie는 NYSE에 독립 상장(ABBV)됐다. 분사 시 AbbVie 시총은 약 $54B, Abbott 시총은 약 $52B으로, 두 회사 합산 가치가 분사 전 Abbott 단독 시총보다 높았다.",
    "분사 이후 AbbVie는 Humira에 이은 차세대 파이프라인을 적극 개발했다. 2015년 Pharmacyclics 인수($210억)로 Imbruvica(혈액암)를, 2020년 Allergan 인수($630억)로 Botox와 Juvederm을 추가했다. Humira 특허 만료(미국 2023년) 이후에도 Rinvoq, Skyrizi(자가면역) 등 후속 의약품으로 성장을 이어가며 2023년 시총은 $2,500억+에 달했다.",
  ],

  dealSummary: {
    dealValueDisplay: "분사 (주주 1주당 AbbVie 1주 무상 배분)",
    acquirerName: "Abbott Laboratories (분사 주체)",
    targetName: "AbbVie Inc. (분사)",
    announcedDisplay: "2011년 10월",
    closedDisplay: "2013년 1월",
    country: "미국",
  },

  executiveSummary: [
    "Abbott 주주 1주당 AbbVie 주식 1주 무상 배분 — Section 355 면세 분사",
    "분사 당시 AbbVie 시총 약 $54B, Abbott 시총 약 $52B — 합산 분사 전 Abbott 시총 초과",
    "핵심 자산: Humira — 자가면역 질환 치료제, 세계 최다 매출 의약품 등극 (피크 $21.2B/년)",
    "AbbVie 독립 후 성장: Pharmacyclics($210억), Allergan($630억) 인수로 파이프라인 강화",
    "AbbVie 2023년 시총 $2,500억+ — 분사가의 4.6배",
    "제약사 분사의 교과서 — 혁신신약 R&D를 독립 제약사로 재평가받게 한 전략",
  ],

  industryOverview: {
    body: "2011년 글로벌 제약 시장은 바이오로직스(생물의약품)와 소분자 화학약물로 양분됐다. Humira와 같은 생물의약품은 높은 가격과 강력한 특허 보호로 막대한 수익을 창출했다. 그러나 기존 제약 대형사들은 다각화된 사업 구조로 인해 혁신 제약 사업의 진짜 가치를 시장에서 충분히 인정받지 못했다. 분리 상장이 이 문제를 해결하는 트렌드가 됐다.",
    metrics: [
      { label: "Humira 피크 연간 매출", value: "$21.2B", sub: "2022년, 세계 최다 매출 의약품" },
      { label: "분사 당시 AbbVie 시총", value: "약 $54B", sub: "2013년 1월" },
      { label: "AbbVie 2023년 시총", value: "$2,500억+", sub: "분사의 4.6배 성장" },
      { label: "글로벌 자가면역 치료제 시장", value: "약 $900억+", sub: "2022년 기준" },
    ],
    subBody: "생물의약품 분사는 독립 제약사 멀티플(EV/EBITDA 15~20×)을 받을 수 있어 복합 헬스케어 기업 내에 있을 때보다 훨씬 높은 기업가치를 형성했다. AbbVie는 이 트렌드의 가장 성공적인 사례 중 하나다.",
    players: [
      { name: "Humira (아달리무맙)", role: "자가면역 질환 생물의약품, AbbVie 핵심 자산" },
      { name: "Johnson & Johnson", role: "동일 시기 비슷한 포트폴리오 분리 추진" },
      { name: "Pfizer", role: "생물의약품 경쟁자, Biosimilar 출시로 Humira 위협" },
      { name: "Allergan", role: "AbbVie가 2020년 $630억에 인수한 Botox 전문 기업" },
    ],
  },

  companyOverview: {
    targetName: "AbbVie Inc.",
    body: "AbbVie는 Abbott의 혁신신약 R&D 사업에서 분리된 글로벌 제약사다. 분사 시 핵심 자산은 류마티스 관절염·건선·크론병 등 자가면역 질환 치료제 Humira였다. 이후 혈액암 치료제 Imbruvica, 자가면역 질환 치료제 Rinvoq·Skyrizi, 미용 시술 Botox(Allergan 인수)로 포트폴리오를 다각화했다.",
    metrics: [
      { label: "분사 시 시총", value: "약 $54B", sub: "2013년 1월" },
      { label: "NYSE 상장", value: "ABBV", sub: "2013년 1월 독립 상장" },
      { label: "2022년 매출", value: "약 $580억", sub: "Allergan 인수 통합 효과" },
      { label: "Humira 피크 매출", value: "$21.2B/년", sub: "2022년 기준" },
    ],
    financials: [
      { year: "FY2013", revenue: 18790, cogs: 4500, grossProfit: 14290, sga: 5200, operatingIncome: 5940, ebitda: 7000 },
      { year: "FY2014", revenue: 19960, cogs: 4800, grossProfit: 15160, sga: 5500, operatingIncome: 6400, ebitda: 7600 },
      { year: "FY2015", revenue: 22859, cogs: 5500, grossProfit: 17359, sga: 6200, operatingIncome: 7100, ebitda: 8500 },
    ],
    financialsNote: "단위: USD 백만(M). AbbVie 분사 이후 독립 공시 기준.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "Humira", pct: 60, color: "bg-purple-600", amt: "약 $135억 (FY2015)" },
      { name: "기타 혁신 의약품", pct: 30, color: "bg-purple-400", amt: "약 $68억" },
      { name: "로열티·기타", pct: 10, color: "bg-purple-200", amt: "약 $23억" },
    ],
  },

  dealStructure: {
    body: "Abbott은 AbbVie를 Section 355 면세 분사로 분리했다. Abbott 주주들은 보유 Abbott 주식 1주당 AbbVie 주식 1주를 무상으로 수령했다. AbbVie는 2013년 1월 1일 NYSE(ABBV)에 독립 상장됐다.",
    preOwnership: {
      nodes: [
        { id: "abbott_parent", label: "Abbott Laboratories", sub: "NYSE 상장 (ABT)", type: "acquirer" },
        { id: "abbvie_sub", label: "AbbVie (혁신신약 R&D)", sub: "Abbott 내 혁신신약 사업부", type: "target" },
      ],
      edges: [
        { from: "abbott_parent", to: "abbvie_sub", label: "100% 소유" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "abbott_post", label: "Abbott Laboratories", sub: "의료기기·영양제·진단 중심", type: "acquirer" },
        { id: "abbvie_post", label: "AbbVie Inc.", sub: "NYSE 독립 상장 (ABBV)", type: "target" },
      ],
      edges: [
        { from: "abbott_post", to: "abbvie_post", label: "분사 완료 (독립)" },
      ],
    },
    keyTerms: [
      { label: "분사 방식", value: "Section 355 면세 분사", accent: true },
      { label: "배분 비율", value: "Abbott 1주당 AbbVie 1주", accent: false },
      { label: "분사 당시 AbbVie 시총", value: "약 $54B", accent: true },
      { label: "분사 당시 Abbott 시총", value: "약 $52B", accent: false },
      { label: "완료일", value: "2013년 1월 1일", accent: false },
    ],
  },

  advisors: {
    body: "분사 과정에서 재무·법률·세무 자문사들이 참여했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "분사 주체 (Abbott)",
        initials: "ABT",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "분사 구조 설계" },
          { firm: "Cravath Swaine & Moore", role: "법률 자문", roleType: "legal", note: "분사 법률 및 Section 355 구조" },
        ],
      },
      {
        side: "target",
        sideLabel: "분사 법인 (AbbVie)",
        initials: "ABBV",
        bg: "bg-purple-600",
        advisors: [
          { firm: "Morgan Stanley", role: "재무 자문 (FA)", roleType: "financial", note: "독립 상장 지원" },
          { firm: "Sidley Austin", role: "법률 자문", roleType: "legal", note: "독립 법인 설립 자문" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반입니다.",
  },

  valuation: {
    body: "분사 당시 AbbVie는 FY2013 매출 약 $188억 대비 약 3배의 EV/Revenue 멀티플로 평가됐다. 이후 Humira의 피크 매출 성장과 파이프라인 확장으로 밸류에이션이 폭발적으로 성장했다.",
    rows: [
      { item: "분사 당시 AbbVie 시총", val: "$54B", note: "2013년 1월", accent: true },
      { item: "FY2013 매출", val: "$18.8B", note: "분사 첫 해" },
      { item: "EV/매출 (분사 시점)", val: "약 3×", note: "제약사 멀티플 적용" },
      { item: "Humira 피크 연간 매출", val: "$21.2B (2022)", note: "세계 최다 매출 의약품", accent: true },
      { item: "AbbVie 2023년 시총", val: "$2,500억+", note: "분사 대비 4.6배", accent: true },
    ],
    disclaimer: "밸류에이션 수치는 공개 공시 및 시장 데이터 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "Abbott 분사 논리",
      initials: "ABT",
      bg: "bg-blue-700",
      points: [
        "밸류에이션 분리 — 혁신신약 R&D(높은 멀티플)와 의료기기·영양제(낮은 멀티플) 분리",
        "경영 집중 — Abbott은 의료기기·진단·영양제에, AbbVie는 생물의약품 R&D에 집중",
        "Humira 가치 극대화 — 독립 제약사로서 Humira의 진짜 가치 시장에서 인정받게 함",
        "자본 배분 최적화 — 각 사업의 성장 단계에 맞는 별도 자본·배당 정책",
        "투자자 기반 다양화 — 헬스케어 투자자와 제약 전문 투자자를 각각 유치",
      ],
    },
    seller: {
      title: "AbbVie 분사의 논리",
      initials: "ABBV",
      bg: "bg-purple-600",
      points: [
        "독립 제약사 멀티플 — Abbott 산하 대비 높은 독립 바이오파마 멀티플 획득",
        "파이프라인 투자 자유 — 독립 후 공격적 R&D·M&A 추진 가능",
        "경영진 인센티브 — 혁신신약 성과에 집중된 인센티브 구조",
        "Humira 집중 전략 — 특허 만료 대비 차세대 파이프라인 개발에 전사 역량 집중",
        "임상 파트너십 확대 — 독립 상장사로서 바이오텍·학술기관과 자유로운 협력",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "분사 이후 AbbVie는 대형 M&A를 통해 성장했다. 2015년 Pharmacyclics(Imbruvica) $210억 인수와 2020년 Allergan(Botox, Juvederm) $630억 인수가 핵심이었다. Humira는 미국 특허가 2023년 만료됐지만, 그 사이 Rinvoq(우파다시티닙)과 Skyrizi(리산키주맙)이 성장해 수익을 보완했다. Abbott도 분사 이후 의료기기·진단 집중 전략으로 안정적 성장을 이어갔다.",
    overallVerdict: "제약사 분사의 역대급 성공 사례",
    positives: [
      "AbbVie 시총 $54B → $2,500억+ — 10년간 4.6배 성장",
      "Humira 세계 최다 매출 의약품 등극 ($21.2B 피크) — 분사 후 독립 성장",
      "Pharmacyclics + Allergan 인수 — 파이프라인과 미용 사업으로 다각화",
      "Rinvoq + Skyrizi — Humira 특허 만료 이후 성장 유지",
      "Abbott도 의료기기·진단 집중으로 안정 성장",
    ],
    risks: [
      "Humira 바이오시밀러 위협 — 특허 만료 후 유럽·미국 시장 점유율 잠식",
      "Allergan 고가 인수 논란 — $630억 부채 부담",
      "파이프라인 R&D 위험 — 임상 실패 가능성 항시 존재",
      "의약품 가격 규제 위험 — 미국 IRA·유럽 가격 협상 압박",
    ],
    editorNote: "Abbott-AbbVie 분사는 '혁신신약 R&D는 독립 제약사로 있을 때 더 빠르게 성장한다'는 명제를 증명했다. Humira 하나를 중심으로 형성된 $54B 회사가 10년 안에 $2,500억+가 됐다. 핵심은 독립 이후의 공격적 파이프라인 투자와 M&A였다 — Abbott 산하에서는 의료기기·영양제 사업과의 자원 경쟁으로 이 속도가 불가능했을 것이다.",
  },

  tombstone: {
    acquirerInitials: "ABT",
    acquirerBg: "bg-blue-700",
    targetInitials: "ABBV",
    targetBg: "bg-purple-600",
    acquirerName: "Abbott Laboratories",
    targetName: "AbbVie Inc.",
    dealTitle: "Section 355 면세 분사",
    dealSize: "시총 $54B (분사 시점)",
    dealSizeUSD: "USD 54B market cap at spinoff",
    evEbitda: "약 8× (분사 시점)",
    closeDate: "Jan 2013",
  },

  sources: [
    { id: 1, text: "Abbott Laboratories Press Release — Abbott Plans to Separate Into Two Leading Companies (October 2011)", url: "https://investor.abbott.com" },
    { id: 2, text: "AbbVie Form 10 Registration Statement (2012)", url: "https://www.sec.gov" },
    { id: 3, text: "AbbVie FY2022 Annual Report — Humira Peak Revenue and Pipeline Update", url: "https://investor.abbvie.com" },
    { id: 4, text: "Bloomberg — AbbVie Completes $21B Pharmacyclics Acquisition (May 2015)" },
    { id: 5, text: "The Wall Street Journal — AbbVie to Buy Allergan for $63 Billion (June 2019)" },
    { id: 6, text: "Reuters — Abbott Completes Separation of Pharmaceutical Business (January 2013)" },
    { id: 7, text: "CNBC — AbbVie Surpasses Humira Patent Cliff with Rinvoq and Skyrizi (2023)" },
    { id: 8, text: "FiercePharma — How AbbVie Became a $250B Pharma Giant (2023)" },
  ],

  seo: {
    title: "Abbott AbbVie 분사 완전 분석 — Humira로 $54B를 만든 제약사 스핀오프",
    description: "Abbott의 AbbVie 분사 완전 분석. Section 355 면세 구조, Humira 가치 극대화 전략, 분사 후 파이프라인 성장과 Allergan 인수까지 심층 해부.",
    keywords: ["Abbott AbbVie 분사", "AbbVie spinoff", "Humira 가치", "제약사 스핀오프", "Section 355 면세 분사", "ABBV 상장", "바이오파마 분사"],
  },

  concepts: [
    { term: "스핀오프 (Spin-off)", href: "/deal-101/spinoff", description: "혁신신약 R&D 사업을 독립 제약사로 분리해 시장에서 제대로 된 멀티플을 받게 한 Abbott-AbbVie 분사" },
    { term: "전략적 M&A (Strategic M&A)", href: "/deal-101/strategic-ma", description: "분사 이후 Pharmacyclics($210억) + Allergan($630억) 인수로 파이프라인을 빠르게 강화한 AbbVie" },
    { term: "경쟁 해자 (Competitive Moat)", href: "/deal-101/competitive-moat", description: "Humira의 특허 해자와 자가면역 치료제 브랜드 — AbbVie 독립 성장의 기반" },
    { term: "EV/EBITDA", href: "/deal-101/ev-ebitda", description: "혁신 제약사의 높은 EBITDA 마진과 멀티플 — Abbott 복합 기업 대비 독립 제약사의 밸류에이션 프리미엄" },
  ],

  faq: [
    {
      q: "Abbott은 왜 수익성 좋은 Humira 사업을 분사했나요?",
      a: "Humira를 분사한 것이 아니라, Humira를 포함한 혁신신약 R&D 전체를 AbbVie로 독립시킨 것입니다. 이유는 밸류에이션 분리입니다. 혁신신약 R&D는 높은 EBITDA 마진과 성장성으로 독립 제약사 멀티플(EV/EBITDA 15~20×)을 받을 수 있지만, Abbott 같은 복합 헬스케어 기업 안에서는 낮은 멀티플을 적용받습니다. 분사로 각 사업이 적합한 멀티플을 받게 됩니다.",
    },
    {
      q: "AbbVie의 Humira는 어떤 의약품이고 왜 그렇게 성공했나요?",
      a: "Humira(아달리무맙)는 TNF-α를 억제하는 생물의약품으로 류마티스 관절염, 건선성 관절염, 크론병, 궤양성 대장염 등 자가면역 질환 치료에 쓰입니다. 성공 요인: 첫째, 다양한 적응증으로 시장이 매우 넓습니다. 둘째, 생물의약품 특성상 화학 제네릭과 달리 바이오시밀러 진입이 더 복잡해 특허 보호 기간이 길었습니다. 셋째, AbbVie의 공격적 마케팅과 적응증 확대로 피크 연간 $21.2B의 전례 없는 매출을 달성했습니다.",
    },
    {
      q: "Humira 특허가 만료된 후 AbbVie는 어떻게 됐나요?",
      a: "AbbVie는 특허 만료('바이오시밀러 절벽')에 대비해 Rinvoq(우파다시티닙, JAK억제제)과 Skyrizi(리산키주맙, IL-23억제제)를 개발했습니다. 2023년 Humira 미국 특허 만료 후 바이오시밀러가 출시됐지만, Rinvoq+Skyrizi 합산 매출이 Humira 감소분을 빠르게 보완했습니다. 또한 2020년 Allergan($630억) 인수로 Botox, Juvederm 등 미용 사업을 추가해 포트폴리오를 다각화했습니다.",
    },
    {
      q: "이 분사가 성공적인 이유를 한마디로 설명하면?",
      a: "분사 후 자유로워진 M&A와 R&D 투자입니다. Abbott 산하에서는 의료기기·영양제 사업과 자원 경쟁을 해야 했습니다. AbbVie는 독립 후 Pharmacyclics($210억, Imbruvica)와 Allergan($630억, Botox)을 인수하며 파이프라인을 폭발적으로 확장했습니다. 이 두 인수는 Abbott 같은 복합 기업에서는 이사회의 자원 배분 논쟁으로 실행이 훨씬 느렸을 것입니다.",
    },
    {
      q: "Abbott은 분사 이후 어떻게 됐나요?",
      a: "Abbott는 AbbVie 분사 이후 의료기기(스텐트, 연속혈당측정기 FreeStyle Libre), 진단(코로나19 신속검사로 팬데믹 수혜), 영양제(Ensure, Similac), 확립 제약(개발도상국 제네릭)에 집중했습니다. 의료기기·진단 사업은 꾸준히 성장해 2023년 시총은 $1,800억대를 유지하고 있습니다. AbbVie와 Abbott 두 회사 합산 시총은 2011년 분사 결정 당시 Abbott 단독 시총의 5배 이상이 됐습니다.",
    },
  ],
};

export default deal;
