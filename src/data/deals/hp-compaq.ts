/**
 * HP × 컴팩 합병
 * 칼리 피오리나의 논란적 베팅 — $250억, 2002년 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "hp-compaq",
  title: "HP는 왜 $250억에 컴팩을 샀나 — 칼리 피오리나의 베팅과 월터 휴렛의 전쟁",
  subtitle: "이사회 프록시 전쟁 · PC 시장 1위 달성 · 칼리 피오리나의 야망과 몰락 · 엔터프라이즈 전략의 현실",
  category: "ma",
  industry: "PC / 서버 / IT 기술",
  country: "미국",
  announcedAt: "2001-09-03",
  closedAt: "2002-05-03",
  announcedDisplay: "2001년 9월",
  closedDisplay: "2002년 5월",
  readingMinutes: 11,
  tags: ["HP", "Compaq", "Carly Fiorina", "Walter Hewlett", "PC", "server", "proxy war", "merger", "IT consolidation"],
  excerpt: "HP의 컴팩 $25B 인수는 칼리 피오리나 CEO의 야심찬 베팅이었다. 창업자 가족 이사인 월터 휴렛의 강력한 반대와 프록시 전쟁을 이기고 합병을 완수했지만, 피오리나는 3년 후 이사회에 의해 해임됐다. PC 시장 1위는 달성했으나 프린터·엔터프라이즈 사업 시너지는 기대에 못 미쳤다.",

  acquirer: { initials: "HPQ", bg: "bg-blue-700", label: "HP (휴렛-패커드)" },
  target: { initials: "CPQ", bg: "bg-red-600", label: "컴팩" },

  background: [
    "2001년 칼리 피오리나는 HP CEO 취임 2년 차에 PC·프린터 중심의 HP가 IBM, 선 마이크로시스템즈, 델에 맞서 경쟁하기 위해 엔터프라이즈 서버·서비스 역량이 필요하다고 판단했다. 컴팩은 디지털 이퀴프먼트(DEC) 인수(1998년)로 알파 서버·스토리지 포트폴리오를 보유하고 있었고, PC 시장에서도 HP의 강력한 경쟁자였다.",
    "2001년 9월 3일 발표 직후 HP 주가가 급락했다. 창업자 윌리엄 휴렛의 아들이자 이사회 멤버인 월터 휴렛(Walter Hewlett)이 강력히 반대했다. 그는 'PC 시장은 낮은 마진 사업이며 컴팩 인수는 HP의 강점(프린터, 계측기)을 희석한다'고 주장했다. 합병 찬반을 놓고 기업 역사상 가장 치열한 이사회-주주 프록시 전쟁 중 하나가 벌어졌다.",
    "2002년 3월, 주주총회 투표에서 피오리나 측이 약 51.4% 찬성으로 가까스로 승리했다. 여기에도 논란이 있었다 — HP가 기관투자자 도이체 방크의 찬성표를 확보하기 위해 부적절한 압력을 행사했다는 의혹이 제기됐다. 2002년 5월 3일 합병이 완료됐고, HP-컴팩 합산 PC 출하량은 세계 1위가 됐다.",
    "합병 후 HP는 PC 시장 1위를 달성했지만 강점이었던 프린터 부문의 성장이 주춤했다. 엔터프라이즈 서버 부문에서 컴팩의 알파 서버 기술은 결국 단종됐다. 2005년 이사회는 피오리나를 해임했다. 그녀는 인수는 옳았으나 실행이 문제였다고 주장했고, 이후 정계에 진출해 2016년 공화당 대선 경선에 출마했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$25B (주식 교환)",
    acquirerName: "Hewlett-Packard Company",
    targetName: "Compaq Computer Corporation",
    announcedDisplay: "2001년 9월",
    closedDisplay: "2002년 5월",
    country: "미국",
  },

  executiveSummary: [
    "주식 교환 $25B — 컴팩 1주당 HP 주식 0.6325주 교환, 당시 최대 규모 IT 합병 중 하나",
    "창업자 가족 vs CEO의 프록시 전쟁 — 월터 휴렛의 반대, 51.4% 찬성으로 가까스로 통과",
    "PC 시장 세계 1위 달성 — 합산 출하량 기준 델을 제치고 1위 (단기간)",
    "칼리 피오리나 2005년 해임 — 이사회의 전략 방향 이견과 실적 부진",
    "컴팩 알파 서버 사업 결국 단종 — 엔터프라이즈 시너지 미실현",
    "HP 역사의 전환점 — '포지셔닝의 딜레마'가 이후 HP의 분사(2015)로 이어짐",
  ],

  industryOverview: {
    body: "2001년 PC 산업은 성숙기에 접어들며 가격 경쟁이 심화됐다. 델의 직접 판매 모델이 업계를 위협했고, IBM은 PC 사업에서 서비스·소프트웨어로 전환 중이었다. 서버·스토리지 시장은 인터넷 붐 이후에도 성장했지만 HP는 컴팩 없이는 엔터프라이즈 서버에서 IBM·선 마이크로시스템즈에 뒤졌다.",
    metrics: [
      { label: "합병 후 PC 시장 점유율", value: "약 19%", sub: "세계 1위 (단기), 델과 경쟁" },
      { label: "합산 매출", value: "약 $870억", sub: "2002년 기준, IBM에 이어 IT 2위" },
      { label: "HP 프린터 시장 점유율", value: "약 45%", sub: "합병 전 HP 핵심 강점" },
      { label: "합병 후 감원 규모", value: "약 1만 5천 명", sub: "비용 절감 리스트럭처링" },
    ],
    subBody: "당시 IT 업계의 핵심 질문은 '규모가 경쟁 우위인가, 아니면 집중이 경쟁 우위인가'였다. 피오리나는 규모를 선택했고, IBM은 집중을 선택했다. 이후 IBM은 PC 사업을 레노보에 팔고 서비스·소프트웨어로 완전히 전환해 성공했다.",
    players: [
      { name: "델(Dell)", role: "직접 판매 모델로 PC 시장 위협, HP 주요 경쟁자" },
      { name: "IBM", role: "엔터프라이즈 서버·서비스 1위, 피오리나가 목표한 포지션" },
      { name: "선 마이크로시스템즈(Sun)", role: "워크스테이션·서버 경쟁자" },
      { name: "월터 휴렛", role: "창업자 가족 이사, 합병 반대 프록시 전쟁 주도" },
    ],
  },

  companyOverview: {
    targetName: "컴팩 컴퓨터 (Compaq Computer Corporation)",
    body: "1982년 설립된 컴팩은 IBM 호환 PC의 선두 주자였다. 1998년 디지털 이퀴프먼트(DEC)를 $96억에 인수해 알파 서버·스토리지 포트폴리오를 확보했으나 통합에 어려움을 겪었다. 인수 당시 연간 매출 약 $340억으로 HP보다 규모가 작았지만 PC·서버 시장의 핵심 플레이어였다.",
    metrics: [
      { label: "설립", value: "1982년", sub: "IBM 호환 PC 선두 주자로 성장" },
      { label: "합병 전 연간 매출", value: "약 $340억", sub: "2001년 기준" },
      { label: "주요 사업", value: "PC, 서버, 스토리지", sub: "DEC 인수(1998)로 서버 강화" },
      { label: "NASDAQ 상장", value: "CPQ", sub: "합병 완료 후 상장폐지" },
    ],
    financials: [
      { year: "FY1999", revenue: 38525, cogs: 30200, grossProfit: 8325, sga: 5500, operatingIncome: 924, ebitda: 1800 },
      { year: "FY2000", revenue: 42383, cogs: 33000, grossProfit: 9383, sga: 6200, operatingIncome: 704, ebitda: 1600 },
      { year: "FY2001", revenue: 33554, cogs: 26500, grossProfit: 7054, sga: 5800, operatingIncome: -785, ebitda: 300 },
    ],
    financialsNote: "단위: USD 백만(M). 2001년 닷컴 버블 붕괴로 IT 지출 감소 영향. 컴팩 연간 공시 기준.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "PC·워크스테이션", pct: 55, color: "bg-red-600", amt: "약 $185억" },
      { name: "엔터프라이즈 서버·스토리지", pct: 30, color: "bg-red-400", amt: "약 $100억" },
      { name: "서비스", pct: 15, color: "bg-red-200", amt: "약 $50억" },
    ],
  },

  dealStructure: {
    body: "HP는 컴팩을 주식 교환 방식으로 인수했다. 컴팩 주주는 1주당 HP 주식 0.6325주를 수령했다. 주주총회 투표는 51.4% 찬성으로 가까스로 통과됐으며, 도이체 방크 압력 의혹 등 논란이 있었다.",
    preOwnership: {
      nodes: [
        { id: "compaq_public", label: "컴팩", sub: "NASDAQ 상장 (CPQ)", type: "public" },
        { id: "hp_public", label: "HP (휴렛-패커드)", sub: "NYSE 상장 (HPQ)", type: "acquirer" },
      ],
      edges: [
        { from: "compaq_public", to: "hp_public", label: "PC·서버 시장 경쟁자 → 인수" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "hp_parent", label: "HP (Hewlett-Packard)", sub: "NYSE 상장 (HPQ)", type: "acquirer" },
        { id: "compaq_sub", label: "컴팩 컴퓨터", sub: "HP 완전 자회사 → 브랜드 흡수", type: "target" },
      ],
      edges: [
        { from: "hp_parent", to: "compaq_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "딜 규모", value: "$25B (주식 교환)", accent: true },
      { label: "교환 비율", value: "컴팩 1주당 HP 0.6325주", accent: false },
      { label: "주주 찬성률", value: "약 51.4% (극히 박빙)", accent: true },
      { label: "거래 형태", value: "주식 교환 합병", accent: false },
      { label: "완료일", value: "2002년 5월 3일", accent: false },
    ],
  },

  advisors: {
    body: "양측에 월가 주요 IB와 로펌이 참여했으며, 프록시 전쟁에 별도의 PR·자문팀이 동원됐다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (HP)",
        initials: "HPQ",
        bg: "bg-blue-700",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "딜 구조 및 주주 설득 총괄" },
          { firm: "Perella Weinberg Partners", role: "재무 자문 (FA)", roleType: "financial", note: "공동 자문" },
          { firm: "Wilson Sonsini", role: "법률 자문", roleType: "legal", note: "M&A 및 증권법 자문" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (컴팩)",
        initials: "CPQ",
        bg: "bg-red-600",
        advisors: [
          { firm: "Salomon Smith Barney", role: "재무 자문 (FA)", roleType: "financial", note: "컴팩 측 자문" },
          { firm: "Davis Polk & Wardwell", role: "법률 자문", roleType: "legal", note: "M&A 계약 자문" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반입니다.",
  },

  valuation: {
    body: "HP는 컴팩에 약 EV/EBITDA 14배 수준의 가격을 지불했다. 닷컴 버블 붕괴 이후 컴팩 실적이 악화된 상황에서의 인수였다.",
    rows: [
      { item: "딜 EV", val: "$25B", note: "주식 교환 합병 기준", accent: true },
      { item: "컴팩 FY2000 매출", val: "약 $424억", note: "닷컴 버블 이전 최고 실적" },
      { item: "컴팩 FY2001 EBITDA", val: "약 $3억", note: "버블 붕괴로 급격히 악화", accent: true },
      { item: "EV / FY2000 EBITDA", val: "약 15×", note: "정상 실적 기준 멀티플" },
      { item: "합병 후 감원", val: "약 1만 5천 명", note: "비용 절감 목표 달성 수단" },
    ],
    disclaimer: "밸류에이션 수치는 공개 공시 및 업계 분석 자료 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "HP 인수 논리 (피오리나)",
      initials: "HPQ",
      bg: "bg-blue-700",
      points: [
        "엔터프라이즈 포트폴리오 확장 — 컴팩의 알파 서버·스토리지로 IBM에 대응",
        "PC 시장 1위 달성 — 합산 출하량으로 델을 제치고 세계 1위",
        "비용 시너지 — 중복 사업 구조조정으로 연간 $25억 비용 절감 목표",
        "서비스 역량 강화 — 컴팩의 IT 서비스 사업 통해 엔터프라이즈 서비스 강화",
        "규모의 경제 — 구매·제조·R&D 통합으로 경쟁력 강화",
      ],
    },
    seller: {
      title: "컴팩 매각 논리",
      initials: "CPQ",
      bg: "bg-red-600",
      points: [
        "DEC 통합 부담 — 1998년 DEC 인수 후 통합에 어려움, HP 자원 활용",
        "델의 직접 판매 모델 위협 — PC 시장 마진 압박, 독립 생존 불안",
        "주주 가치 실현 — HP 주식 교환으로 25% 프리미엄 확보",
        "엔터프라이즈 포트폴리오 활용 — HP의 배급망으로 서버·스토리지 성장 기대",
        "규모 합산 — IBM·선 마이크로시스템즈에 맞설 합산 규모",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "합병 후 HP는 PC 시장 세계 1위(단기)를 달성했고 목표로 했던 $25억 비용 절감도 달성했다. 그러나 컴팩의 알파 서버는 결국 단종됐고 엔터프라이즈 시너지는 기대에 못 미쳤다. 피오리나는 2005년 이사회에 의해 해임됐다. 2015년 HP는 PC·프린터 사업(HP Inc.)과 엔터프라이즈 사업(Hewlett Packard Enterprise)으로 분사했다 — 피오리나가 추구했던 종합 IT 회사 전략이 결국 실패했다는 인정이었다.",
    overallVerdict: "부분적 성공 (비용 절감), 전략적 비전은 미실현",
    positives: [
      "PC 시장 세계 1위 달성 (단기) — 합산 출하량 기준",
      "$25억 비용 절감 목표 달성 — 중복 사업 구조조정",
      "프린터·PC 포트폴리오 보완 — 컴팩 PC 라인업과 HP 프린터 시너지",
    ],
    risks: [
      "컴팩 알파 서버 단종 — 엔터프라이즈 서버 전략 핵심 자산 포기",
      "피오리나 2005년 해임 — 이사회의 전략 방향 불신",
      "2015년 HP 분사 — 종합 IT 기업 전략 포기 인정",
      "프린터 부문 성장 주춤 — 합병 후 HP 핵심 캐시카우 성장 둔화",
      "델에 PC 시장 1위 재탈환 — 합병 효과 단기에 그침",
    ],
    editorNote: "HP-컴팩 합병은 '규모가 경쟁 우위인가'라는 질문에 복잡한 답을 남겼다. 비용 절감은 달성했지만 전략적 포지셔닝(종합 IT 회사)은 실현되지 않았다. IBM이 PC를 팔고 서비스·소프트웨어로 집중한 것과 대비된다. 피오리나의 전략이 틀렸는가, 아니면 실행이 부족했는가는 여전히 논쟁 중이다. 분명한 것은 2015년 HP 분사가 최종 판결이었다는 점이다.",
  },

  tombstone: {
    acquirerInitials: "HPQ",
    acquirerBg: "bg-blue-700",
    targetInitials: "CPQ",
    targetBg: "bg-red-600",
    acquirerName: "Hewlett-Packard Company",
    targetName: "Compaq Computer Corporation",
    dealTitle: "주식 교환 합병",
    dealSize: "약 $250억",
    dealSizeUSD: "USD 25 Billion",
    evEbitda: "약 15×",
    closeDate: "May 2002",
  },

  sources: [
    { id: 1, text: "Hewlett-Packard Press Release — HP and Compaq Announce Merger (September 2001)", url: "https://investor.hp.com" },
    { id: 2, text: "SEC Form S-4 — HP / Compaq Merger Proxy Statement (2002)", url: "https://www.sec.gov" },
    { id: 3, text: "The Wall Street Journal — Walter Hewlett's Opposition to the Compaq Merger (2002)" },
    { id: 4, text: "Fortune — The Carly Chronicles: HP's Big Bet (2002)" },
    { id: 5, text: "BusinessWeek — HP-Compaq: The Truth About the Merger (2002)" },
    { id: 6, text: "New York Times — Hewlett-Packard Ousts Carly Fiorina as Its Chief (February 2005)" },
    { id: 7, text: "HP Inc. Press Release — HP Inc. and Hewlett Packard Enterprise Begin Trading (November 2015)" },
    { id: 8, text: "Carly Fiorina — Tough Choices: A Memoir (2006)" },
  ],

  seo: {
    title: "HP 컴팩 합병 완전 분석 — $250억 프록시 전쟁과 칼리 피오리나의 유산",
    description: "HP의 컴팩 $25B 합병 완전 분석. 칼리 피오리나의 전략, 월터 휴렛의 반대, 프록시 전쟁, 인수 후 성과와 2015년 HP 분사까지 심층 해부.",
    keywords: ["HP 컴팩 합병", "HP Compaq acquisition", "칼리 피오리나", "Carly Fiorina", "프록시 전쟁", "IT 합병", "PC 시장 M&A", "HP 분사 2015"],
  },

  concepts: [
    { term: "PMI (인수 후 통합)", href: "/deal-101/pmi", description: "비용 절감은 달성했지만 전략적 통합은 미완 — HP-컴팩의 PMI 복잡성" },
    { term: "전략적 M&A (Strategic M&A)", href: "/deal-101/strategic-ma", description: "종합 IT 기업 포지셔닝을 위한 전략적 인수 — 실현되지 않은 엔터프라이즈 비전" },
    { term: "EV/EBITDA", href: "/deal-101/ev-ebitda", description: "닷컴 버블 붕괴 후 악화된 실적 기반 멀티플 분석" },
    { term: "수직 통합 (Vertical Integration)", href: "/deal-101/vertical-integration", description: "PC에서 서버·서비스까지 IT 가치사슬을 통합하려는 피오리나의 전략" },
  ],

  faq: [
    {
      q: "월터 휴렛은 왜 그토록 강하게 합병에 반대했나요?",
      a: "윌리엄 휴렛(HP 공동창업자)의 아들인 월터 휴렛은 세 가지 이유로 반대했습니다. 첫째, PC 시장은 낮은 마진 사업이고 컴팩 인수로 HP가 이 저마진 사업에 더 깊이 빠져든다는 것. 둘째, HP의 진짜 강점(프린터, 계측기, 이미징)을 희석한다는 우려. 셋째, 합병 후 문화 충돌과 통합 리스크. 그는 독립 컨설턴트를 고용해 합병 반대 캠페인을 벌였고, 이것이 IT 역사상 가장 치열한 프록시 전쟁 중 하나가 됐습니다.",
    },
    {
      q: "주주 투표에서 논란이 됐던 도이체 방크 의혹은 무엇인가요?",
      a: "투표 직전 도이체 방크(Deutsche Bank)가 보유한 HP 주식 1700만 주의 표결 방향이 논란이 됐습니다. 처음에는 반대 입장이었다가 찬성으로 바뀌었는데, 이에 대해 HP가 부적절한 압력을 행사했다는 의혹이 제기됐습니다. 이 의혹은 별도 조사로 이어졌으나 결정적인 증거가 나오지 않았고 합병은 유효했습니다.",
    },
    {
      q: "HP-컴팩 합병이 결국 성공이었나요, 실패였나요?",
      a: "평가가 엇갈립니다. '부분적 성공'이 가장 정확한 표현입니다. 비용 절감 $25억 목표는 달성했고 PC 시장 1위도 단기간 달성했습니다. 그러나 피오리나의 핵심 비전인 '종합 IT 회사'는 실현되지 않았습니다. 2015년 HP가 PC·프린터(HP Inc.)와 엔터프라이즈(HPE)로 분사한 것이 최종 판결이었습니다 — 피오리나가 만들려 했던 회사 구조를 결국 해체했습니다.",
    },
    {
      q: "칼리 피오리나는 왜 해임됐나요?",
      a: "2005년 이사회는 세 가지 이유로 피오리나를 해임했습니다. 첫째, 합병 후 HP 실적이 목표에 미치지 못했습니다. 둘째, 이사회와 전략 방향에 대한 깊은 이견이 있었습니다. 셋째, 피오리나의 경영 스타일에 대한 내부 반발. 피오리나 본인은 인터뷰에서 합병 전략은 옳았으나 이사회 일부가 변화를 두려워했다고 주장했습니다.",
    },
    {
      q: "컴팩의 핵심 자산이었던 알파 서버는 어떻게 됐나요?",
      a: "알파 서버는 컴팩이 1998년 DEC를 인수할 때 획득한 핵심 엔터프라이즈 서버 플랫폼이었습니다. HP는 인수 후 알파 서버 개발을 계속했지만 결국 2007년 지원 종료를 결정했습니다. 피오리나가 컴팩 인수의 핵심 전략 자산으로 내세웠던 서버 포트폴리오가 사실상 포기된 것입니다. 이것이 '엔터프라이즈 시너지 미실현'의 가장 대표적 사례입니다.",
    },
  ],
};

export default deal;
