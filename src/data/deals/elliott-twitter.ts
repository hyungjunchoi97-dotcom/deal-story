/**
 * Elliott Management × Twitter
 * Jack Dorsey CEO 사퇴의 씨앗을 뿌린 행동주의 — 2020
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "elliott-twitter",
  title: "Elliott vs Twitter — Jack Dorsey CEO 사퇴의 씨앗을 뿌린 행동주의",
  subtitle: "겸직 CEO 퇴진 요구 · 이사회 석 확보 · $1B 자사주 매입 · Silver Lake 우호 자본 유치 · Elon Musk 인수의 발화점",
  category: "activism",
  industry: "소셜 미디어·인터넷",
  country: "미국",
  announcedAt: "2020-02-28",
  closedAt: "2020-03-09",
  announcedDisplay: "2020년 2월",
  closedDisplay: "2020년 3월 (합의)",
  readingMinutes: 12,
  tags: [
    "엘리엇", "트위터", "Jack Dorsey", "행동주의", "겸직 CEO", "지배구조",
    "Silver Lake", "자사주 매입", "Jesse Cohn", "Elon Musk",
  ],
  excerpt:
    "Elliott Management가 트위터 지분 약 4%(~$1B+)를 매집하고 이사 4명 교체를 통한 Jack Dorsey 축출을 시도했다. 10일 만에 신속 합의가 이뤄져 Elliott 이사 2석·독립 이사회 의장·$1B 자사주 매입을 확보했고, Dorsey는 자리를 지켰다. 그러나 18개월 뒤 Dorsey는 자진 사임했고, 이는 2022년 Elon Musk의 $44B 인수로 이어지는 연쇄 반응의 출발점이 됐다.",

  acquirer: { initials: "ELL", bg: "bg-slate-700", label: "Elliott Management Corporation" },
  target:   { initials: "TWTR", bg: "bg-sky-500", label: "Twitter, Inc. (TWTR)" },

  background: [
    "트위터는 2006년 Jack Dorsey가 공동 창업했지만 내부 권력 싸움으로 2008년 축출됐다가 2015년 CEO로 복귀한 독특한 이력을 가진 회사다. Dorsey의 복귀 이후에도 트위터의 실적은 투자자들을 만족시키지 못했다. 주가는 2013년 IPO 이후 수년간 횡보하거나 하락했으며, Facebook·Snap·TikTok 등 경쟁사 대비 월간 활성 사용자(MAU) 성장률이 현저히 낮았다. 제품 실행력 부재와 수익화 어려움이 지속적인 지적 대상이었다.",
    "더 근본적인 문제는 Dorsey의 이중 CEO 역할이었다. 그는 트위터의 CEO인 동시에 2015년 Square(현 Block)의 CEO직도 수행하고 있었다. 두 상장사를 동시에 이끄는 것은 유례없는 일이었으며, 이사회와 투자자들 사이에서 집중력 분산에 대한 우려가 끊이지 않았다. 2019~2020년 초 Dorsey가 아프리카에서 수 개월을 보내며 명상과 단식에 집중했다는 보도가 나오면서 비판은 더욱 거세졌다. '트위터 CEO가 회사를 방치하고 있다'는 인식이 시장에 퍼졌다.",
    "2020년 2월 28일, Elliott Management는 트위터 지분 약 4%(~$1B+ 이상)를 보유하고 있다고 공시하며 이사 후보 4명을 지명했다. Jesse Cohn(Elliott 파트너)이 캠페인의 전면에 나섰다. Elliott의 핵심 논거는 단순했다: 트위터는 전업 CEO가 필요하며, Dorsey의 겸직 구조는 지속 불가능하다. Elliott는 또한 트위터가 제품·사용자 성장·수익화에서 잠재력을 훨씬 밑도는 성과를 내고 있으며, 이는 리더십 집중력 문제에서 비롯된다고 주장했다.",
    "Elliott의 공격을 받은 트위터 경영진과 이사회는 즉각 방어 전략을 가동했다. 핵심은 우호 자본 유치였다. 트위터는 Silicon Valley 최대 사모펀드 중 하나인 Silver Lake로부터 $1B+ 전환사채 투자를 유치하는 데 성공했다. Silver Lake의 Egon Durban이 이사회에 합류했다. 이 우호 자본(White Squire) 전략은 Elliott의 지분 영향력을 희석시키고 협상력을 높이는 역할을 했다. 결국 Elliott의 지분 공시로부터 불과 10일 만인 3월 9일, 양측은 협상 테이블에서 전격 합의에 도달했다.",
    "합의 내용은 Elliott에게도, 트위터에게도 절반의 승리였다. Elliott는 Jesse Cohn과 Marc Bain Nathanson의 이사회 합류를 확보했고, 전 Google CFO Patrick Pichette가 독립 이사회 의장으로 선임됐으며, $1B 자사주 매입 프로그램이 발표됐다. 그러나 Dorsey는 CEO 자리를 지켰다. Elliott는 구조적 변화(이사회 독립성 강화, 자본 환원)를 얻는 대신 Dorsey 축출 요구를 철회했다. 시장은 이 합의를 호의적으로 평가했고 트위터 주가는 단기 상승했다.",
  ],

  dealSummary: {
    dealValueDisplay: "Elliott 지분 약 $1B+ (~4%)",
    acquirerName: "Elliott Management Corporation",
    targetName: "Twitter, Inc. (TWTR)",
    announcedDisplay: "2020년 2월 28일",
    closedDisplay: "2020년 3월 9일 (합의 발표)",
    country: "미국",
  },

  executiveSummary: [
    "Elliott Management, 트위터 지분 ~4%(~$1B+) 매집 후 이사 4명 교체·Jack Dorsey 겸직 CEO 퇴진 요구 공시",
    "핵심 공격 근거: Square와 트위터 동시 CEO라는 전례 없는 겸직 구조, 아프리카 장기 체류로 드러난 집중력 부재, 경쟁사 대비 현저히 낮은 사용자 성장률",
    "트위터 방어 전략: Silver Lake로부터 $1B+ 우호 투자 유치(White Squire 전략)로 협상력 강화",
    "10일 만에 신속 합의: Jesse Cohn·Marc Bain Nathanson 이사 합류, 독립 의장(Patrick Pichette) 선임, $1B 자사주 매입 확보 — Dorsey는 CEO직 유지",
    "18개월 후 자진 사임: 2021년 11월 29일 Jack Dorsey 자진 사임, Parag Agrawal(CTO) 승계",
    "M&A 연쇄 반응: 2022년 Elon Musk $44B 인수 완료 — Elliott가 심은 지배구조 불씨가 트위터의 운명을 바꾼 연쇄 효과",
  ],

  industryOverview: {
    body: "2020년 초 소셜 미디어 업계는 거대한 재편 압력에 직면해 있었다. Facebook(메타)이 인스타그램·왓츠앱 인수로 생태계를 확장하고 있는 동안, TikTok은 전 세계 Z세대를 빠르게 흡수하며 기존 플랫폼을 위협했다. 트위터는 '공론장'이라는 독특한 포지셔닝을 가졌지만 수익화 모델과 사용자 성장 면에서 오랫동안 뒤처졌다. 광고 기반 수익 모델의 한계와 함께, 콘텐츠 정책(허위 정보·계정 정지) 문제가 정치적 논란을 끊임없이 유발했다.",
    metrics: [
      { label: "트위터 MAU (2020년 초)", value: "약 1.52억", sub: "Facebook의 1/15 수준" },
      { label: "트위터 주가 (2020년 2월)", value: "약 $34", sub: "2013년 IPO 이후 장기 횡보" },
      { label: "Elliott 지분 공시 규모", value: "~$1B+ (~4%)", sub: "2020년 2월 28일 공시" },
      { label: "합의까지 소요 기간", value: "10일", sub: "공시(2/28) → 합의(3/9)" },
    ],
    subBody: "소셜 미디어 플랫폼의 핵심 경쟁 지표는 일간 활성 사용자(DAU)와 광고 단가(CPM)다. 트위터는 두 지표 모두에서 Facebook·Snap·TikTok 대비 성장 속도가 낮았다. 행동주의 투자자들은 이 구조적 저성과의 원인으로 리더십 집중력 문제를 지목했다. Elliott의 논거는 단순했다: 두 상장사를 동시에 경영하는 CEO는 어느 회사에도 최선을 다하지 못한다.",
    players: [
      { name: "Elliott Management (Jesse Cohn)", role: "행동주의 헤지펀드 — Jack Dorsey 축출 시도의 주역" },
      { name: "Jack Dorsey", role: "Twitter CEO 겸 Square CEO — 겸직 구조의 당사자" },
      { name: "Silver Lake (Egon Durban)", role: "PE 펀드 — 우호 자본으로 $1B+ 투자, 경영진 지지" },
      { name: "Patrick Pichette", role: "전 Google CFO — 합의 결과 독립 이사회 의장으로 선임" },
      { name: "Parag Agrawal", role: "Twitter CTO — 2021년 Dorsey 사임 후 CEO 승계" },
    ],
  },

  companyOverview: {
    targetName: "Twitter, Inc. (TWTR)",
    body: "트위터는 2006년 Jack Dorsey, Biz Stone, Evan Williams, Noah Glass가 공동 창업한 소셜 네트워크 플랫폼이다. 140자(이후 280자) 단문 메시지 기반의 '공론장' 플랫폼으로, 정치인·언론인·연예인·기업 등 오피니언 리더들의 채널로 자리잡았다. 그러나 IPO(2013년) 이후 수익화와 사용자 성장에 어려움을 겪었고, 특히 Facebook·Instagram 대비 MAU 성장이 정체되면서 주가는 장기 횡보 또는 하락 추세를 보였다. 광고 수익에 거의 전적으로 의존하는 단일 수익 모델의 취약성이 지속적인 지적 대상이었다.",
    metrics: [
      { label: "설립 연도", value: "2006년", sub: "Jack Dorsey 등 공동 창업" },
      { label: "NYSE 상장", value: "2013년 11월", sub: "IPO 공모가 $26, 시가총액 ~$14B" },
      { label: "mDAU (2020년 Q1)", value: "약 1.66억", sub: "수익화 가능 DAU — 트위터의 핵심 공식 지표" },
      { label: "FY2019 매출", value: "$3.46B", sub: "광고 수익 ~86%, 데이터 라이선스 ~14%" },
      { label: "Jack Dorsey 지분", value: "약 2.3%", sub: "창업자이나 지분은 낮은 수준" },
      { label: "Elliott 지분 (2020년 2월)", value: "약 4%", sub: "~$1B+ 규모, 최대 외부 행동주의 주주" },
    ],
    financials: [
      {
        year: "FY2019",
        revenue: 3459,
        cogs: 1362,
        grossProfit: 2097,
        sga: 1560,
        operatingIncome: 537,
        ebitda: 890,
      },
      {
        year: "FY2020",
        revenue: 3716,
        cogs: 1432,
        grossProfit: 2284,
        sga: 1680,
        operatingIncome: 604,
        ebitda: 980,
      },
      {
        year: "FY2021",
        revenue: 5077,
        cogs: 1765,
        grossProfit: 3312,
        sga: 2480,
        operatingIncome: 832,
        ebitda: 1320,
      },
    ],
    financialsNote: "단위: $M (백만 달러) | 출처: Twitter Inc. Annual Report (10-K) 기반",
    financialsCurrency: "USD",
    financialsUnit: "M",
  },

  governanceOverview: {
    body: "Elliott의 트위터 캠페인은 소셜 미디어 역사상 가장 주목받은 행동주의 사례 중 하나였다. Jack Dorsey가 두 상장사(트위터·Square)의 CEO를 동시에 맡는다는 구조는 투자자들에게 명백한 지배구조 취약점으로 인식됐다. Elliott는 이 취약점을 정밀하게 공략했고, 트위터 경영진은 Silver Lake 우호 자본으로 방어했다. 합의는 전면전 없이 10일 만에 이뤄졌지만, Elliott가 심어놓은 '전업 CEO 필요성'이라는 씨앗은 18개월 후 Dorsey의 자진 사임으로 열매를 맺었다.",
    shareholders: [
      {
        id: "elliott",
        label: "Elliott Management",
        sub: "Jesse Cohn 주도, 이사 4인 교체 요구",
        stake: "~4.0%",
        stakePct: 4.0,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "vanguard",
        label: "Vanguard Group",
        sub: "최대 기관 주주 — 패시브 운용",
        stake: "~8.5%",
        stakePct: 8.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "dorsey",
        label: "Jack Dorsey",
        sub: "Twitter·Square 겸직 CEO, 창업자",
        stake: "~2.3%",
        stakePct: 2.3,
        type: "management",
        alignment: "pro",
      },
      {
        id: "silverlake",
        label: "Silver Lake",
        sub: "합의 후 $1B+ 전환사채 투자 — 우호 자본",
        stake: "~2.0%",
        stakePct: 2.0,
        type: "institutional",
        alignment: "pro",
      },
      {
        id: "public",
        label: "기타 공개 주주",
        sub: "일반 기관·개인 투자자",
        stake: "~83.2%",
        stakePct: 83.2,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 11,
      independent: 9,
      affiliated: 2,
      note: "합의 후 이사회 개편: Jesse Cohn·Marc Bain Nathanson(Elliott 측) 합류, Patrick Pichette(전 Google CFO)가 독립 이사회 의장으로 선임. Silver Lake의 Egon Durban도 이사로 합류.",
    },
    issues: [
      {
        title: "겸직 CEO 구조 (Dual CEO Problem)",
        description: "Jack Dorsey가 트위터와 Square 두 상장사의 CEO를 동시에 맡는 구조는 집중력·의사결정 속도·책임감 모두에서 지배구조 취약점이었다. 이사회와 대주주들이 오랫동안 우려를 표명했으나 구조적 변화는 이뤄지지 않았다. Elliott는 이 취약점을 핵심 공격 근거로 활용했다.",
        severity: "critical",
      },
      {
        title: "창업자 CEO의 집중력 부재",
        description: "Dorsey가 2019~2020년 초 아프리카에서 수 개월을 보내며 명상·단식에 집중했다는 보도가 이어졌다. 트위터의 제품 로드맵과 사용자 성장 전략이 정체된 상황에서, 경영진의 물리적·심리적 부재는 투자자 신뢰를 크게 훼손했다.",
        severity: "high",
      },
      {
        title: "경쟁사 대비 만성적 저성과",
        description: "트위터의 MAU 성장률과 광고 단가(CPM)는 Facebook·Snap·TikTok 대비 구조적으로 낮았다. 제품 혁신 속도가 더디고 수익화 모델 다양화가 지체되면서 주가는 IPO 이후 수년간 횡보 또는 하락했다. 이 만성적 저성과는 리더십 교체 요구의 배경이 됐다.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "Jack Dorsey 교체 (전업 CEO 선임)",
        result: "partial",
        note: "합의 당시 Dorsey는 CEO직을 유지했다. 그러나 Elliott가 심어놓은 압박이 배경이 되어 2021년 11월 29일 Dorsey는 자진 사임했다.",
      },
      {
        demand: "이사 4명 교체 (Elliott 후보 지명)",
        result: "partial",
        note: "4명 전원 교체 대신, Elliott 측 Jesse Cohn·Marc Bain Nathanson 2명이 이사회에 합류하는 것으로 협상됐다.",
      },
      {
        demand: "독립 이사회 의장 선임",
        result: "won",
        note: "전 Google CFO Patrick Pichette가 독립 이사회 의장으로 선임됐다.",
      },
      {
        demand: "$1B 자사주 매입 프로그램",
        result: "won",
        note: "$1B 규모 자사주 매입 프로그램이 합의의 일환으로 발표됐다.",
      },
      {
        demand: "전업 CEO 집중 약속",
        result: "partial",
        note: "Dorsey는 트위터에 더 집중하겠다고 공약했으나 Square CEO직은 유지했다. 18개월 후 자진 사임으로 사실상 Elliott의 요구가 뒤늦게 충족됐다.",
      },
    ],
    stockImpact: {
      preCampaign: "~$34 (2020년 2월 캠페인 직전)",
      peakDuringCampaign: "~$41 (Silver Lake 합의 발표 직후)",
      postCampaign: "~$54 (2021년, Elon Musk 행보 관련 투기적 기대감)",
      note: "Elliott 공시 이후 주가는 단기 급등했다. Silver Lake의 우호 투자 발표가 주가 상승을 이끌었다. 이후 COVID-19 충격으로 일시 하락 후 2021년 회복세를 보였으며, Musk의 트위터 관련 언급이 주가에 추가 영향을 미쳤다.",
    },
  },

  dealStructure: {
    body: "Elliott는 트위터 주식을 공개 시장에서 매집해 약 4% 지분을 확보한 뒤 Schedule 13D(행동주의 의도 공시)를 제출하고 이사 4명을 공식 지명했다. 이 공격적 공시는 즉각 협상을 촉발했다. 트위터 경영진은 Silver Lake의 $1B+ 전환사채 투자를 병행 유치해 우호 지분 기반을 강화하고 협상력을 높였다. 양측은 10일 만에 위임장 대결(Proxy Fight) 없이 비공개 협상으로 합의에 도달했다.",
    preOwnership: {
      nodes: [
        { id: "elliott", label: "Elliott Management", sub: "Jesse Cohn 주도, ~4% 지분 매집", type: "acquirer" },
        { id: "twitter", label: "Twitter, Inc.", sub: "TWTR — NYSE 상장, 소셜 미디어 플랫폼", type: "target" },
        { id: "dorsey", label: "Jack Dorsey", sub: "Twitter·Square 겸직 CEO, 지분 ~2.3%", type: "entity" },
        { id: "vanguard", label: "Vanguard Group", sub: "최대 기관 주주 ~8.5%", type: "fund" },
      ],
      edges: [
        { from: "elliott", to: "twitter", label: "~4% 지분 취득 + 이사 4인 교체 요구" },
        { from: "dorsey", to: "twitter", label: "겸직 CEO (Twitter + Square)" },
        { from: "vanguard", to: "twitter", label: "최대 기관 주주 (~8.5%)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "twitter_post", label: "Twitter, Inc.", sub: "개편된 이사회 체제, $1B 자사주 매입", type: "target" },
        { id: "cohn", label: "Jesse Cohn", sub: "Elliott — 신규 이사 (합의 결과)", type: "entity" },
        { id: "pichette", label: "Patrick Pichette", sub: "독립 이사회 의장 (전 Google CFO)", type: "entity" },
        { id: "silverlake", label: "Silver Lake", sub: "우호 자본 — $1B+ 전환사채 투자", type: "fund" },
        { id: "dorsey_post", label: "Jack Dorsey", sub: "CEO 유지 → 2021.11.29 자진 사임", type: "entity" },
      ],
      edges: [
        { from: "cohn", to: "twitter_post", label: "이사회 합류 (합의 조건)" },
        { from: "pichette", to: "twitter_post", label: "독립 이사회 의장" },
        { from: "silverlake", to: "twitter_post", label: "$1B+ 전환사채 (우호 투자)" },
        { from: "dorsey_post", to: "twitter_post", label: "CEO 유지 → 18개월 후 자진 사임" },
      ],
    },
    keyTerms: [
      { label: "Elliott 지분 규모", value: "~4% (~$1B+)", accent: true },
      { label: "합의 소요 기간", value: "10일 (2020.02.28 → 2020.03.09)", accent: true },
      { label: "Elliott 이사 합류", value: "Jesse Cohn + Marc Bain Nathanson", accent: false },
      { label: "독립 이사회 의장", value: "Patrick Pichette (전 Google CFO)", accent: false },
      { label: "자사주 매입 프로그램", value: "$1B", accent: true },
      { label: "Silver Lake 투자 규모", value: "$1B+ (전환사채)", accent: false },
      { label: "Jack Dorsey CEO 유지 여부", value: "유지 (합의 당시) → 2021년 11월 자진 사임", accent: false },
    ],
  },

  advisors: {
    body: "양측은 글로벌 최상위 자문단을 구성했다. Elliott는 행동주의 캠페인 전문 법무·재무 자문단을, 트위터는 방어 전략 수립과 Silver Lake 투자 유치를 위한 투자은행을 동원했다. 합의가 단 10일 만에 이뤄진 것은 양측이 공개 위임장 대결의 리스크와 비용을 잘 알고 있었기 때문이다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Elliott Management (행동주의측)",
        initials: "ELL",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Wachtell, Lipton, Rosen & Katz (추정)",
            role: "법률 자문",
            roleType: "legal",
            note: "행동주의 캠페인 법적 구조화 및 이사 지명 절차",
          },
          {
            firm: "Goldman Sachs (추정)",
            role: "재무 자문",
            roleType: "financial",
            note: "트위터 밸류에이션 분석 및 협상 전략 지원",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Twitter, Inc. (방어측)",
        initials: "TWTR",
        bg: "bg-sky-500",
        advisors: [
          {
            firm: "JP Morgan",
            role: "재무 자문",
            roleType: "financial",
            note: "Silver Lake 투자 유치 주선 및 Elliott 대응 협상 지원",
          },
          {
            firm: "Wilson Sonsini Goodrich & Rosati",
            role: "법률 자문",
            roleType: "legal",
            note: "Silicon Valley 대표 테크 기업 전문 로펌 — 행동주의 방어 자문",
          },
          {
            firm: "Silver Lake",
            role: "전략적 우호 투자자",
            roleType: "financial",
            note: "$1B+ 전환사채 투자로 경영진 지지 — White Squire 역할",
          },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반이며 실제 계약 내용과 다를 수 있습니다.",
  },

  valuation: {
    body: "Elliott는 트위터가 제품 실행력 개선과 리더십 집중화를 통해 현재 주가 대비 훨씬 높은 밸류에이션을 달성할 수 있다고 주장했다. 2020년 2월 캠페인 공시 당시 트위터의 시가총액은 약 $28~30B 수준이었다. Silver Lake의 $1B+ 전환사채는 사실상 이 밸류에이션에 상당하는 프리미엄을 내재했다. Elliott가 조용히 매집한 ~4% 지분은 당시 시가총액 기준 약 $1.1~1.2B에 해당했다.",
    rows: [
      { item: "Elliott 지분 취득 규모", val: "~$1B+", note: "트위터 주식 ~4% 취득, 공개 시장 매집", accent: true },
      { item: "트위터 시가총액 (공시 당시)", val: "~$28~30B", note: "2020년 2월 기준, 주가 ~$34 수준", accent: false },
      { item: "Silver Lake 전환사채 투자", val: "$1B+", note: "우호 투자 — 경영진 지지 및 협상력 강화", accent: true },
      { item: "자사주 매입 프로그램", val: "$1B", note: "합의 조건으로 발표된 주주환원 프로그램", accent: false },
      { item: "트위터 EV/EBITDA (2020년, 추정)", val: "~30~35x", note: "행동주의 압박 이전 고밸류에이션 소셜미디어 섹터", accent: false },
      { item: "주가 반응 (합의 발표 후)", val: "+20%+ (단기)", note: "~$34 → ~$41, Silver Lake 합의 발표 직후 급등", accent: true },
    ],
    disclaimer: "밸류에이션 수치는 공개 보도 및 시장 데이터 기반 추정치입니다.",
  },

  rationale: {
    buyer: {
      title: "Elliott는 왜 트위터를 공격했나",
      initials: "ELL",
      bg: "bg-slate-700",
      points: [
        "겸직 CEO 구조 해소 — Jack Dorsey가 Twitter·Square 두 상장사를 동시에 경영하는 것은 어느 회사에도 최선을 다하지 못하는 구조이며, 지배구조 원칙에 반한다",
        "만성적 저성과에 대한 책임 추궁 — Facebook·Snap 대비 현저히 낮은 사용자 성장과 제품 혁신 속도는 리더십 집중력 부재에서 비롯됐다",
        "주가 잠재력 — 트위터의 '공론장' 플랫폼 포지셔닝은 독보적이며, 전업 CEO와 이사회 강화를 통해 주가 재평가가 가능하다고 판단",
        "자본 환원 부재 — 대형 테크 기업들이 적극적 자사주 매입·배당을 시행하는 동안 트위터는 주주환원이 미흡했다",
        "신속 합의 가능성 — 위임장 대결보다 합의를 통해 이사회 석을 확보하는 편이 더 효율적이라고 계산",
      ],
    },
    seller: {
      title: "Twitter/Dorsey는 왜 신속 합의를 택했나",
      initials: "TWTR",
      bg: "bg-sky-500",
      points: [
        "위임장 대결 회피 — 공개 위임장 싸움은 시간·비용·평판 리스크가 크며, 결과를 보장할 수 없다",
        "Silver Lake 우호 자본으로 협상력 확보 — $1B+ 우호 투자로 Elliott의 지분 영향력을 희석시키고 협상 우위를 확보",
        "구조적 변화 수용 — 독립 의장 선임·이사회 개편·자사주 매입은 어차피 필요한 지배구조 개선이었다",
        "Dorsey CEO직 유지 — 협상에서 가장 중요한 것은 창업자 CEO의 자리 보전이었으며, Elliott도 이를 수용했다",
        "시장 신뢰 회복 — 신속 합의와 우호 투자 발표가 주가에 긍정적으로 작용했고, 투자자 신뢰를 회복하는 데 도움이 됐다",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2023년 말 기준",
    body: "2020년 3월 합의 이후 트위터의 여정은 예상보다 훨씬 극적으로 전개됐다. Jack Dorsey는 2021년 11월 29일 자진 사임했고, CTO Parag Agrawal이 CEO를 승계했다. 이 사임은 Elliott가 심어놓은 '전업 CEO 필요성'이라는 논거가 결실을 맺은 것으로 해석됐다. 그러나 트위터의 운명을 결정적으로 바꾼 것은 2022년 Elon Musk의 등장이었다. Musk는 2022년 4월 9.2% 지분 취득(최대 주주)을 공시하며 이사회 합류 의사를 밝혔다가 번복했고, 이후 $54.20/주 $44B 인수 제안 → 계약 해제 시도 → 법원 강제 집행 끝에 2022년 10월 인수를 완료했다. Elliott는 이 과정에서 자신의 트위터 포지션을 수익을 내고 청산한 것으로 알려졌다.",
    overallVerdict: "단기: 반절 성공 (Dorsey 유지, 구조 변화 확보) | 장기: 완전 성공 (Dorsey 자진 사임 → Musk 인수 연쇄)",
    positives: [
      "10일 만에 신속 합의 — 공개 위임장 대결 없이 이사회 2석·독립 의장·$1B 자사주 매입을 확보한 효율적 행동주의",
      "Dorsey 자진 사임 (2021년 11월) — Elliott의 핵심 주장('전업 CEO 필요')이 18개월 후 자진 형태로 현실화됐다",
      "Elliott 포지션 수익 실현 — 보도에 따르면 Elliott는 트위터 지분을 수익 실현 후 청산한 것으로 알려졌다",
      "이사회 독립성 강화 — Patrick Pichette 독립 의장 체제로 트위터 지배구조의 구조적 개선이 이뤄졌다",
      "행동주의 → M&A 연쇄 효과 — Elliott 캠페인이 Dorsey 사임 → Musk 인수로 이어지는 복잡한 M&A 시퀀스의 도화선이 됐다",
    ],
    risks: [
      "Dorsey 유지로 단기 목표 미달 — 합의 당시 Elliott의 가장 명시적 요구였던 Dorsey 교체는 실현되지 않았다",
      "Agrawal 체제의 단명 — Parag Agrawal은 CEO로서 1년도 채 되지 않아 Musk 인수 완료와 함께 해고됐다",
      "Musk 인수 이후 트위터(X)의 불확실성 — 비공개화 이후 플랫폼의 광고 수익 급감·이용자 이탈 등이 보고됐다",
      "Silver Lake 우호 자본의 한계 — 우호 자본이 Elliott의 영향력을 희석시키는 데 일시적 효과에 그쳤으며, 장기 구조 변화를 막지는 못했다",
    ],
    editorNote: "Elliott-트위터 캠페인은 '신속 합의'와 '창업자 CEO 취약성'이라는 두 가지 행동주의 교훈을 동시에 제공한다. Dorsey는 합의 당시 자리를 지켰지만 Elliott가 가한 지배구조 압박은 잠복한 채 18개월을 버텼다. 더 흥미로운 것은 이 캠페인이 Elon Musk의 $44B 트위터 인수라는 전혀 다른 결말을 향한 긴 여정의 출발점이 됐다는 사실이다. 행동주의가 M&A 연쇄 반응의 촉매가 된 전형적 사례다.",
  },

  tombstone: {
    acquirerInitials: "ELL",
    acquirerBg: "bg-slate-700",
    targetInitials: "TWTR",
    targetBg: "bg-sky-500",
    acquirerName: "Elliott Management Corporation",
    targetName: "Twitter, Inc.",
    dealTitle: "Elliott × Twitter — Jack Dorsey CEO 사퇴의 씨앗을 뿌린 행동주의",
    dealSize: "~$1B+ (지분 4%)",
    dealSizeUSD: "~$1B+",
    evEbitda: "N/A (행동주의)",
    closeDate: "2020년 3월 (합의)",
  },

  sources: [
    { id: 1, text: "Elliott Management Schedule 13D 공시 (2020년 2월 28일), SEC EDGAR", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=TWTR&type=SC+13D&dateb=&owner=include&count=40" },
    { id: 2, text: "Twitter Inc. 8-K 공시 — Elliott 합의 및 Silver Lake 투자 발표 (2020년 3월 9일), SEC EDGAR" },
    { id: 3, text: "Wall Street Journal — Elliott Nominates Four Twitter Directors (2020년 3월)" },
    { id: 4, text: "New York Times — Twitter Reaches Deal With Elliott Management (2020년 3월 9일)" },
    { id: 5, text: "Bloomberg — Twitter Settlement: Jesse Cohn, Marc Bain Nathanson to Join Board (2020년 3월)" },
    { id: 6, text: "Twitter Inc. Annual Report 10-K FY2019·FY2020·FY2021" },
    { id: 7, text: "Jack Dorsey CEO 사임 발표 트윗 (2021년 11월 29일)" },
    { id: 8, text: "SEC — Elon Musk Schedule 13D 공시 (2022년 4월), Twitter 지분 9.2% 취득" },
    { id: 9, text: "Financial Times — How Elliott's Twitter bet played out (2022년)" },
  ],

  seo: {
    title: "Elliott × Twitter 행동주의 완전 분석 — Jack Dorsey CEO 사퇴의 씨앗",
    description: "Elliott Management의 2020년 트위터 행동주의 캠페인 완전 분석. Jesse Cohn의 Dorsey 축출 시도, Silver Lake 우호 자본, 10일 신속 합의, Elon Musk 인수까지 이어진 연쇄 효과를 한국어로 상세 해설.",
    keywords: [
      "Elliott Twitter 행동주의",
      "Jack Dorsey 사임 이유",
      "Elliott Jesse Cohn Twitter",
      "트위터 지배구조",
      "Silver Lake Twitter",
      "트위터 CEO 교체",
      "겸직 CEO 리스크",
      "행동주의 M&A 연쇄",
      "Elon Musk Twitter 인수 배경",
      "Twitter 이사회 개편 2020",
    ],
  },

  concepts: [
    {
      term: "겸직 CEO 리스크 (Dual CEO Risk)",
      description: "한 사람이 두 상장사의 CEO를 겸직할 때 집중도와 책임성이 분산되는 지배구조 문제. Jack Dorsey의 Twitter·Square 동시 경영이 대표적 사례로, Elliott의 핵심 공격 논거였다.",
    },
    {
      term: "우호 자본 유치 (Friendly Capital / White Squire)",
      description: "적대적 행동주의에 맞서 경영진이 우호적 투자자를 유치해 지분을 방어하는 전략. 트위터가 Silver Lake로부터 $1B+ 전환사채 투자를 유치한 것이 교과서적 White Squire 전략이다.",
    },
    {
      term: "신속 합의 (Rapid Settlement)",
      description: "공개 위임장 대결(Proxy Fight) 없이 단기간 비공개 협상으로 합의에 이르는 행동주의 결과 유형. Elliott-트위터 캠페인은 공시 후 10일 만에 합의에 도달한 초고속 사례다.",
    },
    {
      term: "창업자 CEO의 취약성 (Founder CEO Vulnerability)",
      description: "카리스마 있는 창업자 CEO라도 재임 기간이 길어지고 지배구조 문제가 쌓이면 행동주의의 타겟이 된다. Dorsey는 합의 당시 자리를 지켰지만 18개월 후 자진 사임했다.",
    },
    {
      term: "행동주의 → M&A 연쇄 (Activism as M&A Trigger)",
      description: "행동주의 캠페인이 경영진 교체·지배구조 불안정 → 전략적 매물화 → 인수 제안으로 이어지는 연쇄 효과. Elliott의 트위터 압박은 Dorsey 사임 → Musk 인수라는 전혀 예상치 못한 결말로 이어졌다.",
    },
  ],

  faq: [
    {
      q: "Elliott Management는 왜 트위터를 공격했나?",
      a: "Jack Dorsey가 Twitter와 Square(현 Block) 두 상장사의 CEO를 동시에 맡는 겸직 구조가 핵심 문제였습니다. Elliott는 집중력 분산이 트위터의 만성적 저성과(낮은 사용자 성장·제품 혁신 지체)의 근본 원인이라고 주장했습니다. 또한 Dorsey가 2019~2020년 초 아프리카에서 장기 체류하며 명상에 집중했다는 보도도 공격 소재가 됐습니다.",
    },
    {
      q: "Elliott vs 트위터 합의 내용은 무엇인가?",
      a: "2020년 3월 9일 발표된 합의 조건은 네 가지입니다. 첫째, Elliott의 Jesse Cohn과 Marc Bain Nathanson이 트위터 이사회에 합류했습니다. 둘째, 전 Google CFO Patrick Pichette가 독립 이사회 의장으로 선임됐습니다. 셋째, $1B 자사주 매입 프로그램이 발표됐습니다. 넷째, Silver Lake가 $1B+ 전환사채를 투자해 경영진을 지지했습니다. 대신 Elliott는 Jack Dorsey의 CEO 교체 요구를 철회했습니다.",
    },
    {
      q: "Jack Dorsey는 언제, 왜 CEO를 그만뒀나?",
      a: "2021년 11월 29일 자진 사임했습니다. 공식 이유는 '트위터가 창업자에게 의존하는 것은 회사에 도움이 되지 않는다'는 것이었습니다. CTO였던 Parag Agrawal이 즉시 후임 CEO로 선임됐습니다. Elliott가 2020년 캠페인에서 주장한 '전업 CEO 필요성'이 18개월 만에 자진 사임 형태로 현실화된 것으로 많은 분석가들이 해석했습니다.",
    },
    {
      q: "Elliott의 트위터 투자는 수익을 냈나?",
      a: "공개된 정보에 따르면 Elliott는 트위터 지분을 수익을 내고 매각한 것으로 알려졌습니다. 진입 가격은 약 $34(2020년 2월) 수준이었으며, 이후 트위터 주가는 상승하고 결국 Elon Musk가 $54.20/주로 전량 매수했습니다. Elliott가 Musk 인수 완료 전에 얼마에 매각했는지 정확한 금액은 공개되지 않았습니다.",
    },
    {
      q: "이 사건이 Elon Musk의 트위터 인수와 어떤 관계가 있나?",
      a: "직접적 인과관계는 없지만, Elliott의 캠페인이 트위터의 지배구조 불안정을 드러냈고, 이후 Dorsey 사임 → Agrawal 체제 출범 → 플랫폼 전략 불확실성의 흐름이 외부 인수자에게 트위터를 매력적인 타깃으로 보이게 했을 수 있습니다. Musk는 2022년 4월 지분 9.2%를 취득하며 등장했고, 같은 해 10월 $44B에 인수를 완료했습니다. Elliott-트위터 사건은 이 연쇄 반응의 도화선 역할을 했다는 해석이 있습니다.",
    },
  ],
};

export default deal;
