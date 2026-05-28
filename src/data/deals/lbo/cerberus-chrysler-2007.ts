/**
 * Cerberus Capital × Chrysler LBO (2007-2009)
 * 2년 만에 챕터11 — Cerberus 에쿼티 $7.4B 전액 손실, 사이클 산업 LBO의 교과서적 실패
 *
 * 스폰서 앵글: Steve Feinberg의 자동차 산업 베팅. Daimler 디스트레스 매각의 기회처럼 보였지만,
 * GFC + 가솔린 $4 + UAW 대치 + 정치 리스크가 동시에 폭발해 LBO 사상 가장 빠른 와이프아웃 중 하나로 기록.
 */
import type { LboDeal } from "@/lib/lbo-deal-data";

const deal: LboDeal = {
  slug: "cerberus-chrysler-2007",
  category: "lbo",

  title: "Cerberus는 어떻게 $74억 Chrysler LBO로 2년 만에 에쿼티를 전액 잃었나",
  titleEn: "How Cerberus Lost All $7.4B of Equity in Two Years on the Chrysler LBO",
  subtitle:
    "Daimler 디스트레스 매각 · GFC + 가솔린 $4 직격탄 · 2009년 챕터11 · 정부 구제 · Fiat 무상 인수",
  subtitleEn:
    "Bought from a Distressed Daimler · Crushed by GFC + $4 Gas · 2009 Chapter 11 · Government Bailout · Fiat Takes Over for Nothing",

  industry: "자동차 / OEM",
  industryEn: "Automotive / OEM",
  country: "미국",
  announcedAt: "2007-05-14",
  closedAt: "2007-08-03",
  announcedDisplay: "2007년 5월",
  closedDisplay: "2007년 8월",
  readingMinutes: 16,
  tags: [
    "Cerberus",
    "Chrysler",
    "Steve Feinberg",
    "LBO 실패",
    "자동차 LBO",
    "Daimler",
    "UAW",
    "GFC",
    "Detroit 3",
    "TARP",
    "Fiat",
    "Stellantis",
    "Chapter 11",
    "구제금융",
  ],
  excerpt:
    "Cerberus Capital Management가 Daimler로부터 Chrysler 지분 80%를 $74억에 인수한 2007년 LBO. 이미 GMAC을 보유 중이던 Steve Feinberg가 자동차 산업 노하우를 자신하며 진입했으나, 2008년 가솔린 $4/갤런으로 SUV·트럭 매출이 붕괴됐고 GFC가 자본시장을 막았다. 2008년 12월 정부 $40억 브리지론, 2009년 4월 챕터11, 6월 Fiat·UAW VEBA에 회사를 넘기며 Cerberus 에쿼티는 0으로 wipe out. LBO 사상 가장 빠른 100% 손실 중 하나.",
  excerptEn:
    "Cerberus Capital Management acquired 80% of Chrysler from Daimler for $7.4B in 2007. Steve Feinberg, who already owned GMAC, bet on his auto industry expertise. Then $4/gallon gasoline crushed SUV and truck sales in 2008, and the GFC closed capital markets. After a $4B Treasury bridge in December 2008, Chrysler filed Chapter 11 in April 2009 and was handed to Fiat and the UAW VEBA in June — Cerberus's equity went to zero. One of the fastest 100% wipeouts in LBO history.",

  fund: {
    initials: "CRB",
    bg: "bg-amber-700",
    label: "Cerberus Capital Management",
    labelEn: "Cerberus Capital Management",
  },
  portfolio: {
    initials: "CHR",
    bg: "bg-rose-700",
    label: "Chrysler Group LLC",
    labelEn: "Chrysler Group LLC",
  },

  lboMetrics: {
    fundName: "Cerberus Capital Management Series IV",
    fundNameEn: "Cerberus Capital Management Series IV",
    entryYear: 2007,
    exitYear: 2009,

    entryEvBn: 7.4,
    exitEvBn: 0.0,
    entryEbitdaBn: -1.0,
    exitEbitdaBn: -8.0,
    entryMultiple: 0,
    exitMultiple: 0,

    equityInvestedBn: 7.4,
    equityProceedsBn: 0.0,
    moic: 0.0,
    irrPct: -100.0,

    totalDebtBn: 12.0,
    debtToEbitda: 0,
    exitType: "bankruptcy",

    capitalStructure: [
      {
        tranche: "Cerberus 에쿼티",
        trancheEn: "Cerberus Equity",
        amountBn: 7.4,
        rate: "에쿼티",
        maturity: "장기 보유",
        maturityEn: "Long-term hold",
        color: "bg-rose-500",
      },
      {
        tranche: "Daimler 잔여 지분 20%",
        trancheEn: "Daimler Retained 20% Equity",
        amountBn: 0.0,
        rate: "에쿼티 (가치 잔재)",
        maturity: "—",
        maturityEn: "—",
        color: "bg-violet-600",
      },
      {
        tranche: "1순위 담보 Term Loan B (JPM 주관)",
        trancheEn: "1L Senior Secured Term Loan B (JPM-led)",
        amountBn: 7.0,
        rate: "LIBOR + 700bp",
        maturity: "7년, 만기일시상환",
        maturityEn: "7yr, bullet",
        color: "bg-indigo-600",
      },
      {
        tranche: "2순위 담보 Term Loan",
        trancheEn: "2L Secured Term Loan",
        amountBn: 2.0,
        rate: "LIBOR + 1000bp",
        maturity: "7년",
        maturityEn: "7yr",
        color: "bg-sky-500",
      },
      {
        tranche: "Chrysler Financial 자금조달 (별도 SPV)",
        trancheEn: "Chrysler Financial Funding (Separate SPV)",
        amountBn: 3.0,
        rate: "변동",
        maturity: "변동",
        maturityEn: "Various",
        color: "bg-emerald-500",
      },
    ],

    leverageJourney: [
      { year: 2007, debtEbitda: 0, ebitdaBn: -1.0, label: "딜 클로징 (마이너스 EBITDA)", labelEn: "Close (negative EBITDA)" },
      { year: 2008, debtEbitda: 0, ebitdaBn: -3.0, label: "가솔린 $4 + GFC", labelEn: "$4 gas + GFC" },
      { year: 2009, debtEbitda: 0, ebitdaBn: -8.0, label: "챕터11", labelEn: "Chapter 11" },
    ],

    returnsDecomposition: {
      fromEbitdaGrowth: -1.0,
      fromMultipleExpansion: 0.0,
      fromDebtPaydown: 0.0,
      total: -1.0,
    },

    investmentThesis: [
      {
        driver: "operations",
        icon: "🔧",
        titleKo: "Daimler 통합 실패의 'fix-up' 기회",
        titleEn: "Fixing Daimler's Botched Integration",
        bodyKo:
          "1998년 Daimler가 $250억에 인수했던 Chrysler는 9년간 시너지 실패와 문화 충돌을 겪었다. Cerberus 가설: 미국 PE가 미국 자동차 회사를 미국식으로 경영하면 UAW 협상, 비용 합리화, 제품 라인업 정리가 가능. Daimler의 디스트레스 매각가($74억)는 정상가 대비 명백한 디스카운트로 보였다.",
        bodyEn:
          "Daimler bought Chrysler for $25B in 1998 and spent nine years on a failed integration. Cerberus's hypothesis: an American PE running an American carmaker the American way could fix UAW relations, rationalize costs, and clean up the lineup. Daimler's distressed price of $7.4B looked like a clear discount to intrinsic value.",
        isPrimary: true,
      },
      {
        driver: "sector",
        icon: "🚙",
        titleKo: "GMAC 노하우의 자동차 산업 연계",
        titleEn: "Auto Industry Expertise via GMAC",
        bodyKo:
          "Cerberus는 이미 2006년 GM의 금융자회사 GMAC을 인수해 자동차 금융·딜러 네트워크에 익숙했다. Steve Feinberg 본인이 'Detroit 3 회생' 테제의 신봉자였고, GMAC + Chrysler를 묶어 미국 자동차 생태계의 새 챔피언을 만들겠다는 비전.",
        bodyEn:
          "Cerberus had already bought GMAC, GM's finance arm, in 2006 — giving it familiarity with auto finance and dealer networks. Feinberg was a vocal believer in the 'Detroit 3 turnaround' thesis, envisioning GMAC + Chrysler as a new champion of the US auto ecosystem.",
        isPrimary: true,
      },
      {
        driver: "multiple",
        icon: "🛻",
        titleKo: "트럭·SUV 중심 제품 믹스에 베팅",
        titleEn: "Bet on a Truck/SUV-Heavy Product Mix",
        bodyKo:
          "Chrysler의 매출 70%가 트럭·SUV(Ram·Jeep·Dodge Durango). 휘발유 $2~3 환경에서는 마진율이 가장 높은 세그먼트. 그러나 2008년 가솔린 $4 도달과 함께 SUV 시장이 즉시 붕괴됐다 — 산업 베팅의 정반대 결과.",
        bodyEn:
          "70% of Chrysler revenue came from trucks and SUVs (Ram, Jeep, Dodge Durango) — the highest-margin segments at $2–3 gas. When gasoline hit $4/gallon in 2008, that mix imploded — the worst possible outcome for the deal thesis.",
        isPrimary: false,
      },
      {
        driver: "leverage",
        icon: "🏦",
        titleKo: "비교적 낮은 인수 부채 + Chrysler Financial 분리",
        titleEn: "Modest Acquisition Debt + Separated Chrysler Financial",
        bodyKo:
          "$74억 에쿼티 vs $90억 인수 부채 + Chrysler Financial $30억 별도 — 메가LBO치고는 보수적 구조. 그러나 진입 시점 EBITDA가 이미 마이너스였기에 D/EBITDA 계산 자체가 무의미. 운영 손실이 부채를 빠르게 무력화.",
        bodyEn:
          "$7.4B equity versus ~$9B acquisition debt plus $3B at Chrysler Financial — conservative by mega-LBO standards. But entry EBITDA was already negative, making D/EBITDA meaningless. Operating losses overwhelmed the capital structure within months.",
        isPrimary: false,
      },
    ],

    keyMilestones: [
      {
        year: "2007.05",
        eventKo: "Cerberus, Daimler로부터 Chrysler 80% 지분 $74억 인수 발표",
        eventEn: "Cerberus announces acquisition of 80% of Chrysler from Daimler for $7.4B",
        type: "entry",
      },
      {
        year: "2007.08",
        eventKo: "딜 클로징, Robert Nardelli(전 Home Depot CEO)를 신임 CEO로 영입",
        eventEn: "Deal closes, Robert Nardelli (ex–Home Depot CEO) installed as CEO",
        type: "entry",
      },
      {
        year: "2008.05",
        eventKo: "가솔린 $4/갤런 돌파, SUV·트럭 판매 -30% YoY",
        eventEn: "Gas crosses $4/gal, SUV/truck sales down 30% YoY",
        type: "crisis",
      },
      {
        year: "2008.12",
        eventKo: "Bush 행정부 $40억 긴급 브리지론 (TARP 활용)",
        eventEn: "Bush administration extends $4B emergency bridge loan via TARP",
        type: "crisis",
      },
      {
        year: "2009.04.30",
        eventKo: "챕터11 신청 — Obama 자동차 태스크포스 결정",
        eventEn: "Chapter 11 filing — engineered by Obama's auto task force",
        type: "crisis",
      },
      {
        year: "2009.06.10",
        eventKo: "Fiat 20% (현금 0) · UAW VEBA 55% · 미국 정부 8% · 캐나다 정부 2%로 신회사 출범. Cerberus·Daimler 에쿼티 wipe out.",
        eventEn: "New company emerges: Fiat 20% (no cash), UAW VEBA 55%, US Treasury 8%, Canada 2%. Cerberus and Daimler wiped to zero.",
        type: "exit",
      },
      {
        year: "2014~2021",
        eventKo: "Fiat-Chrysler → 2021년 PSA 합병으로 Stellantis 출범. Cerberus는 자동차 PE에서 사실상 퇴장.",
        eventEn: "Fiat-Chrysler merges with PSA in 2021 to form Stellantis. Cerberus effectively exits auto PE.",
        type: "exit",
      },
    ],
  },

  background: [
    "Chrysler는 1925년 Walter Chrysler가 창립한 미국 Detroit 3의 한 축으로, Jeep·Dodge·Ram 브랜드를 보유한 대형 트럭·SUV 중심 OEM이었다. 1998년 Daimler-Benz가 $250억에 인수해 'DaimlerChrysler'를 출범시켰지만, 독일 럭셔리 세단과 미국 트럭·SUV 사업의 문화·전략 충돌로 9년간 통합에 실패했다.",
    "2007년 5월, Daimler는 자존심을 접고 Chrysler 80% 지분을 Cerberus Capital Management에 단돈 $74억에 매각하기로 한다 — 1998년 인수가의 30%에도 못 미치는 수준이었다. Daimler는 20%만 남기고 사실상 손을 뗐다. Steve Feinberg가 이끄는 Cerberus는 이미 2006년 GMAC을 인수해 미국 자동차 금융을 보유 중이었기에 'GMAC + Chrysler = 새로운 미국 자동차 챔피언' 비전을 제시했다.",
    "딜 클로징은 2007년 8월. JP Morgan이 주관한 $90억의 LBO 신디케이션은 GFC 직전 마지막 메가딜 중 하나로 가까스로 완료됐고, 이후 lev loan 시장이 얼어붙었다. CEO로는 Home Depot에서 해고된 Robert Nardelli가 영입됐다 — 자동차 산업 경험은 전무. Cerberus의 day-1 가설은 UAW 비용 합리화, 트럭·SUV 라인업 강화, Jeep 글로벌 확장이었다.",
    "그러나 2008년 봄, 미국 휘발유 가격이 $3에서 $4로 폭등하며 SUV·트럭 시장이 즉시 붕괴됐다. 여름에는 리먼이 무너지며 자동차 금융이 마비됐다. 4분기 판매는 -33% YoY. 매월 $1B 현금 소진, 자본시장 접근 불가. 12월 Bush 행정부의 $40억 TARP 브리지로 간신히 연명. 2009년 1월 출범한 Obama 자동차 태스크포스는 Chrysler가 단독 생존 불가하다고 결론 내리고 Fiat 합병을 조건으로 챕터11을 설계했다. 4월 30일 신청, 6월 10일 신회사 출범 — Cerberus의 $74억 에쿼티는 정확히 0이 됐다.",
  ],
  backgroundEn: [
    "Chrysler, founded by Walter Chrysler in 1925, was one of America's Detroit 3 — a truck/SUV-heavy OEM that owned Jeep, Dodge, and Ram. Daimler-Benz bought it in 1998 for $25B, forming DaimlerChrysler, but nine years of cultural and strategic clashes between German luxury sedans and American trucks failed to integrate.",
    "In May 2007 Daimler swallowed its pride and sold 80% of Chrysler to Cerberus Capital Management for just $7.4B — under 30% of the 1998 purchase price. Daimler kept a 20% stub and effectively walked away. Cerberus, run by Steve Feinberg, already owned GMAC (acquired 2006) and pitched 'GMAC + Chrysler = a new American auto champion.'",
    "The deal closed in August 2007. JP Morgan led a $9B LBO syndication that just squeaked through before the lev-loan market froze. Cerberus installed Robert Nardelli — recently ousted from Home Depot, with zero auto experience — as CEO. The day-one thesis: rationalize UAW costs, strengthen the truck/SUV lineup, expand Jeep globally.",
    "Then in spring 2008, US gasoline jumped from $3 to $4 and the SUV/truck market collapsed overnight. After Lehman fell, auto finance seized up. Q4 sales fell 33% YoY. Chrysler was burning $1B a month and locked out of capital markets. A $4B TARP bridge from the Bush administration kept the lights on in December. Obama's January 2009 auto task force concluded Chrysler could not survive alone and engineered a Fiat-led Chapter 11. The filing came on April 30 and the new company emerged on June 10 — Cerberus's $7.4B equity went exactly to zero.",
  ],

  executiveSummary: [
    "Cerberus가 Daimler로부터 Chrysler 80%를 $74억에 인수 — 자동차 산업 'fix-up' 베팅.",
    "진입 시점부터 EBITDA가 마이너스($1B 손실) — 전형적 turnaround LBO 가설.",
    "2008년 가솔린 $4 폭등 + GFC + UAW 대치가 동시에 폭발하며 매월 $1B 현금 소진.",
    "2008년 12월 Bush 행정부 $40억 TARP 브리지 → 2009년 4월 챕터11 → 6월 Fiat·UAW VEBA에 회사 양도.",
    "Cerberus 에쿼티 $74억 → 0, Daimler 잔여 20%도 wipe out, LBO 부채 보유자들도 대부분 회수 실패.",
    "Cerberus는 GMAC도 손실로 매각하며 자동차 산업에서 사실상 퇴장 — Detroit 3 LBO 시대의 종언.",
  ],
  executiveSummaryEn: [
    "Cerberus bought 80% of Chrysler from Daimler for $7.4B — a classic auto industry turnaround bet.",
    "EBITDA was already negative (~$1B loss) at entry — textbook turnaround LBO setup.",
    "In 2008, $4 gas, the GFC, and UAW conflict erupted simultaneously, draining ~$1B in cash per month.",
    "$4B TARP bridge in Dec 2008 → Chapter 11 in April 2009 → company handed to Fiat and UAW VEBA in June.",
    "Cerberus equity wiped from $7.4B to zero; Daimler's 20% stub also gone; most LBO debtholders impaired.",
    "Cerberus later exited GMAC at a loss as well — effectively retreating from auto PE and ending the Detroit-3 LBO era.",
  ],

  companyOverview: {
    body:
      "Chrysler는 딜 시점 매출 ~$620억, 직원 ~7만 명의 미국 4위 OEM이었다. 매출의 70%가 트럭·SUV(Ram 픽업, Jeep, Dodge Durango), 20% 세단(300·Sebring), 10% 미니밴. UAW 가입 노동자가 약 4만 명, 퇴직자 의료보험 부담(legacy cost)이 신차 1대당 ~$1,500로 Toyota 대비 큰 핸디캡이었다.",
    bodyEn:
      "At the time of the deal Chrysler had ~$62B in revenue and ~70,000 employees — America's #4 OEM. 70% of revenue came from trucks and SUVs (Ram pickups, Jeep, Dodge Durango), 20% sedans (300, Sebring), 10% minivans. ~40,000 UAW workers and retiree healthcare obligations added ~$1,500 in legacy cost per vehicle — a structural handicap versus Toyota.",
    metrics: [
      { label: "창립", labelEn: "Founded", value: "1925년" },
      { label: "직원 수", labelEn: "Employees", value: "~70,000" },
      { label: "FY2006 매출", labelEn: "FY2006 Revenue", value: "$62B" },
      { label: "FY2006 EBITDA", labelEn: "FY2006 EBITDA", value: "-$1B", sub: "마이너스" },
      { label: "트럭·SUV 비중", labelEn: "Truck/SUV Mix", value: "~70%" },
      { label: "UAW 노동자", labelEn: "UAW Workers", value: "~40,000", sub: "Legacy cost $1.5K/대" },
    ],
    financials: [
      { year: "FY2006", ebitdaBn: -1.0, revenueBn: 62.0, ebitdaMarginPct: -1.6, note: "Pre-LBO 손실", noteEn: "Pre-LBO loss" },
      { year: "FY2007", ebitdaBn: -1.5, revenueBn: 60.0, ebitdaMarginPct: -2.5, note: "LBO 진입", noteEn: "LBO entry" },
      { year: "FY2008", ebitdaBn: -3.0, revenueBn: 49.0, ebitdaMarginPct: -6.1, note: "가솔린 $4 + GFC", noteEn: "$4 gas + GFC" },
      { year: "FY2009", ebitdaBn: -8.0, revenueBn: 32.0, ebitdaMarginPct: -25.0, note: "챕터11", noteEn: "Chapter 11" },
    ],
    financialsNote: "단위: $B | 출처: Chrysler 채권자 공시, 미 자동차 태스크포스 보고서 (2009)",
    financialsNoteEn: "Units: $B | Source: Chrysler creditor disclosures, US Auto Task Force report (2009)",
  },

  postDealAssessment: {
    body:
      "Cerberus-Chrysler는 LBO 역사에서 가장 빠르고 가장 완벽한 와이프아웃 중 하나다. 2년 만에 $74억 에쿼티가 정확히 0이 됐고, 회복할 잔여가치도 없었다. 실패 요인은 다층적이다 — (1) 사이클 산업에 대한 진입 타이밍 오판 (사이클 후기), (2) 진입 시점 이미 마이너스 EBITDA를 'turnaround' 가설로 정당화한 무리한 산정, (3) 트럭·SUV 중심 제품 믹스가 가솔린 가격 한 가지에 100% 노출된 단일 매크로 베팅, (4) GFC라는 100년 만의 매크로 충격이 자동차 금융까지 마비시킨 운, (5) 정치 리스크(Obama 태스크포스가 Cerberus 대신 Fiat을 선택한 점). 다만 이 케이스는 사이클 산업 LBO의 한계를 가장 명확히 드러낸 교과서적 교훈이다.",
    bodyEn:
      "Cerberus-Chrysler is one of the fastest, cleanest wipeouts in LBO history. In two years, $7.4B of equity went exactly to zero with no residual value. The failure was multi-causal: (1) cycle-late entry into a cyclical sector, (2) justifying negative entry EBITDA as a 'turnaround,' (3) a truck/SUV mix that was effectively a single macro bet on gasoline prices, (4) bad luck — a once-in-a-century GFC that froze auto finance, and (5) political risk — Obama's auto task force chose Fiat over Cerberus. It is the textbook lesson on the limits of cyclical-sector LBOs.",
    overallVerdict: "사이클 산업 LBO의 한계를 보여준 100% 손실 — 다층적 실패의 교과서",
    overallVerdictEn: "A 100% wipeout that exposes the limits of cyclical-sector LBOs — a textbook of multi-causal failure",
    positives: [
      "사이클 산업 LBO의 진입 EBITDA가 'turnaround 가설'로 정당화될 때의 위험을 명확히 보여줌 — 후세 PE의 디펜시브 산업 선호로 이어진 교훈.",
      "TARP·자동차 태스크포스 등 정부 개입 메커니즘이 LBO 채권자·에쿼티에 미치는 영향을 실증 — '정치 리스크'가 산업 LBO에서 무시할 수 없음을 증명.",
      "보수적 인수 부채 구조(에쿼티 비중 ~45%)에도 운영 손실이 압도하면 의미 없음을 보여줌 — D/EBITDA 메트릭의 한계.",
      "Fiat이 현금 0으로 Chrysler 20%를 받고 미국 시장에 진입, Stellantis로 이어진 글로벌 자동차 재편의 시발점 — 산업적 의미는 컸음.",
    ],
    positivesEn: [
      "Demonstrates how dangerous it is to justify negative entry EBITDA as a 'turnaround thesis' in cyclical LBOs — a lesson that pushed subsequent PE toward defensive sectors.",
      "Provides empirical evidence of how TARP and auto task force interventions reshape LBO creditor and equity outcomes — proving political risk is non-negligible in sector LBOs.",
      "Shows that even a relatively conservative ~45% equity contribution is meaningless when operating losses dominate — exposing the limits of D/EBITDA metrics.",
      "Fiat gained 20% of Chrysler for zero cash and re-entered the US market, setting in motion the global consolidation that led to Stellantis — significant industry impact.",
    ],
    risks: [
      "산업 사이클 후기에 마이너스 EBITDA 자산을 LBO로 인수 — turnaround 가설은 매크로 충격에 매우 취약.",
      "제품 믹스가 단일 매크로 변수(휘발유 가격)에 100% 노출 — 자연 헤지 부재.",
      "UAW와의 적대적 협상 시도가 정치적·운영적 리스크로 발현 — 노조 의존도 높은 산업의 PE 보유 한계.",
      "Chrysler Financial과 GMAC의 동시 노출로 Cerberus 자체의 LP 신뢰가 자동차 섹터 전반에서 훼손.",
    ],
    risksEn: [
      "Acquired a negative-EBITDA asset late in the cycle — the turnaround thesis was extremely fragile to a macro shock.",
      "Product mix had 100% exposure to a single macro variable (gasoline) with no natural hedge.",
      "Confrontational UAW posture turned into political and operational risk — unions place limits on PE ownership of labor-intensive industries.",
      "Cerberus's parallel exposure via Chrysler Financial and GMAC damaged its credibility with LPs across the entire auto sector.",
    ],
    editorNote:
      "Cerberus-Chrysler는 'PE가 결코 사들이지 말아야 할 자산'의 체크리스트를 한 케이스로 압축한다 — 사이클 산업 후기, 마이너스 EBITDA, 단일 매크로 노출, 강한 노조, 정치 민감 섹터. 이후 PE 산업이 헬스케어·소프트웨어 등 디펜시브 섹터로 강하게 쏠린 데에는 Chrysler 케이스가 결정적 트라우마로 작용했다는 평가가 많다.",
    editorNoteEn:
      "Cerberus-Chrysler is a one-case checklist of everything PE should not buy — cycle-late, negative EBITDA, single-macro exposure, strong union, politically sensitive sector. Many trace PE's subsequent shift into defensive sectors like healthcare and software back to the trauma of Chrysler.",
  },

  tombstone: {
    fundInitials: "CRB",
    fundBg: "bg-amber-700",
    portfolioInitials: "CHR",
    portfolioBg: "bg-rose-700",
    fundName: "Cerberus Capital Management",
    portfolioName: "Chrysler Group LLC",
    dealTitle: "Cerberus × Chrysler — $7.4B LBO와 24개월 와이프아웃",
    dealSize: "$7.4B 에쿼티 / ~$19B EV",
    entryMultiple: "n/m (마이너스 EBITDA)",
    moic: "0.0×",
    irr: "-100%",
    holdYears: "2년",
    closeDate: "2007년 8월 3일",
  },

  concepts: [
    {
      term: "Turnaround LBO",
      termEn: "Turnaround LBO",
      description:
        "이미 운영 손실 중인 회사를 인수해 비용 절감·매출 회복을 통해 EBITDA를 정상화하는 PE 전략. 진입 멀티플 계산 자체가 불가능하므로 LP 설득에 'normalized EBITDA' 시나리오를 활용. 매크로 충격에 매우 취약.",
      descriptionEn:
        "A PE strategy of buying loss-making businesses and restoring EBITDA via cost cuts and revenue recovery. Multiples can't be computed, so LPs are pitched on 'normalized EBITDA' scenarios — highly vulnerable to macro shocks.",
    },
    {
      term: "UAW VEBA",
      termEn: "UAW VEBA (Voluntary Employees' Beneficiary Association)",
      description:
        "UAW가 자동차 회사들의 퇴직자 의료보험 부담을 떠안는 대신 회사 지분을 받는 신탁 구조. Chrysler 챕터11에서 VEBA가 55% 지분을 가져가며 사실상 최대주주가 됐다.",
      descriptionEn:
        "A trust under which the UAW assumed retiree healthcare obligations from automakers in exchange for company equity. In Chrysler's Chapter 11, the VEBA emerged with 55% — effectively the largest shareholder.",
    },
    {
      term: "TARP (Troubled Asset Relief Program)",
      termEn: "TARP (Troubled Asset Relief Program)",
      description:
        "GFC 당시 미 의회가 $7천억 한도로 승인한 구제금융 프로그램. 원래 은행 대상이었으나 Bush 행정부가 자동차 산업에도 확대 적용 — Chrysler·GM에 긴급 브리지론 제공.",
      descriptionEn:
        "A $700B Congress-authorized bailout fund during the GFC. Initially for banks, the Bush administration extended it to autos — providing emergency bridge loans to Chrysler and GM.",
    },
    {
      term: "Section 363 매각",
      termEn: "Section 363 Sale",
      description:
        "미 챕터11 절차에서 채권자 동의 없이 법원 승인만으로 자산을 매각할 수 있는 패스트트랙 절차. Chrysler 챕터11에서 Fiat에 자산을 40일 만에 양도한 핵심 메커니즘.",
      descriptionEn:
        "A fast-track procedure in US Chapter 11 that allows assets to be sold with court approval only, bypassing creditor consent. The mechanism by which Chrysler's assets were transferred to Fiat in just 40 days.",
    },
    {
      term: "정치 리스크 (Political Risk in LBO)",
      termEn: "Political Risk in LBO",
      description:
        "PE 보유 회사가 정부 구제, 산업 정책, 정치적 압력의 대상이 되는 위험. Chrysler 케이스에서 Obama 자동차 태스크포스가 Cerberus 대신 Fiat 인수를 강제한 것이 대표적.",
      descriptionEn:
        "The risk that a PE-owned company becomes subject to government bailouts, industrial policy, or political pressure. In Chrysler, Obama's auto task force forced the Fiat handover over Cerberus's preferences — a textbook example.",
    },
  ],

  faq: [
    {
      q: "Cerberus는 정말 $74억을 다 잃었나요?",
      qEn: "Did Cerberus really lose all $7.4B?",
      a:
        "에쿼티 기준 정확히 0으로 wipe out. 2009년 챕터11 신회사 주주 명단에 Cerberus는 없음. 다만 Cerberus는 일부 손실을 LP의 펀드 손익이 아닌 모회사 손익으로 흡수해 펀드 IRR 타격을 일부 분산했다는 평가.",
      aEn:
        "Yes — equity went to exactly zero. Cerberus appears nowhere on the post-Chapter 11 cap table. The firm reportedly absorbed some of the loss at the management-company level rather than passing it entirely to LPs, partially cushioning fund IRR.",
    },
    {
      q: "Fiat은 어떻게 현금 0으로 Chrysler 20%를 받았나요?",
      qEn: "How did Fiat get 20% of Chrysler for zero cash?",
      a:
        "Fiat은 소형차 플랫폼·엔진 기술과 글로벌 유통망을 '인-카인드(in-kind) 기여'로 인정받았습니다. Obama 태스크포스는 Chrysler가 작은 차종 라인업이 없는 점을 결정적 약점으로 봤고, Fiat의 500·Punto 플랫폼을 해법으로 채택.",
      aEn:
        "Fiat contributed small-car platforms, engines, and global distribution as in-kind value. The Obama task force viewed Chrysler's lack of a small-car lineup as a fatal weakness, and Fiat's 500/Punto platforms became the solution.",
    },
    {
      q: "이 딜이 PE 산업에 미친 영향은?",
      qEn: "How did this deal change the PE industry?",
      a:
        "PE의 디펜시브 섹터 선호를 결정적으로 강화. 2010년대 이후 PE 자금이 헬스케어·소프트웨어·서비스로 집중되고 자동차·항공·소매 등 사이클 산업 메가LBO는 거의 사라진 배경.",
      aEn:
        "It cemented PE's tilt toward defensive sectors. Post-2010, capital flowed into healthcare, software, and services, while mega-LBOs in cyclical industries (autos, airlines, retail) largely disappeared.",
    },
    {
      q: "Cerberus는 자동차에서 완전히 떠났나요?",
      qEn: "Did Cerberus exit autos entirely?",
      a:
        "2014년 GMAC(Ally Financial로 리브랜드 후 IPO)을 부분 회수했고, 자동차 OEM 직접 보유는 그 이후 없습니다. Steve Feinberg 본인도 공개 자리에서 Chrysler를 '내 인생 최대 실수 중 하나'로 언급한 바 있습니다.",
      aEn:
        "Cerberus partially monetized GMAC (rebranded Ally Financial and IPO'd in 2014) and has not directly owned an OEM since. Steve Feinberg has publicly described Chrysler as 'one of the biggest mistakes of my career.'",
    },
    {
      q: "Daimler는 이 거래에서 얼마를 잃었나요?",
      qEn: "How much did Daimler lose?",
      a:
        "1998년 $250억에 인수, 2007년 $74억 매각가 중 실질 회수는 거의 0(부채·연금 부담을 PE에 넘긴 대가) + 잔여 20%도 wipe out. 누적 손실 약 $200~250억으로 추정 — 글로벌 자동차 M&A 역사상 최대 손실 중 하나.",
      aEn:
        "Daimler paid $25B in 1998 and effectively received almost nothing in 2007 (after offloading debt/pension liabilities) — and its 20% stub was wiped out in 2009. Total losses are estimated at $20–25B — one of the largest losses in global auto M&A history.",
    },
    {
      q: "Stellantis는 지금 어떤 상태인가요?",
      qEn: "Where does Stellantis stand today?",
      a:
        "2021년 Fiat-Chrysler와 PSA Peugeot 합병으로 출범. 글로벌 4위 OEM, 시총 $400~500억 수준(2026년 5월 기준). Jeep·Ram의 미국 사업이 그룹 EBITDA의 절반 이상을 차지하지만 EV 전환 부진과 미국 판매 부진으로 부진 중.",
      aEn:
        "Stellantis was formed in 2021 by merging Fiat-Chrysler with PSA Peugeot. It's the world's #4 OEM with a market cap around $40–50B (as of May 2026). Jeep and Ram's US businesses generate over half of group EBITDA, but the EV transition has lagged and US sales have been weak.",
    },
  ],

  sources: [
    { id: 1, text: "Daimler AG Form 6-K — Chrysler 매각 발표 (2007.05.14)", url: "https://www.sec.gov/" },
    { id: 2, text: "US Auto Task Force, 'Determination of Viability Summary: Chrysler' (2009.03.30)" },
    { id: 3, text: "Chrysler LLC Chapter 11 신청서 (US Bankruptcy Court, SDNY, 2009.04.30)" },
    { id: 4, text: "Steven Rattner, 'Overhaul: An Insider's Account of the Obama Administration's Emergency Rescue of the Auto Industry' (2010)" },
    { id: 5, text: "Wall Street Journal, 'Cerberus's $7 Billion Chrysler Bet Goes Bad' (2009)" },
    { id: 6, text: "Bloomberg, 'How Cerberus's Auto Bet Came Apart' (2009)" },
    { id: 7, text: "GAO Report, 'Auto Industry: Lessons Learned from Cash for Clunkers Program' (2010)" },
    { id: 8, text: "Stellantis N.V. Annual Report 2024 (Fiat-Chrysler-PSA 합병 후속)" },
  ],

  seo: {
    title: "Cerberus × Chrysler 2007 LBO — $74억 와이프아웃 | Deal Story",
    description:
      "Cerberus Capital이 Daimler로부터 $74억에 인수한 Chrysler가 2년 만에 챕터11로 와이프아웃된 LBO 역사상 가장 빠른 100% 손실 케이스. 사이클 산업, GFC, UAW, TARP, 정치 리스크 — 사이클 산업 LBO 한계의 교과서.",
    keywords: [
      "Cerberus Chrysler",
      "Chrysler LBO 실패",
      "Steve Feinberg",
      "자동차 LBO",
      "Chrysler 챕터11",
      "Detroit 3 구제금융",
      "TARP 자동차",
      "Fiat Chrysler",
      "Stellantis",
      "사이클 산업 LBO",
    ],
  },
};

export default deal;
