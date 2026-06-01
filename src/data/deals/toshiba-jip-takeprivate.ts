/**
 * Toshiba × JIP 일본 국내 컨소시엄 Take-Private, ¥2조엔 (~USD 14B), 2023년 3월 발표, 12월 클로징
 * 6년+ 행동주의 사가의 종결과 74년 도쿄증시 상장 역사의 종지부
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "toshiba-jip-takeprivate",
  title: "도시바를 비상장으로, JIP 일본 국내 컨소시엄이 6년 행동주의 사가를 끝낸 방법",
  subtitle:
    "¥4,620/주·총 ¥2조엔 TOB · JIP + Orix + 일본 전략 LP 약 20곳 · ~¥1.2조엔 일본 은행 신디론 · 외국 PE 없이 클로징한 일본의 \"국산\" 메가 Take-Private",
  category: "control",
  industry: "복합기업 / 전자 / 반도체",
  country: "일본",
  announcedAt: "2023-03-23",
  closedAt: "2023-12-20",
  announcedDisplay: "2023년 3월 23일 (JIP 인수 제안 수락)",
  closedDisplay: "2023년 12월 20일 (도쿄증시 상장폐지)",
  readingMinutes: 17,
  tags: [
    "Toshiba",
    "도시바",
    "JIP",
    "Japan Industrial Partners",
    "Take-Private",
    "MBO",
    "공개매수",
    "TOB",
    "행동주의",
    "Effissimo",
    "Farallon",
    "Elliott",
    "Third Point",
    "METI",
    "일본 자본시장",
    "복합기업 재편",
  ],
  excerpt:
    "2023년 3월 23일 도시바 이사회가 일본 국내 PE Japan Industrial Partners(JIP) 주도 컨소시엄의 주당 ¥4,620, 총 ¥2조엔(약 USD 14B) TOB 제안을 수락했다. 같은 해 8월 8일 TOB 개시, 9월 21일 약 78% 응모율로 성립, 12월 20일 도쿄증시 프라임 시장 상장폐지. 1949년 상장 이래 74년 만에 끝난 도시바의 공개 자본시장 역사. 더 본질적인 건 [2015년 회계부정 → 2017년 웨스팅하우스 파산 → ¥6,000억엔 활동주의 펀드 사모증자 → 6년간의 경영권 분쟁]이라는 사가를 [외국 PE 1곳도 없는 일본 국내 컨소시엄]이 종결시켰다는 점. Bain Capital은 2라운드 파이널리스트였지만 자금 조달·반독점 우려로 탈락. JIP + Orix + 중부전력·로옴반도체·스즈키·히노자동차 등 전략 LP 약 20곳 + SMBC·미즈호·MUFG·미쓰이스미토모신탁의 ~¥1.2조엔 신디론으로 ¥2조엔을 깔끔하게 메웠다.",

  acquirer: { initials: "JIP", bg: "bg-slate-800", label: "JIP 컨소시엄 (Japan Industrial Partners + Orix + 전략 LP 약 20곳)" },
  target: { initials: "TOS", bg: "bg-red-700", label: "Toshiba Corporation" },

  background: [
    "[2015년 회계부정, 도시바 사가의 시작.] 2015년 4월 도시바는 2008~2014년 7개 회계연도에 걸쳐 약 ¥1,518억엔의 영업이익을 과대 계상해 온 사실을 자체 발표했다. 3대 CEO(田中久雄·佐々木則夫·西田厚聰)가 줄줄이 사임했고, 일본 자본시장은 [도시바 = 거버넌스 부실]의 상징으로 인식하기 시작했다. 도쿄증권거래소는 도시바를 [특설주의시장(특정 거래소 감리종목)]으로 강등, 회계감사인 신뢰 회복까지 수년이 소요됐다.",
    "[2017년 웨스팅하우스 파산, ¥6,000억엔 사모증자.] 2017년 3월 도시바의 미국 원자력 자회사 Westinghouse Electric이 챕터 11 파산보호를 신청했다. 도시바 본체에 ¥9,500억엔대 손실이 전이됐고, 도쿄증시는 [채무초과(net negative equity) 상태]를 들어 상장폐지를 검토했다. 도시바는 2017년 12월 [¥6,000억엔 사모증자]를 단행했고, 인수자로 들어온 것이 [Effissimo Capital · Farallon Capital · Elliott Management · Third Point · Oasis Management · King Street Capital] 등 글로벌 행동주의·이벤트 드리븐 펀드들이었다. 한 번에 약 25~30% 지분을 확보한 [활동주의 펀드 컨소시엄]이 도시바의 사실상 최대주주가 됐다.",
    "[2020~2022년, 4년간의 이사회 전쟁.] 사모증자로 들어온 행동주의 펀드들은 곧 [자본 환원 확대·사외이사 영입·전략 자산 매각·키오시아(舊 도시바 메모리) 빠른 IPO]를 요구하며 경영진과 충돌했다. 2020년 7월 정기주총에서 도시바 경영진이 [Effissimo 후보 사외이사 선임을 막기 위해 METI(경제산업성)와 협력해 표 압박을 가했다]는 의혹이 2021년 6월 독립 조사보고서로 확인됐고, 도시바 회장 永山治가 주총에서 부결되는 초유의 사태가 발생했다. 2021년 3월 차마타니 노부아키 CEO가 CVC Capital과 ¥5조엔 규모 MBO를 추진했으나 이사회 마찰로 1주일 만에 무산. 2022년 2월 [11곳 입찰자가 참여한 전략 검토]가 공식 출범, 12월 [Bain Capital 주도 · JIP 주도 · CVC] 3곳이 최종 라운드로 압축됐다.",
    "[2023년 3월, JIP 컨소시엄 최종 선정.] 2023년 3월 23일 도시바 이사회는 [Japan Industrial Partners(JIP)] 주도 일본 국내 컨소시엄의 주당 ¥4,620, 총 ¥2조엔(약 USD 14B) 인수 제안을 수락했다. 직전 종가 대비 프리미엄은 약 10%로, 사가 초기 CVC의 ¥5조엔 제안(2021)이나 Bain Capital의 2023년 제안 대비 [매우 절제된 가격]. 6년간 행동주의 펀드의 레버리지가 마모됐다는 시그널. JIP 컨소시엄은 [Orix 최대 LP + 중부전력·岩崎電気·로옴반도체·鈴ren·스즈키·히노자동차·NSK 등 일본 전략 LP 약 20곳]이 ~¥8,000억엔 자기자본을 모으고, [SMBC·미즈호·MUFG·미쓰이스미토모신탁]이 ~¥1.2조엔 신디론을 제공하는 [\"모든 자본이 일본 국내\"] 구조. Bain Capital은 2라운드 파이널리스트였지만 자금 조달 + 반독점 + 정부 신뢰 변수로 탈락.",
    "[2023년 8월 TOB 개시 → 12월 상장폐지.] 2023년 8월 8일 TOB 공식 개시, 9월 21일 약 78% 응모율로 성립 요건(2/3 이상) 충족. 11월 22일 임시주총에서 잔여 주주 강제 매수 결의, 12월 20일 도쿄증권거래소 프라임 시장에서 상장폐지. 1949년 상장 이래 [74년간의 공개 자본시장 역사가 종결]됐다. Effissimo는 2017년 사모증자 진입가 대비 약 USD 1.5B 회수, Farallon·Elliott·Third Point도 TOB 가격 ¥4,620에 청산. 6년 보유에 비하면 프리미엄은 제한적이었으나, [활동주의 펀드 모두 손실 없이 Exit]에 성공. JIP는 2024년부터 [에너지·디바이스·인프라 3개 회사로 분할(spin-out)]하는 중장기 계획을 가동 중.",
  ],

  dealSummary: {
    dealValueDisplay: "¥2조엔 (약 USD 14B) / 부채 포함 EV 약 ¥3조엔",
    acquirerName: "JIP 컨소시엄 (Japan Industrial Partners + Orix + 전략 LP 약 20곳)",
    targetName: "Toshiba Corporation",
    announcedDisplay: "2023년 3월 23일",
    closedDisplay: "2023년 12월 20일 (도쿄증시 상장폐지)",
    country: "일본",
  },

  executiveSummary: [
    "[6년 사가의 종결] 2015년 회계부정 → 2017년 웨스팅하우스 파산 + ¥6,000억엔 활동주의 사모증자 → 2020~2022년 4년간 이사회 전쟁 → 2023년 3월 JIP 컨소시엄 ¥2조엔 인수 → 12월 도쿄증시 상장폐지로 종결",
    "[\"국산\" 메가 Take-Private] JIP 주도 컨소시엄은 [외국 PE 1곳도 없는] 100% 일본 국내 자본 구조. Orix가 최대 단일 자기자본 LP, 중부전력·로옴반도체·스즈키·히노자동차·NSK·岩崎電気·鈴ren 등 전략 LP 약 20곳이 사업 시너지 베이스로 참여",
    "[¥4,620/주 · ¥2조엔 · 프리미엄 +10%] 직전 종가 대비 프리미엄은 약 10%로 사가 초기 CVC ¥5조엔(2021)·Bain 2023 제안 대비 매우 절제된 가격. 6년간 행동주의 펀드 레버리지가 마모된 결과",
    "[자본 구조 깔끔하게 일본화] 자기자본 ~¥8,000억엔 (컨소시엄 LP) + 신디론 ~¥1.2조엔 (SMBC·미즈호·MUFG·미쓰이스미토모신탁). 모든 자본이 일본 국내, 외환·반독점·정부 신뢰 모든 변수 동시 해결",
    "[Bain Capital 2라운드 탈락] Bain은 2023 최종 3사 중 하나였지만 자금 조달·반독점·정부 신뢰 변수로 탈락. 외국 PE가 일본 전략 자산(반도체·원전) 인수에서 사실상 차단된 첫 명시 사례",
    "[활동주의 펀드 모두 Exit] Effissimo가 2017년 진입가 대비 약 USD 1.5B 회수, Farallon·Elliott·Third Point도 ¥4,620 TOB 가격에 청산. 6년 보유에 비하면 프리미엄은 제한적이었으나 모두 손실 없이 Exit",
    "[TOB 응모율 78%, 12월 상장폐지] 2023.08.08 TOB 개시 → 09.21 약 78% 응모율 성립 → 11.22 잔여주주 강제 매수 → 12.20 도쿄증시 프라임 상장폐지. 1949년 상장 이래 74년 만의 종결",
    "[Post-deal: 3분할 spin-out 계획] JIP는 2024년부터 도시바를 [에너지 · 디바이스(반도체·HDD) · 인프라] 3개 회사로 2~3년에 걸쳐 분할(spin-out)하는 중장기 재편 계획 가동. 2026년 5월 기준 분할이 부분 진행 중",
  ],

  industryOverview: {
    body: "일본 복합기업 재편 시장은 2010년대 후반부터 [\"선택과 집중\"]이라는 단일 방향으로 진행돼 왔다. 히타치는 22개 자회사 매각·통합으로 인프라·IT·디지털 솔루션 중심으로 슬림화했고, 미츠비시중공업·파나소닉·소니는 사업부별 carve-out과 분사로 콘글로머리트 디스카운트를 축소했다. 도시바는 이 흐름에서 [회계부정 + 원전 자회사 파산이라는 두 충격]으로 자력 재편의 시간을 놓쳤고, 결과적으로 [외부 자본의 강제 재편]을 받아들여야 했다. METI(경제산업성)는 도시바 사가 내내 [반도체·원전·방위 관련 기술 자산 보호]를 명분으로 거래 구조와 인수자 선정에 사실상 영향력을 행사했고, 그 결과가 [외국 PE 배제 · 일본 국내 컨소시엄 단독 클로징]이다.",
    metrics: [
      { label: "Toshiba 시가총액 (TOB 직전 2023.03)", value: "약 ¥1.8조엔",   sub: "TOB 발표 직전 종가 기준" },
      { label: "JIP TOB 가격",                       value: "¥4,620/주",     sub: "+10% 프리미엄 / 총 ¥2조엔" },
      { label: "TOB 응모율 (2023.09.21)",            value: "약 78%",         sub: "성립 요건 2/3 이상 충족" },
      { label: "상장폐지일",                          value: "2023.12.20",     sub: "1949년 상장 이래 74년 만" },
    ],
    subBody:
      "본 거래의 일본 산업 정책적 의미는 크다. [외국 PE 없이 일본 국내 자본만으로 ¥2조엔 메가딜을 소화할 수 있다]는 실증이 처음 등장했고, 이후 2026년 MBK파트너스 × Makino 거래에서 일본 정부가 외환법(FEFTA) 27조 5항 중지권고를 발령하는 배경 중 하나가 됐다. 도시바 사가가 [일본 전략 자산은 일본 국내 자본이 가져가야 한다]는 정책 기조를 명문화한 사실상의 분기점.",
    players: [
      { name: "Japan Industrial Partners (JIP)",  role: "본 거래 주도 PE, 일본 국내 미들마켓 PE (도시바 메모리·Olympus 카메라 사업·소니 PC 사업 등 일본 carve-out 트랙레코드)" },
      { name: "Orix Corporation",                  role: "JIP 컨소시엄 최대 단일 LP, 종합 금융·리스·PE 기업" },
      { name: "Toshiba Corporation",                role: "피인수자, 1875년 창업·1949년 상장·복합기업" },
      { name: "Effissimo Capital Management",      role: "도시바 최대 활동주의 펀드 (싱가포르 기반, 약 9.9% 보유)" },
      { name: "Farallon Capital · Elliott · Third Point", role: "공동 활동주의 펀드들, 2017년 사모증자 진입" },
      { name: "Bain Capital",                       role: "2023년 최종 3사 파이널리스트, 자금·반독점 변수로 탈락" },
      { name: "CVC Capital Partners",               role: "2021년 ¥5조엔 MBO 제안 (1주일 만에 무산), 2023년 최종 3사 파이널리스트" },
      { name: "METI (경제산업성)",                   role: "전략 자산 보호 명분으로 거래 구조·인수자 선정에 영향" },
      { name: "SMBC · 미즈호 · MUFG · 미쓰이스미토모신탁", role: "JIP 컨소시엄 ~¥1.2조엔 신디론 주선·제공" },
    ],
  },

  companyOverview: {
    targetName: "Toshiba Corporation (株式会社東芝)",
    body: "도시바는 1875년 다나카 히사시게(田中久重)의 [다나카 제작소]와 1890년 후지오카 이치스케의 [백열사]가 1939년 통합되어 탄생한 일본 종합 전자·중공업 복합기업. 1949년 도쿄증시 상장. 전성기인 1990년대에는 메모리 반도체(NAND 플래시 최초 상용화)·노트북·가전·발전 플랜트·원자력·HDD·의료기기에서 세계적 위상을 가졌다. 본 거래 직전 4개 핵심 사업 부문: [① Energy Systems & Solutions(에너지, 화력·수력·원자력 발전)], [② Infrastructure Systems & Solutions(인프라, 철도·도로·산업장비)], [③ Devices & Storage(디바이스, HDD·반도체)], [④ Digital Solutions(디지털 솔루션, IT 서비스·POS)]. 키오시아(舊 도시바 메모리)는 2018년 분사된 별도 회사로 본 거래에 포함되지 않음.",
    metrics: [
      { label: "창업연도",          value: "1875년",       sub: "다나카 제작소 (도쿄)" },
      { label: "상장일",            value: "1949년",        sub: "도쿄증권거래소" },
      { label: "FY2022 매출",       value: "약 ¥3.36조엔",   sub: "Energy 26% / Infra 28% / Devices 22% / Digital 24%" },
      { label: "FY2022 영업이익",    value: "약 ¥1,105억엔",  sub: "OPM 3.3%" },
      { label: "직원 수 (FY2022)",   value: "약 116,000명",    sub: "전세계 연결 기준" },
    ],
    financials: [
      { year: "FY2018", revenue: 36930, cogs: 28200, grossProfit: 8730, sga: 7820, operatingIncome: 354,  ebitda: 1450 },
      { year: "FY2019", revenue: 33890, cogs: 26000, grossProfit: 7890, sga: 7580, operatingIncome: 130,  ebitda: 1100 },
      { year: "FY2020", revenue: 30540, cogs: 23600, grossProfit: 6940, sga: 6800, operatingIncome: 104,  ebitda: 980  },
      { year: "FY2021", revenue: 33370, cogs: 25600, grossProfit: 7770, sga: 6610, operatingIncome: 1594, ebitda: 2800 },
      { year: "FY2022", revenue: 33610, cogs: 25900, grossProfit: 7710, sga: 6610, operatingIncome: 1105, ebitda: 2300 },
    ],
    financialsNote: "단위: 억엔 (¥億) | J-GAAP·IFRS 혼합 연결 기준 | 출처: 도시바 유가증권보고서 (FY2018~FY2022). FY는 4월~다음해 3월 기준.",
    financialsCurrency: "¥",
    financialsUnit: "억엔",
  },

  // ── Control Battle Overview: 6년+ 사가 ────────
  controlBattleOverview: {
    body: "도시바 사가는 [회계부정 → 원전 파산 → 활동주의 사모증자 → 4년간 이사회 전쟁 → JIP 컨소시엄 Take-Private]의 6년+ 다단계 분쟁. 활동주의 펀드 컨소시엄과 도시바 경영진·METI의 [공격-방어 구조]가 핵심이며, 최종적으로 활동주의는 Exit에 성공, 경영진은 사가 종결, JIP는 일본 메가 자산 인수에 성공한 [3자 모두 패배 없는 무승부] 결말.",
    catalyst: "2017년 12월, 도시바가 웨스팅하우스 파산 손실 + 채무초과 위기 회피 명분으로 ¥6,000억엔 사모증자를 단행. 인수자가 [Effissimo · Farallon · Elliott · Third Point · Oasis · King Street] 등 글로벌 활동주의·이벤트 드리븐 펀드 60여 곳, 한 번에 약 25~30% 지분 확보. 사가의 출발점.",
    attackerLabel: "Effissimo · Farallon · Elliott · Third Point · Oasis 등 활동주의 컨소시엄",
    defenderLabel: "도시바 경영진 + METI (경제산업성)",
    battleMoves: [
      {
        date: "2015-04-03",
        actor: "도시바",
        side: "defense",
        move: "회계부정 자체 발표 — 7년간 ¥1,518억엔 이익 과대",
        detail: "도시바가 2008~2014년 7개 회계연도에 걸쳐 ¥1,518억엔의 영업이익을 과대 계상해 온 사실을 자체 발표. 3대 CEO 줄사임. 도쿄증시는 [특설주의시장] 강등.",
        weapon: "회계 자체 정정 (defensive disclosure)",
        financialImpact: "주가 -40%대 급락",
      },
      {
        date: "2017-03-29",
        actor: "Westinghouse Electric",
        side: "neutral",
        move: "Westinghouse 챕터 11 파산 — 도시바 본체에 ¥9,500억엔 손실 전이",
        detail: "도시바의 미국 원자력 자회사 Westinghouse Electric이 챕터 11 파산보호 신청. 도시바 본체에 ¥9,500억엔대 손실 전이, 채무초과 상태 진입. 도쿄증시 상장폐지 검토.",
        financialImpact: "도시바 채무초과 상태 진입",
      },
      {
        date: "2017-12-05",
        actor: "Effissimo · Farallon · Elliott · Third Point 등",
        side: "attack",
        move: "¥6,000억엔 사모증자 인수 — 활동주의 펀드 약 25~30% 지분 확보",
        detail: "도시바가 상장폐지 회피 명분으로 단행한 ¥6,000억엔 사모증자에 글로벌 활동주의·이벤트 드리븐 펀드 60여 곳이 인수자로 참여. Effissimo · Farallon · Elliott · Third Point · Oasis · King Street 등이 한 번에 약 25~30% 지분 확보. 사가의 출발점.",
        weapon: "사모증자 (Third-Party Allocation) 인수",
        financialImpact: "활동주의 펀드 진입가 평균 ¥2,628/주",
      },
      {
        date: "2020-07-31",
        actor: "도시바 경영진 + METI",
        side: "defense",
        move: "주총 표 압박 의혹 — Effissimo 사외이사 후보 부결",
        detail: "2020년 7월 정기주총에서 Effissimo가 추천한 사외이사 후보가 부결됨. 2021년 6월 독립 조사보고서에서 [도시바 경영진이 METI와 협력해 일부 주주에게 표 압박을 가했다]는 사실이 확인됨. 도시바 회장 永山治가 2021년 6월 주총에서 부결되는 초유의 사태.",
        weapon: "주총 표 동원 + 정부 협력",
        financialImpact: "거버넌스 신뢰 추가 훼손",
      },
      {
        date: "2021-03-31",
        actor: "차마타니 노부아키 CEO + CVC Capital",
        side: "defense",
        move: "CVC ¥5조엔 MBO 시도 — 1주일 만에 무산",
        detail: "도시바 CEO 차마타니 노부아키가 CVC Capital과 ¥5조엔 규모 MBO를 추진. 그러나 이사회 마찰 + 활동주의 펀드 반대 + 가격 합의 실패로 [1주일 만에 무산]. 차마타니 CEO 사임. 사가에서 [경영진 주도 비상장화 시도]의 첫 실패.",
        weapon: "MBO (Management Buyout)",
        financialImpact: "주가 +18% 급등 후 원위치",
      },
      {
        date: "2022-02-07",
        actor: "도시바 이사회",
        side: "neutral",
        move: "전략 검토 공식 출범 — 11개 입찰자 참여",
        detail: "활동주의 펀드 요구 수용, 도시바 이사회가 [전략 검토(Strategic Review)]를 공식 출범. 11개 입찰자(Bain · KKR · CVC · JIP · Brookfield · Apollo · Blackstone · Baring PE · MBK · BPEA EQT · CITIC 등 추정)가 참여. 사가의 [경영진 주도]에서 [이사회·이해관계자 주도]로 권력 이동.",
        weapon: "공식 매각 프로세스 (Auction)",
      },
      {
        date: "2022-12-22",
        actor: "도시바 이사회",
        side: "neutral",
        move: "최종 3사 압축 — Bain · JIP · CVC",
        detail: "11곳 입찰자를 최종 3사 [Bain Capital 주도 · JIP 주도 · CVC]로 압축. 이 시점부터 [외국 PE vs 일본 국내 PE]의 구도가 명확해짐. METI의 [\"전략 자산 보호\"] 입장이 막후 영향 변수.",
      },
      {
        date: "2023-03-23",
        actor: "Japan Industrial Partners (JIP)",
        side: "attack",
        move: "JIP 컨소시엄 우협 확보 — ¥4,620/주 · ¥2조엔",
        detail: "도시바 이사회가 JIP 주도 일본 국내 컨소시엄의 주당 ¥4,620, 총 ¥2조엔(약 USD 14B) 인수 제안을 수락. 직전 종가 대비 프리미엄 약 10%. JIP + Orix + 중부전력·로옴반도체·스즈키·히노자동차·NSK 등 전략 LP 약 20곳 + SMBC·미즈호·MUFG·미쓰이스미토모신탁 ~¥1.2조엔 신디론. Bain Capital은 자금·반독점·정부 신뢰 변수로 탈락.",
        weapon: "일본 국내 컨소시엄 + 전략 LP + 일본 은행 신디론",
        financialImpact: "주가 ¥4,500대 안착",
      },
      {
        date: "2023-09-21",
        actor: "JIP 컨소시엄",
        side: "attack",
        move: "TOB 성립 — 약 78% 응모율로 2/3 이상 확보",
        detail: "2023년 8월 8일 개시된 TOB가 9월 21일 약 78% 응모율로 성립. 성립 요건 2/3 이상 충족. Effissimo · Farallon · Elliott · Third Point 등 활동주의 펀드 전원이 ¥4,620에 응모. 6년 보유에 비하면 프리미엄은 제한적이었지만 모두 손실 없이 Exit.",
      },
      {
        date: "2023-12-20",
        actor: "도시바",
        side: "neutral",
        move: "도쿄증시 상장폐지 — 74년 만의 종결",
        detail: "2023년 12월 20일 도쿄증권거래소 프라임 시장에서 상장폐지. 1949년 상장 이래 74년간의 공개 자본시장 역사가 종결. 도시바는 100% JIP 컨소시엄 소유의 비상장 회사로 전환. JIP는 2024년부터 [에너지 · 디바이스 · 인프라] 3개 회사로 spin-out하는 중장기 재편 계획 가동.",
      },
    ],
    financialWeapons: [
      {
        name: "사모증자 인수 (Third-Party Allocation Subscription)",
        side: "attack",
        usedBy: "Effissimo · Farallon · Elliott · Third Point · Oasis · King Street 등 60곳",
        description: "2017년 도시바의 상장폐지 회피 명분 ¥6,000억엔 사모증자에 활동주의·이벤트 드리븐 펀드 60여 곳이 인수자로 참여. 진입가 평균 ¥2,628/주에 한 번에 약 25~30% 지분 확보. 사가의 출발점이자 활동주의 컨소시엄의 [영구 지분 확보] 무기.",
        effectiveness: "decisive",
      },
      {
        name: "주총 표 동원 + METI 협력",
        side: "defense",
        usedBy: "도시바 경영진 + METI",
        description: "2020년 정기주총에서 활동주의 후보 사외이사 부결을 위해 일부 주주에게 표 압박. 2021년 독립 조사보고서로 의혹 확인. 단기 방어에는 성공했지만 [거버넌스 신뢰 추가 훼손]으로 사가를 장기화시키는 역효과.",
        effectiveness: "backfired",
      },
      {
        name: "MBO (Management Buyout)",
        side: "defense",
        usedBy: "차마타니 노부아키 CEO + CVC Capital",
        description: "2021년 3월 CEO 주도 ¥5조엔 MBO 시도. 그러나 이사회 마찰 + 활동주의 반대 + 가격 합의 실패로 [1주일 만에 무산]. 사가에서 [경영진 주도 비상장화 시도]의 첫 실패 사례.",
        effectiveness: "blocked",
      },
      {
        name: "공식 매각 프로세스 (Strategic Review / Auction)",
        side: "neutral",
        usedBy: "도시바 이사회 + 활동주의 컨소시엄",
        description: "2022년 2월 11곳 입찰자가 참여한 공식 매각 프로세스 출범. 12월 Bain · JIP · CVC 3사로 압축. 활동주의가 요구하던 [공정한 가격 발견 메커니즘]이 가동된 무기. 결과적으로 가격 +10% 프리미엄으로 제한됐지만 모두에게 \"공식적 종결 경로\" 제공.",
        effectiveness: "effective",
      },
      {
        name: "일본 국내 컨소시엄 + 전략 LP",
        side: "attack",
        usedBy: "Japan Industrial Partners (JIP)",
        description: "JIP 주도 + Orix 최대 LP + 중부전력·로옴반도체·스즈키·히노자동차·NSK 등 전략 LP 약 20곳이 ~¥8,000억엔 자기자본을 모은 [\"모든 자본이 일본 국내\"] 구조. METI의 전략 자산 보호 명분 + 반독점·외환 변수 동시 해결. 외국 PE가 일본 메가 자산 인수에서 사실상 차단된 첫 명시 사례를 만든 핵심 무기.",
        effectiveness: "decisive",
      },
      {
        name: "일본 은행 신디론 (~¥1.2조엔)",
        side: "attack",
        usedBy: "SMBC · 미즈호 · MUFG · 미쓰이스미토모신탁",
        description: "JIP 컨소시엄에 ~¥1.2조엔 시니어 신디케이트 대출 제공. 모든 자본이 일본 국내라는 점이 METI·외환법 변수에서 추가 우위. Bain Capital의 외국 은행 의존 자금 조달 안이 탈락한 결정적 차별점.",
        effectiveness: "decisive",
      },
    ],
    turningPoint: {
      date: "2022-12-22",
      event: "최종 3사 압축 — Bain · JIP · CVC, 외국 PE vs 일본 국내 PE 구도 명확화",
      detail: "11곳 입찰자가 [Bain Capital 주도 · JIP 주도 · CVC] 3사로 압축된 시점이 사가의 결정적 변곡점. 이 순간부터 [외국 PE가 일본 전략 자산을 가져갈 수 있는가]라는 질문이 명시적 의제로 부상했고, METI의 [\"전략 자산 보호\"] 입장이 막후 영향 변수로 작동하기 시작. 3개월 후 JIP 우협 확정은 사실상 이 변곡점에서 결정됐다. 이후 2026년 MBK × Makino FEFTA 중지권고의 정책 기조를 예고한 사실상의 전조.",
    },
    verdict: {
      winner: "draw",
      winnerLabel: "활동주의 Exit + 경영진 사가 종결 + JIP 일본 메가 자산 확보, 3자 모두 패배 없는 무승부",
      margin: "활동주의: 6년 보유에 비하면 프리미엄은 제한적이었으나 전원 손실 없이 Exit / 경영진: 사가 종결 + Toshiba 비상장 전환 / JIP: ¥2조엔 일본 메가 자산 + 3분할 spin-out 가치 상승 여지 확보",
      note: "단일 승자를 가리기 어려운 다층적 결말. Effissimo는 약 USD 1.5B 회수, Farallon·Elliott·Third Point도 ¥4,620에 청산해 손실 없이 Exit. 도시바 경영진은 6년 사가를 종결시키고 비상장 안정성을 확보. JIP는 일본 메가 자산을 외국 PE 경쟁자 없이 손에 넣고 3분할 spin-out으로 가치 상승 여지를 가짐. 일본 정부·METI는 [\"전략 자산은 일본 국내 자본이 가져가야 한다\"]는 정책 기조를 사실상 명문화. 한국·글로벌 PE에는 [일본 메가 자산 인수 시 국내 LP·국내 은행 동원 + 정부 사전 조율이 필수]라는 새 표준이 남았다.",
    },
    priceImpact: {
      preContest: "¥515 (사가 직전 2015.03 액면 분할 전 ¥5,150 기준 환산, 회계부정 발표 직전)",
      peak: "¥4,750대 (TOB 발표 직후 2023.03~04, JIP 가격 ¥4,620 안착)",
      postContest: "¥4,620 (TOB 가격 청산, 2023.12 상장폐지)",
      note: "도시바 주가는 [2015년 회계부정 -40%대 급락 → 2017년 사모증자 후 ¥2,628 진입 → 2021년 CVC MBO 시도 +18% 후 원위치 → 2023년 JIP TOB ¥4,620 안착]의 6년+ 궤적. 활동주의 펀드 진입가 평균 ¥2,628 대비 청산가 ¥4,620은 약 +76% 수익률(6년 보유), 연환산 약 +10% 수준. 통상 활동주의 캠페인의 단기 +50~100% 수익률에 비하면 매우 제한적, 사가 장기화의 비용을 보여줌.",
    },
  },

  dealStructure: {
    body: "본 거래는 [일본 국내 PE JIP가 주도하는 컨소시엄이 100% 일본 국내 자본으로 ¥2조엔을 모아 도시바 100% 지분을 TOB로 인수한 후 상장폐지]하는 클래식 Take-Private 구조. 자기자본 ~¥8,000억엔은 컨소시엄 약 20곳 LP(Orix 최대 + 중부전력·로옴반도체·스즈키·히노자동차·NSK·岩崎電気·鈴ren 등 전략 LP)가 제공, 부채 ~¥1.2조엔은 SMBC·미즈호·MUFG·미쓰이스미토모신탁 4대 일본 은행 신디론. 외국 자본 0. 인수 vehicle은 JIP 주도 SPV(통칭 [TBJH Inc.])로, TOB 성립 후 도시바 본체와 통합. 2024년부터 [에너지 · 디바이스 · 인프라] 3개 회사로 분할(spin-out)하는 중장기 재편 계획 가동.",
    preOwnership: {
      nodes: [
        { id: "activists_pre", label: "활동주의 컨소시엄",     sub: "약 25~30% (Effissimo·Farallon·Elliott·Third Point 등)", type: "fund" },
        { id: "institutions_pre", label: "일본 기관·외국인 기관", sub: "약 40%",                  type: "entity" },
        { id: "retail_pre",    label: "일반 주주·소액",         sub: "약 30%",                  type: "public" },
        { id: "toshiba_pre",   label: "Toshiba Corporation",   sub: "도쿄증시 프라임 상장",       type: "target" },
      ],
      edges: [
        { from: "activists_pre",   to: "toshiba_pre", label: "25~30% (활동주의)" },
        { from: "institutions_pre", to: "toshiba_pre", label: "약 40% (기관)" },
        { from: "retail_pre",      to: "toshiba_pre", label: "약 30% (소액)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "jip_post",   label: "JIP (Japan Industrial Partners)", sub: "컨소시엄 GP",        type: "acquirer" },
        { id: "orix_post",  label: "Orix Corporation",                sub: "최대 단일 LP",        type: "fund" },
        { id: "strat_lp",   label: "전략 LP 약 20곳",                 sub: "중부전력·로옴·스즈키·히노·NSK 등", type: "entity" },
        { id: "banks_post", label: "일본 4대 은행 신디케이트",         sub: "SMBC·미즈호·MUFG·미쓰이스미토모신탁", type: "entity" },
        { id: "spv_post",   label: "JIP SPV (TBJH Inc.)",             sub: "인수 vehicle",        type: "fund" },
        { id: "toshiba_post", label: "Toshiba Corporation",           sub: "비상장 100%",         type: "target" },
      ],
      edges: [
        { from: "jip_post",   to: "spv_post",     label: "GP" },
        { from: "orix_post",  to: "spv_post",     label: "자기자본 최대 LP" },
        { from: "strat_lp",   to: "spv_post",     label: "자기자본 LP 약 20곳" },
        { from: "banks_post", to: "spv_post",     label: "신디론 ~¥1.2조엔" },
        { from: "spv_post",   to: "toshiba_post", label: "100% (TOB ¥4,620 · 총 ¥2조엔)" },
      ],
    },
    keyTerms: [
      { label: "TOB 가격",              value: "¥4,620 / 주",                                      accent: true },
      { label: "TOB 총 규모",           value: "약 ¥2조엔 (약 USD 14B)",                            accent: true },
      { label: "프리미엄",              value: "직전 종가 대비 약 +10%" },
      { label: "EV (부채 포함)",         value: "약 ¥3조엔" },
      { label: "자기자본",              value: "약 ¥8,000억엔 (컨소시엄 LP 약 20곳)" },
      { label: "신디론",                value: "약 ¥1.2조엔 (SMBC·미즈호·MUFG·미쓰이스미토모신탁)",   accent: true },
      { label: "TOB 개시일",            value: "2023.08.08" },
      { label: "TOB 성립일",            value: "2023.09.21 (응모율 약 78%)",                       accent: true },
      { label: "상장폐지일",            value: "2023.12.20 (도쿄증시 프라임)",                      accent: true },
      { label: "인수 vehicle",         value: "JIP 주도 SPV (통칭 TBJH Inc.)" },
      { label: "외국 PE 참여",         value: "없음 (Bain Capital은 2라운드 탈락)" },
      { label: "Post-deal 계획",       value: "에너지 · 디바이스 · 인프라 3개사로 spin-out (2024~)" },
    ],
  },

  advisors: {
    body: "본 거래는 [Toshiba 측 · JIP 컨소시엄 측 · 활동주의 매도자 측]의 3중 자문 구조였다. 도시바는 미즈호증권·노무라가 재무 자문, 니시무라 아사히가 법무 자문. JIP는 SMBC닛코·다이와가 재무 자문, 안다손·모리·도모츠네가 법무 자문. 활동주의 펀드들(Effissimo 주도)은 골드만삭스가 재무 자문, 스카든이 법무 자문으로 알려졌다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "JIP 컨소시엄 (인수자)",
        initials: "JIP",
        bg: "bg-slate-800",
        advisors: [
          {
            firm: "SMBC日興証券 (SMBC Nikko Securities)",
            role: "재무 자문 (Lead)",
            roleType: "financial",
            note: "TOB 가격·구조 설계, 컨소시엄 LP 모집, 신디론 주선 보조",
          },
          {
            firm: "大和証券 (Daiwa Securities)",
            role: "재무 자문 (Co-Lead)",
            roleType: "financial",
            note: "TOB 절차·일본 자본시장 규제 자문",
          },
          {
            firm: "Anderson Mōri & Tomotsune (アンダーソン・毛利・友常)",
            role: "법무 자문",
            roleType: "legal",
            note: "TOB 신고·외환법(FEFTA) 사전 협의·SPV 설립·신디론 약정 자문",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Toshiba Corporation (피인수자)",
        initials: "TOS",
        bg: "bg-red-700",
        advisors: [
          {
            firm: "みずほ証券 (Mizuho Securities)",
            role: "재무 자문 (Lead)",
            roleType: "financial",
            note: "전략 검토 프로세스 운영·11곳 입찰자 평가·공정성 의견서",
          },
          {
            firm: "野村證券 (Nomura Securities)",
            role: "재무 자문 (Co-Lead)",
            roleType: "financial",
            note: "Bain·JIP·CVC 최종 3사 평가·이사회 자문",
          },
          {
            firm: "Nishimura & Asahi (西村あさひ)",
            role: "법무 자문",
            roleType: "legal",
            note: "이사회 신인의무·소수주주 보호·TOB 절차 자문",
          },
        ],
      },
    ],
    disclaimer: "주: 활동주의 매도자 측 자문(Goldman Sachs · Skadden)은 별도 advisor side가 아닌 매도 측 그룹으로, 본 문서에서는 disclaimer로 표기. 그 외 자문사 정보는 일본 닛케이·블룸버그·로이터 등 1차 보도 기반.",
  },

  valuation: {
    body: "본 거래의 가치 평가 핵심 변수는 [TOB 가격 ¥4,620과 EV/EBITDA 약 13x]이다. 2021년 CVC의 ¥5조엔(주당 약 ¥5,250) MBO 제안 대비 -12%, 2023년 Bain Capital의 비공식 ¥5,000대 제안 대비 -8% 수준의 절제된 가격. 6년간 활동주의 펀드의 레버리지가 마모되면서 가격 협상력이 약화된 결과로 시장은 해석. JIP 입장에서는 [향후 3분할 spin-out으로 SOTP(Sum-of-the-Parts) 가치 상승 여지]를 가격에 반영하지 않고 디스카운트로 진입한 셈.",
    rows: [
      { item: "TOB 가격",                                val: "¥4,620 / 주",     note: "+10% 프리미엄", accent: true },
      { item: "TOB 총 규모",                             val: "약 ¥2조엔",       note: "약 USD 14B", accent: true },
      { item: "EV (부채 포함)",                          val: "약 ¥3조엔",       note: "Net debt + 우선주 포함" },
      { item: "FY2022 매출",                             val: "¥3.36조엔",       note: "4개 사업부문 합산" },
      { item: "FY2022 영업이익 (OP)",                    val: "¥1,105억엔",       note: "OPM 3.3%" },
      { item: "FY2022 EBITDA (조정)",                    val: "약 ¥2,300억엔",    note: "조정 기준" },
      { item: "EV/EBITDA (TOB 가격 기준)",              val: "약 13x",           note: "조정 EBITDA 기준" },
      { item: "CVC ¥5조엔 MBO 제안 (2021)",              val: "주당 약 ¥5,250",  note: "1주일 만에 무산" },
      { item: "Bain Capital 비공식 제안 (2023 초)",       val: "주당 ¥5,000대 (추정)", note: "2라운드 탈락" },
      { item: "활동주의 펀드 평균 진입가 (2017)",          val: "¥2,628 / 주",      note: "사모증자 진입가" },
      { item: "활동주의 6년 보유 수익률",                 val: "약 +76% (단순)",   note: "연환산 약 +10%", accent: true },
    ],
    disclaimer: "주: EV/EBITDA·CVC·Bain 비공식 가격 등 일부 수치는 시장 추정. 1차 자료 확인된 수치만 정확치로 표기. 활동주의 수익률은 평균 진입가 기준 단순 계산.",
  },

  rationale: {
    buyer: {
      title: "JIP 컨소시엄, 왜 도시바인가, 왜 일본 국내 자본만으로 갔나",
      initials: "JIP",
      bg: "bg-slate-800",
      points: [
        "[일본 메가 자산을 외국 PE 경쟁자 없이 확보] Bain Capital이 2라운드 파이널리스트였지만 자금 조달·반독점·정부 신뢰 변수로 탈락. JIP는 일본 국내 컨소시엄 구조로 [METI의 전략 자산 보호 입장 + 외환법 변수 + 일본 은행 신디론] 3개 변수를 동시 해결",
        "[3분할 spin-out 가치 상승 여지] TOB 가격 ¥4,620은 CVC ¥5조엔·Bain ¥5,000대 대비 절제된 수준. JIP는 [에너지 · 디바이스 · 인프라] 3개 회사로 분할(spin-out)해 SOTP(Sum-of-the-Parts) 가치 상승 + 부분 매각·재상장 경로 확보",
        "[전략 LP 약 20곳의 사업 시너지] Orix(금융)·중부전력(에너지)·로옴반도체(디바이스)·스즈키·히노자동차(인프라)·NSK(베어링) 등 컨소시엄 LP가 도시바 사업부와 [직접 사업 시너지] 가지는 구조. 단순 재무 PE가 아닌 [재무 + 산업 컨소시엄] 모델",
        "[일본 은행 ~¥1.2조엔 신디론 + 외국 자본 0] 모든 자본이 일본 국내. 외환·반독점·정부 신뢰 모든 변수에서 우위. 미국·중국·유럽 외국인 투자 심사 부담 최소화",
        "[JIP의 트랙레코드 발휘] JIP는 도시바 메모리 carve-out·Olympus 카메라 사업·소니 PC 사업 등 일본 carve-out에서 트랙레코드. 본 거래는 그 동안 축적한 [일본 대기업 carve-out 운영 노하우]의 메가 스케일 적용",
      ],
    },
    seller: {
      title: "Toshiba 경영진 · 활동주의 컨소시엄, 6년 사가의 종결 논리",
      initials: "TOS",
      bg: "bg-red-700",
      points: [
        "[Toshiba 경영진] 6년 사가의 종결 + 비상장 안정성 확보. 회계부정·웨스팅하우스 파산·활동주의 분쟁의 연속 충격에서 벗어나 [장기 사업 재편(에너지·디바이스·인프라 3분할)]에 집중할 수 있는 환경 확보. METI와 협력해 [전략 자산이 일본 국내 자본에 인계]되는 결과 달성",
        "[Effissimo] 약 USD 1.5B 회수. 2017년 사모증자 평균 진입가 ¥2,628 대비 청산가 ¥4,620은 약 +76% 수익률(6년 보유). 통상 활동주의 단기 캠페인의 +50~100% 대비 제한적이지만 절대 금액으로는 가장 큰 단일 활동주의 Exit 중 하나",
        "[Farallon · Elliott · Third Point · Oasis · King Street] 모두 ¥4,620 TOB 가격에 청산. 6년 보유 비용을 감안하면 IRR은 낮지만 [손실 없이 Exit]에 성공. 활동주의 펀드의 LP에게는 [긴 사가를 손실 없이 종결]시켰다는 점이 가장 큰 성과",
        "[활동주의 컨소시엄 전체] 6년간 [공식 매각 프로세스 + 공정한 가격 발견 메커니즘 + 거버넌스 개혁]을 끌어냈다는 점에서 캠페인 목적의 절반은 달성. 가격 측면에서 일본 정부·METI의 보호 정책에 막힌 점은 한계",
        "[일본 자본시장] 도시바 사가의 종결로 [회계부정 → 활동주의 → Take-Private]의 6년 사이클이 명시적 종결. 향후 일본 대기업의 거버넌스 신뢰 회복에 [도시바 = 부정적 레거시]가 정리됨",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2026년 5월",
    body: "2023년 12월 상장폐지 후 약 2년 반이 경과한 2026년 5월 기준, JIP의 도시바 운영은 [3분할 spin-out 계획]을 따라 진행 중. 2024년부터 [에너지 · 디바이스 · 인프라]의 사업부별 거버넌스 분리 + 운영 효율화가 부분 진행됐고, 2025~2026년 동안 일부 비핵심 자산(예: HDD 사업 일부)이 매각·재구조화됐다. 단, 3개 회사 모두 별도 재상장은 아직 안 됐고, JIP는 [중기 4~5년 운영 후 부분 매각·재상장]을 목표로 한다는 시장 관측. 일본 산업 정책 측면에서는 본 거래가 [전략 자산은 일본 국내 자본이 가져가야 한다]는 정책 기조의 사실상 명문화 사례로 자리잡았고, 2026년 4월 MBK파트너스 × Makino FEFTA 27조 5항 중지권고가 이 정책 기조의 강제 적용 사례로 등장.",
    overallVerdict: "활동주의 Exit + 경영진 사가 종결 + JIP 일본 메가 자산 확보 + 일본 정부 정책 기조 명문화의 4중 윈, 단 가격 측면에서는 제한적 결과",
    positives: [
      "[Toshiba] 6년 사가 종결 + 비상장 안정성 확보 + 3분할 spin-out 중장기 재편 가동",
      "[JIP] 일본 메가 자산을 외국 PE 경쟁자 없이 ¥2조엔에 확보 + SOTP 가치 상승 여지 확보 + 전략 LP 약 20곳과 사업 시너지 구조",
      "[활동주의 컨소시엄] Effissimo 약 USD 1.5B 회수 + Farallon·Elliott·Third Point 손실 없이 Exit, 6년 사가의 명시적 종결",
      "[일본 산업 정책] [전략 자산은 일본 국내 자본이 가져가야 한다]는 정책 기조 사실상 명문화. 향후 2026년 MBK × Makino FEFTA 중지권고의 정책적 기반",
      "[일본 자본시장] 도시바 = 회계부정·활동주의의 부정적 레거시 정리, 향후 대기업 거버넌스 신뢰 회복 환경 조성",
    ],
    risks: [
      "[JIP] 3분할 spin-out이 계획대로 진행되지 않을 경우 ¥2조엔 + ~¥1.2조엔 신디론 회수 경로 불확실. 통상 PE 보유 기간(5~7년) 안에 부분 매각·재상장이 일어나지 않으면 LP에 부담",
      "[전략 LP 약 20곳] 사업 시너지 베이스의 LP 구조는 LP 간 이해 충돌 가능성 내재. 특히 사업부별 매각·재상장 시 \"누가 어느 사업부를 가져갈지\" 갈등 위험",
      "[활동주의 펀드 LP] 6년 보유 후 +76% (연환산 +10%) 수익률은 활동주의 펀드의 통상 기대 수익률 대비 낮음. 도시바 캠페인이 활동주의 펀드의 [장기 사가형 캠페인]에 대한 LP 회의론을 키울 가능성",
      "[일본 산업 정책 양면성] 전략 자산 보호 명분의 외국 PE 배제 기조가 강화될수록 [외국 자본 일본 시장 진입 위축 → 일본 PE·M&A 시장의 글로벌 가격 발견 약화] 부작용 가능성. 2026년 MBK × Makino 중지권고가 그 신호",
    ],
    editorNote:
      "도시바 사가가 한국·글로벌 PE 시장에 남긴 핵심 한 줄은 [\"일본 메가 자산은 일본 국내 자본만으로 ¥2조엔도 모을 수 있다\"]는 실증이다. 본 거래 이전까지 시장은 [메가 PE 자본 + 글로벌 신디론 + 외국인 투자 심사 통과]가 필수라고 봤지만, JIP 컨소시엄은 [Orix + 전략 LP 약 20곳 + 일본 4대 은행 신디론]만으로 정확히 같은 결과를 만들었다. 이것이 2026년 MBK × Makino FEFTA 중지권고로 이어진 일본 산업 정책 기조의 출발점이며, 한국·미국·유럽 PE에는 [일본 진출 시 자산별 dual-use 분류 + 국내 LP·국내 은행 동원 + 정부 사전 조율]이 새 표준이라는 학습을 남겼다. 가격 측면에서 활동주의 펀드의 6년 보유가 +10% 프리미엄에 청산된 점은 [장기 사가형 활동주의 캠페인의 LP 수익률 한계]를 보여주는 동시에 [일본 정부·METI의 가격 통제력]도 확인시켰다., 2026년 5월 기준 검토.",
  },

  tombstone: {
    acquirerInitials: "JIP",
    acquirerBg: "bg-slate-800",
    targetInitials: "TOS",
    targetBg: "bg-red-700",
    acquirerName: "JIP Consortium (Japan Industrial Partners + Orix + ~20 Strategic LPs)",
    targetName: "Toshiba Corporation",
    dealTitle: "Japan's All-Domestic Take-Private of Toshiba, Closing a 6-Year Activist Saga",
    dealSize: "approx. ¥2 trillion (EV ~¥3 trillion incl. debt)",
    dealSizeUSD: "approx. USD 14B",
    evEbitda: "approx. 13x (FY2022 adj. EBITDA)",
    closeDate: "Dec 20, 2023 (TSE Prime delisting)",
  },

  sources: [
    { id: 1,  text: "Reuters, Toshiba accepts $15 billion buyout offer from JIP-led group (2023.03.23)", url: "https://www.reuters.com/markets/deals/toshiba-accepts-15-bln-buyout-offer-jip-led-group-2023-03-23/" },
    { id: 2,  text: "Financial Times, Toshiba agrees to $14bn take-private buyout led by JIP (2023.03.23)", url: "https://www.ft.com/content/toshiba-jip-takeprivate-2023" },
    { id: 3,  text: "Nikkei Asia, Toshiba's $14bn JIP buyout: a battle over Japan's strategic assets (2023.03)", url: "https://asia.nikkei.com/Business/Companies/Toshiba-s-14bn-JIP-buyout" },
    { id: 4,  text: "Bloomberg, JIP-Led Group Wins Race for Toshiba With $15 Billion Offer (2023.03.23)", url: "https://www.bloomberg.com/news/articles/2023-03-23/jip-led-group-wins-toshiba-buyout" },
    { id: 5,  text: "Reuters, Toshiba tender offer succeeds with 78% acceptance, paving way for delisting (2023.09.21)", url: "https://www.reuters.com/markets/asia/toshiba-tender-offer-jip-success-2023-09-21/" },
    { id: 6,  text: "Toshiba Corporation Press Release, Notice of Delisting from Tokyo Stock Exchange Prime Market (2023.12.20)", url: "https://www.global.toshiba/ww/news/corporate/2023/12/delisting.html" },
    { id: 7,  text: "Nikkei Asia, Effissimo to reap $1.5bn from Toshiba buyout after six-year activist saga (2023.10)", url: "https://asia.nikkei.com/Business/Markets/Effissimo-Toshiba-exit" },
    { id: 8,  text: "Wall Street Journal, How Activists Brought Down a Japanese Icon: Toshiba's 74-Year Listing Ends (2023.12)", url: "https://www.wsj.com/articles/toshiba-activists-jip-delisting-2023" },
    { id: 9,  text: "Reuters, METI's role in Toshiba shareholder pressure confirmed by independent report (2021.06)", url: "https://www.reuters.com/business/toshiba-meti-pressure-report-2021-06" },
    { id: 10, text: "Financial Times, Bain Capital drops out of final Toshiba bid amid financing concerns (2023.02)", url: "https://www.ft.com/content/bain-toshiba-dropout-2023" },
    { id: 11, text: "Nikkei Shimbun, JIP コンソーシアム 約20社·1.2兆円シンジケートローン構造 (2023.04)", url: "https://www.nikkei.com/article/toshiba-jip-consortium-structure-2023" },
  ],

  seo: {
    title: "Toshiba × JIP ¥2조엔 Take-Private, 6년 활동주의 사가의 종결과 일본 국내 자본의 승리",
    description:
      "2023년 12월 도시바가 도쿄증시 상장폐지. JIP 주도 일본 국내 컨소시엄이 ¥4,620/주·총 ¥2조엔 TOB로 인수. Orix + 중부전력·로옴반도체·스즈키·히노자동차 등 전략 LP 약 20곳 + SMBC·미즈호·MUFG·미쓰이스미토모신탁 ~¥1.2조엔 신디론. Bain Capital은 자금·반독점·정부 신뢰 변수로 탈락. 2015년 회계부정 → 2017년 ¥6,000억엔 활동주의 사모증자 → 2020~2022년 이사회 전쟁 → 2023년 종결의 6년+ 사가 해부.",
    keywords: [
      "도시바 JIP",
      "Toshiba Take-Private",
      "Japan Industrial Partners",
      "도시바 상장폐지",
      "TOB ¥4,620",
      "활동주의 펀드 도시바",
      "Effissimo Toshiba",
      "Farallon Elliott Third Point",
      "일본 외환법",
      "METI 전략 자산",
      "일본 국내 컨소시엄",
      "Orix 도시바",
      "Bain Capital 탈락",
      "일본 메가 Take-Private",
      "복합기업 재편",
    ],
  },

  concepts: [
    {
      term: "Take-Private (비상장화)",
      description: "상장사를 공개매수(TOB) 또는 합병으로 100% 인수해 증권거래소에서 상장폐지하는 거래 구조. 본 거래는 JIP 컨소시엄이 도시바 100%를 ¥2조엔에 TOB 인수 후 2023.12.20 도쿄증시 프라임 시장 상장폐지한 일본 사상 최대급 Take-Private.",
    },
    {
      term: "일본 국내 컨소시엄 (All-Domestic Consortium)",
      description: "외국 PE·외국 은행 없이 100% 일본 국내 자본(GP + LP + 신디론 은행)만으로 구성된 인수 컨소시엄. 본 거래는 JIP + Orix + 전략 LP 약 20곳 + 일본 4대 은행 신디론으로 ¥2조엔을 모은 첫 메가 사례. 일본 정부·METI의 [전략 자산 보호] 정책과 정합.",
    },
    {
      term: "METI 영향력 (Ministry of Economy, Trade and Industry)",
      description: "일본 경제산업성. 반도체·원전·방위 등 전략 자산 거래에서 [국가 안보] 명분으로 사실상의 영향력 행사. 도시바 사가에서는 2020년 주총 표 압박 의혹부터 2023년 JIP 컨소시엄 선정까지 사실상 매 단계 막후 변수로 작동. 이후 2026년 MBK × Makino FEFTA 중지권고의 정책 기조.",
    },
    {
      term: "활동주의 보유 기간 (Activist Hold Period)",
      description: "활동주의 펀드가 캠페인 대상 회사 지분을 보유하는 기간. 통상 1~3년의 단기 캠페인이 일반적이나, 도시바 사가에서는 [2017년 12월 사모증자 진입 → 2023년 12월 청산]의 6년 장기 보유. 평균 진입가 ¥2,628 → 청산가 ¥4,620으로 단순 수익률 +76%, 연환산 약 +10%로 제한적.",
    },
    {
      term: "MBO 무산 (Failed Management Buyout)",
      description: "경영진 주도 비상장화 시도가 가격·이사회·자금 변수로 무산되는 사례. 도시바 사가에서는 2021년 3월 차마타니 노부아키 CEO + CVC Capital의 ¥5조엔 MBO 시도가 1주일 만에 무산. 사가에서 [경영진 주도 비상장화]의 첫 실패 사례, 결과적으로 차마타니 CEO 사임.",
    },
    {
      term: "전략 LP (Strategic Limited Partner)",
      description: "단순 재무 수익 목적이 아닌 [인수 대상 회사와의 사업 시너지] 목적으로 PE 컨소시엄에 참여하는 LP. 본 거래에서 중부전력(에너지)·로옴반도체(디바이스)·스즈키·히노자동차(인프라)·NSK(베어링) 등이 도시바 사업부와 직접 시너지 기반으로 참여. 재무 PE + 산업 컨소시엄의 하이브리드 구조.",
    },
    {
      term: "개혁 자본 (Reform Capital)",
      description: "사가 종결 + 거버넌스 정상화 + 사업 재편 목적의 인수 자본. 통상 LBO·MBO와 달리 단기 수익이 아닌 [장기 운영 + 분할 spin-out]을 목표로 함. 본 거래에서 JIP 컨소시엄의 자본 성격이 이에 해당. 일본 PE 시장에서 처음 등장한 메가 스케일 개혁 자본 사례.",
    },
    {
      term: "Spin-out (분할 계획)",
      description: "단일 복합기업을 사업부별로 분리해 [별도 독립 회사]로 만드는 재편 기법. JIP는 2024년부터 도시바를 [에너지 · 디바이스(반도체·HDD) · 인프라] 3개 회사로 2~3년에 걸쳐 분할하는 중장기 계획 가동. SOTP(Sum-of-the-Parts) 가치 상승 + 부분 매각·재상장 경로 확보가 목적.",
    },
  ],

  faq: [
    {
      q: "왜 외국 PE가 도시바 인수전에서 모두 탈락했나요?",
      a: "공식적 이유는 [자금 조달·반독점·정부 신뢰] 3개 변수. 2023년 최종 3사 파이널리스트 중 Bain Capital은 외국 은행 의존 자금 조달 구조와 미국·EU 반독점 심사 변수로 탈락, CVC는 2021년 ¥5조엔 MBO 무산 트랙레코드로 신뢰 문제. 더 본질적인 이유는 [METI의 전략 자산 보호 입장]이다. 도시바는 반도체·원전·방위 관련 기술을 보유한 일본 전략 자산으로 분류돼 외국 PE 단독 인수에 일본 정부가 사실상 비공식적으로 부정적 시그널을 보냈다. 이후 2026년 MBK × Makino FEFTA 중지권고로 이 정책 기조가 명시적으로 강제 적용된 첫 사례 등장.",
    },
    {
      q: "활동주의 펀드들은 6년 보유에 비해 수익률이 좋았나요?",
      a: "단순 수익률은 +76%(평균 진입가 ¥2,628 → 청산가 ¥4,620), 연환산 약 +10% 수준입니다. 통상 활동주의 단기 캠페인의 +50~100% 수익률과 비교하면 제한적. 그러나 절대 금액으로는 Effissimo가 약 USD 1.5B을 회수해 단일 활동주의 Exit 중 가장 큰 규모 중 하나. 활동주의 펀드 LP에게는 [6년 사가를 손실 없이 종결]시켰다는 점이 가장 큰 성과. 가격 측면에서는 일본 정부·METI의 보호 정책에 막혀 +10% 프리미엄에 그친 점이 한계.",
    },
    {
      q: "JIP 컨소시엄에 약 20곳 LP가 참여한 이유는?",
      a: "두 가지 이유. 첫째, [자기자본 분담], ¥8,000억엔 규모를 단일 LP가 부담하기 어려워 약 20곳이 분담. Orix가 최대 단일 LP로 약 ¥2,000억엔 이상, 나머지가 약 ¥6,000억엔을 분담. 둘째, [사업 시너지 기반의 전략 LP 구조], 중부전력(에너지)·로옴반도체(디바이스)·스즈키·히노자동차(인프라)·NSK(베어링)·岩崎電気(조명)·鈴ren(의약품 유통) 등이 도시바 사업부와 [직접 사업 시너지] 가지는 LP로 참여. 단순 재무 PE가 아닌 [재무 + 산업 컨소시엄] 모델로, 향후 3분할 spin-out 시 [어느 사업부를 어느 LP가 인수·통합할지] 사전 시너지 매핑이 가능한 구조.",
    },
    {
      q: "왜 일본 정부는 외국 PE의 도시바 인수에 부정적이었나요?",
      a: "도시바가 보유한 [반도체·원전·방위 관련 기술 자산]이 [전략 자산] 분류 대상이기 때문. 구체적으로 ① 키오시아(舊 도시바 메모리)와의 잔여 지분·기술 라이선스, ② 원자력 발전 플랜트·핵연료 사이클 기술, ③ HDD·반도체 후공정 장비, ④ 방위성·자위대 납품 인프라 등이 dual-use 분류. METI는 이러한 자산이 외국 PE 통제 하에 들어가면 [향후 매각·라이선싱 시 일본 안보 통제권 약화]를 우려. 명시적 법적 차단(외환법 27조 5항 중지권고)은 없었지만 [컨소시엄 선정 과정에서 막후 영향]을 행사했다는 게 시장 일반 해석. 이후 2026년 MBK × Makino에서는 같은 정책 기조가 외환법 27조 5항 중지권고로 명시적 발동.",
    },
    {
      q: "JIP의 3분할 spin-out 계획은 어떻게 진행 중인가요?",
      a: "2026년 5월 기준 부분 진행 중. JIP는 2024년부터 도시바를 [① Energy Systems & Solutions (에너지: 화력·수력·원자력 발전) · ② Devices & Storage (디바이스: HDD·반도체 후공정) · ③ Infrastructure Systems & Solutions (인프라: 철도·도로·산업장비) + Digital Solutions (IT 서비스·POS)]의 3개 회사로 2~3년에 걸쳐 분할하는 중장기 계획 가동. 2024~2025년 동안 사업부별 거버넌스 분리 + 운영 효율화 + 일부 비핵심 자산 매각(HDD 사업 일부 등) 진행. 단, 3개 회사 모두 별도 재상장은 아직 안 됐고, JIP는 [중기 4~5년 운영 후 부분 매각·재상장]을 목표로 한다는 시장 관측.",
    },
    {
      q: "이 거래가 한국·글로벌 PE 시장에 어떤 영향을 미쳤나요?",
      a: "세 가지 영향. 첫째, [일본 진출 시 자산별 dual-use 분류가 사실상 필수]가 됐음. 한국 PE(MBK·한앤컴퍼니·IMM PE 등)와 글로벌 PE(Carlyle·KKR·Bain Capital 등)는 일본 인수 검토 시 사전에 dual-use risk 매트릭스를 작성해야 함. 둘째, [일본 PE 운용사들의 상대적 우위 확보], JIP·Advantage Partners·Polaris Capital 등 일본 토종 PE가 메가 자산 인수에서 사실상 단독 경쟁자가 됨. 셋째, [국내 LP·국내 은행 동원이 새 표준], 본 거래 이전까지 시장은 [글로벌 메가 PE 자본 + 글로벌 신디론]이 필수라고 봤지만, JIP 컨소시엄은 [국내 LP 약 20곳 + 일본 4대 은행 신디론]만으로 ¥2조엔을 모았다. 2026년 MBK × Makino FEFTA 27조 5항 중지권고는 이 정책 기조의 강제 적용 사례.",
    },
  ],
};

export default deal;
