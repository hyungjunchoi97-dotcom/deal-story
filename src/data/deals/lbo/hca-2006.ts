/**
 * KKR + Bain + Merrill × HCA LBO (2006–2011)
 * 당시 사상 최대 LBO ($33B) — 헬스케어 디펜시브 + 7층 자본구조로 2008 위기 생존
 *
 * 주: 이 메타 데이터는 /deals/hca-lbo 의 listing 카드용.
 * 실제 페이지는 bespoke static route (HcaLboClient.tsx) 가 렌더링한다.
 */
import type { LboDeal } from "@/lib/lbo-deal-data";

const deal: LboDeal = {
  slug: "hca-lbo",
  category: "lbo",

  title: "KKR·Bain·Merrill은 어떻게 $330억 HCA LBO로 2008 위기를 버티고 CLO 투자자에게 par 회수를 안겼나",
  titleEn: "How KKR/Bain/Merrill Survived 2008 on the $33B HCA Mega-LBO — and Returned Par to CLO Investors",
  subtitle: "사상 최대 LBO · 7층 자본구조 · TLB $120억의 CLO 분산 · 2010 배당 리캡 · 2011년 IPO",
  subtitleEn: "Largest LBO Ever (at the time) · 7-Tranche Stack · $12B TLB Spread Across CLOs · 2010 Div Recap · 2011 IPO",

  industry: "헬스케어 / 영리병원 체인",
  industryEn: "Healthcare / For-Profit Hospital Chain",
  country: "미국",
  announcedAt: "2006-07-24",
  closedAt: "2006-11-17",
  announcedDisplay: "2006년 7월",
  closedDisplay: "2006년 11월",
  readingMinutes: 18,
  tags: [
    "HCA", "KKR", "Bain Capital", "Merrill Lynch", "LBO", "메가LBO",
    "Term Loan B", "TLB", "CLO", "PIK Toggle", "LevFin",
    "헬스케어", "Frist 가문", "2006 LBO", "IPO 엑싯",
  ],
  excerpt:
    "KKR + Bain Capital + Merrill Lynch PE 3자 컨소시엄이 HCA를 $33B에 인수한 2006년 사상 최대 LBO. 7층 자본구조 중 핵심은 TLB $12B — 약 500개 CLO에 분산되며 CLO 시장 capacity 자체를 테스트한 딜이다. 2008 금융위기에서도 디폴트 없이 살아남아 2010 배당 리캡 + 2011 IPO로 스폰서 IRR 25%, CLO 투자자 par 회수로 마감.",
  excerptEn:
    "The $33B 2006 LBO of HCA by KKR + Bain + Merrill — the largest LBO ever at the time. The capital structure's centerpiece, a $12B TLB, was spread across roughly 500 CLOs, stress-testing CLO market capacity itself. HCA survived 2008 without default, executed a $4.25B dividend recap in 2010, and IPO'd in 2011 — sponsors earned ~25% IRR while CLO investors recovered par.",

  fund: {
    initials: "KKR",
    bg: "bg-indigo-700",
    label: "KKR + Bain + Merrill 컨소시엄",
    labelEn: "KKR + Bain + Merrill Consortium",
  },
  portfolio: {
    initials: "HCA",
    bg: "bg-rose-700",
    label: "Hospital Corporation of America",
    labelEn: "Hospital Corporation of America",
  },

  lboMetrics: {
    fundName: "KKR 2006 Fund + Bain Capital Fund IX + Merrill Lynch GPI",
    fundNameEn: "KKR 2006 Fund + Bain Capital Fund IX + Merrill Lynch GPI",
    entryYear: 2006,
    exitYear: 2011,

    entryEvBn: 33.0,
    exitEvBn: 36.0,
    entryEbitdaBn: 4.0,
    exitEbitdaBn: 5.5,
    entryMultiple: 8.25,
    exitMultiple: 6.5,

    equityInvestedBn: 5.5,
    equityProceedsBn: 19.25,
    moic: 3.5,
    irrPct: 25.0,

    totalDebtBn: 22.0,
    debtToEbitda: 6.5,
    exitType: "ipo",

    capitalStructure: [
      {
        tranche: "회전신용 한도 (Revolver)",
        trancheEn: "Revolving Credit Facility (Revolver)",
        amountBn: 2.0,
        rate: "LIBOR + 225bp",
        maturity: "6년",
        maturityEn: "6yr",
        color: "bg-sky-300",
      },
      {
        tranche: "1순위 담보 Term Loan A",
        trancheEn: "1L Senior Secured Term Loan A",
        amountBn: 2.0,
        rate: "LIBOR + 225bp",
        maturity: "6년, 분할상환",
        maturityEn: "6yr, amortizing",
        color: "bg-sky-500",
      },
      {
        tranche: "1순위 담보 Term Loan B ⭐",
        trancheEn: "1L Senior Secured Term Loan B ⭐",
        amountBn: 12.0,
        rate: "LIBOR + 275bp",
        maturity: "7년, 만기일시상환",
        maturityEn: "7yr, bullet",
        color: "bg-indigo-600",
      },
      {
        tranche: "1순위 담보 시니어 노트",
        trancheEn: "1L Senior Secured Notes",
        amountBn: 4.2,
        rate: "9.125% 고정",
        maturity: "10년",
        maturityEn: "10yr",
        color: "bg-violet-600",
      },
      {
        tranche: "무담보 시니어 노트 (HY)",
        trancheEn: "Senior Unsecured Notes (HY Bond)",
        amountBn: 5.7,
        rate: "9.25% 고정",
        maturity: "10년",
        maturityEn: "10yr",
        color: "bg-fuchsia-600",
      },
      {
        tranche: "PIK Toggle 노트 (서브)",
        trancheEn: "PIK Toggle Notes (Subordinated)",
        amountBn: 1.5,
        rate: "9.625% 현금 / 10.375% PIK",
        maturity: "10년",
        maturityEn: "10yr",
        color: "bg-rose-500",
      },
    ],

    leverageJourney: [
      { year: 2006, debtEbitda: 6.5, ebitdaBn: 4.0, label: "진입 시점", labelEn: "Entry" },
      { year: 2007, debtEbitda: 6.2, ebitdaBn: 4.3 },
      { year: 2008, debtEbitda: 6.0, ebitdaBn: 4.5, label: "리먼 쇼크", labelEn: "Lehman shock" },
      { year: 2009, debtEbitda: 5.8, ebitdaBn: 4.7 },
      { year: 2010, debtEbitda: 5.0, ebitdaBn: 5.2, label: "배당 리캡", labelEn: "Dividend recap" },
      { year: 2011, debtEbitda: 4.2, ebitdaBn: 5.5, label: "IPO 엑싯", labelEn: "IPO exit" },
    ],

    returnsDecomposition: {
      fromEbitdaGrowth: 1.4,
      fromMultipleExpansion: 0.5,
      fromDebtPaydown: 1.6,
      total: 3.5,
    },

    investmentThesis: [
      {
        driver: "sector",
        icon: "🏥",
        titleKo: "헬스케어 디펜시브 섹터",
        titleEn: "Defensive Healthcare Sector",
        bodyKo: "병원 매출은 경기 사이클과 거의 무관 — 베이비부머 노령화 인구통계가 long-term tailwind. 2008 위기 buffer 역할.",
        bodyEn: "Hospital revenues are largely insulated from economic cycles — baby boomer aging provides a long-term tailwind. Acted as a key buffer during the 2008 crisis.",
        isPrimary: true,
      },
      {
        driver: "leverage",
        icon: "💸",
        titleKo: "FCF로 부채 상환",
        titleEn: "Debt Paydown via FCF",
        bodyKo: "HCA의 강한 잉여현금흐름(연 $2B+)으로 부채를 점진적으로 상환 — 5년간 D/EBITDA 6.5x → 4.2x.",
        bodyEn: "HCA's strong free cash flow (~$2B+ p.a.) gradually paid down debt — leverage went from 6.5x to 4.2x over 5 years.",
        isPrimary: true,
      },
      {
        driver: "operations",
        icon: "⚙️",
        titleKo: "운영 효율화",
        titleEn: "Operational Improvement",
        bodyKo: "병상 가동률 개선, 부동산 모노타이징, 매입가 협상력 강화 — EBITDA 마진 +200bp.",
        bodyEn: "Improved bed occupancy, real estate monetization, and procurement leverage — EBITDA margin +200bp.",
        isPrimary: false,
      },
      {
        driver: "multiple",
        icon: "📈",
        titleKo: "IPO 멀티플 익스팬션",
        titleEn: "IPO Multiple Expansion",
        bodyKo: "2011년 IPO에서 ~6.5x EV/EBITDA로 상장 — entry 8.25x 대비 deleveraged 상태의 시장 멀티플.",
        bodyEn: "IPO'd in 2011 at ~6.5x EV/EBITDA — reflecting market re-rating after significant deleveraging.",
        isPrimary: false,
      },
    ],

    keyMilestones: [
      {
        year: "2006.07",
        eventKo: "$33B LBO 발표 — KKR·Bain·Merrill 컨소시엄",
        eventEn: "$33B LBO announced — KKR·Bain·Merrill consortium",
        type: "entry",
      },
      {
        year: "2006.11",
        eventKo: "딜 클로징, 7층 부채 신디케이션 완료",
        eventEn: "Deal closes, 7-tranche debt syndication completed",
        type: "entry",
      },
      {
        year: "2008.10",
        eventKo: "리먼 쇼크 — TLB 가격 78센트 바닥, 디폴트 회피",
        eventEn: "Lehman shock — TLB price hits 78c, default avoided",
        type: "crisis",
      },
      {
        year: "2010.11",
        eventKo: "$4.25B 배당 리캡 — 스폰서 부분 회수",
        eventEn: "$4.25B dividend recap — partial sponsor recovery",
        type: "value-creation",
      },
      {
        year: "2011.03",
        eventKo: "NYSE IPO ($3.79B 조달, $30/share)",
        eventEn: "NYSE IPO ($3.79B raised, $30/share)",
        type: "exit",
      },
      {
        year: "2011~",
        eventKo: "TLB 리파이낸스 — CLO 투자자 par 회수",
        eventEn: "TLB refinanced — CLO investors recovered par",
        type: "exit",
      },
    ],
  },

  background: [
    "HCA(Hospital Corporation of America)는 1968년 Dr. Thomas Frist Sr.와 동료들이 테네시 내슈빌에서 창립한 미국 최대 영리병원 체인이다. 2006년 시점 200여 개 병원, 매출 $25B+, EBITDA $4B 안팎의 거대한 디펜시브 비즈니스였다. Bill Frist 상원 다수당 원내대표(공화당)가 창립자 가족이라는 정치적 prominence도 컸다.",
    "왜 HCA가 LBO 타겟이었나 — 첫째, 헬스케어는 경기 사이클과 거의 무관한 디펜시브 섹터. 둘째, 병상당 capex가 낮아 강한 잉여현금흐름. 셋째, 부동산 자산(병원 건물)이 추가 담보 가치. 넷째, Frist 가문이 경영진으로 남아 transition risk가 낮음. 메가LBO에 가장 적합한 조건 풀세트.",
    "왜 3자 컨소시엄이었나 — $33B는 2006년 시점 단일 PE 펀드가 다 감당하기엔 too big이었다. KKR이 lead arranger 역할을 맡고, Bain Capital과 Merrill Lynch PE가 equity와 expertise를 분담. Frist 가문이 약 $1B를 롤오버하며 4번째 파트너로 합류 — 창립자 신뢰의 시그널이었다.",
    "Bridge financing은 Citi, JPM, BofA, Merrill, Morgan Stanley 5개 banks가 commitment letter 발급. 클로징 후 7층 자본구조로 syndicate-out — 특히 TLB $12B가 CLO 시장 capacity 자체를 시험하는 사이즈였다.",
  ],
  backgroundEn: [
    "HCA (Hospital Corporation of America) was founded in 1968 by Dr. Thomas Frist Sr. and partners in Nashville, Tennessee, growing into America's largest for-profit hospital chain. By 2006, it operated ~200 hospitals with $25B+ in revenue and ~$4B EBITDA — a massive defensive business. Bill Frist, then Senate Majority Leader (R), came from the founding family, adding political prominence.",
    "Why HCA fit the LBO template — first, healthcare is largely insulated from economic cycles. Second, low capex per bed produced strong free cash flow. Third, hospital real estate added collateral value. Fourth, the Frist family stayed on as management, minimizing transition risk. A textbook mega-LBO candidate.",
    "Why a three-firm consortium — $33B was too big for any single 2006-era PE fund. KKR led as arranger, with Bain Capital and Merrill Lynch PE splitting equity and expertise. The Frist family rolled over ~$1B and joined as a fourth partner — a founder-trust signal.",
    "Bridge financing came from Citi, JPM, BofA, Merrill, and Morgan Stanley via commitment letters. After closing, the debt was syndicated out across seven tranches — most notably a $12B TLB that tested CLO market capacity itself.",
  ],

  executiveSummary: [
    "KKR + Bain + Merrill 3자 컨소시엄이 HCA를 $33B에 인수 — 당시 사상 최대 LBO.",
    "$22B 부채 = 7개 트랜치 (Revolver, TLA, TLB $12B, 1st Lien Notes, Senior Unsecured, PIK Toggle).",
    "TLB $12B는 약 500개 CLO에 분산 — CLO 시장 capacity 자체를 테스트한 딜.",
    "2008 금융위기 한복판에서 디폴트 회피 — 헬스케어 디펜시브 + 강한 스폰서의 힘.",
    "2010 배당 리캡 $4.25B + 2011 IPO $3.79B → 스폰서 IRR ~25%, 3.5x money.",
    "CLO 투자자는 par + 7년치 이자 회수 → 2006-07 메가LBO 중 가장 깔끔한 회수 케이스.",
  ],
  executiveSummaryEn: [
    "KKR + Bain + Merrill consortium acquired HCA for $33B — the largest LBO ever at the time.",
    "$22B debt across 7 tranches (Revolver, TLA, TLB $12B, 1st Lien Notes, Senior Unsec, PIK Toggle).",
    "The $12B TLB was spread across ~500 CLOs — a deal that stress-tested CLO market capacity.",
    "Avoided default throughout the 2008 crisis — defensive healthcare sector + top-tier sponsors.",
    "$4.25B dividend recap (2010) + $3.79B IPO (2011) → sponsor IRR ~25%, 3.5x money.",
    "CLO investors recovered par + 7 years of interest — the cleanest exit among 2006-07 mega-LBOs.",
  ],

  companyOverview: {
    body: "HCA는 2006년 시점 미국 21개 주와 영국에 200여 개 병원·외래 시설을 운영하던 영리병원 체인. 매출의 대부분은 입원 진료비, EBITDA 마진은 ~16%였다. Frist 가문이 1968년 창립 후 회사 운영에 깊이 관여하며 강한 culture를 유지했다.",
    bodyEn: "As of 2006, HCA operated ~200 hospitals and outpatient facilities across 21 U.S. states and the U.K. — a for-profit hospital chain. Most revenue came from inpatient care; EBITDA margin ran ~16%. The Frist family, founders since 1968, remained deeply involved, sustaining a strong operating culture.",
    metrics: [
      { label: "병원 수", labelEn: "Hospitals", value: "~200", sub: "21개 주 + 영국" },
      { label: "직원 수", labelEn: "Employees", value: "~190,000" },
      { label: "FY2005 매출", labelEn: "FY2005 Revenue", value: "$24.5B" },
      { label: "FY2005 EBITDA", labelEn: "FY2005 EBITDA", value: "$3.85B", sub: "~15.7% 마진" },
      { label: "Net Debt / EBITDA (Pre-LBO)", labelEn: "Net Debt / EBITDA (Pre-LBO)", value: "1.5x" },
      { label: "Entry EV", labelEn: "Entry EV", value: "$33.0B", sub: "8.25× EBITDA" },
    ],
    financials: [
      { year: "FY2005", ebitdaBn: 3.85, revenueBn: 24.5, ebitdaMarginPct: 15.7, note: "LBO 직전", noteEn: "Pre-LBO" },
      { year: "FY2006", ebitdaBn: 4.00, revenueBn: 25.5, ebitdaMarginPct: 15.7, note: "LBO 진입", noteEn: "LBO entry" },
      { year: "FY2007", ebitdaBn: 4.30, revenueBn: 27.0, ebitdaMarginPct: 15.9 },
      { year: "FY2008", ebitdaBn: 4.50, revenueBn: 28.4, ebitdaMarginPct: 15.8, note: "GFC 한복판", noteEn: "GFC stress" },
      { year: "FY2009", ebitdaBn: 4.70, revenueBn: 30.1, ebitdaMarginPct: 15.6 },
      { year: "FY2010", ebitdaBn: 5.20, revenueBn: 30.7, ebitdaMarginPct: 16.9, note: "배당 리캡", noteEn: "Dividend recap" },
      { year: "FY2011", ebitdaBn: 5.50, revenueBn: 32.5, ebitdaMarginPct: 16.9, note: "IPO", noteEn: "IPO year" },
    ],
    financialsNote: "단위: $B | 출처: HCA 연간보고서 및 IPO S-1",
    financialsNoteEn: "Units: $B | Source: HCA annual reports and IPO S-1",
  },

  postDealAssessment: {
    body: "HCA LBO는 2006-07 메가LBO 빈티지 중 가장 성공적으로 회수된 케이스 중 하나다. 헬스케어 디펜시브 산업, 1등급 스폰서 컨소시엄, 합리적 entry 멀티플(8.25x), 강한 잉여현금흐름, PIK toggle을 통한 현금 보존 옵션이 모두 작동했다. 2008 금융위기에 TLB 가격이 78센트까지 떨어졌지만 디폴트 없이 만기 보유 → par 회수. 스폰서는 5년 만에 3.5x를 만들었고 CLO 투자자는 모든 이자와 원금을 회수했다.",
    bodyEn: "HCA was among the most successful 2006-07 vintage mega-LBO exits. A defensive sector, top-tier sponsor consortium, reasonable entry multiple (8.25x), strong free cash flow, and the PIK toggle's cash-preservation option all worked together. TLB prices dipped to 78c during the 2008 crisis, but the deal avoided default and held to maturity at par. Sponsors returned 3.5x in 5 years; CLO investors recovered all interest and principal.",
    overallVerdict: "메가LBO + 헬스케어 디펜시브 = CLO 친화적 모범 사례",
    overallVerdictEn: "Mega-LBO + Defensive Healthcare = a model CLO-friendly outcome",
    positives: [
      "스폰서 IRR ~25%, 3.5x MOIC — 2006-07 vintage 상위 사례.",
      "CLO 투자자 par + 이자 회수 — 마크-투-마켓 변동에도 디폴트 없이 만기 보유 가능했음을 증명.",
      "Frist 가문 롤오버 + 경영 안정성 — sponsor-management 관계의 모범.",
      "디펜시브 산업 선택의 위력 — 2008년 매출 -2% (산업평균 -10% 대비).",
    ],
    positivesEn: [
      "Sponsor IRR ~25%, 3.5x MOIC — top quartile for 2006-07 vintage.",
      "CLO investors recovered par + interest — demonstrating MTM volatility ≠ realized loss when held to maturity.",
      "Frist family rollover + management continuity — a model sponsor-management partnership.",
      "Defensive sector selection paid off — 2008 revenue down only 2% vs. -10% industry average.",
    ],
    risks: [
      "PIK toggle은 현금 보존 도구지만 채권자에겐 추가 risk premium 필요 — 양면성.",
      "Entry leverage 6.5x는 healthcare치고 높은 편 — defensive 산업이 아니었으면 디폴트 가능.",
      "메가딜 신디케이션 의존도 — TLB $12B가 CLO 시장 capacity의 한계를 시험.",
    ],
    risksEn: [
      "PIK toggle is a cash-preservation tool but demands extra risk premium from creditors — a double-edged sword.",
      "Entry leverage of 6.5x was high for healthcare — would likely have defaulted in a more cyclical sector.",
      "Heavy reliance on mega-deal syndication — the $12B TLB tested CLO market capacity limits.",
    ],
    editorNote: "HCA LBO는 LevFin 실무자가 반드시 알아야 할 7층 자본구조의 정수와 CLO 투자자가 메가LBO를 어떻게 평가하는지를 한 케이스로 보여준다. 디펜시브 산업 + 톱티어 스폰서 = 마크-투-마켓 흔들림에도 par 회수 가능하다는 교과서적 증명.",
    editorNoteEn: "HCA encapsulates the essentials of 7-tranche LBO capital structure and the CLO investor's framework for evaluating mega-LBOs. Defensive sector + top-tier sponsor = par recovery even through MTM volatility — a textbook proof point.",
  },

  tombstone: {
    fundInitials: "KKR",
    fundBg: "bg-indigo-700",
    portfolioInitials: "HCA",
    portfolioBg: "bg-rose-700",
    fundName: "KKR + Bain + Merrill 컨소시엄",
    portfolioName: "Hospital Corporation of America",
    dealTitle: "KKR·Bain·Merrill × HCA — $33B 메가LBO와 CLO 투자자",
    dealSize: "$33B EV",
    entryMultiple: "8.25× EBITDA",
    moic: "3.5×",
    irr: "~25%",
    holdYears: "5년",
    closeDate: "2006년 11월 17일",
  },

  concepts: [
    {
      term: "Term Loan B (TLB)",
      termEn: "Term Loan B (TLB)",
      href: "/market-101/levfin-tlb-clo",
      description: "LBO 자금 조달의 핵심 수단. 매년 1%만 상환하고 만기에 일시상환. HCA의 경우 $12B 발행 — 약 500개 CLO에 분산되는 메가 사이즈.",
      descriptionEn: "The workhorse of LBO financing — 1% annual amortization with bullet repayment at maturity. HCA issued $12B, spread across ~500 CLOs.",
    },
    {
      term: "PIK Toggle Note",
      termEn: "PIK Toggle Note",
      description: "이자 지급 시점에 현금 vs 추가 채권 발행 옵션. 스폰서에겐 cash flexibility, 채권자에겐 risk premium 요구. HCA $1.5B 발행.",
      descriptionEn: "Issuer option to pay interest in cash or additional notes at each coupon date. Provides sponsor cash flexibility but commands risk premium. HCA issued $1.5B.",
    },
    {
      term: "CLO (Collateralized Loan Obligation)",
      termEn: "CLO (Collateralized Loan Obligation)",
      description: "100-200개 TLB를 묶어 AAA부터 Equity까지 트랜치로 발행하는 구조화 상품. LBO TLB의 최대 매수처(약 70%).",
      descriptionEn: "Structured product pooling 100-200 TLBs and issuing tranches from AAA to Equity. The largest single buyer of LBO TLBs (~70%).",
    },
    {
      term: "Single Name Concentration Limit",
      termEn: "Single Name Concentration Limit",
      description: "CLO 한 펀드가 단일 차주에 보유할 수 있는 최대 비중 (보통 2-2.5%). HCA TLB $12B은 이 제약 때문에 ~500개 CLO에 분산.",
      descriptionEn: "Maximum CLO portfolio weight in a single obligor (typically 2-2.5%). HCA's $12B TLB had to be spread across ~500 CLOs due to this constraint.",
    },
    {
      term: "Dividend Recap",
      termEn: "Dividend Recap",
      description: "포트폴리오 회사가 추가 부채를 발행해 그 자금으로 스폰서에게 특별 배당을 지급. HCA는 2010년 $4.25B 배당 리캡으로 스폰서 부분 회수.",
      descriptionEn: "Portfolio company issues new debt to pay a special dividend to sponsors. HCA executed a $4.25B dividend recap in 2010 for partial sponsor recovery.",
    },
  ],

  faq: [
    {
      q: "TLB와 TLA는 뭐가 다른가요?",
      qEn: "What's the difference between TLB and TLA?",
      a: "TLA는 은행이 보유하고 분할상환(amortizing)하는 구조. TLB는 CLO/펀드가 보유하고 만기일시상환(bullet)하는 구조. HCA의 경우 TLA $2B vs TLB $12B로 TLB가 훨씬 큼.",
      aEn: "TLA is held by banks and amortizes. TLB is held by CLOs/funds and is bullet-repaid at maturity. HCA had $2B TLA vs $12B TLB.",
    },
    {
      q: "CLO는 어떻게 작동하나요?",
      qEn: "How does a CLO work?",
      a: "CLO는 100-200개의 TLB로 구성된 포트폴리오를 트랜치로 발행. 매니저가 LBO 대출을 사들이고, AAA부터 Equity까지 트랜치별로 다른 위험-수익을 제공.",
      aEn: "A CLO pools 100-200 TLBs and issues tranches. The manager buys LBO loans; tranches from AAA to Equity offer different risk-return profiles.",
    },
    {
      q: "PIK toggle이 왜 위험한가요?",
      qEn: "Why is PIK toggle risky?",
      a: "발행자가 이자를 현금 대신 추가 채권으로 지급할 수 있는 옵션. 회사가 cash crunch에 빠지면 PIK으로 토글 → 부채만 늘어남. 디폴트 직전 시그널일 수 있음.",
      aEn: "The issuer can pay interest in additional notes instead of cash. If the company hits a cash crunch, toggling to PIK only grows debt — a potential pre-default signal.",
    },
    {
      q: "2008 위기에 HCA TLB 가격이 78까지 떨어졌는데 CLO는 안전했나요?",
      qEn: "TLB priced at 78 during 2008 — was the CLO safe?",
      a: "디폴트만 안 나면 CLO는 par + 이자 회수. 마크-투-마켓 변동은 회계적 손실이지 실현손실 아님. CLO 투자자는 만기까지 hold 가능.",
      aEn: "As long as no default occurred, CLOs recover par + interest. MTM swings are accounting losses, not realized losses. CLO investors can hold to maturity.",
    },
    {
      q: "HCA가 다른 2006-07 LBO와 다른 점은?",
      qEn: "What set HCA apart from other 2006-07 LBOs?",
      a: "헬스케어 디펜시브 + Frist 가문 노하우 + 3자 컨소시엄의 자본력 + 합리적 leverage(6.5x) + PIK toggle 현금 보존. 다른 megaLBO(Caesars, iHeart, TXU)는 cyclical 산업 + 더 높은 leverage로 디폴트.",
      aEn: "Defensive healthcare + Frist family know-how + 3-firm consortium capital base + reasonable leverage (6.5x) + PIK toggle cash preservation. Other mega-LBOs (Caesars, iHeart, TXU) were in cyclical sectors with higher leverage and defaulted.",
    },
    {
      q: "지금 시점에서 HCA LBO의 의미는?",
      qEn: "What does the HCA LBO mean today?",
      a: "LBO 자본구조 설계의 정수, CLO 시장 capacity 테스트, 메가딜에서 디펜시브 산업 선택의 중요성. 현재 HCA는 NYSE 상장 (HCA Healthcare, $80B+ 시총).",
      aEn: "It distills LBO capital structure design, tests CLO market capacity, and proves the importance of defensive sector selection in mega-deals. HCA Healthcare today trades on NYSE with a market cap of $80B+.",
    },
  ],

  sources: [
    { id: 1, text: "HCA Inc. 8-K filing — KKR/Bain/Merrill 인수 발표 (2006.07.24)", url: "https://www.sec.gov/" },
    { id: 2, text: "HCA Inc. S-1/A — 2011 IPO 등록서류 (2011.03)", url: "https://www.sec.gov/" },
    { id: 3, text: "HCA Inc. 연간보고서 FY2006~FY2011, SEC EDGAR" },
    { id: 4, text: "S&P LCD (Leveraged Commentary & Data), HCA TLB 가격 history (2006~2011)" },
    { id: 5, text: "Moody's, KKR-Bain-Merrill HCA Acquisition Credit Opinion (2006)" },
    { id: 6, text: "Wall Street Journal, 'Inside the $33 Billion HCA Buyout' (2007)" },
    { id: 7, text: "Bloomberg, 'HCA Holdings IPO Raises $3.79 Billion' (2011.03)" },
  ],

  seo: {
    title: "HCA 2006 LBO — CLO 투자자가 본 메가딜 | Deal Story",
    description:
      "$33B KKR+Bain+Merrill 컨소시엄의 HCA 인수 — 7층 자본구조, TLB $12B의 CLO 분산, 2008 위기 생존, 2011 IPO까지. LevFin 실무자 관점의 풀 케이스 스터디.",
    keywords: [
      "HCA LBO",
      "KKR Bain Merrill HCA",
      "메가LBO 자본구조",
      "Term Loan B CLO",
      "PIK Toggle Note",
      "Hospital Corporation of America",
      "2006 LBO",
      "CLO 투자자 관점",
      "LevFin 분석",
      "딜 스토리 LBO",
    ],
  },
};

export default deal;
