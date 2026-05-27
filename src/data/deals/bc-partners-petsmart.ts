/**
 * BC Partners × PetSmart (2015–2021)
 * 아마존 공포 속 역대 최대 소매 LBO — Chewy.com 인수로 디지털 전환한 역발상
 * $8.7B LBO → Chewy 인수 $3.35B → Chewy IPO $8.8B 가치 → 역대급 수익
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "bc-partners-petsmart",
  title: "아마존 공포를 역이용한 LBO — BC Partners가 PetSmart로 반격한 방법",
  subtitle: "$87억 역대 최대 소매 LBO → Chewy.com 인수 → 온라인 반전 → 역대급 수익",
  category: "ma",
  industry: "소매 / 반려동물",
  country: "미국",
  announcedAt: "2014-12-14",
  closedAt: "2015-03-11",
  announcedDisplay: "2014년 12월",
  closedDisplay: "2015년 3월",
  readingMinutes: 10,
  tags: [
    "BC Partners", "PetSmart", "Chewy", "LBO", "소매", "반려동물",
    "이커머스", "아마존", "디지털전환", "플랫폼전략", "IPO",
    "레버리지드론", "LevFin", "PE", "사모펀드", "역대최대소매LBO",
  ],
  excerpt:
    "2015년 BC Partners는 역대 최대 소매 LBO($87억)로 PetSmart를 인수했다. 아마존 위협으로 투자자들이 오프라인 소매를 기피하던 시기였다. 그런데 BC Partners는 2017년 Chewy.com을 $3.35억에 인수해 디지털 반격을 단행했다. 2019년 Chewy IPO 당시 가치 $8.8B — 인수가의 2.6배. 아마존 공포를 역이용한 역발상 LBO.",

  acquirer: { initials: "BCP", bg: "bg-teal-700", label: "BC Partners + La Caisse + StepStone" },
  target:   { initials: "PET", bg: "bg-purple-600", label: "PetSmart, Inc." },

  background: [
    "PetSmart는 미국 최대 반려동물 전문 소매체인으로, 2014년 당시 1,387개 매장을 운영하며 반려동물 용품·먹이·미용·훈련 서비스를 제공했다. 미국 반려동물 시장은 연간 $60B+ 규모로 안정적으로 성장했지만, Amazon이 반려동물 용품 카테고리에 공격적으로 진출하면서 오프라인 소매주 전체에 '아마존 공포'가 드리웠다.",
    "BC Partners의 thesis는 반려동물 시장의 특수성이었다: 반려동물 먹이·의약품은 '체험' 요소(수의사 자문, 그루밍, 트레이닝)가 높아 순수 온라인으로 대체되기 어렵다. 또한 PetSmart는 오프라인 서비스(클리닉, 그루밍, 훈련)를 통해 Amazon이 제공할 수 없는 차별화를 유지할 수 있다고 봤다.",
    "2014년 12월 BC Partners는 $83/주의 공개 매수로 PetSmart를 $87억에 인수했다. 에쿼티 약 $20억, TLB 등 부채 $67억으로 구성됐다. 당시 역대 최대 소매 LBO 기록이었다. 그리고 2017년, BC Partners는 당시 급성장 중이던 반려동물 온라인 쇼핑몰 Chewy.com을 $3.35억에 전격 인수했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$87억",
    acquirerName: "BC Partners + La Caisse de dépôt + StepStone",
    targetName: "PetSmart, Inc.",
    announcedDisplay: "2014년 12월 14일",
    closedDisplay: "2015년 3월 11일",
    country: "미국 (NASDAQ: PETM → 비상장)",
  },

  executiveSummary: [
    "BC Partners 컨소시엄이 PetSmart를 $87억($83/주)에 인수 — 역대 최대 소매 LBO.",
    "Thesis: 반려동물 서비스(그루밍·훈련·클리닉)는 Amazon 대체 불가 → 오프라인 차별화.",
    "2017년 Chewy.com 인수 $3.35B — 온라인 반려동물 1위 플랫폼 확보, 역발상 디지털 전환.",
    "2019년 Chewy IPO — 공모 당시 가치 $8.8B (인수가 $3.35B의 2.6배).",
    "BC Partners 기준 PetSmart+Chewy 합산 MOIC ~3×+ 추정.",
  ],

  industryOverview: {
    body: "미국 반려동물 시장은 2014년 당시 $58B 규모로, 경기 침체에도 불구하고 지속 성장하는 '황금 틈새 시장'이었다. 반려동물을 가족처럼 여기는 '펫 휴머니제이션(humanization)' 트렌드로 프리미엄 사료·의료·미용 지출이 증가했다. Amazon과 Chewy.com 등 온라인 채널이 빠르게 성장했지만, 그루밍·훈련·수의 서비스는 오프라인에서만 제공 가능했다.",
    metrics: [
      { label: "미국 반려동물 시장 규모",  value: "$58B",    sub: "2014년 기준, 연 5%+ 성장" },
      { label: "PetSmart 매장 수",        value: "1,387개", sub: "2014년, 북미 전역" },
      { label: "Chewy 인수가",            value: "$3.35B",  sub: "2017년, 온라인 반려동물 1위" },
      { label: "Chewy IPO 가치",          value: "$8.8B",   sub: "2019년 IPO 기준" },
    ],
    players: [
      { name: "PetSmart (BC Partners)", role: "미국 최대 반려동물 오프라인 소매체인" },
      { name: "Petco",                  role: "오프라인 반려동물 2위, 2020년 IPO 재상장" },
      { name: "Chewy.com (PetSmart 자회사)", role: "온라인 반려동물 1위, 2019년 IPO" },
      { name: "Amazon",                 role: "반려동물 용품 온라인 2위, 오프라인 진출 위협" },
    ],
  },

  companyOverview: {
    targetName: "PetSmart, Inc.",
    body: "1986년 설립된 미국 최대 반려동물 전문 소매체인. 사료·용품·의약품 판매 외에 그루밍·훈련·PetSmart Charities를 운영하며 반려동물 서비스 생태계를 형성했다. 2014년 매출 $6.9B, EBITDA ~$890M, EBITDA 마진 ~13%. Amazon 위협에도 불구하고 서비스 매출(그루밍·훈련·클리닉)이 전체 매출의 ~20%로, 순수 용품 소매보다 높은 진입장벽을 보유하고 있었다.",
    metrics: [
      { label: "LBO 딜 가치",         value: "$8.7B",   sub: "$83/주, EV/EBITDA ~9.8×" },
      { label: "매출 (FY2014)",       value: "$6.9B",   sub: "EBITDA 마진 ~13%" },
      { label: "서비스 매출 비중",    value: "~20%",    sub: "그루밍·훈련·클리닉 — Amazon 대체 불가" },
      { label: "Chewy IPO 가치",      value: "$8.8B",   sub: "2019년, 인수가 $3.35B 대비 2.6배" },
    ],
    financials: [
      {
        year: "FY2013",
        revenue: 6563,
        cogs: 4360,
        grossProfit: 2203,
        sga: 1420,
        operatingIncome: 783,
        ebitda: 855,
      },
      {
        year: "FY2014",
        revenue: 6917,
        cogs: 4580,
        grossProfit: 2337,
        sga: 1450,
        operatingIncome: 887,
        ebitda: 965,
      },
      {
        year: "FY2016",
        revenue: 7313,
        cogs: 4880,
        grossProfit: 2433,
        sga: 1520,
        operatingIncome: 913,
        ebitda: 1005,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "백만 달러",
    financialsNote: "FY2016은 Chewy 인수 전. 서비스(그루밍·훈련) 매출 안정 성장. 오프라인 소매 EBITDA는 유지됐으나 Chewy 인수 후 온라인 투자로 단기 EBITDA 압박 예상.",
  },

  dealStructure: {
    body: "에쿼티 약 $20억 + TLB·HY채권 $67억의 전형적 소매 LBO 구조. 에쿼티 비율 ~23%. 소매 LBO 특성상 재고자산·부동산 임대권을 담보로 ABL(Asset-Based Lending) 병행.",
    preOwnership: {
      nodes: [
        { id: "public",   label: "공개 시장 주주",  sub: "NASDAQ: PETM",             type: "entity" },
        { id: "petsmart", label: "PetSmart",        sub: "1,387개 매장, 매출 $6.9B", type: "target" },
      ],
      edges: [
        { from: "public", to: "petsmart", label: "상장 주식 100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "bcp",      label: "BC Partners 컨소시엄", sub: "에쿼티 ~$20억",             type: "fund"   },
        { id: "tlb",      label: "TLB 대주단",           sub: "~$40억 (변동금리, 1L)",     type: "entity" },
        { id: "hy",       label: "HY 채권자",            sub: "~$27억 (고정금리, 무담보)", type: "entity" },
        { id: "petsmart2", label: "PetSmart",            sub: "비상장",                    type: "target" },
        { id: "chewy",    label: "Chewy.com (2017~)",   sub: "인수가 $3.35B",             type: "entity" },
      ],
      edges: [
        { from: "bcp",   to: "petsmart2", label: "에쿼티 ~23%" },
        { from: "tlb",   to: "petsmart2", label: "$40억 (1L 담보)" },
        { from: "hy",    to: "petsmart2", label: "$27억 (무담보)" },
        { from: "petsmart2", to: "chewy", label: "100% 자회사 (2017)" },
      ],
    },
    keyTerms: [
      { label: "딜 가치",           value: "$8.7B (역대 최대 소매 LBO)",         accent: true  },
      { label: "Entry EV/EBITDA",   value: "~9.8× (FY2014 EBITDA 기준)",        accent: false },
      { label: "Chewy 인수",        value: "$3.35B (2017) → IPO $8.8B (2019)", accent: true  },
      { label: "HY 채권 금리",      value: "~8.875% 고정 (무담보 후순위)",      accent: false },
      { label: "ABL 시설",          value: "재고·AR 담보 리볼빙 크레딧 $1B",    accent: false },
    ],
  },

  advisors: {
    body: "BC Partners는 UBS를 수석 어레인저로, Kirkland & Ellis를 법률자문으로 활용했다. PetSmart 이사회는 Evercore를 독립 재무자문으로 선임했다.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "BC Partners 컨소시엄 (인수자)",
        initials: "BCP",
        bg: "bg-teal-700",
        advisors: [
          { firm: "UBS",                 role: "수석 어레인저",  roleType: "financial", note: "TLB·HY 신디케이션 주관" },
          { firm: "Barclays",            role: "공동 어레인저",  roleType: "financial", note: "ABL 시설 구조화" },
          { firm: "Kirkland & Ellis",    role: "법률 자문",      roleType: "legal",     note: "소매 LBO 구조 설계" },
        ],
      },
      {
        side: "target",
        sideLabel: "PetSmart (매각 측)",
        initials: "PET",
        bg: "bg-purple-600",
        advisors: [
          { firm: "Evercore",     role: "독립 재무 자문",  roleType: "financial", note: "Fairness Opinion 제공" },
          { firm: "Wachtell Lipton", role: "법률 자문",   roleType: "legal",     note: "이사회 M&A 자문" },
        ],
      },
    ],
  },

  valuation: {
    body: "BC Partners는 PetSmart를 EV/EBITDA ~9.8×(FY2014 $889M 기준)에 인수. 반려동물 서비스 부문의 방어적 성격과 Chewy 인수 후 디지털 전환 프리미엄을 감안한 가격이었다.",
    rows: [
      { item: "Entry EV",               val: "$8.7B",    note: "EV/EBITDA ~9.8×",                 accent: true  },
      { item: "Chewy 인수가 (2017)",    val: "$3.35B",   note: "당시 Chewy 매출 ~$900M",           accent: false },
      { item: "Chewy IPO 가치 (2019)",  val: "$8.8B",    note: "인수가 대비 2.6배 → 큰 수익",     accent: true  },
      { item: "PetSmart+Chewy 추정 MOIC", val: "~3×+",  note: "양사 합산 추정치",                 accent: true  },
    ],
    disclaimer: "PetSmart 딜 수익률은 비공개. Chewy 분리 상장 이후 PetSmart 자체 가치는 부채 부담으로 복잡. 수치는 시장 추정치.",
  },

  rationale: {
    buyer: {
      title: "BC Partners 투자 논리",
      initials: "BCP",
      bg: "bg-teal-700",
      points: [
        "반려동물 서비스(그루밍·훈련·클리닉)는 순수 온라인으로 대체 불가 — Amazon 방어선",
        "펫 휴머니제이션 트렌드 — 반려동물 지출은 경기 침체에도 감소하지 않는 필수 지출화",
        "디지털 전환 옵션: Chewy.com 등 온라인 플랫폼 인수로 오프라인+온라인 통합 가능성",
        "아마존 공포로 인한 저평가 — 투자자들이 소매를 기피할 때 진입",
        "반려동물 건강·의료 서비스 확장: 수의클리닉 내재화로 고마진 수익원 개발",
      ],
    },
    seller: {
      title: "PetSmart 이사회 수용 논리",
      initials: "PET",
      bg: "bg-purple-600",
      points: [
        "공시 전 종가 대비 39% 프리미엄($83/주) — 주주 즉각 가치 실현",
        "공개 시장의 아마존 공포로 주가가 구조적으로 저평가 → 비상장 전환이 합리적",
        "BC Partners의 유럽 소매 운영 경험(Sports Direct 등) 활용 기대",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2021년 (Chewy 부분 엑싯 기준)",
    body: "BC Partners의 PetSmart 딜은 Chewy.com 인수가 없었다면 평범한 소매 LBO로 끝났을 수도 있다. $3.35B에 인수한 Chewy가 2019년 IPO에서 $8.8B 가치를 인정받으며, 딜 전체를 성공으로 만들었다. PetSmart 본체는 높은 부채 부담으로 재무 구조가 취약하지만, Chewy 분리 상장으로 가치가 가시화됐다.",
    overallVerdict: "Chewy 덕분에 성공 — 오프라인 소매 자체보다 디지털 자산이 수익의 핵심",
    positives: [
      "Chewy.com 인수($3.35B) → IPO 가치 $8.8B — 2.6배 수익",
      "반려동물 서비스(그루밍·훈련) 매출 안정 유지 — Amazon 대체 불가 영역 방어 성공",
      "Petco 대비 Chewy 보유로 온라인 경쟁에서 구조적 우위 확보",
    ],
    risks: [
      "PetSmart 본체 부채 $6.7B — Chewy 분리 후 이자 부담이 현금흐름 압박",
      "2020년 PetSmart 채권 Distressed Exchange — 높은 레버리지의 후유증",
      "Chewy가 PetSmart로부터 독립 운영됨으로써 시너지 제한적",
    ],
    editorNote: "PetSmart 케이스의 교훈: 소매 LBO에서 '아마존 공포'로 저평가된 자산을 인수하고, 그 안에서 디지털 자산(Chewy)을 발굴·인수한 것이 핵심 alpha였다. 순수 오프라인 소매 사업의 EBITDA만으로는 LBO 부채를 감당하기 어렵다는 현실도 동시에 보여준다.",
  },

  tombstone: {
    acquirerInitials: "BCP",
    acquirerBg: "bg-teal-700",
    targetInitials: "PET",
    targetBg: "bg-purple-600",
    acquirerName: "BC Partners 컨소시엄",
    targetName: "PetSmart, Inc.",
    dealTitle: "BC Partners × PetSmart LBO",
    dealSize: "$87억",
    dealSizeUSD: "$8.7bn",
    evEbitda: "9.8×",
    closeDate: "2015년 3월",
  },

  sources: [
    { id: 1, text: "PetSmart Inc. (2014). Definitive Proxy Statement — Special Meeting of Stockholders. December 2014." },
    { id: 2, text: "Bloomberg (2015). PetSmart Buyout Completes as Largest U.S. Retail LBO. March 2015." },
    { id: 3, text: "Wall Street Journal (2017). PetSmart Buys Chewy.com for $3.35 Billion. April 2017." },
    { id: 4, text: "Chewy, Inc. (2019). Form S-1 — Initial Public Offering. NYSE: CHWY. June 2019." },
    { id: 5, text: "Reuters (2020). PetSmart Completes Debt Exchange as Leverage Weighs on Retailer. 2020." },
    { id: 6, text: "Forbes (2019). How PetSmart's $8.7 Billion Leveraged Buyout Led to the Biggest Retail IPO of 2019. July 2019." },
    { id: 7, text: "S&P Global Ratings (2015). PetSmart Inc. — New Issue Rating Report. March 2015." },
  ],

  seo: {
    title: "BC Partners × PetSmart LBO — Chewy 인수로 역대 최대 소매 LBO를 성공시킨 방법",
    description: "2015년 BC Partners의 PetSmart $87억 LBO 완전 해부. 역대 최대 소매 LBO, 아마존 공포 역이용, Chewy.com $3.35B 인수 → IPO $8.8B. 오프라인+온라인 통합 전략 분석.",
    keywords: [
      "BC Partners", "PetSmart", "Chewy", "LBO", "소매", "반려동물",
      "아마존", "디지털전환", "이커머스", "PE", "사모펀드", "역대최대소매LBO",
    ],
  },

  concepts: [
    {
      term: "Amazon Effect (아마존 이펙트)",
      href: "/deal-101/lbo-overview",
      description: "Amazon의 온라인 소매 공세로 오프라인 소매 기업들이 매출 감소·주가 하락을 겪는 현상. PE 관점에서는 아마존 공포로 저평가된 소매 자산이 인수 기회가 되기도 한다. PetSmart는 서비스 매출로 방어선을 구축했고, Chewy 인수로 역공을 선택했다.",
    },
    {
      term: "Asset-Based Lending (ABL)",
      href: "/deal-101/lbo-capital-structure",
      description: "재고자산·매출채권(AR)·부동산 임대권 등 유동 자산을 담보로 조달하는 기업 대출. 소매·물류 LBO에서 TLB와 병행 사용. 자산이 많을수록 더 낮은 금리로 더 많은 레버리지를 활용 가능.",
    },
    {
      term: "플랫폼 전략 (Platform Strategy)",
      href: "/deal-101/platform-strategy",
      description: "PE가 인수한 핵심 기업(플랫폼)에 유관 기업을 추가 인수·합병해 시너지를 창출하는 전략. PetSmart는 오프라인 플랫폼에 온라인 플랫폼(Chewy)을 추가해 반려동물 생태계를 완성하려 했다.",
    },
    {
      term: "Distressed Exchange (부채 교환)",
      href: "/market-101/levfin-distressed",
      description: "파산 직전 기업이 채권자와 협상해 기존 채권을 할인된 가격 또는 새로운 조건의 채권으로 교환하는 구조조정. PetSmart는 2020년 높은 레버리지 부담으로 일부 채권에 대해 Distressed Exchange를 실시했다.",
    },
    {
      term: "소매 LBO 특수성",
      href: "/deal-101/lbo-overview",
      description: "소매 기업 LBO는 ① 재고 변동성 ② 임대료(SG&A) 고정비 ③ 온라인 경쟁 위협이라는 3대 리스크를 안고 있다. 이를 상쇄하기 위해 서비스 수익(그루밍·클리닉 등 Amazon 대체 불가) 비율 확대가 핵심 전략.",
    },
  ],

  faq: [
    {
      q: "BC Partners가 아마존 위협이 가장 심할 때 최대 소매 LBO를 한 이유는?",
      a: "BC Partners의 핵심 판단은 PetSmart가 '순수 소매'가 아니라는 것이었습니다. 그루밍·훈련·수의 클리닉 같은 서비스는 Amazon이 제공할 수 없는 오프라인 차별화 영역입니다. 반려동물 먹이도 품질과 수의사 추천이 중요한 카테고리라 Amazon의 저가 경쟁이 상대적으로 제한적입니다. 또한 '아마존 공포'로 인한 주가 저평가가 오히려 매력적인 Entry Multiple을 만들어줬습니다.",
    },
    {
      q: "Chewy 인수가 PetSmart LBO에서 왜 결정적이었나요?",
      a: "Chewy 없이는 PetSmart가 단순히 '아마존에 밀리는 오프라인 소매'로 남았을 것입니다. Chewy 인수($3.35B)로 PetSmart는 온라인 반려동물 1위 플랫폼을 내부화했고, 2019년 Chewy IPO 시 가치가 $8.8B으로 평가됐습니다. 이 한 건의 인수로 전체 LBO 수익의 상당 부분이 만들어졌습니다.",
    },
    {
      q: "PetSmart 본체의 재무 구조는 왜 어려워졌나요?",
      a: "LBO 시 부채 $6.7B을 졌는데, 오프라인 소매 경쟁이 예상보다 빠르게 심화됐고 매장 리뉴얼·Chewy 인수 비용까지 겹쳤습니다. 2020년 코로나19로 오프라인 매장이 일시 폐쇄되자 유동성 부담이 가중됐고, 일부 채권에 대해 Distressed Exchange를 실시했습니다. Chewy가 분리 IPO를 하면서 PetSmart 입장에서는 핵심 자산이 독립 회사가 됐고, 본체의 신용도는 약화됐습니다.",
    },
    {
      q: "PetSmart와 Petco를 비교하면 LBO 관점에서 어떤 차이가 있나요?",
      a: "두 회사는 비슷한 시기 PE 소유 하에 있었지만 전략이 달랐습니다. PetSmart는 Chewy 인수로 온라인 공격에 나섰고, Petco는 자체 온라인 강화 + 수의 클리닉 확장으로 대응했습니다. Petco는 2020년 재상장(NASDAQ: WOOF)에 성공했고, 반려동물 건강서비스(Vetco) 강화로 차별화를 추구했습니다. PetSmart는 Chewy라는 대형 온라인 자산을 보유하지만 본체 레버리지 부담이 더 무겁습니다.",
    },
  ],

  levfinOverview: {
    angle: "소매 LBO의 역설 — 아마존 공포로 저평가된 자산 + 온라인 자산(Chewy) 인수로 반격",
    body: "PetSmart LBO는 '소매 LBO는 Amazon에 질 수밖에 없다'는 시장의 공포를 역이용한 딜이다. TLB ~$40억 + HY채권 ~$27억 + ABL의 전형적 소매 LBO 구조에, Chewy 인수라는 오프사이드 플레이를 더했다. 소매 LBO에서 순수 오프라인 EBITDA만으로는 부채를 감당하기 어렵다는 현실을 직시하고, 디지털 자산으로 가치를 만들어낸 사례다.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "~$4.0B",
        rate: "LIBOR+300bps (변동)",
        maturity: "7년",
        seniority: "senior-secured",
        pct: 46,
        color: "bg-teal-500",
      },
      {
        name: "ABL 리볼빙 시설",
        amountDisplay: "$1.0B",
        rate: "LIBOR+150bps",
        maturity: "5년",
        seniority: "senior-secured",
        pct: 11,
        color: "bg-teal-400",
      },
      {
        name: "HY Senior Notes",
        amountDisplay: "~$2.7B",
        rate: "~8.875% (고정)",
        maturity: "8년",
        seniority: "senior-unsecured",
        pct: 31,
        color: "bg-orange-500",
      },
      {
        name: "에쿼티 (BC Partners 컨소시엄)",
        amountDisplay: "~$2.0B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 23,
        color: "bg-purple-500",
      },
    ],
    metrics: [
      { label: "Entry EV/EBITDA",     value: "~9.8×",   sub: "역대 최대 소매 LBO",               isAlert: false },
      { label: "Chewy 인수 수익",     value: "2.6×",    sub: "$3.35B → IPO $8.8B",               isAlert: false },
      { label: "MOIC (추정)",         value: "~3×+",    sub: "PetSmart+Chewy 합산",              isAlert: false },
      { label: "PetSmart 부채",       value: "$6.7B",   sub: "Chewy 분리 후 본체 레버리지 부담", isAlert: true  },
    ],
    lessons: [
      {
        icon: "🐾",
        title: "아마존 공포 = PE 기회 — 저평가를 역이용하라",
        body: "시장 전체가 '소매는 Amazon에 진다'는 공포에 빠져 있을 때, BC Partners는 Amazon이 진입하기 어려운 서비스(그루밍·수의·훈련)를 보유한 PetSmart를 저평가로 인수했다. 섹터 공포로 인한 저평가가 LBO Entry Multiple을 낮추고, 반등 시 수익을 극대화하는 구조를 만든다.",
      },
      {
        icon: "🛒",
        title: "플랫폼 전략 — 오프라인 LBO + 온라인 자산 인수의 결합",
        body: "Chewy 인수는 PetSmart 내부에서는 '온라인 경쟁자 인수'가 아니라 '온라인 플랫폼 내재화'였다. 소매 LBO에서 순수 오프라인 EBITDA만으로는 부채를 감당하기 어려울 수 있다. 디지털 자산을 추가 인수해 가치 창출을 다각화하는 것이 현대 소매 LBO의 생존 전략이다.",
      },
      {
        icon: "⚠️",
        title: "소매 LBO 레버리지 한계 — 부채는 디지털 전환 비용을 감당 못한다",
        body: "PetSmart 본체는 Chewy 인수 비용($3.35B)과 기존 LBO 부채($6.7B)를 동시에 부담하면서 재무 구조가 취약해졌다. 온라인 전환 투자는 단기 EBITDA를 줄이는데, 레버리지드 구조에서 이 비용을 감당하기 어렵다. '높은 레버리지 + 대규모 디지털 투자'의 조합은 위험하다.",
      },
    ],
    relatedChapters: [
      {
        slug: "lbo-overview",
        chapterNum: "Ch.0",
        title: "LBO의 본질",
        whyRelevant: "아마존 공포 속 반려동물 서비스 차별화 — 이상적인 LBO 타겟의 7가지 기준 중 '방어적 해자'",
      },
      {
        slug: "lbo-capital-structure",
        chapterNum: "Ch.1",
        title: "LBO 자본구조 해부",
        whyRelevant: "소매 LBO 특유의 TLB+ABL 혼합 구조 — 재고자산 담보 대출의 역할",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "부실 대출 & 구조조정",
        whyRelevant: "2020년 PetSmart Distressed Exchange — 소매 고레버리지 LBO의 스트레스 시나리오",
      },
    ],
  },
};

export default deal;
