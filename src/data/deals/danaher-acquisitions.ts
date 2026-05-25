/**
 * Danaher의 연속 인수 전략 — DBS로 쌓아올린 $80B+ 산업·의료 제국
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "danaher-acquisitions",
  title: "Danaher는 어떻게 연속 인수로 $80B 제국을 만들었나 — DBS와 산업 분리의 교과서",
  subtitle: "Danaher Business System · 연속 M&A 전략 · Beckman Coulter · Cytiva · GE Biopharma",
  category: "ma",
  industry: "생명과학 / 의료기기 / 산업 기술",
  country: "미국",
  announcedAt: "2011-06-30",
  closedAt: "2020-03-31",
  announcedDisplay: "2011년 (Beckman Coulter) ~ 2020년 (Cytiva)",
  closedDisplay: "복수 딜 (최대 2020년 3월 Cytiva)",
  readingMinutes: 12,
  tags: ["Danaher", "DBS", "Danaher Business System", "연속 M&A", "Beckman Coulter", "Cytiva", "GE Biopharma", "생명과학", "린 경영"],
  excerpt: "Danaher는 1984년부터 Danaher Business System(DBS)을 기반으로 100개 이상의 기업을 인수·통합하며 세계 최대 생명과학·의료기기 기업 중 하나로 성장했다. 핵심 인수로는 Beckman Coulter($6.8B, 2011), Pall Corporation($13.8B, 2015), GE의 Life Sciences 사업부(Cytiva, $21.4B, 2020)가 있다.",

  acquirer: { initials: "DHR", bg: "bg-blue-900", label: "Danaher Corporation" },
  target: { initials: "LIFE", bg: "bg-cyan-600", label: "Beckman Coulter / Pall Corp / Cytiva 外" },

  background: [
    "Danaher는 1969년 DMG(Diversified Mortgage & Guaranty)로 시작해 1984년 형제 Mitchell Rales와 Steven Rales에 의해 현재 이름으로 재편됐다. 이들은 토요타 생산 방식(TPS)에서 영감을 받아 Danaher Business System(DBS)을 개발했다. DBS는 린(Lean) 제조·프로세스 개선·지속적 혁신을 핵심으로 하는 경영 시스템으로, 인수 기업의 운영 효율을 극적으로 개선하는 데 적용된다.",
    "Danaher의 M&A 전략은 명확하다. ①견고한 시장 지위를 가진 산업용·과학용 기기 기업 선별 ②DBS 적용으로 마진 개선 ③추가 인접 시장 M&A로 플랫폼 확장. 이를 1984년부터 지속적으로 반복하며 100개 이상의 기업을 인수했다. 주요 인수: Fluke Corporation(1998), Tektronix(2007), Beckman Coulter(2011), Pall Corp(2015), Cepheid(2016), GE Life Sciences→Cytiva(2020).",
    "가장 중요한 인수는 세 가지다. ①Beckman Coulter($6.8B, 2011): 임상 진단 장비 세계 1위. Danaher의 생명과학 플랫폼의 핵심 기둥이 됐다. ②Pall Corporation($13.8B, 2015): 여과·분리·정제 기술 세계 1위. 생명공학·제약 제조에 필수적인 필터 기술 보유. ③GE Life Sciences(Cytiva, $21.4B, 2020): 바이오의약품 연구개발·제조 장비 시장 선두. COVID-19 백신 개발에 핵심적 역할.",
    "2016년 Danaher는 스스로 분리(spinoff)를 실행했다. 산업 분야 사업부를 Fortive Corporation으로 분사해 생명과학·의료 기기에 집중했다. 2019년에는 환경·응용 솔루션 사업부를 분사해 독립 상장 기업 Veralto를 만들었다. 분사 후 Danaher는 생명과학·임상 진단 전문 기업으로 집중됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "복수 딜: Beckman Coulter $6.8B + Pall Corp $13.8B + Cytiva $21.4B 외 다수",
    acquirerName: "Danaher Corporation",
    targetName: "Beckman Coulter / Pall Corporation / GE Life Sciences(Cytiva) 外",
    announcedDisplay: "1984년~현재 (연속 M&A 전략)",
    closedDisplay: "복수 딜 (최대 2020년 3월 Cytiva)",
    country: "미국",
  },

  executiveSummary: [
    "DBS(Danaher Business System): 도요타 린 경영 기반 — 인수 기업 운영 효율 극적 개선의 핵심",
    "1984년 이후 100개+ 기업 인수 — 세계 최대 '연속 M&A' 산업 기업의 교과서",
    "3대 메가딜: Beckman Coulter $6.8B(2011) + Pall Corp $13.8B(2015) + Cytiva $21.4B(2020)",
    "2016년 Fortive 분사 + 2019년 Veralto 분사 — 핵심 생명과학 집중 전략",
    "시총 $30B(2010년) → $200B+(2021년) — 10년간 7배+ 성장",
    "Cytiva의 코로나19 백신 제조 핵심 역할 — 2020~2021년 최대 수혜 기업",
  ],

  industryOverview: {
    body: "생명과학 기기·시약 시장은 연간 $80B+ 규모로, 의약품 연구개발·제조의 필수 인프라를 제공한다. COVID-19 팬데믹으로 2020~2022년 바이오의약품 제조 장비 수요가 급증했다. Danaher는 이 시장에서 Cytiva(바이오제조), Beckman Coulter(임상 진단), Pall(여과·정제) 등으로 핵심 포트폴리오를 구성했다.",
    metrics: [
      { label: "생명과학 기기 시장 규모", value: "$80B+", sub: "글로벌 연간 (2022년)" },
      { label: "Danaher 시가총액", value: "$200B+", sub: "2021년 정점" },
      { label: "누적 인수 기업 수", value: "100개+", sub: "1984년 이후" },
      { label: "핵심 3대 딜 합산", value: "$42B", sub: "Beckman+Pall+Cytiva 3대 메가딜" },
    ],
    players: [
      { name: "Thermo Fisher Scientific", role: "생명과학 기기·시약 최대 경쟁사" },
      { name: "Agilent Technologies", role: "분석 기기·생명과학 시약" },
      { name: "Mettler-Toledo", role: "정밀 계측 기기" },
      { name: "Waters Corporation", role: "크로마토그래피·질량분석기" },
    ],
  },

  companyOverview: {
    targetName: "Danaher 인수 포트폴리오 (대표: Cytiva)",
    body: "Cytiva(구 GE Life Sciences)는 바이오의약품 연구개발·제조에 필수적인 크로마토그래피 레진, 바이오리액터, 여과 시스템 등을 공급한다. Amgen, Pfizer, Moderna 등 거의 모든 주요 바이오제약사가 Cytiva 제품으로 의약품을 생산한다. COVID-19 mRNA 백신 제조에도 Cytiva 바이오리액터·여과 시스템이 핵심 역할을 했다.",
    metrics: [
      { label: "Cytiva 연매출 (2020년)", value: "~$3.3B", sub: "GE에서 분리 직후" },
      { label: "Cytiva 인수가", value: "$21.4B", sub: "Danaher 최대 단일 인수" },
      { label: "Beckman Coulter 연매출", value: "~$3B", sub: "임상 진단 세계 1위" },
      { label: "Pall Corp 연매출", value: "~$2.6B", sub: "여과·분리·정제 세계 1위" },
    ],
    financials: [
      { year: "FY2018", revenue: 19893, cogs: 8500, grossProfit: 11393, sga: 5000, operatingIncome: 3600, ebitda: 4800 },
      { year: "FY2019", revenue: 17914, cogs: 7700, grossProfit: 10214, sga: 4500, operatingIncome: 3200, ebitda: 4300 },
      { year: "FY2020", revenue: 22284, cogs: 9100, grossProfit: 13184, sga: 5200, operatingIncome: 4400, ebitda: 5900 },
    ],
    financialsNote: "단위: USD 백만. Danaher 연결 재무제표 기반. FY2019는 Fortive 분사 후 기준.",
    financialsCurrency: "USD",
    financialsUnit: "million",
    revenueBreakdown: [
      { name: "생명공학 (Cytiva·Pall·SCIEX)", pct: 60, color: "bg-cyan-600", amt: "~$13.4B (FY2020)" },
      { name: "임상 진단 (Beckman Coulter)", pct: 28, color: "bg-cyan-400", amt: "~$6.2B" },
      { name: "환경·기타", pct: 12, color: "bg-cyan-200", amt: "~$2.7B" },
    ],
  },

  dealStructure: {
    body: "Danaher는 모든 인수에서 일관된 패턴을 유지한다. ①시장 선도 기업을 현금 또는 주식 혼합으로 인수 ②DBS 적용으로 1~3년 내 마진 개선 ③추가 인접 인수로 플랫폼 확장 ④필요 시 사업부 분사로 집중도 유지.",
    preOwnership: {
      nodes: [
        { id: "dhr", label: "Danaher Corporation", sub: "NYSE: DHR", type: "acquirer" },
        { id: "target1", label: "Beckman Coulter / Pall / Cytiva 外", sub: "개별 독립 기업", type: "target" },
      ],
      edges: [
        { from: "dhr", to: "target1", label: "현금 인수 → DBS 통합" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "dhr_post", label: "Danaher Corporation", sub: "생명과학·진단 집중", type: "acquirer" },
        { id: "cytiva", label: "Cytiva (GE Life Sciences)", sub: "최대 단일 인수 ($21.4B)", type: "target" },
        { id: "fortive", label: "Fortive Corporation", sub: "2016년 분사 독립 상장", type: "entity" },
      ],
      edges: [
        { from: "dhr_post", to: "cytiva", label: "100% 소유" },
        { from: "dhr_post", to: "fortive", label: "2016년 스핀오프" },
      ],
    },
    keyTerms: [
      { label: "Beckman Coulter 인수", value: "$6.8B (2011년)", accent: false },
      { label: "Pall Corporation 인수", value: "$13.8B (2015년)", accent: false },
      { label: "GE Life Sciences(Cytiva) 인수", value: "$21.4B (2020년)", accent: true },
      { label: "Fortive 분사", value: "2016년, 시총 $15B+", accent: false },
      { label: "DBS", value: "Danaher Business System — 린 경영 기반 가치 창출 엔진", accent: true },
    ],
  },

  advisors: {
    body: "Danaher는 각 딜마다 Goldman Sachs, JP Morgan 등 주요 투자은행을 기용했다. 특히 Cytiva($21.4B) 딜에서는 GE와의 복잡한 협상을 위해 다수의 자문사가 참여했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "인수자 (Danaher)",
        initials: "DHR",
        bg: "bg-blue-900",
        advisors: [
          { firm: "Goldman Sachs", role: "재무자문 (FA, 복수 딜)", roleType: "financial", note: "Cytiva·Pall 등 메가딜 자문" },
          { firm: "Skadden Arps", role: "법률자문", roleType: "legal", note: "M&A 계약 및 규제 대응" },
        ],
      },
      {
        side: "target",
        sideLabel: "피인수자 (GE — Cytiva 딜 대표)",
        initials: "GE",
        bg: "bg-cyan-600",
        advisors: [
          { firm: "JP Morgan", role: "재무자문 (FA)", roleType: "financial", note: "GE Life Sciences 매각 자문" },
          { firm: "Shearman & Sterling", role: "법률자문", roleType: "legal", note: "GE 측 법률 지원" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 자료 기반. 복수 딜로 자문사는 딜마다 상이.",
  },

  valuation: {
    body: "Danaher는 각 인수에서 시장 선도 기업에 대한 '제어 프리미엄'을 지불하지만, DBS 적용으로 인수 후 마진을 개선해 ROI를 달성하는 구조다. Cytiva의 $21.4B는 GE Life Sciences FY2019 매출 ~$3.3B 대비 EV/Revenue ~6.5×였다.",
    rows: [
      { item: "Beckman Coulter 인수가", val: "$6.8B (2011)", note: "임상 진단 세계 1위", accent: false },
      { item: "Pall Corporation 인수가", val: "$13.8B (2015)", note: "여과·정제 세계 1위", accent: false },
      { item: "Cytiva (GE Life Sciences) 인수가", val: "$21.4B (2020)", note: "바이오제조 세계 1위", accent: true },
      { item: "Danaher 시총 변화", val: "$30B(2010) → $200B+(2021)", note: "연속 M&A의 복리 효과", accent: true },
      { item: "DBS 마진 개선 효과", val: "인수 후 1~3년 내 EBITDA 마진 +5~10%p", note: "린 경영 적용 효과" },
    ],
    disclaimer: "재무 지표는 공개 자료 기반 추정.",
  },

  rationale: {
    buyer: {
      title: "Danaher의 연속 인수 논리 (DBS 모델)",
      initials: "DHR",
      bg: "bg-blue-900",
      points: [
        "DBS(Danaher Business System): 인수 기업에 린 경영 적용 → EBITDA 마진 구조적 개선",
        "시장 선도 기업 선별: 구조적으로 방어 가능한 1~2위 기업만 인수",
        "플랫폼 구축: 단일 인수가 아닌 생명과학 생태계 전체를 수직·수평 통합",
        "주기적 분사(Fortive·Veralto): 핵심 사업 집중, 저성장 사업부 분리로 멀티플 향상",
        "DBS DNA 전이: 각 인수 기업에 DBS 문화를 이식해 그 회사도 '작은 Danaher'가 됨",
      ],
    },
    seller: {
      title: "각 피인수 기업(대표: GE)의 매각 논리",
      initials: "GE",
      bg: "bg-cyan-600",
      points: [
        "GE Life Sciences: GE 구조조정 일환 — 비핵심 사업 매각으로 부채 감축",
        "Danaher의 생명과학 플랫폼 시너지 — 독립 사업부보다 더 빠른 성장 가능",
        "21.4B 인수 프리미엄 — GE 부채 상환 자금 조달",
        "Pall·Beckman 이전 인수에서 검증된 DBS 통합 역량 — 신뢰할 수 있는 인수자",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Cytiva는 2020~2021년 COVID-19 백신(mRNA·바이러스 벡터) 제조의 핵심 인프라로 수요가 폭발했다. Danaher FY2021 매출은 $29.5B으로 전년 대비 32% 성장했다. 2022년 팬데믹 수요 정상화 후 매출이 조정됐지만, 바이오의약품 제조 확대 트렌드는 지속됐다. 2023년 CEO Rainer Blair 체제에서도 DBS 기반 연속 인수 전략을 유지 중이다.",
    overallVerdict: "연속 M&A 전략의 최고 성공 사례 — DBS로 100개+ 기업 통합",
    positives: [
      "시총 $30B(2010) → $200B+(2021) — DBS 모델의 복리 가치 창출",
      "Cytiva: COVID-19 백신 제조 핵심 역할 — 팬데믹 특수로 급성장",
      "Fortive·Veralto 분사 성공 — 핵심 생명과학 집중으로 밸류에이션 상승",
      "100개+ 인수 중 대형 실패 사례 없음 — DBS 통합 역량 검증",
    ],
    risks: [
      "2022~2023년 바이오파마 설비 투자 사이클 하락 — 팬데믹 이후 고성장의 정상화",
      "생명과학 기기 시장 Thermo Fisher와의 치열한 경쟁",
      "대형 인수 지속에 필요한 재무 여력 — 레버리지 증가 가능성",
      "DBS 통합에 장기 시간 소요 — 인수 속도 높이면 통합 품질 저하 리스크",
    ],
    editorNote: "Danaher는 M&A 역사에서 가장 일관된 연속 인수 성공 사례다. 핵심은 DBS라는 '운영 시스템'이다. 단순히 기업을 사는 게 아니라, 도요타의 린 제조를 과학·의료 기기에 적용하는 DBS를 모든 인수 기업에 이식한다. 그 결과 각 인수 기업은 독립 시절보다 더 높은 EBITDA 마진을 달성한다. 이것이 반복되면서 복리처럼 가치가 축적됐다. '좋은 기업을 사서 더 좋게 만든다'는 가장 순수한 M&A 가치 창출 원리다.",
  },

  tombstone: {
    acquirerInitials: "DHR",
    acquirerBg: "bg-blue-900",
    targetInitials: "LIFE",
    targetBg: "bg-cyan-600",
    acquirerName: "Danaher Corporation",
    targetName: "Cytiva / Beckman Coulter / Pall Corp 외 100+",
    dealTitle: "연속 M&A 전략 — DBS 기반 플랫폼 구축",
    dealSize: "$42B+ (3대 메가딜), 전체 누적 수백억 달러",
    dealSizeUSD: "USD 42B+ (3 major acquisitions)",
    evEbitda: "~15~20× (생명과학 기기 평균)",
    closeDate: "1984년~현재",
  },

  sources: [
    { id: 1, text: "Danaher Corporation Annual Reports (2011–2022)", url: "https://investors.danaher.com" },
    { id: 2, text: "Danaher Press Release — Danaher Closes Acquisition of GE Life Sciences (2020)", url: "https://investors.danaher.com" },
    { id: 3, text: "Danaher Press Release — Danaher Completes Acquisition of Beckman Coulter (2011)" },
    { id: 4, text: "Harvard Business Review — The Danaher Way (2014)" },
    { id: 5, text: "Bloomberg — How Danaher Became the King of Acquisitions (2021)" },
    { id: 6, text: "The Wall Street Journal — Danaher's Science Empire (2020)" },
  ],

  seo: {
    title: "Danaher 연속 M&A 전략 분석 — DBS와 생명과학 제국 구축",
    description: "Danaher의 연속 인수 전략 완전 분석. DBS(Danaher Business System), Beckman Coulter·Pall·Cytiva 3대 메가딜, Fortive 분사, 시총 $200B+ 성장.",
    keywords: ["Danaher M&A 전략", "Danaher Business System", "DBS 린 경영", "Cytiva GE Life Sciences", "연속 인수 전략", "생명과학 기기 M&A"],
  },

  concepts: [
    { term: "전략적 M&A", href: "/deal-101/strategic-ma", description: "DBS 기반 연속 인수 전략 — 인수 후 운영 개선으로 가치 창출하는 Danaher 모델" },
    { term: "Spin-off", href: "/deal-101/spinoff", description: "Fortive(2016), Veralto(2023) 분사 — 핵심 사업 집중을 위한 전략적 분리의 교과서" },
    { term: "수직 통합", href: "/deal-101/vertical-integration", description: "생명공학 연구·제조 생태계 수직 통합 — Cytiva(제조 장비) + Beckman(진단) + Pall(정제)" },
    { term: "EV/EBITDA 멀티플", href: "/deal-101/ev-ebitda", description: "시장 선도 생명과학 기기 기업의 15~20× 멀티플 — DBS 적용 후 마진 개선으로 배수 정당화" },
  ],

  faq: [
    {
      q: "DBS(Danaher Business System)란 무엇이며 왜 중요한가?",
      a: "DBS는 도요타의 린 생산 방식(TPS)을 기반으로 Danaher가 발전시킨 경영 시스템이다. 낭비 제거(카이젠), 표준화된 프로세스, 지속적 개선, 측정 기반 의사결정이 핵심이다. Danaher가 기업을 인수하면 DBS 전문가 팀을 즉시 투입해 1~3년 내 EBITDA 마진을 5~10%포인트 개선한다. DBS는 Danaher의 핵심 경쟁 우위이자 100개 이상의 인수를 성공적으로 통합한 비결이다.",
    },
    {
      q: "Danaher가 3대 메가딜(Beckman·Pall·Cytiva)을 통해 얻은 것은?",
      a: "세 딜이 생명과학 생태계를 수직 통합했다. Cytiva(GE Life Sciences): 바이오의약품 R&D·제조 장비 — mRNA 백신부터 항체 치료제까지 모든 생물의약품 제조에 필수. Pall Corporation: 여과·분리·정제 기술 — 바이오제약 제조 공정의 핵심 소모품. Beckman Coulter: 임상 진단 — 병원 검사실의 혈액·소변·면역 검사 장비. 세 사업을 합치면 의약품 발견→제조→진단 전주기를 커버하는 생명과학 인프라 기업이 된다.",
    },
    {
      q: "Danaher는 왜 Fortive와 Veralto를 분사했나?",
      a: "두 분사 모두 '집중을 위한 분리' 전략이다. Fortive(2016 분사): 산업용 계측기·현장 서비스 사업부. 생명과학과 성장 동인이 달라 별도 회사로 분리하면 더 적합한 투자자 기반과 인센티브 구조를 가질 수 있다. Veralto(2023 분사): 환경·수질 분석·산업용 코딩·인쇄 사업. 분사 후 Danaher는 생명과학·임상 진단에 완전히 집중하는 순수 플레이 기업이 됐다. 콘글로머리트 디스카운트를 해소하고 각 사업이 적절한 섹터 밸류에이션을 받게 하는 효과도 있다.",
    },
    {
      q: "Cytiva 인수가 COVID-19에서 어떤 역할을 했나?",
      a: "2020년 Danaher가 $21.4B에 인수한 Cytiva(구 GE Life Sciences)는 2020~2021년 COVID-19 백신 제조의 핵심 인프라 공급자가 됐다. Cytiva의 바이오리액터(세포 배양), 크로마토그래피 컬럼(단백질 정제), 멤브레인 여과 시스템이 Pfizer-BioNTech, Moderna의 mRNA 백신과 AstraZeneca·J&J의 바이러스 벡터 백신 제조에 필수적이었다. Danaher FY2021 매출이 전년 대비 32% 급증한 주요 원인이 Cytiva의 팬데믹 수요였다.",
    },
  ],
};

export default deal;
