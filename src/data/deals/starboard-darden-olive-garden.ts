import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "starboard-darden-olive-garden",
  title: "스타보드 밸류 vs 다든 레스토랑 — 294페이지 덱으로 이사회 전원 교체한 역사적 행동주의",
  subtitle: "파스타 물에 소금 안 넣는다는 294페이지 분석 · 이사 12인 전원 교체 · 역대 최대 규모 이사회 완전 교체",
  category: "activism",
  industry: "레스토랑·외식 (Casual Dining)",
  country: "미국",
  announcedAt: "2014-09-11",
  closedAt: "2014-10-10",
  announcedDisplay: "2014년 9월",
  closedDisplay: "2014년 10월",
  readingMinutes: 10,
  tags: [
    "스타보드 밸류",
    "다든 레스토랑",
    "올리브 가든",
    "Jeff Smith",
    "294페이지 덱",
    "위임장 대결",
    "행동주의",
    "이사회 전원 교체",
    "레스토랑 행동주의",
    "운영 행동주의",
  ],
  excerpt:
    "스타보드 밸류의 Jeff Smith가 다든 레스토랑 지분 8.8%($560M)를 취득하고 '파스타 물에 소금도 안 넣는다'는 내용을 담은 294페이지 운영 분석 덱을 공개했다. 2014년 10월 주총에서 이사 12인 전원 교체 — 이 규모 기업 기준 미국 역사상 최초의 완전 이사회 교체 사례다.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "SV", bg: "bg-slate-700", label: "스타보드 밸류" },
  target:   { initials: "DRI", bg: "bg-green-700", label: "다든 레스토랑" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "다든 레스토랑(Darden Restaurants, DRI)은 올리브 가든·롱혼 스테이크하우스·더 캐피탈 그릴 등 약 1,500개 이상의 레스토랑을 운영하는 미국 최대 풀서비스 레스토랑 체인이었다. 2014년 기준 매출 약 $63억, 시총 약 $65억. 그러나 2012~2014년 올리브 가든의 객단가·내방객 수가 꾸준히 하락하며 주가는 경쟁사 대비 심각하게 부진했다.",
    "경영진은 2014년 레드 랍스터(Red Lobster) 브랜드를 사모펀드 골든 게이트 캐피탈에 $21억에 매각했다. 주주들은 이 가격이 너무 싸다고 반발했다. 스타보드 밸류는 레드 랍스터 매각 가격이 저평가됐고, 부동산 REIT 전환 가능성을 차단한 결정이라며 강하게 비판했다.",
    "스타보드 밸류(Starboard Value LP)는 Jeff Smith가 이끄는 행동주의 헤지펀드다. 2014년 초부터 다든 레스토랑 주식을 지속 매수해 지분 8.8%(약 $560M 상당)를 확보했다. 행동주의 캠페인의 초점은 두 가지였다 — 올리브 가든의 운영 비효율을 낱낱이 파헤치는 것, 그리고 부동산 REIT 분리를 통한 숨겨진 가치 실현.",
    "2014년 9월 11일, 스타보드는 294페이지짜리 운영 분석 프레젠테이션을 공개했다. 이 문서는 단순한 재무 분석을 넘어 올리브 가든의 파스타 조리법부터 빵 서비스, 실내 인테리어, 마르가리타 제조 속도까지 분석했다. '파스타 물에 소금을 넣지 않아 무료 풍미를 포기하고 있다'는 문장은 월스트리트와 미디어를 강타하며 역사상 가장 유명한 행동주의 문서 중 하나가 됐다.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "지분 약 $560M (8.8%)",
    acquirerName: "스타보드 밸류 LP",
    targetName: "다든 레스토랑 Inc.",
    announcedDisplay: "2014년 9월",
    closedDisplay: "2014년 10월",
    country: "미국",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "스타보드 밸류, 다든 레스토랑 지분 8.8%(~$560M) 취득 후 294페이지 운영 분석 덱 공개(2014.09.11).",
    "덱 핵심 발견: 올리브 가든 파스타 물에 소금 미투입, 빵스틱 낭비, 마르가리타 준비 지연, 인테리어 노후화.",
    "제안: 부동산 REIT 분리, G&A 비용 절감, 주방 효율화, 메뉴 혁신, 레드 랍스터 저가 매각 비판.",
    "2014년 10월 10일 주총: 이사 12인 전원 교체 — 이 규모 기업 기준 미국 역사상 최초 완전 이사회 교체.",
    "결과: DRI 주가 ~$47 → ~$75(2년 후), 올리브 가든 매출·이익 개선, 스타보드 추정 IRR 30%+.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "2014년 미국 풀서비스 레스토랑(Casual Dining) 산업은 구조적 역풍에 직면해 있었다. 패스트캐주얼(Chipotle, Panera) 업태의 급성장, 밀레니얼 세대의 외식 패턴 변화, 식재료 물가 상승, 최저임금 인상 압력이 동시에 작용했다. 다든의 주요 브랜드인 올리브 가든은 '패밀리 다이닝' 포지셔닝에서 벗어나지 못하고 있었고, 빠르게 변화하는 소비자 입맛에 메뉴·서비스 혁신이 뒤처지고 있었다.",
    metrics: [
      { label: "스타보드 지분",                value: "8.8%",         sub: "~$560M, 최대 주주 등극" },
      { label: "294페이지 덱",                  value: "2014.09.11",   sub: "역사상 가장 유명한 행동주의 문서" },
      { label: "교체된 이사 수",               value: "12인 전원",    sub: "미국 역사상 이 규모 최초" },
      { label: "주가 상승",                    value: "~$47→~$75",    sub: "캠페인 후 2년 기준 약 +60%" },
    ],
    subBody:
      "운영 행동주의(Operational Activism)는 재무 구조 개선 요구를 넘어 기업의 구체적 사업 운영 방식에 직접 개입하는 형태다. 스타보드-다든 사례는 헤지펀드가 파스타 조리법·빵 서비스 방식까지 분석해 경영 비효율을 입증하고, 그 근거로 이사회 전원 교체를 이끌어낸 전례 없는 사례다. 이 딜은 행동주의 투자의 범위와 깊이를 완전히 새로운 수준으로 끌어올렸다.",
    players: [
      { name: "스타보드 밸류 LP (Jeff Smith)",  role: "행동주의 펀드, 지분 8.8% 취득 후 이사회 전원 교체 주도" },
      { name: "다든 레스토랑 경영진 (12인 이사회)", role: "방어 측, 자체 개선 계획 발표했으나 주주 신임 상실" },
      { name: "Vanguard·BlackRock",             role: "주요 기관주주, 결과적으로 스타보드 지지" },
      { name: "골든 게이트 캐피탈",             role: "레드 랍스터 인수자, $21억 — 저평가 논쟁의 핵심" },
      { name: "Gene Lee",                       role: "올리브 가든 COO → 신임 CEO, 스타보드 선임 이사회가 임명" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "다든 레스토랑 Inc.",
    body: "다든 레스토랑(Darden Restaurants, NYSE: DRI)은 1968년 Bill Darden이 창업한 미국 최대 풀서비스 레스토랑 체인이다. 2014년 기준 올리브 가든(Olive Garden, 843개), 롱혼 스테이크하우스(LongHorn Steakhouse, 474개), 더 캐피탈 그릴·에디 V's 등 프리미엄 브랜드를 포함해 전미 8개 브랜드 약 1,500개 이상의 매장을 운영했다. 올리브 가든은 다든 전체 매출의 약 46%를 차지하는 핵심 브랜드였다. 2014년 레드 랍스터($21억)를 골든 게이트 캐피탈에 매각한 후 매출 규모가 축소됐으나, 스타보드는 이 매각 자체가 저평가됐다고 비판했다. 다든은 미국 전역에 약 150,000명의 직원을 고용하는 외식업계 최대 고용주 중 하나다.",
    metrics: [
      { label: "직원 수 (FY2014)",      value: "약 15만 명",    sub: "미국 전역 풀서비스 레스토랑 최대" },
      { label: "총 매장 수 (FY2014)",   value: "약 1,500개",    sub: "8개 브랜드 합산 (레드랍스터 제외)" },
      { label: "올리브 가든 매장",       value: "843개",         sub: "미국 최대 이탈리안 캐주얼 체인" },
      { label: "매출 (FY2014)",         value: "$6,285M",       sub: "레드랍스터 매각 후 기준" },
      { label: "시총 (2014년 기준)",     value: "약 $6.5B",      sub: "스타보드 캠페인 당시" },
    ],
    revenueBreakdown: [
      { name: "올리브 가든",     pct: 46, color: "bg-green-500",  amt: "~$2,890M" },
      { name: "롱혼 스테이크하우스", pct: 27, color: "bg-orange-500", amt: "~$1,697M" },
      { name: "프리미엄 브랜드", pct: 15, color: "bg-purple-500", amt: "~$943M" },
      { name: "기타 브랜드",     pct: 12, color: "bg-slate-400",  amt: "~$754M" },
    ],
    revenueNote: "FY2014 매출 기준 추정 비중 (레드랍스터 매각 후)",
    financials: [
      {
        year: "FY2013",
        revenue: 8551,
        cogs: 2739,
        grossProfit: 5812,
        sga: 4980,
        operatingIncome: 832,
        ebitda: 1020,
      },
      {
        year: "FY2014",
        revenue: 6285,
        cogs: 2012,
        grossProfit: 4273,
        sga: 3680,
        operatingIncome: 593,
        ebitda: 740,
      },
      {
        year: "FY2015",
        revenue: 6764,
        cogs: 2164,
        grossProfit: 4600,
        sga: 3890,
        operatingIncome: 710,
        ebitda: 890,
      },
    ],
    financialsNote:
      "단위: $M (백만 달러) | US GAAP 연결 기준 | 출처: Darden Restaurants 연간보고서 | FY2014는 레드랍스터 매각 영향으로 매출 급감",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "다든 레스토랑의 지배구조 문제는 장기 경영 침체가 낳은 이사회 무기력증이었다. 올리브 가든 방문객 수는 2012~2014년 3년 연속 감소했고, 레드 랍스터 저가 매각 결정은 주주 신뢰를 완전히 무너뜨렸다. 스타보드는 이사회가 자체 개선 능력을 상실했다고 판단하고 전례 없는 '완전 이사회 교체' 전략을 구사했다. 스타보드가 제시한 대안 이사 후보 12인 전원이 2014년 10월 10일 주주총회에서 선임됐다 — 이 규모 상장사 기준 미국 역사상 전례 없는 결과였다.",
    shareholders: [
      {
        id: "starboard",
        label: "스타보드 밸류",
        sub: "Jeff Smith, 행동주의 펀드",
        stake: "8.8%",
        stakePct: 8.8,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "vanguard",
        label: "Vanguard Group",
        sub: "최대 패시브 기관주주",
        stake: "7.2%",
        stakePct: 7.2,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "2대 기관주주, 결과적 스타보드 지지",
        stake: "6.5%",
        stakePct: 6.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "management",
        label: "경영진·임직원",
        sub: "내부자 보유 지분",
        stake: "2.0%",
        stakePct: 2.0,
        type: "management",
        alignment: "pro",
      },
      {
        id: "public",
        label: "일반 소수주주",
        sub: "개인·소액 투자자",
        stake: "75.5%",
        stakePct: 75.5,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 12,
      independent: 11,
      affiliated: 1,
      note: "형식적으로는 독립이사 비율이 높았으나, 올리브 가든 운영 침체·레드랍스터 저가 매각을 묵인한 이사회라는 비판을 받았다. 2014년 10월 10일 주총에서 12인 전원이 스타보드 추천 후보로 교체됐다.",
    },
    issues: [
      {
        title: "올리브 가든 운영 비효율",
        description:
          "파스타 물에 소금 미투입, 빵스틱 낭비적 서비스, 마르가리타 제조 지연, 인테리어 노후화 등 수십 가지 운영 문제. 스타보드 294페이지 덱의 핵심 공격 대상.",
        severity: "critical",
      },
      {
        title: "레드 랍스터 저가 매각",
        description:
          "2014년 레드 랍스터를 골든 게이트 캐피탈에 $21억에 매각. 스타보드는 부동산 REIT 분리 가능성을 차단하고 잠재 가치보다 훨씬 낮은 가격에 처분했다고 주장. 주주 승인 없이 진행돼 지배구조 위반 소지도 있었다.",
        severity: "critical",
      },
      {
        title: "부동산 가치 미실현",
        description:
          "다든은 미국 전역의 레스토랑 부동산(토지·건물)을 직접 보유했으나, 이를 REIT로 분리해 시장에서 가치를 인정받는 전략을 택하지 않았다. 스타보드는 REIT 분리만으로도 상당한 주주 가치 창출이 가능하다고 주장했다.",
        severity: "high",
      },
      {
        title: "G&A 비용 과다",
        description:
          "경쟁사 대비 높은 일반관리비(G&A). 스타보드는 본사 비용 절감, 공급망 효율화, 메뉴 단순화를 통한 원가 절감 여지가 상당하다고 분석했다.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "이사회 전원(12인) 교체 — 스타보드 추천 후보로 대체",
        result: "won",
        note: "2014년 10월 10일 연간 주주총회에서 스타보드가 제시한 대안 이사 12인 전원이 선임됐다. 기존 이사 12인 전원 퇴진. 이 규모(시총 ~$6.5B) 미국 상장사 기준 역사상 최초의 완전 이사회 교체 사례.",
      },
      {
        demand: "올리브 가든 운영 개선 (파스타 조리·서비스·메뉴 혁신)",
        result: "partial",
        note: "신임 이사회가 Gene Lee를 CEO로 임명 후 메뉴 혁신·주방 효율화·서비스 개선 진행. 올리브 가든 매출·객단가·방문객 수 반등 확인. 완전한 구현까지는 다년간 소요.",
      },
      {
        demand: "부동산 REIT 분리로 숨겨진 가치 실현",
        result: "partial",
        note: "신임 이사회는 레스토랑 부동산 일부를 세일-리스백 방식으로 처분하고 Four Corners Property Trust를 분사(REIT)했다. 완전한 REIT 전환이 아닌 부분적 실현에 그쳤으나 상당한 가치 창출 달성.",
      },
      {
        demand: "레드 랍스터 매각 철회·재검토",
        result: "lost",
        note: "레드 랍스터는 이미 골든 게이트 캐피탈에 법적으로 완료된 거래였다. 되돌릴 수 없는 상황이었고, 스타보드도 결국 이 요구를 포기했다.",
      },
    ],
    stockImpact: {
      preCampaign: "~$47",
      peakDuringCampaign: "~$75",
      postCampaign: "~$68",
      note: "스타보드 캠페인 시작 전(2014년 초) ~$47에서 이사회 전원 교체 후 약 18개월 만에 ~$75 달성. 약 +60% 상승. 스타보드 추정 IRR 30%+. 장기 주가는 $68~75 구간에서 안정화.",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "스타보드는 공개시장에서 다든 레스토랑 주식을 꾸준히 매수해 지분 8.8%를 확보했다. 이후 경영진과의 협상이 결렬되자, 위임장 대결(Proxy Fight) 방식으로 주주총회에서 이사 12인 전원 교체를 위한 대안 후보를 제시했다. 주요 기관투자자들의 지지를 확보한 스타보드는 2014년 10월 10일 주주총회에서 압도적 승리를 거뒀다.",
    preOwnership: {
      nodes: [
        {
          id: "starboard",
          label: "스타보드 밸류",
          sub: "지분 8.8%, 이사회 전원 교체 요구",
          type: "acquirer",
        },
        {
          id: "darden-old-board",
          label: "다든 이사회 (12인)",
          sub: "기존 경영진 지지 이사회 — 레드랍스터 매각 승인",
          type: "target",
        },
        {
          id: "darden-mgmt",
          label: "다든 경영진",
          sub: "CEO Clarence Otis Jr., 스타보드 요구 거부",
          type: "entity",
        },
        {
          id: "instit",
          label: "기관투자자",
          sub: "Vanguard 7.2%, BlackRock 6.5% (캐스팅보트)",
          type: "fund",
        },
      ],
      edges: [
        { from: "starboard",     to: "darden-old-board", label: "8.8% 지분 (이사 전원 교체 요구)" },
        { from: "darden-mgmt",   to: "darden-old-board", label: "현 이사 재선임 요구" },
        { from: "instit",        to: "darden-old-board", label: "~13.7% (중립·결정권)" },
      ],
    },
    postOwnership: {
      nodes: [
        {
          id: "starboard-winner",
          label: "스타보드 밸류",
          sub: "위임장 대결 완승 — 12인 전원 선임",
          type: "acquirer",
        },
        {
          id: "darden-new-board",
          label: "다든 이사회 (신규 12인)",
          sub: "스타보드 추천 후보 전원 선임 (2014.10.10)",
          type: "target",
        },
        {
          id: "gene-lee",
          label: "Gene Lee CEO",
          sub: "신임 이사회가 임명, 기존 COO → 내부 발탁",
          type: "entity",
        },
        {
          id: "four-corners",
          label: "Four Corners Property Trust",
          sub: "부동산 REIT 분사 (부분 실현)",
          type: "entity",
        },
      ],
      edges: [
        { from: "starboard-winner", to: "darden-new-board", label: "추천 이사 12인 전원 선임" },
        { from: "darden-new-board",  to: "gene-lee",         label: "CEO 임명" },
        { from: "darden-new-board",  to: "four-corners",     label: "부동산 REIT 분사 결정" },
      ],
    },
    keyTerms: [
      { label: "스타보드 지분",          value: "8.8%",                          accent: true },
      { label: "투자액",                  value: "약 $560M" },
      { label: "이사회 요구",             value: "12인 전원 교체 (전례 없음)",    accent: true },
      { label: "주총 결과",               value: "스타보드 추천 12인 전원 선임",  accent: true },
      { label: "신임 CEO",                value: "Gene Lee (내부 COO 발탁)" },
      { label: "주가 상승",               value: "~$47 → ~$75 (+약 60%)" },
      { label: "추정 IRR",                value: "약 30%+ (18개월 기준)" },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "이 규모의 위임장 대결에서 양측은 법률·커뮤니케이션·의결권 자문단을 대거 동원했다. 스타보드는 294페이지 덱의 설득력을 극대화하기 위해 운영 전문가들도 활용했으며, 다든은 방어를 위해 투자은행과 법률 자문단을 구성했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "스타보드 밸류 (공격 측)",
        initials: "SV",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Macquarie Capital",
            role: "재무 자문",
            roleType: "financial",
            note: "스타보드 캠페인 재무 전략 지원. 부동산 REIT 분리 가치 분석.",
          },
          {
            firm: "Schulte Roth & Zabel LLP",
            role: "법률 자문",
            roleType: "legal",
            note: "위임장 대결 관련 증권법·이사 선임 법률 대리.",
          },
          {
            firm: "Innisfree M&A Inc.",
            role: "의결권 수집 자문",
            roleType: "other",
            note: "기관·소액주주 대상 스타보드 후보 지지 의결권 확보 캠페인 전개.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "다든 레스토랑 (방어 측)",
        initials: "DRI",
        bg: "bg-green-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "재무 자문",
            roleType: "financial",
            note: "레드랍스터 매각 자문 포함 다든 방어 재무 전략 지원.",
          },
          {
            firm: "Skadden, Arps, Slate, Meagher & Flom LLP",
            role: "법률 자문",
            roleType: "legal",
            note: "위임장 대결 방어 법률 대리. 주총 절차 및 이사 선임 관련 자문.",
          },
          {
            firm: "Okapi Partners",
            role: "의결권 수집 자문",
            roleType: "other",
            note: "기존 이사진 재선임을 위한 주주 의결권 확보 캠페인.",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공개 자료 기반입니다. 실제 계약 내용과 다를 수 있습니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "스타보드의 투자 논리는 단순했다. 다든의 주가 부진은 운영 비효율과 부동산 가치 미실현 때문이며, 이사회를 교체해 경영 개선과 REIT 분리를 실행하면 주가가 크게 반등할 것이라는 것이었다. 캠페인 시작 시점 주가 ~$47에서 내재 가치를 $70~80 수준으로 추정했다.",
    rows: [
      { item: "DRI 주가 (캠페인 전, 2014년 초)",    val: "~$47",    note: "스타보드 진입 전 평균 수준" },
      { item: "EV/EBITDA (FY2014 기준)",             val: "약 8.8×", note: "당시 외식 업종 평균 대비 할인" },
      { item: "스타보드 내재 가치 추정",             val: "$70~80",  note: "REIT 분리·운영 개선 반영",     accent: true },
      { item: "294페이지 덱 공개 당일 주가 반응",    val: "+2~3%",   note: "단기 반응은 제한적" },
      { item: "이사회 전원 교체 후 1년 주가",        val: "~$65",    note: "구조 개선 기대 반영" },
      { item: "이사회 교체 후 18개월 고점",          val: "~$75",    note: "약 +60% 달성",                  accent: true },
      { item: "스타보드 추정 IRR",                   val: "30%+",    note: "약 18개월 보유 기준 추정",      accent: true },
    ],
    disclaimer:
      "주: 주가 및 밸류에이션 수치는 공개 자료 기반 추정치입니다. 스타보드의 실제 진입·청산 가격과 다를 수 있습니다.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "스타보드는 다든에서 무엇을 봤나",
      initials: "SV",
      bg: "bg-slate-700",
      points: [
        "올리브 가든 운영 비효율은 수치화 가능한 수익 개선 기회 — 식재료 원가, 서비스 프로세스, 메뉴 구성 최적화만으로도 EBITDA 마진 수백 bp 개선 가능.",
        "부동산 REIT 분리로 숨겨진 자산 가치 실현 — 다든이 직접 보유한 수백 개 레스토랑 부지·건물의 시장 가치를 주가에 반영시킬 수 있음.",
        "레드랍스터 저가 매각($21억)은 경영진의 자본 배분 능력 부재를 입증 — 이사회 교체 없이는 구조적 개선 불가능.",
        "이사 12인 전원 교체라는 극단적 전략이 실제로 통할 수 있는 구조 — 기관투자자들이 기존 이사회에 신뢰를 잃은 상태였고, 스타보드가 구체적 대안을 제시.",
      ],
    },
    seller: {
      title: "다든 경영진은 왜 버텼나",
      initials: "DRI",
      bg: "bg-green-700",
      points: [
        "레드랍스터 매각은 전략적 집중을 위한 불가피한 결정이었다고 주장 — 비핵심 브랜드를 정리해 올리브 가든·롱혼에 집중 투자하는 포트폴리오 합리화.",
        "스타보드의 294페이지 덱은 운영 현실을 단순화한 것이라 반박 — 외부 펀드가 레스토랑 운영의 복잡성을 과소평가하고 있다는 논리.",
        "자체 개선 계획(내부 혁신 로드맵)을 이미 진행 중이라 주장 — 외부 개입 없이 내부 역량으로 해결 가능하다는 논리.",
        "이사회 전원 교체라는 극단적 수단은 기업 안정성을 해친다는 우려 표명 — 경영진 연속성 상실로 인한 실행 리스크 강조.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "이사회 전원 교체 후 다든 레스토랑은 의미 있는 변화를 보였다. 신임 이사회가 임명한 Gene Lee CEO는 올리브 가든 메뉴 혁신, 서비스 표준화, 식재료 원가 효율화를 추진했다. 부동산 부문은 Four Corners Property Trust로 REIT 분사됐다. 주가는 ~$47에서 ~$75(2년 후)로 약 60% 상승했고, 스타보드는 추정 IRR 30%+를 기록했다. 스타보드의 294페이지 덱은 '역사상 가장 유명한 행동주의 문서'로 교과서에 남았다.",
    overallVerdict: "스타보드 완승 — 운영 행동주의와 완전 이사회 교체의 역사적 교과서 사례",
    positives: [
      "이사회 12인 전원 교체 — 이 규모 미국 상장사 기준 전례 없는 완전 승리.",
      "올리브 가든 매출·이익 반등 — 신임 이사회·CEO 하 운영 개선 가시화.",
      "Four Corners Property Trust REIT 분사 — 부동산 가치 부분 실현 성공.",
      "DRI 주가 ~$47 → ~$75(+약 60%), 스타보드 추정 IRR 30%+.",
      "294페이지 운영 분석 덱 — 행동주의 캠페인의 새로운 표준을 제시. 운영 비효율을 수치와 구체적 사례로 입증하는 방식이 업계 전체에 영향.",
    ],
    risks: [
      "REIT 분리 요구는 완전 실현되지 않음 — 일부 부동산 처분과 REIT 분사에 그쳐, 스타보드 원안 대비 가치 실현이 부분적이었다.",
      "레드랍스터 매각 철회 불가 — 거래가 완료된 후 개입해 가장 중요한 요구 중 하나를 포기해야 했다.",
      "운영 개선 지속성 불확실 — 이사회 전원 교체가 장기적 기업 문화 변화로 이어지는지는 다년간의 추적이 필요.",
      "카주얼 다이닝 산업 구조적 역풍 — 패스트캐주얼 경쟁, 식품 배달 앱 확산 등 외부 환경 변화는 행동주의 캠페인만으로 해결 불가.",
    ],
    editorNote:
      "스타보드-다든 사례는 행동주의 투자의 두 가지 획기적 혁신을 동시에 보여준다. 첫째, 운영 행동주의의 극한 — 파스타 조리법까지 분석한 294페이지 문서는 '숫자만 보는 헤지펀드'라는 선입견을 완전히 깼다. 둘째, 완전 이사회 교체 — 이사 1~2인을 노리는 일반 위임장 대결과 달리, 12인 전원 교체는 사실상 경영권 이전에 가까운 결과를 만들어냈다. 이 사례 이후 행동주의 펀드들은 '얼마나 깊이 파느냐'가 승패를 결정한다는 교훈을 얻었다.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "SV",
    acquirerBg: "bg-slate-700",
    targetInitials: "DRI",
    targetBg: "bg-green-700",
    acquirerName: "스타보드 밸류 LP",
    targetName: "다든 레스토랑 Inc.",
    dealTitle: "Starboard Value × Darden / Olive Garden 행동주의",
    dealSize: "~$560M (지분 8.8%)",
    dealSizeUSD: "~$560M",
    evEbitda: "N/A (행동주의)",
    closeDate: "2014년 10월",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    {
      id: 1,
      text: "Starboard Value LP, 'Transforming Darden Restaurants' — 294-Page Presentation (2014.09.11)",
      url: "https://www.sec.gov/Archives/edgar/data/940944/000110465914068506/a14-20132_1ex99d1.htm",
    },
    {
      id: 2,
      text: "Darden Restaurants Inc., 2014 Annual Proxy Statement (DEF 14A) — 주주총회 결과 공시 (2014.10)",
    },
    {
      id: 3,
      text: "SEC 13D Filing — Starboard Value LP, Darden Restaurants (2014)",
    },
    {
      id: 4,
      text: "Wall Street Journal, 'Starboard Value Replaces Entire Darden Board' (2014.10.10)",
    },
    {
      id: 5,
      text: "New York Times, 'Hedge Fund's Olive Garden Critique Puts Pasta Salting on the Menu' (2014.09)",
    },
    {
      id: 6,
      text: "Darden Restaurants Annual Reports FY2013~FY2015",
    },
    {
      id: 7,
      text: "Bloomberg, 'Starboard Wins Darden Board in Historic Proxy Victory' (2014.10)",
    },
    {
      id: 8,
      text: "Four Corners Property Trust, Form 10-12 (REIT 분사 관련 SEC 신고, 2015)",
    },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "스타보드 밸류 올리브 가든 — 294페이지 덱 완전 해부 | 다든 행동주의",
    description:
      "스타보드 밸류의 다든 레스토랑 행동주의 완전 분석. 294페이지 덱, 파스타 소금 논쟁, 미국 역사상 최초 이사회 12인 전원 교체. 운영 행동주의의 교과서 사례.",
    keywords: [
      "Starboard Value Olive Garden",
      "다든 레스토랑 행동주의",
      "294페이지 덱",
      "레스토랑 행동주의",
      "올리브 가든 파스타 소금",
      "이사회 전원 교체",
      "위임장 대결",
      "운영 행동주의",
      "Jeff Smith Starboard",
      "Darden Restaurants proxy fight",
      "행동주의 이사회 교체",
    ],
    ogImage: undefined,
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "운영 행동주의 (Operational Activism)",
      description:
        "단순 지배구조 변화 요구를 넘어 구체적 사업 운영 개선안을 제시하는 행동주의 형태. 스타보드의 294페이지 올리브 가든 분석이 교과서 사례.",
    },
    {
      term: "완전 이사회 교체 (Full Board Replacement)",
      description:
        "기존 이사 전원을 주주 투표로 교체하는 극단적 행동주의 결과. 2014년 다든 주총에서 이사 12인 전원이 교체된 사례는 이 규모 미국 상장사 기준 전례 없다.",
    },
    {
      term: "부동산 REIT화",
      description:
        "레스토랑 체인이 보유한 토지·건물을 REIT로 분리해 잠재 가치를 시장에서 인정받는 전략. 스타보드가 다든에 요구했으며, Four Corners Property Trust로 부분 실현됐다.",
    },
    {
      term: "위임장 대결 (Proxy Fight)",
      description:
        "주주총회에서 이사 선임권을 놓고 기존 경영진과 행동주의 투자자가 주주 지지 확보를 경쟁하는 방식. 스타보드-다든은 완전 이사회 교체로 귀결된 최극단 사례.",
    },
    {
      term: "리스 백 (Sale-Leaseback)",
      description:
        "보유 부동산을 매각한 후 동일 부동산을 임차해 계속 사용하는 자본 효율화 전략. 다든은 이 방식으로 일부 레스토랑 부동산에서 자본을 회수했다.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "스타보드 밸류의 294페이지 덱에는 무엇이 담겨 있었나?",
      a: "2014년 9월 11일 공개된 이 문서는 올리브 가든의 운영 비효율을 낱낱이 해부했다. 파스타 물에 소금을 넣지 않아 '무료 풍미를 포기하고 있다'는 지적, 식사 전 무제한으로 제공되는 빵스틱(Breadsticks)이 과도하게 낭비된다는 분석, 마르가리타 제조 공정이 너무 느려 고객 경험을 해친다는 지적 등이 포함됐다. 재무 분석 외에도 인테리어 노후화, 메뉴 복잡성, 일관성 없는 서비스 기준 등 수십 가지 운영 문제를 수치와 사진으로 입증했다. 또한 부동산 REIT 분리 전략과 레드랍스터 저가 매각 비판, G&A 비용 절감 방안도 포함됐다.",
    },
    {
      q: "이사회 12인 전원 교체가 왜 역사적으로 의미 있나?",
      a: "미국 증권법·주총 실무에서 위임장 대결의 통상적 목표는 이사 1~3인 교체다. 기존 이사회의 다수가 유임되는 것이 일반적이다. 그러나 스타보드는 이사 12인 전원에 대한 대안 후보를 제시했고, 주주들이 전원을 교체하는 데 동의했다. 이는 사실상 경영권 완전 이전에 가까운 결과였다. 미국 증권거래위원회(SEC) 기록과 M&A 역사에서 이 규모(시총 ~$65억)의 상장사에서 기존 이사 전원이 위임장 대결로 교체된 사례는 다든이 최초였다.",
    },
    {
      q: "스타보드가 왜 레드랍스터 매각을 그렇게 강하게 비판했나?",
      a: "스타보드는 골든 게이트 캐피탈에 $21억에 매각된 레드랍스터의 실제 가치가 훨씬 높다고 봤다. 가장 큰 이유는 레드랍스터가 보유한 부동산이었다 — 해당 부동산을 REIT로 분리했다면 매각가를 크게 높일 수 있었다는 논리다. 또한 주주 승인 없이 진행된 점도 지배구조 문제로 지적했다. 실제로 골든 게이트는 레드랍스터 인수 후 부동산을 적극 활용해 상당한 수익을 올렸고, 이는 스타보드의 주장이 옳았음을 시사한다.",
    },
    {
      q: "Gene Lee는 외부에서 영입된 CEO인가?",
      a: "아니다. Gene Lee는 다든 레스토랑의 내부 인물이었다. 그는 스타보드 캠페인 당시 다든의 President 겸 COO(최고운영책임자)를 맡고 있었다. 신임 이사회는 외부 인사를 CEO로 영입하는 대신 내부 경영진 중 운영 경험이 풍부한 Lee를 CEO로 임명했다. 이는 스타보드 캠페인이 경영진 전체 교체보다는 이사회 통제권 확보를 통한 전략 방향 전환에 초점이 있었음을 보여준다.",
    },
    {
      q: "스타보드는 결국 얼마나 벌었나?",
      a: "스타보드는 2014년 초 DRI 주가 약 $47 수준에서 지분 8.8%($560M 상당)를 확보했다. 이사회 전원 교체 후 약 18개월 만에 주가는 ~$75까지 상승했다. 절대 수익 기준으로는 보유 지분 가치가 약 $850M 수준으로 상승해 약 $290M의 평가이익을 얻은 것으로 추정된다. IRR 기준으로는 약 30%+로 추정된다. 이후 부동산 REIT 분사(Four Corners Property Trust) 가치까지 포함하면 실질 수익은 더 높았을 것으로 보인다.",
    },
    {
      q: "올리브 가든은 이 캠페인 이후 실제로 좋아졌나?",
      a: "네, 측정 가능한 개선이 있었다. Gene Lee CEO 취임 후 올리브 가든은 메뉴를 단순화하고 품질 기준을 강화했으며, 내방객 수와 객단가가 반등했다. 무제한 빵스틱 정책은 유지됐지만 서비스 방식이 개선됐다. 식재료 원가 효율화와 주방 표준화로 EBITDA 마진이 개선됐다. 2015~2016년 올리브 가든 동일 매장 매출(comp sales)이 플러스로 전환됐다는 점이 가장 명확한 증거다. 다만 이 모든 개선이 스타보드 캠페인의 직접적 결과인지, Lee CEO의 리더십 덕분인지 인과관계를 정확히 분리하기는 어렵다.",
    },
    {
      q: "운영 행동주의(Operational Activism)란 무엇이고 이 사례가 왜 중요한가?",
      a: "전통적 행동주의는 주로 자본 구조 변경(자사주 매입, 배당 확대), 사업 매각, 이사회 독립성 강화 등 재무·지배구조 요구에 집중했다. 운영 행동주의는 여기서 한 발 더 나아가 기업의 구체적인 일상 운영 방식 — 조리법, 서비스 절차, 공급망, 마케팅 메시지 등 — 까지 분석하고 개선안을 제시하는 방식이다. 스타보드-다든 사례는 이 접근법의 가능성을 극명하게 보여줬다. 이후 많은 행동주의 펀드들이 운영 분석 역량을 강화하게 됐으며, 기업 경영진도 '언제든 이런 분석을 받을 수 있다'는 경각심을 갖게 됐다.",
    },
  ],
};

export default deal;
