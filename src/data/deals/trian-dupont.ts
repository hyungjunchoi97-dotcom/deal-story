import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "trian-dupont",
  title: "Trian Fund Management × DuPont — 진 것처럼 보인 Proxy Fight가 만든 $130B 합병",
  subtitle: "역사상 최대 행동주의 패배 → 6개월 후 Dow-DuPont $130B 합병 → 3개 독립 기업 탄생",
  category: "activism",
  industry: "화학 / 농업 / 특수소재",
  country: "미국",
  announcedAt: "2013-10-01",
  closedAt: "2015-05-13",
  announcedDisplay: "2013년 10월",
  closedDisplay: "2015년 5월",
  readingMinutes: 10,
  tags: [
    "트라이언",
    "DuPont",
    "넬슨 펠츠",
    "위임장 대결",
    "행동주의",
    "Dow-DuPont 합병",
    "콘글로머리트 디스카운트",
    "분사",
    "화학",
  ],
  excerpt:
    "트라이언 펀드의 넬슨 펠츠가 DuPont 지분 2.7%($1.6B)를 취득하고 이사회 4석과 대규모 구조조정을 요구했다. 2015년 5월 주주총회에서 Trian은 4석을 모두 잃는 역사상 최대 행동주의 패배를 당했다. 그러나 불과 6개월 후 CEO가 사임하고, 그 해 말 $130B 규모의 Dow-DuPont 합병이 발표됐다—트라이언이 요구했던 바로 그 '해체'였다.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "TRIAN", bg: "bg-slate-700", label: "트라이언 펀드" },
  target:   { initials: "DD",    bg: "bg-red-700",   label: "DuPont" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "E.I. du Pont de Nemours and Company(DuPont)는 1802년 창업한 미국 최고(最古) 화학·과학 기업이다. 2013년 기준 매출 $362억, 직원 6만 명. 농업(Pioneer Hi-Bred 종자), 퍼포먼스 소재, 안전 제품(타이벡·케블라), 특수 화학 등 전혀 다른 사업을 하나의 지붕 아래 운영하는 복합 대기업(conglomerate)이었다. 바로 이 구조가 트라이언의 타깃이 됐다.",
    "트라이언 펀드 매니지먼트(넬슨 펠츠 공동창업)는 2013년 10월 DuPont 지분 약 2.7%($1.6B)를 공시했다. 트라이언 역사상 단일 투자로 최대 규모였다. 트라이언은 즉시 '화이트 페이퍼(White Paper)'를 발행해 DuPont이 콘글로머리트 디스카운트로 수백억 달러의 주주 가치를 훼손하고 있다고 주장했다.",
    "핵심 요구는 세 가지였다. 첫째, 3년간 약 $40억 규모의 비용 절감. 둘째, 사업부 분리 또는 독립 상장. 셋째, 이사회 4석(펠츠 포함). CEO 엘렌 쿨먼(Ellen Kullman)은 'DuPont의 통합 모델이 사이클 전체에 걸쳐 가치를 창출한다'며 강하게 맞섰다.",
    "2015년 5월 13일 주주총회: 트라이언은 이사회 4석 전패라는 역사상 최대 행동주의 패배를 당했다. ISS(의결권 자문 1위)는 트라이언 후보 2인을 지지했지만 Glass Lewis는 DuPont 경영진 편을 들었다. 최종 표차는 4~5%p 수준으로 근소했다. 월스트리트 미디어는 이를 '행동주의 역사상 최대 패배'로 보도했다.",
    "그러나 결말은 반전이었다. 2015년 10월 쿨먼 CEO가 전격 사임했고, 2015년 12월 DuPont은 Dow Chemical과 $130B 규모의 대등합병을 발표했다. 2019년 DowDuPont은 DuPont(특수소재), Dow Inc.(범용 화학), Corteva Agriscience(농업)의 세 독립 기업으로 분할됐다. 트라이언이 '화이트 페이퍼'에서 요구했던 구조 그대로였다.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "~$1.6B (DuPont 지분 2.7%)",
    acquirerName: "트라이언 펀드 매니지먼트",
    targetName: "E.I. du Pont de Nemours (DuPont)",
    announcedDisplay: "2013년 10월",
    closedDisplay: "2015년 5월 (위임장 투표)",
    country: "미국",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "2013년 10월 트라이언, DuPont 지분 2.7%($1.6B) 공시 — 트라이언 사상 최대 단일 투자.",
    "화이트 페이퍼 발행: DuPont 콘글로머리트 디스카운트, $40B 비용 절감 기회, 사업부 분리 요구.",
    "2015년 5월 13일 주주총회: 트라이언 이사회 4석 전패 — '행동주의 역사상 최대 패배' 보도.",
    "2015년 10월 CEO 쿨먼 전격 사임 → 2015년 12월 Dow-DuPont $130B 합병 발표.",
    "2019년 DowDuPont 3분할(DuPont·Dow·Corteva) — 트라이언 요구 그대로 실현. 투자 수익 달성.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "2013~2015년 미국 화학·농업 복합기업 섹터는 구조적 압박에 처해있었다. 농업(GMO 종자·농약)과 특수화학(케블라·타이벡)·범용 퍼포먼스 소재를 한 기업이 운영하는 전통적 '화학 콘글로머리트' 구조는 각 사업부가 개별 상장될 때보다 시장에서 낮게 평가됐다. 투자자들은 각 사업부의 사이클·위험·성장 프로파일이 너무 달라 통합 밸류에이션이 불가능하다고 봤다. 이것이 바로 행동주의 펀드의 진입 구실이 됐다.",
    metrics: [
      { label: "DuPont 주가 (2013년 진입)",     value: "~$55",       sub: "트라이언 지분 취득 시점" },
      { label: "트라이언 투자액",               value: "~$1.6B",     sub: "지분 약 2.7%" },
      { label: "요구 비용 절감 목표",           value: "$40억",      sub: "3년간 누적 목표 (화이트 페이퍼)" },
      { label: "Dow-DuPont 합병 규모",          value: "$130B",      sub: "2015년 12월 발표 대등합병" },
    ],
    subBody:
      "위임장 대결(Proxy Fight)은 행동주의 펀드가 소수 지분만으로 거대 기업의 이사회를 직접 공격하는 수단이다. 트라이언-DuPont 대결은 '지면서도 이긴' 역설적 사례의 교과서가 됐다. 패배 후 6개월 만에 CEO 교체와 $130B 합병이 현실화됐기 때문이다.",
    players: [
      { name: "트라이언 펀드 (넬슨 펠츠·에드 가든)", role: "행동주의 펀드, 이사회 4석 및 구조조정 요구" },
      { name: "Ellen Kullman (DuPont CEO)",            role: "통합 모델 방어, 위임장 대결 승리 후 10월 사임" },
      { name: "ISS (Institutional Shareholder Services)", role: "트라이언 후보 2인 지지 권고" },
      { name: "Glass Lewis",                           role: "DuPont 경영진 지지, ISS와 분열" },
      { name: "Dow Chemical (앤드루 리버리스 CEO)",   role: "2015년 12월 $130B 합병 파트너" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "E.I. du Pont de Nemours (DuPont)",
    body: "DuPont은 1802년 화약 제조사로 출발해 213년간 미국 산업의 핵심 소재를 공급해온 기업이다. 나일론·테플론·케블라·타이벡·라이크라를 발명한 '소재과학의 아버지'. 2013년 기준 매출 $362억, 사업부는 농업(Pioneer Hi-Bred — 옥수수·대두 종자), 퍼포먼스 소재(자동차·전자), 산업 바이오사이언스, 영양 및 건강, 보호 솔루션(케블라 방탄조끼·타이벡 보호복), 특수화학으로 분산됐다. 이 다각화가 '콘글로머리트 디스카운트'의 원천이자 트라이언 공격의 핵심 타깃이었다.",
    metrics: [
      { label: "직원 수 (2013년)",         value: "약 6만 명",      sub: "글로벌 연결 기준" },
      { label: "매출 (FY2013)",            value: "$362억",         sub: "6개 주요 사업부 합산" },
      { label: "영업이익 (FY2013)",        value: "$42억",          sub: "US GAAP 기준" },
      { label: "사업부 수",                value: "6개",            sub: "농업·소재·화학·바이오 등" },
      { label: "Pioneer Hi-Bred",         value: "세계 1위 종자",   sub: "옥수수·대두 종자 시장" },
      { label: "케블라·타이벡",           value: "독보적 특허",     sub: "방탄·보호소재 글로벌 표준" },
    ],
    financials: [
      {
        year: "FY2013",
        revenue: 36233,
        cogs: 22800,
        grossProfit: 13433,
        sga: 9200,
        operatingIncome: 4233,
        ebitda: 5800,
      },
      {
        year: "FY2014",
        revenue: 34082,
        cogs: 21400,
        grossProfit: 12682,
        sga: 8800,
        operatingIncome: 3882,
        ebitda: 5400,
      },
      {
        year: "FY2015",
        revenue: 25130,
        cogs: 15700,
        grossProfit: 9430,
        sga: 6500,
        operatingIncome: 2930,
        ebitda: 4200,
      },
    ],
    financialsNote: "단위: $M (백만 달러) | US GAAP 연결 기준 | FY2015 매출 감소는 퍼포먼스 코팅 사업부 분사(Chemours) 및 농업 부문 계절성 영향",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "DuPont의 지배구조 문제는 213년 역사가 만들어낸 복합기업 구조 그 자체였다. 농업·특수화학·범용소재라는 전혀 다른 사이클의 사업부가 하나의 이사회와 경영진 아래 묶인 결과, 각 사업부의 고유 가치가 시장에서 제대로 인정받지 못했다. 트라이언은 이 '콘글로머리트 디스카운트'를 수치화해 공격했고, DuPont 경영진은 '통합의 시너지'로 맞섰다. 2015년 5월 주주들은 경영진 손을 들어줬지만, 시장은 결국 트라이언의 논리를 선택했다.",
    shareholders: [
      {
        id: "vanguard",
        label: "Vanguard",
        sub: "최대 기관주주",
        stake: "7.5%",
        stakePct: 7.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "2대 기관주주",
        stake: "6.8%",
        stakePct: 6.8,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "state-street",
        label: "State Street",
        sub: "3대 기관주주",
        stake: "4.9%",
        stakePct: 4.9,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "trian",
        label: "트라이언 펀드",
        sub: "넬슨 펠츠 행동주의 펀드",
        stake: "2.7%",
        stakePct: 2.7,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "management",
        label: "경영진·직원",
        sub: "내부자 보유 지분",
        stake: "~1%",
        stakePct: 1.0,
        type: "management",
        alignment: "pro",
      },
      {
        id: "public",
        label: "일반 소수주주",
        sub: "개인·소액 투자자",
        stake: "~77%",
        stakePct: 77.1,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 12,
      independent: 11,
      affiliated: 1,
      note: "형식적으로는 높은 독립 이사 비율. 그러나 트라이언은 213년 역사의 DuPont 이사회가 사업부 독립 가치를 객관적으로 평가하기 어렵다고 비판했다. CEO 쿨먼이 이사회 의장도 겸임하는 구조적 문제도 지목됐다.",
    },
    issues: [
      {
        title: "콘글로머리트 디스카운트",
        description: "농업(Pioneer Hi-Bred)·특수소재(케블라)·범용화학·바이오사이언스가 단일 밸류에이션으로 묶여 각 사업부의 고유 가치가 할인됨. 트라이언 추산 수백억 달러 손실.",
        severity: "critical",
      },
      {
        title: "CEO·이사회 의장 겸임",
        description: "엘렌 쿨먼이 CEO와 이사회 의장을 동시에 맡아 이사회 독립적 감독 기능이 약화됐다는 지배구조 비판.",
        severity: "high",
      },
      {
        title: "비용 구조 비효율",
        description: "트라이언 화이트 페이퍼 기준 경쟁사 대비 SG&A 비율 과다. 3년간 $40억 절감 가능하다는 수치적 근거 제시.",
        severity: "high",
      },
      {
        title: "사업부 포트폴리오 분산",
        description: "전혀 다른 사이클·마진 구조의 사업부 6개 동시 운영. 자본 배분 효율 저하, 각 사업부 CEO 책임 경영 부재.",
        severity: "critical",
      },
    ],
    demands: [
      {
        demand: "이사회 4석 선임 (펠츠 포함)",
        result: "lost",
        note: "2015년 5월 13일 주주총회에서 4석 전패. 행동주의 역사상 최대 패배로 기록됨.",
      },
      {
        demand: "$40억 비용 절감 (3년)",
        result: "partial",
        note: "쿨먼 사임 후 신임 경영진이 일부 비용 효율화를 단행했으나, Dow-DuPont 합병 과정에서 실질적 구조조정 진행.",
      },
      {
        demand: "회사 분리·구조조정",
        result: "won",
        note: "2015년 12월 Dow-DuPont $130B 합병 발표 → 2019년 DuPont·Dow·Corteva 3분할. 트라이언 요구 그대로 실현.",
      },
      {
        demand: "CEO 교체",
        result: "won",
        note: "2015년 10월 쿨먼 CEO 전격 사임. 위임장 대결 패배 5개월 후.",
      },
    ],
    stockImpact: {
      preCampaign: "~$55",
      peakDuringCampaign: "~$77",
      postCampaign: "~$70",
      note: "트라이언 진입(2013년) $55 → Dow-DuPont 합병 발표(2015년 12월) 후 $77 최고점. 위임장 패배(2015년 5월) 직후 단기 하락 후 반등. 트라이언은 '패배'에도 불구하고 대규모 투자 수익 실현.",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "트라이언은 공개시장에서 DuPont 주식 약 2.7%($1.6B)를 매입한 뒤, 화이트 페이퍼 발행과 이사회 4석 요구라는 양면 전략을 구사했다. DuPont은 '투자자의 날'과 자사주 매입, 주주 서한 등으로 맞대응했다. 주주들이 경영진 손을 들어줬지만, 캠페인이 심어놓은 구조조정 압력은 CEO 사임과 대형 합병으로 이어졌다.",
    preOwnership: {
      nodes: [
        { id: "trian",        label: "트라이언 펀드",         sub: "지분 2.7%, 이사회 4석 요구",              type: "acquirer" },
        { id: "dupont-board", label: "DuPont 이사회 (12인)", sub: "CEO 쿨먼 의장 겸임",                       type: "target" },
        { id: "dupont-mgmt",  label: "DuPont 경영진",        sub: "CEO 엘렌 쿨먼, 통합 모델 방어",           type: "entity" },
        { id: "iss-gl",       label: "ISS / Glass Lewis",    sub: "의결권 자문 기관 (결정적 캐스팅보트)",     type: "fund" },
        { id: "big3",         label: "빅3 기관주주",         sub: "Vanguard·BlackRock·State Street ~19%",    type: "fund" },
      ],
      edges: [
        { from: "trian",       to: "dupont-board", label: "2.7% + 이사 4인 후보 제출" },
        { from: "dupont-mgmt", to: "dupont-board", label: "트라이언 후보 전원 거부 권고" },
        { from: "iss-gl",      to: "dupont-board", label: "ISS: 2인 지지 / Glass Lewis: 경영진 지지" },
        { from: "big3",        to: "dupont-board", label: "~19% 의결권 (중립 → 경영진 지지 결정적)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "dupont-win",   label: "DuPont 이사회 승리",   sub: "2015년 5월, 4석 전패 확정",               type: "target" },
        { id: "kullman-out",  label: "쿨먼 CEO 사임",        sub: "2015년 10월, 위임장 패배 5개월 후",       type: "entity" },
        { id: "dow-dupont",   label: "Dow-DuPont 합병",      sub: "2015년 12월 $130B 대등합병 발표",         type: "entity" },
        { id: "three-split",  label: "3분할 (2019)",         sub: "DuPont·Dow Inc.·Corteva 독립 상장",       type: "public" },
      ],
      edges: [
        { from: "dupont-win",  to: "kullman-out", label: "주주 압력 누적 → CEO 사임" },
        { from: "kullman-out", to: "dow-dupont",  label: "신임 경영진 합병 전략 수용" },
        { from: "dow-dupont",  to: "three-split", label: "DowDuPont → 3개 순수 기업 분리" },
      ],
    },
    keyTerms: [
      { label: "트라이언 지분",        value: "~2.7%",                            accent: true },
      { label: "투자액",               value: "~$1.6B" },
      { label: "이사회 요구",          value: "4석 (펠츠 포함 3인 추가)" },
      { label: "주총 결과 (2015.05)",  value: "4석 전패 — DuPont 승리",           accent: true },
      { label: "CEO 사임",             value: "2015년 10월 (5개월 후)" },
      { label: "Dow-DuPont 합병",      value: "$130B 대등합병 (2015년 12월)",     accent: true },
      { label: "최종 결과",            value: "2019년 3분할 — 트라이언 논지 실현" },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "2015년 DuPont 위임장 대결은 역대 최대 수준의 자문 비용이 투입된 싸움이었다. DuPont은 Goldman Sachs와 Evercore를 재무 자문으로, Innisfree와 Joele Frank를 의결권·커뮤니케이션 자문으로 구성했다. 트라이언은 Lazard와 D.F. King을 활용해 기관투자자 설득에 나섰다.",
    sides: [
      {
        side: "target",
        sideLabel: "DuPont (방어 측)",
        initials: "DD",
        bg: "bg-red-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "재무 자문",
            roleType: "financial",
            note: "위임장 대결 방어 전략 수립 및 기관투자자 설득 캠페인 지원.",
          },
          {
            firm: "Evercore",
            role: "재무 자문 (공동)",
            roleType: "financial",
            note: "독립 공정 의견 및 자본 배분 전략 검토.",
          },
          {
            firm: "Innisfree M&A",
            role: "의결권 수집 자문",
            roleType: "other",
            note: "기관·소액 주주 의결권 확보 캠페인 총괄.",
          },
          {
            firm: "Joele Frank, Wilkinson Brimmer Katcher",
            role: "PR·커뮤니케이션 자문",
            roleType: "other",
            note: "주주 커뮤니케이션 메시지 전략 및 미디어 대응.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "법률 자문",
            roleType: "legal",
            note: "행동주의 방어 전문 로펌. 정관·의결권 규정 자문.",
          },
        ],
      },
      {
        side: "acquirer",
        sideLabel: "트라이언 펀드 (행동주의 측)",
        initials: "TRIAN",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Lazard",
            role: "재무 자문",
            roleType: "financial",
            note: "트라이언 화이트 페이퍼 수치 검증 및 가치 분석 지원.",
          },
          {
            firm: "D.F. King & Co.",
            role: "의결권 수집 자문",
            roleType: "other",
            note: "소액주주·기관투자자 의결권 확보 캠페인. ISS·GL 설득 전략.",
          },
          {
            firm: "Willkie Farr & Gallagher",
            role: "법률 자문",
            roleType: "legal",
            note: "SEC 공시 및 위임장 규정 자문.",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공개 자료 및 언론 보도 기반입니다. 실제 계약 내용과 다를 수 있습니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "트라이언의 핵심 밸류에이션 논거는 DuPont의 각 사업부가 독립 상장될 경우 합산 가치가 현재 시총보다 수백억 달러 더 높다는 것이었다. 농업(Pioneer Hi-Bred)은 Monsanto 멀티플을 받을 수 있고, 특수소재(케블라·타이벡)는 3M급 멀티플을, 범용화학은 별도 사이클 멀티플을 적용받아야 한다는 논리였다. '콘글로머리트 디스카운트' 해소만으로도 주당 $20~30 이상의 가치 상승이 가능하다고 주장했다.",
    rows: [
      { item: "DuPont 주가 (트라이언 진입, 2013)",       val: "~$55",     note: "진입 단가 기준" },
      { item: "EV/EBITDA (FY2013 기준)",                 val: "~8~9×",    note: "진입 시점 콘글로머리트 할인 반영" },
      { item: "농업 사업부 독립 기준 멀티플",            val: "~14×+",    note: "Monsanto 비교군 기준 (트라이언 추정)" },
      { item: "특수소재 독립 기준 멀티플",               val: "~12~15×",  note: "3M·Honeywell 비교군 기준" },
      { item: "위임장 패배 직후 주가 (2015년 5월)",      val: "~$60",     note: "단기 하락 후 반등" },
      { item: "Dow-DuPont 합병 발표 후 주가 (2015년 12월)", val: "~$77",  note: "합병 발표 프리미엄 반영",           accent: true },
      { item: "트라이언 투자 수익률 추정",               val: "~+40%+",   note: "$55→$77 기준, 대규모 수익 실현",    accent: true },
    ],
    disclaimer: "주: 주가 및 밸류에이션은 공개 자료 기반 추정치입니다. 트라이언의 실제 매도 시점과 수익은 공개되지 않았습니다.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "트라이언은 DuPont에 무엇을 요구했나",
      initials: "TRIAN",
      bg: "bg-slate-700",
      points: [
        "콘글로머리트 디스카운트 해소: 농업·특수소재·범용화학을 분리 상장하면 합산 가치가 통합 시총 대비 수백억 달러 높다는 수치 제시.",
        "3년간 $40억 비용 절감: SG&A 비율이 경쟁사 대비 과도하다는 화이트 페이퍼 수치. 중앙 집중 비용 구조 개선 요구.",
        "이사회 4석: 펠츠 본인을 포함한 4인 선임으로 실질적 전략 감독 기능 확보 — 단순 자문이 아닌 집행 감독권 요구.",
        "CEO·이사회 의장 겸임 분리: 지배구조 기본 원칙 위반으로 독립적 감독 기능이 작동하지 않는다는 비판.",
      ],
    },
    seller: {
      title: "DuPont은 왜 거부했나",
      initials: "DD",
      bg: "bg-red-700",
      points: [
        "통합 시너지 주장: 농업(Pioneer Hi-Bred의 유전체 연구)과 특수소재(바이오 기반 소재)의 R&D 협력이 분리 시 불가능해진다는 논리.",
        "구조조정 진행 중 주장: 2013~2015년 자체적으로 퍼포먼스 코팅 분사(Chemours, 2015년), 비용 절감 프로그램 진행 중임을 강조.",
        "이사회 전문성 충돌: 트라이언 후보들이 213년 역사의 복합 화학·과학 기업 경영을 이해하기에 부적합하다는 주장.",
        "독립 이사 4인 추가 자체가 이사회 운영 비효율을 초래하며, 트라이언의 단기 수익 추구가 장기 R&D 투자를 훼손할 것이라는 우려.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "트라이언은 2015년 5월 위임장 대결에서 4석을 모두 잃었지만, 그 패배는 시작에 불과했다. 2015년 10월 쿨먼 CEO가 사임했고, 2015년 12월 앤드루 리버리스(Dow Chemical CEO)와의 $130B 대등합병이 발표됐다. 2019년 DowDuPont은 DuPont(특수소재), Dow Inc.(범용화학), Corteva Agriscience(농업) 세 개 순수 기업으로 분할 상장됐다. 트라이언이 화이트 페이퍼에서 요구했던 구조 그대로다. 트라이언은 투표에서 지고 전쟁에서 이겼다.",
    overallVerdict: "트라이언 전략적 승리 — 패배가 촉매가 된 역설",
    positives: [
      "위임장 패배 5개월 후 CEO 교체, 6개월 후 $130B 합병 발표 — 트라이언 캠페인의 직접적 촉매 역할.",
      "2019년 DuPont·Dow·Corteva 3분할로 '콘글로머리트 디스카운트' 완전 해소 — 화이트 페이퍼 논지 실현.",
      "트라이언 투자 수익: $55 진입 → $77+(합병 발표 후) 기준 약 40%+ 수익률, 트라이언 역사상 최대 투자 성공 사례 중 하나.",
      "Corteva Agriscience(Pioneer Hi-Bred 후신)는 독립 상장 후 글로벌 Top 3 종자 기업으로 자리 잡음.",
    ],
    risks: [
      "트라이언 캠페인과 Dow-DuPont 합병의 직접 인과관계는 공식 확인되지 않음 — 합병은 양사 CEO 독자 결정이라는 공식 입장.",
      "3분할 이후 DuPont 주가는 합병 기대감 대비 장기 저성장 — 분사 자체가 만병통치가 아님을 증명.",
      "Dow Inc.은 범용화학 사이클에 그대로 노출돼 변동성이 크며, '순수 기업' 전략의 사이클 리스크도 동반.",
      "위임장 대결 비용(수억 달러 추정)이 단기 주주 가치를 훼손했다는 비판.",
    ],
    editorNote:
      "Trian-DuPont은 행동주의 역사에서 가장 역설적인 사례다. 역사상 최대 '패배'가 역사상 가장 완벽한 '결과'를 낳았다. 주주총회 투표에서 지더라도, 주주들의 머릿속에 구조조정 논리를 심어놓으면 경영진은 결국 그 방향으로 움직인다는 것을 증명했다. 행동주의의 진짜 무기는 이사회 의석이 아니라 '공론화된 논리'다.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "TRIAN",
    acquirerBg: "bg-slate-700",
    targetInitials: "DD",
    targetBg: "bg-red-700",
    acquirerName: "Trian Fund Management",
    targetName: "E.I. du Pont de Nemours (DuPont)",
    dealTitle: "Trian × DuPont — 진 것처럼 보인 Proxy Fight가 만든 $130B 합병",
    dealSize: "~$1.6B (지분 2.7%)",
    dealSizeUSD: "~$1.6B",
    evEbitda: "N/A (행동주의)",
    closeDate: "2015년 5월 (위임장 결과)",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    { id: 1, text: "트라이언 펀드 매니지먼트, DuPont 13D/13F 공시 (2013.10)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=trian" },
    { id: 2, text: "트라이언 펀드, 'Transforming DuPont' 화이트 페이퍼 (2014~2015)" },
    { id: 3, text: "DuPont 2015 Annual Proxy Statement (DEF 14A), 주주총회 결과 공시 (2015.05.13)" },
    { id: 4, text: "Wall Street Journal, 'DuPont Defeats Trian's Bid for Board Seats' (2015.05.13)" },
    { id: 5, text: "New York Times, 'DuPont Wins Proxy Fight Against Trian Fund' (2015.05)" },
    { id: 6, text: "DuPont Press Release, 'DuPont CEO Ellen Kullman Retires' (2015.10)" },
    { id: 7, text: "Dow Chemical & DuPont, Merger of Equals Announcement (2015.12.11)" },
    { id: 8, text: "DuPont Annual Reports FY2013~FY2015" },
    { id: 9, text: "Bloomberg, 'How Trian Lost the Battle but Won the War at DuPont' (2016)" },
    { id: 10, text: "DowDuPont Inc., 3-Way Split Completion Announcement (2019)" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "Trian DuPont 위임장 대결 — 넬슨 펠츠 패배 후 $130B Dow 합병 완전 해부",
    description:
      "트라이언 넬슨 펠츠의 DuPont 행동주의 완전 분석. 2015년 위임장 4석 전패라는 역사상 최대 패배가 어떻게 6개월 후 $130B Dow-DuPont 합병과 2019년 3분할로 이어졌는지. 콘글로머리트 디스카운트와 행동주의 역설의 교과서.",
    keywords: [
      "Trian DuPont 위임장",
      "Nelson Peltz DuPont",
      "Dow DuPont 합병",
      "행동주의 proxy fight",
      "콘글로머리트 디스카운트",
      "DuPont 분사",
      "Corteva Agriscience",
      "엘렌 쿨먼",
      "트라이언 화이트 페이퍼",
      "DuPont 구조조정",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "위임장 대결 패배 후 M&A (Proxy Fight Loss → M&A Catalyst)",
      description: "행동주의가 직접 이기지 않아도 전략적 변화의 촉매가 되는 역설. 트라이언-DuPont이 교과서 사례 — 패배 6개월 후 $130B 합병 발표.",
    },
    {
      term: "콘글로머리트 디스카운트 (Conglomerate Discount)",
      description: "다각화된 복합기업이 각 사업부 합산 가치보다 낮게 평가되는 현상. DuPont의 농업·소재·화학 통합 구조가 수백억 달러 가치 할인을 만들어냈다는 것이 트라이언의 핵심 주장이었다.",
    },
    {
      term: "ISS / Glass Lewis",
      description: "기관투자자들의 주주총회 의결권 행사를 자문하는 양대 의결권 자문 기관. DuPont 대결에서 ISS는 트라이언 2인 지지, Glass Lewis는 경영진 지지로 분열됐고, 이 분열이 DuPont 신승의 결정적 요인이었다.",
    },
    {
      term: "화이트 페이퍼 (White Paper)",
      description: "행동주의 펀드가 발행하는 투자 논거 보고서. 주주를 설득하기 위한 핵심 전략 문서. 트라이언의 'Transforming DuPont' 화이트 페이퍼는 수십 페이지의 수치 분석으로 콘글로머리트 디스카운트를 공론화했다.",
    },
    {
      term: "분사 전략 (Spin-off Strategy)",
      description: "복합 기업이 사업부를 독립 상장법인으로 분리해 각 사업의 고유 가치를 인정받는 구조. DowDuPont의 2019년 3분할(DuPont·Dow·Corteva)이 역대 최대 규모 분사 사례 중 하나다.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "트라이언은 DuPont 위임장 대결에서 왜 졌나?",
      a: "ISS(의결권 자문 1위)는 트라이언 후보 2인을 지지했지만 Glass Lewis는 DuPont 경영진 편을 들었다. 최대 기관주주인 Vanguard·BlackRock·State Street 약 19% 지분이 최종적으로 경영진 쪽으로 기울었고, 최종 표차는 약 4~5%p였다. 또한 DuPont이 2015년 2월 '퍼포먼스 코팅 사업부' 분사(Chemours)를 발표하며 자체 구조조정 의지를 보인 것도 주주들의 판단에 영향을 줬다.",
    },
    {
      q: "트라이언이 지고도 어떻게 결과적으로 이겼나?",
      a: "트라이언의 2년간 캠페인은 DuPont 이사회와 주주들의 머릿속에 '이 회사는 분리돼야 한다'는 논리를 완전히 심어놓았다. 쿨먼 CEO가 위임장 패배 후에도 재임했다면 임기 내내 구조조정 압력을 받았을 것이다. 10월 사임과 12월 합병 발표는 DuPont 경영진 스스로 트라이언의 논리가 옳다는 것을 인정한 결과였다.",
    },
    {
      q: "Dow-DuPont 합병이 트라이언과 관련이 있나?",
      a: "DuPont과 Dow Chemical은 공식적으로 트라이언과 무관하게 독자적으로 합병을 결정했다고 밝혔다. 그러나 Dow의 앤드루 리버리스 CEO와 DuPont 신임 CEO 에드워드 브린이 합병을 '즉각 추진'할 수 있었던 배경에는 트라이언 캠페인이 만들어놓은 구조조정 공론화가 있었다. 블룸버그 등 미디어는 이를 '트라이언이 씨앗을 뿌린 합병'으로 평가했다.",
    },
    {
      q: "DowDuPont 3분할(2019년)은 무엇을 만들어냈나?",
      a: "2019년 DowDuPont은 세 개의 순수 기업으로 분할됐다. DuPont(특수소재·전자재료·안전제품), Dow Inc.(범용 에틸렌 화학·패키징), Corteva Agriscience(종자·작물보호제). 트라이언이 2014년 화이트 페이퍼에서 제시한 '농업 분리, 소재 분리, 화학 분리'와 거의 동일한 구조다. 각 회사는 독립 상장 후 각자의 사이클 멀티플을 받아 합산 시총이 합병 전 DuPont 단독 시총보다 크게 높아졌다.",
    },
    {
      q: "콘글로머리트 디스카운트란 무엇이고 왜 발생하나?",
      a: "콘글로머리트 디스카운트는 다각화된 복합기업의 주가가 각 사업부가 개별 상장됐을 때의 합산 가치보다 낮게 평가되는 현상이다. 발생 이유는 세 가지다: (1) 투자자들이 각 사업부의 리스크·수익·사이클을 개별 분석하기 어렵다, (2) 기업 내부의 자본 배분이 시장보다 비효율적이다, (3) 경영진이 핵심 사업에 집중하지 못한다. DuPont의 경우 농업(고성장)과 범용화학(사이클)이 같은 멀티플을 받아 둘 다 손해를 봤다.",
    },
    {
      q: "트라이언은 DuPont 투자로 얼마나 벌었나?",
      a: "트라이언은 2013년 약 $55에 DuPont 지분 2.7%($1.6B)를 취득했다. Dow-DuPont 합병 발표(2015년 12월) 후 주가는 $77 수준까지 상승했으며, 약 40%+ 수익률이 추정된다. 정확한 매도 시점과 수익은 공개되지 않았지만, $600M~$800M 이상의 평가이익이 발생한 것으로 알려졌다. 이는 트라이언 역사상 단일 딜 최대 수익 사례 중 하나로 기록됐다.",
    },
  ],
};

export default deal;
