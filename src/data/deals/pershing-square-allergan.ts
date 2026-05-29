import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "pershing-square-allergan",
  title: "퍼싱스퀘어 + Valeant vs Allergan — 행동주의-인수자 연합이 열어젖힌 법적 경계",
  subtitle: "빌 애크먼 · 토홀드 전략 · 화이트 나이트 Actavis · SEC 쟁점 · Botox 독점 가치",
  category: "activism",
  industry: "제약·바이오",
  country: "미국",
  announcedAt: "2014-04-22",
  closedAt: "2014-11-17",
  announcedDisplay: "2014년 4월",
  closedDisplay: "2014년 11월",
  readingMinutes: 12,
  tags: [
    "퍼싱스퀘어",
    "빌 애크먼",
    "Valeant",
    "Allergan",
    "Botox",
    "토홀드 전략",
    "화이트 나이트",
    "행동주의",
    "Actavis",
    "적대적 인수",
    "SEC 조사",
  ],
  excerpt:
    "빌 애크먼의 퍼싱스퀘어가 Valeant와 손잡고 Allergan 주식 9.7%($4.35B)를 공개 입찰 전에 비밀 매집. Valeant의 $45.6B 적대적 입찰이 시작됐지만, 화이트 나이트 Actavis가 $66B에 Allergan을 낚아채며 퍼싱스퀘어는 9개월 만에 $2.6B 수익을 올렸다. 역사상 가장 논쟁적인 행동주의-인수자 연합 사례.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "PS",  bg: "bg-slate-700",  label: "퍼싱스퀘어 + Valeant" },
  target:   { initials: "AGN", bg: "bg-indigo-700", label: "Allergan" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "Allergan Inc.(티커: AGN)은 Botox로 유명한 미국 제약사다. 미용 시술과 의료 치료 양쪽에서 독점적 브랜드 파워를 가진 Botox는 수십억 달러 규모의 프랜차이즈로, 강력한 가격 결정력과 특허 해자를 자랑했다. 2014년 초 Allergan의 주가는 약 $120 선에서 거래되고 있었고, 시장은 Allergan의 꾸준한 성장세를 인정하면서도 추가 상승 여력에 대해서는 반신반의하는 상황이었다.",
    "Valeant Pharmaceuticals(CEO Mike Pearson)는 당시 제약업계의 이단아였다. 자체 R&D 투자를 최소화하고, 검증된 브랜드 의약품을 인수해 비용을 극한으로 절감한 뒤 가격을 올려 마진을 극대화하는 '롤업(Roll-up)' 전략으로 고속 성장했다. 그러나 Valeant는 Allergan 같은 대형 타겟을 단독으로 인수하기에는 주주 기반과 인수 실행력에 한계가 있었다. 여기서 빌 애크먼의 퍼싱스퀘어가 등장한다.",
    "2014년 초 Mike Pearson은 빌 애크먼에게 파격적인 공동 투자 제안을 했다. 구조는 다음과 같았다: 퍼싱스퀘어가 Allergan 주식을 조용히 대량 매집한다. Valeant가 공식 적대적 인수 입찰을 선언하면, 퍼싱스퀘어는 이를 공개 지지한다. 퍼싱스퀘어는 이미 주가가 올라 있는 토홀드(toehold) 지분에서 막대한 수익을 거둔다. 이 구조의 핵심 문제는 퍼싱스퀘어가 Valeant의 비공개 인수 계획을 알고 있는 상태에서 주식을 매집한다는 것이었다 — 사실상 미공개 중요 정보(MNPI) 이용 거래라는 의혹의 씨앗이었다.",
    "2014년 2월부터 4월에 걸쳐 퍼싱스퀘어는 평균 $125~130 수준에서 Allergan 주식을 극비리에 매집했다. 총 매집량은 Allergan 발행주식의 약 9.7%, 총 투자액은 약 $4.35B에 달했다. 이 기간 동안 시장은 전혀 눈치채지 못했다. 하트-스콧-로디노(HSR) 법상 5% 이상 지분 취득 후 10일 이내 공시 의무가 있지만, 2014년 당시 규정상 10일의 창(window)이 존재했고, 퍼싱스퀘어는 이 창을 최대한 활용해 지분을 추가 매집했다.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "토홀드 $4.35B (지분 9.7%) → $2.6B 수익",
    acquirerName: "퍼싱스퀘어 + Valeant Pharmaceuticals",
    targetName: "Allergan Inc.",
    announcedDisplay: "2014년 4월",
    closedDisplay: "2014년 11월 (Actavis 인수)",
    country: "미국",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "퍼싱스퀘어, Valeant와 공동 투자 협약 체결 후 Allergan 주식 9.7%(약 $4.35B)를 Valeant의 공개 입찰 전에 비밀 매집.",
    "2014년 4월 22일: Valeant 공식 적대적 인수 입찰 $45.6B (주당 $152, 혼합 현금·주식) 선언.",
    "Allergan CEO David Pyott, 입찰을 '재정적·과학적으로 파산한 제안'이라 비판하며 강력 방어 전략 전개.",
    "화이트 나이트 Actavis Plc 등장 — 2014년 11월 17일 $66B(주당 $219)에 Allergan 인수 합의.",
    "퍼싱스퀘어 수익: 매입가 $125~130 vs 매각가 $219 → 약 $2.6B 수익, 9개월 수익률 약 65~70%.",
    "SEC, 퍼싱스퀘어-Valeant 공동 투자 협약의 MNPI 이용 여부 조사 — 2014년 규정상 기술적으로 합법 판정, 규제 개혁 논의 촉발.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "2014년 미국 제약 산업은 '특허 절벽(Patent Cliff)' 이후 대규모 M&A 재편기의 한가운데 있었다. 블록버스터 의약품의 특허 만료로 수익이 감소한 빅파마들은 인수를 통한 파이프라인 보충에 혈안이 됐고, Valeant 같은 롤업 모델이 월가의 총아가 됐다. 한편 Allergan의 Botox는 특허 해자가 탄탄하고, 미용 시술 시장의 폭발적 성장과 맞물려 독보적 프랜차이즈 가치를 인정받고 있었다. 행동주의 펀드가 제약 M&A의 촉매 역할을 맡는 새로운 생태계가 이 딜에서 처음으로 공개적으로 드러났다.",
    metrics: [
      { label: "Valeant 공개 입찰가",          value: "$45.6B",     sub: "주당 $152, 2014년 4월 기준" },
      { label: "Actavis 최종 인수가",           value: "$66B",       sub: "주당 $219, 화이트 나이트" },
      { label: "퍼싱스퀘어 토홀드 지분",        value: "9.7%",       sub: "총 $4.35B 매집" },
      { label: "퍼싱스퀘어 최종 수익 (추정)",   value: "~$2.6B",     sub: "9개월, 수익률 약 65~70%" },
    ],
    subBody:
      "Botox(보툴리눔 독소 A형)는 미용 시술(주름 제거) 및 의료 치료(편두통·과민성 방광 등) 양쪽에서 독점적 지위를 유지했다. 브랜드 프리미엄과 지속적 가격 인상 여력이 Allergan의 핵심 가치였고, Valeant가 가장 탐낸 자산이기도 했다.",
    players: [
      { name: "빌 애크먼 / 퍼싱스퀘어",                    role: "행동주의 헤지펀드 — Allergan 9.7% 토홀드 매집, Valeant 입찰 공개 지지" },
      { name: "Mike Pearson / Valeant Pharmaceuticals",    role: "롤업 인수자 — $45.6B 적대적 공개 입찰 선언, R&D 절감 전략" },
      { name: "David Pyott / Allergan",                    role: "Allergan CEO — 입찰 거부, 화이트 나이트 전략으로 방어" },
      { name: "Actavis Plc (Brent Saunders CEO)",          role: "화이트 나이트 — $66B로 Allergan 우호적 인수 합의" },
      { name: "SEC",                                       role: "규제 기관 — 퍼싱스퀘어-Valeant 공동 협약의 MNPI 이용 여부 조사" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Allergan Inc.",
    body: "Allergan Inc.은 1948년 설립된 캘리포니아 기반 제약사로, 전 세계 Botox 시장의 절대 강자였다. Botox는 단순한 의약품을 넘어 글로벌 미용 문화의 아이콘이 됐고, 미용 시술(주름 제거)과 의료 치료(편두통, 과민성 방광, 안검 경련 등) 양 시장에서 독점적 지위를 유지했다. Allergan의 경영진은 R&D에 집중 투자하는 '과학 중심' 전략을 고수했다. Valeant의 R&D 절감 전략은 Allergan의 기업 철학과 정면으로 배치됐으며, CEO David Pyott는 이를 'Botox 프랜차이즈 가치를 파괴하는 행위'라고 강하게 비판했다.",
    metrics: [
      { label: "설립연도",                      value: "1948년",      sub: "캘리포니아 기반 제약사" },
      { label: "Botox 글로벌 시장 지위",         value: "압도적 1위",  sub: "미용·의료 치료 양 시장 독점" },
      { label: "연 매출 (FY2013)",               value: "$6.0B",      sub: "약 70%가 Botox 관련 수익" },
      { label: "EV/EBITDA (Actavis 인수가 기준)", value: "~22.0×",    sub: "FY2014 EBITDA $3.0B 기준" },
      { label: "시가총액 (행동주의 진입 전)",     value: "~$35B",      sub: "2014년 1월 기준" },
      { label: "Actavis 최종 인수가",            value: "$66B",       sub: "주당 $219" },
    ],
    financials: [
      {
        year: "FY2012",
        revenue: 5485,
        cogs: 1242,
        grossProfit: 4243,
        sga: 2580,
        operatingIncome: 1663,
        ebitda: 2100,
      },
      {
        year: "FY2013",
        revenue: 6013,
        cogs: 1360,
        grossProfit: 4653,
        sga: 2800,
        operatingIncome: 1853,
        ebitda: 2350,
      },
      {
        year: "FY2014",
        revenue: 7246,
        cogs: 1612,
        grossProfit: 5634,
        sga: 3200,
        operatingIncome: 2434,
        ebitda: 3020,
      },
    ],
    financialsNote: "단위: $M (백만 달러) | FY2014는 Actavis 인수 완료 전 연환산 기준 | 출처: Allergan 연간보고서 및 공시자료",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "이 딜의 지배구조 논쟁은 전례 없는 복잡성을 가졌다. 행동주의 펀드(퍼싱스퀘어)가 인수자(Valeant)의 '사전 파트너'가 되어 공개 입찰 전에 토홀드 지분을 매집한 구조는, 기존의 행동주의 캠페인도 아니고 전통적 적대적 M&A도 아닌 새로운 혼합 전략이었다. Allergan 경영진은 이사회를 굳건히 방어하며 화이트 나이트를 탐색했고, 주주들은 $219 인수가를 통해 결국 최대 수익을 거뒀다. 퍼싱스퀘어는 행동주의자이면서 동시에 금융 투기자였고, 이 이중적 역할이 SEC 조사와 규제 개혁 논의의 불씨가 됐다.",
    shareholders: [
      {
        id: "pershing",
        label: "퍼싱스퀘어 캐피탈",
        sub: "빌 애크먼 — Valeant 입찰 공개 지지",
        stake: "9.7%",
        stakePct: 9.7,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "vanguard",
        label: "Vanguard",
        sub: "글로벌 패시브 운용사",
        stake: "6.5%",
        stakePct: 6.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "글로벌 기관투자자",
        stake: "5.8%",
        stakePct: 5.8,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "mgmt",
        label: "경영진 (CEO Pyott 외)",
        sub: "David Pyott CEO 중심 경영팀",
        stake: "1.2%",
        stakePct: 1.2,
        type: "management",
        alignment: "pro",
      },
      {
        id: "public",
        label: "일반 주주",
        sub: "개인·기타 기관 주주",
        stake: "76.8%",
        stakePct: 76.8,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 9,
      independent: 8,
      affiliated: 1,
      note: "Allergan 이사회는 독립 이사 중심으로 구성됐다. 이사회는 Valeant의 입찰을 '저가 적대적 제안'으로 판단, 경영진의 화이트 나이트 전략을 전폭 지원했다. Actavis와의 협상 과정에서 이사회는 주주 가치 극대화 의무를 충실히 이행했다는 평가를 받는다.",
    },
    issues: [
      {
        title: "MNPI 이용 토홀드 매집 — SEC 조사 대상",
        description: "퍼싱스퀘어는 Valeant의 비공개 인수 계획을 사전에 알고 있는 상태에서 Allergan 주식을 매집했다. 이는 미공개 중요 정보(MNPI) 이용 거래로 볼 여지가 있었다. SEC는 공식 조사에 착수했고, 규제 당국과 법학자들 사이에서 격렬한 논쟁이 벌어졌다.",
        severity: "critical",
      },
      {
        title: "행동주의-인수자 연합 구조의 이해충돌",
        description: "퍼싱스퀘어는 Allergan 주주(주주 가치 극대화 의무)이면서 동시에 Valeant의 입찰 지지자(Valeant 이익 도모)였다. 두 역할이 구조적으로 이해충돌을 일으킬 수 있다는 비판이 있었다.",
        severity: "critical",
      },
      {
        title: "HSR 10일 공시 창(Window) 악용 논란",
        description: "2014년 당시 HSR 규정상 5% 초과 지분 취득 후 10일 이내에 공시하면 됐다. 퍼싱스퀘어는 이 10일 창을 활용해 공시 전에 추가 지분을 매집했다. 이 규정이 사전 계획 인수자의 비밀 매집을 허용하는 허점이라는 지적이 나왔다.",
        severity: "high",
      },
      {
        title: "Valeant R&D 절감 전략의 장기 가치 훼손",
        description: "Valeant는 인수 후 Allergan R&D를 90% 이상 삭감할 계획이었다. Allergan 경영진과 애널리스트들은 이것이 Botox 프랜차이즈의 장기 성장 엔진을 파괴한다고 우려했다.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "Allergan 이사회가 Valeant 입찰을 수용할 것",
        result: "lost",
        note: "Allergan 이사회는 Valeant의 입찰을 수차례 거부했다. 이후 Actavis 화이트 나이트를 선택.",
      },
      {
        demand: "Allergan 이사회 교체 (Valeant-퍼싱스퀘어 추천 이사 슬레이트)",
        result: "lost",
        note: "Actavis의 화이트 나이트 인수로 이사회 교체 절차가 무력화됐다.",
      },
      {
        demand: "주주 가치 극대화 달성",
        result: "won",
        note: "퍼싱스퀘어 매입가 $125~130 대비 Actavis 인수가 $219 — 주주 가치는 결과적으로 극대화됐다.",
      },
    ],
    stockImpact: {
      preCampaign: "$120",
      peakDuringCampaign: "$220",
      postCampaign: "$219",
      note: "2014년 1월 $120 수준이던 Allergan 주가는 Actavis 인수가 $219에 합의되며 약 83% 상승. 퍼싱스퀘어는 매입가 $125~130 대비 약 65~70% 수익률, 달러 기준 약 $2.6B 수익을 9개월 만에 실현했다.",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "이 딜의 구조는 세 단계로 나뉜다. (1) 퍼싱스퀘어의 비밀 토홀드 매집(2~4월) → (2) Valeant의 공개 적대적 입찰과 Allergan의 강력 방어(4~10월) → (3) Actavis 화이트 나이트 등장과 최종 합의(11월). 퍼싱스퀘어는 전통적 행동주의자도 아니고 인수자도 아닌, 재무적 이익을 위해 인수자의 편에 선 '파트너-투기자'로서 기능했다. 이 구조 자체가 M&A 역사에서 전례가 없는 혁신이자 논란이었다.",
    preOwnership: {
      nodes: [
        { id: "pershing",   label: "퍼싱스퀘어",          sub: "9.7% 토홀드 비밀 매집 완료",      type: "acquirer" },
        { id: "valeant",    label: "Valeant",             sub: "공개 입찰 준비 중 ($45.6B)",      type: "fund" },
        { id: "allergan",   label: "Allergan",            sub: "Botox 제조사, 행동주의 타겟",     type: "target" },
        { id: "pyott",      label: "David Pyott CEO",     sub: "입찰 거부, 화이트 나이트 탐색",  type: "entity" },
        { id: "inst",       label: "기관투자자",           sub: "Vanguard·BlackRock 등 중립",    type: "public" },
      ],
      edges: [
        { from: "pershing", to: "allergan", label: "9.7% 비밀 매집" },
        { from: "valeant",  to: "allergan", label: "$45.6B 적대적 입찰 준비" },
        { from: "pershing", to: "valeant",  label: "공동 투자 협약 (MNPI 논란)" },
        { from: "pyott",    to: "allergan", label: "CEO — 입찰 방어" },
        { from: "inst",     to: "allergan", label: "~18.5% 보유 (중립)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "actavis",    label: "Actavis Plc",         sub: "화이트 나이트, $66B 최종 인수",  type: "acquirer" },
        { id: "allergan",   label: "Allergan",            sub: "Actavis에 $219/주 매각",        type: "target" },
        { id: "pershing",   label: "퍼싱스퀘어",          sub: "~$2.6B 수익, 9개월 만에 엑싯",  type: "fund" },
        { id: "valeant",    label: "Valeant",             sub: "입찰 실패, 시장 신뢰 타격",     type: "entity" },
      ],
      edges: [
        { from: "actavis",  to: "allergan", label: "$66B 우호적 인수 완료" },
        { from: "pershing", to: "actavis",  label: "지분 $219에 매각" },
        { from: "valeant",  to: "allergan", label: "입찰 철회 (화이트 나이트에 패배)" },
      ],
    },
    keyTerms: [
      { label: "퍼싱스퀘어 토홀드 매집액",     value: "~$4.35B (지분 9.7%)",            accent: true },
      { label: "Valeant 적대적 입찰가",        value: "$45.6B ($152/주)",               accent: false },
      { label: "Actavis 화이트 나이트 인수가",  value: "$66B ($219/주)",                 accent: true },
      { label: "퍼싱스퀘어 수익 (추정)",        value: "~$2.6B (9개월, 수익률 ~65%+)",  accent: true },
      { label: "SEC 조사 결과",                value: "기술적 합법 (2014년 규정)",       accent: false },
      { label: "거래 종결",                    value: "2014년 11월 17일",               accent: false },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "퍼싱스퀘어와 Valeant 연합은 공격적 M&A에 정통한 자문단을 구성했다. Allergan은 독립 재무 자문과 최고 수준의 M&A 로펌을 동원해 입찰을 방어하고 Actavis와의 협상을 이끌었다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "퍼싱스퀘어 + Valeant (공격 측)",
        initials: "PS",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Citigroup",
            role: "Valeant 재무 자문",
            roleType: "financial",
            note: "Valeant 적대적 입찰 구조 설계, 인수 금융 주선 및 공개 프레젠테이션 지원.",
          },
          {
            firm: "RBC Capital Markets",
            role: "Valeant 공동 재무 자문",
            roleType: "financial",
            note: "Valeant 주주들을 대상으로 한 딜 가치 커뮤니케이션 지원.",
          },
          {
            firm: "Paul, Weiss, Rifkind, Wharton & Garrison",
            role: "퍼싱스퀘어 법무 자문",
            roleType: "legal",
            note: "공동 투자 협약 구조 설계, SEC 공시 전략, HSR 신고 법적 쟁점 대응.",
          },
          {
            firm: "Skadden, Arps, Slate, Meagher & Flom",
            role: "Valeant 법무 자문",
            roleType: "legal",
            note: "적대적 M&A 전략 수립, 이사회 교체 절차 법적 자문.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Allergan (방어 측)",
        initials: "AGN",
        bg: "bg-indigo-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "재무 자문 (방어)",
            roleType: "financial",
            note: "Allergan 독립 기업 가치 평가, Valeant 입찰 반박 자료 작성, Actavis 화이트 나이트 협상 지원.",
          },
          {
            firm: "BofA Merrill Lynch",
            role: "공동 재무 자문 (방어)",
            roleType: "financial",
            note: "Allergan 주주 소통 및 Botox 프랜차이즈 가치 방어 논리 개발.",
          },
          {
            firm: "Latham & Watkins",
            role: "법무 자문 (방어)",
            roleType: "legal",
            note: "Allergan 이사회 방어 전략, 퍼싱스퀘어-Valeant 협약의 MNPI 이용 SEC 신고, Actavis 합병 계약 협상.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "공동 법무 자문 (방어)",
            roleType: "legal",
            note: "행동주의 방어 및 이사회 의무 이행 자문. 독약 조항(Poison Pill) 전략 검토.",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공개 자료 기반으로 일부 자문사는 공식 확인되지 않을 수 있습니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "Valeant의 $45.6B 적대적 입찰과 Actavis의 $66B 화이트 나이트 가격 사이에는 약 $20B의 간극이 있었다. 이 간극은 Botox 프랜차이즈의 장기 성장 가치와 R&D 지속 투자의 미래 가치를 어떻게 평가하느냐에서 비롯됐다. Allergan 경영진과 Goldman Sachs는 Valeant의 R&D 삭감 계획이 장기 가치를 심각하게 훼손한다고 봤고, Actavis는 그 가치를 인정해 더 높은 프리미엄을 제시했다.",
    rows: [
      { item: "퍼싱스퀘어 매입가 (평균)",             val: "~$127.5/주",     note: "2014년 2~4월 비밀 매집, 총 $4.35B" },
      { item: "Valeant 최초 입찰가",                  val: "$152/주",        note: "2014년 4월 22일 공개 발표" },
      { item: "Valeant 최종 상향 입찰가",             val: "$200/주 상당",   note: "현금 + Valeant 주식 혼합 조건" },
      { item: "Actavis 화이트 나이트 최종 인수가",    val: "$219/주",        note: "2014년 11월 17일 합의",               accent: true },
      { item: "Actavis 인수 EV",                      val: "~$66B",         note: "Allergan 기업가치 + 순부채 포함" },
      { item: "EV/EBITDA (Actavis 인수가 기준)",      val: "~22.0×",        note: "FY2014E EBITDA ~$3.0B 기준",          accent: true },
      { item: "퍼싱스퀘어 실현 수익 (추정)",          val: "~$2.6B",        note: "$127.5 → $219, 수익률 약 72%",        accent: true },
    ],
    disclaimer: "주: 퍼싱스퀘어 최종 수익은 매각 타이밍과 구조에 따라 달라질 수 있습니다. Actavis 인수가는 현금·주식 혼합 대가 기준입니다.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "퍼싱스퀘어 + Valeant는 왜 이 구조를 선택했나",
      initials: "PS",
      bg: "bg-slate-700",
      points: [
        "토홀드 전략의 비대칭 수익 구조: 공개 입찰 전에 주식을 매집하면 입찰 발표 후 주가 급등에서 최대 수익을 거둘 수 있다. Valeant가 성공하면 수익, Allergan이 더 높은 가격의 화이트 나이트를 찾아도 수익 — 리스크 비대칭 구조.",
        "Valeant의 Allergan 인수 논리: Allergan의 높은 R&D 비용(매출의 ~17%)을 Valeant 방식으로 5% 이하로 삭감하면 막대한 비용 절감이 가능하다. Botox 브랜드는 특별한 R&D 없이도 유지될 수 있다는 주장.",
        "퍼싱스퀘어에게 Allergan은 이상적 타겟이었다: 분산주주 구조, Botox라는 명확한 핵심 자산, 경영진 교체 없이도 수익화 가능한 비밀 토홀드 전략.",
        "공동 투자 협약의 인센티브 정렬: 퍼싱스퀘어는 딜이 성사되면 수익, 안 되어도 주가 상승으로 수익 — Valeant의 승패와 무관하게 퍼싱스퀘어의 수익은 보장된 구조.",
      ],
    },
    seller: {
      title: "Allergan은 왜 Valeant를 거부하고 Actavis를 선택했나",
      initials: "AGN",
      bg: "bg-indigo-700",
      points: [
        "Valeant의 R&D 절감 계획은 Botox 프랜차이즈의 지속적 성장 엔진을 파괴한다. Allergan 경영진은 Botox의 새로운 의료 적응증 확대를 통한 성장 계획을 갖고 있었다.",
        "Actavis의 $219/주 제안은 Valeant의 $152 대비 44% 높았고, 현금 비중도 더 높아 주주 가치 면에서 명확히 우월했다.",
        "Allergan 이사회는 독립 이사 중심으로 구성돼 있었고, 주주 이익 극대화 의무를 이행해야 했다. Actavis의 더 높은 인수가는 이 의무를 충족했다.",
        "퍼싱스퀘어-Valeant의 공동 협약 구조에 대한 법적·윤리적 문제를 SEC에 신고해 시간을 벌고, 그 사이 Actavis와 협상을 진행하는 '화이트 나이트 유치' 전략이 완벽하게 작동했다.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "Actavis의 Allergan 인수는 이후 Actavis가 사명을 'Allergan'으로 변경(2015년)하는 방향으로 전개됐고, 이 새 Allergan은 다시 AbbVie에 2020년 약 $630억에 인수됐다. Botox는 AbbVie의 핵심 자산으로 지금도 글로벌 미용·의료 시장의 독점적 브랜드다. Valeant는 Allergan 인수 실패 이후 자체 회계 분식 스캔들, 약가 인상 논란, 경영진 교체 등 위기가 겹치며 Bausch Health로 사명을 변경하고 주가가 고점 대비 97% 이상 폭락하는 비극을 맞았다. 퍼싱스퀘어의 $2.6B 수익은 눈부셨지만, SEC 조사와 이로 촉발된 규제 논쟁은 행동주의 투자의 법적 경계를 다시 그리는 계기가 됐다.",
    overallVerdict: "퍼싱스퀘어 재무적 대승 — 그러나 법적·윤리적 선례로 남다",
    positives: [
      "퍼싱스퀘어: $4.35B 투자 → $2.6B 수익, 9개월 수익률 약 65~70%. 역대 단일 캠페인 중 가장 빠른 대규모 수익 사례 중 하나.",
      "Allergan 주주 전체: 주가 $120(2014년 1월) → $219(Actavis 인수가) = 약 83% 상승. 화이트 나이트 경쟁 덕분에 최고 가격 실현.",
      "Actavis: Botox를 포함한 Allergan의 포트폴리오를 $66B에 획득. 이후 'Allergan' 사명으로 재탄생해 메가 제약사로 도약.",
      "M&A 생태계: 행동주의-인수자 공동 협약이라는 새 구조를 제시하며 딜 메이킹의 창의성 한계를 시험했다.",
    ],
    risks: [
      "Valeant의 R&D 절감 전략이 성공했다면 Botox 파이프라인이 고갈됐을 것이다. 화이트 나이트 Actavis의 개입이 없었다면 Allergan 주주와 환자 모두에게 장기 피해가 우려됐다.",
      "SEC 조사 이후 행동주의 헤지펀드의 사전 지분 매집과 인수자 협약에 대한 규제 강화 논의가 이어졌다. 퍼싱스퀘어의 구조가 향후 유사 딜을 어렵게 만들었다.",
      "퍼싱스퀘어는 이 딜 성공 직후 캐나다 퍼시픽 이후 최대 실패작인 Valeant 주식 직접 투자로 막대한 손실을 입었다 — 아이러니하게도 Valeant와의 협업이 이후 재앙의 씨앗이 됐다.",
    ],
    editorNote:
      "퍼싱스퀘어-Allergan 딜은 행동주의 투자가 M&A의 전통적 경계를 얼마나 유연하게 넘나들 수 있는지를 보여준 동시에, 그 경계를 넘을 때 따르는 법적·윤리적 대가를 보여준 교과서적 사례다. 빌 애크먼은 $2.6B를 벌었지만, 그 직후 Valeant 주식에 직접 투자해 약 $4B를 잃었다 — 시장은 결국 공정했다.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "PS",
    acquirerBg: "bg-slate-700",
    targetInitials: "AGN",
    targetBg: "bg-indigo-700",
    acquirerName: "퍼싱스퀘어 + Valeant Pharmaceuticals",
    targetName: "Allergan Inc.",
    dealTitle: "Pershing Square + Valeant × Allergan — 행동주의-인수자 연합의 법적 경계",
    dealSize: "$4.35B 토홀드 (지분 9.7%)",
    dealSizeUSD: "$4.35B → $2.6B 수익",
    evEbitda: "~22.0× (Actavis 인수가 기준)",
    closeDate: "2014년 11월 (Actavis 인수)",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    { id: 1,  text: "퍼싱스퀘어, Allergan 지분 취득 SEC 13D 공시 (2014.04.21)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=pershing+square&CIK=&type=SC+13D&dateb=&owner=include&count=40" },
    { id: 2,  text: "Valeant Pharmaceuticals, Allergan 공개 인수 제안 발표 보도자료 (2014.04.22)" },
    { id: 3,  text: "Allergan Inc., Valeant 입찰 거부 이사회 공식 성명 (2014.04~10)" },
    { id: 4,  text: "Actavis Plc, Allergan 인수 합의 공시 (2014.11.17)", url: "https://www.sec.gov/Archives/edgar/data/1522540/000152254014000007/0001522540-14-000007-index.htm" },
    { id: 5,  text: "Allergan Inc. 연간보고서 FY2012, FY2013, FY2014, SEC EDGAR" },
    { id: 6,  text: "SEC 보도자료, 퍼싱스퀘어-Valeant 공동 투자 협약 조사 결과 (2015)" },
    { id: 7,  text: "William Ackman, Pershing Square Capital Management — Allergan 투자 프레젠테이션 (2014.04.)" },
    { id: 8,  text: "Financial Times, 'Ackman's Allergan bet: the toehold that changed M&A' (2014.12)" },
    { id: 9,  text: "Wall Street Journal, 'Valeant's Failed Allergan Bid: A Post-Mortem' (2014.11)" },
    { id: 10, text: "Harvard Law School Forum, 'The Pershing Square-Valeant Allergan Case and Insider Trading Law' (2015)" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "퍼싱스퀘어 Allergan 행동주의 — Botox 인수 전쟁과 토홀드 전략 완전 해부",
    description:
      "빌 애크먼 퍼싱스퀘어와 Valeant의 Allergan 적대적 인수 시도 완전 분석. 토홀드 전략 $4.35B 비밀 매집, 화이트 나이트 Actavis $66B 인수, 퍼싱스퀘어 $2.6B 수익, SEC 내부자거래 조사까지.",
    keywords: [
      "Pershing Square Allergan 행동주의",
      "Valeant Allergan 적대적 인수",
      "Botox 인수",
      "토홀드 전략 행동주의",
      "빌 애크먼 Allergan",
      "Actavis Allergan 화이트 나이트",
      "퍼싱스퀘어 수익",
      "HSR 10일 공시 규정",
      "행동주의 M&A 연합",
      "제약 적대적 인수",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "토홀드 전략 (Toehold Strategy)",
      description: "공개 인수 제안 전에 대상 기업 주식을 미리 매집해 협상 레버리지와 수익 기반을 확보하는 전략. 퍼싱스퀘어는 Allergan의 9.7%를 $125~130에 매집하고 $219에 매각해 $2.6B 수익을 실현했다.",
    },
    {
      term: "행동주의-인수자 연합 (Activist-Acquirer Coalition)",
      description: "행동주의 펀드가 인수자의 사전 파트너가 되어 공동 이익을 추구하는 혼합 전략. 법적·윤리적 경계 논쟁의 핵심 사례. 퍼싱스퀘어-Valeant 협약이 이 구조의 최초 공개 사례로 기록된다.",
    },
    {
      term: "화이트 나이트 (White Knight)",
      description: "적대적 인수자로부터 대상 기업을 구하기 위해 경쟁 입찰을 제시하는 우호적 인수자. Allergan 딜에서 Actavis가 이 역할을 맡아 Valeant($152) 대비 44% 높은 $219에 인수했다.",
    },
    {
      term: "10일 공시 규정 (HSR 10-Day Window)",
      description: "5% 이상 지분 취득 후 10일 이내 공시해야 하는 미국 하트-스콧-로디노(HSR) 규정. 퍼싱스퀘어는 이 10일 창을 이용해 공시 전에 추가 지분을 매집했고, 이 허점이 이후 SEC 규제 논의를 촉발했다.",
    },
    {
      term: "보톡스 프랜차이즈 가치 (Botox Franchise Value)",
      description: "Allergan의 핵심 자산인 Botox가 미용·치료 시장에서 갖는 독점적 가격 결정력과 브랜드 프리미엄. Valeant는 이를 R&D 절감으로 착취하려 했고, Allergan은 지속 투자를 통한 성장 가치를 주장했다.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "퍼싱스퀘어는 왜 직접 Allergan을 인수하려 하지 않고 Valeant의 파트너가 됐나?",
      a: "퍼싱스퀘어는 헤지펀드이지 제약사를 직접 운영할 역량이 없다. 그러나 Valeant와 공동 협약을 맺으면 토홀드 매집만으로 인수 성공 여부와 관계없이 수익을 거둘 수 있었다. Valeant가 성공하면 인수가에 매각, 실패해도 경쟁 입찰을 부른 덕분에 주가가 올라 수익이 난다. 퍼싱스퀘어 입장에서는 '이기거나 이기거나' 구조였다.",
    },
    {
      q: "SEC 조사에서 퍼싱스퀘어의 행위가 합법으로 판정된 이유는?",
      a: "2014년 당시 미국 증권법은 '내부자 거래'를 회사 내부자(임원, 이사, 직원)나 그들로부터 정보를 받은 자가 MNPI를 이용하는 것으로 정의했다. 퍼싱스퀘어는 Allergan의 내부자가 아니었고, Valeant의 인수 계획 정보는 Allergan 내부 정보가 아니라 Valeant 자신의 전략 정보였다. 또 HSR 10일 창 규정 내에서 지분을 공시했다. 기술적으로 위반이 없었지만, 이 판정 이후 규제 당국은 유사 구조를 막기 위한 규제 강화에 나섰다.",
    },
    {
      q: "Allergan CEO David Pyott는 왜 그렇게 강하게 Valeant를 거부했나?",
      a: "두 가지 이유가 있었다. 첫째, 재무적 이유: Valeant의 $152 입찰가는 Allergan의 독자 성장 가치(DCF 기준 $180+ 이상)보다 낮다고 봤다. 둘째, 전략적 이유: Valeant는 Allergan R&D를 90% 이상 삭감할 계획이었다. Pyott는 Botox의 새 치료 적응증 개발이 장기 성장의 핵심이라고 믿었다. 'R&D를 죽이면 Botox도 결국 죽는다'는 게 그의 핵심 논리였다.",
    },
    {
      q: "화이트 나이트 Actavis는 왜 Allergan을 $66B(Valeant보다 $20B 더)에 샀나?",
      a: "Actavis는 Allergan의 장기 성장 가치를 더 높게 평가했다. Botox 파이프라인(신규 치료 적응증), 의료 미용 시장의 고성장, Allergan의 글로벌 영업망이 Actavis의 전략과 완벽히 맞아떨어졌다. 또한 Actavis는 아일랜드에 법인이 있어 인수 후 세금 효율화(Tax Inversion) 혜택도 누릴 수 있었다.",
    },
    {
      q: "이 딜이 행동주의 투자 역사에서 갖는 의미는?",
      a: "퍼싱스퀘어-Allergan 딜은 행동주의 헤지펀드가 M&A의 '입찰 이전 단계'까지 영향력을 확장할 수 있음을 보여줬다. 전통적 행동주의는 지분 매집 후 경영 개선을 요구하는 방식이었다면, 이 딜은 행동주의가 인수자의 파트너로서 딜 전체를 설계하는 주체가 됐다는 점에서 진화였다. 동시에 이 구조는 법적·윤리적 한계를 드러내며 2015년 SEC 규제 강화를 이끌었다.",
    },
    {
      q: "퍼싱스퀘어는 이 딜 이후 어떻게 됐나?",
      a: "퍼싱스퀘어는 이 딜로 약 $2.6B의 역사적 수익을 올렸지만, 이후 Valeant 주식에 직접 투자해 약 $4B의 손실을 입었다. Allergan 딜에서 배운 '교훈'을 다시 Valeant에 적용하려 했지만, Valeant의 회계 분식 스캔들과 주가 폭락에 직격탄을 맞은 것이다. 빌 애크먼의 평판은 한동안 추락했고, 퍼싱스퀘어의 AUM도 크게 줄었다.",
    },
  ],
};

export default deal;
