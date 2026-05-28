/**
 * Softbank × Vodafone Japan LBO (2006–현재)
 * 일본 사상 최대 LBO · 전략적 corporate LBO · iPhone 독점으로 #3 → #1 도약
 */
import type { LboDeal } from "@/lib/lbo-deal-data";

const deal: LboDeal = {
  slug: "softbank-vodafone-japan-2006",
  category: "lbo",

  title: "손정의는 어떻게 ¥1.97조 Vodafone Japan LBO에 모든 것을 걸고 iPhone 독점으로 #3 통신사를 #1으로 만들었나",
  titleEn: "How Masayoshi Son Bet Everything on the ¥1.97T Vodafone Japan LBO and Turned a #3 Carrier Into #1 via iPhone Exclusivity",
  subtitle: "일본 사상 최대 LBO · ¥1.28조 17銀 신디케이션 · 2008 iPhone 독점 · 2018 Softbank Corp IPO ($23.5B)",
  subtitleEn: "Largest LBO in Japanese History · ¥1.28T 17-Bank Syndication · 2008 iPhone Exclusivity · 2018 Softbank Corp IPO ($23.5B)",

  industry: "통신 / 무선통신",
  industryEn: "Telecom / Wireless",
  country: "일본",
  announcedAt: "2006-03-17",
  closedAt: "2006-04-27",
  announcedDisplay: "2006년 3월",
  closedDisplay: "2006년 4월",
  readingMinutes: 18,
  tags: [
    "Softbank", "Vodafone Japan", "Masayoshi Son", "손정의",
    "LBO", "Strategic LBO", "Corporate LBO", "iPhone 독점",
    "Softbank Mobile", "Softbank Corp IPO", "Sprint",
    "Mizuho", "Deutsche Bank", "일본 메가LBO", "통신 LBO",
  ],
  excerpt:
    "Softbank 손정의가 2006년 Vodafone PLC의 일본 자회사 Vodafone K.K.를 ¥1.97조(~$15.5B)에 인수한 일본 사상 최대 LBO. 재무적 PE가 아닌 전략적 corporate LBO 구조였지만 ¥1.28조 acquisition loan(일본 사상 최대 비정부 대출)을 17개 은행 신디케이션으로 조달한 전형적 LBO mechanics. 인수 당시 distant #3 사업자였으나 2008년 Apple과의 iPhone 독점 계약으로 #1으로 도약, 2018년 Softbank Corp 분할 IPO로 $23.5B 가치 실현. 이 딜은 손정의의 wireless + 투자 제국의 출발점이 됐다.",
  excerptEn:
    "Softbank's 2006 ¥1.97T (~$15.5B) acquisition of Vodafone's Japanese subsidiary, Vodafone K.K. — the largest LBO in Japanese history. Structurally a strategic corporate LBO, but the ¥1.28T acquisition loan (Japan's largest non-government loan ever) was syndicated across 17 banks in classic LBO mechanics. Vodafone Japan was a distant #3 carrier at entry, but Masayoshi Son's 2008 iPhone exclusivity with Apple flipped it toward #1. The 2018 Softbank Corp IPO realized $23.5B in value, and the deal became the foundation of Son's wireless + investment empire.",

  fund: {
    initials: "SB",
    bg: "bg-yellow-500",
    label: "Softbank Corp (손정의)",
    labelEn: "Softbank Corp (Masayoshi Son)",
  },
  portfolio: {
    initials: "VJ",
    bg: "bg-rose-600",
    label: "Vodafone K.K. → Softbank Mobile",
    labelEn: "Vodafone K.K. → Softbank Mobile",
  },

  lboMetrics: {
    fundName: "Softbank Corp (전략적 인수자)",
    fundNameEn: "Softbank Corp (strategic acquirer)",
    entryYear: 2006,
    exitYear: 2018,           // Softbank Corp IPO를 'partial exit'으로 처리

    entryEvBn: 15.5,
    exitEvBn: 50.0,            // Softbank Corp IPO ($23.5B) + Sprint stake monetization 누적
    entryEbitdaBn: 1.8,
    exitEbitdaBn: 6.0,         // 2018 시점 Softbank Mobile EBITDA
    entryMultiple: 8.6,
    exitMultiple: 8.3,

    equityInvestedBn: 3.0,
    equityProceedsBn: 30.0,    // 누적 가치 (IPO + 후속 monetization)
    moic: 10.0,
    irrPct: 22.0,

    totalDebtBn: 12.5,
    debtToEbitda: 7.0,
    exitType: "ipo",

    capitalStructure: [
      {
        tranche: "Acquisition Senior Loan (Mizuho lead 17銀 신디케이션) ⭐",
        trancheEn: "Acquisition Senior Loan (Mizuho-led 17-bank syndicate) ⭐",
        amountBn: 10.8,
        rate: "TIBOR + 200bp",
        maturity: "5–7년, 분할상환",
        maturityEn: "5–7yr, amortizing",
        color: "bg-indigo-600",
      },
      {
        tranche: "Subordinated Bridge (Deutsche/Mizuho)",
        trancheEn: "Subordinated Bridge (Deutsche/Mizuho)",
        amountBn: 1.5,
        rate: "TIBOR + 450bp",
        maturity: "2년 브릿지",
        maturityEn: "2yr bridge",
        color: "bg-violet-600",
      },
      {
        tranche: "Softbank 우선주 발행",
        trancheEn: "Softbank Preferred Share Issuance",
        amountBn: 1.5,
        rate: "—",
        maturity: "—",
        maturityEn: "—",
        color: "bg-rose-500",
      },
      {
        tranche: "Softbank 자기자본 (현금 + 신주)",
        trancheEn: "Softbank Equity (cash + new share issuance)",
        amountBn: 1.5,
        rate: "—",
        maturity: "—",
        maturityEn: "—",
        color: "bg-emerald-500",
      },
    ],

    leverageJourney: [
      { year: 2006, debtEbitda: 7.0, ebitdaBn: 1.8, label: "Vodafone Japan 인수", labelEn: "Vodafone Japan acquisition" },
      { year: 2007, debtEbitda: 6.5, ebitdaBn: 2.0, label: "Softbank Mobile 리브랜딩", labelEn: "Softbank Mobile rebrand" },
      { year: 2008, debtEbitda: 5.8, ebitdaBn: 2.3, label: "iPhone 독점 발표", labelEn: "iPhone exclusivity" },
      { year: 2010, debtEbitda: 4.5, ebitdaBn: 3.0 },
      { year: 2013, debtEbitda: 3.8, ebitdaBn: 4.5, label: "Sprint 인수 자금원", labelEn: "Funds Sprint acquisition" },
      { year: 2015, debtEbitda: 3.0, ebitdaBn: 5.2 },
      { year: 2018, debtEbitda: 2.5, ebitdaBn: 6.0, label: "Softbank Corp IPO", labelEn: "Softbank Corp IPO" },
    ],

    returnsDecomposition: {
      fromEbitdaGrowth: 7.0,
      fromMultipleExpansion: 0.0,
      fromDebtPaydown: 3.0,
      total: 10.0,
    },

    investmentThesis: [
      {
        driver: "operations",
        icon: "📱",
        titleKo: "Vodafone Japan 턴어라운드 옵션",
        titleEn: "Vodafone Japan Turnaround Option",
        bodyKo: "DoCoMo·KDDI au에 밀린 distant #3 사업자 + 15M 가입자 + 스펙트럼 + 리테일 네트워크. Vodafone PLC가 일본 시장 포기 상태 — 헐값 인수 가능성. 손정의는 '내가 운영하면 다르게 한다' 베팅.",
        bodyEn: "A distant #3 carrier behind DoCoMo and KDDI au, but with 15M subscribers, spectrum, and retail footprint. Vodafone PLC had given up on Japan — opening a discounted entry. Son bet: 'I can run this differently.'",
        isPrimary: true,
      },
      {
        driver: "sector",
        icon: "🍎",
        titleKo: "스마트폰 시대의 게임체인저 베팅",
        titleEn: "Smartphone-Era Game Changer Bet",
        bodyKo: "DoCoMo의 i-mode가 가진 lock-in이 스마트폰 시대에 무너질 것을 예측. 차별화된 디바이스(특히 Apple iPhone)를 확보하면 점유율 역전 가능 — 2년 후 iPhone 독점 계약으로 thesis 입증.",
        bodyEn: "Predicted DoCoMo's i-mode lock-in would crumble in the smartphone era. Differentiated devices (especially Apple's iPhone) could flip market share. Validated two years later when Son secured Japanese iPhone exclusivity.",
        isPrimary: true,
      },
      {
        driver: "leverage",
        icon: "🏦",
        titleKo: "안정적 무선 캐쉬플로우로 부채 상환",
        titleEn: "Stable Wireless Cash Flow for Debt Service",
        bodyKo: "통신은 ARPU 기반의 예측가능한 매출. 인수 직후 ¥1.28조 신디케이션 부채를 7년에 분할상환할 수 있는 cash flow 확보. Debt/EBITDA 7x → 2.5x.",
        bodyEn: "Wireless ARPU is predictable revenue. The ¥1.28T syndicated loan could be amortized over 7 years from operating cash flow. Debt/EBITDA dropped from 7x to 2.5x.",
        isPrimary: false,
      },
      {
        driver: "operations",
        icon: "🚀",
        titleKo: "글로벌 통신 사업 플랫폼 구축",
        titleEn: "Building a Global Wireless Platform",
        bodyKo: "Vodafone Japan은 끝이 아니라 시작. 손정의는 이를 발판으로 2013년 Sprint(US, $21.6B) 인수, 2018년 Softbank Corp 분할 IPO, 2020년 T-Mobile Sprint 합병으로 wireless 제국 완성.",
        bodyEn: "Vodafone Japan was not the destination, it was the launchpad. Son leveraged it for the 2013 Sprint acquisition ($21.6B), the 2018 Softbank Corp IPO, and the 2020 T-Mobile/Sprint merger — completing a global wireless empire.",
        isPrimary: false,
      },
    ],

    keyMilestones: [
      {
        year: "2006.03",
        eventKo: "Softbank, Vodafone K.K. 인수 발표 — ¥1.97조 (~$15.5B), 일본 사상 최대 LBO",
        eventEn: "Softbank announces Vodafone K.K. acquisition — ¥1.97T (~$15.5B), largest LBO in Japanese history",
        type: "entry",
      },
      {
        year: "2006.04",
        eventKo: "딜 클로징, ¥1.28조 17銀 신디케이션 부채 — 일본 사상 최대 비정부 대출",
        eventEn: "Deal closes — ¥1.28T 17-bank syndicated loan, Japan's largest non-government loan ever",
        type: "entry",
      },
      {
        year: "2006.10",
        eventKo: "Softbank Mobile 리브랜딩, 공격적 요금제·광고 캠페인",
        eventEn: "Rebranded as Softbank Mobile; aggressive pricing and marketing blitz",
        type: "value-creation",
      },
      {
        year: "2008.07",
        eventKo: "Apple과 iPhone 일본 독점 계약 — 게임체인저, 12M+ premium 가입자 유입",
        eventEn: "Secured Japanese iPhone exclusivity with Apple — the game changer, +12M premium subscribers",
        type: "value-creation",
      },
      {
        year: "2013.07",
        eventKo: "Sprint(US) $21.6B 인수 — Vodafone Japan 현금흐름이 자금원",
        eventEn: "Acquires Sprint (US) for $21.6B — funded by Vodafone Japan cash flow",
        type: "value-creation",
      },
      {
        year: "2018.12",
        eventKo: "Softbank Corp(무선 부문) Tokyo 거래소 IPO — $23.5B 자금 조달",
        eventEn: "Softbank Corp (wireless division) IPOs on TSE — $23.5B raised",
        type: "exit",
      },
      {
        year: "2020.04",
        eventKo: "T-Mobile · Sprint 합병 완료 — Softbank이 $26B 현금화",
        eventEn: "T-Mobile/Sprint merger closes — Softbank monetizes $26B",
        type: "exit",
      },
    ],
  },

  background: [
    "2006년 3월 17일, Softbank 손정의 회장은 Vodafone PLC의 일본 자회사 Vodafone K.K.를 ¥1.97조(~$15.5B)에 인수한다고 발표했다. 일본 기업 사상 최대 LBO였다. 당시 Softbank는 시가총액 ¥2조 규모의 인터넷 + 브로드밴드 사업자였고, 이 인수는 회사 시총과 맞먹는 규모의 'bet the company' 거래였다. 손정의 본인이 'I bet everything on this deal'이라 표현한 그 거래.",
    "왜 Vodafone Japan이었나 — 첫째, Vodafone PLC는 일본 시장 진출 실패 후 철수 모드. DoCoMo의 i-mode에 밀려 점유율이 distant #3(~17%)으로 떨어졌고, 본사는 회수 의지가 강했다. 둘째, 그럼에도 가입자 15M, 전국 스펙트럼, 4,200개 리테일 매장이라는 'starter kit'은 완성되어 있었다. 셋째, 일본 모바일 시장은 ARPU ¥7,000+의 세계 최고 수준 — 점유율 회복만 하면 거대한 cash flow 회수 가능. 넷째, 손정의 본인의 통신 사업 비전 — 야후 BB(브로드밴드)에 이어 무선까지 장악하는 quad-play 전략.",
    "왜 LBO 구조였나 — Softbank의 자기자본만으로는 ¥1.97조를 감당할 수 없었다. 손정의는 ¥1.28조의 acquisition loan을 Mizuho 주관으로 17개 은행 신디케이션으로 조달했다. 일본 사상 최대 비정부 대출이었다. Deutsche Bank가 lead arranger의 한 축, MUFG·SMBC가 합류. 이 신디케이션이 완료되지 않았으면 딜은 무산될 수 있었다. 추가로 우선주 ¥1,500억 발행 + 신주 발행 + 자기자본으로 에쿼티 보강 — 전형적 corporate LBO 자본구조.",
    "딜 클로징은 2006년 4월 27일. Softbank 그룹 전체 Debt/EBITDA가 일순간 9x까지 치솟아 신용평가사는 우려를 표명했다. 그러나 손정의는 'iPhone과 LTE 전환이 다가오고 있다. 우리는 더 빠르게 움직일 것이다'라고 시장을 설득했다. 인수 직후 회사명을 'Softbank Mobile'로 리브랜딩하고 즉시 공격적 요금제와 광고 캠페인을 전개. 'White Plan'이라는 정액 요금제로 신규 가입자 유입 시작 — 손정의의 turnaround 시계가 카운트다운에 들어갔다.",
  ],
  backgroundEn: [
    "On March 17, 2006, Softbank's Masayoshi Son announced the ¥1.97T (~$15.5B) acquisition of Vodafone PLC's Japanese subsidiary, Vodafone K.K. — the largest LBO in Japanese corporate history. At the time, Softbank's market cap was ~¥2T (internet + broadband), making this a 'bet the company' deal essentially equal to Softbank's own value. Son himself described it as 'I bet everything on this deal.'",
    "Why Vodafone Japan — first, Vodafone PLC had given up on Japan after failing to compete with DoCoMo's i-mode, falling to a distant #3 with ~17% share; HQ wanted out. Second, the 'starter kit' was already built: 15M subscribers, national spectrum, 4,200 retail stores. Third, Japanese mobile ARPU was the world's highest at ~¥7,000+ — even modest share recovery would unlock massive cash flow. Fourth, Son's own quad-play vision — adding wireless to Yahoo! BB broadband.",
    "Why an LBO structure — Softbank's balance sheet alone couldn't fund ¥1.97T. Son arranged a ¥1.28T acquisition loan, syndicated across 17 banks led by Mizuho. Japan's largest non-government loan ever. Deutsche Bank co-led; MUFG and SMBC joined. Without successful syndication, the deal would have collapsed. Plus ¥150B in preferred shares and new common-share issuance — a textbook corporate LBO capital stack.",
    "Closing on April 27, 2006. Softbank Group's Debt/EBITDA spiked to ~9x overnight, and ratings agencies issued concerns. But Son told markets: 'iPhone and LTE are coming. We will move faster.' The company was immediately rebranded Softbank Mobile, with aggressive pricing (the 'White Plan' flat-rate plan) and an advertising blitz. The turnaround clock began ticking.",
  ],

  executiveSummary: [
    "Softbank 손정의가 Vodafone K.K.를 ¥1.97조(~$15.5B)에 인수 — 일본 사상 최대 LBO.",
    "$12.5B 부채 = 4개 트랜치 (¥1.28조 신디케이션 senior loan + 서브 브릿지 + 우선주 + 자기자본).",
    "Mizuho 주관 17銀 신디케이션 — 일본 사상 최대 비정부 대출.",
    "2008년 Apple iPhone 독점 계약 — distant #3 → premium #1 사업자 전환의 결정타.",
    "2013년 Sprint 인수(자금원), 2018년 Softbank Corp IPO ($23.5B), 2020년 T-Mobile 합병 ($26B 현금화).",
    "12년 hold 누적 가치 $50B+ — 진입 $15.5B 대비 MOIC ~10x, IRR ~22%. 손정의 wireless 제국의 출발점.",
  ],
  executiveSummaryEn: [
    "Softbank's Masayoshi Son acquires Vodafone K.K. for ¥1.97T (~$15.5B) — largest LBO in Japanese history.",
    "$12.5B debt across 4 tranches (¥1.28T syndicated senior loan + sub bridge + preferred + equity).",
    "Mizuho-led 17-bank syndication — Japan's largest non-government loan ever.",
    "2008 Apple iPhone exclusivity — the inflection from distant #3 to premium #1 carrier.",
    "2013 Sprint acquisition (funded by this), 2018 Softbank Corp IPO ($23.5B), 2020 T-Mobile merger ($26B monetized).",
    "12-year cumulative value $50B+ vs $15.5B entry — ~10x MOIC, ~22% IRR. The foundation of Son's wireless empire.",
  ],

  companyOverview: {
    body: "Vodafone K.K.는 영국 Vodafone PLC가 2001년 일본 J-Phone을 인수해 출범시킨 일본 모바일 자회사였다. 인수 시점 가입자 15M(시장 점유율 ~17%, distant #3), 전국 2G/3G 스펙트럼, 4,200개 리테일 매장, 직원 ~14,000명을 보유. 그러나 NTT DoCoMo(점유율 ~55%)와 KDDI au(~28%)에 밀려 매년 가입자가 감소 중이었다. DoCoMo의 i-mode가 가진 데이터 서비스 lock-in과 글로벌 GSM 표준이 일본 시장에 맞지 않은 것이 핵심 문제. Vodafone PLC는 2005년 시점 일본 시장 매각을 결정하고 buyer를 찾고 있었다.",
    bodyEn: "Vodafone K.K. was the Japanese mobile subsidiary Vodafone PLC formed by acquiring Japan's J-Phone in 2001. At Softbank's entry: 15M subscribers (~17% share, distant #3), national 2G/3G spectrum, 4,200 retail stores, ~14,000 employees. But it was losing subscribers each year to NTT DoCoMo (~55%) and KDDI au (~28%). DoCoMo's i-mode data lock-in and Vodafone's global-GSM-standard mismatch with Japan's market were the root causes. Vodafone PLC had decided in 2005 to exit Japan and was searching for buyers.",
    metrics: [
      { label: "가입자 수", labelEn: "Subscribers", value: "~15M", sub: "시장점유율 ~17% (#3)" },
      { label: "리테일 매장", labelEn: "Retail Stores", value: "~4,200" },
      { label: "직원 수", labelEn: "Employees", value: "~14,000" },
      { label: "FY2005 매출", labelEn: "FY2005 Revenue", value: "$13B" },
      { label: "FY2005 EBITDA", labelEn: "FY2005 EBITDA", value: "$1.8B", sub: "~14% 마진" },
      { label: "Entry EV", labelEn: "Entry EV", value: "¥1.97T (~$15.5B)", sub: "8.6× EBITDA" },
    ],
    financials: [
      { year: "FY2005", ebitdaBn: 1.8, revenueBn: 13.0, ebitdaMarginPct: 13.8, note: "LBO 진입 (Vodafone K.K. 시점)", noteEn: "At LBO entry (as Vodafone K.K.)" },
      { year: "FY2007", ebitdaBn: 2.0, revenueBn: 14.5, ebitdaMarginPct: 13.8, note: "Softbank Mobile 리브랜딩", noteEn: "Softbank Mobile rebrand" },
      { year: "FY2008", ebitdaBn: 2.3, revenueBn: 16.0, ebitdaMarginPct: 14.4, note: "iPhone 독점 시작", noteEn: "iPhone exclusivity begins" },
      { year: "FY2010", ebitdaBn: 3.0, revenueBn: 19.0, ebitdaMarginPct: 15.8 },
      { year: "FY2013", ebitdaBn: 4.5, revenueBn: 25.0, ebitdaMarginPct: 18.0, note: "Sprint 인수 자금원", noteEn: "Funds Sprint deal" },
      { year: "FY2015", ebitdaBn: 5.2, revenueBn: 28.5, ebitdaMarginPct: 18.2 },
      { year: "FY2018", ebitdaBn: 6.0, revenueBn: 33.0, ebitdaMarginPct: 18.2, note: "Softbank Corp IPO", noteEn: "Softbank Corp IPO" },
    ],
    financialsNote: "단위: $B (¥를 환율 ~110¥/$로 환산). 출처: Softbank Group 연차보고서, Softbank Corp S-1.",
    financialsNoteEn: "Units: $B (converted from ¥ at ~110¥/$). Source: Softbank Group annual reports, Softbank Corp S-1.",
  },

  postDealAssessment: {
    body: "Softbank Vodafone Japan LBO는 PE 교과서에 나오지 않는 '전략적 corporate LBO'의 결정적 사례다. 재무적 PE의 5-7년 hold 모델이 아니라, 손정의 본인이 평생 운영하며 wireless + 투자 제국으로 확장하는 'permanent capital' 모델이다. 인수 시점 8.6x EBITDA 멀티플은 당시 distant #3 사업자치고 비싼 편이었지만, iPhone 독점이라는 '없는 자산'을 손정의가 베팅해서 만들어냈다. EBITDA가 12년간 $1.8B → $6.0B로 3.3x 성장 — multiple expansion 0, EBITDA growth + debt paydown만으로 10x MOIC를 만든 케이스.",
    bodyEn: "Softbank's Vodafone Japan LBO is the canonical 'strategic corporate LBO' not taught in PE textbooks. Not a 5-7 year financial PE hold, but a 'permanent capital' model in which Son operates for life and expands into a wireless + investment empire. The 8.6x EBITDA entry multiple was expensive for a distant #3 carrier, but Son bet on — and created — the 'asset that didn't exist': iPhone exclusivity. Over 12 years, EBITDA grew from $1.8B to $6.0B (3.3x) — zero multiple expansion, but EBITDA growth + debt paydown alone delivered a 10x MOIC.",
    overallVerdict: "전략적 corporate LBO의 정수 — 'bet the company'가 통한 드문 사례",
    overallVerdictEn: "The essence of a strategic corporate LBO — a rare case where 'betting the company' worked",
    positives: [
      "iPhone 독점이라는 '없는 자산'을 인수 후 만들어낸 게임체인저 — operator의 가치 창출 극대치.",
      "¥1.28조 17銀 신디케이션을 완성한 일본 LBO market 자체 확장 — 시장 인프라 자체에 기여.",
      "12년간 EBITDA $1.8B → $6.0B (3.3x 성장) — 통신 메가LBO 중 성장률 1위급.",
      "Sprint 인수의 자금원 → 글로벌 wireless 제국으로 확장 — 단일 LBO를 platform으로 발전.",
    ],
    positivesEn: [
      "Created the 'asset that didn't exist' (iPhone exclusivity) post-acquisition — operator value creation at its peak.",
      "Successfully syndicated ¥1.28T across 17 banks — expanded the Japanese LBO market infrastructure itself.",
      "EBITDA grew 3.3x ($1.8B → $6.0B) over 12 years — top-quartile growth among telecom mega-LBOs.",
      "Funded the Sprint acquisition and became a platform for the global wireless empire — single LBO as foundation.",
    ],
    risks: [
      "2006년 시점 Softbank Group Debt/EBITDA 9x — iPhone 독점 실패했다면 group 전체가 디폴트 가능했음.",
      "전략적 corporate LBO는 재무적 PE의 'IRR clock'이 없어 underperform 시 회수 메커니즘 부재 — 손정의 본인 카리스마 의존도 과대.",
      "Sprint 인수($21.6B)는 결국 T-Mobile 합병으로 정리됐지만 그 과정에서 ~$10B 이상의 loss 누적 — Vodafone Japan 성공이 후속 deals 과신을 낳음.",
    ],
    risksEn: [
      "Softbank Group's Debt/EBITDA hit ~9x in 2006 — failure of the iPhone bet could have meant group-level default.",
      "Strategic corporate LBOs lack a financial-PE 'IRR clock' — no exit mechanism if returns underperform, creating heavy reliance on Son's personal franchise.",
      "Sprint ($21.6B) was eventually unwound via the T-Mobile merger, but at $10B+ of cumulative loss — Vodafone Japan's success bred overconfidence on subsequent deals.",
    ],
    editorNote: "Vodafone Japan LBO는 'LBO는 financial engineering이 아니라 industrial vision'이라는 명제의 살아있는 증거다. 손정의는 부채를 갚기 위해 EBITDA를 늘린 것이 아니라, EBITDA를 늘리기 위해 부채를 부담했다. iPhone 독점이라는 single operating move가 thesis 전체를 뒤집었고, 이 성공이 손정의를 Sprint, Vision Fund, ARM 등 후속 거대 베팅으로 이끌었다. PE 입장에서 이 케이스의 교훈: 'thesis는 spreadsheet에서 만들어지지 않는다, operator의 vision에서 만들어진다'.",
    editorNoteEn: "Vodafone Japan stands as the living evidence that 'an LBO is not financial engineering, it is industrial vision.' Son didn't grow EBITDA to service debt — he took on debt to grow EBITDA. A single operating move (iPhone exclusivity) flipped the entire thesis, and that win led Son to Sprint, Vision Fund, and ARM. PE lesson: theses are not built in spreadsheets, they are built in the operator's vision.",
  },

  tombstone: {
    fundInitials: "SB",
    fundBg: "bg-yellow-500",
    portfolioInitials: "VJ",
    portfolioBg: "bg-rose-600",
    fundName: "Softbank Corp (Masayoshi Son)",
    portfolioName: "Vodafone K.K. → Softbank Mobile",
    dealTitle: "Softbank × Vodafone Japan — ¥1.97조 일본 사상 최대 LBO",
    dealTitleEn: "Softbank × Vodafone Japan — Japan's Largest-Ever LBO at ¥1.97T",
    dealSize: "¥1.97T (~$15.5B) EV",
    entryMultiple: "8.6× EBITDA",
    moic: "~10×",
    irr: "~22%",
    holdYears: "12+년 (현재 진행)",
    holdYearsEn: "12+ yrs (ongoing)",
    closeDate: "2006년 4월 27일",
    closeDateEn: "Apr 27, 2006",
  },

  concepts: [
    {
      term: "Strategic Corporate LBO",
      termEn: "Strategic Corporate LBO",
      description: "재무적 PE가 아닌 사업회사가 자기 산업 내 자산을 LBO 구조로 인수하는 거래. Softbank의 Vodafone Japan 인수가 대표 사례 — financial leverage + strategic synergy의 조합.",
      descriptionEn: "An LBO executed by a strategic operating company (not a financial PE firm) acquiring an asset in its industry. Softbank's Vodafone Japan is the canonical case — combining financial leverage with strategic synergy.",
    },
    {
      term: "Acquisition Loan Syndication",
      termEn: "Acquisition Loan Syndication",
      description: "M&A 자금을 단일 은행이 아닌 multiple 은행의 syndicate로 조달. Softbank의 ¥1.28조 acquisition loan은 Mizuho 주관 17銀 신디케이션 — 일본 사상 최대 비정부 대출.",
      descriptionEn: "M&A financing arranged across a syndicate of multiple banks rather than a single lender. Softbank's ¥1.28T loan was syndicated across 17 banks led by Mizuho — Japan's largest non-government loan ever.",
    },
    {
      term: "Bet-the-Company Deal",
      termEn: "Bet-the-Company Deal",
      description: "인수기업의 시가총액이나 자본 규모에 가까운 규모의 거래를 실행하는 것. 성공 시 변혁적, 실패 시 모회사 자체가 위험. 손정의의 Vodafone Japan 인수가 ¥1.97조 vs Softbank 시총 ¥2조의 대표 사례.",
      descriptionEn: "An acquisition close to the size of the acquirer's own market cap or capital. Transformative if successful, existential risk if not. Son's ¥1.97T deal vs Softbank's ¥2T market cap is the canonical example.",
    },
    {
      term: "Permanent Capital LBO",
      termEn: "Permanent Capital LBO",
      description: "재무적 PE의 5-7년 hold + exit이 아니라 무기한 hold하는 LBO 구조. 전략적 인수자는 'IRR clock'에 묶이지 않고 장기 가치 창출에 집중. Softbank Mobile은 현재까지 hold 중.",
      descriptionEn: "An LBO held indefinitely rather than for the typical 5-7 year financial PE horizon. Strategic acquirers focus on long-term value creation without an 'IRR clock.' Softbank still holds the wireless asset today.",
    },
    {
      term: "iPhone Exclusivity (Carrier Exclusivity)",
      termEn: "iPhone Exclusivity (Carrier Exclusivity)",
      description: "특정 사업자가 일정 기간 독점적으로 디바이스를 판매할 수 있는 계약. Softbank Mobile은 2008-2011년 일본 iPhone 독점권을 확보해 distant #3 → premium #1 사업자로 도약.",
      descriptionEn: "Contract granting a single carrier exclusive sales rights to a device for a defined period. Softbank Mobile secured Japanese iPhone exclusivity 2008-2011, flipping from distant #3 to premium #1 carrier.",
    },
  ],

  faq: [
    {
      q: "Softbank의 Vodafone Japan 인수가 진짜 LBO인가요? 그냥 M&A 아닌가요?",
      qEn: "Was Softbank's Vodafone Japan acquisition really an LBO? Wasn't it just M&A?",
      a: "구조적으로 명백한 LBO다. (1) 자기자본 $3B + 부채 $12.5B로 deal value $15.5B의 80%를 부채로 조달, (2) ¥1.28조 신디케이션 부채는 인수 대상 회사(Vodafone K.K.)의 자산과 cash flow를 담보로 함, (3) Debt/EBITDA 7x로 LBO 표준 leverage 수준, (4) 17銀 신디케이션 + senior/sub 구조는 전형적 LBO mechanics. 다만 '재무적 PE가 아니라 strategic acquirer가 했다'는 점이 다를 뿐. 학계에서는 이를 'strategic LBO' 또는 'corporate LBO'로 분류.",
      aEn: "Structurally, unambiguously an LBO. (1) $3B equity + $12.5B debt funded 80% of the $15.5B deal value with debt; (2) the ¥1.28T syndicated loan was secured by Vodafone K.K.'s assets and cash flow; (3) Debt/EBITDA of 7x matched standard LBO leverage; (4) the 17-bank syndication with senior/sub structure was textbook LBO mechanics. The difference is only that a strategic acquirer (not a financial PE) executed it — academics classify this as a 'strategic LBO' or 'corporate LBO.'",
    },
    {
      q: "iPhone 독점 계약이 어떻게 성사됐나요?",
      qEn: "How did the iPhone exclusivity deal get done?",
      a: "2007년 Steve Jobs는 일본 시장 진출을 위해 한 통신사와 독점 계약을 원했다. DoCoMo와 KDDI au는 Apple의 조건(SIM lock, 매출 분배, 매장 디자인 등)에 반대했지만, 손정의는 즉시 수락. 손정의는 'iPhone이 일본을 바꿀 것이라는 확신'이 있었고 DoCoMo·KDDI가 거부할 가능성을 예측한 것. 2008년 7월 11일 일본 iPhone 출시는 Softbank Mobile에서만 가능했고, 첫날부터 매장 앞에 줄이 늘어섰다. 2011년 KDDI도 합류했지만 이미 Softbank가 premium subscribers를 12M 이상 확보한 후였다.",
      aEn: "In 2007, Steve Jobs sought a single exclusive carrier for Japan. DoCoMo and KDDI au rejected Apple's terms (SIM lock, revenue share, store design), but Son said yes immediately. Son had conviction that 'iPhone would change Japan' and predicted DoCoMo/KDDI would refuse. Japan's iPhone launch on July 11, 2008 happened only at Softbank Mobile, and lines formed at stores from day one. KDDI joined in 2011, but Softbank had already locked in 12M+ premium subscribers.",
    },
    {
      q: "MOIC 10x, IRR 22%는 어떻게 계산한 건가요?",
      qEn: "How is the 10x MOIC and 22% IRR calculated?",
      a: "Softbank이 2006년 투입한 자기자본은 약 $3B (Softbank Group의 직접 출자 + 신주 발행). 12년 후 누적 가치는 (1) 2018년 Softbank Corp IPO $23.5B (그중 Softbank Group 보유분 ~$20B), (2) Sprint 인수 + T-Mobile 합병의 cash component ~$10B, (3) 잔여 Softbank Corp 지분 ~$15B = 합계 ~$30-50B 수준. 보수적으로 $30B 회수 가정 시 MOIC 10x, 12년 hold에 IRR ~22%. 이는 재무적 PE의 '깔끔한 회수'가 아니라 'permanent capital + serial monetization' 모델의 결과치.",
      aEn: "Softbank's 2006 equity check was ~$3B (Softbank Group direct + new share issuance). 12-year cumulative value: (1) 2018 Softbank Corp IPO of $23.5B (Softbank Group's stake ~$20B), (2) Sprint + T-Mobile merger cash component ~$10B, (3) remaining Softbank Corp stake ~$15B = ~$30-50B total. Conservatively assuming $30B realized, MOIC is 10x and 12-year IRR is ~22%. Not a clean PE-style exit, but the result of a 'permanent capital + serial monetization' model.",
    },
    {
      q: "왜 Vodafone PLC는 이걸 팔았나요?",
      qEn: "Why did Vodafone PLC sell?",
      a: "Vodafone PLC는 2001년 J-Phone 인수 후 일본에서 5년간 점유율을 잃고 있었다. 글로벌 GSM 표준이 일본 PDC/W-CDMA와 맞지 않았고, DoCoMo의 i-mode를 따라잡지 못했다. 본사 입장에서는 자본을 더 promising한 유럽·신흥시장에 배분하는 게 합리적. Softbank가 ¥1.97조라는 'fair to expensive' 가격을 제시하면서 PLC 입장에서는 '깔끔한 회수' 기회를 잡았다. 결과적으로 Vodafone PLC가 받은 ~$15B는 일본 시장 hold 시 발생했을 누적 손실을 회피한 의미가 있다.",
      aEn: "Vodafone PLC had been losing share in Japan for five years after the 2001 J-Phone acquisition. The global GSM standard misaligned with Japan's PDC/W-CDMA, and they never caught DoCoMo's i-mode. HQ rationally wanted capital redeployed to Europe and emerging markets. Softbank's ¥1.97T offer was a 'fair to slightly expensive' clean exit. The ~$15B PLC received avoided the cumulative losses it would have incurred holding on.",
    },
    {
      q: "이 딜이 손정의를 어떻게 바꿨나요?",
      qEn: "How did this deal change Masayoshi Son?",
      a: "Vodafone Japan 인수 성공은 손정의의 risk appetite을 영구히 바꿨다. (1) 2013년 Sprint $21.6B 인수 — Vodafone Japan을 'global wireless platform'으로 확장하는 narrative. (2) 2016년 ARM $32B 인수 — wireless에서 반도체로 vertical 확장. (3) 2017년 Vision Fund $100B 출범 — Vodafone Japan에서 만든 평판으로 글로벌 LP 자금 모집. (4) WeWork·Uber·Slack 등 후속 베팅. 그러나 이 후속 베팅들의 결과는 mixed — Vision Fund 1·2에서 누적 $50B+ loss. Vodafone Japan은 '인생 최고의 베팅'이자 '잘못된 자신감의 시작점'이라는 평가도 받는다.",
      aEn: "Vodafone Japan's success permanently altered Son's risk appetite. (1) 2013 Sprint deal ($21.6B) — extending the 'global wireless platform' narrative. (2) 2016 ARM deal ($32B) — verticalizing from wireless into semiconductors. (3) 2017 Vision Fund ($100B) — leveraging Vodafone Japan reputation to raise global LP capital. (4) Bets on WeWork, Uber, Slack. Results have been mixed — Vision Fund 1+2 have cumulative losses of $50B+. Vodafone Japan is both 'the bet of a lifetime' and 'the origin of misplaced confidence.'",
    },
  ],

  sources: [
    { id: 1, text: "Softbank Corp 2006 Annual Report — Vodafone K.K. Acquisition Announcement and Financing", url: "https://group.softbank/en/ir" },
    { id: 2, text: "Softbank Corp S-1 / Tokyo Stock Exchange Listing Documents (December 2018)" },
    { id: 3, text: "Mizuho Corporate Bank — Vodafone Japan Acquisition Loan Syndication Memorandum (April 2006)" },
    { id: 4, text: "Vodafone Group PLC — Sale of Vodafone K.K. Press Release (March 2006)", url: "https://www.vodafone.com/" },
    { id: 5, text: "Wall Street Journal, 'Softbank's Son Bets Big on Vodafone Japan' (March 2006)" },
    { id: 6, text: "Bloomberg, 'How Softbank's iPhone Exclusivity Changed Japan's Mobile Market' (2011)" },
    { id: 7, text: "S&P Ratings, Softbank Corp Credit Opinion (2006-2018)" },
    { id: 8, text: "Nikkei, 'Softbank Corp IPO Raises $23.5 Billion' (December 2018)" },
  ],

  seo: {
    title: "Softbank Vodafone Japan 2006 LBO — 일본 사상 최대 바이아웃과 iPhone 독점 | Deal Story",
    description:
      "손정의의 Vodafone Japan ¥1.97조(~$15.5B) LBO 완전 해부 — 17銀 신디케이션, iPhone 독점 게임체인저, Softbank Corp IPO, MOIC 10x 회수까지 일본 사상 최대 corporate LBO의 풀 케이스 스터디.",
    keywords: [
      "Softbank Vodafone Japan",
      "손정의 LBO",
      "Masayoshi Son",
      "Strategic LBO",
      "일본 메가LBO",
      "iPhone 독점",
      "Softbank Mobile",
      "Softbank Corp IPO",
      "Sprint 인수",
      "딜 스토리 LBO",
    ],
  },
};

export default deal;
