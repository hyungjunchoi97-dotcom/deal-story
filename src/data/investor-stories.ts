/**
 * investor-stories.ts
 *
 * /stories 섹션 — 유명 투자자·트레이더의 레전드 일화 데이터 SSOT.
 * 카테고리: macro | short | value | pe | blowup
 */

// ── Sub-types ──────────────────────────────────────────────────────────────────

export type StoryCategory = "macro" | "short" | "value" | "pe" | "blowup";

export type StorySnapshotRow = {
  labelKo: string;
  labelEn: string;
  value: string;
};

export type StorySection = {
  heading: string;
  headingEn: string;
  body: string;
  bodyEn: string;
};

export type StoryKeyTerm = {
  term: string;
  termEn: string;
  definition: string;
  definitionEn: string;
};

export type StoryAssessment = {
  positives: string[];
  positivesEn: string[];
  risks: string[];
  risksEn: string[];
};

export type StoryFaq = {
  q: string;
  qEn: string;
  a: string;
  aEn: string;
};

export type StoryReference = {
  id: number;
  author: string;
  title: string;
  source: string;
  year: string;
  url?: string;
};

// ── Main type ──────────────────────────────────────────────────────────────────

export type InvestorStory = {
  slug: string;
  title: string;
  titleEn: string;
  category: StoryCategory;
  /** 주인공 투자자명 */
  investor: string;
  investorEn: string;
  /** 운용 펀드·법인 */
  fund: string;
  fundEn: string;
  dealYear: number;
  excerpt: string;
  excerptEn: string;
  readingMinutes: number;
  tags: string[];
  tagsEn?: string[];
  published: boolean;
  snapshot: StorySnapshotRow[];
  sections: StorySection[];
  keyTerms: StoryKeyTerm[];
  executiveSummary?: { ko: string[]; en: string[] };
  assessment?: StoryAssessment;
  faq?: StoryFaq[];
  references?: StoryReference[];
};

// ── Category metadata ──────────────────────────────────────────────────────────

export const STORY_CATEGORY_META: Record<
  StoryCategory,
  {
    label: string;
    labelEn: string;
    bg: string;
    fg: string;
    dot: string;
    letter: string;
    accent: string;
    accentLight: string;
    accentDark: string;
  }
> = {
  macro: {
    label: "매크로 트레이드",
    labelEn: "Macro Trades",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    fg: "text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
    letter: "M",
    accent: "#d97706",
    accentLight: "#fef3c7",
    accentDark: "#92400e",
  },
  short: {
    label: "공매도",
    labelEn: "Short Selling",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    fg: "text-rose-700 dark:text-rose-300",
    dot: "bg-rose-500",
    letter: "S",
    accent: "#e11d48",
    accentLight: "#ffe4e6",
    accentDark: "#9f1239",
  },
  value: {
    label: "가치 투자",
    labelEn: "Value Investing",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    fg: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
    letter: "V",
    accent: "#059669",
    accentLight: "#d1fae5",
    accentDark: "#065f46",
  },
  pe: {
    label: "PE·바이아웃",
    labelEn: "PE & Buyouts",
    bg: "bg-blue-50 dark:bg-blue-900/20",
    fg: "text-blue-700 dark:text-blue-300",
    dot: "bg-blue-500",
    letter: "P",
    accent: "#2563eb",
    accentLight: "#dbeafe",
    accentDark: "#1e3a8a",
  },
  blowup: {
    label: "대폭락",
    labelEn: "Blowup",
    bg: "bg-gray-100 dark:bg-gray-800/60",
    fg: "text-gray-600 dark:text-gray-400",
    dot: "bg-gray-500",
    letter: "B",
    accent: "#374151",
    accentLight: "#f3f4f6",
    accentDark: "#111827",
  },
};

// ── Category order (for list page rendering) ───────────────────────────────────

export const STORY_CATEGORIES: StoryCategory[] = [
  "macro",
  "short",
  "value",
  "pe",
  "blowup",
];

// ── Helpers ────────────────────────────────────────────────────────────────────

export function getInvestorStoryBySlug(slug: string): InvestorStory | undefined {
  return ALL_INVESTOR_STORIES.find((s) => s.slug === slug);
}

// ── Data ───────────────────────────────────────────────────────────────────────

