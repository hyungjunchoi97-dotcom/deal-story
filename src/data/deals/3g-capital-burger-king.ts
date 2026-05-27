/**
 * 3G Capital × Burger King (2010–2014)
 * 제로기반예산(ZBB)의 교과서 — 비용 절감 + 재가맹점화로 만든 PE 수익
 * $4.0B LBO → 2012 재상장 → Tim Hortons 합병 → Restaurant Brands International(RBI)
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "3g-capital-burger-king",
  title: "버거킹을 글로벌 프랜차이즈 제국으로 만든 3G Capital의 비용 절감 공식",
  subtitle: "$40억 LBO → ZBB 도입 + 재가맹점화 → Tim Hortons 합병 → Restaurant Brands International",
  category: "ma",
  industry: "식음료 / 패스트푸드 프랜차이즈",
  country: "미국",
  announcedAt: "2010-09-02",
  closedAt: "2010-10-19",
  announcedDisplay: "2010년 9월",
  closedDisplay: "2010년 10월",
  readingMinutes: 10,
  tags: [
    "3G Capital", "버거킹", "Burger King", "ZBB", "제로기반예산",
    "LBO", "프랜차이즈", "재가맹점화", "Tim Hortons", "RBI",
    "Restaurant Brands International", "PE", "사모펀드", "Jorge Paulo Lemann",
    "오퍼레이션알파", "비용절감",
  ],
  excerpt:
    "2010년 3G Capital이 Burger King을 $40억에 인수했다. 브라질 PE 3G Capital(Jorge Paulo Lemann)의 '제로기반예산(ZBB)' 도입으로 G&A 비용을 50% 삭감했다. 2012년 재상장 후 2014년 Tim Hortons과 합병해 Restaurant Brands International(RBI)을 설립. 이후 Popeyes 인수(2017)까지 — 비용 절감과 재가맹점화로 프랜차이즈 제국을 만든 3G식 LBO의 교과서.",

  acquirer: { initials: "3G", bg: "bg-red-700", label: "3G Capital Partners" },
  target:   { initials: "BK", bg: "bg-yellow-500", label: "Burger King Worldwide, Inc." },

  background: [
    "Burger King은 세계 2위 햄버거 패스트푸드 체인으로, 2010년 당시 12,000개 이상의 레스토랑을 전 세계에서 운영했다. 그러나 경쟁사 McDonald's 대비 마케팅·혁신 투자가 부족하고 본사 조직이 비대해 수익성이 낮았다. 2002년 Diageo로부터 분리 IPO 이후 TPG·Bain·Goldman PE 소유를 거쳤다.",
    "Jorge Paulo Lemann이 이끄는 3G Capital은 브라질 맥주 회사 AmBev·InBev(현 AB InBev)를 만든 것으로 유명한 PE 펀드다. 3G의 트레이드마크는 '제로기반예산(Zero-Based Budgeting, ZBB)' — 모든 비용을 전년도 기준이 아닌 '0'에서 재심사해 불필요한 지출을 철저히 제거하는 방식이다.",
    "2010년 $40억 인수 직후 3G Capital은 본사 직원 수를 25% 감원하고, G&A 비용을 50% 삭감했다. 동시에 직영 매장을 프랜차이즈로 전환(refranchising)해 자산 경량화를 추진했다. 2012년 재상장(NYSE: BKW) 후 2014년 Tim Hortons과 합병해 Restaurant Brands International(RBI, TSX·NYSE: QSR)을 설립했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$40억",
    acquirerName: "3G Capital Partners",
    targetName: "Burger King Worldwide, Inc.",
    announcedDisplay: "2010년 9월 2일",
    closedDisplay: "2010년 10월 19일",
    country: "미국 (NYSE: BKC → 비상장 → NYSE: BKW → NYSE/TSX: QSR)",
  },

  executiveSummary: [
    "3G Capital이 Burger King을 $40억($24/주)에 인수 — EV/EBITDA ~9.5×.",
    "ZBB 도입: 직원 25% 감원, G&A 비용 50% 삭감 → EBITDA 마진 급개선.",
    "재가맹점화(Refranchising): 직영 매장 →프랜차이즈 전환 → 자산 경량화 + FCF 개선.",
    "2012년 NYSE 재상장(BKW). 2014년 Tim Hortons($11.4B) 합병 → Restaurant Brands International.",
    "2017년 Popeyes 인수($1.8B) — 3G식 글로벌 프랜차이즈 제국 완성.",
  ],

  industryOverview: {
    body: "글로벌 QSR(Quick Service Restaurant) 시장은 McDonald's·Burger King·Wendy's·KFC·Subway 등 대형 체인이 지배하는 과점 시장이다. 핵심 수익 모델은 프랜차이즈 로열티(매출의 4-6%)와 부동산 임대 수익으로, 직영보다 자산 경량·안정 수익이 특징이다. 3G Capital은 QSR에서 프랜차이즈 비율 확대가 장기 EBITDA 마진을 끌어올린다는 thesis를 실행했다.",
    metrics: [
      { label: "글로벌 QSR 시장 규모",  value: "~$2,700억", sub: "2010년 기준" },
      { label: "Burger King 매장 수",   value: "12,000개+", sub: "인수 시점, 65개국" },
      { label: "G&A 비용 절감",         value: "-50%",      sub: "ZBB 도입 후 2년 이내" },
      { label: "RBI 시가총액 (2020)",   value: "~$190억",   sub: "Burger King + Tim Hortons + Popeyes" },
    ],
    players: [
      { name: "McDonald's",                 role: "글로벌 QSR 1위, 90%+ 프랜차이즈" },
      { name: "Burger King (3G Capital)",   role: "글로벌 QSR 2위 햄버거 체인, LBO 대상" },
      { name: "Tim Hortons (후 RBI)",       role: "캐나다 최대 커피·베이커리 체인, 2014년 합병" },
      { name: "Wendy's",                    role: "미국 QSR 3위 햄버거 체인" },
    ],
  },

  companyOverview: {
    targetName: "Burger King Worldwide, Inc.",
    body: "1954년 플로리다에서 설립된 세계 2위 햄버거 QSR 체인. 인수 당시 매장의 ~90%가 프랜차이즈였지만, 본사 G&A 비용이 매출 대비 과도하게 높았다. 경쟁사 McDonald's 대비 신메뉴 개발·마케팅 투자가 부진했고, 오퍼레이션 효율도 낮았다. 3G Capital 인수 전 EBITDA 마진은 ~27%였으나, ZBB 도입 후 수년 내 40%+를 달성했다.",
    metrics: [
      { label: "LBO 딜 가치",         value: "$4.0B",    sub: "EV/EBITDA ~9.5×" },
      { label: "프랜차이즈 비율 (인수시)", value: "~90%", sub: "ZBB 후 100% 근접" },
      { label: "EBITDA 마진 개선",    value: "27%→40%+", sub: "ZBB + 재가맹점화 효과" },
      { label: "RBI 시총 (2020)",     value: "~$190억",  sub: "3개 브랜드 합산" },
    ],
    financials: [
      {
        year: "FY2009",
        revenue: 2537,
        cogs: 1620,
        grossProfit: 917,
        sga: 510,
        operatingIncome: 407,
        ebitda: 520,
      },
      {
        year: "FY2010",
        revenue: 2502,
        cogs: 1590,
        grossProfit: 912,
        sga: 490,
        operatingIncome: 422,
        ebitda: 540,
      },
      {
        year: "FY2012",
        revenue: 2256,
        cogs: 1370,
        grossProfit: 886,
        sga: 310,
        operatingIncome: 576,
        ebitda: 680,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2012는 재상장 직전. 매출은 직영→프랜차이즈 전환으로 감소했으나(직영 매출 제거), EBITDA는 G&A 절감으로 증가 → EBITDA 마진 대폭 개선. 이것이 재가맹점화의 핵심 재무 효과.",
  },

  dealStructure: {
    body: "에쿼티 $14억(~35%) + TLB·HY채권 $26억(~65%)의 전형적 QSR LBO 구조. 프랜차이즈 비즈니스 특성상 실물자산이 적어 레버리지가 소매/호텔 LBO 대비 낮다. ZBB를 통한 EBITDA 마진 개선이 레버리지 상환의 핵심.",
    preOwnership: {
      nodes: [
        { id: "tpg",  label: "TPG·Bain·Goldman PE", sub: "직전 PE 주주 (2002-2010)",  type: "fund"   },
        { id: "bk",   label: "Burger King",         sub: "12,000개+ 레스토랑",        type: "target" },
      ],
      edges: [
        { from: "tpg", to: "bk", label: "PE 지분 보유 후 IPO 재상장" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "3g",   label: "3G Capital",     sub: "에쿼티 $14억 (~35%)",         type: "fund"   },
        { id: "tlb2", label: "TLB 대주단",     sub: "~$16억 (변동금리, 1순위)",    type: "entity" },
        { id: "hy2",  label: "HY 채권자",      sub: "~$10억 (고정금리, 무담보)",   type: "entity" },
        { id: "bk2",  label: "Burger King",   sub: "비상장, ZBB+재가맹점화 추진", type: "target" },
      ],
      edges: [
        { from: "3g",   to: "bk2", label: "에쿼티 35%" },
        { from: "tlb2", to: "bk2", label: "$16억 (1L 담보)" },
        { from: "hy2",  to: "bk2", label: "$10억 (무담보)" },
      ],
    },
    keyTerms: [
      { label: "딜 가치",              value: "$4.0B (EV/EBITDA ~9.5×)",            accent: true  },
      { label: "ZBB 목표",             value: "G&A 50% 삭감, 직원 25% 감원",        accent: true  },
      { label: "재가맹점화 목표",      value: "직영→프랜차이즈 100% 근접",          accent: true  },
      { label: "Tim Hortons 합병",     value: "$11.4B (2014) → RBI 설립",           accent: true  },
      { label: "Popeyes 인수 (2017)",  value: "$1.8B — 3번째 브랜드 추가",          accent: false },
    ],
  },

  advisors: {
    body: "3G Capital은 JP Morgan을 어레인저로, Paul Weiss를 법률자문으로 활용했다. 딜 규모($40억)가 상대적으로 작아 자문 구성이 간단했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "3G Capital (인수자)",
        initials: "3G",
        bg: "bg-red-700",
        advisors: [
          { firm: "JP Morgan",      role: "수석 어레인저·재무자문", roleType: "financial", note: "TLB·HY 신디케이션 주관" },
          { firm: "Paul Weiss",     role: "법률 자문",              roleType: "legal",     note: "LBO 구조 설계" },
        ],
      },
      {
        side: "target",
        sideLabel: "Burger King (매각 측 PE: TPG·Bain·Goldman)",
        initials: "TPG",
        bg: "bg-gray-600",
        advisors: [
          { firm: "Morgan Stanley",   role: "재무 자문",  roleType: "financial", note: "매각 프로세스" },
          { firm: "Cleary Gottlieb",  role: "법률 자문", roleType: "legal",     note: "매각 자문" },
        ],
      },
    ],
  },

  valuation: {
    body: "3G Capital은 Burger King을 EV/EBITDA ~9.5×(FY2010 기준)에 인수. ZBB 도입으로 2년 내 EBITDA를 40%+ 마진으로 끌어올릴 수 있다고 판단했다. 실제로 달성했다.",
    rows: [
      { item: "Entry EV",             val: "$4.0B",   note: "EV/EBITDA ~9.5×",                   accent: true  },
      { item: "ZBB 후 EBITDA 마진",   val: "40%+",   note: "인수 시 27% → ZBB 도입 후 40%+",    accent: true  },
      { item: "재상장 시 EV (2012)",   val: "~$5.5B", note: "NYSE: BKW 기준",                     accent: false },
      { item: "RBI 시총 (2020)",       val: "~$190억", note: "BK + TH + Popeyes 합산",            accent: true  },
    ],
    disclaimer: "3G Capital의 내부 수익률은 비공개. 시장 추정 MOIC ~3-4×, IRR ~25%+ 수준.",
  },

  rationale: {
    buyer: {
      title: "3G Capital 투자 논리",
      initials: "3G",
      bg: "bg-red-700",
      points: [
        "ZBB 실행력: AB InBev에서 증명된 3G식 비용 절감 → Burger King G&A 50% 절감 가능",
        "재가맹점화: 직영 매장 → 프랜차이즈 전환으로 자본 집약도 낮추고 FCF 개선",
        "글로벌 확장: 프랜차이즈 모델로 브랜드 수출 비용 없이 해외 성장 → 로열티 수익 증대",
        "M&A 플랫폼: Burger King을 기반으로 글로벌 QSR 체인 인수·통합 플랫폼 구축",
        "저평가: 경쟁사 McDonald's 대비 낮은 EBITDA 마진 → 개선 여지 명확",
      ],
    },
    seller: {
      title: "TPG·Bain·Goldman (기존 PE 주주) 매각 논리",
      initials: "TPG",
      bg: "bg-gray-600",
      points: [
        "2002년 인수 후 8년 — 펀드 회수 기간 도래",
        "재상장(2006) 후에도 McDonald's 대비 성과 부진 — 추가 개선 여지 제한적",
        "3G의 $24/주 공개 매수가가 적절한 프리미엄 제공",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2020년 (RBI 성숙 기준)",
    body: "3G Capital의 Burger King 딜은 '비용 절감과 재가맹점화만으로도 LBO에서 탁월한 수익이 가능하다'는 것을 증명했다. ZBB는 단기 직원 사기를 낮추는 부작용이 있었지만, EBITDA 마진을 40%+로 끌어올리는 데 성공했다. Tim Hortons 합병과 Popeyes 인수로 글로벌 멀티브랜드 QSR 그룹으로 성장한 RBI는 3G식 M&A 플랫폼의 산물이다.",
    overallVerdict: "성공적 오퍼레이션 LBO — ZBB + 재가맹점화 + M&A 플랫폼의 완벽한 실행",
    positives: [
      "ZBB 도입 후 G&A 50% 삭감 — EBITDA 마진 27%→40%+",
      "재가맹점화: 직영 매장 거의 0에 가깝게 전환 → 자산 경량화 완성",
      "Tim Hortons + Popeyes 인수로 3개 브랜드 글로벌 QSR 제국 완성",
      "2020년 RBI 시총 ~$190억 — 3G 초기 투자 $14억 대비 압도적 가치 창출",
    ],
    risks: [
      "ZBB 과잉 적용 논란: 마케팅·R&D 과도한 삭감 → 신메뉴 혁신 부진, McDonald's 대비 성장 둔화",
      "팬데믹(2020): QSR 전 브랜드 동시 타격 → RBI 시총 급락",
      "Tim Hortons 캐나다 가맹점 갈등: ZBB로 마케팅 지원 축소 → 가맹점 소송 사태",
    ],
    editorNote: "3G Capital × Burger King의 핵심 교훈: '오퍼레이션 알파는 반드시 EBITDA 성장이 아니어도 된다 — 비용 절감으로도 동일한 레버 효과를 만들 수 있다.' 단, ZBB의 과잉 적용은 장기 브랜드 경쟁력을 훼손한다. Dollar General이 '비용 절감 + 성장'을 동시에 달성한 것과 달리, Burger King은 '비용 절감 → EBITDA 개선 → 수익'이라는 단선적 경로를 택했다.",
  },

  tombstone: {
    acquirerInitials: "3G",
    acquirerBg: "bg-red-700",
    targetInitials: "BK",
    targetBg: "bg-yellow-500",
    acquirerName: "3G Capital Partners",
    targetName: "Burger King Worldwide",
    dealTitle: "3G Capital × Burger King LBO",
    dealSize: "$40억",
    dealSizeUSD: "$4.0bn",
    evEbitda: "9.5×",
    closeDate: "2010년 10월",
  },

  sources: [
    { id: 1, text: "Burger King Holdings (2010). Merger Agreement — 3G Capital Acquisition. September 2010." },
    { id: 2, text: "Burger King Worldwide (2012). NYSE: BKW IPO Prospectus. June 2012." },
    { id: 3, text: "Restaurant Brands International (2014). Tim Hortons Merger Completion Press Release. December 2014." },
    { id: 4, text: "Wall Street Journal (2014). 3G Capital's Recipe: Slash Costs, Sell Burgers Globally. August 2014." },
    { id: 5, text: "Harvard Business School (2013). 3G Capital and Burger King. HBS Case 9-313-112." },
    { id: 6, text: "Bloomberg (2017). Burger King Owner Buys Popeyes for $1.8 Billion. February 2017." },
    { id: 7, text: "Financial Times (2019). The 3G Capital Way: Zero-Based Budgeting and Its Limits. 2019." },
    { id: 8, text: "Moody's (2010). Burger King Holdings — Rating Action on LBO. October 2010." },
  ],

  seo: {
    title: "3G Capital × Burger King LBO — ZBB 비용 절감과 재가맹점화로 프랜차이즈 제국을 만든 방법",
    description: "2010년 3G Capital Burger King $40억 LBO 완전 분석. 제로기반예산(ZBB) 도입, G&A 50% 삭감, 재가맹점화, Tim Hortons 합병 → Restaurant Brands International 설립까지.",
    keywords: [
      "3G Capital", "Burger King", "ZBB", "제로기반예산", "LBO",
      "프랜차이즈", "재가맹점화", "Tim Hortons", "RBI", "Popeyes",
      "PE", "사모펀드", "오퍼레이션알파", "비용절감",
    ],
  },

  concepts: [
    {
      term: "제로기반예산 (Zero-Based Budgeting, ZBB)",
      href: "/deal-101/lbo-overview",
      description: "모든 비용 항목을 전년도 실적 기준이 아닌 '0'에서 재심사해 필요성을 정당화해야 하는 예산 편성 방식. 3G Capital이 AB InBev, Kraft Heinz, Burger King에 적용해 G&A 비용을 50%+ 삭감했다. 단기적으로 강력한 EBITDA 개선 효과가 있지만, 과잉 적용 시 투자·혁신이 위축될 수 있다.",
    },
    {
      term: "재가맹점화 (Refranchising)",
      href: "/deal-101/lbo-overview",
      description: "QSR·소매 기업이 직영 매장을 프랜차이즈로 전환하는 전략. 직영 매장의 높은 자본·운영 비용을 제거하고, 안정적인 로열티·임대 수익으로 전환. EBITDA 마진이 대폭 상승하고 FCF가 개선된다. McDonald's(95%+), Burger King(99%+)이 대표 사례.",
    },
    {
      term: "M&A 플랫폼 전략",
      href: "/deal-101/platform-strategy",
      description: "PE가 인수한 기업을 기반으로 유사 기업을 추가 인수해 규모를 키우는 전략. 3G Capital은 Burger King → Tim Hortons 합병 → Popeyes 인수로 글로벌 멀티브랜드 QSR 그룹(RBI)을 구축했다. 인수 비용이 규모 증가와 함께 낮아지는 스케일 효과가 핵심.",
    },
    {
      term: "프랜차이즈 EBITDA 마진의 역설",
      href: "/deal-101/lbo-returns",
      description: "재가맹점화 이후 총 매출은 줄지만(직영 매출 제거) EBITDA 절대액이 유지·증가하면 EBITDA 마진(%)은 급등한다. McDonald's의 EBITDA 마진 50%+, Burger King 40%+는 이 '마진 착시'의 결과이기도 하다. LBO 수익 계산 시 직영→프랜차이즈 전환 효과를 별도로 분리해 분석해야 한다.",
    },
    {
      term: "세금 역전 거래 (Tax Inversion)",
      href: "/deal-101/ma-process",
      description: "미국 기업이 세율이 낮은 외국 기업과 합병해 본사를 그 국가로 이전, 미국 법인세율을 회피하는 구조. 3G Capital이 Tim Hortons(캐나다) 합병 시 RBI 본사를 캐나다 오크빌에 설치한 것이 세금 역전 구조라는 논란이 있었다. Obama 행정부가 세금 역전 규제를 강화한 계기가 됐다.",
    },
  ],

  faq: [
    {
      q: "ZBB(제로기반예산)가 Burger King에서 어떻게 작동했나요?",
      a: "3G Capital 인수 직후 모든 비용 항목에 대해 '이 지출이 정말 필요한가?'를 0에서 재심사했습니다. 사무실 비품도 임원급 이상만 구매 가능하도록 제한했고, 항공기는 비즈니스석 대신 이코노미, 출장비는 사전 승인 필수 등 극도로 엄격한 비용 통제를 실시했습니다. G&A 인력을 25% 감원하고 비용을 50% 이상 삭감했습니다. EBITDA 마진은 인수 시 27%에서 2년 만에 40%+로 뛰었습니다.",
    },
    {
      q: "3G Capital이 Tim Hortons 합병을 추진한 전략적 이유는?",
      a: "두 가지 전략적 목적이 있었습니다. 첫째, 브랜드 다각화: 햄버거(점심·저녁) + 커피·베이커리(아침·간식)로 하루 전 시간대를 커버하는 포트폴리오 완성. 둘째, 지역 보완: Burger King은 미국·남미 강세, Tim Hortons는 캐나다 절대적 1위. 두 브랜드를 합치면 북미 전역에서 균형 잡힌 QSR 그룹이 됩니다. 세금 역전(캐나다 법인세 인하) 효과도 부수적으로 거론됐습니다.",
    },
    {
      q: "ZBB의 한계는 무엇인가요?",
      a: "ZBB는 단기 EBITDA 개선에는 강력하지만 장기 브랜드 경쟁력을 위협할 수 있습니다. Burger King의 경우 마케팅·신메뉴 개발비가 삭감되면서 McDonald's 대비 혁신 속도가 느려졌습니다. Tim Hortons에서는 캐나다 가맹점들이 마케팅 지원 축소와 메뉴 가격 인상을 놓고 3G·RBI와 소송까지 갔습니다. '비용을 최대로 줄이면 단기 이익은 나지만, 브랜드에 투자를 줄이면 장기 성장이 둔화된다'는 점이 ZBB의 딜레마입니다.",
    },
    {
      q: "3G Capital × Burger King과 KKR × Dollar General — 오퍼레이션 알파의 두 가지 방식 차이는?",
      a: "두 딜 모두 오퍼레이션 개선으로 EBITDA를 높인 성공 LBO지만 접근이 달랐습니다. Dollar General은 '비용 절감 + 매출 성장(신규 매장, 식품 카테고리 확장)'을 동시에 추구했습니다. Burger King은 '비용 절감에 집중(ZBB)'하고 매출 성장은 글로벌 프랜차이즈 확장에 의존했습니다. 전자는 오가닉 성장과 비용 개선의 균형, 후자는 마진 극대화 후 M&A 플랫폼으로 성장하는 방식입니다.",
    },
  ],

  levfinOverview: {
    angle: "오퍼레이션 알파형 LBO — ZBB로 EBITDA를 키워 레버리지를 상환하는 구조",
    body: "Burger King LBO는 자산 담보(Hilton)나 반주기 EBITDA(Dollar General)가 아닌, 순수한 '비용 절감 실행력'으로 레버리지를 상환하는 오퍼레이션 알파형 LBO의 교과서다. Entry Debt/EBITDA ~4.8×은 상대적으로 낮았지만, ZBB로 EBITDA를 40%+ 개선하면서 2년 만에 실질 레버리지가 3× 이하로 낮아졌다.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "~$1.6B",
        rate: "LIBOR+400bps (변동)",
        maturity: "7년",
        seniority: "senior-secured",
        pct: 40,
        color: "bg-red-500",
      },
      {
        name: "리볼빙 크레딧 퍼실리티",
        amountDisplay: "$0.3B",
        rate: "LIBOR+350bps",
        maturity: "5년",
        seniority: "senior-secured",
        pct: 8,
        color: "bg-red-400",
      },
      {
        name: "HY Senior Notes",
        amountDisplay: "~$1.0B",
        rate: "9.875% (고정)",
        maturity: "8년",
        seniority: "senior-unsecured",
        pct: 25,
        color: "bg-orange-500",
      },
      {
        name: "에쿼티 (3G Capital)",
        amountDisplay: "$1.4B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 35,
        color: "bg-yellow-400",
      },
    ],
    metrics: [
      { label: "Entry Debt/EBITDA",   value: "~4.8×",   sub: "QSR 프랜차이즈 — 낮은 레버리지",   isAlert: false },
      { label: "EBITDA 마진 개선",    value: "+13%p",   sub: "27%→40%+ (ZBB + 재가맹점화)",      isAlert: false },
      { label: "MOIC (추정)",         value: "~3-4×",   sub: "재상장 + Tim Hortons 합병 가치",    isAlert: false },
      { label: "G&A 절감률",          value: "-50%",    sub: "ZBB 도입 2년 이내 달성",           isAlert: false },
    ],
    lessons: [
      {
        icon: "✂️",
        title: "ZBB — 비용이 EBITDA를 만든다",
        body: "Dollar General처럼 매출을 늘리지 않아도, 비용을 충분히 줄이면 EBITDA가 성장한다. 3G는 ZBB로 2년 만에 EBITDA 마진을 13%p 개선했다. 레버리지드 구조에서 이 개선이 Debt/EBITDA를 빠르게 낮추고, 재파이낸싱 비용을 줄이며, Exit Multiple을 높이는 연쇄 효과를 만든다.",
      },
      {
        icon: "🏪",
        title: "재가맹점화 = LBO와 찰떡궁합",
        body: "직영 매장은 자본·운영비가 높고 EBITDA 마진이 낮지만, 프랜차이즈 로열티는 거의 100% 마진에 가깝다. LBO 후 직영→프랜차이즈 전환은 ① 자본 회수 ② EBITDA 마진 급등 ③ FCF 개선의 3중 효과를 낸다. McDonald's, Burger King, Yum Brands가 모두 이 경로를 택했다.",
      },
      {
        icon: "🌐",
        title: "M&A 플랫폼 — 한 번 구축하면 추가 딜이 쉬워진다",
        body: "3G Capital은 Burger King을 ZBB·재가맹점화 플랫폼으로 만든 후, 동일한 방법론을 Tim Hortons, Popeyes에 적용했다. '방법론이 이식 가능한 기업'을 인수하면, 이후 추가 인수 대상에 같은 플레이북을 실행해 수익을 복제할 수 있다. 이것이 3G식 M&A 플랫폼의 핵심이다.",
      },
    ],
    relatedChapters: [
      {
        slug: "lbo-returns",
        chapterNum: "Ch.2",
        title: "LBO 리턴 분석",
        whyRelevant: "ZBB + 재가맹점화 = EBITDA 개선 → 레버리지 감소 → Multiple Expansion — 오퍼레이션 알파의 수익 분해",
      },
      {
        slug: "lbo-overview",
        chapterNum: "Ch.0",
        title: "LBO의 본질",
        whyRelevant: "QSR 프랜차이즈 — LBO 이상적 타겟 기준(안정 현금흐름·낮은 Capex·명확한 개선 여지) 완벽 충족",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "LevFin 케이스 스터디",
        whyRelevant: "Dollar General(매출 성장형 알파) vs Burger King(비용 절감형 알파) — 오퍼레이션 알파의 두 가지 방식",
      },
    ],
  },
};

export default deal;
