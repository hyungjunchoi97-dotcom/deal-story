/**
 * Bain Capital × Domino's Pizza LBO (1998–2004)
 * 운영 알파(operating alpha)의 교과서 — 지친 창업주, 저투자 운영, 강한 프랜차이즈 모델
 *
 * 스폰서 중심 서사: Bain의 컨설팅 DNA로 매장 운영과 마케팅을 재구축,
 * David Brandon CEO 영입 → "Pizza Turnaround" 캠페인 → 2004년 IPO로 부분 회수.
 */
import type { LboDeal } from "@/lib/lbo-deal-data";

const deal: LboDeal = {
  slug: "bain-dominos-1998",
  category: "lbo",

  title: "Bain Capital은 어떻게 도미노피자 LBO로 운영 알파(operating alpha)의 교과서를 썼나",
  titleEn: "How Bain Capital Turned Domino's Pizza Into the Textbook Operating-Alpha LBO",
  subtitle:
    "지친 창업주 인수 · 컨설팅형 PE 플레이북 · David Brandon CEO · Pizza Turnaround · 2004년 IPO 부분 회수",
  subtitleEn:
    "Tired Founder Buyout · Consulting-Style PE Playbook · CEO David Brandon · Pizza Turnaround · 2004 IPO Partial Exit",

  industry: "QSR / 패스트푸드",
  industryEn: "QSR / Fast Food",
  country: "미국",
  announcedAt: "1998-09-25",
  closedAt: "1998-12-21",
  announcedDisplay: "1998년 9월",
  closedDisplay: "1998년 12월",
  readingMinutes: 14,
  tags: [
    "Domino's",
    "도미노피자",
    "Bain Capital",
    "John Connaughton",
    "Mitt Romney",
    "LBO",
    "프랜차이즈",
    "QSR",
    "운영 알파",
    "Operating Alpha",
    "David Brandon",
    "1998 LBO",
    "Pizza Turnaround",
    "IPO 엑싯",
  ],
  excerpt:
    "Bain Capital이 1998년 도미노피자를 $1.0B에 인수했다. 창업자 Tom Monaghan은 이미 회사에 지쳐 있었고 매장은 저투자 상태였지만 프랜차이즈 모델 자체는 견고했다. Bain은 자사 컨설팅 DNA를 그대로 운영에 이식 — David Brandon을 CEO로 영입하고, 매장 리노베이션, Heat Wave 배달백, 주문 기술, 재료 일관성을 표준화했다. 6년 만에 2004년 IPO로 부분 회수, 약 3x MOIC와 25% IRR. 도미노는 이후 시총 $50B+의 QSR 턴어라운드 역사상 최고 사례가 된다.",
  excerptEn:
    "In 1998 Bain Capital bought Domino's Pizza for $1.0B. Founder Tom Monaghan was already exhausted, stores were under-invested, but the franchise model itself was rock-solid. Bain transplanted its consulting DNA into operations — recruited David Brandon as CEO, standardized store renovations, the Heat Wave delivery bag, ordering technology, and ingredient consistency. Six years later Bain partially exited via the 2004 IPO at ~3x MOIC and ~25% IRR. Domino's would go on to become one of the great QSR turnarounds, eventually exceeding $50B in market cap.",

  fund: {
    initials: "BC",
    bg: "bg-rose-700",
    label: "Bain Capital",
    labelEn: "Bain Capital",
  },
  portfolio: {
    initials: "DPZ",
    bg: "bg-blue-700",
    label: "Domino's Pizza, Inc.",
    labelEn: "Domino's Pizza, Inc.",
  },

  lboMetrics: {
    fundName: "Bain Capital Fund VI",
    fundNameEn: "Bain Capital Fund VI",
    entryYear: 1998,
    exitYear: 2004,

    entryEvBn: 1.0,
    exitEvBn: 2.4,
    entryEbitdaBn: 0.07,
    exitEbitdaBn: 0.21,
    entryMultiple: 14.3,
    exitMultiple: 11.4,

    equityInvestedBn: 0.385,
    equityProceedsBn: 1.15,
    moic: 3.0,
    irrPct: 25.0,

    totalDebtBn: 0.6,
    debtToEbitda: 8.6,
    exitType: "ipo",

    capitalStructure: [
      {
        tranche: "회전신용 한도 (Revolver)",
        trancheEn: "Revolving Credit Facility",
        amountBn: 0.025,
        rate: "LIBOR + 250bp",
        maturity: "6년",
        maturityEn: "6yr",
        color: "bg-sky-500",
      },
      {
        tranche: "1순위 담보 Term Loan B ⭐",
        trancheEn: "1L Senior Secured Term Loan B ⭐",
        amountBn: 0.3,
        rate: "LIBOR + 275bp",
        maturity: "7년, 만기일시상환",
        maturityEn: "7yr, bullet",
        color: "bg-indigo-600",
      },
      {
        tranche: "시니어 서브 노트 (HY)",
        trancheEn: "Senior Subordinated Notes (HY Bond)",
        amountBn: 0.275,
        rate: "10.375% 고정",
        maturity: "10년",
        maturityEn: "10yr",
        color: "bg-violet-600",
      },
      {
        tranche: "스폰서 + 경영진 보통주",
        trancheEn: "Sponsor + Management Common Equity",
        amountBn: 0.385,
        rate: "지분",
        maturity: "장기 보유",
        maturityEn: "long-term",
        color: "bg-emerald-500",
      },
    ],

    leverageJourney: [
      { year: 1998, debtEbitda: 8.6, ebitdaBn: 0.07, label: "진입 시점", labelEn: "Entry" },
      { year: 1999, debtEbitda: 7.2, ebitdaBn: 0.085, label: "David Brandon CEO", labelEn: "Brandon as CEO" },
      { year: 2000, debtEbitda: 6.0, ebitdaBn: 0.105 },
      { year: 2001, debtEbitda: 5.0, ebitdaBn: 0.13, label: "운영 효과 가시화", labelEn: "Operating gains visible" },
      { year: 2002, debtEbitda: 4.2, ebitdaBn: 0.155 },
      { year: 2003, debtEbitda: 3.5, ebitdaBn: 0.185, label: "IPO 준비", labelEn: "IPO prep" },
      { year: 2004, debtEbitda: 2.8, ebitdaBn: 0.21, label: "NYSE IPO", labelEn: "NYSE IPO" },
    ],

    returnsDecomposition: {
      fromEbitdaGrowth: 2.1,
      fromMultipleExpansion: 0.6,
      fromDebtPaydown: 0.3,
      total: 3.0,
    },

    investmentThesis: [
      {
        driver: "operations",
        icon: "⚙️",
        titleKo: "Bain & Co 스타일 운영 개선",
        titleEn: "Bain & Co-Style Operational Overhaul",
        bodyKo:
          "매장당 단위 경제(unit economics)를 컨설팅 프로젝트처럼 분해 — 배달 시간, 주문 정확도, 재료 단가, 매장 리노베이션. 운영 KPI를 분기 단위로 추적하며 프랜차이지(가맹점주)의 수익성을 끌어올렸다.",
        bodyEn:
          "Decomposed per-store unit economics like a consulting engagement — delivery time, order accuracy, ingredient cost, store renovations. Tracked operating KPIs quarterly and pushed franchisee profitability up across the system.",
        isPrimary: true,
      },
      {
        driver: "operations",
        icon: "🧑‍💼",
        titleKo: "1급 경영진 영입 (David Brandon)",
        titleEn: "Bringing in a Top-Tier CEO (David Brandon)",
        bodyKo:
          "Procter & Gamble 출신 David Brandon을 1999년 CEO로 영입. 창업주 Monaghan과 다른, 데이터 기반·마케팅 중심 리더십이 도입됐다. 'Pizza Turnaround' 캠페인까지 이어지는 브랜드 재건의 시작점.",
        bodyEn:
          "Recruited David Brandon (ex-Procter & Gamble) as CEO in 1999. A data-driven, marketing-led style replaced the founder's. This laid the groundwork for the eventual Pizza Turnaround brand reset.",
        isPrimary: true,
      },
      {
        driver: "sector",
        icon: "🏪",
        titleKo: "프랜차이즈 모델의 구조적 매력",
        titleEn: "Structural Appeal of the Franchise Model",
        bodyKo:
          "도미노 매출의 ~90%는 가맹점(프랜차이지)에서 발생 — 본사는 로열티 + 공급망 마진만 수취. capex가 가볍고 FCF 전환율이 높으며 경기 민감도가 낮다. LBO 자본구조가 견딜 수 있는 캐시 안정성.",
        bodyEn:
          "~90% of Domino's revenue originates at franchised stores — corporate collects royalties + supply-chain margin. Light capex, high FCF conversion, and limited cyclicality. The cash stability the LBO capital structure needed.",
        isPrimary: false,
      },
      {
        driver: "multiple",
        icon: "📈",
        titleKo: "IPO 채널 멀티플 확장",
        titleEn: "Multiple Expansion via IPO",
        bodyKo:
          "비상장 단일 사업체 14x → 상장 QSR 비교 그룹에 편입 시 시장은 운영 개선과 성장률을 다시 평가. 2004년 IPO 가격에서 한 단계 더 re-rate.",
        bodyEn:
          "From a private single-asset valuation at 14x to inclusion in the listed QSR comp group, the market re-rated operational improvement and growth. Further re-rate at the 2004 IPO.",
        isPrimary: false,
      },
    ],

    keyMilestones: [
      {
        year: "1998.09",
        eventKo: "Bain Capital이 Tom Monaghan으로부터 도미노 인수 발표 ($1.0B)",
        eventEn: "Bain Capital announces acquisition of Domino's from Tom Monaghan ($1.0B)",
        type: "entry",
      },
      {
        year: "1998.12",
        eventKo: "딜 클로징 — Bain + 경영진이 93% 지분 보유",
        eventEn: "Deal closes — Bain + management hold ~93%",
        type: "entry",
      },
      {
        year: "1999.03",
        eventKo: "David Brandon CEO 영입 (Procter & Gamble · Valassis 출신)",
        eventEn: "David Brandon (ex-P&G, ex-Valassis) brought in as CEO",
        type: "value-creation",
      },
      {
        year: "2000~2002",
        eventKo: "Heat Wave 배달백, PULSE 매장 POS 시스템, 가맹점 리노베이션 프로그램 전개",
        eventEn: "Roll-out of the Heat Wave delivery bag, PULSE store POS, and franchisee renovation program",
        type: "value-creation",
      },
      {
        year: "2003.06",
        eventKo: "고수익 채권 리파이낸스 — 부채 비용 절감",
        eventEn: "High-yield refinance — lowers debt cost",
        type: "value-creation",
      },
      {
        year: "2004.07",
        eventKo: "NYSE IPO ($14/주, $337M 조달) — Bain 부분 회수",
        eventEn: "NYSE IPO ($14/share, $337M raised) — Bain partial exit",
        type: "exit",
      },
      {
        year: "2007~",
        eventKo: "Bain 잔여 지분 단계적 매각 — 6년 보유 종료",
        eventEn: "Bain phases out residual stake — 6-year hold ends",
        type: "exit",
      },
    ],
  },

  background: [
    "도미노피자는 Tom Monaghan이 1960년 미시간에서 형제와 함께 시작한 배달 전문 피자 체인이다. 1990년대 중반에는 미국과 해외에 6,000여 개 매장을 가진 글로벌 QSR 브랜드로 성장했지만, 창업주 본인은 이미 회사 운영에서 멀어져 있었다. 1992년 디트로이트 타이거스를 매각하고 종교 활동에 깊이 관여하며, 도미노 경영에는 사실상 흥미를 잃은 상태였다.",
    "왜 Bain Capital이 타깃으로 봤나 — 첫째, 지친 창업주는 클래식한 PE 시그널. 둘째, 매장당 unit economics는 견고했지만 본사 차원의 시스템(IT·마케팅·공급망) 투자가 부족. 셋째, 프랜차이즈 모델 특성상 본사 capex가 가벼워 강한 잉여현금흐름. 넷째, QSR 시장에서 피자 카테고리는 경기 사이클 영향이 비교적 작은 디펜시브 성격.",
    "Bain Capital의 시그니처는 '컨설팅형 LBO'였다. 모회사 Bain & Company의 컨설턴트를 포트폴리오 회사에 투입해 운영 KPI를 분해·재설계하는 방식. 도미노는 이 플레이북에 가장 잘 맞는 표적이었다 — 만 개에 가까운 매장 네트워크 전체가 곧 'A/B 테스트 베드'였기 때문이다.",
    "딜 구조는 단순했다. EV $1.0B = 부채 $600M + 에쿼티 $385M. 7배에 가까운 entry leverage였지만 프랜차이즈 모델의 캐시 안정성으로 정당화되었다. Mitt Romney가 1999년 솔트레이크시티 동계올림픽 조직위로 떠나며 Bain 일선에서 물러난 직후, John Connaughton이 리드 파트너로 이 딜을 끌고 갔다.",
  ],
  backgroundEn: [
    "Domino's Pizza was founded in 1960 by Tom Monaghan and his brother in Michigan as a delivery-only pizza chain. By the mid-1990s it had grown into a global QSR brand with ~6,000 stores. But the founder himself was already disengaged — he sold the Detroit Tigers in 1992, turned heavily toward religious philanthropy, and had lost interest in running the company.",
    "Why Bain Capital saw a target — first, a tired founder is a classic PE signal. Second, per-store unit economics were solid but corporate-level systems (IT, marketing, supply chain) were under-invested. Third, the franchise model meant light corporate capex and strong free cash flow. Fourth, within QSR, pizza was relatively insulated from the economic cycle.",
    "Bain's signature approach was the 'consulting-style LBO': drop Bain & Company consultants into the portfolio company, decompose operating KPIs, and re-engineer them. Domino's was an ideal subject — its ~6,000-store network was essentially a ready-made A/B test bed.",
    "The structure was simple. EV $1.0B = $600M debt + $385M equity. Nearly 7x entry leverage, but justified by franchise cash stability. Just as Mitt Romney stepped away from Bain in 1999 to run the Salt Lake City Winter Olympics organizing committee, John Connaughton took the lead on this deal.",
  ],

  executiveSummary: [
    "Bain Capital이 1998년 12월 도미노피자를 $1.0B에 인수 — Tom Monaghan 창업주는 거의 전량을 매각.",
    "자본구조는 부채 $600M + 에쿼티 $385M의 4트랜치 단순 구조 (Revolver, TLB, Senior Sub, Equity).",
    "Bain & Co 컨설팅 DNA를 그대로 운영에 이식 — 매장 KPI, 배달 품질, 공급망 단가, IT 시스템.",
    "1999년 David Brandon을 CEO로 영입 — 데이터·마케팅 중심 리더십으로 turnaround 본격화.",
    "EBITDA $70M → $210M (3배), 부채/EBITDA 8.6x → 2.8x, 운영 알파가 returns의 70% 차지.",
    "2004년 7월 NYSE IPO ($14/share, $337M 조달) → Bain 6년 보유 동안 ~3x MOIC, ~25% IRR.",
  ],
  executiveSummaryEn: [
    "Bain Capital acquired Domino's Pizza in December 1998 for $1.0B — founder Tom Monaghan exited almost entirely.",
    "Capital structure: $600M debt + $385M equity across a simple 4-tranche stack (Revolver, TLB, Senior Sub, Equity).",
    "Transplanted Bain & Co consulting DNA into operations — store KPIs, delivery quality, procurement, IT systems.",
    "Brought in David Brandon as CEO in 1999 — a data- and marketing-led leader who powered the turnaround.",
    "EBITDA $70M → $210M (3x), leverage 8.6x → 2.8x; operating alpha drove ~70% of total returns.",
    "Partial exit via July 2004 NYSE IPO ($14/share, $337M raised) — Bain earned ~3x MOIC and ~25% IRR over 6 years.",
  ],

  companyOverview: {
    body: "도미노피자는 본사가 가맹점에 로열티(매출의 약 5.5%)와 공급망 마진을 수취하는 프랜차이즈-중심 모델이다. 1998년 시점 미국 4,500개, 해외 1,500개 매장을 가진 글로벌 2위 피자 체인. 매출 대비 EBITDA 마진은 약 8-10%, 자본 회전율이 높고 capex 부담이 가벼워 LBO에 적합한 캐시 프로파일을 가졌다.",
    bodyEn: "Domino's runs a franchise-led model: corporate collects royalties (~5.5% of franchise sales) plus supply-chain margin. In 1998 it had ~4,500 U.S. and ~1,500 international stores — the world's #2 pizza chain. EBITDA margins of ~8-10%, high capital turnover, and light capex gave it the cash profile an LBO needs.",
    metrics: [
      { label: "매장 수", labelEn: "Stores", value: "~6,000", sub: "미국 4,500 + 해외 1,500" },
      { label: "본사 직원", labelEn: "Corporate Employees", value: "~12,000" },
      { label: "FY1997 매출", labelEn: "FY1997 Revenue", value: "$1.16B" },
      { label: "FY1997 EBITDA", labelEn: "FY1997 EBITDA", value: "$70M", sub: "~6% 마진(본사 기준)" },
      { label: "프랜차이즈 비중", labelEn: "Franchise Mix", value: "~88%" },
      { label: "Entry EV", labelEn: "Entry EV", value: "$1.0B", sub: "14.3× EBITDA" },
    ],
    financials: [
      { year: "FY1997", ebitdaBn: 0.07, revenueBn: 1.16, ebitdaMarginPct: 6.0, note: "LBO 직전", noteEn: "Pre-LBO" },
      { year: "FY1998", ebitdaBn: 0.075, revenueBn: 1.21, ebitdaMarginPct: 6.2, note: "LBO 진입", noteEn: "LBO entry" },
      { year: "FY1999", ebitdaBn: 0.085, revenueBn: 1.27, ebitdaMarginPct: 6.7 },
      { year: "FY2000", ebitdaBn: 0.105, revenueBn: 1.30, ebitdaMarginPct: 8.1, note: "Brandon 효과", noteEn: "Brandon effect" },
      { year: "FY2001", ebitdaBn: 0.13, revenueBn: 1.26, ebitdaMarginPct: 10.3 },
      { year: "FY2002", ebitdaBn: 0.155, revenueBn: 1.28, ebitdaMarginPct: 12.1 },
      { year: "FY2003", ebitdaBn: 0.185, revenueBn: 1.33, ebitdaMarginPct: 13.9 },
      { year: "FY2004", ebitdaBn: 0.21, revenueBn: 1.45, ebitdaMarginPct: 14.5, note: "IPO 연도", noteEn: "IPO year" },
    ],
    financialsNote: "단위: $B | 출처: Domino's S-1/A (2004) 및 Bain Capital 케이스 자료",
    financialsNoteEn: "Units: $B | Source: Domino's S-1/A (2004) and Bain Capital case materials",
  },

  postDealAssessment: {
    body: "도미노 딜은 Bain Capital의 시그니처 '컨설팅형 LBO' 플레이북이 가장 정밀하게 적용된 사례다. 자본구조는 4개 트랜치의 단순한 구조였고, 디레버리지는 returns의 10%만 차지했다. 진짜 알파는 운영에서 나왔다 — David Brandon CEO 영입, 매장 IT 시스템(PULSE) 도입, Heat Wave 배달백, 공급망 단가 협상, 가맹점 리노베이션 프로그램. 6년 만에 EBITDA가 3배가 됐고, IPO에서 시장은 이 운영 개선을 한 번 더 멀티플 확장으로 보상했다. 도미노는 이후 'Pizza Turnaround' 캠페인(2009)을 거치며 시총 $50B+의 QSR 역사상 최고 성과 종목 중 하나가 된다 — Bain은 그 토대를 놓은 것이다.",
    bodyEn: "The Domino's deal is the most precise application of Bain Capital's signature 'consulting-style LBO' playbook. The capital structure was a simple 4-tranche stack; debt paydown contributed only ~10% of returns. The real alpha came from operations — recruiting David Brandon, deploying the PULSE store POS, the Heat Wave delivery bag, supply-chain renegotiation, the franchisee renovation program. EBITDA tripled in six years; at IPO the market rewarded that operating story with multiple expansion as well. Domino's would go on through the famous 2009 Pizza Turnaround campaign to become one of the best-performing QSR stocks of all time at >$50B market cap — Bain laid that foundation.",
    overallVerdict: "운영 알파 70% + 멀티플 20% + 디레버리지 10% — 교과서적 operating LBO",
    overallVerdictEn: "70% operating alpha + 20% multiple + 10% deleverage — a textbook operating LBO",
    positives: [
      "스폰서 IRR ~25%, ~3x MOIC — 1998 빈티지 상위 사례.",
      "운영 개선이 returns의 70% 차지 — 'Bain 컨설팅 DNA' 정당성 입증.",
      "David Brandon 영입은 sponsor-driven CEO transition의 교과서.",
      "장기적으로 도미노는 시총 $50B+ 기업으로 성장 — Bain의 토대 작업이 핵심.",
    ],
    positivesEn: [
      "Sponsor IRR ~25%, ~3x MOIC — top-tier 1998 vintage outcome.",
      "Operations contributed ~70% of returns — validating Bain's consulting DNA.",
      "Brandon recruitment is a textbook sponsor-driven CEO transition.",
      "Long-term, Domino's became a $50B+ market-cap company — Bain laid the foundation.",
    ],
    risks: [
      "Entry 14x EV/EBITDA는 1998 QSR으로는 비싼 편 — 운영 개선이 실패했다면 멀티플 컴프레션 위험.",
      "Entry leverage 8.6x는 단순 EBITDA 기준 매우 높음 — 프랜차이즈 캐시 안정성이 아니었다면 위험.",
      "Brandon CEO 의존도가 컸음 — key person risk의 단면.",
    ],
    risksEn: [
      "Entry 14x EV/EBITDA was rich for 1998 QSR — multiple compression risk had operating gains failed.",
      "Entry leverage of 8.6x looks very high on EBITDA alone — only justifiable thanks to franchise cash stability.",
      "Heavy reliance on the Brandon CEO transition — a key-person risk in disguise.",
    ],
    editorNote: "도미노는 'PE가 정말 가치를 더할 수 있는가'라는 질문에 가장 깔끔하게 답하는 사례다. 부채로 어떻게 돈을 짜냈는지가 아니라, 6,000개 매장의 운영을 어떻게 통째로 재설계했는지의 이야기. Bain Capital의 컨설팅 출신 정체성이 가장 빛난 딜이며, 동시에 프랜차이즈 모델의 구조적 매력을 보여주는 베스트 케이스다.",
    editorNoteEn: "Domino's is the cleanest answer to 'can PE actually add value?'. The story isn't about squeezing cash through debt — it's about re-engineering operations across 6,000 stores. The deal where Bain Capital's consulting roots shone brightest, and the best case study in the structural appeal of franchise models.",
  },

  tombstone: {
    fundInitials: "BC",
    fundBg: "bg-rose-700",
    portfolioInitials: "DPZ",
    portfolioBg: "bg-blue-700",
    fundName: "Bain Capital",
    portfolioName: "Domino's Pizza, Inc.",
    dealTitle: "Bain Capital × Domino's — $1.0B 운영 알파 LBO",
    dealSize: "$1.0B EV",
    entryMultiple: "14.3× EBITDA",
    moic: "~3.0×",
    irr: "~25%",
    holdYears: "6년",
    closeDate: "1998년 12월 21일",
  },

  concepts: [
    {
      term: "운영 알파 (Operating Alpha)",
      termEn: "Operating Alpha",
      description: "LBO returns 중 부채 paydown이나 멀티플 expansion이 아니라 EBITDA 성장(매출·마진 개선)에서 오는 부분. Bain의 도미노 딜은 이 비중이 ~70%로 매우 높은 케이스.",
      descriptionEn: "The portion of LBO returns driven by EBITDA growth (revenue + margin expansion) rather than debt paydown or multiple expansion. Bain's Domino's deal hit ~70% — exceptionally high.",
    },
    {
      term: "컨설팅형 PE (Consulting-Style PE)",
      termEn: "Consulting-Style PE",
      description: "Bain Capital의 시그니처. 모회사 Bain & Company 컨설턴트를 포트폴리오 회사에 직접 투입해 운영 KPI를 분해·재설계. 단순 financial engineering과 차별화되는 PE 모델.",
      descriptionEn: "Bain Capital's signature: deploy Bain & Company consultants directly into portfolio companies to decompose and re-engineer operating KPIs. A model distinct from pure financial-engineering PE.",
    },
    {
      term: "프랜차이즈 로열티 모델",
      termEn: "Franchise Royalty Model",
      description: "본사가 가맹점에 브랜드·시스템·공급망을 제공하고 매출의 일정 비율을 로열티로 수취. capex는 가맹점주가 부담하므로 본사는 자본 가벼운 캐시 머신.",
      descriptionEn: "Corporate provides brand, systems, and supply chain to franchisees and collects a percentage of sales as royalty. Capex sits with franchisees — corporate is a capital-light cash machine.",
    },
    {
      term: "Sponsor-Driven CEO Transition",
      termEn: "Sponsor-Driven CEO Transition",
      description: "PE 스폰서가 인수 직후 CEO를 교체해 transformation을 가속하는 패턴. Bain은 1999년 David Brandon을 영입하며 도미노의 마케팅·데이터 중심 재편을 본격화.",
      descriptionEn: "PE sponsors swap in a new CEO shortly after closing to accelerate transformation. Bain installed David Brandon in 1999, kicking off Domino's marketing- and data-led reset.",
    },
    {
      term: "IPO 부분 회수 (IPO Partial Exit)",
      termEn: "IPO Partial Exit",
      description: "IPO에서 스폰서가 보유 지분을 한 번에 전부 매각하지 않고 일부만 정리, 잔여 지분의 추가 상승을 노리는 전략. Bain은 2004 IPO 후에도 수년간 도미노 지분을 보유.",
      descriptionEn: "Sponsors sell only part of their stake at IPO, retaining the rest to capture further upside. Bain held a residual Domino's position for several years post-2004 IPO.",
    },
  ],

  faq: [
    {
      q: "Mitt Romney도 이 딜에 관여했나요?",
      qEn: "Was Mitt Romney involved in this deal?",
      a: "Romney는 1999년 솔트레이크 동계올림픽 조직위원회로 옮기며 Bain Capital 일선에서 물러났다. 도미노 딜의 클로징은 1998년 말이라 Romney가 형식적으로 펀드 GP였지만, 실질 리드는 John Connaughton 등 차세대 파트너들이었다.",
      aEn: "Romney left Bain in 1999 to run the Salt Lake City Winter Olympics organizing committee. The deal closed in late 1998 — he was technically still a fund GP, but the day-to-day was led by John Connaughton and the next generation of partners.",
    },
    {
      q: "Entry 14x EV/EBITDA면 너무 비싸지 않았나요?",
      qEn: "Wasn't 14x EV/EBITDA at entry expensive?",
      a: "단순 멀티플로는 비쌌다. 하지만 본사 EBITDA가 운영 개선으로 빠르게 늘 수 있다는 가정 하에 forward 멀티플은 훨씬 낮아진다. Bain은 'EBITDA를 3배로 만들면 14x도 싸다'는 베팅이었고, 결과적으로 맞았다.",
      aEn: "On a static multiple basis, yes. But assuming EBITDA could grow rapidly via operating improvement, the forward multiple was much lower. Bain bet that 'tripling EBITDA makes 14x look cheap' — and that bet paid off.",
    },
    {
      q: "Pizza Turnaround 캠페인은 Bain 시기인가요?",
      qEn: "Was the Pizza Turnaround campaign during the Bain era?",
      a: "직접적으로는 아니다. 'Pizza Turnaround'는 2009-2010년 캠페인이고 Bain은 그때 이미 대부분 회수한 상태였다. 다만 그 캠페인을 가능하게 한 마케팅 조직과 데이터 인프라는 Bain 시기에 구축됐다.",
      aEn: "Not directly. The Pizza Turnaround campaign ran in 2009-2010, by which time Bain had largely exited. But the marketing organization and data infrastructure that made it possible were built during Bain's hold.",
    },
    {
      q: "프랜차이즈 모델이 왜 LBO에 좋은가요?",
      qEn: "Why are franchise models good for LBOs?",
      a: "본사 capex가 가맹점주에게 분산되므로 캐시 회수율이 높다. 로열티는 비교적 안정적이고, 가맹점주 인센티브 구조가 동일 방향이라 경기 변동에도 매장이 잘 안 닫힌다. 부채 service에 필요한 캐시 안정성이 구조적으로 보장되는 셈.",
      aEn: "Capex is distributed to franchisees, so corporate cash conversion is high. Royalties are relatively stable, and franchisee incentives align with the brand — stores don't easily close in downturns. Structurally, the cash stability needed for debt service is built in.",
    },
    {
      q: "도미노는 지금도 잘 나가나요?",
      qEn: "Is Domino's still doing well today?",
      a: "도미노피자(NYSE: DPZ)는 IPO 이후 가장 잘 나간 QSR 종목 중 하나다. 시총은 $50B+ 수준이고, 2010년대 디지털 주문·배달 영역의 선도 기업으로 자리잡았다. Bain의 1998년 베팅은 장기적으로 봐도 정답.",
      aEn: "Domino's Pizza (NYSE: DPZ) has been one of the best-performing QSR stocks since IPO. Market cap exceeds $50B, and it cemented itself as a digital-ordering and delivery leader through the 2010s. Bain's 1998 bet looks even better in hindsight.",
    },
    {
      q: "오늘 PE가 도미노 같은 딜을 다시 할 수 있나요?",
      qEn: "Could PE replicate a Domino's-style deal today?",
      a: "프랜차이즈 QSR 멀티플이 그때보다 훨씬 비싸고, '운영 개선 여지'가 있는 저투자 타깃도 적다. 도미노 딜은 1998년 시장 환경에서 가능했던 알파였다. 다만 컨설팅형 PE 접근은 다른 업종(industrial, multi-site service)에서 여전히 유효.",
      aEn: "Franchise QSR multiples are far higher today, and under-invested targets with operational headroom are scarcer. Domino's was alpha specific to the 1998 backdrop. The consulting-style PE approach itself, however, still works in other sectors (industrials, multi-site services).",
    },
  ],

  sources: [
    { id: 1, text: "Domino's Pizza, Inc. S-1/A — 2004 IPO 등록서류", url: "https://www.sec.gov/" },
    { id: 2, text: "Domino's Pizza, Inc. 10-K, FY2004~FY2007, SEC EDGAR" },
    { id: 3, text: "Harvard Business School Case Study — 'Bain Capital and Domino's Pizza'" },
    { id: 4, text: "Wall Street Journal — 'Bain Capital Agrees to Acquire Domino's' (1998.09)" },
    { id: 5, text: "Bloomberg — 'Domino's IPO Prices at $14, Raises $337 Million' (2004.07)" },
    { id: 6, text: "Fortune — 'How David Brandon Saved Domino's' (2003)" },
    { id: 7, text: "Bain Capital 공식 case 자료, 'Operating Approach to Value Creation'" },
  ],

  seo: {
    title: "도미노피자 1998 LBO — Bain Capital 운영 알파의 교과서 | Deal Story",
    description:
      "$1.0B Bain Capital의 도미노피자 인수 — 컨설팅형 PE 플레이북, David Brandon CEO, Heat Wave 배달백, 2004년 IPO까지. 운영 알파 70%의 교과서적 LBO 케이스 스터디.",
    keywords: [
      "도미노피자 LBO",
      "Bain Capital Domino's",
      "운영 알파",
      "Operating Alpha LBO",
      "컨설팅형 PE",
      "David Brandon",
      "프랜차이즈 LBO",
      "QSR LBO",
      "1998 LBO",
      "John Connaughton",
      "딜 스토리 LBO",
    ],
  },
};

export default deal;
