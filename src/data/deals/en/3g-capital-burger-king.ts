/**
 * 3G Capital × Burger King (2010–2014)
 * The ZBB Playbook — Cost Cutting + Refranchising = PE Returns
 * $4.0B LBO → 2012 Re-IPO → Tim Hortons Merger → Restaurant Brands International (RBI)
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "3g-capital-burger-king",
  title: "3G Capital's Cost-Cutting Formula That Built a Global Franchise Empire from Burger King",
  subtitle: "$4.0B LBO → ZBB + Refranchising → Tim Hortons Merger → Restaurant Brands International",
  category: "ma",
  industry: "Food & Beverage / Fast Food Franchise",
  country: "United States",
  announcedAt: "2010-09-02",
  closedAt: "2010-10-19",
  announcedDisplay: "September 2010",
  closedDisplay: "October 2010",
  readingMinutes: 10,
  tags: [
    "3G Capital", "Burger King", "ZBB", "zero-based budgeting",
    "LBO", "franchise", "refranchising", "Tim Hortons", "RBI",
    "Restaurant Brands International", "PE", "private equity", "Jorge Paulo Lemann",
    "operational alpha", "cost reduction",
  ],
  excerpt:
    "In 2010, 3G Capital acquired Burger King for $4.0 billion. The Brazilian PE firm (led by Jorge Paulo Lemann) introduced Zero-Based Budgeting (ZBB), cutting G&A costs by 50%. After re-listing in 2012, the company merged with Tim Hortons in 2014 to form Restaurant Brands International (RBI), followed by the acquisition of Popeyes in 2017 — a textbook demonstration of 3G's LBO playbook: build a franchise empire through cost reduction and refranchising.",

  acquirer: { initials: "3G", bg: "bg-red-700", label: "3G Capital Partners" },
  target:   { initials: "BK", bg: "bg-yellow-500", label: "Burger King Worldwide, Inc." },

  background: [
    "Burger King was the world's second-largest hamburger fast food chain, operating more than 12,000 restaurants globally in 2010. However, relative to McDonald's, its marketing and innovation investment were underfunded and its headquarters organization had grown bloated, weighing on profitability. Since its IPO spin-off from Diageo in 2002, the company had passed through TPG, Bain, and Goldman PE ownership.",
    "3G Capital, the PE firm led by Jorge Paulo Lemann that built Brazilian beer companies AmBev and InBev (now AB InBev), is famous for its trademark: Zero-Based Budgeting (ZBB) — a method in which every cost item is reviewed from zero rather than from a prior-year baseline, eliminating all unjustified expenditures.",
    "Immediately after the $4.0B acquisition in 2010, 3G Capital reduced Burger King's headquarters headcount by 25% and cut G&A costs by 50%. Simultaneously, it pursued an asset-light strategy by converting company-owned restaurants to franchises (refranchising). The company re-listed on NYSE in 2012 (BKW) and merged with Tim Hortons in 2014 to form Restaurant Brands International (RBI, TSX/NYSE: QSR).",
  ],

  dealSummary: {
    dealValueDisplay: "$4.0B",
    acquirerName: "3G Capital Partners",
    targetName: "Burger King Worldwide, Inc.",
    announcedDisplay: "September 2, 2010",
    closedDisplay: "October 19, 2010",
    country: "United States (NYSE: BKC → private → NYSE: BKW → NYSE/TSX: QSR)",
  },

  executiveSummary: [
    "3G Capital acquired Burger King for $4.0B ($24/share) — EV/EBITDA ~9.5×.",
    "ZBB introduced: 25% headquarters headcount reduction, 50% G&A cost cut → dramatic EBITDA margin improvement.",
    "Refranchising: company-owned restaurants converted to franchises → asset-light + FCF improvement.",
    "NYSE re-IPO in 2012 (BKW). Tim Hortons ($11.4B) merger in 2014 → Restaurant Brands International established.",
    "Popeyes acquisition in 2017 ($1.8B) — 3G's global franchise empire completed.",
  ],

  industryOverview: {
    body: "The global QSR (Quick Service Restaurant) market is an oligopoly dominated by large chains including McDonald's, Burger King, Wendy's, KFC, and Subway. The core revenue model is franchise royalties (4–6% of sales) and real estate rental income — asset-light and stable relative to company-owned operations. 3G Capital executed the thesis that expanding the franchise mix in QSR would structurally lift long-term EBITDA margins.",
    metrics: [
      { label: "Global QSR Market Size",     value: "~$270B", sub: "2010 estimate" },
      { label: "Burger King Restaurant Count", value: "12,000+", sub: "At acquisition, 65 countries" },
      { label: "G&A Cost Reduction",         value: "-50%",   sub: "Within 2 years of ZBB introduction" },
      { label: "RBI Market Cap (2020)",       value: "~$19B",  sub: "Burger King + Tim Hortons + Popeyes" },
    ],
    players: [
      { name: "McDonald's",                  role: "Global QSR #1, 90%+ franchised" },
      { name: "Burger King (3G Capital)",    role: "Global QSR #2 hamburger chain, LBO target" },
      { name: "Tim Hortons (later RBI)",     role: "Canada's largest coffee & bakery chain, merged 2014" },
      { name: "Wendy's",                     role: "U.S. QSR #3 hamburger chain" },
    ],
  },

  companyOverview: {
    targetName: "Burger King Worldwide, Inc.",
    body: "Founded in Florida in 1954, Burger King is the world's second-largest hamburger QSR chain. At acquisition, approximately 90% of its restaurants were franchised, but headquarters G&A costs were disproportionately high relative to revenue. New product development and marketing investment lagged McDonald's, and operational efficiency was below par. Pre-3G acquisition, EBITDA margins were ~27%; within a few years of ZBB introduction, the company achieved 40%+.",
    metrics: [
      { label: "LBO Deal Value",              value: "$4.0B",    sub: "EV/EBITDA ~9.5×" },
      { label: "Franchise Mix (at acquisition)", value: "~90%", sub: "Approaching 100% after ZBB" },
      { label: "EBITDA Margin Improvement",   value: "27%→40%+", sub: "ZBB + refranchising effect" },
      { label: "RBI Market Cap (2020)",        value: "~$19B",   sub: "3 brands combined" },
    ],
    financials: [
      {
        year: "FY2009",
        revenue: 2537,
        cogs: 1620,
        grossProfit: 917,
        sga: 510,
        operatingIncome: 407,
        ebitda: 520,
      },
      {
        year: "FY2010",
        revenue: 2502,
        cogs: 1590,
        grossProfit: 912,
        sga: 490,
        operatingIncome: 422,
        ebitda: 540,
      },
      {
        year: "FY2012",
        revenue: 2256,
        cogs: 1370,
        grossProfit: 886,
        sga: 310,
        operatingIncome: 576,
        ebitda: 680,
      },
    ],
    financialsCurrency: "USD",
    financialsUnit: "mn",
    financialsNote: "Unit: $M (millions) | FY2012 is pre-re-IPO. Revenue declined as company-owned stores converted to franchises (company-owned revenue removed), but EBITDA rose due to G&A cuts → dramatic EBITDA margin improvement. This is the core financial effect of refranchising.",
  },

  dealStructure: {
    body: "Equity ~$1.4B (~35%) + TLB and HY bonds ~$2.6B (~65%) — a classic QSR LBO structure. Given the franchise business model, tangible assets are limited, so leverage is lower than retail or hotel LBOs. ZBB-driven EBITDA margin improvement was the key lever for debt repayment.",
    preOwnership: {
      nodes: [
        { id: "tpg",  label: "TPG · Bain · Goldman PE", sub: "Prior PE owners (2002–2010)", type: "fund"   },
        { id: "bk",   label: "Burger King",             sub: "12,000+ restaurants",         type: "target" },
      ],
      edges: [
        { from: "tpg", to: "bk", label: "PE stake → IPO relisted" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "3g",   label: "3G Capital",    sub: "Equity $1.4B (~35%)",          type: "fund"   },
        { id: "tlb2", label: "TLB Lenders",   sub: "~$1.6B (floating rate, 1L)",   type: "entity" },
        { id: "hy2",  label: "HY Bondholders", sub: "~$1.0B (fixed rate, unsecured)", type: "entity" },
        { id: "bk2",  label: "Burger King",   sub: "Private, ZBB + refranchising", type: "target" },
      ],
      edges: [
        { from: "3g",   to: "bk2", label: "Equity 35%" },
        { from: "tlb2", to: "bk2", label: "$1.6B (1L secured)" },
        { from: "hy2",  to: "bk2", label: "$1.0B (unsecured)" },
      ],
    },
    keyTerms: [
      { label: "Deal Value",              value: "$4.0B (EV/EBITDA ~9.5×)",               accent: true  },
      { label: "ZBB Target",             value: "50% G&A cut, 25% headcount reduction",   accent: true  },
      { label: "Refranchising Target",   value: "Company-owned → franchise, approaching 100%", accent: true },
      { label: "Tim Hortons Merger",     value: "$11.4B (2014) → RBI established",        accent: true  },
      { label: "Popeyes Acquisition (2017)", value: "$1.8B — third brand added",          accent: false },
    ],
  },

  advisors: {
    body: "3G Capital retained JP Morgan as arranger and Paul Weiss as legal counsel. Given the relatively modest deal size ($4.0B), the advisory team was lean.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "3G Capital (Acquirer)",
        initials: "3G",
        bg: "bg-red-700",
        advisors: [
          { firm: "JP Morgan",   role: "Lead Arranger & Financial Advisor", roleType: "financial", note: "TLB & HY syndication lead" },
          { firm: "Paul Weiss",  role: "Legal Advisor",                     roleType: "legal",     note: "LBO structure design" },
        ],
      },
      {
        side: "target",
        sideLabel: "Burger King (Sell-Side PE: TPG · Bain · Goldman)",
        initials: "TPG",
        bg: "bg-gray-600",
        advisors: [
          { firm: "Morgan Stanley",  role: "Financial Advisor", roleType: "financial", note: "Sale process" },
          { firm: "Cleary Gottlieb", role: "Legal Advisor",     roleType: "legal",     note: "Sell-side counsel" },
        ],
      },
    ],
  },

  valuation: {
    body: "3G Capital acquired Burger King at EV/EBITDA ~9.5× on a FY2010 basis. The judgement was that ZBB could lift EBITDA margins to 40%+ within two years. They delivered.",
    rows: [
      { item: "Entry EV",               val: "$4.0B",   note: "EV/EBITDA ~9.5×",                          accent: true  },
      { item: "EBITDA Margin Post-ZBB", val: "40%+",    note: "27% at acquisition → 40%+ post-ZBB",       accent: true  },
      { item: "Re-IPO EV (2012)",       val: "~$5.5B",  note: "NYSE: BKW basis",                          accent: false },
      { item: "RBI Market Cap (2020)",  val: "~$19B",   note: "BK + Tim Hortons + Popeyes combined",      accent: true  },
    ],
    disclaimer: "3G Capital's internal return figures are not publicly disclosed. Market estimates: MOIC ~3-4×, IRR ~25%+.",
  },

  rationale: {
    buyer: {
      title: "3G Capital's Investment Rationale",
      initials: "3G",
      bg: "bg-red-700",
      points: [
        "ZBB execution capability: proven at AB InBev → Burger King G&A reducible by 50%",
        "Refranchising: converting company-owned restaurants to franchises reduces capital intensity and improves FCF",
        "Global expansion: franchise model enables international brand rollout without capital deployment → royalty revenue growth",
        "M&A platform: build Burger King into a global QSR chain acquisition and integration platform",
        "Undervaluation: lower EBITDA margins vs. McDonald's → clear improvement potential",
      ],
    },
    seller: {
      title: "TPG · Bain · Goldman (Prior PE Owners) Exit Rationale",
      initials: "TPG",
      bg: "bg-gray-600",
      points: [
        "2002 acquisition, 8 years later — fund harvest period arrived",
        "Post re-IPO (2006) performance continued to lag McDonald's — limited additional improvement potential",
        "3G's $24/share tender offered a reasonable premium",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "May 2026",
    body: "3G Capital's Burger King deal demonstrated that 'operational alpha through cost reduction and refranchising alone can generate exceptional LBO returns.' ZBB had short-term side effects — lower employee morale — but succeeded in driving EBITDA margins above 40%. The Tim Hortons merger and Popeyes acquisition transformed RBI into a global multi-brand QSR group — the culmination of 3G's M&A platform strategy.",
    overallVerdict: "Successful operational LBO — perfect execution of ZBB + refranchising + M&A platform",
    positives: [
      "Post-ZBB G&A cut of 50% — EBITDA margin from 27% to 40%+",
      "Refranchising: company-owned stores converted to near-zero → asset-light transformation complete",
      "Tim Hortons + Popeyes acquisitions completed the 3-brand global QSR empire",
      "2020 RBI market cap ~$19B — overwhelming value creation vs. 3G's initial equity investment of $1.4B",
    ],
    risks: [
      "ZBB over-application concerns: excessive cuts to marketing and R&D → slower innovation relative to McDonald's, growth deceleration",
      "Pandemic (2020): simultaneous hit across all QSR brands → RBI market cap decline",
      "Tim Hortons Canada franchisee conflict: reduced marketing support under ZBB → franchisee lawsuit",
    ],
    editorNote: "The 3G Capital × Burger King core lesson: 'Operational alpha does not have to come from EBITDA growth alone — cost reduction creates the same lever effect.' However, over-applying ZBB damages long-term brand competitiveness. Unlike Dollar General — which achieved simultaneous cost reduction and growth — Burger King followed a linear path: cost cut → EBITDA improvement → returns.",
  },

  tombstone: {
    acquirerInitials: "3G",
    acquirerBg: "bg-red-700",
    targetInitials: "BK",
    targetBg: "bg-yellow-500",
    acquirerName: "3G Capital Partners",
    targetName: "Burger King Worldwide",
    dealTitle: "3G Capital × Burger King LBO",
    dealSize: "$4.0 Billion",
    dealSizeUSD: "$4.0bn",
    evEbitda: "9.5×",
    closeDate: "October 2010",
  },

  sources: [
    { id: 1, text: "Burger King Holdings (2010). Merger Agreement — 3G Capital Acquisition. September 2010." },
    { id: 2, text: "Burger King Worldwide (2012). NYSE: BKW IPO Prospectus. June 2012." },
    { id: 3, text: "Restaurant Brands International (2014). Tim Hortons Merger Completion Press Release. December 2014." },
    { id: 4, text: "Wall Street Journal (2014). 3G Capital's Recipe: Slash Costs, Sell Burgers Globally. August 2014." },
    { id: 5, text: "Harvard Business School (2013). 3G Capital and Burger King. HBS Case 9-313-112." },
    { id: 6, text: "Bloomberg (2017). Burger King Owner Buys Popeyes for $1.8 Billion. February 2017." },
    { id: 7, text: "Financial Times (2019). The 3G Capital Way: Zero-Based Budgeting and Its Limits. 2019." },
    { id: 8, text: "Moody's (2010). Burger King Holdings — Rating Action on LBO. October 2010." },
  ],

  seo: {
    title: "3G Capital × Burger King LBO — How ZBB and Refranchising Built a Franchise Empire",
    description: "Full analysis of 3G Capital's $4.0B Burger King LBO in 2010. Zero-Based Budgeting introduction, 50% G&A cuts, refranchising strategy, Tim Hortons merger → Restaurant Brands International formation.",
    keywords: [
      "3G Capital", "Burger King", "ZBB", "zero-based budgeting", "LBO",
      "franchise", "refranchising", "Tim Hortons", "RBI", "Popeyes",
      "PE", "private equity", "operational alpha", "cost reduction",
    ],
  },

  concepts: [
    {
      term: "Zero-Based Budgeting (ZBB)",
      href: "/deal-101/lbo-overview",
      description: "A budgeting method in which every cost item is reviewed from zero rather than the prior year's baseline — requiring each item to justify its existence. 3G Capital applied ZBB at AB InBev, Kraft Heinz, and Burger King, cutting G&A costs by 50%+. It delivers powerful near-term EBITDA improvement but risks suppressing investment and innovation if over-applied.",
    },
    {
      term: "Refranchising",
      href: "/deal-101/lbo-overview",
      description: "The strategy in which QSR or retail companies convert company-owned locations to franchises. Removing the high capital and operating costs of company-owned stores, and converting to stable royalty and rental income, dramatically improves EBITDA margins and FCF. McDonald's (95%+) and Burger King (99%+) are the defining examples.",
    },
    {
      term: "M&A Platform Strategy",
      href: "/deal-101/platform-strategy",
      description: "A PE strategy in which an acquired company serves as the base platform for additional bolt-on acquisitions to build scale. 3G Capital built RBI, a global multi-brand QSR group, through Burger King → Tim Hortons merger → Popeyes acquisition. The scale effect lowers acquisition costs as the platform grows.",
    },
    {
      term: "Franchise EBITDA Margin Paradox",
      href: "/deal-101/lbo-returns",
      description: "After refranchising, total revenue declines (company-owned revenue eliminated) but EBITDA per dollar of revenue rises sharply — creating an apparent but real margin effect. McDonald's 50%+ and Burger King's 40%+ EBITDA margins are partly a product of this 'margin arithmetic.' In LBO return analysis, the financial effect of company-owned to franchise conversion must be isolated.",
    },
    {
      term: "Tax Inversion",
      href: "/deal-101/ma-process",
      description: "A transaction in which a U.S. company merges with a foreign company in a lower-tax jurisdiction and relocates its headquarters there, avoiding U.S. corporate tax rates. When 3G Capital merged with Tim Hortons (Canada) to form RBI and established the holding company in Oakville, Ontario, the structure drew criticism as a tax inversion — contributing to the Obama administration's subsequent tightening of inversion regulations.",
    },
  ],

  faq: [
    {
      q: "How did ZBB work at Burger King?",
      a: "Immediately after the 3G Capital acquisition, every cost item was challenged from zero with 'Is this expenditure truly necessary?' Office supplies were restricted to VP-level and above; flights were switched from business to economy class; all travel required pre-approval; and the cost controls were extraordinarily strict across the board. 25% of G&A headcount was eliminated and costs were cut by more than 50%. EBITDA margins jumped from 27% at acquisition to 40%+ within two years.",
    },
    {
      q: "What was the strategic rationale for 3G Capital pursuing the Tim Hortons merger?",
      a: "Two strategic objectives drove the deal. First, brand diversification: combining hamburgers (lunch/dinner) with coffee and baked goods (breakfast/snacks) created a portfolio covering every daypart. Second, geographic complementarity: Burger King dominated the U.S. and Latin America while Tim Hortons held an absolute #1 position in Canada. Together, the combined entity achieved a balanced QSR footprint across all of North America. Tax inversion benefits (lower Canadian corporate tax) were also discussed as a secondary factor.",
    },
    {
      q: "What are the limits of ZBB?",
      a: "ZBB is powerful for near-term EBITDA improvement but can threaten long-term brand competitiveness. At Burger King, cuts to marketing and new product development spending slowed innovation relative to McDonald's. At Tim Hortons in Canada, reduced marketing support and menu price increases led to franchisee litigation against 3G and RBI. The ZBB dilemma: maximizing cost cuts improves short-term earnings, but cutting investment in the brand slows long-term growth.",
    },
    {
      q: "What is the difference in operational alpha between 3G Capital × Burger King and KKR × Dollar General?",
      a: "Both were successful operational LBOs that improved EBITDA — but the approaches differed. Dollar General pursued cost reduction and revenue growth (new stores, food category expansion) simultaneously. Burger King focused on cost reduction (ZBB) and relied on global franchise expansion for revenue growth. The former balanced organic growth with cost improvement; the latter maximized margins first, then used M&A platform strategy for growth.",
    },
  ],

  // ── LevFin Overview ─────────────────────────────────────────────────
  levfinOverview: {
    angle: "Operational Alpha LBO — ZBB Grows EBITDA, EBITDA Services Leverage",
    body: "The Burger King LBO is the textbook for operational alpha-driven LBOs — not asset collateral (Hilton) or counter-cyclical EBITDA (Dollar General), but pure 'cost reduction execution' as the mechanism for debt repayment. Entry Debt/EBITDA ~4.8× was relatively modest, but ZBB improved EBITDA margins by 40%+, reducing effective leverage below 3× within two years.",
    tranches: [
      {
        name: "Term Loan B (TLB)",
        amountDisplay: "~$1.6B",
        rate: "LIBOR+400bps (floating)",
        maturity: "7 years",
        seniority: "senior-secured",
        pct: 40,
        color: "bg-red-500",
      },
      {
        name: "Revolving Credit Facility",
        amountDisplay: "$0.3B",
        rate: "LIBOR+350bps",
        maturity: "5 years",
        seniority: "senior-secured",
        pct: 8,
        color: "bg-red-400",
      },
      {
        name: "HY Senior Notes",
        amountDisplay: "~$1.0B",
        rate: "9.875% (fixed)",
        maturity: "8 years",
        seniority: "senior-unsecured",
        pct: 25,
        color: "bg-orange-500",
      },
      {
        name: "Equity (3G Capital)",
        amountDisplay: "$1.4B",
        rate: "—",
        maturity: "N/A",
        seniority: "equity",
        pct: 35,
        color: "bg-yellow-400",
      },
    ],
    metrics: [
      { label: "Entry Debt/EBITDA",      value: "~4.8×",   sub: "QSR franchise — low leverage",         isAlert: false },
      { label: "EBITDA Margin Improvement", value: "+13pp", sub: "27%→40%+ (ZBB + refranchising)",      isAlert: false },
      { label: "MOIC (Estimated)",        value: "~3-4×",   sub: "Re-IPO + Tim Hortons merger value",    isAlert: false },
      { label: "G&A Reduction",           value: "-50%",    sub: "Achieved within 2 years of ZBB",      isAlert: false },
    ],
    lessons: [
      {
        icon: "✂️",
        title: "ZBB — Costs Create EBITDA",
        body: "Without growing revenue (as Dollar General did), cutting costs sufficiently still grows EBITDA. 3G improved EBITDA margins by 13 percentage points within two years via ZBB. In a leveraged structure, this improvement rapidly reduces Debt/EBITDA, lowers refinancing costs, and elevates exit multiples — a chain reaction of compounding benefit.",
      },
      {
        icon: "🏪",
        title: "Refranchising = Perfect Match for LBO",
        body: "Company-owned stores carry high capital and operating costs with low EBITDA margins, while franchise royalties approach 100% margins. Post-LBO company-owned-to-franchise conversion delivers a triple effect: ① capital recovery, ② dramatic EBITDA margin expansion, and ③ FCF improvement. McDonald's, Burger King, and Yum Brands have all followed this path.",
      },
      {
        icon: "🌐",
        title: "M&A Platform — Once Built, Additional Deals Become Easier",
        body: "3G Capital turned Burger King into a ZBB and refranchising platform, then applied the same methodology to Tim Hortons and Popeyes. Acquiring a company where 'the methodology is transferable' allows the same playbook to be replicated on subsequent acquisitions — duplicating returns. This is the essence of the 3G M&A platform model.",
      },
    ],
    relatedChapters: [
      {
        slug: "lbo-returns",
        chapterNum: "Ch.2",
        title: "LBO Returns Analysis",
        whyRelevant: "ZBB + refranchising = EBITDA improvement → leverage reduction → Multiple Expansion — decomposing operational alpha into returns",
      },
      {
        slug: "lbo-overview",
        chapterNum: "Ch.0",
        title: "The Essence of LBO",
        whyRelevant: "QSR franchise — perfectly meeting ideal LBO target criteria (stable cash flows, low capex, clear improvement potential)",
      },
      {
        slug: "levfin-cases",
        chapterNum: "Ch.7",
        title: "LevFin Case Studies",
        whyRelevant: "Dollar General (revenue growth alpha) vs. Burger King (cost reduction alpha) — the two forms of operational alpha compared",
      },
    ],
  },
};

export default deal;
