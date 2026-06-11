/**
 * 칼 아이칸 × Herbalife — 카운터 행동주의의 교과서
 * Ackman의 $1B 공매도에 맞선 13% 13D 진입 → 25% 확대 → 8년 보유 → ~$1.3B 차익
 * 현대 미국 시장에서 [행동주의 vs 행동주의]가 작동한 첫 대형 사례
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── 메타 ────────────────────────────────────────────────────
  slug: "icahn-herbalife-counter",
  title: "칼 아이칸은 어떻게 Ackman의 $1B 공매도를 박살냈나, Herbalife 카운터 행동주의 5년 전쟁",
  subtitle:
    "[행동주의 vs 행동주의] 원조 사례 · 13D 13% 진입 → 25% 확대 · CNBC 생방송 '거짓말쟁이' 설전 · FTC 비(非)피라미드 판정 · 8년 보유로 ~$1.3B 실현",
  category: "activism",
  industry: "Multi-Level Marketing / Nutrition / Consumer Goods",
  country: "미국",
  announcedAt: "2013-02-14",
  closedAt: "2018-02-28",
  announcedDisplay: "2013년 2월 14일 (Icahn 13D 공시)",
  closedDisplay: "2018년 2월 28일 (Ackman 공매도 청산)",
  readingMinutes: 14,
  tags: [
    "Carl Icahn",
    "Herbalife",
    "Bill Ackman",
    "카운터 행동주의",
    "Counter-Activism",
    "13D Filing",
    "Short Squeeze",
    "FTC",
    "MLM",
    "Pershing Square",
    "CNBC",
    "활동가 vs 활동가",
  ],
  excerpt:
    "2012년 12월 Bill Ackman은 Herbalife를 [피라미드 사기]로 규정하고 $1B 공매도를 공개 선언했다. 2개월 뒤 2013년 2월 14일, Carl Icahn은 13D를 제출해 12.98% 지분 매집을 공시하고 정반대 진영에 섰다. 1월 25일 CNBC 생방송에서 Icahn은 Ackman을 '거짓말쟁이', '학교 운동장의 우는 아이'라고 공격했고, 이는 현대 미국 시장에서 [행동주의 vs 행동주의]가 정면 충돌한 첫 대형 사례가 됐다. Icahn은 지분을 ~25%까지 늘려 이사회 좌석을 확보했고, 2016년 7월 15일 FTC가 Herbalife를 피라미드로 판정하지 않고 $200M 합의로 마무리하자 게임은 사실상 끝났다. Ackman은 2018년 2월 28일 ~$1B 손실을 안고 공매도를 청산했고, Icahn은 2021년 1월·5월 두 차례에 걸쳐 전량 매도해 약 $1.3B 차익을 실현했다.",

  // ── 기업 아이콘 ─────────────────────────────────────────────
  acquirer: { initials: "ICA", bg: "bg-orange-600", label: "Carl Icahn / Icahn Enterprises" },
  target:   { initials: "HLF", bg: "bg-green-700",  label: "Herbalife Ltd." },

  // ── 배경 ────────────────────────────────────────────────────
  background: [
    "2012년 12월 20일, 빌 애크먼(Bill Ackman)이 맨해튼 AXA Equitable Center에서 3시간짜리 [Who Wants To Be A Millionaire?] 프레젠테이션을 열고 Herbalife를 [피라미드 사기(Pyramid Scheme)]로 규정했다. 그는 약 2,000만 주, 명목가치 $1B 규모의 공매도 포지션을 잡고 있다고 공개하고 목표 주가로 [$0]을 제시했다. Herbalife 주가는 발표 직후 6초 만에 -10%로 서킷브레이커가 발동했고, 12월 18일 $42.50에서 12월 24일 $26.06까지 무너졌다.",
    "[카운터 진영의 등장.] 2013년 1월, 대니얼 로엡(Daniel Loeb, Third Point)이 가장 먼저 반대 진영에서 8.2% 롱 포지션을 공시하며 '말도 안 되는 분석'이라고 평했다. 그러나 진짜 카운터 행동주의는 한 달 뒤 시작됐다. 2013년 1월 25일 CNBC [Fast Money Halftime Report] 생방송에서 칼 아이칸(Carl Icahn)이 Ackman을 [거짓말쟁이(a liar)], [학교 운동장의 우는 아이(crybaby in the schoolyard)]라고 부르며 28분간 격돌했다. 이 방송은 CNBC 역사상 가장 유명한 생방송 중 하나로 기록됐고, Ackman과 Icahn의 [개인적 원한(2003년 Hallwood Realty 거래 분쟁)]이 헤지펀드 공개전으로 폭발한 순간이었다.",
    "[2013년 2월 14일, 13D 카운터 펀치.] CNBC 설전 3주 뒤 Icahn Enterprises는 SEC에 13D를 제출해 Herbalife 보통주 14,015,151주, 발행주식 12.98%를 약 $214M에 매집했음을 공개했다. 단순한 롱 포지션이 아니라 [지배 의도] 카테고리의 13D(13G가 아닌)였다. 이는 Icahn이 단순 수익 추구가 아니라 Ackman의 공매도 논거 자체를 [기업 거버넌스 차원에서] 분쇄하겠다는 선언이었다. 며칠 만에 Herbalife 주가는 $46까지 반등했다.",
    "[지분 확대와 이사회 진입.] 2013~2014년에 걸쳐 Icahn은 지분을 약 25%까지 확대했고(Herbalife와 standstill 합의로 상한선 설정), 이사회에 5석 중 자기 측 인사를 임명할 권리를 확보했다. 같은 기간 Herbalife는 5년 만기 컨버터블 채권 발행과 자사주 매입 프로그램을 가속해 유통 주식 수를 줄였고, 이는 Ackman 공매도 포지션의 차입 비용(stock loan cost)을 끌어올리는 [구조적 카운터 무브]였다. Soros Fund Management도 2013년 2분기 13F에서 Herbalife 롱 진입이 확인되며 카운터 진영이 확장됐다.",
    "[FTC 합의의 결정타.] 2014년 3월 FTC가 Herbalife에 대한 공식 조사를 개시했을 때 Ackman 진영은 환호했다. 그러나 2년 4개월 뒤인 2016년 7월 15일, FTC는 Herbalife와 $200M 합의(Consent Order)를 발표하면서 결정적으로 [피라미드 구조라는 판정을 내리지 않았다]. Herbalife는 유통업자 보상 구조를 [실제 소비자 판매 기반(retail sales-based)]으로 개편할 의무를 졌지만 사업 모델 자체는 합법으로 인정받았다. 합의 발표 당일 주가는 +10% 급등했고, Ackman의 핵심 논거인 [FTC 셧다운 시나리오]가 사실상 사형선고를 받았다. Icahn은 2017년 푸시(축출)에 대비한 standstill 갱신과 동시에 지분을 24.18%로 미세 조정했다.",
  ],

  // ── 딜 요약 ─────────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "13.98M주 → 최대 ~25% 지분 ($214M 초기 매집 → 최종 ~$1.3B 실현)",
    acquirerName: "Carl Icahn / Icahn Enterprises L.P.",
    targetName: "Herbalife Ltd. (NYSE: HLF)",
    announcedDisplay: "2013년 2월 14일 (13D 공시)",
    closedDisplay: "2018년 2월 28일 (Ackman 청산) / 2021년 5월 (Icahn 전량 매도)",
    country: "USA",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "[현대 시장 첫 대형 카운터 행동주의 사례] Ackman의 $1B 공매도 공개 선언(2012.12.20) → 2개월 뒤 Icahn 13D 12.98% 카운터 진입(2013.02.14). 행동주의 vs 행동주의가 정면 충돌한 분수령",
    "[CNBC 생방송 설전(2013.01.25)] Icahn '거짓말쟁이, 학교 운동장의 우는 아이' 28분간 격돌. 헤지펀드 공개전의 [활동가 셀럽 시대] 개막",
    "[지분 확대 → 이사회 5석] 2013~2014년 Icahn 지분 ~25%까지 확대, Herbalife 이사회 5석 임명권 확보. standstill 합의로 추가 매집 제한",
    "[FTC $200M 합의가 결정타] 2016년 7월 15일 FTC 합의 — Herbalife [피라미드 미판정], 보상 구조 개편 의무. Ackman의 [$0 시나리오] 사망 선고",
    "[Ackman 항복(2018.02.28)] 5년 보유 끝에 공매도 전량 청산. 추정 손실 ~$1B (2017년부터 풋옵션으로 전환해 손실 캡 설정)",
    "[Icahn 완승 — 2021년 전량 매도] 2021.01 $48.05/주에 $600M 자사주 매각 + 2021.05 잔여 5M주 ~$248M 매각. 8년 보유 누적 차익 약 $1.3B (배당 포함)",
    "[교훈] (1) 공매도 행동주의의 구조적 취약점, (2) 카운터 매집 + 지분율 + 배당/자사주의 [복합 무기 체계], (3) 규제 불확실성 + 시간 = 공매도의 천적",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "다단계 판매(MLM, Multi-Level Marketing)는 독립 유통업자 네트워크를 통한 직접 판매 방식이다. 합법 MLM은 실제 외부 소비자 판매에서 수익이 발생하지만, 피라미드 구조는 신규 유통업자 모집 수수료가 핵심 수익이 된다. FTC 1979년 Amway 판결 이후 미국에서 MLM과 피라미드를 가르는 기준선은 [실제 소비자 판매 비율]과 [내부 소비(internal consumption)] 처리 방식이었다. Herbalife 사태는 이 경계선을 30여 년 만에 다시 흔든 사건이었고, 2016년 FTC 합의 이후 미국 MLM 업계 전반에 [retail sales tracking] 의무가 사실상 표준이 됐다.",
    metrics: [
      { label: "글로벌 MLM 시장 규모 (2013)", value: "~$1,780억", sub: "미국 비중 ~$340억" },
      { label: "Herbalife 유통업자 수 (2012)", value: "320만+ 명", sub: "전 세계 90개국+, 멤버 포함" },
      { label: "Ackman 공매도 규모",          value: "~$1B (2,000만 주)", sub: "2012년 12월 공개 선언" },
      { label: "FTC 합의 벌금 (2016.7)",      value: "$200M",     sub: "피라미드 미판정, 보상 구조 개편 의무" },
    ],
    subBody:
      "Icahn-Ackman 대결은 [활동가 셀럽 시대(Activist Celebrity Era)]의 분수령이었다. 그 이전까지 행동주의 투자자는 학회·서한·proxy fight를 통해 움직였지만, 이 사건 이후 CNBC·블룸버그·트위터가 행동주의의 주요 전장이 됐다. 2013년 이후 Daniel Loeb, Nelson Peltz, Jeffrey Smith(Starboard), Paul Singer(Elliott) 등이 모두 미디어를 적극 활용하는 모델로 전환했고, 2년 뒤(2015)에는 William Ackman의 Valeant 케이스가 같은 미디어 행동주의의 [어두운 면]을 보여주게 된다.",
    players: [
      { name: "Carl Icahn / Icahn Enterprises", role: "카운터 행동주의 주체, 13D 12.98% → 최대 ~25%, 이사회 5석 확보" },
      { name: "Bill Ackman / Pershing Square",  role: "공매도 행동주의 주체, ~$1B 명목 숏, 2018년 2월 청산" },
      { name: "Daniel Loeb / Third Point",      role: "초기 카운터 진영, 8.2% 롱 (2013년 1월), 단기 트레이딩으로 청산" },
      { name: "George Soros / Soros Fund Mgmt", role: "2013년 2분기 13F 롱 포지션 확인, 카운터 진영 확대" },
      { name: "FTC (Bureau of Consumer Protection)", role: "2014년 조사 개시 → 2016년 7월 $200M 합의, 피라미드 미판정" },
      { name: "Herbalife / Michael Johnson CEO", role: "방어 주체, 자사주매입·배당·standstill로 Icahn과 협조" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Herbalife Ltd. (NYSE: HLF)",
    body: "Herbalife는 1980년 Mark Hughes가 캘리포니아에서 설립한 글로벌 MLM 영양·웰빙 기업이다. 단백질 쉐이크(Formula 1), 비타민, 체중 관리, 스포츠 영양 제품을 320만 명 이상의 [Members](유통업자 + 자가 소비자)를 통해 전 세계 90개국+에서 판매한다. 본점은 케이먼 제도, 운영 본부는 LA. 2013년 기준 연간 매출 $48억, 영업이익률 13%대의 안정적 캐시카우. 핵심 비즈니스 모델 논쟁점은 [내부 소비(internal consumption)] 처리, 즉 유통업자 본인이 구매하는 제품이 [실제 판매]인지 [강제 구매(inventory loading)]인지의 회계 처리 문제였다. Ackman은 이를 [순환 구조의 증거]로 봤고, Herbalife/Icahn은 [정상적 가맹점 마진 구조]로 반박했다.",
    metrics: [
      { label: "설립 / 본점",                value: "1980년 / 케이먼 제도", sub: "창업자 Mark Hughes (2000년 작고)" },
      { label: "FY2012 매출",                value: "$40.7억",              sub: "Ackman 공매도 직전 회계연도" },
      { label: "FY2012 영업이익",            value: "$5.6억",               sub: "OPM 13.8%" },
      { label: "FY2013 매출 (Icahn 진입 연도)", value: "$48.3억",            sub: "+19% YoY, 공매도 압박에도 성장" },
      { label: "주가 (2012.12.18, Ackman 공격 직전)", value: "$42.50",       sub: "발표 6초 만에 -10% 서킷브레이커" },
      { label: "주가 (2014.01, 단기 고점)",  value: "~$83",                 sub: "Short Squeeze + Icahn 매집 효과" },
    ],
    financials: [
      { year: "FY2009", revenue: 2325, cogs: 442,  grossProfit: 1883, sga: 1500, operatingIncome: 383, ebitda: 465 },
      { year: "FY2010", revenue: 2735, cogs: 521,  grossProfit: 2214, sga: 1755, operatingIncome: 459, ebitda: 555 },
      { year: "FY2011", revenue: 3454, cogs: 668,  grossProfit: 2786, sga: 2178, operatingIncome: 608, ebitda: 730 },
      { year: "FY2012", revenue: 4072, cogs: 830,  grossProfit: 3242, sga: 2680, operatingIncome: 562, ebitda: 680 },
      { year: "FY2013", revenue: 4825, cogs: 974,  grossProfit: 3851, sga: 3088, operatingIncome: 763, ebitda: 905 },
    ],
    financialsNote: "단위: $M (백만 달러) | 출처: Herbalife 10-K 연간보고서 (SEC EDGAR). FY2013은 Ackman 공매도 압박 첫 풀이어이자 Icahn 13D 진입 첫 풀이어로, 매출/이익 모두 두 자릿수 성장. 이는 [공매도 논거의 사업 측 반증]으로 작용했다.",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Control Battle Overview ──────────────────────────────────
  controlBattleOverview: {
    body: "Herbalife 전쟁은 전통적 경영권 분쟁이 아니라 [공매도 진영 vs 카운터 매집 진영]의 시장 메커니즘 충돌이었다. 양측 모두 외부 행동주의 펀드였고, Herbalife 경영진(Michael Johnson CEO)은 사실상 Icahn 진영과 협조해 방어선을 구축했다. 무기 체계도 전통적인 포이즌 필·차등의결권이 아니라 [13D 카운터 매집], [자사주 매입], [배당 인상], [컨버터블 발행을 통한 stock loan 시장 압박], [FTC 합의 협상]이었다. 이 사례는 [공매도가 5년 이상 버틸 수 없는 구조]를 적나라하게 드러냈다.",
    catalyst:
      "2012년 12월 20일 Bill Ackman의 3시간 프레젠테이션 — Herbalife를 피라미드 사기로 규정하고 ~$1B 명목 공매도 공개 선언, 목표 주가 $0 제시. 발표 6초 만에 주가 -10% 서킷브레이커",
    attackerLabel: "Pershing Square + Bill Ackman ($1B 공매도)",
    defenderLabel: "Carl Icahn + Herbalife 경영진(Michael Johnson)",
    battleMoves: [
      {
        date: "2012-12-20",
        actor: "Bill Ackman / Pershing Square",
        side: "attack",
        move: "3시간 프레젠테이션 + $1B 공매도 공개 선언",
        detail:
          "맨해튼 AXA Equitable Center에서 [Who Wants To Be A Millionaire?] 프레젠테이션. 약 2,000만 주, 명목가치 ~$1B 공매도 포지션과 [피라미드 사기] 논거를 320여 슬라이드로 공개. 목표 주가 [$0]. 발표 직후 6초 만에 -10% 서킷브레이커.",
        financialImpact: "HLF 주가 $42.50 → $26.06 (6영업일, -39%)",
        weapon: "공매도 + 공개 프레젠테이션 캠페인",
      },
      {
        date: "2013-01-25",
        actor: "Carl Icahn",
        side: "defense",
        move: "CNBC 생방송 [거짓말쟁이] 설전",
        detail:
          "CNBC [Fast Money Halftime Report] 생방송에서 28분간 Ackman과 격돌. Icahn은 Ackman을 [a liar], [crybaby in the schoolyard], [월스트리트 최악의 평판]이라고 공격. 미디어가 행동주의의 정식 전장이 된 분수령이자 [활동가 셀럽 시대] 개막.",
        financialImpact: "방송 종료 직후 HLF +1.5%, 거래량 평균의 3배",
        weapon: "미디어 카운터 캠페인",
      },
      {
        date: "2013-02-14",
        actor: "Carl Icahn / Icahn Enterprises",
        side: "defense",
        move: "13D 12.98% 카운터 매집 공시",
        detail:
          "SEC 13D 제출 — Herbalife 보통주 14,015,151주(발행주식 12.98%)를 약 $214M에 매집. 13G가 아닌 13D였다는 점이 결정적, 단순 보유가 아닌 [지배·영향력 행사 의도] 카테고리. Ackman의 공매도 논거를 [기업 거버넌스 차원에서 분쇄하겠다]는 선언.",
        financialImpact: "공시 당일 HLF +5%, 며칠 만에 $46까지 반등",
        weapon: "13D 카운터 매집",
      },
      {
        date: "2013-04-26",
        actor: "Herbalife 이사회",
        side: "defense",
        move: "Icahn에 이사회 2석 즉시 부여 + standstill 합의",
        detail:
          "Herbalife는 Icahn에게 즉시 이사회 2석을 부여하고, Icahn 측은 향후 지분을 최대 25%로 제한하는 standstill 합의에 서명. 이는 [경영진-Icahn 비공식 동맹] 출범의 공식화. Ackman 진영을 향한 [united front] 선언.",
        financialImpact: "지분 한도 25%, 이사회 영향력 확보",
        weapon: "Standstill Agreement + 이사회 좌석",
      },
      {
        date: "2013-2014",
        actor: "Herbalife + Icahn",
        side: "defense",
        move: "자사주매입 + 컨버터블 발행 [복합 무기]",
        detail:
          "Herbalife는 2014년 $1.15B 컨버터블 채권 발행 + 자사주매입 프로그램 가속(2013~2014년 누적 $1.5B+). 유통 주식 수 감소 → Ackman 공매도 차입 비용(stock loan rate) 급등. 동시에 분기 배당을 유지·인상해 공매도자에 [배당 지급 의무] 부담 추가.",
        financialImpact: "stock loan rate 정상 0.5% → 피크 시 8%+ 추정",
        weapon: "자사주매입 + 컨버터블 + 배당 [Squeeze Triple]",
      },
      {
        date: "2014-03-12",
        actor: "FTC",
        side: "neutral",
        move: "Herbalife 공식 조사 개시 발표",
        detail:
          "FTC가 Herbalife의 비즈니스 관행에 대한 공식 조사(formal investigation)를 개시했다고 회사가 공시. 표면상 Ackman 진영의 승리처럼 보였지만, 실제로는 [2년 4개월의 시간을 Icahn에게 주는] 결과가 됐다. 그동안 Herbalife는 자사주매입과 사업 개편을 지속, Ackman은 차입 비용·기회비용에 시달림.",
        financialImpact: "발표 당일 HLF -7%, 단기 고점 대비 -50% 하락",
        weapon: "규제 불확실성 (양면 칼)",
      },
      {
        date: "2016-07-15",
        actor: "FTC",
        side: "neutral",
        move: "$200M Consent Order — [피라미드 미판정]",
        detail:
          "FTC와 Herbalife가 $200M Consent Order에 합의. 유통업자 보상 구조를 [실제 외부 소비자 판매 기반]으로 재편하고, retail sales tracking 시스템 의무화. 그러나 결정적으로 [피라미드 사기로 판정하지 않음]. FTC 보도자료에 [Herbalife is not determined to be a pyramid scheme] 명시. Ackman의 $0 시나리오 사망 선고.",
        financialImpact: "발표 당일 HLF +10% (Ackman은 추가 풋옵션으로 손실 캡 시도)",
        weapon: "FTC Consent Order (피라미드 미판정)",
      },
      {
        date: "2018-02-28",
        actor: "Bill Ackman / Pershing Square",
        side: "attack",
        move: "공매도 전량 청산 — 5년 전쟁 종료",
        detail:
          "Ackman이 Herbalife 공매도 포지션을 전량 청산했다고 공식 발표. 2017년부터 직접 숏을 줄이고 풋옵션으로 전환해 손실 캡을 설정한 상태였다. 추정 누적 손실 ~$1B (포지션 손실 + 차입 비용 + 캠페인 비용 포함). 헤지펀드 역사상 단일 공매도 최대 손실 중 하나로 기록.",
        financialImpact: "Pershing Square AUM $20B → $8B (2015~2018)",
        weapon: "백기 — 항복",
      },
    ],
    financialWeapons: [
      {
        name: "13D 카운터 매집 (Counter 13D Filing)",
        side: "defense",
        usedBy: "Carl Icahn",
        description:
          "공매도 진영이 공개적으로 약속한 [주가 $0] 시나리오에 정반대 베팅. 13G(소극적)가 아닌 13D(지배 의도) 제출은 단순 트레이딩이 아닌 [기업 거버넌스 차원의 카운터 행동주의] 선언. 매집 자체가 공매도자의 [stock available to borrow] 풀을 줄여 차입 비용을 끌어올리는 구조적 압박 효과.",
        effectiveness: "decisive",
      },
      {
        name: "자사주매입 + 배당 (Buyback + Dividend Defense)",
        side: "defense",
        usedBy: "Herbalife 경영진",
        description:
          "유통 주식 수를 줄여 EPS 부양 + Ackman의 stock loan rate 압박 + 공매도자의 배당 지급 의무 가중. 2013~2018년 누적 자사주매입 $4B+. 컨버터블 채권 발행으로 자금을 조달해 매입에 사용하는 [순환 구조] 활용.",
        effectiveness: "effective",
      },
      {
        name: "공매도 + 320슬라이드 프레젠테이션",
        side: "attack",
        usedBy: "Bill Ackman",
        description:
          "전통적 short selling에 [공개 프레젠테이션 + FTC 청원 + 의회 로비 + 커뮤니티 조직화]를 결합한 [공매도 행동주의(Activist Short)] 모델. 단기적으로 주가를 -39% 끌어내렸지만 5년 이상 유지하기에는 차입 비용·기회비용·반격 위험이 누적되는 구조적 한계 노출.",
        effectiveness: "backfired",
      },
      {
        name: "Standstill 합의 + 이사회 좌석",
        side: "defense",
        usedBy: "Herbalife + Carl Icahn",
        description:
          "지분 한도를 25%로 제한하는 대신 이사회 5석 임명권 부여. 경영진-Icahn [비공식 동맹]을 공식화하면서 동시에 Icahn의 추가 매집을 제한해 시장에 [통제 가능한 활동가]라는 시그널 제공. Ackman 진영에 [united front] 메시지 전달.",
        effectiveness: "effective",
      },
      {
        name: "FTC Consent Order (피라미드 미판정)",
        side: "neutral",
        usedBy: "FTC Bureau of Consumer Protection",
        description:
          "$200M 벌금 + retail sales tracking 의무화로 Herbalife에 운영 제약을 가했지만, 결정적으로 [피라미드 사기로 판정하지 않음]. 이는 사실상 Ackman의 $0 시나리오에 대한 사망 선고였고, FTC가 의도하지 않게 [카운터 진영의 승리 도장]을 찍어준 결과.",
        effectiveness: "decisive",
      },
      {
        name: "CNBC 생방송 미디어 캠페인",
        side: "defense",
        usedBy: "Carl Icahn",
        description:
          "2013년 1월 25일 [Fast Money Halftime Report] 28분 생방송 설전. 미디어를 행동주의의 정식 전장으로 격상시킨 분수령. 이후 헤지펀드의 트위터·CNBC·블룸버그 적극 활용이 표준이 되는 [활동가 셀럽 시대] 개막. Ackman의 미디어 우위를 즉각 무력화.",
        effectiveness: "effective",
      },
    ],
    turningPoint: {
      date: "2016-07-15",
      event: "FTC $200M Consent Order — [Herbalife는 피라미드가 아니다] 공식 명시",
      detail:
        "FTC가 2년 4개월의 조사 끝에 Herbalife와 $200M 합의를 발표하면서 보도자료에 명시적으로 [피라미드 사기로 판정하지 않음]을 적시. Ackman의 핵심 논거(FTC 셧다운 → 주가 $0)가 법적·규제적으로 사망. 합의 발표 당일 HLF +10% 급등하고, 이후 Ackman은 직접 숏을 풋옵션으로 전환하기 시작. 이 날을 기점으로 전쟁의 승패는 확정됐다.",
    },
    verdict: {
      winner: "defense",
      winnerLabel: "Carl Icahn + Herbalife (방어 진영 완승)",
      margin: "Icahn 누적 차익 ~$1.3B vs Ackman 누적 손실 ~$1B (총 ~$2.3B 격차)",
      note:
        "Icahn은 2021년 1월 자사주매입으로 Herbalife에 $600M 매각($48.05/주) + 2021년 5월 잔여 5M주 ~$248M 매각으로 8년 보유 종료. 누적 차익 약 $1.3B(배당 포함). Ackman은 2018년 2월 28일 청산, 추정 손실 ~$1B. 단일 공매도 손실로는 헤지펀드 역사상 최대급, Pershing Square AUM은 $20B → $8B로 60% 축소.",
    },
    priceImpact: {
      preContest: "$42.50 (2012.12.18, Ackman 공격 직전)",
      peak: "~$83 (2014.01, Short Squeeze + Icahn 매집 고점)",
      postContest: "$48.05 (2021.01, Icahn 1차 매도가)",
      note:
        "2012~2021년 9년간 HLF 주가는 $26(2012.12.24 저점) ~ $83(2014.01 고점) 사이 극심한 변동. Ackman 청산 시점(2018.02.28) ~$93, Icahn 최종 매도(2021.05) ~$50. Icahn 평균 매입단가 ~$40 추정, 평균 회수가 ~$48~50 → 자본차익 +20~25% + 8년 누적 배당 $5/주+ + 자사주매입 프리미엄.",
    },
  },

  // ── 딜 구조 ─────────────────────────────────────────────────
  dealStructure: {
    body:
      "이 거래는 전통적 M&A가 아니라 [공매도 진영 vs 카운터 매집 진영]의 시장 메커니즘 충돌이다. Icahn은 13D를 통해 12.98%로 진입한 뒤 standstill 합의로 25% 한도 내에서 ~24%까지 확대, 이사회 5석 임명권을 확보했다. Ackman은 공매도 + 풋옵션 + 공개 캠페인을 결합한 [activist short] 구조였다. Herbalife는 자사주매입·컨버터블·배당의 [Squeeze Triple]로 공매도자의 차입 비용을 끌어올렸다. 최종적으로 Icahn은 2021년 두 차례에 걸쳐 전량 매도했고, Ackman은 2018년 2월 28일 항복 청산했다.",
    preOwnership: {
      nodes: [
        { id: "ackman", label: "Pershing Square (Ackman)", sub: "~$1B 명목 공매도, ~2,000만 주 숏", type: "fund" },
        { id: "hlf",    label: "Herbalife Ltd. (NYSE: HLF)", sub: "MLM 영양보충제, 시총 ~$45억",      type: "target" },
        { id: "icahn",  label: "Carl Icahn / Icahn Enterprises", sub: "2013.02.14 13D 12.98% 진입",      type: "fund" },
        { id: "loeb",   label: "Third Point (Daniel Loeb)", sub: "초기 카운터 진영, 8.2% 롱",          type: "fund" },
        { id: "ftc",    label: "FTC (Bureau of Consumer Protection)", sub: "2014.03 조사 개시",        type: "entity" },
        { id: "public", label: "일반 주주",                  sub: "분산 보유, 캐스팅보트",              type: "public" },
      ],
      edges: [
        { from: "ackman", to: "hlf", label: "공매도 + 320슬라이드 캠페인" },
        { from: "icahn",  to: "hlf", label: "13D 12.98% 매집 → 25% 확대" },
        { from: "loeb",   to: "hlf", label: "8.2% 롱 (단기 트레이딩)" },
        { from: "ftc",    to: "hlf", label: "공식 조사 (2014.03)" },
        { from: "public", to: "hlf", label: "잔여 분산 지분" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "hlf2",     label: "Herbalife (FTC 합의 후)",  sub: "사업 모델 합법 인정, 보상 구조 개편", type: "target" },
        { id: "icahn2",   label: "Carl Icahn (2021 완전 매도)", sub: "2021.01 $600M + 2021.05 ~$248M",   type: "fund" },
        { id: "ackman2",  label: "Pershing Square (2018 청산)", sub: "추정 손실 ~$1B, AUM $20B→$8B",     type: "fund" },
        { id: "ftc2",     label: "FTC Consent Order",         sub: "$200M + 피라미드 미판정",             type: "entity" },
      ],
      edges: [
        { from: "ftc2",    to: "hlf2", label: "$200M 합의 + retail sales tracking 의무" },
        { from: "icahn2",  to: "hlf2", label: "2021.01 자사주 매입으로 $600M 회수 + 잔여 매도" },
        { from: "ackman2", to: "hlf2", label: "2018.02.28 공매도 전량 청산" },
      ],
    },
    keyTerms: [
      { label: "Ackman 공매도 규모",       value: "~$1B 명목, ~2,000만 주", accent: true },
      { label: "Icahn 13D 진입 (2013.02.14)", value: "14,015,151주 = 12.98% / $214M", accent: true },
      { label: "Icahn 최대 지분",          value: "~24~25% (standstill 한도)" },
      { label: "Icahn 이사회 좌석",        value: "5석 (총 13석 중)" },
      { label: "FTC 합의 (2016.07.15)",   value: "$200M + retail sales tracking 의무 (피라미드 미판정)", accent: true },
      { label: "Ackman 청산일",            value: "2018-02-28 (5년 보유)" },
      { label: "Ackman 추정 손실",         value: "~$1B (단일 공매도 헤지펀드 사상 최대급)", accent: true },
      { label: "Icahn 1차 매도 (2021.01)", value: "$600M @ $48.05/주 (자사주매입 응찰)" },
      { label: "Icahn 최종 매도 (2021.05)", value: "잔여 5M주 ~$248M, 8년 보유 종료" },
      { label: "Icahn 누적 차익",          value: "~$1.3B (자본차익 + 배당)", accent: true },
    ],
  },

  // ── 자문사 ──────────────────────────────────────────────────
  advisors: {
    body:
      "이 사건은 전통적 M&A 자문이 아닌 [공매도 캠페인 vs 카운터 행동주의 vs 규제 대응]의 3차원 자문 구조였다. Icahn은 인하우스 + Jefferies, Ackman은 인하우스 + Sard Verbinnen(PR), Herbalife는 Jefferies + Latham & Watkins(FTC 대응), FTC는 Bureau of Consumer Protection이 직접 진행. 자문 비용 추정 총액 양측 합쳐 $200M+.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Carl Icahn (카운터 행동주의 진영)",
        initials: "ICA",
        bg: "bg-orange-600",
        advisors: [
          {
            firm: "Icahn Capital 인하우스 팀",
            role: "투자 전략 + 13D 공시 총괄",
            roleType: "other",
            note: "Carl Icahn 본인이 캠페인 직접 주도. 아들 Brett Icahn 및 사위 David Schechter가 Herbalife 이사회 임명. 외부 IB 자문 최소화하는 Icahn 전통 유지.",
          },
          {
            firm: "Jefferies LLC",
            role: "재무 자문",
            roleType: "financial",
            note: "13D 매집 실행 및 standstill 합의 협상 지원. 2014년 컨버터블 채권 발행 자문도 동시 수행.",
          },
          {
            firm: "Bracewell LLP",
            role: "법무 자문",
            roleType: "legal",
            note: "13D/SC 13D/A 공시 법무 + standstill 계약 작성 + 이사회 좌석 협상 법률 자문.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Pershing Square (공매도 진영)",
        initials: "PS",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Pershing Square 인하우스 리서치팀",
            role: "공매도 논거 개발 + 프레젠테이션 제작",
            roleType: "other",
            note: "Bill Ackman 본인 + David Klafter(General Counsel) + Charles Korn 등이 320슬라이드 프레젠테이션 제작. 2년간 [Pyramidschemes.com] 사이트 운영하며 공매도 논거 공개.",
          },
          {
            firm: "Sard Verbinnen & Co.",
            role: "PR / 미디어 전략",
            roleType: "other",
            note: "프레젠테이션 발표 미디어 캠페인, 의회 로비, 라틴계 커뮤니티 조직화 PR 자문. Ackman 미디어 전략의 핵심 파트너.",
          },
          {
            firm: "Sullivan & Cromwell LLP",
            role: "법무 자문",
            roleType: "legal",
            note: "공매도 포지션 공시 법무, SEC 대응, FTC 청원 법적 전략 수립. 공매도자 보호를 위한 SEC Form SH 공시 의무 자문.",
          },
        ],
      },
    ],
    disclaimer:
      "주: 본 사건의 [방어 진영]에는 Icahn 외에 Herbalife 경영진(Michael Johnson CEO + Latham & Watkins / Jefferies)이 동시에 포함됩니다. FTC 측은 Bureau of Consumer Protection이 직접 조사를 수행했으며 외부 로펌을 별도 선임하지 않았습니다. 자문사 정보는 공개 자료 기반이며 일부 계약 세부 내용은 비공개입니다.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body:
      "이 사건의 밸류에이션 논쟁은 [Herbalife가 피라미드 사기인가 정상 MLM인가]에 전적으로 달려 있었다. Ackman은 FTC 셧다운 시나리오 하에 주가 $0을 주장했고, Icahn은 안정적 영업이익률(13%대), 강력한 자사주매입 능력, 글로벌 320만 멤버 베이스를 근거로 EV/EBITDA 8~10x의 정상 기업 밸류에이션을 주장했다. 2016년 FTC 합의로 후자가 입증됐다. Icahn의 평균 매입단가는 ~$40 추정, 평균 회수가 ~$48~50 → 자본차익 +20~25%에 8년 누적 배당 $5/주+를 더해 누적 차익 약 $1.3B을 실현했다.",
    rows: [
      { item: "HLF 주가 (2012.12.18, Ackman 공격 직전)", val: "$42.50",  note: "발표 6초 만에 -10% 서킷브레이커 발동" },
      { item: "HLF 주가 (2012.12.24 저점)",              val: "$26.06",  note: "Ackman 발표 직후 6영업일 -39% 폭락" },
      { item: "Icahn 평균 매입단가 (2013.02 추정)",       val: "~$15.27 = $214M / 14.0M주", note: "2013.02.14 13D 공시 기준" },
      { item: "Icahn 평균 매입단가 (전체 누적)",          val: "~$40",   note: "2013~2014년 ~24%까지 매집 평균", accent: true },
      { item: "HLF 주가 단기 고점 (2014.01)",            val: "~$83",    note: "Short Squeeze + Icahn 매집 + Soros 가세", accent: true },
      { item: "HLF 주가 (FTC 조사 개시, 2014.03.12)",    val: "~$60",    note: "공식 조사 발표 당일 -7%" },
      { item: "HLF 주가 (FTC 합의일, 2016.07.15)",       val: "+10% 급등 → ~$67", note: "피라미드 미판정, Ackman 핵심 논거 사망" },
      { item: "HLF 주가 (Ackman 청산일, 2018.02.28)",    val: "~$93",    note: "Ackman은 2017년부터 풋옵션 전환해 손실 캡 설정" },
      { item: "Icahn 1차 매도가 (2021.01)",              val: "$48.05/주", note: "Herbalife 자사주매입 응찰, $600M 회수", accent: true },
      { item: "Icahn 최종 매도가 (2021.05)",             val: "잔여 5M주 평균 ~$50", note: "총 ~$248M, 8년 보유 종료" },
      { item: "Ackman 추정 누적 손실",                   val: "~$1B",    note: "포지션 손실 + 차입 비용 + 캠페인 비용", accent: true },
      { item: "Icahn 추정 누적 차익",                    val: "~$1.3B",  note: "자본차익 + 8년 누적 배당 (배당 ~$5/주+)", accent: true },
    ],
    disclaimer:
      "주: Icahn 평균 매입단가 ~$40은 2013~2014년 ~24%까지 단계적 매집 + 자사주매입 응찰 분 등을 통합한 추정치. Ackman 손실은 직접 숏 + 2017년 이후 풋옵션 전환분 합산 추정치이며, 정확한 실현 손익은 Pershing Square 비공개 운용 데이터에 따라 다를 수 있습니다.",
  },

  // ── 딜 논리 ─────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "Icahn은 왜 Ackman의 정반대로 베팅했나",
      initials: "ICA",
      bg: "bg-orange-600",
      points: [
        "[30년 운영 = 피라미드 가능성 낮음] Herbalife는 1980년 설립 후 30여 년간 FTC의 직접 제재 없이 운영됐다. 정말 피라미드라면 진작 셧다운됐을 것이라는 [survivorship 논리]. 1979년 Amway 판결 이후 FTC의 MLM 판정 기준은 명확했고, Herbalife가 그 기준선의 적법 측에 있을 가능성이 높다고 판단.",
        "[Short Squeeze의 완벽한 무대] Ackman의 공개 공매도 선언은 ~2,000만 주라는 막대한 숏 인터레스트를 노출시켰다. 카운터 진영이 매집할수록 stock loan rate가 상승하고 Ackman은 차입 비용·청산 압박에 시달리는 구조. 13D를 통한 13% 매집만으로도 시장 가용 주식이 즉시 감소하는 [메커니컬 squeeze] 효과.",
        "[안정적 현금흐름 + 자사주매입 능력] FY2012 영업이익률 13.8%, 강한 FCF 창출, 자사주매입 여력 풍부. MLM 논쟁을 빼고 보면 EV/EBITDA 8~10x의 정상 컨슈머 기업 밸류에이션. Icahn의 활동주의 도구상자(자사주매입 압박, 배당 인상, 이사회 좌석)가 가장 효과적으로 작동하는 구조.",
        "[Ackman과의 개인적 원한] 2003년 Hallwood Realty 거래 분쟁으로 시작된 10년 묵은 갈등. Icahn은 공개 석상에서 [I'm going to take Ackman to school]이라고 선언한 적이 있다. 이 사건은 단순한 베팅이 아니라 [개인적 복수의 무대]이기도 했다.",
        "[규제 시간의 비대칭] FTC가 조사를 개시해도 결론까지 평균 2~3년 소요. 그 기간 동안 Ackman은 차입 비용·기회비용에 누적 출혈하지만 Icahn은 배당+자사주매입 프리미엄을 누적 수취. 시간이 카운터 진영에 유리한 비대칭 구조였다.",
      ],
    },
    seller: {
      title: "Ackman은 왜 결국 패배했나",
      initials: "PS",
      bg: "bg-slate-700",
      points: [
        "[FTC 셧다운 시나리오에 모든 것을 걸었다] Ackman의 $0 가설은 [FTC가 Herbalife를 피라미드로 판정 → 사업 모델 자체가 불법 → 주가 $0]이라는 단일 시나리오에 전적으로 의존했다. 2016년 7월 15일 FTC가 [피라미드 미판정]을 선택하자 핵심 논거가 한 번에 무너졌다.",
        "[공개 공매도의 구조적 자기 함정] 320슬라이드 프레젠테이션과 [pyramidschemes.com] 사이트 운영은 단기 주가 충격을 만들었지만, 동시에 카운터 진영(Icahn, Loeb, Soros, Herbalife 자사주매입)에 [완벽한 매수 신호]를 제공했다. 공매도자가 자신의 약점(차입 비용·청산 압박)을 공개적으로 노출시킨 셈.",
        "[5년 보유의 누적 출혈] 평균 stock loan rate 3~5%, 2014년 단기 squeeze 시 8%+로 추정. 5년 보유 시 명목 $1B 포지션에 누적 차입 비용만 $200M+. 여기에 분기 배당 $0.30 × 4분기 × 5년 × 2,000만 주 = $120M의 배당 지급 의무. 포지션을 유지하는 것만으로도 출혈.",
        "[시간 비대칭 = 공매도의 천적] Ackman 진영은 매일 차입 비용·배당·기회비용을 지급했지만, Icahn 진영은 배당 + 자사주매입 프리미엄 + 미실현 자본차익을 누적했다. 시간이 흐를수록 양측의 P&L 격차가 기하급수적으로 벌어지는 구조였다.",
        "[Pershing Square AUM 붕괴의 트리거] Herbalife 손실은 동시기 Valeant 손실과 합쳐 Pershing Square AUM을 $20B(2015) → $8B(2018) → $4B(2019)로 무너뜨렸다. 단일 포지션 손실이 펀드 자체의 존립을 위협한 사례로 기록됐다.",
      ],
    },
  },

  // ── 딜 사후 평가 ─────────────────────────────────────────────
  postDealAssessment: {
    asOfDate: "2026년 6월 11일 기준",
    body:
      "2026년 6월 시점에서 돌아본 Icahn-Ackman 카운터 행동주의 전쟁은 세 가지 의미에서 분수령으로 평가된다. 첫째, 현대 미국 시장에서 [행동주의 vs 행동주의]가 정면 충돌한 첫 대형 사례이자, 양측 모두 외부 활동가인 상황에서 시장 메커니즘(매집·자사주·배당·차입 비용)이 어떻게 무기화되는지를 보여준 교과서다. 둘째, 공매도 행동주의의 구조적 한계(규제 시간 비대칭, 차입 비용 누적, 카운터 매집 위험)를 적나라하게 드러내 이후 Hindenburg Research, Muddy Waters 등이 [공개 선언 + 빠른 회수] 모델로 전환하는 계기가 됐다. 셋째, CNBC·트위터·블룸버그를 행동주의의 정식 전장으로 격상시킨 [활동가 셀럽 시대]를 열었다. Herbalife 자체는 2026년 현재도 운영 중이며, 사명을 Herbalife Nutrition으로 변경하고 2016년 FTC 합의에서 요구한 retail sales tracking 시스템을 정착시켰다.",
    overallVerdict: "Carl Icahn + Herbalife 완승 vs Bill Ackman 역사적 패배 — 단일 헤지펀드 공매도 손실 최대급 사례",
    positives: [
      "[현대 카운터 행동주의의 원형] 13D 매집 + 미디어 캠페인 + 이사회 좌석 + 자사주매입 압박을 결합한 [복합 무기 체계]가 공매도 진영을 5년 만에 무너뜨림. 이후 Elliott·Starboard·ValueAct가 유사 모델을 활용.",
      "[Icahn 누적 차익 ~$1.3B] 8년 보유 + 배당 수취 + 2021년 두 차례 매도(자사주매입 응찰 $600M + 잔여 ~$248M)로 8자릿수 차익 실현. Icahn 커리어 최고의 카운터 트레이드 중 하나.",
      "[MLM 규제 표준화] FTC 2016년 Consent Order는 retail sales tracking + 보상 구조 개편을 미국 MLM 업계 전반의 사실상 표준으로 만들었다. Herbalife 사건이 30여 년 만에 MLM 규제 프레임을 업데이트한 분수령.",
      "[활동가 셀럽 시대 개막] CNBC·트위터·블룸버그가 행동주의의 정식 전장으로 격상. 2013년 8월 Icahn의 Apple 트윗(같은 해)이 이 흐름의 연장선상에 있다.",
    ],
    risks: [
      "[Pershing Square 거의 붕괴] AUM $20B(2015) → $8B(2018) → $4B(2019). Ackman은 이후 SPAC(Pershing Square Tontine Holdings, 2020), 클로즈드엔드 펀드 IPO(2024) 등 새 비즈니스 모델로 회생 시도. Herbalife 손실의 후유증이 7~8년 지속.",
      "[공매도 행동주의 위축] Ackman 사건 이후 [공개 공매도 + 장기 보유] 모델은 사실상 사라졌다. Hindenburg, Muddy Waters는 [공개 선언 → 단기 회수] 모델로 전환했지만, 이는 [심층 분석 + 장기 시정] 동력을 약화시켰다는 비판도 있다.",
      "[활동가 미디어전의 부작용] CNBC·트위터를 통한 공개 설전이 표준이 되면서 [팩트보다 내러티브], [데이터보다 셀럽 효과]가 시장을 움직이는 구조가 강화. 2021년 GameStop 사태로 그 [어두운 면]이 다시 드러났다.",
      "[규제 결과 도박의 한계] Ackman의 핵심 실수는 [FTC가 자신의 논거대로 판정할 것]이라는 단일 시나리오 의존. 이후 행동주의 캠페인은 [규제 결과 분포]를 시나리오 분석하는 방식으로 진화했지만, 여전히 활동가들이 자주 빠지는 함정.",
    ],
    editorNote:
      "이 사건의 핵심 교훈은 [공매도는 비대칭 게임이며, 시간이 공매도자의 적이다]라는 것이다. Ackman의 분석은 부분적으로 옳았다, FTC도 Herbalife에 $200M 벌금 + retail sales tracking 의무를 부과했다. 그러나 [부분적으로 옳음]과 [공매도 수익]은 천양지차다. 카운터 진영(Icahn + Herbalife)은 [복합 무기 체계]로 시간을 자기 편으로 만들었고, Ackman은 차입 비용·배당·기회비용에 매일 출혈했다. 2016년 7월 15일 FTC 보도자료에 [피라미드로 판정하지 않음]이 명시된 순간 전쟁은 끝났고, Ackman은 1년 7개월 더 버티다 2018년 2월 28일 백기를 들었다. 이 5년 전쟁은 한국 시장에서도 [공매도 캠페인이 왜 5년을 못 가는지], [카운터 매집이 왜 가장 효과적인 방어 무기인지]를 보여주는 사례로 자주 인용된다.",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "ICA",
    acquirerBg: "bg-orange-600",
    targetInitials: "HLF",
    targetBg: "bg-green-700",
    acquirerName: "Carl Icahn / Icahn Enterprises L.P.",
    targetName: "Herbalife Ltd. (NYSE: HLF)",
    dealTitle: "Counter-Activism vs Pershing Square's $1B Short — The First Activist-vs-Activist War",
    dealSize: "13D 12.98% → ~25% / 누적 차익 ~$1.3B",
    dealSizeUSD: "13.98M shares (12.98% via 13D, $214M initial) → realized ~$1.3B over 8 years",
    evEbitda: "EV/EBITDA ~8x (FY2013 진입 시점)",
    closeDate: "2018-02-28 (Ackman 청산) / 2021-05 (Icahn 전량 매도)",
  },

  // ── 출처 ────────────────────────────────────────────────────
  sources: [
    {
      id: 1,
      text: "Icahn Enterprises Schedule 13D Filing — Herbalife Ltd., 14,015,151 shares (12.98%), 2013년 2월 14일, SEC EDGAR",
      url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000813762&type=SC+13D",
    },
    {
      id: 2,
      text: "CNBC — 'Icahn Buys 14 Million Shares of Herbalife for 12.98% Stake' (2013년 2월 14일)",
      url: "https://www.cnbc.com/2013/02/14/icahn-buys-14-million-shares-of-herbalife-for-1298-stake.html",
    },
    {
      id: 3,
      text: "CNBC Transcript — 'Ackman vs Icahn on Fast Money Halftime Report' (2013년 1월 25일, 28분 생방송)",
      url: "https://www.cnbc.com/2013/01/25/cnbc-transcript-investors-bill-ackman-and-carl-icahn-go-headtohead-on-cnbcs-fast-money-halftime-report.html",
    },
    {
      id: 4,
      text: "FTC Press Release — 'Herbalife Will Restructure Its Multi-level Marketing Operations and Pay $200 Million For Compensation to Consumers' (2016년 7월 15일)",
      url: "https://www.ftc.gov/news-events/news/press-releases/2016/07/herbalife-will-restructure-its-multi-level-marketing-operations-pay-200-million-compensation",
    },
    {
      id: 5,
      text: "FTC Business Guidance Blog — 'It's no longer business as usual at Herbalife: An inside look at the $200 million FTC settlement' (2016년 7월)",
      url: "https://www.ftc.gov/business-guidance/blog/2016/07/its-no-longer-business-usual-herbalife-inside-look-200-million-ftc-settlement",
    },
    {
      id: 6,
      text: "CNBC — 'Five years after brawl with Icahn, Ackman exits losing bet against Herbalife' (2018년 2월 28일)",
      url: "https://www.cnbc.com/2018/02/28/ackman-exits-bet-against-herbalife.html",
    },
    {
      id: 7,
      text: "Bloomberg — 'Carl Icahn Sells $600 Million Herbalife Stake, Gives Up Board Seats' (2021년 1월 4일, $48.05/주)",
      url: "https://www.bloomberg.com/news/articles/2021-01-04/icahn-sells-600-million-herbalife-stake-gives-up-board-seats",
    },
    {
      id: 8,
      text: "CNBC — 'Carl Icahn has exited his Herbalife position, according to sources' (2021년 5월 6~7일)",
      url: "https://www.cnbc.com/2021/05/06/carl-icahn-has-exited-his-herbalife-position-according-to-sources.html",
    },
    {
      id: 9,
      text: "Herbalife Ltd. Form 10-K Annual Reports FY2012, FY2013, FY2015, FY2017, SEC EDGAR (Herbalife financials)",
      url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001180262&type=10-K",
    },
    {
      id: 10,
      text: "Pershing Square Capital Management — 'Who Wants To Be A Millionaire?' Herbalife 320-slide presentation (2012년 12월 20일)",
    },
    {
      id: 11,
      text: "CNBC Retrospective — 'How the Icahn-Ackman Battle of the Billionaires on CNBC became a defining moment of the decade' (2019년 12월 13일)",
      url: "https://www.cnbc.com/2019/12/13/reliving-the-carl-icahn-and-bill-ackman-herbalife-feud-on-cnbc.html",
    },
    {
      id: 12,
      text: "IESE Insight — 'Hedge-fund activism and the fight over Herbalife' (학술 분석)",
      url: "https://www.iese.edu/insight/articles/hedge-fund-activism-herbalife/",
    },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "칼 아이칸 vs Ackman Herbalife — 카운터 행동주의 5년 전쟁 완전 분석",
    description:
      "Bill Ackman의 $1B 공매도에 맞선 Carl Icahn의 13D 12.98% 카운터 매집(2013.02.14) → 25% 확대 → 이사회 5석 → FTC $200M 비(非)피라미드 합의 → Ackman 2018년 ~$1B 손실 청산 → Icahn 2021년 ~$1.3B 차익 실현. 현대 시장 [행동주의 vs 행동주의] 첫 대형 사례.",
    keywords: [
      "Carl Icahn Herbalife",
      "Bill Ackman Herbalife 공매도",
      "카운터 행동주의",
      "Counter Activism",
      "13D Filing",
      "Short Squeeze",
      "FTC MLM 조사",
      "Pershing Square 손실",
      "활동가 vs 활동가",
      "Activist Celebrity Era",
      "다단계 판매 피라미드",
      "Herbalife HLF",
    ],
  },

  // ── 핵심 개념 ────────────────────────────────────────────────
  concepts: [
    {
      term: "카운터 행동주의 (Counter-Activism)",
      description:
        "한 행동주의 투자자의 캠페인에 정반대 방향으로 베팅하는 다른 행동주의 투자자의 대응 전략. Icahn의 Herbalife 13D 진입(2013.02.14)이 현대 미국 시장에서 [공매도 활동가 vs 카운터 매집 활동가]가 정면 충돌한 첫 대형 사례.",
    },
    {
      term: "공매도 행동주의 (Activist Short Selling)",
      description:
        "공매도 포지션을 공개적으로 선언하고 프레젠테이션·로비·미디어 캠페인을 통해 주가 하락을 유도하는 전략. Ackman의 Herbalife 사건은 이 모델의 [구조적 한계](차입 비용·시간 비대칭·카운터 매집 위험)를 적나라하게 드러낸 분수령.",
    },
    {
      term: "Short Squeeze (숏스퀴즈)",
      description:
        "공매도 포지션 보유자들이 주가 상승 시 손실을 막기 위해 주식을 매입(short covering)하면서 주가가 추가 상승하는 자기강화 메커니즘. Icahn의 13D 매집은 시장 가용 주식을 줄여 stock loan rate를 0.5% → 8%+로 끌어올린 [구조적 squeeze]였다.",
    },
    {
      term: "FTC 피라미드 판정 조사 (FTC Pyramid Scheme Investigation)",
      description:
        "1979년 Amway 판결을 기준선으로 한 FTC의 MLM 합법성 판단 프레임워크. 실제 외부 소비자 판매 비율, 내부 소비(internal consumption) 처리, 신규 유통업자 모집 수수료 비중을 핵심 변수로 검토. Herbalife는 2016년 7월 15일 합의에서 [피라미드 미판정]을 받았다.",
    },
    {
      term: "MLM 비즈니스 모델 (Multi-Level Marketing)",
      description:
        "독립 유통업자 네트워크를 통한 직접 판매 + 다단계 보상 구조 결합 모델. 합법 MLM(예: Amway, Herbalife)과 불법 피라미드의 경계선은 [실제 외부 소비자 판매 비율]과 [retail sales tracking 시스템] 유무로 결정. 2016년 FTC 합의 후 미국 MLM 업계 전반의 표준이 됨.",
    },
    {
      term: "CNBC 생방송 설전 (CNBC Live Confrontation)",
      description:
        "2013년 1월 25일 [Fast Money Halftime Report]에서 Icahn-Ackman의 28분 생방송 격돌. Icahn이 Ackman을 [거짓말쟁이], [학교 운동장의 우는 아이]라고 공격. 미디어를 행동주의의 정식 전장으로 격상시킨 분수령이자 [활동가 셀럽 시대]의 개막.",
    },
    {
      term: "13D Counter-Filing (지배 의도 카운터 공시)",
      description:
        "SEC 5% 보고 의무에서 [지배·영향력 행사 의도] 카테고리의 13D 제출(13G가 아닌). Icahn의 2013.02.14 13D는 단순 보유가 아닌 [Ackman의 공매도 논거를 기업 거버넌스 차원에서 분쇄] 의도를 명시. 이후 standstill 합의로 이사회 5석 임명권 확보의 법적 근거가 됨.",
    },
    {
      term: "배당·자사주매입 방어 (Dividend Yield Defense)",
      description:
        "공매도자에게 [배당 지급 의무]와 [stock loan rate 상승 압박]을 동시에 가하는 방어 전술. Herbalife는 2013~2018년 누적 자사주매입 $4B+와 분기 배당 유지로 Ackman 진영의 보유 비용을 누적 출혈시킴. 공매도 행동주의의 천적.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "Carl Icahn은 정확히 언제, 얼마나 Herbalife 지분을 매집했나?",
      a: "Icahn Enterprises는 2013년 2월 14일 SEC에 13D를 제출해 Herbalife 보통주 14,015,151주(발행주식 12.98%)를 약 $214M에 매집했음을 공시했습니다. 평균 매입단가는 ~$15.27/주 수준이었으나 이후 2013~2014년에 걸쳐 지분을 약 24~25%까지 확대했고, Herbalife와의 standstill 합의로 25%를 상한선으로 설정한 뒤 이사회 5석 임명권을 확보했습니다. 13G(소극적 보유)가 아닌 13D(지배 의도)를 제출한 것이 결정적, Ackman의 공매도 논거를 [기업 거버넌스 차원에서 분쇄]하겠다는 공식 선언이었습니다.",
    },
    {
      q: "2013년 1월 25일 CNBC 생방송에서 정확히 어떤 일이 있었나?",
      a: "CNBC [Fast Money Halftime Report] 생방송에서 Carl Icahn이 전화로, Bill Ackman이 스튜디오에 출연해 28분간 격돌했습니다. Icahn은 Ackman을 [a liar(거짓말쟁이)], [crybaby in the schoolyard(학교 운동장의 우는 아이)], [월스트리트 최악의 평판]이라고 공격했고, Ackman은 Icahn의 2003년 Hallwood Realty 분쟁 패소 이력을 들어 반격했습니다. 이는 CNBC 역사상 가장 유명한 생방송 중 하나로 기록됐고, 헤지펀드 미디어전의 분수령이 됐습니다. 이 사건 이후 행동주의 캠페인에서 CNBC·블룸버그·트위터가 정식 전장이 되는 [활동가 셀럽 시대]가 열렸습니다.",
    },
    {
      q: "FTC는 왜 결국 Herbalife를 피라미드로 판정하지 않았나?",
      a: "2년 4개월의 조사 끝에 FTC는 2016년 7월 15일 $200M Consent Order로 합의했습니다. FTC 보도자료에 명시적으로 [Herbalife is not determined to be a pyramid scheme]이 적시됐습니다. 그 이유는 두 가지였습니다. 첫째, Herbalife가 [내부 소비(internal consumption)]를 제외하고도 상당한 외부 소비자 판매 기반이 있다고 판단. 둘째, 합의를 통해 retail sales tracking 시스템 의무화 + 보상 구조 [실제 외부 소비자 판매 기반] 개편을 강제하는 것이 셧다운보다 소비자 보호에 효과적이라고 판단. 이 결정으로 Ackman의 핵심 논거인 [FTC 셧다운 → 주가 $0] 시나리오가 사실상 사형선고를 받았습니다.",
    },
    {
      q: "Bill Ackman은 결국 얼마나 손실을 봤나? 언제 청산했나?",
      a: "Ackman은 2018년 2월 28일 Herbalife 공매도 포지션을 전량 청산했다고 공식 발표했습니다. 추정 누적 손실은 약 $1B (포지션 손실 + 5년간 누적 차입 비용 + 캠페인 비용). 그는 2017년부터 직접 숏(stock borrow)을 풋옵션으로 점진 전환해 손실 캡을 설정했지만, 5년 전쟁의 누적 출혈은 막을 수 없었습니다. 이 손실은 헤지펀드 역사상 단일 공매도 포지션 손실 중 최대급으로 기록됐고, Pershing Square AUM은 $20B(2015) → $8B(2018) → $4B(2019)로 60% 이상 축소됐습니다. 동시기 Valeant 손실과 합쳐 Pershing Square의 비즈니스 모델 자체가 위기에 빠진 시기였습니다.",
    },
    {
      q: "Icahn은 8년간 Herbalife에서 얼마나 벌었나?",
      a: "Icahn은 2021년 1월 4일 Herbalife 자사주매입 응찰로 $600M(@$48.05/주)을 회수했고, 같은 해 5월 잔여 5M주를 약 $248M에 매도해 8년 보유를 종료했습니다. 평균 매입단가 ~$40 추정 대비 평균 회수가 ~$48~50, 자본차익 +20~25%에 8년 누적 배당 $5/주+ 및 자사주매입 프리미엄을 더해 누적 차익은 약 $1.3B에 달했습니다. 이는 Icahn 커리어 전체에서 가장 성공적인 [카운터 트레이드] 중 하나로 평가되며, Ackman의 ~$1B 손실과 합치면 두 진영 사이 P&L 격차는 약 $2.3B에 달합니다.",
    },
    {
      q: "이 사건이 현재(2026년) 행동주의 시장에 남긴 영향은?",
      a: "세 가지 영향이 지속되고 있습니다. 첫째, [공개 공매도 + 장기 보유] 모델은 사실상 사라졌습니다. Hindenburg Research, Muddy Waters 등 후속 공매도 리서치는 [공개 선언 → 단기 회수] 모델로 전환했습니다. 둘째, [카운터 행동주의]가 정식 전략으로 자리 잡아 Elliott, Starboard, ValueAct 등이 13D 매집 + 미디어 캠페인 + 이사회 좌석 + 자사주매입 압박의 [복합 무기 체계]를 활용합니다. 셋째, CNBC·트위터·블룸버그가 행동주의의 정식 전장으로 격상되면서 [활동가 셀럽 시대]가 표준이 됐습니다. 2021년 GameStop 사태, 2024년 Pershing Square Tontine Holdings SPAC 청산 등이 모두 이 흐름의 연장선상에 있습니다. Herbalife 자체는 2026년 현재도 운영 중이며 사명을 Herbalife Nutrition으로 변경, FTC 합의 retail sales tracking 시스템을 정착시켰습니다.",
    },
  ],
};

export default deal;
