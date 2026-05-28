/**
 * KKR·TPG × TXU / Energy Future Holdings (2007–2014)
 * The Largest PE Bankruptcy Ever — The $45B Energy LBO Destroyed by the Shale Revolution
 * Entry $44.4B → 2014 Chapter 11 → Largest PE Bankruptcy in History
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kkr-txu-energy-future",
  title: "Why KKR and TPG Suffered the Largest PE Bankruptcy Ever — The Collapse of the $45B TXU LBO",
  subtitle: "Failed Shale Revolution Prediction + Excessive Leverage — The Most Expensive Lesson in LBO History",
  category: "ma",
  industry: "Energy / Power",
  country: "United States",
  announcedAt: "2007-02-26",
  closedAt: "2007-10-10",
  announcedDisplay: "February 2007",
  closedDisplay: "October 2007",
  readingMinutes: 12,
  tags: [
    "KKR", "TPG", "TXU", "Energy Future Holdings", "EFH", "LBO",
    "bankruptcy", "Chapter 11", "shale revolution", "natural gas", "energy", "power",
    "leveraged loan", "LevFin", "PE", "private equity", "largest PE bankruptcy",
  ],
  excerpt:
    "In 2007, KKR and TPG acquired Texas power company TXU for $45 billion. The thesis was that natural gas prices would remain elevated. But the shale revolution caused gas prices to collapse 75% by 2012, destroying power generation revenues. In 2014, Energy Future Holdings filed for Chapter 11 with $41.8B in debt — one of the largest PE bankruptcies in history. A textbook case of 'flawed macro thesis + excessive leverage.'",

  acquirer: { initials: "KKR", bg: "bg-slate-700", label: "KKR · TPG Capital · Goldman Sachs PE" },
  target:   { initials: "TXU", bg: "bg-orange-700", label: "TXU Corp (→ Energy Future Holdings)" },

  background: [
    "TXU Corp was Texas's largest electric utility, with three business segments: Luminant (generation), TXU Energy (retail power), and Oncor (transmission and distribution). In the deregulated Texas power market, fuel costs for generation (primarily natural gas) and wholesale electricity prices were the core revenue drivers.",
    "In early 2007, KKR and TPG's thesis was clear: if natural gas prices remained elevated or rose, TXU's coal-fired power plants would enjoy a cost advantage and wholesale electricity prices would remain high, generating substantial cash flow. Henry Hub natural gas prices at the time were running at $6–8 per MMBtu.",
    "The $44.4B enterprise value was the largest LBO in history at that point. The KKR, TPG, and Goldman Sachs PE consortium contributed $8.3B in equity and raised $37.7B in leveraged loans and HY bonds. Debt/EBITDA was approximately 8×. In an unusual condition driven by environmental group pressure, the buyers committed to canceling 11 planned coal power plants.",
  ],

  dealSummary: {
    dealValueDisplay: "$44.4B",
    acquirerName: "KKR · TPG Capital · Goldman Sachs PE",
    targetName: "TXU Corp (Energy Future Holdings)",
    announcedDisplay: "February 26, 2007",
    closedDisplay: "October 10, 2007",
    country: "United States (Texas, private)",
  },

  executiveSummary: [
    "KKR / TPG / Goldman PE consortium acquired TXU for $44.4B — the largest LBO in history at that time.",
    "Thesis: elevated natural gas prices → coal generation cost advantage → high wholesale power prices.",
    "Reality: shale revolution → natural gas prices collapsed below $2/MMBtu by 2012, a 75%+ decline.",
    "Generation revenue collapsed → EBITDA plummeted → Debt/EBITDA surged → interest burden became unserviceable.",
    "April 2014: Chapter 11 filed with $41.8B in debt — one of the largest PE bankruptcies in history.",
  ],

  industryOverview: {
    body: "The U.S. electricity market is structured as a deregulated sector with separated generation, transmission & distribution (T&D), and retail segments. The Texas ERCOT market operates under a fully competitive model in which wholesale power prices are tightly linked to natural gas prices. In 2007, the industry broadly underestimated the scale of the shale gas revolution — the combination of horizontal drilling and hydraulic fracturing — and KKR and TPG were no exception.",
    metrics: [
      { label: "Deal Size",                    value: "$44.4B",     sub: "Largest LBO in history (at that time)" },
      { label: "Natural Gas Price (2007)",     value: "$6–8/MMBtu", sub: "Thesis basis — assumed to remain elevated" },
      { label: "Natural Gas Price (2012)",     value: "$2/MMBtu",   sub: "Shale revolution: 75%+ collapse" },
      { label: "Debt at Bankruptcy",           value: "$41.8B",     sub: "April 2014 Chapter 11 basis" },
    ],
    players: [
      { name: "Luminant (TXU Generation)",    role: "Texas's largest power generator, concentrated in coal-fired plants" },
      { name: "TXU Energy (Retail Power)",    role: "Texas's #1 retail electricity provider" },
      { name: "Oncor (T&D)",                  role: "Texas's largest transmission and distribution network — stable regulated revenue" },
      { name: "Shale Gas Producers",          role: "Rapid post-2007 growth — destroyed the TXU investment thesis" },
    ],
  },

  companyOverview: {
    targetName: "TXU Corp → Energy Future Holdings (EFH)",
    body: "Texas's dominant electric utility operator, comprising three business segments: Luminant (generation, primarily coal), TXU Energy (retail power), and Oncor (regulated T&D). The company was renamed Energy Future Holdings following the acquisition. While Oncor generated stable regulated revenue, Luminant and TXU Energy's earnings were entirely dependent on natural gas prices. The cost advantage of coal-fired generation over gas-fired plants — before the shale revolution — was the core of the investment thesis.",
    metrics: [
      { label: "LBO Enterprise Value",   value: "$44.4B",   sub: "Largest in history at the time (2007)" },
      { label: "Entry Debt/EBITDA",      value: "~8×",      sub: "Total debt of $37.7B" },
      { label: "Debt at Bankruptcy",     value: "$41.8B",   sub: "April 2014 basis" },
      { label: "Equity Investment Loss", value: "~$8.3B",   sub: "Total loss for KKR, TPG, and Goldman" },
    ],
    financials: [
      {
        year: "FY2006",
        revenue: 11537,
        cogs: 7420,
        grossProfit: 4117,
        sga: 620,
        operatingIncome: 3497,
        ebitda: 4870,
      },
      {
        year: "FY2008",
        revenue: 10285,
        cogs: 7190,
        grossProfit: 3095,
        sga: 680,
        operatingIncome: 2415,
        ebitda: 3640,
      },
      {
        year: "FY2012",
        revenue: 7943,
        cogs: 6220,
        grossProfit: 1723,
        sga: 590,
        operatingIncome: 1133,
        ebitda: 1820,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "mn",
    financialsNote: "Unit: $M (millions) | FY2012 reflects the post-gas price collapse. EBITDA fell from $4.87B (2006) to $1.82B (2012) — a 63% decline. Annual interest expense of ~$4B could no longer be covered by EBITDA.",
  },

  dealStructure: {
    body: "$8.3B equity + $37.7B in leveraged loans and HY bonds to finance $44.4B EV. Debt/EBITDA ~8×. Complex structure of TLB $24.5B + bridge loans + HY bonds. The regulated Oncor subsidiary was ring-fenced separately.",
    preOwnership: {
      nodes: [
        { id: "public", label: "Public Market Shareholders", sub: "NYSE: TXU, dispersed ownership", type: "entity" },
        { id: "txu",    label: "TXU Corp",                  sub: "Texas's largest power utility",  type: "target" },
      ],
      edges: [
        { from: "public", to: "txu", label: "100% publicly listed shares" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "kkr",    label: "KKR · TPG · Goldman PE",    sub: "Equity $8.3B",                   type: "fund"   },
        { id: "tlb",    label: "TLB Lenders",               sub: "$24.5B (floating rate, 1L secured)", type: "entity" },
        { id: "hy",     label: "HY Bondholders",            sub: "~$10B (fixed rate, unsecured)",  type: "entity" },
        { id: "efh",    label: "Energy Future Holdings",    sub: "Private (renamed EFH)",          type: "target" },
        { id: "oncor",  label: "Oncor (T&D)",               sub: "Ring-fenced regulated subsidiary", type: "entity" },
      ],
      edges: [
        { from: "kkr",   to: "efh",   label: "Equity ~19%" },
        { from: "tlb",   to: "efh",   label: "$24.5B (1L)" },
        { from: "hy",    to: "efh",   label: "~$10B (unsecured)" },
        { from: "efh",   to: "oncor", label: "80% equity stake" },
      ],
    },
    keyTerms: [
      { label: "Deal Value",           value: "$44.4B (largest LBO in history)",        accent: true  },
      { label: "TLB",                  value: "$24.5B (LIBOR+350bps, first lien)",      accent: false },
      { label: "HY Bonds",             value: "~$10B (with PIK option)",                accent: false },
      { label: "Entry Debt/EBITDA",    value: "~8× — extremely vulnerable to rate hikes", accent: true },
      { label: "Oncor Ring-Fencing",   value: "Regulated subsidiary legally isolated — the only safety valve", accent: true },
    ],
  },

  advisors: {
    body: "All three PE consortium members assembled top-tier advisory teams. Environmental group negotiations were also an integral part of the transaction.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "KKR · TPG · Goldman PE (Acquirer)",
        initials: "KKR",
        bg: "bg-slate-700",
        advisors: [
          { firm: "Citigroup",             role: "Lead Arranger",   roleType: "financial", note: "TLB & HY syndication lead" },
          { firm: "Morgan Stanley",        role: "Co-Arranger",     roleType: "financial", note: "Equity bridge" },
          { firm: "Weil Gotshal & Manges", role: "Legal Advisor",   roleType: "legal",     note: "LBO structure design" },
        ],
      },
      {
        side: "target",
        sideLabel: "TXU Corp (Sell-Side)",
        initials: "TXU",
        bg: "bg-orange-700",
        advisors: [
          { firm: "Goldman Sachs (Sell-Side)", role: "Financial Advisor", roleType: "financial", note: "Sale process (also a PE investor — conflict of interest issue)" },
          { firm: "Shearman & Sterling",       role: "Legal Advisor",     roleType: "legal",     note: "Board M&A counsel" },
        ],
      },
    ],
  },

  valuation: {
    body: "KKR and TPG acquired TXU at an entry EV/EBITDA of ~9× based on FY2006 EBITDA of $4.87B. The plan was that sustained natural gas prices would allow EBITDA to reach $6B+ and bring Debt/EBITDA below 5×. Reality was the exact opposite.",
    rows: [
      { item: "Entry EV",                    val: "$44.4B",         note: "October 2007, EV/EBITDA ~9×",             accent: true  },
      { item: "Entry Debt/EBITDA",           val: "~8×",            note: "Total debt $37.7B / EBITDA $4.87B",       accent: true  },
      { item: "Gas Price Thesis",            val: "$6–8/MMBtu",     note: "Actual 2012: $2/MMBtu — 75% collapse",    accent: false },
      { item: "EBITDA Change",               val: "$4.87B→$1.82B",  note: "2006→2012, 63% decline",                  accent: true  },
      { item: "Creditor Recovery (Bankruptcy)", val: "30–50%",      note: "Varies by tranche depending on structure", accent: false },
    ],
    disclaimer: "Recovery rates in the bankruptcy process are subject to negotiation outcomes. Equity investors (KKR, TPG, Goldman) effectively lost their entire investment.",
  },

  rationale: {
    buyer: {
      title: "KKR and TPG's Investment Rationale",
      initials: "KKR",
      bg: "bg-slate-700",
      points: [
        "Sustained high natural gas prices → sustained coal generation (TXU Luminant) cost advantage → elevated wholesale power prices",
        "Texas population and economic growth → continuously increasing power demand",
        "Stable regulated revenue from Oncor (T&D) as a buffer against interest service burden",
        "Operational improvement: efficiency gains at power plants and cost reductions to grow EBITDA",
        "Energy deregulation trend → expectation of expanding private power markets",
      ],
    },
    seller: {
      title: "TXU Board's Rationale for Accepting",
      initials: "TXU",
      bg: "bg-orange-700",
      points: [
        "25% premium to the public offer price ($69.25/share) — immediate shareholder value realization",
        "Environmental pressure: commitment to cancel 11 coal plants → reduced social and regulatory risk",
        "Going private would allow long-term investment without quarterly earnings pressure",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "TXU / EFH is recorded as the most expensive PE failure in history. KKR, TPG, and Goldman collectively lost over $8.3B in equity. After the bankruptcy, Luminant and TXU Energy were reorganized as Vistra Energy, and Oncor was sold separately (NextEra Energy attempted the acquisition but ultimately Sempra Energy prevailed). The fundamental cause was a macro thesis failure: the inability to predict the scale of the shale revolution.",
    overallVerdict: "Historic failure — total equity loss, one of the largest PE bankruptcies ever at $41.8B",
    positives: [
      "Oncor (regulated T&D) was ring-fenced from the bankruptcy → separately sold, allowing partial creditor recovery",
      "In the restructuring process, Luminant was reborn as Vistra Energy → subsequently operated successfully",
    ],
    risks: [
      "Shale revolution not predicted: the scale and speed at which horizontal drilling and hydraulic fracturing would expand gas supply was entirely missed",
      "Single commodity dependence: 80%+ of EBITDA correlated with natural gas prices — insufficient hedging",
      "Entry Debt/EBITDA ~8×: a 30% EBITDA decline alone was enough to make interest service impossible",
      "Conflict of interest: Goldman Sachs simultaneously served as sell-side financial advisor and PE co-investor",
    ],
    editorNote: "The core lesson of TXU: in PE investing, reliance on a 'macro thesis' is extraordinarily dangerous. Particularly in commodity-sensitive businesses, leverage should be minimized. The assumption that 'surely this price won't collapse' turned a $45B LBO into zero equity.",
  },

  tombstone: {
    acquirerInitials: "KKR",
    acquirerBg: "bg-slate-700",
    targetInitials: "EFH",
    targetBg: "bg-orange-700",
    acquirerName: "KKR · TPG · Goldman PE",
    targetName: "TXU Corp (Energy Future Holdings)",
    dealTitle: "KKR·TPG × TXU LBO",
    dealSize: "$44.4 Billion",
    dealSizeUSD: "$44.4bn",
    evEbitda: "9×",
    closeDate: "October 2007",
  },

  sources: [
    { id: 1, text: "KKR·TPG Capital (2007). TXU Corp Merger Agreement — $69.25 per share. February 2007." },
    { id: 2, text: "Energy Future Holdings (2014). Chapter 11 Bankruptcy Filing — U.S. Bankruptcy Court, Delaware. April 2014." },
    { id: 3, text: "Wall Street Journal (2014). TXU's Bankruptcy: How the Biggest Leveraged Buyout Went Wrong. April 2014." },
    { id: 4, text: "Bloomberg (2012). EFH Faces $40 Billion Debt Crisis as Gas Prices Collapse. November 2012." },
    { id: 5, text: "U.S. Energy Information Administration (2013). Natural Gas Spot Prices — Henry Hub Historical Data." },
    { id: 6, text: "Harvard Business School (2015). Energy Future Holdings: Anatomy of a Failed LBO. HBS Case 9-215-082." },
    { id: 7, text: "Moody's (2014). Energy Future Holdings Corp — Rating Withdrawal. April 2014." },
    { id: 8, text: "Reuters (2016). Vistra Energy Emerges from EFH Bankruptcy, Plans IPO. October 2016." },
  ],

  seo: {
    title: "KKR·TPG × TXU Energy LBO Failure — The $45B Lessons of the Largest PE Bankruptcy",
    description: "Complete analysis of KKR and TPG's $44.4B TXU LBO in 2007. Natural gas 75% collapse from the shale revolution, EBITDA down 63%, $41.8B Chapter 11 bankruptcy in 2014. The definitive case study of 'failed macro thesis + excessive leverage.'",
    keywords: [
      "KKR", "TPG", "TXU", "Energy Future Holdings", "LBO", "bankruptcy",
      "Chapter 11", "shale revolution", "natural gas", "energy", "leveraged loan",
      "PE", "private equity", "largest PE bankruptcy", "macro thesis", "commodity risk",
    ],
  },

  concepts: [
    {
      term: "Macro Thesis Risk",
      href: "/deal-101/lbo-overview",
      description: "The risk of relying on macroeconomic predictions — such as 'market prices will move this way' — for investment returns in PE. Commodity prices, interest rates, and exchange rates cannot be controlled. A single natural gas price prediction failure collapsed the entire $44B TXU LBO.",
    },
    {
      term: "Ring-Fencing (Asset Isolation)",
      href: "/deal-101/lbo-capital-structure",
      description: "A legal structure that isolates specific assets or subsidiaries from a group's debt structure, protecting them in a parent company bankruptcy. TXU's Oncor (regulated T&D) was ring-fenced and continued to operate and be sold separately even after the EFH bankruptcy.",
    },
    {
      term: "Commodity Price Risk",
      href: "/deal-101/lbo-overview",
      description: "The risk that changes in raw material or energy prices directly impact a company's cash flows. In an LBO with high leverage, a commodity price decline can make interest service impossible and accelerate bankruptcy. Single-commodity dependence without hedging is a fatal vulnerability in any LBO.",
    },
    {
      term: "PIK (Payment-in-Kind) Bond",
      href: "/market-101/levfin-hy-vs-loans",
      description: "A bond structure in which interest is paid in additional bonds (in kind) rather than cash. While reducing near-term cash burden, debt compounds on a rolling basis. EFH's PIK toggle bonds compounded to further inflate total debt in the period leading to bankruptcy.",
    },
    {
      term: "Shale Revolution",
      href: "/market-101/levfin-cases",
      description: "A technological revolution combining horizontal drilling and hydraulic fracturing to economically extract natural gas and oil from shale rock formations. After 2008, it drove explosive growth in U.S. gas production, collapsing Henry Hub prices from $8 to $2/MMBtu.",
    },
  ],

  faq: [
    {
      q: "Why did KKR and TPG fail to predict the shale revolution?",
      a: "In 2007, horizontal drilling and hydraulic fracturing technology already existed, but almost no one predicted the scale and speed at which it would unfold. The top Wall Street talent at Goldman Sachs, Citigroup, and others who participated in the TXU deal made the same mistake. This demonstrates that even a 'thesis all experts agree on' can produce catastrophic outcomes when the leveraged bet is fully exposed to an uncontrollable external variable.",
    },
    {
      q: "How did Oncor survive the EFH bankruptcy?",
      a: "Oncor (Texas T&D operations) was ring-fenced from EFH's capital structure at the request of regulators. EFH's creditors were legally prevented from directly accessing Oncor's assets. As a result, Oncor continued normal operations after the EFH bankruptcy and was ultimately sold to Sempra Energy, providing partial recovery for creditors.",
    },
    {
      q: "Was it a coincidence that the largest LBO in history became the largest PE bankruptcy?",
      a: "No — it was close to a structural inevitability. The larger the deal, the greater the absolute debt burden and the harder it is to sustain cash flow through volatility. In large deals, competitive bidding pressure also drives up entry multiples. In TXU's case, the sheer $44.4B scale created leverage levels that a fragile thesis dependent on a single commodity price simply could not support.",
    },
    {
      q: "How has PE investing in the energy sector changed after TXU's bankruptcy?",
      a: "Since the TXU bankruptcy, commodity hedging has become a standard requirement in energy LBOs. Ring-fencing regulated assets (regulated utilities) separately from unregulated generation has also become the standard structure. Entry Debt/EBITDA above 8× in the energy sector has become effectively taboo.",
    },
  ],

  // ── LevFin Overview ─────────────────────────────────────────────────
  levfinOverview: {
    angle: "The Largest PE Bankruptcy — The Catastrophe of Excessive Leverage + Failed Macro Thesis",
    body: "The TXU LBO is a textbook demonstration of how dangerous '$44.4B × Debt/EBITDA 8×' really is. When commodity-linked EBITDA collapsed 75%, there was no cash left to service interest. TLB lenders with $24.5B + HY bondholders with ~$10B recorded recovery rates of only cents on the dollar in the bankruptcy process.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "$24.5B",
        rate: "LIBOR+350bps (floating)",
        maturity: "7 years",
        seniority: "senior-secured",
        pct: 55,
        color: "bg-orange-500",
      },
      {
        name: "Revolving Credit Facility",
        amountDisplay: "$4.0B",
        rate: "LIBOR+350bps",
        maturity: "6 years",
        seniority: "senior-secured",
        pct: 9,
        color: "bg-orange-400",
      },
      {
        name: "HY Bonds (Senior/Sub Notes)",
        amountDisplay: "~$10B",
        rate: "10.875%–11.25% (fixed)",
        maturity: "8–10 years",
        seniority: "senior-unsecured",
        pct: 22,
        color: "bg-red-500",
      },
      {
        name: "Equity (KKR · TPG · Goldman)",
        amountDisplay: "$8.3B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 19,
        color: "bg-slate-500",
      },
    ],
    metrics: [
      { label: "Entry Debt/EBITDA",   value: "~8×",          sub: "Danger level for energy LBOs",  isAlert: true  },
      { label: "EBITDA Decline",      value: "-63%",          sub: "Driven by gas price collapse",  isAlert: true  },
      { label: "Debt at Bankruptcy",  value: "$41.8B",        sub: "2014 Chapter 11",               isAlert: true  },
      { label: "Equity Loss",         value: "~$8.3B",        sub: "KKR · TPG · Goldman full loss", isAlert: true  },
    ],
    lessons: [
      {
        icon: "⚡",
        title: "Never Bet Leverage on Commodity Prices",
        body: "TXU LBO's core mistake was placing the entire return on an uncontrollable external variable — natural gas prices. In a structure where 80%+ of EBITDA was correlated with gas prices, Debt/EBITDA of 8× was catastrophic: a 30% price decline alone was enough to make interest service impossible.",
      },
      {
        icon: "🔒",
        title: "Ring-Fencing — The Last Line of Defense Against Contagion",
        body: "Oncor survived the EFH bankruptcy thanks to ring-fencing. Legally isolating stable assets (regulated revenue businesses) within a group is the last line of defense that preserves creditor recovery in worst-case scenarios. Ring-fencing has become standard in energy LBOs since EFH.",
      },
      {
        icon: "📊",
        title: "Leverage Ratio and Absolute Leverage Are Different Things",
        body: "Debt/EBITDA of 8× may appear to be 'within comprehensible range,' but in a $44.4B EV deal, 8× means $37B+ in debt. At that absolute scale, even modest EBITDA deterioration causes interest expense to exceed cash flow. The larger the deal, the more conservative the leverage multiple should be.",
      },
    ],
    relatedChapters: [
      {
        slug: "lbo-overview",
        chapterNum: "Ch.0",
        title: "The Essence of LBO",
        whyRelevant: "Blackstone/Hilton (success) vs. KKR/TXU (failure) — stark contrast of two deals executed in the same year",
      },
      {
        slug: "lbo-capital-structure",
        chapterNum: "Ch.1",
        title: "LBO Capital Structure Anatomy",
        whyRelevant: "TLB $24.5B + HY $10B complex structure — how Debt/EBITDA of 8× leads to bankruptcy",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "Distressed Debt & Restructuring",
        whyRelevant: "$41.8B bankruptcy process — tranche-by-tranche recovery rates, Oncor ring-fence, creditor negotiations",
      },
    ],
  },
};

export default deal;
