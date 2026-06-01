/**
 * Berkshire Hathaway × Occidental Petroleum 백기사 금융,
 * Anadarko 인수전 (2019년 4~8월)
 * 100억 달러 영구 우선주 + 워런트 8천만 주, 셰브론과의 비딩 워 승부 결정
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "berkshire-oxy-anadarko",
  title: "버핏의 100억 달러 한 통, 옥시덴탈을 셰브론에서 아나다코를 빼낸 백기사 금융",
  subtitle:
    "8% 영구 우선주 100억 달러 + 워런트 8천만 주(행사가 $62.50) · OXY의 550억 달러 아나다코 인수 자금줄 · 셰브론을 물러나게 한 결정타",
  category: "ma",
  industry: "Energy / Oil & Gas / Permian",
  country: "미국",
  announcedAt: "2019-04-30",
  closedAt: "2019-08-08",
  announcedDisplay: "2019년 4월 30일 (버크셔 100억 달러 우선주 약정)",
  closedDisplay: "2019년 8월 8일 (OXY-Anadarko 거래 종결)",
  readingMinutes: 16,
  tags: [
    "Berkshire Hathaway",
    "Occidental Petroleum",
    "Anadarko",
    "백기사 금융",
    "White Knight",
    "영구 우선주",
    "Preferred Stock",
    "Warrants",
    "Chevron",
    "Permian",
    "Vicki Hollub",
    "Warren Buffett",
    "Carl Icahn",
  ],
  excerpt:
    "2019년 4월 12일 셰브론이 아나다코를 주당 $65, 총 330억 달러에 인수하기로 발표했다. 12일 뒤 옥시덴탈(OXY)이 주당 $76, 총 380억 달러(부채 포함 550억 달러) 카운터 비드를 던졌다. 문제는 자금, OXY는 시가총액이 셰브론의 4분의 1에 불과한 회사였고 [현금 절반 비중을 채울 200억 달러대 자금]이 필요했다. 비키 홀럽 CEO는 오마하로 날아가 워런 버핏에게 [85분 미팅 + 한 통의 전화]로 100억 달러를 약정받았다. 조건은 8% 영구 우선주, 10년 후 콜, OXY 보통주 8천만 주를 행사가 $62.50에 매수할 수 있는 워런트. 이 한 통의 약정이 셰브론을 비딩 워에서 물러나게 했고, 향후 [버크셔가 OXY 보통주의 28%까지 보유하는] 장기 포지션의 출발점이 됐다.",

  acquirer: { initials: "OXY", bg: "bg-red-700", label: "Occidental Petroleum (백기사 자금: Berkshire Hathaway)" },
  target: { initials: "APC", bg: "bg-blue-800", label: "Anadarko Petroleum" },

  background: [
    "[2019년 4월 12일, 셰브론의 선제 발표.] 셰브론(Chevron)이 아나다코(Anadarko Petroleum)를 주당 $65(약 75% 주식, 25% 현금)에 인수, 총 거래가치 약 330억 달러(부채 포함 약 500억 달러)로 합의했다고 발표했다. 아나다코의 [퍼미안 분지(Permian Basin) 자산, 멕시코만 심해, 알제리·모잠비크] 포트폴리오를 단번에 흡수하는 거래. 셰브론 입장에서는 엑손모빌과의 퍼미안 경쟁에서 결정적 우위를 가져올 수 있는 합병이었다.",
    "[2019년 4월 24일, OXY의 카운터 비드.] 옥시덴탈 페트롤리엄(Occidental Petroleum, OXY)이 비키 홀럽(Vicki Hollub) CEO 주도로 주당 $76(약 50% 현금, 50% 주식) 카운터 비드를 던졌다. 셰브론 대비 약 17% 높은 가격. 그러나 OXY의 시가총액은 약 500억 달러로 셰브론(약 2,300억 달러)의 4분의 1, [더 큰 물고기를 삼키는 작은 물고기] 상황이었고 현금 비중 절반을 채우려면 200억 달러대 외부 자금이 필요했다.",
    "[2019년 4월 28일~29일, 오마하 미팅.] 비키 홀럽이 오마하로 워런 버핏을 찾아갔다. 시장 보도에 따르면 [85분의 단독 미팅] 끝에 버핏이 즉석에서 가격을 제시했다, 100억 달러를 [8% 영구 우선주 + 보통주 8천만 주 워런트($62.50 행사가)]로 투입하겠다는 것. 인수금융 신디케이션도, 외부 LP 모집도 없었다. 버크셔의 보험 사업 플로트(float)에서 직접 나오는 100억 달러의 [한 통 약정]. 이것이 OXY의 비딩 워 승부수가 됐다.",
    "[2019년 4월 30일, 약정 공시 + 5월 9일, 아나다코의 권고 변경.] OXY가 버크셔의 100억 달러 우선주 약정을 공시하면서 자금 우려가 해소됐다. 5월 9일 아나다코 이사회는 셰브론 대비 [\"우월한 제안(Superior Proposal)\"]으로 OXY의 $76 비드를 권고 변경. 셰브론은 10억 달러 [역할증료(Reverse Termination Fee)]를 받고 비딩 워에서 물러난다고 5월 9일 동일자로 발표했다. 마이크 워스 셰브론 CEO의 \"우리는 가치 규율(value discipline)을 지킨다\"는 메시지가 시장의 호평을 받았다.",
    "[2019년 8월 8일, 거래 종결.] OXY가 아나다코 100% 인수를 주당 $76, 총 거래가치 약 380억 달러(부채 인수 포함 약 550억 달러)에 종결했다. 같은 날 버크셔의 100억 달러 우선주 + 워런트가 발효되고, OXY는 동시에 [Total SA에 아프리카 자산 88억 달러 매각]을 통해 부채 부담을 일부 완화. 그러나 OXY의 순부채는 종결 시점 [순부채/EBITDA 약 5배]까지 치솟으며 향후 코로나 유가 충격의 직격탄을 받는 구조를 자초했다.",
  ],

  dealSummary: {
    dealValueDisplay: "OXY × Anadarko 약 $55B (부채 포함) · 버크셔 약정 $10B 영구 우선주 + 8천만 주 워런트",
    acquirerName: "Occidental Petroleum (백기사 자금: Berkshire Hathaway)",
    targetName: "Anadarko Petroleum Corporation",
    announcedDisplay: "2019년 4월 30일 (버크셔 약정 공시)",
    closedDisplay: "2019년 8월 8일 (OXY-Anadarko 종결)",
    country: "US",
  },

  executiveSummary: [
    "[셰브론의 선제 발표] 2019.04.12 셰브론이 아나다코를 주당 $65, 약 75% 주식·25% 현금, 총 거래가치 약 330억 달러에 인수 합의 (부채 포함 약 500억 달러)",
    "[OXY의 카운터 비드] 2019.04.24 옥시덴탈이 주당 $76, 약 50% 현금·50% 주식 카운터 비드. 셰브론 대비 +17% 프리미엄, 단 현금 비중 절반(약 190억 달러)을 채울 외부 자금 필요",
    "[버크셔의 백기사 금융] 2019.04.30 워런 버핏이 OXY에 [100억 달러 영구 우선주(8% 캐시 쿠폰, 미지급 시 9%) + 보통주 8천만 주 워런트($62.50 행사)]를 약정. 85분 단독 미팅에서 결정",
    "[셰브론의 퇴각] 2019.05.09 아나다코 이사회가 OXY 비드를 [Superior Proposal]로 권고 변경. 셰브론이 동일자로 [10억 달러 역할증료] 수령 후 비딩 워에서 철수, 마이크 워스 CEO의 \"가치 규율\" 발언이 시장의 호평을 받음",
    "[딜 종결] 2019.08.08 OXY-Anadarko 거래 종결. 총 거래가치 부채 포함 약 550억 달러. 동시에 OXY는 Total SA에 아프리카 자산 약 88억 달러 매각으로 부채 부담 일부 완화",
    "[버크셔의 경제성] 연간 우선주 쿠폰 $800M 현금 (8% × $100억) + 워런트 8천만 주의 옵션 가치. 우선주는 [부채에 후순위·보통주에 우선]하며 OXY가 10년 뒤(2029.04 이후)에만 액면 콜 가능. 사실상 영구",
    "[Carl Icahn의 반대 행동주의] OXY가 [NYSE 주주의결권 임계점 20%]를 회피하기 위해 현금 비중을 일부러 조정하고 주주투표 없이 거래를 강행한 데 대해 칼 아이칸이 [10%+ 지분 매집 + 위임장 분쟁]으로 격렬히 반대. 2020~2022년 이사회 압박 후 점진적 청산",
    "[코로나 충격과 버핏의 추가 매집] 2020년 유가 폭락으로 OXY 주가가 $40대에서 약 $10까지 붕괴. OXY가 [부채 약정] 때문에 우선주 배당 일부를 현금 대신 [OXY 보통주]로 지급. 2022년부터 버핏이 OXY 보통주를 공개시장에서 적극 매집, 2024년 기준 [버크셔 보유 OXY 보통주 약 28%](워런트 별도)로 사실상 대주주 지위 확보",
  ],

  industryOverview: {
    body: "2019년 미국 셰일 산업의 키워드는 [퍼미안 분지(Permian Basin) 통합]이었다. 텍사스 서부·뉴멕시코 동남부에 걸친 이 분지는 미국 원유 생산의 약 30%를 차지하는 핵심 자산이고, 2015~2018년 셰일 혁명의 [생산 단가 하락]과 함께 메이저들이 일제히 진입했다. 2019년 4월 시점, 엑손모빌과 셰브론이 \"메이저 vs 셰일 독립계(E&P)\" 양강 구도를 형성하며 퍼미안 통합 경쟁의 정점에 있었다. 아나다코는 미국 5위권 독립 E&P 회사로, 퍼미안 + 멕시코만 심해 + 알제리·모잠비크 LNG라는 매력적 포트폴리오를 보유. OXY는 퍼미안 단일 자산 비중이 가장 높은 [퍼미안 순수 플레이(pure play)] 메이저로, 아나다코 인수 시 [퍼미안 생산량 2배 + 셰일 매장량 70% 증가]가 가능한 그림이었다.",
    metrics: [
      { label: "OXY 시가총액 (2019.04)",     value: "약 $50B",        sub: "비키 홀럽 CEO 체제" },
      { label: "셰브론 시가총액 (2019.04)",   value: "약 $230B",       sub: "OXY의 약 4.6배" },
      { label: "Anadarko 시가총액 (선제발표 직전)", value: "약 $23B",  sub: "주당 $46 수준" },
      { label: "퍼미안 미국 원유 점유율 (2019)", value: "약 30%",      sub: "WTI 기준 최대 생산 분지" },
    ],
    subBody:
      "OXY-Anadarko 거래는 미국 에너지 M&A 역사에서 [백기사 금융(white knight financing)] + [퍼미안 통합] + [규모의 비대칭(David vs Goliath)]이 동시에 결합된 드문 사례다. 2023~2024년 엑손-파이오니어($65B), 셰브론-헤스($53B) 메가 딜이 잇따라 발표되면서 [2019년 OXY-Anadarko가 사실상 퍼미안 통합 사이클의 출발점]이었다는 평가가 굳어졌다.",
    players: [
      { name: "Occidental Petroleum (OXY)", role: "인수자, 퍼미안 pure play 메이저, 비키 홀럽 CEO" },
      { name: "Anadarko Petroleum",         role: "타깃, 미 5위권 독립 E&P, 퍼미안+심해+LNG 포트폴리오" },
      { name: "Chevron",                    role: "선제 입찰자, 4월 12일 $65 합의 후 5월 9일 철수" },
      { name: "Berkshire Hathaway",         role: "백기사 자금줄, 100억 달러 영구 우선주 + 8천만 주 워런트" },
      { name: "ExxonMobil",                 role: "셰브론의 퍼미안 경쟁자, 본 거래 비참여이나 시장 구도의 한 축" },
      { name: "Carl Icahn",                 role: "OXY 행동주의 주주, 주주투표 회피에 격렬 반대, 2020~2022 위임장 분쟁" },
      { name: "Total SA (TotalEnergies)",   role: "OXY가 종결 동시에 아프리카 자산 약 88억 달러를 매각한 상대" },
    ],
  },

  companyOverview: {
    targetName: "Anadarko Petroleum Corporation",
    body: "Anadarko Petroleum Corporation은 1959년 텍사스 휴스턴에 설립된 미국 5위권 독립 E&P(Exploration & Production) 기업이었다. 2019년 인수 합의 시점 기준 일평균 생산량 약 70만 BOE(석유환산배럴), 매장량 약 15억 BOE. 세 축의 자산 포트폴리오를 보유, [① 퍼미안 분지(Delaware/Midland Basin) 셰일], [② 멕시코만(GoM) 심해 생산], [③ 알제리·모잠비크 LNG 프로젝트]. 특히 모잠비크 LNG는 2010년대 후반 글로벌 가스 시장의 핵심 프로젝트로 떠올랐고, 셰브론·OXY 모두 이 자산을 노렸다. OXY는 종결과 동시에 모잠비크·알제리·가나·남아공 자산을 Total SA에 약 88억 달러에 매각해 [퍼미안 자산만 남기는] 포트폴리오 정리를 동시 진행했다.",
    metrics: [
      { label: "설립연도",                value: "1959년",       sub: "텍사스 휴스턴" },
      { label: "본사",                   value: "텍사스 우드랜즈" },
      { label: "FY2018 매출",            value: "약 $13.0B",   sub: "+34% YoY (유가 회복)" },
      { label: "일평균 생산 (2018)",       value: "약 70만 BOE/일", sub: "퍼미안 + GoM + 국제 자산" },
    ],
    financials: [
      { year: "FY2014", revenue: 18470, cogs: 10500, grossProfit: 7970,  sga: 1280, operatingIncome: -1750, ebitda: 6900 },
      { year: "FY2015", revenue: 8700,  cogs: 5400,  grossProfit: 3300,  sga: 1180, operatingIncome: -6300, ebitda: 2600 },
      { year: "FY2016", revenue: 7870,  cogs: 4900,  grossProfit: 2970,  sga: 1050, operatingIncome: -3030, ebitda: 2400 },
      { year: "FY2017", revenue: 9700,  cogs: 5600,  grossProfit: 4100,  sga: 1150, operatingIncome: -650,  ebitda: 4200 },
      { year: "FY2018", revenue: 13000, cogs: 6800,  grossProfit: 6200,  sga: 1230, operatingIncome: 2480,  ebitda: 6800 },
    ],
    financialsNote: "단위: 백만 달러 (US$M) | US GAAP 기준 | 출처: Anadarko 10-K 공시 (FY2014~2018). 2014~2017 영업손실은 유가 폭락·자산 손상차손 영향.",
    financialsCurrency: "$",
    financialsUnit: "M",
  },

  controlBattleOverview: {
    body: "OXY-Anadarko 거래의 본질은 [셰브론(선제) vs OXY+버크셔(카운터)]의 비딩 워다. 일반적인 적대적 분쟁과 달리 양측 모두 아나다코 이사회를 직접 공격한 게 아니라 [더 좋은 조건]을 들고 권고 변경을 유도하는 [우호적 합의 경쟁(friendly auction)]이었다. 진짜 게임 체인저는 4월 30일 버핏의 100억 달러 약정, 자금 조달 불확실성이 사라지자 셰브론은 곧바로 물러났다.",
    catalyst:
      "셰브론이 2019년 4월 12일 아나다코를 주당 $65(약 330억 달러)에 인수한다고 선제 발표했다. 12일 뒤 OXY가 주당 $76 카운터 비드를 들고 등장했고, 현금 절반 비중을 채우기 위해 워런 버핏에게 [백기사 금융]을 요청한 것이 이 비딩 워의 결정타가 됐다.",
    attackerLabel: "Occidental Petroleum + Berkshire Hathaway",
    defenderLabel: "Chevron (선제 입찰자)",
    battleMoves: [
      {
        date: "2019-04-12",
        side: "defense",
        actor: "Chevron",
        move: "아나다코 인수 선제 발표 — 주당 $65, 약 330억 달러",
        detail:
          "셰브론이 마이크 워스 CEO 주도로 아나다코를 주당 $65(약 75% 주식, 25% 현금, 부채 포함 약 500억 달러)에 인수 합의 발표. 퍼미안+심해+LNG 포트폴리오 단번에 흡수. 시장은 셰브론-엑손 퍼미안 경쟁의 결정타로 평가.",
        weapon: "현금+주식 혼합 비드 (Stock-Heavy Deal)",
        financialImpact: "아나다코 주가 +32%, 셰브론 주가 -5%",
      },
      {
        date: "2019-04-24",
        side: "attack",
        actor: "Occidental Petroleum",
        move: "카운터 비드 — 주당 $76, 약 380억 달러 (현금 50%)",
        detail:
          "비키 홀럽 CEO 주도로 OXY가 셰브론 대비 +17% 프리미엄 카운터 비드. 약 50% 현금, 50% 주식 구조. 그러나 OXY의 시가총액은 셰브론의 4분의 1, 현금 비중 절반(약 190억 달러)을 채울 외부 자금 조달이 필수.",
        weapon: "카운터 비드 (Topping Bid) · 현금 비중 상향",
        financialImpact: "OXY 주가 -6%, 아나다코 주가 +12%",
      },
      {
        date: "2019-04-30",
        side: "attack",
        actor: "Berkshire Hathaway (백기사)",
        move: "100억 달러 영구 우선주 + 8천만 주 워런트 약정 공시",
        detail:
          "워런 버핏이 OXY와 [85분 미팅] 끝에 [8% 영구 우선주 $10B + 보통주 8천만 주 워런트(행사가 $62.50)]를 약정. 인수금융 신디케이션·외부 LP 없이 버크셔 보험 플로트에서 직접 출자. 자금 조달 우려가 일거에 해소되며 OXY 비드의 신뢰성이 급격히 상승.",
        weapon: "영구 우선주 + 워런트 (백기사 금융)",
        financialImpact: "OXY 비드 종결 가능성에 대한 시장 신뢰도 급등",
      },
      {
        date: "2019-05-09",
        side: "attack",
        actor: "Anadarko 이사회",
        move: "셰브론 → OXY로 권고 변경 (Superior Proposal 선언)",
        detail:
          "아나다코 이사회가 OXY의 $76 비드를 [Superior Proposal]로 공식 선언하며 권고를 셰브론에서 OXY로 변경. 셰브론은 같은 날 합의서상의 [10억 달러 역할증료]를 수령 후 비딩 워 철수를 발표. 마이크 워스 CEO의 \"가치 규율(value discipline)\" 발언이 시장의 호평을 받음.",
        weapon: "권고 변경 + 역할증료 (Reverse Termination Fee)",
        financialImpact: "셰브론 주가 +3% (시장 호평), OXY 주가 -8% (부채 우려)",
      },
      {
        date: "2019-05~07",
        side: "neutral",
        actor: "Carl Icahn",
        move: "OXY 지분 10%+ 매집 · 주주투표 회피에 대한 위임장 분쟁 예고",
        detail:
          "OXY가 [NYSE 주주의결권 임계점 20%]를 회피하기 위해 현금 비중을 일부러 조정했다는 의혹이 제기됐다. 칼 아이칸이 OXY 지분을 10% 이상으로 매집하고 \"주주 권리를 박탈한 거래\"라며 이사회 교체를 요구. 2020~2022년 위임장 분쟁으로 이어짐.",
        weapon: "행동주의 지분 매집 + 위임장 분쟁 위협",
        financialImpact: "OXY 거버넌스 리스크 부각",
      },
      {
        date: "2019-08-08",
        side: "attack",
        actor: "Occidental Petroleum",
        move: "OXY-Anadarko 거래 종결 · 동일자 Total SA에 아프리카 자산 $88억 매각",
        detail:
          "OXY가 아나다코 100%를 주당 $76, 총 거래가치 약 380억 달러(부채 포함 550억 달러)에 인수 종결. 같은 날 버크셔 우선주·워런트 발효, OXY는 동시에 [모잠비크·알제리·가나·남아공 자산을 Total SA에 88억 달러] 매각해 부채 부담 일부 완화. 그러나 순부채/EBITDA 약 5배로 치솟음.",
        weapon: "동시 자산 매각 (Funding via Divestiture)",
        financialImpact: "OXY 순부채 약 $480억, 순부채/EBITDA 약 5x",
      },
    ],
    financialWeapons: [
      {
        name: "현금+주식 혼합 비드 (셰브론)",
        side: "defense",
        usedBy: "Chevron",
        description:
          "75% 주식, 25% 현금 구조. 셰브론 입장에서는 자체 주식 발행 부담을 최소화한 [규율 있는 거래]였다. 그러나 아나다코 주주 입장에서는 현금 비중이 낮아 OXY의 50% 현금 비드 대비 매력이 떨어졌다.",
        effectiveness: "blocked",
      },
      {
        name: "카운터 비드 + 현금 비중 상향 (OXY)",
        side: "attack",
        usedBy: "Occidental Petroleum",
        description:
          "주당 $76, 50% 현금·50% 주식. 셰브론 대비 +17% 프리미엄. 아나다코 주주 입장에서는 현금 비중이 2배 가까이 높아 매력적. 그러나 OXY 자체 자금만으로는 불가능, 외부 백기사 자금이 필수.",
        effectiveness: "decisive",
      },
      {
        name: "영구 우선주 + 워런트 (버크셔의 백기사 금융)",
        side: "attack",
        usedBy: "Berkshire Hathaway",
        description:
          "8% 영구 우선주 100억 달러 + 보통주 8천만 주 워런트(행사가 $62.50). 인수금융 없이 버크셔 보험 플로트에서 직접 출자. OXY 비드의 자금 조달 신뢰성을 단번에 확보한 결정타. 사실상 이 한 통의 약정이 셰브론을 물러나게 했다.",
        effectiveness: "decisive",
      },
      {
        name: "역할증료 (Reverse Termination Fee, 셰브론)",
        side: "defense",
        usedBy: "Chevron",
        description:
          "셰브론-아나다코 최초 합의서에 포함된 10억 달러 역할증료. 셰브론은 비딩 워를 [수익을 내며 퇴각]했다. 마이크 워스 CEO의 \"가치 규율\" 메시지가 시장의 신뢰를 얻으며 셰브론 주가는 오히려 +3%.",
        effectiveness: "effective",
      },
      {
        name: "동시 자산 매각 (OXY의 부채 완화 도구)",
        side: "attack",
        usedBy: "Occidental Petroleum",
        description:
          "거래 종결 동일자에 Total SA에 모잠비크·알제리·가나·남아공 자산을 약 88억 달러에 매각. 자금의 일부를 부채 상환에 투입해 [순부채/EBITDA] 비율을 일부 완화. 그래도 여전히 약 5배 수준의 고레버리지.",
        effectiveness: "effective",
      },
      {
        name: "행동주의 지분 매집 + 위임장 분쟁 (아이칸)",
        side: "neutral",
        usedBy: "Carl Icahn",
        description:
          "OXY가 NYSE 주주의결권 임계점(20%)을 피하려고 거래 구조를 짠 데 격렬히 반대. 10%+ 지분 매집 후 이사회 교체 요구. 2020~2022년 위임장 분쟁 끝에 일부 이사회 양보를 받았으나, 2022년 OXY 주가가 회복되자 점진적 청산.",
        effectiveness: "blocked",
      },
    ],
    turningPoint: {
      date: "2019-04-30",
      event: "버크셔 100억 달러 영구 우선주 + 워런트 약정 공시 — 자금 조달 우려 일거 해소",
      detail:
        "OXY 비드의 가장 큰 약점은 [현금 절반 비중을 채울 200억 달러대 자금을 어떻게 마련할 것인가]였다. 4월 30일 버핏이 100억 달러를 [한 통의 약정]으로 보내면서 그 우려가 단번에 사라졌다. 9일 뒤 아나다코 이사회가 권고를 변경했고, 같은 날 셰브론이 물러났다. 비딩 워는 사실상 4월 30일에 결정됐다.",
    },
    verdict: {
      winner: "attack",
      winnerLabel: "OXY+Berkshire — 카운터 비드 성공, 아나다코 인수 종결",
      margin: "최종가 $76 (셰브론 $65 대비 +17%), 총 거래가치 약 $55B (부채 포함)",
      note: "OXY는 비딩 워에서 승리해 아나다코를 인수했다. 그러나 [승자의 저주(winner's curse)] 논란이 이어졌다, 2020년 코로나 유가 폭락으로 OXY 주가가 $40대에서 $10까지 붕괴하면서 [부채 약정] 때문에 우선주 배당을 일부 OXY 보통주로 지급할 수밖에 없었다. 셰브론은 10억 달러 역할증료를 받고 [가치 규율]의 평판을 얻으며 퇴각, 결과적으로 2023년 헤스 인수($53B)로 더 큰 거래로 보상받았다.",
    },
    priceImpact: {
      preContest: "$46 (Anadarko, 2019.04.11 종가)",
      peak: "$76 (OXY 최종 비드가)",
      postContest: "$76 (2019.08.08 종결가, +65% vs 선제발표 직전)",
      note: "아나다코 주주는 셰브론 첫 비드($65) 대비 +17%, 선제발표 직전 주가($46) 대비 약 +65% 수익을 실현했다. OXY 주주는 비딩 워 기간 주가가 약 -15% 하락(부채 우려), 종결 후에도 회복 못함. 2020 코로나로 $10대까지 추가 폭락. 셰브론 주주는 비딩 워 퇴각 직후 +3%(시장 호평).",
    },
  },

  dealStructure: {
    body: "본 거래는 [① OXY가 아나다코를 주당 $76 현금+주식 혼합으로 인수]하고, [② 그 인수자금의 핵심 절반을 버크셔의 100억 달러 영구 우선주 + 8천만 주 워런트로 조달]하며, [③ 종결 동일자에 OXY가 Total SA에 아프리카 자산 약 88억 달러를 매각해 부채 부담을 일부 완화]하는 3단 구조다. 버크셔 우선주는 [8% 캐시 쿠폰, 미지급 시 9%], [10년 후(2029.04) OXY가 액면 콜 가능], [부채에 후순위·보통주에 우선]. 워런트는 [8천만 주, 행사가 $62.50, 우선주 발행기간 동안 행사 가능]. 인수금융(LBO 부채)·신디케이션 없이 [버크셔 자기자본 + OXY 자체 신용]만으로 클로징.",
    preOwnership: {
      nodes: [
        { id: "apc_pre",    label: "Anadarko",            sub: "독립 E&P (NYSE: APC)",      type: "target" },
        { id: "apc_share",  label: "아나다코 주주",         sub: "일반 공모",                  type: "public" },
        { id: "oxy_pre",    label: "Occidental (OXY)",     sub: "퍼미안 pure play 메이저",     type: "acquirer" },
        { id: "cvx_pre",    label: "Chevron (선제 입찰자)",  sub: "$65 합의 후 5.9 철수",       type: "entity" },
      ],
      edges: [
        { from: "apc_share", to: "apc_pre", label: "100% (공개 유통)" },
        { from: "cvx_pre",   to: "apc_pre", label: "$65 비드 (2019.4.12, 5.9 철수)" },
        { from: "oxy_pre",   to: "apc_pre", label: "$76 카운터 비드 (2019.4.24)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "oxy_post",   label: "Occidental (OXY)",     sub: "Anadarko 100% 인수",          type: "acquirer" },
        { id: "apc_post",   label: "Anadarko",             sub: "OXY 자회사 (퍼미안만 잔존)",     type: "target" },
        { id: "brk_post",   label: "Berkshire Hathaway",   sub: "우선주 $10B + 워런트 8천만",    type: "fund" },
        { id: "oxy_pub",    label: "OXY 보통주주",          sub: "(코로나 후 버크셔 28% 매집)",   type: "public" },
        { id: "total_post", label: "Total SA",             sub: "아프리카 자산 $88억 매수",      type: "entity" },
      ],
      edges: [
        { from: "oxy_post",   to: "apc_post",  label: "100% 취득 ($76/주, 약 $55B 부채 포함)" },
        { from: "brk_post",   to: "oxy_post",  label: "$10B 영구 우선주 (8%) + 8천만 주 워런트 ($62.50)" },
        { from: "oxy_pub",    to: "oxy_post",  label: "보통주 유통 (코로나 후 버크셔 28% 매집)" },
        { from: "apc_post",   to: "total_post", label: "아프리카 자산 매각 $88억 (종결 동일자)" },
      ],
    },
    keyTerms: [
      { label: "OXY-Anadarko 비드 가격",       value: "주당 $76 (현금 ~$59 + OXY 주식 ~0.2934주)",  accent: true },
      { label: "OXY-Anadarko 총 거래가치",     value: "약 $380억 (지분), $550억 (부채 포함)",          accent: true },
      { label: "셰브론 최초 비드",              value: "주당 $65 (~75% 주식, 25% 현금, 총 $330억)" },
      { label: "셰브론 역할증료",                value: "$1.0B (5월 9일 수령 후 철수)" },
      { label: "버크셔 우선주 액면",             value: "$10.0B (1주당 $100,000, 10만 주)",            accent: true },
      { label: "우선주 배당률",                  value: "8% 현금 (미지급 시 9% PIK)" },
      { label: "우선주 콜 옵션",                 value: "10년 후 (2029.04 이후), 액면+미지급 배당" },
      { label: "워런트",                        value: "8천만 주, 행사가 $62.50, 우선주 발행기간 내 행사",  accent: true },
      { label: "비드 구조 변경 (주주투표 회피)",   value: "현금 비중 조정으로 NYSE 20% 임계점 회피" },
      { label: "종결 동시 자산 매각",             value: "Total SA에 아프리카 자산 약 $88억" },
      { label: "OXY 종결 시 순부채/EBITDA",      value: "약 5배 (고레버리지 진입)" },
      { label: "인수금융",                      value: "버크셔 자기자본 + OXY 자체 신용 (LBO 부채 없음)" },
    ],
  },

  advisors: {
    body: "비딩 워 구조라 자문사 라인업이 3+1진영으로 나뉘었다. 아나다코는 Evercore와 Wachtell, OXY는 BofA·Citi와 Cravath, 셰브론은 Credit Suisse·Goldman과 Paul Weiss를 기용했다. 버크셔는 [워런 버핏 단독 협상, 외부 자문 없이 인하우스] 진행이라는 [Berkshire 특유의 무자문 거래] 패턴을 그대로 따랐다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Occidental Petroleum (인수자) + Berkshire Hathaway (백기사 자금)",
        initials: "OXY",
        bg: "bg-red-700",
        advisors: [
          {
            firm: "Bank of America Merrill Lynch",
            role: "재무 자문 (Lead Financial Advisor)",
            roleType: "financial",
            note: "OXY의 메인 재무 자문, 비드 가격 책정 및 자금 조달 구조 설계",
          },
          {
            firm: "Citi (Citigroup)",
            role: "재무 자문 (Co-Advisor)",
            roleType: "financial",
            note: "OXY의 부채 자문 및 자산 매각(Total SA) 패키지 설계",
          },
          {
            firm: "Cravath, Swaine & Moore LLP",
            role: "법무 자문 (Lead Legal)",
            roleType: "legal",
            note: "OXY 인수 계약 및 우선주·워런트 법무 자문",
          },
          {
            firm: "Berkshire Hathaway (인하우스)",
            role: "백기사 자금 (인하우스 협상)",
            roleType: "other",
            note: "워런 버핏 단독 협상, 외부 자문 없이 100억 달러 우선주·워런트 구조 설계",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Anadarko Petroleum (타깃) / Chevron (선제 입찰자)",
        initials: "APC",
        bg: "bg-blue-800",
        advisors: [
          {
            firm: "Evercore",
            role: "재무 자문 (Anadarko Lead)",
            roleType: "financial",
            note: "아나다코의 메인 재무 자문, 셰브론 vs OXY 비드 비교 분석 및 Superior Proposal 권고",
          },
          {
            firm: "Wachtell, Lipton, Rosen & Katz",
            role: "법무 자문 (Anadarko Lead Legal)",
            roleType: "legal",
            note: "아나다코의 메인 법무 자문, 권고 변경 및 셰브론 역할증료 합의 자문",
          },
          {
            firm: "Credit Suisse",
            role: "재무 자문 (Chevron Lead)",
            roleType: "financial",
            note: "셰브론의 메인 재무 자문, 최초 비드 구조 설계 및 비딩 워 대응",
          },
          {
            firm: "Goldman Sachs",
            role: "재무 자문 (Chevron Co-Advisor)",
            roleType: "financial",
            note: "셰브론의 부재무 자문, 비딩 워 퇴각 결정 자문",
          },
          {
            firm: "Paul, Weiss, Rifkind, Wharton & Garrison LLP",
            role: "법무 자문 (Chevron Lead Legal)",
            roleType: "legal",
            note: "셰브론의 메인 법무 자문, 역할증료 수령 후 철수 절차 자문",
          },
        ],
      },
    ],
    disclaimer: "주: 자문사 정보는 공시 자료, Reuters·WSJ 보도 및 거래 종결 발표 기반. 일부 보조 자문사는 누락 가능.",
  },

  valuation: {
    body: "본 거래의 밸류에이션 핵심 변수는 [① 아나다코 인수가의 EV/EBITDA], [② 버크셔 우선주의 시가평가], [③ 워런트의 옵션 가치] 세 가지다. 셰브론의 최초 비드($65, EV/EBITDA 약 7.5배)는 동종업계 평균 수준이었지만, OXY의 카운터 비드($76, EV/EBITDA 약 9.0배)는 [퍼미안 통합 시너지를 미리 지불한 가격]이라는 평. 버크셔 우선주는 발행 시점 신용등급 BBB+ OXY의 표면 신용 스프레드 대비 [+200~250bp의 추가 수익] 구조였다. 워런트(8천만 주 × $62.50 행사)는 발행 시점 OXY 주가 $58 대비 약 +8% out-of-the-money로 시작했지만, 2022~2024년 OXY가 $60~80대로 회복하며 [수십억 달러 단위 in-the-money]로 전환됐다.",
    rows: [
      { item: "셰브론 최초 비드 (2019.4.12)",          val: "$65/주",         note: "EV/EBITDA 약 7.5배, 부채 포함 약 $50B",       accent: false },
      { item: "OXY 카운터 비드 (2019.4.24)",           val: "$76/주",         note: "EV/EBITDA 약 9.0배, 부채 포함 약 $55B",      accent: true },
      { item: "OXY 비드 vs 셰브론",                  val: "+17%",          note: "현금 비중 25% → 50%로 상향" },
      { item: "Anadarko 선제발표 직전 주가",            val: "$46/주",         note: "2019.4.11 종가" },
      { item: "총 인수가 (지분 기준)",                 val: "약 $38B",        note: "주당 $76 × 약 5억 주" },
      { item: "총 거래가치 (부채 포함)",                val: "약 $55B",        note: "Anadarko 인수 부채 약 $17B 포함",            accent: true },
      { item: "버크셔 우선주 액면",                    val: "$10.0B",         note: "8% 캐시 쿠폰, 미지급 시 9% PIK",            accent: true },
      { item: "버크셔 연간 우선주 수익",                val: "$0.8B",          note: "8% × $10B (현금)" },
      { item: "버크셔 워런트",                       val: "8천만 주 @ $62.50", note: "발행 시점 OXY 주가 $58, +8% OTM",          accent: true },
      { item: "OXY 종결 시 순부채/EBITDA",            val: "약 5.0배",        note: "에너지 메이저 평균(약 1~2배) 대비 고레버리지" },
      { item: "Total SA 자산 매각 (동시)",             val: "$8.8B",         note: "모잠비크·알제리·가나·남아공" },
      { item: "셰브론 역할증료 수령",                  val: "$1.0B",         note: "5.9 비딩 워 철수" },
    ],
    disclaimer: "주: EV/EBITDA 추정은 Anadarko FY2018 EBITDA 약 $6.8B 기준. 시점에 따라 시장 자료 간 차이가 있을 수 있음.",
  },

  rationale: {
    buyer: {
      title: "OXY와 버크셔, 왜 이 거래였나",
      initials: "OXY",
      bg: "bg-red-700",
      points: [
        "[OXY: 퍼미안 통합의 결정타] 아나다코 인수로 OXY의 퍼미안 생산량이 약 2배, 매장량 약 70% 증가. 비키 홀럽 CEO의 [퍼미안 pure play 메이저] 비전을 단번에 완성하는 거래. 셰브론·엑손과의 퍼미안 경쟁에서 규모의 경제 확보",
        "[OXY: 셰일 생산성 + 시장 점유율] 인수 후 OXY의 미국 셰일 생산량은 일평균 약 100만 BOE로 메이저급에 합류. 퍼미안 분지의 [핵심 통합자(consolidator)]로 자리매김",
        "[버크셔: 다운사이드가 채권 수익으로 보호된 업사이드 게임] 8% 영구 우선주는 사실상 영구 채권에 가까운 수익원, [연간 $800M 현금 쿠폰]이 보장. 거기에 8천만 주 워런트는 OXY 주가 상승 시 [수십억 달러 단위 옵션 가치]. \"꽃놀이패\"의 대표 사례",
        "[버크셔: 인플레이션 헤지 + 보험 플로트 운용] 2018~2019년 버크셔는 보험 플로트 $1,300억의 운용처 부족에 시달림. OXY 우선주는 [장기 인플레이션 헤지(에너지 자산) + 안정적 8% 현금 수익]을 동시에 제공",
        "[OXY: 셰브론 대비 협상 우위 확보] 버크셔 백기사 자금이 들어오자 OXY 비드의 자금 조달 신뢰성이 단번에 확보. 셰브론은 가격 인상보다 [가치 규율]을 택해 퇴각",
        "[버크셔: 향후 OXY 보통주 매집의 발판] 2022~2024년 버핏이 OXY 보통주를 공개시장에서 적극 매집해 [버크셔 OXY 보유 약 28%](워런트 별도)에 도달. 2019년 우선주가 [장기 대주주 전략의 발판]이 됐다는 평가",
      ],
    },
    seller: {
      title: "아나다코와 셰브론, 왜 이 결과였나",
      initials: "APC",
      bg: "bg-blue-800",
      points: [
        "[아나다코 주주: 선제발표 대비 +65% 수익 실현] 선제발표 직전 주가 $46 대비 OXY 최종가 $76은 약 +65% 프리미엄. 셰브론 첫 비드($65) 대비도 +17% 추가 수익. 이사회의 Superior Proposal 권고 변경이 주주 가치를 극대화한 사례",
        "[아나다코 이사회: 신탁의무 충족] 셰브론 합의 후에도 OXY 비드가 명백히 더 좋은 조건이라 [신탁의무(fiduciary duty)] 차원에서 권고를 변경해야 했음. Wachtell의 법무 자문이 셰브론 역할증료 합의의 정당성 확보",
        "[셰브론: 가치 규율로 평판 자산 획득] 마이크 워스 CEO의 \"가치 규율(value discipline)\" 메시지는 시장의 호평을 받았고, 셰브론 주가는 비딩 워 퇴각 직후 +3% 상승. 향후 2023년 헤스 인수($53B) 추진의 신뢰 자본이 됐다는 평가",
        "[셰브론: 역할증료 수익 + 자본 보존] 10억 달러 역할증료를 수령해 [수익을 내며 퇴각]. 자체 주식 발행 부담을 피하고 BS 보존, 향후 더 좋은 자산 인수를 위한 실탄 유지",
        "[Anadarko의 모잠비크 LNG 자산: Total SA로 이관] OXY가 종결 동시에 아프리카 자산을 Total에 매각, 모잠비크 LNG는 Total이 운영권을 인수해 글로벌 LNG 시장의 핵심 프로젝트로 추진(2021년 보안 문제로 일시 중단)",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "거래 종결 7년이 지난 2026년 시점에서 이 딜의 평가는 [3단 변곡점]을 거치며 크게 변했다. ① 2020년 코로나 유가 폭락으로 OXY 주가가 $10대까지 폭락하며 \"승자의 저주\" 논란 정점, OXY가 [부채 약정] 때문에 버크셔 우선주 배당 일부를 현금 대신 보통주로 지급. ② 2022~2023년 러시아-우크라이나 전쟁발 유가 급등으로 OXY 주가 $70~80 회복, 워런트가 in-the-money로 전환. ③ 2024~2025년 버핏의 추가 보통주 매집으로 [버크셔의 OXY 보통주 약 28%(약 2.5억 주) + 우선주 + 워런트] 합산 시 사실상 대주주 지위. 칼 아이칸은 2022년 OXY 주가 회복기에 점진 청산. OXY는 2020~2023년 총 약 $20B+ 부채 상환에 성공하며 순부채/EBITDA를 [약 5배 → 약 1.5배]로 정상화. 2025년 OXY는 우선주 일부($4B)를 액면가로 조기 상환했다. 비키 홀럽 CEO는 \"가장 어려운 5년이었지만 우리가 옳았다\"는 입장.",
    overallVerdict: "전술적 승리 + 단기 재무 충격 + 장기 전략 성공 — 그러나 진짜 승자는 [버크셔]",
    positives: [
      "[OXY] 퍼미안 pure play 메이저로 자리매김, 2025년 기준 일평균 셰일 생산 약 100만 BOE, 미국 셰일 생산 5위권",
      "[OXY] 2020~2023년 약 $20B+ 부채 상환 성공, 순부채/EBITDA 약 5배 → 약 1.5배로 정상화, 신용등급 BBB 복귀",
      "[버크셔] 2019~2024년 우선주 누적 현금 쿠폰 약 $40억+ 수령, 워런트 옵션 가치 수십억 달러, OXY 보통주 28% 매집 완료",
      "[아나다코 주주] 선제발표 직전 대비 +65%, 셰브론 첫 비드 대비 +17% 추가 수익 실현",
      "[셰브론] 가치 규율 평판 자산 획득, 2023년 헤스 인수($53B) 추진의 신뢰 자본",
    ],
    risks: [
      "[OXY] 2020 코로나 충격 시 한때 [기술적 디폴트 직전]까지 몰림, 백기사 금융 + 고레버리지의 [승자의 저주] 학습 사례",
      "[버크셔] 단기 시각에서는 2020~2021년 OXY 보통주 가격 폭락 + 배당 PIK 지급으로 평가손 발생. 2022년 이후 회복",
      "[OXY] 칼 아이칸의 위임장 분쟁 + NYSE 주주의결권 임계점 회피 의혹은 [거버넌스 평판]에 장기 손상",
      "[에너지 전환 리스크] 2030~2050 탄소중립 시나리오 하에서 퍼미안 셰일의 장기 자산 가치 하락 가능성",
      "[버크셔] OXY 단일 종목 비중 과대, 2024년 기준 버크셔 주식 포트폴리오의 약 5% 차지로 분산 리스크",
    ],
    editorNote:
      "이 거래의 진짜 의미는 [\"셰브론이 가격에서 졌다\"]가 아니라 [\"버크셔가 8% 영구 우선주 + 워런트의 비대칭 수익 구조로 OXY의 백기사가 됐다\"]는 점이다. 단순한 금융 거래가 아니라 [코로나 충격 → 보통주 매집 → 사실상 대주주 등극]까지 [5년에 걸친 단계적 포지셔닝]의 첫 수였다. 워런 버핏의 85분 미팅 → 한 통의 약정 → 100억 달러 → 7년 뒤 OXY 28% 보유라는 시퀀스는 [백기사 금융(white knight financing)]의 글로벌 교과서 사례로 남았다., 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "OXY",
    acquirerBg: "bg-red-700",
    targetInitials: "APC",
    targetBg: "bg-blue-800",
    acquirerName: "Occidental Petroleum (with Berkshire Hathaway as white knight)",
    targetName: "Anadarko Petroleum Corporation",
    dealTitle: "OXY-Anadarko $55B Acquisition · Berkshire $10B Perpetual Preferred + 80M Warrants",
    dealSize: "approx. USD 55B (incl. debt)",
    dealSizeUSD: "USD 38B (equity) / USD 55B (incl. debt)",
    evEbitda: "approx. 9.0x (FY2018 EBITDA basis)",
    closeDate: "Aug 8, 2019",
  },

  sources: [
    { id: 1, text: "Chevron press release, Chevron to Acquire Anadarko in $33 Billion Transaction (Apr 12, 2019)", url: "https://www.chevron.com/newsroom/2019/q2/chevron-to-acquire-anadarko-in-33-billion-transaction" },
    { id: 2, text: "Occidental press release, Occidental Submits Proposal to Acquire Anadarko for $76 per Share (Apr 24, 2019)", url: "https://www.oxy.com/news/news-releases/occidental-submits-proposal-to-acquire-anadarko/" },
    { id: 3, text: "Berkshire Hathaway / Occidental joint press release, Berkshire Hathaway to Invest $10 Billion in Occidental Preferred (Apr 30, 2019)", url: "https://www.oxy.com/news/news-releases/berkshire-hathaway-to-invest-10-billion-in-occidental/" },
    { id: 4, text: "Anadarko press release, Anadarko Board Determines Occidental Proposal Constitutes Superior Proposal (May 6, 2019)", url: "https://www.anadarko.com/press-release/" },
    { id: 5, text: "Chevron press release, Chevron Will Not Submit Revised Proposal (May 9, 2019)", url: "https://www.chevron.com/newsroom/2019/q2/chevron-not-to-submit-revised-proposal" },
    { id: 6, text: "Occidental SEC 8-K, Closing of Anadarko Acquisition and Berkshire Preferred / Warrant Issuance (Aug 8, 2019)", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000797468&type=8-K" },
    { id: 7, text: "Reuters, How Buffett's $10 billion bet on Occidental's Anadarko deal came together (May 1, 2019)", url: "https://www.reuters.com/article/us-anadarko-petrolm-m-a-occidental-buffett/" },
    { id: 8, text: "Wall Street Journal, Why Carl Icahn Is Fighting Occidental's Anadarko Deal (May 30, 2019)", url: "https://www.wsj.com/articles/icahn-occidental-anadarko-fight" },
    { id: 9, text: "Berkshire Hathaway 2019 Annual Letter to Shareholders (Feb 2020), discussion of Occidental Preferred", url: "https://www.berkshirehathaway.com/letters/2019ltr.pdf" },
    { id: 10, text: "Financial Times, Occidental's Buffett-backed Anadarko bet, five years on (Aug 2024)", url: "https://www.ft.com/content/occidental-anadarko-buffett-retrospective" },
  ],

  seo: {
    title: "Berkshire × OXY 100억 달러 백기사 금융, Anadarko 인수의 진짜 승자는 누구인가",
    description:
      "2019년 4월 워런 버핏이 옥시덴탈에 100억 달러 영구 우선주(8% 쿠폰) + 8천만 주 워런트($62.50)를 약정. 셰브론을 비딩 워에서 물러나게 한 결정타. OXY는 아나다코를 550억 달러에 인수했지만 코로나 충격으로 승자의 저주 논란. 2024년 기준 버크셔가 OXY 보통주 28% 매집 완료. 백기사 금융의 글로벌 교과서 사례.",
    keywords: [
      "버크셔 옥시덴탈",
      "OXY 아나다코 인수",
      "워런 버핏 백기사",
      "Berkshire Occidental",
      "Occidental Anadarko",
      "백기사 금융",
      "white knight financing",
      "영구 우선주",
      "Perpetual Preferred",
      "Warrants",
      "Chevron Anadarko",
      "Vicki Hollub",
      "Carl Icahn Occidental",
      "퍼미안 통합",
      "Permian Basin",
    ],
  },

  concepts: [
    {
      term: "백기사 금융 (White Knight Financing)",
      description: "적대적 인수 위기나 비딩 워에 처한 회사가 우호적 제3자로부터 자금 지원을 받아 거래를 성사시키는 구조. OXY는 셰브론과의 비딩 워에서 버크셔의 100억 달러 우선주를 백기사 자금으로 동원해 결정적 우위를 확보했다.",
    },
    {
      term: "영구 우선주 (Perpetual Preferred Stock)",
      description: "만기가 없는 우선주, 발행사가 콜 옵션을 행사할 때까지 영구히 배당을 지급. 버크셔의 OXY 우선주는 8% 캐시 쿠폰(미지급 시 9% PIK), 10년 후(2029.04) 액면 콜 가능. 사실상 영구 채권에 가까운 수익원.",
    },
    {
      term: "워런트 (Warrants)",
      description: "정해진 행사가에 발행사 주식을 매수할 수 있는 권리. 버크셔는 OXY 보통주 8천만 주를 행사가 $62.50에 매수할 수 있는 워런트를 받았다. 발행 시점 +8% out-of-the-money로 시작했지만 2022년 OXY 회복기에 in-the-money로 전환.",
    },
    {
      term: "주주의결권 임계점 (NYSE 20% Threshold)",
      description: "뉴욕증권거래소 상장사가 발행 주식의 20% 이상을 신주로 발행할 때 [주주투표]가 의무. OXY는 현금 비중을 의도적으로 조정해 신주 발행 비율을 20% 미만으로 유지, 주주투표 없이 거래를 강행. 칼 아이칸이 이 점을 격렬히 비판.",
    },
    {
      term: "역할증료 (Reverse Termination Fee)",
      description: "M&A 합의 후 인수자측이 거래를 포기할 때 타깃에게 지급하는 위약금. 셰브론은 아나다코-OXY 권고 변경 발표 직후 [10억 달러 역할증료]를 수령 후 비딩 워에서 철수. \"수익을 내며 퇴각한\" 사례.",
    },
    {
      term: "Superior Proposal (우월한 제안)",
      description: "이사회가 기존 합의된 비드보다 명백히 더 좋은 조건의 비드를 받았을 때 [신탁의무]에 따라 권고를 변경할 수 있는 법적 근거. 아나다코 이사회가 OXY 비드를 Superior Proposal로 선언하면서 셰브론과의 합의가 종료됐다.",
    },
    {
      term: "퍼미안 분지 (Permian Basin)",
      description: "텍사스 서부·뉴멕시코 동남부에 걸친 미국 최대 셰일 분지. 2019년 기준 미국 원유 생산의 약 30% 차지. OXY는 본 거래로 퍼미안 생산량 2배·매장량 70% 증가, 메이저급 [퍼미안 pure play]로 자리매김.",
    },
    {
      term: "버크셔 보험 플로트 (Insurance Float)",
      description: "버크셔 보험 자회사들이 보험금 청구 전까지 보유하는 무이자성 자금. 2019년 기준 약 $1,300억. 워런 버핏이 [장기 운용 가능한 무이자 부채]로 활용해 OXY 우선주 같은 대형 거래에 직접 출자 가능했던 핵심 자원.",
    },
    {
      term: "PIK (Payment-in-Kind) 배당",
      description: "현금 대신 추가 증권(주식·채권)으로 지급되는 배당. OXY는 2020년 코로나 충격 시 부채 약정 때문에 버크셔 우선주 배당의 일부를 [현금 → OXY 보통주]로 PIK 지급했고, 결과적으로 버크셔의 OXY 보통주 보유가 증가하는 부수 효과가 발생.",
    },
  ],

  faq: [
    {
      q: "왜 워런 버핏은 OXY에 100억 달러를 약정했나요?",
      a: "공식 설명은 [\"OXY의 퍼미안 자산이 매력적이고, 8% 영구 우선주는 버크셔에 매력적인 장기 수익원이며, 워런트는 추가 업사이드를 제공한다\"]는 것입니다. 시장 해석은 더 입체적입니다, ① 버크셔 보험 플로트 약 1,300억 달러의 운용처 부족, ② 8% 영구 쿠폰은 사실상 영구 채권에 가까운 안정 수익, ③ 8천만 주 워런트는 미래 옵션 가치, ④ 인플레이션 헤지로 에너지 자산 매력. 결과적으로 [다운사이드가 채권 수익으로 보호된 업사이드 게임]이라는 버핏 특유의 비대칭 수익 구조였습니다.",
    },
    {
      q: "왜 셰브론은 가격 인상 없이 비딩 워에서 물러났나요?",
      a: "셰브론의 마이크 워스 CEO는 [\"가치 규율(value discipline)\"]을 명분으로 퇴각했습니다. 핵심 이유는 세 가지: ① 셰브론은 합의 시점에 이미 [10억 달러 역할증료]를 합의서에 넣어둬 [수익을 내며 퇴각] 가능, ② OXY $76 비드 대비 추가 인상 시 셰브론 자체 주식 발행 부담이 커지고 BS 압박, ③ 시장이 [가치 규율]을 호평하며 셰브론 주가가 오히려 +3%. 이 평판 자본이 2023년 헤스 인수($53B) 추진의 신뢰 기반이 됐습니다. 셰브론은 [패배가 아닌 전략적 퇴각]이었다는 평가.",
    },
    {
      q: "왜 OXY는 주주투표를 회피했고, 칼 아이칸이 왜 격렬히 반대했나요?",
      a: "OXY는 비드 구조에서 [현금 비중]을 의도적으로 조정해 신주 발행 비율을 NYSE의 [주주의결권 임계점 20%] 미만으로 유지했습니다. 결과적으로 OXY 주주들은 이 거대 거래에 대해 [투표 권리를 박탈]당했고, 칼 아이칸이 이를 [지배구조의 중대한 위반]이라며 격렬히 반대. 10%+ OXY 지분을 매집하고 이사회 교체를 요구하는 위임장 분쟁을 2020~2022년 이어갔습니다. 2022년 OXY 주가 회복기에 점진적으로 청산했지만, OXY 거버넌스에 장기 평판 손상을 남겼다는 평가.",
    },
    {
      q: "2020년 코로나 충격에서 OXY는 어떻게 살아남았고 버크셔에 어떤 영향이 있었나요?",
      a: "2020년 코로나 유가 폭락으로 OXY 주가가 $40대에서 한때 $10까지 폭락했습니다. 부채 약정상 일정 한도 이하의 신용 지표에서는 [현금 배당 제한]이 발동되어, OXY는 버크셔 우선주 배당 일부를 현금 대신 [OXY 보통주(PIK)]로 지급할 수밖에 없었습니다. 단기적으로는 버크셔에 평가손이 발생했지만, 결과적으로 [버크셔의 OXY 보통주 보유가 자동 증가]하는 부수 효과가 됐고, 2022년 이후 버핏이 공개시장에서 추가 매집을 이어가 [2024년 기준 OXY 보통주 약 28%(약 2.5억 주) + 우선주 + 워런트] 보유에 도달. 사실상 대주주 지위 확보의 의도치 않은 출발점이 됐습니다.",
    },
    {
      q: "버크셔의 100억 달러 우선주는 언제 어떻게 회수되나요?",
      a: "우선주는 [영구(perpetual)] 형식이라 만기가 없습니다. OXY가 [2029년 4월 이후] 액면가 + 미지급 배당으로 [콜(call)]할 수 있는 옵션만 있을 뿐, 버크셔 측은 어떤 시점에도 풋(put) 권리가 없습니다. 그러나 OXY가 신용 회복 후 자본 비용 최적화를 위해 단계적 조기 상환에 나설 가능성이 큽니다. 실제로 2025년 OXY는 우선주 일부(약 $4B)를 액면가로 조기 상환했고, 2026~2028년에 추가 상환이 예상됩니다. 별도로 8천만 주 워런트는 OXY 보통주가 행사가 $62.50을 넘으면 버크셔가 [언제든 행사]할 수 있고, 발행기간 만료 전까지 옵션 가치를 보유합니다.",
    },
    {
      q: "이 거래는 향후 백기사 금융의 표준 구조가 됐나요?",
      a: "예. OXY-Berkshire 우선주 + 워런트 구조는 그 이후 여러 차례 인용되는 [백기사 금융 글로벌 교과서]가 됐습니다. ① 영구 우선주의 [부채 후순위·보통주 선순위] 위치는 인수자 신용에 부담을 주지 않으면서 자금을 조달할 수 있는 구조, ② 워런트의 옵션성은 백기사가 [공정한 수익률]을 보장받게 함, ③ 보험 플로트·연기금 등 [장기 자금 보유자]가 백기사 역할에 적합. 이후 미국 메가 M&A에서 [Apollo·Blackstone·Brookfield] 등 글로벌 PE/대체투자 운용사들이 유사 구조의 우선주·워런트로 백기사 역할을 수행하는 사례가 증가했습니다. 단, [버핏의 85분 미팅 + 한 통의 약정]이라는 속도와 단순함은 다른 운용사들이 쉽게 모방하기 어려운 [버크셔 고유의 자본 동원력] 사례로 평가됩니다.",
    },
  ],
};

export default deal;
