import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  // ── Meta ─────────────────────────────────────────────────────
  slug: "starboard-darden-olive-garden",
  title: "Starboard Value vs. Darden Restaurants — The Historic Activism That Replaced an Entire Board With a 294-Page Deck",
  subtitle: "294-Page Analysis Noting Salt-Free Pasta Water · All 12 Directors Replaced · Largest Full Board Replacement in History",
  category: "activism",
  industry: "Restaurant / Casual Dining",
  country: "United States",
  announcedAt: "2014-09-11",
  closedAt: "2014-10-10",
  announcedDisplay: "September 2014",
  closedDisplay: "October 2014",
  readingMinutes: 10,
  tags: [
    "Starboard Value",
    "Darden Restaurants",
    "Olive Garden",
    "Jeff Smith",
    "294-page deck",
    "proxy fight",
    "activism",
    "full board replacement",
    "restaurant activism",
    "operational activism",
  ],
  excerpt:
    "Starboard Value's Jeff Smith acquired an 8.8% stake (~$560M) in Darden Restaurants and published a 294-page operational analysis deck noting that 'pasta water isn't even salted.' At the October 2014 annual meeting, all 12 directors were replaced — the first complete board replacement in U.S. history for a company of this size.",

  // ── Entity Icons ─────────────────────────────────────────────
  acquirer: { initials: "SV", bg: "bg-slate-700", label: "Starboard Value" },
  target:   { initials: "DRI", bg: "bg-green-700", label: "Darden Restaurants" },

  // ── Background ───────────────────────────────────────────────
  background: [
    "Darden Restaurants (DRI) was America's largest full-service restaurant chain, operating more than 1,500 restaurants under brands including Olive Garden, LongHorn Steakhouse, and The Capital Grille. With revenues of approximately $6.3B and a market cap of roughly $6.5B in 2014, the company was nonetheless suffering: Olive Garden's average check and traffic had declined consistently from 2012 to 2014, and the stock significantly lagged peers.",
    "Management sold the Red Lobster brand to private equity firm Golden Gate Capital for $2.1B in 2014. Shareholders pushed back, arguing the price was too low. Starboard Value strongly criticized the decision, contending that Red Lobster had been sold below intrinsic value and that the transaction blocked a potential real estate REIT conversion.",
    "Starboard Value LP, led by Jeff Smith, had been steadily accumulating Darden shares from early 2014, building an 8.8% stake (approximately $560M). The activism campaign had two focal points: exposing the operational inefficiencies at Olive Garden in granular detail, and unlocking hidden value through a real estate REIT separation.",
    "On September 11, 2014, Starboard released a 294-page operational analysis presentation. Going well beyond financial analysis, the document analyzed Olive Garden's pasta cooking instructions, breadstick service, interior décor, and margarita preparation speed. The line 'pasta water isn't even salted, throwing away free flavor' struck Wall Street and the media like a thunderbolt and became one of the most famous activist documents in history.",
  ],

  // ── Deal Summary ─────────────────────────────────────────────
  dealSummary: {
    dealValueDisplay: "~$560M Stake (8.8%)",
    acquirerName: "Starboard Value LP",
    targetName: "Darden Restaurants Inc.",
    announcedDisplay: "September 2014",
    closedDisplay: "October 2014",
    country: "United States",
  },

  // ── Executive Summary ────────────────────────────────────────
  executiveSummary: [
    "Starboard Value acquired an 8.8% stake (~$560M) in Darden Restaurants and published a 294-page operational analysis deck (September 11, 2014).",
    "Key findings: Olive Garden pasta water not salted, wasteful breadstick service, slow margarita preparation, outdated interiors.",
    "Proposals: real estate REIT separation, G&A cost reduction, kitchen efficiency, menu innovation, criticism of Red Lobster sale price.",
    "October 10, 2014 annual meeting: all 12 directors replaced — the first complete board replacement in U.S. history for a company of this size.",
    "Result: DRI stock ~$47 → ~$75 (two years later), Olive Garden revenue and profit improvement, estimated Starboard IRR of 30%+.",
  ],

  // ── Industry Overview ────────────────────────────────────────
  industryOverview: {
    body: "In 2014, the U.S. full-service restaurant (casual dining) industry faced structural headwinds. Fast-casual concepts (Chipotle, Panera) were growing rapidly, millennial dining habits were shifting, food costs were rising, and minimum wage pressure was building simultaneously. Darden's flagship Olive Garden brand was stuck in a 'family dining' positioning and was falling behind rapidly evolving consumer tastes in both menu and service innovation.",
    metrics: [
      { label: "Starboard Stake",              value: "8.8%",          sub: "~$560M, becoming largest shareholder" },
      { label: "294-Page Deck",                value: "September 11, 2014", sub: "One of the most famous activist documents in history" },
      { label: "Directors Replaced",           value: "All 12",        sub: "First of its kind in U.S. history at this scale" },
      { label: "Stock Appreciation",           value: "~$47 → ~$75",   sub: "~+60% in the two years following the campaign" },
    ],
    subBody:
      "Operational Activism goes beyond demanding financial restructuring to directly intervening in a company's specific business operations. The Starboard-Darden case is an unprecedented example where a hedge fund analyzed pasta recipes and breadstick service procedures to prove management inefficiency, then used that evidence to force a complete board replacement. This deal elevated the scope and depth of activist investing to an entirely new level.",
    players: [
      { name: "Starboard Value LP (Jeff Smith)", role: "Activist fund, acquired 8.8% stake and drove complete board replacement" },
      { name: "Darden Restaurants Management (12-director board)", role: "Defense side, announced own improvement plan but lost shareholder confidence" },
      { name: "Vanguard, BlackRock",             role: "Major institutional shareholders, ultimately supported Starboard" },
      { name: "Golden Gate Capital",             role: "Red Lobster acquirer for $2.1B — central to undervaluation controversy" },
      { name: "Gene Lee",                        role: "Olive Garden COO → new CEO, appointed by Starboard-nominated board" },
    ],
  },

  // ── Company Overview ─────────────────────────────────────────
  companyOverview: {
    targetName: "Darden Restaurants Inc.",
    body: "Darden Restaurants (NYSE: DRI), founded by Bill Darden in 1968, is America's largest full-service restaurant chain. As of 2014, the company operated more than 1,500 locations across 8 brands nationwide, including Olive Garden (843 locations), LongHorn Steakhouse (474 locations), and premium brands The Capital Grille and Eddie V's. Olive Garden was the core brand, accounting for approximately 46% of Darden's total revenue. After selling Red Lobster ($2.1B) to Golden Gate Capital in 2014, Darden's revenue scale was reduced, but Starboard argued the sale itself was undervalued. Darden was one of the largest restaurant employers in the country, with approximately 150,000 employees across the United States.",
    metrics: [
      { label: "Employees (FY2014)",     value: "~150,000",   sub: "Largest full-service restaurant employer in the U.S." },
      { label: "Total Locations (FY2014)", value: "~1,500",   sub: "8 brands combined (excluding Red Lobster)" },
      { label: "Olive Garden Locations", value: "843",         sub: "Largest Italian casual chain in the U.S." },
      { label: "Revenue (FY2014)",       value: "$6,285M",    sub: "Post-Red Lobster sale" },
      { label: "Market Cap (2014)",      value: "~$6.5B",     sub: "At time of Starboard campaign" },
    ],
    revenueBreakdown: [
      { name: "Olive Garden",        pct: 46, color: "bg-green-500",  amt: "~$2,890M" },
      { name: "LongHorn Steakhouse", pct: 27, color: "bg-orange-500", amt: "~$1,697M" },
      { name: "Premium Brands",      pct: 15, color: "bg-purple-500", amt: "~$943M" },
      { name: "Other Brands",        pct: 12, color: "bg-slate-400",  amt: "~$754M" },
    ],
    revenueNote: "Estimated revenue breakdown for FY2014 (post-Red Lobster divestiture)",
    financials: [
      {
        year: "FY2013",
        revenue: 8551,
        cogs: 2739,
        grossProfit: 5812,
        sga: 4980,
        operatingIncome: 832,
        ebitda: 1020,
      },
      {
        year: "FY2014",
        revenue: 6285,
        cogs: 2012,
        grossProfit: 4273,
        sga: 3680,
        operatingIncome: 593,
        ebitda: 740,
      },
      {
        year: "FY2015",
        revenue: 6764,
        cogs: 2164,
        grossProfit: 4600,
        sga: 3890,
        operatingIncome: 710,
        ebitda: 890,
      },
    ],
    financialsNote:
      "Unit: $M (millions) | US GAAP consolidated | Source: Darden Restaurants annual reports | FY2014 revenue decline reflects Red Lobster divestiture",
    financialsCurrency: "$",
    financialsUnit: "mn",
  },

  // ── Governance Overview ──────────────────────────────────────
  governanceOverview: {
    body: "Darden Restaurants' governance problem was a board rendered ineffective by years of operational decline. Olive Garden guest counts fell for three consecutive years from 2012 to 2014, and the Red Lobster sale at a discounted price completely shattered shareholder confidence. Starboard concluded the board had lost the ability to self-correct and deployed the unprecedented 'complete board replacement' strategy. All 12 of the alternative director nominees Starboard put forward were elected at the October 10, 2014 annual meeting — a result without precedent in U.S. history for a public company of this size.",
    shareholders: [
      {
        id: "starboard",
        label: "Starboard Value",
        sub: "Jeff Smith, activist fund",
        stake: "8.8%",
        stakePct: 8.8,
        type: "activist",
        alignment: "anti",
      },
      {
        id: "vanguard",
        label: "Vanguard Group",
        sub: "Largest passive institutional shareholder",
        stake: "7.2%",
        stakePct: 7.2,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "blackrock",
        label: "BlackRock",
        sub: "Second-largest institutional shareholder, ultimately supported Starboard",
        stake: "6.5%",
        stakePct: 6.5,
        type: "institutional",
        alignment: "neutral",
      },
      {
        id: "management",
        label: "Management and Employees",
        sub: "Insider-held shares",
        stake: "2.0%",
        stakePct: 2.0,
        type: "management",
        alignment: "pro",
      },
      {
        id: "public",
        label: "General Minority Shareholders",
        sub: "Retail and small investors",
        stake: "75.5%",
        stakePct: 75.5,
        type: "public",
        alignment: "neutral",
      },
    ],
    board: {
      total: 12,
      independent: 11,
      affiliated: 1,
      note: "Formally had high independent director ratio, but was criticized as the board that tolerated Olive Garden's operational decline and approved the undervalued Red Lobster sale. At the October 10, 2014 annual meeting, all 12 were replaced by Starboard-nominated candidates.",
    },
    issues: [
      {
        title: "Olive Garden Operational Inefficiency",
        description:
          "Dozens of operational problems including unsalted pasta water, wasteful breadstick service, slow margarita preparation, and outdated interiors. The core target of Starboard's 294-page deck.",
        severity: "critical",
      },
      {
        title: "Red Lobster Sold Below Value",
        description:
          "Red Lobster was sold to Golden Gate Capital for $2.1B in 2014. Starboard argued the sale blocked a potential real estate REIT conversion and disposed of the asset well below intrinsic value. The transaction also raised governance concerns as it proceeded without shareholder approval.",
        severity: "critical",
      },
      {
        title: "Unrealized Real Estate Value",
        description:
          "Darden directly owned restaurant real estate (land and buildings) across the U.S. but had not pursued a REIT separation to unlock that market value. Starboard argued that a REIT spin-off alone could create significant shareholder value.",
        severity: "high",
      },
      {
        title: "Excessive G&A Costs",
        description:
          "General and administrative costs high relative to competitors. Starboard analyzed that meaningful cost savings were available through corporate overhead reduction, supply chain efficiency, and menu simplification.",
        severity: "high",
      },
    ],
    demands: [
      {
        demand: "Replace all 12 directors with Starboard nominees",
        result: "won",
        note: "At the October 10, 2014 annual meeting, all 12 Starboard-nominated alternative directors were elected. All 12 existing directors stepped down. The first complete board replacement in U.S. history for a company of this size (~$6.5B market cap).",
      },
      {
        demand: "Olive Garden operational improvements (pasta preparation, service, menu innovation)",
        result: "partial",
        note: "New board appointed Gene Lee as CEO, then pursued menu innovation, kitchen efficiency, and service improvements. Olive Garden revenue, average check, and guest count rebounded. Full implementation took multiple years.",
      },
      {
        demand: "Real estate REIT separation to unlock hidden value",
        result: "partial",
        note: "The new board disposed of certain restaurant real estate via sale-leaseback and spun off Four Corners Property Trust as a REIT. A partial realization rather than a complete REIT conversion, but achieved meaningful value creation.",
      },
      {
        demand: "Reversal or re-examination of Red Lobster sale",
        result: "lost",
        note: "The Red Lobster sale to Golden Gate Capital was legally completed and irrevocable. Starboard ultimately abandoned this demand.",
      },
    ],
    stockImpact: {
      preCampaign: "~$47",
      peakDuringCampaign: "~$75",
      postCampaign: "~$68",
      note: "From ~$47 before the Starboard campaign (early 2014) to ~$75 approximately 18 months after the complete board replacement — a gain of approximately +60%. Estimated Starboard IRR of 30%+. Long-term stock stabilized in the $68–75 range.",
    },
  },

  // ── Deal Structure ───────────────────────────────────────────
  dealStructure: {
    body: "Starboard steadily purchased Darden Restaurants shares in the open market to build an 8.8% stake. After negotiations with management broke down, it pursued a proxy fight strategy, presenting alternative candidates for all 12 directors at the annual meeting. Having secured the support of major institutional investors, Starboard achieved an overwhelming victory at the October 10, 2014 annual meeting.",
    preOwnership: {
      nodes: [
        {
          id: "starboard",
          label: "Starboard Value",
          sub: "8.8% stake, demanding full board replacement",
          type: "acquirer",
        },
        {
          id: "darden-old-board",
          label: "Darden Board (12 Directors)",
          sub: "Existing management-supportive board — approved Red Lobster sale",
          type: "target",
        },
        {
          id: "darden-mgmt",
          label: "Darden Management",
          sub: "CEO Clarence Otis Jr., rejecting Starboard demands",
          type: "entity",
        },
        {
          id: "instit",
          label: "Institutional Investors",
          sub: "Vanguard 7.2%, BlackRock 6.5% (swing vote)",
          type: "fund",
        },
      ],
      edges: [
        { from: "starboard",     to: "darden-old-board", label: "8.8% stake (demanding full board replacement)" },
        { from: "darden-mgmt",   to: "darden-old-board", label: "Requesting re-election of current directors" },
        { from: "instit",        to: "darden-old-board", label: "~13.7% (neutral, decisive votes)" },
      ],
    },
    postOwnership: {
      nodes: [
        {
          id: "starboard-winner",
          label: "Starboard Value",
          sub: "Proxy fight decisive victory — all 12 nominated",
          type: "acquirer",
        },
        {
          id: "darden-new-board",
          label: "Darden Board (New 12 Directors)",
          sub: "All Starboard nominees elected (October 10, 2014)",
          type: "target",
        },
        {
          id: "gene-lee",
          label: "Gene Lee CEO",
          sub: "Appointed by new board, promoted from COO",
          type: "entity",
        },
        {
          id: "four-corners",
          label: "Four Corners Property Trust",
          sub: "Real estate REIT spin-off (partial realization)",
          type: "entity",
        },
      ],
      edges: [
        { from: "starboard-winner", to: "darden-new-board", label: "All 12 nominated directors elected" },
        { from: "darden-new-board",  to: "gene-lee",         label: "CEO appointment" },
        { from: "darden-new-board",  to: "four-corners",     label: "Real estate REIT spin-off decision" },
      ],
    },
    keyTerms: [
      { label: "Starboard Stake",          value: "8.8%",                              accent: true },
      { label: "Investment",               value: "~$560M" },
      { label: "Board Demand",             value: "Replace all 12 (unprecedented)",     accent: true },
      { label: "Annual Meeting Outcome",   value: "All 12 Starboard nominees elected",  accent: true },
      { label: "New CEO",                  value: "Gene Lee (internal COO promotion)" },
      { label: "Stock Appreciation",       value: "~$47 → ~$75 (~+60%)" },
      { label: "Estimated IRR",            value: "~30%+ (based on ~18 months holding)" },
    ],
  },

  // ── Advisors ─────────────────────────────────────────────────
  advisors: {
    body: "Both sides deployed significant legal, communications, and proxy advisory teams for a proxy fight of this scale. Starboard also engaged operational experts to maximize the persuasive power of its 294-page deck, while Darden assembled investment bank and legal advisory teams for its defense.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Starboard Value (Activist Side)",
        initials: "SV",
        bg: "bg-slate-700",
        advisors: [
          {
            firm: "Macquarie Capital",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Financial strategy support for Starboard campaign. Real estate REIT separation value analysis.",
          },
          {
            firm: "Schulte Roth & Zabel LLP",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Securities law and director nomination legal representation for the proxy fight.",
          },
          {
            firm: "Innisfree M&A Inc.",
            role: "Proxy Solicitation Advisor",
            roleType: "other",
            note: "Vote solicitation campaign to secure institutional and retail shareholder support for Starboard nominees.",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "Darden Restaurants (Defense Side)",
        initials: "DRI",
        bg: "bg-green-700",
        advisors: [
          {
            firm: "Goldman Sachs",
            role: "Financial Advisor",
            roleType: "financial",
            note: "Red Lobster sale advisory and defensive financial strategy support for Darden.",
          },
          {
            firm: "Skadden, Arps, Slate, Meagher & Flom LLP",
            role: "Legal Advisor",
            roleType: "legal",
            note: "Proxy fight defense legal representation. Annual meeting procedures and director election advisory.",
          },
          {
            firm: "Okapi Partners",
            role: "Proxy Solicitation Advisor",
            roleType: "other",
            note: "Vote solicitation campaign to support re-election of existing directors.",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisor information is based on public sources and may not reflect all advisory relationships.",
  },

  // ── Valuation ────────────────────────────────────────────────
  valuation: {
    body: "Starboard's investment thesis was straightforward: Darden's share price underperformance was due to operational inefficiency and unrealized real estate value. Replacing the board to execute operational improvements and a REIT separation would drive a meaningful share price recovery. At the campaign start price of ~$47, Starboard estimated intrinsic value at $70–80.",
    rows: [
      { item: "DRI Share Price (pre-campaign, early 2014)",    val: "~$47",   note: "Average at Starboard entry" },
      { item: "EV/EBITDA (FY2014)",                           val: "~8.8×",  note: "Discount to casual dining sector average at the time" },
      { item: "Starboard Intrinsic Value Estimate",           val: "$70–80", note: "Reflecting REIT separation and operational improvement", accent: true },
      { item: "Share Price Reaction on 294-Page Deck Release", val: "+2–3%", note: "Limited short-term reaction" },
      { item: "Share Price 1 Year After Board Replacement",   val: "~$65",   note: "Reflecting structural improvement expectations" },
      { item: "18-Month Peak After Board Replacement",        val: "~$75",   note: "~+60% gain achieved", accent: true },
      { item: "Estimated Starboard IRR",                      val: "30%+",   note: "Estimated based on ~18 months holding", accent: true },
    ],
    disclaimer:
      "Note: Share price and valuation figures are estimates based on public sources. May differ from Starboard's actual entry and exit prices.",
  },

  // ── Rationale ────────────────────────────────────────────────
  rationale: {
    buyer: {
      title: "What Starboard Saw in Darden",
      initials: "SV",
      bg: "bg-slate-700",
      points: [
        "Olive Garden's operational inefficiency represents a quantifiable earnings improvement opportunity — optimizing food costs, service processes, and menu composition alone could improve EBITDA margin by hundreds of basis points.",
        "Real estate REIT separation can unlock hidden asset value — the market value of hundreds of restaurant sites and buildings directly owned by Darden can be reflected in the share price.",
        "Red Lobster sale at a low price ($2.1B) proved management's inability to allocate capital — structural improvement impossible without board replacement.",
        "The extreme strategy of replacing all 12 directors can actually work in this structure — institutional investors had lost confidence in the existing board, and Starboard presented concrete alternatives.",
      ],
    },
    seller: {
      title: "Why Darden Management Resisted",
      initials: "DRI",
      bg: "bg-green-700",
      points: [
        "The Red Lobster sale was an unavoidable decision for strategic focus — rationalizing the portfolio by divesting non-core brands to concentrate investment on Olive Garden and LongHorn.",
        "Starboard's 294-page deck oversimplifies operational reality — an outside fund is underestimating the complexity of restaurant operations.",
        "An internal improvement plan (internal innovation roadmap) is already underway — can be resolved through internal capabilities without external intervention.",
        "Board replacement is an extreme measure that harms corporate stability — emphasizing execution risk from loss of management continuity.",
      ],
    },
  },

  // ── Post-Deal Assessment ─────────────────────────────────────
  postDealAssessment: {
    asOfDate: "May 2026",
    body: "After the full board replacement, Darden Restaurants showed meaningful change. New CEO Gene Lee, appointed by the new board, pursued Olive Garden menu innovation, service standardization, and food cost efficiency. The real estate business was spun off as a REIT via Four Corners Property Trust. The stock rose approximately 60% from ~$47 to ~$75 (two years later), and Starboard achieved an estimated IRR of 30%+. Starboard's 294-page deck is permanently enshrined in textbooks as 'the most famous activist document in history.'",
    overallVerdict: "Starboard decisive victory — a historic textbook case of operational activism and complete board replacement",
    positives: [
      "All 12 directors replaced — unprecedented complete victory for a U.S. listed company of this size.",
      "Olive Garden revenue and profit rebound — operational improvements visibly materializing under new board and CEO.",
      "Four Corners Property Trust REIT spin-off — partial realization of real estate value achieved.",
      "DRI stock ~$47 → ~$75 (~+60%), estimated Starboard IRR 30%+.",
      "294-page operational analysis deck — set a new standard for activism campaigns. The approach of proving operational inefficiency with numbers and specific examples impacted the entire industry.",
    ],
    risks: [
      "REIT separation demand not fully realized — partial asset disposals and REIT spin-off fell short of Starboard's original plan, achieving only partial value realization.",
      "Red Lobster sale could not be reversed — had to abandon one of the most important demands after intervening too late on a completed transaction.",
      "Sustainability of operational improvements uncertain — whether a full board replacement leads to lasting cultural change requires multi-year tracking.",
      "Structural headwinds in casual dining industry — fast-casual competition and food delivery app expansion are challenges that activism campaigns alone cannot solve.",
    ],
    editorNote:
      "The Starboard-Darden case simultaneously demonstrates two landmark innovations in activist investing. First, the extreme of operational activism — the 294-page document analyzing pasta recipes completely shattered the preconception of 'hedge funds only look at numbers.' Second, complete board replacement — unlike typical proxy fights targeting 1–2 directors, replacing all 12 created a result that was essentially equivalent to a change of control. Following this case, activist funds learned the lesson that 'how deep you dig determines who wins.'",
  },

  // ── Tombstone ───────────────────────────────────────────────
  tombstone: {
    acquirerInitials: "SV",
    acquirerBg: "bg-slate-700",
    targetInitials: "DRI",
    targetBg: "bg-green-700",
    acquirerName: "Starboard Value LP",
    targetName: "Darden Restaurants Inc.",
    dealTitle: "Starboard Value × Darden / Olive Garden Activism",
    dealSize: "~$560M (8.8% Stake)",
    dealSizeUSD: "~$560M",
    evEbitda: "N/A (Activism)",
    closeDate: "October 2014",
  },

  // ── Sources ──────────────────────────────────────────────────
  sources: [
    {
      id: 1,
      text: "Starboard Value LP, 'Transforming Darden Restaurants' — 294-Page Presentation (September 11, 2014)",
      url: "https://www.sec.gov/Archives/edgar/data/940944/000110465914068506/a14-20132_1ex99d1.htm",
    },
    {
      id: 2,
      text: "Darden Restaurants Inc., 2014 Annual Proxy Statement (DEF 14A) — Annual Meeting Results (October 2014)",
    },
    {
      id: 3,
      text: "SEC 13D Filing — Starboard Value LP, Darden Restaurants (2014)",
    },
    {
      id: 4,
      text: "Wall Street Journal, 'Starboard Value Replaces Entire Darden Board' (October 10, 2014)",
    },
    {
      id: 5,
      text: "New York Times, 'Hedge Fund's Olive Garden Critique Puts Pasta Salting on the Menu' (September 2014)",
    },
    {
      id: 6,
      text: "Darden Restaurants Annual Reports FY2013–FY2015",
    },
    {
      id: 7,
      text: "Bloomberg, 'Starboard Wins Darden Board in Historic Proxy Victory' (October 2014)",
    },
    {
      id: 8,
      text: "Four Corners Property Trust, Form 10-12 (REIT Spin-off SEC Filing, 2015)",
    },
  ],

  // ── SEO ─────────────────────────────────────────────────────
  seo: {
    title: "Starboard Value Olive Garden — Complete Analysis of the 294-Page Deck | Darden Activism",
    description:
      "Complete analysis of Starboard Value's activism campaign at Darden Restaurants. The 294-page deck, pasta salt controversy, first-ever replacement of all 12 board members in U.S. history. The textbook case of operational activism.",
    keywords: [
      "Starboard Value Olive Garden",
      "Darden Restaurants activism",
      "294-page deck",
      "restaurant activism",
      "Olive Garden pasta salt",
      "full board replacement",
      "proxy fight",
      "operational activism",
      "Jeff Smith Starboard",
      "Darden Restaurants proxy fight",
    ],
    ogImage: undefined,
  },

  // ── Concepts ─────────────────────────────────────────────────
  concepts: [
    {
      term: "Operational Activism",
      description:
        "A form of activism that goes beyond demanding governance changes to presenting specific operational improvement proposals. Starboard's 294-page Olive Garden analysis is the textbook case.",
    },
    {
      term: "Full Board Replacement",
      description:
        "The most extreme activism outcome where all existing directors are replaced by shareholder vote. The replacement of all 12 directors at the 2014 Darden annual meeting is unprecedented for a U.S. listed company of this size.",
    },
    {
      term: "Real Estate REITization",
      description:
        "A strategy where restaurant chains spin off owned land and buildings into a REIT to unlock latent value in the market. Demanded by Starboard from Darden; partially realized through Four Corners Property Trust.",
    },
    {
      term: "Proxy Fight",
      description:
        "A contest at the annual meeting between existing management and activist investors competing for shareholder support to win director election rights. The Starboard-Darden case is the most extreme example, resulting in complete board replacement.",
    },
    {
      term: "Sale-Leaseback",
      description:
        "A capital efficiency strategy where owned real estate is sold and then leased back from the buyer to continue operations. Darden used this approach to recover capital from certain restaurant properties.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────
  faq: [
    {
      q: "What was in Starboard Value's 294-page deck?",
      a: "Released on September 11, 2014, this document dissected Olive Garden's operational inefficiencies. It included observations that pasta water isn't salted — 'throwing away free flavor' — analysis that unlimited pre-meal breadsticks were being wastefully served, and criticism that margarita preparation was too slow and was harming the guest experience. Beyond financial analysis, it documented dozens of operational issues including outdated interiors, menu complexity, and inconsistent service standards, using data and photographs as evidence. It also included a real estate REIT separation strategy, criticism of the Red Lobster undervalued sale, and G&A cost reduction proposals.",
    },
    {
      q: "Why is replacing all 12 directors historically significant?",
      a: "In U.S. securities law and AGM practice, the typical goal of a proxy fight is to replace 1–3 directors. It is normal for the majority of the existing board to remain in place. But Starboard put forward 12 alternative candidates for all 12 directors, and shareholders agreed to replace all of them. This was effectively equivalent to a complete change of control. According to SEC records and M&A history, this was the first time in U.S. history that an entire board of a listed company of this size (~$6.5B market cap) was replaced through a proxy fight.",
    },
    {
      q: "Why did Starboard so strongly criticize the Red Lobster sale?",
      a: "Starboard believed the true value of Red Lobster, sold to Golden Gate Capital for $2.1B, was far higher. The biggest reason was the real estate Red Lobster owned — had that real estate been separated as a REIT, the sale price could have been significantly higher. The fact that it proceeded without shareholder approval was also cited as a governance issue. Golden Gate subsequently aggressively utilized the real estate after acquiring Red Lobster and earned substantial returns, which suggests Starboard's argument was correct.",
    },
    {
      q: "Was Gene Lee recruited from outside as CEO?",
      a: "No. Gene Lee was an insider at Darden Restaurants. He was serving as President and COO (Chief Operating Officer) at the time of the Starboard campaign. Rather than recruiting an outside executive as CEO, the new board appointed Lee — an internal executive with extensive operational experience — as CEO. This shows that Starboard's campaign focused on gaining control of the board to change strategic direction, rather than replacing the entire management team.",
    },
    {
      q: "How much did Starboard ultimately make?",
      a: "Starboard acquired an 8.8% stake (~$560M) in DRI at around $47 in early 2014. Approximately 18 months after the full board replacement, the stock rose to ~$75. In absolute return terms, the value of the stake increased to approximately $850M, suggesting an estimated mark-to-market gain of approximately $290M. On an IRR basis, approximately 30%+ is estimated. Including the value from the Four Corners Property Trust REIT spin-off, the actual returns were likely even higher.",
    },
    {
      q: "Did Olive Garden actually improve after this campaign?",
      a: "Yes, there were measurable improvements. Under CEO Gene Lee, Olive Garden simplified its menu and raised quality standards, and guest counts and average check recovered. The unlimited breadstick policy was maintained but service delivery improved. Kitchen standardization and food cost efficiency improved EBITDA margin. The clearest evidence is that Olive Garden same-store sales (comp sales) turned positive in 2015–2016. However, it is difficult to precisely isolate causality between these improvements being a direct result of the Starboard campaign versus a reflection of CEO Lee's leadership.",
    },
    {
      q: "What is Operational Activism and why is this case important?",
      a: "Traditional activism focuses primarily on capital structure changes (buybacks, dividend increases), asset divestitures, and governance improvements. Operational activism goes one step further, analyzing and proposing improvements to a company's specific day-to-day operations — recipes, service procedures, supply chains, marketing messages, and so on. The Starboard-Darden case vividly demonstrated the potential of this approach. Subsequently, many activist funds strengthened their operational analysis capabilities, and corporate management became more vigilant knowing 'this kind of analysis can come at any time.'",
    },
  ],
};

export default deal;
