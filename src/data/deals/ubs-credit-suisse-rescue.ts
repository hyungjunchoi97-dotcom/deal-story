/**
 * UBS × Credit Suisse 강제 구제 합병 (CHF 3.25B, 2023.03.19)
 * 스위스 정부 주말 협상 + $17B AT1 채권 전액 상각 선례
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "ubs-credit-suisse-rescue",
  title: "주말 72시간 — 스위스 정부는 어떻게 UBS에 크레디트스위스를 떠넘겼나",
  subtitle: "2023.03.19 강제 구제 합병 · CHF 32.5억 주식 인수 · AT1 채권 CHF 160억 전액 상각 · 167년 명문 IB의 소멸",
  category: "ma",
  industry: "Banking / Financial Services / Crisis",
  country: "스위스",
  announcedAt: "2023-03-19",
  closedAt: "2023-06-12",
  announcedDisplay: "2023년 3월 19일",
  closedDisplay: "2023년 6월 12일",
  readingMinutes: 13,
  tags: [
    "UBS",
    "Credit Suisse",
    "강제 합병",
    "스위스 금융위기",
    "AT1",
    "CoCo 채권",
    "FINMA",
    "스위스국립은행",
    "Too Big to Fail",
    "주말 협상",
  ],
  excerpt:
    "2023년 3월 19일 일요일 저녁, 스위스 정부가 주말 72시간 협상을 통해 UBS에 크레디트스위스를 CHF 32.5억(약 $35억)에 인수하도록 강제했다. 167년 역사의 명문 IB가 일주일 만에 사라진 사건. 더 충격적인 건 [AT1 후순위 채권 CHF 160억(약 $170억)을 주식보다 먼저 전액 상각]시킨 결정, 글로벌 AT1 시장 $2,500억의 가격 재책정과 ECB·BoE의 긴급 진화 성명을 촉발한 채권 우선순위 역전 선례.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "UBS", bg: "bg-red-600",   label: "UBS Group AG" },
  target:   { initials: "CS",  bg: "bg-slate-800", label: "Credit Suisse" },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "크레디트스위스(CS)는 1856년 설립된 스위스 2위 글로벌 IB로, 자산 규모 CHF 5,300억(2022년 말), 임직원 약 50,000명, 글로벌 자산관리 부문 AUM CHF 1.3조를 보유한 G-SIB(글로벌 시스템적으로 중요한 은행) 30개 명단의 핵심 멤버였다. 그러나 2021~2022년 잇따른 스캔들로 신뢰가 회복 불가능한 수준으로 무너졌다. [Archegos Capital 파산]으로 $55억 손실(2021.3), [Greensill Capital 공급망 금융 펀드 붕괴]로 LP들에게 $100억+ 손실(2021.3), 2014년부터 누적된 [모잠비크 참치 채권 사기] 벌금 $4.75억(2021), 2022년 [Mozambique 사건 추가 합의]와 동시 진행된 [페루·일본 富 고객 정보 유출(Suisse Secrets)] 등이 한 분기 단위로 터졌다.",
    "2022년 한 해에만 CS 순손실 CHF 73억, 자산관리 부문에서만 [순유출 CHF 1,230억]이 발생했다. 2022년 10월 [CS가 곧 파산한다]는 SNS 루머가 한 차례 돌면서 단기 자금조달 비용이 급등했고, 11월 사우디 국영은행(Saudi National Bank, SNB)이 CHF 15억을 신주 인수해 9.9% 최대주주가 됐다. 그러나 사우디 측은 [10% 미만 보유 원칙]을 명시했다, 추가 자본 투입은 사실상 봉쇄된 셈.",
    "2023.03.15 (수) 정오, 사우디 국영은행 회장 Ammar Al Khudairy가 블룸버그 TV에서 [\"우리는 절대 추가 자본을 투입하지 않을 것이다. 10%를 넘기면 규제 제약이 너무 많아진다\"]고 발언. CS 주가가 당일 24% 폭락(CHF 1.86)하며 사상 최저치를 기록했고, 5년 CDS 스프레드가 1,000bp를 넘어 사실상 디폴트 가격대에 진입했다. 같은 날 저녁 스위스국립은행(SNB)이 [최대 CHF 500억 긴급 유동성 공급]을 발표했지만, 다음 날 시장 반응은 [\"유동성으로 해결 안 되는 신뢰 위기\"]였다.",
    "[2023.03.17 (금) 저녁부터 03.19 (일) 저녁까지의 주말 72시간], 스위스 재무부·FINMA(스위스 금융시장감독청)·SNB·UBS·CS 5자 협상이 베른과 취리히에서 동시 진행됐다. UBS는 처음 [CHF 10억 인수]를 제시했고 CS는 [CHF 70억 이상]을 요구했다. 결국 일요일 저녁 [CHF 30억 주식 스왑 + 스위스 연방정부 손실보전 CHF 90억 + SNB 추가 유동성 CHF 1,000억 + AT1 채권 전액 상각]이라는 [전례 없는 패키지]로 봉합됐다. 스위스 정부는 [주주 투표 없이] 합병을 강행하기 위해 [주말 동안 비상입법]을 통과시켰다. 발표 당일 일요일 저녁 7시, 스위스 대통령 Alain Berset, 재무장관 Karin Keller-Sutter, FINMA 의장, SNB 총재가 동시 등단하며 [\"이것은 구제(bailout)가 아니라 상업적 합병(commercial solution)\"]이라 선언했다.",
    "거래는 2023.06.12 법적 클로징을 거쳐 통합 작업이 본격화됐다. UBS는 2023년 3분기에 [스위스 연방정부 손실보전 CHF 90억과 SNB 추가 유동성 CHF 1,000억을 조기 해지]했다. 시장 예상보다 훨씬 빠른 안정화. 통합 후 UBS는 자산 약 CHF 1.6조, 임직원 약 12만 명, 글로벌 자산관리 AUM 약 $5.7조의 [세계 최대급 부유층 자산관리사]로 재탄생했다. AT1 채권 보유자들(Pimco·Invesco·Lazard Asset Management 등)은 2024~2025년에 걸쳐 FINMA를 상대로 [수십 건의 소송]을 제기, 2026년 현재도 일부 재판이 진행 중이다.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "CHF 32.5억 (주식 CHF 30억 + 손실보전 CHF 90억 별도)",
    acquirerName: "UBS Group AG",
    targetName: "Credit Suisse Group AG",
    announcedDisplay: "2023년 3월 19일 (일)",
    closedDisplay: "2023년 6월 12일",
    country: "스위스",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "사우디 국영은행 회장의 [\"추가 자본 투입 불가\"] 발언(2023.03.15)이 도화선, CS 주가 단일일 -24%, CDS 스프레드 1,000bp 돌파. 신뢰 붕괴는 4일 만에 진행됐다.",
    "스위스 정부 주도 주말 72시간 강제 협상. UBS가 CS를 [CHF 30억 주식 스왑]으로 인수 (CS 1주당 UBS 1/22.48주, 총 약 CHF 32.5억 = 약 $35억).",
    "[AT1 채권 CHF 160억(약 $170억) 전액 상각] — 주식 가치(CHF 30억)는 살리면서 후순위 채권을 0으로 만든 [채권 우선순위 역전]. 글로벌 AT1 시장 최대 규모 상각 사례.",
    "[비상입법으로 주주 투표 면제] — 스위스 의회가 주말에 긴급 법안 통과, UBS·CS 양사 주주 모두 합병에 투표할 권리를 박탈당했다. 스위스 헌법사상 이례적 조치.",
    "[정부 안전망]: SNB 추가 유동성 CHF 1,000억(약 $1,090억) + 스위스 연방정부 손실보전 CHF 90억(약 $98억) + 발표 직전 SNB 긴급 유동성 CHF 500억.",
    "글로벌 파급: AT1 채권 시장 $2,500억 동시 폭락, 평균 가격 -10pt. ECB·BoE가 24시간 내 [\"우리 관할에서는 채권 우선순위가 정상 작동한다\"]는 긴급 성명으로 전염 진화.",
    "Post-deal: UBS는 2023.Q3에 정부 손실보전을 조기 해지(예상보다 6~12개월 빠름). 통합 후 자산관리 AUM $5.7조, 세계 최대급 부유층 자산관리사로 재탄생.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "2023년 3월 글로벌 은행 위기는 미국 지역은행 3곳(Silicon Valley Bank·Signature·First Republic)의 연쇄 파산에서 시작돼, 9일 만에 스위스 G-SIB로 전이됐다. 스위스 은행산업은 GDP 대비 자산 규모가 약 5배에 달하는 [over-banked] 구조로, CS 파산은 곧 스위스 국가 신용 위기로 직결될 수 있는 상황이었다. UBS·CS 두 G-SIB가 스위스 전체 은행자산의 약 60%를 차지했으며, 둘 다 글로벌 자산관리·IB·트레이딩에서 직접 경쟁하는 라이벌이었다.",
    metrics: [
      { label: "CS 자산 규모 (2022 말)",   value: "CHF 5,300억",   sub: "G-SIB 30개 중 하나" },
      { label: "CS 임직원",                 value: "약 50,000명",    sub: "50개국 운영" },
      { label: "CS 글로벌 자산관리 AUM",     value: "CHF 1.3조",      sub: "2022 말 기준" },
      { label: "스위스 은행자산 / GDP",       value: "약 5배",         sub: "UBS+CS 합산 시 약 3배" },
    ],
    subBody:
      "AT1(Additional Tier 1) 채권 시장은 글로벌 약 $2,500억 규모로, [발행사의 자본비율이 일정 수준 이하로 떨어지면 상각되거나 주식으로 전환]되는 [조건부 자본증권(CoCo)]이다. 2014년 EU 바젤III 도입 이후 유럽 은행들이 자본 규제 충족 수단으로 대거 발행했고, 평균 쿠폰 6~9%로 기관투자자(Pimco·Invesco·Lazard·BlackRock 등)에게 인기 자산이었다. 본 거래에서 [AT1 채권이 주식보다 먼저 상각된 것]은 시장 통념(주식 → AT1 → 일반 채권 순서)을 정면 위반한 것으로 평가됐다.",
    players: [
      { name: "UBS Group AG",                role: "강제 인수자, CHF 30억 주식 스왑으로 CS 100% 흡수" },
      { name: "Credit Suisse Group AG",      role: "피인수, 167년 역사의 스위스 2위 G-SIB" },
      { name: "스위스 연방정부 (Karin Keller-Sutter 재무장관)", role: "주말 비상입법·CHF 90억 손실보전 제공" },
      { name: "FINMA (스위스 금융시장감독청)",  role: "AT1 전액 상각 결정 주체, 후속 소송의 피고" },
      { name: "스위스국립은행 (SNB)",         role: "CHF 1,500억(긴급 500억 + 추가 1,000억) 유동성 제공" },
      { name: "사우디 국영은행 (SNB Group)",   role: "CS 최대주주(9.9%), 도화선이 된 \"추가 투자 없다\" 발언" },
      { name: "AT1 채권 보유자 (Pimco·Invesco·Lazard 등)", role: "CHF 160억 전액 상각 피해, 2024~25년 소송 제기" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Credit Suisse Group AG",
    body: "Credit Suisse는 1856년 Alfred Escher가 스위스 철도 건설 자금조달을 위해 설립한 167년 역사의 글로벌 IB다. 4대 사업부는 [① Wealth Management (글로벌 자산관리)], [② Investment Bank (IB·M&A·트레이딩)], [③ Swiss Bank (스위스 리테일·기업금융)], [④ Asset Management (자산운용)]. 2007년 피크 시 시가총액 CHF 1,000억+ 수준이었으나 2008 금융위기 후 회복하지 못한 채 2010년대 후반부터 [Archegos·Greensill·Mozambique] 등 연이은 스캔들로 무너졌다.",
    metrics: [
      { label: "설립연도",                    value: "1856년",        sub: "취리히, Alfred Escher 설립" },
      { label: "총자산 (2022 말)",             value: "CHF 5,300억",    sub: "FY2018 대비 -36%" },
      { label: "임직원",                       value: "약 50,000명",    sub: "50개국 운영" },
      { label: "자산관리 AUM",                 value: "CHF 1.3조",      sub: "글로벌 5위권" },
      { label: "FY2022 순손실",                value: "CHF 73억",       sub: "5년 연속 적자" },
      { label: "2022 자산관리 순유출",          value: "CHF 1,230억",    sub: "고객 신뢰 붕괴" },
      { label: "위기 직전 시가총액 (2023.03.10)", value: "약 CHF 80억",   sub: "2007 피크 대비 -92%" },
      { label: "최종 인수가",                  value: "CHF 30억 (주식)", sub: "직전 시총 대비 -60%" },
    ],
    financials: [
      { year: "FY2018", revenue: 20920, cogs: 12100, grossProfit: 8820, sga: 8050, operatingIncome: 770,    ebitda: 1500  },
      { year: "FY2019", revenue: 22480, cogs: 13050, grossProfit: 9430, sga: 8520, operatingIncome: 910,    ebitda: 1680  },
      { year: "FY2020", revenue: 22390, cogs: 13900, grossProfit: 8490, sga: 8350, operatingIncome: 140,    ebitda: 850   },
      { year: "FY2021", revenue: 22696, cogs: 16830, grossProfit: 5866, sga: 8740, operatingIncome: -2874,  ebitda: -2100 },
      { year: "FY2022", revenue: 14921, cogs: 15580, grossProfit: -659, sga: 7100, operatingIncome: -7759,  ebitda: -7000 },
    ],
    financialsNote: "단위: CHF 백만 (스위스프랑) | IFRS 연결 기준 | 출처: Credit Suisse Annual Reports FY2018~2022. FY2021은 Archegos 손실 $55억 + Greensill 충당금 반영. FY2022는 자산관리 순유출 CHF 1,230억 + 구조조정 비용 본격화로 사상 최대 적자.",
    financialsCurrency: "CHF",
    financialsUnit: "mn",
  },

  // ── 경영권 분쟁 오버뷰 (다자 협상 구조) ────────────────────────
  controlBattleOverview: {
    body: "본 거래는 통상적 M&A가 아니라 [스위스 정부·UBS·CS 이사회·AT1 채권자] 4자가 주말 72시간 동안 충돌한 [구제 합병형 경영권 분쟁]이다. CS 경영진은 [독립 유지 또는 정부 단독 구제]를 원했고, UBS는 [최대한 낮은 가격 + 정부 안전망]을 요구했으며, 스위스 정부는 [국가 신용 위기 회피 + 납세자 부담 최소화]를, AT1 채권자는 [정상 우선순위 보호]를 원했다. 결과는 정부·UBS 동맹의 결정적 승리, CS 독립 소멸, AT1 채권자 전액 손실.",
    catalyst:
      "2023.03.15 사우디 국영은행 회장이 [\"우리는 절대 추가 자본 투입하지 않는다\"]고 블룸버그 TV에서 발언, CS 주가 24% 폭락 + CDS 1,000bp 돌파로 [4일 안에 파산이 확실시되는 상황] 진입.",
    attackerLabel: "UBS + 스위스 정부 (FINMA·SNB·재무부)",
    defenderLabel: "Credit Suisse 독립 (소멸)",
    battleMoves: [
      {
        date: "2023-03-15",
        actor: "사우디 국영은행 (Ammar Al Khudairy 회장)",
        side: "neutral",
        move: "블룸버그 TV에서 [\"추가 자본 투입 없다\"] 발언",
        detail: "CS 최대주주(9.9%)가 공개적으로 추가 지원 거부, 시장은 [\"마지막 안전망 소멸\"]로 해석.",
        financialImpact: "CS 주가 -24% (CHF 1.86), CDS 1,000bp 돌파",
        weapon: "공개 발언 (신뢰 붕괴)",
      },
      {
        date: "2023-03-15",
        actor: "스위스국립은행 (SNB)",
        side: "defense",
        move: "긴급 유동성 CHF 500억 발표",
        detail: "당일 저녁 SNB가 CS에 최대 CHF 500억 유동성 라인 제공 선언, 그러나 시장 반응은 [\"유동성이 아닌 신뢰 문제\"]로 부정적.",
        financialImpact: "다음 날 CS 주가 추가 -8%",
        weapon: "중앙은행 유동성 창구",
      },
      {
        date: "2023-03-17",
        actor: "스위스 재무부 + FINMA",
        side: "attack",
        move: "UBS·CS 비밀 협상 강제 개시 (금요일 저녁)",
        detail: "재무장관 Karin Keller-Sutter가 UBS CEO Ralph Hamers와 CS CEO Ulrich Körner를 베른으로 동시 호출, [\"주말 내 합의 아니면 월요일 파산\"] 통보.",
        weapon: "정부 압박 + 시한 통보",
      },
      {
        date: "2023-03-18",
        actor: "UBS 이사회 (Colm Kelleher 회장)",
        side: "attack",
        move: "초기 인수가 CHF 10억 제시 + 정부 보증 요구",
        detail: "UBS는 [CS 본사 빌딩 가치만 CHF 30억]이라 주장하며 헐값 인수 + 손실보전 CHF 100억 이상 요구. CS는 [CHF 70억 이상]을 역제시. 협상 토요일 새벽까지 결렬 위기.",
        financialImpact: "협상가 갭 CHF 60억",
        weapon: "구매자 우위 가격 협상 + 정부 백스톱 요구",
      },
      {
        date: "2023-03-19",
        actor: "스위스 의회 (긴급 비상입법)",
        side: "attack",
        move: "주주 투표 면제 비상법령 통과",
        detail: "[일요일 오전] 스위스 의회·연방평의회가 긴급 회의로 [합병 시 양사 주주 투표권 면제] 비상법령 통과. 헌법사상 이례적 조치로, UBS·CS 주주 모두 합병에 반대할 권리를 박탈당함.",
        weapon: "비상입법 (Notrecht) — 주주 우회",
      },
      {
        date: "2023-03-19",
        actor: "FINMA",
        side: "attack",
        move: "AT1 채권 CHF 160억 전액 상각 결정",
        detail: "[일요일 저녁] FINMA가 [CS의 AT1(Additional Tier 1) 채권 전량을 0으로 상각]한다고 발표. 주식(CHF 30억)은 살아남는데 후순위 채권만 전액 상각된 [채권 우선순위 역전]. UBS·정부에게는 협상 균형추, 채권자에게는 충격.",
        financialImpact: "AT1 보유자 CHF 160억 ($170억) 전액 손실, 글로벌 AT1 시장 -10pt 동반 폭락",
        weapon: "AT1 트리거 발동 (FINMA 재량)",
      },
    ],
    financialWeapons: [
      {
        name: "SNB 유동성 라인 (CHF 1,500억)",
        side: "defense",
        usedBy: "스위스국립은행",
        description: "CS에 긴급 CHF 500억 + 합병 후 추가 CHF 1,000억 유동성 라인 제공, 단기 자금 위기 봉합. 그러나 신뢰 위기 본질을 해결하지 못함.",
        effectiveness: "effective",
      },
      {
        name: "비상입법 (Notrecht) — 주주 투표 면제",
        side: "attack",
        usedBy: "스위스 의회 + 연방평의회",
        description: "주말 동안 긴급 법령 통과시켜 UBS·CS 양사 주주의 합병 투표권을 박탈, 거래 종결 시점 리스크를 0으로 만듦. 스위스 헌법사상 매우 이례적.",
        effectiveness: "decisive",
      },
      {
        name: "AT1 채권 전액 상각 (CHF 160억)",
        side: "attack",
        usedBy: "FINMA",
        description: "주식보다 후순위인 AT1 채권을 주식(CHF 30억)보다 먼저 전액 0으로 상각, 자본 구조에서 CHF 160억을 즉시 흡수. UBS·정부에게는 협상 균형추, 채권자에게는 [우선순위 역전] 충격.",
        effectiveness: "decisive",
      },
      {
        name: "주식 스왑 (Stock-only) 대가 구조",
        side: "attack",
        usedBy: "UBS",
        description: "현금 1프랑도 지불하지 않은 [순수 주식 스왑]. CS 1주당 UBS 1/22.48주, UBS 자기 주식만으로 인수 완성, 자본 유출 최소화.",
        effectiveness: "effective",
      },
      {
        name: "정부 손실보전 (CHF 90억)",
        side: "attack",
        usedBy: "스위스 연방정부",
        description: "UBS가 CS의 비핵심 자산을 정리하다가 발생하는 손실 중 처음 CHF 50억은 UBS, 그 다음 CHF 90억은 연방정부, 그 위는 다시 UBS가 부담하는 [샌드위치 구조] 손실보전.",
        effectiveness: "effective",
      },
      {
        name: "공개 발언 (사우디 SNB 회장)",
        side: "neutral",
        usedBy: "Saudi National Bank",
        description: "최대주주의 [\"추가 투자 없다\"] 발언이 결정적 도화선. 자본 구조의 마지막 안전망 소멸 시그널로 시장이 해석, 4일 안에 파산 가시화.",
        effectiveness: "backfired",
      },
    ],
    turningPoint: {
      date: "2023-03-19 (일) 저녁",
      event: "FINMA의 AT1 전액 상각 결정 + UBS 인수가 CHF 30억 수락",
      detail:
        "AT1 채권 CHF 160억을 0으로 만들면서 [UBS의 인수 부담을 줄이고 + CS 자본 구조의 손실 흡수력을 즉시 확보]한 결정. 이 결정으로 UBS는 CHF 30억 주식 스왑에 동의했고, 일요일 저녁 7시 스위스 대통령·재무장관·FINMA·SNB가 동시 발표했다. CS 독립 종료, 167년 역사 소멸.",
    },
    verdict: {
      winner: "attack",
      winnerLabel: "UBS + 스위스 정부",
      margin: "압도적 승리",
      note:
        "UBS는 [현금 1프랑 없는 주식 스왑]으로 G-SIB 라이벌을 흡수, 자산관리 AUM $5.7조의 세계 최대급 부유층 자산관리사로 재탄생. 스위스 정부는 [납세자 직접 부담 최소화 + 국가 신용 위기 회피]에 성공. CS 주주는 1주당 CHF 0.76(시총 CHF 30억)을 받았고, AT1 채권자는 CHF 160억 전액 손실.",
    },
    priceImpact: {
      preContest: "CHF 2.45 (2023.03.10 종가)",
      peak: "CHF 1.86 (2023.03.15, 사우디 발언 직후)",
      postContest: "CHF 0.76 (2023.03.20 합병 발표 후)",
      note:
        "위기 직전 시가총액 약 CHF 80억 → 최종 인수가 CHF 30억(60% 할인). AT1 채권은 CHF 160억에서 0으로 즉시 상각. 발표 당일 UBS 주가는 -7% 출발했으나 그 주에 +5% 회복.",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body: "본 거래는 [① UBS의 CHF 30억 순수 주식 스왑 + ② AT1 채권 CHF 160억 전액 상각 + ③ SNB 추가 유동성 CHF 1,000억 + ④ 스위스 연방정부 손실보전 CHF 90억 + ⑤ 주주 투표 면제 비상입법]의 5중 패키지로 구성됐다. UBS는 현금을 한 푼도 쓰지 않았다. CS 주주는 1주당 UBS 1/22.48주를 받았고(약 CHF 0.76 상당), AT1 채권자는 전액 손실, SNB·연방정부가 안전망 제공.",
    preOwnership: {
      nodes: [
        { id: "saudi_pre", label: "Saudi National Bank",   sub: "약 9.9% (최대주주)", type: "entity" },
        { id: "qia_pre",   label: "Qatar Investment Authority", sub: "약 5%",       type: "entity" },
        { id: "olayan",    label: "Olayan Group",          sub: "약 3%",            type: "entity" },
        { id: "free_pre",  label: "기타 자유유통",            sub: "약 82.1%",         type: "public" },
        { id: "cs_pre",    label: "Credit Suisse",         sub: "독립 G-SIB",        type: "target" },
        { id: "at1_pre",   label: "AT1 채권 (CHF 160억)",   sub: "Pimco·Invesco·Lazard 등", type: "fund" },
      ],
      edges: [
        { from: "saudi_pre", to: "cs_pre", label: "9.9%" },
        { from: "qia_pre",   to: "cs_pre", label: "5%" },
        { from: "olayan",    to: "cs_pre", label: "3%" },
        { from: "free_pre",  to: "cs_pre", label: "82.1%" },
        { from: "at1_pre",   to: "cs_pre", label: "후순위 채권 CHF 160억" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "ubs",        label: "UBS Group AG",       sub: "통합 후 자산 CHF 1.6조",   type: "acquirer" },
        { id: "cs_post",    label: "Credit Suisse",      sub: "UBS 100% 자회사로 편입",   type: "target" },
        { id: "at1_post",   label: "AT1 채권자",          sub: "CHF 160억 전액 상각 (0)", type: "fund" },
        { id: "snb_post",   label: "스위스국립은행 (SNB)", sub: "추가 유동성 CHF 1,000억", type: "fund" },
        { id: "gov_post",   label: "스위스 연방정부",       sub: "손실보전 CHF 90억",      type: "fund" },
      ],
      edges: [
        { from: "ubs",      to: "cs_post",  label: "CHF 30억 주식 스왑 (1:22.48)" },
        { from: "at1_post", to: "cs_post",  label: "전액 상각 (CHF 160억 → 0)" },
        { from: "snb_post", to: "ubs",      label: "유동성 라인 CHF 1,000억" },
        { from: "gov_post", to: "ubs",      label: "손실보전 CHF 90억" },
      ],
    },
    keyTerms: [
      { label: "최종 인수가",          value: "CHF 32.5억 (약 $35억)", accent: true },
      { label: "대가 형태",            value: "100% 주식 스왑 (현금 없음)", accent: true },
      { label: "교환비율",             value: "CS 1주당 UBS 1/22.48주" },
      { label: "AT1 채권 처리",        value: "CHF 160억 전액 상각 (0)", accent: true },
      { label: "주주 투표",            value: "비상입법으로 면제" },
      { label: "SNB 긴급 유동성",      value: "CHF 500억 (3.15) + 추가 CHF 1,000억 (3.19)" },
      { label: "정부 손실보전",        value: "CHF 90억 (UBS 첫 CHF 50억 후 적용)" },
      { label: "발표일",               value: "2023.03.19 (일) 저녁 7시" },
      { label: "법적 클로징",          value: "2023.06.12" },
      { label: "통합 후 자산",         value: "약 CHF 1.6조" },
      { label: "통합 후 자산관리 AUM",  value: "약 $5.7조 (세계 최대급)" },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body: "본 거래는 주말 72시간 안에 종결된 위기 거래로, 전통적 M&A 자문 프로세스가 압축됐다. 정부·중앙은행·규제당국이 사실상 [딜 브로커 + 강제 협상 중재자] 역할을 했고, 양 측 자문단은 각자의 입장 방어와 가격 협상에 집중했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "UBS Group AG",
        initials: "UBS",
        bg: "bg-red-600",
        advisors: [
          {
            firm: "Morgan Stanley",
            role: "재무 자문 (Lead)",
            roleType: "financial",
            note: "UBS의 메인 재무 자문, 인수가 협상·가치평가·정부 손실보전 구조 설계 주도.",
          },
          {
            firm: "JP Morgan",
            role: "재무 자문 (Co-lead)",
            roleType: "financial",
            note: "Morgan Stanley와 공동으로 자문, IB 비핵심 자산 정리 시나리오·법적 책임 평가 담당.",
          },
          {
            firm: "Sullivan & Cromwell",
            role: "법무 자문 (미국·국제)",
            roleType: "legal",
            note: "미국·국제 규제 측면 법무 자문, 미국 내 SEC·DOJ·연준 협의 담당. 위기 인수 분야 최강 로펌.",
          },
          {
            firm: "Homburger",
            role: "법무 자문 (스위스)",
            roleType: "legal",
            note: "스위스 내 법무 자문, FINMA·SNB·재무부와의 협상 및 비상입법 적용 검토 주도.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Credit Suisse Group AG",
        initials: "CS",
        bg: "bg-slate-800",
        advisors: [
          {
            firm: "Centerview Partners",
            role: "재무 자문 (Lead)",
            roleType: "financial",
            note: "CS의 메인 재무 자문, 위기 거래·구제 합병 전문. CHF 70억+ 가격 요구 협상 주도했으나 정부 압박으로 CHF 30억에 합의.",
          },
          {
            firm: "Rothschild & Co",
            role: "재무 자문 (Co-lead)",
            roleType: "financial",
            note: "Centerview와 공동 자문, 유럽 위기 거래 풍부한 경험.",
          },
          {
            firm: "Cravath, Swaine & Moore",
            role: "법무 자문 (미국·국제)",
            roleType: "legal",
            note: "미국·국제 법무 자문, AT1 채권 처리·미국 주주 소송 리스크 평가.",
          },
          {
            firm: "Lenz & Staehelin",
            role: "법무 자문 (스위스)",
            roleType: "legal",
            note: "스위스 내 법무 자문, 이사회 선관의무·비상입법 적용 검토.",
          },
        ],
      },
    ],
    disclaimer:
      "주: 자문사 정보는 공개 자료(SEC 8-K, FINMA 발표, 언론 보도) 기반. 스위스 연방정부·FINMA·SNB는 별도 자문단 없이 내부 인력만 동원. 주말 긴급 거래 특성상 일부 자문 계약은 사후 공식화됐습니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "본 거래는 정상적 밸류에이션 프레임이 작동하지 않는다. CS의 장부가치(자기자본)는 2022년 말 기준 CHF 450억 안팎이었으나, 시장이 매긴 가격은 그 7% 수준인 CHF 30억이었다. 인수가 협상의 진짜 기준은 [\"파산 시 0\" 대비 얼마나 위에서 합의하느냐]였다. UBS가 CHF 10억을 제시한 것도, CS가 CHF 70억을 요구한 것도, 모두 [정부 압박 강도 협상]이었다.",
    rows: [
      { item: "CS 장부가치 (FY2022 자기자본)",  val: "약 CHF 450억",   note: "자산 - 부채" },
      { item: "위기 직전 시가총액 (2023.03.10)",  val: "약 CHF 80억",   note: "이미 사상 최저권" },
      { item: "사우디 발언 직후 시총 (3.15)",     val: "약 CHF 60억",   note: "단일일 -24%" },
      { item: "UBS 초기 제시가",                val: "CHF 10억",      note: "정부에 백스톱 요구하며 압박", accent: true },
      { item: "CS 역제시가",                    val: "CHF 70억+",     note: "장부가치 16% 수준 요구" },
      { item: "최종 합의가",                    val: "CHF 32.5억",    note: "주식 스왑, 1:22.48",        accent: true },
      { item: "위기 직전 시총 대비 할인",        val: "약 -60%",       note: "CHF 80억 → 30억" },
      { item: "AT1 채권 상각 규모",             val: "CHF 160억",     note: "주식보다 5배 큰 손실 흡수", accent: true },
      { item: "정부 안전망 (손실보전 + 유동성)",  val: "CHF 1,090억",   note: "CHF 90억 + 1,000억"      },
      { item: "통합 후 UBS 자산관리 AUM",       val: "약 $5.7조",     note: "세계 최대급" },
    ],
    disclaimer:
      "주: CS 장부가치는 FY2022 IFRS 자기자본 기준. UBS 인수가는 발표일 UBS 종가 기준 환산. 정부 안전망은 발표 당시 약정 한도이며, 2023.Q3 UBS가 조기 해지하면서 실제 사용액은 일부에 그쳤다.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "UBS는 왜 인수했나",
      initials: "UBS",
      bg: "bg-red-600",
      points: [
        "[정부 압박과 시스템 리스크 책임] 스위스 재무장관 Karin Keller-Sutter가 UBS 이사회에 [\"월요일까지 합의 없으면 CS 파산, 스위스 국가 신용 위기\"]라고 통보. UBS는 G-SIB 책임을 회피할 수 없었음.",
        "[현금 1프랑 없는 주식 스왑] UBS는 CHF 30억 자기 주식만으로 자산 CHF 5,300억의 G-SIB를 흡수, 자본 효율성 극대화.",
        "[정부 안전망 패키지] 손실보전 CHF 90억 + SNB 유동성 CHF 1,000억으로 비핵심 자산 정리 리스크 흡수, [헤지된 인수].",
        "[글로벌 자산관리 1위 도약] 통합 후 자산관리 AUM 약 $5.7조, Morgan Stanley·BoA Merrill Lynch를 제친 세계 최대급 부유층 자산관리사 등극.",
        "[경쟁사 영구 제거] 스위스 IB·자산관리·트레이딩에서 직접 경쟁 라이벌 CS의 영구 소멸, 스위스 내 시장 지배력 절대화.",
      ],
    },
    seller: {
      title: "CS 경영진은 왜 받아들였나",
      initials: "CS",
      bg: "bg-slate-800",
      points: [
        "[유일한 대안이 파산] 2023.03.20 (월) 시장 개장 시 자금조달 불능, CDS 1,000bp 돌파로 정상 영업 사실상 종료. 파산 시 주주 가치 0.",
        "[정부의 비상입법으로 협상력 박탈] 스위스 의회가 주말 비상법령으로 [주주 투표 면제]를 통과시키면서, CS 이사회의 [\"주주에게 더 좋은 거래 못 받았다\"]는 변명 여지마저 차단.",
        "[다른 인수자 부재] 스위스 정부는 [주말 안 UBS 거래 아니면 없음]이라는 협상 구조를 강제, BlackRock·DBS 등 잠재 인수자에게 협상 시간을 주지 않음.",
        "[50,000명 임직원 고용 보호] 파산 시 즉시 청산이었지만 합병 시 단계적 통합으로 일자리 일부 유지(이후 약 30,000명 감원이지만 즉시 청산보다는 완만).",
        "[이사회 선관의무 방어] CHF 30억이라도 [파산 0]보다는 높다는 논리. Centerview·Rothschild가 [Fairness Opinion]을 통해 이사회의 법적 보호 제공.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "거래 클로징(2023.06.12) 이후 약 3년이 지난 시점에서 평가하면, UBS는 단기적·재무적 측면에서 압도적 성공을 거뒀다. 그러나 [AT1 채권 우선순위 역전]은 글로벌 자본 구조 신뢰에 영구적 흠집을 남겼고, AT1 채권자 소송은 2026년 현재도 진행 중이다. 더 큰 교훈은 [G-SIB도 신뢰 위기 4일이면 무너진다]는 점, 그리고 [스위스 같은 over-banked 국가는 G-SIB 두 개를 동시에 유지할 수 없다]는 구조적 결론이다.",
    overallVerdict: "UBS 전략적 압승, AT1 시장 신뢰에는 영구 흠집, 스위스 금융 구조의 근본 재설계",
    positives: [
      "[UBS] 통합 후 자산관리 AUM 약 $5.7조, 세계 최대급 부유층 자산관리사 등극. 통합 시너지 연 $80억 이상 가시화, 주가 +50% (2023.03~2026.05).",
      "[스위스 정부] 손실보전 CHF 90억 + SNB 유동성 CHF 1,000억 [모두 2023.Q3에 조기 해지], 납세자 직접 부담 사실상 0. 국가 신용 위기 회피.",
      "[시스템 안정] CS 파산 시 예상됐던 스위스 GDP -3~5% 충격을 회피, 글로벌 G-SIB 연쇄 도산 시나리오 차단.",
      "[규제 정비] FSB·BIS·EU에서 [G-SIB 정리 가능성(resolvability) 강화 권고] 채택, AT1 시장 표준약관 재정비(2024년).",
    ],
    risks: [
      "[AT1 시장 신뢰 영구 흠집] 글로벌 AT1 시장 $2,500억이 며칠간 평균 -10pt 폭락, ECB·BoE 긴급 진화 성명에도 위험 프리미엄 영구 상승. 신규 발행 비용 +50~100bp 추정.",
      "[AT1 소송] Pimco·Invesco·Lazard 등이 FINMA·스위스 정부 상대 수십 건 소송, 2024~2026 진행 중. 일부 1심 판결은 FINMA에 유리하나 항소심 불확실.",
      "[스위스 일자리 충격] 합병 후 약 30,000명 감원, 취리히·런던·뉴욕 IB 인력 대규모 정리. 스위스 노동시장에 단기 충격.",
      "[Too Big to Fail 심화] 스위스 GDP의 약 2배 자산 규모 단일 G-SIB(UBS) 탄생, 향후 UBS 위기 시 스위스 정부 구제 능력 자체에 의문.",
      "[CS 브랜드·역사 소멸] 167년 역사의 스위스 명문 IB 브랜드 영구 폐기, [Suisse Secrets·Archegos·Greensill]의 부정적 유산이 UBS로 일부 이전.",
    ],
    editorNote:
      "이 거래는 [\"신뢰는 자산보다 빠르게 증발한다\"]는 2008 JPMorgan-베어스턴스 교훈의 15년 뒤 반복이다. 다만 차이는 두 가지다, ① [정부가 주주 투표를 비상입법으로 우회한 점], ② [AT1 채권을 주식보다 먼저 0으로 만든 점]. 첫 번째는 [국가의 비상 권한이 사적 자본 구조를 어디까지 우회할 수 있나]라는 헌법적 질문을, 두 번째는 [규제당국이 자본 구조 우선순위를 임의로 재배치할 수 있나]라는 시장 신뢰의 근본 질문을 남겼다. UBS는 이 모든 비용을 [정부가 부담]하는 조건으로 거래를 성사시켰고, 결과적으로 [세계 최대급 부유층 자산관리사]가 됐다. 그러나 시장은 잊지 않는다, AT1 채권자가 본 손실은 [\"G-SIB의 후순위 채권은 정부 재량으로 0이 될 수 있다\"]는 영구적 기억으로 남았다., 2026년 5월 기준 검토.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "UBS",
    acquirerBg: "bg-red-600",
    targetInitials: "CS",
    targetBg: "bg-slate-800",
    acquirerName: "UBS Group AG",
    targetName: "Credit Suisse Group AG",
    dealTitle: "UBS Government-Brokered Emergency Acquisition of Credit Suisse",
    dealSize: "CHF 32.5억 (주식 스왑, 1:22.48)",
    dealSizeUSD: "approx. USD 3.5 Billion",
    evEbitda: "N/A (위기 인수)",
    closeDate: "Jun 12, 2023",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    { id: 1, text: "Credit Suisse Annual Report FY2022, IFRS, 본사 공시" },
    { id: 2, text: "UBS Group AG, \"UBS to acquire Credit Suisse\" Press Release (March 19, 2023)" },
    { id: 3, text: "FINMA, \"FINMA approves merger of UBS and Credit Suisse\" Press Release (March 19, 2023)" },
    { id: 4, text: "Swiss Federal Council, Emergency Ordinance on Additional Liquidity Assistance Loans (March 19, 2023)" },
    { id: 5, text: "Swiss National Bank, \"SNB provides substantial liquidity assistance\" Press Release (March 19, 2023)" },
    { id: 6, text: "ECB Single Supervisory Mechanism + Bank of England, Joint Statement on AT1 ranking (March 20, 2023)" },
    { id: 7, text: "Financial Times, \"How Credit Suisse came undone in 4 days\" (March 20, 2023)" },
    { id: 8, text: "Reuters, \"AT1 bondholders file lawsuits against FINMA over $17B writedown\" (2024)" },
    { id: 9, text: "Bloomberg, \"Saudi National Bank chairman's TV remark that broke Credit Suisse\" (March 16, 2023)" },
    { id: 10, text: "Financial Stability Board, G-SIB Resolvability Review Post-Credit Suisse (2024)" },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "UBS 크레디트스위스 강제 인수 완전 해부 — 주말 72시간과 AT1 $170억 상각의 진실",
    description:
      "2023.03.19 스위스 정부 주말 협상으로 UBS가 크레디트스위스를 CHF 32.5억에 강제 인수. AT1 채권 CHF 160억 전액 상각, 주주 투표 면제 비상입법, SNB 유동성 CHF 1,500억의 전례 없는 패키지 해부. 글로벌 AT1 시장 충격과 세계 최대 자산관리사 탄생의 교과서 사례.",
    keywords: [
      "UBS 크레디트스위스 인수",
      "Credit Suisse 파산 2023",
      "AT1 채권 상각",
      "CoCo 채권 우선순위 역전",
      "스위스 금융위기",
      "FINMA AT1 결정",
      "Too Big to Fail",
      "G-SIB 강제 합병",
      "스위스국립은행 SNB 구제",
      "Archegos Greensill CS",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "AT1 / CoCo 전액 상각",
      description: "AT1(Additional Tier 1) 채권은 발행사의 자본비율이 일정 수준 이하로 떨어지면 자동 상각·전환되는 조건부 자본증권(CoCo). 본 거래에서 CS의 AT1 CHF 160억이 주식(CHF 30억)보다 먼저 전액 상각, 시장 통념(주식 → AT1 → 일반 채권)을 정면 위반했다.",
    },
    {
      term: "스위스 비상입법 (Notrecht)",
      description: "스위스 헌법상 연방평의회가 [국가 비상사태] 선언 시 의회 표결 없이 긴급 법령을 통과시킬 수 있는 권한. 본 거래에서는 주말에 [UBS·CS 양사 주주 합병 투표권 면제] 법령을 통과시켜 거래 종결 시점 리스크를 0으로 만들었다.",
    },
    {
      term: "Bank Bail-In Cascade",
      description: "은행 위기 시 손실을 [주식 → AT1 → Tier 2 → 일반 채권 → 예금자] 순서로 흡수하게 한 바젤III 기본 원칙. 본 거래의 [AT1 우선 상각]은 이 cascade를 깨뜨린 첫 G-SIB 사례, ECB·BoE가 24시간 내 진화 성명을 낸 이유.",
    },
    {
      term: "Captive Investor Backstop",
      description: "위기 시 정부·중앙은행이 [사실상 강제로] 특정 은행에 인수자를 매칭시키는 구조. UBS는 자발적 인수자가 아니라 스위스 정부가 매칭한 [강제 인수자]에 가까웠다. 정부 안전망(손실보전·유동성)이 이 강제성을 보상한 구조.",
    },
    {
      term: "사우디 국영은행 트리거 (Saudi National Bank Trigger)",
      description: "최대주주(9.9%)의 [\"추가 자본 투입 없다\"] 공개 발언이 단 하루 만에 CS 주가 -24% + CDS 1,000bp 돌파로 이어진 사건. 자본 구조의 [마지막 안전망 소멸] 시그널로 시장이 해석한 사례.",
    },
    {
      term: "G-SIB Concentration Risk",
      description: "글로벌 시스템적으로 중요한 은행(G-SIB) 30개 중 두 곳이 한 국가에 동시 위치할 때 발생하는 시스템 리스크. 스위스는 UBS·CS 두 G-SIB의 합산 자산이 GDP의 약 3배에 달해, 한 곳 파산이 곧 국가 신용 위기로 직결되는 구조였다.",
    },
    {
      term: "Cross-Default Risk (교차 디폴트)",
      description: "한 금융기관의 파산이 카운터파티 계약(파생·레포·신용공여)을 통해 다른 기관의 디폴트로 연쇄 확산되는 리스크. CS의 파생계약 카운터파티가 수천 곳에 달해 파산 시 글로벌 G-SIB 연쇄 도산 시나리오가 본 거래의 시급성 근거였다.",
    },
    {
      term: "Bondholder vs Equity Priority Inversion",
      description: "정상 자본 구조에서 후순위인 채권이 선순위인 주식보다 먼저 손실을 흡수당하는 [우선순위 역전]. 본 거래에서 AT1 채권자가 주주보다 큰 손실(전액)을 본 것이 대표 사례. 시장 신뢰에 영구 흠집을 남긴 결정.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "왜 크레디트스위스는 일주일 만에 무너졌나요?",
      a: "직접 도화선은 2023.03.15 사우디 국영은행 회장의 [\"추가 자본 투입 없다\"] 발언이지만, 본질은 [2021~22년 누적된 신뢰 붕괴]였습니다. Archegos $55억 손실, Greensill $100억+ 펀드 붕괴, Mozambique 채권 사기, Suisse Secrets 정보 유출 등이 분기 단위로 터지면서 2022년 자산관리 순유출만 CHF 1,230억. 사우디 발언은 [마지막 안전망 소멸] 시그널로 해석돼 4일 만에 CDS 1,000bp 돌파 + 자금조달 불능 상태에 진입했습니다.",
    },
    {
      q: "왜 AT1 채권 CHF 160억을 주식보다 먼저 상각했나요?",
      a: "FINMA의 결정은 두 가지 근거였습니다. ① CS의 AT1 채권 약관에 [\"Viability Event(생존 가능성 상실 이벤트) 발생 시 전액 상각 가능\"] 조항이 명시돼 있었음. ② [정부·SNB의 비상 유동성 지원이 곧 Viability Event]라고 FINMA가 판단. 이 결정으로 [UBS의 인수 부담을 줄이고 + 자본 구조 손실 흡수력을 즉시 확보]했지만, 시장 통념(주식 → AT1 → 일반 채권)을 정면 위반한 결과가 됐습니다. ECB·BoE가 24시간 내 [\"우리 관할에서는 정상 우선순위가 유지된다\"]는 긴급 성명을 낸 이유입니다.",
    },
    {
      q: "스위스 정부가 주주 투표를 면제한 게 합법인가요?",
      a: "스위스 헌법상 연방평의회는 [국가 비상사태] 시 의회 표결 없이 긴급 법령(Notrecht)을 통과시킬 권한이 있습니다. 본 거래에서는 주말에 [UBS·CS 양사 주주 합병 투표권 면제] 법령을 통과시켰고, 이는 [거래 종결 시점 리스크를 0으로 만든] 결정적 무기였습니다. 다만 헌법학자들은 [\"사적 자본 구조에 대한 비상 권한 적용이 어디까지 정당한가\"]를 놓고 논쟁 중이며, 일부 CS 주주가 비상입법 자체의 위헌성을 제기한 소송도 있습니다.",
    },
    {
      q: "UBS는 왜 인수했나요? 자발적 결정이었나요?",
      a: "UBS는 [반자발적 인수자]에 가까웠습니다. 스위스 재무장관 Karin Keller-Sutter가 UBS 이사회에 [\"월요일까지 합의 없으면 CS 파산, 스위스 국가 신용 위기\"]라고 직접 통보했고, UBS는 G-SIB로서 시스템 책임을 회피할 수 없었습니다. 그 대가로 정부는 [손실보전 CHF 90억 + SNB 유동성 CHF 1,000억]의 안전망을 제공했고, UBS는 [현금 1프랑 없는 주식 스왑]이라는 자본 효율적 구조를 얻었습니다. 결과적으로 통합 후 자산관리 AUM $5.7조의 세계 최대급 부유층 자산관리사로 재탄생, 강제성을 압도하는 전략적 가치를 확보했습니다.",
    },
    {
      q: "정부 손실보전·유동성은 실제 얼마나 사용됐나요?",
      a: "약정 한도는 [손실보전 CHF 90억 + SNB 추가 유동성 CHF 1,000억]이었지만, 실제 사용액은 일부에 그쳤습니다. UBS는 2023.Q3에 [정부 손실보전과 SNB 추가 유동성을 모두 조기 해지], 시장 예상보다 6~12개월 빠른 안정화였습니다. 결과적으로 [스위스 납세자 직접 부담은 사실상 0]에 가까웠고, 정부는 [수수료 수입]까지 챙긴 셈입니다. 다만 [국가 비상 권한 사용]이라는 비재무적 비용은 여전히 논쟁 대상입니다.",
    },
    {
      q: "이 거래가 글로벌 금융시장에 어떤 영구적 변화를 남겼나요?",
      a: "세 가지 영구 변화가 있습니다. ① [AT1 시장 신뢰 영구 흠집], 글로벌 AT1 $2,500억의 위험 프리미엄이 +50~100bp 영구 상승, 신규 발행 비용 증가. ② [G-SIB Resolvability 강화], FSB·BIS가 2024년 [G-SIB 정리 가능성 권고]를 채택해 향후 위기 시 [정부 구제 없는 정리]를 강제하는 방향. ③ [over-banked 국가의 구조 재설계], 스위스 같은 GDP 대비 은행자산 5배 국가가 G-SIB 두 곳을 유지하는 모델이 사실상 종료. UBS 단독 G-SIB 체제가 새 기본값이 됐습니다.",
    },
  ],
};

export default deal;
