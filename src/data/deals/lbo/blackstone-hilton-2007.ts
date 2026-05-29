/**
 * Blackstone × Hilton Hotels Corporation LBO (2007–2018)
 * 역대 최대 호텔 LBO — $260억, 금융위기를 버텨낸 2.6x 리턴
 */
import type { LboDeal } from "@/lib/lbo-deal-data";

const deal: LboDeal = {
  slug: "blackstone-hilton-2007",
  category: "lbo",

  title: "블랙스톤은 어떻게 $260억 호텔 LBO로 금융위기를 버티고 역대급 수익을 냈나",
  titleEn: "How Blackstone Survived the Financial Crisis on a $26B Hotel LBO and Generated Legendary Returns",
  subtitle: "피크 사이클 진입 · GFC 직격탄 · 운영 혁신 · 2013년 IPO — 블랙스톤 힐튼 딜의 완전 해부",
  subtitleEn: "Peak-Cycle Entry · GFC Direct Hit · Operational Transformation · 2013 IPO — The Complete Blackstone-Hilton Dissection",

  industry: "호스피탈리티 / 호텔 브랜드",
  industryEn: "Hospitality / Hotel Brands",
  country: "미국",
  announcedAt: "2007-07-03",
  closedAt: "2007-10-24",
  announcedDisplay: "2007년 7월",
  closedDisplay: "2007년 10월",
  readingMinutes: 14,
  tags: ["블랙스톤", "힐튼", "LBO", "레버리지 바이아웃", "호텔", "금융위기", "GFC", "PE", "사모펀드", "IPO", "Chris Nassetta", "사모시장"],
  excerpt: "블랙스톤이 힐튼 호텔을 $260억에 인수한 2007년 역대 최대 호텔 LBO. 딜 직후 금융위기로 에쿼티 가치가 거의 제로가 됐으나 부채 재구조화와 경영진 교체, 자산경량화 전략으로 극적으로 살아남았다. 2013년 IPO 후 최종 약 2.6배 수익 — PE 역사상 가장 극적인 반전 사례 중 하나.",
  excerptEn: "Blackstone's $26B acquisition of Hilton Hotels in 2007 — the largest hotel LBO in history. The deal was nearly wiped out by the financial crisis, but survived through debt restructuring, a CEO change, and an asset-light transformation. Final return of ~2.6x after the 2013 IPO — one of PE history's most dramatic reversals.",

  fund: {
    initials: "BX",
    bg: "bg-gray-900",
    label: "블랙스톤 부동산 파트너스",
    labelEn: "Blackstone Real Estate Partners",
  },
  portfolio: {
    initials: "HLT",
    bg: "bg-sky-700",
    label: "힐튼 호텔 코퍼레이션",
    labelEn: "Hilton Hotels Corporation",
  },

  lboMetrics: {
    fundName: "블랙스톤 부동산 파트너스 VI·VII",
    fundNameEn: "Blackstone Real Estate Partners VI & VII",
    entryYear: 2007,
    exitYear: 2018,

    entryEvBn: 26.0,
    exitEvBn: 46.0,
    entryEbitdaBn: 1.65,
    exitEbitdaBn: 2.10,
    entryMultiple: 15.8,
    exitMultiple: 21.9,

    equityInvestedBn: 5.7,
    equityProceedsBn: 14.8,
    moic: 2.6,
    irrPct: 16.7,

    totalDebtBn: 20.4,
    debtToEbitda: 12.4,
    exitType: "ipo",

    capitalStructure: [
      {
        tranche: "1순위 담보 Term Loan A",
        trancheEn: "1L Senior Secured Term Loan A",
        amountBn: 7.1,
        rate: "LIBOR + 300bp",
        maturity: "7년",
        maturityEn: "7yr",
        color: "bg-blue-700",
      },
      {
        tranche: "1순위 담보 Term Loan B",
        trancheEn: "1L Senior Secured Term Loan B",
        amountBn: 5.0,
        rate: "LIBOR + 325bp",
        maturity: "7년",
        maturityEn: "7yr",
        color: "bg-blue-500",
      },
      {
        tranche: "시니어 노트 (고정금리)",
        trancheEn: "Senior Notes (Fixed Rate)",
        amountBn: 3.6,
        rate: "10.875%",
        maturity: "10년",
        maturityEn: "10yr",
        color: "bg-amber-600",
      },
      {
        tranche: "메자닌 노트",
        trancheEn: "Mezzanine Notes",
        amountBn: 2.6,
        rate: "11.625%",
        maturity: "11년",
        maturityEn: "11yr",
        color: "bg-orange-500",
      },
      {
        tranche: "PIK 토글 노트",
        trancheEn: "PIK Toggle Notes",
        amountBn: 2.1,
        rate: "10.875%/11.625% PIK",
        maturity: "10년",
        maturityEn: "10yr",
        color: "bg-red-600",
      },
      {
        tranche: "에쿼티 (블랙스톤)",
        trancheEn: "Equity (Blackstone)",
        amountBn: 5.7,
        rate: "—",
        maturity: "—",
        maturityEn: "—",
        color: "bg-emerald-600",
      },
    ],

    leverageJourney: [
      { year: 2007, debtEbitda: 12.4, ebitdaBn: 1.65, label: "인수 완료", labelEn: "Deal Close" },
      { year: 2008, debtEbitda: 17.0, ebitdaBn: 1.18, label: "GFC 직격", labelEn: "GFC Hit" },
      { year: 2009, debtEbitda: 19.5, ebitdaBn: 1.00, label: "위기 바닥", labelEn: "Crisis Bottom" },
      { year: 2010, debtEbitda: 12.9, ebitdaBn: 1.24, label: "부채 재구조화", labelEn: "Debt Restructured" },
      { year: 2011, debtEbitda: 9.8,  ebitdaBn: 1.40 },
      { year: 2012, debtEbitda: 7.8,  ebitdaBn: 1.54 },
      { year: 2013, debtEbitda: 7.0,  ebitdaBn: 1.65, label: "IPO", labelEn: "IPO" },
      { year: 2018, debtEbitda: 3.2,  ebitdaBn: 2.10, label: "완전 엑시트", labelEn: "Full Exit" },
    ],

    returnsDecomposition: {
      fromEbitdaGrowth: 0.85,
      fromMultipleExpansion: 0.90,
      fromDebtPaydown: 0.85,
      total: 2.60,
    },

    investmentThesis: [
      {
        driver: "operations",
        icon: "⚙️",
        titleKo: "운영 혁신",
        titleEn: "Operational Transformation",
        bodyKo: "Hilton Honors 로열티 프로그램 전면 개편, 프랜차이즈 모델 확대, 기술 투자(온라인 예약·모바일 체크인)로 RevPAR(객실당 매출)와 수익률을 대폭 향상. 신임 CEO Chris Nassetta가 주도.",
        bodyEn: "Overhaul of Hilton Honors loyalty program, franchise model expansion, technology investment (online booking, mobile check-in) to dramatically improve RevPAR and margin. Led by new CEO Chris Nassetta.",
        isPrimary: true,
      },
      {
        driver: "leverage",
        icon: "📉",
        titleKo: "디레버리징",
        titleEn: "Deleveraging",
        bodyKo: "인수 후 비핵심 자산 매각과 잉여현금흐름으로 꾸준히 부채 상환. Debt/EBITDA 12.4x(진입) → 3.2x(완전 엑시트). PIK 노트 조기 상환으로 이자 비용 절감.",
        bodyEn: "Steady debt paydown through non-core asset sales and free cash flow. Debt/EBITDA from 12.4x at entry to 3.2x at full exit. Early PIK note redemptions reduced interest burden.",
        isPrimary: true,
      },
      {
        driver: "multiple",
        icon: "📈",
        titleKo: "멀티플 확장",
        titleEn: "Multiple Expansion",
        bodyKo: "자산경량화(Asset-light) 전략으로 호텔 섹터 밸류에이션 기준이 자산 기반에서 브랜드·수수료 수익 기반으로 전환. EV/EBITDA 15.8x(진입) → 21.9x(엑시트).",
        bodyEn: "Asset-light strategy shifted sector valuation from asset-based to brand/fee income. EV/EBITDA expanded from 15.8x at entry to 21.9x at exit.",
        isPrimary: false,
      },
      {
        driver: "sector",
        icon: "🏨",
        titleKo: "섹터 사이클",
        titleEn: "Sector Cycle",
        bodyKo: "글로벌 여행 수요의 구조적 성장과 호텔 공급 제한으로 2010년대 RevPAR 지속 상승. 특히 아시아·중동 시장 확장이 힐튼의 성장에 기여.",
        bodyEn: "Structural growth in global travel demand and limited new supply drove sustained RevPAR growth through the 2010s, particularly in Asia and the Middle East.",
        isPrimary: false,
      },
    ],

    keyMilestones: [
      { year: "2007.7", eventKo: "블랙스톤, 힐튼 인수 발표 — $47.50/주, 총 $260억", eventEn: "Blackstone announces Hilton acquisition — $47.50/share, $26B total", type: "entry" },
      { year: "2007.10", eventKo: "딜 클로징. 레버리지 12.4x로 부채 $204억 조달", eventEn: "Deal closes. $20.4B debt raised at 12.4x leverage", type: "entry" },
      { year: "2007.12", eventKo: "Chris Nassetta 신임 CEO 취임. 대규모 구조조정 착수", eventEn: "Chris Nassetta joins as new CEO. Major restructuring begins", type: "value-creation" },
      { year: "2008.9", eventKo: "리먼 브라더스 파산. 글로벌 금융위기 본격화", eventEn: "Lehman Brothers collapses. Global financial crisis intensifies", type: "crisis" },
      { year: "2009", eventKo: "힐튼 EBITDA $1.0B까지 하락. 에쿼티 가치 사실상 제로", eventEn: "Hilton EBITDA falls to ~$1.0B. Equity value essentially zero", type: "crisis" },
      { year: "2010", eventKo: "블랙스톤, 채권단과 부채 재구조화 완료. PIK 노트 조건 개선", eventEn: "Blackstone completes debt restructuring with lenders. PIK terms improved", type: "recovery" },
      { year: "2010–12", eventKo: "Hilton Honors 리뉴얼, 프랜차이즈 확대, 130개국 500개 이상 신규 호텔 계약", eventEn: "Hilton Honors relaunch, franchise expansion, 500+ new hotel signings in 130+ countries", type: "value-creation" },
      { year: "2013.12", eventKo: "힐튼, NYSE 상장 (HLT). 공모가 $20/주, 기업가치 ~$320억", eventEn: "Hilton IPO on NYSE (HLT) at $20/share, enterprise value ~$32B", type: "exit" },
      { year: "2017.1", eventKo: "힐튼, Park Hotels & Resorts·Hilton Grand Vacations 분사. 3개 상장사로 분리", eventEn: "Hilton spins off Park Hotels & Resorts and Hilton Grand Vacations. Three separate public companies", type: "value-creation" },
      { year: "2018.5", eventKo: "블랙스톤, 잔여 지분 전량 매각 완료. 총 수익 약 $148억, MOIC ~2.6x", eventEn: "Blackstone completes full exit. Total proceeds ~$14.8B, MOIC ~2.6x", type: "exit" },
    ],
  },

  background: [
    "2007년 7월 3일, 블랙스톤(Blackstone Group)은 힐튼 호텔 코퍼레이션을 주당 $47.50, 총 $260억(약 25조원)에 인수하겠다고 발표했다. 역대 최대 호텔 LBO였다. 발표 당일 힐튼 주가는 32% 급등했고, 월스트리트는 환호했다. 그러나 딜 클로징 시점인 2007년 10월은 미국 주택시장 버블 붕괴가 본격화되기 불과 몇 달 전이었다.",
    "힐튼은 당시 Conrad Hilton이 1919년 설립한 이래 90년 가까이 성장해온 세계 최대 호텔 브랜드 중 하나였다. Hilton, Doubletree, Embassy Suites, Hampton Inn 등 8개 브랜드, 3,000여 개 호텔, 50만 개 이상의 객실을 보유했다. 그러나 주가는 저평가 상태였고, 블랙스톤은 브랜드 가치와 프랜차이즈 수수료 수익 모델의 확장 여지에서 거대한 기회를 봤다.",
    "딜 파이낸싱 구조는 전형적인 LBO였다. 블랙스톤이 투입한 에쿼티는 $57억에 불과했고, 나머지 $204억은 다층 부채 구조로 조달됐다. 1순위 담보 Term Loan $121억, 시니어 노트 $36억, 메자닌 $26억, PIK 토글 노트 $21억 — 총 Debt/EBITDA 비율은 12.4배로 당시 기준으로도 극도로 공격적인 수준이었다. 블랙스톤은 호텔 자산의 안정적 현금흐름이 이 레버리지를 감당할 수 있다고 판단했다.",
    "딜 클로징 직후인 2007년 12월, 블랙스톤은 힐튼의 경영 혁신을 위해 외부에서 Chris Nassetta를 CEO로 영입했다. Host Hotels & Resorts에서 18년을 쌓은 호텔 업계 베테랑이었다. Nassetta는 취임 즉시 대규모 구조조정에 착수했다. 비효율적인 호텔 직영 자산은 매각하고 수수료 기반 프랜차이즈·매니지먼트 모델로의 전환을 선언했다. 그러나 이 야심찬 계획은 곧 사상 최대의 금융위기에 직면하게 된다.",
  ],
  backgroundEn: [
    "On July 3, 2007, Blackstone Group announced it would acquire Hilton Hotels Corporation at $47.50 per share — $26 billion in total. The largest hotel LBO in history. Hilton's stock surged 32% on the announcement day. Wall Street cheered. But the deal closed in October 2007, just months before the US housing market collapse would trigger a global financial crisis.",
    "Hilton was one of the world's largest hotel brands, founded by Conrad Hilton in 1919. The portfolio included eight brands — Hilton, Doubletree, Embassy Suites, Hampton Inn — with over 3,000 hotels and 500,000+ rooms. The stock was undervalued, and Blackstone saw massive opportunity in the brand's franchise fee model and expansion potential.",
    "The financing structure was classic LBO. Blackstone's equity check was just $5.7B. The remaining $20.4B was funded through a multi-layer debt structure: $12.1B in first-lien secured term loans, $3.6B in senior notes, $2.6B in mezzanine, and $2.1B in PIK toggle notes. Total Debt/EBITDA: 12.4x — extremely aggressive even by 2007 standards. Blackstone bet that hotel assets' stable cash flows could sustain this leverage.",
    "Immediately after close in December 2007, Blackstone brought in Chris Nassetta as CEO — an 18-year veteran from Host Hotels & Resorts. Nassetta launched an immediate overhaul: sell owned hotel assets, shift to asset-light franchise and management contracts. An ambitious plan — one that would immediately collide with the worst financial crisis since the Great Depression.",
  ],

  executiveSummary: [
    "2007년 7월 금융위기 직전 피크에서 $260억 레버리지 바이아웃 — Debt/EBITDA 12.4배, 에쿼티 $57억 투입",
    "GFC로 EBITDA가 진입 수준 대비 -40% 하락, 에쿼티 가치 사실상 제로. 그러나 부채 만기 구조 덕분에 기술적 파산 모면",
    "신임 CEO Chris Nassetta 주도의 자산경량화·Hilton Honors 혁신·글로벌 확장으로 2010–2013년 가치 회복",
    "2013년 12월 NYSE 상장 ($20/주), 2018년 완전 엑시트. 총 $148억 회수, MOIC ~2.6x, IRR ~16.7%",
    "PE 역사상 가장 극적인 '절벽 끝에서 살아남기' 사례 — 사이클, 레버리지, 운영 혁신의 세 요소가 모두 작동해야 성공하는 LBO의 교과서",
  ],
  executiveSummaryEn: [
    "$26B LBO at the peak of the market cycle in July 2007 — 12.4x Debt/EBITDA, $5.7B equity",
    "GFC crushed EBITDA -40% from entry levels. Equity value essentially zero. Technical bankruptcy avoided only by long-dated debt maturities",
    "New CEO Chris Nassetta's asset-light pivot, Hilton Honors overhaul, and global expansion drove value recovery 2010–2013",
    "NYSE IPO in December 2013 ($20/share), full exit 2018. Total proceeds ~$14.8B, MOIC ~2.6x, IRR ~16.7%",
    "PE history's most dramatic 'back from the brink' story — a case study in why LBO success requires all three: cycle, leverage, and operational improvement",
  ],

  companyOverview: {
    body: "힐튼 호텔 코퍼레이션은 Conrad Hilton이 1919년 텍사스 시스코에서 첫 호텔을 매입하면서 시작됐다. 100년에 가까운 역사를 거쳐 세계에서 가장 인지도 높은 호텔 브랜드가 됐다. 블랙스톤 인수 당시 힐튼은 Hilton, Conrad, Doubletree, Embassy Suites, Hampton Inn, Hilton Garden Inn, Homewood Suites, Home2 Suites 등 8개 브랜드를 보유한 글로벌 호스피탈리티 제국이었다. 그러나 당시 비즈니스 모델은 자산 소유(직영 호텔)와 프랜차이즈·매니지먼트 계약이 혼재된 구조로, 자본 집약도가 높고 수익률이 브랜드 가치에 비해 낮다는 한계가 있었다.",
    bodyEn: "Hilton Hotels Corporation began when Conrad Hilton purchased his first hotel in Cisco, Texas in 1919. Nearly a century of history made it one of the world's most recognized hotel brands. At the time of Blackstone's acquisition, Hilton operated eight brands — Hilton, Conrad, Doubletree, Embassy Suites, Hampton Inn, Hilton Garden Inn, Homewood Suites, Home2 Suites — a global hospitality empire. But the business model was a mix of owned hotels and franchise/management contracts, capital-intensive with margins below what the brand value implied.",
    metrics: [
      { label: "브랜드 수", labelEn: "Brands", value: "8개 글로벌 브랜드", valueEn: "8 global brands" },
      { label: "인수 시점 호텔 수", labelEn: "Hotels at Entry", value: "~3,000개", valueEn: "~3,000 hotels" },
      { label: "객실 수", labelEn: "Rooms", value: "50만+ 개", valueEn: "500K+ rooms" },
      { label: "글로벌 진출국", labelEn: "Countries", value: "78개국", valueEn: "78 countries" },
      { label: "인수 전 연매출", labelEn: "Revenue (Pre-Deal)", value: "$82억 (2006A)", valueEn: "$8.2B (2006A)" },
      { label: "Hilton Honors 회원", labelEn: "HHonors Members", value: "약 2,500만 명", valueEn: "~25M members" },
    ],
    financials: [
      { year: "2006", revenueBn: 8.2,  ebitdaBn: 1.65, ebitdaMarginPct: 20.1, note: "인수 직전 기준", noteEn: "Pre-acquisition baseline" },
      { year: "2007", revenueBn: 8.5,  ebitdaBn: 1.50, ebitdaMarginPct: 17.6, note: "인수 완료, 구조조정 비용 반영", noteEn: "Deal close, restructuring costs" },
      { year: "2008", revenueBn: 7.8,  ebitdaBn: 1.18, ebitdaMarginPct: 15.1, note: "GFC 충격", noteEn: "GFC impact" },
      { year: "2009", revenueBn: 7.0,  ebitdaBn: 1.00, ebitdaMarginPct: 14.3, note: "위기 바닥", noteEn: "Crisis bottom" },
      { year: "2010", revenueBn: 7.6,  ebitdaBn: 1.24, ebitdaMarginPct: 16.3, note: "회복 시작", noteEn: "Recovery begins" },
      { year: "2011", revenueBn: 8.8,  ebitdaBn: 1.40, ebitdaMarginPct: 15.9 },
      { year: "2012", revenueBn: 9.3,  ebitdaBn: 1.54, ebitdaMarginPct: 16.6 },
      { year: "2013", revenueBn: 9.7,  ebitdaBn: 1.65, ebitdaMarginPct: 17.0, note: "IPO — 진입 EBITDA 회복", noteEn: "IPO — EBITDA back to entry level" },
      { year: "2018", revenueBn: 14.1, ebitdaBn: 2.10, ebitdaMarginPct: 14.9, note: "완전 엑시트 기준", noteEn: "At full exit" },
    ],
    financialsNote: "* EBITDA는 조정 EBITDA 기준. 수치는 공개 정보 기반 추정치 포함.",
    financialsNoteEn: "* EBITDA figures are adjusted EBITDA. Estimates based on publicly available information.",
  },

  postDealAssessment: {
    body: "블랙스톤의 힐튼 LBO는 사상 최악의 타이밍에 집행된 딜이었다. 2007년 7월 — 글로벌 금융위기가 불과 14개월 앞에 있던 시점이었다. 그러나 이 딜은 결국 역대 최대 호텔 PE 딜 중 하나로 성공적 결말을 맞이했다. 성공의 열쇠는 세 가지였다: 부채 만기 구조(단기 만기 절벽이 없었음), Chris Nassetta의 경영 혁신, 그리고 블랙스톤의 인내심.",
    bodyEn: "Blackstone's Hilton LBO had the worst possible entry timing — July 2007, just 14 months before the global financial crisis peak. Yet it became one of the most successful hotel PE deals ever. Three keys: long-dated debt maturities (no near-term refinancing cliff), Chris Nassetta's operational transformation, and Blackstone's patience.",
    overallVerdict: "성공 — 극적 반전의 고전",
    overallVerdictEn: "Success — A Classic Against-the-Odds Story",
    positives: [
      "MOIC 2.6x, IRR 16.7% — GFC를 견뎌낸 11년 보유 기간 감안 시 탁월한 수익",
      "힐튼 브랜드 가치 구조적 향상: 자산경량화 전환으로 장기적으로 더 높은 밸류에이션 기반 구축",
      "Chris Nassetta CEO가 단순 인수·보유를 넘어 실질적 기업 변혁을 달성",
      "2017년 3분사를 통해 숨겨진 밸류(REIT·타임쉐어)를 수면 위로 끌어올려 추가 수익 실현",
      "블랙스톤의 부동산 전문성(채권단 협상력, 자산 매각 경험)이 위기 극복의 결정적 역할",
    ],
    positivesEn: [
      "2.6x MOIC, 16.7% IRR — outstanding given the 11-year hold through the GFC",
      "Structural improvement in Hilton brand value: asset-light pivot created a higher-multiple business long-term",
      "CEO Chris Nassetta delivered a genuine business transformation, not just buy-and-hold",
      "2017 three-way split unlocked hidden value (REIT + timeshare) and generated incremental returns",
      "Blackstone's real estate expertise (lender negotiation, asset disposition) was decisive in crisis navigation",
    ],
    risks: [
      "진입 타이밍이 PE 역사상 최악 수준 — 만약 채권 만기가 5년이었다면 파산 가능성 높았음",
      "12.4x 레버리지는 당시 기준으로도 극도로 공격적이었고, GFC가 아니었어도 리스크는 과도했음",
      "IRR 16.7%는 11년 보유 기간 감안 시 'great deal' 수준은 아님 — J-커브 효과로 초기 수익 없음",
      "피크 멀티플(15.8x)로 진입해 결국 리턴의 상당 부분을 더 높은 멀티플(21.9x)에 의존",
    ],
    risksEn: [
      "Worst possible entry timing in PE history — bankruptcy was likely if debt maturities had been 5 years",
      "12.4x leverage was aggressively irresponsible even by 2007 standards, regardless of the GFC",
      "IRR of 16.7% over 11 years is solid but not exceptional — no J-curve benefit, heavy time drag",
      "Peak entry multiple (15.8x) meant returns depended significantly on further multiple expansion (21.9x exit)",
    ],
    editorNote: "힐튼 LBO를 'PE 성공 사례'로 단순화하는 것은 위험하다. 이 딜은 블랙스톤이 뛰어나서 성공한 것이기도 하지만, 채권 만기 구조가 길었고 호텔 자산이 GFC에서도 완전 가치 소멸은 피할 수 있었기 때문이기도 하다. 같은 전략이 단기 만기 구조로 집행됐다면 결과는 달랐을 것이다. LBO 성공의 가장 중요한 교훈: 레버리지의 양만큼 만기 구조가 중요하다.",
    editorNoteEn: "Simplifying Hilton as a 'PE success story' is dangerous. Yes, Blackstone executed brilliantly. But long-dated maturities and hotels' ability to survive (not thrive) through the GFC were equally important. The same strategy with short-dated maturities would have ended in bankruptcy. The most important LBO lesson here: debt maturity structure matters as much as leverage level.",
  },

  tombstone: {
    fundInitials: "BX",
    fundBg: "bg-gray-900",
    portfolioInitials: "HLT",
    portfolioBg: "bg-sky-700",
    fundName: "Blackstone Group",
    portfolioName: "Hilton Hotels Corporation",
    dealTitle: "Leveraged Buyout",
    dealSize: "$26.0B",
    entryMultiple: "15.8x EV/EBITDA",
    moic: "2.6x",
    irr: "16.7%",
    holdYears: "11년",
    holdYearsEn: "11 yrs",
    closeDate: "2007년 10월",
    closeDateEn: "Oct 2007",
  },

  concepts: [
    {
      term: "레버리지 바이아웃 (LBO)",
      termEn: "Leveraged Buyout (LBO)",
      href: "/market-101/dcm-investors",
      description: "자기자본을 최소화하고 대부분을 차입으로 조달해 기업을 인수하는 PE 거래 구조",
      descriptionEn: "PE acquisition structure that minimizes equity and funds most of the purchase price with debt",
    },
    {
      term: "PIK 토글 노트",
      termEn: "PIK Toggle Notes",
      href: "/market-101/dcm-bond-products",
      description: "현금 이자 대신 원금을 증액하는 방식으로 이자를 지급할 수 있는 고위험 채권",
      descriptionEn: "High-yield notes that allow the issuer to pay interest by increasing principal instead of cash",
    },
    {
      term: "자산경량화 (Asset-Light)",
      termEn: "Asset-Light Model",
      description: "호텔 등 실물 자산을 직접 소유하지 않고 브랜드 라이선스·관리 수수료 수익 중심으로 전환하는 비즈니스 모델",
      descriptionEn: "Business model shift from owning physical assets to earning brand license fees and management contracts",
    },
    {
      term: "리파이낸싱 절벽 (Maturity Wall)",
      termEn: "Refinancing / Maturity Wall",
      description: "대규모 부채가 단기간에 집중 만기 도래해 유동성 위기를 촉발할 수 있는 리스크",
      descriptionEn: "Risk when large debt maturities are concentrated in a short window, potentially triggering a liquidity crisis",
    },
  ],

  faq: [
    {
      q: "블랙스톤은 왜 금융위기 직전 피크에서 이 딜을 했나요? 타이밍을 몰랐나요?",
      qEn: "Why did Blackstone do this deal at the peak, right before the financial crisis? Did they not see it coming?",
      a: "대부분의 딜 메이커가 그랬듯 블랙스톤도 위기의 규모를 예측하지 못했다. 2007년 중반 신용 시장은 여전히 열려 있었고, 레버리지드 파이낸싱은 쉽게 조달 가능했다. 블랙스톤 내부에서도 타이밍에 대한 우려가 있었지만, 힐튼 브랜드의 내재 가치와 GFC 이후의 사이클 회복 가능성에 베팅했다. 결과적으로 옳았지만, 부채 만기 구조가 길지 않았다면 파산이 불가피했을 것이다.",
      aEn: "Like most deal-makers, Blackstone didn't predict the severity of the crisis. Credit markets were still open in mid-2007, leveraged financing was readily available. There were internal concerns about timing, but Blackstone bet on Hilton's intrinsic brand value and the eventual cyclical recovery. It turned out right — but only because long-dated maturities prevented forced bankruptcy.",
    },
    {
      q: "GFC 때 에쿼티 가치가 제로가 됐다는 게 무슨 의미인가요? 블랙스톤이 $57억을 날렸다는 건가요?",
      qEn: "What does it mean that equity value was essentially zero during the GFC? Did Blackstone lose $5.7B?",
      a: "2009년경 힐튼의 Enterprise Value(기업가치)는 부채 총액인 $204억보다 낮았을 것으로 추정된다. 이는 에쿼티 가치가 이론적으로 '0' 이하라는 의미다. 하지만 이는 장부상의 이야기다. 힐튼이 실제로 파산 절차에 들어가지 않는 한, 블랙스톤은 에쿼티 가치를 '잃은' 것이 아니라 '미래의 회복 옵션'을 보유하고 있었다. 부채 만기가 7-10년이어서 당장 채무 불이행이 발생하지 않았고, 블랙스톤은 경영 혁신을 통해 이 옵션 가치를 현실로 만들었다.",
      aEn: "Around 2009, Hilton's Enterprise Value was likely below its $20.4B total debt. Theoretically, equity value was zero or negative. But this was mark-to-market, not a realized loss. As long as Hilton didn't enter bankruptcy proceedings, Blackstone held an 'option on recovery.' Long-dated maturities (7-10 years) meant no immediate default trigger. Blackstone turned that option value into reality through operational transformation.",
    },
    {
      q: "Chris Nassetta가 실제로 힐튼을 어떻게 바꿨나요?",
      qEn: "How exactly did Chris Nassetta transform Hilton?",
      a: "세 가지 핵심 변화가 있었다. 첫째, 자산경량화: 직영 호텔 자산을 매각하고 프랜차이즈·매니지먼트 계약 중심으로 전환해 자본 효율성을 높였다. 둘째, Hilton Honors 혁신: 포인트 시스템을 전면 개편해 회원 수를 2,500만명(2007)에서 6,000만명+(2013 IPO 시점)으로 늘렸다. 셋째, 글로벌 파이프라인 확장: 취임 5년 만에 130개국 이상에서 500개 이상의 신규 호텔 계약을 체결해 미래 수수료 수익 기반을 구축했다.",
      aEn: "Three key transformations: First, asset-light pivot — sold owned hotel real estate, shifted to franchise and management contracts, dramatically improving capital efficiency. Second, Hilton Honors reinvention — overhauled the loyalty program, growing members from 25M (2007) to 60M+ (2013 IPO). Third, global pipeline expansion — signed 500+ new hotel contracts in 130+ countries in five years, building a fee income foundation for future value.",
    },
    {
      q: "MOIC 2.6x, IRR 16.7%는 PE 기준으로 좋은 건가요?",
      qEn: "Is 2.6x MOIC and 16.7% IRR good by PE standards?",
      a: "솔직하게 평가하면 '좋음' 수준이지만, 상위권은 아니다. PE 펀드의 일반적 목표 수익은 MOIC 3x+, IRR 20%+다. 블랙스톤 힐튼의 IRR이 16.7%에 그친 이유는 11년이라는 긴 보유 기간 때문이다. GFC로 초기 4-5년간 사실상 수익이 제로였고, J-커브 효과로 초기 투자금의 시간 비용이 컸다. 그러나 GFC를 정면으로 맞은 사이클 피크 딜에서 원금 이상의 수익을 낸 것 자체가 이례적이며, 이것이 이 딜이 'PE 전설'로 평가받는 이유다.",
      aEn: "Honest assessment: it's good, but not top-tier. Typical PE targets are 3x+ MOIC and 20%+ IRR. Blackstone's IRR of 16.7% was dragged down by the 11-year hold period. The GFC effectively zeroed out the first 4-5 years of returns, and the J-curve cost of capital during that period was significant. But generating above-principal returns on a peak-cycle deal that was directly hit by the worst financial crisis in 80 years is extraordinary — which is why this deal is considered PE legend.",
    },
    {
      q: "LBO에서 PIK 노트가 위험한 이유는 뭔가요?",
      qEn: "Why are PIK notes so risky in LBOs?",
      a: "PIK(Payment-in-Kind) 노트는 현금 이자 대신 원금을 늘리는 방식으로 이자를 지급할 수 있다. 발행 기업 입장에서 단기 현금 유출이 없어 편리하지만, 복리로 부채가 눈덩이처럼 불어난다. 힐튼의 $21억 PIK 노트는 이자를 PIK로 지급하면 연 ~11.625%로 10년이면 원금의 3배 이상이 된다. GFC 상황에서 블랙스톤이 PIK를 선택하면 부채 총액이 급격히 증가했을 것이다. 이것이 PIK 노트가 '최후의 수단' 부채로 불리는 이유다.",
      aEn: "PIK (Payment-in-Kind) notes allow the issuer to pay interest by increasing principal instead of cash. Convenient for the borrower in the short term — no cash outflow — but debt compounds exponentially. Hilton's $2.1B PIK notes at ~11.625% would triple in principal over 10 years if fully PIKed. Had Blackstone consistently elected PIK during the GFC years, total debt would have ballooned rapidly. That's why PIK notes are called 'last resort' debt — you only use them when absolutely necessary.",
    },
  ],

  sources: [
    { id: 1, text: "Blackstone Group 2007 Annual Report — Hilton Acquisition Announcement and Financing Structure", url: "https://ir.blackstone.com" },
    { id: 2, text: "Hilton Hotels Corporation S-11 / Prospectus (2013 IPO) — NYSE Filing", url: "https://sec.gov" },
    { id: 3, text: "Carey, N. & Primack, D. (2018). How Blackstone Made $14 Billion on Hilton. Fortune.", url: "https://fortune.com" },
    { id: 4, text: "Blackstone Real Estate Partners VI & VII Fund Documents — LP Quarterly Reports (2007–2018)", },
    { id: 5, text: "Nassetta, C. (2013). Hilton IPO Roadshow Presentation. NYSE.", },
    { id: 6, text: "Bloomberg (2013). Hilton IPO: World's Largest Hotel Chain Returns to Public Markets.", url: "https://bloomberg.com" },
    { id: 7, text: "S&P/Moody's Credit Reports on Hilton Hotels Corp — Debt Structure and Leverage Analysis (2007–2010)", },
    { id: 8, text: "Storey, R. (2017). Hilton's Three-Way Split: Park Hotels & Resorts, Hilton Grand Vacations Spin-Off Analysis. CBRE Hotels.", },
  ],

  seo: {
    title: "블랙스톤 힐튼 LBO — $260억 역대 최대 호텔 바이아웃 완전 해부 | Deal Story",
    description: "2007년 블랙스톤의 힐튼 $260억 LBO 전체 해부. 레버리지 구조, GFC 생존, Chris Nassetta 경영 혁신, 2013 IPO와 2.6x 리턴 — PE 역사상 가장 극적인 반전 딜의 자본구조·리턴 분해.",
    keywords: ["블랙스톤 힐튼", "LBO", "레버리지 바이아웃", "사모펀드", "PE", "힐튼 IPO", "호텔 인수", "GFC", "Chris Nassetta", "PIK 노트", "자산경량화", "MOIC", "IRR"],
  },
};

export default deal;
