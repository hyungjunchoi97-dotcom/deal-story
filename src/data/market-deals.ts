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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "World Bank (IBRD)" },
      { labelKo: "발행연도", labelEn: "Year", value: "2008" },
      { labelKo: "발행규모", labelEn: "Size", value: "SEK 2.3B (~$440M)" },
      { labelKo: "만기", labelEn: "Maturity", value: "6년" },
      { labelKo: "주관사", labelEn: "Lead Manager", value: "SEB" },
      { labelKo: "의의", labelEn: "Significance", value: "세계 최초 그린본드" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Ziggy Stardust Enterprises" },
      { labelKo: "발행연도", labelEn: "Year", value: "1997" },
      { labelKo: "발행규모", labelEn: "Size", value: "$55M" },
      { labelKo: "쿠폰", labelEn: "Coupon", value: "7.9%" },
      { labelKo: "만기", labelEn: "Maturity", value: "10년" },
      { labelKo: "주관사", labelEn: "Lead Manager", value: "Fahnestock & Co." },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: [],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "European Union" },
      { labelKo: "발행 시작", labelEn: "Launched", value: "2020" },
      { labelKo: "총 규모", labelEn: "Total Program", value: "€800B+ (NGEU)" },
      { labelKo: "등급", labelEn: "Rating", value: "AAA/Aaa" },
      { labelKo: "의의", labelEn: "Significance", value: "유럽 최초 공동채" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Republic of Argentina" },
      { labelKo: "발행연도", labelEn: "Year", value: "2017" },
      { labelKo: "발행규모", labelEn: "Size", value: "$2.75B" },
      { labelKo: "만기", labelEn: "Maturity", value: "100년 (2117)" },
      { labelKo: "쿠폰", labelEn: "Coupon", value: "7.125%" },
      { labelKo: "디폴트", labelEn: "Default", value: "2020 (9번째)" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Republic of Austria" },
      { labelKo: "발행연도", labelEn: "Year", value: "2017" },
      { labelKo: "발행규모", labelEn: "Size", value: "€3.5B (총)" },
      { labelKo: "만기", labelEn: "Maturity", value: "100년 (2117)" },
      { labelKo: "쿠폰", labelEn: "Coupon", value: "2.1%" },
      { labelKo: "등급", labelEn: "Rating", value: "AA+" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "United Mexican States" },
      { labelKo: "발행연도", labelEn: "Year", value: "2010" },
      { labelKo: "발행규모", labelEn: "Size", value: "$1B" },
      { labelKo: "만기", labelEn: "Maturity", value: "100년 (2110)" },
      { labelKo: "쿠폰", labelEn: "Coupon", value: "5.75%" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: [],
    references: [],
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
      { labelKo: "주주 수령액", labelEn: "Equity Recovery", value: "CHF 3B (UBS 주식)" },
      { labelKo: "인수자", labelEn: "Acquirer", value: "UBS Group AG" },
      { labelKo: "트리거", labelEn: "Trigger", value: "PONV (FINMA 결정)" },
      { labelKo: "의의", labelEn: "Significance", value: "자본구조 위계 역전" },
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
    title: "도이체방크 코코 쇼크 (2016)",
    titleEn: "Deutsche Bank CoCo Shock (2016)",
    category: "fig",
    categoryLabel: "FIG 드라마",
    categoryLabelEn: "FIG Drama",
    excerpt: "AT1 쿠폰 미지급 공포가 시장을 처음 흔든 사건. CS AT1 사태의 예고편.",
    excerptEn: "The first market scare over AT1 coupon non-payment. The preview to the CS AT1 episode.",
    dealYear: 2016,
    issuer: "Deutsche Bank AG",
    issuerEn: "Deutsche Bank AG",
    readingMinutes: 10,
    tags: ["AT1", "CoCo", "FIG", "도이체방크", "쿠폰리스크"],
    tagsEn: ["AT1", "CoCo", "FIG", "Deutsche Bank", "Coupon Risk"],
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Deutsche Bank AG" },
      { labelKo: "사건연도", labelEn: "Year", value: "2016" },
      { labelKo: "이슈", labelEn: "Issue", value: "AT1 쿠폰 지급 가능 여부 우려" },
      { labelKo: "스프레드 영향", labelEn: "Spread Impact", value: "AT1 +200bp+" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: [],
    references: [],
  },

  {
    slug: "santander-at1-no-call",
    title: "산탄데르 AT1 콜 스킵 (2019)",
    titleEn: "Santander AT1 No-Call (2019)",
    category: "fig",
    categoryLabel: "FIG 드라마",
    categoryLabelEn: "FIG Drama",
    excerpt: "당연히 콜에 갚겠지라는 시장 관행을 깬 첫 사례. Extension risk가 FIG 자본채에서 실제로 터진 케이스.",
    excerptEn: "The first case to break the market convention that AT1s will always be called. Extension risk materializing in FIG capital instruments.",
    dealYear: 2019,
    issuer: "Banco Santander S.A.",
    issuerEn: "Banco Santander S.A.",
    readingMinutes: 9,
    tags: ["AT1", "콜옵션", "Extension Risk", "산탄데르", "FIG"],
    tagsEn: ["AT1", "Call Option", "Extension Risk", "Santander", "FIG"],
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Banco Santander S.A." },
      { labelKo: "사건연도", labelEn: "Year", value: "2019" },
      { labelKo: "이슈", labelEn: "Issue", value: "€1.5B AT1 첫 콜 미행사" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: [],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "기원", labelEn: "Origin", value: "1769 (프리드리히 대왕)" },
      { labelKo: "현재 잔액", labelEn: "Current Outstanding", value: "€400B+" },
      { labelKo: "구조", labelEn: "Structure", value: "이중청구권 (Dual Recourse)" },
      { labelKo: "등급", labelEn: "Rating", value: "주로 AAA" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: [],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Federal Republic of Germany" },
      { labelKo: "기간", labelEn: "Period", value: "2016–2019" },
      { labelKo: "최저 수익률", labelEn: "Lowest Yield", value: "-0.71% (2019)" },
      { labelKo: "잔액 (최대)", labelEn: "Peak Outstanding", value: "~$17T 글로벌 음수익률채" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: [],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "시장", labelEn: "Market", value: "대만 (TWD/USD)" },
      { labelKo: "주요 수요층", labelEn: "Key Buyers", value: "대만 보험사 (ALM)" },
      { labelKo: "전성기", labelEn: "Peak", value: "2013–2018" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "시장 1", labelEn: "Market 1", value: "판다본드 (CNY, 중국 역내)" },
      { labelKo: "시장 2", labelEn: "Market 2", value: "사무라이본드 (JPY, 일본)" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Saudi Aramco" },
      { labelKo: "발행연도", labelEn: "Year", value: "2019" },
      { labelKo: "발행규모", labelEn: "Size", value: "$12B (5 tranches)" },
      { labelKo: "오더북", labelEn: "Orderbook", value: "$100B+" },
      { labelKo: "등급", labelEn: "Rating", value: "A1/A+ (Moody's/S&P)" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Verizon Communications" },
      { labelKo: "발행연도", labelEn: "Year", value: "2013" },
      { labelKo: "발행규모", labelEn: "Size", value: "$49B" },
      { labelKo: "목적", labelEn: "Purpose", value: "Vodafone 지분 인수 자금" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: [],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Apple Inc." },
      { labelKo: "첫 발행", labelEn: "First Issue", value: "2013" },
      { labelKo: "누적 발행", labelEn: "Cumulative Issuance", value: "$100B+" },
      { labelKo: "등급", labelEn: "Rating", value: "Aaa/AAA" },
      { labelKo: "목적", labelEn: "Purpose", value: "자사주매입·배당 재원 (세금 회피)" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: [],
    references: [],
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
      { labelKo: "디폴트 연도", labelEn: "Default Year", value: "2001년 12월" },
      { labelKo: "디폴트 규모", labelEn: "Default Size", value: "$1,000억+ (당시 역사상 최대)" },
      { labelKo: "채권교환 참여율", labelEn: "Exchange Participation", value: "93% (2005+2010)" },
      { labelKo: "합의·해결", labelEn: "Resolution", value: "2016년 $46억 지급" },
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
      { title: "NML Capital v. Republic of Argentina — U.S. Court of Appeals, Second Circuit (2012)", url: "https://law.justia.com/cases/federal/appellate-courts/ca2/12-105/12-105-2012-10-26.html" },
      { title: "IMF (2014). Strengthening the Contractual Framework to Address Collective Action Problems in Sovereign Debt Restructuring", url: "https://www.imf.org/external/np/pp/eng/2014/090214.pdf" },
      { title: "ICMA (2014). Standard Collective Action and Pari Passu Clauses for the Terms and Conditions of Sovereign Notes", url: "https://www.icmagroup.org/assets/documents/Regulatory/Sovereign-Debt-information/CAC-Pari-Passu-Clauses.pdf" },
      { title: "Buchheit & Gulati (2010). Sovereign Bonds and the Collective Will. Emory Law Journal", url: "https://scholarship.law.duke.edu/faculty_scholarship/2240/" },
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
      { labelKo: "재조정 완료", labelEn: "Completion", value: "2012년 3월" },
      { labelKo: "명목 헤어컷", labelEn: "Nominal Haircut", value: "53.5%" },
      { labelKo: "NPV 손실", labelEn: "NPV Loss", value: "~75%" },
      { labelKo: "재조정 규모", labelEn: "Bonds Restructured", value: "€2,060억" },
      { labelKo: "CAC 소급 적용", labelEn: "CAC Retrofitted", value: "95.7% 참여 강제" },
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
      { title: "IMF (2013). Greece: Ex Post Evaluation of Exceptional Access Under the 2010 Stand-By Arrangement", url: "https://www.imf.org/external/pubs/ft/scr/2013/cr13156.pdf" },
      { title: "Zettelmeyer, Trebesch & Gulati (2013). The Greek Debt Restructuring: An Autopsy. Economic Policy", url: "https://academic.oup.com/economicpolicy/article/28/75/513/2918221" },
      { title: "ISDA (2012). EMEA Determinations Committee Rules on Greek Credit Event", url: "https://www.isda.org/2012/03/09/emea-dc-rules-on-greek-credit-event/" },
      { title: "Blanchard & Leigh (2013). Growth Forecast Errors and Fiscal Multipliers. IMF Working Paper", url: "https://www.imf.org/external/pubs/ft/wp/2013/wp1301.pdf" },
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
      { labelKo: "사건 시작", labelEn: "Trigger", value: "2020년 8월 Three Red Lines" },
      { labelKo: "Evergrande 총부채", labelEn: "Evergrande Total Debt", value: "$3,000억+" },
      { labelKo: "역외 달러채 디폴트", labelEn: "Offshore USD Bond Defaults", value: "$1,000억+" },
      { labelKo: "Evergrande 역외 회수율", labelEn: "Evergrande Offshore Recovery", value: "~2~5센트" },
      { labelKo: "디폴트 개발사", labelEn: "Defaulted Developers", value: "30개+ (2021~2024)" },
      { labelKo: "현황", labelEn: "Status", value: "진행 중 (구조조정 継続)" },
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
      { title: "S&P Global (2024). China Real Estate Default Tracker", url: "https://www.spglobal.com/ratings/en/research/articles/210914-china-real-estate-credit-risks-rise-12106100" },
      { title: "BIS (2022). The Evergrande Crisis and the Chinese Real Estate Sector", url: "https://www.bis.org/publ/work1032.htm" },
      { title: "IMF (2022). China: 2022 Article IV Consultation — Staff Report", url: "https://www.imf.org/en/Publications/CR/Issues/2022/11/30/Peoples-Republic-of-China-2022-Article-IV-Consultation-526119" },
      { title: "Guo & Lu (2023). China's Real Estate Crisis: Causes, Consequences, and Policy Options. Brookings Institution", url: "https://www.brookings.edu/articles/chinas-real-estate-crisis/" },
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
      { labelKo: "은행 폐쇄일",        labelEn: "Closure Date",         value: "2023년 3월 10일" },
      { labelKo: "총 자산",             labelEn: "Total Assets",          value: "$2,090억" },
      { labelKo: "HTM 포트폴리오",      labelEn: "HTM Portfolio",         value: "$913억" },
      { labelKo: "미실현 손실 (HTM)",   labelEn: "Unrealized Loss (HTM)", value: "–$152억" },
      { labelKo: "하루 인출 시도액",    labelEn: "Single-Day Run",        value: "$420억" },
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
