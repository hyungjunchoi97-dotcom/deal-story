/**
 * 다임러 × 크라이슬러 합병 (실패)
 * 세기의 합병이 문화 충돌로 해체된 교과서 — 1998년 합병, 2007년 분리
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "daimler-chrysler",
  title: "다임러-크라이슬러 합병은 왜 실패했나 — 동등한 합병의 신화와 문화 충돌의 현실",
  subtitle: "$360억 '세기의 결혼' · 9년 후 $7.4억 이혼 · 문화 충돌이 시너지를 죽인 M&A 반면교사",
  category: "ma",
  industry: "자동차 / 제조업",
  country: "독일/미국",
  announcedAt: "1998-05-07",
  closedAt: "1998-11-12",
  announcedDisplay: "1998년 5월",
  closedDisplay: "1998년 11월",
  readingMinutes: 12,
  tags: ["Daimler", "Chrysler", "merger of equals", "PMI failure", "culture clash", "automotive", "divestiture", "Cerberus"],
  excerpt: "1998년 다임러-벤츠와 크라이슬러의 $360억 합병은 '동등한 합병(Merger of Equals)'의 완벽한 실패 사례다. 독일 프리미엄과 미국 대중 자동차의 결합이라는 전략적 논리는 완전히 다른 기업 문화와 보상 체계의 충돌 앞에 무너졌고, 2007년 크라이슬러는 $7.4억에 사모펀드 서러스(Cerberus)에 매각됐다.",

  acquirer: { initials: "DB", bg: "bg-gray-700", label: "다임러-벤츠" },
  target: { initials: "C", bg: "bg-blue-700", label: "크라이슬러" },

  background: [
    "1990년대 세계 자동차 산업은 글로벌 통합의 물결 속에 있었다. 글로벌화로 R&D·구매·생산의 규모의 경제가 중요해졌고, 포드-볼보, GM-사브 등 대형 합병이 잇따랐다. 다임러-벤츠 CEO 위르겐 슈렘프(Jürgen Schrempp)는 '세계 자동차 산업은 5~6개 대형 그룹으로 재편될 것'이라 예측하며 미국 시장 진출 파트너를 물색했다.",
    "크라이슬러는 1990년대 초 파산 위기를 극복하고 Jeep, Dodge, Chrysler 브랜드로 강력히 회복했다. CEO 로버트 이튼(Robert Eaton)은 크라이슬러의 독립 생존 가능성에 불안감을 가지고 있었고, 대형 파트너와의 합병을 모색했다. 1998년 5월 두 회사는 '동등한 합병(Merger of Equals)'으로 DaimlerChrysler AG를 설립한다고 발표했다.",
    "합병 발표 즉시 전략적 시너지가 강조됐다. 구매·R&D 통합, 플랫폼 공유, 크라이슬러의 미국 배급망과 다임러의 유럽·아시아 네트워크 결합이 핵심이었다. 그러나 '동등한 합병'은 곧 다임러의 실질적 지배로 전환됐다. 독일식 위계, 보상 체계 차이(다임러 CEO보다 크라이슬러 임원들이 더 높은 급여를 받았다), 제품 철학 충돌이 표면화됐다.",
    "2000년대 초 크라이슬러 부문은 수십억 달러의 손실을 기록했다. 슈렘프 자신도 2000년 인터뷰에서 처음부터 '동등한 합병'이 아니라 다임러의 크라이슬러 인수가 목표였다고 발언해 크라이슬러 측 분노를 샀다. 2001년 크라이슬러는 $20억 손실을 기록했고 2만 6천 명을 구조조정했다. 2007년 다임러는 크라이슬러를 사모펀드 서러스 캐피털에 약 $7.4억에 매각했다 — 합병가의 2% 수준이었다.",
  ],

  dealSummary: {
    dealValueDisplay: "$36B (주식 교환, 1998년) → $7.4억에 매각 (2007년)",
    acquirerName: "Daimler-Benz AG",
    targetName: "Chrysler Corporation",
    announcedDisplay: "1998년 5월",
    closedDisplay: "1998년 11월",
    country: "독일/미국",
  },

  executiveSummary: [
    "$360억 주식 교환 합병 — 당시 최대 규모 국제 자동차 M&A, '세기의 결혼' 별명",
    "'동등한 합병'의 신화 — 공식은 합병이었으나 실질은 다임러의 크라이슬러 인수",
    "문화 충돌의 교과서 — 독일 위계문화 vs 미국 플랫 문화, 보상 체계 격차, 제품 철학 충돌",
    "크라이슬러 부문 적자 — 2001년 $20억 손실, 2만 6천 명 구조조정",
    "9년 만에 $7.4억에 Cerberus에 매각 — 합병가의 2% 회수라는 천문학적 가치 파괴",
    "PMI 실패의 3대 교훈: 동등한 합병의 허구, 문화 실사(CDD) 필요성, 빠른 통합 결정 중요성",
  ],

  industryOverview: {
    body: "1990년대 글로벌 자동차 산업은 R&D 비용 급등, 규제 강화, 신흥 시장 확대로 규모의 경제가 최우선 과제였다. 주요 자동차 그룹들이 M&A를 통해 덩치를 키웠다. Ford는 볼보를 인수했고, GM은 사브에 투자했으며, 르노는 닛산과 전략적 제휴를 맺었다. 다임러-크라이슬러는 이 흐름의 가장 야심찬 시도였다.",
    metrics: [
      { label: "합병 당시 양사 합산 매출", value: "약 $1,580억", sub: "1998년, 세계 3위 자동차 그룹" },
      { label: "크라이슬러 미국 시장 점유율", value: "약 16%", sub: "1998년, 3위 빅3" },
      { label: "다임러-벤츠 연간 판매", value: "약 100만 대", sub: "1998년, 프리미엄 세그먼트 중심" },
      { label: "최종 Cerberus 매각가", value: "$7.4억 (80% 지분)", sub: "합병가의 2% 수준" },
    ],
    subBody: "자동차 M&A는 글로벌화라는 전략적 논리가 강했지만, 자동차 산업은 브랜드 정체성, 엔지니어링 문화, 딜러 네트워크가 매우 지역적이어서 통합 시너지 실현이 특히 어려웠다. 다임러-크라이슬러는 이 어려움의 극단을 보여줬다.",
    players: [
      { name: "크라이슬러", role: "미국 빅3 자동차, Jeep·Dodge 브랜드 강점" },
      { name: "포드-볼보", role: "같은 시기 진행된 유사한 국제 자동차 합병" },
      { name: "서러스 캐피털 (Cerberus)", role: "2007년 $7.4억에 크라이슬러 80% 인수" },
      { name: "위르겐 슈렘프", role: "다임러-벤츠 CEO, 합병 아키텍트" },
    ],
  },

  companyOverview: {
    targetName: "크라이슬러 (Chrysler Corporation)",
    body: "크라이슬러는 1925년 월터 크라이슬러가 설립한 미국 빅3 자동차 중 하나다. 1979년 파산 위기를 Lee Iacocca CEO가 구해냈고, 1990년대 초 다시 부진했다가 Jeep·미니밴·Dodge 브랜드로 강력 회복했다. 합병 전 연간 매출 약 $610억, 영업이익 黑字의 건실한 자동차 회사였다.",
    metrics: [
      { label: "설립", value: "1925년", sub: "Walter Chrysler 창립" },
      { label: "합병 전 연간 매출", value: "약 $610억", sub: "1997년 기준" },
      { label: "합병 전 직원 수", value: "약 12만 명", sub: "1998년" },
      { label: "주요 브랜드", value: "Chrysler, Jeep, Dodge", sub: "미국 시장 강세" },
    ],
    financials: [
      { year: "FY1996", revenue: 61397, cogs: 51200, grossProfit: 10197, sga: 5500, operatingIncome: 3700, ebitda: 5200 },
      { year: "FY1997", revenue: 61147, cogs: 51000, grossProfit: 10147, sga: 5400, operatingIncome: 2500, ebitda: 4000 },
      { year: "FY2001", revenue: 65155, cogs: 56000, grossProfit: 9155, sga: 7000, operatingIncome: -2000, ebitda: -500 },
    ],
    financialsNote: "단위: USD 백만(M). 1996-1997은 합병 전 크라이슬러 단독 실적. 2001년은 DaimlerChrysler 내 크라이슬러 부문 추정치.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "승용차·트럭 판매", pct: 85, color: "bg-blue-700", amt: "약 $520억" },
      { name: "금융서비스", pct: 10, color: "bg-blue-500", amt: "약 $61억" },
      { name: "부품·기타", pct: 5, color: "bg-blue-300", amt: "약 $30억" },
    ],
  },

  dealStructure: {
    body: "다임러-벤츠와 크라이슬러는 주식 교환 방식으로 합병했다. 크라이슬러 주주는 크라이슬러 1주당 DaimlerChrysler AG 주식을 수령했다. 독일 등록법에 따라 DaimlerChrysler AG가 독일 회사로 설립됐다 — 이것이 '동등한 합병'이 아니라 다임러 우위임을 보여주는 구조적 증거였다.",
    preOwnership: {
      nodes: [
        { id: "chrysler_public", label: "크라이슬러", sub: "NYSE 상장", type: "public" },
        { id: "daimler_public", label: "다임러-벤츠", sub: "독일 DAX + NYSE ADR", type: "acquirer" },
      ],
      edges: [
        { from: "chrysler_public", to: "daimler_public", label: "'동등한 합병' 발표" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "daimlerchry", label: "DaimlerChrysler AG", sub: "독일 회사로 통합 등록", type: "acquirer" },
        { id: "cerberus", label: "Cerberus Capital (2007)", sub: "크라이슬러 80% 인수", type: "target" },
      ],
      edges: [
        { from: "daimlerchry", to: "cerberus", label: "2007년 $7.4억에 80% 매각" },
      ],
    },
    keyTerms: [
      { label: "합병 규모", value: "$36B (주식 교환)", accent: true },
      { label: "합병 형태", value: "'동등한 합병' (실질은 다임러 인수)", accent: false },
      { label: "합병 완료", value: "1998년 11월", accent: false },
      { label: "2007년 Cerberus 매각가", value: "$7.4억 (80% 지분)", accent: true },
      { label: "가치 파괴 규모", value: "$36B → $7.4억 (약 98% 손실)", accent: true },
    ],
  },

  advisors: {
    body: "세기의 합병에 최고 수준의 자문사들이 참여했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "다임러-벤츠",
        initials: "DB",
        bg: "bg-gray-700",
        advisors: [
          { firm: "Deutsche Bank", role: "재무 자문 (FA)", roleType: "financial", note: "유럽 측 딜 구조 총괄" },
          { firm: "Shearman & Sterling", role: "법률 자문", roleType: "legal", note: "국제 M&A 법률 자문" },
        ],
      },
      {
        side: "target",
        sideLabel: "크라이슬러",
        initials: "C",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Credit Suisse First Boston", role: "재무 자문 (FA)", roleType: "financial", note: "크라이슬러 측 자문" },
          { firm: "Skadden Arps", role: "법률 자문", roleType: "legal", note: "M&A 계약 및 주주 보호" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반입니다.",
  },

  valuation: {
    body: "합병 당시 크라이슬러는 건실한 수익 기업이었고 EV/EBITDA 약 7배 수준이었다. 그러나 합병 후 크라이슬러 부문이 대규모 적자를 기록하면서 가치가 급락했고, 2007년 서러스에 $7.4억이라는 상징적 금액에 매각됐다.",
    rows: [
      { item: "합병 EV", val: "$36B", note: "1998년 주식 교환 합병 기준", accent: true },
      { item: "크라이슬러 1997 매출", val: "약 $610억", note: "합병 전 건실한 수익 기업" },
      { item: "크라이슬러 1997 EBITDA", val: "약 $40억", note: "합병 전 EV/EBITDA 약 9배" },
      { item: "2001년 크라이슬러 부문 손실", val: "-$20억", note: "합병 후 최대 손실 기록", accent: true },
      { item: "Cerberus 매각가 (2007)", val: "$7.4억 (80%)", note: "합병가 대비 약 98% 가치 파괴", accent: true },
    ],
    disclaimer: "밸류에이션 수치는 공개 공시 및 업계 분석 자료 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "다임러-벤츠의 합병 논리",
      initials: "DB",
      bg: "bg-gray-700",
      points: [
        "미국 시장 진출 — 크라이슬러의 북미 딜러망과 시장 점유율 즉시 확보",
        "규모의 경제 — R&D·구매·생산 플랫폼 통합으로 비용 절감",
        "포트폴리오 다각화 — 프리미엄(벤츠)과 대중(크라이슬러)으로 전 세그먼트 커버",
        "슈렘프의 세계 자동차 5대 그룹 전략 — 세계 최대 자동차 그룹 목표",
        "크라이슬러 기술 활용 — 대형 픽업·SUV·미니밴 노하우 획득",
      ],
    },
    seller: {
      title: "크라이슬러 합병 논리",
      initials: "C",
      bg: "bg-blue-700",
      points: [
        "독립 생존 불안감 — 이튼 CEO의 장기 경쟁 심화에 대한 우려",
        "유럽·아시아 접근성 — 다임러 글로벌 네트워크 활용",
        "대형 파트너와의 안전망 — 경기 사이클에 취약한 자동차 산업 리스크 분산",
        "$360억 프리미엄 — 주주에게 즉각적인 가치 실현",
        "R&D 비용 분담 — 전기차·친환경 기술 개발비 공유",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "합병 후 문화 충돌은 예상을 훨씬 뛰어넘었다. 독일 위계 중심 다임러 문화와 미국 플랫 크라이슬러 문화가 충돌했다. 더 결정적인 문제는 보상 격차였다 — 크라이슬러의 상위 임원들이 다임러 CEO보다 높은 급여를 받았다. 독일 측 불만이 폭발했다. 2001년 슈렘프는 처음부터 '동등한 합병'이 아니라 크라이슬러 인수가 목표였다고 인정해 크라이슬러 前 주주들이 소송을 제기했다. 2007년 서러스에 매각 후 크라이슬러는 2009년 금융위기로 실제 파산을 신청했고, 이후 피아트(현 Stellantis)가 인수했다.",
    overallVerdict: "M&A 역사상 최대 규모 가치 파괴 실패 사례 중 하나",
    positives: [
      "Jeep 브랜드의 지속적 강세 — 합병 실패 속에서도 Jeep는 생존하고 성장",
      "합병 기간 동안 일부 구매·플랫폼 공유 비용 절감 성과",
      "자동차 산업 국제 M&A 패턴에 대한 업계 전반의 교훈 제공",
    ],
    risks: [
      "'동등한 합병'의 허구 — 구조적으로 한 쪽이 우위가 됨, 투명하게 공개해야 함",
      "문화 실사(Cultural Due Diligence) 부재 — 보상·위계·제품 철학 차이를 사전 파악 못함",
      "크라이슬러 2009년 파산 — 서러스 인수 후 금융위기로 실제 파산 신청",
      "슈렘프의 전략적 오만 — '세계 5대 그룹' 비전이 실행 없는 구호에 그침",
      "주주 손실 $35B+ — 합병가 $36B에서 매각가 $7.4억으로 가치 증발",
    ],
    editorNote: "다임러-크라이슬러는 '동등한 합병'의 환상을 보여주는 가장 유명한 사례다. M&A에서 동등한 합병은 구조적으로 불가능하다 — 통합 과정에서 반드시 한 쪽 문화·경영 방식이 우세해지고, 이를 처음부터 명확히 하지 않으면 양측 모두에게 파괴적이다. 또한 문화·보상 체계의 실사는 재무 실사만큼 중요하다. $360억에서 $7.4억으로의 추락은 '좋은 전략도 나쁜 통합 앞에서는 무력하다'는 M&A의 핵심 교훈이다.",
  },

  tombstone: {
    acquirerInitials: "DB",
    acquirerBg: "bg-gray-700",
    targetInitials: "C",
    targetBg: "bg-blue-700",
    acquirerName: "Daimler-Benz AG",
    targetName: "Chrysler Corporation",
    dealTitle: "합병 (→ 2007년 분리)",
    dealSize: "약 $360억 (→ $7.4억 매각)",
    dealSizeUSD: "USD 36 Billion (1998 merger)",
    evEbitda: "약 9× (합병 시점)",
    closeDate: "Nov 1998 (Divested 2007)",
  },

  sources: [
    { id: 1, text: "DaimlerChrysler AG Press Release — Merger Announcement (May 1998)" },
    { id: 2, text: "SEC Form F-4 — DaimlerChrysler Merger Prospectus (1998)", url: "https://www.sec.gov" },
    { id: 3, text: "DaimlerChrysler Press Release — Cerberus Capital Management to Acquire Chrysler (May 2007)" },
    { id: 4, text: "Der Spiegel — Schrempp Admits Chrysler Was Always a Takeover, Not a Merger (2000)" },
    { id: 5, text: "Fortune — The World's Most Spectacular Flop: DaimlerChrysler (2007)" },
    { id: 6, text: "The New York Times — Daimler to Sell Chrysler Unit to Cerberus (May 2007)" },
    { id: 7, text: "Harvard Business Review — The DaimlerChrysler Merger: Lessons in Cross-Cultural M&A" },
    { id: 8, text: "Bloomberg — Chrysler Files for Bankruptcy Protection (April 2009)" },
  ],

  seo: {
    title: "다임러 크라이슬러 합병 실패 완전 분석 — $360억 문화 충돌의 교과서",
    description: "다임러-크라이슬러 합병 실패 완전 분석. 동등한 합병의 신화, 문화 충돌, $36B에서 $7.4억으로의 가치 파괴, PMI 실패 교훈까지 심층 해부.",
    keywords: ["다임러 크라이슬러 합병", "DaimlerChrysler M&A", "동등한 합병 실패", "PMI 실패 사례", "문화 충돌 M&A", "자동차 합병 실패", "Cerberus 크라이슬러"],
  },

  concepts: [
    { term: "PMI (인수 후 통합)", href: "/deal-101/pmi", description: "다임러-크라이슬러의 문화 충돌 — PMI 실패가 $36B를 $7.4억으로 만든 과정" },
    { term: "전략적 M&A (Strategic M&A)", href: "/deal-101/strategic-ma", description: "글로벌화 논리로 합병했으나 문화 통합 없이는 전략도 무력화됨" },
    { term: "EV/EBITDA", href: "/deal-101/ev-ebitda", description: "합병 시 합리적 멀티플이었으나 통합 실패로 가치가 사실상 0으로 귀결됨" },
    { term: "실사 (FDD)", href: "/deal-101/fdd", description: "재무 실사만큼 중요한 문화 실사 — 다임러-크라이슬러가 놓친 것" },
  ],

  faq: [
    {
      q: "다임러-크라이슬러 합병이 실패한 가장 큰 이유는 무엇인가요?",
      a: "문화 충돌과 '동등한 합병'의 허구입니다. 다임러는 위계적 독일 엔지니어링 문화, 크라이슬러는 미국식 플랫 조직 문화였습니다. 결정적으로 보상 체계 차이가 독일 측의 분노를 촉발했습니다 — 크라이슬러 임원들이 다임러 CEO보다 높은 급여를 받았습니다. '동등한 합병'이라는 발표와 달리 통합 과정에서 다임러가 지배권을 가져가면서 크라이슬러 인재들이 이탈했습니다.",
    },
    {
      q: "슈렘프 CEO는 왜 '처음부터 크라이슬러 인수였다'고 인정했나요?",
      a: "2000년 독일 주간지 Der Spiegel과의 인터뷰에서 슈렘프는 '동등한 합병이라고 했지만 처음부터 그것은 인수였다'고 발언했습니다. 이는 합병 당시 크라이슬러 주주들이 '동등한 파트너'로서의 프리미엄 대신 인수 프리미엄을 받았어야 한다는 주장으로 이어져 집단소송이 제기됐습니다. 이 발언은 M&A 역사에서 가장 파국적인 CEO 인터뷰 중 하나로 기록됩니다.",
    },
    {
      q: "크라이슬러는 이후 어떻게 됐나요?",
      a: "2007년 서러스 캐피털에 $7.4억에 매각됐고, 2009년 금융위기로 파산 신청을 했습니다. 이후 이탈리아 피아트(Fiat)가 구제 과정에서 크라이슬러를 인수했습니다. 현재는 2021년 설립된 Stellantis(피아트-크라이슬러 + PSA 합병)의 일부로 브랜드가 살아있습니다. Jeep와 Ram 브랜드는 지금도 강세입니다.",
    },
    {
      q: "'동등한 합병'은 왜 구조적으로 작동하기 어렵나요?",
      a: "합병 과정에서는 반드시 의사결정 우위가 필요합니다. 이사회 구성, CEO 선임, 전략 방향 충돌 시 해결 주체 등 모든 경영 결정에서 '동등'하면 교착이 발생합니다. 실제로 '동등한 합병'은 대부분 한 쪽이 실질적으로 지배하게 됩니다. 문제는 이를 처음부터 숨기면 상대방의 분노와 인재 이탈이 따른다는 것입니다. 투명성이 핵심입니다.",
    },
    {
      q: "이 합병에서 배울 수 있는 M&A 교훈은 무엇인가요?",
      a: "첫째, 문화 실사(Cultural Due Diligence)는 재무 실사만큼 중요합니다. 둘째, '동등한 합병'은 구조적으로 불안정하며 통합 주체를 명확히 해야 합니다. 셋째, 보상 체계 통합이 핵심 인재 유지의 핵심입니다. 넷째, 전략적 시너지가 아무리 좋아도 실행(PMI) 없이는 실현되지 않습니다. 다임러-크라이슬러는 이 네 가지 모두에서 실패했습니다.",
    },
  ],
};

export default deal;
