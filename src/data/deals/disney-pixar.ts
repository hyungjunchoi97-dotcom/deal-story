/**
 * 디즈니 × 픽사 인수
 * 애니메이션의 DNA를 산 $74억 딜 — 2006년 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "disney-pixar",
  title: "디즈니는 왜 $74억에 픽사를 샀나 — 창의성을 돈으로 살 수 있는가",
  subtitle: "스티브 잡스 디즈니 2대 주주 등극 · PMI 성공의 교과서 · 밥 아이거의 첫 번째 베팅",
  category: "ma",
  industry: "엔터테인먼트 / 애니메이션",
  country: "미국",
  announcedAt: "2006-01-24",
  closedAt: "2006-05-05",
  announcedDisplay: "2006년 1월",
  closedDisplay: "2006년 5월",
  readingMinutes: 11,
  tags: ["Disney", "Pixar", "Steve Jobs", "Bob Iger", "animation", "M&A", "creative acquisition", "PMI", "entertainment"],
  excerpt: "디즈니가 픽사를 $7.4B(약 8조원)에 인수한 2006년 딜은 창의성 인수의 교과서로 불린다. 밥 아이거 CEO 취임 직후의 첫 번째 대형 베팅이었고, 스티브 잡스를 디즈니 최대 개인 주주(7%)로 만든 전액 주식 딜이었다. 이후 Ratatouille, WALL-E, Up, Toy Story 3가 연달아 나왔다.",

  acquirer: { initials: "DIS", bg: "bg-blue-600", label: "월트 디즈니" },
  target: { initials: "PIXAR", bg: "bg-orange-500", label: "픽사 애니메이션" },

  background: [
    "2000년대 초 디즈니 애니메이션은 위기였다. Treasure Planet(2002), Brother Bear(2003), Home on the Range(2004)가 연달아 흥행에 실패했다. 반면 픽사는 토이스토리(1995), 벅스 라이프(1998), 몬스터 주식회사(2001), 니모를 찾아서(2003), 인크레더블(2004)로 완벽한 흥행 기록을 이어갔다. 디즈니는 픽사 배급사였지만 창작은 픽사가 했다.",
    "픽사와 디즈니의 배급 계약은 2006년 만료될 예정이었다. 스티브 잡스(픽사 CEO 겸 최대 주주)는 마이클 아이즈너 디즈니 CEO와 사이가 좋지 않았다. 아이즈너가 2005년 퇴임하고 밥 아이거가 취임하면서 분위기가 바뀌었다. 아이거는 취임 직후 잡스에게 전화를 걸어 관계 회복을 시도했다.",
    "2006년 1월 24일, 디즈니는 픽사를 전액 주식으로 $7.4B에 인수한다고 발표했다. 픽사 주주들은 픽사 1주당 디즈니 주식 2.3주를 수령했다. 스티브 잡스는 픽사 지분 50.1%를 보유하고 있었기 때문에, 딜 완료 후 디즈니 주식의 약 7%를 보유하는 최대 개인 주주가 됐다. 잡스는 디즈니 이사회에도 합류했다.",
    "픽사의 핵심 인력 — 존 래시터(John Lasseter)와 에드 캣멀(Ed Catmull) — 이 디즈니 애니메이션의 크리에이티브 책임자가 됐다. 아이거는 픽사 문화를 보존하고 두 스튜디오를 분리 운영하기로 약속했다. 2006년 5월 5일 딜이 완료됐고, 이후 나온 Ratatouille(2007), WALL-E(2008), Up(2009), Toy Story 3(2010)은 모두 흥행과 아카데미를 휩쓸었다.",
  ],

  dealSummary: {
    dealValueDisplay: "$7.4B (전액 주식)",
    acquirerName: "Walt Disney Company",
    targetName: "Pixar Animation Studios",
    announcedDisplay: "2006년 1월",
    closedDisplay: "2006년 5월",
    country: "미국",
  },

  executiveSummary: [
    "전액 주식 $7.4B — 픽사 주주에게 1주당 디즈니 2.3주 교환, 스티브 잡스 디즈니 7% 최대 개인 주주",
    "밥 아이거의 첫 대형 베팅 — 취임 직후 '창의성 구매'라는 논란적 선택",
    "PMI 성공 교과서 — 픽사 독립성 보장, 존 래시터를 디즈니 애니메이션 수장으로",
    "인수 후 연속 대작 — Ratatouille, WALL-E, Up, Toy Story 3 모두 흥행+아카데미 석권",
    "디즈니 애니메이션 르네상스 2.0 — 픽사 DNA가 디즈니 본체까지 변화시킴",
    "창의적 인수의 딜레마: 인수 후에도 창의성을 유지할 수 있는가 — 성공적 답변",
  ],

  industryOverview: {
    body: "2006년 애니메이션 영화 시장은 디지털 3D 기술로 빠르게 전환 중이었다. 픽사가 1995년 토이스토리로 시작한 CGI 애니메이션 혁명은 드림웍스 애니메이션(슈렉), 소니 픽처스 애니메이션이 뒤를 따르며 산업 표준이 됐다. 전통적 2D 애니메이션은 급격히 쇠락했고, 디즈니의 2D 스튜디오도 2004년 사실상 폐쇄됐다.",
    metrics: [
      { label: "픽사 누적 박스오피스", value: "$3.2B+", sub: "인수 전 6편 합산 전 세계 흥행" },
      { label: "픽사 흥행 성공률", value: "6/6 (100%)", sub: "토이스토리 ~ 인크레더블" },
      { label: "글로벌 애니메이션 시장", value: "약 $1,500억", sub: "2006년 기준 (TV+영화+파생)" },
      { label: "디즈니 애니메이션 최근 흥행", value: "부진", sub: "2002~2004 연속 흥행 실패" },
    ],
    subBody: "CGI 애니메이션은 단순한 기술 변화가 아니라 스토리텔링 역량의 경쟁이었다. 픽사는 기술과 창의성을 동시에 보유했고, 디즈니는 배급 네트워크와 IP 라이선싱 능력을 보유했다. 두 회사는 서로에게 없는 것을 갖고 있었다.",
    players: [
      { name: "드림웍스 애니메이션", role: "슈렉 시리즈 등 CGI 2위, 픽사의 직접 경쟁자" },
      { name: "소니 픽처스 애니메이션", role: "2006년 막 출범, 오픈 시즌 개봉" },
      { name: "워너 브라더스", role: "애니메이션 배급 경쟁자" },
      { name: "스티브 잡스", role: "픽사 CEO + 50.1% 주주, 딜의 핵심 인물" },
    ],
  },

  companyOverview: {
    targetName: "픽사 애니메이션 스튜디오 (Pixar Animation Studios)",
    body: "픽사는 1986년 루카스필름의 컴퓨터 부문에서 스티브 잡스가 $5M에 인수해 설립했다. 1995년 토이스토리로 세계 최초 전편 CGI 장편 애니메이션을 선보인 뒤 6편 연속 흥행에 성공했다. NASDAQ에 상장(PIXR)돼 있었으며, 스티브 잡스가 지분 50.1%를 보유했다. 직원 約900명의 소규모지만 세계에서 가장 혁신적인 스튜디오로 평가받았다.",
    metrics: [
      { label: "설립", value: "1986년", sub: "스티브 잡스 $5M에 루카스필름서 인수" },
      { label: "NASDAQ 상장", value: "PIXR", sub: "인수 완료 후 상장폐지" },
      { label: "직원 수", value: "約900명", sub: "2006년 기준" },
      { label: "최근 흥행 히트작", value: "니모(2003), 인크레더블(2004)", sub: "연속 흥행 기록" },
    ],
    financials: [
      { year: "FY2003", revenue: 310, cogs: 120, grossProfit: 190, sga: 80, operatingIncome: 98, ebitda: 115 },
      { year: "FY2004", revenue: 273, cogs: 110, grossProfit: 163, sga: 75, operatingIncome: 70, ebitda: 88 },
      { year: "FY2005", revenue: 290, cogs: 118, grossProfit: 172, sga: 78, operatingIncome: 78, ebitda: 95 },
    ],
    financialsNote: "단위: USD 백만(M). 픽사 연간 실적 공시 기반 추정치.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "영화 흥행 수익 배분", pct: 70, color: "bg-orange-500", amt: "약 $200M" },
      { name: "DVD·라이선싱", pct: 30, color: "bg-orange-300", amt: "약 $87M" },
    ],
  },

  dealStructure: {
    body: "디즈니는 픽사를 전액 주식으로 인수했다. 픽사 주주는 1주당 디즈니 2.3주를 수령했다. 스티브 잡스(픽사 지분 50.1%)는 딜 완료 후 디즈니 약 7% 지분을 보유, 최대 개인 주주가 됐다. 잡스는 디즈니 이사회에 합류했으며, 픽사의 존 래시터와 에드 캣멀은 디즈니 애니메이션의 크리에이티브 리더십을 맡았다.",
    preOwnership: {
      nodes: [
        { id: "pixar_public", label: "픽사 애니메이션", sub: "NASDAQ 상장 (PIXR)", type: "public" },
        { id: "disney_public", label: "월트 디즈니", sub: "NYSE 상장 (DIS)", type: "acquirer" },
      ],
      edges: [
        { from: "pixar_public", to: "disney_public", label: "배급 파트너 → 인수" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "disney_parent", label: "월트 디즈니", sub: "NYSE 상장 (DIS)", type: "acquirer" },
        { id: "pixar_sub", label: "픽사 애니메이션", sub: "디즈니 완전 자회사", type: "target" },
      ],
      edges: [
        { from: "disney_parent", to: "pixar_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "딜 규모", value: "$7.4B (전액 주식)", accent: true },
      { label: "교환 비율", value: "픽사 1주당 DIS 2.3주", accent: false },
      { label: "스티브 잡스 취득 지분", value: "디즈니 약 7% (최대 개인 주주)", accent: true },
      { label: "거래 형태", value: "전액 주식 교환 합병", accent: false },
      { label: "완료일", value: "2006년 5월 5일", accent: false },
    ],
  },

  advisors: {
    body: "양측에 주요 투자은행과 법률자문이 참여했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (디즈니)",
        initials: "DIS",
        bg: "bg-blue-600",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "딜 구조 및 공정의견" },
          { firm: "Dewey Ballantine", role: "법률 자문", roleType: "legal", note: "M&A 계약 총괄" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (픽사)",
        initials: "PIXAR",
        bg: "bg-orange-500",
        advisors: [
          { firm: "Allen & Company", role: "재무 자문 (FA)", roleType: "financial", note: "스티브 잡스 측 자문" },
          { firm: "Skadden Arps", role: "법률 자문", roleType: "legal", note: "주주·계약 자문" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반입니다.",
  },

  valuation: {
    body: "디즈니는 픽사에 약 25~27× EV/EBITDA 프리미엄을 지불했다. 전통적 미디어·엔터테인먼트 섹터 멀티플의 2~3배 수준이었으나, 픽사의 100% 흥행 성공률과 향후 콘텐츠 파이프라인 가치를 감안하면 정당화됐다.",
    rows: [
      { item: "딜 EV", val: "$7.4B", note: "전액 주식 (디즈니 주식 2.3×)", accent: true },
      { item: "FY2005 매출", val: "약 $290M", note: "흥행 수익 배분 중심" },
      { item: "EV / 매출", val: "약 25×", note: "콘텐츠 IP 프리미엄 반영", accent: true },
      { item: "EV / EBITDA", val: "약 78×", note: "미래 창작 파이프라인 베팅" },
      { item: "픽사 흥행 성공률", val: "100% (6/6)", note: "인수 전 출시 전편 흥행 성공" },
    ],
    disclaimer: "밸류에이션 수치는 공개 공시 및 업계 분석 자료 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "디즈니 인수 논리",
      initials: "DIS",
      bg: "bg-blue-600",
      points: [
        "애니메이션 역량 회복 — 자체 2D 스튜디오 부진 탈출, 세계 최고 CGI 팀 확보",
        "IP 파이프라인 내재화 — 픽사 캐릭터를 디즈니 테마파크·MD·라이선싱과 연결",
        "배급 계약 만료 대응 — 2006년 계약 종료 전 픽사를 직접 보유",
        "밥 아이거의 크리에이티브 르네상스 전략 — 취임 첫 대형 딜로 방향성 제시",
        "스티브 잡스와의 관계 정상화 — Apple과의 협력 가능성도 열어둠",
      ],
    },
    seller: {
      title: "픽사(잡스) 매각 논리",
      initials: "PIXAR",
      bg: "bg-orange-500",
      points: [
        "배급 파트너 없이 독립 어려움 — 전 세계 배급망은 메이저 스튜디오 필요",
        "전액 주식 딜 — 디즈니 주식 수령으로 IP 라이선싱·파크 수익 간접 참여",
        "픽사 문화 보존 약속 — 존 래시터·에드 캣멀 리더십 유지 조건",
        "잡스의 포트폴리오 최적화 — Apple+Pixar 집중에서 Apple 집중으로",
        "밥 아이거에 대한 신뢰 — 아이즈너 퇴임 후 관계 회복, 협력 가능성 확인",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "인수 후 존 래시터는 디즈니 애니메이션 스튜디오와 픽사 양쪽의 크리에이티브 총책임자가 됐다. 픽사는 Emeryville 캠퍼스에서 독립적으로 운영됐다. Ratatouille(2007), WALL-E(2008), Up(2009), Toy Story 3(2010)이 모두 아카데미상·흥행을 석권했다. 디즈니 애니메이션도 픽사 DNA를 이식받아 Tangled, Frozen, Moana 등 히트작을 냈다. 2017년 래시터의 성희롱 의혹으로 퇴사하기 전까지 픽사는 독보적 성과를 기록했다.",
    overallVerdict: "창의적 인수의 역대 최고 성공 사례",
    positives: [
      "Ratatouille, WALL-E, Up, Toy Story 3 — 인수 후 4편 연속 아카데미+흥행 석권",
      "픽사 문화 보존 성공 — 래시터·캣멀 리더십, Emeryville 독립 운영",
      "디즈니 애니메이션 부활 — Frozen, Tangled에 픽사 DNA 이식",
      "IP 시너지 — Cars, Monsters Inc., Toy Story 테마파크·MD 폭발적 성장",
      "스티브 잡스와 관계 개선 → Apple과 iTunes/iPod 연동 협력 기반",
    ],
    risks: [
      "2017년 존 래시터 성희롱 논란 퇴사 — 픽사 창작의 핵심 인물 이탈",
      "후속 편 의존도 증가 (Toy Story 4, Cars 3, Incredibles 2) — 오리지널 IP 개발 감소",
      "스트리밍 전환 압박 — Disney+ 출시 이후 픽사 신작의 극장 개봉 축소",
      "팬데믹 이후 Soul, Luca, Turning Red가 극장 건너뛰고 Disney+ 직행",
    ],
    editorNote: "디즈니의 픽사 인수는 '창의성을 돈으로 살 수 있는가'라는 질문에 '예스, 단 조건이 있다'고 답한 딜이다. 인수 후 픽사 문화를 파괴하지 않고 보존하면서 디즈니 자원과 연결한 밥 아이거의 PMI 전략은 교과서가 됐다. 이 성공은 이후 마블(2009), 루카스필름(2012) 인수로 이어지는 디즈니의 'IP 제국' 구축 전략의 시작점이었다.",
  },

  tombstone: {
    acquirerInitials: "DIS",
    acquirerBg: "bg-blue-600",
    targetInitials: "PIX",
    targetBg: "bg-orange-500",
    acquirerName: "Walt Disney Company",
    targetName: "Pixar Animation Studios",
    dealTitle: "전액 주식 교환 합병",
    dealSize: "약 $74억",
    dealSizeUSD: "USD 7.4 Billion",
    evEbitda: "약 78×",
    closeDate: "May 2006",
  },

  sources: [
    { id: 1, text: "Disney Press Release — The Walt Disney Company to Acquire Pixar (January 2006)", url: "https://investor.disney.com" },
    { id: 2, text: "SEC Form S-4 — Disney / Pixar Merger Proxy (2006)", url: "https://www.sec.gov" },
    { id: 3, text: "Bob Iger — The Ride of a Lifetime (2019), Chapter: The Pixar Deal" },
    { id: 4, text: "Fortune — How Bob Iger Saved Disney (2006)" },
    { id: 5, text: "New York Times — Disney Agrees to Acquire Pixar in a $7.4 Billion Deal (January 2006)" },
    { id: 6, text: "The Hollywood Reporter — Pixar Post-Merger: How John Lasseter Revived Disney Animation" },
    { id: 7, text: "Bloomberg — Steve Jobs Becomes Disney's Largest Individual Shareholder (May 2006)" },
    { id: 8, text: "Box Office Mojo — Pixar Animation Studios: Complete Filmography Box Office Results" },
  ],

  seo: {
    title: "디즈니 픽사 인수 완전 분석 — $74억 창의성 인수와 PMI 성공의 교과서",
    description: "디즈니의 픽사 $7.4B 인수 완전 분석. 밥 아이거의 첫 대형 딜, 스티브 잡스 디즈니 최대 주주, PMI 성공 전략, 인수 후 연속 흥행까지 심층 해부.",
    keywords: ["디즈니 픽사 인수", "Disney Pixar acquisition", "밥 아이거 픽사", "스티브 잡스 디즈니", "창의성 M&A", "PMI 성공 사례", "애니메이션 M&A"],
  },

  concepts: [
    { term: "전략적 M&A (Strategic M&A)", href: "/deal-101/strategic-ma", description: "수익성보다 창의적 역량과 IP 파이프라인을 위해 높은 프리미엄을 지불한 콘텐츠 인수" },
    { term: "PMI (인수 후 통합)", href: "/deal-101/pmi", description: "픽사의 창의 문화를 보존하면서 디즈니 자원과 연결 — 성공적 PMI의 교과서 사례" },
    { term: "플랫폼 전략 (Platform Strategy)", href: "/deal-101/platform-strategy", description: "픽사 IP를 테마파크·MD·라이선싱 생태계로 확장하는 디즈니 플랫폼 전략" },
    { term: "경쟁 해자 (Competitive Moat)", href: "/deal-101/competitive-moat", description: "픽사의 스토리텔링 역량과 기술 우위 — 경쟁자가 단기간에 모방할 수 없는 창의적 해자" },
  ],

  faq: [
    {
      q: "디즈니는 왜 픽사를 자체 개발 대신 인수했나요?",
      a: "2000년대 초 디즈니의 자체 CGI 개발 시도는 모두 실패했습니다. Treasure Planet, Brother Bear, Home on the Range가 연속 흥행 실패를 기록했고, 픽사와의 격차는 좁혀지지 않았습니다. 픽사의 성공은 기술이 아니라 스토리텔링 문화와 인재의 문제였습니다 — 이는 외부에서 구축할 수 없었습니다. 밥 아이거는 픽사를 사는 것이 독자 개발보다 훨씬 빠르고 확실한 방법이라고 판단했습니다.",
    },
    {
      q: "스티브 잡스는 왜 픽사를 팔았나요?",
      a: "여러 이유가 겹쳤습니다. 첫째, 배급 계약 만료 문제 — 픽사는 전 세계 배급 네트워크 없이는 독립이 어려웠습니다. 둘째, 밥 아이거에 대한 신뢰 — 아이즈너 퇴임 후 새 CEO와 관계를 새로 시작할 수 있었습니다. 셋째, 전액 주식 딜 — 잡스는 디즈니 주식을 받음으로써 픽사 IP의 미래 가치(테마파크, MD)에도 참여했습니다. 넷째, Apple에 집중할 시간 — iPhone 출시를 앞둔 2006년, 잡스에게 픽사보다 Apple이 더 중요했습니다.",
    },
    {
      q: "픽사의 창의 문화가 인수 후에도 유지됐나요?",
      a: "네, 대체로 성공적이었습니다. 아이거의 핵심 약속은 픽사를 독립적으로 운영하고 존 래시터와 에드 캣멀의 리더십을 보장하는 것이었습니다. Emeryville 캠퍼스는 그대로 유지됐고, 픽사만의 창작 프로세스('Braintrust' 집단 피드백 시스템 등)도 보존됐습니다. 오히려 픽사의 문화가 디즈니 애니메이션을 변화시켰습니다. 2017년 래시터 퇴사 이후 픽사의 창작 원동력에 의문이 제기됐지만, 인수 직후 10년은 역대 최고의 창의적 전성기였습니다.",
    },
    {
      q: "이 딜은 이후 디즈니의 마블·루카스필름 인수에 어떤 영향을 줬나요?",
      a: "픽사 인수의 성공이 밥 아이거의 'IP 제국' 전략의 확신을 줬습니다. 창의적 IP를 인수하고 보존하면서 디즈니 배급·테마파크·MD 인프라와 연결하면 압도적 가치를 창출할 수 있다는 것이 증명됐습니다. 2009년 마블 엔터테인먼트($4B), 2012년 루카스필름($4.05B) 인수는 같은 전략의 반복이었습니다. 픽사는 그 원형이자 증거였습니다.",
    },
    {
      q: "$7.4B는 비쌌나요?",
      a: "당시에는 논란이 많았습니다. EV/EBITDA 78배는 엔터테인먼트 섹터 평균의 5~8배였습니다. 하지만 결과적으로 싸게 산 것이었습니다. 픽사 IP의 테마파크·MD·속편 수익, 디즈니 애니메이션 부활 효과(Frozen 등), Cars·Toy Story·Monsters Inc. 라이선싱 수익을 모두 합산하면 $7.4B는 초저평가였습니다. 창의적 IP의 가치는 DCF로 측정이 불가능하다는 교훈이기도 합니다.",
    },
  ],
};

export default deal;
