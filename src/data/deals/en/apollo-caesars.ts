/**
 * Apollo Global Management × Caesars Entertainment (fka Harrah's) LBO (2008–2015)
 * Cov-Lite + Asset Transfer + Creditor Litigation — Dissecting the Loopholes in Leveraged Loan Covenants
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "apollo-caesars",
  title: "How Apollo Bought Caesars, Stripped Its Assets, and Fought Its Creditors in Court",
  subtitle: "$31.4B Casino LBO — Cov-Lite Loopholes, Asset Stripping Litigation, Chapter 11 Dissected",
  category: "ma",
  industry: "Gaming & Casino / Hospitality",
  country: "United States",
  announcedAt: "2006-12-19",
  closedAt: "2008-01-28",
  announcedDisplay: "December 2006",
  closedDisplay: "January 2008",
  readingMinutes: 14,
  tags: [
    "Apollo", "Caesars", "Harrahs", "LBO", "Cov-Lite", "covenants",
    "asset stripping", "Chapter 11", "bankruptcy", "leveraged loan", "LevFin", "PE",
    "private equity", "casino", "Las Vegas", "TPG", "creditor litigation",
  ],
  excerpt:
    "Apollo Global Management and TPG Capital acquired Harrah's Entertainment for $31.4B, then exploited Cov-Lite loan provisions to transfer high-margin casino assets into subsidiaries. First-lien creditors sued for Fraudulent Conveyance, leading to a January 2015 Chapter 11 filing — the most complex leveraged loan litigation in history, born from gaps in covenant protections.",

  acquirer: { initials: "APO", bg: "bg-blue-900", label: "Apollo Global Management / TPG" },
  target:   { initials: "CZR", bg: "bg-yellow-600", label: "Harrah's Entertainment (→ Caesars)" },

  background: [
    "In 2006, the Las Vegas casino industry was in a golden era. The mega-resort model (Bellagio, Venetian) had proven itself, a boom in Macau expansion was underway, and gaming demand appeared to be growing structurally. In this environment, Apollo Global Management and TPG Capital announced they would acquire Harrah's Entertainment — the largest casino operator in the United States — at $90 per share, for a total enterprise value of $31.4 billion. Six lead banks committed $25.3 billion in leveraged financing.",
    "The January 2008 closing came at the worst possible moment. The subprime crisis had materialized and casino visitation was beginning to decline. Harrah's was renamed Caesars Entertainment, but $25.3 billion in debt and $2.5+ billion in annual interest consumed every dollar of operating profit. Apollo began exploiting loopholes in the Cov-Lite loan agreements to create room to maneuver.",
    "From 2009 to 2013, Apollo gradually transferred Caesars' most profitable casino assets (Planet Hollywood, Horseshoe Hammond, and others) into subsidiaries such as Caesars Growth Partners (CGP). These subsidiaries were outside the collateral scope of the original first-lien creditors. Creditors filed suit alleging Fraudulent Conveyance. In January 2015, CEOC (Caesars Entertainment Operating Company) filed for Chapter 11 bankruptcy carrying $18.4 billion in debt.",
  ],

  dealSummary: {
    dealValueDisplay: "$31.4B",
    acquirerName: "Apollo Global Management / TPG Capital",
    targetName: "Harrah's Entertainment (→ Caesars Entertainment)",
    announcedDisplay: "December 19, 2006",
    closedDisplay: "January 28, 2008",
    country: "United States (NYSE: HET → Delisted → Relisted CZR)",
  },

  executiveSummary: [
    "Apollo (55%) and TPG (45%) acquired Harrah's Entertainment for $31.4B — $6.1B equity, $25.3B in leveraged loans and bonds.",
    "Entry Leverage ~10×, $2.5B+ annual interest — financial stress was immediate as the financial crisis hit and casino demand fell.",
    "Apollo used Cov-Lite provisions to transfer profitable assets into non-collateral subsidiaries (CGP) → first-lien creditor collateral diluted.",
    "First-lien creditors filed Fraudulent Conveyance suits → the most complex leveraged loan litigation in history.",
    "CEOC Chapter 11 bankruptcy in 2015; reorganization plan effective 2017 — creditors recovered approximately 65 cents on the dollar; PE equity wiped out.",
  ],

  industryOverview: {
    body: "The U.S. casino and gaming industry enjoyed a boom in the mid-2000s driven by the 'experiential entertainment' trend. The Las Vegas mega-resort model succeeded, pushing up real estate values and EBITDA simultaneously. However, the 2008–2009 financial crisis directly impacted casino visitation and was particularly devastating for an over-leveraged Caesars.",
    metrics: [
      { label: "U.S. Casino Gaming Revenue", value: "$59B",   sub: "2006 figure" },
      { label: "Harrah's Casino Count",       value: "50+",   sub: "Domestic (more including international)" },
      { label: "Harrah's Market Share",       value: "~15%",  sub: "U.S. casino gaming revenue" },
      { label: "Entry Leverage",              value: "~10×",  sub: "Debt/EBITDA at LBO close" },
    ],
    players: [
      { name: "Caesars (fka Harrah's)", role: "Largest U.S. casino operator (LBO target)" },
      { name: "MGM Resorts",            role: "Bellagio, MGM Grand — #2 operator" },
      { name: "Las Vegas Sands",        role: "Venetian, successful Macau expansion — #3" },
      { name: "Wynn Resorts",           role: "Premium resort niche market" },
    ],
  },

  companyOverview: {
    targetName: "Harrah's Entertainment → Caesars Entertainment",
    body: "Founded in 1937, this Nevada-based company was the largest casino chain in the United States, operating more than 50 casino resorts including Harrah's, Caesars Palace, Horseshoe, and Paris Las Vegas. It grew further by acquiring Caesars Entertainment Corp in 2004 and held a massive customer database through its 'Total Rewards' loyalty program. It was the largest casino holding company before the LBO, though it already carried substantial debt from prior acquisitions.",
    metrics: [
      { label: "LBO EV",                    value: "$31.4B",  sub: "Cash merger at $90 per share" },
      { label: "Entry Leverage",            value: "~10×",   sub: "Debt/EBITDA (extreme level)" },
      { label: "Annual Interest Burden",    value: "$2.5B+", sub: "Consumed 100%+ of EBITDA" },
      { label: "CEOC Debt at Bankruptcy",   value: "$18.4B", sub: "January 2015 Chapter 11 filing" },
    ],
    financials: [
      {
        year: "FY2006",
        revenue:         9784,
        cogs:            5690,
        grossProfit:     4094,
        sga:             1881,
        operatingIncome: 2213,
        ebitda:          2310,
      },
      {
        year: "FY2012",
        revenue:         8586,
        cogs:            5220,
        grossProfit:     3366,
        sga:             1720,
        operatingIncome: 1646,
        ebitda:          1820,
      },
      {
        year: "FY2014",
        revenue:         8517,
        cogs:            5367,
        grossProfit:     3150,
        sga:             1886,
        operatingIncome: 1264,
        ebitda:          1580,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "mn",
    financialsNote: "FY2014 is the year before CEOC's bankruptcy filing. EBITDA of $1.58B against $2.5B+ in annual interest → ICR of 0.63×. Some EBITDA had also shifted to non-collateral subsidiaries through asset transfers.",
  },

  dealStructure: {
    body: "A Go-Private LBO in which Apollo and TPG purchased all outstanding Harrah's shares in cash at $90 per share. After closing, the company was renamed Caesars Entertainment Corporation (CEC), with debt concentrated in the operating entity CEOC. Apollo subsequently created a structure that transferred profitable casino assets from CEOC into separate subsidiaries (CGP) outside the reach of original creditors.",
    preOwnership: {
      nodes: [
        { id: "apollo",  label: "Apollo Global",    sub: "PE fund (55%)",             type: "fund"   },
        { id: "tpg",     label: "TPG Capital",       sub: "PE fund (45%)",             type: "fund"   },
        { id: "public",  label: "Public Shareholders", sub: "NYSE: HET",               type: "public" },
        { id: "harrahs", label: "Harrah's Ent.",     sub: "Largest U.S. casino",       type: "target" },
      ],
      edges: [
        { from: "public", to: "harrahs", label: "~100%" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "apo-p",   label: "Apollo (55%)",         sub: "Equity $3.4B",                    type: "fund"   },
        { id: "tpg-p",   label: "TPG (45%)",            sub: "Equity $2.7B",                    type: "fund"   },
        { id: "cec",     label: "Caesars Ent. (CEC)",   sub: "Listed entity",                   type: "entity" },
        { id: "ceoc",    label: "CEOC",                 sub: "$25.3B debt concentrated here",   type: "entity" },
        { id: "cgp",     label: "Caesars Growth",       sub: "Asset transfer destination",      type: "entity" },
      ],
      edges: [
        { from: "apo-p", to: "cec",  label: "55%" },
        { from: "tpg-p", to: "cec",  label: "45%" },
        { from: "cec",   to: "ceoc", label: "100%" },
        { from: "cec",   to: "cgp",  label: "Asset transfer" },
      ],
    },
    keyTerms: [
      { label: "Transaction Type",       value: "Go-Private LBO (Cash Merger)",      accent: true  },
      { label: "Acquisition Price",      value: "$90.00 per share",                  accent: true  },
      { label: "Equity",                 value: "$6.1B (~19%)"                                     },
      { label: "Leveraged Debt",         value: "$25.3B — Cov-Lite structure",       accent: true  },
      { label: "Entry Leverage",         value: "Debt/EBITDA ~10×",                  accent: true  },
      { label: "Asset Transfer Dispute", value: "CGP non-collateral subsidiary",     accent: true  },
      { label: "Bankruptcy Filing",      value: "CEOC Chapter 11 — January 2015",   accent: true  },
    ],
  },

  advisors: {
    body: "Apollo and TPG assembled a top-tier LBO advisory team. The acquisition financing was jointly arranged by major banks including Citigroup, BofA, JPMorgan, and Deutsche Bank.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Apollo / TPG Consortium",
        initials: "APO",
        bg: "bg-blue-900",
        advisors: [
          { firm: "Citigroup",        role: "LBO Financing Co-Arranger",  roleType: "financial", note: "TLB bookrunner" },
          { firm: "Bank of America",  role: "LBO Financing Co-Arranger",  roleType: "financial", note: "Co-bookrunner" },
          { firm: "JPMorgan Chase",   role: "LBO Financing Co-Arranger",  roleType: "financial", note: "Co-arranger" },
          { firm: "Deutsche Bank",    role: "LBO Financing Co-Arranger",  roleType: "financial", note: "Co-arranger" },
          { firm: "Latham & Watkins", role: "Legal Advisor",              roleType: "legal",     note: "LBO agreement and covenant structure" },
        ],
      },
      {
        side: "target",
        sideLabel: "Harrah's Board",
        initials: "CZR",
        bg: "bg-yellow-600",
        advisors: [
          { firm: "Goldman Sachs",    role: "Financial Advisor", roleType: "financial", note: "Fairness opinion" },
          { firm: "Wachtell, Lipton", role: "Legal Advisor",     roleType: "legal",     note: "M&A specialist" },
        ],
      },
    ],
  },

  valuation: {
    body: "The $90 per share price represented a premium of approximately 30% over the unaffected share price. The EV/EBITDA of 13.6× materially exceeded the casino sector premium of the time (8–10×), enabled by high leverage. The core problem was the volatility of casino EBITDA — in a sector sensitive to the economic cycle, 10× leverage was lethal.",
    rows: [
      { item: "Equity Value",              val: "$8.7B",   note: "$90/share × ~96 million shares outstanding",   accent: false },
      { item: "Existing Net Debt Assumed", val: "+$22.7B", note: "Existing Harrah's debt assumed",               accent: false },
      { item: "Total Enterprise Value",    val: "$31.4B",  note: "",                                             accent: true  },
      { item: "Entry EBITDA",              val: "$2.31B",  note: "FY2006 basis",                                 accent: false },
      { item: "EV/EBITDA",                 val: "13.6×",   note: "Casino sector premium + LBO leverage",         accent: true  },
      { item: "Total New + Assumed Debt",  val: "$25.3B",  note: "TLB + Senior Notes + other",                  accent: true  },
      { item: "Entry Debt/EBITDA",         val: "~10×",    note: "Highest LBO leverage in casino history",       accent: true  },
    ],
    disclaimer: "Figures are estimated based on public information and bankruptcy court filings.",
  },

  rationale: {
    buyer: {
      title: "Apollo / TPG Rationale",
      initials: "APO",
      bg: "bg-blue-900",
      points: [
        "Harrah's Total Rewards customer database (40M+ members) as a competitive moat — data-driven marketing optimization",
        "Real estate value of 50+ casino properties separable → potential for sale-leaseback and financial restructuring",
        "Expected appreciation of Las Vegas real estate — structural growth in tourism demand",
        "EBITDA improvement potential through cost-cutting (IT integration, headcount rationalization)",
        "IPO or strategic sale within 5–7 years (actual: relisted 2012, bankruptcy 2015)",
      ],
    },
    seller: {
      title: "Harrah's Shareholders' Rationale",
      initials: "CZR",
      bg: "bg-yellow-600",
      points: [
        "Cash out at a +30% premium over the unaffected share price",
        "Liquidity at the peak of the casino industry cycle",
        "Transfer of existing heavy debt ($22.7B) to PE — favorable from individual shareholders' perspective",
        "No need to raise additional M&A capital to respond to MGM and Sands competition",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "The Caesars LBO became one of the most complex Chapter 11 cases in leveraged loan history. Apollo's asset transfer strategy, creditor litigation, the $1.45B settlement, and over two and a half years of bankruptcy proceedings burned into market memory just how critical covenant provisions in leveraged loan agreements truly are.",
    overallVerdict: "Total PE equity loss + $1.45B creditor settlement — the defining lesson of Cov-Lite",
    positives: [
      "Caesars Entertainment brand value preserved — Las Vegas operations continued after restructuring",
      "Re-listed after reorganization plan effective in 2017 — partial value recovery as creditors converted to equity",
      "Total Rewards loyalty data platform (now Caesars Rewards) maintained",
    ],
    risks: [
      "Apollo and TPG equity of $6.1B entirely wiped out",
      "$1.45B creditor settlement — interpreted by market as acknowledging 'asset transfer = fraudulent conveyance'",
      "First-lien creditors recovered approximately 65 cents on the dollar — the practical meaning of 'first-lien' weakened",
      "Cov-Lite risks reconfirmed — debates over strengthening investor protections in leveraged loan markets intensified",
      "One of the most complex Chapter 11 proceedings in U.S. history — over two years of court proceedings",
    ],
    editorNote: "The core lesson of Caesars is what happens when investor-protection covenants are absent in Cov-Lite loans. Apollo exploited the freedom to transfer assets without covenants, and creditors had only litigation as a recourse. After this case, leveraged loan investors began scrutinizing 'Restricted Subsidiary definitions,' 'asset transfer limitation clauses,' and 'Non-Guarantor Basket' provisions far more carefully.",
  },

  tombstone: {
    acquirerInitials: "APO",
    acquirerBg: "bg-blue-900",
    targetInitials: "CZR",
    targetBg: "bg-yellow-600",
    acquirerName: "Apollo Global Management / TPG",
    targetName: "Harrah's Entertainment",
    dealTitle: "Harrah's → Caesars LBO",
    dealSize: "$31.4B",
    dealSizeUSD: "$31.4bn",
    evEbitda: "13.6×",
    closeDate: "January 2008",
  },

  sources: [
    { id: 1, text: "Harrah's Entertainment (2006). Merger Agreement — Apollo / TPG. December 19, 2006." },
    { id: 2, text: "CEOC (2015). Chapter 11 Voluntary Petition. January 15, 2015." },
    { id: 3, text: "Caesars Entertainment Operating Company (2017). Plan of Reorganization Effective Date. October 6, 2017." },
    { id: 4, text: "Wall Street Journal (2015). Caesars Files for Bankruptcy. January 2015." },
    { id: 5, text: "Bloomberg (2015). Caesars Bankruptcy: Apollo's Asset Transfer Under Legal Fire. 2015." },
    { id: 6, text: "S&P LCD (2015). Caesars Entertainment — Leveraged Loan Review and Covenant Analysis." },
    { id: 7, text: "Moody's (2014). Caesars Entertainment Operating Company Credit Opinion." },
    { id: 8, text: "FT (2015). How Apollo Stripped Assets from Caesars: A Legal History. March 2015." },
    { id: 9, text: "Law360 (2016). Caesars Creditors Win $1.45B Asset-Transfer Settlement." },
  ],

  seo: {
    title: "Apollo × Caesars LBO — Cov-Lite Asset Transfer Litigation and Chapter 11 Dissected",
    description: "$31.4B casino LBO. Cov-Lite loopholes → asset transfer → creditor litigation → $1.45B settlement → Chapter 11. The textbook case for leveraged loan covenant analysis.",
    keywords: [
      "Caesars", "Apollo LBO", "Cov-Lite", "covenants", "asset transfer",
      "Chapter 11 bankruptcy", "leveraged loan", "LBO failure", "fraudulent conveyance", "LevFin",
      "Caesars bankruptcy", "Apollo leveraged buyout", "covenant analysis",
    ],
  },

  concepts: [
    {
      term: "Cov-Lite (Covenant-Lite)",
      href: "/market-101/levfin-covenants",
      description: "A loan structure that contains only incurrence covenants and no maintenance covenants. In the Caesars case, Apollo used Cov-Lite provisions to freely transfer assets into subsidiaries.",
    },
    {
      term: "Restricted Subsidiary vs Unrestricted Subsidiary",
      href: "/market-101/levfin-covenants",
      description: "Subsidiary classifications in a credit agreement that determine the scope of collateral and covenant applicability. Apollo transferred profitable assets into CGP — an 'Unrestricted Subsidiary' — removing them from creditor collateral.",
    },
    {
      term: "Fraudulent Conveyance",
      href: "/market-101/levfin-distressed",
      description: "A legal doctrine under which courts may void an asset transfer made to harm creditors. Caesars creditors sued Apollo on this theory.",
    },
    {
      term: "Non-Guarantor Basket",
      href: "/market-101/levfin-covenants",
      description: "The permitted limit in a credit agreement for investing in subsidiaries without providing collateral or guarantees. Apollo maximized this basket to transfer assets into Caesars Growth Partners (CGP).",
    },
  ],

  faq: [
    {
      q: "What is Cov-Lite lending and why was it a problem in the Caesars case?",
      a: "Cov-Lite (Covenant-Lite) is a loan that lacks 'maintenance covenants' — conditions requiring the borrower to maintain metrics like Leverage Ratio and Interest Coverage Ratio each quarter. In the Caesars case, Apollo used Cov-Lite provisions to freely transfer assets into subsidiaries. If maintenance covenants had been in place, creditors could have demanded early repayment or blocked asset transfers the moment those covenants were breached.",
    },
    {
      q: "How did Apollo's asset transfer at Caesars unfold?",
      a: "Apollo transferred high-margin casino assets including Planet Hollywood and Horseshoe Hammond into a separate subsidiary, Caesars Growth Partners (CGP), which was originally outside the collateral scope of CEOC creditors. The process leveraged the credit agreement's 'Non-Guarantor Basket' and 'Restricted → Unrestricted Subsidiary reclassification' provisions.",
    },
    {
      q: "How much did the Caesars creditors win in litigation?",
      a: "In 2016, Apollo and Caesars creditors reached a $1.45 billion settlement. While Apollo did not formally admit fraudulent conveyance, the large settlement was a de facto acknowledgment of defeat. First-lien creditors recovered approximately 65 cents on the dollar of principal.",
    },
    {
      q: "What impact did the Caesars case have on the leveraged loan market?",
      a: "After this case, leveraged loan investors scrutinize 'Restricted Subsidiary definitions,' 'Non-Guarantor Basket limits,' and 'asset transfer restriction clauses' in credit agreements far more rigorously. There is also heightened investor vigilance around 'covenant drift' — the trend toward increasingly borrower-friendly provisions — in the leveraged loan markets of 2015–2020.",
    },
  ],

  // ── LevFin Perspective Overlay ───────────────────────────────
  levfinOverview: {
    angle: "The Dark Side of Cov-Lite — How a Loan Without Covenants Enabled Asset Stripping",
    body: "The Caesars LBO is the most dramatic demonstration of 'why Cov-Lite is dangerous.' Because there were no maintenance covenants, creditors had no legal standing to intervene while Apollo transferred assets into subsidiaries. Dissecting the Restricted Subsidiary definitions, Non-Guarantor Subsidiary baskets, and asset transfer provisions in this deal reveals exactly what holes exist in modern leveraged loan agreements.",
    tranches: [
      {
        name: "1st Lien Term Loan B (TLB)",
        amountDisplay: "$6.7B",
        rate: "LIBOR + 300bp",
        maturity: "7 years",
        seniority: "senior-secured",
        pct: 27,
        color: "bg-amber-500",
      },
      {
        name: "2nd Lien Term Loan B",
        amountDisplay: "$5.3B",
        rate: "LIBOR + 375bp",
        maturity: "7.5 years",
        seniority: "senior-secured",
        pct: 21,
        color: "bg-amber-400",
      },
      {
        name: "Senior Secured Notes",
        amountDisplay: "$4.7B",
        rate: "Fixed 10.75–11.25%",
        maturity: "8 years",
        seniority: "senior-secured",
        pct: 19,
        color: "bg-orange-500",
      },
      {
        name: "Senior Notes (Unsecured)",
        amountDisplay: "$5.5B",
        rate: "Fixed 10.0–10.375%",
        maturity: "8–10 years",
        seniority: "senior-unsecured",
        pct: 22,
        color: "bg-red-500",
      },
      {
        name: "Junior / Subordinated",
        amountDisplay: "$3.1B",
        rate: "Fixed 12.375–15.0%",
        maturity: "8–10 years",
        seniority: "subordinated",
        pct: 7,
        color: "bg-red-700",
      },
      {
        name: "Equity (Apollo + TPG)",
        amountDisplay: "$6.1B",
        rate: "N/A",
        maturity: "N/A",
        seniority: "equity",
        pct: 4,
        color: "bg-emerald-500",
      },
    ],
    metrics: [
      { label: "Entry Leverage",          value: "~10×",    sub: "Debt/EBITDA — extreme for casino LBO",        isAlert: true  },
      { label: "Cov-Lite Ratio",          value: "100%",    sub: "No maintenance covenants whatsoever",         isAlert: true  },
      { label: "Asset Transfer Settlement", value: "$1.45B", sub: "Creditor litigation settlement (2016)",     isAlert: false },
      { label: "1st Lien TLB Recovery",   value: "~$0.65",  sub: "65 cents on the dollar of principal",        isAlert: true  },
    ],
    lessons: [
      {
        icon: "📜",
        title: "Cov-Lite = Dismantling Creditors' Early Warning System",
        body: "Without maintenance covenants (e.g., 'mandatory repayment if Debt/EBITDA exceeds 7×'), creditors have no legal standing to intervene even as a company's finances deteriorate. At Caesars, Apollo faced no covenant breach even as EBITDA fell from $2.3B to $1.6B and ICR dropped below 1.0×. Litigation was the only avenue available to creditors.",
      },
      {
        icon: "🏚️",
        title: "Restricted Subsidiary Definitions Determine Collateral Value",
        body: "In a leveraged loan, 'collateral scope = Restricted Subsidiary list.' Apollo transferred profitable assets to CGP, an Unrestricted Subsidiary, removing them from creditor collateral. The 'criteria for reclassifying Restricted → Unrestricted' and 'Non-Guarantor Basket limits' in loan agreements are provisions investors must always verify.",
      },
      {
        icon: "⚖️",
        title: "Litigation Is a Last Resort — Preventive Covenants Are the Answer",
        body: "Creditors recovered $1.45B through litigation, but only after having already lost 50–60% of their principal. If preventive covenants (asset transfer restrictions, Non-Guarantor Subsidiary EBITDA caps, Restricted Payment limitations) had existed from the start, the litigation itself would have been unnecessary. The core of LevFin analysis lies in pre-emptive contract review, not post-hoc litigation.",
      },
    ],
    relatedChapters: [
      {
        slug: "levfin-covenants",
        chapterNum: "Ch.3",
        title: "Covenants & Investor Protection",
        whyRelevant: "The real dangers of Cov-Lite, Restricted Subsidiary definitions, asset transfer restriction clause analysis",
      },
      {
        slug: "levfin-distressed",
        chapterNum: "Ch.6",
        title: "Distressed Debt & Restructuring",
        whyRelevant: "Fraudulent conveyance litigation, CEOC Chapter 11 process, creditor equity conversion",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "Major Case Studies",
        whyRelevant: "The most complex casino LBO bankruptcy — real-world consequences of Cov-Lite agreements",
      },
    ],
  },
};

export default deal;
