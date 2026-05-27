import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "pershing-square-cp-rail",
  title: "퍼싱스퀘어 vs CP레일 — 주가 4.7배 올린 위임장 대결, 행동주의의 교과서",
  subtitle: "빌 애크먼 행동주의 · 헌터 해리슨 CEO 교체 · Precision Scheduled Railroading · 위임장 대결 압승",
  category: "activism",
  industry: "철도·물류",
  country: "캐나다",
  announcedAt: "2011-10-28",
  closedAt: "2012-05-17",
  announcedDisplay: "2011년 10월",
  closedDisplay: "2012년 5월",
  readingMinutes: 10,
  tags: ["퍼싱스퀘어", "CP레일", "빌 애크먼", "행동주의", "헌터 해리슨", "위임장 대결", "PSR", "철도 행동주의"],
  excerpt:
    "빌 애크먼의 퍼싱스퀘어가 CP레일 지분 14.2%를 매집, CEO 교체와 이사회 개편을 요구하며 위임장 대결에서 압승. 헌터 해리슨 CEO 취임 후 OR 81%→61% 개선, 주가 C$46→C$220 달성 — 행동주의 역사상 가장 극적인 주가 성과.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "PSQ", bg: "bg-indigo-700", label: "퍼싱스퀘어" },
  target:   { initials: "CP",  bg: "bg-red-700",    label: "CP레일" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "CP레일(캐나다 퍼시픽 레일웨이)은 캐나다 2대 철도 회사다. 그러나 경쟁사 CN레일 대비 만성적으로 열위한 영업 효율성이 문제였다. OR(영업비율)은 81%로 CN레일의 63%와 크게 차이났으며, 경영진의 자기만족과 변화 거부가 10년 이상 지속된 상태였다.",
    "빌 애크먼의 퍼싱스퀘어는 2011년 10월 CP레일 지분 12.2% 매집을 공시했고, 이후 14.2%까지 확대했다. 투자금은 약 C$14억. 퍼싱스퀘어는 CEO Fred Green 교체와 CN레일의 전설적 CEO 헌터 해리슨 영입을 핵심 요구로 제시했다.",
    "CP 이사회와 경영진은 '우리는 잘하고 있다'는 입장으로 행동주의에 저항했다. 2012년 5월 주주총회에서 대규모 위임장 대결(Proxy Fight)이 벌어졌다. 퍼싱스퀘어는 12석 중 7석을 확보하며 압승했고, Fred Green은 CEO직에서 물러났다.",
    "헌터 해리슨은 CEO 취임 직후 'Precision Scheduled Railroading(정밀 시간표 운영, PSR)'을 도입해 OR을 4년 만에 81%→61%로 개선했다. CP 주가는 C$46에서 C$220으로 4.7배 상승 — 행동주의 역사상 가장 극적인 주가 성과 중 하나로 기록된다.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "퍼싱스퀘어 투자액 약 C$14억",
    acquirerName: "퍼싱스퀘어",
    targetName: "CP레일",
    announcedDisplay: "2011년 10월",
    closedDisplay: "2012년 5월",
    country: "캐나다",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "퍼싱스퀘어, CP레일 14.2% 매집 후 CEO 교체 및 이사회 개편 요구. OR 81%(경쟁사 CN 63%)의 만성 비효율이 타겟.",
    "2012년 5월 위임장 대결: 퍼싱스퀘어 12석 중 7석 확보 — 압승. CEO Fred Green 퇴진.",
    "헌터 해리슨 CEO 취임 → Precision Scheduled Railroading 도입 → OR 81%→61% 4년 만에 개선.",
    "CP 주가: C$46(애크먼 진입) → C$220(해리슨 최고점) = 4.7배 상승.",
    "퍼싱스퀘어 투자 수익: 약 C$14억 투자 → 약 C$27억+ 회수 (약 2배 이상).",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "북미 철도 산업은 OR(영업비율)이 경영 효율성의 핵심 지표다. 석탄·곡물·에너지 등 대량 화물 운송을 담당하는 과점 구조이며, 효율 개선의 여지가 클수록 행동주의 타겟이 된다. CN레일이 PSR을 먼저 도입해 OR 63%를 달성한 반면, CP레일은 81%에 머물러 있었다 — 이 격차가 퍼싱스퀘어가 타겟으로 잡은 이유였다.",
    metrics: [
      { label: "CP레일 OR (행동주의 진입 시)", value: "81.3%",     sub: "높을수록 비효율 — 개선 여지" },
      { label: "CN레일 OR (비교 기준)",        value: "63.0%",     sub: "북미 철도 효율 벤치마크" },
      { label: "퍼싱스퀘어 매집 지분",         value: "14.2%",     sub: "C$14억 투자, 최대주주 등극" },
      { label: "위임장 대결 결과",             value: "12석 중 7석", sub: "퍼싱스퀘어 압승" },
    ],
    subBody:
      "OR(영업비율, Operating Ratio)은 매출 대비 영업비용 비율이다. 숫자가 낮을수록 효율적이다. 북미 철도 업계에서 PSR(Precision Scheduled Railroading)은 운행 빈도를 줄이고 열차 길이를 늘려 자산 활용도를 극대화하는 경영 방식으로, 헌터 해리슨이 CN레일에서 먼저 검증했다.",
    players: [
      { name: "퍼싱스퀘어 (빌 애크먼)", role: "행동주의 헤지펀드, 14.2% 최대주주" },
      { name: "CP레일 경영진 (Fred Green CEO)", role: "행동주의에 저항, 결국 퇴진" },
      { name: "헌터 해리슨", role: "CN레일 전 CEO, 퍼싱스퀘어가 영입 제안한 신임 CEO" },
      { name: "CN레일", role: "북미 철도 효율 벤치마크 — OR 63%" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "CP레일 (캐나다 퍼시픽 레일웨이)",
    body: "CP레일은 1881년 설립된 캐나다 2대 철도 회사다. 약 21,000km 노선과 19,000명 직원을 보유한 대형 철도 기업이지만, 경쟁사 CN레일 대비 만성적인 운영 비효율(OR 81% vs CN 63%)이 10년 이상 지속됐다. 건설·곡물·에너지·자동차 등 다양한 화물을 운송하지만 낮은 열차 가동률과 비대한 비용 구조가 주가를 짓눌렀다.",
    metrics: [
      { label: "설립연도",             value: "1881년",        sub: "캐나다 최초 대륙횡단 철도" },
      { label: "노선 거리",            value: "약 21,000km",   sub: "캐나다 및 미국 북부" },
      { label: "종업원",               value: "약 19,000명",   sub: "행동주의 진입 시점" },
      { label: "OR (영업비율)",         value: "81.3%",        sub: "CN레일 63%와 큰 격차" },
      { label: "연간 매출 (FY2011)",   value: "C$50억",        sub: "화물 운송 중심" },
      { label: "시가총액 (진입 시)",   value: "약 C$87억",     sub: "EV/EBITDA 약 5.7배 저평가" },
    ],
    financials: [
      { year: "FY2009", revenue: 4280, cogs: 2780, grossProfit: 1500, sga: 680, operatingIncome: 820,  ebitda: 1380 },
      { year: "FY2010", revenue: 4490, cogs: 2920, grossProfit: 1570, sga: 700, operatingIncome: 870,  ebitda: 1450 },
      { year: "FY2011", revenue: 5000, cogs: 3220, grossProfit: 1780, sga: 730, operatingIncome: 1050, ebitda: 1650 },
      { year: "FY2012", revenue: 5310, cogs: 3320, grossProfit: 1990, sga: 760, operatingIncome: 1230, ebitda: 1870 },
    ],
    financialsNote: "단위: C$M (백만 캐나다 달러) | 출처: CP레일 연간보고서 및 공시",
    financialsCurrency: "C$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "CP레일의 지배구조 문제는 소유 집중이 아닌 '경영진 고착화'였다. 지분이 분산된 공개기업에서 이사회가 무능한 CEO를 10년 이상 방치한 것이 핵심 문제였다. 애크먼은 이를 역으로 활용했다 — 분산주주 구조는 충분한 지분만 있으면 위임장 대결로 이사회를 교체할 수 있다는 의미이기도 했다.",
    shareholders: [
      {
        id: "pershing",
        label: "퍼싱스퀘어",
        sub: "빌 애크먼 행동주의 펀드",
        stake: "14.2%",
        stakePct: 14.2,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "ca_inst",
        label: "캐나다 기관투자자",
        sub: "연기금·보험사 등",
        stake: "25%",
        stakePct: 25,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "us_inst",
        label: "미국 기관투자자",
        sub: "글로벌 기관 주주",
        stake: "35%",
        stakePct: 35,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "public",
        label: "일반 소수주주",
        sub: "개인 및 기타 주주",
        stake: "25.8%",
        stakePct: 25.8,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 15,
      independent: 12,
      affiliated: 3,
      note: "이사회 규모가 15인으로 과대했다. 애크먼은 7인 축소를 제안했다. 기존 이사회가 수년간 OR 격차를 방치한 것이 핵심 문제였다.",
    },
    issues: [
      {
        title: "CEO 무능 및 장기 방치",
        description: "OR 81%가 10년 이상 유지됐다. CN레일과의 격차가 전혀 해소되지 않았음에도 이사회는 Fred Green CEO를 계속 유임했다.",
        severity: "critical",
      },
      {
        title: "이사회 CEO 견제 실패",
        description: "15인 대형 이사회가 실질적 경영 감독 기능을 하지 못했다. 경영진에 대한 실질적 책임 추궁이 부재했다.",
        severity: "critical",
      },
      {
        title: "자본 배분 비효율",
        description: "낮은 영업 효율에도 대규모 설비투자가 지속됐다. ROE 개선이 없는 상태에서 주주 자본이 낭비됐다.",
        severity: "high",
      },
      {
        title: "주주 소통 부재",
        description: "행동주의 진입 후에도 경영진은 '우리는 잘 하고 있다'는 방어적 대응으로 일관했다. 개선 의지가 전혀 없었다.",
        severity: "medium",
      },
    ],
    demands: [
      {
        demand: "CEO Fred Green 교체",
        result: "won",
        note: "위임장 대결 승리 후 신임 이사회가 Fred Green을 CEO직에서 해임.",
      },
      {
        demand: "이사회 15인→7인 축소",
        result: "won",
        note: "이사회 개편을 통해 규모 축소 및 효율화 단행.",
      },
      {
        demand: "헌터 해리슨 신임 CEO 선임",
        result: "won",
        note: "CN레일 전 CEO 헌터 해리슨이 신임 CEO로 취임. PSR 도입으로 OR 81%→61% 달성.",
      },
    ],
    stockImpact: {
      preCampaign: "C$46",
      peakDuringCampaign: "C$220",
      postCampaign: "C$180+",
      note: "애크먼 진입(2011.10) 이후 단 4년 만에 주가 4.7배 상승. 행동주의 역사상 가장 극적인 주가 성과 사례. 퍼싱스퀘어는 2016년 C$195 수준에서 지분 매각.",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "퍼싱스퀘어가 14.2% 지분으로 위임장 대결을 통해 이사회 과반을 확보했다. 새 이사회가 CEO 교체를 집행했다. 적대적 M&A가 아닌 주주 권리 행사를 통한 경영진 교체라는 점에서 행동주의의 전형적 사례다.",
    preOwnership: {
      nodes: [
        { id: "pershing",  label: "퍼싱스퀘어",        sub: "14.2% 최대주주, 이사회 개편 요구",  type: "acquirer" },
        { id: "cp",        label: "CP레일",            sub: "캐나다 2대 철도, OR 81% 비효율",    type: "target" },
        { id: "green",     label: "Fred Green CEO",    sub: "10년+ 재임, 경영 비효율 방치",      type: "entity" },
        { id: "board15",   label: "기존 이사회 15인",   sub: "CEO 견제 실패, 주주 불신임",        type: "entity" },
        { id: "inst",      label: "기관투자자",         sub: "약 60% 보유, 중립적 캐스팅보트",   type: "public" },
      ],
      edges: [
        { from: "pershing", to: "cp",      label: "14.2% 지분 보유" },
        { from: "green",    to: "cp",      label: "CEO 경영 (10년+)" },
        { from: "board15",  to: "green",   label: "CEO 방치·유임" },
        { from: "pershing", to: "board15", label: "이사회 교체 요구" },
        { from: "inst",     to: "cp",      label: "~60% 보유 (중립)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "pershing",  label: "퍼싱스퀘어",        sub: "14.2% + 이사회 7석 확보",       type: "acquirer" },
        { id: "cp",        label: "CP레일",            sub: "신임 이사회·CEO 체제로 전환",    type: "target" },
        { id: "harrison",  label: "헌터 해리슨 CEO",   sub: "CN레일 전 CEO, PSR 도입",        type: "entity" },
        { id: "board7",    label: "신임 이사회 7인",    sub: "퍼싱스퀘어 추천 이사 다수",     type: "entity" },
      ],
      edges: [
        { from: "pershing", to: "cp",       label: "14.2% + 이사회 과반" },
        { from: "board7",   to: "harrison", label: "신임 CEO 선임" },
        { from: "harrison", to: "cp",       label: "PSR 도입 → OR 81%→61%" },
      ],
    },
    keyTerms: [
      { label: "위임장 대결",         value: "12석 중 7석 확보 (압승)",          accent: true },
      { label: "퍼싱스퀘어 지분",      value: "14.2%" },
      { label: "CEO 교체",            value: "Fred Green → 헌터 해리슨",        accent: true },
      { label: "OR 개선",             value: "81% → 61% (4년)",                 accent: true },
      { label: "주가 상승",           value: "C$46 → C$220 (+378%)" },
      { label: "투자 수익 (추정)",     value: "+93% (C$14억→C$27억+)" },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "퍼싱스퀘어는 재무·법무 양면에서 정예 자문단을 구성했다. CP레일 측은 행동주의 방어에 골드만삭스와 캐나다 최대 로펌을 내세웠지만 결국 역부족이었다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "퍼싱스퀘어 (행동주의 측)",
        initials: "PSQ",
        bg: "bg-indigo-700",
        advisors: [
          {
            firm: "Lazard",
            role: "재무 자문",
            roleType: "financial",
            note: "CP레일 독립 가치 평가 및 OR 개선 시 기업 가치 분석. 위임장 대결 전략 지원.",
          },
          {
            firm: "Sullivan & Cromwell",
            role: "법무 자문",
            roleType: "legal",
            note: "위임장 대결 법적 전략 수립, SEC 공시 대응, 이사 후보 추천 절차 총괄.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "CP레일 (방어 측)",
        initials: "CP",
        bg: "bg-red-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "재무 자문",
            roleType: "financial",
            note: "CP레일 현 경영 전략의 가치 방어 및 주주 소통 지원.",
          },
          {
            firm: "Stikeman Elliott",
            role: "법무 자문",
            roleType: "legal",
            note: "캐나다 법 하 위임장 대결 방어 전략 수립 및 이사회 자문.",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공개 자료 기반입니다. 실제 계약 내용과 다를 수 있습니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "퍼싱스퀘어는 CP레일이 OR 격차 해소만으로도 수십억 달러 가치를 창출할 수 있다고 봤다. CN레일 수준(OR 63%)으로 개선되면 EV는 현재의 2배 이상 정당화된다는 분석이었다. 진입 당시 EV/EBITDA 5.7배는 업계 평균 대비 명백한 저평가였다.",
    rows: [
      { item: "CP레일 주가 (진입 시)",          val: "C$46",         note: "2011년 10월 퍼싱스퀘어 매집 시점" },
      { item: "CP레일 EV (2011)",               val: "약 C$8.3B",    note: "시총 + 순부채" },
      { item: "EV/EBITDA (진입 시)",            val: "약 5.7배",     note: "업계 평균 대비 저평가",           accent: true },
      { item: "헌터 해리슨 체제 피크 주가",     val: "C$220",        note: "2014년 최고점",                   accent: true },
      { item: "퍼싱스퀘어 최종 매각가 (추정)", val: "약 C$195",     note: "2016년 전후 지분 매각" },
      { item: "주가 상승률",                   val: "+378%",         note: "C$46 → C$220 (4.7배)",            accent: true },
    ],
    disclaimer: "주: 주가 및 EV 산정은 공개 자료 기반. 퍼싱스퀘어 최종 수익은 매각 시점에 따라 상이할 수 있음.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "퍼싱스퀘어는 왜 CP레일을 타겟으로 삼았나",
      initials: "PSQ",
      bg: "bg-indigo-700",
      points: [
        "OR 격차 해소만으로도 수십억 달러 가치 창출 가능. CN레일(63%) 수준으로만 개선해도 EBITDA는 30%+ 증가.",
        "헌터 해리슨이라는 검증된 해법이 존재했다. CN레일에서 PSR로 OR을 55%까지 낮춘 전례가 있었다.",
        "분산주주 구조로 위임장 대결 승산이 높았다. 지배주주 없는 상장사에서 14.2%면 충분히 이사회를 교체할 수 있었다.",
        "저평가 진입: EV/EBITDA 5.7배는 북미 철도 업계 평균 대비 현저히 낮은 수준이었다.",
      ],
    },
    seller: {
      title: "CP 경영진은 왜 결국 물러났나",
      initials: "CP",
      bg: "bg-red-700",
      points: [
        "이사회가 주주 신임을 완전히 상실했다. 위임장 대결에서 7석 중 0석도 지키지 못했다.",
        "기관투자자들이 중립에서 퍼싱스퀘어 지지로 돌아섰다. OR 격차라는 명확한 증거 앞에 경영 방어 논리가 무너졌다.",
        "경영 교체가 기업 생존의 유일한 경로였다. 이사회가 바뀐 이상 CEO 교체는 필연이었다.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "헌터 해리슨의 CP레일 혁신은 북미 철도 산업 전체를 바꿨다. PSR은 이후 CSX, KCS 등 다른 철도사들의 표준 운영 방식이 됐다. 퍼싱스퀘어의 투자는 수익 면에서나 산업 영향 면에서나 행동주의의 최고 사례로 기록됐다.",
    overallVerdict: "퍼싱스퀘어 + 주주 완승, 철도 업계 혁신 사례",
    positives: [
      "OR 81%→61% 달성 — 4년 만의 극적 개선. 연간 EBITDA가 C$1.38B에서 C$3B 이상으로 두 배 넘게 증가.",
      "주가 C$46→C$220 = 4.7배 상승. 행동주의 역사상 최고의 주가 성과 딜 중 하나.",
      "북미 철도 PSR 혁명의 시발점. 헌터 해리슨의 방법론이 업계 표준이 됐다.",
      "퍼싱스퀘어 투자 수익: 약 C$14억 투자 → 약 C$27억+ 회수 (약 +93%).",
    ],
    risks: [
      "헌터 해리슨의 강도 높은 비용 절감으로 안전 사고 증가 우려가 제기됐다. 직원 대규모 감원으로 노사 갈등 심화.",
      "PSR 방식의 과도한 효율화가 장기적으로 인프라 투자 부족을 초래할 수 있다는 비판이 있었다.",
      "헌터 해리슨은 2017년 CP레일을 떠나 CSX(미국 3위 철도) CEO로 이직. 2017년 12월 타계.",
    ],
    editorNote:
      "CP레일 딜은 행동주의 투자의 이상적 결과를 보여준다. 경영진 교체라는 단 하나의 변화가 기업 가치를 5배 가까이 끌어올렸다. 퍼싱스퀘어의 통찰은 '문제가 무엇인지'가 아니라 '해법이 누구인지'를 명확히 알고 있었다는 점이다. 헌터 해리슨이라는 검증된 인물을 미리 확보했다는 것이 이 딜의 본질이었다.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "PSQ",
    acquirerBg: "bg-indigo-700",
    targetInitials: "CP",
    targetBg: "bg-red-700",
    acquirerName: "퍼싱스퀘어",
    targetName: "CP레일",
    dealTitle: "Pershing Square's Proxy Battle at Canadian Pacific Railway",
    dealSize: "투자액 약 C$14억",
    dealSizeUSD: "approx. CAD 1.4 Billion",
    evEbitda: "약 5.7× (진입 시)",
    closeDate: "May 2012",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    { id: 1, text: "퍼싱스퀘어, CP레일 13F 지분 공시 (2011.10.28), SEC EDGAR" },
    { id: 2, text: "퍼싱스퀘어, CP레일 대상 주주 서한 및 프레젠테이션 (2011.10~2012.5)" },
    { id: 3, text: "CP레일 연간보고서 FY2011~FY2014, 영업비율(OR) 개선 추이" },
    { id: 4, text: "캐나다 퍼시픽 레일웨이 주주총회 결과 공시 (2012.05.17)" },
    { id: 5, text: "헌터 해리슨 CEO 취임 발표 및 PSR 전략 발표 (2012.6)" },
    { id: 6, text: "William Thorndike, 'The Outsiders' — Hunter Harrison CP Rail 사례 분석" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "빌 애크먼 CP레일 행동주의 — 주가 4.7배 올린 위임장 대결 완전 해부",
    description:
      "퍼싱스퀘어 빌 애크먼의 CP레일 행동주의 완전 분석. 헌터 해리슨 CEO 교체, OR 81%→61% 개선, 주가 C$46→C$220 상승. 행동주의 역사상 가장 극적인 주가 성과.",
    keywords: [
      "퍼싱스퀘어 CP레일",
      "빌 애크먼 행동주의",
      "CP레일 주가",
      "헌터 해리슨 CEO",
      "위임장 대결",
      "Precision Scheduled Railroading",
      "철도 행동주의",
      "행동주의 투자 수익",
      "캐나다 기업 지배구조",
      "OR 영업비율 개선",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "OR (영업비율, Operating Ratio)",
      description: "매출 대비 영업비용 비율. 낮을수록 효율적. 북미 철도 업계 핵심 KPI. CP레일은 81%에서 헌터 해리슨 체제 하 61%로 개선됐다.",
    },
    {
      term: "위임장 대결 (Proxy Fight)",
      description: "주주가 다른 주주들의 의결권을 위임받아 이사회 구성을 바꾸는 행동주의 수단. 퍼싱스퀘어는 12석 중 7석을 확보해 압승했다.",
    },
    {
      term: "Precision Scheduled Railroading (PSR)",
      description: "운행 빈도를 줄이고 열차 길이를 늘려 자산 활용도를 극대화하는 철도 경영 방식. 헌터 해리슨이 창안하고 CP레일에서 완성했다.",
    },
    {
      term: "행동주의 투자 (Shareholder Activism)",
      description: "지분 매집 후 경영진·이사회에 지배구조 개선·경영진 교체·전략 변화를 요구해 주주 가치를 높이는 투자 방식.",
    },
    {
      term: "CEO 교체 가치 (CEO Premium)",
      description: "잘못된 CEO를 올바른 CEO로 교체할 때 창출되는 기업 가치 증가분. CP레일에서는 단일 CEO 교체로 시총이 5배 가까이 늘었다.",
    },
    {
      term: "분산주주 구조",
      description: "지배주주 없이 지분이 여러 주주에게 분산된 상장사 구조. 행동주의가 비교적 적은 지분으로 이사회를 바꿀 수 있는 조건이 된다.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "OR(영업비율)이 왜 그렇게 중요한가?",
      a: "OR은 매출 1달러를 벌기 위해 얼마의 비용이 드는지를 보여준다. OR 81%는 C$1 매출에 C$0.81 비용이 든다는 뜻이다. CN레일의 63%와 비교하면 CP레일은 같은 매출에서 18% 더 많은 비용을 쓰고 있었다. 이 격차를 메우면 EBITDA가 수십억 달러 늘어난다.",
    },
    {
      q: "왜 헌터 해리슨이어야 했나?",
      a: "헌터 해리슨은 CN레일 CEO 시절 PSR을 도입해 OR을 55%까지 낮춘 검증된 인물이었다. 애크먼은 단순히 경영진을 교체한 것이 아니라, 이미 결과가 검증된 해법을 가진 특정 인물을 데려왔다. '문제를 알고 해법도 알고 있는' 상태에서 시작한 행동주의였다.",
    },
    {
      q: "위임장 대결(Proxy Fight)에서 어떻게 이겼나?",
      a: "퍼싱스퀘어는 14.2%의 지분을 바탕으로 기관투자자들을 설득했다. 핵심 논리는 단순했다: OR 격차 데이터와 헌터 해리슨의 전적. 이사회가 이를 10년간 방치했다는 사실에 기관투자자들이 등을 돌렸다. 결과는 12석 중 7석 — 압승이었다.",
    },
    {
      q: "퍼싱스퀘어는 얼마나 벌었나?",
      a: "퍼싱스퀘어는 C$14억을 투자해 2016년 전후 C$195 수준에서 지분을 매각한 것으로 알려졌다. 진입가 C$46 대비 약 4배 수준이다. 14.2% 지분에 대한 총 수익은 약 C$27억+ 이상으로 추정된다. 약 93% 이상의 수익률이다.",
    },
    {
      q: "CP레일 개혁은 헌터 해리슨 이후에도 지속됐나?",
      a: "헌터 해리슨은 2017년 CP레일을 떠나 CSX로 이직했고, 같은 해 12월 타계했다. 그러나 PSR 방식은 이미 CP레일의 DNA로 자리잡았다. 이후 CP레일은 Kansas City Southern을 인수해 캐나다-미국-멕시코를 연결하는 북미 유일의 3국 철도로 발전했다.",
    },
    {
      q: "PSR(Precision Scheduled Railroading)이 뭔가?",
      a: "PSR은 열차 운행 빈도를 줄이는 대신 열차 길이를 늘리고, 화물이 모이기를 기다리는 대신 정해진 시간표대로 운행하는 방식이다. 자산(기관차·화차·선로) 활용도를 극대화해 비용을 대폭 줄인다. 헌터 해리슨이 Illinois Central, CN레일, CP레일을 거치며 완성한 철도 경영의 혁신이다.",
    },
  ],
};

export default deal;
