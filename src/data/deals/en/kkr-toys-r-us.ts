/**
 * KKR × Toys R Us LBO (2005–2018)
 * The Textbook LBO Failure — It Was the Interest Payments, Not Amazon, That Killed Toys R Us
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kkr-toys-r-us",
  title: "How KKR's $6.6B LBO Killed Toys R Us and Left 33,000 People Unemployed",
  subtitle: "2005–2018: The Debt Trap of a Leveraged Buyout — $400M in Annual Interest Blocked Digital Investment Before Amazon Could",
  category: "ma",
  industry: "Toy Retail / Distribution",
  country: "United States",
  announcedAt: "2005-03-17",
  closedAt: "2005-07-21",
  announcedDisplay: "March 2005",
  closedDisplay: "July 2005",
  readingMinutes: 13,
  tags: [
    "KKR", "Toys R Us", "LBO", "leveraged buyout", "leveraged loan",
    "bankruptcy", "Chapter 11", "liquidation", "Amazon", "retail", "PE", "private equity",
    "debt structure", "LevFin", "credit metrics", "default",
  ],
  excerpt:
    "KKR, Bain Capital, and Vornado acquired Toys R Us for $6.6 billion in a leveraged buyout. They financed 80% ($5.3B) of the purchase price with debt, and the resulting $400M+ in annual interest payments over the next 12 years effectively blocked all investment in digital infrastructure and e-commerce. Chapter 11 bankruptcy was filed in 2017, and every U.S. store was liquidated in 2018 — 33,000 jobs lost. Contrary to the popular narrative, the root cause was not Amazon. It was the LBO capital structure.",

  acquirer: { initials: "KKR", bg: "bg-blue-800", label: "KKR / Bain Capital / Vornado" },
  target:   { initials: "TRU", bg: "bg-red-600",  label: "Toys R Us Inc." },

  background: [
    "In 2004, Toys R Us found itself in an ambiguous relationship with Amazon. The company had signed an 'exclusive toy supplier' agreement with Amazon in 2000, but when Amazon allowed third-party toy sellers on its platform, Toys R Us filed suit. Offline store performance was declining and the stock had fallen more than 30% from its 2003 peak — conditions that made the company look like an undervalued acquisition target from a PE perspective.",
    "In March 2005, a consortium of KKR (25%), Bain Capital (22.5%), Vornado Realty Trust (32.5%), and management (20%) announced the acquisition of Toys R Us at $26.75 per share, a total enterprise value of $6.6B. The capital structure was the critical variable: only $1.3B came from equity, with the remaining $5.3B sourced from Term Loan B, revolving credit facilities, and real estate mortgages. Debt/EBITDA was approximately 6.2×. Annual interest expense was estimated at $400–450M.",
    "The following 12 years became a textbook study in the structural trap of LBO debt. While competitors Walmart and Target invested hundreds of millions in e-commerce, Toys R Us consumed 60–70% of its EBITDA each year just to service interest. Amazon grew. Toys R Us lost all meaningful presence in the online toy market. In September 2017, the company filed for Chapter 11 bankruptcy carrying $5.2B in debt. By March 2018, every U.S. store had closed.",
  ],

  dealSummary: {
    dealValueDisplay: "$6.6B",
    acquirerName: "KKR / Bain Capital / Vornado Realty Trust",
    targetName: "Toys R Us Inc.",
    announcedDisplay: "March 17, 2005",
    closedDisplay: "July 21, 2005",
    country: "United States (NYSE: TOY → delisted)",
  },

  executiveSummary: [
    "KKR / Bain Capital / Vornado consortium acquired Toys R Us for $6.6B in cash — a classic LBO with $1.3B equity (20%) and $5.3B debt (80%).",
    "Post-acquisition annual interest expense of $400–450M consumed 60–70% of EBITDA → effectively blocked all digital infrastructure and e-commerce investment.",
    "As Amazon, Walmart, and Target pressed their online offensive, Toys R Us — anchored to its offline-only strategy — filed for Chapter 11 bankruptcy in September 2017.",
    "All U.S. stores (approximately 735) closed in March 2018, 33,000 employees laid off — the defining case study of retail LBO failure.",
    "Estimated total equity loss for the three PE firms: the entire $1.3B. TLB lenders recovered approximately $0.20–0.25 per dollar of principal.",
  ],

  industryOverview: {
    body: "The U.S. toy market began experiencing structural shifts in the mid-2000s. Walmart and Target used toys as a traffic-driving category, engaging in aggressive price competition, while Amazon moved to dominate online toy sales. Toys R Us had once been synonymous with specialty toy retail, but its differentiation as the 'one-stop toy shop' eroded quickly. After the LBO, the company had no capacity to invest in meeting that competitive pressure.",
    metrics: [
      { label: "U.S. Toy Market Size",       value: "$26B",  sub: "2005 estimate" },
      { label: "Toys R Us Market Share",     value: "~20%",  sub: "At time of LBO" },
      { label: "Amazon Toy Market Share",    value: "~30%+", sub: "2017 estimate (rapid growth)" },
      { label: "Store Count at LBO",         value: "1,500+", sub: "U.S. and international combined" },
    ],
    players: [
      { name: "Toys R Us",  role: "Leading specialty toy retailer (declined following LBO)" },
      { name: "Walmart",    role: "Lowest-price toy competitor, expanding online investment" },
      { name: "Amazon",     role: "Dominant online toy platform, growing 30%+ annually" },
      { name: "Target",     role: "Integrated digital-offline toy strategy" },
    ],
  },

  companyOverview: {
    targetName: "Toys R Us Inc.",
    body: "Founded in 1948, Toys R Us was a New Jersey-based specialty toy retail chain that rose to dominate the U.S. toy market through the 1980s and 1990s with its 'category killer' strategy, displacing smaller toy shops. The iconic 'I Don't Wanna Grow Up, I'm a Toys R Us Kid' campaign built exceptional brand awareness. However, by the 2000s, low-price competition from Walmart and Target and Amazon's online emergence began to erode its competitive position.",
    metrics: [
      { label: "LBO Price (EV)",       value: "$6.6B",     sub: "$26.75 per share, equity + debt" },
      { label: "Entry Leverage",       value: "6.2×",      sub: "Debt/EBITDA at close" },
      { label: "Annual Interest",      value: "$400–450M", sub: "60–70% of EBITDA consumed annually" },
      { label: "Debt at Bankruptcy",   value: "$5.2B",     sub: "Only $100M reduction over 12 years" },
    ],
    financials: [
      {
        year: "FY2004",
        revenue: 11567,
        cogs: 7145,
        grossProfit: 4422,
        sga: 3620,
        operatingIncome: 802,
        ebitda: 850,
      },
      {
        year: "FY2013",
        revenue: 11450,
        cogs: 7280,
        grossProfit: 4170,
        sga: 3560,
        operatingIncome: 610,
        ebitda: 750,
      },
      {
        year: "FY2016",
        revenue: 11095,
        cogs: 6987,
        grossProfit: 4108,
        sga: 3624,
        operatingIncome: 484,
        ebitda: 648,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "mn",
    financialsNote: "Unit: $M (millions) | FY2013 is a midpoint reference. Revenue remained essentially flat over 12 years while EBITDA declined steadily. After paying $400–450M in annual interest, actual free cash flow was effectively zero or negative.",
  },

  dealStructure: {
    body: "A go-private LBO structure in which the Toys R Us board accepted a $26.75 per share cash merger. 80% of the acquisition financing ($5.3B) came from Term Loan B, revolving credit facilities, and real estate mortgages. After going private, three PE funds and management owned the company as a private entity. Vornado Realty was particularly reliant on leverage against real estate (a portion of Toys R Us store properties).",
    preOwnership: {
      nodes: [
        { id: "kkr-pre",     label: "KKR Fund X",       sub: "PE fund",                 type: "fund"   },
        { id: "bain-pre",    label: "Bain Capital",      sub: "PE fund",                 type: "fund"   },
        { id: "vornado-pre", label: "Vornado Realty",    sub: "Real estate REIT",        type: "fund"   },
        { id: "public-tru",  label: "Public Shareholders", sub: "NYSE: TOY",             type: "public" },
        { id: "tru",         label: "Toys R Us Inc.",    sub: "U.S. toy retail leader",  type: "target" },
      ],
      edges: [
        { from: "public-tru", to: "tru", label: "~100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "kkr-post",     label: "KKR",           sub: "25% equity",    type: "fund"   },
        { id: "bain-post",    label: "Bain Capital",  sub: "22.5% equity",  type: "fund"   },
        { id: "vornado-post", label: "Vornado Realty", sub: "32.5% equity", type: "fund"   },
        { id: "mgmt-post",    label: "Management",    sub: "20% equity",    type: "entity" },
        { id: "tru-post",     label: "Toys R Us Inc.", sub: "Private, $5.3B debt", type: "target" },
      ],
      edges: [
        { from: "kkr-post",     to: "tru-post", label: "25%" },
        { from: "bain-post",    to: "tru-post", label: "22.5%" },
        { from: "vornado-post", to: "tru-post", label: "32.5%" },
        { from: "mgmt-post",    to: "tru-post", label: "20%" },
      ],
    },
    keyTerms: [
      { label: "Transaction Type",    value: "Go-Private LBO (cash merger)",    accent: true  },
      { label: "Acquisition Price",   value: "$26.75 per share",                accent: true  },
      { label: "Equity Contribution", value: "$1.3B (equity ratio ~20%)",       accent: false },
      { label: "Debt Raised",         value: "$5.3B (TLB + RCF + real estate loans)" },
      { label: "Entry Leverage",      value: "Debt/EBITDA ~6.2×"               },
      { label: "Annual Interest",     value: "~$400–450M estimated",            accent: true  },
      { label: "Bankruptcy Filing",   value: "Chapter 11, September 2017",      accent: true  },
    ],
  },

  advisors: {
    body: "The KKR consortium assembled top-tier LBO advisors. Acquisition financing was co-arranged by Citigroup and Credit Suisse, with multiple banks participating in the syndication.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "KKR / Bain Capital / Vornado Consortium",
        initials: "KKR",
        bg: "bg-blue-800",
        advisors: [
          { firm: "Citigroup",                   role: "LBO Financing Lead Arranger",        roleType: "financial", note: "TLB lead bookrunner" },
          { firm: "Credit Suisse",               role: "LBO Financing Co-Arranger",          roleType: "financial", note: "Co-bookrunner" },
          { firm: "Bear Stearns",                role: "Financial Advisor (KKR)",            roleType: "financial", note: "Acquired by JPMorgan in 2008" },
          { firm: "Simpson Thacher & Bartlett",  role: "Legal Advisor (KKR)",               roleType: "legal",     note: "Leading LBO law firm" },
        ],
      },
      {
        side: "target",
        sideLabel: "Toys R Us Board",
        initials: "TRU",
        bg: "bg-red-600",
        advisors: [
          { firm: "Merrill Lynch",   role: "Financial Advisor",           roleType: "financial", note: "Fairness opinion provided" },
          { firm: "Kirkland & Ellis", role: "Legal Advisor",             roleType: "legal",     note: "M&A specialist" },
          { firm: "Kirkland & Ellis", role: "Bankruptcy Legal Advisor (2017)", roleType: "legal", note: "Chapter 11 process counsel" },
        ],
      },
    ],
  },

  valuation: {
    body: "The KKR consortium offered $26.75 per share, approximately a 15% premium to the unaffected stock price ($23–24). EV/EBITDA of 7.7× was in line with the retail LBO average of 7–8× at the time, but the thin equity cushion (20%) and heavy annual interest burden were structural risks. The core problem was not the valuation multiple — it was the capital structure.",
    rows: [
      { item: "Equity Value",              val: "$3.0B",    note: "$26.75 × 112M diluted shares outstanding",       accent: false },
      { item: "Existing Net Debt Assumed", val: "+$3.6B",   note: "Existing debt inherited at acquisition",          accent: false },
      { item: "Total Enterprise Value",    val: "$6.6B",    note: "Equity + existing net debt",                      accent: true  },
      { item: "Entry EBITDA",              val: "$850M",    note: "FY2004 basis",                                    accent: false },
      { item: "Entry EV/EBITDA",           val: "7.7×",     note: "In line with retail LBO average",                 accent: false },
      { item: "New LBO Debt",              val: "$5.3B",    note: "TLB $4.4B + RCF $1.0B + other",                  accent: true  },
      { item: "Debt/EBITDA (Entry)",       val: "6.2×",     note: "Above risk threshold (6×) — high risk for retail", accent: true  },
    ],
    disclaimer: "Figures are estimates based on public information and bankruptcy court filings.",
  },

  rationale: {
    buyer: {
      title: "KKR Consortium's Rationale",
      initials: "KKR",
      bg: "bg-blue-800",
      points: [
        "Toys R Us's 'category killer' position in specialty toy retail — assumed brand power and buying power would be sustainable",
        "Real estate value extraction strategy: leveraging Vornado's real estate portfolio (store properties)",
        "Perceived undervaluation relative to the public market — expected value recovery upon resolution of Amazon lawsuit",
        "Going private would remove quarterly earnings pressure → enable operational restructuring and efficiency improvements",
        "Expected 3-5× return via medium-term IPO or strategic sale (ultimately not realized)",
      ],
    },
    seller: {
      title: "Toys R Us Shareholders' Rationale",
      initials: "TRU",
      bg: "bg-red-600",
      points: [
        "+15% premium to unaffected stock price — immediate cash realization with no acquisition risk",
        "Avoiding uncertainty from the Amazon lawsuit and intensifying competition",
        "Store restructuring and headcount reduction plans were difficult to execute as a public company",
        "The majority of institutional investors satisfied with the premium — shareholder vote passed without significant opposition",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "The KKR × Toys R Us LBO became the defining textbook case of leveraged buyout failure. Twelve years of interest payments consumed all capacity for investment, digital transformation failed, and the dominant narrative — that Amazon killed Toys R Us — is widely criticized as misplacing blame. The real cause was the interest burden. That said, some argue the PE firms extracted partial value by separating real estate assets in the early years of the LBO.",
    overallVerdict: "Complete failure — total equity loss, 33,000 unemployed",
    positives: [
      "Shortly after the LBO, non-core asset sales (portions of international operations, real estate) reduced some debt",
      "Vornado Realty separately managed portions of its real estate portfolio, recovering a portion of its equity",
      "12 years as a private company → restructuring attempted without public market volatility (ultimately insufficient)",
    ],
    risks: [
      "Total $1.3B equity loss — KKR, Bain, and Vornado all failed to recover their investment",
      "TLB lender recovery rate approximately $0.20–0.25 per dollar — the real-world outcome of nominally 'senior secured' debt",
      "33,000 employees fully laid off — the social cost controversy of retail LBOs",
      "12 years of ~$400–450M annual interest payments totaling $5B+ — what if that capital had been invested in digital infrastructure?",
      "Post-bankruptcy, a regular entry on 'America's worst PE deals' lists",
    ],
    editorNote: "The central lesson of the Toys R Us case is straightforward: layering 6×+ leverage onto a retail business — with its thin EBITDA margins and high earnings volatility — makes sound management judgment impossible. Faced with $400M in annual interest, a $50M digital investment budget was a luxury. Even without Amazon, Toys R Us would eventually have collapsed under its debt service burden.",
  },

  tombstone: {
    acquirerInitials: "KKR",
    acquirerBg: "bg-blue-800",
    targetInitials: "TRU",
    targetBg: "bg-red-600",
    acquirerName: "KKR / Bain Capital / Vornado",
    targetName: "Toys R Us Inc.",
    dealTitle: "Toys R Us LBO",
    dealSize: "$6.6 Billion",
    dealSizeUSD: "$6.6bn",
    evEbitda: "7.7×",
    closeDate: "July 2005",
  },

  sources: [
    { id: 1, text: "Toys R Us (2005). Merger Agreement — KKR / Bain Capital / Vornado. March 2005." },
    { id: 2, text: "U.S. Bankruptcy Court (2017). In re Toys R Us, Inc. Chapter 11 Filing. September 19, 2017." },
    { id: 3, text: "New York Times (2018). Toys R Us to Shut Down All Its U.S. Stores. March 14, 2018." },
    { id: 4, text: "S&P Global (2017). Toys R Us Credit Rating Action — Default. September 2017." },
    { id: 5, text: "Moody's (2016). Toys R Us: Leveraged Loan Review and Covenant Analysis." },
    { id: 6, text: "Wall Street Journal (2018). The Toys R Us Bankruptcy: How PE Piled on Debt. April 2018." },
    { id: 7, text: "Harvard Business School (2019). Case Study: Toys R Us — Leveraged Buyout Gone Wrong." },
    { id: 8, text: "Bloomberg (2018). Toys R Us: How KKR, Bain, and Vornado's LBO Ended in Disaster. 2018." },
  ],

  seo: {
    title: "KKR Toys R Us LBO — The Complete Anatomy of a Leveraged Buyout Failure",
    description: "The 2005–2018 Toys R Us LBO failure. Full LevFin analysis of how $5.3B in debt blocked digital investment, the structural causes of Chapter 11 bankruptcy, and TLB lender losses.",
    keywords: [
      "Toys R Us", "KKR LBO", "leveraged buyout", "LBO failure", "Chapter 11 bankruptcy",
      "TLB lenders", "leveraged loan", "PE investment failure", "retail LBO", "LevFin",
      "Toys R Us bankruptcy", "leveraged buyout failure",
    ],
  },

  concepts: [
    {
      term: "Term Loan B (TLB)",
      href: "/market-101/levfin-hy-vs-loans",
      description: "The core debt instrument in LBOs. 7-year maturity, covenant-lite, institutional investor (CLO) focused. The Toys R Us TLB of $4.4B was the primary driver of its interest burden.",
    },
    {
      term: "Debt/EBITDA (Leverage Multiple)",
      href: "/market-101/levfin-credit-metrics",
      description: "The primary credit metric measuring a company's debt repayment capacity. Toys R Us's entry multiple of 6.2× was excessive given retail industry characteristics, and deteriorated to 7.7× by the time of bankruptcy.",
    },
    {
      term: "Interest Coverage Ratio (ICR)",
      href: "/market-101/levfin-credit-metrics",
      description: "EBITDA divided by interest expense. Toys R Us ran at a chronic 1.4–1.8× — healthy companies typically require 3×+. The defining metric for understanding why digital investment was structurally impossible.",
    },
    {
      term: "Go-Private LBO",
      description: "A leveraged buyout that takes a publicly listed company private. The advantages include freedom to restructure without public market pressure, but access to equity capital markets is cut off, creating liquidity risk.",
    },
    {
      term: "TLB Recovery Rate",
      href: "/market-101/levfin-distressed",
      description: "The amount lenders actually recover per dollar of principal in default. Toys R Us TLB lenders recovered approximately $0.20–0.25 per dollar — a case study in how 'senior secured' loses its real-world meaning when collateral value is insufficient.",
    },
  ],

  faq: [
    {
      q: "Did Toys R Us fail because of Amazon or because of the LBO debt?",
      a: "Both were causes, but the root cause was the LBO debt structure. Annual interest expense of $400–450M blocked all e-commerce investment. Walmart and Target faced the same Amazon challenge but could invest tens of billions in digital without the debt burden. Toys R Us would eventually have collapsed under its interest payments — even in a world without Amazon.",
    },
    {
      q: "How much did KKR and Bain Capital lose on the Toys R Us LBO?",
      a: "They lost the entirety of their $1.3B equity investment. That said, some argue that early in the LBO, the consortium recovered a portion of its capital through real estate asset separation (sale-leasebacks, etc.). TLB lenders also recovered only approximately $0.20–0.25 per dollar of principal.",
    },
    {
      q: "Why did TLB lenders suffer losses despite being senior secured?",
      a: "The liquidation value of collateral assets (inventory, real estate) was insufficient to cover $5.2B in debt. In a retail liquidation, inventory must be sold at steep discounts, and lease liabilities must be resolved first. Even 'senior secured' lenders face losses when collateral value falls short of the debt outstanding.",
    },
    {
      q: "Why is Debt/EBITDA of 6.2× particularly dangerous in retail?",
      a: "Retail is highly cyclical with thin margins. With EBITDA margins of only 7–8%, any economic downturn rapidly increases the leverage multiple. By contrast, technology companies (30–40% margins) or healthcare businesses (stable cash flows) can manage 6× more comfortably. In retail LBOs, staying at or below 4× represents a meaningful margin of safety.",
    },
  ],

  // ── LevFin Overview ─────────────────────────────────────────────────
  levfinOverview: {
    angle: "The Debt Trap of an LBO — $400M in Annual Interest Blocking Future Investment for 12 Years",
    body: "Dissecting the Toys R Us LBO debt structure reveals leveraged finance's most frightening lesson. $5.3B in debt, $400M+ in annual interest, and a digital investment budget made powerless in the face of those obligations. TLB lenders were 'senior secured,' but their recovery rate was only $0.20–0.25 on the dollar. The PE investors lost their entire $1.3B in equity. This deal is the reason LevFin credit analysts cite 'retail leverage thresholds' in every discussion.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "$4.4B",
        rate: "LIBOR + 350bp",
        maturity: "7 years",
        seniority: "senior-secured",
        pct: 67,
        color: "bg-amber-500",
      },
      {
        name: "Revolving Credit Facility",
        amountDisplay: "$1.0B",
        rate: "LIBOR + 250bp",
        maturity: "5 years",
        seniority: "senior-secured",
        pct: 15,
        color: "bg-amber-400",
      },
      {
        name: "Real Estate Mortgage Loan",
        amountDisplay: "$0.9B",
        rate: "Fixed ~6%",
        maturity: "10 years",
        seniority: "senior-secured",
        pct: 13,
        color: "bg-orange-500",
      },
      {
        name: "Equity (PE + Management)",
        amountDisplay: "$1.3B",
        rate: "N/A",
        maturity: "N/A",
        seniority: "equity",
        pct: 5,
        color: "bg-emerald-500",
      },
    ],
    metrics: [
      { label: "Entry Leverage",           value: "6.2×",     sub: "Debt/EBITDA at close",              isAlert: true  },
      { label: "Annual Interest",          value: "$400M+",   sub: "60–70% of EBITDA consumed",         isAlert: true  },
      { label: "Interest Coverage (ICR)",  value: "1.5–1.8×", sub: "Healthy threshold: 3×+",            isAlert: true  },
      { label: "TLB Recovery (Bankruptcy)", value: "~$0.22",  sub: "22 cents recovered per $1 of principal", isAlert: true },
    ],
    lessons: [
      {
        icon: "⚖️",
        title: "Retail Leverage Threshold — Above 6× Is a Structural Trap",
        body: "Retail has thin margins (EBITDA margin 7–8%) and high economic sensitivity. When leverage above 6× causes interest to consume 60%+ of EBITDA, it becomes impossible to respond to a new competitive threat (Amazon) with investment. The credit analyst covering Toys R Us should have verified the industry-adjusted leverage threshold.",
      },
      {
        icon: "💸",
        title: "TLB Is Senior, But Cannot Beat Liquidation Value",
        body: "TLB holds a first-lien secured position, but when collateral asset values (inventory, real estate) fall short of the debt outstanding, recovery rates plummet. Retail LBO collateral is valued on a going-concern basis, but in actual liquidation, inventory is discounted 50–70% and leases become liabilities. The Toys R Us TLB recovery of $0.22 demonstrates this structural flaw.",
      },
      {
        icon: "🔒",
        title: "LBO = Stripping Away Future Investment Options",
        body: "After the LBO, Toys R Us found it practically impossible to raise new capital for investment. An investment-grade company can quickly tap the bond market; Toys R Us could only issue expensive HY bonds or add to its existing debt. The leveraged loan market tends to facilitate 'debt refinancing' rather than 'capital for operational improvement.'",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-credit-metrics",
        chapterNum: "Ch.2",
        title: "Credit Metrics Analysis",
        whyRelevant: "Why Debt/EBITDA 6.2× and ICR 1.5× were bankruptcy signals in retail",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "Distressed Debt & Restructuring",
        whyRelevant: "TLB recovery rate of $0.22, Chapter 11 process, liquidation vs. reorganization — real-world case",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "Key Case Studies",
        whyRelevant: "The textbook retail LBO failure — how leveraged loans trap a company",
      },
    ],
  },
};

export default deal;
