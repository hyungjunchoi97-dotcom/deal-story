/**
 * Bain Capital × Toshiba Memory → Kioxia LBO (2018-2024)
 * 일본 사상 두 번째 메가LBO ($18B) — 도시바 위기에서 카브아웃, 6년 후 슬래시된 IPO
 *
 * 스폰서 앵글: Bain 주도 + Apple·Dell·Seagate·SK Hynix·Hoya·INCJ — '일본 친화적' 컨소시엄.
 * 전략적 LP가 공급망 보험을 사면서 동시에 에쿼티에 합류한 독특한 구조.
 */
import type { LboDeal } from "@/lib/lbo-deal-data";

const deal: LboDeal = {
  slug: "bain-kioxia-2018",
  category: "lbo",

  title: "Bain은 어떻게 $180억 도시바 메모리 카브아웃을 사들이고 6년 만에 슬래시된 IPO를 마주했나",
  titleEn: "How Bain Bought Toshiba Memory for $18B and Six Years Later Faced a Slashed Kioxia IPO",
  subtitle:
    "도시바 위기 카브아웃 · Apple·Dell·Seagate·SK Hynix 전략적 LP · 두 차례 IPO 연기 · 2024년 ¥1,275 상장",
  subtitleEn:
    "Carved Out of the Toshiba Crisis · Apple·Dell·Seagate·SK Hynix as Strategic LPs · Two Postponed IPOs · Final 2024 Listing at ¥1,275",

  industry: "반도체 / NAND 메모리",
  industryEn: "Semiconductor / NAND Flash",
  country: "일본",
  announcedAt: "2017-09-28",
  closedAt: "2018-06-01",
  announcedDisplay: "2017년 9월",
  closedDisplay: "2018년 6월",
  readingMinutes: 17,
  tags: [
    "Bain Capital",
    "Kioxia",
    "도시바 메모리",
    "NAND",
    "반도체 LBO",
    "카브아웃",
    "Apple",
    "Dell",
    "SK Hynix",
    "Western Digital",
    "INCJ",
    "Hoya",
    "Tokyo IPO",
    "메모리 사이클",
  ],
  excerpt:
    "Bain Capital 주도 컨소시엄이 도시바의 NAND 메모리 사업부를 ¥2조($18B)에 인수한 2018년 딜. 당시 일본 사상 최대 LBO로, Apple·Dell·SK Hynix·Hoya·INCJ 등 전략적 LP가 공급망 보험을 사면서 동시에 에쿼티에 들어간 독특한 구조였다. Kioxia로 사명을 바꾼 후 두 차례 IPO를 연기당했고, 2024년 12월 도쿄증권거래소에 ¥1,275에 상장 — 시총 ¥6,700억으로 진입 EV $18B 대비 70% 이상 평가절하 — Bain에 사실상 손실 케이스로 기록됐다.",
  excerptEn:
    "A Bain-led consortium bought Toshiba's NAND business for ¥2T ($18B) in 2018 — Japan's largest LBO at the time. The capital stack was novel: strategic LPs (Apple, Dell, Seagate, SK Hynix, Hoya, INCJ) bought equity while securing supply-chain insurance. Renamed Kioxia, the company missed two IPO windows and finally listed on the TSE in December 2024 at ¥1,275 — a market cap of ~¥670B, more than 70% below the entry EV. For Bain, the deal is effectively a loss case.",

  fund: {
    initials: "BC",
    bg: "bg-emerald-700",
    label: "Bain Capital 주도 컨소시엄",
    labelEn: "Bain Capital-Led Consortium",
  },
  portfolio: {
    initials: "KX",
    bg: "bg-slate-900",
    label: "Kioxia Holdings (구 Toshiba Memory)",
    labelEn: "Kioxia Holdings (formerly Toshiba Memory)",
  },

  lboMetrics: {
    fundName: "Bain Capital + Apple + Dell + Seagate + SK Hynix + Hoya + INCJ",
    fundNameEn: "Bain Capital + Apple + Dell + Seagate + SK Hynix + Hoya + INCJ",
    entryYear: 2018,
    exitYear: 2024,

    entryEvBn: 18.0,
    exitEvBn: 4.5,
    entryEbitdaBn: 3.3,
    exitEbitdaBn: 0.8,
    entryMultiple: 5.5,
    exitMultiple: 5.6,

    equityInvestedBn: 13.0,
    equityProceedsBn: 3.0,
    moic: 0.4,
    irrPct: -12.0,

    totalDebtBn: 5.0,
    debtToEbitda: 1.5,
    exitType: "ipo",

    capitalStructure: [
      {
        tranche: "Bain Capital 에쿼티 (Lead)",
        trancheEn: "Bain Capital Equity (Lead)",
        amountBn: 4.0,
        rate: "에쿼티",
        maturity: "장기 보유",
        maturityEn: "Long-term hold",
        color: "bg-rose-500",
      },
      {
        tranche: "전략적 LP 에쿼티 (Apple·Dell·Seagate·Kingston)",
        trancheEn: "Strategic LP Equity (Apple, Dell, Seagate, Kingston)",
        amountBn: 4.0,
        rate: "에쿼티",
        maturity: "장기 보유",
        maturityEn: "Long-term hold",
        color: "bg-violet-600",
      },
      {
        tranche: "Hoya + INCJ 일본 자본",
        trancheEn: "Hoya + INCJ Japanese Equity",
        amountBn: 1.5,
        rate: "에쿼티",
        maturity: "장기 보유",
        maturityEn: "Long-term hold",
        color: "bg-indigo-600",
      },
      {
        tranche: "Toshiba 잔여 지분 + SK Hynix 전환사채",
        trancheEn: "Toshiba Retained Equity + SK Hynix CB",
        amountBn: 3.5,
        rate: "에쿼티 / 0% 전환사채",
        maturity: "전환사채 10년",
        maturityEn: "CB 10yr",
        color: "bg-sky-500",
      },
      {
        tranche: "은행 신디케이트 시니어 텀론",
        trancheEn: "Senior Bank Term Loan",
        amountBn: 5.0,
        rate: "TIBOR + 150~200bp",
        maturity: "5~7년",
        maturityEn: "5–7yr",
        color: "bg-emerald-500",
      },
    ],

    leverageJourney: [
      { year: 2018, debtEbitda: 1.5, ebitdaBn: 3.3, label: "딜 클로징", labelEn: "Deal close" },
      { year: 2019, debtEbitda: 3.0, ebitdaBn: 1.7, label: "NAND 가격 -50%", labelEn: "NAND price -50%" },
      { year: 2020, debtEbitda: 2.0, ebitdaBn: 2.5, label: "COVID 수요 급증", labelEn: "COVID demand spike" },
      { year: 2021, debtEbitda: 1.8, ebitdaBn: 2.8 },
      { year: 2022, debtEbitda: 2.5, ebitdaBn: 2.0, label: "1차 IPO 연기", labelEn: "IPO postponed #1" },
      { year: 2023, debtEbitda: 6.0, ebitdaBn: 0.8, label: "NAND 대붕괴", labelEn: "NAND collapse" },
      { year: 2024, debtEbitda: 4.0, ebitdaBn: 1.2, label: "IPO 강행", labelEn: "Forced IPO" },
    ],

    returnsDecomposition: {
      fromEbitdaGrowth: -1.2,
      fromMultipleExpansion: 0.0,
      fromDebtPaydown: 0.1,
      total: -1.1,
    },

    investmentThesis: [
      {
        driver: "sector",
        icon: "💾",
        titleKo: "NAND 시장 장기 성장 + 도시바 위기 디스카운트",
        titleEn: "Long-Term NAND Growth + Toshiba Crisis Discount",
        bodyKo:
          "도시바 웨스팅하우스 손실로 강제 매각된 NAND 자산 — 정상 시장가 대비 디스카운트. 데이터센터·모바일 NAND 수요 장기 성장에 베팅. 진입 시점 EV/EBITDA 5.5x — 메모리 사이클 피크 부근이라는 점이 추후 발목.",
        bodyEn:
          "Forced sale of NAND assets due to Toshiba's Westinghouse loss — priced below fair value. Bain bet on long-term datacenter/mobile NAND demand. The 5.5x EV/EBITDA entry looked cheap but coincided with a cyclical peak.",
        isPrimary: true,
      },
      {
        driver: "operations",
        icon: "🤝",
        titleKo: "'일본 친화적' 컨소시엄 구조로 입찰 승리",
        titleEn: "'Japan-Friendly' Consortium Won the Auction",
        bodyKo:
          "Western Digital(JV 파트너 권리), Foxconn, SK Hynix와 경쟁. Bain은 도시바 잔여 지분 + Hoya·INCJ 일본 자본 + Apple·Dell 미국 고객사를 묶은 '복합 구조'로 METI·도시바 이사회 신뢰 확보 — 9개월 WD 소송 끝에 클로징.",
        bodyEn:
          "Beat Western Digital (a JV partner with consent rights), Foxconn, and SK Hynix. Bain stitched together Toshiba's retained stake, Hoya/INCJ Japanese capital, and Apple/Dell as customers — winning METI and board confidence after nine months of WD litigation.",
        isPrimary: true,
      },
      {
        driver: "multiple",
        icon: "🏷️",
        titleKo: "전략적 LP의 공급망 보험",
        titleEn: "Strategic LPs Bought Supply-Chain Insurance",
        bodyKo:
          "Apple·Dell·Seagate·Kingston은 재무적 IRR보다 NAND 우선 공급권을 더 중시했다. Bain은 이를 활용해 LP 모집을 빠르게 완료 — 단, 이들 LP의 인내심은 일반 PE LP보다 훨씬 길어 빠른 회수 압력이 낮았다.",
        bodyEn:
          "Apple, Dell, Seagate, and Kingston cared more about preferred NAND supply than financial IRR. Bain raised LP capital fast, but these LPs were unusually patient — putting less pressure on a quick exit.",
        isPrimary: false,
      },
      {
        driver: "leverage",
        icon: "🪙",
        titleKo: "보수적 레버리지 (1.5x)로 메모리 사이클 대비",
        titleEn: "Conservative 1.5x Leverage to Weather the Cycle",
        bodyKo:
          "메모리는 EBITDA가 사이클별로 ±70% 흔들리는 산업 — Bain은 진입 D/EBITDA 1.5x로 미국 메가LBO 대비 매우 보수적. 덕분에 2019·2023 NAND 대붕괴에도 디폴트 회피.",
        bodyEn:
          "NAND EBITDA can swing ±70% across cycles, so Bain entered at just 1.5x D/EBITDA — far below US mega-LBO norms. That conservatism kept Kioxia out of default through the 2019 and 2023 NAND crashes.",
        isPrimary: false,
      },
    ],

    keyMilestones: [
      {
        year: "2017.09",
        eventKo: "Bain 컨소시엄, 도시바 메모리 ¥2조 인수 발표",
        eventEn: "Bain consortium announces ¥2T acquisition of Toshiba Memory",
        type: "entry",
      },
      {
        year: "2018.06",
        eventKo: "Western Digital 소송 해결 후 클로징 (9개월 지연)",
        eventEn: "Deal closes after WD litigation resolved (nine-month delay)",
        type: "entry",
      },
      {
        year: "2019.10",
        eventKo: "사명 Kioxia로 변경, 독립 브랜드 출범",
        eventEn: "Rebranded as Kioxia, launching as an independent brand",
        type: "value-creation",
      },
      {
        year: "2020.09",
        eventKo: "1차 IPO 연기 — NAND 약세 + 미·중 무역분쟁",
        eventEn: "First IPO postponed — weak NAND + US-China trade tensions",
        type: "crisis",
      },
      {
        year: "2022.09",
        eventKo: "2차 IPO 연기 — 시장 상황 악화",
        eventEn: "Second IPO postponed amid worsening market conditions",
        type: "crisis",
      },
      {
        year: "2023.10",
        eventKo: "Western Digital NAND 합병 협상 결렬",
        eventEn: "Western Digital NAND merger talks collapse",
        type: "crisis",
      },
      {
        year: "2024.12.18",
        eventKo: "도쿄증권거래소 IPO ¥1,275/주, 시총 ¥6,700억 — 진입 대비 70%+ 평가절하",
        eventEn: "Tokyo IPO at ¥1,275/share, ~¥670B mcap — more than 70% below entry valuation",
        type: "exit",
      },
    ],
  },

  background: [
    "Kioxia의 전신은 도시바의 NAND 플래시 메모리 사업부다. 도시바는 1987년 세계 최초로 NAND를 발명한 회사 — 30년 넘게 산업 표준을 이끌어온 자산이다. 2000년대부터는 Western Digital(전신 SanDisk)과 일본 욧카이치에서 NAND 공동 생산 JV를 운영해왔다.",
    "딜 트리거는 2017년 도시바 모회사 위기였다. 웨스팅하우스 챕터11로 ¥1.6조 손실이 확정되며 자본 잠식을 피하기 위해 메모리 사업부 매각이 강제됐다. 인수전에는 Western Digital(JV 파트너 권리), Foxconn, SK Hynix, Bain 등이 참여했다. WD는 JV 합의서상의 변경통제권을 활용해 매각을 막으려 했고, 이로 인해 클로징이 9개월 지연됐다.",
    "Bain의 승리 공식은 '일본 친화적' 컨소시엄이었다. 도시바가 ~40% 지분을 보유하게 유지하고, Hoya와 일본 정부 산하 INCJ를 일본 자본으로 끌어들이며, Apple·Dell·Seagate·Kingston을 NAND 공급망 보장을 매개로 LP로 유치했다. SK Hynix는 전환사채(향후 지분 전환 시 15%까지 보유 가능하나 의결권 제한) 형태로 합류 — 한국 반독점 우려를 회피한 구조.",
    "딜 클로징 시점인 2018년은 NAND 사이클 정점이었다. 진입 후 1년도 안 돼 NAND 가격이 50% 이상 폭락했고, 이후 COVID 수요 급증(2020)·중국 수요 둔화(2021~22)·NAND 대붕괴(2022~23)·부분 회복(2024)이라는 변동성 풀스펙트럼을 겪었다. 두 차례 IPO 연기 끝에 2024년 12월 사실상 강제로 ¥1,275/주에 상장했다.",
  ],
  backgroundEn: [
    "Kioxia descends from Toshiba's NAND flash business — Toshiba invented NAND in 1987 and led the industry for over thirty years. Since the 2000s it has operated a joint NAND production JV with Western Digital (formerly SanDisk) in Yokkaichi, Japan.",
    "The deal trigger was Toshiba's 2017 crisis. Westinghouse's Chapter 11 booked a ¥1.6T loss and forced a memory carve-out to avoid negative equity. Bidders included Western Digital (with JV consent rights), Foxconn, SK Hynix, and Bain. WD tried to block the sale under JV change-of-control provisions, delaying closing by nine months.",
    "Bain won with a 'Japan-friendly' consortium. Toshiba retained ~40%, Hoya and the government-backed INCJ joined as Japanese capital, and Apple, Dell, Seagate, and Kingston came in as LPs tied to preferred NAND supply. SK Hynix participated via a 0% convertible (potentially convertible to up to 15% with limited voting rights) — a structure designed around Korean antitrust concerns.",
    "Closing in 2018 coincided with a NAND cyclical peak. Within a year, prices fell more than 50%. Kioxia then rode a full volatility spectrum — COVID demand spike (2020), China slowdown (2021–22), severe NAND crash (2022–23), partial recovery (2024). After two postponed IPOs, Kioxia listed in December 2024 at ¥1,275/share — effectively a forced exit.",
  ],

  executiveSummary: [
    "Bain 주도 컨소시엄이 도시바 메모리를 ¥2조($18B)에 인수 — 2018년 시점 일본 사상 최대 LBO.",
    "에쿼티 $13B 중 Bain은 $4B, 나머지는 Apple·Dell·Seagate·SK Hynix·Hoya·INCJ 등 전략적 LP가 분담.",
    "전략적 LP는 재무 IRR보다 NAND 공급망 보장을 우선시 — 일반 PE 딜과 구조적으로 다른 LP base.",
    "Western Digital JV 파트너 소송으로 9개월 클로징 지연 후 2018년 6월 마감, 2019년 Kioxia로 사명 변경.",
    "두 차례 IPO 연기(2020·2022) + Western Digital 합병 협상 결렬(2023) 끝에 2024년 12월 강행 상장.",
    "IPO 시총 ¥6,700억 vs 진입 EV ¥2조 — 명목상 70%+ 평가절하, Bain 페이퍼 손실 케이스로 기록.",
  ],
  executiveSummaryEn: [
    "Bain-led consortium acquired Toshiba Memory for ¥2T ($18B) — Japan's largest LBO at the time of signing.",
    "Of ~$13B equity, Bain put in ~$4B; the rest came from strategic LPs (Apple, Dell, Seagate, SK Hynix, Hoya, INCJ).",
    "Strategic LPs prioritized NAND supply over financial IRR — a fundamentally different LP base than a typical PE deal.",
    "Western Digital JV litigation delayed closing nine months; deal completed in June 2018, rebranded Kioxia in 2019.",
    "Two postponed IPOs (2020, 2022) and a failed WD merger (2023) preceded a forced December 2024 listing.",
    "IPO market cap of ~¥670B versus a ¥2T entry EV — a 70%+ markdown and a paper loss case for Bain.",
  ],

  companyOverview: {
    body:
      "Kioxia는 NAND 플래시 메모리 글로벌 2~3위(시장점유율 ~16%), 매출의 대부분이 데이터센터 SSD, 스마트폰 임베디드 메모리, 클라이언트 SSD에서 발생한다. 욧카이치 팹은 Western Digital과 50:50 생산 JV로 운영. 직원 약 1만 5천 명, 매출의 90%가 일본 외에서 발생.",
    bodyEn:
      "Kioxia is the #2–3 global NAND flash player (~16% share). Revenue comes mainly from datacenter SSDs, smartphone embedded memory, and client SSDs. Its Yokkaichi fabs run as a 50:50 production JV with Western Digital. ~15,000 employees, with 90% of revenue from outside Japan.",
    metrics: [
      { label: "NAND 시장 점유율", labelEn: "NAND Market Share", value: "~16%", sub: "글로벌 2~3위" },
      { label: "직원 수", labelEn: "Employees", value: "~15,000" },
      { label: "FY2017 매출 (Pre-LBO)", labelEn: "FY2017 Revenue", value: "$12.8B" },
      { label: "FY2017 EBITDA", labelEn: "FY2017 EBITDA", value: "$3.3B", sub: "사이클 피크" },
      { label: "Entry EV (2018)", labelEn: "Entry EV (2018)", value: "$18B", sub: "5.5× EBITDA" },
      { label: "IPO 시총 (2024.12)", labelEn: "IPO Mcap (Dec 2024)", value: "~¥670B", sub: "~$4.5B" },
    ],
    financials: [
      { year: "FY2017", ebitdaBn: 3.3, revenueBn: 12.8, ebitdaMarginPct: 25.8, note: "Pre-LBO, 사이클 피크", noteEn: "Pre-LBO, cycle peak" },
      { year: "FY2018", ebitdaBn: 3.0, revenueBn: 12.5, ebitdaMarginPct: 24.0, note: "딜 클로징", noteEn: "Deal close" },
      { year: "FY2019", ebitdaBn: 1.7, revenueBn: 9.8, ebitdaMarginPct: 17.3, note: "NAND 폭락", noteEn: "NAND crash" },
      { year: "FY2020", ebitdaBn: 2.5, revenueBn: 11.5, ebitdaMarginPct: 21.7, note: "COVID 수요", noteEn: "COVID demand" },
      { year: "FY2021", ebitdaBn: 2.8, revenueBn: 12.6, ebitdaMarginPct: 22.2 },
      { year: "FY2022", ebitdaBn: 2.0, revenueBn: 11.0, ebitdaMarginPct: 18.2 },
      { year: "FY2023", ebitdaBn: 0.8, revenueBn: 8.5, ebitdaMarginPct: 9.4, note: "NAND 대붕괴", noteEn: "NAND collapse" },
      { year: "FY2024E", ebitdaBn: 1.2, revenueBn: 11.0, ebitdaMarginPct: 10.9, note: "IPO 직전 회복", noteEn: "Pre-IPO recovery" },
    ],
    financialsNote: "단위: $B 환산 | 출처: Kioxia 유가증권신고서·연간보고서, 도시바 공시",
    financialsNoteEn: "Units: $B equivalent | Source: Kioxia prospectus and annual reports, Toshiba disclosures",
  },

  postDealAssessment: {
    body:
      "Bain-Kioxia는 한 마디로 '사이클 피크 진입 + 두 번의 IPO 윈도우 미스'다. 진입 멀티플 5.5x EBITDA는 외관상 저렴해 보였지만 진입 EBITDA $3.3B 자체가 NAND 사이클 정점 수치였다. 2024년 IPO 시점 EBITDA는 진입 대비 ~65% 낮은 $1.2B로, 명목 시총 $4.5B는 진입 EV $18B 대비 75% 평가절하. 다만 Apple·Dell 등 전략적 LP는 그동안 우선 공급권을 활용해 별도의 '비재무적 회수'를 누렸다고 봐야 한다. 보수적 1.5x 레버리지가 디폴트를 막아준 점은 단단한 교훈.",
    bodyEn:
      "Bain-Kioxia is, in one line, 'cycle-peak entry plus two missed IPO windows.' The 5.5x entry multiple looked cheap, but $3.3B EBITDA was itself peak-cycle. By the 2024 IPO, EBITDA had fallen ~65% to $1.2B and the ~$4.5B market cap sat 75% below the $18B entry EV. Strategic LPs like Apple and Dell, however, extracted 'non-financial returns' via preferred supply throughout the hold. The hard-earned lesson: conservative 1.5x leverage kept Kioxia out of default — a structural design that mattered.",
    overallVerdict: "사이클 피크에 사들인 메모리 카브아웃 — 페이퍼 손실, 그러나 디폴트 회피",
    overallVerdictEn: "A memory carve-out bought at the cyclical peak — paper loss, but no default",
    positives: [
      "보수적 1.5x 레버리지가 2019·2023 NAND 대붕괴에도 디폴트 회피의 결정적 안전판.",
      "전략적 LP 모델이 PE 자본 구조의 새로운 카테고리를 개척 — 향후 반도체·배터리 카브아웃의 템플릿.",
      "도시바와 사업적·자본적으로 깔끔히 분리하며 독립 브랜드 Kioxia 구축에 성공.",
      "두 번 IPO를 연기하고 시장이 회복할 때까지 기다린 인내 — 가격은 슬래시됐지만 상장에는 성공.",
    ],
    positivesEn: [
      "Conservative 1.5x leverage was the safety valve that prevented default through the 2019 and 2023 NAND crashes.",
      "Strategic-LP model pioneered a new category of PE capital — a likely template for future semis and battery carve-outs.",
      "Cleanly separated from Toshiba operationally and financially; built Kioxia as a credible independent brand.",
      "Postponed the IPO twice and waited for a workable market — final pricing was slashed but listing succeeded.",
    ],
    risks: [
      "단일 제품(NAND) 의존도 — 사이클 진폭이 ±70%로 PE 보유 기간 회수 타이밍을 결정.",
      "IPO 시총 $4.5B vs 진입 EV $18B — 명목상 75% 손실. 향후 후속 매도(secondary)도 가격 부담.",
      "Western Digital과의 욧카이치 JV 의존이 지정학적·운영적 단일 실패점. 2023년 합병 결렬로 통합 시너지 옵션 소멸.",
    ],
    risksEn: [
      "Single-product (NAND) concentration — ±70% cycle amplitude defined the PE exit window.",
      "Listing market cap of ~$4.5B versus ~$18B entry EV is a ~75% paper loss — and secondary block sales will face price pressure.",
      "Reliance on the Yokkaichi JV with Western Digital is a geopolitical and operational single point of failure; the 2023 merger collapse closed off the consolidation play.",
    ],
    editorNote:
      "Bain-Kioxia는 'PE가 사이클 산업을 보유할 때 가장 위험한 것은 진입가가 아니라 진입 시점의 EBITDA'라는 교과서적 교훈이다. 보수적 레버리지로 디폴트는 면했지만, 6년간 두 번의 IPO 윈도우를 모두 놓치며 결국 슬래시된 가격에 상장한 사실은 메모리·사이클 산업 LBO의 본질적 어려움을 보여준다.",
    editorNoteEn:
      "Bain-Kioxia is the textbook reminder that for cyclical PE, the dangerous number isn't the entry multiple but the entry-year EBITDA. Conservative leverage kept default off the table, yet six years of missed IPO windows ended in a slashed listing — a stark illustration of how hard memory and cyclical LBOs really are.",
  },

  tombstone: {
    fundInitials: "BC",
    fundBg: "bg-emerald-700",
    portfolioInitials: "KX",
    portfolioBg: "bg-slate-900",
    fundName: "Bain Capital 주도 컨소시엄",
    portfolioName: "Kioxia Holdings",
    dealTitle: "Bain × 도시바 메모리(Kioxia) — $18B 카브아웃 LBO",
    dealSize: "$18B EV",
    entryMultiple: "5.5× EBITDA",
    moic: "~0.4×",
    irr: "약 -12%",
    holdYears: "6년+",
    closeDate: "2018년 6월 1일",
  },

  concepts: [
    {
      term: "카브아웃 LBO (Carveout LBO)",
      termEn: "Carveout LBO",
      description:
        "대기업이 자회사·사업부를 분리해 PE에 매각하는 형태의 LBO. 가격은 통상 모회사 위기 디스카운트가 반영되지만, 분리 비용·TSA(과도기 서비스 계약) 부담이 크다.",
      descriptionEn:
        "An LBO where a corporate parent sells a subsidiary or segment to PE. Prices typically reflect a 'parent distress' discount, but separation costs and transitional service agreements (TSAs) weigh on returns.",
    },
    {
      term: "전략적 LP (Strategic LP)",
      termEn: "Strategic LP",
      description:
        "재무적 LP가 아니라 사업적 동기(공급망 보장, 기술 접근권 등)로 PE 펀드 또는 SPV에 합류하는 사업회사. Kioxia 딜에서 Apple·Dell·Seagate가 대표 사례.",
      descriptionEn:
        "Operating companies that participate in a PE fund or SPV for strategic reasons — supply security, tech access — rather than financial IRR. Apple, Dell, and Seagate played this role in Kioxia.",
    },
    {
      term: "0% 전환사채 (Zero-Coupon CB)",
      termEn: "Zero-Coupon Convertible Bond",
      description:
        "이자 없이 발행되며 만기에 주식 전환 옵션이 부여되는 채권. SK Hynix가 한국 반독점법상 직접 지분 보유를 피하기 위해 활용한 구조.",
      descriptionEn:
        "A bond that pays no coupon but converts into equity at maturity. SK Hynix used this structure to sidestep Korean antitrust constraints on direct equity ownership.",
    },
    {
      term: "NAND 사이클 (NAND Cycle)",
      termEn: "NAND Cycle",
      description:
        "NAND 메모리 가격은 12~24개월 주기로 ±70% 변동. 공급 확대→가격 폭락→감산→가격 회복의 사이클 반복. PE 보유 기간 동안 사이클 위치가 회수 가치를 좌우한다.",
      descriptionEn:
        "NAND prices cycle ±70% over 12–24 months — supply expansion, price crash, production cuts, recovery. For a PE owner, the cycle position at exit dominates realized value.",
    },
    {
      term: "JV 파트너 동의권 (JV Consent Rights)",
      termEn: "JV Consent Rights",
      description:
        "합작 파트너가 상대측 지분 변경 시 동의를 요구할 권리. Western Digital이 욧카이치 JV 동의권을 활용해 Kioxia 매각을 막으려 한 사례 — 9개월 클로징 지연을 야기.",
      descriptionEn:
        "Rights that let one JV partner block changes of control on the other side. Western Digital used its Yokkaichi JV consent rights to try to block the Kioxia sale — causing a nine-month delay.",
    },
  ],

  faq: [
    {
      q: "Bain은 정말 손실인가요?",
      qEn: "Did Bain really lose money?",
      a:
        "IPO 시점 가치로는 진입 대비 70%+ 평가절하로 페이퍼 손실. 다만 IPO에서 일부만 매도하고 나머지는 보유 중이므로 최종 손익은 향후 secondary sale 가격에 달려 있습니다. 보수적 시나리오에서도 0.5x MOIC 이하가 유력.",
      aEn:
        "By IPO valuation it is a 70%+ paper markdown. Only part of the stake was sold at IPO, so the final outcome depends on future secondary sales — but even a conservative scenario likely leaves Bain below 0.5x MOIC.",
    },
    {
      q: "전략적 LP들은 만족했나요?",
      qEn: "Were the strategic LPs satisfied?",
      a:
        "Apple·Dell·Seagate는 NAND 공급 보장이라는 비재무적 목적을 6년간 누렸으므로 '준만족' 상태로 평가됩니다. 재무적 손실은 있지만 공급망 리스크 헤지 비용으로 간주 가능.",
      aEn:
        "Apple, Dell, and Seagate enjoyed six years of preferred NAND supply — a non-financial benefit that arguably counts as 'partially satisfied.' Financial losses can be treated as the cost of supply-chain insurance.",
    },
    {
      q: "Western Digital 합병이 됐다면 어땠을까요?",
      qEn: "What if the Western Digital merger had closed?",
      a:
        "통합 NAND 사업의 시장 점유율 ~30%로 1위 Samsung 견제 가능했을 것. 시너지 + 합병 후 IPO/매각으로 회수 가치 2~3배 개선 가능성. 다만 한국·중국 반독점 승인 난항과 가치 평가 이견으로 결렬.",
      aEn:
        "A merged Kioxia-WD NAND business would have held ~30% share, credibly challenging Samsung. Synergies plus a post-merger IPO or sale could have raised exit values 2–3x. The deal failed over Korean/Chinese antitrust and valuation disagreements.",
    },
    {
      q: "왜 IPO를 두 번 연기했나요?",
      qEn: "Why were the two IPOs postponed?",
      a:
        "2020년 미·중 무역분쟁(특히 화웨이 수출규제)이 NAND 수요 전망을 흐림. 2022년에는 NAND 가격 사이클 바닥 + 글로벌 IPO 시장 빙하기. 두 번 다 'cycle 회복 후 재시도' 판단.",
      aEn:
        "In 2020, US-China trade tensions (notably the Huawei export curbs) clouded NAND demand. In 2022, NAND was at a cycle bottom and the global IPO market was frozen. Both times Bain chose to wait for a better window.",
    },
    {
      q: "메모리 LBO는 원래 어려운가요?",
      qEn: "Are memory LBOs inherently difficult?",
      a:
        "네 — 사이클 진폭(±70%), capex 집약도(연 매출의 20~30%), 단일 제품 의존, 지정학 리스크가 결합돼 PE 보유에 부적합한 산업입니다. Kioxia 케이스는 그 어려움을 실증한 대표 사례.",
      aEn:
        "Yes — ±70% cycle amplitude, 20–30% capex intensity, single-product concentration, and geopolitical risk make memory ill-suited to PE ownership. Kioxia is the case study that proves it.",
    },
    {
      q: "이 딜에서 가장 큰 교훈은?",
      qEn: "What's the biggest lesson from this deal?",
      a:
        "'엔트리 멀티플이 낮아 보여도 엔트리 EBITDA가 피크라면 사실상 비싸게 산 것'이라는 사이클 산업 LBO의 정수. 보수적 레버리지는 디폴트는 막아주지만 가치 하락 자체는 막지 못합니다.",
      aEn:
        "A low entry multiple is a mirage if entry EBITDA is at a cyclical peak — the essential truth of cyclical LBOs. Conservative leverage prevents default but cannot prevent value erosion.",
    },
  ],

  sources: [
    { id: 1, text: "Toshiba Corp., 메모리 사업부 매각 공시 (2017.09.28)", url: "https://www.global.toshiba/" },
    { id: 2, text: "Bain Capital 보도자료 — Toshiba Memory 인수 클로징 (2018.06.01)" },
    { id: 3, text: "Kioxia Holdings 유가증권신고서 (도쿄증권거래소, 2024.11)" },
    { id: 4, text: "Western Digital v. Toshiba 중재 자료 (2017~2018)" },
    { id: 5, text: "Nikkei Asia, 'Kioxia's long road to IPO' (2024.12)" },
    { id: 6, text: "Reuters, 'Western Digital-Kioxia merger collapses' (2023.10)" },
    { id: 7, text: "TrendForce, NAND Flash Industry Reports (2018~2024)" },
    { id: 8, text: "Bloomberg, 'Bain's $18bn Kioxia deal six years on' (2024.12)" },
  ],

  seo: {
    title: "Bain × Kioxia(도시바 메모리) 2018 — $18B 카브아웃 LBO | Deal Story",
    description:
      "Bain Capital 주도 컨소시엄의 도시바 메모리 $18B 인수와 6년 후 슬래시된 Kioxia IPO. Apple·Dell·SK Hynix 전략적 LP 구조, NAND 사이클, Western Digital JV 분쟁까지 — 메모리 LBO 풀 케이스 스터디.",
    keywords: [
      "Bain Kioxia",
      "도시바 메모리 매각",
      "Toshiba Memory LBO",
      "NAND LBO",
      "전략적 LP",
      "Apple Dell Kioxia",
      "Kioxia IPO",
      "Western Digital JV",
      "메모리 사이클",
      "일본 카브아웃 LBO",
    ],
  },
};

export default deal;
