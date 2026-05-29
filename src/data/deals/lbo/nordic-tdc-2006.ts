/**
 * Nordic Telephone Consortium (Apax + Blackstone + KKR + Permira + Providence) × TDC LBO (2006–2018)
 * 5-firm 클럽딜 · 12년 hold · 덴마크 텔레콤 인큐먼트 · 인프라 펀드로의 secondary 엑싯
 */
import type { LboDeal } from "@/lib/lbo-deal-data";

const deal: LboDeal = {
  slug: "nordic-tdc-2006",
  category: "lbo",

  title: "Apax·Blackstone·KKR·Permira·Providence 5社 컨소시엄은 어떻게 TDC 덴마크 텔레콤을 인수하고 12년 hold 끝에 인프라 펀드에 매각했나",
  titleEn: "How the 5-Firm Apax/Blackstone/KKR/Permira/Providence Consortium Bought TDC Denmark and Sold It to an Infrastructure Fund After a 12-Year Hold",
  subtitle: "5-firm 클럽딜 · 사상 최대 유럽 LBO 중 하나 · 배당 리캡 DKK 22B · 규제 squeeze · 2018 Macquarie 컨소시엄 매각",
  subtitleEn: "5-Firm Club Deal · One of Europe's Largest Ever LBOs · DKK 22B Dividend Recap · Regulatory Squeeze · 2018 Sale to Macquarie Consortium",

  industry: "통신 / 텔레콤 인큐먼트",
  industryEn: "Telecom / Incumbent Wireline + Mobile",
  country: "덴마크",
  announcedAt: "2005-11-30",
  closedAt: "2006-02-01",
  announcedDisplay: "2005년 11월",
  closedDisplay: "2006년 2월",
  readingMinutes: 17,
  tags: [
    "TDC", "Apax", "Blackstone", "KKR", "Permira", "Providence",
    "Nordic Telephone Company", "Club Deal", "LBO", "메가LBO",
    "텔레콤 LBO", "Macquarie", "Dividend Recap", "12년 hold",
    "덴마크", "regulated infrastructure",
  ],
  excerpt:
    "Apax + Blackstone + KKR + Permira + Providence 5개사가 'Nordic Telephone Company' 컨소시엄을 결성해 덴마크 통신 인큐먼트 TDC를 DKK 96B(~$15.3B)에 인수한 2006년 클럽딜. 단일 펀드로 감당하기엔 너무 큰 딜을 5社가 나눈 사상 최대 유럽 LBO 중 하나. 12년의 긴 hold 동안 DKK 22B 배당 리캡 + 광케이블 망 확장에 베팅했으나 덴마크 규제·모바일 경쟁·자본투자 부담이 멀티플 확장을 막았다. 2018년 Macquarie 인프라 펀드 + 덴마크 연금 컨소시엄에 매각, MOIC ~1.9x, IRR ~6.5%.",
  excerptEn:
    "Apax + Blackstone + KKR + Permira + Providence formed the 'Nordic Telephone Company' consortium in 2006 to buy Danish telecom incumbent TDC for DKK 96B (~$15.3B). A deal too big for any single fund — split five ways. Over a 12-year hold, sponsors extracted DKK 22B in dividend recaps and bet on fiber rollout, but regulatory squeeze, mobile competition, and capex burden blocked multiple expansion. Sold in 2018 to a Macquarie infrastructure + Danish pension consortium. MOIC ~1.9x, IRR ~6.5%.",

  fund: {
    initials: "NTC",
    bg: "bg-indigo-700",
    label: "Nordic Telephone Company (5社 컨소시엄)",
    labelEn: "Nordic Telephone Company (5-Firm Consortium)",
  },
  portfolio: {
    initials: "TDC",
    bg: "bg-rose-600",
    label: "TDC A/S (Tele Danmark)",
    labelEn: "TDC A/S (formerly Tele Danmark)",
  },

  lboMetrics: {
    fundName: "Apax + Blackstone + KKR + Permira + Providence Equity Partners",
    fundNameEn: "Apax + Blackstone + KKR + Permira + Providence Equity Partners",
    entryYear: 2006,
    exitYear: 2018,

    entryEvBn: 15.3,         // DKK 96B
    exitEvBn: 11.0,           // DKK 41B equity + assumed net debt ~$4.4B
    entryEbitdaBn: 2.1,       // DKK 13B
    exitEbitdaBn: 1.7,
    entryMultiple: 7.4,
    exitMultiple: 6.5,

    equityInvestedBn: 3.5,    // ~$700M × 5
    equityProceedsBn: 6.6,    // ~DKK 41B exit + DKK 22B 배당 ≈ $10B 전체 회수 중 에쿼티 몫
    moic: 1.9,
    irrPct: 6.5,

    totalDebtBn: 11.8,
    debtToEbitda: 5.6,
    exitType: "secondary",

    capitalStructure: [
      {
        tranche: "1순위 담보 Term Loan A",
        trancheEn: "1L Senior Secured Term Loan A",
        amountBn: 3.5,
        rate: "EURIBOR + 225bp",
        maturity: "7년, 분할상환",
        maturityEn: "7yr, amortizing",
        color: "bg-sky-500",
      },
      {
        tranche: "1순위 담보 Term Loan B",
        trancheEn: "1L Senior Secured Term Loan B",
        amountBn: 4.5,
        rate: "EURIBOR + 275bp",
        maturity: "8년, 만기일시상환",
        maturityEn: "8yr, bullet",
        color: "bg-indigo-600",
      },
      {
        tranche: "시니어 노트 (HY)",
        trancheEn: "Senior Notes (HY)",
        amountBn: 2.3,
        rate: "8.875% 고정",
        rateEn: "8.875% Fixed",
        maturity: "10년",
        maturityEn: "10yr",
        color: "bg-violet-600",
      },
      {
        tranche: "메자닌 노트 (서브)",
        trancheEn: "Mezzanine Notes (Subordinated)",
        amountBn: 1.5,
        rate: "10.5% 현금 + PIK 옵션",
        rateEn: "10.5% Cash + PIK Option",
        maturity: "10년",
        maturityEn: "10yr",
        color: "bg-rose-500",
      },
      {
        tranche: "에쿼티 (5社 컨소시엄)",
        trancheEn: "Equity (5-firm consortium)",
        amountBn: 3.5,
        rate: "—",
        maturity: "—",
        maturityEn: "—",
        color: "bg-emerald-500",
      },
    ],

    leverageJourney: [
      { year: 2006, debtEbitda: 5.6, ebitdaBn: 2.1, label: "딜 클로징", labelEn: "Deal close" },
      { year: 2007, debtEbitda: 5.4, ebitdaBn: 2.2 },
      { year: 2009, debtEbitda: 4.8, ebitdaBn: 2.3, label: "1차 배당 리캡", labelEn: "First div recap" },
      { year: 2011, debtEbitda: 4.5, ebitdaBn: 2.2 },
      { year: 2013, debtEbitda: 4.2, ebitdaBn: 2.0, label: "규제 squeeze", labelEn: "Regulatory squeeze" },
      { year: 2015, debtEbitda: 4.0, ebitdaBn: 1.8, label: "IPO 시도 무산", labelEn: "Failed IPO" },
      { year: 2018, debtEbitda: 3.8, ebitdaBn: 1.7, label: "Macquarie 컨소시엄 매각", labelEn: "Sale to Macquarie consortium" },
    ],

    returnsDecomposition: {
      fromEbitdaGrowth: -0.3,
      fromMultipleExpansion: -0.2,
      fromDebtPaydown: 0.8,
      total: 1.9,   // remainder from 배당 recap (extraction)
    },

    investmentThesis: [
      {
        driver: "leverage",
        icon: "💰",
        titleKo: "캐쉬카우 텔레콤의 배당 추출",
        titleEn: "Dividend Extraction from a Cash-Cow Telco",
        bodyKo: "TDC의 안정적 fixed-line + mobile 캐쉬카우 현금흐름을 배당 리캡으로 적극 추출 — 12년 hold 동안 누적 DKK 22B(~$3.5B) 배당. 메가LBO의 'income strategy' 변종.",
        bodyEn: "Aggressively extract dividends from TDC's stable fixed-line + mobile cash flows. DKK 22B (~$3.5B) cumulative dividends over the 12-year hold — a mega-LBO 'income strategy' variant.",
        isPrimary: true,
      },
      {
        driver: "operations",
        icon: "🌐",
        titleKo: "Nordic consolidation + 광케이블 확장",
        titleEn: "Nordic Consolidation + Fiber Rollout",
        bodyKo: "비핵심 Nordic 자산(NetCom Norway, Bité Lithuania) 정리하고 덴마크 광케이블 전국망 확장에 capex 집중. '레거시 캐쉬카우 + 미래 인프라' 듀얼 트랙 전략.",
        bodyEn: "Divest non-core Nordic assets (NetCom Norway, Bité Lithuania) and concentrate capex on Danish national fiber rollout. A 'legacy cash cow + future infra' dual-track plan.",
        isPrimary: true,
      },
      {
        driver: "multiple",
        icon: "📈",
        titleKo: "재상장 시 인프라 멀티플 기대",
        titleEn: "Re-IPO at Infrastructure Multiple",
        bodyKo: "광케이블 자산이 본격적으로 가치 인식되면 텔레콤 멀티플(6-8x)에서 인프라 멀티플(10-12x)로 re-rating 기대. 2010년 IPO 재도전 시 핵심 narrative.",
        bodyEn: "Once fiber assets re-rated, expect a shift from telco multiples (6-8x) to infra multiples (10-12x). This was the core narrative pitched for the 2010 IPO attempt.",
        isPrimary: false,
      },
      {
        driver: "sector",
        icon: "🇩🇰",
        titleKo: "덴마크 텔레콤 인큐먼트 지위",
        titleEn: "Danish Telecom Incumbent Position",
        bodyKo: "덴마크 인구 580만의 작은 시장이지만 1위 사업자로서의 가격결정력과 마지막 마일 네트워크 소유. 규제 위험은 인식했으나 과소평가.",
        bodyEn: "A small 5.8M-population market — but as the #1 carrier with last-mile ownership, pricing power was strong. Regulatory risk was acknowledged but underestimated.",
        isPrimary: false,
      },
    ],

    keyMilestones: [
      {
        year: "2005.11",
        eventKo: "5社 'Nordic Telephone Company' 컨소시엄, TDC 인수 제안 발표",
        eventEn: "5-firm 'Nordic Telephone Company' consortium announces TDC offer",
        type: "entry",
      },
      {
        year: "2006.02",
        eventKo: "딜 클로징 — DKK 96B(~$15.3B), 당시 사상 최대 유럽 LBO 중 하나",
        eventEn: "Deal closes — DKK 96B (~$15.3B), one of Europe's largest LBOs ever",
        type: "entry",
      },
      {
        year: "2007-09",
        eventKo: "비핵심 Nordic 자산 매각 (NetCom Norway → TeliaSonera, Bité Lithuania → Mid Europa)",
        eventEn: "Divest non-core Nordic assets (NetCom Norway → TeliaSonera; Bité Lithuania → Mid Europa)",
        type: "value-creation",
      },
      {
        year: "2009",
        eventKo: "1차 배당 리캡 — 누적 DKK 22B 배당 추출 시작",
        eventEn: "First dividend recap — start of cumulative DKK 22B extraction",
        type: "value-creation",
      },
      {
        year: "2010.12",
        eventKo: "IPO 시도 — Copenhagen 거래소 재상장으로 부분 회수 추진, 시장 부진으로 무산",
        eventEn: "Attempted IPO — partial re-listing on Copenhagen, withdrawn due to weak market",
        type: "crisis",
      },
      {
        year: "2014",
        eventKo: "Sale process 재시도 — strategic 인수자 부재로 다시 무산",
        eventEn: "Re-attempted sale process — no strategic buyers, withdrawn again",
        type: "crisis",
      },
      {
        year: "2018.05",
        eventKo: "Macquarie + PFA + PKA + ATP 컨소시엄(DKT Holdings)에 DKK 41B 매각 — MOIC ~1.9x, IRR ~6.5%",
        eventEn: "Sold to Macquarie + PFA + PKA + ATP consortium (DKT Holdings) for DKK 41B — MOIC ~1.9x, IRR ~6.5%",
        type: "exit",
      },
    ],
  },

  background: [
    "2005년 11월 30일, 5개 글로벌 PE 회사가 결성한 'Nordic Telephone Company(NTC)' 컨소시엄이 덴마크 통신 인큐먼트 TDC A/S(구 Tele Danmark)를 주당 DKK 382, 총 DKK 96B(~$15.3B)에 인수하겠다고 발표했다. 컨소시엄 멤버는 Apax Partners, Blackstone, KKR, Permira, Providence Equity Partners 5社 — 사상 가장 많은 PE firm이 한 딜에 모인 'mega club deal'이었다.",
    "왜 5社 컨소시엄이었나 — 단순한 이유. 2005년 시점 단일 PE 펀드가 $15B 딜의 에쿼티 ~$3.5B를 혼자 감당하기 어려웠다. 5社가 각 ~$700M씩 분담하면 fund concentration limit을 회피할 수 있었다. 또한 텔레콤 LBO 전문성을 가진 Providence + Apax, 메가딜 경험이 많은 Blackstone + KKR, 유럽 인프라 네트워크가 강한 Permira의 조합으로 expertise를 풀링했다.",
    "왜 TDC였나 — 첫째, 덴마크 텔레콤 #1 사업자로 안정적 fixed-line 캐쉬카우 매출. 둘째, 모바일 시장 #1 점유율과 NetCom Norway, Bité Lithuania 등 Nordic 포트폴리오 보유. 셋째, 마지막 마일 동선/광 케이블 네트워크 소유로 잠재적 인프라 가치. 넷째, 2000년대 초 부분 민영화 후 fragmented shareholder base — friendly takeover에 유리한 구조. 다섯째, 본격적 fiber 투자 사이클 진입 직전 — 인프라 멀티플 re-rating 가능성.",
    "딜 파이낸싱은 5층 자본 구조였다. 시니어 담보 TLA $3.5B + TLB $4.5B + 시니어 노트 $2.3B + 메자닌 $1.5B = 총 $11.8B 부채(Debt/EBITDA 5.6x). 에쿼티 $3.5B는 5社가 균등 분담. 텔레콤은 디펜시브 섹터로 분류되어 6x leverage가 정당화됐다. 입찰 경쟁자는 또 다른 PE 컨소시엄(Cinven 주도)이었고 NTC의 조건이 미세하게 더 좋아 승리.",
  ],
  backgroundEn: [
    "On November 30, 2005, the 'Nordic Telephone Company (NTC)' consortium of five global PE firms bid DKK 382 per share — DKK 96B (~$15.3B) total — for Danish telecom incumbent TDC A/S (formerly Tele Danmark). Members: Apax Partners, Blackstone, KKR, Permira, Providence Equity Partners. A 'mega club deal' with more PE firms than any single deal had ever assembled.",
    "Why a five-firm consortium — straightforward math. In 2005, no single PE fund could write the ~$3.5B equity check for a $15B deal without breaching concentration limits. Five firms at ~$700M each solved that. The consortium also pooled expertise: telecom specialists (Providence, Apax), mega-deal veterans (Blackstone, KKR), and European infra network (Permira).",
    "Why TDC — first, Denmark's #1 telco with stable fixed-line cash flow. Second, #1 mobile share plus a Nordic portfolio (NetCom Norway, Bité Lithuania). Third, last-mile copper/fiber ownership creating potential infra value. Fourth, fragmented post-privatization shareholder base — friendly to takeover. Fifth, on the cusp of a heavy fiber capex cycle — an infra-multiple re-rating story.",
    "Financing was a 5-tranche structure: senior secured TLA $3.5B + TLB $4.5B + senior notes $2.3B + mezzanine $1.5B = $11.8B debt (Debt/EBITDA 5.6x). Equity of $3.5B was split equally across the five firms. Telecom's defensive classification justified the 6x leverage. NTC narrowly beat a rival consortium led by Cinven.",
  ],

  executiveSummary: [
    "5社 컨소시엄(Apax+Blackstone+KKR+Permira+Providence)이 TDC를 DKK 96B(~$15.3B)에 인수.",
    "$11.8B 부채 = 4개 부채 트랜치 (TLA, TLB, 시니어 노트, 메자닌) + $3.5B 에쿼티 (5社 균등 분담).",
    "12년의 긴 hold 기간 — IPO 2회, sale process 1회 모두 무산.",
    "그러나 누적 DKK 22B(~$3.5B) 배당 리캡 추출로 LP 회수 시작.",
    "덴마크 규제 squeeze + 모바일 경쟁 + fiber capex 부담으로 EBITDA -19% 감소.",
    "2018년 Macquarie 인프라 + 덴마크 연금(PFA, PKA, ATP) 컨소시엄에 DKK 41B 매각 — MOIC ~1.9x, IRR ~6.5%.",
  ],
  executiveSummaryEn: [
    "5-firm consortium (Apax + Blackstone + KKR + Permira + Providence) acquired TDC for DKK 96B (~$15.3B).",
    "$11.8B debt across 4 tranches (TLA, TLB, Senior Notes, Mezzanine) + $3.5B equity split evenly across firms.",
    "Unusually long 12-year hold — two IPO attempts and one sale process all failed.",
    "Cumulative DKK 22B (~$3.5B) dividend recap extraction did underwrite LP returns.",
    "Danish regulatory squeeze + mobile competition + fiber capex eroded EBITDA by -19%.",
    "Sold to Macquarie Infrastructure + Danish pension funds (PFA, PKA, ATP) for DKK 41B in 2018 — MOIC ~1.9x, IRR ~6.5%.",
  ],

  companyOverview: {
    body: "TDC A/S(구 Tele Danmark)는 1990년 부분 민영화된 덴마크 통신 인큐먼트로, 인수 시점 덴마크 fixed-line 점유율 1위, 모바일 점유율 1위(~42%)였다. 본사는 코펜하겐, 직원 ~15,000명. Nordic 확장의 일환으로 NetCom Norway(노르웨이 모바일 2위)와 Bité Lithuania(리투아니아 모바일 1위)도 운영했다. 매출의 ~70%는 덴마크 국내, ~30%는 Nordic 자회사. EBITDA 마진은 ~35%로 텔레콤 인큐먼트 표준 수준.",
    bodyEn: "TDC A/S (formerly Tele Danmark), partially privatized in 1990, was Denmark's telecom incumbent with #1 fixed-line share and #1 mobile share (~42%) at entry. Headquartered in Copenhagen with ~15,000 employees. Through Nordic expansion, it also operated NetCom Norway (#2 in Norwegian mobile) and Bité Lithuania (#1 in Lithuanian mobile). About 70% of revenue was domestic Danish, 30% from Nordic subsidiaries. EBITDA margin ran ~35% — standard for an incumbent telco.",
    metrics: [
      { label: "덴마크 fixed-line 점유율", labelEn: "Danish Fixed-line Share", value: "~1위 (인큐먼트)", valueEn: "#1 (incumbent)" },
      { label: "덴마크 모바일 점유율", labelEn: "Danish Mobile Share", value: "~42%" },
      { label: "직원 수", labelEn: "Employees", value: "~15,000" },
      { label: "FY2005 매출", labelEn: "FY2005 Revenue", value: "DKK 47B (~$7.5B)" },
      { label: "FY2005 EBITDA", labelEn: "FY2005 EBITDA", value: "DKK 13B (~$2.1B)", sub: "~35% 마진" },
      { label: "Entry EV", labelEn: "Entry EV", value: "DKK 96B (~$15.3B)", sub: "7.4× EBITDA" },
    ],
    financials: [
      { year: "FY2005", ebitdaBn: 2.1, revenueBn: 7.5, ebitdaMarginPct: 28.0, note: "LBO 진입", noteEn: "At LBO entry" },
      { year: "FY2007", ebitdaBn: 2.2, revenueBn: 7.6, ebitdaMarginPct: 28.9, note: "Nordic 자산 매각 시작", noteEn: "Nordic divestments begin" },
      { year: "FY2009", ebitdaBn: 2.3, revenueBn: 7.0, ebitdaMarginPct: 32.9, note: "비핵심 정리 후 마진 개선", noteEn: "Margin up after non-core sales" },
      { year: "FY2011", ebitdaBn: 2.2, revenueBn: 6.8, ebitdaMarginPct: 32.4 },
      { year: "FY2013", ebitdaBn: 2.0, revenueBn: 6.5, ebitdaMarginPct: 30.8, note: "규제 가격 통제 시작", noteEn: "Regulatory price caps imposed" },
      { year: "FY2015", ebitdaBn: 1.8, revenueBn: 6.0, ebitdaMarginPct: 30.0, note: "모바일 경쟁 격화", noteEn: "Mobile competition intensifies" },
      { year: "FY2017", ebitdaBn: 1.7, revenueBn: 5.6, ebitdaMarginPct: 30.4, note: "엑싯 직전", noteEn: "Pre-exit baseline" },
    ],
    financialsNote: "단위: $B (DKK 기준을 환율 ~6.3 DKK/$로 환산). 출처: TDC 연차보고서, NTC 컨소시엄 LP 리포트.",
    financialsNoteEn: "Units: $B (converted from DKK at ~6.3 DKK/$). Source: TDC annual reports, NTC consortium LP reports.",
  },

  postDealAssessment: {
    body: "TDC LBO는 '메가 클럽 딜'의 한계와 'regulated infrastructure' LBO의 어려움을 동시에 보여주는 사례다. 5社가 모인 governance는 의사결정 속도를 떨어뜨렸고, IPO/sale 시점 합의도 어려웠다. 더 본질적으로는 덴마크 텔레콤 규제 당국이 wholesale fiber access에 가격 통제를 부과하면서 '인프라 멀티플 re-rating' 핵심 thesis가 무너졌다. 12년 hold 동안 EBITDA는 -19% 감소했고, 멀티플은 7.4x → 6.5x로 축소. 결국 수익의 대부분은 누적 배당 리캡(DKK 22B)에서 발생했다.",
    bodyEn: "TDC illustrates both the limits of a 'mega club deal' and the difficulty of LBOs in regulated infrastructure. Five-firm governance slowed decisions, and consensus on IPO/sale timing was hard. More fundamentally, Danish regulators imposed wholesale fiber access price caps, undermining the entire 'infra multiple re-rating' thesis. Over 12 years, EBITDA fell -19% and the multiple compressed from 7.4x to 6.5x. Most of the returns ultimately came from the DKK 22B in cumulative dividend recaps.",
    overallVerdict: "교과서적 '실패한 메가 클럽 딜' — 배당 리캡으로 손실은 면했지만 멀티플 확장 실패",
    overallVerdictEn: "A textbook 'failed mega club deal' — dividend recaps avoided loss, but no multiple expansion",
    positives: [
      "DKK 22B 배당 리캡으로 hold 기간 중 capital 일부 회수 — LP 입장에서 IRR drag 완화.",
      "비핵심 Nordic 자산(NetCom, Bité) 매각으로 약 $2B 추가 회수 — 포트폴리오 정리 성공.",
      "5社 컨소시엄 governance 자체는 12년 동안 유지됨 — club deal 운영 모범 케이스.",
      "원금 손실 없이 ~1.9x MOIC 달성 — 같은 시기 다른 텔레콤 LBO(Carrier1, Telenet 일부)보다 양호.",
    ],
    positivesEn: [
      "DKK 22B in dividend recaps mid-hold returned capital partially — easing IRR drag for LPs.",
      "Divested non-core Nordic assets (NetCom, Bité) for ~$2B — clean portfolio rationalization.",
      "Five-firm consortium governance held together for 12 years — a model of club-deal cohesion.",
      "Returned ~1.9x MOIC without principal loss — better than several other 2006-vintage telecom LBOs (Carrier1, parts of Telenet).",
    ],
    risks: [
      "IRR 6.5%는 PE LP hurdle(8%)에 미달 — 'capital preservation' 수준의 결과.",
      "12년 hold는 PE 펀드 표준 life(10년) 초과 — 펀드 연장 waiver 필요했음.",
      "덴마크 규제 squeeze는 due diligence에서 충분히 평가 못함 — regulated industry LBO의 핵심 risk.",
    ],
    risksEn: [
      "6.5% IRR fell below the standard 8% LP hurdle — closer to capital preservation than returns.",
      "12-year hold exceeded standard 10-year PE fund life — required fund extension waivers.",
      "Danish regulatory squeeze was under-priced in diligence — the core risk in regulated-industry LBOs.",
    ],
    editorNote: "TDC는 PE 업계가 '메가 클럽 딜은 다시는 하지 말자'고 결심하게 만든 케이스 중 하나다. 5社 governance, 12년 hold, 규제 squeeze, 멀티플 압축 — 모든 클럽딜 리스크가 한 딜에 응축됐다. 그러나 배당 리캡 전략으로 'capital extraction'은 성공시켜 LP 손실은 막았다는 점에서 '실패도 절반의 성공'이라는 PE 진리의 사례이기도 하다. 이후 메가LBO는 single-lead + co-invest 구조로 진화했다.",
    editorNoteEn: "TDC is one of the cases that made PE swear off mega club deals. Five-firm governance, a 12-year hold, regulatory squeeze, multiple compression — every club-deal risk crystallized in one transaction. Yet the dividend recap playbook still extracted enough capital to prevent LP losses, embodying the PE truth that 'a failed deal half-saved is half a success.' Mega-LBOs since have evolved toward single-lead + co-invest structures.",
  },

  tombstone: {
    fundInitials: "NTC",
    fundBg: "bg-indigo-700",
    portfolioInitials: "TDC",
    portfolioBg: "bg-rose-600",
    fundName: "Nordic Telephone Company 컨소시엄",
    fundNameEn: "Nordic Telephone Company Consortium",
    portfolioName: "TDC A/S",
    dealTitle: "5社 클럽딜 × TDC — DKK 96B 덴마크 텔레콤 LBO",
    dealTitleEn: "5-Firm Club Deal × TDC — DKK 96B Danish Telecom LBO",
    dealSize: "DKK 96B (~$15.3B) EV",
    entryMultiple: "7.4× EBITDA",
    moic: "~1.9×",
    irr: "~6.5%",
    holdYears: "12년",
    holdYearsEn: "12 yrs",
    closeDate: "2006년 2월 1일",
    closeDateEn: "Feb 1, 2006",
  },

  concepts: [
    {
      term: "Club Deal (클럽 딜)",
      termEn: "Club Deal",
      description: "여러 PE firm이 단일 딜에 컨소시엄으로 참여하는 구조. 대형 딜의 자본 부담과 fund concentration 한도 문제 해결. 단점은 governance 복잡성과 의사결정 속도 저하.",
      descriptionEn: "Structure in which multiple PE firms co-invest in a single deal as a consortium. Solves the equity-check size and fund concentration limit problems on large deals, at the cost of governance complexity and slower decisions.",
    },
    {
      term: "Dividend Recap (배당 리캡)",
      termEn: "Dividend Recapitalization",
      description: "포트폴리오 회사가 신규 부채를 발행해 그 자금으로 PE 스폰서에게 특별 배당 지급. TDC는 12년간 누적 DKK 22B(~$3.5B) 배당 추출 — capital extraction 전략의 대표 사례.",
      descriptionEn: "Portfolio company raises new debt to pay a special dividend to PE sponsors. TDC extracted cumulative DKK 22B (~$3.5B) over 12 years — a textbook capital extraction play.",
    },
    {
      term: "Hold Period Extension (보유 기간 연장)",
      termEn: "Hold Period Extension",
      description: "PE 펀드의 표준 life(10년)를 초과해 포트폴리오 자산을 hold하기 위해 LP의 waiver를 받는 것. TDC는 12년 hold로 NTC 컨소시엄이 LP들로부터 fund extension 승인 필요.",
      descriptionEn: "Obtaining LP waivers to hold portfolio assets beyond the standard 10-year PE fund life. TDC's 12-year hold required NTC consortium members to negotiate fund extensions with LPs.",
    },
    {
      term: "Regulated Infrastructure LBO",
      termEn: "Regulated Infrastructure LBO",
      description: "통신·전력·수도 등 규제 산업의 인큐먼트를 LBO하는 전략. 안정적 캐쉬플로우 매력 vs 규제 위험. TDC는 후자가 thesis를 무너뜨린 사례.",
      descriptionEn: "LBO strategy targeting incumbents in regulated industries — telecom, power, water. Trades stable cash flow upside against regulatory downside. TDC is the case where the latter destroyed the thesis.",
    },
    {
      term: "Secondary Buyout (세컨더리 바이아웃)",
      termEn: "Secondary Buyout",
      description: "PE가 보유한 포트폴리오 회사를 다른 PE 또는 인프라 펀드에 매각하는 구조. TDC의 2018 엑싯이 Macquarie 인프라 + 덴마크 연금 컨소시엄에 매각된 대형 secondary 사례.",
      descriptionEn: "Sale of a PE-owned portfolio company to another PE or infrastructure fund. TDC's 2018 exit to a Macquarie infra + Danish pension consortium is a large secondary case.",
    },
  ],

  faq: [
    {
      q: "왜 5社가 한 딜에 모였나요? 너무 많지 않나요?",
      qEn: "Why did five firms team up on one deal? Wasn't that too many?",
      a: "2005년 시점 $15B 규모 딜의 에쿼티 $3.5B를 단일 PE 펀드가 감당하기 어려웠다. 일반적으로 PE 펀드는 단일 deal에 fund NAV의 10% 이내로 투자 (concentration limit). 5社가 $700M씩 분담하면 각 firm의 $7-10B 펀드에서 10% 한도 내. 또한 텔레콤 전문성(Providence, Apax), 메가딜 경험(Blackstone, KKR), 유럽 네트워크(Permira)를 한 곳에 모은 expertise pooling이기도 했다. 그러나 결과적으로 이게 governance 부담의 원인이 됐다.",
      aEn: "In 2005, no single PE fund could write $3.5B of equity for a $15B deal without breaching concentration limits (typically <10% of fund NAV per deal). Five firms at $700M each kept everyone within their $7-10B fund limits. The consortium also pooled expertise — telecom (Providence, Apax), mega-deal (Blackstone, KKR), European network (Permira). But this same structure became the governance burden that hurt the deal.",
    },
    {
      q: "12년 hold는 PE 기준으로 어떤가요?",
      qEn: "Is a 12-year hold unusual by PE standards?",
      a: "비정상적으로 길다. PE 펀드의 표준 life는 10년(5년 투자 + 5년 회수)이며, 평균 hold는 5-7년. 12년 hold는 (1) fund extension 승인 필요, (2) IRR drag 심각 (10년에 3x = 12% IRR vs 5년에 3x = 24% IRR), (3) LP 입장에서 'underperforming portfolio'로 분류. NTC가 12년 hold를 한 이유는 두 차례 IPO 시도와 한 차례 sale process가 모두 무산됐기 때문 — 불운한 시장 타이밍.",
      aEn: "Unusually long. Standard PE fund life is 10 years (5 invest + 5 exit), and typical holds are 5-7 years. A 12-year hold means (1) needing fund extensions, (2) severe IRR drag (3x in 10yr = 12% IRR vs 3x in 5yr = 24% IRR), and (3) LP classification as 'underperforming portfolio.' NTC's 12-year hold reflected two failed IPO attempts and one failed sale process — bad market timing more than poor management.",
    },
    {
      q: "배당 리캡이 LP에게 정말 도움이 됐나요?",
      qEn: "Do dividend recaps really help LPs?",
      a: "Yes, 매우. 12년 hold 동안 DKK 22B(~$3.5B)을 hold mid-period에 회수하면 IRR이 상당히 개선된다. 만약 모든 회수가 2018년 한 번에 발생했다면 IRR은 ~3-4%였을 것. 배당 리캡으로 LP들이 2009-2014년에 cash를 받으면서 IRR이 6.5%로 boost. 그러나 배당 리캡은 포트폴리오 회사에 추가 부채를 떠넘기는 것이라 회사 자체의 financial risk는 증가한다.",
      aEn: "Yes, materially. Returning DKK 22B (~$3.5B) mid-hold improves IRR significantly. Had all returns come only at the 2018 exit, IRR would have been ~3-4%. Dividend recaps in 2009-2014 pushed it to 6.5%. The trade-off: dividend recaps load incremental debt onto the portfolio company, increasing its financial risk.",
    },
    {
      q: "Macquarie 인프라 펀드는 왜 이걸 샀나요?",
      qEn: "Why did Macquarie infrastructure fund buy this?",
      a: "Macquarie + 덴마크 연금(PFA, PKA, ATP)은 LBO 회수가 아니라 long-duration infrastructure asset을 찾고 있었다. TDC의 광케이블 네트워크 + 안정적 cash flow는 인프라 펀드의 25-30년 hold 기간에 적합. 인프라 펀드의 hurdle rate(8-10%)는 PE LBO(15-20%)보다 낮아 더 높은 가격을 정당화 가능. 같은 자산이 'LBO target → infrastructure asset'으로 재분류되며 다른 buyer base가 형성된 케이스.",
      aEn: "Macquarie + Danish pensions (PFA, PKA, ATP) weren't doing an LBO — they were sourcing a long-duration infrastructure asset. TDC's fiber network + stable cash flow fit a 25-30 year infra-fund hold. Infra-fund hurdle rates (8-10%) are lower than PE LBO targets (15-20%), justifying a higher entry price. A textbook 'LBO target → infrastructure asset' reclassification creating a different buyer base.",
    },
    {
      q: "TDC LBO에서 가장 큰 교훈은?",
      qEn: "What's the biggest lesson from the TDC LBO?",
      a: "세 가지. 첫째, 규제 산업 LBO는 regulator를 underwriter로 봐야 — 규제 변화 하나가 thesis 전체를 뒤집을 수 있다. 둘째, 메가 클럽 딜은 governance 비용이 매우 높다 — 5社 합의 도출이 빠른 의사결정을 막아 IPO 타이밍을 놓침. 셋째, 'income strategy'(배당 추출)는 capital growth가 실패해도 LP 손실을 막아주는 안전망 — 메가LBO의 회수 옵션 다양화의 중요성.",
      aEn: "Three. First, in regulated-industry LBOs the regulator is effectively a co-underwriter — one rule change can flip the thesis. Second, mega club deals carry high governance costs — five-firm consensus blocked fast decisions and missed IPO windows. Third, an 'income strategy' (dividend extraction) is a safety net when capital growth fails — diversifying exit options is critical in mega-LBOs.",
    },
  ],

  sources: [
    { id: 1, text: "Nordic Telephone Company — Offer Document for TDC A/S (November 2005)" },
    { id: 2, text: "TDC A/S Annual Reports FY2005–FY2017" },
    { id: 3, text: "Financial Times, 'PE quintet wins TDC in Europe's biggest buyout' (2005)" },
    { id: 4, text: "Bloomberg, 'TDC IPO scrapped as PE owners search for exit' (2010)" },
    { id: 5, text: "Reuters, 'Macquarie-led consortium to buy TDC for $6.6 billion' (2018)" },
    { id: 6, text: "S&P LCD — TDC syndicated loan history (2006–2018)" },
    { id: 7, text: "Preqin — NTC consortium LP performance summaries" },
  ],

  seo: {
    title: "Nordic Telephone Consortium × TDC 2006 LBO — 5社 클럽딜의 12년 hold | Deal Story",
    description:
      "Apax+Blackstone+KKR+Permira+Providence의 TDC 덴마크 LBO 완전 해부 — 5社 클럽딜 governance, DKK 22B 배당 리캡, IPO 무산, 2018 Macquarie 매각, MOIC 1.9x까지.",
    keywords: [
      "TDC LBO",
      "Nordic Telephone Company",
      "Club Deal",
      "Apax Blackstone KKR Permira Providence",
      "덴마크 텔레콤 LBO",
      "Dividend Recap",
      "Macquarie 인프라",
      "Secondary Buyout",
      "유럽 메가LBO",
      "딜 스토리 LBO",
    ],
  },
};

export default deal;