export const ALL_INVESTOR_STORIES: InvestorStory[] = [
  // ────────────────────────────────────────────────────────────────────────────
  // 1. Soros — 파운드화 공매도 1992
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "soros-pound-1992",
    title: "영란은행을 굴복시킨 거래 — 소로스의 파운드화 공매도",
    titleEn: "Breaking the Bank of England — Soros's Pound Short",
    category: "macro",
    investor: "George Soros",
    investorEn: "George Soros",
    fund: "Soros Fund Management / Quantum Fund",
    fundEn: "Soros Fund Management / Quantum Fund",
    dealYear: 1992,
    excerpt:
      "1992년 9월 16일, 조지 소로스는 약 $100억 규모 파운드화 공매도로 하루 만에 $10억을 벌었다. 영국은 ERM(유럽환율메커니즘)에서 굴욕적으로 탈퇴했고, 소로스는 '영란은행을 무너뜨린 남자'라는 전설을 얻었다.",
    excerptEn:
      "On September 16, 1992, George Soros shorted ~$10 billion in British pounds and made $1 billion in a single day. Britain was forced to exit the ERM in humiliation, and Soros became 'The Man Who Broke the Bank of England.'",
    readingMinutes: 12,
    tags: ["파운드화", "ERM", "매크로", "외환 공매도", "영란은행", "Black Wednesday", "소로스"],
    tagsEn: ["GBP", "ERM", "Macro", "FX Short", "Bank of England", "Black Wednesday", "Soros"],
    published: true,

    snapshot: [
      { labelKo: "투자자", labelEn: "Investor", value: "George Soros" },
      { labelKo: "운용 펀드", labelEn: "Fund", value: "Quantum Fund (Soros Fund Management)" },
      { labelKo: "포지션", labelEn: "Position", value: "GBP/DEM 공매도 (파운드 매도·마르크 매수)" },
      { labelKo: "포지션 규모", labelEn: "Position Size", value: "~$100억 (10 billion USD)" },
      { labelKo: "실현 손익", labelEn: "P&L", value: "+$10억 (단 하루, Black Wednesday)" },
      { labelKo: "사건일", labelEn: "Event Date", value: "1992년 9월 16일 (Black Wednesday)" },
      { labelKo: "레버리지", labelEn: "Leverage", value: "Quantum Fund AUM의 약 130% 수준" },
    ],

    executiveSummary: {
      ko: [
        "ERM은 유럽 각국이 환율을 특정 밴드 내에 고정한 시스템으로, 영국은 1990년 독일 마르크 대비 고평가된 가격에 ERM에 가입했다.",
        "소로스는 영국 경제 펀더멘털(고실업, 저성장)과 ERM 고정환율 사이의 불일치를 간파하고, 영국 정부가 결국 방어를 포기할 것이라 베팅했다.",
        "Black Wednesday 하루 동안 영란은행의 $270억 외환 개입과 금리 12% → 15% 긴급 인상이 모두 실패하면서 파운드화는 ERM 하한선 아래로 붕괴했다.",
        "영국의 ERM 탈퇴 후 파운드화는 약 15% 절하됐고, 이는 소로스에게 $10억 수익을 안겼다.",
      ],
      en: [
        "The ERM fixed European currencies within a band; the UK joined in 1990 with the pound pegged at an overvalued rate against the Deutsche Mark.",
        "Soros identified the contradiction between the UK's weak economic fundamentals (high unemployment, slow growth) and its ERM commitment, betting that Britain would eventually abandon its defense.",
        "On Black Wednesday, the Bank of England's $27B FX intervention and emergency rate hike from 12% to 15% both failed, and the pound collapsed below the ERM floor.",
        "After Britain's ERM exit, sterling fell ~15%, delivering Soros a $1B profit in a single day.",
      ],
    },

    sections: [
      {
        heading: "배경: ERM과 파운드화의 함정",
        headingEn: "Background: The ERM Trap",
        body: `1979년 창설된 ERM(유럽환율메커니즘, European Exchange Rate Mechanism)은 EC(유럽공동체) 회원국들이 자국 통화 환율을 독일 마르크를 기준으로 ±2.25% 밴드 내에 유지하는 약정이었다. 독일 마르크의 신뢰성에 통화를 '페그(peg)'해 인플레이션을 제어하고, 향후 유럽 단일통화(유로) 도입의 기반을 다지는 것이 핵심 목적이었다.

영국은 1990년 10월 ERM에 뒤늦게 가입했다. 이때 파운드화 가입 환율은 2.95 마르크(DEM/GBP)였는데, 당시 영국 경제 상황을 고려하면 명백히 고평가된 수준이었다. 1980년대 후반 부동산 버블이 꺼지면서 영국 경제는 침체에 빠졌고, 실업률은 10%를 넘겼다. 경기를 부양하려면 금리를 낮춰야 했지만, ERM을 지키려면 마르크와의 환율을 방어하기 위해 금리를 높게 유지해야 하는 딜레마에 갇혔다.

반면 독일은 1989년 베를린 장벽 붕괴 이후 통일(Reunification) 비용 조달을 위해 금리를 인상했다. 독일 분데스방크(Bundesbank)의 고금리 정책은 EC 전체에 긴축 효과를 강요했다. 영국처럼 경기 침체 중인 나라에게는 이중고였다 — 국내 경기 부양과 ERM 유지가 정면 충돌했다.`,

        bodyEn: `The ERM (European Exchange Rate Mechanism), established in 1979, required EC member countries to maintain their currencies within a ±2.25% band against the Deutsche Mark. The core idea was to "peg" to the DM's credibility to control inflation and lay the groundwork for eventual European monetary union.

The UK joined the ERM late, in October 1990, at a rate of 2.95 DEM/GBP — clearly overvalued given Britain's economic conditions. After the late-1980s property bubble burst, the UK economy fell into recession with unemployment exceeding 10%. The country needed lower rates to stimulate growth, but defending the ERM peg required keeping rates high to maintain the pound's value against the Mark — a direct contradiction.

Germany, meanwhile, was raising rates to finance reunification costs after the Berlin Wall fell in 1989. The Bundesbank's tight monetary policy imposed deflationary pressure across the EC. For recession-mired economies like Britain, it was a double bind — domestic stimulus and ERM membership were fundamentally incompatible.`,
      },
      {
        heading: "전략: 중앙은행을 상대로 한 비대칭 베팅",
        headingEn: "The Trade: An Asymmetric Bet Against a Central Bank",
        body: `소로스와 그의 수석 포트폴리오 매니저 스탠리 드러켄밀러(Stanley Druckenmiller)는 1992년 여름부터 이 불일치를 분석했다. 드러켄밀러는 소로스에게 처음 파운드화 공매도 아이디어를 제안했고, 소로스는 "규모를 10배로 키워라"고 지시했다고 전해진다.

베팅의 논리는 단순하고 강력했다: **영국이 ERM을 지킬 수 있느냐, 아니냐의 이분법**이었다.

만약 영국이 ERM을 유지한다면? 파운드화 공매도 포지션의 손실은 금리 차이(이자 비용) 수준으로 제한된다. 영국의 단기 금리가 독일보다 높으니 공매도 유지 비용이 발생하지만, 이 비용은 관리 가능한 수준이다.

만약 영국이 ERM을 탈퇴한다면? 파운드화는 즉각 대폭 절하된다. 역사적으로 페그가 붕괴될 때 통화는 수십 퍼센트 하락하는 게 일반적이다. 공매도의 수익은 막대해진다.

이것이 비대칭(Asymmetric) 베팅의 본질이다 — 잃어도 제한적, 이기면 폭발적. 더욱이 영국 정부의 발언과 행동을 보면 ERM 방어 의지에 대한 진정성이 의심스러웠다. 존 메이저(John Major) 총리와 노먼 라몬트(Norman Lamont) 재무장관은 공개적으로 "파운드화를 지킬 것"이라 했지만, 국내 경기 침체 속에서 금리 인상이라는 수단을 실제로 쓸 수 있는 정치적 여력이 없었다.

소로스는 파운드화를 매도하고 독일 마르크와 프랑스 프랑을 매수하는 방식으로 포지션을 구축했다. 선물(Futures), 현물 FX, 옵션 등을 복합적으로 활용해 레버리지를 극대화했다.`,

        bodyEn: `Soros and his chief portfolio manager Stanley Druckenmiller had been analyzing this contradiction since the summer of 1992. Druckenmiller first proposed the pound short to Soros, who reportedly responded: "Scale it up tenfold."

The logic was simple and powerful: **a binary bet on whether Britain would stay in the ERM or not.**

If Britain held the ERM: losses on the pound short would be limited to the interest rate differential (the carry cost). UK short-term rates were higher than German rates, so maintaining the short carried a cost — but a manageable one.

If Britain exited the ERM: the pound would immediately devalue sharply. Historically, when pegs break, currencies typically fall 10–30%. The short's payoff would be enormous.

This is the essence of an asymmetric trade — limited downside, explosive upside. Moreover, the signals from the British government were inconsistent. Prime Minister John Major and Chancellor Norman Lamont publicly pledged to defend sterling, but their ability to raise rates dramatically — the only real tool — was severely constrained by political and economic reality.

Soros built his position by selling sterling and buying Deutsche Marks and French Francs, using a combination of futures, spot FX, and options to maximize leverage.`,
      },
      {
        heading: "실행: Black Wednesday, 1992년 9월 16일",
        headingEn: "Execution: Black Wednesday, September 16, 1992",
        body: `9월 16일 수요일, 역사는 빠르게 움직였다.

**오전**: 파운드화는 ERM 하한선(2.778 DEM)에 바짝 붙어 거래됐다. 영란은행(Bank of England)은 시장에서 수십억 파운드를 직접 매수해 환율을 지지하려 했다. 초기 개입 규모는 약 30억 달러 수준이었다.

**오전 11시**: 영국 정부는 기준금리를 10%에서 12%로 인상했다. 시장은 반응하지 않았다. 환율 방어가 이렇게 쉽게 될 거면 이 위기 자체가 없었을 것이다.

**오후 2시 15분**: 영국 정부는 당일 하루에만 두 번째 금리 인상을 단행해 12%에서 15%로 올렸다. 이는 전례가 없는 초강수였다. 그러나 시장은 여전히 파운드화를 팔았다. 15% 금리가 하루만 지속돼도 담보대출(모기지) 보유자들에게 재앙이었다 — 정치적으로도 지속 불가능한 수준이었다.

**오후 7시 (런던)**: 노먼 라몬트 재무장관이 TV에 나와 영국의 ERM 탈퇴를 선언했다. 기준금리는 다음날 즉시 10%로 되돌아갔다. 영란은행은 당일 하루에만 약 $270억(27 billion dollars)을 소진했다 — 공식적으로 확인된 시장 개입 규모만 해도 영국 외환보유액의 상당 부분이었다.

파운드화는 마르크 대비 즉각 15% 이상 절하됐다. 소로스의 Quantum Fund는 하루 만에 $10억 이상을 벌었다. 이 거래를 포함해 Quantum Fund의 1992년 연간 수익률은 약 130%에 달했다.`,

        bodyEn: `On Wednesday, September 16th, history moved quickly.

**Morning**: The pound traded right at the ERM floor (2.778 DEM/GBP). The Bank of England began directly buying billions of pounds in the open market to support the rate. Initial intervention was around $3 billion.

**11:00 AM**: The UK government raised the base rate from 10% to 12%. Markets were unmoved. If raising rates were this simple a solution, the crisis wouldn't have reached this point.

**2:15 PM**: The government announced a second rate hike in a single day — from 12% to 15%. An unprecedented emergency measure. Yet the market kept selling sterling. A 15% overnight rate was catastrophic for mortgage holders — politically unsustainable by definition.

**7:00 PM (London)**: Chancellor Norman Lamont appeared on television and announced Britain's withdrawal from the ERM. The base rate was restored to 10% effective the next morning. The Bank of England had spent approximately $27 billion in a single day — a large portion of Britain's foreign exchange reserves.

The pound fell more than 15% against the Mark immediately. Soros's Quantum Fund had made over $1 billion in a single day. Including this trade, the Quantum Fund returned approximately 130% in 1992.`,
      },
      {
        heading: "결과: 파운드화 절하와 '예상치 못한' 경기 회복",
        headingEn: "Outcome: Devaluation and Unexpected Recovery",
        body: `영국의 ERM 탈퇴는 단기적으로는 굴욕이었지만, 역설적으로 영국 경제에는 해방구가 됐다.

ERM을 벗어난 영국은 즉각 금리를 인하하고, 파운드화 절하에 의한 수출 경쟁력 회복을 누릴 수 있었다. 1993년부터 영국 경제는 회복 궤도에 올랐다. 반면 ERM을 유지한 국가들(특히 프랑스)은 고금리와 저성장의 고통을 수년간 더 겪었다.

이 아이러니를 두고 영국 언론은 이후 "Black Wednesday가 사실 Golden Wednesday였다"는 평가를 내리기도 했다.

소로스에게는? $10억이라는 수익 외에도 "중앙은행도 이길 수 없다"는 신화가 생겼다. 소로스의 명성은 하늘을 찔렀고, 헤지펀드 산업 전체의 존재감이 비약적으로 높아졌다. 이후 많은 거시 헤지펀드가 같은 방식의 환율 겨냥 전략을 시도했고, 이는 1990년대 후반 아시아 외환위기(1997~1998년) 당시 다시 한번 주목받게 된다.`,

        bodyEn: `Britain's ERM exit was a short-term humiliation but paradoxically became economic liberation.

Free from the ERM, Britain immediately cut interest rates and benefited from the export boost of a weaker pound. The economy recovered from 1993 onward. Countries that remained in the ERM (especially France) suffered years of continued high rates and slow growth.

This irony later prompted British media to describe "Black Wednesday" as "Golden Wednesday" in retrospect.

For Soros, beyond the $1 billion profit, a legend was born: the idea that even central banks can be beaten by sufficiently large and well-reasoned positions. Soros's fame soared, and the hedge fund industry's profile rose dramatically. This playbook of targeting fixed exchange rates was replicated by many macro funds — and drew renewed attention during the Asian currency crisis of 1997-98.`,
      },
      {
        heading: "교훈: 고정환율의 구조적 취약성",
        headingEn: "Lessons: The Structural Fragility of Fixed Exchange Rates",
        body: `소로스의 파운드화 공매도는 단순한 성공담을 넘어 매크로 투자의 핵심 원리를 보여준다.

**1. 비대칭 리스크 구조를 찾아라**: 잃어도 제한적이고 이기면 폭발적인 구조를 설계할 수 있을 때만 대규모 베팅이 정당화된다. 이 거래에서 ERM 페그 유지 시 손실은 이자 비용 정도였고, 붕괴 시 수익은 15%+ 절하였다.

**2. 정치적 제약을 분석하라**: 중앙은행의 "의지"가 아니라 "실제로 쓸 수 있는 수단"을 분석해야 한다. 영국 정부는 의지는 있었지만, 실업률 10% 경제에서 금리를 15%로 올리는 건 정치적으로 유지 불가능했다.

**3. 고정환율 시스템은 언제나 취약하다**: Mundell의 "불가능한 삼위일체(Impossible Trinity)" — 자유로운 자본이동, 고정환율, 독립적 통화정책 — 셋을 동시에 달성하는 건 이론적으로 불가능하다. ERM은 자본이동이 자유로운 상황에서 고정환율을 강제했고, 이는 투기 공격에 취약한 구조였다.

**4. 규모가 논리를 강화한다**: 충분히 대규모의 포지션은 그 자체로 시장 심리를 움직인다. 소로스의 공매도 규모를 시장이 인식했을 때, 다른 플레이어들도 같은 방향으로 움직이며 자기실현적 예언이 됐다.`,

        bodyEn: `Soros's pound trade illustrates the core principles of macro investing beyond a simple success story.

**1. Structure for asymmetric risk**: Large-scale bets are only justified when potential losses are capped and potential gains are explosive. Here, if the ERM held, losses were limited to carry costs; if it broke, gains were 15%+ devaluation.

**2. Analyze political constraints, not stated intentions**: Analyze not a central bank's "will" but the tools it can actually deploy. Britain's government had intent but lacked political capacity to sustain 15% rates in a 10%-unemployment economy.

**3. Fixed exchange rates are always structurally fragile**: Mundell's "Impossible Trinity" — free capital flows, fixed exchange rates, and independent monetary policy — cannot coexist simultaneously. The ERM tried to maintain fixed rates under free capital mobility, creating an inherently attack-able structure.

**4. Scale reinforces logic**: A sufficiently large position moves market psychology by itself. Once the market recognized the scale of Soros's position, other players moved in the same direction — a self-fulfilling prophecy.`,
      },
    ],

    keyTerms: [
      {
        term: "ERM (유럽환율메커니즘)",
        termEn: "ERM (European Exchange Rate Mechanism)",
        definition:
          "유럽 각국이 자국 통화를 독일 마르크 대비 ±2.25% 밴드 내에 유지하기로 약정한 환율 시스템(1979~1999). 유로화 도입을 위한 전환 단계로 설계됐으나, 각국의 경제 사이클 차이를 무시한 구조적 취약점을 안고 있었다.",
        definitionEn:
          "A European exchange rate system (1979–1999) requiring member countries to maintain their currencies within a ±2.25% band against the Deutsche Mark. Designed as a transition step toward the euro, but structurally fragile because it ignored diverging national economic cycles.",
      },
      {
        term: "외환 공매도 (FX Short)",
        termEn: "FX Short Selling",
        definition:
          "특정 통화를 빌려 매도하고, 가격이 하락하면 낮은 가격에 다시 매수해 차익을 남기는 전략. 통화 공매도는 선물, 현물 FX, 옵션 등 다양한 수단으로 실행된다.",
        definitionEn:
          "A strategy of borrowing and selling a currency, then repurchasing it at a lower price to profit from the decline. FX shorts can be executed through futures, spot FX, options, and other instruments.",
      },
      {
        term: "불가능한 삼위일체 (Impossible Trinity)",
        termEn: "Impossible Trinity (Mundell-Fleming Trilemma)",
        definition:
          "자유로운 자본이동, 고정환율, 독립적 통화정책 — 세 가지 정책 목표를 동시에 달성하는 것은 이론적으로 불가능하다는 경제학 원리. 로버트 먼델(Robert Mundell)이 정립. 영국의 ERM 위기는 이 삼위일체의 실증 사례로 자주 인용된다.",
        definitionEn:
          "The economic principle that free capital flows, a fixed exchange rate, and independent monetary policy cannot coexist simultaneously — formalized by Robert Mundell. Britain's ERM crisis is often cited as a textbook illustration.",
      },
      {
        term: "페그 (Peg)",
        termEn: "Currency Peg",
        definition:
          "자국 통화의 가치를 다른 통화(또는 금)에 고정하는 환율 정책. 안정성을 제공하지만, 외부 충격이나 투기 공격에 취약하며 독립적인 통화정책을 포기해야 한다.",
        definitionEn:
          "An exchange rate policy that fixes the value of a currency relative to another currency (or gold). Provides stability but is vulnerable to external shocks or speculative attacks and requires surrendering independent monetary policy.",
      },
    ],

    assessment: {
      positives: [
        "완벽한 비대칭 리스크 구조 — ERM 유지 시 손실은 이자 비용 수준, 붕괴 시 15%+ 수익",
        "경제 펀더멘털(고실업·저성장)과 제도적 제약(고정환율 방어 의지) 간 불일치를 정확히 분석",
        "정치적 현실(금리 15%는 민주주의 사회에서 유지 불가)을 경제 논리와 결합한 통합적 시각",
        "드러켄밀러의 분석 + 소로스의 확신(베팅 규모 10배 지시) — 분석과 실행의 이상적 분업",
      ],
      positivesEn: [
        "Perfect asymmetric risk structure — capped losses if the peg holds, 15%+ gains if it breaks",
        "Precise analysis of the contradiction between economic fundamentals (high unemployment, slow growth) and institutional constraints (ERM defense commitment)",
        "Combined political reality (15% rates unsustainable in a democracy) with economic logic in a unified thesis",
        "Druckenmiller's analysis + Soros's conviction (ordering 10x position size) — ideal division between analysis and execution",
      ],
      risks: [
        "타이밍 리스크: ERM 방어가 예상보다 오래 지속됐다면 이자 비용이 누적돼 포지션 유지가 어려워질 수 있었다",
        "정치적 불확실성: 독일이 금리를 낮추거나 EC가 공조해 파운드화를 지원했다면 결과가 달라질 수 있었다",
        "이후 규제 강화: 이 사건을 계기로 각국 중앙은행과 규제 당국은 대규모 투기 포지션에 대한 모니터링을 강화했다",
        "복제의 한계: 소로스의 성공은 다른 투기꾼들의 모방을 낳았고, 1997년 아시아 외환위기에서는 방어 국가들의 더 강력한 저항에 부딪히기도 했다",
      ],
      risksEn: [
        "Timing risk: if ERM defense had lasted longer than expected, carry costs would have accumulated and made the position difficult to maintain",
        "Political uncertainty: if Germany had cut rates or EC members had coordinated to support sterling, the outcome could have differed",
        "Regulatory consequences: this event prompted central banks and regulators worldwide to intensify monitoring of large speculative positions",
        "Replication limits: Soros's success spawned imitators; during the 1997 Asian currency crisis, defending countries mounted much more determined resistance",
      ],
    },

    faq: [
      {
        q: "소로스는 어떻게 $100억 규모의 포지션을 구축했나? 이 돈이 다 그의 돈인가?",
        qEn: "How did Soros build a $10B position? Was all of this his own money?",
        a: "아니다. 이것이 레버리지의 핵심이다. Quantum Fund의 실제 운용 자산(AUM)은 당시 약 $70억 수준이었지만, 선물·옵션·차입 포지션을 통해 실제 익스포저를 $100억 이상으로 키웠다. 즉 AUM의 약 130~150%에 해당하는 레버리지 포지션이었다. 헤지펀드는 차입 자금과 파생상품을 통해 자기 자본보다 훨씬 큰 포지션을 운영할 수 있다.",
        aEn: "No — and this is the essence of leverage. Quantum Fund's actual AUM was approximately $7 billion at the time, but Soros used futures, options, and borrowed positions to build exposure exceeding $10 billion. That's roughly 130–150% of AUM in leverage. Hedge funds can hold positions far larger than their actual capital through borrowed money and derivatives.",
      },
      {
        q: "영란은행은 왜 그렇게 쉽게 졌나? 중앙은행이 무한 화폐를 찍으면 되는 거 아닌가?",
        qEn: "Why did the Bank of England lose so easily? Can't a central bank just print unlimited money?",
        a: "중앙은행은 자국 통화를 무제한 발행할 수 있지만, '외국 통화'는 그렇지 않다. 파운드화를 지키려면 마르크를 매수해야 하는데, 이 마르크는 외환보유액에서 나온다. 영국의 외환보유액은 유한했고, $270억을 소진한 뒤에는 더 이상 방어할 실탄이 없었다. 또한 금리를 15%까지 올리는 것은 이론상 가능했지만, 영국 경제와 정치 현실에서는 지속 불가능한 수준이었다.",
        aEn: "A central bank can print unlimited amounts of its own currency, but not foreign currency. To support sterling, the Bank needed to buy Deutsche Marks — which could only come from foreign exchange reserves. Britain's reserves were finite; after spending $27 billion, there was no ammunition left. Meanwhile, while raising rates to 15% was technically possible, it was politically and economically unsustainable given Britain's recession.",
      },
      {
        q: "이 거래가 이후 금융 시장에 미친 영향은?",
        qEn: "What lasting impact did this trade have on financial markets?",
        a: "세 가지 측면에서 중요한 영향을 남겼다. 첫째, 헤지펀드의 위상 — 기관 투자자들이 헤지펀드를 '포트폴리오 다각화' 수단으로 진지하게 고려하게 됐다. 둘째, 고정환율 제도의 한계 — ERM은 1993년 밴드를 ±15%로 확대하며 사실상 형해화됐고, 유럽은 더 빠르게 단일통화 도입(유로화)을 추진했다. 셋째, 매크로 전략의 확산 — 소로스의 성공은 폴 존스(Paul Tudor Jones), 브루스 코프너(Bruce Kovner) 등 이후 세대 매크로 트레이더들에게 교과서 사례가 됐다.",
        aEn: "The impact was significant on three levels. First, hedge fund credibility — institutional investors began seriously considering hedge funds as portfolio diversification tools. Second, fixed exchange rate limitations — the ERM widened its band to ±15% in 1993, effectively becoming a flexible system; Europe accelerated the push for a single currency (the euro). Third, macro strategy proliferation — Soros's success became a textbook case for a generation of macro traders including Paul Tudor Jones and Bruce Kovner.",
      },
    ],

    references: [
      {
        id: 1,
        author: "Soros, George",
        title: "The Alchemy of Finance",
        source: "Wiley",
        year: "1994",
      },
      {
        id: 2,
        author: "Mallaby, Sebastian",
        title: "More Money Than God: Hedge Funds and the Making of a New Elite",
        source: "Penguin Press",
        year: "2010",
      },
      {
        id: 3,
        author: "Bank of England",
        title: "The 1992 ERM Crisis (Quarterly Bulletin)",
        source: "Bank of England Quarterly Bulletin",
        year: "1993",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 2. Bill Hwang / Archegos Capital 2021
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "bill-hwang-archegos-2021",
    title: "4일 만에 $200억이 사라졌다 — 빌 황과 아케고스 캐피털",
    titleEn: "$20 Billion Gone in Four Days — Bill Hwang and Archegos Capital",
    category: "blowup",
    investor: "Bill Hwang (황성국)",
    investorEn: "Bill Hwang (Sung Kook Hwang)",
    fund: "Archegos Capital Management",
    fundEn: "Archegos Capital Management",
    dealYear: 2021,
    excerpt:
      "2021년 3월, 아케고스 캐피털은 총수익스왑(TRS)을 이용한 초고레버리지 집중 포지션이 마진콜을 맞으면서 단 4일 만에 붕괴했다. 빌 황의 $200억 순자산은 사라지고, 크레디트스위스·노무라 등 프라임 브로커들은 총 $100억 이상 손실을 입었다.",
    excerptEn:
      "In March 2021, Archegos Capital imploded in four days after margin calls triggered forced liquidation of its highly leveraged, concentrated positions built through total return swaps. Bill Hwang's $20B net worth evaporated, and prime brokers including Credit Suisse and Nomura collectively lost over $10 billion.",
    readingMinutes: 13,
    tags: [
      "아케고스", "빌 황", "TRS", "마진콜", "레버리지", "패밀리 오피스", "프라임 브로커",
    ],
    tagsEn: [
      "Archegos", "Bill Hwang", "TRS", "Margin Call", "Leverage", "Family Office", "Prime Broker",
    ],
    published: true,

    snapshot: [
      { labelKo: "투자자", labelEn: "Investor", value: "Bill Hwang (황성국)" },
      { labelKo: "운용 법인", labelEn: "Entity", value: "Archegos Capital Management (패밀리 오피스)" },
      { labelKo: "포지션 구조", labelEn: "Structure", value: "Total Return Swap (TRS) — 규제 회피형 레버리지" },
      { labelKo: "추정 노셔널 규모", labelEn: "Notional Size", value: "~$1,000억 (100 billion USD)" },
      { labelKo: "실제 AUM", labelEn: "Actual AUM", value: "~$200억 (2021년 초 기준)" },
      { labelKo: "레버리지 배율", labelEn: "Leverage", value: "약 5~8배 (포지션 / AUM)" },
      { labelKo: "빌 황 손실", labelEn: "Hwang's Loss", value: "~$200억 (순자산 전액에 가까운 손실)" },
      { labelKo: "프라임 브로커 손실", labelEn: "PB Losses", value: "Credit Suisse ~$47억, 노무라 ~$29억 등 총 ~$100억+" },
      { labelKo: "붕괴 기간", labelEn: "Collapse Duration", value: "2021년 3월 22~26일 (4 거래일)" },
    ],

    executiveSummary: {
      ko: [
        "아케고스는 패밀리 오피스 형태로 운영돼 헤지펀드 규정을 피했고, TRS(총수익스왑)를 통해 주식을 직접 보유하지 않으면서도 대규모 레버리지 포지션을 구축했다.",
        "비아콤CBS, 디스커버리, GSX 테크에듀 등 소수 종목에 AUM의 수배에 달하는 집중 포지션을 보유했다.",
        "2021년 3월 비아콤CBS 주가 급락을 시작으로 마진콜이 발동됐고, 아케고스가 추가 증거금을 납부하지 못하자 프라임 브로커들의 강제 청산이 연쇄적으로 시작됐다.",
        "프라임 브로커들 간 정보 공유가 없었기 때문에, 각 은행은 아케고스의 총 레버리지 규모를 알지 못했다 — 이것이 손실을 걷잡을 수 없이 키웠다.",
      ],
      en: [
        "Archegos operated as a family office to avoid hedge fund regulations and built massive leveraged positions through TRS (total return swaps) without directly holding the underlying stocks.",
        "It concentrated positions worth multiples of AUM in a handful of stocks: ViacomCBS, Discovery, GSX Techedu, and others.",
        "A sharp decline in ViacomCBS shares in March 2021 triggered margin calls; when Archegos couldn't meet them, prime brokers began forced liquidations in a cascading sequence.",
        "The absence of information-sharing among prime brokers meant no single bank knew Archegos's total leverage exposure — this catastrophically amplified the losses.",
      ],
    },

    sections: [
      {
        heading: "배경: 타이거 커브에서 패밀리 오피스로",
        headingEn: "Background: From Tiger Cub to Family Office",
        body: `빌 황(황성국)은 줄리안 로버트슨(Julian Robertson)이 설립한 타이거 매니지먼트(Tiger Management) 출신 '타이거 커브(Tiger Cub)' 중 한 명이다. 로버트슨의 문하에서 기본적 분석(Fundamental Analysis) 기반의 주식 롱숏 전략을 익혔다.

2001년 독립해 Tiger Asia Management를 설립했으나, 2012년 홍콩 주식 내부자거래 및 시세조종 혐의를 인정하고 $4,400만 벌금을 납부했다. 이로 인해 SEC에 외부 투자자 자금 운용이 금지됐다.

여기서 아케고스가 탄생한다. 아케고스(Archegos)는 그리스어로 '선두를 이끄는 자(leader, the one who goes first)'라는 뜻이다. 빌 황은 자신의 개인 재산(패밀리 오피스)만을 운용하는 구조로 전환해 외부 투자자 자금 없이도 포지션을 계속 운영했다.

패밀리 오피스는 외부 투자자가 없으면 SEC에 투자자문업자(RIA) 등록 의무가 없고, 보유 포지션 공개 의무도 훨씬 완화된다. 아케고스는 이 규제 공백을 최대한 활용했다.`,

        bodyEn: `Bill Hwang was a "Tiger Cub" — an alumnus of Julian Robertson's Tiger Management. Under Robertson, he mastered fundamental analysis-based long-short equity strategies.

He founded Tiger Asia Management independently in 2001, but in 2012 admitted to insider trading and market manipulation in Hong Kong stocks, paying $44 million in fines. The SEC barred him from managing outside investors' capital.

This is where Archegos was born. "Archegos" is Greek for "leader" or "the one who goes first." Hwang restructured as a family office — managing only his personal wealth — allowing him to continue operating without outside investors.

Family offices without outside clients aren't required to register as investment advisers with the SEC and face far fewer disclosure requirements on positions held. Archegos exploited this regulatory gap to the maximum.`,
      },
      {
        heading: "전략: Total Return Swap과 보이지 않는 레버리지",
        headingEn: "The Strategy: Total Return Swaps and Invisible Leverage",
        body: `아케고스의 핵심은 TRS(Total Return Swap, 총수익스왑)의 활용이었다.

TRS는 투자자(아케고스)가 주가 상승분과 배당을 받는 대신 이자(파이낸싱 비용)를 프라임 브로커에게 지급하는 파생상품이다. 법적으로 주식을 직접 보유하는 것은 프라임 브로커이며, 아케고스는 '경제적 이익(economic exposure)'만 가진다. 이 구조의 핵심 효과는 두 가지다:

**규제 회피**: 주식을 5% 이상 보유한 '실질 소유자'가 아니기 때문에, 13D/13G 보고서(미국 주요 주주 공시) 제출 의무가 없다. 시장은 아케고스의 포지션 규모를 알 수 없다.

**레버리지**: 증거금(Initial Margin)만 내면 그 수배의 포지션을 운영할 수 있다. 프라임 브로커별로 10~20% 증거금을 요구했다면, 아케고스는 $1를 내고 $5~10의 주식 포지션을 운영한 셈이다.

빌 황은 골드만삭스, 모건스탠리, 크레디트스위스, 노무라, UBS, 도이치뱅크 등 6개 이상의 프라임 브로커와 동시에 TRS 계약을 체결했다. 각 은행은 자신이 아케고스의 단일 상대방인 줄 알았지만, 아케고스는 모든 은행에서 동시에 포지션을 구축하고 있었다. 은행 간에는 포지션 정보가 공유되지 않았다.

주요 집중 포지션 (추정):
- 비아콤CBS(VIAC): AUM 수배에 달하는 규모
- 디스커버리(DISCA): 동일
- GSX 테크에듀: 동일
- 텐센트 뮤직, 바이두 등 중국 ADR: 상당한 규모`,

        bodyEn: `The heart of Archegos's strategy was the TRS (Total Return Swap).

In a TRS, Archegos received the stock's price appreciation and dividends while paying interest (financing costs) to the prime broker. The prime broker legally owns the shares; Archegos holds only the "economic exposure." This structure had two key effects:

**Regulatory evasion**: Since Archegos wasn't the legal owner of more than 5% of any stock, it had no obligation to file 13D/13G reports (major shareholder disclosures required in the US). The market had no visibility into Archegos's position sizes.

**Leverage**: By putting up only an initial margin, Archegos could control positions many times larger. If prime brokers required 10–20% margin, Archegos was effectively running $5–10 of stock exposure for every $1 deployed.

Hwang had simultaneous TRS contracts with six or more prime brokers: Goldman Sachs, Morgan Stanley, Credit Suisse, Nomura, UBS, Deutsche Bank, and others. Each bank believed it was the primary counterparty; none knew the others existed. There was no information-sharing across banks.

Key concentrated positions (estimated):
- ViacomCBS (VIAC): multiples of AUM
- Discovery (DISCA): similar
- GSX Techedu: similar
- Tencent Music, Baidu, and other Chinese ADRs: substantial`,
      },
      {
        heading: "붕괴: 4일간의 마진콜 쓰나미",
        headingEn: "The Collapse: Four Days of Margin Call Tsunami",
        body: `**2021년 3월 22~23일**: 비아콤CBS가 $29억 규모 주식 발행을 공시하며 주가가 급락하기 시작했다. 아케고스의 비아콤CBS 포지션 손실이 발생하면서 프라임 브로커들의 마진콜이 시작됐다.

**3월 24일(수)**: 빌 황은 긴급 회의를 열어 골드만삭스, 모건스탠리, 크레디트스위스, 노무라 등 6개 은행의 대표들을 한 자리에 불러 "질서있는 청산(Orderly Unwind)"을 제안했다. 아케고스가 포지션을 천천히 청산하면서 시장 충격을 최소화하자는 것이었다. 골드만삭스와 모건스탠리는 이 제안을 거부하고 즉각 독자 청산에 나섰다.

**3월 25일(목) 새벽**: 골드만삭스와 모건스탠리가 블록딜(대량 매도)을 시작했다. 비아콤CBS, 디스커버리 주가가 장 전(Pre-market)부터 30~50% 폭락했다. 다른 은행들의 강제 청산도 연달아 시작됐다.

**3월 26일(금)**: 전체 포지션 강제 청산 완료. 빌 황의 순자산 $200억은 사실상 소멸했다.

가장 큰 피해를 입은 것은 '질서있는 청산' 논의에 시간을 쏟다 늦게 청산에 나선 크레디트스위스와 노무라였다. 크레디트스위스는 약 $47억, 노무라는 약 $29억 손실을 입었다. 반면 즉각 행동에 나선 골드만삭스와 모건스탠리의 손실은 미미했다.`,

        bodyEn: `**March 22–23, 2021**: ViacomCBS announced a $2.9B equity offering, sending its stock into sharp decline. Losses on Archegos's ViacomCBS TRS triggered the first margin calls from prime brokers.

**March 24 (Wednesday)**: Bill Hwang convened an emergency meeting with representatives from Goldman Sachs, Morgan Stanley, Credit Suisse, Nomura, and other banks, proposing an "orderly unwind" — a slow, coordinated liquidation to minimize market impact. Goldman and Morgan Stanley rejected the proposal and immediately began independent liquidations.

**March 25 (Thursday) pre-market**: Goldman Sachs and Morgan Stanley began block sales. ViacomCBS and Discovery fell 30–50% before the open. Forced liquidations cascaded across all prime brokers.

**March 26 (Friday)**: All positions were fully liquidated. Bill Hwang's $20 billion net worth was essentially wiped out.

The worst damage fell on Credit Suisse and Nomura — the banks that spent time in "orderly unwind" discussions and were slowest to act. Credit Suisse lost approximately $4.7 billion; Nomura lost approximately $2.9 billion. Goldman Sachs and Morgan Stanley, which moved immediately, suffered minimal losses.`,
      },
      {
        heading: "교훈: 레버리지·집중·투명성 실패의 삼중주",
        headingEn: "Lessons: Leverage, Concentration, and Transparency Failure",
        body: `아케고스 붕괴는 세 가지 리스크 관리 실패의 교과서적 사례다.

**1. 과도한 레버리지**: 5~8배 레버리지는 포지션이 20~13% 하락하면 자본 전액이 소멸한다는 의미다. 빌 황은 과거 타이거 아시아 시절 큰 수익을 냈지만, 패밀리 오피스에서 규제 감독 없이 동일 전략을 훨씬 큰 레버리지로 운영했다.

**2. 집중 리스크(Concentration Risk)**: 소수 종목에 AUM의 수배를 집중하면, 단 하나의 포지션 악화로 전체가 무너질 수 있다. 아케고스는 비아콤CBS 하나의 주가 급락으로 시스템 전체가 붕괴됐다.

**3. 카운터파티 리스크와 투명성 부재**: 프라임 브로커들은 각자 아케고스가 자신들에게만 포지션을 가진 줄 알았다. 실제로는 동일 포지션을 6개 이상의 은행에 분산 구축했고, 총 노셔널 규모는 $1,000억에 달했다. 이 정보 비대칭이 손실을 폭발적으로 키웠다.

**규제 후속 조치**: 이 사건은 패밀리 오피스의 보고 의무 강화와 TRS 익스포저 공시 규정 도입 논의를 촉발했다. SEC는 2023년 대규모 포지션의 13F 보고 의무를 강화하는 규정을 개정했다.`,

        bodyEn: `The Archegos collapse is a textbook case of three simultaneous risk management failures.

**1. Excessive leverage**: 5–8x leverage means a 20–13% position decline wipes out all capital. Hwang had generated strong returns at Tiger Asia, but at Archegos — without regulatory oversight — he ran the same strategy at far higher leverage with no external checks.

**2. Concentration risk**: Concentrating multiples of AUM in a few stocks means a single position's deterioration can bring down everything. One ViacomCBS decline triggered total system collapse.

**3. Counterparty risk and information asymmetry**: Prime brokers each believed they were Archegos's sole counterparty. In reality, Archegos had distributed the same positions across 6+ banks, with total notional exposure approaching $100 billion. This information asymmetry explosively amplified losses.

**Regulatory aftermath**: This event triggered discussions about strengthening family office reporting requirements and TRS disclosure rules. The SEC revised 13F reporting obligations in 2023 to enhance transparency around large positions.`,
      },
    ],

    keyTerms: [
      {
        term: "TRS (총수익스왑)",
        termEn: "TRS (Total Return Swap)",
        definition:
          "한쪽(투자자)이 기초자산(주식 등)의 총수익(가격 변화 + 배당)을 받는 대신, 상대방(프라임 브로커)에게 이자(파이낸싱 비용)를 지급하는 파생상품 계약. 투자자는 주식을 직접 보유하지 않으므로 주주 공시 의무를 피할 수 있다.",
        definitionEn:
          "A derivative contract in which one party (the investor) receives the total return of an underlying asset (price + dividends) while paying interest to the other party (the prime broker). Since the investor doesn't directly own the shares, major shareholder disclosure requirements can be avoided.",
      },
      {
        term: "마진콜 (Margin Call)",
        termEn: "Margin Call",
        definition:
          "레버리지 포지션의 담보 가치가 일정 수준 이하로 떨어질 때, 브로커가 투자자에게 추가 증거금 납부 또는 포지션 일부 청산을 요구하는 것. 투자자가 이를 이행하지 못하면 강제청산이 집행된다.",
        definitionEn:
          "A demand by a broker for an investor to deposit additional collateral or partially liquidate positions when the value of a leveraged position falls below a specified threshold. Failure to meet a margin call triggers forced liquidation.",
      },
      {
        term: "패밀리 오피스 (Family Office)",
        termEn: "Family Office",
        definition:
          "단일 가문 또는 고액 자산가의 재산을 전담으로 운용하는 사적 투자 법인. 외부 투자자가 없으면 등록 요건이 대폭 완화되고, 포지션 공시 의무도 느슨해진다. 아케고스는 이 구조를 규제 회피 수단으로 활용했다.",
        definitionEn:
          "A private investment firm that exclusively manages the wealth of a single family or high-net-worth individual. With no outside investors, registration requirements are significantly relaxed and position disclosure obligations are looser. Archegos used this structure as a regulatory evasion mechanism.",
      },
      {
        term: "블록딜 (Block Trade)",
        termEn: "Block Trade",
        definition:
          "거래소 외부에서 기관 간에 대량의 주식을 일괄 매매하는 거래 방식. 시장 충격을 최소화하기 위해 장 전(Pre-market)에 진행되는 경우가 많다. 아케고스 붕괴 시 골드만삭스·모건스탠리가 새벽에 대규모 블록딜을 실행했다.",
        definitionEn:
          "A large-volume stock trade executed between institutional parties outside the open exchange, often before market open to minimize market impact. Goldman Sachs and Morgan Stanley executed massive pre-market block trades during the Archegos unwind.",
      },
    ],

    assessment: {
      positives: [
        "빌 황은 타이거 아시아 시절 펀더멘털 분석 역량은 뛰어났고, 이를 기반으로 2012년 이후에도 막대한 수익을 거뒀다 — 아케고스 붕괴 직전 AUM은 약 $200억으로 성장했다",
        "TRS와 패밀리 오피스 구조를 활용한 규제 공백 발견은 창의적이었다 (비록 이후 규제 강화로 이어졌지만)",
      ],
      positivesEn: [
        "Hwang demonstrated strong fundamental analysis skills from his Tiger Asia days, generating massive returns in the years after 2012 — growing Archegos to approximately $20B AUM before the collapse",
        "The discovery and use of the TRS/family office regulatory gap was creative (though it ultimately triggered tighter regulation)",
      ],
      risks: [
        "레버리지 과잉: 5~8배 레버리지는 소수 포지션에 집중 투자 시 단일 충격으로 전멸 가능한 구조 — 리스크 관리의 기본 원칙 위반",
        "집중도 과잉: 소수 종목에 AUM 수배 집중은 포트폴리오 이론의 기본인 분산투자 원칙 전면 위배",
        "카운터파티 기만: 여러 은행에 동일 포지션을 분산하면서 총 익스포저를 숨긴 것은 윤리·법률적으로 심각한 문제",
        "빌 황은 2023년 미국 연방법원에서 사기·증권법 위반으로 유죄 평결을 받았다 (항소 중)",
      ],
      risksEn: [
        "Excessive leverage: 5–8x leverage on concentrated positions creates a structure where a single shock can cause total wipeout — a fundamental violation of risk management principles",
        "Excessive concentration: Multiples of AUM in a handful of stocks directly violates the most basic principle of portfolio theory",
        "Counterparty deception: Spreading identical positions across multiple banks while hiding total exposure raises serious ethical and legal concerns",
        "Hwang received a guilty verdict on fraud and securities law violations in US federal court in 2023 (under appeal)",
      ],
    },

    faq: [
      {
        q: "아케고스가 왜 이렇게 오래 버틸 수 있었나? 은행들은 왜 몰랐나?",
        qEn: "How did Archegos survive so long undetected? Why didn't the banks know?",
        a: "두 가지 이유다. 첫째, TRS 구조 때문에 주식 법적 소유자는 프라임 브로커였고, 아케고스는 공시 의무가 없었다. 둘째, 아케고스는 여러 은행과 계약을 분산해 어느 한 은행도 전체 포지션 규모를 알 수 없었다. 각 은행은 자신이 아케고스의 유일한 TRS 카운터파티라고 생각했다. 미국 규정상 패밀리 오피스는 포지션 공시 의무가 없었다.",
        aEn: "Two reasons. First, under the TRS structure, prime brokers were the legal owners of the shares, so Archegos had no disclosure obligations. Second, Archegos distributed contracts across multiple banks so no single bank could see the total exposure. Each bank believed it was Archegos's sole TRS counterparty. Under US regulations at the time, family offices had no position disclosure requirements.",
      },
      {
        q: "크레디트스위스가 왜 제일 큰 피해를 입었나?",
        qEn: "Why did Credit Suisse suffer the largest losses?",
        a: "크레디트스위스는 '질서있는 청산' 논의에 가장 오래 참여했고, 골드만삭스·모건스탠리가 새벽에 이미 블록딜을 시작할 때까지 청산을 보류했다. 선제적으로 청산한 은행들은 적정 가격에 포지션을 줄였지만, 크레디트스위스는 주가가 이미 30~50% 폭락한 뒤에 청산해야 했다. 이 사건은 이미 취약했던 크레디트스위스의 리스크 관리 문제를 대외적으로 드러냈고, 2023년 크레디트스위스 붕괴의 전조 중 하나로 분류된다.",
        aEn: "Credit Suisse participated longest in the 'orderly unwind' discussions and held off liquidating while Goldman Sachs and Morgan Stanley were already executing pre-market block trades. Banks that moved first unwound at reasonable prices; Credit Suisse had to liquidate after stocks had already fallen 30–50%. This event publicly exposed Credit Suisse's pre-existing risk management weaknesses and is considered one of the precursors to Credit Suisse's eventual collapse in 2023.",
      },
    ],

    references: [
      {
        id: 1,
        author: "Zuckerman, Gregory & Lim, Gregory",
        title: "How Bill Hwang Built Up to $160 Billion, Then Lost It All",
        source: "The Wall Street Journal",
        year: "2021",
      },
      {
        id: 2,
        author: "U.S. Department of Justice",
        title: "United States v. Sung Kook (Bill) Hwang et al.",
        source: "SDNY (Southern District of New York)",
        year: "2022",
      },
      {
        id: 3,
        author: "Financial Stability Board",
        title: "Non-Bank Financial Intermediation: 2022 Annual Report",
        source: "FSB",
        year: "2022",
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // 3. Warren Buffett — 일본 종합상사 투자 2020
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "buffett-japan-2020",
    title: "버핏, 일본에 베팅하다 — 종합상사 투자와 엔화 캐리",
    titleEn: "Buffett Bets on Japan — The Sogo Shosha Trade and Yen Carry",
    category: "value",
    investor: "Warren Buffett",
    investorEn: "Warren Buffett",
    fund: "Berkshire Hathaway",
    fundEn: "Berkshire Hathaway",
    dealYear: 2020,
    excerpt:
      "2020년 8월 90번째 생일에 워렌 버핏은 일본 5대 종합상사(이토추·마루베니·미쓰비시·미쓰이·스미토모)에 각 5%씩 투자했다고 공개했다. 엔화 채권을 발행해 주식을 매수하는 '자연 헤지' 구조로, 2023년까지 각 지분을 약 8.5%로 늘렸다. 취득원가 대비 수익률은 3배를 넘어섰다.",
    excerptEn:
      "On his 90th birthday in August 2020, Warren Buffett revealed a ~5% stake in each of Japan's five largest trading companies (Itochu, Marubeni, Mitsubishi, Mitsui, Sumitomo). Funded through yen-denominated bond issuances — a natural hedge — Berkshire increased each stake to ~8.5% by 2023. Returns have exceeded 3x the acquisition cost.",
    readingMinutes: 10,
    tags: [
      "버핏", "일본 종합상사", "엔화 캐리", "가치 투자", "자연 헤지", "이토추", "버크셔 해서웨이",
    ],
    tagsEn: [
      "Buffett", "Sogo Shosha", "Yen Carry", "Value Investing", "Natural Hedge", "Itochu", "Berkshire Hathaway",
    ],
    published: true,

    snapshot: [
      { labelKo: "투자자", labelEn: "Investor", value: "Warren Buffett" },
      { labelKo: "운용 법인", labelEn: "Entity", value: "Berkshire Hathaway Inc." },
      { labelKo: "투자 대상", labelEn: "Investments", value: "이토추·마루베니·미쓰비시·미쓰이·스미토모 (각 5% → 8.5%+)" },
      { labelKo: "투자 방법", labelEn: "Funding", value: "엔화 표시 채권 발행 → 엔화 주식 매수 (자연 헤지)" },
      { labelKo: "공시일", labelEn: "Disclosure Date", value: "2020년 8월 30일 (버핏 90번째 생일)" },
      { labelKo: "최초 취득 금액", labelEn: "Initial Investment", value: "약 $62억 (6.2 billion USD)" },
      { labelKo: "2023년 평가이익", labelEn: "Unrealized Gain (2023)", value: "+$80억+ (취득원가 대비 3배+)" },
      { labelKo: "배당수익률 (취득원가 기준)", labelEn: "Yield on Cost", value: "약 5~7% (증가 추세)" },
    ],

    executiveSummary: {
      ko: [
        "일본 종합상사는 자원·물류·금융을 아우르는 복합 사업체로, 2020년 당시 PBR 0.5~0.8배 수준의 극도로 저평가된 상태였다.",
        "버핏은 엔화 채권을 발행해 투자 자금을 조달함으로써, 주가 상승뿐 아니라 엔화/달러 환율 변동 리스크를 자연스럽게 헤지했다.",
        "종합상사들은 높은 배당과 자사주 매입을 통해 주주환원을 강화하고 있었으며, 버핏은 이를 '잃어버린 30년' 이후 일본 기업 지배구조 개혁의 수혜로 봤다.",
        "2023년 버핏은 직접 도쿄를 방문해 각 상사 경영진을 만났으며, '보유 기간은 영원히(forever)'라고 언급했다.",
      ],
      en: [
        "Japan's sogo shosha (general trading companies) are diversified conglomerates spanning resources, logistics, and finance — trading at deeply discounted valuations of 0.5–0.8x book in 2020.",
        "By funding the investment through yen-denominated bond issuances, Buffett naturally hedged the yen/dollar currency exposure alongside the equity upside.",
        "The trading companies were actively increasing shareholder returns through rising dividends and buybacks — Buffett saw this as benefiting from Japanese corporate governance reforms after the 'lost decades.'",
        "In 2023, Buffett personally visited Tokyo to meet with each company's management and stated his intended holding period was 'forever.'",
      ],
    },

    sections: [
      {
        heading: "배경: '잃어버린 30년'과 저평가된 종합상사",
        headingEn: "Background: The 'Lost Decades' and Undervalued Sogo Shosha",
        body: `일본 종합상사(Sogo Shosha, 総合商社)는 이토추(伊藤忠商事), 마루베니(丸紅), 미쓰비시상사(三菱商事), 미쓰이물산(三井物産), 스미토모상사(住友商事) 5개 대형사를 가리킨다. 에너지, 금속, 식품, 기계, 금융, 물류까지 수천 개의 사업에 지분을 가진 거대 복합기업이다.

1990년대 버블 붕괴 이후 일본 증시는 '잃어버린 30년(Lost Decades)'을 겪었다. 기업들은 자기자본이익률(ROE)이 낮고, 현금을 쌓아두면서 배당은 하지 않는 '현금 쌓기(Cash Hoarding)' 관행이 만연했다. 종합상사들도 예외가 아니었고, 2020년 기준 PBR(주가순자산비율)이 0.5~0.8배 수준 — 즉 청산 가치보다 낮은 가격에 거래되고 있었다.

그러나 2013년 아베노믹스 이후, 특히 2023년 도쿄증권거래소(TSE)의 PBR 1배 이하 기업에 대한 개선 압박 등으로 일본 기업들의 주주환원 의식이 빠르게 변화하고 있었다. 종합상사들은 배당 성향을 높이고, 자사주 매입을 늘리고, 저수익 사업 정리를 적극화했다.`,

        bodyEn: `Japan's sogo shosha — Itochu, Marubeni, Mitsubishi Corporation, Mitsui & Co., and Sumitomo Corporation — are massive conglomerates holding stakes in thousands of businesses spanning energy, metals, food, machinery, finance, and logistics.

After Japan's bubble burst in the 1990s, the stock market endured the "Lost Decades." Companies typically had low return on equity (ROE), hoarded cash, and paid minimal dividends. The trading companies were no exception; by 2020 they traded at price-to-book ratios of 0.5–0.8x — below liquidation value.

However, since Abenomics in 2013, and especially with the Tokyo Stock Exchange's 2023 pressure campaign for sub-1.0x PBR companies to improve, Japanese corporate attitudes toward shareholder returns were rapidly shifting. The sogo shosha were raising dividend payout ratios, increasing buybacks, and aggressively divesting low-return businesses.`,
      },
      {
        heading: "전략: 엔화 채권으로 '자연 헤지' + 가치 투자",
        headingEn: "The Strategy: Yen Bonds as Natural Hedge + Value Investing",
        body: `버핏의 이 거래에서 가장 주목할 점은 자금 조달 방식이다.

버크셔 해서웨이는 일본 투자를 위해 **엔화 표시 채권(Yen-denominated Bonds)**을 직접 발행했다. 즉, 달러를 엔화로 환전해 투자하는 것이 아니라, 엔화로 빌려서 엔화 자산(일본 주식)을 매수했다.

이 구조의 효과:

**자연 헤지(Natural Hedge)**: 부채(엔화 채권)와 자산(엔화 주식)이 모두 엔화 표시다. 엔화가 달러 대비 약세가 되면 주식 가치도 하락하지만, 동시에 채권 상환 부담도 줄어든다. 환율 변동의 영향이 양쪽을 동시에 상쇄한다. (완벽하진 않지만 상당한 헤지 효과.)

**저금리 파이낸싱**: 2020년 일본의 단기 금리는 -0.1%, 장기 금리도 0~0.5% 수준이었다. 버크셔는 이 낮은 금리로 자금을 조달해 5~7% 배당 수익률의 주식을 매수했다 — 스프레드(배당 - 이자 비용)만으로도 수익이 발생하는 구조다.

버핏이 종합상사를 선택한 이유:
- **밸류에이션**: PBR 0.5~0.8배, 저PER, 고배당
- **사업 구조**: 전 세계 자원·상품에 분산된 포트폴리오 — 버크셔가 직접 운영하는 사업들과 유사한 성격
- **주주환원**: 배당 성향 증가, 자사주 매입 확대 추세
- **지배구조 개선**: 아베노믹스·TSE 개혁 이후 경영 효율화 압력`,

        bodyEn: `The most remarkable aspect of this trade is how Buffett financed it.

Berkshire Hathaway issued **yen-denominated bonds** directly to fund the Japan investment — borrowing in yen and buying yen-denominated assets (Japanese stocks) rather than converting dollars.

The effects of this structure:

**Natural hedge**: Both the liabilities (yen bonds) and assets (yen stocks) are yen-denominated. If the yen weakens against the dollar, the stock values fall in dollar terms — but simultaneously, the repayment burden on the bonds also falls. Currency fluctuations affect both sides simultaneously, creating a substantial (though imperfect) hedge.

**Low-cost financing**: In 2020, Japanese short-term rates were -0.1% and long-term rates were 0–0.5%. Berkshire borrowed at these extremely low rates to buy stocks yielding 5–7% in dividends. The spread alone (dividend yield minus financing cost) generated positive carry from day one.

Why Buffett chose the sogo shosha:
- **Valuation**: 0.5–0.8x book, low P/E, high dividend yield
- **Business structure**: Diversified portfolios of global resource and commodity exposures — similar in character to businesses Berkshire directly operates
- **Shareholder returns**: Increasing dividend payout ratios and growing buybacks
- **Governance improvement**: Post-Abenomics and TSE reform pressure driving operational efficiency`,
      },
      {
        heading: "실행과 결과: 90세 생일 공시부터 2023년 도쿄 방문까지",
        headingEn: "Execution and Outcomes: From the 90th Birthday Disclosure to Tokyo Visit",
        body: `**2019~2020년 (취득 단계)**: 버핏은 약 12~14개월에 걸쳐 조용히 5개 상사 각각 5% 지분을 취득했다. 공개 매수가 아닌 장내 매수(Open Market Purchase) 방식이었다.

**2020년 8월 30일 (공시)**: 버핏의 90번째 생일에 버크셔가 5개 종합상사 각각 5% 이상 지분 보유를 공식 발표했다. 당일 5개 상사 주가는 모두 크게 올랐고, 일본 증시 전반에 '버핏 효과(Buffett Effect)'가 퍼졌다.

**2021~2022년 (지분 증가)**: 각 상사의 동의 하에 지분 한도를 9.9%까지 확대하기로 합의하고, 꾸준히 매수를 이어갔다.

**2023년 4월 (도쿄 방문)**: 버핏은 직접 도쿄를 방문해 5개 상사 CEO들을 개별 면담했다. 이 방문 자체가 큰 뉴스가 됐다. 버핏은 "가장 좋아하는 일본 투자"라고 언급했으며, 보유 기간을 "영원히(We expect to hold these for a very long time)"라고 표현했다.

**2023년 기준 결과**: 각 지분은 약 8.5%까지 증가. 취득원가 대비 평가 수익은 약 3배 이상. 배당 수입도 꾸준히 증가. 버크셔가 발행한 엔화 채권(저금리)과의 스프레드 수익도 지속 발생.`,

        bodyEn: `**2019–2020 (Acquisition)**: Buffett quietly accumulated ~5% stakes in each of the five companies over 12–14 months through open market purchases, not tender offers.

**August 30, 2020 (Disclosure)**: On Buffett's 90th birthday, Berkshire officially disclosed holdings exceeding 5% in each of the five trading companies. All five stocks rose sharply that day; the "Buffett Effect" rippled across the Japanese market.

**2021–2022 (Increasing stakes)**: With each company's consent, Berkshire agreed to raise its maximum ownership limit to 9.9%, continuing to buy steadily.

**April 2023 (Tokyo visit)**: Buffett personally traveled to Tokyo for one-on-one meetings with the CEOs of all five companies. The visit itself was major news. He called these "Japan's most admired businesses" and said Berkshire expected to hold them "for a very long time."

**2023 results**: Each stake grew to approximately 8.5%. Unrealized gains exceeded 3x acquisition cost. Dividend income continued rising. Positive carry from the spread between yen bond interest costs and dividend yields persisted.`,
      },
      {
        heading: "교훈: 가치 투자의 지리적 확장과 구조적 사고",
        headingEn: "Lessons: Geographic Expansion of Value Investing and Structural Thinking",
        body: `이 투자는 워렌 버핏의 투자 철학이 여전히 살아있음을 보여주는 동시에, 그 진화를 보여준다.

**1. 저평가를 찾아라, 지역 불문**: 버핏은 오랫동안 '미국 예외주의(American Exceptionalism)'에 집중해 해외 투자에 소극적이었다. 그러나 미국 시장이 과열되는 동안 일본 시장의 구조적 저평가를 발견하고 과감하게 베팅했다. 가치 투자는 특정 국가에 귀속되지 않는다.

**2. 자금 조달 구조가 수익을 배가한다**: 같은 자산이라도 어떻게 자금을 조달하느냐가 수익 구조를 바꾼다. 엔화 채권 발행은 순수 달러 투자보다 (a) 환리스크 감소, (b) 추가 캐리 수익, (c) 부채 비용 절감의 삼중 효과를 제공했다.

**3. 장기 투자의 복리 효과**: 취득 시점 대비 배당 수익률(배당 / 취득원가) — 이른바 '원가 수익률(Yield on Cost)'은 시간이 갈수록 상승한다. 2020년 취득 시 5~6% 배당 수익률이 2023년에는 취득원가 기준 7~8%에 달하는 경우도 생긴다.

**4. 기업 지배구조 변화를 선점하라**: 버핏은 일본 기업 지배구조 개혁이 아직 초기 단계일 때 진입했다. 이후 TSE의 개혁 요구, ESG 압력 등으로 주주환원이 가속화되면서 투자 thesis가 강화됐다. 변화의 초입에 베팅하는 것이 가장 큰 수익을 낸다.`,

        bodyEn: `This investment demonstrates that Buffett's philosophy remains relevant — while also showing its evolution.

**1. Seek undervaluation regardless of geography**: Buffett had long focused on "American Exceptionalism" and been reluctant to invest abroad. But as US markets grew expensive, he identified Japan's structural undervaluation and acted decisively. Value investing has no home country.

**2. Financing structure multiplies returns**: The same asset can generate very different returns depending on how you fund it. Issuing yen bonds provided three simultaneous benefits over pure dollar investment: (a) reduced currency risk, (b) additional carry income, (c) lower cost of capital.

**3. Long-term compounding on cost basis**: Yield on cost (dividend / acquisition price) rises over time. A 5–6% dividend yield at acquisition in 2020 can compound to 7–8% on original cost by 2023 as dividends increase.

**4. Position ahead of governance change**: Buffett entered when Japanese corporate governance reform was still in its early stages. As TSE reforms, ESG pressure, and activist investor campaigns accelerated shareholder returns thereafter, his investment thesis was continuously strengthened. The biggest returns come from betting at the beginning of change.`,
      },
    ],

    keyTerms: [
      {
        term: "종합상사 (Sogo Shosha)",
        termEn: "Sogo Shosha (General Trading Company)",
        definition:
          "에너지, 금속, 식품, 기계, 금융 등 다양한 산업에 걸쳐 사업을 영위하는 일본 특유의 대형 복합 무역상사. 이토추·마루베니·미쓰비시·미쓰이·스미토모가 5대 종합상사다. 상품 무역에서 출발했으나 현재는 전 세계 자원·인프라 투자까지 영역이 확대됐다.",
        definitionEn:
          "Japan's unique large-scale diversified trading conglomerates spanning energy, metals, food, machinery, and finance. The Big Five are Itochu, Marubeni, Mitsubishi, Mitsui, and Sumitomo. Originating in commodity trading, they have expanded into global resource and infrastructure investments.",
      },
      {
        term: "자연 헤지 (Natural Hedge)",
        termEn: "Natural Hedge",
        definition:
          "파생상품 등 별도의 헤징 수단을 사용하지 않고, 자산과 부채를 같은 통화로 맞춰 환율 리스크를 줄이는 방법. 버크셔의 경우 엔화 채권(부채)과 엔화 주식(자산)을 매칭해 자연 헤지를 달성했다.",
        definitionEn:
          "A method of reducing currency risk by matching assets and liabilities in the same currency, without using separate derivative instruments. Berkshire achieved this by matching yen-denominated bonds (liabilities) with yen-denominated stocks (assets).",
      },
      {
        term: "PBR (주가순자산비율)",
        termEn: "PBR (Price-to-Book Ratio)",
        definition:
          "주가를 주당 순자산가치(Book Value per Share)로 나눈 비율. PBR < 1이면 주가가 장부상 청산 가치보다 낮다는 의미로, 극도로 저평가된 상태를 나타낸다. 일본 종합상사들은 2020년 기준 0.5~0.8배 수준이었다.",
        definitionEn:
          "The ratio of share price to book value per share. PBR < 1 means the market values the company below its accounting liquidation value — indicating extreme undervaluation. Japan's trading companies traded at 0.5–0.8x book in 2020.",
      },
      {
        term: "원가 수익률 (Yield on Cost)",
        termEn: "Yield on Cost",
        definition:
          "현재 배당금을 최초 취득 원가로 나눈 수익률. 배당이 성장할수록 취득원가 대비 배당 수익률은 시간이 지날수록 높아진다. 장기 투자의 복리 효과를 측정하는 지표.",
        definitionEn:
          "Current annual dividend divided by the original acquisition price. As dividends grow over time, yield on cost rises continuously. A key metric for measuring the compounding effect of long-term investment.",
      },
    ],

    assessment: {
      positives: [
        "자연 헤지 구조 — 엔화 채권과 엔화 주식의 매칭으로 환리스크를 낮추면서 배당-이자 스프레드 수익까지 확보",
        "구조적 저평가(PBR < 1)에 지배구조 개선 촉매를 결합한 복합 투자 thesis의 정교함",
        "5개 상사에 분산 투자해 개별 사업 리스크를 축소하면서도 일본 종합상사 섹터에 집중 노출",
        "90세에도 새로운 지리적 시장과 구조적 기회를 발굴하는 버핏의 지속적 탐색 역량",
      ],
      positivesEn: [
        "Natural hedge structure — matching yen bonds with yen stocks lowers FX risk while capturing the dividend-vs-interest spread",
        "Sophisticated multi-factor thesis combining structural undervaluation (PBR < 1) with a governance improvement catalyst",
        "Diversification across five companies reduces individual business risk while maintaining concentrated sector exposure",
        "At age 90, Buffett's continued ability to identify new geographic markets and structural opportunities",
      ],
      risks: [
        "일본 엔화 장기 약세: 엔화가 지속적으로 약세를 보이면 달러 기준 수익이 잠식될 수 있다 (자연 헤지가 완벽하진 않음)",
        "종합상사 사업 특성상 원자재 가격 사이클에 민감 — 글로벌 경기 침체 시 수익성이 크게 변동",
        "지배구조 개혁 속도 위험: 일본 기업 문화의 관성이 강해 변화가 예상보다 느려질 수 있음",
        "버크셔 해서웨이의 막대한 AUM 규모로 인해, 이와 같은 기회가 다른 투자자들에게는 스케일 면에서 복제 어려움",
      ],
      risksEn: [
        "Sustained yen weakness: if the yen continues depreciating long-term, dollar-denominated returns could be eroded (the natural hedge is not perfect)",
        "Commodity cycle sensitivity: sogo shosha profitability fluctuates significantly with global economic conditions and raw material prices",
        "Governance reform pace risk: Japanese corporate culture's institutional inertia could slow change more than expected",
        "Berkshire's enormous AUM means this type of opportunity — accessible at scale — is difficult for smaller investors to replicate with the same structural advantages",
      ],
    },

    faq: [
      {
        q: "왜 버핏은 일본 ETF나 인덱스 펀드가 아닌 5개 상사를 직접 선택했나?",
        qEn: "Why did Buffett pick five specific companies rather than a Japan ETF or index?",
        a: "두 가지 이유다. 첫째, 종합상사들은 일본 증시 전반보다 훨씬 더 극단적인 저평가 상태였다(PBR 0.5~0.8배 vs. 닛케이 평균 약 1.4배). 둘째, 버핏은 개별 기업의 비즈니스 모델을 직접 이해하고 투자한다 — 이것이 그의 투자 철학의 핵심이다. 종합상사의 사업 구조(다각화된 자원·상품·인프라 포트폴리오)가 버크셔가 직접 운영하는 사업들과 유사한 성격이어서 깊이 이해할 수 있었다.",
        aEn: "Two reasons. First, the trading companies were far more deeply undervalued than the broader Japanese market (0.5–0.8x book vs. Nikkei average ~1.4x). Second, Buffett invests by directly understanding individual business models — this is core to his philosophy. The sogo shosha's diversified resource/commodity/infrastructure portfolios are structurally similar to businesses Berkshire directly operates, making them analytically accessible.",
      },
      {
        q: "일반 투자자도 이와 유사한 '엔화 캐리' 투자를 할 수 있나?",
        qEn: "Can ordinary investors replicate a similar 'yen carry' trade?",
        a: "개념적으로는 가능하지만, 버핏처럼 직접 엔화 채권을 발행하는 것은 AAA급 신용등급과 막대한 규모 없이는 불가능하다. 개인 투자자 수준에서 유사한 효과를 내려면: (1) 저금리 엔화 대출(FX 마진)을 활용해 일본 주식을 매수하거나, (2) 일본 주식 ETF를 달러로 직접 매수(환헤지 없이)하거나, (3) 환헤지 일본 주식 ETF를 활용하는 방법이 있다. 단 개인 수준의 레버리지는 환율·금리 변동에 훨씬 취약하므로 리스크 관리가 필수다.",
        aEn: "Conceptually possible, but issuing yen-denominated bonds the way Buffett did requires AAA credit ratings and Berkshire-scale size — unavailable to ordinary investors. To approximate the effect at an individual level: (1) use low-rate yen-denominated FX margin loans to buy Japanese stocks; (2) directly purchase Japanese stock ETFs in dollars (without currency hedging); or (3) use currency-hedged Japan ETFs. However, individual-level leverage is far more vulnerable to currency and rate fluctuations, making rigorous risk management essential.",
      },
    ],

    references: [
      {
        id: 1,
        author: "Buffett, Warren",
        title: "Berkshire Hathaway Annual Letter to Shareholders 2020",
        source: "Berkshire Hathaway Inc.",
        year: "2021",
      },
      {
        id: 2,
        author: "Hoshi, Takeo & Kashyap, Anil K.",
        title: "Corporate Financing and Governance in Japan",
        source: "MIT Press",
        year: "2001",
      },
      {
        id: 3,
        author: "Tokyo Stock Exchange",
        title: "Action to Implement Management That Is Conscious of Cost of Capital and Stock Price",
        source: "TSE",
        year: "2023",
      },
    ],
  },
];
