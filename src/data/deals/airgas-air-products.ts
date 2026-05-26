/**
 * Airgas × Air Products 적대적 공개매수 (2010~2011)
 * 포이즌 필·Just Say No 방어의 교과서 · 델라웨어 법원 판결 · 5년 후 Air Liquide 2배 인수
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "airgas-air-products",
  title: "Air Products의 Airgas 적대적 공개매수 — 포이즌 필·Just Say No 방어의 교과서",
  subtitle: "$70/주 거부 → 5년 후 Air Liquide $143/주 인수 · 델라웨어 법원의 역사적 판결 · 이사회의 장기 가치 판단",
  category: "control",
  industry: "산업용 가스 / Industrial Gases",
  country: "미국",
  announcedAt: "2010-10-04",
  closedAt: "2011-02-11",
  announcedDisplay: "2010년 10월",
  closedDisplay: "2011년 2월 (철수)",
  readingMinutes: 11,
  tags: [
    "Airgas",
    "Air Products",
    "독소조항",
    "포이즌 필",
    "황금낙하산",
    "적대적 공개매수",
    "델라웨어 법원",
    "Just Say No",
  ],
  excerpt:
    "Air Products가 Airgas에 $60→$70/주 적대적 공개매수를 시도한 2010~2011년 딜. Airgas CEO Peter McCausland의 전면 거부와 포이즌 필·시차 이사회 방어, 델라웨어 법원의 'Just Say No 합법' 판결. 그리고 5년 후 Air Liquide가 $143/주에 인수해 McCausland가 옳았음을 증명한 기업 방어 전략의 교과서.",

  acquirer: { initials: "APD", bg: "bg-blue-700", label: "Air Products and Chemicals" },
  target: { initials: "ARG", bg: "bg-orange-600", label: "Airgas, Inc." },

  background: [
    "Air Products and Chemicals(NYSE:APD)는 산업용 가스 분야 글로벌 2위 기업으로, 헬륨·질소·산소·수소 등의 가스와 화학물질을 제조·공급한다. 2010년 당시 매출 약 $100억, 시가총액 약 $130억의 대형 특수화학 기업이었다. Airgas(NYSE:ARG)는 미국 3위 산업용 가스 유통 기업으로 Peter McCausland CEO가 1982년 창업해 수십 년간 인수합병을 통해 성장시킨 기업이다. 2010년 당시 매출 약 $30억, 직원 약 14,000명 규모였다.",
    "Air Products의 전략적 논리는 명확했다. Airgas를 인수하면 미국 산업용 가스 시장에서 Praxair와 Air Liquide에 맞서는 강력한 No.2 지위를 확보할 수 있었다. Airgas의 방대한 포장 가스(실린더 가스) 유통망은 Air Products가 취약했던 분야였으며, 두 회사의 결합으로 막대한 비용 시너지와 영업력 강화가 가능하다는 것이 Air Products 경영진의 판단이었다. 또한 2010년 당시 글로벌 금융위기 이후 Airgas 주가가 저평가됐다는 분석도 인수 배경이 됐다.",
    "2010년 2월 Air Products는 Airgas에 비공개 제안 $60/주를 전달했다. Airgas 이사회는 즉각 거부했다. Air Products는 이후 공개 적대적 공개매수(Hostile Tender Offer)로 전환해 $60/주를 직접 Airgas 주주들에게 제안했다. 이에 맞서 Airgas 이사회는 기존에 이미 갖추고 있던 포이즌 필(Shareholder Rights Plan)을 활성화하고, 시차 이사회(Staggered Board) 구조를 방어막으로 활용했다. Peter McCausland CEO는 \"$60은 터무니없이 저평가\"라고 강하게 주장하며 전면 거부 방침을 천명했다.",
    "Air Products는 제안가를 $65.50, 그리고 최종 $70/주까지 끌어올렸다. 총 딜 가치 약 $59억. Airgas 이사회는 $70도 거부했다. 결국 2011년 2월 15일 델라웨어 형평법원(Delaware Court of Chancery)의 William Chandler 판사가 역사적인 판결을 내렸다: 포이즌 필 유지 합법, 이사회의 Just Say No 방어 허용. Air Products는 2011년 2월 11일 공개매수를 자진 철수했다. 그리고 5년 후 2016년, Air Liquide가 Airgas를 $143/주, 총 $134억에 인수했다 — Air Products 최고 제안가의 정확히 2배.",
  ],

  dealSummary: {
    dealValueDisplay: "$59억 (Air Products 최종 제안, 철수)",
    acquirerName: "Air Products and Chemicals, Inc. (NYSE: APD)",
    targetName: "Airgas, Inc. (NYSE: ARG)",
    announcedDisplay: "2010년 10월",
    closedDisplay: "2011년 2월 (자진 철수)",
    country: "미국",
  },

  executiveSummary: [
    "Air Products, Airgas에 $60/주 비공개 제안 (2010.02) → 거부 → 공개 적대적 공개매수 전환 (2010.10)",
    "Airgas 포이즌 필(20% 트리거) + 시차 이사회로 방어 — 이사회 전면 교체에 3년 소요 구조",
    "Air Products 제안가 $60 → $65.50 → $70/주 (최종 딜 가치 약 $59억) — Airgas 이사회 전면 거부",
    "2011년 2월 15일 Delaware 법원 판결: 포이즌 필 합법 + Just Say No 방어 허용 — 전례 없는 판결",
    "Air Products 2011년 2월 11일 자진 철수 — Airgas 방어 성공, 독립 유지",
    "5년 후 2016년 Air Liquide가 Airgas를 $143/주($134억)에 인수 — Air Products $70의 정확히 2배 확인",
    "McCausland가 옳았다 — '저가 제안을 거부한 이사회'의 장기 가치 판단이 주주에게 더 큰 이익",
  ],

  industryOverview: {
    body: "산업용 가스 산업은 대규모 인프라 투자와 장기 계약 기반의 안정적 현금흐름이 특징인 과점 구조 시장이다. 2010년 기준 글로벌 시장은 Air Liquide(프랑스), Praxair(미국), Air Products(미국), Linde(독일)가 과점하는 구조였다. 미국 포장 가스(실린더 가스) 유통 시장은 Airgas가 약 30%를 점유하는 1위 사업자였다. 산업용 가스는 철강·반도체·식품·의료·항공우주 등 모든 제조업에 필수 원재료로, 경기 변동에 상대적으로 강한 방어적 성격을 가진다.",
    metrics: [
      { label: "글로벌 산업용 가스 시장 규모", value: "약 $600억", sub: "2010년 기준" },
      { label: "미국 포장 가스 시장 Airgas 점유율", value: "약 30%", sub: "미국 1위 유통사" },
      { label: "Air Products 연간 매출", value: "약 $100억", sub: "2010년 기준" },
      { label: "Airgas 연간 매출", value: "약 $30억", sub: "2010년 기준" },
    ],
    subBody:
      "산업용 가스 업계의 특성상 대규모 M&A를 통한 규모의 경제 확보가 핵심 경쟁 전략이다. Air Products의 Airgas 인수 시도는 Praxair와 Air Liquide에 맞서는 미국 시장 지배력 강화가 목적이었다. 아이러니하게도 Air Products가 인수에 실패한 Airgas를 결국 Air Liquide가 2016년 2배 가격에 인수하며 글로벌 산업용 가스 재편이 이루어졌다.",
    players: [
      { name: "Air Products (NYSE:APD)", role: "인수 시도자, 글로벌 산업용 가스 2위" },
      { name: "Airgas (NYSE:ARG)", role: "인수 대상, 미국 포장 가스 1위 유통사" },
      { name: "Air Liquide (프랑스)", role: "글로벌 1위, 2016년 $143/주에 Airgas 인수" },
      { name: "Praxair (미국)", role: "글로벌 2위 경쟁사 (현 Linde와 합병)" },
      { name: "Delaware 법원", role: "포이즌 필·Just Say No 합법성 최종 판결 주체" },
    ],
  },

  companyOverview: {
    targetName: "Airgas, Inc.",
    body: "Airgas는 Peter McCausland가 1982년 설립한 산업용 가스 유통 기업이다. 수십 년간 공격적인 소규모 가스 유통사 인수합병을 통해 미국 포장 가스(실린더 가스) 시장의 30%를 점유하는 1위 유통사로 성장했다. 산소·질소·아르곤·이산화탄소·헬륨·아세틸렌 등 다양한 산업용 가스를 미국 전역의 11,000개 이상 고객사에 공급했다. 2010년 당시 직원 약 14,000명, 450여 개 유통 거점을 보유한 견고한 사업 모델이었다. McCausland의 창업자 리더십과 장기 가치 지향적 경영 철학이 이 딜의 핵심 방어 주체였다.",
    metrics: [
      { label: "설립연도", value: "1982년", sub: "Peter McCausland 창업" },
      { label: "미국 포장 가스 시장 점유율", value: "약 30%", sub: "미국 1위 유통사" },
      { label: "연간 매출", value: "약 $30억", sub: "2010년 기준" },
      { label: "직원 수 / 유통 거점", value: "약 14,000명 / 450개+", sub: "2010년 기준" },
    ],
    financials: [
      {
        year: "FY2010",
        revenue: 30,
        cogs: 18,
        grossProfit: 12,
        sga: 5,
        operatingIncome: 4,
        ebitda: 6,
      },
      {
        year: "FY2011",
        revenue: 33,
        cogs: 19,
        grossProfit: 14,
        sga: 5,
        operatingIncome: 4.5,
        ebitda: 7,
      },
    ],
    financialsNote:
      "단위: 억 달러 (USD 억) | Airgas 연결 기준 추정치 | 출처: 공개 사업보고서 및 언론 보도",
    financialsCurrency: "USD",
    financialsUnit: "억",
  },

  controlBattleOverview: {
    body: "Air Products의 Airgas 적대적 공개매수는 미국 기업 지배구조 역사의 이정표입니다. '포이즌 필'과 '시차 이사회'가 어떻게 작동하는지, 그리고 '저가 제안을 거부한 이사회'가 5년 후 옳았음이 입증되는 과정을 살펴봅니다.",
    catalyst: "산업용 가스 시장 통합 기회 — Air Products의 Airgas 매수로 미국 3위 가스업체 확보 시도",
    attackerLabel: "Air Products and Chemicals",
    defenderLabel: "Airgas / Peter McCausland CEO",
    battleMoves: [
      {
        date: "2010-02-11",
        actor: "Air Products",
        side: "attack",
        move: "첫 비공개 제안 $60/주",
        detail:
          "Air Products가 Airgas 이사회에 $60/주 비공개 인수 제안. Airgas 즉각 거부. Air Products는 이후 공개 적대적 공개매수로 전환을 결정.",
        weapon: "비공개 선제 제안",
      },
      {
        date: "2010-10-04",
        actor: "Air Products",
        side: "attack",
        move: "공개 적대적 공개매수 선언 $60/주",
        detail:
          "Air Products가 공식 공개매수 시작. 이사회 동의 없이 Airgas 주주들에게 직접 $60/주에 주식 매도를 요청. Airgas 이사회 즉각 포이즌 필 활성화로 대응.",
        financialImpact: "Airgas 주가 +30%",
        weapon: "적대적 공개매수 (Hostile Tender Offer)",
      },
      {
        date: "2010-11-01",
        actor: "Airgas",
        side: "defense",
        move: "포이즌 필 + 시차 이사회 발동",
        detail:
          "Airgas가 기존 포이즌 필(20% 트리거: 20% 이상 취득 시 기존 주주 우선주 매입권 발동)을 유지하며 시차 이사회(매년 이사 1/3씩만 교체) 구조를 방어막으로 활용. Air Products는 이사회 전면 교체에 3년이 필요한 구조에 직면.",
        weapon: "포이즌 필 (Poison Pill / Shareholder Rights Plan)",
      },
      {
        date: "2011-01-24",
        actor: "Air Products",
        side: "attack",
        move: "최종 제안 $70/주 — 총 딜 가치 약 $59억",
        detail:
          "Air Products가 $70/주(최초 $60 대비 17% 인상)로 최종 제안 제시. 총 딜 가치 약 $59억. Airgas 이사회는 이 가격도 '여전히 저평가'를 이유로 거부.",
        financialImpact: "제안 총액 약 $59억",
        weapon: "제안가 최종 상향",
      },
      {
        date: "2011-02-15",
        actor: "Delaware Chancery Court",
        side: "neutral",
        move: "역사적 판결: 포이즌 필 합법, Just Say No 방어 허용",
        detail:
          "William Chandler 판사가 포이즌 필 유지 합법 판결. '이사회는 $70 제안도 거부할 수 있다 — 이는 이사회의 비즈니스 판단 영역이다.' Just Say No 방어가 법적으로 유효함을 확인. Air Products로서는 법적 탈출구가 봉쇄됨.",
        weapon: "Delaware 법원 판결",
      },
      {
        date: "2011-02-11",
        actor: "Air Products",
        side: "neutral",
        move: "공개매수 자진 철수 — Airgas 방어 성공",
        detail:
          "법원 패소 후 Air Products가 Airgas 적대적 공개매수를 완전 철수. Airgas는 독립 상장사 지위를 유지. McCausland의 장기 가치 판단이 입증되는 과정의 시작.",
        financialImpact: "Airgas 주가 -10% (프리미엄 소멸)",
        weapon: "자진 철수",
      },
    ],
    financialWeapons: [
      {
        name: "포이즌 필 (Poison Pill / Shareholder Rights Plan)",
        side: "defense",
        usedBy: "Airgas 이사회",
        description:
          "어떤 주주든 20% 이상 지분을 취득하면 기존 주주들이 50% 할인 가격으로 우선주를 매입할 수 있는 권리를 부여. 적대적 인수자의 지분 취득을 극도로 비용이 높게 만드는 핵심 방어 수단.",
        effectiveness: "decisive",
      },
      {
        name: "시차 이사회 (Staggered Board)",
        side: "defense",
        usedBy: "Airgas 이사회",
        description:
          "이사를 3분의 1씩만 교체하는 구조. Air Products는 1년에 3명만 교체 가능해 이사회 전면 교체에 3년이 필요했습니다. 포이즌 필과 결합해 적대적 인수를 구조적으로 방어.",
        effectiveness: "effective",
      },
      {
        name: "적대적 공개매수 (Hostile Tender Offer)",
        side: "attack",
        usedBy: "Air Products",
        description:
          "이사회 동의 없이 주주들에게 직접 주식 매도를 요청하는 전략. 포이즌 필로 인해 20% 이상 취득이 경제적으로 불가능했고, Just Say No 판결로 법적 탈출구도 봉쇄됐습니다.",
        effectiveness: "blocked",
      },
      {
        name: "Just Say No 방어",
        side: "defense",
        usedBy: "Peter McCausland / Airgas 이사회",
        description:
          "재무적으로 합리적으로 보이는 프리미엄 제안도 이사회가 거부할 수 있다는 원칙. '장기적 기업 가치가 현재 제안가보다 높다'는 이사회의 비즈니스 판단을 법원이 존중한다는 Delaware 법리.",
        effectiveness: "decisive",
      },
    ],
    turningPoint: {
      date: "2011-02-15",
      event: "Delaware 법원 판결 — 포이즌 필·Just Say No 합법 확정",
      detail:
        "William Chandler 판사의 판결로 Airgas의 포이즌 필 유지와 Just Say No 방어가 법적으로 확인됐습니다. 이사회가 $70 제안도 합법적으로 거부할 수 있다는 판결이 나오자 Air Products는 철수할 수밖에 없었고, Airgas의 독립이 확정됐습니다.",
    },
    verdict: {
      winner: "defense",
      winnerLabel: "Airgas / Peter McCausland CEO",
      margin: "법원 판결로 포이즌 필·Just Say No 방어 확정",
      note: "McCausland의 '저가 거부'가 옳았음이 입증: Air Products $70 철수 → 5년 후 Air Liquide $143에 인수(Air Products 제안 대비 2배). 이사회의 장기 가치 판단이 주주에게 더 큰 이익을 가져다줬습니다.",
    },
    priceImpact: {
      preContest: "$43 (2010년 10월 공개매수 전)",
      peak: "$70 (Air Products 최종 제안)",
      postContest: "$60~65 (2011년 2월 철수 후)",
      note: "5년 후 2016년 Air Liquide가 $143/주에 인수 — Air Products $70 제안의 2배. McCausland가 옳았다.",
    },
  },

  dealStructure: {
    body: "Air Products는 Airgas 주주들에게 직접 주당 $70의 현금 공개매수를 제안했다. 그러나 Airgas의 포이즌 필(20% 트리거)로 인해 Air Products는 이사회 동의 없이 20% 이상 지분을 취득하는 것 자체가 경제적으로 불가능한 구조였다. 시차 이사회 구조는 이사회 전면 교체에 3년을 요구했다. Delaware 법원 판결 후 Air Products는 자진 철수했고, Airgas는 상장사 독립 지위를 유지했다. 이후 2016년 Air Liquide가 $143/주에 우호적 인수를 완료했다.",
    preOwnership: {
      nodes: [
        {
          id: "apd",
          label: "Air Products (APD)",
          sub: "NYSE 상장, 인수 시도 중",
          type: "acquirer",
        },
        {
          id: "mccausland",
          label: "Peter McCausland / 이사회",
          sub: "창업자 CEO, 방어 주도",
          type: "entity",
        },
        {
          id: "public_shareholders",
          label: "Airgas 일반 주주",
          sub: "의결권 캐스팅보트",
          type: "public",
        },
        {
          id: "airgas",
          label: "Airgas, Inc.",
          sub: "NYSE:ARG 상장사",
          type: "target",
        },
      ],
      edges: [
        { from: "apd", to: "airgas", label: "적대적 공개매수 ($70/주)" },
        { from: "mccausland", to: "airgas", label: "CEO·이사회 방어 주도" },
        { from: "public_shareholders", to: "airgas", label: "일반 주주 지분" },
      ],
    },
    postOwnership: {
      nodes: [
        {
          id: "apd_withdrew",
          label: "Air Products (APD)",
          sub: "2011년 2월 자진 철수",
          type: "acquirer",
        },
        {
          id: "airgas_independent",
          label: "Airgas, Inc.",
          sub: "독립 유지 → 2016년 Air Liquide 인수",
          type: "target",
        },
        {
          id: "air_liquide",
          label: "Air Liquide (프랑스)",
          sub: "2016년 $143/주 우호적 인수",
          type: "fund",
        },
      ],
      edges: [
        {
          from: "apd_withdrew",
          to: "airgas_independent",
          label: "인수 실패 · 철수",
        },
        {
          from: "air_liquide",
          to: "airgas_independent",
          label: "2016년 $143/주 인수 완료",
        },
      ],
    },
    keyTerms: [
      { label: "최초 제안가", value: "$60/주", accent: false },
      { label: "최종 제안가", value: "$70/주 (총 약 $59억)", accent: true },
      { label: "거래 형태", value: "전면 현금 적대적 공개매수" },
      { label: "포이즌 필 트리거", value: "20% 이상 지분 취득 시 발동" },
      { label: "Delaware 법원 판결", value: "포이즌 필 합법 + Just Say No 허용 (2011.02.15)" },
      { label: "결과", value: "Air Products 자진 철수 (2011.02.11)" },
      { label: "5년 후 결말", value: "Air Liquide $143/주 ($134억) 인수 (2016)", accent: true },
    ],
  },

  advisors: {
    body: "이 딜은 Wall Street 최상위 투자은행과 Delaware 전문 로펌들이 총동원된 세기의 적대적 공개매수 공방이었다. 법원 소송이 핵심 전장이 된 만큼 Delaware 기업법 전문 로펌의 역할이 특히 중요했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Air Products (인수 시도측)",
        initials: "APD",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "Bank of America Merrill Lynch",
            role: "재무 자문",
            roleType: "financial",
            note: "공개매수 구조 설계, 가격 산정, 주주 커뮤니케이션 총괄",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "법무 자문",
            roleType: "legal",
            note: "적대적 공개매수 법적 구조 및 Delaware 소송 전략 수립",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Airgas (방어측)",
        initials: "ARG",
        bg: "bg-orange-600",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "재무 자문",
            roleType: "financial",
            note: "방어 전략 구조 설계, 독립 가치 평가, 공정성 의견서(Fairness Opinion)",
          },
          {
            firm: "Cravath, Swaine & Moore",
            role: "법무 자문",
            roleType: "legal",
            note: "포이즌 필 방어 전략, Delaware 법원 소송 대응 총괄",
          },
          {
            firm: "Richards, Layton & Finger",
            role: "법무 자문 (Delaware 현지)",
            roleType: "legal",
            note: "Delaware 형평법원 소송의 현지 법무 대응",
          },
        ],
      },
    ],
    disclaimer:
      "자문사 정보는 공개 법원 기록, SEC 공시 및 언론 보도 기반입니다.",
  },

  valuation: {
    body: "Air Products의 최종 제안 $70/주는 공개매수 발표 전 Airgas 주가($43) 대비 63% 프리미엄이었으며, EBITDA 대비 약 10배 수준이었다. Airgas 이사회는 이 가격도 '미래 성장 가치와 경영 개선 잠재력을 반영하지 않은 저평가'라고 판단해 거부했다. 결국 5년 후 Air Liquide가 $143/주에 인수하며 이사회의 판단이 옳았음이 사후적으로 검증됐다.",
    rows: [
      {
        item: "Air Products 최초 제안가",
        val: "$60/주",
        note: "2010년 2월 비공개 제안",
      },
      {
        item: "Air Products 최종 제안가",
        val: "$70/주 (총 $59억)",
        note: "2011년 1월, 공개매수 전 주가 대비 63% 프리미엄",
        accent: true,
      },
      {
        item: "공개매수 발표 전 주가",
        val: "$43/주",
        note: "2010년 10월 기준",
      },
      {
        item: "EV/EBITDA (제안 기준)",
        val: "약 10x",
        note: "$59억 / EBITDA $6억 기준",
        accent: true,
      },
      {
        item: "5년 후 Air Liquide 인수가",
        val: "$143/주 ($134억)",
        note: "2016년 — Air Products $70 제안의 2배",
        accent: true,
      },
      {
        item: "McCausland 예측 프리미엄",
        val: "+104%",
        note: "Air Products $70 거부 후 Air Liquide $143 달성",
      },
    ],
    disclaimer:
      "밸류에이션 수치는 공개 SEC 공시, 법원 기록 및 언론 보도 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "Air Products의 인수 논리",
      initials: "APD",
      bg: "bg-blue-700",
      points: [
        "미국 산업용 가스 시장 지배력 강화 — Airgas의 포장 가스 유통망 확보로 Air Products의 취약 분야 보완",
        "비용 시너지 극대화 — 두 회사의 물류·영업·관리 비용 통합으로 연간 수억 달러 절감 예상",
        "저평가 기회 포착 — 2010년 금융위기 후 Airgas 주가 저평가 국면에서 인수 시도",
        "Praxair·Air Liquide 경쟁 대응 — 글로벌 경쟁사에 맞서는 규모 확보 필요성",
        "$70/주는 합리적 프리미엄 — 공개매수 전 주가 대비 63% 프리미엄으로 충분한 가치 제안",
      ],
    },
    seller: {
      title: "Airgas의 방어 논리 (McCausland)",
      initials: "ARG",
      bg: "bg-orange-600",
      points: [
        "$70은 저평가 — Airgas의 경영 개선 잠재력, 미래 성장 가치, 규모 확대 시너지를 전혀 반영하지 않은 가격",
        "장기 독립 가치 우월 — 독립 운영 시 더 높은 주주 가치를 실현할 수 있다는 이사회의 확신",
        "포이즌 필 + 시차 이사회 — 적대적 인수자가 이사회 동의 없이 경영권을 취득하는 것을 구조적으로 차단",
        "Delaware 법원 방어 — 이사회의 비즈니스 판단 존중이라는 Delaware 법리를 활용해 Just Say No 합법화",
        "결과로 증명 — 2016년 Air Liquide $143/주 인수로 McCausland의 $70 거부가 옳았음 사후 검증",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Airgas는 2011년 Air Products의 공개매수를 성공적으로 방어한 후 독립 상장사로 성장을 지속했다. 매출과 영업이익이 꾸준히 개선됐으며, 소규모 인수합병을 통한 시장 지배력 강화 전략도 계속됐다. 2016년 3월, 프랑스 Air Liquide가 $143/주, 총 $134억에 우호적 인수를 제안했고 Airgas 이사회는 수락했다. 이는 Air Products 최종 제안($70)의 정확히 2.04배였다. McCausland CEO가 2011년 델라웨어 법원 최종 변론에서 '이사회는 회사의 장기 이익을 단기 프리미엄보다 우선해야 한다'고 주장했던 것이 사실로 입증된 순간이었다.",
    overallVerdict: "방어 성공 — McCausland의 장기 가치 판단이 옳았음을 5년 후 Air Liquide $143 인수로 증명",
    positives: [
      "Just Say No 방어 성공 — 포이즌 필 + 시차 이사회 + Delaware 법원 판결의 완벽한 조합",
      "장기 주주 가치 극대화 — Air Products $70 거부 → Air Liquide $143 달성 (5년 후 +104%)",
      "Delaware 법원 선례 확립 — 이사회의 Just Say No 방어가 합법이라는 역사적 판례",
      "기업 방어 전략의 교과서 — 포이즌 필·시차 이사회의 작동 방식을 실전에서 완벽 시연",
    ],
    risks: [
      "결과론적 정당화의 위험 — Air Products $70이 당시 기준으로 합리적 프리미엄이었음은 부인 불가",
      "포이즌 필의 주주 반응 논란 — 단기 프리미엄을 원한 일부 주주들의 불만이 존재했음",
      "Delaware 이후 행동주의 압력 증가 — 포이즌 필 방어 성공이 거꾸로 행동주의 캠페인 증가를 자극",
      "시차 이사회 폐지 추세 — 이 딜 이후 기관투자자들의 시차 이사회 반대 목소리가 커짐",
    ],
    editorNote:
      "Airgas 딜은 기업 방어 전략의 교과서인 동시에, '이사회의 장기 가치 판단을 신뢰해야 하는가'라는 근본 질문을 던진다. McCausland는 63% 프리미엄을 거부했고 5년 후 2배를 받았다. 이 결과는 '포이즌 필은 주주 이익을 침해하는 경영진 보호 수단'이라는 비판에 대한 가장 강력한 반증 사례다. 단, 이는 McCausland의 장기 가치 판단이 '실제로 옳았기 때문에' 정당화된 것임을 기억해야 한다.",
  },

  tombstone: {
    acquirerInitials: "APD",
    acquirerBg: "bg-blue-700",
    targetInitials: "ARG",
    targetBg: "bg-orange-600",
    acquirerName: "Air Products and Chemicals, Inc.",
    targetName: "Airgas, Inc.",
    dealTitle: "포이즌 필·Just Say No 방어의 교과서 / Textbook Poison Pill & Just Say No Defense",
    dealSize: "$59억 (Air Products 최종 제안, 철수)",
    dealSizeUSD: "USD 5.9B final offer — withdrawn",
    evEbitda: "약 10x EBITDA (제안 시)",
    closeDate: "Feb 2011 (철수)",
  },

  sources: [
    { id: 1, text: "Air Products SEC 14D-9 / TO-T 공시 — Hostile Tender Offer for Airgas (2010~2011)", url: "https://www.sec.gov" },
    { id: 2, text: "Delaware Court of Chancery, Air Products v. Airgas — Judge William Chandler Opinion (February 15, 2011)" },
    { id: 3, text: "Airgas SEC 14D-9 — Board's Recommendation Against Air Products Offer (2010~2011)" },
    { id: 4, text: "Wall Street Journal — Air Products Abandons Airgas Bid (February 2011)" },
    { id: 5, text: "Air Liquide Press Release — Acquisition of Airgas at $143/share ($13.4B) (March 2016)" },
    { id: 6, text: "Harvard Law School Forum on Corporate Governance — The Airgas Case and Poison Pills (2011)" },
  ],

  seo: {
    title: "Airgas-Air Products 적대적 공개매수 완전 분석 — 포이즌 필·Just Say No 방어의 교과서",
    description:
      "Air Products의 Airgas 적대적 공개매수 완전 분석. 포이즌 필·시차 이사회 작동 방식, Delaware 법원 Just Say No 판결, 그리고 5년 후 Air Liquide $143 인수로 McCausland가 옳았음이 입증된 기업 방어 전략의 교과서.",
    keywords: [
      "Airgas Air Products 적대적 공개매수",
      "포이즌 필 작동 방식",
      "Just Say No 방어",
      "시차 이사회",
      "델라웨어 법원 판결",
      "기업 방어 전략",
      "hostile takeover defense",
      "Peter McCausland",
    ],
  },

  concepts: [
    {
      term: "포이즌 필 (Poison Pill / Shareholder Rights Plan)",
      description:
        "적대적 인수자가 20% 이상 지분을 취득하면 기존 주주들이 대폭 할인된 가격으로 주식을 매입할 수 있는 권리. 인수자의 지분 희석을 통해 적대적 인수를 경제적으로 불가능하게 만드는 방어 수단.",
    },
    {
      term: "Just Say No 방어",
      description:
        "재무적으로 합리적으로 보이는 인수 제안도 이사회가 장기 가치를 근거로 거부할 수 있다는 원칙. Delaware 법원이 이사회의 비즈니스 판단을 존중한다는 법리에 기반.",
    },
    {
      term: "시차 이사회 (Staggered Board)",
      description:
        "이사를 매년 전체의 3분의 1씩만 선임·교체하는 구조. 적대적 인수자가 이사회를 전면 교체하려면 3년이 필요해 포이즌 필과 결합 시 강력한 방어 효과.",
    },
  ],

  faq: [
    {
      q: "포이즌 필은 어떻게 작동하나?",
      a: "포이즌 필(Shareholder Rights Plan)은 어떤 주주든 일정 지분(Airgas의 경우 20%) 이상을 취득하면 다른 기존 주주들이 50% 할인된 가격으로 추가 주식을 살 수 있는 권리를 부여하는 장치입니다. 이 권리가 발동되면 적대적 인수자의 지분율이 자동으로 희석돼 인수를 위한 충분한 지분 확보가 사실상 불가능해집니다. 결국 적대적 인수자가 이사회 동의 없이 지분 취득을 통한 경영권 확보를 할 수 없게 만드는 것이 핵심입니다.",
    },
    {
      q: "Just Say No 방어는 법적으로 허용되나?",
      a: "미국 Delaware 주에서는 허용됩니다. 2011년 2월 Delaware 형평법원 William Chandler 판사는 Airgas 이사회가 $70 제안을 거부한 것이 합법이라고 판결했습니다. Delaware 기업법은 '경영 판단의 원칙(Business Judgment Rule)'을 통해 이사회가 회사의 장기 이익을 단기 프리미엄보다 우선할 수 있도록 허용합니다. 단, 이사회가 자신들의 지위 유지가 아닌 주주 이익을 위해 행동하고 있음을 입증해야 한다는 조건이 있습니다.",
    },
    {
      q: "McCausland CEO는 어떻게 $70이 저평가임을 알았나?",
      a: "McCausland는 창업자로서 Airgas의 내재 가치, 미래 성장 가능성, 그리고 유사 딜의 밸류에이션 선례를 종합적으로 판단했습니다. 그는 당시 산업용 가스 업계의 통합 추세와 Airgas의 시장 지배력 강화 여지를 고려할 때 $70은 현저히 낮다고 주장했습니다. 실제로 5년 후 Air Liquide가 $143/주에 인수하면서 그의 판단이 옳았음이 입증됐습니다. 창업자의 내부자 정보와 장기 비전이 단기 주가 프리미엄보다 더 정확한 가치 평가 기준이 됐다는 점에서 이 딜은 중요한 선례입니다.",
    },
    {
      q: "Air Liquide는 왜 2016년에 $143/주로 인수할 수 있었나?",
      a: "여러 요인이 복합적으로 작용했습니다. 첫째, 2011년 이후 Airgas의 실적이 크게 개선됐고 매출과 EBITDA가 성장했습니다. 둘째, 산업용 가스 업계의 글로벌 통합 추세가 가속화되면서 Airgas의 전략적 가치가 높아졌습니다. 셋째, Air Liquide는 Airgas 인수로 미국 최대 산업용 가스 기업이 될 수 있는 전략적 동기가 매우 강했습니다. 넷째, Air Products와 달리 Air Liquide는 Airgas 이사회와 우호적으로 협상해 저항 없이 딜을 성사시켰습니다. 결국 시간이 Airgas의 편이었고, 적절한 파트너가 적절한 가격으로 나타났습니다.",
    },
  ],
};

export default deal;
