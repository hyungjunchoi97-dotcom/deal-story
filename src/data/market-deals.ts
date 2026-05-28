import type { Reference } from "@/data/market-concepts";
export type { Reference };

export type DealSection = {
  heading: string;
  headingEn: string;
  body: string;
  bodyEn: string;
};

export type DealKeyTerm = {
  term: string;
  termEn: string;
  definition: string;
  definitionEn: string;
};

export type DealSnapshotRow = {
  labelKo: string;
  labelEn: string;
  value: string;
  /** 영문 페이지에서 사용할 값. 미지정 시 value 사용 (숫자·고유명사 등 언어 독립 값) */
  valueEn?: string;
};

export type MarketDealFaq = {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
};

export type MarketDealAssessment = {
  positives: string[];
  positivesEn: string[];
  risks: string[];
  risksEn: string[];
};

export type DealCategory =
  | "creator"
  | "sovereign"
  | "fig"
  | "structure"
  | "corporate"
  | "crisis";

export type MarketDeal = {
  slug: string;
  title: string;
  titleEn: string;
  category: DealCategory;
  categoryLabel: string;
  categoryLabelEn: string;
  excerpt: string;
  excerptEn: string;
  dealYear: number;
  issuer: string;
  issuerEn: string;
  readingMinutes: number;
  tags: string[];
  tagsEn?: string[];
  published: boolean;
  snapshot: DealSnapshotRow[];
  sections: DealSection[];
  keyTerms: DealKeyTerm[];
  relatedMarket101Slugs: string[];
  relatedDealSlugs?: string[];
  executiveSummary?: { ko: string[]; en: string[] };
  assessment?: MarketDealAssessment;
  faq?: MarketDealFaq[];
  references?: Reference[];
};

export const DEAL_CATEGORY_META: Record<
  DealCategory,
  { label: string; labelEn: string; bg: string; fg: string; dot: string; letter: string }
> = {
  creator:   { label: "시장 창조",    labelEn: "Market Creators",    bg: "bg-emerald-50 dark:bg-emerald-900/20", fg: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500", letter: "A" },
  sovereign: { label: "Sovereign",    labelEn: "Sovereign",           bg: "bg-blue-50 dark:bg-blue-900/20",     fg: "text-blue-700 dark:text-blue-300",     dot: "bg-blue-500",     letter: "B" },
  fig:       { label: "FIG 드라마",   labelEn: "FIG Drama",           bg: "bg-rose-50 dark:bg-rose-900/20",     fg: "text-rose-700 dark:text-rose-300",     dot: "bg-rose-500",     letter: "C" },
  structure: { label: "구조·통화",    labelEn: "Structure & Currency",bg: "bg-violet-50 dark:bg-violet-900/20", fg: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500",   letter: "D" },
  corporate: { label: "SOE·기업",     labelEn: "SOE & Corporate",     bg: "bg-orange-50 dark:bg-orange-900/20", fg: "text-orange-700 dark:text-orange-300", dot: "bg-orange-500",   letter: "E" },
  crisis:    { label: "위기·디폴트",  labelEn: "Crisis & Default",    bg: "bg-gray-100 dark:bg-gray-800/60",    fg: "text-gray-600 dark:text-gray-400",     dot: "bg-gray-500",     letter: "F" },
};

// ── Deal Data ─────────────────────────────────────────────────────────────────
export const ALL_MARKET_DEALS: MarketDeal[] = [

  // ── A: 시장 창조 ─────────────────────────────────────────────────────────────
  {
    slug: "world-bank-green-bond",
    title: "세계은행 최초 그린본드 (2008)",
    titleEn: "World Bank's First Green Bond (2008)",
    category: "creator",
    categoryLabel: "시장 창조",
    categoryLabelEn: "Market Creators",
    excerpt: "지금 수조 달러 ESG 채권시장 전체의 기원. 스웨덴 연기금의 질문 하나가 새로운 자산군을 창조했다.",
    excerptEn: "The origin of today's multi-trillion dollar ESG bond market. A question from a Swedish pension fund created an entirely new asset class.",
    dealYear: 2008,
    issuer: "세계은행 (IBRD)",
    issuerEn: "World Bank (IBRD)",
    readingMinutes: 12,
    tags: ["그린본드", "ESG", "SSA", "use-of-proceeds", "세계은행"],
    tagsEn: ["Green Bond", "ESG", "SSA", "Use-of-Proceeds", "World Bank"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "World Bank (IBRD)" },
      { labelKo: "발행연도", labelEn: "Year", value: "2008" },
      { labelKo: "발행규모", labelEn: "Size", value: "SEK 2.3B (~$440M)" },
      { labelKo: "만기", labelEn: "Maturity", value: "6년", valueEn: "6 years" },
      { labelKo: "주관사", labelEn: "Lead Manager", value: "SEB" },
      { labelKo: "등급", labelEn: "Rating", value: "AAA/Aaa" },
      { labelKo: "의의", labelEn: "Significance", value: "세계 최초 그린본드", valueEn: "World's first green bond" },
    ],
    sections: [
      {
        heading: "스웨덴 연기금의 질문 — 시장의 탄생",
        headingEn: "A Swedish Pension Fund's Question — The Birth of a Market",
        body:
`2007년 스웨덴의 두 연기금 — AP2와 AP3 — 이 세계은행(IBRD) 채권 담당 팀에 이례적인 제안을 가져왔다. "세계은행에 투자하고 싶다. 그런데 우리가 투자한 자금이 구체적으로 어떤 기후 관련 사업에 쓰이는지 알고 싶다."

당시 채권시장에는 이런 '사용처 지정 채권'이 존재하지 않았다. AAA 등급의 세계은행 채권은 세계은행의 모든 사업에 풀링되어 사용됐다. 투자자가 특정 사업에 연결된 채권을 원한다면, 그 채권을 새로 설계해야 했다.

세계은행은 스웨덴 은행 SEB와 함께 해결책을 설계했다. 핵심 아이디어: 채권 발행으로 조달한 자금은 사전에 정의된 기후 관련 프로젝트 풀에만 사용하고, 이를 외부 기관이 감사·확인한다. 쿠폰과 만기는 일반 채권과 동일하지만, 자금 사용처가 '그린'으로 명확히 지정된다.

2008년 11월, 세계은행은 SEB를 주관사로 스웨덴 크로나(SEK) 23억 규모의 그린본드를 발행했다. 수익자는 AP2, AP3, 그리고 그 밖의 기관 투자자들이었다. 세계 최초의 그린본드였다.`,
        bodyEn:
`In 2007, two Swedish pension funds — AP2 and AP3 — brought an unusual request to the World Bank's bond team: "We want to invest in the World Bank. But we want to know specifically which climate-related projects our money goes to."

At the time, no such 'use-of-proceeds' bond existed in capital markets. AAA-rated World Bank bonds pooled proceeds into the institution's general operations. If investors wanted bonds linked to specific projects, those bonds had to be designed from scratch.

The World Bank, together with Swedish bank SEB, designed the solution. The core idea: proceeds from the bond would be allocated exclusively to a pre-defined pool of climate-related projects, verified by an external auditor. Coupon and maturity were identical to conventional bonds — but the use of proceeds was explicitly designated as 'green.'

In November 2008, the World Bank issued SEK 2.3 billion in green bonds, with SEB as lead manager. Buyers included AP2, AP3, and other institutional investors. It was the world's first green bond.`,
      },
      {
        heading: "그린본드의 구조 — Use-of-Proceeds란 무엇인가",
        headingEn: "Green Bond Structure — What Is Use-of-Proceeds?",
        body:
`그린본드의 핵심 구조는 '사용처 지정(use-of-proceeds)'이다. 일반 채권 발행사는 조달 자금을 어떤 목적에든 사용할 수 있다. 그린본드는 다르다. 발행사는 ① 사전에 적격 프로젝트 범주를 정의하고, ② 조달 자금을 해당 프로젝트에만 배정하고, ③ 독립적 외부 검토(Second Party Opinion)를 거쳐 사후 보고를 해야 한다.

세계은행의 2008년 그린본드 프레임워크는 세 단계를 갖췄다.

첫째, 사전 선정: 세계은행 내부의 '기후 전문가 패널'이 기후 완화·적응 관련 프로젝트를 심사해 적격 여부를 결정한다.

둘째, 자금 추적: 그린본드 조달 자금은 일반 계정과 분리 추적된다. '그린본드 풀'이라는 별도 계정에 등록된 프로젝트에만 배정된다.

셋째, 보고: 매년 조달 자금이 어떤 프로젝트에 배정됐는지, 해당 프로젝트의 환경적 성과(CO₂ 감축량 등)를 투자자에게 보고한다.

이 세 단계 구조는 이후 2014년 국제자본시장협회(ICMA) 그린본드원칙(GBP)의 기반이 됐다. 세계은행 2008년 발행이 오늘날 시장 표준의 '원형'이다.`,
        bodyEn:
`The core structure of a green bond is 'use-of-proceeds.' In a conventional bond, the issuer may use proceeds for any purpose. Green bonds differ: the issuer must ① pre-define eligible project categories, ② allocate proceeds exclusively to those projects, and ③ commission independent external review (a Second Party Opinion) and deliver ongoing post-issuance reporting.

The World Bank's 2008 green bond framework embodied three stages.

First, pre-selection: an internal 'climate expert panel' at the World Bank reviews and determines eligibility of climate mitigation and adaptation projects.

Second, fund tracking: green bond proceeds are tracked separately from general accounts, allocated only to projects registered in a dedicated 'green bond pool' account.

Third, reporting: annually, the World Bank reports to investors which projects received allocations and the environmental outcomes of those projects (CO₂ reductions, etc.).

This three-stage structure became the template for the International Capital Markets Association (ICMA) Green Bond Principles (GBP) established in 2014. The World Bank's 2008 issuance is the 'prototype' of today's market standard.`,
      },
      {
        heading: "수조 달러로 성장 — 그린본드 시장의 진화",
        headingEn: "From Millions to Trillions — The Evolution of the Green Bond Market",
        body:
`2008년 SEK 23억(약 4.4억 달러)으로 출발한 그린본드 시장은 15년 만에 수조 달러 규모로 성장했다.

2013년까지: 주로 세계은행·유럽투자은행(EIB) 등 SSA 발행체들이 초기 시장을 형성했다. 연간 발행액은 수십억 달러 수준.

2013~2015년: 회사채 그린본드 시장이 열렸다. 프랑스 EDF(2013), 네덜란드 ING 등이 기업 발행을 시작했다.

2016~2018년: 국가(Sovereign) 그린본드 등장. 폴란드(2016년 세계 최초 소버린 그린본드), 프랑스(2017년 €7B), 인도·나이지리아·인도네시아 등으로 확산.

2020년대: 연간 신규 발행 $500B+ 수준. 블룸버그 추산 2023년 말 기준 누적 발행 $5T+(그린+소셜+서스테이너빌리티 포함). EU의 NGEU 프로그램이 단일 최대 그린본드 발행체로 등장.

그러나 비판도 있다. 'Greenwashing(그린워싱)' — 조달 자금이 실제로 녹색 전환에 기여하지 않으면서 그린본드 라벨만 붙이는 관행. EU는 이를 막기 위해 2023년 'EU 그린본드 표준(EUGBS)'을 도입했다.`,
        bodyEn:
`The green bond market that started at SEK 2.3 billion (approximately $440 million) in 2008 grew to trillions of dollars in 15 years.

Through 2013: SSA (Supranational/Sovereign/Agency) issuers such as the World Bank and EIB formed the initial market. Annual issuance in the tens of billions.

2013–2015: The corporate green bond market opened. France's EDF (2013) and Dutch ING, among others, launched corporate issuance.

2016–2018: Sovereign green bonds emerged. Poland (2016, world's first sovereign green bond), France (2017, €7B), then India, Nigeria, and Indonesia followed.

2020s: Annual new issuance surpassing $500B. Bloomberg estimates cumulative $5T+ by end-2023 (including green, social, and sustainability bonds). EU's NGEU program emerged as the single largest green bond issuer.

However, criticism exists: 'Greenwashing' — attaching a green bond label while proceeds do not meaningfully contribute to green transition — became a concern. The EU introduced the EU Green Bond Standard (EUGBS) in 2023 to address this.`,
      },
      {
        heading: "SSA 발행 구조 — 세계은행은 왜 최초 발행사로 적합했나",
        headingEn: "SSA Issuance — Why the World Bank Was the Right First Issuer",
        body:
`세계은행이 최초 그린본드 발행사로 적합했던 이유는 세 가지다.

첫째, AAA 신용등급: 투자자들이 신용 리스크 없이 그린 개념에 집중할 수 있었다. 새로운 상품 구조의 리스크와 발행사 신용 리스크를 동시에 감수하지 않아도 됐다.

둘째, 개발금융 사명: 세계은행은 이미 기후 관련 프로젝트(태양광·풍력 발전, 에너지 효율 사업 등)를 대규모로 집행하고 있었다. 그린본드를 위한 별도 사업 포트폴리오를 구축할 필요가 없었다.

셋째, 글로벌 투자자 기반: 세계은행은 세계 주요 기관투자자들이 이미 보유한 발행체였다. 새로운 투자자 발굴 부담이 적었다.

SSA(Supranational/Sovereign/Agency) 시장은 세계은행, EIB, IDB, ADB 등 초국가 기관과 각국 정부기관이 참여하는 채권시장의 한 축이다. 이들은 국제기구의 특수한 법적 지위와 다수 국가의 공동 출자·보증 구조 덕분에 최고 신용등급을 유지한다.

세계은행의 그린본드 발행은 SSA 시장의 혁신 역할을 다시 한번 확인했다 — 새로운 상품 구조를 최고 신용의 발행체가 먼저 검증함으로써 시장 전체의 채택을 이끌어내는 역할.`,
        bodyEn:
`Three factors made the World Bank the right first green bond issuer.

First, AAA credit rating: investors could focus on the green concept without bearing credit risk. They didn't have to simultaneously absorb novel product structure risk AND issuer credit risk.

Second, development finance mandate: the World Bank was already deploying capital at scale into climate-related projects (solar/wind power, energy efficiency). No separate project portfolio needed to be built.

Third, global investor base: the World Bank was already held by the world's major institutional investors. Limited need to identify new buyers for the new product.

The SSA (Supranational/Sovereign/Agency) market is a segment of fixed income comprising supranational institutions like the World Bank, EIB, IDB, and ADB alongside national government agencies. They maintain top credit ratings through their special legal status and the shared capital and guarantees of multiple member nations.

The World Bank's green bond issuance reconfirmed SSA's role in market innovation — validating new product structures through highest-rated issuers, thereby enabling broader market adoption.`,
      },
      {
        heading: "그린본드의 한계와 미래 — 라벨이 전부가 아니다",
        headingEn: "Limits of Green Bonds — The Label Is Not Everything",
        body:
`그린본드 시장이 폭발적으로 성장하면서 한계도 함께 드러났다.

그린워싱: 석유·가스 회사가 재생에너지 일부에 그린본드 라벨을 붙이는 사례, 원자력 분류 논쟁, '추가성(additionality)' 부재 — 그린본드 없이도 진행됐을 프로젝트에 자금을 배정하는 경우 등이 문제가 됐다.

'Greenium(그린 프리미엄)': 그린본드는 동일 발행사 일반채 대비 소폭 낮은 금리(수익률)로 발행되는 경향이 있다 — 통상 5~15bp. ESG 투자 수요가 그린본드에 집중되기 때문이다. 동일 발행사, 동일 만기, 동일 신용등급임에도 수익률이 다르다는 것은 '라벨'에 프리미엄이 붙는다는 것으로, 비효율의 증거이기도 하다.

미래 방향: EU는 2023년 EUGBS를 도입해 더 엄격한 기준을 적용한다. 전환금융(Transition Finance) 개념도 부상 — 화석연료 의존 산업이 탄소 감축 경로를 걷는 과정을 지원하는 채권.

세계은행 2008년 발행의 교훈: 수요가 명확하고 신뢰할 수 있는 검증 체계가 있으면 새로운 자산군은 탄생할 수 있다. 그러나 시장이 커질수록 표준화와 감시의 중요성도 커진다.`,
        bodyEn:
`As the green bond market grew explosively, its limitations became apparent.

Greenwashing: oil and gas companies labeling partial renewable energy projects as green bonds; nuclear classification debates; lack of 'additionality' — allocating proceeds to projects that would have proceeded regardless. These became serious concerns.

Greenium (Green Premium): Green bonds tend to price at slightly lower yields than conventional bonds from the same issuer — typically 5–15bp. ESG investment demand concentrated on green bonds creates this pricing premium. Identical issuer, identical maturity, identical credit rating with different yields means a premium attached to the 'label' — a sign of market inefficiency.

Future direction: The EU introduced EUGBS in 2023 with stricter standards. The concept of Transition Finance is also emerging — bonds supporting carbon-dependent industries on decarbonization pathways.

The lesson of World Bank 2008: with clear demand and a credible verification framework, a new asset class can be born. But as markets grow, so does the importance of standardization and oversight.`,
      },
    ],
    keyTerms: [
      {
        term: "Use-of-Proceeds (자금 사용처 지정)",
        termEn: "Use-of-Proceeds",
        definition: "그린본드의 핵심 구조. 발행사가 채권 조달 자금을 사전에 정의된 적격 프로젝트에만 사용하도록 계약상 지정하고, 독립 외부 검토와 사후 보고를 수행하는 구조. 2008년 세계은행 그린본드가 처음 채택했으며, 이후 ICMA 그린본드원칙의 핵심 요소가 됐다.",
        definitionEn: "The core structure of green bonds. The issuer contractually designates bond proceeds for use exclusively in pre-defined eligible projects, with independent external review and post-issuance reporting. First adopted in the World Bank's 2008 green bond; subsequently became a core element of the ICMA Green Bond Principles.",
      },
      {
        term: "그린워싱 (Greenwashing)",
        termEn: "Greenwashing",
        definition: "실제로는 환경적 효과가 없거나 미미한 활동·상품에 녹색 라벨을 붙이는 행위. 그린본드 맥락에서는 ① 적격성이 낮은 프로젝트를 그린으로 분류, ② 추가성(additionality)이 없는 프로젝트에 자금 배정, ③ 과장된 환경 성과 보고 등을 포함한다. EU는 EUGBS(2023)로 이를 규제하고 있다.",
        definitionEn: "Attaching a green label to activities or products with no or minimal environmental impact. In green bonds: ① classifying low-eligibility projects as green, ② allocating proceeds to projects without additionality, ③ overstating environmental outcomes. The EU regulates this through EUGBS (2023).",
      },
      {
        term: "SSA (초국가·주권·정부기관)",
        termEn: "SSA (Supranational/Sovereign/Agency)",
        definition: "채권시장에서 세계은행·EIB·ADB 등 초국가 기관(Supranational), 각국 정부(Sovereign), 국책은행·공공기관(Agency)을 통칭. 높은 신용등급(주로 AAA/AA)을 유지하며 채권시장의 '안전 자산' 섹터를 구성한다. 그린본드 시장의 초기 발전을 이끈 핵심 발행 주체다.",
        definitionEn: "In bond markets, the collective term for supranational institutions (World Bank, EIB, ADB, etc.), sovereign governments, and national development banks and agencies. They maintain high credit ratings (mostly AAA/AA) and form the 'safe asset' sector of bond markets. They were the key issuers driving early development of the green bond market.",
      },
      {
        term: "Greenium (그린 프리미엄)",
        termEn: "Greenium (Green Premium)",
        definition: "그린본드가 동일 발행사의 일반 채권 대비 낮은 금리(수익률)로 발행·거래되는 현상. 통상 5~15bp 수준. ESG 투자 수요가 그린본드에 집중되면서 발생하는 가격 프리미엄. 발행사에게는 조달 비용 절감이지만, 동일 현금 흐름에 라벨 프리미엄이 붙는다는 점에서 비효율 논란이 있다.",
        definitionEn: "The phenomenon where green bonds price at lower yields than conventional bonds from the same issuer — typically 5–15bp. Generated by ESG investment demand concentrated on green bonds. For issuers, it represents lower financing costs; however, identical cash flows with a label premium creates a price inefficiency debate.",
      },
    ],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    relatedDealSlugs: ["eu-ngeu-bonds", "bowie-bonds"],
    executiveSummary: {
      ko: [
        "2007년 스웨덴 연기금 AP2/AP3의 '기후 투자 연계 채권' 요청 → 세계은행+SEB 설계 → 2008년 세계 최초 그린본드 SEK 23억 발행",
        "핵심 혁신: Use-of-Proceeds 구조 — 조달 자금을 사전 정의된 기후 프로젝트에만 배정, 외부 검증·사후 보고 의무",
        "2008년 $4.4억 → 2023년 누적 $5T+로 성장 — 소버린·기업·금융기관으로 발행 주체 다양화",
        "ICMA 그린본드원칙(2014)의 원형 — 세계은행 프레임워크가 표준 시장 구조의 기반",
        "한계: 그린워싱, 추가성 부재, Greenium 비효율 — EU EUGBS(2023)로 표준화 진행 중",
      ],
      en: [
        "2007: Swedish pension funds AP2/AP3 requested 'climate-linked bonds' → World Bank + SEB designed the structure → 2008: world's first green bond, SEK 2.3B",
        "Core innovation: Use-of-Proceeds structure — proceeds allocated only to pre-defined climate projects, with external verification and post-issuance reporting",
        "Growth from $440M (2008) to $5T+ cumulative (2023) — issuer base diversified to sovereigns, corporates, financial institutions",
        "Prototype for ICMA Green Bond Principles (2014) — World Bank framework became the foundation for market standards",
        "Limitations: greenwashing, lack of additionality, Greenium inefficiency — EU EUGBS (2023) advancing standardization",
      ],
    },
    assessment: {
      positives: [
        "수조 달러 ESG 채권시장 창조 — 연간 $500B+ 신규 발행의 기반이 된 역사적 혁신",
        "Use-of-Proceeds 구조의 표준화 — ICMA GBP 채택으로 시장 신뢰성과 투명성 확보",
        "기후 자금조달 채널 다양화 — 정부 예산 외에 자본시장을 통한 기후 프로젝트 자금조달 경로 창출",
        "AAA 발행사를 통한 시장 검증 — 최고 신용등급 발행체가 먼저 채택함으로써 빠른 시장 확산 가능",
      ],
      positivesEn: [
        "Created the multi-trillion dollar ESG bond market — historical innovation underlying $500B+ annual new issuance",
        "Standardization of Use-of-Proceeds structure — ICMA GBP adoption secured market credibility and transparency",
        "Diversified climate financing channels — created capital market pathways for climate project financing beyond government budgets",
        "Market validation through AAA issuers — rapid market adoption enabled by highest-rated issuers adopting first",
      ],
      risks: [
        "그린워싱 리스크 — 검증 표준 부재 시 라벨 남용, 투자자 오도 가능성",
        "추가성 부재 — 그린본드 자금 없이도 진행됐을 프로젝트에 배정 시 실질적 기후 기여 의문",
        "Greenium 비효율 — 동일 현금 흐름에 라벨 프리미엄이 붙는 가격 왜곡",
        "측정·보고 불일치 — 발행사마다 다른 환경 성과 측정 방법론으로 비교 가능성 저하",
      ],
      risksEn: [
        "Greenwashing risk — label abuse and investor misleading possible without verification standards",
        "Lack of additionality — questionable climate contribution when proceeds fund projects proceeding regardless",
        "Greenium inefficiency — label premium on identical cash flows creates price distortion",
        "Measurement inconsistency — different environmental outcome methodologies reduce comparability across issuers",
      ],
    },
    faq: [
      {
        q: "그린본드를 사면 투자자는 어떤 혜택을 받나요?",
        qEn: "What benefits do investors get from buying green bonds?",
        a: "재무적 혜택은 일반 채권과 동일합니다 — 쿠폰과 원금 상환. 그린본드만의 추가 혜택은 두 가지입니다. 첫째, ESG 포트폴리오 편입 — SRI 또는 ESG 정책을 가진 기관투자자는 그린본드를 통해 투자 가능 유니버스를 확장할 수 있습니다. 둘째, 환경 임팩트 보고 — 자신의 투자금이 실제로 어떤 기후 프로젝트에 사용됐는지, 얼마나 CO₂를 줄였는지 보고받습니다. 단, Greenium(그린 프리미엄) 때문에 동일 발행사 일반채 대비 소폭 낮은 수익률을 받는 재무적 비용이 있습니다.",
        aEn: "Financial benefits are identical to conventional bonds — coupon and principal repayment. Green bonds add two specific benefits: First, ESG portfolio eligibility — institutional investors with SRI or ESG policies can expand their investable universe. Second, environmental impact reporting — reports on which climate projects their capital funded and CO₂ reductions achieved. However, Greenium means slightly lower yields versus conventional bonds from the same issuer — a financial cost.",
      },
      {
        q: "그린본드 발행이 일반 채권 발행과 다른 점은 무엇인가요?",
        qEn: "How does green bond issuance differ from conventional bond issuance?",
        a: "세 가지 추가 절차가 있습니다. 첫째, 그린본드 프레임워크 수립: 적격 프로젝트 범주, 선정 기준, 자금 관리 방법, 보고 정책을 문서화합니다. 둘째, 외부 검토(SPO): Sustainalytics 등 독립 ESG 평가기관이 프레임워크의 그린본드원칙 부합 여부를 평가합니다. 셋째, 사후 보고: 매년 자금 배정 현황과 환경 성과를 보고합니다. 이 추가 비용이 있지만, Greenium을 통한 조달 비용 절감(5~15bp)이 이를 상쇄하는 경우가 많습니다.",
        aEn: "Three additional procedures: First, Green Bond Framework — document covering eligible categories, selection criteria, fund management, and reporting. Second, external review (SPO): independent ESG assessors evaluate alignment with Green Bond Principles. Third, post-issuance reporting: annual reports on allocation and environmental outcomes. These add cost, but Greenium savings (5–15bp) often offset them.",
      },
      {
        q: "그린본드 시장에서 가장 큰 발행체는 누구인가요?",
        qEn: "Who are the largest green bond issuers?",
        a: "2020년 이후 EU가 NGEU 프로그램을 통해 단일 발행체로는 세계 최대 규모의 그린본드를 발행하고 있습니다. EIB는 2007년부터 선구자적 역할을 해왔습니다. 기업 발행체로는 애플, SNCF, 에넬 등이 주요 발행사입니다. 국가 발행체로는 프랑스가 €50B+ 규모의 최대 소버린 그린본드 프로그램을 유지하고 있습니다. 세계은행(IBRD)은 시장을 만든 창시자로서 여전히 중요한 발행체입니다.",
        aEn: "Since 2020, the EU through NGEU has been the world's largest single green bond issuer. The EIB has been a pioneer since 2007. Major corporate issuers include Apple, SNCF, and Enel. Among sovereigns, France maintains the largest sovereign program at €50B+. The World Bank remains a significant presence as the market's founding issuer.",
      },
      {
        q: "그린본드와 소셜본드, 지속가능채권은 어떻게 다른가요?",
        qEn: "How do green bonds, social bonds, and sustainability bonds differ?",
        a: "Use-of-Proceeds 채권 가족의 세 가지 변형입니다. 그린본드: 환경 프로젝트(기후 완화, 재생에너지, 녹색 건물 등)에만 배정. 소셜본드: 사회적 프로젝트(저렴한 주택, 의료, 교육 등)에만 배정. 지속가능본드: 그린+소셜 혼합 배정. 이와 별도로 SLB(지속가능연계채권)가 있는데, KPI 달성에 따라 쿠폰이 달라지는 성과 연계 채권으로 Use-of-Proceeds 구조가 아닙니다. ICMA가 각각에 대한 원칙을 발행하고 있습니다.",
        aEn: "Three variants of the use-of-proceeds bond family. Green Bond: allocated to environmental projects. Social Bond: allocated to social projects (affordable housing, healthcare, education). Sustainability Bond: mixed green and social allocation. Separately, SLBs (Sustainability-Linked Bonds) are not use-of-proceeds instruments but performance-linked bonds where coupons vary with KPI achievement. ICMA publishes separate principles for each.",
      },
      {
        q: "세계은행이 없었다면 그린본드 시장이 생기지 않았을까요?",
        qEn: "Would the green bond market have emerged without the World Bank?",
        a: "아마 결국 생겨났을 것입니다 — 다만 더 늦게, 다른 형태로. 2007~2008년은 기후 의식이 높아지고 기관투자자들이 ESG 수요를 표현하기 시작한 시기였습니다. 세계은행의 기여는 두 가지입니다. 첫째, AAA 발행사가 처음 채택함으로써 신용 리스크 없이 상품 구조를 검증했습니다. 둘째, SEB와 공동으로 Use-of-Proceeds 프레임워크를 설계해 이후 모든 그린본드의 표준이 됐습니다. 실제로 EIB가 2007년 '기후 인식 채권'을 먼저 발행했지만, '그린본드'라는 이름과 구조를 갖춘 것은 세계은행 2008년 발행이었습니다.",
        aEn: "It would likely have emerged eventually — just later and in a different form. 2007–2008 saw rising climate awareness and institutional investors beginning to express ESG demand. The World Bank's contribution: first, an AAA issuer's adoption validated the product structure without credit risk; second, the Use-of-Proceeds framework co-designed with SEB became the template for all subsequent green bonds. Notably, the EIB had issued 'Climate Awareness Bonds' in 2007 before the World Bank, but the formal 'green bond' name and structure was established with the World Bank's 2008 issuance.",
      },
    ],
    references: [
      {
        id: 1,
        author: "World Bank Group",
        title: "Green Bond Impact Report",
        source: "World Bank Treasury, 2023",
        year: "2023",
        url: "https://treasury.worldbank.org/en/about/unit/treasury/ibrd/ibrd-green-bond",
      },
      {
        id: 2,
        author: "ICMA",
        title: "Green Bond Principles 2021",
        source: "International Capital Market Association",
        year: "2021",
        url: "https://www.icmagroup.org/sustainable-finance/the-principles-guidelines-and-handbooks/green-bond-principles-gbp/",
      },
      {
        id: 3,
        author: "Climate Bonds Initiative",
        title: "Sustainable Debt: Global State of the Market 2023",
        source: "Climate Bonds Initiative",
        year: "2024",
        url: "https://www.climatebonds.net/resources/reports/sustainable-debt-global-state-market-2023",
      },
      {
        id: 4,
        author: "European Commission",
        title: "EU Green Bond Standard Regulation",
        source: "Official Journal of the European Union",
        year: "2023",
        url: "https://finance.ec.europa.eu/sustainable-finance/tools-and-standards/eu-green-bond-standard_en",
      },
    ],
  },

  {
    slug: "bowie-bonds",
    title: "보위 본드 (1997) — 미래 로열티를 증권화하다",
    titleEn: "Bowie Bonds (1997) — Securitizing Future Royalties",
    category: "creator",
    categoryLabel: "시장 창조",
    categoryLabelEn: "Market Creators",
    excerpt: "데이비드 보위가 미래 음악 로열티 수익을 채권으로 팔았다. 구조화금융의 창의성과 한계를 동시에 가르치는 전설적 딜.",
    excerptEn: "David Bowie sold future music royalty streams as a bond. A legendary deal that teaches both the creativity and limits of structured finance.",
    dealYear: 1997,
    issuer: "Ziggy Stardust Enterprises",
    issuerEn: "Ziggy Stardust Enterprises",
    readingMinutes: 10,
    tags: ["ABS", "증권화", "로열티", "구조화금융", "Bowie"],
    tagsEn: ["ABS", "Securitization", "Royalty", "Structured Finance", "Bowie"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Ziggy Stardust Enterprises" },
      { labelKo: "발행연도", labelEn: "Year", value: "1997" },
      { labelKo: "발행규모", labelEn: "Size", value: "$55M" },
      { labelKo: "쿠폰", labelEn: "Coupon", value: "7.9%" },
      { labelKo: "만기", labelEn: "Maturity", value: "10년", valueEn: "10 years" },
      { labelKo: "주관사", labelEn: "Lead Manager", value: "Fahnestock & Co." },
      { labelKo: "투자자", labelEn: "Investor", value: "Prudential Insurance" },
      { labelKo: "담보", labelEn: "Collateral", value: "25개 앨범 로열티 (~287곡)", valueEn: "25 album royalties (~287 songs)" },
    ],
    sections: [
      {
        heading: "보위 본드의 탄생 — 데이비드 풀먼의 아이디어",
        headingEn: "The Birth of Bowie Bonds — David Pullman's Idea",
        body:
`1997년, 뱅커 데이비드 풀먼(David Pullman)은 데이비드 보위의 매니저에게 전화를 걸었다. 제안은 단순하지만 파격적이었다: "보위가 앞으로 10년간 받을 로열티 수익을 지금 당장 현금으로 받을 수 있다면 어떻겠습니까?"

당시 보위는 재정적으로 어려운 상황이 아니었다. 그러나 전 매니저와의 법적 분쟁으로 자신의 음악 목록에 대한 통제권 일부가 복잡하게 얽혀 있었고, 자산 포트폴리오 다각화를 원했다. 무엇보다, $5500만 달러를 지금 받을 수 있다면 미래 불확실성을 헤지할 수 있었다.

풀먼의 구조: 보위의 음악 로열티 수익 — 레코드 판매, 라디오 방송 사용료, 라이센스 등 — 을 담보로 한 특수목적법인(SPV)을 설립하고, 이 SPV가 채권을 발행한다. 채권 쿠폰은 이 로열티 수익에서 지급된다. 만기 10년, 쿠폰 7.9%, 발행 규모 $5500만.

1997년 2월, 이 채권은 전액 프루덴셜 보험(Prudential Insurance)에 사모 방식으로 매각됐다. 무디스는 A3 등급을 부여했다. '보위 본드'가 탄생했다.`,
        bodyEn:
`In 1997, banker David Pullman called David Bowie's manager with a bold proposition: "What if Bowie could receive his next ten years of royalty income as cash right now?"

Bowie was not in financial distress. However, legal disputes with a former manager had created complications around control of his music catalog, and he sought to diversify his asset portfolio. Most importantly, receiving $55 million immediately could hedge future uncertainty.

Pullman's structure: establish a special purpose vehicle (SPV) backed by Bowie's music royalty income — record sales, radio airplay fees, licensing — and have the SPV issue bonds. The bond coupon would be paid from these royalty revenues. Ten-year maturity, 7.9% coupon, $55 million issue size.

In February 1997, the bonds were sold entirely to Prudential Insurance in a private placement. Moody's assigned an A3 rating. The 'Bowie Bond' was born.`,
      },
      {
        heading: "구조화금융의 원리 — 어떻게 로열티가 채권이 되는가",
        headingEn: "Structured Finance Principles — How Royalties Become a Bond",
        body:
`보위 본드는 ABS(자산담보부증권, Asset-Backed Securities)의 전형적 구조를 따랐다. 핵심은 '자산의 분리(true sale)'다.

일반 회사채: 보위가 직접 채권을 발행하면, 투자자는 보위 개인의 신용을 믿고 투자해야 한다. 보위가 사망하거나 파산하면 원금을 잃을 위험이 있다.

ABS 구조: 보위의 로열티 수익을 '진정한 양도(true sale)'로 SPV에 이전한다. SPV는 이 자산을 담보로 채권을 발행한다. 법적으로 보위가 파산해도 SPV는 독립된 법인이므로, 채권 담보 자산(로열티)은 보위의 파산 자산과 분리된다. 투자자는 보위 개인이 아닌 '로열티 현금 흐름'을 믿고 투자할 수 있다.

이것이 구조화금융의 핵심 원리: 자산의 미래 현금 흐름이 예측 가능하고 법적으로 분리 가능하다면, 그 자산을 담보로 한 증권을 만들 수 있다.

보위의 25개 앨범(Ziggy Stardust, Hunky Dory, Let's Dance 등 약 287곡)에서 나오는 연간 로열티 수익이 담보였다. 1997년 당시 이 음악들의 인기와 지속성을 고려할 때, 10년간 안정적 현금 흐름이 예상됐다.`,
        bodyEn:
`Bowie Bonds followed the textbook structure of ABS (Asset-Backed Securities). The core principle is 'true sale' — asset isolation.

Conventional corporate bond: if Bowie issued bonds directly, investors would rely on Bowie's personal creditworthiness. If Bowie died or went bankrupt, principal recovery would be at risk.

ABS structure: Bowie's royalty income stream is transferred to an SPV via a 'true sale.' The SPV issues bonds backed by this asset. Legally, even if Bowie became insolvent, the SPV is a separate legal entity — the collateral assets (royalties) are ring-fenced from Bowie's personal bankruptcy estate. Investors can rely on the 'royalty cash flow' rather than Bowie personally.

This is the core principle of structured finance: if an asset's future cash flows are predictable and legally separable, that asset can serve as collateral for securities.

The collateral comprised royalties from Bowie's 25 albums (Ziggy Stardust, Hunky Dory, Let's Dance, etc. — approximately 287 songs). Given the popularity and durability of this music catalog in 1997, stable cash flows over ten years appeared assured.`,
      },
      {
        heading: "나프스터 충격 — 예측 불가능한 테일 리스크",
        headingEn: "The Napster Shock — Unpredictable Tail Risk",
        body:
`그러나 세상이 바뀌었다.

1999년, 나프스터(Napster)가 등장했다. 인터넷을 통한 MP3 파일 무료 공유 서비스였다. 2001년에는 수천만 명의 사용자가 음악을 불법으로 공유했다. 음반 산업 전체가 흔들렸다.

보위 본드의 담보였던 로열티 수익도 타격을 받았다. 레코드 판매량이 줄고, 방송 사용료 구조도 변화하기 시작했다.

무디스는 2004년 보위 본드 등급을 A3에서 Baa3(투자등급 최하단, 정크 바로 위)로 하향했다. 이유: 인터넷 발달로 음악 로열티 수익의 예측 가능성이 현저히 낮아졌다.

아이러니하게도 보위 본드 자체는 기술적 디폴트 없이 2007년 만기를 맞아 전액 상환됐다. 그러나 투자자 입장에서 등급 강등과 시장가치 하락은 손실이었다.

교훈: ABS 구조에서 자산의 '예측 가능성'은 미래의 사건에 의해 무너질 수 있다. 1997년에는 누구도 나프스터를 예상하지 못했다. 이것이 구조화금융의 근본적 한계다.`,
        bodyEn:
`But the world changed.

In 1999, Napster launched — a peer-to-peer MP3 file sharing service. By 2001, tens of millions of users were sharing music for free. The entire recorded music industry was shaken.

The royalty revenues backing Bowie Bonds were also affected. Record sales declined, and the structure of airplay royalties began to shift.

In 2004, Moody's downgraded Bowie Bonds from A3 to Baa3 (the lowest investment grade, just above junk). Reason: the development of the internet had materially reduced the predictability of music royalty revenues.

Ironically, Bowie Bonds themselves were redeemed in full without technical default at maturity in 2007. However, from the investor's perspective, the rating downgrade and mark-to-market value decline represented real losses.

Lesson: In ABS structures, the 'predictability' of asset cash flows can be destroyed by future events. In 1997, nobody could predict Napster. This is the fundamental limitation of structured finance.`,
      },
      {
        heading: "보위 본드의 유산 — 로열티 증권화의 선구자",
        headingEn: "Bowie Bonds' Legacy — Pioneer of Royalty Securitization",
        body:
`보위 본드의 성공(최종 상환 완료)과 실패(등급 강등)는 구조화금융 시장에 양면적 유산을 남겼다.

긍정적 유산: 보위 본드 이후 음악·영화·특허 로열티를 기초자산으로 한 ABS 발행이 잇따랐다. 제임스 브라운, 애시포드&심슨 등 다른 아티스트들도 유사한 구조를 이용했다. 오늘날 스트리밍 시대에도 음악 IP(지적재산권) 인수·금융화는 주요 사업 모델이다.

부정적 유산: 로열티 현금 흐름의 '미래 예측 가능성'이 기술·시장 변화에 극도로 취약하다는 것이 증명됐다. 이는 ABS 구조화 시 기초자산의 현금흐름 취약성 분석이 얼마나 중요한지를 각인시켰다.

보위 본드는 구조화금융의 창의성을 보여주는 동시에, "어떤 자산이든 증권화할 수 있지만, 그 가치는 미래 현금 흐름의 지속성에 달려 있다"는 기본 교훈을 남겼다.

2023년 현재, 음악 IP는 Hipgnosis, KKR, BlackRock 등 기관투자자들이 대규모로 인수하는 자산군이 됐다. 보위 본드가 씨앗을 뿌린 시장이다.`,
        bodyEn:
`Bowie Bonds' success (full redemption) and failure (rating downgrade) left a dual legacy in structured finance.

Positive legacy: Bowie Bonds was followed by a wave of ABS issuances backed by music, film, and patent royalties. Other artists including James Brown and Ashford & Simpson adopted similar structures. In today's streaming era, music IP (intellectual property) acquisition and monetization remains a major business model.

Negative legacy: It was proven that the 'future predictability' of royalty cash flows is extremely vulnerable to technological and market disruption. This underscored how critical cash flow vulnerability analysis is when structuring ABS.

Bowie Bonds simultaneously showcased structured finance's creativity and etched in the fundamental lesson: "any asset can be securitized, but its value depends on the durability of its future cash flows."

In 2023, music IP has become an asset class that institutional investors including Hipgnosis, KKR, and BlackRock acquire at scale. A market that Bowie Bonds helped seed.`,
      },
      {
        heading: "구조화금융의 진화 — 보위에서 서브프라임까지",
        headingEn: "The Evolution of Structured Finance — From Bowie to Subprime",
        body:
`보위 본드는 1990년대 후반 ABS 시장 혁신의 한 사례였다. 이 시기에는 모기지론, 자동차 할부금, 신용카드 채권, 학자금 대출 등 다양한 자산들이 증권화됐다.

'어떤 현금 흐름이든 증권화할 수 있다'는 구조화금융의 논리는 2000년대에 주택담보대출(모기지) 증권화 붐으로 이어졌다. CDO, CLO, MBS 등 복잡한 파생 구조가 만들어졌다.

결정적 문제: 기초자산인 서브프라임 모기지의 '예측 가능성'이 무너졌다. 주택가격이 전국적으로 동시에 하락하는 사건 — 2008년 금융위기.

보위 본드에서 나프스터가 예측 불가능한 리스크였다면, 2008년 서브프라임 위기에서는 '상관 구조(correlation structure)'의 붕괴가 예측 불가능한 리스크였다. 두 사건 모두 ABS의 근본적 취약점을 노출했다: 기초자산 현금흐름의 예측 가능성 가정이 무너지면, 정교한 구조도 함께 무너진다.

보위 본드는 창의적이고 선구적인 딜이었다. 그러나 가장 중요한 교훈은 "구조의 창의성이 기초 자산의 취약성을 가릴 수 없다"는 것이다.`,
        bodyEn:
`Bowie Bonds was one example of ABS market innovation in the late 1990s. During this period, mortgages, auto loans, credit card receivables, and student loans were all being securitized.

The logic of structured finance — 'any cash flow can be securitized' — led in the 2000s to the mortgage securitization boom. Complex derivative structures including CDOs, CLOs, and MBS were constructed.

The critical problem: the 'predictability' of the underlying subprime mortgage cash flows collapsed. Housing prices fell nationwide simultaneously — the 2008 financial crisis.

In Bowie Bonds, Napster was the unpredictable risk. In the 2008 subprime crisis, the collapse of the 'correlation structure' was the unpredictable risk. Both events exposed ABS's fundamental vulnerability: when the predictability assumption of underlying cash flows breaks down, the sophisticated structure collapses with it.

Bowie Bonds was a creative and pioneering deal. But the most important lesson is: "structural creativity cannot conceal the fragility of the underlying asset."`,
      },
    ],
    keyTerms: [
      {
        term: "ABS (자산담보부증권)",
        termEn: "ABS (Asset-Backed Securities)",
        definition: "자동차 할부, 신용카드 채권, 학자금 대출, 로열티 등 다양한 자산의 미래 현금 흐름을 담보로 발행되는 증권. 핵심 구조는 'true sale' — 기초자산을 SPV에 법적으로 이전해 발행사 파산과 격리. 보위 본드는 음악 로열티를 기초자산으로 한 최초의 유명 ABS 중 하나다.",
        definitionEn: "Securities issued backed by future cash flows from various assets: auto loans, credit card receivables, student loans, royalties, etc. The core structure is 'true sale' — legally transferring the underlying asset to an SPV, isolating it from issuer bankruptcy. Bowie Bonds is one of the first prominent ABS backed by music royalties.",
      },
      {
        term: "SPV (특수목적법인)",
        termEn: "SPV (Special Purpose Vehicle)",
        definition: "구조화금융에서 기초자산을 발행사로부터 분리하기 위해 설립하는 독립 법인. SPV는 기초자산만을 보유하고, 이를 담보로 증권을 발행한다. 발행사가 파산해도 SPV의 자산(기초자산)은 파산 재단에 귀속되지 않는다 — 이를 '파산 격리(bankruptcy remoteness)'라 한다. 보위 본드에서는 Ziggy Stardust Enterprises가 SPV 역할을 했다.",
        definitionEn: "An independent legal entity established in structured finance to separate underlying assets from the originator. The SPV holds only the underlying assets and issues securities backed by them. Even if the originator becomes insolvent, the SPV's assets (underlying assets) are not subject to bankruptcy proceedings — this is called 'bankruptcy remoteness.' In Bowie Bonds, Ziggy Stardust Enterprises served as the SPV.",
      },
      {
        term: "진정한 양도 (True Sale)",
        termEn: "True Sale",
        definition: "ABS 구조에서 기초자산이 발행사(originator)에서 SPV로 법적으로 완전히 이전됐음을 의미하는 법적 판단. True Sale이 인정되어야 발행사 파산 시 기초자산이 파산 재단에 귀속되지 않는다. 법원이 True Sale이 아닌 '담보부 대출'로 재해석할 경우 ABS 구조 전체가 붕괴될 수 있다 — ABS 구조화에서 가장 중요한 법적 리스크 중 하나.",
        definitionEn: "The legal determination that underlying assets have been completely and legally transferred from the originator to the SPV in an ABS structure. True Sale recognition is required to ensure underlying assets are not subject to the originator's bankruptcy estate. If courts recharacterize the transaction as a 'secured loan' rather than a True Sale, the entire ABS structure can collapse — one of the most critical legal risks in ABS structuring.",
      },
      {
        term: "미래 현금흐름 증권화 (Future Flow Securitization)",
        termEn: "Future Flow Securitization",
        definition: "아직 발생하지 않은 미래의 현금 흐름을 담보로 증권을 발행하는 구조. 일반 ABS가 이미 존재하는 자산(기존 대출 채권 등)을 담보로 하는 것과 달리, 미래 현금 흐름 증권화는 미래에 생성될 로열티, 수출 대금, 송금 등을 담보로 한다. 현금 흐름 예측 가능성이 핵심 리스크. 보위 본드가 대표적 사례다.",
        definitionEn: "A structure that issues securities backed by future cash flows that have not yet been generated. Unlike conventional ABS backed by existing assets (such as outstanding loan receivables), future flow securitization uses collateral that will be generated in the future: royalties, export receivables, remittances, etc. Predictability of cash flows is the critical risk. Bowie Bonds is the canonical example.",
      },
    ],
    relatedMarket101Slugs: ["structured-abs", "structured-overview"],
    relatedDealSlugs: ["world-bank-green-bond", "eu-ngeu-bonds"],
    executiveSummary: {
      ko: [
        "1997년 데이비드 보위, 25개 앨범 로열티 수익을 SPV에 양도 → $55M ABS 발행 — 세계 최초 유명 음악 로열티 증권화",
        "구조: Fahnestock 주관, 프루덴셜 보험 전액 인수, 무디스 A3 등급, 7.9% 쿠폰, 10년 만기",
        "1999년 나프스터 등장 → 음악 로열티 수익 타격 → 2004년 무디스 Baa3로 강등",
        "2007년 기술적 디폴트 없이 만기 상환 완료 — 그러나 등급 강등으로 투자자 손실 경험",
        "교훈: ABS 현금흐름 예측 가능성은 기술 변화에 취약 — '구조의 창의성이 기초 자산의 취약성을 가릴 수 없다'",
      ],
      en: [
        "1997: David Bowie transferred royalties from 25 albums to SPV → $55M ABS issued — world's first prominent music royalty securitization",
        "Structure: Fahnestock lead, Prudential Insurance full purchase, Moody's A3, 7.9% coupon, 10-year maturity",
        "1999: Napster launch → music royalty revenues hit → 2004: Moody's downgrade to Baa3",
        "Redeemed in full at maturity 2007 without technical default — but rating downgrade caused real investor mark-to-market losses",
        "Lesson: ABS cash flow predictability is vulnerable to technological disruption — 'structural creativity cannot conceal the fragility of the underlying asset'",
      ],
    },
    assessment: {
      positives: [
        "기술적 디폴트 없이 만기 상환 완료 — 최종적으로 투자자 원금 회수 성공",
        "음악 로열티 증권화 시장 개척 — 이후 JP/영화/특허 로열티 ABS 발행의 선구자",
        "발행사(보위) 입장: $55M 즉시 현금화 + 나프스터로 인한 미래 로열티 하락 리스크 헤지 성공",
        "구조화금융 창의성의 전형 — '어떤 현금 흐름이든 증권화할 수 있다'는 개념의 대중화",
      ],
      positivesEn: [
        "Redeemed in full at maturity without technical default — investors ultimately recovered principal",
        "Pioneered music royalty securitization — precursor to film, patent, and other IP royalty ABS",
        "From issuer (Bowie) perspective: $55M immediate cash + successful hedge against Napster-driven future royalty decline",
        "Canonical example of structured finance creativity — popularized the concept that 'any cash flow can be securitized'",
      ],
      risks: [
        "무디스 A3 → Baa3 강등(2004) — 나프스터·인터넷 혁명으로 음악 로열티 수익 예측 불가능성 급증",
        "기술 리스크 과소평가 — 1997년 ABS 설계 시 디지털 음악 혁명을 stress scenario에 미포함",
        "유동성 부재 — 사모 발행(프루덴셜 단독 인수)으로 2차 시장 거래 불가, 투자자 조기 출구 불가",
        "교훈 실패 — 보위 본드의 교훈이 2000년대 모기지 ABS 붐에서 반복되지 않음",
      ],
      risksEn: [
        "Moody's downgrade A3 → Baa3 (2004) — music royalty revenue predictability plummeted due to Napster and internet revolution",
        "Technology risk underestimated — digital music revolution not included in 1997 ABS stress scenarios",
        "No liquidity — private placement (Prudential sole buyer) meant no secondary market, no early exit for investors",
        "Lesson not learned — Bowie Bonds' lessons were not applied in the 2000s mortgage ABS boom",
      ],
    },
    faq: [
      {
        q: "보위 본드에서 투자자는 손해를 봤나요?",
        qEn: "Did investors lose money on Bowie Bonds?",
        a: "원금 손실은 없었습니다. 채권은 2007년 만기에 전액 상환됐습니다. 그러나 무디스가 2004년 등급을 A3에서 Baa3로 낮추면서 시장가치(mark-to-market)가 하락했습니다. 프루덴셜 보험이 전액 인수해 보유했기 때문에 시장에서의 손실 실현이 없었지만, 장부상 평가 손실은 있었을 것입니다. 또한 쿠폰 수익률 7.9%는 결과적으로 투자등급 최하단 채권(Baa3) 수준의 리스크에 비해 낮았다고 볼 수 있습니다.",
        aEn: "There was no principal loss — the bonds were fully redeemed at maturity in 2007. However, Moody's downgrade from A3 to Baa3 in 2004 caused mark-to-market value decline. Since Prudential Insurance held the entire issue, there was no market-based realized loss, but book-value impairment would have been recorded. Additionally, the 7.9% coupon yield was arguably insufficient compensation for the risk that materialized — effectively the lowest investment-grade (Baa3) credit risk.",
      },
      {
        q: "보위 본드 이후 다른 유명인도 비슷한 구조를 사용했나요?",
        qEn: "Did other celebrities use similar structures after Bowie Bonds?",
        a: "네. 풀먼은 보위 이후 여러 아티스트의 로열티 증권화를 추진했습니다. 제임스 브라운, 애시포드&심슨 등이 유사한 구조를 이용했습니다. 1990년대 후반~2000년대 초 음악 로열티 ABS는 하나의 틈새 자산군이 됐습니다. 그러나 나프스터 충격 이후 이 시장은 위축됐습니다. 2010년대 이후로는 음악 IP 자체를 인수하는 방식(Hipgnosis, KKR의 음악 IP 펀드 등)이 더 주류가 됐습니다.",
        aEn: "Yes. Pullman pursued royalty securitization for several other artists after Bowie. James Brown, Ashford & Simpson, and others used similar structures. In the late 1990s to early 2000s, music royalty ABS became a niche asset class. However, after the Napster shock, this market contracted. From the 2010s onwards, outright acquisition of music IP (Hipgnosis, KKR's music IP funds, etc.) became the more mainstream approach.",
      },
      {
        q: "나프스터가 없었다면 보위 본드는 성공한 딜이었을까요?",
        qEn: "Would Bowie Bonds have been a success without Napster?",
        a: "대체로 그렇습니다. 보위의 음악 카탈로그는 상업적으로 견고했고, 인터넷 혁명이 없었다면 10년간의 로열티 수익은 충분히 예측 가능했습니다. 등급 강등도 없었을 것이고, 투자자 수익률도 7.9%로 당시 기준 양호한 투자였을 것입니다. 그러나 '나프스터가 없었다면'이라는 가정 자체가 보위 본드의 핵심 교훈입니다: 자산 가치를 바꿀 수 있는 파괴적 기술 변화는 항상 예측 불가능한 곳에서 온다. ABS 투자자는 기초 자산의 취약성을 '알려진 리스크'뿐 아니라 '알려지지 않은 리스크'까지 고려해야 한다.",
        aEn: "Largely yes. Bowie's music catalog was commercially solid, and without the internet revolution, ten years of royalty income would have been adequately predictable. There would have been no rating downgrade, and 7.9% would have been a reasonable return by 1997 standards. But the 'what if no Napster' hypothetical is itself the core lesson of Bowie Bonds: disruptive technological change that transforms asset values always comes from unexpected places. ABS investors must consider not just 'known risks' but 'unknown risks' in the underlying asset's vulnerability.",
      },
      {
        q: "오늘날 음악 IP 투자는 어떻게 이뤄지나요?",
        qEn: "How is music IP invested in today?",
        a: "세 가지 주요 방식이 있습니다. 첫째, 음악 IP 직접 인수: Hipgnosis Songs Fund(영국 상장), KKR, BlackRock, 소프트뱅크 등 기관투자자가 음악 카탈로그를 직접 구매합니다. 예: 브루스 스프링스틴 카탈로그를 Sony에 약 $5억에 매각(2021). 둘째, 로열티 유동화: 여전히 소규모로 진행 중이나 보위 본드보다 훨씬 정교한 구조(스트리밍 수익 예측 모델 포함). 셋째, 스트리밍 로열티 어드밴스: Spotify·Apple Music 스트리밍 수익의 일부를 선지급하는 방식. 보위 본드가 씨앗을 뿌린 음악 IP 자산화의 생태계가 완전히 성숙했습니다.",
        aEn: "Three main approaches today. First, direct music IP acquisition: institutional investors including Hipgnosis Songs Fund (UK listed), KKR, BlackRock, and SoftBank directly purchase music catalogs — e.g., Bruce Springsteen's catalog sold to Sony for approximately $500M (2021). Second, royalty securitization: still conducted on a smaller scale but with far more sophisticated structures than Bowie Bonds (including streaming revenue prediction models). Third, streaming royalty advances: pre-payment of a portion of Spotify/Apple Music streaming revenues. The music IP monetization ecosystem seeded by Bowie Bonds has fully matured.",
      },
      {
        q: "보위 본드의 등급은 왜 처음에 A3였나요?",
        qEn: "Why was Bowie Bonds initially rated A3?",
        a: "무디스가 A3를 부여한 근거는 세 가지였습니다. 첫째, 세계적으로 인정받은 보위의 음악 카탈로그 — 검증된 상업적 가치와 지속적 로열티 수입. 둘째, ABS 구조의 파산 격리 — SPV 구조로 보위 개인 신용 리스크와 분리. 셋째, 1997년 시점의 기술 환경 — 아직 인터넷이 음악 유통을 지배하지 않았고, CD 시대 로열티 수익이 안정적이었다. 1997년 기준으로는 합리적인 등급이었습니다. 문제는 7년 후의 세상이 1997년과 근본적으로 달라졌다는 것이었고, 등급 모델이 이를 예측하지 못했다는 것입니다.",
        aEn: "Moody's based the A3 rating on three factors. First, Bowie's globally recognized music catalog — proven commercial value and consistent royalty income. Second, bankruptcy isolation through ABS structure — SPV separating the transaction from Bowie's personal credit risk. Third, 1997's technological environment — the internet had not yet disrupted music distribution, and CD-era royalty revenues were stable. The A3 rating was reasonable by 1997 standards. The problem was that the world seven years later was fundamentally different from 1997, and the rating model could not anticipate this.",
      },
    ],
    references: [
      {
        id: 1,
        author: "Pullman, David",
        title: "The Bowie Bond: How David Bowie Securitized his Music Royalties",
        source: "Structured Finance Interview, Various Press",
        year: "1997",
      },
      {
        id: 2,
        author: "Moody's Investors Service",
        title: "Rating Action: Bowie Bonds Downgrade to Baa3",
        source: "Moody's Press Release",
        year: "2004",
      },
      {
        id: 3,
        author: "Kusek, David and Leonhard, Gerd",
        title: "The Future of Music: Manifesto for the Digital Music Revolution",
        source: "Berklee Press",
        year: "2005",
      },
      {
        id: 4,
        author: "Schwarcz, Steven L.",
        title: "The Alchemy of Asset Securitization",
        source: "Stanford Journal of Law, Business & Finance, Vol. 1",
        year: "1994",
      },
    ],
  },

  {
    slug: "eu-ngeu-bonds",
    title: "EU NGEU/SURE 본드 (2020~) — 유럽 공동채의 탄생",
    titleEn: "EU NGEU/SURE Bonds (2020~) — Birth of European Joint Debt",
    category: "creator",
    categoryLabel: "시장 창조",
    categoryLabelEn: "Market Creators",
    excerpt: "코로나 대응으로 EU가 단숨에 세계 최대급 SSA 발행체로 부상. 유럽 공동부채라는 정치적·구조적 대사건.",
    excerptEn: "COVID response transformed the EU into one of the world's largest SSA issuers overnight. A political and structural watershed in European debt.",
    dealYear: 2020,
    issuer: "European Union",
    issuerEn: "European Union",
    readingMinutes: 14,
    tags: ["EU", "SSA", "공동채", "Supranational", "NGEU"],
    tagsEn: ["EU", "SSA", "Joint Debt", "Supranational", "NGEU"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "European Union" },
      { labelKo: "발행 시작", labelEn: "Launched", value: "2020 (SURE) / 2021 (NGEU)" },
      { labelKo: "총 규모", labelEn: "Total Program", value: "€800B+ (NGEU)" },
      { labelKo: "SURE 규모", labelEn: "SURE Program", value: "€100B" },
      { labelKo: "등급", labelEn: "Rating", value: "AAA/Aaa" },
      { labelKo: "의의", labelEn: "Significance", value: "유럽 최초 공동부채", valueEn: "Europe's first joint debt" },
    ],
    sections: [
      {
        heading: "코로나 이전의 유럽 — '공동채'가 금기였던 이유",
        headingEn: "Europe Before COVID — Why 'Joint Debt' Was Taboo",
        body:
`유럽 통합의 역사에서 '공동채권(joint debt)'은 오랫동안 금기어였다. 이유는 단순했다: 각국의 재정 주권.

독일과 네덜란드 등 북유럽 국가들은 자국의 AAA 신용등급이 남유럽 국가들의 낮은 등급과 섞이면 전반적인 조달 비용이 상승한다고 우려했다. 더 중요하게, 재정 책임 없이 자금에 접근할 수 있는 '도덕적 해이(moral hazard)' 문제가 있었다 — 남유럽 국가들이 재정 개혁 없이 EU의 AAA를 이용해 저비용으로 차입할 수 있다면, 개혁 유인이 사라진다는 논리.

2010년 유럽 재정위기 때도 이 원칙은 지켜졌다. EU는 그리스·포르투갈·아일랜드를 구제할 때 공동채권이 아닌 양자 대출(bilateral loans)과 ESM(유럽안정메커니즘) 대출 형태를 택했다.

2020년 코로나19 팬데믹이 모든 것을 바꿨다. 위기는 특정 국가의 방만한 재정 관리가 원인이 아니었다 — 전 유럽이 동시에, 예측 불가능하게 타격을 받았다. 이 조건에서 독일·프랑스가 공동 부채를 받아들이는 것이 정치적으로 가능해졌다.`,
        bodyEn:
`In the history of European integration, 'joint debt' was long a taboo term. The reason was simple: fiscal sovereignty.

Northern European countries, particularly Germany and the Netherlands, worried that mixing their AAA credit ratings with the lower ratings of southern European countries would raise overall borrowing costs. More importantly, moral hazard was the concern — if southern European countries could borrow cheaply using the EU's AAA without fiscal reform, the incentive to reform disappears.

Even during the 2010 European debt crisis, this principle held. The EU rescued Greece, Portugal, and Ireland through bilateral loans and ESM (European Stability Mechanism) lending — not joint bonds.

The COVID-19 pandemic in 2020 changed everything. The crisis was not caused by any country's fiscal mismanagement — all of Europe was hit simultaneously and unpredictably. Under these conditions, political acceptance of joint debt by Germany and France became possible.`,
      },
      {
        heading: "SURE — 공동채의 첫 발 (2020년 10월)",
        headingEn: "SURE — The First Step in Joint Debt (October 2020)",
        body:
`2020년 10월, EU는 SURE(Support to mitigate Unemployment Risks in an Emergency) 채권을 처음 발행했다. 규모 €170억, AAA 등급, 소셜본드 구조. 오더북은 €2330억 이상 — 역대 최대 SSA 오더북 신기록이었다.

SURE의 목적: 코로나19로 인한 실업·단축근무 지원 프로그램을 위한 재원 조달. EU 회원국들이 고용 유지를 위해 지출한 비용을 EU가 저비용으로 차입해 대출해주는 방식.

SURE는 엄밀히 말하면 완전한 '공동채'가 아니었다. 각국이 보증(guarantee) 방식으로 배후를 지원하는 구조였기 때문이다. 그러나 EU 기관이 직접 채권시장에서 대규모로 자금을 조달했다는 점에서 NGEU의 선행 모델이 됐다.

총 SURE 발행 규모: €98.4B (프로그램 종료 기준). EU는 이를 전액 소셜본드로 발행해 고용 관련 소셜 임팩트 보고를 수행했다. SURE는 ESG 채권 시장에서도 EU의 위상을 높였다.`,
        bodyEn:
`In October 2020, the EU issued its first SURE (Support to mitigate Unemployment Risks in an Emergency) bonds. €17 billion, AAA-rated, structured as social bonds. The orderbook exceeded €233 billion — a new record for any SSA issuance in history.

SURE's purpose: funding COVID-19 unemployment and short-time work support programs. EU member states' employment retention spending was financed by EU borrowing at low cost and on-lent to members.

Strictly speaking, SURE was not a complete 'joint debt' instrument — member states provided guarantees backing the structure. However, as the EU institution directly raised large-scale capital from bond markets, it became the precursor model for NGEU.

Total SURE issuance: €98.4B (at program completion). The EU issued all SURE bonds as social bonds, reporting on employment-related social impact. SURE also elevated the EU's profile in ESG bond markets.`,
      },
      {
        heading: "NGEU — 유럽의 해밀턴 모멘트 (2021~)",
        headingEn: "NGEU — Europe's Hamiltonian Moment (2021~)",
        body:
`2021년 6월, EU는 NextGenerationEU(NGEU) 채권 발행을 시작했다. 총 규모 €800B(보조금 €390B + 대출 €360B 포함), 2026년까지 발행 예정. 단일 발행체 기준 세계 최대급 SSA 프로그램이었다.

NGEU의 핵심 특징:
① EU 전체가 공동 채무자: 개별 회원국이 아닌 EU 자체가 채권자에 대한 직접 의무를 진다.
② 배분 메커니즘: 조달 자금은 회원국에 지원금(grant)과 대출(loan)로 배분. 각국은 국가 회복·탄력성 계획(RRP)을 제출해야 받을 수 있다.
③ 조건부 구조: RRP 이행 마일스톤 달성 시 다음 배분 가능 — 단순 지급이 아닌 성과 기반.
④ 그린·디지털 트윈 목표: NGEU 지출의 37% 이상은 기후 관련, 20% 이상은 디지털 전환에 사용돼야 한다.

역사적 비교: 많은 분석가들이 NGEU를 1790년 알렉산더 해밀턴이 미국 독립전쟁 채무를 연방 채무로 통합한 사건 — 미국 연방 부채시장의 기원 — 에 비교한다. "유럽의 해밀턴 모멘트(Europe's Hamiltonian Moment)"라는 표현이 자주 사용된다. 물론 NGEU가 일시적 위기 대응인지 영구적 유럽 공동 재정의 시작인지는 여전히 논쟁 중이다.`,
        bodyEn:
`In June 2021, the EU began issuing NextGenerationEU (NGEU) bonds. Total program size €800B (including €390B in grants and €360B in loans), scheduled for completion by 2026. It was the world's largest SSA program by any single issuer.

Key features of NGEU:
① EU as joint debtor: the EU itself bears direct obligation to bondholders, not individual member states.
② Distribution mechanism: proceeds distributed to member states as grants and loans; each country must submit a National Recovery and Resilience Plan (RRP) to receive funds.
③ Conditionality: next disbursements only upon achievement of RRP milestones — performance-based rather than unconditional.
④ Green and digital twin targets: at least 37% of NGEU spending must be climate-related; at least 20% must support digital transformation.

Historical comparison: many analysts compare NGEU to Alexander Hamilton's 1790 assumption of state Revolutionary War debts as federal debt — the origin of the US federal debt market. The phrase "Europe's Hamiltonian Moment" is widely used. Whether NGEU represents a temporary crisis response or the beginning of permanent European joint fiscal capacity remains actively debated.`,
      },
      {
        heading: "EU의 SSA 시장 위상 — 하룻밤에 최대급 발행체로",
        headingEn: "EU's SSA Market Position — Overnight Transformation to Mega-Issuer",
        body:
`NGEU 이전, EU는 이미 연간 수십억 유로 규모의 채권을 발행했다. 주로 전통적 EU 기관 채권(EIB, EFSF, ESM 등)이었다.

NGEU 발행으로 EU의 연간 발행 규모는 €150B+로 급증했다. 이는 세계 최대 SSA 발행체 중 하나인 EIB(연간 €80~100B)를 상회하는 수준이다.

EU 채권의 구조적 특징:
• 다중 통화: EUR이 기본이지만 일부 USD, GBP, JPY 트랑슈도 발행
• 만기 다양화: 3년~30년 범위의 다양한 만기 분산
• 분기별 경매(Auction): 일부는 신디케이션(syndication), 일부는 경매 방식
• 그린·소셜 혼합: NGEU의 30%는 그린본드, SURE는 전액 소셜본드

EU 채권의 투자자: 중앙은행, 국부펀드, 연기금, 자산운용사 등 전 세계 기관투자자. EU의 AAA 등급과 유동성 덕분에 독일 국채(Bund) 대비 소폭 높은 금리(통상 10~30bp)로 거래된다 — 이를 'EU-Bund spread'라 한다.`,
        bodyEn:
`Before NGEU, the EU already issued bonds at tens of billions of euros annually — primarily traditional EU institution bonds (EIB, EFSF, ESM, etc.).

NGEU transformed EU's annual issuance to €150B+, surpassing EIB (€80–100B annually) — one of the world's largest SSA issuers.

Structural features of EU bonds:
• Multi-currency: EUR as base currency, but some USD, GBP, JPY tranches
• Maturity diversification: range from 3 to 30 years spread across the curve
• Mixed issuance methods: some via syndication, some via auction
• Green/social mix: 30% of NGEU as green bonds; all SURE as social bonds

EU bond investors: central banks, sovereign wealth funds, pension funds, asset managers worldwide. Thanks to EU's AAA rating and liquidity, EU bonds trade at a slight premium to German Bunds (typically 10–30bp wider) — this is called the 'EU-Bund spread.'`,
      },
      {
        heading: "영구적 공동채인가 일시적 위기 대응인가",
        headingEn: "Permanent Joint Debt or Temporary Crisis Response?",
        body:
`NGEU에 대한 가장 중요한 질문: 이것이 유럽 공동 재정의 영구적 시작인가, 아니면 코로나라는 특수 상황에 대한 일회성 대응인가?

독일·네덜란드 등 북유럽 국가들의 원래 입장: NGEU는 '예외(exception)'이지 새로운 규범(norm)이 아니다. 팬데믹이라는 전례 없는 충격에 대한 일시적 대응.

반대 논거: EU는 이미 기후 위기 대응을 위한 새로운 공동채 프로그램(REPowerEU, 에너지 안보 대응)을 추진했다. EU 채권이 투자자들에게 하나의 자산군으로 정착됐다. 한번 형성된 발행 인프라와 투자자 기반은 유지되는 경향이 있다.

현재 상황(2024 기준): NGEU 발행이 2026년까지 계속되며, EU는 향후 추가적인 공동 자금조달 메커니즘 논의를 이어가고 있다. 유럽 공동채의 '인프라'가 구축된 이상, 다음 위기 때 다시 활용될 가능성은 높다.

EU 공동채의 진화는 유럽 통합의 깊이를 가늠하는 척도이기도 하다. 재정 연합(fiscal union)으로의 방향성과 그 속도가 EU 채권시장의 미래를 결정할 것이다.`,
        bodyEn:
`The most important question about NGEU: Is this the permanent beginning of European fiscal union, or a one-time response to the unique circumstances of COVID?

Original position of northern European countries (Germany, Netherlands): NGEU is an 'exception,' not a new norm. A temporary response to an unprecedented pandemic shock.

Counter-arguments: The EU has already pursued new joint financing programs for climate crisis response (REPowerEU, energy security). EU bonds have established themselves as an asset class with investors. Once an issuance infrastructure and investor base form, they tend to persist.

Current situation (as of 2024): NGEU issuance continues through 2026, and the EU continues discussions about additional joint financing mechanisms. With the 'infrastructure' of European joint debt now established, reuse in future crises appears likely.

The evolution of EU joint debt is also a measure of the depth of European integration. The direction and pace toward fiscal union will determine the future of EU bond markets.`,
      },
    ],
    keyTerms: [
      {
        term: "NGEU (NextGenerationEU)",
        termEn: "NextGenerationEU (NGEU)",
        definition: "2021~2026년 EU의 COVID-19 경제 회복 지원 채권 프로그램. 총 €800B 규모, EU 전체가 공동 채무자. 조달 자금을 회원국의 국가 회복·탄력성 계획(RRP) 이행에 따라 지원금(grant)과 대출(loan)로 배분. 단일 발행체 기준 세계 최대급 SSA 프로그램이며, '유럽의 해밀턴 모멘트'로 불린다.",
        definitionEn: "EU's 2021–2026 COVID-19 economic recovery bond program. Total €800B, with the EU as joint debtor. Proceeds distributed to member states as grants and loans based on National Recovery and Resilience Plan (RRP) implementation. The world's largest SSA program by a single issuer, often called 'Europe's Hamiltonian Moment.'",
      },
      {
        term: "SURE (실업 리스크 지원)",
        termEn: "SURE (Unemployment Risk Support)",
        definition: "2020년 EU가 발행한 팬데믹 대응 소셜본드 프로그램. 총 €98.4B, 회원국의 실업·단축근무 지원 프로그램 재원 조달. NGEU의 선행 모델이자 EU 공동채 발행의 출발점. 전액 소셜본드 구조로 발행돼 EU의 ESG 채권시장 위상을 높였다.",
        definitionEn: "EU's pandemic response social bond program issued in 2020. Total €98.4B, funding member states' unemployment and short-time work programs. Served as the precursor model for NGEU and the starting point for EU joint debt issuance. Issued entirely as social bonds, elevating EU's profile in the ESG bond market.",
      },
      {
        term: "해밀턴 모멘트 (Hamiltonian Moment)",
        termEn: "Hamiltonian Moment",
        definition: "1790년 미국 재무장관 알렉산더 해밀턴이 각 주의 독립전쟁 채무를 연방 채무로 통합한 사건에 비유한 표현. 이 결정이 미국 연방 부채시장과 미국 달러의 기반이 됐다. EU NGEU를 유럽의 해밀턴 모멘트로 비유하는 것은, EU가 처음으로 진정한 의미의 공동 재정 책임을 진 사건이라는 의미다.",
        definitionEn: "A reference to US Treasury Secretary Alexander Hamilton's 1790 assumption of state Revolutionary War debts as federal debt — which created the foundation for US federal debt markets and the US dollar. Calling EU NGEU 'Europe's Hamiltonian Moment' suggests it is the first time the EU accepted genuine joint fiscal responsibility.",
      },
      {
        term: "SSA (초국가·주권·정부기관) 채권",
        termEn: "SSA (Supranational/Sovereign/Agency) Bonds",
        definition: "세계은행·EIB·IMF 등 초국가 기관, 각국 정부, 국책은행 등이 발행하는 채권의 총칭. 높은 신용등급(주로 AAA)과 준정부 지위로 안전 자산으로 분류. EU NGEU 이후 EU 자체가 세계 최대급 SSA 발행체 중 하나로 부상. EU 채권은 독일 Bund 대비 통상 10~30bp 스프레드로 거래된다.",
        definitionEn: "The collective term for bonds issued by supranational institutions (World Bank, EIB, IMF), sovereign governments, and national development banks. Classified as safe assets due to high credit ratings (mostly AAA) and quasi-governmental status. Following NGEU, the EU itself emerged as one of the world's largest SSA issuers. EU bonds typically trade at 10–30bp spread to German Bunds.",
      },
    ],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    relatedDealSlugs: ["world-bank-green-bond", "bowie-bonds"],
    executiveSummary: {
      ko: [
        "2020년 10월 SURE 채권 발행(€98.4B 소셜본드) — EU 공동 자금조달의 첫 발, 오더북 €2330억+ 역대 SSA 최대",
        "2021년 6월 NGEU 채권 발행 시작 — €800B 공동 부채, EU 전체가 공동 채무자, '유럽의 해밀턴 모멘트'",
        "하룻밤에 세계 최대급 SSA 발행체로 부상 — 연간 €150B+ 발행, EIB를 상회하는 규모",
        "그린·소셜본드 통합: NGEU 30% 그린본드 + SURE 전액 소셜본드 — EU가 글로벌 ESG 채권시장 최대 주체로",
        "영구적 공동채인가 일회성 대응인가 — 유럽 재정 연합의 방향성을 가늠하는 핵심 질문",
      ],
      en: [
        "October 2020: SURE bond issuance (€98.4B social bonds) — first EU joint financing, €233B+ orderbook, all-time SSA record",
        "June 2021: NGEU bond issuance begins — €800B joint debt, EU as joint debtor, 'Europe's Hamiltonian Moment'",
        "Overnight transformation to world's largest SSA issuer — €150B+ annual issuance, surpassing EIB",
        "Green and social bond integration: NGEU 30% green bonds + SURE entirely social bonds — EU becomes dominant ESG bond market actor",
        "Permanent joint debt or one-time response? — The defining question for the direction of European fiscal union",
      ],
    },
    assessment: {
      positives: [
        "유럽 재정 통합 진전 — 공동 채무 가능성을 증명하며 재정 연합(fiscal union) 첫 발",
        "사상 최대 SSA 오더북 기록 — SURE 첫 발행 €2330억+, 시장의 EU 공동채 수요 확인",
        "그린·소셜본드 표준 강화 — EU 기준이 전 세계 ESG 채권 발행 표준에 영향",
        "회원국 경제 회복 지원 효과 — 저비용 자금이 회원국 고용 유지·인프라 투자에 활용",
      ],
      positivesEn: [
        "Advancement in European fiscal integration — demonstrated joint debt feasibility, first step toward fiscal union",
        "Record SSA orderbook — SURE first issuance €233B+, confirming market demand for EU joint debt",
        "ESG bond standard reinforcement — EU standards influencing global ESG bond issuance norms",
        "Member state economic recovery support — low-cost financing utilized for employment retention and infrastructure investment",
      ],
      risks: [
        "도덕적 해이 잠재력 — 조건부 구조에도 불구하고 재정 개혁 없이 저비용 자금 접근 우려",
        "영구화 불확실성 — '예외적 수단'이 선례가 되면 EU 재정 규율 약화 우려",
        "EU-Bund 스프레드 확대 리스크 — EU 발행 증가로 수급 불균형 시 스프레드 확대 가능",
        "정치적 합의 의존성 — 향후 추가 공동채 프로그램은 만장일치에 가까운 정치적 합의 필요",
      ],
      risksEn: [
        "Moral hazard potential — concerns about low-cost capital access without fiscal reform despite conditionality",
        "Permanence uncertainty — if 'exceptional instruments' become precedents, EU fiscal discipline may weaken",
        "EU-Bund spread widening risk — supply-demand imbalance from increased EU issuance could widen spreads",
        "Political consensus dependency — future additional joint programs require near-unanimous political agreement",
      ],
    },
    faq: [
      {
        q: "EU 채권과 독일 국채(Bund)는 어떻게 다른가요?",
        qEn: "How do EU bonds differ from German Bunds?",
        a: "두 가지 핵심 차이가 있습니다. 첫째, 발행사: 독일 Bund는 독일 연방 정부 채무이고, EU 채권은 EU 기관(European Commission) 채무입니다. 둘째, 신용: 독일 Bund는 독일의 단독 신용이고, EU 채권은 27개 회원국이 배후를 지원하는 EU의 신용입니다. EU 채권이 독일 대비 소폭 높은 금리(10~30bp)로 거래되는 이유는 두 가지입니다: ① EU 자체의 독립적 과세 권한 부재(독일과 달리), ② 유동성이 Bund 대비 다소 낮음. 그러나 두 채권 모두 AAA 등급으로, 투자자들에게 사실상 같은 신용 리스크 버킷에 속합니다.",
        aEn: "Two key differences. First, issuer: German Bunds are Federal Republic of Germany debt; EU bonds are European Commission debt. Second, credit: Bunds reflect Germany's standalone credit; EU bonds reflect the EU's credit backed by 27 member states. EU bonds trade at slightly higher yields (10–30bp) for two reasons: ① EU itself lacks independent taxing power (unlike Germany); ② liquidity is somewhat lower than Bunds. However, both carry AAA ratings, placing them in essentially the same credit risk bucket for investors.",
      },
      {
        q: "NGEU 자금은 어떻게 배분되나요?",
        qEn: "How are NGEU funds distributed?",
        a: "두 가지 방식으로 배분됩니다. 보조금(Grant, €390B): 상환 불필요. 각국은 국가 회복·탄력성 계획(RRP)을 제출하고 EU 승인을 받아야 합니다. RRP 이행 마일스톤 달성 시 단계별 지급. 대출(Loan, ~€360B): 상환 필요, 대신 시장금리 대비 낮은 EU 차입 금리 적용. 배분 조건은 '기후·디지털 트윈 목표': 지출의 37%+ 기후 관련, 20%+ 디지털 전환 관련. RRP 이행이 만족스럽지 않으면 EU는 지급을 중단하거나 삭감할 수 있습니다.",
        aEn: "Distributed in two forms. Grants (€390B): no repayment required. Countries must submit a National Recovery and Resilience Plan (RRP) and receive EU approval; disbursements occur in stages as RRP milestones are achieved. Loans (~€360B): repayment required, but at low EU borrowing rates versus market rates. Disbursement conditions include 'green and digital twin targets': 37%+ climate-related, 20%+ digital transformation spending. If RRP implementation is unsatisfactory, the EU can withhold or reduce payments.",
      },
      {
        q: "NGEU가 완전히 발행되면 EU 채권 발행은 끝나나요?",
        qEn: "Once NGEU is fully issued, will EU bond issuance end?",
        a: "그렇지 않을 것입니다. 몇 가지 이유가 있습니다. 첫째, NGEU 채권 만기 도래: NGEU 채권은 2028~2058년 사이에 만기가 됩니다. EU는 이를 상환하기 위해 추가 자금을 조달하거나 차환(refinancing)해야 할 가능성이 있습니다. 둘째, RepowerEU: 에너지 안보·탈탄소 관련 추가 채권 발행이 이미 승인됐습니다. 셋째, 향후 위기: 만약 다음 시스템 리스크(기후 위기, 지정학 위기 등)가 발생하면, EU 공동채 인프라를 다시 활용할 가능성이 높습니다. EU 채권이 하나의 영구적 자산군으로 투자자 포트폴리오에 자리잡고 있는 한, 발행은 지속될 것입니다.",
        aEn: "It is unlikely. Several reasons: First, NGEU bond maturities: NGEU bonds mature between 2028 and 2058 — the EU may need to raise additional funds or refinance. Second, REPowerEU: additional bond issuance for energy security and decarbonization has already been approved. Third, future crises: if the next systemic risk (climate crisis, geopolitical crisis, etc.) emerges, reusing EU joint debt infrastructure is likely. As EU bonds have established themselves as a permanent asset class in investor portfolios, issuance will continue.",
      },
      {
        q: "EU 채권은 어떻게 투자할 수 있나요?",
        qEn: "How can investors invest in EU bonds?",
        a: "EU 채권은 국제 채권시장에서 거래됩니다. 일반적인 투자 방법은 세 가지입니다. 첫째, 신디케이션 참여: EU가 새 채권을 발행할 때 주관사를 통해 기관투자자로 참여. 주로 기관투자자(연기금, 자산운용사, 보험사)가 대상. 둘째, 2차 시장 매입: Euroclear 등 국제 채권 결제 시스템을 통해 이미 발행된 EU 채권을 매입. 셋째, ETF: EU 채권을 포함하는 SSA 또는 유럽 국채 ETF를 통한 간접 투자. 일반 개인 투자자는 직접 투자보다 ETF를 통한 간접 투자가 현실적입니다.",
        aEn: "EU bonds trade in international bond markets. Three main investment approaches: First, syndication participation: institutions participate through lead managers when EU issues new bonds — primarily for institutional investors (pension funds, asset managers, insurers). Second, secondary market purchase: buying already-issued EU bonds through international settlement systems like Euroclear. Third, ETFs: indirect exposure through SSA or European government bond ETFs that include EU bonds. For retail investors, ETF-based indirect investment is more practical than direct investment.",
      },
      {
        q: "NGEU는 미국의 연방 부채 시스템과 어떻게 비교되나요?",
        qEn: "How does NGEU compare to the US federal debt system?",
        a: "중요한 차이가 있습니다. 미국 연방 채무: 연방 정부가 독립적 과세 권한을 가지며, 의회의 재정 권한이 강력합니다. 연방 부채는 미국 달러 패권과 연결된 안전 자산 지위를 갖습니다. EU NGEU: EU는 독립적 과세 권한이 없습니다(회원국이 자체 재정 주권 유지). EU의 재원은 주로 회원국 분담금과 관세 수입. NGEU는 이에 더해 처음으로 자본시장에서 직접 차입한 것입니다. 해밀턴 모멘트 비유의 의미는 '공동 부채의 시작'이지만, EU가 미국 수준의 재정 연합에 도달하려면 훨씬 많은 정치적 통합이 필요합니다.",
        aEn: "Important differences exist. US federal debt: the federal government holds independent taxing authority, and Congressional fiscal authority is strong. Federal debt holds safe-asset status linked to US dollar hegemony. EU NGEU: the EU lacks independent taxing authority (member states maintain fiscal sovereignty), with EU revenues primarily from member contributions and customs duties. NGEU additionally marks the first direct borrowing from capital markets. The Hamiltonian Moment analogy signifies 'the beginning of joint debt,' but reaching US-level fiscal union would require far more political integration.",
      },
    ],
    references: [
      {
        id: 1,
        author: "European Commission",
        title: "NextGenerationEU: Key Facts and Figures",
        source: "European Commission",
        year: "2024",
        url: "https://commission.europa.eu/strategy-and-policy/recovery-plan-europe_en",
      },
      {
        id: 2,
        author: "Brunnermeier, Markus; James, Harold; Landau, Jean-Pierre",
        title: "The Digitalization of Money",
        source: "NBER Working Paper No. 26300",
        year: "2019",
      },
      {
        id: 3,
        author: "Soros, George",
        title: "Europe Must Seize the Moment and Issue Perpetual Bonds",
        source: "Financial Times",
        year: "2020",
      },
      {
        id: 4,
        author: "ECB",
        title: "EU Bonds — Features and Role in the Investor Portfolio",
        source: "ECB Economic Bulletin",
        year: "2022",
        url: "https://www.ecb.europa.eu/pub/economic-bulletin/",
      },
    ],
  },

  // ── B: Sovereign ──────────────────────────────────────────────────────────────
  {
    slug: "argentina-100yr",
    title: "아르헨티나 100년물 (2017) — 시장 광기의 표본",
    titleEn: "Argentina 100-Year Bond (2017) — A Study in Market Euphoria",
    category: "sovereign",
    categoryLabel: "Sovereign",
    categoryLabelEn: "Sovereign",
    excerpt: "디폴트 상습국이 100년물을 팔았고, 3년 뒤 또 디폴트했다. 'reach for yield'의 완벽한 교과서.",
    excerptEn: "A serial defaulter sold 100-year bonds and defaulted again in 3 years. The perfect case study in reach-for-yield.",
    dealYear: 2017,
    issuer: "Republic of Argentina",
    issuerEn: "Republic of Argentina",
    readingMinutes: 13,
    tags: ["Sovereign", "100년물", "EM", "디폴트", "듀레이션"],
    tagsEn: ["Sovereign", "Century Bond", "EM", "Default", "Duration"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Republic of Argentina" },
      { labelKo: "발행연도", labelEn: "Year", value: "June 2017" },
      { labelKo: "발행규모", labelEn: "Size", value: "$2.75B" },
      { labelKo: "만기", labelEn: "Maturity", value: "100년 (2117)", valueEn: "100 years (2117)" },
      { labelKo: "쿠폰", labelEn: "Coupon", value: "7.125%" },
      { labelKo: "오더북", labelEn: "Orderbook", value: "$9.75B (3.5x)" },
      { labelKo: "디폴트", labelEn: "Default", value: "2020 (9번째)", valueEn: "2020 (9th default)" },
    ],
    sections: [
      {
        heading: "2017년 아르헨티나 — 개혁의 환상",
        headingEn: "Argentina 2017 — The Reform Illusion",
        body:
`2017년 6월, 아르헨티나는 금융시장 역사에 길이 남을 채권을 발행했다. 100년 만기, $27억 5천만, 쿠폰 7.125%. 오더북은 $97억 5천만으로 발행액의 3.5배를 기록했다.

같은 해 6월, 아르헨티나는 'B' 등급 — 투기등급의 하단이었다. 1800년대부터 시작된 채무 불이행 역사에서 이 나라는 이미 여덟 차례 국가부도를 겪었다. 그중 2001년 디폴트는 당시 역사상 최대 규모였고, 2014년에도 기술적 디폴트가 발생했다.

그러나 2015년 집권한 마크리(Mauricio Macri) 대통령의 개혁 정책은 시장에 강한 기대감을 심었다. IMF와의 관계 복원, 홀드아웃 채권자(엘리엇 매니지먼트)와의 합의, 외환 통제 완화. 투자자들은 '이번에는 다르다'는 서사를 믿었다.

그리고 세계적 저금리 환경이 이 믿음에 연료를 공급했다. 2017년 독일 10년물 국채 수익률은 0.3~0.5%였다. 일본은 0% 근방. 미국도 2% 초반. 이 환경에서 아르헨티나의 7.125%는 극도로 매력적이었다.`,
        bodyEn:
`In June 2017, Argentina issued a bond that would go down in financial history. 100-year maturity, $2.75 billion face value, 7.125% coupon. The orderbook reached $9.75 billion — 3.5 times the issue size.

At the time, Argentina was rated 'B' — deep in speculative territory. Since the 1800s, this country had defaulted eight times on its sovereign debt. The 2001 default was the largest in history at the time; a technical default followed in 2014.

Yet President Mauricio Macri, who took office in 2015, had generated powerful market expectations with reform rhetoric. Restored relations with the IMF, settlement with holdout creditors (Elliott Management), removal of currency controls. Investors bought the narrative: "this time is different."

And the global zero-rate environment poured fuel on that belief. German 10-year bonds yielded 0.3–0.5% in 2017. Japan was near zero. The US barely above 2%. Against that backdrop, Argentina's 7.125% looked extraordinarily attractive.`,
      },
      {
        heading: "Reach for Yield — 왜 투자자들은 샀나",
        headingEn: "Reach for Yield — Why Investors Bought",
        body:
`3.5배 초과청약은 투자자들이 냉철하게 계산했다는 증거가 아니다. 그것은 Reach for Yield — 수익률을 위해 리스크 감수 기준을 낮추는 군집 행동의 산물이었다.

이 거래에 참여한 투자자 유형을 나눠보자. 첫째, 글로벌 자산운용사 중 EM 채권 펀드. 이들은 벤치마크 내 아르헨티나 비중을 맞추기 위해 구조적으로 매수 유인이 있었다. 둘째, 헤지펀드와 재정거래 투자자. '개혁 정권이 성공할 경우' 스프레드 압축에 따른 자본 차익을 노렸다. 셋째, 고수익 추구 소매 투자자들이 일부 참여했다.

정말 중요한 질문은 이것이다: 100년 뒤인 2117년에 아르헨티나가 존재하고, 채무를 이행하고, 이 채권 보유자들이 원금을 돌려받을 확률을 누가 얼마로 봤는가?

금융 이론상 이 채권의 적정 수익률을 추정하려면 100년간 매년 디폴트가 일어나지 않을 확률을 모두 곱해야 한다. 아르헨티나의 역사적 디폴트 빈도를 감안하면, 100년간 단 한 번도 디폴트가 없을 확률은 수학적으로 매우 낮다. 7.125%는 이 리스크를 전혀 충분히 보상하지 못했다.`,
        bodyEn:
`A 3.5x oversubscription is not evidence that investors calculated coldly. It was a product of Reach for Yield — the herding behavior of investors lowering their risk standards in pursuit of returns.

Consider the buyer types. First: EM bond funds at global asset managers, who had structural buying incentives to maintain benchmark Argentina weight. Second: hedge funds and macro investors chasing potential spread compression if Macri's reforms succeeded. Third: some high-yield-seeking retail participation.

The truly important question is this: what probability did any investor assign to Argentina existing in 2117, honoring its obligations, and actually paying principal back to this bond's holders?

Theoretically, to estimate a fair yield on a 100-year bond, you must compound the probability of no-default in each of 100 years. Given Argentina's historical default frequency — eight times in roughly 200 years — the mathematical probability of zero defaults over 100 years is extremely low. A 7.125% coupon does not come close to compensating for this risk. The deal was priced by momentum, not by risk calculus.`,
      },
      {
        heading: "3년 뒤 — 9번째 디폴트",
        headingEn: "Three Years Later — The Ninth Default",
        body:
`발행으로부터 3년도 지나지 않은 2020년 5월, 아르헨티나는 다시 디폴트를 선언했다. 사상 아홉 번째였다. 채권 가격은 100에서 30 이하로 붕괴했다. 70달러의 손실. 게다가 2020년은 COVID-19 팬데믹이 겹쳐 글로벌 EM 시장 전반이 타격을 받던 때였다.

직접적 원인은 마크리 개혁의 실패와 좌파 페론주의의 재집권(2019년 알베르토 페르난데스 대통령 당선)이었다. 달러 통제 재도입, IMF와의 갈등 재연. 시장이 '이번에는 다르다'고 믿었던 바로 그 요인들이 무력화됐다.

2020년 디폴트 이후 채무 재조정 협상이 진행됐다. 채권자들은 새 채권을 받았는데, 원금 대비 50~55센트 수준의 회복률이었다. 7.125% 쿠폰으로 단 3년을 받고 원금의 절반을 잃은 것이다.

이 사례는 Reach for Yield의 두 가지 이면을 완결하는 사례가 됐다: ① 고수익 채권에서 얻은 수익은 언제든 신용 손실로 돌아올 수 있다 ② 역사가 반복되는 이유는 '이번에는 다르다'는 서사가 매번 시장 참여자에게 먹히기 때문이다.`,
        bodyEn:
`Less than three years after issuance, in May 2020, Argentina declared its ninth sovereign default. The bond price collapsed from 100 to below 30 — a $70 loss on face value. This occurred with COVID-19 as backdrop, compounding EM-wide selling pressure.

The proximate causes were Macri's reform failure and the return of Peronist government (Alberto Fernández won in 2019). Dollar controls were reimposed; IMF relations deteriorated. Every factor markets had labeled "different this time" had unraveled.

Following the 2020 default, restructuring negotiations concluded. Creditors received new bonds — at approximately 50–55 cents on the dollar recovery. Investors had collected three years of 7.125% coupons and lost roughly half their principal.

The case became the definitive illustration of Reach for Yield's two-sided risk: ① high-yield income can be erased at any time by credit losses ② the reason history repeats is that "this time is different" narratives work on market participants every single time.`,
      },
      {
        heading: "듀레이션 리스크 — 100년물의 수학",
        headingEn: "Duration Risk — The Mathematics of a 100-Year Bond",
        body:
`아르헨티나 100년물은 신용 리스크뿐 아니라 듀레이션 리스크의 교과서이기도 하다. 100년물의 수정 듀레이션은 약 20~25년이다. 이는 금리가 1%p 오르면 채권 가격이 약 20~25% 하락한다는 의미다.

발행 시 수익률이 7.125%였는데, 2018년 아르헨티나 금융위기로 페소 폭락과 함께 USD 채권 금리도 급등했다. 수익률이 10%대로 올라갔을 때 가격은 70달러 이하로 내려갔다. 이는 디폴트가 발생하기 전, 순수히 수익률 변화에 의한 가격 하락이었다.

100년물이 발행되는 이유는 발행사 입장에서 초장기 고정 자금을 조달할 수 있기 때문이다. 금리가 낮을 때 발행해 100년 동안 그 낮은 금리를 고정시키는 것이 목표다. 투자자 입장에서는 초장기 채권은 금리 하락 시 엄청난 자본 차익을 제공한다 — 그러나 그 반대도 성립한다.

아르헨티나 100년물 투자자들은 신용 리스크(디폴트)와 금리 리스크(듀레이션)를 동시에 감내했다. 두 가지 모두 최악의 방향으로 작동했다.`,
        bodyEn:
`Argentina's century bond is a case study not only in credit risk but in duration risk mathematics. A 100-year bond's modified duration is approximately 20–25 years — meaning a 1 percentage point increase in yield causes roughly a 20–25% price decline.

Issued at 7.125%, the bond was already under severe stress from Argentina's 2018 financial crisis (peso collapse) before the 2020 default. When yields surged into the teens, prices fell below $70 purely on yield movement — before any default event.

Why do century bonds get issued? From the issuer's perspective: locking in ultra-long fixed funding when rates are low — fixing 100 years of borrowing cost in a single transaction. From the investor's perspective: ultra-long bonds offer enormous capital appreciation in rate rallies — but symmetrically, enormous losses in selloffs.

Argentina century bond investors were simultaneously exposed to credit risk (default) and rate risk (duration). Both worked against them simultaneously.`,
      },
      {
        heading: "시장의 교훈 — Reach for Yield의 대가",
        headingEn: "Market Lessons — The Price of Reach for Yield",
        body:
`아르헨티나 100년물이 남긴 질문들은 지금도 채권시장에 울린다.

첫째, 신용 분석 vs. 시장 모멘텀. 2017년 3.5배 초과청약은 투자자 다수가 아르헨티나의 100년 신용 리스크를 냉철히 분석한 결과가 아니라, 시장 모멘텀과 Reach for Yield에 쓸려간 결과였다. 벤치마크 추종 운용사, 수익률 갈증이 심한 연기금, 단기 스프레드 압축을 노린 헤지펀드 — 모두 서로 다른 이유로 같은 방향으로 움직였다.

둘째, "이번에는 다르다"의 영원한 유혹. 마크리 개혁, 홀드아웃 해소, IMF 복귀 — 아르헨티나는 매 정권마다 서사를 만들고 시장은 그 서사를 믿었다. 이 패턴 자체가 아르헨티나의 반복되는 디폴트 역사의 일부다.

셋째, 100년의 함의. 100년물은 국가의 생사를 기준으로 베팅하는 계약이다. 발행체가 100년 뒤에도 국가로서 존재할지, 화폐가 안정적일지, 정치 체제가 채무를 이행할지 — 이 모든 것은 전통적 신용 분석의 범위를 넘어선다. 아르헨티나 100년물은 그 한계를 가장 극단적으로 보여준 사례다.`,
        bodyEn:
`The questions Argentina's century bond raised still echo through bond markets today.

First: credit analysis vs. market momentum. The 3.5x oversubscription in 2017 was not the product of rigorous 100-year credit analysis. It was momentum and Reach for Yield. Benchmark-tracking managers, yield-starved pension funds, spread-compression-seeking hedge funds — each moved in the same direction for different reasons, creating a wave that overwhelmed individual risk judgment.

Second: the eternal temptation of "this time is different." Macri reforms, holdout resolution, IMF return — Argentina generates a compelling reform narrative with each new government, and markets accept it each time. This pattern itself is part of Argentina's default cycle.

Third: the implications of 100 years. A century bond is fundamentally a bet on the existence and solvency of a nation-state across 100 years. Whether the issuer survives as a nation, whether its currency is stable, whether its political system honors debts — all of this is beyond the scope of traditional credit analysis. Argentina's century bond demonstrated this limit in the most extreme possible fashion.`,
      },
    ],
    keyTerms: [
      {
        term: "Reach for Yield (수익률 추구)",
        termEn: "Reach for Yield",
        definition: "저금리 환경에서 투자자들이 더 높은 수익을 얻기 위해 자신의 리스크 감내 기준을 초과하는 위험 자산을 매입하는 행동. 아르헨티나 100년물 오더북이 3.5배 초과청약된 것은 이 행동이 집단적으로 작동한 전형적 사례다.",
        definitionEn: "Investor behavior in low-rate environments where buyers accept risk beyond their normal mandates to generate higher returns. The 3.5x oversubscription of Argentina's century bond is the archetypal example of this behavior operating collectively.",
      },
      {
        term: "수정 듀레이션 (Modified Duration)",
        termEn: "Modified Duration",
        definition: "금리가 1%p 변화할 때 채권 가격이 변화하는 비율(%). 수정 듀레이션이 20이면 금리 1%p 상승 시 채권 가격은 약 20% 하락한다. 100년물은 수정 듀레이션이 20~25 수준으로 일반 10년물의 2~3배에 달한다.",
        definitionEn: "The percentage change in bond price for a 1 percentage point change in yield. A modified duration of 20 means a 1% yield rise causes approximately 20% price decline. Century bonds have modified durations of 20–25, roughly 2–3x that of a typical 10-year bond.",
      },
      {
        term: "홀드아웃 채권자 (Holdout Creditor)",
        termEn: "Holdout Creditor",
        definition: "채무 재조정 협상에서 조건에 합의하지 않고 버티면서 전액 상환을 요구하는 채권자. 2001년 아르헨티나 디폴트 이후 엘리엇 매니지먼트가 최대 홀드아웃으로 유명해졌다. 마크리 정부가 2016년 이들과 합의한 것이 2017년 100년물 발행을 가능케 한 선결 조건이었다.",
        definitionEn: "A creditor who refuses to accept restructuring terms and holds out for full repayment. Elliott Management became the most famous holdout from Argentina's 2001 default. The Macri government's 2016 settlement with holdouts was the precondition that enabled the 2017 century bond issuance.",
      },
      {
        term: "Serial Defaulter (상습 디폴트 국가)",
        termEn: "Serial Defaulter",
        definition: "역사적으로 반복적으로 국가부도를 선언한 국가. 아르헨티나는 1800년대부터 독립 이후 9차례 디폴트를 기록한 대표적 사례다. 학계에서는 이를 'original sin(원죄)'의 일종으로, 제도적·정치적 구조가 채무 이행 인센티브를 반복적으로 약화시키는 패턴으로 분석한다.",
        definitionEn: "A country with a history of repeated sovereign defaults. Argentina, with nine defaults since independence beginning in the 1800s, is the canonical case. Academics analyze this as a form of 'original sin' — institutional and political structures that repeatedly undermine debt-service incentives.",
      },
    ],
    relatedMarket101Slugs: ["dcm-ecosystem", "reach-for-yield", "duration-risk"],
    relatedDealSlugs: ["argentina-vs-elliott", "greece-debt-restructuring"],
    executiveSummary: {
      ko: [
        "2017년 6월, 9차례 디폴트 전력의 아르헨티나가 7.125% 100년물 $2.75B 발행 — 오더북 3.5배 초과청약",
        "글로벌 저금리(독일 0.4%, 일본 0%)가 만든 Reach for Yield — 투자자들이 리스크 분석보다 수익률에 쏠림",
        "마크리 개혁 서사('이번에는 다르다') + 홀드아웃 채권자 해소가 시장 낙관론에 연료 공급",
        "2020년 5월 9번째 디폴트, 채권 가격 30달러 이하 붕괴 — 3년 쿠폰 합산해도 원금 절반 손실",
        "역사상 가장 완벽한 Reach for Yield 교과서: 수익률 추구가 신용 분석을 압도할 때 무슨 일이 벌어지는가",
      ],
      en: [
        "June 2017: Argentina — 9-time defaulter — issued $2.75B in 100-year bonds at 7.125%; 3.5x oversubscribed",
        "Global zero-rate environment (Germany 0.4%, Japan 0%) created Reach for Yield: investors chasing returns over risk analysis",
        "Macri reform narrative ('this time is different') + holdout creditor resolution fueled market optimism",
        "May 2020: ninth default; bond price collapsed below $30 — even with 3 years of coupons, investors lost half their principal",
        "The most complete Reach for Yield case study in history: what happens when yield-seeking overwhelms credit discipline",
      ],
    },
    assessment: {
      positives: [
        "$2.75B 전액 발행 성공 + 3.5배 초과청약 — 마크리 개혁 기대감에 힘입어 당시 시장 접근성 완전 회복",
        "7.125% 고금리 3년간 수취 — 발행 직후 3년간 투자자들은 쿠폰 수익을 얻었으나 이는 최종 손실로 상쇄됨",
        "아르헨티나의 국제 자본시장 복귀 신호 — 2001년 디폴트 이후 가장 대담한 장기 자금 조달 성공",
        "Reach for Yield 현상 실물 교재 — 이 딜 자체가 이후 투자 교육과 리스크 관리 논의에서 핵심 사례가 됨",
      ],
      positivesEn: [
        "Full $2.75B placement + 3.5x oversubscription — complete restoration of market access under Macri reform expectations",
        "7.125% coupon received for 3 years — investors earned income in the short term, subsequently offset by principal loss",
        "Signal of Argentina's return to international capital markets — boldest long-term financing since the 2001 default",
        "Living textbook of Reach for Yield — the deal itself became a core case study in investment education and risk management",
      ],
      risks: [
        "2020년 9번째 디폴트 — 원금 대비 회복률 50~55센트, 총 손실 40~45% 이상",
        "수정 듀레이션 20~25년 — 금리 1%p 상승 시 가격 20~25% 하락, 신용리스크에 금리리스크 중첩",
        "'이번에는 다르다' 서사의 재활용 — 아르헨티나는 매 정권마다 개혁 기대감을 만들고 그 서사는 반복적으로 붕괴",
        "100년 지평의 본질적 불확실성 — 국가 존속·통화 안정성·정치 체제 이행 의지를 100년 범위로 분석하는 것은 불가능",
      ],
      risksEn: [
        "2020 ninth default — 50–55 cent recovery on principal; total loss of 40–45%+ even counting coupon income",
        "Modified duration 20–25 years — a 1% yield rise causes 20–25% price decline; credit risk stacked on rate risk",
        "Recycled 'this time is different' narrative — Argentina generates reform expectations each administration; each collapses",
        "Fundamental 100-year uncertainty — analyzing sovereign solvency, currency stability, and political debt-service will over 100 years is analytically impossible",
      ],
    },
    faq: [
      {
        q: "왜 투자자들은 아르헨티나가 과거에 여러 번 디폴트했음에도 불구하고 100년물을 샀나요?",
        qEn: "Why did investors buy Argentina's 100-year bond despite its history of multiple defaults?",
        a: "세 가지 이유가 복합적으로 작용했습니다. 첫째, Reach for Yield — 2017년 독일 국채 수익률이 0.4%, 일본은 0%였습니다. 어딘가에서 수익을 내야 하는 투자자들에게 7.125%는 거부하기 어려운 숫자였습니다. 둘째, '이번에는 다르다' 서사 — 마크리 정부의 개혁, 홀드아웃 채권자 해결, IMF와의 관계 복원이 '아르헨티나가 변했다'는 기대를 만들었습니다. 셋째, 벤치마크 강제 매수 — 아르헨티나가 EM 채권 인덱스에 편입되어 있어 벤치마크를 추종하는 운용사들은 구조적으로 매수해야 했습니다.",
        aEn: "Three factors combined. First, Reach for Yield: German bonds yielded 0.4%, Japan near zero. For investors needing to generate returns, 7.125% was difficult to refuse. Second, the 'this time is different' narrative: Macri reforms, holdout resolution, IMF restoration all built expectations that Argentina had changed. Third, benchmark-forced buying: Argentina's inclusion in EM bond indices meant tracking managers had structural buying requirements regardless of individual view.",
      },
      {
        q: "100년물 채권은 어떻게 가격이 책정되나요? 실질적인 가치 계산이 가능한가요?",
        qEn: "How are century bonds priced? Is it possible to calculate their actual value?",
        a: "이론적으로는 모든 미래 쿠폰과 원금 상환을 할인해 현재 가치를 계산합니다. 그러나 100년물의 경우 현재 가치의 대부분이 최초 20~30년 현금 흐름에 집중됩니다 — 수익률이 7%라면 100년 뒤 원금의 현재 가치는 1달러 미만입니다. 실질적 가격 결정 요소는 ① 현재 수익률 곡선의 초장기 구간 ② 발행체 신용 스프레드 ③ 수요-공급입니다. 아르헨티나의 경우 '100년간 아르헨티나가 연속으로 지급할 확률'은 아무도 진지하게 계산하지 않았고, 단기 수익률 갈증과 시장 모멘텀이 가격을 결정했습니다.",
        aEn: "In theory, you discount all future coupons and principal repayment to present value. But for century bonds, the present value is overwhelmingly concentrated in the first 20–30 years of cash flows — at a 7% yield, the present value of principal repaid in 100 years is less than $1. The practical pricing drivers are: (1) the ultra-long end of the current yield curve, (2) the issuer's credit spread, and (3) supply and demand. For Argentina, nobody seriously calculated 'the probability Argentina makes 100 consecutive payments' — short-term yield hunger and market momentum determined the price.",
      },
      {
        q: "2020년 디폴트 이후 채권자들은 결국 얼마를 회수했나요?",
        qEn: "How much did bondholders ultimately recover after the 2020 default?",
        a: "2020년 8월 완료된 채무 재조정에서 채권자들은 액면가 기준 약 54.8센트에 해당하는 새 채권 패키지를 받았습니다. 정확히는 2030년, 2035년, 2038년, 2041년 만기의 신규 채권들로 구성됐습니다. 여기에 미지급 이자 일부가 포함됐습니다. 세 차례 쿠폰(2017~2020년 약 21%) 수취를 감안해도, 총 원리금 기준 회복률은 75~80센트 수준이었습니다. 투자자들은 3년 간 7.125%를 받았지만 원금의 45%를 잃었습니다.",
        aEn: "In the restructuring completed in August 2020, bondholders received a package of new bonds worth approximately 54.8 cents on the dollar in face value — structured as new bonds maturing in 2030, 2035, 2038, and 2041. Including accrued interest, total recovery was roughly 75–80 cents on the dollar in combined coupon plus new bond value. Investors had collected three years of 7.125% coupons but lost approximately 45% of principal.",
      },
      {
        q: "아르헨티나 100년물 사태에서 DCM 뱅커들의 역할과 책임은 무엇인가요?",
        qEn: "What was the role and responsibility of DCM bankers in the Argentina century bond story?",
        a: "주관사인 씨티그룹, HSBC, 노무라, 산탄데르는 구조 설계, 투자자 모집, 가격 결정을 담당했습니다. DCM 뱅커의 역할은 발행사(아르헨티나 정부)를 대리해 최선의 조건으로 시장에서 자금을 조달하는 것입니다. 법적으로 뱅커는 투자자의 이익을 보호할 의무가 없습니다 — 그것은 투자자 스스로의 책임입니다. 그러나 이 딜은 DCM 업계에서 도덕적 논쟁을 불러일으켰습니다: 발행사가 성공적으로 자금을 조달했지만 투자자들이 대규모 손실을 입은 경우, 뱅커의 시장 평판과 장기적 관계 관리에는 어떤 함의가 있는가?",
        aEn: "The lead managers — Citigroup, HSBC, Nomura, and Santander — handled structuring, investor solicitation, and pricing. A DCM banker's mandate is to raise capital for the issuer (the Argentine government) on the best possible terms. Legally, bankers have no duty to protect investor interests — that is the investor's own responsibility. However, this deal sparked ethical debate within DCM: when an issuer successfully raises capital but investors suffer massive losses, what are the implications for bankers' market reputation and long-term relationship management?",
      },
      {
        q: "아르헨티나 100년물 이후 다른 나라들도 100년물을 발행했나요?",
        qEn: "Did other countries issue century bonds after Argentina's experience?",
        a: "아르헨티나 사태에도 불구하고 100년물 발행은 계속됐습니다. 오스트리아는 2017년 AA+ 등급으로 100년물을 발행해 이후 가격이 230까지 올랐다가 2022년 금리 급등으로 46까지 추락했습니다. 멕시코는 2010년 최초 EM 100년물 발행 이후 여러 차례 추가 발행했습니다. 아일랜드(2016), 미국 대학교(MIT, 조지아텍 등)도 100년물을 발행했습니다. 발행이 계속되는 이유는 발행사 입장에서 초장기 고정 자금을 확보하는 이점이 크고, 투자자 중에도 장기 부채를 매칭해야 하는 연기금·보험사 등 진정한 수요가 있기 때문입니다.",
        aEn: "Despite Argentina's experience, century bond issuance continued. Austria issued a AAA-rated century bond in 2017 whose price surged to 230 before crashing to 46 in the 2022 rate spike. Mexico issued the first EM century bond in 2010 and has tapped it multiple times. Ireland (2016) and US universities (MIT, Georgia Tech) also issued century bonds. Issuance continues because issuers genuinely benefit from locking in ultra-long fixed funding, and real demand exists among pension funds and insurers that need to match long-duration liabilities.",
      },
    ],
    references: [
      {
        id: 1,
        author: "Republic of Argentina",
        title: "Final Prospectus Supplement — 7.125% Notes due 2117",
        source: "SEC Filing, June 2017",
        year: "2017",
      },
      {
        id: 2,
        author: "IMF",
        title: "Argentina: Stand-By Arrangement — Third Review",
        source: "IMF Country Report No. 19/25",
        year: "2019",
        url: "https://www.imf.org/en/Publications/CR/Issues/2019/01/25/Argentina-Stand-By-Arrangement-Third-Review-46526",
      },
      {
        id: 3,
        author: "Cruces, Juan J. and Trebesch, Christoph",
        title: "Sovereign Defaults: The Price of Haircuts",
        source: "American Economic Journal: Macroeconomics, Vol. 5, No. 3",
        year: "2013",
      },
      {
        id: 4,
        author: "Reinhart, Carmen M. and Rogoff, Kenneth S.",
        title: "This Time Is Different: Eight Centuries of Financial Folly",
        source: "Princeton University Press",
        year: "2009",
      },
    ],
  },

  {
    slug: "austria-100yr",
    title: "오스트리아 100년물 (2017) — 듀레이션의 두 얼굴",
    titleEn: "Austria 100-Year Bond (2017) — Duration's Double Edge",
    category: "sovereign",
    categoryLabel: "Sovereign",
    categoryLabelEn: "Sovereign",
    excerpt: "금리 하락기에 2배 폭등, 금리 상승기에 80% 폭락. 우량채도 듀레이션으로 주식만큼 변동성 클 수 있다.",
    excerptEn: "Doubled in a rate rally, then crashed 80% in the rate selloff. Top-rated bonds can be as volatile as stocks when duration is extreme.",
    dealYear: 2017,
    issuer: "Republic of Austria",
    issuerEn: "Republic of Austria",
    readingMinutes: 11,
    tags: ["Sovereign", "100년물", "듀레이션", "금리리스크", "오스트리아"],
    tagsEn: ["Sovereign", "Century Bond", "Duration", "Rate Risk", "Austria"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Republic of Austria" },
      { labelKo: "발행연도", labelEn: "Year", value: "Sept 2017" },
      { labelKo: "발행규모", labelEn: "Size", value: "€3.5B (총 tap 포함)", valueEn: "€3.5B (incl. taps)" },
      { labelKo: "만기", labelEn: "Maturity", value: "100년 (2117)", valueEn: "100 years (2117)" },
      { labelKo: "쿠폰", labelEn: "Coupon", value: "2.1%" },
      { labelKo: "등급", labelEn: "Rating", value: "AA+/Aa1" },
      { labelKo: "최고가", labelEn: "Peak Price", value: "230 (2020)" },
      { labelKo: "최저가", labelEn: "Trough Price", value: "~46 (2022)" },
    ],
    sections: [
      {
        heading: "AA+ 국가가 100년물을 발행한 이유",
        headingEn: "Why a AA+ Sovereign Issued a Century Bond",
        body:
`2017년 9월, 오스트리아 공화국은 역사에서 가장 극단적인 듀레이션 실험 중 하나를 시작했다. €20억 규모의 100년 만기 국채 — 쿠폰 2.1%, 2117년 만기.

오스트리아는 왜 100년물을 발행했는가? 이유는 단순하다: 2017년은 유럽 금리 역사상 가장 낮은 수준이었고, 오스트리아 정부는 이 낮은 금리를 100년 동안 고정시킬 기회를 포착했다. 오스트리아의 일반 10년물 수익률은 당시 1% 미만이었다. 100년물은 2.1%에 발행됐다 — 발행사 입장에서 매우 저렴한 자금 조달이었다.

투자자 수요도 강했다. 오더북은 약 €115억으로 발행액의 5.7배였다. AA+/Aa1 등급의 유럽 AAA권 국가 채권에서 2.1%는 ECB 마이너스 금리 환경에서 매력적이었다. 특히 장기 부채를 가진 생명보험사, 연기금이 초장기 자산으로 매칭 수요를 갖고 있었다.

발행 성공 이후 오스트리아는 이 채권을 여러 차례 탭(tap)해 총 발행 잔액을 €35억으로 늘렸다.`,
        bodyEn:
`In September 2017, the Republic of Austria launched one of the most extreme duration experiments in bond market history: €2 billion in 100-year government bonds, 2.1% coupon, maturing 2117.

Why did Austria issue a century bond? The reason is straightforward: 2017 was a historically low-rate environment in Europe, and the Austrian government seized the opportunity to lock in that cheap funding for 100 years. Austria's standard 10-year bond yield was below 1% at the time. The century bond priced at 2.1% — extraordinarily cheap long-term funding by any historical standard.

Investor demand was fierce. The orderbook reached approximately €11.5 billion — 5.7x the initial issue size. In an ECB negative-rate environment, 2.1% from a AA+/Aa1-rated eurozone sovereign was attractive. Life insurers and pension funds with long-duration liabilities in particular had genuine matching demand for ultra-long assets.

Following the initial placement, Austria tapped the bond multiple times, growing total outstanding to €3.5 billion.`,
      },
      {
        heading: "2020년 — 100년물의 황금기",
        headingEn: "2020 — The Century Bond's Golden Moment",
        body:
`발행 3년 뒤인 2020년, 오스트리아 100년물 가격은 230을 넘었다. 발행가 대비 130% 이상의 가격 상승.

이유는 단순하다: COVID-19 팬데믹으로 유럽중앙은행(ECB)이 금리를 추가 인하하고 자산 매입 프로그램(PEPP)을 대폭 확대했다. 독일 10년물 수익률이 -0.7%까지 떨어졌다. 금리가 내려갈수록 기존에 발행된 채권의 가격은 올라간다 — 특히 듀레이션이 긴 채권일수록 더 크게.

오스트리아 100년물의 수정 듀레이션은 약 47~50년 수준이다(쿠폰 2.1%, 만기 100년 기준). 수익률이 1%p 하락하면 가격이 47~50% 상승한다는 의미다. 2017년 발행 시 수익률 약 2.1%에서 2020년 최저점 0.6%대로 약 1.5%p 하락했다 — 그 결과가 130%의 가격 상승이었다.

이 시점에서 오스트리아 100년물을 보유한 투자자들은 짧은 기간에 엄청난 수익을 얻었다. 특히 2017년 발행 시 매입한 후 2020년에 매도한 투자자들은 채권에서 주식 같은 수익률을 경험했다.`,
        bodyEn:
`Three years after issuance, in 2020, Austria's century bond price exceeded 230 — more than 130% above par.

The reason is simple: the COVID-19 pandemic prompted the ECB to further cut rates and massively expand its asset purchase program (PEPP). German 10-year yields fell to -0.7%. The lower rates fall, the higher existing bond prices rise — especially bonds with long duration.

Austria's century bond has a modified duration of approximately 47–50 years (at a 2.1% coupon, 100-year maturity). A 1 percentage point decline in yield produces roughly a 47–50% price increase. The yield fell approximately 1.5 percentage points from the 2017 issuance level (~2.1%) to the 2020 low (~0.6%) — producing the 130% price surge.

Investors holding the century bond at this point had earned equity-like returns from a government bond in a short period. Those who bought at issuance in 2017 and sold in 2020 experienced a remarkable outcome that almost no bond market participant had anticipated when the deal was originally priced.`,
      },
      {
        heading: "2022년 — 금리 상승의 역습",
        headingEn: "2022 — The Rate Reversal",
        body:
`그러나 듀레이션은 양날의 검이다. 2022년 러시아의 우크라이나 침공과 인플레이션 급등으로 ECB는 사상 최대 속도의 금리 인상에 나섰다. 2022년 한 해에만 ECB 기준금리가 0%에서 2.5%로 급등했다.

오스트리아 100년물의 수익률은 2020년 저점 0.6%에서 2022년 말 2.5~3%로 약 2%p 급등했다. 수정 듀레이션 50 기준으로 2%p 수익률 상승 = 약 100%의 가격 하락 압력. 실제로 가격은 2020년 고점 230에서 2022년 말 46까지 추락했다. 80% 가까운 가격 하락.

이 숫자를 맥락에 놓아 보자. 2022년 글로벌 금융시장에서 S&P 500 지수가 약 19% 하락했다. 나스닥은 약 33% 하락했다. '안전 자산'이라 불리는 AA+ 등급 오스트리아 국채는 80% 하락했다. 주식 시장보다 훨씬 더 떨어진 것이다.

이 현상의 본질은: 신용 리스크가 없어도, 듀레이션 리스크만으로 채권은 주식보다 더 큰 변동성을 가질 수 있다. 100년물은 금리 1%p 변화에 50%p 가격 변화가 따른다 — 이것은 레버리지 상품과 유사한 금리 감도다.`,
        bodyEn:
`But duration is a double-edged sword. Russia's invasion of Ukraine in 2022 and surging inflation prompted the ECB to hike rates at its fastest pace in history. The ECB base rate went from 0% to 2.5% in a single year.

Austria's century bond yield surged from its 2020 low of ~0.6% to roughly 2.5–3% by end-2022 — an approximately 2 percentage point increase. With a modified duration of ~50, a 2% yield rise translates to roughly 100% downward price pressure. The bond fell from its 2020 peak of 230 to approximately 46 by end-2022 — nearly an 80% price decline.

Put this in context: In 2022, the S&P 500 fell approximately 19%. The Nasdaq fell roughly 33%. AA+-rated Austrian government bonds — categorized as "safe assets" — fell 80%. Far more than the stock market.

The core insight: even without any credit risk, duration risk alone can make bonds more volatile than equities. A century bond carries approximately 50% price sensitivity per 1% yield move — comparable to the rate sensitivity of leveraged instruments.`,
      },
      {
        heading: "듀레이션 수학 — 100년물을 이해하는 방정식",
        headingEn: "Duration Mathematics — The Equation Behind Century Bonds",
        body:
`듀레이션을 숫자로 이해해야 100년물이 왜 이렇게 움직이는지 알 수 있다.

맥컬리 듀레이션(Macaulay Duration): 채권의 현금 흐름(쿠폰과 원금)을 각 시점의 가중치로 평균한 값. 쉽게 말해, 채권에 투자한 돈을 회수하는 데 걸리는 평균 시간(연).

수정 듀레이션(Modified Duration) = 맥컬리 듀레이션 ÷ (1 + YTM). 이것이 금리 1%p 변화에 대한 가격 변화율(%)이다.

오스트리아 100년물 계산:
• 쿠폰: 2.1%, 발행 수익률: 2.1% (at par)
• 맥컬리 듀레이션: 약 48년
• 수정 듀레이션: 48 ÷ 1.021 ≈ 47년

금리 1%p 상승 → 가격 약 47% 하락
금리 1%p 하락 → 가격 약 47% 상승

반면 일반 10년물(쿠폰 1%, 수익률 1%):
• 수정 듀레이션: 약 9.5년
• 금리 1%p 변화 → 가격 9.5% 변화

100년물은 10년물 대비 약 5배의 금리 감도를 갖는다. 이것이 230→46의 움직임을 만든 메커니즘이다.`,
        bodyEn:
`Understanding duration mathematics is essential to grasping why century bonds move so violently.

Macaulay Duration: the weighted average time until a bond's cash flows (coupons and principal) are received. In plain terms: how many years until you've collected, on average, the money you invested.

Modified Duration = Macaulay Duration ÷ (1 + YTM). This is the percentage price change for a 1 percentage point change in yield.

Austria century bond calculation:
• Coupon: 2.1%, issue yield: 2.1% (at par)
• Macaulay Duration: approximately 48 years
• Modified Duration: 48 ÷ 1.021 ≈ 47 years

1% rate rise → ~47% price decline
1% rate fall → ~47% price rise

Compare to a standard 10-year bond (1% coupon, 1% yield):
• Modified Duration: approximately 9.5 years
• 1% yield change → 9.5% price change

A century bond has approximately 5x the rate sensitivity of a 10-year bond. That is the mechanism that produced the 230→46 journey.`,
      },
      {
        heading: "투자자 유형과 교훈",
        headingEn: "Investor Types and Market Lessons",
        body:
`오스트리아 100년물을 산 투자자들은 누구이고, 그들은 무엇을 경험했나?

생명보험사와 연기금: 이들은 장기 부채를 보유하고 있어 초장기 자산으로 매칭해야 한다. 100년물은 이 목적에 부합한다. 이들 투자자들은 가격 변동성보다 현금 흐름 매칭을 중요시하므로, 가격 등락 자체가 운용상 핵심 이슈가 아닐 수 있다.

헤지펀드와 매크로 펀드: 금리 하락 방향에 배팅해 자본 차익을 노렸다. 2020년에 매도했다면 엄청난 수익을 거뒀다. 타이밍이 중요했고, 성공한 투자자도 많았다.

패시브 인덱스 펀드: 유로존 국채 인덱스를 추종하는 펀드는 구조적으로 이 채권을 보유해야 한다. 2022년 금리 급등 시 이 펀드들은 시가 기준 대규모 손실을 기록했다.

오스트리아 100년물이 남긴 교훈:
① 신용 품질 ≠ 안전성: AA+ 등급도 듀레이션이 극단적이면 80% 손실이 가능
② 금리 방향성 베팅의 양날: 2020년 성공이 2022년 실패의 대칭
③ 발행체 입장: 역사적 저금리에 100년을 고정시켰고, 이는 발행체에게는 성공적 전략
④ 투자자 운용 지평의 중요성: 진정한 초장기 투자자(연기금)에게는 적합, 단기 투자자에게는 부적합`,
        bodyEn:
`Who bought Austria's century bond, and what did they experience?

Life insurers and pension funds: holding long-duration liabilities, they need ultra-long assets for matching. The century bond serves this purpose precisely. These investors prioritize cash flow matching over mark-to-market volatility — price swings may not be an operational concern for them.

Hedge funds and macro traders: positioned for rate declines to capture capital appreciation. Those who sold in 2020 made extraordinary returns. Timing was critical, and many succeeded.

Passive index funds: funds tracking eurozone government bond indices must hold this bond structurally. In the 2022 rate spike, these funds recorded massive mark-to-market losses.

Key lessons from Austria's century bond:
① Credit quality ≠ safety: AA+ rating does not prevent 80% losses when duration is extreme
② Two-sided rate directional bet: 2020 success and 2022 failure are the same trade's two faces
③ Issuer perspective: locking in 100 years of historically cheap funding was a successful strategic decision
④ Investment horizon matters: suited for true long-duration investors (pension funds); unsuited for short-horizon investors`,
      },
    ],
    keyTerms: [
      {
        term: "수정 듀레이션 (Modified Duration)",
        termEn: "Modified Duration",
        definition: "금리 1%p 변화에 대한 채권 가격의 변화율(%). 오스트리아 100년물의 수정 듀레이션은 약 47년 — 금리가 1%p 오르면 가격이 약 47% 하락한다. 일반 10년물(약 9~10년)의 5배에 달하는 수준이다.",
        definitionEn: "The percentage change in bond price for a 1 percentage point change in yield. Austria's century bond has a modified duration of approximately 47 years — a 1% yield rise causes ~47% price decline. About 5x the duration of a standard 10-year bond (~9–10 years).",
      },
      {
        term: "볼록성 (Convexity)",
        termEn: "Convexity",
        definition: "듀레이션이 금리 변화에 따라 자체적으로 변하는 성질. 볼록성이 클수록 금리 하락 시 가격 상승 폭이 수학적으로 예측한 것보다 크고, 금리 상승 시 가격 하락 폭은 예측보다 작다. 초장기채는 볼록성이 매우 높아 금리 방향이 유리할 때 기대 이상의 수익을 제공한다.",
        definitionEn: "The property by which a bond's duration itself changes as yields change. Higher convexity means price gains on rate declines exceed the duration-predicted amount, while price losses on rate rises are smaller than predicted. Ultra-long bonds have very high convexity, providing above-expected returns when rate direction is favorable.",
      },
      {
        term: "자산-부채 매칭 (ALM)",
        termEn: "Asset-Liability Matching (ALM)",
        definition: "생명보험사·연기금이 장기 부채(보험금 지급 의무, 연금 지급 의무)와 동일한 만기·현금 흐름 구조의 자산을 보유해 금리 리스크를 헤지하는 전략. 이 관점에서 100년물은 부채 듀레이션이 긴 기관들에게 구조적으로 적합한 투자 수단이다.",
        definitionEn: "A strategy used by life insurers and pension funds to hedge interest rate risk by holding assets with cash flows that match their long-duration liabilities (insurance payouts, pension obligations). From this perspective, century bonds are structurally appropriate for institutions with long-duration liabilities.",
      },
      {
        term: "금리 리스크 (Interest Rate Risk)",
        termEn: "Interest Rate Risk",
        definition: "금리 변화로 인해 채권 가격 또는 포트폴리오 가치가 변동하는 리스크. 신용 리스크(발행체 부도)와 다른 독립적 리스크 요인이다. 오스트리아 100년물 사례는 신용 리스크가 전혀 없어도 금리 리스크만으로 80% 손실이 가능함을 보여주는 가장 강력한 실증 사례다.",
        definitionEn: "The risk that bond prices or portfolio values change due to interest rate movements. A separate and independent risk factor from credit risk (issuer default). Austria's century bond is the most powerful empirical demonstration that credit-risk-free bonds can still lose 80% through interest rate risk alone.",
      },
    ],
    relatedMarket101Slugs: ["dcm-ecosystem", "duration-risk", "rate-risk"],
    relatedDealSlugs: ["argentina-100yr", "mexico-century-bond"],
    executiveSummary: {
      ko: [
        "2017년 9월 오스트리아 AA+ 등급 100년물 €20억 발행 — 쿠폰 2.1%, 수정 듀레이션 약 47년",
        "발행 성공 배경: ECB 마이너스 금리 환경, 생보사·연기금의 ALM 수요, 5.7배 초과청약",
        "2020년 COVID 금리 하락으로 가격 230 돌파 — 3년 만에 130% 자본 차익, 채권의 주식화",
        "2022년 ECB 금리 인상으로 가격 46까지 폭락 — 80% 손실, S&P500(-19%)보다 4배 이상 하락",
        "핵심 교훈: 신용등급 AA+도 듀레이션이 50년이면 레버리지 투자와 동등한 금리 감도를 가진다",
      ],
      en: [
        "Sept 2017: Austria AA+ issued €2B in 100-year bonds at 2.1% coupon; modified duration ~47 years; 5.7x oversubscribed",
        "Issuance drivers: ECB negative rates, life insurer/pension fund ALM demand for ultra-long assets",
        "2020: COVID rate decline pushed price past 230 — 130% capital gain in 3 years; bond behaving like equity",
        "2022: ECB rate hikes collapsed price to ~46 — 80% loss; far worse than S&P500 (-19%) in the same period",
        "Core lesson: AA+ credit quality does not prevent 80% losses when duration is ~50 years; century bonds have leveraged rate sensitivity",
      ],
    },
    assessment: {
      positives: [
        "오스트리아 발행사 관점: 역사적 저금리(2.1%)를 100년 고정 — 향후 수십 년간 저비용 장기 자금 확보",
        "2020년 투자자 성과: 발행가 대비 130% 이상 가격 상승, 금리 하락 방향 베팅 성공 시 탁월한 수익",
        "생보·연기금 ALM 수단: 장기 부채 매칭에 적합한 초장기 국채로서 포트폴리오 금리 리스크 감소",
        "유럽 초장기물 시장 선도: 유로존에서 가장 성공적인 국채 100년물로 이 시장의 기준가 형성",
      ],
      positivesEn: [
        "Issuer perspective: locked in historically cheap funding (2.1%) for 100 years — ultra-low cost long-term capital",
        "2020 investor returns: 130%+ price appreciation from par; outstanding performance for those correctly positioned on rate direction",
        "Life insurer/pension ALM instrument: ultra-long government bond suitable for matching long-duration liabilities",
        "Eurozone ultra-long benchmark: most successful eurozone sovereign century bond, setting the pricing reference for this market segment",
      ],
      risks: [
        "2022년 80% 가격 손실 — 단일 연도 금리 상승만으로 주식 시장의 4배 이상 하락, 단기 보유자에게 치명적",
        "수정 듀레이션 47년 — 금리 1%p 상승 시 가격 47% 하락, 레버리지 금융 상품과 동등한 금리 감도",
        "재투자 리스크: 100년물에서 받는 2.1% 쿠폰을 미래에 어떤 금리로 재투자하는지에 따라 실질 수익 크게 변동",
        "유동성 리스크: €35억 발행 잔액은 일반 국채 대비 소규모, 시장 스트레스 시 bid-ask 스프레드 급등 가능",
      ],
      risksEn: [
        "80% price loss in 2022 — a single year's rate rise caused 4x worse decline than equities; devastating for short-horizon holders",
        "Modified duration 47 years — equivalent to a leveraged financial instrument's rate sensitivity; 1% yield rise causes 47% price loss",
        "Reinvestment risk: the 2.1% coupon received from a century bond must be reinvested at future unknown rates, materially affecting realized total return",
        "Liquidity risk: €3.5B outstanding is small relative to standard government bonds; bid-ask spreads may widen sharply under market stress",
      ],
    },
    faq: [
      {
        q: "오스트리아 100년물은 발행사인 오스트리아 정부 입장에서 좋은 거래였나요?",
        qEn: "Was the century bond a good deal for Austria as the issuer?",
        a: "발행사 관점에서는 탁월한 거래였습니다. 2017년 2.1%라는 역사적 저금리로 100년의 자금 조달을 고정했습니다. 이 채권의 쿠폰을 매년 지불하는 비용은 오스트리아가 단기·중기물을 반복 발행하는 것보다 훨씬 저렴합니다. 2022년 이후 유럽 금리가 2~4%대로 올라간 현재, 오스트리아는 2.1% 고정 비용의 이점을 누리고 있습니다. 발행 당시의 낮은 금리를 100년간 고정시키는 것은 재무부 관점에서 완벽한 자금 관리입니다.",
        aEn: "From the issuer's perspective, it was an excellent deal. Austria locked in 100 years of funding at a historically cheap 2.1% in 2017. Paying this coupon annually is far cheaper than rolling short-to-medium term bonds repeatedly. With European rates now at 2–4% after 2022, Austria enjoys a significant cost-of-funds advantage from that 2.1% fixed rate. Locking in historically low rates for 100 years is optimal liability management from a treasury perspective.",
      },
      {
        q: "수정 듀레이션 47년이란 실질적으로 어떤 의미인가요?",
        qEn: "What does a modified duration of 47 years mean in practical terms?",
        a: "금리가 1%p 오르면 채권 가격이 약 47% 하락하고, 금리가 1%p 내리면 약 47% 상승한다는 의미입니다. 비교를 위해: 미국 30년 국채의 수정 듀레이션은 약 18~20년, 10년 국채는 약 9년입니다. 오스트리아 100년물의 듀레이션은 미국 30년물의 2.5배, 10년물의 5배 이상입니다. 이것은 단순한 채권이 아닙니다 — 금리에 고도로 레버리지된 상품과 수학적으로 동일한 감도를 가집니다. 2022년 금리 2%p 상승 × 듀레이션 47 = 약 94% 이론적 가격 하락이었고, 실제로 80% 하락이 발생했습니다.",
        aEn: "A 1 percentage point yield rise causes approximately a 47% price decline; a 1% yield fall causes approximately a 47% price rise. For comparison: a US 30-year Treasury has a modified duration of about 18–20 years; a 10-year Treasury about 9 years. Austria's century bond duration is 2.5x that of a 30-year bond, 5x+ that of a 10-year. This is not a simple bond — it has mathematically equivalent rate sensitivity to a highly leveraged financial instrument. In 2022: 2% yield rise × 47 duration = approximately 94% theoretical price decline; the actual decline was approximately 80%.",
      },
      {
        q: "연기금이나 생명보험사는 이 채권을 왜 샀고, 2022년 손실에 어떻게 대처했나요?",
        qEn: "Why did pension funds and life insurers buy this bond, and how did they handle the 2022 losses?",
        a: "생명보험사와 연기금은 장기 부채를 보유합니다 — 30~50년 후 지급할 연금, 보험금이 있습니다. 이들은 자산과 부채의 듀레이션을 매칭해야 합니다. 부채 듀레이션이 30~40년이라면, 그에 맞는 자산이 필요합니다. 100년물은 이 목적에 부합합니다. 이들 투자자들에게 2022년의 가격 하락은 운용 목적에 따라 다르게 해석됩니다. 만기까지 보유해 ALM 목적으로 사용하는 투자자라면 시가 손실은 장부상 숫자일 뿐입니다. 반면 매도해야 하거나 시가 기준 운용 성과를 측정받는 투자자는 실제 손실이 됩니다.",
        aEn: "Life insurers and pension funds hold long-duration liabilities — pensions and insurance payouts due 30–50 years out. They must match the duration of assets to liabilities. If liability duration is 30–40 years, they need assets with matching characteristics. Century bonds serve this purpose. For these investors, the 2022 price decline is interpreted differently depending on objective. For investors holding to maturity as ALM instruments, mark-to-market losses are accounting figures only. For investors who need to sell or are evaluated on mark-to-market performance, the losses are real and significant.",
      },
      {
        q: "오스트리아 100년물과 아르헨티나 100년물의 근본적 차이는 무엇인가요?",
        qEn: "What is the fundamental difference between Austria's and Argentina's century bonds?",
        a: "리스크의 본질이 다릅니다. 오스트리아 100년물은 신용 리스크가 극히 낮지만(AA+, 유로존 핵심 국가), 금리 리스크가 극단적으로 높습니다(듀레이션 47년). 아르헨티나 100년물은 금리 리스크에 더해 신용 리스크(B등급, 상습 디폴트국)까지 중첩됐습니다. 오스트리아 투자자들은 금리가 어떻게 움직일지에 베팅했고, 아르헨티나 투자자들은 금리 방향과 아르헨티나의 100년 신용 건전성에 동시에 베팅했습니다. 오스트리아는 '방향성 리스크'를, 아르헨티나는 '방향성 + 신용' 이중 리스크를 가진 상품이었습니다.",
        aEn: "The nature of risk is fundamentally different. Austria's century bond has negligible credit risk (AA+, eurozone core), but extreme duration risk (47-year modified duration). Argentina's century bond stacked credit risk (B-rated, serial defaulter) on top of duration risk. Austria bond investors bet on interest rate direction. Argentina bond investors simultaneously bet on rate direction and Argentina's 100-year creditworthiness. Austria was a pure rate directional risk; Argentina was a combined rate + credit double risk product.",
      },
      {
        q: "볼록성(Convexity)은 100년물 투자에서 어떤 역할을 하나요?",
        qEn: "What role does convexity play in century bond investing?",
        a: "볼록성은 가격-수익률 관계가 선형이 아닌 곡선임을 나타냅니다. 볼록성이 높을수록 금리 하락 시 기대보다 더 많이 가격이 오르고, 금리 상승 시 기대보다 덜 가격이 내립니다. 100년물은 볼록성이 매우 높습니다. 2020년 오스트리아 100년물이 수정 듀레이션 수학적 예측치(47년 × 1.5%p 하락 = 70.5% 상승)를 넘어 130% 상승한 것은 볼록성 효과가 더해진 결과입니다. 볼록성은 금리 변동성이 클 때 추가 이익을 제공합니다 — 즉, 금리 방향이 유리하면 예상보다 더 크게 버는 구조입니다. 반면 금리 방향이 불리할 때의 손실도 볼록성 덕분에 이론치보다 약간 낮습니다.",
        aEn: "Convexity reflects that the price-yield relationship is curved rather than linear. Higher convexity means price gains when rates fall exceed the duration-predicted amount, and price losses when rates rise are less than duration-predicted. Century bonds have very high convexity. The fact that Austria's 2020 price surge exceeded the theoretical duration-based prediction (47yr × 1.5% decline = ~70.5% rise) to reach 130% reflects the convexity contribution. Convexity provides bonus returns when rate volatility is high — meaning when rate direction is favorable, you earn more than expected. Conversely, convexity slightly dampens losses when rates move against you relative to the duration-only prediction.",
      },
    ],
    references: [
      {
        id: 1,
        author: "Republic of Austria",
        title: "2.1% Federal Bond due 2117 — Prospectus",
        source: "Oesterreichische Bundesfinanzierungsagentur (OeBFA), September 2017",
        year: "2017",
      },
      {
        id: 2,
        author: "BIS Working Papers",
        title: "The term structure of interest rates and its implications for very long-dated bonds",
        source: "Bank for International Settlements, Working Paper No. 657",
        year: "2017",
        url: "https://www.bis.org/publ/work657.htm",
      },
      {
        id: 3,
        author: "Fabozzi, Frank J.",
        title: "Fixed Income Mathematics: Analytical and Statistical Techniques",
        source: "McGraw-Hill, 4th Edition",
        year: "2006",
      },
      {
        id: 4,
        author: "ECB",
        title: "Asset Purchase Programme (APP) and Pandemic Emergency Purchase Programme (PEPP)",
        source: "European Central Bank Statistical Data Warehouse",
        year: "2020",
        url: "https://www.ecb.europa.eu/mopo/implement/app/html/index.en.html",
      },
    ],
  },

  {
    slug: "mexico-century-bond",
    title: "멕시코 100년물 (2010) — EM 초장기물의 효시",
    titleEn: "Mexico Century Bond (2010) — The EM Centennial Pioneer",
    category: "sovereign",
    categoryLabel: "Sovereign",
    categoryLabelEn: "Sovereign",
    excerpt: "EM 국가 최초의 달러 100년물. 이후 아르헨티나와 기타 EM 국가들이 따른 선구자 사례.",
    excerptEn: "The first EM dollar century bond. The pioneer that inspired Argentina and others to follow.",
    dealYear: 2010,
    issuer: "United Mexican States",
    issuerEn: "United Mexican States",
    readingMinutes: 9,
    tags: ["Sovereign", "EM", "100년물", "멕시코", "달러채"],
    tagsEn: ["Sovereign", "EM", "Century Bond", "Mexico", "Dollar Bond"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "United Mexican States" },
      { labelKo: "발행연도", labelEn: "Year", value: "Oct 2010" },
      { labelKo: "발행규모", labelEn: "Size", value: "$1B" },
      { labelKo: "만기", labelEn: "Maturity", value: "100년 (2110)", valueEn: "100 years (2110)" },
      { labelKo: "쿠폰", labelEn: "Coupon", value: "5.75%" },
      { labelKo: "발행 스프레드", labelEn: "Issue Spread", value: "T+175bp" },
      { labelKo: "주관사", labelEn: "Lead Managers", value: "Barclays, Deutsche Bank, HSBC" },
    ],
    sections: [
      {
        heading: "EM 100년물 시장의 탄생 — 2010년의 선택",
        headingEn: "Birth of EM Century Bonds — Mexico's 2010 Choice",
        body:
`2010년 10월, 멕시코 재무부는 채권시장 역사의 한 페이지를 새로 썼다. $10억 규모, 쿠폰 5.75%, 2110년 만기 — 신흥국 중 최초의 달러 100년물이었다.

멕시코가 이 딜을 선택할 수 있었던 이유는 2010년 당시 EM 국가 중 상대적으로 건전한 신용 기반이 있었기 때문이다. BBB/Baa1 등급 — 투자등급 하단이었지만 투자등급이었다. 1994년 '테킬라 위기' 이후 꾸준히 신용도를 쌓아온 결과였다.

발행 배경에는 미국 양적완화(QE1)가 만든 저금리 환경이 있었다. 미국 연준이 2008년 금융위기 이후 대규모 자산 매입을 시작하면서 미국 국채 수익률이 역사적 저점에 근접했다. 이 환경에서 T+175bp, 절대 수익률 5.75%는 매력적인 숫자였다.

오더북은 $40억을 넘어 발행액의 4배 이상을 기록했다. EM 국가에서 나온 100년물 채권임에도 불구하고, 투자자들의 수요는 압도적이었다.`,
        bodyEn:
`In October 2010, Mexico's Ministry of Finance wrote a new page in bond market history: $1 billion face value, 5.75% coupon, maturing 2110 — the first dollar-denominated century bond from an emerging market country.

Mexico could execute this deal because it had, by 2010, built a relatively solid credit foundation among EM countries. Rated BBB/Baa1 — investment grade, albeit at the lower end. A steady accumulation of creditworthiness since the 1994 'Tequila Crisis.'

The macroeconomic backdrop was the Federal Reserve's first quantitative easing (QE1), which had pushed US Treasury yields near historic lows after the 2008 financial crisis. In that environment, T+175bp and an absolute yield of 5.75% was genuinely attractive to yield-hungry investors.

The orderbook exceeded $4 billion — more than 4x the deal size. Despite being a century bond from an emerging market sovereign, investor demand was overwhelming.`,
      },
      {
        heading: "멕시코의 신용 여정 — 왜 EM 최초가 될 수 있었나",
        headingEn: "Mexico's Credit Journey — Why It Could Be the EM First",
        body:
`EM 국가가 100년물을 발행하려면 일반 국채보다 훨씬 더 높은 신인도가 필요하다. 투자자들이 100년의 지평에서 채무 이행을 신뢰해야 하기 때문이다. 멕시코는 왜 이 신뢰를 얻을 수 있었나?

1994년 테킬라 위기: 페소 폭락과 대규모 자본 유출. 멕시코는 미국·IMF의 구제금융을 받았지만, 이후 빠르게 상환했다. 이 경험이 멕시코의 재정 및 통화 정책을 보수적 방향으로 전환시켰다.

2000년대: NAFTA 효과로 수출 경쟁력 강화, 재정 건전화. 부채/GDP 비율을 낮추고, 외환보유고를 쌓았다. 2000년 민주화(PRI 70년 집권 종식)가 제도적 안정성 신호를 줬다.

2010년 발행 시점: 멕시코의 신용등급은 S&P BBB, Moody's Baa1. 브라질(BB)나 아르헨티나(B)와 달리 투자등급을 유지하고 있었다. NAFTA로 연결된 미국 경제와의 통합이 안정성 프리미엄을 제공했다.

이러한 배경이 '최초 EM 100년물' 발행을 가능하게 했다. 신용 여정과 제도적 안정성이 결합된 결과였다.`,
        bodyEn:
`For an EM country to issue a century bond, it requires substantially higher credibility than for standard government bonds — investors must trust debt service over a 100-year horizon. Why could Mexico earn that trust?

1994 Tequila Crisis: peso collapse and massive capital outflow. Mexico received US-IMF emergency support, then repaid it quickly. This experience pushed Mexican fiscal and monetary policy in a conservative direction.

2000s: NAFTA-driven export competitiveness gains, fiscal consolidation. Mexico reduced its debt/GDP ratio, built foreign exchange reserves. The 2000 democratic transition (ending 70 years of PRI dominance) signaled institutional stability.

At the 2010 issuance: Mexico was rated S&P BBB, Moody's Baa1 — investment grade. Unlike Brazil (BB) or Argentina (B), Mexico maintained IG status. Its NAFTA-linked economic integration with the US provided a structural stability premium.

This combination of credit journey and institutional stability enabled the 'first EM century bond' — an achievement built on decades of policy discipline.`,
      },
      {
        heading: "딜 구조와 투자자 기반",
        headingEn: "Deal Structure and Investor Base",
        body:
`멕시코 100년물은 SEC 등록 공모채로 미국 달러화 표시였다. Rule 144A/Reg S 구조 — 미국 내 기관 투자자와 미국 외 투자자 모두에게 판매됐다.

발행 조건:
• 발행일: 2010년 10월 5일
• 만기일: 2110년 10월 5일
• 쿠폰: 5.75% (반기 지급)
• 발행가: 99.519 (발행 수익률 5.780%)
• 미국 국채 대비 스프레드: T+175bp
• 주관사: Barclays Capital, Deutsche Bank, HSBC

투자자 분포는 지역별로 미주(미국 포함) 60%, 유럽 25%, 아시아 15% 수준이었다. 유형별로는 자산운용사 40%, 연기금·보험사 30%, 헤지펀드 20%, 기타 10% 정도로 알려졌다.

$10억이라는 규모는 의도적으로 보수적으로 설정됐다. 멕시코는 '최초 EM 100년물'이라는 역사적 의미에 더해, 시장을 테스트하는 성격의 발행을 원했다. 향후 수요가 확인되면 탭 발행을 통해 규모를 늘릴 수 있는 구조였다.`,
        bodyEn:
`Mexico's century bond was issued as a SEC-registered public bond, dollar-denominated. Structure: Rule 144A/Reg S — sold to both US institutional investors and non-US investors.

Issue terms:
• Issue date: October 5, 2010
• Maturity: October 5, 2110
• Coupon: 5.75% (semi-annual)
• Issue price: 99.519 (yield to maturity: 5.780%)
• Spread vs. US Treasuries: T+175bp
• Lead managers: Barclays Capital, Deutsche Bank, HSBC

Investor distribution was roughly: Americas (including US) 60%, Europe 25%, Asia 15% by geography. By type: asset managers ~40%, pension funds/insurance ~30%, hedge funds ~20%, other ~10%.

The $1 billion size was intentionally conservative. Mexico wanted to combine the historic significance of 'first EM century bond' with a market-testing exercise. If demand proved strong, tap issuances could increase the outstanding amount — which subsequently occurred in 2014 and 2015.`,
      },
      {
        heading: "선구자의 유산 — 이후 EM 100년물의 계보",
        headingEn: "Pioneer's Legacy — The EM Century Bond Lineage",
        body:
`멕시코 100년물의 성공은 EM 초장기물 시장의 문을 열었다. 이후 다른 EM 국가들이 멕시코의 선례를 참조했다.

멕시코 자체: 2014년 €1.5B 유로화 100년물(쿠폰 4%), 2015년 추가 탭 발행. 미국 달러와 유로화 100년물을 모두 갖춘 유일한 EM 발행체가 됐다.

아르헨티나(2017): 멕시코 선례를 참조해 $2.75B 100년물 발행. 쿠폰 7.125% — 멕시코의 5.75%보다 높은 신용 프리미엄 반영. 3년 뒤 디폴트.

칠레(2022): $1.5B 100년물 발행. 라틴아메리카에서 상대적으로 건전한 재정의 칠레가 멕시코 모델을 따랐다.

멕시코 100년물이 가장 중요한 이유: 아르헨티나 사례와 달리, 멕시코는 발행 이후 14년(2024년 기준)이 지나도록 디폴트하지 않았다. 이것이 '신용 기반이 충분히 갖춰진 EM도 100년물을 성공적으로 발행·유지할 수 있다'는 실증이다. 아르헨티나와의 대비가 EM 100년물 발행의 전제 조건을 이해하는 데 핵심적이다.`,
        bodyEn:
`Mexico's century bond success opened the door to the EM ultra-long bond market. Subsequent EM issuers referenced Mexico's precedent.

Mexico itself: issued a €1.5B euro-denominated century bond in 2014 (4% coupon), with further taps in 2015. Mexico became the only EM country with both dollar and euro century bonds outstanding.

Argentina (2017): referenced Mexico's precedent for its $2.75B century bond issuance at 7.125% — reflecting a higher credit premium than Mexico's 5.75%. Defaulted three years later.

Chile (2022): issued $1.5B in century bonds. Chile, with relatively sound fiscal finances in Latin America, followed the Mexico model.

Why Mexico's century bond matters most: unlike Argentina, Mexico has not defaulted in the 14 years since issuance (as of 2024). This is the empirical proof that 'EM issuers with sufficient credit foundations can successfully issue and sustain century bonds.' The contrast with Argentina is essential for understanding the prerequisites for successful EM century bond issuance.`,
      },
      {
        heading: "스프레드 진화와 시장 평가",
        headingEn: "Spread Evolution and Market Assessment",
        body:
`멕시코 100년물의 스프레드는 발행 이후 어떻게 움직였나? 이것이 멕시코의 신용 여정을 반영하는 지표다.

발행 시(2010년): T+175bp. 이는 BBB 등급 EM 국가에 대한 당시 시장 평가를 반영했다. 미국 투자등급 회사채 BBB와 비슷한 스프레드 수준이었다.

2017~2019년: 미국이 금리 인상 사이클에 들어서면서 EM 채권 스프레드가 전반적으로 확대됐다. 멕시코 100년물도 스프레드가 T+200~250bp로 확대됐다.

2020년 COVID: 전반적 EM 위기. 멕시코 100년물 스프레드는 T+350bp 이상으로 급확대됐다가, 연준의 대규모 유동성 공급으로 빠르게 회복됐다.

2023~2024년: 미국 금리 인상 사이클(2022~2023)으로 수익률 자체가 높아졌지만, 스프레드 측면에서는 T+200bp 내외를 유지했다.

멕시코 100년물의 스프레드 진화는 아르헨티나 100년물과 극명히 대비된다. 아르헨티나는 T+750bp를 넘어 디폴트됐지만, 멕시코는 발행 이후 14년간 스프레드가 300bp 이내에서 관리됐다. 신용의 차이가 스프레드의 차이를 만들었다.`,
        bodyEn:
`How have Mexico's century bond spreads evolved since issuance? This is the lens through which Mexico's credit journey is reflected.

At issuance (2010): T+175bp, reflecting the market's assessment of a BBB-rated EM sovereign — comparable to US BBB investment-grade corporates at the time.

2017–2019: As the US entered a rate hike cycle, EM spreads widened broadly. Mexico's century bond widened to T+200–250bp.

2020 COVID: EM-wide stress. Mexico's century bond spreads spiked to T+350bp+ before recovering quickly as the Fed's massive liquidity injection stabilized markets.

2023–2024: Absolute yields rose with the 2022–2023 US rate hike cycle, but Mexico's spread remained broadly within T+200bp.

Mexico's spread evolution stands in stark contrast to Argentina's century bond. Argentina's spreads exceeded T+750bp before the 2020 default. Mexico has remained within 300bp over 14 years. Credit quality difference created spread difference — the fundamental lesson of comparing these two EM century bond issuers.`,
      },
    ],
    keyTerms: [
      {
        term: "Rule 144A / Reg S",
        termEn: "Rule 144A / Reg S",
        definition: "미국 SEC 규제 하에 외국 발행사가 미국 및 해외 기관 투자자들에게 채권을 판매할 수 있는 대표적인 두 가지 발행 방식. Rule 144A는 미국 내 적격 기관 투자자(QIB)에게, Reg S는 미국 외 투자자에게 판매하는 구조다. 두 가지를 함께 사용하면 글로벌 기관 투자자 기반 전체에 접근할 수 있다.",
        definitionEn: "The two primary SEC-regulated frameworks for foreign issuers to sell bonds to US and non-US institutional investors. Rule 144A targets US Qualified Institutional Buyers (QIBs); Reg S targets non-US investors. Using both in combination provides access to the entire global institutional investor base.",
      },
      {
        term: "탭 발행 (Tap Issuance)",
        termEn: "Tap Issuance",
        definition: "이미 발행된 채권과 동일한 ISIN·조건으로 추가 발행하는 것. 기존 채권의 유동성을 높이고 발행 잔액을 늘릴 수 있다. 멕시코는 2010년 $10억 발행 후 2014년·2015년에 탭 발행을 통해 규모를 확대했다. 탭 발행 시 가격은 시장 수익률에 따라 원래 발행가와 달라질 수 있다.",
        definitionEn: "The issuance of additional bonds under the same ISIN and terms as an existing bond. Increases liquidity and outstanding size. Mexico tapped its 2010 $1B issuance in 2014 and 2015 to grow the outstanding amount. Tap issuances price at current market yields, which may differ from the original issue price.",
      },
      {
        term: "테킬라 위기 (Tequila Crisis, 1994)",
        termEn: "Tequila Crisis (1994)",
        definition: "1994년 멕시코 페소화의 갑작스런 평가절하로 시작된 EM 통화·금융 위기. 멕시코는 미국과 IMF의 긴급 구제금융($500억)을 받았으며, 이후 빠른 상환과 재정 긴축으로 신용 회복의 기반을 마련했다. 이 위기 이후 멕시코의 보수적 재정·통화 정책이 2010년 EM 최초 100년물 발행의 신용 기반이 됐다.",
        definitionEn: "The currency and financial crisis triggered by Mexico's sudden peso devaluation in December 1994. Mexico received emergency financing ($50 billion) from the US and IMF, then repaid it rapidly while implementing fiscal austerity. The conservative monetary and fiscal framework built after this crisis became the credit foundation that enabled Mexico's 2010 first-EM century bond issuance.",
      },
      {
        term: "투자등급 (Investment Grade)",
        termEn: "Investment Grade",
        definition: "S&P 기준 BBB- 이상, Moody's 기준 Baa3 이상인 신용 등급. 연기금·보험사 등 규제를 받는 기관 투자자들은 통상 투자등급 채권만 보유할 수 있다. 멕시코의 BBB/Baa1 등급은 아르헨티나(B)와 달리 이러한 투자자들이 100년물을 매입할 수 있는 법적·규정적 기반을 제공했다.",
        definitionEn: "Credit ratings of BBB- or above (S&P) or Baa3 or above (Moody's). Regulated institutional investors such as pension funds and insurance companies are generally restricted to investment-grade bonds only. Mexico's BBB/Baa1 rating — unlike Argentina's B rating — provided the regulatory and mandate basis for such investors to purchase the century bond.",
      },
    ],
    relatedMarket101Slugs: ["dcm-ecosystem", "reach-for-yield"],
    relatedDealSlugs: ["argentina-100yr", "austria-100yr"],
    executiveSummary: {
      ko: [
        "2010년 10월 멕시코, EM 최초 달러 100년물 $10억 발행 — 쿠폰 5.75%, T+175bp, 4배 초과청약",
        "발행 가능 배경: 1994년 테킬라 위기 극복 후 BBB/Baa1 투자등급, 미국·IMF와의 관계, NAFTA 경제 통합",
        "QE1이 만든 저금리 환경 — 미국 국채 수익률 역사적 저점, EM 5.75%가 매력적으로 보이는 배경",
        "2014·2015년 탭 발행 포함 멕시코 100년물 지속 유지, 2024년 현재까지 디폴트 없음",
        "아르헨티나(2017 발행 → 2020 디폴트)와의 대비: 신용 기반의 차이가 100년물 성패를 결정",
      ],
      en: [
        "Oct 2010: Mexico issued the first EM dollar century bond — $1B at 5.75% coupon, T+175bp, 4x oversubscribed",
        "Enabling factors: BBB/Baa1 investment grade after recovering from 1994 Tequila Crisis; NAFTA economic integration with the US",
        "QE1-driven low-rate environment: US Treasury yields near historic lows made EM 5.75% yield attractive to global investors",
        "Tapped in 2014 and 2015; as of 2024, Mexico has maintained this bond for 14 years without default",
        "Contrast with Argentina (2017 issue → 2020 default): the difference in underlying credit quality determined success vs. failure",
      ],
    },
    assessment: {
      positives: [
        "EM 100년물 선구자 — 멕시코가 확립한 시장, 이후 아르헨티나·칠레 등의 선례가 됨",
        "신용 기반이 검증된 발행 — BBB 등급, 14년간 디폴트 없음으로 '신용 있는 EM은 100년물 가능' 실증",
        "자금 조달 효율 극대화 — 2010년 역사적 저금리에 5.75% 고정, 향후 수십 년간 저비용 자금 확보",
        "EM 채권 시장 심화 기여 — 100년물 발행이 성공함으로써 EM 초장기물 투자자 기반 형성에 기여",
      ],
      positivesEn: [
        "EM century bond pioneer — Mexico established the market segment, becoming the precedent for Argentina, Chile, and others",
        "Credit-backed issuance — BBB rating and 14 years without default proves 'creditworthy EM can sustain century bonds'",
        "Funding cost efficiency — locked in 5.75% at 2010 historically low rates; ultra-cheap fixed funding for decades",
        "EM bond market deepening — successful century bond issuance contributed to building an investor base for EM ultra-long debt",
      ],
      risks: [
        "EM 100년물의 구조적 리스크 — 멕시코조차 100년 후 디폴트 확률이 수학적으로 0이 아님, 장기 국가 리스크 내재",
        "듀레이션 리스크 — 수정 듀레이션 20년+ 수준으로 금리 1%p 상승 시 20%+ 가격 하락 가능",
        "USD 표기 환율 리스크 — 멕시코 재정이 페소 기반인데 달러 채무 상환 의무, 페소 약세 시 상환 부담 증가",
        "아르헨티나 선례 효과 — 멕시코 이후 아르헨티나의 100년물 발행과 디폴트가 EM 100년물 전반에 대한 시장 인식 악화",
      ],
      risksEn: [
        "Structural EM century bond risk — even Mexico mathematically has non-zero probability of default over 100 years; long-term sovereign risk is inherent",
        "Duration risk — modified duration 20+ years; a 1% yield rise causes 20%+ price decline",
        "USD-denominated FX risk — Mexico's fiscal base is peso-denominated while dollar debt service obligations mean peso weakness increases repayment burden",
        "Argentina precedent effect — Argentina's post-Mexico century bond issuance and default worsened market perception of EM century bonds broadly",
      ],
    },
    faq: [
      {
        q: "멕시코가 EM 최초의 100년물을 발행할 수 있었던 핵심 이유는 무엇인가요?",
        qEn: "What were the key reasons Mexico was able to issue the first EM century bond?",
        a: "세 가지 요인이 결합됐습니다. 첫째, 신용 기반: 1994년 테킬라 위기 이후 보수적 재정·통화 정책을 유지해 BBB/Baa1 투자등급을 확보했습니다. 아르헨티나(B)나 브라질(BB)와 달리, 규제 기관 투자자들이 편입 가능한 등급이었습니다. 둘째, 미국과의 구조적 연결: NAFTA를 통한 경제 통합이 암묵적 안전망을 제공했습니다. 1994년 위기 시 미국의 지원을 받은 경험도 이 신뢰의 배경이었습니다. 셋째, 타이밍: 미국 QE1으로 금리가 역사적 저점에 있었고, 투자자들이 수익률을 찾아 EM으로 유입되는 시기였습니다.",
        aEn: "Three factors combined. First, credit foundation: maintaining conservative fiscal and monetary policy after the 1994 Tequila Crisis produced BBB/Baa1 investment grade ratings — enabling regulated institutional investors to hold the bond, unlike Argentina (B) or Brazil (BB). Second, structural US connection: NAFTA economic integration provided an implicit safety net. US support during the 1994 crisis built a foundation of trust. Third, timing: US QE1 had pushed rates to historic lows, drawing yield-hungry investors into EM markets.",
      },
      {
        q: "멕시코는 왜 하필 100년물을 선택했나요? 30년물이나 50년물이 아닌 이유는?",
        qEn: "Why did Mexico specifically choose 100 years? Why not 30- or 50-year bonds?",
        a: "두 가지 목적이 있었습니다. 첫째, '최초 EM 100년물'이라는 역사적 의미 자체가 마케팅 가치를 가졌습니다. 발행 당시 이 딜은 전세계 재무 언론의 주목을 받았고, 멕시코의 신용 여정을 상징하는 사건이 됐습니다. 둘째, 발행사 관점에서 자금 조달 비용 측면의 이점이 있었습니다. 30년물보다 100년물의 쿠폰이 높지만(당시 30년물이 약 5%였다면 100년물은 5.75%), 자금을 100년 동안 고정시키는 옵션 가치가 있습니다. 다시 발행해야 하는 리파이낸싱 리스크를 없애는 것도 이점입니다.",
        aEn: "Two objectives were at play. First, being the 'first EM century bond' had inherent marketing value — the deal generated global financial media attention and became a symbol of Mexico's credit journey. Second, from an issuer funding perspective, there is an option value in locking in rates for 100 years. While the 100-year coupon (5.75%) was higher than the contemporary 30-year rate (~5%), fixing funding cost for a century eliminates refinancing risk over that period. The optionality of never having to rollover this tranche of debt was valuable.",
      },
      {
        q: "멕시코와 아르헨티나 100년물 — 같은 EM 100년물인데 왜 결과가 이렇게 달랐나요?",
        qEn: "Mexico and Argentina both issued EM century bonds — why did they turn out so differently?",
        a: "신용 기반의 차이입니다. 멕시코는 BBB(투자등급), 아르헨티나는 B(투기등급 하단). 등급 차이가 단순한 숫자가 아닌 실질적 부도 확률을 반영합니다. 멕시코는 1994년 이후 단 한 번도 달러채 디폴트를 하지 않았습니다. 아르헨티나는 2017년 발행 전에 이미 여덟 차례 디폴트 기록이 있었습니다. 또한 제도적 차이도 큽니다. 멕시코 중앙은행은 독립적이고 보수적입니다. 아르헨티나는 페론주의와 신자유주의 사이를 진동하는 정치 사이클이 채무 이행 의지를 불확실하게 만듭니다. 같은 '100년물'이라는 이름이지만 사실상 다른 종류의 상품이었습니다.",
        aEn: "The difference in underlying credit quality. Mexico was BBB (investment grade); Argentina was B (deep speculative). The rating difference reflects real default probability differentials, not just labels. Mexico had zero dollar bond defaults since 1994. Argentina had eight recorded defaults before the 2017 century bond was even issued. Institutional factors also differ fundamentally. Mexico's central bank is independent and conservative. Argentina's political cycle — oscillating between Peronism and neoliberalism — creates persistent uncertainty about debt-service willingness. Despite sharing the '100-year bond' label, these were fundamentally different products.",
      },
      {
        q: "멕시코 100년물의 미래 — 2110년에 원금을 받을 수 있을까요?",
        qEn: "What about the future of Mexico's century bond — will bondholders receive principal in 2110?",
        a: "솔직히 아무도 알 수 없습니다. 2110년은 86년 후입니다. 그 시간 동안 무슨 일이 일어날지 — 기후 변화, 지정학적 변화, 기술 혁명, 정치 체제 변화 — 예측하는 것은 불가능합니다. 다만 확률적 시각으로 보면: 멕시코는 1980년대 외채 위기(Brady Bond 재조정) 이후 달러채 디폴트를 하지 않았습니다. BBB 등급 국가의 역사적 연간 디폴트율은 약 0.1~0.2% 수준입니다. 그러나 이것이 86년간 누적되면 약 8~16%의 디폴트 확률이 됩니다 — 낮지 않은 숫자입니다. 100년물 투자의 본질은 국가의 존속과 신용에 대한 초장기 베팅입니다.",
        aEn: "Honestly, nobody knows. 2110 is 86 years away. What will happen in that time — climate change, geopolitical transformation, technological revolution, political regime changes — cannot be predicted. From a probabilistic perspective: Mexico has not defaulted on dollar bonds since the 1980s Brady Bond restructuring. Historical annual default rates for BBB-rated countries are approximately 0.1–0.2%. Compounded over 86 years, however, this produces roughly an 8–16% cumulative default probability — not negligible. The fundamental nature of a century bond investment is an ultra-long bet on a nation's survival and creditworthiness.",
      },
      {
        q: "멕시코 100년물에 투자하는 것이 현재(2024년) 기준으로 적절한가요?",
        qEn: "Is investing in Mexico's century bond appropriate in 2024?",
        a: "투자자의 목적과 운용 지평에 따라 완전히 다릅니다. 연기금·생명보험사처럼 50년 이상의 부채 매칭이 필요한 기관에는 여전히 매력적인 ALM 수단일 수 있습니다. 반면 5~10년 운용 지평의 투자자에게는 수정 듀레이션 20년+의 금리 리스크가 핵심 우려사항입니다. 현재 수익률 수준(2024년 기준 약 6% 전후)과 멕시코의 현재 신용 상황, 미국 금리 전망을 모두 고려해야 합니다. 이 채권은 단순한 '멕시코 회사채'나 '10년 국채'가 아닙니다 — 초장기 국가 신용 리스크 + 극단적 금리 감도를 가진 특수 상품입니다.",
        aEn: "It depends entirely on the investor's objective and investment horizon. For institutions needing to match 50+ year liabilities — pension funds, life insurers — it may still be a viable ALM instrument. For investors with 5–10 year horizons, the 20+ year modified duration is a dominant concern. Current yield levels (approximately 6% as of 2024), Mexico's current credit status, and US rate trajectory must all be considered. This is not simply 'Mexican credit' or 'a long-term government bond' — it is a specialized instrument with ultra-long sovereign credit risk combined with extreme rate sensitivity. Most standard fixed income mandates are not designed for this product.",
      },
    ],
    references: [
      {
        id: 1,
        author: "United Mexican States",
        title: "Prospectus Supplement — 5.75% Global Notes due 2110",
        source: "SEC Filing, October 2010",
        year: "2010",
      },
      {
        id: 2,
        author: "Moody's Investors Service",
        title: "Mexico Credit Outlook and Rating History",
        source: "Moody's Rating Actions 2010–2024",
        year: "2024",
      },
      {
        id: 3,
        author: "Bordo, Michael D. and Meissner, Christopher M.",
        title: "Original Sin, Past and Present",
        source: "NBER Working Paper Series",
        year: "2006",
        url: "https://www.nber.org/papers/w12668",
      },
      {
        id: 4,
        author: "Reinhart, Carmen M. and Rogoff, Kenneth S.",
        title: "Serial Default and the 'Paradox' of Rich-to-Poor Capital Flows",
        source: "American Economic Review, Papers and Proceedings",
        year: "2004",
      },
    ],
  },

  {
    slug: "korea-1998-external-bond",
    title: "한국 1998년 외평채 — 위기에서 시장으로",
    titleEn: "Korea 1998 External Bond — From Crisis to Markets",
    category: "sovereign",
    categoryLabel: "Sovereign",
    categoryLabelEn: "Sovereign",
    excerpt: "IMF 직후 위기 한복판, 한국이 국제채권시장으로 돌아온 첫 딜. 한국물 30년 서사의 출발점이자, T+345bp가 지금 T+60bp가 되기까지의 이야기.",
    excerptEn: "Korea's first return to international bond markets after the IMF crisis. The origin of 30 years of Korean sovereign credit — from T+345bp to T+60bp.",
    dealYear: 1998,
    issuer: "대한민국 (기획재정부)",
    issuerEn: "Republic of Korea",
    readingMinutes: 14,
    tags: ["Sovereign", "외평채", "한국", "IMF", "스프레드", "SSA"],
    tagsEn: ["Sovereign", "Korea", "IMF Crisis", "Spread", "SSA", "EM Recovery"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Republic of Korea" },
      { labelKo: "발행연도", labelEn: "Year", value: "April 1998" },
      { labelKo: "발행규모", labelEn: "Size", value: "$4B (2 tranches)" },
      { labelKo: "만기", labelEn: "Maturity", value: "3yr / 10yr" },
      { labelKo: "발행 스프레드", labelEn: "Issue Spread", value: "T+345bp (10yr)" },
      { labelKo: "등급", labelEn: "Rating", value: "Ba1/BB+ (Junk)" },
      { labelKo: "주관사", labelEn: "Lead Managers", value: "Goldman Sachs, Salomon Smith Barney, Deutsche Bank" },
    ],
    sections: [
      {
        heading: "1997년 12월의 한국",
        headingEn: "Korea in December 1997",
        body:
`1997년 11월, 한국은 IMF에 손을 내밀었다. 외환보유고는 가용 기준으로 수십억 달러 수준까지 고갈됐고, 원/달러 환율은 연초 850원에서 연말 1,900원대로 두 배 이상 폭등했다. 30대 그룹 중 절반 가까이가 위기에 빠졌고, 신용경색은 실물경제를 옥죄었다.

IMF 구제금융(550억 달러 패키지)을 확정했다고 위기가 끝난 게 아니었다. 더 본질적인 문제가 남아 있었다: 한국이 다시 국제 자본시장에서 돈을 빌릴 수 있다는 신호를 시장에 보내야 했다. 당시 한국의 달러채 스프레드는 평시의 10배 이상으로 폭등해 있었고, 외국 투자자들은 '한국이 국가부도를 낼 수도 있다'는 공포 속에 있었다.

이 맥락에서 기획재정부가 계획한 것이 바로 국제채권 발행이었다. 단순한 자금 조달이 아니었다 — 시장에 보내는 메시지였다. "한국은 아직 살아있고, 빌려준 돈을 갚을 수 있다."`,

        bodyEn:
`In November 1997, Korea turned to the IMF. Usable foreign exchange reserves had fallen to critically low levels, and the won had more than doubled from around 850 to nearly 1,900 per dollar by year-end. Nearly half of Korea's top 30 conglomerates were in distress; credit had seized up across the economy.

Securing the IMF package — $55 billion in total commitments — didn't end the crisis. A more fundamental problem remained: Korea needed to signal to global capital markets that it could borrow again. Korean dollar bond spreads had spiked to more than ten times their peacetime levels, and foreign investors were pricing in a genuine risk of sovereign default.

This was the context in which the Ministry of Finance and Economy began planning a return to the international bond market. This wasn't simply about raising money — it was a message to the market. "Korea is still here, and it will pay you back."`,
      },
      {
        heading: "딜의 탄생 — 1998년 4월",
        headingEn: "The Deal — April 1998",
        body:
`1998년 4월, 대한민국은 국제채권시장에 복귀했다. $4억 달러 규모, 두 개의 트랜치: 3년물과 10년물. 주관사는 골드만삭스, 살로몬 스미스 바니, 도이체방크.

당시 한국의 신용등급은 Ba1/BB+, 즉 투기등급(하이일드)이었다. IMF 위기 이전 A 등급에서 두 노치 이상 추락한 상태였다. 이 딜이 실행되려면 투기등급 신흥국 채권에 기꺼이 들어오는 투자자들이 필요했다.

가격은 10년물 기준 미국 국채 대비 345bp. 절대 수익률로는 연 8%대 중반. 발행 전 북빌딩에서 오더북은 발행 규모를 크게 초과했다. 시장이 이 딜을 원한다는 신호였다. 당시 정부는 이 오버서브스크립션을 신인도 회복의 첫 증거로 활용했다.

345bp라는 숫자는 그 자체로 한국 위기의 깊이를 말해준다. 평시 한국 sovereign 스프레드가 T+20~40bp 수준임을 감안하면, 시장이 요구한 위험 프리미엄이 얼마나 컸는지를 알 수 있다.`,

        bodyEn:
`In April 1998, the Republic of Korea returned to the international bond market. The deal was $4 billion across two tranches — a 3-year and a 10-year — led by Goldman Sachs, Salomon Smith Barney, and Deutsche Bank.

Korea's credit rating at the time was Ba1/BB+: sub-investment grade, or junk. It had been downgraded more than two notches from its pre-crisis single-A level. For this deal to work, investors willing to take on speculative-grade emerging market credit were needed.

Pricing: T+345bp on the 10-year, translating to a yield in the mid-8% range. During bookbuilding, the orderbook was oversubscribed — a critical signal. The government used that oversubscription as the first visible proof of returning market confidence.

The 345bp number speaks directly to the depth of the crisis. Korea's peacetime sovereign spread typically ran T+20–40bp. The additional 300bp+ was pure crisis premium — compensation for the genuine possibility, priced by the market, that Korea might not pay.`,
      },
      {
        heading: "T+345bp — 이 숫자의 의미",
        headingEn: "T+345bp — What This Number Means",
        body:
`채권시장에서 스프레드는 언어다. T+345bp를 번역하면: "같은 만기의 미국 국채보다 연 3.45%를 더 줘야 내 돈을 빌릴 수 있는 나라."

비교 기준을 잡아보자. 같은 시기 독일 국채는 US Treasuries 대비 거의 0bp. 영국은 20~30bp. AAA 등급의 세계은행이나 ADB 같은 Supranational은 T+15~30bp. 그리고 한국은 T+345bp.

이 차이의 함의는 단순하다: 시장은 당시 한국에 상당한 디폴트 확률을 부여하고 있었다. 투자자가 요구하는 스프레드는 기대 손실(Expected Loss) = 부도 확률 × 부도시 손실률의 함수다. 345bp의 스프레드는, 모든 조건을 단순화하면, 시장이 한국의 연간 부도 확률을 수% 범위에서 가격에 반영하고 있었다는 의미다.

그럼에도 오더북이 채워진 이유는: EM 전문 투자자들은 "IMF가 들어온 나라는 결국 살아남는다"는 역사적 패턴을 알고 있었고, 8%대 수익률은 그 베팅의 보상으로 매력적이었다. 지정학적으로도 미국이 한국을 지원한다는 신호가 명확했다.`,

        bodyEn:
`In bond markets, spread is language. T+345bp translates to: "This country must pay 3.45 percentage points more per year than the US to borrow money."

For reference: at the same time, Germany was near zero over Treasuries. The UK was T+20–30bp. AAA-rated supranationals like the World Bank or ADB were T+15–30bp. Korea was T+345bp.

The implication is direct: the market was pricing in a meaningful probability of default. The spread an investor demands is a function of Expected Loss = Probability of Default × Loss Given Default. Simplifying: a 345bp spread means the market was embedding a default probability in the low single-digit percentage per year — real, non-trivial sovereign default risk.

Yet the orderbook filled. Why? EM specialists knew the historical pattern: countries that receive IMF programs almost always survive. An 8%+ yield was attractive compensation for that bet. Geopolitically, US support for Korea was unambiguous, adding an implicit backstop that sophisticated investors incorporated.`,
      },
      {
        heading: "스프레드 압축의 30년",
        headingEn: "Thirty Years of Spread Compression",
        body:
`1998년 4월 T+345bp로 발행된 외평채는, 그 이후로 한국 채권시장의 기준점이 됐다. 그리고 그 기준점에서 측정한 한국의 신인도 회복 속도는 놀라웠다.

2000년대 초반, 한국은 다시 투자등급(A 등급대)으로 복귀했다. 스프레드는 T+100bp 이하로 내려왔다. 2010년대 중반에는 T+50~70bp 수준으로 압축됐다. 외평채는 이제 아시아 달러채 시장에서 벤치마크 발행체 중 하나로 자리잡았다.

외평채가 열어준 문은 단순히 국가 자신을 위한 것이 아니었다. 1998년 이후 KEXIM, KDB, 산업은행 등 정책금융기관들이 차례로 달러채 시장에 등장했다. 이들이 발행한 채권은 '한국물(Korean paper)'이라는 하나의 자산군을 형성했다. 오늘날 아시아 투자자들의 포트폴리오에서 Korean paper는 고정 비중을 차지하는 벤치마크 자산군이다.

당시 345bp의 위험 프리미엄을 감수하고 들어간 투자자들은, 원금 대비 두 자릿수 수익률과 함께 스프레드 압축으로 자본 차익까지 얻었다. 위기를 기회로 읽은 정확한 판단이었다.`,

        bodyEn:
`The 1998 external bond, priced at T+345bp, became the baseline from which Korea's credit recovery was measured. And the pace of that recovery was remarkable.

By the early 2000s, Korea had returned to investment grade (single-A territory). Spreads fell below T+100bp. By the mid-2010s, the Republic was printing at T+50–70bp. Korea's sovereign bonds had become a benchmark issue in the Asian dollar bond market.

The door the 1998 deal opened wasn't just for the sovereign itself. In the years that followed, KEXIM, KDB, IBK, and other Korean policy lenders entered the dollar bond market. Together, they built what the market came to call "Korean paper" — a distinct asset class with its own investor base and pricing conventions. Today, Korean paper holds a permanent, meaningful allocation in the portfolios of Asian fixed income investors.

The investors who took the T+345bp bet in April 1998 earned high single-coupon income, plus the price appreciation of spread compression — a trade that, in hindsight, paid very well. It was a case of reading crisis correctly.`,
      },
      {
        heading: "외평채가 남긴 것 — 조항과 관행의 계보",
        headingEn: "The Legacy — Clauses, Conventions, and the Korean Blueprint",
        body:
`외평채의 유산은 스프레드 숫자를 넘어선다. 1998년 외평채의 계약 구조에 포함된 조항들은 이후 수십 년의 글로벌 sovereign 채권 관행에 영향을 미쳤다.

CAC(집단행동조항, Collective Action Clause)는 그 대표적 예다. 채무 재조정 시 과반수 이상의 채권자 동의로 나머지 채권자도 구속할 수 있는 조항이다. 이 조항은 2001년 아르헨티나 디폴트 이후 엘리엇 헤지펀드와의 군함 압류 사건(holdout creditor 문제)을 거치면서 표준이 됐다. 한국을 포함한 많은 sovereign 발행사들이 CAC를 인덱스 채권에 포함시켜 왔고, 이는 향후 채무 재조정의 효율성을 높이는 장치로 기능한다.

또 다른 유산은 아시아 달러채 시장의 발전이다. 1998년 이전에는 아시아 발행사들의 달러채 시장 참여가 제한적이었다. 외평채가 성공적으로 발행되고 이후 스프레드가 압축되면서, 이 시장이 아시아 SSA·FIG 발행사들에게 실질적으로 개방됐다.

한국의 1998년 딜은 단순한 '생존'의 기록이 아니다. 위기를 통해 오히려 더 깊고 넓은 자본시장 접근성을 확보한 경로를 보여주는 템플릿이다. 이 딜을 경험한 세대의 DCM 뱅커와 투자자들에게, 외평채는 단순한 번호가 아닌 시대적 기억이다.`,

        bodyEn:
`The legacy of Korea's 1998 external bond extends beyond the spread numbers. The contractual structure embedded in that deal influenced decades of global sovereign bond practice.

The Collective Action Clause (CAC) is the prime example. This provision allows a supermajority of bondholders to bind dissenting minorities in a restructuring — preventing holdout creditors from blocking an orderly debt renegotiation. After Argentina's 2001 default and the subsequent Elliott Associates lawsuit (which famously resulted in a naval vessel seizure), the CAC became standard in sovereign bonds globally. Korea had already incorporated it into its external bonds, positioning itself ahead of a practice that became universal.

The second legacy is the development of the Asian dollar bond market itself. Before 1998, Asian SSA and FIG issuers had limited, episodic access to dollar markets. The successful pricing of Korea's sovereign bonds — and the spread compression that followed — demonstrated to global investors that Asian sovereign credit was bankable. It opened the door that KEXIM, KDB, and eventually a wide range of Asian issuers would walk through.

Korea's 1998 deal is not simply a survival story. It is a template for how a sovereign can use a crisis as a forcing function to build deeper, more permanent access to global capital markets. For the generation of DCM bankers and investors who lived through it, the 외평채 is not just a bond number — it is a marker of an era.`,
      },
    ],
    keyTerms: [
      {
        term: "외평채 (외국환평형기금채권)",
        termEn: "Korea External Bond (Foreign Exchange Stabilization Bond)",
        definition: "한국 정부(기획재정부)가 외국환평형기금 재원 마련을 위해 해외에서 발행하는 달러·유로 표기 국채. 한국의 sovereign 신용등급이 그대로 적용되며, 아시아 달러채 시장의 대표적 벤치마크 발행체다. IMF 위기 이후 시장 신인도 회복의 상징이 되었다.",
        definitionEn: "Dollar- or euro-denominated government bonds issued overseas by Korea's Ministry of Finance and Economy to fund the Foreign Exchange Equalization Fund. They carry the Republic of Korea's sovereign credit rating directly, making them a benchmark issuer in the Asian dollar bond market. After the IMF crisis, they became a symbol of Korea's return to international capital markets.",
      },
      {
        term: "위기 프리미엄 (Crisis Premium)",
        termEn: "Crisis Premium",
        definition: "정상 상태에서의 스프레드를 초과하는 추가 리스크 보상. 1998년 외평채의 T+345bp 중 평시 수준인 T+30bp 정도를 제외한 T+315bp가 사실상 위기 프리미엄이다. 투자자가 요구하는 위기 프리미엄의 크기는 해당 국가의 디폴트 확률을 시장이 어떻게 평가하는지를 반영한다.",
        definitionEn: "The additional risk compensation above a normal-environment spread level. Of Korea's T+345bp in 1998, roughly T+315bp above a peacetime T+30bp baseline was essentially crisis premium. The size of crisis premium demanded by investors reflects the market's embedded probability of default for that issuer.",
      },
      {
        term: "CAC (집단행동조항)",
        termEn: "CAC — Collective Action Clause",
        definition: "sovereign 채권의 채무 재조정 시 일정 비율(보통 75%) 이상의 채권자가 동의하면 반대 채권자도 그 조건에 구속되는 조항. 소수 holdout 채권자가 딜을 방해하는 것을 방지한다. 2001년 아르헨티나 사태 이후 글로벌 sovereign 채권의 표준이 됐고, 한국 외평채에도 포함된다.",
        definitionEn: "A clause in sovereign bonds stipulating that if a specified threshold of bondholders (typically 75%) agrees to restructuring terms, dissenting minorities are also bound. Prevents a small group of holdout creditors from blocking an orderly restructuring. Became standard in global sovereign bonds after Argentina's 2001 default, and is included in Korean external bonds.",
      },
      {
        term: "Reach for Yield (수익률 추구)",
        termEn: "Reach for Yield",
        definition: "저금리·저수익률 환경에서 투자자들이 더 높은 수익을 위해 본래의 리스크 한도를 넘어서 더 위험한 자산을 매수하는 행동. 1998년 외평채를 산 투자자들에게도 일부 적용되지만, 그보다는 구조적 EM 회복 베팅의 성격이 강했다. 아르헨티나 100년물 사례에서는 이 행동이 더 극단적으로 나타난다.",
        definitionEn: "Investor behavior in low-yield environments where buyers accept higher risk than their mandates normally allow, in pursuit of yield. Applied partially to 1998 Korean bond buyers, though the more dominant motivation was a structural bet on EM recovery. The behavior is more extreme in the Argentina century bond case.",
      },
    ],
    relatedMarket101Slugs: ["cac", "reach-for-yield", "spread-basis", "investment-grade", "dcm-ecosystem"],
    relatedDealSlugs: ["credit-suisse-at1"],
    executiveSummary: {
      ko: [
        "1997년 외환위기 — 원/달러 900→1,900원 붕괴, 사상 최대 IMF 구제금융(210억 달러) 요청",
        "1998년 4월 $4B 외평채 성공 — T+345bp, 위기 국가 국제 자본시장 복귀의 교과서적 사례",
        "CAC(집합행동조항) 선제 도입 — 2003년 멕시코·2012년 그리스로 이어지는 소버린 채무 관리 표준의 원점",
        "Reach for Yield — 글로벌 투자자들의 신흥국 수익률 추구가 한국 위기 속 발행을 가능케 한 구조적 수요",
        "2001년 IMF 조기 상환 → 2024년 Moody's Aa2 — T+345bp에서 T+30bp로, 26년간 신용도 회복의 증거",
      ],
      en: [
        "1997 FX crisis: won/dollar collapsed 900→1,900; Korea requested the largest IMF bailout in history ($21B)",
        "April 1998: $4B external bond at T+345bp — the definitive case study in sovereign re-entry to international capital markets",
        "CAC provisions adopted early — the origin point of the sovereign debt management standard that became global norm via Mexico (2003) and Greece (2012)",
        "Reach for Yield: global investors' search for EM returns provided the structural demand that made issuance possible amid crisis",
        "2001 early IMF repayment → 2024 Moody's Aa2 — from T+345bp to T+30bp: 26 years of credit rehabilitation in one number",
      ],
    },
    assessment: {
      positives: [
        "$4B 전액 발행 성공 — IMF 지원 중 자력 시장 조달 가능성을 세계에 최초 입증",
        "CAC 조항 선례 수립 — 홀드아웃 채권자 문제를 예방하는 현대 소버린 채무 표준의 기원",
        "외환위기 조기 탈출 가속 — 발행 성공이 시장 신뢰를 회복시켜 2001년 IMF 조기 상환의 발판 제공",
        "한국 신용도 재건의 출발점 — Ba1(투기)에서 Aa2(최우량)까지의 26년 여정이 이 발행에서 시작",
      ],
      positivesEn: [
        "Full $4B placement — first global proof that a crisis-era sovereign can access markets while under IMF program",
        "CAC precedent established — origin of modern sovereign debt restructuring standards preventing holdout creditor abuse",
        "Accelerated IMF exit — restored market confidence paved the way for early IMF repayment in 2001",
        "Starting point of Korea's 26-year credit journey — from Ba1 (speculative) to Aa2 (top-tier) sovereign",
      ],
      risks: [
        "T+345bp 이자 비용 — 현재 조달 비용 대비 10배+ 프리미엄, 외환위기가 한국 납세자에게 남긴 금융 비용",
        "Reach for Yield 구조 의존 — 글로벌 risk-off 전환 시 즉각적 자본 이탈 가능성을 내포한 취약한 자금 구조",
        "단기적 신용 회복 불확실성 — 발행 당시 Moody's 투기등급, 추가 구조조정 가능성이 상존했던 고위험 시점",
      ],
      risksEn: [
        "T+345bp interest cost — 10x+ premium over current funding costs; the financial legacy of the crisis borne by Korean taxpayers",
        "Reach for Yield dependency — the funding structure exposed Korea to sudden capital flight on any global risk-off turn",
        "Near-term credit uncertainty — Moody's speculative grade at issuance, with risk of further restructuring far from resolved",
      ],
    },
    faq: [
      {
        q: "왜 한국은 T+345bp라는 높은 이자를 감수하면서 채권을 발행했나요?",
        qEn: "Why did Korea accept such a punishing T+345bp spread?",
        a: "외환위기 직후 한국의 신용 리스크를 시장이 그 수준으로 평가했기 때문입니다. 당시 Moody's는 한국 신용등급을 Baa2에서 Ba1(투기등급)으로 강등했고, 원화 가치는 반 토막이 났으며, IMF 구제금융을 받는 중이었습니다. 투자자 입장에서 T+345bp는 이 모든 리스크에 대한 보상이었습니다. 한국 정부 입장에서는 높은 이자를 감수하더라도 국제 자본시장에 복귀해 외화를 조달하는 것이 경제 재건의 첫 신호탄이었습니다. 시장이 '한국은 살아있다'는 것을 보는 것 자체가 IMF 구제금융만으로는 얻을 수 없는 신뢰 회복 효과였습니다.",
        aEn: "Because that's what the market priced Korea's credit risk at. Moody's had downgraded Korea from Baa2 to Ba1 (speculative grade); the won had halved in value; the country was under IMF program. For investors, T+345bp was the compensation for all those risks combined. For the Korean government, the high cost was worth paying — returning to international capital markets was the signal that Korea was still a functioning market borrower. The symbolic value of that market access, independent of IMF funds, was exactly what investor confidence needed to see.",
      },
      {
        q: "IMF 구제금융을 받고 있었는데 왜 따로 채권을 발행해야 했나요?",
        qEn: "Korea was already receiving IMF bailout funds — why issue bonds on top of that?",
        a: "IMF 자금과 채권 발행은 서로 다른 목적을 가집니다. IMF 자금은 정부의 대외 지급 의무를 충당하는 '최후의 보루' 성격이었습니다. 반면 외평채 발행은 두 가지를 동시에 달성했습니다. 첫째, 외환보유고를 직접 확충했습니다. 둘째, '한국은 자력으로 시장에서 자금을 조달할 수 있다'는 신호를 글로벌 투자자에게 전달했습니다. IMF 자금에만 의존하는 국가는 시장이 '이 나라는 스스로 설 수 없다'고 판단할 수 있습니다. 외평채 발행 성공은 그 인식을 바꾸는 데 결정적이었습니다.",
        aEn: "IMF funds and bond issuance serve different purposes. IMF money was a 'lender of last resort' backstop for external payment obligations. The external bond achieved two things simultaneously: it directly built foreign exchange reserves, and it sent a signal to global investors that 'Korea can access markets on its own terms.' A country relying solely on IMF funds risks being perceived as unable to stand independently. The successful bond issuance was crucial to reversing that perception.",
      },
      {
        q: "CAC가 1998년 외평채에 포함된 이유는 무엇이고, 왜 중요한가요?",
        qEn: "Why did Korea's 1998 bond include CAC, and why does it matter?",
        a: "CAC(집합행동조항)는 채권자의 일정 비율(통상 75%)이 채무조정에 동의하면 나머지 소수도 구속되는 조항입니다. 당시 아르헨티나·에콰도르 등에서 '홀드아웃 채권자' 문제 — 헤지펀드가 헐값에 채권을 사모아 전액 상환을 요구하며 소송을 제기하는 행위 — 가 심각한 문제로 부상하고 있었습니다. 한국은 잠재적 채무 재조정 상황에 대비해 이를 선제적으로 포함했습니다. 이 결정은 이후 멕시코(2003)가 모든 소버린 채권에 CAC를 표준 도입하는 흐름의 선례가 됐고, 2012년 그리스 구조조정에서 CAC가 대규모로 발동되는 역사로 이어집니다.",
        aEn: "CAC (Collective Action Clause) binds minority bondholders to a restructuring agreed by a qualified majority (typically 75%). At the time, 'holdout creditor' problems were escalating — hedge funds buying bonds at deep discounts and suing for full repayment were disrupting restructurings in Argentina and Ecuador. Korea included the clause preemptively to protect against such scenarios. This decision became the precedent for Mexico's 2003 standard adoption of CAC in all sovereign bonds, and eventually led to CAC's mass activation in Greece's 2012 restructuring.",
      },
      {
        q: "1998년 발행 후 한국의 신용등급과 스프레드는 어떻게 바뀌었나요?",
        qEn: "How did Korea's credit rating and spreads change after the 1998 issuance?",
        a: "1998년 Moody's 기준 Ba1(투기등급)에서 2002년 A3(투자적격)으로 회복했고, 2024년 현재는 Moody's Aa2, S&P AA-로 주요 선진국과 동등한 수준입니다. 달러 국채 스프레드는 T+345bp → T+30bp 수준으로 압축됐습니다. 300bp가 넘는 스프레드 개선은 발행사가 지불한 '위기 프리미엄'이 완전히 소화됐다는 의미입니다. 2001년 IMF 조기 상환이 이 회복의 가장 큰 전환점이었고, 2002년 한일 월드컵·반도체 수출 호황이 뒷받침했습니다.",
        aEn: "Korea recovered from Moody's Ba1 (speculative) in 1998 to A3 (investment grade) by 2002, and today stands at Moody's Aa2 and S&P AA- — on par with major developed economies. Dollar sovereign spreads compressed from T+345bp to around T+30bp. A 300bp+ improvement means the 'crisis premium' paid at issuance has been fully erased. The 2001 early IMF repayment was the critical turning point; the 2002 Korea-Japan World Cup and semiconductor export boom provided the macroeconomic underpinning.",
      },
      {
        q: "1998년 외평채의 주요 투자자는 누구였나요? 왜 그 상황에서 한국 채권을 샀을까요?",
        qEn: "Who bought Korea's 1998 bonds — and why would investors buy a crisis-era sovereign?",
        a: "주요 투자자는 글로벌 자산운용사, 헤지펀드, 일부 보험사였습니다. 동기는 두 가지였습니다. 첫째, '리커버리 베팅(recovery bet)' — 한국이 IMF 지원을 받고 강력한 구조조정을 진행 중이므로 회복 가능성이 높다는 전략적 판단. 둘째, Reach for Yield — 저금리 선진국 채권 시장에서 충분한 수익을 얻지 못하는 투자자들이 T+345bp라는 높은 스프레드에 매력을 느꼈습니다. 이 두 요소의 결합이 '위기 중 성공적 발행'을 가능하게 했습니다. 반면 중앙은행·연기금 등 보수적 투자자들은 Ba1 투기등급이라 규정상 참여할 수 없었습니다.",
        aEn: "The primary buyers were global asset managers, hedge funds, and select insurers. Motivation split into two camps: First, 'recovery bets' — Korea was under IMF support with aggressive structural reform underway, making full recovery a credible outcome. Second, Reach for Yield — investors unable to find adequate returns in low-spread developed markets were attracted by T+345bp. The combination of these factors enabled successful issuance amid crisis. Conservative investors like central banks and pension funds were excluded by their IG-only mandates, since Korea was rated Ba1 (speculative) at the time.",
      },
    ],
    references: [
      {
        id: 1,
        author: "Ministry of Finance and Economy, Republic of Korea",
        title: "1998 External Bond Offering Circular",
        source: "Euroclear/Clearstream, April 1998",
        year: "1998",
      },
      {
        id: 2,
        author: "IMF",
        title: "Republic of Korea — IMF Stand-By Arrangement",
        source: "IMF Press Release No. 97/55, December 1997",
        year: "1997",
        url: "https://www.imf.org/en/News/Articles/2015/09/14/01/49/pr9755",
      },
      {
        id: 3,
        author: "Bank for International Settlements (BIS)",
        title: "Collective Action Clauses in Sovereign Bond Contracts — Encouraging Greater Use",
        source: "BIS Quarterly Review, June 2003",
        year: "2003",
        url: "https://www.bis.org/publ/work118.htm",
      },
      {
        id: 4,
        author: "Moody's Investors Service",
        title: "Korea Sovereign Rating History",
        source: "Moody's Rating Action, 1997–2001",
        year: "2001",
      },
    ],
  },

  // ── C: FIG 드라마 ─────────────────────────────────────────────────────────────
  {
    slug: "credit-suisse-at1",
    title: "크레디트 스위스 AT1 전액상각 (2023) — 자본구조 위계의 역전",
    titleEn: "Credit Suisse AT1 Write-Down (2023) — The Capital Hierarchy Inverted",
    category: "fig",
    categoryLabel: "FIG 드라마",
    categoryLabelEn: "FIG Drama",
    excerpt: "170억 달러 AT1이 0이 됐다. 주주는 살았는데 채권자가 먼저 죽었다. 계약서를 읽어야 하는 이유의 완벽한 실물 교재.",
    excerptEn: "$17B of AT1 bonds went to zero. Equity holders got paid while bondholders got nothing. The ultimate real-world case study in why you must read the prospectus.",
    dealYear: 2023,
    issuer: "Credit Suisse Group AG",
    issuerEn: "Credit Suisse Group AG",
    readingMinutes: 16,
    tags: ["AT1", "CoCo", "FIG", "베일인", "PONV", "크레디트스위스"],
    tagsEn: ["AT1", "CoCo", "FIG", "Bail-in", "PONV", "Credit Suisse"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Credit Suisse Group AG" },
      { labelKo: "사건 일자", labelEn: "Event Date", value: "19 March 2023" },
      { labelKo: "AT1 상각 규모", labelEn: "AT1 Written Down", value: "CHF 16B ($17B)" },
      { labelKo: "주주 수령액", labelEn: "Equity Recovery", value: "CHF 3B (UBS 주식)", valueEn: "CHF 3B (UBS shares)" },
      { labelKo: "인수자", labelEn: "Acquirer", value: "UBS Group AG" },
      { labelKo: "트리거", labelEn: "Trigger", value: "PONV (FINMA 결정)", valueEn: "PONV (FINMA decision)" },
      { labelKo: "의의", labelEn: "Significance", value: "자본구조 위계 역전", valueEn: "Capital structure hierarchy inverted" },
    ],
    sections: [
      {
        heading: "AT1이란 무엇인가 — 채권의 탈을 쓴 자본",
        headingEn: "What Is AT1 — Capital Disguised as a Bond",
        body:
`AT1(Additional Tier 1)은 은행의 규제자본 중 가장 아래층에 해당하는 자본 도구다. 바젤 III 체계에서 은행 자본은 세 층으로 나뉜다: CET1(보통주 자본, 핵심 완충재) — Tier 1 자본(AT1 포함) — Tier 2 자본(후순위채). 그리고 그 아래에 선순위 채무와 예금이 있다.

AT1은 겉보기엔 채권과 흡사하다. 쿠폰이 있고, 콜 날짜가 있고, 거래소에서 거래된다. Bloomberg 터미널에서 가격을 볼 수 있고, ISIN 번호도 있다. 하지만 법적 성격은 자본이다. 회사가 망할 위기에 처하거나, 감독당국이 "이 은행은 더 이상 정상적으로 기능할 수 없다"고 판단하면(PONV, Point of Non-Viability), AT1은 손실을 흡수하도록 설계되어 있다 — 원금이 전액 혹은 일부 상각되거나, 주식으로 강제 전환된다.

은행이 AT1을 발행하는 이유는 명확하다: 주식보다 싸게 규제자본을 조달할 수 있기 때문이다. 투자자에겐 주식보다 선순위라는 인식 하에 높은 쿠폰을 제공한다. 시장이 이 구조를 오랫동안 수용해왔던 이유는, AT1의 손실흡수 조항이 실제로 발동된 적이 없었기 때문이다 — 2023년 3월 19일 이전까지는.`,

        bodyEn:
`AT1 (Additional Tier 1) is the lowest-ranking form of regulatory capital in a bank's capital structure. Under the Basel III framework, bank capital falls into three layers: CET1 (Common Equity Tier 1, the core buffer) — Tier 1 capital (including AT1) — Tier 2 capital (subordinated debt). Below all of that sit senior debt and deposits.

AT1 looks like a bond. It has a coupon, a call date, and trades on exchanges. You can check its price on Bloomberg, and it has an ISIN. But its legal nature is capital. When a bank is in distress — or when its regulator determines it is no longer viable (Point of Non-Viability, PONV) — AT1 is designed to absorb losses. The principal can be fully or partially written down, or forcibly converted into equity.

Why do banks issue AT1? Because it is cheaper regulatory capital than equity. For investors, AT1 offers higher coupons than senior debt, with the perceived comfort of ranking above equity. Markets had accepted this structure for years because the loss-absorption provisions had never actually been triggered — until March 19, 2023.`,
      },
      {
        heading: "172시간 — 붕괴의 타임라인",
        headingEn: "172 Hours — The Collapse Timeline",
        body:
`2023년 3월 15일(수요일) 오전, 크레디트 스위스의 최대 주주인 사우디국립은행 회장이 추가 자본 지원이 없을 것이라고 발언했다. 이미 취약했던 시장 심리는 즉각 무너졌다. CS 주가는 하루에 25% 이상 급락했고, CS의 CDS 스프레드(신용파산스왑, 부도 보험료)는 수백 bp 폭등했다. 뱅크런이 시작됐다.

3월 16일(목요일), 스위스 국립은행(SNB)이 CS에 CHF 500억 긴급 유동성 지원 라인을 공급했다. 시장은 안도와 의심 사이를 오갔다. 하지만 예금 이탈은 멈추지 않았다.

3월 17~18일 주말, 스위스 당국(FINMA·SNB·정부)과 UBS 사이에 비상 협상이 진행됐다. 조건은 빠르게 잡혔다: UBS가 CS를 인수하는 대가로 CHF 30억. 그러나 협상의 핵심 쟁점이 있었다 — AT1 처리 방식이었다.

3월 19일(일요일) 밤, 발표가 나왔다: UBS가 CS를 주당 0.76 CHF(CHF 30억 규모)로 인수. 그리고 CHF 160억어치 AT1은 전액 0으로 상각. 주식은 살았고, AT1은 죽었다.`,

        bodyEn:
`On the morning of Wednesday, March 15, 2023, the chairman of Saudi National Bank — Credit Suisse's largest shareholder — said publicly that no further capital support would be forthcoming. Market sentiment, already fragile, collapsed immediately. CS shares fell more than 25% in a single day; CS CDS spreads (the cost of default insurance) blew out by hundreds of basis points. A bank run began.

Thursday, March 16: The Swiss National Bank provided a CHF 50 billion emergency liquidity backstop to CS. Markets oscillated between relief and skepticism. But deposit outflows did not stop.

The weekend of March 17–18: Emergency negotiations proceeded between Swiss authorities (FINMA, SNB, the government) and UBS. The terms came together quickly: UBS would acquire CS for CHF 3 billion. But a critical question hung over the talks — what would happen to the AT1 bonds?

Sunday night, March 19: The announcement: UBS acquires CS at 0.76 CHF per share (CHF 3 billion total). And CHF 16 billion of AT1 bonds written down to zero. Equity survived. AT1 did not.`,
      },
      {
        heading: "자본구조 위계의 역전 — 왜 채권자가 주주보다 먼저 죽었나",
        headingEn: "The Hierarchy Inverted — Why Bondholders Were Wiped Before Equity",
        body:
`금융의 기본 원칙이 있다: 자본구조에서 더 선순위인 클레임이 더 먼저 보호된다. 주식은 가장 후순위라 회사가 망하면 제일 먼저 손실을 입는다. AT1은 주식 바로 위다. 따라서 이론적으로 주식이 0이 되기 전에 AT1이 0이 될 수는 없다.

그런데 3월 19일, 정확히 그 일이 일어났다: AT1은 0이 됐고, CS 주주들은 주당 0.76 CHF짜리 UBS 주식을 받았다.

어떻게 이런 일이 가능했나? 답은 AT1 prospectus에 있었다.

크레디트 스위스의 AT1 조건부 약정(indenture)에는 스위스 법률(FINMA 권한)에 따른 PONV 조항이 명시되어 있었다: FINMA가 은행이 더 이상 정상적으로 기능할 수 없다고 판단하는 순간, AT1 원금 전액이 자동으로 상각될 수 있다. 그리고 이 조항은 주식 보호 여부와 무관하게 작동하도록 설계되어 있었다.

EU나 영국의 AT1은 일반적으로 이와 다르다: 주식이 먼저 손실을 흡수하는 구조다. 스위스는 달랐다. 투자자들 중 상당수는 이 차이를 충분히 인식하지 못한 채 CS AT1에 투자했다는 것이 이후 소송들에서 드러난다.`,

        bodyEn:
`Finance has a foundational principle: claims higher in the capital structure are protected before claims lower down. Equity is the most junior — it absorbs losses first when a company fails. AT1 sits just above equity. Therefore, in theory, AT1 cannot be wiped out before equity goes to zero.

On March 19, exactly that happened: AT1 was written to zero while CS shareholders received 0.76 CHF per share in UBS stock.

How was this possible? The answer was in the prospectus.

Credit Suisse's AT1 indentures contained a PONV clause tied to Swiss law (FINMA authority): upon FINMA's determination that the bank was no longer viable, the full principal of AT1 bonds could be written down to zero automatically. This provision was drafted to operate regardless of whether equity was protected.

EU and UK AT1s generally work differently — equity must absorb losses first under those frameworks. Switzerland was distinct. Many investors in CS AT1 had not fully internalized this difference, which became clear through the subsequent wave of bondholder litigation.`,
      },
      {
        heading: "시장의 충격 — 월요일 아침",
        headingEn: "Market Shock — Monday Morning",
        body:
`3월 20일(월요일) 아침 장이 열리자, 글로벌 AT1 시장은 즉각적으로 반응했다. 유럽 주요 은행들의 AT1 채권 스프레드가 100~200bp 폭등했다. 일부 AT1은 액면가 대비 70~80센트 수준으로 급락했다.

투자자들이 던진 질문은 하나였다: "내가 가진 AT1에도 같은 조항이 있는가?"

유럽중앙은행(ECB), 유럽은행감독청(EBA), 영국 PRA는 동일한 날 긴급 성명을 발표했다. 요지: EU와 영국의 AT1은 스위스와 다르다. 일반 자본구조 위계가 유지된다 — 주식이 먼저 손실을 흡수해야 AT1 손실흡수가 가능하다.

이 성명들이 어느 정도 시장을 안정시켰지만, 완전한 정상화까지는 수주가 걸렸다. 글로벌 FIG AT1 스프레드는 이 사건 이후 구조적으로 더 넓은 수준에서 재정립됐다 — 시장이 AT1의 법적 리스크를 재평가했기 때문이다.

또 다른 충격파: 아시아와 중동의 은행들이 발행한 AT1도 같은 의문의 대상이 됐다. 투자자들은 각 관할권의 PONV 조항 차이를 공부하기 시작했다.`,

        bodyEn:
`When markets opened on Monday, March 20, the global AT1 market reacted immediately. Spreads on AT1 bonds issued by major European banks blew out 100–200bp. Some AT1s fell to 70–80 cents on the dollar.

Investors had one question: "Does my AT1 have the same provision?"

The ECB, the European Banking Authority (EBA), and the UK's PRA all issued emergency statements the same day. The message: EU and UK AT1s operate differently from Swiss ones. The standard capital hierarchy holds — equity must absorb losses before AT1 can be written down.

These statements provided some stabilization, but full normalization took weeks. Global FIG AT1 spreads reset structurally wider after this event, as the market re-priced the legal risk embedded in the instrument.

A secondary shockwave: AT1 bonds issued by Asian and Middle Eastern banks also came under scrutiny. Investors began studying jurisdictional differences in PONV language across prospectuses — work that, for many, should have been done before the investment.`,
      },
      {
        heading: "계약서가 답이었다 — Prospectus 정독의 중요성",
        headingEn: "The Answer Was in the Prospectus",
        body:
`CS AT1 사태의 가장 큰 교훈은 아이러니하게도 복잡하지 않다: 계약서를 읽어야 한다.

CS AT1의 조건에 PONV 전액 상각 조항이 있었고, 스위스 법률이 그 조항의 집행 권한을 FINMA에 부여했다. 이것은 비밀이 아니었다 — prospectus에 명시되어 있었다. 투자자가 이 조항의 의미를 완전히 이해하고 있었다면, 3월 19일의 결과는 법적으로 예측 가능한 결과였다.

그러나 현실에서 많은 기관 투자자들이 "AT1은 주식보다는 선순위니까 주식이 살면 내 돈도 괜찮겠지"라는 시장 관행적 추론(market convention)에 의존했다. 스위스 AT1이 그 관행과 다르게 작동한다는 사실을 충분히 반영하지 못했다.

이 사건은 세 가지를 시장에 새겼다. 첫째, AT1은 채권이 아니다 — 채권처럼 거래되는 자본 도구다. 둘째, PONV 조항의 내용과 적용 관할권 법률을 이해하지 못하면 AT1 투자는 불완전한 정보에 기반한다. 셋째, "이전에도 이렇게 했으니 이번에도 괜찮겠지"는 금융시장에서 가장 비싼 가정이다.

AT1 발행 시장은 이 사건 이후에도 재개됐다. 투자자들이 계속 들어오는 이유는 여전히 AT1의 높은 쿠폰이 매력적이기 때문이다. 달라진 것은: 이제 계약서를 더 꼼꼼히 읽는 사람이 많아졌다는 것이다.`,

        bodyEn:
`The central lesson of the CS AT1 episode is, ironically, not complex: read the prospectus.

The CS AT1 indentures contained a full write-down PONV provision, and Swiss law gave FINMA the authority to enforce it. This was not hidden — it was in the offering document. For investors who had fully understood that provision, the March 19 outcome was legally foreseeable.

In practice, however, many institutional investors had relied on market convention reasoning: "AT1 ranks above equity, so as long as equity gets something, I'll be fine." They had not sufficiently accounted for the fact that Swiss AT1 operated differently from that convention.

This event imprinted three lessons on the market. First: AT1 is not a bond — it is a capital instrument that happens to trade like one. Second: without understanding the specific PONV language and the applicable jurisdiction's regulatory powers, any AT1 investment is made on incomplete information. Third: "this is how it's always been done" is the most expensive assumption in capital markets.

The AT1 primary market reopened after this event. Investors keep coming because the coupons remain attractive. What changed: more of them now read the contract first.`,
      },
    ],
    keyTerms: [
      {
        term: "AT1 (Additional Tier 1 자본)",
        termEn: "AT1 — Additional Tier 1 Capital",
        definition: "은행 자본구조에서 CET1(보통주 자본) 바로 위에 위치하는 규제자본 도구. 쿠폰이 있고 거래소에서 거래되어 채권처럼 보이지만, 법적으로는 자본이다. 발행은행이 자본 비율 트리거에 도달하거나 감독당국이 PONV를 선언하면 원금이 상각되거나 주식으로 전환될 수 있다. 은행은 주식보다 싸게 규제자본을 확충할 수 있어 발행 유인이 있다.",
        definitionEn: "A regulatory capital instrument that ranks just above CET1 (common equity) in a bank's capital structure. It looks and trades like a bond — it has a coupon and an ISIN — but is legally classified as capital. If the issuing bank hits a capital ratio trigger or the regulator declares PONV, the principal can be written down or converted into equity. Banks issue AT1 because it provides regulatory capital more cheaply than equity.",
      },
      {
        term: "PONV (비존속성 판단, Point of Non-Viability)",
        termEn: "PONV — Point of Non-Viability",
        definition: "감독당국이 은행이 더 이상 정상 기능을 유지할 수 없다고 판단하는 시점. 이 판단이 내려지면 AT1/CoCo 조항에 따라 원금 상각 혹은 주식 전환이 자동으로 트리거될 수 있다. PONV의 정의와 집행 방식은 관할권마다 다르며, 스위스는 EU·영국과 달리 주식 보호와 무관하게 AT1을 먼저 상각할 수 있도록 설계되어 있었다.",
        definitionEn: "The moment at which a regulator determines that a bank can no longer function normally. When PONV is declared, AT1/CoCo terms can trigger automatic principal write-down or equity conversion. The precise definition and enforcement of PONV differs by jurisdiction — Swiss AT1s, unlike EU or UK equivalents, were structured to allow AT1 write-down regardless of whether equity was protected.",
      },
      {
        term: "CoCo (조건부 전환사채)",
        termEn: "CoCo — Contingent Convertible Bond",
        definition: "특정 조건(자본 비율 하락 또는 PONV)이 충족될 때 자동으로 손실을 흡수하도록 설계된 채권형 자본 도구. AT1이 가장 대표적인 CoCo 유형이다. '조건부(Contingent)'란 특정 트리거 이벤트가 발생해야만 손실흡수 기능이 활성화됨을 의미한다. 평시에는 일반 채권처럼 거래되지만, 트리거 발동 시 채권 투자자가 갑자기 손실을 부담하게 된다.",
        definitionEn: "A bond-like capital instrument designed to automatically absorb losses when a specified trigger is hit — either a capital ratio threshold or PONV. AT1 is the most common type of CoCo. 'Contingent' means the loss-absorption feature only activates upon a trigger event. In normal times it trades like a bond; when the trigger fires, bondholders suddenly bear losses.",
      },
      {
        term: "베일인 (Bail-in)",
        termEn: "Bail-in",
        definition: "은행 위기 시 정부 세금(납세자)이 아닌 은행의 채권자와 주주가 손실을 부담하게 하는 메커니즘. CS AT1 전액 상각은 광의의 베일인 사례다. 베일인의 반대 개념은 베일아웃(bail-out): 정부가 공적 자금을 투입해 은행을 구제하는 방식. 2008년 금융위기 이후 국제 규제는 납세자 부담을 줄이기 위해 베일인 우선 원칙을 도입했다.",
        definitionEn: "A mechanism requiring a bank's creditors and shareholders — rather than taxpayers — to bear losses in a crisis. The CS AT1 write-down is a bail-in event in the broad sense. The opposite is a bail-out: government injection of public funds to rescue a bank. Post-2008 regulatory frameworks globally introduced a bail-in-first principle to reduce taxpayer exposure.",
      },
    ],
    relatedMarket101Slugs: ["at1-capital", "ponv", "coco-bond", "bail-in", "oas", "dcm-ecosystem"],
    relatedDealSlugs: ["korea-1998-external-bond"],
    executiveSummary: {
      ko: [
        "172시간의 붕괴 — 2023년 3월 15–19일, 167년 역사의 크레디트 스위스가 주말 사이에 소멸",
        "CHF 16B AT1 전액 상각 — 사상 최대 규모의 AT1 손실, 주주는 CHF 0.76/주를 받았지만 AT1 채권자는 제로",
        "채권 위계 역전 — '채권이 주식보다 안전하다'는 자본시장의 기본 원칙이 규제당국 결정 하나로 파괴",
        "PONV 트리거 — FINMA의 비존속 판단이 투자설명서 조항을 발동, 시장·법원이 아닌 규제당국이 손실 확정",
        "교훈: AT1 투자자는 쿠폰뿐 아니라 발행 관할 규제당국의 PONV 해석 권한과 투자설명서 조항을 반드시 숙지해야 한다",
      ],
      en: [
        "172-hour collapse: March 15–19, 2023 — 167 years of Credit Suisse history ended over a weekend",
        "CHF 16B AT1 written to zero — the largest AT1 loss in history; equity shareholders received CHF 0.76/share while AT1 holders got nothing",
        "Capital hierarchy inverted — the fundamental principle that 'bonds are safer than equity' was destroyed by a single regulatory decision",
        "PONV trigger: FINMA's non-viability determination activated prospectus clauses — a regulator, not markets or courts, decided the loss",
        "Lesson: AT1 investors must understand not just coupons but the PONV interpretation authority of the home regulator and exact prospectus language",
      ],
    },
    assessment: {
      positives: [
        "글로벌 시스템 리스크 차단 — UBS 합병으로 아시아 시장 개장 전 패닉 확산을 막은 스위스 당국의 신속한 결단",
        "AT1 시장 회복력 확인 — 사태 3~6개월 후 스프레드 정상화, 시장이 규제 리스크를 새로운 프리미엄으로 반영해 흡수",
        "투자자 교육 효과 — PONV 조항과 AT1의 진짜 손실 구조에 대한 전 세계 시장의 이해도가 근본적으로 높아짐",
        "EBA·SRB·ECB 즉각 성명 — 유럽 내 AT1은 표준 위계(주주 먼저) 적용이라는 명확한 시그널로 전염 효과 차단",
      ],
      positivesEn: [
        "Global systemic risk contained — Swiss authorities' swift weekend merger prevented panic from spreading to Asian market open",
        "AT1 market resilience confirmed — spreads normalized within 3–6 months; markets absorbed regulatory risk by repricing AT1 premiums",
        "Investor education effect — global market understanding of PONV clauses and real AT1 loss structure fundamentally elevated",
        "Immediate EBA/SRB/ECB statement — clear signal that EU AT1s follow standard hierarchy (equity-first) contained contagion risk",
      ],
      risks: [
        "채권 위계 선례 훼손 — 규제당국 재량에 따라 AT1이 주식보다 먼저 소각될 수 있다는 법적 불확실성이 시장에 남음",
        "규제 재량 리스크 노출 — PONV 결정이 규제당국의 손에 달려있어 투자자가 예측·통제할 수 없는 리스크",
        "아시아 리테일 피해 — 홍콩·싱가포르 고액 자산가 피해 집중, AT1의 복잡성과 리테일 판매 적합성 논란 재점화",
      ],
      risksEn: [
        "Capital hierarchy precedent damaged — legal uncertainty remains that AT1s can be written down before equity at a regulator's discretion",
        "Regulatory discretion risk exposed — PONV decisions lie in regulatory hands, representing a risk investors cannot predict or control",
        "Asian retail investor harm — concentrated losses among HK/SG high-net-worth clients reignited debate on AT1 suitability for retail distribution",
      ],
    },
    faq: [
      {
        q: "왜 AT1 채권자가 주주보다 먼저 완전히 손실을 봤나요?",
        qEn: "Why did AT1 bondholders suffer a complete loss while shareholders received something?",
        a: "일반적인 자본구조에서는 채권자가 주주보다 상환 우선순위가 높습니다. 그러나 CS AT1 투자설명서에는 FINMA가 '비존속(non-viable)' 판단을 내릴 경우 AT1 전액이 즉시 상각된다는 조항이 명시돼 있었습니다. FINMA는 UBS 합병 과정에서 이 조항을 발동했습니다. 주주가 CHF 0.76/주를 받은 것은 UBS가 합병 대가로 지급한 것이고, AT1 상각은 그와 별개의 규제 결정이었습니다. 스위스 법원은 이후 FINMA의 권한을 최종 인정했지만, 이 결정은 '채권이 주식보다 안전하다'는 자본시장의 기본 원칙을 정면으로 위반한 사례로 역사에 남았습니다.",
        aEn: "In standard capital structures, bondholders rank above shareholders in repayment priority. However, CS's AT1 prospectuses explicitly stated that upon FINMA determining the bank 'non-viable,' the AT1 bonds would be immediately written down to zero. FINMA triggered this clause during the UBS merger process. The CHF 0.76/share equity payment was UBS's merger consideration — a separate transaction from the AT1 write-down, which was a pure regulatory decision. Swiss courts subsequently upheld FINMA's authority, but this decision entered capital markets history as a direct violation of the fundamental principle that bonds rank senior to equity.",
      },
      {
        q: "CS AT1 사태 이후 글로벌 AT1 시장은 어떻게 변했나요?",
        qEn: "How did global AT1 markets change after the CS event?",
        a: "직후 3일간 글로벌 AT1 스프레드가 200bp 이상 급등했습니다. EBA, SRB, ECB는 즉각 공동 성명을 발표해 '유럽 내 AT1은 스위스와 달리 표준 손실흡수 순서(주주 먼저)가 유지된다'고 강조했습니다. 이 성명이 패닉을 일부 진정시켰고, 3~6개월 후 스프레드가 정상화됐습니다. 그러나 투자자들은 이후 발행사의 본국 규제당국 성향, PONV 트리거 조건의 정확한 문구, 관할 법률을 훨씬 더 면밀히 검토하게 됐습니다. AT1 발행 프리미엄도 전반적으로 상승했습니다.",
        aEn: "Global AT1 spreads spiked 200bps+ in the three days following the event. The EBA, SRB, and ECB issued a joint statement immediately clarifying that 'EU AT1s, unlike Switzerland, maintain standard loss absorption hierarchy (equity first).' This statement partially calmed the panic, and spreads normalized within 3–6 months. However, investors subsequently conduct much more rigorous scrutiny of the home regulator's disposition, the exact PONV trigger language in prospectuses, and governing law. AT1 issuance premiums also rose structurally.",
      },
      {
        q: "PONV(비존속 판단)는 누가, 어떤 기준으로 결정하나요?",
        qEn: "Who decides PONV and on what basis?",
        a: "PONV는 발행사의 본국 규제당국이 결정합니다. CS의 경우 FINMA였습니다. 결정 기준은 대략 세 가지입니다: (1) 자본비율이 트리거 임계치 이하로 하락, (2) 공적 지원 없이 지급 불능 예상, (3) 시스템 리스크로 인한 규제당국의 긴급 개입 필요. 가장 중요한 점은 이 판단이 시장이나 법원이 아닌 규제당국의 '재량'에 달려있다는 것입니다. CS 사태에서 FINMA는 '월요일 아시아 시장 개장 전에 해결해야 한다'는 시간적 압박 속에서 주말 사이에 이 권한을 행사했습니다.",
        aEn: "PONV is determined by the issuer's home regulator — in CS's case, FINMA. The criteria roughly span three grounds: (1) capital ratios falling below trigger thresholds, (2) anticipated insolvency without public support, (3) need for urgent regulatory intervention due to systemic risk. Most critically, this determination rests on the regulator's discretion — not market signals or court rulings. In the CS case, FINMA exercised this authority over a weekend under the constraint of resolving the situation before Asian markets opened Monday morning.",
      },
      {
        q: "CS는 왜 자력으로 생존하지 못하고 강제 인수됐나요?",
        qEn: "Why couldn't CS survive independently and was instead forced into a merger?",
        a: "2022년부터 시작된 고객 자금 이탈이 2023년 3월 SVB(실리콘밸리은행) 붕괴로 촉발된 글로벌 은행 불안과 맞물리며 가속됐습니다. 결정타는 3월 15일 CS의 최대 주주인 사우디 내셔널 은행이 '추가 자본 지원 불가'를 선언한 것이었습니다. 이 발언 직후 CS 주가는 하루 만에 30% 폭락하고 CDS 스프레드가 폭발적으로 상승했습니다. 스위스 중앙은행이 1,500억 프랑 유동성 지원을 제공했음에도 뱅크런이 진정되지 않자 FINMA와 스위스 정부는 UBS 강제 합병 외에 선택지가 없다고 판단했습니다.",
        aEn: "A customer deposit flight that began in 2022 accelerated when the SVB collapse in March 2023 triggered global banking contagion. The fatal blow came on March 15 when CS's largest shareholder, Saudi National Bank, declared it would provide no further capital support. CS shares fell 30% that day and CDS spreads exploded. Even after the Swiss National Bank provided CHF 150B in liquidity support, the bank run wouldn't stop. With depositor confidence gone and markets in panic, FINMA and the Swiss government concluded that a forced UBS merger was the only option.",
      },
      {
        q: "CS AT1 사태에서 가장 큰 손실을 입은 투자자는 누구였나요?",
        qEn: "Who suffered the biggest losses from the CS AT1 write-down?",
        a: "CHF 16B 손실의 주요 피해자는 CS AT1 채권을 보유한 기관투자자와 일부 개인 투자자였습니다. 특히 아시아 프라이빗 뱅킹 채널을 통해 AT1을 매입한 홍콩·싱가포르의 고액 자산가들이 큰 피해를 입었습니다. 이들에게 AT1은 높은 쿠폰을 제공하는 '고급 채권'으로 판매됐지만, PONV 조항의 의미를 충분히 이해하지 못한 경우가 많았습니다. 홍콩·싱가포르 규제당국은 이후 AT1 리테일 판매에 대한 적합성 심사 강화를 요구했습니다.",
        aEn: "The primary victims of the CHF 16B loss were institutional investors and select individual investors holding CS AT1 bonds. High-net-worth clients in Hong Kong and Singapore who purchased AT1s through private banking channels suffered particularly concentrated losses. These bonds were often sold to them as 'premium bonds' with attractive coupons, but many buyers had limited understanding of the PONV clause implications. Hong Kong and Singapore regulators subsequently tightened suitability requirements for AT1 distribution to retail investors.",
      },
    ],
    references: [
      {
        id: 1,
        author: "FINMA",
        title: "FINMA Approves Merger of Credit Suisse and UBS",
        source: "FINMA Press Release, 19 March 2023",
        year: "2023",
        url: "https://www.finma.ch/en/news/2023/03/20230319-mm-cs-ubs/",
      },
      {
        id: 2,
        author: "European Banking Authority (EBA)",
        title: "EBA Statement on AT1 Instruments in the Context of the CS Rescue",
        source: "EBA Statement, 20 March 2023",
        year: "2023",
        url: "https://www.eba.europa.eu/eba-statement-at1-instruments-context-cs-rescue",
      },
      {
        id: 3,
        author: "Bank for International Settlements (BIS)",
        title: "Basel III: A Global Regulatory Framework — AT1 Capital Requirements",
        source: "BIS Basel Framework, CRE10-CRE20, 2023",
        year: "2023",
        url: "https://www.bis.org/basel_framework/",
      },
      {
        id: 4,
        author: "Swiss Federal Council",
        title: "Federal Council and FINMA Ensure Stability of Financial System",
        source: "Swiss Federal Council Press Release, 19 March 2023",
        year: "2023",
        url: "https://www.admin.ch/gov/en/start/documentation/media-releases.msg-id-93765.html",
      },
    ],
  },

  {
    slug: "deutsche-bank-coco-shock",
    title: "도이체방크 코코 쇼크 (2016) — AT1 쿠폰 공포의 탄생",
    titleEn: "Deutsche Bank CoCo Shock (2016) — The Birth of AT1 Coupon Fear",
    category: "fig",
    categoryLabel: "FIG 드라마",
    categoryLabelEn: "FIG Drama",
    excerpt: "AT1 쿠폰 미지급 공포가 시장을 처음 흔든 사건. CS AT1 사태의 예고편이자, 계약서를 읽어야 하는 이유.",
    excerptEn: "The first market scare over AT1 coupon non-payment. The preview to the CS AT1 episode and a lesson in reading prospectuses.",
    dealYear: 2016,
    issuer: "Deutsche Bank AG",
    issuerEn: "Deutsche Bank AG",
    readingMinutes: 11,
    tags: ["AT1", "CoCo", "FIG", "도이체방크", "ADI", "쿠폰리스크"],
    tagsEn: ["AT1", "CoCo", "FIG", "Deutsche Bank", "ADI", "Coupon Risk"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Deutsche Bank AG" },
      { labelKo: "사건연도", labelEn: "Year", value: "Jan–Feb 2016" },
      { labelKo: "이슈", labelEn: "Issue", value: "ADI 부족 → AT1 쿠폰 미지급 공포", valueEn: "Insufficient ADI → AT1 coupon non-payment fear" },
      { labelKo: "주가 낙폭", labelEn: "Stock Decline", value: "~30% (Jan 2016)" },
      { labelKo: "AT1 가격 낙폭", labelEn: "AT1 Price Drop", value: "~100→70 (일부)", valueEn: "~100→70 (partial)" },
      { labelKo: "결과", labelEn: "Outcome", value: "전액 쿠폰 지급 (공포 해소)", valueEn: "Full coupon paid (fear resolved)" },
    ],
    sections: [
      {
        heading: "2015~2016년 도이체방크의 위기",
        headingEn: "Deutsche Bank's 2015–2016 Crisis",
        body:
`2015년, 도이체방크는 역대 최대 규모의 손실을 발표했다. 소송 비용, 구조조정 비용, 손상차손을 합쳐 약 68억 달러의 순손실. 1850년 창립 이래 최대 적자였다.

이 맥락에서 2016년 1월 시장에 질문이 떠돌기 시작했다: "도이체방크가 AT1 쿠폰을 지급할 수 있는가?"

AT1 채권(Additional Tier 1)은 영구채다 — 만기가 없고, 쿠폰 지급은 발행사의 선택 사항이다. 쿠폰을 지급하지 않아도 법적 디폴트가 아니다. 더 중요한 것은 EU 자본 규정에 따른 ADI(Amount Distributable Insufficient) 조항 — 은행의 배당 가능 이익이 부족할 경우 AT1 쿠폰 지급이 의무적으로 제한된다.

도이체방크의 거대한 손실은 ADI에 영향을 줄 수 있었다. 시장은 "혹시 쿠폰을 못 받는 것 아닌가?"라는 질문을 가격에 반영하기 시작했다.

AT1 채권 가격은 일부 종목에서 액면가의 70%대로 추락했다. 도이체방크 주가는 1월 한 달 동안 30% 가까이 폭락했다. 투자자들의 공포는 실제였다.`,
        bodyEn:
`In 2015, Deutsche Bank posted its largest loss in history — approximately $6.8 billion in net losses after accounting for litigation settlements, restructuring charges, and impairments. The biggest annual loss since the bank's founding in 1850.

In this context, a question began circulating in markets in January 2016: "Can Deutsche Bank pay its AT1 coupon?"

AT1 bonds (Additional Tier 1) are perpetual instruments — no maturity date, and coupon payments are at the issuer's discretion. Skipping a coupon is not legally a default. More critically, EU capital regulations include an ADI (Amount Distributable Insufficient) mechanism — when a bank's distributable profits fall below a threshold, AT1 coupon payments are mandatorily restricted.

Deutsche Bank's massive losses could affect its ADI. Markets began pricing in the possibility: "What if we don't receive the coupon?"

Some AT1 bond prices fell into the 70s (from par of 100). Deutsche Bank's stock fell nearly 30% in January alone. The fear was real.`,
      },
      {
        heading: "ADI 메커니즘 — 왜 쿠폰 리스크가 존재하나",
        headingEn: "The ADI Mechanism — Why Coupon Risk Exists",
        body:
`CRD IV(자본요건지침 IV)와 CRR(자본요건규정)에 따라, 유럽 은행들의 AT1 쿠폰 지급은 ADI에 제약된다. ADI = 당기순이익 + 이월잉여금 - 배당금 및 기타 자본 분배. 이 금액이 부족하면 AT1 쿠폰은 지급되지 않는다.

도이체방크의 경우 계산은 복잡했다. 독일 HGB(상법) 기준 재무제표에서 도이체방크의 이월잉여금(retained earnings)이 어느 정도인가? 2015년 대규모 손실이 HGB 기준으로 얼마나 반영됐는가?

시장이 두려워한 시나리오: 도이체방크가 2016년 AT1에 쿠폰을 지급할 ADI가 부족하다.

도이체방크 경영진은 적극적으로 해명에 나섰다. 2016년 2월 도이체방크 공동 CEO 존 크라이언(John Cryan)은 "우리는 2016년과 2017년 AT1 쿠폰을 지급하기에 충분한 잉여 자원을 갖고 있다"고 공식 발표했다. 이 발표 이후 시장이 진정됐다.

결국 도이체방크는 모든 AT1 쿠폰을 예정대로 지급했다. 공포는 지나쳤다 — 그러나 공포 자체는 계약서에 명시된 리스크에 기반한 것이었다.`,
        bodyEn:
`Under CRD IV (Capital Requirements Directive IV) and CRR (Capital Requirements Regulation), AT1 coupon payments at European banks are subject to ADI constraints. ADI = current period net profit + retained earnings - dividends and other capital distributions. If this amount is insufficient, AT1 coupons are not paid.

For Deutsche Bank, the calculation was complex. In financial statements prepared under German HGB (Commercial Code): what were Deutsche Bank's retained earnings? How much of the 2015 losses would be reflected under HGB accounting?

The feared scenario: Deutsche Bank has insufficient ADI to pay AT1 coupons in 2016.

Deutsche Bank management responded aggressively. In February 2016, co-CEO John Cryan issued a formal statement: "We have adequate resources to pay AT1 coupons in 2016 and 2017." Markets stabilized following this announcement.

In the end, Deutsche Bank paid all AT1 coupons as scheduled. The fear had been excessive — but the fear itself was grounded in risk explicitly written into the bond contracts.`,
      },
      {
        heading: "시장의 반응 — 가격과 스프레드의 실시간 공포",
        headingEn: "Market Reaction — Real-Time Fear in Prices and Spreads",
        body:
`2016년 1월 말~2월 초 독일 AT1 채권시장은 극도로 혼란스러웠다. 도이체방크뿐 아니라 다른 유럽 은행 AT1 채권들도 함께 매도됐다.

핵심 패턴:
• 도이체방크 주가: €28 → €14 (1개월, -50%)
• 도이체방크 6.25% AT1: ~100 → ~70 (액면 대비 30% 손실)
• 글로벌 AT1 스프레드: +200bp 이상 확대
• CDS(신용부도스왑) 5년: 100bp → 250bp

이 가격 움직임의 의미: 시장은 도이체방크의 AT1 쿠폰 미지급을 50% 이상의 확률로 봤다는 해석이 가능하다.

공포가 실제로 얼마나 과도했는지는 이후에 밝혀졌다. 도이체방크는 2016년 AT1 쿠폰을 정상 지급했다. 가격은 회복됐다. 그러나 이 에피소드는 채권시장에 중요한 교훈을 남겼다: AT1 쿠폰 리스크는 계약서에 명시된 실제 리스크다. 2023년 CS AT1 전액상각이 이 교훈을 최종적으로 각인시켰다.`,
        bodyEn:
`In late January through early February 2016, the European AT1 market was in extreme turmoil. Not just Deutsche Bank's bonds — other European bank AT1s were sold off simultaneously.

Key price movements:
• Deutsche Bank stock: €28 → €14 (one month, -50%)
• Deutsche Bank 6.25% AT1: ~100 → ~70 (30% loss vs. par)
• Global AT1 spreads: widened 200bp+
• 5-year CDS: 100bp → 250bp

What these prices implied: markets were pricing in greater than 50% probability of AT1 coupon non-payment at Deutsche Bank.

How excessive the fear was became clear afterward. Deutsche Bank paid all 2016 AT1 coupons as scheduled. Prices recovered. But this episode left a critical lesson: AT1 coupon risk is real risk, explicitly written into the contract. The 2023 CS AT1 full write-down provided the ultimate confirmation of this lesson.`,
      },
      {
        heading: "왜 이것이 중요한가 — CS AT1의 예고편",
        headingEn: "Why This Matters — The Preview of CS AT1",
        body:
`2016년 도이체방크 에피소드가 금융시장에 남긴 유산은 세 가지다.

첫째, AT1 쿠폰 리스크가 처음으로 시장 가격에 반영됐다. 2012~2015년 CoCo 붐 시절 많은 투자자들이 "어차피 은행이 쿠폰을 안 줄 리 없다"고 믿었다. 2016년 도이체방크 사태는 그 믿음에 처음으로 균열을 냈다.

둘째, ADI 메커니즘이 투자자 커뮤니티에서 광범위하게 이해되기 시작했다. 단순히 발행사가 선택하는 것이 아니라, 규제상 ADI가 부족하면 쿠폰 지급이 제한된다는 구조적 리스크가 실체화됐다.

셋째, CS AT1 사태(2023)의 예고편이었다. 2016년 DB 쇼크는 "공포로 끝났다." 그러나 2023년 CS는 공포가 현실이 됐다 — 170억 달러 AT1 전액상각. 두 사건을 연결하면 AT1 투자의 핵심 교훈이 완성된다: "계약서를 읽어야 한다. 쿠폰이 취소될 수 있다. 원금이 사라질 수 있다. 이것은 위험 자산이다."`,
        bodyEn:
`Deutsche Bank's 2016 episode left three lasting legacies in financial markets.

First, AT1 coupon risk was priced into markets for the first time. During the 2012–2015 CoCo boom, many investors implicitly believed "banks will never actually skip coupons." The 2016 DB episode created the first cracks in that belief.

Second, the ADI mechanism began to be widely understood in the investor community. The structural risk was made concrete: not just issuer discretion, but regulatory ADI constraints can restrict coupon payment — a feature explicitly in the contract.

Third, it was the preview to the CS AT1 episode (2023). The 2016 DB shock "ended as fear." But 2023's CS turned fear into reality — $17 billion in AT1 written to zero. Connecting the two events completes the core lesson of AT1 investing: "Read the prospectus. Coupons can be cancelled. Principal can disappear. This is a risk asset."`,
      },
      {
        heading: "도이체방크 이후 — AT1 시장의 구조 변화",
        headingEn: "After Deutsche Bank — Structural Change in the AT1 Market",
        body:
`2016년 에피소드 이후 AT1 시장은 어떻게 변했나?

투자자 행동 변화: 기관 투자자들이 AT1 계약서 조항 — 특히 ADI 계산 방식, PONV(Point of Non-Viability) 트리거, 손실흡수 방식 — 을 더 꼼꼼히 분석하기 시작했다. '은행은 알아서 잘 하겠지'의 시대가 끝났다.

스프레드 구조 변화: AT1과 Tier 2 채권 사이의 스프레드 차이가 확대됐다. 쿠폰 취소 가능성이 가격에 좀 더 적절히 반영되기 시작했다.

그러나 2016년 위기가 진짜 위기로 전환되지 않았기 때문에 많은 투자자들은 "도이체방크가 공포를 이겨냈으니 다음에도 괜찮을 것"이라는 안도감을 갖게 됐다. 이것이 2023년 CS AT1 사태에서 또 다시 시장이 충격을 받은 이유이기도 하다 — 상당수 투자자들이 "이번에도 결국 지급되겠지"라고 기대했던 것이다.

역사는 반복된다. 다만 그 강도가 점점 세진다.`,
        bodyEn:
`How did the AT1 market change after 2016?

Investor behavior shift: Institutional investors began analyzing AT1 contract terms more rigorously — ADI calculation mechanics, PONV (Point of Non-Viability) triggers, loss absorption structures. The era of "the bank will sort it out" was ending.

Spread structure change: The spread differential between AT1 and Tier 2 widened. Coupon cancellation risk began to be more appropriately reflected in pricing.

However, because the 2016 episode didn't become a real crisis, many investors drew an overly comforting conclusion: "DB overcame the fear, so it'll be fine next time too." This contributed to why markets were shocked again in the 2023 CS AT1 episode — many investors had again expected "ultimately they'll pay this time too."

History repeats. But each iteration tends to be more severe.`,
      },
    ],
    keyTerms: [
      {
        term: "ADI (배당가능이익, Amount Distributable Insufficient)",
        termEn: "ADI (Amount Distributable Insufficient)",
        definition: "CRD IV/CRR에 따라 유럽 은행의 AT1 쿠폰 지급 가능 여부를 결정하는 배당 가능 이익 지표. 당기순이익 + 이월잉여금 - 기타 자본 분배로 계산. ADI가 부족하면 AT1 쿠폰 지급이 의무적으로 제한된다. 2016년 DB 쇼크의 핵심 메커니즘이었다.",
        definitionEn: "Under CRD IV/CRR, the distributable profit metric that determines whether a European bank can pay AT1 coupons. Calculated as current period net profit + retained earnings - other capital distributions. If ADI is insufficient, AT1 coupon payments are mandatorily restricted. This was the core mechanism behind the 2016 DB shock.",
      },
      {
        term: "쿠폰 취소 가능성 (Coupon Discretionality)",
        termEn: "Coupon Discretionality",
        definition: "AT1 채권의 핵심 특성. 발행사는 ADI 부족 시 의무적으로, 기타 상황에서는 선택적으로 쿠폰 지급을 취소할 수 있다. 취소되더라도 누적되지 않으며(non-cumulative), 법적 디폴트가 되지 않는다. 많은 투자자들이 이 조항을 간과하고 AT1을 일반 회사채처럼 대했다.",
        definitionEn: "A core feature of AT1 bonds. The issuer can skip coupon payments — mandatorily when ADI is insufficient, optionally in other circumstances. Cancelled coupons are non-cumulative and do not constitute legal default. Many investors overlooked this provision and treated AT1 like ordinary corporate bonds.",
      },
      {
        term: "PONV (존속불가점, Point of Non-Viability)",
        termEn: "PONV (Point of Non-Viability)",
        definition: "규제당국이 은행이 존속불가 상태에 도달했다고 판단하는 시점. 이 시점에서 AT1은 자동으로 손실을 흡수한다 — 주식으로 전환되거나 원금이 전액 상각된다. 2023년 FINMA는 CS에 대해 PONV를 결정했고, AT1 전액상각이 발동됐다. 2016년 DB 사태는 PONV에 근접하지 않았지만, 이 개념이 실제 리스크임을 시장에 각인시켰다.",
        definitionEn: "The point at which a regulator determines a bank has become non-viable. At this point, AT1 absorbs losses automatically — either converting to equity or writing down principal to zero. In 2023, FINMA made this determination for CS, triggering full AT1 write-down. The 2016 DB episode never approached PONV, but it cemented in market consciousness that this risk is real.",
      },
      {
        term: "CoCo (조건부전환증권, Contingent Convertible)",
        termEn: "CoCo (Contingent Convertible)",
        definition: "특정 트리거 조건(자본비율 하락, PONV 결정 등)이 발생하면 주식으로 전환되거나 원금이 상각되는 채권. AT1 채권은 CoCo의 대표적 형태다. 2012~2015년 저금리 환경에서 유럽 은행들이 대규모로 발행했고, 이를 'CoCo 붐'이라고 한다. 이 시기에 매입한 투자자들 중 일부가 2016년 DB 쇼크와 2023년 CS AT1 사태로 큰 손실을 입었다.",
        definitionEn: "A bond that converts to equity or writes down principal when specific trigger conditions are met (capital ratio breach, PONV determination, etc.). AT1 bonds are the canonical form of CoCo. European banks issued them massively during the 2012–2015 low-rate environment — the 'CoCo boom.' Investors who accumulated positions during this boom faced significant losses in the 2016 DB shock and 2023 CS AT1 episode.",
      },
    ],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    relatedDealSlugs: ["credit-suisse-at1", "santander-at1-no-call"],
    executiveSummary: {
      ko: [
        "2015년 독일 역사상 최대 손실(약 68억 달러) 발표 후 2016년 1월 DB AT1 쿠폰 미지급 공포 시작",
        "ADI(배당가능이익) 부족 시 쿠폰이 의무적으로 차단되는 EU 자본규정 메커니즘이 처음으로 시장 가격에 반영",
        "DB 주가 한 달 -50%, AT1 채권 100→70 급락, 글로벌 AT1 스프레드 +200bp — 시장 공포의 실시간 가격화",
        "2016년 2월 CEO 공식 발표 후 공포 해소 — 모든 AT1 쿠폰 정상 지급",
        "CS AT1 사태(2023)의 직접적 예고편: 쿠폰 취소 공포(2016) → 실제 전액상각(2023)으로 이어지는 AT1 리스크 인식의 진화",
      ],
      en: [
        "After 2015's record ~$6.8B loss, January 2016 saw the first market scare over DB AT1 coupon non-payment",
        "EU capital regulation's ADI mechanism — mandatory coupon restriction when distributable profits are insufficient — priced into markets for the first time",
        "DB stock -50% in one month, AT1 bonds 100→70, global AT1 spreads +200bp — fear priced in real time",
        "February 2016 CEO announcement resolved the scare — all AT1 coupons paid as scheduled",
        "Direct preview to CS AT1 (2023): coupon cancellation fear (2016) → actual full write-down (2023): the evolution of AT1 risk perception",
      ],
    },
    assessment: {
      positives: [
        "공포 해소 후 AT1 투자자들은 쿠폰을 정상 수취 — 위기가 실제로 발생하지 않아 당시 투자자들은 손실을 피함",
        "ADI 메커니즘에 대한 시장 이해도 급상승 — 이후 AT1 계약 조항 분석이 표준 투자 프로세스로 정착",
        "DB 경영진의 신속한 커뮤니케이션이 시스템 위기로의 전이를 막음 — 중앙은행 개입 없이 해소",
        "FIG 시장 전반의 리스크 재평가 계기 — 단기적 공포가 장기적 시장 구조 개선으로 연결",
      ],
      positivesEn: [
        "After fear resolved, AT1 investors received coupons as scheduled — no actual losses as the crisis did not materialize",
        "Market understanding of ADI mechanism improved sharply — AT1 contract analysis became standard investment process afterward",
        "Swift CEO communication prevented contagion to a systemic crisis — resolved without central bank intervention",
        "Catalyst for risk repricing across FIG markets — short-term fear led to long-term market structure improvement",
      ],
      risks: [
        "AT1 비례적 가격 급락 — 실제 쿠폰 지급이 이뤄졌음에도 단기 보유자들은 30%+ 평가 손실 경험",
        "전염 효과 — DB 우려가 유럽 전체 은행주와 AT1에 퍼져 발행 시장 일시 마비",
        "ADI 계산 불투명성 — HGB vs IFRS 기준 차이로 시장 참여자들이 실제 ADI를 정확히 계산하기 어려움",
        "2023년 CS AT1 사태 예고 — '이번에는 지급됐으니 다음에도 괜찮다'는 잘못된 안도감 형성",
      ],
      risksEn: [
        "Proportionate price crash — short-term holders experienced 30%+ mark-to-market losses even though coupons were ultimately paid",
        "Contagion effect — DB concerns spread to all European bank stocks and AT1s, temporarily paralyzing the primary market",
        "ADI calculation opacity — HGB vs IFRS accounting differences made it difficult for market participants to precisely calculate actual ADI",
        "2023 CS AT1 preview — created false sense of security ('it was fine this time, so it'll be fine next time') that contributed to the 2023 shock",
      ],
    },
    faq: [
      {
        q: "AT1 채권의 쿠폰이 취소되면 투자자는 법적으로 대응할 수 있나요?",
        qEn: "Can investors take legal action if an AT1 coupon is cancelled?",
        a: "아니오. AT1 쿠폰 취소는 계약서에 명시된 조건이기 때문에 법적 대응이 불가능합니다. AT1 계약서에는 명확히 적혀 있습니다: 쿠폰은 발행사의 선택 사항이며, ADI가 부족할 경우 의무적으로 취소됩니다. 이것은 채권이 아닌 영구 우선주에 가까운 성격입니다. 2016년 DB 사태 당시에도, 2023년 CS AT1 사태에서도, 이 조항이 법적 보호막이 됐습니다. 이것이 AT1이 일반 채권보다 높은 수익률을 제공하는 이유입니다 — 더 높은 리스크에 대한 보상.",
        aEn: "No. AT1 coupon cancellation is an explicitly contracted condition, so no legal recourse is available. The AT1 prospectus states clearly: coupons are at issuer discretion and are mandatorily cancelled when ADI is insufficient. This makes AT1s closer to perpetual preferred equity than conventional bonds. In both the 2016 DB episode and the 2023 CS AT1 write-down, this provision provided the legal shield. This is why AT1s offer higher yields than regular bonds — compensation for higher risk.",
      },
      {
        q: "도이체방크가 2016년에 실제로 쿠폰을 지급하지 않을 가능성이 있었나요?",
        qEn: "Was there actually a realistic possibility that Deutsche Bank would skip the 2016 coupon?",
        a: "시장이 두려워했던 것과 달리, 실제 가능성은 낮았던 것으로 사후 평가됩니다. DB의 HGB 기준 잉여금은 AT1 쿠폰을 커버할 만큼 충분했습니다. 그러나 이 계산이 시장에 불투명했고, 투자자들이 IFRS 기준 손실만 보고 HGB 기준을 제대로 분석하지 않은 것이 공포를 증폭시켰습니다. DB 경영진이 2월에 명확한 숫자를 공개하자 공포는 빠르게 해소됐습니다. 교훈: AT1 투자에서는 HGB 기준 재무제표까지 읽어야 한다.",
        aEn: "In retrospect, the actual probability was lower than the market feared. Deutsche Bank's retained earnings under HGB accounting were sufficient to cover AT1 coupon payments. However, this calculation was opaque to markets — investors saw the IFRS-basis losses without properly analyzing the HGB-basis figures, which amplified fear. Once management publicly disclosed the specific numbers in February, fear dissipated quickly. Lesson: AT1 investing requires reading HGB-basis financial statements, not just IFRS.",
      },
      {
        q: "2016년 DB 사태와 2023년 CS AT1 사태의 차이점은 무엇인가요?",
        qEn: "What is the key difference between the 2016 DB episode and the 2023 CS AT1 write-down?",
        a: "2016년 DB: 공포로 끝났습니다. 은행은 살아남았고, 쿠폰이 지급됐고, 가격이 회복됐습니다. 2023년 CS: 공포가 현실이 됐습니다. FINMA가 PONV를 결정했고, 170억 달러 AT1 전액상각이 발동됐습니다. 차이는 두 가지입니다. 첫째, DB는 리스크가 일시적이었던 반면 CS는 구조적·근본적 신뢰 상실이었습니다. 둘째, DB는 ADI 부족이 실제로 발생하지 않았지만, CS는 PONV 결정 자체가 내려졌습니다. 두 사건을 이어 보면: AT1 리스크는 계약서에 적힌 그대로 현실이 된다 — 다만 그 시점이 언제인지 모를 뿐이다.",
        aEn: "2016 DB: ended as fear. The bank survived, coupons were paid, prices recovered. 2023 CS: fear became reality. FINMA made the PONV determination; $17 billion in AT1 was fully written down. The difference is twofold. First, DB's risk was temporary while CS faced structural, fundamental loss of confidence. Second, DB never actually had insufficient ADI; CS received an actual PONV determination. Connecting both events: AT1 risk materializes exactly as written in the contract — you just don't know exactly when.",
      },
      {
        q: "AT1 채권 투자 시 어떤 것을 확인해야 하나요?",
        qEn: "What should investors check before investing in AT1 bonds?",
        a: "최소 5가지를 확인해야 합니다. ① ADI 계산 방식: 해당 은행의 모국 회계 기준(독일은 HGB, 스위스는 Swiss GAAP 등)에서 ADI가 어떻게 계산되는지. ② 쿠폰 취소 조건: 임의적(discretionary) vs. 의무적(mandatory) 취소가 어떤 상황에서 발동되는지. ③ 손실흡수 방식: 전환(conversion)인지 상각(write-down)인지, 전환 시 전환 가격은. ④ PONV 트리거: 어떤 규제당국이 결정하며, 그 기준은 무엇인지. ⑤ 콜 날짜와 리셋: 첫 콜 날짜 이후 쿠폰이 어떻게 리셋되는지, 발행사가 콜을 하지 않을 경제적 인센티브가 있는지.",
        aEn: "At minimum five things: ① ADI calculation: how ADI is calculated under the bank's home-country accounting standard (HGB for Germany, Swiss GAAP for Switzerland, etc.). ② Coupon cancellation conditions: when discretionary vs. mandatory cancellation triggers apply. ③ Loss absorption mechanism: conversion or write-down; if conversion, at what conversion price. ④ PONV trigger: which regulator makes the determination, and on what basis. ⑤ Call date and reset: how the coupon resets after the first call date; whether the issuer has economic incentive to skip the call.",
      },
      {
        q: "왜 도이체방크는 그렇게 큰 손실을 봤나요?",
        qEn: "Why did Deutsche Bank suffer such massive losses?",
        a: "2015년 DB의 약 68억 달러 순손실은 세 가지 요인의 합산이었습니다. 첫째, 소송 비용 — LIBOR 조작, 모기지 증권 판매 관련 미국 당국과의 합의금. 수십억 달러 규모였습니다. 둘째, 구조조정 비용 — 고비용 구조를 가진 DB가 직원 수 감축, 사업 부문 정리 등 대규모 구조조정을 단행하면서 발생한 비용. 셋째, 손상차손 — 투자은행 사업 부문 등 특정 자산의 장부가치를 낮춘 일회성 상각. 이 손실들의 상당 부분이 '일회성'이었고, DB는 이후 수익성을 회복했습니다.",
        aEn: "Deutsche Bank's ~$6.8B net loss in 2015 combined three factors. First, litigation costs — settlements with US authorities related to LIBOR manipulation and mortgage securities sales, amounting to billions of dollars. Second, restructuring charges — Deutsche Bank undertook massive restructuring (headcount reduction, business line exits) to address its high-cost structure, generating substantial one-time charges. Third, impairments — write-downs on certain asset values, particularly in investment banking divisions. Much of these losses were 'one-time' in nature, and Deutsche Bank subsequently recovered profitability.",
      },
    ],
    references: [
      {
        id: 1,
        author: "Deutsche Bank AG",
        title: "Press Release: Q4 and FY 2015 Results — AT1 Coupon Capacity Statement",
        source: "Deutsche Bank Investor Relations, February 2016",
        year: "2016",
      },
      {
        id: 2,
        author: "European Banking Authority (EBA)",
        title: "Guidelines on the Maximum Distributable Amount (MDA)",
        source: "EBA/GL/2021/22",
        year: "2021",
        url: "https://www.eba.europa.eu/regulation-and-policy/own-funds-and-eligible-liabilities",
      },
      {
        id: 3,
        author: "Financial Stability Board (FSB)",
        title: "Total Loss-Absorbing Capacity (TLAC) Principles and Term Sheet",
        source: "FSB, November 2015",
        year: "2015",
        url: "https://www.fsb.org/2015/11/total-loss-absorbing-capacity-tlac-principles-and-term-sheet/",
      },
      {
        id: 4,
        author: "Flannery, Mark J.",
        title: "Contingent Capital Instruments for Large Financial Institutions",
        source: "Annual Review of Financial Economics, Vol. 6",
        year: "2014",
      },
    ],
  },

  {
    slug: "santander-at1-no-call",
    title: "산탄데르 AT1 콜 스킵 (2019) — 관행을 깬 순간",
    titleEn: "Santander AT1 No-Call (2019) — When Convention Broke",
    category: "fig",
    categoryLabel: "FIG 드라마",
    categoryLabelEn: "FIG Drama",
    excerpt: "당연히 콜에 갚겠지라는 시장 관행을 깬 첫 사례. Extension risk가 FIG 자본채에서 실제로 터진 케이스.",
    excerptEn: "The first case to break the market convention that AT1s will always be called. Extension risk materializing for the first time in FIG capital instruments.",
    dealYear: 2019,
    issuer: "Banco Santander S.A.",
    issuerEn: "Banco Santander S.A.",
    readingMinutes: 10,
    tags: ["AT1", "콜옵션", "Extension Risk", "산탄데르", "FIG", "쿠폰리셋"],
    tagsEn: ["AT1", "Call Option", "Extension Risk", "Santander", "FIG", "Coupon Reset"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Banco Santander S.A." },
      { labelKo: "사건일", labelEn: "Event Date", value: "12 February 2019" },
      { labelKo: "해당 채권", labelEn: "Bond", value: "€1.5B 6.25% AT1 (2014 발행)", valueEn: "€1.5B 6.25% AT1 (issued 2014)" },
      { labelKo: "첫 콜 날짜", labelEn: "First Call Date", value: "12 February 2019" },
      { labelKo: "결정", labelEn: "Decision", value: "콜 미행사 (No-Call)", valueEn: "No-Call (call not exercised)" },
      { labelKo: "리셋 쿠폰", labelEn: "Reset Coupon", value: "5.435% (하락)", valueEn: "5.435% (lower)" },
    ],
    sections: [
      {
        heading: "AT1 채권과 콜 옵션 — 암묵적 관행의 탄생",
        headingEn: "AT1 Bonds and Call Options — The Birth of an Implicit Convention",
        body:
`AT1(Additional Tier 1) 채권은 만기가 없는 영구채다. 그러나 발행사는 보통 5년 후 첫 콜 날짜에 채권을 조기 상환할 수 있는 옵션을 갖는다. 이것은 권리이지 의무가 아니다.

그럼에도 2010년대 초반부터 형성된 시장 관행은 "은행은 첫 콜 날짜에 무조건 콜을 행사한다"는 것이었다. 이 관행이 형성된 이유:

1. 평판 리스크: 콜을 하지 않으면 향후 자본 조달이 어려워진다는 우려
2. 경제적 논리: 금리가 낮을 때 기존 고쿠폰 채권을 콜하고 낮은 금리로 재발행하면 이자 비용이 절감된다
3. 투자자 기대: 투자자들은 AT1을 "5년물처럼 거래했다" — 영구채이지만 콜 날짜에 상환될 것으로 가정

이 관행이 너무 견고해져서 많은 투자자들이 AT1을 분석할 때 콜 날짜를 만기로 간주했다. 수익률도 만기수익률(YTM) 대신 콜 기준 수익률(YTC, Yield to Call)로 계산했다. Extension risk — 콜이 행사되지 않아 기간이 연장되는 리스크 — 는 이론상 존재하지만 현실에서는 발생하지 않는다고 여겨졌다.

2019년 2월 12일, 그 전제가 무너졌다.`,
        bodyEn:
`AT1 (Additional Tier 1) bonds are perpetual — no maturity date. However, issuers typically hold a call option to redeem the bonds at the first call date, usually five years after issuance. This is a right, not an obligation.

Yet from the early 2010s, a market convention crystallized: "banks will always exercise the call on the first call date." This convention formed for several reasons:

1. Reputational risk: not calling was thought to make future capital raising more difficult
2. Economic logic: in declining rate environments, calling expensive old bonds and re-issuing at lower rates reduces interest costs
3. Investor expectation: investors effectively traded AT1s "like 5-year bonds" — perpetual instruments assumed to be redeemed at the call date

This convention became so entrenched that many investors treated the call date as the effective maturity, calculating yields as Yield to Call (YTC) rather than to perpetuity. Extension risk — the risk of call non-exercise and resulting term extension — existed in theory but was considered practically non-existent.

On February 12, 2019, that premise collapsed.`,
      },
      {
        heading: "왜 산탄데르는 콜을 하지 않았나",
        headingEn: "Why Santander Didn't Call",
        body:
`2014년 산탄데르는 €15억 규모의 AT1을 쿠폰 6.25%로 발행했다. 이 채권에는 2019년 2월 첫 콜 옵션이 있었다. 콜이 행사되지 않으면 쿠폰은 5년 스왑 금리 + 스프레드로 리셋된다.

2019년 2월, 유럽 금리가 낮았다. 5년 EUR 스왑 금리가 약 -0.05%에서 0.1% 수준이었다. 산탄데르의 AT1 계약에 따르면 쿠폰은 스왑 금리 + 초기 스프레드(약 5.36%)로 리셋될 예정이었다 — 결과적으로 약 5.4~5.5% 수준.

판단의 핵심: 6.25%를 내고 있는 채권을 콜하고 새로운 AT1을 발행하면, 새 쿠폰이 6.25%보다 낮아야 경제적으로 의미가 있다. 2019년 2월 AT1 시장의 새 발행 쿠폰이 약 6%대 초반이었다.

리셋 후 쿠폰: ~5.4%
새 발행 예상 쿠폰: ~6%+

결론: 콜하지 않는 편이 경제적으로 더 저렴하다. 산탄데르는 이 계산을 실행에 옮겼다.

이것은 완전히 합법적이고, 계약서에도 명시된 결정이었다. 그러나 시장은 충격을 받았다.`,
        bodyEn:
`In 2014, Santander issued €1.5 billion in AT1 bonds at a 6.25% coupon, with a first call option in February 2019. If not called, the coupon would reset to a 5-year swap rate plus spread.

In February 2019, European rates were low. The 5-year EUR swap rate was approximately -0.05% to 0.1%. Under Santander's AT1 contract, the coupon would reset to the swap rate plus an initial spread (~5.36%) — resulting in approximately 5.4–5.5%.

The key calculation: to make calling the bond economically rational, a new AT1 issuance would need to be cheaper than 6.25%. In February 2019, new AT1 issuance in the market was pricing at approximately 6%+.

Post-reset coupon: ~5.4%
Expected new issuance coupon: ~6%+

Conclusion: not calling is economically cheaper. Santander acted on this calculation.

This was entirely legal, and contractually explicit. But markets were shocked.`,
      },
      {
        heading: "시장의 충격 — Extension Risk의 실체화",
        headingEn: "Market Shock — Extension Risk Materializes",
        body:
`산탄데르의 콜 미행사 발표 직후 AT1 시장은 급락했다.

산탄데르 6.25% AT1 채권 가격은 약 101~102에서 98 이하로 떨어졌다 — 콜 수익률 기준으로 가격이 형성됐던 채권이 이제 연장된 기간 기준으로 재가격화됐다.

더 큰 문제는 전염 효과: 다른 은행들의 AT1 채권도 동반 하락했다. "다음 콜 날짜에 콜을 하지 않을 은행이 또 있는가?"라는 질문이 시장에 퍼졌다.

Extension risk — 콜이 행사되지 않아 투자 기간이 연장되는 리스크 — 는 이제 이론이 아닌 현실이 됐다. 영구채를 5년물처럼 거래하던 관행은 재검토됐다.

AT1 투자자들이 배운 핵심 교훈:
1. 콜 날짜는 만기가 아니다
2. 발행사는 경제적으로 불합리할 때 콜을 행사하지 않을 수 있다
3. 리셋 쿠폰 수준에 따라 extension이 발행사에게 유리할 수 있다
4. AT1 투자 분석에서 리셋 메커니즘과 콜 행사 인센티브를 반드시 계산해야 한다`,
        bodyEn:
`Immediately after Santander's no-call announcement, the AT1 market sold off sharply.

Santander's 6.25% AT1 bond price fell from approximately 101–102 to below 98 — the bond had been priced on a call basis, and now needed to be repriced on an extension basis.

The larger problem was contagion: other banks' AT1 bonds also fell. The question spread through markets: "Which other bank might skip its next call date?"

Extension risk — the risk that a call is not exercised and the investment term extends — had moved from theory to reality. The convention of trading perpetual bonds like 5-year instruments was now subject to fundamental re-examination.

Core lessons AT1 investors absorbed:
1. The call date is not a maturity date
2. Issuers may rationally not call when it's economically suboptimal
3. Reset coupon levels can make extension advantageous for the issuer
4. AT1 analysis must explicitly calculate reset mechanisms and call exercise incentives`,
      },
      {
        heading: "산탄데르 이후 — AT1 시장의 재구조화",
        headingEn: "After Santander — Restructuring the AT1 Market",
        body:
`산탄데르 콜 스킵 이후 AT1 시장에는 구조적 변화가 일어났다.

가격 방법론 변화: 투자자들이 AT1 채권의 만기수익률(YTM, 연장 가정) vs. 콜 수익률(YTC) 두 가지를 모두 계산하기 시작했다. 더 낮은 쪽(Yield to Worst, YTW)을 기준으로 투자 결정을 내리는 것이 표준이 됐다.

리셋 스프레드 분석 심화: 리셋 날짜에 예상되는 쿠폰이 현재 새 발행 금리 대비 얼마나 되는지를 분석해 콜 행사 확률을 추정하는 프레임워크가 발전했다.

발행 구조 변화: 일부 발행사들이 콜 인센티브를 강화하는 조건으로 AT1을 발행하기 시작했다 — 스텝업 쿠폰(콜 이후 급격히 높아지는 쿠폰) 등.

이후에도 일부 은행들이 AT1 콜을 스킵하는 사례들이 있었다. 그러나 이 사건들은 더 이상 충격으로 받아들여지지 않았다 — 산탄데르 2019가 '콜 스킵은 가능하다'는 규범을 정착시킨 것이다.`,
        bodyEn:
`After Santander's no-call, structural changes rippled through the AT1 market.

Pricing methodology shift: Investors began calculating both Yield to Maturity (YTM, assuming extension) and Yield to Call (YTC). Making investment decisions based on the lower of the two — Yield to Worst (YTW) — became standard practice.

Deeper reset spread analysis: Frameworks developed for estimating call exercise probability by analyzing expected reset coupon levels versus current new issuance rates.

Issuance structure changes: Some issuers began structuring AT1s with stronger call incentives — step-up coupons (coupons that increase sharply after the call date) as a de facto commitment mechanism.

Subsequent call skips by other banks occurred but were no longer treated as shocks — Santander 2019 had normalized "call skipping is possible" as market convention.`,
      },
      {
        heading: "교훈 — 관행은 계약서가 아니다",
        headingEn: "Lesson — Convention Is Not Contract",
        body:
`산탄데르 AT1 콜 스킵 사건에서 배울 수 있는 가장 중요한 교훈은 단순하다: 시장 관행은 계약서가 아니다.

투자자들은 "은행은 항상 첫 콜에 상환한다"는 관행을 사실상 계약 조항처럼 가격에 반영했다. 그러나 계약서에는 "은행은 선택적으로 콜을 행사할 수 있다"고만 적혀 있었다.

관행이 유지되는 이유는 경제적 인센티브가 그 방향으로 작동할 때만이다. 금리 환경이 변하면 — 즉, 리셋 쿠폰이 새 발행 금리보다 낮아지면 — 발행사의 합리적 결정은 바뀐다.

이것은 AT1만의 이슈가 아니다. 금융시장의 많은 '관행'들이 계약서가 아닌 경제적 인센티브에 의존한다. 그 인센티브가 바뀌면 관행도 바뀐다. 투자자는 항상 계약서 상의 권리(what the contract says)와 실제 인센티브(what the issuer will rationally do)를 구분해야 한다.`,
        bodyEn:
`The most important lesson from Santander's AT1 no-call is simple: market convention is not contractual obligation.

Investors had effectively priced in "banks always call at first opportunity" as if it were a contractual term. But the contract only said: "the issuer may call, at its option."

Convention holds only as long as economic incentives align with it. When the rate environment changes — when the reset coupon falls below new issuance rates — the issuer's rational decision changes accordingly.

This is not an AT1-specific issue. Many market 'conventions' depend not on contracts but on economic incentives. When incentives change, conventions change. Investors must always distinguish between contractual rights (what the contract says) and economic behavior (what the issuer will rationally do).`,
      },
    ],
    keyTerms: [
      {
        term: "Extension Risk (연장 리스크)",
        termEn: "Extension Risk",
        definition: "AT1과 같은 영구채에서 발행사가 콜 날짜에 채권을 상환하지 않아 투자 기간이 예상보다 연장되는 리스크. 산탄데르 사태 이전에는 이론적 리스크였으나, 2019년 이후 실제 가격 반영이 필수가 됐다. 콜 미행사 시 쿠폰이 리셋되고, 리셋 수준에 따라 투자자 수익률이 변동한다.",
        definitionEn: "In perpetual instruments like AT1, the risk that the issuer does not call the bond at the call date, causing the investment term to extend beyond expectation. Before the Santander episode, this was a theoretical risk; after 2019, pricing it became mandatory. When the call is not exercised, the coupon resets, and the reset level determines investor yield going forward.",
      },
      {
        term: "콜 수익률 (YTC, Yield to Call)",
        termEn: "YTC (Yield to Call)",
        definition: "채권이 첫 콜 날짜에 상환된다고 가정했을 때의 수익률. AT1 투자자들은 전통적으로 YTC를 기준으로 가격을 산정했다. 산탄데르 사태 이후 YTC만이 아니라 연장 가정 시의 YTM도 함께 계산하는 것이 표준이 됐다. Yield to Worst(최악 수익률, 두 값 중 낮은 것)를 기준으로 투자 결정을 내리는 것이 권고된다.",
        definitionEn: "The yield assuming the bond is redeemed at the first call date. AT1 investors traditionally priced on a YTC basis. After the Santander episode, calculating both YTC and YTM (assuming extension) became standard. Basing investment decisions on Yield to Worst (lower of the two values) is now recommended.",
      },
      {
        term: "쿠폰 리셋 (Coupon Reset)",
        termEn: "Coupon Reset",
        definition: "AT1 채권의 콜 날짜 이후 쿠폰이 변동하는 구조. 일반적으로 해당 통화의 스왑 금리(예: 5년 EUR 스왑 금리) + 최초 발행 시 결정된 스프레드로 새 쿠폰이 설정된다. 리셋 후 쿠폰이 현재 신규 발행 금리보다 낮으면 발행사가 콜을 하지 않을 인센티브가 생긴다. 산탄데르 사태가 바로 이 메커니즘이 작동한 사례다.",
        definitionEn: "The mechanism by which an AT1 bond's coupon changes after the call date. Typically reset to the relevant swap rate (e.g., 5-year EUR swap rate) plus the spread fixed at original issuance. If the reset coupon is lower than the current new issuance rate, the issuer has incentive to not call. The Santander episode was precisely this mechanism in action.",
      },
      {
        term: "AT1 (추가 기본자본, Additional Tier 1)",
        termEn: "AT1 (Additional Tier 1)",
        definition: "바젤 III 자본 체계에서 보통주 자본(CET1) 다음 순위의 자본 수단. 영구채로 발행되며, 자본비율 하락이나 PONV 결정 시 손실을 흡수한다. 쿠폰은 발행사 재량(및 ADI 제약)에 따라 취소 가능하다. 은행 자본 구조에서 주식 다음으로 높은 리스크를 부담하지만, 순위상 Tier 2·채권 아래에 있어 주식보다 높은 수익률을 제공한다.",
        definitionEn: "In the Basel III capital framework, the capital instrument ranking below Common Equity Tier 1 (CET1). Issued as perpetual bonds; absorbs losses when capital ratios breach triggers or upon PONV determination. Coupons can be cancelled at issuer discretion (subject to ADI constraints). Carries higher risk than Tier 2 and senior bonds in a bank's capital structure, but provides higher yields than those instruments as compensation.",
      },
    ],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    relatedDealSlugs: ["credit-suisse-at1", "deutsche-bank-coco-shock"],
    executiveSummary: {
      ko: [
        "2019년 2월 산탄데르, €15억 6.25% AT1의 첫 콜 미행사 — '은행은 항상 콜한다'는 10년 시장 관행을 깨뜨림",
        "이유: 콜 후 리셋 쿠폰(~5.4%)이 신규 발행 금리(~6%+)보다 낮아 콜 미행사가 경제적으로 합리적",
        "AT1 가격 즉각 하락, 전염 효과로 유럽 전체 AT1 시장 충격 — Extension Risk의 첫 현실화",
        "투자자들이 YTC 단독 분석에서 YTW(Yield to Worst) 분석으로 전환하는 방법론 혁신 촉발",
        "핵심 교훈: 시장 관행은 계약서가 아니다 — 경제적 인센티브가 바뀌면 관행도 바뀐다",
      ],
      en: [
        "February 2019: Santander skipped the call on its €1.5B 6.25% AT1 — breaking 10 years of market convention that 'banks always call'",
        "Reason: post-reset coupon (~5.4%) was lower than new issuance rates (~6%+), making the no-call decision economically rational",
        "AT1 prices fell immediately; contagion effect shocked the entire European AT1 market — first real materialization of extension risk",
        "Triggered methodological shift: investors moved from YTC-only analysis to YTW (Yield to Worst) framework",
        "Core lesson: market convention is not contract — when economic incentives change, so does the convention",
      ],
    },
    assessment: {
      positives: [
        "경제적 합리성의 증명 — 발행사가 투자자 눈치보다 합리적 경제 계산에 따라 행동할 수 있음을 보여줌",
        "AT1 시장 가격 메커니즘 개선 — 콜 리스크가 제대로 가격화되면서 장기적으로 더 효율적인 시장 형성",
        "산탄데르 이자 비용 절감 — 6.25% 대신 ~5.4% 쿠폰으로 수년간 이자 절감. 발행사 재무 최적화 성공",
        "투자자 분석 방법론 선진화 — YTC 단독에서 YTW 기반으로의 전환이 더 정확한 리스크 평가로 이어짐",
      ],
      positivesEn: [
        "Demonstration of economic rationality — showed issuers act on rational economic calculation rather than investor optics",
        "AT1 market pricing improvement — call risk properly priced, creating a more efficient market long-term",
        "Santander interest cost reduction — ~5.4% vs 6.25% coupon saved years of interest expense. Successful issuer financial optimization",
        "Investor analysis methodology advancement — shift from YTC-only to YTW-based analysis led to more accurate risk assessment",
      ],
      risks: [
        "AT1 시장 전반 충격 — 전염 효과로 다른 은행들의 AT1도 동반 하락, 단기적 시장 기능 저하",
        "산탄데르 발행 평판 손상 — 향후 산탄데르 AT1 발행 시 투자자들이 추가 스프레드를 요구하는 '관행 위반 프리미엄' 발생",
        "Extension risk 일반화 — 모든 AT1 발행사에게 '혹시 콜을 안 할 수도 있다'는 의구심이 지속적으로 반영",
        "리셋 쿠폰 의존성 — 금리 환경에 따라 발행사의 콜 인센티브가 달라져 AT1 투자의 예측 가능성 하락",
      ],
      risksEn: [
        "AT1 market-wide shock — contagion effect pulled down other banks' AT1s; short-term market function deterioration",
        "Santander reputational damage — subsequent Santander AT1 issuances face a 'convention breach premium' as investors demand additional spread",
        "Extension risk generalization — persistent doubt spread to all AT1 issuers: 'maybe they won't call either'",
        "Reset coupon dependency — issuer call incentives now vary with interest rate environment, reducing AT1 investment predictability",
      ],
    },
    faq: [
      {
        q: "산탄데르는 왜 콜을 행사하지 않았나요? 투자자를 신경 쓰지 않았나요?",
        qEn: "Why didn't Santander call the bond? Did they not care about investors?",
        a: "산탄데르의 결정은 순수하게 경제적 계산이었습니다. 콜을 행사하려면 €15억을 상환하고 새 AT1을 발행해야 합니다. 2019년 2월 시장에서 새 AT1 쿠폰은 약 6%+였습니다. 반면 콜을 하지 않으면 리셋 후 쿠폰이 약 5.4%로 낮아집니다. 발행사 입장에서 콜을 하지 않으면 연간 수천만 유로의 이자 비용을 절감할 수 있었습니다. 이것은 완전히 합법적이고 계약서에 명시된 권리입니다. 투자자를 배려하지 않은 것이 아니라, 발행사가 자신의 권리를 행사한 것입니다. 투자자들이 이 리스크를 계약서에서 인지하고 가격에 반영했어야 했습니다.",
        aEn: "Santander's decision was purely economic calculation. Exercising the call requires redeeming €1.5B and re-issuing new AT1. In February 2019, new AT1 coupon rates were approximately 6%+. Not calling would reset the coupon to approximately 5.4% — saving tens of millions of euros annually in interest costs. This was entirely legal and an explicitly contracted right. Santander was not ignoring investors — it was exercising its contractual right. Investors should have recognized and priced this risk from the prospectus.",
      },
      {
        q: "AT1 콜 스킵이 이전에는 왜 발생하지 않았나요?",
        qEn: "Why hadn't AT1 call-skipping happened before?",
        a: "2010년대 전반 내내 금리가 지속적으로 하락했습니다. 이 환경에서는 콜을 행사하고 새로운 저쿠폰 AT1을 발행하는 것이 항상 경제적으로 유리했습니다. 콜 날짜에 새 발행 금리 < 리셋 쿠폰이라는 조건이 항상 성립했기 때문에, 발행사는 콜을 행사해야 이자 비용이 절감됐습니다. 2019년 산탄데르 사태는 이 조건이 역전되는 첫 사례였습니다. 리셋 후 쿠폰이 신규 발행보다 낮아졌기 때문에 콜 미행사가 처음으로 경제적으로 합리적이 됐습니다. 즉, 관행이 유지된 것은 계약서 때문이 아니라 경제적 인센티브가 지속적으로 같은 방향을 가리켰기 때문입니다.",
        aEn: "Throughout the 2010s, interest rates were in continuous decline. In this environment, calling bonds and re-issuing at lower coupon rates was always economically advantageous. The condition — new issuance rate < reset coupon at call date — always held, so calling was always cheaper. The 2019 Santander episode was the first case where this condition reversed. With the reset coupon falling below new issuance rates, not calling became economically rational for the first time. The convention held not because of contractual obligation but because economic incentives consistently pointed the same way.",
      },
      {
        q: "이 사건이 AT1 투자자들의 실제 손실로 이어졌나요?",
        qEn: "Did this event result in actual losses for AT1 investors?",
        a: "산탄데르의 AT1 채권을 콜 날짜 전후에 팔았다면 손실이 실현됐습니다. 채권 가격이 101~102에서 98 이하로 하락했기 때문입니다. 그러나 장기 보유한 투자자들에게는 쿠폰이 리셋된 후에도 계속 지급됐습니다 — 다만 6.25% 대신 5.4% 수준으로. 더 큰 문제는 기회 비용과 평가 손실이었습니다. 또한 '콜이 이루어질 것을 가정한 YTC로 사들인' 투자자들은 기대 수익률이 하락했습니다. 결정적 손실보다는 기대 위반(disappointed expectations)이 핵심이었습니다.",
        aEn: "Investors who sold around the call date suffered realized losses — the bond fell from 101–102 to below 98. Long-term holders continued to receive coupons after the reset, albeit at approximately 5.4% instead of 6.25%. The more significant issue was mark-to-market losses and opportunity cost. Investors who bought pricing on YTC (assuming call) saw their expected returns fall. The core was 'disappointed expectations' rather than catastrophic principal loss — a different character from the 2023 CS AT1 full write-down.",
      },
      {
        q: "산탄데르 이후 비슷한 콜 스킵 사례가 있었나요?",
        qEn: "Were there similar call-skipping cases after Santander?",
        a: "산탄데르 2019 이후 AT1 콜 스킵이 간헐적으로 발생했습니다. 예를 들어, 일부 아시아 은행과 유럽 중소형 은행들이 금리 환경에 따라 콜을 행사하지 않는 사례들이 있었습니다. 그러나 이러한 사례들은 산탄데르 사태만큼 충격을 주지 않았습니다 — 관행이 이미 바뀌었기 때문입니다. 투자자들이 YTW를 기준으로 가격을 산정하기 때문에 콜 스킵이 발생해도 시장 충격이 크지 않게 됐습니다. 이것이 산탄데르 사태가 시장 구조를 영구적으로 바꾼 방식입니다.",
        aEn: "After Santander 2019, AT1 call-skipping occurred intermittently. Some Asian and European mid-sized banks also declined to call at first opportunity depending on the rate environment. But these cases caused less shock — because the convention had already changed. With investors now pricing on YTW, a call skip no longer creates a market shock of the same magnitude. This is how the Santander episode permanently changed market structure: not by making call-skipping acceptable, but by making investors price for it correctly.",
      },
      {
        q: "AT1 투자에서 콜 리스크를 어떻게 평가해야 하나요?",
        qEn: "How should investors assess call risk in AT1 investments?",
        a: "세 가지 계산을 해야 합니다. 첫째, 콜 가정 YTC: 콜이 행사된다고 가정했을 때의 수익률. 둘째, 연장 가정 YTM(또는 5~10년 연장 YTC): 콜이 행사되지 않고 리셋 쿠폰으로 n년 더 간다고 가정했을 때의 수익률. 셋째, 콜 행사 인센티브 분석: 첫 콜 날짜에 예상되는 리셋 쿠폰이 당시 예상 신규 발행 금리보다 높은지 낮은지. 리셋 쿠폰 < 신규 발행 예상 금리이면 발행사의 콜 인센티브가 있고, 반대면 콜 미행사 가능성을 고려해야 합니다. 최종적으로 YTC와 YTM 중 낮은 쪽인 YTW를 기준 수익률로 사용하는 것을 권장합니다.",
        aEn: "Three calculations are required. First, YTC (assuming call): the yield assuming the call is exercised. Second, YTM assuming extension (or YTC for n more years post-reset): yield assuming no call with reset coupon. Third, call exercise incentive analysis: is the expected reset coupon on the first call date higher or lower than the expected new issuance rate at that time? If reset coupon < expected new issuance rate, the issuer has incentive to call. The reverse creates no-call incentive. Ultimately, using the lower of YTC and YTM — Yield to Worst — as the reference yield is the recommended approach.",
      },
    ],
    references: [
      {
        id: 1,
        author: "Banco Santander S.A.",
        title: "Regulatory Press Release: AT1 No-Call Decision",
        source: "Santander Investor Relations, February 2019",
        year: "2019",
      },
      {
        id: 2,
        author: "Barclays Research",
        title: "AT1 No-Call Risk: Repricing Extension in the AT1 Market",
        source: "Barclays Fixed Income Research, February 2019",
        year: "2019",
      },
      {
        id: 3,
        author: "Basel Committee on Banking Supervision (BCBS)",
        title: "Basel III: A Global Regulatory Framework for More Resilient Banks and Banking Systems",
        source: "Bank for International Settlements",
        year: "2011",
        url: "https://www.bis.org/publ/bcbs189.pdf",
      },
      {
        id: 4,
        author: "EBA",
        title: "Report on the Impact of CRD IV-CRR on Financial Stability",
        source: "EBA",
        year: "2020",
        url: "https://www.eba.europa.eu/sites/default/documents/files/document_library/Publications/Reports/2020/961452/EBA%20report%20on%20the%20cumulative%20impact%20of%20regulatory%20requirements.pdf",
      },
    ],
  },

  // ── D: 구조·통화 ──────────────────────────────────────────────────────────────
  {
    slug: "german-pfandbrief",
    title: "독일 Pfandbrief — 200년 커버드본드의 역사",
    titleEn: "German Pfandbrief — 200 Years of Covered Bond History",
    category: "structure",
    categoryLabel: "구조·통화",
    categoryLabelEn: "Structure & Currency",
    excerpt: "이중청구권의 우아함. 2008년 증권화는 죽었고 커버드는 살아남은 이유.",
    excerptEn: "The elegance of dual recourse. Why securitization died in 2008 while covered bonds survived.",
    dealYear: 1769,
    issuer: "독일 은행권 (역사적)",
    issuerEn: "German Banking System (Historical)",
    readingMinutes: 12,
    tags: ["커버드본드", "Pfandbrief", "독일", "이중청구권", "구조화"],
    tagsEn: ["Covered Bond", "Pfandbrief", "Germany", "Dual Recourse", "Structured"],
    published: true,
    snapshot: [
      { labelKo: "기원", labelEn: "Origin", value: "1769 (프리드리히 대왕)", valueEn: "1769 (Frederick the Great)" },
      { labelKo: "현재 잔액", labelEn: "Current Outstanding", value: "€400B+" },
      { labelKo: "구조", labelEn: "Structure", value: "이중청구권 (Dual Recourse)", valueEn: "Dual Recourse" },
      { labelKo: "등급", labelEn: "Rating", value: "주로 AAA", valueEn: "Mostly AAA" },
    ],
    sections: [
      {
        heading: "1769년, 전쟁 폐허에서 탄생한 채권",
        headingEn: "1769: A Bond Born from the Ruins of War",
        body:
`7년전쟁(1756~1763)이 끝난 뒤, 프리드리히 2세(프리드리히 대왕)는 전쟁으로 황폐해진 실레지아 지방의 재건이라는 과제에 직면했다. 귀족과 지주들은 토지는 있었지만 현금이 없었고, 재건 자금을 빌릴 체계적 수단이 없었다.

1769년 8월 29일, 프리드리히는 칙령(Kabinettsorder)을 내려 'Pfandbrief'를 창설했다. 독일어로 '담보 편지(pledge letter)'를 뜻하는 이 채권은 인류 최초의 커버드본드였다. 토지신용조합(Landschaft)이 귀족 토지를 담보로 채권을 발행하고, 그 채권을 투자자에게 판매하는 구조였다.

핵심은 단순했다. 담보(토지)와 채권이 분리되지 않고 하나의 구조 안에 묶여 있었다. 발행자와 담보가 함께 책임지는 이 구조는 250년 이상 지속되며 오늘날 유럽 커버드본드 시장(€3T+)의 원형이 됐다.`,
        bodyEn:
`After the Seven Years' War (1756–1763), Frederick II faced the challenge of rebuilding the devastated province of Silesia. Nobles and landowners had estates but no cash, and lacked systematic means to borrow reconstruction funds.

On August 29, 1769, Frederick issued a royal cabinet order (Kabinettsorder) creating the Pfandbrief. The name means 'pledge letter' in German — and it was the world's first covered bond. Land Credit Societies (Landschaften) issued bonds backed by noble estates and sold them to investors.

The core was simple: collateral (land) and bond were not separated but bound together in one structure. Issuer and collateral bearing joint responsibility — this structure has endured for over 250 years and became the prototype for today's European covered bond market (€3T+).`,
      },
      {
        heading: "이중청구권: 왜 다른 채권보다 안전한가",
        headingEn: "Dual Recourse: Why It's Safer Than Other Bonds",
        body:
`Pfandbrief의 핵심 강점은 이중청구권(Dual Recourse)이다. 일반 은행채 투자자는 발행 은행이 파산하면 일반 채권자 지위가 되어 채무 조정 대상이 된다. 그러나 Pfandbrief 투자자는 두 개의 청구권을 동시에 갖는다.

① 발행 은행에 대한 일반 채권자 청구권
② 법적으로 ring-fence(분리 보호)된 커버풀(Cover Pool)에 대한 직접 청구권

커버풀은 발행 은행의 재무상태표에 유지된다. 하지만 법적으로 완전히 격리되어 있어, 은행이 파산해도 커버풀 자산은 일반 파산 재단에 편입되지 않는다. 오직 Pfandbrief 투자자를 위해서만 존재하며, 별도로 지정된 독립 감시자(Treuhänder)가 상시 관리한다.

실제로 독일 Pfandbrief 역사 250년 동안 원리금이 불이행된 사례는 없다. 이는 커버드본드 구조가 지닌 이중 안전망의 강력함을 보여준다.`,
        bodyEn:
`The defining strength of Pfandbrief is dual recourse. Ordinary bank bond investors become general creditors subject to debt restructuring if the bank fails. But Pfandbrief investors simultaneously hold two claims:

① A general creditor claim against the issuing bank
② A direct claim against the legally ring-fenced cover pool

The cover pool remains on the issuing bank's balance sheet — but is completely legally segregated. Even if the bank fails, the cover pool assets are not folded into the general bankruptcy estate. They exist solely for Pfandbrief investors, managed continuously by a designated independent monitor (Treuhänder).

In 250+ years of German Pfandbrief history, there has never been a principal or interest default. This testifies to the power of the covered bond structure's dual safety net.`,
      },
      {
        heading: "2008년 MBS는 무너졌고 Pfandbrief는 살아남은 이유",
        headingEn: "Why MBS Collapsed in 2008 While Pfandbrief Survived",
        body:
`2008년 금융위기는 미국 MBS(주택저당증권) 구조의 붕괴에서 촉발됐다. MBS는 은행이 모기지를 originate하고 SPV에 진정 양도(true sale)해 off-balance-sheet으로 내보내는 구조다. 리스크가 이전되자 대출 기준이 무너졌다 — 은행은 부실 모기지를 팔고 나면 그 결과에 무관심해졌다.

Pfandbrief는 정반대 구조다. 담보 자산이 은행 장부에 남는다(on-balance-sheet). 커버풀에 담긴 모기지가 부실화되면 은행이 직접 손실을 입는다. 이 구조가 역설적으로 인센티브를 정렬시켰다. 은행이 스스로 커버풀 자산 품질에 이해관계를 가지기 때문이다.

또 다른 차이는 투명성이다. MBS는 복잡한 트랜치 구조와 CDS/CDO로 정보 비대칭이 극심했다. Pfandbrief는 커버풀 구성이 법으로 엄격히 규정되고, Treuhänder가 적격성을 상시 검증했다. 2008년 최악의 위기에서도 독일 Pfandbrief 시장은 스프레드가 확대됐지만 거래는 지속됐다.`,
        bodyEn:
`The 2008 financial crisis was triggered by the collapse of the U.S. MBS structure. MBS involved banks originating mortgages, selling them via true sale to SPVs, and removing them off-balance-sheet. Once risk was transferred, lending standards collapsed — banks became indifferent to the quality of mortgages they originated.

Pfandbrief operates in the opposite direction. Collateral assets remain on-balance-sheet. If mortgages in the cover pool sour, the bank directly absorbs the loss. This structure paradoxically aligned incentives: banks retain a direct stake in cover pool asset quality.

Another difference is transparency. MBS suffered extreme information asymmetry through complex tranching and CDS/CDO layering. Pfandbrief cover pool composition is strictly regulated by law, and the Treuhänder verifies eligibility continuously. Even during the worst of the 2008 crisis, while Pfandbrief spreads widened, the market continued to function.`,
      },
      {
        heading: "Pfandbrief법 2005: 현대화와 세 가지 유형",
        headingEn: "Pfandbrief Act 2005: Modernization and Three Types",
        body:
`2005년 Pfandbriefgesetz(Pfandbrief법)는 분산돼 있던 기존 법령들을 통합하며 현대적 기준을 확립했다. 이 법은 Pfandbrief의 세 가지 유형을 공식화했다.

① Hypothekenpfandbrief (주택·상업용 부동산 담보): 가장 일반적인 유형. LTV 60% 한도 규정. 주거·상업용 모기지가 커버풀 구성.
② Öffentlicher Pfandbrief (공공기관 대출 담보): 연방·주정부·지방자치단체에 대한 대출이 커버풀을 구성.
③ Schiffspfandbrief (선박 담보): 선박 금융 전용. LTV 60% 한도.

법은 또한 Treuhänder(커버풀 감시자) 제도를 명문화했다. BaFin이 임명하는 독립 감시자가 커버풀 자산 적격성, 법정 과잉담보(overcollateralization) 비율 준수를 상시 검증한다. Pfandbrief 발행 자체에도 BaFin의 별도 인가가 필요하다.

과잉담보(OC)는 커버풀 자산 총액이 Pfandbrief 잔액 대비 2% 이상 초과하도록 의무화한다. 이 추가 완충장치가 투자자 보호를 한층 강화한다.`,
        bodyEn:
`The 2005 Pfandbriefgesetz (Pfandbrief Act) consolidated previously scattered legislation and established modern standards. The law formalized three types of Pfandbrief:

① Hypothekenpfandbrief (residential/commercial mortgage-backed): the most common type, with a 60% LTV cap. Residential and commercial mortgages form the cover pool.
② Öffentlicher Pfandbrief (public-sector backed): loans to federal, state, and municipal governments form the cover pool.
③ Schiffspfandbrief (ship-backed): specialized for maritime finance, with a 60% LTV cap.

The law also codified the Treuhänder (cover pool monitor) institution. An independent monitor appointed by BaFin continuously verifies cover pool asset eligibility and compliance with the statutory overcollateralization ratio. Issuing Pfandbrief also requires separate BaFin authorization.

Overcollateralization (OC) requires total cover pool assets to exceed Pfandbrief outstanding by at least 2%. This additional buffer further strengthens investor protection.`,
      },
      {
        heading: "현대 시장: 유럽 커버드본드의 벤치마크",
        headingEn: "Modern Market: The Benchmark of European Covered Bonds",
        body:
`현재 독일 Pfandbrief 잔액은 €400B+에 달하며, 유럽 커버드본드 전체 시장(€3T+ 추산)의 핵심 벤치마크다.

스프레드 수준은 독일 국채(Bund) 대비 통상 10~40bp. 동일 발행 은행의 무담보 선순위채(senior unsecured)보다 압도적으로 타이트하다. 생명보험사·연기금 등 고품질 담보채 수요가 스프레드를 지탱한다. 등급은 대부분 AAA 수준을 유지한다.

2019년 EU는 커버드본드 지침(Covered Bond Directive, ECBD)을 도입해 회원국 법령을 조화시켰다. 독일 Pfandbrief 모델이 유럽 표준으로 확산되는 흐름이 가속됐다. 프랑스(Obligations Foncières), 스페인(Cédulas Hipotecarias), 덴마크(Realkreditobligationer) 등이 유사한 커버드본드 시장을 갖고 있다.

한국에서도 2014년 커버드본드법이 통과됐고, 국내 은행들이 이 구조를 활용해 해외 자금을 조달하는 사례가 늘었다. Pfandbrief의 250년 생존은 단순하고 검증된 안전망 구조가 얼마나 강력한지를 보여준다.`,
        bodyEn:
`Current German Pfandbrief outstanding stands at €400B+, serving as the key benchmark for the broader European covered bond market (estimated €3T+).

Spreads typically run 10–40bp over German Bunds, dramatically tighter than the same bank's unsecured senior bonds. Life insurer and pension fund demand for high-quality collateralized debt underpins spreads. Most issuance carries AAA ratings.

In 2019, the EU introduced the Covered Bond Directive (ECBD), harmonizing member-state legislation. The German Pfandbrief model's adoption as the European standard accelerated. France (Obligations Foncières), Spain (Cédulas Hipotecarias), and Denmark (Realkreditobligationer) all operate similar covered bond markets.

In South Korea, a Covered Bond Act was passed in 2014, and domestic banks increasingly use the structure to raise overseas funding. The 250-year survival of the Pfandbrief demonstrates how powerful a simple, battle-tested safety net structure can be.`,
      },
    ],
    keyTerms: [
      {
        term: "커버드본드 (Covered Bond)",
        termEn: "Covered Bond",
        definition: "투자자가 발행 은행과 법적으로 분리된 커버풀 자산 모두에 청구권을 갖는 이중청구권 구조의 담보부 채권. Pfandbrief가 전형적 사례로, 250년 이상의 역사를 가진다.",
        definitionEn: "A secured bond in which investors hold dual recourse against both the issuing bank and a legally segregated cover pool of assets. The Pfandbrief is the archetypal example, with a history spanning 250+ years.",
      },
      {
        term: "이중청구권 (Dual Recourse)",
        termEn: "Dual Recourse",
        definition: "커버드본드 투자자가 ① 발행 은행에 대한 일반 채권자 청구권과 ② 법적으로 ring-fence된 커버풀에 대한 직접 청구권을 동시에 보유하는 구조. 발행자 파산 시에도 커버풀 자산에서 원리금 회수 가능.",
        definitionEn: "A structure where covered bond investors simultaneously hold ① a general creditor claim against the issuing bank and ② a direct claim against the legally ring-fenced cover pool. Even in issuer insolvency, investors can recover from cover pool assets.",
      },
      {
        term: "커버풀 (Cover Pool)",
        termEn: "Cover Pool",
        definition: "Pfandbrief 투자자 보호를 위해 법적으로 ring-fence된 담보 자산 집합. 발행 은행 장부에 유지되지만 파산 절차에서 격리 관리된다. 모기지(LTV 60% 이하), 공공기관 대출, 선박 대출 등으로 구성.",
        definitionEn: "A legally ring-fenced pool of collateral assets maintained for the protection of Pfandbrief investors. Kept on the issuing bank's balance sheet but isolated from insolvency proceedings. Composed of mortgages (LTV ≤60%), public-sector loans, and ship loans.",
      },
      {
        term: "Treuhänder (커버풀 감시자)",
        termEn: "Treuhänder (Cover Pool Monitor)",
        definition: "BaFin이 임명하는 독립적 커버풀 감시자. 커버풀 자산 적격성, 법정 과잉담보(OC) 비율 준수 여부를 상시 검증한다. Pfandbrief의 투명성과 신뢰성의 핵심 제도적 장치.",
        definitionEn: "An independent cover pool monitor appointed by BaFin. Continuously verifies cover pool asset eligibility and compliance with the statutory overcollateralization ratio. The key institutional mechanism underpinning Pfandbrief transparency and trustworthiness.",
      },
    ],
    relatedMarket101Slugs: [],
    relatedDealSlugs: ["santander-at1-no-call", "eu-ngeu-bonds"],
    executiveSummary: {
      ko: [
        "1769년 프리드리히 대왕 칙령으로 탄생 — 7년전쟁 후 실레지아 재건 자금 조달 수단으로 인류 최초의 커버드본드 창설",
        "이중청구권(Dual Recourse): 투자자가 발행 은행 + ring-fence된 커버풀 양쪽에 청구 — 250년 역사에서 단 한 번도 원리금 불이행 없음",
        "2008년 금융위기 생존 비결: on-balance-sheet 구조로 은행 인센티브 정렬, 단순 투명한 커버풀 구성, Treuhänder 상시 감시",
        "2005년 Pfandbrief법으로 현대화 — 모기지·공공기관·선박 3가지 유형, BaFin 인가, 법정 OC 의무",
        "현재 €400B+ 잔액, Bund 대비 10~40bp 스프레드, 대부분 AAA — 유럽 전역 커버드본드 표준 모델",
      ],
      en: [
        "Born from Frederick the Great's 1769 edict — created as a reconstruction financing tool after the Seven Years' War; the world's first covered bond",
        "Dual recourse: investors claim against both the bank and ring-fenced cover pool — in 250+ years of history, zero principal or interest defaults",
        "2008 crisis survival: on-balance-sheet structure aligned bank incentives, simple transparent cover pool, continuous Treuhänder monitoring",
        "2005 Pfandbrief Act modernization — three types (mortgage, public sector, ship), BaFin authorization, mandatory OC",
        "Currently €400B+ outstanding, 10–40bp spread over Bunds, mostly AAA — the standard model for European covered bonds",
      ],
    },
    assessment: {
      positives: [
        "250년 무결점 이력 — 단 한 번도 원리금 불이행 없이 세계 최장 기간 신용 기록을 유지",
        "이중청구권 구조 — 발행사 파산에도 커버풀에서 회수 가능, 일반 은행채 대비 월등한 투자자 보호",
        "2008년 금융위기에서 커버드본드의 구조적 우월성 실증 — off-balance-sheet MBS 대비 인센티브 정렬",
        "높은 유동성과 좁은 스프레드 — AAA 등급과 규격화된 구조로 안정적 기관 투자자 수요 확보",
      ],
      positivesEn: [
        "250-year spotless record — longest unbroken credit history in the world with zero principal or interest defaults",
        "Dual recourse structure — recoverable from cover pool even in issuer insolvency; superior investor protection vs unsecured bank bonds",
        "Proved structural superiority during 2008 crisis — incentive alignment vs off-balance-sheet MBS",
        "High liquidity and tight spreads — stable institutional investor demand secured by AAA rating and standardized structure",
      ],
      risks: [
        "커버풀 자산 가치 하락 리스크 — 부동산 가격 급락 시 LTV 60% 한도도 불충분할 수 있음",
        "발행 은행 건전성과의 연계 — 이중청구권 구조이지만, 은행 파산 시 커버풀 관리가 복잡해짐",
        "금리 리스크 — 장기 고정 금리 커버드본드는 금리 급등 시 커버풀 자산과의 듀레이션 불일치 발생",
        "Greenium 유사 현상 — 규제 자본 완화 혜택으로 발행사가 유리해지는 반면 투자자 수익률 압박",
      ],
      risksEn: [
        "Cover pool asset value risk — even the 60% LTV cap may be insufficient in severe real estate price crashes",
        "Linkage to bank health — despite dual recourse, cover pool management becomes complex in actual bank insolvency",
        "Interest rate risk — long-duration fixed-rate covered bonds can face duration mismatches with cover pool assets in rapid rate rises",
        "Greenium-analog effect — regulatory capital relief benefits issuers while compressing investor yields",
      ],
    },
    faq: [
      {
        q: "Pfandbrief와 일반 은행채의 가장 큰 차이는 무엇인가요?",
        qEn: "What is the biggest difference between a Pfandbrief and an ordinary bank bond?",
        a: "이중청구권(Dual Recourse) 구조입니다. 일반 은행채는 발행 은행이 파산하면 투자자가 일반 채권자 지위로 채무 조정 대상이 됩니다. Pfandbrief는 발행 은행이 파산해도 법적으로 ring-fence된 커버풀 자산에 직접 청구할 수 있습니다. 250년 역사에서 원리금 불이행이 단 한 번도 없었습니다.",
        aEn: "The dual recourse structure. With ordinary bank bonds, if the issuing bank fails, investors become general creditors subject to debt restructuring. With Pfandbrief, even if the bank fails, investors can claim directly against the legally ring-fenced cover pool. In 250+ years of history, there has never been a single principal or interest default.",
      },
      {
        q: "2008년 금융위기에서 MBS는 무너졌는데 Pfandbrief는 어떻게 살아남았나요?",
        qEn: "MBS collapsed in 2008 but Pfandbrief survived — how?",
        a: "핵심 차이는 on-balance-sheet 구조입니다. MBS는 담보 자산을 off-balance-sheet으로 매각해 은행이 위험을 제거했고, 그 결과 대출 기준이 무너졌습니다. Pfandbrief는 담보가 은행 장부에 남아 은행 스스로 자산 품질에 이해관계를 가집니다. 또한 독립 감시자(Treuhänder)와 엄격한 법적 요건이 커버풀 품질을 상시 관리했습니다.",
        aEn: "The key difference is the on-balance-sheet structure. MBS transferred collateral assets off-balance-sheet, removing bank risk and causing lending standards to collapse. Pfandbrief keeps collateral on the bank's books, so the bank retains a direct stake in asset quality. Additionally, the independent Treuhänder and strict legal requirements continuously managed cover pool quality.",
      },
      {
        q: "커버풀에는 어떤 자산이 편입될 수 있나요?",
        qEn: "What assets can be included in the cover pool?",
        a: "유형에 따라 다릅니다. Hypothekenpfandbrief: 주택·상업 모기지(LTV 60% 한도). Öffentlicher Pfandbrief: 연방·주·지방정부 대출. Schiffspfandbrief: 선박 금융 대출(LTV 60% 한도). 모든 자산은 법정 적격성 기준을 충족해야 하며, 커버풀 전체는 법정 과잉담보(OC) 비율 이상을 유지해야 합니다.",
        aEn: "It depends on the type. Hypothekenpfandbrief: residential/commercial mortgages (60% LTV cap). Öffentlicher Pfandbrief: loans to federal, state, and municipal governments. Schiffspfandbrief: ship finance loans (60% LTV cap). All assets must meet statutory eligibility criteria, and the overall pool must maintain the required overcollateralization ratio.",
      },
      {
        q: "Pfandbrief의 금리 수준은 어느 정도인가요?",
        qEn: "What are Pfandbrief yield levels like?",
        a: "독일 국채(Bund) 대비 통상 10~40bp 가산 수준입니다. 동일 은행의 무담보 선순위채보다는 훨씬 낮습니다(50~150bp 이상 차이 가능). 대부분 AAA 등급을 유지하며, 생명보험사·연기금·중앙은행 등 고품질 자산을 선호하는 기관 투자자들에게 선호받습니다.",
        aEn: "Typically 10–40bp above German Bunds. This is dramatically tighter than the same bank's unsecured senior bonds (which might be 50–150bp+ wider). Most carry AAA ratings and are favored by institutional investors requiring high-quality assets — life insurers, pension funds, and central banks.",
      },
      {
        q: "독일 외 다른 나라에도 Pfandbrief 같은 커버드본드가 있나요?",
        qEn: "Are there Pfandbrief-like covered bonds in countries other than Germany?",
        a: "네, 많습니다. 프랑스(Obligations Foncières), 스페인(Cédulas Hipotecarias), 덴마크(Realkreditobligationer), 스웨덴, 노르웨이 등이 유사한 시장을 운영합니다. 2019년 EU는 커버드본드 지침(ECBD)으로 회원국 법령을 조화시켰습니다. 한국에서도 2014년 커버드본드법이 통과됐습니다. 전 세계적으로 독일 Pfandbrief 모델이 표준으로 인정받고 있습니다.",
        aEn: "Yes, many. France (Obligations Foncières), Spain (Cédulas Hipotecarias), Denmark (Realkreditobligationer), Sweden, Norway, and others operate similar markets. The EU's 2019 Covered Bond Directive (ECBD) harmonized member-state legislation. South Korea also passed a Covered Bond Act in 2014. Globally, the German Pfandbrief model is recognized as the standard.",
      },
    ],
    references: [
      { id: 1, author: "Verband deutscher Pfandbriefbanken (vdp)", title: "The Pfandbrief: Facts and Figures", source: "vdp Annual Publication", year: "2023", url: "https://www.pfandbrief.de/site/en/vdp/pfandbrief/facts.html" },
      { id: 2, author: "European Covered Bond Council (ECBC)", title: "ECBC European Covered Bond Fact Book", source: "ECBC", year: "2023", url: "https://www.ecbc.eu/resources/covered-bond-fact-book" },
      { id: 3, author: "BaFin", title: "Pfandbrief Banks — Supervision and Regulation", source: "Federal Financial Supervisory Authority", year: "2023", url: "https://www.bafin.de/EN/Aufsicht/BankenFinanzdienstleister/Pfandbrief/pfandbrief_node.html" },
      { id: 4, author: "European Parliament & Council", title: "Directive 2019/2162 on the Issue of Covered Bonds (ECBD)", source: "Official Journal of the European Union", year: "2019", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L2162" },
    ],
  },

  {
    slug: "germany-negative-yield",
    title: "독일 마이너스 금리 국채 (2016~2019)",
    titleEn: "German Negative Yield Bunds (2016–2019)",
    category: "structure",
    categoryLabel: "구조·통화",
    categoryLabelEn: "Structure & Currency",
    excerpt: "돈을 잃는 게 확정인 채권을 왜 샀나. 채권시장이 상식을 벗어날 수 있음을 보여준 초현실의 4년.",
    excerptEn: "Why would anyone buy a bond guaranteed to lose money? Four surreal years that proved bond markets can defy conventional logic.",
    dealYear: 2016,
    issuer: "Federal Republic of Germany",
    issuerEn: "Federal Republic of Germany",
    readingMinutes: 11,
    tags: ["마이너스금리", "독일", "Bund", "금리정책", "ECB"],
    tagsEn: ["Negative Yield", "Germany", "Bund", "Rate Policy", "ECB"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Federal Republic of Germany" },
      { labelKo: "기간", labelEn: "Period", value: "2016–2019" },
      { labelKo: "최저 수익률", labelEn: "Lowest Yield", value: "-0.71% (2019)" },
      { labelKo: "잔액 (최대)", labelEn: "Peak Outstanding", value: "~$17T 글로벌 음수익률채", valueEn: "~$17T global negative-yield bonds" },
    ],
    sections: [
      {
        heading: "마이너스 금리의 탄생: ECB의 비상 실험",
        headingEn: "The Birth of Negative Yields: The ECB's Emergency Experiment",
        body:
`2014년 6월, 유럽중앙은행(ECB)은 전례 없는 결정을 내렸다. 예금금리를 -0.1%로 인하한 것이다. 은행이 ECB에 돈을 맡기면 이자를 받는 것이 아니라 오히려 보관료를 내야 했다. ZIRP(제로 금리 정책)를 넘어 NIRP(마이너스 금리 정책)의 시대가 열렸다.

배경은 유로존 위기 이후의 디플레이션 공포였다. 그리스·스페인·이탈리아 위기가 진정됐지만 경제 성장은 더뎠고, 물가는 0%에 수렴했다. ECB는 일본식 '잃어버린 20년'을 막기 위해 모든 수단을 동원했다.

2015년 3월, ECB는 QE(자산매입 프로그램)까지 가동했다. 매월 €600억 이상의 국채를 매입했다. 독일 국채(Bund) 매입 수요가 급증하자 10년물 금리가 0%를 향해 내려갔다. 2016년에 처음으로 독일 10년물 금리가 마이너스 영역에 진입했다. 이후 ECB 예금금리는 -0.5%까지 낮아졌다.`,
        bodyEn:
`In June 2014, the European Central Bank (ECB) made an unprecedented decision: it cut its deposit rate to -0.1%. Banks depositing money with the ECB would now pay rather than receive interest. The era had moved beyond ZIRP (Zero Interest Rate Policy) into NIRP (Negative Interest Rate Policy).

The backdrop was deflation fear following the Eurozone crisis. Greece, Spain, and Italy had stabilized, but economic growth was sluggish and inflation was approaching zero. The ECB deployed every tool available to prevent a Japanese-style 'lost decade.'

In March 2015, the ECB also launched QE (Asset Purchase Programme), purchasing €60B+ in government bonds monthly. Surging demand for German Bunds pushed 10-year yields toward zero. By 2016, German 10-year yields entered negative territory for the first time. ECB deposit rates were eventually cut to -0.5%.`,
      },
      {
        heading: "마이너스 금리 채권을 왜 샀나: 여섯 가지 이유",
        headingEn: "Why Anyone Bought Negative Yield Bonds: Six Reasons",
        body:
`"확실히 돈 잃는 채권을 왜 사나?"라는 질문은 상식적으로 당연하다. 그러나 채권시장에는 단순한 수익률 추구 이상의 매수 이유가 존재한다.

① 규제 의무: 보험사·은행은 규제상 안전자산(국채)을 일정 비율 보유해야 한다. 금리가 마이너스여도 대안이 없다.

② 자본차익 기대: 금리가 더 낮아지면 채권 가격이 오른다. -0.3%에 매수해 -0.5%에 팔면 자본차익이 발생한다.

③ FX 헤지 후 플러스 전환: 미국 달러 투자자가 유로 채권을 사고 USD/EUR를 헤지하면, 금리 차이(크로스커런시 베이시스)로 인해 실제 수익률이 플러스가 되는 경우가 있었다.

④ 디플레이션 헤지: 명목 금리가 -0.5%여도 실질 인플레이션이 -1%라면 실질 수익률은 +0.5%다.

⑤ 안전자산 도피처: 위기 시 자본 보존이 최우선인 투자자에게는 소폭 손실을 감수한 안전이 중요하다.

⑥ TINA(There Is No Alternative): 전 세계 마이너스 수익률 채권이 $17T에 달했던 시기에는, 마이너스여도 Bund가 최선이었다.`,
        bodyEn:
`"Why buy a bond guaranteed to lose money?" is a commonsense question. But bond markets contain buying motivations beyond simple yield pursuit.

① Regulatory mandate: insurers and banks must hold a certain proportion of safe assets (government bonds) by regulation. No alternative exists even if yields are negative.

② Capital gain expectation: if rates fall further, bond prices rise. Buying at -0.3% and selling at -0.5% generates capital gains.

③ FX-hedged positive yield: U.S. dollar investors buying euro bonds and hedging USD/EUR sometimes ended up with positive returns due to cross-currency basis effects.

④ Deflation hedge: even at -0.5% nominal yield, if real inflation is -1%, real yield is +0.5%.

⑤ Safe-haven flight: for investors prioritizing capital preservation in a crisis, slight losses are acceptable for safety.

⑥ TINA (There Is No Alternative): when $17T in global bonds carried negative yields, Bunds were the best option even at negative rates.`,
      },
      {
        heading: "마이너스 금리의 정점: 10년물 -0.71% (2019년 8월)",
        headingEn: "The Apex: 10-Year Bund at -0.71% (August 2019)",
        body:
`2019년 8월, 독일 10년물 국채 금리는 사상 최저점인 -0.71%를 기록했다. 30년물도 잠시 마이너스 영역에 진입했다.

촉발 요인은 복합적이었다. 미-중 무역전쟁 격화(트럼프 8월 추가 관세), 글로벌 제조업 경기 침체, 브렉시트 불확실성, 홍콩 시위 확대, 아르헨티나 채권 급락. 안전자산 수요가 폭발했다.

그 시점 전 세계에서 마이너스 수익률로 거래되는 채권은 약 $17T(17조 달러)에 달했다. 독일·일본·스위스·프랑스·네덜란드 국채는 거의 모든 만기에서 마이너스였다. 덴마크에서는 마이너스 금리 주택담보대출도 등장했다.

이 시기는 금융 이론의 기본 가정이 무너진 시대였다. 화폐 시간가치(time value of money)는 항상 플러스여야 한다는 전제 — 이 가정이 채권시장에서 명백히 기각됐다.`,
        bodyEn:
`In August 2019, the German 10-year Bund yield hit an all-time low of -0.71%. The 30-year Bund briefly entered negative territory as well.

The triggers were multiple: U.S.-China trade war escalation (Trump's August additional tariffs), global manufacturing recession, Brexit uncertainty, Hong Kong protests, Argentine bond collapse. Demand for safe assets exploded.

At that point, global bonds trading at negative yields totaled approximately $17 trillion. German, Japanese, Swiss, French, and Dutch government bonds were negative across nearly all maturities. In Denmark, negative-rate mortgages even emerged.

This period represented an era when a basic assumption of financial theory broke down. The time value of money — always positive in theory — was demonstrably refuted in bond markets.`,
      },
      {
        heading: "2022년: 마이너스 금리의 종말",
        headingEn: "2022: The End of Negative Yields",
        body:
`2022년 2월, 러시아의 우크라이나 침공이 모든 것을 바꿨다. 에너지 공급 쇼크와 공급망 붕괴가 겹치면서 유로존 인플레이션이 10%를 향해 치솟았다. ECB는 더 이상 금리를 낮게 유지할 수 없었다.

ECB는 2022년 7월부터 2023년 9월까지 450bp의 금리 인상을 단행했다. 450bp — 단 14개월 만에 4.5%포인트 인상. 역사상 가장 빠른 유럽 긴축 사이클이었다.

독일 10년물 금리는 -0.71%에서 불과 18개월 만에 +2.5%를 넘어섰다. 약 3.2%포인트의 금리 상승은 채권 가격의 폭락을 의미했다. $17T 규모의 마이너스 금리 채권 풀은 사실상 증발했다.

그 과정에서 마이너스 금리 채권을 보유했던 투자자들은 큰 평가 손실을 입었다. 만기까지 보유하면 원리금은 보장되지만, 시장가치 기준으로는 역대급 채권 시장 하락이었다. 미국에서는 이 과정이 SVB 붕괴(2023)의 직접적 원인이 됐다.`,
        bodyEn:
`In February 2022, Russia's invasion of Ukraine changed everything. Energy supply shocks combined with supply chain disruptions sent Eurozone inflation toward 10%. The ECB could no longer keep rates low.

The ECB hiked 450bp between July 2022 and September 2023 — 4.5 percentage points in just 14 months. The fastest European tightening cycle in history.

German 10-year yields went from -0.71% to above +2.5% in just 18 months — a roughly 3.2 percentage point rise, meaning bond prices collapsed. The $17T pool of negative-yield bonds essentially evaporated.

In the process, investors holding negative-yield bonds suffered massive mark-to-market losses. Principal is guaranteed to maturity, but on a market-value basis, it was one of the greatest bond market selloffs in history. In the U.S., this process was a direct cause of the SVB collapse (2023).`,
      },
      {
        heading: "마이너스 금리 시대의 유산과 교훈",
        headingEn: "Legacy and Lessons of the Negative Yield Era",
        body:
`마이너스 금리 시대는 여러 왜곡과 교훈을 남겼다.

**좀비 기업 문제**: 초저금리가 지속되면서 이자도 못 내는 기업들이 '연명 자금조달'로 살아남았다. 유럽·일본에서 생산성 낮은 기업들이 자본을 묶어두며 경제 활력을 낮췄다.

**은행 수익성 압박**: 은행은 예금 금리를 마이너스로 가져가기 어려웠다(예금자 이탈 우려). NIM(순이자마진)이 압박받아 은행 수익성이 악화됐다.

**자산 거품**: 채권 수익률이 마이너스인 환경에서 위험자산(주식·부동산)으로의 자금 흐름이 가속됐다. 독일·스웨덴·노르웨이 등에서 부동산 버블 형성.

**채권 투자자 교훈**: 만기까지 보유 전제로 매입한 마이너스 채권도 금리 급등 시 중간 과정의 시장 손실이 엄청날 수 있다. 듀레이션 리스크(duration risk)의 실질적 교훈.

결국 마이너스 금리 시대는 "채권 수익률은 항상 플러스"라는 상식이 얼마나 취약한 가정이었는지를 증명했다.`,
        bodyEn:
`The negative yield era left behind several distortions and lessons.

**Zombie company problem**: with ultra-low rates persisting, companies unable to even pay interest survived through 'life-support financing.' In Europe and Japan, low-productivity companies tied up capital and reduced economic vitality.

**Bank profitability pressure**: banks struggled to pass negative rates to depositors (fearing deposit flight). Net interest margins (NIM) were squeezed, impairing bank profitability.

**Asset bubbles**: with bond yields negative, capital flows accelerated into risk assets (equities, real estate). Property bubbles formed in Germany, Sweden, Norway, and elsewhere.

**Bond investor lesson**: even negative-yield bonds held to maturity guarantee principal repayment, but intermediate market losses from a sudden rate spike can be enormous. The real-world lesson in duration risk.

Ultimately, the negative yield era proved how fragile the assumption that 'bond yields are always positive' actually was.`,
      },
    ],
    keyTerms: [
      {
        term: "NIRP (마이너스 금리 정책)",
        termEn: "NIRP (Negative Interest Rate Policy)",
        definition: "중앙은행 기준금리를 0% 이하로 설정하는 비전통적 통화 정책. ECB(2014), 일본은행(2016), 스위스 국립은행 등이 채택. 은행의 ECB 예치금에 '보관료'를 부과해 대출·소비 유도가 목적.",
        definitionEn: "An unconventional monetary policy setting the central bank policy rate below zero. Adopted by the ECB (2014), Bank of Japan (2016), Swiss National Bank, and others. The goal is to charge banks a 'storage fee' on ECB deposits, incentivizing lending and spending.",
      },
      {
        term: "마이너스 수익률 채권",
        termEn: "Negative Yield Bond",
        definition: "만기까지 보유 시 원금보다 적은 금액을 회수하는 채권. 발행 시 마이너스 쿠폰이거나, 이차 시장에서 액면가 이상으로 거래되어 수익률이 마이너스가 된 채권. 2019년 8월 전 세계 잔액 $17T 최고점.",
        definitionEn: "A bond where the investor receives less than the principal at maturity. Either issued with a negative coupon, or trading above par in the secondary market such that the yield is negative. Global outstanding peaked at $17T in August 2019.",
      },
      {
        term: "듀레이션 리스크 (Duration Risk)",
        termEn: "Duration Risk",
        definition: "금리 변동에 따른 채권 가격 변동 위험. 만기가 길수록, 쿠폰이 낮을수록 듀레이션이 높아 금리 상승 시 가격 하락이 크다. 마이너스 금리 채권은 쿠폰이 0에 가까워 듀레이션이 극도로 높고, 금리 정상화 시 막대한 손실이 발생한다.",
        definitionEn: "The risk of bond price changes due to interest rate movements. The longer the maturity and lower the coupon, the higher the duration and the larger the price decline on rate rises. Negative-yield bonds have near-zero coupons and extremely high duration, generating massive losses when rates normalize.",
      },
      {
        term: "TINA (There Is No Alternative)",
        termEn: "TINA (There Is No Alternative)",
        definition: "다른 투자 대안이 없어 어쩔 수 없이 해당 자산에 투자하는 현상을 설명하는 약어. 마이너스 금리 시대에는 마이너스여도 독일 국채가 최선의 안전자산이었다. 초저금리 시대에는 주식에도 같은 논리가 적용됐다.",
        definitionEn: "An acronym describing the phenomenon of investing in an asset because no better alternative exists. In the negative yield era, even negative Bunds were the best safe-haven asset available. In ultra-low rate environments, the same logic was applied to equities.",
      },
    ],
    relatedMarket101Slugs: [],
    relatedDealSlugs: ["german-pfandbrief", "svb-2023"],
    executiveSummary: {
      ko: [
        "2014년 ECB NIRP(-0.1%) → 2015년 QE 개시 → 2016년 독일 10년물 첫 마이너스 진입 — 비전통적 통화정책이 채권시장 상식을 깼다",
        "2019년 8월 최저점 -0.71% 기록 / 전 세계 $17T 마이너스 수익률 채권 — 화폐 시간가치 전제가 채권시장에서 실증적으로 기각",
        "마이너스 채권을 산 6가지 이유: 규제 의무·자본차익·FX 헤지·디플레이션 헤지·안전자산·TINA",
        "2022년 러시아-우크라이나 → 에너지 인플레이션 → ECB 14개월 450bp 인상 → 10년물 -0.71%에서 +2.5%로 폭등",
        "교훈: 듀레이션 리스크의 실질적 위험성, 좀비 기업 양산, 자산 버블, SVB류 ALM 실패의 구조적 원인",
      ],
      en: [
        "2014 ECB NIRP (-0.1%) → 2015 QE launch → 2016 German 10-year yields turn negative — unconventional monetary policy broke bond market common sense",
        "August 2019 all-time low of -0.71% / $17T in global negative yield bonds — the time value of money premise empirically refuted in bond markets",
        "Six reasons to buy negative bonds: regulatory mandate, capital gains, FX hedging, deflation hedge, safe-haven flight, TINA",
        "2022 Russia-Ukraine → energy inflation → ECB 450bp in 14 months → 10-year yield surges from -0.71% to +2.5%",
        "Lessons: real duration risk dangers, zombie company proliferation, asset bubbles, structural cause of SVB-type ALM failures",
      ],
    },
    assessment: {
      positives: [
        "디플레이션 방지 효과 — ECB NIRP·QE 조합이 유로존의 일본식 장기 디플레이션 진입을 막는 데 기여",
        "정부 재정 부담 경감 — 마이너스 금리로 이탈리아·스페인 등 남유럽 국가 부채비용 대폭 절감, 재정 안정화",
        "주택·부동산 공급 자극 — 초저금리가 신규 건설 및 투자를 유도, 일부 지역 주택 부족 완화",
        "금융위기 재발 방지 — 유로존 위기 이후 급격한 긴축 대신 완화적 통화정책으로 시스템 붕괴 방지",
      ],
      positivesEn: [
        "Deflation prevention — ECB NIRP and QE combination helped prevent Eurozone from entering Japanese-style long-term deflation",
        "Government debt burden relief — negative rates dramatically cut borrowing costs for southern European countries (Italy, Spain), stabilizing public finances",
        "Housing and construction stimulus — ultra-low rates incentivized new construction and investment, partially alleviating housing shortages",
        "Post-crisis stability — expansionary monetary policy instead of sharp tightening prevented systemic collapse after the Eurozone crisis",
      ],
      risks: [
        "좀비 기업 양산 — 초저금리로 퇴출되어야 할 비효율 기업이 살아남아 생산성 저하, 자원 배분 왜곡",
        "은행 수익성 악화 — NIM 압박으로 유럽 은행의 수익성 장기 훼손, 자본 적정성 문제 잠재",
        "자산 버블 형성 — 안전자산 수익률 부재가 위험자산(주식·부동산)으로 과도한 자금 이동 유발",
        "2022년 급격한 정상화 충격 — 14개월 450bp 인상 과정에서 장기 듀레이션 자산 보유자 막대한 손실",
      ],
      risksEn: [
        "Zombie company proliferation — ultra-low rates kept inefficient companies that should have exited alive, reducing productivity and distorting resource allocation",
        "Bank profitability damage — NIM pressure long-term impaired European bank earnings, creating latent capital adequacy concerns",
        "Asset bubble formation — absence of safe-asset yields triggered excessive capital flows into risk assets (equities, real estate)",
        "2022 normalization shock — 450bp over 14 months caused massive losses for holders of long-duration assets",
      ],
    },
    faq: [
      {
        q: "마이너스 금리 채권을 사면 항상 돈을 잃나요?",
        qEn: "Do you always lose money buying negative yield bonds?",
        a: "만기까지 보유하면 원리금 약속대로 손실이 확정됩니다 — 예를 들어 -0.5% 수익률로 매입하면 연 0.5%씩 손실. 하지만 두 가지 방법으로 이익이 가능합니다. 첫째, 자본차익: 이후 수익률이 더 낮아지면(예: -0.5% → -0.7%) 채권 가격이 올라 매각 시 이익. 둘째, FX 헤지: 달러 투자자가 유로 채권을 사고 USD/EUR를 헤지하면 크로스커런시 베이시스로 실질 달러 수익률이 플러스가 되는 구간이 있었습니다.",
        aEn: "Held to maturity, yes — losses are locked in. For example, buying at -0.5% yields means losing 0.5% per year. But there are two paths to profit. First, capital gain: if yields fall further (e.g., -0.5% → -0.7%), bond prices rise, generating profit on sale. Second, FX hedging: U.S. dollar investors buying euro bonds and hedging USD/EUR sometimes achieved positive dollar yields through cross-currency basis effects.",
      },
      {
        q: "ECB는 왜 마이너스 금리를 도입했나요?",
        qEn: "Why did the ECB introduce negative rates?",
        a: "유로존 위기(2010~2012) 이후 경제 회복이 더딘 가운데 인플레이션이 0%에 수렴하면서 디플레이션 공포가 커졌습니다. ECB의 물가 목표는 '2% 근방'인데 실제 물가가 0%에 머물면 이를 벗어나기 위해 모든 수단을 동원해야 했습니다. 마이너스 금리는 은행이 ECB에 현금을 쌓아두는 대신 대출·투자로 내보내도록 유도하는 '벌금' 메커니즘이었습니다.",
        aEn: "After the Eurozone crisis (2010–2012), economic recovery remained slow while inflation converged toward zero, deepening deflation fears. The ECB's price target is 'close to 2%'; with actual inflation stuck at 0%, it had to deploy every tool available. Negative rates were a 'penalty' mechanism designed to discourage banks from hoarding cash at the ECB and instead push them into lending and investment.",
      },
      {
        q: "2022년 금리 인상이 왜 이렇게 빨랐나요?",
        qEn: "Why was the 2022 rate hike so rapid?",
        a: "공급 충격이 수요 충격과 동시에 발생했기 때문입니다. 2022년 초 러시아의 우크라이나 침공은 유럽의 에너지 공급을 타격했습니다. 가스·전기 가격이 수배 폭등하면서 생산자 물가와 소비자 물가가 동반 급등했습니다. 동시에 팬데믹 이후 공급망 병목이 해소되지 않았습니다. ECB는 초기에 '일시적 인플레이션'이라며 긴축을 미뤘고, 뒤늦게 인플레이션이 구조적임을 인식한 후 빠른 속도로 금리를 올려야 했습니다.",
        aEn: "Supply and demand shocks occurred simultaneously. Russia's invasion of Ukraine in early 2022 disrupted European energy supplies. Gas and electricity prices surged several-fold, sending producer and consumer prices soaring together. Meanwhile, post-pandemic supply chain bottlenecks persisted. The ECB initially labeled it 'transient inflation' and delayed tightening; when it recognized the structural nature of inflation, it had to hike aggressively to make up for lost time.",
      },
      {
        q: "독일 국채가 마이너스 금리일 때 독일 정부는 이익인가요?",
        qEn: "When German Bunds carry negative yields, is that beneficial for the German government?",
        a: "네, 매우 유리했습니다. 독일 정부는 10년물 국채를 발행하면서 오히려 투자자에게서 이자를 '받는' 셈이었습니다. 예를 들어 -0.5%로 €1000억을 발행하면 매년 €5억씩 투자자가 독일 정부에 지불하는 구조입니다. 이 기간 독일 정부는 역사적으로 가장 낮은 부채비용으로 재정을 운용할 수 있었고, 재정 흑자(Schwarze Null) 정책도 이 환경이 아니었다면 훨씬 어려웠을 것입니다.",
        aEn: "Yes, it was extremely favorable. When Germany issued 10-year bonds at negative yields, investors were effectively paying the German government interest. For example, issuing €100B at -0.5% means investors pay Germany €500M per year. During this period, the German government operated with historically the lowest debt costs ever; the fiscal surplus (Schwarze Null) policy would have been far more difficult without this environment.",
      },
      {
        q: "마이너스 금리 시대가 다시 올 수 있나요?",
        qEn: "Could the negative yield era return?",
        a: "가능성을 완전히 배제할 수는 없지만, 현재 환경에서는 낮습니다. 인플레이션이 중앙은행 목표 수준(2%)에 정착하는 상황이 지속된다면 금리는 낮아질 것입니다. 그러나 2022~2023년의 에너지·식품 인플레이션 경험, 지정학 리스크, 탈탄소화 비용, 인구 고령화에 따른 의료비 지출 증가 등이 중기적으로 인플레이션 압력을 지속시킬 것이라는 견해가 많습니다. 일본은 2024년 마이너스 금리를 종료했습니다.",
        aEn: "Impossible to fully exclude, but unlikely in the current environment. If inflation settles at central bank targets (2%), rates will fall. However, many argue that the 2022–2023 energy and food inflation experience, geopolitical risks, decarbonization costs, and rising healthcare spending from aging populations will sustain medium-term inflationary pressure. Japan ended negative rates in 2024.",
      },
    ],
    references: [
      { id: 1, author: "European Central Bank", title: "Negative Interest Rates in the Euro Area", source: "ECB Economic Bulletin", year: "2021", url: "https://www.ecb.europa.eu/pub/economic-bulletin/html/index.en.html" },
      { id: 2, author: "BIS", title: "Negative Rates: The Challenges from a Financial Stability Perspective", source: "BIS Quarterly Review", year: "2020", url: "https://www.bis.org/publ/qtrpdf/r_qt2003b.htm" },
      { id: 3, author: "Deutsche Bundesbank", title: "German Government Bond Yield Historical Data", source: "Deutsche Bundesbank Statistics", year: "2024", url: "https://www.bundesbank.de/en/statistics/money-and-capital-markets/yields-and-interest-rates" },
      { id: 4, author: "Brunnermeier, M. & Koby, Y.", title: "The Reversal Interest Rate", source: "American Economic Review", year: "2019", url: "https://www.aeaweb.org/articles?id=10.1257/aer.20171011" },
    ],
  },

  {
    slug: "formosa-bonds",
    title: "포모사본드 붐과 콜 스킵 (2010년대)",
    titleEn: "Formosa Bond Boom and No-Calls (2010s)",
    category: "structure",
    categoryLabel: "구조·통화",
    categoryLabelEn: "Structure & Currency",
    excerpt: "대만 보험 수요가 만든 시장, 그리고 발행사들이 콜 안 하면서 보험사가 길게 물린 extension risk의 집단 사례.",
    excerptEn: "A market created by Taiwanese insurer demand — and then the extension risk that materialized when issuers stopped calling.",
    dealYear: 2013,
    issuer: "다수 발행사",
    issuerEn: "Multiple Issuers",
    readingMinutes: 10,
    tags: ["포모사", "대만", "ALM", "콜옵션", "Extension Risk"],
    tagsEn: ["Formosa", "Taiwan", "ALM", "Call Option", "Extension Risk"],
    published: true,
    snapshot: [
      { labelKo: "시장", labelEn: "Market", value: "대만 (TWD/USD)", valueEn: "Taiwan (TWD/USD)" },
      { labelKo: "주요 수요층", labelEn: "Key Buyers", value: "대만 보험사 (ALM)", valueEn: "Taiwanese insurers (ALM)" },
      { labelKo: "전성기", labelEn: "Peak", value: "2013–2018" },
    ],
    sections: [
      {
        heading: "포모사본드란: 대만 보험사가 만들어낸 시장",
        headingEn: "What Are Formosa Bonds: A Market Created by Taiwanese Insurers",
        body:
`포모사본드(Formosa Bond)는 외국 발행사가 대만 현지에서 주로 달러(USD)로 발행하는 채권이다. 대만 증권거래소에 상장되며, 주된 수요처는 대만 생명보험사들이다. '포모사(Formosa)'는 포르투갈어로 '아름다운 섬' — 대만의 별칭에서 따왔다.

이 시장이 탄생한 이유는 단순하다. 대만 생명보험사들은 달러 표시 장기 부채(보험증권)를 보유하고 있는데, 이를 매칭할 장기 달러 자산이 필요했다. 대만 국내 채권시장은 규모가 작고 만기가 짧다. 해외 달러 채권은 규제 제약이 있었다.

포모사본드가 해결책이었다. 외국 발행사(은행·SSA·기업)가 대만 현지법으로 발행하고, 대만 생명보험사가 직접 투자할 수 있었다. 발행사 입장에서는 대만 투자자 기반 접근, 생명보험사 입장에서는 장기 달러 자산 확보. 양측 모두에게 좋은 거래였다.`,
        bodyEn:
`A Formosa Bond is a bond issued by a foreign issuer in Taiwan's local market, typically denominated in USD. Listed on the Taiwan Stock Exchange, the primary demand comes from Taiwanese life insurers. 'Formosa' is Portuguese for 'beautiful island' — a traditional name for Taiwan.

The market's origin is straightforward: Taiwanese life insurers hold long-dated dollar-denominated liabilities (insurance policies), requiring matching long-dated dollar assets. Taiwan's domestic bond market is small and short-dated. Offshore dollar bonds faced regulatory constraints.

Formosa bonds were the solution. Foreign issuers (banks, SSAs, corporates) issued under Taiwanese local law, and Taiwanese life insurers could invest directly. For issuers: access to Taiwanese investor base. For insurers: long-dated dollar asset acquisition. A beneficial trade for both sides.`,
      },
      {
        heading: "대만 생명보험사의 ALM 딜레마",
        headingEn: "Taiwanese Life Insurers' ALM Dilemma",
        body:
`대만 생명보험 산업의 구조적 문제는 자산-부채 만기 불일치(ALM 미스매치)다.

1980~2000년대에 판매된 보험 상품들은 높은 보증 수익률(guaranteed return)을 약속했다 — 일부는 연 6~7%까지. 하지만 대만 금리가 하락하면서 이 약속을 이행하기 위한 자산 운용이 극도로 어려워졌다.

생명보험사는 20~30년 만기의 장기 부채를 갖고 있다. 이를 매칭하려면 동일한 장기 달러 자산이 필요하다. 그러나 대만 국내 채권시장에는 장기 채권이 부족하다. 해외 달러 채권은 외화투자 한도 규제와 환 리스크가 문제였다.

포모사본드는 이 딜레마를 해결했다. 국내 발행이므로 외화투자 한도를 소진하지 않고, 달러 표시로 ALM 수요를 충족하며, 30년 만기(콜 구조 포함)로 장기 매칭이 가능했다. 카타이생명(Cathay Life), 푸본생명(Fubon Life), 중국생명보험(China Life Taiwan) 등 대만 대형 생명사들이 주된 투자자였다.`,
        bodyEn:
`The structural problem of Taiwan's life insurance industry is an asset-liability maturity mismatch (ALM mismatch).

Insurance products sold in the 1980s–2000s promised high guaranteed returns — some as high as 6–7% annually. But as Taiwanese interest rates fell, meeting these obligations through asset management became extremely difficult.

Life insurers hold long-dated liabilities of 20–30 year maturities. Matching these requires equivalent long-dated dollar assets. But Taiwan's domestic bond market lacks long-dated instruments. Offshore dollar bonds faced foreign investment quota regulations and currency risk.

Formosa bonds resolved this dilemma. Issued domestically, they didn't consume foreign investment quotas; denominated in USD, they met ALM needs; with 30-year maturities (including callable structures), long-dated matching was possible. Cathay Life, Fubon Life, and China Life Taiwan were among the major investors.`,
      },
      {
        heading: "붐: 2013~2018년 구조와 발행 폭발",
        headingEn: "The Boom: 2013–2018 Structure and Issuance Explosion",
        body:
`2013~2018년 포모사본드 시장은 폭발적으로 성장했다. 누적 발행액은 $150B+를 넘어섰다.

대표적 구조는 30NC5 또는 30NC10이다. '30년 만기, 5년 후 콜 가능(이후 매 5년마다)'. 투자자는 30년 만기를 보유하지만, 발행사가 5년 후 콜을 행사하면 상환된다는 전제로 매수했다. 표면적으로는 30년 채권이지만, 시장은 사실상 5년 또는 10년 채권처럼 가격을 매겼다.

주요 발행사는 다양했다. HSBC, Deutsche Bank, Société Générale, Barclays, ABN AMRO 등 글로벌 은행들이 AT1·Tier 2 자본 조달에 포모사를 활용했다. ADB(아시아개발은행), IADB(미주개발은행) 등 SSA도 발행했다. 발행 스프레드는 발행사에게 유리한 경우가 많았고, 대만 생명보험사들의 압도적 수요가 시장을 지탱했다.

전성기에는 포모사본드가 대만 생명보험사 달러 자산의 20~30%를 차지하는 시장으로 성장했다.`,
        bodyEn:
`Between 2013 and 2018, the Formosa bond market grew explosively, with cumulative issuance exceeding $150B+.

The typical structure was 30NC5 or 30NC10: '30-year maturity, callable after 5 years (every 5 years thereafter).' Investors bought knowing the tenor was technically 30 years, but under the assumption the issuer would call at year 5. In form a 30-year bond, but priced by the market as though it were a 5- or 10-year instrument.

Issuers were diverse. Global banks — HSBC, Deutsche Bank, Société Générale, Barclays, ABN AMRO — used Formosa bonds for AT1 and Tier 2 capital issuance. SSA issuers including ADB and IADB also participated. Issuance spreads were often favorable for issuers, supported by overwhelming demand from Taiwanese life insurers.

At its peak, Formosa bonds grew to account for 20–30% of Taiwanese life insurer dollar assets.`,
      },
      {
        heading: "2018년 이후: 규제 변화와 콜 스킵 충격",
        headingEn: "Post-2018: Regulatory Changes and the No-Call Wave",
        body:
`두 가지 충격이 2018년 이후 포모사본드 시장을 뒤흔들었다.

첫 번째는 대만 금융감독원(FSC) 규제 강화다. 2018년 FSC는 생명보험사의 포모사본드 투자 한도를 제한했다. 수십조 원 규모의 수요 엔진이 갑자기 제한됐다. 신규 발행 수요가 급감했다.

두 번째는 콜 스킵(Call Skip) 파동이었다. ECB의 NIRP 정책으로 유럽 금리가 마이너스 영역에 진입하면서, 콜 시점에 새로 발행하면 기존 쿠폰보다 낮은 금리로 발행 가능한 경우가 생겼다. 이론적으로 콜하지 않아도 됐다.

2019년 2월 산탄데르의 AT1 콜 스킵이 결정타였다. 6.25% 쿠폰이 약 5.4%로 리셋될 것으로 예상되자, 산탄데르는 콜을 포기하고 연장했다. 당연히 콜하겠지라는 시장 관행이 무너지는 순간이었다.

포모사본드 투자자들도 직격탄을 맞았다. 5~10년 후 콜될 것으로 예상하고 매수한 30년 만기 채권이 그대로 연장됐다. Extension risk가 현실화됐다. 2차시장 유동성도 급격히 악화됐다.`,
        bodyEn:
`Two shocks rocked the Formosa bond market after 2018.

The first was tightened FSC regulation. In 2018, Taiwan's Financial Supervisory Commission capped life insurer Formosa bond investment limits. The demand engine driving tens of billions in issuance was suddenly constrained. New issuance demand collapsed.

The second was a no-call wave. With the ECB's NIRP pushing European rates into negative territory, reset rates at call dates often fell below original coupons — theoretically removing the incentive to call.

Santander's AT1 no-call in February 2019 was the coup de grâce. With the 6.25% coupon expected to reset to approximately 5.4%, Santander forewent the call and let the bond extend. The market convention that 'callables are always called' collapsed in that moment.

Formosa bond investors took a direct hit. Bonds bought with the expectation of a 5–10 year call were extended to their full 30-year tenor. Extension risk had materialized. Secondary market liquidity deteriorated sharply.`,
      },
      {
        heading: "포모사본드의 교훈: Extension Risk와 수요 집중 리스크",
        headingEn: "Formosa Bond Lessons: Extension Risk and Concentrated Demand Risk",
        body:
`포모사본드 시장은 채권 투자자들에게 두 가지 핵심 교훈을 남겼다.

첫째, **YTC vs YTW**: 투자자들은 콜 옵션이 행사될 것을 전제로 YTC(콜 기준 수익률)로 채권을 분석했다. 포모사 붐 당시 30NC5를 산 투자자 대부분은 YTM(만기 기준 수익률)이 얼마인지 제대로 따지지 않았다. 산탄데르 이후, 시장은 YTW(최악 기준 수익률 — YTC와 YTM 중 낮은 것)로 분석하는 것이 기본이 됐다.

둘째, **수요 집중 리스크**: 특정 투자자군(대만 생명보험사)의 수요가 시장을 지탱하는 구조는 취약하다. 규제 한 줄이 시장 자체를 변화시켰다. 발행사도 투자자 기반 다양성의 중요성을 체감했다.

2020년 이후 포모사본드 신규 발행은 급감했다. 글로벌 AT1·Tier 2 발행이 홍콩·싱가포르 등 다른 아시아 센터로 이동하고, 대만 생명보험사들은 포모사 대신 다른 경로를 모색하고 있다. 하나의 구조적 수요가 하나의 시장을 만들었다가 사라진 전형적 사례다.`,
        bodyEn:
`The Formosa bond market left bond investors with two core lessons.

First, **YTC vs YTW**: investors analyzed bonds on a YTC (Yield to Call) basis, assuming call options would be exercised. Most investors who bought 30NC5 Formosa bonds during the boom didn't properly consider what the YTM (Yield to Maturity) was. After Santander, analyzing on a YTW (Yield to Worst — the lower of YTC and YTM) basis became standard.

Second, **concentrated demand risk**: a market structure sustained by one investor group (Taiwanese life insurers) is fragile. A single regulatory change transformed the market itself. Issuers also experienced firsthand the importance of investor base diversification.

After 2020, new Formosa bond issuance plummeted. Global AT1 and Tier 2 issuance migrated to other Asian centers like Hong Kong and Singapore, while Taiwanese life insurers sought alternative channels. A classic case of structural demand creating — and then disappearing from — a market.`,
      },
    ],
    keyTerms: [
      {
        term: "포모사본드 (Formosa Bond)",
        termEn: "Formosa Bond",
        definition: "외국 발행사가 대만 현지 시장에서 발행하는 외화(주로 USD) 채권. 대만 증권거래소 상장, 대만 생명보험사의 ALM 수요를 주된 수요 기반으로 발전. 30NC5·30NC10 구조가 대표적.",
        definitionEn: "Foreign-currency (mainly USD) bonds issued by foreign issuers in Taiwan's local market. Listed on the Taiwan Stock Exchange, developed primarily on the ALM demand of Taiwanese life insurers. 30NC5 and 30NC10 structures are representative.",
      },
      {
        term: "ALM (자산부채관리)",
        termEn: "ALM (Asset-Liability Management)",
        definition: "금융기관이 자산과 부채의 만기·금리·통화 특성을 일치시켜 금리·유동성 위험을 관리하는 기법. 대만 생명보험사는 달러 장기 부채를 달러 장기 자산으로 매칭하기 위해 포모사본드를 활용했다.",
        definitionEn: "A technique for financial institutions to manage interest rate and liquidity risk by matching the maturity, interest rate, and currency characteristics of assets and liabilities. Taiwanese life insurers used Formosa bonds to match long-dated dollar liabilities with long-dated dollar assets.",
      },
      {
        term: "30NC5 / 30NC10",
        termEn: "30NC5 / 30NC10",
        definition: "30년 만기이되 5년 후(또는 10년 후) 최초 콜 옵션이 있는 구조. 이후 매 5년마다 콜 가능. 투자자는 30년 채권을 매수하지만 5~10년 후 콜될 것으로 기대. 콜 스킵 시 최대 30년까지 연장되는 extension risk가 내재.",
        definitionEn: "A 30-year maturity bond with a first call option at year 5 (or year 10), callable every 5 years thereafter. Investors buy 30-year bonds but expect a call in 5–10 years. If the call is skipped, extension risk can extend holding to the full 30-year maturity.",
      },
      {
        term: "YTW (최악 기준 수익률)",
        termEn: "YTW (Yield to Worst)",
        definition: "콜 가능 채권에서 YTC(콜 기준 수익률)와 YTM(만기 기준 수익률) 중 더 낮은 수익률. 투자자 관점에서 최악의 경우 실현될 수익률. 산탄데르 콜 스킵 이후 포모사본드 및 AT1 분석의 기본 지표로 자리잡았다.",
        definitionEn: "For callable bonds, the lower of YTC (Yield to Call) and YTM (Yield to Maturity). The yield that will be realized in the worst case from the investor's perspective. After Santander's no-call, it became the baseline metric for Formosa bond and AT1 analysis.",
      },
    ],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    relatedDealSlugs: ["santander-at1-no-call", "deutsche-bank-coco-shock"],
    executiveSummary: {
      ko: [
        "포모사본드 = 외국 발행사가 대만에서 발행하는 USD 채권 — 대만 생명보험사의 ALM 수요(달러 장기 자산 부족)가 만들어낸 시장",
        "30NC5·30NC10 구조: 30년 만기이지만 5~10년 후 콜을 전제로 YTC 기준으로 거래 — 시장은 사실상 단기처럼 가격 책정",
        "2013~2018년 $150B+ 누적 발행 붐 — HSBC·Deutsche·SocGen 등 글로벌 은행 AT1/Tier 2 조달의 핵심 채널",
        "2018년 대만 FSC 규제 강화 + 2019년 산탄데르 콜 스킵 → extension risk 현실화, 시장 급냉각",
        "교훈: YTC만 보고 YTW를 무시하면 안 된다 / 단일 수요층 집중 시장의 취약성",
      ],
      en: [
        "Formosa bonds = USD bonds issued by foreign issuers in Taiwan — a market created by Taiwanese life insurer ALM demand (shortage of long-dated dollar assets)",
        "30NC5/30NC10 structure: 30-year maturity but priced assuming a 5–10 year call on YTC basis — market effectively treating them as short-dated instruments",
        "$150B+ cumulative issuance boom 2013–2018 — key channel for global bank AT1/Tier 2 capital from HSBC, Deutsche, SocGen, and others",
        "2018 Taiwan FSC regulatory tightening + 2019 Santander no-call → extension risk materialized, market rapidly cooled",
        "Lessons: YTC analysis without YTW is dangerous; vulnerability of markets dependent on a single investor base",
      ],
    },
    assessment: {
      positives: [
        "대만 생명보험사 ALM 문제 효율적 해결 — 달러 장기 자산 공급 부족을 포모사 구조로 해결, 투자 적격 장기 달러채 공급 창출",
        "글로벌 은행 자본 다각화 — 홍콩·싱가포르 외 대만 투자자 기반 접근, 발행 비용 절감 및 수요 분산",
        "아시아 달러 채권 시장 다양성 기여 — 단일 센터 의존을 낮추고 아시아 달러 채권 생태계를 풍부하게",
        "포모사 구조가 AT1·Tier 2 시장 발전을 앞당김 — 대만 투자자들이 FIG 자본채 시장의 글로벌 확산을 지원",
      ],
      positivesEn: [
        "Efficient resolution of Taiwanese insurer ALM problem — Formosa structure addressed dollar long-dated asset shortage, creating supply of investment-grade long-dated dollar bonds",
        "Global bank capital diversification — access to Taiwanese investor base beyond Hong Kong/Singapore, with issuance cost savings and demand spread",
        "Contribution to Asian dollar bond market diversity — reduced single-center dependence and enriched the Asian dollar bond ecosystem",
        "Formosa accelerated AT1/Tier 2 market development — Taiwanese investors supported global expansion of FIG capital markets",
      ],
      risks: [
        "Extension risk 내재화 — 30NC5를 5년 채권처럼 가격 책정하는 관행이 콜 스킵 시 막대한 손실로 귀결",
        "단일 수요층 집중 리스크 — 대만 생명보험사 규제 변경 하나로 시장 전체가 냉각되는 구조적 취약성",
        "2차시장 유동성 부재 — 대만 생명보험사가 매수 후 보유하는 경향이 강해 2차시장 거래 극히 제한적",
        "환율 리스크 관리 복잡성 — 달러 자산이지만 대만 규제하에 있어 FX 헤지 전략 복잡화",
      ],
      risksEn: [
        "Embedded extension risk — pricing 30NC5 bonds as 5-year instruments led to massive losses when calls were skipped",
        "Single investor base concentration risk — structural vulnerability where one regulatory change to Taiwanese insurer rules cooled the entire market",
        "Secondary market illiquidity — strong buy-and-hold tendency among Taiwanese insurers made secondary market trading extremely limited",
        "FX risk management complexity — dollar assets under Taiwanese regulation complicated hedging strategies",
      ],
    },
    faq: [
      {
        q: "포모사본드는 일반 달러채권과 어떻게 다른가요?",
        qEn: "How do Formosa bonds differ from ordinary dollar bonds?",
        a: "발행 장소와 규제 틀이 다릅니다. 일반 달러채는 뉴욕·런던 등 주요 금융 센터에서 발행되고 글로벌 투자자에게 판매됩니다. 포모사본드는 대만 현지 법령에 따라 발행되고 대만 증권거래소에 상장되며, 주로 대만 생명보험사가 매수합니다. 대만 생명보험사 입장에서는 외화 한도를 소진하지 않아도 되는 점이 큰 장점이었습니다.",
        aEn: "They differ in issuance venue and regulatory framework. Regular dollar bonds are issued in major financial centers (New York, London) and sold to global investors. Formosa bonds are issued under Taiwanese local regulations, listed on the Taiwan Stock Exchange, and primarily purchased by Taiwanese life insurers. A key advantage for Taiwanese insurers was that Formosa bonds didn't consume their foreign investment quotas.",
      },
      {
        q: "30NC5 구조에서 발행사가 콜을 안 하면 어떻게 되나요?",
        qEn: "What happens if the issuer doesn't call on a 30NC5 structure?",
        a: "채권은 콜 행사 없이 원래 30년 만기로 연장됩니다. 쿠폰은 발행 당시 약정된 리셋 공식(예: LIBOR/SOFR + 스프레드)에 따라 조정됩니다. 대부분의 경우 리셋된 쿠폰이 원래 쿠폰보다 낮아지기 때문에 — 즉 발행사에게 유리해지기 때문에 — 콜을 건너뜁니다. 투자자는 예상보다 25년을 더 기다려야 하는 상황이 됩니다.",
        aEn: "The bond extends to its full 30-year maturity without the call being exercised. The coupon is adjusted according to the pre-agreed reset formula (e.g., LIBOR/SOFR + spread). In most no-call cases, the reset coupon falls below the original coupon — meaning it becomes economically favorable for the issuer not to call. The investor faces waiting an additional 25 years beyond expectations.",
      },
      {
        q: "대만 FSC 규제 변경이 왜 그렇게 큰 영향을 미쳤나요?",
        qEn: "Why did Taiwan FSC regulatory changes have such a large impact?",
        a: "포모사본드 시장의 수요 기반이 대만 생명보험사 2~3개 그룹에 극도로 집중되어 있었기 때문입니다. 카타이생명, 푸본생명 등 대형 생명보험사들이 신규 발행의 70~80%를 흡수했습니다. 이 수요가 규제로 제한되자 신규 발행 수요가 갑자기 사라졌습니다. 특정 투자자 기반에 의존하는 시장의 구조적 취약성을 잘 보여주는 사례입니다.",
        aEn: "Because the Formosa bond market's demand base was extremely concentrated in 2–3 groups of Taiwanese life insurers. Major firms like Cathay Life and Fubon Life absorbed 70–80% of new issuance. When this demand was capped by regulation, new issuance demand vanished overnight. It clearly illustrates the structural vulnerability of markets that depend on a specific investor base.",
      },
      {
        q: "산탄데르 콜 스킵이 포모사본드 시장에 미친 영향은?",
        qEn: "What impact did Santander's no-call have on the Formosa bond market?",
        a: "콜 스킵 이전, 포모사본드 투자자 대부분은 콜이 반드시 행사될 것으로 믿고 YTC 기준으로만 채권을 분석했습니다. 산탄데르 사건 이후, 시장에서 콜 스킵 가능성을 진지하게 재평가하기 시작했습니다. YTW(최악 기준 수익률) 분석이 필수적 기준으로 자리잡았고, 콜 스킵을 고려한 리스크 프리미엄이 가산되면서 발행사의 포모사 발행 비용이 상승했습니다.",
        aEn: "Before the no-call, most Formosa bond investors believed calls would always be exercised and analyzed bonds exclusively on YTC. After Santander, the market began seriously reassessing no-call risk. YTW (Yield to Worst) analysis became mandatory, and the added risk premium for potential no-calls raised Formosa issuance costs for issuers.",
      },
      {
        q: "포모사본드 시장은 앞으로도 존재할까요?",
        qEn: "Will the Formosa bond market continue to exist?",
        a: "시장 자체는 사라지지 않겠지만, 전성기로 돌아가기 어렵습니다. 대만 FSC 규제 제한, 콜 스킵 경험으로 인한 투자자 신중도 증가, 글로벌 AT1/Tier 2 발행의 다른 아시아 센터 이동이 맞물려 있습니다. 다만 대만 생명보험사의 ALM 수요는 구조적으로 지속되므로, 규제 완화나 시장 환경 변화에 따라 일부 부활 가능성은 열려 있습니다.",
        aEn: "The market itself won't disappear, but returning to its heyday seems difficult. Taiwan FSC regulatory caps, increased investor caution from no-call experiences, and the migration of global AT1/Tier 2 issuance to other Asian centers are all working against it. However, the structural ALM demand of Taiwanese life insurers persists, leaving open the possibility of a partial revival with regulatory easing or market condition changes.",
      },
    ],
    references: [
      { id: 1, author: "Taiwanese FSC", title: "Rules Governing the Use of Foreign Currency by Insurance Enterprises", source: "Financial Supervisory Commission, Taiwan", year: "2018", url: "https://www.fsc.gov.tw/en/" },
      { id: 2, author: "Fitch Ratings", title: "Formosa Bonds: Investor Guide to Taiwan's Foreign Currency Bond Market", source: "Fitch Ratings", year: "2019", url: "https://www.fitchratings.com" },
      { id: 3, author: "BIS", title: "Credit Risk Transfer and Finance in Asia-Pacific", source: "BIS Working Papers", year: "2020", url: "https://www.bis.org" },
      { id: 4, author: "ICMA", title: "AT1/Tier 2 Capital Instruments — Market Practice and Documentation", source: "ICMA", year: "2020", url: "https://www.icmagroup.org" },
    ],
  },

  {
    slug: "panda-samurai-geopolitics",
    title: "판다본드·사무라이본드의 지정학",
    titleEn: "Panda & Samurai Bonds — The Geopolitics of Currency",
    category: "structure",
    categoryLabel: "구조·통화",
    categoryLabelEn: "Structure & Currency",
    excerpt: "외국 발행사가 위안·엔으로 발행하는 시장이 정치·통화정책에 따라 열리고 닫히는 이야기.",
    excerptEn: "How political and monetary forces open and close foreign-currency bond markets for overseas issuers.",
    dealYear: 2005,
    issuer: "다수 발행사",
    issuerEn: "Multiple Issuers",
    readingMinutes: 10,
    tags: ["판다본드", "사무라이본드", "중국", "일본", "지정학"],
    tagsEn: ["Panda Bond", "Samurai Bond", "China", "Japan", "Geopolitics"],
    published: true,
    snapshot: [
      { labelKo: "시장 1", labelEn: "Market 1", value: "판다본드 (CNY, 중국 역내)", valueEn: "Panda bonds (CNY, onshore China)" },
      { labelKo: "시장 2", labelEn: "Market 2", value: "사무라이본드 (JPY, 일본)", valueEn: "Samurai bonds (JPY, Japan)" },
    ],
    sections: [
      {
        heading: "두 시장의 기원: 사무라이와 판다",
        headingEn: "Origins of Two Markets: Samurai and Panda",
        body:
`외국 발행사가 현지 통화로 현지 시장에서 발행하는 채권은 독특한 명칭을 가진다. 일본에서 발행하는 엔화 채권은 사무라이본드, 중국에서 발행하는 위안화 채권은 판다본드다.

**사무라이본드**: 역사는 1970년으로 거슬러 올라간다. 아시아개발은행(ADB)이 최초로 발행하며 시장이 시작됐다. 이후 세계은행·KfW·독일 연방, 그리고 글로벌 대형 은행들이 일본 투자자에게 JPY 채권을 판매하기 위해 이 시장을 활용했다. 일본의 저금리(ZIRP/NIRP) 환경이 엔화 조달 비용을 극적으로 낮추면서 2010년대 이후 사무라이 발행이 급증했다.

**판다본드**: 중국 본토(역내) 시장에서 외국 발행사가 CNY(인민폐)로 발행하는 채권이다. 2005년 10월, 국제금융공사(IFC)와 ADB가 동시에 최초 판다본드를 발행했다 — 중국 자본시장 개방의 상징적 첫 걸음. 이후 중국이 자본시장을 점진적으로 개방하면서 발행사와 규모가 함께 늘었다.

두 시장은 같은 구조(외국 발행사 + 현지 통화)를 공유하지만, 경제적 동기·지정학적 맥락·투자자 기반이 완전히 다르다.`,
        bodyEn:
`Bonds issued by foreign issuers in local currency in local markets carry unique names. Yen bonds issued in Japan are Samurai bonds; yuan bonds issued in China are Panda bonds.

**Samurai bonds**: the history goes back to 1970, when the Asian Development Bank (ADB) made the first issuance. The World Bank, KfW, Germany, and global major banks subsequently used this market to sell JPY bonds to Japanese investors. Japan's low-rate environment (ZIRP/NIRP) dramatically lowered yen funding costs, and Samurai issuance surged after 2010.

**Panda bonds**: bonds issued by foreign issuers in CNY (renminbi) in China's onshore market. In October 2005, the International Finance Corporation (IFC) and ADB simultaneously issued the first Panda bonds — a symbolic first step in China's capital market opening. As China gradually opened its capital markets, both issuer count and issuance volume grew.

The two markets share the same structure (foreign issuer + local currency), but differ entirely in economic motivation, geopolitical context, and investor base.`,
      },
      {
        heading: "사무라이본드: 일본 저금리와 엔화 조달의 경제학",
        headingEn: "Samurai Bonds: Japan's Low Rates and the Economics of Yen Funding",
        body:
`발행사가 사무라이본드를 발행하는 이유는 경제적이다. JPY 금리가 0% 근방이거나 마이너스인 환경에서, 엔화 조달 비용이 달러나 유로 조달보다 훨씬 낮을 수 있다.

**크로스커런시 스왑(Cross-Currency Swap)**: 발행사는 JPY 조달 후 이를 달러/유로로 교환한다. 금리 차이(USD-JPY 스프레드)와 크로스커런시 베이시스에 따라 달러로 직접 발행하는 것보다 올인코스트(all-in cost)가 낮을 수 있다.

2016~2021년 일본 마이너스 금리 시기에 이 효과가 극대화됐다. 세계은행·IADB 등 SSA 발행사들이 사무라이 시장을 적극 활용했다. 한국 KDB(산업은행), 중국국가개발은행(CDB)도 사무라이 발행을 통해 저비용 자금을 조달했다.

투자자 측면에서, 일본 생명보험사·연기금은 국내 채권 수익률이 너무 낮아 외국 발행사 채권이라도 수익률을 조금 더 받고 싶었다. 사무라이본드는 JPY로 표시되어 환 리스크 없이 소폭 상위 수익률을 제공했다.`,
        bodyEn:
`Issuers access the Samurai market for economic reasons. In a near-zero or negative JPY rate environment, yen funding costs can be dramatically lower than dollar or euro funding.

**Cross-currency swap**: issuers raise JPY then exchange it into dollars or euros. Depending on the USD-JPY interest rate differential and cross-currency basis, the all-in cost may be lower than direct dollar issuance.

This effect was maximized during Japan's negative rate period (2016–2021). SSA issuers like the World Bank and IADB actively used the Samurai market. Korea Development Bank (KDB) and China Development Bank (CDB) also accessed the Samurai market for low-cost funding.

On the investor side, Japanese life insurers and pension funds were starved for yield by ultra-low domestic bond rates. Samurai bonds, denominated in JPY (no currency risk), provided slightly higher yields than domestic government bonds.`,
      },
      {
        heading: "판다본드: 중국 자본시장 개방과 위안화 국제화",
        headingEn: "Panda Bonds: China's Capital Market Opening and RMB Internationalization",
        body:
`판다본드 시장은 중국의 두 가지 정책 목표를 반영한다. 첫째, 자본시장 개방(외국 발행사 유치). 둘째, 위안화 국제화(RMB 국제결제·투자 확대).

2005년 IFC·ADB 최초 발행 후, 시장은 제한적이었다. 2010년대 중반 들어 중국 정부가 Bond Connect(채권통)·RQFII 등 개방 정책을 확대하면서 판다본드 발행이 급증했다.

2016~2019년 붐 시기에는 헝가리·한국·영국·캐나다 정부(sovereign panda)와 세계은행·아프리카개발은행(AfDB), 독일 자동차 기업(다임러), 글로벌 은행 등이 발행했다. 다임러는 2018년 최초의 독일 기업 판다본드를 발행했다.

발행사 입장에서의 장점: ① 중국 내 사업 자금 조달(현지화 매칭), ② 중국 투자자 관계 다양화, ③ CNY 조달 비용이 크로스커런시 스왑을 통해 경쟁력 있을 때.

단, 절차가 복잡하다. PBOC(중국인민은행) 또는 NAFMII(중국 장외파생상품시장) 등록, 중국 신용등급사 평가, 자금 사용처 규정 등을 준수해야 한다.`,
        bodyEn:
`The Panda bond market reflects two Chinese policy objectives: first, capital market opening (attracting foreign issuers); second, RMB internationalization (expanding yuan use in global settlement and investment).

After IFC and ADB's inaugural issuance in 2005, the market remained limited. As China expanded opening policies like Bond Connect and RQFII in the mid-2010s, Panda issuance surged.

During the 2016–2019 boom, sovereigns (Hungary, South Korea, the UK, Canada), multilaterals (World Bank, African Development Bank), German corporates (Daimler), and global banks all issued. Daimler issued the first German corporate Panda bond in 2018.

Advantages for issuers: ① funding China operations in local currency (natural hedging), ② diversifying Chinese investor relationships, ③ competitive CNY funding costs when cross-currency swap economics are favorable.

However, procedures are complex: PBOC or NAFMII registration, Chinese credit rating agency assessment, and compliance with use-of-proceeds rules are all required.`,
      },
      {
        heading: "지정학: 미중 갈등이 시장을 바꾸다",
        headingEn: "Geopolitics: US-China Tensions Reshaping the Markets",
        body:
`판다본드 시장은 경제 논리만큼이나 지정학 논리에 의해 움직인다.

2018년 미-중 무역전쟁 이후, 미국·유럽 기업과 은행들은 대중(對中) 노출 확대에 신중해졌다. 일부 서구 금융기관은 OFAC 제재 리스크와 평판 리스크를 이유로 신규 판다본드 발행을 줄였다.

그 공백을 '벨트앤로드 이니셔티브(BRI)' 참여국들이 채웠다. 카자흐스탄·파키스탄·헝가리·폴란드 등이 판다본드를 적극 발행했다. 이들에게 판다본드는 중국 투자자에게 접근하고, 중국과의 경제 관계를 강화하는 수단이었다.

2022년 러시아의 우크라이나 침공 이후 가장 극적인 변화가 나타났다. 달러 결제 시스템에서 배제된 러시아 국영기업들이 판다본드를 통해 CNY를 조달하기 시작했다. 중국-러시아 탈달러화(de-dollarization) 내러티브의 일환이다.

사무라이 시장은 지정학보다는 금리 정책이 더 큰 영향을 미친다. 2024년 일본은행(BOJ)이 마이너스 금리를 종료하면서 JPY 금리가 오르기 시작했다. 크로스커런시 스왑 경제성이 변하면서 사무라이 발행 비용 우위가 축소될 수 있다.`,
        bodyEn:
`The Panda bond market is shaped as much by geopolitical as economic logic.

After the 2018 U.S.-China trade war, Western companies and banks grew cautious about expanding China exposure. Some Western financial institutions reduced new Panda issuance citing OFAC sanctions risk and reputational concerns.

'Belt and Road Initiative (BRI)' countries filled the void. Kazakhstan, Pakistan, Hungary, Poland, and others became active Panda issuers. For them, Panda bonds were a tool to access Chinese investors and strengthen economic ties with China.

The most dramatic shift came after Russia's 2022 invasion of Ukraine. Russian SOEs, cut off from dollar settlement systems, began raising CNY through Panda bonds — part of the China-Russia de-dollarization narrative.

The Samurai market is shaped more by interest rate policy than geopolitics. When the Bank of Japan (BOJ) ended negative rates in 2024, JPY interest rates began rising. Changing cross-currency swap economics may erode the Samurai market's cost advantage.`,
      },
      {
        heading: "두 시장의 미래: 정상화와 국제화",
        headingEn: "The Future of Both Markets: Normalization and Internationalization",
        body:
`사무라이본드 시장: 일본 금리 정상화가 진행될수록 JPY 조달 비용 우위가 줄어든다. 2024년 BOJ 금리 인상 이후 사무라이 시장의 발행 경제성이 약화됐다. 그러나 일본 투자자들의 외국 발행사 채권 수요는 구조적으로 존재한다 — 국내 금리가 올라도 다변화 수요는 지속된다.

판다본드 시장: 중국은 위안화 국제화를 장기 정책으로 추진하고 있다. 판다본드는 그 핵심 채널 중 하나다. 단기적으로는 미중 관계 불확실성이 서구 발행사들의 신규 진입을 제한하지만, BRI 국가·개발도상국 발행사들의 판다본드 접근은 계속 늘 것으로 전망된다.

두 시장 모두 공통적인 메시지를 준다: 채권시장에서 통화 패권은 고정되지 않는다. JPY·CNY 모두 특정 시기·특정 발행사에게 달러 대안이 될 수 있다. 발행사들은 정기적으로 다중 통화 조달(multi-currency funding) 전략을 검토해야 하며, 지정학 시대에 이 선택지 자체가 전략 자산이 됐다.`,
        bodyEn:
`**Samurai bond market**: as Japan's rate normalization progresses, the JPY funding cost advantage narrows. Following the BOJ's 2024 rate hike, Samurai market issuance economics have weakened. However, Japanese investors' structural demand for foreign issuer bonds persists — even as domestic rates rise, diversification demand continues.

**Panda bond market**: China is pursuing RMB internationalization as a long-term policy, with Panda bonds as a key channel. Short-term, U.S.-China relationship uncertainty limits new Western issuer entry, but BRI countries and emerging market issuers are expected to continue expanding Panda bond access.

Both markets share a common message: currency hegemony in bond markets is not fixed. JPY and CNY can both serve as dollar alternatives for certain issuers at certain times. Issuers should regularly review multi-currency funding strategies, and in an era of geopolitics, having these options has itself become a strategic asset.`,
      },
    ],
    keyTerms: [
      {
        term: "사무라이본드 (Samurai Bond)",
        termEn: "Samurai Bond",
        definition: "외국 발행사가 일본 국내 시장에서 일본 엔(JPY)으로 발행하는 채권. 1970년 ADB 최초 발행. 일본의 저금리 환경 하에서 크로스커런시 스왑을 통해 달러/유로보다 낮은 올인코스트 조달이 가능할 때 활용된다.",
        definitionEn: "Bonds issued by foreign issuers in Japan's domestic market, denominated in Japanese yen (JPY). First issued by ADB in 1970. Used when cross-currency swap economics make all-in cost lower than dollar/euro issuance under Japan's low-rate environment.",
      },
      {
        term: "판다본드 (Panda Bond)",
        termEn: "Panda Bond",
        definition: "외국 발행사가 중국 역내(본토) 시장에서 인민폐(CNY/RMB)로 발행하는 채권. 2005년 IFC·ADB 최초 발행. 중국 자본시장 개방 및 위안화 국제화 정책의 핵심 채널.",
        definitionEn: "Bonds issued by foreign issuers in China's onshore (mainland) market, denominated in renminbi (CNY/RMB). First issued by IFC and ADB in 2005. A key channel for China's capital market opening and RMB internationalization policies.",
      },
      {
        term: "크로스커런시 스왑 (Cross-Currency Swap)",
        termEn: "Cross-Currency Swap",
        definition: "두 통화 간 원금과 이자를 교환하는 파생상품. 엔화 발행사가 JPY 원금을 받고 USD 원금을 지급하며, 금리 차이와 기준 스프레드(베이시스)에 따라 경제성이 결정된다. 사무라이·판다 발행사들이 현지 통화 조달을 자국 통화로 전환하는 핵심 수단.",
        definitionEn: "A derivative instrument exchanging principal and interest between two currencies. Yen-funded issuers receive JPY principal and pay USD principal, with economics determined by interest rate differentials and basis spreads. The key mechanism for Samurai and Panda bond issuers to convert local currency proceeds into their home currency.",
      },
      {
        term: "위안화 국제화 (RMB Internationalization)",
        termEn: "RMB Internationalization",
        definition: "중국 위안화(CNY/RMB)를 무역결제·외환보유고·국제금융 거래에서 더 많이 사용하게 하려는 중국 정부의 장기 정책. 판다본드·딤섬본드·CIPS(위안화 결제 시스템) 등이 주요 채널. 탈달러화(de-dollarization) 맥락에서 지정학적 중요성이 커지고 있다.",
        definitionEn: "China's long-term policy goal of expanding CNY use in trade settlement, foreign exchange reserves, and international financial transactions. Key channels include Panda bonds, Dim Sum bonds, and CIPS (Cross-border Interbank Payment System). Growing geopolitical significance in the context of de-dollarization.",
      },
    ],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    relatedDealSlugs: ["eu-ngeu-bonds", "saudi-aramco-debut"],
    executiveSummary: {
      ko: [
        "사무라이본드(JPY, 1970 ADB 첫 발행)와 판다본드(CNY, 2005 IFC/ADB 첫 발행) — 외국 발행사가 현지 통화로 발행하는 두 대표 시장",
        "사무라이 발행 동기: 일본 저금리·ZIRP/NIRP 환경에서 크로스커런시 스왑을 통해 달러보다 낮은 올인코스트 조달 가능",
        "판다 발행 동기: 중국 내 사업 현지화 자금 + 위안화 국제화 정책의 채널 + 중국 투자자 관계 다양화",
        "지정학 영향: 미중 갈등 → 서구 발행사 신중론 / 러시아·BRI 국가 판다 활용 → 탈달러화 내러티브",
        "미래: 일본 금리 정상화로 사무라이 경제성 약화 vs 중국 위안화 국제화로 판다본드 지속 성장",
      ],
      en: [
        "Samurai bonds (JPY, first issued 1970 by ADB) and Panda bonds (CNY, first issued 2005 by IFC/ADB) — the two representative markets where foreign issuers borrow in local currencies",
        "Samurai motivation: cross-currency swap in Japan's ZIRP/NIRP environment can achieve lower all-in costs than direct dollar issuance",
        "Panda motivation: local currency funding for China operations + channel for RMB internationalization policy + diversifying Chinese investor relationships",
        "Geopolitical impact: US-China tensions → Western issuer caution / Russia and BRI countries using Panda bonds → de-dollarization narrative",
        "Future: Japan rate normalization weakening Samurai economics vs China's RMB internationalization driving continued Panda bond growth",
      ],
    },
    assessment: {
      positives: [
        "조달 통화 다양화 — 달러·유로 단일 의존 탈피, 시장 환경에 따라 최저비용 통화 선택 가능",
        "현지 투자자 기반 확보 — 일본·중국 기관투자자에게 직접 접근, 장기적 투자자 관계 다양화",
        "판다본드의 자연 헤지 — 중국 내 사업 수익(CNY)으로 CNY 부채 상환, 환 리스크 자연 소멸",
        "위안화 국제화 기여 — 판다본드 발행이 CNY 유동성·시장 깊이 증가에 기여, 중국 자본시장 발전",
      ],
      positivesEn: [
        "Funding currency diversification — breaking single dollar/euro dependence; selecting lowest-cost currency based on market conditions",
        "Local investor base access — direct access to Japanese and Chinese institutional investors; long-term investor relationship diversification",
        "Panda bonds' natural hedge — CNY revenues from China operations repay CNY debt; currency risk naturally offset",
        "RMB internationalization contribution — Panda issuance increases CNY liquidity and market depth, contributing to China's capital market development",
      ],
      risks: [
        "환 리스크 — 자국 통화가 아닌 JPY/CNY 발행 후 스왑 실패 또는 베이시스 악화 시 비용 급등",
        "지정학 규제 리스크 — 제재·규정 변경이 갑자기 시장을 닫을 수 있음, 판다의 중국 규제 복잡성",
        "일본 금리 정상화 — BOJ 금리 인상으로 사무라이 발행의 크로스커런시 경제성이 급변할 위험",
        "판다본드 투자자 구성의 제한 — 중국 내 투자자 기반이 글로벌 대비 좁고 2차시장 유동성 제한",
      ],
      risksEn: [
        "Currency risk — if swaps fail or basis worsens after issuing in non-home-currency JPY/CNY, costs can spike",
        "Geopolitical regulatory risk — sanctions or rule changes can abruptly close markets; Panda bond Chinese regulatory complexity",
        "Japan rate normalization — BOJ rate hikes can sharply change the cross-currency economics of Samurai issuance",
        "Limited Panda investor base — Chinese investor universe is narrower than global markets and secondary market liquidity is constrained",
      ],
    },
    faq: [
      {
        q: "사무라이본드와 유로엔 채권의 차이는 무엇인가요?",
        qEn: "What is the difference between Samurai bonds and Euroyen bonds?",
        a: "발행 장소와 규제 틀이 다릅니다. 사무라이본드는 일본 국내 시장에서 일본 법령에 따라 발행되어 일본 투자자에게 판매됩니다. 유로엔(Euroyen) 채권은 일본 역외(offshore) 시장에서 발행되는 JPY 채권으로, 주로 런던 등 유로마켓에서 이루어집니다. 사무라이는 일본 FSA 규정을 따르고, 유로엔은 주로 영국법 등 역외 법령을 따릅니다.",
        aEn: "They differ in issuance venue and regulatory framework. Samurai bonds are issued in Japan's domestic market under Japanese regulations and sold to Japanese investors. Euroyen bonds are JPY-denominated bonds issued in offshore markets, primarily in London's Euromarket. Samurai bonds follow Japan FSA rules; Euroyen bonds typically follow offshore regulations such as English law.",
      },
      {
        q: "판다본드 발행 절차는 어떻게 되나요?",
        qEn: "What is the process for issuing Panda bonds?",
        a: "크게 세 단계입니다. 첫째, 감독기관 승인: PBOC(중국인민은행) 또는 NAFMII(중국 장외파생상품협회) 또는 CSRC(증권감독위원회) 중 해당 기관에 등록·승인 신청. 둘째, 신용등급 획득: 중국 국내 신용등급사(중합신용평가·펑위안·다공 등)의 평가 필요. 셋째, 발행 및 결제: 중국 채권 결제 시스템(CCDC 또는 SHCH)을 통해 결제. 일반적으로 일반 유로채 발행보다 절차가 훨씬 복잡하고 시간이 오래 걸립니다.",
        aEn: "There are three main steps. First, regulatory approval: apply for registration and approval from PBOC, NAFMII, or CSRC depending on the type. Second, obtaining a credit rating: assessment from a Chinese domestic credit rating agency (Zhongcheng, Pengyuan, Dagong, etc.) is required. Third, issuance and settlement: settlement through China's bond settlement systems (CCDC or SHCH). The process is significantly more complex and time-consuming than typical Eurobond issuance.",
      },
      {
        q: "일본 금리 인상이 사무라이본드 시장에 어떤 영향을 미치나요?",
        qEn: "What impact does Japanese rate hikes have on the Samurai bond market?",
        a: "사무라이본드의 발행 경제성이 약화됩니다. 일본 금리가 올라가면 JPY 조달 비용이 높아지고, 크로스커런시 스왑으로 달러/유로로 교환 시 전체 올인코스트가 달러 직접 발행과 비슷해지거나 오히려 비싸질 수 있습니다. 2024년 BOJ 금리 인상 이후 사무라이 발행 수요가 실제로 감소했습니다. 단, 일본 투자자들의 다양화 수요는 여전히 있어 완전히 사라지지는 않을 것입니다.",
        aEn: "The economics of Samurai bond issuance weaken. As Japanese rates rise, JPY borrowing costs increase, potentially making the all-in cost after cross-currency swap comparable to or more expensive than direct dollar issuance. Following the BOJ's 2024 rate hike, Samurai issuance demand has indeed declined. However, Japanese investors' diversification demand persists, so the market won't disappear entirely.",
      },
      {
        q: "왜 러시아는 서방 제재 이후 판다본드를 발행하나요?",
        qEn: "Why is Russia issuing Panda bonds after Western sanctions?",
        a: "러시아는 2022년 우크라이나 침공 이후 달러·유로 국제 결제 시스템(SWIFT 등)에서 부분적으로 배제됐습니다. 로스네프트·가즈프롬 등 러시아 국영기업들은 달러 채권 발행이 사실상 불가능해졌습니다. 판다본드를 통한 CNY 조달은 달러 결제 시스템을 우회하는 대안입니다. 또한 중-러 무역이 위안화 결제로 빠르게 이동하면서 CNY 조달이 실제 거래 결제에도 유용해졌습니다.",
        aEn: "Russia was partially excluded from dollar and euro international settlement systems (SWIFT etc.) after the 2022 Ukraine invasion. Russian SOEs like Rosneft and Gazprom have effectively lost access to dollar bond markets. CNY funding via Panda bonds provides an alternative that bypasses the dollar settlement system. Additionally, as China-Russia trade rapidly shifted to yuan settlement, CNY funding became useful for actual transaction settlement.",
      },
      {
        q: "일반 투자자가 사무라이본드나 판다본드에 투자할 수 있나요?",
        qEn: "Can individual investors invest in Samurai or Panda bonds?",
        a: "접근성에 제약이 있습니다. 사무라이본드는 일본 증권사를 통해 일본 국내 투자자가 매수할 수 있지만, 글로벌 기관투자자가 주를 이룹니다. 판다본드는 중국 역내 투자자용으로 CCDC·SHCH 계좌가 필요하며, 외국 투자자는 Bond Connect 또는 QFII/RQFII를 통해 일부 접근 가능합니다. 두 시장 모두 기관 투자자 중심이며, 개인 투자자의 직접 접근은 매우 제한적입니다.",
        aEn: "Access is constrained. Samurai bonds can be purchased by Japanese domestic investors through Japanese securities firms, but institutional investors dominate. Panda bonds are for onshore Chinese investors requiring CCDC or SHCH accounts; foreign investors can access some through Bond Connect or QFII/RQFII. Both markets are primarily institutional, with very limited direct access for individual investors.",
      },
    ],
    references: [
      { id: 1, author: "Asian Development Bank", title: "The Samurai Bond Market in Japan", source: "ADB Working Paper", year: "2022", url: "https://www.adb.org/publications/asian-bonds-online" },
      { id: 2, author: "People's Bank of China", title: "Guidelines for Panda Bond Issuance by Overseas Institutions in China", source: "PBOC Circular", year: "2018", url: "https://www.pbc.gov.cn" },
      { id: 3, author: "BIS", title: "Offshore Local Currency Bond Markets", source: "BIS Quarterly Review", year: "2021", url: "https://www.bis.org/publ/qtrpdf/r_qt2103b.htm" },
      { id: 4, author: "Swift Institute", title: "RMB Internationalisation: Achievements and Prospects", source: "Swift Institute Working Paper", year: "2022", url: "https://www.swiftinstitute.org" },
    ],
  },

  // ── E: SOE·기업 ──────────────────────────────────────────────────────────────
  {
    slug: "saudi-aramco-debut",
    title: "사우디 아람코 첫 국제채 (2019) — 사상 최대 오더북",
    titleEn: "Saudi Aramco Debut Bond (2019) — The Largest Orderbook Ever",
    category: "corporate",
    categoryLabel: "SOE·기업",
    categoryLabelEn: "SOE & Corporate",
    excerpt: "$1000억 이상의 오더북. SOE 발행의 정점. 발행 직전 처음 공개된 아람코의 실체.",
    excerptEn: "Over $100 billion in orders. The apex of SOE issuance. Aramco's financials revealed publicly for the first time.",
    dealYear: 2019,
    issuer: "Saudi Arabian Oil Company (Aramco)",
    issuerEn: "Saudi Arabian Oil Company (Aramco)",
    readingMinutes: 13,
    tags: ["SOE", "사우디", "Aramco", "회사채", "오더북"],
    tagsEn: ["SOE", "Saudi Arabia", "Aramco", "Corporate Bond", "Orderbook"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Saudi Aramco" },
      { labelKo: "발행연도", labelEn: "Year", value: "2019" },
      { labelKo: "발행규모", labelEn: "Size", value: "$12B (5 tranches)" },
      { labelKo: "오더북", labelEn: "Orderbook", value: "$100B+" },
      { labelKo: "등급", labelEn: "Rating", value: "A1/A+ (Moody's/S&P)" },
    ],
    sections: [
      {
        heading: "아람코의 비밀: 채권 발행 전까지 세계가 몰랐던 것들",
        headingEn: "Aramco's Secret: What the World Didn't Know Before the Bond",
        body:
`2019년 이전, 사우디 아람코는 세계에서 가장 불투명한 대형 기업 중 하나였다. 상장사가 아닌 국영기업으로서 재무제표를 공개할 의무가 없었다. '세계에서 가장 수익성 높은 회사'라는 말은 많았지만, 실제 숫자는 알 수 없었다.

2019년 4월, 아람코는 국제 채권시장 데뷔를 결정했다. 그러자 모든 것이 달라졌다. 신용등급을 받으려면 S&P와 Moody's에 전체 재무제표를 제공해야 했다. 최소한의 공시 요건을 충족하기 위해 투자설명서(Offering Memorandum)에 역대 처음으로 재무 현황이 공개됐다.

공개된 숫자들은 충격적이었다. 2018년 순이익 $1,111억 — 애플($595억)의 거의 두 배였다. 269억 배럴의 확인 매장량. 일일 원유 생산량 1,030만 배럴. EBITDA 기준으로는 글로벌 상위 10개 기업의 합산과 비슷한 규모였다.

등급은 A1(Moody's)/A+(S&P) — 사우디 국채와 동일한 수준이었다. 이 자체로도 이미 주목받을 딜이었다.`,
        bodyEn:
`Before 2019, Saudi Aramco was one of the world's most opaque major companies. As a non-listed state enterprise, it had no obligation to publicly disclose financial statements. The phrase 'world's most profitable company' was widely used, but the actual numbers were unknown.

In April 2019, Aramco decided to debut in international bond markets — and everything changed. To receive credit ratings, it had to provide full financial statements to S&P and Moody's. For the first time, a bare-minimum financial disclosure appeared in the Offering Memorandum.

The revealed numbers were stunning. 2018 net income of $111.1 billion — nearly twice Apple's $59.5 billion. 269 billion barrels of proven reserves. Daily crude production of 10.3 million barrels. EBITDA comparable to the combined sum of the global top 10 companies.

Rating: A1 (Moody's) / A+ (S&P) — the same as Saudi government bonds. This alone made the deal remarkable.`,
      },
      {
        heading: "$1,000억 오더북: 사상 최대의 수요",
        headingEn: "$100B+ Orderbook: Demand on a Historic Scale",
        body:
`2019년 4월 8~10일, 아람코는 뉴욕·런던·홍콩·싱가포르에서 전격 로드쇼를 진행했다. 단 사흘만에 5개 트랑쉬에 걸쳐 $120억 발행을 마무리했다 — 이 규모 딜로는 역대 가장 빠른 실행이었다.

오더북은 $1,000억을 훌쩍 넘겼다. 발행 규모($120억) 대비 약 10배. 역대 사상 최대 규모의 회사채 수요였다. 전 세계 1,000개 이상의 기관 투자자가 참여했다.

트랑쉬 구성: 3년·5년·10년·20년·30년 5개 구간. 10년물이 $30억으로 최대 규모였다. 스프레드는 이전 가이던스보다 20~30bp 타이트하게 조여들었다.

가장 주목받은 점은 가격 수준이었다. 일부 만기에서 사우디 정부 국채보다 낮은 스프레드로 발행됐다. SOE가 모국 국채보다 타이트하게 발행된 전례 없는 사례였다. 시장은 '아람코의 재무가 사우디 정부보다 더 강하다'는 신호로 읽었다.`,
        bodyEn:
`On April 8–10, 2019, Aramco executed a lightning roadshow across New York, London, Hong Kong, and Singapore — completing a $12 billion, 5-tranche issuance in just three days, the fastest execution ever for a deal of this size.

The orderbook exceeded $100 billion — roughly 10x the deal size ($12B). It was the largest corporate bond demand in history. Over 1,000 institutional investors from around the world participated.

Tranche structure: 3-year, 5-year, 10-year, 20-year, and 30-year maturities. The 10-year tranche was the largest at $3 billion. Spreads tightened 20–30bp inside initial guidance levels.

The most remarkable aspect was the pricing. Several tranches priced at spreads tighter than Saudi government bonds — an unprecedented case of an SOE issuing inside its home sovereign. Markets read it as a signal that 'Aramco's balance sheet is stronger than the Saudi government's.'`,
      },
      {
        heading: "왜 지금 채권인가: MBS와 Vision 2030의 현실",
        headingEn: "Why Bonds Now: MBS and the Reality of Vision 2030",
        body:
`아람코의 채권 발행은 단순한 자금 조달이 아니었다. 사우디 왕세자 무함마드 빈 살만(MBS)의 야심찬 프로젝트 '비전 2030'과 직결된 전략적 결정이었다.

비전 2030은 사우디 경제를 석유 의존에서 벗어나 관광·기술·금융으로 다양화한다는 계획이다. 이를 위한 자금이 필요했다. 아람코 IPO — 사상 최대 $2조 기업가치 목표 — 가 당초 계획이었다.

그러나 2018년 10월 사우디 언론인 자말 카쇼기가 이스탄불 주재 사우디 영사관에서 피살되면서 국제 분위기가 급변했다. IPO 주관사 선정을 위해 접촉하던 글로벌 투자은행들이 거리를 뒀다. 뉴욕·런던 증시 상장도 불투명해졌다.

채권 발행은 'Plan B'였다. IPO 없이 국제 자본시장에 접근하고, 사우디 정부 배당 재원을 조달하며, 아람코의 재무 투명성을 처음으로 선보이는 기회. 2019년 $120억 채권 발행은 이후 이어지는 대규모 채권 프로그램의 첫 단추였다.`,
        bodyEn:
`Aramco's bond issuance was not simply a funding exercise. It was a strategic decision directly tied to Saudi Crown Prince Mohammed bin Salman's (MBS) ambitious project — Vision 2030.

Vision 2030 aims to diversify the Saudi economy away from oil dependence toward tourism, technology, and finance. Significant capital was required. The original plan was an Aramco IPO — targeting an unprecedented $2 trillion valuation.

But in October 2018, Saudi journalist Jamal Khashoggi was murdered inside the Saudi consulate in Istanbul, suddenly chilling the international atmosphere. Global investment banks that had been engaged for IPO mandate discussions kept their distance. Listing on New York and London exchanges became uncertain.

The bond issuance was Plan B: access international capital markets without an IPO, raise funds for the Saudi government dividend, and showcase Aramco's financial transparency for the first time. The 2019 $12B bond issuance was the first step in what would become a large, ongoing bond program.`,
      },
      {
        heading: "SOE 채권의 정점: 국채보다 타이트한 스프레드",
        headingEn: "The Apex of SOE Bonds: Pricing Inside the Sovereign",
        body:
`채권시장에는 오랫동안 하나의 불문율이 있었다. 'SOE는 국채보다 비쌀 수 없다.' SOE가 아무리 우량해도, 최종 지급 보증자는 국가이므로 국채보다 낮은 수익률(타이트한 스프레드)로 발행할 수 없다는 논리였다.

아람코 2019년 딜은 이 불문율에 도전했다. 10년물 기준 아람코는 사우디 국채보다 좁은 스프레드로 발행됐다. 이유는 명확했다. 아람코는 달러 수익을 창출하는 기업이다. 사우디 정부는 아람코 배당에 의존하는 구조다. 즉, 투자자 입장에서 실제 신용은 사우디 정부보다 아람코가 더 견고하다는 인식이 있었다.

이 딜은 이후 걸프 지역 SOE 채권 발행의 벤치마크가 됐다. UAE 아부다비국영석유공사(ADNOC), 쿠웨이트 쿠웨이트석유공사(KPC) 등도 이를 참고해 국제 채권시장에 접근했다.

더 나아가, 이 딜은 '오일머니'가 국제 자본시장에 얼마나 깊숙이 통합됐는지를 보여줬다. ESG 우려가 있음에도 불구하고, $1,000억 이상의 수요는 석유 회사 채권에 대한 투자자들의 실질적 태도가 명확함을 보여줬다.`,
        bodyEn:
`For a long time, bond markets held one unwritten rule: 'SOEs cannot be cheaper than government bonds.' No matter how strong an SOE, the logic went that the ultimate guarantor was the state, so it could never issue at tighter spreads than sovereign bonds.

Aramco's 2019 deal challenged this convention. On the 10-year tranche, Aramco issued at spreads tighter than Saudi government bonds. The reason was clear: Aramco generates dollar revenues. The Saudi government depends on Aramco dividends. From investors' perspective, Aramco's actual credit quality was perceived as more robust than the Saudi government's.

This deal became the benchmark for subsequent Gulf SOE bond issuance. ADNOC (Abu Dhabi National Oil Company), Kuwait Petroleum Corporation (KPC), and others referenced it when accessing international bond markets.

Further, the deal demonstrated how deeply 'oil money' had integrated into international capital markets. Despite ESG concerns, $100B+ in demand made clear the actual attitude of investors toward oil company bonds.`,
      },
      {
        heading: "아람코 이후: IPO, 그린본드, 지속하는 채권 프로그램",
        headingEn: "After the Bond: IPO, Green Bond, Ongoing Program",
        body:
`2019년 채권 발행 이후 아람코는 국제 자본시장에서 중요한 발행체로 자리를 잡았다.

2019년 12월, 연기됐던 아람코 IPO가 결국 실현됐다. 사우디 증권거래소(Tadawul) 단일 상장으로 $256억을 조달해 역대 최대 IPO 기록을 갈아치웠다(이전 기록: 알리바바 2014 $250억). 그러나 사우디 국내 투자자 비중이 높았고, 목표 기업가치 $2조에는 미치지 못했다.

2021년 11월, 아람코는 $60억 규모의 그린본드(Green Bond)를 발행했다. 지속가능성 재원 조달 채널을 추가하는 한편, ESG 투자자 기반에도 접근하는 전략적 행보였다.

아람코의 채권 발행 경험이 주는 교훈: 투명성(재무 공개)은 조달 비용을 낮춘다. 아람코가 처음으로 재무를 공개한 직후, 시장은 국채보다 타이트한 가격을 부여했다. '모르는 것에는 프리미엄을 요구한다'는 채권시장의 정보 비대칭 원리가 역방향으로도 작동함을 보여준 사례였다.`,
        bodyEn:
`After the 2019 bond issuance, Aramco established itself as a significant issuer in international capital markets.

In December 2019, the long-delayed Aramco IPO finally materialized. Listing solely on the Saudi Exchange (Tadawul), it raised $25.6 billion to break the all-time IPO record (previously held by Alibaba's 2014 $25 billion offering). However, domestic Saudi investors dominated, and the target $2 trillion valuation was not achieved.

In November 2021, Aramco issued a $6 billion Green Bond — adding a sustainable financing channel while accessing ESG investor bases.

The lesson from Aramco's bond experience: transparency (financial disclosure) lowers funding costs. Immediately after Aramco disclosed financials for the first time, the market awarded pricing tighter than sovereign bonds. The bond market's information asymmetry principle — 'demand a premium for the unknown' — was shown to work in both directions.`,
      },
    ],
    keyTerms: [
      {
        term: "SOE 채권 (SOE Bond)",
        termEn: "SOE Bond",
        definition: "국영기업(State-Owned Enterprise)이 발행하는 채권. 모국 정부의 암묵적·명시적 지원이 있어 일반 기업채보다 낮은 스프레드로 발행 가능. 아람코·아디노크·사우디 아람코 등 걸프 국영 석유기업들이 대표적 발행체.",
        definitionEn: "Bonds issued by State-Owned Enterprises. Implicit or explicit home-government support enables issuance at lower spreads than ordinary corporate bonds. Gulf national oil companies like Aramco, ADNOC, and others are representative issuers.",
      },
      {
        term: "오더북 (Orderbook)",
        termEn: "Orderbook",
        definition: "채권 북빌딩 과정에서 투자자들이 제출한 총 매수 주문 규모. 아람코 2019년 딜의 $1,000억+ 오더북은 역대 회사채 최대 기록. 오더북 규모는 발행사의 가격 협상력을 결정짓는 핵심 지표.",
        definitionEn: "The total volume of buy orders submitted by investors during a bond bookbuilding process. Aramco's 2019 deal's $100B+ orderbook set an all-time corporate bond record. Orderbook size is the key indicator determining an issuer's pricing negotiating power.",
      },
      {
        term: "소버린 시일링 (Sovereign Ceiling)",
        termEn: "Sovereign Ceiling",
        definition: "이론적으로 SOE의 신용등급은 모국 국가 등급을 초과할 수 없다는 원칙. 단, 아람코처럼 달러 수익 창출력이 뛰어나고 정부보다 재무가 강한 기업은 일부 만기에서 소버린보다 타이트하게 발행 가능. 사우디 아람코 딜이 이 원칙에 도전한 사례.",
        definitionEn: "The theoretical principle that an SOE's credit rating cannot exceed its home country's sovereign rating. However, companies like Aramco with exceptional dollar revenue generation and stronger balance sheets than the government can issue tighter than the sovereign on some maturities — Aramco's 2019 deal was a case that challenged this principle.",
      },
      {
        term: "비전 2030 (Vision 2030)",
        termEn: "Vision 2030",
        definition: "사우디아라비아 왕세자 MBS가 주도하는 석유 의존 탈피·경제 다양화 국가 전략. 관광·기술·엔터테인먼트·금융으로의 전환을 목표로 하며, 막대한 투자 자금이 필요하다. 아람코 채권·IPO 수익이 이 계획의 주요 자금원.",
        definitionEn: "A national economic diversification strategy led by Saudi Crown Prince MBS, aimed at reducing oil dependence and expanding into tourism, technology, entertainment, and finance. It requires enormous investment capital; Aramco bond and IPO proceeds are a primary funding source for this plan.",
      },
    ],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    relatedDealSlugs: ["verizon-megadeal", "apple-bond-strategy"],
    executiveSummary: {
      ko: [
        "2019년 4월 아람코 첫 국제채 $120억(5개 트랑쉬) — 역사상 최초 전면 재무 공개: 2018 순이익 $1,111억, 매장량 269억 배럴",
        "오더북 $1,000억+ (역대 회사채 최대) — 단 3일 로드쇼, 10배 오버구독, 일부 만기에서 사우디 국채보다 타이트하게 발행",
        "발행 배경: 카쇼기 피살 사건으로 IPO 지연 → 채권이 'Plan B', Vision 2030 재원 조달의 첫 국제 자본시장 접근",
        "SOE 채권의 정점: 국채 소버린 시일링을 넘는 가격 — 아람코 재무가 사우디 정부보다 강하다는 시장 인식",
        "이후 $60억 그린본드(2021), $256억 IPO(2019 12월, 역대 최대) — 국제 자본시장 상시 발행체로 정착",
      ],
      en: [
        "April 2019: Aramco's debut $12B bond (5 tranches) — first-ever full financial disclosure: 2018 net income $111.1B, reserves 269B barrels",
        "$100B+ orderbook (all-time corporate bond record) — 3-day roadshow, 10x oversubscription, several tranches priced tighter than Saudi government bonds",
        "Background: Khashoggi murder delayed IPO → bonds became Plan B; first international capital market access for Vision 2030 funding",
        "Apex of SOE bonds: priced inside the sovereign ceiling — market perceived Aramco's balance sheet as stronger than the Saudi government's",
        "Followed by $6B green bond (2021), $25.6B IPO (Dec 2019, all-time record) — established as a regular international capital market issuer",
      ],
    },
    assessment: {
      positives: [
        "재무 투명성 → 조달 비용 절감 — 최초 공개 직후 국채보다 타이트한 가격 달성, 투명성의 가격 보상 입증",
        "역사적 오더북 — $1,000억+ 수요는 규모 경제 달성, 스프레드 협상력 극대화, 발행사에게 완전한 주도권",
        "SOE 발행 모델 정립 — 이후 걸프 지역 SOE 채권 발행의 표준 케이스북으로 활용",
        "국제 투자자 기반 확보 — 1,000개+ 투자자 관계 구축, 향후 반복 발행의 기반 마련",
      ],
      positivesEn: [
        "Financial transparency → lower funding cost — achieving pricing tighter than sovereign immediately after first disclosure proved the price reward for transparency",
        "Historic orderbook — $100B+ demand achieved scale economics, maximized spread negotiating power, and gave issuers complete control",
        "SOE issuance model established — became the standard casebook for subsequent Gulf SOE bond issuance",
        "International investor base built — 1,000+ investor relationships created, laying groundwork for future repeat issuance",
      ],
      risks: [
        "카쇼기 사건 등 지정학 리스크 — ESG·SRI 투자자 제외, 일부 주관사·투자자 평판 리스크 우려로 참여 제한",
        "유가 변동성 — 수익성의 절대적 의존도가 유가에 있어 유가 급락 시 신용 프로파일 급변 가능",
        "사우디 정부 의존 구조 — 아람코 배당을 통한 사우디 재정 의존 → 정부 재정 수요가 아람코 재무에 영향",
        "ESG 시대의 화석연료 투자 논란 — 탈탄소화 흐름에서 석유 회사 채권 보유에 대한 기관 투자자 내부 압박",
      ],
      risksEn: [
        "Geopolitical risk (Khashoggi case) — excluded ESG/SRI investors; some bookrunners and investors limited participation over reputational risk concerns",
        "Oil price volatility — absolute profitability dependence on oil prices means credit profile can change sharply with price crashes",
        "Saudi government dependency structure — Saudi fiscal dependence on Aramco dividends means government spending needs affect Aramco's finances",
        "Fossil fuel investment controversy in ESG era — institutional investor internal pressure on holding oil company bonds in a decarbonization trend",
      ],
    },
    faq: [
      {
        q: "아람코가 왜 사우디 정부 국채보다 타이트한 스프레드로 발행될 수 있었나요?",
        qEn: "How was Aramco able to issue at tighter spreads than Saudi government bonds?",
        a: "세 가지 이유가 있습니다. 첫째, 달러 수익 창출: 아람코는 오일 달러 수입으로 달러 부채를 직접 상환 가능. 사우디 정부는 아람코 배당을 통해 간접적으로만 달러를 얻습니다. 둘째, 재무 견고성: 아람코의 레버리지는 매우 낮고 EBITDA 규모는 사우디 GDP와 비견될 수준. 셋째, 운영 독립성: 아람코는 사우디 국내 정치에서 상대적으로 독립적인 운영 역량을 보유합니다.",
        aEn: "Three reasons: First, dollar revenue generation — Aramco can directly repay dollar debt with petroleum dollar revenues. The Saudi government only indirectly receives dollars through Aramco dividends. Second, financial strength — Aramco's leverage is extremely low and its EBITDA is comparable to Saudi GDP. Third, operational independence — Aramco maintains operating capabilities relatively independent of Saudi domestic politics.",
      },
      {
        q: "아람코 재무 공개가 왜 그렇게 놀라웠나요?",
        qEn: "Why was Aramco's financial disclosure so surprising?",
        a: "아람코는 수십 년 동안 상장 기업이 아니었고 공개 재무제표 의무가 없었습니다. 세계에서 가장 수익성 높은 기업이라는 사실은 알려져 있었지만, 정확한 수치는 미스터리였습니다. 2018년 순이익 $1,111억이 공개되자, 이는 동년 애플($595억)의 약 두 배, 아마존의 약 10배였습니다. 매장량 269억 배럴은 세계 전체 확인 매장량의 약 17%에 해당합니다.",
        aEn: "Aramco had been a non-listed company for decades with no public financial disclosure obligation. Its status as the world's most profitable company was known, but the exact numbers were a mystery. When 2018 net income of $111.1 billion was revealed, it was roughly twice Apple's ($59.5B) and about 10x Amazon's in the same year. The 269 billion barrels of proven reserves represents approximately 17% of the world's total proven reserves.",
      },
      {
        q: "$1,000억 오더북은 어떻게 구성됐나요?",
        qEn: "How was the $100B+ orderbook composed?",
        a: "1,000개 이상의 기관 투자자가 참여했습니다. 지역별로는 아시아·중동·유럽·미국 투자자들이 고루 참여했습니다. 유형별로는 자산운용사·생명보험사·연기금·국부펀드(SWF)·은행 등이 포함됩니다. 특히 중동 국부펀드들의 대규모 참여가 두드러졌습니다. 역설적으로 서방 ESG 투자자들 일부는 참여하지 않았음에도 오더북은 역대 최대를 기록했습니다.",
        aEn: "Over 1,000 institutional investors participated. By geography, Asian, Middle Eastern, European, and American investors were all represented. By type: asset managers, life insurers, pension funds, sovereign wealth funds (SWFs), and banks were all included. Middle Eastern SWF participation was particularly notable at large size. Paradoxically, even with some Western ESG investors choosing not to participate, the orderbook was still the largest in history.",
      },
      {
        q: "아람코 채권 발행은 IPO와 어떤 관계인가요?",
        qEn: "What is the relationship between Aramco's bond issuance and the IPO?",
        a: "채권 발행은 원래 계획이 아니었습니다. 아람코는 2017~2018년에 뉴욕 증권거래소 또는 런던 증권거래소 상장을 통해 $2조 기업 가치의 IPO를 목표로 했습니다. 2018년 카쇼기 사건으로 국제 투자은행들이 뒤로 빠지고 해외 상장 계획이 불확실해지면서, 2019년 채권 발행이 우선 진행됐습니다. 2019년 12월 IPO는 결국 사우디 증권거래소(Tadawul)에서만 이루어졌고 해외 상장은 포기됐습니다.",
        aEn: "Bond issuance was not the original plan. Aramco had been targeting a $2 trillion IPO on the NYSE or LSE in 2017–2018. When the 2018 Khashoggi incident caused international investment banks to step back and foreign listing plans became uncertain, the 2019 bond issuance proceeded first. The December 2019 IPO was ultimately conducted only on the Saudi Exchange (Tadawul), with overseas listing abandoned.",
      },
      {
        q: "아람코 그린본드($60억, 2021)는 왜 발행됐나요?",
        qEn: "Why did Aramco issue a $6B green bond in 2021?",
        a: "두 가지 전략적 목적이 있었습니다. 첫째, ESG 투자자 기반 접근: 2019년 채권에서 일부 ESG 투자자들이 참여를 꺼렸는데, 그린본드 프레임워크를 통해 환경 자금 조달로 분류하면 이들을 포함할 수 있습니다. 둘째, 아람코의 탈탄소화 내러티브 구축: 재생에너지 투자·탄소 포집 등에 자금을 배정함으로써 '오일 기업도 에너지 전환에 투자한다'는 메시지 전달. 논란은 있었지만 $60억 모두 청약 마감됐습니다.",
        aEn: "Two strategic purposes: first, accessing ESG investor bases — some ESG investors had been reluctant to participate in 2019; by classifying funding as environmental through a green bond framework, these investors could be included. Second, building Aramco's decarbonization narrative — allocating proceeds to renewable energy, carbon capture, etc. delivered the message 'even an oil company invests in the energy transition.' Despite controversy, the $6B was fully subscribed.",
      },
    ],
    references: [
      { id: 1, author: "Saudi Aramco", title: "Preliminary Offering Memorandum — Senior Unsecured Notes", source: "Saudi Arabian Oil Company", year: "2019", url: "https://www.saudiaramco.com/en/investors" },
      { id: 2, author: "Moody's Investors Service", title: "Saudi Arabian Oil Company (Aramco): Rating Action", source: "Moody's", year: "2019", url: "https://www.moodys.com" },
      { id: 3, author: "Bloomberg", title: "Aramco's Record $100 Billion Book Sends Message to Bond Markets", source: "Bloomberg Markets", year: "2019", url: "https://www.bloomberg.com" },
      { id: 4, author: "Financial Times", title: "Saudi Aramco $12bn Bond Priced Tighter than Saudi Government", source: "Financial Times", year: "2019", url: "https://www.ft.com" },
    ],
  },

  {
    slug: "verizon-megadeal",
    title: "Verizon $490억 회사채 (2013) — 당시 사상 최대",
    titleEn: "Verizon $49B Bond (2013) — Then the Largest Corporate Ever",
    category: "corporate",
    categoryLabel: "SOE·기업",
    categoryLabelEn: "SOE & Corporate",
    excerpt: "M&A 자금조달이 어떻게 역사적 메가딜로 이어지는지. 대규모 북빌딩의 표본.",
    excerptEn: "How M&A financing turns into a historic megadeal. The definitive example of large-scale bookbuilding.",
    dealYear: 2013,
    issuer: "Verizon Communications",
    issuerEn: "Verizon Communications",
    readingMinutes: 11,
    tags: ["M&A금융", "회사채", "메가딜", "Verizon", "북빌딩"],
    tagsEn: ["M&A Finance", "Corporate Bond", "Megadeal", "Verizon", "Bookbuilding"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Verizon Communications" },
      { labelKo: "발행연도", labelEn: "Year", value: "2013" },
      { labelKo: "발행규모", labelEn: "Size", value: "$49B" },
      { labelKo: "목적", labelEn: "Purpose", value: "Vodafone 지분 인수 자금", valueEn: "Vodafone stake acquisition financing" },
    ],
    sections: [
      {
        heading: "왜 $490억이 필요했나: 보다폰 지분 인수",
        headingEn: "Why $49B Was Needed: Buying Out Vodafone",
        body:
`버라이즌 커뮤니케이션스(Verizon Communications)는 미국 최대 통신 사업자다. 그런데 정작 미국에서 가장 수익성 높은 무선 네트워크인 '버라이즌 와이어리스'는 Verizon Communications와 영국 보다폰(Vodafone)의 합작 회사였다. Verizon이 55%, Vodafone이 45% 지분을 보유했다.

2013년 9월 2일, Verizon은 보다폰의 45% 지분 전체를 $1,300억에 인수하기로 합의했다. 2000년대 초 이후 최대 규모의 M&A 거래였다. 이 딜로 Verizon은 버라이즌 와이어리스의 완전한 오너가 됐다.

문제는 $1,300억의 자금 조달이었다. Verizon은 이를 ① 현금 $580억, ② 주식 발행 $600억, ③ 채권 발행 $490억으로 분담해 마련했다. 당시 단일 회사채 발행으로는 역대 최대 규모인 $490억이 단 하루 만에 완성됐다.`,
        bodyEn:
`Verizon Communications is America's largest telecommunications operator. But 'Verizon Wireless,' the most profitable wireless network in the U.S., was a joint venture between Verizon Communications (55%) and Britain's Vodafone (45%).

On September 2, 2013, Verizon agreed to acquire Vodafone's full 45% stake for $130 billion — the largest M&A transaction since the early 2000s. The deal would make Verizon the full owner of Verizon Wireless.

The challenge was financing $130 billion. Verizon structured this as: ① $58B in cash, ② $60B in stock, ③ $49B in bonds. That $49 billion — then the largest single corporate bond issuance ever — was completed in just one day.`,
      },
      {
        heading: "역대 최대 회사채: $1,000억 오더북과 8개 트랑쉬",
        headingEn: "The Largest Corporate Bond: $100B+ Orderbook and 8 Tranches",
        body:
`2013년 9월 10일, Verizon은 전광석화처럼 단 하루 만에 로드쇼를 마치고 $490억 채권을 발행했다.

8개 트랑쉬 구성은 만기를 최대한 분산시켰다: 3년 변동금리·3년 고정금리·5년·7년·10년·20년·30년에 100년물(세기채, Century Bond)까지 포함됐다. 단기물에는 MMF·단기 자금 수요자가, 장기물에는 연기금·생명보험사가 각각 분리되어 매수했다.

오더북은 $1,000억을 넘어섰다. 발행액 대비 약 2배. 10만 명 이상의 개인 투자자를 포함해 수천 개 기관이 참여했다. 스프레드는 초기 가이던스보다 20~25bp 타이트하게 확정됐다.

당시 이 딜의 주관사(Bookrunner)는 JP모건·모건스탠리·뱅크오브아메리카·바클레이즈·웰스파고·씨티그룹 등 6개사가 공동으로 참여했다. $490억을 단일 주관사가 소화하기에는 너무 큰 규모였고, 배포 역량을 최대화하기 위해 대형 컨소시엄이 구성됐다.`,
        bodyEn:
`On September 10, 2013, Verizon completed a lightning one-day roadshow and issued $49 billion in bonds.

Eight tranches maximized maturity diversification: 3-year floating rate, 3-year fixed, 5-year, 7-year, 10-year, 20-year, 30-year, and even a 100-year 'Century Bond.' Short-dated tranches attracted money market funds and short-duration buyers; long-dated tranches attracted pension funds and life insurers.

The orderbook exceeded $100 billion — about twice the deal size. Thousands of institutions participated, including over 100,000 individual investors. Spreads tightened 20–25bp inside initial guidance.

The deal's bookrunners were JPMorgan, Morgan Stanley, Bank of America, Barclays, Wells Fargo, and Citigroup — six banks jointly. $49 billion was too large for any single bookrunner to distribute alone; a large consortium was necessary to maximize distribution capacity.`,
      },
      {
        heading: "메가딜 북빌딩의 논리: 규모가 수요를 만든다",
        headingEn: "The Logic of Megadeal Bookbuilding: Size Creates Demand",
        body:
`$490억 딜을 하루 만에 완성하는 것은 단순히 가격만의 문제가 아니다. 전략적 실행의 기술이다.

**적정 NIC(신규 발행 프리미엄)**: 대규모 딜은 기존 유통 시장 대비 10~30bp의 신규 발행 프리미엄(New Issue Concession, NIC)을 제공해야 투자자를 끌어들일 수 있다. Verizon 딜도 초기 가이던스를 넉넉하게 제시한 뒤 오더가 쌓이면서 조여나갔다.

**랜드마크 효과**: '역대 최대' 타이틀이 붙은 딜은 역설적으로 수요를 더 만든다. 기관 투자자들은 역사적 거래에 참여했다는 레퍼런스 가치를 원한다. '버라이즌 딜에 X억 달러 참여'가 포트폴리오 운용 레퍼런스가 된다.

**다중 트랑쉬의 수요 집계**: 8개 만기에 걸쳐 투자자를 분산시키면, 각 만기의 '전문 수요'를 모을 수 있다. 단일 만기로 $490억을 발행하면 특정 만기에 과도한 집중이 생기지만, 트랑쉬 분산으로 수요를 효율적으로 흡수한다.

**일정 압박**: 빠른 실행이 시장 변동성 노출을 최소화한다. Verizon은 M&A 발표 후 가능한 빠르게 금리 고정을 원했다.`,
        bodyEn:
`Completing a $49 billion deal in one day is not just a pricing matter. It is the art of strategic execution.

**Appropriate NIC (New Issue Concession)**: Large deals must offer a New Issue Concession of 10–30bp versus secondary market levels to attract investors. The Verizon deal set generous initial guidance, then tightened as books built.

**Landmark effect**: Paradoxically, a deal labeled 'largest ever' actually generates more demand. Institutional investors want the reference value of having participated in a historic transaction. 'Participated $X million in the Verizon deal' becomes a portfolio management reference.

**Multi-tranche demand aggregation**: Spreading investors across 8 maturities allows collecting the 'specialist demand' for each maturity. Issuing $49B in a single maturity would create excessive concentration; tranche diversification efficiently absorbs demand.

**Timing pressure**: Fast execution minimizes market volatility exposure. Verizon wanted to lock in rates as quickly as possible after the M&A announcement.`,
      },
      {
        heading: "2013년 IG 회사채 시장: 왜 이 딜이 가능했나",
        headingEn: "The 2013 IG Market: Why This Deal Was Possible",
        body:
`2013년은 투자등급(IG) 회사채 시장에 절묘한 시기였다.

2008~2009년 금융위기 이후 연준(Fed)은 제로금리(ZIRP)를 유지했다. 10년물 국채는 2~3% 수준에 머물렀고, 수익률을 원하는 기관 투자자들은 회사채로 몰렸다. IG 스프레드는 역사적으로 타이트한 수준(100bp 초반)이었다.

동시에 투자자들의 가용 현금이 풍부했다. 양적완화(QE)로 시장에 유동성이 넘쳤고, 연기금·보험사·자산운용사들은 적절한 투자처를 찾고 있었다.

이 환경에서 BBB 급의 Verizon이 $490억을 소화할 수 있는 유동성이 시장에 존재했다. 만약 2022~2023년처럼 금리가 5%를 넘고 스프레드가 200bp 이상인 환경이었다면, 같은 방식의 딜은 훨씬 높은 비용 또는 분할 발행이 필요했을 것이다.

Verizon 딜은 저금리 시대 IG 회사채 시장의 성숙을 보여주는 상징적 사례이자, M&A 자금조달의 채권 시장 활용이 정점에 달한 시점이었다.`,
        bodyEn:
`2013 was a fortuitous moment for the investment-grade (IG) corporate bond market.

After the 2008–2009 financial crisis, the Fed maintained zero interest rates (ZIRP). 10-year Treasuries hovered at 2–3%, and yield-hungry institutional investors flocked to corporate bonds. IG spreads were at historically tight levels (low 100s bp).

Simultaneously, investor available cash was abundant. QE flooded markets with liquidity, and pension funds, insurers, and asset managers were all searching for appropriate investments.

In this environment, sufficient liquidity existed in the market to absorb a BBB-rated Verizon's $49B. In a 2022–2023-style environment with rates above 5% and spreads of 200bp+, the same deal would have required significantly higher cost or multiple tranched issuances.

The Verizon deal is both a symbol of IG corporate bond market maturity in the low-rate era and the peak of bond market utilization for M&A financing.`,
      },
      {
        heading: "Verizon 이후: 메가딜 시대의 문을 열다",
        headingEn: "After Verizon: Opening the Era of Megadeals",
        body:
`$490억 딜은 그 자체로도 역사적이었지만, 이후 시장의 판도를 바꿨다.

**Apple 2013~**: Verizon 딜 한 달 뒤 Apple이 첫 채권 $170억을 발행했다(당시 역대 2위 규모). 이후 Apple은 연간 $100억 이상을 반복 발행하는 회사채 시장의 상시 발행체가 됐다.

**AT&T 2016, $220억**: M&A(DirecTV 인수) 자금조달을 위한 메가딜이 이어졌다.

**수익률 환경의 역할**: 2015~2019년 저금리 환경에서 기업들은 채권시장을 자사주매입·배당·M&A 자금조달의 핵심 채널로 활용했다. '부채의 황금 시대(Golden Age of Leverage)'라 불리는 시기였다.

Verizon 딜의 진짜 유산은 '이 규모까지 가능하다'는 심리적 상한선을 바꾼 것이다. 이전에는 $200~300억이 IG 회사채의 실질적 한계였다. 버라이즌이 $490억을 소화하면서 시장은 메가딜을 '예외'가 아닌 '가능한 선택지'로 인식하게 됐다.`,
        bodyEn:
`The $49B deal was historic in itself, but it also changed the market's landscape.

**Apple 2013~**: One month after the Verizon deal, Apple issued its first bond at $17 billion (then the second-largest ever). Apple subsequently became a regular bond market issuer with over $10 billion annually.

**AT&T 2016, $22B**: Megadeals for M&A financing (DirecTV acquisition) followed.

**The role of the yield environment**: In the 2015–2019 low-rate environment, companies used bond markets as a primary channel for buybacks, dividends, and M&A financing — a period called the 'Golden Age of Leverage.'

Verizon's true legacy was changing the psychological ceiling of 'what size is possible.' Previously, $20–30 billion was the practical limit for IG corporate bonds. By absorbing $49 billion, the market came to view megadeals not as exceptional but as 'a viable option.'`,
      },
    ],
    keyTerms: [
      {
        term: "M&A 채권 파이낸싱",
        termEn: "M&A Bond Financing",
        definition: "기업 인수·합병 자금을 회사채 발행으로 조달하는 방식. 브릿지론(단기 은행 대출)으로 딜을 먼저 클로징한 뒤 채권으로 리파이낸싱하거나, Verizon처럼 딜 발표 직후 직접 채권을 발행하는 방식이 있다. 초저금리 환경에서 기업들이 선호하는 자본구조 전략.",
        definitionEn: "Financing corporate acquisitions and mergers through bond issuance. Common approaches include closing the deal first with bridge loans (short-term bank credit) then refinancing with bonds, or directly issuing bonds immediately after announcement as Verizon did. A preferred capital structure strategy for corporates in ultra-low rate environments.",
      },
      {
        term: "북빌딩 (Bookbuilding)",
        termEn: "Bookbuilding",
        definition: "채권 발행 시 투자자들이 금리·규모 희망을 제출하는 가격 발견 과정. 주관사(Bookrunner)가 투자자 오더를 취합해 최적 발행 금리와 규모를 결정한다. 대형 딜일수록 초기 가이던스를 넉넉하게 설정해 오더를 끌어들인 뒤 타이트하게 조여나가는 전략이 일반적.",
        definitionEn: "The price discovery process in bond issuance where investors submit interest rate and size preferences. The bookrunner aggregates investor orders to determine the optimal issuance rate and size. For large deals, setting generous initial guidance to attract orders and then tightening is the standard strategy.",
      },
      {
        term: "신규 발행 프리미엄 (NIC)",
        termEn: "New Issue Concession (NIC)",
        definition: "새로 발행되는 채권이 기존 유통 시장 수준 대비 추가로 제공하는 금리 프리미엄. 투자자들이 신규 발행에 참여하는 인센티브. 딜 규모가 클수록, 발행사 신용이 낮을수록 NIC가 커지는 경향. Verizon 딜은 규모 덕분에 NIC를 20~25bp 수준에서 통제할 수 있었다.",
        definitionEn: "The additional yield premium offered on new bond issuance versus secondary market levels. It is the incentive for investors to participate in new issues. NIC tends to be larger for bigger deals and lower-quality issuers. The Verizon deal, thanks to its size-driven demand, kept NIC to 20–25bp.",
      },
      {
        term: "세기채 (Century Bond)",
        termEn: "Century Bond",
        definition: "만기가 100년인 초장기 채권. 일반적으로 대학교·국가기관·초우량 기업이 발행. Verizon 2013년 딜이 회사채로 처음 100년물을 포함시켰다. 투자자는 초장기 이자 수입을 고정하고, 발행사는 100년 동안 재파이낸싱 리스크를 제거한다는 장점이 있다.",
        definitionEn: "An ultra-long-term bond with 100-year maturity. Typically issued by universities, government entities, or top-quality corporations. Verizon's 2013 deal was among the first to include a 100-year corporate bond. Investors lock in ultra-long-term interest income; issuers eliminate refinancing risk for 100 years.",
      },
    ],
    relatedMarket101Slugs: [],
    relatedDealSlugs: ["apple-bond-strategy", "saudi-aramco-debut"],
    executiveSummary: {
      ko: [
        "2013년 9월 버라이즌 $490억 회사채 — 보다폰 45% 지분 $1,300억 M&A 자금조달 목적, 당시 역대 최대 IG 회사채",
        "단 하루 로드쇼, 8개 트랑쉬(3yr~100yr), $1,000억+ 오더북 — 발행사에 완전한 협상력, 가이던스 대비 20~25bp 타이트하게 조임",
        "성공 요인: 2013년 초저금리·QE 유동성 환경, 랜드마크 딜 참여 수요, 다중 트랑쉬로 전체 수익률 곡선 수요 흡수",
        "이후 Apple $170억(2013 10월), AT&T $220억(2016) 등 IG 메가딜 시대 개막 — '부채의 황금 시대' 진입",
        "교훈: 메가딜 성공 = 적정 NIC + 랜드마크 타이밍 + 트랑쉬 분산 + 대형 주관사 컨소시엄",
      ],
      en: [
        "September 2013 Verizon $49B bond — for the $130B M&A financing of Vodafone's 45% stake; then the largest IG corporate bond ever",
        "One-day roadshow, 8 tranches (3yr–100yr), $100B+ orderbook — complete negotiating power for issuer; priced 20–25bp inside guidance",
        "Success factors: 2013 ultra-low rate/QE liquidity environment, landmark deal participation demand, multi-tranche absorption of full yield curve demand",
        "Opened the IG megadeal era: Apple $17B (Oct 2013), AT&T $22B (2016) — entrance into the 'Golden Age of Leverage'",
        "Lesson: megadeal success = appropriate NIC + landmark timing + tranche diversification + large bookrunner consortium",
      ],
    },
    assessment: {
      positives: [
        "M&A 완전 제어 — 채권 발행으로 보다폰 지분 100% 인수, 버라이즌 와이어리스 이익 독점화 → 이후 수년간 EPS·배당 급증",
        "낮은 조달 비용 고정 — 2013년 초저금리 환경에서 장기 고정 금리 채권 발행, 이후 금리 상승 시 상대적 조달 비용 이점",
        "시장 랜드마크 효과 — '역대 최대' 타이틀이 투자자 관심 극대화, 스프레드 최소화에 기여",
        "자본구조 최적화 — 주식 희석 최소화(주식 $600억 포함 지만 채권 비중 높음), 레버리지를 통한 주주 환원 극대화",
      ],
      positivesEn: [
        "Full M&A control — bond issuance funded 100% acquisition of Vodafone stake, monopolizing Verizon Wireless profits → EPS and dividends surged in subsequent years",
        "Low-cost funding locked in — long-term fixed-rate bond issuance in 2013's ultra-low-rate environment; relative funding cost advantage as rates rose later",
        "Market landmark effect — 'largest ever' title maximized investor interest, contributing to spread minimization",
        "Capital structure optimization — minimal equity dilution (equity included but bond-weighted), maximizing shareholder returns through leverage",
      ],
      risks: [
        "레버리지 급증 — $490억 신규 채권으로 버라이즌 부채 급증, 신용등급 하락 압력, Baa1/BBB+로 낮아짐",
        "금리 리스크 — 30년·100년물 포함 장기 채권은 향후 금리 상승 시 시장 가치 하락 (단, 발행사 측면에서는 조달 비용 고정으로 유리)",
        "통신 산업 구조 변화 리스크 — 5G 설비투자·스트리밍 경쟁 심화 등 산업 변화로 현금흐름 압박 가능",
        "리파이낸싱 부담 — 향후 만기 도래 시 재조달 비용 불확실성 (금리 상승 환경에서 부담 증가)",
      ],
      risksEn: [
        "Leverage surge — $49B in new bonds sharply increased Verizon's debt load, with rating downgrade pressure (to Baa1/BBB+)",
        "Interest rate risk — long-dated 30-year and 100-year bonds face market value declines in rising rate environments (though fixed funding cost is favorable for issuer)",
        "Telecom industry structure change risk — 5G capex intensity and streaming competition could pressure cash flows",
        "Refinancing burden — future maturity refinancing cost uncertainty increases in a rising rate environment",
      ],
    },
    faq: [
      {
        q: "버라이즌은 왜 주식 발행 대신 채권을 택했나요?",
        qEn: "Why did Verizon choose bonds over equity issuance?",
        a: "2013년 저금리 환경에서 채권 조달 비용이 주식 조달 비용보다 훨씬 낮았습니다. 채권은 이자 비용이 세금 공제(tax shield)되어 세후 비용이 낮아집니다. 반면 주식 발행은 기존 주주의 EPS를 희석시킵니다. 또한 경영진은 저금리 환경이 영원하지 않음을 알았기에 가능한 한 많은 장기 고정 금리 자금을 낮은 비용에 고정시키려 했습니다.",
        aEn: "In 2013's low-rate environment, bond funding costs were far lower than equity funding costs. Bond interest is tax-deductible (tax shield), lowering after-tax costs. Equity issuance, conversely, dilutes existing shareholder EPS. Management also knew the low-rate environment wouldn't last forever — they wanted to lock in as much long-term fixed-rate funding as possible at low cost.",
      },
      {
        q: "$490억을 어떻게 하루 만에 소화했나요?",
        qEn: "How was $49 billion absorbed in just one day?",
        a: "세 가지 요소가 맞아떨어졌습니다. 첫째, 시장 환경: QE로 시장에 현금이 넘쳤고 투자자들은 회사채 수익률을 갈망했습니다. 둘째, 발행사 신용: BBB+/Baa1의 우량 IG 등급 + 버라이즌 와이어리스의 견고한 캐시플로우가 신뢰를 주었습니다. 셋째, 구조: 8개 트랑쉬로 만기를 분산해 다양한 유형의 투자자 수요를 동시에 흡수했습니다.",
        aEn: "Three factors aligned: First, market environment — QE flooded markets with cash and investors hungered for corporate bond yields. Second, issuer credit — BBB+/Baa1 high-grade rating plus Verizon Wireless's robust cash flows provided confidence. Third, structure — 8 tranches spanning maturities simultaneously absorbed different types of investor demand.",
      },
      {
        q: "100년물(세기채)에 투자하는 투자자는 누구인가요?",
        qEn: "Who invests in 100-year bonds (Century Bonds)?",
        a: "주로 초장기 부채(long-dated liabilities)를 가진 기관 투자자들입니다. 생명보험사 — 종신보험·연금 등 30~40년 이상 부채를 가진 경우 이를 매칭할 장기 자산이 필요합니다. 대학교 기부금 펀드 — 영구적 운용을 전제로 초장기 채권을 보유합니다. 일부 연기금도 장기 부채와 매칭하기 위해 보유합니다. 일반 개인 투자자나 단기 자금 운용자에게는 적합하지 않습니다.",
        aEn: "Primarily institutional investors with ultra-long-dated liabilities. Life insurers — those with whole life and annuity liabilities of 30–40+ years need matching long-dated assets. University endowment funds — operating on a perpetual basis, they hold ultra-long bonds. Some pension funds also hold them for liability matching. Not suitable for ordinary individual investors or short-duration managers.",
      },
      {
        q: "이 딜이 IG 회사채 시장에 미친 장기 영향은?",
        qEn: "What was the long-term impact of this deal on the IG corporate bond market?",
        a: "크게 두 가지 영향이 있었습니다. 첫째, 규모의 상한선 이동: '회사채로 $500억 이하는 가능하다'는 새 기준이 생겼고, 이후 Apple·AT&T 등 메가딜이 이어졌습니다. 둘째, M&A 자금조달 채널의 확립: 채권 시장이 대형 M&A의 핵심 자금조달 채널로 완전히 자리잡았습니다. 이후 M&A를 준비하는 기업들이 채권 시장 타이밍을 M&A 전략의 핵심으로 고려하게 됐습니다.",
        aEn: "Two major impacts: First, shifting the size ceiling — a new standard was set that 'up to $50B is possible for corporate bonds,' leading to subsequent megadeals from Apple, AT&T, and others. Second, establishing M&A financing channels — bond markets were fully cemented as the primary financing channel for large M&A. Companies planning M&A subsequently integrated bond market timing as a core component of M&A strategy.",
      },
      {
        q: "지금도 이런 메가딜이 가능한가요?",
        qEn: "Are such megadeals still possible today?",
        a: "가능하지만 비용이 다릅니다. 2022~2023년처럼 금리가 5%를 넘고 스프레드가 확대된 환경에서는 $490억을 소화하기 위한 NIC가 더 커야 하고 스프레드도 높아야 합니다. 조달 비용 자체가 높기 때문에 발행사 입장에서 채권 메가딜의 매력이 줄어듭니다. 2023년 이후 IG 금리가 안정되면서 M&A 채권 발행이 다시 증가하는 추세이지만, 2013~2021년의 초저금리 메가딜 시대가 재현되기는 어렵습니다.",
        aEn: "Possible, but at higher cost. In a 2022–2023-style environment with rates above 5% and widened spreads, absorbing $49B requires a larger NIC and wider spreads. Higher borrowing costs reduce the attractiveness of bond megadeals for issuers. Since 2023, stabilizing IG rates have led to a recovery in M&A bond issuance, but it is difficult to replicate the ultra-low-rate megadeal era of 2013–2021.",
      },
    ],
    references: [
      { id: 1, author: "Verizon Communications", title: "Verizon to Acquire Vodafone's 45% Indirect Interest in Verizon Wireless", source: "Verizon Press Release", year: "2013", url: "https://www.verizon.com/about/investors" },
      { id: 2, author: "Financial Times", title: "Verizon's $49bn Bond Issue Breaks Records", source: "Financial Times", year: "2013", url: "https://www.ft.com" },
      { id: 3, author: "Bloomberg", title: "Verizon's Record Bond Sale Signals Appetite for Yield", source: "Bloomberg Markets", year: "2013", url: "https://www.bloomberg.com" },
      { id: 4, author: "Morgan Stanley Research", title: "Corporate Bond Issuance and M&A Financing Trends 2013–2023", source: "Morgan Stanley", year: "2023", url: "https://www.morganstanley.com/ideas" },
    ],
  },

  {
    slug: "apple-bond-strategy",
    title: "Apple의 채권 발행 전략 (2013~) — 현금이 있는데 왜 빚을 내나",
    titleEn: "Apple's Bond Strategy (2013~) — Why Borrow When You're Sitting on Cash?",
    category: "corporate",
    categoryLabel: "SOE·기업",
    categoryLabelEn: "SOE & Corporate",
    excerpt: "현금 1000억 넘게 쌓아둔 회사가 빚을 낸다. 세금 최적화와 자사주매입 재원으로서의 발행.",
    excerptEn: "A company with $100B+ cash issues bonds. Tax optimization and buyback financing — issuance without funding need.",
    dealYear: 2013,
    issuer: "Apple Inc.",
    issuerEn: "Apple Inc.",
    readingMinutes: 10,
    tags: ["Apple", "세금최적화", "자사주매입", "회사채", "재무전략"],
    tagsEn: ["Apple", "Tax Optimization", "Buyback", "Corporate Bond", "Financial Strategy"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Apple Inc." },
      { labelKo: "첫 발행", labelEn: "First Issue", value: "2013" },
      { labelKo: "누적 발행", labelEn: "Cumulative Issuance", value: "$100B+" },
      { labelKo: "등급", labelEn: "Rating", value: "Aaa/AAA" },
      { labelKo: "목적", labelEn: "Purpose", value: "자사주매입·배당 재원 (세금 회피)", valueEn: "Buybacks & dividends (tax avoidance)" },
    ],
    sections: [
      {
        heading: "패러독스: $1,450억 현금 가진 회사가 왜 빚을 냈나",
        headingEn: "The Paradox: Why a Company Sitting on $145B Cash Took on Debt",
        body:
`2013년 4월, 애플은 전례 없는 발표를 했다. $170억 규모의 회사채를 발행한다는 것이었다. 그런데 당시 애플의 현금 보유액은 $1,450억이었다. 미국 재무부보다 현금이 많은 기업이 빚을 진다?

표면적 역설에는 논리적 이유가 있었다. 애플의 현금 대부분은 해외(아일랜드·싱가포르·네덜란드)에 있었다. 이를 미국 본토로 가져오려면 당시 35%의 법인세를 내야 했다. $1,450억의 35%는 약 $500억 — 거대한 세금 장벽이었다.

해결책은 역설적이었다. 빚을 내되, 해외 현금은 그대로 두는 것. 미국에서 채권을 발행(AAA 등급 덕분에 1~3% 저금리)하고, 그 자금으로 주주에게 배당과 자사주 매입을 돌려주는 것. 채권 이자는 미국 세금 공제 가능 — 실질 세후 비용은 더 낮아진다.

순효과: 해외 이익에 35% 세금을 낼 필요 없이, 1~2% 저비용 차입금으로 주주 환원을 실행. 이것이 애플 채권 전략의 핵심 논리였다.`,
        bodyEn:
`In April 2013, Apple made an unprecedented announcement: it would issue $17 billion in corporate bonds. But at the time, Apple held $145 billion in cash. A company with more cash than the U.S. Treasury was taking on debt?

There was a logical reason behind the apparent paradox. Most of Apple's cash was held overseas (Ireland, Singapore, Netherlands). Bringing it back to the U.S. required paying the then-35% corporate repatriation tax. 35% of $145 billion was roughly $50 billion — a massive tax wall.

The solution was paradoxical: take on debt while leaving overseas cash in place. Issue bonds in the U.S. (at 1–3% low rates thanks to AAA rating) and use those proceeds to return cash to shareholders via dividends and buybacks. Bond interest is tax-deductible in the U.S. — after-tax costs are even lower.

Net effect: no need to pay 35% tax on overseas profits; instead, fund shareholder returns with 1–2% low-cost borrowings. This was the core logic of Apple's bond strategy.`,
      },
      {
        heading: "AAA 회사채의 사상 최저 금리",
        headingEn: "AAA Corporate Bonds at All-Time Low Rates",
        body:
`2013년 4월 30일, 애플의 $170억 회사채는 6개 트랑쉬로 발행됐다.

트랑쉬 구성: 3년 변동·3년 고정·5년·10년·20년·30년. 3년물은 0.45%로 발행됐다 — 당시 투자등급 회사채로는 역사상 가장 낮은 금리였다. 10년물도 2.4% 수준에 불과했다. 30년물이 3.85%였다.

왜 이렇게 쌌나? 두 가지 이유다. 첫째, Aaa/AAA 등급 — 당시 미국 기업 중 Moody's 최고등급 Aaa를 받은 회사는 손에 꼽을 정도였다. 애플은 Microsoft와 함께 손꼽히는 최상위 등급이었다. 둘째, 2013년 QE 저금리 환경 — Fed의 제로금리 정책으로 모든 채권 금리가 역사적 저점이었다.

오더북은 $500억+. 발행 규모($170억)의 3배가 넘는 수요였다. 투자자들은 AAA 등급 애플 채권이 미국 국채보다 약간 높은 금리를 주면서도 최고 신용 안전성을 제공한다는 점에 열광했다. 이 딜은 단번에 역대 최대 IG 회사채 기록(직전: Verizon 2012 $24B)을 갈아치웠다.`,
        bodyEn:
`On April 30, 2013, Apple's $17 billion bond was issued in six tranches.

Tranche structure: 3-year floating, 3-year fixed, 5-year, 10-year, 20-year, 30-year. The 3-year tranche priced at 0.45% — the lowest rate in history for any investment-grade corporate bond at the time. The 10-year came in at just 2.4%; the 30-year at 3.85%.

Why so cheap? Two reasons: First, Aaa/AAA rating — at the time, only a handful of U.S. companies held Moody's highest Aaa rating. Apple was among the elite alongside Microsoft. Second, 2013 QE low-rate environment — the Fed's zero-rate policy pushed all bond rates to historic lows.

Orderbook: $50B+ — over 3x the deal size. Investors were enthusiastic about an AAA-rated Apple bond offering slightly higher rates than U.S. Treasuries while providing top credit safety. The deal instantly broke the then-record for the largest IG corporate bond (previously Verizon's 2012 $24B deal).`,
      },
      {
        heading: "세금 차익거래의 메커니즘",
        headingEn: "The Mechanics of Tax Arbitrage",
        body:
`애플의 채권 전략이 '세금 최적화'라고 불리는 이유를 단계별로 살펴보자.

**Step 1 — 해외 이익 적치**: 애플은 아일랜드 자회사(Apple Sales International)를 통해 비미국 판매 이익을 낮은 세율(단일 자릿수)로 축적했다.

**Step 2 — 미국 내 차입**: 해외 현금을 본국 송금하지 않고, 미국에서 채권을 발행해 달러를 조달했다. 채권 이자는 미국 법인세법상 공제 가능하므로, 실효 차입 비용은 명목 금리보다 낮아진다(당시 35% 법인세율 → 0.45% × 0.65 = 실효 0.29%).

**Step 3 — 주주 환원 실행**: 차입 자금으로 $100B+ 자사주 매입 및 배당 프로그램 집행. EPS 희석 없이 주주 가치 극대화.

**이익 비교**: 해외 이익 $1을 미국으로 송금하면 $0.35를 세금으로 내고 $0.65를 수령. 대신 채권을 발행하면 $1을 전액 활용하고 세후 이자 비용 ~0.3%만 낸다.

이 구조는 조세 전문가들에게 '이중 아일랜드 구조(Double Irish)'와 함께 2010년대 글로벌 조세 회피 논쟁의 핵심 사례가 됐다. 합법적이지만 의도적인 세금 최소화 전략이었다.`,
        bodyEn:
`Let's walk through why Apple's bond strategy is called 'tax optimization' step by step.

**Step 1 — Offshore profit accumulation**: Apple accumulated non-U.S. sales profits through its Irish subsidiary (Apple Sales International) at low single-digit tax rates.

**Step 2 — Domestic borrowing**: Instead of repatriating overseas cash, Apple issued bonds in the U.S. to raise dollars. Bond interest is deductible under U.S. corporate tax law, so effective borrowing costs are lower than nominal rates (35% corporate tax rate at the time → 0.45% × 0.65 = effective 0.29%).

**Step 3 — Shareholder return execution**: borrowed proceeds funded a $100B+ buyback and dividend program. Maximizing shareholder value without EPS dilution.

**Profit comparison**: repatriating $1 of overseas profit means paying $0.35 in tax and receiving $0.65. Issuing bonds instead lets you deploy the full $1 and pay only ~0.3% after-tax interest cost.

This structure, alongside the 'Double Irish' arrangement, became a central case study in 2010s global tax avoidance debates. Legally sound but deliberately tax-minimizing.`,
      },
      {
        heading: "2017년 세제 개혁: 전략의 진화",
        headingEn: "2017 Tax Reform: Evolution of the Strategy",
        body:
`2017년 12월, 트럼프 행정부의 세금감면 및 일자리법(TCJA)이 애플의 전략 전제를 바꿨다.

핵심 변화: 해외 유보 이익에 대한 일회성 송금세(Transition Tax) 도입. 현금성 자산은 15.5%, 비유동 자산은 8% 세율. 2018년부터 해외 이익 과세 방식이 GILTI(Global Intangible Low-Taxed Income)로 전환.

애플의 대응: 2018년 약 $2,520억 해외 현금을 미국으로 송금하고 약 $380억의 세금을 납부했다. '사상 최대 규모의 기업 세금 납부 사례 중 하나'로 꼽혔다.

그러나 채권 전략은 계속됐다. 이유는 달라졌다. ① 금리 차익보다는 자본 구조 다양화 목적, ② 회계상 해외 현금이 여전히 더 효율적으로 운용될 수 있는 구조, ③ 채권 발행 자체가 기관 투자자와의 관계 유지 채널로 기능.

2020년대에도 애플은 연 $100~200억 규모의 채권 발행을 지속했다. 목적은 단순 세금 회피에서 '일상적 자본 배분 수단'으로 성숙했다.`,
        bodyEn:
`In December 2017, Trump administration's Tax Cuts and Jobs Act (TCJA) changed the premises of Apple's strategy.

Key change: introduction of a one-time Transition Tax on accumulated offshore profits. Rate of 15.5% on liquid assets and 8% on illiquid assets. From 2018, overseas profit taxation shifted to the GILTI (Global Intangible Low-Taxed Income) framework.

Apple's response: in 2018, repatriated approximately $252 billion in overseas cash and paid approximately $38 billion in taxes — cited as 'one of the largest corporate tax payments in history.'

But the bond strategy continued. The reason changed: ① capital structure diversification rather than pure rate arbitrage, ② offshore cash still more efficiently deployed under certain accounting structures, ③ bond issuance itself functions as a relationship maintenance channel with institutional investors.

Through the 2020s, Apple continued issuing $10–20 billion annually. The purpose had matured from simple tax avoidance to 'routine capital allocation vehicle.'`,
      },
      {
        heading: "애플이 바꾼 것: 자본 배분 패러다임의 전환",
        headingEn: "What Apple Changed: A Paradigm Shift in Capital Allocation",
        body:
`애플 채권 전략의 진정한 유산은 기업 재무 사고방식을 바꾼 것이다.

**'현금이 많은 회사는 빚 안 진다'는 신화 붕괴**: 애플 이전, 순현금(Net Cash) 기업이 채권을 발행한다는 것은 낭비처럼 보였다. 애플이 이 관행을 정상화했다. 세금 효율성 + 부채의 세금 방패 효과 + 낮은 금리 = 채권이 주주에게 더 효율적이라는 논리.

**모방 확산**: Microsoft, Oracle, Google(Alphabet), Cisco, Qualcomm이 비슷한 전략을 채택했다. '해외 현금 보유 + 국내 채권 발행'은 2010년대 미국 대형 기술·제약 기업들의 표준 재무 전략이 됐다.

**자사주 매입의 규모화**: 애플은 2013~2023년 누적 $5,500억 이상의 자사주를 매입했다. 이는 주당순이익(EPS)을 극적으로 끌어올렸다. 채권 발행이 없었다면 이 규모의 자사주 매입은 불가능했다.

**비판과 반성**: '채권으로 빚지고 자사주 매입하는 것이 생산적 투자인가?'라는 비판도 있다. R&D·신사업 투자 대신 재무 공학적 수익을 추구한다는 지적. 세제 개혁 이후 이 논쟁은 지속되고 있다.`,
        bodyEn:
`Apple's bond strategy's true legacy was changing corporate financial thinking.

**Shattering the myth that 'cash-rich companies don't borrow'**: Before Apple, a net-cash company issuing bonds seemed wasteful. Apple normalized the practice. Tax efficiency + debt tax shield + low interest rates = bonds more efficient for shareholders.

**Imitation spread**: Microsoft, Oracle, Google (Alphabet), Cisco, and Qualcomm adopted similar strategies. 'Hold overseas cash + issue domestic bonds' became the standard financial strategy of large U.S. tech and pharma companies in the 2010s.

**Buyback scaling**: Apple repurchased over $550 billion in cumulative shares from 2013 to 2023. This dramatically boosted EPS. Without bond issuance, this scale of buybacks would have been impossible.

**Criticism and reflection**: 'Is borrowing to buy back shares productive investment?' is a persistent criticism — pursuing financial engineering returns instead of R&D and new business investment. Post-tax reform, this debate continues.`,
      },
    ],
    keyTerms: [
      {
        term: "역외 현금 (Offshore Cash)",
        termEn: "Offshore Cash",
        definition: "해외 자회사에 보유된 현금으로 본국 송금 시 추가 세금이 발생하는 자산. 애플은 아일랜드·싱가포르 등에 $1,450억+ 규모의 역외 현금을 보유했다. TCJA(2017) 이전 35% 송금세 장벽이 이 전략의 핵심 동인이었다.",
        definitionEn: "Cash held by overseas subsidiaries that incurs additional tax upon repatriation to the home country. Apple held $145B+ in offshore cash in Ireland, Singapore, and elsewhere. The pre-TCJA (2017) 35% repatriation tax barrier was the core driver of this strategy.",
      },
      {
        term: "세금 방패 (Tax Shield)",
        termEn: "Tax Shield",
        definition: "부채의 이자 비용이 법인세 과세 소득에서 공제됨으로써 세금을 절감하는 효과. 10억 달러 채권을 5% 이자로 발행하면 이자 $5,000만이 과세 소득에서 공제된다. 세율 21%라면 $1,050만의 세금 절감 효과 = 세금 방패. 부채 자본 구조의 핵심 장점.",
        definitionEn: "The reduction in tax liability from deducting bond interest from taxable income. If a $1B bond is issued at 5% interest, the $50M interest is deducted from taxable income. At 21% tax rate, that's $10.5M in tax savings = tax shield. A core advantage of debt capital structures.",
      },
      {
        term: "자사주 매입 (Share Buyback)",
        termEn: "Share Buyback (Share Repurchase)",
        definition: "기업이 주식시장에서 자사 주식을 매입해 소각하는 행위. 발행 주식수가 줄어 EPS(주당순이익)가 상승한다. 배당과 함께 기업이 주주에게 현금을 돌려주는 주요 수단. 애플은 2013~2023년 누적 $5,500억+ 자사주 매입을 단행해 주식수를 약 40% 감소시켰다.",
        definitionEn: "A company's purchase of its own shares from the market, then retiring them. With fewer shares outstanding, EPS rises. Along with dividends, a key vehicle for returning cash to shareholders. Apple repurchased $550B+ in cumulative shares from 2013 to 2023, reducing share count by approximately 40%.",
      },
      {
        term: "자본 배분 (Capital Allocation)",
        termEn: "Capital Allocation",
        definition: "기업이 보유 현금을 어디에 어떻게 사용할지 결정하는 전략적 의사결정 프로세스. 주요 선택지: R&D·설비 투자(CAPEX), 인수합병(M&A), 배당, 자사주 매입, 현금 보유. 애플의 채권+자사주매입 전략은 '세금 비효율적 현금보다 부채가 낫다'는 자본 배분 철학을 실현한 것.",
        definitionEn: "The strategic decision-making process of where and how a company deploys its available cash. Key options: R&D and capex, M&A, dividends, buybacks, holding cash. Apple's bond-plus-buyback strategy embodied the capital allocation philosophy that 'debt is better than tax-inefficient cash.'",
      },
    ],
    relatedMarket101Slugs: [],
    relatedDealSlugs: ["verizon-megadeal", "eu-ngeu-bonds"],
    executiveSummary: {
      ko: [
        "2013년 4월 애플 첫 회사채 $170억 — $1,450억 현금 보유에도 발행. 해외 현금 35% 송금세 회피가 핵심 동기",
        "Aaa/AAA 최고 등급 + 2013년 QE 저금리 환경 → 3년물 0.45% 역대 최저 금리, $500억+ 오더북, 당시 역대 최대 IG 회사채",
        "메커니즘: 해외 이익 역외 보유 → 미국 내 채권 발행 → 이자 세금 공제 → 자사주 매입·배당으로 주주 환원",
        "2017년 TCJA 세제 개혁: $2,520억 송금·$380억 납세 → 전략 진화(세금 최적화에서 일상적 자본 배분으로)",
        "누적 $100B+ 발행, $5,500억+ 자사주 매입 → EPS 40% 이상 증가. '현금 많은 회사도 빚 진다'는 패러다임 정립",
      ],
      en: [
        "April 2013: Apple's first bond $17B — issued despite $145B cash. Avoiding 35% overseas cash repatriation tax was the core motivation",
        "Aaa/AAA highest rating + 2013 QE low-rate environment → 3-year at 0.45% all-time low, $50B+ orderbook, then-largest IG corporate bond",
        "Mechanism: accumulate overseas profits offshore → issue U.S. domestic bonds → deduct interest taxes → use proceeds for buybacks and dividends",
        "2017 TCJA tax reform: $252B repatriation, $38B tax paid → strategy evolved (from tax optimization to routine capital allocation)",
        "Cumulative $100B+ issuance, $550B+ buybacks → EPS up 40%+. Established the paradigm that 'cash-rich companies can still borrow.'",
      ],
    },
    assessment: {
      positives: [
        "세금 효율적 자본 배분 — 35% 송금세 대신 1~3% 저비용 부채 활용, 주주 환원 극대화 (EPS 40%+ 상승)",
        "역대 최저 금리 고정 — Aaa 등급 + 2013년 저금리 환경에서 역대급 저비용으로 자금 조달",
        "자사주 매입 규모화 — $5,500억+ 자사주 매입으로 주식수 감소 → 주당 가치 극적 증가",
        "업계 패러다임 선도 — 기술·제약 업계 전반에 '해외 현금 + 국내 채권' 전략을 정상화",
      ],
      positivesEn: [
        "Tax-efficient capital allocation — using 1–3% low-cost debt instead of 35% repatriation tax; maximizing shareholder returns (EPS up 40%+)",
        "All-time low rates locked in — funded at historically low costs with Aaa rating + 2013 low-rate environment",
        "Buyback scaling — $550B+ in buybacks reduced share count → dramatic increase in per-share value",
        "Industry paradigm leadership — normalized 'offshore cash + domestic bond' strategy across tech and pharma industries",
      ],
      risks: [
        "레버리지 증가 — 순현금 기업에서 점차 레버리지가 높아지는 구조 변화, 경기 둔화 시 유연성 감소",
        "생산적 투자 vs 재무 공학 비판 — 자사주 매입이 R&D·신사업 투자를 대체한다는 비판, 장기 혁신 감소 우려",
        "세제 변화 리스크 — TCJA(2017)처럼 갑작스러운 세법 개정이 전략의 전제를 바꿀 수 있음",
        "금리 상승 시 차입 비용 증가 — 2022~2023년 고금리 환경에서 채권 발행 비용이 이전 대비 크게 상승",
      ],
      risksEn: [
        "Increasing leverage — gradual shift from net-cash company to more levered structure; reduced flexibility in economic downturns",
        "Productive investment vs. financial engineering criticism — buybacks displacing R&D and new business investment; concerns about long-term innovation reduction",
        "Tax change risk — sudden tax reforms like TCJA (2017) can change the premises of the strategy",
        "Higher borrowing costs with rate rises — bond issuance costs significantly higher in 2022–2023 high-rate environment versus historical lows",
      ],
    },
    faq: [
      {
        q: "애플이 채권을 발행하는 대신 왜 해외 현금을 그냥 가져오지 않았나요?",
        qEn: "Why didn't Apple simply repatriate its overseas cash instead of issuing bonds?",
        a: "2013년 당시 미국 세법은 해외 이익을 본국으로 가져올 때 35%의 법인세를 부과했습니다. 애플의 해외 현금은 주로 아일랜드·싱가포르에서 2~3%의 낮은 세율로 적치됐습니다. 이를 본국 송금하면 35% - 이미 낸 세율(~2%) = 약 33%포인트 추가 세금을 내야 했습니다. $1,000억 송금 시 $330억 세금 vs 채권 발행 시 이자 $20~30억(세금 공제 후). 계산이 분명했습니다.",
        aEn: "In 2013, U.S. tax law imposed a 35% corporate tax on overseas profits upon repatriation. Apple's overseas cash was primarily accumulated in Ireland and Singapore at 2–3% tax rates. Repatriation would have required paying approximately 35% - already paid rate (~2%) = an additional ~33 percentage points. For $100B repatriated: ~$33B in taxes vs bond issuance: ~$2–3B in after-tax interest. The math was clear.",
      },
      {
        q: "아이폰 팔아서 쌓인 이익이 왜 해외에 남아있나요?",
        qEn: "Why does profit from selling iPhones stay overseas?",
        a: "애플은 법인 구조를 통해 미국 외 판매에서 발생한 이익을 아일랜드 자회사(Apple Sales International 등)에서 인식하도록 설계했습니다. 아이폰이 어느 나라에서 팔리든, 지적재산권(IP) 로열티 등을 통해 이익이 아일랜드로 이동하는 구조였습니다. 이는 '이중 아일랜드(Double Irish)' 등 조세 구조의 일부로, 2015년 EU 경쟁 당국의 조사·제재 대상이 됐습니다.",
        aEn: "Apple structured its corporate architecture so that profits from non-U.S. sales were recognized by Irish subsidiaries (Apple Sales International, etc.). Regardless of where iPhones were sold, profits moved to Ireland through intellectual property royalties and similar mechanisms. This was part of the 'Double Irish' and related tax structures, which became subject to EU competition authority investigation and penalties in 2015.",
      },
      {
        q: "2017년 세제 개혁 이후에도 애플이 채권을 발행하는 이유는?",
        qEn: "Why does Apple continue issuing bonds even after the 2017 tax reform?",
        a: "세제 개혁으로 주된 세금 차익 동기는 줄었지만, 채권 발행은 그 자체로 유용한 자본 배분 수단이 됐습니다. ①자본구조 다양화: 주식보다 낮은 비용으로 자금 조달 가능. ②EPS 관리: 주식 발행 대신 채권으로 자금 조달 시 EPS 희석 없음. ③투자자 관계: 수천 개 기관 투자자와 지속적 관계 유지. ④금리 관리: 특정 만기 금리 고정으로 이자 비용 예측 가능성 확보.",
        aEn: "The primary tax arbitrage motivation diminished with tax reform, but bond issuance became a useful capital allocation tool in its own right: ① capital structure diversification — cheaper cost than equity; ② EPS management — no dilution from bond vs equity financing; ③ investor relations — ongoing relationships with thousands of institutional investors; ④ interest rate management — locking in fixed rates for predictable interest cost forecasting.",
      },
      {
        q: "자사주 매입 규모가 왜 그렇게 큰가요 — $5,500억+?",
        qEn: "Why is the buyback scale so large — $550B+?",
        a: "2012년 당시 CEO 팀 쿡 취임 이후 대규모 주주 환원 프로그램이 시작됐습니다. 이유: ①현금 창출력: 애플은 연 $1,000억 이상의 영업 현금흐름을 창출합니다. ②투자 기회 제한: 이 현금을 모두 신규 투자에 쓸 만한 기회가 없습니다. ③주주 요구: 행동주의 투자자 칼 아이칸 등이 주주 환원을 강하게 촉구했습니다. ④EPS 효과: $5,500억 자사주 매입으로 주식수가 약 40% 감소해 EPS가 크게 상승, 주가 상승으로 이어졌습니다.",
        aEn: "Large-scale shareholder return programs began under CEO Tim Cook after 2012: ① cash generation — Apple generates $100B+ in annual operating cash flow; ② limited investment opportunities — there aren't enough new investment opportunities for all this cash; ③ shareholder demands — activist investors including Carl Icahn strongly pressured for shareholder returns; ④ EPS effect — $550B+ in buybacks reduced share count by ~40%, dramatically boosting EPS and driving stock price appreciation.",
      },
      {
        q: "다른 기업들도 같은 전략을 썼나요?",
        qEn: "Did other companies use the same strategy?",
        a: "네, 폭넓게 퍼졌습니다. 마이크로소프트·오라클·시스코·퀄컴 등 해외 현금을 대규모로 보유한 미국 기술 기업들이 유사 전략을 채택했습니다. 제약 업계(화이자·머크)도 마찬가지였습니다. 2010년대 미국 S&P 500 기업들의 총 해외 유보 현금은 약 $2.5조로 추산됐습니다. 이 돈이 국내로 돌아오지 않는 동안, 기업들은 채권 발행으로 주주 환원을 지속했습니다. TCJA(2017)가 이 트렌드를 부분적으로 해소했습니다.",
        aEn: "Yes, widely. U.S. tech companies holding large overseas cash pools — Microsoft, Oracle, Cisco, Qualcomm — adopted similar strategies. Pharmaceutical companies (Pfizer, Merck) did too. In the 2010s, total overseas cash held by S&P 500 companies was estimated at ~$2.5 trillion. While this money stayed overseas, companies continued shareholder returns through bond issuance. TCJA (2017) partially resolved this trend.",
      },
    ],
    references: [
      { id: 1, author: "Apple Inc.", title: "Apple Inc. Offering Memorandum — Senior Notes 2013", source: "Apple Investor Relations", year: "2013", url: "https://investor.apple.com" },
      { id: 2, author: "U.S. Senate Permanent Subcommittee on Investigations", title: "Offshore Profit Shifting and the U.S. Tax Code — Apple Inc.", source: "U.S. Senate", year: "2013", url: "https://www.hsgac.senate.gov/subcommittees/investigations/hearings/offshore-profit-shifting-and-the-us-tax-code_apple" },
      { id: 3, author: "Zucman, G.", title: "The Hidden Wealth of Nations: The Scourge of Tax Havens", source: "University of Chicago Press", year: "2015", url: "https://press.uchicago.edu/ucp/books/book/chicago/H/bo20159032.html" },
      { id: 4, author: "Financial Times", title: "Apple's Bond Strategy: The Tax Optimisation Machine", source: "Financial Times", year: "2013", url: "https://www.ft.com" },
    ],
  },

  // ── F: 위기·디폴트 ────────────────────────────────────────────────────────────
  {
    slug: "argentina-vs-elliott",
    title: "아르헨티나 vs 엘리엇 — 군함을 압류한 헤지펀드 (2001~2016)",
    titleEn: "Argentina vs Elliott — The Hedge Fund That Seized a Warship (2001–2016)",
    category: "crisis",
    categoryLabel: "위기·디폴트",
    categoryLabelEn: "Crisis & Default",
    excerpt: "pari passu·holdout·CAC의 기원. 엘리엇이 아르헨티나 군함을 가나에서 압류한 전설.",
    excerptEn: "The origin of pari passu, holdout creditors, and CAC reform. Elliott seized an Argentine warship in Ghana.",
    dealYear: 2001,
    issuer: "Republic of Argentina",
    issuerEn: "Republic of Argentina",
    readingMinutes: 15,
    tags: ["Sovereign", "디폴트", "Holdout", "CAC", "pari-passu", "아르헨티나"],
    tagsEn: ["Sovereign", "Default", "Holdout", "CAC", "pari passu", "Argentina"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Republic of Argentina" },
      { labelKo: "디폴트 연도", labelEn: "Default Year", value: "2001년 12월", valueEn: "December 2001" },
      { labelKo: "디폴트 규모", labelEn: "Default Size", value: "$1,000억+ (당시 역사상 최대)", valueEn: "$100B+ (largest ever at the time)" },
      { labelKo: "채권교환 참여율", labelEn: "Exchange Participation", value: "93% (2005+2010)" },
      { labelKo: "합의·해결", labelEn: "Resolution", value: "2016년 $46억 지급", valueEn: "$4.6B settlement in 2016" },
      { labelKo: "엘리엇 수익률", labelEn: "Elliott Return", value: "~1,500%" },
    ],
    executiveSummary: {
      ko: [
        "2001년 아르헨티나는 $1,000억+ 역사상 최대 sovereign 디폴트를 선언했다.",
        "엘리엇 매니지먼트는 채권을 11~20센트에 매입 후 pari passu 조항을 무기로 미국 법원에서 완승했다.",
        "2012년 NML Capital은 가나에서 아르헨티나 해군 훈련함을 실제로 압류하며 세계를 경악시켰다.",
        "2016년 마크리 정부가 $46억 지급으로 15년 분쟁 종결 — 엘리엇 수익률 약 1,500%.",
        "이 사건은 sovereign 채권에 CAC(집합행동조항) 표준화를 촉발시킨 역사적 전환점이 됐다.",
      ],
      en: [
        "In 2001, Argentina declared a $100B+ sovereign default — the largest in history at the time.",
        "Elliott Management bought bonds at 11–20 cents, then used the pari passu clause to win a complete victory in U.S. courts.",
        "In 2012, NML Capital actually seized an Argentine naval training vessel in Ghana, stunning the world.",
        "In 2016, President Macri's government paid $4.6B to end the 15-year dispute — Elliott's return: ~1,500%.",
        "This case became a historic turning point that triggered CAC standardization in sovereign bond markets.",
      ],
    },
    sections: [
      {
        heading: "2001년 디폴트 — 역사상 최대 sovereign 붕괴",
        headingEn: "The 2001 Default — The Largest Sovereign Collapse in History",
        body: "2001년 12월 23일, 아르헨티나 경제장관이 TV 앞에 서서 한 문장을 읽었다: '아르헨티나는 더 이상 채무를 이행할 수 없습니다.' 당시 $1,000억(2024년 가치 약 $1,700억)에 달하는 sovereign 채무 — 역사상 최대 규모의 국가 디폴트가 공식화됐다.\n\n1990년대 아르헨티나는 카렌시보드(1달러=1페소 고정)를 유지하며 국제 자본시장에서 대거 달러 채권을 발행했다. 달러 부채를 자국 통화 세수로 갚는 구조는 페소화 절하 압력이 누적되는 순간 붕괴할 수밖에 없었다. 1999년 브라질 헤알화 폭락 이후 아르헨티나 경쟁력이 급락했고, IMF 구제금융도 위기를 막지 못했다.\n\n디폴트와 동시에 페소화는 1:1에서 4:1로 폭락했다. 달러 채권을 보유한 외국인 채권자들은 하루아침에 원금의 75% 이상이 사라졌다. $660억의 채권이 폐지가 됐고, 전 세계 채권시장에 충격이 퍼졌다.",
        bodyEn: "On December 23, 2001, Argentina's Economy Minister appeared on national television and read a single sentence: 'Argentina can no longer service its debt.' The $100B+ in sovereign obligations — the largest sovereign default in history at the time — was formally announced.\n\nThroughout the 1990s, Argentina maintained a currency board (1 peso = 1 dollar) and issued dollar-denominated bonds heavily in international capital markets. A structure where dollar debt is repaid with peso tax revenues was always destined to collapse under devaluation pressure. After Brazil's real collapsed in 1999, Argentina's competitiveness plummeted and even IMF bailouts couldn't stop the crisis.\n\nSimultaneously with the default, the peso crashed from 1:1 against the dollar to 4:1. Foreign creditors holding dollar bonds suddenly found over 75% of their principal gone overnight. $66B in bonds became worthless paper, and the shock rippled through global bond markets.",
      },
      {
        heading: "채권교환과 holdout — 93%의 합의, 7%의 거부",
        headingEn: "Debt Exchange and Holdout — 93% Agreed, 7% Refused",
        body: "아르헨티나는 2005년과 2010년 두 차례에 걸쳐 채권교환을 실시했다. 조건은 가혹했다 — 액면가 30~35센트에 해당하는 새 채권으로 교환. 그럼에도 2010년 추가교환 포함 93%의 채권자가 동의했다. '무언가라도 받는 것이 15년 소송보다 낫다'는 실용적 판단이었다.\n\n그러나 7%의 holdout 채권자들은 달랐다. 가장 공격적인 것이 폴 싱어(Paul Singer)의 엘리엇 매니지먼트 자회사 NML Capital이었다. NML은 아르헨티나 국채를 2차 시장에서 액면가의 11~20센트에 매입한 뒤, 100센트 전액 상환을 요구하며 미국 법원에 소송을 제기했다. 언론은 이런 전략을 'vulture fund(독수리 펀드)'라 불렀다.\n\n초기에는 아무도 NML이 이길 것이라 생각하지 않았다. 주권 국가의 자산은 sovereign immunity 원칙상 압류 불가라고 여겼기 때문이다. 그러나 엘리엇의 법무팀은 채권 인덴처 깊숙이 숨어있던 두 단어를 찾아냈다.",
        bodyEn: "Argentina conducted two debt exchange offers in 2005 and 2010. The terms were harsh — new bonds worth just 30–35 cents on the dollar. Yet 93% of creditors accepted (including the second exchange). The pragmatic calculation: 'something is better than 15 years of litigation.'\n\nBut 7% of holdout creditors disagreed. The most aggressive was NML Capital, a subsidiary of Paul Singer's Elliott Management. NML purchased Argentine government bonds in the secondary market at 11–20 cents on the dollar, then sued in U.S. courts demanding repayment at 100 cents. The press called this strategy a 'vulture fund.'\n\nInitially, almost nobody believed NML would win. Under sovereign immunity principles, sovereign nation assets were considered untouchable. But Elliott's legal team discovered two words buried deep in the bond indentures.",
      },
      {
        heading: "pari passu — 역사상 가장 비싼 두 단어",
        headingEn: "Pari Passu — The Two Most Expensive Words in Legal History",
        body: "문제의 조항은 pari passu(라틴어: '동일한 단계로')였다. 채권 인덴처에 표준적으로 포함되는 이 문구는 '이 채권은 다른 모든 무담보 채무와 동등하게 취급된다'는 의미다. 대부분의 법률가들은 형식적 조항으로 간주했다.\n\n그러나 뉴욕 연방법원의 토마스 그리사(Thomas Griesa) 판사는 달리 해석했다. 2012년 그리사 판사는 '아르헨티나가 교환 채권 보유자에게 이자를 지급하면서 holdout 채권자(NML)에게 지급하지 않는 것은 pari passu 위반'이라고 판결했다. 교환 채권에 지급할 때마다 NML에도 비례 지급해야 한다는 것이었다.\n\n더 파괴적인 것은 injunction(결제금지 명령)이었다. 그리사 판사는 미국 내 결제 시스템(Euroclear, DTC)에 명령해 아르헨티나가 NML에 지급하지 않으면 어떤 채권자에게도 결제하지 말 것을 지시했다. 아르헨티나는 미국 채권자에게 돈을 보낼 수 없게 됐고, 2014년 '기술적 디폴트'에 빠졌다. 돈은 있었지만 보낼 수가 없었다.",
        bodyEn: "The key clause was pari passu (Latin: 'at an equal pace'). This standard boilerplate in bond indentures means 'this bond shall rank equally with all other unsecured obligations.' Most lawyers regarded it as purely ceremonial.\n\nBut Judge Thomas Griesa of the U.S. District Court saw it differently. In 2012, Judge Griesa ruled that 'Argentina paying exchange bondholders while not paying holdout creditors (NML) violates the pari passu clause.' Every time Argentina paid exchange bondholders, it was required to pay NML proportionally.\n\nThe truly destructive element was the injunction. Judge Griesa ordered U.S. clearing systems (Euroclear, DTC) to block all Argentine bondholder payments unless NML was paid simultaneously. Argentina could not send money to U.S. creditors and fell into a 'technical default' in 2014 — the money existed, but there was no legal way to send it.",
      },
      {
        heading: "군함 압류 — 가나 테마 항구의 전례없는 사건",
        headingEn: "The Warship Seizure — An Unprecedented Event at Ghana's Tema Port",
        body: "소송이 진행되는 동안 NML Capital은 다른 전선도 열었다. 아르헨티나 정부의 해외 자산을 찾아 압류하는 작전이었다. 2012년 10월, 아르헨티나 해군 훈련함 **ARA Libertad**가 연료 보급을 위해 가나 테마(Tema) 항구에 입항했다.\n\nNML Capital은 가나 법원에 압류 명령을 신청했고, 가나 고등법원은 이를 받아들였다. 300명의 해군 승무원을 태운 길이 104미터의 거대한 훈련 범선이 항구에 묶였다. 국제해양법재판소(ITLOS)가 즉각 석방 명령을 내렸음에도 가나 법원은 두 달간 억류를 유지했다.\n\n이 외에도 NML은 뉴욕 아르헨티나 영사관 자산, 중앙은행 계좌, 심지어 대통령 전용기까지 압류를 시도했다. 15년간의 전면전이었다. 아르헨티나 정부는 '경제 테러리즘'이라 격분했지만, 엘리엇은 멈추지 않았다.",
        bodyEn: "While litigation continued, NML Capital opened another front: hunting down Argentine government assets abroad for seizure. In October 2012, the Argentine navy training vessel **ARA Libertad** docked at Ghana's Tema port for refueling.\n\nNML Capital applied for a seizure order in Ghanaian court, and Ghana's High Court granted it. The 104-meter training sailing vessel, carrying 300 naval crew, was impounded in port. Even though the International Tribunal for the Law of the Sea (ITLOS) immediately ordered its release, Ghanaian courts maintained the detention for two months.\n\nBeyond the warship, NML also attempted to seize the Argentine consulate in New York, central bank accounts, and even the President's jet. It was a 15-year total war. The Argentine government called it 'economic terrorism,' but Elliott never stopped.",
      },
      {
        heading: "2016년 합의 — CAC 혁명의 유산",
        headingEn: "The 2016 Settlement — The Legacy of the CAC Revolution",
        body: "2015년 취임한 마우리시오 마크리 대통령은 이전 정부의 강경 노선과 달리 협상을 택했다. 2016년 2월, 아르헨티나는 엘리엇에 $24억, 다른 holdout 채권자들을 포함해 총 약 $46억을 지급하기로 합의했다. NML의 투자 원가 대비 수익률은 약 1,500%에 달했다.\n\n그러나 진짜 변화는 채권시장 자체였다. IMF와 ICMA(국제자본시장협회)는 새로운 sovereign 채권 표준 CAC(Collective Action Clause) 조항을 의무화하기 시작했다. ICMA의 2014년 모델 조항은 단일 집합표결(single-limb aggregation)을 도입해, 소수 holdout이 전체 재조정을 막는 것을 불가능하게 했다.\n\n오늘날 발행되는 대부분의 sovereign 유로채에는 이 새로운 CAC 조항이 포함된다. 아르헨티나의 15년 악몽은 역설적으로 sovereign debt 재조정의 국제 표준을 업그레이드시켰다. 2022년 아르헨티나가 또 디폴트를 선언했을 때, 세계는 이미 CAC가 있는 시장에서 재조정을 진행했다.",
        bodyEn: "President Macri, who took office in 2015, chose negotiation over the previous government's hardline stance. In February 2016, Argentina agreed to pay Elliott $2.4B and approximately $4.6B total to all holdout creditors. NML Capital's return on investment was approximately 1,500%.\n\nBut the real change was in the bond market itself. The IMF and ICMA (International Capital Market Association) began mandating new CAC (Collective Action Clause) provisions in sovereign bonds. ICMA's 2014 model clause introduced single-limb aggregation, making it impossible for a minority holdout in any bond series to block an entire restructuring.\n\nToday, most sovereign eurobonds include these new CAC provisions. Argentina's 15-year nightmare paradoxically upgraded international standards for sovereign debt restructuring. When Argentina defaulted again in 2022, the world already had CAC clauses in place — a direct legacy of the Elliott saga.",
      },
    ],
    keyTerms: [
      { term: "pari passu", termEn: "Pari Passu", definition: "채권 인덴처 표준 조항. '이 채권은 다른 모든 무담보 채무와 동등하게 취급된다.' 아르헨티나 사건에서 법원은 holdout 미지급 시 교환 채권 결제도 금지하는 근거로 해석했다.", definitionEn: "Standard boilerplate in bond indentures: 'This bond shall rank equally with all other unsecured obligations.' In the Argentina case, courts interpreted this to prohibit exchange bondholder payments unless holdout creditors were paid simultaneously." },
      { term: "holdout 채권자", termEn: "Holdout Creditor", definition: "채권 재조정 제안을 거부하고 원금 전액 상환을 요구하는 채권자. 소수가 다수의 합의를 무력화할 수 있어 재조정 프로세스의 핵심 리스크였다.", definitionEn: "A creditor who refuses a debt restructuring offer and demands full repayment. A minority could undermine majority consensus — the core risk that CAC reform was designed to solve." },
      { term: "CAC (집합행동조항)", termEn: "CAC (Collective Action Clause)", definition: "sovereign 채권 인덴처에 포함되는 조항으로, 채권자의 일정 비율(보통 75%+)이 재조정에 동의하면 나머지도 구속된다. 2014년 ICMA 표준 이후 single-limb aggregation 도입으로 holdout 문제를 대폭 완화했다.", definitionEn: "A clause in sovereign bond indentures: if a threshold percentage (typically 75%+) of creditors agree to restructuring, remaining creditors are bound. The 2014 ICMA standard with single-limb aggregation substantially mitigated the holdout problem." },
      { term: "vulture fund", termEn: "Vulture Fund", definition: "부실·디폴트 채권을 헐값에 매입한 뒤 원금 전액을 소송으로 강제하는 투자 전략. 엘리엇 매니지먼트가 대표적이다. 채권자 권리 보호와 도덕적 해이 논란이 공존한다.", definitionEn: "An investment strategy of buying distressed/defaulted bonds at deep discounts, then forcing full repayment through litigation. Elliott Management is the archetype. Debates persist on creditor rights protection vs. moral hazard." },
    ],
    assessment: {
      positives: ["CAC 표준화 촉발 — 이후 sovereign 재조정 프로세스를 근본적으로 개선", "pari passu 조항의 법적 의미를 시장 전체에 명확히 정의", "sovereign 채권자 권리 보호 가능성을 1,500% 수익률로 증명", "IMF 프레임워크 강화 및 국제사회의 holdout 문제 인식 제고"],
      positivesEn: ["Triggered CAC standardization — fundamentally improving future sovereign restructuring processes", "Clarified the legal meaning of the pari passu clause for the entire market", "Proved sovereign creditor rights can be enforced with ~1,500% return", "Strengthened the IMF framework and raised global awareness of the holdout problem"],
      risks: ["합의 비용 $46억은 아르헨티나 국민이 부담 — 도덕적 해이 심화", "Sovereign immunity 원칙 훼손 — 주권 국가 자산 압류 선례", "투기적 vulture fund 전략 정당화로 미래 sovereign 재조정 복잡화"],
      risksEn: ["The $4.6B settlement was ultimately borne by Argentine citizens — deepening moral hazard", "Erosion of sovereign immunity — precedent for seizing sovereign state assets", "Legitimized speculative vulture fund strategies, complicating future sovereign restructurings"],
    },
    faq: [
      { q: "아르헨티나는 왜 처음부터 CAC를 채권에 포함시키지 않았나요?", qEn: "Why didn't Argentina include CAC clauses in its bonds from the start?", a: "1990~2000년대 초 아르헨티나 채권 대부분은 뉴욕 법원 준거로 발행됐는데, 당시 미국법 준거 sovereign 채권에는 CAC를 포함하는 관행이 없었습니다. 영국법 준거(Euromarket)에는 일반적이었지만 미국법 준거에서는 드물었고, 이 격차가 holdout 문제의 근본 원인이었습니다.", aEn: "Most Argentine bonds issued in the 1990s–early 2000s were governed by New York law, and it was not standard practice to include CAC in U.S.-law sovereign bonds at that time. CAC was common in English-law bonds but rare in U.S.-law ones — this gap was the root cause of the holdout problem." },
      { q: "엘리엇은 어떻게 국가 주권면제를 극복했나요?", qEn: "How did Elliott overcome sovereign immunity?", a: "핵심은 미국 FSIA(외국주권면제법) 예외 조항입니다. 상업적 목적으로 사용되는 자산은 주권면제가 적용되지 않습니다. 엘리엇은 아르헨티나가 미국 금융 시스템을 이용해 상업 활동을 한다는 점을 파고들었습니다.", aEn: "The key was the commercial activity exception under the U.S. Foreign Sovereign Immunities Act (FSIA). Assets used for commercial purposes are not protected by sovereign immunity. Elliott exploited the fact that Argentina used U.S. financial systems for commercial activities." },
      { q: "다른 나라도 holdout 공격을 받을 수 있나요?", qEn: "Can other countries face the same holdout attacks?", a: "2014년 이후 발행된 sovereign 채권에 ICMA 표준 CAC가 포함되면서 리스크가 크게 줄었습니다. 그러나 2014년 이전 발행된 구채권(legacy bonds)에는 여전히 위험이 존재합니다. 스리랑카(2022), 잠비아(2020), 가나(2022) 등 최근 디폴트에서도 일부 holdout 이슈가 발생했습니다.", aEn: "Since 2014, most sovereign bonds include ICMA standard CAC, significantly reducing risk. However, legacy bonds issued before 2014 still carry holdout risk. Recent defaults in Sri Lanka (2022), Zambia (2020), and Ghana (2022) also saw holdout issues emerge." },
      { q: "'기술적 디폴트'는 무엇이고 왜 발생했나요?", qEn: "What was the 'technical default' and why did it happen?", a: "그리사 판사의 injunction 명령으로 아르헨티나는 교환 채권 이자를 지급하려 돈을 보냈지만 미국 결제 시스템이 이를 차단했습니다. 돈은 존재했지만 채권자들이 받지 못하는 상황 — 이것이 2014년 기술적 디폴트입니다.", aEn: "Due to Judge Griesa's injunction, Argentina sent money to pay exchange bond interest, but the U.S. clearing system blocked it. The money existed, but creditors couldn't receive it — that was the 2014 technical default." },
      { q: "이 사건이 현재 채권시장에 미치는 영향은?", qEn: "What is the lasting impact on today's bond market?", a: "가장 큰 유산은 CAC 표준화입니다. 2014년 ICMA 모델 조항 도입 이후 대부분의 sovereign 유로채에 집합행동조항이 포함됩니다. 또한 pari passu 조항의 문구가 전 세계적으로 수정됐으며, sovereign 재조정 시 채권자 조율 메커니즘이 강화됐습니다.", aEn: "The greatest legacy is CAC standardization. Since the 2014 ICMA model clauses, most sovereign eurobonds include collective action clauses. The pari passu clause language was also revised globally, and creditor coordination mechanisms in sovereign restructurings were strengthened." },
    ],
    relatedMarket101Slugs: [],
    references: [
      { id: 1, author: "U.S. Court of Appeals, Second Circuit", title: "NML Capital v. Republic of Argentina", source: "Second Circuit Opinion", year: "2012", url: "https://law.justia.com/cases/federal/appellate-courts/ca2/12-105/12-105-2012-10-26.html" },
      { id: 2, author: "IMF", title: "Strengthening the Contractual Framework to Address Collective Action Problems in Sovereign Debt Restructuring", source: "IMF Policy Paper", year: "2014", url: "https://www.imf.org/external/np/pp/eng/2014/090214.pdf" },
      { id: 3, author: "ICMA", title: "Standard Collective Action and Pari Passu Clauses for Sovereign Notes", source: "ICMA", year: "2014", url: "https://www.icmagroup.org/assets/documents/Regulatory/Sovereign-Debt-information/CAC-Pari-Passu-Clauses.pdf" },
      { id: 4, author: "Buchheit, L.C. & Gulati, M.", title: "Sovereign Bonds and the Collective Will", source: "Emory Law Journal", year: "2010", url: "https://scholarship.law.duke.edu/faculty_scholarship/2240/" },
    ],
  },

  {
    slug: "greece-debt-restructuring",
    title: "그리스 채무재조정 (2012) — 선진국 sovereign 53% 헤어컷",
    titleEn: "Greece Debt Restructuring (2012) — The Largest Sovereign Restructuring in History",
    category: "crisis",
    categoryLabel: "위기·디폴트",
    categoryLabelEn: "Crisis & Default",
    excerpt: "안전자산이라 불리던 선진국 국채가 53% 헤어컷을 받다. CDS 트리거 논쟁, 유로존 위기의 핵심.",
    excerptEn: "A developed market sovereign bond took a 53% haircut. The CDS trigger controversy and the heart of the Eurozone crisis.",
    dealYear: 2012,
    issuer: "Hellenic Republic (Greece)",
    issuerEn: "Hellenic Republic (Greece)",
    readingMinutes: 14,
    tags: ["Sovereign", "재조정", "그리스", "CDS", "헤어컷", "유로존"],
    tagsEn: ["Sovereign", "Restructuring", "Greece", "CDS", "Haircut", "Eurozone"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Hellenic Republic (Greece)" },
      { labelKo: "재조정 완료", labelEn: "Completion", value: "2012년 3월", valueEn: "March 2012" },
      { labelKo: "명목 헤어컷", labelEn: "Nominal Haircut", value: "53.5%" },
      { labelKo: "NPV 손실", labelEn: "NPV Loss", value: "~75%" },
      { labelKo: "재조정 규모", labelEn: "Bonds Restructured", value: "€2,060억", valueEn: "€206B" },
      { labelKo: "CAC 소급 적용", labelEn: "CAC Retrofitted", value: "95.7% 참여 강제", valueEn: "95.7% forced participation" },
    ],
    executiveSummary: {
      ko: [
        "2012년 그리스는 €2,060억 규모의 사상 최대 sovereign 채무재조정을 단행했다.",
        "채권자들은 명목 53.5%, NPV 기준 ~75%의 손실을 입었다 — 선진국 sovereign 채권 최초였다.",
        "그리스는 법률을 소급 개정해 CAC를 강제 적용함으로써 95.7% 참여율을 달성했다.",
        "CDS 트리거 여부를 둘러싼 ISDA 결정위원회 논쟁은 신용파생상품 시장 전체를 뒤흔들었다.",
        "이 사건은 유로존 위기의 정점이자, Eurozone sovereign 채권의 '무위험' 신화를 영구히 붕괴시켰다.",
      ],
      en: [
        "In 2012, Greece executed the largest sovereign debt restructuring in history — €206B.",
        "Creditors suffered a 53.5% nominal, ~75% NPV loss — the first time for a developed market sovereign.",
        "Greece retrofitted CAC clauses by retroactive legislation, achieving 95.7% participation.",
        "The ISDA determination committee debate over CDS triggers shook the entire credit derivatives market.",
        "This event was the peak of the Eurozone crisis and permanently shattered the myth of Eurozone sovereign bonds as 'risk-free.'",
      ],
    },
    sections: [
      {
        heading: "2010~2011 — 구제금융의 악순환과 채무 지속불가능성",
        headingEn: "2010–2011 — The Bailout Spiral and Unsustainable Debt",
        body: "2010년 5월, EU·ECB·IMF 이른바 '트로이카'는 그리스에 €1,100억 구제금융 패키지를 제공했다. 조건은 가혹한 긴축이었다. 그러나 이것만으로 충분하지 않다는 것이 곧 명확해졌다. 그리스의 GDP 대비 국가채무는 2009년 129%에서 2012년 170%를 향해 치솟고 있었다.\n\n문제의 핵심은 채무의 기하급수적 성격이었다. GDP가 수축하는 상황에서 고금리로 차입한 채무의 원리금을 갚으려면 GDP 대비 채무 비율이 계속 올라갈 수밖에 없다. IMF 자체 분석도 '채무 지속불가능' 결론에 도달했다. 두 번째 구제금융 협상(€1,300억)과 함께 민간 채권자 헤어컷이 불가피해졌다.\n\n2011년 하반기 동안 그리스 10년물 국채 금리는 30%를 넘어섰고, 유럽 은행들의 그리스 채권 익스포저가 전면적으로 드러났다. BNP파리바, 코메르츠방크 등 대형 유럽 은행들이 그리스 채권 손실 충당금을 쌓기 시작했다.",
        bodyEn: "In May 2010, the EU, ECB, and IMF — the so-called 'Troika' — provided Greece with a €110B bailout package. The conditions were harsh austerity. But it quickly became clear this wasn't enough. Greece's debt-to-GDP ratio was soaring from 129% in 2009 toward 170% by 2012.\n\nThe core problem was the exponential nature of debt dynamics. With GDP contracting, servicing high-interest debt meant the debt-to-GDP ratio would continue rising regardless of austerity. Even the IMF's own analysis concluded debt was 'unsustainable.' A second bailout (€130B) and private creditor haircuts became inevitable.\n\nDuring the second half of 2011, Greek 10-year bond yields exceeded 30%, and European banks' exposure to Greek bonds was fully exposed. Major European banks — BNP Paribas, Commerzbank — began provisioning for Greek bond losses.",
      },
      {
        heading: "PSI 설계 — 53.5% 헤어컷의 구조",
        headingEn: "PSI Design — The Architecture of a 53.5% Haircut",
        body: "2012년 2월 확정된 민간부문 참여(PSI) 조건은 채권자들에게 사실상 선택권이 없었다. 교환 조건은 세 가지: (1) 만기 11.5~30년의 새로운 그리스 국채(액면가의 31.5%), (2) EFSF 단기 채권(15%), (3) GDP 연동 증권. 명목 53.5% 헤어컷, NPV 손실은 약 75%에 달했다.\n\n그리스는 2012년 2월 새로운 법률을 통해 CAC(집합행동조항)를 소급 적용했다. 이는 기존 채권 인덴처에 없던 조항을 법으로 강제 도입하는 전례없는 조치였다. CAC 적용 후 채권자의 85.8%가 자발적으로 교환에 응했고, 나머지도 CAC에 의해 강제 참여시켜 전체 참여율 95.7%를 달성했다.\n\n교환에 불참한 4.3%는 주로 외국법 준거 그리스 채권 보유자였다. 이들은 결국 별도 협상이나 추가 법정 다툼을 통해 처리됐다.",
        bodyEn: "The Private Sector Involvement (PSI) terms finalized in February 2012 left creditors with essentially no choice. The exchange consisted of three components: (1) new Greek government bonds with maturities of 11.5–30 years (31.5% of face value), (2) EFSF short-term notes (15% of face value), and (3) GDP-linked securities. Nominal haircut: 53.5%; NPV losses: approximately 75%.\n\nIn February 2012, Greece passed legislation retroactively applying CAC — an unprecedented move forcibly inserting a clause not in original bond indentures. After CAC application, 85.8% of creditors voluntarily tendered, with the remainder coerced through CAC, achieving an overall participation rate of 95.7%.\n\nThe 4.3% non-participating creditors were primarily holders of foreign-law Greek bonds. These were handled through separate negotiations or additional litigation.",
      },
      {
        heading: "CDS 트리거 논쟁 — 신용파생상품 시장의 위기",
        headingEn: "The CDS Trigger Debate — A Credit Derivatives Market in Crisis",
        body: "채무재조정이 진행되는 동안, 전 세계 신용파생상품 시장은 초긴장 상태였다. 그리스 국채를 보유하면서 동시에 CDS로 헤지한 투자자들은 과연 CDS가 지급될 것인지 확신할 수 없었다.\n\nISDA(국제스와프파생상품협회) 결정위원회는 2012년 3월 'CAC 소급 적용은 신용 이벤트에 해당한다'고 결정했다. 약 $32억 규모의 그리스 CDS가 결제됐다. 그러나 CAC 적용 전 자발적 교환 단계에서는 CDS 트리거가 발동되지 않아, CDS가 sovereign 위기에서 완벽한 헤지 수단이 아님을 드러냈다.\n\n이 사건은 'CDS = 완벽한 보험'이라는 시장의 믿음에 균열을 냈다. voluntary vs. coercive restructuring의 경계, ISDA 결정위원회의 권한과 이해충돌 문제가 수면 위로 올라왔다. 이후 ISDA는 2014년 정의집을 개정해 sovereign 관련 신용 이벤트 정의를 강화했다.",
        bodyEn: "While the restructuring was underway, global credit derivatives markets were under extreme tension. Investors who held Greek government bonds while hedging with CDS couldn't be certain whether their CDS would pay out.\n\nThe ISDA determinations committee ruled in March 2012 that 'Greece's retroactive CAC application constitutes a credit event.' Approximately $3.2B in Greek CDS were settled. However, during the voluntary exchange phase before CAC application, CDS did not trigger — revealing that CDS is not a perfect hedge in sovereign crises.\n\nThis event cracked the market's belief in 'CDS = perfect insurance.' The boundary between voluntary and coercive restructuring, and ISDA committee authority questions, rose to the surface. ISDA subsequently revised its 2014 Definitions to strengthen sovereign credit event definitions.",
      },
      {
        heading: "사회적 비용 — 긴축의 현실",
        headingEn: "Social Cost — The Reality of Austerity",
        body: "채무재조정 자체보다 더 극적인 것은 그리스 사회가 지불한 대가였다. 2010~2015년 그리스 GDP는 약 25% 수축했다 — 2차 세계대전 이후 선진국 최대 평시 GDP 감소. 실업률은 27%를 넘었고, 청년 실업률은 60%에 달했다.\n\n2015년 시리자(Syriza)당이 집권하면서 '긴축 거부'를 내걸고 채권단과 충돌했다. 차이피스 바루파키스 재무장관은 트로이카와의 협상에서 채권단의 요구를 '금융 테러리즘'이라 불렀다. 그리스 국민투표(2015년 7월)에서 61%가 추가 긴축안에 반대했지만, 치프라스 총리는 결국 더 가혹한 조건에 서명했다.\n\n그리스의 경험은 sovereign 채무재조정 시 채권자와 채무국 간 구조적 불균형을 가장 극명하게 보여준 사례로 역사에 남았다.",
        bodyEn: "Even more dramatic than the restructuring itself was the cost paid by Greek society. From 2010 to 2015, Greek GDP contracted by approximately 25% — the largest peacetime GDP decline in a developed country since World War II. Unemployment exceeded 27%, with youth unemployment reaching 60%.\n\nWhen Syriza came to power in 2015 under an 'anti-austerity' banner, Finance Minister Yanis Varoufakis called the Troika's demands 'financial terrorism.' In the Greek referendum (July 2015), 61% voted against additional austerity, but Prime Minister Tsipras ultimately signed an even harsher agreement.\n\nGreece's experience remains in history as the starkest demonstration of the structural imbalance between creditors and debtor nations in sovereign debt restructuring.",
      },
      {
        heading: "교훈 — 유로존의 구조적 결함과 sovereign 채권의 재발견",
        headingEn: "Lessons — Eurozone Structural Flaws and the Rediscovery of Sovereign Risk",
        body: "그리스 채무재조정은 여러 겹의 교훈을 남겼다. 첫째, 유로존 sovereign 채권은 결코 '무위험 자산'이 아니다. 통화 주권이 없는 국가는 화폐 발행을 통한 채무 탕감이 불가능하다. 둘째, CAC 소급 적용의 가능성과 위험성을 동시에 보여줬다. 법률로 채권 조건을 강제 변경하는 것은 sovereign 채권의 계약적 확실성에 근본적 의문을 제기한다.\n\n이후 유로존은 ESM(유럽안정메커니즘) 설립과 함께 2013년부터 모든 유로존 sovereign 채권에 CAC를 의무화했다. 셋째, IMF의 예측 실패가 드러났다. IMF는 재정 긴축의 경제적 충격을 과소평가했고, 이후 IMF가 자체 보고서에서 '승수 효과를 과소추정했다'고 인정하는 유례없는 자기비판이 이어졌다.\n\n그리스 사태는 오늘날 EM 국가뿐 아니라 선진국 sovereign도 디폴트할 수 있다는 현실을 채권시장에 각인시켰다.",
        bodyEn: "The Greek debt restructuring left multiple layers of lessons. First, Eurozone sovereign bonds are never 'risk-free assets.' Countries without monetary sovereignty cannot resort to money printing for debt relief. Second, it demonstrated both the possibilities and dangers of retroactive CAC application — forcibly changing bond terms by legislation raises fundamental questions about sovereign bond contractual certainty.\n\nThe Eurozone subsequently mandated CAC in all sovereign bonds from 2013, alongside establishing the ESM (European Stability Mechanism). Third, IMF forecast failures were exposed — the IMF underestimated fiscal austerity impacts and later made an unprecedented self-criticism, admitting it had 'underestimated the fiscal multiplier.'\n\nThe Greek crisis imprinted on the bond market the reality that not just EM sovereigns, but developed market ones too, can default.",
      },
    ],
    keyTerms: [
      { term: "PSI (민간부문 참여)", termEn: "PSI (Private Sector Involvement)", definition: "sovereign 채무재조정 시 민간 채권자(은행, 헤지펀드, 개인 투자자)를 손실 분담에 참여시키는 구조. 공식 채권자(IMF, 유럽기구)와 대비되는 개념으로, 그리스 PSI는 사상 최대 규모였다.", definitionEn: "The involvement of private creditors (banks, hedge funds, retail investors) in sharing losses during a sovereign debt restructuring. Contrasted with official creditors (IMF, European institutions) — the Greek PSI was the largest in history." },
      { term: "CAC 소급 적용", termEn: "Retroactive CAC Application", definition: "기존 채권 인덴처에 없던 집합행동조항(CAC)을 법률을 통해 강제 삽입하는 방식. 그리스가 2012년 2월 시행했으며, 계약법적 확실성 훼손 논란을 낳았다.", definitionEn: "Forcibly inserting Collective Action Clauses into existing bond indentures through legislation. Greece did this in February 2012, raising concerns about contractual certainty in sovereign bonds." },
      { term: "헤어컷 (Haircut)", termEn: "Haircut", definition: "채무재조정 시 채권자가 원금에서 손실을 입는 비율. 명목 헤어컷(액면가 기준)과 NPV 헤어컷(현재가치 기준)으로 구분된다. 그리스의 명목 헤어컷은 53.5%였지만 NPV 기준으로는 약 75%였다.", definitionEn: "The percentage loss creditors take on principal in a debt restructuring. Distinguished between nominal haircut (face value) and NPV haircut (present value). Greece's nominal haircut was 53.5%, approximately 75% on an NPV basis." },
      { term: "트로이카", termEn: "Troika", definition: "그리스 구제금융 과정에서 조건을 부과하고 이행을 감시한 3개 국제기관 — 유럽집행위원회(EC), 유럽중앙은행(ECB), IMF. 그리스 내에서 극도로 부정적 이미지를 가졌으며 이후 '기관들(Institutions)'로 재명명됐다.", definitionEn: "The three international institutions that imposed and monitored conditions for Greece's bailout — the European Commission, ECB, and IMF. Extremely negatively perceived in Greece, later renamed 'the Institutions.'" },
    ],
    assessment: {
      positives: ["사상 최대 sovereign 채무재조정을 유로존 붕괴 없이 완료", "CAC 소급 적용으로 95.7% 참여율 달성 — 전례없는 채권자 조율", "유로존 내 ESM 설립 및 sovereign 채권 CAC 의무화로 이어진 제도 개혁", "CDS 트리거 메커니즘에 대한 시장 인식 제고 및 ISDA 정의 개선 촉발"],
      positivesEn: ["Completed the largest sovereign debt restructuring in history without Eurozone collapse", "Achieved 95.7% participation through retroactive CAC — unprecedented creditor coordination", "Led to ESM establishment and mandatory CAC for all Eurozone sovereign bonds", "Improved market understanding of CDS trigger mechanisms and triggered ISDA definition updates"],
      risks: ["그리스 GDP 25% 감소, 실업률 27% — 긴축의 사회적 비용이 채무 지속가능성보다 컸다는 논란", "CAC 소급 입법은 sovereign 채권의 계약적 확실성에 의문을 제기", "CDS 헤지 불완전성 노출 — 신용파생상품 시장 신뢰성 훼손", "IMF 승수 오류 인정 — 긴축 프로그램 설계 방법론에 근본적 의문"],
      risksEn: ["Greece's 25% GDP decline and 27% unemployment — the social cost of austerity arguably exceeded the benefits", "Retroactive CAC legislation raised fundamental questions about contractual certainty of sovereign bonds", "Exposed CDS hedge imperfection — damaged credibility of the credit derivatives market", "IMF admitted fiscal multiplier errors — fundamental questions about austerity program design"],
    },
    faq: [
      { q: "그리스 채무재조정은 아르헨티나 사례와 어떻게 달랐나요?", qEn: "How did the Greek restructuring differ from Argentina's case?", a: "핵심 차이는 두 가지입니다. 첫째, 그리스는 CAC 소급 적용으로 95.7%의 높은 참여율을 달성해 holdout 문제를 사전에 차단했습니다. 둘째, 그리스는 유로화를 사용하지만 통화 주권이 없어 IMF·유럽 기구의 구제금융에 의존할 수밖에 없었고, 강도 높은 긴축을 수용했습니다.", aEn: "Two key differences: First, Greece achieved 95.7% participation through retroactive CAC, preemptively blocking the holdout problem. Second, Greece uses the euro but has no monetary sovereignty, making it dependent on bailouts and forced to accept harsh austerity — an option Argentina (as a sovereign currency nation) didn't face." },
      { q: "왜 그리스는 채무재조정 전에 유로존을 탈퇴하지 않았나요?", qEn: "Why didn't Greece leave the Eurozone before the restructuring?", a: "그렉시트(Grexit) 논의는 2012년과 2015년에 실제로 등장했습니다. 탈퇴하지 않은 이유는 드라크마 복귀 시 극심한 환율 폭락과 은행 뱅크런, 수입 물가 급등, 달러 부채의 자국 통화 기준 폭증 등 치명적 부작용이 예상됐기 때문입니다.", aEn: "Grexit discussions actually emerged in 2012 and 2015. The reasons for not leaving included devastating expected effects: extreme currency collapse, bank runs, import price surges, and an explosive increase in dollar debt measured in local currency. There was also strong political will for European solidarity." },
      { q: "CDS가 결국 지급됐는데, 왜 '불완전한 헤지'라고 하나요?", qEn: "CDS eventually paid out — why is it called an 'imperfect hedge'?", a: "자발적 교환(voluntary exchange) 단계에서는 CDS가 트리거되지 않았습니다. 채권자들이 '자발적으로' 헤어컷에 동의한 것으로 처리됐기 때문입니다. CAC 강제 적용 후에야 신용 이벤트로 인정됐습니다. 즉, 같은 손실 상황에서도 재조정이 어떻게 구조화되느냐에 따라 CDS 지급 여부가 달라질 수 있음을 보여줬습니다.", aEn: "During the voluntary exchange phase, CDS did not trigger because creditors were treated as having 'voluntarily' agreed to the haircut. It was only recognized as a credit event after the coercive CAC application. This showed that CDS payout depends on how the restructuring is structured — even in the same loss situation." },
      { q: "유럽 은행들의 그리스 채권 손실은 얼마나 됐나요?", qEn: "How large were European banks' losses on Greek bonds?", a: "주요 유럽 은행의 직접 손실은 약 €370억으로 추산됩니다. BNP파리바, 코메르츠방크, ING, 소시에테제네랄이 대규모 충당금을 쌓았습니다. 단, 유럽 은행들은 2010~2012년 ECB의 암묵적 지원 아래 그리스 채권 보유를 상당 부분 줄였기 때문에 최초 익스포저 대비 실제 손실은 적었습니다.", aEn: "The direct losses of major European banks are estimated at approximately €37B. BNP Paribas, Commerzbank, ING, and Société Générale made large provisions. However, European banks had substantially reduced their Greek bond holdings between 2010 and 2012, so actual losses were less than initial exposure." },
      { q: "그리스는 지금 완전히 회복됐나요?", qEn: "Has Greece fully recovered?", a: "그리스는 2018년 구제금융 프로그램을 공식 졸업했고, 2024년 현재 국채 금리는 유로존 평균 수준에 근접했습니다. GDP는 2007년 수준을 아직 회복하지 못했지만 성장세를 유지하고 있으며, 관광업 호조와 구조조정이 도움이 됐습니다. 그러나 공공부채/GDP는 여전히 160% 이상으로 유로존 최고 수준입니다.", aEn: "Greece officially graduated from its bailout program in 2018, and by 2024, its bond yields have approached Eurozone average levels. GDP has not fully recovered to 2007 levels but has maintained growth, supported by strong tourism and structural reforms. However, public debt/GDP remains above 160% — the highest in the Eurozone." },
    ],
    relatedMarket101Slugs: [],
    references: [
      { id: 1, author: "IMF", title: "Greece: Ex Post Evaluation of Exceptional Access Under the 2010 Stand-By Arrangement", source: "IMF Country Report 13/156", year: "2013", url: "https://www.imf.org/external/pubs/ft/scr/2013/cr13156.pdf" },
      { id: 2, author: "Zettelmeyer, J., Trebesch, C. & Gulati, M.", title: "The Greek Debt Restructuring: An Autopsy", source: "Economic Policy", year: "2013", url: "https://academic.oup.com/economicpolicy/article/28/75/513/2918221" },
      { id: 3, author: "ISDA", title: "EMEA Determinations Committee Rules on Greek Credit Event", source: "ISDA Press Release", year: "2012", url: "https://www.isda.org/2012/03/09/emea-dc-rules-on-greek-credit-event/" },
      { id: 4, author: "Blanchard, O. & Leigh, D.", title: "Growth Forecast Errors and Fiscal Multipliers", source: "IMF Working Paper 13/1", year: "2013", url: "https://www.imf.org/external/pubs/ft/wp/2013/wp1301.pdf" },
    ],
  },

  {
    slug: "china-real-estate-default",
    title: "중국 부동산 달러채 디폴트 (2021~) — Evergrande와 그 이후",
    titleEn: "China Real Estate Dollar Bond Defaults (2021~) — Evergrande and Beyond",
    category: "crisis",
    categoryLabel: "위기·디폴트",
    categoryLabelEn: "Crisis & Default",
    excerpt: "아시아 G3 시장에서 터진 대형 사건. 역외 달러채 채권자의 회수율과 중국 부동산 SOE/민영의 운명.",
    excerptEn: "The biggest crisis in the Asian dollar bond market. Recovery rates for offshore creditors, and the diverging fates of SOE vs private developers.",
    dealYear: 2021,
    issuer: "China Evergrande Group 外",
    issuerEn: "China Evergrande Group & Others",
    readingMinutes: 14,
    tags: ["중국", "부동산", "달러채", "디폴트", "EM", "Evergrande"],
    tagsEn: ["China", "Real Estate", "Dollar Bond", "Default", "EM", "Evergrande"],
    published: true,
    snapshot: [
      { labelKo: "사건 시작", labelEn: "Trigger", value: "2020년 8월 Three Red Lines", valueEn: "August 2020 Three Red Lines" },
      { labelKo: "Evergrande 총부채", labelEn: "Evergrande Total Debt", value: "$3,000억+", valueEn: "$300B+" },
      { labelKo: "역외 달러채 디폴트", labelEn: "Offshore USD Bond Defaults", value: "$1,000억+", valueEn: "$100B+" },
      { labelKo: "Evergrande 역외 회수율", labelEn: "Evergrande Offshore Recovery", value: "~2~5센트", valueEn: "~2-5 cents" },
      { labelKo: "디폴트 개발사", labelEn: "Defaulted Developers", value: "30개+ (2021~2024)", valueEn: "30+ (2021-2024)" },
      { labelKo: "현황", labelEn: "Status", value: "진행 중 (구조조정 継続)", valueEn: "Ongoing (restructuring continues)" },
    ],
    executiveSummary: {
      ko: [
        "2020년 8월 중국 정부의 'Three Red Lines' 정책은 부동산 개발사의 과도한 레버리지를 타깃으로 했다.",
        "2021년 12월 Evergrande가 디폴트를 선언하면서 아시아 달러채 시장 사상 최대 충격이 시작됐다.",
        "Country Garden, CIFI, Sunac 등 30개 이상의 민영 개발사가 연쇄 디폴트됐다.",
        "역외 달러채 채권자들은 중국 역내 채권자에 비해 구조적으로 불리한 회수율(2~30센트)에 직면했다.",
        "SOE 개발사(万科, 保利)와 민영 개발사의 운명이 극명하게 갈리며 중국 특유의 two-tier 신용시장이 형성됐다.",
      ],
      en: [
        "China's 'Three Red Lines' policy in August 2020 targeted excessive leverage among real estate developers.",
        "Evergrande's December 2021 default triggered the largest shock in Asian dollar bond market history.",
        "Over 30 private developers including Country Garden, CIFI, and Sunac defaulted in a cascade.",
        "Offshore dollar bond creditors structurally faced much lower recovery rates (2–30 cents) versus onshore creditors.",
        "The diverging fates of SOE developers (Vanke, Poly) vs. private developers created China's unique two-tier credit market.",
      ],
    },
    sections: [
      {
        heading: "Three Red Lines — 정책이 방아쇠를 당기다",
        headingEn: "Three Red Lines — The Policy That Pulled the Trigger",
        body: "2020년 8월 중국 인민은행(PBOC)과 주택도시농촌건설부(住建部)는 부동산 개발사에 '3가지 레드라인' 규정을 발표했다. (1) 부채/자산 비율 70% 이하, (2) 순부채/자기자본 비율 100% 이하, (3) 단기부채 대비 현금 비율 1배 이상. 이 세 조건을 모두 위반한 개발사는 신규 차입이 전면 금지됐다.\n\nEvergrande, Country Garden, Sunac 등 중국 대형 민영 개발사 대부분이 이 규정을 위반했다. 문제는 중국 부동산 개발사의 비즈니스 모델 자체가 '선분양, 후건설' 구조 — 즉 아직 짓지도 않은 집을 미리 팔아 그 돈으로 토지를 사고 건설하는 방식이었다. 레버리지가 없으면 작동할 수 없는 구조였다.\n\n규제로 신규 차입이 막히자 개발사들의 현금흐름이 급격히 악화됐다. 부동산 판매 둔화가 겹치며 2021년 말부터 연쇄 디폴트가 시작됐다.",
        bodyEn: "In August 2020, China's PBOC and Ministry of Housing announced the 'Three Red Lines' regulations for real estate developers: (1) debt/asset ratio below 70%, (2) net debt/equity ratio below 100%, (3) cash-to-short-term debt ratio above 1x. Developers violating all three conditions were completely banned from new borrowing.\n\nMost major Chinese private developers — Evergrande, Country Garden, Sunac — violated these regulations. The problem was that China's real estate development business model was fundamentally built on 'pre-sales, post-construction' — selling unbuilt homes in advance to fund land purchases and construction. It simply couldn't operate without leverage.\n\nWith new borrowing cut off by regulation, developers' cash flows deteriorated rapidly. Combined with slowing property sales, cascading defaults began in late 2021.",
      },
      {
        heading: "Evergrande 붕괴 — $3,000억 부채의 도미노",
        headingEn: "Evergrande's Collapse — The $300B Debt Domino",
        body: "허자이(許家印) 회장이 이끄는 헝다그룹(Evergrande)은 한때 중국 최대 부동산 개발사였다. 2021년 9월, 홍콩 거래소에 상장된 Evergrande 주식은 반년 만에 80% 폭락했다. 역외 달러채 이자를 지급하지 못했다는 소식이 전해지면서 채권 시장이 패닉에 빠졌다.\n\n2021년 12월 Evergrande는 공식 디폴트를 선언했다. 총부채 $3,000억 이상, 역외 달러채만 $200억 이상이었다. 홍콩 법원은 2024년 1월 Evergrande에 청산 명령을 내렸지만, 중국 본토 법원과의 협조 부재로 실질적인 청산은 진행되지 않았다.\n\n역외 달러채 채권자들의 예상 회수율은 2~5센트 수준으로 추산됐다. 중국 본토 자산의 대부분이 역내 채권자, 예금자, 선분양 주택 구매자 등에게 먼저 배분되는 구조였기 때문이다. 역외 채권자는 법적 구조상 가장 후순위였다.",
        bodyEn: "Evergrande Group, led by Hui Ka Yan, was once China's largest real estate developer. In September 2021, Evergrande's Hong Kong-listed stock plummeted 80% in six months. News that it could not pay offshore dollar bond coupons sent bond markets into panic.\n\nIn December 2021, Evergrande officially declared default. Total debt exceeded $300B, with over $20B in offshore dollar bonds alone. A Hong Kong court issued a liquidation order in January 2024, but without cooperation from mainland Chinese courts, actual liquidation has not proceeded.\n\nOffshore dollar bond creditors face estimated recovery rates of 2–5 cents. This is because most mainland Chinese assets are first distributed to onshore creditors, depositors, and pre-sale home buyers. Offshore creditors are structurally the most junior in the legal hierarchy.",
      },
      {
        heading: "연쇄 디폴트 — SOE vs 민영의 갈림길",
        headingEn: "Cascading Defaults — The SOE vs. Private Divergence",
        body: "Evergrande 이후 중국 민영 부동산 개발사의 연쇄 디폴트가 이어졌다. Country Garden(碧桂园): 2023년 8월 달러채 이자 지급 실패, $170억 역외 채무 디폴트. CIFI(旭辉): 2022년 10월 디폴트. Sunac(融创): 2022년 5월 디폴트. 2024년 기준 30개 이상의 민영 개발사가 역외 달러채를 디폴트했다.\n\n그러나 같은 기간 SOE(국유기업) 개발사들은 전혀 다른 궤적을 걸었다. 万科(Vanke), 保利(Poly), 中国海外(China Overseas) 등은 정부의 암묵적 지원과 국유 은행의 신용 연장으로 위기를 모면했다. 시장은 이를 '국유 = 암묵적 보증, 민영 = 시장 위험'이라는 극명한 이분법으로 받아들였다.\n\n이 분기는 중국 달러채 시장의 구조를 근본적으로 바꿨다. 글로벌 EM 투자자들은 중국 민영 회사채를 사실상 투기등급으로 재분류하기 시작했고, 아시아 HY(고수익) 시장의 스프레드가 급격히 확대됐다.",
        bodyEn: "After Evergrande, a cascade of Chinese private real estate developer defaults followed. Country Garden: Dollar bond coupon failure in August 2023, $17B in offshore debt defaulted. CIFI: Default in October 2022. Sunac: Default in May 2022. By 2024, over 30 private developers had defaulted on offshore dollar bonds.\n\nHowever, during the same period, SOE (state-owned enterprise) developers followed a completely different trajectory. Vanke, Poly, China Overseas received government implicit support and state bank credit extensions, navigating the crisis. The market read this as a stark binary: 'SOE = implicit guarantee, private = market risk.'\n\nThis divergence fundamentally changed the structure of China's dollar bond market. Global EM investors began effectively reclassifying Chinese private corporate bonds as speculative grade, and Asian HY (high yield) market spreads widened sharply.",
      },
      {
        heading: "역외 채권자의 딜레마 — 중국 법원과의 싸움",
        headingEn: "The Offshore Creditor Dilemma — Fighting Chinese Courts",
        body: "중국 부동산 디폴트에서 역외 달러채 채권자들이 직면한 가장 큰 문제는 법적 집행력의 부재였다. 채권은 홍콩 또는 영국법 준거였지만, 실제 자산은 중국 본토에 있었다.\n\n홍콩 법원이 청산 명령을 내려도 중국 본토 법원이 이를 인정하지 않으면 집행이 불가능했다. Evergrande 사례에서 중국 본토 법원은 홍콩 법원의 청산 명령 이후에도 독자적인 구조조정 절차를 진행했다. 역외 채권자는 협상 테이블에서 사실상 배제됐다.\n\nCountry Garden의 경우 일부 달러채 채권자들이 협상을 통해 15~20센트 수준의 회수율에 합의하는 방향으로 진행됐다. 이는 Evergrande의 2~5센트보다는 높지만, 투자 원금 대비 여전히 80% 이상의 손실이다. 중국 역외 채권 투자의 법적 리스크가 전례없이 부각된 사건이었다.",
        bodyEn: "The biggest problem for offshore dollar bond creditors in Chinese real estate defaults was the absence of legal enforceability. Bonds were governed by Hong Kong or English law, but the actual assets were on the Chinese mainland.\n\nEven if Hong Kong courts issued liquidation orders, mainland Chinese courts refusing to recognize them made enforcement impossible. In Evergrande's case, mainland courts continued their own restructuring proceedings independently after the Hong Kong court's liquidation order. Offshore creditors were effectively excluded from the negotiating table.\n\nFor Country Garden, some dollar bond creditors moved toward agreements at 15–20 cents through negotiations — higher than Evergrande's 2–5 cents, but still over 80% loss on investment. This was an unprecedented case highlighting the legal risks of offshore Chinese bond investment.",
      },
      {
        heading: "교훈 — 아시아 달러채 시장의 재편",
        headingEn: "Lessons — The Restructuring of the Asian Dollar Bond Market",
        body: "중국 부동산 위기는 아시아 달러채 시장에 구조적 변화를 남겼다. 첫째, 중국 민영 회사채에 대한 '국가 지원 암묵적 보증' 믿음이 완전히 해소됐다. 둘째, 역외 vs. 역내 채권자 간 법적 위계의 현실이 극명하게 드러났다 — 달러 채권을 갖고 있어도 중국 본토 자산에 접근하는 것은 사실상 불가능하다.\n\n셋째, 아시아 HY 시장의 중국 부동산 편중이 얼마나 위험한지 보여줬다. 2020년 초 아시아 HY 인덱스에서 중국 부동산이 차지하는 비중은 40~50%에 달했다. 이 섹터가 붕괴하면서 아시아 HY 인덱스 전체가 타격을 입었다.\n\n넷째, 중국 정부의 정책 리스크가 새롭게 부각됐다. Three Red Lines는 정부의 정책 변화가 특정 섹터 전체를 순식간에 위기로 몰아넣을 수 있음을 보여줬다. EM 채권 투자에서 규제 및 정책 리스크 분석의 중요성이 재인식됐다.",
        bodyEn: "The Chinese real estate crisis left structural changes in the Asian dollar bond market. First, beliefs in 'implicit government guarantees' for Chinese private corporate bonds were completely dispelled. Second, the legal hierarchy reality between offshore and onshore creditors was starkly revealed — holding dollar bonds provides virtually no access to mainland Chinese assets.\n\nThird, it showed how dangerous the Asian HY market's concentration in Chinese real estate had become. In early 2020, Chinese real estate represented 40–50% of the Asian HY index. The sector's collapse damaged the entire Asian HY index.\n\nFourth, China's policy risk was newly highlighted. Three Red Lines showed that government policy changes can plunge an entire sector into crisis overnight. The importance of regulatory and policy risk analysis in EM bond investing was reaffirmed.",
      },
    ],
    keyTerms: [
      { term: "Three Red Lines", termEn: "Three Red Lines", definition: "2020년 8월 중국 정부가 부동산 개발사에 부과한 3가지 재무 기준: (1) 부채/자산 70% 이하, (2) 순부채/자기자본 100% 이하, (3) 단기부채 대비 현금 1배 이상. 위반 시 신규 차입 전면 금지.", definitionEn: "Three financial thresholds imposed by the Chinese government on real estate developers in August 2020: (1) debt/asset ratio below 70%, (2) net debt/equity below 100%, (3) cash-to-short-term debt above 1x. Violators were banned from new borrowing." },
      { term: "역외 달러채 (Offshore USD Bond)", termEn: "Offshore USD Bond", definition: "중국 기업이 홍콩 또는 해외 자본시장에서 달러화로 발행하는 채권. 중국 본토(역내) 채권 시장과 달리 외국인 투자자 접근이 용이하지만, 디폴트 시 본토 자산에 대한 법적 청구권이 취약하다.", definitionEn: "Dollar-denominated bonds issued by Chinese companies in Hong Kong or overseas capital markets. Unlike onshore (mainland) bond markets, they are more accessible to foreign investors, but in default, legal claims on mainland assets are structurally weak." },
      { term: "SOE (국유기업)", termEn: "SOE (State-Owned Enterprise)", definition: "중국 정부가 직·간접적으로 지배하는 기업. 부동산 섹터에서 万科(Vanke), 保利(Poly) 등이 대표적이다. 디폴트 위기에서 국유 은행의 신용 연장과 정부 암묵적 보증으로 민영 개발사와 달리 생존했다.", definitionEn: "Enterprises directly or indirectly controlled by the Chinese government. In real estate, Vanke and Poly are representative examples. During the default crisis, they survived through state bank credit extensions and implicit government guarantees, diverging sharply from private developers." },
      { term: "선분양·후건설 모델", termEn: "Pre-sale Model", definition: "중국 부동산 개발사의 핵심 비즈니스 모델. 아직 건설 전인 주택을 미리 판매해 그 대금으로 토지를 구매하고 건설비를 충당하는 방식. 레버리지 없이는 작동 불가능하고, 판매 둔화 시 즉각 현금흐름 위기로 연결된다.", definitionEn: "The core business model of Chinese real estate developers: selling homes before they are built, using proceeds to purchase land and fund construction. It cannot operate without leverage and immediately translates to cash flow crisis when sales slow." },
    ],
    assessment: {
      positives: ["중국 부동산 섹터의 과도한 레버리지 구조 해소 (정책 목적 달성)", "역외 달러채 투자자에게 중국 정책·법적 리스크의 현실적 인식 제고", "아시아 HY 시장의 중국 편중 리스크 해소 계기 — 장기적 시장 구조 개선", "글로벌 EM 채권 투자의 법적 집행 리스크 분석 강화 촉발"],
      positivesEn: ["Addressed excessive leverage in China's real estate sector (policy objective achieved)", "Raised realistic awareness of China's policy and legal risks for offshore dollar bond investors", "Catalyzed reduction of China concentration risk in Asian HY markets — long-term structural improvement", "Triggered stronger legal enforceability risk analysis in global EM bond investing"],
      risks: ["역외 달러채 채권자 2~30센트 회수율 — 투자자 신뢰 장기 훼손", "중국 법원과 홍콩 법원 간 협조 부재 — 역외 채권자 법적 권리 사실상 무력화", "선분양 모델 붕괴로 수백만 중국 소비자의 미인도 주택 피해 지속", "중국 부동산 시장 침체의 경제 전반 파급 — 소비 위축, 지방정부 토지수익 감소"],
      risksEn: ["Offshore dollar bond creditor recovery rates of 2–30 cents — long-term investor confidence damage", "Lack of cooperation between mainland and Hong Kong courts — offshore creditor legal rights effectively nullified", "Pre-sale model collapse causing ongoing harm to millions of Chinese consumers with undelivered homes", "Spillover of real estate market slump to the broader economy — consumer spending contraction, local government land revenue decline"],
    },
    faq: [
      { q: "Evergrande 청산 명령이 나왔는데 왜 실제로 청산이 안 되나요?", qEn: "A liquidation order was issued for Evergrande — why isn't actual liquidation happening?", a: "홍콩 법원이 2024년 1월 청산 명령을 내렸지만, 이를 집행하려면 중국 본토 법원의 협조가 필요합니다. 중국 본토에서는 별도의 구조조정 절차가 진행 중이며, 본토 법원은 홍콩 청산 명령을 공식 인정하지 않았습니다. 중국 역내 자산의 실질적 처분권이 본토 당국에 있기 때문에, 홍콩 청산인은 실질적인 자산 회수 수단이 없는 상황입니다.", aEn: "Hong Kong courts issued a liquidation order in January 2024, but enforcement requires cooperation from mainland Chinese courts. A separate restructuring process is proceeding on the mainland, and mainland courts have not officially recognized the Hong Kong liquidation order. Since actual disposition rights over mainland assets rest with mainland authorities, the Hong Kong liquidator has no practical asset recovery mechanism." },
      { q: "Country Garden과 Evergrande의 회수율이 차이나는 이유는요?", qEn: "Why do recovery rates differ between Country Garden and Evergrande?", a: "Country Garden은 디폴트 시 아직 건설 완료된 자산이 상당했고, 협상 능력이 남아있는 상태에서 채권자들과 교섭에 나섰습니다. 반면 Evergrande는 수년간의 과도한 레버리지와 자산 이전 논란 등으로 잔존 자산 가치가 훨씬 낮았습니다. 또한 Evergrande의 허자이 회장 체포 등 정치적 요인도 구조조정을 복잡하게 만들었습니다.", aEn: "Country Garden still had substantial completed assets at the time of default and entered creditor negotiations with some bargaining capacity remaining. Evergrande, in contrast, had far lower residual asset value due to years of excessive leverage and alleged asset transfer controversies. Additionally, political factors — including the arrest of Evergrande's Hui Ka Yan — further complicated the restructuring." },
      { q: "SOE 개발사들은 왜 지원받고 민영은 못 받았나요?", qEn: "Why did SOE developers receive support while private ones didn't?", a: "중국 정부의 암묵적 보증은 SOE에만 적용됩니다. 만약 민영 개발사도 모두 구제한다면 Three Red Lines 규제의 목적 자체가 무의미해지기 때문입니다. 정부는 민영 개발사의 과도한 레버리지 문제를 시장이 직접 해결하도록 방치했습니다. 다만 주택 미인도 문제가 심각해지자 '보교루(保交楼, 건설 완료 보장)' 프로그램 등 선별적 개입을 하기도 했습니다.", aEn: "China's implicit guarantee only applies to SOEs. If the government also rescued all private developers, it would make the Three Red Lines regulation itself meaningless. The government allowed the market to directly address private developers' excessive leverage. However, as the undelivered home problem became severe, selective interventions like the 'Bao Jiao Lou' (guarantee construction completion) program were implemented." },
      { q: "아시아 HY 시장에서 중국 부동산 비중이 왜 이렇게 높아졌나요?", qEn: "Why did Chinese real estate come to dominate the Asian HY market?", a: "2010년대 전반에 걸쳐 중국 부동산 개발사들은 국내 금융 규제를 피하기 위해 해외 달러채 시장을 적극 활용했습니다. 높은 쿠폰(8~12%)과 중국 성장 스토리에 글로벌 EM 투자자들이 몰렸고, 발행사도 늘었습니다. 그 결과 아시아 HY 인덱스의 40~50%가 중국 부동산으로 채워졌습니다. 이는 인덱스 투자자들에게 거의 자동으로 중국 부동산 리스크를 안겨주는 구조였습니다.", aEn: "Throughout the 2010s, Chinese real estate developers actively used overseas dollar bond markets to circumvent domestic financial regulations. Global EM investors were attracted by high coupons (8–12%) and the China growth story, and issuance grew. As a result, 40–50% of the Asian HY index was filled with Chinese real estate. This structure automatically loaded index investors with Chinese real estate risk." },
      { q: "지금 중국 부동산 시장은 회복됐나요?", qEn: "Has China's real estate market recovered now?", a: "2024년 말 기준 중국 부동산 시장은 여전히 부진한 상태입니다. 정부는 2024년 이후 LPR 인하, 다운페이먼트 요건 완화, 도시 재개발 프로그램 등 부양책을 내놓았지만, 소비자 심리 회복은 더딥니다. 역외 달러채 시장에서 중국 부동산 발행은 사실상 소멸했으며, 국유 개발사 중심으로 일부 발행이 유지되는 정도입니다.", aEn: "As of late 2024, China's real estate market remains subdued. The government has introduced stimulus measures since 2024 — LPR cuts, lower down payment requirements, urban redevelopment programs — but consumer sentiment recovery is slow. In the offshore dollar bond market, Chinese real estate issuance has virtually disappeared, with only limited issuance by SOE developers continuing." },
    ],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    references: [
      { id: 1, author: "S&P Global Ratings", title: "China Real Estate Default Tracker", source: "S&P Global Ratings", year: "2024", url: "https://www.spglobal.com/ratings/en/research/articles/210914-china-real-estate-credit-risks-rise-12106100" },
      { id: 2, author: "BIS", title: "The Evergrande Crisis and the Chinese Real Estate Sector", source: "BIS Working Paper 1032", year: "2022", url: "https://www.bis.org/publ/work1032.htm" },
      { id: 3, author: "IMF", title: "China: 2022 Article IV Consultation — Staff Report", source: "IMF Country Report", year: "2022", url: "https://www.imf.org/en/Publications/CR/Issues/2022/11/30/Peoples-Republic-of-China-2022-Article-IV-Consultation-526119" },
      { id: 4, author: "Guo, Y. & Lu, Y.", title: "China's Real Estate Crisis: Causes, Consequences, and Policy Options", source: "Brookings Institution", year: "2023", url: "https://www.brookings.edu/articles/chinas-real-estate-crisis/" },
    ],
  },

  // ── SVB 2023 ──────────────────────────────────────────────────────────────
  {
    slug: "svb-2023",
    title: "실리콘밸리뱅크(SVB) 붕괴 — 48시간의 ALM 실패",
    titleEn: "Silicon Valley Bank Collapse — 48 Hours of ALM Failure",
    category: "fig",
    categoryLabel: "FIG 드라마",
    categoryLabelEn: "FIG Drama",
    excerpt: "2023년 3월 Fed 금리 인상이 만들어낸 HTM 포트폴리오 폭탄. 94% 무보험 예금자, Twitter발 뱅크런, 48시간 만에 $2,090억 은행이 사라졌다.",
    excerptEn: "The HTM portfolio bomb created by Fed rate hikes in March 2023. 94% uninsured depositors, a Twitter-fueled bank run — a $209B bank gone in 48 hours.",
    dealYear: 2023,
    issuer: "Silicon Valley Bank (SVB)",
    issuerEn: "Silicon Valley Bank (SVB)",
    readingMinutes: 16,
    tags: ["ALM", "뱅크런", "HTM", "금리위기", "미국", "FDIC", "스타트업"],
    tagsEn: ["ALM", "Bank Run", "HTM", "Rate Crisis", "US", "FDIC", "Startups"],
    published: true,
    snapshot: [
      { labelKo: "은행 폐쇄일",        labelEn: "Closure Date",         value: "2023년 3월 10일", valueEn: "March 10, 2023" },
      { labelKo: "총 자산",             labelEn: "Total Assets",          value: "$2,090억", valueEn: "$209B" },
      { labelKo: "HTM 포트폴리오",      labelEn: "HTM Portfolio",         value: "$913억", valueEn: "$91.3B" },
      { labelKo: "미실현 손실 (HTM)",   labelEn: "Unrealized Loss (HTM)", value: "–$152억", valueEn: "–$15.2B" },
      { labelKo: "하루 인출 시도액",    labelEn: "Single-Day Run",        value: "$420억", valueEn: "$42B" },
      { labelKo: "무보험 예금 비율",    labelEn: "Uninsured Deposits",    value: "~94%" },
    ],
    sections: [],
    keyTerms: [
      {
        term: "HTM (만기보유 채권)",
        termEn: "HTM (Held-to-Maturity)",
        definition: "만기까지 보유할 의도로 분류한 채권. 시가평가 없이 상각원가로 계상 — 매각 시 손실이 한꺼번에 실현됨.",
        definitionEn: "Bonds classified as held-to-maturity, carried at amortized cost with no mark-to-market. When sold, all embedded losses are recognized at once.",
      },
      {
        term: "AFS (매도가능 채권)",
        termEn: "AFS (Available-for-Sale)",
        definition: "시가평가 손익이 기타포괄손익(OCI)에 반영. HTM 대비 유연하지만 자기자본 변동 노출.",
        definitionEn: "Fair-value changes flow through Other Comprehensive Income (OCI). More flexible than HTM but exposes book equity to rate moves.",
      },
      {
        term: "Duration (듀레이션)",
        termEn: "Duration",
        definition: "금리 1% 변화 시 채권 가격의 % 변화량. SVB HTM 포트폴리오 평균 듀레이션 약 5.6년.",
        definitionEn: "The % change in bond price for a 1% change in interest rates. SVB's HTM portfolio had ~5.6yr average duration.",
      },
      {
        term: "ALM (자산부채관리)",
        termEn: "ALM (Asset-Liability Management)",
        definition: "자산과 부채의 만기·금리 불일치를 관리하는 은행 핵심 리스크 기능.",
        definitionEn: "Core bank risk function managing maturity and rate mismatch between assets and liabilities.",
      },
      {
        term: "BTFP",
        termEn: "BTFP (Bank Term Funding Program)",
        definition: "Fed가 SVB 붕괴 직후 도입한 긴급 대출 창구. HTM 채권을 액면가로 담보 접수.",
        definitionEn: "Emergency Fed lending facility launched after SVB. Accepts HTM bonds at face value as collateral — absorbing unrealized losses instantly.",
      },
    ],
    relatedMarket101Slugs: ["alm", "spread-basis", "oas"],
    relatedDealSlugs: ["credit-suisse-at1"],
    executiveSummary: {
      ko: [
        "SVB는 팬데믹 유동성 급증으로 예금이 2배 늘자 장기 MBS·국채에 $1,000억 이상을 투자, 대부분을 HTM으로 분류해 평가손을 재무제표에서 숨겼다.",
        "Fed가 2022년 0.25%에서 5.25%로 금리를 올리자 HTM 포트폴리오에 $152억의 미실현 손실이 쌓였고, 이는 SVB 자기자본($163억)에 육박했다.",
        "2023년 3월 8일 AFS 포트폴리오 매각 $18억 손실 공시와 증자 계획 발표가 VC 네트워크·Twitter를 통해 순식간에 퍼졌다.",
        "3월 10일 하루에만 $420억의 인출이 몰리며 FDIC가 SVB를 폐쇄 — 미국 역사상 두 번째로 큰 은행 도산.",
        "Fed는 이틀 뒤 BTFP를 도입해 HTM 채권을 액면가로 담보 대출, 시스템 전반의 뱅크런 전염을 차단했다.",
      ],
      en: [
        "SVB's deposits doubled during the pandemic, so it deployed $100B+ into long-duration MBS and Treasuries — classifying most as HTM to hide fair-value losses from financial statements.",
        "As the Fed hiked rates from 0.25% to 5.25% in 2022, SVB's HTM portfolio accumulated $15.2B in unrealized losses — nearly equal to its $16.3B in equity.",
        "On March 8, SVB disclosed a $1.8B loss from selling its AFS portfolio and announced a capital raise. News spread instantly through VC networks and Twitter.",
        "On March 10, $42B in withdrawals were attempted in a single day, forcing the FDIC to seize SVB — the second-largest US bank failure in history.",
        "Two days later, the Fed launched BTFP, accepting HTM bonds at face value as collateral — stopping systemic contagion to other regional banks.",
      ],
    },
    assessment: {
      positives: [
        "FDIC·연준의 신속한 대응(BTFP)으로 예금자 전액 보호 및 시스템 전이 방지 성공 — 2008년식 도미노 붕괴 없었음.",
        "SVB 사태를 계기로 은행 HTM 포트폴리오·ALM에 대한 규제 감독이 대폭 강화됐다.",
        "VC·스타트업 생태계가 예금보험 한도와 금융 리스크 관리의 중요성을 실감하는 계기가 됐다.",
      ],
      positivesEn: [
        "Rapid FDIC/Fed BTFP response fully protected depositors and prevented systemic contagion — no 2008-style domino collapse.",
        "SVB triggered significantly strengthened regulatory scrutiny of bank HTM portfolios and ALM frameworks.",
        "The VC/startup ecosystem gained deep awareness of deposit insurance limits and financial risk management.",
      ],
      risks: [
        "BTFP의 '액면가 담보' 원칙이 향후 HTM 분류 남용에 대한 도덕적 해이를 심화시킬 수 있다.",
        "SNS 시대의 뱅크런은 기존 규제 프레임보다 수십 배 빠름 — 수 시간 내 대응 체계가 필요하나 규제가 이를 따라가지 못하고 있다.",
        "특정 산업·커뮤니티에 예금이 집중된 다른 중소형 은행들에 유사 리스크가 잠재해 있다.",
      ],
      risksEn: [
        "The BTFP's 'face value collateral' principle risks creating moral hazard encouraging aggressive future HTM classification.",
        "Social media bank runs move far faster than existing regulatory frameworks assumed — response systems need to operate in hours, not days.",
        "Other banks with similarly concentrated depositor bases face analogous latent risks.",
      ],
    },
    faq: [
      {
        q: "HTM 채권을 만기까지 보유하면 손실이 없는 거 아닌가요?",
        qEn: "If SVB held HTM bonds to maturity, wouldn't the losses disappear?",
        a: "이론적으로는 맞습니다. 하지만 SVB의 부채(예금)는 단기였고 자산(HTM 채권)은 장기였습니다. 예금 인출이 몰리자 채권을 만기 전에 팔 수밖에 없었고, 그 순간 HTM에 숨어 있던 $152억 손실이 한꺼번에 실현됐습니다. ALM의 핵심 교훈 — 자산을 만기까지 보유하려면 부채도 안정적이어야 합니다.",
        aEn: "Theoretically yes. But SVB's liabilities (deposits) were short-term while its assets (HTM bonds) were long-term. When withdrawals surged, bonds had to be sold before maturity — instantly crystallizing $15.2B in hidden losses. The core ALM lesson: you can only hold assets to maturity if your liabilities are equally stable.",
      },
      {
        q: "왜 SVB 경영진은 HTM 비율을 이렇게 높게 가져갔나요?",
        qEn: "Why did SVB management push HTM allocation so high?",
        a: "2021년 당시 컨센서스는 '금리는 오랫동안 낮을 것'이었습니다. HTM은 OCI 변동성을 제거해 자기자본을 안정적으로 보이게 하고 규제 자기자본 비율에도 유리했습니다. 리스크팀이 경고했지만 수익성 압박 속에 무시됐고, 금리 인상 시나리오에 대한 스트레스 테스트가 충분하지 않았다는 것이 이후 규제 당국의 지적이었습니다.",
        aEn: "In 2021, consensus was that rates would stay low for years. HTM eliminates OCI volatility and had regulatory capital advantages. Post-mortems suggest the risk team raised warnings but was overruled under profitability pressure. Regulators later criticized the lack of adequate stress testing for rate-hike scenarios.",
      },
      {
        q: "SVB 사태가 CS AT1 사태와 다른 점은 무엇인가요?",
        qEn: "How does SVB differ from the Credit Suisse AT1 event?",
        a: "SVB는 ALM 실패 — 금리 환경 변화가 방아쇠였습니다. CS AT1은 수년간 누적된 신용 손실과 경영 불신이 원인이었습니다. 결과도 다릅니다: SVB는 예금자 전액 보호(FDIC), 주주·채권자 손실. CS AT1은 주주보다 먼저 AT1 채권자가 100% 손실. 두 사건 모두 시장 예상보다 훨씬 빠르게 전개됐다는 공통점이 있습니다.",
        aEn: "SVB was an ALM failure triggered by the rate environment. CS AT1 resulted from years of accumulated credit losses and management distrust. The outcomes also differ: SVB's FDIC protected all depositors while shareholders lost; CS had AT1 holders take 100% losses before equity. Both events unfolded far faster than markets anticipated.",
      },
      {
        q: "BTFP는 구제금융인가요?",
        qEn: "Was BTFP a government bailout?",
        a: "기술적으로는 담보 대출입니다 — 은행이 HTM 채권을 맡기고 빌리는 구조로, 채권이 만기 상환되면 Fed 손실이 없습니다. 다만 '액면가' 담보 원칙은 사실상 시장 손실을 정부가 흡수하는 효과가 있어 간접 지원이라는 비판도 있습니다. SVB 자체는 구제받지 못하고 폐쇄됐으며, BTFP는 전이 방지가 목적이었습니다.",
        aEn: "Technically it's a collateralized lending facility — banks pledge HTM bonds and borrow against them; if bonds repay at par, the Fed takes no loss. However, the 'face value' collateral principle effectively absorbs market losses, which critics argue indirectly subsidizes bank shareholders. SVB itself was not bailed out — BTFP was designed to prevent contagion.",
      },
      {
        q: "이런 사태가 한국 은행에서도 일어날 수 있나요?",
        qEn: "Could something like this happen to Korean banks?",
        a: "한국 주요 은행들도 저금리 시기 매입한 국채의 HTM 미실현 손실이 있었지만, SVB와 달리 예금자 기반이 소매 중심으로 다각화돼 있고 HTM 비중이 총 자산 대비 절대적이지 않았습니다. SVB 사태 직후 금감원은 전 은행에 HTM 포트폴리오 점검을 지시했고, 정기 ALM 스트레스 테스트 체계도 작동하고 있었습니다.",
        aEn: "Major Korean banks also had unrealized HTM losses from bonds purchased during the low-rate era, but key differences apply: depositor bases are far more diversified toward retail, HTM concentrations were not as extreme, and the FSS conducted regular ALM stress tests. After SVB, the FSS ordered all banks to review their HTM portfolios.",
      },
    ],
    references: [
      {
        id: 1,
        author: "FDIC",
        title: "Review of the FDIC's Supervision of Silicon Valley Bank",
        source: "FDIC, April 2023",
        year: "2023",
        url: "https://www.fdic.gov/bank/individual/failed/silicon-valley-bank/svb-report.pdf",
      },
      {
        id: 2,
        author: "Board of Governors of the Federal Reserve System",
        title: "Review of the Federal Reserve's Supervision of Silicon Valley Bank",
        source: "Federal Reserve, April 2023",
        year: "2023",
        url: "https://www.federalreserve.gov/publications/files/svb-review-20230428.pdf",
      },
    ],
  },

  {
    slug: "abacus-2007-ac1",
    title: "Abacus 2007-AC1 — Goldman Sachs가 설계한 CDO 사기",
    titleEn: "Abacus 2007-AC1 — The Goldman Sachs CDO Fraud",
    category: "structure",
    categoryLabel: "구조화금융",
    categoryLabelEn: "Structured Finance",
    excerpt: "존 폴슨이 숏을 치기 위해 설계하고, Goldman이 팔고, IKB가 샀다. Big Short의 실제 주인공 딜 — SEC 역대 최대 합의금 $5억 5천만.",
    excerptEn: "Paulson designed it to short, Goldman sold it, IKB bought it. The real deal behind the Big Short — a $550M SEC settlement record.",
    dealYear: 2007,
    issuer: "Goldman Sachs",
    issuerEn: "Goldman Sachs",
    readingMinutes: 12,
    tags: ["CDO", "합성CDO", "Goldman Sachs", "SEC", "빅쇼트", "구조화금융"],
    tagsEn: ["CDO", "Synthetic CDO", "Goldman Sachs", "SEC", "Big Short", "Structured Finance"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Goldman Sachs (ACA Management)" },
      { labelKo: "발행연도", labelEn: "Year", value: "2007" },
      { labelKo: "발행규모", labelEn: "Size", value: "$2B (합성 노출)", valueEn: "$2B (synthetic exposure)" },
      { labelKo: "담보", labelEn: "Collateral", value: "90개 서브프라임 RMBS CDS", valueEn: "90 subprime RMBS CDS" },
      { labelKo: "포트폴리오 선정", labelEn: "Portfolio Selection", value: "Paulson & Co. (공개 안 됨)", valueEn: "Paulson & Co. (not disclosed)" },
      { labelKo: "투자자 손실", labelEn: "Investor Loss", value: "~$1B (IKB·ACA)" },
      { labelKo: "Paulson 수익", labelEn: "Paulson Gain", value: "~$1B" },
      { labelKo: "SEC 합의금", labelEn: "SEC Settlement", value: "$550M (2010)" },
    ],
    sections: [
      {
        heading: "딜의 탄생 — 폴슨의 아이디어",
        headingEn: "The Deal's Origin — Paulson's Idea",
        body:
`2006년 말, 존 폴슨(John Paulson)은 확신하고 있었다. 미국 서브프라임 주택담보대출 시장이 붕괴할 것이라고. 문제는 방법이었다. 개별 RMBS(주택담보대출 증권)를 직접 공매도하기엔 시장이 비효율적이었고, 거래 비용도 컸다.

폴슨의 팀은 Goldman Sachs에 제안했다: 우리가 공매도할 포트폴리오를 구성해달라. 구체적으로 — 가장 부실할 것 같은 90개 서브프라임 RMBS를 기초자산으로 하는 합성 CDO(Synthetic CDO)를 만들고, 우리는 CDS를 통해 그 포트폴리오에 숏 포지션을 취할 것이다.

Goldman은 이 아이디어를 사업으로 만들었다. ACA Management라는 CDO 매니저를 고용해 포트폴리오 선정을 맡겼다. 그러나 ACA에게 결정적 사실을 알리지 않았다: 실제 포트폴리오 구성을 가장 큰 영향력으로 주도한 것은 폴슨이었고, 폴슨은 이 딜에서 숏 포지션을 취할 계획이라는 것.

2007년 4월, Abacus 2007-AC1이 발행됐다.`,
        bodyEn:
`In late 2006, John Paulson was convinced: the US subprime mortgage market would collapse. The problem was how. Short-selling individual RMBS securities was market-inefficient and costly.

Paulson's team approached Goldman Sachs with a proposal: build us a portfolio to short. Specifically — create a synthetic CDO referencing 90 subprime RMBS securities most likely to fail, and we'll take a short position via CDS on that portfolio.

Goldman turned this idea into a business. It hired ACA Management as the CDO manager to handle portfolio selection. But it failed to disclose a critical fact to ACA: the entity that had the most influence on the actual portfolio composition was Paulson, who planned to take a short position on this deal.

In April 2007, Abacus 2007-AC1 was issued.`,
      },
      {
        heading: "합성 CDO의 구조 — 어떻게 $2B 노출이 만들어졌나",
        headingEn: "The Synthetic CDO Structure — How $2B of Exposure Was Created",
        body:
`Abacus 2007-AC1은 '합성' CDO였다. 실제 RMBS를 보유하지 않고, 신용부도스왑(CDS)을 통해 90개 서브프라임 RMBS에 대한 합성 노출만 취했다.

구조: Goldman이 SPV를 설립 → SPV가 CDS 계약의 '보장 매도자(Protection Seller)' 역할 → 폴슨은 '보장 매수자(Protection Buyer)' → RMBS가 부도나면 폴슨이 SPV로부터 보상 수취.

투자자(IKB Deutsche Industriebank, ACA Financial Guaranty 등)는 이 SPV에 투자 → 실질적으로 해당 RMBS 포트폴리오에 롱 포지션 취득. 만약 RMBS들이 잘 버티면 투자자는 스프레드를 받지만, RMBS가 부도나면 투자자 원금에서 손실이 난다.

폴슨은 포트폴리오 선정에 깊이 관여하면서 가장 부실한 RMBS를 골랐다. 동시에 Goldman에게 이 정보를 다른 투자자에게 공개하지 말아달라고 했다. Goldman은 이를 수용했다. ACA는 자신이 '롱 포지션을 취하는 독립적 매니저'라고 믿었다.`,
        bodyEn:
`Abacus 2007-AC1 was a 'synthetic' CDO. Rather than holding actual RMBS securities, it created synthetic exposure to 90 subprime RMBS through credit default swaps (CDS).

Structure: Goldman established an SPV → the SPV acted as 'protection seller' under CDS contracts → Paulson was the 'protection buyer' → if RMBS defaulted, Paulson received payment from the SPV.

Investors (IKB Deutsche Industriebank, ACA Financial Guaranty, etc.) invested in this SPV → effectively taking a long position on those RMBS securities. If RMBS held up, investors received spread income; if RMBS defaulted, investors lost principal.

Paulson was deeply involved in portfolio selection, handpicking the most likely-to-fail RMBS. Simultaneously, he asked Goldman not to disclose this to other investors. Goldman complied. ACA believed it was acting as an 'independent manager taking a long position.'`,
      },
      {
        heading: "붕괴 — 9개월 만에 99% 손실",
        headingEn: "The Collapse — 99% Loss in 9 Months",
        body:
`2007년 4월 발행 이후 9개월이 지난 2008년 1월, Abacus 2007-AC1의 기초자산인 90개 서브프라임 RMBS 포트폴리오 99% 이상이 부도 또는 등급 강등됐다.

IKB는 약 $1억 5천만, ACA Financial Guaranty는 약 $9억 이상의 손실을 봤다. 두 기관 합산 약 $1B+ 손실. 반면 폴슨 앤 컴퍼니는 이 딜에서만 약 $1B의 수익을 거뒀다. 폴슨의 2007년 전체 수익은 약 $37억 달러에 달했다.

Goldman도 이 딜에서 일부 롱 포지션을 취했고 약 $9,000만의 손실을 봤다. 그러나 Goldman은 전체적으로는 이 시기 서브프라임에 숏 포지션을 유지해 수익을 냈다.

핵심 문제: 투자자들은 포트폴리오 선정자가 숏 포지션을 취할 예정이었다는 사실을 몰랐다. 이것이 SEC 소송의 핵심이었다.`,
        bodyEn:
`Nine months after the April 2007 issuance, by January 2008, more than 99% of the 90 subprime RMBS portfolio underlying Abacus 2007-AC1 had defaulted or been severely downgraded.

IKB lost approximately $150M; ACA Financial Guaranty lost over $900M. Combined investor losses exceeded $1B. Meanwhile, Paulson & Co. earned approximately $1B from this deal alone. Paulson's total 2007 profits reached approximately $3.7B.

Goldman also held some long positions and lost around $90M on this deal. However, Goldman maintained net short positions in subprime overall and was profitable during this period.

The core problem: investors had no idea that the entity selecting the portfolio planned to short it. This was the crux of the SEC's case.`,
      },
      {
        heading: "SEC 소송 — 역사적 합의",
        headingEn: "SEC Lawsuit — Historic Settlement",
        body:
`2010년 4월, SEC는 Goldman Sachs를 증권 사기 혐의로 기소했다. 핵심 주장: Goldman이 Abacus 딜 마케팅 자료에서 "폴슨이 포트폴리오 선정에 관여했고 숏 포지션을 취할 예정"이라는 사실을 누락해 투자자를 오도했다.

Goldman의 입장: "폴슨이 숏 포지션을 취한다는 사실을 공개할 법적 의무가 없었다. ACA가 독립적으로 포트폴리오를 검토하고 승인했다."

2010년 7월, Goldman은 $5억 5천만 합의금을 내고 사건을 종결했다. 이는 당시 SEC 역사상 최대 규모의 증권 사기 합의금이었다. Goldman은 "마케팅 자료에 중요한 정보가 불충분하게 반영됐다"고 인정했으나, 의도적 사기는 부인했다.

폴슨은 기소되지 않았다. 법적으로 투자자에 대한 의무가 없는 거래 상대방이었기 때문이다.

이 사건은 구조화금융에서 '이해충돌 공시'가 얼마나 중요한지를 각인시켰고, 이후 금융규제 강화 논의의 핵심 사례가 됐다.`,
        bodyEn:
`In April 2010, the SEC charged Goldman Sachs with securities fraud. The core allegation: Goldman had misled investors by omitting from Abacus marketing materials the fact that Paulson had been involved in portfolio selection and intended to take a short position.

Goldman's position: "There was no legal obligation to disclose that Paulson would take a short position. ACA independently reviewed and approved the portfolio."

In July 2010, Goldman settled for $550M — at the time, the largest securities fraud settlement in SEC history. Goldman admitted that marketing materials "contained incomplete information" but denied intentional fraud.

Paulson was not charged. As a counterparty, he owed no legal duty to the investors.

This case underscored how critical 'conflict of interest disclosure' is in structured finance, and became a centerpiece of post-crisis financial regulatory reform discussions.`,
      },
      {
        heading: "교훈 — CDO 구조의 근본적 취약점",
        headingEn: "Lessons — Fundamental Vulnerabilities of CDO Structures",
        body:
`Abacus 2007-AC1은 구조화금융의 세 가지 근본적 취약점을 동시에 보여준다.

첫째, 정보 비대칭: 복잡한 구조는 정보 격차를 만든다. 폴슨이 포트폴리오를 설계했다는 사실을 투자자가 알았다면 투자했겠는가? 구조가 복잡할수록 정보 비대칭 리스크는 커진다.

둘째, 등급의 한계: AAA 등급이 부여된 트랑쉐도 9개월 만에 전손이 났다. 등급 모델이 서브프라임 모기지 간의 높은 상관관계를 반영하지 못했다. "등급은 구조를 평가하지, 의도를 평가하지 않는다."

셋째, 인센티브 정렬 실패: Goldman은 이 딜을 팔면서 수수료를 받았다. 폴슨은 딜 설계에서 이익을 얻었다. 투자자만 정보 없이 리스크를 안았다. 이해충돌이 구조 전체에 내재되어 있었다.

Big Short의 마이클 버리, 폴슨, 스티브 아이스먼이 주목한 것은 단순히 '주택 가격이 하락한다'가 아니었다. 그들은 '이 구조 자체가 부패했다'는 것을 알아챈 것이다.`,
        bodyEn:
`Abacus 2007-AC1 simultaneously demonstrates three fundamental vulnerabilities of structured finance.

First, information asymmetry: complexity creates information gaps. If investors had known Paulson designed the portfolio, would they have invested? The more complex the structure, the greater the information asymmetry risk.

Second, ratings limitations: even AAA-rated tranches suffered total loss in nine months. Rating models failed to capture the high correlation between subprime mortgages. "Ratings evaluate structure, not intent."

Third, incentive misalignment failure: Goldman earned fees from selling the deal. Paulson profited from designing it. Only investors bore the risk without full information. Conflicts of interest were embedded throughout the structure.

What Michael Burry, Paulson, and Steve Eisman in The Big Short recognized was not simply 'housing prices will fall.' They identified that 'the structure itself was corrupt.'`,
      },
    ],
    keyTerms: [
      {
        term: "합성 CDO (Synthetic CDO)",
        termEn: "Synthetic CDO",
        definition: "실제 자산을 보유하지 않고 신용부도스왑(CDS)을 통해 특정 자산 포트폴리오에 대한 합성 노출만 취하는 CDO. 실물 자산 매입 없이 대규모 신용 포지션 구축 가능. 레버리지 효과가 매우 크고 투명성이 낮다. Abacus 2007-AC1이 대표적 사례로, 실제 RMBS 없이 CDS로만 $2B 노출을 만들었다.",
        definitionEn: "A CDO that creates synthetic exposure to a specific asset portfolio via credit default swaps (CDS) without holding actual assets. Enables construction of large credit positions without physical asset purchases. Highly leveraged with low transparency. Abacus 2007-AC1 is the canonical example — $2B of exposure created entirely through CDS with no actual RMBS holdings.",
      },
      {
        term: "이해충돌 공시 (Conflict of Interest Disclosure)",
        termEn: "Conflict of Interest Disclosure",
        definition: "금융 거래에서 한 당사자가 다른 당사자와 상충되는 이해관계를 가질 때 이를 공개할 의무. Abacus 딜에서 Goldman은 포트폴리오 선정에 관여한 폴슨이 숏 포지션을 취할 예정이라는 사실을 공개하지 않았다. SEC는 이를 증권법 위반으로 판단해 $550M 합의를 이끌어냈다. 이후 구조화금융 규제에서 이해충돌 공시 요건이 강화됐다.",
        definitionEn: "The obligation to disclose when one party in a financial transaction has interests that conflict with another party. In the Abacus deal, Goldman failed to disclose that Paulson — who influenced portfolio selection — intended to take a short position. The SEC ruled this violated securities law, resulting in a $550M settlement. Post-crisis structured finance regulations significantly strengthened conflict of interest disclosure requirements.",
      },
      {
        term: "CDS (신용부도스왑)",
        termEn: "CDS (Credit Default Swap)",
        definition: "특정 준거 자산(채권, 대출 등)의 신용사건(부도, 등급 강등 등) 발생 시 보장 매도자가 보장 매수자에게 손실을 보상하는 파생상품. 보장 매수자는 정기적으로 프리미엄을 지급한다. CDS를 통해 실제 자산 없이 신용 포지션 구축 가능. Abacus 딜에서 폴슨은 보장 매수자(숏 포지션), 투자자들은 실질적 보장 매도자(롱 포지션) 역할을 했다.",
        definitionEn: "A derivative where the protection seller compensates the protection buyer for losses if a credit event (default, downgrade, etc.) occurs on a reference asset (bond, loan, etc.). The protection buyer pays periodic premiums. CDS enables construction of credit positions without holding actual assets. In the Abacus deal, Paulson was the protection buyer (short), while investors effectively acted as protection sellers (long).",
      },
      {
        term: "빅쇼트 트레이드 (The Big Short)",
        termEn: "The Big Short Trade",
        definition: "2006~2008년 일부 헤지펀드 매니저들(마이클 버리, 존 폴슨, 스티브 아이스먼 등)이 서브프라임 RMBS와 CDO에 대한 CDS를 매입해 서브프라임 시장 붕괴에 베팅한 거래. 이들은 시장이 과소 평가한 RMBS 부실화 리스크와 CDO 구조의 취약성을 먼저 인식했다. Abacus 딜은 폴슨이 이 전략을 실행한 대표적 수단이었다.",
        definitionEn: "Trades executed in 2006–2008 by certain hedge fund managers (Michael Burry, John Paulson, Steve Eisman, etc.) who purchased CDS on subprime RMBS and CDOs, betting on the collapse of the subprime market. They recognized before the market the underestimated risk of RMBS deterioration and structural vulnerabilities in CDOs. The Abacus deal was a key vehicle through which Paulson executed this strategy.",
      },
    ],
    relatedMarket101Slugs: ["structured-cdo", "structured-overview", "structured-cases"],
    relatedDealSlugs: ["bowie-bonds", "svb-2023"],
    executiveSummary: {
      ko: [
        "2007년 Goldman Sachs가 발행한 합성 CDO — 폴슨이 숏 포지션을 위해 포트폴리오를 설계하고 Goldman이 투자자에게 판매",
        "9개월 만에 기초자산 99% 이상 부실화 → 투자자 약 $1B 손실, 폴슨 약 $1B 수익",
        "2010년 SEC 소송 → Goldman $550M 합의 (당시 SEC 역대 최대), 마케팅 자료의 '불충분한 정보' 인정",
        "폴슨은 기소되지 않음 — 투자자에 대한 법적 의무 없는 거래 상대방",
        "교훈: 구조의 복잡성이 정보 비대칭을 만들고, 이해충돌 공시 실패가 시스템 리스크로 연결된다",
      ],
      en: [
        "Goldman Sachs-issued synthetic CDO in 2007 — Paulson designed the portfolio for a short position; Goldman sold it to investors",
        "99%+ of underlying assets impaired within 9 months → ~$1B investor losses, ~$1B Paulson profit",
        "2010 SEC lawsuit → $550M Goldman settlement (record at the time), acknowledgment of 'incomplete information' in marketing materials",
        "Paulson not charged — counterparty with no legal duty to investors",
        "Lesson: structural complexity creates information asymmetry; conflict of interest disclosure failures lead to systemic risk",
      ],
    },
    assessment: {
      positives: [
        "구조적으로는 합성 CDO 메커니즘이 의도대로 작동 — CDS 계약 이행, SPV 구조 유지",
        "시장 비효율성 발견: 폴슨·버리 등이 시장이 과소평가한 위험을 인식한 것은 정보 우위의 결과",
        "규제 개선 촉진: Abacus 사건은 Dodd-Frank Act 제941조 (ABS 발행자 리스크 보유 의무) 등 구조화금융 규제 강화로 이어짐",
      ],
      positivesEn: [
        "Structurally, the synthetic CDO mechanism worked as intended — CDS contracts honored, SPV structure maintained",
        "Market inefficiency discovery: Paulson and Burry recognizing underpriced risk was the result of genuine information advantage",
        "Regulatory improvement: The Abacus case contributed to Dodd-Frank Act Section 941 (ABS issuer risk retention requirements) and broader structured finance reform",
      ],
      risks: [
        "정보 비대칭 고의적 활용: 포트폴리오 설계자의 숏 포지션을 투자자에게 공개하지 않은 것은 윤리적으로도 문제",
        "등급의 실패: AAA 등급 트랑쉐가 9개월 만에 전손 — 신용평가 모델의 상관관계 가정 붕괴",
        "시스템적 함의: Abacus 류의 합성 CDO가 실물 경제와 무관한 거대 리스크 포지션을 만들어 금융 위기를 증폭",
        "교훈 미흡: 2010년 이후에도 유사한 구조가 변형된 형태로 계속 활용됨",
      ],
      risksEn: [
        "Deliberate exploitation of information asymmetry: failing to disclose the portfolio designer's short position to investors was ethically problematic",
        "Rating failure: AAA-rated tranches suffered total loss in nine months — correlation assumption breakdown in credit rating models",
        "Systemic implications: synthetic CDOs like Abacus created massive risk positions disconnected from real economic activity, amplifying the financial crisis",
        "Incomplete lesson: similar structures continued to be used in modified forms post-2010",
      ],
    },
    faq: [
      {
        q: "폴슨은 왜 기소되지 않았나요?",
        qEn: "Why wasn't Paulson charged?",
        a: "폴슨은 투자자에 대한 법적 공시 의무가 없는 '거래 상대방'이었기 때문입니다. SEC의 주장은 Goldman이 마케팅 자료에서 중요 정보를 누락해 투자자를 오도했다는 것이었지, 폴슨이 허위 진술을 했다는 것이 아니었습니다. 폴슨은 공개적으로 숏 포지션을 취하는 거래 상대방이었고, 그 사실이 Goldman에게만 알려졌을 뿐입니다. 금융 시장에서 거래 상대방이 반대 포지션을 취하는 것 자체는 불법이 아닙니다.",
        aEn: "Paulson was a 'counterparty' with no legal disclosure obligation to investors. The SEC's allegation was that Goldman misled investors by omitting material information from marketing materials — not that Paulson made false statements. Paulson was a counterparty openly taking a short position, a fact known only to Goldman. Taking an opposing position as a counterparty in financial markets is not itself illegal.",
      },
      {
        q: "Goldman이 마케팅 자료에 뭘 안 썼나요?",
        qEn: "What did Goldman omit from marketing materials?",
        a: "핵심 누락 내용: (1) Paulson & Co.가 포트폴리오 선정에 실질적으로 관여했다는 사실, (2) Paulson이 최종적으로 해당 포트폴리오에 대한 숏 포지션(CDS 보장 매수)을 취할 것이라는 사실. Goldman의 마케팅 자료는 ACA Management가 '독립적인 포트폴리오 매니저'라고 표현했지만, 실제로는 폴슨의 영향력이 상당했습니다. SEC는 투자자들이 이 사실을 알았다면 투자 결정이 달랐을 것이라고 주장했습니다.",
        aEn: "The key omissions: (1) that Paulson & Co. had materially influenced the portfolio selection process; (2) that Paulson intended to take a short position (buy CDS protection) on the resulting portfolio. Goldman's marketing materials described ACA Management as an 'independent portfolio manager,' while in reality Paulson's influence was substantial. The SEC argued that investors would have made different investment decisions had they known this.",
      },
      {
        q: "합성 CDO가 실제 CDO보다 위험한 이유는 무엇인가요?",
        qEn: "Why is a synthetic CDO more dangerous than a cash CDO?",
        a: "세 가지 이유입니다. 첫째, 레버리지: 합성 CDO는 실물 자산 없이 CDS만으로 무제한의 포지션을 만들 수 있습니다. 서브프라임 위기 당시 실물 모기지 총액보다 훨씬 큰 규모의 합성 CDO가 발행됐습니다. 둘째, 투명성: 실물 RMBS는 보고 분석이 가능하지만, CDS 기반 합성 노출은 파악이 어렵습니다. 셋째, 인센티브: 합성 CDO 발행자(Goldman)는 기초자산을 실제 보유하지 않으므로 자산 품질에 대한 직접 인센티브가 없습니다.",
        aEn: "Three reasons. First, leverage: synthetic CDOs can create unlimited positions using only CDS, without physical assets. During the subprime crisis, the notional value of synthetic CDOs issued far exceeded the total outstanding subprime mortgages. Second, transparency: actual RMBS can be examined and analyzed; synthetic CDS-based exposure is difficult to track. Third, incentives: synthetic CDO issuers (Goldman) don't hold the underlying assets, removing direct incentives to care about asset quality.",
      },
    ],
    references: [
      { id: 1, author: "SEC", title: "SEC v. Goldman, Sachs & Co. — Litigation Release", source: "U.S. Securities and Exchange Commission", year: "2010", url: "https://www.sec.gov/litigation/complaints/2010/comp21489.pdf" },
      { id: 2, author: "Lewis, Michael", title: "The Big Short: Inside the Doomsday Machine", source: "W. W. Norton & Company", year: "2010" },
      { id: 3, author: "FCIC", title: "Financial Crisis Inquiry Commission Final Report", source: "U.S. Government", year: "2011", url: "https://fcic.law.stanford.edu/" },
    ],
  },

  {
    slug: "hertz-fleet-abs-2020",
    title: "Hertz Fleet ABS (2020) — 파산해도 AAA는 살아남는다",
    titleEn: "Hertz Fleet ABS (2020) — AAA Survives Bankruptcy",
    category: "structure",
    categoryLabel: "구조화금융",
    categoryLabelEn: "Structured Finance",
    excerpt: "렌터카 1위 Hertz가 코로나로 파산했다. 하지만 차량 담보 ABS AAA 투자자들은 전액 회수했다. True Sale과 파산 격리의 실전 증명.",
    excerptEn: "Hertz, the #1 car rental company, went bankrupt due to COVID. But AAA investors in its fleet ABS were fully repaid. True Sale and bankruptcy remoteness proven in practice.",
    dealYear: 2020,
    issuer: "Hertz Global Holdings",
    issuerEn: "Hertz Global Holdings",
    readingMinutes: 10,
    tags: ["ABS", "파산격리", "True Sale", "자동차ABS", "COVID", "구조화금융"],
    tagsEn: ["ABS", "Bankruptcy Remoteness", "True Sale", "Auto ABS", "COVID", "Structured Finance"],
    published: true,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Hertz Vehicle Financing LLC (SPV)" },
      { labelKo: "파산 신청", labelEn: "Bankruptcy Filing", value: "2020년 5월 22일", valueEn: "May 22, 2020" },
      { labelKo: "ABS 잔액", labelEn: "ABS Outstanding", value: "~$14B (파산 시점)", valueEn: "~$14B (at bankruptcy)" },
      { labelKo: "기초자산", labelEn: "Collateral", value: "약 50만 대 렌터카 차량", valueEn: "~500,000 rental cars" },
      { labelKo: "AAA 투자자 결과", labelEn: "AAA Investor Outcome", value: "전액 회수", valueEn: "Full recovery" },
      { labelKo: "차량 담보 회수율", labelEn: "Vehicle Recovery Rate", value: "~90%+ (예상 대비 양호)", valueEn: "~90%+ (better than expected)" },
      { labelKo: "파산 종결", labelEn: "Bankruptcy Exit", value: "2021년 6월 (재건)", valueEn: "June 2021 (reorganized)" },
    ],
    sections: [
      {
        heading: "Hertz의 위기 — 하룻밤 사이 여행 수요 제로",
        headingEn: "Hertz's Crisis — Travel Demand to Zero Overnight",
        body:
`2020년 3월, COVID-19가 전 세계 여행을 멈췄다. 미국 최대 렌터카 기업 중 하나인 Hertz Global Holdings에게 이것은 곧 수익 제로를 의미했다. 렌터카 수익은 하루아침에 증발했지만, 차량 리스 비용, ABS 쿠폰 지급, 유지비는 계속됐다.

Hertz는 $190억의 부채를 안고 있었다. 이 중 약 $140억이 차량 구매를 위해 조달한 ABS였다. 2020년 5월 22일, Hertz는 델라웨어 파산법원에 챕터 11 파산보호를 신청했다. 100년 역사의 자동차 렌탈 기업의 파산이었다.

시장 충격: Hertz 파산 소식에 ABS 투자자들은 패닉에 빠졌다. $140억 규모의 ABS는 어떻게 될 것인가? 하지만 그 답은 구조화금융의 교과서에 이미 있었다.`,
        bodyEn:
`In March 2020, COVID-19 brought global travel to a halt. For Hertz Global Holdings, one of America's largest car rental companies, this meant revenue effectively went to zero. Car rental income evaporated overnight, but vehicle lease costs, ABS coupon payments, and maintenance continued.

Hertz carried $19B in debt. Of this, approximately $14B was ABS issued to finance vehicle purchases. On May 22, 2020, Hertz filed for Chapter 11 bankruptcy protection in Delaware. The century-old car rental giant had fallen.

Market shock: investors in Hertz ABS panicked at the bankruptcy news. What would happen to $14B of ABS? But the answer was already written in the structured finance textbook.`,
      },
      {
        heading: "SPV 구조가 어떻게 투자자를 보호했나",
        headingEn: "How the SPV Structure Protected Investors",
        body:
`Hertz의 차량들은 Hertz Vehicle Financing LLC라는 SPV(특수목적법인)에 소유권이 있었다. Hertz Global Holdings는 이 SPV에 차량을 'True Sale' 방식으로 이전하고, SPV가 ABS를 발행해 자금을 조달했다.

파산 시 결정적 질문: Hertz Global Holdings가 파산해도 SPV의 자산(약 50만 대 차량)은 파산 재단(bankruptcy estate)에 속하는가?

법원의 판단: No. SPV의 차량은 Hertz Global Holdings의 파산 재단에 속하지 않는다. True Sale이 성립됐기 때문이다. SPV의 차량들은 독립적으로 청산 또는 관리될 수 있다.

실제 전개: 파산 법원은 SPV가 계속해서 ABS 계약에 따라 운영되도록 허용했다. 렌터카 사업이 재개되면서 차량들은 계속 수익을 창출했고, 일부는 중고차 시장에 매각됐다. 2021년 중고차 가격은 반도체 부족으로 오히려 급등했다 — Hertz ABS 투자자들에게 예상치 못한 호재.`,
        bodyEn:
`Hertz's vehicles were owned by Hertz Vehicle Financing LLC, an SPV. Hertz Global Holdings had transferred the vehicles to this SPV via True Sale, with the SPV issuing ABS to raise funds.

The critical bankruptcy question: if Hertz Global Holdings goes bankrupt, do the SPV's assets (approximately 500,000 vehicles) belong to the bankruptcy estate?

Court's answer: No. The SPV's vehicles do not belong to Hertz Global Holdings' bankruptcy estate. True Sale was established. The SPV's vehicles could be independently liquidated or managed.

Actual outcome: the bankruptcy court allowed the SPV to continue operating under the ABS agreements. As rental operations resumed, vehicles continued generating revenue; some were sold in used car markets. Used car prices surged in 2021 due to semiconductor shortages — an unexpected positive for Hertz ABS investors.`,
      },
      {
        heading: "트랑쉐별 성과 — 워터폴이 작동했다",
        headingEn: "Tranche Performance — The Waterfall Worked",
        body:
`Hertz의 ABS는 전통적인 선순위-후순위 워터폴 구조로 설계됐다.

AAA 선순위 트랑쉐: 전액 회수. 파산 중에도 쿠폰 지급이 일시 지연된 경우가 있었지만, 최종적으로 원금과 이자 모두 회수됐다. 파산 격리 구조가 제 역할을 했다.

AA/A 트랑쉐: 전액 또는 거의 전액 회수. 차량 가치가 예상보다 잘 유지됐고, 2021년 중고차 가격 급등이 추가 완충 역할을 했다.

BBB/BB 메자닌 트랑쉐: 일부 손실이 발생했다. 파산 절차 비용, ABS 구조 재조정 과정에서 메자닌 투자자들은 일정 할인을 수용해야 했다.

에쿼티 트랑쉐(Hertz 보유): 파산 과정에서 실질적으로 무가치화됐다. Hertz 모회사가 부담한 손실이 에쿼티 트랑쉐로 집중됐다.

결론: 워터폴은 설계대로 작동했다. 최악의 시나리오(파산)에서도 선순위 투자자는 보호받았다.`,
        bodyEn:
`Hertz's ABS was structured with a traditional senior-subordinate waterfall.

AAA senior tranches: fully repaid. While coupon payments were temporarily delayed during bankruptcy, principal and interest were ultimately fully recovered. Bankruptcy isolation worked as designed.

AA/A tranches: fully or nearly fully repaid. Vehicle values held better than expected, and the 2021 used car price surge provided additional cushion.

BBB/BB mezzanine tranches: some losses occurred. Through bankruptcy proceedings and ABS restructuring, mezzanine investors had to accept certain discounts.

Equity tranche (held by Hertz): effectively worthless during bankruptcy proceedings. Losses concentrated in the equity tranche as designed.

Conclusion: the waterfall worked as intended. Even in the worst-case scenario (bankruptcy), senior investors were protected.`,
      },
      {
        heading: "역설 — 파산 후 Hertz 주가 폭등",
        headingEn: "The Paradox — Hertz Stock Soared After Bankruptcy",
        body:
`Hertz 파산에는 이상한 에피소드가 하나 있다. 2020년 5월 파산 신청 후, 소액 투자자들이 대거 몰리면서 Hertz 주식 가격이 폭등했다. 무가치한 주식에 투자하는 '밈 주식' 현상이었다.

Hertz는 심지어 파산 법원으로부터 신규 주식 공모(파산 중 신주 발행)를 승인받으려 했다 — 법원은 투자자들에게 파산 주식의 위험을 고지하는 조건으로 이를 허용했다. 주가가 다시 빠지면서 이 계획은 철회됐다.

ABS 투자자들의 관점에서 이 사건은 또 다른 교훈을 준다: 파산 중에도 ABS SPV는 Hertz 모기업과 분리되어 있었다. 주가가 오르든 내리든 ABS 투자자의 손익은 차량 가치에만 연동됐다. 진정한 파산 격리의 증명이었다.`,
        bodyEn:
`Hertz's bankruptcy had a strange episode. After the May 2020 bankruptcy filing, retail investors piled in and Hertz stock price surged — a 'meme stock' phenomenon investing in worthless shares.

Hertz even sought bankruptcy court approval for a new equity offering (issuing new shares while in bankruptcy) — the court allowed it with the condition that investors be warned of the risks of bankrupt stock. The plan was withdrawn as the price fell again.

From ABS investors' perspective, this episode offers another lesson: throughout the bankruptcy, the ABS SPV remained separated from the Hertz parent company. Whether the stock rose or fell, ABS investor returns were tied solely to vehicle values. A true demonstration of bankruptcy remoteness.`,
      },
      {
        heading: "구조화금융의 교훈 — True Sale은 이론이 아니다",
        headingEn: "Structured Finance Lesson — True Sale Is Not Theoretical",
        body:
`Hertz 사건은 구조화금융의 핵심 원리가 실전에서 어떻게 작동하는지를 명확히 보여준다.

파산 격리(Bankruptcy Remoteness): SPV에 이전된 자산은 오리지네이터 파산과 법적으로 분리된다는 원칙이 $140억 규모의 실전에서 검증됐다. 이것은 이론이 아니다.

워터폴의 실효성: AAA 트랑쉐가 BBB 트랑쉐보다 먼저, 더 많이 회수된다는 워터폴 원리가 Hertz 케이스에서 그대로 재현됐다.

담보 자산의 중요성: 차량이라는 실물 자산이 담보였기 때문에 가능했다. 차량은 결국 팔 수 있는 물건이다. 중고차 시장이 존재하는 한, 자동차 ABS는 최후의 방어선이 있다.

COVID 이후 ABS 시장: Hertz 사건은 ABS 구조의 견고성을 재확인시켰다. 2020~2021년 코로나 충격에도 자동차·카드·학자금 ABS의 AAA 트랑쉐는 대부분 무손실을 기록했다.`,
        bodyEn:
`The Hertz case clearly demonstrates how the core principles of structured finance work in practice.

Bankruptcy Remoteness: the principle that assets transferred to an SPV are legally separated from the originator's bankruptcy was validated at $14B scale. This is not theoretical.

Waterfall effectiveness: the principle that AAA tranches recover before and more than BBB tranches was replicated exactly in the Hertz case.

Importance of collateral assets: the physical asset collateral — vehicles — made this possible. Vehicles can ultimately be sold. As long as a used car market exists, auto ABS has a last line of defense.

Post-COVID ABS market: the Hertz case reconfirmed the robustness of ABS structures. Through the 2020–2021 COVID shock, AAA tranches of auto, card, and student loan ABS largely suffered no losses.`,
      },
    ],
    keyTerms: [
      {
        term: "파산 격리 (Bankruptcy Remoteness)",
        termEn: "Bankruptcy Remoteness",
        definition: "SPV에 True Sale로 이전된 자산이 오리지네이터(발행사)의 파산 절차와 법적으로 분리되는 성질. 파산 법원은 해당 자산을 파산 재단의 일부로 취급하지 않는다. Hertz 케이스에서 Hertz Global Holdings가 파산해도 SPV인 Hertz Vehicle Financing LLC의 차량들이 보호된 것이 파산 격리의 실전 사례다. ABS 구조의 가장 핵심적인 법적 보호 장치.",
        definitionEn: "The property by which assets transferred via True Sale to an SPV are legally separated from the originator's bankruptcy proceedings. Bankruptcy courts treat such assets as outside the bankruptcy estate. Hertz Vehicle Financing LLC's vehicles being protected even as Hertz Global Holdings went bankrupt is the definitive real-world example of bankruptcy remoteness — the most fundamental legal protection mechanism in ABS structures.",
      },
      {
        term: "챕터 11 파산 (Chapter 11 Bankruptcy)",
        termEn: "Chapter 11 Bankruptcy",
        definition: "미국 파산법 제11장에 따른 기업 재건 절차. 청산이 아닌 사업 계속 운영을 전제로 채권자·투자자와의 협상을 통해 부채를 재조정한다. ABS 오리지네이터가 챕터 11을 신청해도 True Sale이 성립된 SPV 자산은 이 절차의 영향을 받지 않는다 — 이것이 ABS 구조의 핵심 설계 원리다. Hertz는 2020년 5월 챕터 11을 신청하고 2021년 6월 재건에 성공했다.",
        definitionEn: "Corporate reorganization proceedings under Chapter 11 of the US Bankruptcy Code. Rather than liquidation, the company continues operations while restructuring debt through negotiations with creditors and investors. When an ABS originator files Chapter 11, SPV assets where True Sale was established are unaffected by the proceedings — this is the core design principle of ABS structures. Hertz filed Chapter 11 in May 2020 and successfully emerged from bankruptcy in June 2021.",
      },
      {
        term: "중고차 잔존가치 (Vehicle Residual Value)",
        termEn: "Vehicle Residual Value",
        definition: "렌터카·리스 차량의 계약 종료 시 시장 매각 가능 가격. 자동차 ABS의 핵심 담보 가치 지표. 정상 시장에서는 차량 구매가의 40~60% 수준으로 예측 가능하지만, 시장 충격 시 급락 가능. 2020년 COVID로 하락이 우려됐으나, 2021년 반도체 부족으로 신차 공급이 제한되면서 중고차 가격이 오히려 급등 — Hertz ABS 투자자에게 예상치 못한 호재로 작용했다.",
        definitionEn: "The market sale price of rental/lease vehicles at contract termination. The critical collateral value metric for auto ABS. In normal markets, predictably 40–60% of purchase price, but can plunge in market shocks. COVID-related declines were feared in 2020, but semiconductor shortages limiting new vehicle supply caused used car prices to surge in 2021 — an unexpected positive for Hertz ABS investors.",
      },
    ],
    relatedMarket101Slugs: ["structured-abs", "structured-waterfall", "structured-overview"],
    relatedDealSlugs: ["bowie-bonds", "abacus-2007-ac1"],
    executiveSummary: {
      ko: [
        "2020년 5월 COVID로 Hertz 파산 — 차량 담보 ABS ~$140억 투자자들의 운명에 전 세계 주목",
        "SPV(Hertz Vehicle Financing LLC) 보유 차량은 파산 재단에 귀속되지 않음 — True Sale·파산 격리 원칙이 실전 증명",
        "AAA 트랑쉐 투자자 전액 회수, 메자닌은 일부 손실, 에쿼티는 실질 무가치화 — 워터폴 설계대로 작동",
        "2021년 반도체 부족으로 중고차 가격 급등 → 담보 자산 가치 회복 예상 초과",
        "교훈: ABS의 True Sale·파산 격리는 이론이 아닌 실전 법적 보호 장치",
      ],
      en: [
        "May 2020: COVID drives Hertz to bankruptcy — ~$14B in fleet ABS investor fate watched globally",
        "SPV (Hertz Vehicle Financing LLC) vehicles excluded from bankruptcy estate — True Sale and bankruptcy remoteness principles proven in practice",
        "AAA tranche investors fully repaid; mezzanine took partial losses; equity effectively worthless — waterfall worked as designed",
        "2021 semiconductor shortage drove used car prices up → collateral value recovery exceeded expectations",
        "Lesson: ABS True Sale and bankruptcy remoteness are real, court-tested legal protections — not just theoretical",
      ],
    },
    assessment: {
      positives: [
        "파산 격리 실전 증명: $140억 규모의 실전에서 ABS SPV 구조가 파산법원에서 인정됨",
        "워터폴 원칙 검증: 선순위 투자자 보호가 설계대로 작동 — 선순위·후순위 구조 신뢰성 제고",
        "시장 복원력: ABS 구조 덕분에 Hertz 파산이 자본시장 전반의 신용위기로 전이되지 않음",
        "예상 초과 회수: 반도체 부족→중고차 가격 급등이 담보 가치를 높여 일부 메자닌도 손실 최소화",
      ],
      positivesEn: [
        "Bankruptcy remoteness proven in practice: ABS SPV structure recognized by bankruptcy court at $14B scale",
        "Waterfall principle validated: senior investor protection worked as designed — strengthening confidence in senior-subordinate structures",
        "Market resilience: ABS structure prevented Hertz bankruptcy from spreading into broader capital market credit crisis",
        "Recovery exceeded expectations: semiconductor shortage drove used car prices up, minimizing losses even for some mezzanine investors",
      ],
      risks: [
        "일시적 유동성 충격: AAA 투자자도 파산 과정에서 쿠폰 수취가 일시 지연되는 경험 — 기술적 완벽하지는 않음",
        "메자닌 투자자 손실: BBB/BB 트랑쉐 투자자들은 파산 절차 비용과 재조정 과정에서 일정 할인 수용",
        "중고차 시장 의존성: 담보 회수가 결국 중고차 시장 수요에 의존 — 시장 환경이 달랐다면 AAA도 위험했을 수 있음",
        "운영 복잡성: 파산 중 SPV 운영 유지, 차량 관리, 보험 등 복잡한 운영 이슈 발생",
      ],
      risksEn: [
        "Temporary liquidity disruption: even AAA investors experienced temporary delays in coupon receipt during bankruptcy proceedings — not perfectly clean",
        "Mezzanine investor losses: BBB/BB tranche investors accepted discounts through bankruptcy costs and restructuring",
        "Used car market dependency: collateral recovery ultimately depends on used car market demand — different market conditions could have threatened even AAA",
        "Operational complexity: maintaining SPV operations during bankruptcy, vehicle management, insurance — complex operational issues arose",
      ],
    },
    faq: [
      {
        q: "Hertz 파산 중에도 ABS 쿠폰이 지급됐나요?",
        qEn: "Were ABS coupons paid during Hertz's bankruptcy?",
        a: "대체로 지급됐지만, 일부 지연이 있었습니다. Hertz는 파산 신청 직후 일부 ABS 이자 지급을 미뤘습니다. 그러나 파산 법원은 SPV가 ABS 계약 조건에 따라 계속 운영되어야 한다고 판결했고, 이후 정상화됐습니다. 최종적으로 AAA/AA 투자자들은 지연 이자를 포함해 모든 금액을 회수했습니다.",
        aEn: "Largely yes, but with some delays. Hertz initially deferred some ABS interest payments immediately after the bankruptcy filing. However, the bankruptcy court ruled that the SPV must continue operating per its ABS agreements, and payments normalized. Ultimately, AAA/AA investors recovered all amounts including any deferred interest.",
      },
      {
        q: "Hertz 주가가 파산 중에 왜 올랐나요?",
        qEn: "Why did Hertz's stock price rise during bankruptcy?",
        a: "2020년 '밈 주식' 현상의 일환이었습니다. 주요 인터넷 포럼(Reddit 등)에서 파산 직후 저가로 거래되는 Hertz 주식에 대한 관심이 급증했고, 소액 투자자들이 대거 매수했습니다. 챕터 11은 청산이 아닌 재건 절차이므로 주주 지분이 완전히 소멸하지 않는 경우도 있다는 기대감도 있었습니다. 실제로 Hertz는 2021년 재건에 성공했고 주주들도 일부 가치를 회수했습니다 — 비록 파산 전 주가 수준에는 훨씬 못 미쳤지만.",
        aEn: "It was part of the 2020 'meme stock' phenomenon. Major internet forums (Reddit, etc.) generated surging interest in Hertz shares trading at low prices post-bankruptcy, attracting retail investors en masse. There was also hope that since Chapter 11 is reorganization (not liquidation), shareholders might not be completely wiped out. Hertz did successfully emerge from bankruptcy in 2021, and shareholders recovered some value — though far below pre-bankruptcy stock prices.",
      },
      {
        q: "모든 ABS 구조가 Hertz처럼 파산에서 보호받을 수 있나요?",
        qEn: "Can all ABS structures be protected from bankruptcy like Hertz?",
        a: "반드시 그렇지는 않습니다. 파산 격리가 작동하려면 세 가지 조건이 충족되어야 합니다: (1) True Sale이 법적으로 인정되어야 합니다 — 단순 담보 제공이 아닌 진정한 소유권 이전. (2) SPV가 오리지네이터와 명확하게 분리된 독립 법인이어야 합니다. (3) SPV가 오리지네이터와 합병(consolidation) 처리되지 않아야 합니다. 법원이 이 조건들 중 하나라도 부정하면 SPV 자산이 파산 재단으로 귀속될 수 있습니다. 이것이 ABS 발행 시 True Sale 법률 의견서를 반드시 요구하는 이유입니다.",
        aEn: "Not necessarily. For bankruptcy remoteness to work, three conditions must be met: (1) True Sale must be legally recognized — genuine ownership transfer, not mere collateral pledge. (2) The SPV must be a clearly independent legal entity, separated from the originator. (3) The SPV must not be consolidated with the originator by the court. If a court rejects any of these conditions, SPV assets can fall into the bankruptcy estate. This is why True Sale opinion letters from recognized law firms are mandatory for ABS issuance.",
      },
    ],
    references: [
      { id: 1, author: "Hertz Global Holdings", title: "Form 8-K — Chapter 11 Bankruptcy Filing", source: "SEC EDGAR", year: "2020", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000047987&type=8-K&dateb=&owner=include&count=40" },
      { id: 2, author: "S&P Global Ratings", title: "Hertz Vehicle Financing LLC ABS Rating Actions", source: "S&P Global Ratings", year: "2020" },
      { id: 3, author: "SIFMA", title: "US Auto ABS Sector Overview 2020", source: "SIFMA Research", year: "2020" },
    ],
  },

  {
    slug: "blackstone-office-cmbs-2023",
    title: "Blackstone 오피스 CMBS (2023) — 전략적 디폴트의 교훈",
    titleEn: "Blackstone Office CMBS (2023) — Lessons from Strategic Default",
    category: "structure",
    categoryLabel: "구조화금융",
    categoryLabelEn: "Structured Finance",
    excerpt: "세계 최대 사모펀드 Blackstone이 오피스 CMBS 대출 상환을 의도적으로 거부했다. WFH 시대 오피스 부동산의 구조적 위기와 CMBS 투자자의 딜레마.",
    excerptEn: "Blackstone, the world's largest private equity firm, deliberately chose to stop repaying its office CMBS loans. The structural crisis of office real estate in the WFH era and the CMBS investor's dilemma.",
    dealYear: 2023,
    issuer: "Blackstone Real Estate Partners",
    issuerEn: "Blackstone Real Estate Partners",
    readingMinutes: 11,
    tags: ["CMBS", "오피스부동산", "전략적디폴트", "Blackstone", "WFH", "구조화금융"],
    tagsEn: ["CMBS", "Office Real Estate", "Strategic Default", "Blackstone", "WFH", "Structured Finance"],
    published: true,
    snapshot: [
      { labelKo: "사건", labelEn: "Event", value: "복수의 오피스 CMBS 디폴트", valueEn: "Multiple office CMBS defaults" },
      { labelKo: "대상 자산", labelEn: "Assets", value: "핀란드 오피스 포트폴리오, 미국 오피스 빌딩", valueEn: "Finnish office portfolio, US office buildings" },
      { labelKo: "규모 (핀란드)", labelEn: "Size (Finland)", value: "€531M CMBS" },
      { labelKo: "발생 시점", labelEn: "Timing", value: "2023년 초~중반", valueEn: "Early-to-mid 2023" },
      { labelKo: "배경", labelEn: "Context", value: "재택근무 고착화 + 금리 급등", valueEn: "Entrenched remote work + rate spike" },
      { labelKo: "LTV (디폴트 시점)", labelEn: "LTV at Default", value: ">100% (추정)", valueEn: ">100% (estimated)" },
      { labelKo: "시장 영향", labelEn: "Market Impact", value: "오피스 CMBS 스프레드 급등", valueEn: "Office CMBS spreads spiked" },
    ],
    sections: [
      {
        heading: "왜 세계 최대 사모펀드가 대출 상환을 거부했나",
        headingEn: "Why the World's Largest PE Firm Chose Not to Repay",
        body:
`2023년 초, Blackstone Real Estate Partners는 조용히 계산기를 두드렸다.

핀란드 헬싱키 외곽의 오피스 포트폴리오를 담보로 발행한 €5억 3,100만 CMBS 대출. 2018~2019년 인수 당시 오피스 시장은 활황이었고, LTV(대출-자산가치 비율)는 안정적이었다. 그러나 2020년 COVID 이후 상황이 바뀌었다.

재택근무(WFH) 고착화로 핀란드 오피스 공실률이 급등했다. 임차인들은 계약 갱신을 거부하거나 면적을 줄였다. 건물 가치는 하락했다. 동시에 2022~2023년 금리 급등으로 대출 비용은 치솟았다.

계산 결과: 빌딩 현재 가치 < 대출 원금. Blackstone은 선택을 해야 했다.

A안: 추가 자본을 투입해 LTV를 개선하고 대출을 유지한다.
B안: 대출 상환을 중단하고 빌딩을 대출기관(CMBS 투자자)에게 넘긴다.

Blackstone은 B안을 선택했다.`,
        bodyEn:
`In early 2023, Blackstone Real Estate Partners quietly ran the numbers.

A €531M CMBS loan backed by an office portfolio in suburban Helsinki, Finland. When acquired in 2018–2019, the office market was thriving and the LTV (loan-to-value ratio) was stable. But the situation changed after COVID in 2020.

WFH becoming permanent drove Helsinki office vacancy rates sharply higher. Tenants declined to renew leases or reduced their space. Building values fell. Simultaneously, the 2022–2023 rate surge drove up borrowing costs.

The calculation: current building value < loan principal. Blackstone had to choose.

Option A: inject additional capital to improve LTV and maintain the loan.
Option B: stop repaying the loan and hand the building to the lender (CMBS investors).

Blackstone chose Option B.`,
      },
      {
        heading: "전략적 디폴트 — 재무적 합리성과 시장 충격",
        headingEn: "Strategic Default — Financial Rationality and Market Shock",
        body:
`'전략적 디폴트(Strategic Default)'란 대출 상환 능력은 있지만, 경제적 관점에서 상환하지 않는 것이 더 유리하다고 판단해 의도적으로 디폴트를 선택하는 것이다.

Blackstone의 논리는 단순했다: 이 빌딩은 더 이상 투자 가치가 없다. 대출을 갚기 위해 추가 자본을 투입하면 그 자본은 회수할 수 없다. 그러므로 손실을 확정하고 자산을 포기하는 것이 펀드 투자자(LP)에게 더 유리하다.

Blackstone은 핀란드 외에도 미국 내 복수의 오피스 빌딩 CMBS에서 유사한 선택을 했다. 2023년 초 뉴욕과 보스턴의 오피스 빌딩 담보 CMBS 대출에서도 상환 거부가 이어졌다.

시장 충격: 세계 최대 사모펀드 Blackstone의 전략적 디폴트는 "오피스 시장에 대한 기관 투자자들의 신뢰가 무너졌다"는 신호로 받아들여졌다. 오피스 CMBS 스프레드가 급등하고, 오피스 담보 대출 리파이낸싱 시장이 사실상 마비됐다.`,
        bodyEn:
`'Strategic default' means intentionally choosing default when one has the ability to repay, but judges that not repaying is economically superior.

Blackstone's logic was simple: this building no longer has investment value. Injecting additional capital to repay the loan would be unrecoverable. Therefore, crystallizing the loss and surrendering the asset is better for fund investors (LPs).

Beyond Finland, Blackstone made similar choices on multiple US office building CMBSs. In early 2023, loan repayment refusals continued on CMBS loans backed by office buildings in New York and Boston.

Market shock: Blackstone's strategic defaults were interpreted as a signal that 'institutional investors' confidence in the office market had collapsed.' Office CMBS spreads surged, and the office-collateralized loan refinancing market effectively seized up.`,
      },
      {
        heading: "CMBS 구조에서 디폴트가 일어나면 — 스페셜 서비서의 역할",
        headingEn: "When Default Hits CMBS Structures — The Special Servicer's Role",
        body:
`CMBS 대출에서 디폴트가 발생하면 일반 서비서(Master Servicer)에서 스페셜 서비서(Special Servicer)로 업무가 이전된다.

스페셜 서비서의 역할: 디폴트 대출을 처리해 투자자를 위해 최대 회수율을 달성하는 것. 구체적으로 대출 조건 재협상(loan modification), 담보물 압류 및 관리, 담보물 매각 등을 담당한다.

Blackstone 케이스에서 스페셜 서비서들은 복잡한 상황에 직면했다: 공실 오피스 빌딩을 어떻게 처리할 것인가? 오피스 수요가 구조적으로 감소한 상황에서 매수자를 찾기 어렵고, 개발 전환(주거용, 창고 등)도 경제성이 불확실하다.

결과: 일부 빌딩은 대폭 할인된 가격으로 매각됐다. 일부는 아직도 스페셜 서비싱 상태로 잠겨 있다. CMBS 투자자들은 대기 중이며, BBB 이하 메자닌 투자자들은 원금 손실이 확실시된다.

한 가지 아이러니: Blackstone은 2023년 동시에 신규 오피스가 아닌 물류창고, 데이터센터, 임대주택에 공격적으로 투자했다. "오피스는 포기, 물류·데이터센터는 매수"라는 메시지를 시장에 강하게 보냈다.`,
        bodyEn:
`When a CMBS loan defaults, the servicing role transfers from the Master Servicer to the Special Servicer.

Special Servicer's role: to maximize recovery for investors by handling the defaulted loan — specifically through loan modification negotiations, foreclosure and property management, and property disposition.

In the Blackstone cases, special servicers faced complex situations: what to do with vacant office buildings? With structurally declining office demand, finding buyers is difficult, and conversion to other uses (residential, warehouse, etc.) has uncertain economics.

Outcome: some buildings were sold at steep discounts. Others remain in special servicing, with CMBS investors still waiting. BBB and below mezzanine investors face near-certain principal losses.

One irony: Blackstone simultaneously aggressively invested in logistics warehouses, data centers, and rental housing in 2023 — not new offices. The market received a strong message: 'abandon offices, buy logistics and data centers.'`,
      },
      {
        heading: "오피스 CMBS 위기의 구조적 원인",
        headingEn: "Structural Causes of the Office CMBS Crisis",
        body:
`Blackstone의 전략적 디폴트는 증상이고, 진짜 원인은 구조적이다.

WFH의 고착화: COVID 이후 미국·유럽 주요 도시 오피스 공실률이 15~25%로 급등했다. 기업들은 원격·하이브리드 근무를 영구 정책으로 채택했다. 오피스 수요는 10~30% 구조적으로 감소할 것이라는 전망이 지배적이다.

금리 급등의 이중 타격: ① 기존 변동금리 CMBS 대출 이자 비용 급등 → 현금흐름 압박. ② 할인율 상승 → 부동산 자산가치 하락. 양쪽에서 동시에 압박이 왔다.

만기 집중: 2024~2026년 만기 도래하는 오피스 CMBS가 약 $1,500억 규모. 이 중 상당수가 '리파이낸싱 절벽(Refinancing Cliff)'에 직면해 있다 — 현재 가치로는 리파이낸싱이 불가능하고, 그렇다고 대출 상환에 필요한 추가 자본을 조달하기도 어렵다.

도심 vs 외곽, 프라임 vs 비프라임의 양극화도 심해지고 있다. 최신 설비를 갖춘 프라임 오피스는 여전히 수요가 있지만, 구형 외곽 오피스는 공실이 심각하다.`,
        bodyEn:
`Blackstone's strategic defaults are symptoms; the real causes are structural.

WFH becoming permanent: post-COVID, major city office vacancy rates in the US and Europe surged to 15–25%. Companies adopted remote and hybrid work as permanent policy. Structural office demand declines of 10–30% are the dominant forecast.

Rate surge's double blow: ① floating-rate CMBS loan interest costs surged → cash flow pressure; ② rising discount rates → real estate asset value decline. Pressure from both sides simultaneously.

Maturity concentration: approximately $150B of office CMBS matures in 2024–2026. A significant portion faces a 'refinancing cliff' where refinancing on existing terms is impossible, yet raising additional capital for loan repayment is equally challenging.

Polarization between prime and non-prime, urban and suburban is intensifying. Class-A prime offices in prime locations still have demand; older suburban offices face severe vacancy.`,
      },
      {
        heading: "CMBS 투자자 교훈 — DSCR과 LTV를 다시 보다",
        headingEn: "CMBS Investor Lessons — Revisiting DSCR and LTV",
        body:
`Blackstone 오피스 CMBS 위기는 CMBS 분석의 핵심 지표들을 다시 점검하게 했다.

DSCR(부채원리금상환비율): "현금흐름이 이자를 감당할 수 있는가"를 측정. 오피스 공실이 늘면서 NOI(순영업수익)가 하락하고, DSCR이 1.0 이하로 떨어지는 사례가 속출했다. DSCR 1.0 이하 = 임대 수입으로 이자도 못 낸다는 의미.

LTV(대출-가치 비율): 발행 시 65%였던 LTV가 자산 가치 하락으로 100%를 초과한 경우도 많다. LTV > 100%는 매각해도 대출을 갚을 수 없다는 뜻 — 전략적 디폴트의 경제적 근거.

교훈: CMBS 분석에서 '현재 공실률'만 보는 것은 불충분하다. 임차인 만기 일정, 갱신 의향, WFH 비율, 빌딩 연식·등급이 미래 현금흐름을 좌우한다. 2018~2022년 발행된 오피스 CMBS는 "WFH 고착화"라는 시나리오를 stress test에 포함하지 않았다.

다음 도미노: 지역 은행들이 보유한 오피스 상업용 부동산(CRE) 대출. CMBS보다 훨씬 큰 규모로, 지역 은행 대차대조표에 직접 남아 있다. SVB 이후 지역 은행 건전성에 대한 우려가 오피스 CRE 대출로 이어지고 있다.`,
        bodyEn:
`The Blackstone office CMBS crisis prompted a re-examination of key CMBS analysis metrics.

DSCR (Debt Service Coverage Ratio): measures "can cash flows service interest?" As office vacancies increased, NOI (Net Operating Income) fell, and DSCR dropping below 1.0 became commonplace. DSCR below 1.0 means rental income can't even cover interest.

LTV (Loan-to-Value): LTVs that were 65% at issuance now exceed 100% due to asset value declines in many cases. LTV above 100% means even selling the property won't fully repay the loan — the economic rationale for strategic default.

Lesson: analyzing 'current vacancy rate' alone is insufficient for CMBS. Tenant maturity schedules, renewal intentions, WFH ratios, building age and class determine future cash flows. Office CMBSs issued in 2018–2022 did not include 'WFH becoming permanent' in stress tests.

The next domino: office commercial real estate (CRE) loans held by regional banks. Far larger in scale than CMBS, sitting directly on regional bank balance sheets. Post-SVB concerns about regional bank health are extending to office CRE loans.`,
      },
    ],
    keyTerms: [
      {
        term: "전략적 디폴트 (Strategic Default)",
        termEn: "Strategic Default",
        definition: "차입자가 상환 능력은 있지만, 경제적 합리성 관점에서 상환하지 않는 것이 유리하다고 판단해 의도적으로 디폴트를 선택하는 행위. 주로 담보 자산 가치가 대출 원금보다 낮을 때(수중 담보, underwater) 발생. 부동산 CMBS에서는 LTV > 100%가 전략적 디폴트의 주요 경제적 유인이 된다. Blackstone의 2023년 오피스 CMBS 디폴트가 대표적 기관투자자 전략적 디폴트 사례.",
        definitionEn: "When a borrower intentionally chooses default not due to inability to pay, but because it judges that not repaying is economically rational. Primarily occurs when collateral asset value falls below the loan principal (underwater collateral). In real estate CMBS, LTV exceeding 100% is the primary economic incentive for strategic default. Blackstone's 2023 office CMBS defaults are the definitive institutional investor strategic default case.",
      },
      {
        term: "스페셜 서비서 (Special Servicer)",
        termEn: "Special Servicer",
        definition: "CMBS 구조에서 연체·부실 대출을 전담 처리하는 기관. 정상 대출은 마스터 서비서가 관리하다가, 일정 요건(연체 60일 이상, 임박한 부도 등) 충족 시 스페셜 서비서로 이관. 스페셜 서비서는 대출 조건 재협상, 담보물 압류, 매각 등을 통해 CMBS 투자자의 손실을 최소화하는 역할. 오피스 위기에서 스페셜 서비서들은 공실 빌딩 처리라는 전례 없는 과제에 직면했다.",
        definitionEn: "The entity in CMBS structures that handles delinquent and distressed loans. Normal loans are managed by the Master Servicer; upon meeting certain conditions (60+ days delinquent, imminent default, etc.), loans transfer to the Special Servicer. The Special Servicer minimizes CMBS investor losses through loan modification, foreclosure, and disposition. In the office crisis, special servicers faced the unprecedented challenge of dealing with vacant buildings.",
      },
      {
        term: "리파이낸싱 절벽 (Refinancing Cliff)",
        termEn: "Refinancing Cliff",
        definition: "대규모 CMBS·부동산 대출이 특정 시기에 동시에 만기 도래하여 리파이낸싱 수요가 집중되는 현상. 2024~2026년 약 $1,500억의 오피스 CMBS 만기가 집중될 예정. 현재 금리와 오피스 자산 가치 하락을 감안하면 상당수가 기존 조건으로 리파이낸싱이 불가능한 '절벽'에 직면. 이는 추가 전략적 디폴트 또는 대출 재조정으로 이어질 가능성이 높다.",
        definitionEn: "A phenomenon where large volumes of CMBS and real estate loans mature simultaneously, creating concentrated refinancing demand. Approximately $150B of office CMBS is scheduled to mature in 2024–2026. Given current interest rates and office asset value declines, many face a 'cliff' where refinancing on existing terms is impossible. This is likely to lead to additional strategic defaults or loan restructurings.",
      },
      {
        term: "오피스 CMBS 스프레드 (Office CMBS Spread)",
        termEn: "Office CMBS Spread",
        definition: "오피스 담보 CMBS 채권의 수익률과 국채 수익률의 차이. 신용 위험을 반영하는 지표로, 스프레드가 넓어질수록 시장이 해당 자산의 위험을 높게 평가한다는 의미. 2023년 Blackstone 디폴트 이후 오피스 CMBS 스프레드가 급등 — 투자자들이 오피스 담보 자산에 높은 위험 프리미엄을 요구하기 시작. 산업·물류 CMBS와의 스프레드 격차가 사상 최대 수준으로 확대됐다.",
        definitionEn: "The yield difference between office-backed CMBS bonds and government bonds. A credit risk indicator — wider spreads mean markets assess the asset as riskier. After Blackstone's 2023 defaults, office CMBS spreads surged — investors began demanding higher risk premiums for office-backed assets. The spread gap between office and industrial/logistics CMBS widened to record levels.",
      },
    ],
    relatedMarket101Slugs: ["structured-cmbs", "structured-overview", "structured-cases"],
    relatedDealSlugs: ["svb-2023", "hertz-fleet-abs-2020"],
    executiveSummary: {
      ko: [
        "2023년 Blackstone이 핀란드 오피스 포트폴리오 €531M CMBS 및 미국 복수 오피스 빌딩 CMBS에서 전략적 디폴트 선택",
        "배경: WFH 고착화로 오피스 공실 급증 + 금리 급등으로 LTV 100% 초과 → 경제적 상환 유인 소멸",
        "스페셜 서비서로 이관 후 담보물 처리 진행 중 — BBB 이하 CMBS 투자자 손실 확실시",
        "2024~2026년 $1,500억+ 오피스 CMBS 만기 집중 → 리파이낸싱 절벽 리스크 상존",
        "교훈: CMBS 분석에서 DSCR·LTV 외에 임차인 만기·WFH 비율·부동산 등급 등 구조적 수요 변화 반영 필수",
      ],
      en: [
        "2023: Blackstone chose strategic default on €531M Finnish office CMBS and multiple US office building CMBSs",
        "Context: WFH-driven office vacancy surge + rate hikes causing LTV to exceed 100% → economic incentive to repay disappeared",
        "Transferred to special servicers for property disposition — sub-BBB CMBS investors face near-certain losses",
        "~$150B+ office CMBS matures in 2024–2026 → refinancing cliff risk remains elevated",
        "Lesson: CMBS analysis must incorporate structural demand shifts (WFH rate, tenant maturity, building class) beyond DSCR and LTV",
      ],
    },
    assessment: {
      positives: [
        "Blackstone 펀드 LP 관점: 추가 손실 자본 투입 없이 손실을 확정하고 자본을 회수 — 펀드 의무에 충실한 결정",
        "시장 가격 발견: 전략적 디폴트가 오피스 CMBS 시장의 실제 위험을 가격에 반영하는 계기가 됨",
        "물류·데이터센터로의 자본 재배치: Blackstone은 같은 시기 성장 섹터에 공격적 투자 — 자원 배분 합리화",
      ],
      positivesEn: [
        "From Blackstone LP perspective: crystallizing losses without injecting additional capital — a decision faithful to fund obligations",
        "Market price discovery: strategic defaults prompted office CMBS markets to price in actual risk",
        "Capital reallocation to logistics/data centers: Blackstone aggressively invested in growth sectors simultaneously — rational resource allocation",
      ],
      risks: [
        "CMBS 투자자 손실: BBB 이하 메자닌·에쿼티 트랑쉐 투자자 원금 손실 — 특히 연기금·보험사 등 기관투자자 피해",
        "오피스 시장 신뢰 훼손: 기관투자자 전략적 디폴트가 오피스 부동산 전반의 신용 수축을 가속",
        "지역 은행 연쇄 우려: CMBS보다 훨씬 큰 규모의 오피스 CRE 대출이 지역 은행에 집중 — 잠재적 시스템 리스크",
        "평판 리스크: '능력 있는 차입자의 의도적 디폴트'에 대한 대출기관들의 신뢰 저하 — 미래 대출 조건 악화 가능",
      ],
      risksEn: [
        "CMBS investor losses: sub-BBB mezzanine and equity tranche investors suffer principal losses — particularly pension funds and insurers",
        "Office market confidence damage: institutional investor strategic defaults accelerate credit contraction across office real estate",
        "Regional bank cascade concern: office CRE loans on regional bank balance sheets far exceed CMBS scale — potential systemic risk",
        "Reputational risk: deliberate default by capable borrowers reduces lender trust — potential future tightening of loan terms",
      ],
    },
    faq: [
      {
        q: "전략적 디폴트는 불법인가요?",
        qEn: "Is strategic default illegal?",
        a: "일반적으로 불법이 아닙니다. 대출 계약에서 담보물은 디폴트 시 대출기관에 이전되도록 설계되어 있습니다 — 이것이 대출의 본질적 구조입니다. 차입자가 경제적 판단으로 담보물을 포기하는 것 자체는 계약 내에 설정된 행위입니다. 다만 일부 대출 계약에는 '전략적 디폴트 방지 조항'이나 '재과실(bad boy carve-out)'이 포함되어, 의도적 디폴트 시 차입자에 대한 소구(recourse)가 가능하도록 설계되기도 합니다. Blackstone과 같은 기관 투자자는 대출 계약 시 이러한 조항을 꼼꼼히 검토합니다.",
        aEn: "Generally not. Loan agreements are designed so that collateral transfers to the lender upon default — this is the fundamental structure of a loan. A borrower choosing to surrender collateral as an economic decision is an act within the contract. However, some loan agreements include 'strategic default prevention clauses' or 'bad boy carve-outs' that allow lender recourse against the borrower for intentional defaults. Institutional investors like Blackstone review such clauses carefully when entering loan agreements.",
      },
      {
        q: "오피스 위기가 2008년 서브프라임과 비슷한 규모의 위기로 번질 수 있나요?",
        qEn: "Could the office crisis escalate to a 2008 subprime-scale crisis?",
        a: "현재까지의 컨센서스는 '국지적 심각한 손실은 있지만 시스템 붕괴는 아닐 것'입니다. 이유: 첫째, 오피스 CMBS는 전체 CMBS 시장의 일부이며, 산업·주거 등 다른 섹터는 양호하다. 둘째, CMBS 구조는 트랑쉐화로 손실 흡수가 설계됨. 셋째, 2008년과 달리 현재 은행 자본 규제가 강화됐다. 그러나 지역 은행의 오피스 CRE 집중도가 높은 경우 잠재적 위기가 있다. 또한 2024~2026년 리파이낸싱 절벽이 예상보다 심각하면 규모가 커질 수 있다.",
        aEn: "Current consensus is 'serious localized losses but not systemic collapse.' Reasons: first, office CMBS is a subset of total CMBS, with industrial, residential, and other sectors remaining healthy. Second, CMBS tranching is designed to absorb losses. Third, bank capital regulations are stronger than in 2008. However, regional banks with high office CRE concentration face potential crises. Additionally, if the 2024–2026 refinancing cliff proves worse than expected, the scale could increase.",
      },
      {
        q: "CMBS 투자자로서 오피스 리스크를 어떻게 평가해야 하나요?",
        qEn: "How should a CMBS investor assess office risk?",
        a: "다섯 가지를 확인하세요. ① LTV: 현재 시장가 기준 LTV가 75% 이하인가? 100% 초과면 전략적 디폴트 가능성 높음. ② DSCR: 현재 임대수입이 대출 이자를 1.2배 이상 커버하는가? ③ 임차인 만기: 향후 2~3년 내 만기 도래하는 임차인 비율은? 갱신 의향이 있는가? ④ 빌딩 등급 및 위치: 프라임 도심 A급인가, 외곽 B급인가? A급은 상대적으로 안전. ⑤ 만기 일정: CMBS 자체 만기 시점의 리파이낸싱 가능성 — 금리 환경과 자산 가치 예측이 필요.",
        aEn: "Check five things. ① LTV: is the current market-value LTV below 75%? Above 100% signals high strategic default probability. ② DSCR: does current rental income cover loan interest 1.2x+? ③ Tenant maturity: what percentage of tenants have leases expiring in the next 2–3 years? What are renewal intentions? ④ Building class and location: Class A urban prime, or suburban Class B? Class A is relatively safer. ⑤ Maturity schedule: assess refinancing feasibility at the CMBS maturity date — requires interest rate environment and asset value forecasting.",
      },
    ],
    references: [
      { id: 1, author: "Bloomberg", title: "Blackstone Defaults on Finnish CMBS Loan", source: "Bloomberg News", year: "2023" },
      { id: 2, author: "Moody's Investors Service", title: "US CMBS Office Sector Outlook", source: "Moody's", year: "2023" },
      { id: 3, author: "MSCI Real Assets", title: "US Office Market Report", source: "MSCI", year: "2023" },
      { id: 4, author: "TREPP", title: "CMBS Delinquency Report 2023", source: "Trepp LLC", year: "2023", url: "https://www.trepp.com/" },
    ],
  },

];

export function getMarketDealBySlug(slug: string): MarketDeal | undefined {
  return ALL_MARKET_DEALS.find((d) => d.slug === slug);
}

export function getPublishedDeals(): MarketDeal[] {
  return ALL_MARKET_DEALS.filter((d) => d.published);
}

export function getDealsByCategory(category: DealCategory): MarketDeal[] {
  return ALL_MARKET_DEALS.filter((d) => d.category === category);
}
