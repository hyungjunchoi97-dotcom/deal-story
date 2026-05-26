/**
 * 칼 아이칸 × 애플 행동주의 캠페인
 * 트위터 행동주의 + 자사주매입 압박 — 트위터 한 줄로 시작된 $36억의 베팅
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "icahn-apple",
  title: "칼 아이칸은 어떻게 트위터 한 줄로 애플의 자본 배분을 바꿨나 — $1,500억 buyback 요구의 전말",
  subtitle: "트위터 행동주의 원조 · $36억 지분 1% · 팀 쿡과의 서한 전쟁 · 역사상 최대 자사주매입의 씨앗",
  category: "activism",
  industry: "기술·소비자전자 / Technology",
  country: "미국",
  announcedAt: "2013-08-13",
  closedAt: "2016-04-01",
  announcedDisplay: "2013년 8월",
  closedDisplay: "2016년 4월",
  readingMinutes: 10,
  tags: ["칼 아이칸", "애플", "자사주매입", "행동주의", "팀 쿡", "주주환원", "트위터 행동주의"],
  excerpt:
    "2013년 8월 13일, 칼 아이칸이 트위터에 '애플에 대규모 포지션을 취했다'는 한 줄을 올렸다. 주가는 즉각 +5% 급등했다. 이후 약 $36억(지분 1%)을 매집한 아이칸은 팀 쿡에게 3년간 $1,500억 자사주매입 프로그램을 공개 요구했다. 아이칸은 원안을 관철하지 못했지만, 애플의 자본 배분 철학을 근본적으로 바꾸는 데 성공했다. 이 캠페인은 트위터가 행동주의의 무기가 된 첫 상징적 사례다.",

  acquirer: { initials: "ICA", bg: "bg-orange-600", label: "Carl Icahn / Icahn Capital" },
  target:   { initials: "AAPL", bg: "bg-gray-800",  label: "Apple Inc." },

  background: [
    "2013년 여름, 애플은 $1,500억이 넘는 막대한 현금을 쌓아두고 있었다. Tim Cook 체제의 애플은 주주환원보다는 전략적 유연성 확보를 우선시했으며, 자사주매입 프로그램은 존재했으나 규모가 주주들의 기대에 미치지 못했다. 2012년 주가가 정점(약 $705)을 찍은 후 약 45% 하락하며 투자자들의 불만이 고조되고 있었다.",
    "2013년 8월 13일 오후, 전설적인 행동주의 투자자 칼 아이칸이 트위터에 단 한 줄을 올렸다: 'We currently have a large position in Apple. We believe the stock to be extremely undervalued.' 이 트윗 하나로 애플 주가는 장중 +5% 급등했다. 소셜 미디어가 금융 행동주의의 도구로 사용된 역사적 첫 순간이었다.",
    "아이칸은 이후 포지션을 $36억 수준(애플 전체 지분 약 1%)까지 늘렸다. 그는 팀 쿡에게 복수의 공개 서한을 보내며 향후 3년간 $1,500억 규모의 자사주매입 프로그램 실행을 공개적으로 요구했다. 아이칸의 논리는 단순했다: 애플이 쌓아둔 현금은 주주에게 돌아가야 하며, 자사주매입이 EPS를 높이고 주가를 상승시킬 것이라는 것이었다.",
    "팀 쿡은 아이칸의 일부 요구를 수용했다. 애플은 기존 $600억 규모의 자사주매입 프로그램을 $900억으로, 이후 수차례 추가 확대했다. 그러나 $1,500억이라는 아이칸의 원안은 실현되지 않았다. 2016년 4월, 아이칸은 중국 시장의 위험을 이유로 애플 지분 전체를 매각했다. 상당한 수익을 실현했으나, 이후 애플 주가는 수배 상승하며 아이칸의 매도 타이밍은 두고두고 비판받았다.",
  ],

  dealSummary: {
    dealValueDisplay: "지분 약 $36억 (애플 전체 약 1%)",
    acquirerName: "Carl Icahn / Icahn Capital LP",
    targetName: "Apple Inc.",
    announcedDisplay: "2013년 8월",
    closedDisplay: "2016년 4월 (아이칸 지분 전량 매도)",
    country: "미국",
  },

  executiveSummary: [
    "2013년 8월 트위터 한 줄 공개 선언으로 캠페인 시작 → 애플 주가 즉각 +5% 급등. 소셜 미디어 행동주의의 역사적 원조",
    "아이칸 최종 지분: 약 $36억(~1%). 요구: 3년간 $1,500억 자사주매입 프로그램",
    "팀 쿡 대응: 기존 $600억 → $900억 이후 단계적 확대. 아이칸의 압박이 Apple 자본 배분 전략 변화의 결정적 촉매",
    "결과: $1,500억 원안 미달이지만 애플을 역사상 최대 규모 자사주매입 프로그램 운영 기업으로 만듦 — '부분 승리'",
    "2016년 아이칸 전량 매도 (중국 리스크 이유) — 이후 애플 주가 수배 상승, 아이칸 매도 타이밍 비판받음",
    "유산: 아이칸의 압박이 없었다면 애플의 수조 달러 규모 주주환원 프로그램은 훨씬 늦게 시작됐을 것이라는 평가",
  ],

  industryOverview: {
    body: "2013년 애플은 역사상 최고의 현금 보유 기업 중 하나였다. $1,500억이 넘는 현금과 유가증권을 보유하며 전략적 M&A, R&D, 차세대 제품 개발을 위한 충분한 여유를 갖고 있었다. 그러나 기관투자자들은 '과도한 현금 축적이 자본 배분 비효율성을 의미한다'고 비판했다. 특히 2013년 이후 미국 기업들의 자사주매입 붐이 시작되면서, 현금을 쌓아두는 대신 주주에게 환원하라는 압박이 전반적으로 높아지고 있었다.",
    metrics: [
      { label: "Apple 현금·유가증권 보유 (2013년)", value: "$1,500억+", sub: "역사상 최대 현금 보유 기업 중 하나" },
      { label: "Apple 시가총액 (2013년 8월)", value: "약 $4,500억", sub: "아이칸 캠페인 당시" },
      { label: "아이칸 보유 지분 (피크)", value: "약 $36억 (~1%)", sub: "2014년 기준 최대 포지션" },
      { label: "Apple 자사주매입 규모 (2013~2016)", value: "$900억+", sub: "아이칸 압박 이후 대폭 확대" },
    ],
    subBody: "아이칸 캠페인은 단순한 개인 행동주의를 넘어 미국 기업들의 자본 배분 문화를 바꾸는 논쟁의 중심에 있었다. '현금은 주주의 것'이라는 논리와 '전략적 M&A를 위해 현금이 필요하다'는 논리가 충돌한 상징적 사례다.",
    players: [
      { name: "Apple Inc.", role: "대상 기업, 막대한 현금 보유, 팀 쿡 CEO" },
      { name: "Carl Icahn / Icahn Capital", role: "행동주의 투자자, $36억 지분, 자사주매입 요구" },
      { name: "Tim Cook", role: "Apple CEO, 아이칸 일부 요구 수용 협상" },
      { name: "Vanguard·BlackRock 등", value: "대형 기관투자자, 중립적 입장에서 아이칸 논리 일부 지지" } as any,
      { name: "David Einhorn (Greenlight Capital)", role: "아이칸 이전 Apple 주주환원 요구한 행동주의 선례" },
    ],
  },

  companyOverview: {
    targetName: "Apple Inc.",
    body: "2013년 애플은 iPhone·iPad·Mac·iTunes 생태계를 중심으로 세계 최고 수익성을 갖춘 소비자 전자 기업이었다. 2011년 스티브 잡스 사망 후 팀 쿡이 CEO를 맡아 운영 효율을 강화하고 공급망을 고도화했으나, 혁신 동력에 대한 의구심도 존재했다. 2013년 기준 현금·유가증권 보유액은 $1,500억을 넘었으나, 애플은 이 현금을 전략적 M&A나 대규모 주주환원에 적극 활용하지 않았다. 이 '과도한 현금'이 아이칸 캠페인의 핵심 공격 포인트였다.",
    metrics: [
      { label: "시가총액 (2013년 8월)", value: "약 $4,500억", sub: "Nasdaq: AAPL" },
      { label: "현금·유가증권 보유", value: "$1,500억+", sub: "2013년 기준" },
      { label: "연간 매출 (FY2013)", value: "약 $1,706억", sub: "iPhone이 전체 매출의 절반 이상" },
      { label: "순이익 (FY2013)", value: "약 $370억", sub: "세계 최고 수준의 수익성" },
      { label: "직원 수", value: "약 80,000명", sub: "2013년 기준" },
    ],
    financials: [
      { year: "2013", revenue: 1706, cogs: 1063, grossProfit: 643, sga: 104, operatingIncome: 489, ebitda: 557 },
      { year: "2014", revenue: 1828, cogs: 1126, grossProfit: 702, sga: 115, operatingIncome: 527, ebitda: 610 },
    ],
    financialsNote: "단위: 억 달러 (USD 억) | Apple 연결 기준 (9월 결산) | 출처: Apple 연간 보고서 기반",
    financialsCurrency: "USD",
    financialsUnit: "억",
  },

  governanceOverview: {
    body: "애플 이사회는 행동주의 관점에서 구조적으로 강한 독립성을 갖추고 있었다. 아이칸의 목표는 이사 교체가 아니라 자본 배분 전략 변화였다. 그러나 $1,500억이라는 막대한 현금이 주주에게 환원되지 않는 구조는 주주환원 관점에서 명확한 문제로 지목됐다. 아이칸은 공개 서한과 트위터를 통해 팀 쿡을 직접 압박하며 이사회의 자발적 변화를 이끌어내는 전략을 택했다.",
    shareholders: [
      {
        id: "icahn",
        label: "Carl Icahn / Icahn Capital",
        sub: "행동주의 투자자, 자사주매입 요구",
        stake: "~1%",
        stakePct: 1,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "vanguard",
        label: "Vanguard Group",
        sub: "세계 2위 자산운용사",
        stake: "5.5%",
        stakePct: 5.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "세계 최대 자산운용사",
        stake: "4.0%",
        stakePct: 4.0,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "other-institutional",
        label: "기타 기관투자자",
        sub: "연기금·펀드·ETF 등",
        stake: "~50%+",
        stakePct: 50,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "management",
        label: "팀 쿡 등 내부자",
        sub: "Apple CEO 및 임원진",
        stake: "~1%",
        stakePct: 1,
        type: "management",
        alignment: "pro",
      },
    ],
    board: {
      total: 8,
      independent: 7,
      affiliated: 1,
      note: "Apple 이사회는 강력한 독립 구조를 갖추고 있었다. 아이칸은 이사 선임이 아닌 자본 배분 전략 변화를 요구한 캠페인으로, 이사회 구성 문제는 핵심 쟁점이 아니었다.",
    },
    issues: [
      {
        title: "과도한 현금 축적",
        description: "$1,500억이 넘는 현금을 보유하면서도 주주환원이 미흡했다. 이 현금이 주주에게 환원되지 않고 잠겨있는 것은 자본 배분 비효율의 전형적 사례로 지목됐다.",
        severity: "high",
      },
      {
        title: "자본 배분 전략 불투명",
        description: "애플은 자사주매입 및 배당 확대 계획에 대한 명확한 중장기 로드맵을 제시하지 않았다. 투자자들은 막대한 현금이 어디에 쓰일지 불확실성을 느꼈다.",
        severity: "medium",
      },
    ],
    demands: [
      {
        demand: "3년간 $1,500억 규모 자사주매입 프로그램 실행",
        result: "partial",
        note: "Apple이 단계적으로 자사주매입을 대폭 확대했으나 아이칸 원안($1,500억) 미달. 실제로는 $500억+ 규모의 buyback이 이루어졌으며 이후 매년 규모가 확대됐다.",
      },
      {
        demand: "주주환원 확대 공약",
        result: "won",
        note: "Apple은 아이칸 캠페인 기간 중 자사주매입 프로그램을 수차례 확대 발표하며 주주환원 강화 기조를 명확히 함.",
      },
    ],
    stockImpact: {
      preCampaign: "$490 (2013년 8월)",
      peakDuringCampaign: "$700 (2015년, 7:1 액면분할 전 기준)",
      postCampaign: "$105 (액면분할 후, 2016년 아이칸 매도 시점 — 분할 전 환산 ~$735)",
      note: "아이칸 참여 기간(2013년 8월~2016년 4월) 동안 Apple 주가는 50%+ 상승했다. 아이칸 매도 이후 Apple 주가는 $200+ (분할 후)까지 수배 상승해 아이칸의 매도 타이밍이 비판받았다.",
    },
  },

  dealStructure: {
    body: "아이칸의 캠페인은 지분 매집 후 공개 서한과 SNS를 통해 경영진을 직접 압박하는 방식이었다. 이사 교체나 주총 결의 요구 없이 팀 쿡과의 '공개 대화' 형식으로 자본 배분 전략 변화를 이끌어낸 이례적인 행동주의 형태였다.",
    preOwnership: {
      nodes: [
        { id: "icahn", label: "칼 아이칸", sub: "행동주의 투자자, 트위터 공개 선언", type: "acquirer" },
        { id: "apple", label: "Apple Inc.", sub: "Nasdaq: AAPL, 시총 ~$4,500억", type: "target" },
        { id: "cook", label: "팀 쿡 (CEO)", sub: "경영진 측, 일부 요구 수용 협상", type: "entity" },
        { id: "institutions", label: "기관투자자", sub: "Vanguard·BlackRock 등, 중립", type: "fund" },
      ],
      edges: [
        { from: "icahn", to: "apple", label: "~1% 지분 매집 + 자사주매입 요구" },
        { from: "icahn", to: "cook", label: "공개 서한 + 직접 면담" },
        { from: "institutions", to: "apple", label: "~60%+ 보유, 중립적 압력" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "apple_post", label: "Apple Inc.", sub: "자사주매입 프로그램 대폭 확대", type: "target" },
        { id: "icahn_exit", label: "칼 아이칸", sub: "2016년 4월 전량 매도 (중국 리스크)", type: "acquirer" },
      ],
      edges: [
        { from: "icahn_exit", to: "apple_post", label: "지분 전량 매도, 상당 수익 실현" },
      ],
    },
    keyTerms: [
      { label: "캠페인 시작", value: "2013년 8월 13일 트위터 공개 선언", accent: false },
      { label: "아이칸 최대 지분", value: "약 $36억 (~1%)", accent: true },
      { label: "자사주매입 요구액", value: "$1,500억 (3년)", accent: true },
      { label: "Apple 실제 확대 규모", value: "$600억 → $900억 → 이후 지속 확대" },
      { label: "아이칸 매도 시점", value: "2016년 4월 (중국 리스크 이유)", accent: false },
      { label: "캠페인 성격", value: "공개 서한 + 트위터 압박 (이사 교체 없음)" },
    ],
  },

  advisors: {
    body: "이 캠페인은 전통적인 행동주의 자문 구조와 달리, 아이칸 개인의 미디어 전략이 핵심이었다. 법적 분쟁 없이 공개 서한과 트위터를 통한 여론 압박으로 애플을 움직인 이례적 사례다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "칼 아이칸 (행동주의 측)",
        initials: "ICA",
        bg: "bg-orange-600",
        advisors: [
          { firm: "Icahn Capital 내부팀", role: "투자 전략 총괄", roleType: "other", note: "아이칸 본인이 캠페인을 주도. 트위터·공개 서한을 직접 활용. 별도 IB 자문 없이 자체 진행." },
          { firm: "Cadwalader, Wickersham & Taft (추정)", role: "법률 자문", roleType: "legal", note: "행동주의 관련 법무 지원. 실제 계약은 비공개." },
        ],
      },
      {
        side: "target",
        sideLabel: "Apple Inc. (경영진 측)",
        initials: "AAPL",
        bg: "bg-gray-800",
        advisors: [
          { firm: "Goldman Sachs·Lazard", role: "재무 자문", roleType: "financial", note: "자사주매입 프로그램 설계 및 자본 배분 전략 자문." },
          { firm: "Wachtell, Lipton, Rosen & Katz", role: "법률 자문", roleType: "legal", note: "행동주의 방어 법무 지원 및 주주 관계 대응." },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반이며, 실제 계약 세부 사항은 비공개입니다.",
  },

  valuation: {
    body: "아이칸의 논리는 애플의 현금 보유액($1,500억+)이 주가에 충분히 반영되지 않았다는 것이었다. 현금을 자사주매입으로 환원하면 EPS가 높아지고 주가도 상승해 주주 모두가 이익을 본다는 재무적 논거가 핵심이었다.",
    rows: [
      { item: "Apple 시가총액 (2013년 8월)", val: "약 $4,500억", note: "아이칸 캠페인 시작 시점" },
      { item: "Apple 현금·유가증권 보유 (2013년)", val: "$1,500억+", note: "전체 시총의 약 33%를 현금으로 보유", accent: true },
      { item: "아이칸 보유 지분", val: "약 $36억 (~1%)", note: "최대 포지션 기준", accent: true },
      { item: "아이칸 요구 buyback 규모", val: "$1,500억 (3년)", note: "전체 현금의 100%+에 해당하는 요구", accent: true },
      { item: "Apple 실제 buyback 확대 (2013~2016)", val: "$600억 → $900억 →지속 확대", note: "아이칸 압박의 직접 결과" },
      { item: "아이칸 캠페인 기간 주가 수익률", val: "+50%+ (2013년 8월~2016년 4월)", note: "액면분할(7:1) 반영 기준" },
    ],
    disclaimer: "수치는 공개 보도 및 Apple 공시 기반. 자사주매입 규모는 연도별 누적 기준.",
  },

  rationale: {
    buyer: {
      title: "아이칸이 Apple에게 요구한 것",
      initials: "ICA",
      bg: "bg-orange-600",
      points: [
        "주주에게 현금 환원 — $1,500억 현금을 자사주매입으로 환원하면 유통 주식 수가 줄어 EPS가 높아지고 주가가 상승한다. 이것이 주주 모두에게 이익이라는 논리.",
        "자본 배분 비효율성 해소 — 막대한 현금을 '쌓아두는' 것은 자본 배분의 비효율. 현금 수익률(~0%)보다 Apple 주식 수익률이 훨씬 높으므로 buyback이 최적의 자본 활용.",
        "EPS 및 주가 상승 유도 — 자사주매입으로 주당순이익(EPS)이 높아지면 P/E 기반 주가 타겟도 자동 상승. 주주환원이 곧 주가 상승 촉매라는 논리.",
        "Apple 밸류에이션 저평가 해소 — 당시 Apple의 P/E가 역사적으로 낮은 수준이었으며, 이는 거대한 현금이 제대로 활용되지 못한다는 투자자 인식을 반영한다고 주장.",
      ],
    },
    seller: {
      title: "Apple 경영진의 반론",
      initials: "AAPL",
      bg: "bg-gray-800",
      points: [
        "전략적 M&A를 위한 현금 보유 필요성 — Apple은 미래 대형 인수합병·신사업 진출을 위한 충분한 자본이 필요하며, 무분별한 buyback은 전략적 유연성을 훼손한다는 주장.",
        "자사주매입은 하되 단계적으로 — Apple은 buyback 자체를 거부한 것이 아니라 아이칸의 요구($1,500억)가 과도하다는 입장. 이미 $600억 프로그램을 운영 중이었다.",
        "경영진의 재량권 존중 — 자본 배분은 이사회와 경영진의 전략적 판단 영역. 행동주의 투자자의 단기적 압박에 따라 장기 전략이 좌우되면 안 된다는 원칙.",
        "중국 성장 기회 대비 — 당시 Apple은 중국 시장에서 빠르게 성장 중이었으며, 이 기회를 살리기 위한 자본 여유가 필요했다.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "아이칸이 2016년 4월 중국 리스크를 이유로 Apple 지분 전량을 매도한 이후, Apple은 역사상 최대 규모의 자사주매입 프로그램을 운영하는 기업이 됐다. 2018년부터 2024년까지 Apple의 연간 자사주매입 규모는 $500억~$900억에 달했으며, 누적 환원 규모는 수조 달러에 이른다. 아이칸의 압박이 Apple의 자본 배분 철학을 근본적으로 바꿨다는 평가는 광범위하게 받아들여진다. 그러나 아이칸 매도 이후 Apple 주가가 수배 상승한 것은 행동주의 투자자의 투자 타이밍 한계를 보여주는 대표적 사례로 남았다.",
    overallVerdict: "부분 승리 — 아이칸은 $1,500억을 얻지 못했지만 Apple의 자본 배분 역사를 바꿨다",
    positives: [
      "Apple의 자사주매입 프로그램을 $600억 → $900억 → 이후 매년 수백억 달러 규모로 지속 확대시킨 직접적 촉매",
      "트위터 행동주의의 원조 — 소셜 미디어가 금융 시장 압박 도구로 활용될 수 있음을 최초로 증명",
      "Apple이 역사상 최대 자사주매입 기업으로 변모하는 데 결정적으로 기여. 행동주의가 대형 빅테크 기업의 자본 배분을 바꿀 수 있음을 증명",
      "아이칸 캠페인 기간(2013~2016) Apple 주가 50%+ 상승 — 투자자로서도 상당한 수익 실현",
    ],
    risks: [
      "아이칸 매도(2016년 4월) 이후 Apple 주가 수배 상승 — 행동주의 투자자의 조기 이탈이 장기 수익을 크게 훼손",
      "중국 리스크를 이유로 매도했으나 Apple의 중국 사업은 이후 크게 성장 — 아이칸의 중국 리스크 판단이 틀렸다는 사후 평가",
      "$1,500억 원안 관철 실패 — Apple이 아이칸의 구체적 수치 요구를 수용하지 않고 자체 속도로 buyback 확대",
      "이사회 직접 변화 없이 경영진 자발적 변화에 의존 — 제도적 강제력 없는 행동주의의 한계",
    ],
    editorNote: "칼 아이칸 vs 애플은 두 가지 의미에서 역사적이다. 첫째, 트위터 한 줄이 $4,500억 기업의 주가를 즉각 움직이고 결국 자본 배분 전략을 바꾼 소셜 미디어 행동주의의 원조 사례. 둘째, 행동주의 투자자가 옳은 방향을 가리키면서도 잘못된 시점에 이탈해 막대한 기회 이익을 놓친 교훈적 사례. 아이칸의 압박 없이 Apple의 수조 달러 자사주매입 프로그램이 탄생했을까? 아마 훨씬 늦었을 것이다. 그러나 아이칸이 2016년에 매도하지 않고 10년을 더 보유했다면? 그것이 이 이야기의 가장 쓴맛이다.",
  },

  tombstone: {
    acquirerInitials: "ICA",
    acquirerBg: "bg-orange-600",
    targetInitials: "AAPL",
    targetBg: "bg-gray-800",
    acquirerName: "Carl Icahn / Icahn Capital LP",
    targetName: "Apple Inc.",
    dealTitle: "트위터 행동주의 + 자사주매입 압박 / Twitter Activism + Buyback Pressure",
    dealSize: "지분 약 $36억 (~1%)",
    dealSizeUSD: "USD ~3.6B stake (~1% of Apple)",
    evEbitda: "N/A",
    closeDate: "Apr 2016",
  },

  sources: [
    { id: 1, text: "칼 아이칸 트위터 공개 선언 (@Carl_C_Icahn, 2013.08.13)" },
    { id: 2, text: "아이칸 → 팀 쿡 공개 서한 (2013.10, 2014.01, 2014.02)" },
    { id: 3, text: "Apple Inc. 자사주매입 프로그램 확대 공시 (2013~2016), SEC Form 8-K" },
    { id: 4, text: "Bloomberg — Carl Icahn Sells Apple Stake on China Concerns (April 2016)" },
    { id: 5, text: "Wall Street Journal — Icahn's Apple Campaign: A Detailed Account (2013~2016)" },
    { id: 6, text: "Apple 연간 보고서 (FY2013, FY2014), Nasdaq: AAPL 공시 기반" },
  ],

  seo: {
    title: "칼 아이칸 vs 애플 완전 분석 — 트위터 행동주의로 $1,500억 buyback을 요구하다",
    description: "칼 아이칸이 트위터 한 줄로 Apple 주가를 5% 올리고 $1,500억 자사주매입을 요구한 2013~2016년 행동주의 캠페인 완전 분석. 팀 쿡 대응, 부분 승리, 아이칸 조기 매도의 교훈까지.",
    keywords: [
      "칼 아이칸 애플",
      "Apple 자사주매입",
      "트위터 행동주의",
      "주주환원",
      "Carl Icahn Apple",
      "AAPL buyback",
      "행동주의 투자",
      "자본 배분",
    ],
  },

  concepts: [
    { term: "자사주매입 (Share Buyback)", description: "기업이 자기 자금으로 시장에서 자사 주식을 매입해 소각하는 행위. 유통 주식 수가 줄어 주당순이익(EPS)이 높아지고 주가를 지지하는 효과가 있다. 아이칸이 Apple에 요구한 핵심 주주환원 방식." },
    { term: "주주환원 (Capital Return)", description: "기업이 이익 또는 보유 현금을 배당·자사주매입 형태로 주주에게 되돌려주는 행위. 아이칸은 Apple의 $1,500억 현금이 주주환원으로 이어져야 한다고 주장했다." },
    { term: "트위터 행동주의", description: "소셜 미디어(트위터 등)를 통해 기업에 대한 행동주의적 입장을 공개 선언하고 여론 압박을 형성하는 투자 전략. 아이칸의 2013년 Apple 트윗이 이 용어를 탄생시킨 원조 사례." },
  ],

  faq: [
    {
      q: "아이칸은 왜 트위터로 포지션을 공개 발표했나?",
      a: "전통적인 행동주의 캠페인은 법적 공시(13D 등) 이후 조용히 협상하거나 주주 서한을 보내는 방식이었습니다. 아이칸은 트위터를 통해 즉각적인 시장 반응을 이끌어내고 Apple 경영진에게 즉각적인 압박을 가하는 동시에, 일반 투자자 여론을 자신에게 유리하게 형성하는 '공개 압박 전술'을 구사했습니다. 트윗 하나로 Apple 주가가 +5% 급등한 것은 소셜 미디어가 금융 시장 압박 도구로 얼마나 강력한지를 보여줬습니다.",
    },
    {
      q: "아이칸은 결국 $1,500억 buyback을 얻었나?",
      a: "원안은 얻지 못했습니다. Apple은 $1,500억이라는 단일 프로그램 대신 단계적으로 자사주매입 규모를 확대하는 방식으로 대응했습니다. $600억 프로그램을 $900억으로 늘리고, 이후 매년 수백억 달러씩 buyback을 지속했습니다. 아이칸의 구체적 숫자 요구는 관철되지 않았지만, 방향은 완전히 바뀌었습니다. Apple이 역사상 최대 규모의 자사주매입 기업이 된 것에 아이칸의 압박이 결정적 역할을 했다는 평가가 지배적입니다.",
    },
    {
      q: "아이칸이 2016년에 매도한 것은 실수였나?",
      a: "결과론적으로는 그렇습니다. 아이칸은 중국 리스크를 이유로 2016년 4월 Apple 지분 전량을 매도했는데, 이후 Apple 주가는 수배 상승했습니다. 2016년 매도 당시 Apple 주가는 약 $105(7:1 분할 후 기준)였으나, 2024년 기준으로는 $170~$200 수준입니다. 매도하지 않았다면 수익이 수배 더 컸을 것입니다. 이것은 행동주의 투자자가 '방향'은 맞추지만 '타이밍'에서 실수할 수 있다는 교훈적 사례입니다.",
    },
    {
      q: "이 캠페인이 Apple의 자본 배분에 미친 장기 영향은?",
      a: "근본적인 변화를 일으켰습니다. 아이칸 캠페인 이전 Apple의 자사주매입 프로그램은 $600억 규모였습니다. 이후 매년 $500억~$900억 규모의 buyback을 지속하며 Apple은 세계 최대 자사주매입 기업이 됐습니다. 2013~2024년 사이 Apple이 자사주매입과 배당으로 주주에게 환원한 금액은 수조 달러에 달합니다. 아이칸의 캠페인이 없었다면 이 자본 배분 문화가 이렇게 빨리 자리 잡았을지는 의문입니다.",
    },
  ],
};

export default deal;
