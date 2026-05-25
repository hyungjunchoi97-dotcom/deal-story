/**
 * Meta × WhatsApp 인수
 * 역대 최대 스타트업 M&A — $190억, 2014년 10월 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "meta-whatsapp",
  title: "Facebook은 왜 $190억에 WhatsApp을 샀나 — 직원 55명, SMS를 대체한 메시징 제국 인수 해부",
  subtitle: "신흥 시장 5억 사용자 확보 · Jan Koum의 조건 · EU 데이터 규제 함정과 창업자 사임",
  category: "ma",
  industry: "모바일 메시징 / 커뮤니케이션",
  country: "미국",
  announcedAt: "2014-02-19",
  closedAt: "2014-10-06",
  announcedDisplay: "2014년 2월",
  closedDisplay: "2014년 10월",
  readingMinutes: 11,
  tags: ["Meta", "Facebook", "WhatsApp", "모바일 메시징", "플랫폼 M&A", "신흥 시장", "EU 규제", "반독점"],
  excerpt:
    "Facebook이 직원 55명의 WhatsApp을 $19B(약 20조원)에 인수한 2014년 역대 최대 스타트업 M&A. 글로벌 메시징 시장 5억 사용자 기반과 신흥 시장 지배력을 확보했으나, EU 데이터 결합 금지 약속 위반으로 €110M 벌금, 2018년 Jan Koum CEO 사임까지 이어진 복잡한 딜.",

  acquirer: { initials: "META", bg: "bg-blue-600", label: "Facebook (현 Meta)" },
  target: { initials: "WA", bg: "bg-emerald-500", label: "WhatsApp" },

  background: [
    "2014년 초 WhatsApp은 전 세계 모바일 메시징 시장을 사실상 장악하고 있었다. 한국(KakaoTalk), 일본(LINE), 중국(WeChat)을 제외한 거의 모든 지역에서 5억 명의 월간 활성 이용자(MAU)를 보유했고, 일 메시지 처리량은 약 500억 건에 달했다. 기존 SMS를 빠르게 대체하며 신흥 시장에서는 특히 스마트폰 보급의 첫 번째 킬러 앱 지위를 차지하고 있었다. Facebook Messenger는 WhatsApp의 글로벌 성장 앞에서 명백한 위협을 느끼고 있었다.",
    "Mark Zuckerberg는 WhatsApp CEO Jan Koum과 수 주에 걸쳐 극비 협상을 진행했다. Koum은 Ukraine 이민자 출신으로 광고 없는 순수한 커뮤니케이션 서비스를 철학으로 삼고 있었다. 'No ads. No games. No gimmicks'는 WhatsApp의 공식 원칙이었다. Koum은 Facebook의 데이터 수집·광고 중심 비즈니스 모델에 강한 거부감을 가지고 있었으나, WhatsApp의 독립 운영과 광고 없는 서비스 철학 유지를 조건으로 협상 테이블에 앉았다.",
    "2014년 2월 19일 발표된 딜 규모는 $19B — 현금 $4B, Facebook 주식 $12B, WhatsApp 직원 대상 restricted stock $3B의 구성이었다. 당시 VC 투자를 받은 스타트업 중 역대 최대 인수가였다. 직원 55명, 매출 $20M 미만의 메시징 앱에 사용자당 약 $38의 가치를 부여한 이 딜은 전 세계 기술 업계에 큰 충격을 줬다. Brian Acton(공동창업자)도 Facebook 지분을 수억 달러어치 확보했다.",
    "규제 승인 과정은 순탄하지 않았다. EU 집행위원회와 FTC 심사에서 Facebook은 'WhatsApp과 Facebook의 사용자 데이터를 자동으로 결합하지 않겠다'고 명시적으로 약속했다. 그러나 2016년 WhatsApp의 개인정보처리방침 변경으로 Facebook과의 데이터 연동이 도입되면서 이 약속은 사실상 파기됐다. EU는 2017년 Facebook에 €110M의 벌금을 부과했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$19B (약 20조원)",
    acquirerName: "Facebook, Inc. (현 Meta Platforms, Inc.)",
    targetName: "WhatsApp Inc.",
    announcedDisplay: "2014년 2월",
    closedDisplay: "2014년 10월",
    country: "미국",
  },

  executiveSummary: [
    "$19B — 직원 55명, 매출 $20M 미만의 메시징 앱. 사용자당 $38의 가치, 2014년 역대 최대 스타트업 M&A",
    "핵심 논리: SMS를 대체하는 글로벌 메시징 플랫폼 확보, 신흥 시장 5억 사용자 기반 내재화",
    "Jan Koum의 조건: 광고 없는 서비스 철학 유지, 독립 운영, $1/년 구독 모델 존중",
    "EU 규제 함정: 승인 시 '데이터 결합 없음' 약속 → 2016년 정책 변경으로 €110M 벌금",
    "2018년 Jan Koum CEO 사임 — Facebook의 광고 도입 압박에 반발, 창업자 철학 충돌",
    "2024년 WhatsApp Business 광고 매출 $10B+ 추정 — 결국 광고가 들어옴",
  ],

  industryOverview: {
    body: "2014년 초 글로벌 모바일 메시징 시장은 전통적인 SMS를 빠르게 잠식하며 폭발적으로 성장하고 있었다. 스마트폰 보급이 신흥 시장까지 확산되면서 데이터 기반 메시징이 SMS의 대안을 넘어 표준으로 자리 잡기 시작했다. WhatsApp은 이 전환의 최대 수혜자였으며, 특히 인도·브라질·유럽·중동·아프리카 등지에서 지배적인 플랫폼으로 성장했다. 반면 Facebook Messenger는 주로 기존 Facebook 사용자 기반에 의존해 글로벌 독립 메시징 플랫폼으로서의 성장에 한계를 보였다.",
    metrics: [
      { label: "WhatsApp MAU (2014년 초)", value: "5억 명", sub: "SMS를 대체하는 글로벌 1위 메시징 앱" },
      { label: "WhatsApp 일 메시지 처리량", value: "약 500억 건", sub: "2014년 초 기준" },
      { label: "글로벌 모바일 메시징 시장 성장률", value: "연 30%+", sub: "스마트폰 보급 가속 반영" },
      { label: "Facebook Messenger MAU", value: "약 2억 명", sub: "2014년 초, Facebook 플랫폼 의존 구조" },
    ],
    subBody: "2014년 모바일 메시징 시장의 지각 변동은 단순한 앱 경쟁이 아니었다. 통신사의 SMS 수익이 잠식되고, 메시징이 소셜 플랫폼의 핵심 인프라로 부상하면서 구글(Hangouts), 애플(iMessage), 텔레그램 등도 경쟁에 뛰어들었다. 그러나 WhatsApp은 국가·운영체제·통신사를 초월한 유일한 글로벌 메시징 플랫폼이었고, 이 네트워크 효과의 무게는 $19B를 정당화하는 핵심 논거였다.",
    players: [
      { name: "WhatsApp", role: "글로벌 모바일 메시징 1위, 5억 MAU, 인수 대상" },
      { name: "Facebook Messenger", role: "Facebook 의존적 메시징, 독립 글로벌 성장 한계" },
      { name: "WeChat", role: "중국 독점, 슈퍼앱 구조로 발전" },
      { name: "LINE", role: "일본·동아시아 특화, 스티커 이모티콘 수익화" },
      { name: "KakaoTalk", role: "한국 1위, 게임·커머스 통합 플랫폼" },
      { name: "Telegram", role: "신생 보안 메시징, 빠른 성장" },
    ],
  },

  companyOverview: {
    targetName: "WhatsApp Inc.",
    body: "WhatsApp은 2009년 Jan Koum과 Brian Acton이 설립한 모바일 메시징 플랫폼이다. 두 창업자는 Yahoo! 출신이었으며, Koum은 정부 감시와 광고로부터 자유로운 커뮤니케이션 도구를 만들겠다는 신념으로 WhatsApp을 창업했다. $1/년 구독 모델을 채택해 광고 없이 운영했으며, 엔지니어링 효율성에 집중한 결과 직원 55명으로 5억 MAU를 처리하는 극단적인 레버리지를 달성했다. Sequoia Capital이 주요 투자자였으며, 2011년 시리즈 A 이후 총 $60M 수준의 VC 투자를 유치했다.",
    metrics: [
      { label: "MAU (2014년 초)", value: "5억 명", sub: "전 세계 SMS 대체 메시징 1위" },
      { label: "일 메시지 처리량", value: "약 500억 건", sub: "2014년 초 기준" },
      { label: "직원 수", value: "55명", sub: "인수 당시 — 직원당 MAU 약 900만 명" },
      { label: "연간 매출", value: "$20M 미만", sub: "$1/년 구독 기반, 광고 없음" },
      { label: "설립·인수", value: "2009년 / 2014년 10월", sub: "5년 만에 $19B Exit" },
    ],
    financials: [
      { year: "2012", revenue: 10, cogs: 3, grossProfit: 7, sga: 20, operatingIncome: -13, ebitda: -8 },
      { year: "2013", revenue: 20, cogs: 5, grossProfit: 15, sga: 30, operatingIncome: -15, ebitda: -10 },
    ],
    financialsNote: "단위: USD 백만(M). WhatsApp은 비상장 기업으로 정확한 재무 정보 비공개. 수치는 업계 추정치 기반.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "구독 수수료", pct: 100, color: "bg-emerald-500", amt: "약 $20M" },
    ],
  },

  dealStructure: {
    body: "Facebook은 WhatsApp을 현금 $4B, Facebook 주식 $12B, WhatsApp 직원 대상 restricted stock $3B의 구성으로 총 $19B에 인수했다. 직원 restricted stock $3B은 4년 베스팅 조건이 붙었으며, 이 구조는 핵심 엔지니어링 인력의 이탈을 방지하기 위한 장치였다. EU 집행위원회와 FTC의 승인을 받기 위해 Facebook은 WhatsApp과 Facebook 플랫폼 간 사용자 데이터 자동 결합을 하지 않겠다고 공식 약속했다. 그러나 이 약속은 2016년 WhatsApp 개인정보처리방침 변경으로 사실상 파기됐고, EU는 2017년 €110M의 벌금을 부과했다.",
    preOwnership: {
      nodes: [
        { id: "whatsapp", label: "WhatsApp Inc.", sub: "비상장 스타트업", type: "target" },
        { id: "koum_acton", label: "Jan Koum / Brian Acton", sub: "공동창업자 보유 지분", type: "entity" },
        { id: "sequoia", label: "Sequoia Capital", sub: "주요 VC 투자자", type: "fund" },
        { id: "facebook", label: "Facebook, Inc.", sub: "NASDAQ 상장 (FB)", type: "acquirer" },
      ],
      edges: [
        { from: "koum_acton", to: "whatsapp", label: "창업자 지분" },
        { from: "sequoia", to: "whatsapp", label: "VC 지분" },
        { from: "facebook", to: "whatsapp", label: "인수 협상 중" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "facebook_parent", label: "Facebook, Inc.", sub: "NASDAQ 상장 (FB)", type: "acquirer" },
        { id: "whatsapp_sub", label: "WhatsApp Inc.", sub: "Facebook 완전 자회사, 독립 운영", type: "target" },
      ],
      edges: [
        { from: "facebook_parent", to: "whatsapp_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "딜 규모 (총 EV)", value: "$19B (현금 $4B + 주식 $12B + 직원 RSU $3B)", accent: true },
      { label: "거래 형태", value: "현금·주식 혼합 인수", accent: false },
      { label: "인수 프리미엄 근거", value: "사용자당 약 $38 (MAU 5억 기준)", accent: true },
      { label: "직원 Restricted Stock", value: "$3B (4년 베스팅)", accent: false },
      { label: "규제 약속", value: "'데이터 결합 없음' 공식 확약 (나중에 위반)", accent: false },
      { label: "규제 승인", value: "EU 집행위원회·FTC 승인 (2014년 10월)", accent: false },
      { label: "서비스 독립", value: "광고 없는 서비스 철학 유지 약속", accent: false },
      { label: "EV / EBITDA", value: "N/M (영업 적자)", accent: false },
      { label: "거래 완료일", value: "2014년 10월 6일", accent: false },
    ],
  },

  advisors: {
    body: "이 딜은 규모 대비 이례적으로 빠른 속도로 진행됐다. Zuckerberg와 Koum의 직접 협상이 핵심이었으며, 양측 모두 소수 정예 자문단을 활용했다. 거래 규모에 비해 재무 자문사의 역할은 상대적으로 제한적이었다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (Facebook)",
        initials: "META",
        bg: "bg-blue-600",
        advisors: [
          { firm: "Allen & Company (추정)", role: "재무 자문 (FA)", roleType: "financial", note: "Facebook M&A 관련 자문, 정확한 역할은 미공개" },
          { firm: "Weil, Gotshal & Manges", role: "법률 자문", roleType: "legal", note: "M&A 계약 및 규제 대응 총괄" },
          { firm: "Facebook 내부 M&A팀", role: "딜 전략 총괄", roleType: "other", note: "Zuckerberg 직접 주도" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (WhatsApp)",
        initials: "WA",
        bg: "bg-emerald-500",
        advisors: [
          { firm: "Morgan Stanley (추정)", role: "재무 자문 (FA)", roleType: "financial", note: "WhatsApp 측 재무 자문, 정확한 역할은 일부 미공개" },
          { firm: "Fenwick & West (추정)", role: "법률 자문", roleType: "legal", note: "실리콘밸리 스타트업 전문 로펌" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반이며, 일부는 추정 정보입니다.",
  },

  valuation: {
    body: "Facebook은 WhatsApp에 MAU 5억 명 기준 사용자당 약 $38의 가치를 부여했다. 매출은 $20M 미만으로 전통적인 EV/Revenue 멀티플은 약 950배에 달했다. 이 밸류에이션은 현재의 수익성보다 글로벌 메시징 네트워크 효과의 대체 불가능성, 신흥 시장 침투율, 그리고 WhatsApp 없이 5억 명에게 도달하는 비용과 시간을 고려한 전략적 가격이었다. Zuckerberg는 당시 '모바일 메시징이 곧 인터넷의 핵심 인프라'라는 관점에서 딜의 가격을 정당화했다.",
    rows: [
      { item: "딜 EV", val: "$19B", note: "현금 $4B + 주식 $12B + 직원 RSU $3B", accent: true },
      { item: "MAU (인수 당시)", val: "약 5억 명", note: "2014년 초 기준, 전 세계 SMS 대체" },
      { item: "EV / MAU", val: "약 $38 / MAU", note: "발표 기준 프리미엄", accent: true },
      { item: "연간 매출 (추정)", val: "$20M 미만", note: "$1/년 구독 모델" },
      { item: "EV / Revenue", val: "약 950x (추정)", note: "전통 멀티플 적용 불가" },
      { item: "EBITDA", val: "약 -$10M (추정)", note: "영업 적자 상태" },
      { item: "EV / EBITDA", val: "N/M (적자)", note: "수익 기반 밸류에이션 비적용" },
      { item: "직원당 MAU", val: "약 900만 명/인", note: "55명이 5억 MAU 처리 — 극단적 효율", accent: true },
    ],
    disclaimer: "밸류에이션 수치는 공개 보도 및 업계 추정치 기반입니다. WhatsApp 내부 재무 정보는 비공개입니다.",
  },

  rationale: {
    buyer: {
      title: "Facebook 인수 논리",
      initials: "META",
      bg: "bg-blue-600",
      points: [
        "글로벌 메시징 플랫폼 확보 — SMS를 대체한 5억 MAU 메시징 네트워크를 Facebook 생태계 내에 내재화",
        "신흥 시장 침투 — 인도·브라질·중동·아프리카 등 Facebook Messenger가 취약한 신흥 시장에서의 강력한 거점 확보",
        "경쟁자 차단 — Google(Gmail·Hangouts), Apple(iMessage) 등이 글로벌 메시징 표준을 장악하기 전에 선제 행동",
        "통신사 우회 전략 — SMS·MMS 의존도에서 벗어나 인터넷 기반 커뮤니케이션 인프라 주도권 확보",
        "장기 수익화 기반 — 광고 없는 접근이라도 커머스·결제·비즈니스 메시징으로 수익화 잠재력 극대화",
      ],
    },
    seller: {
      title: "WhatsApp 매각 논리",
      initials: "WA",
      bg: "bg-emerald-500",
      points: [
        "독립 성장 한계 인식 — 수익화 없는 모델로 글로벌 서버·인프라 비용을 감당하며 독립 성장을 지속하는 데 한계",
        "$19B 확실한 Exit — VC 투자자(Sequoia 등)와 창업자에게 불확실한 IPO 대비 명확하고 거대한 프리미엄 제공",
        "독립 운영 조건 합의 — 광고 없는 서비스 철학과 독립 운영을 조건으로 협상, 창업자의 핵심 가치 보존",
        "Facebook 인프라 활용 — 급성장에 따른 서버·보안 비용 부담을 Facebook 인프라로 해소",
        "End-to-End 암호화 유지 — 사용자 프라이버시 원칙을 유지하는 조건 확보",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "인수 완료 후 WhatsApp은 빠르게 성장해 2024년 기준 20억 MAU를 돌파했다. End-to-End 암호화는 유지됐고, 초기에는 광고 없는 서비스 구조도 지켜졌다. 그러나 2016년 개인정보처리방침 변경으로 Facebook과의 데이터 연동이 도입되면서 EU 집행위원회가 합병 승인 시 잘못된 정보를 제공했다고 판단해 2017년 €110M의 벌금을 부과했다. 2018년 Jan Koum은 Facebook의 광고 도입 압박과 사용자 데이터 활용 방식에 반발해 CEO직을 사임했고, 공동창업자 Brian Acton도 이미 2017년 퇴사 후 Signal Foundation 설립에 $50M을 기부했다. 2024년 현재 WhatsApp Business API와 광고 매출은 $10B+로 추정되며, 창업 당시의 '광고 없는 메시징' 철학은 사실상 종식됐다.",
    overallVerdict: "글로벌 메시징 시장 장악 성공 — 창업자 철학 충돌·EU 규제 위반이라는 대가 수반",
    positives: [
      "글로벌 메시징 표준 확보 — 2024년 20억 MAU, 전 세계 최대 메시징 플랫폼",
      "신흥 시장 지배 — 인도·브라질·인도네시아·중동·아프리카에서 사실상 독점적 지위",
      "WhatsApp Business 매출 급성장 — 2024년 $10B+ 추정, Meta 새로운 수익원",
      "End-to-End 암호화 유지 — 사용자 프라이버시 신뢰 보존으로 경쟁사 대비 우위",
      "Facebook 생태계 연결 — Meta AI, 결제(Meta Pay) 통합으로 슈퍼앱 방향 진화",
    ],
    risks: [
      "EU 규제 위반 — 2017년 €110M 벌금, 이후에도 EU 개인정보 규제 반복 제재",
      "2018년 Jan Koum 사임 — 광고·데이터 활용 압박 반발, 창업 철학과의 근본 충돌",
      "Brian Acton의 Signal 설립 — 퇴사 후 경쟁자 지원, '페이스북은 WhatsApp을 팔지 마라' 발언",
      "EU 반독점 조사 지속 — Facebook/Meta의 플랫폼 지배력 남용 여부 지속 조사",
      "개인정보 보호 논란 — 사용자 데이터 활용 정책 변경에 대한 지속적 신뢰 리스크",
    ],
    editorNote: "WhatsApp 인수는 '$19B로 인터넷 시대의 글로벌 전화망을 산다'는 논리로 정당화됐다. 결과적으로 글로벌 메시징 시장 장악이라는 전략 목표는 달성됐다. 그러나 'No ads. No games. No gimmicks'라는 창업 철학은 인수 4년 만에 창업자를 쫓아냈고, EU 규제 약속 위반은 빅테크 M&A의 신뢰성에 근본적 의문을 제기했다. 이 딜은 플랫폼 인수가 단순한 자산 취득이 아니라 문화·철학·규제와의 정면 충돌임을 보여준 역대 최대의 사례다.",
  },

  tombstone: {
    acquirerInitials: "META",
    acquirerBg: "bg-blue-600",
    targetInitials: "WA",
    targetBg: "bg-emerald-500",
    acquirerName: "Facebook, Inc. (현 Meta Platforms)",
    targetName: "WhatsApp Inc.",
    dealTitle: "현금·주식 혼합 인수",
    dealSize: "약 $190억",
    dealSizeUSD: "USD 19 Billion",
    evEbitda: "N/M (영업 적자)",
    closeDate: "Oct 2014",
  },

  sources: [
    { id: 1, text: "Facebook Press Release — Facebook to Acquire WhatsApp (February 19, 2014)", url: "https://about.fb.com" },
    { id: 2, text: "SEC Form 8-K — Facebook WhatsApp acquisition filing (2014)", url: "https://www.sec.gov" },
    { id: 3, text: "European Commission Decision — Facebook/WhatsApp Merger Clearance (October 2014)", url: "https://ec.europa.eu" },
    { id: 4, text: "European Commission Press Release — Facebook fined €110M for providing misleading information about WhatsApp takeover (May 2017)", url: "https://ec.europa.eu" },
    { id: 5, text: "The Guardian — WhatsApp co-founder Jan Koum quits Facebook amid data privacy concerns (April 2018)" },
    { id: 6, text: "Forbes — Brian Acton: The co-founder of WhatsApp on why he left $850M behind (September 2018)" },
    { id: 7, text: "Wall Street Journal — Facebook's $19 Billion Bet on WhatsApp (February 2014)" },
  ],

  seo: {
    title: "Meta × WhatsApp 인수 완전 분석 — $190억 딜과 창업자 사임의 전말",
    description: "Facebook의 WhatsApp $19B 인수 완전 분석. 신흥 시장 5억 사용자 전략, Jan Koum 독립 조건, EU €110M 벌금, 2018년 창업자 사임까지 심층 해부.",
    keywords: [
      "메타 왓츠앱 인수",
      "WhatsApp acquisition Facebook",
      "모바일 메시징 M&A",
      "플랫폼 전략 인수",
      "EU M&A 규제 리스크",
    ],
  },

  concepts: [
    { term: "전략적 M&A", href: "/deal-101/strategic-ma", description: "플랫폼 확장을 위한 전략적 인수 — 재무 논리보다 사용자 기반과 시장 포지션" },
    { term: "플랫폼 전략", href: "/deal-101/platform-strategy", description: "메시징 네트워크 효과를 통한 Meta 생태계 확장" },
    { term: "M&A 규제 리스크", href: "/deal-101/regulatory-risk", description: "EU 데이터 결합 금지 약속과 이후 위반으로 인한 규제 리스크" },
    { term: "인수 프리미엄", href: "/deal-101/acquisition-premium", description: "사용자당 $38 프리미엄의 전략적 근거" },
  ],

  faq: [
    {
      q: "왜 직원 55명의 앱에 $19B을 지불했나?",
      a: "Facebook이 산 것은 앱 자체가 아니라 '글로벌 메시징 인프라'였습니다. WhatsApp은 5억 명의 MAU와 하루 500억 건의 메시지를 처리하면서 사실상 SMS를 대체했습니다. 특히 Facebook이 취약한 인도·브라질·중동·아프리카 등 신흥 시장에서 지배적 플랫폼이었습니다. 이 네트워크를 처음부터 직접 구축하는 것은 수십 년이 걸릴 수도 있는 일이었습니다. $19B은 그 시간과 불확실성에 대한 프리미엄이었습니다.",
    },
    {
      q: "Jan Koum은 왜 2018년 사임했나?",
      a: "창업 철학과의 근본적 충돌 때문이었습니다. Koum은 'No ads. No games. No gimmicks'를 WhatsApp의 핵심 원칙으로 삼고 있었는데, Facebook은 광고 도입과 사용자 데이터 활용 확대를 지속적으로 압박했습니다. 2016년 개인정보처리방침 변경으로 Facebook과 데이터 연동이 시작됐고, Koum은 이를 자신의 가치관에 대한 배신으로 받아들였습니다. 그는 수억 달러 상당의 미확정 주식을 포기하고 퇴사했습니다.",
    },
    {
      q: "EU €110M 벌금은 어떤 이유로 부과됐나?",
      a: "Facebook이 2014년 합병 승인 과정에서 EU 집행위원회에 잘못된 정보를 제공했기 때문입니다. Facebook은 당시 'WhatsApp과 Facebook 사용자 계정을 자동 연결하는 것이 기술적으로 불가능하다'고 진술했습니다. 그러나 2016년 WhatsApp의 개인정보처리방침이 변경되면서 Facebook과의 데이터 연동이 도입됐고, EU는 이를 허위 진술로 판단해 2017년 €110M의 벌금을 부과했습니다. 이는 M&A 규제 과정에서의 허위 진술에 대한 대표적인 제재 사례입니다.",
    },
    {
      q: "결과적으로 좋은 딜이었나?",
      a: "전략적 목표는 달성됐지만 과정은 복잡했습니다. 긍정적 측면에서 WhatsApp은 2024년 20억 MAU를 돌파했고, WhatsApp Business를 통한 광고·커머스 수익은 $10B+ 수준으로 성장했습니다. Meta의 신흥 시장 지배력도 공고해졌습니다. 그러나 EU 규제 위반, 창업자 사임, Brian Acton의 Signal 지원 등은 인수 대가를 상징합니다. 특히 '광고 없는 서비스'라는 약속이 결국 깨진 것은 플랫폼 M&A에서 창업자의 가치관이 얼마나 오래 보존될 수 있는지에 대한 근본적인 의문을 남겼습니다.",
    },
  ],
};

export default deal;
