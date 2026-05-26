/**
 * 오라클 vs. PeopleSoft (2003–2004) — 18개월 적대적 공개매수 전쟁
 * 래리 엘리슨의 기습 공개매수 · 5차례 가격 인상 · 독소조항 전쟁 · DOJ 반독점 18개월
 */
import type { DealData } from "@/lib/deal-data";

const oraclePeoplesoft: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "oracle-peoplesoft",
  title: "오라클 vs. PeopleSoft — 18개월 적대적 공개매수 전쟁",
  subtitle:
    "래리 엘리슨의 기습 공개매수 · 포이즌 필 · CAP 자산 파괴 · DOJ 반독점 18개월 · 5차례 가격 인상",
  category: "control",
  industry: "엔터프라이즈 소프트웨어 / IT",
  country: "US",
  announcedAt: "2003-06-06",
  closedAt: "2004-12-28",
  announcedDisplay: "2003년 6월",
  closedDisplay: "2004년 12월",
  readingMinutes: 13,
  tags: [
    "적대적인수",
    "공개매수",
    "포이즌필",
    "독소조항",
    "반독점",
    "엔터프라이즈소프트웨어",
    "ERP",
    "오라클",
    "PeopleSoft",
    "미국",
  ],
  excerpt:
    "2003년 6월, 래리 엘리슨은 PeopleSoft가 경쟁사 인수를 발표한 직후 적대적 공개매수를 기습 선언했다. 이후 18개월은 포이즌 필, 고객 자산 파괴 독소 조항(CAP), DOJ 반독점 조사, 5차례 가격 인상의 총체적 전쟁이었다 — 엔터프라이즈 소프트웨어 적대적 M&A의 교과서.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "ORC", bg: "bg-red-700", label: "오라클 (래리 엘리슨 CEO)" },
  target: { initials: "PSFT", bg: "bg-blue-700", label: "PeopleSoft (크레이그 콘웨이 CEO)" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "오라클은 1990년대 데이터베이스 시장 1위를 굳히며 엔터프라이즈 소프트웨어의 절대 강자로 군림했다. 그러나 ERP(전사적 자원관리) 시장에서는 SAP와 PeopleSoft에 밀렸다. 래리 엘리슨은 ERP 시장 재편을 위한 M&A 전략을 수년간 검토했다.",
    "PeopleSoft는 1987년 설립 이후 HR(인적자원) 및 ERP 소프트웨어 분야에서 독보적인 입지를 구축했다. 2003년 기준 글로벌 ERP 시장 2위로 SAP(1위)와 함께 엔터프라이즈 소프트웨어 시장의 핵심 플레이어였다.",
    "2003년 6월 2일, PeopleSoft가 중견 ERP 기업 J.D. Edwards를 약 17억 달러에 인수한다고 발표했다. 이는 PeopleSoft의 중소기업 시장 확장 전략이었으나, 동시에 오라클의 인수 표적으로서의 가치를 더욱 높이는 결과를 낳았다.",
    "PeopleSoft의 JD Edwards 인수 발표 나흘 뒤인 6월 6일, 래리 엘리슨은 주당 16달러(총 51억 달러) 규모의 적대적 공개매수를 기습 발표했다. 이후 18개월에 걸친 공격과 방어의 전쟁은 엔터프라이즈 소프트웨어 업계 최장·최격렬 M&A 분쟁으로 역사에 기록됐다.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "약 103억 달러",
    acquirerName: "오라클 (Oracle Corporation)",
    targetName: "PeopleSoft, Inc.",
    announcedDisplay: "2003년 6월",
    closedDisplay: "2004년 12월",
    country: "US",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "오라클, 주당 $16 적대적 공개매수 기습 발표 (2003.06.06) — PeopleSoft의 JD Edwards 인수 발표 나흘 만의 반격.",
    "PeopleSoft 이사회, 만장일치 거부 + Poison Pill 즉각 발동 — 오라클 20% 이상 취득 시 자동 희석.",
    "Customer Assurance Program(CAP): '오라클에 인수되면 고객에게 최대 5배 환불' — 자산 파괴형 독소 조항.",
    "미 법무부(DOJ), 18개월 반독점 조사 착수 — PeopleSoft의 최대 방어 시간 벌기 전략.",
    "오라클, 5차례 공개매수가 인상 ($16 → $26.50, +65%) — 주주 압박과 장기전 소진 전략 병행.",
    "DOJ 반독점 허용(2004.09) + PeopleSoft CEO 해임(2004.11) → 협상 분위기 전환, 이사회 최종 수용(2004.12.28).",
    "최종가 $26.50 / 총액 $103억 — 엔터프라이즈 소프트웨어 역사상 최대 적대적 인수 완료.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "2003년 글로벌 엔터프라이즈 소프트웨어 시장은 SAP·오라클·PeopleSoft·Microsoft의 4강 구도였다. ERP(Enterprise Resource Planning) 시장은 대기업 인프라 교체 주기가 10~15년으로 지극히 끈끈한 고객 락인(lock-in) 구조를 가졌다. 새 ERP 시스템 도입에는 소프트웨어 라이선스비의 3~7배에 달하는 구축·유지 비용이 들었고, 한번 도입한 고객은 좀처럼 플랫폼을 바꾸지 않았다. 이 구조적 특성이 오라클로 하여금 'PeopleSoft 고객을 그대로 흡수할 수 있다'는 논리를 가능하게 했다.",
    metrics: [
      { label: "글로벌 ERP 시장 규모 (2003)", value: "약 $240억",       sub: "연간" },
      { label: "PeopleSoft ERP 시장 점유율",  value: "약 12~15%",       sub: "SAP에 이은 2위" },
      { label: "오라클 ERP 시장 점유율",      value: "약 7~10%",        sub: "3위" },
      { label: "고객 평균 ERP 교체 주기",      value: "10~15년",         sub: "높은 교체비용 기반 락인" },
    ],
    subBody:
      "엔터프라이즈 소프트웨어 업계는 라이선스 + 유지보수(Maintenance) 이중 수익 구조가 핵심이다. PeopleSoft의 유지보수 계약은 매년 안정적인 반복 수익을 창출했으며, 오라클 입장에서는 이 유지보수 수입 흐름이 인수의 핵심 가치였다. 실제로 오라클은 인수 완료 후 PeopleSoft 신규 개발을 중단하고 고객들을 오라클 E-Business Suite로 마이그레이션하는 전략을 추진했다.",
    players: [
      { name: "오라클 (Oracle)",        role: "데이터베이스 1위, ERP 확장 야심의 공격자" },
      { name: "PeopleSoft",             role: "HR·ERP 2위, 18개월 방어 주체" },
      { name: "SAP",                    role: "ERP 1위, 오라클-PeopleSoft 합병의 최대 경쟁자" },
      { name: "J.D. Edwards",           role: "PeopleSoft 인수 대상, 분쟁의 도화선" },
      { name: "미 법무부 (DOJ)",        role: "18개월 반독점 조사, PeopleSoft 최대 방어막" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "PeopleSoft, Inc.",
    body: "PeopleSoft는 1987년 데이브 더필드(Dave Duffield)가 창업한 엔터프라이즈 소프트웨어 기업으로, HR(인적자원관리) 소프트웨어 분야에서 시작해 ERP 전 영역으로 확장했다. 2003년 기준 Fortune 500 기업의 상당수를 고객으로 확보했으며, 특히 HR 모듈은 업계 표준으로 통했다. 크레이그 콘웨이(Craig Conway) CEO 체제하에서 공격적 성장 전략을 추진하던 중 오라클의 적대적 공개매수에 직면했다.",
    metrics: [
      { label: "연간 매출 (2002)",           value: "약 $18억",      sub: "라이선스 + 유지보수" },
      { label: "ERP 시장 점유율",            value: "약 12~15%",     sub: "글로벌 2위" },
      { label: "공개매수 발표 전 주가",       value: "$17.56",        sub: "2003년 6월 5일 기준" },
      { label: "최종 인수가",                value: "$26.50/주",     sub: "총액 약 $103억" },
    ],
    financials: [
      { year: "FY2000", revenue: 1298, cogs: 312, grossProfit: 986, sga: 621, operatingIncome: 201, ebitda: 285 },
      { year: "FY2001", revenue: 1306, cogs: 324, grossProfit: 982, sga: 648, operatingIncome: 142, ebitda: 228 },
      { year: "FY2002", revenue: 1800, cogs: 410, grossProfit: 1390, sga: 790, operatingIncome: 285, ebitda: 390 },
    ],
    financialsNote: "단위: 백만 달러 (US$M) | US GAAP 기준 | 출처: PeopleSoft 연간보고서 및 공개 자료 (추정치 포함)",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  // ── Control Battle Overview ──────────────────────────────────
  controlBattleOverview: {
    body: "래리 엘리슨은 PeopleSoft가 경쟁사를 인수해 규모를 키우는 순간을 포착해 기습 공개매수를 선언했다. 이후 18개월은 교과서에서나 볼 법한 공격과 방어의 총체적 전쟁이었다 — 독소 조항, 독약 처방, 반독점 소송, CEO 교체까지.",
    catalyst:
      "PeopleSoft가 J.D. Edwards($17억) 인수를 발표한 바로 나흘 뒤, 래리 엘리슨이 'PeopleSoft를 인수하겠다'고 발표했다. 엘리슨의 논리는 단순했다: ERP 시장에서 오라클·SAP·PeopleSoft의 3파전보다는 2파전이 낫고, PeopleSoft 고객을 오라클 DB로 마이그레이션할 수 있다.",
    attackerLabel: "오라클 (래리 엘리슨)",
    defenderLabel: "PeopleSoft 이사회 (크레이그 콘웨이)",
    battleMoves: [
      {
        date: "2003-06-06",
        side: "attack",
        actor: "오라클",
        move: "적대적 공개매수 기습 발표 — $16/주",
        detail:
          "PeopleSoft의 JD Edwards 인수 발표 나흘 후 오라클이 주당 $16(총 51억 달러) 적대적 공개매수 발표. PeopleSoft 주가 당시 $17.56 대비 프리미엄이 미약하여 이사회의 즉각 거부를 야기.",
        weapon: "적대적 공개매수 (Hostile TOB)",
        financialImpact: "PeopleSoft 주가 당일 +18%",
      },
      {
        date: "2003-06-09",
        side: "defense",
        actor: "PeopleSoft 이사회",
        move: "공개매수 거부 & Poison Pill 발동",
        detail:
          "이사회가 만장일치로 오라클 제안을 거부. 주주권리계획(Poison Pill) 즉각 발동 — 오라클이 20% 이상 취득 시 기존 주주에게 50% 할인 신주 대량 발행하여 오라클 지분 자동 희석.",
        weapon: "포이즌 필 (Poison Pill)",
        financialImpact: "오라클의 20% 이상 취득 시 자동 희석 발동",
      },
      {
        date: "2003-06-16",
        side: "defense",
        actor: "PeopleSoft 경영진",
        move: "Customer Assurance Program (CAP) 발동 — 자산 파괴 전략",
        detail:
          "오라클에 인수될 경우 PeopleSoft 고객에게 2~5배 라이선스 환불을 보장하는 고객 보증 프로그램(CAP) 시행. 인수 후 대규모 환불 부담을 심어 오라클의 인수 경제성을 의도적으로 파괴.",
        weapon: "고객 보증 프로그램 (CAP — 자산 파괴 독소 조항)",
      },
      {
        date: "2003-07",
        side: "neutral",
        actor: "미 법무부 (DOJ)",
        move: "반독점 조사 개시",
        detail:
          "DOJ가 오라클의 PeopleSoft 인수가 HR·ERP 소프트웨어 시장 독점 우려가 있다며 18개월 반독점 조사에 착수. 인수 타이밍의 최대 불확실성 요인이 됨.",
        weapon: "반독점 심사 (Antitrust Review)",
      },
      {
        date: "2003-11",
        side: "attack",
        actor: "오라클",
        move: "공개매수가 $19.5 인상 — 2차 압박",
        detail:
          "PeopleSoft 주주 압박을 위해 공개매수가를 $19.5로 인상. PeopleSoft 이사회 재차 거부. 래리 엘리슨 '이 게임은 끝까지 간다' 선언.",
        financialImpact: "$16 → $19.5 (+21%)",
      },
      {
        date: "2004-02",
        side: "attack",
        actor: "오라클",
        move: "공개매수가 $26 인상 — 4차 압박",
        detail:
          "주당 $26로 인상. 시가 대비 상당한 프리미엄 제시. PeopleSoft 주주들의 수락 압력 증가. 스태거드 보드 방어의 한계에 도달하기 시작.",
        financialImpact: "$19.5 → $26 (+33%)",
      },
      {
        date: "2004-09",
        side: "neutral",
        actor: "미 DOJ",
        move: "반독점 심사 통과 — 인수 허용 결정",
        detail:
          "18개월 조사 끝에 DOJ가 ERP 시장에서의 SAP 경쟁이 충분하다는 판단으로 인수 허용 결정. PeopleSoft 방어의 핵심 지원군 상실 — 이사회 저항 명분 급격히 약화.",
        financialImpact: "PeopleSoft 협상 레버리지 급감",
      },
      {
        date: "2004-11-22",
        side: "neutral",
        actor: "PeopleSoft 이사회",
        move: "CEO 크레이그 콘웨이 해임",
        detail:
          "18개월 방어를 이끌던 CEO가 이사회에 의해 전격 해임. 협상 분위기 전환. 새 경영진 하에서 오라클과의 협상 재개 — 분쟁의 사실상 종료를 알리는 신호.",
        financialImpact: "협상 재개 신호, 주가 공개매수가에 수렴",
      },
      {
        date: "2004-12-13",
        side: "attack",
        actor: "오라클",
        move: "최종 공개매수가 $26.50 확정",
        detail:
          "최종 $26.50로 인상. PeopleSoft 이사회가 '더 나은 제안이 없다'는 판단으로 협상 수용. CAP 고객 보증 조항은 협상 과정에서 폐기. 이사회 최종 승인(2004.12.28).",
        financialImpact: "최종가 $26.50, 총액 약 $103억",
      },
    ],
    financialWeapons: [
      {
        name: "적대적 공개매수 (Hostile TOB)",
        side: "attack",
        usedBy: "오라클",
        description:
          "이사회 동의 없이 주주에게 직접 제안. 5차례 가격 인상($16→$26.50)으로 주주 압박 지속. 18개월 인내 전략.",
        effectiveness: "decisive",
      },
      {
        name: "가격 인상 압박 전략",
        side: "attack",
        usedBy: "오라클",
        description:
          "총 5차례 공개매수가 인상(+65%). 시간이 지날수록 PeopleSoft 주주들의 수락 압력 증가. DOJ 클리어런스 이후 이사회의 저항 명분 소멸.",
        effectiveness: "decisive",
      },
      {
        name: "장기전 소진 전략",
        side: "attack",
        usedBy: "오라클",
        description:
          "18개월 공방으로 PeopleSoft의 경영 불확실성 극대화. 고객 계약 연기, 직원 이탈, 신규 사업 중단. CEO까지 교체된 뒤 방어 의지 소진.",
        effectiveness: "effective",
      },
      {
        name: "포이즌 필 (Poison Pill)",
        side: "defense",
        usedBy: "PeopleSoft 이사회",
        description:
          "오라클이 20% 이상 취득 시 기존 주주에게 50% 할인 신주 대량 발행. 오라클의 지분 비율 자동 희석. 적대적 취득을 수학적으로 비경제적으로 만들었으나 최종 수용 시 해제.",
        effectiveness: "effective",
      },
      {
        name: "CAP (고객 보증 자산 파괴)",
        side: "defense",
        usedBy: "PeopleSoft 경영진",
        description:
          "인수 완료 시 고객에게 최대 5배 환불 보장. PeopleSoft 자산 가치 파괴 전략. 오라클은 CAP를 사기로 규정하며 소송. 결국 합의 과정에서 폐기.",
        effectiveness: "blocked",
      },
      {
        name: "반독점 저항 (DOJ 활용)",
        side: "defense",
        usedBy: "PeopleSoft",
        description:
          "18개월 반독점 조사로 인수를 사실상 지연. HR·ERP 2위 vs. 1위 합병의 시장 독점 우려 제기. DOJ 허용 결정 이후 방어 레버리지 소멸.",
        effectiveness: "effective",
      },
    ],
    turningPoint: {
      date: "2004-09",
      event: "DOJ 반독점 심사 통과 — 방어 핵심 축 붕괴",
      detail:
        "18개월 동안 PeopleSoft의 가장 강력한 방어막은 '반독점 기각'이었다. DOJ가 인수를 허용하자 이사회의 거부 명분이 급격히 약해졌다. 2개월 후 CEO가 해임되고, 3개월 후 이사회가 최종 수용했다. DOJ 클리어런스가 진짜 게임 체인저였다.",
    },
    verdict: {
      winner: "attack",
      winnerLabel: "오라클 — 18개월 만에 PeopleSoft 인수 완료",
      margin: "최종가 $26.50 (첫 제안 $16 대비 +65%)",
      note: "오라클은 ERP 시장 재편에 성공했다. 인수 후 PeopleSoft 제품 단종 수순을 밟았고, 이는 고객들의 우려를 현실로 만들었다. 그러나 엔터프라이즈 SW 시장에서 오라클-SAP 2강 체제가 고착됐다. 18개월 공방은 적대적 M&A의 교과서가 됐다.",
    },
    priceImpact: {
      preContest: "$17.56 (2003년 6월 5일)",
      peak: "$26.50 (최종 공개매수가)",
      postContest: "$26.50 (2004년 12월 인수 완료)",
      note: "PeopleSoft 주가는 공개매수 발표 이후 줄곧 공개매수가 아래에서 거래됐다 — 시장이 '인수 성사 불확실'에 베팅한 것. 5차 가격 인상과 DOJ 클리어런스 이후 주가가 공개매수가에 수렴. 첫 제안($16) 대비 주주는 +65% 수익.",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "오라클은 이사회 동의 없이 PeopleSoft 주주에게 직접 공개매수를 제안하는 '적대적 공개매수(Hostile Tender Offer)' 방식을 택했다. PeopleSoft는 Poison Pill(주주권리계획), CAP(고객 보증 프로그램), Staggered Board(이사회 순차 임기 방어), DOJ 반독점 심사 지원 등 다층적 방어 체계를 구축했다. 18개월 공방 끝에 오라클이 최종 $26.50로 인상한 공개매수를 이사회가 수용하면서 딜이 완료됐다.",
    preOwnership: {
      nodes: [
        { id: "oracle_pre",     label: "오라클",       sub: "래리 엘리슨 CEO",        type: "acquirer" },
        { id: "psft_pre",       label: "PeopleSoft",   sub: "ERP·HR 소프트웨어 2위",   type: "target" },
        { id: "psft_pub",       label: "PeopleSoft 주주", sub: "공개 시장 유통주",    type: "public" },
      ],
      edges: [
        { from: "oracle_pre",   to: "psft_pre",  label: "적대적 공개매수 ($16 → $26.50)" },
        { from: "psft_pub",     to: "psft_pre",  label: "공개 주주" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "oracle_post",    label: "오라클",        sub: "PeopleSoft 완전 흡수",   type: "acquirer" },
        { id: "psft_post",      label: "PeopleSoft",    sub: "오라클 자회사 → 제품 단종", type: "target" },
      ],
      edges: [
        { from: "oracle_post",  to: "psft_post",  label: "100% 취득 ($26.50/주, $103억)" },
      ],
    },
    keyTerms: [
      { label: "최초 공개매수가",     value: "$16.00/주" },
      { label: "최종 공개매수가",     value: "$26.50/주",   accent: true },
      { label: "가격 인상 횟수",      value: "5차례 (+65%)" },
      { label: "총 거래 금액",        value: "약 $103억",   accent: true },
      { label: "공방 기간",           value: "18개월 (2003.06 – 2004.12)" },
      { label: "DOJ 반독점 조사",     value: "18개월 심사 후 허용" },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "오라클과 PeopleSoft 양측 모두 월가 최상위 투자은행과 법률 자문사를 총동원했다. 18개월 공방에서 재무 자문사의 공정의견(Fairness Opinion)과 법무 자문사의 반독점·인수방어 전략이 딜의 핵심 변수였다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "오라클 (인수측)",
        initials: "ORC",
        bg: "bg-red-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "재무 자문",
            roleType: "financial",
            note: "공개매수 가격 산정 및 인수 구조 설계, 공정의견 제공.",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "법무 자문",
            roleType: "legal",
            note: "적대적 인수 법률 전략 수립, 반독점 심사 대응, 딜 집행 총괄.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "PeopleSoft (방어측)",
        initials: "PSFT",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "Goldman Sachs / UBS",
            role: "재무 자문",
            roleType: "financial",
            note: "방어 전략 수립, 공정의견(Fairness Opinion) 제공, 대안 매수자 탐색.",
          },
          {
            firm: "Wilson Sonsini Goodrich & Rosati",
            role: "법무 자문",
            roleType: "legal",
            note: "Poison Pill 설계, CAP 적법성 방어, DOJ 반독점 심사 지원.",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공개 자료 및 언론 보도 기반입니다. 실제 계약 내용과 다를 수 있습니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "오라클의 최종 인수가 $26.50는 공개매수 첫 발표가($16) 대비 +65.6% 인상된 수준이다. PeopleSoft 인수 직전 주가($17.56) 대비로는 약 +51% 프리미엄이다. 엔터프라이즈 소프트웨어 특성상 PeopleSoft의 핵심 가치는 반복 유지보수 수익(Recurring Maintenance Revenue)과 고객 락인에 있었다. 18개월 공방으로 인한 경영 불확실성이 주가를 공개매수가 아래로 억제했으나, 최종 DOJ 클리어런스 이후 주가가 수렴했다.",
    rows: [
      { item: "공개매수 발표 전 주가 (2003.06.05)", val: "$17.56",   note: "분쟁 전날 종가" },
      { item: "1차 공개매수가 (2003.06.06)",         val: "$16.00",   note: "첫 제안, 이사회 즉각 거부" },
      { item: "2차 공개매수가 (2003.11)",            val: "$19.50",   note: "+21% 인상" },
      { item: "4차 공개매수가 (2004.02)",            val: "$26.00",   note: "+33% 추가 인상" },
      { item: "최종 공개매수가 (2004.12.13)",        val: "$26.50",   note: "이사회 최종 수용", accent: true },
      { item: "총 거래 금액",                        val: "약 $103억", note: "최종가 기준 전체 지분 인수", accent: true },
    ],
    disclaimer: "주: 가격 및 금액은 공시 자료와 언론 보도 기반입니다. 실제 수치와 다를 수 있습니다.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "오라클은 왜 18개월을 버텼나",
      initials: "ORC",
      bg: "bg-red-700",
      points: [
        "ERP 시장에서 SAP에 밀리던 오라클에게 PeopleSoft 인수는 단번에 ERP 2위를 흡수해 SAP와의 2강 체제를 만드는 전략적 도약이었다.",
        "PeopleSoft 고객들은 대기업 HR·ERP 시스템 사용자로, 오라클 데이터베이스로의 마이그레이션이 가능했다 — 인수 후 크로스셀링 시너지 극대화.",
        "PeopleSoft의 반복 유지보수 수입(Recurring Maintenance Revenue)은 안정적 현금흐름을 보장했다. 이 수익 흐름이 $103억 인수가의 핵심 근거.",
        "장기전 소진 전략이 유효했다. 18개월 공방으로 PeopleSoft 고객 계약이 지연되고 직원이 이탈하면서, 방어측의 저항 의지가 약해졌다.",
      ],
    },
    seller: {
      title: "PeopleSoft 이사회는 왜 결국 수용했나",
      initials: "PSFT",
      bg: "bg-blue-700",
      points: [
        "DOJ 반독점 허용(2004.09) 이후 이사회의 거부 명분이 소멸됐다. '반독점 기각'이 최대 방어막이었는데, 그 방어막이 무너진 것이다.",
        "2004년 11월 CEO 크레이그 콘웨이 해임은 방어 의지 소진의 결정적 신호였다. 새 경영진은 주주 가치 극대화 관점에서 협상 수용을 선택했다.",
        "최종가 $26.50는 첫 제안($16) 대비 +65%, 공개매수 전 주가($17.56) 대비 +51% 프리미엄이었다 — 주주에게 '더 좋은 대안이 없다'는 판단.",
        "CAP(고객 보증 5배 환불)는 협상 카드로 활용됐으나, 최종 합의 과정에서 오라클이 이를 폐기하는 조건으로 가격 인상에 합의했다.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2006년 이후",
    body: "오라클은 PeopleSoft 인수 완료 후 신규 제품 개발을 중단하고 고객들에게 오라클 E-Business Suite로의 마이그레이션 일정을 제시했다. 이는 CAP 발동 당시 PeopleSoft 고객들이 우려했던 최악의 시나리오가 현실화된 것이었다. 그러나 오라클은 마이그레이션 과정에서 대규모 라이선스·서비스 수익을 창출했다. 엔터프라이즈 소프트웨어 시장은 이후 오라클-SAP 2강 체제로 재편됐다.",
    overallVerdict: "오라클 전략적 승리 — ERP 시장 재편, PeopleSoft 제품 단종",
    positives: [
      "ERP 시장에서 SAP와의 2강 체제 구축 — 오라클의 장기 전략 목표 달성.",
      "PeopleSoft 유지보수 수익 흡수로 안정적 반복 현금흐름 강화.",
      "PeopleSoft 고객의 오라클 플랫폼 전환 과정에서 대규모 마이그레이션 수익 창출.",
      "적대적 인수 성공으로 향후 오라클의 시리즈 인수(BEA Systems, Siebel 등) 선례 확립.",
    ],
    risks: [
      "PeopleSoft 고객들의 SAP 이탈 — 일부 대형 고객이 오라클 대신 SAP로 플랫폼 전환.",
      "인수 후 PeopleSoft 핵심 인재 대규모 이탈 — 제품 개발·고객 관리 역량 약화.",
      "CAP 폐기에 대한 고객 신뢰 손상 — '오라클이 PeopleSoft 고객을 버렸다'는 인식.",
      "인수 후 통합 비용 및 제품 단종 과정에서 예상보다 높은 고객 이탈률.",
    ],
    editorNote:
      "오라클-PeopleSoft 전쟁은 엔터프라이즈 소프트웨어 M&A의 전범(典範)이다. 공격자가 5차례 가격을 올리며 18개월을 버텼고, 방어자는 독소 조항·반독점·이사회 방어의 3층 방어망을 쳤다. 그러나 DOJ라는 외부 변수가 붕괴하자 모든 방어가 무력화됐다. 이 딜은 '적대적 M&A에서 반독점 심사가 방어자의 최대 무기'라는 교훈을 남겼다.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "ORC",
    acquirerBg: "bg-red-700",
    targetInitials: "PSFT",
    targetBg: "bg-blue-700",
    acquirerName: "Oracle Corporation",
    targetName: "PeopleSoft, Inc.",
    dealTitle: "Oracle Hostile Takeover of PeopleSoft — 18-Month Control War",
    dealSize: "약 103억 달러",
    dealSizeUSD: "USD 10.3B",
    evEbitda: "N/A (경영권 분쟁·전략적 프리미엄)",
    closeDate: "Dec 2004",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    { id: 1, text: "Oracle Corporation, Tender Offer Statement (SC TO-T), SEC EDGAR (June 2003)", url: "https://www.sec.gov" },
    { id: 2, text: "PeopleSoft, Inc., Schedule 14D-9 (Solicitation/Recommendation Statement), SEC EDGAR (June 2003)" },
    { id: 3, text: "U.S. Department of Justice, Statement on Oracle/PeopleSoft Antitrust Review (September 2004)" },
    { id: 4, text: "PeopleSoft Board of Directors Press Release — Acceptance of Oracle Offer (December 2004)" },
    { id: 5, text: "Oracle Corporation Annual Report & Press Releases (2003–2005)" },
    { id: 6, text: "Financial Times, 'Oracle wins PeopleSoft battle after 18 months' (December 2004)" },
    { id: 7, text: "The Wall Street Journal, Oracle-PeopleSoft coverage (2003–2004)" },
    { id: 8, text: "Harvard Business School Case Study — Oracle's Hostile Bid for PeopleSoft (HBS 9-704-493)" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "오라클 vs. PeopleSoft 적대적 인수 완전 해부 — 18개월 공개매수 전쟁",
    description:
      "2003~2004년 오라클의 PeopleSoft 적대적 공개매수 완전 분석. 래리 엘리슨의 기습 공개매수, 포이즌 필, CAP 자산 파괴 독소 조항, DOJ 반독점 18개월, 5차례 가격 인상. 엔터프라이즈 소프트웨어 M&A 교과서.",
    keywords: [
      "오라클 PeopleSoft 인수",
      "적대적 공개매수",
      "포이즌 필",
      "Customer Assurance Program CAP",
      "래리 엘리슨",
      "엔터프라이즈 소프트웨어 M&A",
      "반독점 DOJ",
      "ERP 경영권 분쟁",
      "Hostile Tender Offer",
      "PeopleSoft 적대적 인수",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "적대적 공개매수 (Hostile Tender Offer)",
      description:
        "이사회 동의 없이 주주에게 직접 매수를 제안하는 방식. 오라클이 택한 핵심 공격 수단으로, 이사회를 우회해 주주 압박을 직접 가한다.",
    },
    {
      term: "포이즌 필 (Poison Pill / 주주권리계획)",
      description:
        "적대적 인수자가 일정 지분(보통 15~20%)을 취득하면 기존 주주들에게 할인된 신주를 발행해 인수자 지분을 자동 희석하는 방어 수단.",
    },
    {
      term: "Customer Assurance Program (CAP)",
      description:
        "PeopleSoft가 도입한 자산 파괴형 독소 조항. 적대적 인수 완료 시 고객에게 최대 5배 라이선스 환불을 보장해 인수자의 인수 경제성을 의도적으로 파괴.",
    },
    {
      term: "스태거드 보드 (Staggered Board)",
      description:
        "이사회를 2~3년에 걸쳐 순차 교체하는 정관 조항. 적대적 인수자가 한 번의 주주총회로 이사회를 즉각 장악하지 못하게 막는 방어 수단.",
    },
    {
      term: "반독점 심사 (Antitrust Review)",
      description:
        "경쟁당국(미국 DOJ/FTC)이 M&A가 시장 경쟁을 해치는지 심사하는 절차. PeopleSoft에게는 18개월 시간을 벌어준 핵심 방어 수단이었다.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "오라클이 PeopleSoft를 인수하려 한 이유는?",
      a: "ERP 시장에서 SAP에 밀리던 오라클이 PeopleSoft 인수를 통해 단번에 ERP 2위를 흡수하고 SAP와 2강 체제를 형성하려 했다. 또한 PeopleSoft의 대기업 HR·ERP 고객들을 오라클 데이터베이스와 연결해 크로스셀링 시너지를 극대화하는 전략이었다.",
    },
    {
      q: "PeopleSoft의 CAP(고객 보증 프로그램)은 왜 효과가 없었나?",
      a: "CAP는 '오라클이 인수하면 고객에게 최대 5배 환불'이라는 독소 조항으로 인수 경제성을 파괴하는 전략이었다. 그러나 오라클은 CAP를 사기로 규정해 법적으로 다퉜고, 최종 협상 과정에서 CAP 폐기를 조건으로 가격 인상에 합의했다. 결국 CAP는 방어를 지연시켰지만 최종 인수를 막지는 못했다.",
    },
    {
      q: "DOJ 반독점 심사가 왜 PeopleSoft의 가장 강력한 방어막이었나?",
      a: "DOJ 심사 기간(18개월) 동안 오라클은 공개매수를 완료할 수 없었다. 그 시간 동안 PeopleSoft는 주주들을 결집하고 다른 방어 수단을 구축했다. DOJ가 2004년 9월 인수를 허용하자 이사회의 저항 명분이 급격히 약해졌고, 3개월 만에 이사회가 최종 수용했다.",
    },
    {
      q: "오라클은 왜 5차례나 가격을 올렸나?",
      a: "PeopleSoft 이사회와 Poison Pill의 방어를 뚫으려면 주주들이 오라클에 주식을 팔도록 압박해야 했다. 가격 인상은 '이 게임은 끝까지 간다'는 오라클의 의지를 보여주는 신호이자 주주들의 수락 압력을 높이는 수단이었다. 최종가 $26.50는 첫 제안($16) 대비 +65%로, 오라클이 전략적 가치에 상당한 프리미엄을 지불했음을 보여준다.",
    },
    {
      q: "인수 후 PeopleSoft 고객들은 어떻게 됐나?",
      a: "오라클은 인수 완료 후 PeopleSoft 신규 개발을 중단하고 고객들에게 오라클 E-Business Suite로의 마이그레이션 일정을 제시했다. 이는 CAP 발동 당시 고객들이 우려했던 최악의 시나리오가 현실화된 것이었다. 일부 대형 고객들은 오라클 대신 SAP로 이탈하기도 했다.",
    },
    {
      q: "이 딜이 이후 M&A 역사에 미친 영향은?",
      a: "오라클-PeopleSoft 전쟁은 이후 적대적 M&A의 교과서가 됐다. 공격자 입장에서는 '장기전+가격 인상+DOJ 클리어런스'의 조합이, 방어자 입장에서는 '포이즌 필+자산 파괴 독소 조항+반독점 심사 활용'의 다층 방어가 모범 사례로 인용된다. 특히 반독점 심사가 적대적 M&A 방어의 핵심 시간 벌기 수단임이 이 딜로 확인됐다.",
    },
  ],
};

export default oraclePeoplesoft;
