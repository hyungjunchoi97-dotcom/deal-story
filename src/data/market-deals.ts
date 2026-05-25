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
    relatedMarket101Slugs: ["dcm-ecosystem"],
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
    relatedMarket101Slugs: ["dcm-ecosystem"],
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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Republic of Argentina" },
      { labelKo: "디폴트 연도", labelEn: "Default Year", value: "2001" },
      { labelKo: "디폴트 규모", labelEn: "Default Size", value: "$100B+ (당시 최대)" },
      { labelKo: "해결", labelEn: "Resolution", value: "2016 (15년)" },
      { labelKo: "엘리엇 수익", labelEn: "Elliott Return", value: "~1,500%" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: [],
    references: [],
  },

  {
    slug: "greece-debt-restructuring",
    title: "그리스 채무재조정 (2012) — 선진국 sovereign 53% 헤어컷",
    titleEn: "Greece Debt Restructuring (2012) — A Developed Country Sovereign Haircut",
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
    published: false,
    snapshot: [
      { labelKo: "발행사", labelEn: "Issuer", value: "Hellenic Republic" },
      { labelKo: "재조정 연도", labelEn: "Restructuring Year", value: "2012" },
      { labelKo: "헤어컷", labelEn: "Haircut", value: "~53.5% NPV" },
      { labelKo: "채권 규모", labelEn: "Bonds Affected", value: "€206B" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: [],
    references: [],
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
    published: false,
    snapshot: [
      { labelKo: "사건 시작", labelEn: "Event Start", value: "2021" },
      { labelKo: "Evergrande 부채", labelEn: "Evergrande Debt", value: "$300B+" },
      { labelKo: "달러채 디폴트", labelEn: "USD Bond Defaults", value: "$100B+" },
      { labelKo: "현황", labelEn: "Status", value: "진행중 (2024~)" },
    ],
    sections: [],
    keyTerms: [],
    relatedMarket101Slugs: ["dcm-ecosystem"],
    references: [],
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
