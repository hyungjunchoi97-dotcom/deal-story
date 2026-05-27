/**
 * KKR × Toys R Us LBO (2005–2018)
 * 레버리지드 바이아웃의 교과서적 실패 — 이자가 아마존보다 먼저 토이저러스를 죽였다
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kkr-toys-r-us",
  title: "KKR은 어떻게 $66억 LBO로 토이저러스를 죽이고 33,000명을 실업자로 만들었나",
  subtitle: "2005-2018 레버리지드 바이아웃의 빚의 덫 — 아마존이 아니라 연 $4억 이자가 디지털 투자를 막았다",
  category: "ma",
  industry: "완구 소매 / 유통",
  country: "미국",
  announcedAt: "2005-03-17",
  closedAt: "2005-07-21",
  announcedDisplay: "2005년 3월",
  closedDisplay: "2005년 7월",
  readingMinutes: 13,
  tags: [
    "KKR", "토이저러스", "Toys R Us", "LBO", "레버리지 바이아웃", "레버리지드론",
    "파산", "챕터11", "청산", "아마존", "소매업", "PE", "사모펀드",
    "부채 구조", "LevFin", "신용지표", "채무불이행",
  ],
  excerpt:
    "KKR·베인캐피탈·보나도가 토이저러스를 $66억에 레버리지드 바이아웃. 인수 대금의 80%($52억)를 부채로 조달했고, 이후 12년간 연 $4억+ 이자가 디지털 인프라·e커머스 투자를 원천 봉쇄했다. 2017년 챕터11 파산신청, 2018년 전 미국 매장 완전 청산 — 33,000명 실업. '아마존 때문'이라는 통설과 달리, 핵심 원인은 LBO 부채 구조였다.",

  acquirer: { initials: "KKR", bg: "bg-blue-800", label: "KKR·베인캐피탈·보나도" },
  target:   { initials: "TRU", bg: "bg-red-600",  label: "토이저러스 Inc" },

  background: [
    "2004년 토이저러스는 아마존과 이중적인 관계에 놓여 있었다. 2000년 토이저러스는 아마존과 '독점 완구 공급업체' 계약을 맺었지만, 아마존이 제3자 판매자들도 완구를 팔 수 있게 허용하면서 소송을 제기한 상태였다. 오프라인 매장 실적도 하락세였고, 주가는 2003년 고점 대비 30% 이상 떨어져 있었다. 이 취약한 상황이 PE 입장에서는 '저평가된 인수 대상'으로 보였다.",
    "2005년 3월, KKR(25%)·베인캐피탈(22.5%)·보나도 리얼티 트러스트(32.5%)·경영진(20%) 컨소시엄이 주당 $26.75, 총 $66억에 토이저러스 인수를 발표했다. 핵심은 자본 구조였다. $13억만 에쿼티로 투입하고, 나머지 $53억은 텀론 B(TLB), 리볼빙 크레딧 패실리티, 부동산 담보 대출로 채웠다. Debt/EBITDA는 약 6.2×. 연간 이자 부담은 $400-450M으로 추정됐다.",
    "이후 12년은 LBO 구조의 구조적 함정을 보여주는 교과서였다. 경쟁사인 월마트·타깃이 e커머스에 수억 달러를 투자하는 동안, 토이저러스는 연간 이자를 내는 것만으로도 EBITDA의 60-70%를 소진했다. 아마존이 부상했고, 온라인 완구 시장에서 토이저러스는 존재감을 잃었다. 2017년 9월, 토이저러스는 부채 $52억을 안고 챕터11 파산신청을 냈다. 2018년 3월, 모든 미국 매장이 문을 닫았다.",
  ],

  dealSummary: {
    dealValueDisplay: "$66억",
    acquirerName: "KKR / 베인캐피탈 / 보나도 리얼티 트러스트",
    targetName: "토이저러스 Inc (Toys R Us)",
    announcedDisplay: "2005년 3월 17일",
    closedDisplay: "2005년 7월 21일",
    country: "미국 (NYSE: TOY → 상장폐지)",
  },

  executiveSummary: [
    "KKR·베인캐피탈·보나도 컨소시엄이 토이저러스를 $66억에 현금 매수 — 에쿼티 $13억(20%), 부채 $53억(80%)의 전형적인 LBO 구조.",
    "인수 후 연간 이자 부담 $400-450M이 EBITDA의 60-70%를 소진 → 디지털 인프라·e커머스 투자 사실상 불가.",
    "아마존, 월마트, 타깃의 온라인 공세에 오프라인 의존 전략으로 버티던 토이저러스는 2017년 9월 챕터11 파산신청.",
    "2018년 3월 미국 내 전 매장(약 735개) 폐점, 33,000명 해고 — 소매 LBO 실패의 상징적 사례.",
    "PE 3사의 최종 에쿼티 손실 추정 $13억 전액. TLB 대주단은 원금 대비 $0.20-0.25/달러 수준 회수.",
  ],

  industryOverview: {
    body: "미국 완구 시장은 2000년대 중반부터 구조적 변화를 겪었다. 월마트·타깃이 완구를 '트래픽 유인' 상품으로 활용해 저가 경쟁에 나섰고, 아마존이 온라인 완구 시장을 잠식했다. 토이저러스는 한때 완구 전문 소매의 대명사였으나, '원스톱 완구숍'이라는 차별점이 빠르게 희석됐다. LBO 이후 경쟁에 대응하기 위한 투자 여력이 없었다는 것이 가장 큰 문제였다.",
    metrics: [
      { label: "미국 완구 시장 규모", value: "$260억", sub: "2005년 기준" },
      { label: "토이저러스 시장 점유율", value: "~20%", sub: "LBO 당시" },
      { label: "아마존 완구 점유율", value: "~30%+", sub: "2017년 기준 (급성장)" },
      { label: "LBO 당시 점포 수", value: "1,500+", sub: "미국 및 해외 포함" },
    ],
    players: [
      { name: "토이저러스", role: "완구 전문 오프라인 소매 1위 (LBO 이후 몰락)" },
      { name: "월마트", role: "완구 카테고리 최저가 경쟁, 온라인 투자 확대" },
      { name: "아마존", role: "온라인 완구 시장 지배, 연 30%+ 성장" },
      { name: "타깃", role: "디지털-오프라인 통합 완구 전략" },
    ],
  },

  companyOverview: {
    targetName: "토이저러스 Inc (Toys R Us)",
    body: "1948년 설립, 미국 뉴저지 기반의 전문 완구 소매 체인. 1980-90년대 '카테고리 킬러(Category Killer)' 전략으로 소규모 완구점을 도태시키며 미국 완구 시장 1위에 올랐다. '아이에게는 토이저러스(I don't wanna grow up, I'm a Toys R Us kid)' 광고 캠페인으로 브랜드 인지도를 높였다. 그러나 2000년대 들어 월마트·타깃의 저가 공세와 아마존의 온라인 부상으로 경쟁 지위가 흔들리기 시작했다.",
    metrics: [
      { label: "LBO 가격 (EV)", value: "$66억", sub: "주당 $26.75, 에쿼티+부채" },
      { label: "Entry Leverage", value: "6.2×", sub: "Debt/EBITDA at close" },
      { label: "연간 이자 부담", value: "$400-450M", sub: "EBITDA의 60-70% 소진" },
      { label: "파산 당시 부채", value: "$52억", sub: "12년 만에 $1억 감소" },
    ],
    financials: [
      {
        year: "FY2004",
        revenue: 11567,
        cogs: 7145,
        grossProfit: 4422,
        sga: 3620,
        operatingIncome: 802,
        ebitda: 850,
      },
      {
        year: "FY2013",
        revenue: 11450,
        cogs: 7280,
        grossProfit: 4170,
        sga: 3560,
        operatingIncome: 610,
        ebitda: 750,
      },
      {
        year: "FY2016",
        revenue: 11095,
        cogs: 6987,
        grossProfit: 4108,
        sga: 3624,
        operatingIncome: 484,
        ebitda: 648,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2013은 중간 기준점. 12년간 매출이 거의 고정된 반면 EBITDA는 꾸준히 하락. 연간 이자 $400-450M을 납부한 후 실제 자유현금흐름은 사실상 Zero 또는 마이너스.",
  },

  dealStructure: {
    body: "토이저러스 이사회가 주당 $26.75 현금 매수 제안을 수락하는 Go-Private LBO 구조. 인수 자금의 80%($53억)는 텀론 B, 리볼빙 크레딧 패실리티, 부동산 담보 론으로 구성됐다. 상장폐지 후 세 PE 펀드와 경영진이 비공개 기업으로 소유. 보나도 리얼티는 부동산(토이저러스 매장 부지 일부)에 대한 레버리지 의존이 특히 컸다.",
    preOwnership: {
      nodes: [
        { id: "kkr-pre",     label: "KKR Fund X",      sub: "PE 펀드",               type: "fund"   },
        { id: "bain-pre",    label: "베인캐피탈",       sub: "PE 펀드",               type: "fund"   },
        { id: "vornado-pre", label: "보나도 리얼티",    sub: "부동산 REIT",           type: "fund"   },
        { id: "public-tru",  label: "공개주주",         sub: "NYSE: TOY",             type: "public" },
        { id: "tru",         label: "토이저러스 Inc",   sub: "미국 완구 소매 1위",    type: "target" },
      ],
      edges: [
        { from: "public-tru", to: "tru", label: "~100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "kkr-post",     label: "KKR",           sub: "25% 에쿼티",    type: "fund"   },
        { id: "bain-post",    label: "베인캐피탈",    sub: "22.5% 에쿼티",  type: "fund"   },
        { id: "vornado-post", label: "보나도 리얼티", sub: "32.5% 에쿼티",  type: "fund"   },
        { id: "mgmt-post",    label: "경영진",        sub: "20% 에쿼티",    type: "entity" },
        { id: "tru-post",     label: "토이저러스 Inc", sub: "상장폐지, $53억 부채", type: "target" },
      ],
      edges: [
        { from: "kkr-post",     to: "tru-post", label: "25%" },
        { from: "bain-post",    to: "tru-post", label: "22.5%" },
        { from: "vornado-post", to: "tru-post", label: "32.5%" },
        { from: "mgmt-post",    to: "tru-post", label: "20%" },
      ],
    },
    keyTerms: [
      { label: "인수 방식",          value: "Go-Private LBO (현금 합병)",  accent: true  },
      { label: "인수 가격",          value: "주당 $26.75",                  accent: true  },
      { label: "에쿼티 투입",        value: "$13억 (에쿼티 비율 ~20%)",     accent: false },
      { label: "부채 조달",          value: "$53억 (TLB + RCF + 부동산 론)" },
      { label: "Entry Leverage",     value: "Debt/EBITDA ~6.2×"            },
      { label: "연간 이자",          value: "$400-450M 추정",               accent: true  },
      { label: "파산 신청",          value: "2017년 9월 챕터11",            accent: true  },
    ],
  },

  advisors: {
    body: "KKR 컨소시엄은 최정상급 LBO 어드바이저를 동원했다. 인수금융은 씨티그룹과 크레딧 스위스가 공동 주선했으며, 복수의 은행이 신디케이션에 참여했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "KKR / 베인캐피탈 / 보나도 컨소시엄",
        initials: "KKR",
        bg: "bg-blue-800",
        advisors: [
          { firm: "Citigroup", role: "LBO 인수금융 주선은행", roleType: "financial", note: "TLB 주선 북러너" },
          { firm: "Credit Suisse", role: "LBO 인수금융 공동 주선", roleType: "financial", note: "공동 북러너" },
          { firm: "Bear Stearns", role: "재무자문 (KKR)", roleType: "financial", note: "2008년 JP모건에 피인수" },
          { firm: "Simpson Thacher & Bartlett", role: "법률 자문 (KKR)", roleType: "legal", note: "LBO 전문 로펌" },
        ],
      },
      {
        side: "target",
        sideLabel: "토이저러스 이사회",
        initials: "TRU",
        bg: "bg-red-600",
        advisors: [
          { firm: "Merrill Lynch", role: "재무자문", roleType: "financial", note: "페어니스 오피니언 제공" },
          { firm: "Kirkland & Ellis", role: "법률 자문", roleType: "legal", note: "M&A 전문" },
          { firm: "Kirkland & Ellis", role: "파산 법률 자문 (2017)", roleType: "legal", note: "챕터11 절차 자문" },
        ],
      },
    ],
  },

  valuation: {
    body: "KKR 컨소시엄은 $26.75/주를 제시했으며, 이는 비영향 주가($23-24) 대비 약 15% 프리미엄이었다. EV/EBITDA 7.7×은 당시 소매 LBO 평균(7-8×) 수준이었으나, 낮은 에쿼티 쿠션(20%)과 높은 연간 이자 부담이 구조적 리스크였다. 핵심 문제는 가치평가 배수가 아닌 자본 구조였다.",
    rows: [
      { item: "에쿼티 가치",         val: "$30억",   note: "주당 $26.75 × 발행주식 1.12억 주",                 accent: false },
      { item: "기존 순차입금",        val: "+$36억",  note: "인수 시 인계받은 기존 부채",                       accent: false },
      { item: "총 기업 가치 (EV)",    val: "$66억",   note: "에쿼티 + 기존 순차입금",                           accent: true  },
      { item: "Entry EBITDA",        val: "$850M",   note: "FY2004 기준",                                      accent: false },
      { item: "Entry EV/EBITDA",     val: "7.7×",    note: "소매 LBO 평균 수준",                               accent: false },
      { item: "신규 LBO 부채",        val: "$53억",   note: "TLB $44억 + RCF $10억 + 기타",                    accent: true  },
      { item: "Debt/EBITDA (Entry)", val: "6.2×",    note: "위험 임계치(6×) 초과 — 소매업 특성상 고위험",      accent: true  },
    ],
    disclaimer: "수치는 공개 정보 및 파산 법원 제출 서류 기반 추정치.",
  },

  rationale: {
    buyer: {
      title: "KKR 컨소시엄 입장",
      initials: "KKR",
      bg: "bg-blue-800",
      points: [
        "완구 전문 소매의 '카테고리 킬러' 지위 — 브랜드 파워와 바잉 파워 유지 가능하다는 낙관적 판단",
        "보나도의 부동산 포트폴리오(매장 부지) 활용한 리얼에스테이트 가치 추출 전략",
        "공개 시장 대비 저평가 상태 — 아마존 소송 해결 시 가치 회복 기대",
        "상장폐지로 분기 실적 압박 제거 → 구조조정 및 경영 효율화 여력 확보",
        "중장기 IPO 또는 전략적 매각으로 3-5배 투자 수익 기대 (실제 실현 불가)",
      ],
    },
    seller: {
      title: "토이저러스 주주 입장",
      initials: "TRU",
      bg: "bg-red-600",
      points: [
        "비영향 주가 대비 +15% 프리미엄 — 인수 리스크 없는 즉각적 현금화",
        "아마존과의 소송·갈등 및 경쟁 심화 불확실성 회피",
        "매장 구조조정과 인력 감축 계획이 공개 기업으로서 실행하기 어려운 상황",
        "기관투자자 대다수 프리미엄에 만족 — 특별한 반대 없이 주주투표 통과",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2020년 (청산 완료 기준)",
    body: "KKR × 토이저러스 LBO는 레버리지드 바이아웃 실패의 정석 사례가 됐다. 12년 동안 이자를 내느라 투자 여력이 없었고, 디지털 전환에 실패했으며, 결국 아마존이 아니라 '이자'가 토이저러스를 죽였다는 비판이 지배적이다. 단, PE들은 LBO 초기에 부동산 가치를 분리해 일부 수익을 회수했다는 주장도 있다.",
    overallVerdict: "완전 실패 — 에쿼티 전액 손실, 33,000명 실업",
    positives: [
      "LBO 직후 비핵심 자산(해외 사업 일부, 부동산) 매각으로 일부 부채 축소",
      "보나도 리얼티는 부동산 포트폴리오 일부를 별도 처리해 에쿼티 일부 회수",
      "12년 비공개 기업 운영 → 상장 시장 변동성 없이 구조조정 시도 (결과적으로 불충분)",
    ],
    risks: [
      "에쿼티 $13억 전액 손실 — KKR·베인·보나도 모두 투자금 회수 실패",
      "TLB 대주단 회수율 $0.20-0.25/달러 수준 — 명목상 '시니어 담보' 대출의 현실",
      "33,000명 직원 전원 해고 — 소매 LBO의 사회적 비용 논란",
      "12년간 연 $400-450M 이자 지출 총 $5B+ — 이 자금이 디지털 투자에 썼다면?",
      "파산 후 '미국 최악의 PE 거래' 리스트 단골 사례로 등재",
    ],
    editorNote: "토이저러스 사례의 핵심 교훈은 단순하다: 소매업(낮은 EBITDA 마진, 높은 변동성)에 6× 이상의 레버리지를 얹으면 정상적인 경영 판단이 불가능해진다. $400M 이자 앞에서 $50M 디지털 투자 예산은 사치였다. 아마존이 없었더라도 토이저러스는 언젠가 이자 부담에 쓰러졌을 것이다.",
  },

  tombstone: {
    acquirerInitials: "KKR",
    acquirerBg: "bg-blue-800",
    targetInitials: "TRU",
    targetBg: "bg-red-600",
    acquirerName: "KKR / 베인캐피탈 / 보나도",
    targetName: "토이저러스 Inc",
    dealTitle: "토이저러스 LBO",
    dealSize: "$66억",
    dealSizeUSD: "$6.6bn",
    evEbitda: "7.7×",
    closeDate: "2005년 7월",
  },

  sources: [
    { id: 1, text: "Toys R Us (2005). Merger Agreement — KKR / Bain Capital / Vornado. March 2005." },
    { id: 2, text: "U.S. Bankruptcy Court (2017). In re Toys R Us, Inc. Chapter 11 Filing. September 19, 2017." },
    { id: 3, text: "New York Times (2018). Toys R Us to Shut Down All Its U.S. Stores. March 14, 2018." },
    { id: 4, text: "S&P Global (2017). Toys R Us Credit Rating Action — Default. September 2017." },
    { id: 5, text: "Moody's (2016). Toys R Us: Leveraged Loan Review and Covenant Analysis." },
    { id: 6, text: "Wall Street Journal (2018). The Toys R Us Bankruptcy: How PE Piled on Debt. April 2018." },
    { id: 7, text: "Harvard Business School (2019). Case Study: Toys R Us — Leveraged Buyout Gone Wrong." },
    { id: 8, text: "Bloomberg (2018). Toys R Us: How KKR, Bain, and Vornado's LBO Ended in Disaster. 2018." },
  ],

  seo: {
    title: "KKR 토이저러스 LBO — 레버리지드 바이아웃 실패 완전 해부",
    description: "2005-2018 토이저러스 LBO 실패 사례. $53억 부채가 디지털 투자를 막은 구조적 원인, 챕터11 파산, TLB 대주단 손실까지 LevFin 관점 완전 분석.",
    keywords: [
      "토이저러스", "KKR LBO", "레버리지드 바이아웃", "LBO 실패", "챕터11 파산",
      "TLB 대주단", "레버리지드론", "PE 투자 실패", "소매업 LBO", "LevFin",
      "Toys R Us bankruptcy", "leveraged buyout failure",
    ],
  },

  concepts: [
    {
      term: "텀론 B (Term Loan B, TLB)",
      href: "/market-101/levfin-hy-vs-loans",
      description: "LBO 핵심 부채 수단. 7년 만기, 코비넌트 없음(Cov-Lite), 기관투자자(CLO) 중심. 토이저러스 TLB $44억이 이자 부담의 주역.",
    },
    {
      term: "Debt/EBITDA (레버리지 배수)",
      href: "/market-101/levfin-credit-metrics",
      description: "기업의 부채 상환 능력 핵심 지표. 토이저러스 entry 6.2×는 소매업 특성상 과도했으며, 파산 직전 7.7×까지 악화됐다.",
    },
    {
      term: "이자보상배율 (Interest Coverage Ratio)",
      href: "/market-101/levfin-credit-metrics",
      description: "EBITDA ÷ 이자비용. 토이저러스는 만년 1.4-1.8× 수준 — 정상 기업이라면 3× 이상 요구. 디지털 투자 불가 구조의 핵심 지표.",
    },
    {
      term: "Go-Private LBO",
      description: "상장 기업을 비공개로 전환하는 레버리지드 바이아웃. 공개 시장 압박 없이 구조조정 가능하다는 장점이 있으나, 에쿼티 시장 접근 차단으로 유동성 리스크가 있다.",
    },
    {
      term: "TLB 회수율 (Recovery Rate)",
      href: "/market-101/levfin-distressed",
      description: "채무불이행 시 대주단이 원금 대비 실제로 받는 비율. 토이저러스 TLB 대주단은 $0.20-0.25/달러 수준 회수 — '선순위 담보'의 의미가 실질적으로 희석된 사례.",
    },
  ],

  faq: [
    {
      q: "토이저러스는 아마존 때문에 망한 건가요, 아니면 LBO 부채 때문인가요?",
      a: "둘 다 원인이지만, 근본 원인은 LBO 부채 구조입니다. 연간 $400-450M 이자 부담이 e커머스 투자를 원천 봉쇄했습니다. 월마트와 타깃도 아마존의 도전을 받았지만, 부채 부담 없이 수백억 달러를 디지털에 투자할 수 있었습니다. 토이저러스는 '아마존이 없었어도' 이자 부담으로 언젠가는 무너질 구조였습니다.",
    },
    {
      q: "KKR·베인캐피탈은 토이저러스 LBO에서 얼마나 손해를 봤나요?",
      a: "투입한 에쿼티 $13억 전액을 손실했습니다. 단, LBO 초기에 부동산 포트폴리오 분리(세일-리스백 등)로 일부 현금을 회수했다는 주장도 있습니다. TLB 대주단 역시 원금 대비 $0.20-0.25/달러 수준으로 회수했습니다.",
    },
    {
      q: "토이저러스 파산에서 TLB 대주단이 선순위임에도 손실이 난 이유는?",
      a: "담보 자산(재고, 부동산)의 청산 가치가 $52억 부채를 커버하지 못했습니다. 소매업 청산의 특성상 재고 처분 시 대폭 할인이 불가피하고, 매장 임차 부채(리스)도 우선 해결해야 했습니다. '선순위 담보'라도 담보 가치가 부채보다 낮으면 손실이 납니다.",
    },
    {
      q: "Debt/EBITDA 6.2×는 왜 소매업에서 특히 위험한가요?",
      a: "소매업은 경기 민감성이 높고 마진이 낮습니다. EBITDA 마진이 7-8%에 불과해 경기 하락 시 EBITDA가 빠르게 감소하면서 레버리지 배수가 급등합니다. 반면 기술 기업(마진 30-40%)이나 헬스케어(안정적 현금흐름)에서 6×는 상대적으로 관리 가능합니다. 소매 LBO에서는 4× 이하가 안전 마진입니다.",
    },
  ],

  // ── LevFin 관점 오버레이 ─────────────────────────────────────
  levfinOverview: {
    angle: "레버리지드 바이아웃의 빚의 덫 — 연 $4억 이자가 12년간 미래 투자를 막다",
    body: "토이저러스 LBO에서 부채 구조를 해부하면 레버리지드 파이낸스의 가장 무서운 교훈이 드러난다. $53억 부채, 연 $400M+ 이자, 그리고 그 앞에서 무력해진 디지털 투자 예산. TLB 대주단은 '선순위'였지만 회수율은 $0.20-0.25에 그쳤고, PE는 에쿼티 $13억을 전액 잃었다. 이 딜이 LevFin 신용 분석가들이 '소매업 레버리지 임계치'를 논할 때마다 꺼내드는 이유다.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "$4.4B",
        rate: "LIBOR + 350bp",
        maturity: "7년",
        seniority: "senior-secured",
        pct: 67,
        color: "bg-amber-500",
      },
      {
        name: "Revolving Credit Facility",
        amountDisplay: "$1.0B",
        rate: "LIBOR + 250bp",
        maturity: "5년",
        seniority: "senior-secured",
        pct: 15,
        color: "bg-amber-400",
      },
      {
        name: "Real Estate Mortgage Loan",
        amountDisplay: "$0.9B",
        rate: "Fixed ~6%",
        maturity: "10년",
        seniority: "senior-secured",
        pct: 13,
        color: "bg-orange-500",
      },
      {
        name: "에쿼티 (PE + 경영진)",
        amountDisplay: "$1.3B",
        rate: "N/A",
        maturity: "N/A",
        seniority: "equity",
        pct: 5,
        color: "bg-emerald-500",
      },
    ],
    metrics: [
      { label: "Entry Leverage",       value: "6.2×",     sub: "Debt/EBITDA at close",      isAlert: true  },
      { label: "연간 이자 부담",        value: "$400M+",   sub: "EBITDA의 60-70% 소진",       isAlert: true  },
      { label: "이자보상배율 (ICR)",    value: "1.5-1.8×", sub: "정상 기준 3× 이상 필요",     isAlert: true  },
      { label: "TLB 회수율 (파산 시)",  value: "~$0.22",   sub: "원금 $1 대비 22센트 회수",   isAlert: true  },
    ],
    lessons: [
      {
        icon: "⚖️",
        title: "소매업 레버리지 임계치 — 6× 이상은 구조적 함정",
        body: "소매업은 마진이 낮고(EBITDA 마진 7-8%) 경기 변동에 민감하다. 6× 이상 레버리지에서 이자 부담이 EBITDA의 60%+ 를 잡아먹으면, 새로운 경쟁자(아마존)가 출현할 때 대응 투자가 불가능해진다. 토이저러스의 신용 분석가가 '업종 조정 레버리지 임계치'를 확인했어야 했다.",
      },
      {
        icon: "💸",
        title: "TLB는 선순위지만 청산 가치를 이기지 못한다",
        body: "TLB는 '1순위 담보'를 설정하지만, 담보 자산(재고·부동산)의 청산 가치가 부채를 커버하지 못하면 회수율은 급락한다. 소매 LBO의 담보 가치는 계속기업 가정 하에 계산됐지만, 실제 청산 시 재고는 50-70% 할인되고 임차권은 부채가 된다. 토이저러스 TLB 회수율 $0.22는 이 구조적 오류를 보여준다.",
      },
      {
        icon: "🔒",
        title: "LBO = 미래 투자 옵션의 박탈",
        body: "LBO 이후 토이저러스는 새로운 투자를 위해 어떤 자본도 조달하기 어려웠다. IG 기업이라면 채권 시장에서 빠르게 자금을 조달하겠지만, 토이저러스는 고금리 HY 발행이나 추가 부채만 가능했다. 레버리지드 론 시장은 '경영 개선을 위한 추가 자금'보다는 '기존 부채 리파이낸싱'만 제공하는 경향이 있다.",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-credit-metrics",
        chapterNum: "Ch.2",
        title: "신용지표 분석",
        whyRelevant: "Debt/EBITDA 6.2×, ICR 1.5×가 왜 소매업에서 파산 신호였는지",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "부실 기업 & 채무 재조정",
        whyRelevant: "TLB 회수율 $0.22, 챕터11 절차, 청산 vs 재건 선택 실사례",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "주요 케이스스터디",
        whyRelevant: "소매 LBO 실패의 교과서 — 레버리지드론이 기업을 어떻게 가두는가",
      },
    ],
  },
};

export default deal;
