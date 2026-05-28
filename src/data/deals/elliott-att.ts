/**
 * Elliott Management × AT&T 행동주의 캠페인 (2019)
 * $134B 메가 인수의 결말 — DirecTV 매각 + WarnerMedia 분사를 이끌어낸 메가캡 행동주의
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "elliott-att",
  title: "Elliott Management는 어떻게 AT&T의 $134B 인수 실패를 되돌렸나 — 메가캡 행동주의의 교과서",
  subtitle: "1.2% 지분 · CEO 교체 · DirecTV $16B 매각 · WarnerMedia-Discovery 합병 — 폴 싱어의 'Activating AT&T'",
  category: "activism",
  industry: "통신·미디어 / Telecom & Media",
  country: "미국",
  announcedAt: "2019-09-09",
  closedAt: "2021-05-17",
  announcedDisplay: "2019년 9월",
  closedDisplay: "2021년 5월 (WarnerMedia 분사 발표)",
  readingMinutes: 13,
  tags: [
    "Elliott Management",
    "AT&T",
    "행동주의",
    "DirecTV",
    "WarnerMedia",
    "Warner Bros. Discovery",
    "CEO 교체",
    "메가캡 행동주의",
    "자산 매각",
    "폴 싱어",
  ],
  excerpt:
    "2019년 9월, 폴 싱어의 Elliott Management가 AT&T 지분 1.2%($3.2B)를 매집하고 'Activating AT&T' 서한을 발표했다. DirecTV $49B, Time Warner $85B — 3년 만에 $134B를 쏟아붓고도 주가는 S&P500 대비 55%p 뒤처진 채였다. Elliott의 압박은 CEO 교체, DirecTV 30% TPG 매각, WarnerMedia-Discovery 합병이라는 세 가지 성과로 이어졌다. 1.2% 지분으로 시총 $2,500억 기업을 완전히 해체·재편한 메가캡 행동주의의 결정판이다.",

  acquirer: { initials: "ELL", bg: "bg-slate-700", label: "Elliott Management Corporation" },
  target:   { initials: "T",   bg: "bg-blue-700",  label: "AT&T Inc." },

  background: [
    "AT&T는 2010년대 중반부터 통신사에서 '미디어·통신 복합기업'으로의 변신을 추구했다. 2015년 DirecTV를 $49B에 인수해 위성방송 1위를 확보하고, 2018년에는 무려 $85B를 들여 Time Warner(HBO·CNN·워너브라더스)를 인수해 WarnerMedia로 이름을 바꿨다. 3년 만에 $134B 규모의 빅딜 두 건을 완료한 것이다.",
    "그러나 인수 후 결과는 참담했다. 2014년부터 2019년까지 5년간 AT&T 주가는 약 -19%를 기록한 반면 S&P500은 +36% 상승했다. 두 인수로 쌓인 순부채는 약 $180B에 달해 미국 기업 역사상 최고 수준의 부채를 자랑하게 됐다. DirecTV 가입자는 코드커팅(Cord-cutting) 트렌드에 밀려 인수 시점부터 감소세였고, WarnerMedia는 통합 시너지를 내기는커녕 운영상 마찰만 유발하고 있었다.",
    "2019년 9월 9일, Elliott Management Corporation의 창업자 폴 싱어(Paul Singer)가 AT&T CEO 랜달 스티븐슨(Randall Stephenson)에게 공개 서한을 발송했다. 제목은 'Activating AT&T'. Elliott은 AT&T 지분을 약 $3.2B(전체 발행주식의 약 1.2%) 매집했으며, 주가를 2021년 말까지 $60(당시 약 $38 대비 +58%)로 끌어올릴 수 있다는 구체적 청사진을 제시했다.",
    "서한의 핵심은 네 가지였다: ① 비핵심 자산 매각(DirecTV 전략적 검토), ② 운영 효율화($5B+ 비용 절감), ③ 자본 배분 규율 강화(대형 M&A 중단), ④ 경영진 책임 강화(CEO 교체 포함). AT&T 경영진은 초기에 강하게 반발했으나, Elliott의 압박과 기관투자자 지지가 높아지면서 점진적으로 요구사항을 수용하기 시작했다.",
    "결과는 Elliott의 청사진을 거의 그대로 따라갔다. 2020년 7월 CEO 랜달 스티븐슨이 '은퇴'하고 존 스탠키(John Stankey)가 후임이 됐다. 같은 해 Elliott과 AT&T는 '상호 이해'를 발표하며 일부 이사회 변화와 운영 효율화 목표에 합의했다. 2021년 7월에는 DirecTV 지분 30%를 TPG Capital에 매각했고($16.25B, 기업가치 기준 약 $23.5B — 인수가 $49B 대비 절반 이하), 2021년 5월에는 WarnerMedia를 Discovery Communications와 합병해 Warner Bros. Discovery(WBD)를 출범시키기로 발표했다.",
  ],

  dealSummary: {
    dealValueDisplay: "Elliott 보유 지분 약 $3.2B (AT&T 발행주식의 약 1.2%)",
    acquirerName: "Elliott Management Corporation",
    targetName: "AT&T Inc. (NYSE: T)",
    announcedDisplay: "2019년 9월 (Elliott 서한 발표)",
    closedDisplay: "2021년 5월 (WarnerMedia 분사 발표)",
    country: "미국",
  },

  executiveSummary: [
    "Elliott Management: $3.2B(1.2%) 지분으로 시총 $2,500억+ AT&T를 정면 공략 — 'Activating AT&T' 서한 발표 (2019년 9월 9일)",
    "공략 배경: DirecTV $49B + Time Warner $85B = $134B 인수 후 순부채 ~$180B 적재, 주가 5년 -19% vs S&P500 +36%",
    "4대 요구사항: ① DirecTV 전략적 검토, ② WarnerMedia 전략 검토, ③ CEO 교체, ④ $5B+ 비용 절감",
    "결과 (모두 현실화): CEO 랜달 스티븐슨 2020년 7월 교체 → 존 스탠키 취임 / DirecTV 30% TPG에 $16.25B 매각 / WarnerMedia-Discovery 합병 발표 (2021년 5월)",
    "주가 임팩트: 캠페인 전 ~$38 → 합의 발표 후 피크 ~$43 → WarnerMedia 분사 후 재산정 ~$27 (배당 삭감 반영)",
    "메가캡 행동주의의 교과서: 1.2% 지분이 $134B짜리 M&A 스트래티지 전체를 되돌린 사례 — 과도한 다각화 전략의 필연적 종착점",
  ],

  industryOverview: {
    body: "2010년대 후반 미국 통신·미디어 산업은 코드커팅(유료방송 해지)과 스트리밍 전쟁이라는 두 가지 구조적 충격에 직면해 있었다. Netflix·Amazon Prime·Hulu의 급성장으로 전통 유료방송 가입자가 감소하고, 통신사들은 콘텐츠 확보를 통한 수직 통합으로 위기를 돌파하려 했다. AT&T의 Time Warner 인수는 이 논리의 가장 대담한 실행이었다. 그러나 통신사가 미디어 기업을 운영하는 데 필요한 역량은 근본적으로 달랐으며, 막대한 인수 부채는 미래 투자 여력을 제약했다.",
    metrics: [
      { label: "AT&T 시가총액 (2019년 9월)", value: "약 $2,650억", sub: "NYSE: T, 미국 2위 통신사" },
      { label: "AT&T 순부채 (2019년)", value: "약 $180B", sub: "미국 기업 역사상 최고 수준" },
      { label: "AT&T 주가 수익률 (2014~2019 5년)", value: "-19%", sub: "같은 기간 S&P500 +36%, 55%p 언더퍼폼" },
      { label: "DirecTV 위성방송 가입자 (2019년)", value: "약 2,030만 명", sub: "인수 시점 대비 수백만 명 감소세" },
      { label: "WarnerMedia 연간 매출", value: "약 $330억", sub: "HBO·CNN·워너브라더스 합산" },
    ],
    subBody: "코드커팅 트렌드는 DirecTV 인수 논거를 인수 완료 직후부터 흔들기 시작했다. 스트리밍 시장에서는 HBO Max 출시(2020년)라는 카드가 있었지만, $180B의 부채를 지고 넷플릭스·아마존과 싸우기엔 재무적 여력이 너무 협소했다. Elliott의 본질적 진단은 '기업이 너무 많은 것을 너무 비싸게 샀다'는 것이었다.",
    players: [
      { name: "AT&T", role: "미국 2위 통신사, DirecTV·WarnerMedia 모회사" },
      { name: "Elliott Management", role: "폴 싱어의 행동주의 헤지펀드, 1.2% 지분 보유" },
      { name: "Verizon", role: "미국 1위 통신사, AT&T 최대 경쟁자" },
      { name: "Comcast·NBCUniversal", role: "케이블·미디어 복합기업, AT&T와 유사 전략 추진" },
      { name: "TPG Capital", role: "DirecTV 지분 30% 인수한 사모펀드" },
      { name: "Discovery Communications", role: "WarnerMedia 합병 파트너, WBD 출범" },
    ],
  },

  companyOverview: {
    targetName: "AT&T Inc.",
    body: "AT&T는 미국 2위 통신사로 모바일·고정전화·브로드밴드·위성방송·미디어를 아우르는 복합 통신·미디어 기업이다. 2015년 DirecTV 인수($49B)와 2018년 Time Warner 인수($85B)를 통해 '수직 통합 미디어·통신 복합기업'으로의 전환을 시도했다. 그러나 총 $134B의 인수 비용은 순부채를 약 $180B까지 끌어올렸고, 코드커팅 트렌드 속에서 DirecTV 가치 훼손이 가속화됐다. FY2019 연간 매출은 $1,812억으로 미국 통신 업계 최대 규모였으나, 부채 부담과 전략적 혼란으로 주가는 지속 부진했다. Elliott 캠페인 당시 AT&T의 배당 수익률은 약 5.4%로 방어적 투자자들에게는 매력적이었지만, 성장주 관점에서는 가치 파괴가 명백했다.",
    metrics: [
      { label: "시가총액 (2019년 9월)", value: "약 $2,650억", sub: "NYSE: T" },
      { label: "연간 매출 (FY2019)", value: "$1,812억", sub: "미국 통신업계 1위" },
      { label: "순부채 (2019년)", value: "약 $1,800억", sub: "DirecTV + Time Warner 인수 누적" },
      { label: "직원 수", value: "약 24만 7천 명", sub: "2019년 기준" },
      { label: "EBITDA (FY2019 추정)", value: "약 $590억", sub: "Net Debt/EBITDA ≈ 3.0x" },
      { label: "배당 수익률 (2019년)", value: "약 5.4%", sub: "연간 배당 $2.08/주" },
    ],
    financials: [
      {
        year: "2018",
        revenue: 170756,
        cogs: 87568,
        grossProfit: 83188,
        sga: 54000,
        operatingIncome: 29188,
        ebitda: 55000,
      },
      {
        year: "2019",
        revenue: 181193,
        cogs: 91000,
        grossProfit: 90193,
        sga: 57000,
        operatingIncome: 33193,
        ebitda: 59000,
      },
      {
        year: "2020",
        revenue: 171760,
        cogs: 84000,
        grossProfit: 87760,
        sga: 55000,
        operatingIncome: 32760,
        ebitda: 56000,
      },
    ],
    financialsNote: "단위: 백만 달러 (USD $M) | AT&T 연결 기준 | FY2019는 WarnerMedia 연결 최초 완전 연도 | 출처: AT&T 연간 보고서 및 공시 기반",
    financialsCurrency: "USD",
    financialsUnit: "$M",
  },

  governanceOverview: {
    body: "AT&T는 Elliott 캠페인 당시 이사회가 CEO 랜달 스티븐슨의 M&A 전략에 충분한 견제를 하지 못했다는 비판을 받았다. 3년 만에 $134B 규모의 인수 두 건이 실질적 이사회 반대 없이 통과됐고, 인수 이후의 통합 실패에 대한 책임 추궁도 미흡했다. Elliott은 이를 '지배구조 실패'가 아닌 '전략적 실패'로 프레이밍하면서 CEO 교체와 자산 처분이라는 구체적 요구를 내세웠다. 대형 기관투자자들(Vanguard·BlackRock·State Street)은 공식 입장을 밝히지 않으면서도 Elliott의 요구에 암묵적 공감대를 형성했고, 이것이 AT&T 경영진이 협상 테이블에 앉게 만든 결정적 요인이었다.",
    shareholders: [
      {
        id: "elliott",
        label: "Elliott Management",
        sub: "폴 싱어 행동주의 헤지펀드, 'Activating AT&T' 서한",
        stake: "1.2%",
        stakePct: 1.2,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "vanguard",
        label: "Vanguard Group",
        sub: "세계 2위 자산운용사, 중립 — 암묵적 Elliott 공감",
        stake: "7.8%",
        stakePct: 7.8,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "세계 최대 자산운용사, 중립",
        stake: "6.5%",
        stakePct: 6.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "state-street",
        label: "State Street Global Advisors",
        sub: "세계 3위 ETF 운용사, 중립",
        stake: "4.9%",
        stakePct: 4.9,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "public",
        label: "소수 일반주주 (Retail/Public)",
        sub: "배당 중심 투자자 다수 — 주가 회복 공감대",
        stake: "79.6%",
        stakePct: 79.6,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 13,
      independent: 11,
      affiliated: 2,
      note: "이사회가 CEO의 대규모 M&A 전략에 충분한 견제를 하지 못했다는 비판이 Elliott 서한의 핵심 논거 중 하나였다. 2020년 합의 후 일부 이사 교체 및 구성 변화 이뤄짐.",
    },
    issues: [
      {
        title: "과도한 레버리지 — 순부채 $180B",
        description: "DirecTV $49B + Time Warner $85B = $134B 인수로 AT&T 순부채는 약 $180B까지 치솟았다. Net Debt/EBITDA 약 3.0x로 미국 상장 기업 중 최대 규모의 부채를 기록했다. 이 부채 부담은 5G 투자 여력을 제약하고 주주환원 능력을 훼손하는 근본 원인이었다.",
        severity: "critical",
      },
      {
        title: "전략적 집중도 상실 — 콘글로머리트 디스카운트",
        description: "통신(모바일·브로드밴드)·위성방송(DirecTV)·미디어(HBO·CNN·워너브라더스)·광고(Xandr)까지 아우르는 복합기업 구조가 시장의 밸류에이션 디스카운트를 키웠다. 각 사업부의 전략 우선순위 충돌, 통합 시너지 미달, 자원 배분 비효율이 누적됐다.",
        severity: "critical",
      },
      {
        title: "CEO 장기 집권과 이사회 견제 부재",
        description: "랜달 스티븐슨 CEO는 2007년부터 재임하며 두 건의 메가딜을 강행했다. 이사회는 $134B 규모의 전략적 선택에 실질적 견제를 하지 못했으며, 인수 실패에 대한 책임 추궁 구조도 부재했다. Elliott은 이를 'CEO 책임성 결여'로 명시했다.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "DirecTV 전략적 검토 및 처분",
        result: "won",
        note: "2021년 7월 TPG Capital에 DirecTV 지분 30% 매각 ($16.25B, 기업가치 약 $23.5B). 인수가 $49B 대비 절반 이하로 손실 확정.",
      },
      {
        demand: "WarnerMedia 전략적 검토 (스핀오프/합병)",
        result: "won",
        note: "2021년 5월 WarnerMedia-Discovery Communications 합병 발표. 2022년 4월 Warner Bros. Discovery(WBD) 출범.",
      },
      {
        demand: "CEO 랜달 스티븐슨 교체",
        result: "won",
        note: "2020년 7월 스티븐슨 '은퇴' 발표, 존 스탠키(John Stankey) 승계. Elliott의 핵심 요구사항 중 가장 강력했던 항목.",
      },
      {
        demand: "주가 $60 달성 (2021년 말 목표)",
        result: "partial",
        note: "실제 주가는 약 $28~$30 수준에 머물렀다. WarnerMedia 분사 후 배당 삭감(2022)까지 겹치며 주가 재산정이 이뤄졌다. 구조조정 자체는 성공했으나 주가 목표치는 지나치게 낙관적이었다는 평가.",
      },
      {
        demand: "$5B+ 운영 비용 절감 프로그램",
        result: "won",
        note: "AT&T는 2020년 합의 후 대규모 비용 효율화 프로그램을 공식화하고 이행했다.",
      },
    ],
    stockImpact: {
      preCampaign: "$38 (2019년 9월 Elliott 서한 발표 직전)",
      peakDuringCampaign: "$43 (2020년 Elliott-AT&T 합의 발표 직후)",
      postCampaign: "$27 (2021년 WarnerMedia 분사 발표 이후, 배당 재산정 반영)",
      note: "캠페인 2년간 주가는 약 +25% 상승했으나, WarnerMedia 분사 후 AT&T가 통신 순수회사로 재정의되면서 배당금이 삭감(2022년)되고 주가는 재산정됐다. 단기 주가 상승보다 장기 기업가치 재편이 Elliott 캠페인의 진정한 성과로 평가된다.",
    },
  },

  dealStructure: {
    body: "Elliott 캠페인은 단일 거래가 아니라 3단계 구조조정의 연쇄를 촉발했다. 첫 번째가 CEO 교체(2020년 7월), 두 번째가 DirecTV 30% 지분 TPG 매각(2021년 7월), 세 번째가 WarnerMedia-Discovery 합병(2021년 5월 발표, 2022년 4월 완료)이다. Elliott은 직접 자산 거래의 당사자가 아니었지만, 이 세 가지 구조 변화의 촉매 역할을 했다.",
    preOwnership: {
      nodes: [
        { id: "elliott", label: "Elliott Management", sub: "1.2% 보유, 'Activating AT&T' 서한", type: "acquirer" },
        { id: "att", label: "AT&T Inc.", sub: "모바일·DirecTV·WarnerMedia 복합 기업", type: "target" },
        { id: "directv", label: "DirecTV", sub: "위성방송, 인수가 $49B (2015년)", type: "entity" },
        { id: "wm", label: "WarnerMedia", sub: "HBO·CNN·워너브라더스, 인수가 $85B (2018년)", type: "entity" },
        { id: "big3", label: "Vanguard·BlackRock·State Street", sub: "합산 ~19.2%, 중립 입장", type: "fund" },
      ],
      edges: [
        { from: "elliott", to: "att", label: "1.2% 지분 + 행동주의 서한" },
        { from: "att", to: "directv", label: "100% 소유 (2015년 $49B 인수)" },
        { from: "att", to: "wm", label: "100% 소유 (2018년 $85B 인수)" },
        { from: "big3", to: "att", label: "합산 ~19.2% 보유 (캐스팅보트)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "att_new", label: "AT&T (재편 후)", sub: "통신 순수회사, 5G·브로드밴드 집중", type: "target" },
        { id: "directv_jv", label: "DirecTV LLC (합작)", sub: "AT&T 70% + TPG 30%, 기업가치 ~$23.5B", type: "entity" },
        { id: "wbd", label: "Warner Bros. Discovery", sub: "WarnerMedia + Discovery, 2022년 출범", type: "entity" },
        { id: "tpg", label: "TPG Capital", sub: "DirecTV 지분 30% 인수, $16.25B 지불", type: "fund" },
        { id: "elliott_post", label: "Elliott Management", sub: "캠페인 목표 대부분 달성", type: "acquirer" },
      ],
      edges: [
        { from: "att_new", to: "directv_jv", label: "70% 지분 보유" },
        { from: "tpg", to: "directv_jv", label: "30% 인수 ($16.25B)" },
        { from: "att_new", to: "wbd", label: "WarnerMedia 분사·합병" },
        { from: "elliott_post", to: "att_new", label: "구조조정 촉매 역할" },
      ],
    },
    keyTerms: [
      { label: "Elliott 서한 발표", value: "2019년 9월 9일", accent: false },
      { label: "Elliott 보유 지분", value: "약 1.2% (~$3.2B)", accent: true },
      { label: "주가 목표 (Elliott 제시)", value: "$60 (2021년 말)", accent: false },
      { label: "CEO 교체", value: "2020년 7월 (스티븐슨 → 스탠키)", accent: true },
      { label: "DirecTV TPG 매각", value: "30% 지분, $16.25B (2021년 7월)", accent: true },
      { label: "DirecTV 인수가 대비 기업가치", value: "$49B → ~$23.5B (가치 소멸)", accent: true },
      { label: "WarnerMedia-Discovery 합병 발표", value: "2021년 5월 17일", accent: true },
      { label: "WBD 공식 출범", value: "2022년 4월 11일", accent: false },
    ],
  },

  advisors: {
    body: "Elliott은 행동주의 캠페인 특성상 자문단 구성을 외부에 상세히 공개하지 않았다. AT&T는 대형 투자은행들을 동원해 Elliott의 요구에 대응했으나, 기관투자자들의 암묵적 지지가 협상 균형을 Elliott 쪽으로 기울게 했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Elliott Management (행동주의 측)",
        initials: "ELL",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Evercore (추정)",
            role: "재무 자문",
            roleType: "financial",
            note: "Elliott의 행동주의 캠페인에서 재무 분석 및 valuation 지원. Elliott은 내부 자체 분석 역량이 강해 외부 IB 의존도가 낮다.",
          },
          {
            firm: "Wachtell Lipton Rosen & Katz",
            role: "법률 자문",
            roleType: "legal",
            note: "행동주의 캠페인 관련 법무 지원. 주주 서한 법적 검토 및 SEC 공시 대응.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "AT&T (경영진 측)",
        initials: "T",
        bg: "bg-blue-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "재무 자문 (주)",
            roleType: "financial",
            note: "AT&T의 주요 전략 재무 자문. Elliott 요구에 대한 대응 전략 수립 및 DirecTV·WarnerMedia 거래 구조화.",
          },
          {
            firm: "JPMorgan Chase",
            role: "재무 자문",
            roleType: "financial",
            note: "DirecTV TPG 매각 및 WarnerMedia-Discovery 합병 거래 자문.",
          },
          {
            firm: "Sullivan & Cromwell",
            role: "법률 자문",
            roleType: "legal",
            note: "AT&T의 행동주의 대응 및 자산 매각·분사 거래 법무 지원.",
          },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 및 업계 자료 기반이며, 실제 계약 세부 사항은 비공개입니다. Elliott 측 자문사는 추정 정보가 포함됩니다.",
  },

  valuation: {
    body: "Elliott의 밸류에이션 논리는 'Sum-of-the-Parts(SOTP)'였다. 통신(Connectivity)·위성방송(DirecTV)·미디어(WarnerMedia)를 하나의 복합 기업으로 평가하면 콘글로머리트 디스카운트가 적용되지만, 각 사업부를 분리해 독립 평가하면 합산 가치가 현 주가의 $60 이상에 해당한다는 논리였다. 실제로 DirecTV의 기업가치는 분사 이후 $23.5B으로 평가됐는데, 이는 인수가 $49B의 약 48% 수준으로 인수 프리미엄이 완전히 소멸했음을 보여준다.",
    rows: [
      { item: "AT&T 시가총액 (Elliott 서한 당시)", val: "약 $2,650억", note: "2019년 9월 기준, 주가 약 $38" },
      { item: "Elliott 보유 지분 가치", val: "약 $3.2B", note: "전체 지분의 약 1.2%", accent: true },
      { item: "DirecTV 인수가 (2015년)", val: "$49B", note: "부채 포함 기업가치 기준" },
      { item: "DirecTV TPG 거래 기업가치 (2021년)", val: "약 $23.5B", note: "TPG 30% 지분 $16.25B 기준 역산", accent: true },
      { item: "DirecTV 인수 프리미엄 소멸액", val: "약 $25.5B", note: "$49B - $23.5B = 인수 후 6년 만에 절반 이상 소멸", accent: true },
      { item: "Time Warner 인수가 (2018년)", val: "$85B", note: "부채 포함 기업가치 기준" },
      { item: "AT&T 2019년 EBITDA", val: "약 $590억", note: "Net Debt/EBITDA ≈ 3.0x, 과중 부채 구조" },
      { item: "Elliott 주가 목표 (2021년 말)", val: "$60", note: "실제 도달 주가 ~$28~$30 — 구조조정 후 배당 삭감 반영 재산정" },
    ],
    disclaimer: "수치는 공개 보도, AT&T SEC 공시 및 Elliott 서한 기반. DirecTV 기업가치는 TPG 거래 조건 역산 추정치입니다.",
  },

  rationale: {
    buyer: {
      title: "Elliott이 AT&T를 공략한 이유",
      initials: "ELL",
      bg: "bg-slate-700",
      points: [
        "명백한 M&A 실패의 증거 — DirecTV 인수 이후 코드커팅으로 가입자 이탈, Time Warner 인수 후 통합 시너지 미달. 5년간 S&P500 대비 -55%p 주가 부진은 전략 실패의 정량적 증거였다.",
        "구체적 가치 회복 경로 — SOTP 밸류에이션 상 비핵심 자산 분리·처분으로 주가가 $38 → $60까지 회복 가능하다는 구체적 청사진. 추상적 개혁 요구가 아닌 숫자로 설득했다.",
        "변화에 대한 기관투자자 공감대 — Vanguard·BlackRock 등 대형 기관들도 AT&T의 전략적 실패에 불만이 쌓인 상태였다. Elliott은 이 공감대를 공식 합의로 이끌어내는 촉매 역할을 했다.",
        "메가캡에서 더 작동하는 행동주의 — 시총 $2,650억 기업에 1.2% 지분은 절대 금액으로 $3.2B이다. 소형·중형 기업과 달리 단기 주가 급등보다 장기 구조 변화가 목표였으며, 자본 배분 강제보다 전략적 재편 요구가 핵심이었다.",
      ],
    },
    seller: {
      title: "AT&T 경영진의 당초 입장",
      initials: "T",
      bg: "bg-blue-700",
      points: [
        "수직 통합 전략의 정당성 — 통신망 + 콘텐츠의 결합이 장기적으로 Netflix 등 OTT에 대항하는 핵심 경쟁력이 될 것이라는 확신. 스티븐슨 CEO는 WarnerMedia 인수가 '통신 산업의 미래를 여는 딜'이라고 강조했다.",
        "DirecTV 매각 불가론 — 위성방송이 아직 상당한 현금흐름을 창출하며, 단기 가입자 감소에도 불구하고 콘텐츠 유통 채널로서 가치가 있다는 주장. 매각 시 세금 및 부채 상환 조건이 복잡하다는 실무적 이유도 제시됐다.",
        "비용 효율화 진행 중 — Elliott 서한 이전에도 이미 비용 절감 노력을 하고 있었으며, Elliott의 요구는 과도하다는 입장.",
        "이사회와 전략적 정렬 — 경영진과 이사회가 현재 전략에 전적으로 합의하고 있으며, 단기 지분을 가진 행동주의 펀드의 압박에 장기 전략을 수정할 이유가 없다는 주장.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "Elliott의 요구사항은 대부분 현실화됐다. CEO 교체(2020년 7월), DirecTV TPG 매각(2021년 7월), WarnerMedia-Discovery 합병(2022년 4월) 세 가지 구조 변화가 모두 이뤄졌다. AT&T는 통신 순수회사로 탈바꿈했고, 단기적으로 주가는 Elliott 서한 이후 2년간 약 +25% 올랐다. 그러나 WarnerMedia 분사 이후 AT&T는 2022년 배당을 대폭 삭감했고, 주가는 $27 수준으로 재산정됐다. Elliott이 목표로 제시한 $60에는 훨씬 미치지 못했다. 한편 Warner Bros. Discovery(WBD)는 합병 후 $43B의 기업가치 손상을 기록하며 또 하나의 M&A 실패 사례로 기록됐다. Elliott의 캠페인이 AT&T를 구했다기보다, 잘못된 전략을 조기에 종식시켜 추가 손실을 막았다는 평가가 더 정확하다.",
    overallVerdict: "구조조정 목표 달성 — 단, 인수 실패의 손실은 이미 영구적으로 확정됐다",
    positives: [
      "CEO 교체, DirecTV 처분, WarnerMedia 분사 — Elliott이 제시한 핵심 요구사항 3개 모두 2년 내 현실화",
      "AT&T 순부채 $180B에서 분사·매각 이후 단계적 감소 — 통신 순수회사로서 재무 건전성 회복 경로 확보",
      "메가캡($2,500억+) 기업에 1.2% 지분이 $134B짜리 M&A 전략 전체를 되돌렸다는 행동주의 역사의 기록",
      "코드커팅 트렌드가 가속화되는 환경에서 AT&T가 미디어 사업에서 조기 탈출한 것은 올바른 방향",
      "비용 효율화 프로그램 이행으로 운영 레버리지 일부 회복",
    ],
    risks: [
      "DirecTV 가치 소멸 확정: $49B 인수 → $23.5B 기업가치 = $25.5B+ 영구 손실. 인수 프리미엄이 완전히 소멸됐다.",
      "WarnerMedia-Discovery 합병의 WBD도 실패: 합병 후 WBD는 $43B 기업가치 손상을 기록하며 디즈니·넷플릭스와의 스트리밍 전쟁에서 열위",
      "AT&T 배당 삭감(2022년): WarnerMedia 분사 후 배당이 대폭 삭감되면서 배당 중심 투자자들이 대거 이탈, 주가 재산정 압박",
      "Elliott 주가 목표 $60 미달: 실제 주가는 $27~$30 수준. 구조조정은 성공했으나 Elliott의 밸류에이션 가정이 지나치게 낙관적이었다는 평가",
      "5G 투자 지연: 과중 부채와 구조조정으로 인해 Verizon 대비 5G 인프라 투자가 지연됐고, 이는 장기 경쟁력 저하로 이어졌다",
    ],
    editorNote: "Elliott vs AT&T는 '행동주의가 옳았는가'보다 '잘못된 전략이 얼마나 오래 지속될 수 있는가'에 대한 답을 보여주는 사례다. DirecTV·Time Warner 인수 실패는 이미 돌이킬 수 없었다. Elliott의 캠페인이 한 일은 그 손실의 추가 확대를 막고, AT&T가 수십 년간 쌓아온 통신 본업으로 돌아가게 강제한 것이다. 1.2%의 지분이 $134B짜리 전략적 실수를 되돌리는 데 걸린 시간은 불과 2년이었다. 메가캡 행동주의가 기업 지배구조의 최후 수단이 될 수 있음을 증명한 사례로 기억될 것이다.",
  },

  tombstone: {
    acquirerInitials: "ELL",
    acquirerBg: "bg-slate-700",
    targetInitials: "T",
    targetBg: "bg-blue-700",
    acquirerName: "Elliott Management Corporation",
    targetName: "AT&T Inc.",
    dealTitle: "Elliott × AT&T — $134B 인수의 결말: DirecTV 매각 + WarnerMedia 분사",
    dealSize: "$3.2B (지분 1.2%)",
    dealSizeUSD: "$3.2B",
    evEbitda: "N/A (행동주의)",
    closeDate: "2021년 5월 (WarnerMedia 분사 발표)",
  },

  sources: [
    {
      id: 1,
      text: "Elliott Management — 'Activating AT&T' 주주 서한 (2019년 9월 9일)",
      url: "https://www.elliottinvestment.com",
    },
    {
      id: 2,
      text: "AT&T Inc. — SEC Form 8-K, Elliott Management 대응 공시 (2019~2021)",
    },
    {
      id: 3,
      text: "AT&T Inc. — 연간 보고서 (2018, 2019, 2020), NYSE: T",
    },
    {
      id: 4,
      text: "Wall Street Journal — Elliott Management Takes $3.2 Billion Stake in AT&T (September 9, 2019)",
    },
    {
      id: 5,
      text: "Financial Times — AT&T agrees to sell 30% of DirecTV to TPG Capital (February 2021)",
    },
    {
      id: 6,
      text: "AT&T Press Release — AT&T to Combine WarnerMedia with Discovery Communications (May 17, 2021)",
    },
    {
      id: 7,
      text: "Bloomberg — Randall Stephenson to Retire as AT&T CEO, John Stankey Takes Over (July 2020)",
    },
    {
      id: 8,
      text: "S&P Global Market Intelligence — AT&T Net Debt Analysis and Leverage Metrics (2019~2021)",
    },
  ],

  seo: {
    title: "Elliott Management × AT&T 완전 분석 — $134B 인수 실패와 행동주의의 역습",
    description:
      "폴 싱어 Elliott Management가 AT&T에 1.2% 지분으로 CEO 교체·DirecTV 매각·WarnerMedia 분사를 이끌어낸 2019~2021년 메가캡 행동주의 완전 분석. 인수 실패의 구조적 원인, 콘글로머리트 해체 전략, 주가 임팩트까지.",
    keywords: [
      "Elliott AT&T 행동주의",
      "AT&T DirecTV 매각",
      "WarnerMedia Discovery 합병",
      "메가캡 행동주의",
      "폴 싱어 AT&T",
      "Activating AT&T",
      "랜달 스티븐슨 교체",
      "콘글로머리트 해체",
      "AT&T 구조조정",
      "행동주의 헤지펀드",
    ],
  },

  concepts: [
    {
      term: "메가캡 행동주의 (Mega-Cap Activism)",
      description:
        "시총 $2,000억+ 기업을 대상으로 하는 대형 행동주의. 1~2% 지분만으로도 충분한 압박이 가능하며, 단기 주가 차익보다 장기 구조 변화가 목표다. Elliott-AT&T가 교과서적 사례다.",
    },
    {
      term: "콘글로머리트 해체 (Conglomerate Unwinding)",
      description:
        "과도한 M&A로 비대해진 복합기업을 핵심 사업 위주로 재편하는 전략. AT&T는 통신·위성방송·미디어·광고를 모두 보유했다가 Elliott 압박 이후 통신 순수회사로 돌아갔다.",
    },
    {
      term: "자산 처분 (Asset Disposal)",
      description:
        "비핵심 자산을 매각해 부채 감소·주주 환원·전략적 집중을 동시에 달성하는 방법. DirecTV 30% TPG 매각이 대표 사례로, AT&T는 이를 통해 $16.25B을 회수했다.",
    },
    {
      term: "인수 프리미엄의 소멸 (Acquisition Premium Erosion)",
      description:
        "고가 인수 후 가치가 하락해 인수 프리미엄이 결국 소멸되는 현상. AT&T의 DirecTV $49B 인수는 6년 후 기업가치 ~$23.5B으로 평가됐다 — 프리미엄 $25.5B이 영구 소멸됐다.",
    },
    {
      term: "배당 컷의 신호 (Dividend Cut Signal)",
      description:
        "AT&T의 WarnerMedia 분사 후 배당 삭감(2022년)은 통신사가 미디어 자산을 포기하며 재무 구조를 재편하는 구조적 변화 신호였다. 배당 중심 투자자들에게 장기 포지션 재검토를 강제했다.",
    },
  ],

  faq: [
    {
      q: "Elliott Management는 어떻게 1.2% 지분으로 AT&T를 바꿨나?",
      a: "1.2% 지분(~$3.2B)은 의결권으로는 소수지만, 이 규모가 '진지하게 읽혀야 하는 서한'을 만들어냈습니다. Elliott은 지분 행사보다 공론화를 통한 압박 전략을 썼습니다. '5년간 S&P500 대비 -55%p 부진'이라는 수치, '$60 주가 목표'라는 구체적 청사진, CEO 교체·자산 처분이라는 명확한 요구사항이 Vanguard·BlackRock 같은 대형 기관투자자들의 공감을 끌어냈습니다. 1.2%의 지분이 아니라 19%를 보유한 기관들의 암묵적 지지가 실제 협상력의 원천이었습니다.",
    },
    {
      q: "AT&T의 DirecTV·Time Warner 인수는 왜 실패했나?",
      a: "근본 원인은 두 가지입니다. 첫째, 타이밍 오판 — DirecTV 인수 시점(2015년)부터 이미 코드커팅 트렌드가 가시화됐고, Time Warner 인수(2018년)는 넷플릭스가 급성장하며 전통 미디어의 구조적 위기가 명확해진 시점이었습니다. 둘째, 역량 불일치 — 통신사가 미디어 기업을 운영하는 데 필요한 창의적·문화적 역량이 전혀 달랐습니다. 여기에 총 $180B의 순부채가 미래 투자 여력을 완전히 차단했습니다.",
    },
    {
      q: "Elliott의 주가 목표 $60은 왜 달성되지 못했나?",
      a: "Elliott의 SOTP(Sum-of-the-Parts) 밸류에이션은 각 사업부를 독립 기업으로 평가했을 때 $60 이상이라는 논리였습니다. 그러나 실제 DirecTV 가치는 $23.5B($49B 대비 절반 이하)로 확인됐고, WarnerMedia 분사 후 AT&T는 배당을 삭감했습니다. 구조조정 이후 AT&T가 배당 수익률 중심의 방어주에서 재정의되는 과정에서 투자자 기반이 재편됐고, 주가는 $27~$30 수준으로 재산정됐습니다. '구조조정 방향은 맞았지만 밸류에이션 가정이 낙관적이었다'는 평가가 정확합니다.",
    },
    {
      q: "WarnerMedia-Discovery 합병(Warner Bros. Discovery)은 성공했나?",
      a: "결론적으로 또 다른 M&A 실패 사례가 됐습니다. WBD는 합병 후 $43B+ 기업가치 손상을 기록했으며, HBO Max와 Discovery+ 통합(Max 서비스)의 전략적 방향도 넷플릭스·디즈니+와의 경쟁에서 열위를 보였습니다. Elliott이 WarnerMedia 분사를 밀어붙인 것은 AT&T의 관점에서는 올바른 결정이었지만, 분사된 WarnerMedia 자체의 가치가 계속 하락했다는 점에서 미디어 산업의 구조적 위기는 해결되지 않았습니다.",
    },
    {
      q: "이 사례가 행동주의 투자의 관점에서 갖는 의의는?",
      a: "세 가지 측면에서 의미가 있습니다. 첫째, 메가캡에서도 행동주의가 작동한다는 증명 — 시총 $2,500억 기업의 전략 전체를 2년 만에 바꿨습니다. 둘째, 구체적 청사진의 힘 — 추상적 개혁 요구가 아닌 주가 목표·자산 처분 대상·비용 절감 규모를 숫자로 제시한 것이 기관투자자 설득의 핵심이었습니다. 셋째, 행동주의의 한계 — Elliott이 강제한 구조조정이 AT&T를 구했다기보다, 이미 돌이킬 수 없었던 인수 실패의 피해를 최소화하는 데 기여했다는 점에서 행동주의는 '예방'보다 '수습'에 더 효과적입니다.",
    },
  ],
};

export default deal;
