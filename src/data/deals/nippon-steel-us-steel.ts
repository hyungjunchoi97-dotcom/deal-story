/**
 * Nippon Steel × U.S. Steel $14.9B (자기자본) / $14.1B (현금 지급) 인수, 2025년 6월
 * CFIUS 골든셰어 조건부 승인 — 미국 정부가 외국 기업의 미국 상장사 인수에 처음으로
 * "황금주(Golden Share)"를 보유하게 된 사상 첫 사례.
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "nippon-steel-us-steel",
  title: "신일본제철이 US Steel을 인수한 방법, 바이든 차단과 트럼프의 골든셰어 봉합",
  subtitle:
    "$55 전액 현금 · 자기자본 $14.9B · 18개월 정치 전쟁 · 미국 정부 사상 첫 골든셰어 · NSA(국가안보합의) 체결 후 2025년 6월 18일 클로징",
  category: "control",
  industry: "Steel / Strategic Manufacturing",
  country: "일본/미국",
  announcedAt: "2023-12-18",
  closedAt: "2025-06-18",
  announcedDisplay: "2023년 12월 18일 (인수 합의 발표)",
  closedDisplay: "2025년 6월 18일 (NSA 체결 후 클로징)",
  readingMinutes: 17,
  tags: [
    "Nippon Steel",
    "US Steel",
    "CFIUS",
    "Golden Share",
    "National Security Agreement",
    "Cleveland-Cliffs",
    "USW",
    "Biden Block",
    "Trump NSA",
    "Foreign Direct Investment",
    "Steel",
    "Strategic Manufacturing",
  ],
  excerpt:
    "2023년 12월 신일본제철이 US Steel을 주당 $55, 자기자본 기준 $14.9B(현금 지급 기준 $14.1B)에 전액 현금 인수하기로 합의했다. 사상 최고가에 사실상 합의된 거래였지만 그 뒤 18개월은 미국 대선 정치, USW(전미철강노조)의 반대, CFIUS(외국인투자심의위원회) 심사, 바이든 대통령의 거래 차단, 그리고 트럼프 행정부의 [국가안보합의(NSA, National Security Agreement)]를 통한 봉합으로 이어졌다. 2025년 6월 13일 트럼프 대통령의 행정명령, 6월 18일 클로징. 미국 정부는 이 거래의 조건으로 [황금주(Golden Share)]를 보유하게 됐는데, 우방국 기업의 미국 상장사 인수에 미국 정부가 직접 지분적 거부권을 가지게 된 첫 사례다. CFIUS 완화 조치의 새 모델을 만든 거래.",

  acquirer: { initials: "NSC", bg: "bg-red-700", label: "Nippon Steel Corporation" },
  target: { initials: "X", bg: "bg-blue-800", label: "United States Steel Corporation" },

  background: [
    "US Steel은 1901년 J.P. 모건이 앤드루 카네기의 Carnegie Steel을 인수해 설립한 미국 최초의 시가총액 $10억 기업이자, 한 세기 넘게 미국 산업력의 상징이었다. 그러나 2010년대 이후 중국발 철강 과잉공급, 미국 내 미니밀(전기로 기반) 업체인 Nucor·Steel Dynamics의 부상, 그리고 USW(United Steelworkers)와의 연금·의료 부채 부담으로 통합제철(BOF) 위주 사업 구조가 구조적 압박을 받았다. 2023년 들어 이사회는 전략적 대안 검토에 착수했고, 첫 인수 제안은 미국 내 동종업체 Cleveland-Cliffs로부터 왔다, 2023년 7월 [주당 $35 (현금 $17.50 + Cliffs 주식 1.023주), 자기자본 약 $73억]. US Steel 이사회는 이를 [\"불합리(unreasonable)\"]하다며 거부했고, 반독점 + 자금조달 우려가 시장에 깔렸다.",
    "[신일본제철의 등판.] 2023년 12월 18일, 신일본제철은 US Steel을 [주당 $55 전액 현금, 자기자본 약 $149억(현금 지급 기준 $141억)]에 인수하기로 합의했다고 발표했다. Cleveland-Cliffs의 $35 대비 +57% 프리미엄, 발표 직전 종가 대비 +40% 프리미엄. 사실상 [경쟁 상대가 따라올 수 없는 가격]을 신일본제철이 던진 셈이다. 신일본제철 측 논리는 명확했다, ① 미국 시장 직접 진입, ② 일본 본토의 정체된 수요를 우회, ③ 미국의 IRA·CHIPS법 자본 지출 사이클에 올라타기, ④ US Steel의 새 미니밀 자산 Big River Steel을 통한 그린 스틸 기술 전수.",
    "[USW의 반대와 정치화.] 신일본제철 발표 직후 USW(전미철강노조, David McCall 위원장)가 강하게 반대했다. 우려는 세 가지였다, ① 외국 소유 하의 공장 폐쇄·일자리 이전 가능성, ② USW 단체협약 승계 불확실성, ③ Cleveland-Cliffs를 USW가 사전 지지한 정치적 약속. 동시에 펜실베이니아·인디애나·미네소타 등 [러스트 벨트] 핵심 경합주의 정치 일정에 거래가 정면 충돌했다. 2024년 대선을 앞두고 양당 후보, 즉 바이든(민주)·트럼프(공화) 모두 [\"US Steel은 미국 회사로 남아야 한다\"]며 거래 반대를 선언했다. 정치 변수가 거래 심사의 본질이 됐다.",
    "[2024년 CFIUS 심사 → 2025년 1월 바이든 차단.] CFIUS는 2024년 내내 거래의 [국가안보 영향]을 검토했고, 2024년 12월 23일 위원회 내부 합의에 실패해 결정을 대통령에게 위임했다. 2025년 1월 3일, 바이든 대통령은 임기 종료 17일을 앞두고 [거래 금지 행정명령]에 서명했다. 우방국(일본) 기업이 추진한 미국 상장사 인수가 CFIUS 권한으로 차단된 사상 첫 사례. 2025년 1월 6일 신일본제철과 US Steel은 연방법원에 [\"거래 차단은 정당한 안보 우려가 아닌 정치적 동기에 기반한 것\"]이라며 행정명령을 다투는 소송을 제기했다.",
    "[트럼프 행정부의 봉합과 골든셰어 합의.] 2025년 1월 20일 트럼프 대통령 취임 이후, 백악관은 거래를 전면 폐기하지 않고 [\"파트너십\"]으로 재구성하는 협상을 시작했다. 트럼프는 2025년 4월 7일 CFIUS에 [신규 45일 de novo 재심사]를 명령했고, 위원회는 2025년 5월 21일 비공개 권고안을 백악관에 제출했다. 협상 결과는 2025년 6월 13일 트럼프 대통령의 행정명령으로 공식화됐다, [국가안보합의(NSA)] 체결을 조건으로 거래 승인. NSA에는 ① 미국 정부의 [황금주(Golden Share)] 보유, ② 신일본제철의 미국 내 약 $110억 신규 투자(2028년 말까지) + 총 $140억+ 다년 계획, ③ Pittsburgh 본사 유지, ④ 이사회 다수 미국 시민 + CEO 미국 시민, ⑤ 공장 폐쇄·생산 감축·이전·핵심 인사 변경에 대한 미국 정부 거부권 조항이 포함됐다. 2025년 6월 18일 거래 클로징.",
  ],

  dealSummary: {
    dealValueDisplay: "자기자본 $14.9B (현금 지급 기준 $14.1B)",
    acquirerName: "Nippon Steel Corporation (NSC)",
    targetName: "United States Steel Corporation (NYSE: X)",
    announcedDisplay: "2023년 12월 18일",
    closedDisplay: "2025년 6월 18일 (NSA 체결 후)",
    country: "JP/US",
  },

  executiveSummary: [
    "[전액 현금 $55/주, 자기자본 $14.9B] 신일본제철이 US Steel을 2023.12.18 합의가 기준 주당 $55 전액 현금으로 인수. Cleveland-Cliffs의 사전 제안($35) 대비 +57% 프리미엄. 발표 직전 종가 대비 +40% 프리미엄",
    "[Cleveland-Cliffs의 패배] 2023년 7월 Cleveland-Cliffs가 현금+주식 $35/주($73억) 제안 → US Steel 이사회 [불합리]로 거부. 신일본제철의 더 높은 전액 현금 제안이 본 거래를 차지",
    "[USW + 양당 대선 후보의 반대] USW(전미철강노조) 외국 소유 반대, Cleveland-Cliffs 사전 지지. 바이든·트럼프 양 대선 후보 모두 [\"미국 회사로 남아야 한다\"]며 거래 반대 → 거래 심사가 정치화",
    "[2025.01.03 바이든의 사상 첫 우방국 CFIUS 차단] 임기 종료 17일을 앞두고 바이든 행정명령으로 거래 금지. 우방국(일본) 기업의 미국 상장사 인수가 CFIUS 권한으로 차단된 첫 사례",
    "[2025.01.06 양사의 연방 소송] 신일본제철과 US Steel이 [거래 차단은 안보가 아닌 정치적 동기]라며 행정명령을 다투는 소송 제기",
    "[2025.04~05 트럼프의 재심사 → 2025.06.13 행정명령으로 승인] 트럼프 대통령이 CFIUS에 45일 de novo 재심사 명령 → 5.21 비공개 권고안 제출 → 6.13 NSA 체결 조건부 승인 행정명령 → 6.18 클로징",
    "[미국 정부 사상 첫 골든셰어] NSA는 ① 미국 정부 황금주 보유, ② 미국 대통령이 이사 3명 중 1명 지명, ③ 공장 폐쇄·생산 감축·이전·HQ 이전·이름 변경·핵심 인사 변경에 대한 거부권, ④ 약 $110억 투자(2028년 말까지) + 총 $140억+ 다년 계획, ⑤ 이사회 다수 미국 시민 + CEO 미국 시민, ⑥ Pittsburgh 본사 유지",
    "[CFIUS 완화의 새 모델] 기존 완화 조치(보안 이사 전용 보드, 사업 분리 등)와 달리 [지분 수준의 거부권]을 미국 정부가 직접 보유. 향후 우방국 FDI의 표준 구조가 될 가능성",
  ],

  industryOverview: {
    body: "미국 철강 산업은 2020년대 들어 세 개의 동시 압력 아래 있었다. 첫째, 중국의 글로벌 철강 과잉생산(연 10억 톤 + 수출 9천만 톤대)으로 인한 가격 압박. 둘째, 미국 내 미니밀(전기로) 업체인 Nucor·Steel Dynamics·Commercial Metals의 점유율 확대, 통합제철(BOF) 위주 US Steel·Cleveland-Cliffs는 구조적 열위. 셋째, 탈탄소(녹색 강철) 전환 자본 지출 부담, 그린 수소 환원철·전기로 전환에는 톤당 자본비용이 BOF의 2~3배. 이 와중에 IRA(인플레이션 감축법)·CHIPS법·반도체·EV·풍력 발전 등 미국 내 자본 지출 사이클은 [철강 수요 상승] 신호를 동시에 줬다. 신일본제철의 인수 논리는 이 [공급 압박 + 수요 회복 + 그린 전환 자본] 삼각의 미국 시장 진입이다.",
    metrics: [
      { label: "US Steel 인수 자기자본",     value: "$14.9B",     sub: "현금 지급 기준 $14.1B" },
      { label: "주당 인수가",              value: "$55.00",      sub: "전액 현금" },
      { label: "발표 직전 종가 대비 프리미엄", value: "약 +40%",     sub: "2023.12.15 종가 약 $39 기준" },
      { label: "Cleveland-Cliffs 제안가 대비", value: "+57%",      sub: "$35/주(현금+주식 혼합) 대비" },
    ],
    subBody:
      "미국 철강 산업의 [Big 4]는 Nucor, Cleveland-Cliffs, US Steel, Steel Dynamics. 이 중 통합제철(BOF)에 의존하는 곳은 Cleveland-Cliffs와 US Steel뿐이며, 둘 다 USW 단체협약·연금 부담을 지고 있다. Nucor·Steel Dynamics는 비노조 미니밀 모델로 자본효율이 훨씬 높다. 신일본제철의 인수가 의미한 바는 외국 자본이 미국 통합제철의 자본 지출과 그린 전환을 떠받친다는 거였고, 이게 정치적으로 가장 민감한 지점이었다.",
    players: [
      { name: "Nippon Steel Corporation",    role: "인수자, 일본 최대 철강사이자 세계 4위 (조강 생산량 기준)" },
      { name: "United States Steel",         role: "피인수자, 1901년 설립 미국 통합제철의 상징" },
      { name: "Cleveland-Cliffs",            role: "초기 인수 제안자 $35/주($73억), 거부 후 거래 무산. USW 사전 지지 확보" },
      { name: "United Steelworkers (USW)",   role: "전미철강노조, David McCall 위원장. 외국 소유 반대, Cleveland-Cliffs 지지" },
      { name: "CFIUS",                       role: "외국인투자심의위원회(재무부 의장). 2024년 심사 → 2024.12 위원회 합의 실패 → 2025.01 바이든 위임" },
      { name: "Biden 행정부",                role: "2025.01.03 거래 금지 행정명령 서명. CFIUS 권한 사용한 우방국 인수 차단 첫 사례" },
      { name: "Trump 행정부",                role: "2025.04 CFIUS 재심사 명령 → 2025.06.13 NSA 조건부 승인 행정명령" },
      { name: "Nucor / Steel Dynamics",      role: "미국 미니밀 경쟁사, 본 거래의 직접 당사자는 아니나 산업 구조 비교 대상" },
    ],
  },

  companyOverview: {
    targetName: "United States Steel Corporation (NYSE: X)",
    body: "US Steel은 1901년 J.P. 모건이 카네기 스틸(Carnegie Steel)·Federal Steel·National Steel을 통합해 설립한 미국 최초의 시가총액 $10억 기업이다. Pittsburgh 본사. 사업은 ① Flat-Rolled(평판압연, Mon Valley Works·Gary Works·Big River Steel), ② Mini Mill(Big River Steel, 2021년 추가 인수로 확보한 전기로 자산), ③ U.S. Steel Europe(슬로바키아 Košice), ④ Tubular(파이프강). 전성기 미국 철강 생산의 60%를 넘던 시장 점유율은 2020년대 중반 한 자릿수까지 떨어졌다. 직원 약 22,000명(2022년 기준), USW와의 단체협약 적용 인력이 다수.",
    metrics: [
      { label: "설립연도",          value: "1901년",       sub: "J.P. 모건이 카네기 스틸 합병해 설립" },
      { label: "본사",             value: "Pittsburgh, PA", sub: "NSA에 본사 유지 명문화" },
      { label: "FY2022 매출",       value: "약 $211억",     sub: "역대 최고 수준 (철강 가격 강세)" },
      { label: "FY2022 조정 EBITDA", value: "약 $42억",     sub: "통합제철 + 미니밀 합산" },
    ],
    financials: [
      { year: "FY2018", revenue: 14178, cogs: 12527, grossProfit: 1651, sga: 491,  operatingIncome: 1160, ebitda: 1840 },
      { year: "FY2019", revenue: 12937, cogs: 12000, grossProfit: 937,  sga: 460,  operatingIncome: 477,  ebitda: 1130 },
      { year: "FY2020", revenue: 9741,  cogs: 9710,  grossProfit: 31,   sga: 405,  operatingIncome: -374, ebitda: 290  },
      { year: "FY2021", revenue: 20275, cogs: 14750, grossProfit: 5525, sga: 532,  operatingIncome: 4993, ebitda: 5300 },
      { year: "FY2022", revenue: 21065, cogs: 16860, grossProfit: 4205, sga: 614,  operatingIncome: 3591, ebitda: 4180 },
    ],
    financialsNote: "단위: USD 백만 (US-GAAP 연결 기준) | 출처: US Steel 10-K (2018~2022). FY2020은 COVID-19로 영업적자, FY2021~22는 철강 가격 사이클 정점.",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  controlBattleOverview: {
    body: "본 거래는 통상의 M&A가 아닌 [18개월 정치 전쟁]이었다. 공격 진영(신일본제철 + US Steel 이사회 + 주주)이 사상 최고가 전액 현금 제안으로 거래를 잠갔지만, 방어 진영(USW + Cleveland-Cliffs + 바이든 CFIUS)이 노조 단체협약·국가안보·정치 약속을 무기로 거래를 차단했다. 마지막에 등장한 트럼프 행정부가 [황금주(Golden Share)]라는 새로운 봉합 구조를 만들어 거래를 클로징시켰고, 그 결과 표면적 승자는 신일본제철·US Steel이지만 실질적 승자는 [지분적 거부권을 손에 쥔 미국 정부]다. 분쟁의 결말이 [draw(무승부)]에 가까운 이유.",
    catalyst: "2023년 7월 Cleveland-Cliffs의 적대적 $35/주 제안 거부 → 2023.12.18 신일본제철의 $55/주 합의 → USW + 양당 대선 후보 + CFIUS의 전방위 반대",
    attackerLabel: "Nippon Steel + US Steel 이사회 + US Steel 주주",
    defenderLabel: "Biden 행정부 CFIUS + USW + Cleveland-Cliffs (초기 경쟁 인수자)",
    battleMoves: [
      {
        date: "2023-07-28",
        actor: "Cleveland-Cliffs",
        side: "defense",
        move: "적대적 인수 제안 공개",
        detail: "Cleveland-Cliffs가 US Steel에 주당 $35(현금 $17.50 + Cliffs 주식 1.023주, 총 $73억) 제안. USW의 사전 지지 확보. US Steel 이사회 [\"불합리\"] 판단",
        financialImpact: "US Steel 주가 +37% (제안 발표 직후)",
        weapon: "현금+주식 혼합 적대적 제안",
      },
      {
        date: "2023-12-18",
        actor: "Nippon Steel",
        side: "attack",
        move: "$55 전액 현금 전격 인수 합의 발표",
        detail: "Cleveland-Cliffs 대비 +57% 프리미엄, 발표 전 종가 대비 +40% 프리미엄. US Steel 이사회 만장일치 찬성. 경쟁 상대가 따라올 수 없는 가격 락-인",
        financialImpact: "자기자본 $14.9B, 주당 +$20 인상",
        weapon: "Cash-Premium Lock-in",
      },
      {
        date: "2024-03-14",
        actor: "USW (David McCall 위원장)",
        side: "defense",
        move: "전면 반대 성명 + 정치권 압박",
        detail: "USW가 외국 소유에 대한 전면 반대. Pennsylvania 정치권에 거래 차단 요구. 바이든·트럼프 양 대선 후보로부터 거래 반대 약속 확보",
        weapon: "Political Mobilization + 노조 단체협약 카드",
      },
      {
        date: "2024-09-03",
        actor: "Biden 행정부",
        side: "defense",
        move: "Biden 대통령 공식 반대 성명",
        detail: "Biden 대통령이 CFIUS 심사 와중에 공개적으로 [\"US Steel은 미국 회사로 남아야 한다\"]며 거래 반대를 공식화. CFIUS의 실질적 가이드라인 제공",
        weapon: "대통령 공개 반대 + CFIUS 심사 압박",
      },
      {
        date: "2025-01-03",
        actor: "Biden 행정부 (CFIUS)",
        side: "defense",
        move: "거래 차단 행정명령 서명",
        detail: "임기 종료 17일을 앞두고 Biden 대통령이 CFIUS 권한 기반 거래 금지 행정명령에 서명. 우방국(일본) 기업의 미국 상장사 인수가 CFIUS로 차단된 첫 사례",
        financialImpact: "US Steel 주가 약 $30대로 급락",
        weapon: "CFIUS Block (대통령 행정명령)",
      },
      {
        date: "2025-01-06",
        actor: "Nippon Steel + US Steel",
        side: "attack",
        move: "연방법원 행정명령 무효 소송 제기",
        detail: "양사가 연방법원에 [거래 차단은 정당한 안보 우려가 아닌 정치적 동기]라며 행정명령 무효 확인 소송 제기. 정치 변수의 사법 영역 전환 시도",
        weapon: "Litigation",
      },
      {
        date: "2025-04-07",
        actor: "Trump 행정부",
        side: "neutral",
        move: "CFIUS 45일 de novo 재심사 명령",
        detail: "Trump 대통령이 거래 [전면 폐기] 대신 [\"파트너십\"]으로 재구성 협상 시작. CFIUS에 45일 신규 안보 영향 재심사 명령. 5.21 비공개 권고안 백악관 제출",
        weapon: "CFIUS de novo Review (절차적 우회)",
      },
      {
        date: "2025-06-13",
        actor: "Trump 행정부",
        side: "neutral",
        move: "NSA 조건부 승인 행정명령 → 6.18 클로징",
        detail: "Trump 대통령이 NSA(국가안보합의) 체결을 조건으로 거래 승인 행정명령 서명. NSA에 미국 정부 [황금주] 명문화 + 거부권 명시 + $110억 투자 약정. 2025.06.18 클로징",
        financialImpact: "거래 클로징, 주당 $55 현금 지급",
        weapon: "Golden Share Innovation (NSA 봉합 구조)",
      },
    ],
    financialWeapons: [
      {
        name: "현금+주식 적대적 제안",
        side: "defense",
        usedBy: "Cleveland-Cliffs",
        description: "주당 $35(현금 $17.50 + Cliffs 주식 1.023주) 적대적 제안. USW 사전 지지 + 반독점 우려로 인수자 입장에서 실행 가능성 낮음",
        effectiveness: "blocked",
      },
      {
        name: "Cash-Premium Lock-in",
        side: "attack",
        usedBy: "Nippon Steel",
        description: "Cleveland-Cliffs 대비 +57% 프리미엄, 종가 대비 +40%의 사상 최고가 전액 현금 제안. 경쟁사가 자금조달로 따라올 수 없는 가격대",
        effectiveness: "decisive",
      },
      {
        name: "노조 단체협약 + 정치 약속",
        side: "defense",
        usedBy: "USW + 양당 대선 후보",
        description: "USW의 단체협약 카드와 양당 대선 후보의 사전 반대 약속이 결합돼 거래의 정치 비용을 극단까지 끌어올림",
        effectiveness: "effective",
      },
      {
        name: "CFIUS Block (대통령 행정명령)",
        side: "defense",
        usedBy: "Biden 행정부",
        description: "임기 종료 17일 전 거래 금지 행정명령 서명. 우방국 인수 차단의 사상 첫 사례. 단기적으로는 거래 차단에 성공",
        effectiveness: "effective",
      },
      {
        name: "Litigation",
        side: "attack",
        usedBy: "Nippon Steel + US Steel",
        description: "Biden 행정명령에 대한 연방법원 소송으로 정치 영역에서 사법 영역으로 분쟁 영역 확장. 거래 종결까지 직접 판결 없이 트럼프 행정부 재협상의 지렛대로 작용",
        effectiveness: "effective",
      },
      {
        name: "CFIUS de novo Review",
        side: "neutral",
        usedBy: "Trump 행정부",
        description: "Biden의 차단을 직접 뒤집지 않고 [신규 45일 재심사]를 통해 절차적으로 우회. 새 안보 권고안 + NSA 조건으로 합의 도출",
        effectiveness: "effective",
      },
      {
        name: "Golden Share Innovation (NSA 봉합)",
        side: "neutral",
        usedBy: "Trump 행정부",
        description: "기존 CFIUS 완화 조치(보안 이사 전용 보드)와 달리 [지분 수준의 거부권]을 미국 정부에 부여. 인수는 진행되되 국가안보 카드는 영구적으로 미국 정부 손에. 우방국 FDI의 새 모델",
        effectiveness: "decisive",
      },
      {
        name: "Investment Commitment",
        side: "attack",
        usedBy: "Nippon Steel",
        description: "약 $110억 신규 투자(2028년 말까지) + 총 $140억+ 다년 자본 계획. Mon Valley·Gary Works·Big River Steel 등 미국 자산 자본 지출 약정으로 정치적 명분 확보",
        effectiveness: "effective",
      },
    ],
    turningPoint: {
      date: "2025-06-13",
      event: "Trump 대통령의 NSA 조건부 승인 행정명령 서명",
      detail:
        "Biden이 차단한 거래를 Trump 행정부가 [전면 승인] 또는 [전면 폐기]가 아닌 [황금주를 매개로 한 봉합]이라는 제3의 길로 풀어냈다. 미국 정부가 인수 후 회사에 [지분 수준의 거부권]을 영구 보유하는 첫 사례를 만들었고, 이는 우방국 FDI의 새 표준 구조가 될 가능성을 가진 혁신적 봉합. 신일본제철은 인수를 얻었고, 미국 정부는 안보 카드를 영구 손에 쥐었으며, USW는 단체협약 + 신규 투자 약정을 확보했다.",
    },
    verdict: {
      winner: "draw",
      winnerLabel: "표면적 승자는 신일본제철·US Steel, 실질적 승자는 미국 정부",
      margin: "황금주 + $110억 투자 약정 + 미국 시민 CEO·이사회 다수 + 본사 유지",
      note:
        "신일본제철은 18개월 정치 전쟁 끝에 인수를 얻었지만, 운영 자율성의 핵심 영역(공장 폐쇄·생산 감축·이전·이름 변경·핵심 인사)에 대한 거부권을 미국 정부에 영구 양도. 미국 정부는 외국인 인수 통제권을 사상 처음으로 지분 수준에 새겼고, USW는 단체협약 + 신규 투자 약정을 가지고 갔다. 단일 승자는 없는 [draw], 다만 [Golden Share]라는 새 도구가 본 거래에서 탄생했다.",
    },
    priceImpact: {
      preContest: "약 $22 (2023.07.28 Cliffs 제안 직전)",
      peak: "약 $55 (2023.12.18 신일본제철 합의 직후 inci 가격)",
      postContest: "$55 현금 지급 (2025.06.18 클로징, 상장폐지)",
      note: "Cliffs 제안 직전 $22 → 신일본제철 합의 후 $55 → 바이든 차단 후 $30대 급락 → 트럼프 NSA 합의 후 다시 $55 회복 → 클로징으로 상장폐지",
    },
  },

  dealStructure: {
    body: "본 거래는 [신주 합병(reverse triangular merger)] 구조로, 신일본제철의 미국 자회사가 US Steel과 합병하면서 US Steel 주주들에게 주당 $55 현금을 지급하고 US Steel은 NSC 100% 자회사로 존속하는 구조. 합의 시점 기준 자기자본 약 $149억(시가총액), 부채 차감 후 현금 지급 기준 약 $141억. 본 거래의 핵심 차별점은 [클로징 자체보다 클로징 조건]이다. 2025년 6월 13일 트럼프 대통령 행정명령으로 [국가안보합의(NSA, National Security Agreement)] 체결이 거래 승인의 조건이 됐고, NSA의 핵심은 미국 정부가 [황금주(Golden Share)]를 통해 US Steel의 주요 의사결정에 영구 거부권을 보유하는 것. 신일본제철은 거래 종결 후에도 US Steel의 운영 자율성을 미국 정부와 공유하게 된다.",
    preOwnership: {
      nodes: [
        { id: "x_public",  label: "US Steel 일반 주주",      sub: "100% 상장 자유유통",          type: "public" },
        { id: "uss_pre",   label: "United States Steel",    sub: "NYSE: X · Pittsburgh 본사",   type: "target" },
      ],
      edges: [
        { from: "x_public", to: "uss_pre", label: "100% (상장사)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "nsc",        label: "Nippon Steel Corporation", sub: "지분 100%, 도쿄증권 5401",    type: "acquirer" },
        { id: "usgov",      label: "미국 정부",                 sub: "Golden Share (의결권 + 거부권)", type: "entity" },
        { id: "uss_post",   label: "United States Steel",      sub: "NSC 100% 자회사, 상장폐지",  type: "target" },
        { id: "usw",        label: "USW (전미철강노조)",         sub: "단체협약 승계 + 신규 투자 약정", type: "entity" },
      ],
      edges: [
        { from: "nsc",     to: "uss_post", label: "100% 보통주" },
        { from: "usgov",   to: "uss_post", label: "Golden Share (지분 외 거부권)" },
        { from: "usw",     to: "uss_post", label: "단체협약 · 투자 약정 모니터링" },
      ],
    },
    keyTerms: [
      { label: "거래 형식",            value: "신주 합병 (reverse triangular merger, 전액 현금)",                  accent: true },
      { label: "주당 인수가",          value: "$55.00 전액 현금",                                              accent: true },
      { label: "자기자본 거래 규모",     value: "약 $14.9B",                                                    accent: true },
      { label: "현금 지급 거래 규모",     value: "약 $14.1B (부채 차감 후)",                                       accent: true },
      { label: "발표 직전 종가 프리미엄", value: "약 +40% (2023.12.15 종가 약 $39 대비)" },
      { label: "Cleveland-Cliffs 제안 대비", value: "+57% ($35 대비 +$20)" },
      { label: "합의일",              value: "2023년 12월 18일" },
      { label: "Biden 차단일",        value: "2025년 1월 3일 (행정명령)" },
      { label: "Trump 승인 행정명령일",   value: "2025년 6월 13일" },
      { label: "클로징",             value: "2025년 6월 18일",                                              accent: true },
      { label: "미국 정부 Golden Share",  value: "보유 (NSA 명문화)",                                          accent: true },
      { label: "이사 지명권 (미국 대통령)", value: "이사 3명 중 1명 지명" },
      { label: "거부권 항목",          value: "공장 폐쇄·생산 감축·HQ 이전·이름 변경·핵심 인사 변경 등",            accent: true },
      { label: "투자 약정",            value: "약 $110억 (2028년 말까지) + 총 $140억+ 다년 계획",                accent: true },
      { label: "본사",               value: "Pittsburgh, PA 유지 (NSA 명문화)" },
      { label: "이사회 / CEO",         value: "이사회 다수 미국 시민 + CEO 미국 시민" },
    ],
  },

  advisors: {
    body: "본 거래는 단일 사상 최대 규모의 외국인 인수 + CFIUS 분쟁 + 정치 전쟁 + 사법 소송 + 신규 NSA 협상이 결합된 복합 자문 거래였다. 양사 모두 재무·법무 자문 라인업을 2단계로 구성했다, [클로징 자문] + [CFIUS·소송·NSA 자문]. 신일본제철 측은 Citi가 재무 자문 주관, Ropes & Gray·Milbank가 법무 자문 분담. US Steel 측은 Barclays·Goldman Sachs·Evercore 3사 재무 자문, Wachtell Lipton·Milbank·Covington이 법무 자문 분담.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Nippon Steel (인수자)",
        initials: "NSC",
        bg: "bg-red-700",
        advisors: [
          { firm: "Citigroup Global Markets",   role: "재무 자문 (단독 주관)",     roleType: "financial", note: "전액 현금 인수 자문 + 인수금융 구조 + 가격 결정" },
          { firm: "Ropes & Gray LLP",           role: "법무 자문 (M&A 주관)",      roleType: "legal",     note: "합병 계약 + CFIUS 절차 주관 + Biden 행정명령 소송 핵심" },
          { firm: "Milbank LLP",                role: "법무 자문 (도쿄·금융규제)",  roleType: "legal",     note: "일본 측 자본·외환 규제 + 신디케이트 자문" },
          { firm: "PJT Partners",               role: "전략 자문",               roleType: "financial", note: "CFIUS 협상 + NSA 구조 설계 자문" },
          { firm: "Akin Gump Strauss Hauer & Feld", role: "정책·정치 자문",       roleType: "other",     note: "워싱턴 정책·CFIUS 로비·정치적 이해관계자 매핑" },
        ],
      },
      {
        side: "target",
        sideLabel: "US Steel (피인수자)",
        initials: "X",
        bg: "bg-blue-800",
        advisors: [
          { firm: "Barclays Capital",            role: "재무 자문",                roleType: "financial", note: "공동 재무 자문" },
          { firm: "Goldman Sachs & Co. LLC",     role: "재무 자문",                roleType: "financial", note: "공동 재무 자문, 페어니스 오피니언 제공" },
          { firm: "Evercore",                    role: "재무 자문",                roleType: "financial", note: "공동 재무 자문, CFIUS 절차 자문" },
          { firm: "Wachtell, Lipton, Rosen & Katz", role: "법무 자문 (M&A 주관)",  roleType: "legal",     note: "이사회 자문 + 합병 계약 + 거버넌스 자문" },
          { firm: "Milbank LLP",                 role: "법무 자문",                roleType: "legal",     note: "Cleveland-Cliffs 입찰 검토 + 신일본제철 협상 자문" },
          { firm: "Covington & Burling LLP",     role: "법무 자문 (CFIUS 주관)",   roleType: "legal",     note: "CFIUS 심사 대응 + NSA 협상 자문" },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 2025.06.18 양사 공식 보도자료(NSC 보도자료, US Steel 8-K) 및 The Global Legal Post 등 보도 기반.",
  },

  valuation: {
    body: "본 거래의 밸류에이션은 [철강 사이클 정점 + Cleveland-Cliffs 입찰 가격 + 그린 스틸 자산(Big River Steel) 프리미엄]을 동시에 반영한 결과다. FY2022 조정 EBITDA 약 $42억 기준 EV/EBITDA 약 3.4배, 일견 낮아 보이나 이는 철강 사이클 정점의 EBITDA 기준이고 정상 EBITDA(중기 평균 $20~25억) 기준으로는 약 6~7배 수준으로 더 합리적. Cleveland-Cliffs의 $35/주 제안가($73억)와 비교하면 신일본제철은 +$20/주 더 지불한 셈인데, 이는 ① Big River Steel 미니밀 자산의 그린 전환 가치, ② 미국 시장 직접 진입 옵션 가치, ③ 일본 본토 정체 수요 우회 가치를 추가로 매긴 결과.",
    rows: [
      { item: "주당 인수가",                   val: "$55.00",          note: "전액 현금, 2023.12.18 합의가",                accent: true },
      { item: "자기자본 거래 규모",                val: "약 $14.9B",        note: "주당 $55 × 약 2.71억주",                    accent: true },
      { item: "현금 지급 거래 규모",                val: "약 $14.1B",        note: "부채 차감 후 (Enterprise Value 대용)" },
      { item: "발표 직전 종가",                 val: "약 $39",           note: "2023.12.15 종가, 합의 발표 전일" },
      { item: "발표 직전 종가 대비 프리미엄",        val: "약 +40%",          note: "주당 $39 대비 $55" },
      { item: "Cleveland-Cliffs 제안가",         val: "$35",             note: "2023.07.28 제안, 현금 $17.50 + Cliffs 1.023주" },
      { item: "Cliffs 대비 프리미엄",            val: "+57%",            note: "+$20/주, 사상 최고가 락-인",                accent: true },
      { item: "FY2022 조정 EBITDA",            val: "약 $42억",         note: "철강 사이클 정점 기준" },
      { item: "EV/EBITDA (FY2022 기준)",         val: "약 3.4배",         note: "$14.1B ÷ $42억" },
      { item: "EV/EBITDA (중기 정상 기준)",       val: "약 6~7배",         note: "정상 EBITDA $20~25억 가정" },
      { item: "투자 약정 (Trump NSA)",          val: "약 $110억",        note: "2028년 말까지, 총 $140억+ 다년 계획",          accent: true },
    ],
    disclaimer: "주: 밸류에이션 멀티플은 발표 시점 공시 자료 + 10-K 기반 추정. NSA 투자 약정 금액은 행정명령 + NSC·USS 공식 보도자료 기반.",
  },

  rationale: {
    buyer: {
      title: "Nippon Steel, 왜 US Steel을 $55 전액 현금으로 인수했나",
      initials: "NSC",
      bg: "bg-red-700",
      points: [
        "[미국 시장 직접 진입] 일본 본토 철강 수요는 인구 감소·자동차 산업 둔화로 2010년대 이후 정체. 신일본제철의 글로벌 점유율 확대 전략은 직접 진입을 필요로 했고, 미국은 IRA·CHIPS법·EV·풍력 등 자본 지출 사이클 진입 중인 유일한 선진국 시장",
        "[Big River Steel 미니밀 자산] US Steel이 2021년 인수한 Big River Steel(아칸소)은 전기로 기반 미니밀로 그린 스틸 전환의 핵심 자산. 신일본제철의 그린 수소 환원철 기술 + Big River의 전기로 자산 결합 시나리오",
        "[Cleveland-Cliffs 봉쇄] $55 전액 현금으로 Cleveland-Cliffs의 적대적 인수 가능성을 봉쇄. Cliffs는 자금조달 + 반독점 우려로 따라올 수 없는 가격대",
        "[글로벌 4위에서 3위로] 합병 시 신일본제철의 조강 생산량은 약 8천6백만 톤(연결 기준), 중국 Baowu·룩셈부르크 ArcelorMittal에 이은 글로벌 3위급. 규모의 경제 + 협상력 강화",
        "[18개월 정치 전쟁 감수] Biden 차단·USW 반대·소송·NSA 협상까지 모든 비용을 감수하고 거래를 살린 이유는 위 4가지가 모두 사라지지 않는 [구조적 자산]이기 때문. 단기 평판 비용보다 장기 시장 위치가 더 가치 있다는 판단",
      ],
    },
    seller: {
      title: "US Steel, 왜 Cleveland-Cliffs가 아닌 Nippon Steel을 택했나",
      initials: "X",
      bg: "bg-blue-800",
      points: [
        "[가격, 단순하고 결정적] $55 전액 현금 vs Cleveland-Cliffs $35(현금+주식). 가격 차이만 +57%. 신탁의무(fiduciary duty)를 가진 이사회가 주주에게 다른 답을 줄 수 없는 격차",
        "[Cliffs의 자금조달·반독점 리스크] Cleveland-Cliffs 제안은 현금+주식 혼합이라 주주들이 Cliffs 주식 리스크를 떠안아야 했고, 통합제철 양사 합병의 반독점 우려는 거래 종결 자체를 불확실하게 만들었음. NSC는 전액 현금이라 양쪽 모두 해결",
        "[USW 단체협약 승계 + 신규 투자] NSC는 USW 단체협약 승계 + 미국 내 신규 투자 약정을 거래 조건에 포함. Pittsburgh 본사 유지 + 미국 시민 CEO·이사회 다수 약속. 노조 반대를 완전히 해소하지는 못했지만 협상 가능한 구조",
        "[연금·의료 부채 부담 해소] US Steel의 USW 단체협약 + 연금·의료 부채는 통합제철 사업의 구조적 부담. NSC의 자본력 + 글로벌 운영 노하우가 이 부담을 일본 본사로 분산시킬 수 있음",
        "[Big River Steel 그린 전환 자본] 미니밀 자산의 그린 전환에는 막대한 자본 지출이 필요한데, US Steel 단독으로는 자본조달 부담이 큼. NSC의 글로벌 자본 + 일본 정부 그린 전환 보조금 연계 가능성",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "거래 클로징 후 1년 시점 평가. 신일본제철은 표면적으로 인수를 완료했고, US Steel은 상장폐지된 후 NSC 100% 자회사로 편입됐다. NSA 황금주는 현재 [미국 정부 보유, 미사용] 상태이나 그 존재 자체가 NSC의 운영 자율성을 영구 제약. 약 $110억 투자 약정은 2026년 5월 시점 약 $20~30억 집행 단계로 보도되고 있으며, Mon Valley·Gary Works·Big River Steel 자본 지출이 진행 중. USW와의 단체협약은 승계 + 신규 투자 약정 모니터링 권한 확보. Cleveland-Cliffs는 본 거래의 패배자로 남았고, CEO Lourenco Goncalves는 [\"부활하지 않을 거래\"]라며 입장을 정리. 시장에서는 본 거래의 [Golden Share] 모델이 향후 우방국 FDI의 새 표준 구조가 될 가능성을 두고 논쟁이 진행 중.",
    overallVerdict: "표면 승자는 신일본제철·US Steel 주주, 실질 승자는 [지분적 거부권을 영구 확보한 미국 정부]. 우방국 FDI의 새 봉합 구조 탄생",
    positives: [
      "[Nippon Steel] 미국 시장 직접 진입 + Big River Steel 그린 자산 확보 + 글로벌 3위급 조강 생산 규모",
      "[US Steel 주주] 주당 $55 전액 현금 실현, Cleveland-Cliffs 제안 대비 +57% 가치 실현",
      "[미국 정부] 황금주 + 거부권으로 우방국 FDI 통제의 새 도구 확보. 향후 일본·한국·유럽 기업의 미국 인수에 표준 적용 가능성",
      "[USW] 단체협약 승계 + $110억 신규 투자 약정 + 모니터링 권한 확보",
      "[CFIUS 절차 진화] 기존 [보안 이사 보드·사업 분리]에서 [지분 수준 거부권]으로 완화 조치의 새 단계 진입",
    ],
    risks: [
      "[Nippon Steel 운영 자율성 영구 제약] 공장 폐쇄·생산 감축·이전·이름 변경·핵심 인사에 미국 정부 거부권. 시황 변화·구조조정·합리화 결정이 정치 영향에 영구 노출",
      "[Golden Share의 정치 무기화 위험] 향후 미국 정치 변동(예: 2028 대선) 시 황금주가 정치 압박 도구로 사용될 가능성. 신일본제철은 미국 정치 사이클의 인질이 될 위험",
      "[일본·아시아 기업의 미국 FDI 위축 가능성] 본 거래가 [우방국이라도 골든셰어 요구 받을 수 있다]는 시그널을 줘 향후 일본·한국·대만·유럽 기업의 미국 전략 자산 인수가 위축될 가능성",
      "[USW 단체협약 + 투자 약정 갈등] $110억 투자가 USW 기대치를 못 채울 경우 노조 갈등 재발 가능성. NSA가 단체협약 갈등의 모든 시나리오를 커버하지 못함",
      "[중국·러시아의 대응 모델 차용] 본 거래의 [지분 수준 거부권] 구조는 권위주의 국가들의 외국인 투자 통제 정당화에 차용될 위험. 글로벌 FDI 자유화 흐름의 반전 신호",
    ],
    editorNote:
      "이 거래의 진짜 의미는 [\"신일본제철이 US Steel을 인수했다\"]가 아니라 [\"미국 정부가 우방국 기업의 미국 상장사 인수에 지분 수준 거부권을 영구 보유하게 됐다\"]는 점이다. 1901년 J.P. 모건이 카네기 스틸을 합쳐 만든 미국 산업력의 상징이 일본 자본 하에 들어가는 대신, 미국 정부는 그 위에 [황금주]라는 영구 통제 장치를 새겼다. 이건 단일 거래의 결과가 아니라 [국가 자본주의 시대의 새 규칙]의 탄생. 향후 일본·한국·대만·유럽 기업이 미국 전략 자산을 인수하려 할 때 본 거래의 NSA·골든셰어 구조가 기본 옵션 메뉴에 올라갈 가능성이 크다., 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "NSC",
    acquirerBg: "bg-red-700",
    targetInitials: "X",
    targetBg: "bg-blue-800",
    acquirerName: "Nippon Steel Corporation",
    targetName: "United States Steel Corporation",
    dealTitle: "First-Ever US Government Golden Share, CFIUS Conditional Approval via NSA",
    dealSize: "$14.9B equity",
    dealSizeUSD: "$14.1B cash (post-debt)",
    evEbitda: "~3.4x FY2022 EBITDA (~6-7x normalized)",
    closeDate: "Jun 18, 2025",
  },

  sources: [
    { id: 1, text: "U.S. Steel Form 8-K, Final Closing Press Release with NSA Detail (2025.06.18)", url: "https://www.sec.gov/Archives/edgar/data/0001163302/000110465925062586/tm2518973d1_8k.htm" },
    { id: 2, text: "Nippon Steel Corporation Official Press Release, Finalized Historic Partnership (2025.06.18)", url: "https://www.nipponsteel.com/common/secure/en/news/20250618_100.pdf" },
    { id: 3, text: "White House Executive Order, Approval of Nippon Steel-US Steel Partnership (2025.06.13)", url: "https://www.sec.gov/Archives/edgar/data/0001163302/000116330225000003/a99p1potusorder.htm" },
    { id: 4, text: "Wikipedia, Acquisition of U.S. Steel by Nippon Steel (Comprehensive Timeline)", url: "https://en.wikipedia.org/wiki/Acquisition_of_U.S._Steel_by_Nippon_Steel" },
    { id: 5, text: "USALI (US-Asia Law Institute), Timeline of Nippon Steel Acquiring U.S. Steel", url: "https://usali.org/nippon-steel/timeline" },
    { id: 6, text: "CSIS, Understanding Trump's Decision to Approve the Nippon Steel Deal", url: "https://www.csis.org/analysis/understanding-trumps-decision-approve-nippon-steel-deal" },
    { id: 7, text: "Fortune, Trump Clears Path for Nippon Steel Investment in US Steel with NSA (2025.06.14)", url: "https://fortune.com/2025/06/14/trump-nippon-steel-investment-us-steel-national-security-agreement/" },
    { id: 8, text: "Council on Foreign Relations, The Nippon-US Steel Deal, A Golden Share, and Magic Beans", url: "https://www.cfr.org/articles/nippon-u-s-steel-deal-golden-share-and-magic-beans" },
    { id: 9, text: "Hunton AK, Nippon Steel Completes Acquisition of US Steel Under National Security Agreement", url: "https://www.hunton.com/insights/legal/nippon-steel-completes-acquisition-of-us-steel-under-national-security-agreement" },
    { id: 10, text: "Cleveland-Cliffs Form 8-K, Initial Hostile Proposal for U.S. Steel at $35/share (2023.08.13)", url: "https://www.sec.gov/Archives/edgar/data/0000764065/000076406523000133/a202308138-kex991.htm" },
    { id: 11, text: "The Global Legal Post, Ropes & Gray, Milbank and Wachtell lead on $14.9bn US Steel acquisition", url: "https://www.globallegalpost.com/news/ropes-gray-milbank-and-wachtell-lead-on-149bn-us-steel-acquisition-2110882062" },
    { id: 12, text: "Mining.com, Trump Secures Golden Share as Nippon Steel Completes US Steel Takeover", url: "https://www.mining.com/trump-secures-golden-share-as-nippon-steel-completes-us-steel-takeover/" },
  ],

  seo: {
    title: "Nippon Steel × US Steel $14.9B, CFIUS 골든셰어 조건부 승인 해부",
    description:
      "2023년 12월 신일본제철이 US Steel을 주당 $55, 자기자본 $14.9B에 인수 합의 → 2025년 1월 바이든 차단 → 6월 13일 트럼프 NSA 승인 → 6월 18일 클로징. 미국 정부 사상 첫 골든셰어 보유. 18개월 정치 전쟁의 봉합 구조와 우방국 FDI의 새 표준 모델 분석.",
    keywords: [
      "Nippon Steel US Steel",
      "신일본제철 US Steel 인수",
      "CFIUS 골든셰어",
      "Golden Share",
      "National Security Agreement",
      "NSA US Steel",
      "Cleveland-Cliffs US Steel",
      "Biden CFIUS 차단",
      "Trump NSA 행정명령",
      "USW US Steel",
      "외국인 인수 규제",
      "우방국 FDI",
      "Section 721 Defense Production Act",
    ],
  },

  concepts: [
    {
      term: "CFIUS (외국인투자심의위원회)",
      description: "Committee on Foreign Investment in the United States. 재무부 장관이 의장인 범부처 위원회로 외국 기업의 미국 자산 인수에 대한 국가안보 영향 심사. 1988년 Exon-Florio 수정안 + 2018년 FIRRMA법으로 권한 확대. 본 거래는 우방국 인수가 차단된 사상 첫 사례.",
    },
    {
      term: "Golden Share (황금주)",
      description: "통상의 보통주와 별개로 발행되는 특별주식으로, 보유자가 회사의 특정 핵심 의사결정에 대해 거부권을 행사할 수 있는 권리. 본 거래에서 미국 정부가 US Steel에 보유한 황금주는 공장 폐쇄·생산 감축·이전·이름 변경·핵심 인사 변경 등에 대한 영구 거부권을 부여. 우방국 FDI 통제의 새 도구.",
    },
    {
      term: "National Security Agreement (NSA)",
      description: "CFIUS 심사 결과 안보 우려가 확인된 거래에 대해, 거래 당사자와 미국 정부가 체결하는 완화 조치 합의. 통상은 보안 이사 전용 보드·사업 분리·정보 격리 등. 본 거래의 NSA는 황금주 + 투자 약정 + 거버넌스 조항을 모두 포함한 사상 최대 규모.",
    },
    {
      term: "Section 721 Defense Production Act",
      description: "1950년 국방생산법 제721조. CFIUS의 법적 권한 근거이자 미국 대통령에게 외국인 인수 차단 권한을 부여하는 조항. Biden은 본 조항으로 거래를 차단했고, Trump는 동일 조항의 절차적 우회로 거래를 재허가.",
    },
    {
      term: "Mitigation Agreement (완화 합의)",
      description: "CFIUS 심사에서 안보 우려가 확인됐을 때, 거래 차단 대신 채택되는 조치. NSA가 가장 강한 형태. 본 거래 이전 통상의 완화 조치는 보안 이사 전용 보드·정보 접근 제한 등 운영 영역에 국한됐고, 지분 수준 거부권은 신영역.",
    },
    {
      term: "USW (United Steelworkers, 전미철강노조)",
      description: "미국·캐나다 철강·광산·종이·고무 산업 노동자 약 85만 명을 대표하는 노조. 본 거래에서 외국 소유 반대 + Cleveland-Cliffs 사전 지지 + 단체협약 승계 요구로 거래 정치화의 핵심 변수. David McCall 위원장.",
    },
    {
      term: "Cleveland-Cliffs Failed Bid (Cliffs 패배한 입찰)",
      description: "2023년 7월 Cleveland-Cliffs가 US Steel에 주당 $35(현금 $17.50 + Cliffs 주식 1.023주, 총 $73억) 제안 → US Steel 이사회 [\"불합리\"] 판단으로 거부. 신일본제철의 $55 전액 현금에 밀려난 사례. USW가 사전 지지한 거래였기에 정치 변수에도 영향.",
    },
    {
      term: "Foreign Direct Investment (FDI) Screening",
      description: "외국 자본의 자국 전략 자산 인수에 대한 사전 심사 제도. 미국은 CFIUS, EU는 회원국별 + 2020년 EU FDI 규정, 일본은 외환법, 한국은 산업기술보호법. 본 거래는 [우방국 FDI라도 황금주를 요구할 수 있다]는 새 시그널을 줘 글로벌 FDI 자유화 흐름의 반전 신호로 해석되기도 함.",
    },
  ],

  faq: [
    {
      q: "신일본제철이 결국 얼마에 US Steel을 인수했나요?",
      a: "2023년 12월 18일 합의 기준 주당 $55 전액 현금, 자기자본 약 $14.9B(현금 지급 기준 $14.1B). 합의 가격은 2025년 6월 18일 클로징까지 변동 없이 유지됐습니다. Cleveland-Cliffs의 사전 제안가 $35(현금+주식 혼합) 대비 +57% 프리미엄, 발표 직전 종가 약 $39 대비 +40% 프리미엄. 사상 최고가 수준의 전액 현금 제안이었습니다.",
    },
    {
      q: "왜 바이든 대통령은 우방국(일본) 기업의 인수를 차단했나요?",
      a: "공식 사유는 [국가안보] 우려였지만 실질 동기는 정치적이었다는 게 시장 컨센서스입니다. 2024년 대선을 앞두고 펜실베이니아·인디애나·미네소타 등 핵심 경합주의 USW 노조 표심이 결정적이었고, 트럼프 후보도 동일하게 거래 반대를 약속한 상황. CFIUS 위원회 내부는 2024년 12월까지 합의에 실패했고, 결국 바이든이 임기 종료 17일 전인 2025년 1월 3일 단독 결정으로 차단. 이 결정은 우방국(일본) 기업의 미국 상장사 인수가 CFIUS 권한으로 차단된 첫 사례로 기록됐습니다.",
    },
    {
      q: "트럼프 대통령은 어떻게 바이든의 차단을 뒤집었나요?",
      a: "트럼프는 바이든의 행정명령을 직접 뒤집지 않고 [절차적 우회]를 택했습니다. 2025년 4월 7일 CFIUS에 [신규 45일 de novo 재심사]를 명령 → 위원회가 5월 21일 비공개 권고안 제출 → 6월 13일 [국가안보합의(NSA)] 체결을 조건으로 거래 승인 행정명령 서명 → 6월 18일 클로징. 핵심은 NSA에 명문화된 [황금주(Golden Share)] 조항, 미국 정부가 US Steel에 영구 거부권을 보유하는 첫 사례를 만든 봉합 구조.",
    },
    {
      q: "미국 정부의 골든셰어(Golden Share)는 구체적으로 어떤 권리인가요?",
      a: "NSA에 명문화된 미국 정부의 황금주는 ① 공장 폐쇄·생산 감축·이전, ② US Steel 이름 변경, ③ Pittsburgh 본사 이전, ④ 약속된 투자 지연·축소, ⑤ 핵심 인사(CEO 등) 변경, ⑥ 핵심 자산 매각·합리화 결정에 대한 거부권을 부여합니다. 또한 미국 대통령이 US Steel 이사 3명 중 1명을 직접 지명할 수 있는 권한, 이사회 다수 미국 시민 + CEO 미국 시민 요건이 포함됩니다. 이는 통상의 CFIUS 완화 조치(보안 이사 전용 보드)와 달리 [지분 수준의 거부권]이라는 점에서 사상 첫 사례.",
    },
    {
      q: "Cleveland-Cliffs는 왜 패배했나요?",
      a: "두 가지 이유. 첫째, [가격 격차]. Cleveland-Cliffs의 $35(현금 $17.50 + Cliffs 주식 1.023주) 제안 vs 신일본제철의 $55 전액 현금. US Steel 이사회가 신탁의무상 더 낮은 제안을 받아들일 수 없는 격차였습니다. 둘째, [거래 종결 리스크]. Cliffs는 통합제철 양사 합병이라 반독점 우려가 컸고, 현금+주식 혼합 구조라 주주들이 Cliffs 주식 리스크를 떠안아야 했습니다. 신일본제철은 전액 현금 + 통합제철 + 미니밀 보완이라 양쪽 모두 해결. Cliffs CEO Lourenco Goncalves는 거래 종결 후 [\"부활하지 않을 거래\"]라며 입장 정리.",
    },
    {
      q: "이 거래가 향후 일본·한국·유럽 기업의 미국 인수에 어떤 영향을 줄까요?",
      a: "두 가지 상반된 시그널을 동시에 줍니다. 긍정적으로는 [Trump 행정부가 우방국 거래를 살리는 봉합 구조를 만들었다], 즉 거래 자체는 불가능하지 않다는 점. 부정적으로는 [우방국이라도 골든셰어를 요구받을 수 있다], 즉 운영 자율성을 영구 양보해야 할 가능성. 일본 정부는 본 거래 NSA를 [모델]로 인정했으나 한국·대만·유럽 기업들은 [이런 거래는 안 한다]는 반응. 향후 일본 기업의 미국 반도체·제약·전력 인수, 한국·대만 기업의 미국 인수 시 NSA·골든셰어 옵션이 기본 검토 메뉴에 오를 가능성이 큽니다.",
    },
  ],
};

export default deal;
