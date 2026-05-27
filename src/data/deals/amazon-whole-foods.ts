/**
 * 아마존 × 홀푸드 인수
 * 물리적 유통의 디지털 통합 — $13.7B, 2017년 완료
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "amazon-whole-foods",
  title: "아마존은 왜 $137억에 홀푸드를 샀나 — 오프라인 식료품이 아마존 생태계의 무기가 된 방법",
  subtitle: "Prime 회원 오프라인 연결 · 물류 라스트마일 거점 · 아마존 고 기술 실험실 · 웰마트와의 유통 전쟁",
  category: "ma",
  industry: "식료품 유통 / e-커머스 / 클라우드",
  country: "미국",
  announcedAt: "2017-06-16",
  closedAt: "2017-08-28",
  announcedDisplay: "2017년 6월",
  closedDisplay: "2017년 8월",
  readingMinutes: 11,
  tags: ["Amazon", "Whole Foods", "grocery", "retail", "Prime", "last-mile", "omnichannel", "Walmart", "vertical integration"],
  excerpt: "아마존이 홀푸드를 $13.7B에 인수한 2017년 딜은 아마존이 처음으로 대규모 물리적 유통 인프라를 확보한 사건이다. 460개 매장은 Prime 회원 확대의 오프라인 거점이 됐고, 아마존 신선식품 배송의 라스트마일 인프라로 전환됐다. 식료품 시장 침투와 월마트와의 유통 전쟁 선언이었다.",

  acquirer: { initials: "AMZN", bg: "bg-orange-500", label: "아마존" },
  target: { initials: "WFM", bg: "bg-green-600", label: "홀푸드 마켓" },

  background: [
    "2017년 아마존은 온라인 소매 지배자였지만 식료품 시장에서는 고전했다. AmazonFresh는 2007년부터 운영됐으나 신선식품 온라인 침투율은 여전히 낮았다. 식료품은 전체 미국 소매 시장의 최대 카테고리(약 $8,000억/년)였지만 온라인 전환이 가장 느린 분야였다. 소비자들은 신선식품을 직접 보고 구매하는 습관을 쉽게 바꾸지 않았다.",
    "홀푸드 마켓은 프리미엄 유기농 식료품 체인으로, 460개 매장과 충성도 높은 고소득 고객층을 보유했다. 그러나 2015년 이후 경쟁 심화(Trader Joe's, Costco, 대형마트의 유기농 라인업 확대)로 성장이 정체됐고 '홀페이체크(Whole Paycheck)'라는 별명처럼 높은 가격이 약점이었다. 2017년 초 행동주의 헤지펀드 Jana Partners가 지분을 취득하며 매각 압박을 가했다.",
    "아마존에게 홀푸드는 단순한 식료품 회사가 아니었다. 460개 매장은 Prime 회원 서비스를 오프라인으로 확장하는 채널이었고, 신선식품 배송의 라스트마일 거점이었다. 아마존의 광고 플랫폼에 FMCG 브랜드들을 연결하는 데이터 수집 인프라이기도 했다. 제프 베이조스는 '물리적 유통과 디지털의 통합'을 오랫동안 준비해왔고, 홀푸드는 그 플랫폼이었다.",
    "2017년 6월 16일 발표 즉시 월마트·크로거·타겟 등 전통 식료품·유통 업체들의 주가가 급락했다. 시장은 아마존의 식료품 진출이 기존 강자들을 위협할 것이라고 즉각 판단했다. 8월 28일 FTC 심사를 통과해 딜이 완료됐고, 아마존은 당일 홀푸드 가격을 즉시 인하해 'Prime 할인' 혜택을 제공하기 시작했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$13.7B (전액 현금)",
    acquirerName: "Amazon.com, Inc.",
    targetName: "Whole Foods Market, Inc.",
    announcedDisplay: "2017년 6월",
    closedDisplay: "2017년 8월",
    country: "미국",
  },

  executiveSummary: [
    "전액 현금 $13.7B 인수 — 아마존 역대 최대 인수 (당시 기준), 460개 오프라인 매장 확보",
    "핵심 논리: Prime 오프라인 확장, 식료품 라스트마일 거점, 고소득 고객층 데이터",
    "클로징 당일 즉시 가격 인하 + Prime 할인 — 빠른 통합 신호, 경쟁사 주가 직격",
    "월마트·크로거 주가 즉락 — 식료품 유통 전쟁 선언으로 시장 인식",
    "아마존 고(Amazon Go) 기술 실험과 라스트마일 물류 거점으로 활용",
    "식료품 온라인 침투율 가속: 인수 이후 아마존 프레시 성장 견인",
  ],

  industryOverview: {
    body: "미국 식료품 시장은 연간 약 $8,000억 규모로 전체 소매의 최대 카테고리다. 2017년 기준 온라인 식료품 침투율은 약 2~3%에 불과했다. 월마트, 크로거, 코스트코, 알버트슨 등 전통 오프라인 강자들이 시장을 지배했고, Trader Joe's와 Aldi 같은 가성비 체인이 중간층을 잠식하고 있었다. 프리미엄 유기농 니치는 홀푸드가 창출했으나 대형마트들의 프리미엄 유기농 라인업 확장으로 경쟁이 심화됐다.",
    metrics: [
      { label: "미국 식료품 시장", value: "약 $8,000억/년", sub: "2017년 기준, 전체 소매 최대 카테고리" },
      { label: "온라인 식료품 침투율", value: "2~3%", sub: "2017년 기준, 성장 여지 큰 시장" },
      { label: "홀푸드 매장 수", value: "460개+", sub: "미국·영국·캐나다" },
      { label: "경쟁 발표 후 월마트 주가", value: "-4.7%", sub: "딜 발표 당일 하락" },
    ],
    subBody: "식료품은 아마존이 오랫동안 공략하려 했지만 성공하지 못한 마지막 대형 카테고리였다. 신선식품의 콜드체인 물류, 소비자의 오프라인 구매 습관, 낮은 마진 구조가 진입 장벽이었다. 홀푸드 인수는 이 장벽들을 한 번에 우회하는 전략이었다.",
    players: [
      { name: "월마트", role: "미국 식료품 시장 1위, 온라인도 강화 중" },
      { name: "크로거", role: "전통 식료품 체인 2위" },
      { name: "Trader Joe's", role: "프리미엄 가성비 식료품, 홀푸드의 직접 경쟁자" },
      { name: "Instacart", role: "식료품 배송 플랫폼, 아마존의 경쟁/파트너" },
    ],
  },

  companyOverview: {
    targetName: "홀푸드 마켓 (Whole Foods Market, Inc.)",
    body: "1980년 텍사스 오스틴에서 설립된 홀푸드는 프리미엄 유기농·자연식품 식료품 체인으로 성장해 460개 이상의 매장을 운영했다. 2017년 매출은 약 $164억으로 견고한 프리미엄 포지셔닝을 유지했다. 그러나 '홀페이체크'라는 별명처럼 높은 가격이 성장 한계였다. 2015~2016년 실적 정체와 행동주의 투자자 Jana Partners의 압박으로 매각 압력이 커졌다.",
    metrics: [
      { label: "매장 수", value: "460개+", sub: "미국·영국·캐나다" },
      { label: "FY2016 매출", value: "약 $156억", sub: "전년 대비 성장 정체" },
      { label: "설립·본사", value: "1980년 / 텍사스 오스틴", sub: "프리미엄 유기농 유통 개척" },
      { label: "NASDAQ 상장", value: "WFM", sub: "상장 후 아마존 인수로 상장폐지" },
    ],
    financials: [
      { year: "FY2015", revenue: 15389, cogs: 9973, grossProfit: 5416, sga: 4200, operatingIncome: 536, ebitda: 780 },
      { year: "FY2016", revenue: 15724, cogs: 10154, grossProfit: 5570, sga: 4350, operatingIncome: 480, ebitda: 720 },
      { year: "FY2017", revenue: 16030, cogs: 10400, grossProfit: 5630, sga: 4450, operatingIncome: 410, ebitda: 660 },
    ],
    financialsNote: "단위: USD 백만(M). 홀푸드 회계연도(9월 결산) 기준 추정치.",
    financialsCurrency: "USD",
    financialsUnit: "백만",
    revenueBreakdown: [
      { name: "식료품·신선식품", pct: 85, color: "bg-green-600", amt: "약 $136억" },
      { name: "건강식품·보충제", pct: 10, color: "bg-green-400", amt: "약 $16억" },
      { name: "기타(푸드서비스 등)", pct: 5, color: "bg-green-200", amt: "약 $8억" },
    ],
  },

  dealStructure: {
    body: "아마존은 홀푸드를 주당 $42 전액 현금으로 인수했다. 딜 발표 전일 종가 대비 약 27% 프리미엄이었다. 인수 자금은 아마존의 자체 현금 및 신규 차입금으로 조달됐다. FTC 반독점 심사는 비교적 신속하게 통과됐다 — 아마존의 식료품 시장 점유율이 낮았기 때문에 시장 집중도 우려가 크지 않았다. 2017년 8월 28일 거래 완료 즉시 아마존은 홀푸드 가격 인하와 Prime 할인 통합을 발표했다.",
    preOwnership: {
      nodes: [
        { id: "wfm_public", label: "홀푸드 마켓", sub: "NASDAQ 상장 (WFM)", type: "public" },
        { id: "amzn_public", label: "아마존", sub: "NASDAQ 상장 (AMZN)", type: "acquirer" },
      ],
      edges: [
        { from: "wfm_public", to: "amzn_public", label: "독립 상장사" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "amzn_parent", label: "아마존", sub: "NASDAQ 상장 (AMZN)", type: "acquirer" },
        { id: "wfm_sub", label: "홀푸드 마켓", sub: "아마존 완전 자회사", type: "target" },
      ],
      edges: [
        { from: "amzn_parent", to: "wfm_sub", label: "100%" },
      ],
    },
    keyTerms: [
      { label: "딜 규모", value: "$13.7B (전액 현금)", accent: true },
      { label: "인수 주가", value: "주당 $42 현금", accent: false },
      { label: "인수 프리미엄", value: "약 27% (공시 전일 종가 대비)", accent: true },
      { label: "거래 형태", value: "전액 현금 합병", accent: false },
      { label: "EV / FY2017 EBITDA", value: "약 20×", accent: true },
      { label: "완료일", value: "2017년 8월 28일", accent: false },
    ],
  },

  advisors: {
    body: "아마존과 홀푸드 양측에 월가 주요 IB와 로펌이 자문을 맡았다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "매수측 (아마존)",
        initials: "AMZN",
        bg: "bg-orange-500",
        advisors: [
          { firm: "Goldman Sachs", role: "재무 자문 (FA)", roleType: "financial", note: "딜 구조 및 가격 책정" },
          { firm: "Cleary Gottlieb", role: "법률 자문", roleType: "legal", note: "M&A 및 반독점 자문" },
        ],
      },
      {
        side: "target",
        sideLabel: "매도측 (홀푸드)",
        initials: "WFM",
        bg: "bg-green-600",
        advisors: [
          { firm: "Evercore", role: "재무 자문 (FA)", roleType: "financial", note: "매각 프로세스 자문" },
          { firm: "Wachtell Lipton Rosen & Katz", role: "법률 자문", roleType: "legal", note: "M&A 계약 및 이사회 자문" },
        ],
      },
    ],
    disclaimer: "자문사 정보는 공개 보도 기반입니다.",
  },

  valuation: {
    body: "아마존은 홀푸드에 FY2017 예상 EBITDA 대비 약 20배의 멀티플을 지불했다. 전통적 식료품 체인의 EV/EBITDA가 7~10배 수준임을 감안하면, 아마존은 식료품 유통 사업 자체가 아니라 460개 매장이 아마존 생태계에 제공하는 전략적 가치에 프리미엄을 지불했다.",
    rows: [
      { item: "딜 EV", val: "$13.7B", note: "전액 현금", accent: true },
      { item: "인수 주가", val: "주당 $42", note: "공시 전일 종가 $33.06 대비 약 27% 프리미엄" },
      { item: "인수 프리미엄", val: "약 27%", note: "공시 전일 종가 기준", accent: true },
      { item: "FY2017 매출", val: "약 $160억", note: "전통 식료품 체인 수준" },
      { item: "FY2017 EBITDA", val: "약 $6.6억", note: "마진 4~5% 수준" },
      { item: "EV / EBITDA", val: "약 20×", note: "식료품 섹터 평균 7~10× 대비 큰 프리미엄", accent: true },
    ],
    disclaimer: "밸류에이션 수치는 공개 공시 및 업계 분석 자료 기반입니다.",
  },

  rationale: {
    buyer: {
      title: "아마존 인수 논리",
      initials: "AMZN",
      bg: "bg-orange-500",
      points: [
        "Prime 오프라인 확장 — 460개 매장에서 Prime 할인 제공, 오프라인 Prime 가치 증명",
        "라스트마일 거점 — 도심 홀푸드 매장을 신선식품 당일 배송 거점으로 전환",
        "고소득 고객 데이터 — 홀푸드 구매 데이터로 아마존 광고 타겟팅 정교화",
        "월마트 대항 — 식료품 1위 월마트의 핵심 영역에 직접 도전장",
        "신기술 실험실 — Amazon Go 무인 결제, Alexa 통합 등 리테일 혁신 플랫폼",
      ],
    },
    seller: {
      title: "홀푸드 매각 논리",
      initials: "WFM",
      bg: "bg-green-600",
      points: [
        "성장 정체 돌파 — 경쟁 심화로 독립 성장 한계, 아마존의 디지털 역량 활용",
        "Jana Partners 행동주의 압박 — 주주 환원·전략 변화 요구에 대한 대응",
        "주당 $42 프리미엄 — 27% 프리미엄으로 주주에게 확실한 가치 실현",
        "아마존 플랫폼 활용 — Prime 2억+ 회원 네트워크를 통한 고객 기반 확대 기대",
        "투자 없는 디지털 전환 — 독자적 온라인 투자 없이 아마존 플랫폼 활용 가능",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024-12",
    body: "인수 완료 당일 아마존은 홀푸드의 주요 품목 가격을 즉시 인하하고 Prime 회원 할인을 도입했다. Amazon Echo 스피커와 Echo Dot이 홀푸드 매장에서 판매되기 시작했다. 아마존 프레시(Amazon Fresh) 온라인 배달은 홀푸드 매장 인프라를 활용해 확장됐다. 그러나 2020~2021년 팬데믹 이후 아마존은 홀푸드 통합에서 예상보다 느린 성과를 인정하고, 일부 아마존 고(Amazon Go) 확장 계획을 축소했다. 2023년에는 홀푸드 100여 개 매장 축소 및 일부 아마존 프레시 매장 폐점 결정이 나왔다.",
    overallVerdict: "전략적 방향은 정확했으나 통합 실행 속도는 기대 이하",
    positives: [
      "Prime 오프라인 채널 확보 — Prime 2억 회원에게 식료품 오프라인 혜택 제공",
      "신선식품 당일 배송 인프라 — 홀푸드 거점 통해 아마존 프레시 서비스 확장",
      "아마존 광고 데이터 강화 — 식료품 구매 데이터로 FMCG 광고 정교화",
      "Alexa·Echo 판매 채널 확대 — 물리 매장 내 아마존 기기 판매",
    ],
    risks: [
      "통합 속도 기대 이하 — 홀푸드 고유 문화·운영 체계와 아마존의 효율 문화 충돌",
      "아마존 고 확장 축소 — 무인 결제 기술의 대규모 상용화 지연",
      "식료품 온라인 전환 여전히 더딤 — 팬데믹 이후에도 오프라인 비중 압도적",
      "아마존 프레시 일부 매장 폐점 (2023) — 독립 식료품 체인 전략 재검토",
      "월마트·크로거 반격 — 경쟁사들도 온라인·오프라인 통합 가속",
    ],
    editorNote: "아마존의 홀푸드 인수는 '오프라인 유통이 디지털 플랫폼의 확장 도구가 될 수 있다'는 명제를 $13.7B로 검증한 실험이다. 전략적 방향은 정확했지만, 기술 기업이 전통 식료품 유통의 복잡성을 과소평가한 측면도 있었다. Prime 연동, 라스트마일 거점 활용은 성과가 있었지만 아마존 고 기술의 대규모 확산이나 홀푸드 자체 성장 회복은 기대보다 느렸다. 이 딜은 디지털-물리 융합 전략의 가능성과 한계를 동시에 보여준 교과서적 사례다.",
  },

  tombstone: {
    acquirerInitials: "AMZN",
    acquirerBg: "bg-orange-500",
    targetInitials: "WFM",
    targetBg: "bg-green-600",
    acquirerName: "Amazon.com, Inc.",
    targetName: "Whole Foods Market, Inc.",
    dealTitle: "전액 현금 합병 (All-Cash Acquisition)",
    dealSize: "약 $137억",
    dealSizeUSD: "USD 13.7 Billion",
    evEbitda: "약 20×",
    closeDate: "Aug 2017",
  },

  sources: [
    { id: 1, text: "Amazon Press Release — Amazon and Whole Foods Market Announce Acquisition (June 2017)", url: "https://investor.amazon.com" },
    { id: 2, text: "Whole Foods Market Form S-4 / Proxy Statement (2017)", url: "https://www.sec.gov" },
    { id: 3, text: "FTC Statement on Amazon / Whole Foods Acquisition (August 2017)", url: "https://www.ftc.gov" },
    { id: 4, text: "Amazon FY2017 Annual Report (10-K) — Acquisition of Whole Foods", url: "https://investor.amazon.com" },
    { id: 5, text: "The Wall Street Journal — Amazon's $13.7 Billion Whole Foods Deal Shakes Retail (June 2017)" },
    { id: 6, text: "Bloomberg — Amazon Shuts Some Amazon Go, Fresh Stores (2023)" },
    { id: 7, text: "CNBC — Jana Partners Takes Whole Foods Stake, Pushes for Sale (April 2017)" },
    { id: 8, text: "Reuters — Amazon Prime Members Get Discounts at Whole Foods (August 2017)" },
  ],

  seo: {
    title: "아마존 홀푸드 인수 완전 분석 — $137억 오프라인 전략과 Prime 통합의 결과",
    description: "아마존의 홀푸드 $13.7B 인수 완전 분석. Prime 오프라인 확장 전략, 라스트마일 물류 거점, 인수 후 통합 성과와 한계까지 심층 해부.",
    keywords: ["아마존 홀푸드 인수", "Amazon Whole Foods M&A", "아마존 식료품 전략", "Prime 오프라인", "온오프라인 통합 전략", "리테일 M&A", "아마존 프레시"],
  },

  concepts: [
    { term: "수직 통합 (Vertical Integration)", href: "/deal-101/vertical-integration", description: "오프라인 유통망을 직접 소유해 공급망·고객 접점 통제 — 아마존의 식료품 수직 통합" },
    { term: "플랫폼 전략 (Platform Strategy)", href: "/deal-101/platform-strategy", description: "460개 홀푸드 매장을 Prime 생태계 확장의 오프라인 플랫폼으로 전환" },
    { term: "전략적 M&A (Strategic M&A)", href: "/deal-101/strategic-ma", description: "현재 수익성보다 Prime·라스트마일·데이터 전략 가치를 위해 20× EBITDA 프리미엄 지불" },
    { term: "PMI (인수 후 통합)", href: "/deal-101/pmi", description: "디지털 기업이 오프라인 유통 문화를 통합하는 과정에서의 도전과 현실" },
  ],

  faq: [
    {
      q: "아마존은 왜 식료품 체인을 직접 인수했나요?",
      a: "아마존은 AmazonFresh로 신선식품 온라인 배달을 시도했지만 성장이 더뎠습니다. 식료품 소비자들은 신선식품을 직접 보고 구매하는 습관이 강했고, 콜드체인 물류 비용도 높았습니다. 홀푸드 460개 매장은 한 번에 이 문제를 해결해줬습니다 — 오프라인 구매 채널, 라스트마일 배달 거점, Prime 회원 오프라인 혜택 제공 장소가 동시에 확보됐습니다.",
    },
    {
      q: "인수 후 홀푸드와 Prime이 어떻게 연동됐나요?",
      a: "Prime 회원은 홀푸드 매장에서 추가 할인을 받게 됐습니다. 아마존 대시(Amazon Dash)와 에코(Echo) 기기가 매장에서 판매됐습니다. 홀푸드 매장은 2시간 내 신선식품 배달(Prime Now)의 픽업 거점이 됐습니다. 홀푸드 앱과 아마존 앱이 통합돼 온·오프라인 구매 이력이 연결됐습니다.",
    },
    {
      q: "월마트 등 경쟁사에게 어떤 영향을 줬나요?",
      a: "딜 발표 당일 월마트 주가 -4.7%, 크로거 -9.2%, 타겟 -5.1%가 하락했습니다. 시장은 아마존이 최대 식료품 카테고리에 본격 진입한다고 판단했습니다. 이후 월마트는 제트닷컴(Jet.com) 인수, 온라인 식료품 배달 확대 등으로 대응했고, 크로거도 디지털 플랫폼 투자를 대폭 늘렸습니다. 아마존의 홀푸드 인수는 전통 유통업 전반의 디지털 전환을 가속했습니다.",
    },
    {
      q: "아마존 고(Amazon Go) 기술과 홀푸드는 어떤 관계인가요?",
      a: "아마존은 홀푸드 인수 이후 Amazon Go 무인 결제 기술을 일부 홀푸드 매장에 적용하는 실험을 했습니다. 줄을 서지 않고 상품을 들고 나가면 자동 결제되는 방식입니다. 그러나 기술적 복잡성과 비용 문제로 대규모 확산에 어려움을 겪었고, 2023년에는 일부 Amazon Go 매장도 폐점했습니다.",
    },
    {
      q: "아마존 홀푸드 인수의 ROI는 성공적이었나요?",
      a: "평가는 엇갈립니다. Prime 연동, 신선식품 배달 인프라 확보, 광고 데이터 수집 면에서는 전략적 가치가 있었습니다. 그러나 홀푸드 자체 성장 회복, Amazon Go 대규모 상용화, 식료품 온라인 전환 가속 등 주요 목표는 기대보다 느렸습니다. 2023년 일부 매장 정리는 통합 전략의 재조정을 의미했습니다. $13.7B 투자 대비 직접적 재무 ROI만으로는 아직 검증이 어렵습니다.",
    },
  ],
};

export default deal;
