import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "trian-pg",
  title: "넬슨 펠츠 트라이언 vs P&G — 역사상 가장 비싼 위임장 대결 완전 해부",
  subtitle: "위임장 대결 비용 $1억 · 0.07% 차이 주총 · 이사회 1석으로 주가 50% · FMCG 행동주의",
  category: "activism",
  industry: "소비재 (FMCG)",
  country: "미국",
  announcedAt: "2017-02-09",
  closedAt: "2017-12-15",
  announcedDisplay: "2017년 2월",
  closedDisplay: "2017년 12월",
  readingMinutes: 9,
  tags: ["트라이언", "P&G", "넬슨 펠츠", "위임장 대결", "FMCG", "행동주의", "소비재", "이사회 입성"],
  excerpt:
    "트라이언 펀드의 넬슨 펠츠가 P&G 지분 1.5%($35억)를 취득하고 이사회 1석을 요구. 양측이 $1억을 쏟아부은 역사상 최대 위임장 대결. P&G가 0.07% 차이로 신승을 선언했지만, 2017년 12월 자진해서 펠츠에게 이사회 1석을 제안했다.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "TRN", bg: "bg-rose-700", label: "트라이언 펀드" },
  target:   { initials: "PG", bg: "bg-blue-700", label: "P&G" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "P&G는 타이드·질레트·팸퍼스 등을 보유한 세계 최대 소비재 기업이었다. 매출 $650억, 65개 제품 카테고리. 그러나 2012~2016년 매출 성장은 정체됐고, 아마존·D2C 브랜드에 시장점유율이 잠식됐다. 주가는 경쟁사 대비 부진했고, 조직은 6개 레이어의 관료주의에 갇혀있었다.",
    "트라이언 펀드 매니지먼트(넬슨 펠츠 창업)는 2017년 2월 P&G 지분 1.5%($35억)를 공개했다. 요구는 단 하나: 이사회 1석(펠츠 본인). P&G는 단호히 거부했다 — 사상 최대 규모의 위임장 대결이 시작됐다.",
    "2017년 9월 주주총회: 양측 합산 선거운동 비용 약 $1억. 투표 결과는 역사상 가장 근소한 차이 — P&G가 0.07%(8.4억 주 중 600만 주 차이)로 승리를 선언했다. 펠츠는 재검표를 요구했다.",
    "재검표 후에도 P&G 신승. 그러나 2017년 12월, P&G는 자진해서 펠츠에게 이사회 1석을 제안했다. 사실상 패배를 인정한 것이었다. 펠츠 이사 취임 후 P&G 주가는 $87에서 $130+ 로 상승했다.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "P&G 시총 약 $2,300억",
    acquirerName: "트라이언 펀드",
    targetName: "P&G",
    announcedDisplay: "2017년 2월",
    closedDisplay: "2017년 12월",
    country: "미국",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "트라이언, P&G 지분 1.5%($35억) 취득. 이사회 1석 요구. P&G 거부 → 역사상 최대 위임장 대결.",
    "2017년 9월 주총: P&G 0.07% 차이 신승 발표. 양측 선거운동 비용 총 $1억.",
    "2017년 12월: P&G가 자발적으로 펠츠 이사회 입성 제안. 사실상 항복.",
    "트라이언 핵심 요구: 조직 단순화(6레이어→4), 포트폴리오 집중(65 카테고리 축소), 마진 개선.",
    "P&G 주가: $87(진입)→$130+(펠츠 이사 취임 후). 트라이언 투자 수익 약 +50%.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "2017년 FMCG 산업은 구조적 전환점에 놓여있었다. 아마존의 CPG 시장 진입, D2C 브랜드의 급성장, 사모 라벨(Private Label) 확대, 유기농·프리미엄 니치 브랜드의 점유율 잠식이 동시에 진행됐다. P&G 같은 대형 소비재 기업의 전통적 강점인 유통 접근성과 매스 마케팅이 빠르게 경쟁 우위를 잃고 있었다.",
    metrics: [
      { label: "P&G 제품 카테고리",          value: "65개",         sub: "트라이언 집중화 요구 대상" },
      { label: "P&G 조직 레이어",             value: "6개",          sub: "트라이언 4개 축소 요구" },
      { label: "트라이언 투자액",             value: "$35억",        sub: "P&G 지분 1.5%" },
      { label: "위임장 대결 총 비용",         value: "약 $1억",      sub: "양측 합산 선거운동 비용" },
    ],
    subBody:
      "위임장 대결(Proxy Fight)은 행동주의 펀드가 기업 이사회에 직접 진입하기 위해 주주 의결권을 놓고 경영진과 정면 충돌하는 방식이다. 트라이언-P&G 대결은 $2,300억 시총 기업을 상대로 이사 1석을 위해 $1억을 쏟아부은 사상 초유의 사건이었다.",
    players: [
      { name: "트라이언 펀드 (넬슨 펠츠)",    role: "행동주의 펀드, P&G 이사회 1석 요구" },
      { name: "P&G 경영진·이사회 (11인)",     role: "펠츠 이사 선임 거부, 자체 구조조정 추진" },
      { name: "Unilever·Colgate",             role: "FMCG 경쟁사, 동일한 D2C 압박 직면" },
      { name: "Vanguard·BlackRock·State Street", role: "P&G 주요 기관주주, 중립 포지션" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "P&G",
    body: "프록터 앤 갬블(Procter & Gamble, P&G)은 1837년 창업한 세계 최대 소비재 기업이다. 타이드(세제), 질레트(면도기), 팸퍼스(기저귀), 오랄비(칫솔), 페브리즈(탈취제) 등 10개 이상의 $10억 브랜드를 보유한다. 2017년 기준 65개 제품 카테고리, $651억 매출. 배당 성장 60년 연속 기록. 그러나 2012~2016년 매출은 실질적으로 정체였다.",
    metrics: [
      { label: "직원 수 (FY2017)",      value: "약 9만5천명",   sub: "글로벌 연결 기준" },
      { label: "매출 (FY2017)",         value: "$651억",        sub: "65개 카테고리 합산" },
      { label: "순이익 (FY2017)",       value: "$152억",        sub: "FY2017 기준" },
      { label: "제품 카테고리",         value: "65개",          sub: "트라이언 집중화 요구 대상" },
      { label: "배당 성장 기간",        value: "60년 연속",     sub: "Dividend Aristocrat" },
    ],
    financials: [
      { year: "FY2015", revenue: 76279, cogs: 37056, grossProfit: 39223, sga: 22044, operatingIncome: 10799, ebitda: 14500 },
      { year: "FY2016", revenue: 65299, cogs: 32636, grossProfit: 32663, sga: 18949, operatingIncome: 13441, ebitda: 16000 },
      { year: "FY2017", revenue: 65058, cogs: 32536, grossProfit: 32522, sga: 18568, operatingIncome: 13955, ebitda: 16500 },
      { year: "FY2018", revenue: 66832, cogs: 33264, grossProfit: 33568, sga: 19081, operatingIncome: 14350, ebitda: 17200 },
    ],
    financialsNote: "단위: $M (백만 달러) | US GAAP 연결 기준 | 출처: P&G 연간보고서",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "P&G의 지배구조 문제는 창업 180년의 역사가 만들어낸 조직 경직성이었다. 65개 제품 카테고리를 6개 관리 레이어가 통제하는 구조는 시장 변화 대응을 늦추고 비용을 높였다. 트라이언은 단 1개 이사회 의석으로 이 조직 DNA를 바꾸려 했다.",
    shareholders: [
      {
        id: "vanguard",
        label: "Vanguard",
        sub: "최대 기관주주",
        stake: "8.5%",
        stakePct: 8.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "2대 기관주주",
        stake: "6.2%",
        stakePct: 6.2,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "state-street",
        label: "State Street",
        sub: "3대 기관주주",
        stake: "4.1%",
        stakePct: 4.1,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "trian",
        label: "트라이언 펀드",
        sub: "넬슨 펠츠 행동주의 펀드",
        stake: "1.5%",
        stakePct: 1.5,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "public",
        label: "일반 소수주주",
        sub: "개인·소액 투자자",
        stake: "79.7%",
        stakePct: 79.7,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 11,
      independent: 10,
      affiliated: 1,
      note: "형식적으로는 독립이사 비율이 높음. 그러나 대형 소비재 산업 경험이 부족한 이사들이 전략 감독에 한계를 보였다는 비판.",
    },
    issues: [
      {
        title: "조직 레이어 과다",
        description: "6개 관리 레이어. 의사결정 지연, 비용 증가, 혁신 억압. 트라이언의 핵심 비판 대상.",
        severity: "critical",
      },
      {
        title: "포트폴리오 과다 분산",
        description: "65개 카테고리 동시 운영. 집중 투자 대신 자원 분산. D2C 브랜드와의 속도 경쟁에서 불리.",
        severity: "critical",
      },
      {
        title: "D2C 대응 실패",
        description: "아마존·D2C 브랜드에 시장점유율 잠식. 디지털 마케팅·직접 유통 전환 지연.",
        severity: "high",
      },
      {
        title: "이사회 전문성",
        description: "소비재 디지털 전환 및 D2C 경험 보유 이사 부족. 전략 감독 기능의 실질적 공백.",
        severity: "medium",
      },
    ],
    demands: [
      {
        demand: "넬슨 펠츠 이사회 1석 선임",
        result: "won",
        note: "2017년 9월 주총에서 P&G 0.07% 신승 후, 2017년 12월 P&G가 자발적으로 펠츠에게 이사회 1석 제안.",
      },
      {
        demand: "조직 레이어 6→4 단순화",
        result: "partial",
        note: "펠츠 이사 취임 후 일부 조직 개편 진행. 완전한 4레이어 전환 여부는 불명확.",
      },
      {
        demand: "포트폴리오 집중 (65카테고리 축소)",
        result: "partial",
        note: "P&G는 이미 2014~2016년 포트폴리오 축소를 자체 진행. 트라이언 요구와 방향 일치하나 직접 인과관계 불명확.",
      },
    ],
    stockImpact: {
      preCampaign: "$87",
      peakDuringCampaign: "$130+",
      postCampaign: "$120+",
      note: "트라이언 진입(2017년 2월) $87에서 펠츠 이사 취임(2017년 12월) 후 $130+ 달성. 약 50% 상승. 위임장 대결 직전·직후 주가 변동은 미미했으나 이사 취임 후 중장기 개선.",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "트라이언은 P&G 주식 공개매수 방식으로 지분 1.5%를 취득했다. 이후 이사회 1석(넬슨 펠츠 본인) 선임을 요구하며 위임장 대결을 전개했다. P&G가 거부하자 주주총회에서 이사 선임을 위한 주주 의결권 경쟁이 벌어졌다.",
    preOwnership: {
      nodes: [
        { id: "trian",       label: "트라이언 펀드",         sub: "지분 1.5%, 이사회 1석 요구",            type: "acquirer" },
        { id: "pg-board",    label: "P&G 이사회 (11인)",     sub: "독립이사 10인, 경영진 1인",             type: "target" },
        { id: "pg-mgmt",     label: "P&G 경영진",            sub: "CEO 데이비드 테일러, 펠츠 선임 거부",   type: "entity" },
        { id: "big-three",   label: "빅3 기관주주",          sub: "Vanguard·BlackRock·State Street (캐스팅보트)", type: "fund" },
      ],
      edges: [
        { from: "trian",     to: "pg-board",  label: "1.5% (이사 선임 요구)" },
        { from: "pg-mgmt",   to: "pg-board",  label: "펠츠 거부 권고" },
        { from: "big-three", to: "pg-board",  label: "18.8% (캐스팅보트)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "peltz-director", label: "펠츠 이사 취임",    sub: "2017년 12월, P&G 자발 제안",       type: "acquirer" },
        { id: "pg-new-board",   label: "P&G 이사회 (12인)", sub: "펠츠 포함, 구조조정 가속",          type: "target" },
        { id: "pg-reform",      label: "P&G 조직 개편",     sub: "레이어 축소·카테고리 집중 진행",    type: "entity" },
      ],
      edges: [
        { from: "peltz-director", to: "pg-new-board", label: "이사회 1석 입성" },
        { from: "pg-new-board",   to: "pg-reform",    label: "구조조정 가속" },
      ],
    },
    keyTerms: [
      { label: "트라이언 지분",        value: "1.5%",                   accent: true },
      { label: "투자액",               value: "약 $35억" },
      { label: "이사회 요구",          value: "1석 (펠츠 본인)" },
      { label: "위임장 비용 (양측)",   value: "합산 약 $1억",           accent: true },
      { label: "주총 결과 (9월)",      value: "P&G 0.07% 신승 후 자진 수용", accent: true },
      { label: "주가 수익",            value: "+50% ($87→$130+)" },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "역사상 가장 비용이 많이 든 위임장 대결인 만큼 양측은 최상위 자문단을 구성했다. P&G는 기관 주주 설득을 위해 Goldman Sachs와 Joele Frank를 동원했고, 트라이언은 D.F. King을 중심으로 의결권 확보에 나섰다.",
    sides: [
      {
        side: "target",
        sideLabel: "P&G (방어 측)",
        initials: "PG",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "재무 자문",
            roleType: "financial",
            note: "위임장 대결 방어 전략 수립. 기관투자자 설득 캠페인 지원.",
          },
          {
            firm: "Joele Frank, Wilkinson Brimmer Katcher",
            role: "PR·커뮤니케이션 자문",
            roleType: "other",
            note: "주주 커뮤니케이션 및 공개 메시지 전략 총괄.",
          },
        ],
      },
      {
        side: "acquirer",
        sideLabel: "트라이언 (행동주의 측)",
        initials: "TRN",
        bg: "bg-rose-700",
        advisors: [
          {
            firm: "D.F. King & Co.",
            role: "의결권 수집 자문",
            roleType: "financial",
            note: "주주 의결권 확보 캠페인 전개. 소액주주·기관투자자 대상 펠츠 이사 선임 지지 설득.",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공개 자료 기반입니다. 실제 계약 내용과 다를 수 있습니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "트라이언의 핵심 가치 주장은 P&G의 조직 비효율이 $10억 이상의 연간 비용 절감 기회를 낳고 있다는 것이었다. EV/EBITDA 약 19배에 진입한 트라이언은 마진 개선만으로도 상당한 주가 상승 여력이 있다고 봤다.",
    rows: [
      { item: "P&G 주가 (트라이언 진입)",     val: "$87",     note: "2017년 2월 기준" },
      { item: "EV/EBITDA (FY2017 기준)",      val: "약 19배", note: "진입 시점 밸류에이션" },
      { item: "위임장 대결 직후 주가",        val: "약 $90",  note: "주총 후 단기 변동 미미" },
      { item: "펠츠 이사 취임 후 최고점",     val: "$130+",   note: "2018~2019년",               accent: true },
      { item: "트라이언 투자 수익률",         val: "약 +50%", note: "$87→$130 기준",             accent: true },
      { item: "마진 개선 잠재력 (트라이언)",  val: "$10억+",  note: "연간 비용 절감 추정",       accent: true },
    ],
    disclaimer: "주: 주가 및 밸류에이션은 공개 자료 기반 추정치입니다. 실제 수익과 다를 수 있습니다.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "트라이언은 P&G에 무엇을 요구했나",
      initials: "TRN",
      bg: "bg-rose-700",
      points: [
        "P&G의 65개 카테고리를 집중화하면 마진 개선 가능 — 비핵심 브랜드 매각으로 자본 효율 극대화.",
        "6개 조직 레이어를 4개로 축소해 연간 $10억+ 비용 절감 가능.",
        "D2C·디지털 전환 가속을 위한 이사회 전문성 보강 — 펠츠 본인이 소비재 구조조정 경험자.",
        "이사회 1석이라는 최소 비용으로 최대 레버리지 — 소수 지분($35억)으로 $2,300억 기업의 전략을 바꿀 기회.",
      ],
    },
    seller: {
      title: "P&G는 왜 거부했나",
      initials: "PG",
      bg: "bg-blue-700",
      points: [
        "P&G 경영진은 '구조조정 이미 진행 중'이라 주장 — 2014~2016년 브랜드 수를 170개에서 65개로 이미 축소.",
        "외부 이사 1인이 $650억 규모 소비재 기업의 복잡한 전략을 이해하고 개선할 수 있다고 보지 않음.",
        "트라이언의 레스토랑 체인·소비재 구조조정 경험이 P&G의 글로벌 CPG 전략에 적용 가능한지 회의적.",
        "위임장 대결 자체가 경영진 집중력 분산과 비용($1억)을 초래하며 주주 가치를 오히려 훼손한다는 논리.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "펠츠 이사 취임 후 P&G는 마진 개선, 카테고리 집중, 디지털 마케팅 강화를 가속했다. 주가는 $87에서 $130+로 약 50% 상승했다. 다만 이 성과가 펠츠 이사 1인의 기여인지 P&G 자체 구조조정 동력인지는 인과관계가 불명확하다.",
    overallVerdict: "트라이언 승리, P&G 장기 구조조정 가속",
    positives: [
      "펠츠 이사 취임 후 P&G 마진 개선, 카테고리 정리, 주가 50%+ 달성.",
      "트라이언은 $35억 투자에서 약 50% 수익률 실현.",
      "위임장 대결 자체가 P&G 경영진에게 구조조정 가속 신호를 보내는 효과.",
    ],
    risks: [
      "이사 1인이 실제 변화를 얼마나 이끌었는지 인과관계 불명확. P&G 자체 구조조정 계획과 겹침.",
      "$1억의 위임장 대결 비용이 실제 주주 가치에 기여했는지 논쟁 가능.",
      "FMCG 행동주의의 한계: D2C·디지털 전환은 이사회 1석으로 해결하기 어려운 장기 구조 문제.",
    ],
    editorNote:
      "트라이언-P&G는 거대 기업에 대한 행동주의의 가능성과 한계를 동시에 보여준다. $1억을 선거운동에 쓰고 이사 1석을 얻었지만, 그 1석이 $800억 시가총액을 끌어올렸다. 행동주의의 레버리지 비율을 극명하게 보여주는 사례다.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "TRN",
    acquirerBg: "bg-rose-700",
    targetInitials: "PG",
    targetBg: "bg-blue-700",
    acquirerName: "트라이언 펀드",
    targetName: "P&G",
    dealTitle: "Trian Fund Management's Proxy Battle at Procter & Gamble",
    dealSize: "투자액 약 $35억",
    dealSizeUSD: "approx. USD 3.5 Billion",
    evEbitda: "약 19× (진입 시)",
    closeDate: "Dec 2017",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    { id: 1, text: "트라이언 펀드 매니지먼트, P&G 13F 공시 (2017.02.09)" },
    { id: 2, text: "P&G 2017 Annual Proxy Statement (DEF 14A), 주주총회 결과 공시 (2017.09)" },
    { id: 3, text: "트라이언 펀드, 'Revitalizing P&G' 백서 (2017년)" },
    { id: 4, text: "Wall Street Journal, 'P&G Adds Peltz to Board After Narrow Proxy Victory' (2017.12)" },
    { id: 5, text: "P&G Annual Reports FY2015~FY2018" },
    { id: 6, text: "Bloomberg, 'P&G's $100 Million Proxy Fight Ends With Trian's Nelson Peltz on Board' (2017.12)" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "넬슨 펠츠 트라이언 vs P&G — 역사상 가장 비싼 위임장 대결 완전 해부",
    description:
      "트라이언 넬슨 펠츠의 P&G 행동주의 완전 분석. 위임장 대결 비용 $1억, 0.07% 차이 주총 결과, 이사회 1석으로 주가 50% 상승. FMCG 행동주의의 교과서 사례.",
    keywords: [
      "트라이언 P&G",
      "넬슨 펠츠 행동주의",
      "P&G 위임장 대결",
      "P&G 이사회",
      "소비재 행동주의",
      "P&G 주가",
      "FMCG 구조조정",
      "Trian P&G",
      "행동주의 이사회 입성",
      "P&G 조직개편",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "위임장 대결 (Proxy Fight)",
      description: "행동주의 펀드가 이사회 의석을 차지하기 위해 기존 경영진과 주주 의결권을 놓고 경쟁하는 방식. 트라이언-P&G가 역사상 가장 비용이 많이 든 사례.",
    },
    {
      term: "FMCG 구조조정",
      description: "소비재 기업이 포트폴리오 집중·비용 절감·디지털 전환을 통해 수익성을 개선하는 과정. D2C 브랜드 부상으로 필요성이 급증했다.",
    },
    {
      term: "조직 레이어 축소",
      description: "기업의 관리 계층(레이어) 수를 줄여 의사결정 속도를 높이고 비용을 절감하는 구조조정 방식. 트라이언이 P&G에 요구한 핵심 변화.",
    },
    {
      term: "포트폴리오 집중 전략",
      description: "기업이 비핵심 브랜드·사업을 매각하고 핵심 고수익 부문에 자원을 집중하는 전략. P&G는 2014~2016년 170개→65개 브랜드로 자체 축소.",
    },
    {
      term: "이사회 1석의 가치",
      description: "행동주의 펀드가 이사회 의석 1개를 통해 기업 전략·자본 배분·경영진 성과 평가에 직접 영향력을 행사하는 방식.",
    },
    {
      term: "소비재 행동주의",
      description: "FMCG·소비재 기업의 조직 경직성·브랜드 과다·디지털 전환 지연을 타겟으로 한 행동주의 캠페인. 트라이언-P&G가 교과서 사례.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "넬슨 펠츠가 P&G에 무엇을 요구했나?",
      a: "트라이언의 핵심 요구는 세 가지였다. 첫째, 넬슨 펠츠 본인을 이사회에 선임할 것. 둘째, 6개 조직 관리 레이어를 4개로 축소해 연간 $10억+ 비용 절감. 셋째, 65개 제품 카테고리를 집중화하고 비핵심 브랜드를 매각해 자원 효율을 높일 것. 이 세 요구를 담은 'Revitalizing P&G' 백서를 공개했다.",
    },
    {
      q: "P&G가 위임장 대결에서 이기고도 왜 펠츠를 이사로 받아들였나?",
      a: "2017년 9월 주주총회에서 P&G는 0.07%(8.4억 주 중 약 600만 주 차이)로 신승했다. 이는 사실상 주주들의 경영진 신임이 극도로 낮다는 신호였다. P&G는 재검표 후에도 결과가 유지됐지만, 2017년 12월 자진해서 펠츠에게 이사회 1석을 제안했다. 이사회 신뢰도를 회복하고 추가 캠페인을 방지하기 위한 전략적 항복이었다.",
    },
    {
      q: "0.07% 차이 주주총회가 어떻게 가능한가?",
      a: "P&G 주주 기반은 Vanguard·BlackRock·State Street 등 대형 패시브 운용사들이 18%+를 보유하는 구조다. 이들이 중립을 취할 경우 1~2%대 소수 행동주의 펀드와 경영진 간 결과가 극도로 박빙이 될 수 있다. 또한 트라이언이 다수의 소액주주들을 D.F. King을 통해 개별 설득하는 의결권 수집 캠페인을 벌이며 기울어진 운동장을 좁혔다.",
    },
    {
      q: "트라이언은 P&G 캠페인에서 얼마나 벌었나?",
      a: "트라이언은 2017년 2월 P&G 지분 1.5%를 약 $35억에 취득했다(주가 기준 약 $87). 펠츠 이사 취임 후 P&G 주가는 $130+로 상승해 약 50% 수익률을 기록했다. 절대 수익 기준으로는 약 $17억+ 이상의 평가이익을 얻은 것으로 추정된다.",
    },
    {
      q: "펠츠 이사 취임 후 P&G는 실제로 바뀌었나?",
      a: "P&G는 펠츠 이사 취임 후 조직 레이어 감소, 마케팅 비용 효율화, 디지털 채널 강화를 가속했다. 영업이익률과 자유현금흐름이 개선됐고 주가는 2020년대에도 계속 상승했다. 다만 이 변화가 펠츠 이사 1인의 직접 기여인지 CEO 데이비드 테일러의 자체 구조조정 동력인지는 인과관계가 명확하지 않다.",
    },
    {
      q: "FMCG 행동주의의 특징은 무엇인가?",
      a: "FMCG 행동주의는 브랜드 포트폴리오 과다·조직 관료화·D2C 대응 실패라는 공통 문제를 타겟으로 한다. 지분율이 낮아도(1~2%) 이사회 진입이 가능하며, 이사회 1석만으로도 $1,000억+ 기업의 전략을 바꿀 수 있는 레버리지가 있다. 트라이언-P&G 이후 Unilever(Nelson Peltz, 2022)·Kellogg·3G Capital 등 유사 캠페인이 이어졌다.",
    },
  ],
};

export default deal;
