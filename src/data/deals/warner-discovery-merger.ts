/**
 * AT&T × WarnerMedia × Discovery — 워너브라더스 디스커버리 합병
 * Reverse Morris Trust 구조 · $850억 매입 후 $430억 매각 · 미디어 역대 최대 가치 파괴
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "warner-discovery-merger",
  title: "AT&T의 실패, 디스커버리의 도박 — 워너브라더스 디스커버리 합병 완전 해부",
  subtitle: "$850억에 샀다 $430억에 팔다 · $550억 부채 덩어리 · Max 스트리밍 생존 전략",
  category: "ma",
  industry: "미디어 & 엔터테인먼트 / 통신",
  country: "미국",
  announcedAt: "2021-05-17",
  closedAt: "2022-04-08",
  announcedDisplay: "2021년 5월",
  closedDisplay: "2022년 4월",
  readingMinutes: 13,
  tags: [
    "Warner Bros Discovery",
    "AT&T",
    "WarnerMedia",
    "Discovery",
    "HBO Max",
    "streaming",
    "media M&A",
    "Reverse Morris Trust",
  ],
  excerpt:
    "AT&T가 2018년 $850억에 사들인 WarnerMedia를 불과 4년 만에 $430억에 팔아버린 미디어 역대 최대 가치 파괴 딜. Discovery의 데이비드 자슬라브(David Zaslav)가 새 CEO를 맡아 Reverse Morris Trust 구조로 탄생한 워너브라더스 디스커버리. $550억 부채와 스트리밍 전쟁 속에서 HBO Max·Discovery+를 Max로 통합해 생존 전략을 짜는 중이다.",

  acquirer: { initials: "DISC", bg: "bg-blue-700", label: "Discovery, Inc." },
  target: { initials: "WM", bg: "bg-gray-800", label: "WarnerMedia (AT&T)" },

  background: [
    "2018년 AT&T는 Time Warner(HBO·CNN·워너브라더스·터너 스포츠)를 $850억에 인수하며 통신 회사에서 미디어 콘텐츠 제국으로의 도약을 선언했다. 당시 CEO 랜달 스티븐슨(Randall Stephenson)은 '콘텐츠와 유통의 수직 통합'을 통해 Netflix에 맞서겠다는 대담한 전략을 제시했다. DOJ(법무부)의 반독점 소송을 2년간 싸워 이기고 완료한 역대 최대 통신-미디어 M&A였다.",
    "그러나 AT&T의 실험은 처참히 실패했다. $850억 인수 대금과 Time Warner 부채가 겹쳐 AT&T 총부채는 $1,900억을 넘어섰다. 통신과 미디어는 문화적으로도, 경영 방식에서도 이질적인 사업이었다. HBO Max(AT&T 주도의 스트리밍)는 Netflix·Disney+에 비해 출발이 늦었고, 투자자들은 AT&T에 콘텐츠 부문 분리를 강하게 요구했다.",
    "2021년 5월 17일, AT&T와 Discovery는 파격적인 거래를 발표했다. AT&T가 WarnerMedia를 분리해 Discovery와 합병시키는 Reverse Morris Trust 구조로, 합병 신설 회사(워너브라더스 디스커버리)의 주식 71%는 AT&T 주주들이, 29%는 Discovery 주주들이 받는 구조였다. AT&T는 현금 약 $430억 상당의 가치(현금+WBD 부채 인수)를 수령했다.",
    "2022년 4월 8일 딜이 최종 완료됐다. Discovery의 CEO 데이비드 자슬라브가 합병 법인 CEO로 취임했다. 합병 직후 WBD는 $550억이 넘는 막대한 부채를 안고 출범했으며, 자슬라브는 즉각적인 비용 절감과 콘텐츠 정리에 착수했다. HBO Max와 Discovery+를 통합한 'Max' 스트리밍 플랫폼이 2023년 5월 출시됐다.",
  ],

  dealSummary: {
    dealValueDisplay: "약 $430억 (AT&T 수령 기준) / 합산 EV 약 $900억",
    acquirerName: "Discovery, Inc. (현 Warner Bros. Discovery)",
    targetName: "WarnerMedia (AT&T 분리)",
    announcedDisplay: "2021년 5월",
    closedDisplay: "2022년 4월",
    country: "미국",
  },

  executiveSummary: [
    "AT&T가 2018년 $850억에 매입한 WarnerMedia를 4년 만에 $430억 상당에 매각 — 사상 최대 규모 미디어 가치 파괴",
    "Reverse Morris Trust 구조: AT&T 주주 71% + Discovery 주주 29% → 합병법인 Warner Bros. Discovery 설립",
    "AT&T는 현금·부채 인수 형태로 약 $430억 가치 수령, Discovery는 HBO·CNN·워너브라더스 등 글로벌 콘텐츠 IP 확보",
    "합병 법인 총부채 약 $550억 — 출범 즉시 부채 디레버리징이 최우선 과제로 부상",
    "CEO 데이비드 자슬라브(Discovery) 주도: $20억+ 콘텐츠 상각, 인력 감축, HBO Max·Discovery+ → Max 통합",
    "스트리밍 전쟁의 핵심 교훈 — 콘텐츠 IP 없이는 통신사도, 미디어 공룡도 살아남기 힘든 시대",
  ],

  industryOverview: {
    body: "2021년 글로벌 미디어·엔터테인먼트 시장은 스트리밍 혁명의 한복판이었다. Netflix가 전 세계 2억 명 이상의 구독자를 보유했고, Disney+는 출시 2년 만에 1억 명을 돌파했다. 케이블 TV는 '코드 커팅(cord-cutting)'의 가속으로 매년 수백만 가입자를 잃고 있었다. 미디어 기업들은 스트리밍 플랫폼 구축과 콘텐츠 투자 경쟁에 수백억 달러를 쏟아붓고 있었다. 한편 전통 케이블 네트워크는 여전히 현금을 생산했지만, 장기 성장성에 대한 의문이 커졌다.",
    metrics: [
      { label: "글로벌 스트리밍 시장 규모", value: "약 $750억", sub: "2021년 기준" },
      { label: "Netflix 구독자", value: "약 2.2억 명", sub: "2021년 말 기준" },
      { label: "미국 케이블 코드커팅", value: "연간 약 500만 가구", sub: "2020~2021년 평균" },
      { label: "글로벌 M&E 시장", value: "약 $2.1조", sub: "2021년 전체 미디어·엔터테인먼트" },
    ],
    subBody:
      "AT&T-WarnerMedia 합병이 실패한 핵심 이유 중 하나는 '통신사의 콘텐츠 직접 운영' 전략이 예상보다 훨씬 어려웠기 때문이다. 반면 Discovery는 리얼리티·다큐멘터리·스포츠 등 저비용 콘텐츠 제작에 특화된 효율 경영으로 알려져 있었고, 자슬라브의 비용 절감 DNA가 HBO·워너브라더스라는 프리미엄 IP를 만났을 때 어떤 결과를 낼지가 이 딜의 핵심 관전 포인트였다.",
    players: [
      { name: "Netflix", role: "글로벌 스트리밍 1위, 콘텐츠 투자 연 $170억+ (2021)" },
      { name: "Disney (Disney+/Hulu/ESPN+)", role: "2위 스트리밍, IP 파워(마블·스타워즈·픽사)" },
      { name: "Comcast (NBCUniversal/Peacock)", role: "케이블+스트리밍 복합, USA·영국 Sky 보유" },
      { name: "Amazon Prime Video", role: "Prime 번들 스트리밍, MGM 인수(2022)" },
    ],
  },

  companyOverview: {
    targetName: "WarnerMedia (AT&T 분리 법인)",
    body: "WarnerMedia는 HBO(프리미엄 드라마·영화), CNN(뉴스), 워너브라더스 스튜디오(DC·해리포터·레고무비 등), Turner(TNT·TBS·Cartoon Network), HBO Max(스트리밍)로 구성된 미국 최대 미디어 기업 중 하나였다. AT&T 산하에서 HBO Max를 출시(2020년 5월)했으나, 넷플릭스·디즈니+와의 경쟁에서 성장 속도가 기대에 못 미쳤다. 합병 당시 WarnerMedia는 연 매출 약 $360억, EBITDA 약 $100억 규모였다. Discovery와 합병 후 WBD는 케이블 네트워크 + 스트리밍 + 스튜디오를 아우르는 복합 미디어 그룹으로 재탄생했다.",
    metrics: [
      { label: "합산 연 매출 (2022 실적)", value: "약 $432억", sub: "WBD 합병 후 첫 전체 연도" },
      { label: "합산 EBITDA (2022)", value: "약 $98억", sub: "대규모 구조조정 반영" },
      { label: "HBO/Max 구독자", value: "약 9,200만 명", sub: "2022년 말 기준" },
      { label: "합병 후 총부채", value: "약 $550억", sub: "출범 시 기준, 최우선 감축 과제" },
      { label: "콘텐츠 상각 규모", value: "$20억+ ", sub: "합병 직후 콘텐츠 정리·취소" },
    ],
    financials: [
      { year: "2022", revenue: 43185, cogs: 28000, grossProfit: 15185, sga: 9500, operatingIncome: -4000, ebitda: 9800 },
      { year: "2023", revenue: 41322, cogs: 26500, grossProfit: 14822, sga: 9200, operatingIncome: -2000, ebitda: 9500 },
      { year: "2024", revenue: 39300, cogs: 25000, grossProfit: 14300, sga: 8500, operatingIncome: 1500, ebitda: 9000 },
    ],
    financialsNote: "단위: USD 백만(M). WBD 합병 후 프로포마 기준. 2022년은 대규모 구조조정 비용 포함. EBITDA는 조정 기준.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "케이블 네트워크", pct: 48, color: "bg-blue-700", amt: "약 $207억" },
      { name: "스튜디오", pct: 22, color: "bg-yellow-500", amt: "약 $95억" },
      { name: "스트리밍", pct: 18, color: "bg-purple-500", amt: "약 $78억" },
      { name: "광고", pct: 12, color: "bg-gray-500", amt: "약 $52억" },
    ],
  },

  dealStructure: {
    body: "이 딜은 'Reverse Morris Trust(RMT)' 구조로 설계됐다. AT&T가 WarnerMedia를 먼저 자회사로 분리(spin-off)한 뒤, 해당 분리 법인이 Discovery와 합병하는 방식이다. RMT 구조의 핵심은 세금 효율성: AT&T가 WarnerMedia를 직접 매각했다면 수십억 달러의 양도소득세가 발생했겠지만, RMT를 통해 주주에게 주식을 배분하는 방식으로 세금 중립적 분리를 달성했다. 합병 결과 AT&T 주주들은 WBD 주식 71%, Discovery 주주들은 29%를 보유하게 됐다.",
    preOwnership: {
      nodes: [
        { id: "att", label: "AT&T Inc.", sub: "NYSE 상장 (T) · 미국 최대 통신사", type: "acquirer" },
        { id: "wm", label: "WarnerMedia", sub: "AT&T 100% 자회사", type: "target" },
        { id: "disc", label: "Discovery, Inc.", sub: "나스닥 상장 · 독립 미디어", type: "public" },
      ],
      edges: [
        { from: "att", to: "wm", label: "100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "att_sh", label: "AT&T 주주", sub: "WBD 지분 71% 배분 수령", type: "public" },
        { id: "disc_sh", label: "Discovery 주주", sub: "WBD 지분 29% 보유", type: "public" },
        { id: "wbd", label: "Warner Bros. Discovery", sub: "나스닥 상장 (WBD)", type: "entity" },
        { id: "att2", label: "AT&T Inc.", sub: "통신 사업 집중, WBD 지분 없음", type: "acquirer" },
      ],
      edges: [
        { from: "att_sh", to: "wbd", label: "71%" },
        { from: "disc_sh", to: "wbd", label: "29%" },
      ],
    },
    keyTerms: [
      { label: "딜 구조", value: "Reverse Morris Trust (세금 중립적 분리합병)", accent: true },
      { label: "AT&T 수령 가치", value: "약 $430억 (현금 + WBD 부채 인수)", accent: true },
      { label: "WBD 합산 EV", value: "약 $900억 (완료 시점)", accent: false },
      { label: "AT&T 주주 지분", value: "WBD 주식 71%", accent: false },
      { label: "Discovery 주주 지분", value: "WBD 주식 29%", accent: false },
      { label: "합병 후 총부채", value: "약 $550억", accent: true },
      { label: "EV / EBITDA", value: "약 9.0× (합병 시점 추정)", accent: false },
      { label: "AT&T WarnerMedia 원래 매입가", value: "$850억 (2018년)", accent: true },
    ],
  },

  advisors: {
    body: "AT&T와 Discovery 양측에 월가 최정상 IB와 전문 로펌이 포진했다. 복잡한 Reverse Morris Trust 세무 구조와 규제 승인(DOJ·FCC), 그리고 AT&T 주주들에 대한 공정성 의견(Fairness Opinion) 제공이 자문단의 핵심 역할이었다.",
    sides: [
      {
        side: "target",
        sideLabel: "매도측 (AT&T / WarnerMedia)",
        initials: "WM",
        bg: "bg-gray-800",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "AT&T 이사회 재무 자문·공정성 의견 총괄" },
          { firm: "JPMorgan", role: "재무 자문 (FA)", roleType: "financial", note: "공동 재무 자문·딜 구조 설계" },
          { firm: "Debevoise & Plimpton", role: "법률 자문", roleType: "legal", note: "M&A 계약·RMT 세무 구조 법률 자문 총괄" },
        ],
      },
      {
        side: "acquirer",
        sideLabel: "매수측 (Discovery, Inc.)",
        initials: "DISC",
        bg: "bg-blue-700",
        advisors: [
          { firm: "LionTree Advisors", role: "재무 자문 (FA)", roleType: "financial", note: "Discovery 전속 미디어 M&A 부티크·딜 전략 주도" },
          { firm: "Deutsche Bank", role: "재무 자문 (FA)", roleType: "financial", note: "공동 재무 자문·자금조달 지원" },
          { firm: "Cravath, Swaine & Moore", role: "법률 자문", roleType: "legal", note: "M&A 계약 및 합병 관련 법률 자문" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도·공시 기반입니다.",
  },

  valuation: {
    body: "AT&T가 WarnerMedia에 실현한 가치는 약 $430억으로, 2018년 매입가 $850억의 절반 수준이다. 이는 주주 가치 측면에서 약 $400억 이상의 손실을 의미한다. 합병 법인 WBD의 EV는 완료 시점 약 $900억으로 추정됐으며, EV/EBITDA 약 9배는 당시 미디어 섹터 피어(디즈니 ~15×, Comcast ~10×)와 비교해 부채 부담과 스트리밍 불확실성이 반영된 낮은 수준이었다.",
    rows: [
      { item: "AT&T 2018년 WarnerMedia 매입가", val: "$850억", note: "Time Warner 인수 당시 총 EV", accent: true },
      { item: "AT&T 수령 가치 (2022)", val: "약 $430억", note: "현금 수령분 + WBD 인수 부채 합산", accent: true },
      { item: "묵시적 가치 파괴 규모", val: "약 $400억+", note: "4년간 자본 비용·이자 포함 시 실질 손실 더 큼", accent: false },
      { item: "WBD 합산 EV (완료 시점)", val: "약 $900억", note: "AT&T WM + Discovery 합산 추정치" },
      { item: "합병 후 총부채", val: "약 $550억", note: "출범 시 기준 — 디레버리징이 최우선 과제" },
      { item: "EV / EBITDA (완료 시점)", val: "약 9.0×", note: "조정 EBITDA ~$100억 대비, 피어 대비 할인", accent: true },
      { item: "WBD 주가 (상장 후 1년)", val: "약 $12~$15", note: "$20+ 수준에서 지속 하락, 부채·수익성 우려 반영" },
    ],
    disclaimer: "밸류에이션 수치는 공개 공시 및 업계 분석 자료 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "Discovery 인수 논리 (데이비드 자슬라브)",
      initials: "DISC",
      bg: "bg-blue-700",
      points: [
        "글로벌 프리미엄 콘텐츠 IP 확보 — HBO·워너브라더스·DC·CNN 등 Discovery가 단독으로는 결코 만들 수 없는 자산 획득",
        "스트리밍 규모의 경제 달성 — HBO Max + Discovery+를 통합해 Netflix·Disney+에 맞설 수 있는 가입자 기반 구축",
        "비용 절감 DNA 적용 — 자슬라브의 저비용 고효율 경영을 HBO·워너브라더스에 이식해 이익률 개선 도모",
        "국제 시장 확장 — Discovery의 글로벌 유통망(200개국+)에 HBO 프리미엄 콘텐츠를 결합해 국제 성장",
        "케이블 현금흐름 + 스트리밍 성장 투트랙 — 아직 수익성 높은 케이블 네트워크로 부채를 갚으면서 스트리밍 전환 추진",
      ],
    },
    seller: {
      title: "AT&T 매각 논리",
      initials: "WM",
      bg: "bg-gray-800",
      points: [
        "통신 사업 집중 전략 복귀 — 미디어 복합 경영 실패를 인정하고 5G·광대역 통신 핵심 사업에 자원 재집중",
        "$1,900억+ 부채 감축 — WarnerMedia 분리를 통해 대규모 부채를 줄이고 신용등급 개선, 배당 유지 가능성 제고",
        "세금 효율 극대화 — Reverse Morris Trust 구조로 직접 매각 대비 수십억 달러 세금 절감",
        "주주 가치 제고 시도 — AT&T 주주들이 WBD 주식을 직접 받아 미디어 성장 옵션을 보유하는 구조",
        "경영진 역량 한계 인정 — AT&T 경영진이 미디어 산업 특수성을 이해하지 못한다는 투자자 비판 수용",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "2022년 4월 출범한 Warner Bros. Discovery는 2년 반이 지난 2024년 말까지 험난한 여정을 이어가고 있다. 자슬라브의 공격적 비용 절감으로 단기 EBITDA는 유지됐지만 부채 감축 속도는 예상보다 느렸다. 'Batgirl'·'Coyote vs Acme' 등 완성된 영화를 세금 혜택을 위해 취소·폐기하는 결정은 창작 커뮤니티의 강한 반발을 불렀다. 2023년 5월 출시된 Max는 HBO Max와 Discovery+의 통합으로 구독자 수를 늘리는 데 성공했으나, 스트리밍 사업부의 수익성은 아직 불투명하다. 2024년에는 케이블 스포츠 채널 분리 추진(TNT Sports 분사 계획) 등 추가 구조조정도 논의 중이다.",
    overallVerdict: "어려운 전환기 진행 중 (부채 감축 속도 지연, 스트리밍 수익화 과제)",
    positives: [
      "Max 스트리밍 통합 성공 — 2024년 말 기준 글로벌 구독자 약 1억 명 돌파 목표 진행 중",
      "비용 절감 효과 — 출범 후 $35억+ 비용 감축, 조정 EBITDA 안정적 유지",
      "부채 감축 진전 — 출범 이후 약 $50억+ 순부채 감축 달성",
      "HBO 콘텐츠 브랜드 유지 — '더 라스트 오브 어스', '석세션' 등 HBO 오리지널의 높은 평가 지속",
    ],
    risks: [
      "과도한 부채 — 여전히 $400억+ 순부채, 금리 상승 환경에서 이자 부담 연간 $30억+",
      "케이블 TV 가속 쇠락 — 케이블 네트워크(TNT·CNN·TBS 등) 광고·구독 매출 지속 감소",
      "콘텐츠 신뢰 훼손 — 완성 작품 폐기 결정으로 스튜디오·크리에이터 관계 악화, 인재 이탈",
      "스트리밍 수익성 불투명 — Max는 성장 중이나 손익분기점 달성 시기 불확실",
      "주가 부진 — 상장 이후 주가 지속 하락, 시가총액 $100억대로 EV 대비 주식 가치 극도 압축",
    ],
    editorNote: "AT&T-WarnerMedia 딜은 '콘텐츠와 유통의 수직 통합'이라는 이론이 현실에서 얼마나 실현하기 어려운지를 보여주는 교과서적 사례다. $850억을 쓰고 $430억을 받은 이 딜은, 통신사가 미디어 경쟁에서 이기는 건 돈의 문제가 아니라 문화·역량·DNA의 문제라는 것을 냉혹하게 증명했다. 한편 워너브라더스 디스커버리는 역대급 부채를 안고 스트리밍 전쟁에 참전 중이다. HBO라는 강력한 IP가 이 부채의 무게를 견뎌낼 수 있을지가 2025~2026년의 최대 관전 포인트다.",
  },

  tombstone: {
    acquirerInitials: "DISC",
    acquirerBg: "bg-blue-700",
    targetInitials: "WM",
    targetBg: "bg-gray-800",
    acquirerName: "Discovery, Inc.",
    targetName: "WarnerMedia (AT&T)",
    dealTitle: "Reverse Morris Trust 분리합병",
    dealSize: "약 $430억 (AT&T 수령 기준)",
    dealSizeUSD: "approx. USD 43 Billion",
    evEbitda: "~9.0×",
    closeDate: "Apr 2022",
  },

  sources: [
    { id: 1, text: "AT&T Press Release — AT&T Combines WarnerMedia with Discovery (May 2021)", url: "https://about.att.com" },
    { id: 2, text: "Discovery Press Release — Discovery and AT&T Combine WarnerMedia and Discovery to Create a Premier, Standalone Global Entertainment Company (May 2021)" },
    { id: 3, text: "Warner Bros. Discovery 2022 Annual Report (Form 10-K)", url: "https://ir.wbd.com" },
    { id: 4, text: "Warner Bros. Discovery 2023 Annual Report (Form 10-K)", url: "https://ir.wbd.com" },
    { id: 5, text: "DOJ — AT&T Inc. / Time Warner Inc.: Competitive Impact Statement (2018)" },
    { id: 6, text: "Bloomberg — AT&T's $43 Billion WarnerMedia Deal Closes, Zaslav Takes Over (April 2022)" },
    { id: 7, text: "Wall Street Journal — Warner Bros. Discovery Writes Off $2 Billion in Content (2022)" },
    { id: 8, text: "Variety — Max Streaming Launch: Combining HBO Max and Discovery+ (May 2023)" },
    { id: 9, text: "S&P Global — Warner Bros. Discovery Debt Downgrade and Leverage Analysis (2022)" },
  ],

  seo: {
    title: "워너브라더스 디스커버리 합병 분석 — AT&T 실패와 미디어 산업 재편",
    description: "AT&T가 $850억에 산 WarnerMedia를 $430억에 팔아버린 역대 최대 가치 파괴 딜. Reverse Morris Trust 구조, $550억 부채, Max 스트리밍 전략까지 완전 해부.",
    keywords: [
      "워너브라더스 디스커버리 합병",
      "AT&T WarnerMedia 매각",
      "Reverse Morris Trust 구조",
      "HBO Max Discovery Plus 통합",
      "미디어 M&A 분석",
      "스트리밍 전쟁 미디어",
      "AT&T 가치 파괴 딜",
      "데이비드 자슬라브 CEO",
      "Warner Bros Discovery 주가",
      "미디어 부채 디레버리징",
      "WBD 딜 구조 분석",
    ],
  },

  concepts: [
    { term: "Reverse Morris Trust (RMT)", href: "/learn/reverse-morris-trust", description: "모회사가 사업부를 분리(spin-off)한 후 해당 분리 법인이 인수자와 합병하는 세금 효율적 구조" },
    { term: "분리합병 / 스핀오프 (Spin-off)", href: "/learn/spinoff", description: "모회사가 사업부를 독립 법인으로 분리해 기존 주주에게 신주를 배분하는 기업 구조조정 방식" },
    { term: "디레버리징 (Deleveraging)", href: "/learn/deleveraging", description: "기업이 과도한 부채를 줄이기 위해 자산 매각·이익 창출을 통해 순부채를 감축하는 과정" },
    { term: "코드커팅 (Cord-Cutting)", description: "유선 케이블 TV 가입을 해지하고 스트리밍 서비스로 이동하는 소비자 행동 트렌드" },
    { term: "콘텐츠 상각 (Content Write-off)", description: "완성됐거나 개발 중인 콘텐츠를 회계상 자산에서 제거해 손실로 처리하는 행위" },
    { term: "수직 통합 (Vertical Integration)", href: "/learn/vertical-integration", description: "콘텐츠(제작)와 유통(플랫폼/통신망)을 한 기업이 동시에 보유해 시너지를 추구하는 전략" },
  ],

  faq: [
    {
      q: "AT&T는 왜 WarnerMedia를 사고 나서 이렇게 빨리 팔아버렸나요?",
      a: "AT&T가 2018년 Time Warner를 $850억에 인수했을 때는 '5G 네트워크 + 콘텐츠 수직 통합'으로 Netflix에 맞서겠다는 전략이었습니다. 그러나 $1,900억이 넘는 총부채, 통신과 미디어의 이질적인 문화 충돌, HBO Max의 부진한 초기 성과, 그리고 투자자들의 '핵심 사업(통신)에 집중하라'는 강한 압박이 겹쳤습니다. 결국 4년 만에 약 $400억 이상의 가치를 손해 보고 팔아버렸습니다.",
    },
    {
      q: "Reverse Morris Trust란 무엇이고, 왜 이 구조를 선택했나요?",
      a: "Reverse Morris Trust(RMT)는 모회사가 사업부를 자회사로 분리(spin-off)한 뒤, 그 자회사를 인수자와 합병시키는 세금 효율적 M&A 구조입니다. 핵심 장점은 AT&T가 WarnerMedia를 직접 매각했을 때 발생할 수십억 달러의 양도소득세를 피할 수 있다는 점입니다. AT&T 주주들은 WBD 주식을 직접 받아 미래 미디어 성장 옵션도 가질 수 있었고, AT&T는 현금·부채 감소 형태로 $430억 가치를 수령했습니다.",
    },
    {
      q: "합병 후 WBD는 왜 완성된 영화를 폐기했나요?",
      a: "자슬라브 CEO는 합병 직후 공격적인 비용 절감에 나섰습니다. 완성된 영화·드라마를 스트리밍이나 극장 개봉 없이 취소하면 콘텐츠 자산을 장부에서 상각(write-off)해 회계상 세금 혜택을 받을 수 있습니다. 'Batgirl', 'Coyote vs. Acme' 등이 이런 이유로 폐기됐습니다. 단기 비용 절감 효과는 있었지만, 창작자와 감독들의 강한 반발과 브랜드 신뢰 훼손이라는 부작용을 낳았습니다.",
    },
    {
      q: "Max 스트리밍 서비스는 성공하고 있나요?",
      a: "2023년 5월 HBO Max와 Discovery+를 통합한 Max는 가입자 수 측면에서 성장세를 보이고 있습니다. 2024년 말 기준 글로벌 구독자는 1억 명에 근접했습니다. 그러나 수익성 측면에서는 아직 손익분기점 달성이 불확실하고, Netflix·Disney+와의 격차는 여전히 큽니다. HBO의 프리미엄 콘텐츠 브랜드가 Max의 가장 강력한 자산이지만, $400억대 부채를 갚으면서 동시에 스트리밍에 충분한 투자를 하는 것이 딜레마입니다.",
    },
    {
      q: "WBD 주가는 왜 이렇게 부진한가요?",
      a: "WBD는 상장 이후 주가가 지속 하락해 시가총액이 EV의 극히 일부에 불과한 수준까지 떨어졌습니다. 핵심 이유는 세 가지입니다: 첫째, $400억+ 순부채라는 막대한 부담. 둘째, 케이블 TV 사업의 구조적 쇠락 가속. 셋째, 스트리밍 수익화 경로의 불투명성. 투자자들은 WBD가 부채를 감당하면서 스트리밍으로 성공적으로 전환할 수 있을지에 회의적입니다.",
    },
    {
      q: "이 딜이 미디어 M&A에 남긴 교훈은 무엇인가요?",
      a: "첫째, '이종 산업 수직 통합의 함정' — 통신사가 미디어를 운영하는 것은 문화·역량·DNA가 근본적으로 다릅니다. 돈으로 IP를 살 수는 있어도 창의적 문화를 사기는 어렵습니다. 둘째, '과도한 레버리지의 위험' — $850억 인수 대금은 AT&T와 WBD 모두를 수년간 옥죄는 부채로 남았습니다. 셋째, '스트리밍 투자의 딜레마' — 콘텐츠에 충분히 투자해야 경쟁할 수 있지만, 과도한 부채 상황에서는 불가능합니다.",
    },
  ],
};

export default deal;
