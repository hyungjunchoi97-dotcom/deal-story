/**
 * BHP × Anglo American 적대적 인수 시도 (2024년 4월~5월)
 * 4주간의 적대적 공세 · 세 차례 입찰 인상 · UK Takeover Panel PUSU 마감 · 자진 철수
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "bhp-anglo-american-hostile",
  title: "BHP는 왜 $490억에도 Anglo American을 못 삼켰나, 2024년 4주짜리 적대적 공세 해부",
  subtitle:
    "구리 슈퍼사이클 노린 사상 최대급 광업 적대적 M&A · 남아공 사전 분사 선결 조건 · UK Takeover Panel PUSU 마감 · Anglo의 자체 구조조정 카드로 무산",
  category: "control",
  industry: "Mining / Copper / Diversified Resources",
  country: "호주/영국/남아공",
  announcedAt: "2024-04-25",
  closedAt: "2024-05-29",
  announcedDisplay: "2024년 4월 25일 (첫 비공식 접촉 공개)",
  closedDisplay: "2024년 5월 29일 (BHP 자진 철수)",
  readingMinutes: 13,
  tags: [
    "BHP",
    "Anglo American",
    "적대적 M&A",
    "구리",
    "광업",
    "남아공",
    "UK Takeover Panel",
    "PUSU",
    "사전 분사",
    "구리 슈퍼사이클",
  ],
  excerpt:
    "2024년 4월 25일, BHP가 Anglo American에 비공식 전액 주식 합병을 제안하며 4주간의 적대적 공세가 시작됐다. 첫 제안은 주당 $25.08(약 £31B, $39B)였고, BHP는 5월 7일 $27.53(£34B, $43B), 5월 22일 $30.91(£38.6B, $49B)로 세 차례 입찰을 올렸다. 핵심 구조는 [선결 조건부 사전 분사], BHP는 합병 클로징 전에 Anglo가 남아공 자회사 Anglo American Platinum(Amplats)과 Kumba Iron Ore를 먼저 분사하라고 요구했다. 남아공 정부·PIC(공무원연금)의 반발, 분사 선결 조건의 구조 위험, 그리고 Anglo가 5월 14일 자체 단순화 계획($13B 규모, Amplats 분사·De Beers 매각·석탄 매각·니켈 매각)을 발표하며 \"우리가 더 잘할 수 있다\"고 응수하자, BHP는 UK Takeover Panel의 PUSU(Put Up or Shut Up) 마감 시한인 5월 29일에 자진 철수했다. UK Takeover Code의 [6개월 재접근 금지 룰]에 따라 BHP는 11월까지 재공세 불가, 결국 돌아오지 않았다.",

  acquirer: { initials: "BHP", bg: "bg-orange-700", label: "BHP Group" },
  target: { initials: "AAL", bg: "bg-emerald-700", label: "Anglo American plc" },

  background: [
    "2024년 봄, 구리 가격이 LME에서 톤당 $11,000를 돌파하며 사상 최고치를 기록했다. 전기차·재생에너지·데이터센터 등 [전기화(electrification)] 수요가 폭증하는 가운데, 칠레·페루의 신규 광산 개발은 환경 규제·원주민 협의·고도화된 채굴 비용 때문에 정체된 상황. 글로벌 대형 광업사들은 일제히 \"구리는 향후 10년간 구조적 공급 부족\"이라는 시각으로 돌아섰고, 채굴 자산을 보유한 기업의 가치가 급등했다. BHP CEO Mike Henry는 \"기존 광산 인수가 신규 개발보다 빠르고 확실한 구리 노출 확대 경로\"라는 논리를 사내외에 반복했다.",
    "Anglo American은 칠레 Collahuasi(44% 지분)·Los Bronces·Quellaveco(페루) 등 세계급 구리 자산을 보유한, BHP가 구리 노출을 단번에 50%+ 끌어올릴 수 있는 거의 유일한 인수 표적이었다. 동시에 Anglo는 남아공 자회사 Anglo American Platinum(Amplats, 약 79% 지분)과 Kumba Iron Ore(약 70% 지분)를 통해 [남아공 정치·규제 노출]을 떠안고 있었다. 남아공은 광업 헌장(Mining Charter)에 따라 30%+ 흑인 소유권(BEE) 유지 의무를 부과하고, 사회노동계획(SLP)·로열티 체계가 복잡해 글로벌 메가 광업사 입장에서 [원치 않는 사회·정치 리스크]였다.",
    "BHP의 해결책은 대담했다, [합병 클로징 전에 Anglo가 Amplats와 Kumba를 Anglo 주주들에게 사전 분사하라]는 선결 조건. 이 구조라면 BHP는 합병 후 남아공 자산을 직접 보유하지 않고, BHP-Anglo 결합 법인은 구리·철광석(브라질·호주)·니켈·메탈러지컬 석탄 자산만 인수하게 된다. 이론적으로는 BHP에 최적, 그러나 Anglo 주주 입장에서는 [① 분사 받은 남아공 자회사 주식의 유동성·가치 불확실성, ② 두 개의 사전 분사를 합병과 동시에 진행하는 [3-track 거래]의 실행 위험, ③ 남아공 정부의 분사 조건부 승인 가능성] 모두를 떠안는 구조다.",
    "Anglo는 4월 26일 첫 거부 직후인 5월 14일 자체 [단순화 계획]을 발표했다. 골격은 BHP의 요구와 놀랍게 닮았다, Amplats를 별도 demerger로 분사, De Beers 다이아몬드 사업 매각·분사, 메탈러지컬 석탄 자산 매각(호주), 니켈 사업 매각, 결과적으로 [구리·철광석·작물 영양소(crop nutrients) 중심의 단순화된 Anglo]만 남기는 그림. 메시지는 명확했다, \"BHP가 분사하라고 한 자산을, 우리가 우리 시점에 우리 방식으로, 우리 주주에게 더 유리한 조건으로 직접 분사하겠다\". 이른바 [방어적 자기 구조조정 (Defensive Self-Restructuring)]. BHP의 인수 논리에서 핵심 부가가치를 사실상 무력화한 카드.",
    "BHP는 5월 7일 두 번째 제안($27.53/주, £34B), 5월 22일 세 번째 제안($30.91/주, £38.6B)으로 가격을 올렸지만 구조(선결 분사)는 양보하지 않았다. Anglo 이사회는 세 차례 모두 거부했고, 핵심 불만은 [가격이 아니라 구조]였다. PUSU 마감 시한이 5월 29일로 잡혀 있었고 Anglo가 추가 연장 요청을 거부하자, BHP는 같은 날 \"BHP-Anglo 결합이 BHP 주주에게 충분한 가치 창출을 보장하지 않는다\"며 자진 철수를 선언했다. UK Takeover Code 제35조 [6개월 재접근 금지 룰(6-Month Cooldown)]에 따라 BHP는 2024년 11월 29일까지 Anglo에 재접근 불가, 그 사이 Anglo는 자체 구조조정을 가속화해 9월 석탄 매각, 11월 Amplats(Valterra Platinum) demerger를 실행하며 BHP가 재진입할 표적 자체를 분해했다.",
  ],

  dealSummary: {
    dealValueDisplay: "최종 제안 £38.6B (약 $49B, 자진 철수)",
    acquirerName: "BHP Group Limited",
    targetName: "Anglo American plc",
    announcedDisplay: "2024년 4월 25일",
    closedDisplay: "2024년 5월 29일 (BHP 자진 철수)",
    country: "호주/영국/남아공",
  },

  executiveSummary: [
    "[4주짜리 적대적 공세] 2024년 4월 25일 BHP의 비공식 접촉 공개 → 5월 29일 자진 철수, 단 34일.",
    "[세 차례 입찰 인상] $39B → $43B → $49B (주당 $25.08 → $27.53 → $30.91, 모두 전액 주식 교환).",
    "[선결 조건부 사전 분사 구조] BHP는 합병 클로징 전에 Anglo가 Amplats(남아공 백금)와 Kumba Iron Ore(남아공 철광석)를 Anglo 주주에게 분사하라고 요구. 남아공 정치·규제 노출 회피 목적.",
    "[남아공 PIC·정부 반발] PIC(공무원연금, Anglo 지분 약 7%)는 분사 시 남아공 자산 가치 하락·일자리·BEE 이행 우려로 BHP안 반대.",
    "[Anglo의 방어 카드] 5월 14일 자체 [단순화 계획] 발표, $13B 규모, Amplats 분사·De Beers 매각·석탄 매각·니켈 매각. \"BHP가 시키는 일을 우리가 우리 방식으로 더 잘하겠다\".",
    "[Anglo 세 차례 거부] 가격이 아니라 [구조 위험(structural risk)]이 이유. 두 개의 사전 분사를 합병과 동시에 진행하는 3-track 거래의 실행 위험이 핵심 불만.",
    "[UK Takeover Panel PUSU] Put Up or Shut Up 마감 5월 29일 17:00. Anglo가 연장 요청 거부 → BHP 자진 철수.",
    "[6-Month Cooldown] UK Takeover Code 제35조에 따라 BHP는 2024년 11월 29일까지 재접근 불가. 그 사이 Anglo가 자체 구조조정 가속, BHP 재진입의 표적 자체가 분해됨.",
  ],

  industryOverview: {
    body: "2024년 글로벌 광업 산업은 두 개의 사이클이 정면 충돌하고 있었다. [상승 사이클: 구리·니켈·리튬 등 에너지 전환 금속]은 전기차·재생에너지·데이터센터 수요 폭증으로 사상 최고가. [하락 사이클: PGM(백금·팔라듐)·다이아몬드]는 자동차 배출 규제 변화·합성 다이아 침투로 시클리컬 저점. 다각화된 광업사일수록 [구리에 집중하기 위해 PGM·다이아몬드·석탄을 잘라내는 단순화 압력]에 직면했다. BHP는 2015년 South32 분사로 이미 단순화된 상태였고, Anglo는 다각화 그대로였다, BHP-Anglo 합병은 이 차이를 한 번에 해소하는 거래 구조였다.",
    metrics: [
      { label: "LME 구리 가격 (2024년 5월 정점)", value: "약 $11,000/톤", sub: "사상 최고치, 전기화 수요 폭증" },
      { label: "BHP-Anglo 결합 시 글로벌 구리 점유율", value: "약 10%+", sub: "세계 1위 구리 생산자 등극" },
      { label: "BHP 최종 제안 규모", value: "£38.6B (약 $49B)", sub: "2024년 5월 22일 세 번째 제안" },
      { label: "Anglo 남아공 자산 비중", value: "약 35%+", sub: "Amplats + Kumba + 기타 남아공 광산" },
    ],
    subBody:
      "구리 자산 보유는 향후 10년 광업 산업의 핵심 변수. BHP는 칠레 Escondida(세계 1위 구리 광산, 57.5% 지분)·Spence·Pampa Norte 외 추가 구리 노출 확대에 사활을 걸었고, Anglo는 칠레 Collahuasi(44%, Glencore 44%와 공동)·Los Bronces·페루 Quellaveco 등 세계급 구리 포트폴리오를 보유한 [거의 유일한 인수 표적]. Glencore·Rio Tinto·Vale 모두 이 거래를 주목한 이유는 BHP-Anglo가 성사되면 글로벌 구리 시장의 가격 결정력이 단일 기업으로 쏠리기 때문.",
    players: [
      { name: "BHP Group", role: "세계 최대 광업사(시총 기준), 적대적 인수 시도자" },
      { name: "Anglo American plc", role: "방어 대상, 칠레 구리·남아공 PGM·다이아몬드(De Beers)·철광석 보유" },
      { name: "Public Investment Corporation (PIC)", role: "남아공 공무원연금, Anglo 지분 약 7%, 분사 반대 핵심 세력" },
      { name: "남아공 광물자원부", role: "Mining Charter·BEE 이행·로열티 규제 권한 보유, 거래 비공식 압박" },
      { name: "UK Takeover Panel", role: "PUSU 마감·6개월 cooldown 룰 적용, 거래 절차 감독" },
      { name: "Glencore", role: "잠재 경쟁 인수자로 시장에서 거론, 실제 입찰 미참여" },
    ],
  },

  companyOverview: {
    targetName: "Anglo American plc",
    body: "Anglo American은 1917년 남아공 요하네스버그에서 Ernest Oppenheimer가 설립한 다각화 광업사로, 현재 본사는 런던, LSE·JSE 이중 상장. 6대 사업부는 [① Copper (칠레 Collahuasi·Los Bronces, 페루 Quellaveco)], [② Iron Ore (남아공 Kumba 약 70% + 브라질 Minas-Rio)], [③ Platinum Group Metals (Amplats 약 79%)], [④ Diamonds (De Beers 85%)], [⑤ Steelmaking Coal (호주)], [⑥ Nickel & Crop Nutrients(인광석 Woodsmith 프로젝트)]. 2023년 매출 약 $30.7B, EBITDA 약 $10B, 그러나 De Beers $2.3B 감액과 PGM·다이아몬드 가격 하락으로 순이익 큰 폭 감소. 남아공 자산은 역사적 핵심이자 [정치·규제 부담]의 원천으로, 글로벌 광업사 인수 시 가장 큰 걸림돌.",
    metrics: [
      { label: "설립", value: "1917년 (요하네스버그)", sub: "Ernest Oppenheimer 창업" },
      { label: "주요 상장", value: "LSE·JSE 이중 상장", sub: "본사 런던, 등기 영국·남아공" },
      { label: "FY2023 매출", value: "약 $30.7B", sub: "PGM·다이아몬드 가격 하락으로 전년 대비 -13%" },
      { label: "주요 자산", value: "구리·철광석·PGM·De Beers·석탄·니켈", sub: "다각화 광업사" },
      { label: "남아공 자산 비중", value: "약 35%+", sub: "Amplats·Kumba·기타 남아공 광산" },
      { label: "구리 생산 (2023)", value: "약 826kt", sub: "Quellaveco 신규 가동 효과" },
    ],
    revenueBreakdown: [
      { name: "Copper (구리)", pct: 28, color: "bg-orange-600", amt: "약 $8.6B" },
      { name: "Iron Ore (Kumba + Minas-Rio)", pct: 24, color: "bg-red-600", amt: "약 $7.4B" },
      { name: "PGMs (Amplats)", pct: 16, color: "bg-slate-500", amt: "약 $4.9B" },
      { name: "Diamonds (De Beers)", pct: 14, color: "bg-blue-500", amt: "약 $4.3B" },
      { name: "Steelmaking Coal", pct: 12, color: "bg-zinc-700", amt: "약 $3.7B" },
      { name: "Nickel & Crop Nutrients", pct: 6, color: "bg-emerald-600", amt: "약 $1.8B" },
    ],
    revenueNote: "FY2023 추정 세그먼트 매출 비중. 출처: Anglo American 2023 Annual Report 기반 재구성.",
    financials: [
      { year: "FY2019", revenue: 29900, cogs: 18500, grossProfit: 11400, sga: 1700, operatingIncome: 6300, ebitda: 10000 },
      { year: "FY2020", revenue: 30900, cogs: 18200, grossProfit: 12700, sga: 1800, operatingIncome: 6800, ebitda: 9800 },
      { year: "FY2021", revenue: 41600, cogs: 21000, grossProfit: 20600, sga: 1900, operatingIncome: 15500, ebitda: 20600 },
      { year: "FY2022", revenue: 35100, cogs: 22000, grossProfit: 13100, sga: 2100, operatingIncome: 8500, ebitda: 14500 },
      { year: "FY2023", revenue: 30700, cogs: 21500, grossProfit: 9200, sga: 2200, operatingIncome: 3900, ebitda: 10000 },
    ],
    financialsNote:
      "단위: USD 백만($M). 출처: Anglo American Annual Reports 2019~2023. FY2021은 구리·철광석 가격 정점 효과로 EBITDA 사상 최고치. FY2023은 PGM·다이아몬드 가격 급락 + De Beers $2.3B 감액으로 순이익 큰 폭 감소.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
  },

  controlBattleOverview: {
    body: "2024년 4월 25일~5월 29일, BHP가 Anglo American에 4주간의 적대적 공세를 펼쳤다. 핵심 무기는 [선결 조건부 사전 분사], BHP는 합병 클로징 전에 Anglo가 남아공 자회사 Amplats와 Kumba를 분사하라고 요구해 남아공 정치·규제 노출을 우회하려 했다. Anglo는 세 차례 가격 인상($39B → $43B → $49B)에도 거절했고, 결정적 방어 카드는 5월 14일 발표한 자체 단순화 계획, \"BHP가 분사하라고 한 자산을 우리가 더 잘 분사하겠다\"는 메시지였다. 남아공 PIC·정부의 정치적 압박, UK Takeover Panel의 PUSU 마감, 6개월 cooldown 룰까지 겹치며 BHP는 5월 29일 자진 철수했고 11월 cooldown 만료 후에도 돌아오지 않았다. [방어 측이 가격이 아닌 구조와 자체 구조조정 카드로 사상 최대급 광업 적대적 M&A를 무산시킨 사례].",
    catalyst:
      "LME 구리 가격이 2024년 5월 톤당 $11,000를 돌파하며 사상 최고치를 기록, 전기화 수요로 향후 10년 구조적 공급 부족이 확실시되는 가운데 BHP는 \"기존 광산 인수가 가장 빠른 구리 노출 확대 경로\"라는 판단으로 Anglo의 칠레 구리 자산(Collahuasi·Los Bronces·Quellaveco)을 노렸다. 동시에 Anglo의 남아공 자회사(Amplats·Kumba)는 [원치 않는 사회·정치 리스크]였고, BHP는 [사전 분사 선결 조건]이라는 대담한 구조로 이를 해결하려 했다.",
    attackerLabel: "BHP Group",
    defenderLabel: "Anglo American + 남아공 PIC·정부",
    battleMoves: [
      {
        date: "2024-04-25",
        actor: "BHP Group",
        side: "attack",
        move: "비공식 합병 제안 1차 — $39B (£31B), 사전 분사 선결 조건 포함",
        detail:
          "BHP가 Anglo American 이사회에 전액 주식 교환 합병을 비공식 제안. 주당 약 $25.08(£25.08), 총 가치 £31B(약 $39B). 핵심 조건은 [합병 클로징 전에 Anglo가 Amplats와 Kumba Iron Ore를 Anglo 주주에게 분사]. BHP는 남아공 자산 직접 보유 회피, Anglo 주주는 BHP 신주 + Amplats·Kumba 분사 주식 합계를 받는 구조.",
        financialImpact: "Anglo American 주가 +16% 급등 (런던 거래), £24.04 → £27.83",
        weapon: "선결 조건부 사전 분사 (Pre-condition Spin-off)",
      },
      {
        date: "2024-04-26",
        actor: "Anglo American 이사회",
        side: "defense",
        move: "1차 제안 만장일치 거부 — \"highly unattractive\"",
        detail:
          "Anglo 이사회는 \"제안이 Anglo의 내재가치와 미래 전망을 근본적으로 저평가하고 있으며, 사전 분사 선결 조건이 Anglo 주주에게 [용납할 수 없는 수준의 실행·완료 위험(unacceptable execution & completion risk)]을 부과한다\"며 만장일치 거부. 가격이 아니라 [구조가 거부 사유]임을 명시.",
        weapon: "이사회 결의 + 구조 위험 프레이밍",
      },
      {
        date: "2024-05-07",
        actor: "BHP Group",
        side: "attack",
        move: "2차 제안 — $43B (£34B), 교환 비율 인상",
        detail:
          "BHP가 주당 $27.53로 약 10% 인상한 2차 제안 제출. 총 가치 £34B(약 $43B). 구조(선결 분사)는 유지. BHP는 \"가격 인상으로 구조 위험을 보상한다\"는 논리를 펼쳤지만, Anglo의 핵심 불만(분사 실행 위험)을 해소하지 못함.",
        financialImpact: "Anglo 주가 추가 상승, 시장 기대치 상승",
        weapon: "가격 인상 (Rising-Premium Bid)",
      },
      {
        date: "2024-05-13",
        actor: "Anglo American 이사회",
        side: "defense",
        move: "2차 제안 거부",
        detail:
          "Anglo 이사회 다시 만장일치 거부. \"가격 인상에도 불구하고 핵심 구조 결함이 그대로\"라며, [두 개의 사전 분사를 합병과 동시에 진행하는 3-track 거래]의 완료 가능성·일정 위험을 거부 사유로 명시.",
        weapon: "구조 위험 거부 (반복)",
      },
      {
        date: "2024-05-14",
        actor: "Anglo American",
        side: "defense",
        move: "[방어적 자기 구조조정] 발표 — $13B 단순화 계획",
        detail:
          "BHP 2차 거부 [다음 날], Anglo가 자체 단순화 계획을 공식 발표. [①] Amplats demerger(별도 상장 분사), [②] De Beers 매각·분사, [③] 호주 메탈러지컬 석탄 자산 매각, [④] 니켈 사업 매각. 결과적으로 [구리·철광석·작물 영양소(Woodsmith) 중심의 단순화된 Anglo]만 남기는 그림. 메시지: \"BHP가 시키는 일을 우리 시점에 우리 방식으로 더 잘 하겠다\". BHP의 인수 부가가치를 근본적으로 무력화한 [방어적 자기 구조조정 (Defensive Self-Restructuring)] 카드.",
        financialImpact: "Anglo 주가 추가 +3%, 시장이 자체 구조조정 신뢰",
        weapon: "방어적 자기 구조조정 + 우리가 더 잘한다 프레이밍",
      },
      {
        date: "2024-05-20",
        actor: "BHP Group",
        side: "attack",
        move: "3차 제안 — $49B (£38.6B), 최종 인상",
        detail:
          "BHP가 주당 $30.91로 약 12% 추가 인상한 3차 제안 제출. 총 가치 £38.6B(약 $49B). 미공개 가격 기준 4월 23일 종가 대비 약 47% 프리미엄. 그러나 구조(사전 분사 선결 조건)는 여전히 유지. BHP의 입찰 전략은 [Rising-Premium]으로 가격으로 압박하되 구조는 양보 안 함.",
        weapon: "최종 가격 인상",
      },
      {
        date: "2024-05-22",
        actor: "Anglo American 이사회",
        side: "defense",
        move: "3차 제안 거부 + PUSU 7일 연장 (28일 마감 → 5월 29일)",
        detail:
          "Anglo 이사회 세 번째 만장일치 거부. \"세 번째 가격 인상에도 핵심 구조 결함이 그대로\"라며 동일 사유 반복. UK Takeover Panel에 PUSU 마감 7일 연장을 요청해 5월 29일 17:00로 연기. Anglo는 \"BHP가 구조를 변경하면 추가 협상 가능\"이라는 신호를 보냈으나, 구조 양보 없는 단순 가격 인상에는 응하지 않겠다는 명확한 입장.",
        weapon: "구조 양보 요구 + PUSU 시한 활용",
      },
      {
        date: "2024-05-29",
        actor: "BHP Group",
        side: "neutral",
        move: "자진 철수 — PUSU 마감일, 추가 연장 거부",
        detail:
          "Anglo가 BHP의 PUSU 추가 연장 요청을 거부. BHP는 같은 날 17:00 마감 전 [\"BHP-Anglo 결합이 BHP 주주에게 충분한 가치 창출을 보장하지 않는다\"]며 공식 자진 철수. UK Takeover Code 제35조에 따라 [6개월 재접근 금지(Cooldown)]가 자동 발효, BHP는 2024년 11월 29일까지 Anglo에 재접근 불가. 그 사이 Anglo는 자체 구조조정을 가속화해 9월 석탄 매각 발표, 11월 Amplats demerger(Valterra Platinum) 실행, BHP가 재진입할 표적 자체가 분해됐다.",
        financialImpact: "Anglo 주가 -3% (프리미엄 기대 소멸), 그러나 자체 구조조정 기대로 낙폭 제한",
        weapon: "자진 철수 + UK Takeover Code Cooldown",
      },
    ],
    financialWeapons: [
      {
        name: "선결 조건부 사전 분사 (Pre-condition Spin-off)",
        side: "attack",
        usedBy: "BHP Group",
        description:
          "합병 클로징 전에 표적 회사가 특정 자산을 주주에게 분사하도록 요구하는 구조. BHP는 Anglo가 남아공 Amplats·Kumba를 사전 분사하면 BHP-Anglo 결합 법인이 남아공 정치·규제·BEE 노출을 회피할 수 있다는 논리. 그러나 Anglo 주주 입장에서는 두 개의 분사 + 합병을 동시에 진행하는 [3-track 거래]의 완료 가능성·일정 위험을 떠안아야 함. 가장 큰 구조 결함이자 Anglo가 세 차례 거부한 핵심 사유.",
        effectiveness: "blocked",
      },
      {
        name: "Rising-Premium Bid Strategy",
        side: "attack",
        usedBy: "BHP Group",
        description:
          "$39B → $43B → $49B로 4주간 세 차례 가격을 올리는 압박 전략. 각 거부 후 약 10~12% 인상. 가격으로 Anglo 주주들을 직접 압박해 이사회 거부에도 불구하고 주주 지지를 끌어내려는 의도. 그러나 Anglo의 거부 사유가 가격이 아닌 [구조]였기 때문에, 가격 인상만으로는 협상 돌파가 불가능했다. BHP는 마지막 순간까지 구조 양보를 거부했다.",
        effectiveness: "blocked",
      },
      {
        name: "남아공 정치·규제 압박 (PIC + 정부)",
        side: "defense",
        usedBy: "남아공 Public Investment Corporation + 광물자원부",
        description:
          "PIC는 남아공 공무원연금으로 Anglo 지분 약 7% 보유, 5대 주주. PIC는 \"BHP안의 사전 분사가 Amplats·Kumba 주가 하락, 남아공 일자리·BEE 이행 의무 약화를 초래한다\"며 공개 반대. 남아공 광물자원부도 비공식적으로 BHP의 사전 분사 구조에 부정적 신호를 보냈다. 남아공 정부 승인 없이는 광업 자산 거래 자체가 불가능, 정치 리스크가 BHP의 구조를 사실상 봉쇄.",
        effectiveness: "effective",
      },
      {
        name: "방어적 자기 구조조정 (Defensive Self-Restructuring)",
        side: "defense",
        usedBy: "Anglo American",
        description:
          "BHP가 분사하라고 요구한 자산을 [Anglo 본인이 자기 방식으로 직접 분사·매각]하겠다고 발표하는 카드. 5월 14일 발표된 $13B 규모 단순화 계획은 Amplats demerger·De Beers 매각·석탄 매각·니켈 매각으로 BHP의 인수 부가가치 핵심을 무력화. \"우리가 더 잘한다(we'll do it ourselves, better)\" 프레이밍으로 주주들에게 합병 프리미엄 대신 자체 구조조정 가치를 제시. 이 딜에서 가장 결정적인 방어 무기.",
        effectiveness: "decisive",
      },
      {
        name: "UK Takeover Panel PUSU (Put Up or Shut Up)",
        side: "neutral",
        usedBy: "UK Takeover Panel",
        description:
          "UK Takeover Code 제2.6조 [PUSU 룰]은 잠재 인수자가 표적 회사에 대한 의도를 공개한 후 28일 이내에 [정식 인수 의사 발표(firm intention to make an offer) 또는 철수 선언]을 해야 함을 강제. 협상을 무기한 끌어 표적 회사 경영을 마비시키는 것을 막는 안전장치. BHP는 4월 25일 의도 공개 → 5월 22일 28일 마감, Anglo가 7일 연장만 허용 → 5월 29일 최종 마감. 시간 압박이 BHP에 불리하게 작용, 구조 협상 시간 부족.",
        effectiveness: "effective",
      },
      {
        name: "6-Month Cooldown Rule (재접근 금지)",
        side: "neutral",
        usedBy: "UK Takeover Code 제35조",
        description:
          "인수자가 PUSU 마감에 철수 선언한 경우, 이후 6개월간 동일 표적에 재접근(공개매수·합병 제안 등)이 금지되는 룰. BHP는 5월 29일 철수로 2024년 11월 29일까지 Anglo 재접근 불가. 이 6개월 사이 Anglo는 9월 석탄 매각, 11월 Amplats(Valterra Platinum) demerger를 실행해 [BHP가 재진입할 표적 자체를 분해]. BHP가 11월 만료 후에도 돌아오지 않은 핵심 이유.",
        effectiveness: "decisive",
      },
    ],
    turningPoint: {
      date: "2024-05-14",
      event: "Anglo의 [방어적 자기 구조조정] 발표 — $13B 단순화 계획",
      detail:
        "BHP 2차 거부 다음 날, Anglo가 Amplats demerger·De Beers 매각·석탄 매각·니켈 매각을 포함한 $13B 자체 단순화 계획을 공식 발표. BHP의 인수 부가가치 핵심(남아공 자산 분리 + 구리 중심 단순화)을 Anglo가 직접 실행하겠다고 선언한 셈. 이 시점 이후 시장은 \"BHP가 시키는 일을 Anglo가 자기 시점에 자기 방식으로 더 유리하게 할 수 있다\"는 시각으로 돌아섰고, Anglo 이사회의 세 차례 거부 명분이 결정적으로 강해졌다. BHP가 가격을 올려도 구조 협상에서 더 이상 양보를 끌어낼 수 없는 상황.",
    },
    verdict: {
      winner: "defense",
      winnerLabel: "Anglo American + 남아공 PIC·정부",
      margin: "BHP 자진 철수, 6개월 cooldown 후에도 미복귀",
      note:
        "Anglo American이 가격 인상이 아닌 [구조와 자체 구조조정]으로 사상 최대급 광업 적대적 M&A를 막아냈다. 핵심은 5월 14일 발표한 $13B 단순화 계획, BHP의 인수 부가가치 자체를 Anglo가 직접 실행하겠다고 선언함으로써 합병 프리미엄을 무력화. 남아공 PIC·정부의 정치적 압박도 결정적, UK Takeover Panel의 PUSU 마감과 6개월 cooldown 룰이 시간 압박을 BHP에 불리하게 작용시켰다. 결과적으로 Anglo는 9월 석탄 매각, 11월 Amplats(Valterra Platinum) demerger를 실행해 [BHP가 재진입할 표적 자체를 분해]하는 데 성공했다.",
    },
    priceImpact: {
      preContest: "£24.04 (2024.4.23 종가, BHP 접촉 공개 전)",
      peak: "£28.84 (2024.5.23 종가, BHP 3차 제안 직후)",
      postContest: "£24.40 (2024.5.30 종가, BHP 철수 직후)",
      note:
        "Anglo 주가는 BHP 접촉 공개 직후 +16% 급등 → 세 차례 인상으로 추가 상승했다가 BHP 철수로 -3% 하락. 그러나 자체 구조조정 기대로 낙폭 제한, 4월 23일 수준으로 돌아온 셈. 6개월 후인 2024년 11월 Amplats demerger 발표 시점에는 £24~25 수준 유지, 자체 구조조정이 시장 기대치를 일부 충족했음을 시사.",
    },
  },

  dealStructure: {
    body: "BHP의 제안 구조는 [전액 주식 교환 + 사전 분사 선결 조건]의 복합 구조였다. Anglo 주주는 BHP 신주를 받되, 합병 클로징 전에 Anglo가 보유한 남아공 자회사 Amplats(약 79% 지분)과 Kumba Iron Ore(약 70% 지분)를 [Anglo 주주에게 직접 분사]하는 두 개의 별도 거래가 선행돼야 함. 결과적으로 Anglo 주주는 [BHP 신주 + Amplats 분사 주식 + Kumba 분사 주식] 세 가지를 합산해 받는 구조. BHP-Anglo 결합 법인은 구리(칠레·페루)·철광석(브라질 Minas-Rio)·메탈러지컬 석탄·니켈·Woodsmith(작물 영양소)만 보유, 남아공 자산 0. Anglo 이사회는 이 구조의 [3-track 동시 진행 실행 위험]을 세 차례 거부 사유로 명시했다. BHP는 가격을 세 차례 올렸지만 구조는 양보하지 않았고, Anglo의 5월 14일 자체 단순화 계획으로 합병 부가가치가 무력화되며 5월 29일 철수.",
    preOwnership: {
      nodes: [
        { id: "bhp_pre", label: "BHP Group", sub: "ASX·LSE·JSE 상장, 세계 최대 광업사", type: "acquirer" },
        { id: "anglo_pre", label: "Anglo American plc", sub: "LSE·JSE 이중 상장, 다각화 광업사", type: "target" },
        { id: "amplats_pre", label: "Anglo Platinum (Amplats)", sub: "Anglo 약 79% 보유, 남아공 PGM", type: "entity" },
        { id: "kumba_pre", label: "Kumba Iron Ore", sub: "Anglo 약 70% 보유, 남아공 철광석", type: "entity" },
        { id: "debeers_pre", label: "De Beers", sub: "Anglo 85% + Botswana 정부 15%", type: "entity" },
        { id: "pic_pre", label: "PIC (남아공 공무원연금)", sub: "Anglo 약 7% 보유, 5대 주주", type: "government" },
        { id: "pub_pre", label: "일반 주주", sub: "Anglo 잔여 지분", type: "public" },
      ],
      edges: [
        { from: "bhp_pre", to: "anglo_pre", label: "적대적 합병 제안 (3차에 걸쳐 인상)" },
        { from: "anglo_pre", to: "amplats_pre", label: "79% 지배" },
        { from: "anglo_pre", to: "kumba_pre", label: "70% 지배" },
        { from: "anglo_pre", to: "debeers_pre", label: "85% 지배" },
        { from: "pic_pre", to: "anglo_pre", label: "7% (분사 반대)" },
        { from: "pub_pre", to: "anglo_pre", label: "일반 주주" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bhp_post", label: "BHP Group", sub: "합병 시도 자진 철수 (2024.5.29)", type: "acquirer" },
        { id: "anglo_post", label: "Anglo American plc", sub: "독립 유지, 자체 구조조정 진행", type: "target" },
        { id: "amplats_post", label: "Valterra Platinum (구 Amplats)", sub: "2024.11 demerger 완료", type: "entity" },
        { id: "debeers_post", label: "De Beers", sub: "매각·분사 진행 중", type: "entity" },
        { id: "coal_post", label: "호주 메탈러지컬 석탄", sub: "2024.9 매각 발표 ($3.3B)", type: "entity" },
        { id: "pub_post", label: "일반 주주", sub: "Anglo 잔여 지분 + Valterra 분사 주식", type: "public" },
      ],
      edges: [
        { from: "bhp_post", to: "anglo_post", label: "철수 — 6개월 cooldown" },
        { from: "anglo_post", to: "amplats_post", label: "demerger 완료 (2024.11)" },
        { from: "anglo_post", to: "debeers_post", label: "매각·분사 진행" },
        { from: "anglo_post", to: "coal_post", label: "매각 (2024.9, $3.3B)" },
        { from: "pub_post", to: "anglo_post", label: "독립 유지" },
      ],
    },
    keyTerms: [
      { label: "1차 제안 (2024.4.25)", value: "주당 $25.08, 총 £31B (약 $39B)", accent: true },
      { label: "2차 제안 (2024.5.7)", value: "주당 $27.53, 총 £34B (약 $43B)", accent: true },
      { label: "3차 제안 (2024.5.20)", value: "주당 $30.91, 총 £38.6B (약 $49B)", accent: true },
      { label: "거래 형태", value: "전액 주식 교환 적대적 합병" },
      { label: "사전 분사 선결 조건", value: "Amplats + Kumba를 Anglo 주주에게 분사", accent: true },
      { label: "3-track 거래 구조", value: "Amplats 분사 + Kumba 분사 + 합병 동시 진행" },
      { label: "PUSU 마감", value: "2024.5.29 17:00 (UK Takeover Panel)" },
      { label: "6개월 재접근 금지", value: "2024.5.29 ~ 2024.11.29 (UK Takeover Code 제35조)", accent: true },
      { label: "Anglo 자체 구조조정 (2024.5.14)", value: "$13B 단순화 계획, Amplats·De Beers·석탄·니켈" },
      { label: "최종 결과", value: "BHP 자진 철수 (2024.5.29), 11월 cooldown 만료 후에도 미복귀", accent: true },
    ],
  },

  advisors: {
    body: "사상 최대급 광업 적대적 M&A 시도인 만큼 양 측에 글로벌 톱급 투자은행과 로펌이 총동원됐다. 특히 Anglo American은 세 곳의 글로벌 IB(Centerview·Goldman Sachs·Morgan Stanley)를 동시에 자문에 끌어들이는 [3-bank 방어 라인]을 구축한 점이 특징적. 사전 분사 선결 조건의 구조 위험 분석과 자체 단순화 계획 설계에 IB 자문 역량이 결정적이었다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "BHP Group (인수 시도측)",
        initials: "BHP",
        bg: "bg-orange-700",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (Lead)", roleType: "financial", note: "합병 구조 설계·교환 비율 산정·세 차례 가격 인상 전략" },
          { firm: "Centerview Partners", role: "재무 자문 (Co-Lead)", roleType: "financial", note: "주주 직접 설득·기관 투자자 커뮤니케이션" },
          { firm: "Citigroup", role: "재무 자문", roleType: "financial", note: "보조 자문, 자본시장 전략" },
          { firm: "Barclays", role: "재무 자문", roleType: "financial", note: "보조 자문" },
          { firm: "UBS", role: "재무 자문", roleType: "financial", note: "보조 자문" },
          { firm: "Linklaters", role: "법무 자문", roleType: "legal", note: "UK Takeover Code 자문, PUSU 절차 대응, 사전 분사 구조 설계" },
        ],
      },
      {
        side: "target",
        sideLabel: "Anglo American (방어측)",
        initials: "AAL",
        bg: "bg-emerald-700",
        advisors: [
          { firm: "Centerview Partners", role: "재무 자문 (Lead)", roleType: "financial", note: "방어 전략 총괄, 자체 단순화 계획 설계" },
          { firm: "Goldman Sachs", role: "재무 자문", roleType: "financial", note: "독립 가치 평가, 구조 위험 분석" },
          { firm: "Morgan Stanley", role: "재무 자문", roleType: "financial", note: "주주 커뮤니케이션, 남아공 PIC 대응" },
          { firm: "Robey Warshaw", role: "재무 자문", roleType: "financial", note: "보조 자문, UK 인수방어 경험" },
          { firm: "Linklaters", role: "법무 자문", roleType: "legal", note: "UK 인수방어 법률 자문, PUSU 시한 활용" },
        ],
      },
    ],
    disclaimer:
      "주: BHP·Anglo 양 측이 Goldman Sachs와 Centerview Partners를 모두 활용한 것은 부서별 [Chinese Wall] 분리 운영의 사례. UK Takeover Panel은 동일 IB의 양측 자문 자체는 허용하되 정보 차단을 엄격히 감독. Hogan Lovells는 양측 모두 자문에 들어가지 않음. 자문사 정보는 양사 공식 보도자료(2024.4.25 ~ 2024.5.29) 기반.",
  },

  valuation: {
    body: "BHP의 세 차례 입찰 가치 궤적은 [$39B → $43B → $49B], 최종 제안은 4월 23일 종가 대비 약 47% 프리미엄. 그러나 핵심은 [가격이 아니라 구조]였다. Anglo 이사회는 \"세 번째 가격 인상에도 핵심 구조 결함이 그대로\"라며 모든 거부 사유를 가격이 아닌 [사전 분사 실행 위험]으로 명시. BHP의 제안 EV/EBITDA는 FY2023 약 10x 수준, 자원 슈퍼사이클 정점 대비 낮은 배수였지만 Anglo는 \"PGM·다이아몬드 시클리컬 저점에서 EBITDA가 일시 압축됐으므로 정상화 EBITDA 기준으로는 12~14x를 받아야 한다\"고 반박. 동시에 5월 14일 자체 구조조정 계획으로 \"우리가 직접 자기 분사하면 합병 프리미엄 없이도 주주 가치를 실현할 수 있다\"는 대안을 제시.",
    rows: [
      { item: "1차 제안 EV (2024.4.25)", val: "약 $39B (£31B)", note: "주당 $25.08, 전액 주식 교환", accent: true },
      { item: "2차 제안 EV (2024.5.7)", val: "약 $43B (£34B)", note: "주당 $27.53, +9.8% 인상" },
      { item: "3차 제안 EV (2024.5.20)", val: "약 $49B (£38.6B)", note: "주당 $30.91, 4.23 종가 대비 +47%", accent: true },
      { item: "EV / EBITDA (3차 제안 기준)", val: "약 10x", note: "Anglo FY2023 EBITDA $10B 기준" },
      { item: "Anglo 시가총액 (2024.4.23, 접촉 공개 전)", val: "약 £30B", note: "BHP 접촉 직전 종가" },
      { item: "LME 구리 가격 (2024.5 정점)", val: "약 $11,000/톤", note: "사상 최고치, 인수 동인" },
      { item: "Anglo FY2023 매출", val: "약 $30.7B", note: "PGM·다이아몬드 가격 하락" },
      { item: "Anglo FY2023 EBITDA", val: "약 $10.0B", note: "De Beers $2.3B 감액 제외" },
      { item: "Anglo 자체 단순화 계획 규모", val: "약 $13B", note: "Amplats·De Beers·석탄·니켈 매각·분사" },
      { item: "Anglo 주가 정점 (2024.5.23)", val: "£28.84", note: "BHP 3차 제안 직후" },
      { item: "Anglo 주가 (BHP 철수 후, 2024.5.30)", val: "£24.40", note: "프리미엄 소멸 -3%", accent: true },
    ],
    disclaimer: "주: 가격 수치는 BHP·Anglo 공식 보도자료 + LSE·JSE 종가 + LME 데이터 기반. EV/EBITDA 배수는 시장 추정.",
  },

  rationale: {
    buyer: {
      title: "BHP는 왜 $49B을 걸고 Anglo를 노렸나",
      initials: "BHP",
      bg: "bg-orange-700",
      points: [
        "[구리 슈퍼사이클 노출 단번에 확대] Anglo는 칠레 Collahuasi(44%)·Los Bronces·페루 Quellaveco 등 세계급 구리 자산을 보유한 거의 유일한 인수 표적. BHP는 기존 Escondida·Spence·Pampa Norte에 더해 [세계 1위 구리 생산자]로 단번에 등극 가능.",
        "[남아공 노출 회피] 사전 분사 선결 조건으로 Anglo의 남아공 자회사(Amplats·Kumba)를 합병 전에 분리. BHP-Anglo 결합 법인은 남아공 자산 0, 즉 BEE 의무·Mining Charter·SLP 등 남아공 정치·규제 리스크 완전 회피.",
        "[다각화 단순화 시너지] BHP는 2015년 South32 분사로 이미 단순화된 광업사. Anglo의 PGM·다이아몬드·석탄·니켈을 분사·매각으로 정리하면 [구리·철광석 중심]의 더 단순한 광업사가 탄생. PE식 [집중화 가치(focus value)] 논리.",
        "[기존 광산 인수 vs 신규 개발] 신규 구리 광산 개발은 환경 규제·원주민 협의로 10~15년 소요. 기존 광산 인수가 더 빠르고 확실한 구리 노출 경로. CEO Mike Henry의 핵심 논리.",
        "[전기화 시대 광업 1위 굳히기] 합병 시 시가총액 약 $200B+, 시장은 글로벌 광업 1위(BHP)와 2위(Anglo)의 결합으로 받아들였다. 광업 산업 통합기에 BHP가 주도권을 가져가는 거래.",
      ],
    },
    seller: {
      title: "Anglo는 왜 거부하고 어떻게 방어했나",
      initials: "AAL",
      bg: "bg-emerald-700",
      points: [
        "[구조 위험 거부 (가격이 아닌)] 사전 분사 선결 조건은 두 개의 별도 분사(Amplats·Kumba)와 합병을 동시에 진행하는 [3-track 거래]. 어느 하나가 지연·실패하면 전체 거래가 무산되는 [완료 위험(completion risk)]이 핵심 거부 사유. 세 번 거부 모두 동일 사유 반복.",
        "[방어적 자기 구조조정 카드] 5월 14일 발표한 $13B 단순화 계획으로 BHP의 인수 부가가치를 근본적으로 무력화. \"BHP가 시키는 일을 우리가 더 잘하겠다\" 프레이밍.",
        "[남아공 정치 기반 활용] PIC(남아공 공무원연금) 약 7% 지분 + 광물자원부의 비공식 반대 신호를 활용. 남아공 정부 승인 없이는 광업 자산 거래 자체가 불가능하다는 점이 BHP의 사전 분사 구조를 사실상 봉쇄.",
        "[UK Takeover Panel PUSU 시한 활용] 5월 22일 7일 연장만 허용 후 5월 29일 마감 고수. 추가 연장 거부로 BHP의 구조 협상 시간을 차단. 시간 압박이 BHP에 불리.",
        "[De Beers 카드 부각] De Beers는 Anglo 다각화의 상징이자 부담. Anglo가 자기 시점에 더 유리한 조건으로 De Beers를 매각·분사하면 BHP가 분사를 강요하는 것보다 주주 가치 실현이 더 큼.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2025-06",
    body: "BHP 철수 후 Anglo는 자체 단순화 계획을 빠르게 실행했다. 2024년 9월 호주 메탈러지컬 석탄 자산을 약 $3.3B에 Peabody Energy·BUMA 등에 매각, 2024년 11월 Anglo American Platinum(Amplats)을 [Valterra Platinum]으로 사명 변경 후 demerger 실행, 2025년 De Beers 매각·분사 절차 진행 중. BHP는 6개월 cooldown이 만료된 2024년 11월 29일 이후에도 Anglo에 재접근하지 않았다, 표적 자체가 분해됐기 때문. BHP는 별도로 캐나다 Filo Corp(아르헨티나 구리 자산) 인수를 Lundin Mining과 공동으로 진행하는 등 단독 성장 경로로 전환. 광업 업계는 이 사례를 [방어적 자기 구조조정으로 사상 최대급 광업 적대적 M&A를 막은 모범 사례]로 기록.",
    overallVerdict:
      "Anglo 방어 완승, 가격이 아닌 [구조와 자체 구조조정]으로 BHP를 막아낸 모범 사례",
    positives: [
      "[Anglo 독립 유지] BHP의 4주 공세를 가격이 아닌 구조 거부로 막아냄. 세 차례 거부 사유 일관성이 신뢰 구축.",
      "[자체 구조조정 가속] BHP 공세가 역설적으로 Anglo의 자체 단순화 계획 추진력을 가속, 9월 석탄 매각·11월 Amplats demerger 신속 실행.",
      "[주주 가치 실현 대안 제시] 합병 프리미엄(약 47%) 없이도 자체 구조조정으로 주주 가치를 실현할 수 있다는 시그널을 시장에 제시.",
      "[방어 무기 표준화] 사전 분사 선결 조건이라는 공격 구조에 대한 [방어적 자기 구조조정] 대응 패턴이 광업·다각화 기업의 표준 방어 사례로 자리잡음.",
    ],
    risks: [
      "[자체 구조조정 실행 위험] Amplats demerger·De Beers 매각·석탄 매각·니켈 매각이 모두 일정대로 완수돼야 함. 일부 지연 시 시장 신뢰 훼손.",
      "[구리 슈퍼사이클 동력 유지 부담] BHP가 합병으로 한 번에 얻으려 했던 구리 노출을 Anglo는 자체 자산 개발(Quellaveco 확장·Woodsmith)로 채워야 함.",
      "[향후 재공세 가능성] 표적 분해로 BHP의 재공세 확률은 낮아졌지만, Glencore 등 다른 인수자가 단순화 완료 후 더 작은 규모로 재공세할 가능성.",
      "[남아공 자산 분리 후유증] Valterra Platinum demerger 후 Anglo와 남아공 정치적 관계 변화, BEE 의무 일부 이관에 따른 향후 분쟁 가능성.",
    ],
    editorNote:
      "이 거래의 핵심 교훈은 [구조가 가격을 이긴다]는 점이다. BHP는 4주간 가격을 $39B → $43B → $49B로 세 번 올렸지만, Anglo의 거부 사유는 한 번도 가격이 아니었다. [사전 분사 선결 조건이라는 구조 결함]이 일관된 거부 사유였고, 5월 14일 자체 구조조정 카드로 BHP의 인수 부가가치를 무력화한 시점이 결정적. 또 하나의 교훈은 [UK Takeover Code의 위력]이다. PUSU 마감이 BHP의 구조 협상 시간을 차단했고, 6개월 cooldown 룰이 BHP의 재공세 자체를 봉쇄했다. 광업·다각화 기업의 적대적 M&A 방어에서 [가격 인상 카드만으로는 구조 결함을 보상할 수 없다]는 점이 명확히 기록됐다.",
  },

  tombstone: {
    acquirerInitials: "BHP",
    acquirerBg: "bg-orange-700",
    targetInitials: "AAL",
    targetBg: "bg-emerald-700",
    acquirerName: "BHP Group Limited",
    targetName: "Anglo American plc",
    dealTitle: "사상 최대급 광업 적대적 M&A 시도 (자진 철수) / Largest-Ever Mining Hostile Bid (Withdrawn)",
    dealSize: "£38.6B 최종 제안 (약 $49B)",
    dealSizeUSD: "USD 49B proposed (all-stock, three rising bids: $39B → $43B → $49B)",
    evEbitda: "약 10x EBITDA (3차 제안 기준)",
    closeDate: "May 29, 2024 (Withdrawn)",
  },

  sources: [
    {
      id: 1,
      text: "Anglo American — Statement regarding possible offer for Anglo American plc (2024.4.25)",
      url: "https://www.angloamerican.com/media/press-releases/2024/25-04-2024",
    },
    {
      id: 2,
      text: "Anglo American — Rejection of BHP Proposal (2024.4.26)",
      url: "https://www.angloamerican.com/media/press-releases/2024/26-04-2024",
    },
    {
      id: 3,
      text: "Anglo American — Rejects further BHP proposal and extends PUSU deadline to 29 May 2024 (2024.5.22)",
      url: "https://www.angloamerican.com/media/press-releases/2024/22-05-2024",
    },
    {
      id: 4,
      text: "Anglo American — Response to BHP announcement and rejection of request for PUSU extension (2024.5.29)",
      url: "https://www.angloamerican.com/media/press-releases/2024/29-05-2024",
    },
    {
      id: 5,
      text: "Mining Technology — Anglo American rejects BHP's third takeover proposal (2024.5)",
      url: "https://www.mining-technology.com/news/anglo-american-rejects-bhp/",
    },
    {
      id: 6,
      text: "CNBC — BHP abandons bid to takeover Anglo American after multiple rejections (2024.5.29)",
      url: "https://www.cnbc.com/2024/05/29/anglo-american-and-bhp-group-fourth-takeover-bid-from-bhp-group-.html",
    },
    {
      id: 7,
      text: "Daily Maverick — Anglo American board rejects BHP takeover bid (2024.4.26)",
      url: "https://www.dailymaverick.co.za/article/2024-04-26-anglo-american-board-rejects-bhp-takeover-bid/",
    },
    {
      id: 8,
      text: "Anglo American — Year End Financial Report 2023",
      url: "https://www.angloamerican.com/~/media/Files/A/Anglo-American-Group-v9/PLC/media/press-release/releases/2024pr/annual-results-2023.pdf",
    },
    {
      id: 9,
      text: "Anglo American — Full Year Results 2024 (2025.2.20)",
      url: "https://www.angloamerican.com/media/press-releases/2025/20-02-2025",
    },
    {
      id: 10,
      text: "UK Takeover Panel — The Takeover Code (2024 edition, Rule 2.6 PUSU & Rule 35 Cooldown)",
    },
  ],

  seo: {
    title: "BHP × Anglo American 적대적 M&A 완전 해부 — $49B 4주 공세, 자체 구조조정으로 막은 사례",
    description:
      "2024년 4~5월 BHP가 Anglo American에 $39B → $43B → $49B 세 차례 인상하며 4주간 적대적 합병을 시도했지만, 사전 분사 선결 조건의 구조 위험 + Anglo의 자체 단순화 계획 + UK Takeover Panel PUSU 마감으로 자진 철수. 사상 최대급 광업 적대적 M&A를 가격이 아닌 [구조와 방어적 자기 구조조정]으로 막아낸 사례 완전 해부.",
    keywords: [
      "BHP Anglo American 적대적 M&A",
      "BHP Anglo American hostile bid",
      "구리 슈퍼사이클",
      "사전 분사 선결 조건",
      "UK Takeover Panel PUSU",
      "6개월 cooldown 룰",
      "방어적 자기 구조조정",
      "Anglo American 단순화 계획",
      "남아공 Mining Charter",
      "광업 M&A 방어",
      "Amplats demerger",
      "Valterra Platinum",
    ],
  },

  concepts: [
    {
      term: "선결 조건부 사전 분사 (Pre-condition Spin-off)",
      description:
        "합병 클로징 전에 표적 회사가 특정 자산을 주주에게 분사하도록 인수자가 요구하는 구조. BHP가 Anglo에 Amplats·Kumba 사전 분사를 요구한 것이 대표 사례. 인수자는 원치 않는 자산·리스크를 회피, 표적 회사는 두 개의 분사 + 합병을 동시에 진행하는 [3-track 거래]의 완료 위험을 떠안음.",
    },
    {
      term: "UK Takeover Code PUSU (Put Up or Shut Up)",
      description:
        "UK Takeover Code 제2.6조 — 잠재 인수자가 표적 회사에 대한 의도를 공개한 후 28일 이내에 [정식 인수 의사 발표(firm intention) 또는 철수 선언]을 강제하는 룰. 협상을 무기한 끌어 표적 회사 경영을 마비시키는 것을 막는 안전장치. BHP는 4월 25일 의도 공개 → 5월 29일 최종 마감.",
    },
    {
      term: "Hostile Mining M&A (광업 적대적 M&A)",
      description:
        "광업·자원 산업의 적대적 인수 시도. 자원 사이클·정치 리스크·반독점 등 일반 산업보다 변수가 많아 성공률 낮음. 역대 최대 광업 적대적 M&A는 2007~2008년 BHP × Rio Tinto($148B 제안, 자진 철수)이며, 2024년 BHP × Anglo는 그 이후 최대 규모 시도.",
    },
    {
      term: "Mining Charter (남아공 광업헌장) & BEE",
      description:
        "남아공 광업 부문에 적용되는 흑인 경제 권한 강화(BEE, Black Economic Empowerment) 의무 체계. 광업사는 자산의 30%+를 흑인 소유권(BEE) 구조로 유지해야 함. Anglo의 남아공 자회사(Amplats·Kumba)도 이 규제 적용 대상. BHP가 사전 분사로 회피하려 한 핵심 부담.",
    },
    {
      term: "구리 슈퍼사이클 투자 논리 (Copper Supercycle Investment Thesis)",
      description:
        "전기차·재생에너지·데이터센터 등 전기화(electrification) 수요로 향후 10년 구리가 구조적 공급 부족 상태에 빠질 것이라는 시각. 2024년 LME 구리 가격이 톤당 $11,000를 돌파하며 정점. BHP의 Anglo 인수 시도의 핵심 배경 논리.",
    },
    {
      term: "남아공 Sovereign Risk (Sovereign Political Risk)",
      description:
        "남아공의 정치·규제·통화·노동·전력 인프라 등 국가 단위 리스크. 광업사 입장에서 BEE 의무·SLP·로열티·전력 부족(Eskom)·노조 등 다중 부담. BHP가 사전 분사로 회피하려 한 핵심 동기.",
    },
    {
      term: "방어적 자기 구조조정 (Defensive Self-Restructuring)",
      description:
        "적대적 인수자가 요구하는 자산 분리·매각을 표적 회사 본인이 자기 시점·방식으로 직접 실행하겠다고 선언하는 방어 카드. \"BHP가 시키는 일을 우리가 더 잘 한다\"는 프레이밍으로 인수 부가가치를 무력화. Anglo의 5월 14일 단순화 계획이 결정적 무기.",
    },
    {
      term: "6-Month Cooldown Rule (재접근 금지 룰)",
      description:
        "UK Takeover Code 제35조 — 인수자가 PUSU 마감에 철수 선언한 경우 이후 6개월간 동일 표적에 재접근 금지. BHP는 5월 29일 철수로 2024.11.29까지 Anglo 재접근 불가. 이 기간 Anglo는 자체 구조조정을 가속해 표적 자체를 분해.",
    },
  ],

  faq: [
    {
      q: "BHP는 왜 가격을 세 번이나 올렸는데도 합병에 실패했나요?",
      a: "Anglo American의 거부 사유가 [가격이 아니라 구조]였기 때문입니다. BHP는 $39B → $43B → $49B로 가격을 4주 만에 세 차례 올렸지만, Anglo 이사회는 세 번 모두 [사전 분사 선결 조건의 실행 위험]을 거부 사유로 들었습니다. 두 개의 별도 분사(Amplats·Kumba)와 합병을 동시에 진행하는 3-track 거래에서 어느 하나가 지연·실패하면 전체가 무산되는 [완료 위험(completion risk)]이 가장 큰 문제였습니다. 가격으로 구조 결함을 보상할 수 없었던 사례.",
    },
    {
      q: "[방어적 자기 구조조정]이란 정확히 무엇인가요?",
      a: "적대적 인수자가 요구하는 자산 분리·매각을 표적 회사 본인이 자기 시점에 자기 방식으로 직접 실행하겠다고 선언하는 방어 카드입니다. Anglo는 BHP 2차 거부 다음 날인 2024년 5월 14일 $13B 규모의 자체 단순화 계획을 발표했습니다. Amplats demerger·De Beers 매각·호주 석탄 매각·니켈 매각. 이 계획의 골격은 BHP가 분사하라고 요구한 자산과 거의 동일했고, 메시지는 명확했습니다, \"BHP가 시키는 일을 우리가 더 잘하겠다\". BHP의 인수 부가가치(남아공 자산 분리 + 단순화)를 Anglo가 직접 실행한다고 선언함으로써 합병 프리미엄을 무력화했습니다.",
    },
    {
      q: "UK Takeover Panel의 PUSU와 6개월 cooldown은 어떻게 작동했나요?",
      a: "PUSU(Put Up or Shut Up)는 UK Takeover Code 제2.6조의 룰로, 잠재 인수자가 표적 회사에 대한 의도를 공개한 후 28일 이내에 정식 인수 의사 발표 또는 철수 선언을 강제합니다. BHP는 2024년 4월 25일 의도 공개 → 28일 마감이 5월 22일이었고, Anglo가 7일 연장만 허용해 5월 29일 17:00이 최종 마감. 추가 연장 요청을 Anglo가 거부하자 BHP는 같은 날 철수. 이후 UK Takeover Code 제35조에 따라 [6개월 재접근 금지(Cooldown)]가 발효, BHP는 2024년 11월 29일까지 Anglo에 재공세 불가. 이 6개월 동안 Anglo는 9월 석탄 매각·11월 Amplats demerger를 실행해 [BHP가 재진입할 표적 자체를 분해]했습니다.",
    },
    {
      q: "남아공 정부와 PIC는 왜 BHP안에 반대했나요?",
      a: "두 가지 이유입니다. 첫째, BHP의 사전 분사 구조는 Anglo American Platinum(Amplats)과 Kumba Iron Ore를 Anglo 주주에게 별도 분사하라는 요구였는데, 분사 직후 이들 회사 주식의 유동성 하락·주가 하락 가능성, 그리고 [흑인 경제 권한 강화(BEE)] 의무 이행 약화 우려가 있었습니다. 둘째, PIC(Public Investment Corporation, 남아공 공무원연금)는 Anglo 지분 약 7%를 보유한 5대 주주로, 남아공 자산 분리가 남아공 일자리·세수·국가 전략 자산 통제력 약화를 초래한다고 판단. 광물자원부도 비공식적으로 부정적 신호를 보내, 남아공 정부 승인 없이는 광업 자산 거래 자체가 불가능하다는 점이 BHP 구조를 사실상 봉쇄했습니다.",
    },
    {
      q: "BHP는 왜 6개월 cooldown 만료 후에도 돌아오지 않았나요?",
      a: "Anglo가 그 6개월 동안 자체 구조조정을 가속해 [BHP가 재진입할 표적 자체를 분해]했기 때문입니다. 2024년 9월 호주 메탈러지컬 석탄 자산을 약 $3.3B에 매각 발표, 2024년 11월 Amplats를 Valterra Platinum으로 사명 변경 후 demerger 실행. BHP가 11월 cooldown 만료 후 Anglo에 재공세하려 해도, 인수 대상이 더 이상 BHP가 4월에 봤던 다각화된 Anglo가 아닌 [이미 단순화 중인 Anglo]. 인수 부가가치가 사라졌습니다. 또한 같은 시점 BHP는 캐나다 Filo Corp(아르헨티나 구리 자산) 인수를 Lundin Mining과 공동 진행하는 등 단독 성장 경로로 전환했습니다.",
    },
    {
      q: "이 거래가 광업 M&A에 어떤 교훈을 남겼나요?",
      a: "세 가지 교훈입니다. 첫째, [구조가 가격을 이긴다]. BHP는 4주간 가격을 세 차례 올렸지만 구조 결함을 가격으로 보상할 수 없었습니다. 사전 분사 선결 조건처럼 표적 주주에게 실행 위험을 떠안기는 구조는 가격 인상으로 해결되지 않습니다. 둘째, [방어적 자기 구조조정의 위력]. 적대적 인수자가 요구하는 자산 분리를 표적 회사가 직접 실행하겠다고 선언하면 합병 부가가치 자체가 무력화됩니다. 광업·다각화 기업의 표준 방어 패턴으로 자리잡을 가능성이 큽니다. 셋째, [UK Takeover Code의 비용]. PUSU 마감과 6개월 cooldown 룰은 인수자에게 매우 강한 시간 압박을 부과합니다. 인수자는 의도 공개 전에 구조와 가격을 모두 확정해 두지 않으면 협상 시간이 부족해 무산될 수 있습니다.",
    },
  ],
};

export default deal;
