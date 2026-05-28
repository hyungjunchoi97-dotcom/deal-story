/**
 * KKR + Stefano Pessina × Alliance Boots LBO (2007–2014)
 * 당시 유럽 최대 LBO (£11.1B / ~$22B) — 경영자 파트너십 모델, 2단계 전략적 엑싯
 */
import type { LboDeal } from "@/lib/lbo-deal-data";

const deal: LboDeal = {
  slug: "kkr-alliance-boots-2007",
  category: "lbo",

  title: "KKR은 어떻게 £111억 Alliance Boots LBO로 유럽 최대 바이아웃을 완성하고 Walgreens 2단계 엑싯으로 회수했나",
  titleEn: "How KKR Closed the £11.1B Alliance Boots LBO — Europe's Largest Ever — and Exited via a Two-Stage Walgreens Deal",
  subtitle: "Pessina 경영자 파트너십 · 사상 최대 유럽 LBO · 약국+의약품 도매 수직통합 · 2012/2014 Walgreens 2단계 매각",
  subtitleEn: "Pessina-Led Management Partnership · Largest European LBO Ever · Pharmacy + Wholesale Vertical Integration · Two-Stage Walgreens Exit (2012/2014)",

  industry: "약국 체인 / 의약품 도매",
  industryEn: "Pharmacy Retail / Pharma Distribution",
  country: "영국",
  announcedAt: "2007-04-09",
  closedAt: "2007-06-26",
  announcedDisplay: "2007년 4월",
  closedDisplay: "2007년 6월",
  readingMinutes: 16,
  tags: [
    "KKR", "Alliance Boots", "Stefano Pessina", "LBO", "유럽 LBO",
    "Walgreens", "WBA", "Management Buyout", "메가LBO",
    "약국 체인", "의약품 도매", "2007 LBO", "Trade Sale 엑싯", "Henry Kravis",
  ],
  excerpt:
    "KKR이 Alliance Boots 경영자였던 Stefano Pessina와 손잡고 £11.1B(~$22B)에 영국 LSE 상장 약국·의약품 도매 그룹을 인수한 2007년 딜. 당시 유럽 최대 LBO로, 경영자가 에쿼티의 35%를 롤오버하는 '매니지먼트 파트너십' 모델을 정립했다. 7년 뒤 Walgreens가 2012년 45% 지분 인수 → 2014년 잔여 55% 인수의 2단계 구조로 KKR을 회수시켰고, 결과는 WBA(Walgreens Boots Alliance) 출범으로 이어진다. KKR MOIC ~2x, IRR 10–15%.",
  excerptEn:
    "KKR's 2007 take-private of Alliance Boots — the UK-listed pharmacy and pharma distribution group — was Europe's largest LBO ever at £11.1B (~$22B). KKR partnered with executive chairman Stefano Pessina, who rolled ~35% of the equity, codifying the 'management partnership' template. Seven years later, Walgreens executed a two-stage exit (45% in 2012, remaining 55% in 2014), forming Walgreens Boots Alliance (NASDAQ: WBA). KKR earned ~2x MOIC and a 10–15% IRR.",

  fund: {
    initials: "KKR",
    bg: "bg-indigo-700",
    label: "KKR + Stefano Pessina 컨소시엄",
    labelEn: "KKR + Stefano Pessina Consortium",
  },
  portfolio: {
    initials: "AB",
    bg: "bg-emerald-700",
    label: "Alliance Boots GmbH",
    labelEn: "Alliance Boots GmbH",
  },

  lboMetrics: {
    fundName: "KKR European Fund II + Pessina Family Holdings",
    fundNameEn: "KKR European Fund II + Pessina Family Holdings",
    entryYear: 2007,
    exitYear: 2014,

    entryEvBn: 22.0,         // £11.1B ≈ $22B
    exitEvBn: 28.0,           // 2014 Walgreens 잔여 인수 시점 implied EV
    entryEbitdaBn: 1.9,       // ~£950M ≈ $1.9B
    exitEbitdaBn: 2.4,
    entryMultiple: 11.7,      // £11.1B / £950M
    exitMultiple: 11.7,       // multiple 사실상 비확장

    equityInvestedBn: 8.2,    // £4.1B ≈ $8.2B (KKR + Pessina + co-invest)
    equityProceedsBn: 16.4,   // ~£8B 회수
    moic: 2.0,
    irrPct: 12.0,

    totalDebtBn: 14.0,        // £7.0B ≈ $14B
    debtToEbitda: 7.4,
    exitType: "trade-sale",

    capitalStructure: [
      {
        tranche: "1순위 담보 Term Loan A",
        trancheEn: "1L Senior Secured Term Loan A",
        amountBn: 3.0,
        rate: "LIBOR + 250bp",
        maturity: "7년, 분할상환",
        maturityEn: "7yr, amortizing",
        color: "bg-sky-500",
      },
      {
        tranche: "1순위 담보 Term Loan B ⭐",
        trancheEn: "1L Senior Secured Term Loan B ⭐",
        amountBn: 7.0,
        rate: "LIBOR + 300bp",
        maturity: "8년, 만기일시상환",
        maturityEn: "8yr, bullet",
        color: "bg-indigo-600",
      },
      {
        tranche: "1순위 담보 시니어 노트",
        trancheEn: "1L Senior Secured Notes",
        amountBn: 2.0,
        rate: "8.75% 고정",
        rateEn: "8.75% Fixed",
        maturity: "9년",
        maturityEn: "9yr",
        color: "bg-violet-600",
      },
      {
        tranche: "메자닌 노트 (서브)",
        trancheEn: "Mezzanine Notes (Subordinated)",
        amountBn: 2.0,
        rate: "10.25% 현금 + 2% PIK",
        rateEn: "10.25% Cash + 2% PIK",
        maturity: "10년",
        maturityEn: "10yr",
        color: "bg-rose-500",
      },
      {
        tranche: "에쿼티 (KKR + Pessina + 공동투자)",
        trancheEn: "Equity (KKR + Pessina + Co-investors)",
        amountBn: 8.2,
        rate: "—",
        maturity: "—",
        maturityEn: "—",
        color: "bg-emerald-500",
      },
    ],

    leverageJourney: [
      { year: 2007, debtEbitda: 7.4, ebitdaBn: 1.9, label: "딜 클로징", labelEn: "Deal close" },
      { year: 2008, debtEbitda: 7.1, ebitdaBn: 2.0, label: "GFC 진입", labelEn: "GFC begins" },
      { year: 2009, debtEbitda: 6.7, ebitdaBn: 2.1 },
      { year: 2010, debtEbitda: 6.0, ebitdaBn: 2.2 },
      { year: 2011, debtEbitda: 5.3, ebitdaBn: 2.3 },
      { year: 2012, debtEbitda: 4.8, ebitdaBn: 2.4, label: "Walgreens 45% 인수", labelEn: "Walgreens 45% stake" },
      { year: 2014, debtEbitda: 4.0, ebitdaBn: 2.5, label: "Walgreens 잔여 인수", labelEn: "Walgreens full acquisition" },
    ],

    returnsDecomposition: {
      fromEbitdaGrowth: 0.6,
      fromMultipleExpansion: 0.0,
      fromDebtPaydown: 1.4,
      total: 2.0,
    },

    investmentThesis: [
      {
        driver: "sector",
        icon: "💊",
        titleKo: "약국 + 의약품 도매 수직통합",
        titleEn: "Pharmacy + Wholesale Vertical Integration",
        bodyKo: "Alliance UniChem(도매) + Boots(소매)의 2006년 합병으로 막 출범한 유럽 최대 약국·도매 통합 플랫폼. 약국 매대(retail)와 약품 유통(wholesale)을 한 지붕 아래 운영해 마진 풀을 양쪽에서 회수.",
        bodyEn: "The 2006 merger of Alliance UniChem (wholesale) + Boots (retail) had just created Europe's largest integrated pharmacy-distribution platform. Owning both retail dispensing margin and wholesale distribution margin under one roof.",
        isPrimary: true,
      },
      {
        driver: "operations",
        icon: "🤝",
        titleKo: "Pessina 경영자 파트너십",
        titleEn: "Pessina Management Partnership",
        bodyKo: "Pessina가 에쿼티 체크의 ~35%(약 £1.5B)를 롤오버하며 Executive Chairman으로 잔류. KKR은 자본·구조화 제공, Pessina는 사업 운영과 글로벌 파마 네트워크 제공. 경영자 alignment를 최대화한 'Management LBO' 모범.",
        bodyEn: "Pessina rolled ~35% (~£1.5B) of the equity check and stayed on as Executive Chairman. KKR brought capital and structuring; Pessina brought operating know-how and global pharma relationships. The blueprint for a 'management LBO' with maximum executive alignment.",
        isPrimary: true,
      },
      {
        driver: "leverage",
        icon: "💸",
        titleKo: "안정적 FCF 기반 디레버리징",
        titleEn: "Deleveraging via Stable FCF",
        bodyKo: "처방약 수요는 경기 사이클과 무관 + 도매 사업은 working capital light. 연 £1.5B+ FCF로 7년간 부채 상환, D/EBITDA 7.4x → 4.0x.",
        bodyEn: "Prescription drug demand is non-cyclical, and wholesale is working-capital light. ~£1.5B+ FCF p.a. paid down debt steadily, taking leverage from 7.4x to 4.0x over seven years.",
        isPrimary: false,
      },
      {
        driver: "operations",
        icon: "🌏",
        titleKo: "신흥시장 확장 + Walgreens 제휴",
        titleEn: "Emerging Market Expansion + Walgreens Alliance",
        bodyKo: "중국·터키·러시아 도매 시장 진출과 Beauty 카테고리(No7, Soltan) 브랜드 투자. 2012년 Walgreens 45% 지분 매각은 단순 회수가 아니라 미국 시장 접근의 전략적 옵션을 만든 거래.",
        bodyEn: "Wholesale expansion into China, Turkey, Russia, plus investment in beauty brands (No7, Soltan). The 2012 sale of 45% to Walgreens was not just a return event — it created a strategic option on US market access.",
        isPrimary: false,
      },
    ],

    keyMilestones: [
      {
        year: "2007.04",
        eventKo: "KKR + Pessina, £11.1B LBO 발표 — Terra Firma·Cinven·CVC 등 경합 끝에 승리",
        eventEn: "KKR + Pessina announce £11.1B take-private — winning bid vs Terra Firma, Cinven, CVC",
        type: "entry",
      },
      {
        year: "2007.06",
        eventKo: "딜 클로징, LSE 상장 폐지. Pessina가 Executive Chairman 취임",
        eventEn: "Deal closes, LSE delisting completed. Pessina becomes Executive Chairman",
        type: "entry",
      },
      {
        year: "2008.09",
        eventKo: "리먼 쇼크 — 그러나 처방약 매출 안정적, EBITDA 오히려 +5% 성장",
        eventEn: "Lehman shock — but prescription revenues hold; EBITDA grows +5%",
        type: "crisis",
      },
      {
        year: "2009-11",
        eventKo: "중국·터키·러시아 도매 확장, No7 등 Beauty 브랜드 글로벌 출시",
        eventEn: "Wholesale expansion into China, Turkey, Russia; global rollout of No7 beauty brand",
        type: "value-creation",
      },
      {
        year: "2012.06",
        eventKo: "Walgreens가 45% 지분 인수 — $6.7B 현금 + 144M Walgreens 주식 (~$11B 가치)",
        eventEn: "Walgreens acquires 45% stake — $6.7B cash + 144M Walgreens shares (~$11B value)",
        type: "exit",
      },
      {
        year: "2014.08",
        eventKo: "Walgreens, 잔여 55% 인수 완료 → Walgreens Boots Alliance(WBA) 출범",
        eventEn: "Walgreens acquires remaining 55% → forms Walgreens Boots Alliance (NASDAQ: WBA)",
        type: "exit",
      },
      {
        year: "2015~",
        eventKo: "Pessina, WBA Executive Chairman 및 CEO 역임 (2015-2021)",
        eventEn: "Pessina serves as WBA Executive Chairman and CEO (2015-2021)",
        type: "value-creation",
      },
    ],
  },

  background: [
    "2007년 4월 9일, KKR은 영국 LSE 상장사 Alliance Boots를 주당 £10.40, 총 £11.1B(~$22B)에 비공개 전환한다고 발표했다. 당시 유럽 사상 최대 LBO였다. 그러나 이 딜의 진짜 주인공은 KKR이 아니라 이탈리아계 사업가 Stefano Pessina였다. Pessina는 Alliance UniChem(유럽 최대 의약품 도매)을 키운 인물로, 2006년 영국 Boots와의 합병으로 Alliance Boots를 출범시킨 장본인이었다.",
    "왜 Alliance Boots가 LBO 타겟이었나 — 첫째, 약국 소매(Boots: 영국 시장 점유율 1위) + 의약품 도매(Alliance Healthcare: 유럽 14개국 운영)의 수직통합 구조. 둘째, 처방약 수요는 경기 사이클과 거의 무관한 디펜시브 매출. 셋째, 신흥시장(중국·러시아·터키) 도매 확장의 거대한 옵션. 넷째, Pessina라는 deal-originator이자 operator가 35% 에쿼티를 롤오버하며 합류 — 경영진 alignment 최강.",
    "왜 KKR이었나 — Pessina는 합병 직후인 2006년 후반부터 'Boots를 비공개로 전환해 장기 전략을 추진하자'는 아이디어를 PE 시장에 타진했고, 2007년 초 KKR Henry Kravis와의 파트너십을 선택했다. KKR은 유럽 메가딜 경험, 영국 LBO 자금 조달 네트워크, 의료·소비재 섹터 전문성을 제공했다. 경합 후보였던 Terra Firma(Guy Hands), Cinven, CVC를 모두 따돌렸다.",
    "딜 파이낸싱은 7층 부채 구조의 클래식 LBO였다. 1L TLA £1.5B, TLB £3.5B, 시니어 노트 £1B, 메자닌 £1B (합계 £7B / ~$14B). KKR + Pessina + 공동투자자가 £4.1B 에쿼티 — 이 중 Pessina + 경영진이 약 £1.5B, KKR이 약 £1.7B, 공동투자자가 약 £0.9B 분담. Debt/EBITDA 7.4x — 처방약 비즈니스의 현금흐름 안정성을 감안하면 공격적이지만 합리적 수준이었다.",
  ],
  backgroundEn: [
    "On April 9, 2007, KKR announced the take-private of UK-listed Alliance Boots at £10.40 per share — £11.1B (~$22B) total. The largest European LBO ever at the time. But the real protagonist was not KKR — it was Stefano Pessina, the Italian businessman who had built Alliance UniChem (Europe's largest pharma wholesaler) and engineered the 2006 merger with UK's Boots that created Alliance Boots.",
    "Why Alliance Boots fit the LBO template — first, vertical integration: pharmacy retail (Boots: #1 in UK) + pharma wholesale (Alliance Healthcare: 14 European countries). Second, prescription drug demand is largely non-cyclical. Third, optionality on emerging-market wholesale expansion (China, Russia, Turkey). Fourth, Pessina — the deal originator and operator — rolled 35% of equity, maximizing management alignment.",
    "Why KKR — Pessina had been shopping the take-private idea since late 2006, and chose KKR (Henry Kravis) in early 2007. KKR brought European mega-deal experience, UK LBO financing networks, and healthcare/consumer sector expertise. The consortium beat out Terra Firma (Guy Hands), Cinven, and CVC in a competitive auction.",
    "Financing was a classic seven-layer LBO stack. TLA £1.5B, TLB £3.5B, senior notes £1B, mezzanine £1B (total £7B / ~$14B debt). Equity of £4.1B was split: Pessina + management ~£1.5B, KKR ~£1.7B, co-investors ~£0.9B. Debt/EBITDA of 7.4x — aggressive but reasonable given prescription-drug cash flow stability.",
  ],

  executiveSummary: [
    "KKR + Pessina, Alliance Boots를 £11.1B(~$22B)에 인수 — 당시 유럽 사상 최대 LBO.",
    "Pessina가 에쿼티의 35%(약 £1.5B)를 롤오버하며 Executive Chairman 잔류 — 'Management LBO' 모범.",
    "£7.0B 부채 = 5개 트랜치 (TLA, TLB, 시니어 노트, 메자닌, 에쿼티 cushion).",
    "2008 GFC에서도 EBITDA +5% 성장 — 처방약 디펜시브의 위력.",
    "2012년 Walgreens 45% 지분 매각 ($6.7B 현금 + 주식) → 2014년 잔여 55% 인수 → WBA 출범.",
    "KKR MOIC ~2x, IRR 10–15% — 멀티플 확장은 없었지만 EBITDA 성장 + 디레버리징으로 회수.",
  ],
  executiveSummaryEn: [
    "KKR + Pessina take Alliance Boots private at £11.1B (~$22B) — Europe's largest LBO ever at the time.",
    "Pessina rolled ~35% of equity (£1.5B) and stayed as Executive Chairman — the 'Management LBO' template.",
    "£7.0B debt across 5 tranches (TLA, TLB, Senior Notes, Mezzanine, plus equity cushion).",
    "EBITDA grew +5% through 2008 GFC — proof of prescription drug defensiveness.",
    "Walgreens acquired 45% in 2012 ($6.7B cash + stock) → remaining 55% in 2014 → forming WBA.",
    "KKR earned ~2x MOIC, 10–15% IRR — no multiple expansion, but EBITDA growth + deleveraging delivered.",
  ],

  companyOverview: {
    body: "Alliance Boots는 2006년 영국 Boots Group(설립 1849, 약국 체인)과 스위스-이탈리아 Alliance UniChem(설립 1997, 의약품 도매)의 합병으로 출범한 유럽 최대 약국·도매 통합 그룹이다. 인수 시점 14개국 약국 매장 2,600개, 의약품 도매 380개 distribution center, 매출 £15B+, EBITDA £950M(마진 ~6.3%) 규모. 영국 처방약 시장 점유율 1위, 유럽 의약품 도매 점유율 1위. 본사는 세제 효율을 위해 스위스 Zug에 등록된 GmbH 구조.",
    bodyEn: "Alliance Boots was created in 2006 by the merger of UK's Boots Group (founded 1849, pharmacy retail) and the Swiss-Italian Alliance UniChem (founded 1997, pharma distribution) — making it Europe's largest integrated pharmacy and wholesale group. At entry, it operated 2,600 pharmacy stores across 14 countries, 380 distribution centers, with £15B+ revenue and £950M EBITDA (~6.3% margin). #1 in UK prescription market share and #1 in European pharma wholesale. The holding was structured as a Swiss GmbH (registered in Zug) for tax efficiency.",
    metrics: [
      { label: "약국 매장 수", labelEn: "Pharmacy Stores", value: "~2,600", sub: "14개국" },
      { label: "Distribution Center", labelEn: "Distribution Centers", value: "~380" },
      { label: "직원 수", labelEn: "Employees", value: "~100,000" },
      { label: "FY2007 매출", labelEn: "FY2007 Revenue", value: "£15.0B" },
      { label: "FY2007 EBITDA", labelEn: "FY2007 EBITDA", value: "£950M", sub: "~6.3% 마진" },
      { label: "Entry EV", labelEn: "Entry EV", value: "£11.1B (~$22B)", sub: "11.7× EBITDA" },
    ],
    financials: [
      { year: "FY2007", ebitdaBn: 1.9, revenueBn: 30.0, ebitdaMarginPct: 6.3, note: "LBO 진입 (£를 $로 환산)", noteEn: "At LBO entry (GBP to USD)" },
      { year: "FY2008", ebitdaBn: 2.0, revenueBn: 31.5, ebitdaMarginPct: 6.3 },
      { year: "FY2009", ebitdaBn: 2.1, revenueBn: 32.5, ebitdaMarginPct: 6.5, note: "GFC에도 처방약 매출 안정", noteEn: "Prescription stable through GFC" },
      { year: "FY2010", ebitdaBn: 2.2, revenueBn: 33.5, ebitdaMarginPct: 6.6 },
      { year: "FY2011", ebitdaBn: 2.3, revenueBn: 34.5, ebitdaMarginPct: 6.7, note: "신흥시장 도매 확장", noteEn: "EM wholesale expansion" },
      { year: "FY2012", ebitdaBn: 2.4, revenueBn: 35.5, ebitdaMarginPct: 6.8, note: "Walgreens 45% 인수", noteEn: "Walgreens 45% deal" },
      { year: "FY2014", ebitdaBn: 2.5, revenueBn: 36.5, ebitdaMarginPct: 6.8, note: "Walgreens 잔여 인수, WBA 출범", noteEn: "Full Walgreens deal, WBA formed" },
    ],
    financialsNote: "단위: $B (GBP 원본을 환율 ~$2/£로 환산). 출처: Alliance Boots 연차보고서.",
    financialsNoteEn: "Units: $B (converted from GBP at ~$2/£). Source: Alliance Boots annual reports.",
  },

  postDealAssessment: {
    body: "KKR Alliance Boots LBO는 '경영자 파트너십' 모델의 성공 사례로 PE 교과서에 자리잡았다. Pessina가 35% 에쿼티를 롤오버하면서 alignment를 만들었고, 7년의 hold 기간 동안 처방약 디펜시브 + 신흥시장 확장 + 디레버리징의 3박자가 모두 작동했다. 다만 엑싯 멀티플(11.7x)이 진입 멀티플과 같아 multiple expansion 기여도는 0 — 수익의 대부분은 EBITDA 성장과 부채 상환에서 나왔다. 2단계 Walgreens 매각 구조는 세금 효율과 미국 시장 옵션을 동시에 달성한 정교한 설계였다.",
    bodyEn: "KKR's Alliance Boots became the canonical 'management partnership' LBO. Pessina's 35% rollover aligned interests, and over a seven-year hold, defensive prescription cash flow + EM wholesale expansion + deleveraging all worked. But the exit multiple (11.7x) matched entry — zero multiple-expansion contribution. Returns came from EBITDA growth and debt paydown. The two-stage Walgreens exit was an elegant design that achieved both tax efficiency and US market optionality.",
    overallVerdict: "경영자 파트너십 모델의 모범 — 멀티플 확장 없이도 회수 가능함을 증명",
    overallVerdictEn: "A model management-partnership LBO — proving returns are possible without multiple expansion",
    positives: [
      "Pessina 35% 롤오버로 경영자 alignment 최강 — '딜 메이커가 곧 오퍼레이터' 구조.",
      "처방약 디펜시브가 GFC를 정면으로 막아냄 — 2008년 EBITDA +5% 성장.",
      "2단계 Walgreens 매각 (2012 45% → 2014 55%)으로 세금 efficient 엑싯 + 잔여 지분 가치 protection.",
      "WBA를 출범시켜 Pessina가 글로벌 약국 황제로 등극 — 단순 회수 이상의 strategic legacy.",
    ],
    positivesEn: [
      "Pessina's 35% rollover delivered top-tier alignment — the deal originator was also the operator.",
      "Prescription defensiveness deflected the GFC head-on — 2008 EBITDA grew +5%.",
      "Two-stage Walgreens exit (45% in 2012 → 55% in 2014) achieved tax efficiency and stub-equity protection.",
      "Created WBA and elevated Pessina to global pharmacy emperor — strategic legacy beyond a simple return.",
    ],
    risks: [
      "Multiple expansion 기여 0 — entry 11.7x = exit 11.7x. 사이클 운이 없었으면 수익은 더 낮았을 것.",
      "Debt/EBITDA 7.4x 진입은 처방약 비즈니스치고도 공격적 — GFC가 더 심했다면 디폴트 가능.",
      "엑싯 후 WBA 주가는 $80(2015 peak)에서 ~$8(2025)로 폭락 — KKR이 빠진 후의 비즈니스 가치 의문.",
    ],
    risksEn: [
      "Zero contribution from multiple expansion — entry 11.7x = exit 11.7x. Returns would have been lower absent cycle luck.",
      "Entry leverage of 7.4x was aggressive even for a prescription business — a worse GFC could have triggered default.",
      "WBA stock collapsed from ~$80 (2015 peak) to ~$8 (2025) — questioning the business value KKR exited at the top of.",
    ],
    editorNote: "Alliance Boots는 'multiple expansion 없이도 LBO가 성공할 수 있는가'에 대한 답이다. 답은 'Yes — EBITDA 성장 + 디레버리징만으로 2x MOIC는 가능'. 그러나 IRR 12%는 PE 펀드 hurdle 8%를 약간 상회하는 수준 — 진입 멀티플이 높은 메가LBO의 수익 한계를 보여주는 케이스이기도 하다. Pessina의 'deal originator + operator' 모델은 이후 European PE의 표준이 됐다.",
    editorNoteEn: "Alliance Boots answers the question: can an LBO succeed without multiple expansion? Yes — EBITDA growth + deleveraging alone can deliver 2x MOIC. But a 12% IRR only marginally beats an 8% PE hurdle — the case also illustrates the ceiling on mega-LBO returns when entry multiples are high. Pessina's 'originator + operator' template became the European PE standard.",
  },

  tombstone: {
    fundInitials: "KKR",
    fundBg: "bg-indigo-700",
    portfolioInitials: "AB",
    portfolioBg: "bg-emerald-700",
    fundName: "KKR + Stefano Pessina 컨소시엄",
    fundNameEn: "KKR + Stefano Pessina Consortium",
    portfolioName: "Alliance Boots GmbH",
    dealTitle: "KKR × Alliance Boots — £11.1B 유럽 최대 LBO",
    dealTitleEn: "KKR × Alliance Boots — Europe's Largest LBO at £11.1B",
    dealSize: "£11.1B (~$22B) EV",
    entryMultiple: "11.7× EBITDA",
    moic: "~2.0×",
    irr: "~12%",
    holdYears: "7년",
    holdYearsEn: "7 yrs",
    closeDate: "2007년 6월 26일",
    closeDateEn: "Jun 26, 2007",
  },

  concepts: [
    {
      term: "Management LBO (경영자 LBO)",
      termEn: "Management LBO / MBO",
      description: "기존 경영진이 PE와 함께 자기 회사를 비공개로 전환하는 LBO 구조. Pessina의 35% 롤오버가 대표적. 경영자 alignment 최대화가 핵심.",
      descriptionEn: "An LBO in which existing management partners with PE to take their own company private. Pessina's 35% rollover is the canonical example — maximizing management alignment.",
    },
    {
      term: "Equity Rollover",
      termEn: "Equity Rollover",
      description: "상장사 주식을 보유한 경영진이 매각 대금을 현금으로 받지 않고 신규 비공개 법인의 지분으로 재투자하는 것. 세금 이연 + alignment 신호의 이중 효과.",
      descriptionEn: "Management forgoes cash proceeds and reinvests their stake into the new private vehicle. Achieves tax deferral and signals alignment.",
    },
    {
      term: "2단계 Trade Sale (Two-Stage Strategic Exit)",
      termEn: "Two-Stage Strategic Exit",
      description: "전략적 인수자에게 1단계로 소수 지분(예: 45%)을 매각하고, 옵션 행사 시점에 잔여 지분을 매각하는 구조. 세금 efficient + 잔여 지분의 멀티플 회복 시간 제공.",
      descriptionEn: "A two-stage sale to a strategic acquirer — first a minority stake (e.g., 45%), then the remainder upon option exercise. Tax-efficient and gives the stub equity time to re-rate.",
    },
    {
      term: "수직통합 (Vertical Integration)",
      termEn: "Vertical Integration",
      description: "가치사슬의 인접 단계를 한 회사가 운영하는 구조. Alliance Boots는 약품 도매(upstream) + 약국 소매(downstream)를 통합해 양쪽 마진을 동시 회수.",
      descriptionEn: "One company operating adjacent steps of the value chain. Alliance Boots combined pharma wholesale (upstream) and pharmacy retail (downstream) to capture margin on both sides.",
    },
    {
      term: "Stub Equity",
      termEn: "Stub Equity",
      description: "전략적 인수자가 일부 지분만 인수한 후 PE가 보유하는 잔여 소수 지분. Walgreens 1단계 인수 후 KKR/Pessina의 55% 지분이 stub equity 사례.",
      descriptionEn: "The residual minority stake PE retains after a strategic acquires a partial interest. KKR/Pessina's 55% after Walgreens' first-stage purchase is a textbook stub.",
    },
  ],

  faq: [
    {
      q: "왜 KKR이 단독으로 인수하지 않고 Pessina와 파트너십을 맺었나요?",
      qEn: "Why did KKR partner with Pessina instead of doing the deal alone?",
      a: "Pessina가 deal-originator였기 때문이다. Alliance UniChem 회장이었던 그가 Boots와의 합병을 직접 설계했고, 합병 후 비공개 전환 아이디어도 그가 PE 시장에 가져왔다. 또한 그가 경영을 계속해야 처방약 도매 글로벌 네트워크가 유지된다는 판단이 있었다. KKR 입장에서 35% 에쿼티 분담은 자본 부담도 줄이고 alignment도 만드는 이중 효과였다.",
      aEn: "Because Pessina was the deal originator. As chairman of Alliance UniChem, he engineered the Boots merger and then brought the take-private idea to PE. KKR also needed him to stay on to preserve the global pharma wholesale network. The 35% equity split reduced KKR's capital burden and created alignment simultaneously.",
    },
    {
      q: "Walgreens가 왜 2단계로 인수했나요? 한 번에 100% 사면 안 되나요?",
      qEn: "Why did Walgreens acquire in two stages instead of 100% at once?",
      a: "세 가지 이유. 첫째, 세금 — 미국 회계기준에서 2단계 구조가 자본이득세 측면에서 유리. 둘째, 통합 리스크 — 1단계 45% 인수로 'option' 보유 상태에서 사업·문화 통합을 테스트한 후 2단계로 완전 인수. 셋째, 자금 부담 분산 — 한 번에 $11B+ 현금 + 주식 발행은 Walgreens 입장에서 financial flexibility 부담. 2년 간격을 두면 차입 capacity 회복.",
      aEn: "Three reasons. First, taxes — the two-stage structure was more favorable under US capital gains rules. Second, integration risk — owning a 45% option let Walgreens test the business/culture integration before committing to full ownership. Third, funding flexibility — issuing $11B+ in cash and stock at once would have strained Walgreens' balance sheet. Two years between stages allowed leverage capacity to recover.",
    },
    {
      q: "MOIC 2x, IRR 12%는 PE 기준으로 good인가요?",
      qEn: "Is 2x MOIC and 12% IRR good by PE standards?",
      a: "솔직한 평가: '평균보다 약간 좋은 정도'. PE 펀드의 일반적 목표는 MOIC 2.5x+, IRR 18%+다. Alliance Boots IRR 12%는 LP hurdle(보통 8%)을 넘지만 carry trigger(15-20%)에 도달했는지는 fund 구조에 따라 다르다. 다만 (1) 유럽 메가LBO 중 GFC를 무사 통과한 사례가 드물고, (2) entry 11.7x = exit 11.7x로 multiple expansion 없이 회수했다는 점에서 정성적 평가는 높다.",
      aEn: "Honest take: above average but not outstanding. Typical PE targets are 2.5x+ MOIC and 18%+ IRR. Alliance Boots' 12% IRR beats the standard 8% LP hurdle but may or may not trigger carry depending on fund waterfall. Qualitatively, however, (1) few European mega-LBOs survived the GFC intact and (2) returning 2x with zero multiple expansion is impressive in itself.",
    },
    {
      q: "Pessina는 이 딜로 얼마나 벌었나요?",
      qEn: "How much did Pessina personally make from this deal?",
      a: "Pessina의 £1.5B 롤오버는 KKR과 같은 비율로 회수했다고 가정하면 약 £3B(~$5B)로 평가된다. 게다가 Walgreens 인수 대가의 상당 부분이 Walgreens 주식이었기 때문에, 2014년 시점 Pessina는 WBA의 최대 개인 주주가 됐다. 2015-2021년 WBA CEO 재임 중 누적 보유 주식 가치는 $10B+ 수준으로 추정 — Forbes 기준 세계 최고 부유한 약국 사업가로 분류됐다.",
      aEn: "Assuming Pessina recovered at the same multiple as KKR, his £1.5B rollover became ~£3B (~$5B). And because much of the Walgreens consideration was stock, by 2014 Pessina was WBA's largest individual shareholder. During his 2015-2021 tenure as WBA CEO, his stake was estimated at $10B+ — Forbes ranked him among the world's richest pharmacy operators.",
    },
    {
      q: "엑싯 후 WBA 주가가 폭락했다는데, KKR이 운이 좋았던 건가요?",
      qEn: "WBA stock collapsed after the exit — was KKR just lucky?",
      a: "어느 정도는 그렇다. KKR이 완전 엑싯한 2014년 WBA 주가는 $70+ 수준이었고 2015년 peak은 $90 가까이 갔다. 그러나 2020년대 들어 약국 대비 온라인 처방·Amazon Pharmacy 경쟁 격화로 WBA는 구조적 압박을 받고 2024년에는 $8까지 하락했다. KKR이 2014년 엑싯했기에 망정이지, 2018년 이후까지 hold했다면 수익률은 크게 달라졌을 것 — 'PE는 회수 타이밍이 알파'라는 격언의 사례.",
      aEn: "Partly, yes. WBA traded at $70+ when KKR fully exited in 2014 and peaked near $90 in 2015. But the 2020s brought structural pressure — online prescriptions, Amazon Pharmacy — and WBA fell to ~$8 by 2024. Had KKR held past 2018, returns would have looked very different. A canonical example of 'in PE, exit timing is alpha.'",
    },
  ],

  sources: [
    { id: 1, text: "Alliance Boots — Scheme Document and Offer Announcement (April 2007)" },
    { id: 2, text: "KKR 2007 Annual Letter to Investors — European Fund II commentary" },
    { id: 3, text: "Walgreens Co. 8-K — Step 1 Alliance Boots Acquisition (June 2012)", url: "https://www.sec.gov/" },
    { id: 4, text: "Walgreens Boots Alliance — Form S-4 (Step 2 closing, 2014)", url: "https://www.sec.gov/" },
    { id: 5, text: "Financial Times, 'KKR and Pessina seal £11bn Boots deal' (April 2007)" },
    { id: 6, text: "Bloomberg, 'How Pessina Became Pharmacy's Quiet Billionaire' (2014)" },
    { id: 7, text: "S&P LCD — Alliance Boots syndicated loan history (2007–2014)" },
  ],

  seo: {
    title: "KKR Alliance Boots 2007 LBO — 유럽 최대 바이아웃과 Walgreens 2단계 엑싯 | Deal Story",
    description:
      "£11.1B (~$22B) KKR + Pessina의 Alliance Boots LBO 완전 해부 — 경영자 파트너십 모델, 처방약 디펜시브, 2012/2014 Walgreens 2단계 trade sale, MOIC 2x 회수까지.",
    keywords: [
      "KKR Alliance Boots",
      "Stefano Pessina",
      "유럽 최대 LBO",
      "Walgreens Boots Alliance",
      "Management LBO",
      "Equity Rollover",
      "약국 LBO",
      "2007 LBO",
      "Trade Sale 엑싯",
      "딜 스토리 LBO",
    ],
  },
};

export default deal;
