import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "mbk-homeplus",
  title: "How a ₩7.2T Retail LBO Collapsed — MBK Partners & Homeplus Explained",
  subtitle: "Asia's Largest Retail LBO · ₩4T Sale & Leaseback · Court Receivership — A Masterclass in PE Risk",
  category: "ma",
  industry: "Retail / Consumer",
  country: "South Korea",
  announcedAt: "2015-09-07",
  closedAt: "2015-11-30",
  announcedDisplay: "September 2015",
  closedDisplay: "November 2015",
  readingMinutes: 13,
  tags: ["MBK Partners", "Homeplus", "Tesco Korea", "LBO", "Korea PE", "retail", "Sale & Leaseback", "CPPIB", "court receivership"],
  excerpt:
    "MBK Partners acquired Homeplus (Tesco Korea) for approximately ₩7.2T ($6.5B) in Asia's largest retail LBO. A textbook leveraged buyout transformed into a cautionary tale: the Sale & Leaseback of real estate unlocked ₩4T, but the e-commerce pivot failed, and Homeplus entered court receivership (기업회생) in 2024 — Korea's most consequential PE deal collapse.",

  acquirer: { initials: "MBK", bg: "bg-gray-900", label: "MBK Partners" },
  target:   { initials: "HP", bg: "bg-green-500", label: "Homeplus" },

  background: [
    "In 2015, Homeplus was South Korea's second-largest hypermarket chain, behind Emart, with approximately 140 stores nationwide and over 22,000 employees. It was the crown jewel of Tesco PLC's Asia growth strategy — Tesco entered Korea in 1999 through a joint venture with Samsung C&T and had built Homeplus into one of Asia's most successful foreign retail operations.",
    "By 2014, Tesco faced existential pressure at home. An accounting fraud scandal at UK headquarters caused Tesco shares to collapse; new CEO Dave Lewis launched a global restructuring and declared all non-UK businesses for potential sale. Korea and Thailand were the primary targets. Homeplus Korea — despite being profitable at the store level — was put on the block as Tesco sought to repair its UK balance sheet.",
    "[Michael ByungJu Kim's career and his tie to Homeplus.] MBK Partners' founder is not just \"ex-Goldman.\" His career ran [Goldman Sachs] → [Salomon Smith Barney] → [The Carlyle Group], and his final title before founding MBK was [Chairman of Carlyle Asia]. In 2005, he left Carlyle and co-founded MBK Partners with several Carlyle colleagues. The firm's name — MBK — is taken from his own initials (Michael ByungJu Kim).",
    "[The original preferred bidder was not MBK — it was Carlyle.] When Tesco's sale of Homeplus moved into preferred-bidder talks, the initial counterparty was [Carlyle Group] — Mr. Kim's former firm. When Carlyle's price negotiations broke down and the firm walked away, MBK stepped in with a [higher bid than what Carlyle had been negotiating] and took preferred-bidder status. The narrative was unusually personal: the same asset his old firm could not close on was acquired — at a higher price — by the fund Mr. Kim had built since leaving.",
    "MBK Partners was founded in 2005 with Mr. Kim's Carlyle colleagues and became a North Asia-focused PE firm with ~$25B in AUM by 2015. With prior Korean LBO wins (ING Life Korea / later Orange Life, C&M Cable TV), MBK presented Homeplus as a rare large-scale hypermarket LBO opportunity in a market that had seen almost no PE deals in the format, and the asset-heavy hypermarket real estate made the structure compelling.",
    "The ₩7.2T headline price was backed by a consortium including Canada Pension Plan Investment Board (CPPIB), which provided equity co-investment. MBK structured the deal with significant leverage — acquisition financing (인수금융) provided by domestic and international banks — with the expectation that a Sale & Leaseback of the store real estate would rapidly deleverage the structure post-close. For Mr. Kim personally, the transaction also carried the symbolism of [\"acquiring at a higher price the asset his former firm could not close on.\"]",
  ],

  dealSummary: {
    dealValueDisplay: "approx. ₩7.2T (USD ~$6.5B)",
    acquirerName: "MBK Partners",
    targetName: "Homeplus (Tesco Korea)",
    announcedDisplay: "September 2015",
    closedDisplay: "November 2015",
    country: "South Korea",
  },

  executiveSummary: [
    "Asia's largest retail LBO: ₩7.2T acquisition of Homeplus from Tesco PLC — MBK Partners' flagship deal.",
    "[The original preferred bidder was not MBK — it was Carlyle.] Michael ByungJu Kim's former firm (he was Chairman of Carlyle Asia) walked from price talks; after founding MBK, he took preferred-bidder status with a [higher bid than Carlyle had been negotiating].",
    "[Michael ByungJu Kim's career]: [Goldman Sachs] → [Salomon Smith Barney] → [Carlyle Asia Chairman] → founded MBK Partners in 2005. The Homeplus deal symbolized \"acquiring — at a higher price — the asset his old firm could not close.\"",
    "Textbook LBO setup: asset-heavy hypermarket real estate enabled an immediate Sale & Leaseback of ~₩4T, deleveraging the structure in 2016–2017.",
    "E-commerce disruption: online grocery growth (Coupang, Market Kurly) eroded hypermarket traffic; Homeplus failed to execute a digital pivot despite investment.",
    "Court receivership: Homeplus filed for court receivership in February 2024 — Korea's most high-profile PE-backed retail collapse.",
    "EV/EBITDA: ~22.5x on 2014 EBITDA — a premium valuation justified by real estate value, now seen as having overpriced the operating business.",
  ],

  industryOverview: {
    body: "South Korea's modern retail market was dominated by large-format hypermarkets (대형마트) through the 2010s. Emart (Shinsegae), Homeplus, and Lotte Mart held ~85% of the hypermarket segment. But structural headwinds were building: a 2012 government law restricting hypermarket operating hours on Sundays/holidays (유통산업발전법) was the first major regulatory hit. Then came e-commerce: Coupang launched Rocket Delivery in 2014 (next-day/same-day), and specialized online grocers (Market Kurly, SSG.com) targeted food directly. Hypermarket foot traffic peaked around 2012–2014 and began a structural decline.",
    metrics: [
      { label: "Korean Hypermarket Market", value: "~₩30T", sub: "2015 peak revenue" },
      { label: "Homeplus Market Share", value: "~31%", sub: "2nd behind Emart" },
      { label: "Coupang Rocket Delivery", value: "2014 launch", sub: "accelerated e-commerce" },
      { label: "Sunday/Holiday Restrictions", value: "2012 law", sub: "forced alternate-Sunday closures" },
    ],
    subBody:
      "The 2015–2020 period proved catastrophic for Korean hypermarkets as a category. All three major operators saw declining comparable sales. Emart diversified into SSG.com and convenience formats; Lotte Mart contracted; Homeplus under PE ownership had less flexibility to absorb losses while carrying LBO leverage.",
    players: [
      { name: "Emart (Shinsegae)", role: "Market leader, ~38% share" },
      { name: "Homeplus (MBK)", role: "#2, ~31% share" },
      { name: "Lotte Mart", role: "#3, ~20% share" },
      { name: "Coupang", role: "E-commerce disruptor; hypermarket killer" },
    ],
  },

  companyOverview: {
    targetName: "Homeplus",
    body: "Homeplus operated 140+ hypermarket locations across South Korea, making it the country's second-largest retailer by revenue. Unlike the other domestic chains owned by Korean conglomerates, Homeplus was distinctive for its strong real estate ownership — most of its stores were owned (not leased), a legacy of Tesco's capital investment strategy in Asia. This real estate base was approximately ₩4–5T in value — a critical factor in the LBO thesis. Revenue was approximately ₩7T in FY2014, with normalized EBITDA of approximately ₩320B.",
    metrics: [
      { label: "Stores", value: "140+", sub: "hypermarket locations" },
      { label: "Revenue (FY2014)", value: "~₩7T", sub: "including wholesale" },
      { label: "Employees", value: "~22,000", sub: "at acquisition" },
      { label: "Real Estate Value", value: "~₩4–5T", sub: "owned store properties" },
      { label: "EBITDA (FY2014)", value: "~₩320B", sub: "normalized" },
      { label: "Founded", value: "1999", sub: "Tesco + Samsung JV" },
    ],
    financials: [
      { year: "2013", revenue: 7200, cogs: 5500, grossProfit: 1700, sga: 1350, operatingIncome: 350, ebitda: 380 },
      { year: "2014", revenue: 7100, cogs: 5430, grossProfit: 1670, sga: 1350, operatingIncome: 320, ebitda: 355 },
      { year: "2015", revenue: 6900, cogs: 5300, grossProfit: 1600, sga: 1340, operatingIncome: 260, ebitda: 310 },
    ],
    financialsNote: "Revenue and EBITDA in ₩ billions. EBITDA normalized for Tesco head office charges. Figures pre-Sale & Leaseback restructuring.",
    financialsCurrency: "₩",
    financialsUnit: "bn",
  },

  dealStructure: {
    body: "The ₩7.2T purchase price was financed through approximately 30% equity (MBK + CPPIB consortium) and 70% debt (인수금융 from domestic/international banks). The core post-close value creation lever was an immediate Sale & Leaseback of Homeplus's owned real estate — selling store properties to institutional investors (REITs, insurance companies) and leasing them back on long-term triple-net lease agreements. This monetized ~₩4T in real estate value, rapidly paying down the acquisition debt. The strategy was financially elegant — but it locked Homeplus into fixed lease obligations that became a crushing burden when sales declined.",
    preOwnership: {
      nodes: [
        { id: "tesco", label: "Tesco PLC", sub: "UK, seller", type: "acquirer" },
        { id: "samsung_ct", label: "Samsung C&T", sub: "Minor JV stake", type: "entity" },
        { id: "homeplus", label: "Homeplus Co., Ltd.", sub: "Operating entity", type: "target" },
      ],
      edges: [
        { from: "tesco", to: "homeplus", label: "~98%" },
        { from: "samsung_ct", to: "homeplus", label: "~2%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "mbk", label: "MBK Partners", sub: "Lead GP", type: "acquirer" },
        { id: "cppib", label: "CPPIB", sub: "Co-investor (Canada)", type: "entity" },
        { id: "homeplus", label: "Homeplus", sub: "Portfolio company", type: "target" },
        { id: "reit", label: "REITs / Institutions", sub: "Bought real estate (S&LB)", type: "entity" },
      ],
      edges: [
        { from: "mbk", to: "homeplus", label: "Majority" },
        { from: "cppib", to: "homeplus", label: "Co-invest" },
        { from: "homeplus", to: "reit", label: "Sale & Leaseback ~₩4T" },
      ],
    },
    keyTerms: [
      { label: "Total Purchase Price", value: "~₩7.2T (~$6.5B)", accent: true },
      { label: "EV/EBITDA (2014A)", value: "~22.5x" },
      { label: "Equity (approx.)", value: "~30% (MBK + CPPIB)" },
      { label: "Debt (approx.)", value: "~70% LBO financing" },
      { label: "Sale & Leaseback", value: "~₩4T real estate monetized (2016–2017)" },
      { label: "Lease Terms", value: "Triple-net, 20-year fixed" },
      { label: "Co-investor", value: "CPPIB (Canada Pension Plan Investment Board)" },
    ],
  },

  advisors: {
    body: "The deal was one of the largest M&A transactions in Korean history, attracting top-tier advisory mandates on both sides. Morgan Stanley advised MBK Partners; Goldman Sachs represented Tesco. Kim & Chang represented MBK on Korean legal matters; Yulchon represented Tesco on the sell-side.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "MBK Partners (Acquirer)",
        initials: "MBK",
        bg: "bg-gray-900",
        advisors: [
          { firm: "Morgan Stanley", role: "Financial Advisor", roleType: "financial", note: "Lead M&A advisor to MBK" },
          { firm: "Kim & Chang (김앤장)", role: "Legal Counsel", roleType: "legal", note: "Korea M&A and regulatory" },
          { firm: "Freshfields Bruckhaus", role: "International Legal", roleType: "legal", note: "Cross-border legal" },
        ],
      },
      {
        side: "target",
        sideLabel: "Tesco PLC (Seller)",
        initials: "HP",
        bg: "bg-green-500",
        advisors: [
          { firm: "Goldman Sachs", role: "Financial Advisor", roleType: "financial", note: "Lead sell-side advisor" },
          { firm: "Yulchon (율촌)", role: "Korean Legal Counsel", roleType: "legal", note: "Korea sell-side legal" },
          { firm: "Slaughter and May", role: "UK Legal Counsel", roleType: "legal", note: "Tesco UK legal" },
        ],
      },
    ],
    disclaimer: "Advisory assignments based on Korean public filings and financial press coverage.",
  },

  valuation: {
    body: "The ₩7.2T purchase price implied approximately 22.5x EV/EBITDA on FY2014 normalized EBITDA of ~₩320B. Critics at the time considered this an aggressive valuation for a mature hypermarket operator facing structural headwinds. The bullish case rested on two pillars: (1) real estate value — the owned store properties were worth ₩4–5T independently of the operating business; and (2) operational upside from management optimization post-exit from Tesco's bureaucratic structure. Both assumptions proved partially correct, but the operating headwinds from e-commerce disruption and regulatory restrictions ultimately overwhelmed them.",
    rows: [
      { item: "Total EV", val: "~₩7.2T", note: "Including assumed debt", accent: true },
      { item: "EV / EBITDA (FY2014A)", val: "~22.5x", note: "₩7.2T / ₩320B normalized EBITDA" },
      { item: "Implied Real Estate Value", val: "~₩4–5T", note: "Owned store properties" },
      { item: "Operating Business Value", val: "~₩2–3T", note: "EV minus real estate" },
      { item: "S&LB Proceeds (actual)", val: "~₩4T", note: "2016–2017 real estate monetization" },
      { item: "Net Leverage (post-S&LB)", val: "~3–4x EBITDA", note: "After S&LB deleveraging" },
    ],
    disclaimer: "Homeplus financial figures based on Korean regulatory filings (공시). LBO structure details from industry sources.",
  },

  rationale: {
    buyer: {
      title: "MBK Partners — Why This Deal?",
      initials: "MBK",
      bg: "bg-gray-900",
      points: [
        "Rare LBO opportunity: large-scale hypermarket buyouts almost never appear in Korea — Homeplus was a once-in-a-decade opportunity for mega-cap PE.",
        "Real estate monetization: ₩4–5T of owned real estate provided a built-in deleveraging mechanism (Sale & Leaseback) — rare in PE deals globally.",
        "Motivated seller: Tesco needed to sell quickly due to UK accounting crisis — seller motivation created price negotiating pressure on both sides.",
        "CPPIB validation: Canada's largest pension fund co-investing alongside MBK validated the risk/return profile.",
        "Operational upside: freedom from Tesco's UK head office burden was expected to unlock operating efficiency gains.",
      ],
    },
    seller: {
      title: "Tesco — Why Sell?",
      initials: "HP",
      bg: "bg-green-500",
      points: [
        "UK crisis imperative: the 2014 accounting scandal required Tesco to rapidly strengthen its balance sheet — Korea was a top-priority asset sale.",
        "₩7.2T in cash was material: proceeds equivalent to ~20% of Tesco's market cap at the time, providing critical liquidity for UK restructuring.",
        "Management bandwidth: running a 140-store Korean hypermarket chain from London was operationally complex — strategic focus dictated exit.",
        "Competitive timing: e-commerce disruption was beginning in Korea — selling before the full impact materialized was rational from Tesco's perspective.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "2024 Q2",
    body: "The Homeplus deal is one of the most consequential PE investments in Korean history — for the wrong reasons. The Sale & Leaseback was executed brilliantly: ~₩4T was raised in 2016–2017, paying down acquisition debt and returning capital to MBK and CPPIB. But the operating business deteriorated sharply. E-commerce (Coupang, Market Kurly) aggressively took market share; COVID-19 initially boosted grocery, but structural decline resumed post-pandemic. The fixed lease obligations from the S&LB (now owned by institutional investors who expected stable rent) became crushing as store revenues fell. In February 2024, Homeplus filed for court receivership (기업회생절차) — Korea's equivalent of Chapter 11. As of mid-2024, the restructuring process was ongoing.",
    overallVerdict: "Partial financial success (S&LB), operational failure — a classic PE case study in real estate vs. business risk.",
    positives: [
      "Sale & Leaseback generated ~₩4T, successfully deleveraging the structure and enabling capital return.",
      "MBK and CPPIB recovered meaningful capital through the S&LB before the business deteriorated.",
      "Initial operational improvements post-Tesco exit (headcount rationalization, supplier terms improvement).",
    ],
    risks: [
      "22.5x EV/EBITDA was excessive for a mature hypermarket facing structural decline — the operating business was effectively overvalued at entry.",
      "Fixed S&LB lease obligations became an existential burden as revenues fell — the financial engineering that worked initially amplified distress.",
      "E-commerce disruption (Coupang, Market Kurly) permanently shifted Korean grocery buying patterns.",
      "Sunday trading restrictions limited operational flexibility at a critical competitive juncture.",
      "Court receivership (2024) resulted in significant losses for trade creditors, employees, and remaining stakeholders.",
    ],
    editorNote: "Homeplus is the definitive Korean PE case study: a brilliant real estate monetization strategy that couldn't offset a fundamentally challenged operating business in a disrupted retail sector. The S&LB worked exactly as planned — but it left the operating company with fixed obligations it could not sustain. This is the textbook lesson in separating real estate value from operating business quality in retail LBOs.",
  },

  tombstone: {
    acquirerInitials: "MBK",
    acquirerBg: "bg-gray-900",
    targetInitials: "HP",
    targetBg: "bg-green-500",
    acquirerName: "MBK Partners",
    targetName: "Homeplus (Tesco Korea)",
    dealTitle: "Share Purchase — Asia's Largest Retail LBO",
    dealSize: "~₩7.2T",
    dealSizeUSD: "USD ~$6.5B",
    evEbitda: "22.5x",
    closeDate: "November 2015",
  },

  sources: [
    { id: 1, text: "MBK Partners — Homeplus Acquisition Press Release (2015)" },
    { id: 2, text: "Tesco PLC — Korea Disposal Announcement (2015)", url: "https://www.tescoplc.com" },
    { id: 3, text: "Korea Fair Trade Commission — MBK/Homeplus Merger Review" },
    { id: 4, text: "Homeplus Co., Ltd. — Annual Reports 2015–2023 (Korean FSS Filing)" },
    { id: 5, text: "Seoul Bankruptcy Court — Homeplus Court Receivership Filing (February 2024)" },
    { id: 6, text: "The Korea Economic Daily — Homeplus LBO Analysis Series (2016–2024)" },
  ],

  seo: {
    title: "MBK Partners Homeplus LBO — Why Asia's Biggest Retail Deal Failed | Deal Story",
    description: "Full analysis of MBK Partners' ₩7.2T acquisition of Homeplus from Tesco — Asia's largest retail LBO. Sale & Leaseback strategy, e-commerce disruption, and 2024 court receivership examined.",
    keywords: [
      "MBK Partners Homeplus acquisition", "Homeplus court receivership cause", "Korea retail LBO",
      "Sale Leaseback Korea PE", "Tesco Korea Homeplus deal", "MBK Partners PE analysis",
      "Korean hypermarket decline", "Coupang Homeplus competition", "LBO failure case study Korea",
      "PE-backed court receivership Korea", "CPPIB Korea investment",
    ],
  },

  concepts: [
    { term: "Leveraged Buyout (LBO)", description: "An acquisition financed primarily with debt (~60–80%), using the target company's assets and cash flows as collateral — the dominant PE acquisition structure." },
    { term: "Sale & Leaseback (S&LB)", description: "Selling owned real estate to a third party (REITs, insurers) and immediately leasing it back under long-term agreements — monetizes real estate while retaining operational use." },
    { term: "Acquisition Financing (인수금융)", description: "The senior debt and mezzanine financing package used to fund an LBO — typically secured against target assets and repaid from operating cash flows and asset sales." },
    { term: "EV/EBITDA", description: "The primary M&A valuation metric: enterprise value divided by EBITDA. In retail, high multiples (>15x) typically require meaningful growth or asset monetization to justify." },
    { term: "Court Receivership (기업회생)", description: "South Korea's court-supervised restructuring process, equivalent to U.S. Chapter 11 bankruptcy — allows business continuation while restructuring debt." },
    { term: "Co-investment", description: "A PE deal structure where a large institutional investor (here, CPPIB) invests alongside the GP (MBK Partners) at the same terms, reducing GP capital at risk and validating the thesis." },
  ],

  faq: [
    {
      q: "Was MBK the original preferred bidder for Homeplus?",
      a: "No. The initial preferred-bidder counterparty was [The Carlyle Group]. The twist: Michael ByungJu Kim, who founded MBK Partners, had served as [Chairman of Carlyle Asia] immediately before MBK. When Carlyle's price talks broke down and the firm walked, Mr. Kim's MBK stepped in with a [higher bid than Carlyle had been negotiating] and won preferred-bidder status. The asset his former firm could not close on was acquired — at a higher price — by the fund he had built since leaving. An unusually personal deal narrative for a Korean LBO.",
    },
    {
      q: "What is Michael ByungJu Kim's career background?",
      a: "Michael ByungJu Kim's career path was [Goldman Sachs] → [Salomon Smith Barney] → [The Carlyle Group], with his final title being [Chairman of Carlyle Asia]. In 2005 he left Carlyle and co-founded MBK Partners with several Carlyle Asia colleagues — the firm's name comes from his initials (Michael ByungJu Kim). Since founding, MBK has led some of North Asia's largest buyouts: ING Life Korea (later Orange Life), C&M Cable TV, Homeplus, Dialog Semiconductor, and others.",
    },
    {
      q: "Why did MBK Partners pay 22.5x EBITDA for a hypermarket chain?",
      a: "The high multiple was justified by two factors beyond operating EBITDA: (1) Homeplus owned ~₩4–5T of real estate that could be monetized through Sale & Leaseback — effectively making the operating business much cheaper on an 'ex-real estate' basis; and (2) Tesco's bureaucratic overhead was suppressing margins that MBK expected to recover post-exit. The real estate thesis executed perfectly; the operational thesis did not. For Mr. Kim personally, the deal also carried the symbolism of acquiring — at a higher price — the asset [Carlyle Asia] (the firm he had just left) could not close on.",
    },
    {
      q: "How did the Sale & Leaseback work, and did it succeed?",
      a: "Homeplus sold its owned store properties to institutional investors (REITs, insurance companies, pension funds) at a price of approximately ₩4T in 2016–2017, and immediately leased the stores back under 20-year triple-net lease agreements. This monetized the real estate, paid down acquisition debt, and returned capital to MBK and CPPIB. Financially, the S&LB was a success. But the fixed lease obligations (~₩400–500B annually) became crushing when store revenues declined — the financial engineering amplified operating distress.",
    },
    {
      q: "Why did Homeplus file for court receivership in 2024?",
      a: "Three compounding factors: (1) structural decline in hypermarket traffic as e-commerce (Coupang, Market Kurly) captured grocery spending; (2) fixed S&LB lease obligations that could not be reduced as revenues fell; and (3) the 2012 Sunday/holiday trading restriction that cut ~15% of operating days. The combination of revenue decline, fixed lease costs, and remaining acquisition debt created an unsustainable debt service burden. Homeplus entered court receivership (기업회생) in February 2024.",
    },
    {
      q: "What role did Coupang play in Homeplus's decline?",
      a: "Coupang launched Rocket Delivery (next-day, then same-day delivery) in 2014 — precisely when MBK was acquiring Homeplus. The convenience of ordering groceries online with next-day delivery fundamentally challenged the hypermarket model. Market Kurly (2015) then disrupted the premium fresh food segment. Between 2015 and 2023, online grocery penetration in Korea went from ~5% to ~25%+ of total food retail — with Coupang capturing the majority of that growth. This was the single largest structural threat Homeplus could not overcome.",
    },
    {
      q: "Did MBK Partners make or lose money on Homeplus?",
      a: "MBK's financial outcome was mixed. The Sale & Leaseback proceeds and initial dividend recapitalization returned meaningful capital to MBK and CPPIB — likely recovering a significant portion of the equity invested. However, the residual equity value was largely wiped out by the court receivership. The GP's carried interest from this deal is minimal. CPPIB has disclosed losses on the investment. Net-net, MBK avoided catastrophic loss through the S&LB timing, but this was far from the fund-making return targeted.",
    },
    {
      q: "What is the lesson from Homeplus for PE investing in retail?",
      a: "Homeplus is the textbook case study in separating real estate value from operating business quality. PE firms buying retail assets must stress-test the operating business against severe revenue decline scenarios — not just value the real estate separately. In a leveraged structure with fixed lease obligations, operating leverage becomes lethal when revenues fall. The lesson: Sale & Leaseback is a financing tool, not a business model. If the underlying business cannot sustain the lease obligations through a cycle, the financial engineering creates fragility rather than resilience.",
    },
  ],
};

export default deal;
