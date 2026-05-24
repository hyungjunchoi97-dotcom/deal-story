/**
 * SK하이닉스 × 인텔 NAND 사업부 인수 (솔리다임)
 * 반도체 역대 최대 한국 기업 해외 M&A — $9.0B (약 10.3조원)
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "skhynix-intel-nand",
  title: "SK하이닉스는 왜 $90억에 인텔 NAND를 샀나 — 솔리다임과 반도체 패권 전쟁",
  subtitle: "반도체 역대 최대 한국 해외 M&A — 솔리다임(Solidigm) 설립, $9.0B",
  category: "ma",
  industry: "반도체 / 메모리",
  country: "대한민국 / 미국",
  announcedAt: "2020-10-20",
  closedAt: "2021-12-30",
  announcedDisplay: "2020년 10월",
  closedDisplay: "2021년 12월 (1차)",
  readingMinutes: 14,
  tags: ["반도체", "NAND", "메모리", "M&A", "SK하이닉스", "인텔", "솔리다임", "Solidigm", "한국 최대 해외 M&A", "SSD"],
  excerpt:
    "SK하이닉스가 인텔의 NAND 플래시 메모리 사업부를 $9.0B(약 10.3조원)에 인수해 글로벌 NAND 시장 점유율을 2배 이상 끌어올린 반도체 역대 최대 한국 기업 해외 M&A. 솔리다임(Solidigm) 설립을 통해 엔터프라이즈 SSD 시장 공략의 발판을 마련했다.",

  acquirer: { initials: "SKH", bg: "bg-red-600", label: "SK하이닉스" },
  target: { initials: "INT", bg: "bg-blue-600", label: "인텔 NAND 사업부" },

  background: [
    "2020년 당시 SK하이닉스는 DRAM 시장에서 삼성전자에 이어 세계 2위를 지키고 있었으나, NAND 플래시 시장에서는 삼성(33%), 키옥시아/WD(합산 약 32%), 마이크론(11%) 등에 밀려 약 10% 점유율에 그치며 4~5위 수준이었다. NAND 포트폴리오 강화는 SK하이닉스의 핵심 전략 과제였다.",
    "인텔은 1980년대 메모리 반도체에서 시작해 프로세서로 전환한 역사를 가졌으나, 2010년대 NAND·3D XPoint(옵테인) 사업 재진출을 시도했다. 그러나 NAND 시장의 치열한 경쟁과 만성적 공급과잉으로 수익성이 악화됐고, 신임 CEO 팻 겔싱어(Pat Gelsinger) 체제에서 NAND 사업 철수와 파운드리 역량 강화에 집중하는 IDM 2.0 전략을 선택했다.",
    "2020년 10월 20일, SK하이닉스는 인텔의 NAND 플래시 메모리 및 SSD 사업 전체(중국 다롄 팹 포함)를 총 $9.0B(약 10.3조원)에 인수하는 계약을 체결했다. 이는 한국 기업 역대 최대 해외 M&A였으며, 반도체 섹터 글로벌 메가딜로 시장의 큰 주목을 받았다.",
    "딜은 규제 승인의 복잡성을 감안해 두 단계로 나뉘었다. 1차 클로징(2021년 12월): 인텔의 NAND 웨이퍼·SSD 제품 사업, 중국 다롄 팹, 관련 IP 이전 — $7.0B 지급. 2차 클로징(2025년 목표): 인텔의 엔터프라이즈 SSD R&D 인력 및 플랫폼 사업 완전 이전 — $2.0B 지급. 1차 클로징 이후 새 법인 솔리다임(Solidigm)이 설립됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "$9.0B (약 10.3조원)",
    acquirerName: "SK하이닉스",
    targetName: "인텔 NAND 플래시 메모리 사업부",
    announcedDisplay: "2020년 10월",
    closedDisplay: "2021년 12월 (1차 $7.0B)",
    country: "대한민국 / 미국",
  },

  executiveSummary: [
    "한국 기업 역대 최대 해외 M&A — 인텔 NAND 사업부 $9.0B 인수, 글로벌 NAND 점유율 ~10% → ~20% 도약",
    "인텔 IDM 2.0 전략(파운드리 집중)과 SK하이닉스 NAND 포트폴리오 강화 전략의 완벽한 이해관계 합치",
    "중국 다롄 팹 포함 — 생산 규모 즉각 확대, 인텔의 144단 3D NAND 기술 및 QLC 기술 IP 확보",
    "딜 2단계 구조: 1차 $7.0B(2021.12) + 2차 $2.0B(엔터프라이즈 SSD 사업 완전 이전, 2025년) 분할 납입",
    "솔리다임(Solidigm) 출범 — 인텔 SSD 브랜드 헤리티지와 엔터프라이즈 고객 기반 유지·발전",
    "중국 다롄 팹 운영 리스크, 미중 반도체 규제 심화, NAND 공급과잉 사이클이 주요 과제",
  ],

  industryOverview: {
    body: "글로벌 NAND 플래시 시장은 2020년 기준 약 $630억 규모로, 스마트폰·PC·데이터센터 SSD 수요가 주요 성장 동인이었다. 시장은 고도의 기술 집약 산업으로 3D NAND(수직으로 셀을 쌓는 방식) 전환 이후 설비투자 요구가 급증했고, 삼성·키옥시아·SK하이닉스·마이크론·인텔·WD 등 소수 플레이어가 과점하는 구조였다. NAND 시장은 메모리 특성상 주기적 공급과잉·수요 부진으로 가격 변동성이 크고, 규모의 경제가 핵심 경쟁력이다.",
    metrics: [
      { label: "글로벌 NAND 시장 규모", value: "$630억", sub: "2020년 기준" },
      { label: "삼성 NAND 점유율", value: "약 33%", sub: "2020년 1위" },
      { label: "인수 전 SK하이닉스 점유율", value: "약 10%", sub: "4~5위 수준" },
      { label: "인수 후 SK하이닉스 점유율", value: "약 20%", sub: "인텔 ~10% 합산, 2위 등극" },
    ],
    subBody: "데이터센터 고성능 SSD(엔터프라이즈 SSD) 시장은 NAND 전체 시장에서 가장 마진이 높은 세그먼트로, 인텔은 Optane(3D XPoint)과 함께 이 시장에서 강력한 브랜드를 보유했다. SK하이닉스는 이번 인수로 소비자향 NAND뿐 아니라 고마진 엔터프라이즈 SSD 시장 진입의 발판을 확보했다.",
    players: [
      { name: "삼성전자", role: "NAND 세계 1위, V-NAND 기술 선도 (점유율 ~33%)" },
      { name: "키옥시아 (Kioxia) / WD", role: "합작 생산, 합산 점유율 ~32%, 일본 욧카이치 팹" },
      { name: "SK하이닉스 + 솔리다임", role: "인수 후 합산 점유율 ~20%, NAND 2위 등극" },
      { name: "마이크론 (Micron)", role: "점유율 ~11%, 미국 유일의 NAND 생산기업" },
    ],
  },

  companyOverview: {
    targetName: "인텔 NAND 사업부 (솔리다임 전신)",
    body: "인텔의 NAND 플래시 사업부는 중국 다롄(大連)에 대규모 3D NAND 웨이퍼 팹을 운영하며, 소비자향 SSD(670p, 660p 등)와 엔터프라이즈 SSD(DC P시리즈, D7시리즈) 라인업을 보유했다. 2020년 기준 글로벌 NAND 시장 점유율 약 10%로 인텔의 전체 매출에서 차지하는 비중은 제한적이었으나, 엔터프라이즈 SSD 분야에서는 강력한 브랜드와 데이터센터 고객 기반을 보유한 것이 핵심 자산이었다. 수익성은 NAND 시황에 따라 변동성이 컸으며 수년간 업계 평균 이하 마진을 기록했다.",
    metrics: [
      { label: "연 매출", value: "약 $25~28억", sub: "FY2020 기준 NAND 사업부 추정" },
      { label: "영업이익", value: "소폭 흑자~적자 반복", sub: "NAND 공급과잉 사이클 영향" },
      { label: "NAND 점유율", value: "약 10%", sub: "2020년, 글로벌 4~5위" },
      { label: "중국 다롄 팹 규모", value: "월 100K 웨이퍼 이상", sub: "3D NAND 생산 기지" },
      { label: "엔터프라이즈 SSD 고객", value: "구글·아마존·MS 등", sub: "하이퍼스케일 데이터센터" },
    ],
    revenueBreakdown: [
      { name: "엔터프라이즈 SSD", pct: 52, color: "bg-blue-500", amt: "약 $14억" },
      { name: "클라이언트 SSD (PC)", pct: 31, color: "bg-sky-400", amt: "약 $8억" },
      { name: "NAND 웨이퍼 (컴포넌트)", pct: 17, color: "bg-slate-400", amt: "약 $5억" },
    ],
    revenueNote: "FY2020 기준 업계 추정치. 인텔은 NAND 사업부 별도 매출을 공식 공시하지 않았습니다.",
    financials: [
      { year: "FY2018", revenue: 2800, cogs: 2240, grossProfit: 560, sga: 420, operatingIncome: 140, ebitda: 480 },
      { year: "FY2019", revenue: 2520, cogs: 2150, grossProfit: 370, sga: 400, operatingIncome: -30, ebitda: 290 },
      { year: "FY2020", revenue: 2650, cogs: 2170, grossProfit: 480, sga: 390, operatingIncome: 90, ebitda: 380 },
    ],
    financialsNote: "단위: USD 백만(M). 인텔 공시 기반 사업부 추정치입니다. 실제 수치와 차이가 있을 수 있습니다.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
  },

  dealStructure: {
    body: "SK하이닉스는 인텔과의 주식·자산 양수도 계약(SPA)을 통해 NAND 사업 전체를 인수했다. 중국 반독점 규제(SAMR) 승인 등 주요국 규제 클리어런스 획득을 위해 딜을 1·2단계로 분리 설계했다. 1차 클로징(2021년 12월)에서 중국 다롄 팹, NAND 웨이퍼·SSD 사업, 관련 IP 이전과 $7.0B를 지급했으며, 신설법인 솔리다임(Solidigm)이 출범했다. 잔여 엔터프라이즈 SSD 사업 인력·R&D는 2차 클로징(2025년 목표, $2.0B)으로 완료 예정이다.",
    preOwnership: {
      nodes: [
        { id: "intel", label: "인텔 (Intel Corp.)", sub: "美 나스닥 상장사", type: "public" },
        { id: "nand_biz", label: "인텔 NAND 사업부", sub: "다롄 팹 + SSD 사업", type: "target" },
      ],
      edges: [
        { from: "intel", to: "nand_biz", label: "100% 내부 사업부" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "skh", label: "SK하이닉스", sub: "한국 상장사 (KRX)", type: "acquirer" },
        { id: "solidigm", label: "솔리다임 (Solidigm)", sub: "SK하이닉스 자회사, 美 캘리포니아", type: "entity" },
        { id: "dalian", label: "다롄 팹 (IMFT China)", sub: "3D NAND 웨이퍼 생산", type: "target" },
      ],
      edges: [
        { from: "skh", to: "solidigm", label: "100% (1차 클로징)" },
        { from: "solidigm", to: "dalian", label: "운영" },
      ],
    },
    keyTerms: [
      { label: "총 딜 규모", value: "$9.0B (약 10.3조원)", accent: true },
      { label: "1차 클로징 지급액", value: "$7.0B (2021년 12월)", accent: false },
      { label: "2차 클로징 지급액", value: "$2.0B (2025년 목표)", accent: false },
      { label: "EV / 매출 (추정)", value: "약 3.4x", accent: true },
      { label: "거래 형태", value: "자산·사업부 양수도 (Asset Transfer)", accent: false },
      { label: "핵심 자산", value: "다롄 3D NAND 팹 + 인텔 SSD IP·고객기반", accent: false },
      { label: "신설 법인", value: "솔리다임 (Solidigm), 미국 캘리포니아", accent: false },
      { label: "NAND 점유율 변화", value: "SK하이닉스 ~10% → ~20% (2위 도약)", accent: false },
    ],
  },

  advisors: {
    body: "반도체 섹터 M&A 전문성을 갖춘 글로벌 IB가 양측에 배치됐으며, 미국·EU·중국·한국 등 주요 4개국 규제 대응을 위해 각국 최상위 로펌들이 협력했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (SK하이닉스)",
        initials: "SKH",
        bg: "bg-red-600",
        advisors: [
          { firm: "Deutsche Bank", role: "재무 자문 (FA)", roleType: "financial", note: "딜 구조 설계 및 가격 협상 총괄" },
          { firm: "김앤장 법률사무소", role: "한국 법률 자문", roleType: "legal", note: "국내 규제·계약 자문" },
          { firm: "Cleary Gottlieb", role: "미국 법률 자문", roleType: "legal", note: "美 반독점·계약 자문" },
          { firm: "Hogan Lovells", role: "중국 규제 자문", roleType: "legal", note: "중국 SAMR 반독점 신고 대응" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (인텔 Corp.)",
        initials: "INT",
        bg: "bg-blue-600",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "매각 프로세스 설계 및 협상 주관" },
          { firm: "법무법인 율촌", role: "한국 법률 자문", roleType: "legal", note: "한국 공정거래 신고 등 대응" },
          { firm: "Latham & Watkins", role: "미국 법률 자문", roleType: "legal", note: "거래 계약 및 미국법 자문" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도·업계 자료 기반이며, 일부 자문사는 공식 확인되지 않을 수 있습니다.",
  },

  valuation: {
    body: "NAND 사업부 인수 총액 $9.0B는 해당 사업부 연간 매출 약 $2.5~2.8B 대비 EV/Sales 약 3.2~3.6x 수준이다. NAND 사업부는 만성적 낮은 수익성으로 EBITDA 기반 멀티플 적용이 어려운 만큼, 시장 점유율 가치와 기술 IP·고객 자산, 중국 다롄 팹의 생산능력(하드 애셋) 가치가 주요 평가 기준이었다. 글로벌 NAND 2위 포지션 확보라는 전략적 프리미엄이 주요 컴포넌트였다.",
    rows: [
      { item: "총 딜 규모", val: "$9.0B", note: "1차 $7.0B + 2차 $2.0B 합계", accent: true },
      { item: "NAND 사업부 연 매출 (추정)", val: "약 $25~28억", note: "FY2020 기준 업계 추정" },
      { item: "EV / Sales (추정)", val: "약 3.4x", note: "저마진 사업부 특성상 EBITDA 멀티플 의미 제한적", accent: true },
      { item: "중국 다롄 팹 하드 애셋 가치", val: "약 $3~4B", note: "3D NAND 웨이퍼 팹 설비 대체원가 기반" },
      { item: "엔터프라이즈 SSD 브랜드·고객 가치", val: "약 $1~2B", note: "구글·MS·아마존 등 하이퍼스케일 고객기반" },
      { item: "NAND 기술 IP 가치", val: "약 $1B", note: "인텔 144단 3D NAND·QLC 기술 포함" },
      { item: "NAND 점유율 전략적 프리미엄", val: "상당 수준", note: "글로벌 2위 등극의 경쟁 포지션 가치", accent: true },
    ],
    disclaimer: "밸류에이션 수치는 공개 정보·업계 추정치 기반입니다. 실제 SK하이닉스 내부 평가와 차이가 있을 수 있습니다.",
  },

  rationale: {
    buyer: {
      title: "SK하이닉스 인수 논리",
      initials: "SKH",
      bg: "bg-red-600",
      points: [
        "NAND 시장 점유율 2배 확대 — 약 10%에서 약 20%로 도약, 키옥시아와 함께 글로벌 NAND 2위 등극",
        "엔터프라이즈 SSD 고마진 시장 진입 — 인텔의 데이터센터 고객 기반(구글·MS·아마존) 즉시 확보",
        "중국 다롄 팹 인수로 생산 능력 즉각 확대 — 신규 팹 건설 대비 시간·비용 절감",
        "인텔 144단 3D NAND·QLC 기술 IP 확보 — 기술 경쟁력 단기간 내 도약",
        "DRAM 편중 포트폴리오 다각화 — 메모리 시황 변동성 리스크 분산",
      ],
    },
    seller: {
      title: "인텔 매각 논리",
      initials: "INT",
      bg: "bg-blue-600",
      points: [
        "IDM 2.0 전략 집중 — 파운드리 사업 재건과 CPU·GPU·AI 가속기 R&D 자원 집중을 위한 NAND 전략적 철수",
        "NAND 사업 수익성 만성 부진 — 공급과잉 사이클 반복으로 투자 대비 수익 창출 한계",
        "$9.0B 현금 확보 — 파운드리 팹 건설(미국·이스라엘·유럽) 재원 마련",
        "Optane(3D XPoint) 개발 집중 → (이후 결국 Optane도 2022년 철수 결정)",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "SK하이닉스는 인수를 통해 단숨에 글로벌 NAND 2위 포지션을 확보했고, 솔리다임은 엔터프라이즈 SSD 시장에서 인텔 브랜드 헤리티지를 유지하며 하이퍼스케일 고객군을 지키는 데 성공했다. 그러나 인수 직후인 2022~2023년 반도체 다운사이클이 역대급으로 심화되며 NAND 가격이 폭락, SK하이닉스는 대규모 적자를 기록했다. 이로 인해 단기적 재무 압박이 가중됐지만, 2024년부터 HBM·AI 수요 폭증과 함께 NAND 시황이 회복되며 솔리다임의 전략적 가치가 재평가받고 있다. 장기적으로는 AI 인프라 확장에 따른 데이터센터 SSD 수요 증가가 핵심 수혜 시나리오다. 중국 다롄 팹은 미·중 반도체 규제 심화로 운영 리스크가 상존한다.",
    overallVerdict: "전략적 성공 (단기 부침 후 중장기 가치 입증 중)",
    positives: [
      "NAND 글로벌 2위 포지션 확보 — 규모의 경제·기술력·고객기반 동시 도약",
      "엔터프라이즈 SSD 시장 진입 성공 — 솔리다임 브랜드로 데이터센터 고객 유지",
      "AI 인프라 확장에 따른 고성능 SSD 수요 증가로 장기 수혜 포지션 구축",
      "인수 후 NAND 기술 내재화 — 144단→176단→238단 적층 기술 개발 가속",
    ],
    risks: [
      "인수 직후 2022~2023년 NAND 가격 폭락 — 메모리 다운사이클로 대규모 손실 기록",
      "중국 다롄 팹 리스크 — 미·중 반도체 수출 규제 심화로 운영·투자 불확실성 상존",
      "솔리다임 2차 클로징 지연 — 잔여 $2.0B 이전 완료까지 R&D 인력 통합 불완전",
      "삼성·키옥시아의 대규모 NAND 투자로 경쟁 압박 지속",
    ],
    editorNote: "SK하이닉스의 인텔 NAND 인수는 한국 기업의 글로벌 반도체 전략이 한 차원 성숙했음을 보여주는 딜이다. 메모리 시황 의존도를 줄이고 고마진 엔터프라이즈 SSD 시장에 진입한다는 전략적 방향성은 명확했다. AI 시대 데이터센터 SSD 수요 폭증이라는 메가트렌드가 이 딜의 가치를 장기적으로 증명해줄 것으로 보인다. 단, 중국 팹 리스크와 미·중 갈등은 꾸준히 모니터링해야 할 변수다.",
  },

  tombstone: {
    acquirerInitials: "SKH",
    acquirerBg: "bg-red-600",
    targetInitials: "INT",
    targetBg: "bg-blue-700",
    acquirerName: "SK하이닉스",
    targetName: "인텔 NAND 사업부 (솔리다임)",
    dealTitle: "NAND 플래시 사업부 인수 및 솔리다임 설립",
    dealSize: "$9.0B",
    dealSizeUSD: "USD 9.0bn (약 10.3조원)",
    evEbitda: "N/A (EV/Sales ~3.4x)",
    closeDate: "2021년 12월 (1차 클로징)",
  },

  sources: [
    { id: 1, text: "SK Hynix Press Release — SK Hynix to Acquire Intel's NAND Memory Business for US$9.0 Billion (October 2020)", url: "https://news.skhynix.com" },
    { id: 2, text: "Intel Press Release — Intel to Divest NAND Memory and Storage Business to SK Hynix (October 2020)", url: "https://www.intel.com" },
    { id: 3, text: "Solidigm Official Launch Announcement (December 2021)", url: "https://www.solidigm.com" },
    { id: 4, text: "한국경제 — SK하이닉스 인텔 낸드 인수 완료, 솔리다임 출범 (2021.12)", url: "https://www.hankyung.com" },
    { id: 5, text: "Bloomberg — SK Hynix Completes $7 Billion First Phase of Intel NAND Deal (December 2021)" },
    { id: 6, text: "TechInsights — NAND Flash Market Share 2020–2023" },
    { id: 7, text: "금융감독원 전자공시시스템 — SK하이닉스 사업보고서 (2020~2022)", url: "https://dart.fss.or.kr" },
  ],

  seo: {
    title: "SK하이닉스가 $90억에 인텔 NAND를 산 이유 — 솔리다임 딜 완전 분석",
    description: "SK하이닉스의 인텔 NAND 사업부 $9.0B 인수 완전 분석. 한국 기업 역대 최대 해외 M&A, 솔리다임 설립, 글로벌 NAND 2위 도약 전략과 중국 팹 리스크까지 심층 해부.",
    keywords: [
      "SK하이닉스 인텔 NAND 인수",
      "솔리다임 Solidigm",
      "한국 기업 해외 M&A 최대",
      "반도체 M&A 분석",
      "NAND 플래시 시장 점유율",
      "SK하이닉스 인텔 딜 구조",
      "엔터프라이즈 SSD M&A",
      "인텔 NAND 매각 이유",
      "중국 다롄 팹 인수",
      "메모리 반도체 인수합병",
    ],
  },

  concepts: [
    { term: "M&A (인수합병)", href: "/learn/ma", description: "두 기업이 합쳐지거나 한 기업이 다른 기업을 인수하는 기업 전략 활동" },
    { term: "자산 양수도 (Asset Deal)", href: "/learn/asset-deal", description: "기업 전체가 아닌 특정 사업부·자산만 분리 매수하는 M&A 방식" },
    { term: "EV/Sales 멀티플", href: "/learn/ev-sales", description: "기업가치를 매출로 나눈 상대가치 지표 — 이익이 낮은 성장기 기업 평가에 활용" },
    { term: "NAND 플래시 메모리", href: "/learn/nand", description: "전원이 꺼져도 데이터를 저장하는 비휘발성 반도체 메모리, SSD의 핵심 소자" },
    { term: "엔터프라이즈 SSD", href: "/learn/enterprise-ssd", description: "데이터센터·서버용 고성능 솔리드스테이트드라이브, 고마진 NAND 응용 제품" },
    { term: "반독점 규제 (클리어런스)", href: "/learn/antitrust", description: "M&A 시 경쟁 당국이 독점 우려를 심사하는 절차 — 주요국 사전 신고 필수" },
  ],

  faq: [
    {
      q: "SK하이닉스는 왜 인텔 NAND 사업부를 인수했나요?",
      a: "DRAM에 치우친 포트폴리오를 다각화하고 글로벌 NAND 시장 점유율을 단기간에 2배로 끌어올리기 위해서입니다. 인텔의 엔터프라이즈 SSD 고객기반(구글·MS·아마존 등 하이퍼스케일)과 중국 다롄 생산 팹을 한 번에 확보해, 신규 팹 건설보다 훨씬 빠르게 경쟁력 강화가 가능했습니다.",
    },
    {
      q: "딜이 왜 두 단계로 나뉘었나요?",
      a: "미국·EU·한국·중국 등 주요국 반독점 규제 승인을 받아야 하는데, 특히 중국 SAMR(시장감독관리총국) 심사에 시간이 걸렸습니다. 규제 불확실성을 감안해 다롄 팹과 NAND 사업 이전을 1차($7.0B, 2021년 12월)로 먼저 진행하고, 엔터프라이즈 SSD 인력·플랫폼 완전 이전을 2차($2.0B)로 분리했습니다.",
    },
    {
      q: "솔리다임(Solidigm)은 어떤 회사인가요?",
      a: "솔리다임은 SK하이닉스가 인텔 NAND 사업부 1차 인수 완료 후 2021년 12월 설립한 새 법인입니다. 미국 캘리포니아 산호세 기반으로, 인텔 SSD 제품 라인업(소비자향·엔터프라이즈) 개발·판매를 계속 담당하고 있습니다. '솔리다임'이라는 이름은 'Solid(단단한) + Paradigm(패러다임)'의 합성어입니다.",
    },
    {
      q: "이 딜의 EV/EBITDA 멀티플은 얼마인가요?",
      a: "NAND 사업부는 공급과잉 사이클로 EBITDA가 낮거나 적자였기 때문에 EV/EBITDA 멀티플은 의미 있는 평가 지표로 활용하기 어렵습니다. 대신 EV/Sales(매출 대비 기업가치) 기준으로 약 3.4x가 적용됐습니다. 시장 점유율 가치·기술 IP·하드 애셋(팹)의 대체원가가 핵심 가치 결정 요인이었습니다.",
    },
    {
      q: "중국 다롄 팹 인수가 왜 리스크인가요?",
      a: "미·중 반도체 기술 패권 경쟁이 심화되면서, 중국 내 첨단 반도체 시설에 대한 미국의 수출 통제(EAR)가 강화되고 있습니다. SK하이닉스는 다롄 팹에서의 첨단 NAND 기술 업그레이드에 제한을 받을 수 있으며, 지정학적 리스크(대만해협 긴장 등)에 따른 운영 불확실성도 상존합니다.",
    },
    {
      q: "AI 시대에 이 딜의 전략적 가치는 어떻게 평가하나요?",
      a: "AI 인프라 확장으로 데이터센터 SSD 수요가 급증하면서 솔리다임의 엔터프라이즈 SSD 포트폴리오의 가치가 빠르게 재평가받고 있습니다. SK하이닉스가 HBM(고대역폭메모리)에서 AI 칩 시장의 핵심 공급자로 부상한 것과 맞물려, 솔리다임의 고성능 SSD 사업도 AI 수요의 직접적 수혜를 받는 구조입니다. 인수 당시보다 전략적 가치가 더 높아졌다는 평가가 지배적입니다.",
    },
  ],
};

export default deal;
